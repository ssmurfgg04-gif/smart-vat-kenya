/* ------------------------------------------------------------------ */
/* SmartVAT Client layer — M-PESA (Lipa na M-Pesa STK Push) billing.    */
/*                                                                      */
/* Models a request to initiate a STK push and the async confirmation   */
/* that Safaricom posts back (Callback) as a payment event. The actual   */
/* network call to the Daraja API is behind a `BillingGateway` port so   */
/* the packaging logic is unit-testable without live M-PESA.             */
/* ------------------------------------------------------------------ */

export interface LipaStkRequest {
  /** E.164 phone without + (e.g. 254712345678). */
  phone: string
  amount: number // KES
  accountReference: string // e.g. clientId-period
  transDesc: string
  /** M-PESA currency code; always KES. */
  currency?: string
}

export type PaymentStatus = "pending" | "completed" | "failed"

export interface PaymentReceipt {
  /** Safaricom CheckoutRequestID when known. */
  merchantRequestId?: string
  status: PaymentStatus
  /** M-PESA confirmation code (M-PESA Receipt) on success. */
  mpesaReceipt?: string
  amount?: number
  phone?: string
  paidAt?: string
}

/** Port: what an operator (M-PESA Daraja) must implement to initiate a push. */
export interface BillingGateway {
  stkPush(req: LipaStkRequest): Promise<{ merchantRequestId: string }>
}

/**
 * Offline gateway for tests/local. It resolves payment to "initiated" and lets
 * a test/stub complete/refuse settlement as a payment event later.
 */
export function createInMemoryGateway(
  receipts: StkReceiptLog = { byMerchantRequest: new Map() },
): BillingGateway {
  return {
    async stkPush(req: LipaStkRequest): Promise<{ merchantRequestId: string }> {
      const id = `ws_COM${Date.now().toString(36)}${req.phone.slice(-4)}`
      receipts.byMerchantRequest.set(id, { request: req, receipt: { merchantRequestId: id, status: "pending" } })
      return { merchantRequestId: id }
    },
  }
}

export interface StkReceiptLog {
  byMerchantRequest: Map<string, { request: LipaStkRequest; receipt: StkReceipt }>
}

/** Wraps a payment event so the caller can reconcile without real Daraja. */
export interface StkReceipt {
  merchantRequestId: string
  status: PaymentStatus
  mpesaReceipt?: string
}

export type { LipaStkRequest as default }