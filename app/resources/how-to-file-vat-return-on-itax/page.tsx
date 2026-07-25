import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"

export const metadata: Metadata = {
  title: "How to File VAT Return on iTax Kenya – Step-by-Step Guide 2026",
  description:
    "File your VAT return on KRA iTax by the 20th of every month. Step-by-step guide for nil returns and normal returns, plus what to do when the iTax portal crashes. Pay VAT via M-PESA Paybill 572572.",
  keywords: [
    "how to file vat return on itax",
    "vat return filing kenya",
    "how to file nil vat return on itax",
    "kra itax vat return steps",
    "vat filing deadline kenya 20th",
    "pay vat via mpesa paybill 572572",
    "itax portal crash workaround",
    "kra vat return system error fix",
    "how to file vat online kenya",
    "vat return guide kenya 2026",
    "monthly vat return kenya",
    "kra itax not working today",
    "nil vat return itax kenya",
  ],
  alternates: {
    canonical: "https://smartvatkenya.co.ke/resources/how-to-file-vat-return-on-itax",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources" },
    { "@type": "ListItem", position: 3, name: "How to File VAT Return on iTax", item: "https://smartvatkenya.co.ke/resources/how-to-file-vat-return-on-itax" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to File Your VAT Return on KRA iTax (And What to Do When the Portal is Down)",
  description:
    "Step-by-step guide to filing your VAT return on KRA iTax in Kenya. Covers nil returns, normal returns, portal crashes, and M-PESA payment. Deadline is the 20th of every month.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-01",
  dateModified: "2026-07-24",
  url: "https://smartvatkenya.co.ke/resources/how-to-file-vat-return-on-itax",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/how-to-file-vat-return-on-itax",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the penalty for filing a nil VAT return late on iTax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Filing a nil VAT return after the 20th of the month still attracts a KES 10,000 late filing penalty. Even if you owe no tax, KRA penalises the late submission itself. You can apply for a penalty waiver through the iTax portal by submitting a waiver request explaining the reason for the delay.",
      },
    },
    {
      "@type": "Question",
      name: "Can I file my VAT return on iTax using my phone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can access itax.kra.go.ke from a mobile browser, but the portal is not fully optimised for small screens. Many users report issues with dropdown menus and the submit button on phones. Use a desktop or laptop browser — preferably Google Chrome — for a reliable filing experience.",
      },
    },
    {
      "@type": "Question",
      name: "How do I correct a mistake on a VAT return already submitted on iTax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You cannot edit a submitted VAT return on iTax. You must file an amended return for the same period. Go to Returns → VAT Returns → Select the period → Amended Return. Enter the correct figures. KRA will replace your original return with the amended version. Do this before the deadline if possible to avoid penalties on the corrected amount.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a nil return and a normal return on iTax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A nil return means you had zero sales and zero purchases in that month — you declare no VAT payable and no VAT recoverable. A normal return means you had sales, purchases, or both. In a normal return, you enter your total taxable sales (output VAT) and total purchases with VAT (input VAT). The difference is what you pay or claim as a refund.",
      },
    },
    {
      "@type": "Question",
      name: "How long does KRA take to process a VAT refund after filing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KRA aims to process VAT refund applications within 30 to 60 days from the date of filing. In practice, refunds often take longer due to manual verification. Ensure your eTIMS invoices are compliant and your bank details on iTax are up to date — incorrect bank details are the most common reason for refund delays.",
      },
    },
  ],
}

const toc = [
  { id: "deadline",    label: "When is the VAT Filing Deadline in Kenya?" },
  { id: "nil-return",  label: "How to File a Nil VAT Return on iTax" },
  { id: "normal-return", label: "How to File a Normal VAT Return" },
  { id: "portal-down", label: "What to Do When iTax Crashes or Shows 'System Error'" },
  { id: "payment",     label: "How to Pay Your VAT via M-PESA Paybill" },
  { id: "faq",         label: "Frequently Asked Questions" },
]

export default function VatReturnFilingPage() {
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
            {["VAT Filing", "iTax", "M-PESA", "2026"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            How to File Your VAT Return on KRA iTax (And What to Do When the Portal is Down)
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; KRA-registered VAT agents &mdash; Updated July 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* BLUF / Quick Answer */}
        <div className="border-l-[3px] border-brand pl-5 mb-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Quick Answer</p>
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            Every VAT-registered business in Kenya must file a VAT return on{" "}
            <strong className="text-ink">KRA iTax</strong> by the <strong className="text-ink">20th of every month</strong> — even if you made no sales. A nil return takes 5 minutes. A normal return requires your total sales and purchases for the month. Pay any VAT due via{" "}
            <strong className="text-ink">M-PESA Paybill 572572</strong>. The iTax portal crashes often — keep this guide bookmarked for when it does.
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

          {/* Section 1 — Deadline */}
          <section id="deadline" aria-labelledby="deadline-h">
            <h2 id="deadline-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              When is the VAT Filing Deadline in Kenya? (The 20th of the Month)
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Your VAT return for any given month is due on or before the <strong className="text-ink">20th day of the following month</strong>. For example, your January VAT return must be filed by 20 February. This deadline applies whether you owe VAT or not.
              </p>
              <div className="border border-brand/20 bg-brand-muted rounded-lg p-4 flex items-start gap-3">
                <Warning size={17} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink text-[0.85rem] mb-1">Every Single Month</p>
                  <p className="text-[0.83rem] text-ink-soft leading-relaxed">
                    There are 12 filing deadlines per year — one per month. There is no quarterly filing option for standard VAT in Kenya. If you miss even one deadline, KRA imposes a <strong className="text-ink">KES 10,000 penalty</strong> plus 5% of the tax due plus 1% interest per month. See our{" "}
                    <Link href="/resources/kra-penalty-for-late-vat-filing" className="text-brand underline underline-offset-2 hover:text-brand-hover">KRA penalty guide</Link> for details.
                  </p>
                </div>
              </div>
              <div className="border border-hairline rounded-lg overflow-hidden">
                <table className="w-full text-[0.83rem]">
                  <thead>
                    <tr className="border-b border-hairline bg-canvas-alt">
                      <th className="text-left p-3.5 font-semibold text-ink">For Month</th>
                      <th className="text-right p-3.5 font-semibold text-ink">File By</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hairline">
                    {[
                      { month: "January", due: "20 February" },
                      { month: "February", due: "20 March" },
                      { month: "March", due: "20 April" },
                      { month: "April", due: "20 May" },
                      { month: "May", due: "20 June" },
                      { month: "June", due: "20 July" },
                      { month: "July", due: "20 August" },
                      { month: "August", due: "20 September" },
                      { month: "September", due: "20 October" },
                      { month: "October", due: "20 November" },
                      { month: "November", due: "20 December" },
                      { month: "December", due: "20 January (next year)" },
                    ].map(({ month, due }) => (
                      <tr key={month}>
                        <td className="p-3.5 text-ink-muted">{month}</td>
                        <td className="p-3.5 text-right font-medium text-ink">{due}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ELI5 box */}
          <section className="border border-hairline rounded-lg p-5 bg-canvas-alt mb-12">
            <p className="font-display text-[0.9rem] font-semibold text-ink mb-2">
              Explain Like I&apos;m 5: What Happens if I Do Not File a Nil Return?
            </p>
            <div className="text-[0.85rem] text-ink-muted leading-relaxed space-y-2">
              <p>
                Imagine your phone bill. Even if you made zero calls this month, Safaricom
                still expects you to pay your line rental. KRA is the same — filing is the
                &ldquo;line rental&rdquo; of being a VAT-registered business. You report every
                month, even if you had nothing to report.
              </p>
              <p>
                A <strong className="text-ink">nil return</strong> is just you telling KRA
                &ldquo;I&apos;m still here, made nothing this month.&rdquo; If you skip it,
                KRA fines you KES 10,000. That is the same penalty as if you made KES 1 million
                in sales and did not file. KRA does not care <em>how much</em> you owed — they
                care that you showed up.
              </p>
              <p>
                If you have missed months of nil returns, do not panic. KRA has a{" "}
                <strong className="text-ink">tax amnesty programme</strong> (Voluntary
                Tax Disclosure) that lets you catch up without penalties. See our{" "}
                <Link href="/resources/nil-returns-tax-amnesty" className="text-brand underline">
                  nil returns and tax amnesty guide
                </Link>{" "}
                for details.
              </p>
            </div>
          </section>

          {/* Section 2 — Nil Return */}
          <section id="nil-return" aria-labelledby="nil-h">
            <h2 id="nil-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Step-by-Step: How to File a Nil VAT Return on iTax
            </h2>
            <p className="text-[0.9rem] text-ink-soft leading-relaxed mb-6">
              A nil return means you had <strong className="text-ink">zero sales and zero purchases</strong> in the month. You are declaring that no VAT is payable and no VAT is recoverable. Filing a nil return takes about <strong className="text-ink">5 minutes</strong>.
            </p>
            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: "Go to itax.kra.go.ke and log in",
                  detail: "Enter your KRA PIN and password. If you get a 'System Error' on the login page, see the portal crash section below — there is a working workaround.",
                },
                {
                  step: 2,
                  title: "Navigate to Returns → VAT Returns",
                  detail: "On the dashboard, click 'Returns' in the top menu, then select 'VAT Returns' from the dropdown. You will see a list of filing periods that are due or overdue.",
                },
                {
                  step: 3,
                  title: "Select the filing period",
                  detail: "Choose the tax period (month and year) you are filing for. iTax will display a 'VAT Return' form with multiple sections. Most fields will show zero by default.",
                },
                {
                  step: 4,
                  title: "Enter zeros in all amount fields",
                  detail: 'Confirm every field reads "0.00". This includes Box 1 (Taxable Sales), Box 2 (Zero-Rated Sales), Box 3 (Exempt Sales), Box 7 (Input VAT), and Box 14 (VAT Payable). If iTax pre-fills any value you disagree with, correct it before submitting.',
                },
                {
                  step: 5,
                  title: "Check the declaration box and submit",
                  detail: 'Tick the declaration checkbox confirming the information is correct. Click "Submit". iTax will display a confirmation receipt with a submission ID — save or screenshot it as proof of filing.',
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
                <strong className="text-ink">Pro tip:</strong> File your nil return early in the month — before the 10th. The iTax portal is fastest early in the month and slows down significantly after the 15th as the deadline approaches. Weekend filing is often the smoothest.
              </p>
            </div>
          </section>

          {/* Section 3 — Normal Return */}
          <section id="normal-return" aria-labelledby="normal-h">
            <h2 id="normal-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How to File a Normal VAT Return (With Sales and Purchases)
            </h2>
            <p className="text-[0.9rem] text-ink-soft leading-relaxed mb-6">
              If you made sales or had purchases with VAT in a given month, you need to file a <strong className="text-ink">normal VAT return</strong>. The return calculates what you owe KRA — or what KRA owes you — based on the difference between your output VAT and input VAT.
            </p>
            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: "Log in and open the VAT return form",
                  detail: "Follow steps 1–3 from the nil return section above. Select the correct filing period. When the form opens, you will see multiple numbered boxes.",
                },
                {
                  step: 2,
                  title: "Enter your total sales (Output VAT)",
                  detail: 'In Box 1, enter your total taxable sales for the month (16% standard-rated). In Box 2, enter zero-rated sales. In Box 3, enter exempt sales. The form will automatically calculate the VAT due on Box 1 sales at 16/116.',
                },
                {
                  step: 3,
                  title: "Enter your total purchases (Input VAT)",
                  detail: 'In Box 7, enter the total VAT you paid on purchases from other VAT-registered suppliers. Only include purchases backed by valid eTIMS-compliant tax invoices — KRA rejects input VAT claims without eTIMS invoices.',
                },
                {
                  step: 4,
                  title: "Review the calculated VAT payable or refundable",
                  detail: "iTax subtracts your input VAT (Box 7) from your output VAT (Box 1 calculation). If output exceeds input, Box 14 shows the amount you must pay. If input exceeds output, the system generates a VAT refund claim.",
                },
                {
                  step: 5,
                  title: "Submit and save your confirmation receipt",
                  detail: "Double-check every figure. Submit the return. Screenshot or download the acknowledgement receipt — it is your proof of filing if KRA later claims you did not file.",
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
            <div className="mt-7 border border-brand/20 bg-brand-muted rounded-lg p-5">
              <p className="font-semibold text-ink text-[0.88rem] mb-2">Common Mistake to Avoid</p>
              <p className="text-[0.84rem] text-ink-soft leading-relaxed">
                Many business owners accidentally enter their <strong className="text-ink">total invoice amounts</strong> (including VAT) instead of the <strong className="text-ink">VAT amount only</strong> in Box 7. If a supplier charged you KES 11,600 including 16% VAT, the VAT portion is KES 1,600 — that is the figure that goes in Box 7, not KES 11,600. Entering the full amount will overstate your input VAT and trigger a KRA audit.
              </p>
            </div>
          </section>

          {/* Section 4 — Portal Down */}
          <section id="portal-down" aria-labelledby="portal-h">
            <h2 id="portal-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What to Do When the KRA iTax Portal Crashes or Shows &ldquo;System Error&rdquo;
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                If you have used iTax before, you know the feeling: it is the 19th, your deadline is tomorrow, and the portal returns a white screen, a spinning wheel, or the dreaded <strong className="text-ink">"System Error. Contact Support."</strong> message. This is frustratingly common — especially between the 15th and 20th of each month when traffic spikes.
              </p>
              <p>
                Here is what to try, in order, when iTax is not working:
              </p>
              <ul className="space-y-3">
                {[
                  { title: "Switch browsers", detail: "iTax works best on Google Chrome. If you are on Safari, Edge, or Firefox, switch to Chrome. Clear your browser cache and cookies before reloading." },
                  { title: "Use incognito or private mode", detail: "Open a Chrome Incognito window. This bypasses cached scripts that often cause the system error. It fixes the issue about 60% of the time." },
                  { title: "Try at off-peak hours", detail: "iTax is most stable between 10 PM and 6 AM and on weekends. If your deadline allows, file late at night when fewer users are on the portal." },
                  { title: "Use the mobile version", detail: "If desktop is crashing, try accessing itax.kra.go.ke from your phone browser. The mobile experience is poor but sometimes loads when desktop does not." },
                  { title: "Call KRA support", detail: "Call 0711 099 000 or email support@kra.go.ke. Keep your KRA PIN ready. Note that wait times spike near the deadline — the earlier in the month you call, the faster you get through." },
                ].map(({ title, detail }) => (
                  <li key={title} className="flex items-start gap-3">
                    <CheckCircle size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="text-[0.88rem] text-ink-soft">
                      <strong className="text-ink">{title}:</strong> {detail}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="border border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-[#1a0f00] rounded-lg p-4 flex items-start gap-3 mt-4">
                <Warning size={17} weight="fill" className="text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-orange-800 dark:text-orange-300 text-[0.85rem] mb-1">
                    Portal Crash Is Not an Excuse
                  </p>
                  <p className="text-[0.83rem] text-orange-700 dark:text-orange-400 leading-relaxed">
                    KRA does <strong>not</strong> automatically waive late penalties because the portal was down. You can apply for a penalty waiver and cite the system downtime as the reason, but there is no guarantee it will be accepted. The safest strategy: file before the 15th every month, well before the rush.
                  </p>
                </div>
              </div>
            </div>

            {/* Conversion section — Skip the Portal Stress */}
            <div className="mt-10 border border-brand/25 bg-brand-muted rounded-xl p-6 md:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-5">
                <div className="shrink-0 bg-brand/10 rounded-full p-3">
                  <Warning size={24} weight="fill" className="text-brand" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-display text-[1.15rem] font-semibold text-ink mb-2">Skip the Portal Stress</p>
                  <p className="text-[0.88rem] text-ink-soft leading-relaxed mb-4">
                    You should not have to fight a broken portal at 11 PM on the 19th. Smart VAT Kenya files your VAT return for you every month — including nil returns and normal returns. We handle the deadline, the iTax navigation, and any KRA queries. You focus on running your business.
                  </p>
                  <ul className="space-y-2 mb-5">
                    {[
                      "Monthly VAT filing — nil or normal return",
                      "Deadline tracking and reminders",
                      "KRA query response handling",
                      "eTIMS invoice compliance support",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[0.84rem] text-ink-soft">
                        <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-display text-[1.8rem] font-bold text-ink">KES 3,500</span>
                    <span className="text-[0.8rem] text-ink-muted">/ month</span>
                  </div>
                  <a
                    href="https://wa.me/254721725958?text=I%20want%20monthly%20VAT%20filing%20at%20KES%203500%20per%20month"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-6 py-3 rounded-md hover:bg-brand-hover transition-colors"
                  >
                    Start Monthly Filing — WhatsApp Us
                    <ArrowRight size={14} weight="bold" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 — Payment via M-PESA */}
          <section id="payment" aria-labelledby="payment-h">
            <h2 id="payment-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How to Pay Your VAT via M-PESA Paybill
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Once your VAT return is filed, if the return shows a balance payable, you must pay the amount before the <strong className="text-ink">20th</strong>. KRA accepts payment through <strong className="text-ink">M-PESA Paybill 572572</strong> — the same paybill used for all KRA taxes.
              </p>
              <p className="font-semibold text-ink text-[0.92rem]">Follow these steps:</p>
              <ol className="space-y-3">
                {[
                  { step: 1, detail: "Go to M-PESA menu on your phone. Select Lipa na M-PESA → Paybill." },
                  { step: 2, detail: "Enter Business Number: <strong className='text-ink'>572572</strong>." },
                  { step: 3, detail: "In Account Number, enter your <strong className='text-ink'>KRA PIN</strong> followed by the payment type. Example: P051234567XVAT — where P051234567X is your PIN and VAT is the tax type." },
                  { step: 4, detail: "Enter the exact amount shown as payable on your VAT return." },
                  { step: 5, detail: "Enter your M-PESA PIN and confirm. Save the M-PESA confirmation message — it is your proof of payment." },
                ].map(({ step, detail }) => (
                  <li key={step} className="flex items-start gap-3 text-[0.88rem] text-ink-soft">
                    <span className="bg-ink text-canvas rounded-full w-6 h-6 flex items-center justify-center text-[0.65rem] font-bold shrink-0 mt-0.5 tabular-nums">{step}</span>
                    <span dangerouslySetInnerHTML={{ __html: detail }} />
                  </li>
                ))}
              </ol>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                    <strong className="text-ink">Payment must clear before the 20th.</strong> M-PESA payments are instant, but KRA systems may take up to 24 hours to reflect the payment in your iTax ledger. Pay at least one day before the deadline to avoid a late payment penalty of <strong className="text-ink">5% per month</strong> on the unpaid amount.
                  </p>
                </div>
              </div>
              <p className="text-[0.9rem] text-ink-soft leading-relaxed pt-2">
                You can also pay via bank transfer to a KRA revenue collection account at any commercial bank in Kenya. Use the same account number format: <strong className="text-ink">YourKRA PIN + VAT</strong>. Bank payments can take 1–2 working days to reflect, so plan accordingly.
              </p>
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

        {/* Footer navigation */}
        <div className="mt-14 pt-8 border-t border-hairline flex items-center justify-between flex-wrap gap-4">
          <Link href="/resources" className="inline-flex items-center gap-2 text-ink-muted hover:text-ink text-sm font-medium transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> All Guides
          </Link>
          <a
            href="https://wa.me/254721725958?text=I%20read%20your%20VAT%20filing%20guide%20and%20I%20need%20help%20with%20monthly%20filing."
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            Monthly Filing — KES 3,500
            <ArrowRight size={14} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </div>
    </>
  )
}