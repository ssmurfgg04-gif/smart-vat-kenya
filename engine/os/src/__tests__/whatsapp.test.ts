import { test } from "node:test"
import assert from "node:assert/strict"
import { createInMemoryMessenger, WaTranscriptMin } from "../whatsapp.js"

test("createInMemoryMessenger records a delivered send", async () => {
  const store: WaTranscriptMin[] = []
  const messenger = createInMemoryMessenger(store)
  const res = await messenger.send({ to: "254712345678", body: "hello", clientId: "c1" })
  assert.ok(res.messageId.startsWith("msg_c1_254712345678_"))
  assert.equal(res.to, "254712345678")
  assert.ok(store.length === 1)
  assert.equal(store[0]!.delivered, true)
  assert.equal(store[0]!.messageId, res.messageId)
})