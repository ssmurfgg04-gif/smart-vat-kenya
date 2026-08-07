import { createHmac, timingSafeEqual } from "node:crypto"

/**
 * Webhook signature verification shared by the SaaS providers we integrate
 * (tax.ke eTIMS, Paystack, ProTax...). Each provider signs its webhook body with
 * an HMAC over the raw request body and ships the digest in a header. Verification
 * is constant-time, never throws, and is fully offline-testable.
 *
 * Provider conventions:
 *  - tax.ke:    `X-TaxKe-Signature: sha256=<hex>`   (HMAC-SHA256, prefixed)
 *  - Paystack:  `x-paystack-signature: <hex>`       (HMAC-SHA512, no prefix)
 *  - ProTax:    `X-ProTax-Signature: <hex>`         (HMAC, provider-chosen)
 */

export interface WebhookProvider {
  /** Header that carries the signature (matched case-insensitively). */
  header: string
  /** HMAC digest algorithm. */
  algorithm: "sha256" | "sha512"
  /** Strip a `sha256=` / `sha1=` prefix from the header value (tax.ke does). */
  stripPrefix?: boolean
}

function headerValue(
  headers: Record<string, string | string[] | undefined>,
  header: string,
): string | undefined {
  const value = headers[header] ?? headers[header.toLowerCase()]
  return Array.isArray(value) ? value[0] : value
}

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a, "utf8")
  const bufB = Buffer.from(b, "utf8")
  if (bufA.length !== bufB.length) return false
  return timingSafeEqual(bufA, bufB)
}

/** Compute the HMAC signature for a provider, so tests can build signed fixtures. */
export function signWebhookPayload(provider: WebhookProvider, secret: string, rawBody: string): string {
  const digest = createHmac(provider.algorithm, secret).update(rawBody, "utf8").digest("hex")
  return provider.stripPrefix ? `sha256=${digest}` : digest
}

/** Verify a provider webhook signature over the raw body. Returns false, never throws. */
export function verifyProviderWebhook(
  provider: WebhookProvider,
  secret: string,
  headers: Record<string, string | string[] | undefined>,
  rawBody: string,
): boolean {
  const value = headerValue(headers, provider.header)
  if (!value) return false
  const expected = provider.stripPrefix ? value.replace(/^sha\d+=/, "") : value
  const computed = createHmac(provider.algorithm, secret).update(rawBody, "utf8").digest("hex")
  return safeEqual(computed, expected)
}

/* Standard provider definitions. */
export const PAYSTACK_WEBHOOK: WebhookProvider = {
  header: "x-paystack-signature",
  algorithm: "sha512",
}

export const TAXKE_WEBHOOK: WebhookProvider = {
  header: "X-TaxKe-Signature",
  algorithm: "sha256",
  stripPrefix: true,
}

export const PROTAX_WEBHOOK: WebhookProvider = {
  header: "X-ProTax-Signature",
  algorithm: "sha256",
}

export function verifyPaystackWebhook(
  secret: string,
  headers: Record<string, string | string[] | undefined>,
  rawBody: string,
): boolean {
  return verifyProviderWebhook(PAYSTACK_WEBHOOK, secret, headers, rawBody)
}

export function verifyTaxKeWebhook(
  secret: string,
  headers: Record<string, string | string[] | undefined>,
  rawBody: string,
): boolean {
  return verifyProviderWebhook(TAXKE_WEBHOOK, secret, headers, rawBody)
}
