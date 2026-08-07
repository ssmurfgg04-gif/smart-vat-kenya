import { test } from "node:test"
import assert from "node:assert/strict"
import { createFilingService, FilingService, FilingOutcome } from "../filing.js"
import { FilingProvider, FileResponse } from "@smartvat/gavaconnect"

function fakeProvider(name: string, ok: boolean): FilingProvider {
  return {
    name,
    async file(input: unknown): Promise<FileResponse> {
      return {
        ack: ok,
        reference: ok ? `${name}-ref` : undefined,
        provider: name,
        obligation: 1,
        golden: { domain: "filing", event: ok ? "ok" : "nok", payload: { input } },
      }
    },
  }
}

test("createFilingService builds tasks for periods due within the window", () => {
  const service = createFilingService([fakeProvider("nil", true)], {
    deadlineConfig: { now: () => new Date("2026-08-01T00:00:00Z") },
  })
  const tasks = service.buildTasks(31)
  assert.ok(tasks.length >= 1)
  assert.ok(tasks.every((t) => typeof t.periodId === "string" && typeof t.input === "object"))
})

test("runAll captures ok outcomes and does not throw", async () => {
  const service = createFilingService([fakeProvider("nil", true)], {
    deadlineConfig: { now: () => new Date("2026-08-01T00:00:00Z") },
  })
  const outcomes = await service.runAll(31)
  assert.ok(outcomes.length >= 1)
  for (const o of outcomes) {
    assert.equal(o.ok, true)
    assert.ok(o.ack)
    assert.equal(o.provider, "nil")
  }
})

test("runAll routes a rejection to onRejected and reports ok:false", async () => {
  let rejected = 0
  const service = createFilingService(
    [fakeProvider("nil", false)],
    { deadlineConfig: { now: () => new Date("2026-08-01T00:00:00Z") } },
    { onRejected: async () => void rejected++ },
  )
  const outcomes = await service.runAll(31)
  assert.ok(outcomes.some((o) => o.ok === false))
  assert.ok(rejected >= 1)
})