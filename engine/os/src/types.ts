/**
 * SmartVAT OS — shared domain types.
 *
 * The OS sits on top of the gavaconnect KRA client and adds the layers that
 * turn raw API access into a compliance product: deadlines, health scores,
 * exposure screens, amnesty/refund diagnosis, sector benchmarks and the rules
 * assistant. All types here are pure; any KRA-API I/O lives in gavaconnect.
 */

export type RiskLevel = "low" | "watch" | "elevated" | "high"

export interface HealthDimension {
  key: string
  label: string
  score: number // 0..100
  weight: number // sum across dimensions === 1
  detail: string
}

export interface ComplianceHealth {
  score: number // 0..100
  level: RiskLevel
  dimensions: HealthDimension[]
  flags: Array<{ code: string; severity: RiskLevel; message: string }>
  generatedAt: string
}

/** One VAT obligation period we file. */
export interface ObligationPeriod {
  /** ISO month of the period, e.g. 2026-07. */
  period: string
  /** The KRA due date (the 20th of the following month). */
  dueDate: string
  /** The date SmartVAT actually files (the 17th by default). */
  targetDate: string
  /** Whole working days of buffer between target and due. */
  bufferWorkingDays: number
}

export interface SupplierExposure {
  supplierPin: string
  supplierName: string
  /** True when the supplier sits on the KRA VAT Special Table. */
  onSpecialTable: boolean
  /** Blocked input VAT claim volume in KES (0 when not blocked). */
  blockedInputVat: number
  lastSeenOnTable?: string
}

export interface SpecialTableScreenResult {
  /** Total input VAT at risk, in KES. */
  exposedInputVat: number
  suppliers: SupplierExposure[]
  flaggedCount: number
  scannedAt: string
}

export type AmnestyPath =
  | "automatic_full_waiver"
  | "file_returns_to_waive"
  | "pay_principal_to_waive"
  | "excluded"

export interface AmnestyDiagnosis {
  path: AmnestyPath
  summary: string
  action: string
  windowEnds: string // always 2026-12-31
  details: string[]
}

export type RefundStatus =
  | "claimable"
  | "partially_claimable"
  | "blocked"
  | "not_eligible"

export interface RefundAssessment {
  status: RefundStatus
  claimableAmount: number
  blockedAmount: number
  blockers: string[]
  requiredDocuments: string[]
  recommended: string
}

export interface SectorBenchmark {
  sector: string
  /** Typical input VAT as a fraction of gross sales (0..1). */
  inputVatRatio: number
  /** Typical net VAT payable as a fraction of gross sales (0..1). */
  netVatRatio: number
  /** Sample size / confidence band note. */
  note: string
  /** Range around the midpoint for the ratio, low..high. */
  band: { low: number; high: number }
}

export interface SectorComparison {
  sector: string
  clientInputVatRatio: number
  benchmark: SectorBenchmark
  /** Position of the client within the band. */
  zBands: "below" | "within" | "above"
  note: string
}

/** A single taxpayer snapshot fed to the health engine. */
export interface ComplianceSnapshot {
  kraPin: string
  /** True when this taxpayer has eTIMS-device compliance confirmed. */
  etimsReady: boolean
  /** Share of the last 6 periods filed on or before target, 0..1. */
  onTimeFilingRate: number
  /** Current active TCC, when present. */
  tccValid: boolean
  /** Supplier PINs claimed for input VAT this period. */
  supplierPins: string[]
  /** Structured payment plan for old principal (amnesty path 3). */
  onPaymentPlan: boolean
  /** Number of consecutive periods not filed (nil excluded). */
  missedConsecutive: number
  /** Zero-rated / export share of gross sales, 0..1 (deduction headroom). */
  zeroRatedShare: number
}
