/**
 * SmartVAT OS — composition root.
 *
 * Layers the gavaconnect KRA client under the compliance product layers so an
 * application can drive filings (via providers), deadlines, health scores,
 * exposure screens, amnesty/refund diagnosis, benchmarks and the rules
 * assistant from one object. Kept dependency-light: each layer is also
 * importable directly.
 */

export * from "./types.js"
export * from "./deadlines.js"
export * from "./health.js"
export * from "./exposure.js"
export * from "./benchmarks.js"
export * from "./intel.js"
export * from "./filing.js"
export * from "./whatsapp.js"
export * from "./mpesa.js"
export * from "./client.js"
export * from "./gavawiring.js"
export * from "./store.js"
export * from "./reminders.js"
export * from "./transport.js"
export * from "./whatsapp-transport.js"
export * from "./mpesa-transport.js"
export * from "./llm.js"
export * from "./portal-adapter.js"
export * from "./fullclient.js"
export * from "./payments.js"
export * from "./webhooks.js"
export * from "./taxke.js"
export * from "./dojah.js"
export * from "./pin.js"
export * from "./vat.js"
export * from "./protax.js"

import { DeadlineConfig, planPeriod, dueWithin } from "./deadlines.js"
import { computeHealth, HealthInput } from "./health.js"
import { diagnoseAmnesty, AmnestyInput, screenSuppliers, SpecialTableChecker, SupplierRecord, assessRefund, RefundInput } from "./exposure.js"
import { compareToBenchmark, BENCHMARKS } from "./benchmarks.js"
import { TaxAssistant, buildKnowledgeBase, LlmPort, Rule } from "./intel.js"

export interface SmartVatOsOptions {
  deadlines?: DeadlineConfig
  assistant?: AssistantConfig
}

export interface AssistantConfig {
  /** llm port for grounded answers. */
  llm?: LlmPort
  /** Extra rules appended to the KB. */
  extraRules?: Rule[]
  topK?: number
}

/**
 * A small facade over the layers. It holds minimal state (a deadline config and
 * the assistant); every other method is a pure computation or an injected port,
 * so it is trivially testable and safe to construct per-request.
 */
export class SmartVatOs {
  private readonly deadlineConfig: DeadlineConfig
  readonly assistant: TaxAssistant

  constructor(opts: SmartVatOsOptions = {}) {
    this.deadlineConfig = opts.deadlines ?? {}
    this.assistant = new TaxAssistant({
      llm: opts.assistant?.llm,
      kb: buildKnowledgeBase(opts.assistant?.extraRules),
      topK: opts.assistant?.topK,
    })
  }

  /* ---- deadline engine ---- */

  planPeriod(period: string) {
    return planPeriod(period, this.deadlineConfig)
  }

  dueWithin(daysAhead: number) {
    return dueWithin(daysAhead, this.deadlineConfig)
  }

  /* ---- health / exposure ---- */

  health(input: HealthInput) {
    return computeHealth(input)
  }

  screenSuppliers(checker: SpecialTableChecker, suppliers: SupplierRecord[]) {
    return screenSuppliers(checker, suppliers)
  }

  amnesty(input: AmnestyInput) {
    return diagnoseAmnesty(input)
  }

  refund(input: RefundInput) {
    return assessRefund(input)
  }

  /* ---- benchmarks ---- */

  benchmarks() {
    return BENCHMARKS
  }

  benchmark(sector: string, clientInputVatRatio: number) {
    return compareToBenchmark(sector, clientInputVatRatio)
  }

  /* ---- assistant ---- */

  ask(query: string) {
    return this.assistant.ask(query)
  }
}