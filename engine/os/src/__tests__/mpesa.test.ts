import { test } from "node:test"
import assert from "node:assert/strict"
import { createInMemoryGateway, StkReceiptLog } from "../mpesa.js"

test("createInMemoryGateway returns a merchantRequestId and records a pending receipt", async () => {
  const log: StkReceiptLog = { byMerchantRequest: new Map() }
  const gateway = createInMemoryGateway(log)
  const { merchantRequestId } = await gateway.stkPush({
    phone: "254712345678",
    amount: 500,
    accountReference: "c1-sub",
    transDesc: "SmartVAT c1 subscription",
  })
  assert.ok(merchantRequestId)
  const recorded = log.byMerchantRequest.get(merchantRequestId)
  assert.ok(recorded)
  assert.equal(recorded.receipt.status, "pending")
  assert.equal(recorded.request.amount, 500)
})