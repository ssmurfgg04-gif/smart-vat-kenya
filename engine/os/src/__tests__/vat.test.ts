import { test } from "node:test"
import assert from "node:assert/strict"
import {
  VAT_RATE,
  addVat,
  vatOf,
  removeVat,
  vatFromInclusive,
  registrationStatus,
  lateFilingPenalty,
  latePaymentCharge,
  isRefundStale,
  VAT_REGISTRATION_THRESHOLD,
  VAT_REGISTRATION_THRESHOLD_PROPOSED,
  REFUND_WINDOW_MONTHS,
  INPUT_CLAIM_WINDOW_MONTHS,
  isInputClaimStale,
  registrationDeadlineOverdue,
  REGISTRATION_DEADLINE_DAYS,
} from "../vat.js"

test("VAT rate is 16%", () => {
  assert.equal(VAT_RATE, 0.16)
})

test("vatOf computes VAT on a net amount", () => {
  assert.equal(vatOf(1000), 160)
  assert.equal(vatOf(1250), 200)
  assert.equal(vatOf(0), 0)
})

test("addVat returns gross (net + VAT)", () => {
  assert.equal(addVat(1000), 1160)
})

test("removeVat strips VAT from an inclusive amount", () => {
  assert.equal(removeVat(1160), 1000)
})

test("vatFromInclusive recovers embedded VAT", () => {
  assert.equal(vatFromInclusive(1160), 160)
})

test("registrationStatus follows the operative VAT Act threshold at 5M", () => {
  assert.equal(registrationStatus(0), "none")
  assert.equal(registrationStatus(4_000_000), "voluntary")
  assert.equal(registrationStatus(VAT_REGISTRATION_THRESHOLD), "mandatory")
  assert.equal(registrationStatus(7_000_000), "mandatory")
  assert.equal(registrationStatus(12_000_000), "mandatory")
  // FA2025 proposal (8M) is not yet the operative mandatory threshold.
  assert.equal(VAT_REGISTRATION_THRESHOLD_PROPOSED, 8_000_000)
})

test("registration deadline applies 30 days after crossing the threshold", () => {
  const day = 24 * 60 * 60 * 1000
  const crossed = new Date(2026, 0, 1)
  assert.equal(REGISTRATION_DEADLINE_DAYS, 30)
  assert.equal(registrationDeadlineOverdue(new Date(crossed.getTime() + 29 * day), crossed), false)
  assert.equal(registrationDeadlineOverdue(new Date(crossed.getTime() + 30 * day), crossed), false)
  assert.equal(registrationDeadlineOverdue(new Date(crossed.getTime() + 31 * day), crossed), true)
})

test("lateFilingPenalty is the higher of 10,000 or 5% of tax due", () => {
  assert.equal(lateFilingPenalty(50_000), 10_000)
  assert.equal(lateFilingPenalty(400_000), 20_000)
  assert.equal(lateFilingPenalty(0), 10_000)
})

test("latePaymentCharge adds 5% penalty plus 1%/month interest", () => {
  const twoMonths = latePaymentCharge(100_000, 2)
  assert.equal(twoMonths.penalty, 5_000)
  assert.equal(twoMonths.interest, 2_000)
  assert.equal(twoMonths.total, 7_000)
  // No interest before it is late.
  const zero = latePaymentCharge(100_000, 0)
  assert.equal(zero.interest, 0)
  assert.equal(zero.penalty, 5_000)
})

test("refund window is 12 months; input claim window is 6 months", () => {
  assert.equal(REFUND_WINDOW_MONTHS, 12)
  assert.equal(INPUT_CLAIM_WINDOW_MONTHS, 6)
  assert.equal(isRefundStale(11), false)
  assert.equal(isRefundStale(12), false)
  assert.equal(isRefundStale(13), true)
  assert.equal(isInputClaimStale(5), false)
  assert.equal(isInputClaimStale(6), false)
  assert.equal(isInputClaimStale(7), true)
})