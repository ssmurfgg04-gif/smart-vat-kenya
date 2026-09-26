/**
 * SmartVAT OS - 2026 return-rematch (validation) module.
 *
 * Since January 2026 KRA's Income & Expense Validation Engine cross-checks
 * every figure on a filed return against eTIMS invoice data month-to-month,
 * not only at audit. This module encodes that engine's rules so SmartVAT can
 * "rematch" a merchant's declared figures against their eTIMS data BEFORE they
 * file:
 *
 *   · declared sales can only be adjusted UPWARDS (the auto-populated return
 *     supplies the floor; you cannot declare below your transmitted invoices)
 *   · expenses without a transmitted, buyer-PIN'd eTIMS invoice are at risk
 *   · gaps within the tolerance band are typically ignored; larger gaps attract
 *     a query letter with a 14-day response window, then escalation to audit
 */

import {
  ValidationOutput,
  ValidationIssue,
  InvoiceMatch,
} from "./types.js"

export { ValidationOutput, ValidationIssue, InvoiceMatch }

/**
 * Tolerance band for declared-vs-eTIMS gaps KRA typically ignores. KRA has not
 * published exact thresholds; ~5% is the practical working range.
 */
export const VALIDATION_TOLERANCE = 0.05

/** Response window (days) for a KRA query letter after a mismatch flag. */
export const QUERY_RESPONSE_DAYS = 14

/** Months after the tax period in which late-transmitted purchases stays claimable. */
export const LATE_TRANSMISSION_WINDOW_MONTHS = 6

/** KRA maximum processing time for a lodged refund application (days). */
export const REFUND_PROCESSING_DAYS = 120

export interface ValidationInput {
  /** Sales declared on the return, KES. */
  declaredSales: number
  /** Sales transmitted to KRA via eTIMS for the period, KES. */
  etimsSales: number
  /** Expenses / input claimed on the return, KES. */
  declaredExpenses: number
  /** Purchases matched to transmitted eTIMS invoices with buyer PIN, KES. */
  etimsSupportedPurchases: number
}

/**
 * The alignment check KRA's validation engine runs, translated into a verdict:
 * declared figures that match the eTIMS record within tolerance → file as-is.
 * Anything else gets a plain-language fix list before the merchant submits.
 */
export function validateReturn(input: ValidationInput): ValidationOutput {
  const salesGap = input.etimsSales - input.declaredSales
  const salesGapPct = input.etimsSales > 0 ? Math.abs(salesGap) / input.etimsSales : 0

  const expenseGap = Math.max(0, input.declaredExpenses - input.etimsSupportedPurchases)
  const expenseGapPct =
    input.declaredExpenses > 0 ? expenseGap / input.declaredExpenses : 0

  const issues: ValidationIssue[] = []

  if (salesGap > 0 && salesGapPct > VALIDATION_TOLERANCE) {
    issues.push({
      code: "SALES_UNDER_REPORTED",
      severity: "elevated",
      message:
        `eTIMS sales (${formatKES(input.etimsSales)}) exceed declared sales ` +
        `(${formatKES(input.declaredSales)}) by ~${formatPct(salesGapPct)}. KRA flags ` +
        `this; the auto-populated return only lets you go up.`,
      gapKes: salesGap,
    })
  } else if (salesGap < 0) {
    issues.push({
      code: "SALES_OVER_DECLARED_OK",
      severity: "low",
      message:
        `Declared sales are ${formatKES(-salesGap)} above eTIMS transmissions - ` +
        `acceptable, since the return only allows UPWARD adjustments.`,
      gapKes: salesGap,
    })
  }

  if (expenseGap > 0 && expenseGapPct > VALIDATION_TOLERANCE) {
    issues.push({
      code: "EXPENSES_UNSUPPORTED",
      severity: "high",
      message:
        `${formatKES(expenseGap)} of claimed expenses have no matched eTIMS ` +
        `purchase invoice carrying your PIN. Under the 2026 engine these are at ` +
        `risk of disallowance; you have ${QUERY_RESPONSE_DAYS} days to answer a query.`,
      gapKes: expenseGap,
    })
  }

  let status: ValidationOutput["status"] = "clean"
  if (issues.some((x) => x.severity === "high")) status = "broken"
  else if (issues.some((x) => x.severity === "elevated")) status = "attention"

  const summary =
    status === "clean"
      ? "Declared figures match your eTIMS record within tolerance. File as-is."
      : status === "attention"
        ? "Raise the declared sales to your transmitted level, then file - the KRA return only accepts upward."
        : "Expenses above what your eTIMS purchase invoices support will be queried. Reconcile before filing."

  return {
    status,
    summary,
    values: {
      declaredSales: input.declaredSales,
      etimsSales: input.etimsSales,
      declaredExpenses: input.declaredExpenses,
      etimsSupportedPurchases: input.etimsSupportedPurchases,
    },
    salesGapKes: salesGap,
    expenseGapKes: input.etimsSupportedPurchases - input.declaredExpenses,
    tolerance: VALIDATION_TOLERANCE,
    queryResponseDays: QUERY_RESPONSE_DAYS,
    issues,
    generatedAt: new Date().toISOString(),
  }
}

/**
 * Buyer-side match: for a supplier invoice to be claimable input VAT it must
 * be transmitted to KRA AND carry the buyer's PIN. Port to the gavaconnect
 * invoice-checker when wired to a live client.
 */
export function classifyMatchedInvoices(
  invoices: Array<{ declared: number; transmitted: boolean; hasBuyerPin: boolean }>,
): InvoiceMatch[] {
  return invoices.map((inv) => {
    const reason: InvoiceMatch["reason"] = !inv.transmitted
      ? "NOT_TRANSMITTED"
      : !inv.hasBuyerPin
        ? "NO_BUYER_PIN"
        : null
    return {
      declared: inv.declared,
      transmitted: inv.transmitted,
      hasBuyerPin: inv.hasBuyerPin,
      claimable: reason === null,
      reason,
    }
  })
}

function formatKES(n: number): string {
  return `KES ${Math.round(n).toLocaleString("en-KE")}`
}

function formatPct(n: number): string {
  return `${Math.round(n * 100)}%`
}
