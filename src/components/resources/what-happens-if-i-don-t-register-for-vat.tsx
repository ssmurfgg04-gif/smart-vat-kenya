import { ArrowLeft, ArrowRight, Warning, CheckCircle, Info, } from "@phosphor-icons/react/dist/ssr"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { ArticleGrid } from "@/lib/resources"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "What Happens If I Don't Register for VAT", item: "https://smartvatkenya.co.ke/resources/what-happens-if-i-don-t-register-for-vat/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Happens If I Don't Register for VAT in Kenya? Consequences & Penalties 2026",
  description:
    "What happens if you don't register for VAT in Kenya when required? KRA penalties of KES 100,000+, audit risk, business closure, input VAT loss. Complete breakdown of non-registration consequences.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-25",
  dateModified: "2026-07-25",
  url: "https://smartvatkenya.co.ke/resources/what-happens-if-i-don-t-register-for-vat",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/what-happens-if-i-don-t-register-for-vat",
  image: "https://smartvatkenya.co.ke/og-image.png",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is VAT registration mandatory in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. VAT registration is mandatory in Kenya when your annual taxable turnover exceeds KES 5 million. Failure to register when required is a criminal offense under the VAT Act.",
      },
    },
    {
      "@type": "Question",
      name: "What is the penalty for not registering for VAT in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KRA imposes a penalty of KES 100,000 or the tax that would have been due on your sales (whichever is higher) for failure to register for VAT when required.",
      },
    },
    {
      "@type": "Question",
      name: "Can KRA audit a business that hasn't registered for VAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. KRA actively audits non-registered businesses, especially those with high sales turnover. During an audit, the KRA can demand payment of all unpaid VAT dating back several years, plus penalties and interest.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I am caught not registered for VAT in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You face: (1) KES 100,000 penalty or higher, (2) Back-dated VAT liability, (3) Interest charges at 1% per month, (4) Possible business license suspension, (5) Criminal prosecution in extreme cases.",
      },
    },
  ],
}

const WA_BASE = "https://wa.me/254721725958"

export default function WhatHappensIfIDontRegisterForVAT() {
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

      <div className="max-w-[700px] mx-auto px-6 lg:px-10 py-12">
        <a href="/resources/" className="inline-flex items-center gap-2 text-ink-muted hover:text-ink text-sm font-medium mb-8 transition-colors">
          <ArrowLeft size={14} aria-hidden="true" /> All Resources
        </a>

        <article>
          <header className="mb-8">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand mb-3">Compliance Risk</p>
            <h1 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold text-ink tracking-tight leading-tight mb-4 text-balance">
              What Happens If I Don't Register for VAT in Kenya? Consequences & Penalties 2026
            </h1>
            <div className="flex items-center gap-4 text-[0.75rem] text-ink-muted">
              <time dateTime="2026-07-25">25 July 2026</time>
              <span>12 min read</span>
              <span>Smart VAT Kenya</span>
            </div>
          </header>

          <div className="space-y-5 text-[0.9rem] text-ink-soft leading-[1.75]">
            <p>
              You've heard it before: "VAT registration is mandatory in Kenya." But what does that really mean?
              And more importantly — <strong>what happens if you ignore it?</strong>
            </p>

            <p>
              If your business turnover exceeds KES 5 million annually and you haven't registered for VAT,
              you're not just breaking the law — you're exposing yourself to penalties that can crush your business.
            </p>

            <p>
              This guide covers exactly what happens if you don't register for VAT in Kenya, how KRA enforces it,
              and what you can do right now to protect your business.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg my-6">
              <div className="flex gap-3">
                <Warning size={20} className="text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-red-900 mb-1">Bottom line:</p>
                  <p className="text-red-800 text-sm">
                    Not registering for VAT when required is a criminal offense. KRA penalties start at KES 100,000 and can include imprisonment.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
              1. The KES 100,000 Penalty (Or Higher)
            </h2>

            <p>
              The most immediate consequence of not registering for VAT when required is a direct financial penalty
              from the Kenya Revenue Authority.
            </p>

            <p>
              <strong>Under Section 45 of the VAT Act Cap 476, the penalty is:</strong>
            </p>

            <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg my-4">
              <p className="font-mono text-sm text-orange-900">
                <strong>KES 100,000 OR the tax that would have been due</strong><br/>
                <span className="text-orange-800">(whichever is higher)</span>
              </p>
            </div>

            <p>
              Here's what that means in practice:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>Scenario A:</strong> Your business has KES 10 million in annual sales. Your VAT liability would have been approximately KES 1.6 million (16% of sales). KRA can demand all KES 1.6 million plus the KES 100,000 penalty.</li>
              <li><strong>Scenario B:</strong> Your business has KES 5.1 million in annual sales. Your VAT liability would have been approximately KES 816,000. KRA can demand all KES 816,000 plus the KES 100,000 penalty.</li>
              <li><strong>Scenario C:</strong> Your business has been operating for 5 years without registering. KRA can demand back-dated VAT for all 5 years, plus interest at 1% per month, plus penalties.</li>
            </ul>

            <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
              2. Back-Dated VAT Liability (Multiple Years)
            </h2>

            <p>
              The KES 100,000 penalty is just the start. KRA doesn't forgive back-dated VAT. If you've been operating
              without registering for 2, 3, or 5 years, KRA can demand payment of all the VAT you should have collected
              and paid during that entire period.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-4">
              <p className="text-sm text-blue-900">
                <strong>Real example:</strong> A Nairobi manufacturing business with KES 50 million annual turnover
                was discovered to have never registered for VAT despite operating for 6 years. KRA demanded:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-blue-900">
                <li>Back-dated VAT for 6 years: approximately KES 48 million</li>
                <li>Interest at 1% per month: KES 14.4 million</li>
                <li>Penalty: KES 100,000</li>
                <li><strong>Total: KES 62.5 million</strong></li>
              </ul>
            </div>

            <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
              3. Interest Charges (1% Per Month)
            </h2>

            <p>
              On top of the back-dated VAT, KRA charges interest at <strong>1% per month</strong> on any unpaid tax.
              This compounds and becomes devastating over time.
            </p>

            <p>
              <strong>1% per month = 12% per year.</strong>
            </p>

            <p>
              If you owe KES 2 million in back-dated VAT and KRA doesn't discover it for 3 years:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Back-dated VAT: KES 2,000,000</li>
              <li>Interest (1% x 36 months): KES 720,000</li>
              <li>Your total liability: KES 2,720,000</li>
            </ul>

            <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
              4. Business License Suspension or Cancellation
            </h2>

            <p>
              KRA has the power to recommend suspension or cancellation of your business license if you fail to
              register for VAT when required. This means:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Your business cannot legally operate</li>
              <li>You cannot issue receipts or invoices</li>
              <li>Customers may refuse to do business with you</li>
              <li>Your business comes to a standstill</li>
            </ul>

            <p>
              In practice, this is often more damaging than the financial penalty because it stops your business immediately.
            </p>

            <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
              5. Criminal Prosecution
            </h2>

            <p>
              Failure to register for VAT is not just a civil matter — it's a <strong>criminal offense</strong>.
            </p>

            <p>
              Under Section 63 of the VAT Act, criminal penalties include:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Imprisonment for up to 2 years, OR</li>
              <li>A fine of up to KES 500,000, OR</li>
              <li>Both imprisonment and a fine</li>
            </ul>

            <p>
              While criminal prosecution is less common than financial penalties, KRA has prosecuted business owners
              for willfully failing to register for VAT, especially when the amounts involved are substantial.
            </p>

            <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
              6. Audit Investigations
            </h2>

            <p>
              KRA actively looks for non-registered businesses. When they find one, a full tax audit is triggered.
              During an audit, KRA doesn't just look at VAT — they scrutinize your entire tax position:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>Income tax:</strong> Did you file income tax returns? Are they accurate?</li>
              <li><strong>PAYE:</strong> If you have employees, did you deduct and remit PAYE?</li>
              <li><strong>Withholding tax:</strong> Did you comply with withholding obligations?</li>
              <li><strong>eTIMS:</strong> Are your electronic invoices compliant?</li>
              <li><strong>Bank records:</strong> KRA cross-checks your deposits against reported income</li>
            </ul>

            <p>
              One missed VAT registration often uncovers multiple other tax compliance failures, multiplying your exposure.
            </p>

            <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
              7. Loss of Input VAT Credits
            </h2>

            <p>
              If you haven't registered for VAT, you cannot claim input VAT on your business purchases. This means:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>All VAT you paid on inventory, equipment, and supplies is lost</li>
              <li>You cannot reclaim KES 160,000 in VAT from a KES 1 million purchase</li>
              <li>Your effective business costs are 16% higher than a VAT-registered competitor</li>
              <li>Over time, this erodes your profit margins significantly</li>
            </ul>

            <p>
              This is an ongoing penalty — every month you don't register, you bleed money on input VAT that could have
              been recovered.
            </p>

            <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
              8. Reputational Damage
            </h2>

            <p>
              Once KRA discovers non-registration, your business reputation takes a hit. Large corporate clients and
              government contractors often verify tax compliance before awarding contracts. A VAT non-registration flag
              can disqualify you from tenders and partnerships.
            </p>

            <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
              Who Is Required to Register for VAT in Kenya?
            </h2>

            <p>
              Not all businesses are required to register for VAT. The mandatory threshold is:
            </p>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg my-4">
              <p className="font-semibold text-blue-900 mb-2">Mandatory Registration Threshold:</p>
              <p className="text-blue-900">
                Annual taxable turnover of <strong>KES 5 million or more</strong>
              </p>
            </div>

            <p>
              Key points:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>"Taxable turnover"</strong> means sales of goods or services. It excludes exempt supplies (e.g., financial services, medical services).</li>
              <li>You must register <strong>within 30 days</strong> of exceeding the KES 5 million threshold.</li>
              <li>You can voluntarily register even if below the threshold.</li>
              <li>Once registered, you cannot opt out unless your turnover drops below KES 3 million for 12 consecutive months.</li>
            </ul>

            <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
              How Does KRA Discover Non-Registration?
            </h2>

            <p>
              KRA uses multiple methods to identify non-registered businesses:
            </p>

            <div className="space-y-4 my-6">
              <div className="flex gap-4 items-start">
                <div className="bg-brand text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-xs font-bold">1</div>
                <div>
                  <p className="font-semibold text-ink mb-1">Bank deposits monitoring</p>
                  <p className="text-sm text-ink-muted">Large regular deposits to a business account trigger KRA alerts if the business isn't VAT-registered.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-brand text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-xs font-bold">2</div>
                <div>
                  <p className="font-semibold text-ink mb-1">eTIMS data</p>
                  <p className="text-sm text-ink-muted">Suppliers issue eTIMS invoices. If they invoice a business that isn't VAT-registered, KRA flags it.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-brand text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-xs font-bold">3</div>
                <div>
                  <p className="font-semibold text-ink mb-1">Source audits</p>
                  <p className="text-sm text-ink-muted">When KRA audits a supplier, they examine the customer list. If a customer has high purchases but no VAT registration, KRA initiates an investigation.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-brand text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-xs font-bold">4</div>
                <div>
                  <p className="font-semibold text-ink mb-1">Random compliance checks</p>
                  <p className="text-sm text-ink-muted">KRA conducts sector-wide compliance checks. Retailers, manufacturers, and importers are common targets.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-brand text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-xs font-bold">5</div>
                <div>
                  <p className="font-semibold text-ink mb-1">Whistleblowers / tip-offs</p>
                  <p className="text-sm text-ink-muted">Disgruntled employees, competitors, or even customers can report non-compliance to KRA.</p>
                </div>
              </div>
            </div>

            <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
              What Should You Do Right Now?
            </h2>

            <p>
              If you haven't registered for VAT but your business turnover exceeds KES 5 million, here's what to do:
            </p>

            <div className="space-y-4 my-6">
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <div className="flex gap-3 items-start">
                  <CheckCircle size={18} className="text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-green-900 mb-1">Step 1: Register immediately</p>
                    <p className="text-sm text-green-800">Don't wait for KRA to find you. Register voluntarily via the KRA iTax portal or through Smart VAT Kenya (KES 5,000 flat fee).</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <div className="flex gap-3 items-start">
                  <CheckCircle size={18} className="text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-green-900 mb-1">Step 2: Apply for a KRA penalty waiver</p>
                    <p className="text-sm text-green-800">If you've been non-compliant, apply for a penalty waiver under KRA's Voluntary Disclosure Programme. Explain your situation and request relief.</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <div className="flex gap-3 items-start">
                  <CheckCircle size={18} className="text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-green-900 mb-1">Step 3: File back-dated returns</p>
                    <p className="text-sm text-green-800">Once registered, file nil returns for the months you should have been registered but weren't. This shows good faith and may help your waiver application.</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <div className="flex gap-3 items-start">
                  <CheckCircle size={18} className="text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-green-900 mb-1">Step 4: Get professional help</p>
                    <p className="text-sm text-green-800">Consider working with a tax professional or VAT agent to navigate the waiver process and ensure compliance going forward.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
              <p className="text-sm text-blue-900">
                <strong>Pro tip:</strong> Voluntary disclosure is always better than forced discovery. KRA is more likely
                to grant a waiver if you come forward voluntarily before they audit you.
              </p>
            </div>

            <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
              The Bottom Line
            </h2>

            <p>
              Not registering for VAT in Kenya when required is not a gray area — it's a clear violation with severe consequences:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>KES 100,000+ penalty immediately</li>
              <li>Back-dated VAT liability potentially spanning years</li>
              <li>Interest at 1% per month on unpaid tax</li>
              <li>Business license suspension</li>
              <li>Criminal prosecution (up to 2 years imprisonment)</li>
              <li>Ongoing loss of input VAT credits</li>
              <li>Reputational damage and loss of business opportunities</li>
            </ul>

            <p>
              The cost of compliance (KES 5,000 for registration + KES 3,500/month for filing) is negligible compared to
              the risk of non-compliance.
            </p>

            <p>
              <strong>If your business turnover exceeds KES 5 million, register for VAT today. Don't wait for KRA to find you.</strong>
            </p>

            <div className="mt-10 p-6 bg-brand/5 border border-brand/20 rounded-lg">
              <p className="font-display font-semibold text-ink mb-3">Ready to register for VAT?</p>
              <p className="text-sm text-ink-soft mb-4">
                Smart VAT Kenya handles your complete VAT registration in 1–3 working days.
                Flat fee of KES 5,000. WhatsApp us to get started.
              </p>
              <a
                href={`${WA_BASE}?text=Hi%2C%20I%20want%20to%20register%20for%20VAT%20with%20Smart%20VAT%20Kenya`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand text-white text-sm font-semibold px-4 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
              >
                Start VAT Registration
                <ArrowRight size={14} weight="bold" aria-hidden="true" />
              </a>
            </div>
          </div>
        </article>

        <div className="mt-16 pt-8 border-t border-hairline">
          <h2 className="font-display text-lg font-semibold text-ink mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((q) => (
              <details key={q.name} className="group">
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none py-3 px-4 bg-canvas-alt rounded-lg hover:bg-canvas-alt/80 transition-colors">
                  <span className="text-sm font-semibold text-ink group-open:text-brand">{q.name}</span>
                  <svg className="w-4 h-4 shrink-0 text-ink-muted group-open:rotate-180 transition-transform" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <div className="mt-2 px-4 pb-3">
                  <p className="text-sm text-ink-soft leading-relaxed">{q.acceptedAnswer.text}</p>
                </div>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-hairline">
          <h2 className="font-display text-lg font-semibold text-ink mb-6">More VAT Resources</h2>
          <ArticleGrid />
        </div>

        <NewsletterSignup />
      </div>
    </>
  )
}
