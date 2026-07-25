import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"

export const metadata: Metadata = {
  title: "KRA Auto-Populated VAT Return Guide 2026 | Smart VAT Kenya",
  description:
    "Complete guide to KRA's auto-populated VAT return in Kenya. Learn how pre-filled returns work, what to check before filing, how to add missing invoices, what to do about duplicate entries, and how the system affects your monthly filing process.",
  keywords: [
    "kra auto populated vat return",
    "auto populated vat return kenya",
    "how to file auto populated vat return",
    "kra pre filled vat return",
    "vat return auto populated kenya",
    "kra simplified vat return",
    "missing invoices auto populated vat return",
    "duplicate invoices auto populated vat return",
    "kra vat return pre populated",
    "how to add missing purchases vat return kenya",
    "kra auto populated vat return guide",
    "vat auto populated return 2026",
    "kra vat return problems",
    "vat return sales not appearing kenya",
    "how to confirm auto populated vat return",
    "kra vat return purchase csv",
    "what if my supplier did not transmit invoice",
    "can i adjust auto populated vat return",
    "kra vat return line item entry",
    "kra vat return lump sum sales",
  ],
  alternates: {
    canonical: "https://smartvatkenya.co.ke/resources/vat-auto-populated-return",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources" },
    { "@type": "ListItem", position: 3, name: "Auto-Populated VAT Return", item: "https://smartvatkenya.co.ke/resources/vat-auto-populated-return" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "KRA Auto-Populated VAT Return Guide 2026",
  description:
    "How KRA's auto-populated VAT return works, what to verify, how to add missing invoices, and what to do when your purchases do not appear. Step-by-step filing guide for 2026.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-25",
  dateModified: "2026-07-25",
  url: "https://smartvatkenya.co.ke/resources/vat-auto-populated-return",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/vat-auto-populated-return",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the KRA auto-populated VAT return?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The auto-populated VAT return is a simplified filing process where KRA pre-fills your VAT return with data from iTax, eTIMS/TIMS, and customs systems. Sales invoices transmitted through eTIMS appear automatically in your return. Purchases from VAT-registered suppliers also appear if they transmitted valid eTIMS invoices with your KRA PIN. You review, adjust, and confirm — rather than entering every line manually.",
      },
    },
    {
      "@type": "Question",
      name: "Why are some of my sales invoices missing from the auto-populated return?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Missing sales invoices are usually caused by transmission issues. If your device was offline when the invoice was issued, it may not have reached KRA's servers. Check your internet connection and ensure your eTIMS device is consistently online. Invoices transmitted late will not appear in the original tax period — they go to the period when they were actually transmitted. You can add missing sales manually by declaring them under lump sum sales or adding them as line items in the return.",
      },
    },
    {
      "@type": "Question",
      name: "Can I reduce or adjust auto-populated sales values downward?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, you cannot reduce pre-populated sales values that came from your eTIMS/TIMS device. If the system shows KES 500,000 in sales, you cannot change that to KES 400,000. You can only add or adjust sales values upward if you made sales outside eTIMS (e.g., manual invoices to non-VAT customers). If you believe the auto-populated figure is wrong, contact your eTIMS device supplier to investigate the transmission issue.",
      },
    },
    {
      "@type": "Question",
      name: "How do I add missing purchases to my auto-populated return?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "First, contact your supplier and ask them to transmit the eTIMS invoice with your correct KRA PIN. Once they do, the purchase will appear in the CSV file when you download the return the next day. If the supplier cannot or will not transmit, you have two options: (1) declare the purchase manually if you have a valid eTIMS-compliant invoice, or (2) accept that you cannot claim input VAT on that purchase and request your supplier to transmit it in a subsequent period. Purchases transmitted late can be claimed within 6 months of the invoice date.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my supplier captured my KRA PIN incorrectly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your supplier entered your KRA PIN incorrectly, the invoice will not appear in your auto-populated purchases CSV because KRA matched it against the wrong PIN. Ask your supplier to issue a credit note through eTIMS for the incorrect invoice, then issue a new eTIMS invoice with the correct KRA PIN. Once transmitted, the corrected invoice will appear in your purchases CSV. This is why you should always verify your KRA PIN on every invoice you receive from suppliers.",
      },
    },
    {
      "@type": "Question",
      name: "What are the benefits of the auto-populated VAT return?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The auto-populated return reduces manual data entry, minimizes calculation errors, ensures that your declared sales match what KRA already has on record, and flags discrepancies early. It also makes the filing faster — instead of entering every invoice line by line, you download the pre-filled return, verify the figures, add any missing entries, and submit. The system updates daily, so downloading the latest version just before filing ensures the most complete data.",
      },
    },
  ],
}

export default function AutoPopulatedReturnPage() {
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
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand mb-3">Guide — Auto-Populated Return</p>
            <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.3rem)] font-semibold text-ink tracking-tight leading-tight mb-4 text-balance">
              KRA Auto-Populated VAT Return Guide 2026
            </h1>
            <p className="text-[0.9rem] text-ink-muted leading-relaxed max-w-[65ch]">
              Since January 2024, KRA has been rolling out a simplified, pre-filled VAT return that pulls your sales
              and purchase data directly from eTIMS, TIMS, and customs systems. This guide explains exactly how it works,
              what you need to check every month, and how to handle problems like missing invoices or duplicate entries.
            </p>
          </header>

          <div className="space-y-10">
            {/* Section 1 — How It Works */}
            <section id="how-it-works" aria-labelledby="how-it-works-h">
              <h2 id="how-it-works-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                How the Auto-Populated VAT Return Works
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  When you log in to iTax and open your VAT return for a given tax period, KRA has already populated
                  most of the fields with data from three sources:
                </p>
                <ul className="space-y-2">
                  {[
                    { source: "eTIMS/TIMS", detail: "All sales invoices you transmitted through your eTIMS device or portal appear as pre-filled sales. Purchases from suppliers who transmitted eTIMS invoices with your KRA PIN appear as pre-filled purchases." },
                    { source: "Customs (iCMS)", detail: "Import entries from the Integrated Customs Management System appear under Section F — Imports. You can claim input VAT on valid customs declarations." },
                    { source: "iTax records", detail: "Previous return data and taxpayer profiles inform certain fields. Your KRA-registered name, PIN, and tax period are filled automatically." },
                  ].map(({ source, detail }) => (
                    <li key={source} className="flex gap-3">
                      <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1.5" aria-hidden="true" />
                      <div><strong className="text-ink">{source}:</strong> {detail}</div>
                    </li>
                  ))}
                </ul>
                <p>
                  The return is available for download from the 1st of the month following the tax period. Data updates
                  daily, so downloading the latest version just before filing gives you the most complete picture.
                </p>
              </div>
            </section>

            {/* Section 2 — Monthly Workflow */}
            <section id="monthly-workflow" aria-labelledby="monthly-workflow-h">
              <h2 id="monthly-workflow-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Your Monthly Filing Workflow
              </h2>
              <div className="space-y-4">
                {[
                  { step: 1, title: "Log in to iTax and navigate to VAT return", detail: "Go to itax.kra.go.ke, log in with your KRA PIN and password. Click Returns > Value Added Tax > File Return. Select the correct tax period (month and year)." },
                  { step: 2, title: "Download the auto-populated return", detail: "Click 'Download Pre-Populated Return'. This downloads a CSV file containing your pre-filled sales (Sheets B-E) and purchases CSV for each type of customer. Save it to your computer." },
                  { step: 3, title: "Review sales against your records", detail: "Compare the pre-filled sales with your internal sales records (accounting software, sales book, M-Pesa statements). Flag any discrepancies. If you spot sales that are missing, note them for manual addition." },
                  { step: 4, title: "Review purchases CSV", detail: "Check that all your suppliers' eTIMS invoices appear in the purchases CSV. If a purchase is missing, contact the supplier before the filing deadline to have them transmit the invoice." },
                  { step: 5, title: "Add missing entries manually", detail: "In the iTax return form, you can add missing sales as line items (B2B) or lump sum sales (B2C). For missing purchases, add them manually if you have valid eTIMS invoices." },
                  { step: 6, title: "Confirm and submit", detail: "Double-check total sales, total purchases, and the net VAT payable. Ensure your M-PESA or bank has sufficient funds if you owe VAT. Submit the return and make payment by the 20th." },
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
            </section>

            {/* Section 3 — Missing Sales */}
            <section id="missing-sales" aria-labelledby="missing-sales-h">
              <h2 id="missing-sales-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Why Are Some Sales Missing?
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>Sales can be missing from the auto-populated return for several reasons:</p>
                <div className="space-y-3">
                  {[
                    { reason: "Transmission failure", fix: "Your eTIMS device may have been offline when the invoice was issued. Ensure your device stays connected to the internet. For TIMS users, contact your device supplier to check configuration." },
                    { reason: "Late transmission", fix: "Invoices transmitted after the tax period ends go to the following period. You must declare the sale manually in the correct period or adjust in the next return." },
                    { reason: "Device configuration error", fix: "Your eTIMS or TIMS device may be misconfigured. Contact your device supplier to run a diagnostic. This is a common issue after device maintenance or replacement." },
                    { reason: "Manual sales outside eTIMS", fix: "Sales to non-VAT customers (e.g., cash sales to consumers) that you did not enter into eTIMS will not appear. Declare these as lump sum sales in the return." },
                  ].map(({ reason, fix }) => (
                    <div key={reason} className="border border-hairline rounded-lg p-4">
                      <p className="font-semibold text-ink text-[0.88rem] mb-1">{reason}</p>
                      <p className="text-[0.83rem] text-ink-muted leading-relaxed">{fix}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 4 — Missing Purchases */}
            <section id="missing-purchases" aria-labelledby="missing-purchases-h">
              <h2 id="missing-purchases-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Why Are Some Purchases Missing?
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  Purchases are missing from your auto-populated return when your supplier has not properly transmitted
                  their eTIMS invoice with your KRA PIN. Here is what to do:
                </p>
                <ol className="space-y-3 list-decimal list-inside">
                  <li className="text-ink-soft">
                    <strong className="text-ink">Contact your supplier immediately.</strong> Ask them to check whether
                    the eTIMS invoice was transmitted successfully and whether your KRA PIN was captured correctly.
                  </li>
                  <li className="text-ink-soft">
                    <strong className="text-ink">Request re-transmission.</strong> If the invoice was not transmitted,
                    ask the supplier to transmit it. Once transmitted, it will appear in the CSV the next business day.
                  </li>
                  <li className="text-ink-soft">
                    <strong className="text-ink">Add manually if urgent.</strong> If the deadline is approaching and the
                    supplier has not transmitted, you can add the purchase manually in the return. Keep the eTIMS
                    invoice as supporting documentation in case of audit.
                  </li>
                  <li className="text-ink-soft">
                    <strong className="text-ink">Claim in a subsequent period.</strong> If transmitted late, the
                    purchase can be claimed within 6 months from the invoice date under the late transmission rules.
                  </li>
                </ol>
                <div className="border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800/40 rounded-lg p-4 flex items-start gap-3 mt-4">
                  <Warning size={17} weight="fill" className="text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-amber-800 dark:text-amber-300 text-[0.85rem] mb-1">
                      Do not claim input VAT without a valid eTIMS invoice
                    </p>
                    <p className="text-[0.83rem] text-amber-700 dark:text-amber-400 leading-relaxed">
                      Even if a supplier verbally confirms they sold to you, you cannot claim input VAT unless a valid
                      eTIMS invoice was transmitted to KRA with your PIN. Claiming without supporting documentation
                      risks penalties and rejection during audit.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 — Duplicate Invoices */}
            <section id="duplicate-invoices" aria-labelledby="duplicate-invoices-h">
              <h2 id="duplicate-invoices-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Duplicate Invoices in the Return
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  Duplicate invoices can appear if a supplier transmitted the same invoice twice, or if your eTIMS
                  device sent a duplicate. What to do:
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1.5" aria-hidden="true" />
                    <div className="text-ink-soft"><strong className="text-ink">For duplicate sales:</strong> You cannot reduce the pre-populated sales value yourself. Contact your eTIMS device supplier to investigate and issue a credit note for the duplicate if needed.</div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1.5" aria-hidden="true" />
                    <div className="text-ink-soft"><strong className="text-ink">For duplicate purchase invoices:</strong> You can disallow the duplicate purchase entry in the return. Only claim input VAT once for each valid invoice. If both entries appear, claim one and disallow the other.</div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 6 — Lump Sum Sales */}
            <section id="lump-sum" aria-labelledby="lump-sum-h">
              <h2 id="lump-sum-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Declaring Lump Sum Sales
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  Sales to customers who are not VAT-registered (consumers, unregistered businesses) do not appear
                  as line items. Instead, they are captured under lump sum sales fields in Sheets B, D, and E.
                  The auto-populated return groups these automatically from your eTIMS CSV data.
                </p>
                <p>
                  If you made manual sales to unregistered customers that were not entered into eTIMS, add them
                  under the lump sum sales field. Be accurate — KRA compares your declared lump sum against your
                  bank deposits and M-Pesa statements.
                </p>
                <div className="border border-brand/25 bg-brand-muted rounded-lg p-4 flex items-start gap-3">
                  <Info size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-[0.83rem] text-ink-soft leading-relaxed">
                    <strong className="text-ink">Reconciliation tip:</strong> Before filing, reconcile your M-Pesa
                    and bank deposits for the period against your declared sales. Any shortfall between deposits
                    and declared sales is a red flag KRA may investigate.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7 — Common Questions */}
            <section id="common-questions" aria-labelledby="common-questions-h">
              <h2 id="common-questions-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Common Auto-Populated Return Questions
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <div className="space-y-3">
                  {[
                    { q: "Can I file the old way (manual entry)?", a: "KRA encourages all VAT-registered taxpayers to use the auto-populated return. While you can still override and enter figures manually, the pre-filled data from eTIMS cannot be reduced. If you enter a lower figure than what eTIMS transmitted, the system will flag a discrepancy." },
                    { q: "What about non-VAT suppliers on my purchases?", a: "Purchases from non-VAT suppliers (e.g., a small shop without eTIMS) will not appear in the CSV. You cannot claim input VAT on these purchases. They can be used for income tax deductions but not for VAT input claims." },
                    { q: "Does the return update right up to the 20th?", a: "Yes. The data updates daily through an incremental batch process. Download the latest version on the day you file to capture all recently transmitted invoices. Do not download once and file a week later — you will miss late-transmitted entries." },
                    { q: "What about import entries?", a: "Import declarations from iCMS appear automatically under Section F — Imports. If an import entry is missing, contact your customs clearing agent to verify the declaration was filed correctly. You can also add it manually with the correct customs entry number." },
                  ].map(({ q, a }) => (
                    <div key={q} className="border border-hairline rounded-lg p-4">
                      <p className="font-semibold text-ink text-[0.88rem] mb-1">{q}</p>
                      <p className="text-[0.83rem] text-ink-muted leading-relaxed">{a}</p>
                    </div>
                  ))}
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
            href="https://wa.me/254721725958?text=I%20need%20help%20understanding%20the%20auto-populated%20VAT%20return"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            Get Filing Help
            <ArrowRight size={14} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </div>
    </>
  )
}
