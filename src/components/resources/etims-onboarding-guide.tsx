import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"
import { Flowchart, ETIMSSolutionFlow, ETIMSOnboardingFlow } from "@/components/flowcharts"
import { Accordion } from "@/components/accordion"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "eTIMS Kenya Onboarding Guide 2026", item: "https://smartvatkenya.co.ke/resources/etims-onboarding-guide" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "eTIMS Kenya Onboarding Guide 2026: How to Register for KRA Electronic Tax Invoicing",
  description:
    "Complete step-by-step guide to eTIMS onboarding in Kenya. What eTIMS is, which solution type fits your business, how to register on iTax, and the penalties for non-compliance.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-01",
  dateModified: "2026-07-24",
  url: "https://smartvatkenya.co.ke/resources/etims-onboarding-guide",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/etims-onboarding-guide",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need eTIMS if my business is not VAT-registered?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Finance Act 2023 (Section 23A of the Tax Procedures Act) requires ALL persons engaged in business to use eTIMS — not only VAT-registered businesses. This includes turnover tax payers, rental income earners, informal sector businesses, and professionals. If you sell goods or services in Kenya, you must issue eTIMS-compliant invoices.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between eTIMS Lite and eTIMS Client?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "eTIMS Lite is a free web-based solution accessed through a browser — ideal for small businesses issuing fewer than 50 invoices per month. eTIMS Client is a downloadable desktop application for Windows with more features, suitable for medium-volume businesses that need offline capability, inventory management, and customer records. Both transmit invoices to KRA in real time.",
      },
    },
    {
      "@type": "Question",
      name: "What is the penalty for not registering for eTIMS in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The eTIMS penalties with clear legal footing are: higher of KES 1,000,000 or 10% of the tax involved per non-compliant invoice (Tax Procedures (Electronic Tax Invoice) Regulations, LN 64/2024); higher of KES 100,000 or twice the tax for failing to keep or issue the required invoices (TPA s.86); and KES 500,000 per month for failing to integrate a data-management system once notified (TPA s.25(12)). Additionally, input VAT claims are blocked for invoices not transmitted through eTIMS. A KES 50,000-per-month figure circulates in some guidance but is not a standalone statutory penalty under the ETI Regulations.",
      },
    },
    {
      "@type": "Question",
      name: "How do I register for eTIMS on iTax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Log in to itax.kra.go.ke, go to the eTIMS menu under Returns, select the eTIMS solution that fits your business (Lite, Client, Trader, or VSCU/OSCU), complete the registration form, and submit. KRA will approve your application and send login credentials to your registered email. You can then access the system at etims.kra.go.ke.",
      },
    },
    {
      "@type": "Question",
      name: "What information must appear on an eTIMS invoice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every eTIMS invoice must include: the seller's registered business name and KRA PIN, the buyer's KRA PIN (for B2B transactions above KES 10,000), a sequentially numbered eTIMS invoice number, the invoice date, a full description of goods or services, the quantity and unit price, the tax rate (16%, 8%, or 1.5%), the VAT amount in both words and figures, a unique QR code, and the eTIMS server confirmation code.",
      },
    },
    {
      "@type": "Question",
      name: "Can I integrate eTIMS with my existing POS system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. KRA provides the Virtual Sales Control Unit (VSCU) and Online Sales Control Unit (OSCU) API for businesses with existing POS or ERP systems. Your software developer integrates the KRA eTIMS SDK into your system so that every sale automatically generates an eTIMS-compliant invoice. If integration fails or you operate without it after the deadline, the penalty is KES 500,000 per month.",
      },
    },
    {
      "@type": "Question",
      name: "Does Smart VAT Kenya help with eTIMS onboarding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Smart VAT Kenya includes eTIMS onboarding guidance as part of our KES 5,000 VAT registration package. We help you identify the correct eTIMS solution for your business, assist with the iTax registration, and walk you through issuing your first eTIMS invoice. For businesses that already have a VAT PIN but need eTIMS help, we offer standalone eTIMS onboarding support at a flat rate.",
      },
    },
  ],
}

const toc = [
  { id: "what-is-etims",     label: "What Is eTIMS?" },
  { id: "legal-basis",       label: "Legal Basis: Finance Act 2023" },
  { id: "who-must-register", label: "Which Businesses Must Register?" },
  { id: "solution-types",    label: "eTIMS Solution Types Explained" },
  { id: "step-by-step",      label: "Step-by-Step Onboarding Process" },
  { id: "invoice-fields",    label: "Mandatory eTIMS Invoice Fields" },
  { id: "penalties",         label: "Penalties for Non-Compliance" },
  { id: "faq",               label: "Frequently Asked Questions" },
]

export default function ETIMSOnboardingPage() {
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
            {["eTIMS", "KRA", "iTax", "2026", "Finance Act 2023"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            eTIMS Kenya Onboarding Guide 2026: How to Register for KRA Electronic Tax Invoicing
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; KRA-registered VAT agents &mdash; Updated July 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Quick Answer / BLUF */}
        <div className="border-l-[3px] border-brand pl-5 mb-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Quick Answer</p>
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            eTIMS (Electronic Tax Invoice Management System) is KRA's mandatory platform for real-time invoice transmission. From January 2026,{" "}
            <strong className="text-ink">every business in Kenya</strong> — whether VAT-registered or not — must issue invoices through eTIMS. Choose from{" "}
            <strong className="text-ink">eTIMS Lite</strong> (free, web-based), <strong className="text-ink">eTIMS Client</strong> (desktop app),{" "}
            <strong className="text-ink">eTIMS Trader</strong> (importers), or <strong className="text-ink">VSCU/OSCU</strong> (POS integration). Registration is done on the{" "}
            <strong className="text-ink">KRA iTax portal</strong>, and failing to issue compliant invoices attracts penalties under the
            ETI Regulations (higher of <strong className="text-ink">KES 1,000,000 or 10% of the tax per invoice</strong>) and TPA s.86.
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

          {/* Section 1 — What Is eTIMS? */}
          <section id="what-is-etims" aria-labelledby="what-is-etims-h">
            <h2 id="what-is-etims-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What Is eTIMS?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                eTIMS stands for the <strong className="text-ink">Electronic Tax Invoice Management System</strong>. It is a KRA platform that requires every business in Kenya to issue, transmit, and store tax invoices electronically in real time. Unlike the old system where you could issue handwritten or typed invoices and submit them later, eTIMS sends each invoice to KRA's servers the moment you create it.
              </p>
              <p>
                The system generates a <strong className="text-ink">unique QR code</strong> and an <strong className="text-ink">eTIMS server confirmation code</strong> for every invoice. This allows KRA, your customers, and any auditor to verify the invoice instantly by scanning the QR code. It also means KRA can see your sales in real time — there is no gap between when you make a sale and when KRA knows about it.
              </p>
              <p>
                eTIMS is <strong className="text-ink">not optional</strong>. The Finance Act 2023 amended the Tax Procedures Act to make eTIMS mandatory for all persons engaged in business. Enforcement began in earnest from January 2026, and KRA has been conducting nationwide compliance checks. Businesses that have not onboarded face escalating penalties.
              </p>
              <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                <p className="font-semibold text-ink text-[0.88rem] mb-2">Why KRA introduced eTIMS</p>
                <p className="text-[0.85rem] text-ink-muted leading-relaxed">
                  Kenya has a large informal sector and historically low VAT compliance. By capturing invoice data in real time, KRA can track sales across the supply chain, detect under-reporting, and close the VAT gap. eTIMS also reduces the administrative burden on compliant businesses by replacing paper-based record-keeping with an automated digital trail.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 — Legal Basis */}
          <section id="legal-basis" aria-labelledby="legal-basis-h">
            <h2 id="legal-basis-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Legal Basis: Finance Act 2023
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The legal foundation for eTIMS is <strong className="text-ink">Section 23A of the Tax Procedures Act (TPA)</strong>, which was introduced by the <strong className="text-ink">Finance Act 2023</strong>. This section empowers KRA to prescribe the manner in which tax invoices must be issued, transmitted, and stored electronically.
              </p>
              <p>
                The key provisions state that every person engaged in business must use KRA-approved electronic systems to issue tax invoices and transmit invoice data to KRA in real time. The Commissioner may prescribe different electronic systems for different classes of taxpayers, which is why KRA developed the multiple eTIMS solution types.
              </p>
              <p>
                Additionally, <strong className="text-ink">Section 43 of the TPA</strong> grants KRA access to business premises and electronic records for inspection. KRA compliance officers have been using this power to conduct physical visits to business premises, verify eTIMS registration, and compare physical stock against eTIMS-reported sales.
              </p>
              <div className="border border-canvas-warm bg-[#fffbf0] dark:bg-[#2a1f00] dark:border-[#4a3800] rounded-lg p-4 flex items-start gap-3">
                <Warning size={17} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#7a5500] dark:text-[#ffcc44] text-[0.85rem] mb-1">
                    Enforcement from January 2026
                  </p>
                  <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                    After a phased rollout starting in 2024 and a period of education and grace, KRA began full enforcement in January 2026. Compliance checks, desk audits, and field visits have intensified. If you have not yet onboarded, you are already accruing penalties.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 — Who Must Register */}
          <section id="who-must-register" aria-labelledby="who-must-register-h">
            <h2 id="who-must-register-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Which Businesses Must Register for eTIMS?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The short answer: <strong className="text-ink">every person engaged in business</strong>. Unlike VAT registration, which is triggered by a KES 5 million turnover threshold, eTIMS applies to ALL businesses regardless of size or turnover. This includes:
              </p>
              <ul className="space-y-3">
                {[
                  "VAT-registered businesses — mandatory under any circumstances.",
                  "Turnover tax (TOT) payers with turnover below KES 5 million.",
                  "Rental income earners — including landlords with residential or commercial properties.",
                  "Informal sector businesses — kiosks, market vendors, mechanics, salons, and boda boda operators if they supply goods or services.",
                  "Professionals — lawyers, accountants, consultants, doctors, and architects issuing invoices for services.",
                  "Wholesalers and distributors — especially those dealing with fast-moving consumer goods (FMCG).",
                  "Importers and exporters — eTIMS Trader solution integrates with customs data.",
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
                  <strong className="text-ink">Important:</strong> If you issue an invoice that is not transmitted through eTIMS, your customer cannot claim input VAT on that invoice. This means your B2B customers will insist on eTIMS invoices — otherwise they lose their VAT deduction. Market pressure alone is driving many businesses to register.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 — eTIMS Solution Types */}
          <Flowchart caption="eTIMS solution selector — find the right option for your business">
            <ETIMSSolutionFlow />
          </Flowchart>
          <section id="solution-types" aria-labelledby="solution-types-h">
            <h2 id="solution-types-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              eTIMS Solution Types Explained
            </h2>
            <p className="text-[0.9rem] text-ink-soft leading-relaxed mb-6">
              KRA offers five eTIMS solutions. The right one depends on your business type, transaction volume, and whether you have existing systems.
            </p>
            <div className="space-y-5">
              {[
                {
                  name: "eTIMS Lite (Free — Web-Based)",
                  ideal: "Small businesses, sole traders, informal sector",
                  detail: "eTIMS Lite is a free web application you access through any browser at etims.kra.go.ke. You log in, create invoices manually, and print or email them to your customers. Suitable for businesses issuing fewer than 50 invoices per month. No installation required. Ideal for non-VAT-registered businesses and turnover tax payers.",
                },
                {
                  name: "eTIMS Client (Desktop Application)",
                  ideal: "Medium-volume businesses",
                  detail: "A downloadable Windows desktop application that stores your customer list and product catalogue locally. Supports offline invoice creation with automatic sync when you reconnect. Better suited for businesses issuing 50 to 500 invoices per month. Includes inventory management and basic sales reporting.",
                },
                {
                  name: "eTIMS Trader (Customs Integration)",
                  ideal: "Importers, wholesalers, and large distributors",
                  detail: "Built for businesses that import goods and sell through the supply chain. eTIMS Trader integrates with the KRA customs system (iCMS), allowing invoices to reference import documents. Designed for high-volume wholesale operations where goods move with pre-generated eTIMS invoices from the point of clearance.",
                },
                {
                  name: "VSCU / OSCU (POS Integration)",
                  ideal: "Retailers, supermarkets, restaurants with existing POS or ERP",
                  detail: "The Virtual Sales Control Unit (VSCU) and Online Sales Control Unit (OSCU) are API-based solutions. A software developer integrates the KRA eTIMS SDK into your existing Point-of-Sale or Enterprise Resource Planning system. Every transaction on your POS automatically generates an eTIMS-compliant invoice in the background. This is the most seamless option but requires technical integration.",
                },
                {
                  name: "Buyer Initiated Invoicing (BII)",
                  ideal: "Buyers who purchase from small suppliers not yet on eTIMS",
                  detail: "Under this model, a VAT-registered buyer can generate and transmit an eTIMS invoice on behalf of a small supplier who is not yet on the system. This allows the buyer to still claim input VAT while giving the supplier time to onboard. The supplier gets a notification and must accept or reject the invoice. BII is a transitional solution — the supplier is expected to register for eTIMS within a reasonable period.",
                },
              ].map(({ name, ideal, detail }) => (
                <div key={name} className="border border-hairline rounded-lg p-5">
                  <p className="font-semibold text-ink text-[0.95rem] mb-1">{name}</p>
                  <p className="text-[0.75rem] font-mono uppercase tracking-widest text-brand mb-3">Best for: {ideal}</p>
                  <p className="text-[0.85rem] text-ink-muted leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 border border-hairline rounded-lg p-5 bg-canvas-alt">
              <p className="font-semibold text-ink text-[0.88rem] mb-2">Not sure which one you need?</p>
                <p className="text-[0.84rem] text-ink-soft leading-relaxed mb-3">
                  Most small businesses should start with eTIMS Lite because it is free and requires no installation. If you outgrow it, KRA allows you to upgrade to eTIMS Client or VSCU later. See our{" "}<a href="/resources/etims-invoicing-guide/" className="text-brand underline underline-offset-2 hover:text-brand-hover">invoicing guide</a>{" "}for mandatory invoice fields and QR code verification. Smart VAT Kenya can help you choose the right solution and complete the registration.
                </p>
              <a
                href="https://wa.me/254721725958?text=I%20need%20help%20choosing%20the%20right%20eTIMS%20solution%20for%20my%20business"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
              >
                Get Help Choosing
                <ArrowRight size={14} weight="bold" aria-hidden="true" />
              </a>
            </div>
          </section>

          <Flowchart caption="eTIMS onboarding process — 4 stages from registration to first invoice">
            <ETIMSOnboardingFlow />
          </Flowchart>

          {/* Section 5 — Step-by-Step Onboarding */}
          <section id="step-by-step" aria-labelledby="step-by-step-h">
            <h2 id="step-by-step-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Step-by-Step eTIMS Onboarding Process
            </h2>
            <p className="text-[0.9rem] text-ink-soft leading-relaxed mb-6">
              The onboarding process has two parts: registering on iTax, and then setting up your actual eTIMS account at etims.kra.go.ke.
            </p>
            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: "Log in to itax.kra.go.ke",
                  title: "Log in to itax.kra.go.ke",
                  detail: "Use your KRA PIN and password. If you do not have a KRA PIN, register for one first at the iTax portal under 'New PIN Registration'.",
                },
                {
                  step: 2,
                  title: "Navigate to the eTIMS menu",
                  detail: "Under the 'Returns' tab, click 'eTIMS'. If you do not see this menu option, your browser may need to be updated, or you may need to enable pop-ups for the iTax domain.",
                },
                {
                  step: 3,
                  title: "Select your eTIMS solution type",
                  detail: "Choose from eTIMS Lite, eTIMS Client, eTIMS Trader, or VSCU/OSCU. Read the descriptions carefully — selecting the wrong type may require a fresh application. If unsure, start with eTIMS Lite.",
                },
                {
                  step: 4,
                  title: "Complete the registration form",
                  detail: "Fill in your business details including your registered business name, physical location, line of business, and estimated monthly invoice volume. For VSCU/OSCU, you must also provide your system integrator's details and the software vendor name.",
                },
                {
                  step: 5,
                  title: "Upload any required documents",
                  detail: "For eTIMS Client and Trader, you may need to upload your KRA PIN certificate, business registration certificate, and a signed declaration. For VSCU/OSCU, include the system integrator agreement.",
                },
                {
                  step: 6,
                  title: "Submit and wait for KRA approval",
                  detail: "KRA typically approves eTIMS applications within 1 to 3 working days. You will receive an email notification with your eTIMS login credentials and a link to access the system at etims.kra.go.ke.",
                },
                {
                  step: 7,
                  title: "Log in to etims.kra.go.ke and set up your account",
                  detail: "Use the credentials sent to your email. On your first login, you must change your password and set up your security questions. Then configure your business profile, add your product or service catalogue, and create your customer list.",
                },
                {
                  step: 8,
                  title: "Issue your first eTIMS invoice",
                  detail: "Create a test invoice to ensure the system is working. Enter the customer details, describe the goods or services, apply the correct tax rate, and generate the invoice. Confirm that the QR code and server confirmation code appear on the printed invoice. Verify the invoice by scanning the QR code with KRA's eTIMS verification app.",
                },
              ].map(({ step, title, detail }) => (
                <div key={step} className="flex gap-4">
                  <span className="bg-ink text-canvas rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 tabular-nums">{step}</span>
                  <div>
                    <p className="font-semibold text-ink text-[0.9rem]">{title}</p>
                    <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{detail}</p>
                    {step === 1 && (
                      <p className="text-[0.78rem] text-ink-muted mt-2 leading-relaxed">
                        Portal not loading? See our{" "}
                        <a href="/resources/itax-portal-not-working/" className="text-brand underline underline-offset-2 hover:text-brand-hover">iTax troubleshooting guide</a>.
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-7 border border-brand/20 bg-brand-muted rounded-lg p-5">
              <p className="font-semibold text-ink text-[0.88rem] mb-2">We Can Do This for You</p>
              <p className="text-[0.84rem] text-ink-soft leading-relaxed mb-4">
                Smart VAT Kenya handles eTIMS onboarding as part of our VAT registration package (KES 5,000 flat fee). If you already have a VAT PIN, we offer standalone eTIMS onboarding at a competitive rate. We identify the right solution, complete your iTax application, and walk you through your first invoice.
              </p>
              <a
                href="https://wa.me/254721725958?text=I%20need%20help%20with%20eTIMS%20onboarding%20for%20my%20business"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
              >
                Start eTIMS Onboarding — WhatsApp Us
                <ArrowRight size={14} weight="bold" aria-hidden="true" />
              </a>
            </div>
          </section>

          {/* Section 6 — Mandatory Invoice Fields */}
          <section id="invoice-fields" aria-labelledby="invoice-fields-h">
            <h2 id="invoice-fields-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Mandatory eTIMS Invoice Fields
            </h2>
            <p className="text-[0.9rem] text-ink-soft leading-relaxed mb-5">
              Every eTIMS invoice must contain the following fields. If any of these are missing, KRA will treat the invoice as invalid and your customer (if B2B) will lose their input VAT claim.
            </p>
            <div className="space-y-3">
              {[
                { field: "Seller's registered business name and KRA PIN", note: "Must match the name on your KRA PIN certificate exactly." },
                { field: "Buyer's KRA PIN (for B2B transactions above KES 10,000)", note: "Required for all B2B sales exceeding KES 10,000. For B2C sales, record the buyer's name and ID number." },
                { field: "Sequential eTIMS invoice number", note: "Generated automatically by the eTIMS system. Do not create your own numbering system." },
                { field: "Invoice date", note: "The actual date of the transaction. Backdating or forward-dating invoices is an offence." },
                { field: "Full description of goods or services", note: "Generic descriptions like 'miscellaneous' or 'services rendered' may be rejected by KRA on audit." },
                { field: "Quantity and unit price", note: "Clearly state the quantity of each item and the unit price excluding VAT." },
                { field: "Tax rate and VAT amount", note: "16% standard rate, 8% for supplies to unregistered persons (if applicable), or 1.5% for special cases. Show the VAT amount in both words and figures." },
                { field: "Total amount including VAT", note: "The gross amount the customer must pay." },
                { field: "QR code", note: "KRA's encrypted QR code containing the invoice metadata. Scannable via the eTIMS verification app." },
                { field: "eTIMS server confirmation code", note: "A unique alphanumeric code generated by the KRA server confirming the invoice was transmitted successfully." },
              ].map(({ field, note }) => (
                <div key={field} className="flex items-start gap-3 border border-hairline rounded-md p-3.5">
                  <CheckCircle size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink text-[0.88rem]">{field}</p>
                    <p className="text-[0.8rem] text-ink-muted mt-0.5">{note}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-7 border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
              <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                <strong className="text-ink">Pro tip:</strong> Always verify your eTIMS invoice by scanning the QR code using KRA's free verification app before sending it to your customer. A failing QR code means the invoice was not transmitted to KRA and is not valid for input VAT claims.
              </p>
            </div>
          </section>

          {/* Section 7 — Penalties */}
          <section id="penalties" aria-labelledby="penalties-h">
            <h2 id="penalties-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Penalties for eTIMS Non-Compliance
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                KRA has made it clear that eTIMS compliance is not optional. The penalties are designed to make non-compliance financially painful. Here is what you face if you do not onboard.
              </p>
              <div className="border border-hairline rounded-lg overflow-hidden">
                <table className="w-full text-[0.83rem]">
                  <thead>
                    <tr className="border-b border-hairline bg-canvas-alt">
                      <th className="text-left p-3.5 font-semibold text-ink">Offence</th>
                      <th className="text-right p-3.5 font-semibold text-ink">Penalty</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hairline">
                    {[
                      { off: "Non-compliant eTIMS invoice issued (incl. unregistered / outside-system sales)", cost: "Higher of KES 1,000,000 or 10% of tax per invoice (LN 64/2024)" },
                      { off: "Failure to keep or issue required invoices", cost: "Higher of KES 100,000 or 2x tax (TPA s.86)" },
                      { off: "System integration not completed after written notice", cost: "KES 500,000 per month (TPA s.25(12))" },
                      { off: "Issuing invoices outside eTIMS", cost: "Input VAT blocked + audit adjustment" },
                      { off: "Non-compliance found on audit", cost: "50% surcharge on additional assessment" },
                      { off: "Incorrect or incomplete invoice fields", cost: "KES 10,000 per invoice" },
                    ].map(({ off, cost }) => (
                      <tr key={off}>
                        <td className="p-3.5 text-ink-muted">{off}</td>
                        <td className="p-3.5 text-right font-medium text-[#b03030]">{cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="border border-canvas-warm bg-[#fffbf0] dark:bg-[#2a1f00] dark:border-[#4a3800] rounded-lg p-4 flex items-start gap-3">
                <Warning size={17} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#7a5500] dark:text-[#ffcc44] text-[0.85rem] mb-1">
                    Cumulative effect
                  </p>
                  <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                    The penalties stack. If you have been operating without eTIMS for 6 months, you owe KES 300,000 just for the non-registration penalty, plus 50% surcharge on any audit adjustments, plus interest. Do not wait for KRA to find you — onboard now.
                  </p>
                </div>
              </div>
              <div className="border border-brand/25 bg-brand-muted rounded-lg p-4 flex items-start gap-3">
                <Warning size={17} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-soft leading-relaxed">
                  <strong className="text-ink">Input VAT claims blocked:</strong> Even if you are VAT-registered and file your returns on time, if your purchases are from suppliers who are not using eTIMS, you cannot claim input VAT on those purchases. This creates a cascading compliance pressure through the entire supply chain. See our{" "}
                  <a href="/resources/how-to-register-for-vat-in-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                    VAT registration guide
                  </a>{" "}
                  and our{" "}
                  <a href="/resources/etims-penalty-50000-per-month-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                    eTIMS penalty guide
                  </a>{" "}
                  for details. Also note that eTIMS compliance is now a requirement for getting a{" "}
                  <a href="/resources/tax-compliance-certificate-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover font-medium">KRA Tax Compliance Certificate (TCC)</a>.
                </p>
              </div>
            </div>
          </section>

          {/* KRA Official Resources */}
          <section aria-labelledby="kra-resources-h" className="not-prose">
            <h2 id="kra-resources-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              KRA eTIMS Official Resources
            </h2>
            <p className="text-[0.9rem] text-ink-soft leading-relaxed mb-5">
              KRA publishes detailed guides for each eTIMS solution. These are the official PDFs — we have summarised
              the key takeaways for each below. Click to expand and download the full guide.
            </p>
            <Accordion
              title="eTIMS GUIDES &amp; MANUALS"
              items={[
                {
                  summary: (
                    <span><strong className="text-ink">eTIMS Application Procedure</strong> <span className="text-ink-muted font-normal">— 8 pages</span></span>
                  ),
                  content: (
                    <div className="text-[0.83rem] text-ink-muted space-y-2 leading-relaxed">
                      <p>Complete walk-through of the eTIMS onboarding process from start to finish:</p>
                      <ul className="space-y-1.5 pl-4">
                        <li className="list-disc">Signing up on the eTIMS portal at <code className="text-[0.75rem] bg-canvas-alt px-1 py-0.5 rounded">etims.kra.go.ke</code></li>
                        <li className="list-disc">Submitting your application with business details and KRA PIN</li>
                        <li className="list-disc">KRA officer review and approval process</li>
                        <li className="list-disc">Activating your account and setting up your profile</li>
                      </ul>
                      <p className="pt-2">
                        <a href="/forms/kra-etims-onboarding-procedure-guide.pdf" target="_blank" rel="noopener noreferrer"
                          className="text-brand font-medium hover:underline inline-flex items-center gap-1">
                          Download PDF <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M6 0v8M2 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </a>
                      </p>
                    </div>
                  ),
                },
                {
                  summary: (
                    <span><strong className="text-ink">eTIMS Online Portal User Guide</strong> <span className="text-ink-muted font-normal">— 11 pages</span></span>
                  ),
                  content: (
                    <div className="text-[0.83rem] text-ink-muted space-y-2 leading-relaxed">
                      <p>Detailed guide for businesses using the eTIMS Online Portal (service-only suppliers):</p>
                      <ul className="space-y-1.5 pl-4">
                        <li className="list-disc">Logging in for the first time and resetting your password</li>
                        <li className="list-disc">Classifying your inventory items by product type and tax rate</li>
                        <li className="list-disc">Raising single and bulk invoices with the correct mandatory fields</li>
                        <li className="list-disc">Printing invoices with QR codes and emailing them to customers</li>
                      </ul>
                      <p className="pt-2">
                        <a href="/forms/kra-etims-online-portal-guide.pdf" target="_blank" rel="noopener noreferrer"
                          className="text-brand font-medium hover:underline inline-flex items-center gap-1">
                          Download PDF <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M6 0v8M2 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </a>
                      </p>
                    </div>
                  ),
                },
                {
                  summary: (
                    <span><strong className="text-ink">eTIMS Lite (VAT) User Guide</strong> <span className="text-ink-muted font-normal">— 29 pages</span></span>
                  ),
                  content: (
                    <div className="text-[0.83rem] text-ink-muted space-y-2 leading-relaxed">
                      <p>Comprehensive guide for small taxpayers using eTIMS Lite from a phone or browser:</p>
                      <ul className="space-y-1.5 pl-4">
                        <li className="list-disc">How eTIMS Lite differs from the full eTIMS Client application</li>
                        <li className="list-disc">Issue invoices, credit notes, and receipts from any device</li>
                        <li className="list-disc">Managing your product catalogue and customer list</li>
                        <li className="list-disc">Generating sales reports for your own record-keeping</li>
                      </ul>
                      <p className="pt-2">
                        <a href="/forms/kra-etims-lite-vat-guide.pdf" target="_blank" rel="noopener noreferrer"
                          className="text-brand font-medium hover:underline inline-flex items-center gap-1">
                          Download PDF <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M6 0v8M2 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </a>
                      </p>
                    </div>
                  ),
                },
                {
                  summary: (
                    <span><strong className="text-ink">OSCU / VSCU Sign-Up Guide</strong> <span className="text-ink-muted font-normal">— 13 pages</span></span>
                  ),
                  content: (
                    <div className="text-[0.83rem] text-ink-muted space-y-2 leading-relaxed">
                      <p>For businesses integrating eTIMS with existing POS or ERP systems:</p>
                      <ul className="space-y-1.5 pl-4">
                        <li className="list-disc">Step-by-step sign-up for Online Sales Control Unit (OSCU) and Virtual Sales Control Unit (VSCU)</li>
                        <li className="list-disc">API integration requirements and SDK documentation</li>
                        <li className="list-disc">Testing and certification process before going live</li>
                        <li className="list-disc">Penalties for operating an uncertified system: KES 500,000 per month</li>
                      </ul>
                      <p className="pt-2">
                        <a href="/forms/kra-etims-oscu-vscu-guide.pdf" target="_blank" rel="noopener noreferrer"
                          className="text-brand font-medium hover:underline inline-flex items-center gap-1">
                          Download PDF <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M6 0v8M2 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </a>
                      </p>
                    </div>
                  ),
                },
                {
                  summary: (
                    <span><strong className="text-ink">eTIMS PayPoint Guides</strong> <span className="text-ink-muted font-normal">— Windows (34pp) + Android (30pp)</span></span>
                  ),
                  content: (
                    <div className="text-[0.83rem] text-ink-muted space-y-2 leading-relaxed">
                      <p>Full installation and usage manuals for the eTIMS PayPoint application:</p>
                      <ul className="space-y-1.5 pl-4">
                        <li className="list-disc">Installing eTIMS PayPoint on Windows POS terminals and Android phones</li>
                        <li className="list-disc">Configuring taxes, printers, and receipt templates</li>
                        <li className="list-disc">Daily sales reconciliation and Z-report generation</li>
                        <li className="list-disc">Offline mode — invoices are queued and synced when connectivity returns</li>
                      </ul>
                      <div className="flex gap-4 pt-2">
                        <a href="/forms/kra-etims-paypoint-windows-guide.pdf" target="_blank" rel="noopener noreferrer"
                          className="text-brand text-[0.8rem] font-medium hover:underline inline-flex items-center gap-1">
                          Windows PDF <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M6 0v8M2 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </a>
                        <a href="/forms/kra-etims-paypoint-android-guide.pdf" target="_blank" rel="noopener noreferrer"
                          className="text-brand text-[0.8rem] font-medium hover:underline inline-flex items-center gap-1">
                          Android PDF <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M6 0v8M2 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </a>
                      </div>
                    </div>
                  ),
                },
                {
                  summary: (
                    <span><strong className="text-ink">eTIMS Onboarding Guidelines</strong> <span className="text-ink-muted font-normal">— 4 pages</span></span>
                  ),
                  content: (
                    <div className="text-[0.83rem] text-ink-muted space-y-2 leading-relaxed">
                      <p>Quick-reference eligibility guide for every eTIMS solution type:</p>
                      <ul className="space-y-1.5 pl-4">
                        <li className="list-disc">eTIMS Lite: free web-based, for businesses with fewer than 50 invoices per month</li>
                        <li className="list-disc">eTIMS Client: desktop application for medium-volume businesses</li>
                        <li className="list-disc">eTIMS Online Portal: for service-only suppliers</li>
                        <li className="list-disc">VSCU / OSCU: API integration for businesses with existing POS/ERP</li>
                      </ul>
                      <p className="pt-2">
                        <a href="/forms/kra-etims-onboarding-guidelines.pdf" target="_blank" rel="noopener noreferrer"
                          className="text-brand font-medium hover:underline inline-flex items-center gap-1">
                          Download PDF <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M6 0v8M2 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </a>
                      </p>
                    </div>
                  ),
                },
              ]}
            />
          </section>

          {/* FAQ */}
          <FAQSection faqSchema={faqSchema} />
        </article>

        {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-3">More Guides</p>
          <div className="mb-6">
            <p className="text-[0.83rem] text-ink-muted leading-relaxed">
              Looking further ahead?{" "}
              <a href="/resources/cetis-kenya-2027/" className="text-brand underline underline-offset-2 hover:text-brand-hover">CETIS Kenya 2027</a>{" "}
              is KRA&apos;s planned pre-clearance e-invoicing system (in procurement for 2027&ndash;28) — get the current eTIMS base right first, and you skip the scramble when it lands.
            </p>
          </div>
          <ArticleGrid currentSlug="etims-onboarding-guide" />
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
