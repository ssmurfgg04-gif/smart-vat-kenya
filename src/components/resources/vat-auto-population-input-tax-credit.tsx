import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info, CoinVertical } from "@phosphor-icons/react/dist/ssr"

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
    { "@type": "ListItem", position: 3, name: "Auto-Populated Input VAT Credit", item: "https://smartvatkenya.co.ke/resources/vat-auto-population-input-tax-credit/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org" as const,
  "@type": "Article",
  headline: "Auto-Populated Input VAT - How to Claim Your Full Credit (2026)",
  description:
    "The auto-populated VAT return credits your input VAT only when suppliers transmit eTIMS invoices with your correct PIN. Learn the 6-month rule, how to add missing purchases, and how to maximize your legitimate input VAT claim.",
  author: personSchema(),
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-08-14",
  dateModified: LAST_VERIFIED,
  url: "https://smartvatkenya.co.ke/resources/vat-auto-population-input-tax-credit",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/vat-auto-population-input-tax-credit",
}

const faqSchema = {
  "@context": "https://schema.org" as const,
  "@type": "FAQPage" as const,
  mainEntity: [
    {
      "@type": "Question" as const,
      name: "How does the auto-populated return credit my input VAT?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "The auto-populated return credits input VAT to your account when a supplier transmits an eTIMS invoice with your correct KRA PIN. The supplier's eTIMS invoice appears in your purchases CSV within 24 hours of transmission. Each line shows: supplier name, supplier PIN, invoice number, date, and VAT amount. The total of these VAT amounts becomes your input VAT credit for the period - you do not enter them manually.",
      },
    },
    {
      "@type": "Question" as const,
      name: "What if my supplier did not transmit the eTIMS invoice?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "If the supplier did not transmit an eTIMS invoice, the purchase does not appear in your auto-populated CSV and you cannot claim input VAT on it - even if you have a paper invoice. The VAT Act requires input VAT claims to be supported by an eTIMS-compliant tax invoice. The fix: ask the supplier to transmit the eTIMS invoice with your correct PIN. Once transmitted, it appears in your CSV and you can claim the input VAT in that period (or the next period if transmitted after the current period closes).",
      },
    },
    {
      "@type": "Question" as const,
      name: "Can I claim input VAT from a supplier invoice received months ago?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Yes - the 6-month rule. You can claim input VAT on a supplier's eTIMS-compliant invoice within 6 months of the invoice date. If the supplier transmitted the invoice on January 15 and you file your August return on September 20, you can still claim the input VAT in the August return. The purchase line appears on the August CSV (transmission date basis), not the January CSV. This is why reconciling supplier invoices monthly is essential.",
      },
    },
    {
      "@type": "Question" as const,
      name: "What is the difference between claiming input VAT on the auto-populated return vs manually?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "On the auto-populated return, input VAT is pre-filled from KRA's record of supplier transmissions - you do not enter it manually. You can ADD missing purchases manually if the supplier transmitted but the invoice did not appear on your CSV (e.g., late transmission, wrong PIN). Manual additions require: supplier name, supplier PIN, invoice number, date, and VAT amount. Keep the original eTIMS-compliant invoice as proof - KRA may request it during an audit. See our input VAT deduction guide for the full manual addition workflow.",
      },
    },
    {
      "@type": "Question" as const,
      name: "What if a supplier transmitted an eTIMS invoice I do not recognize?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "If a supplier transmitted an eTIMS invoice to your PIN and you did not make that purchase, two scenarios: (1) the supplier made a data-entry error and used your PIN by mistake - contact them to issue a credit note; (2) someone is fraudulently using your PIN to claim input VAT on fictitious purchases. Either way, do NOT include that invoice in your input VAT claim - flag it on iTax as 'unrecognized purchase' before filing. See our input VAT deduction guide for fraud prevention tips.",
      },
    },
    {
      "@type": "Question" as const,
      name: "How can I maximize my legitimate input VAT claim?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Three habits: (1) give your correct KRA PIN to every supplier - especially fuel stations, utilities (KPLC, Safaricom), landlords, and service providers; (2) request eTIMS-compliant invoices from every supplier and verify your PIN appears correctly; (3) monthly reconciliation - download your purchases CSV from the auto-populated return and compare against your local expense records. Any missing supplier invoice should be followed up within the 6-month window. See our input VAT deduction guide for the full checklist of qualifying expenses.",
      },
    },
  ],
}

const toc = [
  { id: "how-it-works", label: "How Input VAT Auto-Population Works" },
  { id: "supplier-must-transmit", label: "Why the Supplier Must Transmit" },
  { id: "six-month-rule", label: "The 6-Month Claim Window" },
  { id: "adding-missing-purchases", label: "Adding Missing Purchases Manually" },
  { id: "fraud-prevention", label: "Fraud - Unrecognized Purchases" },
  { id: "faq", label: "Frequently Asked Questions" },
]

export default function VatAutoPopulationInputTaxCreditPage() {
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
            {["Input VAT", "Auto-Populated", "Credit", "Suppliers"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            Auto-Populated Input VAT - How to Claim Your Full Credit (2026)
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
            The auto-populated VAT return credits your <strong className="text-ink">input VAT</strong> only when a supplier transmits an eTIMS invoice with your <strong className="text-ink">correct KRA PIN</strong>. If the supplier did not transmit, or used the wrong PIN, you cannot claim input VAT - even with a paper invoice. The <strong className="text-ink">6-month rule</strong> lets you claim input VAT within 6 months of the invoice date, so chase missing supplier invoices monthly. To maximize your legitimate claim: give your PIN to every supplier, request eTIMS-compliant invoices, and reconcile monthly against your purchases CSV.
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

          {/* Section 1 - How it works */}
          <section id="how-it-works" aria-labelledby="how-it-works-h">
            <h2 id="how-it-works-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How Input VAT Auto-Population Works
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The auto-populated VAT return does not ask you to enter input VAT manually. Instead, KRA&rsquo;s platform matches every eTIMS invoice transmitted by suppliers against the <em>buyer KRA PIN</em> field on the invoice. When your PIN appears as the buyer PIN, the invoice is attributed to your account and the VAT amount is credited to your input VAT for that tax period.
              </p>
              <p>The flow looks like this:</p>
              <ol className="space-y-2 list-decimal pl-5 text-[0.85rem] text-ink-soft">
                <li><strong className="text-ink">Supplier transmits an eTIMS invoice</strong> with your KRA PIN in the &ldquo;Buyer PIN&rdquo; field</li>
                <li><strong className="text-ink">KRA validates the invoice</strong> and posts it to the eTIMS platform within minutes</li>
                <li><strong className="text-ink">KRA&rsquo;s matching engine links the invoice to your VAT ledger</strong> within 24 hours</li>
                <li><strong className="text-ink">The invoice appears on your auto-populated purchases CSV</strong> next time you download it</li>
                <li><strong className="text-ink">The VAT amount is summed with all other purchases</strong> to form your input VAT credit for the period</li>
              </ol>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <CoinVertical size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">The implication:</strong> Your input VAT claim is essentially passive. You do not <em>enter</em> input VAT - KRA populates it based on supplier transmissions. The action is on the supplier side: get them to transmit with the right PIN. See our{" "}
                  <a href="/resources/input-vat-deduction-guide/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                    input VAT deduction guide
                  </a>{" "}
                  for the full supplier-chase workflow.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 - Supplier must transmit */}
          <section id="supplier-must-transmit" aria-labelledby="supplier-must-transmit-h">
            <h2 id="supplier-must-transmit-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Why the Supplier Must Transmit - and What Blocks You
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The single biggest reason businesses under-claim input VAT: <strong className="text-ink">suppliers did not transmit the eTIMS invoice</strong>. The paper invoice you have is irrelevant to KRA - it must be on the eTIMS platform to count.
              </p>
              <p>Four common supplier failures:</p>
              <div className="space-y-3">
                {[
                  {
                    title: "Supplier is not eTIMS-registered",
                    desc: "Some small suppliers (especially informal service providers, freelancers, sole traders) are not eTIMS-registered. They issue paper or PDF invoices. You cannot claim input VAT on these - the VAT Act requires an eTIMS-compliant invoice. The only fix: change to a VAT-registered supplier, or accept the loss of input VAT.",
                  },
                  {
                    title: "Supplier transmitted late",
                    desc: "Supplier issued the invoice on the 18th of August but transmitted it on the 25th. The purchase appears on your August CSV only if it was transmitted before KRA's auto-population cutoff (usually the 17th-18th). Late transmissions roll to the next period's CSV. You can claim the input VAT in the next period - within the 6-month window.",
                  },
                  {
                    title: "Supplier captured your PIN wrong",
                    desc: "Supplier entered your PIN with one wrong digit. KRA matched the invoice to the wrong PIN - your supplier's invoice exists but on someone else's ledger. Fix: ask the supplier to issue a credit note (against the wrong PIN) and a new invoice (with your correct PIN). The credit note and new invoice both post to your ledger.",
                  },
                  {
                    title: "Supplier is not VAT-registered",
                    desc: "If your supplier is not VAT-registered, they cannot issue a VAT-compliant eTIMS invoice. The purchase is not eligible for input VAT claim at all - there is no VAT to claim. Common examples: informal landlords, freelance sole traders below the VAT threshold. Either accept the no-claim, or shift to a VAT-registered supplier.",
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

          {/* Section 3 - 6-month rule */}
          <section id="six-month-rule" aria-labelledby="six-month-rule-h">
            <h2 id="six-month-rule-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              The 6-Month Claim Window
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The VAT (General) Regulations allow you to claim input VAT within <strong className="text-ink">6 months of the invoice date</strong>. This is a generous window - it means you do not lose the input VAT if a supplier&rsquo;s invoice arrives late or if you discover an unclaimed purchase months later.
              </p>
              <p>The rule in practice:</p>
              <ul className="space-y-2 list-disc pl-5 text-[0.85rem] text-ink-soft">
                <li><strong className="text-ink">Invoice dated 15 January 2026</strong> can be claimed in any VAT return filed between January and July 2026 - the month of claim does not have to match the invoice date</li>
                <li><strong className="text-ink">Invoice dated 15 January 2026 claimed on the August 2026 return (filed 20 September)</strong> - this is past the 6-month window. The claim is rejected.</li>
                <li><strong className="text-ink">The 6-month clock starts from the invoice date, not the transmission date</strong> - if the supplier transmitted late, you still have 6 months from the original invoice date to claim</li>
              </ul>
              <div className="border border-canvas-warm bg-[#fffbf0] dark:bg-[#2a1f00] dark:border-[#4a3800] rounded-lg p-4 flex items-start gap-3">
                <Warning size={17} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#7a5500] dark:text-[#ffcc44] text-[0.85rem] mb-1">
                    The 6-month rule does not extend the 20th deadline
                  </p>
                  <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                    The 6-month rule lets you claim a <em>specific older invoice</em> on a <em>later</em> return. It does not let you file a return late. The August return is still due on 20 September regardless of whether you are claiming an invoice from February or July on it. Late filing triggers the KES 10,000 penalty.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 - Adding missing purchases */}
          <section id="adding-missing-purchases" aria-labelledby="adding-missing-purchases-h">
            <h2 id="adding-missing-purchases-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Adding Missing Purchases Manually
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                When a supplier transmitted the eTIMS invoice with your correct PIN but it did not appear on your auto-populated CSV (usually due to a late transmission or a KRA matching glitch), you can add it manually.
              </p>
              <p>The manual addition workflow:</p>
              <ol className="space-y-3 list-none pl-0" role="list">
                {[
                  {
                    step: "01",
                    title: "Confirm the supplier actually transmitted",
                    desc: "Ask the supplier to send you the eTIMS invoice confirmation (the page that shows the QR code and server confirmation code). If they cannot produce this, the invoice was not transmitted - you cannot add it manually. Have them transmit first.",
                  },
                  {
                    step: "02",
                    title: "Get the supplier's invoice details",
                    desc: "You need: supplier name, supplier KRA PIN (11 digits), invoice number, invoice date, and the VAT amount charged. These all appear on the eTIMS-compliant invoice. Without any of these, you cannot add the purchase.",
                  },
                  {
                    step: "03",
                    title: "Open the auto-populated CSV in iTax",
                    desc: "Log into iTax, go to Returns > File Return > VAT, select the period. Download the CSV. Open in Excel or Google Sheets. The CSV has a 'Purchases' section at the bottom - the existing auto-populated purchases are listed there.",
                  },
                  {
                    step: "04",
                    title: "Add the missing purchase as a new line",
                    desc: "Below the existing auto-populated lines, add a new row with: Supplier PIN, Invoice Number, Invoice Date, VAT Amount. Save the CSV. Do not modify any existing lines - KRA compares the modified CSV against the auto-populated version and rejects wholesale changes.",
                  },
                  {
                    step: "05",
                    title: "Upload the modified CSV back to iTax",
                    desc: "On the file return page, upload the modified CSV. iTax processes the upload and shows a confirmation page with the new input VAT total. Verify the new total reflects your addition. Submit the return.",
                  },
                  {
                    step: "06",
                    title: "Keep the supplier's original eTIMS invoice for 7 years",
                    desc: "KRA may request proof of any manually-added purchase during an audit. The original eTIMS-compliant invoice (with the QR code and server confirmation code) is your proof. Without it, KRA may reverse the input VAT credit.",
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
                  <strong className="text-ink">Related:</strong> For the complete workflow with screenshots and CSV field reference, see our{" "}
                  <a href="/resources/input-vat-deduction-guide/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                    input VAT deduction guide
                  </a>{" "}
                  and our{" "}
                  <a href="/resources/vat-auto-populated-return/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                    auto-populated VAT return guide
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 - Fraud prevention */}
          <section id="fraud-prevention" aria-labelledby="fraud-prevention-h">
            <h2 id="fraud-prevention-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Fraud - What to Do About Unrecognized Purchases
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Sometimes your auto-populated CSV shows a purchase you do not recognize - a supplier you have never heard of, an invoice number that is not in your records, an amount that does not match any expense you can identify.
              </p>
              <p>Two possible scenarios:</p>
              <div className="space-y-3">
                {[
                  {
                    title: "Supplier made a data-entry error",
                    desc: "The supplier accidentally used your PIN instead of another customer's PIN. Common for businesses with similar PINs (one digit difference). Contact the supplier (their name and PIN are on the CSV) and ask them to issue a credit note against the wrong invoice, then re-transmit with the correct buyer PIN. The credit note will appear on your CSV as a negative purchase.",
                  },
                  {
                    title: "Someone is using your PIN fraudulently",
                    desc: "More serious: a fraudster is using your KRA PIN to generate fictitious eTIMS invoices. They intend to either (a) claim input VAT on your account to inflate your refund, then file a refund request and steal the cash, or (b) launder money through your account. Either way, do NOT include these purchases in your input VAT claim.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <Warning size={15} weight="fill" className="text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink text-[0.88rem]">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p>
                If you suspect fraud, the action steps are:
              </p>
              <ol className="space-y-2 list-decimal pl-5 text-[0.85rem] text-ink-soft">
                <li><strong className="text-ink">Flag the unrecognized purchases on iTax</strong> before filing - there is an option to mark a purchase as &ldquo;unrecognized&rdquo;</li>
                <li><strong className="text-ink">File the return without claiming the unrecognized input VAT</strong> - you cannot be penalized for not claiming VAT you did not incur</li>
                <li><strong className="text-ink">Report to KRA Contact Centre</strong> on 020 499 9999 - they will open an investigation</li>
                <li><strong className="text-ink">Change your iTax password immediately</strong> - if a fraudster can transmit to your PIN, they may also have access to your iTax account</li>
                <li><strong className="text-ink">Engage a tax agent</strong> to handle KRA correspondence during the investigation - you do not want to say the wrong thing</li>
              </ol>
              <div className="border border-brand/20 bg-brand-muted rounded-lg p-5">
                <p className="font-display text-[0.95rem] font-semibold text-ink mb-2">Suspect fraudulent use of your KRA PIN?</p>
                <p className="text-[0.83rem] text-ink-muted leading-relaxed mb-4">
                  We have handled PIN fraud cases for Kenyan SMEs. We coordinate the KRA report, the iTax security reset, and the dispute filing - end to end. Send us the unrecognized purchase lines on WhatsApp.
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20see%20unrecognized%20purchases%20on%20my%20VAT%20return`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
                >
                  Report PIN Fraud
                  <ArrowRight size={14} weight="bold" aria-hidden="true" />
                </a>
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
            Compiled from the VAT (General) Regulations, KRA eTIMS implementation guide, KRA iTax auto-populated CSV documentation, KRA Contact Centre guidance on input VAT disputes (020 499 9999), and Smart VAT Kenya&rsquo;s hands-on experience maximizing input VAT claims for Kenyan SMEs. Last verified: August 2026.
          </p>
        </div>

        {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More VAT Guides</p>
          <ArticleGrid currentSlug="vat-auto-population-input-tax-credit" />
        </div>

        {/* CTA */}
        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">Want to maximize your input VAT claim?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[40ch] mx-auto leading-relaxed">
            Our monthly filing service includes a full purchases reconciliation - we chase every missing supplier invoice before each return is filed, so you claim every shilling you are entitled to.
          </p>
          <a
            href="/services/monthly-vat-filing/"
            className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            See Monthly Filing Service
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
