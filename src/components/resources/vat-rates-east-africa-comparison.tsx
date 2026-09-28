import { ArrowLeft, ArrowRight, CheckCircle, Info, Scales, DownloadSimple } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList" as const,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "VAT Rates in East Africa: EAC Comparison", item: "https://smartvatkenya.co.ke/resources/vat-rates-east-africa-comparison/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article" as const,
  headline: "VAT Rates in East Africa 2026: The EAC Comparison, Country by Country",
  description:
    "Kenya's standard VAT rate is 16% — the lowest in the East African Community, versus 18% in Uganda, Tanzania, Rwanda and Burundi. Country-by-country table with revenue authorities, e-invoicing systems and cross-border rules for Kenyan traders.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-09-28",
  dateModified: "2026-09-28",
  url: "https://smartvatkenya.co.ke/resources/vat-rates-east-africa-comparison",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/vat-rates-east-africa-comparison",
}

const faqSchema = {
  "@context": "https://schema.org" as const,
  "@type": "FAQPage" as const,
  mainEntity: [
    {
      "@type": "Question" as const,
      name: "What is the VAT rate in Kenya compared to Tanzania and Uganda?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Kenya charges 16% standard VAT; Tanzania and Uganda both charge 18%. The two-point gap has been stable since Kenya restored its rate to 16% on 1 January 2021 after the 2020 COVID relief cut to 14%. Because VAT is destination-based, though, your own rate matters more than your supplier's: goods imported into Kenya are taxed at Kenya's 16% regardless of origin.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Which EAC country has the lowest VAT rate?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Kenya, at 16%, is the lowest standard rate among the EAC's founding members. Uganda, Tanzania, Rwanda and Burundi all charge 18%. Of the newer members, the DRC runs a 16% VAT, and Somalia does not operate a comprehensive VAT system. Kenya also applies one of the region's broadest zero-rated and exempt schedules, which widens the effective gap.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Is VAT the same in all East African countries?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "No. The EAC harmonises customs through the EAC Customs Management Act 2004 — common external tariff, single customs territory — but VAT rates and VAT law remain national. Each member state's revenue authority administers its own VAT: KRA in Kenya (16%), URA in Uganda (18%), TRA in Tanzania (18%), RRA in Rwanda (18%) and OBR in Burundi (18%).",
      },
    },
    {
      "@type": "Question" as const,
      name: "Do I charge Kenyan VAT when I export goods to Uganda or Tanzania?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "No. Exports from Kenya are zero-rated at 0% — you charge no VAT on the invoice, and you can reclaim the input VAT on the costs of producing those exports, provided you hold the export documentation KRA requires. VAT is applied at the destination: your Ugandan customer's side of the transaction carries Ugandan VAT at 18% on their imports.",
      },
    },
    {
      "@type": "Question" as const,
      name: "How much VAT do I pay when importing goods into Kenya?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Import VAT in Kenya is charged at the standard 16% rate, calculated on the customs value of the goods plus any import duty and applicable levies, and paid (or deferred under an approved arrangement) at the point of entry. The origin country's VAT rate — 18% in Uganda or Tanzania, for example — is irrelevant to your Kenyan import VAT bill.",
      },
    },
  ],
}

const toc = [
  { id: "comparison-table", label: "The EAC VAT comparison table (2026)" },
  { id: "lowest-rate", label: "Which EAC country has the lowest VAT rate?" },
  { id: "country-notes", label: "VAT and e-invoicing in each member state" },
  { id: "destination-principle", label: "Whose VAT applies when you trade across EAC borders?" },
  { id: "kenya-traders", label: "What this means for Kenyan traders" },
  { id: "faq", label: "Frequently Asked Questions" },
]

export default function VatRatesEastAfricaComparison() {
  return (
    <>
      <script id="article-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script id="faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Header */}
      <div className="bg-canvas-dark px-6 lg:px-12 py-14">
        <div className="max-w-3xl mx-auto">
          <a href="/resources/" className="inline-flex items-center gap-1.5 text-canvas/50 hover:text-canvas text-sm mb-6 transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> Back to Knowledge Base
          </a>
          <div className="flex flex-wrap gap-2 mb-5">
            {["EAC", "VAT", "Comparison", "Cross-border", "2026"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            VAT Rates in East Africa (2026): The EAC Comparison, Country by Country
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; KRA-registered VAT agents &mdash; Updated September 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Quick Answer / BLUF */}
        <div className="border-l-[3px] border-brand pl-5 mb-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Quick Answer</p>
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            <strong className="text-ink">Kenya has the lowest standard VAT rate in the East African Community: 16%</strong>, versus <strong className="text-ink">18% in Uganda, Tanzania, Rwanda and Burundi</strong>. But rates alone don&rsquo;t decide your tax bill &mdash; VAT is destination-based, so goods you import into Kenya bear Kenya&rsquo;s 16% no matter where they came from, and exports leaving Kenya go out at 0% with input VAT reclaimable. Compare <em>landed cost</em>, not headline rates.
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
                    <span className="font-mono text-[0.63rem] text-ink-muted/85 w-5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <article className="space-y-12">

          {/* Section 1 — comparison table */}
          <section id="comparison-table" aria-labelledby="comparison-table-h">
            <h2 id="comparison-table-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              The EAC VAT comparison table (2026)
            </h2>
            <p className="text-[0.9rem] text-ink-soft leading-relaxed mb-6">
              Standard VAT rates across the East African Community as of 2026, with each member state&rsquo;s revenue authority and electronic invoicing system. Compiled from member-state revenue authority publications &mdash; the machine-readable version is open data (CC&nbsp;BY&nbsp;4.0).
            </p>
            <div className="border border-hairline rounded-lg overflow-hidden">
              <table className="w-full text-[0.83rem]">
                <thead>
                  <tr className="border-b border-hairline bg-canvas-alt">
                    <th className="text-left p-3.5 font-semibold text-ink">Country</th>
                    <th className="text-left p-3.5 font-semibold text-ink w-[15%]">Standard VAT</th>
                    <th className="text-left p-3.5 font-semibold text-ink w-[22%]">Revenue authority</th>
                    <th className="text-left p-3.5 font-semibold text-ink w-[28%]">E-invoicing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hairline">
                  {[
                    { c: "Kenya", r: "16%", a: "KRA", e: "eTIMS (mandatory); CETIS pre-clearance planned 2027–28", hot: true },
                    { c: "Uganda", r: "18%", a: "URA", e: "EFRIS (since 2021)" },
                    { c: "Tanzania", r: "18%", a: "TRA", e: "EFD receipts mandated" },
                    { c: "Rwanda", r: "18%", a: "RRA", e: "EBM (e-Billing Machine)" },
                    { c: "Burundi", r: "18%", a: "OBR", e: "Not yet comprehensive" },
                  ].map(({ c, r, a, e, hot }) => (
                    <tr key={c} className={hot ? "bg-brand-muted/40" : ""}>
                      <td className="p-3.5 font-medium text-ink">{c}</td>
                      <td className="p-3.5">
                        <strong className={hot ? "text-brand" : "text-ink"}>{r}</strong>
                        {hot && <span className="block font-mono text-[0.58rem] uppercase tracking-widest text-brand mt-0.5">lowest in EAC</span>}
                      </td>
                      <td className="p-3.5 text-ink-muted">{a}</td>
                      <td className="p-3.5 text-ink-muted">{e}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3 mt-4">
              <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                <strong className="text-ink">Newer EAC members:</strong> the DRC (joined 2022) runs a 16% VAT administered by the DGI since 2012 &mdash; coincidentally matching Kenya&rsquo;s rate. Somalia (joined 2024) does not operate a comprehensive VAT; its taxation relies mainly on customs duties and limited sales taxes. Rates shown are the standard rates on most goods and services; reduced rates and exemptions differ per country.
              </p>
            </div>
          </section>

          {/* Section 2 — lowest rate */}
          <section id="lowest-rate" aria-labelledby="lowest-rate-h">
            <h2 id="lowest-rate-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Which EAC country has the lowest VAT rate?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                <strong className="text-ink">Kenya, at 16%, has the lowest standard VAT rate among the EAC&rsquo;s founding members.</strong> The rate has been set at 16% since the VAT Act 2013 came into force on 2 September 2013, and it has moved only twice since &mdash; both briefly. In April 2020, the Tax Laws (Amendment) Act 2020 cut the standard rate to 14% as COVID-19 relief; the Finance Act 2020 restored it to 16% with effect from 1 January 2021. Separately, petroleum products enjoyed a reduced 8% rate from 2018 until the Finance Act 2023 returned them to the standard 16%.
              </p>
              <p>
                Every other founding member has held steady at 18% &mdash; Uganda, Tanzania, Rwanda and Burundi &mdash; which makes the two-point gap a structural feature of East African tax policy, not a temporary alignment. And the statutory rate understates the difference: Kenya&rsquo;s First Schedule (zero-rated) and Second Schedule (exempt) are among the region&rsquo;s most extensive, so the <em>effective</em> VAT burden on a typical consumption basket diverges further than 16% vs 18% suggests.
              </p>
              <p>
                Kenya&rsquo;s rate has stayed at 16% even as its base widened. The most recent example: the Finance Act 2026 moved payment processing, settlement, merchant acquiring, gateway and aggregation services from the exempt list to the standard 16% rate with effect from 1 July 2026 &mdash; a base expansion, not a rate change. We track every change in the{" "}
                <a href="/data/kenya-vat-rate-timeline-2013-2026.json" className="text-brand underline underline-offset-2">Kenya VAT rate timeline (open data)</a>.
              </p>
            </div>
          </section>

          {/* Section 3 — country notes */}
          <section id="country-notes" aria-labelledby="country-notes-h">
            <h2 id="country-notes-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              VAT and e-invoicing in each member state
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                <strong className="text-ink">Kenya &mdash; 16%, KRA, eTIMS.</strong> Kenya&rsquo;s electronic Tax Invoice Management System is mandatory for VAT-registered businesses, and every invoice is validated in near-real time against KRA&rsquo;s servers. KRA&rsquo;s next generation &mdash; the Comprehensive Electronic Tax Invoicing System (CETIS), in procurement for 2027&ndash;28 &mdash; will validate and sign invoices <em>before</em> they reach the buyer. We&rsquo;ve written a dedicated{" "}
                <a href="/resources/cetis-kenya-2027/" className="text-brand underline underline-offset-2">CETIS Kenya 2027 briefing</a> and a practical{" "}
                <a href="/resources/etims-mandate-guide/" className="text-brand underline underline-offset-2">eTIMS mandate guide</a>.
              </p>
              <p>
                <strong className="text-ink">Uganda &mdash; 18%, URA, EFRIS.</strong> Uganda&rsquo;s Electronic Fiscal Receipting and Invoicing Solution has been live since 2021 and is the region&rsquo;s longest-running real-time e-invoicing system &mdash; including pre-clearance behaviours that foreshadow CETIS. Kenya businesses watching their future should read our{" "}
                <a href="/resources/efris-lessons-pre-clearance/" className="text-brand underline underline-offset-2">lessons from EFRIS</a>: what breaks in SME systems when invoicing shifts to real-time validation.
              </p>
              <p>
                <strong className="text-ink">Tanzania &mdash; 18%, TRA, EFDs.</strong> Tanzania mandates electronic fiscal devices for registered suppliers, a hardware-first approach to fiscalisation. Non-resident digital suppliers face separate registration and invoicing requirements &mdash; a pattern the region shares, each with its own implementation.
              </p>
              <p>
                <strong className="text-ink">Rwanda &mdash; 18%, RRA, EBM.</strong> Rwanda&rsquo;s e-Billing Machine requirement has been in place the longest in the region and is widely credited with narrowing its VAT gap. <strong className="text-ink">Burundi &mdash; 18%, OBR.</strong> Burundi&rsquo;s Office Burundais des Recettes administers an 18% standard rate; fiscalisation is less developed than in the community&rsquo;s larger economies.
              </p>
            </div>
          </section>

          {/* Section 4 — destination principle */}
          <section id="destination-principle" aria-labelledby="destination-principle-h">
            <h2 id="destination-principle-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Whose VAT applies when you trade across EAC borders?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                VAT in the EAC is <strong className="text-ink">destination-based</strong>: the tax belongs to the country where the goods are consumed, not where the seller sits. That single principle answers most cross-border questions. Exports leaving Kenya are <strong className="text-ink">zero-rated at 0%</strong> &mdash; no VAT on the invoice, and the input VAT on your production costs is reclaimable, provided you hold the export documentation KRA requires. Your Ugandan or Tanzanian customer then accounts for their own side&rsquo;s tax on importation.
              </p>
              <p>
                Importing runs the same logic in reverse. Goods entering Kenya bear <strong className="text-ink">Kenyan import VAT at 16%</strong>, computed on the customs value plus any import duty and applicable levies, paid at the point of entry or deferred under an approved arrangement &mdash; regardless of whether the goods came from an 18% country or a 16% one. What the EAC <em>does</em> harmonise is the customs layer: the EAC Customs Management Act 2004 runs a common external tariff and, progressively, a single customs territory, so duty treatment is regional &mdash; while VAT treatment stays national.
              </p>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <CheckCircle size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Practical rule:</strong> the origin country&rsquo;s VAT rate is almost never part of your cost calculation. What matters is the destination rate, the duty under the common external tariff, and whether your paperwork preserves the zero-rating on your exports.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 — for Kenyan traders */}
          <section id="kenya-traders" aria-labelledby="kenya-traders-h">
            <h2 id="kenya-traders-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What this means for Kenyan traders
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Three implications follow from the regional picture. <strong className="text-ink">First, on pricing:</strong> a Kenyan exporter into an 18% market competes with the rate gap working against them on the buyer&rsquo;s side, while a Kenyan importer sourcing regionally pays the same 16% import VAT they would on any other import &mdash; the &ldquo;cheaper VAT&rdquo; of a neighbouring country never transfers. <strong className="text-ink">Second, on compliance:</strong> operating in multiple EAC states means multiple fiscalisation regimes &mdash; eTIMS in Kenya, EFRIS in Uganda, EBM in Rwanda &mdash; and invoicing systems that must be designed for the strictest of them.
              </p>
              <p>
                <strong className="text-ink">Third, on planning:</strong> the zero-rating of exports is only as good as the documentation behind it. Missing or defective export evidence is one of the most common reasons KRA denies the input VAT claim on genuinely exported goods, turning a 0% supply into a 16% cost. If you sell across EAC borders and want that paperwork airtight &mdash; or you&rsquo;re weighing{" "}
                <a href="/resources/do-i-need-to-register-for-vat-kenya/" className="text-brand underline underline-offset-2">whether VAT registration is even required for your situation</a> &mdash; that&rsquo;s exactly the work we do every month.
              </p>
              <div className="border border-brand/25 rounded-lg p-5 bg-brand-muted/40 flex items-start gap-3 mt-6">
                <DownloadSimple size={18} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.85rem] text-ink-soft leading-relaxed">
                  <strong className="text-ink">Use this comparison in your own work:</strong> the table above is published as{" "}
                  <a href="/data/eac-vat-standard-rates-2026.json" className="text-brand underline underline-offset-2">open data (JSON, CC BY 4.0)</a> &mdash; free to reuse with attribution to SmartVAT Kenya. More datasets, citation formats and worked scenarios live in our{" "}
                  <a href="/statistics/" className="text-brand underline underline-offset-2">Kenya tax statistics hub</a>.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection faqSchema={faqSchema} />

        </article>

        {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="vat-rates-east-africa-comparison" />
        </div>

        {/* CTA */}
        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">Trading across EAC borders?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[40ch] mx-auto leading-relaxed">
            We register Kenyan businesses for VAT, file monthly returns by the deadline, and make sure export paperwork holds up when KRA reviews the input VAT claim.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/tools/vat-calculator/"
              className="inline-flex items-center justify-center gap-2 border-2 border-brand text-ink font-semibold text-sm px-6 py-3 rounded-md hover:bg-brand/10 transition-colors"
            >
              Try the VAT Calculator
              <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
            <a
              href="mailto:info@smartvatkenya.co.ke?subject=I%20need%20help%20with%20cross-border%20EAC%20VAT"
              className="inline-flex items-center justify-center gap-2 border-2 border-brand text-ink font-semibold text-sm px-6 py-3 rounded-md hover:bg-brand/10 transition-colors"
            >
              Ask Us by Email
              <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
          </div>
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
