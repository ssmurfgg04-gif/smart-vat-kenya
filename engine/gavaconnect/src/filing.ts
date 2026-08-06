import { GavaClient } from "./portal.js"
import { Logger } from "./logger.js"
import { ObligationCode } from "./types.js"

/**
 * Pluggable filing adapter.
 *
 * Design: a filing is a provider implementing FilingProvider. Today we support
 * NIL and TOT. When KRA lands the VAT return API on GavaConnect it will follow
 * the same envelope (taxpayer details + period + transaction data validated
 * against eTIMS) — so "VAT return" becomes one more provider behind the same
 * interface, nothing in the deadline engine changes.
 */

export interface FileResponse {
  /** True when KRA acknowledged the filing (returns status OK). */
  ack: boolean
  /** KRA ack/PRN reference string when available. */
  reference?: string
  provider: string
  obligation: ObligationCode
  /** Structured, redacted event for the golden dataset. */
  golden: {
    domain: string
    event: string
    payload: Record<string, unknown>
  }
}

export interface NilFileInput {
  kraPin: string
  obligation: ObligationCode
  month: number
  year: number
}

export interface TotFileInput {
  taxpayerPin: string
  month: number
  year: number
  grossTurnover: number
}

/** Common contract the deadline engine drives. */
export interface FilingProvider {
  readonly name: string
  file(input: unknown): Promise<FileResponse>
}

export interface DeadlineEnginePort {
  /** Enumerate FilingPeriod.status ∈ (pending, collected) due within `daysAhead`.
   *  Returned as distinct filing tasks. */
  pending(
    daysAhead: number,
    today: () => Date,
  ): Array<{ periodId: string; provider: FilingProvider; input: unknown }>
}

export interface RejectionHandler {
  /** Called on KRA NOK (e.g. NIL duplicate period, or invalid PIN). */
  onRejected(task: unknown, error: unknown): Promise<void>
}

export function nilApi(gava: GavaClient, logger?: Logger): FilingProvider {
  const log = logger ?? new Logger()
  return {
    name: "nil",
    async file(input: unknown): Promise<FileResponse> {
      const i = input as NilFileInput
      const res = await gava.fileNilReturn({
        TaxpayerPIN: i.kraPin,
        ObligationCode: i.obligation,
        Month: i.month,
        Year: i.year,
      })
      log.goldenEvent("filing", "nil", {
        provider: "nil",
        ack: res.AckNumber,
        status: res.Status,
      })
      ensureOk(res.ResponseCode, res.Status, "nil-return")
      return {
        ack: res.Status === "OK",
        reference: res.AckNumber,
        provider: "nil",
        obligation: i.obligation,
        golden: {
          domain: "filing",
          event: "nil_ok",
          payload: { ack: res.AckNumber, obligation: i.obligation },
        },
      }
    },
  }
}

export function totApi(gava: GavaClient, logger?: Logger): FilingProvider {
  const log = logger ?? new Logger()
  return {
    name: "tot",
    async file(input: unknown): Promise<FileResponse> {
      const i = input as TotFileInput
      const res = await gava.fileTotReturn({
        TaxpayerPIN: i.taxpayerPin,
        Month: i.month,
        Year: i.year,
        GrossTurnover: i.grossTurnover,
      })
      log.goldenEvent("filing", "tot", {
        provider: "tot",
        prn: res.PRN,
        status: res.Status,
      })
      ensureOk(res.ResponseCode, res.Status, "tot-return")
      return {
        ack: res.Status === "OK",
        reference: res.PRN,
        provider: "tot",
        obligation: 1, // placeholder; caller overrides via input
        golden: {
          domain: "filing",
          event: "tot_ok",
          payload: { reference: res.PRN },
        },
      }
    },
  }
}

function ensureOk(responseCode: string, status: string, label: string): void {
  if (status === "NOK") throw new Error(`${label}: KRA returned NOK (${responseCode})`)
}