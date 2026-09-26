import { test } from "node:test"
import assert from "node:assert/strict"
import {
  planPeriod,
  dueWithin,
  DEFAULT_TARGET_DAY,
  DEFAULT_DUE_DAY,
} from "../deadlines.js"

test("DEFAULT_TARGET_DAY is 17 and DEFAULT_DUE_DAY is 20 (17th Guarantee)", () => {
  assert.equal(DEFAULT_TARGET_DAY, 17)
  assert.equal(DEFAULT_DUE_DAY, 20)
})

test("planPeriod yields 17th target and 20th due in the month after the period", () => {
  const plan = planPeriod("2026-07")
  assert.equal(plan.period, "2026-07")
  assert.equal(plan.dueDate, "2026-08-20")
  assert.equal(plan.targetDate, "2026-08-17")
})

test("planPeriod counts weekend days out of the buffer", () => {
  // August 2026: 17 Aug is a Monday (target). Weekdays strictly between the
  // 17th and 20th: Tue 18, Wed 19 => 2 working days.
  const plan = planPeriod("2026-07")
  assert.ok(plan.bufferWorkingDays >= 0)
  assert.equal(plan.bufferWorkingDays, 2)
})

test("planPeriod consumes holiday dates from the buffer", () => {
  const plan = planPeriod("2026-07", { holidays: new Set(["2026-08-19"]) })
  assert.equal(plan.bufferWorkingDays, 1)
})

test("planPeriod rejects malformed periods", () => {
  assert.throws(() => planPeriod("2026-13"), /invalid period/)
  assert.throws(() => planPeriod("not-a-date"), /invalid period/)
  assert.throws(() => planPeriod("2026"), /invalid period/)
})

test("planPeriod respects custom target and due days", () => {
  const plan = planPeriod("2026-07", { targetDay: 18, dueDay: 21 })
  assert.equal(plan.targetDate, "2026-08-18")
  assert.equal(plan.dueDate, "2026-08-21")
})

test("dueWithin returns only periods due within the horizon", () => {
  const now = new Date("2026-08-01T00:00:00Z")
  const within = dueWithin(31, { now: () => now })
  // Every due date falling in the 31 days from 1 Aug 2026 onward.
  assert.ok(within.every((p) => p.period.length === 7))
  const dates = within.map((p) => p.dueDate).sort()
  assert.equal(dates[0], "2026-08-20")
  assert.equal(within.length, 1)
})