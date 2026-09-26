import { test } from "node:test"
import assert from "node:assert/strict"
import {
  signWebhookPayload,
  verifyProviderWebhook,
  verifyPaystackWebhook,
  verifyTaxKeWebhook,
  PAYSTACK_WEBHOOK,
  TAXKE_WEBHOOK,
  PROTAX_WEBHOOK,
} from "../webhooks.js"

const SECRET = "sk_test_123abc"
const BODY = JSON.stringify({ event: "charge.success", amount: 1160, reference: "c1-2026-08" })

test("Paystack webhook verifies with HMAC-SHA512 (no prefix)", () => {
  const headers = { "x-paystack-signature": signWebhookPayload(PAYSTACK_WEBHOOK, SECRET, BODY) }
  assert.equal(verifyPaystackWebhook(SECRET, headers, BODY), true)
})

test("tax.ke webhook verifies with sha256= prefix stripped", () => {
  const signed = signWebhookPayload(TAXKE_WEBHOOK, SECRET, BODY)
  assert.ok(signed.startsWith("sha256="))
  const headers = { "X-TaxKe-Signature": signed }
  assert.equal(verifyTaxKeWebhook(SECRET, headers, BODY), true)
})

test("verification fails on a tampered body", () => {
  const headers = { "x-paystack-signature": signWebhookPayload(PAYSTACK_WEBHOOK, SECRET, BODY) }
  assert.equal(verifyPaystackWebhook(SECRET, headers, BODY + "0"), false)
})

test("verification fails with the wrong secret", () => {
  const headers = { "x-paystack-signature": signWebhookPayload(PAYSTACK_WEBHOOK, SECRET, BODY) }
  assert.equal(verifyPaystackWebhook("wrong-secret", headers, BODY), false)
})

test("verification fails when the header is missing", () => {
  assert.equal(verifyPaystackWebhook(SECRET, {}, BODY), false)
})

test("verification fails when the signature is malformed", () => {
  const headers = { "x-paystack-signature": "not-a-hex-digest" }
  assert.equal(verifyPaystackWebhook(SECRET, headers, BODY), false)
})

test("provider verification handles array header values", () => {
  const signed = signWebhookPayload(PAYSTACK_WEBHOOK, SECRET, BODY)
  const headers = { "x-paystack-signature": [signed] }
  assert.equal(verifyProviderWebhook(PAYSTACK_WEBHOOK, SECRET, headers, BODY), true)
})

test("ProTax webhook (sha256, no prefix) round-trips", () => {
  const headers = { "X-ProTax-Signature": signWebhookPayload(PROTAX_WEBHOOK, SECRET, BODY) }
  assert.equal(verifyProviderWebhook(PROTAX_WEBHOOK, SECRET, headers, BODY), true)
})