"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Info, Receipt } from "@phosphor-icons/react/dist/ssr"
import { ShareResult } from "@/components/share-result"
import { WA_PATHS } from "@/src/lib/whatsapp"
import { track } from "@/src/lib/analytics"

function formatKES(n: number) {
  return "KES " + n.toLocaleString("en-KE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

type RateType = "standard" | "zero" | "exempt"
type Direction = "add" | "extract"

// Standalone VAT calculator (landing-page grade). Same KRA-accurate maths as
// the /tools hub version, wrapped in the conversion layer: impressive result
// breakdown, shareable result, and a "what next" bridge to the service.
export function VatCalculatorPro() {
  const [amount, setAmount] = useState("")
  const [rateType, setRateType] = useState<RateType>("standard")
  const [direction, setDirection] = useState<Direction>("add")
  const started = useRef(false)

  const base = parseFloat(amount.replace(/,/g, "")) || 0
  const hasInput = base > 0
  const vatAmount = rateType === "standard" ? (direction === "add" ? base * 0.16 : base - base / 1.16) : 0
  const net = direction === "add" ? base : base / 1.16
  const gross = direction === "add" ? base + vatAmount : base

  useEffect(() => {
    if (hasInput && !started.current) {
      started.current = true
      track("tool_start", { tool: "vat_calculator" })
    }
  }, [hasInput])

  useEffect(() => {
    if (hasInput && rateType === "standard") {
      track("tool_complete", { tool: "vat_calculator", result_value: Math.round(vatAmount) })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vatAmount > 0])

  const resultText =
    rateType === "standard"
      ? `My VAT estimate (${direction === "add" ? "adding" : "extracting"} 16% on KES ${Math.round(base).toLocaleString()}): VAT = ${formatKES(vatAmount)}, ${direction === "add" ? "total incl. VAT" : "net amount"} = ${formatKES(direction === "add" ? gross : net)}`
      : rateType === "zero"
        ? "My supply is zero-rated (0% VAT) - VAT charged is nil, input VAT still claimable."
        : "My supply is VAT-exempt - no VAT charged and no input VAT credit."

  return (
    <div className="border border-hairline rounded-xl overflow-hidden bg-canvas divide-y divide-hairline">
      <div className="p-4 sm:p-6">
        <label htmlFor="vcp-amount" className="block text-[0.8rem] font-medium text-ink-muted mb-2">Amount (KES)</label>
        <input
          id="vcp-amount"
          type="text"
          inputMode="decimal"
          placeholder="50,000"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full font-display text-[1.4rem] sm:text-[1.8rem] font-semibold text-ink bg-transparent focus:outline-none placeholder:text-ink-muted/30 placeholder:font-normal placeholder:text-2xl"
        />
      </div>
      <div className="p-4 sm:p-6">
        <p className="text-[0.8rem] font-medium text-ink-muted mb-3">KRA VAT rate</p>
        <div className="flex flex-wrap gap-2">
          {([
            { value: "standard", label: "Standard 16%" },
            { value: "zero", label: "Zero-rated 0%" },
            { value: "exempt", label: "Exempt" },
          ] as { value: RateType; label: string }[]).map((r) => (
            <button key={r.value} onClick={() => setRateType(r.value)} className={`px-3.5 py-2 rounded-md text-[0.8rem] font-medium border transition-colors active:scale-[0.98] ${rateType === r.value ? "bg-ink text-background border-ink" : "border-hairline text-ink-muted hover:border-ink-muted hover:text-ink"}`}>{r.label}</button>
          ))}
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <p className="text-[0.8rem] font-medium text-ink-muted mb-3">Direction</p>
        <div className="flex flex-wrap gap-2">
          {([
            { value: "add", label: "Add VAT to amount" },
            { value: "extract", label: "Extract VAT from total" },
          ] as { value: Direction; label: string }[]).map((d) => (
            <button key={d.value} onClick={() => setDirection(d.value)} className={`px-3.5 py-2 rounded-md text-[0.8rem] font-medium border transition-colors active:scale-[0.98] ${direction === d.value ? "bg-ink text-background border-ink" : "border-hairline text-ink-muted hover:border-ink-muted hover:text-ink"}`}>{d.label}</button>
          ))}
        </div>
      </div>

      {/* Impressive result panel */}
      <div className="p-4 sm:p-6 bg-canvas-alt">
        {!hasInput ? (
          <p className="text-[0.85rem] text-ink-muted flex items-center gap-2"><Info size={15} className="shrink-0" aria-hidden="true" />Type any amount - your VAT breakdown builds instantly. Nothing is stored or sent.</p>
        ) : rateType === "exempt" ? (
          <div className="space-y-3">
            <p className="font-display text-[1.15rem] font-semibold text-ink">VAT due: KES 0.00</p>
            <p className="text-[0.82rem] text-ink-muted leading-relaxed">Exempt supplies carry no VAT charge and do not qualify for input VAT credit. If you also make taxable supplies, you must apportion input VAT - a common KRA audit trigger.</p>
            <ShareResult resultText={resultText} compact />
          </div>
        ) : rateType === "zero" ? (
          <div className="space-y-3">
            <p className="font-display text-[1.15rem] font-semibold text-ink">VAT due: KES 0.00 (zero-rated)</p>
            <p className="text-[0.82rem] text-ink-muted leading-relaxed">Zero-rated at 0% - VAT is charged but at nil. Input VAT on your costs is still claimable, so keep your eTIMS invoices. Verify your supply's zero-rating schedule before filing.</p>
            <ShareResult resultText={resultText} compact />
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <p className="text-[0.78rem] text-ink-muted mb-1">Your estimated VAT</p>
              <p className="font-display text-[1.7rem] sm:text-[2rem] font-bold text-ink tabular-nums leading-none">{formatKES(vatAmount)}</p>
            </div>
            <dl className="space-y-2.5 border-t border-hairline pt-4">
              <div className="flex items-baseline justify-between">
                <dt className="text-[0.8rem] text-ink-muted flex items-center gap-1.5"><Receipt size={13} aria-hidden="true" />{direction === "add" ? "Net amount (excl. VAT)" : "Net amount extracted"}</dt>
                <dd className="font-mono text-[0.85rem] text-ink tabular-nums">{formatKES(net)}</dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="text-[0.8rem] text-ink-muted">VAT @ 16%</dt>
                <dd className="font-mono text-[0.85rem] text-brand tabular-nums">+ {formatKES(vatAmount)}</dd>
              </div>
              <div className="flex items-baseline justify-between border-t border-hairline pt-3">
                <dt className="text-[0.85rem] font-semibold text-ink">{direction === "add" ? "Total (incl. VAT)" : "Original total (incl. VAT)"}</dt>
                <dd className="font-display text-[1.15rem] font-bold text-ink tabular-nums">{formatKES(gross)}</dd>
              </div>
            </dl>
            <p className="text-[0.72rem] text-ink-muted leading-relaxed flex items-start gap-1.5">
              <Info size={12} className="shrink-0 mt-0.5" aria-hidden="true" />
              Before filing, verify: your sales invoices are eTIMS-generated, output VAT matches your VAT3, and input VAT claims have valid supplier eTIMS invoices. That's what KRA checks.
            </p>
            <div className="flex flex-col gap-3 pt-1">
              <a href={WA_PATHS.filing} target="_blank" rel="noopener noreferrer" data-track="wa-cta" data-cta-type="vat-calc-result" data-service="monthly-filing" className="inline-flex items-center justify-center gap-2 bg-brand text-canvas text-[0.85rem] font-semibold px-5 py-3 rounded-md hover:bg-brand-hover transition-colors">
                Need help filing it correctly? We file from KES 3,500/month <ArrowRight size={13} weight="bold" aria-hidden="true" />
              </a>
              <ShareResult resultText={resultText} compact />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
