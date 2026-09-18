"use client"

import { useMemo, useState } from "react"

type Direction = "add" | "extract"

const VAT_RATE = 0.16

const QUICK_AMOUNTS = [10000, 50000, 100000, 500000]

const kes = (n: number) =>
  n.toLocaleString("en-KE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })

/**
 * Hero calculator — the homepage's primary self-service tool.
 * Styled like a till receipt / eTIMS invoice line: dotted leaders,
 * right-aligned tabular figures, navy header strip.
 */
export function HeroVatCalc() {
  const [amount, setAmount] = useState("")
  const [direction, setDirection] = useState<Direction>("add")
  const [copied, setCopied] = useState(false)

  const base = useMemo(() => {
    const n = parseFloat(amount.replace(/[^0-9.]/g, ""))
    return Number.isFinite(n) && n > 0 ? n : 0
  }, [amount])

  const figures = useMemo(() => {
    if (base <= 0) return null
    if (direction === "add") {
      const vat = base * VAT_RATE
      return { entered: base, net: base, vat, total: base + vat }
    }
    const net = base / (1 + VAT_RATE)
    return { entered: base, net, vat: base - net, total: base }
  }, [base, direction])

  async function copyResult() {
    if (!figures) return
    const lines = [
      `Amount: KES ${kes(figures.entered)}`,
      direction === "add" ? "Add 16% VAT" : "Extract 16% VAT",
      `Net (before VAT): KES ${kes(figures.net)}`,
      `VAT @ 16%: KES ${kes(figures.vat)}`,
      `Total: KES ${kes(figures.total)}`,
      "— smartvatkenya.co.ke",
    ]
    try {
      await navigator.clipboard.writeText(lines.join("\n"))
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable — silently skip */
    }
  }

  const leaderRow =
    "flex items-baseline gap-2 text-[0.9rem] leading-none"

  return (
    <div className="relative w-full max-w-[640px] rounded-xl border border-hairline bg-card shadow-[0_20px_50px_-24px_rgba(15,32,70,0.35)] overflow-hidden">
      {/* Invoice-style header strip */}
      <div className="flex items-center justify-between gap-3 bg-accent px-5 py-3">
        <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/95">
          VAT Calculator
        </p>
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-white/60">
          Kenya · 16% · 2026
        </p>
      </div>

      <div className="p-5 sm:p-6">
        {/* Amount input */}
        <label htmlFor="hero-vat-amount" className="block text-[0.8rem] font-medium text-ink-soft mb-2">
          Amount
        </label>
        <div className="flex rounded-lg border border-hairline bg-canvas focus-within:border-ink-soft/50 focus-within:ring-2 focus-within:ring-accent/25 transition-[box-shadow,border-color]">
          <span className="flex items-center pl-4 pr-2 font-display text-[1.05rem] font-semibold text-ink-muted select-none">
            KES
          </span>
          <input
            id="hero-vat-amount"
            type="text"
            inputMode="decimal"
            autoComplete="off"
            placeholder="50,000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full min-w-0 bg-transparent py-3 pr-4 font-display text-[1.35rem] font-semibold text-ink tabular-nums placeholder:text-ink-muted/50 placeholder:font-normal placeholder:text-[1.15rem] focus:outline-none"
          />
        </div>

        {/* Quick amounts */}
        <div className="mt-3 flex flex-wrap items-center gap-2" role="group" aria-label="Quick amounts">
          {QUICK_AMOUNTS.map((q) => (
            <button
              key={q}
              type="button"
              data-track="calculator-used"
              data-cta-type="hero-calc-quick"
              onClick={() => { setAmount(String(q)); setCopied(false) }}
              className={`min-h-[36px] rounded-full border px-3.5 text-[0.8rem] font-medium tabular-nums transition-colors ${
                base === q
                  ? "border-accent bg-accent text-white"
                  : "border-hairline bg-canvas text-ink-soft hover:border-ink-muted"
              }`}
            >
              {q >= 1000 ? `${q / 1000}k` : q}
            </button>
          ))}
        </div>

        {/* Direction toggle */}
        <div
          className="mt-4 grid grid-cols-2 gap-1 rounded-lg bg-canvas-alt p-1"
          role="group"
          aria-label="Calculation direction"
        >
          {(["add", "extract"] as Direction[]).map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => { setDirection(d); setCopied(false) }}
              aria-pressed={direction === d}
              className={`min-h-[44px] rounded-md text-[0.88rem] font-semibold transition-colors ${
                direction === d
                  ? "bg-card text-ink shadow-[0_1px_3px_rgba(15,32,70,0.18)]"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {d === "add" ? "Add 16% VAT" : "Remove 16% VAT"}
            </button>
          ))}
        </div>

        {/* Receipt panel */}
        <div className="mt-5 rounded-lg border border-hairline bg-canvas-alt/70 px-4 py-4" aria-live="polite">
          {figures ? (
            <div className="space-y-3">
              <div className={leaderRow}>
                <span className="text-ink-muted shrink-0">
                  {direction === "add" ? "Net (before VAT)" : "Amount (incl. VAT)"}
                </span>
                <span className="flex-1 border-b border-dotted border-ink-muted/40" aria-hidden="true" />
                <span className="font-display font-semibold text-ink tabular-nums">
                  {kes(figures.entered)}
                </span>
              </div>
              <div className={leaderRow}>
                <span className="text-ink-muted shrink-0">VAT @ 16%</span>
                <span className="flex-1 border-b border-dotted border-ink-muted/40" aria-hidden="true" />
                <span className="font-display font-semibold text-brand tabular-nums">
                  {kes(figures.vat)}
                </span>
              </div>
              <div className={`${leaderRow} pt-3 border-t border-hairline`}>
                <span className="font-semibold text-ink shrink-0">
                  {direction === "add" ? "Total (with VAT)" : "Net (VAT removed)"}
                </span>
                <span className="flex-1" aria-hidden="true" />
                <span className="font-display text-[1.1rem] font-bold text-ink tabular-nums">
                  {kes(direction === "add" ? figures.total : figures.net)}
                </span>
              </div>
              <button
                type="button"
                onClick={copyResult}
                data-track="calculator-used"
                data-cta-type="hero-calc-copy"
                className="mt-1 inline-flex min-h-[36px] items-center gap-1.5 rounded-md border border-hairline bg-card px-3 text-[0.78rem] font-medium text-ink-soft hover:border-ink-muted transition-colors"
              >
                {copied ? "Copied to clipboard" : "Copy breakdown"}
              </button>
            </div>
          ) : (
            <p className="text-[0.85rem] leading-relaxed text-ink-muted">
              Type an amount or tap a quick value — the VAT breakdown updates as you type.
            </p>
          )}
        </div>

        {/* Footer links */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <a
            href="/tools/"
            className="inline-flex items-center gap-1.5 text-[0.83rem] font-semibold text-ink hover:text-brand transition-colors"
          >
            Penalty, PAYE &amp; zero-rated tools
            <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ink-muted">
            Free · no sign-up
          </p>
        </div>
      </div>
    </div>
  )
}
