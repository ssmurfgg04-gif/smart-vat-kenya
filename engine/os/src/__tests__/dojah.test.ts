import { test } from "node:test"
import assert from "node:assert/strict"
import { createScriptedTransport, RecordedCall } from "../transport.js"
import { createDojahKraChecker, DojahError } from "../dojah.js"

test("Dojah KRA lookup hits the KYC endpoint with raw AppKey (no Bearer)", async () => {
  const calls: RecordedCall[] = []
  const transport = createScriptedTransport(
    [
      {
        url: "/api/v1/ke/kyc/kra",
        body: {
          entity: {
            pin: "A123456789Z",
            taxpayer_name: "JANE DOE",
            current_status: "Active",
            pin_status: "Active",
            obligation_name: "VAT",
          },
          success: true,
        },
      },
    ],
    calls,
  )
  const checker = createDojahKraChecker({ appId: "did_1", appKey: "sk_live_raw", transport })
  const out = await checker.lookup("A123456789Z")

  assert.equal(out.taxpayerName, "JANE DOE")
  assert.equal(out.status, "Active")
  assert.equal(out.obligationName, "VAT")
  assert.ok(calls[0]!.url.includes("?pin=A123456789Z"))
  assert.equal(calls[0]!.headers!.Authorization, "sk_live_raw")
  assert.equal(calls[0]!.headers!.AppId, "did_1")
})

test("Dojah falls back to pin_status when current_status is absent", async () => {
  const transport = createScriptedTransport([
    { url: "/api/v1/ke/kyc/kra", body: { entity: { pin: "P123456789Z", pin_status: "Suspended" } } },
  ])
  const checker = createDojahKraChecker({ appId: "x", appKey: "y", transport })
  const out = await checker.lookup("P123456789Z")
  assert.equal(out.status, "Suspended")
})

test("Dojah throws DojahError on a non-200 response", async () => {
  const transport = createScriptedTransport([{ url: "/api/v1/ke/kyc/kra", status: 401, body: { message: "unauthorized" } }])
  const checker = createDojahKraChecker({ appId: "x", appKey: "y", transport })
  await assert.rejects(() => checker.lookup("A123456789Z"), DojahError)
})