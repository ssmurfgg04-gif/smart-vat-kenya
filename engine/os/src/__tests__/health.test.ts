import { test } from "node:test"
import assert from "node:assert/strict"
import { computeHealth, level, HEALTH_WEIGHTS } from "../health.js"
import { ComplianceSnapshot } from "../types.js"

function makeSnapshot(overrides: Partial<ComplianceSnapshot> = {}): ComplianceSnapshot {
  return {
    kraPin: "A000000001Z",
    etimsReady: true,
    onTimeFilingRate: 1,
    tccValid: true,
    supplierPins: [],
    onPaymentPlan: false,
    missedConsecutive: 0,
    zeroRatedShare: 0,
    ...overrides,
  }
}

test("a clean snapshot scores high", async () => {
  const h = await computeHealth({ snapshot: makeSnapshot() })
  // on_time .4 + etims .2 + continuity .15 - all 100 = 75; tcc .1 + supplier
  // .1 = 20; zero-rated share 0 adds 0.05*0 => 95, which is still "low".
  assert.equal(h.score, 95)
  assert.equal(h.level, "low")
  assert.equal(h.flags.length, 0)
})

test("health weights sum to exactly 1", () => {
  const sum = Object.values(HEALTH_WEIGHTS).reduce((a, b) => a + b, 0)
  assert.ok(Math.abs(sum - 1) < 1e-9)
})

test("level thresholds", () => {
  assert.equal(level(100), "low")
  assert.equal(level(85), "low")
  assert.equal(level(70), "watch")
  assert.equal(level(50), "elevated")
  assert.equal(level(10), "high")
})

test("no eTIMS scores 0 and raises a high flag", async () => {
  const h = await computeHealth({ snapshot: makeSnapshot({ etimsReady: false }) })
  const etims = h.dimensions.find((d) => d.key === "etims_readiness")
  assert.equal(etims?.score, 0)
  assert.ok(h.flags.some((f) => f.code === "NO_ETIMS" && f.severity === "high"))
})

test("a flagged supplier drops the supplier dimension and adds a flag", async () => {
  const flagged = (pin: string) => ({ onSpecialTable: true, blockedInputVat: 50000 })
  const h = await computeHealth({
    snapshot: makeSnapshot(),
    suppliers: [flagged("P000000001X"), flagged("P000000002X")],
  })
  const sup = h.dimensions.find((d) => d.key === "supplier_exposure")
  assert.equal(sup?.score, 0)
  assert.ok(h.flags.some((f) => f.code === "SPECIAL_TABLE_SUPPLIER"))
})

test("late filing lowers health and adds a flag", async () => {
  const h = await computeHealth({ snapshot: makeSnapshot({ onTimeFilingRate: 0.5 }) })
  assert.ok(h.score < 100)
  assert.ok(h.flags.some((f) => f.code === "LATE_FILING"))
})

test("4 consecutive misses adds deregistration risk", async () => {
  const h = await computeHealth({ snapshot: makeSnapshot({ missedConsecutive: 4 }) })
  assert.ok(h.flags.some((f) => f.code === "DEACTIVATION_RISK"))
})

test("amnesty flag raised for consecutive misses not on a payment plan", async () => {
  const h = await computeHealth({ snapshot: makeSnapshot({ missedConsecutive: 2 }) })
  assert.ok(h.flags.some((f) => f.code === "AMNESTY_ELIGIBLE"))
})

test("amnesty flag suppressed when on a structured payment plan", async () => {
  const h = await computeHealth({
    snapshot: makeSnapshot({ missedConsecutive: 3, onPaymentPlan: true }),
  })
  assert.ok(!h.flags.some((f) => f.code === "AMNESTY_ELIGIBLE"))
})