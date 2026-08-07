import { test } from "node:test"
import assert from "node:assert/strict"
import { isKraPinFormat, createPinValidator } from "../pin.js"

test("KRA PIN format regex accepts valid shapes", () => {
  assert.equal(isKraPinFormat("A123456789Z"), true)
  assert.equal(isKraPinFormat("P123456789A"), true)
  assert.equal(isKraPinFormat("A000000000Z"), true)
})

test("KRA PIN format rejects bad shapes", () => {
  assert.equal(isKraPinFormat(""), false)
  assert.equal(isKraPinFormat("A123456789"), false) // missing terminal letter
  assert.equal(isKraPinFormat("123456789Z"), false) // must start with A/P
  assert.equal(isKraPinFormat("B123456789Z"), false) // B is not a valid starter
  assert.equal(isKraPinFormat("A12345678ZZ"), false) // wrong length
  assert.equal(isKraPinFormat("A12345678 9Z"), false) // whitespace
  assert.equal(isKraPinFormat("A123456789z"), true) // lowercase terminal is tolerated
})

test("pin validator returns format result offline", async () => {
  const gava = {} as never
  const validator = createPinValidator(gava)
  const ok = await validator.validate("A123456789Z")
  assert.equal(ok.valid, true)
  assert.equal(ok.formatValid, true)
  assert.equal(ok.liveChecked, false)

  const bad = await validator.validate("nope")
  assert.equal(bad.valid, false)
  assert.equal(bad.formatValid, false)
  assert.equal(bad.liveChecked, false)
})

test("pin validator resolves live against pinByPin and checks Active status", async () => {
  const gava = {
    async pinByPin(pin: string) {
      if (pin === "A123456789Z") {
        return { PINDATA: { Name: "Jane Doe", StatusOfPIN: "Active" } }
      }
      if (pin === "P123456789Z") {
        return { PINDATA: { Name: "ACME Ltd", StatusOfPIN: "Cancelled" } }
      }
      throw new Error("not found")
    },
  } as never
  const validator = createPinValidator(gava)
  const active = await validator.validate("A123456789Z", { live: true })
  assert.equal(active.valid, true)
  assert.equal(active.name, "Jane Doe")
  assert.equal(active.status, "Active")
  assert.equal(active.liveChecked, true)

  const cancelled = await validator.validate("P123456789Z", { live: true })
  assert.equal(cancelled.valid, false)
  assert.equal(cancelled.status, "Cancelled")

  const missing = await validator.validate("A999999999Z", { live: true })
  assert.equal(missing.valid, false)
  assert.equal(missing.liveChecked, true)
})