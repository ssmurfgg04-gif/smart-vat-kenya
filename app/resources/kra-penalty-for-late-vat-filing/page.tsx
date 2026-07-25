import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"

export const metadata: Metadata = {
  title: "KRA Penalty for Late VAT Filing: How Much is it and How to Apply for a Waiver",
  description:
    "The KRA penalty for late VAT filing is KES 10,000 or 5% of tax due (whichever is higher) plus 1% monthly interest. Learn how to check your penalties on iTax and apply for a KRA penalty waiver.",
  keywords: [
    "kra penalty for late vat filing",
    "kra penalty waiver",
    "kra late vat filing penalty kes 10000",
    "how to check kra penalties on itax",
    "kra penalty waiver application",
    "kra penalty waiver letter sample",
    "kra 5% penalty plus 1% interest",
    "kra penalty waiver how to apply",
    "late vat filing kenya penalty",
    "kra penalty waiver reasons",
    "can kra blacklist you for unpaid penalties",
    "kra penalty waiver status",
    "kra penalty appeal letter",
    "kra penalty waiver for first time",
    "smart vat kenya penalty waiver",
  ],
  alternates: {
    canonical: "https://smartvatkenya.co.ke/resources/kra-penalty-for-late-vat-filing",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources" },
    { "@type": "ListItem", position: 3, name: "KRA Penalty for Late VAT Filing", item: "https://smartvatkenya.co.ke/resources/kra-penalty-for-late-vat-filing" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "KRA Penalty for Late VAT Filing: How Much is it and How to Apply for a Waiver",
  description:
    "Complete guide to KRA late VAT filing penalties — the KES 10,000 or 5% rule, how to check what you owe on iTax, and step-by-step instructions for applying for a KRA penalty waiver.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-01",
  dateModified: "2026-07-25",
  url: "https://smartvatkenya.co.ke/resources/kra-penalty-for-late-vat-filing",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/kra-penalty-for-late-vat-filing",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much is the KRA penalty for late VAT filing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The KRA penalty for late VAT filing is KES 10,000 or 5% of the total tax payable (whichever is higher). Additionally, KRA charges 1% monthly interest on the unpaid tax amount until it is fully paid. A nil return filed late still attracts the KES 10,000 penalty.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a KRA penalty waiver?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can apply for a KRA penalty waiver if you have a valid reason — first-time offence, system error, illness, or natural disaster. The waiver application is submitted through the iTax portal under the Penalty and Interest Waiver menu. KRA typically responds within 7 to 30 working days.",
      },
    },
    {
      "@type": "Question",
      name: "How do I check my KRA penalties on iTax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Log in to itax.kra.go.ke, click 'Returns', then select 'File VAT Return'. Expand the overdue period to view the penalty breakdown. You can also go to 'Penalties and Interest' under the 'Query' menu to see all outstanding penalties across all tax obligations.",
      },
    },
    {
      "@type": "Question",
      name: "Can KRA blacklist you for unpaid VAT penalties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KRA does not publicly blacklist businesses for unpaid VAT penalties. However, KRA can issue an agency notice to your bank to freeze your accounts, deduct the amount owed, and remit it to KRA. This happens without a court order. Unpaid penalties also block you from getting a tax compliance certificate (TCC), which means you cannot bid for government tenders or access certain business licences.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I file a nil VAT return late?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Even a nil VAT return — where you made no sales and owe no tax — attracts the KES 10,000 fixed penalty if filed after the 20th of the month. This is because KRA penalises the late filing itself, not the tax owed. You can apply for a waiver of this penalty if it was a genuine mistake or a first-time offence.",
      },
    },
  ],
}

const toc = [
  { id: "what-is",    label: "What is the KRA Penalty for Late VAT Filing?" },
  { id: "how-check",  label: "How to Check Your KRA Penalties on iTax" },
  { id: "waiver",     label: "How to Apply for a KRA Penalty Waiver (Step-by-Step)" },
  { id: "blacklist",  label: "Can KRA Blacklist You for Unpaid Penalties?" },
  { id: "help",       label: "How We Can Help You Fix Your KRA Penalties" },
  { id: "faq",        label: "Frequently Asked Questions" },
]

export default function KRAPenaltyPage() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Header */}
      <div className="bg-canvas-dark px-6 lg:px-10 py-14">
        <div className="max-w-3xl mx-auto">
          <Link href="/resources" className="inline-flex items-center gap-1.5 text-canvas/50 hover:text-canvas text-sm mb-6 transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> Back to Knowledge Base
          </Link>
          <div className="flex flex-wrap gap-2 mb-5">
            {["VAT Penalties", "KRA", "Penalty Waiver", "iTax"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            KRA Penalty for Late VAT Filing: How Much is it and How to Apply for a Waiver
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; KRA-registered VAT agents &mdash; Updated July 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Quick Answer / BLUF */}
        <div className="border-l-[3px] border-brand pl-5 mb-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Quick Answer</p>
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            The KRA penalty for late VAT filing is a fixed penalty of{" "}
            <strong className="text-ink">KES 10,000</strong> plus{" "}
            <strong className="text-ink">5%</strong> of the total tax payable, plus{" "}
            <strong className="text-ink">1% monthly interest</strong> on the unpaid tax. Filing even one day past the 20th of the month triggers these penalties automatically. You can apply for a{" "}
            <strong className="text-ink">KRA penalty waiver</strong> on iTax if you have a valid reason — and Smart VAT Kenya can help you do it in one day for{" "}
            <strong className="text-ink">KES 4,000</strong>.
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

          {/* Section 1 — What is the KRA Penalty for Late VAT Filing? */}
          <section id="what-is" aria-labelledby="what-is-h">
            <h2 id="what-is-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What is the KRA Penalty for Late VAT Filing? (The 5% + KES 10,000 Rule)
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Under <strong className="text-ink">Section 38 of the Kenya VAT Act (Cap. 476)</strong>, every VAT-registered business must file their monthly VAT return by the <strong className="text-ink">20th day</strong> of the following month. If you miss this deadline — even by one day — KRA applies an automatic penalty that has three parts.
              </p>
              <ul className="space-y-2">
                {[
                  "KES 10,000 fixed penalty — charged for every month you file late, even if you owe no tax.",
                  "5% of the total tax payable for that month — added on top of the fixed penalty.",
                  "1% monthly interest on the unpaid tax amount — compounded every month until you pay in full.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.88rem]">
                    <CheckCircle size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                These three charges are applied <strong className="text-ink">automatically by the iTax system</strong>. KRA does not send a warning or a reminder before they apply. The penalty is triggered the moment your filing deadline passes.
              </p>
              <div className="border border-hairline rounded-lg overflow-hidden">
                <table className="w-full text-[0.83rem]">
                  <thead>
                    <tr className="border-b border-hairline bg-canvas-alt">
                      <th className="text-left p-3.5 font-semibold text-ink">Scenario</th>
                      <th className="text-right p-3.5 font-semibold text-ink">Total Penalty</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hairline">
                    {[
                      { sc: "Filed 1 day late, KES 0 tax owed (nil return)", amt: "KES 10,000" },
                      { sc: "Filed late, KES 50,000 tax owed", amt: "KES 10,000 + 5% (KES 2,500) + 1% monthly interest" },
                      { sc: "Filed late, KES 100,000 tax owed", amt: "KES 10,000 + 5% (KES 5,000) + 1% monthly interest" },
                      { sc: "Not filed for 3 months, KES 50,000/month tax owed", amt: "KES 30,000 + KES 7,500 + interest" },
                    ].map(({ sc, amt }) => (
                      <tr key={sc}>
                        <td className="p-3.5 text-ink-muted">{sc}</td>
                        <td className="p-3.5 text-right font-medium text-ink text-[0.8rem]">{amt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="border border-canvas-warm bg-[#fffbf0] dark:bg-[#2a1f00] dark:border-[#4a3800] rounded-lg p-4 flex items-start gap-3">
                <Warning size={17} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#7a5500] dark:text-[#ffcc44] text-[0.85rem] mb-1">
                    Nil returns are not exempt
                  </p>
                  <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                    Many business owners assume that filing a nil return — when you made no sales in a month — means no penalty if filed late. This is incorrect. The KES 10,000 fixed penalty applies regardless of whether you owe any tax. Always file on time, even if the amount is zero.
                  </p>
                </div>
              </div>
              <p>
                The penalties accumulate quickly. A business that files two months late with KES 100,000 in monthly tax could face over KES 30,000 in penalties and interest by the time they file. This is why it is critical to address late filing penalties as soon as you discover them.
              </p>
            </div>
          </section>

          {/* Section 2 — How to Check Your KRA Penalties on iTax */}
          <section id="how-check" aria-labelledby="how-check-h">
            <h2 id="how-check-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How to Check Your KRA Penalties on iTax
            </h2>
            <p className="text-[0.9rem] text-ink-soft leading-relaxed mb-6">
              You do not need to wait for a KRA letter or email. You can log in to the iTax portal right now and see exactly what penalties have been applied to your account. Here is how.
            </p>
            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: "Log in to itax.kra.go.ke",
                  detail: "Use your KRA PIN and password. If you have forgotten your credentials, click 'Forgot Password' — a reset link will be sent to your registered email address.",
                },
                {
                  step: 2,
                  title: "Go to 'Returns' and select 'File VAT Return'",
                  detail: "On the main dashboard, click the 'Returns' tab. From the dropdown, select 'File VAT Return'. This will show you a table of all VAT periods — past and present.",
                },
                {
                  step: 3,
                  title: "Look for overdue periods highlighted in red",
                  detail: "Any VAT period that is past the 20th of the month will appear in red or with a status of 'Overdue'. Click on that period to expand it and view the penalty breakdown.",
                },
                {
                  step: 4,
                  title: "Check the penalty breakdown",
                  detail: "iTax will display: the fixed penalty (KES 10,000), the 5% late payment penalty, and the 1% monthly interest. It will also show the total amount you need to pay, including the original tax due.",
                },
                {
                  step: 5,
                  title: "Check 'Penalties and Interest' under the Query menu",
                  detail: "For a complete view of all penalties across all your tax obligations (not just VAT), go to the 'Query' menu and select 'Penalties and Interest'. This shows a consolidated list of every penalty KRA has applied to your KRA PIN.",
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
                <strong className="text-ink">Pro tip:</strong> Penalties accumulate every month the return is unfiled. If you are 3 months behind, KRA has applied the KES 10,000 penalty three times — once for each month. The sooner you check, the sooner you can stop the accumulation.
              </p>
            </div>
          </section>

          {/* Section 3 — How to Apply for a KRA Penalty Waiver */}
          <section id="waiver" aria-labelledby="waiver-h">
            <h2 id="waiver-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How to Apply for a KRA Penalty Waiver (Step-by-Step)
            </h2>
            <p className="text-[0.9rem] text-ink-soft leading-relaxed mb-6">
              KRA allows businesses to apply for a waiver or remission of penalties and interest under the <strong className="text-ink">Tax Procedures Act, Section 35</strong>. A waiver means KRA cancels the penalty entirely. Here is how to apply on iTax.
            </p>
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "Log in to iTax and go to 'Penalties and Interest Waiver'",
                  detail: "On the main menu, click 'Application' then select 'Penalty and Interest Waiver'. This opens the waiver application form.",
                },
                {
                  step: 2,
                  title: "Select the penalty you want to waive",
                  detail: "iTax will display a list of your outstanding penalties. Select the specific penalty or penalties you want to apply for a waiver on. You can select multiple penalties in one application.",
                },
                {
                  step: 3,
                  title: "Choose your reason for the waiver",
                  detail: "KRA provides a dropdown of acceptable reasons. The most common options are: first-time offence, system error or downtime, illness or hospitalisation, natural disaster or fire, or error by KRA. Select the one that applies to your situation.",
                },
                {
                  step: 4,
                  title: "Write your explanation (supporting statement)",
                  detail: "This is the most important part. Write a clear, truthful explanation of why you filed late. For example: 'I was hospitalised for two weeks and missed the deadline. I have attached my discharge summary as evidence.' Do not lie — KRA cross-checks waiver applications.",
                },
                {
                  step: 5,
                  title: "Attach supporting documents",
                  detail: "Upload any evidence — hospital letter, police abstract, screenshots of the iTax system error, or a sworn affidavit. Files must be PDF or JPG and under 1MB each. Strong evidence increases your approval chances significantly.",
                },
                {
                  step: 6,
                  title: "Submit and note your Application Reference Number",
                  detail: "Click Submit. iTax will generate an Application Reference Number — save it. KRA will review your application and respond within 7 to 30 working days. You can check the status under 'Query' &gt; 'Application Status'.",
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
            <div className="mt-7 border border-hairline rounded-lg p-4 bg-canvas-alt">
              <p className="font-semibold text-ink text-[0.88rem] mb-1">What makes a strong waiver application?</p>
              <ul className="space-y-1 mt-2">
                {[
                  "Be honest — KRA can verify your claims against hospital, police, and iTax system logs.",
                  "Attach evidence — an application with supporting documents is far more likely to be approved.",
                  "Apply as soon as possible — KRA views timely waiver requests more favourably.",
                  "Do not apply for the same penalty twice — if KRA rejects your application, you must file an objection through the normal objection process.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[0.83rem] text-ink-muted leading-relaxed">
                    <span className="text-brand mt-0.5 shrink-0">&bull;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 4 — Can KRA Blacklist You for Unpaid Penalties? */}
          <section id="blacklist" aria-labelledby="blacklist-h">
            <h2 id="blacklist-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Can KRA Blacklist You for Unpaid Penalties?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                KRA does not maintain a public "blacklist" of businesses with unpaid VAT penalties. However, there are three very real consequences of leaving penalties unpaid that can cripple your business.
              </p>
              <div className="space-y-3">
                {[
                  {
                    icon: Warning,
                    title: "Agency notice to your bank",
                    desc: "KRA can issue an agency notice to your bank under Section 42 of the Tax Procedures Act. This instructs your bank to freeze your business accounts, deduct the amount you owe, and remit it directly to KRA. This happens without a court order and without prior warning.",
                  },
                  {
                    icon: Warning,
                    title: "No Tax Compliance Certificate (TCC)",
                    desc: "Unpaid penalties block you from getting a valid Tax Compliance Certificate. Without a TCC, you cannot bid for government tenders, access certain county business permits, or clear goods through customs. Many private companies also require a valid TCC before signing contracts.",
                  },
                  {
                    icon: Warning,
                    title: "Escalation to KRA enforcement",
                    desc: "If penalties remain unpaid for more than 30 days, KRA escalates your case to the enforcement desk. This can lead to auctioning of business assets, garnishment of debts owed to you, and restrictions on your ability to import or export goods.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="border border-hairline rounded-lg p-4 flex items-start gap-3">
                    <Icon size={17} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink text-[0.88rem]">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p>
                The good news is that KRA is generally open to penalty waivers and payment plans. If you engage with KRA proactively — rather than ignoring the penalties — you can often resolve the issue before it escalates to enforcement. This is where working with experienced VAT agents makes a significant difference.
              </p>
              <div className="border border-brand/25 bg-brand-muted rounded-lg p-4 flex items-start gap-3">
                <Info size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-soft leading-relaxed">
                  <strong className="text-ink">Important:</strong> If you have already received an agency notice, the matter is urgent. KRA can freeze your accounts within days. Contact us immediately on WhatsApp and we will help you respond to KRA and negotiate a resolution.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 — How We Can Help You Fix Your KRA Penalties */}
          <section id="help" aria-labelledby="help-h">
            <h2 id="help-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How We Can Help You Fix Your KRA Penalties
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Navigating the KRA penalty waiver process on your own can be confusing and time-consuming. The iTax portal is not intuitive, KRA rejection rates for self-filed waivers are high, and any mistake in your application means starting over from scratch.
              </p>
              <p>
                <strong className="text-ink">Smart VAT Kenya</strong> is a team of KRA-registered VAT agents who handle penalty waivers every day. We know exactly what KRA looks for in a waiver application and how to frame your reason for the best chance of approval.
              </p>
              <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                <p className="font-semibold text-ink text-[0.9rem] mb-3">What we do for you:</p>
                <ul className="space-y-2">
                  {[
                    "Review your KRA account to identify all outstanding penalties across all periods.",
                    "Draft a professional waiver application with the correct reason code and supporting statement.",
                    "Prepare and upload all supporting documents in the format KRA requires.",
                    "Submit the waiver application on iTax from our agent portal and track it to completion.",
                    "Follow up with KRA on your behalf until a decision is made.",
                    "If the waiver is approved, we help you settle the remaining tax without penalties.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[0.85rem] text-ink-soft">
                      <CheckCircle size={15} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p>
                Our fee is a flat <strong className="text-ink">KES 4,000</strong> — payable via M-PESA Paybill <strong className="text-ink">572572</strong>. There are no hidden charges, no monthly retainers, and no surprise fees. You pay only if we take on your case.
              </p>

              {/* Conversion CTA */}
              <div className="mt-8 border border-brand/20 bg-brand-muted rounded-lg p-6">
                <p className="font-display text-[1.15rem] font-semibold text-ink mb-3">Skip the iTax Stress</p>
                <p className="text-[0.84rem] text-ink-soft leading-relaxed mb-4">
                  Do not spend hours trying to figure out the iTax waiver system on your own. We handle the entire process — from checking your penalties to submitting the waiver application and following up with KRA. Flat fee of{" "}
                  <strong className="text-ink">KES 4,000</strong> payable via M-PESA.
                </p>
                <a
                  href="https://wa.me/254721725958?text=Hi%2C%20I%20need%20help%20with%20a%20KRA%20Penalty%20Waiver"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
                >
                  Apply for Waiver — KES 4,000
                  <ArrowRight size={14} weight="bold" aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" aria-labelledby="faq-h">
            <h2 id="faq-h" className="font-display text-[1.4rem] font-semibold text-ink mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
            <dl className="divide-y divide-hairline">
              {faqSchema.mainEntity.map((q) => (
                <div key={q.name} className="py-5 first:pt-0">
                  <dt className="font-display text-[0.95rem] font-semibold text-ink mb-2">{q.name}</dt>
                  <dd className="text-[0.85rem] text-ink-muted leading-relaxed">{q.acceptedAnswer.text}</dd>
                </div>
              ))}
            </dl>
          </section>
        </article>

        {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="kra-penalty-for-late-vat-filing" />
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
            <Link href="/resources" className="text-[0.82rem] text-ink-muted hover:text-brand transition-colors underline underline-offset-2">
              ← All Resources
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
