import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources" },
    { "@type": "ListItem", position: 3, name: "M-Pesa Error Codes — MR101, MR105 & Fixes", item: "https://smartvatkenya.co.ke/resources/mpesa-error-codes" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "M-Pesa Error Codes 2026: MR101, MR105 & 'Transaction Failed' Fixes",
  description:
    "Every common M-Pesa error code explained: MR101, MR102, MR105, MR110, 'transaction failed', and PIN-locked errors. What each message means, how to fix it, and what it means for paying KRA VAT on time.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: {
    "@type": "Organization",
    name: "Smart VAT Kenya",
    url: "https://smartvatkenya.co.ke",
    logo: { "@type": "ImageObject", url: "https://smartvatkenya.co.ke/icon.svg" },
  },
  datePublished: "2026-08-02",
  dateModified: "2026-08-02",
  url: "https://smartvatkenya.co.ke/resources/mpesa-error-codes",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/mpesa-error-codes",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does M-Pesa error MR101 mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MR101 means 'service is currently unavailable' — a Safaricom-side outage or a scheduled maintenance window. It affects the entire M-Pesa platform, not just your account. Wait 15 to 30 minutes and retry. Check Safaricom's official X account (@SafaricomPLC) for a live status update, or use our Safaricom not working guide for workarounds.",
      },
    },
    {
      "@type": "Question",
      name: "My M-Pesa says 'transaction failed' — was my money taken?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. The generic 'transaction failed' message is a catch-all for failures before the payment reaches the Safaricom switch — commonly a weak network, a wrong recipient number, or a malformed paybill input. First check your M-Pesa balance via *334#; if the money was deducted but the transaction failed, it will either complete or auto-reverse. Re-check your recipient details and signal, then retry. If it still fails, try *334# instead of the app or *144#.",
      },
    },
    {
      "@type": "Question",
      name: "Why can't I pay using Lipa na M-Pesa (error MR105)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MR105 means the recipient paybill or till number is suspended, misconfigured, or has hit its operator-side daily cap. Verify the paybill number against an official source before retrying. If the number is correct, the issue is with the merchant — contact them directly. Do not retry repeatedly against a suspended till; you will not get through and may confuse reconciliation.",
      },
    },
    {
      "@type": "Question",
      name: "Can I still pay KRA VAT if M-Pesa is giving errors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If M-Pesa is down or failing on your KRA Paybill 572572 payment, try the alternate USSD code *334# or the M-Pesa app if one is down. If the whole platform is down, do not keep retrying — screenshot the error with the date and time, and pay as soon as the service returns. If this pushes you past the 20th filing deadline, file your return and pay immediately after, then apply for a late-payment penalty waiver citing the network outage with your evidence.",
      },
    },
    {
      "@type": "Question",
      name: "What does MR110 mean on M-Pesa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MR110 means 'your request cannot be processed at this time' — typically a KYC or account-status flag that needs a manual review. Visit a Safaricom shop with your national ID so staff can review your account, clear any flags, or re-verify your identity. This usually resolves the issue on the spot.",
      },
    },
    {
      "@type": "Question",
      name: "How do I fix a locked M-Pesa PIN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dial *334# > My Account > Forgot PIN, then follow the prompts. You will be asked for your national ID number, date of birth, and recent M-Pesa transaction details. The reset completes within minutes and the new PIN arrives via SMS. Alternatively, visit any Safaricom shop with your national ID to reset the PIN in person.",
      },
    },
  ],
}

const toc = [
  { id: "error-table", label: "M-Pesa Error Code Quick Reference" },
  { id: "mr101", label: "MR101 — Service Unavailable" },
  { id: "mr102", label: "MR102 — Unable to Complete" },
  { id: "mr105", label: "MR105 — Lipa na M-Pesa Blocked" },
  { id: "mr110", label: "MR110 — Request Cannot Be Processed" },
  { id: "generic-fail", label: "'Transaction Failed' (No Code)" },
  { id: "pin-locked", label: "PIN Locked / Wrong PIN" },
  { id: "kra-vat", label: "M-Pesa Errors & Paying KRA VAT" },
  { id: "faq", label: "Frequently Asked Questions" },
]

const errorTable = [
  { code: "MR101", meaning: "Service is currently unavailable", cause: "Safaricom-side outage or scheduled maintenance. Affects the whole platform, not your account.", fix: "Wait 15–30 minutes and retry. Check @SafaricomPLC for live status." },
  { code: "MR102", meaning: "Unable to complete transaction", cause: "Temporary network or switch issue with no specific error returned.", fix: "Retry after 5 minutes. Check your balance first — it may have completed despite the error." },
  { code: "MR105", meaning: "Sorry, you cannot pay using Lipa na M-Pesa", cause: "Recipient paybill/till suspended, misconfigured, or over its daily cap.", fix: "Verify the paybill against an official source, then contact the merchant." },
  { code: "MR110", meaning: "Your request cannot be processed at this time", cause: "KYC or account-status flag needing manual review.", fix: "Visit a Safaricom shop with your national ID for a manual review." },
  { code: "No code", meaning: "Sorry, transaction failed", cause: "Weak network, wrong recipient, or malformed paybill input.", fix: "Check signal and details, retry — or switch to *334# instead of the app." },
  { code: "No code", meaning: "PIN locked. Please reset", cause: "Too many wrong PIN attempts.", fix: "*334# > My Account > Forgot PIN, or visit a Safaricom shop with ID." },
]

export default function MpesaErrorCodesPage() {
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
            {["M-Pesa", "Error Codes", "MR101", "MR105", "Troubleshooting"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            M-Pesa Error Codes 2026: MR101, MR105 &amp; "Transaction Failed" Fixes
          </h1>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="font-mono text-[0.62rem] uppercase tracking-widest bg-brand/20 text-brand px-2.5 py-1 rounded-sm">Last updated: August 2, 2026</span>
            <span className="text-[0.78rem] text-canvas/50">Smart VAT Kenya — KRA-registered VAT agents</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Quick Answer / BLUF */}
        <div className="border-l-[3px] border-brand pl-5 mb-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Quick Answer</p>
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            <strong className="text-ink">MR101</strong> = M-Pesa is down or in maintenance — wait 15–30 minutes and retry.{" "}
            <strong className="text-ink">MR102</strong> = transient error — check your balance before retrying (it may have gone through).{" "}
            <strong className="text-ink">MR105</strong> = the till/paybill is suspended or capped — verify the number, don't keep retrying.{" "}
            <strong className="text-ink">MR110</strong> = a KYC flag — visit a Safaricom shop with your national ID.{" "}
            <strong className="text-ink">"Transaction failed"</strong> (no code) = usually network or wrong details — re-check and retry via <strong className="text-ink">*334#</strong>.
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

          {/* Section 1 — Error table */}
          <section id="error-table" aria-labelledby="error-table-h">
            <h2 id="error-table-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              M-Pesa Error Code Quick Reference
            </h2>
            <p className="text-[0.9rem] text-ink-soft leading-relaxed mb-5">
              Every M-Pesa error message on a Kenyan phone screen has a specific cause and a specific fix. Use this
              table to look yours up, then read the detailed sections below.
            </p>
            <div className="overflow-x-auto border border-hairline rounded-lg">
              <table className="w-full text-left text-[0.82rem]">
                <thead>
                  <tr className="bg-canvas-alt border-b border-hairline">
                    <th className="font-mono text-[0.62rem] uppercase tracking-widest text-ink-muted px-4 py-3 font-medium">Code</th>
                    <th className="font-mono text-[0.62rem] uppercase tracking-widest text-ink-muted px-4 py-3 font-medium">Message</th>
                    <th className="font-mono text-[0.62rem] uppercase tracking-widest text-ink-muted px-4 py-3 font-medium">Cause</th>
                    <th className="font-mono text-[0.62rem] uppercase tracking-widest text-ink-muted px-4 py-3 font-medium">Quick Fix</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hairline">
                  {errorTable.map((r) => (
                    <tr key={`${r.code}-${r.meaning}`} className="align-top">
                      <td className="px-4 py-3 font-mono text-[0.72rem] text-brand whitespace-nowrap">{r.code}</td>
                      <td className="px-4 py-3 font-medium text-ink">{r.meaning}</td>
                      <td className="px-4 py-3 text-ink-muted">{r.cause}</td>
                      <td className="px-4 py-3 text-ink-muted">{r.fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2 — MR101 */}
          <section id="mr101" aria-labelledby="mr101-h">
            <h2 id="mr101-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              MR101 — "Service Is Currently Unavailable"
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <div className="space-y-3">
                {[
                  { title: "What it means", desc: "A Safaricom-side outage or a scheduled maintenance window. It affects the entire M-Pesa platform — not just your account or SIM. Everyone is getting it." },
                  { title: "What to do", desc: "Wait 15 to 30 minutes and retry. Check @SafaricomPLC on X (Twitter) for an official acknowledgement — major outages get one within 30–60 minutes. Do not keep retrying every minute; you are just adding load." },
                  { title: "If it's urgent", desc: "For money-at-stake payments, consider an Airtel Money or bank-app transfer as a fallback. For KRA VAT payments, see the KRA section below." },
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

          {/* Section 3 — MR102 */}
          <section id="mr102" aria-labelledby="mr102-h">
            <h2 id="mr102-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              MR102 — "Unable to Complete Transaction"
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <div className="space-y-3">
                {[
                  { title: "What it means", desc: "A generic Safaricom-side failure — usually a temporary network or switch issue that did not return a specific error code." },
                  { title: "What to do", desc: "Retry after 5 minutes. Before retrying, check your M-Pesa balance via *334# — the transaction may have actually completed despite the error. If money left your account but you got no confirmation, it will either complete or auto-reverse." },
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

          {/* Section 4 — MR105 */}
          <section id="mr105" aria-labelledby="mr105-h">
            <h2 id="mr105-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              MR105 — "Sorry, You Cannot Pay Using Lipa na M-Pesa"
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <div className="space-y-3">
                {[
                  { title: "What it means", desc: "The recipient paybill or till is suspended, has an invalid configuration, or has hit its operator-side cap for the day. This is usually a merchant-side problem, not yours." },
                  { title: "What to do", desc: "Verify the paybill or till number against an official source (a receipt, the merchant's website, or their social media). If it is correct, contact the merchant directly. Do not retry repeatedly against a suspended till — it will not go through and it complicates reconciliation." },
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

          {/* Section 5 — MR110 */}
          <section id="mr110" aria-labelledby="mr110-h">
            <h2 id="mr110-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              MR110 — "Your Request Cannot Be Processed at This Time"
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <div className="space-y-3">
                {[
                  { title: "What it means", desc: "A KYC or account-status flag on your line that needs a manual review. It can also appear when SIM registration details don't match your M-Pesa profile." },
                  { title: "What to do", desc: "Visit a Safaricom shop with your national ID. Staff can review your account, clear flags, and re-verify your identity on the spot. This resolves most MR110 errors immediately." },
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

          {/* Section 6 — Generic fail */}
          <section id="generic-fail" aria-labelledby="generic-fail-h">
            <h2 id="generic-fail-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              "Sorry, Transaction Failed" (No Error Code)
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <div className="space-y-3">
                {[
                  { title: "What it means", desc: "A catch-all for transactions that fail before reaching the Safaricom switch. Common causes: weak network signal, a wrong recipient number, a malformed paybill input, or temporary congestion." },
                  { title: "What to do", desc: "Check your phone signal, re-enter the recipient details carefully, and retry. If it still fails, switch from the M-Pesa app (or *144#) to the older *334# menu — it sometimes succeeds when newer flows fail." },
                  { title: "Money deducted but no confirmation?", desc: "Check your balance via *334# > My Account. If the money is gone, the transaction is in suspense — most complete or auto-reverse within 30–60 minutes. If it is still unresolved after 24 hours, call 100 (free from a Safaricom line) or 0722 002 100 with the approximate time and amount." },
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
                <a href="/resources/safaricom-not-working" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  Safaricom not working — status &amp; fixes
                </a>{" "}
                for network-level outages.
              </p>
            </div>
          </section>

          {/* Section 7 — PIN locked */}
          <section id="pin-locked" aria-labelledby="pin-locked-h">
            <h2 id="pin-locked-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              PIN Locked / "Wrong PIN"
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <div className="space-y-3">
                {[
                  { title: "How to reset", desc: "Dial *334# > My Account > Forgot PIN, then follow the prompts. You will be asked for your national ID number, date of birth, and recent M-Pesa transaction details. The reset completes within minutes and the new PIN arrives via SMS." },
                  { title: "In person", desc: "Visit any Safaricom shop with your original national ID. Staff can reset your PIN and re-verify your KYC data — useful if you've forgotten the security answers." },
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

          {/* Section 8 — KRA VAT */}
          <section id="kra-vat" aria-labelledby="kra-vat-h">
            <h2 id="kra-vat-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              M-Pesa Errors &amp; Paying KRA VAT on Time
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Kenyan businesses pay VAT via <strong className="text-ink">M-Pesa Paybill 572572</strong> (your
                KRA PIN is the account number). An M-Pesa error near the 20th deadline is stressful — here is the
                correct play.
              </p>
              <div className="space-y-3">
                {[
                  { title: "Try the alternate channel first", desc: "If the app gives an error, dial *334# and pay from there. USSD and the app share the same backend, but one channel failing doesn't always mean the other is down." },
                  { title: "Don't double-pay", desc: "Before retrying a failed KRA payment, check your balance. If MR102-style errors repeat, the first attempt may have processed. Duplicate VAT payments mean a refund application later." },
                  { title: "Screenshot every failed attempt", desc: "If M-Pesa is down on deadline day, capture the error with the date and time. This evidence is your defence for a late-payment penalty waiver." },
                  { title: "File and pay as soon as service returns", desc: "If you cross the 20th, file your return and pay immediately when M-Pesa recovers, then apply for a penalty waiver citing the network outage. See our penalty waiver guide below." },
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
              <p>
                Related:{" "}
                <a href="/resources/kra-penalty-for-late-vat-filing" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  KRA penalty for late VAT filing &amp; waiver
                </a>{" "}
                and{" "}
                <a href="/resources/kra-vat-filing-deadline-august-2026" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  August 2026 filing deadline
                </a>.
              </p>
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
            Compiled from Safaricom M-Pesa support guidance, live testing of error flows, and Smart VAT Kenya&rsquo;s
            experience helping clients remit VAT via Paybill 572572. Error causes reflect Safaricom&rsquo;s
            published explanations. Last verified: August 2026.
          </p>
        </div>

        {/* More Guides */}
        <div className="mt-10 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="mpesa-error-codes" />
        </div>

        {/* CTA */}
        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">M-Pesa issues delaying your VAT filing?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[40ch] mx-auto leading-relaxed">
            We handle your monthly VAT filing and remittance so network outages never cost you a penalty.
          </p>
          <a
            href="https://wa.me/254721725958?text=Hi%2C%20I%20need%20help%20with%20VAT%20filing"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            Register for KES 5,000
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
