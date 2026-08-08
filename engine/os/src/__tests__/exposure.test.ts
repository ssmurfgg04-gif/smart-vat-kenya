import { test } from "node:test"
import assert from "node:assert/strict"
import { screenSuppliers, diagnoseAmnesty, assessRefund } from "../exposure.js"
import { SpecialTableChecker, AmnestyInput } from "../exposure.js"

test("screenSuppliers sums exposed input VAT and reports flagged suppliers", async () => {
  const checker: SpecialTableChecker = {
    async lookup(pin: string) {
      return { onSpecialTable: pin === "P000000001X", name: `Supplier ${pin}` }
    },
  }
  const suppliers = [
    { pin: "P000000001X", name: "A", claimedInputVat: 40_000 },
    { pin: "ABCDEGHIJKST", name: "B", claimedInputVat: 10_000 },
  ]
  const result = await screenSuppliers(checker, suppliers)
  assert.equal(result.flaggedCount, 1)
  assert.equal(result.exposedInputVat, 40_000)
  assert.equal(result.suppliers[0]!.onSpecialTable, true)
  assert.equal(result.suppliers[1]!.blockedInputVat, 0)
})

test("diagnoseAmnesty returns excluded when the liability is outside the window", () => {
  const input: AmnestyInput = {
    excluded: true,
    principalPaidByEnd2025: false,
    unpaidPrincipalPre2026: true,
    hasOutstandingReturns: false,
    onPaymentPlan: false,
  }
  assert.equal(diagnoseAmnesty(input).path, "excluded")
})

test("diagnoseAmnesty picks the automatic waiver when principal is already paid", () => {
  const input: AmnestyInput = {
    excluded: false,
    principalPaidByEnd2025: true,
    unpaidPrincipalPre2026: false,
    hasOutstandingReturns: false,
    onPaymentPlan: false,
  }
  assert.equal(diagnoseAmnesty(input).path, "automatic_full_waiver")
})

test("diagnoseAmnesty falls through to paying principal by year end", () => {
  const input: AmnestyInput = {
    excluded: false,
    principalPaidByEnd2025: false,
    unpaidPrincipalPre2026: true,
    hasOutstandingReturns: true,
    onPaymentPlan: false,
  }
  assert.equal(diagnoseAmnesty(input).path, "pay_principal_to_waive")
})

test("diagnoseAmnesty routes a no-principal case to filing returns only", () => {
  const input: AmnestyInput = {
    excluded: false,
    principalPaidByEnd2025: false,
    unpaidPrincipalPre2026: false,
    hasOutstandingReturns: true,
    onPaymentPlan: false,
  }
  assert.equal(diagnoseAmnesty(input).path, "file_returns_to_waive")
})

test("assessRefund is not eligible when output VAT offsets input VAT", () => {
  const a = assessRefund({
    inputVat: 100_000,
    outputVat: 100_000,
    blocked: 0,
    stale: 0,
    zeroRated: false,
    pendingRefund: false,
  })
  assert.equal(a.status, "not_eligible")
  assert.equal(a.claimableAmount, 0)
})

test("assessRefund becomes blocked when flagged input VAT covers the whole balance", () => {
  const a = assessRefund({
    inputVat: 100_000,
    outputVat: 0,
    blocked: 100_000,
    stale: 0,
    zeroRated: false,
    pendingRefund: false,
  })
  assert.equal(a.status, "blocked")
})

test("assessRefund flags a profitable export/zero-rated claim as claimable with evidence docs", () => {
  const a = assessRefund({
    inputVat: 200_000,
    outputVat: 50_000,
    blocked: 0,
    stale: 0,
    zeroRated: true,
    pendingRefund: false,
  })
  assert.equal(a.status, "claimable")
  assert.ok(a.requiredDocuments.includes("Export / zero-rated supply evidence"))
})

test("assessRefund enforces the 12-month refund clock (Finance Act 2025)", () => {
  const fresh = assessRefund({
    inputVat: 200_000,
    outputVat: 0,
    blocked: 0,
    stale: 0,
    zeroRated: true,
    pendingRefund: false,
    ageMonths: 6,
  })
  assert.equal(fresh.status, "claimable")
  assert.equal(fresh.stale, false)
  assert.ok((fresh.daysLeftClosure ?? 0) > 0)
  assert.equal(fresh.processingDays, 120)

  const stale = assessRefund({
    inputVat: 200_000,
    outputVat: 0,
    blocked: 0,
    stale: 0,
    zeroRated: true,
    pendingRefund: false,
    ageMonths: 25,
  })
  assert.equal(stale.status, "stale")
  assert.equal(stale.stale, true)
  assert.equal(stale.daysLeftClosure, 0)
  assert.equal(stale.claimableAmount, 0)
  assert.ok(stale.blockers.some((b) => b.includes("12-month")))
})