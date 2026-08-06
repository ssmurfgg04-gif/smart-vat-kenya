import { test } from "node:test"
import assert from "node:assert/strict"
import { redact } from "../logger.js"

test("redact masks consumer secrets", () => {
  const out = redact({ consumerSecret: "topsecret", ok: "fine" })
  assert.equal((out as { consumerSecret: string }).consumerSecret, "[REDACTED]")
  assert.equal((out as { ok: string }).ok, "fine")
})

test("redact masks KRA PINs in strings", () => {
  assert.equal(redact("PIN is P051234567A, ok"), "PIN is [PIN], ok")
})

test("redact recurses into nested objects and arrays", () => {
  const out = redact({
    a: { b: [{ cmcKey: "x" }, "P051234567A"] },
  }) as {
    a: { b: [{ cmcKey: string }, string] }
  }
  assert.equal(out.a.b[0].cmcKey, "[REDACTED]")
  assert.equal(out.a.b[1], "[PIN]")
})

test("redact keeps auth headers masked", () => {
  const out = redact({ authorization: "Bearer abc" }) as Record<string, string>
  assert.equal(out.authorization, "[REDACTED]")
})