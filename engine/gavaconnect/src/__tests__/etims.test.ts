import { test } from "node:test"
import assert from "node:assert/strict"
import { createServer, Server } from "node:http"
import { EtimsClient } from "../etims.js"
import { EtimsConfig, SalesTransaction } from "../types.js"
import { EtimsResultError, DuplicateError } from "../errors.js"

function kraStub(routes: Record<string, (body: unknown) => unknown>) {
  const server: Server = createServer((req, res) => {
    let body = ""
    req.on("data", (c) => (body += c))
    req.on("end", () => {
      let parsed: unknown = {}
      try {
        parsed = body ? JSON.parse(body) : {}
      } catch {
        /* */
      }
      const handler = routes[req.url ?? ""]
      res.setHeader("Content-Type", "application/json")
      if (!handler) {
        res.statusCode = 404
        res.end(JSON.stringify({ resultCd: "E99", resultMsg: "not found" }))
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
      const a = s.address()
      resolve(`http://127.0.0.1:${(a as { port: number }).port}`)
    })
  })
}

function cfg(host: string, cmcKey?: string): EtimsConfig {
  return {
    environment: "sandbox",
    tin: "P051234567A",
    bhfId: "00",
    dvcSrlNo: "FAKE001",
    apigeeToken: "at",
    apigeeAppId: "app",
    cmcKey,
    hosts: { sandbox: host, production: host },
  }
}

function tx(): SalesTransaction {
  return {
    tin: "P0512345678",
    bhfId: "00",
    custTin: "P0511111111",
    custNm: "Customer",
    salesTyCd: "N",
    salesDt: "20260801",
    spplyRoleCd: "S",
    icSpplyTyCd: "S",
    itemCnt: 1,
    totItemCnt: 1,
    summ: { totItemCnt: 1, taxblAmt: 1000, taxAmt: 160, totAmt: 1160 },
    items: [
      {
        itemSeq: 1,
        itemCd: "A1",
        itemClsCd: "G",
        itemNm: "Item",
        bcd: "",
        pkgUnitCd: "EA",
        pkgQty: 1,
        itemUnitCd: "EA",
        itemQty: 1,
        itemTotAmt: 1000,
        taxblAmt: 1000,
        taxAmt: 160,
        totDcAmt: 0,
        vatCd: "A",
        pric: 1000,
      },
    ],
  }
}

test("EtimsClient initOsdcInfo persists cmcKey", async () => {
  const s = kraStub({
    "/selectInitOsdcInfo": () => ({ resultCd: "000", resultMsg: "Success", cmcKey: "00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff" }),
  })
  const host = await listen(s)
  try {
    const e = new EtimsClient(cfg(host))
    const r = await e.initOsdcInfo()
    assert.equal(r.resultCd, "000")
    assert.equal(e.cmcKey, "00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff")
  } finally {
    s.close()
  }
})

test("EtimsClient decodes non-success resultCd into typed error", async () => {
  const s = kraStub({
    "/selectInitOsdcInfo": () => ({ resultCd: "901", resultMsg: "invalid device" }),
  })
  const host = await listen(s)
  try {
    const e = new EtimsClient(cfg(host))
    await assert.rejects(
      () => e.initOsdcInfo(),
      (err) => {
        assert.ok(err instanceof EtimsResultError)
        assert.equal((err as EtimsResultError).resultCd, "901")
        return true
      },
    )
  } finally {
    s.close()
  }
})

test("EtimsClient maps 994 to DuplicateError", async () => {
  const s = kraStub({
    "/selectInitOsdcInfo": () => ({ resultCd: "000", resultMsg: "OK", cmcKey: "00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff" }),
    "/trnsSales/saveSales": () => ({ resultCd: "000", resultMsg: "OK" }),
    "/trnsSales/saveInvoice": () => ({ resultCd: "994", resultMsg: "duplicate invoice" }),
  })
  const host = await listen(s)
  try {
    const e = new EtimsClient(cfg(host))
    await e.initOsdcInfo()
    await e.vscuSaveSales(tx())
    await assert.rejects(
      () => e.vscuSaveInvoice(tx()),
      (err) => err instanceof DuplicateError,
    )
  } finally {
    s.close()
  }
})

test("EtimsClient VSCU guards order: invoice before sales = 921", async () => {
  const s = kraStub({})
  const host = await listen(s)
  try {
    const e = new EtimsClient(cfg(host, "00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff"))
    await assert.rejects(
      () => e.vscuSaveInvoice(tx()),
      (err) => {
        assert.ok(err instanceof EtimsResultError)
        assert.equal((err as EtimsResultError).resultCd, "921")
        return true
      },
    )
  } finally {
    s.close()
  }
})