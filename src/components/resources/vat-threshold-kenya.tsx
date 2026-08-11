import { ArrowLeft, ArrowRight, Info, Warning } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "VAT Threshold Kenya", item: "https://smartvatkenya.co.ke/resources/vat-threshold-kenya/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "VAT Threshold Kenya 2026: The KES 5 Million Mandatory Threshold (Is 8 Million Law?)",
  description:
    "The Kenya VAT registration threshold is KES 5 million in annual taxable turnover. The Finance Act 2025 proposed raising it to KES 8 million, but this has not yet taken effect. Complete guide to who must register, voluntary registration, and how turnover is calculated.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-28",
  dateModified: "2026-08-08",
  url: "https://smartvatkenya.co.ke/resources/vat-threshold-kenya",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/vat-threshold-kenya",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the mandatory VAT registration threshold in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KES 5 million in annual taxable turnover. Under section 34 of the VAT Act and KRA's published VAT guidance (updated 2026), you must register for VAT within 30 days once your taxable turnover reaches or exceeds KES 5 million in any period of twelve months.",
      },
    },
    {
      "@type": "Question",
      name: "Is the VAT threshold KES 5 million or KES 8 million?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KES 5 million is the operative threshold as of 2026. The KES 8 million figure comes from Finance Act 2025 proposals to raise the threshold, but that change has not been brought into effect — KRA's own VAT guidance, the amended statute as printed by law firms, and PwC's worldwide tax summaries all still reflect KES 5 million. Treat any claim that KES 8 million is currently law as incorrect.",
      },
    },
    {
      "@type": "Question",
      name: "Can I register for VAT voluntarily if my turnover is below KES 5 million?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Kenya permits voluntary (optional) VAT registration, and the Commissioner may allow registration even below the compulsory threshold under section 34(3) of the VAT Act. Voluntary registration is often worthwhile if your customers are VAT-registered businesses that need to claim input VAT on your invoices. If you do register voluntarily, you take on the same obligations — monthly returns, eTIMS, and 16% VAT on your invoices.",
      },
    },
    {
      "@type": "Question",
      name: "What counts toward the KES 5 million threshold?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The total value of your taxable supplies in any 12-month period, excluding VAT itself. Standard-rated (16%) supplies count, zero-rated supplies count even though no VAT is charged on them, and exempt supplies do not count. Does not include capital goods or sale of a business as a going concern, and the value of a capital asset is counted when it is supplied.",
      },
    },
    {
      "@type": "Question",
      name: "When did the KES 5 million threshold come in? Was it ever KES 8 million?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The KES 5 million threshold for VAT registration in Kenya has applied since VAT (Amendment) changes over the years. The Finance Act 2025 did not bring the KES 8 million threshold into force — some blog and SEO articles claim a raise of the Finance Act 2024 or Finance Act 2026 was effective 1 September 2024, but the operative threshold remains KES 5 million. In 2026 KRA is instead proposing to remove the threshold entirely, so monitor official KRA announcements.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I exceed the threshold but do not register?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Failure to register within 30 days of exceeding the threshold is an offence. KRA can charge VAT on your supplies from the date you should have registered, impose late registration penalties, and charge interest on the unpaid VAT. You may also be ineligible to claim input VAT for the period before registration, which means you bear the full VAT cost on your purchases.",
      },
    },
    {
      "@type": "Question",
      name: "Do goods and services use the same threshold?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the KES 5 million taxable-turnover test applies to both goods and services. The one exception is digital services supplied by non-residents, which must register for VAT from their first sale regardless of turnover.",
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
        <a href="/resources/" className="inline-flex items-center gap-2 text-ink-muted hover:text-ink text-sm font-medium mb-8 transition-colors">
          <ArrowLeft size={14} aria-hidden="true" /> All Resources
        </a>

        <article>
          <header className="mb-8">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand mb-3">VAT Threshold</p>
            <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-semibold text-ink tracking-tight leading-tight mb-3 text-balance">
              VAT Threshold Kenya 2026: The KES 5 Million Mandatory Threshold (Is 8 Million Law?)
            </h1>
            <p className="text-[0.9rem] text-ink-muted leading-relaxed">
              <time dateTime="2026-08-08">8 August 2026</time> &middot; Corrected to reflect the operative KES 5 million threshold
            </p>
          </header>

          <div className="prose prose-gray max-w-none">
            <p>
              The <strong>mandatory VAT registration threshold in Kenya is KES 5 million</strong> in annual taxable turnover. That is the law per section 34 of the VAT Act and KRA's own guidance (as confirmed through 2026). Some online articles say the threshold is <strong>KES 8 million</strong> — that figure comes from a Finance Act 2025 proposal that has not yet been brought into effect. Here is how the rule actually works, whether you should register voluntarily, and how turnover is counted.
            </p>

            <div className="bg-brand/5 border border-brand/15 rounded-lg p-5 my-6 not-prose">
              <div className="flex items-start gap-3 mb-3">
                <Info size={18} className="text-brand shrink-0 mt-0.5" weight="fill" />
                <div>
                  <p className="text-sm font-semibold text-ink mb-1">Quick Answer</p>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    If your annual taxable turnover reaches or exceeds <strong>KES 5 million</strong>, you must register for VAT within 30 days. Below KES 5 million, registration is not mandatory but you may register <strong>voluntarily</strong>. The KES 8 million figure is only a Finance Act 2025 proposal — not yet law.
                  </p>
                </div>
              </div>
            </div>

            <h2>What Is the Current Threshold?</h2>
            <p>
              The VAT registration threshold is <strong>KES 5 million in taxable turnover</strong> in any period of twelve months (VAT Act, s.34). You must apply for registration within <strong>30 days</strong> of crossing the threshold. KRA's publicly available VAT guidance — together with PwC's worldwide tax summaries and law firms printing the amended VAT Act — all list 5 million as the number in force.
            </p>
            <p>
              Confusion creeps in because the <strong>Finance Act 2025 proposed raising the threshold to KES 8 million</strong>. As at July 2026 the change has not been brought into force. Several SEO/blog articles present the 8 million figure as already effective (some even date it back to "Finance Act 2024" or to 1 September 2024) — those are incorrect. Work from the KES 5 million threshold and check KRA's guidance before acting on anything that says otherwise.
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
                    { t: "Below KES 5 million", s: "Not mandatory — voluntary available", a: "No obligation to register. May register voluntarily (e.g. to let B2B customers claim input VAT). Pay turnover tax or income tax as applicable." },
                    { t: "KES 5 million and above", s: "Mandatory registration", a: "Must register within 30 days of crossing. Charge 16% VAT, file monthly returns, use eTIMS." },
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

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 my-6 not-prose">
              <div className="flex items-start gap-3">
                <Warning size={18} className="text-amber-600 shrink-0 mt-0.5" weight="fill" />
                <div>
                  <p className="text-sm font-semibold text-ink mb-1">Important — the &ldquo;KES 8 million&quot; claim</p>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    The Finance Act 2025 <em>proposed</em> raising the VAT threshold from KES 5 million to KES 8 million. It has not been brought into effect. Register for VAT at KES 5 million to stay compliant; if your accountant or a blog cites 8 million, ask for a Gazette notice showing the effective date.
                  </p>
                </div>
              </div>
            </div>

            <h2>How Is Turnover Counted?</h2>
            <ol>
              <li><strong>Taxable supplies only:</strong> Standard-rated (16%) and zero-rated (0%) supplies count; exempt supplies do not.</li>
              <li><strong>Over twelve months:</strong> The test is total taxable value in any period of 12 months — watch rolling 12-month totals, not just a single year.</li>
              <li><strong>Excluding VAT:</strong> Turnover is measured excluding the VAT itself.</li>
              <li><strong>Projections matter:</strong> if it is apparent your supplies will exceed the threshold in the next 12 months on goods or services, you must register even before the actual crossing.</li>
            </ol>
            <p>If you make both taxable and exempt supplies, you compare only the taxable supplies against the threshold.</p>

            <h2>Voluntary Registration (Below KES 5 Million)</h2>
            <p>
              You may apply for voluntary registration even under the threshold. The Commissioner has discretion under section 34(3) of the VAT Act. It is typically a good idea if:
            </p>
            <ul>
              <li><strong>Your customers are VAT-registered businesses</strong> — they can claim input VAT on your invoices, making you a preferred (input-claimable) supplier in the chain</li>
              <li><strong>Your input VAT on purchases is significant</strong> — if you pay VAT on rent, stock, equipment, or services, you can recover it once registered</li>
              <li><strong>Industry norms favour it</strong> — construction, IT services, and professional services sometimes prefer VAT status</li>
            </ul>
            <p>It is often less worthwhile when your customers are individuals (B2C — VAT just makes you more expensive) or you buy mostly from non-registered suppliers (little input VAT to reclaim).</p>

            <h2>What Happens If You Cross KES 5 Million</h2>
            <ol>
              <li><strong>Register within 30 days</strong> of the month you cross the threshold. Late registration attracts penalties.</li>
              <li><strong>Start charging 16% VAT</strong> from the date of registration. If you delay, KRA can charge VAT back to the date you should have registered.</li>
              <li><strong>Onboard eTIMS</strong> — mandatory for all VAT-registered businesses, with penalties for late onboarding.</li>
              <li><strong>File monthly returns</strong> by the 20th of each month, nil returns included.</li>
            </ol>
            <p>
              <a href="/services/vat-registration/" className="text-brand underline underline-offset-2 hover:text-brand-hover">We handle the full registration for KES 5,000</a> — iTax application, and eTIMS onboarding guidance.
            </p>

            <h2>Related Resources</h2>
            <ul>
              <li><a href="/resources/how-to-register-for-vat-in-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">How to Register for VAT in Kenya</a> — Step-by-step registration guide</li>
              <li><a href="/resources/do-i-need-to-register-for-vat-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">Do I Need to Register for VAT?</a> — Decision guide for SMEs</li>
              <li><a href="/resources/vat-vs-turnover-tax/" className="text-brand underline underline-offset-2 hover:text-brand-hover">VAT vs Turnover Tax</a> — Comparison for small businesses</li>
              <li><a href="/resources/small-taxpayer-regime-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">Small Taxpayer Regime Guide</a> — 8% turnover-inclusive option</li>
              <li><a href="/resources/finance-act-vat-changes-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">Finance Act 2026 VAT Changes</a> — All VAT changes including threshold updates</li>
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
              href="/services/vat-registration/"
              className="inline-flex items-center justify-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
            >
              Register for VAT &mdash; KES 5,000
              <svg viewBox="0 0 12 12" className="w-3 h-3 fill-current" aria-hidden="true"><path d="M6 0L4.59 1.41 9.17 6l-4.58 4.59L6 12l6-6z"/></svg>
            </a>
            <a
              href="https://wa.me/254717344440?text=Do%20I%20need%20to%20register%20for%20VAT%3F%20My%20turnover%20is"
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