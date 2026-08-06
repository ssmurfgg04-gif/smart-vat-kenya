import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "VAT for Startups and Tech Businesses", item: "https://smartvatkenya.co.ke/resources/vat-for-startups-tech-businesses" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "VAT for Startups and Tech Businesses in Kenya 2026",
  description:
    "Everything Kenyan tech founders need to know about VAT: registration thresholds, digital services, SaaS, software, e-commerce, input VAT on equipment, eTIMS compliance for developers, and how to avoid penalties.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-25",
  dateModified: "2026-07-25",
  url: "https://smartvatkenya.co.ke/resources/vat-for-startups-tech-businesses",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/vat-for-startups-tech-businesses",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does my Kenyan startup need to register for VAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your startup must register for VAT if your annual taxable turnover exceeds KES 5 million. The Finance Act 2025 proposed raising the threshold to KES 8 million, but this has not yet taken effect. Below that threshold, you can voluntarily register — which lets you claim back input VAT on laptops, cloud services, software subscriptions, and other business costs.",
      },
    },
    {
      "@type": "Question",
      name: "Is SaaS or software sold to Kenyan customers subject to VAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Software as a Service (SaaS), mobile apps, web platforms, and digital products sold to Kenyan customers are subject to 16% VAT if you are registered. The supply of digital services, electronically delivered software, and cloud-based subscriptions is treated as a taxable supply under the VAT Act. If you sell to customers outside Kenya, the supply is zero-rated (0%) — you charge no VAT but can still claim input VAT refunds.",
      },
    },
    {
      "@type": "Question",
      name: "Can I claim input VAT on my laptop and cloud costs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, provided you are VAT-registered and the goods or services are used for taxable business purposes. You can claim input VAT on laptops, monitors, servers, cloud hosting (AWS, Azure, Google Cloud, Linode), software subscriptions (Figma, Notion, Slack, GitHub, etc.), office rent (commercial only), internet costs, and consultant fees — provided you have valid eTIMS-compliant invoices from your suppliers.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need eTIMS as a software developer or tech freelancer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Finance Act 2023 requires ALL persons engaged in business — including software developers, tech freelancers, and consultants — to issue invoices through eTIMS. This applies regardless of whether you are VAT-registered. As a developer, eTIMS Lite (free, web-based) is usually the right choice. If you build a custom POS or ERP for clients, those clients may need VSCU/OSCU integration, which you could develop using KRA's eTIMS SDK.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I don't file VAT returns as a startup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Late filing attracts an automatic penalty of KES 10,000 or 5% of the tax due (whichever is higher), plus 1% monthly interest on any unpaid tax. If you are below the threshold but voluntarily registered and have nil activity, you must still file nil returns every month. Skipping nil returns costs KES 10,000 per month — the same penalty as a normal return. Filing consistently also keeps you off KRA's radar for compliance audits.",
      },
    },
    {
      "@type": "Question",
      name: "What tax incentives exist for Kenyan tech startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kenya offers several tax incentives relevant to tech startups. The Startup Act 2022 provides tax relief for qualifying startups, including reduced corporate tax rates and exemptions on certain capital gains. Additionally, the ICT sector benefits from zero-rating on exported digital services, making software sales to overseas clients VAT-free while preserving input VAT recovery. The KRA tax amnesty programme (VTDP) allows startups with past unpaid taxes to disclose voluntarily and have penalties and interest waived. Local tech hubs and incubators may also qualify for tax exemptions under specific regulations.",
      },
    },
  ],
}

const toc = [
  { id: "startup-threshold",    label: "Does Your Startup Need VAT Registration?" },
  { id: "digital-services",     label: "Digital Services, SaaS, and Software" },
  { id: "input-vat",            label: "Input VAT on Tech Equipment and Cloud Costs" },
  { id: "etims-developers",     label: "eTIMS for Developers, Freelancers, and Tech Consultants" },
  { id: "exports",              label: "Selling Software Abroad: Zero-Rated VAT" },
  { id: "penalties",            label: "Avoiding Penalties: Common Startup Mistakes" },
  { id: "tax-incentives",       label: "Tax Incentives for Kenyan Tech Startups" },
  { id: "faq",                  label: "Frequently Asked Questions" },
]

export default function VATForStartupsPage() {
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
            {["Startups", "Tech", "SaaS", "Freelancers", "2026"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            VAT for Startups and Tech Businesses in Kenya 2026
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; KRA-registered VAT agents &mdash; Updated July 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Quick Answer / BLUF */}
        <div className="border-l-[3px] border-brand pl-5 mb-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Quick Answer</p>
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            Your Kenyan tech startup must register for VAT once annual turnover exceeds{" "}
            <strong className="text-ink">KES 5 million</strong> (Finance Act 2025 proposed raising
            this to KES 8 million, but this has not yet taken effect). If you sell{" "}
            <strong className="text-ink">SaaS, software, or digital services</strong> to Kenyan
            customers, charge 16% VAT. Exports are <strong className="text-ink">zero-rated</strong> — no VAT charged,
            but you still claim input VAT refunds. You can claim back VAT on{" "}
            <strong className="text-ink">laptops, cloud hosting, and software tools</strong> with valid
            eTIMS invoices. <strong className="text-ink">Every tech freelancer</strong> needs eTIMS —
            even below the VAT threshold.
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

          {/* Section 1 — Threshold */}
          <section id="startup-threshold" aria-labelledby="startup-threshold-h">
            <h2 id="startup-threshold-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Does Your Startup Need VAT Registration?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The short answer: <strong className="text-ink">not until you hit the threshold</strong>. The current
                mandatory VAT registration threshold is{" "}
                <strong className="text-ink">KES 5 million</strong> in annual taxable turnover. The
                Finance Act 2025 proposed raising this to KES 8 million, but this has not yet taken
                effect. If your startup has been operating for less than 12 months, you estimate your
                projected turnover — if it will exceed KES 5 million, you must register.
              </p>
              <p>
                However, many tech startups choose to <strong className="text-ink">voluntarily register</strong> even
                below the threshold. Why? Because voluntary registration lets you claim back input VAT
                on business expenses — and tech startups tend to have significant expenses in
                equipment, cloud services, and software that carry 16% VAT.
              </p>
              <div className="border border-hairline rounded-lg overflow-hidden">
                <table className="w-full text-[0.83rem]">
                  <thead>
                    <tr className="border-b border-hairline bg-canvas-alt">
                      <th className="text-left p-3.5 font-semibold text-ink">Turnover</th>
                      <th className="text-left p-3.5 font-semibold text-ink">VAT Requirement</th>
                      <th className="text-left p-3.5 font-semibold text-ink">Best Move</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hairline">
                    <tr>
                      <td className="p-3.5 text-ink-muted">Below KES 5M</td>
                      <td className="p-3.5 text-ink-muted">Not required, voluntary only</td>
                      <td className="p-3.5 text-ink-muted">Stay on turnover tax unless you have high expenses</td>
                    </tr>
                    <tr>
                    <td className="p-3.5 text-ink-muted">KES 5M - 8M</td>
                    <td className="p-3.5 text-ink-muted">Mandatory if over KES 5M; transition zone under proposed raise</td>
                      <td className="p-3.5 font-medium text-ink">Consider voluntary registration if spending {'>'} KES 300K/year on VAT-able purchases</td>
                    </tr>
                    <tr>
                    <td className="p-3.5 text-ink-muted">Above KES 8M</td>
                    <td className="p-3.5 text-ink-muted">Mandatory within 30 days (if proposed raise effective)</td>
                      <td className="p-3.5 font-medium text-ink">Register immediately — late registration risks penalties</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                See our full guide for{" "}
                <a href="/resources/do-i-need-to-register-for-vat-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  whether you need to register for VAT
                </a>{" "}
                for a deeper decision framework.
              </p>
            </div>
          </section>

          {/* Section 2 — Digital Services */}
          <section id="digital-services" aria-labelledby="digital-services-h">
            <h2 id="digital-services-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Digital Services, SaaS, and Software — How VAT Applies
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                If your tech startup sells <strong className="text-ink">digital services</strong> to
                Kenyan customers — SaaS subscriptions, mobile apps, software licences, APIs,
                cloud-based platforms, or digital content — the supply is generally subject to{" "}
                <strong className="text-ink">16% VAT</strong> under the VAT Act (Cap. 476).
              </p>
              <p>
                KRA treats digital services as taxable supplies. If your platform charges users a
                monthly subscription (KES 1,000 + 160 VAT = KES 1,160), that KES 160 must be remitted
                to KRA by the 20th of the following month. There is no special "tech exception" or
                reduced rate for software.
              </p>
              <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                <p className="font-semibold text-ink text-[0.88rem] mb-2">Real example: SaaS to Kenyan customers</p>
                <p className="text-[0.85rem] text-ink-muted leading-relaxed">
                  You run a Kenyan-registered SaaS platform charging KES 5,000/month per user.
                  100 Kenyan customers = KES 500,000/month revenue. With VAT: invoice each customer
                  KES 5,800 (5,000 + 800 VAT). Total monthly VAT collected: KES 80,000. You must
                  remit this to KRA by the 20th of the following month via the iTax VAT return and
                  M-PESA Paybill 572572.
                </p>
              </div>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Pricing strategy tip:</strong> Most Kenyan tech startups
                  display prices <strong className="text-ink">exclusive of VAT</strong> (KES 5,000 + VAT)
                  to B2B customers who can claim input VAT. For B2C customers, display inclusive prices
                  (KES 5,800 all-in) to avoid sticker shock at checkout.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 — Input VAT */}
          <section id="input-vat" aria-labelledby="input-vat-h">
            <h2 id="input-vat-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Input VAT on Tech Equipment and Cloud Costs
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                This is where VAT registration works <strong className="text-ink">in your favour</strong>.
                If you are VAT-registered, you can claim back the 16% VAT you paid on just about every
                business expense a tech startup incurs:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { item: "Laptops (MacBooks, ThinkPads, etc.)", note: "16% input VAT reclaimable on each unit" },
                  { item: "Monitors, keyboards, peripherals", note: "Full input VAT recovery" },
                  { item: "Cloud hosting (AWS, Azure, GCP, Linode)", note: "16% back if you have an eTIMS invoice from the reseller" },
                  { item: "Software subscriptions (Figma, Slack, Notion, GitHub)", note: "Input VAT reclaimable on business subscriptions" },
                  { item: "Office internet and utilities", note: "VAT on business internet, electricity, water" },
                  { item: "Coworking space or office rent", note: "Commercial rent attracts 16% VAT — reclaimable" },
                  { item: "Consultant and developer fees", note: "If they charge VAT on their invoices" },
                  { item: "Marketing and advertising costs", note: "Google Ads, Meta Ads, influencer fees with VAT" },
                ].map(({ item, note }) => (
                  <div key={item} className="border border-hairline rounded-md p-3.5">
                    <p className="font-semibold text-ink text-[0.85rem] mb-1">{item}</p>
                    <p className="text-[0.75rem] text-ink-muted">{note}</p>
                  </div>
                ))}
              </div>
              <div className="border border-brand/25 bg-brand-muted rounded-lg p-4 flex items-start gap-3">
                <Info size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-soft leading-relaxed">
                  <strong className="text-ink">Critical:</strong> You can only claim input VAT if you have{" "}
                  <strong className="text-ink">valid eTIMS-compliant invoices</strong> from your suppliers.
                  If you buy a laptop from a store that does not issue eTIMS invoices, you lose the VAT
                  deduction. Always confirm your suppliers are eTIMS-compliant. See our{" "}
                  <a href="/resources/etims-onboarding-guide/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                    eTIMS onboarding guide
                  </a>{" "}
                  for details.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 — eTIMS */}
          <section id="etims-developers" aria-labelledby="etims-developers-h">
            <h2 id="etims-developers-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              eTIMS for Developers, Freelancers, and Tech Consultants
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                If you are a <strong className="text-ink">software developer, tech freelancer, or
                IT consultant</strong> in Kenya, you must onboard eTIMS — even if you are not
                VAT-registered. The Finance Act 2023 requires <strong className="text-ink">every person
                engaged in business</strong> to issue eTIMS-compliant invoices.
              </p>
              <p>
                For most tech freelancers, <strong className="text-ink">eTIMS Lite</strong> is the right
                choice. It is free, web-based, requires no installation, and handles the invoice volume
                most freelancers need. Here is how it affects your work:
              </p>
              <ul className="space-y-3">
                {[
                  "Your invoices must include a KRA-generated QR code and eTIMS server confirmation code — no more handwritten or Word-document invoices.",
                  "Your clients (especially B2B corporate clients) will insist on eTIMS invoices because they need them to claim input VAT.",
                  "A developer building a custom POS, ERP, or e-commerce platform for a client may need to integrate KRA's eTIMS SDK (VSCU/OSCU) into the system.",
                  "KRA offers a sandbox environment for developers to test eTIMS API integration before going live.",
                  "Failure to issue eTIMS-compliant invoices means your clients cannot claim input VAT — which makes you less competitive than developers who do provide compliant invoices.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.88rem] text-ink-soft">
                    <CheckCircle size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">For developer-entrepreneurs:</strong> If you are building
                  an e-commerce platform, POS system, or invoicing app for Kenyan businesses, incorporating
                  eTIMS API integration into your product is a <strong className="text-ink">competitive
                  advantage</strong>. Businesses are actively looking for solutions that are eTIMS-ready
                  out of the box.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 — Exports */}
          <section id="exports" aria-labelledby="exports-h">
            <h2 id="exports-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Selling Software Abroad: Zero-Rated VAT
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                One of the biggest advantages for Kenyan tech startups is that{" "}
                <strong className="text-ink">exported digital services are zero-rated</strong> for
                VAT purposes. This means:
              </p>
              <ul className="space-y-2">
                {[
                  "You charge 0% VAT to customers outside Kenya — your international pricing stays competitive.",
                  "You can still claim input VAT refunds on your business expenses (laptops, cloud, software).",
                  "Your KRA VAT return will show output VAT of KES 0 on exports but input VAT on your purchases — resulting in a refund from KRA.",
                  "You must keep records proving the customer is outside Kenya (IP address, billing address, contract).",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.88rem] text-ink-soft">
                    <CheckCircle size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                <p className="font-semibold text-ink text-[0.88rem] mb-2">Real example: Kenyan SaaS selling globally</p>
                <p className="text-[0.85rem] text-ink-muted leading-relaxed">
                  Your Kenyan tech startup builds a project management tool. You have 200 customers
                  (80 in Kenya, 120 in the US, UK, and Nigeria). Your monthly revenue: KES 1M from
                  Kenyan customers (charge 16% VAT = KES 160,000 to remit) and KES 1.5M from
                  international customers (zero-rated, KES 0 VAT). Your monthly cloud bill on AWS
                  is KES 200,000 with 16% VAT (KES 32,000 input VAT). Result: you remit KES 128,000
                  to KRA (KES 160,000 collected minus KES 32,000 claimed).
                </p>
              </div>
              <p>
                The <strong className="text-ink">refund window</strong> for VAT refunds is now{" "}
                <strong className="text-ink">12 months</strong> (reduced from 24 months by Finance
                Act 2025), so file promptly.
              </p>
            </div>
          </section>

          {/* Section 6 — Penalties */}
          <section id="penalties" aria-labelledby="penalties-h">
            <h2 id="penalties-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Avoiding Penalties: Common Startup Mistakes
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Tech founders are busy building products and often neglect compliance. Here are the
                most common VAT mistakes we see with Kenyan startups:
              </p>
              <div className="space-y-4">
                {[
                  {
                    mistake: 'Assuming "I am a startup, KRA will go easy on me"',
                    fix: "KRA applies the same penalties to startups as to established businesses. There is no startup exemption from late-filing penalties.",
                  },
                  {
                    mistake: 'Not filing nil returns during the "building" phase',
                    fix: "If you registered for VAT but have not launched yet, you still must file nil returns every month. Skipping even one month costs KES 10,000.",
                  },
                  {
                    mistake: "Buying equipment without eTIMS invoices",
                    fix: "Always verify your supplier issues eTIMS-compliant invoices. Without one, you cannot claim input VAT on that KES 200,000 MacBook.",
                  },
                  {
                    mistake: "Paying for cloud services with a personal credit card",
                    fix: "Use business accounts and ensure the invoice is in your business name with your KRA PIN. Personal cloud subscriptions do not qualify for input VAT claims.",
                  },
                  {
                    mistake: "Missing the 20th deadline because of international travel",
                    fix: "File early. The iTax portal is accessible from anywhere. Smart VAT Kenya files on the 17th of every month for our clients.",
                  },
                  {
                    mistake: "Not applying for the tax amnesty to clean up past non-compliance",
                    fix: "If you missed returns before getting organised, the KRA Voluntary Tax Disclosure Programme (VTDP) waives all penalties and interest — you only pay the principal tax.",
                  },
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

          {/* Section 7 — Tax Incentives */}
          <section id="tax-incentives" aria-labelledby="tax-incentives-h">
            <h2 id="tax-incentives-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Tax Incentives for Kenyan Tech Startups
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The Kenyan government has introduced several incentives relevant to tech startups.
                Here is what you should know:
              </p>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink text-[0.88rem] mb-1">Startup Act 2022</p>
                  <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                    The Startup Act provides a legal framework for recognised startups, including access
                    to tax incentives, simplified registration, and support from the National Startup
                    Council. Qualifying startups may benefit from reduced corporate tax rates and
                    exemptions on certain capital gains. Registration is via the startup registry
                    administered by the Ministry of Information, Communications and the Digital Economy.
                  </p>
                </div>
              </div>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink text-[0.88rem] mb-1">ICT Sector Zero-Rating</p>
                  <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                    Digital services exported outside Kenya are zero-rated for VAT. This is not a
                    special incentive — it is standard VAT treatment for exports — but it is
                    particularly valuable for tech startups with international customers. Combined
                    with input VAT recovery on local expenses, it can result in a net VAT refund
                    from KRA, improving your runway.
                  </p>
                </div>
              </div>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink text-[0.88rem] mb-1">KRA Tax Amnesty (VTDP)</p>
                  <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                    If your startup has unpaid taxes from earlier months, the Voluntary Tax Disclosure
                    Programme lets you disclose voluntarily and have all penalties and interest waived.
                    You only pay the principal tax. See our{" "}
                    <a href="/resources/nil-returns-tax-amnesty/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                      nil returns and tax amnesty guide
                    </a>{" "}
                    for details on applying.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection faqSchema={faqSchema} />
        </article>

        {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="vat-for-startups-tech-businesses" />
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
