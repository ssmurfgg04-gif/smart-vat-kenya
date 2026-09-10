"use client"

import { useState } from "react"
import { Calculator, WarningCircle, Info, ArrowRight } from "@phosphor-icons/react/dist/ssr"

function fmt(n: number) {
  return "KES " + Math.round(n).toLocaleString("en-KE")
}

const SAMPLES = [10000, 50000, 100000, 250000, 500000]

export default function YouTubeTaxCalculator() {
  const [amount, setAmount] = useState("")
  const base = parseFloat(amount.replace(/,/g, "")) || 0

  const withheldMonthly = base * 0.05
  const netMonthly = base - withheldMonthly
  const withheldAnnual = withheldMonthly * 12
  const grossAnnual = base * 12
  const netAnnual = netMonthly * 12

  return (
    <div className="bg-canvas min-h-[100dvh]">
      <div className="bg-canvas-dark px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-canvas/60 mb-4">Free tool - no sign-up required</p>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            YouTube Tax Calculator Kenya - What the 5% Withholding Costs You
          </h1>
          <p className="text-[0.95rem] text-canvas/70 max-w-[60ch] leading-relaxed">
            Google is withholding 5% of Kenyan creators&apos; AdSense earnings starting with September 2026 earnings (paid October).
            Enter your monthly earnings to see exactly what lands in your account - and what it adds up to over a year.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 gap-4 lg:gap-10 items-start">
          {/* Input panel */}
          <section aria-labelledby="yt-calc-heading">
            <div className="flex items-center gap-2.5 mb-6">
              <Calculator size={17} weight="duotone" className="text-brand" aria-hidden="true" />
              <h2 id="yt-calc-heading" className="font-display text-[0.88rem] sm:text-[1rem] font-semibold text-ink">Your Monthly AdSense Earnings (KES)</h2>
            </div>
            <div className="border border-hairline rounded-lg overflow-hidden divide-y divide-hairline bg-canvas">
              <div className="p-3 sm:p-5">
                <label htmlFor="yt-amount" className="block text-[0.78rem] font-medium text-ink-muted mb-2">Gross monthly earnings, before the 5%</label>
                <input
                  id="yt-amount"
                  type="text"
                  inputMode="decimal"
                  placeholder="100,000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  aria-describedby="yt-amount-help"
                  className="w-full font-display text-[1.25rem] sm:text-[1.6rem] font-semibold text-ink bg-transparent focus:outline-none placeholder:text-ink-muted/30 placeholder:font-normal placeholder:text-xl"
                />
                <p id="yt-amount-help" className="text-[0.72rem] text-ink-muted/70 mt-2">Gross = what YouTube reports you earned, before withholding.</p>
              </div>
              <div className="p-3 sm:p-5">
                <p className="text-[0.78rem] font-medium text-ink-muted mb-3">Quick presets</p>
                <div className="flex flex-wrap gap-2">
                  {SAMPLES.map((s) => (
                    <button
                      key={s}
                      onClick={() => setAmount(s.toLocaleString("en-KE"))}
                      className={`px-3 py-1.5 rounded-md text-[0.78rem] font-medium border transition-colors active:scale-[0.98] min-h-[36px] ${amount === s.toLocaleString("en-KE") ? "bg-ink text-canvas border-ink" : "border-hairline text-ink-muted hover:border-ink-muted hover:text-ink"}`}
                    >
                      {s.toLocaleString("en-KE")}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
              <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-[0.78rem] text-ink-muted leading-relaxed">
                The 5% is a <strong className="text-ink">withholding</strong>, not an extra tax: it credits against your final income tax bill.
                And remember the hard deadline - <strong className="text-ink">KRA PIN on file by 1 October 2026, or payments are held entirely.</strong>
              </p>
            </div>
          </section>

          {/* Results panel */}
          <section aria-labelledby="yt-result-heading">
            <div className="flex items-center gap-2.5 mb-6">
              <WarningCircle size={17} weight="duotone" className="text-brand" aria-hidden="true" />
              <h2 id="yt-result-heading" className="font-display text-[0.88rem] sm:text-[1rem] font-semibold text-ink">Your Numbers</h2>
            </div>
            <div className="border border-hairline rounded-lg overflow-hidden divide-y divide-hairline bg-canvas" aria-live="polite">
              <div className="p-3 sm:p-5 flex items-baseline justify-between gap-4">
                <p className="text-[0.78rem] text-ink-muted">Withheld this month (5%)</p>
                <p className={`font-display text-[1.15rem] sm:text-[1.45rem] font-semibold ${base > 0 ? "text-amber-700 dark:text-amber-400" : "text-ink-muted/40"}`}>
                  &minus; {base > 0 ? fmt(withheldMonthly) : "KES 0"}
                </p>
              </div>
              <div className="p-3 sm:p-5 flex items-baseline justify-between gap-4 bg-brand-muted/40">
                <p className="text-[0.78rem] font-medium text-ink">You receive this month</p>
                <p className={`font-display text-[1.15rem] sm:text-[1.45rem] font-semibold ${base > 0 ? "text-ink" : "text-ink-muted/40"}`}>
                  {base > 0 ? fmt(netMonthly) : "KES 0"}
                </p>
              </div>
              <div className="p-3 sm:p-5 flex items-baseline justify-between gap-4">
                <p className="text-[0.78rem] text-ink-muted">Withheld per year (12 months)</p>
                <p className={`font-display text-[1rem] sm:text-[1.2rem] font-semibold ${base > 0 ? "text-amber-700 dark:text-amber-400" : "text-ink-muted/40"}`}>
                  {base > 0 ? fmt(withheldAnnual) : "KES 0"}
                </p>
              </div>
              <div className="p-3 sm:p-5 flex items-baseline justify-between gap-4">
                <p className="text-[0.78rem] text-ink-muted">Gross per year</p>
                <p className={`font-display text-[1rem] sm:text-[1.2rem] font-medium ${base > 0 ? "text-ink" : "text-ink-muted/40"}`}>
                  {base > 0 ? fmt(grossAnnual) : "KES 0"}
                </p>
              </div>
              <div className="p-3 sm:p-5 flex items-baseline justify-between gap-4">
                <p className="text-[0.78rem] text-ink-muted">Net per year (after 5%)</p>
                <p className={`font-display text-[1rem] sm:text-[1.2rem] font-medium ${base > 0 ? "text-ink" : "text-ink-muted/40"}`}>
                  {base > 0 ? fmt(netAnnual) : "KES 0"}
                </p>
              </div>
            </div>

            <div className="mt-4 border border-brand/20 bg-brand-muted rounded-lg p-4">
              <p className="font-semibold text-ink text-[0.85rem] mb-1.5">Want the full picture?</p>
              <p className="text-[0.78rem] text-ink-muted leading-relaxed mb-3">
                The 5% credits against income tax, and your channel costs (gear, editing, data) are deductible with eTIMS receipts. Read the full breakdown in the guide.
              </p>
              <a
                href="/resources/youtube-5-percent-tax-kenya/"
                className="inline-flex items-center gap-2 text-[0.82rem] font-semibold text-brand underline underline-offset-2 hover:text-brand-hover min-h-[44px]"
              >
                YouTube 5% Tax: Full Guide
                <ArrowRight size={12} weight="bold" aria-hidden="true" />
              </a>
            </div>
          </section>
        </div>

        {/* Context strip */}
        <section className="mt-14 border-t border-hairline pt-12" aria-labelledby="yt-context-heading">
          <h2 id="yt-context-heading" className="font-display text-[1rem] font-semibold text-ink mb-6">The Two Deadlines That Matter</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border border-hairline rounded-lg p-5 bg-canvas">
              <p className="font-display text-[0.95rem] font-semibold text-ink mb-1">1 October 2026 - KRA PIN deadline</p>
              <p className="text-[0.82rem] text-ink-muted leading-relaxed mb-3">
                No valid KRA PIN on your AdSense tax settings by this date means payments are held entirely. A PIN application takes about 15 minutes online if you do not have one.
              </p>
              <a href="/resources/how-to-apply-for-kra-pin/" className="inline-flex items-center gap-2 text-[0.82rem] font-medium text-brand underline underline-offset-2 hover:text-brand-hover min-h-[44px]">
                Get a KRA PIN in 15 minutes
                <ArrowRight size={12} weight="bold" aria-hidden="true" />
              </a>
            </div>
            <div className="border border-hairline rounded-lg p-5 bg-canvas">
              <p className="font-display text-[0.95rem] font-semibold text-ink mb-1">October payout - first reduced payment</p>
              <p className="text-[0.82rem] text-ink-muted leading-relaxed mb-3">
                September earnings paid in October are the first to carry the 5%. Budget for the reduced figure now rather than discovering it in your bank statement.
              </p>
              <a href="/resources/youtube-5-percent-tax-kenya/" className="inline-flex items-center gap-2 text-[0.82rem] font-medium text-brand underline underline-offset-2 hover:text-brand-hover min-h-[44px]">
                See the announcement breakdown
                <ArrowRight size={12} weight="bold" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
