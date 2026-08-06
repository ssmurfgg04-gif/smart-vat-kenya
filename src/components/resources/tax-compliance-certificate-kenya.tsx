import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { ArticleGrid } from "@/lib/resources"
import { Flowchart, TCCProcessFlow } from "@/components/flowcharts"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "KRA Tax Compliance Certificate (KRA Clearance Certificate)", item: "https://smartvatkenya.co.ke/resources/tax-compliance-certificate-kenya" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "KRA Tax Compliance Certificate Kenya 2026: How to Get Your TCC (KRA Clearance Certificate)",
  description:
    "Step-by-step guide to applying for a KRA Tax Compliance Certificate (TCC) in Kenya. Requirements, iTax process, eTIMS compliance rules, validity period, and common mistakes to avoid.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-27",
  dateModified: "2026-07-27",
  url: "https://smartvatkenya.co.ke/resources/tax-compliance-certificate-kenya",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/tax-compliance-certificate-kenya",
}

const faqs = [
  {
    q: "How much does a Tax Compliance Certificate cost in Kenya?",
    a: "A Tax Compliance Certificate (TCC) from KRA is completely free of charge. There is no fee to apply for or receive a TCC. The application is done online via the iTax portal at itax.kra.go.ke.",
  },
  {
    q: "How long does a TCC take to process?",
    a: "If you are fully compliant with all KRA requirements (returns filed, taxes paid, eTIMS registered), the TCC can be issued almost instantly through the iTax system. If there are issues such as missing returns, unpaid taxes, or eTIMS non-compliance, the process will take longer until you correct them.",
  },
  {
    q: "How long is a TCC valid for?",
    a: "A Tax Compliance Certificate is valid for 12 months from the date of issuance. You must re-apply after it expires. KRA recommends checking your TCC validity well before submitting it for tenders or licence renewals.",
  },
  {
    q: "Is eTIMS registration required for a TCC?",
    a: "Yes, for most businesses. KRA now requires businesses to be registered on eTIMS/TIMS before a TCC can be issued. This applies to all persons earning income other than employment income. If you run a business, you must be eTIMS compliant. If you have only employment income, this requirement does not apply to you.",
  },
  {
    q: "Can I get a TCC if I have outstanding tax debt?",
    a: 'Not immediately. Before a TCC can be issued, you must either settle all outstanding tax liabilities or have an approved payment plan in place with KRA. KRA\'s tax amnesty programme can help — it waives penalties and interest on voluntarily disclosed debt, leaving only the principal tax to pay. See our <a href="/resources/kra-tax-amnesty-2026/" class="underline underline-offset-2 font-medium text-brand">KRA Tax Amnesty 2026 guide</a> for how this works. Once resolved, you can proceed with the self-service TCC application on iTax.',
  },
  {
    q: "What documents do I need to apply for a TCC?",
    a: "No documents need to be uploaded. The TCC application on iTax pulls your compliance data automatically from KRA's systems. However, you must have your KRA PIN and iTax login credentials ready. The system checks your return filing status, payment history, eTIMS compliance, and VAT special table status automatically.",
  },
  {
    q: "What happens if my TCC application is rejected?",
    a: "The iTax system will tell you why the application was unsuccessful. Common reasons include missing returns, unpaid taxes, or eTIMS non-compliance. You need to fix the issue (file returns, pay taxes, register for eTIMS) and then re-apply. If you believe there is an error, visit your nearest KRA Tax Service Office or call the KRA Contact Centre at 0711 099 999.",
  },
  {
    q: "Do employees need a TCC?",
    a: "A TCC may be required when applying for a job. However, it is typically requested upon being offered the job, not during the initial application. Employees with only employment income do not need eTIMS registration for a TCC, but they must have filed all their returns and have no outstanding tax liabilities.",
  },
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

export default function TaxComplianceCertificateKenya() {
  return (
    <>
      <script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id="article-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script id="faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-[700px] mx-auto px-6 lg:px-10 py-12">
        <a href="/resources/" className="inline-flex items-center gap-2 text-ink-muted hover:text-ink text-sm font-medium mb-8 transition-colors">
          <ArrowLeft size={14} aria-hidden="true" /> All Resources
        </a>

        <article>
          <header className="mb-8">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand mb-3">Compliance Guide</p>
            <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-semibold text-ink tracking-tight leading-tight mb-3 text-balance">
              KRA Tax Compliance Certificate Kenya 2026: How to Get Your TCC (KRA Clearance Certificate)
            </h1>
            <p className="text-[0.9rem] text-ink-muted leading-relaxed">
              <time dateTime="2026-07-27">27 July 2026</time> &middot; Updated for enhanced TCC requirements
            </p>
          </header>

          <div className="prose prose-gray max-w-none">
            <h2>What Is a Tax Compliance Certificate (TCC)?</h2>
            <p>
              A <strong>Tax Compliance Certificate (TCC)</strong>, also known as a Tax Clearance Certificate, is an official document issued by the <strong>Kenya Revenue Authority (KRA)</strong> confirming that a taxpayer has filed all required returns and paid all taxes due. It serves as proof that your tax affairs are in order.
            </p>
            <p>
              The TCC is issued electronically via the <strong>iTax</strong> platform and is valid for <strong>12 months</strong> from the date of issuance. It is sent to the applicant's registered email address.
            </p>

            <Flowchart caption="TCC application process — filing, payment, and compliance checks before issuance">
              <TCCProcessFlow />
            </Flowchart>

            <h2>Who Needs a TCC?</h2>
            <p>You may need a Tax Compliance Certificate if you are:</p>
            <ul>
              <li>Applying for a <strong>government tender</strong> or public procurement opportunity</li>
              <li>Registering or renewing a <strong>business licence</strong></li>
              <li>Renewing a <strong>work permit</strong> for foreign employees</li>
              <li>Applying for a <strong>clearing and forwarding agent licence</strong></li>
              <li>Seeking a licence to operate a <strong>liquor store</strong></li>
              <li>Applying for a <strong>job</strong> (TCC is requested upon being offered the position)</li>
              <li>Dealing with <strong>regulators, banks, or partners</strong> who require compliance proof</li>
              <li>Going through <strong>due diligence</strong> during investments or partnerships</li>
            </ul>

            <h2>Requirements for a TCC in 2026</h2>
            <p>KRA has enhanced the TCC application process. To qualify, you must meet all of the following conditions:</p>
            <ol>
              <li><strong>File all tax returns on time</strong> — Income tax, VAT, PAYE, and turnover tax returns must be filed by their respective due dates. Late or missing returns will block your TCC.</li>
              <li><strong>Pay all taxes due</strong> — Clear all outstanding tax liabilities. If you cannot pay in full, you must have an approved payment plan in place before the TCC can be issued.</li>
              <li><strong>Be eTIMS compliant</strong> — If you earn business income, you must be registered on eTIMS/TIMS and issuing electronic tax invoices. This is now a mandatory requirement.</li>
              <li><strong>Be VAT compliant</strong> — If you are VAT-registered, you must have filed all VAT returns and your VAT special table status must be clean.</li>
            </ol>
            <p>The TCC application is done through the <strong>iTax portal</strong>. Navigate to Certificates → Tax Compliance Certificate → Apply. The system checks your compliance status automatically and issues the certificate if you meet all requirements.</p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-6">
              <p className="text-sm font-semibold text-blue-900 mb-1">Important: eTIMS Requirement</p>
              <p className="text-sm text-blue-800 leading-relaxed">
                Since October 2025, KRA has required businesses to be registered on eTIMS before a TCC can be issued. This applies to all companies, sole proprietors, partnerships, and individuals earning business income. If you are not yet eTIMS compliant, your TCC application will be delayed or rejected. <a href="/resources/etims-onboarding-guide/" className="text-blue-700 font-medium hover:underline">Learn how to register for eTIMS →</a>
              </p>
            </div>

            <h2>Step-by-Step: How to Apply for a TCC on iTax</h2>
            <ol>
              <li><strong>Log in</strong> to the KRA iTax portal at <a href="https://itax.kra.go.ke" target="_blank" rel="noopener noreferrer">itax.kra.go.ke</a> using your KRA PIN and password</li>
              <li><strong>Navigate</strong> to Certificates → Tax Compliance Certificate → Apply</li>
              <li><strong>Review your details</strong> — The system displays your compliance status. Verify that all information is correct</li>
              <li><strong>Submit your application</strong> — Click apply. The system processes your request automatically</li>
              <li><strong>Download your TCC</strong> — If compliant, the TCC is issued instantly. You can download it from the portal. It is also sent to your registered email address</li>
            </ol>
            <p className="text-sm text-ink-muted italic mt-2">If your application is unsuccessful, the system will indicate the reason. You must resolve the issue (file outstanding returns, pay taxes, register for eTIMS) and re-apply.</p>

            <h2>How to Check if Your TCC Is Valid</h2>
            <p>You can verify the validity of a Tax Compliance Certificate using the <strong>KRA Certificate Checker</strong> on the iTax portal. This allows you to confirm whether a certificate is genuine, active, and within its 12-month validity period.</p>
            <p>You can also check your TCC status using the <strong>KRA M-Service App</strong> available on mobile.</p>

            <h2>Common Reasons for TCC Rejection</h2>
            <ul>
              <li><strong>Missing tax returns</strong> — One or more returns have not been filed. File them immediately and re-apply. This includes <strong>nil returns</strong>: an unfiled nil return from a year with zero income still blocks your TCC. See our <a href="/resources/nil-returns-tax-amnesty/" className="text-brand underline underline-offset-2 hover:text-brand-hover">nil returns guide</a> if you have missing years</li>
              <li><strong>Unpaid tax balances</strong> — Outstanding principal tax needs to be settled or covered by an approved payment plan. If the balance is old (pre-2026) debt with penalties and interest on top, the <a href="/resources/kra-tax-amnesty-2026/" className="text-brand underline underline-offset-2 hover:text-brand-hover">KRA tax amnesty 2026</a> can waive those penalties — you pay the principal and clear the ledger before re-applying</li>
              <li><strong>eTIMS non-compliance</strong> — Your business is not registered on eTIMS. Register first, then apply</li>
              <li><strong>VAT special table issues</strong> — If you are on the VAT special table, your status must be compliant</li>
              <li><strong>Incorrect taxpayer details</strong> — Your KRA PIN or business registration details may need updating</li>
            </ul>

            <h2>How Smart VAT Kenya Can Help</h2>
            <p>We help businesses get their Tax Compliance Certificates quickly and hassle-free. Our services include:</p>
            <ul>
              <li>Compliance health check — we review your returns, payments, and eTIMS status</li>
              <li>eTIMS registration and setup guidance</li>
              <li>Missing return filing assistance</li>
              <li>Payment plan application support</li>
              <li>Full VAT registration and compliance services</li>
            </ul>
            <p>
              <a href="/services/vat-registration/" className="text-brand font-medium hover:underline inline-flex items-center gap-1">
                Start with VAT registration — the first step to full compliance <ArrowRight size={14} aria-hidden="true" />
              </a>
            </p>
          </div>
        </article>

        <div className="mt-12 border-t border-border pt-8">
          <h2 className="font-display text-xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-border rounded-lg">
                <summary className="list-none flex items-start gap-3 p-4 cursor-pointer">
                  <span className="text-brand shrink-0 mt-0.5">
                    <Info size={16} weight="bold" />
                  </span>
                  <span className="text-sm font-medium text-ink">{faq.q}</span>
                </summary>
                <div className="px-4 pb-4 pt-0">
                  <p className="text-sm text-ink-muted leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
                </div>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <ArticleGrid currentSlug="tax-compliance-certificate-kenya" />
        </div>
      </div>
      <NewsletterSignup />
    </>
  )
}
