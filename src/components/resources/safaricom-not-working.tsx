import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "Safaricom Not Working — Status & Fixes", item: "https://smartvatkenya.co.ke/resources/safaricom-not-working/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Safaricom Not Working? Current Outage Status & Fixes (Kenya 2026)",
  description:
    "Is Safaricom network or M-Pesa down right now? Check the current outage status, how Safaricom downtime affects M-Pesa payments and KRA VAT remittance, and what to do when the network is not working.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: {
    "@type": "Organization",
    name: "Smart VAT Kenya",
    url: "https://smartvatkenya.co.ke",
    logo: { "@type": "ImageObject", url: "https://smartvatkenya.co.ke/icon.svg" },
  },
  datePublished: "2026-08-02",
  dateModified: "2026-08-02",
  url: "https://smartvatkenya.co.ke/resources/safaricom-not-working",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/safaricom-not-working",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Safaricom down right now?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Safaricom network outages are usually localised or short-lived. To check the current status: call 0722 000 000 (the free Safaricom customer care number) to hear if there is a recorded outage notice, check downdetector.co.ke for real-time user reports, and search X (Twitter) for 'Safaricom down' or 'M-Pesa down'. If other users are reporting the same issue, it is a Safaricom-side outage. If only your line is affected, the problem is likely on your device, SIM, or coverage area.",
      },
    },
    {
      "@type": "Question",
      name: "How does Safaricom downtime affect M-Pesa payments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "During a Safaricom network outage, M-Pesa transactions (send money, pay bill, Lipa na M-Pesa, till payments) can fail, delay, or be held in a 'pending' state. Money is only debited from your M-Pesa balance once the transaction is confirmed by Safaricom's systems. If a payment fails with an error, do not resend immediately — check whether the money left your account first, otherwise you can double-pay. For VAT remittance via the KRA Paybill 572572, wait for the network to stabilise, then confirm the payment was received before re-sending.",
      },
    },
    {
      "@type": "Question",
      name: "My M-Pesa payment to KRA failed — will I be penalised for late VAT payment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you attempted to pay KRA VAT via M-Pesa Paybill 572572 before the deadline but the transaction failed due to a Safaricom or M-Pesa outage, take a screenshot of the failure message with the date and time. File your return and pay as soon as the network is restored, then apply for a late-payment penalty waiver citing the network outage. KRA does not automatically waive penalties for third-party network failures — you must apply proactively with evidence.",
      },
    },
    {
      "@type": "Question",
      name: "What can I do when Safaricom is not working?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Try these steps: toggle airplane mode on and off to force a network re-registration, restart your phone, move to a different location (outages are often coverage-based), and use Wi-Fi calling if your phone supports it. To reach customer care, call 0722 000 000 or 100 (free from Safaricom lines). For urgent M-Pesa needs, consider a short-term fallback — many businesses keep a second SIM on Airtel or Telkom for resilience, and KRA payment can also be made via bank or PesaLink once the network recovers.",
      },
    },
    {
      "@type": "Question",
      name: "Why does Safaricom keep going down?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Safaricom outages are typically caused by fibre cuts (especially in Nairobi and major corridors), scheduled maintenance (usually overnight between midnight and 5 AM), power failures at base stations, or software/network upgrades. Fibre cuts from roadworks and vandalism are the most common cause of regional outages. Safaricom usually communicates large outages through their official X account and SMS to affected customers.",
      },
    },
    {
      "@type": "Question",
      name: "How does Safaricom downtime affect my business's eTIMS and VAT compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Safaricom network outage can block eTIMS invoice transmission (if you rely on mobile data), M-Pesa Paybill payments to KRA, and WhatsApp communication with your tax agent. eTIMS Client queues invoices in offline mode and syncs automatically when connectivity returns. For iTax filing and KRA payments, wait for the network to stabilise, then complete the transaction and verify it went through before retrying. Document any outage that prevents you from meeting a KRA deadline and apply for a waiver proactively.",
      },
    },
  ],
}

const toc = [
  { id: "current-status", label: "Is Safaricom Down Right Now?" },
  { id: "how-outages-hit-vat", label: "How Outages Affect M-Pesa & KRA Payments" },
  { id: "m-pesa-fixes", label: "M-Pesa Payment Fixes" },
  { id: "network-fixes", label: "Network / Signal Fixes" },
  { id: "customer-care", label: "How to Contact Safaricom" },
  { id: "business-resilience", label: "Business Resilience During Outages" },
  { id: "faq", label: "Frequently Asked Questions" },
]

export default function SafaricomNotWorkingPage() {
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
            {["Safaricom", "M-Pesa", "Network", "Status", "Troubleshooting"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            Safaricom Not Working? Check Status & Fix It Fast
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
            Safaricom outages are usually <strong className="text-ink">localised (coverage/fibre related) or short-lived</strong>, and rarely affect the whole network. To check the current status: call <strong className="text-ink">0722 000 000</strong>, check downdetector.co.ke, and search X for &ldquo;Safaricom down&rdquo;. If you are trying to pay KRA VAT via M-Pesa Paybill <strong className="text-ink">572572</strong> during an outage, <strong className="text-ink">do not resend</strong> until you confirm the money did not already leave your account &mdash; double payments are the most common mistake. Screenshot any failed payment as evidence and apply for a KRA penalty waiver proactively if you miss a deadline.
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

          {/* Section 1 — Current Status */}
          <section id="current-status" aria-labelledby="current-status-h" className="scroll-mt-20">
            <h2 id="current-status-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Is Safaricom Down Right Now?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Before you assume the whole Safaricom network is down, check whether the problem is on your
                side or Safaricom&rsquo;s. Most &ldquo;Safaricom not working&rdquo; reports turn out to be
                local coverage, a bad SIM, or a handset issue.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="https://downdetector.co.ke/status/safaricom/" target="_blank" rel="noopener noreferrer"
                  className="border border-hairline rounded-lg p-4 hover:border-brand/30 hover:shadow-sm transition-all no-underline group">
                  <p className="font-semibold text-ink text-[0.85rem] group-hover:text-brand transition-colors mb-1">Check Downdetector</p>
                  <p className="text-[0.78rem] text-ink-muted">Real-time user reports and outage map for Safaricom and M-Pesa. See if others are reporting problems right now.</p>
                </a>
                <a href="https://down.co.ke/status/safaricom" target="_blank" rel="noopener noreferrer"
                  className="border border-hairline rounded-lg p-4 hover:border-brand/30 hover:shadow-sm transition-all no-underline group">
                  <p className="font-semibold text-ink text-[0.85rem] group-hover:text-brand transition-colors mb-1">Check Down.co.ke</p>
                  <p className="text-[0.78rem] text-ink-muted">Kenya-specific uptime checker with 24-hour history and response time graphs.</p>
                </a>
              </div>

              <div className="space-y-3">
                {[
                  {
                    title: "Call Safaricom customer care — 0722 000 000",
                    desc: "The recorded message often includes an outage notice when there is a known network problem. If you hear a standard message, the network is likely up and the issue is local to you.",
                  },
                  {
                    title: "Search X (Twitter) for 'Safaricom down' and 'M-Pesa down'",
                    desc: "Kenyan users report outages on X within minutes. If multiple users across different locations report the same issue, it is a Safaricom-side outage. If only you are reporting it, it is local.",
                  },
                  {
                    title: "Check Safaricom's official channels",
                    desc: "Safaricom posts outage updates on their official X account (@SafaricomPLC) and website. Large outages are usually acknowledged within an hour.",
                  },
                  {
                    title: "Test with another SIM or device",
                    desc: "Swap your SIM into a second phone, or borrow a phone with a different network. If the second device works, the problem is your handset or SIM, not the network.",
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
                  <strong className="text-ink">Why it matters for VAT:</strong> M-Pesa is the primary way
                  Kenyan SMEs pay KRA (Paybill 572572) and receive customer payments. When M-Pesa is down,
                  both your receipts and your KRA payments are affected. See the next section for what to do.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 — Outages & VAT */}
          <section id="how-outages-hit-vat" aria-labelledby="how-outages-hit-vat-h">
            <h2 id="how-outages-hit-vat-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How Safaricom Outages Affect M-Pesa &amp; KRA Payments
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                A Safaricom network outage does more than kill your phone signal &mdash; it can block the
                payment rails your business depends on. Here is what actually breaks and what does not.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "M-Pesa transactions (Send Money, Pay Bill, Lipa na M-Pesa, Till)",
                    desc: "These are the most affected. During an outage, transactions can fail with 'Service temporarily unavailable', hang in a 'pending' state, or go through with a delayed confirmation SMS.",
                  },
                  {
                    title: "KRA VAT remittance via Paybill 572572",
                    desc: "If you pay your VAT liability through M-Pesa, an outage can block the payment. KRA does not automatically extend deadlines for third-party network failures &mdash; screenshot the error and apply for a waiver.",
                  },
                  {
                    title: "eTIMS invoice transmission on mobile data",
                    desc: "If your eTIMS Client or eTIMS Lite relies on a Safaricom data connection, an outage stops invoice uploads. eTIMS Client queues invoices offline and syncs when connectivity returns.",
                  },
                  {
                    title: "Bank and PesaLink transfers",
                    desc: "PesaLink and bank-to-bank transfers use different infrastructure and often keep working during Safaricom outages. They are a reliable fallback for urgent KRA payments.",
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
                    The #1 mistake: double payment
                  </p>
                  <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                    When an M-Pesa payment fails or times out, many people immediately resend. If the first
                    transaction actually went through, you have now double-paid. Before re-sending any payment
                    &mdash; especially to KRA &mdash; check your M-Pesa balance and SMS history, or dial
                    *234# to view your statement. If a KRA payment shows as pending, wait for confirmation
                    rather than resending.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 — M-Pesa fixes */}
          <section id="m-pesa-fixes" aria-labelledby="m-pesa-fixes-h">
            <h2 id="m-pesa-fixes-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              M-Pesa Payment Fixes During an Outage
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <div className="space-y-3">
                {[
                  {
                    title: "Do not resend immediately",
                    desc: "Wait at least 10 minutes and check your M-Pesa statement (dial *234# or open the app) before retrying. A timed-out transaction may still complete.",
                  },
                  {
                    title: "Switch from mobile data to Wi-Fi (or vice versa)",
                    desc: "M-Pesa can fail on one connection type and work on another. This also helps if the issue is your data connection rather than M-Pesa itself.",
                  },
                  {
                    title: "Use the M-Pesa app instead of USSD, or vice versa",
                    desc: "The app (Super App) and the *234# USSD menu use different paths. If one is failing, the other often works.",
                  },
                  {
                    title: "Fall back to bank transfer or PesaLink",
                    desc: "For urgent KRA payments, use your bank's app or PesaLink. KRA accepts these payment methods and they run on separate infrastructure.",
                  },
                  {
                    title: "Keep evidence of every failure",
                    desc: "Screenshot error messages with the date and time. If you later need a KRA penalty waiver, this documentation is your proof.",
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
                For guidance on KRA VAT payment methods, deadlines, and penalty waiver applications, see our{" "}
                <a href="/resources/kra-penalty-for-late-vat-filing/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  late VAT filing penalty guide
                </a>{" "}
                and{" "}
                <a href="/resources/how-to-file-vat-return-on-itax/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  VAT return filing guide
                </a>.
              </p>
            </div>
          </section>

          {/* Section 4 — Network fixes */}
          <section id="network-fixes" aria-labelledby="network-fixes-h">
            <h2 id="network-fixes-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Network / Signal Fixes for No Service or No Data
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                If your phone shows no signal, no data, or keeps dropping calls, try these before calling Safaricom.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Toggle airplane mode on and off",
                    desc: "This forces your phone to re-register with the network. It fixes most temporary connection issues within 30 seconds.",
                  },
                  {
                    title: "Restart your phone",
                    desc: "A full reboot clears stuck network processes and is the single most effective fix for 'Safaricom not working' issues on a single device.",
                  },
                  {
                    title: "Check your data settings",
                    desc: "Make sure mobile data is on, APN is set to safaricom, and you have not accidentally exceeded your plan. Switch between 3G/4G/5G in settings.",
                  },
                  {
                    title: "Move to a different location",
                    desc: "Safaricom outages are often coverage-based (a damaged base station or fibre cut in your area). Moving a few hundred metres can restore service.",
                  },
                  {
                    title: "Re-seat or replace your SIM",
                    desc: "A loose or damaged SIM causes intermittent 'no service'. Remove and reinsert it, or test the SIM in another phone.",
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

          {/* Section 5 — Contacting Safaricom */}
          <section id="customer-care" aria-labelledby="customer-care-h">
            <h2 id="customer-care-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How to Contact Safaricom Customer Care
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <div className="space-y-3">
                {[
                  { title: "0722 000 000", desc: "The main customer care line. The automated message usually includes outage notices when there is a known network problem." },
                  { title: "100", desc: "Free customer care number when calling from a Safaricom line." },
                  { title: "200", desc: "M-Pesa customer care line for M-Pesa-specific issues (free from Safaricom lines)." },
                  { title: "X (Twitter)", desc: "@SafaricomCare is the fastest way to get a response during outages — they reply publicly and via DM." },
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
            </div>
          </section>

          {/* Section 6 — Business resilience */}
          <section id="business-resilience" aria-labelledby="business-resilience-h">
            <h2 id="business-resilience-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Business Resilience During Network Outages
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Kenyan businesses lose real money to network outages every year. Here is how to structure your
                business so a Safaricom outage does not stop you from trading or meeting KRA deadlines.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Use eTIMS Client for offline invoicing",
                    desc: "eTIMS Client queues invoices offline and syncs automatically when your connection returns. eTIMS Lite (web-based) cannot work during an outage. See our eTIMS down guide for the full offline workflow.",
                  },
                  {
                    title: "Keep a backup payment method for KRA",
                    desc: "Do not rely on M-Pesa alone for your VAT remittance. Keep your bank app ready as a backup so you can pay KRA even if M-Pesa is down on the 20th.",
                  },
                  {
                    title: "Maintain a second SIM or Wi-Fi fallback",
                    desc: "A prepaid Airtel or Telkom SIM as a data fallback costs almost nothing and keeps your eTIMS and WhatsApp working when Safaricom is down.",
                  },
                  {
                    title: "Document outages that hit KRA deadlines",
                    desc: "Screenshot errors, note times, and contact your tax agent immediately. If a deadline is at risk, the documentation becomes the basis for a penalty waiver.",
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
                Related guides:{" "}
                <a href="/resources/etims-down-offline-invoicing/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  KRA eTIMS Down — Offline Invoicing
                </a>
                {" · "}
                <a href="/resources/itax-portal-not-working/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  KRA iTax Not Working
                </a>
                {" · "}
                <a href="/resources/kra-vat-filing-deadline-august-2026/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  VAT Filing Deadline
                </a>
                .
              </p>

              <div className="border border-brand/20 bg-brand-muted rounded-lg p-6 mt-6">
                <p className="font-display text-[1.15rem] font-semibold text-ink mb-3">Let Us Handle Your Filing</p>
                <p className="text-[0.84rem] text-ink-soft leading-relaxed mb-4">
                  Smart VAT Kenya files your monthly VAT return through the KRA agent portal &mdash; so you never
                  lose a deadline to M-Pesa, network, or iTax outages.{" "}
                  <strong className="text-ink">KES 3,500/month</strong>. Free eTIMS support included.
                </p>
                <a
                  href="https://wa.me/254717344440?text=Hi%2C%20I%20need%20help%20with%20VAT%20filing"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
                >
                  Get VAT Help on WhatsApp
                  <ArrowRight size={14} weight="bold" aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection faqSchema={faqSchema} />
        </article>

        {/* Sources & Methodology */}
        <div className="mt-12 border-t border-hairline pt-8">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-muted mb-3">Sources &amp; Methodology</p>
          <p className="text-[0.78rem] text-ink-muted leading-relaxed max-w-[60ch]">
            Status checks reference Safaricom customer care (0722 000 000), Downdetector and Down.co.ke
            outage reporting, Safaricom official communications, and Smart VAT Kenya&rsquo;s experience
            processing M-Pesa VAT payments for clients. Last verified: August 2026.
          </p>
        </div>

        {/* More Guides */}
        <div className="mt-10 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="safaricom-not-working" />
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
