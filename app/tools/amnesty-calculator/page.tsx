"use client"

import { useState, useEffect } from "react"
import { Clock, ArrowRight, Info } from "@phosphor-icons/react"

const WA_BASE = "https://wa.me/254721725958"

const AMNESTY_DEADLINE = new Date("2026-12-31T23:59:59+03:00")

function formatKES(n: number) {
  return "KES " + n.toLocaleString("en-KE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

function calcPenalties(principal: number, months: number, taxType: string) {
  let lateFiling: number
  const interest = principal * 0.01 * months

  switch (taxType) {
    case "income-individual":
      lateFiling = Math.max(2000, principal * 0.05)
      break
    case "income-company":
      lateFiling = Math.max(20000, principal * 0.05)
      break
    case "vat":
      lateFiling = Math.max(10000, principal * 0.05)
      break
    case "paye":
      lateFiling = Math.max(10000, principal * 0.25)
      break
    case "wht":
      lateFiling = Math.min(principal * 0.10, 1000000)
      break
    case "tot":
      lateFiling = Math.max(2000, principal * 0.05)
      break
    default:
      lateFiling = Math.max(2000, principal * 0.05)
  }

  return { lateFiling, interest, totalPenalties: lateFiling + interest }
}

const TAX_TYPES = [
  { value: "vat", label: "VAT" },
  { value: "paye", label: "PAYE" },
  { value: "income-individual", label: "Individual Income Tax" },
  { value: "income-company", label: "Company Income Tax (CIT)" },
  { value: "wht", label: "Withholding Tax (WHT)" },
  { value: "tot", label: "Turnover Tax (TOT)" },
]

export default function AmnestyCalculatorPage() {
  const [principal, setPrincipal] = useState("")
  const [taxType, setTaxType] = useState("vat")
  const [months, setMonths] = useState("6")
  const [showDetails, setShowDetails] = useState(false)

  const principalNum = parseFloat(principal.replace(/,/g, "")) || 0
  const monthsNum = parseInt(months, 10) || 0

  const { lateFiling, interest, totalPenalties } = calcPenalties(principalNum, monthsNum, taxType)
  const totalWithoutAmnesty = principalNum + totalPenalties
  const amnestySaving = totalPenalties
  const amnestyTotal = principalNum

  const [timeLeft, setTimeLeft] = useState("")
  useEffect(() => {
    function tick() {
      const now = new Date()
      const diff = AMNESTY_DEADLINE.getTime() - now.getTime()
      if (diff <= 0) { setTimeLeft("Amnesty has ended"); return }
      const d = Math.floor(diff / 86400000)
      const h = Math.floor((diff % 86400000) / 3600000)
      const m = Math.floor((diff % 3600000) / 60000)
      setTimeLeft(`${d}d ${h}h ${m}m`)
    }
    tick()
    const id = setInterval(tick, 60000)
    return () => clearInterval(id)
  }, [])

  const selectedLabel = TAX_TYPES.find((t) => t.value === taxType)?.label || ""

  return (
    <div className="bg-canvas min-h-[100dvh]">
      <div className="bg-[#1a2639] px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-amber-400/80 mb-4">
            Time-sensitive — amnesty ends December 31, 2026
          </p>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            KRA Tax Amnesty Savings Calculator — How Much Could You Save?
          </h1>
          <p className="text-[0.95rem] text-canvas/70 max-w-[60ch] leading-relaxed">
            The KRA tax amnesty waives 100% of penalties, interest, and fines on pre-2026 tax debts.
            Find out how much you could save before the December 31, 2026 deadline.
          </p>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-6 lg:px-10 py-16">
        {/* Countdown */}
        <div className="flex items-center gap-3 mb-8 p-4 rounded-lg border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40">
          <Clock size={20} weight="duotone" className="text-amber-600 shrink-0" aria-hidden="true" />
          <div>
            <p className="text-[0.78rem] font-semibold text-amber-800 dark:text-amber-300">
              Amnesty deadline: December 31, 2026
            </p>
            <p className="font-display text-[1.2rem] font-bold text-amber-900 dark:text-amber-200 tabular-nums">
              {timeLeft}
            </p>
          </div>
        </div>

        <section aria-labelledby="amnesty-heading">
          <div className="flex items-center gap-2.5 mb-6">
            <Clock size={17} weight="duotone" className="text-brand" aria-hidden="true" />
            <h2 id="amnesty-heading" className="font-display text-[1rem] font-semibold text-ink">
              Amnesty Savings Calculator
            </h2>
          </div>

          <div className="border border-hairline rounded-lg overflow-hidden divide-y divide-hairline">
            <div className="p-5">
              <label htmlFor="tax-type" className="block text-[0.78rem] font-medium text-ink-muted mb-2">
                Tax Type
              </label>
              <select
                id="tax-type"
                value={taxType}
                onChange={(e) => setTaxType(e.target.value)}
                className="w-full text-[0.95rem] text-ink bg-transparent border border-hairline rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-brand"
              >
                {TAX_TYPES.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>

            <div className="p-5">
              <label htmlFor="principal" className="block text-[0.78rem] font-medium text-ink-muted mb-2">
                Outstanding Principal Tax (KES) — pre-2026 debt
              </label>
              <input
                id="principal"
                type="text"
                inputMode="decimal"
                placeholder="500,000"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                className="w-full font-display text-[1.6rem] font-semibold text-ink bg-transparent focus:outline-none placeholder:text-ink-muted/30 placeholder:font-normal placeholder:text-xl"
              />
              <p className="text-[0.7rem] text-ink-muted mt-1">Only debt accrued before January 1, 2026 qualifies.</p>
            </div>

            <div className="p-5">
              <label htmlFor="months" className="flex items-baseline justify-between text-[0.78rem] font-medium text-ink-muted mb-3">
                <span>Months overdue</span>
                <span className="font-display text-[1rem] font-semibold text-ink tabular-nums">{monthsNum}</span>
              </label>
              <input id="months" type="range" min="1" max="60" value={months} onChange={(e) => setMonths(e.target.value)} className="w-full accent-brand" />
              <div className="flex justify-between text-[0.7rem] text-ink-muted mt-1.5"><span>1 month</span><span>60 months</span></div>
            </div>

            {principalNum > 0 && (
              <div className="p-5 bg-canvas-alt space-y-3">
                <div className="flex items-baseline justify-between">
                  <dt className="text-[0.78rem] text-ink-muted">Tax type</dt>
                  <dd className="text-[0.88rem] text-ink">{selectedLabel}</dd>
                </div>
                <div className="flex items-baseline justify-between">
                  <dt className="text-[0.78rem] text-ink-muted">Principal tax owed</dt>
                  <dd className="font-mono text-[0.88rem] text-ink tabular-nums">{formatKES(principalNum)}</dd>
                </div>

                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex items-center gap-1.5 text-[0.78rem] text-ink-muted hover:text-ink transition-colors"
                >
                  <Info size={12} aria-hidden="true" />
                  {showDetails ? "Hide" : "Show"} penalty breakdown
                </button>

                {showDetails && (
                  <div className="space-y-2 pl-2 border-l-2 border-hairline">
                    <div className="flex items-baseline justify-between">
                      <dt className="text-[0.75rem] text-ink-muted">Late filing penalty</dt>
                      <dd className="font-mono text-[0.82rem] text-ink-muted tabular-nums">{formatKES(lateFiling)}</dd>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <dt className="text-[0.75rem] text-ink-muted">Interest (1%/month × {monthsNum} months)</dt>
                      <dd className="font-mono text-[0.82rem] text-ink-muted tabular-nums">{formatKES(interest)}</dd>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <dt className="text-[0.75rem] text-ink-muted font-medium">Total penalties + interest</dt>
                      <dd className="font-mono text-[0.85rem] text-brand tabular-nums font-medium">{formatKES(totalPenalties)}</dd>
                    </div>
                  </div>
                )}

                <hr className="border-hairline" />

                {/* Without amnesty */}
                <div>
                  <p className="text-[0.78rem] font-medium text-ink-muted mb-2">Without Amnesty</p>
                  <div className="flex items-baseline justify-between">
                    <dt className="text-[0.78rem] text-ink">You would pay</dt>
                    <dd className="font-display text-[1.1rem] font-semibold text-ink tabular-nums">{formatKES(totalWithoutAmnesty)}</dd>
                  </div>
                </div>

                {/* With amnesty */}
                <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-4 space-y-2">
                  <p className="text-[0.78rem] font-medium text-green-700 dark:text-green-400">With Amnesty (pay principal by Dec 31)</p>
                  <div className="flex items-baseline justify-between">
                    <dt className="text-[0.78rem] text-green-700 dark:text-green-400">You pay only</dt>
                    <dd className="font-display text-[1.25rem] font-bold text-green-700 dark:text-green-400 tabular-nums">{formatKES(amnestyTotal)}</dd>
                  </div>
                  <div className="flex items-baseline justify-between pt-1 border-t border-green-200 dark:border-green-800">
                    <dt className="text-[0.82rem] font-semibold text-green-800 dark:text-green-300">Your savings</dt>
                    <dd className="font-display text-[1.4rem] font-bold text-green-700 dark:text-green-300 tabular-nums">
                      + {formatKES(amnestySaving)}
                    </dd>
                  </div>
                  <p className="text-[0.72rem] text-green-600 dark:text-green-500">
                    That is {totalWithoutAmnesty > 0 ? Math.round((amnestySaving / totalWithoutAmnesty) * 100) : 0}% less than the total without amnesty.
                  </p>
                </div>
              </div>
            )}
          </div>

          {principalNum > 0 && (
            <div className="mt-4 p-4 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/40">
              <p className="text-[0.78rem] text-blue-800 dark:text-blue-300 font-medium mb-1">Amnesty Conditions</p>
              <ul className="text-[0.72rem] text-blue-700 dark:text-blue-400 space-y-1 list-disc pl-4">
                <li>Debt must have accrued before January 1, 2026</li>
                <li>Principal must be paid in full by December 31, 2026</li>
                <li>You must not accumulate new tax debts during repayment</li>
                <li>Tax avoidance penalties (Section 85) are excluded</li>
                <li>Can&apos;t pay in full? KRA offers payment plans on iTax</li>
              </ul>
            </div>
          )}

          <div className="mt-5">
            <a
              href={`${WA_BASE}?text=${encodeURIComponent(`Hi, I used the KRA amnesty calculator. I have ${selectedLabel} principal of KES ${Math.round(principalNum).toLocaleString()} and could save KES ${Math.round(amnestySaving).toLocaleString()} under amnesty. Can you help me apply before the Dec 31 deadline?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill inline-flex items-center justify-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
            >
              Need help applying for amnesty? Let us handle it. Chat on WhatsApp.
              <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </section>

        <div className="mt-12 border-t border-hairline pt-8 text-[0.7rem] text-ink-muted leading-relaxed">
          <p>
            Disclaimer: This calculator provides estimates based on the Finance Act 2026 amnesty provisions (Section 37E, Tax Procedures Act).
            Actual savings depend on your specific tax ledger, whether penalties are from pre-2026 periods, and KRA verification.
            Amnesty applies only to penalties and interest on debt accrued before January 1, 2026. Post-2025 debt is not covered.
            Consult a registered tax agent for your specific situation. For official guidance, visit the KRA iTax portal or
            the KRA 2026 Tax Amnesty Programme page.
          </p>
        </div>
      </div>
    </div>
  )
}
