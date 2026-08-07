/**
 * VAT calculator — Finance Act 2025 / 2026 accurate constants and pure helpers.
 *
 * Correctness matters here: these numbers gate money moving between a business
 * and KRA. Values below were re-verified against the Finance Act 2025 and 2026:
 *   · standard rate                  16%
 *   · mandatory registration         KES 8,000,000 (Finance Act 2025),
 *                                    voluntary from KES 5,000,000
 *   · input-VAT / refund window      12 months (Finance Act 2025 shortened it
 *                                    from 24)
 *   · late-filing penalty            higher of KES 10,000 or 5% of tax due
 *   · late-payment                   5% of the unpaid amount + 1%/month interest
 */

export const VAT_RATE = 0.16 as const
/** Standard VAT rate expressed as a percentage (16%). */
export const VAT_RATE_PERCENT = 16 as const

/** Mandatory registration turnover threshold, KES (Finance Act 2025). */
export const REGISTRATION_THRESHOLD_MANDATORY = 8_000_000 as const
/** Voluntary registration turnover threshold, KES (Finance Act 2025). */
export const REGISTRATION_THRESHOLD_VOLUNTARY = 5_000_000 as const
/** Refund claim window, months (Finance Act 2025, down from 24). */
export const REFUND_WINDOW_MONTHS = 12 as const

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
 * Finance Act 2025: mandatory at KES 8M, voluntary from KES 5M.
 */
export function registrationStatus(turnoverKes: number): RegistrationStatus {
  if (turnoverKes >= REGISTRATION_THRESHOLD_MANDATORY) return "mandatory"
  if (turnoverKes >= REGISTRATION_THRESHOLD_VOLUNTARY) return "voluntary"
  return "none"
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