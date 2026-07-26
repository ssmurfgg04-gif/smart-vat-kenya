"use client"

import { useState } from "react"
import { ArrowsLeftRight, ArrowRight } from "@phosphor-icons/react"

const WA_BASE = "https://wa.me/254721725958"

function formatKES(n: number) {
  return "KES " + n.toLocaleString("en-KE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

function formatK(n: number) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M"
  if (n >= 1_000) return (n / 1_000).toFixed() + "K"
  return n.toString()
}

export default function VATvsTOTPage() {
  const [turnover, setTurnover] = useState("")
  const turnoverNum = parseFloat(turnover.replace(/,/g, "")) || 0

  const vatRegistered = turnoverNum > 5_000_000
  const totEligible = turnoverNum >= 1_000_000 && turnoverNum <= 50_000_000

  const totRate = 0.03
  const totGross = turnoverNum * totRate

  const vatOutput = turnoverNum * 0.16
  const vatInput = turnoverNum * 0.80 * 0.16
  const vatNet = vatOutput - vatInput

  return (
    <div className="bg-canvas min-h-[100dvh]">
      <div className="bg-canvas-dark px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-canvas/60 mb-4">
            Free tool — no sign-up required
          </p>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            VAT vs Turnover Tax (TOT) — Which is Right for Your Business?
          </h1>
          <p className="text-[0.95rem] text-canvas/70 max-w-[60ch] leading-relaxed">
            Compare your effective tax burden under VAT and Turnover Tax regimes based on your annual turnover.
            Choose the regime that saves you the most.
          </p>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-6 lg:px-10 py-16">
        <section aria-labelledby="comparator-heading">
          <div className="flex items-center gap-2.5 mb-6">
            <ArrowsLeftRight size={17} weight="duotone" className="text-brand" aria-hidden="true" />
            <h2 id="comparator-heading" className="font-display text-[1rem] font-semibold text-ink">
              VAT vs TOT — Cost Comparison
            </h2>
          </div>

          <div className="border border-hairline rounded-lg overflow-hidden divide-y divide-hairline">
            <div className="p-5">
              <label htmlFor="turnover" className="block text-[0.78rem] font-medium text-ink-muted mb-2">
                Annual Turnover (KES)
              </label>
              <input
                id="turnover"
                type="text"
                inputMode="decimal"
                placeholder="5,000,000"
                value={turnover}
                onChange={(e) => setTurnover(e.target.value)}
                className="w-full font-display text-[1.6rem] font-semibold text-ink bg-transparent focus:outline-none placeholder:text-ink-muted/30 placeholder:font-normal placeholder:text-xl"
              />
            </div>

            {turnoverNum > 0 && (
              <div className="space-y-4 p-5 bg-canvas-alt">
                <div>
                  <p className="text-[0.82rem] font-semibold text-ink mb-3">Turnover Tax (TOT) — 3% of gross sales</p>
                  <div className="flex items-baseline justify-between">
                    <dt className="text-[0.78rem] text-ink-muted">Monthly remittance</dt>
                    <dd className="font-mono text-[0.88rem] text-ink tabular-nums">{formatKES(totGross / 12)}</dd>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <dt className="text-[0.78rem] text-ink-muted">Annual cost</dt>
                    <dd className="font-display text-[1.1rem] font-semibold text-ink tabular-nums">{formatKES(totGross)}</dd>
                  </div>
                </div>

                <hr className="border-hairline" />

                <div>
                  <p className="text-[0.82rem] font-semibold text-ink mb-3">VAT Regime — 16% output, ~80% input claim</p>
                  <div className="flex items-baseline justify-between">
                    <dt className="text-[0.78rem] text-ink-muted">Output VAT (16% of sales)</dt>
                    <dd className="font-mono text-[0.88rem] text-ink-muted tabular-nums">{formatKES(vatOutput)}</dd>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <dt className="text-[0.78rem] text-ink-muted">Input VAT (80% of costs with VAT)</dt>
                    <dd className="font-mono text-[0.88rem] text-ink-muted tabular-nums">- {formatKES(vatInput)}</dd>
                  </div>
                  <div className="flex items-baseline justify-between pt-2 border-t border-hairline">
                    <dt className="text-[0.78rem] text-ink-muted">Net VAT payable</dt>
                    <dd className="font-mono text-[0.88rem] text-brand tabular-nums">{formatKES(vatNet)}</dd>
                  </div>
                </div>

                <hr className="border-hairline" />

                <div>
                  <p className="text-[0.82rem] font-semibold text-ink mb-1">Which regime saves more?</p>
                  <p className="text-[0.78rem] text-ink-muted mb-3">
                    {vatNet < totGross
                      ? "VAT is cheaper — but requires monthly filings and KRA audits."
                      : "TOT is cheaper — simpler filing, lower compliance cost."}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-canvas py-2 px-3 rounded text-center">
                      <p className="text-[0.65rem] text-ink-muted uppercase tracking-wider">TOT Cost</p>
                      <p className={`font-display text-[1rem] font-semibold tabular-nums ${vatNet < totGross ? "text-ink" : "text-green-600 dark:text-green-400"}`}>
                        {formatKES(totGross)}
                      </p>
                    </div>
                    <div className="text-ink-muted text-sm">vs</div>
                    <div className="flex-1 bg-canvas py-2 px-3 rounded text-center">
                      <p className="text-[0.65rem] text-ink-muted uppercase tracking-wider">VAT Net</p>
                      <p className={`font-display text-[1rem] font-semibold tabular-nums ${vatNet < totGross ? "text-green-600 dark:text-green-400" : "text-ink"}`}>
                        {formatKES(vatNet)}
                      </p>
                    </div>
                  </div>
                  <p className="text-[0.72rem] text-ink-muted mt-3">
                    {turnoverNum > 5000000 ? (
                      <span>Turnover exceeds KES 5M — VAT registration is mandatory unless you qualify for a waiver.</span>
                    ) : turnoverNum < 1000000 ? (
                      <span>Turnover below KES 1M — TOT is optional. You may not need to file any turnover tax.</span>
                    ) : (
                      <span>Turnover: {formatK(turnoverNum)} — you are eligible for TOT. Both regimes are available.</span>
                    )}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-5 flex flex-col gap-3">
            <a
              href={`${WA_BASE}?text=Hi%2C%20I%20used%20the%20VAT%20vs%20TOT%20comparator%20and%20need%20help%20choosing%20the%20right%20tax%20regime%20for%20my%20business.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill inline-flex items-center justify-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-3 rounded-md hover:bg-brand-hover transition-colors self-start"
            >
              Not sure which regime fits? Let a tax expert review your books. Chat on WhatsApp.
              <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </section>

        <div className="mt-12 border-t border-hairline pt-8 text-[0.7rem] text-ink-muted leading-relaxed">
          <p>
            Disclaimer: This comparison is for informational purposes and shows estimated effective tax costs.
            It assumes 80% of turnover goes to VAT-able expenses with full input credit. Actual input credit and
            compliance costs vary. TOT replaces income tax but not VAT — businesses above KES 5M turnover must
            register for VAT regardless. Consult a KRA-registered tax agent for your specific situation.
          </p>
        </div>
      </div>
    </div>
  )
}
