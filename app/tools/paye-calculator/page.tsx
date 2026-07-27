"use client"

import { useState } from "react"
import { Calculator, Info, ArrowRight } from "@phosphor-icons/react"

const WA_BASE = "https://wa.me/254721725958"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://smartvatkenya.co.ke/tools" },
    { "@type": "ListItem", position: 3, name: "PAYE Calculator", item: "https://smartvatkenya.co.ke/tools/paye-calculator" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Kenya PAYE Calculator 2026 — Net Salary After Tax",
  description: "Calculate your monthly PAYE, NSSF, SHIF, Housing Levy, and take-home pay using current KRA tax bands. Updated for 2026.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-27",
  dateModified: "2026-07-27",
  url: "https://smartvatkenya.co.ke/tools/paye-calculator",
  mainEntityOfPage: "https://smartvatkenya.co.ke/tools/paye-calculator",
}

function formatKES(n: number) {
  return "KES " + n.toLocaleString("en-KE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

const NSSF_TIER_I = 8000 * 0.06
const NSSF_TIER_II_MAX = 72000 * 0.06
const SHIF_RATE = 0.0275
const HOUSING_LEVY_RATE = 0.015
const PERSONAL_RELIEF = 2400

const PAYE_BANDS = [
  { upTo: 24000, rate: 0.10 },
  { upTo: 32333, rate: 0.25 },
  { upTo: 500000, rate: 0.30 },
  { upTo: 800000, rate: 0.325 },
]

function calcPAYE(taxable: number) {
  let tax = 0
  let prev = 0
  for (const band of PAYE_BANDS) {
    if (taxable > prev) {
      const slice = Math.min(taxable, band.upTo) - prev
      tax += slice * band.rate
    }
    prev = band.upTo
  }
  if (taxable > 800000) tax += (taxable - 800000) * 0.35
  return Math.max(0, tax - PERSONAL_RELIEF)
}

export default function PAYECalculatorPage() {
  const [gross, setGross] = useState("")
  const grossNum = parseFloat(gross.replace(/,/g, "")) || 0

  const nssf = Math.min(Math.max(grossNum * 0.06, 0), NSSF_TIER_II_MAX)
  const shif = Math.max(grossNum * SHIF_RATE, 300)
  const housing = grossNum * HOUSING_LEVY_RATE
  const taxable = Math.max(0, grossNum - nssf - shif - housing)
  const paye = calcPAYE(taxable)
  const net = grossNum - nssf - shif - housing - paye

  return (
    <div className="bg-canvas min-h-[100dvh]">
      <script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id="article-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="bg-canvas-dark px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-canvas/60 mb-4">
            Free tool — no sign-up required
          </p>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            Kenya PAYE Calculator 2026 — Net Salary After Tax
          </h1>
          <p className="text-[0.95rem] text-canvas/70 max-w-[60ch] leading-relaxed">
            Calculate your monthly PAYE, NSSF, SHIF, Housing Levy, and take-home pay using current KRA tax bands. Updated for 2026.
          </p>
          <p className="text-[0.78rem] text-canvas/50 mt-4">Smart VAT Kenya &mdash; Updated July 2026</p>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-6 lg:px-10 py-16">
        <section aria-labelledby="paye-heading">
          <div className="flex items-center gap-2.5 mb-6">
            <Calculator size={17} weight="duotone" className="text-brand" aria-hidden="true" />
            <h2 id="paye-heading" className="font-display text-[1rem] font-semibold text-ink">
              PAYE & Net Salary Calculator
            </h2>
          </div>

          <div className="border border-hairline rounded-lg overflow-hidden divide-y divide-hairline">
            <div className="p-5">
              <label htmlFor="gross" className="block text-[0.78rem] font-medium text-ink-muted mb-2">
                Gross Monthly Salary (KES)
              </label>
              <input
                id="gross"
                type="text"
                inputMode="decimal"
                placeholder="100,000"
                value={gross}
                onChange={(e) => setGross(e.target.value)}
                className="w-full font-display text-[1.6rem] font-semibold text-ink bg-transparent focus:outline-none placeholder:text-ink-muted/30 placeholder:font-normal placeholder:text-xl"
              />
            </div>

            {grossNum > 0 && (
              <div className="p-5 bg-canvas-alt space-y-3">
                <div className="flex items-baseline justify-between">
                  <dt className="text-[0.78rem] text-ink-muted">Gross Salary</dt>
                  <dd className="font-mono text-[0.88rem] text-ink tabular-nums">{formatKES(grossNum)}</dd>
                </div>
                <div className="flex items-baseline justify-between">
                  <dt className="text-[0.78rem] text-ink-muted">NSSF (6% of pensionable pay)</dt>
                  <dd className="font-mono text-[0.88rem] text-ink-muted tabular-nums">- {formatKES(nssf)}</dd>
                </div>
                <div className="flex items-baseline justify-between">
                  <dt className="text-[0.78rem] text-ink-muted">SHIF (2.75% of gross)</dt>
                  <dd className="font-mono text-[0.88rem] text-ink-muted tabular-nums">- {formatKES(shif)}</dd>
                </div>
                <div className="flex items-baseline justify-between">
                  <dt className="text-[0.78rem] text-ink-muted">Affordable Housing Levy (1.5%)</dt>
                  <dd className="font-mono text-[0.88rem] text-ink-muted tabular-nums">- {formatKES(housing)}</dd>
                </div>
                <div className="flex items-baseline justify-between border-t border-hairline pt-3">
                  <dt className="text-[0.78rem] text-ink-muted">Taxable Income (after deductions)</dt>
                  <dd className="font-mono text-[0.88rem] text-ink tabular-nums">{formatKES(taxable)}</dd>
                </div>
                <div className="flex items-baseline justify-between">
                  <dt className="text-[0.78rem] text-ink-muted">PAYE (after KES 2,400 personal relief)</dt>
                  <dd className="font-mono text-[0.88rem] text-brand tabular-nums">- {formatKES(paye)}</dd>
                </div>
                <div className="flex items-baseline justify-between border-t-2 border-ink pt-3">
                  <dt className="text-[0.82rem] font-semibold text-ink">Net Take-Home Pay</dt>
                  <dd className="font-display text-[1.25rem] font-semibold text-ink tabular-nums">{formatKES(net)}</dd>
                </div>
              </div>
            )}
          </div>

          <div className="mt-5 flex flex-col gap-3">
            <a
              href={`${WA_BASE}?text=Hi%2C%20I%20used%20the%20PAYE%20calculator%20and%20need%20help%20with%20payroll%20or%20monthly%20PAYE%20filing%20for%20my%20business.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill inline-flex items-center justify-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-3 rounded-md hover:bg-brand-hover transition-colors self-start"
            >
              Confused by these numbers? Let us handle your KRA compliance. WhatsApp us now.
              <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
          </div>

          <details className="mt-4">
            <summary className="text-[0.78rem] text-ink-muted hover:text-ink cursor-pointer font-medium">
              KRA PAYE Tax Bands 2026 (monthly)
            </summary>
            <div className="mt-3 text-[0.78rem] text-ink-muted space-y-1 leading-relaxed">
              <p>KES 0 – 24,000: 10%</p>
              <p>KES 24,001 – 32,333: 25%</p>
              <p>KES 32,334 – 500,000: 30%</p>
              <p>KES 500,001 – 800,000: 32.5%</p>
              <p>Above KES 800,000: 35%</p>
              <p className="mt-2">Personal relief: KES 2,400/month deducted from gross tax.</p>
            </div>
          </details>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="font-display text-[1.1rem] font-semibold text-ink">Understanding Your PAYE Deductions</h2>
          <p className="text-[0.85rem] text-ink-muted leading-relaxed">
            PAYE (Pay As You Earn) is calculated on your taxable income after deducting NSSF, SHIF, and Housing Levy.
            The 2026 tax bands are: 10% on the first KES 24,000, 25% on KES 24,001–32,333, 30% on KES 32,334–500,000,
            32.5% on KES 500,001–800,000, and 35% on income above KES 800,000. A personal relief of KES 2,400/month
            is subtracted from the gross tax.
          </p>
          <p className="text-[0.85rem] text-ink-muted leading-relaxed">
            NSSF is calculated at 6% of pensionable pay up to a maximum of KES 4,320/month (Tier I + Tier II).
            SHIF (the new healthcare levy) is 2.75% of gross salary with a minimum of KES 300. The Affordable
            Housing Levy is 1.5% of gross salary. Employers match NSSF and Housing Levy contributions.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="/services/monthly-vat-filing" className="inline-flex items-center gap-1.5 text-[0.82rem] font-medium text-brand hover:underline underline-offset-4">
              Monthly PAYE filing service <ArrowRight size={12} weight="bold" />
            </a>
          </div>
        </section>

        <div className="mt-8 border-t border-hairline pt-8 text-[0.7rem] text-ink-muted leading-relaxed">
          <p>
            Disclaimer: This calculator provides estimates based on current KRA guidelines (2026 tax bands, NSSF rates, SHIF 2.75%, Housing Levy 1.5%).
            Actual deductions may vary based on employer-specific pension schemes, insurance relief, mortgage interest, or other allowable deductions.
            For official advice, consult a registered tax agent or the KRA iTax portal.
          </p>
        </div>
      </div>
    </div>
  )
}
