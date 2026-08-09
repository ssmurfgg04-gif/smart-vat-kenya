import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "KRA VAT Penalties Reference", item: "https://smartvatkenya.co.ke/resources/kra-vat-penalties-reference/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "KRA VAT Penalties Kenya 2026: The Complete Reference Table",
  description:
    "Complete KRA VAT penalties reference for Kenya 2026. Late filing: KES 10,000 or 5%. Non-registration: up to KES 100,000. eTIMS e-invoice failure: higher of 5% of tax due, KES 100,000 (companies), or KES 10,000 (individuals) (TPA s.86). Integration failure: up to KES 100,000/month (s.59A(5)). Late payment: 5% + 1%/month interest.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-01-15",
  dateModified: "2026-07-25",
  url: "https://smartvatkenya.co.ke/resources/kra-vat-penalties-reference",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/kra-vat-penalties-reference",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the KRA VAT penalties for late filing in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The penalty for late filing of a VAT return is KES 10,000 fixed penalty or 5% of the tax due — whichever is higher — charged per month the return is outstanding. In addition, KRA charges 1% monthly interest on the unpaid tax. Even nil returns filed late attract the KES 10,000 fixed penalty.",
      },
    },
    {
      "@type": "Question",
      name: "How much is the KRA penalty for not registering for VAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Failure to register for VAT within 30 days of exceeding the KES 5 million annual turnover threshold carries a penalty of KES 100,000 or the tax that would have been due (whichever is higher). KRA will also backdate your registration and demand VAT for all taxable supplies made while you were unregistered.",
      },
    },
    {
      "@type": "Question",
      name: "What is the KRA eTIMS penalty for non-compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KRA imposes eTIMS penalties on several bases. Since the Finance Act 2026 (in force 1 July 2026), failing to issue compliant electronic tax invoices or to file/pay electronically attracts the higher of 5% of the tax due, KES 100,000 for companies, or KES 10,000 for individuals under TPA s.86 (before then, two times the tax due applied per the Finance Act 2023). The Tax Procedures (Electronic Tax Invoice) Regulations, LN 64/2024, refer breaches to s.86. Separately, a notified business with turnover above KES 5 million that fails to integrate its data-management system faces up to KES 100,000 per month under TPA s.59A(5). Figures like KES 500,000 per month or KES 1M/10% per invoice circulate in some guidance but are not enacted law. A KES 50,000-per-month figure is also not a standalone penalty under the ETI Regulations.",
      },
    },
    {
      "@type": "Question",
      name: "Can I apply for a KRA VAT penalty waiver?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Under Section 35 of the Tax Procedures Act, KRA may waive or remit penalties and interest if you demonstrate a valid reason — first-time offence, genuine mistake, system error, illness, or natural disaster. You submit the waiver application through iTax under the 'Penalty and Interest Waiver' menu. KRA typically responds within 7 to 30 working days.",
      },
    },
    {
      "@type": "Question",
      name: "What is blocked input VAT and why does KRA deny it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Blocked input VAT refers to VAT on certain expenses that KRA does not allow you to claim as input tax, even if you are VAT-registered. These include: entertainment expenses (unless provided to staff), passenger vehicles (unless the business is in transport or vehicle sales), and goods or services acquired for personal use. Claiming blocked input VAT can result in your entire input claim being rejected.",
      },
    },
    {
      "@type": "Question",
      name: "How does KRA calculate late payment interest on VAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KRA charges late payment interest at 1% per month (approximately 12% per annum) on the unpaid VAT amount. The interest is calculated from the due date (20th of the month) until the date of full payment. It is simple interest, not compound, but it accrues every month regardless of whether KRA sends you a reminder.",
      },
    },
    {
      "@type": "Question",
      name: "What is the penalty for withholding VAT agents who default?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A withholding VAT agent who fails to remit VAT deducted from a supplier to KRA faces a penalty of 5% of the amount not remitted. The agent is also liable for the unpaid principal amount plus interest at 1% per month. KRA aggressively pursues defaulting withholding VAT agents through agency notices and enforcement.",
      },
    },
  ],
}

const toc = [
  { id: "introduction",     label: "Understanding KRA VAT Penalties" },
  { id: "penalty-table",    label: "Complete KRA VAT Penalty Table" },
  { id: "accumulation",     label: "How Penalties Accumulate — Worked Example" },
  { id: "waiver",           label: "KRA Penalty Waiver Process" },
  { id: "avoid",            label: "How to Avoid KRA VAT Penalties" },
  { id: "services",         label: "Smart VAT Kenya Services" },
  { id: "faq",              label: "Frequently Asked Questions" },
]

const penaltyRows = [
  {
    type: "Late filing of VAT return",
    law: "Section 38, VAT Act",
    penalty: "KES 10,000 or 5% of the tax due (whichever is higher) per month or part of month the return is outstanding",
    interest: "1% per month on unpaid tax",
  },
  {
    type: "Late payment of VAT",
    law: "Section 38, VAT Act",
    penalty: "5% of the unpaid tax amount",
    interest: "1% per month on unpaid tax from due date to date of full payment",
  },
  {
    type: "Failure to register for VAT",
    law: "Section 34, VAT Act",
    penalty: "KES 100,000 or the tax that would have been due (whichever is higher)",
    interest: "1% per month on assessed tax",
  },
  {
    type: "Understatement of tax / evasion",
    law: "Section 38, VAT Act",
    penalty: "75% to 200% of the tax evaded (varies based on KRA assessment of intent)",
    interest: "1% per month on unpaid tax",
  },
  {
    type: "eTIMS non-compliant invoice / electronic filing & payment",
    law: "TPA s.86 (as amended by Finance Act 2026, in force 1 July 2026) / LN 64/2024",
    penalty: "Higher of 5% of the tax due, KES 100,000 (companies) or KES 10,000 (individuals). Before 1 July 2026: two times the tax due (Finance Act 2023).",
    interest: "Not applicable",
  },
  {
    type: "eTIMS system integration failure (after written notice, turnover above KES 5m)",
    law: "TPA s.59A(5)",
    penalty: "Not exceeding KES 100,000 for every month or part thereof that the failure continues",
    interest: "Not applicable",
  },
  {
    type: "Special Table — Blocked input VAT claim",
    law: "First Schedule, VAT Act",
    penalty: "Full denial of the input VAT claimed on blocked items (entertainment, passenger vehicles, personal goods). KRA may also audit other periods.",
    interest: "Not applicable — the principal claim is simply denied",
  },
  {
    type: "Withholding VAT agent default",
    law: "Section 44, VAT Act",
    penalty: "5% of the VAT amount not remitted by the agent to KRA",
    interest: "1% per month on unremitted amount",
  },
]

export default function KRAPenaltiesReferencePage() {
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
            {["VAT Penalties", "KRA", "Penalty Table", "eTIMS", "Compliance"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            KRA VAT Penalties Kenya 2026: The Complete Reference Table
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; KRA-registered VAT agents &mdash; Updated July 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Quick Answer / BLUF */}
        <div className="border-l-[3px] border-brand pl-5 mb-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">At a Glance</p>
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            KRA imposes <strong className="text-ink">nine distinct categories</strong> of VAT penalties ranging from{" "}
            <strong className="text-ink">KES 10,000</strong> fixed fines to <strong className="text-ink">KES 100,000 per month</strong> for eTIMS integration failures (TPA s.59A(5)) and up to <strong className="text-ink">KES 100,000</strong> or <strong className="text-ink">5% of the tax due</strong> for e-invoicing failures (TPA s.86). Late filing, late payment, non-registration, evasion, eTIMS non-compliance, blocked input VAT, and withholding agent defaults are all penalised at different rates. Most penalties carry <strong className="text-ink">1% monthly interest</strong> and can be <strong className="text-ink">waived</strong> through a formal application on iTax. This guide lists every penalty, explains how they stack, and shows you how to get help.
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

          {/* Section 1 — Introduction */}
          <section id="introduction" aria-labelledby="introduction-h">
            <h2 id="introduction-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Understanding KRA VAT Penalties
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Kenya&apos;s VAT system is governed by the <strong className="text-ink">VAT Act (Cap. 476)</strong> and administered by the Kenya Revenue Authority (KRA). The law gives KRA broad powers to penalise non-compliance in almost every aspect of VAT — from registration and filing to payment and digital invoicing through <strong className="text-ink">eTIMS</strong> (Electronic Tax Invoice Management System).
              </p>
              <p>
                What makes KRA penalties particularly challenging for businesses is that <strong className="text-ink">multiple penalties can apply to a single failure</strong>. File your VAT return one day late and you may face the late filing penalty (KES 10,000 or 5%), the late payment penalty (5%), and monthly interest (1%) — all on the same overdue obligation. Understanding exactly what each penalty is, when it applies, and how much it costs is the first step to staying compliant and avoiding costly surprises.
              </p>
              <p>
                This reference table covers <strong className="text-ink">nine separate penalty categories</strong> under the VAT Act and the Tax Procedures Act, including the newer eTIMS-specific penalties that KRA has been actively enforcing since 2024. We update this guide regularly to reflect current KRA practice.
              </p>
            </div>
          </section>

          {/* Section 2 — Complete Penalty Table */}
          <section id="penalty-table" aria-labelledby="penalty-table-h">
            <h2 id="penalty-table-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Complete KRA VAT Penalty Table
            </h2>
            <p className="text-[0.9rem] text-ink-soft leading-relaxed mb-6">
              The table below lists every VAT penalty KRA can impose under Kenyan law. Each row shows the penalty amount, the legal provision, and whether additional interest applies.
            </p>
            <div className="border border-hairline rounded-lg overflow-x-auto">
              <table className="w-full text-[0.78rem]">
                <thead>
                  <tr className="border-b border-hairline bg-canvas-alt">
                    <th className="text-left p-3 font-semibold text-ink">Penalty Type</th>
                    <th className="text-left p-3 font-semibold text-ink">Legal Basis</th>
                    <th className="text-left p-3 font-semibold text-ink">Penalty Amount</th>
                    <th className="text-left p-3 font-semibold text-ink">Interest?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hairline">
                  {penaltyRows.map((r) => (
                    <tr key={r.type}>
                      <td className="p-3 text-ink font-medium">{r.type}</td>
                      <td className="p-3 text-ink-muted font-mono text-[0.65rem] whitespace-nowrap">{r.law}</td>
                      <td className="p-3 text-ink-muted leading-relaxed">{r.penalty}</td>
                      <td className="p-3 text-ink-muted text-[0.73rem]">{r.interest}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border border-canvas-warm bg-[#fffbf0] dark:bg-[#2a1f00] dark:border-[#4a3800] rounded-lg p-4 flex items-start gap-3 mt-5">
              <Warning size={17} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold text-[#7a5500] dark:text-[#ffcc44] text-[0.85rem] mb-1">
                  eTIMS penalties are actively enforced
                </p>
                <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                  KRA has been conducting physical and virtual compliance audits specifically targeting eTIMS usage. The e-invoicing penalty (up to KES 100,000 or 5% of the tax due for companies, under TPA s.86) and the up-to-KES 100,000-per-month integration penalty (TPA s.59A(5)) are not theoretical — KRA has issued these assessments to businesses that failed to integrate their point-of-sale or accounting systems within the required timeline. Ensure your system is connected to eTIMS and that every taxable supply generates an eTIMS invoice.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 — How Penalties Accumulate (Worked Example) */}
          <section id="accumulation" aria-labelledby="accumulation-h">
            <h2 id="accumulation-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How Penalties Accumulate — Worked Example
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                One of the most dangerous features of the KRA penalty system is that <strong className="text-ink">penalties can stack</strong> across categories. Here is a realistic example that shows how quickly a single compliance failure can grow into a substantial liability.
              </p>
              <div className="border border-hairline rounded-lg p-5 bg-canvas-alt mt-4">
                <p className="font-display text-[1.05rem] font-semibold text-ink mb-3">Example Scenario: ABC Traders Ltd</p>
                <ul className="space-y-3 text-[0.85rem] text-ink-soft">
                  {[
                    "ABC Traders has a monthly VAT liability of KES 120,000. They miss the 20th April filing deadline and file three months late (in July). They also have not yet registered for eTIMS.",
                    "Late filing penalty: KES 10,000 per month x 3 months = KES 30,000 (higher than 5% of KES 120,000 which would be KES 6,000 per month).",
                    "Late payment penalty: 5% of KES 120,000 = KES 6,000 (one-time charge on the unpaid amount).",
                    "Late payment interest: 1% per month on KES 120,000 = KES 1,200 per month x 3 months = KES 3,600.",
                    "eTIMS invoice non-compliance (a company): TPA s.86 penalty is the higher of 5% of the tax due or KES 100,000 = KES 100,000 per failure (5% of KES 120,000 is only KES 6,000).",
                    "Total penalties and interest (before eTIMS exposure): KES 30,000 + KES 6,000 + KES 3,600 = KES 39,600.",
                    "If a single invoice was issued outside eTIMS, the s.86 penalty for a company is KES 100,000 (higher of 5% of the KES 120,000 tax due or the KES 100,000 corporate floor).",
                    "Total KRA liability after three months with one non-compliant invoice: KES 360,000 VAT + KES 39,600 late-filing/late-payment + KES 100,000 = KES 499,600.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle size={15} weight="fill" className="text-brand shrink-0 mt-1" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p>
                In this example, the core late-filing, late-payment, and interest amounts are
                <strong className="text-ink">KES 39,600</strong> for three months of non-filing. A single
                eTIMS invoice issued outside the system adds a
                TPA s.86 penalty of <strong className="text-ink">KES 100,000</strong> for a company
                (the higher of 5% of the tax due or the KES 100,000 corporate floor). This is why{" "}
                <strong className="text-ink">proactive compliance</strong> and <strong className="text-ink">early resolution</strong>{" "}
                are critical. The moment an eTIMS invoice is missed, the exposure jumps by a fixed
                corporate-floor sum — not a small monthly charge.
              </p>
              <p>
                If ABC Traders had filed on time, paid on time, and issued every invoice through eTIMS, their
                total liability would have been exactly KES 360,000 — the underlying VAT due. Every amount
                above that is preventable.
              </p>
            </div>
          </section>

          {/* Section 4 — Penalty Waiver Process */}
          <section id="waiver" aria-labelledby="waiver-h">
            <h2 id="waiver-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              KRA Penalty Waiver Process
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Under <strong className="text-ink">Section 35 of the Tax Procedures Act</strong>, KRA has the discretion to waive or remit penalties and interest. A waiver cancels the penalty entirely. Remission reduces the penalty amount. The waiver process is handled entirely through the iTax portal.
              </p>
              <h3 className="font-display text-[1.05rem] font-semibold text-ink mt-6 mb-2">Eligible Reasons for a Waiver</h3>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt space-y-2">
                {[
                  "First-time offence — you have not been penalised for the same issue before.",
                  "System error or iTax downtime — KRA systems were unavailable during the filing window.",
                  "Illness or hospitalisation — you or a key finance person was unable to file due to medical reasons.",
                  "Natural disaster — fire, flood, theft, or other unforeseen events that prevented compliance.",
                  "Error by KRA — KRA misapplied a penalty or gave incorrect guidance.",
                  "Genuine mistake — an honest error with no intention to evade tax.",
                  "Death of the taxpayer or the person responsible for tax compliance.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-[0.84rem] text-ink-muted leading-relaxed">
                    <span className="text-brand mt-0.5 shrink-0">&bull;</span>
                    {item}
                  </div>
                ))}
              </div>
              <h3 className="font-display text-[1.05rem] font-semibold text-ink mt-6 mb-2">How to Apply on iTax</h3>
              <div className="space-y-4 mt-2">
                {[
                  {
                    step: 1,
                    title: "Log in to iTax and navigate to 'Penalty and Interest Waiver'",
                    detail: "Click 'Application' on the main menu, then select 'Penalty and Interest Waiver' from the dropdown. This opens the waiver application form.",
                  },
                  {
                    step: 2,
                    title: "Select the penalties you want to waive",
                    detail: "iTax displays a list of all outstanding penalties on your KRA PIN. Tick the checkbox next to each penalty you want to apply for. You can select multiple penalties in a single application.",
                  },
                  {
                    step: 3,
                    title: "Choose your reason code from the dropdown",
                    detail: "Select the reason that best matches your situation. KRA uses the reason code to route your application to the correct approval desk. Choosing the wrong reason code can cause delays or automatic rejection.",
                  },
                  {
                    step: 4,
                    title: "Write your supporting statement",
                    detail: "Explain clearly what happened, why the non-compliance occurred, and what steps you have taken to prevent it from happening again. Be specific with dates, amounts, and circumstances. A well-written statement significantly increases your chances of approval.",
                  },
                  {
                    step: 5,
                    title: "Attach supporting documents",
                    detail: "Upload evidence — hospital discharge summary, police abstract, screenshots of system errors, or a sworn affidavit. Files must be in PDF or JPG format and under 1 MB each. KRA officers review the evidence before making a decision.",
                  },
                  {
                    step: 6,
                    title: "Submit and track your application",
                    detail: "After submission, iTax generates an Application Reference Number. Save this number. Check the status under 'Query' > 'Application Status'. KRA typically responds within 7 to 30 working days. If approved, the penalties are removed from your account.",
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
              <div className="mt-6 border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">First-time waiver tip:</strong> KRA is generally more lenient with first-time applicants. Your first waiver application has a higher chance of approval. However, you cannot apply for a waiver of the same penalty twice — if KRA rejects your application, you must file a formal objection through the normal objection and appeals process.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 — How to Avoid Penalties */}
          <section id="avoid" aria-labelledby="avoid-h">
            <h2 id="avoid-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How to Avoid KRA VAT Penalties
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The best penalty is the one you never incur. Here are practical steps every VAT-registered business in Kenya should take to stay on KRA&apos;s good side and avoid the penalties listed in this guide.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "File your VAT return before the 20th of every month",
                    desc: "Set a recurring calendar reminder for the 15th of each month. File early to account for any iTax downtime or last-minute issues. A nil return takes five minutes and costs nothing — but filing it late costs KES 10,000.",
                  },
                  {
                    title: "Pay your VAT by the 20th — do not wait for filing to trigger payment",
                    desc: "VAT is due on or before the 20th, regardless of when you file. If you file on the 20th but pay on the 21st, the late payment penalty of 5% and 1% interest still applies. Pay early to be safe.",
                  },
                  {
                    title: "Register for eTIMS and integrate your system",
                    desc: "KRA requires all VAT-registered businesses to use eTIMS. Register immediately if you have not done so. Integrate your POS or accounting software so every invoice carries an eTIMS control number. The most expensive eTIMS exposure is the TPA s.86 penalty — the higher of 5% of the tax due, KES 100,000 (companies), or KES 10,000 (individuals).",
                  },
                  {
                    title: "Register for VAT as soon as you exceed KES 5 million turnover",
                    desc: "Monitor your annual turnover. Once it exceeds KES 5 million in any 12-month period, you must register for VAT within 30 days. Late registration attracts a penalty of up to KES 100,000 plus backdated VAT assessments.",
                  },
                  {
                    title: "Do not claim blocked input VAT",
                    desc: "Work with a VAT agent to ensure your input VAT claims are limited to allowable expenses. Claiming VAT on entertainment, passenger vehicles, or personal purchases will result in denied claims and may trigger a KRA audit.",
                  },
                  {
                    title: "Work with a professional VAT agent",
                    desc: "A KRA-registered VAT agent handles filing, payments, eTIMS compliance, and waiver applications on your behalf. The cost of professional representation is far lower than the cost of penalties.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="border border-hairline rounded-lg p-4 flex items-start gap-3">
                    <CheckCircle size={17} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink text-[0.88rem]">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border border-brand/25 bg-brand-muted rounded-lg p-4 flex items-start gap-3 mt-4">
                <Info size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-soft leading-relaxed">
                  <strong className="text-ink">Remember:</strong> KRA penalties are automated. No warning, no reminder, no grace period. The iTax system calculates and applies penalties programmatically the moment a deadline passes. Compliance must be proactive, not reactive.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 — Smart VAT Kenya Services */}
          <section id="services" aria-labelledby="services-h">
            <h2 id="services-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Smart VAT Kenya — Professional Help for KRA Penalties
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Smart VAT Kenya is a team of <strong className="text-ink">KRA-registered VAT agents</strong> based in Nairobi. We help businesses across Kenya navigate VAT compliance, resolve penalties, and stay on the right side of KRA. Our services are designed to be affordable, transparent, and fast.
              </p>
              <div className="border border-hairline rounded-lg overflow-hidden mt-4">
                <table className="w-full text-[0.83rem]">
                  <thead>
                    <tr className="border-b border-hairline bg-canvas-alt">
                      <th className="text-left p-3.5 font-semibold text-ink">Service</th>
                      <th className="text-left p-3.5 font-semibold text-ink">What We Do</th>
                      <th className="text-right p-3.5 font-semibold text-ink">Fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hairline">
                    {[
                      { service: "VAT Registration", what: "KRA PIN application, VAT registration certificate, first filing setup", fee: "KES 5,000" },
                      { service: "Monthly VAT Filing", what: "Prepare and file your VAT return on iTax every month before the 20th", fee: "KES 3,500/month" },
                      { service: "Penalty Waiver Application", what: "Full waiver application — statement drafting, document preparation, submission, and follow-up", fee: "KES 4,000" },
                      { service: "eTIMS Registration", what: "eTIMS registration, system integration support, invoice template setup", fee: "KES 6,000" },
                      { service: "Penalty Assessment Review", what: "Full review of your KRA account, identification of all penalties, and resolution plan", fee: "KES 3,000" },
                    ].map(({ service, what, fee }) => (
                      <tr key={service}>
                        <td className="p-3.5 font-medium text-ink">{service}</td>
                        <td className="p-3.5 text-ink-muted text-[0.78rem]">{what}</td>
                        <td className="p-3.5 text-right font-semibold text-ink text-[0.8rem] whitespace-nowrap">{fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                All fees are payable via M-PESA (paybill details shared after you book). We do not charge retainer fees, monthly commitments, or hidden costs. You only pay when we deliver the service.
              </p>

              {/* Conversion CTA */}
              <div className="mt-8 border border-brand/20 bg-brand-muted rounded-lg p-6">
                <p className="font-display text-[1.15rem] font-semibold text-ink mb-3">Need Help with a KRA VAT Penalty?</p>
                <p className="text-[0.84rem] text-ink-soft leading-relaxed mb-4">
                  If you have outstanding KRA VAT penalties — whether it is late filing, non-registration, eTIMS non-compliance, or any other penalty in this guide — we can help. We review your iTax account, identify every penalty, and handle the waiver application from start to finish. Flat fee of{" "}
                  <strong className="text-ink">KES 4,000</strong> for a full waiver application.
                </p>
                <a
                  href="https://wa.me/254721725958?text=Hi%2C%20I%20need%20help%20with%20KRA%20VAT%20penalties.%20Can%20you%20review%20my%20iTax%20account%20and%20help%20me%20apply%20for%20a%20waiver%3F"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
                >
                  Start Your Waiver Application
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
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-3">More Guides</p>
          <div className="mb-6">
            <p className="text-[0.83rem] text-ink-muted leading-relaxed">
              Looking further ahead?{" "}
              <a href="/resources/cetis-kenya-2027/" className="text-brand underline underline-offset-2 hover:text-brand-hover">CETIS Kenya 2027</a>{" "}
              (KRA&apos;s pre-clearance e-invoicing system, in procurement for 2027&ndash;28) changes the failure mode from "penalty after the fact" to "invoice rejected at the gate" — a different penalty landscape to plan for now.
            </p>
          </div>
          <ArticleGrid currentSlug="kra-vat-penalties-reference" />
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
