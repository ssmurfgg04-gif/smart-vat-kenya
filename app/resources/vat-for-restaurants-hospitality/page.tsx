import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { ArrowLeft, ArrowRight, Warning, CheckCircle, Info, ForkKnife } from "@phosphor-icons/react/dist/ssr"
import { NewsletterSignup } from "@/components/newsletter-signup"

import { ArticleGrid } from "@/lib/resources"

export const metadata: Metadata = {
  title: "VAT for Restaurants & Hospitality in Kenya 2026: Complete Guide",
  description:
    "Complete VAT guide for Kenyan restaurants, hotels, and hospitality businesses. Standard rate 16%, eTIMS invoicing for food service, input VAT on supplies, and KRA compliance requirements.",
  alternates: { canonical: "https://smartvatkenya.co.ke/resources/vat-for-restaurants-hospitality" },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "VAT for Restaurants & Hospitality in Kenya 2026: Complete Guide",
  description:
    "Complete VAT guide for Kenyan restaurants, hotels, and hospitality businesses. Standard rate 16%, eTIMS invoicing for food service, input VAT on supplies, and KRA compliance requirements.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-26",
  dateModified: "2026-07-26",
  url: "https://smartvatkenya.co.ke/resources/vat-for-restaurants-hospitality",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/vat-for-restaurants-hospitality",
}

const faqs = [
  {
    q: "Do small food kiosks and takeaways have to charge VAT?",
    a: "Only if their annual turnover exceeds KES 5 million. If you run a small kiosk or takeaway below this threshold, you are not required to register for VAT or charge it to customers. However, you also cannot claim input VAT on your ingredients or supplies.",
  },
  {
    q: "Can I claim input VAT on food ingredients bought from the market?",
    a: "Only if you buy from a VAT-registered supplier who issues an eTIMS-compliant invoice. Purchases from unregistered farmers or informal traders carry no VAT and cannot be claimed. Whenever possible, source from registered wholesalers.",
  },
  {
    q: "Is the service charge on a restaurant bill subject to VAT?",
    a: "Yes — if the service charge is compulsory (mandatory for all customers or groups above a certain size), it forms part of the taxable value and VAT at 16% must be collected on it. Only genuinely voluntary tips given directly to staff are exempt from VAT.",
  },
  {
    q: "Do delivery platforms like Uber Eats charge VAT?",
    a: "Yes. If you are VAT-registered, your sales through delivery platforms are subject to VAT at 16%. The delivery fee charged to the customer is also part of the taxable supply. The platform's commission to you is a separate supply on which you can claim input VAT if the platform issues an eTIMS invoice.",
  },
  {
    q: "What happens if I do not register for eTIMS as a restaurant?",
    a: "KRA will impose a penalty of KES 50,000 per month for each month you are non-compliant. This is separate from and in addition to late VAT filing penalties. KRA has been actively auditing the hospitality sector for eTIMS compliance since 2025.",
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

export default function VatForRestaurantsHospitality() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-[700px] mx-auto px-6 lg:px-10 py-12">
      <Script id="article-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Link href="/resources" className="inline-flex items-center gap-2 text-ink-muted hover:text-ink text-sm font-medium mb-8 transition-colors">
        <ArrowLeft size={14} aria-hidden="true" /> All Resources
      </Link>

      <article>
        <header className="mb-8">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand mb-3">Industry Guide</p>
          <h1 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold text-ink tracking-tight leading-tight mb-4 text-balance">
            VAT for Restaurants & Hospitality in Kenya 2026: Complete Guide
          </h1>
          <div className="flex items-center gap-4 text-[0.75rem] text-ink-muted">
            <time dateTime="2026-07-26">26 July 2026</time>
            <span>10 min read</span>
            <span>Smart VAT Kenya</span>
          </div>
        </header>

        <div className="space-y-5 text-[0.9rem] text-ink-soft leading-[1.75]">
          <p>
            Restaurants, hotels, caterers, and hospitality businesses face some of the most complex VAT
            requirements in Kenya. Mixed supplies of food, beverages, accommodation, and event services,
            combined with mandatory eTIMS invoicing for every customer transaction, create a compliance
            environment where small errors can lead to significant penalties.
          </p>
          <p>
            This guide covers everything a Kenyan hospitality business needs to know about VAT in 2026 —
            what rate to charge, how eTIMS applies to restaurant bills, what input VAT you can reclaim,
            and the most common KRA compliance traps to avoid.
          </p>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            Do Restaurants Charge VAT in Kenya?
          </h2>
          <p>
            The short answer is yes — most restaurants, cafés, and food service businesses in Kenya are
            required to charge VAT at the standard rate of <strong>16%</strong> on their sales of prepared
            food and beverages. However, the obligation only kicks in once your taxable turnover exceeds
            the VAT registration threshold.
          </p>
          <h3 className="font-display text-[1rem] font-semibold text-ink mt-6 mb-2">
            VAT Registration Threshold for Hospitality Businesses
          </h3>
          <p>
            As of 2026, any business whose annual taxable turnover exceeds or is expected to exceed
            <strong> KES 5 million</strong> must <Link href="/resources/do-i-need-to-register-for-vat-kenya" className="text-brand underline underline-offset-2 hover:text-brand-hover">register for VAT</Link>. This includes revenue from:
          </p>
          <ul className="space-y-1.5">
            {[
              "Food and beverage sales (dine-in, takeaway, delivery)",
              "Catering services for events and functions",
              "Hotel accommodation charges",
              "Conference and meeting room hire",
              "Bar and lounge sales",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <ForkKnife size={14} className="text-brand shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            If your turnover is below KES 5 million, you are not required to charge VAT or register for
            eTIMS. However, you also cannot claim input VAT on your purchases. Many growing restaurants
            choose to register voluntarily so they can reclaim VAT on ingredients, equipment, and utilities.
          </p>
          <div className="border border-blue-200 bg-blue-50 dark:bg-blue-950/20 dark:border-blue-800/40 rounded-lg p-4 flex items-start gap-3">
            <Info size={17} weight="fill" className="text-blue-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-ink text-[0.9rem]">Pro tip</p>
              <p className="text-[0.83rem] text-blue-700 dark:text-blue-400 leading-relaxed">
                If your restaurant's gross revenue is above KES 3.5 million, consider voluntary VAT
                registration. The input VAT you reclaim on ingredients and operating costs often
                outweighs the compliance burden.
              </p>
            </div>
          </div>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            VAT Rates for Different Food and Beverage Items
          </h2>
          <p>
            Not everything on your menu is treated the same way under Kenyan VAT law. The distinction
            between <strong>basic foodstuffs</strong> (zero-rated) and <strong>prepared food</strong>
            (standard-rated) is one of the most common sources of confusion for hospitality businesses.
          </p>
          <h3 className="font-display text-[1rem] font-semibold text-ink mt-6 mb-2">
            Standard Rate (16%) — Prepared Food and Beverages
          </h3>
          <p>
            Any food that has been cooked, prepared, or processed for immediate consumption is standard-rated
            at 16%. This includes:
          </p>
          <ul className="space-y-1.5">
            {[
              "All restaurant meals (dine-in, takeaway, and delivery)",
              "Catering services and buffet packages",
              "Bakery items sold as ready-to-eat (not basic bread)",
              "Beverages served in a restaurant — tea, coffee, juices, sodas",
              "Alcoholic beverages served in bars, restaurants, and hotels",
              "Snack foods and confectionery",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="font-semibold text-brand shrink-0 w-5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <h3 className="font-display text-[1rem] font-semibold text-ink mt-6 mb-2">
            Zero-Rated (0%) — Basic Foodstuffs
          </h3>
          <p>
            Certain unprocessed or minimally processed food items are zero-rated under the First Schedule
            of the VAT Act. If your restaurant or café sells these as standalone grocery items (not as
            prepared meals), they may qualify for 0% VAT:
          </p>
          <ul className="space-y-1.5">
            {[
              "Uncooked maize meal, wheat flour, and rice",
              "Fresh bread (standard loaves — not specialty bakery)",
              "Fresh fruits and vegetables (unprocessed)",
              "Fresh milk and buttermilk (not flavoured or sweetened)",
              "Ordinary bread and baby cereal",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="font-semibold text-brand shrink-0 w-5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800/40 rounded-lg p-4 flex items-start gap-3">
            <Warning size={17} weight="fill" className="text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-ink text-[0.9rem]">Mixed supply risk</p>
              <p className="text-[0.83rem] text-amber-700 dark:text-amber-400 leading-relaxed">
                The moment you process a basic foodstuff into a prepared meal (e.g., turning flour into
                chapati or fresh fruit into a smoothie), the entire supply moves to standard-rated 16%.
                Incorrectly zero-rating prepared food is a common audit finding.
              </p>
            </div>
          </div>
          <h3 className="font-display text-[1rem] font-semibold text-ink mt-6 mb-2">
            Alcohol and Premium Beverages
          </h3>
          <p>
            Beer, wine, spirits, and other alcoholic beverages are always standard-rated at 16% when sold
            by a restaurant, bar, or hotel. The zero-rating provisions for basic foodstuffs do not extend to
            alcoholic drinks. Additionally, excise duty applies separately to alcohol and is included in the
            value on which VAT is calculated — meaning VAT is charged on the excise-inclusive price.
          </p>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            eTIMS for Restaurants: Mandatory Electronic Invoicing
          </h2>
          <p>
            Every VAT-registered restaurant and hospitality business in Kenya must issue <Link href="/resources/etims-invoicing-guide" className="text-brand underline underline-offset-2 hover:text-brand-hover">eTIMS-compliant invoices</Link> for every sale — including cash sales, card payments, and mobile money transactions.
            This is one of the most significant compliance requirements introduced in recent years, and
            non-compliance attracts a penalty of <strong>KES 50,000 per month</strong>.
          </p>
          <h3 className="font-display text-[1rem] font-semibold text-ink mt-6 mb-2">
            How eTIMS Works in a Restaurant Setting
          </h3>
          <p>
            For restaurants, the most practical approach is <strong>POS integration</strong>. Your
            point-of-sale system connects to the KRA eTIMS platform and transmits every transaction in
            real time. Each bill or receipt must include:
          </p>
          <ul className="space-y-1.5">
            {[
              "A KRA-generated QR code (scannable by the KRA verification app)",
              "Your KRA PIN and eTIMS serial number",
              "Customer name and KRA PIN (for B2B invoices exceeding KES 5,000)",
              "Itemised list of food, beverages, and services with VAT rates",
              "Total VAT charged and gross amount",
              "Date, time, and unique invoice number",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            If your POS system does not support direct eTIMS integration, you can use the
            <strong> KRA eTIMS mobile app</strong> or <strong>web portal</strong> to generate compliant
            invoices manually. However, for high-volume restaurants, manual entry on every table bill is
            impractical and error-prone.
          </p>
          <p>
            For a step-by-step guide to setting up and activating your eTIMS account, see our{" "}
            <Link href="/resources/etims-onboarding-guide" className="text-brand underline underline-offset-2 hover:text-brand-hover">eTIMS onboarding guide</Link>.
          </p>
          <h3 className="font-display text-[1rem] font-semibold text-ink mt-6 mb-2">
            eTIMS for Takeaway and Delivery Orders
          </h3>
          <p>
            Takeaway and delivery orders are not exempt from eTIMS. Every transaction — whether through
            your own ordering system, Uber Eats, Glovo, or any third-party platform — must be captured in
            eTIMS and a compliant receipt issued. If you use a delivery aggregator, ensure the platform
            provides eTIMS-compliant invoices or that you can issue them yourself for each order.
          </p>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            Input VAT Claims for Hospitality Businesses
          </h2>
          <p>
            One of the primary benefits of VAT registration is the ability to reclaim <Link href="/resources/input-vat-deduction-guide" className="text-brand underline underline-offset-2 hover:text-brand-hover">input VAT on purchases</Link> directly attributable to your taxable supplies. For restaurants and hotels, this
            can represent a significant recovery — often offsetting 60-80% of the output VAT collected.
          </p>
          <h3 className="font-display text-[1rem] font-semibold text-ink mt-6 mb-2">
            What You Can Claim Input VAT On
          </h3>
          <ul className="space-y-1.5">
            {[
              "Food ingredients and raw materials purchased from VAT-registered suppliers",
              "Kitchen equipment — ovens, fryers, refrigeration, utensils",
              "Restaurant furniture and fittings — tables, chairs, counter equipment",
              "Utilities — electricity, water, cooking gas (with KPLC, Nairobi City Water, or LP gas supplier eTIMS invoices)",
              "Cleaning and hygiene supplies — detergents, sanitisers, PPE",
              "Packaging materials — takeaway containers, bags, labels",
              "Marketing and advertising services — printing, digital ads",
              "Professional services — accounting, legal, consultants",
              "Repairs and maintenance — equipment servicing, building maintenance",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <h3 className="font-display text-[1rem] font-semibold text-ink mt-6 mb-2">
            Documentation Requirements
          </h3>
          <p>
            To claim input VAT, KRA requires that you hold an <strong>eTIMS-compliant invoice</strong> or
            <strong> ETR receipt</strong> from your supplier showing their KRA PIN, your KRA PIN, the VAT
            amount separately, and a valid QR code. Without these documents, your input VAT claim will be
            disallowed on audit.
          </p>
          <p>
            This is particularly important for restaurant suppliers. If you buy vegetables from an
            unregistered farmer at the market, that purchase carries no VAT and you cannot claim input VAT
            on it. Whenever possible, source from VAT-registered wholesalers who issue eTIMS invoices.
          </p>
          <div className="border border-blue-200 bg-blue-50 dark:bg-blue-950/20 dark:border-blue-800/40 rounded-lg p-4 flex items-start gap-3">
            <Info size={17} weight="fill" className="text-blue-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-ink text-[0.9rem]">Partial exemption rules</p>
              <p className="text-[0.83rem] text-blue-700 dark:text-blue-400 leading-relaxed">
                If your business makes both taxable and exempt supplies (e.g., a restaurant that also
                offers exempt financial services or education), you must apportion your input VAT
                claims. Most hotels and restaurants make fully taxable supplies and can claim 100%.
              </p>
            </div>
          </div>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            Hotel Accommodation VAT
          </h2>
          <p>
            Hotel accommodation is treated as a <strong>taxable supply of services</strong> and is
            standard-rated at 16%. However, there are nuances depending on what is included in the room
            charge and how the hotel structures its billing.
          </p>
          <h3 className="font-display text-[1rem] font-semibold text-ink mt-6 mb-2">
            Short-Term Accommodation
          </h3>
          <p>
            Charges for overnight stays in hotels, lodges, guest houses, and serviced apartments are all
            subject to 16% VAT. This includes the nightly room rate, any service charge or tourism levy
            that forms part of the room price, and charges for extra guests or amenities bundled into the
            room rate.
          </p>
          <h3 className="font-display text-[1rem] font-semibold text-ink mt-6 mb-2">
            Conference and Event Facilities
          </h3>
          <p>
            Hiring out conference rooms, meeting spaces, or event halls is standard-rated at 16%, whether
            charged per hour, per day, or as part of a conference package. If the package includes catering,
            accommodation, and facility hire as a single bundled price, the entire package is standard-rated
            — you cannot split it to apply different rates.
          </p>
          <h3 className="font-display text-[1rem] font-semibold text-ink mt-6 mb-2">
            Restaurant within a Hotel: Bundled vs Separate
          </h3>
          <p>
            This is one of the most frequently misunderstood areas in hospitality VAT. The key principle is
            <strong> single versus multiple supplies</strong>:
          </p>
          <ul className="space-y-1.5">
            {[
              "If a guest pays a single all-inclusive rate for room, meals, and drinks, VAT applies at 16% on the entire package — it is a single composite supply.",
              "If the restaurant operates as a separate cost centre or the guest pays separately for meals (e.g., room charge plus restaurant bill), each supply is independently standard-rated at 16%.",
              "In either case, the rate is 16% — the distinction matters for invoicing and input VAT apportionment.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="font-semibold text-brand shrink-0 w-5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Hotels must ensure their property management system (PMS) and POS system are configured to
            handle both scenarios correctly, issuing eTIMS invoices that reflect the structure of each
            guest's stay.
          </p>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            Common KRA Compliance Issues for Restaurants
          </h2>
          <p>
            The hospitality sector is a frequent target for KRA compliance audits. The high volume of
            cash transactions, high staff turnover, and operational complexity create several recurring
            compliance gaps.
          </p>
          <ul className="space-y-3">
            {[
              {
                title: "Under-reporting of cash sales",
                desc: "Restaurants that handle significant cash business sometimes understate daily sales. KRA cross-checks eTIMS invoice data against bank deposits, mobile money collections, and supplier purchase volumes. The gap between ingredients purchased and revenue reported is a red flag that often triggers a full audit.",
              },
              {
                title: "Failure to issue eTIMS invoices",
                desc: "Busy service staff may skip eTIMS invoicing during peak hours, especially for small cash bills. This is a direct violation. Each missing invoice is a potential KES 50,000 penalty. Automating eTIMS through POS integration is the only reliable solution for high-volume restaurants.",
              },
              {
                title: "Improper handling of tips and service charge",
                desc: "Tips given freely by customers are not subject to VAT. However, if the restaurant imposes a mandatory service charge (e.g., 10% on large groups), that charge forms part of the taxable value and must be included in the VAT calculation. Misclassifying a compulsory service charge as a tip is a common audit finding.",
              },
              {
                title: "Mixed supply misclassification",
                desc: "Applying zero-rating to prepared food items that are actually standard-rated — such as selling fresh juice (zero-rated if unprocessed) vs a blended smoothie (standard-rated). The distinction is subtle but KRA auditors examine it closely, particularly during targeted hospitality sector audits.",
              },
              {
                title: "VAT on delivery fees",
                desc: "If you charge customers a delivery fee, that fee is part of the taxable supply and VAT must be charged on the total — food price plus delivery fee. The same applies if you use third-party aggregators; the commission they charge you is a separate taxable supply on which you can claim input VAT.",
              },
              {
                title: "Late VAT filing and payment",
                desc: "The monthly VAT return deadline is the 20th of the following month. Late filing attracts a penalty of 5% of the tax due plus 2% per month on the outstanding amount. Hotels and restaurants with high monthly VAT bills should set up a reminder system or engage a tax agent to handle filings on their behalf.",
              },
            ].map(({ title, desc }) => (
              <li key={title} className="flex gap-3">
                <Warning size={14} className="text-amber-600 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-ink text-[0.9rem]">{title}</p>
                  <p className="text-[0.83rem] text-ink-muted leading-relaxed">{desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="border border-brand/25 bg-brand-muted rounded-lg p-5 mt-8">
            <p className="font-semibold text-ink text-[0.9rem] mb-1">
              Running a restaurant or hotel? We handle your monthly VAT filing
            </p>
            <p className="text-[0.83rem] text-ink-muted mb-3">
              KES 3,500/month covers your eTIMS compliance, VAT return preparation and filing on iTax,
              input VAT tracking, and KRA correspondence. No surprise fees.
            </p>
            <a href="https://wa.me/254721725958?text=I%20need%20help%20with%20restaurant%20VAT%20compliance"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-4 py-2.5 rounded-md hover:bg-brand-hover transition-colors">
              Get Started on WhatsApp <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
          </div>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q}>
                <p className="font-semibold text-ink text-[0.9rem]">{q}</p>
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">Related Resources</h2>
          <ul className="space-y-2">
            {[
              ["eTIMS Compliant Invoicing Guide", "/resources/etims-invoicing-guide", "Mandatory fields, QR codes, B2B vs B2C rules, and verification"],
              ["How to File a VAT Return on iTax", "/resources/how-to-file-vat-return-on-itax", "Step-by-step monthly filing guide"],
              ["VAT Registration Checklist", "/resources/vat-registration-checklist", "Everything you need to register for VAT in Kenya"],
            ].map(([title, slug, desc]) => (
              <li key={slug}>
                <Link href={slug} className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  {title}
                </Link>
                <span className="text-ink-muted"> — {desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>

              {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="vat-for-restaurants-hospitality" />
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
            <Link href="/resources" className="text-[0.82rem] text-ink-muted hover:text-brand transition-colors underline underline-offset-2">
              ← All Resources
            </Link>
          </div>
        </div>

      <div className="mt-8">
        <NewsletterSignup />
      </div>
    </div>
    </>
  )
}
