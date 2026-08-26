import { User,  ArrowLeft, ArrowRight, Warning, CheckCircle, Info } from "@phosphor-icons/react/dist/ssr"

import { DEFAULT_AUTHOR, LAST_VERIFIED, personSchema } from "@/src/lib/authors"
import { NewsletterSignup } from "@/components/newsletter-signup"

import { ArticleGrid } from "@/lib/resources"

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "VAT on Labour Outsourcing and Staff Costs in Kenya 2026",
  description:
    "Finance Act 2026 introduced Section 13(5A) of the VAT Act — outsourced employee salaries and statutory deductions are now disbursements not subject to VAT. Only the service fee is taxable at 16%. Guide for HR firms, security companies, EOR providers, and businesses that outsource staff.",
  author: personSchema(),
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-25",
  dateModified: LAST_VERIFIED,
  url: "https://smartvatkenya.co.ke/resources/vat-labour-outsourcing-kenya",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/vat-labour-outsourcing-kenya",
}

const faqs = [
  {
    q: "Is VAT charged on outsourced employee salaries in Kenya?",
    a: "From 1 July 2026, employee salaries and statutory deductions paid through outsourcing providers are deemed disbursements and are not subject to VAT. Only the service fee or management margin charged by the outsourcing provider is taxable at 16%.",
  },
  {
    q: "Does this apply to security company invoices?",
    a: "Yes. Security companies that supply guards to clients can now exclude the guards' salaries, NSSF, SHIF, and other statutory deductions from the VAT calculation. Only the security company's management fee is subject to 16% VAT.",
  },
  {
    q: "Does the Finance Act 2026 change apply retrospectively?",
    a: "No. The change takes effect from 1 July 2026. Any VAT assessments or disputes for periods before July 2026 remain governed by the previous law and the High Court decisions in Techsavana and Stratostaff, which held that the full invoice amount was subject to VAT.",
  },
  {
    q: "Do I need to restructure my outsourcing contracts?",
    a: "Yes. Contracts and service level agreements must clearly distinguish the service fee from salary disbursements. Invoices should itemise employee costs separately from the management fee. Correct contract classification is critical to benefit from the new treatment.",
  },
  {
    q: "Can the client claim input VAT on outsourced staff costs?",
    a: "The client can claim input VAT on the service fee portion (16% VAT charged by the outsourcing provider). The salary disbursement portion has no VAT and therefore no input VAT to claim. This makes outsourcing more cost-effective for clients.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "VAT on Labour Outsourcing Kenya", item: "https://smartvatkenya.co.ke/resources/vat-labour-outsourcing-kenya/" },
  ],
}

export default function VatLabourOutsourcingPage() {
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

        <header className="mb-8">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand mb-3">
            Industry Guide — Outsourcing
          </p>
          <h1 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold text-ink tracking-tight leading-tight mb-4 text-balance">
            VAT on Labour Outsourcing and Staff Costs in Kenya 2026
          </h1>
          <div className="flex items-center gap-4 text-[0.75rem] text-ink-muted">
            <time dateTime="2026-07-25">25 July 2026</time>
            <span>10 min read</span>
            <span>Smart VAT Kenya</span>
          </div>
        </header>

        <div className="space-y-5 text-[0.9rem] text-ink-soft leading-[1.75]">
          <p>
            The <a href="/resources/finance-act-vat-changes-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">Finance Act 2026</a> introduced <strong className="text-ink">Section 13(5A)</strong> into the VAT Act, one of the most welcome changes for Kenya&apos;s outsourcing and staffing industry. From <strong className="text-ink">1 July 2026</strong>, employee costs — salaries, wages, NSSF, SHIF, NITA, housing levy — paid through outsourcing providers are deemed <strong className="text-ink">disbursements</strong> and excluded from the taxable value. Only the service fee or management margin attracts 16% VAT.
          </p>
          <p>
            This guide explains the change, which sectors benefit, how to restructure contracts, and what it means for your <a href="/resources/input-vat-deduction-guide/" className="text-brand underline underline-offset-2 hover:text-brand-hover">input VAT recovery</a>.
          </p>

          <div className="border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800/40 rounded-lg p-4 flex items-start gap-3">
            <Warning size={17} weight="fill" className="text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-ink text-[0.9rem]">This change overrides High Court rulings</p>
              <p className="text-[0.83rem] text-amber-700 dark:text-amber-400 leading-relaxed">
                The High Court in <em>Techsavana Limited v Commissioner of Domestic Taxes</em> (May 2025) and <em>Stratostaff Limited</em> (2026) held that outsourcing firms are the legal employers and VAT applies to the full invoice amount including salaries. Section 13(5A) legislatively overrides these decisions prospectively from 1 July 2026.
              </p>
            </div>
          </div>

          {/* Section 1 — What Changed */}
          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            What Changed Under the Finance Act 2026
          </h2>
          <p>
            Before the Finance Act 2026, Section 13(5) of the VAT Act allowed disbursements to be excluded from the taxable value only if the supplier could satisfy the Commissioner that it was acting as a <strong className="text-ink">principal-agent</strong> and had made a disbursement to a <strong className="text-ink">third party</strong>. The High Court in <em>Techsavana</em> and <em>Stratostaff</em> held that outsourcing firms are the legal employers, not agents — meaning the full invoice (salaries + margin) was subject to VAT at 16%.
          </p>
          <p>
            The Finance Act 2026 introduces <strong className="text-ink">Section 13(5A)</strong>, which provides that where a supplier provides labour, outsourcing, or employee-placement services and incurs employee-related costs, those costs are <strong className="text-ink">deemed to be disbursements</strong> made on behalf of the client. This removes the need to prove a principal-agent relationship — the treatment is automatic by statute.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 mt-4">
            <div className="border border-hairline rounded-lg p-5">
              <p className="font-semibold text-ink text-[0.95rem] mb-3">Before 1 July 2026</p>
              <ul className="space-y-2 text-[0.83rem]">
                <li className="flex gap-2">
                  <span className="text-ink-muted shrink-0">•</span>
                  <span className="text-ink-muted">Full invoice (salaries + margin) subject to 16% VAT</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-ink-muted shrink-0">•</span>
                  <span className="text-ink-muted">Had to prove principal-agent relationship to exclude costs</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-ink-muted shrink-0">•</span>
                  <span className="text-ink-muted">High Court decisions against outsourcing firms</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-ink-muted shrink-0">•</span>
                  <span className="text-ink-muted">VAT on full payroll pass-through was a major cost</span>
                </li>
              </ul>
            </div>
            <div className="border border-brand/25 bg-brand-muted rounded-lg p-5">
              <p className="font-semibold text-ink text-[0.95rem] mb-3">From 1 July 2026</p>
              <ul className="space-y-2 text-[0.83rem]">
                <li className="flex gap-2">
                  <CheckCircle size={12} weight="fill" className="text-brand shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-ink-soft">Only service fee/margin subject to VAT at 16%</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={12} weight="fill" className="text-brand shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-ink-soft">Employee costs deemed disbursements by statute</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={12} weight="fill" className="text-brand shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-ink-soft">No need to prove principal-agent relationship</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={12} weight="fill" className="text-brand shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-ink-soft">Significant cost reduction for outsourced staff</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2 — Employee-Related Costs Defined */}
          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            What Counts as Employee-Related Costs
          </h2>
          <p>
            The Act defines <strong className="text-ink">employee-related costs</strong> to include:
          </p>
          <ul className="space-y-2">
            {[
              "Salaries and wages",
              "NSSF contributions (National Social Security Fund)",
              "SHIF contributions (Social Health Insurance Fund, formerly NHIF)",
              "NITA levy (National Industrial Training Authority)",
              "WIBA premiums (Work Injury Benefits Act)",
              "Housing levy (Affordable Housing Programme)",
              "Any other statutory deductions prescribed by law",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1.5" aria-hidden="true" />
                <span className="text-ink-soft">{item}</span>
              </li>
            ))}
          </ul>

          <div className="border border-blue-200 bg-blue-50 dark:bg-blue-950/20 dark:border-blue-800/40 rounded-lg p-4 flex items-start gap-3">
            <Info size={17} weight="fill" className="text-blue-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-ink text-[0.9rem]">Disbursement vs taxable service</p>
              <p className="text-[0.83rem] text-blue-700 dark:text-blue-400 leading-relaxed">
                Salaries, statutory deductions, and other employee costs passed through at cost — these are disbursements (no VAT). The management fee, service fee, administration fee, recruitment fee, or any margin or mark-up — these are taxable at 16%. The key test: is the charge cost-to-cost, or does it include a profit element?
              </p>
            </div>
          </div>

          {/* Section 3 — Who Benefits */}
          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            Every Sector Affected
          </h2>
          <p>
            The change benefits any business that provides or uses outsourced staff. Here is how each sector is affected:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mt-4">
            {[
              { sector: "Security companies", detail: "Guards' salaries + deductions = disbursements. Only management fee taxed." },
              { sector: "Cleaning services", detail: "Cleaners' wages passed through at cost = no VAT. Service fee only taxable." },
              { sector: "HR outsourcing / EOR providers", detail: "Salary pass-through for employees of record now VAT-free." },
              { sector: "Recruitment agencies", detail: "Placement fee only is taxable; salary pass-through excluded." },
              { sector: "Temp labour / staffing firms", detail: "Temporary worker costs treated as disbursements." },
              { sector: "BPO providers", detail: "Employee costs for outsourced business processes excluded." },
              { sector: "IT staffing / developer outsourcing", detail: "Developer salaries passed through = disbursement. Margin only taxable." },
              { sector: "Hotels using outsourced staff", detail: "Lower VAT cost on housekeeping, security, and event staff." },
              { sector: "Factories with temp labour", detail: "Reduced VAT burden on large temporary workforce costs." },
              { sector: "Office-based businesses", detail: "Outsourced admin, IT support, reception staff costs reduced." },
            ].map(({ sector, detail }) => (
              <div key={sector} className="border border-hairline rounded-lg p-3.5">
                <p className="font-semibold text-ink text-[0.85rem] mb-1">{sector}</p>
                <p className="text-[0.78rem] text-ink-muted leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>

          {/* Section 4 — Comparison Table */}
          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            Before vs After: Worked Example
          </h2>
          <p>
            A security company charges a client KES 500,000 per month for 10 guards. The breakdown: KES 450,000 in salaries and statutory deductions, KES 50,000 management fee.
          </p>
          <div className="overflow-x-auto mt-3">
            <table className="w-full text-[0.83rem] border-collapse">
              <thead>
                <tr className="border-b border-hairline">
                  <th className="text-left font-semibold text-ink py-3 pr-4">Line Item</th>
                  <th className="text-left font-semibold text-ink py-3 pr-4">Before FA 2026</th>
                  <th className="text-left font-semibold text-ink py-3">After FA 2026</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                {[
                  { item: "Salaries (disbursement)", before: "KES 450,000 + 16% VAT = KES 522,000", after: "KES 450,000 — no VAT" },
                  { item: "Management fee (taxable)", before: "KES 50,000 + 16% VAT = KES 58,000", after: "KES 50,000 + 16% VAT = KES 58,000" },
                  { item: "Total invoice", before: "KES 580,000", after: "KES 508,000" },
                  { item: "VAT charged", before: "KES 80,000", after: "KES 8,000" },
                  { item: "Client's VAT saving", before: "—", after: "KES 72,000/month" },
                ].map((row) => (
                  <tr key={row.item}>
                    <td className="py-3 pr-4 text-ink font-medium">{row.item}</td>
                    <td className="py-3 pr-4 text-ink-soft">{row.before}</td>
                    <td className="py-3 text-ink-soft">{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            The client saves KES 72,000 per month in VAT — and the security company&apos;s compliance burden is simplified.
          </p>

          {/* Section 5 — Input VAT */}
          <p>
            If your clients are appointed withholding VAT agents, see our{" "}
            <a href="/resources/withholding-vat-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">withholding VAT guide</a>{" "}
            for how the 2% deduction interacts with outsourced staff invoices.
          </p>
            <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
              Input VAT Implications
            </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[0.83rem] border-collapse">
              <thead>
                <tr className="border-b border-hairline">
                  <th className="text-left font-semibold text-ink py-3 pr-4">Scenario</th>
                  <th className="text-left font-semibold text-ink py-3">Input VAT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                {[
                  { s: "Client receives invoice with VAT on service fee only", iv: "Can claim input VAT on the service fee portion" },
                  { s: "Client receives invoice — salary disbursement has no VAT", iv: "No input VAT to claim on salary portion" },
                  { s: "Outsourcing provider pays salaries, NSSF, SHIF", iv: "Cannot claim input VAT — these are disbursements, not the provider's own costs" },
                  { s: "Outsourcing provider incurs own overheads", iv: "Claims input VAT in the normal way, offset against output VAT on service fee" },
                ].map(({ s, iv }) => (
                  <tr key={s}>
                    <td className="py-3 pr-4 text-ink font-medium">{s}</td>
                    <td className="py-3 text-ink-soft">{iv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 6 — Compliance */}
          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            Compliance Requirements
          </h2>
          <ol className="space-y-3 list-decimal list-inside">
            <li className="text-ink-soft">
              <strong className="text-ink">Review and restructure contracts</strong> — Service Level Agreements must clearly distinguish the service fee from salary disbursements. Vague contracts risk reclassification by KRA.
            </li>
            <li className="text-ink-soft">
              <strong className="text-ink">Update invoicing</strong> — Invoices must itemise employee costs (as disbursements) separately from the service fee. Use <a href="/resources/etims-invoicing-guide/" className="text-brand underline underline-offset-2 hover:text-brand-hover">eTIMS-compliant invoices</a>.
            </li>
            <li className="text-ink-soft">
              <strong className="text-ink">Classify correctly</strong> — Service contracts (e.g., a consultancy delivering a project) remain fully taxable. Only genuine labour outsourcing contracts qualify for the disbursement treatment.
            </li>
            <li className="text-ink-soft">
              <strong className="text-ink">Align accounting treatment</strong> — Salary pass-through should be treated as disbursements, not revenue, in your books.
            </li>
            <li className="text-ink-soft">
              <strong className="text-ink">No retrospective application</strong> — If you have a pre-July 2026 VAT dispute with KRA, it remains governed by the old law and court rulings. Seek professional advice.
            </li>
            <li className="text-ink-soft">
              <strong className="text-ink">File monthly VAT returns</strong> via iTax by the 20th of each following month. See our <a href="/resources/how-to-file-vat-return-on-itax/" className="text-brand underline underline-offset-2 hover:text-brand-hover">filing guide</a>.
            </li>
          </ol>

          {/* Mid-page CTA */}
          <div className="border border-brand/25 bg-brand-muted rounded-lg p-5 mt-8">
            <p className="font-semibold text-ink text-[0.9rem] mb-1">
              Need help restructuring your outsourcing contracts?
            </p>
            <p className="text-[0.83rem] text-ink-muted mb-3">
              Our KRA-registered agents can review your contracts, update your invoicing templates, and ensure you benefit from the new disbursement treatment. From KES 3,500/month for monthly filing support.
            </p>
            <a href="https://wa.me/254717344440?text=I%20need%20help%20with%20VAT%20on%20labour%20outsourcing%20under%20the%20Finance%20Act%202026"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-4 py-2.5 rounded-md hover:bg-brand-hover transition-colors">
              Chat on WhatsApp <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
          </div>

          {/* Section 7 — FAQ */}
          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q}>
                <p className="font-semibold text-ink text-[0.9rem]">{q}</p>
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          {/* Related Resources */}
          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            Related Resources
          </h2>
          <ul className="space-y-2">
            {[
              ["Finance Act 2025 and 2026 VAT Changes in Kenya", "/resources/finance-act-vat-changes-kenya/", "Complete summary of all VAT changes from both Finance Acts"],
              ["How to File VAT Return on iTax", "/resources/how-to-file-vat-return-on-itax/", "Step-by-step guide to filing your monthly VAT return"],
              ["KRA VAT Penalties Reference", "/resources/kra-vat-penalties-reference/", "Complete guide to VAT penalties and waiver process"],
              ["VAT for Startups and Tech Businesses", "/resources/vat-for-startups-tech-businesses/", "VAT guide for tech companies including outsourced developer costs"],
            ].map(([title, slug, desc]) => (
              <li key={slug}>
                <a href={slug} className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  {title}
                </a>
                <span className="text-ink-muted"> — {desc}</span>
              </li>
            ))}
          </ul>

          {/* Newsletter */}
          <div className="mt-8">
            <NewsletterSignup />
          </div>
        </div>

                {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="vat-labour-outsourcing-kenya" />
        </div>

        {/* CTA */}
        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">Need help with VAT?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[40ch] mx-auto leading-relaxed">
            We handle your KRA VAT registration and monthly filing so you never miss a deadline.
          </p>
          <a
            href="https://wa.me/254717344440?text=Hi%2C%20I%20need%20help%20with%20VAT"
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
