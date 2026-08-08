import { ArrowRight, ArrowLeft } from "@phosphor-icons/react/dist/ssr"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { RelatedLinks } from "@/components/related-links"

const faqs = [
  { q: "What is the Kenya VAT standard rate in 2026?", a: "The Kenya VAT standard rate is 16% as per KRA guidelines for 2026. This applies to most taxable goods and services. Essential items including basic foodstuffs, medical supplies, and exports are zero-rated (0%) or exempt." },
  { q: "How much does VAT registration cost in Kenya?", a: "Smart VAT Kenya charges a flat fee of KES 5,000 for complete VAT registration, including iTax profile update and VAT PIN generation, completed in 1–3 working days. Traditional facilitators charge KES 15,000–30,000." },
  { q: "What is the penalty for late VAT filing in Kenya?", a: "KRA imposes a penalty of KES 10,000 or 5% of the tax due (whichever is higher), plus 1% interest per month on unpaid tax. VAT returns must be filed by the 20th of each following month." },
  { q: "When must a business register for VAT in Kenya?", a: "A business must register for VAT when its annual taxable turnover reaches or exceeds KES 5 million. Voluntary registration is also possible below this threshold. Finance Act 2025 introduced amendments for certain categories." },
  { q: "How do I register for VAT online in Kenya?", a: "VAT registration is done via the KRA iTax portal at itax.kra.go.ke. The process involves updating your iTax profile, completing Form VAT 1, and uploading supporting documents. Many business owners experience errors. Smart VAT Kenya handles the entire process for KES 5,000." },
  { q: "Do you accept M-PESA for payment?", a: "Yes. Smart VAT Kenya accepts M-PESA for all services and provides official M-PESA transaction receipts for every payment." },
  { q: "What is eTIMS and do I need it for VAT?", a: "eTIMS (Electronic Tax Invoice Management System) is KRA's mandatory electronic invoicing system. All businesses in Kenya must onboard eTIMS. From 2026, KRA validates all VAT returns against eTIMS invoice data." },
  { q: "What is the penalty for not registering for VAT in Kenya?", a: "KRA imposes a penalty of KES 100,000 or the tax that would have been due (whichever is higher) for failure to register for VAT when required. This is separate from the KES 10,000 late-filing penalty." },
  { q: "What is the VAT Special Table?", a: "The KRA VAT Special Table is a list of taxpayers under compliance review. If your supplier is on the table, your input VAT claims involving their invoices are automatically blocked by iTax." },
  { q: "Is the VAT threshold KES 5 million or KES 8 million?", a: "KES 5 million remains the current operational threshold. The Finance Act 2025 proposed raising it to KES 8 million, but this has not yet taken effect as of July 2026." },
  { q: "How do I pay KRA VAT after filing?", a: "VAT payment to KRA is via M-PESA Paybill 572572 using your KRA PIN as the account number. Payments must clear before the 20th of the month." },
  { q: "What is the difference between zero-rated and exempt supplies?", a: "Zero-rated supplies (0%) still require VAT registration and you can claim input VAT on related costs. Exempt supplies carry no VAT charge and input VAT cannot be claimed. Examples of zero-rated: exports, unprocessed foods. Exempt: residential rent, financial services." },
  { q: "Can I claim input VAT on all my business purchases?", a: "Input VAT can only be claimed on purchases directly attributable to taxable supplies. You need valid eTIMS invoices. Certain items like entertainment and passenger vehicles have restrictions." },
  { q: "What is the eTIMS penalty for non-compliance?", a: "Issuing a non-compliant electronic tax invoice attracts the TPA s.86 penalty — since the Finance Act 2026 (in force 1 July 2026), the higher of 5% of the tax due, KES 100,000 (companies), or KES 10,000 (individuals); before then, two times the tax due. Failing to integrate your system after a KRA notice costs up to KES 100,000 per month (TPA s.59A(5)). This is separate from standard VAT penalties. Figures like KES 1,000,000 or 10% of the tax per invoice, KES 500,000 per month, or KES 50,000 per month circulate in guidance but are not enacted law." },
  { q: "How long does VAT registration take in Kenya?", a: "KRA iTax VAT registration typically takes 1–3 working days for processing. Some cases may take longer if documents need clarification." },
  { q: "Do I need an eTIMS invoice for every sale?", a: "Yes. Every sale — including cash sales, B2C transactions, and B2B sales — must be recorded in eTIMS and an eTIMS-compliant invoice or receipt issued." },
  { q: "What is withholding VAT in Kenya?", a: "Withholding VAT requires appointed agents to deduct 2% (or 6% for petroleum) at source from supplier invoices and remit to KRA within 5 days." },
  { q: "How do I claim a VAT refund in Kenya?", a: "VAT refund claims are submitted through iTax when input VAT exceeds output VAT. The refund window is 12 months. Zero-rated exporters and businesses with capital purchases commonly claim." },
  { q: "Do digital services attract VAT in Kenya?", a: "Yes. Digital services supplied to Kenyan customers are subject to 16% VAT. Non-resident providers must register via the simplified regime or appoint a tax representative." },
  { q: "What happens if I file a nil return late?", a: "Even nil returns must be filed by the 20th. Late filing of a nil return still attracts the KES 10,000 penalty, though KRA may waive it under the tax amnesty programme for first-time offenders." },
  { q: "Can I voluntarily register for VAT below the threshold?", a: "Yes. Voluntary registration allows you to claim input VAT on your business costs. This is beneficial if you have significant VAT-bearing expenses." },
  { q: "What is the KRA tax amnesty programme?", a: "The KRA tax amnesty programme allows taxpayers to apply for penalty waivers on outstanding taxes, including VAT penalties. Conditions apply." },
  { q: "Do landlords pay VAT on rental income?", a: "Commercial rental income is subject to VAT if turnover exceeds the threshold. Residential rental income is exempt from VAT. Mixed-use properties require apportionment." },
  { q: "What documents do I need for VAT registration?", a: "KRA PIN certificate, National ID or passport, business registration certificate (CR12 for companies), bank account details, and proof of business address." },
  { q: "How do I check my KRA PIN status?", a: "You can check your KRA PIN via the iTax portal (itax.kra.go.ke), SMS, or by visiting a Huduma Centre. Processing takes 1–3 working days." },
  { q: "Can I cancel my VAT registration?", a: "Yes. Deregistration is done via iTax using Form VAT 4. You must submit a final return and reconcile stock. KRA approval takes 4–8 weeks." },
  { q: "What is the VAT rate for restaurants in Kenya?", a: "Restaurants generally charge 16% VAT on food and beverage sales. Some basic foodstuffs may be zero-rated. Alcohol and premium beverages are standard rate." },
  { q: "Do I pay VAT on imported goods?", a: "Yes. Import VAT at 16% is charged at the point of entry on the CIF value plus duty and other levies. Payment is via SIMA, M-PESA Paybill, or bank." },
  { q: "What triggers a KRA VAT audit?", a: "Red flags include: nil returns for 6+ months, input VAT far exceeding output, large refund claims, industry-wide audits, and suppliers on the Special Table." },
  { q: "How do I object to a KRA VAT assessment?", a: "File an objection within 30 days of the assessment via iTax. Include grounds and supporting documents. KRA has 60 days to respond. Appeal to the TAT if unsuccessful." },
  { q: "What is the Finance Act 2025 VAT change?", a: "The Finance Act 2025 introduced amendments including threshold adjustments, reduced refund window to 12 months, fintech services taxed at 16%, and the 90:10 apportionment rule deletion." },
  { q: "How do I calculate VAT in Kenya?", a: "To add VAT: net price × 1.16. To extract VAT from a VAT-inclusive total: divide by 1.16. Use our free VAT calculator at smartvatkenya.co.ke/tools." },
  { q: "What is the difference between output VAT and input VAT?", a: "Output VAT is the VAT you charge on your sales. Input VAT is the VAT you pay on your purchases. Your net VAT payable = Output VAT minus Input VAT." },
  { q: "Can I claim VAT on imported services?", a: "Yes. VAT on imported services (reverse charge) can be claimed as input VAT if the services are used for taxable supplies. Proper documentation required." },
  { q: "What is the KRA Paybill for VAT payment?", a: "KRA M-PESA Paybill is 572572. Use your KRA PIN as the account number. Pay before the 20th of each month following the tax period." },
  { q: "Do I need a separate eTIMS device for each branch?", a: "It depends on the solution type. The eTIMS mobile app can be used for multiple branches. ERP-integrated businesses need proper configuration per location." },
  { q: "What records must I keep for VAT purposes?", a: "All sales and purchase invoices, eTIMS records, import documents, bank statements, VAT returns, and correspondence with KRA. Records must be kept for 5 years." },
  { q: "Can a non-resident company register for VAT in Kenya?", a: "Yes. Non-residents supplying digital services to Kenyan customers must register. They can use the simplified registration regime or appoint a tax representative." },
  { q: "What is the penalty for incorrect VAT returns?", a: "Knowingly submitting incorrect returns can result in penalties of up to 100% of the tax understated plus interest. KRA may also pursue criminal prosecution for fraud." },
  { q: "How do I change my VAT filing period?", a: "The standard VAT filing period is monthly. Some businesses may apply for quarterly filing. Contact KRA via iTax to request a change." },
  { q: "What happens to my VAT registration if I close my business?", a: "You must apply for VAT deregistration via Form VAT 4, file a final return, reconcile stock, and cancel eTIMS registration. KRA will issue a deregistration certificate." },
  { q: "Do I charge VAT on exports from Kenya?", a: "Exports of goods and services from Kenya are zero-rated (0%). This means you charge 0% VAT but can still claim input VAT on related costs." },
  { q: "How does the auto-populated VAT return work?", a: "KRA pre-fills your VAT return using eTIMS and withholding data. The data is often incomplete. You must review, correct, and file. Our monthly filing service handles this for KES 3,500/month." },
  { q: "What is the deadline for VAT payment in Kenya?", a: "VAT payment must be made by the 20th of the month following the tax period. This is the same as the filing deadline." },
  { q: "Can I deduct input VAT on a motor vehicle?", a: "Input VAT on passenger motor vehicles is generally restricted unless the vehicle is used for hire, transport, or is a commercial vehicle used directly in the business." },
  { q: "What is the VAT treatment of bad debts?", a: "You can claim bad debt relief on VAT previously accounted for on unpaid sales. The Finance Act 2025 reduced the relief period to 2 years, but the Finance Act 2026 increased it back to 3 years, effective 1 July 2026." },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "FAQ", item: "https://smartvatkenya.co.ke/resources/faq" },
  ],
}

const WA_BASE = "https://wa.me/254721725958"

/** Contextual internal links surfaced under the answer of any matching question. */
const ANSWER_LINKS: { match: RegExp; href: string; label: string }[] = [
  { match: /special table/i, href: "/resources/vat-special-table-risks/", label: "KRA VAT Special Table risks explained" },
  { match: /etims/i, href: "/resources/etims-onboarding-guide/", label: "eTIMS onboarding guide for Kenyan businesses" },
  { match: /penalt|late filing|waiver/i, href: "/resources/kra-penalty-for-late-vat-filing/", label: "KRA late VAT filing penalties and how to apply for a waiver" },
  { match: /register|registration|threshold/i, href: "/services/vat-registration/", label: "VAT registration service — KES 5,000 flat fee" },
  { match: /file|filing|return|deadline|paybill/i, href: "/services/monthly-vat-filing/", label: "Monthly VAT filing service — filed before the 20th" },
  { match: /rate|zero-rated|exempt/i, href: "/resources/vat-rates-kenya/", label: "Kenya VAT rates: standard, zero-rated and exempt" },
  { match: /input vat|refund|claim/i, href: "/resources/input-vat-deduction-guide/", label: "Input VAT deduction guide" },
  { match: /calculat|16%/i, href: "/tools/", label: "Free Kenya VAT calculator" },
]

function relatedLink(question: string, answer: string) {
  return ANSWER_LINKS.find((l) => l.match.test(question) || l.match.test(answer))
}

export default function FAQPage() {
  return (
    <div className="bg-canvas min-h-[100dvh]">
      <script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id="faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <div className="bg-canvas-dark px-6 lg:px-10 py-16">
        <div className="max-w-[880px] mx-auto">
          <p className="font-mono text-[0.67rem] uppercase tracking-[0.18em] text-canvas/50 mb-4">FAQ</p>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-canvas tracking-tight leading-tight mb-5 text-balance">
            Kenya VAT FAQ — 40+ Questions Answered
          </h1>
          <p className="text-[0.95rem] text-canvas/65 max-w-[54ch] leading-relaxed">
            Every question we get asked about Kenya VAT, answered in plain language.
            Based on the VAT Act Cap. 476 and current KRA practice. Updated for 2026.
          </p>
          <div className="mt-8">
            <RelatedLinks
              tone="dark"
              heading="Straight to the answer"
              links={[
                { href: "/services/vat-registration/", label: "VAT registration in Kenya — KES 5,000", description: "We handle iTax, Form VAT 1, and eTIMS onboarding in 1–3 working days." },
                { href: "/services/monthly-vat-filing/", label: "Monthly VAT filing — KES 3,500/month", description: "Returns filed on the 17th, before the KRA 20th deadline." },
                { href: "/tools/", label: "Free 16% VAT calculator", description: "VAT inclusive/exclusive amounts and KRA penalty estimates." },
                { href: "/resources/vat-rates-kenya/", label: "Kenya VAT rates 2026", description: "Standard, zero-rated, and exempt supplies compared." },
              ]}
            />
          </div>
        </div>
      </div>

      {/* FAQ list */}
      <div className="max-w-[880px] mx-auto px-6 lg:px-10 py-14">
        <div className="divide-y divide-hairline">
          {faqs.map((faq, i) => (
            <details key={i} className="group py-5">
              <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                <span className="font-display text-[0.95rem] font-semibold text-ink leading-snug group-open:text-brand transition-colors">
                  {faq.q}
                </span>
                <svg
                  className="w-4 h-4 shrink-0 mt-1 text-ink-muted group-open:rotate-180 transition-transform"
                  viewBox="0 0 16 16" fill="none" aria-hidden="true"
                >
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <div className="mt-4 pb-2">
                <p className="text-[0.88rem] text-ink-muted leading-relaxed">{faq.a}</p>
                {(() => {
                  const link = relatedLink(faq.q, faq.a)
                  return link ? (
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-1.5 mt-3 text-[0.82rem] font-medium text-brand hover:underline underline-offset-4"
                    >
                      {link.label}
                      <ArrowRight size={12} weight="bold" aria-hidden="true" />
                    </a>
                  ) : null
                })()}
              </div>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 border border-hairline rounded-lg p-8 text-center">
          <p className="font-display text-[1.05rem] font-semibold text-ink mb-2">
            Still have questions?
          </p>
          <p className="text-[0.85rem] text-ink-muted mb-5 max-w-[40ch] mx-auto leading-relaxed">
            Ask us on WhatsApp. We reply in minutes — and we don&apos;t charge for the first conversation.
          </p>
          <a
            href={`${WA_BASE}?text=Hi%2C%20I%20have%20a%20VAT%20question`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            Ask on WhatsApp <ArrowRight size={14} weight="bold" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
          <a href="/resources/" className="inline-flex items-center gap-2 text-ink-muted hover:text-ink text-sm font-medium transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> All Resources
          </a>
        </div>

        <div className="mt-10">
          <NewsletterSignup />
        </div>
      </div>
    </div>
  )
}
