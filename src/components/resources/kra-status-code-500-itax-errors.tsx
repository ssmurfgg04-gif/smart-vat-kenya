import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info, Clock } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "KRA Status Code 500 iTax Errors", item: "https://smartvatkenya.co.ke/resources/kra-status-code-500-itax-errors/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "KRA Status Code 500 iTax Errors — Causes, Fixes, and What to Do When the Portal Is Down (Kenya 2026)",
  description:
    "A KRA iTax Error 500 means the portal server is down. Here is how to check if it is a KRA outage vs your connection, how to fix it on your end when possible, and what to do when the deadline is approaching and the portal is not working.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-25",
  dateModified: "2026-07-25",
  url: "https://smartvatkenya.co.ke/resources/kra-status-code-500-itax-errors",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/kra-status-code-500-itax-errors",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does KRA iTax Error 500 mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Error 500 (Internal Server Error) means the iTax portal server encountered an unexpected condition that prevented it from fulfilling the request. It is a server-side error — not a problem with your computer, browser, or internet connection. KRA's servers are either overloaded, undergoing maintenance, or experiencing a technical fault. You cannot fix Error 500 from your end — you must wait for KRA to resolve it.",
      },
    },
    {
      "@type": "Question",
      name: "Is iTax Error 500 the same as a portal outage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not always. Error 500 can appear intermittently even when the portal is technically 'up' — it usually means a specific server process crashed. But if the error persists for more than 30-60 minutes, it indicates a broader outage. A full outage typically shows a blank white page, an infinite loading spinner, or the message 'Service Unavailable'. KRA usually publishes outage notices on their official X (Twitter) account and website.",
      },
    },
    {
      "@type": "Question",
      name: "How long does iTax Error 500 usually last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most iTax Error 500 occurrences resolve within 30 minutes to 2 hours. During peak periods (the 15th-20th of each month), recovery can take longer because server load remains high. KRA typically performs emergency restarts during off-peak hours. If the error has persisted for more than 4 hours during a business day, it is a major outage and you should contact KRA on 020 499 9999 for an update.",
      },
    },
    {
      "@type": "Question",
      name: "Can I lose my VAT return data when iTax shows Error 500?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. iTax does not auto-save your form data. If you are in the middle of filling a VAT return and the portal crashes with Error 500, all unsaved data is lost. Always prepare your VAT return figures in a spreadsheet first, then copy them into iTax in one go. This is the number one reason business owners switch to having a KRA-registered agent file on their behalf.",
      },
    },
    {
      "@type": "Question",
      name: "What do I do if Error 500 appears on the 20th deadline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "First, take a screenshot showing the error and the date/time. This is your evidence. Second, keep trying every 30-60 minutes — do not refresh every 30 seconds as this can get your IP blocked. Third, if the error persists past the deadline, file as soon as the portal is back. Then apply for a penalty waiver citing the system downtime. KRA may reject the waiver — having a KRA-registered agent file through the agent portal (which has better uptime) is the only way to guarantee deadline compliance.",
      },
    },
  ],
}

const toc = [
  { id: "what-is-error-500", label: "What Is iTax Error 500?" },
  { id: "outage-vs-local",   label: "Is It a KRA Outage or Your Connection?" },
  { id: "what-causes-it",    label: "What Causes iTax Error 500?" },
  { id: "how-long",          label: "How Long Does It Last?" },
  { id: "what-to-do",        label: "What to Do When You Get Error 500" },
  { id: "deadline-day",      label: "What If Error 500 Hits on Deadline Day?" },
  { id: "prevention",        label: "Prevention: Never See Error 500 Again" },
  { id: "faq",               label: "Frequently Asked Questions" },
]

export default function KraStatusCode500Page() {
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
            {["iTax", "Error 500", "KRA", "Troubleshooting"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            KRA iTax Status Code 500 — Why It Happens and How to Fix It
          </h1>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="font-mono text-[0.62rem] uppercase tracking-widest bg-brand/20 text-brand px-2.5 py-1 rounded-sm">Last updated: July 25, 2026</span>
            <span className="text-[0.78rem] text-canvas/50">Smart VAT Kenya — KRA-registered VAT agents</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Quick Answer / BLUF */}
        <div className="border-l-[3px] border-brand pl-5 mb-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Quick Answer</p>
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            KRA iTax Error 500 ("Internal Server Error") means the KRA server is down or overloaded. It is <strong className="text-ink">not your fault</strong> and there is nothing you can fix on your end. Most occurrences resolve within 30–120 minutes. During peak tax season (15th–20th of each month), outages are more frequent and last longer. If you are on deadline day, take a screenshot, keep trying, and apply for a penalty waiver if needed. The only guaranteed workaround is <strong className="text-ink">having a KRA-registered agent</strong> file through the dedicated agent portal, which has separate infrastructure and much better uptime.
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

          {/* Section 1 — What Is Error 500? */}
          <section id="what-is-error-500" aria-labelledby="what-is-error-500-h">
            <h2 id="what-is-error-500-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What Is KRA iTax Error 500?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                When you see "500 Internal Server Error" on itax.kra.go.ke — or worse, a completely blank white page with no error message at all — it means the KRA server encountered a problem and could not complete your request. This is a <strong className="text-ink">server-side error</strong>, not something wrong with your computer, browser, or internet connection.
              </p>
              <p>
                The iTax portal runs on legacy infrastructure that was not designed for the volume of traffic it now receives. Every month, millions of Kenyan taxpayers log in during the same narrow window (1st–20th), and the servers struggle to keep up. Error 500 is the most common symptom of this overload.
              </p>
              <p>
                There is a difference between Error 500 and other iTax errors. A login failure or "Invalid PIN" is something you can debug on your end (see our{" "}
                <a href="/resources/itax-portal-not-working/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  complete iTax troubleshooting guide
                </a>
                ). But Error 500 means the server is failing — you cannot fix it from your side by clearing your cache or resetting your password.
              </p>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Key distinction:</strong> An Error 500 is different from an Error 404 (page not found) or a timeout. Error 500 means the server accepted your request but crashed while processing it. A blank white page with no error code often indicates the same underlying server failure.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 — Outage vs Local */}
          <section id="outage-vs-local" aria-labelledby="outage-vs-local-h">
            <h2 id="outage-vs-local-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Is It a KRA Outage or Your Connection?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Before assuming iTax is down for everyone, check whether the problem is on your end. Here is a quick diagnostic flowchart.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Check if other websites load",
                    desc: "Open google.co.ke and a Kenyan news site (e.g., businessdailyafrica.com). If those load fine but iTax shows Error 500, KRA is likely the problem. If nothing loads, your internet connection is down.",
                  },
                  {
                    title: "Check iTax from a different device or network",
                    desc: "Try loading itax.kra.go.ke on your phone using mobile data (switch off Wi-Fi). If it works on mobile data but not on your office network, your office IP may be temporarily blocked by KRA's firewall.",
                  },
                  {
                    title: "Check social media for 'iTax down' reports",
                    desc: "Search X (Twitter) for 'iTax', 'KRA', or 'itax.kra.go.ke'. If multiple users are reporting the same error, it is a confirmed KRA outage. Downdetector.co.ke also tracks KRA portal issues.",
                  },
                  {
                    title: "Check KRA's official status",
                    desc: "KRA sometimes posts outage notices on their official website (kra.go.ke) or their X account (@KRANews). If they have acknowledged the issue, there is nothing to do but wait.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <CheckCircle size={15} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink text-[0.88rem]">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3 — What Causes It */}
          <section id="what-causes-it" aria-labelledby="what-causes-it-h">
            <h2 id="what-causes-it-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What Causes iTax Error 500?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Error 500 on iTax has several root causes. Understanding which one you are dealing with helps you predict how long it will last.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Server overload (most common)",
                    desc: "During peak periods (15th–20th of each month), millions of taxpayers access iTax simultaneously. The servers hit capacity and start returning Error 500 for new requests. This usually resolves within 30–60 minutes as the queue clears, but can last hours on high-traffic days like the 20th.",
                  },
                  {
                    title: "Scheduled maintenance",
                    desc: "KRA performs system updates and maintenance, typically between midnight and 6 AM. Error 500 during these hours is normal. KRA sometimes extends maintenance windows without notice, carrying into business hours.",
                  },
                  {
                    title: "Unexpected system crash",
                    desc: "A database crash, network failure, or software bug can take the entire portal down. These are less common but more serious — recovery can take 2–24 hours. The July 2022 outage lasted nearly 3 days.",
                  },
                  {
                    title: "Your IP or session was blocked",
                    desc: "If you refreshed the page too many times in quick succession, KRA's rate limiter may have temporarily blocked your IP address. Wait 30 minutes without touching iTax, then try from a different network.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <Warning size={15} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink text-[0.88rem]">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4 — How Long */}
          <section id="how-long" aria-labelledby="how-long-h">
            <h2 id="how-long-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How Long Does iTax Error 500 Usually Last?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Recovery time depends on the root cause and the time of month. Here is what past patterns tell us.
              </p>
              <div className="border border-hairline rounded-lg overflow-hidden">
                <table className="w-full text-[0.83rem]">
                  <thead>
                    <tr className="border-b border-hairline bg-canvas-alt">
                      <th className="text-left p-3.5 font-semibold text-ink">Scenario</th>
                      <th className="text-left p-3.5 font-semibold text-ink">Typical Duration</th>
                      <th className="text-left p-3.5 font-semibold text-ink">Frequency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hairline">
                    {[
                      { scenario: "Brief server overload (off-peak)", duration: "10–30 minutes", freq: "2–3 times/week" },
                      { scenario: "Peak period overload (15th–20th)", duration: "1–4 hours", freq: "Daily during peak" },
                      { scenario: "Scheduled maintenance", duration: "1–6 hours", freq: "Weekly, late night" },
                      { scenario: "Unexpected system crash", duration: "2–24 hours", freq: "Every 2–3 months" },
                      { scenario: "Your IP rate-limited", duration: "30–60 minutes", freq: "Varies" },
                    ].map(({ scenario, duration, freq }) => (
                      <tr key={scenario}>
                        <td className="p-3.5 text-ink-muted">{scenario}</td>
                        <td className="p-3.5 text-ink-muted">{duration}</td>
                        <td className="p-3.5 text-ink-muted">{freq}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="border border-canvas-warm bg-[#fffbf0] dark:bg-[#2a1f00] dark:border-[#4a3800] rounded-lg p-4 flex items-start gap-3">
                <Clock size={17} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#7a5500] dark:text-[#ffcc44] text-[0.85rem] mb-1">
                    Peak season warning (December–March)
                  </p>
                  <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                    Error 500 becomes significantly more frequent during Kenya's peak tax season. KRA has historically struggled with capacity during these months. If your business files VAT monthly, you will hit Error 500 multiple times. This is when having a KRA-registered agent filing on your behalf matters most.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 — What to Do */}
          <section id="what-to-do" aria-labelledby="what-to-do-h">
            <h2 id="what-to-do-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What to Do When You Get iTax Error 500
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The only real fix for Error 500 is to wait for KRA to resolve the server issue. But these steps will help you minimise disruption.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Take a screenshot immediately",
                    desc: "Capture the error message and the date/time in your screenshot. This is your evidence if you need to apply for a penalty waiver later. Include the URL bar showing itax.kra.go.ke in the screenshot.",
                  },
                  {
                    title: "Wait 30–60 minutes before trying again",
                    desc: "Do not refresh every 30 seconds. Rapid refreshing can trigger KRA's rate limiter and get your IP blocked. Set a timer for 30 minutes and come back.",
                  },
                  {
                    title: "Try during off-peak hours",
                    desc: "If you can wait, try logging in after 10 PM or before 6 AM. Server load is much lower during these hours and Error 500 is rare. Early morning (5 AM–7 AM) is the most reliable window.",
                  },
                  {
                    title: "Try the KRA agent portal if you are an agent",
                    desc: "KRA's agent portal runs on separate infrastructure and has significantly better uptime than the public iTax portal. If you use a KRA-registered VAT agent (like Smart VAT Kenya), we file through this portal and rarely experience Error 500.",
                  },
                  {
                    title: "Contact KRA for extended outages",
                    desc: "If Error 500 persists for more than 4 hours during business hours, call KRA on 020 499 9999 or 0711 000 471. Ask for a status update and request that they record the outage in case it affects your filing deadline.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <CheckCircle size={15} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink text-[0.88rem]">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p>
                For other iTax errors like login failures, OTP delays, and browser issues, see our{" "}
                <a href="/resources/itax-portal-not-working/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  complete iTax troubleshooting guide
                </a>.
              </p>
            </div>
          </section>

          {/* Section 6 — Deadline Day */}
          <section id="deadline-day" aria-labelledby="deadline-day-h">
            <h2 id="deadline-day-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What If Error 500 Hits on the 20th (Deadline Day)?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The worst-case scenario: it is the 20th, your VAT return is due, and iTax is showing Error 500. Here is exactly what to do, step by step.
              </p>
              <div className="border border-canvas-warm bg-[#fffbf0] dark:bg-[#2a1f00] dark:border-[#4a3800] rounded-lg p-5">
                <p className="font-semibold text-[#7a5500] dark:text-[#ffcc44] text-[0.9rem] mb-3">Deadline day protocol</p>
                <ol className="space-y-3">
                  {[
                    "Step 1: Take a screenshot showing the Error 500 with the date and time visible. Include the full browser window — the URL bar confirming you are on itax.kra.go.ke is critical evidence.",
                    "Step 2: Attempt to access iTax from a different device and network (e.g., your phone on mobile data). If the error persists, it is a KRA-side outage.",
                    "Step 3: Keep trying every 30–60 minutes. Do not refresh more frequently — KRA's firewall may interpret this as a bot attack and block your IP.",
                    "Step 4: If the portal comes back before midnight, file immediately. Do not wait until the next morning.",
                    "Step 5: If you miss the deadline due to the outage, file the moment the portal is back. Then go to iTax and submit a penalty waiver application citing system downtime. Attach your screenshots as evidence.",
                    "Step 6 (optional): Contact Smart VAT Kenya. As KRA-registered agents, we can often file returns through the agent portal even when the public iTax portal is down. We also handle penalty waiver applications for our clients.",
                  ].map((step) => (
                    <li key={step} className="flex items-start gap-3 text-[0.85rem] text-[#8a6500] dark:text-[#ccaa33]">
                      <CheckCircle size={15} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Important:</strong> KRA does NOT automatically waive penalties because the portal was down. You must proactively apply for a penalty waiver and provide evidence. A screenshot showing Error 500 on the deadline is strong evidence — but KRA has discretion to reject it. This is why many businesses choose to never rely on the public iTax portal for deadline filing.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7 — Prevention */}
          <section id="prevention" aria-labelledby="prevention-h">
            <h2 id="prevention-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Prevention: Never Let Error 500 Cost You Again
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Error 500 is a fact of life on the iTax portal. KRA has acknowledged the infrastructure limitations, but meaningful improvements have been slow. Every month, thousands of Kenyan business owners lose hours — and sometimes money — to this error.
              </p>
              <p>
                There are two ways to deal with it: accept that you will periodically see Error 500 and manage around it, or <strong className="text-ink">never log in to iTax again</strong>. With Smart VAT Kenya's auto-filing service, we handle everything through KRA's agent portal — a system with separate, more reliable infrastructure designed for professional use.
              </p>
              <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                <p className="font-semibold text-ink text-[0.9rem] mb-3">What you get for KES 3,500/month:</p>
                <ul className="space-y-2">
                  {[
                    "Monthly VAT return filed before the 20th — every single month, guaranteed, via the KRA agent portal.",
                    "No more Error 500, no more blank white pages, no more waiting for KRA to restart their servers.",
                    "We prepare your return from your sales and purchase records — you just send the figures on WhatsApp.",
                    "Penalty monitoring and waiver applications handled for you.",
                    "Dedicated WhatsApp line — reach us anytime during business hours.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[0.85rem] text-ink-soft">
                      <CheckCircle size={15} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p>
                No setup fee. No long-term contract. Cancel anytime. You will never see Error 500 again.
              </p>

              {/* Conversion CTA */}
              <div className="mt-8 border border-brand/20 bg-brand-muted rounded-lg p-6">
                <p className="font-display text-[1.15rem] font-semibold text-ink mb-3">Tired of iTax Error 500?</p>
                <p className="text-[0.84rem] text-ink-soft leading-relaxed mb-4">
                  Stop refreshing the portal every 30 seconds hoping it will come back. Our KRA-registered agents file your VAT return through the dedicated agent portal — the one that actually works.{" "}
                  <strong className="text-ink">KES 3,500/month</strong>, filed before the 20th, every month.
                </p>
                <a
                  href="https://wa.me/254721725958?text=Hi%2C%20I%20want%20to%20stop%20dealing%20with%20iTax%20Error%20500.%20Please%20help%20me%20sign%20up%20for%20auto-filing."
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
                >
                  Start Auto-Filing — KES 3,500/month
                  <ArrowRight size={14} weight="bold" aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection faqSchema={faqSchema} />
        </article>

        {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="kra-status-code-500-itax-errors" />
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
      </div>
    </>
  )
}
