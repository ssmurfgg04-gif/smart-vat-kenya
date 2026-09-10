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
    { "@type": "ListItem", position: 3, name: "VAT Registration Kenya: Compare All Options", item: "https://smartvatkenya.co.ke/resources/vat-registration-kenya-compare-options/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org" as const,
  "@type": "Article",
  headline: "VAT Registration Kenya: Compare All 3 Options (DIY, Facilitator, Flat-Fee Agent)",
  description:
    "An honest cost-time-risk comparison of the three ways to register for VAT in Kenya: DIY on iTax (free but slow and error-prone), traditional facilitators (KES 15,000-30,000), and flat-fee online tax agents (KES 5,000, 1-3 working days).",
  author: personSchema(),
  publisher: PUBLISHER,
  datePublished: "2026-09-10",
  dateModified: lastVerified,
  url: "https://smartvatkenya.co.ke/resources/vat-registration-kenya-compare-options/",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/vat-registration-kenya-compare-options/",
}

const faqSchema = {
  "@context": "https://schema.org" as const,
  "@type": "FAQPage" as const,
  mainEntity: [
    {
      "@type": "Question" as const,
      name: "Is DIY VAT registration on iTax really free?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "KRA charges no fee for VAT registration - the application itself on iTax is free. What DIY costs you is time and risk: a typical DIY application takes 1-3 weeks including error corrections, and mistakes (wrong sector code, missing KRA-practising certificate for agents, mismatched bank details) push it back further. The late-registration penalty of KES 100,000 per month under TPA s.95 starts once you cross the KES 5 million threshold, so 'free but slow' can become expensive if your obligation has already been triggered.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Why do traditional facilitators charge KES 15,000-30,000?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Traditional facilitators price in physical visits (Huduma Centre queues, KRA offices), paperwork handling, and relationship overhead. Their fee reflects a manual, in-person process designed before online agent portals matured. The work itself - filling forms and following up - is the same regardless of what you pay, which is why online-first agents can deliver the same outcome at KES 5,000 flat.",
      },
    },
    {
      "@type": "Question" as const,
      name: "What should I check before hiring anyone to register my business for VAT?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Three things: (1) whether they are a KRA-registered tax agent with a valid PIN and practising status, (2) whether the fee is flat and all-inclusive or will grow with 'follow-up charges', and (3) who keeps the iTax login and PIN certificate afterwards - it should be you. Also ask whether eTIMS onboarding is included, because from October 2025 a Tax Compliance Certificate requires eTIMS compliance, and some cheap offers exclude it.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Can I switch from DIY to an agent mid-application?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Yes. Your application lives on iTax against your KRA PIN, so an agent can pick up a stuck application, correct the errors, and re-submit without starting over. You will need to appoint them as your tax agent on iTax first (a short online process), and any documents already uploaded stay attached to your file. This is one of the most common fixes we handle - applications rejected twice for the same error.",
      },
    },
    {
      "@type": "Question" as const,
      name: "How long does VAT registration take in Kenya?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "KRA officially issues a VAT PIN within 1-3 working days of a clean application. The catch is 'clean': most DIY applications hit at least one rejection cycle (wrong obligation selection, invalid document scan, bank details that do not match the PIN), and each cycle adds 3-7 days. A correctly prepared application - right codes, right documents, right order - is what separates a 3-day registration from a 3-week one.",
      },
    },
  ],
}

const toc = [
  { id: "quick-comparison", label: "The 3 Options at a Glance" },
  { id: "option-1-diy", label: "Option 1: DIY on iTax (Free)" },
  { id: "option-2-facilitator", label: "Option 2: Traditional Facilitators" },
  { id: "option-3-agent", label: "Option 3: Flat-Fee Online Agents" },
  { id: "hidden-costs", label: "Costs After Registration" },
  { id: "how-to-choose", label: "How to Choose" },
  { id: "faq", label: "Frequently Asked Questions" },
]

export default function VatRegistrationCompareOptionsPage() {
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
            {["Registration", "Comparison", "Pricing"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            VAT Registration Kenya: Compare All 3 Options Before You Pay Anyone
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
            There are exactly three ways to register for VAT in Kenya: <strong className="text-ink">do it yourself on iTax</strong> (free, but 1-3 weeks and error-prone), <strong className="text-ink">hire a traditional facilitator</strong> (KES 15,000-30,000, in-person), or <strong className="text-ink">use a flat-fee online tax agent</strong> (KES 5,000, 1-3 working days). KRA itself charges nothing &mdash; every shilling you pay buys speed and error-avoidance. If your turnover is already above <strong className="text-ink">KES 5 million</strong>, the KES 100,000/month late-registration penalty makes slow-and-free the most expensive option on this page.
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
          {/* Section 1 - Quick comparison */}
          <section id="quick-comparison" aria-labelledby="quick-comparison-h" className="scroll-mt-20">
            <h2 id="quick-comparison-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              The 3 Options at a Glance
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Most guides explain <em>how</em> to register and stop there. But if you are reading this, you already know the process exists &mdash; what you actually need to decide is <strong className="text-ink">who does the work and what that is worth</strong>. The table below is the decision in one view: what each option costs in shillings, in days, and in rejection risk. The sections after it explain where each number comes from, so you can pressure-test any quote a facilitator gives you.
              </p>
              <div className="border border-hairline rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-[0.82rem]">
                    <thead>
                      <tr className="bg-canvas-alt border-b border-hairline">
                        <th className="text-left p-3.5 font-semibold text-ink">Factor</th>
                        <th className="text-left p-3.5 font-semibold text-ink">DIY on iTax</th>
                        <th className="text-left p-3.5 font-semibold text-ink">Traditional facilitator</th>
                        <th className="text-left p-3.5 font-semibold text-ink bg-brand-muted">Flat-fee online agent</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-hairline">
                      {[
                        { label: "Upfront cost", diy: "KES 0", fac: "KES 15,000-30,000", agent: "KES 5,000 flat" },
                        { label: "Typical timeline", diy: "1-3 weeks", fac: "1-2 weeks", agent: "1-3 working days" },
                        { label: "Rejection risk", diy: "High - 14+ error codes", fac: "Medium", agent: "Low - pre-checked" },
                        { label: "Where it happens", diy: "Your browser, your retries", fac: "Their office + Huduma queues", agent: "WhatsApp + agent portal" },
                        { label: "eTIMS onboarding", diy: "Self-onboarding", fac: "Often charged extra", agent: "Included" },
                        { label: "Obligation check", diy: "You interpret the rules", fac: "Verbal opinion", agent: "Documented against KRA guidance" },
                      ].map((row) => (
                        <tr key={row.label}>
                          <td className="p-3.5 font-medium text-ink">{row.label}</td>
                          <td className="p-3.5 text-ink-muted">{row.diy}</td>
                          <td className="p-3.5 text-ink-muted">{row.fac}</td>
                          <td className="p-3.5 text-ink bg-brand-muted/50 font-medium">{row.agent}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p>
                One caveat before the detail: <strong className="text-ink">"flat-fee agent" is a category, not a brand</strong>. We (Smart VAT Kenya) charge KES 5,000 and we publish that number everywhere, but the category includes other KRA-registered agents too. The point of this comparison is that you should expect the flat-fee, WhatsApp-first, agent-portal model &mdash; whoever delivers it &mdash; and treat any quote above KES 10,000 as needing a written justification.
              </p>
            </div>
          </section>

          {/* Section 2 - DIY */}
          <section id="option-1-diy" aria-labelledby="option-1-diy-h">
            <h2 id="option-1-diy-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Option 1: DIY on iTax &mdash; Free, If Your Time Is Worth Nothing
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Registering yourself costs KRA fees of exactly zero. You log into iTax with your PIN, update your taxpayer profile, add the VAT obligation, fill in VAT Form 1 details (business activities, sector code, expected turnover, bank account), upload a certified PIN certificate scan, and submit. On paper it is a 30-minute job.
              </p>
              <p>
                In practice, three things stretch 30 minutes into weeks. First, <strong className="text-ink">error codes</strong>: iTax rejects applications for at least fourteen distinct reasons &mdash; from sector codes that do not match your stated activities to bank account names that differ by one letter from your PIN registration. Each rejection means decoding the message, fixing it, and re-queuing. Second, <strong className="text-ink">portal behaviour</strong>: the public portal slows or drops sessions near month-end, which is precisely when you will be retrying. Third, <strong className="text-ink">sequencing</strong>: obligations must be added in the right order with the right effective dates, and getting this wrong can create a obligation you did not want (with filing duties attached) instead of the one you did.
              </p>
              <div className="border border-amber-200 bg-amber-50/50 dark:bg-amber-950/10 dark:border-amber-800/30 rounded-lg p-4 flex items-start gap-3">
                <Warning size={16} weight="fill" className="text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink text-[0.85rem] mb-1">The hidden cost of "free"</p>
                  <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                    If your turnover has already crossed KES 5 million, your obligation to register exists <em>now</em> &mdash; the KES 100,000 per month non-registration penalty under TPA s.95 accrues while a DIY application sits in a rejection loop. Three weeks of DIY can quietly cost more than any facilitator on this page.
                  </p>
                </div>
              </div>
              <p>
                DIY is right for you if you are below the threshold (voluntary registration), not in a hurry, genuinely comfortable with government portals, and treat the learning as an investment &mdash; you will be back on iTax every month once registered. Our <a href="/resources/how-to-register-for-vat-in-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">step-by-step registration guide</a> walks the whole process, including the error codes and their fixes, and our <a href="/resources/vat-registration-checklist/" className="text-brand underline underline-offset-2 hover:text-brand-hover">registration checklist</a> lists every document you need before you start.
              </p>
            </div>
          </section>

          {/* Section 3 - Facilitators */}
          <section id="option-2-facilitator" aria-labelledby="option-2-facilitator-h">
            <h2 id="option-2-facilitator-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Option 2: Traditional Facilitators &mdash; KES 15,000-30,000 for In-Person Handling
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                This is the market that existed before online agent portals matured: an office you visit, a person who takes your documents, and a fee between KES 15,000 and 30,000 depending on Nairobi versus upcountry, how urgent it is, and how connected the facilitator claims to be. Some are excellent, disciplined practitioners. Others sell proximity and relationships more than process.
              </p>
              <p>
                What you are actually buying at this price is <strong className="text-ink">physical delegation</strong>: someone else queues at Huduma or the KRA service centre, chases paper, and interprets error messages for you. That model carries real costs of its own &mdash; office rent and staff get priced in &mdash; and real risks: pricing is often opaque (a low opening quote grows with "follow-up" or "express" charges), timelines are managed by phone calls rather than systems, and your original documents travel in someone else's bag. Because the fee is quoted verbally, comparing two facilitators is close to impossible until you have committed.
              </p>
              <p>
                A facilitator is right for you if you want a face-to-face relationship, you are comfortable with the price band, and the person can show you a track record (KRA agent registration, references, a physical office you can revisit). Ask one question before paying: <em>"Is that the total, in writing, including eTIMS onboarding?"</em> &mdash; the answer separates professionals from intermediaries fast.
              </p>
            </div>
          </section>

          {/* Section 4 - Flat-fee agents */}
          <section id="option-3-agent" aria-labelledby="option-3-agent-h">
            <h2 id="option-3-agent-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Option 3: Flat-Fee Online Agents &mdash; KES 5,000, 1-3 Working Days
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The newest model, and the one this site operates: a KRA-registered agent who works through the <strong className="text-ink">agent portal</strong> (a separate iTax interface for professionals, with better uptime than the public portal), quotes one flat fee before starting, and runs the whole relationship over WhatsApp. Registration is KES 5,000 flat, completed in 1-3 working days, with eTIMS onboarding included because a VAT PIN without working e-invoicing is only half the job since the October 2025 Tax Compliance Certificate changes.
              </p>
              <p>
                Why is it 3-6x cheaper than facilitators without being slower? Three structural reasons: no physical offices to fund, no paper to move (you send document photos, the agent files digitally), and process discipline &mdash; applications are pre-checked against the known rejection codes before submission, so the 1-3 day KRA turnaround is the real timeline rather than a best case. The trade-off is honest and worth stating plainly: you do not get in-person meetings, and you are trusting a WhatsApp thread and a published price instead of a handshake. That is why flat-fee agents publish their process and let you keep your own iTax login and PIN certificate after registration.
              </p>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Not ready to pay anyone?</strong> Take the free 60-second quiz on our <a href="/tools/#quiz-heading" className="text-brand font-medium underline underline-offset-2 hover:text-brand-hover">tools page</a> to confirm you actually need to register, then use the free guides in Option 1. And if you want the handling done for you, <a href="/services/vat-registration/" className="text-brand font-medium underline underline-offset-2 hover:text-brand-hover">our VAT registration service</a> is KES 5,000 flat, done in 1-3 working days.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 - Hidden costs */}
          <section id="hidden-costs" aria-labelledby="hidden-costs-h">
            <h2 id="hidden-costs-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              The Costs That Come After the PIN
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Registration is a one-off decision; compliance is a monthly bill. Whichever option you choose, the day your VAT PIN is issued you inherit a filing obligation on the 20th of every month, eTIMS invoicing duties, and penalty exposure for both. Comparing options only on the registration fee is like comparing wedding venues on the cake.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Monthly VAT filing: your return and payment are due by the 20th. DIY costs hours on iTax near deadline; managed filing runs KES 3,500/month with agents filing around the 17th.",
                  "eTIMS compliance: every VAT-registered business must issue eTIMS invoices. Non-compliance penalties start at the higher of 5% of tax due or KES 100,000 for companies (TPA s.86, as amended by Finance Act 2026).",
                  "Input VAT discipline: without eTIMS-compliant purchase receipts, you cannot claim input VAT - which is the entire financial point of being registered.",
                  "Penalty exposure: late filing runs 5% or KES 10,000 (whichever is higher) plus 1% monthly interest. The 2026 amnesty wipes pre-2026 penalties until 31 December 2026 - after that, every month counts.",
                ].map((item) => (
                  <li key={item.slice(0, 30)} className="flex items-start gap-3 text-[0.85rem] text-ink-soft">
                    <CheckCircle size={15} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                This is also why the eTIMS-included flat-fee model exists at all: an agent who registers you and walks away leaves you holding the hardest part. When you compare quotes, compare <em>what the fee finishes</em>, not just what it starts.
              </p>
            </div>
          </section>

          {/* Section 6 - How to choose */}
          <section id="how-to-choose" aria-labelledby="how-to-choose-h">
            <h2 id="how-to-choose-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How to Choose: Three Questions
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Strip everything else away and the decision reduces to three questions. Answer them in order and the option picks itself.
              </p>
              <div className="space-y-3">
                {[
                  {
                    q: "1. Is your obligation already live?",
                    a: "If turnover is past KES 5M (or you supply digital services to Kenyan customers), penalties are accruing - choose the fastest reliable option (flat-fee agent) and register this week, not this month.",
                  },
                  {
                    q: "2. What is a week of your time actually worth?",
                    a: "If the honest answer is 'more than KES 5,000', DIY is the expensive option regardless of its zero price tag. If the answer is 'less', and you are patient with portals, DIY is genuinely fine.",
                  },
                  {
                    q: "3. Do you value in-person handling enough to pay 3-6x for it?",
                    a: "Some owners genuinely do, and a good facilitator is worth every shilling for them. If you do not, the flat-fee model gives you the same KRA outcome at a sixth of the price.",
                  },
                ].map(({ q, a }) => (
                  <div key={q} className="border border-hairline rounded-lg p-4 bg-canvas">
                    <p className="font-semibold text-ink text-[0.9rem] mb-1.5">{q}</p>
                    <p className="text-[0.84rem] text-ink-muted leading-relaxed">{a}</p>
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
            Facilitator pricing observed from advertised rates and client reports in Nairobi and Kisumu, August-September 2026. Registration timelines and rejection behaviour drawn from Smart VAT Kenya's registration desk (KES 5,000 flat, eTIMS included) and the agent portal. Penalty figures per Tax Procedures Act ss.86, 95 and Finance Act 2026 amendments; threshold per KRA guidance (KES 5M, verified 2026-08-08). Last verified: 10 September 2026.
          </p>
        </div>

        {/* More Guides */}
        <div className="mt-10 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="vat-registration-kenya-compare-options" />
        </div>

        {/* CTA */}
        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">Decided how you want to register?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[40ch] mx-auto leading-relaxed">
            Take the free eligibility quiz first - or have a KRA-registered agent do it all for KES 5,000 flat.
          </p>
          <a
            href="https://wa.me/254717344440?text=Hi%2C%20I%20read%20the%20registration%20comparison.%20I%20want%20VAT%20registration%20at%20KES%205%2C000%20flat."
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
