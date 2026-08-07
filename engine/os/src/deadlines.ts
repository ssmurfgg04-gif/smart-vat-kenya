import { ObligationPeriod } from "./types.js"

/**
 * The "17th Guarantee" deadline engine.
 *
 * KRA VAT returns for period M are due on the 20th of month M+1. SmartVAT files
 * on the 17th by default — three whole working days of buffer before the KRA
 * deadline — so a portal outage or a rejection still has room to resubmit
 * before the 20th.
 *
 * Date math is done in UTC days; holiday adjustments are supplied by the caller
 * because public-holiday calendars are deployment-specific.
 */

export interface DeadlineConfig {
  /** Filing day-of-month for the target (default 17). */
  targetDay?: number
  /** KRA due day-of-month (default 20). */
  dueDay?: number
  /** Locale-ish holiday dates (ISO yyyy-mm-dd). These consume buffer days. */
  holidays?: Set<string>
  /** Injectable clock for deterministic tests. */
  now?: () => Date
}

export const DEFAULT_TARGET_DAY = 17
export const DEFAULT_DUE_DAY = 20

function isWeekend(d: Date): boolean {
  const day = d.getUTCDay()
  return day === 0 || day === 6
}

function toIso(d: Date): string {
  return d.toISOString().slice(0, 10)
}

/**
 * Produces the planning info for one obligation period.
 * @param period ISO month like "2026-07" (the period being filed).
 * @param config optional calendar tweaks / holidays.
 */
export function planPeriod(period: string, config: DeadlineConfig = {}): ObligationPeriod {
  const [year, month] = period.split("-").map((n) => Number(n))
  if (!year || !month || month < 1 || month > 12) {
    throw new Error(`invalid period "${period}"; expected ISO yyyy-mm`)
  }
  const targetDay = config.targetDay ?? DEFAULT_TARGET_DAY
  const dueDay = config.dueDay ?? DEFAULT_DUE_DAY

  // Filing month is the month after the obligation period.
  const due = new Date(Date.UTC(year, month, dueDay, 12, 0, 0))
  const base = new Date(Date.UTC(year, month, 1, 12, 0, 0))
  const target = new Date(Date.UTC(year, month, targetDay, 12, 0, 0))

  let buffer = 0
  // Count whole working days strictly after target (filing day) and before due.
  for (let d = new Date(target); d <= due; d.setUTCDate(d.getUTCDate() + 1)) {
    if (isWeekend(d)) continue
    if (toIso(d) === toIso(target)) continue
    if (config.holidays?.has(toIso(d))) continue
    if (d < due) buffer++
  }

  return {
    period,
    dueDate: toIso(due),
    targetDate: toIso(target),
    bufferWorkingDays: buffer,
  }
}

/**
 * The next periods that fall due within `daysAhead`, reported as due within
 * the current filing window. Drives the "what do we owe the 17th?" list.
 */
export function dueWithin(
  daysAhead: number,
  config: DeadlineConfig = {},
): ObligationPeriod[] {
  const now = (config.now ?? (() => new Date()))()
  const base = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1, 0, 0, 0))
  const periods: ObligationPeriod[] = []
  for (let y = now.getUTCFullYear() - 1; y <= now.getUTCFullYear() + 1; y++) {
    for (let m = 1; m <= 12; m++) {
      const period = `${y}-${String(m).padStart(2, "0")}`
      const plan = planPeriod(period, config)
      const diff = Math.round((new Date(plan.dueDate + "T00:00:00Z").getTime() - now.getTime()) / 86_400_000)
      if (diff >= 0 && diff <= daysAhead) periods.push(plan)
    }
  }
  void base
  return periods
}

/**
 * Periods whose *target* (17th) falls within the next `days` — the lead-up window
 * the reminder scheduler cares about. Also includes periods whose target has just
 * passed (`graceDays` back) so recently-filed returns can be confirmed. Scoped on
 * the target date rather than the due date so a lead nudge fires well before the
 * 20th.
 */
export function targetWindow(
  days: number,
  config: DeadlineConfig = {},
  graceDays = 4,
): ObligationPeriod[] {
  const now = (config.now ?? (() => new Date()))()
  const periods: ObligationPeriod[] = []
  for (let y = now.getUTCFullYear() - 1; y <= now.getUTCFullYear() + 1; y++) {
    for (let m = 1; m <= 12; m++) {
      const period = `${y}-${String(m).padStart(2, "0")}`
      const plan = planPeriod(period, config)
      const diff = Math.round((new Date(plan.targetDate + "T00:00:00Z").getTime() - now.getTime()) / 86_400_000)
      if (diff >= -graceDays && diff <= days) periods.push(plan)
    }
  }
  return periods
}