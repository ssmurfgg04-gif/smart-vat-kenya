/**
 * SmartVAT OS intelligence layer: a KRA-rules knowledge base, lexical retrieval,
 * a pluggable LLM port, and a golden-dataset eval harness that scores retrieval
 * against expected rule ids.
 *
 * Retrieval is deterministic and fully offline-testable. The LLM port is injected
 * so the assistant works (and can be unit-tested) before any provider is wired --
 * the same "pluggable provider" pattern as gavaconnect's filing.ts.
 */

export interface Rule {
  id: string
  title: string
  keywords: string[]
  body: string
  source?: string
}

const TOKENIZE = /\b[a-z0-9]+(?:-[a-z0-9]+)*\b/g

function tokens(text: string): Set<string> {
  return new Set(text.toLowerCase().match(TOKENIZE) ?? [])
}

/** Request-time token classes that are too generic to score on alone. */
const STOP = new Set([
  "kenya", "kra", "vat", "the", "and", "for", "with", "2026", "me", "my", "a",
  "i", "do", "how", "what", "if", "is", "or", "to", "of", "in", "-",
])

/** Default knowledge base (verifiable, keep accurate). Kept separate from retrieval. */
export const DEFAULT_RULES: Rule[] = [
  {
    id: "late-vat-filing-penalty",
    title: "Late VAT filing penalty",
    keywords: ["late", "filing", "penalty", "10,000", "deadline", "20th", "penalties"],
    body: "KRA charges the higher of KES 10,000 or 5% of the tax due for a late VAT return, plus 1% monthly interest on unpaid VAT. VAT returns are due by the 20th of the month following the period.",
    source: "KRA VAT penalties / TPA 2015",
  },
  {
    id: "vat-registration-threshold",
    title: "VAT registration threshold",
    keywords: ["register", "registration", "threshold", "8 million", "5 million", "turnover", "voluntary", "mandatory"],
    body: "The operative mandatory registration threshold is an annual taxable turnover of KES 5,000,000 (VAT Act 2013 s.34); below it, registration is voluntary (subject to conditions). The Finance Act 2025 proposed raising the mandatory threshold to KES 8,000,000, but that change did not take effect. Non-registration when compulsory attracts the higher of KES 100,000 or the tax that would have been due.",
    source: "VAT Act 2013 (s.34) / Finance Act 2025 proposal",
  },
  {
    id: "non-registration-penalty",
    title: "Non-registration penalty",
    keywords: ["register", "registration", "penalty", "100,000", "threshold", "5 million", "penalties"],
    body: "Failure to register for VAT when mandatory (annual taxable turnover at or above the operative KES 5,000,000 threshold) attracts the higher of KES 100,000 or the tax that would have been due.",
    source: "VAT Act 2013 (s.34) / TPA 2015",
  },
  {
    id: "vat-refund-window",
    title: "VAT refund claim window (12 months)",
    keywords: ["refund", "claim", "window", "12 months", "24", "input", "time limit", "credit"],
    body: "Under the Finance Act 2025 the claim window for input-VAT / VAT refunds was shortened from 24 months to 12 months. A refund credit older than 12 months is stale and at risk of disallowance, so it must be claimed before the window lapses.",
    source: "Finance Act 2025",
  },
  {
    id: "etims-mandate",
    title: "eTIMS mandatory for all businesses",
    keywords: ["etims", "mandatory", "invoice", "electronic", "onboarding", "device"],
    body: "All businesses -- VAT-registered or not -- must onboard eTIMS and issue electronic invoices. KRA validates VAT returns against eTIMS data; missing invoices can disallow expense claims.",
    source: "KRA eTIMS mandate",
  },
  {
    id: "amnesty-2026",
    title: "KRA Tax Amnesty 2026",
    keywords: ["amnesty", "waiver", "2026", "penalty", "interest", "31 december", "penalties"],
    body: "The Finance Act 2026 reintroduced a 100% waiver of penalties, interest and fines on debts accrued up to 31 Dec 2025. Three paths: automatic (principal paid), file outstanding returns, or pay principal. Window closes 31 Dec 2026.",
    source: "Finance Act 2026 / KRA",
  },
  {
    id: "special-table",
    title: "VAT Special Table (discontinued March 2026)",
    keywords: ["special", "table", "vat", "input", "blocked", "supplier", "flag"],
    body: "The VAT Special Table was discontinued in March 2026: most taxpayers were removed unconditionally by 12 March 2026, and it now applies only in limited missing-trader / tax-fraud cases with Deputy Commissioner approval. Historic input-VAT blocks against listed suppliers are no longer the default. Supplier due diligence now runs through the eTIMS invoice-checker and KRA 'Tax Alerts', not the old Special Table.",
    source: "KRA public notice, March 2026 / EY Tax Alert",
  },
  {
    id: "kra-tax-alerts",
    title: "KRA Tax Alerts (early-warning system)",
    keywords: ["tax", "alerts", "warning", "invoice", "refund", "ring", "flag", "early", "risk"],
    body: "From April 2026 KRA replaced the old VAT Special Table with 'Tax Alerts' — an early-warning system that notifies a taxpayer about invoicing/compliance issues that could complicate their VAT refunds or claims, rather than blocking input today. Monitor alerts, fix the underlying invoicing issue, and it typically clears without a restriction.",
    source: "KRA Tax Alerts, April 2026",
  },
  {
    id: "input-vat-time-limit",
    title: "Input VAT claiming rules",
    keywords: ["input", "vat", "claim", "credit", "invoice", "time", "deduction", "6 months"],
    body: "Input VAT is recoverable when supported by a compliant eTIMS invoice and used for taxable supplies, and must be claimed in the return for the period incurred or within 6 months after the end of that tax period (VAT Act 2013 s.17). Blocked (flagged supplier) or stale claims need extra documentation and may be disallowed. Do not confuse this with the refund window: excess VAT refund applications must be lodged within 12 months (Finance Act 2025, reduced from 24).",
    source: "VAT Act 2013 / Finance Act 2025",
  },
  {
    id: "tcc",
    title: "Tax Compliance Certificate",
    keywords: ["tcc", "compliance", "certificate", "tenders", "valid", "clearance"],
    body: "A valid Tax Compliance Certificate gates tenders and big-buyer contracts. It is revoked if the taxpayer misses filings or obligations.",
    source: "KRA TCC",
  },
  {
    id: "vat-rate-changes",
    title: "VAT rates in Kenya",
    keywords: ["vat", "rate", "16%", "standard", "exempt", "zero-rated", "output"],
    body: "Kenya's standard VAT rate is 16%. Certain supplies are zero-rated (e.g. exports, essential foodstuffs) or exempt (e.g. residential rent, medical). Correct classification drives output-VAT and refund eligibility.",
    source: "VAT Act 2013",
  },
{
    id: "vat-return-cycle",
    title: "VAT return cycle",
    keywords: ["return", "20th", "every month", "cycle", "nil return", "monthly"],
    body: "VAT returns are filed monthly by the 20th of the following month, including nil returns. Failure to file a nil return still attracts penalties.",
    source: "KRA VAT return guidelines",
  },
  {
    id: "etims-import",
    title: "eTIMS transactions and import",
    keywords: ["import", "etims", "transfer", "reconcile", "transaction", "purchases"],
    body: "Purchases of goods/services imported or received by a business must be recorded in eTIMS and reconciled against input VAT. Physical and electronic invoices must match iTax records.",
    source: "KRA eTIMS guide",
  },
  {
    id: "interest-rate",
    title: "Monthly interest on unpaid VAT",
    keywords: ["interest", "1%", "monthly", "unpaid", "rate", "prompt"],
    body: "Unpaid VAT accrues 1% monthly interest from the date it is due until settled, on top of the 5% late-payment penalty. Interest is computed per month (or part month) on the unpaid principal.",
    source: "TPA 2015",
  },
  {
    id: "penalty-upper-limit",
    title: "Penalty caps",
    keywords: ["penalty", "cap", "maximum", "5%", "limit", "thousand", "penalties"],
    body: "Late-filing penalty is the higher of KES 10,000 or 5% of tax due. Understatement attracts up to 20% of the understated tax, capped at KES 2,000,000 in certain cases.",
    source: "TPA 2015",
  },
  {
    id: "vat-deregistration",
    title: "VAT deregistration",
    keywords: ["deregister", "cancel", "registration", "no longer", "deactivate", "close"],
    body: "A business may apply to deregister for VAT when turnover stays below the threshold for a sustained period, or when the business closes. Deregistration requires final winding-up compliance.",
    source: "VAT Act 2013",
  },
  {
    id: "finance-act-2026-digital-vat",
    title: "VAT on digital payment services (Finance Act 2026)",
    keywords: ["finance", "act", "2026", "digital", "payment", "money", "transfer", "gateway", "psp", "commission", "interchange", "merchant", "vat"],
    body: "From 1 July 2026, commissions on payment processing, settlement, merchant acquiring, gateway and aggregation services supplied over software or platforms are standard-rated for VAT (16%). Mobile money person-to-person transfer charges (M-Pesa, Airtel Money) were spared in the final law, but gateway/settlement services such as Pesapal, Paystack, Cellulant and Flutterwave are VATable.",
    source: "Finance Act 2026",
  },
  {
    id: "wht-payment-fees",
    title: "Withholding tax on payment / interchange fees",
    keywords: ["withholding", "wht", "interchange", "merchant", "service", "fee", "card", "royalty", "payment", "network"],
    body: "The Finance Act 2026 expands 'management or professional fees' subject to withholding tax to include interchange fees and merchant service fees from card-based transactions, and broadens 'royalty' to cover payments for software, digital platforms and payment-network services. Non-resident providers face WHT at source.",
    source: "Finance Act 2026",
  },
  {
    id: "etims-reverse-invoicing",
    title: "eTIMS reverse (buyer-initiated) invoicing",
    keywords: ["reverse", "buyer", "initiated", "invoice", "supplier", "informal", "small", "b2b", "etims"],
    body: "Buyers may generate eTIMS invoices on behalf of suppliers who are unable or unwilling to issue compliant invoices: supplier turnover under KES 5M, supplier not eTIMS-exempt, expense needs eTIMS support, and invoice is for accounting/tax-deduction purposes. The buyer must have supplier consent and be KYC-approved; invoices are issued in KES. You cannot reverse-invoice for a VAT-registered supplier.",
    source: "KRA eTIMS reverse invoicing guidance (TPA Amendment Act 2024)",
  },
  {
    id: "icms-export-prefill",
    title: "Export VAT returns pre-filled from customs (iCMS)",
    keywords: ["export", "icms", "prefill", "pre-filled", "zero-rated", "customs", "vat", "return", "itax"],
    body: "From May 2026, validated export transactions in the Integrated Customs Management System (iCMS) are automatically pre-filled as zero-rated supplies in the iTax VAT return. Manual export entry is eliminated; exporters must ensure iCMS declarations carry their PIN and a valid eTIMS zero-rated invoice number. Returns are becoming confirmation tools, not primary declarations.",
    source: "KRA public notice, May 2026",
  },
  {
    id: "income-expense-validation",
    title: "Income & expense validation engine (2026)",
    keywords: ["income", "expense", "validation", "engine", "disallowed", "deduction", "etims", "invoice", "reconcile"],
    body: "From January 2026, KRA validates declared income and expenses against eTIMS data, withholding tax records and customs import data. Any expense claimed without a valid eTIMS invoice is automatically disallowed and treated as taxable profit. Matches within ~5% are typically ignored; larger mismatches trigger a query letter with a 14-day review response window and can escalate to audit. For the 2025 year of income, valid expenses not yet supported by eTIMS/TIMS invoices can be uploaded at filing and are validated after submission. Reconcile eTIMS invoice values to declared output VAT to avoid automatic queries.",
    source: "KRA income/expense validation engine",
  },
  {
    id: "pin-format",
    title: "KRA PIN format",
    keywords: ["pin", "format", "structure", "11", "a", "p", "regex", "valid"],
    body: "A KRA PIN is exactly 11 characters: a starting letter (A for individuals/sole proprietors, P for companies), nine digits, then a terminal letter (e.g. A123456789Z, P123456789Z). Validate the PIN format before issuing a B2B eTIMS invoice — an invalid buyer PIN causes invoice rejection and blocks the buyer's input-VAT claim.",
    source: "KRA PIN format",
  },
  {
    id: "etims-credit-note",
    title: "eTIMS credit notes",
    keywords: ["credit", "note", "reversal", "etims", "adjustment", "refund", "invoice"],
    body: "An eTIMS invoice cannot be deleted once generated. Corrections require issuing a credit note through eTIMS referencing the original invoice and control number, then issuing a corrected invoice. Credit notes must also go through eTIMS - not a manual books adjustment.",
    source: "KRA eTIMS guide",
  },
  {
    id: "bad-debt-refund",
    title: "VAT bad-debt refund (3-year wait)",
    keywords: ["bad", "debt", "refund", "unpaid", "default", "insolvent", "liquidation", "receivership", "3 years", "write off", "relief"],
    body: "A supplier can reclaim VAT already remitted on an invoice the customer never paid. Since 1 July 2026 the wait is 3 years from the date of supply (VAT Act s.31; the Finance Act 2025 had cut it to 2, the Finance Act 2026 restored 3). The wait is waived if the debtor enters statutory management, receivership or liquidation. Requirements: eTIMS-compliant invoice, VAT accounted for, reasonable recovery steps taken, debt written off, and the customer is not a related party.",
    source: "VAT Act 2013 (s.31) / Finance Act 2025 / Finance Act 2026",
  },
  {
    id: "fa2026-rate-moves",
    title: "VAT rate moves from 1 July 2026",
    keywords: ["finance", "act", "2026", "zero-rated", "exempt", "standard", "rate", "electric", "bicycle", "solar", "battery", "dialyzer", "scrap", "reclassify", "pharmaceutical"],
    body: "From 1 July 2026 the Finance Act 2026 moved: electric bicycles and solar batteries (outside tariff heading 8507.60.00) from zero-rated to standard-rated (16%); inputs/raw materials to pharmaceutical manufacturers and bioethanol-vapour (BEV) stove inputs from zero-rated to exempt; dialyzers (tariff 8421.29.00) and scrap metal from standard-rated to exempt; tourism/convention facility construction supplies and cash-restocking services from exempt to standard-rated. On Chapter 88/aviation (post-enactment, narrower than the original bill): small aircraft with unladen weight not exceeding 2,000 kg (e.g. helicopters 8802.11/8802.12 and light aircraft 8802.20) moved from exempt to standard-rated 16%; aircraft of unladen weight exceeding 2,000 kg but not exceeding 15,000 kg (8802.30) and exceeding 15,000 kg (8802.40) and spacecraft (8802.60) remain VAT-exempt; direction-finding compasses, instruments and appliances for aircraft moved from exempt to standard-rated 16%; aircraft spare parts imported by aircraft operators or persons engaged in the business of aircraft maintenance upon recommendation of the competent authority responsible for civil aviation REMAIN exempt (the Chapter 88 parts exemption for operators/maintenance was preserved after lobbying), so do not state that all aircraft spare parts are now 16%.",
    source: "Finance Act 2026 (as enacted) / KRA TIMS VAT schedules July 2026 / EY Tax Alert on enactment",
  },
  {
    id: "etims-invoice-penalty",
    title: "eTIMS non-compliance penalties",
    keywords: ["etims", "penalty", "invoice", "non-compliance", "s.86", "s.59A", "regulation", "integrate", "device", "5%", "tax due"],
    body: "A person carrying on business must issue electronic tax invoices through the eTIMS system (TPA s.23A; Tax Procedures (Electronic Tax Invoice) Regulations, LN 64/2024, reg 12 refers breaches to s.86). For failing to issue an electronic tax invoice, file a return electronically or pay tax electronically, the penalty under TPA s.86 as amended by the Finance Act 2026 (effective 1 July 2026) is the higher of 5% of the tax due, KES 100,000 for companies, or KES 10,000 for individuals - applied after the Commissioner issues a notice and considers whether the failure was beyond the taxpayer's control and whether reasonable steps to comply were taken. From 1 September 2023 to 30 June 2026 the s.86 penalty was two times the tax due (Finance Act 2023). Separately, a business with turnover above KES 5 million that the Commissioner has notified to integrate its system with KRA's data management and reporting system (TPA s.59A(1A)) and that fails to comply is liable, on conviction, to a penalty not exceeding KES 100,000 for every month or part thereof (TPA s.59A(5)). Figures circulating such as KES 500,000 per month or KES 1 million or 10% of the tax were proposals in the 2023/2024 bills and were never enacted. These penalties are on top of late-filing and late-payment penalties.",
    source: "TPA 2015 (s.86, s.59A) / Finance Act 2026 / Finance Act 2023 / LN 64/2024",
  },
  {
    id: "etims-mandate-all-businesses",
    title: "eTIMS applies to all businesses",
    keywords: ["etims", "mandatory", "all", "business", "everyone", "register", "registered", "unregistered", "non-vat", "turnover", "5 million", "need"],
    body: "eTIMS is mandatory for all persons engaged in business - including non-VAT-registered businesses - not just VAT-registered ones. Any business with annual turnover above KES 5 million must comply regardless of VAT status, and KRA has progressively extended enforcement to smaller businesses. TCC issuance now depends on eTIMS registration.",
    source: "KRA eTIMS mandate",
  },
]

export function buildKnowledgeBase(extra: Rule[] = []): Rule[] {
  return [...DEFAULT_RULES, ...extra]
}

/** Lexical retrieval: score rules by query-token overlap, minus stopwords. */
export function retrieve(query: string, rules: Rule[], topK = 3): Rule[] {
  const qt = new Set<string>()
  for (const t of tokens(query)) if (!STOP.has(t)) qt.add(t)
  const scored = rules.map((rule) => {
    const kt = tokens([rule.title, ...rule.keywords].join(" "))
    let score = 0
    for (const t of qt) if (kt.has(t)) score++
    return { rule, score }
  })
  scored.sort((a, b) => b.score - a.score || a.rule.id.localeCompare(b.rule.id))
  return scored.filter((s) => s.score > 0).slice(0, topK).map((s) => s.rule)
}

/* ------------------------------------------------------------------ */
/* LLM port + assistant                                                 */
/* ------------------------------------------------------------------ */

export interface LlmAnswer {
  text: string
  source: string[]
}

export interface LlmPort {
  complete(query: string, context: Rule[]): Promise<LlmAnswer>
}

/** Deterministic offline fallback that cites the retrieved rule bodies. */
export function localFallbackLlm(): LlmPort {
  return {
    async complete(_query: string, context: Rule[]): Promise<LlmAnswer> {
      const text =
        context.length === 0
          ? "I could not find a matching KRA rule. Try 'late filing', 'amnesty', 'eTIMS', 'Special Table' or 'TCC'."
          : context.map((r) => r.body).join("\n\n")
      return { text, source: context.map((r) => r.id) }
    },
  }
}

export interface AssistantOptions {
  llm?: LlmPort
  kb?: Rule[]
  topK?: number
}

export class TaxAssistant {
  private readonly llm: LlmPort
  private readonly kb: Rule[]
  private readonly topK: number

  constructor(opts: AssistantOptions = {}) {
    this.llm = opts.llm ?? localFallbackLlm()
    this.kb = opts.kb ?? buildKnowledgeBase()
    this.topK = opts.topK ?? 3
  }

  /** Grounded answer: retrieve the top rules, hand them to an LLM (or fallback). */
  async ask(query: string): Promise<LlmAnswer> {
    const ctx = retrieve(query, this.kb, this.topK)
    return this.llm.complete(query, ctx)
  }
}

/* ------------------------------------------------------------------ */
/* Golden-dataset eval                                                   */
/* ------------------------------------------------------------------ */

export interface GoldenItem {
  query: string
  /** Expected rule ids that should surface. */
  expected: string[]
}

export interface EvalReport {
  total: number
  hits: number
  precision: number
  /** Fraction of cases where at least one expected rule surfaced in topK. */
  recallAtK: number
  topK: number
  failures: Array<{ query: string; expected: string[]; got: string[] }>
}

export function evaluateRetrieval(items: GoldenItem[], kb: Rule[], topK = 3): EvalReport {
  let hits = 0
  const failures: EvalReport["failures"] = []
  for (const it of items) {
    const got = retrieve(it.query, kb, topK).map((r) => r.id)
    const surfaced = it.expected.filter((e) => got.includes(e)).length
    if (surfaced > 0) hits++
    else failures.push({ query: it.query, expected: it.expected, got })
  }
  const total = items.length
  return {
    total,
    hits,
    precision: total === 0 ? 0 : hits / total,
    recallAtK: total === 0 ? 0 : hits / total,
    topK,
    failures,
  }
}

/** Curated golden set used to guard retrieval quality as the KB grows. */
export const GOLDEN_SET: GoldenItem[] = [
  { query: "how much is the late vat filing penalty", expected: ["late-vat-filing-penalty"] },
  { query: "what interest do I owe on unpaid vat", expected: ["interest-rate"] },
  { query: "amnesty 2026 penalty waiver", expected: ["amnesty-2026"] },
  { query: "supplier on the special table blocks my input vat", expected: ["special-table"] },
  { query: "is the vat special table still active in 2026", expected: ["special-table", "kra-tax-alerts"] },
  { query: "what are kra tax alerts and what do they mean", expected: ["kra-tax-alerts"] },
  { query: "kra flagged my invoice with a tax alert", expected: ["kra-tax-alerts"] },
  { query: "do I need etims as a small business", expected: ["etims-mandate", "etims-mandate-all-businesses"] },
  { query: "when must I submit my vat return", expected: ["vat-return-cycle"] },
  { query: "standard vat rate in kenya 16%", expected: ["vat-rate-changes"] },
  { query: "my tcc is expired and i have tenders", expected: ["tcc"] },
  { query: "can I deregister for vat now", expected: ["vat-deregistration"] },
  { query: "what is the maximum penalty I could face", expected: ["penalty-upper-limit", "late-vat-filing-penalty"] },
  { query: "recover input vat from imported purchases", expected: ["etims-import", "input-vat-time-limit"] },
  { query: "how long can I claim input vat", expected: ["input-vat-time-limit"] },
  { query: "is vat charged on payment gateway commissions 2026", expected: ["finance-act-2026-digital-vat"] },
  { query: "are m-pesa transfer fees subject to vat", expected: ["finance-act-2026-digital-vat"] },
  { query: "withholding tax on card interchange and merchant fees", expected: ["wht-payment-fees"] },
  { query: "buyer initiated invoice for informal supplier", expected: ["etims-reverse-invoicing"] },
  { query: "are exports pre-filled into my vat return now", expected: ["icms-export-prefill"] },
  { query: "kra disallows expenses without etims invoice", expected: ["income-expense-validation", "etims-mandate"] },
  { query: "what does a valid kra pin look like", expected: ["pin-format"] },
  { query: "how do I correct an etims invoice", expected: ["etims-credit-note"] },
  { query: "when must I register for vat in kenya", expected: ["vat-registration-threshold"] },
  { query: "is registration voluntary below 8 million", expected: ["vat-registration-threshold"] },
  { query: "how long do I have to claim a vat refund", expected: ["vat-refund-window", "input-vat-time-limit"] },
  { query: "refund older than 12 months disallowed", expected: ["vat-refund-window"] },
  { query: "how long must I wait to claim vat back on an unpaid invoice", expected: ["bad-debt-refund"] },
  { query: "customer went into liquidation can I reclaim the vat now", expected: ["bad-debt-refund"] },
  { query: "are electric bicycles zero rated in 2026", expected: ["fa2026-rate-moves"] },
  { query: "is scrap metal charged vat now", expected: ["fa2026-rate-moves"] },
  { query: "how much is the etims penalty for no invoice", expected: ["etims-invoice-penalty", "etims-mandate-all-businesses"] },
  { query: "do I need etims if I am not vat registered", expected: ["etims-mandate-all-businesses"] },
  { query: "what penalty for not registering for vat", expected: ["non-registration-penalty", "vat-registration-threshold"] },
]