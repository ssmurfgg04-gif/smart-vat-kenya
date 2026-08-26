import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info, Building, House } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const breadcrumbSchema = {
  "@context": "https://schema.org" as const as const as const as const as const,
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "VAT for Construction & Real Estate", item: "https://smartvatkenya.co.ke/resources/vat-for-construction-real-estate-kenya/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org" as const as const as const as const as const,
  "@type": "Article",
  headline: "VAT for Construction & Real Estate in Kenya 2026: Court Rulings, Contractor Rules, and Mixed-Use Apportionment",
  description:
    "Complete guide to VAT treatment of construction services and real estate transactions in Kenya. Covers the Court of Appeal 2025 ruling on commercial property, withholding VAT obligations, mixed-use development apportionment, and subcontractor registration requirements.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-27",
  dateModified: "2026-07-27",
  url: "https://smartvatkenya.co.ke/resources/vat-for-construction-real-estate-kenya",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/vat-for-construction-real-estate-kenya",
}

const faqSchema = {
  "@context": "https://schema.org" as const as const as const as const as const,
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is VAT charged on the sale of commercial property in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Following the Court of Appeal 2025 ruling in KRA v David Mwangi Ndegwa, VAT at 16% applies to the sale of commercial property. Residential premises remain exempt from VAT. The ruling confirmed that the supply of a commercial building is a taxable supply under the VAT Act, and developers must charge VAT on the sale price.",
      },
    },
    {
      "@type": "Question",
      name: "Is land subject to VAT in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The sale of land (bare land without buildings) is exempt from VAT under the First Schedule to the VAT Act 2013. However, if you sell land with a commercial building on it, the building portion is subject to 16% VAT. Developers should apportion the sale price between the land (exempt) and the building (taxable).",
      },
    },
    {
      "@type": "Question",
      name: "What is the withholding VAT rate for construction services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Withholding VAT on construction services is 2% for resident contractors and 6% for non-resident contractors. The person receiving the construction service must withhold the VAT and remit it to KRA within 5 working days. The contractor can claim the withheld amount as input VAT when filing their monthly return.",
      },
    },
    {
      "@type": "Question",
      name: "Do subcontractors need to register for VAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if a subcontractor's annual turnover exceeds KES 5 million. Subcontractors must be VAT-registered and charge 16% VAT to main contractors. Main contractors should verify that their subcontractors are VAT-registered before engaging them, as input VAT on invoices from unregistered subcontractors may be disallowed on audit.",
      },
    },
    {
      "@type": "Question",
      name: "How is VAT handled for mixed-use developments with residential and commercial units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mixed-use developments require apportionment between the exempt residential portion and the taxable commercial portion. The developer must calculate input VAT on construction costs and apportion it based on the ratio of commercial to total floor area. Output VAT is charged only on the sale or rental of commercial units. The apportionment method should be consistently applied and disclosed to KRA.",
      },
    },
  ],
}

const toc = [
  { id: "court-of-appeal-2025", label: "Court of Appeal 2025: Commercial Property Ruling" },
  { id: "land-vs-buildings",    label: "Land vs Buildings: What Is Taxable?" },
  { id: "withholding-vat",      label: "Withholding VAT on Construction Services" },
  { id: "subcontractors",       label: "Subcontractor VAT Obligations" },
  { id: "mixed-use",            label: "Mixed-Use Developments: Apportionment Rules" },
  { id: "faq",                  label: "Frequently Asked Questions" },
]

export default function VATForConstructionPage() {
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
            {["Construction", "Real Estate", "Court Ruling", "Contractors", "2026"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            VAT for Construction &amp; Real Estate in Kenya 2026: Court Rulings, Contractor Rules, and Mixed-Use Apportionment
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; KRA-registered VAT agents &mdash; Updated July 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">

        <div className="border-l-[3px] border-brand pl-5 mb-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Quick Answer</p>
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            The construction and real estate sector in Kenya has three distinct VAT regimes. <strong className="text-ink">Commercial property sales</strong> attract 16% VAT following the Court of Appeal 2025 ruling. <strong className="text-ink">Land sales</strong> and <strong className="text-ink">residential property</strong> remain exempt. <strong className="text-ink">Construction services</strong> are subject to withholding VAT at 2% (resident) or 6% (non-resident). Mixed-use developments require careful apportionment between taxable and exempt portions. Subcontractors crossing the KES 5M threshold must register for VAT and charge 16%.
          </p>
        </div>

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

          <section id="court-of-appeal-2025" aria-labelledby="coa-h">
            <h2 id="coa-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Court of Appeal 2025: VAT on Commercial Property Sales
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The landmark <strong className="text-ink">Court of Appeal 2025 ruling in KRA v David Mwangi Ndegwa</strong> settled a long-standing area of uncertainty: VAT at 16% applies to the sale of commercial property. The court held that the supply of a commercial building constitutes a taxable supply under the VAT Act 2013, and developers must charge VAT on the sale price of commercial premises.
              </p>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink text-[0.85rem] mb-1">Key Holding from the Ruling</p>
                  <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                    The court distinguished between commercial property (taxable) and residential premises (exempt). The determining factor is the <em>use</em> of the property, not its physical characteristics. A building constructed for commercial purposes - regardless of whether it could also be used for residential purposes - is subject to VAT.
                  </p>
                </div>
              </div>
              <p>
                For developers and real estate investors, this means:
              </p>
              <ul className="space-y-3">
                {[
                  "If you sell a commercial unit (office, shop, showroom, warehouse), charge 16% VAT on the sale price.",
                  "If you sell a residential unit (apartment, house for dwelling purposes), no VAT is charged.",
                  "If you are a VAT-registered developer, you can claim input VAT on construction costs attributable to commercial units.",
                  "The ruling applies retroactively - developers with ongoing or prior transactions should review their VAT position.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.88rem] text-ink-soft">
                    <CheckCircle size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="border border-canvas-warm bg-[#fffbf0] dark:bg-[#2a1f00] dark:border-[#4a3800] rounded-lg p-4 flex items-start gap-3">
                <Warning size={17} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#7a5500] dark:text-[#ffcc44] text-[0.85rem] mb-1">
                    Developers should seek professional advice on past transactions
                  </p>
                  <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                    If you completed commercial property sales before the 2025 ruling and did not charge VAT, you may have exposure to a KRA assessment. Contact a VAT specialist to review your position and consider a voluntary disclosure if necessary. The penalty for undeclared VAT can be up to 100% of the tax due plus interest.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="land-vs-buildings" aria-labelledby="land-h">
            <h2 id="land-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Land vs Buildings: What Is Taxable?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The distinction between land and buildings is critical for VAT purposes. The VAT Act 2013 treats them differently, and getting it wrong can lead to significant tax exposure.
              </p>

              <div className="border border-hairline rounded-lg overflow-hidden">
                <table className="w-full text-[0.83rem]">
                  <thead>
                    <tr className="border-b border-hairline bg-canvas-alt">
                      <th className="text-left p-3.5 font-semibold text-ink">Transaction Type</th>
                      <th className="text-left p-3.5 font-semibold text-ink">VAT Treatment</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hairline">
                    <tr>
                      <td className="p-3.5 text-ink-muted">Sale of bare land (no buildings)</td>
                      <td className="p-3.5 text-ink font-medium">Exempt &mdash; no VAT</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 text-ink-muted">Sale of land with residential building</td>
                      <td className="p-3.5 text-ink font-medium">Exempt &mdash; no VAT (residential use)</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 text-ink-muted">Sale of land with commercial building</td>
                      <td className="p-3.5 text-ink font-medium">16% VAT on building portion only</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 text-ink-muted">Lease of commercial property</td>
                      <td className="p-3.5 text-ink font-medium">16% VAT if landlord is VAT-registered</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 text-ink-muted">Lease of residential property</td>
                      <td className="p-3.5 text-ink font-medium">Exempt &mdash; no VAT</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                When a property includes both land and a commercial building (e.g. a building on a plot being sold together), the developer must apportion the sale price between the land (exempt) and the building (taxable). KRA expects a reasonable apportionment method - typically based on the ratio of construction cost to land value, or a professional valuation.
              </p>
              <p>
                The same logic applies to input VAT. A developer constructing commercial buildings can claim input VAT on materials and services used for the building, but not on land acquisition costs (which are exempt).
              </p>
            </div>
          </section>

          <section id="withholding-vat" aria-labelledby="withholding-h">
            <h2 id="withholding-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Withholding VAT on Construction Services
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Kenya operates a <strong className="text-ink">withholding VAT</strong> system for construction services. If you engage a contractor for construction work, you may be required to withhold VAT from their invoice and remit it directly to KRA, rather than paying the full amount to the contractor.
              </p>

              <div className="border border-hairline rounded-lg overflow-hidden">
                <table className="w-full text-[0.83rem]">
                  <thead>
                    <tr className="border-b border-hairline bg-canvas-alt">
                      <th className="text-left p-3.5 font-semibold text-ink">Contractor Type</th>
                      <th className="text-left p-3.5 font-semibold text-ink">Withholding Rate</th>
                      <th className="text-left p-3.5 font-semibold text-ink">Remittance Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hairline">
                    <tr>
                      <td className="p-3.5 text-ink-muted">Resident contractor (Kenyan company or individual)</td>
                      <td className="p-3.5 text-ink font-medium">2%</td>
                      <td className="p-3.5 text-ink-muted">Within 5 working days of payment</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 text-ink-muted">Non-resident contractor (foreign company)</td>
                      <td className="p-3.5 text-ink font-medium">6%</td>
                      <td className="p-3.5 text-ink-muted">Within 5 working days of payment</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-3 mt-4">
                <p className="font-semibold text-ink text-[0.9rem]">How it works:</p>
                {[
                  "The contractor issues an invoice including 16% VAT (e.g. KES 116,000 = KES 100,000 + KES 16,000 VAT).",
                  "The person receiving the service (the client) pays the contractor only the net amount less withholding VAT.",
                  "The client remits the withheld VAT to KRA via M-PESA Paybill 572572 or bank transfer within 5 working days.",
                  "The contractor claims the withheld amount as input VAT in their monthly VAT return.",
                  "The client can claim the full input VAT (including the withheld portion) on their own VAT return.",
                ].map((step) => (
                  <div key={step} className="flex items-start gap-3 text-[0.88rem] text-ink-soft">
                    <span className="font-mono text-[0.65rem] text-brand font-semibold shrink-0 mt-0.5 w-4">{String([...step.split("")].length).padStart(2, "0")}</span>
                    {step}
                  </div>
                ))}
              </div>

              <div className="border border-canvas-warm bg-[#fffbf0] dark:bg-[#2a1f00] dark:border-[#4a3800] rounded-lg p-4 flex items-start gap-3">
                <Warning size={17} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#7a5500] dark:text-[#ffcc44] text-[0.85rem] mb-1">
                    Failure to withhold VAT is a common audit finding
                  </p>
                  <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                    If you engage a construction contractor and fail to withhold VAT, KRA can recover the withholding VAT from you plus a 50% penalty. This applies even if the contractor was not registered for VAT at the time. Always verify your contractor's VAT status before making payments.
                  </p>
                </div>
              </div>

              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Scope of &ldquo;construction services&rdquo;:</strong> Withholding VAT applies to building, civil engineering, electrical, plumbing, painting, roofing, and related services. It also covers the supply of labour plus materials where the contractor provides both. Pure supply of materials without installation may not be subject to withholding VAT &mdash; consult a tax professional for borderline cases.
                </p>
              </div>
            </div>
          </section>

          <section id="subcontractors" aria-labelledby="subs-h">
            <h2 id="subs-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Subcontractor VAT Obligations
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Subcontractors in the construction sector are treated as independent suppliers for VAT purposes. This means they have their own VAT registration and filing obligations, separate from the main contractor.
              </p>

              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Building size={18} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink text-[0.88rem] mb-1">Subcontractors must register for VAT if turnover exceeds KES 5M</p>
                  <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                    Subcontractors whose annual turnover from all projects exceeds KES 5 million must register for VAT, charge 16% VAT on invoices to main contractors, file monthly VAT returns, and issue eTIMS-compliant invoices. Below the threshold, they do not charge VAT but cannot claim input VAT either.
                  </p>
                </div>
              </div>

              <p className="font-semibold text-ink text-[0.9rem]">Main contractors should verify subcontractor VAT status:</p>
              <ul className="space-y-3">
                {[
                  "Request the subcontractor's KRA VAT registration certificate before engaging them.",
                  "Verify the subcontractor's VAT PIN on iTax to confirm it is active and VAT-registered.",
                  "If the subcontractor is not VAT-registered, no VAT is charged, but the main contractor cannot claim input VAT on that subcontractor's invoices.",
                  "If a subcontractor is VAT-registered, the main contractor must issue an eTIMS-compliant invoice showing 16% VAT.",
                  "KRA audits in the construction sector frequently target the main contractor-subcontractor chain, looking for missing VAT charges and unregistered subcontractors.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.88rem] text-ink-soft">
                    <CheckCircle size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Practical risk:</strong> If a main contractor engages a non-registered subcontractor whose turnover actually exceeds KES 5M, and KRA discovers this on audit, both parties may face penalties. The subcontractor for failing to register, and the main contractor for claiming input VAT on an invalid invoice or failing to withhold.
                </p>
              </div>
            </div>
          </section>

          <section id="mixed-use" aria-labelledby="mixed-h">
            <h2 id="mixed-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Mixed-Use Developments: Apportionment Rules
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Many modern developments combine residential and commercial units - ground-floor shops with apartments above, or office blocks with residential wings. These <strong className="text-ink">mixed-use developments</strong> require careful VAT apportionment because the two use types have different VAT treatments.
              </p>

              <div className="border border-hairline rounded-lg overflow-hidden">
                <table className="w-full text-[0.83rem]">
                  <thead>
                    <tr className="border-b border-hairline bg-canvas-alt">
                      <th className="text-left p-3.5 font-semibold text-ink">Component</th>
                      <th className="text-left p-3.5 font-semibold text-ink">Output VAT</th>
                      <th className="text-left p-3.5 font-semibold text-ink">Input VAT Recovery</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hairline">
                    <tr>
                      <td className="p-3.5 text-ink-muted">Residential units (sale or rent)</td>
                      <td className="p-3.5 text-ink font-medium">Exempt &mdash; no VAT</td>
                      <td className="p-3.5 text-ink-muted">No input VAT recovery on costs attributable to residential portion</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 text-ink-muted">Commercial units (sale or rent)</td>
                      <td className="p-3.5 text-ink font-medium">16% VAT</td>
                      <td className="p-3.5 text-ink-muted">Full input VAT recovery on costs attributable to commercial portion</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 text-ink-muted">Common areas (lobby, corridors, parking, gardens)</td>
                      <td className="p-3.5 text-ink font-medium">N/A</td>
                      <td className="p-3.5 text-ink-muted">Apportioned based on commercial/residential floor area ratio</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="font-semibold text-ink text-[0.9rem]">Apportionment methodology:</p>
              <ul className="space-y-3">
                {[
                  "Use floor area (square metres) as the primary apportionment basis. This is the most commonly accepted method by KRA.",
                  "Calculate: Commercial floor area / Total floor area = Apportionment percentage.",
                  "Apply the percentage to shared costs (common areas, project management, professional fees) to determine the deductible input VAT portion.",
                  "Directly attributable costs (e.g. materials used only in commercial units) are fully deductible.",
                  "Directly attributable costs for residential units are not deductible at all.",
                  "Maintain detailed records of the apportionment calculation and be prepared to justify it to KRA on audit.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.88rem] text-ink-soft">
                    <CheckCircle size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="border border-canvas-warm bg-[#fffbf0] dark:bg-[#2a1f00] dark:border-[#4a3800] rounded-lg p-4 flex items-start gap-3">
                <Warning size={17} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#7a5500] dark:text-[#ffcc44] text-[0.85rem] mb-1">
                    Capital Goods Adjustment (CGA) applies to construction
                  </p>
                  <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                    Buildings are classified as capital goods under the VAT Act. Input VAT on construction costs is claimed over a 5-year period through the Capital Goods Adjustment mechanism. In the year of completion, you claim one-fifth of the input VAT, and you adjust annually for 5 years based on actual use. If a commercial unit is later converted to residential use, a clawback of input VAT may apply.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <FAQSection faqSchema={faqSchema} />
        </article>

        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">Related Guides</p>
          <ArticleGrid currentSlug="vat-for-construction-real-estate-kenya" />
        </div>

        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">Need help with construction or real estate VAT?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[40ch] mx-auto leading-relaxed">
            We advise developers, contractors, and property investors on VAT compliance, withholding obligations, and mixed-use apportionment.
          </p>
          <a
            href="https://wa.me/254717344440?text=Hi%2C%20I%20need%20help%20with%20VAT%20for%20construction%20or%20real%20estate"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            Chat With Our Tax Team
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
