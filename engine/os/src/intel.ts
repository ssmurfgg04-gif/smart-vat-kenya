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
    title: "VAT Special Table",
    keywords: ["special", "table", "vat", "input", "blocked", "supplier", "flag"],
    body: "The Special Table is KRA's compliance-review list. A flagged supplier's invoices cause iTax to automatically block input-VAT claims against them. Check suppliers before claiming.",
    source: "KRA VAT Special Table",
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
    body: "From January 2026, KRA validates declared income and expenses against eTIMS data, withholding tax records and customs import data. Any expense claimed without a valid eTIMS invoice is automatically disallowed and treated as taxable profit. Reconcile eTIMS invoice values to declared output VAT to avoid automatic queries.",
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
  { query: "do I need etims as a small business", expected: ["etims-mandate"] },
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
  { query: "what penalty for not registering for vat", expected: ["non-registration-penalty", "vat-registration-threshold"] },
]