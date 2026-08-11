import { test } from "node:test"
import assert from "node:assert/strict"
import { loadFromEnv, productEnvName } from "../credentials.js"
import { CredentialsError } from "../errors.js"
import { getCredential } from "../credentials.js"

test("productEnvName converts kebab to SCREAMING_SNAKE", () => {
  assert.equal(productEnvName("pin-checker-by-pin"), "PIN_CHECKER_BY_PIN")
  assert.equal(productEnvName("whtvat-prn"), "WHTVAT_PRN")
})

test("getCredential throws CredentialsError with the product name when absent", () => {
  assert.throws(
    () => getCredential({}, "nil-return"),
    (e) => {
      assert.ok(e instanceof CredentialsError)
      assert.deepEqual((e as CredentialsError).missingProducts, ["nil-return"])
      return true
    },
  )
})

test("loadFromEnv reads env convention for configured environment", () => {
  const env = "SANDBOX"
  process.env[`GAVA_NIL_RETURN_${env}_KEY`] = "k"
  process.env[`GAVA_NIL_RETURN_${env}_SECRET`] = "s"
  try {
    const creds = loadFromEnv({ environment: "sandbox", credentials: {} })
    assert.deepEqual(creds["nil-return"], { consumerKey: "k", consumerSecret: "s" })
  } finally {
    delete process.env[`GAVA_NIL_RETURN_${env}_KEY`]
    delete process.env[`GAVA_NIL_RETURN_${env}_SECRET`]
  }
})

test("loadFromEnv ignores production creds when sandbox selected", () => {
  process.env.GAVA_PIN_CHECKER_BY_PIN_PRODUCTION_KEY = "prodkey"
  process.env.GAVA_PIN_CHECKER_BY_PIN_PRODUCTION_SECRET = "prodsecret"
  try {
    const creds = loadFromEnv({ environment: "sandbox", credentials: {} })
    assert.equal(creds["pin-checker-by-pin"], undefined)
  } finally {
    delete process.env.GAVA_PIN_CHECKER_BY_PIN_PRODUCTION_KEY
    delete process.env.GAVA_PIN_CHECKER_BY_PIN_PRODUCTION_SECRET
  }
})