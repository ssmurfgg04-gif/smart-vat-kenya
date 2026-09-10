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
    { "@type": "ListItem", position: 3, name: "eTIMS vs KRA Shuru Chatbot", item: "https://smartvatkenya.co.ke/resources/etims-vs-shuru-comparison/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org" as const,
  "@type": "Article",
  headline: "eTIMS vs KRA Shuru Chatbot: What Each Actually Does (Kenya 2026)",
  description:
    "KRA's Shuru WhatsApp chatbot files simple returns and answers FAQs for 22M+ taxpayers. This guide separates what Shuru actually handles from what still needs a human tax agent: rejected eTIMS invoices, penalty waivers, and complex errors.",
  author: personSchema(),
  publisher: PUBLISHER,
  datePublished: "2026-09-10",
  dateModified: lastVerified,
  url: "https://smartvatkenya.co.ke/resources/etims-vs-shuru-comparison/",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/etims-vs-shuru-comparison/",
}

const faqSchema = {
  "@context": "https://schema.org" as const,
  "@type": "FAQPage" as const,
  mainEntity: [
    {
      "@type": "Question" as const,
      name: "Is KRA's Shuru chatbot free to use?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Yes. Shuru is KRA's official WhatsApp chatbot and it is completely free - you chat with it on the number KRA publishes on kra.go.ke. It answers tax questions, guides simple filings, and sends deadline reminders at no cost. There is no paid tier and KRA will never ask you to send money to a personal number through it.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Can Shuru fix a rejected eTIMS invoice?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "No. Shuru can tell you what an eTIMS rejection error means in general terms, but it cannot look at your specific invoice, your device configuration, or your invoice numbering sequence to diagnose why KRA's validator rejected it. Rejected invoices need either the self-service diagnostic steps in our eTIMS guides or a human agent who works through your exact case.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Can Shuru apply for a penalty waiver for me?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "No. A penalty waiver under the Tax Procedures Act requires an application stating reasonable cause, and until 31 December 2026 the tax amnesty programme requires structuring payments of the principal. Shuru points you to the forms, but it does not draft grounds, evidence a case, or follow up an application stuck in review - that remains tax-agent work.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Should I stop using my tax agent because Shuru exists?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Not if your situation has any complexity. Shuru is excellent for what it is: a free first line for simple questions and basic filings. Businesses with eTIMS issues, penalty histories, audit exposure, or simply no time, still get their money's worth from an agent. The smart play is to use Shuru for quick lookups and keep a human for the cases that fail inside the chatbot.",
      },
    },
    {
      "@type": "Question" as const,
      name: "How do I know a WhatsApp tax 'agent' is not a scam?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Three checks: a real KRA-registered tax agent has a KRA PIN and can show agent registration; real services quote prices in writing before starting (registration at KES 5,000 flat, monthly filing around KES 3,500, per-incident diagnosis around KES 1,500); and no legitimate service asks for your iTax password to 'check' anything - agents work through the agent portal with a formal appointment, not your login. Shuru itself will never ask you to pay a personal M-Pesa number.",
      },
    },
  ],
}

const toc = [
  { id: "what-is-shuru", label: "What Shuru Actually Is" },
  { id: "what-shuru-does", label: "What Shuru Handles Well" },
  { id: "what-shuru-cant", label: "What Shuru Cannot Do" },
  { id: "etims-where-humans-win", label: "eTIMS: Where Humans Still Win" },
  { id: "comparison-table", label: "Side-by-Side Comparison" },
  { id: "using-both", label: "Using Both (The Smart Setup)" },
  { id: "faq", label: "Frequently Asked Questions" },
]

export default function EtimsVsShuruChatbotPage() {
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
            {["KRA Shuru", "eTIMS", "WhatsApp", "Comparison"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            eTIMS vs KRA Shuru Chatbot: What Each Actually Does
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
            KRA's <strong className="text-ink">Shuru</strong> is a free WhatsApp chatbot built for the 22+ million taxpayers KRA can never serve by phone. It is genuinely good at <strong className="text-ink">simple things</strong>: answering tax questions, walking you through a basic nil return, sending deadline reminders. It is not built for <strong className="text-ink">broken things</strong>: a rejected eTIMS invoice, a penalty waiver case, a stuck registration, or an audit letter. Use Shuru for lookups; use our <a href="/tools/etims-diagnostic/" className="text-brand underline underline-offset-2 hover:text-brand-hover">free eTIMS diagnostic tool</a> and human agents for whatever fails inside the chat.
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
          {/* What is Shuru */}
          <section id="what-is-shuru" aria-labelledby="what-is-shuru-h" className="scroll-mt-20">
            <h2 id="what-is-shuru-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What Shuru Actually Is
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Shuru is KRA's official WhatsApp chatbot for tax filing and taxpayer support, launched to reach the more than 22 million taxpayers KRA is chasing into the tax net &mdash; including the millions who will never visit a KRA office or log a call-centre ticket. You start a WhatsApp chat with it, and it answers in plain language about PINs, filing deadlines, tax types, and iTax processes. For a government agency that historically communicated through press releases and PDF portals, it is a genuine leap.
              </p>
              <p>
                The important word in that description is <strong className="text-ink">chatbot</strong>. Shuru automates the first line of support: scripted intents, canned walkthroughs, and links into KRA's self-service systems. It runs inside WhatsApp because that is where Kenyan SMEs already live &mdash; the same logic behind every WhatsApp-first tax service in the country, ours included. KRA validating the channel is good news for everyone: it normalises getting tax help on your phone instead of in a queue.
              </p>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Scam warning:</strong> because Shuru is popular, impostors follow. Only trust the number published on <a href="https://www.kra.go.ke" target="_blank" rel="noopener noreferrer" className="text-brand underline underline-offset-2 hover:text-brand-hover">kra.go.ke</a>. No KRA system &mdash; Shuru included &mdash; will ever ask you to send money to a personal M-Pesa number.
                </p>
              </div>
            </div>
          </section>

          {/* What Shuru does well */}
          <section id="what-shuru-does" aria-labelledby="what-shuru-does-h">
            <h2 id="what-shuru-does-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What Shuru Handles Well
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Within its lane, Shuru is fast, free, and available at 11 PM on a Sunday &mdash; three things a call centre never was. If your need matches one of its scripted flows, it will probably beat every alternative on speed.
              </p>
              <ul className="space-y-2.5">
                {[
                  "General tax questions: what VAT is, who must register, what the KES 5M threshold means, what a TCC requires.",
                  "Simple filings guidance: step-by-step prompts for straightforward returns, including nil returns for taxpayers with no income to declare.",
                  "Deadline reminders: nudges before the 20th, which alone prevents a meaningful share of the KES 10,000 late-filing penalties issued every month.",
                  "Portal navigation: telling you where on iTax or eTIMS a function lives, so you stop hunting through menus.",
                  "Status pointers: directing you to the right KRA channel for a PIN certificate, a ledger statement, or an acknowledgement.",
                ].map((item) => (
                  <li key={item.slice(0, 30)} className="flex items-start gap-3 text-[0.85rem] text-ink-soft">
                    <CheckCircle size={15} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                For a taxpayer whose month is: earn, file a simple return, pay, repeat &mdash; Shuru may genuinely cover the full relationship with KRA. That is exactly the population it was designed for, and it is a large one.
              </p>
            </div>
          </section>

          {/* What Shuru can't do */}
          <section id="what-shuru-cant" aria-labelledby="what-shuru-cant-h">
            <h2 id="what-shuru-cant-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What Shuru Cannot Do
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                A chatbot fails where problems are <em>specific</em> rather than <em>general</em>. Every failure mode below shares one root cause: the answer depends on your particular invoice, your particular ledger, your particular history &mdash; not on a script KRA can pre-write.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Diagnose a rejected eTIMS invoice",
                    body: "Shuru can define the error. It cannot inspect your device's numbering sequence, certificate state, or buyer PIN pattern to tell you which fix applies. Our eTIMS diagnostic tool and the rejected-invoice guide exist precisely for this gap.",
                  },
                  {
                    title: "Build a penalty waiver or amnesty case",
                    body: "Waivers need reasonable-cause grounds, sequencing with the 2026 amnesty (100% waiver of pre-2026 penalties, interest and fines until 31 December 2026), and follow-up when applications stall. A form pointer is not a case.",
                  },
                  {
                    title: "Handle complex or mixed situations",
                    body: "Multiple obligations, backdated registrations, non-resident rental income, construction reverse-VAT, audit responses - these need judgment applied to facts, which is tax-agent work.",
                  },
                  {
                    title: "Do the work for you",
                    body: "Shuru guides you through portals; it does not operate them on your behalf. Agent-portal filing (KES 3,500/month) exists because someone still has to prepare the return, reconcile eTIMS data, and submit before the 20th - every month.",
                  },
                ].map(({ title, body }) => (
                  <div key={title} className="border border-hairline rounded-lg p-4 bg-canvas">
                    <p className="font-semibold text-ink text-[0.9rem] mb-1.5">{title}</p>
                    <p className="text-[0.84rem] text-ink-muted leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* eTIMS where humans win */}
          <section id="etims-where-humans-win" aria-labelledby="etims-where-humans-win-h">
            <h2 id="etims-where-humans-win-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              eTIMS: Where Humans Still Win
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                eTIMS is the stress test for any automated support, because eTIMS errors are <strong className="text-ink">stateful</strong>: the same on-screen message can have three different causes depending on what your device did last week. "Pending sync" might be connectivity, an expired certificate, or the 7-day lockout rule quietly triggering. "Invoice rejected" might be the signature type, a duplicate serial, or the buyer's PIN failing validation. A script cannot see your screen; a person (or a decision-tree diagnostic built from real cases) can.
              </p>
              <p>
                That is the honest division of labour this page exists to draw. If your eTIMS question is "what does this error mean?", Shuru answers. If it is "<em>why is this happening to my invoices and how do I make it stop?</em>", you need either self-service diagnostics with real decision trees &mdash; our <a href="/tools/etims-diagnostic/" className="text-brand underline underline-offset-2 hover:text-brand-hover">free eTIMS error diagnostic</a> covers pending sync, rejections, lockouts and PIN issues &mdash; or a KRA-registered agent who works your case at KES 1,500 per incident. Both routes get you an answer tied to your situation, not the average situation.
              </p>
            </div>
          </section>

          {/* Comparison table */}
          <section id="comparison-table" aria-labelledby="comparison-table-h">
            <h2 id="comparison-table-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Side-by-Side: Shuru vs a Human Tax Agent
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <div className="border border-hairline rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-[0.82rem]">
                    <thead>
                      <tr className="bg-canvas-alt border-b border-hairline">
                        <th className="text-left p-3.5 font-semibold text-ink">Need</th>
                        <th className="text-left p-3.5 font-semibold text-ink">KRA Shuru (free)</th>
                        <th className="text-left p-3.5 font-semibold text-ink">Human agent / tools</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-hairline">
                      {[
                        { need: "General tax questions", shuru: "Yes - fast, 24/7", human: "Yes, but why pay" },
                        { need: "Nil return walkthrough", shuru: "Yes", human: "Included in filing if managed" },
                        { need: "Deadline reminders", shuru: "Yes", human: "Free deadline calendar" },
                        { need: "Rejected eTIMS invoice", shuru: "Defines the error only", human: "Diagnoses your exact case" },
                        { need: "Penalty waiver / amnesty case", shuru: "Points to the form", human: "Drafts grounds, follows up" },
                        { need: "VAT registration done for you", shuru: "No", human: "KES 5,000 flat, 1-3 days" },
                        { need: "Monthly filing done for you", shuru: "No", human: "KES 3,500/month via agent portal" },
                        { need: "Cost", shuru: "Free", human: "Free tools + priced services" },
                      ].map((row) => (
                        <tr key={row.need}>
                          <td className="p-3.5 font-medium text-ink">{row.need}</td>
                          <td className="p-3.5 text-ink-muted">{row.shuru}</td>
                          <td className="p-3.5 text-ink-muted">{row.human}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p>
                Read the table as a routing rule, not a scoreboard: <strong className="text-ink">start free, escalate when it breaks</strong>. Shuru for speed on simple things; diagnostics and agents for depth on broken things.
              </p>
            </div>
          </section>

          {/* Using both */}
          <section id="using-both" aria-labelledby="using-both-h">
            <h2 id="using-both-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Using Both: The Smart Setup
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The businesses that navigate KRA with the least stress run a three-layer stack. Layer one is Shuru, bookmarked, for instant lookups and deadline nudges. Layer two is self-service tooling: the <a href="/tools/" className="text-brand underline underline-offset-2 hover:text-brand-hover">free calculators and diagnostics</a> that answer the "why is this happening to me" questions without a queue. Layer three is a human agent, pre-chosen and priced, for the day something genuinely breaks &mdash; because the worst time to find an agent is mid-outage, mid-rejection, or mid-audit.
              </p>
              <p>
                Nothing in that stack wastes money: two of the three layers are free, and the third is only engaged per incident or per month. What it buys is the thing a chatbot cannot sell &mdash; a plan for the day automation runs out of script.
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
            Shuru capability set per KRA's public launch communications and kra.go.ke guidance, September 2026. Penalty and amnesty figures per Tax Procedures Act and the 2026 Tax Amnesty Programme (window closes 31 December 2026). Service pricing (KES 5,000 registration / KES 3,500 monthly filing / KES 1,500 per-incident eTIMS diagnosis) is Smart VAT Kenya's published rates. Last verified: 10 September 2026.
          </p>
        </div>

        {/* More Guides */}
        <div className="mt-10 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="etims-vs-shuru-comparison" />
        </div>

        {/* CTA */}
        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">Stuck where Shuru stops?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[40ch] mx-auto leading-relaxed">
            Run the free eTIMS diagnostic, or get a KRA-registered agent on your exact case.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/tools/etims-diagnostic/"
              className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
            >
              Free eTIMS Diagnostic
              <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
            <a
              href="/resources/"
              className="inline-flex items-center gap-2 border border-hairline text-ink font-semibold text-sm px-5 py-3 rounded-md hover:border-ink/30 transition-colors"
            >
              All Resources
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
