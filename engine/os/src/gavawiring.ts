import {
  nilApi,
  totApi,
  NilFileInput,
  TotFileInput,
  FilingProvider,
  GavaClient,
  ObligationCode,
} from "@smartvat/gavaconnect"
import { createFilingService, FilingServiceOptions, FilingService } from "./filing.js"
import { DeadlineConfig } from "./deadlines.js"
import { ObligationPeriod } from "./types.js"

/* ------------------------------------------------------------------ */
/* Real wiring: translates an OS ObligationPeriod into concrete         */
/* gavaconnect NIL / TOT input and drives the provider over a real      */
/* GavaClient. This is the deployment path -- tests keep using the      */
/* in-memory fakes.                                                     */
/* ------------------------------------------------------------------ */

export interface GavaWiringOptions {
  /** KRA PIN of the taxpayer the client files for. */
  kraPin: string
  mode: "nil" | "tot"
  /** TOT gross turnover per period (KES) when mode = "tot". */
  grossTurnover?: number
  obligation?: ObligationCode
  deadline?: DeadlineConfig
  now?: () => Date
}

function monthYear(period: string): { month: number; year: number } {
  const [y, m] = period.split("-").map((n) => Number(n))
  return { year: y ?? 0, month: m ?? 0 }
}

/**
 * Create a FilingService whose providers are wired to a live GavaClient.
 * The returned orchestrator drives the 17th-of-the-month deadline engine and
 * files genuine NIL (or TOT) returns as each period comes due.
 */
export function createWiredFilingService(
  client: GavaClient,
  opts: GavaWiringOptions,
): FilingService {
  const obligation: ObligationCode = opts.obligation ?? 1
  const service: FilingService = createFilingService(
    providers(client, opts, obligation),
    { deadlineConfig: opts.deadline ?? {}, now: opts.now } satisfies FilingServiceOptions,
  )
  return service
}

function providers(client: GavaClient, opts: GavaWiringOptions, obligation: ObligationCode): FilingProvider[] {
  const base = opts.mode === "nil" ? nilApi(client) : totApi(client)
  const toInput = (input: unknown) => {
    const period = (input as { period: ObligationPeriod }).period
    const { month, year } = monthYear(period.period)
    return opts.mode === "nil"
      ? ({ kraPin: opts.kraPin, obligation, month, year } satisfies NilFileInput)
      : ({ taxpayerPin: opts.kraPin, month, year, grossTurnover: opts.grossTurnover ?? 0 } satisfies TotFileInput)
  }
  return [
    {
      ...base,
      name: base.name,
      file(input: unknown) {
        return base.file(toInput(input))
      },
    },
  ]
}
