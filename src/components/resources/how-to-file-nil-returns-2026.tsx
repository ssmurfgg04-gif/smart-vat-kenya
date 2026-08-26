import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"
import { ArticleGrid } from "@/lib/resources"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "How to File Nil Returns 2026", item: "https://smartvatkenya.co.ke/resources/how-to-file-nil-returns-2026/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to File Nil Returns on KRA iTax Kenya 2026 - Step-by-Step Guide | how to file nil returns 2026",
  description:
    "The complete 2026 step-by-step guide to filing nil returns on KRA iTax. Monthly VAT nil returns, annual income tax nil returns for students and the unemployed, the new No Obligation PIN status, and the penalties you avoid by filing on time.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-08-10",
  dateModified: "2026-08-10",
  url: "https://smartvatkenya.co.ke/resources/how-to-file-nil-returns-2026",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/how-to-file-nil-returns-2026",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I file a nil return on KRA iTax in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Log into itax.kra.go.ke, go to Returns → VAT Returns, select the filing period, leave all amounts at KES 0.00, tick the declaration box, and click Submit. Save the confirmation receipt. For income tax nil returns, use Returns → File Nil Return → Income Tax – Resident Individual.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to file a nil return if I made no sales this month?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every VAT-registered business must file a return every month, even with zero activity. Skipping a month attracts a KES 10,000 late-filing penalty regardless of whether you owe tax.",
      },
    },
    {
      "@type": "Question",
      name: "What is the penalty for not filing a nil return in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KES 10,000 per month for late or missing VAT returns, including nil returns. Income tax nil returns carry a KES 2,000 penalty for individuals. Penalties accumulate monthly and also block your Tax Compliance Certificate.",
      },
    },
    {
      "@type": "Question",
      name: "Do students and the unemployed have to file nil returns in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of mid-2026, KRA introduced a 'No Obligation' PIN status for certain categories like students and the unemployed. If your PIN shows No Obligation in iTax → Taxpayer Dashboard → Obligations, you may no longer need to file annually. Everyone else must still file their nil return by 30 June each year.",
      },
    },
    {
      "@type": "Question",
      name: "When is the income tax nil return deadline in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "30 June every year for the previous year of income. The 2025 income tax nil return was due 30 June 2026. Late filing attracts a KES 2,000 penalty for individuals.",
      },
    },
    {
      "@type": "Question",
      name: "Can I file a nil return on my phone in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but a laptop is recommended. Open itax.kra.go.ke in Chrome or Safari, zoom in if the submit button is hard to see, and enable pop-ups. Mobile screens often cut off the submit button.",
      },
    },
  ],
}

const WA_BASE = "https://wa.me/254717344440?text="
const wa = (t: string) => `${WA_BASE}${encodeURIComponent(t)}`

export default function HowToFileNilReturns2026Page() {
  return (
    <>
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="max-w-[860px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        {/* Back link */}
        <a
          href="/resources/"
          className="inline-flex items-center gap-1.5 text-[0.8rem] text-ink-muted hover:text-ink transition-colors mb-10"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          Back to Resources
        </a>

        {/* Header */}
        <header className="mb-12">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-brand font-medium mb-4">
            Guide &middot; 7 min read
          </p>
          <h1 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-semibold tracking-tight text-ink leading-tight mb-4 text-balance">
            How to File Nil Returns on KRA iTax Kenya 2026 - A Step-by-Step Guide | how to file nil returns 2026
          </h1>
          <p className="text-[0.92rem] text-ink-muted leading-relaxed max-w-[58ch]">
            If nothing happened in your business this month, you still owe KRA one thing:
            a <strong className="text-ink">nil return</strong>. This guide walks you through the
            exact clicks for both monthly VAT nil returns and annual income tax nil returns,
            and what has changed in <strong className="text-ink">2026</strong> - including the
            new No Obligation PIN status that may end the annual filing for students and the
            unemployed.
          </p>
          <div className="flex items-center gap-4 text-[0.75rem] text-ink-muted">
            <time dateTime="2026-08-10">10 August 2026</time>
            <span>Smart VAT Kenya</span>
          </div>
        </header>

        {/* ELI5 box */}
        <section className="border border-hairline rounded-lg p-5 bg-canvas-alt mb-12">
          <p className="font-display text-[0.9rem] font-semibold text-ink mb-2">
            Explain Like I&apos;m 5: What is a Nil Return?
          </p>
          <div className="text-[0.85rem] text-ink-muted leading-relaxed space-y-2">
            <p>
              A nil return is KRA&apos;s way of calling attendance. Every filing period,
              you must answer the roll call - even if you had zero sales, zero purchases,
              and zero tax. You answer with a form full of <strong className="text-ink">0.00</strong>.
            </p>
            <p>
              Silence is not an option. If you skip the roll call, KRA fines you{" "}
              <strong className="text-ink">KES 10,000 per month</strong> for VAT returns,
              whether or not you owed any tax.
            </p>
            <p className="font-medium text-ink">
              Bottom line: A nil return = &ldquo;I showed up. Nothing to report.&rdquo;
            </p>
          </div>
        </section>

        {/* Section 1 - VAT nil return step by step */}
        <section className="mb-16" aria-labelledby="vat-nil-h">
          <h2 id="vat-nil-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
            Monthly VAT Nil Return: The Exact Clicks (5 Minutes)
          </h2>
          <p className="text-[0.9rem] text-ink-muted leading-relaxed mb-6">
            This is the most common nil return in Kenya because VAT is filed every month.
            Do these steps once a month, before the 20th.
          </p>
          <div className="space-y-4">
            {[
              {
                step: 1,
                title: "Log into itax.kra.go.ke",
                detail: 'Enter your KRA PIN and password. Use Google Chrome. If the portal hangs or shows an error, see our <a href="/resources/itax-portal-not-working/" className="text-brand underline">iTax portal troubleshooting guide</a> or check the <a href="/resources/kra-itax-traffic-update/" className="text-brand underline">iTax traffic update</a> page for congestion timing.',
              },
              {
                step: 2,
                title: "Go to Returns → VAT Returns",
                detail: "From the dashboard menu, click 'Returns' then select 'VAT Returns'. You'll see your 'Due' and 'Overdue' months.",
              },
              {
                step: 3,
                title: "Select the filing month",
                detail: "Click the month you are filing. The VAT return form opens with numbered boxes. Most will already read KES 0.00.",
              },
              {
                step: 4,
                title: "Confirm every box reads 0.00",
                detail: "Check Box 1 (Taxable Sales at 16%), Box 2 (Zero-Rated Sales), Box 3 (Exempt Sales), Box 7 (Input VAT), Box 14 (VAT Payable). If iTax pre-fills anything, correct it to 0.00 only if the number is genuinely wrong.",
              },
              {
                step: 5,
                title: "Tick the declaration and click Submit",
                detail: 'Check "I confirm the information is true and correct", then click Submit. You get a confirmation receipt with a submission ID. Screenshot it or save the PDF - that is your proof.',
              },
            ].map(({ step, title, detail }) => (
              <div key={step} className="flex gap-4">
                <span className="bg-ink text-canvas rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 tabular-nums">{step}</span>
                <div>
                  <p className="font-semibold text-ink text-[0.9rem]">{title}</p>
                  <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed" dangerouslySetInnerHTML={{ __html: detail }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-7 border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
            <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-[0.83rem] text-ink-muted leading-relaxed">
              <strong className="text-ink">Pro tip for 2026:</strong> file between the 1st and
              10th. iTax is fastest early in the month. From the 15th to the 20th, portal
              traffic spikes and the system slows or drops - that is when congestion complaints
              peak (see our <a href="/resources/kra-itax-traffic-update/" className="text-brand underline">iTax traffic update</a> guide).
            </p>
          </div>
        </section>

        {/* Section 2 - Income tax nil returns */}
        <section className="mb-16" aria-labelledby="income-nil-h">
          <h2 id="income-nil-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
            Annual Income Tax Nil Return: Students, the Unemployed &amp; Dormant PINs
          </h2>
          <div className="text-[0.9rem] text-ink-muted leading-relaxed space-y-4">
            <p>
              Most people searching &ldquo;how to file nil returns 2026&rdquo; are not VAT-registered
              businesses. They are <strong className="text-ink">individuals</strong> - students,
              the unemployed, or people whose PIN was issued for a one-off transaction. If that&apos;s
              you, you file an <strong className="text-ink">annual income tax nil return</strong>.
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li><strong className="text-ink">Deadline:</strong> 30 June each year (the 2025 return was due 30 June 2026)</li>
              <li><strong className="text-ink">Penalty:</strong> KES 2,000 for individuals filing late - even for nil returns. Unfiled returns also block your <a href="/resources/tax-compliance-certificate-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">Tax Compliance Certificate</a></li>
              <li><strong className="text-ink">Where:</strong> itax.kra.go.ke → Returns → File Nil Return → Income Tax – Resident Individual → submit → download the acknowledgement receipt</li>
              <li><strong className="text-ink">Watch out:</strong> don&apos;t file nil if you actually earned income. Employees, freelancers, landlords, and businesses must file a normal return. Habitual nil filing while earning is a compliance red flag</li>
            </ul>
            <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
              <Warning size={16} weight="fill" className="text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-[0.83rem] leading-relaxed">
                <strong className="text-ink">New in 2026 - &ldquo;No Obligation&rdquo; PIN status:</strong>{" "}
                KRA introduced PINs with a <em>No Obligation</em> status for specific categories
                (notably students and the unemployed), which may end the mandatory annual nil
                return for qualifying PINs. Check <strong className="text-ink">iTax → Taxpayer
                Dashboard → Obligations</strong> to see your status - and confirm with KRA before
                assuming you&apos;re exempt.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 - Penalties table */}
        <section className="mb-16" aria-labelledby="penalties-h">
          <h2 id="penalties-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
            What Non-Filing Actually Costs You in 2026
          </h2>
          <div className="border border-hairline rounded-lg overflow-hidden">
            <table className="w-full text-[0.85rem]">
              <thead>
                <tr className="bg-canvas-alt border-b border-hairline">
                  <th className="text-left p-3 font-semibold text-ink">Return type</th>
                  <th className="text-left p-3 font-semibold text-ink">Deadline</th>
                  <th className="text-left p-3 font-semibold text-ink">Late penalty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                <tr>
                  <td className="p-3 text-ink font-semibold">Monthly VAT nil return</td>
                  <td className="p-3 text-ink-muted">20th of the following month</td>
                  <td className="p-3 text-ink font-semibold">KES 10,000</td>
                </tr>
                <tr>
                  <td className="p-3 text-ink font-semibold">Income tax nil return (individual)</td>
                  <td className="p-3 text-ink-muted">30 June annually</td>
                  <td className="p-3 text-ink font-semibold">KES 2,000</td>
                </tr>
                <tr>
                  <td className="p-3 text-ink font-semibold">Turnover tax nil return</td>
                  <td className="p-3 text-ink-muted">20th of the following month</td>
                  <td className="p-3 text-ink font-semibold">KES 10,000</td>
                </tr>
                <tr>
                  <td className="p-3 text-ink font-semibold">Blocked TCC</td>
                  <td className="p-3 text-ink-muted">While any return is missing</td>
                  <td className="p-3 text-ink font-semibold">Cannot tender, lose contracts</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[0.85rem] text-ink-muted leading-relaxed">
            Penalties accumulate per month and per return type. Three missed VAT months = KES 30,000.
            For the full penalty reference, see our{" "}
            <a href="/resources/kra-vat-penalties-reference/" className="text-brand underline underline-offset-2 hover:text-brand-hover">KRA VAT penalties reference table</a>.
          </p>
        </section>

        {/* Section 4 - Common mistakes */}
        <section className="mb-16" aria-labelledby="mistakes-h">
          <h2 id="mistakes-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
            Common Nil Return Mistakes That Cost KES 10,000+
          </h2>
          <div className="space-y-4">
            {[
              {
                mistake: '"I had no sales so I did not file."',
                fix: "The #1 mistake. KRA requires a return every month regardless of activity. A nil return takes 5 minutes.",
              },
              {
                mistake: '"I will file two months together later."',
                fix: "Each month is a separate filing period. Missing January and filing both in March means two KES 10,000 penalties.",
              },
              {
                mistake: '"The nil return has no Submit button."',
                fix: "Known iTax bug. Switch to Chrome, enable pop-ups for itax.kra.go.ke, or try Incognito Mode.",
              },
              {
                mistake: '"I filed a nil return but still got a penalty."',
                fix: "Check the filing date. After the 20th the penalty is automatic. Also confirm you clicked Submit - saving as draft does not count.",
              },
            ].map(({ mistake, fix }) => (
              <div key={mistake} className="border border-hairline rounded-lg p-4">
                <p className="text-[0.88rem] text-ink font-semibold mb-1">
                  <span className="text-amber-500">&#10007;</span> {mistake}
                </p>
                <p className="text-[0.83rem] text-ink-muted leading-relaxed pl-5">
                  <span className="text-emerald-600 font-semibold">&#10003;</span> {fix}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 - Amnesty tie-in */}
        <section className="mb-16" aria-labelledby="amnesty-h">
          <h2 id="amnesty-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
            Already Missed Nil Returns? The 2026 Amnesty Wipes the Penalties
          </h2>
          <div className="text-[0.9rem] text-ink-muted leading-relaxed space-y-4">
            <p>
              If you&apos;ve missed nil returns and accumulated penalties, don&apos;t despair.
              The <strong className="text-ink">2026 KRA tax amnesty</strong> (Voluntary Tax Disclosure
              Programme) waives <strong className="text-ink">100% of penalties and interest</strong> -
              you only pay the principal tax, which for nil returns is KES 0.
            </p>
            <p>
              That means missed nil returns can often be cleared for free via the amnesty route.
              The trade-off: it only works if you disclose <em>before</em> KRA finds you. See our{" "}
              <a href="/resources/kra-tax-amnesty-2026/" className="text-brand underline underline-offset-2 hover:text-brand-hover">full KRA Tax Amnesty 2026 guide</a>{" "}
              and the{" "}
              <a href="/resources/nil-returns-tax-amnesty/" className="text-brand underline underline-offset-2 hover:text-brand-hover">nil returns + amnesty deep-dive</a>.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="border border-hairline rounded-xl p-6 lg:p-8 bg-canvas-alt text-center mb-12">
          <p className="font-display text-[1.2rem] font-semibold text-ink mb-2">
            Stop worrying about nil returns. Let us file them for you.
          </p>
          <p className="text-[0.85rem] text-ink-muted mb-6 max-w-[48ch] mx-auto">
            KES 3,500/month. We file on the 17th - before the iTax portal slows down.
            Nil returns, normal returns, penalty waivers, and amnesty applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={wa("Hi%2C%20I%20want%20to%20sign%20up%20for%20monthly%20VAT%20filing%20-%20KES%203500%2Fmonth")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill inline-flex items-center justify-center gap-2 bg-brand text-canvas font-semibold px-6 py-3 rounded-md text-sm transition-colors hover:bg-brand-hover"
            >
              Start Monthly Filing - KES 3,500
              <ArrowRight size={16} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12" aria-labelledby="faq-h">
          <h2 id="faq-h" className="font-display text-[1.3rem] font-semibold text-ink mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {[
              {
                q: "Do I need to file nil returns if I made no sales?",
                a: "Yes. Every registered VAT taxpayer must file every month, including months with zero activity. Skipping a month accumulates KES 10,000 penalties per month even if you owe no tax.",
              },
              {
                q: "Can I file a nil return on my phone?",
                a: "Yes, but it is not ideal. Use Chrome or Safari, zoom in, and enable pop-ups. Many users find the submit button is cut off on small screens.",
              },
              {
                q: "What if I file a nil return by mistake but actually had sales?",
                a: "File an amended return: Returns → VAT Returns → select the period → Amended Return → enter the correct figures. KRA replaces the nil return.",
              },
              {
                q: "Does the tax amnesty apply to nil returns?",
                a: "Yes. The amnesty applies to penalties for late-filed returns, including nil returns. If you were charged penalties, you can apply under the voluntary disclosure programme.",
              },
            ].map(({ q, a }) => (
              <details key={q} className="group border border-hairline rounded-lg overflow-hidden">
                <summary className="text-[0.88rem] font-semibold text-ink p-4 cursor-pointer list-none flex items-center justify-between gap-2 hover:bg-canvas-alt transition-colors">
                  {q}
                  <span className="text-ink-muted text-[0.7rem] group-open:rotate-180 transition-transform shrink-0">&#9660;</span>
                </summary>
                <div className="px-4 pb-4 text-[0.83rem] text-ink-muted leading-relaxed border-t border-hairline pt-3">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="how-to-file-nil-returns-2026" />
        </div>

        {/* CTA */}
        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">Need help with VAT?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[40ch] mx-auto leading-relaxed">
            We handle your KRA VAT registration and monthly filing so you never miss a deadline.
          </p>
          <a
            href="https://wa.me/254717344440?text=Hi%2C%20I%20need%20help%20with%20VAT"
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
      </main>
    </>
  )
}