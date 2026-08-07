import { test } from "node:test"
import assert from "node:assert/strict"
import { createClient } from "../client.js"
import { createInMemoryMessenger, WaTranscriptMin } from "../whatsapp.js"
import { createInMemoryGateway, StkReceiptLog } from "../mpesa.js"
import { TaxAssistant } from "../intel.js"
import { createFilingService } from "../filing.js"
import { FilingProvider } from "@smartvat/gavaconnect"

function makeClient(overrides: { runDays?: number } = {}) {
  const store: WaTranscriptMin[] = []
  const log: StkReceiptLog = { byMerchantRequest: new Map() }
  const messenger = createInMemoryMessenger(store)
  const billing = createInMemoryGateway(log)
  const assistant = new TaxAssistant()
  const provider: FilingProvider = {
    name: "nil",
    async file() {
      return { ack: true, reference: "R1", provider: "nil", obligation: 1, golden: { domain: "filing", event: "ok", payload: {} } }
    },
  }
  const filing = createFilingService([provider], {
    deadlineConfig: { now: () => new Date("2026-08-01T00:00:00Z") },
    now: () => new Date("2026-08-01T00:00:00Z"),
  })
  const clientHandle = createClient({
    clientId: "c1",
    phone: "254712345678",
    messenger,
    billing,
    assistant,
    filing,
    runDays: overrides.runDays,
  })
  return { clientHandle, store, log }
}

test("client.notify sends the WhatsApp message to the client phone", async () => {
  const { clientHandle, store } = makeClient()
  const res = await clientHandle.notify("Your filing is due")
  assert.equal(res.to, "254712345678")
  assert.ok(store.some((m) => m.to === "254712345678"))
})

test("client.ask returns a grounded assistant answer", async () => {
  const { clientHandle } = makeClient()
  const answer = await clientHandle.ask("late filing penalty")
  assert.ok(answer.source.length >= 1)
  assert.ok(answer.source.includes("late-vat-filing-penalty"))
})

test("client.pay initiates an M-PESA STK push and records pending", async () => {
  const { clientHandle, log } = makeClient()
  const { merchantRequestId } = await clientHandle.pay(499, "c1-jul")
  const rec = log.byMerchantRequest.get(merchantRequestId)
  assert.ok(rec)
  assert.equal(rec.request.accountReference, "c1-jul")
  assert.equal(rec.request.amount, 499)
})

test("client.runFiling runs the batch and reports outcomes", async () => {
  const { clientHandle } = makeClient({ runDays: 31 })
  const outcomes = await clientHandle.runFiling()
  assert.ok(outcomes.length >= 1)
  assert.ok(outcomes.every((o) => o.ok === true))
})