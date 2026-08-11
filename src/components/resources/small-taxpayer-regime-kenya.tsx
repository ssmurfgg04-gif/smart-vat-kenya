import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "Small Taxpayer Regime Kenya", item: "https://smartvatkenya.co.ke/resources/small-taxpayer-regime-kenya/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Small Taxpayer Regime Kenya — VAT, Turnover Tax, and Simplified Compliance Guide 2026",
  description:
    "Complete guide to Kenya's small taxpayer regime. Understand the KES 5M VAT threshold, turnover tax rules, eTIMS obligations for small businesses, voluntary VAT registration, and how to choose the right tax regime for your business.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-25",
  dateModified: "2026-07-25",
  url: "https://smartvatkenya.co.ke/resources/small-taxpayer-regime-kenya",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/small-taxpayer-regime-kenya",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the small taxpayer regime in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The small taxpayer regime refers to the tax rules that apply to businesses with annual turnover below KES 5 million. These businesses are not required to register for VAT, but they must register for Turnover Tax (TOT) at 1-3% of gross sales. However, since January 2026, ALL businesses regardless of size must register for eTIMS and issue electronic invoices. Small businesses can also voluntarily register for VAT if it benefits them.",
      },
    },
    {
      "@type": "Question",
      name: "What is the turnover threshold for VAT registration in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The mandatory VAT registration threshold is KES 5 million in annual taxable turnover. Once your turnover reaches or exceeds this amount in any 12-month period, you must register for VAT. The Finance Act 2025 proposed raising the threshold to KES 8 million, but this has not yet taken effect as of July 2026. Voluntary registration is available below the threshold.",
      },
    },
    {
      "@type": "Question",
      name: "If I am a small taxpayer, do I still need eTIMS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Finance Act 2023 amended the Tax Procedures Act to require ALL persons engaged in business to use eTIMS, regardless of turnover. This means even if you pay turnover tax and are not VAT-registered, you must issue eTIMS-compliant invoices. Small businesses should use eTIMS Lite, which is free and accessed through a web browser. Issuing a non-compliant invoice attracts the TPA s.86 penalty — since 1 July 2026, the higher of 5% of the tax due, KES 100,000 (companies), or KES 10,000 (individuals) — and non-integration after notice costs up to KES 100,000 per month (TPA s.59A(5), turnover above KES 5 million).",
      },
    },
    {
      "@type": "Question",
      name: "Can a small business voluntarily register for VAT below the KES 5 million threshold?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Voluntary VAT registration allows businesses below the KES 5 million threshold to register for VAT. The main benefit is that you can claim input VAT on your purchases — laptops, software, rent, professional fees, etc. This can improve your cash flow if you sell to VAT-registered customers who can claim input VAT on purchases from you. However, you must charge 16% VAT on your sales, which may make your prices less competitive for non-VAT customers.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Turnover Tax and VAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Turnover Tax (TOT) is 1-3% on gross sales, paid monthly or annually. It is simpler — no input VAT claims, no complex returns. VAT is 16% on the value added, with input VAT deductions on purchases. VAT requires monthly filing on iTax and full eTIMS compliance. The decision between the two depends on your turnover, profit margins, customer type (B2B vs B2C), and whether you want to claim input VAT.",
      },
    },
    {
      "@type": "Question",
      name: "As a small taxpayer, should I register for VAT voluntarily?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your customer base and margins. If most of your customers are VAT-registered businesses (B2B), voluntary registration allows them to claim input VAT on purchases from you, which can increase your sales. You also get to claim input VAT on your own purchases. If most customers are individual consumers (B2C), adding 16% VAT makes your prices higher — staying on turnover tax is usually better. We recommend speaking with a KRA-registered agent to run the numbers for your specific business.",
      },
    },
  ],
}

const toc = [
  { id: "what-is",       label: "What Is the Small Taxpayer Regime?" },
  { id: "thresholds",    label: "Tax Thresholds and Regimes Compared" },
  { id: "tot-vs-vat",    label: "Turnover Tax vs VAT: Which Is Right for You?" },
  { id: "etims",         label: "eTIMS Obligations for Small Taxpayers" },
  { id: "voluntary-vat", label: "Voluntary VAT Registration: When It Makes Sense" },
  { id: "decision",      label: "How to Choose the Right Regime" },
  { id: "faq",           label: "Frequently Asked Questions" },
]

export default function SmallTaxpayerRegimePage() {
  return (
    <>
      <script id="article-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script id="faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Header */}
      <div className="bg-canvas-dark px-6 lg:px-10 py-14">
        <div className="max-w-3xl mx-auto">
          <a href="/resources/" className="inline-flex items-center gap-1.5 text-canvas/50 hover:text-canvas text-sm mb-6 transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> Back to Knowledge Base
          </a>
          <div className="flex flex-wrap gap-2 mb-5">
            {["Small Taxpayer", "VAT", "Turnover Tax", "eTIMS", "Kenya"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            Small Taxpayer Regime Kenya — Tax Options for Businesses Under KES 5 Million
          </h1>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="font-mono text-[0.62rem] uppercase tracking-widest bg-brand/20 text-brand px-2.5 py-1 rounded-sm">Last updated: July 25, 2026</span>
            <span className="text-[0.78rem] text-canvas/50">Smart VAT Kenya — KRA-registered VAT agents</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Quick Answer / BLUF */}
        <div className="border-l-[3px] border-brand pl-5 mb-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Quick Answer</p>
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            Kenya's small taxpayer regime covers businesses with annual turnover below <strong className="text-ink">KES 5 million</strong>. These businesses pay <strong className="text-ink">Turnover Tax (TOT) at 1-3%</strong> on gross sales instead of 16% VAT. However, since January 2026, ALL businesses must use <strong className="text-ink">eTIMS</strong> regardless of size. Small businesses can voluntarily register for VAT to claim input VAT on purchases — but this means charging 16% VAT to customers. The right choice depends on your profit margins, customer type, and whether you need to claim input VAT.
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

          {/* Section 1 — What Is It */}
          <section id="what-is" aria-labelledby="what-is-h">
            <h2 id="what-is-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What Is the Small Taxpayer Regime in Kenya?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Kenya's tax system divides businesses into categories based largely on turnover. The small taxpayer regime is the category for businesses with <strong className="text-ink">annual turnover below KES 5 million</strong>. If your business falls in this category, you are not required to register for VAT — instead, you register for <strong className="text-ink">Turnover Tax (TOT)</strong>.
              </p>
              <p>
                The small taxpayer regime was designed to simplify tax compliance for Kenya's vast informal sector and small businesses. Instead of the complex VAT system (which requires monthly filing, detailed record-keeping, and eTIMS invoicing), small taxpayers file simpler returns and pay a lower percentage of their gross sales.
              </p>
              <p>
                However, keep in mind that <strong className="text-ink">eTIMS applies to everyone regardless of size</strong>. Since January 2026, KRA has enforced the requirement that all businesses — including turnover tax payers, rental income earners, and informal sector operators — must issue eTIMS-compliant invoices through the free eTIMS Lite platform.
              </p>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Important update:</strong> The Finance Act 2025 proposed raising the VAT registration threshold from KES 5 million to KES 8 million. As of July 2026, this change has not yet taken effect. The KES 5 million threshold remains the law. See our{" "}
                  <a href="/resources/finance-act-vat-changes-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                    Finance Act changes guide
                  </a>{" "}
                  for the latest status.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 — Thresholds */}
          <section id="thresholds" aria-labelledby="thresholds-h">
            <h2 id="thresholds-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Tax Thresholds and Regimes Compared
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Kenya has three main tax regimes for businesses. Here is how they compare.
              </p>
              <div className="border border-hairline rounded-lg overflow-hidden">
                <table className="w-full text-[0.83rem]">
                  <thead>
                    <tr className="border-b border-hairline bg-canvas-alt">
                      <th className="text-left p-3.5 font-semibold text-ink"></th>
                      <th className="text-left p-3.5 font-semibold text-ink">Turnover Tax</th>
                      <th className="text-left p-3.5 font-semibold text-ink">VAT (Standard)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hairline">
                    {[
                      { field: "Annual turnover threshold", tot: "Under KES 5 million", vat: "KES 5 million and above" },
                      { field: "Tax rate", tot: "1-3% of gross sales", vat: "16% on value added" },
                      { field: "Filing frequency", tot: "Monthly or annual", vat: "Monthly (by 20th)" },
                      { field: "Input VAT claims", tot: "Not applicable", vat: "Yes (with eTIMS invoices)" },
                      { field: "eTIMS required?", tot: "Yes (eTIMS Lite)", vat: "Yes" },
                      { field: "Return complexity", tot: "Simple", vat: "Complex (multi-field)" },
                      { field: "Best for", tot: "Small retailers, service providers, B2C", vat: "Wholesalers, manufacturers, B2B" },
                    ].map(({ field, tot, vat }) => (
                      <tr key={field}>
                        <td className="p-3.5 font-medium text-ink">{field}</td>
                        <td className="p-3.5 text-ink-muted">{tot}</td>
                        <td className="p-3.5 text-ink-muted">{vat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                For a more detailed comparison, see our dedicated{" "}
                <a href="/resources/vat-vs-turnover-tax/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  Turnover Tax vs VAT guide
                </a>.
              </p>
            </div>
          </section>

          {/* Section 3 — TOT vs VAT */}
          <section id="tot-vs-vat" aria-labelledby="tot-vs-vat-h">
            <h2 id="tot-vs-vat-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Turnover Tax vs VAT: Which One Fits Your Business?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                If your annual turnover is under KES 5 million, you have a choice: stay on Turnover Tax or voluntarily register for VAT. Here is how to decide.
              </p>
              <div className="space-y-5">
                <div className="border border-hairline rounded-lg p-5">
                  <p className="font-semibold text-ink text-[0.95rem] mb-2">Choose Turnover Tax if:</p>
                  <ul className="space-y-2">
                    {[
                      "Your customers are mostly individual consumers (B2C) who cannot claim input VAT.",
                      "Your profit margins are thin, and adding 16% VAT would make your prices uncompetitive.",
                      "You want the simplest possible compliance — one return, one rate, no input VAT calculations.",
                      "Your annual turnover is well under KES 5 million and not growing rapidly.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[0.85rem] text-ink-soft">
                        <CheckCircle size={15} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-hairline rounded-lg p-5">
                  <p className="font-semibold text-ink text-[0.95rem] mb-2">Consider voluntary VAT registration if:</p>
                  <ul className="space-y-2">
                    {[
                      "Most of your customers are VAT-registered businesses (B2B) who can claim input VAT on your invoices.",
                      "You spend significantly on business purchases (laptops, software, rent, raw materials) and want to claim input VAT back.",
                      "Your annual turnover is close to KES 5 million and will cross the threshold soon — registering now avoids a forced transition later.",
                      "You want to present your business as established and compliant — some large companies and government tenders require suppliers to be VAT-registered.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[0.85rem] text-ink-soft">
                        <CheckCircle size={15} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Real example:</strong> A graphic designer earning KES 3 million/year with KES 1 million in business expenses (software, laptop, internet). On turnover tax: KES 90,000/year (3% of gross). On VAT: KES 320,000 output VAT minus KES 160,000 input VAT = KES 160,000/year + filing costs. TOT is cheaper here. But if the same designer sells mostly to VAT-registered companies that prefer VAT invoices, VAT registration could unlock more contracts.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 — eTIMS */}
          <section id="etims" aria-labelledby="etims-h">
            <h2 id="etims-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              eTIMS Obligations for Small Taxpayers
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Many small business owners believe that because they are not VAT-registered, they do not need eTIMS. This is <strong className="text-ink">incorrect</strong>. The law requires all persons engaged in business in Kenya to use eTIMS — regardless of turnover or VAT status.
              </p>
              <p>
                For small taxpayers, the relevant solution is <strong className="text-ink">eTIMS Lite</strong>, which is free and accessed through a web browser at etims.kra.go.ke. You do not need to install any software. You log in, create invoices, and print or email them to your customers.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "eTIMS Lite is free",
                    desc: "No installation, no subscription. Access it from any device with a browser. KRA provides it at no cost to ensure every business can comply.",
                  },
                  {
                    title: "Issuing invoices to customers",
                    desc: "Every sale must generate an eTIMS invoice. For small businesses, this means logging into eTIMS Lite and creating an invoice for each transaction. For high-volume businesses, consider upgrading to eTIMS Client or POS integration.",
                  },
                  {
                    title: "Penalty for non-compliance",
                    desc: "Issuing invoices outside eTIMS exposes you to the TPA s.86 penalty — the higher of 5% of the tax due, KES 100,000 (companies), or KES 10,000 (individuals) — even if you are on turnover tax. KRA has been conducting compliance checks since January 2026.",
                  },
                  {
                    title: "Your customers may insist on eTIMS invoices",
                    desc: "If you sell to VAT-registered businesses, they need your eTIMS invoice to claim input VAT. They may refuse to pay invoices that are not eTIMS-compliant.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <Warning size={15} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink text-[0.88rem]">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p>
                See our{" "}
                <a href="/resources/etims-onboarding-guide/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  eTIMS onboarding guide
                </a>{" "}
                for step-by-step registration instructions, and our{" "}
                <a href="/resources/etims-penalty-50000-per-month-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  eTIMS penalty guide
                </a>{" "}
                for compliance details.
              </p>
            </div>
          </section>

          {/* Section 5 — Voluntary VAT */}
          <section id="voluntary-vat" aria-labelledby="voluntary-vat-h">
            <h2 id="voluntary-vat-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Voluntary VAT Registration for Small Businesses
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The VAT Act allows businesses with turnover below KES 5 million to voluntarily register for VAT. This is a strategic decision that can benefit certain businesses significantly.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Main benefit: claim input VAT",
                    desc: "If you spend heavily on VAT-able purchases (rent, equipment, software, professional fees, stock), voluntary registration lets you claim that VAT back from KRA. For businesses with significant VAT-able expenses, this can improve cash flow.",
                  },
                  {
                    title: "B2B advantage",
                    desc: "VAT-registered customers prefer suppliers who issue eTIMS-compliant VAT invoices. If most of your revenue comes from other businesses, voluntary VAT registration can make you a preferred supplier.",
                  },
                  {
                    title: "Government and corporate tenders",
                    desc: "Many government contracts and large corporate tenders require suppliers to be VAT-registered. If you are targeting these opportunities, voluntary registration is necessary.",
                  },
                  {
                    title: "Downside: you must charge 16%",
                    desc: "Once registered, you must charge 16% VAT on all taxable supplies. For B2C businesses, this makes your prices 16% higher than competitors on turnover tax. Some small businesses absorb the VAT to stay competitive, which reduces their margin.",
                  },
                  {
                    title: "Compliance burden",
                    desc: "VAT requires monthly filing on iTax, proper eTIMS invoices, and detailed record-keeping. If you register voluntarily, you take on the full compliance burden — including the risk of penalties for late filing or errors.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <Info size={15} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink text-[0.88rem]">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p>
                For a deeper look at whether voluntary registration makes sense for your specific business, read our{" "}
                <a href="/resources/do-i-need-to-register-for-vat-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  guide on whether you need to register for VAT
                </a>.
              </p>
            </div>
          </section>

          {/* Section 6 — Decision */}
          <section id="decision" aria-labelledby="decision-h">
            <h2 id="decision-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How to Choose the Right Tax Regime
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Here is a simple framework. Answer these three questions to determine the right regime for your small business.
              </p>
              <div className="space-y-4">
                {[
                  {
                    q: "Q1: Is your annual turnover above KES 5 million?",
                    a: "If yes, VAT registration is mandatory. If no, you have a choice between TOT and voluntary VAT."
                  },
                  {
                    q: "Q2: Do most of your customers need VAT invoices?",
                    a: "If you sell mainly to other businesses (B2B), voluntary VAT registration gives them input VAT claims and makes you a preferred supplier. If you sell to consumers (B2C), staying on TOT is usually better because your prices stay lower."
                  },
                  {
                    q: "Q3: Do you have significant VAT-able expenses?",
                    a: "If you spend more than 30% of your revenue on purchases that include VAT (rent, equipment, stock, services), voluntary registration lets you claim that VAT back. If your expenses are mostly non-VAT (wages, raw food, transport), you gain little from input VAT claims."
                  },
                ].map(({ q, a }) => (
                  <div key={q} className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                    <p className="font-semibold text-ink text-[0.9rem] mb-2">{q}</p>
                    <p className="text-[0.85rem] text-ink-muted leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
              <p>
                Not sure which regime fits your business? <strong className="text-ink">Smart VAT Kenya</strong> offers a free WhatsApp consultation. We can review your numbers and recommend the right approach — no obligation, no sales pressure.
              </p>
              <div className="mt-8 border border-brand/20 bg-brand-muted rounded-lg p-6">
                <p className="font-display text-[1.15rem] font-semibold text-ink mb-3">Still not sure which regime applies?</p>
                <p className="text-[0.84rem] text-ink-soft leading-relaxed mb-4">
                  Send us a message on WhatsApp. We will help you determine whether you should be on Turnover Tax, voluntary VAT, or mandatory VAT — and handle the entire registration process for you.{" "}
                  <strong className="text-ink">KES 5,000 flat fee</strong> for VAT registration. No hidden costs.
                </p>
                <a
                  href="https://wa.me/254717344440?text=Hi%2C%20I%20want%20to%20find%20out%20which%20tax%20regime%20is%20right%20for%20my%20small%20business."
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
                >
                  Ask on WhatsApp — Free
                  <ArrowRight size={14} weight="bold" aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection faqSchema={faqSchema} />
        </article>

        {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="small-taxpayer-regime-kenya" />
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
