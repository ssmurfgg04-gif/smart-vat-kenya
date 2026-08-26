import { HttpTransport, createFetchTransport } from "./transport.js"

/**
 * Dojah Kenya - KRA PIN lookup.
 *
 * Complementary to the GavaConnect PIN checkers: Dojah's KYC endpoint returns
 * taxpayer status fields KRA's raw pinbypin response doesn't expose cleanly
 * (current_status, pin_status, obligation_name). Useful for the portal adapter's
 * `confirm()` and for surfacing obligation labels in the client shell.
 *
 * Endpoint: GET /api/v1/ke/kyc/kra?pin=<PIN>
 * Headers:  Authorization: <app_key> (Dojah uses the raw key, no "Bearer"),
 *           AppId: <app_id>
 */

export interface DojahKraResponse {
  entity: {
    pin: string
    taxpayer_name?: string
    current_status?: string
    pin_status?: string
    obligation_name?: string
    registration_date?: string
  } | null
  success?: boolean
  message?: string
}

export interface KraLookupResult {
  pin: string
  taxpayerName?: string
  /** KRA PIN lifecycle status: "Active" / "Inactive" / "Cancelled" / "Stopped" (entity.pin_status). */
  status?: string
  /** Registration posture: "Registered" / "Not Registered" (entity.current_status). */
  registrationStatus?: string
  obligationName?: string
}

export interface KraPinChecker {
  lookup(pin: string): Promise<KraLookupResult>
}

export interface DojahConfig {
  appId: string
  appKey: string
  /** "production" (api.dojah.io, default) or "sandbox" (sandbox.dojah.io). */
  environment?: "production" | "sandbox"
  baseUrl?: string
  transport?: HttpTransport
}

const DOJAH_BASE = "https://api.dojah.io"
const DOJAH_SANDBOX = "https://sandbox.dojah.io"

export class DojahError extends Error {
  constructor(
    message: string,
    readonly status?: number,
    readonly body?: unknown,
  ) {
    super(message)
    this.name = "DojahError"
  }
}

export function createDojahKraChecker(cfg: DojahConfig): KraPinChecker {
  const base =
    cfg.baseUrl ?? (cfg.environment === "sandbox" ? DOJAH_SANDBOX : DOJAH_BASE)
  const http = cfg.transport ?? createFetchTransport()

  return {
    async lookup(pin: string): Promise<KraLookupResult> {
      const res = await http.request({
        url: `${base}/api/v1/ke/kyc/kra?pin=${encodeURIComponent(pin)}`,
        method: "GET",
        headers: { Authorization: cfg.appKey, AppId: cfg.appId },
      })
      if (res.status !== 200) throw new DojahError("Dojah KRA lookup failed", res.status, res.body)
      const body = res.body as DojahKraResponse
      const entity = body.entity
      return {
        pin,
        taxpayerName: entity?.taxpayer_name,
        status: entity?.pin_status,
        registrationStatus: entity?.current_status,
        obligationName: entity?.obligation_name,
      }
    },
  }
}
