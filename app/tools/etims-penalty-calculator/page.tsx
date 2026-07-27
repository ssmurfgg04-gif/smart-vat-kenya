"use client"

import { useState } from "react"
import { WarningCircle, Info, ArrowRight } from "@phosphor-icons/react"

const WA_BASE = "https://wa.me/254721725958"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://smartvatkenya.co.ke/tools" },
    { "@type": "ListItem", position: 3, name: "eTIMS Penalty Calculator", item: "https://smartvatkenya.co.ke/tools/etims-penalty-calculator" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "eTIMS Penalty Calculator — What Will Non-Compliance Cost You?",
  description: "KRA imposes stiff monthly penalties for eTIMS non-compliance. Calculate your potential liability and learn how to avoid KES 500,000/month fines.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-27",
  dateModified: "2026-07-27",
  url: "https://smartvatkenya.co.ke/tools/etims-penalty-calculator",
  mainEntityOfPage: "https://smartvatkenya.co.ke/tools/etims-penalty-calculator",
}

function formatKES(n: number) {
  return "KES " + n.toLocaleString("en-KE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

const PENALTY_TYPES = [
  { value: "basic", label: "Basic Non-Compliance", monthlyPenalty: 50_000, desc: "KES 50,000 per month — failure to issue eTIMS invoices, maintain the device, or upload sales data" },
  { value: "integration", label: "System Integration Failure", monthlyPenalty: 500_000, desc: "KES 500,000 per month — failure to integrate your ERP/POS with the eTIMS system" },
]

export default function ETIMSPenaltyCalculatorPage() {
  const [penaltyType, setPenaltyType] = useState("basic")
  const [months, setMonths] = useState("3")
  const [taxOwed, setTaxOwed] = useState("")
  const [showDetails, setShowDetails] = useState(false)

  const monthsNum = parseInt(months, 10) || 0
  const taxOwedNum = parseFloat(taxOwed.replace(/,/g, "")) || 0

  const selected = PENALTY_TYPES.find((p) => p.value === penaltyType)!

  const basicPenalty = selected.monthlyPenalty * monthsNum
  const lateFiling = taxOwedNum > 0 ? Math.max(10000, taxOwedNum * 0.05) : 0
  const interest = taxOwedNum * 0.01 * monthsNum
  const total = basicPenalty + lateFiling + interest

  const selectedLabel = selected.label

  return (
    <div className="bg-canvas min-h-[100dvh]">
      <script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id="article-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="bg-[#1a2639] px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-amber-400/80 mb-4">
            KRA eTIMS — non-compliance is costly
          </p>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            eTIMS Penalty Calculator — What Will Non-Compliance Cost You?
          </h1>
          <p className="text-[0.95rem] text-canvas/70 max-w-[60ch] leading-relaxed">
            KRA imposes stiff monthly penalties for eTIMS non-compliance — from KES 50,000 for basic
            non-compliance to KES 500,000 for system integration failure. Add late VAT filing penalties
            and interest, and the numbers add up fast.
          </p>
          <p className="text-[0.78rem] text-canvas/50 mt-4">Smart VAT Kenya &mdash; Updated July 2026</p>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-6 lg:px-10 py-16">
        <section aria-labelledby="etims-penalty-heading">
          <div className="flex items-center gap-2.5 mb-6">
            <WarningCircle size={17} weight="duotone" className="text-brand" aria-hidden="true" />
            <h2 id="etims-penalty-heading" className="font-display text-[1rem] font-semibold text-ink">
              eTIMS Penalty Calculator
            </h2>
          </div>

          <div className="border border-hairline rounded-lg overflow-hidden divide-y divide-hairline">
            <div className="p-5">
              <label htmlFor="penalty-type" className="block text-[0.78rem] font-medium text-ink-muted mb-2">
                Type of eTIMS Non-Compliance
              </label>
              <select
                id="penalty-type"
                value={penaltyType}
                onChange={(e) => setPenaltyType(e.target.value)}
                className="w-full text-[0.95rem] text-ink bg-transparent border border-hairline rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-brand"
              >
                {PENALTY_TYPES.map((p) => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>
              <p className="text-[0.7rem] text-ink-muted mt-1.5">{selected.desc}</p>
            </div>

            <div className="p-5">
              <label htmlFor="months" className="flex items-baseline justify-between text-[0.78rem] font-medium text-ink-muted mb-3">
                <span>Months of non-compliance</span>
                <span className="font-display text-[1rem] font-semibold text-ink tabular-nums">{monthsNum}</span>
              </label>
              <input id="months" type="range" min="1" max="60" value={months} onChange={(e) => setMonths(e.target.value)} className="w-full accent-brand" />
              <div className="flex justify-between text-[0.7rem] text-ink-muted mt-1.5"><span>1 month</span><span>60 months</span></div>
            </div>

            <div className="p-5">
              <label htmlFor="tax-owed" className="block text-[0.78rem] font-medium text-ink-muted mb-2">
                VAT owed for the period (KES) <span className="text-ink-muted/60">— optional, for late-filing penalty</span>
              </label>
              <input
                id="tax-owed"
                type="text"
                inputMode="decimal"
                placeholder="200,000"
                value={taxOwed}
                onChange={(e) => setTaxOwed(e.target.value)}
                className="w-full font-display text-[1.6rem] font-semibold text-ink bg-transparent focus:outline-none placeholder:text-ink-muted/30 placeholder:font-normal placeholder:text-xl"
              />
              <p className="text-[0.7rem] text-ink-muted mt-1">Enter the VAT amount you failed to declare. Leave blank to calculate eTIMS penalties only.</p>
            </div>

            <div className="p-5 bg-canvas-alt space-y-3">
              <div className="flex items-baseline justify-between">
                <dt className="text-[0.78rem] text-ink-muted">Non-compliance type</dt>
                <dd className="text-[0.88rem] text-ink">{selectedLabel}</dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="text-[0.78rem] text-ink-muted">Duration</dt>
                <dd className="text-[0.88rem] text-ink">{monthsNum} month{monthsNum !== 1 ? "s" : ""}</dd>
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
                    <dt className="text-[0.75rem] text-ink-muted">eTIMS non-compliance penalty ({monthsNum} month{monthsNum !== 1 ? "s" : ""} &times; {formatKES(selected.monthlyPenalty)}/mo)</dt>
                    <dd className="font-mono text-[0.82rem] text-ink-muted tabular-nums">{formatKES(basicPenalty)}</dd>
                  </div>
                  {taxOwedNum > 0 && (
                    <>
                      <div className="flex items-baseline justify-between">
                        <dt className="text-[0.75rem] text-ink-muted">Late VAT filing penalty (KES 10,000 or 5% of tax)</dt>
                        <dd className="font-mono text-[0.82rem] text-ink-muted tabular-nums">{formatKES(lateFiling)}</dd>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <dt className="text-[0.75rem] text-ink-muted">Interest (1%/month &times; {monthsNum} months)</dt>
                        <dd className="font-mono text-[0.82rem] text-ink-muted tabular-nums">{formatKES(interest)}</dd>
                      </div>
                    </>
                  )}
                  <div className="flex items-baseline justify-between">
                    <dt className="text-[0.75rem] text-ink-muted font-medium">Total monthly eTIMS penalty</dt>
                    <dd className="font-mono text-[0.85rem] text-brand tabular-nums font-medium">{formatKES(selected.monthlyPenalty)}/month</dd>
                  </div>
                </div>
              )}

              <hr className="border-hairline" />

              <div className="flex items-baseline justify-between">
                <dt className="text-[0.78rem] text-ink">eTIMS non-compliance penalty</dt>
                <dd className="font-mono text-[0.88rem] text-ink tabular-nums">{formatKES(basicPenalty)}</dd>
              </div>
              {taxOwedNum > 0 && (
                <>
                  <div className="flex items-baseline justify-between">
                    <dt className="text-[0.78rem] text-ink-muted">Late filing penalty</dt>
                    <dd className="font-mono text-[0.88rem] text-ink-muted tabular-nums">{formatKES(lateFiling)}</dd>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <dt className="text-[0.78rem] text-ink-muted">Interest (1%/month)</dt>
                    <dd className="font-mono text-[0.88rem] text-ink-muted tabular-nums">{formatKES(interest)}</dd>
                  </div>
                </>
              )}

              <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-4 space-y-2">
                <div className="flex items-baseline justify-between">
                  <dt className="text-[0.82rem] font-semibold text-red-800 dark:text-red-300">Estimated total penalties + interest</dt>
                  <dd className="font-display text-[1.4rem] font-bold text-red-700 dark:text-red-300 tabular-nums">{formatKES(total)}</dd>
                </div>
                <p className="text-[0.72rem] text-red-600 dark:text-red-500">
                  This is {taxOwedNum > 0 ? "the total of eTIMS non-compliance penalties, late-filing penalties, and accrued interest." : "the total eTIMS non-compliance penalty alone. Enter VAT owed to include late-filing and interest."}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 rounded-lg border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40">
            <p className="text-[0.78rem] text-amber-800 dark:text-amber-300 font-medium mb-1">Why This Matters</p>
            <ul className="text-[0.72rem] text-amber-700 dark:text-amber-400 space-y-1 list-disc pl-4">
              <li>eTIMS non-compliance penalties are separate from late VAT filing penalties — KRA can charge both</li>
              <li>Penalties accrue monthly and do not cap out; 12 months of basic non-compliance = KES 600,000</li>
              <li>Integration failure penalties (KES 500,000/mo) apply if your ERP/POS is not linked to eTIMS</li>
              <li>KRA is conducting physical compliance visits — non-compliant businesses face immediate sanctions</li>
              {taxOwedNum > 0 && <li>Interest continues accruing at 1%/month until the principal tax is fully paid</li>}
            </ul>
          </div>

          <div className="mt-5">
            <a
              href={`${WA_BASE}?text=${encodeURIComponent(`Hi, I used the eTIMS Penalty Calculator. I'm facing ${selectedLabel} (${monthsNum} months) with estimated penalties of KES ${Math.round(total).toLocaleString()}. Can you help me resolve my eTIMS compliance issues?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill inline-flex items-center justify-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
            >
              Need help with eTIMS compliance? Let us handle it. Chat on WhatsApp.
              <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="font-display text-[1.1rem] font-semibold text-ink">How to Avoid eTIMS Penalties</h2>
          <p className="text-[0.85rem] text-ink-muted leading-relaxed">
            The best way to avoid eTIMS penalties is to onboard within 30 days of VAT registration and maintain
            daily compliance. Most penalties result from delayed onboarding (the KES 500,000/month integration
            penalty applies if your POS or ERP system is not linked to eTIMS), failure to train staff, and
            gaps in the invoice sequence that KRA flags during reconciliation.
          </p>
          <p className="text-[0.85rem] text-ink-muted leading-relaxed">
            If you already have outstanding penalties, the KRA tax amnesty programme may apply — penalties on
            pre-2026 tax debts are eligible for 100% waiver if you pay the principal by December 31, 2026.
            Post-2025 penalties are not covered and must be settled or separately appealed.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="/resources/etims-compliance-checklist" className="inline-flex items-center gap-1.5 text-[0.82rem] font-medium text-brand hover:underline underline-offset-4">
              Full eTIMS compliance guide <ArrowRight size={12} weight="bold" />
            </a>
            <a href="/resources/etims-penalty-50000-per-month-kenya" className="inline-flex items-center gap-1.5 text-[0.82rem] font-medium text-brand hover:underline underline-offset-4">
              eTIMS penalty reference <ArrowRight size={12} weight="bold" />
            </a>
          </div>
        </section>

        <div className="mt-8 border-t border-hairline pt-8 text-[0.7rem] text-ink-muted leading-relaxed">
          <p>
            Disclaimer: This calculator provides estimates based on the Tax Procedures Act and KRA eTIMS regulations.
            Actual penalties depend on the specific nature of non-compliance, KRA discretion, and any penalty waiver
            or amnesty programmes in effect. This tool does not constitute legal or tax advice. Consult a
            KRA-registered tax agent for your specific situation. For official guidance, visit the KRA eTIMS portal
            at etims.kra.go.ke.
          </p>
        </div>
      </div>
    </div>
  )
}
