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
    id: "non-registration-penalty",
    title: "Non-registration penalty",
    keywords: ["register", "registration", "penalty", "100,000", "threshold", "5 million", "penalties"],
    body: "Failure to register for VAT when the KES 5 million annual taxable-turnover threshold is met attracts the higher of KES 100,000 or the tax that would have been due.",
    source: "VAT Act 2013",
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
    keywords: ["input", "vat", "claim", "credit", "invoice", "time", "deduction"],
    body: "Input VAT is recoverable when supported by a compliant eTIMS invoice and used for taxable supplies. Blocked (flagged supplier) and stale (6+ months) claims need extra documentation and may be disallowed.",
    source: "VAT Act 2013",
  },
  {
    id: "tcc",
    title: "Tax Compliance Certificate",
    keywords: ["tcc", "compliance", "certificate", "tenders", "valid", "clearance"],
    body: "A valid Tax Compliance Certificate gates tenders and big-buyer contracts. It is revoked if the taxpayer misses filings or obligations.",
    source: "KRA TCC",
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