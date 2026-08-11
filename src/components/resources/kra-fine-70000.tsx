import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const WHATSAPP_NUMBER = "254717344440"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "KRA Fine of KES 70,000 — You May Only Owe the Principal", item: "https://smartvatkenya.co.ke/resources/kra-fine-70000/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Got a KRA Fine Around KES 70,000? You May Only Owe the Principal",
  description:
    "A KES 70,000 KRA bill is usually late-filing penalties piling up, not tax you own. Check whether the 2026 tax amnesty wipes most of it before you pay a shilling.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-08-05",
  dateModified: "2026-08-05",
  url: "https://smartvatkenya.co.ke/resources/kra-fine-70000",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/kra-fine-70000",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why is my KRA fine so high?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KRA bills are almost never a single charge. A seemingly huge fine is usually the original tax (if any) plus late-filing penalties plus monthly interest (commonly cited around 1%, compounding) that has grown over many months. A company that misses seven months of VAT nil returns at KES 10,000 per month lands on exactly KES 70,000 in penalties alone.",
      },
    },
    {
      "@type": "Question",
      name: "Can the 2026 KRA tax amnesty wipe my penalties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your debt relates to a period up to 31 December 2025, yes. The Finance Act 2026 amnesty (running 1 July to 31 December 2026) waives 100% of penalties and interest — you only pay the principal tax. If the bill is pure late-filing penalties with no principal owed, filing the outstanding returns triggers the waiver automatically and you owe nothing extra.",
      },
    },
    {
      "@type": "Question",
      name: "Do I still have to pay the principal tax under the amnesty?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The amnesty waives penalties, interest, and fines — not the original tax. The principal must be paid in full (or cleared via a KRA-approved payment plan) by 31 December 2026. What gets wiped is everything on top of it.",
      },
    },
    {
      "@type": "Question",
      name: "My KRA debt is from 2026. Does the amnesty apply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Only liabilities accumulated up to 31 December 2025 qualify. Anything arising on or after 1 January 2026 falls entirely outside the amnesty and stays fully payable. For 2026 debt you must apply for a discretionary penalty waiver on iTax — a case-by-case decision that is not guaranteed.",
      },
    },
    {
      "@type": "Question",
      name: "What is the late VAT nil-return penalty in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reported figures vary by source and by whether tax was actually due — commonly KES 10,000 per month for a nil VAT return filed late, alongside 5% or a per-tax figure when tax was due. Individual income tax nil returns carry a KES 2,000 late penalty, and company income tax nil returns KES 20,000 (or 5% of tax due, whichever is higher). Always check your actual iTax ledger for the amount KRA applied to your account.",
      },
    },
    {
      "@type": "Question",
      name: "Will unpaid penalties block my TCC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Unfiled returns and outstanding penalties block your KRA Tax Compliance Certificate (TCC), which you need for government tenders, work permits, licences, and many bank/financing processes. Resolving the debt through the amnesty is the fastest way to get a clean ledger and release your TCC.",
      },
    },
  ],
}

const toc = [
  { id: "where-it-comes-from", label: "Why Did My Fine Reach 70K?" },
  { id: "you-may-only-pay-principal", label: "You May Only Owe the Principal" },
  { id: "check-amnesty-first", label: "Check the Amnesty First, Before You Pay" },
  { id: "debt-from-2026", label: "If Your Debt Is From 2026 Onward" },
  { id: "what-to-do-now", label: "What to Do Now" },
  { id: "faq", label: "Frequently Asked Questions" },
]

export default function KraFine70000() {
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
            {["KRA Fine", "Penalty", "Nil Return", "Amnesty", "iTax"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            Got a KRA Fine Around KES 70,000? You May Only Owe the Principal
          </h1>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="font-mono text-[0.62rem] uppercase tracking-widest bg-brand/20 text-brand px-2.5 py-1 rounded-sm">Last updated: August 5, 2026</span>
            <span className="text-[0.78rem] text-canvas/50">Smart VAT Kenya — KRA-registered VAT agents</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* SHOCK / BLUF banner */}
        <div className="border-l-[3px] border-brand pl-5 mb-6">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Quick Answer</p>
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            <strong className="text-ink">Most people don&apos;t know this:</strong> if your fine is for late filing from
            before 2026, you may not owe most of it. The <strong className="text-ink">2026 KRA tax amnesty</strong>{" "}
            waives <strong className="text-ink">100% of the penalties and interest</strong> on tax debt accumulated up to
            31 December 2025 — you only pay the principal. If your bill is pure late-filing penalties with nothing owed
            as principal, filing the outstanding returns wipes the penalties <strong className="text-ink">automatically</strong>.
          </p>
        </div>

        {/* Lead CTA */}
        <div className="border border-brand/20 bg-brand-muted rounded-lg p-6 mb-10">
          <p className="font-display text-[1.15rem] font-semibold text-ink mb-2">Don&apos;t pay that 70K yet.</p>
          <p className="text-[0.84rem] text-ink-soft leading-relaxed mb-4">
            The amnesty runs <strong className="text-ink">1 July to 31 December 2026</strong> and covers debt up to the end of
            2025. Before you transfer anything, check if your debt qualifies.{" "}
            <a href="/resources/kra-tax-amnesty-2026/#am-i-eligible" className="text-brand underline underline-offset-2 hover:text-brand-hover">
              Jump to the eligibility guide
            </a>
            , or message us — we&apos;ll tell you if it&apos;s covered.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20got%20a%20KRA%20fine%20around%2070%2C000%20-%20does%20the%20amnesty%20cover%20it%3F`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
          >
            Ask if Your Fine Qualifies on WhatsApp
            <ArrowRight size={14} weight="bold" aria-hidden="true" />
          </a>
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

          {/* Section 1 — where the fine comes from */}
          <section id="where-it-comes-from" aria-labelledby="where-it-comes-from-h">
            <h2 id="where-it-comes-from-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Why Did My Fine Reach 70K?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                That number is almost never a single tax bill. KRA fines are built from layers — late-filing penalties,
                interest on anything unpaid, and sometimes the principal itself. When you miss filings for several months,
                they stack fast.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Late-filing penalties per return",
                    desc: "VAT nil returns are commonly penalised at about KES 10,000 per month filed late (amounts vary by source and whether tax was due — check iTax).",
                  },
                  {
                    title: "Individual income tax nil returns",
                    desc: "A late nil return costs KES 2,000 per individual. Companies pay KES 20,000 per late company income-tax return, or 5% of tax due, whichever is higher.",
                  },
                  {
                    title: "Interest on unpaid amounts",
                    desc: "Interest is commonly cited at around 1% per month, compounding — though some sources quote up to 2%. Because figures genuinely differ across sources, don&apos;t rely on a rule of thumb: read the exact rate KRA applied in your iTax ledger.",
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
              <div className="border border-hairline rounded-lg overflow-hidden not-prose">
                <div className="bg-canvas-alt px-4 py-3 border-b border-hairline">
                  <p className="font-semibold text-ink text-[0.85rem]">A realistic example that hits KES 70,000</p>
                </div>
                <div className="p-4 space-y-2 text-[0.85rem]">
                  <p className="text-ink">A company misses <strong>7 months</strong> of VAT <em>nil</em> returns.</p>
                  <p className="text-ink-soft">7 months × KES 10,000/month = <strong className="text-ink">KES 70,000</strong> in late-filing penalties.</p>
                  <p className="text-ink-soft">No interest and no principal needed — just the missed filings. The KES 10,000/month is the widely-cited flat penalty for a late nil VAT return; months where VAT was actually due instead follow the 5%-of-tax-or-KES-10,000 rule, which can be higher.</p>
                </div>
              </div>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Check your own numbers:</strong> VAT, individual, and company penalties combine
                  differently and sources differ on some figures. Always trust the amount shown in your own{" "}
                  <strong className="text-ink">iTax ledger</strong> over any table — log in and read exactly what KRA applied.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 — you may only owe the principal */}
          <section id="you-may-only-pay-principal" aria-labelledby="you-may-only-pay-principal-h">
            <h2 id="you-may-only-pay-principal-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              You May Only Owe the Principal — Most People Don&apos;t Know This
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Here&apos;s the part that changes everything, and the reason this page exists: a <strong className="text-ink">huge
                share of a fine like 70K is penalties and interest, not tax you own</strong>. And under the{" "}
                <strong className="text-ink">2026 KRA tax amnesty</strong> (Finance Act 2026), penalties and interest on
                debt accumulated up to <strong className="text-ink">31 December 2025</strong> can be{" "}
                <strong className="text-ink">waived 100%</strong>. You pay only the principal.
              </p>
              <p>
                Say you owed KES 100,000 in tax and it grew to KES 180,000 through penalties and interest. Under the amnesty
                you settle the <strong className="text-ink">KES 100,000 principal</strong> and{" "}
                <strong className="text-ink">KES 80,000 falls away</strong>. And if you owe <em>no</em> principal — your 70K is pure
                late-filing penalties on nil returns — the waiver is automatic once you file those returns, so that 70K can go to{" "}
                <strong className="text-ink">KES 0</strong>.
              </p>
              <p>
                Most small-business owners race to pay the full amount because nothing told them otherwise. That&apos;s the gap —
                the amnesty exists in tax-policy press and KRA notices, not in front of the person panicking at a big iTax figure.
              </p>
              <p>
                There is one hard limit: it only covers liabilities for periods <em>up to 31 December 2025</em>. Anything from{" "}
                <strong className="text-ink">1 January 2026 onward is excluded</strong> and stays fully payable.
              </p>
              <p>
                See our full{" "}
                <a href="/resources/kra-tax-amnesty-2026/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  KRA tax amnesty 2026 guide
                </a>{" "}
                for the complete eligibility rules.
              </p>
            </div>
          </section>

          {/* Section 3 — check amnesty first */}
          <section id="check-amnesty-first" aria-labelledby="check-amnesty-first-h">
            <h2 id="check-amnesty-first-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Check the Amnesty First, Before You Pay Anything
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>Match your situation below. In most cases the amnesty applies automatically — no application needed.</p>
              <div className="space-y-4 not-prose">
                {[
                  {
                    scenario: "Principal already paid",
                    result: "Automatic waiver — no action needed. KRA&apos;s system applies it.",
                  },
                  {
                    scenario: "Late-filing penalties only, no principal owed",
                    result: "File the outstanding returns, and the penalty waiver triggers automatically. Your 70K could go to KES 0.",
                  },
                  {
                    scenario: "Still owe principal — can pay lump sum",
                    result: "Pay the full principal by 31 December 2026, and the waiver is applied.",
                  },
                  {
                    scenario: "Still owe principal — need instalments",
                    result: "Apply for a KRA-approved payment plan on iTax and clear the principal by 31 December 2026.",
                  },
                ].map(({ scenario, result }) => (
                  <div key={scenario} className="border border-hairline rounded-lg p-4">
                    <p className="font-semibold text-ink text-[0.88rem] mb-1">{scenario}</p>
                    <p className="text-[0.83rem] text-ink-muted leading-relaxed">{result}</p>
                  </div>
                ))}
              </div>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Note:</strong> even a fine that&apos;s been split between principal and penalties only
                  gets the <em>penalty portion</em> waived — you don&apos;t need a fully nil bill to benefit. Get the routing right on{" "}
                  <a href="/resources/kra-tax-amnesty-2026/#am-i-eligible" className="text-brand underline underline-offset-2 hover:text-brand-hover">the eligibility guide</a>.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 — debt from 2026 */}
          <section id="debt-from-2026" aria-labelledby="debt-from-2026-h">
            <h2 id="debt-from-2026-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              If Your Debt Is From 2026 Onward
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Anything arising on or after <strong className="text-ink">1 January 2026</strong> sits outside the amnesty. For that
                debt you don&apos;t have an automatic waiver — you must apply to KRA for a{" "}
                <strong className="text-ink">discretionary penalty waiver</strong>.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Written application",
                    desc: "Submit through the iTax portal under the Penalty and Interest Waiver menu, explaining why the penalty should be waived.",
                  },
                  {
                    title: "All returns must now be filed",
                    desc: "KRA wants current filing to be fully up to date before it will consider waiving past penalties.",
                  },
                  {
                    title: "Case-by-case, not guaranteed",
                    desc: "There is no blanket waiver — KRA decides each case. A genuine mistake or first-time offence is far more likely to succeed than a pattern.",
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
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  You may hold penalties for <em>both</em> pre-2026 and 2026 periods. Handle each correctly: the pre-2026 part under
                  the amnesty, the 2026 part via a waiver application. See our{" "}
                  <a href="/resources/kra-penalty-for-late-vat-filing/" className="text-brand underline underline-offset-2 hover:text-brand-hover">late VAT filing waiver guide</a>.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 — what to do now */}
          <section id="what-to-do-now" aria-labelledby="what-to-do-now-h">
            <h2 id="what-to-do-now-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What to Do Now
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <div className="space-y-4 not-prose">
                {[
                  {
                    step: 1,
                    title: "Don&apos;t pay the full amount yet",
                    desc: "Read the actual breakdown in iTax — separate principal from penalties and interest. Under the amnesty the principal is what matters.",
                  },
                  {
                    step: 2,
                    title: "Get the dates right",
                    desc: "If the debt is for a period up to 31 December 2025, the amnesty applies. If it&apos;s from 2026, you need a waiver application instead.",
                  },
                  {
                    step: 3,
                    title: "File all outstanding returns",
                    desc: "This is the step that unlocks the automatic waiver when no principal is owed. Unfiled returns are also what block your TCC.",
                  },
                  {
                    step: 4,
                    title: "Settle the principal by 31 December 2026",
                    desc: "Lump sum, or a KRA-approved payment plan. The deadline is firm — miss it and the penalties come back.",
                  },
                  {
                    step: 5,
                    title: "Confirm the waiver on your ledger",
                    desc: "Once principal is paid, KRA applies the waiver automatically. Check iTax to confirm the penalties and interest are cleared.",
                  },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <span className="bg-ink text-canvas rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 tabular-nums">{step}</span>
                    <div>
                      <p className="font-semibold text-ink text-[0.9rem]">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border border-brand/20 bg-brand-muted rounded-lg p-6 mt-6">
                <p className="font-display text-[1.15rem] font-semibold text-ink mb-3">Not Sure Which Applies to Your Fine?</p>
                <p className="text-[0.84rem] text-ink-soft leading-relaxed mb-4">
                  Cleared penalties unlock your{" "}
                  <a href="/resources/tax-compliance-certificate-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">Tax Compliance Certificate</a>{" "}
                  (TCC) — needed for tenders, licences, and work permits. Our{" "}
                  <strong className="text-ink">Penalty Waiver service (KES 4,000)</strong> reconciles your iTax ledger, handles the
                  amnesty or waiver application, and sorts out the PRN/allocation errors that trip people up.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/services/kra-penalty-waiver/"
                    className="inline-flex items-center justify-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
                  >
                    Learn More — KES 4,000
                    <ArrowRight size={14} weight="bold" aria-hidden="true" />
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20need%20help%20with%20my%20KRA%20fine%20-%20is%20it%20covered%20by%20the%20amnesty%3F`}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-brand/30 text-ink text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand/5 transition-colors"
                  >
                    Chat on WhatsApp First
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection faqSchema={faqSchema} />
        </article>

        {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="kra-fine-70000" />
        </div>

        {/* CTA */}
        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">Stuck with a KRA fine or unfiled returns?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[40ch] mx-auto leading-relaxed">
            We reconcile your ledger and handle amnesty or waiver applications so you pay the right amount — and fast.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20need%20help%20with%20a%20KRA%20penalty`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            Get Help on WhatsApp
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