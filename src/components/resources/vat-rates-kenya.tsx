import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources" },
    { "@type": "ListItem", position: 3, name: "VAT Rates Kenya", item: "https://smartvatkenya.co.ke/resources/vat-rates-kenya" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "VAT Rates in Kenya 2026 — Standard (16%), Zero-Rated & Exempt",
  description:
    "Complete guide to Kenya VAT rates 2026 covering the standard rate of 16%, zero-rated supplies (0%), and exempt supplies. Full lists from the VAT Act First and Second Schedules with practical examples and industry guidance.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-26",
  dateModified: "2026-07-29",
  url: "https://smartvatkenya.co.ke/resources/vat-rates-kenya",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/vat-rates-kenya",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the standard VAT rate in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The standard VAT rate in Kenya is 16%. This rate applies to most supplies of goods and services unless they are specifically classified as zero-rated (0%) or exempt under the VAT Act. Examples include electronics, motor vehicles, hotel accommodation, professional services, construction materials, and processed foods.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between zero-rated and exempt supplies in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The key difference is input VAT recovery. Zero-rated supplies (0%) are taxable at 0% — you still charge VAT on your invoice but at 0%, and you CAN claim input VAT on related costs and apply for refunds if you have excess input tax. Exempt supplies have no VAT charged at all, but you CANNOT claim input VAT on costs related to exempt supplies, making it a true cost to your business. This distinction is crucial for pricing and profitability.",
      },
    },
    {
      "@type": "Question",
      name: "Can I claim input VAT on zero-rated supplies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Zero-rated supplies are taxable supplies at 0%. This means you must still issue a tax invoice, include the supply in your VAT return, and you can claim input VAT on purchases related to making zero-rated supplies. If your input VAT exceeds your output VAT, you can apply for a VAT refund from KRA.",
      },
    },
    {
      "@type": "Question",
      name: "What goods are zero-rated in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The VAT Act First Schedule lists zero-rated supplies, including: exports of goods and services, unprocessed agricultural products (maize, wheat, rice, fresh milk, potatoes, beans), agricultural inputs (fertilisers, pesticides, seeds, animal feeds), pharmaceuticals and medical supplies, books and educational materials, goods supplied to EPZ and SEZ enterprises, tea and coffee packaging materials, aircraft and spare parts, goods supplied to diplomatic missions, and international transport services.",
      },
    },
    {
      "@type": "Question",
      name: "Is food zero-rated or exempt in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the type of food. Unprocessed agricultural products (raw maize flour, fresh milk, fresh fruits and vegetables, unprocessed meat and fish) are generally zero-rated. Processed and packaged foods (bottled drinks, packaged snacks, confectionery, restaurant meals) are subject to the standard 16% VAT rate. Food supplied as part of restaurant or catering services is subject to 16% VAT.",
      },
    },
    {
      "@type": "Question",
      name: "Are financial services exempt from VAT in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most financial services are exempt from VAT, including insurance, lending, and banking services. However, payment processing, settlement, merchant acquiring, gateway, and aggregation services supplied over a software platform were reclassified from exempt to taxable at 16% effective 1 July 2026. Fintech companies and payment service providers must now charge 16% VAT on their fees.",
      },
    },
    {
      "@type": "Question",
      name: "Do I charge VAT on exports from Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Exports of goods and services from Kenya are zero-rated (0%). This means you do not charge your customer 16% VAT, but you can still claim input VAT on costs related to the exported goods. This ensures Kenyan exporters are competitive internationally while still recovering VAT on their costs.",
      },
    },
    {
      "@type": "Question",
      name: "Is residential rent subject to VAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Residential rent (letting of residential premises for dwelling purposes) is exempt from VAT. Landlords receiving residential rental income do not charge VAT on rent, but also cannot claim input VAT on expenses related to the property. Commercial rent (rental of commercial property) is generally subject to 16% VAT if the landlord is VAT-registered.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if my supply is zero-rated or exempt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Consult the VAT Act Schedules. Zero-rated supplies are listed in the First Schedule (Section 6 of the VAT Act). Exempt supplies are listed in the Second Schedule (Section 7 of the VAT Act). If your supply is not listed in either schedule, it is subject to the standard rate of 16%. When in doubt, seek professional advice — misclassifying a supply can lead to penalties, interest, and KRA audit adjustments.",
      },
    },
  ],
}

export default function VatRatesKenyaPage() {
  return (
    <>
      <script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id="article-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script id="faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-[880px] mx-auto px-6 lg:px-10 py-12">
        <a href="/resources" className="inline-flex items-center gap-2 text-ink-muted hover:text-ink text-sm font-medium mb-8 transition-colors">
          <ArrowLeft size={14} aria-hidden="true" /> All Guides
        </a>

        <article>
          <header className="mb-10">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand mb-3">Guide — VAT Rates</p>
            <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.3rem)] font-semibold text-ink tracking-tight leading-tight mb-4 text-balance">
              VAT Rates in Kenya 2026 — Standard (16%), Zero-Rated &amp; Exempt
            </h1>
            <p className="text-[0.9rem] text-ink-muted leading-relaxed max-w-[65ch]">
              Kenya operates a three-tier VAT system. Most goods and services attract the standard rate of 16%.
              Some are zero-rated at 0% (exports, unprocessed foods, agricultural inputs), while others are
              exempt (financial services, residential rent, education). Getting the rate right is critical — errors
              can mean overpaying tax or facing KRA penalties. This guide covers each rate with full lists and
              practical examples.
            </p>
            <div className="flex items-center gap-4 text-[0.75rem] text-ink-muted">
              <time dateTime="2026-07-29">29 July 2026</time>
              <span>Smart VAT Kenya</span>
            </div>
          </header>

          {/* Quick Answer — optimized for featured snippet / AI citation */}
          <div className="border-l-[3px] border-brand pl-5 mb-10">
            <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Quick Answer</p>
            <p className="text-[0.93rem] text-ink-soft leading-relaxed">
              <strong className="text-ink">Kenya's VAT rate is 16%</strong> on most goods and services.
              Zero-rated supplies (0%) include exports, unprocessed food, pharmaceuticals, and agricultural
              inputs — you can claim input VAT on these. <strong className="text-ink">Exempt supplies</strong>
              (financial services, residential rent, education) have no VAT charged and no input VAT recovery.
              Mandatory registration is triggered at <strong className="text-ink">KES 8M annual turnover</strong>{" "}
              (Finance Act 2025). Returns are due on <strong className="text-ink">iTax by the 20th</strong> of
              every month; late filing costs the higher of KES 10,000 or 5% of tax due. Verified against the
              VAT Act and Finance Act 2026.
            </p>
          </div>

          {/* VAT at a glance — compact summary table */}
          <div className="border border-hairline rounded-lg overflow-hidden mb-10">
            <div className="bg-canvas-alt px-5 py-3 border-b border-hairline">
              <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-muted">VAT at a Glance (2026)</p>
            </div>
            <table className="w-full text-left text-[0.85rem]">
              <tbody className="divide-y divide-hairline">
                {[
                  { label: "Standard rate", value: "16% on most goods and services" },
                  { label: "Zero-rated", value: "0% — exports, unprocessed food, pharma, agricultural inputs; input VAT claimable" },
                  { label: "Exempt", value: "No VAT — financial services, residential rent, education, medical; no input VAT recovery" },
                  { label: "Mandatory registration", value: "KES 8M annual taxable turnover (Finance Act 2025)" },
                  { label: "Voluntary registration", value: "Allowed from KES 5M" },
                  { label: "Filing deadline", value: "20th of every month via iTax (nil returns included)" },
                  { label: "Late filing penalty", value: "Higher of KES 10,000 or 5% of tax due" },
                  { label: "Late payment penalty", value: "5% of unpaid tax + 1% interest per month" },
                  { label: "E-invoicing", value: "eTIMS mandatory for all VAT-registered businesses" },
                  { label: "Refund claim window", value: "Within 12 months (Finance Act 2025)" },
                ].map(({ label, value }) => (
                  <tr key={label} className="hover:bg-canvas-alt/30 transition-colors">
                    <td className="px-5 py-2.5 font-medium text-ink w-[32%] align-top">{label}</td>
                    <td className="px-5 py-2.5 text-ink-soft align-top">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-10">

            {/* Section 1 — Introduction */}
            <section id="introduction" aria-labelledby="introduction-h">
              <h2 id="introduction-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Kenya&apos;s Three VAT Rates
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  The <strong>VAT Act, Cap. 476</strong> (as amended by the Finance Act 2025 and Finance
                  Act 2026) establishes three categories of VAT treatment for supplies of goods and services
                  in Kenya. Every supply falls into exactly one category, determined by its nature and the
                  schedules to the Act.
                </p>
                <p>
                  Getting the classification right is one of the most common compliance challenges. A
                  misclassified supply — for example, treating a standard-rated item as zero-rated — can
                  result in KRA audit adjustments, penalties, and interest. If in doubt, you can consult
                  KRA for a private ruling, or seek professional advice.
                </p>

                {/* Comparison table */}
                <div className="border border-hairline rounded-lg overflow-hidden my-6">
                  <table className="w-full text-left text-[0.85rem]">
                    <thead>
                      <tr className="border-b border-hairline bg-canvas-alt">
                        <th className="px-4 py-3 font-semibold text-ink w-[18%]">Feature</th>
                        <th className="px-4 py-3 font-semibold text-ink w-[27%]">Standard Rated (16%)</th>
                        <th className="px-4 py-3 font-semibold text-ink w-[27%]">Zero-Rated (0%)</th>
                        <th className="px-4 py-3 font-semibold text-ink w-[28%]">Exempt</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-hairline">
                      {[
                        { feature: "VAT charged to customer", standard: "Yes — 16% added to price", zero: "Yes — but at 0%", exempt: "No VAT charged" },
                        { feature: "Tax invoice required", standard: "Yes", zero: "Yes", exempt: "No" },
                        { feature: "Include in VAT return", standard: "Yes — as output VAT", zero: "Yes — as zero-rated supply", exempt: "No" },
                        { feature: "Input VAT recovery", standard: "Yes — can claim back", zero: "Yes — can claim and get refunds", exempt: "No — input VAT is a cost" },
                        { feature: "Impact on profit", standard: "VAT is collected from customer", zero: "VAT refunds improve margin", exempt: "Input VAT erodes margin" },
                        { feature: "Common examples", standard: "Electronics, vehicles, hotel stays, professional fees", zero: "Exports, unprocessed food, medicines, books", exempt: "Residential rent, financial services, insurance, education" },
                      ].map(({ feature, standard, zero, exempt }) => (
                        <tr key={feature} className="hover:bg-canvas-alt/50 transition-colors">
                          <td className="px-4 py-3 font-medium text-ink">{feature}</td>
                          <td className="px-4 py-3 text-ink-soft">{standard}</td>
                          <td className="px-4 py-3 text-ink-soft">{zero}</td>
                          <td className="px-4 py-3 text-ink-soft">{exempt}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="border border-brand/25 bg-brand-muted rounded-lg p-4 flex items-start gap-3">
                  <Info size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="text-[0.83rem] text-ink-soft leading-relaxed">
                    <p><strong className="text-ink">Not sure if you need to register?</strong> See our{" "}
                      <a href="/resources/do-i-need-to-register-for-vat-kenya" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                        VAT registration guide
                      </a>{" "}
                      for the KES 5 million threshold, voluntary registration, and registration requirements
                      for non-residents.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 — Standard Rate */}
            <section id="standard-rate" aria-labelledby="standard-rate-h">
              <h2 id="standard-rate-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Standard Rate (16%)
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  The <strong>standard rate of 16%</strong> applies to all supplies of goods and services
                  in Kenya that are not specifically zero-rated or exempt under the VAT Act. This is the
                  default rate — if a supply is not listed in the First Schedule (zero-rated) or Second
                  Schedule (exempt), it is standard-rated.
                </p>

                <h3 className="font-display text-[1.1rem] font-semibold text-ink mt-6 mb-3 tracking-tight">
                  What is subject to 16% VAT?
                </h3>

                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { label: "Electronics & appliances", example: "TVs, laptops, smartphones, refrigerators, washing machines" },
                    { label: "Motor vehicles & parts", example: "New and used cars, motorcycles, tyres, batteries, spare parts" },
                    { label: "Furniture & home goods", example: "Sofas, beds, cabinets, curtains, kitchenware" },
                    { label: "Processed foods & beverages", example: "Bottled drinks, packaged snacks, confectionery, cooking oil, bread" },
                    { label: "Hotel & hospitality", example: "Room charges, restaurant meals, conference facilities, event catering" },
                    { label: "Professional services", example: "Legal fees, accounting services, consulting, architectural, engineering" },
                    { label: "Construction materials", example: "Cement, steel, roofing sheets, paint, plumbing fixtures, timber" },
                    { label: "Telecommunications & internet", example: "Mobile airtime, data bundles, internet subscriptions, phone charges" },
                    { label: "Clothing & footwear", example: "Shoes, shirts, suits, uniforms, textile products" },
                    { label: "Marketing & advertising", example: "Print, digital, radio, TV ads, promotional materials" },
                    { label: "Vehicle repair & maintenance", example: "Garage services, mechanic labour, spare parts fitting" },
                    { label: "Real estate (commercial)", example: "Commercial property rent, sale of commercial buildings" },
                    { label: "Payment processing (from July 2026)", example: "Merchant fees, gateway fees, aggregation, settlement services" },
                    { label: "General retail", example: "Most goods bought in retail stores, supermarkets, and shops" },
                  ].map(({ label, example }) => (
                    <div key={label} className="border border-hairline rounded-lg p-3">
                      <p className="font-semibold text-ink text-[0.85rem] mb-0.5">{label}</p>
                      <p className="text-[0.78rem] text-ink-muted leading-relaxed">{example}</p>
                    </div>
                  ))}
                </div>

                <div className="border border-brand/25 bg-brand-muted rounded-lg p-4 flex items-start gap-3 mt-4">
                  <Info size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="text-[0.83rem] text-ink-soft leading-relaxed">
                    <p><strong className="text-ink">Practical example:</strong> If you run a retail electronics
                    shop and sell a laptop for KES 100,000, you charge the customer KES 116,000 (including
                    KES 16,000 VAT). You remit KES 16,000 to KRA less any input VAT you claimed on the
                    purchase of the laptop from your supplier.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 — Zero-Rated */}
            <section id="zero-rated" aria-labelledby="zero-rated-h">
              <h2 id="zero-rated-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Zero-Rated Supplies (0%)
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  <strong>Zero-rated supplies</strong> are taxable supplies charged at <strong>0%</strong>.
                  You must still issue a tax invoice and include the supply in your VAT return — but no VAT
                  is charged to the customer. Crucially, you <strong>can claim input VAT</strong> on costs
                  related to making zero-rated supplies and apply for refunds from KRA if you have excess
                  input tax.
                </p>

                <h3 className="font-display text-[1.1rem] font-semibold text-ink mt-6 mb-3 tracking-tight">
                  Full list of zero-rated supplies (VAT Act First Schedule)
                </h3>

                <ul className="space-y-2">
                  {[
                    "Exports of goods and services — any goods or services exported from Kenya",
                    "Unprocessed agricultural products — maize, wheat, rice, barley, sorghum, millet, fresh milk, potatoes, beans, peas, fresh fruits and vegetables, unprocessed meat and fish, eggs, honey",
                    "Agricultural inputs — fertilisers, pesticides, herbicides, fungicides, seeds and seedlings, animal feeds and feed ingredients",
                    "Pharmaceuticals and medical supplies — prescription medicines, medical equipment and apparatus, surgical instruments, laboratory reagents",
                    "Books, educational materials, and printed materials — textbooks, exercise books, newspapers",
                    "Goods supplied to EPZ and SEZ enterprises — goods supplied to Export Processing Zones and Special Economic Zones",
                    "Aircraft, aircraft engines, and spare parts — for use in air transport",
                    "Goods supplied to diplomatic missions — accredited diplomats and international organisations",
                    "International transport services — international freight and passenger transport",
                    "Tea and coffee packaging materials — packaging materials for tea and coffee (added by Finance Act 2025)",
                    "Supplies to registered pharmaceutical manufacturers — raw materials and inputs for pharmaceutical manufacturing",
                    "Supply of taxable goods to manufacturers of agricultural machinery — inputs for making agricultural equipment",
                    "Services rendered outside Kenya — services physically performed outside the country",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1.5" aria-hidden="true" />
                      <span className="text-ink-soft text-[0.88rem]">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="border border-brand/25 bg-brand-muted rounded-lg p-4 flex items-start gap-3 mt-4">
                  <Info size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="text-[0.83rem] text-ink-soft leading-relaxed">
                    <p><strong className="text-ink">Practical example:</strong> If you export fresh flowers
                    worth KES 500,000, you issue an invoice at 0% VAT. You can claim input VAT on packaging
                    materials, cold storage, transport, and other costs. If your input VAT on these costs is
                    KES 30,000, you can apply for a refund from KRA.</p>
                  </div>
                </div>

                <div className="border border-hairline rounded-lg p-5 flex items-start gap-4">
                  <Warning size={17} weight="fill" className="text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink text-[0.88rem] mb-1">Zero-rated does not mean exempt</p>
                    <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                      Many businesses mistakenly treat zero-rated supplies as exempt. They are not. You must
                      still issue a tax invoice, include the supply in your VAT return, and you have the right
                      to claim input VAT. Filing <em>nil</em> returns when you have zero-rated supplies means
                      you are missing out on legitimate input VAT recovery.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 — Exempt Supplies */}
            <section id="exempt-supplies" aria-labelledby="exempt-supplies-h">
              <h2 id="exempt-supplies-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Exempt Supplies
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  <strong>Exempt supplies</strong> are not subject to VAT at all. You do not charge VAT on
                  exempt supplies, but you also <strong>cannot claim input VAT</strong> on costs related to
                  making exempt supplies (with narrow exceptions such as supplies to KDF, NIS, and NPS under
                  the Finance Act 2026). This makes exempt treatment a true cost to the business — the VAT
                  you pay on inputs is not recoverable.
                </p>

                <h3 className="font-display text-[1.1rem] font-semibold text-ink mt-6 mb-3 tracking-tight">
                  Full list of exempt supplies (VAT Act Second Schedule)
                </h3>

                <div className="space-y-3">
                  {[
                    { title: "Financial services", detail: "Insurance, reinsurance, lending, credit facilities, issuance of securities, foreign exchange transactions (but NOT payment processing services — now 16% VAT)" },
                    { title: "Residential rent", detail: "Letting of residential premises for dwelling purposes. Landlords of residential property cannot charge VAT or claim input VAT" },
                    { title: "Education services", detail: "Tuition fees at registered educational institutions, training services, and educational materials supplied by the institution" },
                    { title: "Medical, dental, and hospital services", detail: "Services provided by registered medical practitioners, hospitals, clinics, dentists, and opticians" },
                    { title: "Public transport services", detail: "Matatu, bus, and railway passenger transport within Kenya (excluding tour vehicles and hired cars)" },
                    { title: "Funeral services", detail: "Burial and cremation services, coffins, and related funeral supplies" },
                    { title: "Betting, gaming, and lotteries", detail: "Gambling services, sports betting, lottery tickets, and casino operations" },
                    { title: "Supply of land", detail: "Sale of land (not including construction services or building materials)" },
                    { title: "Goods imported for official government use", detail: "Imports by the Government of Kenya for official purposes" },
                    { title: "Goods imported by registered NGOs", detail: "Goods imported by registered NGOs for donation to charitable institutions" },
                    { title: "Mosquito repellent products", detail: "Reclassified from 16% to exempt effective 1 July 2025" },
                    { title: "Supplies to KDF, NIS, NPS, DEFWES", detail: "Exempt, but input VAT on related costs is recoverable (Finance Act 2026 exception)" },
                  ].map(({ title, detail }) => (
                    <div key={title} className="border border-hairline rounded-lg p-4">
                      <p className="font-semibold text-ink text-[0.88rem] mb-1">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>

                <div className="border border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-800/40 rounded-lg p-4 flex items-start gap-3 mt-4">
                  <Warning size={17} weight="fill" className="text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-[0.83rem] text-red-700 dark:text-red-400 leading-relaxed">
                    <strong className="text-red-800 dark:text-red-300">Important:</strong> If you make both
                    taxable and exempt supplies (mixed supplies), you must apportion input VAT. The 90:10 rule
                    was removed by the Finance Act 2025 — you can no longer claim full input VAT even if exempt
                    supplies are under 10% of turnover. See our{" "}
                    <a href="/resources/input-vat-deduction-guide" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                      Input VAT Deduction Guide
                    </a>{" "}
                    for the apportionment formula.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 — Quick Reference Table */}
            <section id="quick-reference" aria-labelledby="quick-reference-h">
              <h2 id="quick-reference-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Quick Reference: Kenya VAT Rate Comparison
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-[0.85rem] border-collapse">
                  <thead>
                    <tr className="border-b border-hairline">
                      <th className="text-left font-semibold text-ink py-3 pr-4">Feature</th>
                      <th className="text-left font-semibold text-ink py-3 pr-4">Standard Rate</th>
                      <th className="text-left font-semibold text-ink py-3 pr-4">Zero-Rated</th>
                      <th className="text-left font-semibold text-ink py-3">Exempt</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hairline">
                    {[
                      { feature: "Rate", standard: "16%", zero: "0%", exempt: "No VAT" },
                      { feature: "Charge VAT on invoice?", standard: "Yes — 16%", zero: "Yes — but at 0%", exempt: "No" },
                      { feature: "Issue tax invoice required?", standard: "Yes", zero: "Yes", exempt: "Generally no (but best practice)" },
                      { feature: "Include in VAT return?", standard: "Yes", zero: "Yes", exempt: "No (unless for apportionment)" },
                      { feature: "Claim input VAT on costs?", standard: "Yes", zero: "Yes", exempt: "No (narrow exceptions)" },
                      { feature: "Apply for VAT refund?", standard: "Yes (if excess input)", zero: "Yes (if excess input)", exempt: "No" },
                      { feature: "Type of supply", standard: "Taxable supply", zero: "Taxable supply at zero rate", exempt: "Not a taxable supply" },
                      { feature: "Common examples", standard: "Retail goods, electronics, hotel, services, processed food", zero: "Exports, unprocessed food, pharma, agricultural inputs", exempt: "Financial services, residential rent, education, medical" },
                    ].map((row) => (
                      <tr key={row.feature} className="text-ink-soft">
                        <td className="py-3 pr-4 font-medium text-ink">{row.feature}</td>
                        <td className="py-3 pr-4">{row.standard}</td>
                        <td className="py-3 pr-4">{row.zero}</td>
                        <td className="py-3">{row.exempt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6 — Industry Cross-Links */}
            <section id="industry-guides" aria-labelledby="industry-guides-h">
              <h2 id="industry-guides-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Rate Guides by Industry
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  The VAT rate applicable to your business depends heavily on what you supply and who your
                  customers are. These industry-specific guides cover rate classification in detail:
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mt-4">
                  {[
                    { href: "/resources/vat-for-restaurants-hospitality", label: "Restaurants & Hospitality", desc: "Meals, drinks, accommodation, event catering — which items are 16% vs zero-rated?" },
                    { href: "/resources/vat-fintech-digital-payments-kenya", label: "Fintech & Digital Payments", desc: "Payment processing, merchant fees, mobile money — now 16% VAT under Finance Act 2026" },
                    { href: "/resources/vat-for-importers-kenya", label: "Importers", desc: "Import VAT at 16%, customs valuation, duty + VAT calculation, and deferment options" },
                    { href: "/resources/vat-for-landlords-kenya", label: "Landlords & Property", desc: "Residential rent (exempt) vs commercial rent (16%), input VAT on construction and maintenance" },
                    { href: "/resources/vat-digital-services-kenya", label: "Digital Services", desc: "E-books, streaming, software downloads, SaaS, online advertising, digital broadcasting" },
                    { href: "/resources/vat-labour-outsourcing-kenya", label: "Labour Outsourcing", desc: "Staff placement, temp labour — employee costs are disbursements, not subject to VAT" },
                  ].map(({ href, label, desc }) => (
                    <a key={href} href={href}
                      className="group border border-hairline rounded-lg p-4 hover:border-ink/15 hover:shadow-sm transition-all no-underline">
                      <p className="font-semibold text-ink text-[0.88rem] group-hover:text-brand transition-colors mb-1">{label}</p>
                      <p className="text-[0.78rem] text-ink-muted leading-relaxed">{desc}</p>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 7 — Checklist */}
            <section id="getting-it-right" aria-labelledby="getting-it-right-h">
              <h2 id="getting-it-right-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                How to Get the Rate Right
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  Classifying your supplies correctly is the foundation of VAT compliance. Here is a simple
                  checklist to apply when determining the correct VAT rate:
                </p>
                <ul className="space-y-2">
                  {[
                    "Is the supply listed in the First Schedule (zero-rated)? If yes, apply 0%.",
                    "If not, is it listed in the Second Schedule (exempt)? If yes, do not charge VAT, but remember you cannot claim input VAT.",
                    "If it is in neither schedule, it is standard-rated at 16%. Charge VAT and issue a tax invoice.",
                    "For mixed supplies (multiple items in one transaction), apply the correct rate to each item separately.",
                    "If you export goods or services, ensure you have documentary proof of export (bill of lading, airway bill, customs export declaration).",
                    "If you supply to an EPZ or SEZ enterprise, obtain their valid EPZ/SEZ certificate to support zero-rating.",
                    "Review your product or service descriptions against the VAT Act Schedules each year — the lists change with each Finance Act.",
                    "If uncertain, apply for a KRA private ruling or consult a tax professional.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1.5" aria-hidden="true" />
                      <span className="text-ink-soft">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="border border-brand/25 bg-brand-muted rounded-lg p-4 flex items-start gap-3 mt-4">
                  <Info size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-[0.83rem] text-ink-soft leading-relaxed">
                    <strong className="text-ink">Need to calculate VAT?</strong> See our{" "}
                    <a href="/resources/how-to-calculate-vat-in-kenya" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                      How to Calculate VAT in Kenya
                    </a>{" "}
                    guide for worked examples of VAT exclusive, inclusive, and input/output VAT calculations.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" aria-labelledby="faq-h">
              <h2 id="faq-h" className="font-display text-[1.4rem] font-semibold text-ink mb-6 tracking-tight">
                Frequently Asked Questions
              </h2>
              <dl className="divide-y divide-hairline">
                {faqSchema.mainEntity.map((q) => (
                  <div key={q.name} className="py-5 first:pt-0">
                    <dt className="font-display text-[0.95rem] font-semibold text-ink mb-2">{q.name}</dt>
                    <dd className="text-[0.85rem] text-ink-muted leading-relaxed">{q.acceptedAnswer.text}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </article>

        {/* Sources & Methodology — authority signal for AI citation */}
        <div className="mt-14 border-t border-hairline pt-8">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-muted mb-3">Sources &amp; Methodology</p>
          <p className="text-[0.78rem] text-ink-muted leading-relaxed max-w-[60ch]">
            Figures on this page were verified in July 2026 against the VAT Act (Cap. 476) as amended by
            the Finance Act 2025 and Finance Act 2026, KRA iTax filing guidance, and the Tax Procedures Act
            penalty provisions. Zero-rated and exempt lists are drawn from the First and Second Schedules
            of the VAT Act. Last verified: 26 July 2026.
          </p>
        </div>

        {/* More Guides */}
        <div className="mt-10 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="vat-rates-kenya" />
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
            <a href="/resources" className="text-[0.82rem] text-ink-muted hover:text-brand transition-colors underline underline-offset-2">
              ← All Resources
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
