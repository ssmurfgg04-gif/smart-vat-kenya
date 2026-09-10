import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info, User, Play } from "@phosphor-icons/react/dist/ssr"

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
    { "@type": "ListItem", position: 3, name: "YouTube 5% Tax Kenya", item: "https://smartvatkenya.co.ke/resources/youtube-5-percent-tax-kenya/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org" as const,
  "@type": "Article",
  headline: "YouTube 5% Tax Kenya: How Much You'll Actually Lose (With Calculator)",
  description:
    "Google is withholding 5% of Kenyan YouTube creators' AdSense earnings starting with September earnings paid in October 2026 - and payments get held entirely if your KRA PIN is not submitted by 1 October. The exact math, the deadlines, and what creators should do this week.",
  author: personSchema(),
  publisher: PUBLISHER,
  datePublished: "2026-09-10",
  dateModified: lastVerified,
  url: "https://smartvatkenya.co.ke/resources/youtube-5-percent-tax-kenya/",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/youtube-5-percent-tax-kenya/",
}

const faqSchema = {
  "@context": "https://schema.org" as const,
  "@type": "FAQPage" as const,
  mainEntity: [
    {
      "@type": "Question" as const,
      name: "How much is the YouTube tax in Kenya?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "5% of your gross AdSense earnings, withheld by Google before payment reaches you. On KES 100,000 of monthly AdSense income that is KES 5,000 withheld, leaving KES 95,000. Use our free YouTube tax calculator to run your exact numbers for any earnings level.",
      },
    },
    {
      "@type": "Question" as const,
      name: "What happens if I don't submit my KRA PIN to Google by October 1, 2026?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Google has told Kenyan creators that payments will be held if a valid KRA PIN is not on file by 1 October 2026. The earnings are not confiscated - but you cannot withdraw them until your tax details are submitted and validated. Getting a KRA PIN takes about 15 minutes online if you do not have one; the process is free.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Is the 5% extra tax on top of my income tax?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "The 5% is a withholding, not an additional tax: it is creditable against your final income tax liability, the same way PAYE is for employees. If your final tax bill works out lower than what was withheld, you claim the difference back through your return; if higher, you top up. The confusion on creator WhatsApp groups comes from treating it as a second tax - it is an advance payment on the one you already owed.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Which earnings does the 5% apply to?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "It starts with September 2026 earnings, which are paid out in October 2026. It applies to AdSense payments to Kenyan creators - the YouTube Partner Programme revenue Google pays you. Brand deals, MCN payments and other income streams outside AdSense are not affected by Google's withholding; those follow normal self-declaration rules.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Will the tax be suspended after the creators' protests?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "The Digital Content Creators Association of Kenya (DCCAK) has demanded suspension, but as of 10 September 2026 no suspension has been announced and Google's 1 October PIN deadline stands. Plan as if it proceeds: submit your PIN now (it costs nothing), keep evidence of earnings, and let the policy fight happen in the background. If a suspension or rate change comes, having your PIN on file costs you nothing.",
      },
    },
  ],
}

const toc = [
  { id: "what-happened", label: "What Google Announced" },
  { id: "calculator", label: "How Much You Actually Lose" },
  { id: "pin-deadline", label: "The 1 October PIN Deadline" },
  { id: "deductible", label: "Is It Extra Tax or an Advance?" },
  { id: "dccak", label: "The Creators' Pushback (DCCAK)" },
  { id: "do-this-week", label: "Do This Week (5 Steps)" },
  { id: "faq", label: "Frequently Asked Questions" },
]

const earningsTable = [
  { monthly: "10,000", tax: "500", net: "9,500", annualTax: "6,000" },
  { monthly: "50,000", tax: "2,500", net: "47,500", annualTax: "30,000" },
  { monthly: "100,000", tax: "5,000", net: "95,000", annualTax: "60,000" },
  { monthly: "250,000", tax: "12,500", net: "237,500", annualTax: "150,000" },
  { monthly: "500,000", tax: "25,000", net: "475,000", annualTax: "300,000" },
]

export default function YoutubeFivePercentTaxPage() {
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
            {["YouTube", "Creators", "Withholding Tax", "Breaking"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            YouTube 5% Tax Kenya: How Much You&apos;ll Actually Lose
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
            Google is now <strong className="text-ink">withholding 5% of Kenyan creators&apos; AdSense earnings</strong> &mdash; starting with September 2026 earnings, paid out in October. On KES 100,000/month, that is <strong className="text-ink">KES 5,000 withheld, KES 95,000 landing in your account</strong>. The urgent part is not the 5%: it is the deadline. <strong className="text-ink">Submit your KRA PIN by 1 October 2026 or Google holds your payments entirely.</strong> The 5% is a withholding creditable against income tax &mdash; not a second tax &mdash; but the PIN deadline is hard. <a href="/tools/youtube-tax-calculator/" className="text-brand underline underline-offset-2 hover:text-brand-hover">Run your exact numbers in the calculator</a>.
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
          {/* What happened */}
          <section id="what-happened" aria-labelledby="what-happened-h" className="scroll-mt-20">
            <h2 id="what-happened-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What Google Actually Announced
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                If you monetise on YouTube in Kenya, the email from Google is already in your inbox (or will be this week). Two changes, both following Kenya&apos;s push to tax the digital economy and the VAT (Electronic, Internet and Digital Marketplace Supply) framework that pulled digital services into the tax net:
              </p>
              <div className="space-y-3">
                {[
                  {
                    t: "5% withholding on AdSense earnings",
                    d: "Google deducts 5% of your gross AdSense earnings before paying you. It starts with September 2026 earnings, which land in your October payout - so the first reduced payment is the one you are about to receive.",
                  },
                  {
                    t: "KRA PIN required by 1 October 2026",
                    d: "Creators must submit a valid KRA PIN through their AdSense/YouTube tax settings. If the PIN is missing or invalid on 1 October, payments are held - not cancelled, but frozen until your details pass validation.",
                  },
                ].map(({ t, d }) => (
                  <div key={t} className="border border-hairline rounded-lg p-4 bg-canvas">
                    <p className="font-semibold text-ink text-[0.9rem] mb-1.5">{t}</p>
                    <p className="text-[0.84rem] text-ink-muted leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
              <p>
                Withholding at source by the paying platform is the same model Kenya already uses elsewhere &mdash; PAYE on salaries, withholding on professional fees. What makes it feel sudden for creators is that AdSense income used to sit entirely in the &ldquo;declare it yourself&rdquo; bucket, and most creators did not. That era ended the moment KRA and Google started reconciling payment data behind the scenes.
              </p>
            </div>
          </section>

          {/* Calculator */}
          <section id="calculator" aria-labelledby="calculator-h">
            <h2 id="calculator-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How Much You Actually Lose: The Exact Math
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The 5% applies to <strong className="text-ink">gross AdSense earnings</strong> &mdash; before your production costs, before YouTube&apos;s own revenue share is netted off your reported totals, before you buy that new microphone. Here is what it looks like at five earning levels, monthly and over a full year:
              </p>
              <div className="border border-hairline rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-[0.82rem]">
                    <thead>
                      <tr className="bg-canvas-alt border-b border-hairline">
                        <th className="text-left p-3.5 font-semibold text-ink">Monthly AdSense</th>
                        <th className="text-left p-3.5 font-semibold text-ink">5% withheld / month</th>
                        <th className="text-left p-3.5 font-semibold text-ink">You receive</th>
                        <th className="text-left p-3.5 font-semibold text-ink">Withheld / year</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-hairline">
                      {earningsTable.map((row) => (
                        <tr key={row.monthly}>
                          <td className="p-3.5 font-medium text-ink font-mono">KES {row.monthly}</td>
                          <td className="p-3.5 text-ink-muted font-mono">&minus; {row.tax}</td>
                          <td className="p-3.5 text-ink font-mono font-medium">{row.net}</td>
                          <td className="p-3.5 text-ink-muted font-mono">{row.annualTax}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p>
                Two honest observations from the table. First: 5% is smaller than the panic suggests &mdash; a creator earning KES 50,000/month loses KES 2,500, not their channel. Second: the annual column is where it bites; KES 300,000 withheld on KES 6M of earnings is a real sum, and it is <em>recoverable against your final income tax position</em> &mdash; which makes filing correctly more valuable than complaining. For your exact figure, including how it nets against income tax, use the calculator:
              </p>
              <a
                href="/tools/youtube-tax-calculator/"
                className="flex items-center gap-4 border border-brand/20 bg-brand-muted rounded-xl p-5 no-underline group hover:border-brand/40 transition-colors"
              >
                <Play size={28} weight="fill" className="text-brand shrink-0" aria-hidden="true" />
                <span>
                  <span className="block font-display text-[0.95rem] font-semibold text-ink group-hover:text-brand transition-colors">YouTube Tax Calculator &mdash; enter your monthly earnings</span>
                  <span className="block text-[0.8rem] text-ink-muted mt-0.5">See the 5% withheld, what lands in your account, and your annual totals. Free, no sign-up.</span>
                </span>
                <ArrowRight size={16} weight="bold" className="text-brand shrink-0 ml-auto" aria-hidden="true" />
              </a>
            </div>
          </section>

          {/* PIN deadline */}
          <section id="pin-deadline" aria-labelledby="pin-deadline-h">
            <h2 id="pin-deadline-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              The 1 October PIN Deadline: The Part That Actually Hurts
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The 5% is an inconvenience. The PIN requirement is a cliff. Google&apos;s notice is explicit: <strong className="text-ink">payments are held if a valid KRA PIN is not on file by 1 October 2026</strong>. Not reduced &mdash; held. Your earnings accumulate in AdSense but cannot be withdrawn until the tax details validate. For creators who depend on the October payout for rent, staff, or equipment loans, a frozen payment cycle is the real story of this change.
              </p>
              <p>
                If you already have a KRA PIN, this is a five-minute task: sign in to your AdSense payment/tax settings, enter the PIN exactly as it appears on your iTax profile (format A0123456789Z), and save well before the deadline so validation has time to run. If you have <em>never</em> registered for a PIN, the process is free and takes about 15 minutes online &mdash; our <a href="/resources/how-to-apply-for-kra-pin/" className="text-brand underline underline-offset-2 hover:text-brand-hover">15-minute KRA PIN application guide</a> walks you through it, including the documents you need and the errors that stall first-time applications.
              </p>
              <div className="border border-amber-200 bg-amber-50/50 dark:bg-amber-950/10 dark:border-amber-800/30 rounded-lg p-4 flex items-start gap-3">
                <Warning size={16} weight="fill" className="text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink text-[0.85rem] mb-1">Three weeks left when this was published</p>
                  <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                    This guide went live on 10 September 2026. If your PIN is not submitted yet, treat this week&apos;s to-do list as settled: new PIN applications can stall on ID mismatches and photo requirements, and a PIN issued on 30 September still needs to be entered and validated in AdSense. Do it now, not in the deadline rush.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Deductible */}
          <section id="deductible" aria-labelledby="deductible-h">
            <h2 id="deductible-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Is the 5% Extra Tax, or an Advance on Tax You Already Owed?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                This is where creator group chats are loudest and least accurate. The correct framing: the 5% is a <strong className="text-ink">withholding</strong> &mdash; an advance payment toward the income tax you already legally owed on this income, collected at source because KRA could not rely on voluntary declarations from thousands of small creators. It works like PAYE: withheld now, squared up when you file.
              </p>
              <p>
                What that means in practice depends on your total picture. If your AdSense income is your only income and you are below the tax-free band after reliefs, your final liability can be <em>less</em> than 5% &mdash; and you claim the excess back through your annual return. If you also earn salary, consulting income, or business profits, the 5% sits alongside your other withholdings and reduces your final bill. What you absolutely should not do is ignore the annual return because &ldquo;tax was already taken&rdquo; &mdash; unfiled returns attract the late-filing penalty of KES 2,000 for individuals (or 5% of tax due) and, until 31 December 2026, the amnesty is the cleanup path for past years, not a pass to skip new ones.
              </p>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Also worth knowing:</strong> your channel&apos;s costs &mdash; cameras, editing subscriptions, data, hired editors &mdash; are deductible business expenses against creator income when properly documented with eTIMS-compliant receipts. Most creators never claim them, which is the silent second tax. The <a href="/resources/etims-can-i-claim-my-expenses/" className="text-brand underline underline-offset-2 hover:text-brand-hover">creator expense-claim guide</a> lists exactly what qualifies.
                </p>
              </div>
            </div>
          </section>

          {/* DCCAK */}
          <section id="dccak" aria-labelledby="dccak-h">
            <h2 id="dccak-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              The Creators&apos; Pushback: DCCAK&apos;s Suspension Demand
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The Digital Content Creators Association of Kenya (DCCAK) has formally demanded suspension of the withholding, arguing the digital creative economy needs protection and that consultation was thin. The argument has force: creators already pay VAT on the tools they buy, income tax on their profits, and &mdash; for many &mdash; VAT on their brand-deal invoices if registered. A visible platform-level deduction makes the burden impossible to ignore, which is precisely why it is also politically sticky.
              </p>
              <p>
                But strategy and hope are different skills. As of publication, no suspension has been announced, Google&apos;s systems are built, and the 1 October deadline stands. The creators who lose least are the ones who complied immediately: PIN submitted, withholding absorbed into pricing and budgets, records kept, and expenses documented. If DCCAK wins a suspension, compliant creators lose nothing. If it does not, non-compliant creators lose their October payout. That asymmetry makes the decision for you.
              </p>
            </div>
          </section>

          {/* Do this week */}
          <section id="do-this-week" aria-labelledby="do-this-week-h">
            <h2 id="do-this-week-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Do This Week: Five Steps, About an Hour
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <ol className="space-y-3" role="list">
                {[
                  "Confirm your KRA PIN status: if you have one, retrieve it from iTax; if you cannot log in, that is the first thing to fix (password resets are the slowest part).",
                  "No PIN yet? Apply online now - 15 minutes with your ID and a passport-style photo. Follow the step-by-step guide and watch for the common rejection reasons.",
                  "Enter the PIN in your AdSense/YouTube payment tax settings well before 1 October, exactly in the A0123456789Z format.",
                  "Run your numbers in the YouTube tax calculator so the October payout matches expectations instead of ambushing your budget.",
                  "Start collecting eTIMS-compliant receipts for every channel expense from now on - the documentation you build this quarter decides how much of the withheld 5% comes back at filing time.",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-mono text-[0.7rem] font-semibold text-canvas bg-brand min-w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                    <span className="text-[0.87rem] leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection faqSchema={faqSchema} />
        </article>

        {/* Sources & Methodology */}
        <div className="mt-12 border-t border-hairline pt-8">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-muted mb-3">Sources &amp; Methodology</p>
          <p className="text-[0.78rem] text-ink-muted leading-relaxed max-w-[60ch]">
            Withholding rate, payment-hold rule and the 1 October 2026 PIN deadline per Google&apos;s creator notifications for Kenya, September 2026. DCCAK suspension demand per public statements, September 2026. Income tax mechanics per the Income Tax Act; late-filing penalties per the Tax Procedures Act. Table figures are arithmetic on gross AdSense earnings. This article is information, not tax advice for your specific case. Last verified: 10 September 2026.
          </p>
        </div>

        {/* More Guides */}
        <div className="mt-10 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="youtube-5-percent-tax-kenya" />
        </div>

        {/* CTA */}
        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">Creator with a bigger tax question?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[40ch] mx-auto leading-relaxed">
            Run the free calculator, then get your KRA PIN sorted &mdash; or have a KRA-registered agent handle registration for KES 5,000 flat.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/tools/youtube-tax-calculator/"
              className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
            >
              Open the Calculator
              <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
            <a
              href="/resources/how-to-apply-for-kra-pin/"
              className="inline-flex items-center gap-2 border border-hairline text-ink font-semibold text-sm px-5 py-3 rounded-md hover:border-ink/30 transition-colors"
            >
              Get Your KRA PIN (15 min)
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
