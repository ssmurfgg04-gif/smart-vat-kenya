import { HttpTransport, createFetchTransport } from "./transport.js"
import { TAXKE_WEBHOOK, verifyProviderWebhook } from "./webhooks.js"

/**
 * tax.ke eTIMS client (https://api.tax.ke).
 *
 * tax.ke is a third-party eTIMS aggregator: it accepts an ordinary invoice
 * payload, generates a KRA-compliant invoice, emits a QR code and syncs with KRA
 * (with its own retry/backoff up to 72h). We talk to it from the OS so a merchant
 * can issue compliant eTIMS invoices without running their own OSCU/VSCU control
 * unit. Webhook events (synced / failed / retrying) are HMAC-SHA256 signed and
 * verified here with `X-TaxKe-Signature`.
 */

export interface EtimsInvoiceInput {
  invoiceNumber: string
  date: string
  dueDate?: string
  business: {
    name: string
    address?: string
    taxId: string // KRA PIN
  }
  customer: {
    name: string
    address?: string
    taxId?: string
  }
  items: Array<{
    description: string
    quantity: number
    unitPrice: number
    total: number
  }>
  subtotal: number
  taxRate: number // e.g. 16
  taxAmount: number
  total: number
}

export interface EtimsGeneratedInvoice {
  invoiceNumber: string
  controlNumber: string
  qrCode?: string
  status: "synced" | "pending" | "failed"
}

export interface EtimsSyncStatus {
  invoiceNumber: string
  status: string
  retryCount?: number
  error?: string
}

export interface EtimsClient {
  /** Generate a KRA-compliant invoice via tax.ke (auto-synced to KRA). */
  generateInvoice(invoice: EtimsInvoiceInput): Promise<EtimsGeneratedInvoice>
  /** Look up the KRA sync status of an invoice by its client-side number. */
  status(invoiceNumber: string): Promise<EtimsSyncStatus>
  /** Verify an `X-TaxKe-Signature` webhook header against the raw body. */
  verifyWebhook(
    headers: Record<string, string | string[] | undefined>,
    rawBody: string,
  ): boolean
}

export interface TaxKeConfig {
  /** tax.ke API key (Authorization: Bearer ...). */
  apiKey: string
  /** Webhook secret used to verify X-TaxKe-Signature. */
  webhookSecret?: string
  baseUrl?: string
  transport?: HttpTransport
}

const TAXKE_BASE = "https://api.tax.ke"

export class TaxKeError extends Error {
  constructor(
    message: string,
    readonly status?: number,
    readonly body?: unknown,
  ) {
    super(message)
    this.name = "TaxKeError"
  }
}

export function createTaxKeEtims(cfg: TaxKeConfig): EtimsClient {
  const base = cfg.baseUrl ?? TAXKE_BASE
  const http = cfg.transport ?? createFetchTransport()

  return {
    async generateInvoice(invoice: EtimsInvoiceInput): Promise<EtimsGeneratedInvoice> {
      const res = await http.request({
        url: `${base}/api/etims/generate-invoice`,
        method: "POST",
        headers: { Authorization: `Bearer ${cfg.apiKey}` },
        body: invoice,
      })
      if (res.status !== 200) throw new TaxKeError("tax.ke generate-invoice failed", res.status, res.body)
      const data = res.body as {
        controlNumber?: string
        qrCode?: string
        status?: "synced" | "pending" | "failed"
        invoiceNumber?: string
      }
      if (!data.controlNumber) throw new TaxKeError("tax.ke returned no control number", res.status, res.body)
      return {
        invoiceNumber: data.invoiceNumber ?? invoice.invoiceNumber,
        controlNumber: data.controlNumber,
        qrCode: data.qrCode,
        status: data.status ?? "pending",
      }
    },

    async status(invoiceNumber: string): Promise<EtimsSyncStatus> {
      const res = await http.request({
        url: `${base}/api/etims/invoices/${encodeURIComponent(invoiceNumber)}`,
        method: "GET",
        headers: { Authorization: `Bearer ${cfg.apiKey}` },
      })
      if (res.status !== 200) throw new TaxKeError("tax.ke status failed", res.status, res.body)
      const data = res.body as {
        invoiceNumber?: string
        status?: string
        retryCount?: number
        error?: string
      }
      return {
        invoiceNumber: data.invoiceNumber ?? invoiceNumber,
        status: data.status ?? "unknown",
        retryCount: data.retryCount,
        error: data.error,
      }
    },

    verifyWebhook(headers, rawBody) {
      if (!cfg.webhookSecret) return false
      return verifyProviderWebhook(TAXKE_WEBHOOK, cfg.webhookSecret, headers, rawBody)
    },
  }
}
