"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Info, WarningCircle } from "@phosphor-icons/react/dist/ssr"
import { ShareResult } from "@/components/share-result"
import { WA_PATHS } from "@/src/lib/whatsapp"
import { track } from "@/src/lib/analytics"

function formatKES(n: number) {
  return "KES " + n.toLocaleString("en-KE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

const TAX_REGIMES = [
  { value: "vat", label: "VAT", penaltyDesc: "KES 10,000 or 5% of tax due (whichever higher)", penaltyRate: 0.05, minPenalty: 10000 },
  { value: "paye", label: "PAYE", penaltyDesc: "KES 10,000 or 25% of tax due (whichever higher)", penaltyRate: 0.25, minPenalty: 10000 },
  { value: "income-individual", label: "Individual Income Tax", penaltyDesc: "KES 2,000 or 5% of tax due (whichever higher)", penaltyRate: 0.05, minPenalty: 2000 },
  { value: "income-company", label: "Company Income Tax (CIT)", penaltyDesc: "KES 20,000 or 5% of tax due (whichever higher)", penaltyRate: 0.05, minPenalty: 20000 },
  { value: "wht", label: "Withholding Tax (WHT)", penaltyDesc: "10% of tax due (capped at KES 1,000,000)", penaltyRate: 0.1, minPenalty: 0, maxPenalty: 1000000 },
  { value: "tot", label: "Turnover Tax (TOT)", penaltyDesc: "KES 2,000 or 5% of tax due (whichever higher)", penaltyRate: 0.05, minPenalty: 2000 },
]

// Standalone KRA penalty calculator (landing-page grade). All 6 regimes,
// 1%/month interest, amnesty savings toggle, shareable result, next-step CTA.
export function KraPenaltyCalculatorPro() {
  const [taxType, setTaxType] = useState("vat")
  const [taxDue, setTaxDue] = useState("")
  const [months, setMonths] = useState("1")
  const [showAmnesty, setShowAmnesty] = useState(false)
  const started = useRef(false)

  const due = parseFloat(taxDue.replace(/,/g, "")) || 0
  const hasInput = due > 0
  const m = parseInt(months, 10) || 1
  const regime = TAX_REGIMES.find((r) => r.value === taxType)!
  const lateFiling = regime.maxPenalty ? Math.min(due * regime.penaltyRate, regime.maxPenalty) : Math.max(due * regime.penaltyRate, regime.minPenalty)
  const interest = due * 0.01 * m
  const total = lateFiling + interest

  useEffect(() => {
    if (hasInput && !started.current) {
      started.current = true
      track("tool_start", { tool: "kra_penalty_calculator" })
    }
  }, [hasInput])

  useEffect(() => {
    if (hasInput) {
      track("tool_complete", { tool: "kra_penalty_calculator", result_value: Math.round(total) })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total > 0])

  const resultText = `My estimated KRA ${regime.label} penalty: ${formatKES(total)} (late-filing ${formatKES(lateFiling)} + interest ${formatKES(interest)}, ${m} month(s) overdue on ${formatKES(due)} principal).`

  return (
    <div className="border border-hairline rounded-xl overflow-hidden bg-canvas divide-y divide-hairline">
      <div className="p-4 sm:p-6">
        <label htmlFor="kpc-regime" className="block text-[0.8rem] font-medium text-ink-muted mb-2">Tax type</label>
        <select id="kpc-regime" value={taxType} onChange={(e) => setTaxType(e.target.value)} className="w-full text-[0.95rem] text-ink bg-canvas border border-hairline rounded-md px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-brand">
          {TAX_REGIMES.map((t) => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </select>
        <p className="text-[0.7rem] text-ink-muted mt-2">{regime.penaltyDesc}</p>
      </div>
      <div className="p-4 sm:p-6">
        <label htmlFor="kpc-due" className="block text-[0.8rem] font-medium text-ink-muted mb-2">{regime.label} - principal tax due (KES)</label>
        <input
          id="kpc-due"
          type="text"
          inputMode="decimal"
          placeholder="80,000"
          value={taxDue}
          onChange={(e) => setTaxDue(e.target.value)}
          className="w-full font-display text-[1.4rem] sm:text-[1.8rem] font-semibold text-ink bg-transparent focus:outline-none placeholder:text-ink-muted/30 placeholder:font-normal placeholder:text-2xl"
        />
      </div>
      <div className="p-4 sm:p-6">
        <label htmlFor="kpc-months" className="block text-[0.8rem] font-medium text-ink-muted mb-2">Months overdue</label>
        <input
          id="kpc-months"
          type="text"
          inputMode="numeric"
          placeholder="1"
          value={months}
          onChange={(e) => setMonths(e.target.value.replace(/[^0-9]/g, ""))}
          className="w-full font-display text-[1.4rem] sm:text-[1.8rem] font-semibold text-ink bg-transparent focus:outline-none placeholder:text-ink-muted/30 placeholder:font-normal placeholder:text-2xl"
        />
        <div className="flex flex-wrap gap-2 mt-3">
          {["1", "3", "6", "12", "24", "60"].map((v) => (
            <button key={v} type="button" onClick={() => setMonths(v)} className={`px-3.5 py-2 rounded-md text-[0.8rem] font-medium border transition-colors active:scale-[0.98] ${m === parseInt(v, 10) ? "bg-ink text-background border-ink" : "border-hairline text-ink-muted hover:border-ink-muted hover:text-ink"}`}>{v}</button>
          ))}
        </div>
        <p className="text-[0.7rem] text-ink-muted mt-2">Max 60 months. Type the exact number or tap a preset.</p>
      </div>

      {/* Impressive result panel */}
      <div className="p-4 sm:p-6 bg-canvas-alt">
        {!hasInput ? (
          <p className="text-[0.85rem] text-ink-muted flex items-center gap-2"><Info size={15} className="shrink-0" aria-hidden="true" />Enter your principal tax due and months late - the estimate builds instantly. Nothing is stored or sent.</p>
        ) : (
          <div className="space-y-4">
            <div>
              <p className="text-[0.78rem] text-ink-muted mb-1">Your estimated total penalties</p>
              <p className="font-display text-[1.7rem] sm:text-[2rem] font-bold text-brand tabular-nums leading-none">{formatKES(total)}</p>
            </div>
            <dl className="space-y-2.5 border-t border-hairline pt-4">
              <div className="flex items-baseline justify-between">
                <dt className="text-[0.8rem] text-ink-muted">Late-filing penalty<br /><span className="text-[0.65rem]">{regime.penaltyDesc}</span></dt>
                <dd className="font-mono text-[0.85rem] text-ink tabular-nums">{formatKES(lateFiling)}</dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="text-[0.8rem] text-ink-muted">Late-payment interest (1%/month &times; {m})</dt>
                <dd className="font-mono text-[0.85rem] text-ink tabular-nums">{formatKES(interest)}</dd>
              </div>
              <div className="flex items-baseline justify-between border-t border-hairline pt-3">
                <dt className="text-[0.85rem] font-semibold text-ink">Principal tax due</dt>
                <dd className="font-mono text-[0.85rem] font-semibold text-ink tabular-nums">{formatKES(due)}</dd>
              </div>
            </dl>

            <label className="flex items-center gap-3 px-3 py-2.5 rounded-md border border-hairline cursor-pointer hover:border-amber-300 transition-colors bg-canvas">
              <input type="checkbox" checked={showAmnesty} onChange={() => setShowAmnesty(!showAmnesty)} className="accent-amber-600" />
              <div>
                <p className="text-[0.8rem] font-medium text-ink">Show tax amnesty savings</p>
                <p className="text-[0.7rem] text-ink-muted">The 2026 amnesty waives 100% of penalties + interest on pre-2026 debt</p>
              </div>
            </label>
            {showAmnesty && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 space-y-2">
                <div className="flex items-baseline justify-between">
                  <p className="text-[0.8rem] text-amber-800 font-medium">You could save under the amnesty</p>
                  <p className="font-display text-[1.2rem] font-bold text-amber-700 tabular-nums">+ {formatKES(total)}</p>
                </div>
                <p className="text-[0.72rem] text-amber-700 leading-relaxed">Pay principal only ({formatKES(due)}) before 31 December 2026. Amnesty excludes taxes declared after the window opened and cases with a final agency decision - verify eligibility first.</p>
                <a href={WA_PATHS.penalty} target="_blank" rel="noopener noreferrer" data-track="wa-cta" data-cta-type="penalty-amnesty-result" data-service="penalty-waiver" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white text-[0.8rem] font-semibold px-4 py-2.5 rounded-md transition-colors">
                  Check if my penalties qualify <ArrowRight size={13} weight="bold" aria-hidden="true" />
                </a>
              </div>
            )}

            <p className="text-[0.72rem] text-ink-muted leading-relaxed flex items-start gap-1.5">
              <WarningCircle size={12} className="shrink-0 mt-0.5" aria-hidden="true" />
              Interest runs at 1%/month on unpaid principal for all regimes. KRA applies the higher-of rule per regime; waivers are discretionary and strongest when you file first, pay principal, then apply.
            </p>
            <div className="flex flex-col gap-3 pt-1">
              <a href={WA_PATHS.penalty} target="_blank" rel="noopener noreferrer" data-track="wa-cta" data-cta-type="penalty-calc-result" data-service="penalty-waiver" className="inline-flex items-center justify-center gap-2 bg-brand text-canvas text-[0.85rem] font-semibold px-5 py-3 rounded-md hover:bg-brand-hover transition-colors">
                Get this penalty waived or deferred - human help <ArrowRight size={13} weight="bold" aria-hidden="true" />
              </a>
              <ShareResult resultText={resultText} compact />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
