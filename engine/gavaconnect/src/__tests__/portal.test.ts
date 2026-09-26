import { test } from "node:test"
import assert from "node:assert/strict"
import { createServer, Server } from "node:http"
import { GavaClient } from "../portal.js"
import { nilApi, totApi } from "../filing.js"
import { ApiProduct, GavaConfig } from "../types.js"
import { DuplicateError, KraRejectedError } from "../errors.js"

/** Minimal in-process KRA stub so tests never touch the network. */
function kraStub(routes: Record<string, (body: unknown) => unknown>) {
  const server: Server = createServer((req, res) => {
    let body = ""
    req.on("data", (c) => (body += c))
    req.on("end", () => {
      let parsed: unknown = {}
      try {
        parsed = body ? JSON.parse(body) : {}
      } catch {
        /* keep {} */
      }
      const url = req.url ?? "/"
      const handler = routes[url]
      res.setHeader("Content-Type", "application/json")
      if (!handler) {
        res.statusCode = 404
        res.end(JSON.stringify({ ResponseCode: "404", Message: "not found", Status: "NOK" }))
        return
      }
      res.statusCode = 200
      res.end(JSON.stringify(handler(parsed)))
    })
  })
  return server
}

function listen(s: Server): Promise<string> {
  return new Promise((resolve) => {
    s.listen(0, "127.0.0.1", () => {
      const addr = s.address()
      resolve(`http://127.0.0.1:${(addr as { port: number }).port}`)
    })
  })
}

function config(host: string, products: ApiProduct[]): GavaConfig {
  const credentials: GavaConfig["credentials"] = {}
  for (const p of products) {
    credentials[p] = { consumerKey: "k", consumerSecret: "s" }
  }
  return {
    environment: "sandbox",
    credentials,
    hosts: { sandbox: host, production: host },
  }
}

test("GavaClient: auth + pinByPin happy path", async () => {
  const s = kraStub({
    "/v1/token/generate?grant_type=client_credentials": () => ({
      access_token: "tok123",
      expires_in: "3599",
    }),
    "/checker/v1/pinbypin": () => ({
      ResponseCode: "23000",
      Message: "Valid PIN",
      Status: "OK",
      PINDATA: {
        KRAPIN: "P051234567A",
        TypeOfTaxpayer: "Non Individual",
        Name: "T. AN 052318TEST NA NA",
        StatusOfPIN: "Active",
      },
    }),
  })
  const host = await listen(s)
  try {
    const c = new GavaClient(config(host, ["pin-checker-by-pin"]))
    const r = await c.pinByPin("P051234567A")
    assert.equal(r.Status, "OK")
    assert.equal(r.PINDATA.StatusOfPIN, "Active")
    assert.equal(r.PINDATA.KRAPIN, "P051234567A")
  } finally {
    s.close()
  }
})

test("GavaClient: obligations feeds deadline engine", async () => {
  const s = kraStub({
    "/v1/token/generate?grant_type=client_credentials": () => ({ access_token: "t" }),
    "/checker/v1/obligations": () => ({
      ResponseCode: "0",
      Status: "OK",
      OBLIGATIONSDATA: [
        { TaxObligationCode: "VAT", TaxObligationName: "VAT Return", EffectiveDate: "2026-01-01", Status: "Active" },
      ],
    }),
  })
  const host = await listen(s)
  try {
    const c = new GavaClient(config(host, ["obligations"]))
    const r = await c.obligations("P051234567A")
    assert.equal(r.OBLIGATIONSDATA.length, 1)
    const first = r.OBLIGATIONSDATA[0]
    assert.ok(first, "obligation present")
    assert.equal(first.TaxObligationCode, "VAT")
  } finally {
    s.close()
  }
})

test("NIL filing adapter returns ack and logs golden event", async () => {
  const s = kraStub({
    "/v1/token/generate?grant_type=client_credentials": () => ({ access_token: "t" }),
    "/dtd/return/v1/nil": () => ({
      ResponseCode: "0",
      Message: "Success",
      Status: "OK",
      AckNumber: "NIL/2026/0001",
    }),
  })
  const host = await listen(s)
  try {
    const c = new GavaClient(config(host, ["nil-return"]))
    const provider = nilApi(c)
    const out = await provider.file({ kraPin: "P051234567A", obligation: 1, month: 8, year: 2026 })
    assert.equal(out.ack, true)
    assert.equal(out.reference, "NIL/2026/0001")
    assert.equal(out.provider, "nil")
    assert.equal(out.golden.event, "nil_ok")
  } finally {
    s.close()
  }
})

test("NIL adapter rejects on NOK duplicate period", async () => {
  const s = kraStub({
    "/v1/token/generate?grant_type=client_credentials": () => ({ access_token: "t" }),
    "/dtd/return/v1/nil": () => ({
      ResponseCode: "19005",
      Message: "Duplicate period",
      Status: "NOK",
    }),
  })
  const host = await listen(s)
  try {
    const c = new GavaClient(config(host, ["nil-return"]))
    const provider = nilApi(c)
    await assert.rejects(() =>
      provider.file({ kraPin: "P051234567A", obligation: 1, month: 8, year: 2026 }),
    )
  } finally {
    s.close()
  }
})

test("GavaClient: validateTcc path", async () => {
  const s = kraStub({
    "/v1/token/generate?grant_type=client_credentials": () => ({ access_token: "t" }),
    "/v1/kra-tcc/validate": () => ({
      ResponseCode: "0",
      Status: "OK",
      TCCDATA: { TCCSerialNumber: "TCC/2026/0001234", KRAPIN: "P051234567A", CertificateStatus: "Valid" },
    }),
  })
  const host = await listen(s)
  try {
    const c = new GavaClient(config(host, ["tcc-validate"]))
    const r = await c.validateTcc("P051234567A", "TCC/2026/0001234")
    assert.equal(r.TCCDATA?.CertificateStatus, "Valid")
  } finally {
    s.close()
  }
})

test("WHT VAT PRN generation", async () => {
  const s = kraStub({
    "/v1/token/generate?grant_type=client_credentials": () => ({ access_token: "t" }),
    "/generate/v1/prn/whtvat": () => ({
      ResponseCode: "0",
      Status: "OK",
      PRN: "PRN2026080001",
      DueDate: "2026-09-20",
    }),
  })
  const host = await listen(s)
  try {
    const c = new GavaClient(config(host, ["whtvat-prn"]))
    const r = await c.generateWhVatPrn({
      transactionHeader: { withholderPin: "P051234567A", taxObligation: "WHTVAT", period: "2026-08", totals: { subjectAmount: 10000, whAmount: 200 } },
      transactionDetails: [{ payeePIN: "P051111111A", WHT_VAT_GENERAL: 200, invoiceReference: "INV-1" }],
    })
    assert.equal(r.PRN, "PRN2026080001")
    assert.equal(r.DueDate, "2026-09-20")
  } finally {
    s.close()
  }
})