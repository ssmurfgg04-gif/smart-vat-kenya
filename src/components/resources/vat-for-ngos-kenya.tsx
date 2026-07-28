import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources" },
    { "@type": "ListItem", position: 3, name: "VAT for NGOs Kenya", item: "https://smartvatkenya.co.ke/resources/vat-for-ngos-kenya" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "VAT for NGOs in Kenya 2026: Exemptions, Compliance, and Common Mistakes",
  description:
    "Complete guide to VAT rules for non-governmental organisations in Kenya. What is exempt, when you must register, how to claim refunds on donated goods, and the compliance traps that catch most NGOs.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-27",
  dateModified: "2026-07-27",
  url: "https://smartvatkenya.co.ke/resources/vat-for-ngos-kenya",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/vat-for-ngos-kenya",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do NGOs have to register for VAT in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if your NGO's annual taxable turnover exceeds KES 5 million. The VAT exemption on certain supplies does not remove the obligation to register. Many NGOs registered as VAT persons must still file monthly returns — even if all their supplies are exempt — to report their exempt status.",
      },
    },
    {
      "@type": "Question",
      name: "Can NGOs claim back VAT on purchases?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only if the NGO is registered for VAT and makes taxable (not exempt) supplies. NGOs that make wholly exempt supplies cannot register for VAT and cannot claim input VAT. However, NGOs can apply for VAT and import duty exemptions on donated goods through KRA's exemption certificate process.",
      },
    },
    {
      "@type": "Question",
      name: "What goods are VAT-exempt for NGOs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Medicines, medical equipment, educational materials, agricultural inputs, and certain food items donated to registered charities can qualify for VAT exemption. The NGO must obtain an exemption certificate from KRA before importing or purchasing these goods. Without the certificate, standard VAT rates apply.",
      },
    },
    {
      "@type": "Question",
      name: "Are donations to NGOs subject to VAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cash donations are not subject to VAT. Donations-in-kind (goods) may qualify for VAT exemption if the NGO holds a valid exemption certificate and the goods fall under the approved categories. Grants from donors are treated as income, not taxable supplies, and do not attract VAT.",
      },
    },
    {
      "@type": "Question",
      name: "What is the penalty for an NGO claiming VAT exemption incorrectly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KRA can impose penalties of up to KES 100,000 per instance plus recovery of the VAT evaded, plus a 50% surcharge on audit adjustments. NGOs found to have misapplied exemptions risk losing their exemption certificate and being placed under enhanced compliance monitoring.",
      },
    },
  ],
}

const toc = [
  { id: "does-your-ngo-need-to-register", label: "Does Your NGO Need to Register for VAT?" },
  { id: "vat-exemptions",                 label: "VAT Exemptions Available to NGOs" },
  { id: "exemption-certificate",          label: "How to Get the KRA Exemption Certificate" },
  { id: "common-mistakes",                label: "Common VAT Mistakes NGOs Make" },
  { id: "faq",                            label: "Frequently Asked Questions" },
]

export default function VATForNGOsPage() {
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
          <a href="/resources" className="inline-flex items-center gap-1.5 text-canvas/50 hover:text-canvas text-sm mb-6 transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> Back to Knowledge Base
          </a>
          <div className="flex flex-wrap gap-2 mb-5">
            {["NGOs", "VAT Exemption", "KRA", "Charities", "2026"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            VAT for NGOs in Kenya 2026: Exemptions, Compliance, and Common Mistakes
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; KRA-registered VAT agents &mdash; Updated July 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">

        <div className="border-l-[3px] border-brand pl-5 mb-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Quick Answer</p>
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            NGOs in Kenya can qualify for VAT exemptions on donated goods (medicines, medical equipment, educational materials, and certain food items) by obtaining a <strong className="text-ink">KRA exemption certificate</strong>. However, if your NGO's annual turnover exceeds <strong className="text-ink">KES 5 million</strong>, you must still register for VAT and file monthly returns — even if all your supplies are exempt. Cash donations and grants are not subject to VAT. The most common mistake NGOs make is assuming VAT exemption is automatic; it requires advance approval from KRA for each qualifying transaction.
          </p>
        </div>

        <nav aria-label="Table of contents" className="mb-12">
          <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
            <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-muted mb-4">In This Guide</p>
            <ol className="space-y-2" role="list">
              {toc.map((item, i) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="flex items-center gap-3 text-[0.85rem] text-ink-muted hover:text-brand transition-colors">
                    <span className="font-mono text-[0.63rem] text-ink-muted/70 w-5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <article className="space-y-14">

          <section id="does-your-ngo-need-to-register" aria-labelledby="register-h">
            <h2 id="register-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Does Your NGO Need to Register for VAT?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Many NGOs assume they are exempt from VAT registration because their work is charitable. The Kenya VAT Act treats NGOs like any other business for registration purposes: if your annual taxable turnover exceeds <strong className="text-ink">KES 5 million</strong>, you must register.
              </p>
              <p>
                The key distinction: <strong className="text-ink">VAT registration</strong> and <strong className="text-ink">VAT exemption on supplies</strong> are separate things. Your NGO may be required to register for VAT even if all the services it provides are exempt from VAT. KRA needs you registered so you can report your exempt turnover on monthly returns.
              </p>
              <div className="border border-hairline rounded-lg overflow-hidden">
                <table className="w-full text-[0.83rem]">
                  <thead>
                    <tr className="border-b border-hairline bg-canvas-alt">
                      <th className="text-left p-3.5 font-semibold text-ink">Scenario</th>
                      <th className="text-left p-3.5 font-semibold text-ink">Must Register?</th>
                      <th className="text-left p-3.5 font-semibold text-ink">Can Claim Input VAT?</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hairline">
                    <tr>
                      <td className="p-3.5 text-ink-muted">NGO with exempt supplies only, turnover &lt; KES 5M</td>
                      <td className="p-3.5 text-ink font-medium">No</td>
                      <td className="p-3.5 text-ink-muted">No</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 text-ink-muted">NGO with exempt supplies only, turnover &gt; KES 5M</td>
                      <td className="p-3.5 text-ink font-medium">Yes</td>
                      <td className="p-3.5 text-ink-muted">No (exempt supplies)</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 text-ink-muted">NGO with taxable supplies (e.g. consultancy fees)</td>
                      <td className="p-3.5 text-ink font-medium">Yes, at KES 5M</td>
                      <td className="p-3.5 text-ink-muted">Yes, on taxable supplies</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 text-ink-muted">NGO registered and holding exemption certificate</td>
                      <td className="p-3.5 text-ink font-medium">Yes (if over threshold)</td>
                      <td className="p-3.5 text-ink-muted">Only on taxable purchases</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section id="vat-exemptions" aria-labelledby="exemptions-h">
            <h2 id="exemptions-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              VAT Exemptions Available to NGOs
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Under the <strong className="text-ink">First Schedule (Part B)</strong> of the VAT Act 2013, certain goods imported or purchased by registered charities are exempt from VAT. These include:
              </p>
              <ul className="space-y-3">
                {[
                  "Medicines, vaccines, and pharmaceutical products",
                  "Medical equipment, hospital furniture, and laboratory supplies",
                  "Educational materials, books, and school equipment",
                  "Agricultural inputs — seeds, fertilisers, pesticides, and farm machinery",
                  "Food items for distribution in feeding programmes",
                  "Vehicles designed or adapted for use by persons with disabilities",
                  "Goods imported using funds from a recognised donor agency",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.88rem] text-ink-soft">
                    <CheckCircle size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                The exemption is <strong className="text-ink">not automatic</strong>. Your NGO must obtain an exemption certificate from KRA before the transaction. Goods imported or purchased without prior approval are subject to the standard 16% VAT.
              </p>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Grant-funded imports:</strong> If your NGO imports goods using funds from USAID, DFID, EU, UN agencies, or other recognised donors, you may qualify for a VAT and import duty exemption. The exemption applies to the goods, not the grant itself.
                </p>
              </div>
            </div>
          </section>

          <section id="exemption-certificate" aria-labelledby="cert-h">
            <h2 id="cert-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How to Get the KRA Exemption Certificate
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The process for obtaining a VAT exemption certificate for an NGO involves submitting an application to KRA with supporting documentation:
              </p>
              <ul className="space-y-3">
                {[
                  "Certificate of registration as an NGO from the NGO Coordination Board",
                  "KRA PIN certificate for the organisation",
                  "Detailed list of goods to be imported or purchased with quantities and estimated value",
                  "Proof of funding (donor agreement, grant letter, or funding commitment)",
                  "Letter from the NGO explaining how the goods will be used for charitable purposes",
                  "Any relevant project agreements or contracts with implementing partners",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.88rem] text-ink-soft">
                    <CheckCircle size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                KRA takes <strong className="text-ink">14 to 30 working days</strong> to process exemption certificate applications. Apply well before the planned import or purchase date. The certificate is typically valid for a single transaction or a specific project period.
              </p>
              <div className="border border-canvas-warm bg-[#fffbf0] dark:bg-[#2a1f00] dark:border-[#4a3800] rounded-lg p-4 flex items-start gap-3">
                <Warning size={17} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#7a5500] dark:text-[#ffcc44] text-[0.85rem] mb-1">
                    Retroactive exemption is not possible
                  </p>
                  <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                    If your NGO imports goods and pays VAT without an exemption certificate, you cannot claim a refund later. The exemption must be approved <strong>before</strong> the transaction. Plan ahead.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="common-mistakes" aria-labelledby="mistakes-h">
            <h2 id="mistakes-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Common VAT Mistakes NGOs Make
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <ul className="space-y-4">
                {[
                  { m: "Assuming exemption is automatic", detail: "Many NGOs import goods and assume their charitable status exempts them from VAT. KRA requires a valid exemption certificate for every qualifying transaction. Without it, VAT is due." },
                  { m: "Ignoring the VAT registration threshold", detail: "If your NGO has grant-funded activities exceeding KES 5 million in annual turnover, you must register for VAT. Failure attracts penalties of KES 100,000 or more." },
                  { m: "Filing nil returns incorrectly", detail: "NGOs that are VAT-registered but make only exempt supplies must still file monthly nil returns. Missing a return triggers a KES 10,000 late filing penalty." },
                  { m: "Claiming input VAT on exempt supplies", detail: "VAT-registered NGOs cannot claim input VAT on purchases used to make exempt supplies. This is a common audit finding that results in VAT assessments plus penalties." },
                  { m: "Letting the exemption certificate expire", detail: "Exemption certificates have a limited validity period. NGOs that continue importing without renewing their certificate are charged VAT at the border." },
                ].map(({ m, detail }) => (
                  <li key={m} className="border border-hairline rounded-lg p-4">
                    <p className="font-semibold text-ink text-[0.88rem] mb-1">{m}</p>
                    <p className="text-[0.83rem] text-ink-muted leading-relaxed">{detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

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
        </article>

        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="vat-for-ngos-kenya" />
        </div>

        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">Need help with NGO VAT compliance?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[40ch] mx-auto leading-relaxed">
            We handle VAT registration, exemption certificate applications, and monthly filing for NGOs in Kenya.
          </p>
          <a
            href="https://wa.me/254721725958?text=Hi%2C%20I%20need%20help%20with%20NGO%20VAT%20in%20Kenya"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            Chat With Our NGO Tax Team
            <svg viewBox="0 0 12 12" className="w-3 h-3 fill-current" aria-hidden="true"><path d="M6 0L4.59 1.41 9.17 6l-4.58 4.59L6 12l6-6z"/></svg>
          </a>
          <div className="mt-4">
            <a href="/resources" className="text-[0.82rem] text-ink-muted hover:text-brand transition-colors underline underline-offset-2">
              ← All Resources
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
