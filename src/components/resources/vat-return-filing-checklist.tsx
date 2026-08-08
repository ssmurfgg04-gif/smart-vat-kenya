import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "VAT Return Filing Checklist", item: "https://smartvatkenya.co.ke/resources/vat-return-filing-checklist" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "VAT Return Filing Checklist Kenya 2026: Monthly Filing Guide",
  description:
    "Step-by-step checklist for filing your monthly VAT return on KRA iTax. Covers documents to prepare, data validation checks, common errors to avoid, and post-filing confirmation steps.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-27",
  dateModified: "2026-08-08",
  url: "https://smartvatkenya.co.ke/resources/vat-return-filing-checklist",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/vat-return-filing-checklist",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the deadline for filing VAT returns in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VAT returns must be filed on or before the 20th day of every month for the preceding month. For example, the January return is due by 20 February. If the 20th falls on a weekend or public holiday, the deadline moves to the next working day. Late filing attracts a penalty of KES 10,000 per month or part of a month.",
      },
    },
    {
      "@type": "Question",
      name: "What documents do I need to file a VAT return?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You need: (1) Sales summary for the month — total sales, zero-rated sales, exempt sales, and VAT-exclusive sales. (2) Purchase summary — total purchases, input VAT claimed, and capital goods purchases. (3) eTIMS invoice register to reconcile sales figures. (4) Bank statements or M-PESA statements to confirm receipts. (5) Withholding VAT certificates if you have been subject to withholding VAT. Our checklist below covers every item you need.",
      },
    },
    {
      "@type": "Question",
      name: "Can I file a nil VAT return if I had no sales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If you had no sales or purchases in a given month, you must still file a nil return. Filing nil returns is mandatory for all VAT-registered businesses every month, even if there is no activity. Failure to file a nil return attracts the same KES 10,000 penalty as a late return. See our nil returns guide for step-by-step instructions.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I make a mistake on my submitted VAT return?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Once submitted, a VAT return cannot be edited. If you discover an error, you must wait for the next period and correct it in that return, or contact KRA to request an amendment. To avoid errors, always use this checklist before submitting. Most errors involve incorrect decimal formats, missing fields, or mismatched totals.",
      },
    },
    {
      "@type": "Question",
      name: "How do I pay VAT after filing the return?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VAT can be paid via M-PESA Paybill 572572 (business number). Your account number is your KRA PIN followed by the payment code 000V (e.g. P0123456789V). Alternatively, you can pay via bank transfer to KRA's collection account. Payment must be made by the same 20th deadline. Late payment attracts interest at 2% per month on the unpaid amount.",
      },
    },
  ],
}

const toc = [
  { id: "before-you-start",    label: "Before You Start: Gather Your Documents" },
  { id: "sales-data",          label: "Sales Data: What to Include" },
  { id: "purchases-input-vat", label: "Purchases and Input VAT" },
  { id: "itax-entry",          label: "iTax Entry: Step by Step" },
  { id: "validation",          label: "Pre-Submission Validation Check" },
  { id: "validation-engine",   label: "KRA's 2026 Validation Engine — Invoice-Level Checks" },
  { id: "after-submission",    label: "After Submission: Confirm and Pay" },
  { id: "common-mistakes",     label: "Common Mistakes That Cause Rejection" },
  { id: "faq",                 label: "Frequently Asked Questions" },
]

export default function VATReturnFilingChecklistPage() {
  return (
    <>
      <script id="article-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script id="faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-canvas-dark px-6 lg:px-10 py-14">
        <div className="max-w-3xl mx-auto">
          <a href="/resources/" className="inline-flex items-center gap-1.5 text-canvas/50 hover:text-canvas text-sm mb-6 transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> Back to Knowledge Base
          </a>
          <div className="flex flex-wrap gap-2 mb-5">
            {["Checklist", "VAT Filing", "Monthly Return", "iTax"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            VAT Return Filing Checklist Kenya 2026: Monthly Filing Guide
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; KRA-registered VAT agents &mdash; Updated August 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">

        <div className="border-l-[3px] border-brand pl-5 mb-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Why This Checklist Matters</p>
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            Filing a VAT return on iTax requires precise data entry. A single error — wrong decimal format, missing field, or mismatched total — can cause a <strong className="text-ink">return validation failure</strong> that wastes hours and risks a late filing penalty. This checklist covers every document you need, every field you must complete, and the validation checks to run <strong className="text-ink">before</strong> you hit submit.
          </p>
        </div>

        <nav aria-label="Table of contents" className="mb-12">
          <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
            <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-muted mb-4">On This Page</p>
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

          <section id="before-you-start" aria-labelledby="documents-h">
            <h2 id="documents-h" className="font-display text-[1.4rem] font-semibold text-ink mb-2 tracking-tight">
              Before You Start: Gather Your Documents
            </h2>
            <p className="text-[0.85rem] text-ink-muted mb-6">
              Have these documents ready before you log in to iTax. Preparing everything in advance prevents timeout-related data loss.
            </p>

            <div className="space-y-4">
              {[
                {
                  label: "Sales Register / eTIMS Invoice Summary",
                  detail: "Your eTIMS-issued invoices for the month. The total sales figure on your return must match your eTIMS invoice register. Do not guess — run a report from eTIMS.",
                },
                {
                  label: "Purchase Register / Supplier Invoices",
                  detail: "All purchase invoices from VAT-registered suppliers. You can only claim input VAT on invoices that are eTIMS-compliant and show your KRA PIN.",
                },
                {
                  label: "Credit Notes Issued and Received",
                  detail: "Any refunds, returns, or adjustments made during the month. Credit notes reduce your output VAT (sales) or input VAT (purchases) for the period.",
                },
                {
                  label: "Withholding VAT Certificates",
                  detail: "If your customers withheld VAT on your invoices, collect the withholding certificates. You claim the withheld amount as input VAT.",
                },
                {
                  label: "Bank and M-PESA Statements",
                  detail: "Optional but recommended for reconciliation. Cross-check your recorded sales against actual deposits to catch discrepancies before KRA does.",
                },
                {
                  label: "Previous Month's Return",
                  detail: "Keep last month's return handy for reference. Some figures (like capital goods adjustments) carry over from the previous period.",
                },
              ].map(({ label, detail }) => (
                <div key={label} className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                  <CheckCircle size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink text-[0.88rem]">{label}</p>
                    <p className="text-[0.82rem] text-ink-muted mt-0.5 leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="sales-data" aria-labelledby="sales-h">
            <h2 id="sales-h" className="font-display text-[1.4rem] font-semibold text-ink mb-2 tracking-tight">
              Sales Data: What to Include
            </h2>
            <p className="text-[0.85rem] text-ink-muted mb-6">
              Your VAT return requires a breakdown of sales by VAT rate. Prepare these figures for the month.
            </p>

            <div className="border border-hairline rounded-lg overflow-hidden">
              <table className="w-full text-[0.83rem]">
                <thead>
                  <tr className="border-b border-hairline bg-canvas-alt">
                    <th className="text-left p-3.5 font-semibold text-ink">Field</th>
                    <th className="text-left p-3.5 font-semibold text-ink">What to Enter</th>
                    <th className="text-left p-3.5 font-semibold text-ink">Source</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hairline">
                  <tr>
                    <td className="p-3.5 text-ink-muted">Total sales (VAT inclusive)</td>
                    <td className="p-3.5 text-ink">Gross sales including 16% VAT</td>
                    <td className="p-3.5 text-ink-muted">eTIMS invoice report</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-ink-muted">Sales at 16%</td>
                    <td className="p-3.5 text-ink">VAT-exclusive value of standard-rated sales</td>
                    <td className="p-3.5 text-ink-muted">eTIMS invoice report</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-ink-muted">Sales at 0%</td>
                    <td className="p-3.5 text-ink">Zero-rated sales (e.g. exports, certain food items)</td>
                    <td className="p-3.5 text-ink-muted">Invoice records</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-ink-muted">Exempt sales</td>
                    <td className="p-3.5 text-ink">Exempt supplies (e.g. residential rent, financial services)</td>
                    <td className="p-3.5 text-ink-muted">Invoice records</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-ink-muted">Output VAT</td>
                    <td className="p-3.5 text-ink">16% of the VAT-exclusive value of standard-rated sales</td>
                    <td className="p-3.5 text-ink-muted">Calculated</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="border border-canvas-warm bg-[#fffbf0] dark:bg-[#2a1f00] dark:border-[#4a3800] rounded-lg p-4 flex items-start gap-3 mt-4">
              <Warning size={17} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                <strong>Common mistake:</strong> Entering total sales (VAT inclusive) in the field for sales at 16%. iTax expects the VAT-exclusive value. If your total invoice was KES 116,000, enter KES 100,000 in the sales field and KES 16,000 in the output VAT field.
              </p>
            </div>
          </section>

          <section id="purchases-input-vat" aria-labelledby="purchases-h">
            <h2 id="purchases-h" className="font-display text-[1.4rem] font-semibold text-ink mb-2 tracking-tight">
              Purchases and Input VAT
            </h2>
            <p className="text-[0.85rem] text-ink-muted mb-6">
              Input VAT is the VAT you paid on your business purchases. You can deduct this from the output VAT you collected, and remit only the difference.
            </p>

            <div className="border border-hairline rounded-lg overflow-hidden">
              <table className="w-full text-[0.83rem]">
                <thead>
                  <tr className="border-b border-hairline bg-canvas-alt">
                    <th className="text-left p-3.5 font-semibold text-ink">Field</th>
                    <th className="text-left p-3.5 font-semibold text-ink">What to Enter</th>
                    <th className="text-left p-3.5 font-semibold text-ink">Source</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hairline">
                  <tr>
                    <td className="p-3.5 text-ink-muted">Total purchases (VAT inclusive)</td>
                    <td className="p-3.5 text-ink">Gross purchases including 16% VAT</td>
                    <td className="p-3.5 text-ink-muted">Supplier invoices + eTIMS purchase register</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-ink-muted">Purchases at 16% (VAT exclusive)</td>
                    <td className="p-3.5 text-ink">Value of purchases before VAT</td>
                    <td className="p-3.5 text-ink-muted">Supplier invoices</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-ink-muted">Input VAT claimed</td>
                    <td className="p-3.5 text-ink">16% of the VAT-exclusive purchase value</td>
                    <td className="p-3.5 text-ink-muted">Calculated from invoices</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-ink-muted">Capital goods purchases</td>
                    <td className="p-3.5 text-ink">High-value assets (buildings, machinery, vehicles)</td>
                    <td className="p-3.5 text-ink-muted">Asset register + supplier invoices</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-ink-muted">Withholding VAT claimed</td>
                    <td className="p-3.5 text-ink">VAT withheld by customers (from withholding certificates)</td>
                    <td className="p-3.5 text-ink-muted">Withholding VAT certificates</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3 mt-4">
              <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                <strong className="text-ink">Key rule:</strong> You can only claim input VAT on purchases used to make <strong>taxable supplies</strong>. If you make both taxable and exempt supplies, input VAT must be apportioned. See our <a href="/resources/input-vat-deduction-guide/" className="text-brand underline underline-offset-2 hover:text-brand-hover">input VAT deduction guide</a> for full details.
              </p>
            </div>
          </section>

          <section id="itax-entry" aria-labelledby="itax-h">
            <h2 id="itax-h" className="font-display text-[1.4rem] font-semibold text-ink mb-2 tracking-tight">
              iTax Entry: Step by Step
            </h2>
            <p className="text-[0.85rem] text-ink-muted mb-6">
              Follow these steps on itax.kra.go.ke to complete your VAT return.
            </p>

            <div className="space-y-4">
              {[
                {
                  step: "01",
                  title: "Log in to iTax and navigate to VAT return",
                  body: "Log in at itax.kra.go.ke. Go to 'Returns' &rarr; 'File Return' &rarr; select 'VAT Return' for the relevant month. Use Chrome or Edge for best compatibility.",
                },
                {
                  step: "02",
                  title: "Enter sales figures from your prepared data",
                  body: "Enter all sales fields: total sales, standard-rated (16%), zero-rated (0%), and exempt sales. Do not enter thousand separators — type '100000' not '100,000'. Use a dot (.) not a comma (,) for decimals.",
                },
                {
                  step: "03",
                  title: "Enter purchase and input VAT figures",
                  body: "Enter total purchases, standard-rated purchases, and input VAT claimed. Include withholding VAT from certificates. Double-check each figure against your source documents.",
                },
                {
                  step: "04",
                  title: "Complete capital goods adjustment (if applicable)",
                  body: "If you purchased capital goods this period, enter the details. The CGA calculation is shown on your return. See our input VAT guide for CGA rules.",
                },
                {
                  step: "05",
                  title: "Review the calculated VAT payable or refund",
                  body: "iTax calculates: Output VAT - Input VAT = VAT payable (or refundable). If the amount looks wrong, go back and check your figures before submitting.",
                },
                {
                  step: "06",
                  title: "Submit and save the confirmation receipt",
                  body: "Click 'Submit'. If successful, iTax generates a confirmation receipt. Save or print this receipt as proof of filing. If you get a validation error, check the pre-submission validation section below.",
                },
              ].map(({ step, title, body }) => (
                <div key={step} className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-[0.65rem] text-brand font-semibold shrink-0 mt-0.5 w-7">{step}</span>
                    <div>
                      <p className="font-semibold text-ink text-[0.9rem] mb-1">{title}</p>
                      <p className="text-[0.82rem] text-ink-muted leading-relaxed" dangerouslySetInnerHTML={{ __html: body }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="validation" aria-labelledby="validation-h">
            <h2 id="validation-h" className="font-display text-[1.4rem] font-semibold text-ink mb-2 tracking-tight">
              Pre-Submission Validation Check
            </h2>
            <p className="text-[0.85rem] text-ink-muted mb-6">
              Run through these checks before you click submit. Catching an error here saves you from a rejected return and potential late filing penalty.
            </p>

            <ul className="space-y-3">
              {[
                "Sales figures match your eTIMS invoice register for the month.",
                "No thousand separators (commas) in any number field.",
                "Decimal points use a dot (.), not a comma.",
                "VAT-exclusive figures are entered correctly (not VAT-inclusive in the wrong field).",
                "Input VAT claimed matches 16% of your standard-rated purchases (unless partially exempt).",
                "Withholding VAT amounts are entered in the correct field.",
                "Nil returns have zeros in every field — no blank fields.",
                "The VAT payable/refundable amount looks reasonable for your business.",
                "You have saved a copy of your source data (in case iTax times out).",
                "Internet connection is stable — use a wired connection if possible.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.88rem] text-ink-soft">
                  <CheckCircle size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section id="validation-engine" aria-labelledby="validation-engine-h">
            <h2 id="validation-engine-h" className="font-display text-[1.4rem] font-semibold text-ink mb-2 tracking-tight">
              KRA&apos;s 2026 Validation Engine — Invoice-Level Checks
            </h2>
            <p className="text-[0.85rem] text-ink-muted mb-6">
              Since January 2026, KRA runs a real-time income & expense validation engine that
              cross-checks every figure on your filed return against eTIMS invoice data
              month-to-month — not only at audit. If your declared figures fall outside the
              tolerance band, KRA issues a query letter with a 14-day response window before
              escalating to audit. Run these checks on every invoice before you file.
            </p>

            <div className="border border-brand/25 bg-brand-muted rounded-lg p-4 flex items-start gap-3 mb-6">
              <Info size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold text-ink text-[0.88rem] mb-2">What the engine checks</p>
                <ul className="space-y-2 text-[0.83rem] text-ink-soft">
                  {[
                    "<strong className=\"text-ink\">Sales — upward only:</strong> Your declared sales must be &ge; eTIMS transmissions for the period. The auto-populated iTax return only allows upward adjustments; you cannot declare below what eTIMS recorded.",
                    "<strong className=\"text-ink\">Expenses — eTIMS invoice + buyer PIN required:</strong> Every input VAT claim must be backed by a transmitted eTIMS invoice that carries YOUR KRA PIN. Un-transmitted invoices or invoices without your PIN will be flagged as unsupported and risk disallowance.",
                    "<strong className=\"text-ink\">14-day query window:</strong> If the engine flags a gap outside the ~5% tolerance, KRA issues a query letter. You have <strong className=\"text-ink\">14 days</strong> to respond with evidence (eTIMS control numbers, PINs, original invoices).",
                    "<strong className=\"text-ink\">6-month late transmission window:</strong> Purchases transmitted late to eTIMS remain claimable if filed within 6 months of the tax period.",
                    "<strong className=\"text-ink\">120-day refund processing:</strong> Valid refund applications are processed within 120 days by KRA (Finance Act 2025).",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[0.85rem] text-ink-soft" dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </div>
            </div>

            <div className="border border-hairline rounded-lg overflow-hidden">
              <table className="w-full text-[0.83rem]">
                <thead>
                  <tr className="border-b border-hairline bg-canvas-alt">
                    <th className="text-left p-3.5 font-semibold text-ink">Invoice Status</th>
                    <th className="text-left p-3.5 font-semibold text-ink">Input VAT Claimable?</th>
                    <th className="text-left p-3.5 font-semibold text-ink">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hairline">
                  <tr>
                    <td className="p-3.5 text-ink-muted">eTIMS transmitted + your KRA PIN present</td>
                    <td className="p-3.5 text-ink"><span className="text-brand font-semibold">Yes</span></td>
                    <td className="p-3.5 text-ink-muted">Claim normally — engine will validate clean</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-ink-muted">eTIMS transmitted but NO buyer PIN</td>
                    <td className="p-3.5 text-ink"><span className="text-[#b03030] font-semibold">No</span></td>
                    <td className="p-3.5 text-ink-muted">Ask supplier to re-issue with your PIN; cannot claim until fixed</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-ink-muted">NOT transmitted to eTIMS</td>
                    <td className="p-3.5 text-ink"><span className="text-[#b03030] font-semibold">No</span></td>
                    <td className="p-3.5 text-ink-muted">Follow up with supplier; use Buyer-Initiated Invoicing (BII) if urgent</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[0.83rem] text-ink-muted mt-4">
              See our <a href="/resources/vat-special-table-risks/#tax-alerts" className="text-brand underline underline-offset-2 hover:text-brand-hover">KRA Tax Alerts guide</a> for how the engine raises per-line alerts in the RAIS portal, and <a href="/resources/kra-vat-audit-process/" className="text-brand underline underline-offset-2 hover:text-brand-hover">KRA VAT Audit Process</a> for the full audit timeline if a query escalates.
            </p>
          </section>

          <section id="after-submission" aria-labelledby="after-h">
            <h2 id="after-h" className="font-display text-[1.4rem] font-semibold text-ink mb-2 tracking-tight">
              After Submission: Confirm and Pay
            </h2>
            <p className="text-[0.85rem] text-ink-muted mb-6">
              Submitting the return is only half the process. You must also pay any VAT due by the 20th.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Save the confirmation receipt",
                  detail: "iTax shows a confirmation page after successful submission. Save it as PDF or take a screenshot. This is your proof of filing if KRA disputes the return later.",
                },
                {
                  title: "Check your email for the submission receipt",
                  detail: "iTax sends a confirmation email to your registered address. If you do not receive it within 30 minutes, your submission may have failed. Log in and check your return status.",
                },
                {
                  title: "Pay any VAT due via M-PESA or bank transfer",
                  detail: "Use M-PESA Paybill 572572. Account number: your KRA PIN + 000V (e.g. P0123456789V). Payment must be received by the 20th. Late payment attracts 2% interest per month.",
                },
                {
                  title: "Confirm payment reflects on iTax",
                  detail: "Payments typically reflect within 30 minutes. Check 'Payment History' on iTax to confirm. If it has not reflected after 24 hours, contact KRA with your M-PESA confirmation code.",
                },
                {
                  title: "File nil returns if you had no activity",
                  detail: "Even if you had no sales or purchases, you must still log in and file a nil return. A nil return has zeros in all fields. Missing a nil return attracts the same KES 10,000 penalty.",
                },
              ].map(({ title, detail }) => (
                <div key={title} className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                  <CheckCircle size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink text-[0.88rem]">{title}</p>
                    <p className="text-[0.82rem] text-ink-muted mt-0.5 leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="common-mistakes" aria-labelledby="mistakes-h">
            <h2 id="mistakes-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Common Mistakes That Cause Rejection
            </h2>
            <div className="border border-hairline rounded-lg overflow-hidden">
              <table className="w-full text-[0.83rem]">
                <thead>
                  <tr className="border-b border-hairline bg-canvas-alt">
                    <th className="text-left p-3.5 font-semibold text-ink">Mistake</th>
                    <th className="text-left p-3.5 font-semibold text-ink">Fix</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hairline">
                  <tr>
                    <td className="p-3.5 text-ink-muted">Using comma as decimal separator</td>
                    <td className="p-3.5 text-ink">Use a dot (.) for decimals. Type '1500.50' not '1,500.50' or '1500,50'.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-ink-muted">Entering VAT-inclusive amount in VAT-exclusive field</td>
                    <td className="p-3.5 text-ink">If your sale was KES 116,000 including VAT, enter KES 100,000 in the sales field and KES 16,000 in the output VAT field.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-ink-muted">Leaving fields blank instead of entering zero</td>
                    <td className="p-3.5 text-ink">Every field must have a value. Enter 0 (zero) for any field that does not apply.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-ink-muted">Claiming input VAT on non-compliant supplier invoices</td>
                    <td className="p-3.5 text-ink">Only claim input VAT on eTIMS-compliant invoices from VAT-registered suppliers that show your KRA PIN.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-ink-muted">Filing for the wrong tax period</td>
                    <td className="p-3.5 text-ink">Double-check the month and year in the return header. January return goes in the February filing window.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-ink-muted">Not reconciling sales with eTIMS before filing</td>
                    <td className="p-3.5 text-ink">Your VAT return sales figures must match your eTIMS invoice register. KRA cross-checks both systems.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          { }
          <section aria-labelledby="cta-h">
            <div className="border border-brand/30 bg-brand-muted rounded-xl p-6 sm:p-8 text-center">
              <h2 id="cta-h" className="font-display text-[1.3rem] font-semibold text-ink mb-3 tracking-tight">
                Filing Stress? Let Us Handle It
              </h2>
              <p className="text-[0.88rem] text-ink-soft leading-relaxed max-w-lg mx-auto mb-6">
                Our KRA-registered agents file your VAT return on iTax every month. You send us your sales and purchase figures on WhatsApp &mdash; we handle the rest. <strong className="text-ink">KES 3,500/month. No long-term contract.</strong>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://wa.me/254721725958?text=I%20want%20to%20sign%20up%20for%20monthly%20VAT%20filing%20-%20KES%203,500%2Fmonth.%20Please%20send%20me%20the%20next%20steps."
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-6 py-3 rounded-md hover:bg-brand-hover transition-colors"
                >
                  Start Monthly Filing — KES 3,500/month
                  <ArrowRight size={14} weight="bold" aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>

          <FAQSection faqSchema={faqSchema} />
        </article>

        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="vat-return-filing-checklist" />
        </div>

        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">Need help filing your VAT return?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[40ch] mx-auto leading-relaxed">
            We file hundreds of VAT returns every month. Let us handle yours for KES 3,500/month.
          </p>
          <a
            href="https://wa.me/254721725958?text=Hi%2C%20I%20need%20help%20filing%20my%20VAT%20return"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            Start Filing — KES 3,500/month
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
