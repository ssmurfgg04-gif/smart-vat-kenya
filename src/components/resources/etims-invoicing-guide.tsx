import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const breadcrumbSchema = {
  "@context": "https://schema.org" as const,
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "eTIMS Compliant Invoicing Guide", item: "https://smartvatkenya.co.ke/resources/etims-invoicing-guide/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org" as const,
  "@type": "Article",
  headline: "eTIMS Compliant Invoice Guide Kenya 2026",
  description:
    "Complete guide to creating, issuing, and verifying eTIMS-compliant invoices in Kenya. Covers mandatory invoice fields, QR codes, buyer PIN requirements, B2B vs B2C rules, and what to do if your supplier does not use eTIMS.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-25",
  dateModified: "2026-07-25",
  url: "https://smartvatkenya.co.ke/resources/etims-invoicing-guide",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/etims-invoicing-guide",
}

const faqSchema = {
  "@context": "https://schema.org" as const,
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes an invoice eTIMS-compliant in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An eTIMS-compliant invoice must be generated through KRA's eTIMS system (Lite, Client, Trader, or VSCU/OSCU). It must include the seller's registered name and KRA PIN, the buyer's KRA PIN for B2B transactions above KES 10,000, a sequential eTIMS invoice number, the invoice date, a full description of goods/services, quantity and unit price, the tax rate and VAT amount (words and figures), the total amount including VAT, a KRA-generated QR code, and the eTIMS server confirmation code.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I issue an eTIMS invoice without the buyer's KRA PIN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, for B2C sales (sales to individual consumers). For B2B transactions above KES 10,000, the buyer's KRA PIN is mandatory. If you are selling to a business customer and they refuse to provide their KRA PIN, inform them that without it, they cannot claim input VAT on the purchase. For sales below KES 10,000 to un registered persons, you can record the buyer's name and ID number instead.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I verify an eTIMS invoice is genuine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scan the QR code on the eTIMS invoice using KRA's free eTIMS verification app (available on Google Play and the App Store). The app will display the invoice details from KRA's server. If the QR code fails to scan or returns different details, the invoice may not have been transmitted to KRA and is not valid for input VAT claims. You can also manually verify by checking that the invoice has a valid eTIMS server confirmation code and sequential invoice number.",
      },
    },
    {
      "@type": "Question",
      "name": "What if my supplier does not issue eTIMS invoices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your supplier is not using eTIMS, you have three options. First, ask them to register for eTIMS (send them KRA's eTIMS onboarding guide). Second, use Buyer-Initiated Invoicing (BII) on the eTIMS system - you generate the invoice on their behalf, they receive a notification, and you can claim your input VAT. Third, if neither works, consider switching to a compliant supplier, because you cannot claim input VAT on non-eTIMS invoices from that supplier.",
      },
    },
    {
      "@type": "Question",
      "name": "Do I need to print eTIMS invoices on special paper?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No special paper is required. You can print eTIMS invoices on plain A4 paper, as long as the QR code is clearly printed and scannable. However, for high-value transactions, KRA recommends printing on paper that preserves the QR code legibility for at least 5 years (the statutory record-keeping period). Thermal paper that fades over time is not recommended.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the penalty for issuing a non-compliant eTIMS invoice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Issuing invoices outside eTIMS carries escalating penalties. First, the buyer cannot claim input VAT on that invoice. Second, if KRA finds you issued non-compliant invoices during an audit, you face a penalty of up to KES 10,000 per invoice plus a 50% surcharge on any additional tax assessment. For businesses with high invoice volumes, this adds up very quickly. Using eTIMS correctly is both a compliance requirement and a financial protection.",
      },
    },
  ],
}

const toc = [
  { id: "what-is-etims-invoice", label: "What Is an eTIMS-Compliant Invoice?" },
  { id: "mandatory-fields",      label: "Mandatory eTIMS Invoice Fields" },
  { id: "b2b-vs-b2c",           label: "B2B vs B2C Invoicing Rules" },
  { id: "qr-codes",             label: "QR Codes and Server Confirmation Codes" },
  { id: "verification",         label: "How to Verify an eTIMS Invoice" },
  { id: "supplier-not-on-etims", label: "What If Your Supplier Is Not on eTIMS?" },
  { id: "common-mistakes",      label: "Common eTIMS Invoice Mistakes" },
  { id: "faq",                  label: "Frequently Asked Questions" },
]

export default function ETIMSInvoicingGuidePage() {
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
            {["eTIMS", "Invoicing", "QR Code", "Compliance", "2026"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            eTIMS Compliant Invoice Guide Kenya 2026
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; KRA-registered VAT agents &mdash; Updated July 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Quick Answer / BLUF */}
        <div className="border-l-[3px] border-brand pl-5 mb-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Quick Answer</p>
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            An eTIMS-compliant invoice must be issued through KRA's eTIMS system and must include{" "}
            <strong className="text-ink">10 mandatory fields</strong>: seller name and KRA PIN, buyer
            KRA PIN (for B2B above KES 10,000), eTIMS invoice number, date, description of goods,
            quantity and unit price, tax rate and VAT amount, total amount,{" "}
            <strong className="text-ink">QR code</strong>, and server confirmation code. Invoices
            issued outside eTIMS <strong className="text-ink">cannot be used</strong> to claim input
            VAT. Scan the QR code using KRA's free app to verify authenticity.
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

          {/* Section 1 - What Is */}
          <section id="what-is-etims-invoice" aria-labelledby="what-is-etims-invoice-h">
            <h2 id="what-is-etims-invoice-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What Is an eTIMS-Compliant Invoice?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                An eTIMS-compliant invoice is a tax invoice that has been <strong className="text-ink">generated,
                transmitted, and confirmed</strong> through KRA's Electronic Tax Invoice Management System
                (eTIMS). It is not simply an invoice that includes a KRA PIN - it must be created through
                one of KRA's approved eTIMS solutions.
              </p>
              <p>
                When you issue an eTIMS invoice, the system <strong className="text-ink">transmits the invoice
                data to KRA's servers in real time</strong> and returns a unique eTIMS invoice number, a
                QR code, and a server confirmation code. These three elements prove that KRA has received
                and recorded the invoice.
              </p>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Key point:</strong> An invoice from a word processor, Excel
                  spreadsheet, or handwritten receipt pad is <strong className="text-ink">not</strong> an
                  eTIMS-compliant invoice - even if it includes your KRA PIN. Only invoices generated
                  through eTIMS Lite, eTIMS Client, eTIMS Trader, or VSCU/OSCU qualify.
                </p>
              </div>
              <p>
                See our{" "}
                <a href="/resources/etims-onboarding-guide/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  full eTIMS onboarding guide
                </a>{" "}
                for instructions on registering for and setting up each eTIMS solution type.
              </p>
            </div>
          </section>

          {/* Section 2 - Mandatory Fields */}
          <section id="mandatory-fields" aria-labelledby="mandatory-fields-h">
            <h2 id="mandatory-fields-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Mandatory eTIMS Invoice Fields
            </h2>
            <p className="text-[0.9rem] text-ink-soft leading-relaxed mb-5">
              Every eTIMS invoice must include the following 10 fields. Missing even one can result
              in KRA rejecting the invoice and blocking the buyer's input VAT claim.
            </p>
            <div className="space-y-3">
              {[
                { field: "Seller's registered business name and KRA PIN", note: "Must match the name on your KRA PIN certificate exactly. No nicknames or trading names." },
                { field: "Buyer's KRA PIN (B2B transactions above KES 10,000)", note: "For B2C or transactions below KES 10,000, record the buyer's full name and ID number instead." },
                { field: "Sequential eTIMS invoice number", note: "Automatically generated by the eTIMS system. Do not create your own numbering system." },
                { field: "Invoice date", note: "The actual transaction date. Backdating or forward-dating invoices is an offence under the Tax Procedures Act." },
                { field: "Full description of goods or services", note: "Generic descriptions like 'miscellaneous' or 'services' may be rejected on audit. Be specific." },
                { field: "Quantity and unit price (excluding VAT)", note: "Clearly state quantities and the unit price before VAT. Bulk discounts should be shown as reduced unit prices." },
                { field: "Tax rate and VAT amount (in words and figures)", note: "Show the VAT amount numerically (KES 1,600) and in words (One Thousand Six Hundred Shillings)." },
                { field: "Total amount including VAT", note: "The gross amount the customer must pay. Must match the sum of net + VAT." },
                { field: "QR code", note: "KRA's encrypted QR code containing invoice metadata. Must be scannable via the eTIMS verification app." },
                { field: "eTIMS server confirmation code", note: "A unique alphanumeric code from KRA's server confirming the invoice was transmitted and recorded." },
              ].map(({ field, note }) => (
                <div key={field} className="flex items-start gap-3 border border-hairline rounded-md p-3.5">
                  <CheckCircle size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink text-[0.88rem]">{field}</p>
                    <p className="text-[0.8rem] text-ink-muted mt-0.5">{note}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 - B2B vs B2C */}
          <section id="b2b-vs-b2c" aria-labelledby="b2b-vs-b2c-h">
            <h2 id="b2b-vs-b2c-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              B2B vs B2C Invoicing Rules
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                eTIMS has different requirements depending on who your customer is. Here is the breakdown:
              </p>
              <div className="border border-hairline rounded-lg overflow-hidden">
                <table className="w-full text-[0.83rem]">
                  <thead>
                    <tr className="border-b border-hairline bg-canvas-alt">
                      <th className="text-left p-3.5 font-semibold text-ink">Scenario</th>
                      <th className="text-left p-3.5 font-semibold text-ink">Buyer Details Required</th>
                      <th className="text-left p-3.5 font-semibold text-ink">VAT Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hairline">
                    <tr>
                      <td className="p-3.5 text-ink-muted">B2B sale above KES 10,000</td>
                      <td className="p-3.5 text-ink-muted">Buyer's KRA PIN (mandatory)</td>
                      <td className="p-3.5 text-ink font-medium">16%</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 text-ink-muted">B2B sale below KES 10,000</td>
                      <td className="p-3.5 text-ink-muted">Buyer's name and ID number</td>
                      <td className="p-3.5 text-ink font-medium">16%</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 text-ink-muted">B2C sale (individual consumer)</td>
                      <td className="p-3.5 text-ink-muted">Buyer's name and ID number</td>
                      <td className="p-3.5 text-ink font-medium">16%</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 text-ink-muted">Sale to unregistered person below KES 10,000</td>
                      <td className="p-3.5 text-ink-muted">Simplified invoice - name only</td>
                      <td className="p-3.5 text-ink font-medium">16%</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 text-ink-muted">Export of digital services</td>
                      <td className="p-3.5 text-ink-muted">Customer name and country</td>
                      <td className="p-3.5 text-ink font-medium">0% (zero-rated)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Warning size={16} weight="fill" className="text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Common mistake:</strong> Many businesses skip asking for the
                  buyer's KRA PIN on B2B transactions above KES 10,000. This is a compliance violation.
                  If the buyer later asks for a corrected invoice so they can claim input VAT, you must
                  issue a credit note and a new eTIMS invoice - an administrative burden for both parties.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 - QR Codes */}
          <section id="qr-codes" aria-labelledby="qr-codes-h">
            <h2 id="qr-codes-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              QR Codes and Server Confirmation Codes
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Every eTIMS invoice has two security features that prove it was transmitted to KRA:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="border border-hairline rounded-lg p-5">
                  <p className="font-semibold text-ink text-[0.95rem] mb-2">QR Code</p>
                  <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                    KRA generates an encrypted QR code for every eTIMS invoice. The QR code contains the
                    invoice number, seller PIN, buyer PIN (if applicable), invoice date, total amount, and
                    a cryptographic signature. Anyone can scan it with KRA's free mobile app to verify the
                    invoice is genuine and was transmitted to KRA.
                  </p>
                </div>
                <div className="border border-hairline rounded-lg p-5">
                  <p className="font-semibold text-ink text-[0.95rem] mb-2">Server Confirmation Code</p>
                  <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                    This is a unique alphanumeric code (e.g., "ETIMS-KE-2026-8A3F9B") generated by KRA's
                    server after receiving and validating the invoice data. It proves the invoice exists in
                    KRA's database. You should record this code alongside the invoice for your records.
                  </p>
                </div>
              </div>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Pro tip:</strong> Always scan your own eTIMS invoice QR code
                  before sending it to the customer. If the QR code fails, the invoice was not transmitted
                  to KRA - even if your eTIMS system showed "success". This can happen due to network
                  interruptions or system glitches. A failing QR code means the invoice is not compliant
                  and your customer cannot claim input VAT.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 - Verification */}
          <section id="verification" aria-labelledby="verification-h">
            <h2 id="verification-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How to Verify an eTIMS Invoice
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                As a buyer, you should <strong className="text-ink">always verify</strong> that an eTIMS
                invoice is genuine before claiming input VAT. Here is how:
              </p>
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: "Download KRA's eTIMS verification app",
                    detail: "Available on Google Play Store and Apple App Store. Search for 'KRA eTIMS Verify' or 'eTIMS Verification'. It is free and requires no login.",
                  },
                  {
                    step: 2,
                    title: "Scan the QR code on the invoice",
                    detail: "Open the app and point your phone camera at the QR code printed on the invoice. The app will decode it and fetch the invoice details from KRA's server.",
                  },
                  {
                    step: 3,
                    title: "Compare the details on screen with the printed invoice",
                    detail: "The app displays the seller name, KRA PIN, invoice number, date, total amount, and VAT amount. Verify these match the printed invoice exactly. Any discrepancy means the invoice may be fraudulent or not properly transmitted.",
                  },
                  {
                    step: 4,
                    title: "Check the server confirmation code",
                    detail: "If the QR code scan succeeds, note the server confirmation code displayed by the app. Compare it with the code printed on the invoice. Both codes should match.",
                  },
                  {
                    step: 5,
                    title: "Save a copy for your records",
                    detail: "Take a screenshot of the verification result and save it alongside the invoice PDF. This serves as proof that you performed due diligence before claiming input VAT.",
                  },
                ].map(({ step, title, detail }) => (
                  <div key={step} className="flex gap-4">
                    <span className="bg-ink text-canvas rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 tabular-nums">{step}</span>
                    <div>
                      <p className="font-semibold text-ink text-[0.9rem]">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border border-canvas-warm bg-[#fffbf0] dark:bg-[#2a1f00] dark:border-[#4a3800] rounded-lg p-4 flex items-start gap-3">
                <Warning size={17} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#7a5500] dark:text-[#ffcc44] text-[0.85rem] mb-1">
                    Cannot verify? Do not claim the input VAT
                  </p>
                  <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                    If the QR code fails to scan or the app displays different details than the printed
                    invoice, do not claim input VAT on that invoice. Report the issue to your supplier
                    and ask them to issue a corrected eTIMS invoice. Claiming input VAT on an unverifiable
                    invoice risks a penalty of 75-200% of the tax evaded if KRA flags it on audit.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 - Supplier Not on eTIMS */}
          <section id="supplier-not-on-etims" aria-labelledby="supplier-not-on-etims-h">
            <h2 id="supplier-not-on-etims-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What If Your Supplier Is Not on eTIMS?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                If your supplier does not issue eTIMS-compliant invoices, you face a direct problem:
                <strong className="text-ink"> you cannot claim input VAT</strong> on those purchases.
                Here is what you can do:
              </p>
              <div className="space-y-4">
                {[
                  {
                    option: "1. Ask your supplier to register for eTIMS",
                    detail: "Send your supplier our eTIMS onboarding guide and explain that their non-compliance is blocking your input VAT claims. Most suppliers will register once they understand the impact on their B2B customers.",
                  },
                  {
                    option: "2. Use Buyer-Initiated Invoicing (BII)",
                    detail: "If your supplier is not yet on eTIMS but you still need the goods, you can use BII on the eTIMS system. You generate an eTIMS invoice on behalf of your supplier, transmit it to KRA, and the supplier receives a notification to accept or reject it. If accepted, you can claim input VAT. BII is a transitional solution - the supplier is expected to onboard within a reasonable period.",
                  },
                  {
                    option: "3. Switch to a compliant supplier",
                    detail: "If your supplier refuses to register for eTIMS and BII is not practical, consider switching to a supplier who is eTIMS-compliant. The cost of losing input VAT claims month after month adds up quickly - often exceeding any price advantage from a non-compliant supplier.",
                  },
                  {
                    option: "4. Report persistent non-compliance to KRA",
                    detail: "If a major supplier refuses to onboard eTIMS despite your requests, you can report them to KRA via the iTax portal or through KRA's compliance hotline. KRA takes eTIMS non-compliance seriously, especially for businesses above the VAT threshold.",
                  },
                ].map(({ option, detail }) => (
                  <div key={option} className="border border-hairline rounded-lg p-4">
                    <p className="font-semibold text-ink text-[0.88rem] mb-1">{option}</p>
                    <p className="text-[0.83rem] text-ink-muted leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
              <p>
                See our{" "}
                <a href="/resources/vat-special-table-risks/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  VAT Special Table guide
                </a>{" "}
                for more on the risks of buying from non-compliant suppliers.
              </p>
            </div>
          </section>

          {/* Section 7 - Common Mistakes */}
          <section id="common-mistakes" aria-labelledby="common-mistakes-h">
            <h2 id="common-mistakes-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Common eTIMS Invoice Mistakes
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <div className="space-y-4">
                {[
                  {
                    mistake: "Using your own invoice numbering instead of eTIMS numbers",
                    fix: "The eTIMS system generates sequential invoice numbers automatically. Do not override them or create your own.",
                  },
                  {
                    mistake: "Issuing one eTIMS invoice for multiple smaller sales",
                    fix: "Each sale should have its own eTIMS invoice. Consolidated end-of-day invoices are not compliant for B2B transactions where each customer needs their own invoice.",
                  },
                  {
                    mistake: "Not printing or emailing the QR code",
                    fix: "The QR code must be physically printed on paper invoices or embedded in PDF invoices. Without it, the buyer cannot verify the invoice.",
                  },
                  {
                    mistake: "Using the wrong tax rate (16% vs 8% vs 0%)",
                    fix: "Apply 16% to standard-rated supplies, 8% to supplies to unregistered persons (if applicable under your election), and 0% to zero-rated supplies like exports. Using the wrong rate can result in an audit adjustment.",
                  },
                  {
                    mistake: "Not showing VAT in words",
                    fix: "The VAT Act requires the VAT amount to appear in both words and figures on every invoice. Many eTIMS templates include this automatically, but verify before printing.",
                  },
                  {
                    mistake: "Issuing credit notes outside eTIMS",
                    fix: "Credit notes must also be issued through eTIMS. Issuing a manual credit note outside the system means the original invoice remains in KRA's database as valid, creating a discrepancy.",
                  },
                ].map(({ mistake, fix }) => (
                  <div key={mistake} className="border border-hairline rounded-lg p-4">
                    <p className="font-semibold text-ink text-[0.88rem] mb-1">
                      <Warning size={14} weight="fill" className="inline-block text-amber-500 mr-1.5 -mt-0.5" aria-hidden="true" />
                      {mistake}
                    </p>
                    <p className="text-[0.83rem] text-ink-muted leading-relaxed">{fix}</p>
                  </div>
                ))}
              </div>
              <div className="border border-brand/25 bg-brand-muted rounded-lg p-4 flex items-start gap-3">
                <Info size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-soft leading-relaxed">
                  <strong className="text-ink">Need an eTIMS review?</strong> Smart VAT Kenya can review
                  your current invoicing process and identify compliance gaps. We also offer eTIMS
                  onboarding assistance and can help you set up the right solution for your business.
                  Message us on WhatsApp for a free initial consultation.
                </p>
              </div>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Download the official PDFs:</strong> Get the complete eTIMS user guides, onboarding manuals, and KRA invoicing references from our{" "}
                  <a href="/forms/" className="text-brand underline underline-offset-2 hover:text-brand-hover font-medium">KRA forms &amp; manuals page</a>.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection faqSchema={faqSchema} />
        </article>

        {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-3">More Guides</p>
          <div className="mb-6">
            <p className="text-[0.83rem] text-ink-muted leading-relaxed">
              Looking further ahead?{" "}
              <a href="/resources/cetis-kenya-2027/" className="text-brand underline underline-offset-2 hover:text-brand-hover">CETIS Kenya 2027</a>{" "}
              is KRA&apos;s planned pre-clearance e-invoicing system (in procurement for 2027&ndash;28) - a valid, structured invoice today is the fastest path to CETIS readiness.
            </p>
          </div>
          <ArticleGrid currentSlug="etims-invoicing-guide" />
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
