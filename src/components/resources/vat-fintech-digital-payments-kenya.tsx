import { ArrowLeft, ArrowRight, Warning, CheckCircle, Info } from "@phosphor-icons/react/dist/ssr"
import { NewsletterSignup } from "@/components/newsletter-signup"

import { ArticleGrid } from "@/lib/resources"

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "VAT on Fintech and Digital Payments in Kenya 2026",
  description:
    "Finance Act 2026 made payment processing, gateway, and merchant acquisition services taxable at 16% VAT from 1 July 2026. Guide covering M-Pesa merchant fees, Pesapal, iPay, Flutterwave, and all digital payment VAT changes.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-25",
  dateModified: "2026-07-25",
  url: "https://smartvatkenya.co.ke/resources/vat-fintech-digital-payments-kenya",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/vat-fintech-digital-payments-kenya",
}

const faqs = [
  {
    q: "Is VAT charged on M-Pesa transactions in Kenya?",
    a: "Standard M-Pesa person-to-person transfers (send money) remain exempt from VAT. However, the merchant service fee that Safaricom charges businesses for M-Pesa till and paybill transactions is now subject to 16% VAT under the Finance Act 2026, effective 1 July 2026.",
  },
  {
    q: "Does Pesapal charge VAT on their fees?",
    a: "Yes. Payment gateway fees charged by Pesapal, iPay, Cellulant, Flutterwave, Paystack, DPO Pay, and similar providers are now subject to 16% VAT on the commission or transaction fee portion, effective 1 July 2026.",
  },
  {
    q: "What is the VAT rate on digital payment processing in Kenya?",
    a: "The standard VAT rate of 16% applies to payment processing, gateway, merchant acquiring, settlement, and aggregation services supplied through software or over a platform for a fee or commission, effective 1 July 2026.",
  },
  {
    q: "Can I claim input VAT on payment gateway fees?",
    a: "Yes, if your business makes taxable supplies (e.g., you sell goods or services subject to VAT). You can claim input VAT on the 16% charged on your payment gateway fees, provided you hold a valid eTIMS-compliant invoice from the provider.",
  },
  {
    q: "Do banks and insurers pay VAT on payment processing?",
    a: "Banks and insurers mostly make exempt supplies and cannot claim input VAT. The 16% VAT on payment processing fees is therefore a net cost they must absorb or pass on to customers.",
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
    { "@type": "ListItem", position: 3, name: "VAT on Fintech and Digital Payments", item: "https://smartvatkenya.co.ke/resources/vat-fintech-digital-payments-kenya/" },
  ],
}

export default function VatFintechPage() {
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
            Industry Guide — Fintech
          </p>
          <h1 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold text-ink tracking-tight leading-tight mb-4 text-balance">
            VAT on Fintech and Digital Payments in Kenya 2026
          </h1>
          <div className="flex items-center gap-4 text-[0.75rem] text-ink-muted">
            <time dateTime="2026-07-25">25 July 2026</time>
            <span>10 min read</span>
            <span>Smart VAT Kenya</span>
          </div>
        </header>

        <div className="space-y-5 text-[0.9rem] text-ink-soft leading-[1.75]">
          <p>
            The <a href="/resources/finance-act-vat-changes-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">Finance Act 2026</a> made one of the most significant changes to Kenya&apos;s VAT landscape in years: digital payment processing, gateway, merchant acquiring, settlement, and aggregation services are now subject to <strong className="text-ink">16% VAT</strong> effective <strong className="text-ink">1 July 2026</strong>. If your business uses M-Pesa till numbers, Pesapal, iPay, Flutterwave, or any payment gateway, the fees you pay just got 16% more expensive — and the compliance landscape has shifted.
          </p>
          <p>
            This guide explains exactly what changed, which services are affected, what remains exempt, and how to handle input VAT recovery on payment processing fees.
          </p>
          <p>
            For a broader overview of how VAT applies to software, streaming, and other online offerings, see our{" "}
            <a href="/resources/vat-digital-services-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">VAT on digital services guide</a>.
          </p>

          <div className="border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800/40 rounded-lg p-4 flex items-start gap-3">
            <Warning size={17} weight="fill" className="text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-ink text-[0.9rem]">This change overrides court rulings</p>
              <p className="text-[0.83rem] text-amber-700 dark:text-amber-400 leading-relaxed">
                In August 2025, the High Court ruled in <em>Pesapal Limited v Commissioner of Domestic Taxes</em> that licensed payment service provider commissions were VAT-exempt financial services. The Finance Act 2026 legislatively overrides this and similar rulings. PSPs that had stopped charging VAT must now reintroduce it.
              </p>
            </div>
          </div>

          {/* Section 1 — What Changed */}
          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            What Changed Under the Finance Act 2026
          </h2>
          <p>
            The Finance Act 2026 amended <strong className="text-ink">Paragraph 1, Part II of the First Schedule</strong> to the VAT Act to remove the VAT exemption for a specific subset of financial services: those provided by a <strong className="text-ink">payment service provider (PSP)</strong> acting as an intermediary.
          </p>
          <p>
            Before 1 July 2026, the exemption for &ldquo;the issue, transfer, receipt and other dealing with money, including money transfer services&rdquo; broadly covered all payment-related activities. The amendment carves out <strong className="text-ink">payment processing, gateway, merchant acquiring, settlement, and aggregation services</strong> supplied through software or over a platform for a fee or commission. These are now standard-rated at 16%.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 mt-4">
            <div className="border border-hairline rounded-lg p-5">
              <p className="font-semibold text-ink text-[0.95rem] mb-3">Before 1 July 2026</p>
              <ul className="space-y-2 text-[0.83rem]">
                <li className="flex gap-2">
                  <span className="text-ink-muted shrink-0">•</span>
                  <span className="text-ink-muted">Payment processing fees exempt from VAT</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-ink-muted shrink-0">•</span>
                  <span className="text-ink-muted">Gateway commissions not subject to VAT</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-ink-muted shrink-0">•</span>
                  <span className="text-ink-muted">Merchant acquiring fees VAT-free</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-ink-muted shrink-0">•</span>
                  <span className="text-ink-muted">Settlement and aggregation services exempt</span>
                </li>
              </ul>
            </div>
            <div className="border border-brand/25 bg-brand-muted rounded-lg p-5">
              <p className="font-semibold text-ink text-[0.95rem] mb-3">From 1 July 2026</p>
              <ul className="space-y-2 text-[0.83rem]">
                <li className="flex gap-2">
                  <CheckCircle size={12} weight="fill" className="text-brand shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-ink-soft">Payment processing fees subject to 16% VAT</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={12} weight="fill" className="text-brand shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-ink-soft">Gateway commissions now taxable at 16%</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={12} weight="fill" className="text-brand shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-ink-soft">Merchant acquiring fees subject to VAT</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={12} weight="fill" className="text-brand shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-ink-soft">Settlement and aggregation services now taxable</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2 — Which Services Are Affected */}
          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            Which Services Are Now Taxable at 16%
          </h2>
          <p>
            The amendment targets services supplied by a <strong className="text-ink">payment service provider (PSP)</strong> through software or over a platform for a fee or commission. The following are now standard-rated:
          </p>
          <ul className="space-y-2">
            {[
              "Payment processing — transaction routing, authorisation, and clearing of digital payments",
              "Payment gateway services — technology that authorises payments for e-commerce and mobile transactions",
              "Merchant acquiring — services enabling merchants to accept card and digital payments",
              "Settlement services — final transfer of funds between acquirer and issuer",
              "Payment aggregation — bundling multiple merchants under one account (iPay, Pesapal model)",
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
              <p className="font-semibold text-ink text-[0.9rem]">What remains exempt</p>
              <p className="text-[0.83rem] text-blue-700 dark:text-blue-400 leading-relaxed">
                Standard person-to-person money transfers (M-Pesa send money, Airtel Money P2P), ATM withdrawals, foreign exchange services, and securities trading remain VAT-exempt. The change targets the intermediation and processing layer, not the underlying transfer of money.
              </p>
            </div>
          </div>

          {/* Section 3 — Providers Affected */}
          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            Every Provider Affected
          </h2>
          <p>
            The following payment service providers are directly affected. Their transaction fees, gateway commissions, merchant discount rates, and settlement fees must now include 16% VAT.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-[0.83rem] border-collapse">
              <thead>
                <tr className="border-b border-hairline">
                  <th className="text-left font-semibold text-ink py-3 pr-4">Provider</th>
                  <th className="text-left font-semibold text-ink py-3 pr-4">Service</th>
                  <th className="text-left font-semibold text-ink py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                {[
                  { provider: "Safaricom (M-Pesa)", service: "Till/paybill merchant fees", status: "Now 16% VAT on fee" },
                  { provider: "Airtel Money", service: "Merchant transaction fees", status: "Now 16% VAT on fee" },
                  { provider: "Pesapal", service: "Gateway commissions, MDR", status: "Now 16% VAT" },
                  { provider: "iPay Africa", service: "Gateway & settlement fees", status: "Now 16% VAT" },
                  { provider: "Cellulant (Tingg)", service: "Gateway & aggregation fees", status: "Now 16% VAT" },
                  { provider: "Flutterwave", service: "Gateway & cross-border fees", status: "Now 16% VAT" },
                  { provider: "Paystack", service: "Integration & settlement fees", status: "Now 16% VAT" },
                  { provider: "DPO Pay", service: "Processing & gateway fees", status: "Now 16% VAT" },
                  { provider: "Kenswitch", service: "ATM switch & payment switch fees", status: "Now 16% VAT" },
                  { provider: "Visa / Mastercard", service: "Interchange & network fees", status: "Now 16% VAT + WHT" },
                ].map((row) => (
                  <tr key={row.provider}>
                    <td className="py-3 pr-4 text-ink font-medium">{row.provider}</td>
                    <td className="py-3 pr-4 text-ink-soft">{row.service}</td>
                    <td className="py-3 text-ink-soft">{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 4 — Transactions */}
          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            Transaction-by-Transaction Guide
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[0.83rem] border-collapse">
              <thead>
                <tr className="border-b border-hairline">
                  <th className="text-left font-semibold text-ink py-3 pr-4">Transaction Type</th>
                  <th className="text-left font-semibold text-ink py-3 pr-4">VAT?</th>
                  <th className="text-left font-semibold text-ink py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                {[
                  { tx: "M-Pesa P2P send money", vat: "No", note: "Core money transfer remains exempt" },
                  { tx: "M-Pesa till/paybill merchant fee", vat: "Yes — 16%", note: "PSP fee is now taxable" },
                  { tx: "Pesapal / iPay gateway commission", vat: "Yes — 16%", note: "MDR / transaction fee taxable" },
                  { tx: "Card payment merchant service fee", vat: "Yes — 16%", note: "Acquiring fee now taxable" },
                  { tx: "Flutterwave cross-border fee", vat: "Yes — 16%", note: "Gateway fee taxable" },
                  { tx: "Kenswitch switch fee", vat: "Yes — 16%", note: "ATM/payment switch fee taxable" },
                  { tx: "ATM withdrawal fee", vat: "No", note: "Conventional banking remains exempt" },
                  { tx: "Bank transfer (PesaLink) fee", vat: "No", note: "Inter-bank transfer likely exempt" },
                  { tx: "Forex service fee", vat: "No", note: "Foreign exchange remains exempt" },
                  { tx: "Digital wallet platform fee", vat: "Yes — 16%", note: "Processing/aggregation fee taxable" },
                  { tx: "Transactions under KES 100", vat: "Zero-rated", note: "Small transactions remain zero-rated" },
                ].map((row) => (
                  <tr key={row.tx}>
                    <td className="py-3 pr-4 text-ink font-medium">{row.tx}</td>
                    <td className="py-3 pr-4 text-ink-soft">{row.vat}</td>
                    <td className="py-3 text-ink-soft">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 5 — Input VAT */}
          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            Can You Claim Input VAT on Payment Processing Fees?
          </h2>
          <p>
            Whether you can claim input VAT on the 16% charged on your payment processing fees depends on what your business sells:
          </p>
          <ul className="space-y-2">
            {[
              "Businesses making taxable supplies (selling goods at 16% or 0%) — can claim full input VAT on PSP fees with a valid eTIMS invoice",
              "Businesses making mixed supplies — must apportion input VAT, claiming only the portion attributable to taxable supplies",
              "Banks, insurers, and other exempt-sector businesses — cannot claim input VAT. The 16% VAT on PSP fees is a net cost",
              "Non-resident PSPs without a fixed place in Kenya — cannot deduct input VAT incurred from Kenyan suppliers",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1.5" aria-hidden="true" />
                <span className="text-ink-soft">{item}</span>
              </li>
            ))}
          </ul>

          <div className="border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800/40 rounded-lg p-4 flex items-start gap-3">
            <Warning size={17} weight="fill" className="text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-ink text-[0.9rem]">Important for exempt-sector businesses</p>
              <p className="text-[0.83rem] text-amber-700 dark:text-amber-400 leading-relaxed">
                Most financial institutions make exempt supplies and cannot claim input VAT. The 16% VAT on PSP fees is therefore a deadweight cost for banks, insurers, SACCOs, and microfinance institutions. These businesses should review contract terms with their PSPs to determine who bears the VAT.
              </p>
            </div>
          </div>

          {/* Section 6 — Compliance */}
          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            Compliance Requirements for Fintech Companies
          </h2>
          <p>
            If you operate a payment service provider, payment gateway, or fintech platform, here is what you need to do:
          </p>
          <ol className="space-y-3 list-decimal list-inside">
            <li className="text-ink-soft">
              <strong className="text-ink">Reassess VAT treatment</strong> — Review all commissions, transaction fees, and merchant discount rates to determine which are now taxable at 16%. Get professional advice if uncertain.
            </li>
            <li className="text-ink-soft">
              <a href="/resources/do-i-need-to-register-for-vat-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover"><strong className="text-ink">Register for VAT</strong></a> if not already registered. The standard KES 5 million threshold applies for domestic PSPs. Non-resident digital suppliers must register regardless of turnover.
            </li>
            <li className="text-ink-soft">
              <strong className="text-ink">Update billing systems</strong> — Configure invoicing to charge and collect 16% VAT on affected services. All invoices must be eTIMS-compliant.
            </li>
            <li className="text-ink-soft">
              <strong className="text-ink">Review contracts</strong> — Determine whether VAT will be absorbed, passed to merchants, or passed to end-consumers. Update your terms and conditions accordingly.
            </li>
            <li className="text-ink-soft">
              <a href="/resources/how-to-file-vat-return-on-itax/" className="text-brand underline underline-offset-2 hover:text-brand-hover"><strong className="text-ink">File monthly VAT returns</strong></a> via iTax by the 20th of each following month. Late filing attracts a penalty of KES 10,000 or 5% of the tax due (whichever is higher) plus 1% monthly interest.
            </li>
            <li className="text-ink-soft">
              <strong className="text-ink">Onboard eTIMS</strong> — All VAT-registered persons must use the electronic tax invoice management system. See our <a href="/resources/etims-onboarding-guide/" className="text-brand underline underline-offset-2 hover:text-brand-hover">eTIMS onboarding guide</a>.
            </li>
          </ol>

          {/* Section 7 — Related WHT Changes */}
          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            Related Withholding Tax Changes
          </h2>
          <p>
            The Finance Act 2026 also expanded the definition of <strong className="text-ink">management or professional fee</strong> and <strong className="text-ink">royalty</strong> under the Income Tax Act to include interchange fees and merchant service fees from card-based payment infrastructure. This creates parallel withholding tax obligations:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-[0.83rem] border-collapse">
              <thead>
                <tr className="border-b border-hairline">
                  <th className="text-left font-semibold text-ink py-3 pr-4">Fee Type</th>
                  <th className="text-left font-semibold text-ink py-3 pr-4">Resident WHT</th>
                  <th className="text-left font-semibold text-ink py-3">Non-Resident WHT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                {[
                  { fee: "Card interchange fees", res: "5%", nres: "20% (treaty may reduce)" },
                  { fee: "Merchant service fees", res: "5%", nres: "20% (treaty may reduce)" },
                  { fee: "Payment network access fees", res: "5%", nres: "20% (treaty may reduce)" },
                ].map((row) => (
                  <tr key={row.fee}>
                    <td className="py-3 pr-4 text-ink font-medium">{row.fee}</td>
                    <td className="py-3 pr-4 text-ink-soft">{row.res}</td>
                    <td className="py-3 text-ink-soft">{row.nres}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            These changes override the Supreme Court decision in <em>Barclays Bank v Commissioner of Domestic Taxes</em> (2022) which had held that interchange and network fees were not royalties. See our <a href="/resources/withholding-vat-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">withholding VAT guide</a> for more.
          </p>

          {/* Section 8 — Estimated Costs */}
          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            Estimated Cost Impact
          </h2>
          <p>
            The cost impact varies depending on your business model:
          </p>
          <ul className="space-y-2">
            {[
              "Business accepting M-Pesa payments — the merchant fee (typically 0.5-1.5%) now has 16% VAT added. If your monthly M-Pesa fees are KES 10,000, expect an extra KES 1,600 in VAT",
              "E-commerce store using Pesapal — the gateway commission now attracts 16% VAT. If you pay KES 50,000/month in gateway fees, expect KES 8,000 extra in VAT",
              "PSP passing VAT to merchants — merchants see a direct cost increase. PSPs absorbing VAT — margin is compressed",
              "Banks and insurers — cannot recover the VAT, making this a permanent cost increase for the financial sector",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <Info size={14} className="text-brand shrink-0 mt-1.5" aria-hidden="true" />
                <span className="text-ink-soft">{item}</span>
              </li>
            ))}
          </ul>

          {/* Mid-page CTA */}
          <div className="border border-brand/25 bg-brand-muted rounded-lg p-5 mt-8">
            <p className="font-semibold text-ink text-[0.9rem] mb-1">
              Need help with fintech VAT compliance?
            </p>
            <p className="text-[0.83rem] text-ink-muted mb-3">
              Our KRA-registered tax agents can help you reassess your VAT position, update your billing systems, and ensure full compliance. From KES 5,000 for registration support.
            </p>
            <a href="https://wa.me/254721725958?text=I%20need%20help%20with%20fintech%20VAT%20compliance%20under%20the%20Finance%20Act%202026"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-4 py-2.5 rounded-md hover:bg-brand-hover transition-colors">
              Chat on WhatsApp <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
          </div>

          {/* Section 9 — FAQ */}
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
              ["VAT on Digital Services in Kenya", "/resources/vat-digital-services-kenya/", "VAT treatment of SaaS, software, and digital products"],
              ["Withholding VAT in Kenya", "/resources/withholding-vat-kenya/", "Guide to withholding VAT obligations and refunds"],
              ["eTIMS Onboarding Guide", "/resources/etims-onboarding-guide/", "How to onboard KRA's electronic tax invoice system"],
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
          <ArticleGrid currentSlug="vat-fintech-digital-payments-kenya" />
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
