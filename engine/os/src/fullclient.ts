import { GavaClient } from "@smartvat/gavaconnect"
import { ClientStore, createInMemoryStore, StoredClient } from "./store.js"
import { createPortalAdapter, ClientOnboarder } from "./portal-adapter.js"
import { createWiredFilingService, GavaWiringOptions } from "./gavawiring.js"
import { FilingService, FilingOutcome } from "./filing.js"
import { Messenger, createInMemoryMessenger } from "./whatsapp.js"
import { BillingGateway, createInMemoryGateway, LipaStkRequest } from "./mpesa.js"
import { TaxAssistant } from "./intel.js"
import { createClient, ClientHandle } from "./client.js"
import { buildReminderPlan, dispatchReminders, SchedulerOptions } from "./reminders.js"

/**
 * FullEngine - the Phase-1 product wiring assembled from parts.
 *
 *   - a real `GavaClient` (PIN → TCC → obligations → supplier) becomes the
 *     portal adapter,
 *   - a `FilingService` wired over that same client files on the 17th,
 *   - the store + scheduler drive "remind → simplify → deterrence",
 *   - WhatsApp + M-PESA are pluggable transports (in-memory here),
 *   - the assistant answers grounded questions.
 *
 * Everything is injectable so the object can run fully offline and swap to live
 * providers without changing engine code.
 */

export interface FullEngineConfig {
  gava?: GavaClient
  store?: ClientStore
  messenger?: Messenger
  billing?: BillingGateway
  assistant?: TaxAssistant
  wiring?: GavaWiringOptions
  reminders?: SchedulerOptions
  /** Monthly subscription to push to active clients (KES). */
  subscriptionAmount?: number
}

export interface SweepResult {
  reminders: { sent: number; total: number }
  filings: FilingOutcome[]
  payments: number // count of STK pushes initiated
  billedTotal: { amount: number; count: number }
}

export function createFullEngine(cfg: FullEngineConfig = {}): FullEngineReady {
  const store = cfg.store ?? createInMemoryStore()
  const gava = cfg.gava
  const assistant = cfg.assistant ?? new TaxAssistant()
  const messenger = cfg.messenger ?? createInMemoryMessenger([])
  const billing = cfg.billing ?? createInMemoryGateway({ byMerchantRequest: new Map() })

  if (!gava || !cfg.wiring) {
    throw new Error("createFullEngine requires a GavaClient and wiring options")
  }
  const portals = createPortalAdapter(gava, store)
  const filing = createWiredFilingService(gava, cfg.wiring)
  const makeHandle = (client: StoredClient) =>
    createClient({ clientId: client.clientId, phone: client.phone, messenger, billing, assistant, filing })
  const amount = cfg.subscriptionAmount ?? 3500

  const api: FullEngineApi = {
    store,
    portals,
    filing,
    client(clientId) {
      const c = store.client(clientId)
      if (!c) throw new Error(`client ${clientId} not in store`)
      return makeHandle(c)
    },
    async onboard(spec) {
      const rec = await portals.onboard(spec)
      return makeHandle(rec)
    },
    reminderPlan: (o) => buildReminderPlan(store, o ?? cfg.reminders ?? {}),
    runReminders: (o) => dispatchReminders(store, messenger, o ?? cfg.reminders ?? {}),
    async monthlySweep(filingDays = 10) {
      const r = await api.runReminders()
      const filings = await filing.runAll(filingDays)
      const paymentRefs: string[] = []
      for (const client of store.clients()) {
        if (client.status !== "active") continue
        const rec = await billing.stkPush({
          phone: client.phone,
          amount,
          accountReference: `${client.clientId}-sub`,
          transDesc: `SmartVAT ${client.clientId} subscription`,
        } satisfies LipaStkRequest)
        paymentRefs.push(rec.merchantRequestId)
      }
      return {
        reminders: r,
        filings,
        payments: paymentRefs.length,
        billedTotal: { amount, count: paymentRefs.length },
      }
    },
  }
  return api
}

export type FullEngineReady = FullEngineApi
export interface FullEngineApi {
  store: ClientStore
  portals: ClientOnboarder
  filing: FilingService
  client(clientId: string): ClientHandle
  onboard(spec: Parameters<ClientOnboarder["onboard"]>[0]): Promise<ClientHandle>
  reminderPlan(opts?: SchedulerOptions): ReturnType<typeof buildReminderPlan>
  runReminders(opts?: SchedulerOptions): Promise<{ sent: number; total: number }>
  monthlySweep(filingDays?: number): Promise<SweepResult>
}