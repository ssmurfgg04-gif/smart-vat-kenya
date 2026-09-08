import { ArrowLeft, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList" as const,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "Non-Resident Rental Income Tax", item: "https://smartvatkenya.co.ke/resources/non-resident-rental-income-tax-kenya/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article" as const,
  headline: "Non-Resident Rental Income Tax Kenya Guide 2026",
  description:
    "Non-resident landlords in Kenya must now self-declare and pay a 30% final tax on gross rent. Who's affected, how it works, and the exception that avoids double filing.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-09-08",
  dateModified: "2026-09-08",
  url: "https://smartvatkenya.co.ke/resources/non-resident-rental-income-tax-kenya",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/non-resident-rental-income-tax-kenya",
}

const faqSchema = {
  "@context": "https://schema.org" as const,
  "@type": "FAQPage" as const,
  mainEntity: [
    {
      "@type": "Question" as const,
      name: "What is the non-resident rental income tax rate in Kenya?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "30% on gross rent from immovable property (land and buildings), and 15% on rent from movable property. It's a final withholding tax — no expense deductions apply. It took effect 1 July 2026 under the Finance Act 2026.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Who has to pay non-resident rental income tax?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Any non-resident individual or entity earning rental income from property situated in Kenya, regardless of whether they let the property directly or through a local agent.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Is this the same as withholding VAT?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "No. Withholding VAT is a 2% deduction on certain VAT-registered supplies, covered in our withholding VAT guide. Non-resident rental income tax is a separate income tax regime specifically for non-resident landlords.",
      },
    },
    {
      "@type": "Question" as const,
      name: "What's the filing deadline?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Returns and payment are due by the 20th day of the month following the month rent was received.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Do I need eRITS to comply?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "No. eRITS is the residents-only system for the Monthly Rental Income (MRI) regime (KES 288,000–15 million/year). Non-resident landlords register and file through iTax's non-resident income tax category instead — a separate system under the new Section 6B of the Income Tax Act.",
      },
    },
    {
      "@type": "Question" as const,
      name: "What if my property manager already withholds tax on my behalf?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "If a resident agent is appointed to withhold under Section 35(3)(j), you don't also self-declare under the new Section 6B regime — only one mechanism applies at a time. Confirm with your agent which arrangement is actually in place before you register for anything.",
      },
    },
    {
      "@type": "Question" as const,
      name: "What happens if a non-resident landlord doesn't comply?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Non-compliance exposes the landlord (and potentially the local agent managing the property) to penalties and interest under the standard KRA enforcement regime for withholding taxes.",
      },
    },
  ],
}

export default function NonResidentRentalIncomeTaxPage() {
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
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand mb-3">Guide - Non-Resident Tax</p>
            <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.3rem)] font-semibold text-ink tracking-tight leading-tight mb-4 text-balance">
              Non-Resident Rental Income Tax Kenya Guide 2026
            </h1>
            <p className="text-[0.9rem] text-ink-muted leading-relaxed max-w-[65ch]">
              If you&apos;re a non-resident earning rental income from property in Kenya — or you&apos;re a local property manager, agent, or tenant paying rent to one — the Finance Act 2026 introduced a dedicated tax regime you need to know about. This guide explains who it applies to, how registration and filing works, and what happens if you get it wrong.
            </p>
            <div className="flex items-center gap-4 text-[0.75rem] text-ink-muted">
              <time dateTime="2026-09-08">8 September 2026</time>
              <span>Smart VAT Kenya</span>
            </div>
          </header>

          <div className="space-y-10">
            {/* Section 1 - What Changed */}
            <section id="what-changed" aria-labelledby="what-changed-h">
              <h2 id="what-changed-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                What Changed in the Finance Act 2026
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  Before this Act, non-resident landlords were taxed on Kenyan rental income through the general withholding tax mechanism under Section 35 of the Income Tax Act — the payer withheld tax and remitted it, but there was no dedicated, simplified system for the non-resident to register and self-declare.
                </p>
                <p>
                  The Finance Act 2026 formalizes this into its own regime: <strong className="text-ink">non-resident rental income tax</strong>, a final withholding tax of:
                </p>
                <ul className="space-y-2">
                  {[
                    "30% on gross rent from immovable property (land, buildings, apartments, commercial units)",
                    "15% on rent from movable property",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1.5" aria-hidden="true" />
                      <span className="text-ink-soft">{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  It&apos;s a <strong className="text-ink">final tax on gross rent</strong> — no deductions for expenses, mortgage interest, agent fees, or maintenance costs. This is the same &ldquo;no deductions&rdquo; structure used elsewhere in Kenyan withholding tax law, so if you&apos;re used to netting expenses off rental income as a resident landlord, this is a different regime entirely.
                </p>
                <p>
                  Effective date: <strong className="text-ink">1 July 2026</strong>.
                </p>
              </div>
            </section>

            {/* Section 2 - Who This Applies To */}
            <section id="who-applies" aria-labelledby="who-applies-h">
              <h2 id="who-applies-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Who This Applies To
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <ul className="space-y-2">
                  {[
                    "Any non-resident individual or company earning rental income from Kenyan-situated property, regardless of how the tenancy was arranged",
                    "Applies whether the tenant is an individual, a company, or a government entity",
                    "Applies even if the non-resident uses a local agent or property manager to handle the letting",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1.5" aria-hidden="true" />
                      <span className="text-ink-soft">{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  It does <strong className="text-ink">not</strong> replace VAT obligations on commercial lettings — if the property is also subject to VAT (e.g. certain commercial leases), that&apos;s a separate compliance track. This guide covers the income tax side only.
                </p>
              </div>
            </section>

            {/* Section 3 - Registration and Filing */}
            <section id="registration-filing" aria-labelledby="registration-filing-h">
              <h2 id="registration-filing-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                How Registration and Filing Works
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  The Finance Act 2026 inserted a new <strong className="text-ink">Section 6B into the Income Tax Act</strong>, creating a dedicated non-resident rental income tax regime. Here&apos;s the mechanism and — more importantly — why it exists.
                </p>
                <p>
                  <strong className="text-ink">Why this changed:</strong> Before Section 6B, the law relied on tenants to withhold tax at source when their landlord was non-resident (under Section 35). In practice this was hard to enforce — a tenant often has no reliable way to know whether their landlord is Kenyan-resident or not. Section 6B shifts that burden away from the tenant and onto the landlord directly: non-residents now register and self-declare their own rental income, rather than relying on the tenant to work it out and withhold.
                </p>
                <p>
                  In outline:
                </p>
                <ol className="space-y-3 list-decimal list-inside">
                  <li className="text-ink-soft">
                    <strong className="text-ink">Register</strong> under a simplified framework for non-resident taxpayers (via iTax&apos;s non-resident income tax category — see note below).
                  </li>
                  <li className="text-ink-soft">
                    <strong className="text-ink">File a monthly return</strong> declaring gross rent received for that month.
                  </li>
                  <li className="text-ink-soft">
                    <strong className="text-ink">Pay the tax due by the 20th day of the following month</strong> — the same monthly deadline pattern used across most Kenyan withholding and rental taxes.
                  </li>
                </ol>
                <p>
                  <strong className="text-ink">This is not the same system residents use.</strong> Resident landlords under the Monthly Rental Income (MRI) regime register through <strong className="text-ink">eRITS</strong> (Electronic Rental Income Tax System). eRITS applies only to residents earning between KES 288,000 and KES 15 million annually — it is <strong className="text-ink">not</strong> the system non-resident landlords use. Non-residents file through iTax directly under the non-resident income tax return category. If you&apos;re a foreign landlord and someone tells you to use eRITS, that&apos;s incorrect.
                </p>
                <p>
                  <strong className="text-ink">The exception that matters:</strong> if a resident agent or property manager is already appointed to withhold tax on your rent under Section 35(3)(j) — the older mechanism — you do <strong className="text-ink">not</strong> also self-declare under Section 6B. The regime is designed to avoid double compliance: it&apos;s either the resident withholding agent handling it, or the non-resident self-declaring directly, not both. If you&apos;re unsure which situation applies to you, that&apos;s the first thing to establish before you file anything.
                </p>
                <div className="border border-brand/25 bg-brand-muted rounded-lg p-4 flex items-start gap-3">
                  <Info size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-[0.83rem] text-ink-soft leading-relaxed">
                    <strong className="text-ink">Operational note:</strong> Because this regime only took effect 1 July 2026, the exact iTax screen flow for registration is new and may still be settling. The legal obligation and the 30%/15% rates are firmly in force regardless of how smooth the portal experience is on any given day.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 - Local Agents */}
            <section id="local-agents" aria-labelledby="local-agents-h">
              <h2 id="local-agents-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                If You&apos;re a Local Agent or Property Manager
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>If you manage property on behalf of a non-resident landlord, you may be treated as a withholding point in the chain, similar in spirit to how <a href="/resources/withholding-vat-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">withholding VAT agents</a> work for VAT:</p>
                <div className="space-y-3">
                  {[
                    { title: "Confirm your withholding role", detail: "Confirm whether your principal is treated as self-declaring or whether you're expected to withhold and remit on their behalf." },
                    { title: "Keep gross-rent records", detail: "Keep records of gross rent collected, remitted amounts, and any certificates issued." },
                    { title: "Don't assume VAT-agent status covers this", detail: "Your existing VAT-agent status does not cover this — non-resident rental income tax is a separate income tax regime, not a VAT mechanism." },
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
                    { mistake: "Assuming this only affects big commercial landlords", fix: "It applies to any non-resident earning any rental income from Kenyan property — including someone who inherited a single apartment and lives abroad." },
                    { mistake: "Deducting expenses before calculating the tax", fix: "This is a tax on gross rent. Mortgage interest, repairs, agent commission — none of it reduces the taxable amount." },
                    { mistake: "Confusing it with resident rental income tax", fix: "Resident landlords have their own (different) rental income tax regime. This guide is specifically about non-residents." },
                    { mistake: "Missing the 20th-of-month deadline", fix: "Like most Kenyan withholding taxes, late payment attracts penalties and interest — treat it with the same discipline as a VAT filing deadline." },
                    { mistake: "Self-declaring when a resident agent already withholds for you", fix: "If your property manager or agent already withholds tax on your rent under Section 35(3)(j), you don't also register and self-declare under Section 6B — that's double compliance, not extra safety. Confirm which mechanism actually applies to your situation first." },
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
              </div>
            </section>

            {/* FAQ */}
            <FAQSection faqSchema={faqSchema} />

            {/* Need Help */}
            <section id="need-help" aria-labelledby="need-help-h">
              <h2 id="need-help-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Need Help With KRA Compliance?
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  If you manage property for a non-resident landlord, or you are one, we can help you work out exactly what you owe and how to file it correctly.
                </p>
                <p>
                  <a href="https://wa.me/254717344440?text=Hi%2C%20I%20need%20help%20with%20non-resident%20rental%20income%20tax" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors">
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
          <ArticleGrid currentSlug="non-resident-rental-income-tax-kenya" />
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
