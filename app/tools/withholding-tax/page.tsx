"use client"

import { useState } from "react"
import { Calculator, ArrowRight } from "@phosphor-icons/react"

const WA_BASE = "https://wa.me/254721725958"

function formatKES(n: number) {
  return "KES " + n.toLocaleString("en-KE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

interface WHTCategory {
  id: string
  label: string
  rate: number
  threshold: number
  note: string
}

const CATEGORIES: WHTCategory[] = [
  { id: "management", label: "Management & professional fees", rate: 0.05, threshold: 24000, note: "Consultants, lawyers, accountants, engineers" },
  { id: "royalty", label: "Royalties", rate: 0.05, threshold: 24000, note: "IP licensing, franchise fees, patents" },
  { id: "dividend", label: "Dividends", rate: 0.05, threshold: 24000, note: "Distributed profits to shareholders" },
  { id: "interest", label: "Interest", rate: 0.15, threshold: 24000, note: "Loan interest paid to individuals (not banks)" },
  { id: "rent-lease", label: "Rent / Lease (not residential)", rate: 0.10, threshold: 24000, note: "Commercial rent paid to a landlord" },
  { id: "supply", label: "Supplier payments (goods)", rate: 0.03, threshold: 50000, note: "Contractor/subcontractor supply of goods" },
  { id: "commission", label: "Commission / brokerage", rate: 0.05, threshold: 24000, note: "Sales commissions, agent fees" },
]

export default function WHTPage() {
  const [selected, setSelected] = useState(CATEGORIES[0].id)
  const [amount, setAmount] = useState("")

  const cat = CATEGORIES.find((c) => c.id === selected)!
  const gross = parseFloat(amount.replace(/,/g, "")) || 0
  const aboveThreshold = gross > cat.threshold
  const wht = aboveThreshold ? gross * cat.rate : 0
  const net = gross - wht

  return (
    <div className="bg-canvas min-h-[100dvh]">
      <div className="bg-canvas-dark px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-canvas/60 mb-4">
            Free tool — no sign-up required
          </p>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            Withholding Tax (WHT) Calculator — Know What to Deduct
          </h1>
          <p className="text-[0.95rem] text-canvas/70 max-w-[60ch] leading-relaxed">
            Calculate the correct withholding tax on payments to contractors, consultants, landlords, and suppliers.
            Avoid KRA penalties on incorrect WHT deductions.
          </p>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-6 lg:px-10 py-16">
        <section aria-labelledby="wht-heading">
          <div className="flex items-center gap-2.5 mb-6">
            <Calculator size={17} weight="duotone" className="text-brand" aria-hidden="true" />
            <h2 id="wht-heading" className="font-display text-[1rem] font-semibold text-ink">
              WHT Calculator
            </h2>
          </div>

          <div className="border border-hairline rounded-lg overflow-hidden divide-y divide-hairline">
            <div className="p-5">
              <label htmlFor="wht-category" className="block text-[0.78rem] font-medium text-ink-muted mb-2">
                Payment Type
              </label>
              <select
                id="wht-category"
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="w-full text-[0.95rem] text-ink bg-transparent border border-hairline rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-brand"
              >
                {CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.label} ({c.rate * 100}%)
                  </option>
                ))}
              </select>
              <p className="text-[0.7rem] text-ink-muted mt-1">{cat.note}</p>
            </div>

            <div className="p-5">
              <label htmlFor="wht-amount" className="block text-[0.78rem] font-medium text-ink-muted mb-2">
                Gross Payment Amount (KES)
              </label>
              <input
                id="wht-amount"
                type="text"
                inputMode="decimal"
                placeholder="100,000"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full font-display text-[1.6rem] font-semibold text-ink bg-transparent focus:outline-none placeholder:text-ink-muted/30 placeholder:font-normal placeholder:text-xl"
              />
            </div>

            {gross > 0 && (
              <div className="p-5 bg-canvas-alt space-y-3">
                <div className="flex items-baseline justify-between">
                  <dt className="text-[0.78rem] text-ink-muted">Payment type</dt>
                  <dd className="text-[0.88rem] text-ink">{cat.label}</dd>
                </div>
                <div className="flex items-baseline justify-between">
                  <dt className="text-[0.78rem] text-ink-muted">Threshold</dt>
                  <dd className="text-[0.88rem] text-ink-muted tabular-nums">
                    {aboveThreshold
                      ? `${formatKES(cat.threshold)} — exceeded`
                      : `${formatKES(cat.threshold)} — not exceeded`}
                  </dd>
                </div>
                {aboveThreshold && (
                  <>
                    <hr className="border-hairline" />
                    <div className="flex items-baseline justify-between">
                      <dt className="text-[0.78rem] text-ink-muted">WHT rate</dt>
                      <dd className="font-mono text-[0.88rem] text-ink tabular-nums">{(cat.rate * 100).toFixed(0)}%</dd>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <dt className="text-[0.78rem] text-ink-muted">WHT to deduct</dt>
                      <dd className="font-mono text-[0.88rem] text-brand tabular-nums">- {formatKES(wht)}</dd>
                    </div>
                    <div className="flex items-baseline justify-between border-t-2 border-ink pt-3">
                      <dt className="text-[0.82rem] font-semibold text-ink">Net payable to recipient</dt>
                      <dd className="font-display text-[1.25rem] font-semibold text-ink tabular-nums">{formatKES(net)}</dd>
                    </div>
                  </>
                )}
                {!aboveThreshold && (
                  <p className="text-[0.78rem] text-amber-600 dark:text-amber-400">
                    Below threshold — no WHT is required. Pay the full {formatKES(gross)} to the recipient.
                  </p>
                )}
              </div>
            )}
          </div>

          {gross > 0 && aboveThreshold && (
            <div className="mt-4 p-4 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950">
              <p className="text-[0.78rem] text-blue-800 dark:text-blue-300 font-medium">
                WHT must be remitted to KRA within 5 working days after deduction. File via iTax.
              </p>
            </div>
          )}

          <div className="mt-5">
            <a
              href={`${WA_BASE}?text=Hi%2C%20I%20used%20the%20WHT%20calculator%20and%20need%20help%20filing%20monthly%20withholding%20tax%20returns%20for%20my%20business.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill inline-flex items-center justify-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-3 rounded-md hover:bg-brand-hover transition-colors self-start"
            >
              Filing WHT manually every month? Let us handle it for you. Chat on WhatsApp.
              <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
          </div>

          <details className="mt-6">
            <summary className="text-[0.78rem] text-ink-muted hover:text-ink cursor-pointer font-medium">
              WHT rates reference (summary)
            </summary>
            <div className="mt-3 text-[0.72rem] text-ink-muted space-y-1 leading-relaxed">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-hairline text-left">
                    <th className="py-1.5 pr-3">Payment type</th>
                    <th className="py-1.5 px-3">Rate</th>
                    <th className="py-1.5 pl-3">Threshold</th>
                  </tr>
                </thead>
                <tbody>
                  {CATEGORIES.map((c) => (
                    <tr key={c.id} className="border-b border-hairline/50">
                      <td className="py-1.5 pr-3">{c.label}</td>
                      <td className="py-1.5 px-3">{(c.rate * 100).toFixed(0)}%</td>
                      <td className="py-1.5 pl-3">{formatKES(c.threshold)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        </section>

        <div className="mt-12 border-t border-hairline pt-8 text-[0.7rem] text-ink-muted leading-relaxed">
          <p>
            Disclaimer: This calculator is based on standard KRA WHT rates for resident payees. Non-resident rates differ
            (typically 5–20% depending on the treaty). Always verify with the KRA iTax portal or consult a registered
            tax agent. Late remittance of WHT attracts a 2% monthly penalty plus interest at prevailing KRA rates.
          </p>
        </div>
      </div>
    </div>
  )
}
