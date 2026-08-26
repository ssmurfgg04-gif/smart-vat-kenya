import { HttpTransport, createFetchTransport } from "./transport.js"
import { PROTAX_WEBHOOK, verifyProviderWebhook } from "./webhooks.js"

/**
 * ProTax Kenya eTIMS client (https://protax.co.ke, API v2).
 *
 * ProTax is a KRA/ODPC-approved eTIMS integrator: it signs invoices via KRA's
 * OSCU bridge in real time, keeps an offline queue, supports reverse invoicing,
 * and retries webhook delivery up to 5 times with exponential backoff. We talk
 * to it from the OS as an alternative to running our own OSCU/VSCU control unit
 * and to running self-hosted tax.ke. All endpoints use `X-API-Key`.
 *
 * Per official API reference (v2.0):
 *   POST /invoices              - submit an invoice for signature
 *   GET  /customers?pin=        - validate a buyer PIN before B2B invoicing
 *   POST /webhooks              - register a callback URL + secret
 *   X-ProTax-Signature: <hex>   - HMAC webhook signing (provider-chosen algo)
 */

/** ProTax invoice submit payload (fields the v2 API reference documents). */
export interface ProTaxInvoiceInput {
  invoiceNumber: string
  date: string
  dueDate?: string
  currency: string // "KES"
  business: {
    name: string
    taxId: string // KRA PIN
  }
  customer: {
    name: string
    taxId?: string // KRA PIN (required for B2B)
    email?: string
  }
  items: Array<{
    description: string
    quantity: number
    unitPrice: number
    total: number
    taxRate: number // e.g. 16
  }>
  subtotal: number
  taxAmount: number
  total: number
}

export interface ProTaxInvoiceResult {
  invoiceId: string
  invoiceNumber: string
  /**
   * ProTax submission state: "signed" (KRA signed it immediately),
   * "queued" (offline/PENDING awaiting sync), "rejected" (KRA rejected).
   */
  status: "signed" | "queued" | "rejected"
}

export interface ProTaxCustomerLookup {
  pin: string
  name: string
  registered: boolean
}

export interface ProTaxClient {
  /** Submit an invoice; KRA signs it via ProTax's OSCU bridge. */
  submitInvoice(invoice: ProTaxInvoiceInput): Promise<ProTaxInvoiceResult>
  /** Validate a buyer PIN before issuing a B2B invoice. */
  lookupCustomer(pin: string): Promise<ProTaxCustomerLookup>
  /** Verify an `X-ProTax-Signature` webhook header against the raw body. */
  verifyWebhook(
    headers: Record<string, string | string[] | undefined>,
    rawBody: string,
  ): boolean
}

export interface ProTaxConfig {
  /** ProTax API key (`X-API-Key`). */
  apiKey: string
  /** Secret used to sign `X-ProTax-Signature` callbacks. */
  webhookSecret?: string
  /** "production" (api.protax.co.ke, default) or "sandbox" (sandbox.protax.co.ke). */
  environment?: "production" | "sandbox"
  /** Base URL override, e.g. https://sandbox.protax.co.ke/api/v2 */
  baseUrl?: string
  transport?: HttpTransport
}

const PROTAX_LIVE = "https://api.protax.co.ke/api/v2"
const PROTAX_SANDBOX = "https://sandbox.protax.co.ke/api/v2"

export class ProTaxError extends Error {
  constructor(
    message: string,
    readonly status?: number,
    readonly body?: unknown,
  ) {
    super(message)
    this.name = "ProTaxError"
  }
}

export function createProTaxClient(cfg: ProTaxConfig): ProTaxClient {
  const base =
    cfg.baseUrl ?? (cfg.environment === "sandbox" ? PROTAX_SANDBOX : PROTAX_LIVE)
  const http = cfg.transport ?? createFetchTransport()

  return {
    async submitInvoice(invoice: ProTaxInvoiceInput): Promise<ProTaxInvoiceResult> {
      const res = await http.request({
        url: `${base}/invoices`,
        method: "POST",
        headers: { "X-API-Key": cfg.apiKey },
        body: invoice,
      })
      if (res.status !== 200 && res.status !== 201) {
        throw new ProTaxError("ProTax submitInvoice failed", res.status, res.body)
      }
      const data = res.body as {
        id?: string
        invoiceNumber?: string
        status?: string
      }
      if (!data.id) throw new ProTaxError("ProTax returned no invoice id", res.status, res.body)
      const status: ProTaxInvoiceResult["status"] =
        data.status === "rejected" ? "rejected" : data.status === "queued" || data.status === "PENDING" ? "queued" : "signed"
      return {
        invoiceId: data.id,
        invoiceNumber: data.invoiceNumber ?? invoice.invoiceNumber,
        status,
      }
    },

    async lookupCustomer(pin: string): Promise<ProTaxCustomerLookup> {
      const res = await http.request({
        url: `${base}/customers?pin=${encodeURIComponent(pin)}`,
        method: "GET",
        headers: { "X-API-Key": cfg.apiKey },
      })
      if (res.status !== 200) throw new ProTaxError("ProTax lookupCustomer failed", res.status, res.body)
      const data = res.body as { pin?: string; name?: string; registered?: boolean } | Array<{ pin?: string; name?: string; registered?: boolean }> | null
      const hit = Array.isArray(data) ? data[0] : data
      if (!hit?.pin) {
        return { pin, name: "", registered: false }
      }
      return {
        pin: hit.pin,
        name: hit.name ?? "",
        registered: hit.registered !== false,
      }
    },

    verifyWebhook(headers, rawBody) {
      if (!cfg.webhookSecret) return false
      return verifyProviderWebhook(PROTAX_WEBHOOK, cfg.webhookSecret, headers, rawBody)
    },
  }
}