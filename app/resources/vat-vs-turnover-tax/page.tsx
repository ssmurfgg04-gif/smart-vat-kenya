import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info, Scales } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"

export const metadata: Metadata = {
  title: "Turnover Tax vs VAT in Kenya | Which Tax Regime Applies?",
  description:
    "Confused about Turnover Tax vs VAT in Kenya? Compare KRA turnover tax (1-3% on gross sales, under KES 8M turnover) vs VAT (16% on value-add, over KES 5M, with proposed rise to KES 8M). Decision guide for Kenyan SMEs.",
  keywords: [
    "turnover tax vs vat kenya",
    "turnover tax kenya",
    "vat kenya",
    "kra turnover tax 2026",
    "turnover tax rate kenya",
    "vat threshold kenya",
    "which tax regime kenya",
    "kenya SME tax guide",
    "turnover tax registration kenya",
    "vat registration kenya 2026",
  ],
  alternates: {
    canonical: "https://smartvatkenya.co.ke/resources/vat-vs-turnover-tax",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources" },
    { "@type": "ListItem", position: 3, name: "Turnover Tax vs VAT in Kenya", item: "https://smartvatkenya.co.ke/resources/vat-vs-turnover-tax" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Turnover Tax vs VAT in Kenya: Which One Applies to Your Business?",
  description:
    "Confused about Turnover Tax vs VAT in Kenya? Compare KRA turnover tax (1-3% on gross sales, under KES 8M turnover) vs VAT (16% on value-add, over KES 5M, with proposed rise to KES 8M). Decision guide for Kenyan SMEs.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-25",
  dateModified: "2026-07-25",
  url: "https://smartvatkenya.co.ke/resources/vat-vs-turnover-tax",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/vat-vs-turnover-tax",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between Turnover Tax and VAT in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Turnover Tax (ToT) is a simplified 1-3% tax on gross sales for businesses with annual turnover under KES 8 million. VAT is a 16% consumption tax — currently mandatory once turnover exceeds KES 5 million (the Finance Act 2025 proposed raising this to KES 8 million, but this has not yet taken effect). Unlike ToT, VAT allows you to claim input VAT on business purchases and requires monthly eTIMS filings.",
      },
    },
    {
      "@type": "Question",
      name: "At what turnover threshold must I register for VAT in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under current KRA rules, VAT registration is mandatory once your annual taxable turnover exceeds KES 5 million. The Finance Act 2025 proposed raising this threshold to KES 8 million, but this has not yet taken effect. You may also voluntarily register for VAT even if your turnover is below the threshold, which can be beneficial if you supply goods to VAT-registered businesses that need to claim input VAT on your invoices.",
      },
    },
    {
      "@type": "Question",
      name: "Can a Turnover Tax payer voluntarily switch to VAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A business registered for Turnover Tax may voluntarily register for VAT at any time under the Voluntary VAT Registration provisions. This is commonly done when the business starts supplying VAT-registered customers who need VAT invoices to claim input VAT. Once you switch to VAT, you remain a VAT-registered taxpayer and cannot revert to Turnover Tax for at least 24 months.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need eTIMS if I pay Turnover Tax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Turnover Tax payers are not legally required to use eTIMS for invoicing, but KRA strongly recommends it. Using eTIMS even under ToT helps build a clean compliance record, makes it easier to transition to VAT later, and reduces the risk of an audit. That said, you must still file monthly Turnover Tax returns through iTax.",
      },
    },
    {
      "@type": "Question",
      name: "Can I claim input VAT if I am on Turnover Tax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Businesses registered for Turnover Tax cannot claim input VAT on their purchases. The 1-3% tax is applied on gross sales with no deduction for input costs. This is a key disadvantage of ToT compared to VAT, where claiming input VAT on business expenses can significantly reduce your overall tax liability.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know which tax regime applies to my Kenyan business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The primary factor is your annual turnover. If your turnover is under KES 8 million, Turnover Tax is the default regime. VAT registration is mandatory once turnover exceeds KES 5 million (the Finance Act 2025 proposed raising this to KES 8 million, but this has not yet taken effect). Secondary factors include whether your customers need VAT invoices, your business expense levels, and your industry. A business with high expenses and B2B customers often benefits more from VAT even below the threshold.",
      },
    },
  ],
}

const toc = [
  { id: "comparison", label: "Quick Comparison: Turnover Tax vs VAT" },
  { id: "what-is-tot", label: "What is Turnover Tax in Kenya?" },
  { id: "what-is-vat", label: "What is VAT in Kenya?" },
  { id: "key-differences", label: "Key Differences Between Turnover Tax and VAT" },
  { id: "decision", label: "Which Tax Regime Should Your Business Choose?" },
  { id: "switching", label: "Can You Switch Between Turnover Tax and VAT?" },
  { id: "how-we-help", label: "How Smart VAT Kenya Helps with Both Regimes" },
  { id: "faq", label: "Frequently Asked Questions" },
]

export default function VatVsTurnoverTaxPage() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Header */}
      <div className="bg-canvas-dark px-6 lg:px-10 py-14">
        <div className="max-w-3xl mx-auto">
          <Link href="/resources" className="inline-flex items-center gap-1.5 text-canvas/50 hover:text-canvas text-sm mb-6 transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> Back to Knowledge Base
          </Link>
          <div className="flex flex-wrap gap-2 mb-5">
            {["Turnover Tax", "VAT", "KRA", "SME Guide", "2026"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            Turnover Tax vs VAT in Kenya: Which One Applies to Your Business?
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; KRA-registered VAT agents &mdash; Updated July 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Quick Answer / BLUF */}
        <div className="border-l-[3px] border-brand pl-5 mb-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Quick Answer</p>
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            Kenya has <strong className="text-ink">two main tax regimes</strong> for business income: <strong className="text-ink">Turnover Tax (ToT)</strong> at 1&ndash;3% of gross sales for SMEs with annual turnover under KES 8 million, and <strong className="text-ink">VAT</strong> at 16% on value-added for businesses over KES 5 million (the Finance Act 2025 proposed raising this to KES 8 million, but this has not yet taken effect). Your annual turnover is the deciding factor. If you sell mostly to other businesses or have significant expenses, VAT can actually be more favourable even below the threshold.
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

          {/* Section 1 — Quick Comparison Table */}
          <section id="comparison" aria-labelledby="comparison-h">
            <h2 id="comparison-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Quick Comparison: Turnover Tax vs VAT
            </h2>
            <p className="text-[0.9rem] text-ink-soft leading-relaxed mb-6">
              Here is a side-by-side comparison of Kenya&apos;s two main tax regimes. Use this table as a quick reference, then read the detailed breakdown below.
            </p>
            <div className="border border-hairline rounded-lg overflow-hidden">
              <table className="w-full text-[0.83rem]">
                <thead>
                  <tr className="border-b border-hairline bg-canvas-alt">
                    <th className="text-left p-3.5 font-semibold text-ink w-[30%]">Feature</th>
                    <th className="text-left p-3.5 font-semibold text-ink w-[35%]">Turnover Tax</th>
                    <th className="text-left p-3.5 font-semibold text-ink w-[35%]">VAT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hairline">
                  {[
                    { feat: "Rate", tot: "1&ndash;3% of gross sales", vat: "16% of taxable value" },
                    { feat: "Tax Base", tot: "Gross sales (no deductions)", vat: "Value-added (output minus input)" },
                    { feat: "Annual Threshold", tot: "Under KES 8 million", vat: "Over KES 5 million*" },
                    { feat: "Input VAT Claims", tot: "Not allowed", vat: "Claimable on business purchases" },
                    { feat: "eTIMS Requirement", tot: "Recommended but not mandatory", vat: "Mandatory" },
                    { feat: "Filing Frequency", tot: "Monthly (iTax)", vat: "Monthly (iTax), due 20th" },
                    { feat: "Best For", tot: "Small retailers, service providers, sole traders", vat: "B2B suppliers, manufacturers, importers" },
                    { feat: "Voluntary Registration", tot: "Not applicable", vat: "Available anytime" },
                  ].map(({ feat, tot, vat }) => (
                    <tr key={feat}>
                      <td className="p-3.5 font-medium text-ink">{feat}</td>
                      <td className="p-3.5 text-ink-muted" dangerouslySetInnerHTML={{ __html: tot }} />
                      <td className="p-3.5 text-ink-muted" dangerouslySetInnerHTML={{ __html: vat }} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2 — What is Turnover Tax */}
          <section id="what-is-tot" aria-labelledby="what-is-tot-h">
            <h2 id="what-is-tot-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What is Turnover Tax in Kenya?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Turnover Tax (ToT) is a simplified tax regime introduced by KRA to make compliance easier for small and micro businesses. It applies to resident businesses with an annual turnover of <strong className="text-ink">KES 8 million or less</strong>. Instead of calculating profit-based income tax and VAT separately, ToT taxes your <strong className="text-ink">gross sales</strong> at a flat rate.
              </p>
              <p>
                The current Turnover Tax rate in Kenya is <strong className="text-ink">1% on gross sales</strong>, reduced significantly from the original 3%. This reduction was part of the Finance Act changes aimed at lowering the tax burden on SMEs. The tax is calculated on total sales before deducting any expenses &mdash; meaning you pay 1% on every shilling you earn, regardless of your costs.
              </p>
              <p>
                ToT is filed <strong className="text-ink">monthly</strong> through iTax using the simplified return form. Unlike VAT, there is no requirement to issue eTIMS invoices (though KRA recommends it), and you do not need to track input tax. For a small shop, salon, or consultancy earning under KES 8M per year, ToT is the default and most straightforward option.
              </p>
              <p>
                However, the simplicity comes with a trade-off. Since ToT is charged on gross sales with no deductions, businesses with <strong className="text-ink">high operating expenses</strong> and <strong className="text-ink">thin margins</strong> may end up paying proportionally more than they would under the standard VAT system, where input VAT on purchases can be reclaimed.
              </p>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Key takeaway:</strong> ToT is ideal for small traders, service providers, and sole proprietors whose customers are mostly individual consumers. It is simple, predictable, and requires minimal bookkeeping. You pay 1% of whatever comes in &mdash; no complex calculations, no input tax tracking.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 — What is VAT */}
          <section id="what-is-vat" aria-labelledby="what-is-vat-h">
            <h2 id="what-is-vat-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What is VAT in Kenya?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Value Added Tax (VAT) is a <strong className="text-ink">consumption tax</strong> levied on the supply of taxable goods and services in Kenya. The standard rate is <strong className="text-ink">16%</strong>, set under the Value Added Tax Act (Cap. 476). Unlike Turnover Tax, VAT is applied to the <strong className="text-ink">value added</strong> at each stage of production and distribution &mdash; not on total sales.
              </p>
              <p>
                VAT registration is <strong className="text-ink">mandatory</strong> once your annual taxable turnover exceeds <strong className="text-ink">KES 5 million</strong> (the Finance Act 2025 proposed raising this to KES 8 million, but this has not yet taken effect). You may also register voluntarily if you are below the threshold but want to claim input VAT or issue VAT-compliant invoices for your B2B customers.
              </p>
              <p>
                Once registered, you must charge 16% VAT on your sales (output VAT), issue eTIMS-compliant tax invoices, and file monthly VAT returns on iTax by the <strong className="text-ink">20th of the following month</strong>. You can simultaneously claim credit for the VAT you paid on your business purchases (input VAT), with the difference remitted to KRA.
              </p>
              <p>
                VAT is more <strong className="text-ink">administratively demanding</strong> than ToT. You need proper accounting records, eTIMS integration, regular reconciliations, and timely return filing. Late filing attracts penalties of 5% of the tax due plus 1% interest per month. Non-compliance can trigger KRA audits and business disruption through compliance checks.
              </p>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Key takeaway:</strong> VAT favours businesses with significant input costs and B2B customers who can claim your invoices. While the compliance burden is higher, the ability to offset input VAT means your effective tax rate may be well below 16% &mdash; sometimes near zero if your margins are tight.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 — Key Differences Deep Dive */}
          <section id="key-differences" aria-labelledby="key-differences-h">
            <h2 id="key-differences-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Key Differences Between Turnover Tax and VAT
            </h2>
            <p className="text-[0.9rem] text-ink-soft leading-relaxed mb-6">
              Beyond the rate and threshold, these two regimes work fundamentally differently. Here is what you need to understand before choosing.
            </p>
            <div className="space-y-6">
              {/* Tax Rate */}
              <div className="border border-hairline rounded-lg p-5">
                <p className="font-display text-[1rem] font-semibold text-ink mb-2">1. Tax Rate &amp; Base</p>
                <p className="text-[0.85rem] text-ink-muted leading-relaxed mb-3">
                  Turnover Tax applies <strong className="text-ink">1&ndash;3% on gross sales</strong> with no deductions for costs. If your expenses are high, the effective burden on your profit is much higher than the headline 1% suggests. VAT applies <strong className="text-ink">16% on value-added</strong> &mdash; meaning only the difference between your sales and purchases is taxed. A business with KES 500,000 in monthly sales and KES 350,000 in expenses effectively pays 16% on KES 150,000 = KES 24,000 under VAT, compared to KES 5,000 under ToT &mdash; but can also claim the input VAT on those KES 350,000 in purchases.
                </p>
              </div>
              {/* Input VAT */}
              <div className="border border-hairline rounded-lg p-5">
                <p className="font-display text-[1rem] font-semibold text-ink mb-2">2. Input VAT Claims</p>
                <p className="text-[0.85rem] text-ink-muted leading-relaxed mb-3">
                  This is the single biggest practical difference. Under <strong className="text-ink">Turnover Tax</strong>, you cannot recover any VAT on the goods and services you buy for your business. The 1% is simply applied to your gross sales, and that is it. Under <strong className="text-ink">VAT</strong>, every VAT-registered supplier you buy from generates input VAT that you can claim back from KRA &mdash; reducing your net tax payable. For businesses with high operating costs (stock, equipment, rent, professional fees), input VAT recovery can make a huge difference.
                </p>
              </div>
              {/* eTIMS */}
              <div className="border border-hairline rounded-lg p-5">
                <p className="font-display text-[1rem] font-semibold text-ink mb-2">3. eTIMS Compliance</p>
                <p className="text-[0.85rem] text-ink-muted leading-relaxed mb-3">
                  The Tax Invoice Management System (eTIMS) is <strong className="text-ink">mandatory</strong> for all VAT-registered businesses. Every sale must be recorded through eTIMS, and customers must receive an eTIMS-compliant invoice or receipt. For <strong className="text-ink">Turnover Tax</strong> payers, eTIMS is not legally required &mdash; but KRA strongly encourages adoption. Many SMEs on ToT voluntarily use eTIMS to build their compliance history and simplify the eventual transition to VAT.
                </p>
              </div>
              {/* Filing */}
              <div className="border border-hairline rounded-lg p-5">
                <p className="font-display text-[1rem] font-semibold text-ink mb-2">4. Filing Frequency &amp; Process</p>
                <p className="text-[0.85rem] text-ink-muted leading-relaxed mb-3">
                  Both ToT and VAT require <strong className="text-ink">monthly filing</strong> through iTax. However, the forms and complexity differ significantly. Turnover Tax uses the simplified monthly return &mdash; you enter your gross sales and the system calculates your 1% tax. VAT requires the full VAT return (form), which includes output VAT, input VAT, zero-rated supplies, exempt supplies, and adjustments. The VAT return is due by the 20th of each month. Late penalties for both regimes follow the standard KRA penalty structure &mdash; 5% of the tax due plus 1% monthly interest.
                </p>
              </div>
              {/* Who it suits */}
              <div className="border border-hairline rounded-lg p-5">
                <p className="font-display text-[1rem] font-semibold text-ink mb-2">5. Who Each Regime Suits Best</p>
                <p className="text-[0.85rem] text-ink-muted leading-relaxed mb-3">
                  <strong className="text-ink">Turnover Tax</strong> suits small retailers, hairdressers and salons, freelance professionals (writers, designers, consultants), small-scale farmers, food kiosks and eateries, and sole traders selling directly to consumers. These businesses typically have low input costs and sell to end consumers who do not need tax invoices. <strong className="text-ink">VAT</strong> suits manufacturers and importers, wholesalers and distributors, B2B service providers (IT, logistics, marketing), construction contractors, and businesses with high operating expenses where input VAT recovery significantly reduces the net tax burden.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 — Decision Framework */}
          <section id="decision" aria-labelledby="decision-h">
            <h2 id="decision-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Which Tax Regime Should Your Business Choose?
            </h2>
            <p className="text-[0.9rem] text-ink-soft leading-relaxed mb-6">
              Answer these four questions to determine whether Turnover Tax or VAT is right for your business.
            </p>
            <div className="space-y-5">
              {[
                {
                  q: "What is your annual turnover?",
                  a: "Under KES 8 million? ToT is your default. Over KES 5 million? VAT registration is mandatory (proposed raise to KES 8 million not yet effective). At exactly the threshold or expecting to cross soon? Register for VAT proactively to avoid last-minute compliance issues.",
                },
                {
                  q: "Do you sell to VAT-registered businesses?",
                  a: "If your customers are other businesses that need VAT invoices to claim input VAT, you are effectively forced onto VAT &mdash; even if your turnover is under the threshold. They will prefer suppliers who can issue proper eTIMS VAT invoices. Voluntary VAT registration is the answer.",
                },
                {
                  q: "Do you have significant business expenses?",
                  a: "If your expenses are high relative to your revenue (stock purchases, equipment, rent, professional fees, utilities), VAT allows you to claim input VAT on every purchase. This can reduce your net tax to far below 16% of your revenue. Under ToT, you pay 1% on every shilling with no such credit.",
                },
                {
                  q: "Are you in retail, services, or manufacturing?",
                  a: "Retailers selling to consumers often prefer ToT for its simplicity. Service providers depend on their client type &mdash; B2B services need VAT, B2C services can manage with ToT. Manufacturers and importers almost always benefit from VAT because they deal in large, high-value purchases where input VAT recovery is substantial.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                  <p className="font-display text-[0.95rem] font-semibold text-ink mb-2 flex items-center gap-2">
                    <CheckCircle size={16} weight="fill" className="text-brand shrink-0" aria-hidden="true" />
                    {q}
                  </p>
                  <p className="text-[0.85rem] text-ink-muted leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
            <div className="border border-brand/20 bg-brand-muted rounded-lg p-5 mt-6">
              <p className="font-semibold text-ink text-[0.88rem] mb-2">Quick Rule of Thumb</p>
              <ul className="space-y-2 text-[0.84rem] text-ink-soft">
                {[
                  "Turnover under KES 8M, B2C, low expenses &rarr; Turnover Tax is your simplest option",
                  "Turnover under KES 8M, B2B, high expenses &rarr; Consider voluntary VAT registration",
                  "Turnover over KES 5M &rarr; VAT registration is mandatory (proposed rise to KES 8M not yet effective). Get registered now.",
                  "Not sure? Consult a KRA-registered tax agent &mdash; making the wrong choice can cost you thousands.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5" dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>
          </section>

          {/* Section 6 — Switching */}
          <section id="switching" aria-labelledby="switching-h">
            <h2 id="switching-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Can You Switch Between Turnover Tax and VAT?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Yes, you can switch &mdash; but the rules differ depending on the direction.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="border border-hairline rounded-lg p-4">
                  <p className="font-display text-[0.95rem] font-semibold text-ink mb-2">ToT &rarr; VAT (Moving Up)</p>
                  <ul className="space-y-1.5 text-[0.83rem] text-ink-muted">
                    {[
                      "Mandatory when you cross the KES 5M threshold (proposed KES 8M not yet effective)",
                      "Must register within 30 days of crossing",
                      "Voluntary registration also permitted",
                      "Once on VAT, minimum 24 months before you can exit",
                      "You must start issuing eTIMS VAT invoices",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle size={13} weight="fill" className="text-green-600 shrink-0 mt-1" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-hairline rounded-lg p-4">
                  <p className="font-display text-[0.95rem] font-semibold text-ink mb-2">VAT &rarr; ToT (Moving Down)</p>
                  <ul className="space-y-1.5 text-[0.83rem] text-ink-muted">
                    {[
                      "Generally not possible for at least 24 months",
                      "Can apply for deregistration if turnover drops below threshold",
                      "Must be approved by KRA commissioner",
                      "Undergo a final VAT audit upon deregistration",
                      "Reverting to ToT requires fresh registration",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Warning size={13} weight="fill" className="text-[#b07a00] shrink-0 mt-1" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-[0.9rem] text-ink-soft leading-relaxed">
                Switching between regimes is not a decision to take lightly. If you voluntarily register for VAT and later want to deregister, KRA requires a full compliance audit and may impose restrictions. Always consult a tax professional before making the switch.
              </p>
            </div>
          </section>

          {/* Section 7 — How We Help */}
          <section id="how-we-help" aria-labelledby="how-we-help-h">
            <h2 id="how-we-help-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How Smart VAT Kenya Helps with Both Regimes
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Whether your business is on Turnover Tax or VAT, Smart VAT Kenya provides end-to-end compliance support. Our KRA-registered agents handle the paperwork so you can focus on running your business.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="border border-hairline rounded-lg p-4">
                  <p className="font-display text-[0.95rem] font-semibold text-ink mb-2">Turnover Tax Services</p>
                  <ul className="space-y-1.5 text-[0.83rem] text-ink-muted">
                    {[
                      "ToT registration on iTax",
                      "Monthly ToT return filing &mdash; KES 1,500/month",
                      "Sales record bookkeeping",
                      "eTIMS integration setup (recommended)",
                      "KRA audit support and representation",
                      "Filing calendar management &amp; reminders",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle size={13} weight="fill" className="text-green-600 shrink-0 mt-1" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-hairline rounded-lg p-4">
                  <p className="font-display text-[0.95rem] font-semibold text-ink mb-2">VAT Services</p>
                  <ul className="space-y-1.5 text-[0.83rem] text-ink-muted">
                    {[
                      "VAT registration &mdash; KES 5,000 (one-time)",
                      "Monthly VAT return filing &mdash; KES 3,500/month",
                      "eTIMS invoice setup and management",
                      "Input VAT reconciliation and optimisation",
                      "Voluntary registration advisory",
                      "KRA audit defence and compliance health checks",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle size={13} weight="fill" className="text-green-600 shrink-0 mt-1" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-[0.9rem] text-ink-soft leading-relaxed">
                We also help businesses <strong className="text-ink">transition from ToT to VAT</strong> when they cross the VAT threshold (currently KES 5 million, with proposed rise to KES 8 million) &mdash; handling the registration, eTIMS setup, and first few returns to ensure a smooth switch without penalty risk.
              </p>
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

          {/* CTA / Conversion */}
          <div className="border-2 border-brand/30 rounded-xl p-6 sm:p-8 bg-brand-muted">
            <div className="flex items-center gap-3 mb-4">
              <Scales size={24} weight="fill" className="text-brand shrink-0" aria-hidden="true" />
              <p className="font-display text-[1.3rem] font-semibold text-ink">Not Sure Which Regime Applies?</p>
            </div>
            <p className="text-[0.88rem] text-ink-soft leading-relaxed mb-5">
              Making the wrong choice between Turnover Tax and VAT can cost your business thousands in penalties or missed savings. Our KRA-registered agents at Smart VAT Kenya will review your business, recommend the optimal regime, and handle all compliance &mdash; from registration to monthly filing. WhatsApp us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/tools"
                className="inline-flex items-center justify-center gap-2 bg-brand text-canvas font-semibold text-sm px-6 py-3 rounded-md hover:bg-brand-hover transition-colors"
              >
                Explore Our Tax Tools
                <ArrowRight size={14} weight="bold" aria-hidden="true" />
              </Link>

              <a
                href="https://wa.me/254721725958?text=I%20need%20help%20choosing%20between%20Turnover%20Tax%20and%20VAT%20for%20my%20Kenya%20business"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-brand text-ink font-semibold text-sm px-6 py-3 rounded-md hover:bg-brand/10 transition-colors"
              >
                Ask Us on WhatsApp
                <ArrowRight size={14} weight="bold" aria-hidden="true" />
              </a>
            </div>
          </div>

        </article>

        {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="vat-vs-turnover-tax" />
        </div>

        {/* CTA */}
        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">Need help with VAT?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[40ch] mx-auto leading-relaxed">
            We handle your KRA VAT registration and monthly filing so you never miss a deadline.
          </p>
          <a
            href="https://wa.me/254721725958?text=Hi%2C%20I%20need%20help%20with%20VAT"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            Register for KES 5,000
            <svg viewBox="0 0 12 12" className="w-3 h-3 fill-current" aria-hidden="true"><path d="M6 0L4.59 1.41 9.17 6l-4.58 4.59L6 12l6-6z"/></svg>
          </a>
          <div className="mt-4">
            <Link href="/resources" className="text-[0.82rem] text-ink-muted hover:text-brand transition-colors underline underline-offset-2">
              ← All Resources
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
