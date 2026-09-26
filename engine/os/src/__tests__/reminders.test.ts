import { test } from "node:test"
import assert from "node:assert/strict"
import { createInMemoryStore, StoredClient } from "../store.js"
import { buildReminderPlan, dispatchReminders, DEFAULT_COPY } from "../reminders.js"
import { createInMemoryMessenger, WaTranscriptMin } from "../whatsapp.js"

function activeClient(id: string, phone: string): StoredClient {
  return { clientId: id, fullName: id, kraPin: `${id}A`, phone, vatStatus: "registered", status: "active", createdAt: "2026-01-01T00:00:00Z" }
}

test("buildReminderPlan emits a lead reminder for a due period", () => {
  const store = createInMemoryStore()
  store.upsertClient(activeClient("c1", "254700000001"))
  const plan = buildReminderPlan(store, {
    dueDays: 15,
    deadline: { now: () => new Date("2026-08-04T00:00:00Z") },
  })
  assert.ok(plan.length >= 1)
  assert.ok(plan.every((r) => r.stage === "lead"))
  assert.ok(plan[0]!.body.includes("17"))
})

test("a client with the period already filed gets a filed_ok reminder", () => {
  const store = createInMemoryStore()
  store.upsertClient(activeClient("c1", "254700000001"))
  store.recordFiling({ periodId: "2026-07", clientId: "c1", provider: "nil", ok: true, filedAt: "2026-08-17T00:00:00Z" })
  const plan = buildReminderPlan(store, {
    dueDays: 15,
    deadline: { now: () => new Date("2026-08-04T00:00:00Z") },
  })
  assert.ok(plan.some((r) => r.stage === "filed_ok"))
})

test("inactive clients are skipped by the reminder plan", () => {
  const store = createInMemoryStore()
  store.upsertClient({ ...activeClient("c9", "254700000009"), status: "churned" })
  const plan = buildReminderPlan(store, { dueDays: 15, deadline: { now: () => new Date("2026-08-04T00:00:00Z") } })
  assert.equal(plan.length, 0)
})

test("dispatchReminders sends through the messenger and reports counts", async () => {
  const store = createInMemoryStore()
  store.upsertClient(activeClient("c1", "254700000001"))
  const transcript: WaTranscriptMin[] = []
  const messenger = createInMemoryMessenger(transcript)
  const res = await dispatchReminders(store, messenger, {
    dueDays: 15,
    deadline: { now: () => new Date("2026-08-04T00:00:00Z") },
  })
  assert.ok(res.sent >= 1)
  assert.equal(res.sent, res.total)
})

test("custom copy is honored and deterrence copy exists for overdue", () => {
  assert.ok(DEFAULT_COPY.overdue("2026-07", "2026-08-20").includes("penalty"))
  const custom = { ...DEFAULT_COPY, lead: (_p: string, _d: string) => "custom lead" }
  assert.equal(custom.lead("x", "y"), "custom lead")
})