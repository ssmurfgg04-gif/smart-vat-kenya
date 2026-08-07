import { ObligationPeriod } from "./types.js"
import { DeadlineConfig, dueWithin } from "./deadlines.js"
import { FilingProvider, RejectionHandler } from "@smartvat/gavaconnect"

/* ------------------------------------------------------------------ */
/* Filing orchestration that ties the gavaconnect provider port into   */
/* the "17th Guarantee" deadline engine.                                */
/*                                                                      */
/* SmartVAT files VAT returns on the 17th via a FilingProvider (today:  */
/* NIL / TOT behind GavaConnect). The provider is injected so the       */
/* orchestrator is fully unit-testable without a live KRA call.         */
/* ------------------------------------------------------------------ */

/** One unit of filing work the orchestrator wants for a period. */
export interface FilingTask {
  periodId: string
  provider: FilingProvider
  input: unknown
}

export interface FilingOutcome {
  periodId: string
  provider: string
  ok: boolean
  ack?: string
  error?: unknown
}

export interface FilingService {
  buildTasks(daysAhead: number): FilingTask[]
  runAll(daysAhead: number): Promise<FilingOutcome[]>
}

export interface FilingServiceOptions {
  deadlineConfig?: DeadlineConfig
  now?: () => Date
  /** Optional third party hook to see each task before it runs. */
  beforeEach?: (task: FilingTask) => void
}

/**
 * Create an orchestrator: `providers` is the wired set (e.g. nilApi +
 * totApi from gavaconnect). It drives the deadline engine to find periods
 * owed within the window, picks a provider per period, executes and routes
 * failures to `onRejected` when supplied. Every outcome is captured; it never
 * throws.
 */
export function createFilingService(
  providers: FilingProvider[],
  opts: FilingServiceOptions = {},
  onRejected?: RejectionHandler,
): FilingService {
  const deadlineConfig = opts.deadlineConfig ?? {}
  const now = opts.now

  function providerOwns(provider: FilingProvider, period: ObligationPeriod): boolean {
    return (provider as { covers?: (p: ObligationPeriod) => boolean }).covers?.(period) ?? false
  }

  function pickProvider(period: ObligationPeriod): FilingProvider | undefined {
    return providers.find((p) => providerOwns(p, period)) ?? providers[0]
  }

  return {
    buildTasks(daysAhead: number): FilingTask[] {
      const periods = dueWithin(daysAhead, deadlineConfig)
      const tasks: FilingTask[] = []
      for (const period of periods) {
        const provider = pickProvider(period)
        if (!provider || providers.length === 0) continue
        const task = { periodId: period.period, provider, input: { period } }
        opts.beforeEach?.(task)
        tasks.push(task)
      }
      return tasks
    },

    async runAll(daysAhead: number): Promise<FilingOutcome[]> {
      const outcomes: FilingOutcome[] = []
      for (const task of this.buildTasks(daysAhead)) {
        try {
          const res = await task.provider.file(task.input)
          outcomes.push({ periodId: task.periodId, provider: task.provider.name, ok: res.ack, ack: res.reference })
          if (!res.ack && onRejected) await onRejected.onRejected(task, res)
        } catch (error) {
          outcomes.push({ periodId: task.periodId, provider: task.provider.name, ok: false, error })
          if (onRejected) await onRejected.onRejected(task, error)
        }
      }
      return outcomes
    },
  }
}