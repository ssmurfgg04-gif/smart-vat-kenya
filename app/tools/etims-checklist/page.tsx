"use client"

import { useState } from "react"
import { CheckCircle, Circle, ArrowRight } from "@phosphor-icons/react"

const WA_BASE = "https://wa.me/254721725958"

const CHECKLIST = [
  { id: "device", label: "eTIMS device (ECD) installed and activated", help: "KRA-issued or approved sales recording device" },
  { id: "stock", label: "Stock/inventory uploaded to eTIMS portal", help: "All items must be registered with descriptions and prices" },
  { id: "invoice", label: "All sales issued via eTIMS invoice", help: "Every sale — cash or credit — must generate an eTIMS invoice before dispatch" },
  { id: "daily", label: "Daily sales summary uploaded to KRA", help: "EOD summary submitted before midnight" },
  { id: "returns", label: "Monthly VAT/TOT returns filed on time", help: "VAT due by 20th of following month; TOT by 15th" },
  { id: "credit", label: "Credit notes managed through eTIMS", help: "Returns, cancellations, and corrections must use eTIMS credit notes" },
  { id: "backup", label: "Sales data backed up offline", help: "eTIMS devices can fail — maintain a manual log or secondary backup" },
  { id: "training", label: "Staff trained on eTIMS operations", help: "Cashiers and accounts team know how to issue eTIMS invoices" },
  { id: "audit", label: "eTIMS records match physical stock", help: "KRA compliance visits compare eTIMS data against physical inventory" },
  { id: "renewal", label: "eTIMS device maintenance/renewal up to date", help: "Devices require periodic firmware updates and KRA recertification" },
]

export default function eTIMSChecklistPage() {
  const [checked, setChecked] = useState<string[]>([])

  function toggle(id: string) {
    setChecked((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  const score = checked.length
  const total = CHECKLIST.length
  const pct = Math.round((score / total) * 100)

  return (
    <div className="bg-canvas min-h-[100dvh]">
      <div className="bg-canvas-dark px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-canvas/60 mb-4">
            Free tool — no sign-up required
          </p>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            eTIMS Compliance Checklist — Is Your Business Ready for KRA Audits?
          </h1>
          <p className="text-[0.95rem] text-canvas/70 max-w-[60ch] leading-relaxed">
            KRA is aggressively enforcing eTIMS compliance. Use this checklist to assess your readiness before
            the next audit visit. Tick off what you have done and get a score.
          </p>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-6 lg:px-10 py-16">
        <section aria-labelledby="checklist-heading">
          <div className="flex items-center gap-2.5 mb-2">
            <CheckCircle size={17} weight="duotone" className="text-brand" aria-hidden="true" />
            <h2 id="checklist-heading" className="font-display text-[1rem] font-semibold text-ink">
              eTIMS Readiness Checklist
            </h2>
          </div>
          <p className="text-[0.78rem] text-ink-muted mb-6">
            Check each item you have completed. Your score refreshes instantly.
          </p>

          <div className="border border-hairline rounded-lg overflow-hidden divide-y divide-hairline">
            {CHECKLIST.map((item) => (
              <button
                key={item.id}
                onClick={() => toggle(item.id)}
                className="w-full flex items-start gap-3.5 p-4 text-left hover:bg-canvas-alt/50 transition-colors cursor-pointer"
              >
                {checked.includes(item.id) ? (
                  <CheckCircle size={18} weight="fill" className="text-green-600 mt-0.5 shrink-0" />
                ) : (
                  <Circle size={18} className="text-ink-muted/40 mt-0.5 shrink-0" />
                )}
                <div className="min-w-0">
                  <p className={`text-[0.85rem] leading-snug ${checked.includes(item.id) ? "text-ink line-through opacity-50" : "text-ink"}`}>
                    {item.label}
                  </p>
                  <p className="text-[0.7rem] text-ink-muted mt-0.5">{item.help}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-6 p-5 rounded-lg border border-hairline bg-canvas-alt">
            <p className="text-[0.78rem] font-medium text-ink-muted mb-1">Compliance Score</p>
            <p className="font-display text-[2rem] font-semibold text-ink tabular-nums">{pct}%</p>
            <p className="text-[0.78rem] text-ink-muted mt-1">
              {score} of {total} items complete
            </p>
            {score < total && (
              <p className="text-[0.75rem] text-amber-600 dark:text-amber-400 mt-2">
                {total - score} item{(total - score) !== 1 ? "s" : ""} still pending — KRA audits are intensifying in 2026.
              </p>
            )}
            {score === total && (
              <p className="text-[0.75rem] text-green-600 dark:text-green-400 mt-2">
                Your business is well prepared for eTIMS compliance. Keep up the good work!
              </p>
            )}
          </div>

          <div className="mt-5">
            <a
              href={`${WA_BASE}?text=Hi%2C%20I%20completed%20the%20eTIMS%20checklist%20(score%3A%20${pct}%25)%20and%20need%20professional%20help%20getting%20fully%20compliant.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill inline-flex items-center justify-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
            >
              Need help closing compliance gaps? Let our team handle your eTIMS setup. WhatsApp us.
              <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </section>

        <div className="mt-12 border-t border-hairline pt-8 text-[0.7rem] text-ink-muted leading-relaxed">
          <p>
            Disclaimer: This checklist covers common eTIMS compliance requirements but is not exhaustive.
            KRA compliance requirements vary by business type, sector, and turnover. This tool does not constitute
            legal or tax advice. Consult a KRA-registered tax agent for a full compliance assessment.
          </p>
        </div>
      </div>
    </div>
  )
}
