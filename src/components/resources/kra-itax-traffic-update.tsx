import { ArrowLeft, ArrowRight, Warning, Info } from "@phosphor-icons/react/dist/ssr"
import { ArticleGrid } from "@/lib/resources"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "KRA iTax Traffic Update", item: "https://smartvatkenya.co.ke/resources/kra-itax-traffic-update/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "KRA iTax Traffic Update - Portal Congestion, Slowdowns & Workarounds | kra itax traffic update",
  description:
    "Real-time traffic update for the KRA iTax portal: why it slows down at deadline time, how to tell if it's you or KRA, the congestion windows to avoid, and proven workarounds to file VAT returns when the system is overwhelmed.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-08-10",
  dateModified: "2026-08-10",
  url: "https://smartvatkenya.co.ke/resources/kra-itax-traffic-update",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/kra-itax-traffic-update",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage" as const,
  mainEntity: [
    {
      "@type": "Question" as const,
      name: "Why is KRA iTax so slow at the end of the month?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Because the deadline falls on the 20th, tens of thousands of taxpayers log in in the final days - especially the 19th and 20th - and the portal slows or times out under load. Most 'iTax is down' reports are actually congestion, not a server failure.",
      },
    },
    {
      "@type": "Question" as const,
      name: "How do I know if iTax is slow because of traffic or a real outage?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Check downdetector.co.ke for a spike in user reports, the iTax login banner for maintenance notices, and @KRAAfrica on X. If the homepage loads but filing hangs, it's almost always congestion.",
      },
    },
    {
      "@type": "Question" as const,
      name: "What time of day is iTax fastest?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Weekday mornings (8am–11am), especially between the 1st and 10th of the month. Avoid the 15th–20th entirely when possible.",
      },
    },
    {
      "@type": "Question" as const,
      name: "What do I do if iTax times out while I'm filing?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Screenshot the error with a timestamp, try Incognito Mode or a different browser, wait 30–60 minutes for a lull, and retry. Verify whether the return actually submitted before re-filing to avoid duplicates.",
      },
    },
    {
      "@type": "Question" as const,
      name: "What happens if congestion blocks me past the 20th deadline?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "You can apply for a Section 35 penalty waiver citing the system outage, with screenshots as evidence. KRA does not automatically extend deadlines, so file with evidence immediately and apply proactively.",
      },
    },
  ],
}

const WA_BASE = "https://wa.me/254717344440?text="
const wa = (t: string) => `${WA_BASE}${encodeURIComponent(t)}`

export default function KraItaxTrafficUpdatePage() {
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
            Guide &middot; 6 min read
          </p>
          <h1 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-semibold tracking-tight text-ink leading-tight mb-4 text-balance">
            KRA iTax Traffic Update - Portal Congestion, Slowdowns &amp; Workarounds | kra itax traffic update
          </h1>
          <p className="text-[0.92rem] text-ink-muted leading-relaxed max-w-[58ch]">
            Every month, the same thing happens: filing traffic surges in the final days before the
            20th, and the iTax portal slows to a crawl or starts timing out. If you&apos;re seeing a
            slow or frozen portal, here&apos;s how to tell what&apos;s happening, when to avoid the
            portal, and exactly how to get your filing done anyway.
          </p>
          <div className="flex items-center gap-4 text-[0.75rem] text-ink-muted">
            <time dateTime="2026-08-10">10 August 2026</time>
            <span>Smart VAT Kenya</span>
          </div>
        </header>

        {/* ELI5 box */}
        <section className="border border-hairline rounded-lg p-5 bg-canvas-alt mb-12">
          <p className="font-display text-[0.9rem] font-semibold text-ink mb-2">
            Explain Like I&apos;m 5: Why Portal Traffic Matters
          </p>
          <div className="text-[0.85rem] text-ink-muted leading-relaxed space-y-2">
            <p>
              Imagine one narrow door that every taxpayer in Kenya must pass through before midnight
              on the 20th. The door works fine when one person at a time walks through. When thousands
              rush it on the 19th, everyone slows down - and the door sometimes locks entirely.
            </p>
            <p>
              That&apos;s <strong className="text-ink">iTax congestion</strong>. The portal isn&apos;t
              broken; it&apos;s overwhelmed. The fix isn&apos;t a better browser - it&apos;s timing.
            </p>
            <p className="font-medium text-ink">
              Bottom line: file early, and the crowd never touches you.
            </p>
          </div>
        </section>

        {/* Section 1 - congestion calendar */}
        <section className="mb-16" aria-labelledby="calendar-h">
          <h2 id="calendar-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
            The Monthly Congestion Calendar (Predictable Every Single Month)
          </h2>
          <div className="border border-hairline rounded-lg overflow-hidden">
            <table className="w-full text-[0.85rem]">
              <thead>
                <tr className="bg-canvas-alt border-b border-hairline">
                  <th className="text-left p-3 font-semibold text-ink">Days of the month</th>
                  <th className="text-left p-3 font-semibold text-ink">Traffic level</th>
                  <th className="text-left p-3 font-semibold text-ink">What users typically report</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                <tr>
                  <td className="p-3 text-ink font-semibold">1st–10th</td>
                  <td className="p-3 text-emerald-600 font-semibold">Low</td>
                  <td className="p-3 text-ink-muted">Fast, stable. This is the golden filing window.</td>
                </tr>
                <tr>
                  <td className="p-3 text-ink font-semibold">11th–14th</td>
                  <td className="p-3 text-emerald-600 font-semibold">Moderate</td>
                  <td className="p-3 text-ink-muted">Generally fine, occasional slowness in the evenings.</td>
                </tr>
                <tr>
                  <td className="p-3 text-ink font-semibold">15th–18th</td>
                  <td className="p-3 text-amber-500 font-semibold">High</td>
                  <td className="p-3 text-ink-muted">"Server busy", timeouts on return submission, slow dashboards.</td>
                </tr>
                <tr>
                  <td className="p-3 text-ink font-semibold">19th–20th</td>
                  <td className="p-3 text-amber-500 font-semibold">Extreme / gridlock</td>
                  <td className="p-3 text-ink font-semibold">Mass outage reports, total freezes, failed deadline filings.</td>
                </tr>
                <tr>
                  <td className="p-3 text-ink font-semibold">21st–end</td>
                  <td className="p-3 text-emerald-600 font-semibold">Drops again</td>
                  <td className="p-3 text-ink-muted">Returns to normal after the deadline passes.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[0.85rem] text-ink-muted leading-relaxed">
            This pattern is remarkably consistent month after month - it&apos;s the same
            deadline-day surge that shows up in social media complaints and in the +3,450% spike in
            searches for &ldquo;kra itax traffic update&rdquo; around filing season.
          </p>
        </section>

        {/* Section 2 - is it congestion or an outage */}
        <section className="mb-16" aria-labelledby="diagnose-h">
          <h2 id="diagnose-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
            Is It You, Congestion, or a Real Outage? 3 Quick Checks
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "Does the homepage load?",
                detail: "If itax.kra.go.ke loads but logging in or submitting hangs, it's almost always congestion. A true outage usually fails earlier - at the login page or even at DNS.",
              },
              {
                title: "What do other users report?",
                detail: "Check downdetector.co.ke and X. A wave of recent reports within the last 30 minutes means a live congestion spike or outage; silence means the problem is your connection.",
              },
              {
                title: "Is there a KRA banner?",
                detail: 'A yellow/red banner on the login page means KRA has announced maintenance or is "experiencing a technical hitch". That confirms it is not you.',
              },
              {
                title: "Retry the exact action (not the whole flow)",
                detail: "Sometimes only one server node is struggling. Refresh the specific page, wait 30–60 minutes, and retry the single step rather than starting over.",
              },
            ].map(({ title, detail }, i) => (
              <div key={title} className="flex gap-4">
                <span className="bg-ink text-canvas rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 tabular-nums">{i + 1}</span>
                <div>
                  <p className="font-semibold text-ink text-[0.9rem]">{title}</p>
                  <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 - workarounds */}
        <section className="mb-16" aria-labelledby="workarounds-h">
          <h2 id="workarounds-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
            Proven Workarounds When iTax Is Overloaded
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "File in the morning, not the evening",
                detail: "Congestion peaks 4pm–midnight in the filing window. Weekday mornings (8–11am) are the calmest. A 6:30am filing usually sails through.",
              },
              {
                step: "2",
                title: "Use Chrome in Incognito Mode",
                detail: "Incognito disables extensions and stale cache that often interfere. It fixes a surprising share of 'stuck' submissions.",
              },
              {
                step: "3",
                title: "Switch networks",
                detail: "If you're on mobile data, try Wi-Fi; if you're on Wi-Fi, try mobile data. Congestion on a specific ISP path to KRA is real and switching networks frequently fixes it.",
              },
              {
                step: "4",
                title: "Retry single steps, not the whole form",
                detail: "If submit fails, refresh and click Submit again rather than re-entering the form. iTax often keeps your draft. Double-check you didn't create a duplicate before re-submitting.",
              },
              {
                step: "5",
                title: "Screenshot failures immediately",
                detail: "Timestamped evidence is your only protection if congestion pushes you past the deadline and KRA charges a penalty.",
              },
            ].map(({ step, title, detail }) => (
              <div key={step} className="flex gap-4">
                <span className="bg-ink text-canvas rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 tabular-nums">{step}</span>
                <div>
                  <p className="font-semibold text-ink text-[0.9rem]">{title}</p>
                  <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-7 border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
            <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-[0.83rem] text-ink-muted leading-relaxed">
              <strong className="text-ink">Related guides:</strong> if you&apos;re seeing specific
              errors, see{" "}
              <a href="/resources/kra-status-code-500-itax-errors/" className="text-brand underline underline-offset-2 hover:text-brand-hover">status code 500 fixes</a>,{" "}
              <a href="/resources/itax-portal-not-working/" className="text-brand underline underline-offset-2 hover:text-brand-hover">portal troubleshooting</a>, and{" "}
              <a href="/resources/kra-itax-maintenance-schedule/" className="text-brand underline underline-offset-2 hover:text-brand-hover">planned maintenance timing</a>.
            </p>
          </div>
        </section>

        {/* Section 4 - deadline pressure */}
        <section className="mb-16" aria-labelledby="deadline-h">
          <h2 id="deadline-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
            What If Congestion Blocks You Past the 20th?
          </h2>
          <div className="text-[0.9rem] text-ink-muted leading-relaxed space-y-4">
            <p>
              The overdue penalty is <strong className="text-ink">5% of the tax due</strong> plus{" "}
              <strong className="text-ink">1% interest per month</strong>, and a KES 10,000 late-filing
              penalty applies where there is no tax due (nil returns). KRA does not automatically
              extend the deadline because of congestion.
            </p>
            <p>
              Your move: <strong className="text-ink">file immediately with evidence</strong> the
              moment the portal recovers, then apply for a{" "}
              <a href="/resources/kra-penalty-for-late-vat-filing/" className="text-brand underline underline-offset-2 hover:text-brand-hover">Section 35 penalty waiver</a>{" "}
              citing the system failure. Screenshots with timestamps, plus downdetector data, make
              a strong case. We handle waiver applications for KES 4,000.
            </p>
            <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
              <Warning size={16} weight="fill" className="text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-[0.83rem] leading-relaxed">
                <strong className="text-ink">Do not double-pay or double-file:</strong> after a
                timeout, always check whether the return or payment actually went through before
                submitting again. Duplicate filings cause mismatched iTax records and refund
                headaches. See our{" "}
                <a href="/resources/mpesa-error-codes/" className="text-brand underline underline-offset-2 hover:text-brand-hover">M-Pesa error guide</a>{" "}
                for payment-specific fixes.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border border-hairline rounded-xl p-6 lg:p-8 bg-canvas-alt text-center mb-12">
          <p className="font-display text-[1.2rem] font-semibold text-ink mb-2">
            Never queue for congestion again.
          </p>
          <p className="text-[0.85rem] text-ink-muted mb-6 max-w-[48ch] mx-auto">
            We file on the 17th, before the crowd hits. Monthly VAT filing from KES 3,500 -
            deadlines handled, receipts provided, congestion avoided.
          </p>
          <a
            href={wa("Hi%2C%20I%20want%20you%20to%20handle%20my%20monthly%20VAT%20filing%20-%20KES%203500%2Fmonth")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill inline-flex items-center justify-center gap-2 bg-brand text-canvas font-semibold px-6 py-3 rounded-md text-sm transition-colors hover:bg-brand-hover"
          >
            Hand Me My Filing - KES 3,500
            <ArrowRight size={16} weight="bold" aria-hidden="true" />
          </a>
        </section>

        {/* FAQ */}
        <section className="mb-12" aria-labelledby="faq-h">
          <h2 id="faq-h" className="font-display text-[1.3rem] font-semibold text-ink mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {[
              {
                q: "What is KRA iTax traffic?",
                a: "It refers to the number of users on the KRA iTax portal at any time. At the VAT filing deadline (the 20th), traffic spikes and causes slowdowns and timeouts.",
              },
              {
                q: "How do I check if iTax is down right now?",
                a: "Check the iTax login banner, downdetector.co.ke for report spikes, and @KRAAfrica on X. If only filing hangs while other pages work, it's congestion.",
              },
              {
                q: "Does KRA extend VAT filing deadlines during heavy traffic?",
                a: "Not routinely. Extensions are rare and only announced officially. Assume the 20th is final and file early, or apply for a waiver with evidence if congestion blocks you.",
              },
              {
                q: "What is the best time of day to file VAT on iTax?",
                a: "Weekday mornings, 8–11am, between the 1st and 10th of the month. Avoid evenings, weekends, and the 19th–20th entirely when possible.",
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
          <ArticleGrid currentSlug="kra-itax-traffic-update" />
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