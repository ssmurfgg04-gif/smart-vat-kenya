import { User,  ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"


import { DEFAULT_AUTHOR, LAST_VERIFIED, personSchema } from "@/src/lib/authors"
import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const WHATSAPP_NUMBER = "254717344440"

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
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "eTIMS Down — Offline Invoicing Guide", item: "https://smartvatkenya.co.ke/resources/etims-down-offline-invoicing/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "KRA eTIMS Down? Invoice Offline Now and Sync When It Recovers",
  description:
    "KRA eTIMS down or offline? Keep issuing invoices in offline mode, sync when the portal recovers, and avoid the 7-day device lockout and eTIMS non-compliance penalties (TPA s.86: higher of 5% of the tax due, KES 100,000 for companies, or KES 10,000 for individuals).",
  author: personSchema(),
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-25",
  dateModified: LAST_VERIFIED,
  url: "https://smartvatkenya.co.ke/resources/etims-down-offline-invoicing",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/etims-down-offline-invoicing",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I issue invoices when eTIMS is down?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your eTIMS solution. eTIMS Client (desktop application) has an offline mode that queues invoices locally and syncs them when connectivity is restored. eTIMS Lite (web-based) does not work offline — you must wait for the portal to come back. If you use eTIMS Lite, you should keep a manual record of sales made during the outage and create the invoices in eTIMS Lite once the system is back online. We recommend eTIMS Client if your business cannot afford to stop invoicing during outages.",
      },
    },
    {
      "@type": "Question",
      name: "How do I use eTIMS Client offline mode?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "eTIMS Client automatically switches to offline mode when it detects no internet connection. In offline mode, you can still create invoices, credit notes, and debit notes normally. The invoices are saved locally with a 'Pending Sync' status. When your internet connection is restored, eTIMS Client automatically transmits all pending invoices to KRA. You can also manually trigger a sync by clicking the 'Sync' button in the application. KRA assigns server confirmation codes during the sync process — offline invoices get their confirmation codes at that point.",
      },
    },
    {
      "@type": "Question",
      name: "What do I do if eTIMS Lite is not loading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If eTIMS Lite (the web-based solution at etims.kra.go.ke) is not loading, first check if the problem is on your end or KRA's side. Try loading other websites, clear your browser cache, and try a different browser or network. If eTIMS is down for everyone, you cannot create invoices through eTIMS Lite until it is restored. Keep a manual log of all sales during the outage — customer name, items sold, amount, and date — and create the eTIMS invoices retroactively when the system is back. Some businesses use this as a trigger to upgrade to eTIMS Client, which has offline capability.",
      },
    },
    {
      "@type": "Question",
      name: "Will KRA penalize me if eTIMS was down and I could not issue invoices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If the eTIMS outage was on KRA's side and you can demonstrate that you made reasonable efforts to comply, KRA may exercise discretion. However, KRA does not automatically waive penalties for eTIMS outages. You should: (1) take screenshots of the outage, (2) document your attempts to access the system, (3) create all missing invoices as soon as the system is back, and (4) proactively contact KRA if the outage affected your compliance. Businesses using eTIMS Client with offline mode are better protected because the system continues working during outages.",
      },
    },
    {
      "@type": "Question",
      name: "Can eTIMS Client generate invoices with QR codes when offline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. eTIMS Client generates a local QR code for offline invoices. However, this QR code is provisional — it does not contain the server confirmation code that KRA assigns during sync. The QR code becomes fully valid only after the invoice has been synced with KRA. Your customer can scan the provisional QR code, but it will not verify against KRA's server until the sync is complete. For B2B customers who need to claim input VAT, inform them that the invoice was created offline and will be fully confirmed once synced.",
      },
    },
    {
      "@type": "Question",
      name: "How do I check if eTIMS is down right now?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Check social media for reports — search X (Twitter) for 'eTIMS down' or 'KRA eTIMS'. Check downdetector.co.ke for KRA portal status. Try accessing etims.kra.go.ke from a different browser or network to confirm the issue is on KRA's side rather than your connection. KRA sometimes posts outage updates on their official X account (@KRANews). For extended outages, call KRA on 020 499 9999.",
      },
    },
  ],
}

const toc = [
  { id: "is-etims-down",    label: "Is eTIMS Down? How to Check" },
  { id: "etims-client-offline", label: "eTIMS Client Offline Mode" },
  { id: "etims-lite-down",  label: "What to Do When eTIMS Lite Is Down" },
  { id: "sync-process",    label: "Syncing Offline Invoices" },
  { id: "prevention",      label: "Prevention: Never Be Blocked by an eTIMS Outage" },
  { id: "faq",             label: "Frequently Asked Questions" },
]

export default function ETIMSDownPage() {
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
            {["eTIMS", "KRA", "Offline", "Invoicing", "Troubleshooting"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            KRA eTIMS Down? Invoice Offline Now and Sync When It Recovers
          </h1>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="font-mono text-[0.62rem] uppercase tracking-widest bg-brand/20 text-brand px-2.5 py-1 rounded-sm">Last updated: July 25, 2026</span>
            <span className="text-[0.78rem] text-canvas/50">Smart VAT Kenya — KRA-registered VAT agents</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">
        {/* eTIMS Status Banner */}
        <StatusBanner 
          lastUpdated="August 4, 2026" 
          status="unknown"
          whatsappNumber="254717344440"
        />

        {/* Quick Answer / BLUF */}
        <div className="border-l-[3px] border-brand pl-5 mb-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Quick Answer</p>
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            KRA eTIMS goes down regularly, especially during peak periods. If you use <strong className="text-ink">eTIMS Client</strong> (desktop app), you can continue invoicing offline — invoices are queued locally and synced automatically when the connection returns. If you use <strong className="text-ink">eTIMS Lite</strong> (web-based), you cannot invoice during an outage; keep a manual sales log and create the invoices retroactively when the portal is back. The <strong className="text-ink">eTIMS non-compliance penalties</strong> apply (TPA s.86 — the higher of 5% of the tax due, KES 100,000 for companies, or KES 10,000 for individuals), but KRA may exercise discretion if you can demonstrate the outage prevented compliance. Keep outage evidence. The only guaranteed solution is to <strong className="text-ink">upgrade to eTIMS Client</strong>, which has full offline capability.
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

          {/* Section 1 — How to Check */}
          <section id="is-etims-down" aria-labelledby="is-etims-down-h">
            <h2 id="is-etims-down-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Is eTIMS Down? How to Check Before You Panic
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Before assuming eTIMS is down for everyone, run through this quick diagnostic to rule out local issues. eTIMS outages can be frustrating, but they are usually short-lived.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Try a different browser",
                    desc: "eTIMS Lite works best on Google Chrome or Microsoft Edge (version 120+). If you are on Firefox or Safari, try switching to Chrome. Some users find that clearing browser cache and cookies resolves loading issues without a true outage.",
                  },
                  {
                    title: "Try a different network",
                    desc: "Switch from Wi-Fi to mobile data (or vice versa). If eTIMS loads on mobile data but not your office Wi-Fi, your office network may have firewall restrictions or a blocked IP address.",
                  },
                  {
                    title: "Check social media for 'eTIMS down' reports",
                    desc: "Search X (Twitter) for 'eTIMS down', 'KRA eTIMS', or 'etims.kra.go.ke'. If multiple users report the same issue, it is a confirmed KRA outage. Check downdetector.co.ke for KRA portal status.",
                  },
                  {
                    title: "Check KRA's official communications",
                    desc: "KRA sometimes posts outage notices on kra.go.ke or their X account (@KRANews). If they have acknowledged the issue, no action is needed on your end — wait for restoration.",
                  },
                  {
                    title: "Try KRA's alternative eTIMS access",
                    desc: "If eTIMS Lite is down but you also have access to eTIMS Client, try the desktop application instead. The two systems run on different infrastructure and one may work when the other is down.",
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
              <p>
                For iTax portal issues specifically (as opposed to eTIMS), see our{" "}
                <a href="/resources/kra-status-code-500-itax-errors/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  Error 500 troubleshooting guide
                </a>{" "}
                and{" "}
                <a href="/resources/itax-portal-not-working/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  general iTax troubleshooting guide
                </a>.
              </p>
            </div>
          </section>

          {/* Section 2 — eTIMS Client Offline */}
          <section id="etims-client-offline" aria-labelledby="etims-client-offline-h">
            <h2 id="etims-client-offline-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Using eTIMS Client Offline Mode
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                If you use <strong className="text-ink">eTIMS Client</strong> (the downloadable Windows desktop application), you have a significant advantage during outages: <strong className="text-ink">offline invoicing</strong>. This is one of the main reasons KRA recommends eTIMS Client for medium-volume businesses.
              </p>
              <p>
                eTIMS Client detects when there is no internet connection and automatically switches to offline mode. You continue working exactly as normal — creating invoices, credit notes, and debit notes. The only difference is that invoices carry a <strong className="text-ink">"Pending Sync"</strong> status instead of a confirmed server confirmation code.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Automatic offline detection",
                    desc: "eTIMS Client checks connectivity every 30 seconds. If the connection drops, it switches to offline mode without any action required from you. A small indicator in the status bar shows 'Offline Mode'.",
                  },
                  {
                    title: "Queued invoices",
                    desc: "All invoices created in offline mode are stored locally on your computer. They are queued in order of creation and will be transmitted to KRA in that order when connectivity is restored.",
                  },
                  {
                    title: "Provisional QR codes",
                    desc: "Offline invoices include a local QR code, but it does not have the server confirmation code. The QR code becomes fully valid only after the sync completes. Inform B2B customers that the invoice is pending confirmation.",
                  },
                  {
                    title: "No limit on offline invoices",
                    desc: "There is no cap on how many invoices you can create offline. The local queue handles unlimited invoices until storage runs out — which is effectively never for normal business volumes.",
                  },
                  {
                    title: "Security during offline mode",
                    desc: "Offline invoices are encrypted locally and cannot be tampered with. Each invoice includes a timestamp that is verified when synced. Backdating or altering offline invoices is not possible.",
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
                  <strong className="text-ink">Important:</strong> eTIMS Client must be connected to the internet at least once every 7 days. If the application cannot sync for more than 7 days, it will lock you out and require a KRA reactivation. This applies even if the outage is on KRA's side — so if eTIMS has been down for more than 5 days, contact KRA proactively.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 — eTIMS Lite Down */}
          <section id="etims-lite-down" aria-labelledby="etims-lite-down-h">
            <h2 id="etims-lite-down-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What to Do When eTIMS Lite Is Down
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                If you use <strong className="text-ink">eTIMS Lite</strong> (the free web-based solution), you cannot create invoices when the portal is down. eTIMS Lite has no offline capability because it runs entirely in your browser and requires a live connection to KRA's servers.
              </p>
              <p>
                Here is what to do when eTIMS Lite is not loading.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Keep a manual sales log during the outage",
                    desc: "Use a notebook or spreadsheet to record every sale: customer name, items sold, quantity, price, date, and time. This log will be used to create the eTIMS invoices retroactively.",
                  },
                  {
                    title: "Issue manual receipts to customers",
                    desc: "Give your customers a manual receipt or a hand-written invoice marked 'eTIMS pending'. Explain that the official eTIMS invoice will follow once the system is back. B2B customers who need input VAT claims should be prioritised.",
                  },
                  {
                    title: "Create eTIMS invoices retroactively when the portal is back",
                    desc: "Once eTIMS Lite is restored, log in and create invoices for all sales made during the outage using your manual log. KRA allows back-dated invoicing for outage periods, but you should complete this within 48 hours of restoration.",
                  },
                  {
                    title: "Consider upgrading to eTIMS Client",
                    desc: "If eTIMS Lite outages are disrupting your business, consider upgrading to eTIMS Client. It is free to download and has full offline capability. The only requirement is a Windows computer. See the eTIMS onboarding guide for instructions on upgrading (linked below).",
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
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  See our{" "}
                  <a href="/resources/etims-onboarding-guide/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                    eTIMS onboarding guide
                  </a>{" "}
                  for step-by-step upgrade instructions.
                </p>
              </div>
              <div className="border border-canvas-warm bg-[#fffbf0] dark:bg-[#2a1f00] dark:border-[#4a3800] rounded-lg p-4 flex items-start gap-3">
                <Warning size={17} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#7a5500] dark:text-[#ffcc44] text-[0.85rem] mb-1">
                    Important: Document everything
                  </p>
                  <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                    Take screenshots of the error messages and note the date and time of the outage. This documentation is your evidence if KRA questions why invoices were not transmitted during the outage period. While KRA generally understands that system outages are beyond your control, you must demonstrate that you made reasonable efforts to comply.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 — Sync Process */}
          <section id="sync-process" aria-labelledby="sync-process-h">
            <h2 id="sync-process-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Syncing Offline Invoices When eTIMS Comes Back
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Once KRA restores the eTIMS servers, here is how to ensure all your offline invoices are properly transmitted.
              </p>
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: "Connect to a stable internet connection",
                    desc: "Use a reliable internet connection — preferably not mobile data if the file queue is large. A minimum of 2 Mbps is recommended for syncing. If possible, connect via Ethernet for stability.",
                  },
                  {
                    step: 2,
                    title: "Open eTIMS Client and wait for auto-sync",
                    desc: "eTIMS Client automatically begins syncing queued invoices when it detects an active internet connection. Pending invoices are transmitted in order. A progress bar shows the sync status.",
                  },
                  {
                    step: 3,
                    title: "Verify each invoice has a server confirmation code",
                    desc: "After sync completes, check that every invoice now displays a 'Confirmed' status and has a valid server confirmation code. Invoices that failed to sync will still show 'Pending Sync' — these need to be retried manually.",
                  },
                  {
                    step: 4,
                    title: "Handle failed invoices manually",
                    desc: "If any invoices fail to sync, try clicking 'Sync' manually. If they still fail, the invoice data may be corrupted. Delete the failed invoice and re-create it. If the problem persists, contact KRA eTIMS support.",
                  },
                  {
                    step: 5,
                    title: "Print updated invoices with QR codes",
                    desc: "For B2B customers who need eTIMS invoices for input VAT claims, re-print the now-confirmed invoices with the server confirmation code and valid QR code. Send the updated invoices to your customers via email or WhatsApp.",
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
              <p>
                For eTIMS Lite users, simply log in once the portal is back, create invoices for your manual log entries, and ensure each invoice generates a valid QR code and server confirmation code.
              </p>
            </div>
          </section>

          {/* Section 5 — Prevention */}
          <section id="prevention" aria-labelledby="prevention-h">
            <h2 id="prevention-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Prevention: Never Be Blocked by an eTIMS Outage
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                eTIMS outages are a recurring problem. KRA's infrastructure has improved but still experiences periodic downtime, especially during peak periods. Here is how to structure your business so that eTIMS outages do not stop your operations.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Use eTIMS Client, not eTIMS Lite",
                    desc: "This is the single most important step. eTIMS Client has full offline invoicing capability. eTIMS Lite does not. If your business cannot afford to stop invoicing when the portal goes down, install eTIMS Client on a dedicated Windows computer.",
                  },
                  {
                    title: "Keep a manual backup log",
                    desc: "Even with eTIMS Client, keep a physical or spreadsheet log of sales. This serves as a backup if the sync fails and as evidence if KRA questions your compliance during an outage period.",
                  },
                  {
                    title: "Monitor eTIMS status",
                    desc: "Follow KRA on X (@KRANews) and check downdetector.co.ke for real-time outage information. If a major outage is announced, plan your invoicing around it — invoice early in the day before peak traffic hits the servers.",
                  },
                  {
                    title: "Invoice early, not on deadline",
                    desc: "Just like iTax, eTIMS is busiest between 8 AM and 6 PM on weekdays. If you invoice early (before 8 AM) or late (after 10 PM), you are less likely to encounter server issues.",
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
                <p className="font-display text-[1.15rem] font-semibold text-ink mb-3">Let Us Handle Your Invoicing</p>
                <p className="text-[0.84rem] text-ink-soft leading-relaxed mb-4">
                  Smart VAT Kenya helps businesses with eTIMS compliance, including choosing the right solution, onboarding, and troubleshooting. We also handle your full VAT filing so you never need to worry about portal outages affecting your deadlines.{" "}
                  <strong className="text-ink">KES 3,500/month</strong> for monthly filing. Free eTIMS support included.
                </p>
                <a
                  href="https://wa.me/254717344440?text=Hi%2C%20I%20need%20help%20with%20eTIMS%20and%20VAT%20filing"
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
          <FAQSection faqSchema={faqSchema} />
        </article>

        {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="etims-down-offline-invoicing" />
        </div>

        {/* CTA */}
        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">Need help with VAT?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[40ch] mx-auto leading-relaxed">
            We handle your KRA VAT registration and monthly filing so you never miss a deadline.
          </p>
          <a
            href="https://wa.me/254717344440?text=Hi%2C%20I%20need%20help%20with%20VAT"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            Register for KES 5,000
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
