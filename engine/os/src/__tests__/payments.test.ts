import { test } from "node:test"
import assert from "node:assert/strict"
import { createScriptedTransport, RecordedCall } from "../transport.js"
import { createInMemoryPaymentGateway, createPaystackGateway, PaystackError, mpesaToPaymentGateway, PaymentRequest } from "../payments.js"
import { createInMemoryGateway } from "../mpesa.js"

test("in-memory gateway records requests and verifies them completed", async () => {
  const log = { requests: [] as Array<{ req: PaymentRequest; reference: string }> }
  const gateway = createInMemoryPaymentGateway(log)
  const init = await gateway.initiate({ amount: 1160, accountReference: "c1-2026-08", description: "Aug subscription" })
  assert.equal(init.provider, "in-memory")
  assert.ok(init.reference.startsWith("pmt_c1-2026-08_"))
  const verify = await gateway.verify(init.reference)
  assert.equal(verify.status, "completed")
  assert.equal(verify.amount, 1160)
})

test("in-memory gateway reports pending for an unknown reference", async () => {
  const gateway = createInMemoryPaymentGateway()
  const verify = await gateway.verify("pmt_missing")
  assert.equal(verify.status, "pending")
})

test("Paystack initiate converts KES to cents and returns checkout URL", async () => {
  const calls: RecordedCall[] = []
  const transport = createScriptedTransport(
    [
      {
        url: "/transaction/initialize",
        body: { data: { reference: "c1-2026-08", authorization_url: "https://checkout.paystack.com/x" } },
      },
    ],
    calls,
  )
  const gateway = createPaystackGateway({ secretKey: "sk_test_x", transport })
  const init = await gateway.initiate({ amount: 1160, accountReference: "c1-2026-08", description: "sub", email: "a@b.co" })

  assert.equal(init.reference, "c1-2026-08")
  assert.equal(init.checkoutUrl, "https://checkout.paystack.com/x")
  assert.equal(init.provider, "paystack")
  assert.equal(calls.length, 1)
  const body = calls[0]!.body as { amount: number; currency: string; reference: string }
  assert.equal(body.amount, 116_000) // KES 1,160 -> cents
  assert.equal(body.currency, "KES")
  assert.equal(calls[0]!.headers!.Authorization, "Bearer sk_test_x")
})

test("Paystack initiate throws when no reference comes back", async () => {
  const transport = createScriptedTransport([{ url: "/transaction/initialize", body: { data: {} } }])
  const gateway = createPaystackGateway({ secretKey: "sk_test_x", transport })
  await assert.rejects(
    () => gateway.initiate({ amount: 100, accountReference: "r", description: "d" }),
    PaystackError,
  )
})

test("Paystack verify maps statuses and converts cents back to KES", async () => {
  const transport = createScriptedTransport([
    { url: "/transaction/verify/c1-2026-08", body: { data: { status: "success", amount: 116_000 } } },
  ])
  const gateway = createPaystackGateway({ secretKey: "sk_test_x", transport })
  const verify = await gateway.verify("c1-2026-08")
  assert.equal(verify.status, "completed")
  assert.equal(verify.amount, 1160)
})

test("Paystack verify maps failed and pending statuses", async () => {
  const transport = createScriptedTransport([
    { url: "/transaction/verify/fail", body: { data: { status: "failed" } } },
    { url: "/transaction/verify/pend", body: { data: { status: "abandoned" } } },
  ])
  const gateway = createPaystackGateway({ secretKey: "sk_test_x", transport })
  assert.equal((await gateway.verify("fail")).status, "failed")
  assert.equal((await gateway.verify("pend")).status, "pending")
})

test("M-PESA billing gateway adapts to the payment port", async () => {
  const log = { byMerchantRequest: new Map() }
  const billing = createInMemoryGateway(log)
  const gateway = mpesaToPaymentGateway(billing, { log })
  const init = await gateway.initiate({ amount: 499, accountReference: "c1-aug", description: "sub", phone: "254712345678" })
  assert.equal(init.provider, "mpesa")
  assert.ok(init.reference.startsWith("ws_COM"))
  const pending = await gateway.verify(init.reference)
  assert.equal(pending.status, "pending")
  // Mark the STK receipt completed, then verification flips to completed.
  const entry = log.byMerchantRequest.get(init.reference)
  entry.receipt.status = "completed"
  const done = await gateway.verify(init.reference)
  assert.equal(done.status, "completed")
})