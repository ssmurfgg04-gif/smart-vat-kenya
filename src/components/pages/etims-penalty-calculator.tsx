"use client"

import { useState } from "react"
import { ArrowRight, Info, WarningCircle, Scales, HandCoins, ListChecks } from "@phosphor-icons/react/dist/ssr"

const WA_BASE = "https://wa.me/254717344440"

function formatKES(n: number) {
  return "KES " + Math.round(n).toLocaleString("en-KE")
}

const ETIMS_FINE_PER_MONTH = 100000
const LATE_FILING_FLAT = 10000
const LATE_FILING_RATE = 0.05
const INTEREST_RATE = 0.01
const INVOICE_FINE = 100000

export function EtimsPenaltyCalculator() {
  const [monthsNonCompliant, setMonthsNonCompliant] = useState("0")
  const [monthsLateFiling, setMonthsLateFiling] = useState("0")
  const [vatDue, setVatDue] = useState("")
  const [invoiceCount, setInvoiceCount] = useState("0")

  const mNon = Math.min(Math.max(parseInt(monthsNonCompliant, 10) || 0, 0), 12)
  const mLate = Math.min(Math.max(parseInt(monthsLateFiling, 10) || 0, 0), 24)
  const vat = Math.max(parseFloat(vatDue.replace(/,/g, "")) || 0, 0)
  const inv = Math.min(Math.max(parseInt(invoiceCount, 10) || 0, 0), 20)

  const etimsNonCompliance = mNon * ETIMS_FINE_PER_MONTH
  const lateFilingPerMonth = Math.max(LATE_FILING_FLAT, vat * LATE_FILING_RATE)
  const lateFiling = lateFilingPerMonth * mLate
  const interest = vat * INTEREST_RATE * mLate
  const invoicePenalties = inv * INVOICE_FINE
  const total = etimsNonCompliance + lateFiling + interest + invoicePenalties
  const hasAny = mNon > 0 || mLate > 0 || inv > 0 || vat > 0
  const waText = encodeURIComponent(
    `Hi, I used the eTIMS penalty calculator and my estimated exposure is approx ${formatKES(total)}. I need help getting my eTIMS compliance in order.`,
  )

  const inputCls =
    "w-full font-display text-[1.4rem] font-semibold text-ink bg-transparent focus:outline-none placeholder:text-ink-muted/30 placeholder:font-normal placeholder:text-xl"
  const labelCls = "block text-[0.78rem] font-medium text-ink-muted mb-2"

  return (
    <section aria-labelledby="etims-penalty-heading">
      <div className="flex items-center gap-2.5 mb-6">
        <Scales size={17} weight="duotone" className="text-brand" aria-hidden="true" />
        <h2 id="etims-penalty-heading" className="font-display text-[1rem] font-semibold text-ink">
          eTIMS Penalty Calculator - How Much Is Your Non-Compliance Costing You?
        </h2>
      </div>

      <div className="border border-hairline rounded-lg overflow-hidden divide-y divide-hairline">
        <div className="p-5">
          <label htmlFor="etims-months" className={`${labelCls} flex items-baseline justify-between`}>
            <span>Months your system was not integrated after a KRA notice (TPA s.59A(5))</span>
            <span className="font-display text-[1rem] font-semibold text-ink tabular-nums">{mNon}</span>
          </label>
          <input
            id="etims-months"
            type="range"
            min="0"
            max="12"
            value={mNon}
            onChange={(e) => setMonthsNonCompliant(e.target.value)}
            className="w-full accent-brand"
          />
          <div className="flex justify-between text-[0.7rem] text-ink-muted mt-1.5">
            <span>0 months</span>
            <span>up to KES 100,000 / month</span>
            <span>12 months</span>
          </div>
        </div>

        <div className="p-5">
          <label htmlFor="etims-vat-due" className={labelCls}>
            Optional - VAT due for months you filed late (KES)
          </label>
          <input
            id="etims-vat-due"
            type="text"
            inputMode="decimal"
            placeholder="120,000"
            value={vatDue}
            onChange={(e) => setVatDue(e.target.value)}
            className={inputCls}
          />
          <div className="mt-4">
            <label htmlFor="etims-late-months" className={`${labelCls} flex items-baseline justify-between`}>
              <span>Months you filed your VAT return late</span>
              <span className="font-display text-[1rem] font-semibold text-ink tabular-nums">{mLate}</span>
            </label>
            <input
              id="etims-late-months"
              type="range"
              min="0"
              max="24"
              value={mLate}
              onChange={(e) => setMonthsLateFiling(e.target.value)}
              className="w-full accent-brand"
            />
            <div className="flex justify-between text-[0.7rem] text-ink-muted mt-1.5">
              <span>0 months</span>
              <span>KES 10,000 + 5% + 1%/mo</span>
              <span>24 months</span>
            </div>
          </div>
        </div>

        <div className="p-5">
          <label htmlFor="etims-invoices" className={`${labelCls} flex items-baseline justify-between`}>
            <span>Non-compliant eTIMS invoices (issued via eTIMS requires valid control number / QR)</span>
            <span className="font-display text-[1rem] font-semibold text-ink tabular-nums">{inv}</span>
          </label>
          <input
            id="etims-invoices"
            type="range"
            min="0"
            max="20"
            value={inv}
            onChange={(e) => setInvoiceCount(e.target.value)}
            className="w-full accent-brand"
          />
          <div className="flex justify-between text-[0.7rem] text-ink-muted mt-1.5">
            <span>0 invoices</span>
            <span>up to KES 100,000 (or 5% of the tax, higher) per failure</span>
            <span>20</span>
          </div>
        </div>

        <div className="p-5 bg-canvas-alt">
          {!hasAny ? (
            <div className="flex items-start gap-2.5 text-[0.82rem] text-ink-muted">
              <Info size={14} className="shrink-0 mt-0.5" aria-hidden="true" />
              Move the sliders to see your penalty exposure. Leave them at 0 and your estimate stays at zero.
            </div>
          ) : (
            <>
              <dl className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <dt className="text-[0.78rem] text-ink-muted">
                    System non-integration (TPA s.59A(5))
                    <span className="block text-[0.65rem]">{mNon} month(s) &times; up to KES 100,000</span>
                  </dt>
                  <dd className="font-mono text-[0.88rem] text-ink tabular-nums">{formatKES(etimsNonCompliance)}</dd>
                </div>
                <div className="flex items-baseline justify-between">
                  <dt className="text-[0.78rem] text-ink-muted">
                    Late VAT return filing
                    <span className="block text-[0.65rem]">
                      {mLate} month(s) &times; max(KES 10,000, 5% of VAT due)
                    </span>
                  </dt>
                  <dd className="font-mono text-[0.88rem] text-ink tabular-nums">{formatKES(lateFiling)}</dd>
                </div>
                <div className="flex items-baseline justify-between">
                  <dt className="text-[0.78rem] text-ink-muted">
                    Interest on VAT due
                    <span className="block text-[0.65rem]">1%/month &times; {mLate} month(s)</span>
                  </dt>
                  <dd className="font-mono text-[0.88rem] text-ink tabular-nums">{formatKES(interest)}</dd>
                </div>
                <div className="flex items-baseline justify-between">
                  <dt className="text-[0.78rem] text-ink-muted">
                    Non-compliant invoices (TPA s.86)
                    <span className="block text-[0.65rem]">{inv} failure(s) &times; up to KES 100,000 (or 5% of the tax involved - whichever is higher)</span>
                  </dt>
                  <dd className="font-mono text-[0.88rem] text-ink tabular-nums">{formatKES(invoicePenalties)}</dd>
                </div>
                <div className="flex items-baseline justify-between border-t border-hairline pt-3">
                  <dt className="text-[0.82rem] font-semibold text-brand">Estimated total exposure</dt>
                  <dd className="font-display text-[1.25rem] font-semibold text-brand tabular-nums">{formatKES(total)}</dd>
                </div>
              </dl>

              {vat > 0 && (
                <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex items-center gap-2">
                    <HandCoins size={15} weight="duotone" className="text-amber-700" aria-hidden="true" />
                    <p className="text-[0.8rem] font-semibold text-amber-700">
                      Amnesty angle: pay the principal before Dec 31, 2026 and penalties + interest are waived.
                    </p>
                  </div>
                </div>
              )}

              <a
                href={`${WA_BASE}?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fill mt-5 w-full flex items-center justify-center gap-2 bg-brand text-canvas text-[0.82rem] font-semibold py-3 rounded-md hover:bg-brand-hover transition-colors"
              >
                Fix this before it grows - chat with us <ArrowRight size={13} weight="bold" aria-hidden="true" />
              </a>
            </>
          )}
        </div>
      </div>

      <div className="mt-5 grid sm:grid-cols-2 gap-4">
        <a
          href="/services/etims-onboarding/"
          className="border border-hairline rounded-lg p-4 flex items-start gap-3 hover:border-brand/40 transition-colors group"
        >
          <ListChecks size={18} weight="duotone" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="text-[0.85rem] font-semibold text-ink group-hover:text-brand transition-colors">Get eTIMS-compliant the easy way</p>
            <p className="text-[0.72rem] text-ink-muted mt-1">We handle eTIMS onboarding, device setup, and stock upload for you.</p>
          </div>
        </a>
        <a
          href="/services/kra-penalty-waiver/"
          className="border border-hairline rounded-lg p-4 flex items-start gap-3 hover:border-brand/40 transition-colors group"
        >
          <WarningCircle size={18} weight="duotone" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="text-[0.85rem] font-semibold text-ink group-hover:text-brand transition-colors">Already have penalties? Waive them</p>
            <p className="text-[0.72rem] text-ink-muted mt-1">Penalty waiver drafting and submission - KES 4,000 per application.</p>
          </div>
        </a>
      </div>

      <p className="mt-3 text-[0.72rem] text-ink-muted leading-relaxed flex items-start gap-1.5">
        <Info size={12} className="shrink-0 mt-0.5" aria-hidden="true" />
        Indicative estimates on the current legal footing: up to KES 100,000 per month for failing to integrate a data-management system after a written KRA notice (TPA s.59A(5), applies to taxpayers with turnover above KES 5m); for e-invoice failures, the higher of 5% of the tax due or KES 100,000 for companies (KES 10,000 for individuals) (TPA s.86, as amended by Finance Act 2026, effective 1 July 2026); and the higher of KES 10,000 or 5% of tax due, plus 1% monthly interest, for late filing. Before 1 July 2026 the s.86 penalty was twice the tax due. This is indicative, not tax advice.
      </p>
    </section>
  )
}
