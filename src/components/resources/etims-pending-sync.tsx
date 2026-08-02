import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources" },
    { "@type": "ListItem", position: 3, name: "eTIMS Pending Sync — How to Fix", item: "https://smartvatkenya.co.ke/resources/etims-pending-sync" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "eTIMS Pending Sync in Kenya — Why Invoices Are Stuck and How to Fix It (2026)",
  description:
    "Your eTIMS invoices are stuck on 'Pending Sync'. Learn what Pending Sync means, why invoices stay stuck on eTIMS Client, how long KRA sync takes, and the exact steps to force a successful sync before the deadline.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-08-02",
  dateModified: "2026-08-02",
  url: "https://smartvatkenya.co.ke/resources/etims-pending-sync",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/etims-pending-sync",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does 'Pending Sync' mean in eTIMS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 'Pending Sync' status means the invoice was created locally on eTIMS Client (or your ERP) but has not yet been transmitted to and confirmed by KRA's servers. This is normal in offline mode — invoices queue locally and sync when connectivity returns. The invoice only becomes fully valid for input VAT claims once KRA confirms it during the sync and assigns a server confirmation code.",
      },
    },
    {
      "@type": "Question",
      name: "How long does an eTIMS sync take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A normal eTIMS Client sync takes between a few seconds and a few minutes for a typical batch of invoices. If the queue is large (hundreds of invoices) or the connection is slow, it can take longer. If invoices stay 'Pending Sync' for hours or days, there is usually a connection, certificate, or KRA-side issue that needs troubleshooting.",
      },
    },
    {
      "@type": "Question",
      name: "Why are my eTIMS invoices stuck on Pending Sync?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common causes: no stable internet connection, the eTIMS Client certificate has expired or is not activated, a firewall or VPN blocking the KRA endpoint, eTIMS Client needs an update, or KRA's eTIMS servers are down. Less commonly, invoice data is corrupted and needs to be deleted and re-created. Work through the connection checks first, then certificate checks.",
      },
    },
    {
      "@type": "Question",
      name: "Will KRA penalise me for Pending Sync invoices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Invoices stuck on Pending Sync are not yet counted as transmitted to KRA. If they stay unsynced, KRA may treat the sales as not declared under eTIMS, which can trigger the KES 50,000/month non-compliance penalty or a VAT audit. Fix the sync promptly and keep evidence (sync logs, screenshots) if a KRA outage caused the delay. eTIMS Client also locks you out if it cannot sync for more than 7 consecutive days — so resolve pending syncs before that threshold.",
      },
    },
    {
      "@type": "Question",
      name: "How do I force eTIMS Client to sync pending invoices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open eTIMS Client with a stable connection, click the 'Sync' button (or 'Transmit' depending on your version), and wait for the progress bar to complete. Verify each invoice now shows a 'Confirmed' status with a server confirmation code. If sync fails, check your internet, restart eTIMS Client, verify the device certificate is active, and try again after clearing the failed items.",
      },
    },
    {
      "@type": "Question",
      name: "Does Pending Sync affect my customer's input VAT claim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A B2B customer cannot claim input VAT on an eTIMS invoice that is still 'Pending Sync' because it does not yet have a valid server confirmation code. Inform B2B customers that the invoice is pending, and re-issue or re-send the confirmed version once the sync completes, so their input VAT deduction is not delayed.",
      },
    },
  ],
}

const toc = [
  { id: "what-is-pending-sync", label: "What Pending Sync Means" },
  { id: "why-stuck", label: "Why Invoices Stay Stuck" },
  { id: "how-to-force-sync", label: "How to Force a Sync" },
  { id: "certificate-issues", label: "Certificate & Activation Issues" },
  { id: "deadline-7-days", label: "The 7-Day Lockout Rule" },
  { id: "faq", label: "Frequently Asked Questions" },
]

export default function ETIMSPendingSyncPage() {
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
          <a href="/resources" className="inline-flex items-center gap-1.5 text-canvas/50 hover:text-canvas text-sm mb-6 transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> Back to Knowledge Base
          </a>
          <div className="flex flex-wrap gap-2 mb-5">
            {["eTIMS", "KRA", "Sync", "Troubleshooting"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            eTIMS Pending Sync — Why Invoices Are Stuck &amp; How to Fix It
          </h1>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="font-mono text-[0.62rem] uppercase tracking-widest bg-brand/20 text-brand px-2.5 py-1 rounded-sm">Last updated: August 2, 2026</span>
            <span className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; KRA-registered VAT agents</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Quick Answer / BLUF */}
        <div className="border-l-[3px] border-brand pl-5 mb-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Quick Answer</p>
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            Invoices showing <strong className="text-ink">&ldquo;Pending Sync&rdquo;</strong> on eTIMS Client were created locally but have not been confirmed by KRA &mdash; they only become fully valid once the sync completes and a <strong className="text-ink">server confirmation code</strong> is assigned. To fix a stuck sync: connect to a stable internet connection, click <strong className="text-ink">Sync</strong>, and check the <strong className="text-ink">device certificate is active</strong>. The critical rule is the <strong className="text-ink">7-day lockout</strong> &mdash; if eTIMS Client cannot sync for more than 7 consecutive days, KRA locks the device and you must be reactivated. Never let pending invoices accumulate past that window.
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

          {/* Section 1 — What Pending Sync means */}
          <section id="what-is-pending-sync" aria-labelledby="what-is-pending-sync-h">
            <h2 id="what-is-pending-sync-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What &ldquo;Pending Sync&rdquo; Means in eTIMS
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                In eTIMS, every invoice goes through a two-stage lifecycle: it is created locally, then it
                must be <strong className="text-ink">synced to and confirmed by KRA</strong>. An invoice that
                shows &ldquo;Pending Sync&rdquo; has completed stage one but not stage two.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Stage 1 — Created locally",
                    desc: "eTIMS Client generates the invoice with a local (provisional) QR code. At this point the invoice exists only on your device and is marked Pending Sync.",
                  },
                  {
                    title: "Stage 2 — Transmitted to KRA",
                    desc: "When you have connectivity, the invoice is uploaded to KRA's eTIMS servers. KRA validates it and assigns a server confirmation code.",
                  },
                  {
                    title: "Stage 3 — Confirmed",
                    desc: "The invoice now displays 'Confirmed' with a valid server confirmation code. This is the version customers need for input VAT claims.",
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
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Key point:</strong> Pending Sync is <em>not</em> an error &mdash;
                  it is a normal intermediate state, especially in offline mode. It only becomes a problem when
                  invoices stay stuck for days. See our{" "}
                  <a href="/resources/etims-down-offline-invoicing" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                    eTIMS down &amp; offline invoicing guide
                  </a>{" "}
                  for the full offline workflow.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 — Why stuck */}
          <section id="why-stuck" aria-labelledby="why-stuck-h">
            <h2 id="why-stuck-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Why eTIMS Invoices Stay Stuck on Pending Sync
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <div className="space-y-3">
                {[
                  {
                    title: "No stable internet connection",
                    desc: "The most common cause. eTIMS Client needs a live connection to KRA's servers to sync. Mobile data that keeps dropping or a weak Wi-Fi signal will leave invoices stuck.",
                  },
                  {
                    title: "Firewall, proxy, or VPN blocking KRA",
                    desc: "Corporate networks, office firewalls, and VPNs often block KRA's eTIMS endpoints. If invoices sync at home but not at the office, this is the likely culprit.",
                  },
                  {
                    title: "Device certificate expired or not activated",
                    desc: "Each eTIMS device has a certificate that must be activated and valid. An expired certificate blocks all syncs until it is renewed or re-activated through KRA.",
                  },
                  {
                    title: "eTIMS Client needs an update",
                    desc: "Outdated eTIMS Client versions stop syncing when KRA updates their server API. Check for updates in the application or download the latest version from the KRA portal.",
                  },
                  {
                    title: "KRA eTIMS servers are down",
                    desc: "During KRA outages, invoices queue locally and sync later. Check downdetector.co.ke and social media for eTIMS outage reports before troubleshooting your own system.",
                  },
                  {
                    title: "Corrupted invoice data",
                    desc: "Rarely, an invoice is saved with corrupted data and fails validation every sync attempt. Delete the failed invoice and re-create it.",
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

          {/* Section 3 — How to force sync */}
          <section id="how-to-force-sync" aria-labelledby="how-to-force-sync-h">
            <h2 id="how-to-force-sync-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How to Force eTIMS Client to Sync Pending Invoices
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Follow these steps in order. Most pending sync issues resolve at step 3 or 4.
              </p>
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: "Connect to a stable internet connection",
                    desc: "Use a wired or strong Wi-Fi connection rather than mobile data if the queue is large. Verify you can open a normal website to confirm the connection works.",
                  },
                  {
                    step: 2,
                    title: "Restart eTIMS Client",
                    desc: "Close the application completely and reopen it. On restart, eTIMS Client automatically attempts to sync queued invoices.",
                  },
                  {
                    step: 3,
                    title: "Click the Sync button manually",
                    desc: "In eTIMS Client, open the pending invoices list and click 'Sync' or 'Transmit'. Watch the progress bar. A successful sync moves invoices to 'Confirmed' with a server confirmation code.",
                  },
                  {
                    step: 4,
                    title: "Check for sync error messages",
                    desc: "If sync fails, eTIMS Client shows an error code. Note it down — 'Certificate not active', 'Connection timeout', and 'Invalid payload' each have different fixes.",
                  },
                  {
                    step: 5,
                    title: "Disable VPN and temporarily allow KRA through the firewall",
                    desc: "Turn off any VPN and ensure eTIMS Client is allowed through your firewall. If it works after this, add an exception for KRA's domain permanently.",
                  },
                  {
                    step: 6,
                    title: "Delete and re-create corrupted invoices",
                    desc: "If one specific invoice always fails while others sync, that invoice's data is likely corrupted. Delete it and re-create it with a new number.",
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
            </div>
          </section>

          {/* Section 4 — Certificate issues */}
          <section id="certificate-issues" aria-labelledby="certificate-issues-h">
            <h2 id="certificate-issues-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Certificate &amp; Device Activation Issues
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                eTIMS devices rely on a digital certificate to transmit invoices securely. If the certificate
                is not activated or has expired, every sync fails regardless of your internet connection.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Check the certificate status",
                    desc: "In eTIMS Client, go to Device Management or Settings and confirm the certificate shows 'Active'. If it shows 'Inactive' or 'Expired', syncs will fail.",
                  },
                  {
                    title: "Reactivate through eTIMS Lite",
                    desc: "Log in to eTIMS Lite (etims.kra.go.ke), go to Device Management, and confirm or reactivate the device. You may need to re-enter the device serial number.",
                  },
                  {
                    title: "Renew expired certificates",
                    desc: "Expired certificates must be renewed via eTIMS Lite or by contacting KRA eTIMS support. Do not attempt to bypass this — it is a security control.",
                  },
                  {
                    title: "Contact KRA eTIMS support",
                    desc: "If activation fails, call KRA on 020 499 9999 and ask for eTIMS technical support. Keep your device serial number and KRA PIN ready.",
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

          {/* Section 5 — 7-day rule */}
          <section id="deadline-7-days" aria-labelledby="deadline-7-days-h">
            <h2 id="deadline-7-days-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              The 7-Day Sync Lockout Rule
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                This is the most important deadline in eTIMS: <strong className="text-ink">your device must
                sync at least once every 7 consecutive days</strong>. If it does not, KRA locks the device and
                you cannot invoice at all until it is reactivated.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "The lockout triggers automatically",
                    desc: "After 7 days without a successful sync, eTIMS Client locks invoice creation. The device must be reactivated through KRA before you can invoice again.",
                  },
                  {
                    title: "It applies even during KRA outages",
                    desc: "If eTIMS has been down on KRA's side for more than 5 days, contact KRA proactively. Do not wait for day 7 to resolve a persistent outage.",
                  },
                  {
                    title: "Synchronise early, not on day 7",
                    desc: "Build a weekly sync into your routine. Invoice regularly, and check the Pending Sync count daily. A 5-minute daily check prevents a lockout.",
                  },
                  {
                    title: "A lockout does not erase pending invoices",
                    desc: "Your queued invoices survive a lockout. Once the device is reactivated, click Sync and the queue transmits in order.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <Info size={15} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
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
                    Account locked? Here&rsquo;s the fix
                  </p>
                  <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                    If your device is already locked, see our{" "}
                    <a href="/resources/etims-account-locked" className="underline underline-offset-2 hover:opacity-80">
                      eTIMS account locked guide
                    </a>{" "}
                    for the reactivation steps, or contact KRA eTIMS support on 020 499 9999. Do not try to
                    reinstall eTIMS Client or generate a new device — that can orphan your queued invoices.
                  </p>
                </div>
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
            Compiled from KRA eTIMS user guides, eTIMS Client technical documentation, KRA Contact Centre
            guidance, and Smart VAT Kenya&rsquo;s hands-on experience troubleshooting eTIMS syncs for clients.
            Last verified: August 2026.
          </p>
        </div>

        {/* More Guides */}
        <div className="mt-10 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="etims-pending-sync" />
        </div>

        {/* CTA */}
        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">Stuck with eTIMS?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[40ch] mx-auto leading-relaxed">
            We handle eTIMS onboarding, troubleshooting, and your monthly VAT filing &mdash; so pending syncs never
            become penalties.
          </p>
          <a
            href="https://wa.me/254721725958?text=Hi%2C%20I%20need%20help%20with%20eTIMS%20pending%20sync%20and%20VAT%20filing"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            Get eTIMS Help on WhatsApp
            <svg viewBox="0 0 12 12" className="w-3 h-3 fill-current" aria-hidden="true"><path d="M6 0L4.59 1.41 9.17 6l-4.58 4.59L6 12l6-6z"/></svg>
          </a>
          <div className="mt-4">
            <a href="/resources" className="text-[0.82rem] text-ink-muted hover:text-brand transition-colors underline underline-offset-2">
              ← All Resources
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
