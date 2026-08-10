import { ArrowLeft, ArrowRight, Warning, Info, CalendarBlank } from "@phosphor-icons/react/dist/ssr"
import { ArticleGrid } from "@/lib/resources"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "KRA iTax Maintenance Schedule 2026", item: "https://smartvatkenya.co.ke/resources/kra-itax-maintenance-schedule/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "KRA iTax Maintenance Schedule 2026 — Plan Around Portal Downtime | kra itax system maintenance schedule",
  description:
    "When does KRA take iTax down for maintenance? Learn the typical monthly maintenance patterns, where to check upcoming downtime, and how to plan your VAT filing so a maintenance window never costs you a penalty.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-08-10",
  dateModified: "2026-08-10",
  url: "https://smartvatkenya.co.ke/resources/kra-itax-maintenance-schedule",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/kra-itax-maintenance-schedule",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When does KRA iTax go down for maintenance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KRA does not publish a fixed maintenance calendar, but outages historically cluster late at night (7pm–6am) on weekends and in the days just before and after the 20th filing deadline. Always check iTax status pages and KRA's social media before planning to file.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if iTax is really down for maintenance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KRA main console shows a status banner on itax.kra.go.ke, KRA post on X (@KRAAfrica), and status aggregator sites like downdetector.co.ke track spikes. If the site loads but only that action fails, it's likely congestion rather than full maintenance.",
      },
    },
    {
      "@type": "Question",
      name: "Can I file VAT during a maintenance window?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is not recommended. There is risk the submission fails part-way and you cannot confirm a receipt. File on or before the 10th of the month to avoid both maintenance windows and end-filled deadline congestion entirely. See our iTax traffic update guide.",
      },
    },
    {
      "@type": "Question",
      name: "Does KRA extend the VAT deadline if the portal is down?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not routinely. Extensions are rare and announced officially via KRA Gazette and iTax banners. Assume the 20th is final. Screenshot any outage evidence and apply for a penalty waiver proactively if an outage blocks you.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best time to file VAT to avoid maintenance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Weekday mornings (8am–11am) from the 1st to the 10th of the month are the smoothest. Avoid Friday nights, weekend nights, and the 19th–20th entirely.",
      },
    },
  ],
}

const WA_BASE = "https://wa.me/254721725958?text="
const wa = (t: string) => `${WA_BASE}${encodeURIComponent(t)}`

export default function KraItaxMaintenanceSchedulePage() {
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
            KRA iTax Maintenance Schedule 2026 — Plan Around Portal Downtime | kra itax system maintenance schedule
          </h1>
          <p className="text-[0.92rem] text-ink-muted leading-relaxed max-w-[58ch]">
            KRA does not publish a fixed maintenance calendar — but it doesn&apos;t have to be a
            guessing game. Maintenance outages follow <strong className="text-ink">patterns</strong>,
            and knowing those patterns lets you schedule your filing around them instead of racing them.
            This page tracks the <strong className="text-ink">kra itax system maintenance schedule</strong>
            so you never lose a filing deadline to a server that went to sleep.
          </p>
          <div className="flex items-center gap-4 text-[0.75rem] text-ink-muted">
            <time dateTime="2026-08-10">10 August 2026</time>
            <span>Smart VAT Kenya</span>
          </div>
        </header>

        {/* Section 1 — the honest truth */}
        <section className="mb-16" aria-labelledby="truth-h">
          <h2 id="truth-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
            The Honest Truth: There Is No Official Maintenance Calendar
          </h2>
          <div className="text-[0.9rem] text-ink-muted leading-relaxed space-y-4">
            <p>
              KRA generally does not announce scheduled maintenance in advance on a public calendar.
              Maintenance windows are communicated ad hoc — through the iTax login banner, on
              KRA&apos;s X account (@KRAAfrica), or sometimes not at all.
            </p>
            <p>
              What we <strong className="text-ink">do</strong> have is years of observable patterns.
              KRA maintains the iTax platform in windows that are predictable enough to plan around:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li><strong className="text-ink">Night hours:</strong> most maintenance happens between roughly 7pm and 6am EAT, when taxpayer traffic is lowest</li>
              <li><strong className="text-ink">Weekends:</strong> Saturday and Sunday nights are the most common maintenance windows, especially late Sunday into Monday morning</li>
              <li><strong className="text-ink">Just after the deadline:</strong> system refreshes and report runs cluster in the days right after the 20th</li>
              <li><strong className="text-ink">System upgrades:</strong> major module launches (eTIMS, iCMS, new filing forms) typically bring days of instability, not just a scheduled window</li>
            </ul>
            <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
              <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-[0.83rem] leading-relaxed">
                <strong className="text-ink">Net effect:</strong> the best-performing assumption is that
                iTax will be unreliable at night, on weekends, and in the last 5 days before the 20th.
                Plan filings for weekday mornings — and never plan a same-day filing for the 20th.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 — where to check */}
        <section className="mb-16" aria-labelledby="where-h">
          <h2 id="where-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
            Where to Check if iTax Is Up Before You File
          </h2>
          <div className="space-y-4">
            {[
              {
                source: "iTax login banner (itax.kra.go.ke)",
                note: "KRA shows a yellow/red banner at the top of the login page during scheduled maintenance. This is the most direct signal.",
              },
              {
                source: "KRA on X (@KRAAfrica)",
                note: "KRA posts outage/maintenance notices here, often late. Worth following if you file close to deadlines.",
              },
              {
                source: "downdetector.co.ke",
                note: "Shows real-time 'is it down' spikes from user reports. Useful for congestion — a spike in reports often means server overload, not maintenance.",
              },
              {
                source: "Our iTax traffic update page",
                note: 'We track congestion patterns and publish workarounds at <a href="/resources/kra-itax-traffic-update/" className="text-brand underline">/resources/kra-itax-traffic-update/</a> so you know when to avoid the portal entirely.',
              },
            ].map(({ source, note }, i) => (
              <div key={source} className="flex gap-4">
                <span className="bg-ink text-canvas rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 tabular-nums">{i + 1}</span>
                <div>
                  <p className="font-semibold text-ink text-[0.9rem]">{source}</p>
                  <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed" dangerouslySetInnerHTML={{ __html: note }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 — best times table */}
        <section className="mb-16" aria-labelledby="best-times-h">
          <h2 id="best-times-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
            Best and Worst Times to Log into iTax in 2026
          </h2>
          <div className="border border-hairline rounded-lg overflow-hidden">
            <table className="w-full text-[0.85rem]">
              <thead>
                <tr className="bg-canvas-alt border-b border-hairline">
                  <th className="text-left p-3 font-semibold text-ink">Window</th>
                  <th className="text-left p-3 font-semibold text-ink">Experience</th>
                  <th className="text-left p-3 font-semibold text-ink">Recommendation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                <tr>
                  <td className="p-3 text-ink font-semibold">1st–10th, weekday mornings 8–11am</td>
                  <td className="p-3 text-emerald-600 font-semibold">Fast and stable</td>
                  <td className="p-3 text-ink-muted">Best time to file. Do your returns here.</td>
                </tr>
                <tr>
                  <td className="p-3 text-ink font-semibold">Weekday afternoons, 1st–15th</td>
                  <td className="p-3 text-emerald-600 font-semibold">Generally fine</td>
                  <td className="p-3 text-ink-muted">Acceptable.</td>
                </tr>
                <tr>
                  <td className="p-3 text-ink font-semibold">15th–19th</td>
                  <td className="p-3 text-amber-500 font-semibold">Slows down, overloads</td>
                  <td className="p-3 text-ink-muted">File early. Congestion complaints peak now.</td>
                </tr>
                <tr>
                  <td className="p-3 text-ink font-semibold">19th–20th (deadline crunch)</td>
                  <td className="p-3 text-amber-500 font-semibold">Highest outage/crash risk</td>
                  <td className="p-3 text-ink-muted">Avoid entirely — this is when outages bite hardest.</td>
                </tr>
                <tr>
                  <td className="p-3 text-ink font-semibold">Friday night / Saturday / Sunday night</td>
                  <td className="p-3 text-amber-500 font-semibold">Maintenance windows</td>
                  <td className="p-3 text-ink-muted">Don&apos;t attempt critical filings after 7pm.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
            <Warning size={16} weight="fill" className="text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-[0.83rem] leading-relaxed">
              <strong className="text-ink">The maintenance trap:</strong> a filing that fails during
              a maintenance window does not extend your deadline. If you tried and failed on the 19th
              or 20th, screenshot the error with a timestamp and apply for a penalty waiver — don&apos;t
              wait for KRA to fix it. See our{" "}
              <a href="/resources/kra-status-code-500-itax-errors/" className="text-brand underline underline-offset-2 hover:text-brand-hover">iTax status code 500 guide</a>{" "}
              and{" "}
              <a href="/resources/itax-portal-not-working/" className="text-brand underline underline-offset-2 hover:text-brand-hover">iTax portal troubleshooting guide</a>.
            </p>
          </div>
        </section>

        {/* Section 4 — what to do when caught in maintenance */}
        <section className="mb-16" aria-labelledby="caught-h">
          <h2 id="caught-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
            Caught in a Maintenance Window? Do This
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Screenshot everything",
                detail: "Capture the error, the URL, and your phone/computer clock showing the date and time. This is your evidence if you need a penalty waiver.",
              },
              {
                step: "2",
                title: "Try the alternative paths",
                detail: "If itax.kra.go.ke is down, try the iTax mobile site, a different browser, or Incognito Mode. Sometimes only one server node is down.",
              },
              {
                step: "3",
                title: "Wait out the window",
                detail: "If the banner says maintenance until a specific hour, set a reminder and come back. Most windows close by 6–7am EAT.",
              },
              {
                step: "4",
                title: "File at the next available slot",
                detail: "The moment it&apos;s back, file immediately and keep the submission receipt. Never assume the system &apos;saved&apos; your draft.",
              },
              {
                step: "5",
                title: "If it crossed a deadline, apply for a waiver",
                detail: "Submit a Section 35 penalty waiver citing the system outage with your screenshots. We handle penalty waiver applications for KES 4,000.",
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
        </section>

        {/* CTA */}
        <section className="border border-hairline rounded-xl p-6 lg:p-8 bg-canvas-alt text-center mb-12">
          <p className="font-display text-[1.2rem] font-semibold text-ink mb-2">
            Never gamble with a maintenance window again.
          </p>
          <p className="text-[0.85rem] text-ink-muted mb-6 max-w-[48ch] mx-auto">
            We file on the 17th — before the congestion and far from maintenance windows.
            Monthly VAT filing from KES 3,500. Deadlines handled, receipts provided.
          </p>
          <a
            href={wa("Hi%2C%20I%20want%20you%20to%20handle%20my%20monthly%20VAT%20filing%20-%20KES%203500%2Fmonth")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill inline-flex items-center justify-center gap-2 bg-brand text-canvas font-semibold px-6 py-3 rounded-md text-sm transition-colors hover:bg-brand-hover"
          >
            Hand Me My Filing — KES 3,500
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
                q: "Does KRA announce iTax maintenance in advance?",
                a: "Not on a fixed schedule. Watch the iTax login banner and @KRAAfrica on X. Major upgrades are announced, but routine night/weekend maintenance usually is not.",
              },
              {
                q: "Can I file VAT at 2am?",
                a: "Technically yes, but 2am is prime maintenance time. If a submission fails mid-way at night, you may not be able to confirm it until morning. Prefer weekday mornings.",
              },
              {
                q: "If iTax is down on the 20th, do I get an extension?",
                a: "No — not automatically. Extensions are rare and only announced officially. Screenshot the outage and apply for a Section 35 penalty waiver proactively.",
              },
              {
                q: "How is maintenance different from congestion?",
                a: "Maintenance is KRA taking the system down on purpose; congestion is too many users at once. Congestion causes timeouts and 'server busy' errors and is worst on the 19th–20th. Both are avoidable by filing early.",
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
          <ArticleGrid currentSlug="kra-itax-maintenance-schedule" />
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
            <a href="/resources/" className="text-[0.82rem] text-ink-muted hover:text-brand transition-colors underline underline-offset-2">
              ← All Resources
            </a>
          </div>
        </div>
      </main>
    </>
  )
}