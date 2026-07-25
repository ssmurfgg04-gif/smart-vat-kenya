import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info, Prohibit } from "@phosphor-icons/react/dist/ssr"

export const metadata: Metadata = {
  title: "Input VAT Deduction Kenya Guide 2026 | Smart VAT Kenya",
  description:
    "Complete guide to input VAT deduction in Kenya. Learn what qualifies as input VAT, the 6-month claiming window, prohibited claims, how apportionment works for mixed supplies, and what documents you need to support your claim.",
  keywords: [
    "input vat deduction kenya",
    "how to claim input vat kenya",
    "input vat requirements kenya",
    "input tax deduction kenya",
    "what is input vat kenya",
    "input vat 6 month rule kenya",
    "input vat prohibited claims kenya",
    "input vat apportionment kenya",
    "input vat on imports kenya",
    "input vat documents required kenya",
    "vat input tax claim conditions kenya",
    "etims input vat claim kenya",
    "input vat on passenger cars kenya",
    "input vat on entertainment kenya",
    "input vat carry forward kenya",
    "kra input tax deduction conditions",
    "can i claim input vat without etims invoice",
    "input vat on software purchases kenya",
    "vat input tax on laptop kenya",
    "input vat on business expenses kenya",
  ],
  alternates: {
    canonical: "https://smartvatkenya.co.ke/resources/input-vat-deduction-guide",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources" },
    { "@type": "ListItem", position: 3, name: "Input VAT Deduction Guide", item: "https://smartvatkenya.co.ke/resources/input-vat-deduction-guide" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Input VAT Deduction Kenya Guide 2026",
  description:
    "How input VAT deduction works in Kenya: eligibility, 6-month window, prohibited claims, apportionment for mixed supplies, supporting documents, and step-by-step claiming process on iTax.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-25",
  dateModified: "2026-07-25",
  url: "https://smartvatkenya.co.ke/resources/input-vat-deduction-guide",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/input-vat-deduction-guide",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is input VAT in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Input VAT is the VAT you pay when you buy goods or services for your business. If you are VAT-registered and the purchase is used to make taxable supplies, you can deduct this input VAT from the output VAT you collect on your sales. You pay KRA only the difference. For example, if you collected KES 50,000 in output VAT and paid KES 30,000 in input VAT, you remit KES 20,000 to KRA.",
      },
    },
    {
      "@type": "Question",
      name: "What are the conditions for claiming input VAT in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You must meet all of these conditions: (1) You must be VAT-registered. (2) The purchase must be for business use in making taxable supplies. (3) You must hold a valid eTIMS-compliant electronic tax invoice or customs entry. (4) Your KRA PIN must appear on the supplier's eTIMS invoice. (5) The invoice must have been transmitted to KRA by your supplier. (6) The supplier must have declared the sale in their VAT return. (7) The deduction must be claimed within 6 months from the date of supply or importation.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I claim input VAT without an eTIMS invoice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. For all local purchases, you must have a valid eTIMS-compliant invoice transmitted to KRA with your KRA PIN. Manual invoices, receipts, or pro-forma invoices do not qualify. For imports, you need a valid customs entry from iCMS. Without these, the input VAT claim will be disallowed on audit, and you may face a penalty of 75-200% of the tax evaded.",
      },
    },
    {
      "@type": "Question",
      name: "What is the 6-month rule for input VAT deduction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You must claim input VAT within 6 months after the end of the tax period in which the supply or importation occurred. For example, if you made a purchase in January 2026, you have until July 2026 to claim the input VAT. After 6 months, the claim window closes permanently. This applies to both local purchases and imports. If your supplier transmits the invoice late, you can still claim it within 6 months of the invoice date.",
      },
    },
    {
      "@type": "Question",
      name: "What purchases are NOT eligible for input VAT deduction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Input VAT cannot be claimed on: (1) Purchases not related to the business. (2) Purchases used for exempt supplies (e.g., if you sell exempt goods like basic food items, you cannot claim input VAT on related costs). (3) Passenger cars (unless you are in the business of selling or hiring cars). (4) Entertainment expenses (unless provided in the ordinary course of business). (5) Goods or services where you do not have a valid eTIMS invoice. (6) Purchases from non-VAT-registered suppliers.",
      },
    },
    {
      "@type": "Question",
      "name": "What happens if input VAT exceeds output VAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your input VAT exceeds output VAT in a tax period, you have a VAT credit position. You can carry forward the excess to the next tax period and offset it against future output VAT. Alternatively, if the excess arises from zero-rated supplies, exports, or certain qualifying circumstances, you can apply for a refund. The refund application must be lodged within 12 months of the tax becoming due (reduced from 24 months by the Finance Act 2025).",
      },
    },
  ],
}

export default function InputVatPage() {
  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-[880px] mx-auto px-6 lg:px-10 py-12">
        <Link href="/resources" className="inline-flex items-center gap-2 text-ink-muted hover:text-ink text-sm font-medium mb-8 transition-colors">
          <ArrowLeft size={14} aria-hidden="true" /> All Guides
        </Link>

        <article>
          <header className="mb-10">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand mb-3">Guide — Input VAT</p>
            <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.3rem)] font-semibold text-ink tracking-tight leading-tight mb-4 text-balance">
              Input VAT Deduction Kenya Guide 2026
            </h1>
            <p className="text-[0.9rem] text-ink-muted leading-relaxed max-w-[65ch]">
              Input VAT deduction is how VAT-registered businesses recover the VAT they pay on business purchases.
              Get it right and you reduce your monthly VAT bill. Get it wrong and you lose the deduction entirely —
              or face penalties. This guide covers everything from eligibility to the 6-month deadline.
            </p>
          </header>

          <div className="space-y-10">
            {/* Section 1 — What is Input VAT */}
            <section id="what-is-input-vat" aria-labelledby="what-is-input-vat-h">
              <h2 id="what-is-input-vat-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                What Is Input VAT?
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  Input VAT is the 16% VAT you pay when your business buys goods or services from a VAT-registered
                  supplier. When you file your monthly VAT return, you can deduct this input VAT from the output VAT
                  you collected on your sales. Only the net difference is paid to KRA.
                </p>
                <div className="border border-hairline rounded-lg p-5">
                  <p className="font-semibold text-ink text-[0.88rem] mb-2">Example</p>
                  <div className="text-[0.83rem] text-ink-muted space-y-1">
                    <p>Your sales for the month: KES 1,000,000 + VAT KES 160,000 (output VAT collected)</p>
                    <p>Your purchases for the month: KES 500,000 + VAT KES 80,000 (input VAT paid)</p>
                    <p className="font-semibold text-ink pt-1 border-t border-hairline mt-2">
                      Net VAT payable to KRA: KES 160,000 - KES 80,000 = KES 80,000
                    </p>
                  </div>
                </div>
                <p>
                  Without input VAT deduction, you would pay the full KES 160,000 to KRA and bear the KES 80,000
                  as a cost. With proper deduction, you only remit the net amount.
                </p>
              </div>
            </section>

            {/* Section 2 — 7 Conditions */}
            <section id="conditions" aria-labelledby="conditions-h">
              <h2 id="conditions-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                7 Conditions for Claiming Input VAT
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>You must satisfy all of these conditions for KRA to allow your input VAT claim:</p>
                <div className="space-y-3">
                  {[
                    { num: 1, condition: "You must be VAT-registered", detail: "Only businesses with active VAT registration can claim input VAT. If you are not registered, the VAT you pay on purchases is a cost, not a reclaimable tax." },
                    { num: 2, condition: "The purchase must be for business use", detail: "Personal purchases and non-business expenses do not qualify. If you use an item partly for business and partly personally, only the business-use portion is claimable." },
                    { num: 3, condition: "The purchase must be used for taxable supplies", detail: "If you make only exempt supplies (e.g., basic food items, medical services), you cannot claim input VAT. For mixed supplies (both taxable and exempt), you need apportionment." },
                    { num: 4, condition: "You must have a valid eTIMS invoice", detail: "The invoice must be generated through eTIMS, contain your KRA PIN, and have been transmitted to KRA by the supplier. Manual invoices, receipts, or supplier statements are not acceptable." },
                    { num: 5, condition: "Your KRA PIN must appear on the invoice", detail: "If the supplier captured your PIN incorrectly or omitted it, the invoice will not appear in your auto-populated purchases CSV. You cannot claim input VAT on that invoice." },
                    { num: 6, condition: "The supplier must have declared the sale", detail: "The supplier must have included the invoice in their own VAT return. If they did not file or omitted your invoice, KRA will not allow your input VAT claim." },
                    { num: 7, condition: "Claim within 6 months", detail: "The deduction must be claimed within 6 months after the end of the tax period of the supply or importation. After that, the claim window closes permanently." },
                  ].map(({ num, condition, detail }) => (
                    <div key={num} className="flex gap-3">
                      <span className="bg-brand/10 text-brand rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{num}</span>
                      <div>
                        <p className="font-semibold text-ink text-[0.88rem]">{condition}</p>
                        <p className="text-[0.83rem] text-ink-muted leading-relaxed">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 3 — Prohibited Claims */}
            <section id="prohibited" aria-labelledby="prohibited-h">
              <h2 id="prohibited-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Prohibited Input VAT Claims
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>KRA specifically prohibits input VAT deduction on these categories:</p>
                <div className="space-y-3">
                  {[
                    { category: "Passenger vehicles", detail: "Input VAT on passenger cars (saloon cars, SUVs, station wagons) is not deductible unless you are in the business of selling or hiring vehicles. Utility vehicles like pick-ups and delivery vans used solely for business may qualify." },
                    { category: "Entertainment expenses", detail: "Meals, refreshments, event tickets, and similar entertainment costs are not eligible for input VAT deduction, unless providing entertainment is your ordinary business." },
                    { category: "Exempt supplies", detail: "If you purchase goods or services that are used to make exempt supplies, the related input VAT cannot be claimed. For mixed businesses, an apportionment formula is required." },
                    { category: "Non-business purchases", detail: "Any purchase that is not wholly and exclusively for business purposes. Hobby expenses, personal items, and family purchases do not qualify." },
                    { category: "Purchases from non-VAT suppliers", detail: "If your supplier is not VAT-registered, they do not charge VAT, and there is no input VAT to claim. You cannot create an input VAT claim on a non-VAT invoice." },
                  ].map(({ category, detail }) => (
                    <div key={category} className="border border-hairline rounded-lg p-4">
                      <p className="font-semibold text-ink text-[0.88rem] mb-1">
                        <Prohibit size={14} weight="fill" className="inline-block text-red-500 mr-1.5 -mt-0.5" aria-hidden="true" />
                        {category}
                      </p>
                      <p className="text-[0.83rem] text-ink-muted leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 4 — Apportionment */}
            <section id="apportionment" aria-labelledby="apportionment-h">
              <h2 id="apportionment-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Apportionment for Mixed Supplies
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  If your business makes both taxable supplies (subject to VAT at 16% or 0%) and exempt supplies
                  (no VAT), you cannot claim all your input VAT. You must apportion it using a fair method.
                  The standard approach is the turnover-based formula:
                </p>
                <div className="border border-hairline rounded-lg p-5">
                  <p className="font-semibold text-ink text-[0.88rem] mb-2">Apportionment Formula</p>
                  <div className="text-[0.83rem] text-ink-muted space-y-1">
                    <p>Allowable input VAT = Total input VAT × (Taxable turnover ÷ Total turnover)</p>
                    <p className="text-xs text-ink-muted mt-1">Where taxable turnover includes 16% rated and 0% rated supplies, but not exempt supplies.</p>
                  </div>
                </div>
                <div className="border border-hairline rounded-lg p-5">
                  <p className="font-semibold text-ink text-[0.88rem] mb-2">Example</p>
                  <div className="text-[0.83rem] text-ink-muted space-y-1">
                    <p>Total turnover: KES 1,000,000 (KES 800,000 taxable + KES 200,000 exempt)</p>
                    <p>Total input VAT paid: KES 50,000</p>
                    <p>Allowable input VAT: 50,000 × (800,000 ÷ 1,000,000) = KES 40,000</p>
                    <p>Disallowed input VAT: KES 50,000 - KES 40,000 = KES 10,000</p>
                  </div>
                </div>
                <div className="border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800/40 rounded-lg p-4 flex items-start gap-3">
                  <Warning size={17} weight="fill" className="text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-amber-800 dark:text-amber-300 text-[0.85rem] mb-1">
                      The 90:10 rule was deleted by the Finance Act 2025
                    </p>
                    <p className="text-[0.83rem] text-amber-700 dark:text-amber-400 leading-relaxed">
                      Previously, businesses with exempt supplies under 10% of total turnover could claim full input
                      VAT deduction. This rule was removed. You must now apportion even if your exempt supplies
                      are small. Update your accounting process accordingly.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 — Documentation Requirements */}
            <section id="documentation" aria-labelledby="documentation-h">
              <h2 id="documentation-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Documents Required for Input VAT Claims
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>To support your input VAT deduction, maintain these documents:</p>
                <ul className="space-y-2">
                  {[
                    { doc: "Valid eTIMS-compliant invoice", detail: "Generated through eTIMS with QR code and server confirmation code. Must show your KRA PIN. Retain both the PDF copy and the QR verification screenshot." },
                    { doc: "Customs entry (for imports)", detail: "Import declaration (IDF), customs entry, and proof of VAT payment at the port of entry. The import must be declared in iCMS." },
                    { doc: "Credit / debit notes", detail: "If adjustments were made to invoices, keep the corresponding credit or debit notes issued through eTIMS." },
                    { doc: "Payment evidence", detail: "Bank statements, M-Pesa statements, or payment receipts showing you paid the supplier. While not always required, this is critical during audit." },
                    { doc: "Apportionment records (if applicable)", detail: "A spreadsheet or schedule showing your taxable vs exempt turnover calculation and the resulting apportionment percentage each month." },
                  ].map(({ doc, detail }) => (
                    <li key={doc} className="flex gap-3">
                      <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1.5" aria-hidden="true" />
                      <div><strong className="text-ink">{doc}:</strong> <span className="text-ink-soft">{detail}</span></div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Section 6 — Carry Forward vs Refund */}
            <section id="carry-forward" aria-labelledby="carry-forward-h">
              <h2 id="carry-forward-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Excess Input VAT: Carry Forward or Refund?
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  When your input VAT exceeds output VAT in a period, you have two options:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="border border-hairline rounded-lg p-5">
                    <p className="font-semibold text-ink text-[0.88rem] mb-2">Option 1: Carry Forward</p>
                    <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                      The excess is automatically carried to the next tax period. You offset it against future
                      output VAT. This is the default option and requires no application. Most businesses with
                      fluctuating sales use this method.
                    </p>
                  </div>
                  <div className="border border-hairline rounded-lg p-5">
                    <p className="font-semibold text-ink text-[0.88rem] mb-2">Option 2: Apply for a Refund</p>
                    <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                      You can apply for a refund of excess input VAT through the iTax portal. Refunds are
                      typically processed when the excess arises from zero-rated supplies or exports. Apply within
                      12 months of the tax becoming due. Refunds may trigger an audit.
                    </p>
                  </div>
                </div>
                <p>
                  See our <Link href="/resources/vat-refund-guide-kenya" className="text-brand underline underline-offset-2 hover:text-brand-hover">VAT Refund Guide</Link> for the full step-by-step refund process.
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
          </div>
        </article>

        <div className="mt-14 pt-8 border-t border-hairline flex items-center justify-between flex-wrap gap-4">
          <Link href="/resources" className="inline-flex items-center gap-2 text-ink-muted hover:text-ink text-sm font-medium transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> All Guides
          </Link>
          <a
            href="https://wa.me/254721725958?text=I%20need%20help%20with%20input%20VAT%20deduction%20for%20my%20business"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            Get Help with Input VAT
            <ArrowRight size={14} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </div>
    </>
  )
}
