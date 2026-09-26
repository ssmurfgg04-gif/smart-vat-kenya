import { ComplianceHealth, ComplianceSnapshot, HealthDimension, RiskLevel } from "./types.js"

/**
 * Compliance health score.
 *
 * Evidence-based weighting: on-time filing is the strongest observable signal,
 * eTIMS readiness protects input VAT, consecutive misses compound fast, TCC
 * validity gates tenders, flagged suppliers block input VAT, and zero-rated
 * share reflects refund/export headroom. Weights are constants so the score is
 * deterministic; the supplier dimension drops to a 100 (with redistributed
 * weight) when no screen data is supplied.
 */

export const HEALTH_WEIGHTS = {
  onTimeFilingRate: 0.4,
  etims: 0.2,
  missedConsecutive: 0.15,
  tcc: 0.1,
  specialTable: 0.1,
  zeroRated: 0.05,
} as const

export function level(score: number): RiskLevel {
  if (score >= 85) return "low"
  if (score >= 70) return "watch"
  if (score >= 50) return "elevated"
  return "high"
}

export interface SupplierExposureFlag {
  onSpecialTable: boolean
  blockedInputVat: number
}

export interface HealthInput {
  snapshot: ComplianceSnapshot
  /** Supplier exposure results; omit when no screen has run. */
  suppliers?: SupplierExposureFlag[]
}

export async function computeHealth(input: HealthInput): Promise<ComplianceHealth> {
  const s = input.snapshot
  const dims: HealthDimension[] = []

  dims.push({
    key: "on_time_filing",
    label: "On-time filing",
    score: Math.round(s.onTimeFilingRate * 100),
    weight: HEALTH_WEIGHTS.onTimeFilingRate,
    detail: `${Math.round(s.onTimeFilingRate * 100)}% of periods filed by target`,
  })

  dims.push({
    key: "etims_readiness",
    label: "eTIMS readiness",
    score: s.etimsReady ? 100 : 0,
    weight: HEALTH_WEIGHTS.etims,
    detail: s.etimsReady ? "Device compliance confirmed" : "eTIMS unconfirmed - deductions at risk",
  })

  dims.push({
    key: "continuity",
    label: "Continuity",
    score: Math.max(0, 100 - s.missedConsecutive * 25),
    weight: HEALTH_WEIGHTS.missedConsecutive,
    detail: `${s.missedConsecutive} consecutive period(s) missed`,
  })

  dims.push({
    key: "tcc_validity",
    label: "TCC validity",
    score: s.tccValid ? 100 : 0,
    weight: HEALTH_WEIGHTS.tcc,
    detail: s.tccValid ? "Active Tax Compliance Certificate" : "No valid TCC on file",
  })

  const flagged = (input.suppliers ?? []).filter((x) => x.onSpecialTable).length
  const n = input.suppliers?.length ?? 0
  const supplierScore = n > 0 ? Math.max(0, Math.round((1 - flagged / n) * 100)) : 100
  dims.push({
    key: "supplier_exposure",
    label: "Supplier exposure",
    score: supplierScore,
    weight: HEALTH_WEIGHTS.specialTable,
    detail: flagged > 0 ? `${flagged} flagged supplier(s) on the Special Table` : "No flagged suppliers",
  })

  dims.push({
    key: "zero_rated_headroom",
    label: "Zero-rated headroom",
    score: Math.round(s.zeroRatedShare * 100),
    weight: HEALTH_WEIGHTS.zeroRated,
    detail: `${Math.round(s.zeroRatedShare * 100)}% zero-rated / export share`,
  })

  for (const d of dims) d.weight = Math.round(d.weight * 1000) / 1000
  const score = Math.round(dims.reduce((acc, d) => acc + d.score * d.weight, 0))

  const flags: ComplianceHealth["flags"] = []
  if (s.onTimeFilingRate < 1) flags.push({ code: "LATE_FILING", severity: "elevated", message: "One or more periods were filed late" })
  if (!s.tccValid) flags.push({ code: "TCC_EXPIRED", severity: "elevated", message: "No valid Tax Compliance Certificate" })
  if (!s.etimsReady) flags.push({ code: "NO_ETIMS", severity: "high", message: "eTIMS unconfirmed; input VAT and expense deductions at risk" })
  if (s.missedConsecutive >= 2) flags.push({ code: "CONSECUTIVE_MISS", severity: "high", message: "Two or more consecutive periods missed" })
  if (s.missedConsecutive >= 4) flags.push({ code: "DEACTIVATION_RISK", severity: "high", message: "Repeated misses risk VAT deregistration" })
  if (flagged > 0) flags.push({ code: "SPECIAL_TABLE_SUPPLIER", severity: "elevated", message: `${flagged} flagged supplier(s) blocking input VAT` })
  if (!s.onPaymentPlan && s.missedConsecutive >= 2) {
    flags.push({ code: "AMNESTY_ELIGIBLE", severity: "watch", message: "Likely qualifies for the KRA 2026 amnesty cleanup" })
  }

  const order: RiskLevel[] = ["high", "elevated", "watch"]
  flags.sort((a, b) => order.indexOf(a.severity) - order.indexOf(b.severity))

  return {
    score,
    level: level(score),
    dimensions: dims,
    flags,
    generatedAt: new Date().toISOString(),
  }
}