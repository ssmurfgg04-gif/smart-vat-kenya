import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info, UserCircleMinus } from "@phosphor-icons/react/dist/ssr"

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
    { "@type": "ListItem", position: 3, name: "eTIMS Buyer PIN Missing", item: "https://smartvatkenya.co.ke/resources/etims-buyer-pin-missing/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org" as const,
  "@type": "Article",
  headline: "eTIMS Buyer PIN Missing or Invalid - How to Invoice B2B (2026)",
  description:
    "When KRA rejects your eTIMS invoice with 'buyer PIN required' or 'invalid buyer TIN', here is when the buyer PIN is actually required, how to issue a valid B2B invoice, and what to do when the customer does not have a PIN.",
  author: personSchema(),
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-08-22",
  dateModified: LAST_VERIFIED,
  url: "https://smartvatkenya.co.ke/resources/etims-buyer-pin-missing",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/etims-buyer-pin-missing",
}

const faqSchema = {
  "@context": "https://schema.org" as const,
  "@type": "FAQPage" as const,
  mainEntity: [
    {
      "@type": "Question" as const,
      name: "When is the buyer PIN required on an eTIMS invoice?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "The buyer KRA PIN is required on eTIMS invoices when (1) the buyer is a VAT-registered business and the sale is KES 10,000 or more, or (2) the buyer requests a tax invoice to claim input VAT. For B2C sales to walk-in consumers below KES 10,000, the buyer PIN is optional. For B2B sales regardless of amount, the PIN is mandatory - KRA rejects the invoice if it is missing on a B2B transaction.",
      },
    },
    {
      "@type": "Question" as const,
      name: "What error does KRA show when the buyer PIN is missing?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Three error messages: 'ERR_BUYER_PIN_REQUIRED' (B2B sale, no PIN captured), 'ERR_BUYER_PIN_INVALID' (PIN captured but fails the KRA PIN format check or checksum), or 'ERR_BUYER_PIN_NOT_VAT_REGISTERED' (PIN is valid but does not have a VAT obligation - KRA refuses to allow input VAT claim on a non-VAT buyer). The fix depends on which error fires.",
      },
    },
    {
      "@type": "Question" as const,
      name: "What if my customer does not have a KRA PIN?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "If the customer is a final consumer (no PIN), issue the invoice as B2C with the buyer PIN field blank. This is fully valid - just ensure the invoice amount is below the KES 10,000 threshold for the simplified tax invoice format. If the sale is above KES 10,000 and the customer has no PIN, capture the customer's name and ID number instead - KRA does not require a PIN on B2C invoices above KES 10,000, but the customer loses the right to claim input VAT (which is fine for a final consumer).",
      },
    },
    {
      "@type": "Question" as const,
      name: "Can I issue an eTIMS invoice to a foreign buyer with no Kenyan PIN?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Yes - for export sales, the buyer PIN field should be left blank and the invoice marked as 'Export' or 'Zero-rated'. Foreign buyers do not have Kenyan KRA PINs. The export invoice requires the buyer's foreign tax ID (if available) and the country of destination. Exports are zero-rated for VAT - no output VAT is charged, and you do not need to account for input VAT on the export sale.",
      },
    },
    {
      "@type": "Question" as const,
      name: "How do I verify a buyer's KRA PIN before issuing the invoice?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Use the KRA PIN Checker tool on itax.kra.go.ke (under 'e-Services > PIN Checker'). Enter the buyer's 11-digit PIN and the captcha. The tool returns the registered name and the active tax obligations. Match the registered name against the buyer's identity document. If the name does not match, do not issue the invoice - the PIN does not belong to your buyer. This protects you from KRA audit queries later.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Why does KRA reject invoices to non-VAT-registered buyers above KES 10,000?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "KRA does NOT reject invoices solely because the buyer is non-VAT-registered. The 'ERR_BUYER_PIN_NOT_VAT_REGISTERED' error fires only if you marked the invoice as B2B (claimable) but the buyer PIN has no VAT obligation. The fix: change the invoice type from B2B to B2C, and the buyer PIN becomes optional. The sale is still recorded, output VAT is still charged - the only difference is the buyer cannot claim input VAT, which is correct for a non-VAT buyer.",
      },
    },
  ],
}

const toc = [
  { id: "when-required", label: "When the Buyer PIN Is Required" },
  { id: "error-types", label: "Types of Buyer PIN Errors" },
  { id: "verify-pin", label: "How to Verify a Buyer's PIN" },
  { id: "no-pin-customer", label: "If the Customer Has No PIN" },
  { id: "foreign-buyers", label: "Foreign Buyers & Exports" },
  { id: "faq", label: "Frequently Asked Questions" },
]

export default function ETimsBuyerPinMissingPage() {
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
            {["eTIMS", "Buyer PIN", "B2B", "Validation"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            eTIMS Buyer PIN Missing or Invalid - How to Invoice B2B Customers
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
            The buyer KRA PIN is <strong className="text-ink">required on eTIMS invoices only when the buyer is VAT-registered</strong> (B2B) and the sale is <strong className="text-ink">KES 10,000+</strong>. For B2C sales to walk-in consumers below KES 10,000, the PIN field can be blank. If your B2B invoice shows &ldquo;ERR_BUYER_PIN_REQUIRED&rdquo; or &ldquo;ERR_BUYER_PIN_INVALID&rdquo;, ask the buyer for their 11-digit KRA PIN, <strong className="text-ink">verify it on the KRA PIN Checker</strong> (itax.kra.go.ke), and re-issue the invoice with the correct PIN. If the buyer has no PIN, change the invoice type from B2B to B2C.
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

          {/* Section 1 - When required */}
          <section id="when-required" aria-labelledby="when-required-h">
            <h2 id="when-required-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              When the Buyer PIN Is Actually Required
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The rule is in the VAT (General) Regulations and KRA&rsquo;s eTIMS implementation guide. The buyer KRA PIN is required in <strong className="text-ink">three specific situations</strong>:
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "B2B sale of KES 10,000 or more",
                    desc: "When the buyer is a VAT-registered business and the sale value (excluding VAT) is KES 10,000 or more. This is the standard B2B rule - the buyer needs the PIN on the invoice to claim input VAT on their own return.",
                  },
                  {
                    title: "Any B2B sale where the buyer requests a tax invoice",
                    desc: "Even if the sale is below KES 10,000, if the buyer explicitly asks for a tax invoice (so they can claim input VAT), the buyer PIN is mandatory. The buyer requesting the tax invoice is essentially opting into the B2B format.",
                  },
                  {
                    title: "Sales to government, parastatals, and large corporates",
                    desc: "Many government entities and large corporates require an eTIMS invoice with their PIN before they will pay. Without their PIN on the invoice, your payment will be held up. Always ask for the PIN upfront when selling to these buyers.",
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
                The buyer PIN is <strong className="text-ink">optional</strong> in these situations:
              </p>
              <ul className="space-y-2 list-disc pl-5 text-[0.85rem] text-ink-soft">
                <li>B2C sales to walk-in consumers below KES 10,000 (use the simplified tax invoice format)</li>
                <li>B2C sales above KES 10,000 where the buyer has no PIN (capture name and ID number instead)</li>
                <li>Export sales to foreign buyers (leave the PIN blank, mark as zero-rated export)</li>
                <li>Sales to non-VAT-registered persons below the KES 10,000 threshold</li>
              </ul>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">The KES 10,000 threshold matters.</strong> Below KES 10,000, you can issue a <em>simplified tax invoice</em> with buyer info optional. Above KES 10,000 to a non-VAT consumer, you must issue a <em>full tax invoice</em> but the buyer PIN is still optional. The full format requires: invoice number, date, seller name + PIN + VAT number, customer name, itemised description, quantity, unit price, VAT rate, VAT amount, total. See our{" "}
                  <a href="/resources/etims-invoicing-guide/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                    eTIMS invoicing guide
                  </a>{" "}
                  for the exact field format.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 - Error types */}
          <section id="error-types" aria-labelledby="error-types-h">
            <h2 id="error-types-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Types of Buyer PIN Errors and Their Fixes
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                KRA&rsquo;s eTIMS platform returns three distinct error codes when the buyer PIN has a problem. Knowing which one you are seeing tells you exactly what to fix:
              </p>
              <div className="space-y-4">
                <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                  <p className="font-mono text-[0.78rem] text-red-600 font-semibold mb-2">ERR_BUYER_PIN_REQUIRED</p>
                  <p className="text-[0.85rem] text-ink-soft mb-3">The invoice was marked as B2B (claimable) but no buyer PIN was captured. KRA rejects because B2B invoices must have the buyer PIN.</p>
                  <p className="font-semibold text-[0.83rem] text-ink mb-2">Fix:</p>
                  <ul className="space-y-1.5 list-disc pl-5 text-[0.83rem] text-ink-muted">
                    <li>Ask the buyer for their 11-digit KRA PIN</li>
                    <li>Verify the PIN on the KRA PIN Checker (itax.kra.go.ke)</li>
                    <li>Re-issue the invoice with the PIN captured in the buyer PIN field</li>
                    <li>If the buyer has no PIN, change the invoice type from B2B to B2C</li>
                  </ul>
                </div>

                <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                  <p className="font-mono text-[0.78rem] text-red-600 font-semibold mb-2">ERR_BUYER_PIN_INVALID</p>
                  <p className="text-[0.85rem] text-ink-soft mb-3">A buyer PIN was captured but it fails KRA&rsquo;s format check. Either it is not 11 digits, the checksum digit is wrong, or the PIN does not exist in KRA&rsquo;s database at all.</p>
                  <p className="font-semibold text-[0.83rem] text-ink mb-2">Fix:</p>
                  <ul className="space-y-1.5 list-disc pl-5 text-[0.83rem] text-ink-muted">
                    <li>Check the PIN format: exactly 11 digits, starts with &lsquo;A&rsquo; or &lsquo;P&rsquo; followed by 10 digits</li>
                    <li>Common typos: letter &lsquo;O&rsquo; instead of zero, letter &lsquo;I&rsquo; instead of one, missing leading zero</li>
                    <li>Verify on the PIN Checker - if it returns &ldquo;PIN does not exist&rdquo;, the PIN is wrong</li>
                    <li>Re-issue with the corrected PIN. Old wrong-PIN invoice is automatically rejected - no cleanup needed.</li>
                  </ul>
                </div>

                <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                  <p className="font-mono text-[0.78rem] text-red-600 font-semibold mb-2">ERR_BUYER_PIN_NOT_VAT_REGISTERED</p>
                  <p className="text-[0.85rem] text-ink-soft mb-3">The buyer PIN is valid (it exists on KRA&rsquo;s database) but the buyer has no VAT obligation. KRA refuses to allow input VAT claims on a non-VAT buyer&rsquo;s invoice. So if your invoice is marked as B2B, the rejection fires.</p>
                  <p className="font-semibold text-[0.83rem] text-ink mb-2">Fix:</p>
                  <ul className="space-y-1.5 list-disc pl-5 text-[0.83rem] text-ink-muted">
                    <li>Change the invoice type from B2B to B2C - the buyer PIN then becomes optional</li>
                    <li>Output VAT is still charged and remitted to KRA - the only difference is the buyer cannot claim input VAT (which is correct, since they are not VAT-registered)</li>
                    <li>If the buyer genuinely needs a B2B invoice (e.g., for their own records), they need to register for VAT first - direct them to our VAT registration service</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 - Verify PIN */}
          <section id="verify-pin" aria-labelledby="verify-pin-h">
            <h2 id="verify-pin-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How to Verify a Buyer&rsquo;s KRA PIN Before Issuing the Invoice
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Always verify the buyer&rsquo;s PIN <em>before</em> issuing the invoice. Issuing an invoice with a wrong PIN creates an audit trail that can come back to bite you during a KRA VAT audit - it looks like you tried to give the buyer an invoice they could misuse.
              </p>
              <ol className="space-y-3 list-none pl-0" role="list">
                {[
                  {
                    step: "01",
                    title: "Go to the KRA PIN Checker",
                    desc: "Visit itax.kra.go.ke. Click on 'PIN Checker' under the e-Services menu. You do not need to log in - the PIN Checker is a public service.",
                  },
                  {
                    step: "02",
                    title: "Enter the buyer's 11-digit PIN",
                    desc: "Type the PIN exactly as the buyer gave it. The PIN format is: a letter ('A' for individual, 'P' for partnership/company) followed by 10 digits. Case does not matter.",
                  },
                  {
                    step: "03",
                    title: "Solve the captcha and submit",
                    desc: "KRA uses a captcha to prevent automated lookups. The page returns: registered name, registered taxpayer type (individual/company/partnership), tax obligations (Income Tax, VAT, PAYE, etc.), and registration status.",
                  },
                  {
                    step: "04",
                    title: "Match the registered name against the buyer's identity",
                    desc: "If the buyer is 'ABC Limited', the PIN Checker should return 'ABC LIMITED' (or a close variant). If the name is completely different - the PIN does not belong to your buyer. Ask for clarification before issuing the invoice.",
                  },
                  {
                    step: "05",
                    title: "Confirm the buyer has a VAT obligation",
                    desc: "The PIN Checker returns a list of active obligations. 'Value Added Tax' should be in that list for a B2B buyer. If VAT is missing, the buyer is not VAT-registered - issue the invoice as B2C instead.",
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
                <UserCircleMinus size={17} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#7a5500] dark:text-[#ffcc44] text-[0.85rem] mb-1">
                    Buyers sometimes give the wrong PIN on purpose
                  </p>
                  <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                    A common fraud pattern: a customer gives you a PIN that belongs to a different VAT-registered business, so they can claim input VAT on a purchase they did not actually make. Always match the PIN Checker&rsquo;s returned name against the customer&rsquo;s identity document (ID card, business registration). If they do not match, refuse the B2B invoice and issue as B2C.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 - No PIN customer */}
          <section id="no-pin-customer" aria-labelledby="no-pin-customer-h">
            <h2 id="no-pin-customer-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              If Your Customer Has No KRA PIN
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Many small consumers and informal-sector customers have no KRA PIN. This is legal - the VAT Act does not require every consumer to have a PIN. You can still issue them a valid tax invoice.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "For sales below KES 10,000 - simplified tax invoice",
                    desc: "Use the simplified format: invoice number, date, seller name + KRA PIN + VAT number, item description, total amount (VAT-inclusive). Buyer info is completely optional. This is the standard B2C format and is what most retail shops use.",
                  },
                  {
                    title: "For sales KES 10,000+ to a consumer with no PIN",
                    desc: "Use the full tax invoice format. Buyer info becomes: customer name (capture from their ID), customer ID number, customer phone number. The buyer PIN field stays blank. KRA accepts this as a valid B2C invoice. Output VAT is charged at 16% on the sale.",
                  },
                  {
                    title: "If the customer insists on a 'tax invoice with PIN'",
                    desc: "Some consumers mistakenly think they need a tax invoice with their (non-existent) PIN for personal records. Explain that for personal/consumer purchases, no PIN is needed - the simplified invoice is sufficient. If they insist, capture their ID number and issue the full B2C format. There is no way to add a fake PIN - KRA will reject it.",
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
                A common pushback: <em>&ldquo;The customer said they need the invoice for their employer to reimburse them, and the employer wants a PIN on the invoice.&rdquo;</em> In this case, ask the customer to provide the <em>employer&rsquo;s</em> KRA PIN (the employer is the actual B2B buyer). Issue the invoice with the employer as the buyer and the employer&rsquo;s PIN captured.
              </p>
            </div>
          </section>

          {/* Section 5 - Foreign buyers */}
          <section id="foreign-buyers" aria-labelledby="foreign-buyers-h">
            <h2 id="foreign-buyers-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Foreign Buyers and Export Sales
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Export sales (goods or services delivered to a foreign buyer) are <strong className="text-ink">zero-rated for VAT</strong>. The buyer PIN field on the eTIMS invoice should be left blank, and the invoice should be marked as &ldquo;Export&rdquo; or &ldquo;Zero-rated&rdquo; depending on your eTIMS Client version.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Capture the buyer's foreign tax ID (if available)",
                    desc: "Many countries issue their own tax IDs (TIN, VAT number, etc.). Capture this in the 'Buyer Reference' or 'Customer Reference' field on the invoice - not in the KRA PIN field. This is good practice and may be required if the buyer's home country asks for proof of export.",
                  },
                  {
                    title: "Record the country of destination",
                    desc: "On the eTIMS Client, the export invoice format has a 'Country' field. Enter the buyer's country (e.g., 'UG' for Uganda, 'TZ' for Tanzania). This is mandatory for export invoices and supports your zero-rating claim in case of an audit.",
                  },
                  {
                    title: "For services to foreign buyers",
                    desc: "Digital services, consultancy, or BPO services to foreign buyers are also zero-rated, but you must prove the buyer is foreign (foreign currency payment, foreign bank account, foreign address). eTIMS Lite supports a 'Services Export' invoice type - use it. See our guide on VAT for digital services for the full export-of-services workflow.",
                  },
                  {
                    title: "Keep proof of export",
                    desc: "For goods: customs export Form C63, bill of lading, foreign buyer payment proof. For services: foreign currency receipt, contract, proof of service delivery. KRA audits zero-rated sales strictly - missing proof disqualifies the zero-rating and you owe output VAT plus penalties.",
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
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Related:</strong> For the full zero-rated export workflow, see our{" "}
                  <a href="/resources/vat-for-importers-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                    VAT for importers and exporters guide
                  </a>{" "}
                  and our{" "}
                  <a href="/resources/vat-digital-services-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                    VAT for digital services guide
                  </a>{" "}
                  for service exports.
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
            Compiled from the VAT (General) Regulations, KRA eTIMS implementation guide, eTIMS Client error code documentation, the KRA PIN Checker service (itax.kra.go.ke), and Smart VAT Kenya&rsquo;s hands-on experience handling B2B invoicing for Kenyan SMEs. Last verified: August 2026.
          </p>
        </div>

        {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More eTIMS Guides</p>
          <ArticleGrid currentSlug="etims-buyer-pin-missing" />
        </div>

        {/* CTA */}
        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">Buyer PIN errors blocking your invoices?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[40ch] mx-auto leading-relaxed">
            Send a screenshot of the error and the buyer&rsquo;s PIN on WhatsApp - we will tell you in minutes whether to fix the PIN, change to B2C, or treat as export.
          </p>
          <a
            href="https://wa.me/254717344440?text=Hi%2C%20I%20need%20help%20with%20eTIMS%20buyer%20PIN%20errors"
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
