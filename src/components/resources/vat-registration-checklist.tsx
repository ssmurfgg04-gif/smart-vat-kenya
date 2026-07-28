import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info, FileText, Bank, Buildings, Users, Gear } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources" },
    { "@type": "ListItem", position: 3, name: "VAT Registration Kenya Checklist 2026", item: "https://smartvatkenya.co.ke/resources/vat-registration-checklist" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "VAT Registration Kenya Checklist 2026: Documents You Need",
  description:
    "Complete document checklist for KRA VAT registration in Kenya 2026. Everything you need: KRA PIN, ID, bank details, business registration, eTIMS requirements. Free printable checklist.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-01",
  dateModified: "2026-07-25",
  url: "https://smartvatkenya.co.ke/resources/vat-registration-checklist",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/vat-registration-checklist",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does KRA take to approve a VAT registration application?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KRA typically processes VAT registration applications within 1–3 working days after all documents are correctly uploaded to iTax. However, if your documents are rejected or incomplete, the clock resets every time you resubmit. Applications with missing signatures, illegible scans, or expired CR12 certificates are the most common cause of delays.",
      },
    },
    {
      "@type": "Question",
      name: "Can I apply for VAT registration without a CR12?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you are a registered company, the CR12 (dated within 90 days) is mandatory. KRA will reject your application if the CR12 is missing or expired. Sole proprietors and partnerships do not need a CR12 — they submit director/partner IDs instead. If you need a CR12, obtain it from e-Citizen under the Business Registration Service (BRS) portal.",
      },
    },
    {
      "@type": "Question",
      name: "What file format and size does KRA accept for document uploads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KRA iTax accepts PDF and JPG file formats only. Each file must be under 1MB. Large scans or high-resolution photos will cause upload errors. Use a PDF compressor or reduce image resolution before uploading. Documents must be legible — blurry scans and photos with glare are the top reasons for rejection.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need eTIMS before or after VAT registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "eTIMS onboarding happens after your VAT registration is approved. Once KRA issues your VAT PIN, you must register for eTIMS (Electronic Tax Invoice Management System) within 30 days. eTIMS is mandatory for all VAT-registered businesses and is used to generate compliant tax invoices for every sale.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my VAT application is rejected?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If KRA rejects your application, they will indicate the reason in iTax. Common reasons include illegible documents, expired CR12, mismatched business names, or missing director details. You can correct and resubmit immediately. If you are using an agent, they should handle the resubmission at no extra cost. Smart VAT Kenya includes free resubmissions in our KES 5,000 fee.",
      },
    },
  ],
}

const toc = [
  { id: "must-have",     label: "Documents You MUST Have for VAT Registration" },
  { id: "business-details", label: "Business Details You Need to Provide" },
  { id: "post-registration", label: "Post-Registration Setup Checklist" },
  { id: "rejection-reasons", label: "Common Document Rejection Reasons and Fixes" },
  { id: "faq",            label: "Frequently Asked Questions" },
]

export default function VATRegistrationChecklistPage() {
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
          <a href="/resources" className="inline-flex items-center gap-1.5 text-canvas/50 hover:text-canvas text-sm mb-6 transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> Back to Knowledge Base
          </a>
          <div className="flex flex-wrap gap-2 mb-5">
            {["Checklist", "VAT Registration", "Documents", "2026"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            VAT Registration Kenya Checklist 2026: Documents You Need
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; KRA-registered VAT agents &mdash; Updated July 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Quick Answer / BLUF */}
        <div className="border-l-[3px] border-brand pl-5 mb-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Why This Checklist Matters</p>
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            Applying for VAT registration on KRA iTax requires uploading <strong className="text-ink">5–10 documents</strong> depending on your business structure. Missing just one document — or uploading the wrong format — can delay your application by <strong className="text-ink">days or even weeks</strong>. This checklist covers every single document KRA will ask for, the most common rejection reasons, and what you need <strong className="text-ink">after</strong> your VAT PIN is approved.
          </p>
        </div>

        {/* Table of contents */}
        <nav aria-label="Table of contents" className="mb-12">
          <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
            <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-muted mb-4">On This Page</p>
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

          {/* Section 1 — Mandatory Documents */}
          <section id="must-have" aria-labelledby="must-have-h">
            <h2 id="must-have-h" className="font-display text-[1.4rem] font-semibold text-ink mb-2 tracking-tight">
              Documents You MUST Have for VAT Registration
            </h2>
            <p className="text-[0.85rem] text-ink-muted mb-6">
              These are the non-negotiable documents KRA requires on the iTax portal. Gather them before you start your application.
            </p>

            <div className="space-y-6">
              <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                <div className="flex items-start gap-3 mb-3">
                  <FileText size={18} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink text-[0.92rem]">KRA PIN Certificate</p>
                    <p className="text-[0.8rem] text-ink-muted mt-0.5">You must already have a KRA PIN (individual or business). VAT registration adds a VAT obligation to your existing PIN.</p>
                  </div>
                </div>
                <div className="border-t border-hairline pt-3 mt-1">
                  <p className="text-[0.75rem] font-mono uppercase tracking-widest text-ink-muted/80 mb-1.5">Tips</p>
                  <ul className="space-y-1">
                    {["Ensure your KRA PIN is active and not deactivated.", "Your PIN certificate must match your current business name exactly.", "If you have changed your business name, update your PIN first on iTax."].map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-[0.82rem] text-ink-soft">
                        <span className="text-brand shrink-0 mt-0.5">&#10003;</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                <div className="flex items-start gap-3 mb-3">
                  <Users size={18} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink text-[0.92rem]">National ID / Passport (All Directors or Partners)</p>
                    <p className="text-[0.8rem] text-ink-muted mt-0.5">KRA requires clear scans of ID documents for every director, partner, or proprietor. No exceptions.</p>
                  </div>
                </div>
                <div className="border-t border-hairline pt-3 mt-1">
                  <p className="text-[0.75rem] font-mono uppercase tracking-widest text-ink-muted/80 mb-1.5">Requirements</p>
                  <ul className="space-y-1">
                    {["Both sides of the ID must be scanned and merged into one PDF.", "Passports: ensure the bio-data page and signature page are included.", "IDs must be valid — expired IDs will be rejected immediately.", "File size must be under 1MB per upload."].map((r) => (
                      <li key={r} className="flex items-start gap-2 text-[0.82rem] text-ink-soft">
                        <span className="text-brand shrink-0 mt-0.5">&#10003;</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                <div className="flex items-start gap-3 mb-3">
                  <Buildings size={18} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink text-[0.92rem]">Business Registration Certificate</p>
                    <p className="text-[0.8rem] text-ink-muted mt-0.5">Certificate of Incorporation (companies) or Business Name Registration (sole proprietors) from e-Citizen / BRS.</p>
                  </div>
                </div>
                <div className="border-t border-hairline pt-3 mt-1">
                  <p className="text-[0.75rem] font-mono uppercase tracking-widest text-ink-muted/80 mb-1.5">Tips</p>
                  <ul className="space-y-1">
                    {["Download the latest copy from e-Citizen — older PDFs may have expired.", "The business name on the certificate must match your KRA PIN name exactly.", "If your business is a branch of a foreign company, include the foreign registration cert too."].map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-[0.82rem] text-ink-soft">
                        <span className="text-brand shrink-0 mt-0.5">&#10003;</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                <div className="flex items-start gap-3 mb-3">
                  <FileText size={18} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink text-[0.92rem]">CR12 (Companies Only)</p>
                    <p className="text-[0.8rem] text-ink-muted mt-0.5">A CR12 is a list of directors and shareholders issued by the Business Registration Service. It must be dated within 90 days of your VAT application.</p>
                  </div>
                </div>
                <div className="border-t border-hairline pt-3 mt-1">
                  <p className="text-[0.75rem] font-mono uppercase tracking-widest text-ink-muted/80 mb-1.5">Tips</p>
                  <ul className="space-y-1">
                    {["Download your CR12 from e-Citizen (Business Registration Service).", "A CR12 older than 90 days will be rejected — get a fresh copy.", "Ensure all current directors are listed. KRA cross-checks against your registration cert.", "Sole proprietors and partnerships skip this — submit IDs instead."].map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-[0.82rem] text-ink-soft">
                        <span className="text-brand shrink-0 mt-0.5">&#10003;</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                <div className="flex items-start gap-3 mb-3">
                  <FileText size={18} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink text-[0.92rem]">Partnership Deed (Partnerships Only)</p>
                    <p className="text-[0.8rem] text-ink-muted mt-0.5">If you run a partnership, KRA requires a copy of the partnership deed listing all partners and their ownership shares.</p>
                  </div>
                </div>
                <div className="border-t border-hairline pt-3 mt-1">
                  <p className="text-[0.75rem] font-mono uppercase tracking-widest text-ink-muted/80 mb-1.5">Tips</p>
                  <ul className="space-y-1">
                    {["The deed must be signed and dated by all partners.", "Include the partnership registration certificate if available.", "If the deed is not in English, provide a certified translation."].map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-[0.82rem] text-ink-soft">
                        <span className="text-brand shrink-0 mt-0.5">&#10003;</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                <div className="flex items-start gap-3 mb-3">
                  <Bank size={18} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink text-[0.92rem]">Bank Account Details</p>
                    <p className="text-[0.8rem] text-ink-muted mt-0.5">KRA needs your business bank account information for VAT refunds if they ever arise. A bank statement or a letter from the bank works.</p>
                  </div>
                </div>
                <div className="border-t border-hairline pt-3 mt-1">
                  <p className="text-[0.75rem] font-mono uppercase tracking-widest text-ink-muted/80 mb-1.5">Requirements</p>
                  <ul className="space-y-1">
                    {["Provide: Bank name, branch, account number, and account name.", "The account name must match the business name or a director's name.", "A recent bank statement (last 3 months) is preferred as proof.", "Mobile money accounts (M-PESA business till) are not accepted as primary bank details."].map((r) => (
                      <li key={r} className="flex items-start gap-2 text-[0.82rem] text-ink-soft">
                        <span className="text-brand shrink-0 mt-0.5">&#10003;</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 — Business Details */}
          <section id="business-details" aria-labelledby="business-details-h">
            <h2 id="business-details-h" className="font-display text-[1.4rem] font-semibold text-ink mb-2 tracking-tight">
              Business Details You Need to Provide
            </h2>
            <p className="text-[0.85rem] text-ink-muted mb-6">
              Beyond documents, the iTax application form asks for specific business information. Prepare these details before you start.
            </p>

            <div className="space-y-5">
              {[
                {
                  label: "Physical Business Address",
                  note: "KRA requires a physical location — not a P.O. Box. Provide building name, street, floor, room number, and nearest landmark. Your address must match where you actually operate.",
                  tips: ["Include GPS coordinates if available — some KRA officers verify physically.", "If you work from home, provide your home address and note it is a home office.", "A P.O. Box alone is not accepted as a physical address."],
                },
                {
                  label: "Nature of Business Activities",
                  note: "Describe what your business actually does in detail. &ldquo;General trade&rdquo; is not enough. KRA wants specifics: &ldquo;wholesale distribution of electronics,&rdquo; &ldquo;restaurant and catering services,&rdquo; &ldquo;IT consultancy and software development.&rdquo;",
                  tips: ["List each distinct business activity separately.", "Be honest — KRA uses this to determine your VAT category and audit risk.", "If you have multiple activities that fall under different VAT treatments, mention them all."],
                },
                {
                  label: "Estimated Monthly / Annual Turnover",
                  note: "KRA asks for your projected turnover. If you have been in business, use your actual revenue. If you are pre-revenue, provide a realistic estimate based on your business plan.",
                  tips: ["Do not understate your turnover to avoid VAT — KRA cross-checks with bank and M-PESA data.", "If your turnover exceeds KES 5 million, be honest. Voluntary registration below the threshold is fine too.", "Provide figures in KES and specify whether they are inclusive or exclusive of VAT."],
                },
                {
                  label: "List of Products / Services with KRA HS Codes",
                  note: "KRA needs to know what you sell and which HS (Harmonized System) codes apply. HS codes determine the VAT rate (16%, 0%, or exempt).",
                  tips: ["Find HS codes on the KRA website or through the iTax portal.", "Common examples: 8471 (computers), 6204 (clothing), 2105 (food products).", "If you are unsure about HS codes, your VAT agent can help classify them."],
                },
                {
                  label: "Rent / Lease Agreement or Utility Bill",
                  note: "As proof of your physical address, KRA may ask for a rent agreement, a current electricity or water bill, or a business permit showing your registered address.",
                  tips: ["The utility bill must be from the last 3 months.", "The name on the bill should match your business or director's name.", "If you own the premises, provide a title deed or rates bill instead."],
                },
              ].map((section) => (
                <div key={section.label} className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                  <div className="flex items-start gap-3 mb-3">
                    <Info size={18} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink text-[0.92rem]">{section.label}</p>
                      <p className="text-[0.8rem] text-ink-muted mt-0.5" dangerouslySetInnerHTML={{ __html: section.note }} />
                    </div>
                  </div>
                  <div className="border-t border-hairline pt-3 mt-1">
                    <p className="text-[0.75rem] font-mono uppercase tracking-widest text-ink-muted/80 mb-1.5">Tips</p>
                    <ul className="space-y-1">
                      {section.tips.map((tip) => (
                        <li key={tip} className="flex items-start gap-2 text-[0.82rem] text-ink-soft">
                          <span className="text-brand shrink-0 mt-0.5">&#10003;</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 — Post-Registration Setup */}
          <section id="post-registration" aria-labelledby="post-registration-h">
            <h2 id="post-registration-h" className="font-display text-[1.4rem] font-semibold text-ink mb-2 tracking-tight">
              Post-Registration Setup Checklist
            </h2>
            <p className="text-[0.85rem] text-ink-muted mb-6">
              Getting your VAT PIN is just the beginning. You must complete these steps within 30 days of approval to stay compliant.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: <Gear size={18} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />,
title: "eTIMS Onboarding Confirmation",
                   body: <>Register for{" "}<a href="/resources/etims-onboarding-guide" className="text-brand underline underline-offset-2 hover:text-brand-hover">eTIMS (Electronic Tax Invoice Management System)</a>{" "}within 30 days of VAT approval. KRA will send you login credentials. Once onboarded, all your invoices must be generated through eTIMS or an integrated system.</>,
                },
                {
                  icon: <Gear size={18} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />,
                  title: "VAT Rate Setup on Invoicing System",
                  body: "Configure your invoicing system to apply the correct VAT rates (16% standard, 0% for zero-rated goods, exempt for exempt supplies). If you use eTIMS directly, the rates are preset. If you use a third-party system, ensure it integrates with eTIMS.",
                },
                {
                  icon: <Gear size={18} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />,
title: "Monthly Filing Calendar Setup",
                   body: <>VAT returns are due on or before the 20th of every month. See our{" "}<a href="/resources/how-to-file-vat-return-on-itax" className="text-brand underline underline-offset-2 hover:text-brand-hover">VAT return filing guide</a>{" "}for step-by-step instructions. Set up reminders in your calendar, accounting software, or with your agent. Late filing costs KES 10,000 per month plus 2% interest on any unpaid VAT.</>,
                },
                {
                  icon: <Gear size={18} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />,
                   title: "KRA Paybill 572572 — VAT Payment Guidance",
                   body: <>All VAT payments to KRA are made via M-PESA Paybill 572572 (business number) or through bank transfer to KRA's collection account. See the{" "}<a href="/resources/how-to-file-vat-return-on-itax#payment" className="text-brand underline underline-offset-2 hover:text-brand-hover">payment section in our filing guide</a>{" "}for the exact M-PESA steps. Your account number on Paybill 572572 is your KRA PIN followed by the payment type code. For VAT, the format is: PIN000V (e.g., P0123456789V). Payments reflect on iTax within minutes.</>,
                },
              ].map((step) => (
                <div key={step.title} className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                  <div className="flex items-start gap-3">
                    {step.icon}
                    <div>
                      <p className="font-semibold text-ink text-[0.92rem] mb-1">{step.title}</p>
                      <p className="text-[0.82rem] text-ink-muted leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border border-canvas-warm bg-[#fffbf0] dark:bg-[#2a1f00] dark:border-[#4a3800] rounded-lg p-4 flex items-start gap-3 mt-6">
              <Warning size={17} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold text-[#7a5500] dark:text-[#ffcc44] text-[0.85rem] mb-1">
                  Don&apos;t Forget eTIMS
                </p>
                <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                  KRA has been aggressively enforcing eTIMS compliance in 2026. Businesses that issue manual invoices after the 30-day eTIMS window face penalties of up to KES 100,000. See the{" "}<a href="/resources/etims-penalty-50000-per-month-kenya" className="underline underline-offset-2 hover:text-[#ccaa33]">eTIMS penalty guide</a>{" "}for full details. Complete your eTIMS onboarding as soon as your VAT PIN is approved — not on the last day.
                </p>
              </div>
            </div>
            <div className="mt-4 border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
              <Info size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold text-ink text-[0.85rem] mb-1">Also: You Will Need a Tax Compliance Certificate (TCC)</p>
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  Once you are VAT-registered and compliant, you may need a{" "}
                  <a href="/resources/tax-compliance-certificate-kenya" className="text-brand underline underline-offset-2 hover:text-brand-hover font-medium">KRA Tax Compliance Certificate</a>{" "}
                  for tenders, licences, and contracts. eTIMS compliance is now a requirement for TCC issuance.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 — Rejection Reasons */}
          <section id="rejection-reasons" aria-labelledby="rejection-reasons-h">
            <h2 id="rejection-reasons-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Common Document Rejection Reasons and Fixes
            </h2>
            <p className="text-[0.9rem] text-ink-soft leading-relaxed mb-5">
              Nearly 30% of VAT registration applications are rejected on the first submission. Here are the most common reasons KRA gives and exactly how to fix them.
            </p>
            <div className="border border-hairline rounded-lg overflow-hidden">
              <table className="w-full text-[0.83rem]">
                <thead>
                  <tr className="border-b border-hairline bg-canvas-alt">
                    <th className="text-left p-3.5 font-semibold text-ink">Rejection Reason</th>
                    <th className="text-left p-3.5 font-semibold text-ink">Fix</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hairline">
                  {[
                    { r: "Illegible or blurry document scan", f: "Re-scan at 300 DPI minimum. Ensure even lighting — no shadows or glare. Use a scanner app (Adobe Scan, CamScanner) instead of a phone camera." },
                    { r: "CR12 is older than 90 days", f: "Download a fresh CR12 from e-Citizen (Business Registration Service). It costs approximately KES 100 and is available immediately." },
                    { r: "File size exceeds 1MB limit", f: "Compress PDFs using ilovepdf.com or SmallPDF. For JPGs, reduce resolution to 1024×768 before uploading." },
                    { r: "Business name mismatch between documents", f: "Your KRA PIN name, business registration name, and bank account name must all match. Update any that are inconsistent before applying." },
                    { r: "Missing director or partner ID", f: "Every director and partner must submit an ID scan. If a director is a foreign national, include their passport and work permit." },
                    { r: "Physical address is incomplete or a P.O. Box", f: "Provide a full physical address: building name, street, floor, room, and landmark. A P.O. Box alone will be rejected." },
                    { r: "Bank account name does not match business name", f: "Use a bank account in the business name, or a director's account with a letter from the bank confirming it is used for business transactions." },
                    { r: "Wrong file format (PNG, DOCX, etc.)", f: "KRA only accepts PDF and JPG. Convert all documents before uploading. Do not upload Word documents, Excel files, or PNG screenshots." },
                  ].map(({ r, f }) => (
                    <tr key={r}>
                      <td className="p-3.5 text-ink-muted">{r}</td>
                      <td className="p-3.5 text-ink">{f}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5 — Interactive Help / Lead Magnet CTA */}
          <section aria-labelledby="help-cta-h">
            <div className="border border-brand/30 bg-brand-muted rounded-xl p-6 sm:p-8 text-center">
              <h2 id="help-cta-h" className="font-display text-[1.3rem] font-semibold text-ink mb-3 tracking-tight">
                Don&apos;t Have All These Documents?
              </h2>
              <p className="text-[0.88rem] text-ink-soft leading-relaxed max-w-lg mx-auto mb-3">
                That is okay. Send us what you have on WhatsApp and we will:
              </p>
              <ul className="text-[0.85rem] text-ink-soft leading-relaxed max-w-lg mx-auto mb-6 space-y-1.5 text-left inline-block">
                {[
                  "Review your documents for completeness before you apply",
                  "Tell you exactly what is missing and how to get it",
                  "Handle the entire iTax submission for you",
                  "Follow up with KRA until your VAT PIN is approved",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://wa.me/254721725958?text=I%20want%20to%20register%20for%20VAT%20in%20Kenya.%20I%20have%20some%20documents%20ready.%20Please%20guide%20me."
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-6 py-3 rounded-md hover:bg-brand-hover transition-colors"
                >
                  Send Docs on WhatsApp
                  <ArrowRight size={14} weight="bold" aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>

          {/* CTA — Let Us Handle It */}
          <section aria-labelledby="cta-h">
            <div className="border border-hairline rounded-xl p-6 sm:p-8 text-center">
              <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Flat Fee — No Surprises</p>
              <h2 id="cta-h" className="font-display text-[1.3rem] font-semibold text-ink mb-3 tracking-tight">
                Let Us Handle It — KES 5,000 Flat Fee
              </h2>
              <p className="text-[0.88rem] text-ink-soft leading-relaxed max-w-lg mx-auto mb-6">
                We collect your documents, review them for errors, submit on iTax, and follow up until your VAT PIN is approved. If KRA rejects, we resubmit at <strong className="text-ink">no extra cost</strong>. Pay via M-PESA Paybill to a registered business number.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://wa.me/254721725958?text=I%20want%20to%20register%20for%20VAT%20-%20KES%205,000%20flat%20fee.%20Please%20send%20me%20the%20next%20steps."
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-6 py-3 rounded-md hover:bg-brand-hover transition-colors"
                >
                  Start Your Registration
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
          <ArticleGrid currentSlug="vat-registration-checklist" />
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
            <a href="/resources" className="text-[0.82rem] text-ink-muted hover:text-brand transition-colors underline underline-offset-2">
              ← All Resources
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
