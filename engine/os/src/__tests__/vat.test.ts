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
  REGISTRATION_THRESHOLD_MANDATORY,
  REGISTRATION_THRESHOLD_VOLUNTARY,
  REFUND_WINDOW_MONTHS,
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

test("registrationStatus follows the Finance Act 2025 thresholds", () => {
  assert.equal(registrationStatus(4_000_000), "none")
  assert.equal(registrationStatus(REGISTRATION_THRESHOLD_VOLUNTARY), "voluntary")
  assert.equal(registrationStatus(7_000_000), "voluntary")
  assert.equal(registrationStatus(REGISTRATION_THRESHOLD_MANDATORY), "mandatory")
  assert.equal(registrationStatus(12_000_000), "mandatory")
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

test("refund window is 12 months (Finance Act 2025)", () => {
  assert.equal(REFUND_WINDOW_MONTHS, 12)
  assert.equal(isRefundStale(11), false)
  assert.equal(isRefundStale(12), false)
  assert.equal(isRefundStale(13), true)
})