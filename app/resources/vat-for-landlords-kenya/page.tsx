import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { ArrowLeft, ArrowRight, Building, House, Warning, CheckCircle } from "@phosphor-icons/react/dist/ssr"
import { NewsletterSignup } from "@/components/newsletter-signup"

import { ArticleGrid } from "@/lib/resources"

export const metadata: Metadata = {
  title: "VAT for Landlords Kenya 2026: Do I Charge VAT on Rental Income?",
  description:
    "Do landlords charge VAT on rental income in Kenya? Guide to VAT on commercial and residential property rental, KRA requirements, eTIMS for landlords, and input VAT claims on property expenses.",
  alternates: { canonical: "https://smartvatkenya.co.ke/resources/vat-for-landlords-kenya" },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "VAT for Landlords Kenya 2026: Do I Charge VAT on Rental Income?",
  description:
    "Do landlords charge VAT on rental income in Kenya? Guide to VAT on commercial and residential property rental, KRA requirements, eTIMS for landlords, and input VAT claims on property expenses.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-26",
  dateModified: "2026-07-26",
  url: "https://smartvatkenya.co.ke/resources/vat-for-landlords-kenya",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/vat-for-landlords-kenya",
}

export default function VatForLandlordsPost() {
  return (
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
            VAT for Landlords Kenya 2026: Do I Charge VAT on Rental Income?
          </h1>
          <div className="flex items-center gap-4 text-[0.75rem] text-ink-muted">
            <time dateTime="2026-07-26">26 July 2026</time>
            <span>9 min read</span>
            <span>Smart VAT Kenya</span>
          </div>
        </header>

        <div className="space-y-5 text-[0.9rem] text-ink-soft leading-[1.75]">
          <div className="border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800/40 rounded-lg p-4 flex items-start gap-3">
            <Warning size={17} weight="fill" className="text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-ink text-[0.9rem]">Residential vs commercial — different rules</p>
              <p className="text-[0.83rem] text-amber-700 dark:text-amber-400 leading-relaxed">
                Residential rent is exempt from VAT. Commercial rent is taxable if you exceed the
                threshold. Getting this wrong can mean penalties or missed input VAT claims.
              </p>
            </div>
          </div>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            Do Landlords Charge VAT on Rental Income in Kenya?
          </h2>
          <p>
            The short answer: it depends entirely on whether you are letting residential or commercial property —
            and on your total taxable turnover.
          </p>
          <p>
            <strong>Residential rental income is exempt from VAT</strong> under Paragraph 3 of the First Schedule to the
            VAT Act 2013. This means that even if you own a block of fifty flats and collect KES 2 million per month
            in rent, you do not charge VAT on those rents, and you do not register for VAT on the strength of that
            income alone.
          </p>
          <p>
            <strong>Commercial rental income is generally subject to VAT</strong> if the landlord&apos;s total annual
            taxable turnover exceeds the registration threshold. Under the Finance Act 2025 amendments, the threshold
            was proposed to increase to KES 8 million per year, but this has not yet taken effect — the current
            operational threshold remains KES 5 million. This covers rent from shops, offices,
            warehouses, industrial buildings, and any property let for business purposes.
          </p>
          <p>
            A landlord who lets exclusively residential property does not register for VAT. A landlord who lets
            commercial property and crosses the threshold must register, charge VAT at 16% on the rent, issue
            eTIMS invoices, and file VAT returns.
          </p>
          <p>
            The complication arises with <strong>mixed-use properties</strong> — a building with shops on the ground
            floor and flats above. In that case, rental income must be apportioned between the exempt residential
            portion and the taxable commercial portion. We cover the apportionment formula in detail below.
          </p>

          <div className="border border-brand/25 bg-brand-muted rounded-lg p-5">
            <div className="flex items-start gap-3">
              <Building size={20} className="text-brand shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-ink text-[0.9rem]">Key distinction</p>
                <p className="text-[0.83rem] text-ink-muted">
                  The VAT treatment follows the <em>use</em> of the property, not the owner&apos;s status.
                  A landlord who rents flats to individuals for dwelling purposes is making exempt supplies
                  regardless of how much rent they collect. A landlord who rents shops to traders is making
                  taxable supplies and must track turnover against the applicable VAT threshold (currently KES 5 million, with proposed rise to KES 8 million not yet effective).
                </p>
              </div>
            </div>
          </div>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            When Must a Landlord Register for VAT?
          </h2>
          <p>
            A landlord must <Link href="/resources/do-i-need-to-register-for-vat-kenya" className="text-brand underline underline-offset-2 hover:text-brand-hover">register for VAT</Link> if their <strong>taxable turnover</strong> (not total rental income)
            exceeds the VAT threshold (currently KES 5 million, with proposed rise to KES 8 million not yet effective) in any period of twelve months. Taxable turnover means income from commercial
            rent, service charges, parking fees, and any other taxable supplies — but not residential rent.
          </p>
          <p>
            The KRA looks at your actual income over a rolling twelve-month window. If you sign a commercial
            tenant in January for KES 700,000 per month, and your existing commercial tenants total KES 100,000
            per month, you will cross KES 5 million within about seven months. You must register within thirty days of
            crossing the threshold.
          </p>

          <h3 className="font-display text-[1.05rem] font-semibold text-ink mt-6 mb-2">
            Aggregating rental income with other business income
          </h3>
          <p>
            If you run a separate business — a shop, a consultancy, a logistics company — that income counts toward
            the VAT threshold (currently KES 5 million) alongside your commercial rental income. The KRA aggregates all taxable
            supplies across all your activities under the same PIN. A landlord who owns three shops and also runs
            a hardware store must add both income streams together to determine whether registration is required.
          </p>

          <h3 className="font-display text-[1.05rem] font-semibold text-ink mt-6 mb-2">
            Voluntary registration
          </h3>
          <p>
            A landlord who has not crossed the VAT threshold (currently KES 5 million) may still <strong>voluntarily register</strong>
            for VAT. This is a strategic decision: once registered, you must charge VAT on commercial rent, file
            returns, and comply with eTIMS — but you also unlock the right to claim input VAT on property expenses.
          </p>
          <p>
            For a landlord making significant capital improvements or paying large service fees, voluntary
            registration can produce a net cash benefit. The input VAT on a KES 5 million roof replacement
            (KES 800,000) may substantially exceed the output VAT collected on KES 6 million in commercial
            rent (KES 960,000). Do the arithmetic before deciding.
          </p>

          <div className="border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800/40 rounded-lg p-4 flex items-start gap-3">
            <Warning size={17} weight="fill" className="text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-ink text-[0.9rem]">Once registered you cannot opt out easily</p>
              <p className="text-[0.83rem] text-amber-700 dark:text-amber-400 leading-relaxed">
                Voluntary registration binds you for at least twenty-four months. You cannot cancel simply
                because your expenses are lower than expected.
              </p>
            </div>
          </div>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            Residential vs Commercial: What Is the Difference for VAT?
          </h2>
          <p>
            The VAT Act 2013 exempts &ldquo;the letting of residential accommodation&rdquo; from VAT. The KRA
            interprets this narrowly. A property is &ldquo;residential&rdquo; if it is used primarily as a
            dwelling by individuals. Serviced apartments, hostels, student accommodation, staff quarters, and
            care homes all qualify — provided the primary purpose is providing a place to live.
          </p>
          <p>
            A property is <strong>commercial</strong> if it is let for business, trade, or professional purposes.
            Shops, offices, warehouses, factories, workshops, showrooms, storage units, and event spaces are
            commercial. Short-term holiday letting (Airbnb) is a grey area — the KRA has sometimes treated it
            as commercial accommodation and sometimes as exempt residential, depending on duration and services.
          </p>

          <h3 className="font-display text-[1.05rem] font-semibold text-ink mt-6 mb-2">
            Mixed-use buildings and apportionment
          </h3>
          <p>
            A single building with both commercial and residential lettings requires you to <strong>apportion</strong>
            the rental income. The apportionment determines how much of your input VAT is recoverable and whether
            you cross the registration threshold.
          </p>
          <p>
            The standard approach is floor-area apportionment. If a building has 1,000 square metres, of which
            300 square metres is commercial space and 700 square metres is residential, then 30% of the rental
            income is treated as taxable turnover and 70% as exempt. The same ratio applies to shared expenses
            — electricity for common areas, security, cleaning, and maintenance.
          </p>

          <h3 className="font-display text-[1.05rem] font-semibold text-ink mt-6 mb-2">
            The Input Tax Apportionment Formula
          </h3>
          <p>
            Before the Finance Act 2025, mixed-use landlords used a standard 90:10 apportionment rule:
            90% of input VAT was recoverable regardless of the actual exempt/residential ratio. That rule
            has been <strong>deleted</strong>. Landlords now use the actual floor-area or revenue-based
            apportionment, and must justify their method to the KRA.
          </p>
          <p>
            This change significantly affects landlords with predominantly residential buildings and a small
            commercial component. Previously, a building with 10% commercial space could reclaim 90% of
            input VAT. Now, only 10% is reclaimable. Review your past returns if you relied on the 90:10 rule.
          </p>

          <div className="border border-brand/25 bg-brand-muted rounded-lg p-5">
            <div className="flex items-start gap-3">
              <CheckCircle size={18} className="text-brand shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-ink text-[0.9rem]">Example scenario</p>
                <p className="text-[0.83rem] text-ink-muted">
                  James owns a four-storey building. The ground floor is a shop (KES 200,000/month). The
                  three upper floors are flats (KES 450,000/month total). His total monthly income is
                  KES 650,000 (KES 7.8 million per year). The commercial portion is KES 200,000/month
                  (KES 2.4 million/year) — below the VAT threshold. He does not need to register.
                  But if he spends KES 1 million on a new roof, he cannot claim the input VAT because he
                  is not registered (and would not want to, since 76% of the expense relates to exempt
                  residential lettings).
                </p>
              </div>
            </div>
          </div>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            eTIMS for Landlords: Do I Need to Issue Invoices for Rent?
          </h2>
          <p>
            If you are a VAT-registered landlord letting commercial property, you must issue eTIMS-compliant
            invoices to your tenants. Each month when you collect rent, you generate an eTIMS invoice through
            the KRA eTIMS mobile app, the web portal, or an integrated ERP system.
          </p>
          <p>
            The invoice must show:
          </p>
          <ul className="space-y-1.5">
            {[
              "Your name, address, and KRA PIN",
              "Your tenant&apos;s name and KRA PIN (for B2B lettings)",
              "A description of the property let (unit number, building name, floor area)",
              "The rental period (month and year)",
              "The rent amount before VAT",
              "VAT at 16% calculated separately",
              "The total amount due",
              "A valid QR code generated by the eTIMS system",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            If you let residential property exclusively and are not VAT-registered, you do not issue eTIMS
            invoices for rent. However, you are still required to issue <strong>ETR receipts</strong> if you
            operate a rental office where tenants pay cash over the counter — but this is uncommon for
            residential lettings.
          </p>

          <h3 className="font-display text-[1.05rem] font-semibold text-ink mt-6 mb-2">
            Tenant eTIMS compliance
          </h3>
          <p>
            Commercial tenants who are VAT-registered need an eTIMS invoice from you to claim input VAT on
            their rent. If you fail to issue a proper eTIMS invoice, your tenant cannot deduct the VAT, which
            makes you an unattractive landlord. Expect tenants to request their eTIMS rent receipt — and to
            report you to KRA if you refuse.
          </p>
          <p>
            The KRA cross-references rental expenses claimed by tenants against rental income declared by
            landlords. A tenant who claims KES 3 million in rent will trigger a query if you have declared
            KES 1.5 million. This data-matching exercise has driven significant compliance improvement in
            the commercial property sector since 2024.
          </p>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            Can I Claim Input VAT on Property Expenses?
          </h2>
          <p>
            A VAT-registered landlord letting commercial property can claim <Link href="/resources/input-vat-deduction-guide" className="text-brand underline underline-offset-2 hover:text-brand-hover">input VAT on expenses</Link> incurred
             <em> wholly and exclusively </em> for the taxable (commercial) part of the rental business. The
            key principle is that input VAT is recoverable only to the extent that the goods or services are
            used to make taxable supplies.
          </p>

          <h3 className="font-display text-[1.05rem] font-semibold text-ink mt-6 mb-2">
            What qualifies
          </h3>
          <ul className="space-y-1.5">
            {[
              "Repairs and maintenance of commercial lettable areas (plumbing, electrical, painting, roofing)",
              "Property management fees charged by a managing agent",
              "Utilities for common areas used by commercial tenants (electricity, water, security lighting)",
              "Cleaning and janitorial services for common areas",
              "Security services for the building",
              "Insurance premiums on the commercial portion of the building",
              "Legal and professional fees related to commercial tenancy agreements",
              "Agent commissions for finding commercial tenants",
              "Marketing and advertising costs for commercial lettings",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="font-display text-[1.05rem] font-semibold text-ink mt-6 mb-2">
            What does NOT qualify
          </h3>
          <ul className="space-y-1.5">
            {[
              "Expenses relating exclusively to residential lettings (flat repairs, residential utility bills)",
              "Personal expenses of the landlord",
              "Purchase of the building itself (the VAT Act treats property purchases as capital goods subject to capital goods adjustment, not ordinary input VAT)",
              "Penalties and fines paid to KRA",
              "Entertainment expenses (unless directly related to taxable commercial lettings)",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <Warning size={14} className="text-amber-600 shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="font-display text-[1.05rem] font-semibold text-ink mt-6 mb-2">
            Capital improvements vs revenue expenditure
          </h3>
          <p>
            A common source of confusion is the distinction between capital improvements and revenue expenditure.
            <strong>Revenue expenditure</strong> — day-to-day repairs, maintenance, and management costs — is
            deductible for input VAT in the period incurred. <strong>Capital improvements</strong> — a new roof,
            an extension, a new lift, rewiring the entire building — are treated as capital goods.
          </p>
          <p>
            Capital goods adjustment means the input VAT is spread over several years (typically five years for
            immovable property). In the year of acquisition, you claim one-fifth of the input VAT, and you adjust
            the remaining four-fifths in subsequent years based on the taxable use of the building in each year.
            If the building&apos;s exempt/residential use increases, you may need to repay a portion of the
            input VAT previously claimed.
          </p>
          <p>
            This is complex. The capital goods adjustment rules (Regulation 12 of the VAT Regulations, 2017)
            require careful record-keeping and annual recalculations. Most landlords engage a tax adviser for
            the adjustment period.
          </p>

          <div className="border border-brand/25 bg-brand-muted rounded-lg p-5 mt-8">
            <div className="flex items-start gap-3">
              <House size={20} className="text-brand shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-ink text-[0.9rem]">Unsure about your rental VAT obligations?</p>
                <p className="text-[0.83rem] text-ink-muted mb-3">
                  We help landlords with VAT registration, eTIMS setup, input VAT claims, and capital
                  goods adjustment schedules. First consultation is free.
                </p>
                <a href="https://wa.me/254721725958?text=I%20need%20help%20with%20VAT%20for%20my%20rental%20property"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-4 py-2.5 rounded-md hover:bg-brand-hover transition-colors">
                  Ask Us on WhatsApp <ArrowRight size={14} weight="bold" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">Related Resources</h2>
          <ul className="space-y-2">
            {[
              ["How to Register for VAT in Kenya", "/resources/how-to-register-for-vat-in-kenya", "Step-by-step VAT registration guide including the registration threshold"],
              ["VAT vs Turnover Tax: What&rsquo;s the Difference?", "/resources/vat-vs-turnover-tax", "Understand which tax applies to your rental business"],
              ["Input VAT Deduction Guide", "/resources/input-vat-deduction-guide", "What qualifies for input VAT and how to claim it correctly"],
              ["Finance Act VAT Changes 2025", "/resources/finance-act-vat-changes-kenya", "All VAT amendments including the 90:10 rule deletion"],
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
          <ArticleGrid currentSlug="vat-for-landlords-kenya" />
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
  )
}
