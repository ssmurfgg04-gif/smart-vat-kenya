import { test } from "node:test"
import assert from "node:assert/strict"
import { TtlCache } from "../cache.js"

test("TtlCache stores and returns a value before expiry", () => {
  let now = 0
  const c = new TtlCache<number>({ ttlMs: 100, now: () => now })
  c.set("a", 42)
  assert.equal(c.get("a"), 42)
})

test("TtlCache expires entries past TTL", () => {
  let now = 0
  const c = new TtlCache<number>({ ttlMs: 100, now: () => now })
  c.set("a", 42)
  now = 101
  assert.equal(c.get("a"), undefined)
})

test("getOrSet caches producer result", async () => {
  let now = 0
  const c = new TtlCache<number>({ ttlMs: 100, now: () => now })
  let calls = 0
  const producer = async () => {
    calls++
    return calls
  }
  assert.equal(await c.getOrSet("k", producer), 1)
  assert.equal(await c.getOrSet("k", producer), 1)
  assert.equal(calls, 1)
  now = 101
  assert.equal(await c.getOrSet("k", producer), 2)
  assert.equal(calls, 2)
})