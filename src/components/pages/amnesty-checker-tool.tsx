"use client"

import { useState } from "react"
import { ArrowRight, ArrowCounterClockwise, CheckCircle, WarningCircle, SealCheck, ArrowLeft } from "@phosphor-icons/react/dist/ssr"

type Step =
  | "start"
  | "q1-penalties"
  | "q2-when"
  | "q3-principal"
  | "q4-returns"
  | "r-automatic"
  | "r-file-returns"
  | "r-pay-principal"
  | "r-2026-charges"
  | "r-none"

interface ResultSpec {
  heading: string
  verdict: "qualifies" | "action" | "no"
  body: string
  actions: string[]
  cta?: { label: string; href: string; whatsapp?: boolean }
}

const RESULTS: Record<string, ResultSpec> = {
  "r-automatic": {
    heading: "You qualify - and the waiver is automatic",
    verdict: "qualifies",
    body: "Your penalties, interest and fines were charged on pre-2026 liabilities, the principal has been paid, and the returns are on file. Under the 2026 Tax Amnesty Programme the waiver applies automatically - no separate amnesty application is required. What remains is verification: confirm on your iTax ledger that the penalties have actually been reversed, because automatic does not mean instant.",
    actions: [
      "Log in to iTax and open your tax account ledger for each tax type that carried the penalties.",
      "Confirm the penalty and interest entries dated before 31 Dec 2025 show as waived/reversed.",
      "Screenshot the cleared ledger - this is your evidence for tenders and TCC applications.",
      "If a pre-2026 penalty still shows as outstanding, raise it through the amnesty query with your ledger screenshot attached.",
    ],
    cta: { label: "Read the full amnesty guide", href: "/resources/kra-tax-amnesty-2026/" },
  },
  "r-file-returns": {
    heading: "You qualify - once the outstanding returns are filed",
    verdict: "action",
    body: "Your penalties are pre-2026, but unfiled returns are holding the waiver open. For late-filing penalties with no outstanding principal, the amnesty wipes them once the returns themselves are filed - the returns are the condition. Each unfiled month also keeps generating exposure, so this is the cheapest win on the entire amnesty menu.",
    actions: [
      "List every unfiled return on iTax (Returns > File Return > view obligations per tax type).",
      "File them all - nil returns where there was genuinely no income/activity.",
      "After filing, check the ledger: late-filing penalties on those periods should show as waived.",
      "Do this well before December - filing volumes crash iTax in the final weeks of the window.",
    ],
    cta: { label: "How to file nil returns (guide)", href: "/resources/how-to-file-nil-returns-2026/" },
  },
  "r-pay-principal": {
    heading: "You qualify - if the principal is settled by 31 Dec 2026",
    verdict: "action",
    body: "Your penalties and interest are pre-2026 and therefore waivable in full - but the amnesty's single condition is that the underlying principal tax is paid by 31 December 2026. Miss that date and the penalties snap back permanently. This is the group with the most to lose: the waiver is large, the deadline is hard, and payment plans exist precisely for this situation.",
    actions: [
      "Pull your iTax ledger and separate principal from penalties/interest - you pay only the principal column.",
      "If the principal is large, ask KRA about a payment plan structured to complete before 31 December.",
      "Pay via Paybill 572572 with the correct payment slip/registration details - mis-coded payments are a recovery nightmare.",
      "After the final payment, verify the penalties show waived on the ledger before year-end.",
    ],
    cta: { label: "Amnesty payment steps (full guide)", href: "/resources/kra-tax-amnesty-2026/" },
  },
  "r-2026-charges": {
    heading: "These charges are outside the amnesty window",
    verdict: "no",
    body: "The 2026 amnesty covers penalties, interest and fines on liabilities accrued up to 31 December 2025. Charges arising from 2026 events - late filings in 2026, 2026 audits, eTIMS penalties from this year - are not covered. For those, the ordinary penalty waiver route (reasonable cause, prompt compliance) still exists, and stopping the charges from growing is the first job.",
    actions: [
      "Get current: file any outstanding 2026 returns to stop new late-filing penalties accruing.",
      "For 2026 charges, apply for a conventional waiver citing reasonable cause where one exists.",
      "Set up the 20th-of-the-month filing rhythm so no new penalties join the pile.",
      "Recheck your ledger split between pre-2026 and 2026 charges - anything pre-2026 still qualifies for the amnesty separately.",
    ],
    cta: { label: "Penalty waiver guide", href: "/resources/kra-penalty-for-late-vat-filing/" },
  },
  "r-none": {
    heading: "Nothing to waive - you're already clean",
    verdict: "no",
    body: "No pre-2026 penalties or interest are showing on your account, so there is nothing for the amnesty to wipe. That is the best possible position. The value of this check is now preventive: the same ledger that shows you clean today is what a tender, a TCC application, or an investor will look at tomorrow.",
    actions: [
      "Keep the 20th-of-the-month filing rhythm for VAT and the 9th for PAYE where applicable.",
      "Diary the amnesty's 31 December 2026 close for any business partners or friends who aren't as clean.",
      "Pull a Tax Compliance Certificate while your ledger is clear - it's the receipt for being compliant.",
      "Sign up for deadline reminders so this stays true through the rest of 2026.",
    ],
    cta: { label: "Get deadline reminders", href: "/tax-deadlines/" },
  },
}

const VERDICT_STYLES = {
  qualifies: { badge: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400", label: "Likely eligible", icon: SealCheck },
  action: { badge: "bg-amber-500/15 text-amber-700 dark:text-amber-400", label: "Eligible with conditions", icon: WarningCircle },
  no: { badge: "bg-ink/10 text-ink-muted", label: "Not covered", icon: WarningCircle },
} as const

export default function AmnestyCheckerTool() {
  const [step, setStep] = useState<Step>("start")
  const [history, setHistory] = useState<Step[]>([])

  function go(next: Step) {
    setHistory((h) => [...h, step])
    setStep(next)
  }
  function back() {
    setHistory((h) => {
      const nh = [...h]
      const prev = nh.pop()
      if (prev) setStep(prev)
      return nh
    })
  }
  function restart() {
    setHistory([])
    setStep("start")
  }

  const result = RESULTS[step]
  const isResult = step.startsWith("r-")

  return (
    <div className="bg-canvas min-h-[100dvh]">
      <div className="bg-canvas-dark px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-canvas/60 mb-4">Free check - nothing is submitted to KRA</p>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            KRA Tax Amnesty Eligibility Check - Do You Qualify Before Dec 31?
          </h1>
          <p className="text-[0.95rem] text-canvas/70 max-w-[60ch] leading-relaxed">
            The 2026 amnesty waives 100% of penalties, interest and fines on pre-2026 liabilities - but only if you meet its
            conditions by 31 December 2026. Four questions to know where you stand.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 gap-4 lg:gap-10 items-start">
          <section aria-label="Amnesty eligibility questions" aria-live="polite">
            <div className="border border-hairline rounded-xl overflow-hidden bg-canvas">
              <div className="flex items-center justify-between gap-3 px-5 py-3.5 bg-canvas-alt border-b border-hairline">
                <p className="font-mono text-[0.62rem] uppercase tracking-widest text-ink-muted">
                  {isResult ? "Result" : `Question ${history.length + 1} of 4`}
                </p>
                <div className="flex items-center gap-2">
                  {history.length > 0 && (
                    <button onClick={back} className="inline-flex items-center gap-1.5 text-[0.75rem] font-medium text-ink-muted hover:text-ink transition-colors min-h-[36px] px-2">
                      <ArrowLeft size={12} aria-hidden="true" /> Back
                    </button>
                  )}
                  <button onClick={restart} className="inline-flex items-center gap-1.5 text-[0.75rem] font-medium text-ink-muted hover:text-ink transition-colors min-h-[36px] px-2">
                    <ArrowCounterClockwise size={12} aria-hidden="true" /> Restart
                  </button>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                {step === "q1-penalties" && (
                  <Question
                    text="Does your iTax ledger show KRA penalties, interest or fines?"
                    hint="Check iTax > Payments > Ledger. Include late-filing penalties, late-payment interest, and eTIMS fines."
                    options={[
                      { label: "Yes - penalties are showing", next: "q2-when" },
                      { label: "No - my ledger is clear", next: "r-none" },
                    ]}
                    onChoose={go}
                  />
                )}
                {step === "q2-when" && (
                  <Question
                    text="When were those penalties and the underlying liabilities charged?"
                    hint="The amnesty covers liabilities accrued up to 31 December 2025. Charges from 2026 events are outside it."
                    options={[
                      { label: "All before 2026 (2025 and earlier)", next: "q3-principal" },
                      { label: "All in 2026", next: "r-2026-charges" },
                      { label: "A mix of both", next: "q3-principal" },
                    ]}
                    onChoose={go}
                  />
                )}
                {step === "q3-principal" && (
                  <Question
                    text="Has the underlying principal tax been fully paid?"
                    hint="Principal = the tax itself, before penalties and interest. The amnesty wipes penalties only if principal is settled by 31 Dec 2026."
                    options={[
                      { label: "Yes, principal fully paid", next: "q4-returns" },
                      { label: "No, principal still outstanding", next: "r-pay-principal" },
                      { label: "There was never any principal - just late-filing penalties", next: "q4-returns" },
                    ]}
                    onChoose={go}
                  />
                )}
                {step === "q4-returns" && (
                  <Question
                    text="Are all the related returns filed?"
                    hint="Unfiled returns block the waiver from finalising - filing them is part of the amnesty path."
                    options={[
                      { label: "Yes, all filed", next: "r-automatic" },
                      { label: "No - some returns are still outstanding", next: "r-file-returns" },
                    ]}
                    onChoose={go}
                  />
                )}

                {isResult && result && (
                  <div>
                    <div className="flex items-center gap-2.5 mb-3">
                      {(() => {
                        const v = VERDICT_STYLES[result.verdict]
                        return (
                          <span className={`inline-flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-widest px-2.5 py-1 rounded-sm ${v.badge}`}>
                            <v.icon size={11} weight="fill" aria-hidden="true" />
                            {v.label}
                          </span>
                        )
                      })()}
                    </div>
                    <p className="font-display text-[1.15rem] font-semibold text-ink mb-3">{result.heading}</p>
                    <p className="text-[0.88rem] text-ink-soft leading-relaxed mb-5">{result.body}</p>
                    <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-muted mb-3">Your next steps</p>
                    <ol className="space-y-2.5 mb-6" role="list">
                      {result.actions.map((a, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="font-mono text-[0.68rem] font-semibold text-canvas bg-brand min-w-5.5 h-5.5 px-1.5 rounded-full flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                          <span className="text-[0.85rem] text-ink-soft leading-relaxed">{a}</span>
                        </li>
                      ))}
                    </ol>
                    {result.cta && (
                      <a
                        href={result.cta.href}
                        target={result.cta.whatsapp ? "_blank" : undefined}
                        rel={result.cta.whatsapp ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-[0.85rem] px-4 py-2.5 rounded-md hover:bg-brand-hover transition-colors min-h-[44px]"
                      >
                        {result.cta.label}
                        <ArrowRight size={12} weight="bold" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
            <p className="text-[0.72rem] text-ink-muted/70 mt-3 leading-relaxed">
              Eligibility logic per the 2026 Tax Amnesty Programme: 100% waiver of penalties, interest and fines on liabilities accrued up to 31 Dec 2025, principal settled by 31 Dec 2026. This check is guidance, not a KRA determination.
            </p>
          </section>

          <section aria-labelledby="amnesty-side-heading">
            <h2 id="amnesty-side-heading" className="font-display text-[1rem] font-semibold text-ink mb-5">The amnesty in one view</h2>
            <div className="space-y-3">
              {[
                { t: "What is wiped", d: "100% of penalties, interest and fines on liabilities accrued up to 31 December 2025." },
                { t: "The one condition", d: "The principal tax (if any) must be settled by 31 December 2026 - the window does not reopen." },
                { t: "Who it misses", d: "Charges arising from 2026 events - this year's late filings, 2026 audits, current eTIMS penalties." },
                { t: "The cleanest cases", d: "Principal already paid, or penalties-only with no principal: the waiver finalises automatically once returns are filed." },
              ].map(({ t, d }) => (
                <div key={t} className="border border-hairline rounded-lg p-4 bg-canvas">
                  <p className="font-semibold text-ink text-[0.88rem] mb-1">{t}</p>
                  <p className="text-[0.8rem] text-ink-muted leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 border border-brand/20 bg-brand-muted rounded-lg p-5">
              <p className="font-semibold text-ink text-[0.9rem] mb-1.5">Want the ledger read for you?</p>
              <p className="text-[0.8rem] text-ink-muted leading-relaxed mb-3">
                The check above tells you where you stand. A KRA-registered agent can pull the full picture and structure the cleanup - penalty waiver applications included.
              </p>
              <a
                href="https://wa.me/254717344440?text=Hi%2C%20I%20ran%20the%20amnesty%20eligibility%20check%20and%20want%20help%20with%20the%20cleanup."
                target="_blank" rel="noopener noreferrer"
                data-track="whatsapp-cta" data-cta-type="amnesty-cleanup" data-service="Penalty Waiver"
                className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-[0.85rem] px-4 py-2.5 rounded-md hover:bg-brand-hover transition-colors min-h-[44px]"
              >
                Discuss the cleanup
                <ArrowRight size={12} weight="bold" aria-hidden="true" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

function Question({ text, hint, options, onChoose }: { text: string; hint?: string; options: { label: string; next: Step }[]; onChoose: (next: Step) => void }) {
  return (
    <>
      <p className="font-display text-[1.05rem] font-semibold text-ink mb-1.5">{text}</p>
      {hint && <p className="text-[0.8rem] text-ink-muted mb-4">{hint}</p>}
      <div className="space-y-2.5" role="list">
        {options.map((opt) => (
          <button
            key={opt.next + opt.label}
            onClick={() => onChoose(opt.next)}
            className="w-full text-left border border-hairline rounded-lg px-4 py-3.5 min-h-[52px] text-[0.88rem] font-medium text-ink hover:border-brand/40 hover:bg-brand-muted/40 transition-colors active:scale-[0.99] flex items-center justify-between gap-3"
          >
            {opt.label}
            <ArrowRight size={13} weight="bold" className="text-brand shrink-0" aria-hidden="true" />
          </button>
        ))}
      </div>
    </>
  )
}
