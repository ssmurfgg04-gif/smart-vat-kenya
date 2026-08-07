import { ComplianceHealth } from "./types.js"
import { FilingOutcome } from "./filing.js"
import { PaymentReceipt } from "./mpesa.js"

/**
 * Persistence — the client/ledger store.
 *
 * Phase 0 will land a real DB (privacy-by-default, Kenya-hosted). Until then
 * the OS talks to a `Ledger` interface and ships an in-memory implementation so
 * all workflows (reminders, filings, billing) are exercisable and testable. Swap
 * the impl for Postgres/Prisma later without touching engine code.
 */

/** A taxpayer the OS manages. */
export interface StoredClient {
  clientId: string
  fullName: string
  kraPin: string
  phone: string
  email?: string
  businessName?: string
  vatStatus: "registered" | "pending" | "deregistered" | "never"
  status: "active" | "churned" | "prospect"
  createdAt: string
}

/** One obligation period's filing result, persisted for the golden dataset. */
export interface StoredFiling {
  periodId: string
  clientId: string
  provider: string
  ok: boolean
  ack?: string
  error?: string
  filedAt: string
}

export type PaymentRecord = PaymentReceipt & {
  clientId: string
  amount: number
  reference: string
  initiatedAt: string
}

export interface HealthSnapshot {
  clientId: string
  periodId: string
  health: ComplianceHealth
  at: string
}

/** Interface every concrete store implements. */
export interface ClientStore {
  clients(): StoredClient[]
  upsertClient(c: StoredClient): void
  client(clientId: string): StoredClient | undefined

  recordFiling(f: StoredFiling): void
  filings(clientId?: string): StoredFiling[]

  recordPayment(p: StoredPayment): void
  payments(clientId?: string): StoredPayment[]

  recordHealth(h: HealthSnapshot): void
  healthByClient(clientId: string): HealthSnapshot | undefined
}

export interface StoredPayment {
  clientId: string
  amount: number
  reference: string
  merchantRequestId?: string
  status: "completed" | "failed" | "pending"
  mpesaReceipt?: string
  at: string
}

/** A deterministic in-memory store, the default now and the test fixture. */
export function createInMemoryStore(): ClientStore {
  const clients = new Map<string, StoredClient>()
  const filings: StoredFiling[] = []
  const payments: StoredPayment[] = []
  const healthByClient = new Map<string, HealthSnapshot>()

  return {
    clients: () => [...clients.values()],
    upsertClient(c) {
      clients.set(c.clientId, c)
    },
    client: (id) => clients.get(id),
    recordFiling(f) {
      filings.push(f)
    },
    filings(clientId) {
      return clientId ? filings.filter((f) => f.clientId === clientId) : [...filings]
    },
    recordPayment(p) {
      payments.push(p)
    },
    payments(clientId) {
      return clientId ? payments.filter((p) => p.clientId === clientId) : [...payments]
    },
    recordHealth(h) {
      healthByClient.set(h.clientId, h)
    },
    healthByClient(clientId) {
      return clientId ? healthByClient.get(clientId) : undefined
    },
  }
}