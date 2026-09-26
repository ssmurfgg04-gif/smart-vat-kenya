import { targetWindow, DeadlineConfig } from "./deadlines.js"
import { ClientStore } from "./store.js"
import { Messenger } from "./whatsapp.js"

/**
 * The encoded intervention: remind → say it's handled → deterrence-framed.
 *
 * SmartVAT nudges clients on a cadence so the 17th-of-the-month filing actually
 * happens: a friendly lead-in a few days out, a "we filed it" confirmation on
 * success, and a short deterrence-framed nudge for anything still missing near
 * the due date. All copy is injectable for A/B testing.
 */

export type ReminderStage = "lead" | "filed_ok" | "overdue"

export interface ReminderMessage {
  clientId: string
  periodId: string
  stage: ReminderStage
  body: string
}

export interface ReminderCopy {
  lead(periodId: string, deadline: string): string
  filedOk(periodId: string): string
  overdue(periodId: string, deadline: string): string
}

export const DEFAULT_COPY: ReminderCopy = {
  lead: (p, d) =>
    `SmartVAT: your ${p} VAT return (due ${d}) is handled -- we file on the 17th. Nothing for you to do.`,
  filedOk: (p) => `SmartVAT: your ${p} VAT return was filed successfully. Receipt on file.`,
  overdue: (p, d) =>
    `SmartVAT: ${p} was due ${d} and is not yet filed. Late returns add penalty + 1%/mo interest. Reply FILED to have us file it now.`,
}

export interface SchedulerOptions {
  /** Lead-up window in days around the filing target (default 10). */
  dueDays?: number
  copy?: ReminderCopy
  now?: () => Date
  deadline?: DeadlineConfig
}

export interface ReminderPlanEntry extends ReminderMessage {
  /** The messenger this reminder goes to (for dispatch). */
  phone: string
}

export interface DispatchResult {
  sent: number
  total: number
}

/**
 * Build the reminder plan for all active clients: find obligation periods in
 * the window and emit one reminder per client/period, labeled by what we know
 * (already filed vs handled-upcoming). Pure and re-ran idempotently.
 */
export function buildReminderPlan(
  store: ClientStore,
  opts: SchedulerOptions = {},
): ReminderPlanEntry[] {
  const copy = opts.copy ?? DEFAULT_COPY
  const horizon = opts.dueDays ?? 10
  const deadline: DeadlineConfig = opts.deadline ?? { now: opts.now }
  const now = (deadline.now ?? (() => new Date()))()
  const out: ReminderPlanEntry[] = []

  for (const client of store.clients()) {
    if (client.status !== "active") continue
    const periods = targetWindow(horizon, deadline)
    for (const period of periods) {
      const alreadyFiled = store.filings(client.clientId).some(
        (f) => f.periodId === period.period && f.ok,
      )
      const duePassed = now >= new Date(period.dueDate + "T00:00:00Z")
      let stage: ReminderStage
      let body: string
      if (alreadyFiled) {
        stage = "filed_ok"
        body = copy.filedOk(period.period)
      } else if (duePassed) {
        stage = "overdue"
        body = copy.overdue(period.period, period.dueDate)
      } else {
        stage = "lead"
        body = copy.lead(period.period, period.dueDate)
      }
      out.push({ clientId: client.clientId, periodId: period.period, stage, body, phone: client.phone })
    }
  }
  return out
}

/** Dispatch the plan through the messenger; returns counts. Never throws. */
export async function dispatchReminders(
  store: ClientStore,
  messenger: Messenger,
  opts: SchedulerOptions = {},
): Promise<DispatchResult> {
  const plan = buildReminderPlan(store, opts)
  let sent = 0
  for (const r of plan) {
    try {
      await messenger.send({ clientId: r.clientId, to: r.phone, body: r.body })
      sent++
    } catch {
      // individual failure is non-fatal, but the plan is complete either way
    }
  }
  return { sent, total: plan.length }
}