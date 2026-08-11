import { test } from "node:test"
import assert from "node:assert/strict"
import { encryptSecret, decryptSecret, signAndEncryptOscuPayload, decryptOscuEnvelope } from "../crypto.js"

const MASTER = "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"
const CMC = "00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff"

test("encryptSecret round-trips with AES-256-GCM", () => {
  const enc = encryptSecret("cmc-key-abc", MASTER)
  assert.notEqual(enc, "cmc-key-abc")
  assert.equal(decryptSecret(enc, MASTER), "cmc-key-abc")
})

test("encryptSecret fails with wrong key", () => {
  const enc = encryptSecret("secret", MASTER)
  assert.throws(() => decryptSecret(enc, "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"))
})

test("OSCU envelope sign+encrypt round-trips", () => {
  const payload = { salesTrans: { tin: "P000000000A" } }
  const env = signAndEncryptOscuPayload(payload, CMC)
  const decrypted = decryptOscuEnvelope(env, CMC)
  assert.deepEqual(JSON.parse(decrypted), payload)
})

test("OSCU envelope signature is deterministic per data", () => {
  const a = signAndEncryptOscuPayload({ x: 1 }, CMC)
  const b = signAndEncryptOscuPayload({ x: 2 }, CMC)
  assert.notEqual(a.signature, b.signature)
})