import { ArrowLeft, ArrowRight, Info } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "iCMS Export Guide", item: "https://smartvatkenya.co.ke/resources/icms-export-guide/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "iCMS Export Declaration Guide 2026: VAT Implications for Kenyan Exporters",
  description:
    "Since May 2026, export data validated in iCMS is automatically prefilled into zero-rated supply declarations on VAT returns. Covers Single Customs Territory exports, EPZ, SEZ, and how iCMS integration affects your VAT filing.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-28",
  dateModified: "2026-07-28",
  url: "https://smartvatkenya.co.ke/resources/icms-export-guide",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/icms-export-guide",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the iCMS export declaration change in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Effective May 2026, export data validated through the Integrated Customs Management System (iCMS) is now automatically prefilled into the zero-rated supply declaration section of your VAT return. This applies to exports to the Single Customs Territory (Uganda, Tanzania, Rwanda, Burundi, South Sudan), other countries, Export Processing Zones (EPZs), and Special Economic Zones (SEZs). The change means KRA already has your export data before you file — your VAT return must match the iCMS records.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to manually enter export values on my VAT return?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Since May 2026, export values validated in iCMS are automatically prefilled on your VAT return. You should verify the prefilled amounts against your records before submitting. If you spot discrepancies, reconcile with your customs documentation before filing — KRA cross-references the return against iCMS data.",
      },
    },
    {
      "@type": "Question",
      name: "Does this apply to all types of exports?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The automatic prefilling covers exports to the Single Customs Territory (EAC partner states), exports to other countries outside the EAC, supplies to Export Processing Zones (EPZs), and supplies to Special Economic Zones (SEZs). Any zero-rated export that passes through iCMS validation is included.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my iCMS data does not match my VAT return?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KRA's system cross-references your filed VAT return against iCMS export data. Discrepancies trigger automatic reviews and may lead to audits. You should reconcile your export records with iCMS data before each VAT return filing, especially for the first few months after the change takes effect.",
      },
    },
    {
      "@type": "Question",
      name: "How does this affect input VAT claims on export-related purchases?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Exporters making zero-rated supplies can claim input VAT on related purchases. The iCMS integration does not change this — you still claim input VAT on the standard sections of the return. However, the automatic prefilling of exports means KRA has a clearer picture of your zero-rated supply ratio, which may trigger questions if your input VAT claims appear disproportionately high relative to declared exports.",
      },
    },
    {
      "@type": "Question",
      name: "I am a small exporter. Is this relevant to me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you export goods or services and are VAT-registered, yes. The iCMS integration affects every VAT-registered exporter. Even if you export infrequently, the auto-prefilled data on your return must match iCMS records. The change primarily affects goods exporters who use customs clearance — pure service exporters may not see iCMS data on their returns unless they also export goods.",
      },
    },
  ],
}

export default function IcmsExportGuide() {
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
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand mb-3">Export Compliance</p>
            <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-semibold text-ink tracking-tight leading-tight mb-3 text-balance">
              iCMS Export Guide: VAT Implications for Kenyan Exporters (2026)
            </h1>
            <p className="text-[0.9rem] text-ink-muted leading-relaxed">
              <time dateTime="2026-07-28">28 July 2026</time> &middot; Updated for Finance Act 2026
            </p>
          </header>

          <div className="prose prose-gray max-w-none">
            <p>
              Since <strong>May 2026</strong>, export data validated through the <strong>Integrated Customs Management System (iCMS)</strong> is automatically prefilled into the zero-rated supply declaration section of your VAT return. This is a significant compliance change for VAT-registered exporters in Kenya.
            </p>
            <p>
              The change covers exports to the <strong>Single Customs Territory</strong> (Uganda, Tanzania, Rwanda, Burundi, South Sudan), exports to other countries, supplies to <strong>Export Processing Zones (EPZs)</strong>, and supplies to <strong>Special Economic Zones (SEZs)</strong>. Any zero-rated supply that passes through iCMS customs clearance is now linked directly to your VAT return.
            </p>

            <h2>What This Means for Your VAT Filing</h2>
            <ul>
              <li><strong>Auto-prefilled data:</strong> Export values from iCMS appear automatically on your VAT return. You do not need to manually enter them in the zero-rated supply section</li>
              <li><strong>Data matching:</strong> KRA cross-references the prefilled amounts against your internal records. If your filed return does not match iCMS data, the discrepancy is flagged</li>
              <li><strong>Verification responsibility:</strong> You are still responsible for the accuracy of your return. Verify the prefilled amounts against your own export documentation before submitting</li>
              <li><strong>Reconciliation:</strong> If you spot discrepancies between iCMS data and your records, reconcile with customs documentation before filing. Unresolved discrepancies trigger audits</li>
            </ul>

            <h2>Who Is Affected</h2>
            <p>This change affects <strong>VAT-registered exporters</strong> whose exports pass through iCMS customs clearance. Pure service exporters who do not use customs clearance may not see iCMS data on their returns — the integration is primarily designed for goods exports. Service exporters claiming zero-rating based on documentation (rather than customs clearance) should continue filing as before.</p>

            <h2>Recommended Actions</h2>
            <ol>
              <li><strong>Review your first auto-populated return</strong> carefully — compare the prefilled export values against your own shipping and invoicing records</li>
              <li><strong>Establish a reconciliation process</strong> between your export documentation, iCMS records, and VAT return data before each filing cycle</li>
              <li><strong>Document discrepancies</strong> — if iCMS data differs from your records, identify the root cause (timing differences, data entry errors, classification issues)</li>
              <li><strong>Consult a tax advisor</strong> if you export frequently or operate across multiple customs regimes (SCT, EPZ, general exports)</li>
            </ol>

            <h2>Related Resources</h2>
            <ul>
              <li><a href="/resources/finance-act-vat-changes-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">Finance Act 2026 VAT Changes</a> — All VAT changes including the new mandatory export declaration regime effective 1 September 2026 for importers</li>
              <li><a href="/resources/vat-auto-populated-return/" className="text-brand underline underline-offset-2 hover:text-brand-hover">VAT Auto-Populated Return Guide</a> — How KRA's automated return system works across eTIMS, iCMS, and iTax</li>
              <li><a href="/services/monthly-vat-filing/" className="text-brand underline underline-offset-2 hover:text-brand-hover">Monthly VAT Filing Service (KES 3,500/month)</a> — We handle your return filing including iCMS data reconciliation</li>
            </ul>
          </div>
        </article>

        <div className="mt-12 border-t border-border pt-8">
          <h2 className="font-display text-xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[faqSchema.mainEntity].flat().map((faq, i) => (
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
            Need help reconciling your export data with your VAT return?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/services/monthly-vat-filing/"
              className="inline-flex items-center justify-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
            >
              Monthly VAT Filing — KES 3,500/month
              <svg viewBox="0 0 12 12" className="w-3 h-3 fill-current" aria-hidden="true"><path d="M6 0L4.59 1.41 9.17 6l-4.58 4.59L6 12l6-6z"/></svg>
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <ArticleGrid currentSlug="icms-export-guide" />
        </div>
      </div>
    </>
  )
}
