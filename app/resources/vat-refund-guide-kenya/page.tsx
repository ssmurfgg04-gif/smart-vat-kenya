import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"

export const metadata: Metadata = {
  title: "VAT Refund Guide Kenya 2026 | Smart VAT Kenya",
  description:
    "Complete guide to claiming VAT refunds in Kenya. Learn how to apply through iTax, the 12-month deadline, required documents, common reasons for rejection, and how to speed up your refund. Updated for the Finance Act 2025 changes.",
  keywords: [
    "vat refund kenya",
    "how to claim vat refund in kenya",
    "kra vat refund process",
    "vat refund application kenya itax",
    "excess input vat refund kenya",
    "vat refund timeline kenya",
    "vat refund rejected kra",
    "vat refund documents kenya",
    "vat refund for zero rated supplies kenya",
    "kra vat refund 12 months",
    "vat refund status check kenya",
    "vat refund audit kra",
    "vat refund for exporters kenya",
    "how long does vat refund take kenya",
    "vat refund application form kenya",
    "kra vat refund online application",
    "vat refund stuck kenya",
    "vat refund rejected reasons kenya",
    "finance act 2025 vat refund",
    "vat refund bad debts kenya",
  ],
  alternates: {
    canonical: "https://smartvatkenya.co.ke/resources/vat-refund-guide-kenya",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources" },
    { "@type": "ListItem", position: 3, name: "VAT Refund Guide", item: "https://smartvatkenya.co.ke/resources/vat-refund-guide-kenya" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "VAT Refund Guide Kenya 2026",
  description:
    "Step-by-step guide to claiming VAT refunds from KRA on iTax. Covers eligibility, the 12-month application window, required documentation, common rejection reasons, and how Smart VAT Kenya can help.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-25",
  dateModified: "2026-07-25",
  url: "https://smartvatkenya.co.ke/resources/vat-refund-guide-kenya",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/vat-refund-guide-kenya",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is eligible for a VAT refund in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You are eligible for a VAT refund if you have excess input VAT that arose from: (1) zero-rated supplies (e.g., exports of goods or digital services), (2) purchases of capital goods where no corresponding output VAT was generated, (3) withholding VAT credits exceeding your net VAT payable, (4) VAT paid on imports where the goods were subsequently exported, or (5) VAT paid in error or overpaid. The excess must have been declared in your VAT return before you apply for a refund.",
      },
    },
    {
      "@type": "Question",
      name: "What is the deadline for applying for a VAT refund?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You must apply within 12 months from the date the tax became due and payable. This was reduced from 24 months by the Finance Act 2025, effective 1 July 2025. If you have unclaimed refunds older than 12 months, they are forfeited. Check your iTax portal for any pending refunds you may have missed.",
      },
    },
    {
      "@type": "Question",
      name: "What documents are needed for a VAT refund application?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You typically need: (1) a formal refund application letter addressed to the Commissioner, (2) the VAT returns for the period showing the excess, (3) eTIMS-compliant invoices supporting the input VAT claimed, (4) proof of payment for the purchases (bank statements, M-Pesa statements), (5) a detailed reconciliation schedule showing how the excess arose, (6) customs import entries (if the excess is from imports), (7) proof of export (if the excess is from zero-rated exports), and (8) withholding VAT certificates (if the excess is from withholding VAT credits).",
      },
    },
    {
      "@type": "Question",
      name: "How long does a VAT refund take in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KRA does not publish a guaranteed processing timeline. In practice, straightforward refunds can take 30-90 days, while complex claims may take 6-12 months. KRA typically conducts an audit before approving a refund, which adds to the processing time. To speed things up, ensure your application is complete, your eTIMS records are up to date, and you have reconciled your bank and M-Pesa statements against your declared sales.",
      },
    },
    {
      "@type": "Question",
      name: "Why do VAT refund applications get rejected?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common rejection reasons include: (1) applying after the 12-month deadline, (2) incomplete documentation (missing eTIMS invoices, no proof of payment), (3) the excess arose from exempt supplies where refunds are not allowed, (4) the refund amount does not reconcile with your VAT returns, (5) supplier invoices were not transmitted to KRA through eTIMS, (6) your KRA PIN does not appear on the supplier invoices, (7) the input VAT was claimed outside the 6-month window, or (8) KRA's audit found discrepancies in your declared sales.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I get a refund of VAT on bad debts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can claim a refund of VAT on bad debts where you supplied goods or services, accounted for the VAT, but never received payment from the customer. Under the Finance Act 2026, the minimum qualifying period is now 3 years (increased from 2 years by the Finance Act 2025 but reverted to 3 years by the Finance Act 2026, effective 1 July 2026). You must demonstrate that the debt is genuinely irrecoverable and that you have taken reasonable steps to recover it.",
      },
    },
  ],
}

export default function VatRefundPage() {
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
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand mb-3">Guide — VAT Refund</p>
            <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.3rem)] font-semibold text-ink tracking-tight leading-tight mb-4 text-balance">
              VAT Refund Guide Kenya 2026
            </h1>
            <p className="text-[0.9rem] text-ink-muted leading-relaxed max-w-[65ch]">
              If your input VAT consistently exceeds your output VAT, you could have cash trapped in KRA's system.
              A VAT refund application releases that cash back to your business. But the process is strict, the
              deadline is tight, and mistakes mean rejection. This guide walks you through every step.
            </p>
          </header>

          <div className="space-y-10">
            {/* Section 1 — Eligibility */}
            <section id="eligibility" aria-labelledby="eligibility-h">
              <h2 id="eligibility-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Who Can Apply for a VAT Refund?
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>You are eligible for a VAT refund if you have excess input VAT and it arose from:</p>
                <ul className="space-y-2">
                  {[
                    "Zero-rated supplies — if you export goods or services, your output VAT is 0% but you still have input VAT on costs. This is the most common reason for refund claims.",
                    "Capital goods purchases — if you made a large capital investment (machinery, equipment, vehicles for business) that created significant input VAT in one period with no corresponding output VAT.",
                    "Withholding VAT credits — if your customers are appointed withholding VAT agents, your credits may exceed your net VAT payable. See our Withholding VAT Guide.",
                    "VAT paid in error — if you overpaid VAT on a return or paid VAT on an exempt supply by mistake, you can claim it back.",
                    "Bad debts — if you accounted for VAT on a sale but the customer never paid, you can claim relief after 3 years.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1.5" aria-hidden="true" />
                      <span className="text-ink-soft">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Section 2 — Deadline */}
            <section id="deadline" aria-labelledby="deadline-h">
              <h2 id="deadline-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                The 12-Month Deadline — Critical Update
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  The Finance Act 2025 cut the VAT refund application window from 24 months to 12 months,
                  effective 1 July 2025. This means:
                </p>
                <div className="border border-hairline rounded-lg p-5">
                  <div className="text-[0.83rem] text-ink-muted space-y-2">
                    <p className="flex gap-3">
                      <Warning size={14} weight="fill" className="text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>If your excess input VAT arose in <strong>July 2025 or later</strong>, you have <strong>12 months</strong> from the date the tax became due to apply.</span>
                    </p>
                    <p className="flex gap-3">
                      <Warning size={14} weight="fill" className="text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>If your excess arose <strong>before July 2025</strong>, the old 24-month window applies, but act now — many pre-2025 claims are expiring.</span>
                    </p>
                  </div>
                </div>
                <p>
                  <strong>Practical example:</strong> If you had excess input VAT in your August 2026 return (filed
                  by 20 September 2026), you must apply for a refund by 20 September 2027. After that date,
                  the refund is forfeited permanently.
                </p>
                <div className="border border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-800/40 rounded-lg p-4 flex items-start gap-3">
                  <Warning size={17} weight="fill" className="text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-red-800 dark:text-red-300 text-[0.85rem] mb-1">
                      Check your iTax portal now for pending refunds
                    </p>
                    <p className="text-[0.83rem] text-red-700 dark:text-red-400 leading-relaxed">
                      Log in to iTax and check your refunds status. Any pending refunds older than 12 months
                      may already be forfeited. If you have credits sitting in your VAT account that you have
                      not applied for, start the refund process immediately.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 — How to Apply */}
            <section id="how-to-apply" aria-labelledby="how-to-apply-h">
              <h2 id="how-to-apply-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                How to Apply for a VAT Refund on iTax
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <div className="space-y-4">
                  {[
                    { step: 1, title: "Ensure the excess is declared in your VAT return", detail: "Before you can apply for a refund, the excess input VAT must appear in your filed VAT return. File the return for the relevant period first if you have not already done so." },
                    { step: 2, title: "Log in to iTax and navigate to Refund Application", detail: "Go to itax.kra.go.ke. Under the Returns menu, select 'Refund Application'. Choose 'VAT' as the tax type and select the period containing the excess." },
                    { step: 3, title: "Complete the refund application form", detail: "Fill in the refund application form with the amount you are claiming, the reason for the excess (zero-rated supplies, capital goods, withholding VAT, etc.), and the bank account details where the refund should be paid." },
                    { step: 4, title: "Upload supporting documents", detail: "Attach the required documents: copy of VAT return, eTIMS invoices, proof of payment, reconciliation schedule, and any other supporting evidence. Ensure all documents are clear and legible." },
                    { step: 5, title: "Submit and track the application", detail: "Submit the application through iTax. You will receive a confirmation with a reference number. Track the status under 'Refund Status' on the iTax portal. If KRA requests additional information, respond promptly to avoid delays." },
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
              </div>
            </section>

            {/* Section 4 — Documentation Checklist */}
            <section id="documentation" aria-labelledby="documentation-h">
              <h2 id="documentation-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Documentation Checklist
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>Submit a complete application with these documents to minimize delays:</p>
                <ul className="space-y-2">
                  {[
                    { doc: "Refund application letter", detail: "Addressed to the Commissioner, explaining the reason for the refund and the amount claimed." },
                    { doc: "VAT returns for the period", detail: "Copies of the VAT return(s) showing the excess input VAT position." },
                    { doc: "eTIMS-compliant invoices", detail: "All invoices supporting the input VAT claimed. Must be transmitted to KRA with your KRA PIN." },
                    { doc: "Proof of payment", detail: "Bank statements, M-Pesa statements, or payment receipts showing the payments to suppliers were made." },
                    { doc: "Reconciliation schedule", detail: "A detailed schedule showing how the excess arose, matching invoices to VAT return entries." },
                    { doc: "Export documents (if applicable)", detail: "If the excess is from zero-rated exports, provide export documents, bills of lading, or proof of export." },
                    { doc: "Withholding VAT certificates (if applicable)", detail: "If the excess is from withholding VAT credits, provide the certificates from your customers." },
                    { doc: "Customs entries (if applicable)", detail: "If the excess is from imports, provide the customs import declarations and proof of VAT payment." },
                  ].map(({ doc, detail }) => (
                    <li key={doc} className="flex gap-3">
                      <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1.5" aria-hidden="true" />
                      <div><strong className="text-ink">{doc}:</strong> <span className="text-ink-soft">{detail}</span></div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Section 5 — Common Rejection Reasons */}
            <section id="rejection-reasons" aria-labelledby="rejection-reasons-h">
              <h2 id="rejection-reasons-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Why VAT Refunds Get Rejected
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <div className="space-y-3">
                  {[
                    { reason: "Applied after the 12-month deadline", fix: "The most common rejection reason. Set a calendar reminder 10 months after the period ends to start your application." },
                    { reason: "Incomplete documentation", fix: "Use the checklist above before submitting. Missing eTIMS invoices are the most frequent documentation gap." },
                    { reason: "Supplier invoices not transmitted to KRA", fix: "Verify with your suppliers that they transmitted the eTIMS invoices. If not, ask them to transmit before you apply." },
                    { reason: "KRA PIN missing or incorrect on supplier invoices", fix: "Contact your supplier to issue corrected eTIMS invoices with your correct KRA PIN." },
                    { reason: "Input VAT claimed outside the 6-month window", fix: "Ensure all input VAT in the refund was claimed within 6 months of the supply or importation date." },
                    { reason: "Discrepancy found during KRA audit", fix: "Reconcile your bank and M-Pesa statements against your declared sales before applying. Any mismatch will trigger deeper investigation." },
                  ].map(({ reason, fix }) => (
                    <div key={reason} className="border border-hairline rounded-lg p-4">
                      <p className="font-semibold text-ink text-[0.88rem] mb-1">
                        <Warning size={14} weight="fill" className="inline-block text-amber-500 mr-1.5 -mt-0.5" aria-hidden="true" />
                        {reason}
                      </p>
                      <p className="text-[0.83rem] text-ink-muted leading-relaxed">{fix}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 6 — Professional Help */}
            <section id="professional-help" aria-labelledby="professional-help-h">
              <h2 id="professional-help-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Get Professional Help with Your VAT Refund
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  VAT refund applications are complex and time-consuming. KRA often audits before approving,
                  and one mistake can delay your refund by months or trigger a full audit of your business.
                </p>
                <p>
                  Smart VAT Kenya can help with:
                </p>
                <ul className="space-y-2">
                  {[
                    "Reviewing your VAT returns to identify refund-eligible excess input VAT",
                    "Preparing the complete refund application package",
                    "Reconciling supplier invoices and eTIMS records",
                    "Liaising with KRA on your behalf during the audit process",
                    "Tracking the application status and following up",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1.5" aria-hidden="true" />
                      <span className="text-ink-soft">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="border border-brand/25 bg-brand-muted rounded-lg p-4 flex items-start gap-3">
                  <Info size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-[0.83rem] text-ink-soft leading-relaxed">
                    <strong className="text-ink">We work on a flat fee per application.</strong> Message us on
                    WhatsApp with the amount you are claiming and the period, and we will tell you if you qualify
                    and what documents we need from you.
                  </p>
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
          </div>
        </article>

        <div className="mt-14 pt-8 border-t border-hairline flex items-center justify-between flex-wrap gap-4">
          <Link href="/resources" className="inline-flex items-center gap-2 text-ink-muted hover:text-ink text-sm font-medium transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> All Guides
          </Link>
          <a
            href="https://wa.me/254721725958?text=I%20want%20to%20apply%20for%20a%20VAT%20refund%20-%20please%20help"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            Start Refund Application
            <ArrowRight size={14} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </div>
    </>
  )
}
