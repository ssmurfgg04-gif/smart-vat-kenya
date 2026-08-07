import { BillingGateway, LipaStkRequest } from "./mpesa.js"
import { HttpTransport, createFetchTransport } from "./transport.js"

/**
 * M-PESA Lipa na M-PESA STK Push transport (Safaricom Daraja API).
 *
 * A real `BillingGateway` that (1) obtains an OAuth access token from Daraja,
 * then (2) POSTs an STK-initiate request. Credentials and endpoints are
 * injected; HTTP I/O goes through the injectable `HttpTransport`.
 */

export interface MpesaConfig {
  consumerKey: string
  consumerSecret: string
  /** Business shortcode for the STK request. */
  shortCode: string
  passkey?: string
  callbackUrl?: string
  baseUrl?: string
  environment?: "sandbox" | "production"
  transport?: HttpTransport
}

const DARAJA_HOSTS = {
  sandbox: "https://sandbox.safaricom.co.ke",
  production: "https://api.safaricom.co.ke",
}

function b64(s: string): string {
  return Buffer.from(s, "utf8").toString("base64")
}

function stkTimestamp(d: Date): string {
  const pad = (n: number) => String(n).padStart(2, "0")
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`
}

export function createMpesaGateway(cfg: MpesaConfig): BillingGateway {
  const base = cfg.baseUrl ?? (cfg.environment === "sandbox" ? DARAJA_HOSTS.sandbox : DARAJA_HOSTS.production)
  const http = cfg.transport ?? createFetchTransport()

  async function accessToken(): Promise<string> {
    const res = await http.request({
      url: `${base}/oauth/v1/generate?grant_type=client_credentials`,
      method: "GET",
      headers: { Authorization: `Basic ${b64(`${cfg.consumerKey}:${cfg.consumerSecret}`)}` },
    })
    const token = (res.body as { access_token?: string })?.access_token
    if (!token) throw new MpesaError("no access token from Daraja", res.status, res.body)
    return token
  }

  return {
    async stkPush(req: LipaStkRequest): Promise<{ merchantRequestId: string }> {
      const token = await accessToken()
      const ts = stkTimestamp(new Date())
      const password = b64(`${cfg.shortCode}${cfg.passkey ?? ""}${ts}`)
      const res = await http.request({
        url: `${base}/mpesa/stkpush/v3/processrequest`,
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: {
          BusinessShortCode: cfg.shortCode,
          Password: password,
          Timestamp: ts,
          TransactionType: "CustomerPayBillOnline",
          Amount: req.amount,
          PartyA: req.phone.replace(/^\+/, ""),
          PartyB: cfg.shortCode,
          PhoneNumber: req.phone.replace(/^\+/, ""),
          CallBackURL: cfg.callbackUrl ?? "https://callback.smartvat.io/mpesa",
          AccountReference: req.accountReference,
          TransactionDesc: req.transDesc,
        },
      })
      const id = (res.body as { CheckoutRequestID?: string })?.CheckoutRequestID
      if (!id) throw new MpesaError("STK push returned no CheckoutRequestID", res.status, res.body)
      return { merchantRequestId: id }
    },
  }
}

export class MpesaError extends Error {
  constructor(
    message: string,
    readonly status?: number,
    readonly body?: unknown,
  ) {
    super(message)
    this.name = "MpesaError"
  }
}