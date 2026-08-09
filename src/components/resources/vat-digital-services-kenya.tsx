import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "VAT on Digital Services", item: "https://smartvatkenya.co.ke/resources/vat-digital-services-kenya/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "VAT on Digital Services in Kenya 2026 Guide",
  description:
    "How VAT applies to digital services in Kenya: resident vs non-resident rules, registration thresholds, what counts as a digital service, eTIMS requirements, and how the Digital Service Tax interacts with VAT.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-25",
  dateModified: "2026-07-25",
  url: "https://smartvatkenya.co.ke/resources/vat-digital-services-kenya",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/vat-digital-services-kenya",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are digital services subject to VAT in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Digital services supplied in Kenya are subject to VAT at the standard rate of 16%. This includes software as a service (SaaS), streaming, e-learning, online advertising, downloadable content, and marketplace facilitation services. The VAT (Electronic, Internet and Digital Marketplace Supply) Regulations, 2023 govern how VAT applies to these services.",
      },
    },
    {
      "@type": "Question",
      name: "What is the VAT registration threshold for digital services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on whether you are a resident or non-resident supplier. Resident suppliers (Kenyan businesses) must register for VAT when annual taxable turnover exceeds KES 5 million. Non-resident suppliers (foreign businesses) must register regardless of turnover — there is no threshold. The first sale to a Kenyan customer triggers the registration requirement.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between VAT and Digital Service Tax (DST)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VAT is a 16% consumption tax charged to the customer on the value of the supply. Digital Service Tax (DST) is a 1.5% income-based tax on gross transaction value, primarily targeting non-resident digital platforms. VAT is charged to customers and remitted to KRA. DST is paid by the platform itself. A business can be liable for both VAT and DST on the same transaction, but DST does not apply to Kenyan resident businesses already paying income tax.",
      },
    },
    {
      "@type": "Question",
      name: "Do non-resident digital suppliers need to use eTIMS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non-resident suppliers of digital services are exempt from the eTIMS invoicing requirements under the VAT (Electronic, Internet and Digital Marketplace Supply) Regulations. However, they must register for VAT under the simplified regime, charge 16% VAT on B2C and B2B transactions, and file monthly returns. Kenyan customers of non-resident suppliers can claim input VAT if the supplier has declared their KRA PIN in the return.",
      },
    },
    {
      "@type": "Question",
      name: "What digital services are taxable in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taxable digital services include: SaaS (software as a service), streaming services (video, music, podcasts), downloadable software and apps, e-books and digital publications, online courses and e-learning, online advertising services, marketplace facilitation, cloud computing services, domain name registration, subscription-based content platforms, and internet radio or television broadcasting (added by Finance Act 2025).",
      },
    },
    {
      "@type": "Question",
      name: "How does a non-resident company register for VAT in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non-resident digital suppliers register under the simplified VAT regime. The process involves: (1) applying for a KRA PIN through the iTax portal as a non-resident, (2) registering for VAT by selecting the digital marketplace supply category, (3) providing details of the digital services offered and the platform used, (4) appointing a tax representative in Kenya (recommended but not mandatory in all cases). Once registered, you must charge 16% VAT on all B2B and B2C transactions, file monthly VAT returns, and remit the VAT collected by the 20th of each month.",
      },
    },
  ],
}

export default function DigitalServicesPage() {
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
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand mb-3">Guide — Digital Services</p>
            <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.3rem)] font-semibold text-ink tracking-tight leading-tight mb-4 text-balance">
              VAT on Digital Services in Kenya 2026
            </h1>
            <p className="text-[0.9rem] text-ink-muted leading-relaxed max-w-[65ch]">
              If you sell software, streaming, online courses, or any digital service to Kenyan customers — or if you
              are a Kenyan business buying from foreign digital platforms — VAT applies. The rules differ for resident
              and non-resident suppliers. This guide covers everything you need to know.
            </p>
            <div className="flex items-center gap-4 text-[0.75rem] text-ink-muted">
              <time dateTime="2026-07-25">25 July 2026</time>
              <span>Smart VAT Kenya</span>
            </div>
          </header>

          <div className="space-y-10">
            {/* Section 1 — What Counts */}
            <section id="what-counts" aria-labelledby="what-counts-h">
              <h2 id="what-counts-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                What Counts as a Digital Service?
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  KRA defines digital services broadly as services delivered over the internet or an electronic
                  network that are automated and require minimal human intervention. Under the VAT (Electronic,
                  Internet and Digital Marketplace Supply) Regulations, 2023, these include:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Software as a Service (SaaS)",
                    "Streaming (video, music, podcasts)",
                    "Downloadable software and apps",
                    "E-books and digital publications",
                    "Online courses and e-learning",
                    "Online advertising services",
                    "Marketplace facilitation fees",
                    "Cloud computing services",
                    "Domain name registration",
                    "Subscription content platforms",
                    "Internet radio and TV broadcasting*",
                    "Social media platform services",
                  ].map((item) => (
                    <div key={item} className="border border-hairline rounded-lg p-3 text-[0.83rem] text-ink-soft flex items-center gap-2">
                      <CheckCircle size={12} weight="fill" className="text-brand shrink-0" aria-hidden="true" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-ink-muted mt-1">
                  * Internet radio and TV broadcasting added by the Finance Act 2025, effective July 2025.
                </p>
              </div>
            </section>

            {/* Section 2 — Resident vs Non-Resident */}
            <section id="resident-vs-non-resident" aria-labelledby="resident-vs-non-resident-h">
              <h2 id="resident-vs-non-resident-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Resident vs Non-Resident Rules
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="border border-hairline rounded-lg p-5">
                    <p className="font-semibold text-ink text-[0.95rem] mb-3">Resident (Kenyan Business)</p>
                    <ul className="space-y-2 text-[0.83rem]">
                      <li className="flex gap-2">
                        <CheckCircle size={12} weight="fill" className="text-brand shrink-0 mt-1" aria-hidden="true" />
                        <span className="text-ink-soft">Register when turnover exceeds KES 5M</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={12} weight="fill" className="text-brand shrink-0 mt-1" aria-hidden="true" />
                        <span className="text-ink-soft">Charge 16% VAT to all Kenyan customers</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={12} weight="fill" className="text-brand shrink-0 mt-1" aria-hidden="true" />
                        <span className="text-ink-soft">Zero-rate exports of digital services</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={12} weight="fill" className="text-brand shrink-0 mt-1" aria-hidden="true" />
                        <span className="text-ink-soft">Full eTIMS compliance required</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={12} weight="fill" className="text-brand shrink-0 mt-1" aria-hidden="true" />
                        <span className="text-ink-soft">Monthly VAT returns by the 20th</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={12} weight="fill" className="text-brand shrink-0 mt-1" aria-hidden="true" />
                        <span className="text-ink-soft">Can claim input VAT on business costs</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border border-brand/25 bg-brand-muted rounded-lg p-5">
                    <p className="font-semibold text-ink text-[0.95rem] mb-3">Non-Resident (Foreign Business)</p>
                    <ul className="space-y-2 text-[0.83rem]">
                      <li className="flex gap-2">
                        <CheckCircle size={12} weight="fill" className="text-brand shrink-0 mt-1" aria-hidden="true" />
                        <span className="text-ink-soft">Register from the first sale — no threshold</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={12} weight="fill" className="text-brand shrink-0 mt-1" aria-hidden="true" />
                        <span className="text-ink-soft">Charge 16% VAT on B2B and B2C sales</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={12} weight="fill" className="text-brand shrink-0 mt-1" aria-hidden="true" />
                        <span className="text-ink-soft">Simplified registration regime</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={12} weight="fill" className="text-brand shrink-0 mt-1" aria-hidden="true" />
                        <span className="text-ink-soft">Exempt from eTIMS invoicing</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={12} weight="fill" className="text-brand shrink-0 mt-1" aria-hidden="true" />
                        <span className="text-ink-soft">Monthly VAT returns (simplified)</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={12} weight="fill" className="text-brand shrink-0 mt-1" aria-hidden="true" />
                        <span className="text-ink-soft">May also be liable for DST at 1.5%</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 — VAT vs DST */}
            <section id="vat-vs-dst" aria-labelledby="vat-vs-dst-h">
              <h2 id="vat-vs-dst-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                VAT vs Digital Service Tax (DST)
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  Many digital businesses confuse VAT with the Digital Service Tax. They are different taxes with
                  different purposes:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-[0.83rem] border-collapse">
                    <thead>
                      <tr className="border-b border-hairline">
                        <th className="text-left font-semibold text-ink py-3 pr-4">Feature</th>
                        <th className="text-left font-semibold text-ink py-3 pr-4">VAT (16%)</th>
                        <th className="text-left font-semibold text-ink py-3">DST (1.5%)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-hairline">
                      {[
                        { feature: "Type", vat: "Consumption tax", dst: "Income tax" },
                        { feature: "Charged on", vat: "Value of supply", dst: "Gross transaction value" },
                        { feature: "Paid by", vat: "Customer (collected by business)", dst: "Platform / service provider" },
                        { feature: "Applies to residents", vat: "Yes", dst: "No (already paying income tax)" },
                        { feature: "Applies to non-residents", vat: "Yes", dst: "Yes" },
                        { feature: "Filing frequency", vat: "Monthly", dst: "Monthly" },
                        { feature: "Deductible input VAT", vat: "Yes", dst: "No" },
                      ].map((row) => (
                        <tr key={row.feature}>
                          <td className="py-3 pr-4 text-ink font-medium">{row.feature}</td>
                          <td className="py-3 pr-4 text-ink-soft">{row.vat}</td>
                          <td className="py-3 text-ink-soft">{row.dst}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 4 — Compliance for Residents */}
            <section id="compliance-residents" aria-labelledby="compliance-residents-h">
              <h2 id="compliance-residents-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Compliance for Kenyan Digital Businesses
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  If you run a Kenyan business selling digital services, here is what compliance looks like.
                  For fintech-specific rules covering digital payments, merchant acquiring, and settlement services,
                  see our{" "}
                  <a href="/resources/vat-fintech-digital-payments-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">VAT for fintech and digital payments guide</a>.
                </p>
                <ol className="space-y-3 list-decimal list-inside">
                  <li className="text-ink-soft">
                    <strong className="text-ink">Register for VAT</strong> once your turnover exceeds KES 5 million,
                    or voluntarily if you want to claim input VAT on your costs. See our{" "}
                    <a href="/resources/how-to-register-for-vat-in-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">VAT Registration Guide</a>.
                  </li>
                  <li className="text-ink-soft">
                    <strong className="text-ink">Set up eTIMS</strong> for invoicing. Even though you sell digital
                    services, you must issue eTIMS-compliant invoices to your VAT-registered customers. Use eTIMS
                    Lite or API integration if you have a billing system. See our{" "}
                    <a href="/resources/etims-onboarding-guide/" className="text-brand underline underline-offset-2 hover:text-brand-hover">eTIMS Onboarding Guide</a>.
                  </li>
                  <li className="text-ink-soft">
                    <strong className="text-ink">Charge VAT correctly</strong> on all sales to Kenyan customers.
                    If your customer provides a KRA PIN, they are VAT-registered — issue an eTIMS invoice and
                    charge 16% VAT. If they are a consumer without a PIN, charge 16% VAT and declare as B2C.
                  </li>
                  <li className="text-ink-soft">
                    <strong className="text-ink">Zero-rate exports</strong> of digital services to customers outside
                    Kenya. This means you charge 0% VAT but can still claim input VAT on your costs.
                  </li>
                  <li className="text-ink-soft">
                    <strong className="text-ink">File monthly</strong> by the 20th and remit any VAT due.
                  </li>
                </ol>
              </div>
            </section>

            {/* Section 5 — Compliance for Non-Residents */}
            <section id="compliance-non-residents" aria-labelledby="compliance-non-residents-h">
              <h2 id="compliance-non-residents-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Compliance for Non-Resident Digital Suppliers
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  If you are a foreign company selling digital services to Kenyan customers, here is the
                  simplified compliance path:
                </p>
                <div className="space-y-3">
                  {[
                    { step: "1. Register for a KRA PIN as a non-resident", detail: "Go to itax.kra.go.ke and register as a non-resident individual or entity. You will receive a KRA PIN that starts with a specific prefix for non-residents." },
                    { step: "2. Register for VAT under the simplified regime", detail: "Select 'Digital Marketplace Supply' as your VAT category. There is no KES 5 million threshold — you register from the first sale." },
                    { step: "3. Charge 16% VAT on all sales", detail: "On your invoices to Kenyan customers, clearly show 16% VAT. For B2B customers, capture their KRA PIN. For B2C, no PIN is required." },
                    { step: "4. File monthly VAT returns", detail: "File a simplified VAT return by the 20th of each month showing total sales and VAT collected. Remit the VAT through the iTax payment options." },
                    { step: "5. Consider DST obligations", detail: "You may also be liable for Digital Service Tax at 1.5% on gross transaction value from Kenyan customers. This is filed separately." },
                  ].map(({ step, detail }) => (
                    <div key={step} className="border border-hairline rounded-lg p-4">
                      <p className="font-semibold text-ink text-[0.88rem] mb-1">{step}</p>
                      <p className="text-[0.83rem] text-ink-muted leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 6 — Input VAT for Digital Businesses */}
            <section id="input-vat" aria-labelledby="input-vat-h">
              <h2 id="input-vat-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Claiming Input VAT as a Digital Business
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  Kenyan digital businesses can claim input VAT on their business costs, provided they have valid
                  eTIMS invoices. Common input VAT items for digital businesses include:
                </p>
                <ul className="space-y-2">
                  {[
                    "Cloud hosting (AWS, Google Cloud, Azure) — with eTIMS invoice from a Kenyan reseller or the supplier's VAT-registered entity",
                    "Software subscriptions (tools, platforms, APIs) used for business",
                    "Laptops, computers, and office equipment",
                    "Office rent (if the landlord is VAT-registered and issues eTIMS invoices)",
                    "Professional services (legal, accounting, consulting) from VAT-registered providers",
                    "Internet and telecommunications services",
                    "Marketing and advertising services from VAT-registered agencies",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1.5" aria-hidden="true" />
                      <span className="text-ink-soft">{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  For a full guide on input VAT conditions and prohibited claims, see our{" "}
                  <a href="/resources/input-vat-deduction-guide/" className="text-brand underline underline-offset-2 hover:text-brand-hover">Input VAT Deduction Guide</a>.
                </p>
              </div>
            </section>

            {/* FAQ */}
          <FAQSection faqSchema={faqSchema} />
          </div>
        </article>

                {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="vat-digital-services-kenya" />
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
            <a href="/resources/" className="text-[0.82rem] text-ink-muted hover:text-brand transition-colors underline underline-offset-2">
              ← All Resources
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
