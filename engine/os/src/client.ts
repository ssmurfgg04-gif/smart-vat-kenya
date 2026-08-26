import { Messenger, WaMessage } from "./whatsapp.js"
import { BillingGateway, LipaStkRequest, PaymentReceipt } from "./mpesa.js"
import { FilingService } from "./filing.js"
import { TaxAssistant, LlmAnswer } from "./intel.js"
import { validateReturn, ValidationInput, ValidationOutput } from "./validation.js"

/* ------------------------------------------------------------------ */
/* SmartVAT Client layer - the per-client portal/workflow shell.        */
/*                                                                      */
/* Binds a client's WhatsApp number, filing service, M-PESA gateway and */
/* the compliance assistant so a conversation (or a bot) can drive:     */
/*   1. answer KRA questions with the grounded assistant                 */
/*   2. list the filing periods due and run them                         */
/*   3. initiate an M-PESA STK push for a subscription payment           */
/* All external I/O is via injected ports => unit-testable offline.      */
/* ------------------------------------------------------------------ */

export interface ClientConfig {
  clientId: string
  /** WhatsApp number of the taxpayer (E.164 without +). */
  phone: string
  messenger: Messenger
  billing: BillingGateway
  assistant: TaxAssistant
  filing: FilingService
  /** How many days ahead to run the filing list (default 10). */
  runDays?: number
}

export interface ClientHandle {
  readonly clientId: string
  ask(query: string): Promise<LlmAnswer>
  due(daysAhead: number): ReturnType<FilingService["buildTasks"]>
  runFiling(): Promise<Awaited<ReturnType<FilingService["runAll"]>>>
  /** Pre-flight a proposed return against the 2026 validation engine before filing. */
  preflight(input: ValidationInput): ValidationOutput
  notify(body: string): Promise<Awaited<ReturnType<Messenger["send"]>>>
  pay(amount: number, reference?: string): Promise<{ merchantRequestId: string }>
  recordPayment(receipt: PaymentReceipt): Promise<PaymentReceipt>
}

export function toWaMessage(clientId: string, phone: string, body: string): WaMessage {
  return { clientId, to: phone, body }
}

export function createClient(cfg: ClientConfig): ClientHandle {
  const runDays = cfg.runDays ?? 10
  return {
    clientId: cfg.clientId,
    ask: (query) => cfg.assistant.ask(query),
    due: (daysAhead) => cfg.filing.buildTasks(daysAhead),
    runFiling: () => cfg.filing.runAll(runDays),
    preflight: (input: ValidationInput) => validateReturn(input),
    notify: (body) => cfg.messenger.send(toWaMessage(cfg.clientId, cfg.phone, body)),
    pay: (amount, reference) => {
      const req: LipaStkRequest = {
        phone: cfg.phone,
        amount,
        accountReference: reference ?? `${cfg.clientId}-sub`,
        transDesc: `SmartVAT ${cfg.clientId} subscription`,
      }
      return cfg.billing.stkPush(req)
    },
    recordPayment: (receipt) => Promise.resolve(receipt),
  }
}
