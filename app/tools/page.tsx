"use client"

import { useState } from "react"
import { ArrowRight, Calculator, Info, WarningCircle, Question, CheckCircle, Wrench, ClipboardText } from "@phosphor-icons/react/dist/ssr"

const WA_BASE = "https://wa.me/254721725958"

type RateType = "standard" | "zero" | "exempt"
type Direction = "add" | "extract"

function formatKES(n: number) {
  return "KES " + n.toLocaleString("en-KE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

// ── Penalty Waiver ─────────────────────────────────────────

const waiverReasons = [
  { value: "system", label: "iTax system error / portal down" },
  { value: "forgot", label: "Missed the deadline (overlooked)" },
  { value: "illness", label: "Illness or medical emergency" },
  { value: "business", label: "Business closure / travel" },
  { value: "new", label: "Recently registered, did not know process" },
  { value: "nil", label: "Filed nil, thought no penalty applied" },
  { value: "agent", label: "Accountant/agent filed late" },
  { value: "first", label: "First time late, never penalised before" },
]

// ── iTax Errors ────────────────────────────────────────────

const iTaxErrors = [
  {
    id: "login",
    title: "\"Invalid PIN or Password\"",
    cause: "Caps Lock is on, wrong PIN format (spaces), or incorrect password.",
    fix: "Check Caps Lock. Enter KRA PIN without spaces (A-format with hyphen is fine). Use 'Forgot Password' to reset. If reset email does not arrive, your email on KRA profile may be outdated.",
  },
  {
    id: "timeout",
    title: "System Timeout / Session Expired",
    cause: "iTax has a short session timeout. Also common on slow 3G connections or older browsers.",
    fix: "Use Google Chrome 120+ or Edge 120+. Ensure stable 4G or WiFi. Clear browser cache. Log in during off-peak hours (before 9 AM or after 5 PM). Refresh and retry.",
  },
  {
    id: "error500",
    title: "Page Not Loading / Error 500 / Gateway Timeout",
    cause: "KRA server is down or under heavy load — common near the 20th deadline.",
    fix: "Wait 30-60 minutes and try again. Check KRA social media (@KRACare) for outage updates. If urgent, contact the KRA call centre. For peace of mind, let Smart VAT Kenya handle your filing so you never deal with this.",
  },
  {
    id: "otp",
    title: "OTP Not Received",
    cause: "SMS delays from mobile networks, or your phone number on KRA profile is wrong.",
    fix: "Wait 5 minutes and try again. Check you have network signal. If still not received, log in to iTax via a desktop and check if email OTP option is available. Update your phone number at a KRA Huduma Centre if needed.",
  },
  {
    id: "forgot",
    title: "Forgot Password / Reset Not Working",
    cause: "Reset email may go to spam. Your registered email may be outdated or deactivated.",
    fix: "Check spam/junk folders. If reset email never arrives, visit a KRA Huduma Centre with your ID to update your email on file. Then reset from the iTax login page.",
  },
  {
    id: "validation",
    title: "Return Validation Failed",
    cause: "Excel download/upload format errors: missing fields, decimal places, wrong date format, or signing certificate not uploaded.",
    fix: "Download a fresh return form from iTax. Fill it out following the exact format. Validate in Excel before upload. For VAT returns, ensure your digital signature (for PAYE > KES 1M) is set up. If errors persist, let Smart VAT Kenya handle it.",
  },
  {
    id: "already",
    title: "\"Return Already Submitted\"",
    cause: "You or someone else on your account already submitted the return for this period.",
    fix: "Go to 'Returns' > 'Return History' to confirm. If you need to correct it, select 'Amend Return' (within 6 months). If the wrong period was filed, contact KRA support.",
  },
  {
    id: "browser",
    title: "Browser Compatibility Warning",
    cause: "iTax works best on Chrome 120+ and Edge 120+. Firefox and Safari have intermittent issues.",
    fix: "Switch to Chrome or Edge. Clear browser cache. Enable cookies and JavaScript. Disable ad-blockers for the iTax domain.",
  },
  {
    id: "etims-login",
    title: "eTIMS / iTax Login Confusion",
    cause: "eTIMS and iTax use separate passwords even though both use your KRA PIN.",
    fix: "For iTax: go to itax.kra.go.ke and use your iTax password. For eTIMS: go to etims.kra.go.ke and use the password you set during eTIMS registration. They are different. Use 'Forgot Password' on each separately.",
  },
  {
    id: "locked",
    title: "KRA PIN / Account Locked",
    cause: "Multiple failed login attempts (usually 5+) trigger an automatic lockout.",
    fix: "Wait 1 hour for automatic unlock. If still locked, contact KRA via Huduma Centre or call the KRA call centre at +254 20 310 900. You cannot unlock it online.",
  },
]

// ── Quiz ──────────────────────────────────────────────────

type QuizStep =
  | "turnover"
  | "digital"
  | "income_tax"
  | "etims"
  | "sector"
  | "result_required"
  | "result_optional"
  | "result_recommended"

const quizQuestions: Record<string, { question: string; yes: QuizStep; no: QuizStep }> = {
  turnover: {
    question: "Does your business have annual taxable turnover of KES 5 million or more?",
    yes: "result_required",
    no: "digital",
  },
  digital: {
    question: "Do you supply digital services, content, or broadcasts to Kenyan customers?",
    yes: "result_required",
    no: "income_tax",
  },
  income_tax: {
    question: "Is your business already registered for income tax (do you have a KRA PIN with a business obligation)?",
    yes: "sector",
    no: "result_optional",
  },
  etims: {
    question: "Do you sell to VAT-registered businesses that require eTIMS invoices for their input VAT claims?",
    yes: "result_recommended",
    no: "income_tax",
  },
  sector: {
    question: "Are you in retail, wholesale, manufacturing, or professional services?",
    yes: "result_recommended",
    no: "etims",
  },
}

export default function ToolsPage() {
  // ── VAT Calculator ────────────────────────────────────────
  const [amount, setAmount] = useState("")
  const [rateType, setRateType] = useState<RateType>("standard")
  const [direction, setDirection] = useState<Direction>("add")

  const base = parseFloat(amount.replace(/,/g, "")) || 0
  const vatAmount =
    rateType === "standard"
      ? direction === "add"
        ? base * 0.16
        : base - base / 1.16
      : 0
  const net = direction === "add" ? base : base / 1.16
  const gross = direction === "add" ? base + vatAmount : base

  // ── Penalty Waiver Wizard ─────────────────────────────────
  const [taxDue, setTaxDue] = useState("")
  const [monthsLate, setMonthsLate] = useState("1")
  const [waiverReason, setWaiverReason] = useState("system")
  const [wizStep, setWizStep] = useState<"calculate" | "reason" | "result">("calculate")

  const taxDueNum = parseFloat(taxDue.replace(/,/g, "")) || 0
  const months = parseInt(monthsLate, 10) || 1
  const fixedPenalty = 10000
  const lateFee = Math.max(taxDueNum * 0.05, 0)
  const interest = taxDueNum * 0.01 * months
  const totalPenalty = fixedPenalty + lateFee + interest

  const reasonLabel = waiverReasons.find((r) => r.value === waiverReason)?.label || ""
  const waPenaltyText = encodeURIComponent(
    `Hi, I have KRA VAT penalties of approx KES ${Math.round(totalPenalty).toLocaleString()}. I need help with a penalty waiver. Reason: ${reasonLabel}. Tax due: KES ${taxDueNum.toLocaleString()}, ${months} month(s) late.`
  )

  // ── iTax Error Diagnosis ──────────────────────────────────
  const [selectedError, setSelectedError] = useState<string>("")

  const errorDetail = iTaxErrors.find((e) => e.id === selectedError)

  // ── Quiz ──────────────────────────────────────────────────
  const [quizStep, setQuizStep] = useState<QuizStep | "start">("start")

  function handleQuizAnswer(step: string, answer: "yes" | "no") {
    const q = quizQuestions[step]
    if (q) setQuizStep(q[answer])
  }

  const resultLabels: Record<string, { label: string; color: string; message: string; cta: string }> = {
    result_required: {
      label: "Required",
      color: "text-brand",
      message:
        "Based on your answers, VAT registration is mandatory for your business under KRA rules. You must register on iTax as soon as possible to avoid the KES 100,000 non-registration penalty.",
      cta: "Register Now — KES 5,000",
    },
    result_recommended: {
      label: "Strongly Recommended",
      color: "text-[#b07a00]",
      message:
        "You may be below the KES 5 million threshold, but as a registered business you can voluntarily register to claim input VAT. KRA is also expanding mandatory registration — and if you sell to VAT-registered clients, they need eTIMS invoices from you. Early registration is advisable.",
      cta: "Ask us about voluntary registration",
    },
    result_optional: {
      label: "Optional for Now",
      color: "text-ink-muted",
      message:
        "You may not yet be required to register for VAT. However, monitor your turnover. If you approach KES 5 million, or if KRA expands mandatory registration, you will need to comply. Consider getting a KRA PIN first if you do not have one.",
      cta: "Ask us a question",
    },
  }

  return (
    <div className="bg-canvas min-h-[100dvh]">
      {/* Page header */}
      <div className="bg-canvas-dark px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-canvas/60 mb-4">
            Free tools — no sign-up required
          </p>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            Kenya VAT Calculator, Penalty Waiver Wizard &amp; iTax Error Guide
          </h1>
          <p className="text-[0.95rem] text-canvas/70 max-w-[60ch] leading-relaxed">
            Kenya VAT standard rate 16% (2026). Calculate VAT, estimate penalties with waiver guidance,
            diagnose iTax portal errors, and check if your business must register for VAT.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* ── Tool 1: VAT Calculator ────────────────────── */}
          <section aria-labelledby="vat-calc-heading">
            <div className="flex items-center gap-2.5 mb-6">
              <Calculator size={17} weight="duotone" className="text-brand" aria-hidden="true" />
              <h2 id="vat-calc-heading" className="font-display text-[1rem] font-semibold text-ink">
                Kenya VAT Calculator 2026 — 16% Standard Rate
              </h2>
            </div>

            <div className="border border-hairline rounded-lg overflow-hidden divide-y divide-hairline">
              <div className="p-5">
                <label htmlFor="amount" className="block text-[0.78rem] font-medium text-ink-muted mb-2">
                  Amount (KES)
                </label>
                <input
                  id="amount"
                  type="text"
                  inputMode="decimal"
                  placeholder="50,000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full font-display text-[1.6rem] font-semibold text-ink bg-transparent focus:outline-none placeholder:text-ink-muted/30 placeholder:font-normal placeholder:text-xl"
                />
              </div>
              <div className="p-5">
                <p className="text-[0.78rem] font-medium text-ink-muted mb-3">KRA VAT Rate</p>
                <div className="flex flex-wrap gap-2">
                  {([{ value: "standard", label: "Standard 16%" }, { value: "zero", label: "Zero-rated 0%" }, { value: "exempt", label: "Exempt" }] as { value: RateType; label: string }[]).map((r) => (
                    <button
                      key={r.value}
                      onClick={() => setRateType(r.value)}
                      className={`px-3 py-1.5 rounded-md text-[0.78rem] font-medium border transition-colors active:scale-[0.98] ${
                        rateType === r.value ? "bg-ink text-canvas border-ink" : "border-hairline text-ink-muted hover:border-ink-muted hover:text-ink"
                      }`}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="p-5">
                <p className="text-[0.78rem] font-medium text-ink-muted mb-3">Calculate</p>
                <div className="flex gap-2 flex-wrap">
                  {([{ value: "add", label: "Add VAT to amount" }, { value: "extract", label: "Extract VAT from total (reverse)" }] as { value: Direction; label: string }[]).map((d) => (
                    <button
                      key={d.value}
                      onClick={() => setDirection(d.value)}
                      className={`px-3 py-1.5 rounded-md text-[0.78rem] font-medium border transition-colors active:scale-[0.98] ${
                        direction === d.value ? "bg-ink text-canvas border-ink" : "border-hairline text-ink-muted hover:border-ink-muted hover:text-ink"
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="p-5 bg-canvas-alt">
                {rateType === "exempt" ? (
                  <div className="flex items-start gap-2.5 text-[0.82rem] text-ink-muted">
                    <Info size={14} className="shrink-0 mt-0.5" aria-hidden="true" />
                    Exempt supplies carry no VAT charge and do not qualify for input VAT credit.
                  </div>
                ) : rateType === "zero" ? (
                  <div className="flex items-start gap-2.5 text-[0.82rem] text-ink-muted">
                    <Info size={14} className="shrink-0 mt-0.5" aria-hidden="true" />
                    Zero-rated at 0% — VAT is charged but at nil. Input VAT is still claimable.
                  </div>
                ) : (
                  <dl className="space-y-3">
                    <div className="flex items-baseline justify-between">
                      <dt className="text-[0.78rem] text-ink-muted">{direction === "add" ? "Net (excl. VAT)" : "Net extracted"}</dt>
                      <dd className="font-mono text-[0.88rem] text-ink tabular-nums">{formatKES(net)}</dd>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <dt className="text-[0.78rem] text-ink-muted">VAT @ 16%</dt>
                      <dd className="font-mono text-[0.88rem] text-brand tabular-nums">+ {formatKES(vatAmount)}</dd>
                    </div>
                    <div className="flex items-baseline justify-between border-t border-hairline pt-3">
                      <dt className="text-[0.82rem] font-semibold text-ink">{direction === "add" ? "Total (incl. VAT)" : "Original total"}</dt>
                      <dd className="font-display text-[1.25rem] font-semibold text-ink tabular-nums">{formatKES(gross)}</dd>
                    </div>
                  </dl>
                )}
              </div>
            </div>

            <p className="mt-3 text-[0.72rem] text-ink-muted leading-relaxed flex items-start gap-1.5">
              <Info size={12} className="shrink-0 mt-0.5" aria-hidden="true" />
              Kenya VAT standard rate is 16% (KRA 2026). For indicative purposes only.
              <a href={`${WA_BASE}?text=Hi%2C%20I%20want%20to%20get%20started%20with%20VAT%20registration%20or%20filing.`} target="_blank" rel="noopener noreferrer" className="ml-1 text-brand underline underline-offset-2 hover:text-brand-hover">Need help filing?</a>
            </p>
          </section>

          {/* ── Tool 2: Penalty Waiver Wizard ──────────────── */}
          <section aria-labelledby="penalty-heading">
            <div className="flex items-center gap-2.5 mb-6">
              <WarningCircle size={17} weight="duotone" className="text-brand" aria-hidden="true" />
              <h2 id="penalty-heading" className="font-display text-[1rem] font-semibold text-ink">
                KRA Penalty Waiver Wizard
              </h2>
            </div>

            <div className="border border-hairline rounded-lg overflow-hidden divide-y divide-hairline">
              {wizStep === "calculate" && (
                <>
                  <div className="p-5">
                    <label htmlFor="taxdue" className="block text-[0.78rem] font-medium text-ink-muted mb-2">
                      VAT liability for the period (KES)
                    </label>
                    <input
                      id="taxdue"
                      type="text"
                      inputMode="decimal"
                      placeholder="80,000"
                      value={taxDue}
                      onChange={(e) => setTaxDue(e.target.value)}
                      className="w-full font-display text-[1.6rem] font-semibold text-ink bg-transparent focus:outline-none placeholder:text-ink-muted/30 placeholder:font-normal placeholder:text-xl"
                    />
                  </div>
                  <div className="p-5">
                    <label htmlFor="months" className="flex items-baseline justify-between text-[0.78rem] font-medium text-ink-muted mb-3">
                      <span>Months overdue</span>
                      <span className="font-display text-[1rem] font-semibold text-ink tabular-nums">{months}</span>
                    </label>
                    <input id="months" type="range" min="1" max="24" value={monthsLate} onChange={(e) => setMonthsLate(e.target.value)} className="w-full accent-brand" />
                    <div className="flex justify-between text-[0.7rem] text-ink-muted mt-1.5"><span>1 month</span><span>24 months</span></div>
                  </div>
                  <div className="p-5 bg-canvas-alt">
                    <dl className="space-y-3">
                      <div className="flex items-baseline justify-between">
                        <dt className="text-[0.78rem] text-ink-muted">Fixed late-filing penalty</dt>
                        <dd className="font-mono text-[0.88rem] text-ink tabular-nums">{formatKES(fixedPenalty)}</dd>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <dt className="text-[0.78rem] text-ink-muted">5% of tax due</dt>
                        <dd className="font-mono text-[0.88rem] text-ink tabular-nums">{formatKES(lateFee)}</dd>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <dt className="text-[0.78rem] text-ink-muted">Interest (1%/month &times; {months})</dt>
                        <dd className="font-mono text-[0.88rem] text-ink tabular-nums">{formatKES(interest)}</dd>
                      </div>
                      <div className="flex items-baseline justify-between border-t border-hairline pt-3">
                        <dt className="text-[0.82rem] font-semibold text-brand">Estimated total penalties</dt>
                        <dd className="font-display text-[1.25rem] font-semibold text-brand tabular-nums">{formatKES(totalPenalty)}</dd>
                      </div>
                    </dl>
                    {totalPenalty > 10000 && (
                      <button
                        onClick={() => setWizStep("reason")}
                        className="btn-fill mt-5 w-full flex items-center justify-center gap-2 bg-ink text-canvas text-[0.82rem] font-semibold py-3 rounded-md hover:bg-canvas-dark transition-colors"
                      >
                        Next: Tell us why
                        <ArrowRight size={13} weight="bold" aria-hidden="true" />
                      </button>
                    )}
                  </div>
                </>
              )}

              {wizStep === "reason" && (
                <>
                  <div className="p-5">
                    <p className="text-[0.78rem] font-medium text-ink-muted mb-2">Why was the return filed late?</p>
                    <p className="text-[0.85rem] text-ink-soft mb-4">KRA considers your reason when reviewing waiver applications. Pick the closest option.</p>
                    <div className="space-y-2">
                      {waiverReasons.map((r) => (
                        <label
                          key={r.value}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-md border text-[0.85rem] cursor-pointer transition-colors ${
                            waiverReason === r.value ? "border-ink bg-ink/5 text-ink font-medium" : "border-hairline text-ink-muted hover:border-ink-muted"
                          }`}
                        >
                          <input
                            type="radio"
                            name="waiverReason"
                            value={r.value}
                            checked={waiverReason === r.value}
                            onChange={(e) => setWaiverReason(e.target.value)}
                            className="accent-brand"
                          />
                          {r.label}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="p-5 bg-canvas-alt flex flex-col gap-3">
                    <button
                      onClick={() => setWizStep("result")}
                      className="btn-fill w-full flex items-center justify-center gap-2 bg-brand text-canvas text-[0.82rem] font-semibold py-3 rounded-md hover:bg-brand-hover transition-colors"
                    >
                      Generate waiver request
                      <ArrowRight size={13} weight="bold" aria-hidden="true" />
                    </button>
                    <button
                      onClick={() => setWizStep("calculate")}
                      className="text-[0.75rem] text-ink-muted hover:text-ink transition-colors text-center"
                    >
                      Back to calculation
                    </button>
                  </div>
                </>
              )}

              {wizStep === "result" && (
                <div className="p-5 bg-canvas-alt">
                  <div className="flex items-start gap-2.5 mb-4">
                    <CheckCircle size={18} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="text-[0.88rem] font-semibold text-ink mb-1">Your waiver summary</p>
                      <p className="text-[0.78rem] text-ink-muted">Review your details below, then message us on WhatsApp to proceed.</p>
                    </div>
                  </div>
                  <div className="bg-canvas border border-hairline rounded-lg p-4 space-y-2 text-[0.8rem] mb-4">
                    <div className="flex justify-between"><span className="text-ink-muted">Total penalty</span><span className="font-semibold text-ink tabular-nums">{formatKES(totalPenalty)}</span></div>
                    <div className="flex justify-between"><span className="text-ink-muted">Tax due</span><span className="text-ink tabular-nums">{formatKES(taxDueNum)}</span></div>
                    <div className="flex justify-between"><span className="text-ink-muted">Months late</span><span className="text-ink tabular-nums">{months}</span></div>
                    <div className="flex justify-between"><span className="text-ink-muted">Reason</span><span className="text-ink text-right max-w-[200px]">{reasonLabel}</span></div>
                  </div>
                  <a
                    href={`${WA_BASE}?text=${waPenaltyText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-fill w-full flex items-center justify-center gap-2 bg-brand text-canvas text-[0.82rem] font-semibold py-3 rounded-md hover:bg-brand-hover transition-colors"
                  >
                    Send to WhatsApp — KES 4,000
                    <ArrowRight size={13} weight="bold" aria-hidden="true" />
                  </a>
                  <button
                    onClick={() => { setWizStep("calculate"); setTaxDue(""); setMonthsLate("1"); }}
                    className="mt-3 w-full text-[0.72rem] text-ink-muted hover:text-ink transition-colors text-center"
                  >
                    Start over
                  </button>
                </div>
              )}
            </div>

            <p className="mt-3 text-[0.72rem] text-ink-muted leading-relaxed flex items-start gap-1.5">
              <Info size={12} className="shrink-0 mt-0.5" aria-hidden="true" />
              KES 10,000 fixed penalty + 5% of tax + 1%/month interest (KRA 2026). KRA considers each waiver on its merits.
            </p>
          </section>
        </div>

        {/* ── Tool 3: iTax Error Diagnosis ──────────────────── */}
        <section className="mt-14 border-t border-hairline pt-12" aria-labelledby="error-heading">
          <div className="flex items-center gap-2.5 mb-6">
            <Wrench size={17} weight="duotone" className="text-brand" aria-hidden="true" />
            <h2 id="error-heading" className="font-display text-[1rem] font-semibold text-ink">
              iTax Portal Error Diagnosis — What is Happening and How to Fix It
            </h2>
          </div>
          <div className="border border-hairline rounded-lg overflow-hidden max-w-3xl">
            <div className="p-5">
              <label htmlFor="error-select" className="block text-[0.78rem] font-medium text-ink-muted mb-3">
                Select your iTax error:
              </label>
              <select
                id="error-select"
                value={selectedError}
                onChange={(e) => setSelectedError(e.target.value)}
                className="w-full border border-hairline rounded-md px-4 py-3 text-[0.88rem] text-ink bg-canvas focus:outline-none focus:border-ink transition-colors"
              >
                <option value="">Choose an error...</option>
                {iTaxErrors.map((e) => (
                  <option key={e.id} value={e.id}>{e.title}</option>
                ))}
              </select>
            </div>

            {errorDetail && (
              <div className="p-5 bg-canvas-alt border-t border-hairline">
                <h3 className="font-display text-[0.95rem] font-semibold text-ink mb-3">{errorDetail.title}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-muted mb-1.5">Why it happens</p>
                    <p className="text-[0.85rem] text-ink-soft leading-relaxed">{errorDetail.cause}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-1.5">How to fix it</p>
                    <p className="text-[0.85rem] text-ink leading-relaxed">{errorDetail.fix}</p>
                  </div>
                  <a
                    href={`${WA_BASE}?text=Hi%2C%20I%27m%20getting%20the%20following%20iTax%20error%3A%20${encodeURIComponent(errorDetail.title)}.%20Can%20you%20help%20me%20file%20my%20VAT%20return%20so%20I%20don%27t%20have%20to%20deal%20with%20this%3F`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-fill inline-flex items-center gap-2 bg-brand text-canvas text-[0.82rem] font-semibold px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
                  >
                    Let us file for you instead — KES 3,500/month
                    <ArrowRight size={13} weight="bold" aria-hidden="true" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── Tool 4: Am I Required Quiz ───────────────────── */}
        <section className="mt-14 border-t border-hairline pt-12" aria-labelledby="quiz-heading">
          <div className="flex items-center gap-2.5 mb-6">
            <Question size={17} weight="duotone" className="text-brand" aria-hidden="true" />
            <h2 id="quiz-heading" className="font-display text-[1rem] font-semibold text-ink">
              Am I Required to Register for VAT in Kenya?
            </h2>
          </div>

          <div className="border border-hairline rounded-lg overflow-hidden max-w-2xl">
            {quizStep === "start" && (
              <div className="p-7 flex flex-col items-start gap-5">
                <p className="text-[0.88rem] text-ink-muted leading-relaxed max-w-prose">
                  Answer 4-5 quick questions to find out whether VAT registration is mandatory,
                  recommended, or optional for your Kenyan business. Includes eTIMS compliance check.
                </p>
                <button
                  onClick={() => setQuizStep("turnover")}
                  className="btn-fill inline-flex items-center gap-2 bg-ink text-canvas text-sm font-semibold px-5 py-3 rounded-md hover:bg-canvas-dark transition-colors"
                >
                  Start the quiz
                  <ArrowRight size={14} weight="bold" aria-hidden="true" />
                </button>
              </div>
            )}

            {(quizStep === "turnover" || quizStep === "digital" || quizStep === "income_tax" || quizStep === "sector" || quizStep === "etims") && (
              <div className="p-7">
                <p className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-muted mb-3">
                  Question {["turnover", "digital", "income_tax", "sector", "etims"].indexOf(quizStep) + 1} of 5
                </p>
                <p className="font-display text-[0.95rem] font-semibold text-ink mb-6 leading-snug max-w-prose">
                  {quizQuestions[quizStep].question}
                </p>
                <div className="flex gap-3">
                  <button onClick={() => handleQuizAnswer(quizStep, "yes")} className="btn-fill px-6 py-2.5 rounded-md bg-ink text-canvas text-sm font-semibold hover:bg-canvas-dark transition-colors">Yes</button>
                  <button onClick={() => handleQuizAnswer(quizStep, "no")} className="px-6 py-2.5 rounded-md border border-hairline text-ink text-sm font-medium hover:border-ink-muted transition-colors">No</button>
                </div>
                <button onClick={() => setQuizStep("start")} className="mt-5 text-[0.75rem] text-ink-muted hover:text-ink transition-colors">Start over</button>
              </div>
            )}

            {(quizStep === "result_required" || quizStep === "result_optional" || quizStep === "result_recommended") && (
              <div className="p-7">
                <p className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-muted mb-3">Your result</p>
                <p className={`font-display text-[1.3rem] font-semibold mb-4 ${resultLabels[quizStep].color}`}>
                  VAT Registration: {resultLabels[quizStep].label}
                </p>
                <p className="text-[0.88rem] text-ink-muted leading-relaxed max-w-prose mb-6">{resultLabels[quizStep].message}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`${WA_BASE}?text=Hi%2C%20I%20used%20the%20VAT%20quiz%20and%20got%20${encodeURIComponent(resultLabels[quizStep].label)}.%20Can%20you%20help%20me%3F`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-fill inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
                  >
                    {resultLabels[quizStep].cta}
                    <ArrowRight size={14} weight="bold" aria-hidden="true" />
                  </a>
                  <button onClick={() => setQuizStep("start")} className="inline-flex items-center gap-2 border border-hairline text-ink-muted text-sm font-medium px-5 py-3 rounded-md hover:border-ink-muted hover:text-ink transition-colors">Start over</button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── Resources ────────────────────────────────────── */}
        <section className="mt-14 border-t border-hairline pt-12" aria-labelledby="resources-heading">
          <div className="flex items-center gap-2.5 mb-6">
            <ClipboardText size={17} weight="duotone" className="text-brand" aria-hidden="true" />
            <h2 id="resources-heading" className="font-display text-[1rem] font-semibold text-ink">
              Need More Help? Read Our Free KRA VAT Guides
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/resources/how-to-register-for-vat-in-kenya", label: "How to Register for VAT in Kenya" },
              { href: "/resources/kra-penalty-for-late-vat-filing", label: "KRA Penalty for Late VAT Filing" },
              { href: "/resources/how-to-calculate-vat-in-kenya", label: "How to Calculate 16% VAT in Kenya" },
              { href: "/resources/how-to-file-vat-return-on-itax", label: "How to File VAT Return on iTax" },
              { href: "/resources/do-i-need-to-register-for-vat-kenya", label: "Do I Need to Register for VAT?" },
              { href: "/resources/itax-portal-not-working", label: "iTax Errors — Diagnosis + Fixes" },
              { href: "/resources/etims-onboarding-guide", label: "eTIMS Onboarding Guide 2026" },
              { href: "/resources/vat-vs-turnover-tax", label: "VAT vs Turnover Tax Decision Guide" },
              { href: "/resources/kra-vat-penalties-reference", label: "KRA VAT Penalties Reference Table" },
              { href: "/resources/vat-registration-checklist", label: "VAT Registration Checklist" },
              { href: "/resources/nil-returns-tax-amnesty", label: "Nil Returns & Tax Amnesty Guide" },
              { href: "/resources/vat-for-startups-tech-businesses", label: "VAT for Startups & Tech" },
              { href: "/resources/vat-special-table-risks", label: "KRA VAT Special Table Risks" },
              { href: "/resources/etims-invoicing-guide", label: "eTIMS Compliant Invoice Guide" },
            ].map((r) => (
              <a key={r.href} href={r.href} className="border border-hairline rounded-lg p-4 text-[0.82rem] text-ink-muted hover:text-ink hover:border-ink-muted transition-colors">
                {r.label}
                <ArrowRight size={11} weight="bold" className="inline ml-1" aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="mt-16 border-t border-hairline pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-display text-[1rem] font-semibold text-ink mb-1">
              Want us to handle all of this for you?
            </p>
            <p className="text-[0.85rem] text-ink-muted">
              VAT registration from KES 5,000. Monthly filing from KES 3,500/month. Avoid the KES 10,000 penalty.
            </p>
          </div>
          <a
            href={`${WA_BASE}?text=Hi%2C%20I%20want%20to%20get%20started%20with%20VAT%20registration%20or%20filing.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill shrink-0 inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            Get started on WhatsApp
            <ArrowRight size={14} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  )
}
