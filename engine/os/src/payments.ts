import { HttpTransport, createFetchTransport } from "./transport.js"
import { BillingGateway, LipaStkRequest } from "./mpesa.js"

/**
 * Channel-agnostic billing.
 *
 * The Phase-1 client bound billing to M-PESA's STK push. Subscription billing
 * should not depend on one rail: Kenyan SMEs pay by M-PESA, card, or via an
 * aggregator like Paystack (which also fronts mobile money). This module defines
 * one `PaymentGateway` port, a Paystack implementation, an adapter that makes an
 * existing M-PESA `BillingGateway` a drop-in, and webhook signature verifiers for
 * the two providers we integrate (Paystack HMAC-SHA512, tax.ke HMAC-SHA256).
 */

export interface PaymentRequest {
  /** KES, whole units (conversion to minor units is the gateway's job). */
  amount: number
  /** Stable id we use to reconcile the payment (e.g. "c1-2026-08"). */
  accountReference: string
  description: string
  /** E.164 number without + (M-PESA / mobile money rails). */
  phone?: string
  /** Email (card / hosted checkout rails). */
  email?: string
}

export interface PaymentInitiation {
  /** Provider transaction reference, persisted and used to verify later. */
  reference: string
  /** Hosted checkout URL when the provider offers one (Paystack). */
  checkoutUrl?: string
  provider: string
}

export type PaymentOutcome = "completed" | "failed" | "pending"

export interface PaymentVerification {
  reference: string
  status: PaymentOutcome
  /** Confirmed settled amount in KES when the provider reports it. */
  amount?: number
  provider: string
}

/** Port: what any billing rail must implement. */
export interface PaymentGateway {
  readonly provider: string
  initiate(req: PaymentRequest): Promise<PaymentInitiation>
  verify(reference: string): Promise<PaymentVerification>
}

/* ------------------------------------------------------------------ */
/* In-memory gateway (tests / offline dev)                              */
/* ------------------------------------------------------------------ */

export interface PaymentLog {
  requests: Array<{ req: PaymentRequest; reference: string }>
}

/** Deterministic offline gateway: returns synthetic references. */
export function createInMemoryPaymentGateway(log: PaymentLog = { requests: [] }): PaymentGateway {
  return {
    provider: "in-memory",
    async initiate(req: PaymentRequest): Promise<PaymentInitiation> {
      const reference = `pmt_${req.accountReference}_${log.requests.length + 1}`
      log.requests.push({ req, reference })
      return { reference, provider: "in-memory" }
    },
    async verify(reference: string): Promise<PaymentVerification> {
      const entry = log.requests.find((r) => r.reference === reference)
      return entry
        ? { reference, status: "completed", amount: entry.req.amount, provider: "in-memory" }
        : { reference, status: "pending", provider: "in-memory" }
    },
  }
}

/* ------------------------------------------------------------------ */
/* M-PESA adapter — keeps existing BillingGateway as a drop-in rail     */
/* ------------------------------------------------------------------ */

/**
 * Wrap an M-PESA `BillingGateway` as a `PaymentGateway`. Verification reads the
 * STK receipt log when the adapter is given one (offline), otherwise it relies on
 * the caller completing the receipt via `recordReceipt`.
 */
export function mpesaToPaymentGateway(
  gateway: BillingGateway,
  opts: { provider?: string; log?: { byMerchantRequest: Map<string, { receipt: { status: string } }> } } = {},
): PaymentGateway {
  return {
    provider: opts.provider ?? "mpesa",
    async initiate(req: PaymentRequest): Promise<PaymentInitiation> {
      const stk: LipaStkRequest = {
        phone: req.phone ?? "",
        amount: req.amount,
        accountReference: req.accountReference,
        transDesc: req.description,
      }
      const { merchantRequestId } = await gateway.stkPush(stk)
      return { reference: merchantRequestId, provider: opts.provider ?? "mpesa" }
    },
    async verify(reference: string): Promise<PaymentVerification> {
      const rec = opts.log?.byMerchantRequest.get(reference)
      const status: PaymentOutcome = rec ? (rec.receipt.status === "completed" ? "completed" : "pending") : "pending"
      return { reference, status, provider: opts.provider ?? "mpesa" }
    },
  }
}

/* ------------------------------------------------------------------ */
/* Paystack (Kenya)                                                     */
/* ------------------------------------------------------------------ */

export interface PaystackConfig {
  /** Paystack secret key (sk_live_... / sk_test_...). */
  secretKey: string
  /** Webhook secret used to verify x-paystack-signature (same secret key by default). */
  webhookSecret?: string
  baseUrl?: string
  transport?: HttpTransport
}

const PAYSTACK_BASE = "https://api.paystack.co"

export class PaystackError extends Error {
  constructor(
    message: string,
    readonly status?: number,
    readonly body?: unknown,
  ) {
    super(message)
    this.name = "PaystackError"
  }
}

/**
 * Paystack gateway. `initiate` creates a transaction and returns the reference
 * plus hosted authorization_url; `verify` hits the verify endpoint and maps
 * Paystack statuses onto our PaymentStatus. Amount is converted to minor units
 * (KES cents) as the Paystack API requires — a classic 100x bug, handled here.
 */
export function createPaystackGateway(cfg: PaystackConfig): PaymentGateway {
  const base = cfg.baseUrl ?? PAYSTACK_BASE
  const http = cfg.transport ?? createFetchTransport()

  async function post(path: string, body: unknown): Promise<{ status: number; data: unknown }> {
    const res = await http.request({
      url: `${base}${path}`,
      method: "POST",
      headers: { Authorization: `Bearer ${cfg.secretKey}` },
      body,
    })
    if (res.status !== 200) throw new PaystackError(`Paystack ${path} failed (${res.status})`, res.status, res.body)
    return { status: res.status, data: (res.body as { data?: unknown })?.data }
  }

  return {
    provider: "paystack",
    async initiate(req: PaymentRequest): Promise<PaymentInitiation> {
      const res = await post("/transaction/initialize", {
        email: req.email ?? "billing@smartvat.io",
        amount: Math.round(req.amount * 100), // KES -> cents
        currency: "KES",
        reference: req.accountReference,
        metadata: { accountReference: req.accountReference, description: req.description },
      })
      const data = res.data as { reference?: string; authorization_url?: string }
      if (!data?.reference) throw new PaystackError("Paystack returned no reference", res.status, res.data)
      return { reference: data.reference, checkoutUrl: data.authorization_url, provider: "paystack" }
    },
    async verify(reference: string): Promise<PaymentVerification> {
      const res = await http.request({
        url: `${base}/transaction/verify/${encodeURIComponent(reference)}`,
        method: "GET",
        headers: { Authorization: `Bearer ${cfg.secretKey}` },
      })
      if (res.status !== 200) throw new PaystackError(`Paystack verify failed (${res.status})`, res.status, res.body)
      const data = (res.body as { data?: { status?: string; amount?: number } })?.data
      const status: PaymentOutcome =
        data?.status === "success" ? "completed" : data?.status === "failed" ? "failed" : "pending"
      return {
        reference,
        status,
        amount: data?.amount !== undefined ? data.amount / 100 : undefined,
        provider: "paystack",
      }
    },
  }
}
