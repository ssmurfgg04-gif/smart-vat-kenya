import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"
import { Flowchart, VATRegistrationFlow } from "@/components/flowcharts"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "How to Register for VAT in Kenya", item: "https://smartvatkenya.co.ke/resources/how-to-register-for-vat-in-kenya/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Register for VAT in Kenya on iTax (Step-by-Step Guide 2026)",
  description:
    "Complete step-by-step guide to VAT registration in Kenya for small businesses. When to register, required documents, the iTax process, and ongoing obligations.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-01",
  dateModified: "2026-07-24",
  url: "https://smartvatkenya.co.ke/resources/how-to-register-for-vat-in-kenya",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/how-to-register-for-vat-in-kenya",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who needs to register for VAT in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Any business with annual taxable turnover of KES 5 million or more must register for VAT in Kenya. This includes sole traders, partnerships, and companies. You must apply within 30 days of reaching the threshold. Businesses below KES 5 million can register voluntarily.",
      },
    },
    {
      "@type": "Question",
      name: "What documents are required for KRA VAT registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You need: KRA PIN certificate, national ID or passport (for all directors or partners), business name and physical address, bank account details (account number and bank name), and for companies, a Certificate of Incorporation and CR12.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for VAT on the iTax portal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Log in to itax.kra.go.ke using your KRA PIN and password. Navigate to Registration, then select VAT Registration. Fill in your business details, upload the required documents (PDF or JPG, under 1MB each), and submit. KRA will review your application within 1–3 working days.",
      },
    },
    {
      "@type": "Question",
      name: "How long does KRA take to issue a VAT PIN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KRA typically approves a VAT registration application within 1 to 3 working days if all documents are correct. Complex cases or applications with missing information can take up to 5 working days. Smart VAT Kenya has a 100% first-attempt success rate because we ensure everything is correct before submission.",
      },
    },
    {
      "@type": "Question",
      name: "How much does VAT registration cost in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KRA does not charge a government fee for VAT registration. However, if you hire an agent or consultant, fees vary. Smart VAT Kenya charges a flat KES 5,000 fee, which includes iTax filing, document preparation, and eTIMS onboarding guidance.",
      },
    },
  ],
}

const toc = [
  { id: "who-needs",    label: "Who Needs to Register? (The KES 5 Million Rule)" },
  { id: "documents",   label: "Documents Required for KRA VAT Registration" },
  { id: "how-to",      label: "How to Apply for VAT on the iTax Portal" },
  { id: "timeline",    label: "How Long Does KRA Take to Issue a VAT PIN?" },
  { id: "cost",        label: "How Much Does VAT Registration Cost in Kenya?" },
  { id: "after",       label: "What Happens After You Register?" },
  { id: "faq",         label: "Frequently Asked Questions" },
]

export default function Pillar1Page() {
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
            {["VAT Registration", "KRA", "iTax", "2026"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            How to Register for VAT in Kenya on iTax (Step-by-Step Guide 2026)
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; KRA-registered VAT agents &mdash; Updated July 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Quick Answer / BLUF */}
        <div className="border-l-[3px] border-brand pl-5 mb-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Quick Answer</p>
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            To register for VAT in Kenya, your business must have annual taxable turnover above{" "}
            <strong className="text-ink">KES 5 million</strong>. You apply on the{" "}
            <strong className="text-ink">KRA iTax portal</strong> at itax.kra.go.ke using your KRA PIN, national ID, and bank details. KRA issues your VAT PIN within{" "}
            <strong className="text-ink">1–3 working days</strong>. KRA does not charge a fee — but if you hire a professional, Smart VAT Kenya charges a flat{" "}
            <strong className="text-ink">KES 5,000</strong>.
          </p>
        </div>

        <Flowchart caption="VAT registration decision flowchart — from turnover check to PIN issued">
          <VATRegistrationFlow />
        </Flowchart>

        {/* Table of contents */}
        <nav aria-label="Table of contents" className="mb-12">
          <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
            <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-muted mb-4">In This Guide</p>
            <ol className="space-y-2" role="list">
              {toc.map((item, i) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="flex items-center gap-3 text-[0.85rem] text-ink-muted hover:text-brand transition-colors">
                    <span className="font-mono text-[0.63rem] text-ink-muted/70 w-5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <article className="space-y-14">

          {/* Section 1 */}
          <section id="who-needs" aria-labelledby="who-needs-h">
            <h2 id="who-needs-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Who Needs to Register for VAT in Kenya? (The KES 5 Million Rule)
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Under the Kenya VAT Act (Cap. 476), registration is <strong className="text-ink">mandatory</strong> when your taxable turnover in any twelve-month period reaches or exceeds{" "}
                <strong className="text-ink">KES 5 million</strong>. This is called the mandatory VAT registration threshold. You must apply within <strong className="text-ink">30 days</strong> of reaching this amount.
              </p>
              <p>
                Taxable turnover means the total value of taxable supplies — the goods and services you sell that attract either the 16% standard rate or the 0% zero rate. Exempt supplies (financial services, residential rent, education) do not count toward this threshold.
              </p>
              <div className="border border-canvas-warm bg-[#fffbf0] dark:bg-[#2a1f00] dark:border-[#4a3800] rounded-lg p-4 flex items-start gap-3">
                <Warning size={17} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#7a5500] dark:text-[#ffcc44] text-[0.85rem] mb-1">
                    Penalty for Not Registering on Time
                  </p>
                  <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                    Failing to register for VAT when your turnover exceeds KES 5 million attracts a penalty of{" "}
                    <strong>KES 100,000</strong> or the tax that would have been due (whichever is higher). Do not wait.
                  </p>
                </div>
              </div>
              <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                <p className="font-semibold text-ink text-[0.88rem] mb-3">Can I register voluntarily?</p>
                <p className="text-[0.85rem] text-ink-muted leading-relaxed">
                  Yes. Even if your turnover is below KES 5 million, you can apply for voluntary VAT registration. This is useful if you have high business costs — because as a VAT-registered person, you can claim back the 16% VAT your suppliers charge you (called <strong className="text-ink">input VAT</strong>). Many Nairobi suppliers and corporate clients also prefer to work only with VAT-registered businesses.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="documents" aria-labelledby="docs-h">
            <h2 id="docs-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Documents Required for KRA VAT Registration
            </h2>
            <p className="text-[0.9rem] text-ink-soft leading-relaxed mb-5">
              KRA will reject your application if any document is missing or unclear. Prepare everything before you log in to the iTax portal. All uploads must be PDF or JPG and must be under 1MB per file.
            </p>
            <div className="space-y-3">
              {[
                { doc: "KRA PIN Certificate", note: "Your individual or company PIN — printed from the iTax portal." },
                { doc: "National ID or Passport", note: "For sole traders, one ID. For companies or partnerships, the ID of every director or partner." },
                { doc: "Business name and physical address", note: "Use the registered business name. Include the street, town, and county." },
                { doc: "Bank account details", note: "KRA uses this for any VAT refunds. Provide your account number and the bank name." },
                { doc: "Certificate of Incorporation", note: "Companies only. Obtained from the Business Registration Service (BRS)." },
                { doc: "CR12 (List of Directors)", note: "Companies only. Order from BRS — it must be dated within 90 days." },
                { doc: "Business permit or trade licence", note: "If applicable to your county or sector." },
              ].map(({ doc, note }) => (
                <div key={doc} className="flex items-start gap-3 border border-hairline rounded-md p-3.5">
                  <CheckCircle size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink text-[0.88rem]">{doc}</p>
                    <p className="text-[0.8rem] text-ink-muted mt-0.5">{note}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section id="how-to" aria-labelledby="how-to-h">
            <h2 id="how-to-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How to Apply for VAT on the iTax Portal
            </h2>
            <p className="text-[0.9rem] text-ink-soft leading-relaxed mb-6">
              Use a <strong className="text-ink">desktop or laptop browser</strong> — the mobile version of iTax has known bugs with the VAT registration form. Google Chrome is recommended.
            </p>
            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: "Log in to itax.kra.go.ke",
                  detail: "Enter your KRA PIN and password. If you have forgotten your password, click 'Forgot Password' — a reset link will be sent to your registered email address.",
                },
                {
                  step: 2,
                  title: "Go to Registration, then Taxpayer Registration",
                  detail: "On the top menu bar, click 'Registration'. From the dropdown, select 'Taxpayer Registration', then click the 'Amendment' tab. This is where you add VAT as a new tax obligation.",
                },
                {
                  step: 3,
                  title: "Add VAT as a Tax Obligation",
                  detail: "Scroll to the 'Tax Obligation' section. Click 'Add Tax Obligation'. Select 'VAT' from the dropdown list. Enter your effective registration date (today, or the date you crossed KES 5 million).",
                },
                {
                  step: 4,
                  title: "Fill in your business details",
                  detail: "Enter your physical business address, nature of business (use the ISIC code closest to your industry), estimated annual taxable turnover, and bank account details.",
                },
                {
                  step: 5,
                  title: "Upload your supporting documents",
                  detail: "Attach each required document. Keep files under 1MB. If the upload fails, compress your PDF or reduce the JPG quality. Do not use scanned images on a dark background — KRA will reject them.",
                },
                {
                  step: 6,
                  title: "Submit and note your Application Reference Number",
                  detail: "Click Submit. iTax will display an Application Reference Number — save this. You can use it to track the status of your application.",
                },
                {
                  step: 7,
                  title: "Check your email for KRA approval",
                  detail: "KRA will send an email to your registered address when your VAT obligation is approved. Your updated KRA PIN certificate — now showing VAT — can be downloaded from the iTax portal.",
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
              <p className="font-semibold text-ink text-[0.88rem] mb-2">Skip the iTax Stress</p>
              <p className="text-[0.84rem] text-ink-soft leading-relaxed mb-4">
                Most business owners encounter errors, confusing navigation, or rejection letters on their first iTax attempt. Smart VAT Kenya handles the entire process — document check, iTax submission, and eTIMS onboarding — for a flat fee of <strong className="text-ink">KES 5,000</strong>. We have a 100% first-attempt approval rate.
              </p>
              <a
                href="https://wa.me/254717344440?text=I%20need%20help%20registering%20for%20VAT%20on%20iTax"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
              >
                Register for KES 5,000 — WhatsApp Us
                <ArrowRight size={14} weight="bold" aria-hidden="true" />
              </a>
            </div>
          </section>

          {/* Section 4 */}
          <section id="timeline" aria-labelledby="timeline-h">
            <h2 id="timeline-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How Long Does KRA Take to Issue a VAT PIN?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                If your application is complete and correct, KRA typically approves it within{" "}
                <strong className="text-ink">1 to 3 working days</strong>. You will receive an email notification, and your updated PIN certificate — now showing VAT as an active tax obligation — is available on the iTax portal.
              </p>
              <p>
                If documents are missing or unclear, KRA will send a <strong className="text-ink">query notice</strong> to your registered email. You must respond with the corrected documents within the stated deadline (usually 7 days) or your application will lapse and you will need to start again.
              </p>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Pro tip:</strong> Use the email address you check daily for your KRA account. Query notices are time-limited and many businesses lose their applications because they missed a KRA email in their spam folder.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="cost" aria-labelledby="cost-h">
            <h2 id="cost-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How Much Does VAT Registration Cost in Kenya?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                <strong className="text-ink">KRA charges no government fee</strong> for VAT registration. The iTax portal is free to use.
              </p>
              <p>
                If you hire an agent or accountant, the market rate in Nairobi ranges from{" "}
                <strong className="text-ink">KES 10,000 to KES 30,000</strong> from traditional accounting firms. Smart VAT Kenya charges a flat <strong className="text-ink">KES 5,000</strong> — all-inclusive — payable via M-PESA.
              </p>
              <div className="border border-hairline rounded-lg overflow-hidden">
                <table className="w-full text-[0.83rem]">
                  <thead>
                    <tr className="border-b border-hairline bg-canvas-alt">
                      <th className="text-left p-3.5 font-semibold text-ink">Option</th>
                      <th className="text-right p-3.5 font-semibold text-ink">Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hairline">
                    {[
                      { opt: "Do it yourself on iTax", cost: "Free" },
                      { opt: "Smart VAT Kenya (flat fee)", cost: "KES 5,000" },
                      { opt: "Nairobi accounting firm", cost: "KES 10,000–30,000" },
                    ].map(({ opt, cost }) => (
                      <tr key={opt}>
                        <td className="p-3.5 text-ink-muted">{opt}</td>
                        <td className="p-3.5 text-right font-medium text-ink">{cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="after" aria-labelledby="after-h">
            <h2 id="after-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What Happens After You Register for VAT?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Once registered, you have ongoing legal obligations. Missing any of these can trigger automatic penalties.
              </p>
              <ul className="space-y-3">
                {[
                  "File a VAT return on iTax every month — even if you made no sales (called a Nil Return).",
                  "Pay any VAT due by the 20th of the following month via M-PESA Paybill 572572.",
                  "Issue tax invoices showing your VAT PIN and the VAT amount on every taxable sale.",
                  "Complete your eTIMS onboarding — KRA requires all businesses to issue electronic tax invoices from 2026. Filing VAT without eTIMS-compliant invoices will result in rejected input VAT claims.",
                  "Keep records of all sales and purchases for at least 5 years — KRA audits businesses and can request records.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.88rem] text-ink-soft">
                    <CheckCircle size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="border border-brand/25 bg-brand-muted rounded-lg p-4 flex items-start gap-3">
                <Warning size={17} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-soft leading-relaxed">
                  <strong className="text-ink">Late filing penalty:</strong> Filing even one day after the 20th triggers{" "}
                  <strong className="text-ink">KES 10,000</strong> or 5% of the tax due (whichever is higher), plus 1% interest per month. A nil return filed late still attracts the KES 10,000 penalty. See our{" "}
                  <a href="/resources/kra-penalty-for-late-vat-filing/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                    full KRA penalty guide
                  </a>.
                </p>
              </div>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Download the official guides:</strong> Get the complete KRA VAT registration guide, iTax manuals, and eTIMS PDFs from our{" "}
                  <a href="/forms/" className="text-brand underline underline-offset-2 hover:text-brand-hover font-medium">KRA forms &amp; manuals page</a>.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection faqSchema={faqSchema} />
        </article>

        {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="how-to-register-for-vat-in-kenya" />
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
      </div>
    </>
  )
}
