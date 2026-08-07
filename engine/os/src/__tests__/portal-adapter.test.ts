import { test } from "node:test"
import assert from "node:assert/strict"
import { createInMemoryStore } from "../store.js"
import { createPortalAdapter } from "../portal-adapter.js"

const fakeGava = {
  validateTcc: async (_p: string, _s: string) => ({ ResponseCode: "0", Message: "ok", Status: "OK", TCCDATA: { TCCSerialNumber: "T1", KRAPIN: "A", BusinessName: "B", CertificateStatus: "Valid" } }),
  pinByPin: async () => ({}),
} as unknown as import("@smartvat/gavaconnect").GavaClient

test("portal adapter onboards a new client into the store as a prospect", async () => {
  const store = createInMemoryStore()
  const portals = createPortalAdapter(fakeGava, store)
  const rec = await portals.onboard({ clientId: "c1", fullName: "A", kraPin: "A000000001Z", phone: "254700000001" })
  assert.equal(rec.status, "prospect")
  assert.equal(store.client("c1")?.kraPin, "A000000001Z")
})

test("portal adapter validates a live TCC and confirms a PIN", async () => {
  const portals = createPortalAdapter(fakeGava, createInMemoryStore())
  assert.equal(await portals.checkTcc("A000000001Z", "TCC-1"), true)
  assert.equal(await portals.confirm("A000000001Z", "x"), true)
})