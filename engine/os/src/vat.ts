/**
 * VAT calculator - Finance Act 2025 / 2026 accurate constants and pure helpers.
 *
 * Correctness matters here: these numbers gate money moving between a business
 * and KRA. Values below were re-verified against the Finance Act 2025 and 2026,
 * the VAT Act 2013 and the TPA 2015 (sources cited per fact):
 *   · standard rate                      16%
 *   · mandatory registration             KES 5,000,000 (VAT Act 2013 s.34),
 *                                        mandatory within 30 days of crossing;
 *                                        voluntary below it. Finance Act 2025
 *                                        proposed 8M but that did not take effect
 *   · input-VAT claim window             6 months after the end of the tax
 *                                        period (VAT Act 2013 s.17)
 *   · refund claim window                12 months (Finance Act 2025 shortened
 *                                        it from 24)
 *   · bad-debt refund wait               3 years from supply (FA2025 cut 3->2;
 *                                        FA2026 restored 2->3 effective 1 Jul
 *                                        2026; immediate if the debtor enters
 *                                        statutory management/receivership or
 *                                        liquidation)
 *   · late-filing penalty                higher of KES 10,000 or 5% of tax due
 *   · late-payment                       5% of the unpaid amount + 1%/month
 *                                        interest (TPA 2015)
 */

export const VAT_RATE = 0.16 as const
/** Standard VAT rate expressed as a percentage (16%). */
export const VAT_RATE_PERCENT = 16 as const

/**
 * Mandatory registration turnover threshold, KES (VAT Act 2013 s.34).
 * KRA's official page and current-2026 professional guides (PwC; VAT Act as
 * amended) keep the compulsory threshold at an annual taxable turnover of
 * KES 5,000,000. The Finance Act 2025 proposed raising it to KES 8,000,000 but
 * that change has not taken effect; we keep the operative figure here and
 * expose the proposed one separately so callers can see both.
 */
export const VAT_REGISTRATION_THRESHOLD = 5_000_000 as const
/** Finance Act 2025 proposal to raise the mandatory threshold to 8M (not yet effective). */
export const VAT_REGISTRATION_THRESHOLD_PROPOSED = 8_000_000 as const
/** Finance Act 2025 proposal to allow voluntary registration from 5M. */
export const VAT_VOLUNTARY_THRESHOLD_PROPOSED = 5_000_000 as const
/** Days to register once the mandatory threshold is crossed (VAT Act s.34). */
export const REGISTRATION_DEADLINE_DAYS = 30 as const
/** Input-VAT claim window, months after the end of the tax period (VAT Act s.17). */
export const INPUT_CLAIM_WINDOW_MONTHS = 6 as const
/** Refund claim window, months (Finance Act 2025, down from 24). */
export const REFUND_WINDOW_MONTHS = 12 as const
/** Bad-debt VAT relief wait, months from the date of supply (VAT Act s.31). */
export const BAD_DEBT_REFUND_WAIT_MONTHS = 36 as const

const ROUND = 2
export const roundCents = (n: number): number => Math.round(n * 100) / 100

/** VAT charged on a net (exclusive) amount. */
export function vatOf(net: number): number {
  return roundCents(net * VAT_RATE)
}

/** Gross = net + VAT. */
export function addVat(net: number): number {
  return roundCents(net * (1 + VAT_RATE))
}

/** Net = inclusive amount stripped of VAT. */
export function removeVat(inclusive: number): number {
  return roundCents(inclusive / (1 + VAT_RATE))
}

/** VAT embedded in an inclusive amount (reverse-calculation). */
export function vatFromInclusive(inclusive: number): number {
  return roundCents(inclusive - removeVat(inclusive))
}

export type RegistrationStatus = "none" | "voluntary" | "mandatory"

/**
 * Where a business stands on registration given its annual taxable turnover.
 * Operative rule (VAT Act s.34): mandatory at KES 5M; voluntary below it.
 * Finance Act 2025's proposed 8M raise is not yet in force - see constants.
 */
export function registrationStatus(turnoverKes: number): RegistrationStatus {
  if (turnoverKes > 0 && turnoverKes < VAT_REGISTRATION_THRESHOLD) return "voluntary"
  if (turnoverKes >= VAT_REGISTRATION_THRESHOLD) return "mandatory"
  return "none"
}

/**
 * Days left to register (0 if already at/over the mandatory threshold).
 * VAT Act s.34 gives 30 days after crossing the threshold.
 */
export function registrationDeadlineOverdue(now: Date, thresholdCrossedAt: Date): boolean {
  const ms = now.getTime() - thresholdCrossedAt.getTime()
  return ms > REGISTRATION_DEADLINE_DAYS * 24 * 60 * 60 * 1000
}

/** Flat penalty for a late VAT return (higher of KES 10,000 or 5% of tax due). */
export function lateFilingPenalty(taxDueKes: number): number {
  return Math.max(10_000, roundCents(taxDueKes * 0.05))
}

/**
 * Penalty + interest for VAT paid late.
 * @param unpaidKes principal left unpaid
 * @param monthsLate whole or partial months the payment is overdue (>= 0)
 * @returns { penalty, interest, total }
 */
export function latePaymentCharge(
  unpaidKes: number,
  monthsLate: number,
): { penalty: number; interest: number; total: number } {
  const penalty = roundCents(unpaidKes * 0.05)
  const interest = roundCents(unpaidKes * 0.01 * Math.max(0, monthsLate))
  return { penalty, interest, total: roundCents(penalty + interest) }
}

/** True once a VAT refund invoice/credit is older than the 12-month window. */
export function isRefundStale(issuedMonthsAgo: number): boolean {
  return issuedMonthsAgo > REFUND_WINDOW_MONTHS
}

/** True once input VAT on an invoice is beyond the 6-month claim window. */
export function isInputClaimStale(monthsSincePeriodEnd: number): boolean {
  return monthsSincePeriodEnd > INPUT_CLAIM_WINDOW_MONTHS
}

/**
 * True when a supplier may claim a VAT bad-debt refund on an unpaid invoice.
 * Structural/banking customers or a customer in statutory management,
 * receivership or liquidation accelerate eligibility (VAT Act s.31, as amended
 * by FA2025/FA2026: 2 years -> restored to 3 years from 1 Jul 2026).
 */
export function canClaimBadDebtRefund(monthsSinceSupply: number, debtorInsolvent = false): boolean {
  if (debtorInsolvent) return monthsSinceSupply > 0
  return monthsSinceSupply >= BAD_DEBT_REFUND_WAIT_MONTHS
}