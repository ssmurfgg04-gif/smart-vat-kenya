import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info, User } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"
import { DEFAULT_AUTHOR, personSchema, PUBLISHER } from "@/src/lib/authors"

const author = DEFAULT_AUTHOR
const lastVerified = "2026-09-10"

const breadcrumbSchema = {
  "@context": "https://schema.org" as const,
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "VAT on Commercial Rent Kenya", item: "https://smartvatkenya.co.ke/resources/vat-commercial-rent-kenya/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org" as const,
  "@type": "Article",
  headline: "VAT on Commercial Rent Kenya: Residential vs Commercial (2026)",
  description:
    "Commercial rent in Kenya is a standard-rated supply at 16% VAT once the landlord crosses KES 5M annual rental turnover; residential rent is VAT-exempt. The landlord's guide to registration, invoicing, eTIMS and input VAT.",
  author: personSchema(),
  publisher: PUBLISHER,
  datePublished: "2026-09-10",
  dateModified: lastVerified,
  url: "https://smartvatkenya.co.ke/resources/vat-commercial-rent-kenya/",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/vat-commercial-rent-kenya/",
}

const faqSchema = {
  "@context": "https://schema.org" as const,
  "@type": "FAQPage" as const,
  mainEntity: [
    {
      "@type": "Question" as const,
      name: "Do I charge VAT on commercial rent in Kenya?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Yes, if you are VAT-registered. Commercial rent (shops, offices, warehouses, godowns) is a standard-rated supply at 16%. Registration becomes mandatory once your total taxable turnover - including commercial rent - exceeds KES 5 million in 12 months. Below that you may still register voluntarily to reclaim input VAT on property costs.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Is residential rent VAT-able in Kenya?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "No. Residential rent is an exempt supply for VAT purposes - you never charge 16% VAT on it and you cannot claim input VAT attributable to it. Residential rental income is instead taxed under the income tax rules for rental income, not VAT. The distinction matters on mixed-use properties, where the split between exempt and taxable floor space drives both your VAT position and your input VAT recovery.",
      },
    },
    {
      "@type": "Question" as const,
      name: "My commercial tenant insists on an eTIMS invoice. What do I need?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "VAT-registered landlords must issue rent invoices through eTIMS, and tenants need those invoices to claim their input VAT. You need your VAT PIN, the tenant's KRA PIN on each invoice, the correct supply classification, and 16% VAT shown separately. Tenants increasingly withhold payment until a compliant eTIMS invoice arrives because without it their deduction is lost.",
      },
    },
    {
      "@type": "Question" as const,
      name: "How does VAT work on mixed-use buildings?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "You apportion. Rent from the commercial portion is standard-rated; rent from the residential portion is exempt. Input VAT on shared costs (common services, repairs, security) is recovered in proportion to taxable use, typically measured by floor area or revenue split. The apportionment method must be consistent and defensible - it is one of the first things KRA examines in landlord audits.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Does the KES 5M threshold include residential rent?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "No. The VAT registration threshold counts taxable turnover - standard-rated and zero-rated supplies. Exempt supplies, including residential rent, are excluded from the KES 5 million calculation. A landlord with KES 3M commercial and KES 6M residential rent has KES 3M taxable turnover and is below the mandatory VAT threshold, though the exempt income still carries its own income tax obligations.",
      },
    },
  ],
}

const toc = [
  { id: "quick-answer-table", label: "Residential vs Commercial at a Glance" },
  { id: "commercial-rent-16", label: "Why Commercial Rent Is 16%" },
  { id: "threshold", label: "The KES 5M Threshold for Landlords" },
  { id: "mixed-use", label: "Mixed-Use Buildings & Apportionment" },
  { id: "etims-invoicing", label: "eTIMS Rent Invoicing for Landlords" },
  { id: "input-vat", label: "Input VAT Landlords Can Claim" },
  { id: "faq", label: "Frequently Asked Questions" },
]

export default function VatCommercialRentKenyaPage() {
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
            {["Landlords", "Commercial Rent", "VAT", "Property"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            VAT on Commercial Rent in Kenya: When the 16% Applies &mdash; and When It Doesn&apos;t
          </h1>
          <div className="flex flex-wrap items-center gap-4 mb-4 text-[0.78rem] text-canvas/60">
            <span className="flex items-center gap-1.5">
              <User size={13} weight="fill" aria-hidden="true" />
              <span className="font-medium text-canvas/80">{author.name}</span>
              <span className="text-canvas/40">|</span>
              <span>{author.title}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-canvas/50">Last verified:</span>
              <time dateTime={lastVerified} className="font-mono text-canvas/70">
                {new Date(lastVerified).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
              </time>
            </span>
          </div>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; KRA-registered VAT agents</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">
        {/* Quick Answer / BLUF */}
        <div className="border-l-[3px] border-brand pl-5 mb-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Quick Answer</p>
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            <strong className="text-ink">Commercial rent is VAT-able at 16%</strong> once your annual taxable turnover (including commercial rent) passes <strong className="text-ink">KES 5 million</strong>. <strong className="text-ink">Residential rent is VAT-exempt</strong> &mdash; never charge 16% on it. Commercial tenants registered for VAT <em>need</em> your eTIMS invoice to claim their input VAT, which is why they now withhold payment until a compliant invoice arrives. Landlords caught unregistered while collecting above-threshold commercial rent face the KES 100,000/month non-registration penalty under TPA s.95.
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
          {/* Quick answer table */}
          <section id="quick-answer-table" aria-labelledby="quick-answer-table-h" className="scroll-mt-20">
            <h2 id="quick-answer-table-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Residential vs Commercial at a Glance
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The single most expensive confusion for Kenyan landlords is treating all rent the same for VAT. The law splits your property income into two different VAT universes, and which side of the line a unit sits on decides whether 16% applies, whether you can recover VAT on your costs, and whether your tenant can recover VAT on your rent.
              </p>
              <div className="border border-hairline rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-[0.82rem]">
                    <thead>
                      <tr className="bg-canvas-alt border-b border-hairline">
                        <th className="text-left p-3.5 font-semibold text-ink">Question</th>
                        <th className="text-left p-3.5 font-semibold text-ink">Residential rent</th>
                        <th className="text-left p-3.5 font-semibold text-ink">Commercial rent</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-hairline">
                      {[
                        { q: "VAT treatment", res: "Exempt supply", com: "Standard-rated, 16%" },
                        { q: "Charge VAT?", res: "Never", com: "Yes, if VAT-registered" },
                        { q: "Counts toward KES 5M threshold?", res: "No (exempt)", com: "Yes (taxable)" },
                        { q: "Claim input VAT on costs?", res: "No, on attributable costs", com: "Yes, proportionate" },
                        { q: "Tenant claims input VAT?", res: "No", com: "Yes - needs eTIMS invoice" },
                        { q: "eTIMS invoicing", res: "Not a VAT invoice", com: "Mandatory rent invoices" },
                        { q: "Income tax side", res: "Rental income tax rules", com: "Normal business income" },
                      ].map((row) => (
                        <tr key={row.q}>
                          <td className="p-3.5 font-medium text-ink">{row.q}</td>
                          <td className="p-3.5 text-ink-muted">{row.res}</td>
                          <td className="p-3.5 text-ink-muted">{row.com}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p>
                "Commercial" is broader than most landlords assume: shops and offices, yes, but also warehouses, godowns, industrial units, hotel space, and short-stay serviced units operating as business premises. "Residential" means a dwelling used as a home. When a property serves both (a shop with a landlord's flat above, a mixed block), skip to the apportionment section &mdash; the answer is a split, not a coin flip.
              </p>
            </div>
          </section>

          {/* Why commercial is 16% */}
          <section id="commercial-rent-16" aria-labelledby="commercial-rent-16-h">
            <h2 id="commercial-rent-16-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Why Commercial Rent Is Standard-Rated
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Under the VAT Act, letting commercial property is a supply of services in the course of business &mdash; the same category as an agency selling you advertising or logistics. Standard rate: 16%. The economic logic is a chain: your commercial tenant uses the premises to make taxable supplies, charges VAT to their customers, and needs the VAT you charged them as input credit. The system only works if each link issues a proper invoice &mdash; which is exactly why eTIMS rent invoicing has become a condition of doing business with VAT-registered tenants.
              </p>
              <p>
                In practice this changes lease negotiations. A VAT-registered tenant comparing two identical shops cares about your <em>invoice</em>, not just your rent: from a landlord who cannot issue a compliant VAT invoice, their effective rent is 16% higher because the credit is lost. Many leases now state explicitly whether rent is quoted inclusive or exclusive of VAT, and tenants increasingly withhold payment or offset until a compliant eTIMS invoice is produced. If you own commercial space and have not thought about your VAT position, your property is quietly less competitive than the identical one next door with a registered landlord.
              </p>
            </div>
          </section>

          {/* Threshold */}
          <section id="threshold" aria-labelledby="threshold-h">
            <h2 id="threshold-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              The KES 5M Threshold &mdash; Counted the Right Way
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Mandatory VAT registration triggers when your <strong className="text-ink">taxable</strong> turnover &mdash; standard-rated plus zero-rated supplies &mdash; exceeds KES 5 million over 12 months. Exempt supplies, including residential rent, are excluded from that arithmetic. That produces three common landlord situations:
              </p>
              <div className="space-y-3">
                {[
                  {
                    t: "KES 8M residential rent only",
                    d: "Taxable turnover: zero. No VAT registration required, no VAT charged, no VAT returns. Income tax on rental income still applies - do not confuse the two regimes.",
                  },
                  {
                    t: "KES 3M commercial + KES 4M residential",
                    d: "Taxable turnover: KES 3M. Below threshold - but voluntary registration lets you recover input VAT on the commercial building's costs, which often outweighs the compliance burden once the property is mortgaged or newly built.",
                  },
                  {
                    t: "KES 6M commercial (any residential mix)",
                    d: "Taxable turnover: KES 6M. Over threshold - registration is mandatory, and the obligation started when you crossed KES 5M, not when KRA notices. Penalties for late registration run KES 100,000 per month (TPA s.95).",
                  },
                ].map(({ t, d }) => (
                  <div key={t} className="border border-hairline rounded-lg p-4 bg-canvas">
                    <p className="font-semibold text-ink text-[0.9rem] mb-1.5">{t}</p>
                    <p className="text-[0.84rem] text-ink-muted leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
              <div className="border border-amber-200 bg-amber-50/50 dark:bg-amber-950/10 dark:border-amber-800/30 rounded-lg p-4 flex items-start gap-3">
                <Warning size={16} weight="fill" className="text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink text-[0.85rem] mb-1">Rising commercial rents trigger thresholds silently</p>
                  <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                    Rent reviews, new leases, and appreciation push landlords across KES 5M without any single moment feeling like a decision. KRA cross-checks rental income against land records and lease registrations, so the crossing date it computes is usually earlier than the one landlords assume. If you are within KES 1M of the line, <a href="/resources/vat-threshold-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">read the threshold rules</a> before your next review - and note the 2026 amnesty can wipe accrued penalties, but only until 31 December 2026.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Mixed use */}
          <section id="mixed-use" aria-labelledby="mixed-use-h">
            <h2 id="mixed-use-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Mixed-Use Buildings: Apportionment, Not Guesswork
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                A building with a ground-floor shop and residential floors above earns two kinds of income: standard-rated commercial rent and exempt residential rent. VAT is assessed on the split. On direct costs the treatment follows the unit: repairs to the shop are fully recoverable input VAT; repairs to a flat are irrecoverable. On shared costs &mdash; roof works, lifts, security, common lighting, the generator &mdash; you apportion, most commonly by floor area or by revenue, and the method must be applied consistently year to year and be defensible in an audit.
              </p>
              <p>
                This is the area where landlord VAT goes wrong most often, in both directions. Over-claiming shared input VAT invites a KRA assessment plus interest; under-claiming silently hands the taxman money that was yours. A registered agent's monthly reconciliation (KES 3,500/month) typically pays for itself on mixed-use properties through the recovery alone. If you self-manage, keep a floor-area schedule and a revenue split updated at every lease change, and reconcile the eTIMS invoice trail to it before each return.
              </p>
            </div>
          </section>

          {/* eTIMS invoicing */}
          <section id="etims-invoicing" aria-labelledby="etims-invoicing-h">
            <h2 id="etims-invoicing-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              eTIMS Rent Invoicing: What Tenants Now Demand
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Every VAT-registered landlord must issue rent invoices through eTIMS &mdash; the KRA electronic invoicing system. A compliant commercial rent invoice carries your VAT PIN, the tenant's KRA PIN, the supply description, the period the rent covers, and VAT at 16% shown separately. Tenants need that invoice to claim their input deduction, and since input VAT on rent is usually one of a tenant's largest recurring credits, invoice quality has become a payment condition: no compliant invoice, no release of the rent.
              </p>
              <p>
                Practically: onboard once (device or eTIMS Lite/VAT Online invoice option), issue monthly rent invoices before or with your payment demand, and keep the eTIMS trail aligned with what you declare in your VAT returns &mdash; because KRA's systems already reconcile the two. If invoices bounce or the system rejects your submissions, that is a solvable problem: our <a href="/tools/etims-diagnostic/" className="text-brand underline underline-offset-2 hover:text-brand-hover">free eTIMS diagnostic</a> walks the common rent-invoicing errors, and the <a href="/resources/etims-invoice-rejected/" className="text-brand underline underline-offset-2 hover:text-brand-hover">rejected-invoice guide</a> covers the deeper cases.
              </p>
            </div>
          </section>

          {/* Input VAT */}
          <section id="input-vat" aria-labelledby="input-vat-h">
            <h2 id="input-vat-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Input VAT Landlords Can Claim (and the 6-Month Rule)
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Once registered, the VAT you are charged on costs attributable to your commercial letting becomes recoverable input VAT: construction and fit-out on commercial units, repairs and maintenance (attributable portion), property management and agency fees, security and cleaning services for commercial areas, utilities billed to the landlord, and professional fees (legal, accounting) related to the taxable letting. The receipts must be eTIMS-compliant invoices obtained within the claim window &mdash; six months from the date of the invoice under current KRA rules.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Construction of a new commercial block: recover the 16% embedded in contractor certificates - on a KES 30M build that is roughly KES 4.1M of recoverable VAT, the single biggest number in this guide.",
                  "Renovations and structural repairs: recoverable to the extent of taxable (commercial) use.",
                  "Mortgage-linked works: the VAT on construction is recoverable even when financed; the interest itself is not a VAT supply.",
                  "Furniture and fittings for furnished commercial lets: recoverable; for residential units, not.",
                  "Estate services (security, cleaning, garbage) for common areas: apportion between taxable and exempt use.",
                ].map((item) => (
                  <li key={item.slice(0, 30)} className="flex items-start gap-3 text-[0.85rem] text-ink-soft">
                    <CheckCircle size={15} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                The offsetting discipline: input VAT claims must trace to eTIMS invoices whose supplier details and PINs match, and claims must land in the return for the period (or the amendment window) that includes them. Sloppy claim timing is the most common trigger for the KRA refund desk to move a landlord into the audit queue - see <a href="/resources/vat-special-table-risks/" className="text-brand underline underline-offset-2 hover:text-brand-hover">the Special Table risk guide</a> if you expect regular refunds.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection faqSchema={faqSchema} />
        </article>

        {/* Sources & Methodology */}
        <div className="mt-12 border-t border-hairline pt-8">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-muted mb-3">Sources &amp; Methodology</p>
          <p className="text-[0.78rem] text-ink-muted leading-relaxed max-w-[60ch]">
            VAT treatment per the Value Added Tax Act, 2013 (standard rate 16%; exempt supplies include residential letting) and KRA guidance on rental supplies, verified 2026-08-08. Registration threshold KES 5M per KRA official guidance. Penalty figures per Tax Procedures Act ss.86, 95. Input VAT claim window per KRA eTIMS rules. This guide covers VAT only; income tax on rental income is a separate regime. Last verified: 10 September 2026.
          </p>
        </div>

        {/* More Guides */}
        <div className="mt-10 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="vat-commercial-rent-kenya" />
        </div>

        {/* CTA */}
        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">Own commercial property?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[40ch] mx-auto leading-relaxed">
            Check where you stand against the KES 5M line, then register and start invoicing tenants properly &mdash; VAT registration is KES 5,000 flat.
          </p>
          <a
            href="mailto:info@smartvatkenya.co.ke?subject=Hi%2C%20I%20own%20commercial%20rental%20property%20and%20want%20to%20sort%20my%20VAT%20position."
            className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            Sort My Rental VAT
            <ArrowRight size={14} weight="bold" aria-hidden="true" />
          </a>
          <div className="mt-4">
            <a href="/resources/" className="text-[0.82rem] text-ink-muted hover:text-brand transition-colors underline underline-offset-2">
              &larr; All Resources
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
