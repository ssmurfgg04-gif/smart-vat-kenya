import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"
import { ArticleGrid } from "@/lib/resources"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources" },
    { "@type": "ListItem", position: 3, name: "Nil Returns and Tax Amnesty", item: "https://smartvatkenya.co.ke/resources/nil-returns-tax-amnesty" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to File Nil Returns on KRA iTax Kenya 2026 — Plus the Tax Amnesty Programme Explained",
  description:
    "Complete guide to filing nil VAT returns on KRA iTax and understanding the KRA tax amnesty / voluntary disclosure programme. File in 5 minutes, avoid KES 10,000 penalties, and learn how penalty waivers work.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-25",
  dateModified: "2026-07-25",
  url: "https://smartvatkenya.co.ke/resources/nil-returns-tax-amnesty",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/nil-returns-tax-amnesty",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a nil return in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A nil return is a VAT return you file when your business had zero sales and zero purchases in a given month. You are declaring to KRA that no VAT is payable and no VAT is recoverable for that period. It is NOT the same as skipping the month — you must still log into iTax and submit it.",
      },
    },
    {
      "@type": "Question",
      name: "What is the penalty for not filing a nil return on iTax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Failing to file a nil VAT return by the 20th of the month attracts a KES 10,000 late filing penalty — the same penalty as a normal return. Even if you owe zero tax, KRA penalises the late submission itself. You can apply for a waiver if it was a genuine mistake.",
      },
    },
    {
      "@type": "Question",
      name: "What is the KRA tax amnesty programme in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The KRA tax amnesty programme (also called the Voluntary Tax Disclosure Programme or VTDP) allows taxpayers to voluntarily disclose unpaid taxes. In exchange, KRA waives all penalties and interest — you only pay the principal tax. The amnesty applies to VAT, income tax, PAYE, and other taxes. You apply through iTax under the voluntary disclosure menu.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a penalty waiver for late nil returns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Under Section 35 of the Tax Procedures Act, KRA may waive late-filing penalties even for nil returns if you have a valid reason: first-time offence, genuine mistake, iTax system error, illness, or natural disaster. Submit the waiver through iTax under Penalty and Interest Waiver. Smart VAT Kenya handles penalty waiver applications for KES 4,000.",
      },
    },
    {
      "@type": "Question",
      name: "How do I file a nil return on KRA iTax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Log into itax.kra.go.ke, go to Returns → VAT Returns, select the filing period, enter KES 0.00 in all amount fields, tick the declaration, and click Submit. It takes about 5 minutes. Save the confirmation receipt as proof.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to file nil returns if I made no sales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every registered VAT taxpayer must file a return every month — including months with zero activity. KRA does not auto-file nil returns for you. Skipping a month accumulates KES 10,000 penalties per month even if you owe no tax.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between nil return and tax amnesty?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A nil return is a monthly filing declaring zero activity. Tax amnesty is a programme that waives penalties and interest on previously unpaid taxes. You use nil returns to stay compliant going forward. You use the tax amnesty to clean up past non-compliance without paying penalties.",
      },
    },
    {
      "@type": "Question",
      name: "Is nil return only for VAT or other taxes too?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nil returns apply to VAT (monthly), income tax (annual), and turnover tax (monthly). This guide focuses on VAT nil returns, which are the most common because VAT is filed every month. Income tax nil returns are filed once per year.",
      },
    },
  ],
}

const WA_BASE = "https://wa.me/254721725958?text="
const wa = (t: string) => `${WA_BASE}${encodeURIComponent(t)}`

export default function NilReturnsTaxAmnestyPage() {
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
            Guide &middot; 8 min read
          </p>
          <h1 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-semibold tracking-tight text-ink leading-tight mb-4 text-balance">
            How to File Nil Returns on KRA iTax (2026) — and Take Advantage of the Tax Amnesty Programme
          </h1>
          <p className="text-[0.92rem] text-ink-muted leading-relaxed max-w-[58ch]">
            Nil returns are the most misunderstood part of Kenya VAT compliance. File them wrong
            and you pay KES 10,000 per month. File them right and KRA never bothers you.
            This guide covers both the how and the what-if-you-already-missed-the-deadline.
            </p>
            <div className="flex items-center gap-4 text-[0.75rem] text-ink-muted">
              <time dateTime="2026-07-25">25 July 2026</time>
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
              Think of KRA like your school attendance register. Every month, the teacher
              calls your name. If you were in class, you say &ldquo;present&rdquo; and
              show your homework (a normal return with sales and VAT). If you were absent
              but had a valid reason, you still say &ldquo;present&rdquo; but your
              homework is empty (a nil return).
            </p>
            <p>
              What you <strong className="text-ink">cannot</strong> do is stay silent.
              Skipping the register call — even with nothing to report — gets you a
              detention (KES 10,000 penalty). The teacher does not care that you had
              nothing to say. You still have to show up.
            </p>
            <p className="font-medium text-ink">
              Bottom line: A nil return = &ldquo;I showed up, had nothing to report.&rdquo;
              No return at all = &ldquo;I skipped the register call.&rdquo;
            </p>
          </div>
        </section>

        {/* Section 1 — What is a nil return */}
        <section className="mb-16" aria-labelledby="what-is-nil-h">
          <h2 id="what-is-nil-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
            What is a Nil Return in Kenya?
          </h2>
          <div className="text-[0.9rem] text-ink-muted leading-relaxed space-y-4">
            <p>
              A <strong className="text-ink">nil return</strong> is a tax return that declares
              zero activity for a filing period. For VAT, this means:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>You made KES 0 in taxable sales</li>
              <li>You made KES 0 in zero-rated sales</li>
              <li>You made KES 0 in exempt sales</li>
              <li>You incurred KES 0 in purchases with VAT</li>
              <li>KES 0 VAT is payable to KRA</li>
              <li>KES 0 VAT is recoverable from KRA</li>
            </ul>
            <p>
              Every single field on the iTax VAT return reads <strong className="text-ink">0.00</strong>.
              You are telling KRA: <em>&ldquo;I am still in business, I have nothing to report this month,
              I am filing because the law requires it.&rdquo;</em>
            </p>
            <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
              <Warning size={16} weight="fill" className="text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-[0.83rem] leading-relaxed">
                <strong className="text-ink">Many business owners assume</strong> that if they
                made no sales, they do not need to file. This is the most expensive mistake in
                Kenya VAT compliance. KRA charges KES 10,000 per month for every late or missing
                return — even nil returns.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 — Why bother */}
        <section className="mb-16" aria-labelledby="why-bother-h">
          <h2 id="why-bother-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
            Why File a Nil Return? (&ldquo;I Had Zero Sales This Month&rdquo;)
          </h2>
          <div className="text-[0.9rem] text-ink-muted leading-relaxed space-y-4">
            <p>Here is what happens if you skip filing a nil return:</p>
            <div className="border border-hairline rounded-lg overflow-hidden">
              <table className="w-full text-[0.85rem]">
                <thead>
                  <tr className="bg-canvas-alt border-b border-hairline">
                    <th className="text-left p-3 font-semibold text-ink">Scenario</th>
                    <th className="text-left p-3 font-semibold text-ink">Penalty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hairline">
                  <tr>
                    <td className="p-3 text-ink-muted">Filed nil return on time</td>
                    <td className="p-3 text-ink font-semibold">KES 0</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-ink-muted">Filed 1 day late (nil return)</td>
                    <td className="p-3 text-ink font-semibold">KES 10,000</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-ink-muted">Skipped the month entirely (nil activity)</td>
                    <td className="p-3 text-ink font-semibold">KES 10,000 + penalty accumulates every month</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-ink-muted">Skipped 3 months of nil returns</td>
                    <td className="p-3 text-ink font-semibold">KES 30,000 + possible KRA compliance check</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              Filing a nil return takes <strong className="text-ink">5 minutes</strong>. Not filing
              costs <strong className="text-ink">KES 10,000</strong>. That works out to
              KES 2,000 per minute of your time. Show up for the register call.
            </p>
          </div>
        </section>

        {/* Section 3 — Step by step nil return */}
        <section className="mb-16" aria-labelledby="how-to-nil-h">
          <h2 id="how-to-nil-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
            How to File a Nil VAT Return on iTax (5 Minutes)
          </h2>
          <p className="text-[0.9rem] text-ink-muted leading-relaxed mb-6">
            Follow these exact steps. The iTax portal may look confusing but the nil return
            path is straightforward once you know where to click.
          </p>
          <div className="space-y-4">
            {[
              {
                step: 1,
                title: "Go to itax.kra.go.ke and log in",
                detail: 'Enter your KRA PIN and password. If the login page shows "System Error" or hangs, use a different browser (Chrome works best) or try Incognito Mode. The portal is notoriously unreliable — see our <a href="/resources/itax-portal-not-working/" className="text-brand underline">iTax portal troubleshooting guide</a> if you get stuck.',
              },
              {
                step: 2,
                title: "Click Returns in the top menu, then VAT Returns",
                detail: "The dashboard shows a horizontal menu bar. Click 'Returns' then select 'VAT Returns' from the dropdown. You will see a list of filing periods marked 'Due' or 'Overdue'.",
              },
              {
                step: 3,
                title: "Select the filing period (month and year)",
                detail: "Click the month you are filing for. iTax opens a VAT return form with numbered boxes. Most fields will show KES 0.00 by default.",
              },
              {
                step: 4,
                title: "Confirm every field reads KES 0.00",
                detail: 'Go through each box: Box 1 (Taxable Sales at 16%), Box 2 (Zero-Rated Sales), Box 3 (Exempt Sales), Box 4–6 (other sales categories), Box 7 (Input VAT), Box 14 (VAT Payable). If iTax pre-fills numbers you disagree with, correct them to 0.00.',
              },
              {
                step: 5,
                title: "Tick the declaration box and click Submit",
                detail: 'Find the small checkbox that says "I confirm the information is true and correct." Tick it. Click "Submit." iTax displays a confirmation receipt with a submission ID — screenshot this or save the PDF. That is your proof of filing.',
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
              <strong className="text-ink">Pro tip:</strong> File nil returns before the 10th of
              every month. iTax is fastest early in the month. After the 15th, the portal slows
              down as millions of Kenyans race to meet the 20th deadline. Weekend filing is
              especially smooth — itax.kra.go.ke works on Saturdays and Sundays.
            </p>
          </div>
        </section>

        {/* Section 4 — income tax nil returns (students, unemployed) */}
        <section className="mb-16" aria-labelledby="income-nil-h">
          <h2 id="income-nil-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
            Income Tax Nil Returns: Students, the Unemployed &amp; Dormant PINs
          </h2>
          <div className="text-[0.9rem] text-ink-muted leading-relaxed space-y-4">
            <p>
              Most Kenyans searching "how to file nil returns" are <strong className="text-ink">individuals</strong> —
              students with a KRA PIN, the unemployed, and people whose PIN was issued for a transaction but who earned
              nothing. If that&apos;s you, you file an <strong className="text-ink">annual income tax nil return</strong>,
              not a monthly VAT return.
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li><strong className="text-ink">Deadline:</strong> 30 June each year, for the previous year of income (the 2025 return was due 30 June 2026)</li>
              <li><strong className="text-ink">Penalty:</strong> KES 2,000 for individuals who file late — even for nil returns. Unfiled returns also block your <a href="/resources/tax-compliance-certificate-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">Tax Compliance Certificate (TCC)</a></li>
              <li><strong className="text-ink">Where:</strong> itax.kra.go.ke → Returns → File Nil Return → Income Tax – Resident Individual → submit, then download the acknowledgement receipt</li>
              <li><strong className="text-ink">Don&apos;t file nil if you actually earned income:</strong> employees, freelancers, landlords, and businesses with any income must file a normal return. Habitual nil filing while earning is a compliance red flag that can trigger a KRA query</li>
            </ul>
            <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
              <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-[0.83rem] leading-relaxed">
                <strong className="text-ink">New in 2026 — "No Obligation" PIN status:</strong> as of mid-2026 KRA
                introduced PINs with a <em>No Obligation</em> status for specific categories of taxpayers (notably students and the unemployed),
                ending the mandatory annual nil return for PINs that qualify. If your PIN shows a No Obligation obligation
                in iTax, you may no longer need to file each year. Check <strong className="text-ink">iTax → Taxpayer Dashboard →
                Obligations</strong> to see your current status — and confirm with KRA before assuming you&apos;re exempt.
                Everyone else must still file their nil return annually.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4b — tax amnesty */}
        <section className="mb-16" aria-labelledby="amnesty-h">
          <h2 id="amnesty-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
            KRA Tax Amnesty Programme 2026: Clean Up Past Non-Compliance Without Paying Penalties
          </h2>
          <div className="text-[0.9rem] text-ink-muted leading-relaxed space-y-4">
            <p>
              The <strong className="text-ink">KRA Tax Amnesty</strong> — officially the
              Voluntary Tax Disclosure Programme (VTDP) — allows you to voluntarily tell KRA
              about taxes you did not pay on time. In return, KRA waives{" "}
              <strong className="text-ink">100% of penalties and interest</strong>. You only
              pay the principal tax amount.
            </p>
            <p>
              This is not a rumour or a loophole. It is a formal KRA programme under the Tax
              Procedures Act. It exists because KRA would rather get the principal tax than
              chase penalties from taxpayers who cannot or will not pay the full amount.
            </p>
            <p>
              If you&apos;ve just been hit with a large-looking bill, read{" "}
              <a href="/resources/kra-fine-70000/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                Got a KRA fine around KES 70,000? You may only owe the principal
              </a>{" "}
              — it walks through how to read your iTax figure and confirm whether the amnesty wipes most of it.
            </p>

            <h3 className="font-display text-[1.1rem] font-semibold text-ink mt-6 mb-3">
              What the Amnesty Covers
            </h3>
            <ul className="list-disc pl-6 space-y-1.5">
              <li><strong className="text-ink">VAT returns</strong> — missed months, late filings, under-declared sales</li>
              <li><strong className="text-ink">Income tax</strong> — unpaid instalment tax, unreported income</li>
              <li><strong className="text-ink">PAYE</strong> — missed employee tax remittances</li>
              <li><strong className="text-ink">Withholding tax</strong> — failure to deduct or remit</li>
              <li><strong className="text-ink">Turnover tax</strong> — missed filings or underpayment</li>
              <li><strong className="text-ink">Penalties and interest</strong> — on any of the above, if voluntarily disclosed</li>
            </ul>

            <h3 className="font-display text-[1.1rem] font-semibold text-ink mt-6 mb-3">
              What the Amnesty Does NOT Cover
            </h3>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Tax fraud or intentional evasion under criminal investigation</li>
              <li>Tax already detected by KRA through an audit or compliance check</li>
              <li>Tax where KRA has already issued an assessment or demand notice</li>
            </ul>
            <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
              <Warning size={16} weight="fill" className="text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-[0.83rem] leading-relaxed">
                <strong className="text-ink">Important:</strong> The amnesty only applies if
                you disclose <em>before</em> KRA finds you. Once KRA sends an audit notice or
                compliance letter, you lose eligibility. If you have unfiled returns or unpaid
                tax, apply now — not after KRA knocks.
              </p>
            </div>

            <h3 className="font-display text-[1.1rem] font-semibold text-ink mt-6 mb-3">
              How to Apply for the KRA Tax Amnesty
            </h3>
            <div className="space-y-3">
              {[
                {
                  step: "1",
                  title: "Log into iTax",
                  detail: "Go to itax.kra.go.ke and log in with your KRA PIN and password.",
                },
                {
                  step: "2",
                  title: "Navigate to Voluntary Disclosure",
                  detail: 'Look for "Voluntary Tax Disclosure Programme" or "VTDP" under the Returns menu. If you cannot find it, use the search bar in iTax.',
                },
                {
                  step: "3",
                  title: "Select the tax type and period",
                  detail: "Choose the tax type (VAT, income tax, etc.) and the specific months or years you are disclosing.",
                },
                {
                  step: "4",
                  title: "Enter the correct tax figures",
                  detail: "State the actual tax that should have been paid. This must be accurate — KRA will verify against their records and eTIMS data.",
                },
                {
                  step: "5",
                  title: "Submit and pay the principal tax",
                  detail: "KRA processes the disclosure and issues a payment slip. Pay the principal tax via M-PESA Paybill 572572. Once paid, the penalties and interest are formally waived.",
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
              <p className="text-[0.83rem] leading-relaxed">
                <strong className="text-ink">Example:</strong> James missed 4 months of VAT
                returns. He owes KES 80,000 in principal tax but KRA has added KES 40,000 in
                late-filing penalties and KES 12,000 in interest — total KES 132,000. Under the
                tax amnesty, James applies for voluntary disclosure, pays only KES 80,000,
                and KRA waives the KES 52,000 in penalties and interest.
              </p>
            </div>
            <p className="mt-4 text-[0.85rem] text-ink-muted leading-relaxed">
              For a complete breakdown of eligibility, deadlines, and what happens after you apply, see our{" "}
              <a href="/resources/kra-tax-amnesty-2026/" className="text-brand underline underline-offset-2 hover:text-brand-hover font-medium">dedicated KRA Tax Amnesty 2026 guide</a>.
            </p>
          </div>
        </section>

        {/* Section 5 — penalty waiver vs amnesty */}
        <section className="mb-16" aria-labelledby="waiver-vs-amnesty-h">
          <h2 id="waiver-vs-amnesty-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
            Penalty Waiver vs Tax Amnesty: What is the Difference?
          </h2>
          <p className="text-[0.9rem] text-ink-muted leading-relaxed mb-6">
            Kenyans often confuse these two. They are different tools for different situations.
          </p>
          <div className="border border-hairline rounded-lg overflow-hidden">
            <table className="w-full text-[0.85rem]">
              <thead>
                <tr className="bg-canvas-alt border-b border-hairline">
                  <th className="text-left p-3 font-semibold text-ink w-[30%]"></th>
                  <th className="text-left p-3 font-semibold text-ink">Penalty Waiver</th>
                  <th className="text-left p-3 font-semibold text-ink">Tax Amnesty (VTDP)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                <tr>
                  <td className="p-3 text-ink font-semibold">When to use</td>
                  <td className="p-3 text-ink-muted">You filed late or paid late. The return is already submitted but penalties were charged.</td>
                  <td className="p-3 text-ink-muted">You never filed returns or never paid. You are coming clean about past non-compliance.</td>
                </tr>
                <tr>
                  <td className="p-3 text-ink font-semibold">What is waived</td>
                  <td className="p-3 text-ink-muted">Late-filing or late-payment penalties (KES 10,000 + 5% + 1% interest)</td>
                  <td className="p-3 text-ink-muted">All penalties and interest. You only pay the principal tax.</td>
                </tr>
                <tr>
                  <td className="p-3 text-ink font-semibold">Filed return?</td>
                  <td className="p-3 text-ink-muted">Yes — you already filed but missed the deadline</td>
                  <td className="p-3 text-ink-muted">No — you are filing late or disclosing previously undeclared amounts</td>
                </tr>
                <tr>
                  <td className="p-3 text-ink font-semibold">Legal basis</td>
                  <td className="p-3 text-ink-muted">Section 35, Tax Procedures Act</td>
                  <td className="p-3 text-ink-muted">Voluntary Tax Disclosure Programme (VTDP)</td>
                </tr>
                <tr>
                  <td className="p-3 text-ink font-semibold">Best for</td>
                  <td className="p-3 text-ink-muted">Genuine mistake, first-time offence, iTax system error</td>
                  <td className="p-3 text-ink-muted">Multiple missed months, accumulated penalties, unpaid tax</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6 — common mistakes */}
        <section className="mb-16" aria-labelledby="mistakes-h">
          <h2 id="mistakes-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
            Common Nil Return Mistakes That Cost Kenyan Business Owners KES 10,000+
          </h2>
          <div className="space-y-4">
            {[
              {
                mistake: '"I had no sales so I did not file."',
                fix: "This is the #1 mistake. KRA requires a return every month regardless of activity. File a nil return — it takes 5 minutes.",
              },
              {
                mistake: '"I will file two months together next month."',
                fix: "Each month is a separate filing period. Missing January and filing January + February in March means two KES 10,000 penalties. File every single month individually.",
              },
              {
                mistake: '"The nil return does not have a submit button."',
                fix: "This is a known iTax bug. Switch to Google Chrome, enable pop-ups for itax.kra.go.ke, or try Incognito Mode. The submit button is usually hidden behind a pop-up blocker.",
              },
              {
                mistake: '"I filed a nil return but KRA still charged a penalty."',
                fix: "Check the date you filed. If it was after the 20th, the penalty is automatic. Also confirm you clicked 'Submit' — saving as draft does not count as filing.",
              },
              {
                mistake: '"My accountant said nil returns are not necessary."',
                fix: "Some accountants advise skipping nil returns because they take effort to file. This is bad advice. Every unfiled month adds KES 10,000 in penalties. If your accountant says this, get a second opinion.",
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

        {/* Section 7 — when to get help */}
        <section className="mb-16" aria-labelledby="help-h">
          <h2 id="help-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
            When to Get Help
          </h2>
          <div className="text-[0.9rem] text-ink-muted leading-relaxed space-y-4">
            <p>
              Nil returns are simple — 5 minutes per month. But life gets busy. Deadlines
              slip. The iTax portal crashes on the 19th. Suddenly you have 3 unfiled months,
              KES 30,000 in penalties, and a KRA compliance letter in your iTax inbox.
            </p>
            <p>Get help if:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>You have multiple unfiled months and are unsure how to catch up</li>
              <li>KRA has already charged penalties and you want a waiver</li>
              <li>You want to use the tax amnesty but do not know how to calculate what you owe</li>
              <li>iTax keeps giving errors and you need someone to file for you</li>
              <li>You just want to outsource the whole thing and never log into iTax again</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="border border-hairline rounded-xl p-6 lg:p-8 bg-canvas-alt text-center mb-12">
          <p className="font-display text-[1.2rem] font-semibold text-ink mb-2">
            Let us handle your nil returns every month.
          </p>
          <p className="text-[0.85rem] text-ink-muted mb-6 max-w-[48ch] mx-auto">
            KES 3,500/month. We file on the 17th — before the iTax portal slows down.
            Nil returns, normal returns, penalty waivers, and tax amnesty applications.
            M-PESA accepted. Receipts provided.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={wa("Hi%2C%20I%20want%20to%20sign%20up%20for%20monthly%20VAT%20filing%20-%20KES%203500%2Fmonth")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill inline-flex items-center justify-center gap-2 bg-brand text-canvas font-semibold px-6 py-3 rounded-md text-sm transition-colors hover:bg-brand-hover"
            >
              Start Monthly Filing — KES 3,500
              <ArrowRight size={16} weight="bold" aria-hidden="true" />
            </a>
            <a
              href={wa("Hi%2C%20I%20have%20missed%20some%20VAT%20returns%20and%20want%20help%20with%20the%20tax%20amnesty%20or%20penalty%20waiver")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-hairline text-ink-muted hover:text-ink hover:border-ink/30 font-medium px-6 py-3 rounded-md text-sm transition-colors"
            >
              Penalty Waiver or Amnesty Help — KES 4,000
              <ArrowRight size={16} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12" aria-labelledby="faq-h">
          <h2 id="faq-h" className="font-display text-[1.3rem] font-semibold text-ink mb-6 tracking-tight">
            Frequently Asked Questions About Nil Returns in Kenya
          </h2>
          <div className="space-y-3">
            {[
              {
                q: "Can I file a nil return on my phone?",
                a: "Yes, but it is not ideal. Open itax.kra.go.ke in Chrome or Safari on your phone. You may need to zoom in to see the submit button. Many users report the form does not display properly on small screens. A laptop or desktop is strongly recommended.",
              },
              {
                q: "Do I need a KRA PIN to file a nil return?",
                a: "Yes. You need an active KRA PIN with VAT registration. If you are not VAT-registered, you do not need to file VAT returns at all — but you may need to file income tax or turnover tax returns depending on your business.",
              },
              {
                q: "My business is seasonal. Can I file nil returns for the slow months?",
                a: "Yes. If you have zero sales in a given month, file a nil return for that month. When you have sales, file a normal return. The filing requirement does not pause during slow seasons.",
              },
              {
                q: "What if I file a nil return by mistake when I actually had sales?",
                a: "You must file an amended return. Go to Returns → VAT Returns → select the period → Amended Return. Enter the correct figures. KRA replaces your original nil return with the corrected normal return.",
              },
              {
                q: "Does the KRA tax amnesty apply to nil returns?",
                a: "The amnesty applies to penalties for late-filed returns, including nil returns. If you missed nil return deadlines and were charged KES 10,000 penalties, you can apply for a waiver under the voluntary disclosure programme.",
              },
              {
                q: "Can KRA waive penalties for nil returns under Section 35?",
                a: "Yes. KRA has discretion under Section 35 of the Tax Procedures Act to waive late-filing penalties for nil returns if you show a valid reason: first-time offence, genuine mistake, system error, illness, or natural disaster.",
              },
              {
                q: "How long does the KRA tax amnesty last?",
                a: "The Voluntary Tax Disclosure Programme is an ongoing KRA programme, but the penalty waiver terms can change with each Finance Act. Check with Smart VAT Kenya for the current amnesty conditions before applying.",
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
          <ArticleGrid currentSlug="nil-returns-tax-amnesty" />
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
