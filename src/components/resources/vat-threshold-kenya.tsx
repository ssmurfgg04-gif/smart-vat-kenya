import { ArrowLeft, ArrowRight, Info, Warning } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources" },
    { "@type": "ListItem", position: 3, name: "VAT Threshold Kenya", item: "https://smartvatkenya.co.ke/resources/vat-threshold-kenya" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "VAT Threshold Kenya 2026: Is It KES 5 Million or 8 Million?",
  description:
    "The Kenya VAT registration threshold is KES 8 million as of the Finance Act 2026. However, the KES 5 million threshold still applies in certain cases. Complete guide to who must register, when to register voluntarily, and how the two thresholds interact.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-28",
  dateModified: "2026-07-28",
  url: "https://smartvatkenya.co.ke/resources/vat-threshold-kenya",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/vat-threshold-kenya",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the VAT registration threshold in Kenya for 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The VAT registration threshold in Kenya is KES 8 million in annual turnover as of the Finance Act 2024, effective 1 September 2024, and confirmed under the Finance Act 2026. Previously, the threshold was KES 5 million. The increase means businesses with annual turnover between KES 5 million and KES 8 million are no longer required to register for VAT unless they choose to do so voluntarily.",
      },
    },
    {
      "@type": "Question",
      name: "Is the VAT threshold KES 5 million or KES 8 million?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The mandatory VAT registration threshold is KES 8 million as of 1 September 2024. However, the KES 5 million figure remains relevant: businesses with turnover between KES 5 million and KES 8 million can register voluntarily, and some industry-specific registration rules still reference the KES 5 million threshold. If your turnover is below KES 5 million, you cannot register for VAT. If it is between KES 5 million and KES 8 million, registration is optional. If it exceeds KES 8 million, registration is mandatory.",
      },
    },
    {
      "@type": "Question",
      name: "Can I register for VAT voluntarily if my turnover is below KES 5 million?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Voluntary VAT registration requires a minimum annual turnover of KES 5 million. If your turnover is below KES 5 million, KRA will not register you for VAT. You must wait until your turnover reaches at least KES 5 million to apply for voluntary registration.",
      },
    },
    {
      "@type": "Question",
      name: "Should I register for VAT if my turnover is between KES 5 million and KES 8 million?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your customer base. If most of your customers are VAT-registered businesses, voluntary registration can be beneficial because they can claim input VAT on your invoices, making you a preferred supplier. If your customers are individuals (B2C), VAT registration adds KES 8,000 annual filing costs (KES 3,500/month x 12) plus compliance overhead without a clear benefit. Consider registering if: your input VAT on purchases is significant, your competitors are VAT-registered, or you supply to VAT-registered businesses.",
      },
    },
    {
      "@type": "Question",
      name: "Does the KES 5 million threshold still apply anywhere?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The KES 5 million threshold still applies in limited contexts: (1) as the minimum turnover required for voluntary VAT registration, (2) in certain industry-specific regulations that have not been updated to reference KES 8 million, and (3) as a reference point for historical compliance — the KES 5 million threshold applied from July 2023 to August 2024. For practical purposes today, the mandatory threshold is KES 8 million and the voluntary threshold is KES 5 million.",
      },
    },
    {
      "@type": "Question",
      name: "How is annual turnover calculated for the threshold?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Annual turnover for VAT threshold purposes is calculated based on the total value of taxable supplies made in a period of 12 months. If your turnover exceeds KES 8 million in any 12-month period, you must register for VAT within 30 days. Turnover includes the value of all goods and services supplied in the course of your business, excluding VAT itself. KRA looks at both historical 12-month actuals and projected 12-month forward estimates.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I exceed the threshold but do not register?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Failure to register for VAT within 30 days of exceeding the threshold is an offence. KRA can charge VAT on your supplies from the date you should have registered (even if you did not include VAT in your prices at the time), impose late registration penalties, and charge interest on the unpaid VAT. You are also ineligible to claim input VAT for the period before registration, which means you bear the full VAT cost on your purchases.",
      },
    },
    {
      "@type": "Question",
      name: "Does the threshold apply to services differently from goods?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The KES 8 million threshold applies to the supply of both goods and services. The type of supply does not change the threshold. However, certain services (like digital services supplied by non-residents) have different registration rules — the threshold does not apply to non-resident digital service providers, who must register from the first sale.",
      },
    },
    {
      "@type": "Question",
      name: "Is the VAT threshold the same for turnover tax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Turnover tax applies to businesses with annual turnover below KES 1 million (for resident individuals). The turnover tax threshold is completely separate from the VAT threshold. A business can be below the VAT threshold but still above the turnover tax threshold, in which case they pay turnover tax instead of income tax but may still choose to register for VAT voluntarily.",
      },
    },
  ],
}

export default function VatThresholdKenya() {
  return (
    <>
      <script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id="article-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script id="faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-[700px] mx-auto px-6 lg:px-10 py-12">
        <a href="/resources" className="inline-flex items-center gap-2 text-ink-muted hover:text-ink text-sm font-medium mb-8 transition-colors">
          <ArrowLeft size={14} aria-hidden="true" /> All Resources
        </a>

        <article>
          <header className="mb-8">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand mb-3">VAT Threshold</p>
            <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-semibold text-ink tracking-tight leading-tight mb-3 text-balance">
              VAT Threshold Kenya 2026: Is It KES 5 Million or 8 Million?
            </h1>
            <p className="text-[0.9rem] text-ink-muted leading-relaxed">
              <time dateTime="2026-07-28">28 July 2026</time> &middot; Updated for Finance Act 2026
            </p>
          </header>

          <div className="prose prose-gray max-w-none">
            <p>
              The <strong>VAT registration threshold in Kenya is KES 8 million</strong> in annual turnover as of the Finance Act 2024, confirmed under the Finance Act 2026. This is the amount at which <strong>mandatory VAT registration</strong> is triggered. However, the KES 5 million threshold still matters — it is the minimum turnover required for <strong>voluntary registration</strong>. Here is exactly how the two thresholds work in practice.
            </p>

            <div className="bg-brand/5 border border-brand/15 rounded-lg p-5 my-6 not-prose">
              <div className="flex items-start gap-3 mb-3">
                <Info size={18} className="text-brand shrink-0 mt-0.5" weight="fill" />
                <div>
                  <p className="text-sm font-semibold text-ink mb-1">Quick Answer</p>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    8 million is the <strong>mandatory</strong> threshold. 5 million is the <strong>voluntary</strong> threshold. If you are below <strong>5 million</strong>, you cannot register. Between <strong>5 and 8 million</strong>, you may register voluntarily. Above <strong>8 million</strong>, you must register.
                  </p>
                </div>
              </div>
            </div>

            <h2>Why Two Thresholds?</h2>
            <p>
              The Finance Act 2024 raised the mandatory VAT registration threshold from KES 5 million to KES 8 million, effective 1 September 2024. The change was intended to reduce the compliance burden on small businesses. However, the KES 5 million minimum for voluntary registration was retained so that businesses below the mandatory threshold could still choose to register if it benefited them.
            </p>
            <p>
              The practical result is a <strong>three-tier system</strong>:
            </p>
            <div className="border border-hairline rounded-lg overflow-hidden not-prose">
              <table className="w-full text-[0.83rem]">
                <thead>
                  <tr className="border-b border-hairline bg-canvas-alt">
                    <th className="text-left p-3 font-semibold text-ink">Annual Turnover</th>
                    <th className="text-left p-3 font-semibold text-ink">VAT Status</th>
                    <th className="text-left p-3 font-semibold text-ink">What to Do</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hairline">
                  {[
                    { t: "Below KES 5 million", s: "Cannot register", a: "Cannot register for VAT. Pay turnover tax or income tax as applicable. You cannot charge VAT on your invoices." },
                    { t: "KES 5 million to 8 million", s: "Voluntary registration", a: "May register voluntarily. Evaluate whether your customers (B2B) need VAT invoices. If B2C-only, registration may not be beneficial." },
                    { t: "Above KES 8 million", s: "Mandatory registration", a: "Must register within 30 days of exceeding the threshold. Charge 16% VAT, file monthly returns, use eTIMS." },
                  ].map(({ t, s, a }) => (
                    <tr key={t}>
                      <td className="p-3 font-medium text-ink">{t}</td>
                      <td className="p-3 text-ink-muted">{s}</td>
                      <td className="p-3 text-ink-muted">{a}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Should You Register Voluntarily? (KES 5M&ndash;8M)</h2>
            <p>Registering voluntarily adds compliance obligations (monthly filing, eTIMS, VAT charge on invoices). It is beneficial when:</p>
            <ul>
              <li><strong>Your customers are VAT-registered businesses</strong> — they can claim input VAT on your invoices, making you a preferred supplier over non-registered competitors</li>
              <li><strong>Your input VAT on purchases is significant</strong> — if you pay substantial VAT on rent, stock, equipment, or services, you can claim it back</li>
              <li><strong>You want to avoid a future scramble</strong> — if you expect to cross KES 8 million soon, registering earlier gives you a smoother transition</li>
              <li><strong>Industry norms favour it</strong> — in some sectors (construction, IT services, professional services), being VAT-registered signals credibility</li>
            </ul>
            <p>Voluntary registration may not be beneficial when:</p>
            <ul>
              <li><strong>Your customers are individuals (B2C)</strong> — they cannot claim input VAT, so VAT-registered pricing is just more expensive to them</li>
              <li><strong>Your input VAT is low</strong> — if you buy mostly from non-VAT-registered suppliers (common for service businesses), you cannot claim much back</li>
              <li><strong>You want to minimise compliance overhead</strong> — monthly filing, eTIMS invoicing, and stock reports add ongoing costs</li>
            </ul>

            <h2>How the Threshold Is Calculated</h2>
            <p>Annual turnover for threshold purposes is the total value of your <strong>taxable supplies</strong> in any 12-month period. This includes:</p>
            <ul>
              <li>All sales of goods and services at the standard rate (16%)</li>
              <li>Zero-rated supplies (0%) — these count toward the threshold even though no VAT is charged</li>
              <li><strong>Exempt supplies do not count</strong> toward the threshold</li>
              <li>Turnover is measured <strong>excluding VAT</strong> itself</li>
            </ul>
            <p>KRA uses both <strong>historical actuals</strong> (what you earned in the past 12 months) and <strong>forward projections</strong> (your expected turnover for the next 12 months). If either exceeds KES 8 million, you must register.</p>

            <h2>What Happens If You Cross the Threshold</h2>
            <ol>
              <li><strong>Register within 30 days</strong> of the month you crossed KES 8 million. Late registration attracts penalties</li>
              <li><strong>Start charging 16% VAT</strong> on your invoices from the date of registration. KRA may charge VAT from the date you should have registered if you delay</li>
              <li><strong>Onboard eTIMS</strong> within 30 days of registration (KES 50,000/month penalty for late onboarding)</li>
              <li><strong>File monthly VAT returns</strong> by the 20th of each month</li>
            </ol>
            <p>
              <a href="/services/vat-registration" className="text-brand underline underline-offset-2 hover:text-brand-hover">We handle the full registration process for KES 5,000</a> — including iTax application, PIN generation, and eTIMS onboarding guidance.
            </p>

            <h2>Related Resources</h2>
            <ul>
              <li><a href="/resources/how-to-register-for-vat-in-kenya" className="text-brand underline underline-offset-2 hover:text-brand-hover">How to Register for VAT in Kenya</a> — Step-by-step registration guide</li>
              <li><a href="/resources/do-i-need-to-register-for-vat-kenya" className="text-brand underline underline-offset-2 hover:text-brand-hover">Do I Need to Register for VAT?</a> — Decision guide for SMEs</li>
              <li><a href="/resources/vat-vs-turnover-tax" className="text-brand underline underline-offset-2 hover:text-brand-hover">VAT vs Turnover Tax</a> — Comparison for small businesses</li>
              <li><a href="/resources/small-taxpayer-regime-kenya" className="text-brand underline underline-offset-2 hover:text-brand-hover">Small Taxpayer Regime Guide</a> — 8% turnover-inclusive option</li>
              <li><a href="/resources/finance-act-vat-changes-kenya" className="text-brand underline underline-offset-2 hover:text-brand-hover">Finance Act 2026 VAT Changes</a> — All VAT changes including threshold updates</li>
              <li><a href="/services/vat-registration" className="text-brand underline underline-offset-2 hover:text-brand-hover">VAT Registration Service (KES 5,000)</a> — We register you in 1&ndash;3 working days</li>
            </ul>
          </div>
        </article>

        <div className="mt-12 border-t border-border pt-8">
          <h2 className="font-display text-xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
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
            Not sure if you should register? We can help you decide.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/services/vat-registration"
              className="inline-flex items-center justify-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
            >
              Register for VAT &mdash; KES 5,000
              <svg viewBox="0 0 12 12" className="w-3 h-3 fill-current" aria-hidden="true"><path d="M6 0L4.59 1.41 9.17 6l-4.58 4.59L6 12l6-6z"/></svg>
            </a>
            <a
              href="https://wa.me/254721725958?text=Do%20I%20need%20to%20register%20for%20VAT%3F%20My%20turnover%20is"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-brand/30 text-ink text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand/5 transition-colors"
            >
              Ask on WhatsApp
              <svg viewBox="0 0 12 12" className="w-3 h-3 fill-current" aria-hidden="true"><path d="M6 0L4.59 1.41 9.17 6l-4.58 4.59L6 12l6-6z"/></svg>
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <ArticleGrid currentSlug="vat-threshold-kenya" />
        </div>
      </div>
    </>
  )
}
