"use client"

import { useState } from "react"
import { Calculator } from "@phosphor-icons/react/dist/ssr"

type Direction = "add" | "extract"

/** Compact hero quick-calc: same 16% math as the tools page. Type a number, get VAT instantly. */
export function HeroVatCalc() {
  const [amount, setAmount] = useState("")
  const [direction, setDirection] = useState<Direction>("add")

  const base = parseFloat(amount.replace(/,/g, "")) || 0
  const vat = direction === "add" ? base * 0.16 : base - base / 1.16
  const total = direction === "add" ? base + vat : base
  const fmt = (n: number) =>
    "KES " + n.toLocaleString("en-KE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  return (
    <div className="border border-slate-200 rounded-xl p-4 mb-5 bg-slate-50/60 max-w-[54ch]">
      <p className="flex items-center gap-1.5 text-[0.8rem] font-semibold text-[#14243e] mb-2">
        <Calculator size={14} aria-hidden="true" />
        Quick VAT check — type any amount
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          id="hero-vat-amount"
          type="text"
          inputMode="decimal"
          placeholder="50,000"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          aria-label="Amount in KES"
          className="flex-1 min-w-0 font-display text-[1.15rem] font-semibold text-[#14243e] bg-white border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-600 placeholder:text-slate-400 placeholder:font-normal placeholder:text-base"
        />
        <div className="flex gap-2" role="group" aria-label="Calculation direction">
          {(["add", "extract"] as Direction[]).map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDirection(d)}
              aria-pressed={direction === d}
              className={`px-3 py-2 rounded-lg text-[0.78rem] font-medium border transition-colors active:scale-[0.98] ${
                direction === d
                  ? "bg-[#14243e] text-white border-[#14243e]"
                  : "border-slate-300 text-[#3f4f68] hover:border-[#3f4f68]"
              }`}
            >
              {d === "add" ? "+16% Add" : "Extract"}
            </button>
          ))}
        </div>
      </div>
      {base > 0 && (
        <dl className="flex items-baseline justify-between mt-3 pt-3 border-t border-slate-200">
          <dt className="text-[0.78rem] text-[#3f4f68]">
            VAT (16%) · Total {direction === "add" ? "with VAT" : "incl. VAT"}
          </dt>
          <dd className="font-display text-[1.05rem] font-semibold text-[#14243e] tabular-nums">
            {fmt(vat)} · {fmt(total)}
          </dd>
        </dl>
      )}
      <a
        href="/tools/"
        className="inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-[#14243e] hover:underline mt-2"
      >
        Full calculator with zero-rated &amp; exempt <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  )
}
