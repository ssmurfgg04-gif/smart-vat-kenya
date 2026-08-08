import { test } from "node:test"
import assert from "node:assert/strict"
import { createScriptedTransport, RecordedCall } from "../transport.js"
import { createProTaxClient, ProTaxError, ProTaxInvoiceInput } from "../protax.js"
import { PROTAX_WEBHOOK, signWebhookPayload } from "../webhooks.js"

const API_KEY = "ptx_live_x"
const invoice: ProTaxInvoiceInput = {
  invoiceNumber: "INV-002",
  date: "2026-08-01",
  currency: "KES",
  business: { name: "SmartVAT", taxId: "A123456789Z" },
  customer: { name: "ACME", taxId: "P987654321A" },
  items: [{ description: "Consulting", quantity: 1, unitPrice: 10000, total: 10000, taxRate: 16 }],
  subtotal: 10000,
  taxAmount: 1600,
  total: 11600,
}

test("ProTax submitInvoice POSTs with X-API-Key and maps a signed invoice", async () => {
  const calls: RecordedCall[] = []
  const transport = createScriptedTransport(
    [{ url: "/invoices", status: 201, body: { id: "ptx_1", invoiceNumber: "INV-002", status: "SUCCESS" } }],
    calls,
  )
  const client = createProTaxClient({ apiKey: "k", transport })
  const out = await client.submitInvoice(invoice)
  assert.equal(out.invoiceId, "ptx_1")
  assert.equal(out.status, "signed")
  assert.equal(calls[0]!.method, "POST")
  assert.equal(calls[0]!.headers!["X-API-Key"], "k")
  assert.ok(calls[0]!.url.endsWith("/invoices"))
})

test("ProTax maps queued invoices from the PENDING status", async () => {
  const transport = createScriptedTransport([{ url: "/invoices", body: { id: "p2", invoiceNumber: "INV-002", status: "PENDING" } }])
  const client = createProTaxClient({ apiKey: "k", transport })
  const out = await client.submitInvoice(invoice)
  assert.equal(out.status, "queued")
})

test("ProTax maps a KRA rejection", async () => {
  const transport = createScriptedTransport([{ url: "/invoices", body: { id: "p3", invoiceNumber: "INV-002", status: "rejected" } }])
  const client = createProTaxClient({ apiKey: "k", transport })
  const out = await client.submitInvoice(invoice)
  assert.equal(out.status, "rejected")
})

test("ProTax submitInvoice throws when no id is returned", async () => {
  const transport = createScriptedTransport([{ url: "/invoices", body: { message: "error" } }])
  const client = createProTaxClient({ apiKey: "k", transport })
  await assert.rejects(() => client.submitInvoice(invoice), ProTaxError)
})

test("ProTax lookupCustomer validates a buyer PIN", async () => {
  const calls: RecordedCall[] = []
  const transport = createScriptedTransport(
    [{ url: "/customers?pin=P051234567A", body: { pin: "P051234567A", name: "ACME Ltd", registered: true } }],
    calls,
  )
  const client = createProTaxClient({ apiKey: "k", transport })
  const out = await client.lookupCustomer("P051234567A")
  assert.equal(out.name, "ACME Ltd")
  assert.equal(out.registered, true)
  assert.ok(calls[0]!.url.includes("?pin=P051234567A"))
})

test("ProTax lookupCustomer reports unregistered buyers", async () => {
  const transport = createScriptedTransport([{ url: "/customers", body: null }])
  const client = createProTaxClient({ apiKey: "k", transport })
  const out = await client.lookupCustomer("A999999999Z")
  assert.equal(out.registered, false)
  assert.equal(out.name, "")
})

test("ProTax webhook verifies X-ProTax-Signature", () => {
  const secret = "ptx_secret"
  const client = createProTaxClient({ apiKey: "k", webhookSecret: secret })
  const raw = '{"event":"invoice.signed","invoiceId":"ptx_1"}'
  const headers = { "X-ProTax-Signature": signWebhookPayload(PROTAX_WEBHOOK, secret, raw) }
  assert.equal(client.verifyWebhook(headers, raw), true)
  assert.equal(client.verifyWebhook(headers, raw + "x"), false)
})