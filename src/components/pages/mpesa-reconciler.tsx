"use client"

import { useMemo, useState, useRef } from "react"
import { ArrowClockwise, CheckCircle, Copy, FileCsv, Info, Receipt, ShieldCheck, Warning, XCircle } from "@phosphor-icons/react/dist/ssr"

/**
 * M-Pesa VAT Reconciler — parse a Safaricom M-Pesa statement (paste or CSV upload),
 * flag which inflows are actual sales, extract 16% output VAT, and total charges.
 * Runs 100% in the browser: nothing is uploaded anywhere.
 */

type Category = "sale" | "nonsale" | "charge" | "out"

interface Txn {
  id: number
  date: string
  detail: string
  paidIn: number
  withdrawn: number
  category: Category
  sale: boolean // editable flag — only meaningful for money-in rows
}

interface ParseResult {
  txns: Txn[]
  skipped: number
  format: "csv" | "text"
}

const kes = (n: number) =>
  n.toLocaleString("en-KE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })

const VAT_RATE = 0.16

/* ---------------- classification ---------------- */

const CHARGE_RE = /charge|fee|commission|tariff|excise/i
const OUT_RE =
  /withdraw|pay\s?bill|buy\s?goods|send\s?money|bank\s?transfer|airtime|m-?shwari\s?(?:send|deposit)|b2b|b2c|pay\s?shopping|atm|rent|salary|pochi|to\s?(?:bank|equity|coop|kcb|absa|ncba)/i
// strong out-signals that beat a positive "Paid In" figure (PDF text mis-alignment)
const OUT_STRONG_RE =
  /withdraw|buy\s?goods|send\s?money|bank\s?transfer\s?to|airtime|b2b|b2c|pay\s?shopping|atm|pochi|to\s?(?:bank|equity|coop|kcb|absa|ncba)/i
const NONSALE_IN_RE =
  /reversal|m-?shwari|loan|from\s?bank|transfer\s?from|agent|float|interest|salary|refund\s?from|fuliza/i
const SALE_IN_RE = /paybill|pay\s?bill\s?received|customer|merchant|till|invoice|deposit\s?via|order|sale/i

function classify(detail: string, paidIn: number, withdrawn: number): Category {
  if (CHARGE_RE.test(detail)) return "charge"
  if (paidIn > 0) {
    if (NONSALE_IN_RE.test(detail)) return "nonsale"
    if (OUT_STRONG_RE.test(detail)) return "out"
    return "sale"
  }
  if (withdrawn > 0) return "out"
  // single amount — direction unknown, infer from narration
  if (OUT_RE.test(detail)) return "out"
  if (SALE_IN_RE.test(detail)) return "sale"
  if (NONSALE_IN_RE.test(detail)) return "nonsale"
  return "nonsale"
}

/* ---------------- parsing ---------------- */

// Amounts must carry 2 decimals (M-Pesa format: "35,000.00") so dates, IDs and
// meter numbers embedded in narration never register as amounts.
const AMOUNT_RE = /(?:KES|Ksh\.?)?\s*(\d{1,3}(?:,\d{3})+|\d+)\.\d{2}(?!\d)/g
const DATE_RE = /(\d{4}-\d{1,2}-\d{1,2})|(\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4})/

function splitCsvLine(line: string): string[] {
  const out: string[] = []
  let cur = ""
  let inQ = false
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (inQ) {
      if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++ }
      else if (ch === '"') inQ = false
      else cur += ch
    } else if (ch === '"') inQ = true
    else if (ch === ",") { out.push(cur); cur = "" }
    else cur += ch
  }
  out.push(cur)
  return out
}

function toNum(s: string): number {
  const n = parseFloat(s.replace(/,/g, ""))
  return Number.isFinite(n) && n > 0 ? n : 0
}

function findHeaderCols(header: string[]): Record<string, number> {
  const norm = (s: string) => s.toLowerCase().replace(/[^a-z]/g, "")
  const idx: Record<string, number> = {}
  header.forEach((h, i) => {
    const n = norm(h)
    if (n.startsWith("paidin") && idx.paidIn === undefined) idx.paidIn = i
    else if (n.startsWith("withdrawn") && idx.withdrawn === undefined) idx.withdrawn = i
    else if ((n.startsWith("transactiontype") || n.startsWith("type")) && idx.type === undefined) idx.type = i
    else if (n.includes("details") || n.includes("narration") || n.includes("description")) idx.detail = i
    else if (n.includes("time") || n.startsWith("date")) idx.date = i
  })
  return idx
}

function parseStatement(raw: string): ParseResult {
  const lines = raw.split(/\r?\n/).map((l) => l.trim()).filter(Boolean)
  if (!lines.length) return { txns: [], skipped: 0, format: "text" }

  // --- CSV mode: header row with Paid In / Withdrawn columns
  const headerLine = lines.find((l) => /paid\s?in/i.test(l) && /withdrawn/i.test(l))
  if (headerLine) {
    const cols = findHeaderCols(splitCsvLine(headerLine))
    const txns: Txn[] = []
    let skipped = 0
    for (const line of lines) {
      if (line === headerLine) continue
      const cells = splitCsvLine(line)
      if (cells.length < 3) { continue }
      const paidIn = cols.paidIn !== undefined ? toNum(cells[cols.paidIn] || "") : 0
      const withdrawn = cols.withdrawn !== undefined ? toNum(cells[cols.withdrawn] || "") : 0
      const detail = [cols.type !== undefined ? cells[cols.type] : "", cols.detail !== undefined ? cells[cols.detail] : ""]
        .filter(Boolean).join(" - ").trim()
      const date = cols.date !== undefined ? (cells[cols.date] || "") : ""
      if (paidIn === 0 && withdrawn === 0) { skipped++; continue }
      if (!detail && !date) { skipped++; continue }
      const category = classify(detail, paidIn, withdrawn)
      txns.push({ id: txns.length, date, detail: detail || "Transaction", paidIn, withdrawn, category, sale: category === "sale" })
    }
    return { txns, skipped, format: "csv" }
  }

  // --- Text mode: line-based heuristic (PDF copy-paste)
  const txns: Txn[] = []
  let skipped = 0
  for (const line of lines) {
    if (/^receipt|^statement|^account|^bank\s|^safaricom\s?house|^p\.?o\.?box|^date\s+generated|generated\s+on|total/i.test(line) && !DATE_RE.test(line)) { skipped++; continue }
    const dateMatch = line.match(DATE_RE)
    const date = dateMatch ? dateMatch[0] : ""
    // amounts are extracted from the line WITHOUT the date (dates like 2026-08-03
    // would otherwise contribute 2026 / 08 / 03 as pseudo-amounts)
    const amountZone = dateMatch ? line.replace(dateMatch[0], " ") : line
    AMOUNT_RE.lastIndex = 0
    const amounts: number[] = []
    let m: RegExpExecArray | null
    while ((m = AMOUNT_RE.exec(amountZone)) !== null) {
      const v = parseFloat(m[1].replace(/,/g, ""))
      if (Number.isFinite(v) && v > 0) amounts.push(v)
      if (amounts.length > 4) break
    }
    if (!amounts.length) { skipped++; continue }
    // drop trailing balance figure when 3+ amounts
    const core = amounts.length >= 3 ? amounts.slice(0, amounts.length - 1) : amounts
    let paidIn = 0, withdrawn = 0
    if (core.length >= 2) {
      paidIn = core[0]
      withdrawn = core[1]
    } else {
      // single amount: decide side from narration
      if (CHARGE_RE.test(line) || OUT_RE.test(line)) withdrawn = core[0]
      else paidIn = core[0]
    }
    const detail = line.replace(DATE_RE, " ").replace(AMOUNT_RE, " ").replace(/\s{2,}/g, " ").trim()
    const category = classify(detail, paidIn, withdrawn)
    txns.push({ id: txns.length, date, detail: detail || "Transaction", paidIn, withdrawn, category, sale: category === "sale" })
  }
  return { txns, skipped, format: "text" }
}

/* ---------------- sample statement (Paybill 4098765, Aug 2026) ---------------- */

const SAMPLE = `Receipt No,Completion Time,Transaction Type,Destination,Transaction Details,Transaction Status,Paid In,Withdrawn,Balance
SJ8A1K2M9Q,2026-08-03 09:14:22,Customer Deposit,2547**123,Paybill 4098765 - invoice INV-1042,Completed,"35,000.00","0.00","135,000.00"
SJ8A2P4R7T,2026-08-03 11:47:03,Customer Deposit,2547**845,Paybill 4098765 - order 221 deposit,Completed,"18,500.00","0.00","153,500.00"
SJ8A3B6N8V,2026-08-04 08:02:51,Transfer from Bank,COOPBANK,Transfer from Co-op Bank,Completed,"200,000.00","0.00","353,500.00"
SJ8A4C9D1F,2026-08-04 08:03:10,Transaction Charge,-,Charge for transfer from bank,Completed,"0.00","250.00","353,250.00"
SJ8A5E2G4H,2026-08-05 16:55:12,Customer Deposit,2547**332,Paybill 4098765 - invoice INV-1043,Completed,"52,800.00","0.00","406,050.00"
SJ8A6F7J9K,2026-08-06 10:31:44,Bank Transfer to Bank,EQUITY,Transfer to Equity 0123456789,Completed,"0.00","150,000.00","256,050.00"
SJ8A7G3L5M,2026-08-06 10:34:02,Transaction Charge,-,Charge for bank transfer,Completed,"0.00","108.00","255,942.00"
SJ8A8H6P8R,2026-08-07 12:12:09,Customer Deposit,2541**556,Paybill 4098765 - INV-1044 part payment,Completed,"12,000.00","0.00","267,942.00"
SJ8A9J2S4U,2026-08-08 09:44:31,Reversal,C2B Reversal,Reversal customer deposit 03/08 duplicate,Completed,"18,500.00","0.00","286,442.00"
SJ8B1K3M5P,2026-08-11 13:22:47,Customer Deposit,2547**903,Paybill 4098765 - invoice INV-1045,Completed,"88,000.00","0.00","374,442.00"
SJ8B2P5R8T,2026-08-12 15:03:19,M-Shwari Withdraw,M-SHWARI,M-Shwari savings withdrawal,Completed,"30,000.00","0.00","404,442.00"
SJ8B3R7T9W,2026-08-14 09:30:05,Pay Bill,KPLC,Prepaid electricity meter 11223344,Completed,"0.00","9,500.00","394,942.00"
SJ8B4T2V4X,2026-08-14 09:30:35,Transaction Charge,-,Charge for pay bill KPLC,Completed,"0.00","26.00","394,916.00"
SJ8B5V6X8Z,2026-08-17 11:41:58,Customer Deposit,2542**778,Paybill 4098765 - invoice INV-1046,Completed,"7,100.00","0.00","402,016.00"
SJ8C1X9Z2B,2026-08-20 17:08:33,Pay Bill,RENT,Landlord rent payment August 2026,Completed,"0.00","65,000.00","337,016.00"
SJ8C2Z4B6D,2026-08-20 17:09:02,Transaction Charge,-,Charge for pay bill rent,Completed,"0.00","108.00","336,908.00"
SJ8C3B7D9F,2026-08-24 10:15:26,Airtime Purchase,SELF,Safaricom airtime office line,Completed,"0.00","1,000.00","335,908.00"
SJ8C4D2F4H,2026-08-28 14:52:41,Customer Deposit,2547**123,Paybill 4098765 - invoice INV-1047,Completed,"55,000.00","0.00","390,908.00"`

/* ---------------- component ---------------- */

export function MpesaReconciler() {
  const [pasted, setPasted] = useState("")
  const [fileName, setFileName] = useState("")
  const [result, setResult] = useState<ParseResult | null>(null)
  const [sales, setSales] = useState<Record<number, boolean>>({})
  const [inclusive, setInclusive] = useState(true)
  const [copied, setCopied] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  function runParse(raw: string, name: string) {
    const parsed = parseStatement(raw)
    if (!parsed.txns.length) {
      setResult({ txns: [], skipped: parsed.skipped, format: parsed.format })
      return
    }
    const flags: Record<number, boolean> = {}
    parsed.txns.forEach((t) => { flags[t.id] = t.sale })
    setSales(flags)
    setResult(parsed)
    setFileName(name)
    setShowAll(false)
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]
    if (!f) return
    const reader = new FileReader()
    reader.onload = () => runParse(String(reader.result || ""), f.name)
    reader.readAsText(f)
  }

  function loadSample() {
    runParse(SAMPLE, "sample-paybill-statement.csv")
  }

  function reset() {
    setResult(null)
    setPasted("")
    setFileName("")
    setSales({})
    if (fileRef.current) fileRef.current.value = ""
  }

  const summary = useMemo(() => {
    if (!result) return null
    let saleGross = 0, saleCount = 0, nonsaleGross = 0, nonsaleCount = 0
    let chargeTotal = 0, chargeCount = 0, outTotal = 0, outCount = 0
    for (const t of result.txns) {
      if (t.category === "charge") { chargeTotal += t.withdrawn; chargeCount++ }
      else if (t.category === "out") { outTotal += t.withdrawn; outCount++ }
      else if (sales[t.id]) { saleGross += t.paidIn; saleCount++ }
      else { nonsaleGross += t.paidIn; nonsaleCount++ }
    }
    const vat = inclusive ? saleGross * (VAT_RATE / (1 + VAT_RATE)) : saleGross * VAT_RATE
    return { saleGross, saleCount, nonsaleGross, nonsaleCount, chargeTotal, chargeCount, outTotal, outCount, vat }
  }, [result, sales, inclusive])

  async function copySummary() {
    if (!summary) return
    const period = result?.txns.find((t) => t.date)?.date || "statement"
    const lines = [
      "M-PESA VAT RECONCILIATION - Smart VAT Kenya",
      `Statement period detected from: ${period}${fileName ? ` (${fileName})` : ""}`,
      "",
      `Sales receipts flagged: ${summary.saleCount} (KES ${kes(summary.saleGross)})`,
      `Output VAT @ 16% ${inclusive ? "(extracted from VAT-inclusive receipts, x 16/116)" : "(added on top, x 0.16)"}: KES ${kes(summary.vat)}`,
      `Non-sale inflows excluded: ${summary.nonsaleCount} (KES ${kes(summary.nonsaleGross)})`,
      `M-Pesa charges & fees: ${summary.chargeCount} (KES ${kes(summary.chargeTotal)})`,
      `Outflows (transfers, bills, airtime): ${summary.outCount} (KES ${kes(summary.outTotal)})`,
      "",
      "Input VAT note: claim M-Pesa charges only with a Safaricom eTIMS tax invoice.",
      "- Reconciled with smartvatkenya.co.ke/tools/mpesa-vat-reconciler/",
    ]
    try {
      await navigator.clipboard.writeText(lines.join("\n"))
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch { /* clipboard unavailable */ }
  }

  const visible = result ? (showAll ? result.txns : result.txns.slice(0, 8)) : []
  const catStyle: Record<Category, string> = {
    sale: "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
    nonsale: "bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800",
    charge: "bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800",
    out: "bg-canvas-alt text-ink-muted border-hairline",
  }
  const catLabel: Record<Category, string> = { sale: "Sale", nonsale: "Not a sale", charge: "Charge", out: "Out" }

  return (
    <div className="max-w-4xl mx-auto">
      {/* ---------- privacy strip ---------- */}
      <div className="flex items-center gap-2 mb-6 px-4 py-3 rounded-lg border border-hairline bg-canvas-alt">
        <ShieldCheck size={18} weight="duotone" className="text-brand shrink-0" aria-hidden="true" />
        <p className="text-[0.8rem] text-ink-soft leading-snug">
          <strong className="font-semibold text-ink">100% private:</strong> parsing runs entirely in your browser. Your statement never leaves this device — no upload, no storage.
        </p>
      </div>

      {/* ---------- input card ---------- */}
      <div className="bg-canvas border border-hairline rounded-xl overflow-hidden shadow-sm">
        <div className="bg-canvas-dark px-5 py-4">
          <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-canvas">M-Pesa statement input</p>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-canvas/60 mt-0.5">Full statement · CSV export · or PDF copy-paste</p>
        </div>
        <div className="p-5 sm:p-6">
          <label htmlFor="mpesa-input" className="block text-[0.8rem] font-medium text-ink-muted mb-2">
            Paste your M-Pesa statement text (open the PDF, select all, copy, paste here)
          </label>
          <textarea
            id="mpesa-input"
            value={pasted}
            onChange={(e) => setPasted(e.target.value)}
            placeholder={"Receipt No,Completion Time,Transaction Type,...,Paid In,Withdrawn,Balance\nSJ8A1K2M9Q,2026-08-03 09:14:22,Customer Deposit,...,\"35,000.00\",\"0.00\",\"135,000.00\"\n\n—or paste PDF statement lines—\n2026-08-03  Customer Deposit  Paybill 4098765  KES 35,000.00  KES 135,000.00"}
            rows={7}
            className="w-full bg-canvas-alt border border-hairline rounded-lg px-4 py-3 text-[0.82rem] font-mono text-ink placeholder:text-ink-muted/40 focus:outline-none focus:border-brand transition-colors leading-relaxed"
          />
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <button
              type="button"
              onClick={() => runParse(pasted, "pasted statement")}
              disabled={!pasted.trim()}
              className="min-h-[44px] inline-flex items-center gap-2 bg-brand text-canvas font-semibold px-6 py-2.5 rounded-md hover:bg-brand-hover transition-colors text-[0.85rem] disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Receipt size={16} weight="bold" aria-hidden="true" /> Reconcile statement
            </button>
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="min-h-[44px] inline-flex items-center gap-2 border border-hairline text-ink font-medium px-5 py-2.5 rounded-md hover:border-ink-muted transition-colors text-[0.85rem]"
            >
              <FileCsv size={16} weight="duotone" aria-hidden="true" /> Upload CSV
            </button>
            <button
              type="button"
              onClick={loadSample}
              className="min-h-[44px] inline-flex items-center gap-2 border border-hairline text-ink-soft font-medium px-5 py-2.5 rounded-md hover:border-brand hover:text-brand transition-colors text-[0.85rem]"
            >
              Try a sample statement
            </button>
            <input ref={fileRef} type="file" accept=".csv,.txt,text/csv,text/plain" onChange={handleFile} className="hidden" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* ---------- error state ---------- */}
      {result && result.txns.length === 0 && (
        <div className="mt-6 p-5 rounded-lg border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20 flex items-start gap-3">
          <Warning size={20} weight="fill" className="text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-semibold text-[0.9rem] text-amber-800 dark:text-amber-300">No transactions found</p>
            <p className="text-[0.82rem] text-amber-700 dark:text-amber-400 mt-1 leading-relaxed">
              We couldn&apos;t detect any transaction rows. Download the <strong>Full Statement</strong> CSV from the M-Pesa app or Safaricom&apos;s M-Pesa statement portal, or paste the PDF text — each transaction line must contain an amount.
            </p>
          </div>
        </div>
      )}

      {/* ---------- results ---------- */}
      {result && result.txns.length > 0 && summary && (
        <>
          {/* review table */}
          <div className="mt-8">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h2 className="font-display text-[1.05rem] font-semibold text-ink">
                Step 1 · Review what counts as a sale
              </h2>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-muted">
                {result.format === "csv" ? "CSV parsed" : "Text parsed"} · {result.txns.length} transactions
                {result.skipped > 0 ? ` · ${result.skipped} rows skipped` : ""}
              </p>
            </div>
            <p className="text-[0.85rem] text-ink-soft leading-relaxed mb-4">
              We auto-flag money-in as <strong>sales</strong> unless it looks like a bank transfer, M-Shwari, reversal or refund. Tap any inflow to re-classify it — the VAT total updates instantly.
            </p>
            <div className="border border-hairline rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-[0.8rem]">
                  <thead>
                    <tr className="bg-canvas-alt text-left">
                      <th className="px-4 py-3 font-medium text-ink-muted whitespace-nowrap">Date</th>
                      <th className="px-4 py-3 font-medium text-ink-muted">Details</th>
                      <th className="px-4 py-3 font-medium text-ink-muted text-right whitespace-nowrap">Paid in (KES)</th>
                      <th className="px-4 py-3 font-medium text-ink-muted text-right whitespace-nowrap">Withdrawn</th>
                      <th className="px-4 py-3 font-medium text-ink-muted">Class</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hairline">
                    {visible.map((t) => (
                      <tr key={t.id} className="hover:bg-canvas-alt/60 transition-colors">
                        <td className="px-4 py-2.5 font-mono text-[0.72rem] text-ink-muted whitespace-nowrap">{t.date || "—"}</td>
                        <td className="px-4 py-2.5 text-ink max-w-[260px] truncate" title={t.detail}>{t.detail}</td>
                        <td className="px-4 py-2.5 text-right font-mono tabular-nums text-ink">{t.paidIn ? kes(t.paidIn) : "—"}</td>
                        <td className="px-4 py-2.5 text-right font-mono tabular-nums text-ink-muted">{t.withdrawn ? kes(t.withdrawn) : "—"}</td>
                        <td className="px-4 py-2">
                          {t.category === "sale" || t.category === "nonsale" ? (
                            <button
                              type="button"
                              onClick={() => setSales((s) => ({ ...s, [t.id]: !s[t.id] }))}
                              className={`inline-flex min-h-[32px] items-center gap-1.5 px-2.5 py-1 rounded-md border text-[0.72rem] font-semibold transition-colors active:scale-[0.97] ${
                                sales[t.id] ? catStyle.sale : catStyle.nonsale
                              }`}
                              aria-pressed={sales[t.id]}
                              aria-label={sales[t.id] ? "Marked as sale — tap to exclude" : "Excluded — tap to count as sale"}
                            >
                              {sales[t.id] ? <CheckCircle size={13} weight="fill" aria-hidden="true" /> : <XCircle size={13} weight="fill" aria-hidden="true" />}
                              {sales[t.id] ? "Sale" : "Not a sale"}
                            </button>
                          ) : (
                            <span className={`inline-flex items-center px-2.5 py-1 rounded-md border text-[0.72rem] font-semibold ${catStyle[t.category]}`}>
                              {catLabel[t.category]}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {result.txns.length > 8 && (
                <button
                  type="button"
                  onClick={() => setShowAll((v) => !v)}
                  className="w-full min-h-[44px] text-[0.8rem] font-medium text-brand hover:bg-canvas-alt transition-colors border-t border-hairline"
                >
                  {showAll ? "Show fewer" : `Show all ${result.txns.length} transactions`}
                </button>
              )}
            </div>
          </div>

          {/* reconciliation receipt */}
          <div className="mt-10 grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="font-display text-[1.05rem] font-semibold text-ink mb-4">Step 2 · Your output VAT position</h2>
              <div className="border border-hairline rounded-xl overflow-hidden bg-canvas">
                <div className="bg-canvas-dark px-5 py-4">
                  <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-canvas">Reconciliation summary</p>
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-canvas/60 mt-0.5">VAT3 prep · output VAT from M-Pesa sales</p>
                </div>
                <div className="p-5 sm:p-6">
                  {/* inclusive toggle */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {([
                      { v: true, label: "Prices are VAT-inclusive (extract 16/116)" },
                      { v: false, label: "Prices exclude VAT (add 16%)" },
                    ] as const).map((o) => (
                      <button
                        key={String(o.v)}
                        type="button"
                        onClick={() => setInclusive(o.v)}
                        className={`min-h-[40px] px-3.5 py-2 rounded-md text-[0.78rem] font-medium border transition-colors active:scale-[0.98] ${
                          inclusive === o.v ? "bg-ink text-background border-ink" : "border-hairline text-ink-muted hover:border-ink-muted hover:text-ink"
                        }`}
                        aria-pressed={inclusive === o.v}
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-3.5">
                    <div className="flex items-baseline gap-2 text-[0.9rem] leading-none">
                      <span className="text-ink-muted shrink-0">Sales flagged ({summary.saleCount})</span>
                      <span className="flex-1 border-b border-dotted border-ink-muted/40" aria-hidden="true" />
                      <span className="font-mono text-ink tabular-nums">KES {kes(summary.saleGross)}</span>
                    </div>
                    <div className="flex items-baseline gap-2 text-[0.9rem] leading-none">
                      <span className="text-ink-muted shrink-0">Output VAT @ 16%{inclusive ? " (16/116)" : ""}</span>
                      <span className="flex-1 border-b border-dotted border-ink-muted/40" aria-hidden="true" />
                      <span className="font-display font-semibold text-brand tabular-nums">KES {kes(summary.vat)}</span>
                    </div>
                    <div className="flex items-baseline gap-2 text-[0.9rem] leading-none">
                      <span className="text-ink-muted shrink-0">Non-sale inflows excluded ({summary.nonsaleCount})</span>
                      <span className="flex-1 border-b border-dotted border-ink-muted/40" aria-hidden="true" />
                      <span className="font-mono text-ink tabular-nums">KES {kes(summary.nonsaleGross)}</span>
                    </div>
                    <div className="flex items-baseline gap-2 text-[0.9rem] leading-none">
                      <span className="text-ink-muted shrink-0">M-Pesa charges ({summary.chargeCount})</span>
                      <span className="flex-1 border-b border-dotted border-ink-muted/40" aria-hidden="true" />
                      <span className="font-mono text-ink tabular-nums">KES {kes(summary.chargeTotal)}</span>
                    </div>
                    <div className="flex items-baseline gap-2 text-[0.9rem] leading-none">
                      <span className="text-ink-muted shrink-0">Outflows ({summary.outCount})</span>
                      <span className="flex-1 border-b border-dotted border-ink-muted/40" aria-hidden="true" />
                      <span className="font-mono text-ink tabular-nums">KES {kes(summary.outTotal)}</span>
                    </div>
                    <div className="pt-4 border-t border-hairline flex items-baseline gap-2">
                      <span className="font-semibold text-ink shrink-0 text-[0.92rem]">VAT payable from M-Pesa sales</span>
                      <span className="flex-1" aria-hidden="true" />
                      <span className="font-display text-[1.35rem] font-bold text-brand tabular-nums">KES {kes(summary.vat)}</span>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={copySummary}
                      className="min-h-[44px] inline-flex items-center gap-2 rounded-md border border-hairline bg-canvas-alt px-4 text-[0.82rem] font-medium text-ink hover:border-ink-muted transition-colors"
                    >
                      <Copy size={15} weight="duotone" aria-hidden="true" /> {copied ? "Copied to clipboard" : "Copy reconciliation summary"}
                    </button>
                    <button
                      type="button"
                      onClick={reset}
                      className="min-h-[44px] inline-flex items-center gap-2 text-[0.82rem] font-medium text-ink-muted hover:text-brand transition-colors"
                    >
                      <ArrowClockwise size={15} weight="duotone" aria-hidden="true" /> Reconcile another statement
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* side notes */}
            <div className="lg:col-span-2 space-y-4">
              <div className="border border-hairline rounded-xl p-5 bg-canvas">
                <div className="flex items-start gap-2.5">
                  <Info size={16} weight="duotone" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[0.85rem] text-ink mb-1.5">Charges: input VAT is trapped</p>
                    <p className="text-[0.78rem] text-ink-soft leading-relaxed">
                      M-Pesa charges include 16% VAT, but you can only claim it with a <strong>Safaricom eTIMS tax invoice</strong> — not the statement. Request monthly eTIMS invoices from Safaricom.
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-hairline rounded-xl p-5 bg-canvas">
                <div className="flex items-start gap-2.5">
                  <Warning size={16} weight="duotone" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[0.85rem] text-ink mb-1.5">Every sale still needs an eTIMS invoice</p>
                    <p className="text-[0.78rem] text-ink-soft leading-relaxed">
                      A Paybill confirmation is not a tax invoice. If you&apos;re VAT-registered, issue eTIMS invoices for these sales — KRA matches Paybill/Till data against filed returns.
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-hairline rounded-xl p-5 bg-canvas">
                <p className="font-semibold text-[0.85rem] text-ink mb-1.5">Filing this month?</p>
                <p className="text-[0.78rem] text-ink-soft leading-relaxed mb-3">
                  We reconcile, file and eTIMS-check your VAT return before the 20th — KES 3,500/month.
                </p>
                <a
                  href="/services/monthly-vat-filing/"
                  className="min-h-[44px] inline-flex items-center justify-center gap-2 w-full bg-brand text-canvas text-[0.82rem] font-semibold px-4 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
                >
                  See monthly VAT filing
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
