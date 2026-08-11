import { ArrowLeft, ArrowRight, Info } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "Bad Debt VAT Refund Guide", item: "https://smartvatkenya.co.ke/resources/vat-bad-debt-refund-kenya/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "VAT Bad Debt Relief Kenya 2026: Refund Guide for Unpaid Invoices",
  description:
    "The Finance Act 2026 extended the bad debt VAT refund waiting period from 2 years to 3 years. Guide to claiming VAT refunds on supplies where your customer never paid, including qualifying conditions, application process, and how the new timeline works.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-28",
  dateModified: "2026-07-28",
  url: "https://smartvatkenya.co.ke/resources/vat-bad-debt-refund-kenya",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/vat-bad-debt-refund-kenya",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is VAT bad debt relief in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VAT bad debt relief allows a supplier to claim a refund of VAT paid to KRA on supplies where the customer never paid. If you issued an invoice, charged VAT, and remitted that VAT to KRA, but the customer defaulted on payment, you can claim back the VAT portion after a specified waiting period.",
      },
    },
    {
      "@type": "Question",
      name: "How long must I wait before claiming bad debt VAT relief?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The waiting period was extended from 2 years to 3 years by the Finance Act 2026. However, if the customer enters statutory management, receivership, or liquidation before the 3-year period ends, you can claim immediately — you do not need to wait the full 3 years.",
      },
    },
    {
      "@type": "Question",
      name: "What qualifies as a bad debt for VAT purposes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The debt must arise from a taxable supply of goods or services where: (1) you have issued an eTIMS-compliant invoice and accounted for the VAT, (2) the customer has not paid the full consideration within the waiting period, (3) you have taken reasonable steps to recover the debt, and (4) the debt has been written off in your accounting records as irrecoverable.",
      },
    },
    {
      "@type": "Question",
      name: "Can I claim bad debt VAT relief if my customer is a related party?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Bad debt relief does not apply to debts arising from supplies between related parties. KRA treats related-party transactions as potentially structured to create artificial bad debt claims. You must be dealing at arm's length with an independent customer.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I later receive payment after claiming the refund?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you receive payment (or part payment) from the customer after successfully claiming the bad debt VAT refund, you must repay the refunded VAT to KRA on your next VAT return. You effectively reverse the bad debt claim in proportion to the amount recovered.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for VAT bad debt relief?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The claim is submitted through the KRA iTax portal. You file an application with supporting documentation: the original eTIMS invoice, evidence of VAT remittance, proof of recovery attempts (demand letters, legal notices), evidence that the debt has been written off, and a declaration that the customer is not a related party. The application is reviewed by KRA and approved or rejected within a statutory period.",
      },
    },
  ],
}

export default function VatBadDebtRefundKenya() {
  return (
    <>
      <script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id="article-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script id="faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-[700px] mx-auto px-6 lg:px-10 py-12">
        <a href="/resources/" className="inline-flex items-center gap-2 text-ink-muted hover:text-ink text-sm font-medium mb-8 transition-colors">
          <ArrowLeft size={14} aria-hidden="true" /> All Resources
        </a>

        <article>
          <header className="mb-8">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand mb-3">VAT Refunds</p>
            <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-semibold text-ink tracking-tight leading-tight mb-3 text-balance">
              VAT Bad Debt Relief Kenya 2026: Guide for Unpaid Invoices
            </h1>
            <p className="text-[0.9rem] text-ink-muted leading-relaxed">
              <time dateTime="2026-07-28">28 July 2026</time> &middot; Updated for Finance Act 2026
            </p>
          </header>

          <div className="prose prose-gray max-w-none">
            <p>
              If your customer does not pay, you can <strong>claim back the VAT you already remitted</strong> on that unpaid invoice — this is called <strong>VAT bad debt relief</strong>. The Finance Act 2026 extended the waiting period from <strong>2 years to 3 years</strong>, unless the customer enters statutory management, receivership, or liquidation, in which case you can claim immediately.
            </p>

            <h2>How Bad Debt VAT Relief Works</h2>
            <p>When you issue a VAT invoice to a customer, you must remit the VAT to KRA regardless of whether the customer pays you. If the customer defaults, you have paid VAT to KRA on income you never received. Bad debt relief allows you to reclaim that VAT.</p>
            <p>Example:</p>
            <ul>
              <li>You invoice a customer KES 116,000 (KES 100,000 + KES 16,000 VAT)</li>
              <li>You remit the KES 16,000 VAT to KRA on your monthly return</li>
              <li>The customer defaults and never pays</li>
              <li>After 3 years (or earlier if the customer goes into liquidation), you claim back the KES 16,000</li>
            </ul>

            <h2>Qualifying Conditions</h2>
            <ul>
              <li><strong>Taxable supply:</strong> The debt must arise from a standard-rated (16%) or zero-rated (0%) supply. Exempt supplies do not qualify</li>
              <li><strong>eTIMS-compliant invoice:</strong> You must have issued a valid eTIMS invoice for the supply</li>
              <li><strong>VAT accounted for:</strong> You must have already remitted the VAT to KRA on your return</li>
              <li><strong>Waiting period:</strong> 3 years from the date of supply (extended from 2 years by Finance Act 2026), unless the customer enters statutory management, receivership, or liquidation</li>
              <li><strong>Recovery attempts:</strong> You must have taken reasonable steps to recover the debt</li>
              <li><strong>Written off:</strong> The debt must be written off as irrecoverable in your accounting records</li>
              <li><strong>Not a related party:</strong> The customer must not be a related party to you</li>
            </ul>

            <h2>Key Change Under Finance Act 2026</h2>
            <p>The bad debt relief waiting period was <strong>extended from 2 years to 3 years</strong>. This means:</p>
            <ul>
              <li>For supplies made before 1 July 2026 where 2 years have already passed, the old 2-year rule likely applies — check with a tax advisor</li>
              <li>For supplies made on or after 1 July 2026, you must wait 3 years before claiming unless the customer's financial distress accelerates the timeline</li>
              <li>The immediate claim trigger for customers in statutory management, receivership, or liquidation remains unchanged — this is not affected by the extension</li>
            </ul>

            <h2>How to Apply</h2>
            <ol>
              <li>Ensure the debt qualifies under all conditions above</li>
              <li>Prepare supporting documents: original eTIMS invoice, proof of VAT remittance, evidence of recovery attempts (demand letters, emails, legal notices), debt write-off confirmation from your accounting records, declaration that the customer is not a related party</li>
              <li>Log in to iTax and navigate to the bad debt relief application section</li>
              <li>Submit the application with all supporting documents attached</li>
              <li>KRA reviews and issues a decision — if approved, the refund is processed or offset against future VAT liabilities</li>
            </ol>

            <h2>What If the Customer Later Pays?</h2>
            <p>If the customer pays you (even partially) after you received the bad debt refund, you must repay the refunded VAT to KRA on your next VAT return. This is a straight reversal: you received KES 16,000 as a refund, the customer pays you KES 116,000, you remit KES 16,000 back to KRA.</p>

            <h2>Related Resources</h2>
            <ul>
              <li><a href="/resources/vat-refund-guide-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">VAT Refund Guide Kenya</a> — General VAT refund process and documentation</li>
              <li><a href="/resources/finance-act-vat-changes-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">Finance Act 2026 VAT Changes</a> — All VAT-related changes including bad debt relief timeline</li>
              <li><a href="/services/monthly-vat-filing/" className="text-brand underline underline-offset-2 hover:text-brand-hover">Monthly VAT Filing Service (KES 3,500/month)</a> — We handle returns, refund claims, and compliance</li>
            </ul>
          </div>
        </article>

        <div className="mt-12 border-t border-border pt-8">
          <h2 className="font-display text-xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <details key={i} className="group border border-border rounded-lg">
                <summary className="list-none flex items-start gap-3 p-4 cursor-pointer">
                  <span className="text-brand shrink-0 mt-0.5">
                    <Info size={16} weight="bold" />
                  </span>
                  <span className="text-sm font-medium text-ink">{faq.name}</span>
                </summary>
                <div className="px-4 pb-4 pt-0">
                  <p className="text-sm text-ink-muted leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-ink-muted leading-relaxed mb-4 text-center">
            We handle bad debt relief applications as part of our monthly filing service.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/services/monthly-vat-filing/"
              className="inline-flex items-center justify-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
            >
              Monthly VAT Filing &mdash; KES 3,500/month
              <svg viewBox="0 0 12 12" className="w-3 h-3 fill-current" aria-hidden="true"><path d="M6 0L4.59 1.41 9.17 6l-4.58 4.59L6 12l6-6z"/></svg>
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <ArticleGrid currentSlug="vat-bad-debt-refund-kenya" />
        </div>
      </div>
    </>
  )
}
