import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info, Copy } from "@phosphor-icons/react/dist/ssr"

import { LAST_VERIFIED, personSchema } from "@/src/lib/authors"
import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const WHATSAPP_NUMBER = "254717344440"

const breadcrumbSchema = {
  "@context": "https://schema.org" as const,
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "eTIMS Duplicate Invoice Error", item: "https://smartvatkenya.co.ke/resources/etims-duplicate-invoice/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org" as const,
  "@type": "Article",
  headline: "eTIMS Duplicate Invoice Error - Why It Happens & How to Fix (2026)",
  description:
    "When KRA rejects your eTIMS invoice with a 'duplicate invoice number' or 'duplicate coupon' error, here is what to check, how to re-issue, and how to avoid duplicates when invoicing across multiple devices.",
  author: personSchema(),
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-08-20",
  dateModified: LAST_VERIFIED,
  url: "https://smartvatkenya.co.ke/resources/etims-duplicate-invoice",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/etims-duplicate-invoice",
}

const faqSchema = {
  "@context": "https://schema.org" as const,
  "@type": "FAQPage" as const,
  mainEntity: [
    {
      "@type": "Question" as const,
      name: "What does the eTIMS 'duplicate invoice' error mean?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "The error means KRA's eTIMS platform already has an invoice in its database with the same invoice number (or the same device coupon number) attributed to your KRA PIN. KRA rejects the new invoice to prevent double-counting sales. The duplicate can be from your own device (you re-issued an invoice using the same number) or from a different device registered to your PIN that already issued a coupon with that number.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Why does my eTIMS device keep generating duplicate invoice numbers?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Three common causes: (1) you have multiple devices or eTIMS Client installations on the same KRA PIN and they are running the same invoice sequence; (2) your device was deregistered and re-registered - the new registration reset the coupon counter; (3) the device clock is wrong and dates an invoice with the same date-and-sequence as an existing one. The fix is to give each device a unique invoice prefix (e.g., NBI01-001, NBI02-001) so coupons never collide.",
      },
    },
    {
      "@type": "Question" as const,
      name: "How do I fix a duplicate invoice error in eTIMS?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "First, check the invoice history on the device - if the invoice was already issued successfully, do NOT re-issue it. If the duplicate is because a previous attempt failed mid-transmission but still saved locally, delete the local copy and re-transmit with a new invoice number. If the duplicate is from a different device, change the invoice prefix on the second device so future numbers do not collide. Never delete an invoice that KRA has already confirmed - that creates a gap in your records.",
      },
    },
    {
      "@type": "Question" as const,
      name: "What is a 'duplicate coupon' error specifically?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "A 'duplicate coupon' error is specific to OSCU/VSCU hardware devices. Each device has an internal counter that generates a unique 'coupon number' for every invoice issued. If the coupon counter is reset (e.g., after a firmware reinstall or factory reset), the device starts reusing coupon numbers from the beginning - which KRA already has in its database. The fix is to have the supplier re-initialise the coupon counter to the correct next number, not zero.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Will KRA penalise me for duplicate invoices?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Duplicate invoices that are rejected do not appear on KRA's record - they are simply not transmitted. So no penalty applies to rejected duplicates. However, if a duplicate is accidentally accepted (rare - happens when KRA's duplicate-check service is briefly down), you may be double-counted for VAT on that sale. Run a duplicate-check on eTIMS Lite > Transaction History before filing your monthly VAT return.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Can I issue the same invoice number from two different devices?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Technically no - KRA's platform keys invoices on (KRA PIN + invoice number). Two devices on the same PIN must use different invoice number sequences. The simplest approach is to use a 2-3 letter branch prefix (NBO-001, MSA-001, KSM-001) so each branch's invoices are unique. If you invoice from the same device but in different modes (online vs offline), the device handles this for you - just trust the device's auto-numbering.",
      },
    },
  ],
}

const toc = [
  { id: "what-error-means", label: "What the Error Means" },
  { id: "why-happens", label: "Why Duplicates Happen" },
  { id: "how-to-fix", label: "How to Fix the Error" },
  { id: "multi-device-prefix", label: "Multi-Device Invoice Prefixing" },
  { id: "monthly-duplicate-check", label: "Monthly Duplicate Audit" },
  { id: "faq", label: "Frequently Asked Questions" },
]

export default function ETimsDuplicateInvoicePage() {
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
            {["eTIMS", "Invoice", "Duplicate", "Troubleshooting"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            eTIMS Duplicate Invoice Error - Why It Happens &amp; How to Fix It
          </h1>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="font-mono text-[0.62rem] uppercase tracking-widest bg-brand/20 text-brand px-2.5 py-1 rounded-sm">Last updated: August 25, 2026</span>
            <span className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; KRA-registered VAT agents</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">
        {/* Quick Answer / BLUF */}
        <div className="border-l-[3px] border-brand pl-5 mb-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Quick Answer</p>
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            The <strong className="text-ink">&ldquo;duplicate invoice&rdquo;</strong> or <strong className="text-ink">&ldquo;duplicate coupon&rdquo;</strong> error means KRA&rsquo;s eTIMS platform already has an invoice with the same <em>invoice number</em> (or device coupon number) attributed to your KRA PIN. Most common cause: <strong className="text-ink">two devices on the same PIN using the same numbering sequence</strong>. Fix: give each device a <strong className="text-ink">unique invoice prefix</strong> (e.g., NBO-001 vs MSA-001) so numbers never collide. For immediate fix on a single stuck invoice: delete the local copy from your eTIMS Client, generate a new invoice with the next sequential number, and re-transmit.
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

          {/* Section 1 - What error means */}
          <section id="what-error-means" aria-labelledby="what-error-means-h">
            <h2 id="what-error-means-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What the Duplicate Invoice Error Actually Means
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                KRA&rsquo;s eTIMS platform keys every invoice on a composite identifier: <strong className="text-ink">(seller KRA PIN + invoice number)</strong>. If the platform receives a new invoice whose (PIN, number) pair already exists in its database, it rejects the new invoice with one of these error messages:
              </p>
              <ul className="space-y-2 list-disc pl-5 text-[0.85rem] text-ink-soft">
                <li><code className="bg-canvas-alt px-1.5 py-0.5 rounded text-[0.78rem]">ERR_DUPLICATE_INVOICE_NUMBER</code> - same invoice number already used on this PIN</li>
                <li><code className="bg-canvas-alt px-1.5 py-0.5 rounded text-[0.78rem]">ERR_DUPLICATE_COUPON</code> - same device coupon number already transmitted (hardware OSCU/VSCU only)</li>
                <li><code className="bg-canvas-alt px-1.5 py-0.5 rounded text-[0.78rem]">ERR_INVOICE_EXISTS</code> - generic duplicate error when the platform&rsquo;s deduplication service fires</li>
                <li>&ldquo;Invoice already transmitted&rdquo; - informal message shown on eTIMS Client when the same invoice is sent twice</li>
              </ul>
              <p>
                Each of these errors means the same thing in practice: <strong className="text-ink">KRA&rsquo;s system thinks you are re-issuing an existing invoice</strong>, and to protect against double-counting sales (which would inflate your VAT payable), it refuses to accept the new one.
              </p>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Not the same as &ldquo;invoice rejected&rdquo;.</strong> The duplicate error is a specific rejection reason. For other rejection reasons (invalid PIN, stock mismatch, missing fields), see our{" "}
                  <a href="/resources/etims-invoice-rejected/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                    eTIMS invoice rejected guide
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 - Why duplicates happen */}
          <section id="why-happens" aria-labelledby="why-happens-h">
            <h2 id="why-happens-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Why Duplicates Happen - Five Root Causes
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <div className="space-y-3">
                {[
                  {
                    title: "Two devices on the same KRA PIN, no prefix",
                    desc: "The single biggest cause. A business has two OSCU devices (one in Nairobi, one in Mombasa) but only one KRA PIN. Both devices start their invoice numbering at 0001 and increment independently. When Mombasa issues invoice 0042 and Nairobi has already issued invoice 0042, KRA sees a duplicate on the same PIN and rejects one of them.",
                  },
                  {
                    title: "Same device re-issued an invoice after a firmware reset",
                    desc: "If the device firmware is reinstalled (by a technician, after a glitch, or after a software update), the internal coupon counter resets to 0. The next invoice uses coupon 0001 - which KRA already has. Until the counter is re-initialised to the correct next number, every invoice triggers a duplicate error.",
                  },
                  {
                    title: "Same invoice transmitted twice by accident",
                    desc: "eTIMS Client sometimes shows 'transmission failed' even when the invoice was actually uploaded - due to a network glitch or a timeout. If the user clicks 'Retry' instead of 'Check Status', the same invoice is sent again, and KRA rejects the second transmission as a duplicate.",
                  },
                  {
                    title: "Manual invoice was transmitted and then re-entered in eTIMS Client",
                    desc: "You issued a manual invoice (e.g., during an eTIMS outage) and transmitted it via eTIMS Lite. Later, the eTIMS Client comes back online and you re-enter the same invoice number in the Client. KRA rejects it as a duplicate of the eTIMS Lite version.",
                  },
                  {
                    title: "Wrong date / clock on the device",
                    desc: "Rare but real: if the device clock is wrong (e.g., set to 2024 instead of 2026), some versions of eTIMS use the date as part of the invoice key. If your old invoices from 2024 are still on KRA's database, the new 2024-dated invoice collides with them. Check the device clock against network time weekly.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <Warning size={15} weight="fill" className="text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink text-[0.88rem]">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3 - How to fix */}
          <section id="how-to-fix" aria-labelledby="how-to-fix-h">
            <h2 id="how-to-fix-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How to Fix a Duplicate Invoice Error (Step by Step)
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The fix depends on whether the invoice <em>actually</em> needs to be issued, or whether it is already on KRA&rsquo;s servers and you can ignore the duplicate error.
              </p>
              <ol className="space-y-3 list-none pl-0" role="list">
                {[
                  {
                    step: "01",
                    title: "Check if the invoice is already on KRA's side",
                    desc: "Log into eTIMS Lite (etims.kra.go.ke), go to Transaction History, search for the invoice number. If it appears, the duplicate error is harmless - the invoice is already transmitted. You do not need to do anything. Mark it as 'transmitted' in your local records and move on.",
                  },
                  {
                    step: "02",
                    title: "If the invoice is NOT on KRA, delete the local copy",
                    desc: "On eTIMS Client, find the stuck invoice in the local queue. Right-click or long-press and select 'Delete'. If the device is an OSCU, you may need to navigate the device menu - check the device manual for 'delete draft'. This removes the local copy that is causing the duplicate error.",
                  },
                  {
                    step: "03",
                    title: "Generate a new invoice with the next sequential number",
                    desc: "Do NOT reuse the same invoice number. Generate a new invoice with the next number in your sequence (e.g., if invoice 0042 had the duplicate error, issue invoice 0043 instead). Tell the customer the invoice number has changed - send a new invoice copy with the new number.",
                  },
                  {
                    step: "04",
                    title: "Transmit and verify",
                    desc: "Transmit the new invoice normally. Within 5 minutes, check eTIMS Lite > Transaction History - the new invoice should appear as 'Confirmed' with a server confirmation code. If it still shows a duplicate error, the issue is on KRA's side - call 020 499 9999.",
                  },
                ].map(({ step, title, desc }) => (
                  <li key={step} className="flex items-start gap-3 pl-0">
                    <span className="font-mono text-[0.7rem] text-brand font-semibold shrink-0 mt-1 w-8">{step}</span>
                    <div>
                      <p className="font-semibold text-ink text-[0.88rem] mb-0.5">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted leading-relaxed">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="border border-canvas-warm bg-[#fffbf0] dark:bg-[#2a1f00] dark:border-[#4a3800] rounded-lg p-4 flex items-start gap-3">
                <Copy size={17} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#7a5500] dark:text-[#ffcc44] text-[0.85rem] mb-1">
                    Never reuse an invoice number, even after a duplicate error
                  </p>
                  <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                    Some businesses try to &ldquo;clear&rdquo; a duplicate error by reusing the number again with a different invoice content. This is illegal under the VAT Regulations - every invoice must have a unique sequential number. Reusing numbers, even accidentally, creates audit-trail gaps that KRA flags during a{" "}
                    <a href="/resources/kra-vat-audit-process/" className="underline underline-offset-2 hover:opacity-80">
                      VAT audit
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 - Multi-device prefixing */}
          <section id="multi-device-prefix" aria-labelledby="multi-device-prefix-h">
            <h2 id="multi-device-prefix-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Multi-Device Invoice Prefixing - The Permanent Fix
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                If you operate <strong className="text-ink">more than one eTIMS device</strong> (or one device + eTIMS Lite) on the same KRA PIN, you must use a unique invoice number prefix on each device so coupons never collide.
              </p>
              <div className="overflow-x-auto -mx-6 px-6">
                <table className="w-full text-[0.85rem] border border-hairline rounded-lg overflow-hidden min-w-[500px]">
                  <thead className="bg-canvas-alt">
                    <tr>
                      <th className="text-left p-3 font-mono text-[0.62rem] uppercase tracking-widest text-ink-muted">Device / Branch</th>
                      <th className="text-left p-3 font-mono text-[0.62rem] uppercase tracking-widest text-ink-muted">Prefix</th>
                      <th className="text-left p-3 font-mono text-[0.62rem] uppercase tracking-widest text-ink-muted">Example invoice numbers</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hairline">
                    <tr>
                      <td className="p-3 text-ink">Nairobi shop - OSCU 1</td>
                      <td className="p-3 text-ink-soft">NBO-</td>
                      <td className="p-3 text-ink-muted">NBO-00001, NBO-00002, NBO-00003</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-ink">Mombasa shop - OSCU 2</td>
                      <td className="p-3 text-ink-soft">MSA-</td>
                      <td className="p-3 text-ink-muted">MSA-00001, MSA-00002, MSA-00003</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-ink">Online sales - eTIMS Lite</td>
                      <td className="p-3 text-ink-soft">WEB-</td>
                      <td className="p-3 text-ink-muted">WEB-00001, WEB-00002, WEB-00003</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-ink">Mobile van - eTIMS Client on phone</td>
                      <td className="p-3 text-ink-soft">VAN-</td>
                      <td className="p-3 text-ink-muted">VAN-00001, VAN-00002, VAN-00003</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                To set a prefix on eTIMS Client: <strong>Settings &rarr; Invoice Settings &rarr; Numbering &rarr; Custom Prefix</strong>. To set a prefix on a hardware OSCU: call your device supplier - they configure it during the next firmware update or remote session. Prefixes can be 3-6 alphanumeric characters.
              </p>
              <p>
                Once prefixes are set, <strong className="text-ink">each device maintains its own independent sequence</strong> - NBO-00123 and MSA-00123 can coexist without colliding because the prefix makes the full invoice number unique. This eliminates 90%+ of duplicate errors in multi-device setups.
              </p>
            </div>
          </section>

          {/* Section 5 - Monthly duplicate audit */}
          <section id="monthly-duplicate-check" aria-labelledby="monthly-duplicate-check-h">
            <h2 id="monthly-duplicate-check-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Monthly Duplicate Audit - Before Filing Your VAT Return
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                As a defensive habit, run a quick duplicate audit on the <strong className="text-ink">18th-19th of every month</strong>, before you file your VAT return on the 20th. This catches any duplicates KRA may have accidentally accepted (rare, but happens during outages).
              </p>
              <ol className="space-y-3 list-none pl-0" role="list">
                {[
                  {
                    step: "01",
                    title: "Download your transaction history",
                    desc: "On eTIMS Lite, go to Transaction History, select the past month, and download as CSV. The file has every invoice KRA received from your PIN in that period - invoice number, date, amount, status.",
                  },
                  {
                    step: "02",
                    title: "Sort by invoice number and look for repeats",
                    desc: "Open the CSV in Excel or Google Sheets. Sort by the 'Invoice Number' column. Any number that appears more than once is a duplicate that KRA accidentally accepted. Note these invoice numbers.",
                  },
                  {
                    step: "03",
                    title: "Compare against your local records",
                    desc: "Check your own sales records (POS system, paper invoice book, or eTIMS Client local exports). Each duplicate in KRA's record should map to a single real-world sale - if it does, you may have been double-counted for VAT. If you cannot match it to a real sale, it is a phantom duplicate and needs KRA correction.",
                  },
                  {
                    step: "04",
                    title: "If you find real duplicates, contact KRA before filing",
                    desc: "Call 020 499 9999 and explain. KRA can merge or delete the duplicate from their side before you file. Filing with known duplicates inflates your VAT payable and is hard to reverse later.",
                  },
                ].map(({ step, title, desc }) => (
                  <li key={step} className="flex items-start gap-3 pl-0">
                    <span className="font-mono text-[0.7rem] text-brand font-semibold shrink-0 mt-1 w-8">{step}</span>
                    <div>
                      <p className="font-semibold text-ink text-[0.88rem] mb-0.5">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted leading-relaxed">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Related:</strong> This monthly audit is part of our monthly VAT filing service. We do it automatically for every client before each VAT return is submitted - see our{" "}
                  <a href="/services/monthly-vat-filing/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                    monthly VAT filing service
                  </a>{" "}
                  for the full checklist.
                </p>
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
            Compiled from KRA eTIMS technical error code documentation, the eTIMS Lite portal transaction history export format, KRA Contact Centre guidance on duplicate corrections (020 499 9999), and Smart VAT Kenya&rsquo;s hands-on experience resolving duplicate invoice errors for multi-branch Kenyan SMEs. Last verified: August 2026.
          </p>
        </div>

        {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More eTIMS Guides</p>
          <ArticleGrid currentSlug="etims-duplicate-invoice" />
        </div>

        {/* CTA */}
        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">Repeated duplicate errors?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[40ch] mx-auto leading-relaxed">
            Send a screenshot of the error and your device serial on WhatsApp - we will tell you in minutes whether it is a numbering, prefix, or counter issue.
          </p>
          <a
            href="https://wa.me/254717344440?text=Hi%2C%20I%20keep%20getting%20eTIMS%20duplicate%20invoice%20errors"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            Get eTIMS Help on WhatsApp
            <svg viewBox="0 0 12 12" className="w-3 h-3 fill-current" aria-hidden="true"><path d="M6 0L4.59 1.41 9.17 6l-4.58 4.59L6 12l6-6z"/></svg>
          </a>
          <div className="mt-4">
            <a href="/resources/" className="text-[0.82rem] text-ink-muted hover:text-brand transition-colors underline underline-offset-2">
              &larr; All Resources
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
