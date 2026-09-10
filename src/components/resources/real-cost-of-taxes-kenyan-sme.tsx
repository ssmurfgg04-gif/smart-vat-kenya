import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info, User, Calculator } from "@phosphor-icons/react/dist/ssr"

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
    { "@type": "ListItem", position: 3, name: "The Real Tax on Running a Small Business in Kenya", item: "https://smartvatkenya.co.ke/resources/real-cost-of-taxes-kenyan-sme/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org" as const,
  "@type": "Article",
  headline: "The Real Tax on Running a Small Business in Kenya (Every Levy, Added Up)",
  description:
    "The complete, numbered bill a Kenyan SME owner actually faces: VAT, PAYE, housing levy, NSSF, SHIF, eTIMS discipline, permits and penalty risk - with a worked example at KES 6M turnover and the legal ways to shrink it.",
  author: personSchema(),
  publisher: PUBLISHER,
  datePublished: "2026-09-10",
  dateModified: lastVerified,
  url: "https://smartvatkenya.co.ke/resources/real-cost-of-taxes-kenyan-sme/",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/real-cost-of-taxes-kenyan-sme/",
}

const faqSchema = {
  "@context": "https://schema.org" as const,
  "@type": "FAQPage" as const,
  mainEntity: [
    {
      "@type": "Question" as const,
      name: "How many taxes does a small business in Kenya actually pay?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "A VAT-registered SME with employees typically touches seven to nine separate obligations every month or year: VAT returns and payment, PAYE, NSSF employer shares, the affordable housing levy, SHIF deductions (from employees), the single business permit, annual income tax, and eTIMS invoicing discipline throughout. The count varies with registration status and headcount, but the surprise for most owners is not any single levy - it is how many separate deadlines and systems the total spans.",
      },
    },
    {
      "@type": "Question" as const,
      name: "What is the biggest hidden cost of Kenya's tax system for SMEs?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Time and penalty exposure, not the headline rates. A VAT-registered owner spends roughly 40-60 hours a year on filing and reconciliation, and every obligation carries a penalty clock: KES 10,000 or 5% for late VAT filing, interest at 1% per month on unpaid tax, and eTIMS non-compliance penalties reaching the higher of 5% of tax due or KES 100,000 for companies. A single missed month can cost more than a year of accounting help.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Is VAT a cost to my business if I'm registered?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Properly run, VAT on your sales is not your money - you collect it and remit it, and you reclaim the VAT on your business purchases as input VAT. The real cost is the working-capital timing and the discipline: eTIMS-compliant invoices for claims, monthly reconciliation, and filing by the 20th. The trap is being registered without claiming inputs properly - that converts a pass-through tax into a real 16% cost.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Can I reduce what my small business pays legally?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Yes, and most owners leave money on the table in four places: claiming all qualifying input VAT with eTIMS receipts, choosing the right regime (turnover tax at 3% of gross vs VAT at 16% with input credits, depending on your margins), using the 2026 tax amnesty to clear pre-2026 penalty baggage before it blocks tenders and TCCs, and deducting genuine business expenses that were never documented. None of that is avoidance - it is the arithmetic the law already gives you.",
      },
    },
  ],
}

const toc = [
  { id: "the-full-list", label: "Every Levy, Numbered" },
  { id: "worked-example", label: "Worked Example: KES 6M Shop" },
  { id: "time-cost", label: "The Time Bill (Hours/Year)" },
  { id: "penalty-risk", label: "The Penalty Exposure" },
  { id: "shrink-the-bill", label: "How to Shrink It - Legally" },
  { id: "faq", label: "Frequently Asked Questions" },
]

export default function RealCostOfTaxesKenyanSmePage() {
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
            {["SME", "All Taxes", "Shareable", "2026"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            The Real Tax on Running a Small Business in Kenya: Every Levy, Added Up
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
            A VAT-registered Kenyan SME with two staff juggles <strong className="text-ink">eight-plus separate obligations</strong>: VAT, PAYE, NSSF, the housing levy, SHIF, eTIMS discipline, the business permit, and annual income tax. The headline rates are only half the bill &mdash; the rest is <strong className="text-ink">40-60 hours a year of filing time</strong> and penalty clocks that can charge <strong className="text-ink">KES 10,000+ per slip</strong>. Here is the whole stack, one worked example, and the four legal ways to shrink it.
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
          {/* The full list */}
          <section id="the-full-list" aria-labelledby="the-full-list-h" className="scroll-mt-20">
            <h2 id="the-full-list-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Every Levy, Numbered
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Tax debates argue about rates. Owners live with the whole stack. This is the complete list for a VAT-registered business with employees &mdash; the same stack whether you sell hardware in Gikomba or run a two-person agency in Westlands.
              </p>
              <div className="border border-hairline rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-[0.82rem]">
                    <thead>
                      <tr className="bg-canvas-alt border-b border-hairline">
                        <th className="text-left p-3.5 font-semibold text-ink">#</th>
                        <th className="text-left p-3.5 font-semibold text-ink">Obligation</th>
                        <th className="text-left p-3.5 font-semibold text-ink">What it costs</th>
                        <th className="text-left p-3.5 font-semibold text-ink">Deadline rhythm</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-hairline">
                      {[
                        { n: "1", o: "VAT (16% standard rate)", c: "Pass-through if inputs are claimed; ~16% net cost if not", d: "20th monthly" },
                        { n: "2", o: "PAYE on staff salaries", c: "Employees' tax - you withhold and remit", d: "9th monthly" },
                        { n: "3", o: "NSSF (employer share)", c: "Matched social security contribution per employee", d: "9th monthly" },
                        { n: "4", o: "Affordable housing levy", c: "1.5% of gross pay (employer) + 1.5% (employee)", d: "9th monthly" },
                        { n: "5", o: "SHIF health cover", c: "2.75% of gross salary, deducted from employees", d: "Monthly, by 9th" },
                        { n: "6", o: "eTIMS invoicing", c: "No tax itself - but every sale must be e-invoiced or penalties apply", d: "Daily discipline" },
                        { n: "7", o: "Single business permit", c: "County fee, roughly KES 5,000-15,000/yr for small premises", d: "Annual (Jan)" },
                        { n: "8", o: "Annual income tax", c: "30% of business profit (company) or personal bands", d: "30 June / 4 months after year-end" },
                        { n: "9", o: "Turnover tax (if under VAT threshold instead)", c: "3% of gross sales, no input credits", d: "20th monthly" },
                      ].map((row) => (
                        <tr key={row.n}>
                          <td className="p-3.5 font-mono text-ink-muted">{row.n}</td>
                          <td className="p-3.5 font-medium text-ink">{row.o}</td>
                          <td className="p-3.5 text-ink-muted">{row.c}</td>
                          <td className="p-3.5 text-ink-muted whitespace-nowrap">{row.d}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p>
                Notice what the list actually is: <strong className="text-ink">five different monthly deadlines</strong>, one annual county payment, one annual return, and a daily invoicing rule. Nobody argues about any single line. The bill that shocks owners is the sum &mdash; and the fact that five of the clocks tick every single month.
              </p>
            </div>
          </section>

          {/* Worked example */}
          <section id="worked-example" aria-labelledby="worked-example-h">
            <h2 id="worked-example-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Worked Example: A KES 6M Hardware Shop, Two Staff
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Meet the example every number below refers to: a Nairobi hardware store, annual sales KES 6 million (above the VAT registration threshold, so VAT is mandatory), two employees at KES 25,000 gross monthly each, healthy margins, purchases about 55% of sales. Here is the owner&apos;s real annual stack, laid out honestly &mdash; including the parts that are pass-through rather than true cost.
              </p>
              <div className="border border-hairline rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-[0.82rem]">
                    <thead>
                      <tr className="bg-canvas-alt border-b border-hairline">
                        <th className="text-left p-3.5 font-semibold text-ink">Item</th>
                        <th className="text-left p-3.5 font-semibold text-ink">Per year (illustrative)</th>
                        <th className="text-left p-3.5 font-semibold text-ink">Owner&apos;s true cost</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-hairline">
                      {[
                        { item: "VAT collected on sales (16%)", amt: "~KES 830,000", cost: "Pass-through - holds customers' money until the 20th" },
                        { item: "Input VAT reclaimed on purchases", amt: "~KES 475,000", cost: "Recovered - if receipts are eTIMS-compliant" },
                        { item: "Net VAT remitted to KRA", amt: "~KES 355,000", cost: "Zero true cost when inputs are claimed properly" },
                        { item: "PAYE for both staff (after reliefs)", amt: "~KES 40,000", cost: "Employees' money, administered by the owner" },
                        { item: "NSSF + housing levy (employer side)", amt: "~KES 18,000", cost: "Real employer cost" },
                        { item: "Business permit", amt: "~KES 7,500", cost: "Real cost" },
                        { item: "Income tax on ~KES 900,000 profit", amt: "~KES 240,000+", cost: "Real cost - the actual tax on being profitable" },
                        { item: "Filing time (50 hours @ shop value)", amt: "50 hours", cost: "Real cost - evenings and Saturdays" },
                      ].map((row) => (
                        <tr key={row.item}>
                          <td className="p-3.5 font-medium text-ink">{row.item}</td>
                          <td className="p-3.5 text-ink-muted font-mono text-[0.78rem]">{row.amt}</td>
                          <td className="p-3.5 text-ink-muted">{row.cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p>
                Read the last column twice. The genuinely painful items &mdash; income tax on profit, employer contributions, the permit, and the 50 hours &mdash; total far less than the numbers the VAT line moves. VAT dominates the cash-flow experience (nearly a million shillings passing through the till) while being mostly not the owner&apos;s money. That gap between <em>cash handled</em> and <em>money lost</em> is why tax conversations among owners are so confused: everyone is describing a different line of this table.
              </p>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Figures are illustrative</strong>, rounded for readability, and shift with your margins, staffing and county. Run your own numbers with the <a href="/tools/" className="text-brand underline underline-offset-2 hover:text-brand-hover">free VAT and penalty calculators</a> - the shock value of this table is the structure, not the exact shillings.
                </p>
              </div>
            </div>
          </section>

          {/* Time cost */}
          <section id="time-cost" aria-labelledby="time-cost-h">
            <h2 id="time-cost-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              The Time Bill: 40-60 Hours a Year
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The tax nobody names is the one paid in evenings. VAT returns with eTIMS reconciliation: two to four hours a month once you know the system, double that in your first quarter. PAYE, NSSF, housing levy and SHIF filings: another hour, if everything reconciles the first time. The annual income tax return: an afternoon plus the days spent finding the documents for it. Add eTIMS housekeeping - stock uploads, certificate renewals, sync checks - and a competent owner burns <strong className="text-ink">40-60 hours a year</strong> on compliance that sells nothing.
              </p>
              <p>
                At a shop&apos;s effective hourly value, that is a real annual expense &mdash; and it explains the managed-filing market without any marketing: KES 3,500/month buys back most of those hours and moves the penalty risk to someone who files on the 17th as a habit. The honest version of this article&apos;s advice is that the biggest tax reduction available to many owners is buying their own time back.
              </p>
            </div>
          </section>

          {/* Penalty risk */}
          <section id="penalty-risk" aria-labelledby="penalty-risk-h">
            <h2 id="penalty-risk-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              The Penalty Exposure: Where the Bill Goes Wrong
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Every obligation above carries a clock, and the clocks are not forgiving. This is the layer that turns a manageable stack into a crisis &mdash; and the layer the 2026 amnesty exists to forgive (until 31 December, for pre-2026 charges).
              </p>
              <ul className="space-y-2.5">
                {[
                  "Late VAT filing: the higher of KES 10,000 or 5% of tax due, plus 1% monthly interest on unpaid tax.",
                  "eTIMS non-compliance: the higher of 5% of tax due or KES 100,000 (companies) / KES 10,000 (individuals) under TPA s.86 as amended; KES 100,000/month for non-integration under s.59A(5).",
                  "Never registering for VAT when required: KES 100,000 per month of exposure under TPA s.95 - the silent one, because it accrues before KRA says anything.",
                  "PAYE and statutory deduction slips: penalties and interest per head, per month - small individually, brutal across a year.",
                ].map((item) => (
                  <li key={item.slice(0, 30)} className="flex items-start gap-3 text-[0.85rem] text-ink-soft">
                    <Warning size={15} weight="fill" className="text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                The pattern in every penalty story we see at the filing desk is the same: not recklessness, but <em>one</em> missed month during a busy season, followed by a year of quiet accrual that only surfaces with a tender&apos;s TCC requirement. If you carry pre-2026 penalties, the <a href="/tools/amnesty-checker/" className="text-brand underline underline-offset-2 hover:text-brand-hover">free amnesty eligibility check</a> tells you in four questions what can still be wiped.
              </p>
            </div>
          </section>

          {/* Shrink the bill */}
          <section id="shrink-the-bill" aria-labelledby="shrink-the-bill-h">
            <h2 id="shrink-the-bill-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How to Shrink the Bill &mdash; Legally
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Every reduction below is arithmetic the law already gives you. None of them is a scheme; all of them are things most SME owners simply never get around to.
              </p>
              <div className="space-y-3">
                {[
                  {
                    t: "1. Claim every shilling of input VAT",
                    d: "The hardware example recovers ~KES 475,000 a year - but only with eTIMS-compliant supplier invoices and claims inside the 6-month window. Miss the discipline and VAT silently becomes a real 16% cost instead of a pass-through.",
                  },
                  {
                    t: "2. Pick the right regime before the threshold picks you",
                    d: "Below KES 5M turnover, turnover tax at 3% of gross with zero input credits can beat VAT at 16% with credits - depending entirely on your margin. High-margin, low-purchase businesses often belong in TOT; purchase-heavy ones almost never do. Decide with the VAT vs TOT guide, not by default.",
                  },
                  {
                    t: "3. Clear the penalty baggage while the amnesty is open",
                    d: "Pre-2026 penalties, interest and fines are 100% waivable until 31 December 2026 (principal where due must be settled). After that date this paragraph becomes history - the cleanup is worth a ledger check this quarter, not in December's queue.",
                  },
                  {
                    t: "4. Document the expenses you already incur",
                    d: "Rent on business premises, data, fuel for deliveries, professional fees - deductible when documented with compliant receipts, invisible when paid in cash and forgotten. The documentation habit is the cheapest tax reduction on this list.",
                  },
                ].map(({ t, d }) => (
                  <div key={t} className="border border-hairline rounded-lg p-4 bg-canvas">
                    <p className="font-semibold text-ink text-[0.9rem] mb-1.5">{t}</p>
                    <p className="text-[0.84rem] text-ink-muted leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection faqSchema={faqSchema} />
        </article>

        {/* Sources & Methodology */}
        <div className="mt-12 border-t border-hairline pt-8">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-muted mb-3">Sources &amp; Methodology</p>
          <p className="text-[0.78rem] text-ink-muted leading-relaxed max-w-[60ch]">
            Rates and penalties per the Value Added Tax Act (16% standard), Income Tax Act (PAYE bands, rental rules), Tax Procedures Act ss.86, 95 (as amended by Finance Act 2026), and the 2026 Tax Amnesty Programme. Statutory contribution rates (NSSF, SHIF, housing levy) as applied to the illustrative payroll. Worked-example figures are rounded illustrations for a KES 6M-turnover, two-employee business, not averages. Last verified: 10 September 2026.
          </p>
        </div>

        {/* More Guides */}
        <div className="mt-10 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="real-cost-of-taxes-kenyan-sme" />
        </div>

        {/* CTA */}
        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">Recognised your business in the table?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[40ch] mx-auto leading-relaxed">
            Run the free calculators, check amnesty eligibility, or hand the monthly stack to a KRA-registered agent from KES 3,500/month.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/tools/"
              className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
            >
              Free Tools &amp; Calculators
              <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
            <a
              href="/tools/amnesty-checker/"
              className="inline-flex items-center gap-2 border border-hairline text-ink font-semibold text-sm px-5 py-3 rounded-md hover:border-ink/30 transition-colors"
            >
              Amnesty Eligibility Check
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
