import { test } from "node:test"
import assert from "node:assert/strict"
import { createScriptedTransport, HttpRequest } from "../transport.js"
import { createWhatsAppMessenger, WhatsAppError } from "../whatsapp-transport.js"
import { createMpesaGateway, MpesaError } from "../mpesa-transport.js"
import { createRemoteLlm, RemoteLlmError } from "../llm.js"
import { Rule } from "../intel.js"

test("scripted transport routes by URL substring and records calls", async () => {
  const calls: Array<{ url: string; method: string }> = []
  const http = createScriptedTransport(
    [{ url: "/messages", body: { messages: [{ id: "wamid.X" }] } }],
    calls as never,
  )
  const res = await http.request({ url: "https://graph.facebook.com/v19.0/105112/messages", method: "POST", body: {} })
  assert.equal(res.status, 200)
  assert.deepEqual((res.body as { messages: unknown[] }).messages.length, 1)
  assert.ok(calls.length === 1)
})

test("WhatsApp transport POSTs to the right endpoint and returns a message id", async () => {
  const calls: HttpRequest[] = []
  const http = createScriptedTransport([{ url: "/messages", body: { messages: [{ id: "wamid.ABC" }] } }], calls as never)
  const messenger = createWhatsAppMessenger({ from: "105112", accessToken: "tok", baseUrl: "https://graph.facebook.com/v19.0", transport: http })
  const res = await messenger.send({ to: "+254712345678", body: "hi", clientId: "c1" })
  assert.equal(res.messageId, "wamid.ABC")
  const req = calls[0]!
  assert.equal(req.url, "https://graph.facebook.com/v19.0/105112/messages")
  assert.equal((req.body as { to: string }).to, "254712345678")
  assert.equal(req.headers!.Authorization, "Bearer tok")
})

test("WhatsApp transport throws WhatsAppError on non-200", async () => {
  const http = createScriptedTransport([{ url: "/messages", status: 400, body: { error: "bad" } }])
  const messenger = createWhatsAppMessenger({ from: "105112", accessToken: "t", baseUrl: "x", transport: http })
  await assert.rejects(() => messenger.send({ to: "254712345678", body: "hi", clientId: "c1" }), WhatsAppError)
})

test("M-PESA transport obtains a token then pushes STK", async () => {
  const calls: HttpRequest[] = []
  const http = createScriptedTransport(
    [
      { url: "/oauth/v1/generate", body: { access_token: "tk" } },
      { url: "/stkpush/v3/processrequest", body: { CheckoutRequestID: "ws_COM1234" } },
    ],
    calls as never,
  )
  const gateway = createMpesaGateway({ consumerKey: "k", consumerSecret: "s", shortCode: "174379", passkey: "pk", baseUrl: "https://sandbox.safaricom.co.ke", transport: http })
  const { merchantRequestId } = await gateway.stkPush({ phone: "254712345678", amount: 3500, accountReference: "sub-1", transDesc: "sub" })
  assert.equal(merchantRequestId, "ws_COM1234")
  assert.equal(calls.length, 2)
  const stk = calls[1]!
  assert.equal((stk.body as { BusinessShortCode: string }).BusinessShortCode, "174379")
  assert.equal((stk.body as { PartyA: string }).PartyA, "254712345678")
})

test("M-PESA transport throws when no CheckoutRequestID", async () => {
  const http = createScriptedTransport([
    { url: "/oauth/v1/generate", body: { access_token: "tk" } },
    { url: "/stkpush", body: { responseCode: "0", CheckoutRequestID: undefined } },
  ])
  const gateway = createMpesaGateway({ consumerKey: "k", consumerSecret: "s", shortCode: "174379", baseUrl: "x", transport: http })
  await assert.rejects(() => gateway.stkPush({ phone: "254712345678", amount: 1, accountReference: "a", transDesc: "d" }), MpesaError)
})

test("remote LLM sends context as system and returns the model answer", async () => {
  const calls: HttpRequest[] = []
  const http = createScriptedTransport(
    [{ url: "/chat/completions", body: { choices: [{ message: { content: "The penalty is 10k" } }] } }],
    calls as never,
  )
  const llm = createRemoteLlm({ apiKey: "sk", model: "gpt-4o-mini", baseUrl: "https://api.openai.com/v1", transport: http })
  const rule: Rule = { id: "late-vat-filing-penalty", title: "Late filing", keywords: ["late"], body: "penalty 10k or 5%", source: "KRA" }
  const ans = await llm.complete("what penalty?", [rule])
  assert.equal(ans.text, "The penalty is 10k")
  assert.deepEqual(ans.source, ["late-vat-filing-penalty"])
  const body = calls[0]!.body as { messages: Array<{ role: string; content: string }> }
  assert.ok(body.messages.some((m) => m.content.includes("Late filing")))
})

test("remote LLM throws RemoteLlmError on non-200", async () => {
  const http = createScriptedTransport([{ url: "/chat/completions", status: 500, body: { error: "boom" } }])
  const llm = createRemoteLlm({ apiKey: "sk", model: "m", baseUrl: "x", transport: http })
  await assert.rejects(() => llm.complete("hi", []), RemoteLlmError)
})