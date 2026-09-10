import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info, User, Printer } from "@phosphor-icons/react/dist/ssr"

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
    { "@type": "ListItem", position: 3, name: "Consolidated Cargo Benchmark Kenya", item: "https://smartvatkenya.co.ke/resources/consolidated-cargo-benchmark-kenya/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org" as const,
  "@type": "NewsArticle",
  headline: "Consolidated Cargo Tax Kenya: New Sh2M Benchmark + What's Excluded",
  description:
    "President Ruto directed KRA on 2 September 2026 to cut the consolidated cargo benchmark value from Sh3.2 million to Sh2 million after Gikomba, Nyamakima and Kamukunji trader protests. What changed, what stays excluded (garments, footwear, fabrics), and what traders should do at customs this month.",
  author: personSchema(),
  publisher: PUBLISHER,
  datePublished: "2026-09-10",
  dateModified: lastVerified,
  url: "https://smartvatkenya.co.ke/resources/consolidated-cargo-benchmark-kenya/",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/consolidated-cargo-benchmark-kenya/",
}

const faqSchema = {
  "@context": "https://schema.org" as const,
  "@type": "FAQPage" as const,
  mainEntity: [
    {
      "@type": "Question" as const,
      name: "What is the consolidated cargo benchmark in Kenya?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "It is the minimum value KRA assigns to a consolidated consignment (many small traders' goods shipped together in one container) for customs duty and VAT purposes. If your declared goods value is below the benchmark, tax is calculated on the benchmark instead. Benchmark values exist so that under-declaration cannot shrink the tax base on small consignments.",
      },
    },
    {
      "@type": "Question" as const,
      name: "What changed on 2 September 2026?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Following protests by Gikomba, Nyamakima and Kamukunji traders, President Ruto directed KRA to reduce the consolidated cargo benchmark from USD-equivalent Sh3.2 million to Sh2 million per container. The cut reduces the assessed value on which import duty and VAT are computed for consolidated consignments that fall under the benchmark system.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Which goods keep the old (higher) benchmark rates?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "The reduction comes with an exclusion list: garments, footwear, and fabrics are excluded from the new benchmark and continue on their previous assessment. If your consignment is dominated by these categories, do not assume your tax bill fell - check with your clearing agent against your specific goods mix before budgeting a shipment.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Did air cargo benchmark rates change?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "No. The directive addressed the consolidated sea cargo benchmark that triggered the trader protests. Air cargo assessment was not part of this change and follows its existing values and rules.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Is the Sh2M benchmark the value of my goods?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "No - it is the minimum assessable value for tax purposes on qualifying consolidated consignments, not a market value or a price. Your actual invoice values still matter for declaration, and if your goods are worth more than the benchmark, tax follows the higher declared value. The benchmark only sets the floor.",
      },
    },
  ],
}

const toc = [
  { id: "what-changed", label: "What Changed on 2 September" },
  { id: "benchmark-explained", label: "How the Benchmark Works" },
  { id: "exclusion-list", label: "The Exclusion List" },
  { id: "at-customs", label: "At Customs This Month" },
  { id: "one-pager", label: "Printable One-Pager" },
  { id: "faq", label: "Frequently Asked Questions" },
]

export default function ConsolidatedCargoBenchmarkPage() {
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
            {["Customs", "Importers", "Breaking", "Gikomba"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            Consolidated Cargo Tax Kenya: New Sh2M Benchmark &mdash; and the Exclusion List Traders Are Confused About
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
            On <strong className="text-ink">2 September 2026</strong>, after a week of protests in Gikomba, Nyamakima and Kamukunji, President Ruto directed KRA to cut the consolidated cargo benchmark from <strong className="text-ink">Sh3.2 million to Sh2 million</strong> per container. The cut lowers the minimum value on which duty and import VAT are computed for consolidated consignments &mdash; but <strong className="text-ink">garments, footwear and fabrics are excluded</strong> and keep the old assessment. Air cargo did not change. Print our <a href="/cargo-one-pager/" className="text-brand underline underline-offset-2 hover:text-brand-hover">one-page summary for your clearing agent</a> before your next entry.
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
          {/* What changed */}
          <section id="what-changed" aria-labelledby="what-changed-h" className="scroll-mt-20">
            <h2 id="what-changed-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What Changed on 2 September
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The week before the directive, Nairobi&apos;s trading hubs were shut by protests: Gikomba, Nyamakima and Kamukunji traders closed shops over the Sh3.2 million consolidated cargo benchmark, which had quietly raised the tax floor on the containers they share. Consolidated shipping &mdash; dozens of small traders&apos; goods in one container &mdash; is how small-scale importers afford freight at all, so a benchmark set at Sh3.2M taxed many consignments on values far above what the goods inside actually cost.
              </p>
              <p>
                On 2 September, after the demonstrations made national news, President Ruto directed KRA to cut the benchmark to <strong className="text-ink">Sh2 million</strong>. For a qualifying consignment, every tax computed on assessed value &mdash; import duty and the 16% import VAT &mdash; now runs off the lower floor. That is real money on a single container, and it is why clearing agents&apos; phones have not stopped since the announcement.
              </p>
              <div className="border border-amber-200 bg-amber-50/50 dark:bg-amber-950/10 dark:border-amber-800/30 rounded-lg p-4 flex items-start gap-3">
                <Warning size={16} weight="fill" className="text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink text-[0.85rem] mb-1">A cut with a carve-out</p>
                  <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                    The reduction is not across the board. Garments, footwear and fabrics &mdash; the backbone of exactly the markets that protested &mdash; are excluded from the new benchmark and continue on their previous assessment. Voice notes claiming &ldquo;everything now pays less&rdquo; are wrong in the way that costs traders money at entry.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benchmark explained */}
          <section id="benchmark-explained" aria-labelledby="benchmark-explained-h">
            <h2 id="benchmark-explained-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How the Benchmark Actually Works
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                A benchmark value is KRA&apos;s answer to under-declaration: the minimum value a category of goods is assessed at for customs purposes, regardless of the invoice. For consolidated cargo, KRA sets a floor per container. If the declared value of everything inside is below the floor, tax is computed on the floor. If your goods genuinely exceed it, your declared value governs &mdash; the benchmark is a minimum, not a fixed price.
              </p>
              <p>
                What that means mechanically for a Sh2M-benchmark consignment: import duty (rate depends on the goods) and import VAT at 16% are computed on at least Sh2 million of assessed value, allocated across the traders in the container. VAT-registered traders can later claim that import VAT as input VAT when they file &mdash; which makes proper entry documentation (and eTIMS-compliant onward invoicing) the difference between the VAT being a cost and a credit. Unregistered traders just absorb it, one reason the benchmark debate hits small traders hardest.
              </p>
              <p>
                It is worth being precise about what the benchmark is not: it is not a tax itself, and cutting it is not a tax holiday. It is the ruler the taxes are measured with. The traders who benefit most from this change are those whose goods values cluster near the floor; traders whose consignments were already assessed above Sh2M see little to no change.
              </p>
            </div>
          </section>

          {/* Exclusion list */}
          <section id="exclusion-list" aria-labelledby="exclusion-list-h">
            <h2 id="exclusion-list-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              The Exclusion List: Read It Before You Budget a Shipment
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The directive excludes three categories from the new Sh2M benchmark: <strong className="text-ink">garments, footwear, and fabrics</strong>. These continue on their previous assessment values. The practical effect is a two-track system inside the same container: a mixed consignment with household goods and garments pays part of its assessment at the new benchmark and part at the old values.
              </p>
              <div className="border border-hairline rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-[0.82rem]">
                    <thead>
                      <tr className="bg-canvas-alt border-b border-hairline">
                        <th className="text-left p-3.5 font-semibold text-ink">Your consignment</th>
                        <th className="text-left p-3.5 font-semibold text-ink">Effect of the 2 Sept cut</th>
                        <th className="text-left p-3.5 font-semibold text-ink">Before your next entry</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-hairline">
                      {[
                        { goods: "General goods (not excluded)", effect: "New Sh2M benchmark applies - lower duty/VAT floor", action: "Ask agent to recompute with Sh2M floor" },
                        { goods: "Garments", effect: "Excluded - old assessment continues", action: "Budget at old values; no reduction" },
                        { goods: "Footwear", effect: "Excluded - old assessment continues", action: "Budget at old values; no reduction" },
                        { goods: "Fabrics / textiles", effect: "Excluded - old assessment continues", action: "Budget at old values; no reduction" },
                        { goods: "Mixed container", effect: "Split assessment: new floor + old values", action: "Get the split in writing from your agent" },
                        { goods: "Air cargo", effect: "No change", action: "Plan on existing rates" },
                      ].map((row) => (
                        <tr key={row.goods}>
                          <td className="p-3.5 font-medium text-ink">{row.goods}</td>
                          <td className="p-3.5 text-ink-muted">{row.effect}</td>
                          <td className="p-3.5 text-ink-muted">{row.action}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p>
                The confusion cost here is asymmetric: a trader who <em>assumes</em> the cut applies to their garments over-budgets (annoying), but a trader who assumes their general goods still pay the old floor under-budgets and gets an unexpected bill at entry (expensive, and the reason cargo sits accruing storage). Verify your exact goods mix against the exclusion list with your clearing agent <em>before</em> the vessel docks, not at the terminal.
              </p>
            </div>
          </section>

          {/* At customs */}
          <section id="at-customs" aria-labelledby="at-customs-h">
            <h2 id="at-customs-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              At Customs This Month: What to Do Differently
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Benchmark changes create a transition window, and transition windows are where paperwork errors happen. KRA systems, clearing agents, and freight forwarders do not all update in sync &mdash; a release note dated 2 September does not recompute an entry lodged on 1 September. Five practices protect you this month:
              </p>
              <ol className="space-y-2.5" role="list">
                {[
                  "Get the assessment in writing before release: ask your clearing agent for the computed benchmark value on your entry, per line, and confirm excluded categories were charged on old values - not 'estimated'.",
                  "Watch the entry date cut-off: entries lodged before the directive may assess at the previous benchmark even if they release after. Ask which date governs your file.",
                  "Split consignments deliberately: if your container mixes excluded and non-excluded goods, the declaration split is where the money lives. Review the split before lodging, not after assessment.",
                  "Keep every entry document for input VAT: VAT-registered traders claim import VAT as input credit, but only with matching entry documentation and eTIMS-compliant onward invoicing.",
                  "Dispute quietly and quickly: if an assessment ignores the new benchmark, raising it through the agent at assessment time is a correction; discovering it after release becomes a refund application - a slower, harder road.",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-mono text-[0.7rem] font-semibold text-canvas bg-brand min-w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                    <span className="text-[0.87rem] leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* One-pager */}
          <section id="one-pager" aria-labelledby="one-pager-h">
            <h2 id="one-pager-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              The Printable One-Pager for Your Clearing Agent
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Half the argument at the counter is having the facts in one place. We put the benchmark change, the exclusion list, and the at-customs checklist on a single printable page &mdash; designed to be printed and handed to your clearing agent or kept in your shipment file.
              </p>
              <a
                href="/cargo-one-pager/"
                className="flex items-center gap-4 border border-brand/20 bg-brand-muted rounded-xl p-5 no-underline group hover:border-brand/40 transition-colors"
              >
                <Printer size={26} weight="duotone" className="text-brand shrink-0" aria-hidden="true" />
                <span>
                  <span className="block font-display text-[0.95rem] font-semibold text-ink group-hover:text-brand transition-colors">Open the printable one-pager</span>
                  <span className="block text-[0.8rem] text-ink-muted mt-0.5">One page: what changed, what&apos;s excluded, what to check at entry. Print it, hand it over.</span>
                </span>
                <ArrowRight size={16} weight="bold" className="text-brand shrink-0 ml-auto" aria-hidden="true" />
              </a>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection faqSchema={faqSchema} />
        </article>

        {/* Sources & Methodology */}
        <div className="mt-12 border-t border-hairline pt-8">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-muted mb-3">Sources &amp; Methodology</p>
          <p className="text-[0.78rem] text-ink-muted leading-relaxed max-w-[60ch]">
            Benchmark reduction directive of 2 September 2026 per Presidential communication and KRA implementation guidance; protest context per national coverage of the Gikomba/Nyamakima/Kamukunji closures. Exclusion list per the directive&apos;s terms. Import VAT mechanics per the Value Added Tax Act and iCMS assessment rules. This article is information, not customs advice for a specific entry. Last verified: 10 September 2026.
          </p>
        </div>

        {/* More Guides */}
        <div className="mt-10 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="consolidated-cargo-benchmark-kenya" />
        </div>

        {/* CTA */}
        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">Importing regularly?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[40ch] mx-auto leading-relaxed">
            Get VAT-registered so import VAT becomes an input credit instead of a cost - registration is KES 5,000 flat, done in 1-3 working days.
          </p>
          <a
            href="https://wa.me/254717344440?text=Hi%2C%20I%20import%20goods%20and%20want%20VAT%20registration%20so%20I%20can%20claim%20import%20VAT."
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            Register for KES 5,000
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
