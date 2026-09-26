import { test } from "node:test"
import assert from "node:assert/strict"
import { createInMemoryStore, StoredClient } from "../store.js"

const client: StoredClient = {
  clientId: "c1",
  fullName: "Aisha Wanjiru",
  kraPin: "A000000001Z",
  phone: "254712345678",
  vatStatus: "registered",
  status: "active",
  createdAt: "2026-01-01T00:00:00Z",
}

test("store upserts and reads a client", () => {
  const store = createInMemoryStore()
  store.upsertClient(client)
  assert.deepEqual(store.client("c1"), client)
  assert.equal(store.clients().length, 1)
})

test("store records and filters filings by client", () => {
  const store = createInMemoryStore()
  store.recordFiling({ periodId: "2026-07", clientId: "c1", provider: "nil", ok: true, filedAt: "2026-08-17T00:00:00Z" })
  store.recordFiling({ periodId: "2026-07", clientId: "c2", provider: "nil", ok: false, filedAt: "2026-08-17T00:00:00Z" })
  assert.equal(store.filings("c1").length, 1)
  assert.equal(store.filings().length, 2)
})

test("store records payments and health snapshots", () => {
  const store = createInMemoryStore()
  store.recordPayment({ clientId: "c1", amount: 3500, reference: "c1-sub", status: "completed", at: "2026-08-01T00:00:00Z" })
  store.recordHealth({ clientId: "c1", periodId: "2026-07", health: { score: 95, level: "low", dimensions: [], flags: [], generatedAt: "" }, at: "2026-08-01T00:00:00Z" })
  assert.equal(store.payments("c1").length, 1)
  assert.equal(store.healthByClient("c1")?.periodId, "2026-07")
})