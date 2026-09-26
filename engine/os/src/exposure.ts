import {
  AmnestyDiagnosis,
  RefundAssessment,
  RefundStatus,
  SpecialTableScreenResult,
  SupplierExposure,
} from "./types.js"

/** Port onto the KRA Special Table / supplier check (gavaconnect invoice-checker or a dataset). */
export interface SpecialTableChecker {
  lookup(pin: string): Promise<{ onSpecialTable: boolean; lastSeen?: string; name?: string }>
}

export interface SupplierRecord {
  pin: string
  name: string
  /** Input VAT value claimed against this supplier this period, KES. */
  claimedInputVat: number
}

/**
 * Screens a supplier list against the Special Table and sums exposed input VAT.
 */
export async function screenSuppliers(
  checker: SpecialTableChecker,
  suppliers: SupplierRecord[],
): Promise<SpecialTableScreenResult> {
  const results: SupplierExposure[] = []
  let exposed = 0
  for (const s of suppliers) {
    const hit = await checker.lookup(s.pin)
    results.push({
      supplierPin: s.pin,
      supplierName: hit.name ?? s.name,
      onSpecialTable: hit.onSpecialTable,
      blockedInputVat: hit.onSpecialTable ? s.claimedInputVat : 0,
      lastSeenOnTable: hit.lastSeen,
    })
    if (hit.onSpecialTable) exposed += s.claimedInputVat
  }
  return {
    exposedInputVat: exposed,
    suppliers: results,
    flaggedCount: results.filter((r) => r.onSpecialTable).length,
    scannedAt: new Date().toISOString(),
  }
}

/* ------------------------------------------------------------------ */
/* KRA Tax Amnesty 2026 - three-path diagnosis                         */
/* ------------------------------------------------------------------ */

export const AMNESTY_WINDOW_END = "2026-12-31"

export interface AmnestyInput {
  /** Principal tax settled in full by 31 Dec 2025? */
  principalPaidByEnd2025: boolean
  /** Outstanding principal owed from before 2026 (not paid by end-2025)? */
  unpaidPrincipalPre2026: boolean
  /** Outstanding *returns* (not just penalties) need filing? */
  hasOutstandingReturns: boolean
  /** Liability that arose after 1 Jan 2026, or under active dispute? */
  excluded: boolean
  /** Already on a structured payment plan being cleared by 31 Dec 2026? */
  onPaymentPlan: boolean
}

export function diagnoseAmnesty(input: AmnestyInput): AmnestyDiagnosis {
  if (input.excluded) {
    return {
      path: "excluded",
      summary:
        "This liability falls outside the amnesty window (post-1 Jan 2026 or under active dispute).",
      action: "No amnesty relief applies. We advise on normal penalty mitigation.",
      windowEnds: AMNESTY_WINDOW_END,
      details: ["Liability arises after the cut-off, or is under active dispute."],
    }
  }
  if (input.principalPaidByEnd2025) {
    return {
      path: "automatic_full_waiver",
      summary: "100% automatic waiver of penalties, interest and fines -- no application needed.",
      action: "Nothing to file. Retain your prior settlement records.",
      windowEnds: AMNESTY_WINDOW_END,
      details: ["Principal paid by 31 Dec 2025 qualifies for a full automatic waiver."],
    }
  }
  if (input.unpaidPrincipalPre2026 === false && input.hasOutstandingReturns) {
    return {
      path: "file_returns_to_waive",
      summary: "Automatic waiver -- only outstanding returns need filing.",
      action: "File all outstanding returns; the waiver applies automatically.",
      windowEnds: AMNESTY_WINDOW_END,
      details: [
        "No principal owed",
        "Waiver releases on filing the missing returns",
        "SmartVAT files them and confirms the waiver in writing",
      ],
    }
  }
  if (input.onPaymentPlan) {
    return {
      path: "pay_principal_to_waive",
      summary: "Waiver applies once the structured principal plan fully clears by 31 Dec 2026.",
      action: "Continue the structured payment plan to completion before the deadline.",
      windowEnds: AMNESTY_WINDOW_END,
      details: [
        "Principal must be fully paid by the window end",
        "Penalty/interest waived on settlement",
      ],
    }
  }
  return {
    path: "pay_principal_to_waive",
    summary: "Waiver granted on full settlement of the pre-2026 principal by 31 Dec 2026.",
    action: "Pay principal in full (lump sum or a structured plan cleared by year end).",
    windowEnds: AMNESTY_WINDOW_END,
    details: [
      "Requires clearing outstanding principal by 31 Dec 2026",
      "We can structure and file the returns that unlock the waiver",
    ],
  }
}

/* ------------------------------------------------------------------ */
/* Refund recovery assessment                                          */
/* ------------------------------------------------------------------ */

export interface RefundInput {
  /** Total input VAT carried (recoverable credits), KES. */
  inputVat: number
  /** Output VAT charged in the same period, KES. */
  outputVat: number
  /** Input VAT currently blocked (flagged supplier etc.), KES. */
  blocked: number
  /** Input VAT older than 6 months (aging; may need documentation). */
  stale: number
  /** Business mostly exports / zero-rated supplies? */
  zeroRated: boolean
  /** Prior refund application still pending at KRA? */
  pendingRefund: boolean
  /**
   * Whole months since the credit first became refundable. Used by the
   * 12-month refund clock (Finance Act 2025); omit to disable the clock.
   */
  ageMonths?: number
}

export function assessRefund(i: RefundInput): RefundAssessment {
  const net = i.inputVat - i.outputVat
  const claimable = Math.max(0, i.inputVat - i.blocked - i.outputVat)
  const blockedAmount = i.blocked

  const blockers: string[] = []
  if (i.blocked > 0) blockers.push("Input VAT blocked by a flagged supplier")
  if (i.stale > 0) blockers.push("Input VAT older than 6 months may require documentation")
  if (i.pendingRefund) blockers.push("A prior refund application is still pending")

  const REFUND_WINDOW_MONTHS = 12
  const PROCESSING_DAYS = 120
  const stale =
    i.ageMonths !== undefined ? i.ageMonths >= REFUND_WINDOW_MONTHS : false
  const daysLeftClosure =
    i.ageMonths === undefined
      ? undefined
      : Math.max(0, Math.round((REFUND_WINDOW_MONTHS - i.ageMonths) * 30.44))

  if (net <= 0) {
    return {
      status: "not_eligible",
      claimableAmount: 0,
      blockedAmount,
      blockers,
      requiredDocuments: [],
      recommended: "No refund balance; net output VAT exceeds recoverable input.",
      stale,
      ageMonths: i.ageMonths,
      daysLeftClosure,
      processingDays: PROCESSING_DAYS,
    }
  }

  if (stale) {
    return {
      status: "stale",
      claimableAmount: 0,
      blockedAmount,
      blockers: [...blockers, "Refund credit is beyond the 12-month claim window"],
      requiredDocuments: ["E-TIMS compliant invoices", "VAT return history"],
      recommended:
        "The 12-month Finance Act 2025 refund window has lapsed. Explore KRA amnesty / written representation, or whether any portion still falls within a 12-month period.",
      stale,
      ageMonths: i.ageMonths,
      daysLeftClosure: 0,
      processingDays: PROCESSING_DAYS,
    }
  }

  const requiredDocuments = ["E-TIMS compliant invoices", "VAT return history"]
  if (i.zeroRated) requiredDocuments.push("Export / zero-rated supply evidence")

  let status: RefundStatus = "claimable"
  if (blockedAmount > 0 || i.pendingRefund) status = "partially_claimable"
  if (blockedAmount >= net) status = "blocked"

  const clockNote =
    i.ageMonths !== undefined
      ? ` Approximately ${daysLeftClosure} days remain in the 12-month claim window. KRA has up to ${PROCESSING_DAYS} days to process once lodged.`
      : ` KRA has up to ${PROCESSING_DAYS} days to process once lodged.`

  return {
    status,
    claimableAmount: claimable,
    blockedAmount,
    blockers,
    requiredDocuments,
    recommended: (i.zeroRated
      ? "Export/zero-rated input is refundable; file for the export refund stream."
      : "Standard input-VAT refund stream; lodge the claim within the 12-month Finance Act 2025 window before it lapses.") + clockNote,
    stale,
    ageMonths: i.ageMonths,
    daysLeftClosure,
    processingDays: PROCESSING_DAYS,
  }
}
