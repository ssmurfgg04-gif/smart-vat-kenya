import { test } from "node:test"
import assert from "node:assert/strict"
import { BENCHMARKS, compareToBenchmark } from "../benchmarks.js"

test("benchmarks cover the core sectors", () => {
  for (const s of ["wholesale", "retail", "hospitality", "importers", "tech", "property", "construction"]) {
    assert.ok(BENCHMARKS[s], `missing benchmark for ${s}`)
  }
})

test("compareToBenchmark classifies within, above and below the band", () => {
  assert.equal(compareToBenchmark("retail", 0.1).zBands, "within") // midpoint
  assert.equal(compareToBenchmark("retail", 0.05).zBands, "below")
  assert.equal(compareToBenchmark("retail", 0.2).zBands, "above")
})

test("compareToBenchmark throws for unknown sectors", () => {
  assert.throws(() => compareToBenchmark("mining", 0.1), /No benchmark/)
})