import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info, BookOpen } from "@phosphor-icons/react/dist/ssr"

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
    { "@type": "ListItem", position: 3, name: "KRA VAT Ledger Explained", item: "https://smartvatkenya.co.ke/resources/vat-ledger-explained-kenya/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org" as const,
  "@type": "Article",
  headline: "KRA VAT Ledger Explained - What KRA Sees on Your Account (2026)",
  description:
    "The KRA VAT ledger is the master record of everything you have declared, paid, and owed. Understand the four columns - output VAT, input VAT, payments, and credits - and how the auto-populated return pulls from this ledger.",
  author: personSchema(),
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-08-08",
  dateModified: LAST_VERIFIED,
  url: "https://smartvatkenya.co.ke/resources/vat-ledger-explained-kenya",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/vat-ledger-explained-kenya",
}

const faqSchema = {
  "@context": "https://schema.org" as const,
  "@type": "FAQPage" as const,
  mainEntity: [
    {
      "@type": "Question" as const,
      name: "What is the KRA VAT ledger?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "The KRA VAT ledger is the master accounting record KRA maintains for every VAT-registered taxpayer. It tracks every output VAT amount you have charged (sales), every input VAT amount you have claimed (purchases), every payment you have made, and every credit or refund. The ledger is the source of truth - the figure on your monthly VAT return and the auto-populated CSV both flow from this ledger. You can view your ledger on iTax under Returns > Ledger > VAT.",
      },
    },
    {
      "@type": "Question" as const,
      name: "How does the auto-populated VAT return pull from the ledger?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "The auto-populated return queries the VAT ledger for the specific tax period (e.g., August 2026). It pulls: total output VAT declared in that period (from your eTIMS sales transmissions), total input VAT claimed (from your suppliers' eTIMS transmissions and your manual additions), and the opening balance (any unpaid VAT or carried-forward credit from the previous period). The return you file on the 20th is essentially a snapshot of the ledger at that point in time.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Why does my VAT ledger show a different balance than my records?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Five common reasons: (1) you have unpaid VAT from a previous period carrying forward - the ledger shows the cumulative balance, not just the current month; (2) a payment you made has not yet reflected (KRA payments take 24-48 hours to post); (3) a credit from a successful dispute has been applied; (4) you have a penalty or interest charge added to the ledger; (5) a supplier transmitted an eTIMS invoice to your PIN that you did not know about - it appears as a purchase on your ledger but you have not recorded it locally.",
      },
    },
    {
      "@type": "Question" as const,
      name: "How long does KRA keep VAT ledger history?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "KRA maintains VAT ledger history for a minimum of 7 years from the end of the tax period. This is the statutory retention period under the Tax Procedures Act. For serious cases (large adjustments, fraud investigations), KRA can access ledger history going back further. As a taxpayer, you should also keep your own records for 7 years - do not rely solely on KRA's ledger, as entries can be amended or removed during audits.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Can I get a copy of my full VAT ledger from KRA?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Yes. Log into iTax, navigate to Returns > Ledger > VAT, select the date range, and click 'Download Statement'. The PDF includes every transaction line for that period - returns filed, payments made, credits applied, penalties assessed. This is the document you should attach to a Notice of Objection, a tax compliance certificate application, or a VAT refund request.",
      },
    },
    {
      "@type": "Question" as const,
      name: "What is a 'debit' vs 'credit' on the VAT ledger?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "A 'debit' on your VAT ledger means you owe KRA money - typically output VAT charged on sales. A 'credit' means KRA owes you - typically input VAT claimed on purchases that exceeds your output VAT, or a payment you made that has not yet been offset. The net balance (debits minus credits) is what you pay when you file the return. A persistent credit balance (several months) may trigger KRA to ask why you are not claiming a refund.",
      },
    },
  ],
}

const toc = [
  { id: "what-is-ledger", label: "What the VAT Ledger Is" },
  { id: "four-columns", label: "The Four Ledger Columns" },
  { id: "how-auto-population-uses", label: "How Auto-Population Pulls from It" },
  { id: "common-imbalances", label: "Common Imbalances and Their Causes" },
  { id: "how-to-read-ledger", label: "How to Read Your Own Ledger" },
  { id: "faq", label: "Frequently Asked Questions" },
]

export default function VatLedgerExplainedKenyaPage() {
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
            {["VAT Ledger", "iTax", "Auto-Populated", "Compliance"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            KRA VAT Ledger Explained - What KRA Sees on Your Account
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
            The <strong className="text-ink">KRA VAT ledger</strong> is the master record KRA maintains of every VAT-registered taxpayer&rsquo;s account. It has <strong className="text-ink">four core columns</strong>: output VAT (from your eTIMS sales), input VAT (from your suppliers&rsquo; eTIMS invoices), payments (what you have paid), and credits (refunds or adjustments). The auto-populated VAT return is essentially a <strong className="text-ink">snapshot of this ledger</strong> at the moment you file. View your ledger on iTax under <em>Returns &rarr; Ledger &rarr; VAT</em>, and download the statement PDF before filing each return.
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

          {/* Section 1 - What the ledger is */}
          <section id="what-is-ledger" aria-labelledby="what-is-ledger-h">
            <h2 id="what-is-ledger-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What the VAT Ledger Actually Is
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                When you register for VAT, KRA opens a <strong className="text-ink">VAT account</strong> on your KRA PIN. This account is the VAT ledger. Every transaction that affects your VAT position - sales, purchases, payments, refunds, penalties, credits - is recorded as a line item on this ledger.
              </p>
              <p>
                The ledger is <strong className="text-ink">not the same as your monthly VAT return</strong>. The return is a periodic summary (one per month) of what happened in that month. The ledger is the cumulative record - it shows every return you have ever filed, every payment you have ever made, every adjustment KRA has ever applied.
              </p>
              <p>
                Think of it like a bank statement: the return is a single month&rsquo;s transactions, the ledger is the full account history going back to when you opened the account.
              </p>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <BookOpen size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Key implication:</strong> The figure on your current month&rsquo;s return depends on the closing balance of the previous month&rsquo;s ledger. If last month&rsquo;s return was wrong, this month&rsquo;s opening balance is also wrong. Disputes can cascade across periods - which is why we always advise resolving discrepancies early rather than letting them accumulate.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 - Four columns */}
          <section id="four-columns" aria-labelledby="four-columns-h">
            <h2 id="four-columns-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              The Four Ledger Columns Explained
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The VAT ledger has four core columns. Knowing what each represents helps you read the statement PDF and identify issues fast.
              </p>
              <div className="space-y-4">
                <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                  <p className="font-display text-[1rem] font-semibold text-ink mb-2 flex items-center gap-2">
                    <span className="font-mono text-[0.78rem] text-red-600">DR</span>
                    Output VAT (Debit)
                  </p>
                  <p className="text-[0.83rem] text-ink-muted leading-relaxed mb-3">
                    Every time you issue a tax invoice charging VAT, the output VAT amount is debited to your ledger. The source is your eTIMS transmission - KRA receives the invoice, validates it, and posts the VAT amount as a debit on your account the same day.
                  </p>
                  <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                    <strong className="text-ink">What it means:</strong> This is VAT you owe KRA. It accumulates over the month. On the 20th of the next month, you file the return and pay this amount.
                  </p>
                </div>

                <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                  <p className="font-display text-[1rem] font-semibold text-ink mb-2 flex items-center gap-2">
                    <span className="font-mono text-[0.78rem] text-emerald-600">CR</span>
                    Input VAT (Credit)
                  </p>
                  <p className="text-[0.83rem] text-ink-muted leading-relaxed mb-3">
                    Every time a supplier issues you an eTIMS invoice with your correct KRA PIN, the input VAT amount is credited to your ledger. The source is the supplier&rsquo;s eTIMS transmission - KRA matches the supplier&rsquo;s invoice to your PIN and credits your account within 24 hours.
                  </p>
                  <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                    <strong className="text-ink">What it means:</strong> This is VAT KRA owes you (or, more precisely, VAT you can offset against output VAT). Manual additions (when a supplier&rsquo;s invoice is missing) also post as credits once you file the return.
                  </p>
                </div>

                <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                  <p className="font-display text-[1rem] font-semibold text-ink mb-2 flex items-center gap-2">
                    <span className="font-mono text-[0.78rem] text-ink">PAY</span>
                    Payments (Credit)
                  </p>
                  <p className="text-[0.83rem] text-ink-muted leading-relaxed mb-3">
                    When you pay VAT (via M-PESA Paybill 572 572 or bank deposit), the payment posts as a credit on your ledger. KRA&rsquo;s payment processing takes 24-48 hours to reflect.
                  </p>
                  <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                    <strong className="text-ink">What it means:</strong> Payments reduce your balance. If you paid KES 50,000 and your output VAT was KES 50,000, the net is zero and the return shows &ldquo;no balance due&rdquo;.
                  </p>
                </div>

                <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                  <p className="font-display text-[1rem] font-semibold text-ink mb-2 flex items-center gap-2">
                    <span className="font-mono text-[0.78rem] text-amber-600">ADJ</span>
                    Adjustments &amp; Penalties (Mixed)
                  </p>
                  <p className="text-[0.83rem] text-ink-muted leading-relaxed mb-3">
                    Penalties (late filing, late payment, non-compliant invoice) post as debits. Successful dispute resolutions post as credits. Voluntary disclosure adjustments can go either way.
                  </p>
                  <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                    <strong className="text-ink">What it means:</strong> The &ldquo;other&rdquo; column - everything that is not a sale, purchase, or payment. Watch this column for unexpected entries - a surprise penalty debit is the most common way businesses discover they had a compliance issue.
                  </p>
                </div>
              </div>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Net balance = output VAT - input VAT - payments + adjustments.</strong> A positive net balance means you owe KRA. A negative net balance means KRA owes you (a credit). Most businesses should have a small positive balance each month - a persistent negative balance means you are not claiming refunds and KRA may eventually ask why.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 - How auto-population uses */}
          <section id="how-auto-population-uses" aria-labelledby="how-auto-population-uses-h">
            <h2 id="how-auto-population-uses-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How the Auto-Populated Return Pulls from the Ledger
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                When you log into iTax to file your monthly VAT return, the system does not generate the figures from scratch. It queries the VAT ledger for the specific tax period (e.g., August 2026) and pre-fills the return form with the result.
              </p>
              <p>The query looks like this in concept:</p>
              <ol className="space-y-2 list-decimal pl-5 text-[0.85rem] text-ink-soft">
                <li><strong className="text-ink">Output VAT for August:</strong> Sum of all &ldquo;Output VAT&rdquo; debits posted to your ledger between 1-31 August</li>
                <li><strong className="text-ink">Input VAT for August:</strong> Sum of all &ldquo;Input VAT&rdquo; credits posted between 1-31 August</li>
                <li><strong className="text-ink">Opening balance:</strong> The net balance at the end of July (carried forward)</li>
                <li><strong className="text-ink">Closing balance:</strong> Opening balance + output VAT - input VAT - payments made in August</li>
              </ol>
              <p>
                The auto-populated CSV you download before filing shows the same data - sales transactions and purchase transactions from the ledger, formatted for your review. <strong className="text-ink">The CSV is literally the ledger&rsquo;s detail lines for that period</strong>, exported in a spreadsheet format.
              </p>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">For the practical workflow</strong> of reviewing and filing the auto-populated return, see our{" "}
                  <a href="/resources/vat-auto-populated-return/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                    auto-populated VAT return guide
                  </a>
                  . For what to do when the auto-populated figure is wrong, see our{" "}
                  <a href="/resources/vat-return-dispute-auto-populated/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                    dispute guide
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 - Common imbalances */}
          <section id="common-imbalances" aria-labelledby="common-imbalances-h">
            <h2 id="common-imbalances-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Common Ledger Imbalances and Their Causes
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                If your local books show a different VAT payable than what the KRA ledger shows, one of these five causes is usually responsible:
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Supplier transmitted an invoice you did not record locally",
                    desc: "A supplier issued you an eTIMS invoice with your correct PIN - it auto-credited your ledger. But you have not yet received or processed the supplier's invoice in your local books. The ledger shows a credit, your books do not. Reconcile by adding the missing purchase to your local records.",
                  },
                  {
                    title: "Penalty posted without your knowledge",
                    desc: "KRA posted a late filing or late payment penalty to your ledger. Sometimes the SMS notification does not arrive. Check the 'Adjustments' column on the ledger for surprise debits. See our KRA VAT penalties reference for the penalty types.",
                  },
                  {
                    title: "Payment has not yet reflected",
                    desc: "You paid via M-PESA on the 19th. The payment posts to the ledger 24-48 hours later - sometimes after the 20th deadline. KRA may assess a late payment penalty because the ledger shows 'unpaid' on the 20th. Payment proof (M-PESA confirmation code) is your defense - file a dispute.",
                  },
                  {
                    title: "Dispute credit applied to wrong period",
                    desc: "You won a dispute on the July return. KRA's audit team applied the credit - but to the August ledger instead of September. Your August return suddenly shows a smaller payable than your books. Contact KRA to move the credit to the correct period.",
                  },
                  {
                    title: "Credit note did not flow through eTIMS",
                    desc: "You issued a credit note to a customer outside eTIMS (manual credit note). The credit note did not post to the ledger - your output VAT remains inflated. The fix: re-issue the credit note through eTIMS so it appears on the ledger.",
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

          {/* Section 5 - How to read your ledger */}
          <section id="how-to-read-ledger" aria-labelledby="how-to-read-ledger-h">
            <h2 id="how-to-read-ledger-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How to Read Your Own VAT Ledger
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Reading your VAT ledger should be a <strong className="text-ink">monthly habit</strong> - on the 18th of every month, before you file the previous month&rsquo;s return on the 20th. Here&rsquo;s how to do it efficiently:
              </p>
              <ol className="space-y-3 list-none pl-0" role="list">
                {[
                  {
                    step: "01",
                    title: "Log into iTax and navigate to the VAT ledger",
                    desc: "Go to itax.kra.go.ke, log in with your KRA PIN and password. Navigate to Returns > Ledger > VAT. Select the tax period (the previous month). Click 'View Statement'.",
                  },
                  {
                    step: "02",
                    title: "Download the PDF statement",
                    desc: "Click 'Download Statement' (top right of the page). Save the PDF. This is your official record - attach it to tax compliance certificate applications, VAT refund requests, and dispute notices.",
                  },
                  {
                    step: "03",
                    title: "Scan the four columns line by line",
                    desc: "Open the PDF. Each line shows: date, transaction type (output VAT, input VAT, payment, adjustment), reference number, amount, and running balance. Look for: amounts that do not match your local records, surprise adjustment entries, missing payment reflections.",
                  },
                  {
                    step: "04",
                    title: "Compare the closing balance to your expected payable",
                    desc: "Your books should show a 'VAT payable' amount for the month. The ledger's closing balance should match. If the ledger shows a different amount, work backwards through the lines to find the discrepancy.",
                  },
                  {
                    step: "05",
                    title: "Note any unexpected entries for follow-up",
                    desc: "If you see a penalty you did not expect, a credit you cannot explain, or a debit that looks wrong - note the date, reference number, and amount. These are the items to discuss with your tax agent or to dispute with KRA.",
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
              <div className="border border-brand/20 bg-brand-muted rounded-lg p-5">
                <p className="font-display text-[0.95rem] font-semibold text-ink mb-2">Want a professional ledger review each month?</p>
                <p className="text-[0.83rem] text-ink-muted leading-relaxed mb-4">
                  Our monthly VAT filing service includes a full ledger review before each return is submitted. We catch discrepancies early, document them, and file clean returns - so you never face a surprise penalty or audit. KES 3,500/month, no long-term contract.
                </p>
                <a
                  href="/services/monthly-vat-filing/"
                  className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
                >
                  See Monthly Filing Service
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
            Compiled from the Tax Procedures Act (TPA), VAT (General) Regulations, iTax ledger documentation, KRA Contact Centre guidance on ledger disputes (020 499 9999), and Smart VAT Kenya&rsquo;s hands-on experience reconciling VAT ledgers for Kenyan SMEs. Last verified: August 2026.
          </p>
        </div>

        {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More VAT Guides</p>
          <ArticleGrid currentSlug="vat-ledger-explained-kenya" />
        </div>

        {/* CTA */}
        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">Confused by your VAT ledger?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[40ch] mx-auto leading-relaxed">
            Send us a screenshot of the ledger line that does not make sense - we will explain it in plain English and tell you whether you need to dispute.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20need%20help%20reading%20my%20KRA%20VAT%20ledger`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            Get VAT Ledger Help
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
