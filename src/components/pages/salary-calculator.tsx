"use client"

import { useMemo, useState } from "react"
import { ArrowClockwise, Copy, Info, Receipt, User } from "@phosphor-icons/react/dist/ssr"

/**
 * Kenya Unified Salary Calculator 2026 — one payslip breakdown for
 * PAYE (Finance Act 2023/2025 bands), SHIF 2.75%, NSSF Tier I & II,
 * Affordable Housing Levy 1.5%, personal relief, insurance relief.
 */

const kes = (n: number) =>
  n.toLocaleString("en-KE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })

const PRESETS = [25000, 50000, 100000, 200000, 500000]

// PAYE bands (monthly, KES) — Finance Act 2023, retained by Finance Act 2025
const BANDS = [
  { upTo: 24000, rate: 0.10, label: "First 24,000 @ 10%" },
  { upTo: 32333, rate: 0.25, label: "24,001 – 32,333 @ 25%" },
  { upTo: 500000, rate: 0.30, label: "32,334 – 500,000 @ 30%" },
  { upTo: 800000, rate: 0.325, label: "500,001 – 800,000 @ 32.5%" },
  { upTo: Infinity, rate: 0.35, label: "Above 800,000 @ 35%" },
]

const PERSONAL_RELIEF = 2400
const SHIF_RATE = 0.0275
const SHIF_MIN = 300
const AHL_RATE = 0.015
const NSSF_TIER1_CEILING = 8000
const NSSF_TIER2_CEILING = 72000
const NSSF_RATE = 0.06
const PENSION_CAP = 30000 // Finance Act 2025 raised deductible retirement contributions to 30,000/mo
const MORTGAGE_CAP = 30000
const INSURANCE_RELIEF_RATE = 0.15
const INSURANCE_RELIEF_MAX = 5000

interface Breakdown {
  gross: number
  nssfT1: number
  nssfT2: number
  nssf: number
  shif: number
  ahl: number
  pensionAllowed: number
  mortgageAllowed: number
  taxable: number
  bandTax: { label: string; amount: number }[]
  grossTax: number
  personalRelief: number
  insuranceRelief: number
  paye: number
  totalDeductions: number
  net: number
  employerNssf: number
  employerAhl: number
  employerCost: number
  netPct: number
}

function compute(gross: number, pensionInput: number, insurance: number, mortgage: number): Breakdown {
  const nssfT1 = Math.min(gross, NSSF_TIER1_CEILING) * NSSF_RATE
  const nssfT2 = Math.max(0, Math.min(gross, NSSF_TIER2_CEILING) - NSSF_TIER1_CEILING) * NSSF_RATE
  const nssf = nssfT1 + nssfT2
  const shif = Math.max(SHIF_MIN, gross * SHIF_RATE)
  const ahl = gross * AHL_RATE
  const pensionAllowed = Math.min(pensionInput, PENSION_CAP)
  const mortgageAllowed = Math.min(mortgage, MORTGAGE_CAP)
  const taxable = Math.max(0, gross - nssf - shif - ahl - pensionAllowed - mortgageAllowed)

  let remaining = taxable
  let prev = 0
  let grossTax = 0
  const bandTax: { label: string; amount: number }[] = []
  for (const b of BANDS) {
    const span = Math.max(0, Math.min(remaining, b.upTo - prev))
    const t = span * b.rate
    if (span > 0) bandTax.push({ label: b.label, amount: t })
    grossTax += t
    remaining -= span
    prev = b.upTo
    if (remaining <= 0) break
  }

  const insuranceRelief = Math.min(insurance, INSURANCE_RELIEF_MAX) * INSURANCE_RELIEF_RATE
  const paye = Math.max(0, grossTax - PERSONAL_RELIEF - insuranceRelief)
  const totalDeductions = paye + nssf + shif + ahl + pensionInput
  const net = gross - totalDeductions
  const employerNssf = nssf
  const employerAhl = ahl
  const employerCost = gross + employerNssf + employerAhl + pensionInput
  return {
    gross, nssfT1, nssfT2, nssf, shif, ahl, pensionAllowed, mortgageAllowed, taxable,
    bandTax, grossTax, personalRelief: PERSONAL_RELIEF, insuranceRelief, paye,
    totalDeductions, net, employerNssf, employerAhl, employerCost,
    netPct: gross > 0 ? (net / gross) * 100 : 0,
  }
}

const leaderRow = "flex items-baseline gap-2 text-[0.85rem] leading-none"

function Leader({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className={leaderRow}>
      <span className={`shrink-0 ${strong ? "font-semibold text-ink" : "text-ink-muted"}`}>{label}</span>
      <span className="flex-1 border-b border-dotted border-ink-muted/40" aria-hidden="true" />
      <span className={`font-mono tabular-nums ${strong ? "font-display text-[1.05rem] font-bold text-brand" : "text-ink"}`}>{value}</span>
    </div>
  )
}

export function SalaryCalculator() {
  const [gross, setGross] = useState("")
  const [pension, setPension] = useState("")
  const [insurance, setInsurance] = useState("")
  const [mortgage, setMortgage] = useState("")
  const [annual, setAnnual] = useState(false)
  const [copied, setCopied] = useState(false)

  const g = parseFloat(gross.replace(/[^0-9.]/g, "")) || 0
  const p = parseFloat(pension.replace(/[^0-9.]/g, "")) || 0
  const i = parseFloat(insurance.replace(/[^0-9.]/g, "")) || 0
  const m = parseFloat(mortgage.replace(/[^0-9.]/g, "")) || 0

  const b = useMemo(() => compute(g, p, i, m), [g, p, i, m])
  const show = g > 0
  const mult = annual ? 12 : 1
  const fmt = (n: number) => kes(n * mult)

  async function copySummary() {
    if (!show) return
    const lines = [
      `KENYA PAYSLIP BREAKDOWN ${annual ? "(annual)" : "(monthly)"} — Smart VAT Kenya`,
      `Gross pay: KES ${fmt(b.gross)}`,
      "",
      `NSSF Tier I: KES ${fmt(b.nssfT1)}`,
      `NSSF Tier II: KES ${fmt(b.nssfT2)}`,
      `SHIF (2.75%): KES ${fmt(b.shif)}`,
      `Housing Levy (1.5%): KES ${fmt(b.ahl)}`,
      `Taxable pay: KES ${fmt(b.taxable)}`,
      `PAYE (after KES ${(PERSONAL_RELIEF * mult).toLocaleString()} personal relief): KES ${fmt(b.paye)}`,
      "",
      `Total deductions: KES ${fmt(b.totalDeductions)}`,
      `Net pay: KES ${fmt(b.net)}`,
      `Employer cost (incl. NSSF + levy match): KES ${fmt(b.employerCost)}`,
      "- smartvatkenya.co.ke/tools/salary-calculator/",
    ]
    try {
      await navigator.clipboard.writeText(lines.join("\n"))
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch { /* clipboard unavailable */ }
  }

  const inputCls =
    "w-full bg-canvas-alt border border-hairline rounded-lg px-4 py-3 text-ink font-display text-[1.05rem] font-semibold focus:outline-none focus:border-brand transition-colors placeholder:text-ink-muted/30 placeholder:font-normal"
  const labelCls = "block text-[0.78rem] font-medium text-ink-muted mb-1.5"

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      {/* ---------- inputs ---------- */}
      <div className="lg:col-span-2">
        <div className="bg-canvas border border-hairline rounded-xl overflow-hidden shadow-sm">
          <div className="bg-canvas-dark px-5 py-4">
            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-canvas">Your pay details</p>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-canvas/60 mt-0.5">Finance Act 2025 rates · verified 2026</p>
          </div>
          <div className="p-5 sm:p-6 space-y-5">
            <div>
              <label htmlFor="gross" className={labelCls}>Monthly gross salary (KES)</label>
              <input id="gross" type="text" inputMode="numeric" value={gross} onChange={(e) => setGross(e.target.value)}
                placeholder="e.g. 85,000" className={inputCls} />
              <div className="flex flex-wrap gap-2 mt-3">
                {PRESETS.map((v) => (
                  <button key={v} type="button" onClick={() => setGross(String(v))}
                    className={`min-h-[36px] px-3 py-1.5 rounded-md text-[0.75rem] font-medium border transition-colors active:scale-[0.97] ${
                      g === v ? "bg-ink text-background border-ink" : "border-hairline text-ink-muted hover:border-ink-muted hover:text-ink"
                    }`}>
                    {v >= 1000 ? `${v / 1000}k` : v}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="pension" className={labelCls}>Voluntary pension contribution (KES/mo) <span className="font-normal text-ink-muted/60">— optional</span></label>
              <input id="pension" type="text" inputMode="numeric" value={pension} onChange={(e) => setPension(e.target.value)}
                placeholder="0" className={inputCls} />
              <p className="text-[0.68rem] text-ink-muted mt-1.5">Deductible up to KES 30,000/month (Finance Act 2025).</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="insurance" className={labelCls}>Insurance premium (KES/mo)</label>
                <input id="insurance" type="text" inputMode="numeric" value={insurance} onChange={(e) => setInsurance(e.target.value)}
                  placeholder="0" className={inputCls} />
              </div>
              <div>
                <label htmlFor="mortgage" className={labelCls}>Mortgage interest (KES/mo)</label>
                <input id="mortgage" type="text" inputMode="numeric" value={mortgage} onChange={(e) => setMortgage(e.target.value)}
                  placeholder="0" className={inputCls} />
              </div>
            </div>
            <div className="flex items-center gap-2 pt-1">
              <button type="button" onClick={() => setAnnual(false)} aria-pressed={!annual}
                className={`min-h-[40px] flex-1 px-3 py-2 rounded-md text-[0.78rem] font-medium border transition-colors ${!annual ? "bg-ink text-background border-ink" : "border-hairline text-ink-muted hover:border-ink-muted"}`}>
                Monthly
              </button>
              <button type="button" onClick={() => setAnnual(true)} aria-pressed={annual}
                className={`min-h-[40px] flex-1 px-3 py-2 rounded-md text-[0.78rem] font-medium border transition-colors ${annual ? "bg-ink text-background border-ink" : "border-hairline text-ink-muted hover:border-ink-muted"}`}>
                Annual view
              </button>
            </div>
            {show && (
              <button type="button" onClick={() => { setGross(""); setPension(""); setInsurance(""); setMortgage("") }}
                className="inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-ink-muted hover:text-brand transition-colors">
                <ArrowClockwise size={14} weight="duotone" aria-hidden="true" /> Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ---------- payslip ---------- */}
      <div className="lg:col-span-3">
        <div className="bg-canvas border border-hairline rounded-xl overflow-hidden shadow-sm">
          <div className="bg-canvas-dark px-5 py-4 flex items-center justify-between">
            <div>
              <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-canvas">Payslip breakdown</p>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-canvas/60 mt-0.5">PAYE · SHIF · NSSF · Housing Levy</p>
            </div>
            <User size={22} weight="duotone" className="text-canvas/40" aria-hidden="true" />
          </div>

          {show ? (
            <div className="p-5 sm:p-6">
              <div className="flex items-baseline justify-between mb-5 pb-4 border-b border-hairline">
                <div>
                  <p className="text-[0.78rem] text-ink-muted">Gross pay ({annual ? "per year" : "per month"})</p>
                  <p className="font-display text-[1.5rem] font-semibold text-ink tabular-nums">KES {fmt(b.gross)}</p>
                </div>
                <p className="font-mono text-[0.7rem] text-ink-muted">take-home ≈ {b.netPct.toFixed(0)}%</p>
              </div>

              <div className="space-y-3.5">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink-muted">Statutory deductions</p>
                <Leader label="NSSF Tier I (6% of first 8,000)" value={fmt(b.nssfT1)} />
                <Leader label="NSSF Tier II (6% of 8,001–72,000)" value={fmt(b.nssfT2)} />
                <Leader label="SHIF (2.75% of gross)" value={fmt(b.shif)} />
                <Leader label="Housing Levy (1.5% of gross)" value={fmt(b.ahl)} />
                {p > 0 && <Leader label="Voluntary pension" value={fmt(p)} />}

                <div className="pt-3">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink-muted mb-3.5">PAYE computation</p>
                  <div className="flex items-baseline gap-2 text-[0.85rem] leading-none mb-3">
                    <span className="text-ink-muted shrink-0">Taxable pay (after NSSF, SHIF, levy{p > 0 ? ", pension" : ""}{m > 0 ? ", mortgage" : ""})</span>
                    <span className="flex-1 border-b border-dotted border-ink-muted/40" aria-hidden="true" />
                    <span className="font-mono text-ink tabular-nums">{fmt(b.taxable)}</span>
                  </div>
                  {b.bandTax.map((bt) => (
                    <div key={bt.label} className={leaderRow + " mb-2.5"}>
                      <span className="text-ink-muted shrink-0">{bt.label}</span>
                      <span className="flex-1 border-b border-dotted border-ink-muted/40" aria-hidden="true" />
                      <span className="font-mono text-ink tabular-nums">{fmt(bt.amount)}</span>
                    </div>
                  ))}
                  <div className={leaderRow + " mb-2.5"}>
                    <span className="text-ink-muted shrink-0">Gross tax</span>
                    <span className="flex-1 border-b border-dotted border-ink-muted/40" aria-hidden="true" />
                    <span className="font-mono text-ink tabular-nums">{fmt(b.grossTax)}</span>
                  </div>
                  <div className={leaderRow + " mb-2.5"}>
                    <span className="text-ink-muted shrink-0">Personal relief</span>
                    <span className="flex-1 border-b border-dotted border-ink-muted/40" aria-hidden="true" />
                    <span className="font-mono text-emerald-600 dark:text-emerald-400 tabular-nums">− {fmt(b.personalRelief)}</span>
                  </div>
                  {b.insuranceRelief > 0 && (
                    <div className={leaderRow + " mb-2.5"}>
                      <span className="text-ink-muted shrink-0">Insurance relief (15%)</span>
                      <span className="flex-1 border-b border-dotted border-ink-muted/40" aria-hidden="true" />
                      <span className="font-mono text-emerald-600 dark:text-emerald-400 tabular-nums">− {fmt(b.insuranceRelief)}</span>
                    </div>
                  )}
                  <Leader label="PAYE due" value={fmt(b.paye)} />
                </div>

                <div className="pt-4 border-t border-hairline space-y-3.5">
                  <Leader label="Total deductions" value={fmt(b.totalDeductions)} />
                  <div className="flex items-baseline gap-2">
                    <span className="font-semibold text-ink shrink-0 text-[0.92rem]">Net pay ({annual ? "per year" : "per month"})</span>
                    <span className="flex-1" aria-hidden="true" />
                    <span className="font-display text-[1.35rem] font-bold text-brand tabular-nums">KES {fmt(b.net)}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-hairline">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink-muted mb-3.5">What your employer adds on top</p>
                <div className="space-y-3.5">
                  <Leader label="Employer NSSF (matched)" value={fmt(b.employerNssf)} />
                  <Leader label="Employer Housing Levy (1.5%)" value={fmt(b.employerAhl)} />
                  {p > 0 && <Leader label="Employer pension match" value={fmt(p)} />}
                  <Leader label="Total employer cost" value={fmt(b.employerCost)} strong />
                </div>
              </div>

              <button type="button" onClick={copySummary}
                className="mt-6 min-h-[44px] inline-flex items-center gap-2 rounded-md border border-hairline bg-canvas-alt px-4 text-[0.82rem] font-medium text-ink hover:border-ink-muted transition-colors">
                <Copy size={15} weight="duotone" aria-hidden="true" /> {copied ? "Copied to clipboard" : "Copy payslip breakdown"}
              </button>
            </div>
          ) : (
            <div className="p-6">
              <p className="text-[0.88rem] text-ink-muted leading-relaxed flex items-start gap-2">
                <Receipt size={18} weight="duotone" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                Enter your gross salary — the full statutory breakdown (PAYE, SHIF, NSSF, Housing Levy) builds as you type.
              </p>
            </div>
          )}
        </div>

        <p className="mt-3 text-[0.72rem] text-ink-muted leading-relaxed flex items-start gap-1.5">
          <Info size={12} className="shrink-0 mt-0.5" aria-hidden="true" />
          Based on Finance Act 2025 rates as applied by KRA for 2026: PAYE bands from KES 24,000 @10% to 35% above 800,000; SHIF 2.75% (min KES 300); NSSF Tier I &amp; II at 6%; Housing Levy 1.5%; personal relief KES 2,400. Indicative only — your payslip may differ on benefits, arrears or voluntary deductions.
        </p>
      </div>
    </div>
  )
}
