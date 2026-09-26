import { test } from "node:test"
import assert from "node:assert/strict"
import { createFullEngine } from "../fullclient.js"
import { createInMemoryStore, StoredClient } from "../store.js"
import { createInMemoryMessenger, WaTranscriptMin } from "../whatsapp.js"
import { createInMemoryGateway, StkReceiptLog } from "../mpesa.js"

function fakeGava() {
  return {
    fileNilReturn: async (i: unknown) => ({ AckNumber: `A-${(i as { Month: number }).Month}`, Status: "OK", ResponseCode: "0" }),
    validateTcc: async () => ({ ResponseCode: "0", Message: "ok", Status: "OK", TCCDATA: { TCCSerialNumber: "T", KRAPIN: "A", BusinessName: "B", CertificateStatus: "Valid" } }),
    pinByPin: async () => ({}),
  } as unknown as import("@smartvat/gavaconnect").GavaClient
}

test("full engine onboards a client and gives a working handle", async () => {
  const store = createInMemoryStore()
  const messenger = createInMemoryMessenger([])
  const billing = createInMemoryGateway({ byMerchantRequest: new Map() })
  const engine = createFullEngine({
    gava: fakeGava(),
    store,
    messenger,
    billing,
    wiring: {
      kraPin: "A000000001Z",
      mode: "nil",
      deadline: { now: () => new Date("2026-08-04T00:00:00Z") },
      now: () => new Date("2026-08-04T00:00:00Z"),
    },
    reminders: { dueDays: 15, deadline: { now: () => new Date("2026-08-04T00:00:00Z") } },
  })
  const handle = await engine.onboard({ clientId: "c1", fullName: "Aisha", kraPin: "A000000001Z", phone: "254700000001" })
  assert.equal(handle.clientId, "c1")
  assert.equal(store.client("c1")?.vatStatus, "pending")
})

test("full engine runs reminders and a monthly sweep over active clients", async () => {
  const store = createInMemoryStore()
  const transcript: WaTranscriptMin[] = []
  const messenger = createInMemoryMessenger(transcript)
  const log: StkReceiptLog = { byMerchantRequest: new Map() }
  const billing = createInMemoryGateway(log)
  const engine = createFullEngine({
    gava: fakeGava(),
    store,
    messenger,
    billing,
    subscriptionAmount: 3500,
    wiring: {
      kraPin: "A000000001Z",
      mode: "nil",
      deadline: { now: () => new Date("2026-08-04T00:00:00Z") },
      now: () => new Date("2026-08-04T00:00:00Z"),
    },
    reminders: { dueDays: 15, deadline: { now: () => new Date("2026-08-04T00:00:00Z") } },
  })
  // make the onboarded client active
  const active: StoredClient = {
    clientId: "c1", fullName: "A", kraPin: "A000000001Z", phone: "254700000001",
    vatStatus: "registered", status: "active", createdAt: "2026-01-01T00:00:00Z",
  }
  store.upsertClient(active)

  const r = await engine.runReminders()
  assert.ok(r.sent >= 1)

  const sweep = await engine.monthlySweep(31)
  assert.ok(sweep.reminders.sent >= 1)
  assert.ok(sweep.filings.length >= 1)
  assert.ok(sweep.payments >= 1)
  assert.equal(sweep.billedTotal.amount, 3500)
  // STK log should have one push for the active client
  assert.ok(log.byMerchantRequest.size >= 1)
})