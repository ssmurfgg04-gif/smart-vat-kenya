import { ArrowLeft, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList" as const,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "SEP Tax", item: "https://smartvatkenya.co.ke/resources/significant-economic-presence-tax-kenya/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article" as const,
  headline: "Significant Economic Presence (SEP) Tax Kenya: Who Pays 3% and How (2026)",
  description:
    "Kenya's SEP tax charges non-resident digital platforms an effective 3% of gross Kenyan revenue, with no minimum threshold. Who it hits and what it means for local freelancers and businesses.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-09-08",
  dateModified: "2026-09-08",
  url: "https://smartvatkenya.co.ke/resources/significant-economic-presence-tax-kenya",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/significant-economic-presence-tax-kenya",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage" as const,
  mainEntity: [
    {
      "@type": "Question" as const,
      name: "What is SEP tax in Kenya?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Significant Economic Presence tax — an income tax on non-resident businesses earning income from Kenyan users over the internet or a digital marketplace, even without a physical presence in Kenya. It replaced the 1.5% Digital Service Tax in December 2024.",
      },
    },
    {
      "@type": "Question" as const,
      name: "What is the SEP tax rate?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Effectively 3% of gross Kenyan-derived revenue — calculated as 30% tax on a deemed profit of 10% of gross turnover.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Is there a minimum threshold for SEP tax?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "No. An earlier revenue threshold was removed, so SEP applies from the first qualifying transaction.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Does SEP tax affect me if I'm a Kenyan resident?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Not directly — your own income stays under normal resident tax rules. It matters to you indirectly if you're paid by, sell through, or compete with a non-resident digital platform.",
      },
    },
    {
      "@type": "Question" as const,
      name: "How is SEP tax different from VAT on digital services?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "SEP taxes the non-resident provider's income. VAT on digital services is a separate consumption tax that can apply to the same transaction. They're both real, both current, and neither replaces the other.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Who registers and files SEP tax?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "The non-resident service provider — either through a simplified registration framework or by appointing a local tax representative — with monthly filing and payment due by the 20th of the following month.",
      },
    },
  ],
}

export default function SignificantEconomicPresenceTaxPage() {
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
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand mb-3">Guide - Digital Tax</p>
            <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.3rem)] font-semibold text-ink tracking-tight leading-tight mb-4 text-balance">
              Significant Economic Presence (SEP) Tax Kenya: Who Pays 3% and How (2026)
            </h1>
            <p className="text-[0.9rem] text-ink-muted leading-relaxed max-w-[65ch]">
              If you&apos;ve heard that Kenya is now taxing foreign platforms like ride-hailing apps, streaming services, or cross-border e-commerce sellers — this is the tax behind it. SEP replaced the old 1.5% Digital Service Tax, and as of 2026 it applies from the very first shilling of qualifying revenue, with no minimum threshold. Here&apos;s what it actually means, and who it affects.
            </p>
            <div className="flex items-center gap-4 text-[0.75rem] text-ink-muted">
              <time dateTime="2026-09-08">8 September 2026</time>
              <span>Smart VAT Kenya</span>
            </div>
          </header>

          <div className="space-y-10">
            {/* Section 1 - What Is SEP Tax */}
            <section id="what-is-sep" aria-labelledby="what-is-sep-h">
              <h2 id="what-is-sep-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                What Is SEP Tax?
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  The Significant Economic Presence (SEP) tax is an income tax charged on <strong className="text-ink">non-resident persons</strong> who earn income from Kenyan users through a business carried out over the internet, an electronic network, or a digital marketplace — even if that business has no physical office in Kenya.
                </p>
                <p>
                  It replaced the 1.5% Digital Service Tax (DST) in December 2024, and the Finance Act 2025 broadened its scope to cover any internet or electronic-network service, not just transactions on a digital marketplace platform.
                </p>
              </div>
            </section>

            {/* Section 2 - How Much */}
            <section id="how-much" aria-labelledby="how-much-h">
              <h2 id="how-much-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                How Much Is It?
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  SEP is charged at <strong className="text-ink">30% of deemed taxable profit</strong>, where deemed taxable profit is calculated as <strong className="text-ink">10% of gross Kenyan-derived turnover</strong>. Worked through:
                </p>
                <ol className="space-y-3 list-decimal list-inside">
                  <li className="text-ink-soft">
                    <strong className="text-ink">10% of gross turnover = deemed taxable profit</strong>
                  </li>
                  <li className="text-ink-soft">
                    <strong className="text-ink">30% of that deemed profit = tax due</strong>
                  </li>
                  <li className="text-ink-soft">
                    <strong className="text-ink">Net effect: 3% of gross Kenyan revenue</strong>
                  </li>
                </ol>
                <p>
                  Example: a platform earning KES 10 million from Kenyan users in a period calculates deemed profit at KES 1 million (10%), then pays 30% of that = <strong className="text-ink">KES 300,000</strong> — 3% of the original KES 10 million.
                </p>
                <div className="border border-brand/25 bg-brand-muted rounded-lg p-4 flex items-start gap-3">
                  <Info size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-[0.83rem] text-ink-soft leading-relaxed">
                    <strong className="text-ink">There is no minimum revenue threshold.</strong> Earlier versions of the rules exempted small amounts; that threshold was removed, so even low-value cross-border transactions are technically in scope.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 - Who Has to Pay */}
            <section id="who-pays" aria-labelledby="who-pays-h">
              <h2 id="who-pays-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Who Has to Pay It
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  Non-resident persons without a permanent establishment in Kenya, earning income from Kenyan users through:
                </p>
                <ul className="space-y-2">
                  {[
                    "Digital marketplaces and app-based platforms (ride-hailing, delivery, freelance marketplaces)",
                    "Streaming and subscription services",
                    "Cross-border e-commerce sellers and marketplace facilitators",
                    "Any service provided over the internet or an electronic network to a Kenya-based user — this scope is broader than just “marketplace” platforms",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1.5" aria-hidden="true" />
                      <span className="text-ink-soft">{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  Registration is via a <strong className="text-ink">simplified framework</strong>, or by appointing a <strong className="text-ink">local tax representative</strong>. Filing and payment are monthly, due by the <strong className="text-ink">20th of the following month</strong>.
                </p>
              </div>
            </section>

            {/* Section 4 - Kenyan Freelancer or SME */}
            <section id="freelancer-sme" aria-labelledby="freelancer-sme-h">
              <h2 id="freelancer-sme-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                What This Means If You&apos;re a Kenyan Freelancer or SME
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>SEP is not directly your tax if you&apos;re Kenya-resident — your own income is taxed under normal individual or corporate rules. But it affects you in practice if:</p>
                <div className="space-y-3">
                  {[
                    { title: "You get paid by a non-resident platform or client", detail: "That platform's own SEP exposure has increased data-matching pressure from KRA, and some platforms may ask you for documentation or adjust how they handle payments as a result." },
                    { title: "You sell through, or compete with, foreign marketplace sellers", detail: "For example cross-border sellers on platforms shipping directly to Kenyan buyers — their tax exposure has changed, which can affect pricing and how local resellers position against them." },
                    { title: "You run a platform or app yourself", detail: "With foreign revenue flows — check whether your own structure triggers SEP obligations on the non-resident side of your business." },
                  ].map(({ title, detail }) => (
                    <div key={title} className="border border-hairline rounded-lg p-4">
                      <p className="font-semibold text-ink text-[0.88rem] mb-1">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 5 - Common Mistakes */}
            <section id="common-mistakes" aria-labelledby="common-mistakes-h">
              <h2 id="common-mistakes-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Common Mistakes
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <div className="space-y-3">
                  {[
                    { mistake: "Assuming SEP is “someone else's tax” if you're a small Kenyan business", fix: "If you're the resident party, it usually is. But if any part of your revenue flows through a non-resident platform or entity, it's worth checking who's actually liable and whether it changes your own documentation needs." },
                    { mistake: "Confusing SEP with VAT on digital services", fix: "These are separate regimes. See our VAT on digital services guide for the VAT side — SEP is an income tax on the non-resident's profit, not a consumption tax on the buyer." },
                    { mistake: "Assuming there's still a minimum threshold", fix: "There isn't, as of the 2026 rules. Even small cross-border transaction volumes are technically in scope for the non-resident provider." },
                  ].map(({ mistake, fix }) => (
                    <div key={mistake} className="border border-hairline rounded-lg p-4">
                      <p className="font-semibold text-ink text-[0.88rem] mb-1">
                        <Warning size={14} weight="fill" className="inline-block text-amber-500 mr-1.5 -mt-0.5" aria-hidden="true" />
                        {mistake}
                      </p>
                      <p className="text-[0.83rem] text-ink-muted leading-relaxed">{fix}</p>
                    </div>
                  ))}
                </div>
                <p>
                  For the VAT side, see our <a href="/resources/vat-digital-services-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">VAT on digital services guide</a>.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <FAQSection faqSchema={faqSchema} />

            {/* Need Help */}
            <section id="need-help" aria-labelledby="need-help-h">
              <h2 id="need-help-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Need Help Understanding Your Tax Position?
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  Whether you&apos;re being paid by a foreign platform or trying to work out your own compliance obligations, we can help you make sense of it.
                </p>
                <p>
                  <a href="https://wa.me/254717344440?text=Hi%2C%20I%20need%20help%20understanding%20SEP%20tax%20and%20my%20tax%20position" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors">
                    Talk to us on WhatsApp →
                  </a>
                </p>
              </div>
            </section>
          </div>
        </article>

        {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="significant-economic-presence-tax-kenya" />
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
