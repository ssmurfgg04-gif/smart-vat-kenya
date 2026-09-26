import { test } from "node:test"
import assert from "node:assert/strict"
import { createWiredFilingService, GavaWiringOptions } from "../gavawiring.js"
import { GavaClient } from "@smartvat/gavaconnect"

interface FakeNil {
  fileNilReturn(input: unknown): Promise<{ AckNumber: string; Status: string; ResponseCode: string }>
}

test("wired NIL service translates a period into concrete KRA input", async () => {
  const calls: unknown[] = []
  const fake = {
    fileNilReturn: async (i: unknown) => {
      calls.push(i)
      return { AckNumber: "ACK-1", Status: "OK", ResponseCode: "0" }
    },
  } as unknown as FakeNil

  const opts: GavaWiringOptions = {
    kraPin: "A000000001Z",
    mode: "nil",
    deadline: { now: () => new Date("2026-08-01T00:00:00Z") },
    now: () => new Date("2026-08-01T00:00:00Z"),
  }
  const svc = createWiredFilingService(fake as unknown as GavaClient, opts)
  const outcomes = await svc.runAll(31)
  assert.ok(outcomes.length >= 1)
  const input = calls[0] as { TaxpayerPIN: string; ObligationCode: number; Month: number; Year: number }
  assert.equal(input.TaxpayerPIN, "A000000001Z")
  assert.equal(input.Month, 7) // period 2026-07 files July's return
  assert.equal(input.Year, 2026)
  assert.ok(outcomes.every((o) => o.ok === true))
})

test("wired TOT service builds TOT input with gross turnover", async () => {
  const calls: unknown[] = []
  const fake = {
    fileTotReturn: async (i: unknown) => {
      calls.push(i)
      return { PRN: "PRN-1", Status: "OK", ResponseCode: "0" }
    },
  } as unknown as FakeNil

  const opts: GavaWiringOptions = {
    kraPin: "A000000001Z",
    mode: "tot",
    grossTurnover: 1_250_000,
    deadline: { now: () => new Date("2026-08-01T00:00:00Z") },
    now: () => new Date("2026-08-01T00:00:00Z"),
  }
  const svc = createWiredFilingService(fake as unknown as GavaClient, opts)
  const outcomes = await svc.runAll(31)
  assert.ok(outcomes.length >= 1)
  const input = calls[0] as { TaxpayerPIN: string; GrossTurnover: number }
  assert.equal(input.TaxpayerPIN, "A000000001Z")
  assert.equal(input.GrossTurnover, 1_250_000)
})