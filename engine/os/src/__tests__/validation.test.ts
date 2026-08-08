import { test } from "node:test"
import assert from "node:assert/strict"
import {
  validateReturn,
  classifyMatchedInvoices,
  VALIDATION_TOLERANCE,
  QUERY_RESPONSE_DAYS,
} from "../validation.js"

test("validateReturn is clean when declared matches transmitted eTIMS within tolerance", () => {
  const r = validateReturn({
    declaredSales: 1_000_000,
    etimsSales: 1_020_000,
    declaredExpenses: 600_000,
    etimsSupportedPurchases: 600_000,
  })
  assert.equal(r.status, "clean")
  assert.equal(r.issues.length, 0)
})

test("validateReturn flags under-reported sales beyond tolerance as attention", () => {
  const r = validateReturn({
    declaredSales: 900_000,
    etimsSales: 1_000_000,
    declaredExpenses: 600_000,
    etimsSupportedPurchases: 600_000,
  })
  assert.equal(r.status, "attention")
  assert.ok(r.issues.some((i) => i.code === "SALES_UNDER_REPORTED"))
  assert.equal(r.salesGapKes, 100_000)
})

test("validateReturn accepts sales declared above eTIMS (upward-only rule)", () => {
  const r = validateReturn({
    declaredSales: 1_100_000,
    etimsSales: 1_000_000,
    declaredExpenses: 600_000,
    etimsSupportedPurchases: 600_000,
  })
  assert.equal(r.status, "clean")
  assert.ok(r.issues.some((i) => i.code === "SALES_OVER_DECLARED_OK"))
})

test("validateReturn breaks on unsupported expenses beyond tolerance", () => {
  const r = validateReturn({
    declaredSales: 1_000_000,
    etimsSales: 1_000_000,
    declaredExpenses: 800_000,
    etimsSupportedPurchases: 300_000,
  })
  assert.equal(r.status, "broken")
  assert.ok(r.issues.some((i) => i.code === "EXPENSES_UNSUPPORTED"))
  assert.equal(r.queryResponseDays, QUERY_RESPONSE_DAYS)
})

test("validateReturn records the configured tolerance", () => {
  const r = validateReturn({
    declaredSales: 1_000_000,
    etimsSales: 1_000_000,
    declaredExpenses: 0,
    etimsSupportedPurchases: 0,
  })
  assert.equal(r.tolerance, VALIDATION_TOLERANCE)
})

test("classifyMatchedInvoices marks un-transmitted or PIN-less invoices unclaimable", () => {
  const matches = classifyMatchedInvoices([
    { declared: 100_000, transmitted: true, hasBuyerPin: true },
    { declared: 100_000, transmitted: false, hasBuyerPin: true },
    { declared: 100_000, transmitted: true, hasBuyerPin: false },
  ])
  assert.equal(matches[0]!.claimable, true)
  assert.equal(matches[0]!.reason, null)
  assert.equal(matches[1]!.claimable, false)
  assert.equal(matches[1]!.reason, "NOT_TRANSMITTED")
  assert.equal(matches[2]!.claimable, false)
  assert.equal(matches[2]!.reason, "NO_BUYER_PIN")
})