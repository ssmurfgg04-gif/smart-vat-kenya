import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info, Scales } from "@phosphor-icons/react/dist/ssr"

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
    { "@type": "ListItem", position: 3, name: "Dispute Auto-Populated VAT Return", item: "https://smartvatkenya.co.ke/resources/vat-return-dispute-auto-populated/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org" as const,
  "@type": "Article",
  headline: "How to Dispute a Wrong Auto-Populated VAT Return Amount (2026)",
  description:
    "When KRA auto-fills a wrong VAT return figure - inflated sales, missing purchases, duplicate invoices - here is exactly how to dispute, amend, and document the correction before the 20th deadline.",
  author: personSchema(),
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-08-12",
  dateModified: LAST_VERIFIED,
  url: "https://smartvatkenya.co.ke/resources/vat-return-dispute-auto-populated",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/vat-return-dispute-auto-populated",
}

const faqSchema = {
  "@context": "https://schema.org" as const,
  "@type": "FAQPage" as const,
  mainEntity: [
    {
      "@type": "Question" as const,
      name: "Can I dispute an auto-populated VAT return figure I think is wrong?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Yes - but only through specific channels. You cannot reduce auto-populated sales values directly in iTax (KRA locks those fields to prevent fraud). To dispute, you must (1) document the discrepancy, (2) file the return with the auto-populated figure as-is by the 20th deadline, (3) submit a Notice of Objection within 30 days of filing, and (4) work with KRA's audit team to correct the underlying eTIMS data. Never skip the 20th deadline - late filing triggers an automatic KES 10,000 penalty regardless of any dispute.",
      },
    },
    {
      "@type": "Question" as const,
      name: "What if the auto-populated sales figure is higher than my actual sales?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Three typical causes: (1) a duplicate invoice was transmitted to KRA and counted twice, (2) a customer returned goods but you did not issue a credit note through eTIMS, or (3) a stock movement was misclassified as a sale. File the return with the inflated figure (pay the excess VAT to avoid late-payment penalties), then submit a Notice of Objection within 30 days attaching: your eTIMS transaction export, your local sales records, and the specific invoices that were duplicated or misclassified. KRA's audit team will adjust the next return.",
      },
    },
    {
      "@type": "Question" as const,
      name: "What if my purchases are missing from the auto-populated CSV?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "You can manually add missing purchases to the return - the purchases field is not locked. Download the CSV from iTax, add the missing purchase lines (with supplier PIN, invoice number, date, and VAT amount), save, and upload the modified CSV back to iTax. The system will accept the additions. Keep proof of every added purchase (eTIMS-compliant invoice from the supplier) for 7 years in case of audit. See our auto-populated VAT return guide for the full workflow.",
      },
    },
    {
      "@type": "Question" as const,
      name: "How long does KRA take to resolve a VAT dispute?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Standard Notice of Objection processing time is 30-90 days from submission. Complex cases (large adjustments, multi-period disputes, audit-triggering discrepancies) can take 6-12 months. During this time, you continue filing monthly returns normally - the disputed return stays as-filed. If KRA upholds your objection, they issue an amended assessment and the adjustment flows into your next return.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Will disputing a VAT return trigger an audit?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Not necessarily. KRA's risk engine evaluates each dispute on its merits - a well-documented, single-period dispute with clear evidence rarely triggers an audit. However, repeated disputes, disputes involving large amounts (KES 1M+), or disputes on the same issue across multiple periods do flag your account. Always engage a tax agent to prepare dispute documentation - a poorly-prepared dispute is worse than no dispute.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Can I get a refund of VAT I overpaid due to a wrong auto-populated figure?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Yes. Once KRA upholds your objection and amends the return, the overpaid VAT becomes a credit on your iTax ledger. You can either offset it against future VAT payable (the simplest path - it just reduces next month's payment) or apply for a cash refund. Cash refunds require a separate application and take 3-12 months to process. Offsetting is instant and free - prefer it unless the overpayment is huge.",
      },
    },
  ],
}

const toc = [
  { id: "what-you-can-cannot", label: "What You Can and Cannot Dispute" },
  { id: "common-discrepancies", label: "Common Discrepancy Types" },
  { id: "step-by-step-dispute", label: "Step-by-Step Dispute Process" },
  { id: "notice-of-objection", label: "Writing the Notice of Objection" },
  { id: "while-dispute-pending", label: "Filing During the Pending Dispute" },
  { id: "faq", label: "Frequently Asked Questions" },
]

export default function VatReturnDisputeAutoPopulatedPage() {
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
            {["VAT Return", "Dispute", "Auto-Populated", "Notice of Objection"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            How to Dispute a Wrong Auto-Populated VAT Return (2026)
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
            You cannot reduce auto-populated <strong className="text-ink">sales</strong> figures directly in iTax - KRA locks those fields. To dispute, <strong className="text-ink">file the return by the 20th deadline</strong> with the disputed figure as-is, then submit a <strong className="text-ink">Notice of Objection within 30 days</strong> with supporting evidence. KRA&rsquo;s audit team reviews and adjusts the next return. <strong className="text-ink">Purchases can be added manually</strong> - the purchases field is not locked, so add missing supplier invoices directly to the CSV before uploading. Never skip the 20th deadline to dispute - late filing triggers an automatic KES 10,000 penalty.
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

          {/* Section 1 - What you can/cannot dispute */}
          <section id="what-you-can-cannot" aria-labelledby="what-you-can-cannot-h">
            <h2 id="what-you-can-cannot-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What You Can and Cannot Dispute
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The auto-populated VAT return has <strong className="text-ink">two sides</strong>: sales (which KRA pre-fills from your eTIMS data) and purchases (which KRA pre-fills from your suppliers&rsquo; eTIMS data). KRA treats each side differently for dispute purposes:
              </p>
              <div className="space-y-4">
                <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                  <p className="font-display text-[1rem] font-semibold text-ink mb-3 flex items-center gap-2">
                    <Scales size={16} weight="fill" className="text-red-600" aria-hidden="true" />
                    Sales side - locked, cannot edit
                  </p>
                  <p className="text-[0.83rem] text-ink-muted leading-relaxed mb-3">
                    The sales figure on your VAT return is pulled from your eTIMS transaction history. KRA locks this field in iTax to prevent under-declaration of sales. You cannot reduce it directly - if you believe it is wrong, you must file as-is and dispute via Notice of Objection.
                  </p>
                  <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                    You <em>can</em> add upward adjustments (e.g., sales made outside eTIMS that should have been on the return) - those go in the &ldquo;Other Sales&rdquo; field. You <em>cannot</em> subtract - even if a sale is obviously duplicated.
                  </p>
                </div>

                <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                  <p className="font-display text-[1rem] font-semibold text-ink mb-3 flex items-center gap-2">
                    <CheckCircle size={16} weight="fill" className="text-emerald-600" aria-hidden="true" />
                    Purchases side - editable
                  </p>
                  <p className="text-[0.83rem] text-ink-muted leading-relaxed mb-3">
                    The purchases figure is pre-filled from your suppliers&rsquo; eTIMS data, but the field is editable. If a supplier&rsquo;s invoice is missing from the auto-populated CSV (because the supplier transmitted late or captured your PIN wrong), you can add it manually.
                  </p>
                  <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                    The risk: KRA may later remove manually-added purchases if they cannot verify them against the supplier&rsquo;s eTIMS data. Always keep the supplier&rsquo;s original eTIMS-compliant invoice as proof.
                  </p>
                </div>
              </div>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">For the underlying mechanics of how the auto-populated return pulls your data,</strong> see our{" "}
                  <a href="/resources/vat-auto-populated-return/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                    auto-populated VAT return guide
                  </a>
                  . For how KRA&rsquo;s VAT ledger works behind the scenes, see our{" "}
                  <a href="/resources/vat-ledger-explained-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                    VAT ledger explained guide
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 - Common discrepancies */}
          <section id="common-discrepancies" aria-labelledby="common-discrepancies-h">
            <h2 id="common-discrepancies-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Common Discrepancy Types - and What Causes Them
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                In our experience handling disputes for Kenyan SMEs, six types of discrepancies account for 90%+ of all auto-populated return issues:
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Inflated sales from duplicate eTIMS transmission",
                    desc: "You re-transmitted an invoice that had a 'failed' status but actually went through. KRA's duplicate-check service usually catches this, but during outages (peak filing days) it sometimes lets both versions through. The duplicate appears as a phantom second sale on your return.",
                  },
                  {
                    title: "Missing purchases from suppliers who transmitted late",
                    desc: "Your supplier transmitted your eTIMS invoice on the 18th of the month. KRA's auto-population for the current period closed on the 17th. The purchase does not appear on your current return - it will appear on the next period's CSV. You can add it manually to the current return if you have the supplier's invoice.",
                  },
                  {
                    title: "Missing purchases from suppliers who captured your PIN wrong",
                    desc: "Supplier entered one wrong digit in your KRA PIN. KRA matched the invoice to the wrong PIN - your supplier's invoice exists, but on someone else's ledger. The fix: ask the supplier to issue a credit note (against the wrong PIN) and a new invoice (with your correct PIN).",
                  },
                  {
                    title: "Stock movements misclassified as sales",
                    desc: "When you move stock between branches (Nairobi to Mombasa) through eTIMS, the platform sometimes treats the stock movement as a B2B sale. Your sales figure is inflated by the inter-branch transfer. The fix: file a Notice of Objection with the stock transfer documentation.",
                  },
                  {
                    title: "Credit notes not flowing through to the auto-population",
                    desc: "You issued a credit note to a customer through eTIMS (good practice). However, KRA's auto-population service sometimes lags on credit notes - the credit note does not reduce the sales figure on the return. The credit appears on the next period's CSV.",
                  },
                  {
                    title: "Refund/return invoices misclassified",
                    desc: "A customer returned goods. You issued a refund. The refund invoice type in eTIMS may not be properly recognized by the auto-population engine, leaving the original sale in your return with no offsetting refund. Dispute with the original sale invoice, the refund invoice, and the customer return documentation.",
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

          {/* Section 3 - Step-by-step dispute process */}
          <section id="step-by-step-dispute" aria-labelledby="step-by-step-dispute-h">
            <h2 id="step-by-step-dispute-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              The Step-by-Step Dispute Process
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Disputing a wrong auto-populated figure requires a structured sequence. Skipping any step weakens your case:
              </p>
              <ol className="space-y-3 list-none pl-0" role="list">
                {[
                  {
                    step: "01",
                    title: "Document the discrepancy before filing",
                    desc: "Compare the auto-populated figure against your local sales records. Identify exactly which invoices are duplicated, missing, or misclassified. Build a one-page summary: invoice number, date, amount, what KRA shows, what your records show, and the discrepancy. This is your dispute evidence.",
                  },
                  {
                    step: "02",
                    title: "File the return by the 20th deadline with the disputed figure",
                    desc: "Do NOT miss the 20th deadline to dispute. Late filing triggers an automatic KES 10,000 penalty and a KRA risk flag - it does not give you more time to dispute. File as-is, pay any VAT due (including the disputed excess), and prepare to claim it back through the dispute.",
                  },
                  {
                    step: "03",
                    title: "Submit a Notice of Objection within 30 days",
                    desc: "Log into iTax, go to Returns > File Returns > Notice of Objection. Select the VAT return you just filed. Write a clear, factual objection: 'I dispute KES X of sales/inflated VAT on this return because [specific reason]. Evidence attached.' Upload your evidence documents.",
                  },
                  {
                    step: "04",
                    title: "Wait for KRA's acknowledgment (usually within 7 days)",
                    desc: "KRA sends an acknowledgment SMS and email once the objection is logged. The acknowledgment includes a reference number - quote this in all subsequent correspondence. If you do not receive acknowledgment within 7 days, call 020 499 9999 and quote your iTax submission receipt number.",
                  },
                  {
                    step: "05",
                    title: "Respond to KRA's information request (if any)",
                    desc: "KRA's audit team may request additional evidence: bank statements, contracts, supplier confirmations, etc. Respond within the timeframe they specify (usually 14 days). Late responses result in the objection being rejected for 'insufficient evidence'.",
                  },
                  {
                    step: "06",
                    title: "Receive KRA's decision (30-90 days)",
                    desc: "KRA issues a decision letter. If they uphold your objection, an amended assessment is issued - the adjustment flows into your next VAT return as a credit. If they reject, you can appeal to the Tax Appeals Tribunal within 30 days of the rejection letter.",
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
                <Warning size={17} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#7a5500] dark:text-[#ffcc44] text-[0.85rem] mb-1">
                    Late objection = forfeited right to dispute
                  </p>
                  <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                    If you miss the 30-day Notice of Objection window, you forfeit the right to dispute that specific return. KRA treats the return as final. The only path forward is a Voluntary Disclosure - which requires paying the disputed amount first and then applying for waiver of penalties. Always engage a tax agent early to keep the timeline on track.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 - Notice of Objection */}
          <section id="notice-of-objection" aria-labelledby="notice-of-objection-h">
            <h2 id="notice-of-objection-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Writing a Notice of Objection - What to Include
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                A well-structured Notice of Objection dramatically increases the chance of KRA upholding it. Include these seven elements in every objection:
              </p>
              <ol className="space-y-2 list-decimal pl-5 text-[0.85rem] text-ink-soft">
                <li><strong className="text-ink">Return reference:</strong> the iTax receipt number of the disputed return</li>
                <li><strong className="text-ink">Tax period:</strong> the month/year of the disputed return (e.g., &ldquo;July 2026&rdquo;)</li>
                <li><strong className="text-ink">Disputed amount:</strong> specific KES figure you dispute</li>
                <li><strong className="text-ink">Discrepancy type:</strong> duplicate sales, missing purchases, misclassified stock, etc.</li>
                <li><strong className="text-ink">Factual basis:</strong> one-paragraph explanation of what went wrong</li>
                <li><strong className="text-ink">Evidence attachments:</strong> list of attached documents (eTIMS exports, supplier invoices, credit notes)</li>
                <li><strong className="text-ink">Relief sought:</strong> what you want KRA to do - amend the return, adjust the next period, refund the overpaid amount</li>
              </ol>
              <p>
                Keep the notice factual and concise. Avoid emotional language, accusations, or speculation. KRA&rsquo;s audit team reads hundreds of objections per week - the ones that get actioned are the ones that present clear evidence with no fluff.
              </p>
              <div className="border border-brand/20 bg-brand-muted rounded-lg p-5">
                <p className="font-display text-[0.95rem] font-semibold text-ink mb-2">Want us to write the Notice of Objection?</p>
                <p className="text-[0.83rem] text-ink-muted leading-relaxed mb-4">
                  We have filed 200+ successful VAT disputes with KRA. We handle the documentation, the iTax submission, and the audit correspondence end-to-end. Flat fee per dispute.
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20need%20to%20dispute%20my%20auto-populated%20VAT%20return`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
                >
                  Get Dispute Help
                  <ArrowRight size={14} weight="bold" aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>

          {/* Section 5 - Filing during pending dispute */}
          <section id="while-dispute-pending" aria-labelledby="while-dispute-pending-h">
            <h2 id="while-dispute-pending-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Filing During a Pending Dispute
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                A common confusion: <em>&ldquo;My objection is pending for the July return. Do I still file the August return on the 20th?&rdquo;</em> Yes. <strong className="text-ink">Each return is independent.</strong> The disputed July return stays as-filed. You continue filing August, September, October returns normally on their 20th deadlines.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Continue filing each month on time",
                    desc: "Late filing penalties apply regardless of any pending dispute. Pay the VAT due for each month on time, even if some of it relates to the disputed issue - you can claim it back later.",
                  },
                  {
                    title: "The dispute does not 'pause' future returns",
                    desc: "Each return covers its own tax period. A dispute on July does not extend the August 20th deadline. The only thing that flows between periods is the eventual adjustment - if KRA upholds your July objection, the credit flows into your August (or later) return as an opening adjustment.",
                  },
                  {
                    title: "Keep a parallel ledger of disputed amounts",
                    desc: "Track the disputed KES amount in your own records so you know which future return is supposed to receive the credit. When KRA's decision letter arrives, verify the credit appeared on the correct period's auto-populated CSV.",
                  },
                  {
                    title: "If KRA rejects the objection, you can appeal",
                    desc: "Within 30 days of KRA's rejection letter, file an appeal to the Tax Appeals Tribunal (TAT). The TAT is an independent body that reviews tax disputes. TAT appeals are formal legal proceedings - engage a tax advocate.",
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
                  <strong className="text-ink">Related:</strong> The KRA VAT audit process can be triggered by disputes. See our{" "}
                  <a href="/resources/kra-vat-audit-process/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                    KRA VAT audit guide
                  </a>{" "}
                  to know what to expect if your dispute escalates.
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
            Compiled from the Tax Procedures Act (TPA), VAT (General) Regulations, KRA Notice of Objection procedures, iTax dispute submission workflow, and Smart VAT Kenya&rsquo;s hands-on experience filing 200+ VAT disputes for Kenyan SMEs. Last verified: August 2026.
          </p>
        </div>

        {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More VAT Guides</p>
          <ArticleGrid currentSlug="vat-return-dispute-auto-populated" />
        </div>

        {/* CTA */}
        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">Disputing a VAT return?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[40ch] mx-auto leading-relaxed">
            Send us the disputed return&rsquo;s iTax receipt number and a brief description of the discrepancy on WhatsApp - we will tell you within hours whether you have a dispute that will hold.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20want%20to%20dispute%20an%20auto-populated%20VAT%20return%20figure`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            Get VAT Dispute Help
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
