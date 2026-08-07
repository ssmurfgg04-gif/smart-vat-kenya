import { test } from "node:test"
import assert from "node:assert/strict"
import { createScriptedTransport, RecordedCall } from "../transport.js"
import { createTaxKeEtims, TaxKeError, EtimsInvoiceInput } from "../taxke.js"
import { TAXKE_WEBHOOK, signWebhookPayload } from "../webhooks.js"

const API_KEY = "tk_live_x"
const invoice: EtimsInvoiceInput = {
  invoiceNumber: "INV-001",
  date: "2026-08-01",
  business: { name: "SmartVAT", taxId: "A123456789Z" },
  customer: { name: "ACME", taxId: "P987654321A" },
  items: [{ description: "Consulting", quantity: 1, unitPrice: 10000, total: 10000 }],
  subtotal: 10000,
  taxRate: 16,
  taxAmount: 1600,
  total: 11600,
}

test("tax.ke generateInvoice POSTs to /api/etims/generate-invoice and maps control number", async () => {
  const calls: RecordedCall[] = []
  const transport = createScriptedTransport(
    [{ url: "/api/etims/generate-invoice", body: { controlNumber: "KRA-CN-001", qrCode: "data:image/png;base64,xx", status: "synced" } }],
    calls,
  )
  const client = createTaxKeEtims({ apiKey: API_KEY, transport })
  const out = await client.generateInvoice(invoice)

  assert.equal(out.controlNumber, "KRA-CN-001")
  assert.equal(out.qrCode, "data:image/png;base64,xx")
  assert.equal(out.status, "synced")
  assert.equal(calls.length, 1)
  assert.ok(calls[0]!.url.endsWith("/api/etims/generate-invoice"))
  assert.equal(calls[0]!.method, "POST")
  assert.equal(calls[0]!.headers!.Authorization, `Bearer ${API_KEY}`)
  assert.deepEqual((calls[0]!.body as EtimsInvoiceInput).items, invoice.items)
})

test("tax.ke generateInvoice throws when no control number is returned", async () => {
  const transport = createScriptedTransport([{ url: "/api/etims/generate-invoice", body: {} }])
  const client = createTaxKeEtims({ apiKey: API_KEY, transport })
  await assert.rejects(() => client.generateInvoice(invoice), TaxKeError)
})

test("tax.ke status reads the sync state", async () => {
  const calls: RecordedCall[] = []
  const transport = createScriptedTransport(
    [{ url: "/api/etims/invoices/INV-001", body: { invoiceNumber: "INV-001", status: "pending", retryCount: 3 } }],
    calls,
  )
  const client = createTaxKeEtims({ apiKey: API_KEY, transport })
  const out = await client.status("INV-001")
  assert.equal(out.status, "pending")
  assert.equal(out.retryCount, 3)
  assert.ok(calls[0]!.url.includes("/api/etims/invoices/INV-001"))
})

test("tax.ke webhook verifies X-TaxKe-Signature", () => {
  const secret = "tk_webhook_secret"
  const client = createTaxKeEtims({ apiKey: API_KEY, webhookSecret: secret })
  const raw = '{"event":"synced","invoiceNumber":"INV-001"}'
  const headers = { "X-TaxKe-Signature": signWebhookPayload(TAXKE_WEBHOOK, secret, raw) }
  assert.equal(client.verifyWebhook(headers, raw), true)
  assert.equal(client.verifyWebhook(headers, raw + "x"), false)
  assert.equal(client.verifyWebhook({}, raw), false)
})

test("tax.ke webhook returns false when no secret configured", () => {
  const client = createTaxKeEtims({ apiKey: API_KEY })
  assert.equal(client.verifyWebhook({}, "{}"), false)
})