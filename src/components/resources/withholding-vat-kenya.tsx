import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const breadcrumbSchema = {
  "@context": "https://schema.org" as const as const as const as const as const,
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "Withholding VAT Guide", item: "https://smartvatkenya.co.ke/resources/withholding-vat-kenya/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org" as const as const as const as const as const,
  "@type": "Article",
  headline: "Withholding VAT Kenya Guide 2026",
  description:
    "Complete guide to 2% withholding VAT in Kenya: how it works, who is an appointed agent, how suppliers claim credits, refund process, and practical compliance tips for both agents and suppliers.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-25",
  dateModified: "2026-07-25",
  url: "https://smartvatkenya.co.ke/resources/withholding-vat-kenya",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/withholding-vat-kenya",
}

const faqSchema = {
  "@context": "https://schema.org" as const as const as const as const as const,
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is withholding VAT in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Withholding VAT is a system where appointed agents (typically large companies, government entities, and specified institutions) deduct 2% VAT at the point of paying a supplier and remit it directly to KRA. The supplier receives a withholding VAT credit note that they use to reduce their monthly VAT remittance. It is similar to withholding tax but applies to VAT rather than income tax.",
      },
    },
    {
      "@type": "Question",
      name: "What is the withholding VAT rate in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The withholding VAT rate is 2% of the value of taxable supplies. This rate has been effective since 7 November 2019. It applies to the taxable value (excluding VAT). For example, on a KES 100,000 supply plus KES 16,000 VAT (total KES 116,000), the withholding VAT is 2% of KES 100,000 = KES 2,000.",
      },
    },
    {
      "@type": "Question",
      name: "Who are appointed withholding VAT agents in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Withholding VAT agents are appointed by the Commissioner and typically include: large companies with significant turnover, government ministries and departments, county governments, state corporations, NGOs registered under specific provisions, and other institutions specified in the Kenya Gazette. KRA publishes and updates the list of appointed agents on the iTax portal. If you are unsure whether your customer is an appointed agent, ask them to confirm or check the KRA list.",
      },
    },
    {
      "@type": "Question",
      name: "How does withholding VAT affect my VAT return as a supplier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When you sell to an appointed agent, you issue a normal eTIMS invoice including full VAT (16%). The agent pays you the invoice amount minus the 2% withholding VAT and remits the 2% directly to KRA. They give you a withholding VAT certificate. When you file your VAT return, you declare the full output VAT on the sale and also declare the withholding VAT credit as a payment. This reduces your net VAT payable. If the withholding VAT credits exceed your net VAT payable, you have a credit position that can be carried forward or refunded.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the deadline for remitting withholding VAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Appointed withholding VAT agents must remit the deducted VAT to KRA by the 20th day of the month following the deduction. This is the same deadline as the regular VAT return filing and payment deadline. Late remittance attracts penalties of 5% of the tax due plus 1% interest per month. Agents who fail to remit may be delisted or face compliance action.",
      },
    },
    {
      "@type": "Question",
      "name": "How can I claim a refund of excess withholding VAT credits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your withholding VAT credits consistently exceed your net VAT payable, you can apply for a refund through the iTax portal. You will need to provide: (1) withholding VAT certificates from your customers, (2) eTIMS invoices for the related supplies, (3) proof of payment, and (4) a reconciliation schedule. KRA may audit before processing. Applications must be made within 12 months of the tax becoming due. See our VAT Refund Guide for the full process.",
      },
    },
  ],
}

export default function WithholdingVatPage() {
  return (
    <>
      <script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id="article-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script id="faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-[880px] mx-auto px-6 lg:px-10 py-12">
        <a href="/resources/" className="inline-flex items-center gap-2 text-ink-muted hover:text-ink text-sm font-medium mb-8 transition-colors">
          <ArrowLeft size={14} aria-hidden="true" /> All Guides
        </a>

        <article>
          <header className="mb-10">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand mb-3">Guide - Withholding VAT</p>
            <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.3rem)] font-semibold text-ink tracking-tight leading-tight mb-4 text-balance">
              Withholding VAT Kenya Guide 2026
            </h1>
            <p className="text-[0.9rem] text-ink-muted leading-relaxed max-w-[65ch]">
              If you sell goods or services to large companies, government entities, or other appointed withholding
              VAT agents, your customer will deduct 2% from your VAT and pay it directly to KRA. This guide explains
              exactly how the system works - for both suppliers and appointed agents.
            </p>
            <div className="flex items-center gap-4 text-[0.75rem] text-ink-muted">
              <time dateTime="2026-07-25">25 July 2026</time>
              <span>Smart VAT Kenya</span>
            </div>
          </header>

          <div className="space-y-10">
            {/* Section 1 - How It Works */}
            <section id="how-it-works" aria-labelledby="how-it-works-h">
              <h2 id="how-it-works-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                How Withholding VAT Works
              </h2>
              <p>
                When you file your monthly VAT return, your purchases are{" "}
                <a href="/resources/vat-auto-populated-return/" className="text-brand underline underline-offset-2 hover:text-brand-hover">auto-populated</a>{" "}
                from eTIMS data. The withholding VAT credits you declare must match the certificates your customers issue.
              </p>
              <p>
                Late remittance or non-compliance attracts significant{" "}
                <a href="/resources/kra-vat-penalties-reference/" className="text-brand underline underline-offset-2 hover:text-brand-hover">penalties</a>{" "}
                - including a 5% late-remittance penalty plus 1% monthly interest.
              </p>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  Withholding VAT shifts the responsibility for remitting VAT from the supplier to the buyer
                  (the appointed agent). Here is the flow:
                </p>
                <ol className="space-y-3 list-decimal list-inside">
                  <li className="text-ink-soft">
                    <strong className="text-ink">You (the supplier) issue a normal eTIMS invoice</strong> for the full
                    amount including 16% VAT. For example, goods worth KES 100,000 + VAT KES 16,000 = KES 116,000.
                  </li>
                  <li className="text-ink-soft">
                    <strong className="text-ink">The appointed agent deducts 2% withholding VAT</strong> on the
                    taxable value: 2% × KES 100,000 = KES 2,000. They pay you KES 116,000 - KES 2,000 = KES 114,000.
                  </li>
                  <li className="text-ink-soft">
                    <strong className="text-ink">The agent remits the KES 2,000 to KRA</strong> by the 20th of the
                    following month through the iTax portal.
                  </li>
                  <li className="text-ink-soft">
                    <strong className="text-ink">The agent issues you a withholding VAT certificate</strong> as proof
                    that the VAT was remitted.
                  </li>
                  <li className="text-ink-soft">
                    <strong className="text-ink">You declare both the sale and the withholding VAT credit</strong>
                    in your monthly VAT return. The credit reduces what you owe KRA.
                  </li>
                </ol>
              </div>
            </section>

            {/* Section 2 - Appointed Agents */}
            <section id="appointed-agents" aria-labelledby="appointed-agents-h">
              <h2 id="appointed-agents-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Who Are Appointed Withholding VAT Agents?
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  The Commissioner appoints withholding VAT agents through a notice in the Kenya Gazette.
                  Generally, the following entities are appointed:
                </p>
                <ul className="space-y-2">
                  {[
                    "Large taxpayers registered under KRA's Large Taxpayers Office",
                    "Government ministries, departments, and agencies",
                    "County governments and their entities",
                    "State corporations and parastatals",
                    "NGOs registered under the NGOs Coordination Act with significant funding",
                    "Insurance companies, banks, and other financial institutions",
                    "Telecommunication companies",
                    "Petroleum and energy companies",
                    "Manufacturing companies above a specified turnover threshold",
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
                    <strong className="text-ink">How to check if your customer is an agent:</strong> Log in to iTax,
                    go to the withholding VAT section, and check the list of appointed agents. Alternatively, ask
                    your customer to confirm in writing. If they are not on the list, they should not deduct
                    withholding VAT.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 - For Suppliers */}
            <section id="for-suppliers" aria-labelledby="for-suppliers-h">
              <h2 id="for-suppliers-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                What Suppliers Need to Do
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>If your customer is a withholding VAT agent:</p>
                <div className="space-y-3">
                  {[
                    { title: "Issue normal eTIMS invoices", detail: "Do not create a special invoice for withholding VAT. Issue your standard eTIMS invoice with full 16% VAT. The withholding VAT is a separate remittance by the buyer, not a different invoice type." },
                    { title: "Track your withholding VAT certificates", detail: "The agent must give you a withholding VAT certificate for each deduction. Keep these certificates in a dedicated file - they are your proof when filing returns and applying for refunds." },
                    { title: "Declare the credit in your VAT return", detail: "On your iTax VAT return, declare the full output VAT from the sale. Then enter the withholding VAT credit in the withholding VAT section. The credit reduces your net VAT payable." },
                    { title: "Reconcile monthly", detail: "At the end of each month, reconcile the withholding VAT certificates you received against the invoices you issued. Any mismatch means either the agent did not remit or the certificate is missing." },
                    { title: "Follow up on missing certificates", detail: "If you have not received a withholding VAT certificate by the 10th of the following month, contact the agent's finance department. A late certificate means you cannot claim the credit that month." },
                  ].map(({ title, detail }) => (
                    <div key={title} className="border border-hairline rounded-lg p-4">
                      <p className="font-semibold text-ink text-[0.88rem] mb-1">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 4 - For Agents */}
            <section id="for-agents" aria-labelledby="for-agents-h">
              <h2 id="for-agents-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                What Appointed Agents Need to Do
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>If you are an appointed withholding VAT agent, your obligations are:</p>
                <div className="space-y-3">
                  {[
                    { title: "Deduct 2% on all qualifying supplies", detail: "For every payment to a VAT-registered supplier for taxable supplies, deduct 2% of the taxable value. This applies to both goods and services. Do not deduct on exempt supplies or supplies from non-VAT-registered suppliers." },
                    { title: "Issue withholding VAT certificates promptly", detail: "Issue the withholding VAT certificate within 5 working days of deduction. The certificate must show your KRA PIN, the supplier's KRA PIN, invoice number, taxable value, VAT amount, withholding VAT deducted, and the tax period." },
                    { title: "Remit to KRA by the 20th", detail: "Remit all withholding VAT deducted in a month by the 20th of the following month. Use the iTax portal to file a withholding VAT return and make payment. Late remittance attracts a 5% penalty plus 1% interest per month." },
                    { title: "File a withholding VAT return", detail: "In addition to your own VAT return, you must file a separate withholding VAT return showing all deductions made during the tax period, the suppliers deducted from, and the total amount remitted." },
                    { title: "Maintain a register", detail: "Keep a register of all suppliers from whom you deducted withholding VAT, including invoice numbers, amounts, and certificate issuance dates. KRA may request this during audit." },
                  ].map(({ title, detail }) => (
                    <div key={title} className="border border-hairline rounded-lg p-4">
                      <p className="font-semibold text-ink text-[0.88rem] mb-1">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 5 - Refunds */}
            <section id="refunds" aria-labelledby="refunds-h">
              <h2 id="refunds-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Refund of Excess Withholding VAT Credits
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  If you sell primarily to withholding VAT agents, your withholding VAT credits may exceed your
                  net VAT payable. This can create a persistent credit position. You have two options:
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1.5" aria-hidden="true" />
                    <div className="text-ink-soft"><strong className="text-ink">Carry forward:</strong> The excess withholding VAT credit carries forward automatically to the next tax period. This is the simplest option if your sales pattern means you will eventually have output VAT to offset against.</div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1.5" aria-hidden="true" />
                    <div className="text-ink-soft"><strong className="text-ink">Apply for a refund:</strong> You can apply to KRA for a refund of the excess withholding VAT credits. The application is filed through iTax and must include withholding VAT certificates, eTIMS invoices, and a reconciliation schedule. KRA may audit before processing. Apply within 12 months.</div>
                  </li>
                </ul>
                <p>
                  See our <a href="/resources/vat-refund-guide-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">VAT Refund Guide</a> for the full process.
                </p>
              </div>
            </section>

            {/* Section 6 - Common Mistakes */}
            <section id="common-mistakes" aria-labelledby="common-mistakes-h">
              <h2 id="common-mistakes-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Common Withholding VAT Mistakes
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <div className="space-y-3">
                  {[
                    { mistake: "Deducting withholding VAT when not an appointed agent", fix: "If you are not on KRA's list of appointed agents, do not deduct withholding VAT. You are committing an offence if you do. Pay your supplier the full invoice amount including VAT." },
                    { mistake: "Deducting on exempt supplies", fix: "Withholding VAT only applies to taxable supplies. Do not deduct on exempt supplies like basic food items, medical services, or educational fees." },
                    { mistake: "Failing to issue the withholding VAT certificate", fix: "A certificate must be issued to the supplier within 5 working days. Failure to do so creates a dispute and may cause the supplier to miss their input VAT claim window." },
                    { mistake: "Supplier not declaring the credit", fix: "Suppliers sometimes forget to declare withholding VAT credits in their returns. Train your finance team to always check the withholding VAT section when filing." },
                    { mistake: "Late remittance by the agent", fix: "If the agent remits late, the supplier's credit is delayed. Agents should set a calendar reminder for the 15th of each month to prepare the withholding VAT return before the 20th deadline." },
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
              </div>
            </section>

            {/* FAQ */}
          <FAQSection faqSchema={faqSchema} />
          </div>
        </article>

                {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="withholding-vat-kenya" />
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
