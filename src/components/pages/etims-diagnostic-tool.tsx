"use client"

import { useState } from "react"
import { ArrowRight, ArrowCounterClockwise, CheckCircle, Warning, WarningCircle, Info, Wrench, ArrowLeft } from "@phosphor-icons/react/dist/ssr"

type Severity = "info" | "warning" | "urgent"

interface ResultNode {
  kind: "result"
  title: string
  severity: Severity
  summary: string
  steps: string[]
  guides: { href: string; label: string }[]
}

interface QuestionNode {
  kind: "question"
  text: string
  hint?: string
  options: { label: string; next: string }[]
}

const NODES: Record<string, QuestionNode | ResultNode> = {
  // ---- entry
  start: {
    kind: "question",
    text: "What is eTIMS doing that it shouldn't be?",
    hint: "Pick whichever is closest - you can restart at any time.",
    options: [
      { label: "My invoice was rejected", next: "q-reject-type" },
      { label: "Invoices are stuck on pending sync", next: "q-sync-duration" },
      { label: "My device or account is locked", next: "q-lock-type" },
      { label: "eTIMS is down or won't load", next: "r-down" },
      { label: "A PIN is failing validation (mine or a buyer's)", next: "q-pin-whose" },
      { label: "My device is new / not registered yet", next: "r-new-device" },
    ],
  },

  // ---- rejection branch
  "q-reject-type": {
    kind: "question",
    text: "What does the rejection message say (or closest match)?",
    options: [
      { label: "Wrong / invalid signature type", next: "r-reject-signature" },
      { label: "Duplicate invoice or serial number", next: "r-reject-duplicate" },
      { label: "PIN validation failed", next: "q-pin-whose" },
      { label: "Something else or unclear", next: "r-reject-general" },
    ],
  },
  "r-reject-signature": {
    kind: "result",
    title: "Signature-type rejection",
    severity: "warning",
    summary:
      "The invoice was signed with a certificate type that doesn't match the supply being made (most often an agent signing a supply they aren't mandated for, or an expired personal certificate). This is one of the most common rejections since KRA tightened validation.",
    steps: [
      "Open the rejected invoice in eTIMS and note the exact signature/certificate type it was issued under.",
      "Check the certificate is current: expired certificates are the top cause of 'wrong signature type' messages - renew before reissuing.",
      "If an agent issued it, confirm their KRA agent mandate actually covers this taxpayer and supply type.",
      "Cancel the rejected invoice properly (don't just re-issue over it), then reissue with the correct signature type.",
      "Verify the reissued invoice received a KRA server confirmation code before sending it to your customer.",
    ],
    guides: [
      { href: "/resources/etims-invoice-rejected/", label: "eTIMS Invoice Rejected? Fix It in 3 Steps" },
      { href: "/resources/etims-invoicing-guide/", label: "eTIMS Compliant Invoice Guide" },
    ],
  },
  "r-reject-duplicate": {
    kind: "result",
    title: "Duplicate invoice / serial number",
    severity: "warning",
    summary:
      "KRA's validator rejects serial numbers it has already seen from your device. It usually means a numbering counter reset, a re-issued invoice without cancelling the original, or two devices issuing from the same series.",
    steps: [
      "Search your invoice list for the serial number in the error - find which invoice already used it.",
      "If you re-sent an existing invoice: don't create a new one - resend or reprint the original.",
      "If the counter reset (common after device maintenance or reinstallation), let eTIMS auto-assign the next number instead of typing one manually.",
      "If two devices share a numbering series, separate them so each issues from its own sequence.",
      "Cancel and reissue only when the original invoice is genuinely wrong - every cancellation is visible to KRA.",
    ],
    guides: [
      { href: "/resources/etims-invoice-rejected/", label: "eTIMS Invoice Rejected? Fix It in 3 Steps" },
      { href: "/resources/etims-duplicate-invoice/", label: "Duplicate invoice deep-fix guide" },
    ],
  },
  "r-reject-general": {
    kind: "result",
    title: "Unspecified invoice rejection",
    severity: "warning",
    summary:
      "Rejections share one recovery path: read the exact error string, fix the underlying cause, cancel the bad invoice, and reissue. The three causes above (signature, duplicate, PIN) cover the large majority of all rejections.",
    steps: [
      "Screenshot or copy the exact rejection message - the wording maps to a specific validator rule.",
      "Check the invoice basics in order: supplier PIN, buyer PIN, supply type (B2B/B2C/export), tax rate applied, and currency.",
      "Fix whichever field the error points at, then cancel the rejected invoice in eTIMS.",
      "Reissue the corrected invoice and confirm it gets a KRA confirmation code.",
      "If the same error returns on a clean reissue, the cause is device configuration - see the device-not-registered result or the onboarding guide.",
    ],
    guides: [
      { href: "/resources/etims-invoice-rejected/", label: "eTIMS Invoice Rejected? Fix It in 3 Steps" },
      { href: "/resources/etims-compliance-checklist/", label: "eTIMS Compliance Checklist" },
    ],
  },

  // ---- pending sync branch
  "q-sync-duration": {
    kind: "question",
    text: "How long since your last successful sync?",
    hint: "This matters because of the 7-day lockout rule.",
    options: [
      { label: "Less than 24 hours", next: "r-sync-fresh" },
      { label: "1 to 7 days", next: "r-sync-warning" },
      { label: "More than 7 days", next: "r-sync-locked" },
      { label: "I don't know / it never synced", next: "r-sync-warning" },
    ],
  },
  "r-sync-fresh": {
    kind: "result",
    title: "Routine pending sync (under 24h)",
    severity: "info",
    summary:
      "Pending means the invoice is saved locally and valid to hand to your customer, but KRA hasn't confirmed it yet. Under 24 hours this is usually queueing, not failure.",
    steps: [
      "Keep trading - pending invoices are legal to issue; the sync completing later doesn't invalidate them.",
      "Check your internet connection is stable, then click Sync in eTIMS Client.",
      "Sync at least daily; the 7-day lockout clock counts consecutive days without a successful sync.",
      "Confirm the device certificate is active (expired certificates block sync silently).",
    ],
    guides: [
      { href: "/resources/etims-pending-sync/", label: "Pending sync: full diagnosis guide" },
      { href: "/resources/etims-compliance-checklist/", label: "eTIMS Compliance Checklist" },
    ],
  },
  "r-sync-warning": {
    kind: "result",
    title: "Pending sync, 1-7 days: lockout risk",
    severity: "urgent",
    summary:
      "You are inside the danger window. If eTIMS Client goes 7 consecutive days without a successful sync, KRA locks the device and every pending invoice is frozen until reactivation. Act today.",
    steps: [
      "Force a manual sync now: stable connection, eTIMS Client open, Sync button - watch for the progress to actually complete.",
      "If sync fails, check the device certificate first (expired = silent failure), then your connection.",
      "Do not reinstall eTIMS - reinstalling orphans queued invoices and makes recovery harder.",
      "If tomorrow arrives without a successful sync, treat it as an emergency: try eTIMS Lite (browser) which syncs through a different path.",
      "Note which invoices are pending - customers can still be given copies, but KRA confirmation is what makes them fully valid.",
    ],
    guides: [
      { href: "/resources/etims-pending-sync/", label: "Pending sync: force a sync that works" },
      { href: "/resources/etims-account-locked/", label: "The 7-day lockout rule explained" },
    ],
  },
  "r-sync-locked": {
    kind: "result",
    title: "Past 7 days: likely device lockout",
    severity: "urgent",
    summary:
      "After 7 consecutive days without sync, KRA locks the device. Invoices don't disappear, but the device must be reactivated before anything new can be issued or synced.",
    steps: [
      "Log into eTIMS Lite (etims.kra.go.ke) - the browser route often still works when the Client is locked.",
      "Go to Device Management and check the device status; locked devices show the lock reason.",
      "Follow Reactivate for the locked device, then perform a full sync immediately - pending invoices upload on reactivation.",
      "Do NOT reinstall the Client first - that orphans your local invoice queue.",
      "If reactivation is refused (certificate or mandate issues), that's the blocker to clear first - see the certificate/account-lock guides.",
    ],
    guides: [
      { href: "/resources/etims-account-locked/", label: "eTIMS Account Locked? How to Unlock" },
      { href: "/resources/etims-pending-sync/", label: "Pending sync: full diagnosis guide" },
    ],
  },

  // ---- locked branch
  "q-lock-type": {
    kind: "question",
    text: "What exactly are you locked out of?",
    options: [
      { label: "Device locked (no sync for days)", next: "r-sync-locked" },
      { label: "Password won't work / account locked", next: "r-lock-password" },
      { label: "Certificate expired or invalid", next: "r-lock-certificate" },
    ],
  },
  "r-lock-password": {
    kind: "question",
    text: "What happens when you try to log in?",
    options: [
      { label: "Says account locked after failed attempts", next: "r-lock-attempts" },
      { label: "Says wrong password / can't reset", next: "r-lock-reset" },
    ],
  },
  "r-lock-attempts": {
    kind: "result",
    title: "Lockout after failed logins",
    severity: "warning",
    summary:
      "Multiple failed login attempts trigger an automatic lockout. This is a timer, not a punishment - but you cannot unlock it by retrying.",
    steps: [
      "Stop retrying - each attempt can extend the lock.",
      "Wait the lockout window (typically about an hour) before trying once, carefully.",
      "Reset the password properly via the Forgot Password flow before your next attempt.",
      "If it still fails after a clean reset, the unlock needs KRA: Huduma Centre or the KRA contact centre with your ID.",
      "Meanwhile use eTIMS Lite in the browser if you need to issue an invoice urgently.",
    ],
    guides: [
      { href: "/resources/etims-account-locked/", label: "eTIMS Account Locked? How to Unlock" },
      { href: "/resources/itax-portal-not-working/", label: "KRA login problems (iTax side)" },
    ],
  },
  "r-lock-reset": {
    kind: "result",
    title: "Password reset not working",
    severity: "warning",
    summary:
      "Reset emails that never arrive almost always mean the email address on your KRA profile is outdated - the reset is going to an inbox you no longer control.",
    steps: [
      "Check spam/junk for the reset mail, from the official KRA sender, before assuming failure.",
      "If no mail arrives, your registered email is likely stale - that must be updated at a KRA Huduma Centre with your ID.",
      "Remember eTIMS and iTax have separate passwords even though both use your KRA PIN - reset the right one.",
      "Until access is restored, eTIMS Lite with a valid certificate may keep you invoicing.",
    ],
    guides: [
      { href: "/resources/etims-account-locked/", label: "eTIMS Account Locked? How to Unlock" },
      { href: "/resources/how-to-apply-for-kra-pin/", label: "Update your KRA profile details" },
    ],
  },
  "r-lock-certificate": {
    kind: "result",
    title: "Expired or invalid device certificate",
    severity: "urgent",
    summary:
      "The device certificate is what KRA uses to trust invoices from your device. When it expires or fails validation, sync stops silently - invoices pile up as pending while the 7-day clock runs.",
    steps: [
      "In eTIMS Lite, open Device Management and check the certificate status and expiry date.",
      "Renew the certificate through the same screen if it shows expired.",
      "After renewal, run a full sync immediately to flush all pending invoices.",
      "Set a calendar reminder 2 weeks before the next expiry - this failure mode gives no on-device warning.",
      "If renewal is rejected, the usual cause is a mandate or taxpayer-detail mismatch - the onboarding guide covers fixing that.",
    ],
    guides: [
      { href: "/resources/etims-account-locked/", label: "Certificates and lockouts" },
      { href: "/resources/etims-onboarding-guide/", label: "eTIMS Onboarding Guide" },
    ],
  },

  // ---- down branch
  "r-down": {
    kind: "result",
    title: "eTIMS down or unreachable",
    severity: "warning",
    summary:
      "First rule out that it's only you: local network, browser, or certificate issues masquerade as outages. Then keep trading - offline invoicing is recognised, you just sync when service returns.",
    steps: [
      "Rule out local causes: try eTIMS Lite in a different browser and on a different network (phone hotspot is fastest to test).",
      "Check whether others are reporting an outage (Downdetector-style status pages for KRA systems).",
      "If it's genuinely down: issue invoices anyway and mark them for sync - do not stop selling.",
      "Sync everything as soon as service returns, and before day 7 to stay clear of the lockout rule.",
      "If payments to KRA (Paybill 572572) are also failing during the outage, see the Safaricom/M-Pesa status guide before resending.",
    ],
    guides: [
      { href: "/resources/etims-down-offline-invoicing/", label: "eTIMS Down? Keep Invoicing Offline" },
      { href: "/resources/safaricom-not-working/", label: "Safaricom/M-Pesa down? What to do" },
    ],
  },

  // ---- PIN branch
  "q-pin-whose": {
    kind: "question",
    text: "Whose PIN is failing?",
    options: [
      { label: "The buyer/customer's PIN is rejected", next: "r-pin-buyer" },
      { label: "My own (supplier/CU) PIN is invalid", next: "r-pin-cu" },
    ],
  },
  "r-pin-buyer": {
    kind: "result",
    title: "Buyer PIN failing validation",
    severity: "warning",
    summary:
      "B2B invoices require the buyer's KRA PIN to validate against KRA records. The failure is usually a typo, a wrong PIN type, or the buyer's details not matching their registration.",
    steps: [
      "Re-type the PIN character by character - format is A0123456789Z, uppercase, no spaces.",
      "Verify the PIN actually exists and is active using our free KRA PIN checker tool.",
      "If the PIN is valid but still rejected, the buyer's registration details (name spelling, status) don't match what KRA holds - they must fix it on their iTax profile.",
      "If the sale is to a consumer without a PIN, issue it as B2C instead - don't force a PIN.",
      "For export sales, follow the export flow rather than a domestic B2B invoice.",
    ],
    guides: [
      { href: "/tools/pin-checker/", label: "Free KRA PIN Checker tool" },
      { href: "/resources/etims-buyer-pin-missing/", label: "Buyer PIN missing/rejected guide" },
    ],
  },
  "r-pin-cu": {
    kind: "result",
    title: "Your own (CU/supplier) PIN invalid",
    severity: "urgent",
    summary:
      "When your own PIN fails, your device cannot issue anything. The cause is either a detail mismatch between your eTIMS registration and iTax records, or a registration that never fully completed.",
    steps: [
      "Confirm your PIN validates on iTax itself (login works, obligation visible) - if iTax also rejects it, fix iTax first.",
      "Compare the business name and details on your eTIMS registration against your iTax profile - they must match exactly.",
      "Check the VAT obligation is active on the PIN - a deregistered or suspended obligation invalidates eTIMS issuance.",
      "Re-run the device registration with matching details if they diverge.",
      "If registration itself is stuck, the onboarding guide covers the completion steps most people miss.",
    ],
    guides: [
      { href: "/resources/etims-cu-pin-invalid/", label: "CU PIN invalid: full fix" },
      { href: "/resources/etims-onboarding-guide/", label: "eTIMS Onboarding Guide" },
    ],
  },

  // ---- new device branch
  "r-new-device": {
    kind: "result",
    title: "New device / not registered yet",
    severity: "info",
    summary:
      "A device issues compliant invoices only after registration against your PIN and an active certificate. Most first-day failures are skipped steps in this setup, not faults.",
    steps: [
      "Register the device (or activate eTIMS Lite) against your KRA PIN with business details that exactly match iTax.",
      "Upload your opening stock list where applicable - stock mismatches cause the first rejections.",
      "Verify the certificate issued during registration is active, then test with one invoice before your first real sale.",
      "Confirm the test invoice syncs and gets a KRA confirmation code - that's the end-to-end proof your setup works.",
      "Keep the compliance checklist daily for the first month; most audit flags on new devices come from skipped steps in week one.",
    ],
    guides: [
      { href: "/resources/etims-onboarding-guide/", label: "eTIMS Onboarding Guide 2026" },
      { href: "/resources/etims-device-not-registered/", label: "Device not registered: fixes" },
    ],
  },
}

const severityStyles: Record<Severity, { badge: string; icon: typeof Warning; label: string }> = {
  info: { badge: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400", icon: Info, label: "Routine" },
  warning: { badge: "bg-amber-500/15 text-amber-700 dark:text-amber-400", icon: Warning, label: "Fix today" },
  urgent: { badge: "bg-red-500/15 text-red-700 dark:text-red-400", icon: WarningCircle, label: "Urgent" },
}

export default function EtimsDiagnosticTool() {
  const [current, setCurrent] = useState<string>("start")
  const [history, setHistory] = useState<string[]>([])
  const node = NODES[current]

  function choose(next: string) {
    setHistory((h) => [...h, current])
    setCurrent(next)
  }

  function restart() {
    setHistory([])
    setCurrent("start")
  }

  function back() {
    setHistory((h) => {
      const nh = [...h]
      const prev = nh.pop()
      if (prev) setCurrent(prev)
      return nh
    })
  }

  return (
    <div className="bg-canvas min-h-[100dvh]">
      <div className="bg-canvas-dark px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-canvas/60 mb-4">Free tool - no sign-up, no data leaves your browser</p>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            eTIMS Error Diagnostic - Find Your Exact Fix
          </h1>
          <p className="text-[0.95rem] text-canvas/70 max-w-[60ch] leading-relaxed">
            Select what you&apos;re seeing. Two or three questions later you&apos;ll have the specific fix steps for your case -
            rejected invoices, pending sync, lockouts, PIN failures - plus the deep guide if you need more.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 gap-4 lg:gap-10 items-start">
          {/* Diagnostic panel */}
          <section aria-label="eTIMS diagnostic questions" aria-live="polite">
            <div className="border border-hairline rounded-xl overflow-hidden bg-canvas">
              <div className="flex items-center justify-between gap-3 px-5 py-3.5 bg-canvas-alt border-b border-hairline">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Wrench size={16} weight="duotone" className="text-brand shrink-0" aria-hidden="true" />
                  <p className="font-mono text-[0.62rem] uppercase tracking-widest text-ink-muted truncate">
                    {history.length === 0 ? "Step 1" : `Step ${history.length + 1}`}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
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
                {node.kind === "question" ? (
                  <>
                    <p className="font-display text-[1.05rem] font-semibold text-ink mb-1.5">{node.text}</p>
                    {node.hint && <p className="text-[0.8rem] text-ink-muted mb-4">{node.hint}</p>}
                    <div className="space-y-2.5" role="list">
                      {node.options.map((opt) => (
                        <button
                          key={opt.next + opt.label}
                          onClick={() => choose(opt.next)}
                          className="w-full text-left border border-hairline rounded-lg px-4 py-3.5 min-h-[52px] text-[0.88rem] font-medium text-ink hover:border-brand/40 hover:bg-brand-muted/40 transition-colors active:scale-[0.99] flex items-center justify-between gap-3"
                        >
                          {opt.label}
                          <ArrowRight size={13} weight="bold" className="text-brand shrink-0" aria-hidden="true" />
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <ResultCard node={node} onRestart={restart} />
                )}
              </div>
            </div>

            <p className="text-[0.72rem] text-ink-muted/70 mt-3 leading-relaxed">
              Diagnostic logic based on the documented behaviour of KRA eTIMS (Tax Procedures Act ss.59A, 86) and the rejection patterns our filing desk sees weekly.
            </p>
          </section>

          {/* Side panel */}
          <section aria-labelledby="etims-diag-side-heading">
            <h2 id="etims-diag-side-heading" className="font-display text-[1rem] font-semibold text-ink mb-5">Why a diagnostic, not a chatbot</h2>
            <div className="space-y-3">
              {[
                {
                  t: "Same error, three different causes",
                  d: "'Pending sync' can be connectivity, an expired certificate, or the 7-day lockout. The questions narrow it to your case.",
                },
                {
                  t: "The 7-day clock is the deadline that matters",
                  d: "Devices lock after 7 consecutive days without sync. The diagnostic flags your position on that clock immediately.",
                },
                {
                  t: "Free beats queued",
                  d: "You get the same decision tree our agents work from, instantly - and if it's still stuck after this, a KRA-registered agent takes it per incident at KES 1,500.",
                },
              ].map(({ t, d }) => (
                <div key={t} className="border border-hairline rounded-lg p-4 bg-canvas">
                  <p className="font-semibold text-ink text-[0.88rem] mb-1">{t}</p>
                  <p className="text-[0.8rem] text-ink-muted leading-relaxed">{d}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 border border-brand/20 bg-brand-muted rounded-lg p-5">
              <p className="font-semibold text-ink text-[0.9rem] mb-1.5">Still stuck after the diagnostic?</p>
              <p className="text-[0.8rem] text-ink-muted leading-relaxed mb-3">
                A KRA-registered agent works your exact case - device, certificates, rejections - at KES 1,500 per incident.
              </p>
              <a
                href="/kra-help/"
                data-track="contact-cta" data-cta-type="etims-incident" data-service="eTIMS Diagnosis"
                className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-[0.85rem] px-4 py-2.5 rounded-md hover:bg-brand-hover transition-colors min-h-[44px]"
              >
                Get incident help
                <ArrowRight size={12} weight="bold" aria-hidden="true" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

function ResultCard({ node, onRestart }: { node: ResultNode; onRestart: () => void }) {
  const sev = severityStyles[node.severity]
  return (
    <div>
      <div className="flex items-center gap-2.5 mb-3">
        <span className={`inline-flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-widest px-2.5 py-1 rounded-sm ${sev.badge}`}>
          <sev.icon size={11} weight="fill" aria-hidden="true" />
          {sev.label}
        </span>
        <p className="font-display text-[1.05rem] font-semibold text-ink">{node.title}</p>
      </div>
      <p className="text-[0.87rem] text-ink-soft leading-relaxed mb-5">{node.summary}</p>
      <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-muted mb-3">Your fix steps</p>
      <ol className="space-y-2.5 mb-6" role="list">
        {node.steps.map((step, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="font-mono text-[0.68rem] font-semibold text-canvas bg-brand min-w-5.5 h-5.5 px-1.5 rounded-full flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
            <span className="text-[0.85rem] text-ink-soft leading-relaxed">{step}</span>
          </li>
        ))}
      </ol>
      <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-muted mb-3">Go deeper</p>
      <div className="space-y-2 mb-6">
        {node.guides.map((g) => (
          <a
            key={g.href}
            href={g.href}
            className="flex items-center justify-between gap-3 border border-hairline rounded-lg px-4 py-3 min-h-[48px] text-[0.84rem] font-medium text-ink hover:border-brand/40 hover:text-brand transition-colors no-underline"
          >
            {g.label}
            <ArrowRight size={12} weight="bold" className="text-brand shrink-0" aria-hidden="true" />
          </a>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={onRestart}
          className="inline-flex items-center gap-2 border border-hairline rounded-md px-4 py-2.5 min-h-[44px] text-[0.82rem] font-semibold text-ink hover:border-ink/30 transition-colors"
        >
          <ArrowCounterClockwise size={12} aria-hidden="true" /> Diagnose another issue
        </button>
        <span className="flex items-center gap-1.5 text-[0.75rem] text-ink-muted">
          <CheckCircle size={12} weight="fill" className="text-brand" aria-hidden="true" />
          Diagnosis complete
        </span>
      </div>
    </div>
  )
}
