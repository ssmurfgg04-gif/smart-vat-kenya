import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"

const WHATSAPP_NUMBER = "254721725958"

const StatusBanner = ({ lastUpdated = "August 4, 2026", status = "unknown" }: { lastUpdated?: string; status?: "operational" | "disrupted" | "unknown" }) => {
  const configs = {
    operational: {
      borderClass: "border-emerald-500",
      bgClass: "bg-emerald-50",
      textClass: "text-emerald-900",
      subtextClass: "text-emerald-700",
      buttonClass: "bg-emerald-600 hover:bg-emerald-700",
      label: "eTIMS appears operational",
      message: "eTIMS is working normally at our last check.",
    },
    disrupted: {
      borderClass: "border-orange-500",
      bgClass: "bg-orange-50",
      textClass: "text-orange-900",
      subtextClass: "text-orange-700",
      buttonClass: "bg-orange-600 hover:bg-orange-700",
      label: "eTIMS may be experiencing issues",
      message: "Check the steps below for offline invoicing while KRA resolves the issue.",
    },
    unknown: {
      borderClass: "border-amber-500",
      bgClass: "bg-amber-50",
      textClass: "text-amber-900",
      subtextClass: "text-amber-700",
      buttonClass: "bg-amber-600 hover:bg-amber-700",
      label: "eTIMS status unconfirmed",
      message: "Check KRA's official channels or contact us for real-time status.",
    },
  }
  const config = configs[status]
  return (
    <div className={`border-l-4 ${config.borderClass} ${config.bgClass} p-4 rounded-r-lg mb-8`} role="status" aria-live="polite">
      <div className="flex items-start gap-3">
        <Info size={18} weight="fill" className={`shrink-0 mt-0.5 ${config.textClass}`} aria-hidden="true" />
        <div className="flex-1">
          <p className={`font-semibold ${config.textClass} text-[0.9rem]`}>
            {config.label}: {config.message}
          </p>
          <p className={`text-sm ${config.subtextClass} mt-1`}>Last checked: {lastUpdated}</p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20need%20help%20with%20eTIMS%20right%20now`}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 ${config.buttonClass} text-white font-semibold py-2 px-4 rounded text-sm mt-3 transition-colors`}
          >
            WhatsApp us for help now
            <ArrowRight size={14} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  )
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources" },
    { "@type": "ListItem", position: 3, name: "eTIMS Account Locked — How to Unlock", item: "https://smartvatkenya.co.ke/resources/etims-account-locked" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "eTIMS Account Locked in Kenya? Reasons & How to Unlock It (2026)",
  description:
    "Your KRA eTIMS account or device is locked. Learn the common reasons (7-day sync lockout, failed logins, expired certificates), how to unlock it via eTIMS Lite or KRA support, and how to avoid getting locked out again.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-08-02",
  dateModified: "2026-08-02",
  url: "https://smartvatkenya.co.ke/resources/etims-account-locked",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/etims-account-locked",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why is my eTIMS account locked?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common reason is the 7-day sync rule: if your eTIMS device does not sync with KRA for 7 consecutive days, KRA locks it automatically. Other causes include too many failed login attempts, an expired or deactivated device certificate, or KRA flagging the account during a compliance review. The unlock process differs by cause, so identify the reason first — check your email for a KRA notice and the eTIMS Client error message.",
      },
    },
    {
      "@type": "Question",
      name: "How do I unlock my eTIMS account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a sync-related lockout, log in to eTIMS Lite (etims.kra.go.ke), go to Device Management, and reactivate the device, then sync eTIMS Client. For a password lockout, use the 'Forgot Password' option on eTIMS Lite. For an expired certificate, renew it through Device Management. If the account is locked by KRA for compliance reasons, you must contact KRA eTIMS support directly — do not try to reinstall the application or create a new device, as that can orphan your queued invoices.",
      },
    },
    {
      "@type": "Question",
      name: "How long does an eTIMS lockout last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A temporary login lockout from failed attempts typically clears after 30-60 minutes. A sync-related lockout lasts until you reactivate the device through eTIMS Lite or KRA support — it does not clear on its own. A compliance-related lockout is indefinite until KRA resolves it, which can take days. Do not wait if you suspect a compliance lockout; contact KRA early.",
      },
    },
    {
      "@type": "Question",
      name: "Will I lose my pending invoices if my account is locked?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Pending invoices are stored locally on your eTIMS Client device and survive a lockout. Once the device is reactivated, click Sync and the queued invoices transmit in order. However, do not reinstall eTIMS Client or register a new device before unlocking the existing one — that can orphan the local queue and lose the invoice data.",
      },
    },
    {
      "@type": "Question",
      name: "Can I invoice while my eTIMS account is locked?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A locked device or account blocks invoice creation entirely. You must unlock it before you can issue eTIMS invoices. In the meantime, keep a manual sales log so no sales are lost — create the invoices retroactively once you are unlocked. If the lockout is close to a KRA deadline, document everything and contact KRA promptly.",
      },
    },
    {
      "@type": "Question",
      name: "How do I stop my eTIMS account from locking again?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sync your device at least once every 7 days — ideally daily. Keep your login credentials saved securely, use the correct portal (eTIMS vs iTax have separate passwords), keep the device certificate active, and update eTIMS Client when KRA releases new versions. A daily 5-minute sync check prevents the most common lockout cause.",
      },
    },
  ],
}

const toc = [
  { id: "why-locked", label: "Why Your eTIMS Account Gets Locked" },
  { id: "unlock-itax", label: "How to Unlock — Step by Step" },
  { id: "reactivate-device", label: "Reactivating the Device" },
  { id: "what-not-to-do", label: "What NOT to Do (Critical)" },
  { id: "prevention", label: "Prevention: Never Get Locked Out" },
  { id: "faq", label: "Frequently Asked Questions" },
]

export default function ETIMSAccountLockedPage() {
  return (
    <>
      <script id="article-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script id="faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Header */}
      <div className="bg-canvas-dark px-6 lg:px-10 py-14">
        <div className="max-w-3xl mx-auto">
          <a href="/resources/" className="inline-flex items-center gap-1.5 text-canvas/50 hover:text-canvas text-sm mb-6 transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> Back to Knowledge Base
          </a>
          <div className="flex flex-wrap gap-2 mb-5">
            {["eTIMS", "KRA", "Account Locked", "Troubleshooting"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            eTIMS Account Locked? Here&rsquo;s How to Unlock It Fast
          </h1>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="font-mono text-[0.62rem] uppercase tracking-widest bg-brand/20 text-brand px-2.5 py-1 rounded-sm">Last updated: August 2, 2026</span>
            <span className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; KRA-registered VAT agents</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">
        {/* eTIMS Status Banner */}
        <StatusBanner 
          lastUpdated="August 4, 2026" 
          status="unknown"
          whatsappNumber="254721725958"
        />

        {/* Quick Answer / BLUF */}
        <div className="border-l-[3px] border-brand pl-5 mb-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Quick Answer</p>
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            A locked eTIMS account is almost always caused by the <strong className="text-ink">7-day sync rule</strong> &mdash; KRA auto-locks any device that has not synced for 7 consecutive days. The fix is usually quick: log in to <strong className="text-ink">eTIMS Lite</strong> (etims.kra.go.ke) &rarr; <strong className="text-ink">Device Management</strong> &rarr; reactivate the device &rarr; reopen eTIMS Client and sync. If the lock is from failed logins or an expired certificate, reset your password or renew the certificate. <strong className="text-ink">Do not reinstall eTIMS Client or create a new device</strong> to bypass the lock &mdash; that orphans your queued invoices. For compliance-related locks, contact KRA directly on 020 499 9999.
          </p>
        </div>

        {/* Table of contents */}
        <nav aria-label="Table of contents" className="mb-12">
          <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
            <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-muted mb-4">In This Guide</p>
            <ol className="space-y-2" role="list">
              {toc.map((item, i) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="flex items-center gap-3 text-[0.85rem] text-ink-muted hover:text-brand transition-colors">
                    <span className="font-mono text-[0.63rem] text-ink-muted/40 w-5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <article className="space-y-14">

          {/* Section 1 — Why locked */}
          <section id="why-locked" aria-labelledby="why-locked-h">
            <h2 id="why-locked-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Why Your eTIMS Account Gets Locked
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                eTIMS accounts and devices lock for a few distinct reasons. Identifying the cause first saves
                time &mdash; the unlock process is different for each.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "The 7-day sync lockout (most common)",
                    desc: "KRA automatically locks any eTIMS device that has not successfully synced for 7 consecutive days. This is a security control to prevent sales data being withheld. It is the number one cause of lockouts we see with clients.",
                  },
                  {
                    title: "Too many failed login attempts",
                    desc: "Like iTax, eTIMS locks the account after a number of failed login attempts — usually 5. The lock is typically temporary (30-60 minutes) and clears on its own.",
                  },
                  {
                    title: "Expired or deactivated device certificate",
                    desc: "Each eTIMS device has a certificate. If it expires or KRA deactivates it, the device cannot sync and may show as locked until the certificate is renewed.",
                  },
                  {
                    title: "KRA compliance review or flag",
                    desc: "If KRA flags the account during an audit or compliance review, they may lock it manually. This is the slowest lockout to resolve and requires direct contact with KRA.",
                  },
                  {
                    title: "Device re-registration mismatch",
                    desc: "Attempting to reinstall eTIMS Client or register a new device while the old one is active can trigger a lock, because KRA detects duplicate or conflicting device registrations.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <Warning size={15} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink text-[0.88rem]">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 2 — Unlock steps */}
          <section id="unlock-itax" aria-labelledby="unlock-itax-h">
            <h2 id="unlock-itax-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How to Unlock Your eTIMS Account — Step by Step
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Follow the path that matches your lockout cause.
              </p>
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: "Log in to eTIMS Lite",
                    desc: "Open etims.kra.go.ke and log in with your KRA PIN and eTIMS password. Remember, this is separate from your iTax password.",
                  },
                  {
                    step: 2,
                    title: "Go to Device Management",
                    desc: "In the eTIMS Lite menu, open Device Management. You will see your registered devices and their status (Active, Inactive, or Locked).",
                  },
                  {
                    step: 3,
                    title: "Reactivate the locked device",
                    desc: "Select the device and click Activate or Confirm. KRA will re-authenticate the device. This clears the 7-day sync lockout in most cases.",
                  },
                  {
                    step: 4,
                    title: "If it is a password lock, reset it",
                    desc: "Use 'Forgot Password' on eTIMS Lite. The reset link goes to your registered email. Wait 10-15 minutes between attempts — KRA throttles reset requests.",
                  },
                  {
                    step: 5,
                    title: "Renew an expired certificate",
                    desc: "Still in Device Management, renew the device certificate. If renewal fails, contact KRA eTIMS support with your device serial number.",
                  },
                  {
                    step: 6,
                    title: "Reopen eTIMS Client and sync",
                    desc: "Open eTIMS Client, confirm the device is unlocked, and click Sync. Your queued pending invoices transmit in order.",
                  },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <span className="bg-ink text-canvas rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 tabular-nums">{step}</span>
                    <div>
                      <p className="font-semibold text-ink text-[0.9rem]">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Still locked after reactivation?</strong> The lock may be
                  compliance-related or the certificate renewal may need manual approval. Contact KRA eTIMS
                  support on 020 499 9999 or 0711 000 471 and quote your KRA PIN and device serial number.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 — Reactivate device */}
          <section id="reactivate-device" aria-labelledby="reactivate-device-h">
            <h2 id="reactivate-device-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What If the Device Itself Needs Reactivation?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                A locked <em>device</em> is not the same as a locked <em>account</em>. If eTIMS Client shows a
                device-specific lock message (for example, &ldquo;Device has been deactivated&rdquo;), the device
                must be re-linked to your account.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Confirm the device serial number",
                    desc: "Find the serial number inside eTIMS Client (Device Info) or on the device label. You will need it for reactivation.",
                  },
                  {
                    title: "Re-link through eTIMS Lite",
                    desc: "In Device Management, delete the old device record (only if advised) and re-add it with the serial number, or click 'Confirm' on the existing record. Prefer confirming over deleting.",
                  },
                  {
                    title: "Check if you need KRA approval",
                    desc: "Some device changes require KRA approval. KRA sends a notice to your registered email with the outcome. Allow 1-2 working days.",
                  },
                  {
                    title: "Sync once reactivated",
                    desc: "After the device shows Active, reopen eTIMS Client and run a manual sync to push your pending invoices.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <CheckCircle size={15} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink text-[0.88rem]">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4 — What NOT to do */}
          <section id="what-not-to-do" aria-labelledby="what-not-to-do-h">
            <h2 id="what-not-to-do-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What NOT to Do When Your eTIMS Account Is Locked
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <div className="space-y-3">
                {[
                  {
                    title: "Do not reinstall eTIMS Client",
                    desc: "Reinstalling while locked can orphan your locally queued invoices and make the lock worse. It does not bypass KRA's lock.",
                  },
                  {
                    title: "Do not register a new device to 'reset' the account",
                    desc: "A second device registration while the first is locked triggers KRA conflict flags and can delay reactivation.",
                  },
                  {
                    title: "Do not keep guessing your password",
                    desc: "Each failed attempt extends the temporary login lock. Wait, then use 'Forgot Password' instead.",
                  },
                  {
                    title: "Do not ignore it",
                    desc: "A locked account blocks all invoicing. If it happens near the 20th deadline, you risk late-filing penalties. Act immediately and document everything.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <Warning size={15} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink text-[0.88rem]">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border border-canvas-warm bg-[#fffbf0] dark:bg-[#2a1f00] dark:border-[#4a3800] rounded-lg p-4 flex items-start gap-3">
                <Warning size={17} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#7a5500] dark:text-[#ffcc44] text-[0.85rem] mb-1">
                    Locked with a KRA deadline approaching?
                  </p>
                  <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                    If you cannot invoice or file because of a lockout, screenshot every error, note the time,
                    and contact KRA immediately. If you miss the deadline, apply for a penalty waiver with the
                    evidence. Read the{" "}
                    <a href="/resources/kra-penalty-for-late-vat-filing/" className="underline underline-offset-2 hover:opacity-80">
                      late filing penalty guide
                    </a>{" "}
                    and{" "}
                    <a href="/resources/etims-penalty-50000-per-month-kenya/" className="underline underline-offset-2 hover:opacity-80">
                      eTIMS penalty guide
                    </a>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 — Prevention */}
          <section id="prevention" aria-labelledby="prevention-h">
            <h2 id="prevention-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Prevention: Never Get Locked Out Again
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <div className="space-y-3">
                {[
                  {
                    title: "Sync daily — it takes 1 minute",
                    desc: "Open eTIMS Client each morning and confirm the Pending Sync count is zero. A daily check completely eliminates the 7-day lockout cause.",
                  },
                  {
                    title: "Keep credentials saved securely",
                    desc: "Store your eTIMS password in a password manager. Use the correct password for eTIMS — it is separate from iTax.",
                  },
                  {
                    title: "Monitor your certificate expiry",
                    desc: "Renew the device certificate before it expires. Set a reminder 30 days before the expiry date.",
                  },
                  {
                    title: "Update eTIMS Client promptly",
                    desc: "Install new eTIMS Client versions when KRA releases them to stay compatible with server-side changes.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <CheckCircle size={15} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink text-[0.88rem]">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border border-brand/20 bg-brand-muted rounded-lg p-6 mt-6">
                <p className="font-display text-[1.15rem] font-semibold text-ink mb-3">Never Manage eTIMS Alone Again</p>
                <p className="text-[0.84rem] text-ink-soft leading-relaxed mb-4">
                  Smart VAT Kenya handles eTIMS onboarding, sync monitoring, and reactivation support &mdash;
                  plus your monthly VAT filing.{" "}
                  <strong className="text-ink">KES 3,500/month</strong>. We catch lockout risks before KRA does.
                </p>
                <a
                  href="https://wa.me/254721725958?text=Hi%2C%20I%20need%20help%20with%20eTIMS%20and%20VAT%20filing"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
                >
                  Get eTIMS Help on WhatsApp
                  <ArrowRight size={14} weight="bold" aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" aria-labelledby="faq-h">
            <h2 id="faq-h" className="font-display text-[1.4rem] font-semibold text-ink mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
            <dl className="divide-y divide-hairline">
              {faqSchema.mainEntity.map((q) => (
                <div key={q.name} className="py-5 first:pt-0">
                  <dt className="font-display text-[0.95rem] font-semibold text-ink mb-2">{q.name}</dt>
                  <dd className="text-[0.85rem] text-ink-muted leading-relaxed">{q.acceptedAnswer.text}</dd>
                </div>
              ))}
            </dl>
          </section>
        </article>

        {/* Sources & Methodology */}
        <div className="mt-12 border-t border-hairline pt-8">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-muted mb-3">Sources &amp; Methodology</p>
          <p className="text-[0.78rem] text-ink-muted leading-relaxed max-w-[60ch]">
            Compiled from KRA eTIMS user guides, eTIMS Lite Device Management documentation, KRA Contact
            Centre guidance, and Smart VAT Kenya&rsquo;s experience resolving lockouts for clients. Last
            verified: August 2026.
          </p>
        </div>

        {/* More Guides */}
        <div className="mt-10 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="etims-account-locked" />
        </div>

        {/* CTA */}
        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">Locked out of eTIMS?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[40ch] mx-auto leading-relaxed">
            We reactivate locked eTIMS devices and file your VAT returns on time &mdash; every month.
          </p>
          <a
            href="https://wa.me/254721725958?text=Hi%2C%20my%20eTIMS%20account%20is%20locked.%20Please%20help%20me%20unlock%20it."
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            Get Unlock Help on WhatsApp
            <svg viewBox="0 0 12 12" className="w-3 h-3 fill-current" aria-hidden="true"><path d="M6 0L4.59 1.41 9.17 6l-4.58 4.59L6 12l6-6z"/></svg>
          </a>
          <div className="mt-4">
            <a href="/resources/" className="text-[0.82rem] text-ink-muted hover:text-brand transition-colors underline underline-offset-2">
              ← All Resources
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
