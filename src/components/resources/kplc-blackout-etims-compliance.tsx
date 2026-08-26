import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const breadcrumbSchema = {
  "@context": "https://schema.org" as const,
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "KPLC Blackout - eTIMS & VAT Compliance", item: "https://smartvatkenya.co.ke/resources/kplc-blackout-etims-compliance/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org" as const,
  "@type": "Article",
  headline: "KPLC Blackout & Power Cuts: How to Stay VAT & eTIMS Compliant (Kenya 2026)",
  description:
    "A KPLC blackout can stop your eTIMS invoicing, M-Pesa payments, and VAT filing. Learn how to invoice and stay KRA-compliant during power cuts, what to do about eTIMS Client offline mode, and how to protect your VAT deadlines.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: {
    "@type": "Organization",
    name: "Smart VAT Kenya",
    url: "https://smartvatkenya.co.ke",
    logo: { "@type": "ImageObject", url: "https://smartvatkenya.co.ke/icon.svg" },
  },
  datePublished: "2026-08-02",
  dateModified: "2026-08-02",
  url: "https://smartvatkenya.co.ke/resources/kplc-blackout-etims-compliance",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/kplc-blackout-etims-compliance",
}

const faqSchema = {
  "@context": "https://schema.org" as const,
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I issue eTIMS invoices during a KPLC blackout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only if your equipment has power. eTIMS Client runs on a desktop/laptop - a blackout stops it unless you are on a UPS, laptop battery, or backup generator. eTIMS Client's offline mode queues invoices locally, so if you have a charged laptop you can keep invoicing and the invoices sync when power and internet return. eTIMS Lite (web-based) needs both power and internet and will not work during a blackout. Keep a manual sales log as a backup so no sales are lost.",
      },
    },
    {
      "@type": "Question",
      name: "Will KRA penalise me if a power cut prevented me from invoicing or filing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KRA does not automatically excuse non-compliance caused by power cuts. If you miss an eTIMS invoice transmission or a VAT filing deadline because of a blackout, document everything (screenshots, KPLC outage notice if available, photos of the blackout), complete the compliance as soon as power returns, and apply for a penalty waiver proactively with the evidence. KRA exercises discretion case by case - you must demonstrate reasonable effort.",
      },
    },
    {
      "@type": "Question",
      name: "How does a power cut affect M-Pesa payments to KRA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A power cut at your premises does not necessarily stop M-Pesa - mobile money runs on Safaricom's network, not your local power. Your phone keeps working on its own battery. However, if you process KRA payments via a bank, POS, or a computer (e.g., for larger payments), a blackout can block them. Use your phone's M-Pesa app or USSD to pay KRA Paybill 572572 during a blackout, and keep a screenshot of any failed attempt as evidence.",
      },
    },
    {
      "@type": "Question",
      name: "What equipment should I have for a blackout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A UPS (uninterruptible power supply) for your eTIMS computer, a fully charged laptop as a fallback, and a backup way to charge your phone (power bank). For businesses that rely on eTIMS Client, a UPS that gives 15-30 minutes of runtime lets you save and queue invoices gracefully. Consider a generator if your business cannot stop selling during extended outages. Keep your router on a UPS too so internet survives short blackouts.",
      },
    },
    {
      "@type": "Question",
      name: "I lost sales data during a blackout - what do I do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If eTIMS Client shut down uncleanly during a blackout, reopen it when power returns and check whether pending invoices were saved. eTIMS Client queues invoices locally as you create them, so most are preserved. If data is corrupted, you may need to delete and re-create specific invoices. Always keep a manual (paper or spreadsheet) sales log - it is your audit trail and the basis for recreating invoices or defending a KRA query.",
      },
    },
    {
      "@type": "Question",
      name: "Does a KPLC blackout count as an eTIMS outage for the 7-day sync rule?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The 7-day eTIMS sync rule is based on calendar days, not business days, and KRA does not pause it for power cuts. If a blackout or series of outages prevents your eTIMS device from syncing for 7 consecutive days, KRA locks the device. Restore power and internet and sync as soon as possible, and contact KRA if an extended outage puts you close to the 7-day window.",
      },
    },
  ],
}

const toc = [
  { id: "blackout-vs-etims", label: "Blackouts & eTIMS Invoicing" },
  { id: "kra-payments", label: "KRA Payments During a Blackout" },
  { id: "7-day-sync", label: "The 7-Day Sync Rule & Power Cuts" },
  { id: "power-backup", label: "Power Backup Equipment" },
  { id: "audit-trail", label: "Keeping an Audit Trail" },
  { id: "faq", label: "Frequently Asked Questions" },
]

export default function KPLCBlackoutPage() {
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
            {["KPLC", "Blackout", "eTIMS", "VAT", "Compliance"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            KPLC Blackout? How to Keep Your eTIMS &amp; VAT Compliance Intact
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
            A KPLC blackout does not pause your KRA obligations. To stay compliant during power cuts: run eTIMS Client on a <strong className="text-ink">UPS or charged laptop</strong> so offline invoices keep queuing, keep a <strong className="text-ink">manual sales log</strong> as your audit trail, pay KRA via <strong className="text-ink">M-Pesa on your phone</strong> (it works without mains power), and remember the <strong className="text-ink">7-day eTIMS sync rule</strong> still applies - restore power and sync as soon as possible. If a blackout makes you miss a deadline, <strong className="text-ink">document it and apply for a waiver proactively</strong>.
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

          {/* Section 1 - Blackouts & eTIMS */}
          <section id="blackout-vs-etims" aria-labelledby="blackout-vs-etims-h">
            <h2 id="blackout-vs-etims-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How a KPLC Blackout Affects eTIMS Invoicing
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                eTIMS is an electronic system, which means it stops when your power stops &mdash; unless you
                have backup. Here is exactly how a blackout hits each eTIMS setup.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "eTIMS Client (desktop) + UPS or laptop battery",
                    desc: "Keeps working. eTIMS Client's offline mode queues invoices locally, so you can keep invoicing through a blackout. Invoices sync when power and internet return.",
                  },
                  {
                    title: "eTIMS Client on a desktop with no backup",
                    desc: "Stops immediately when the power cuts. Any invoices already created are saved locally and will sync when the computer is back on, but you cannot create new ones until power returns.",
                  },
                  {
                    title: "eTIMS Lite (web-based)",
                    desc: "Needs both power and internet. It will not work during a blackout. Keep a manual sales log and create the invoices retroactively when power and internet return.",
                  },
                  {
                    title: "eTIMS via POS / integrated ERP",
                    desc: "Depends on your hardware. If your POS has a battery backup it may keep running; if not, it stops. Check your supplier's backup configuration before an outage hits.",
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
              <p>
                For the full offline invoicing workflow, see our{" "}
                <a href="/resources/etims-down-offline-invoicing/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  eTIMS down &amp; offline invoicing guide
                </a>.
              </p>
            </div>
          </section>

          {/* Section 2 - KRA payments */}
          <section id="kra-payments" aria-labelledby="kra-payments-h">
            <h2 id="kra-payments-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Paying KRA During a Blackout
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Your VAT payment deadline does not move because of a power cut. Fortunately, most KRA payments
                do not need mains power.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "M-Pesa Paybill 572572 works without mains power",
                    desc: "M-Pesa runs on Safaricom's network. Your phone works on its own battery, so you can still pay KRA via the M-Pesa app or *234# USSD during a blackout.",
                  },
                  {
                    title: "Keep your phone charged",
                    desc: "A power bank is essential. If your phone dies and mains power is out, you cannot pay via M-Pesa - a power bank costs little and prevents a penalty.",
                  },
                  {
                    title: "Bank and PesaLink as fallbacks",
                    desc: "If you normally pay via a computer or bank, use the bank's mobile app instead during a blackout. PesaLink also works from a charged phone.",
                  },
                  {
                    title: "Screenshot every failed attempt",
                    desc: "If a payment fails, screenshot it with the date and time. This evidence supports a penalty waiver if KRA questions a late payment.",
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
                Related:{" "}
                <a href="/resources/kra-penalty-for-late-vat-filing/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  late filing penalty &amp; waiver guide
                </a>{" "}
                and{" "}
                <a href="/resources/safaricom-not-working/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  Safaricom not working guide
                </a>{" "}
                (if the network is also down).
              </p>
            </div>
          </section>

          {/* Section 3 - 7-day sync rule */}
          <section id="7-day-sync" aria-labelledby="7-day-sync-h">
            <h2 id="7-day-sync-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              The 7-Day eTIMS Sync Rule &amp; Power Cuts
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                KRA locks any eTIMS device that has not synced for <strong className="text-ink">7 consecutive
                days</strong>. Power cuts do not pause this clock.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "The rule counts calendar days",
                    desc: "Weekends, public holidays, and outages all count. If your device cannot sync for 7 days for any reason, including blackouts, KRA locks it.",
                  },
                  {
                    title: "Sync as soon as power returns",
                    desc: "The moment mains power and internet are back, run a manual sync. Do not let a short blackout stretch into a lockout.",
                  },
                  {
                    title: "Watch for extended outages",
                    desc: "If KPLC predicts a long outage (e.g., scheduled maintenance or storm damage), plan ahead - take your eTIMS laptop somewhere with power to sync, or contact KRA about the risk.",
                  },
                  {
                    title: "Locked already? See the unlock guide",
                    desc: (
                      <>If the device locks, reactivate it via eTIMS Lite Device Management. Full steps in our{" "}
                        <a href="/resources/etims-account-locked/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                          eTIMS account locked guide
                        </a>.
                      </>
                    ),
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

          {/* Section 4 - Power backup */}
          <section id="power-backup" aria-labelledby="power-backup-h">
            <h2 id="power-backup-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
          Power Backup Equipment Worth Having
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <div className="space-y-3">
                {[
                  {
                    title: "UPS for the eTIMS computer and router",
                    desc: "A UPS giving 15-30 minutes of runtime lets eTIMS Client queue invoices and shut down gracefully. Put the router on a UPS too, so short blackouts don't kill your internet.",
                  },
                  {
                    title: "Charged laptop as a fallback",
                    desc: "A laptop with eTIMS Client installed and a full battery is a portable invoicing machine during a blackout - and can be taken to a powered location if needed.",
                  },
                  {
                    title: "Power banks for phones",
                    desc: "Keeps M-Pesa, bank apps, and WhatsApp alive. Critical for paying KRA and communicating with your tax agent during extended outages.",
                  },
                  {
                    title: "Generator (for businesses that can't stop)",
                    desc: "If your business sells continuously (retail, hospitality, pharmacy), a small generator or solar system keeps your POS, eTIMS, and lights running through any outage.",
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

          {/* Section 5 - Audit trail */}
          <section id="audit-trail" aria-labelledby="audit-trail-h">
            <h2 id="audit-trail-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Keeping an Audit Trail Through Blackouts
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                If a blackout disrupts your invoicing or filing, your audit trail is your defence. Here is what
                to keep.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "A paper or spreadsheet sales log",
                    desc: "Customer name, items, quantity, price, date, time. This lets you recreate eTIMS invoices and prove your sales were captured even when the system was down.",
                  },
                  {
                    title: "Photos and timestamps of the blackout",
                    desc: "A photo of your dark shop or a note of the outage time supports a KRA waiver application. KPLC outage notices, if available, are even better evidence.",
                  },
                  {
                    title: "Screenshots of failed payments and syncs",
                    desc: "Save error messages with date and time. These document that you attempted compliance and were blocked by circumstances beyond your control.",
                  },
                  {
                    title: "Submit waiver applications promptly",
                    desc: "Apply for penalty waivers as soon as possible after the event with the evidence attached. KRA reviews these case by case.",
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
                    Blackout on deadline day?
                  </p>
                  <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                    If it is the 20th and the power is out, pay via M-Pesa on your phone immediately, then file
                    your return from your phone or as soon as power returns. If you miss the deadline, file as
                    soon as possible and apply for a waiver citing the blackout. See the{" "}
                    <a href="/resources/kra-penalty-for-late-vat-filing/" className="underline underline-offset-2 hover:opacity-80">
                      penalty waiver guide
                    </a>.
                  </p>
                </div>
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
            Compiled from KRA eTIMS user guidance, KPLC outage information, and Smart VAT Kenya&rsquo;s
            experience helping clients stay compliant through power cuts. Last verified: August 2026.
          </p>
        </div>

        {/* More Guides */}
        <div className="mt-10 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="kplc-blackout-etims-compliance" />
        </div>

        {/* CTA */}
        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">Power cuts costing you compliance?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[40ch] mx-auto leading-relaxed">
            We handle your monthly VAT filing so you never miss a deadline - blackout or not.
          </p>
          <a
            href="https://wa.me/254717344440?text=Hi%2C%20I%20need%20help%20with%20VAT%20filing"
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
