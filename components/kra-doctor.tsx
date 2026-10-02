"use client"

import { useState } from "react"
import { ArrowRight, Stethoscope, CheckCircle, WarningCircle, Info } from "@phosphor-icons/react/dist/ssr"
import { WA_PATHS, waDirect } from "@/src/lib/whatsapp"
import { track } from "@/src/lib/analytics"

type Area = "etims" | "itax" | "vat" | "tcc" | "penalty" | "registration" | "unknown"

interface Symptom {
  id: string
  label: string
}

interface Diagnosis {
  title: string
  severity: "now" | "soon" | "check"
  meaning: string
  steps: string[]
  links: { label: string; href: string }[]
  wa?: string
  waMessage?: string
}

const AREAS: { id: Area; label: string; hint: string }[] = [
  { id: "etims", label: "eTIMS", hint: "Invoicing, sync, device" },
  { id: "itax", label: "iTax", hint: "Login, portal, returns" },
  { id: "vat", label: "VAT", hint: "Charging, filing, refunds" },
  { id: "tcc", label: "TCC", hint: "Compliance certificate" },
  { id: "penalty", label: "Penalty", hint: "Fines, interest, amnesty" },
  { id: "registration", label: "Registration", hint: "PIN & obligations" },
  { id: "unknown", label: "Don't know", hint: "Describe it instead" },
]

const SYMPTOMS: Record<Area, Symptom[]> = {
  etims: [
    { id: "etims-new", label: "Not on eTIMS yet" },
    { id: "etims-reject", label: "Invoice rejected / errors" },
    { id: "etims-sync", label: "Stuck on pending sync" },
    { id: "etims-locked", label: "Account / device locked" },
    { id: "etims-penalty", label: "eTIMS penalty notice" },
  ],
  itax: [
    { id: "itax-login", label: "Can't log in" },
    { id: "itax-down", label: "Portal down / error 500" },
    { id: "itax-otp", label: "OTP / email not arriving" },
    { id: "itax-return", label: "Return won't submit" },
  ],
  vat: [
    { id: "vat-notreg", label: "Not registered but turnover is growing" },
    { id: "vat-charge", label: "Unsure what to charge 16% on" },
    { id: "vat-file", label: "Struggling to file the return" },
    { id: "vat-refund", label: "Owed a VAT refund" },
  ],
  tcc: [
    { id: "tcc-expired", label: "TCC expired or expiring" },
    { id: "tcc-rejected", label: "TCC application rejected" },
  ],
  penalty: [
    { id: "pen-late", label: "Late filing / late payment penalty" },
    { id: "pen-amnesty", label: "Want the 2026 amnesty" },
    { id: "pen-shock", label: "Unexpected KRA bill (e.g. KES 70,000)" },
  ],
  registration: [
    { id: "reg-pin", label: "No KRA PIN yet" },
    { id: "reg-pin-broken", label: "PIN exists but not working" },
    { id: "reg-obligation", label: "Wrong / missing obligations" },
  ],
  unknown: [],
}

const DIAGNOSES: Record<string, Diagnosis> = {
  "etims-new": {
    title: "You need to onboard to eTIMS - it takes under a day when done right",
    severity: "soon",
    meaning: "eTIMS is mandatory for VAT-registered businesses. Non-compliance exposes you to a penalty of 2x tax due, with 2026 minimums of KES 100,000 (companies) or KES 10,000 (individuals).",
    steps: ["Pick your eTIMS version (OSCU for desktop/POS, eTims Lite on mobile for small sellers).", "Register the device via the eTIMS portal using your KRA credentials.", "Issue your first test invoice and confirm the QR validates."],
    links: [{ label: "eTIMS onboarding guide", href: "/resources/etims-onboarding-guide/" }, { label: "eTIMS compliance checklist", href: "/resources/etims-compliance-checklist/" }],
    wa: WA_PATHS.doctor,
    waMessage: "I need eTIMS onboarding",
  },
  "etims-reject": {
    title: "Invoice rejections almost always trace to one of five fields",
    severity: "now",
    meaning: "A rejected invoice isn't synced to KRA, so your buyer can't claim input VAT - which strains the relationship and risks penalties if unresolved before filing.",
    steps: ["Check the buyer's PIN is valid and formatted correctly (A000... format).", "Confirm the tax rate and classification code match the supply.", "Re-issue (don't duplicate) if the KRA endpoint returned an error."],
    links: [{ label: "Fix rejected eTIMS invoices", href: "/resources/etims-invoice-rejected/" }, { label: "Buyer PIN missing fix", href: "/resources/etims-buyer-pin-missing/" }],
    wa: WA_PATHS.doctor,
    waMessage: "My eTIMS invoice is being rejected",
  },
  "etims-sync": {
    title: "Pending sync = your invoices exist but KRA hasn't confirmed them",
    severity: "now",
    meaning: "If sync stays pending, invoices aren't legally transmitted. Common causes: unstable connection, wrong gateway settings, or KRA-side backlog during peak periods.",
    steps: ["Confirm stable internet and retry a manual sync from the OSCU tray.", "Do NOT keep issuing invoices on a blocked device - switch to offline invoicing rules.", "If pending >24h, escalate with your control unit ID."],
    links: [{ label: "Pending sync fix", href: "/resources/etims-pending-sync/" }, { label: "Offline invoicing while eTIMS is down", href: "/resources/etims-down-offline-invoicing/" }],
    wa: WA_PATHS.doctor,
    waMessage: "My eTIMS is stuck on pending sync",
  },
  "etims-locked": {
    title: "Locked eTIMS account - recoverable, but stop issuing invoices",
    severity: "now",
    meaning: "Lockouts follow failed logins or device tampering. Invoicing on a locked device triggers the s.59A(5) exposure: KES 100,000/month, capped at KES 1,000,000.",
    steps: ["Stop invoicing on the locked device immediately.", "Reset via 'Forgot Password' on etims.kra.go.ke (separate from iTax password).", "If the device itself is unregistered, re-enrol it."],
    links: [{ label: "eTIMS account locked fix", href: "/resources/etims-account-locked/" }, { label: "Device not registered fix", href: "/resources/etims-device-not-registered/" }],
    wa: WA_PATHS.doctor,
    waMessage: "My eTIMS account is locked",
  },
  "etims-penalty": {
    title: "eTIMS penalties are real - but often waivable",
    severity: "now",
    meaning: "TPA s.86 as amended by Finance Act 2026 sets minimums of KES 100,000 (companies) / KES 10,000 (individuals) for eTIMS non-compliance. Responding early preserves waiver options.",
    steps: ["Confirm the exact section cited on the notice before paying anything.", "File/pay any outstanding principal - waivers work best after compliance.", "Apply for a waiver with a written reason; amnesty may cover pre-2026 debt."],
    links: [{ label: "eTIMS penalty: KES 50K/month explained", href: "/resources/etims-penalty-50000-per-month-kenya/" }, { label: "Tax amnesty 2026", href: "/resources/kra-tax-amnesty-2026/" }],
    wa: WA_PATHS.penalty,
    waMessage: "I received an eTIMS penalty notice",
  },
  "itax-login": {
    title: "iTax login failures have three usual culprits",
    severity: "check",
    meaning: "Most login failures are Caps Lock, stale passwords, or an account locked by repeated attempts - not a KRA problem with your PIN itself.",
    steps: ["Enter your PIN without spaces; check Caps Lock.", "Use 'Forgot Password' and check spam for the reset email.", "Locked accounts auto-unlock after ~1 hour; don't keep retrying."],
    links: [{ label: "iTax portal not working - all fixes", href: "/resources/itax-portal-not-working/" }, { label: "KRA PIN not working", href: "/resources/kra-pin-not-working/" }],
    wa: WA_PATHS.doctor,
    waMessage: "I can't log in to iTax",
  },
  "itax-down": {
    title: "Portal down near the 20th? You're not alone - plan the workaround",
    severity: "check",
    meaning: "iTax degrades under deadline load (error 500s, timeouts). Filing early in the cycle is the only durable fix; outages don't remove the obligation.",
    steps: ["Retry at off-peak hours (before 9 AM or after 5 PM EAT).", "Confirm the outage on KRA's channels before assuming it's you.", "Document your attempts - evidence helps if a late-filing penalty lands unfairly."],
    links: [{ label: "Live KRA system status", href: "/kra-status/" }, { label: "KRA status code 500 fixes", href: "/resources/kra-status-code-500-itax-errors/" }],
    wa: WA_PATHS.filing,
    waMessage: "iTax keeps failing while I try to file",
  },
  "itax-otp": {
    title: "Missing OTP usually means a stale phone or email on file",
    severity: "soon",
    meaning: "OTP codes go to the contact details on your KRA profile. If those are outdated, you're locked out of every confirmation flow until they're corrected.",
    steps: ["Wait 5 minutes, then resend once - SMS gateways lag.", "Check whether email OTP is offered as an alternative.", "Outdated contacts require a Huduma Centre or agent-assisted profile update."],
    links: [{ label: "iTax troubleshooting hub", href: "/resources/itax-portal-not-working/" }],
    wa: WA_PATHS.doctor,
    waMessage: "My iTax OTP is not arriving",
  },
  "itax-return": {
    title: "Return rejection is almost always a format or ledger issue",
    severity: "now",
    meaning: "Validation errors come from the Excel template format, mismatched figures vs your VAT ledger, or auto-populated returns that need a dispute rather than a resubmission.",
    steps: ["Download a fresh template for the period - old forms fail validation.", "Reconcile output/input VAT against your eTIMS invoices before uploading.", "If figures were auto-populated wrongly, dispute instead of amending."],
    links: [{ label: "File VAT return on iTax - step by step", href: "/resources/how-to-file-vat-return-on-itax/" }, { label: "Dispute an auto-populated return", href: "/resources/vat-return-dispute-auto-populated/" }],
    wa: WA_PATHS.filing,
    waMessage: "My VAT return won't submit",
  },
  "vat-notreg": {
    title: "Approaching KES 5M turnover? Registration is mandatory - and the penalty for skipping is steep",
    severity: "soon",
    meaning: "Non-registration carries KES 100,000 per month (TPA s.95). Voluntary registration below the threshold can also make sense if your clients are VAT-registered.",
    steps: ["Check your rolling 12-month turnover against the KES 5M threshold.", "Gather: PIN certificate, business permit/registration docs, bank details.", "File VAT Form 1 on iTax - approval typically takes 1-3 working days."],
    links: [{ label: "Do I need to register for VAT?", href: "/resources/do-i-need-to-register-for-vat-kenya/" }, { label: "Compare all 3 registration options", href: "/resources/vat-registration-options-kenya/" }],
    wa: WA_PATHS.quote,
    waMessage: "I may need VAT registration",
  },
  "vat-charge": {
    title: "16% applies to most taxable supplies - but the edge cases bite",
    severity: "check",
    meaning: "Standard 16% covers most goods/services; some supplies are zero-rated (exportable, certain inputs) and others exempt (no VAT, no input credit). Mislabelling is a top audit finding.",
    steps: ["Classify your top 5 supplies against the VAT Act schedules.", "Zero-rated: still invoice via eTIMS at 0% and keep input credits.", "Exempt: no VAT charged, and input VAT on those costs is not claimable."],
    links: [{ label: "How to calculate VAT in Kenya", href: "/resources/how-to-calculate-vat-in-kenya/" }, { label: "VAT rates reference", href: "/resources/vat-rates-kenya/" }],
  },
  "vat-file": {
    title: "VAT filing is a monthly rhythm - it gets easy with a checklist",
    severity: "soon",
    meaning: "The VAT3 is due by the 20th of the following month. Late filing costs the higher of KES 10,000 or 5% of tax due, plus 1%/month interest.",
    steps: ["Extract output VAT from eTIMS sales; collect input VAT from supplier eTIMS invoices.", "Complete the VAT3 on iTax and validate before the 20th.", "Pay via the KRA payment gateway (M-PESA Paybill 572572) and keep the receipt."],
    links: [{ label: "File VAT return on iTax", href: "/resources/how-to-file-vat-return-on-itax/" }, { label: "VAT return filing checklist", href: "/resources/vat-return-filing-checklist/" }],
    wa: WA_PATHS.filing,
    waMessage: "I want my VAT filing handled monthly",
  },
  "vat-refund": {
    title: "VAT refunds are claimable - but they invite audit scrutiny",
    severity: "check",
    meaning: "Persistent input VAT credit (e.g. exporters) can be refunded or carried forward. KRA audits refund claims closely, so your eTIMS paper trail must be airtight.",
    steps: ["Confirm the credit position on your VAT ledger for the period.", "Apply via iTax with supporting eTIMS invoices and reconciliations.", "Expect an audit query; prepare a clean invoice-to-return reconciliation."],
    links: [{ label: "VAT refund guide", href: "/resources/vat-refund-guide-kenya/" }],
    wa: WA_PATHS.doctor,
    waMessage: "I'm owed a VAT refund",
  },
  "tcc-expired": {
    title: "Expired TCC? Renew early - tenders and contracts hinge on it",
    severity: "soon",
    meaning: "A TCC is valid 12 months and proves you're compliant. Applying late risks tender disqualification; rejections usually trace to open obligations or unfiled returns.",
    steps: ["Clear all filed-return gaps and any tax due on iTax first.", "Apply for renewal on iTax at least a month before expiry.", "Download and verify the new certificate shows the correct validity window."],
    links: [{ label: "Tax Compliance Certificate guide", href: "/resources/tax-compliance-certificate-kenya/" }],
    wa: WA_PATHS.doctor,
    waMessage: "I need help with my TCC",
  },
  "tcc-rejected": {
    title: "TCC rejections point to a specific compliance gap",
    severity: "now",
    meaning: "KRA rejects TCC applications when returns are unfiled, debt is unpaid, or an audit is open. The rejection letter (or ledger) names the blocker.",
    steps: ["Pull your compliance status on iTax - unfiled returns are the usual culprit.", "Clear the named gap (file, pay, or dispute it formally).", "Re-apply once the ledger reflects the fix."],
    links: [{ label: "Tax Compliance Certificate guide", href: "/resources/tax-compliance-certificate-kenya/" }, { label: "Check your KRA status", href: "/kra-status/" }],
    wa: WA_PATHS.doctor,
    waMessage: "My TCC application was rejected",
  },
  "pen-late": {
    title: "Late penalties are formula-driven - which means they're predictable",
    severity: "now",
    meaning: "Late filing: higher of KES 10,000 or 5% of tax due (VAT), plus 1%/month interest on unpaid principal. Interest keeps running until the principal is settled.",
    steps: ["Estimate the exact exposure with our penalty calculator below.", "File the outstanding return first - waiver odds improve after compliance.", "Pay principal, then apply for waiver of the penalty/interest portion."],
    links: [{ label: "KRA penalty reference table", href: "/resources/kra-vat-penalties-reference/" }, { label: "Late VAT filing penalty", href: "/resources/kra-penalty-for-late-vat-filing/" }],
    wa: WA_PATHS.penalty,
    waMessage: "I have a late-filing penalty to deal with",
  },
  "pen-amnesty": {
    title: "The 2026 amnesty can wipe 100% of penalties + interest on pre-2026 debt",
    severity: "now",
    meaning: "The amnesty window closes 31 December 2026. It covers penalties, interest and fines on tax due before January 2026 - exclusions apply (post-window declarations, final agency decisions).",
    steps: ["List all periods with debt and confirm they're pre-2026 liabilities.", "File anything still unfiled for those periods.", "Apply for amnesty, then pay the principal - in that order."],
    links: [{ label: "KRA tax amnesty 2026 explained", href: "/resources/kra-tax-amnesty-2026/" }, { label: "Amnesty eligibility checker", href: "/tools/amnesty-checker/" }],
    wa: WA_PATHS.penalty,
    waMessage: "I want to apply for the 2026 tax amnesty",
  },
  "pen-shock": {
    title: "Unexpected KRA bills (like the KES 70,000) usually have a paper trail",
    severity: "now",
    meaning: "Assessment notices often combine eTIMS non-compliance minimums, late-filing penalties and interest. Never pay before confirming what the notice actually cites.",
    steps: ["Identify the exact legal section each amount on the notice cites.", "Cross-check against your filing history and eTIMS status.", "Object formally if wrong - deadlines for objection are short."],
    links: [{ label: "KRA fine of KES 70,000 explained", href: "/resources/kra-fine-70000/" }, { label: "KRA VAT audit process", href: "/resources/kra-vat-audit-process/" }],
    wa: WA_PATHS.penalty,
    waMessage: "I received an unexpected KRA bill",
  },
  "reg-pin": {
    title: "No KRA PIN yet? Everything else (VAT, eTIMS, tenders) starts here",
    severity: "soon",
    meaning: "The PIN is the foundation for all tax obligations, M-PESA business payments above thresholds, tenders and bank accounts. Registration is free on iTax.",
    steps: ["Gather ID/permit documents and a valid email + phone.", "Register online via iTax (individual or non-individual).", "Receive your PIN certificate by email - keep the password safe."],
    links: [{ label: "How to apply for a KRA PIN", href: "/resources/how-to-apply-for-kra-pin/" }],
    wa: WA_PATHS.doctor,
    waMessage: "I need a KRA PIN",
  },
  "reg-pin-broken": {
    title: "A PIN that 'isn't working' is usually an account issue, not the PIN",
    severity: "check",
    meaning: "Common causes: locked account, wrong iTax password, or the PIN was never activated. Format issues (spaces) also block logins.",
    steps: ["Retry with the A000... format, no spaces.", "Reset the password; check spam for the reset email.", "Still dead? The profile may need a Huduma Centre correction."],
    links: [{ label: "KRA PIN not working - fixes", href: "/resources/kra-pin-not-working/" }],
    wa: WA_PATHS.doctor,
    waMessage: "My KRA PIN is not working",
  },
  "reg-obligation": {
    title: "Wrong obligations cause phantom penalties - fix the profile",
    severity: "now",
    meaning: "If iTax shows obligations you never traded under (or misses ones you must file), KRA generates non-filing penalties automatically. Amend the taxpayer registration to match reality.",
    steps: ["Log in and check 'Obligations' under taxpayer registration.", "Request amendment of wrong obligations (or add missing ones like VAT).", "File any returns the corrected obligations expose, even nil."],
    links: [{ label: "Nil returns & amnesty guide", href: "/resources/how-to-file-nil-returns-2026/" }, { label: "Check your KRA status", href: "/kra-status/" }],
    wa: WA_PATHS.doctor,
    waMessage: "My KRA obligations are wrong",
  },
}

const SEVERITY_META = {
  now: { label: "Act now", icon: WarningCircle, cls: "text-red-600", bg: "bg-red-50 border-red-200" },
  soon: { label: "Do this soon", icon: Info, cls: "text-amber-600", bg: "bg-amber-50 border-amber-200" },
  check: { label: "Worth checking", icon: CheckCircle, cls: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200" },
} as const

// The KRA Doctor: signature triage tool. Pick the problem area, pick the
// symptom, get a diagnosis with concrete steps and a human-help bridge.
export function KraDoctor() {
  const [area, setArea] = useState<Area | null>(null)
  const [symptom, setSymptom] = useState<string | null>(null)

  const start = () => {
    if (area === null) track("tool_start", { tool: "kra_doctor" })
  }

  const dx = symptom ? DIAGNOSES[symptom] : null
  const severity = dx ? SEVERITY_META[dx.severity] : null

  return (
    <div className="border-2 border-brand/30 bg-brand/[0.03] rounded-xl overflow-hidden">
      <div className="px-5 sm:px-7 pt-6 pb-5">
        <p className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-brand mb-2">
          <Stethoscope size={14} weight="duotone" aria-hidden="true" /> KRA Doctor
        </p>
        <h2 className="font-display text-[1.25rem] sm:text-[1.45rem] font-semibold text-ink tracking-tight text-balance">
          What's wrong with your KRA account?
        </h2>
        <p className="text-[0.85rem] text-ink-muted mt-1.5 leading-relaxed max-w-prose">
          Two taps: pick the problem, get the diagnosis with exact fix steps - or hand it to a human.
        </p>
      </div>

      <div className="px-5 sm:px-7 pb-6 space-y-5">
        {/* Step 1: area chips */}
        <div>
          <p className="text-[0.72rem] font-semibold text-ink-muted uppercase tracking-wide mb-2.5">Step 1 - the problem area</p>
          <div className="flex flex-wrap gap-2" onClick={start}>
            {AREAS.map((a) => (
              <button
                key={a.id}
                onClick={() => { setArea(a.id); setSymptom(null); track("doctor_area", { area: a.id }) }}
                className={`px-3.5 py-2 rounded-full text-[0.8rem] font-medium border transition-colors active:scale-[0.98] ${area === a.id ? "bg-ink text-background border-ink" : "bg-canvas border-hairline text-ink hover:border-ink-muted"}`}
              >
                {a.label}
                <span className={`ml-1.5 text-[0.65rem] ${area === a.id ? "text-background/60" : "text-ink-muted"}`}>{a.hint}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: symptom */}
        {area !== null && SYMPTOMS[area].length > 0 && (
          <div>
            <p className="text-[0.72rem] font-semibold text-ink-muted uppercase tracking-wide mb-2.5">Step 2 - what's happening</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {SYMPTOMS[area].map((s) => (
                <button
                  key={s.id}
                  onClick={() => { setSymptom(s.id); track("doctor_result", { area, symptom: s.id }) }}
                  className={`text-left px-4 py-3 rounded-lg text-[0.83rem] font-medium border transition-colors active:scale-[0.99] ${symptom === s.id ? "bg-brand text-canvas border-brand" : "bg-canvas border-hairline text-ink hover:border-brand/50"}`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Unknown area: free-text WhatsApp handoff */}
        {area === "unknown" && (
          <div className="border border-hairline rounded-lg p-4 bg-canvas">
            <p className="text-[0.85rem] text-ink-muted leading-relaxed mb-3">
              No diagnosis needed - describe what KRA sent you or what's failing, and we'll tell you what it is and what to do. Real human, flat fees, no obligation.
            </p>
            <a href={WA_PATHS.doctor} target="_blank" rel="noopener noreferrer" data-track="wa-cta" data-cta-type="doctor-unknown" data-service="general" className="inline-flex items-center gap-2 bg-[#128C7E] hover:bg-[#0e6d5c] text-white text-[0.83rem] font-semibold px-4 py-2.5 rounded-md transition-colors">
              Describe my issue on WhatsApp <ArrowRight size={13} weight="bold" aria-hidden="true" />
            </a>
          </div>
        )}

        {/* Step 3: diagnosis */}
        {dx && severity && (
          <div className="border border-hairline rounded-lg overflow-hidden bg-canvas">
            <div className={`px-5 py-4 border-b ${severity.bg} flex items-center gap-2.5`}>
              <severity.icon size={18} weight="duotone" className={`shrink-0 ${severity.cls}`} aria-hidden="true" />
              <div>
                <p className={`text-[0.65rem] font-bold uppercase tracking-widest ${severity.cls}`}>Diagnosis - {severity.label}</p>
                <p className="font-display text-[1rem] font-semibold text-ink leading-snug">{dx.title}</p>
              </div>
            </div>
            <div className="p-5 space-y-4">
              <p className="text-[0.85rem] text-ink-soft leading-relaxed">{dx.meaning}</p>
              <div>
                <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-muted mb-2">Your next 3 moves</p>
                <ol className="space-y-2">
                  {dx.steps.map((s, i) => (
                    <li key={i} className="flex gap-2.5 text-[0.84rem] text-ink leading-relaxed">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-ink text-canvas text-[0.68rem] font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                      {s}
                    </li>
                  ))}
                </ol>
              </div>
              {dx.links.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {dx.links.map((l) => (
                    <a key={l.href} href={l.href} className="inline-flex items-center gap-1.5 border border-hairline text-[0.76rem] font-medium text-ink-muted hover:text-ink hover:border-ink-muted px-3 py-1.5 rounded-full transition-colors">
                      {l.label} <ArrowRight size={11} weight="bold" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              )}
              {dx.wa && (
                <a
                  href={dx.waMessage ? `${dx.wa}?text=${encodeURIComponent((dx.waMessage || "").replace(/^/, "Hi Smart VAT Kenya, "))}` : dx.wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="wa-cta"
                  data-cta-type="doctor-handoff"
                  data-service={area || "general"}
                  className="inline-flex items-center gap-2 bg-[#128C7E] hover:bg-[#0e6d5c] text-white text-[0.85rem] font-semibold px-5 py-3 rounded-md transition-colors w-full sm:w-auto justify-center"
                >
                  Hand this to a human - we'll fix it for you <ArrowRight size={13} weight="bold" aria-hidden="true" />
                </a>
              )}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button onClick={() => { setArea(null); setSymptom(null) }} className="text-[0.75rem] text-ink-muted hover:text-ink transition-colors">Start over</button>
                <p className="text-[0.7rem] text-ink-muted">Diagnosis is guidance, not a substitute for advice on your specific file.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Kept for potential direct deep links (waDirect import used by page-level CTAs)
export const KRA_DOCTOR_WA = waDirect("Hi Smart VAT Kenya, I just used the KRA Doctor.")
