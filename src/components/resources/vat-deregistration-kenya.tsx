import { ArrowLeft, ArrowRight, Warning, CheckCircle, Info } from "@phosphor-icons/react/dist/ssr"
import { NewsletterSignup } from "@/components/newsletter-signup"

import { ArticleGrid } from "@/lib/resources"

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "VAT Deregistration Kenya 2026: How to Cancel Your VAT Registration",
  description:
    "Complete guide to VAT deregistration in Kenya. When can you cancel your VAT registration, the KRA process, Form VAT 4, final return requirements, and what happens to input VAT on deregistration.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-26",
  dateModified: "2026-07-26",
  url: "https://smartvatkenya.co.ke/resources/vat-deregistration-kenya",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/vat-deregistration-kenya",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "VAT Deregistration Kenya 2026", item: "https://smartvatkenya.co.ke/resources/vat-deregistration-kenya/" },
  ],
}

export default function VatDeregistrationPost() {
  return (
    <div className="max-w-[700px] mx-auto px-6 lg:px-10 py-12">
      <script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id="article-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <a href="/resources/" className="inline-flex items-center gap-2 text-ink-muted hover:text-ink text-sm font-medium mb-8 transition-colors">
        <ArrowLeft size={14} aria-hidden="true" /> All Resources
      </a>

      <article>
        <header className="mb-8">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand mb-3">Compliance Guide</p>
          <h1 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold text-ink tracking-tight leading-tight mb-4 text-balance">
            VAT Deregistration Kenya 2026: How to Cancel Your VAT Registration
          </h1>
          <div className="flex items-center gap-4 text-[0.75rem] text-ink-muted">
            <time dateTime="2026-07-26">26 July 2026</time>
            <span>8 min read</span>
            <span>Smart VAT Kenya</span>
          </div>
        </header>

        <div className="space-y-5 text-[0.9rem] text-ink-soft leading-[1.75]">
          <p>
            If your business no longer meets the VAT registration threshold, you are closing down, or you
            simply no longer wish to be VAT-registered, you need to go through the KRA VAT deregistration
            process. Cancelling your VAT registration is not as simple as stopping your filings — there are
            specific forms, final returns, stock adjustments, and eTIMS deactivation steps that must be
            completed in order.
          </p>
          <p>
            This guide covers everything you need to know about VAT deregistration in Kenya: the qualifying
            conditions, the iTax procedure, Form VAT 4, final return obligations, involuntary deregistration
            by KRA, and how to re-register later if your circumstances change.
          </p>

          <div className="border border-brand/25 bg-brand-muted rounded-lg p-4 flex items-start gap-3">
            <Info size={17} weight="fill" className="text-brand shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-ink text-[0.9rem]">Key takeaway</p>
              <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                VAT deregistration requires KRA approval. You cannot simply stop filing returns. The
                process takes 4–8 weeks and includes a final VAT return, stock reconciliation, and
                eTIMS cancellation.
              </p>
            </div>
          </div>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            When Can You Deregister for VAT in Kenya?
          </h2>
          <p>
            Under the VAT Act, 2013 (Section 34) and the VAT Regulations, a person registered for VAT may
            apply for cancellation of registration in the following circumstances:
          </p>
          <ul className="space-y-1.5">
            {[
              "Your taxable turnover falls below KES 5 million per year (or KES 8 million if you registered under the higher threshold introduced by the Finance Act 2025 — though this increase has not yet taken effect as of July 2026).",
              "You have permanently ceased to carry on business — this includes closure, insolvency, or retirement.",
              "Your business structure has changed — for example, you converted from a sole proprietorship to a company, or you merged with another entity.",
              "You wish to deregister voluntarily (for example, you are below the threshold and do not expect to exceed it again).",
              "The business has been sold or transferred to another person.",
              "The sole proprietor has passed away."
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Crucially, KRA must approve your deregistration application. You cannot simply stop filing
            returns and assume your registration has lapsed — if you do, you will continue accruing
            late-filing penalties and the eTIMS non-compliance exposure (TPA s.86: the higher of 5% of the tax due, KES 100,000 for companies, or KES 10,000 for individuals).
          </p>

          <div className="border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800/40 rounded-lg p-4 flex items-start gap-3">
            <Warning size={17} weight="fill" className="text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-ink text-[0.9rem]">Do not just stop filing</p>
              <p className="text-[0.83rem] text-amber-700 dark:text-amber-400 leading-relaxed">
                A common mistake is assuming that if you stop trading, your VAT registration
                automatically ends. It does not. You remain registered and obligated to file returns
                and issue eTIMS invoices until KRA formally approves your deregistration.
              </p>
            </div>
          </div>

          <p>
            If you are unsure whether you should remain registered, see our{" "}
            <a href="/resources/do-i-need-to-register-for-vat-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">guide on whether you need to register for VAT</a>{" "}
            to review the threshold rules before applying for cancellation.
          </p>
          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            The VAT Deregistration Process
          </h2>
          <p>
            The VAT deregistration process is handled entirely through the iTax portal. Here is the
            step-by-step procedure:
          </p>
          <ol className="space-y-2">
            {[
              "Log in to iTax and navigate to the VAT menu. Select 'Application for VAT Deregistration' (Form VAT 4).",
              "Complete the form with your business and personal details, reason for deregistration, and the proposed effective date.",
              "Attach any required supporting documents, such as a letter explaining the reason, a certificate of closure (if applicable), or a sale agreement (if the business was sold).",
              "Submit the application. KRA will issue a confirmation of receipt, and an officer will be assigned to review your case.",
              "File your final VAT return up to the date of deregistration. This return must account for all output VAT on stock on hand and any input VAT clawback on capital goods.",
              "Complete a stock reconciliation if required by the KRA officer.",
              "Cancel your eTIMS registration once deregistration is approved.",
              "Wait for the official deregistration certificate from KRA. This typically takes 4–8 weeks."
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-semibold text-brand shrink-0 w-5">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <p>
            KRA may ask for additional documentation depending on the reason for deregistration. For
            example, if you are deregistering because of business closure, they may request a notice of
            intention to close or proof that employees have been notified. If the business was sold, a
            copy of the sale agreement will be required.
          </p>
          <p>
            The processing time varies. Simple applications where all returns have been filed and no tax
            is outstanding can be processed in as little as two weeks. Complicated applications involving
            stock reconciliations, input VAT clawback calculations, or outstanding tax disputes can take
            eight weeks or more.
          </p>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            Form VAT 4: What You Need to Submit
          </h2>
          <p>
            Form VAT 4 is the official application for VAT deregistration in Kenya. It is available on the
            iTax portal under the VAT returns and applications section. The form requires the following
            information:
          </p>
          <ul className="space-y-1.5">
            {[
              "KRA PIN and registered business name.",
              "Contact details — postal address, email, phone number, and physical location.",
              "VAT registration number (the 9-digit number assigned when you registered).",
              "Reason for deregistration — select from the dropdown options (turnover below threshold, ceased trading, change of business structure, voluntary, or other).",
              "Proposed effective date of deregistration — this should be the date from which you want the cancellation to take effect.",
              "Declaration that all outstanding VAT returns have been filed and all taxes paid.",
              "Details of any VAT refunds claimed or pending.",
              "Stock on hand and capital goods held at the date of deregistration."
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            You must also upload supporting documents depending on your reason for deregistration. A
            cover letter explaining the circumstances is strongly recommended — it speeds up the review
            process by giving the KRA officer a clear picture of your situation.
          </p>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            Final VAT Return and Stock Adjustments
          </h2>
          <p>
            One of the most important — and most often overlooked — steps in VAT deregistration is the
            final VAT return. This return must cover the period up to the effective date of deregistration
            and must include special adjustments that a normal monthly return does not:
          </p>
          <p className="font-semibold text-ink">Output VAT on stock on hand</p>
          <p>
            When you deregister, you are deemed to have made a taxable supply of all goods held as stock
            on the date of deregistration. This is called a "deemed supply" under Section 20(1) of the VAT
            Act. You must account for output VAT on the value of that stock, calculated at the standard
            rate of 16%.
          </p>
          <p>
            The value of the deemed supply is the open market value of the goods. If you purchased the
            goods and claimed input VAT on them, the output VAT on deregistration effectively claws back
            that input VAT. This prevents a situation where a business claims input VAT on purchases and
            then deregisters without ever selling the goods.
          </p>
          <p className="font-semibold text-ink">Input VAT clawback on capital goods</p>
          <p>
            If you claimed input VAT on capital goods (such as machinery, vehicles, or equipment) within
            the five years preceding deregistration, you may need to repay a portion of that input VAT.
            This is known as the input VAT clawback or capital goods adjustment.
          </p>
          <p>
            The clawback is calculated on a straight-line basis over five years. For example, if you
            claimed KES 100,000 in input VAT on a machine two years ago, you would need to repay 3/5 of
            that amount (KES 60,000) on deregistration.
          </p>
          <p className="font-semibold text-ink">Deemed supply rules</p>
          <p>
            The deemed supply rules apply not only to stock but also to:
          </p>
          <ul className="space-y-1.5">
            {[
              "Goods held for use in the business (including fixed assets).",
              "Goods that were acquired without input VAT having been claimed but are now subject to output VAT.",
              "Goods that have been written off or disposed of without a VAT invoice."
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-ink-muted shrink-0 mt-1">–</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Some goods are excluded from the deemed supply rules, including goods supplied under a
            hire-purchase agreement, goods on consignment, and certain agricultural products. If you are
            unsure whether your stock is subject to deemed supply, consult a tax professional before
            filing the final return.
          </p>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            What Happens to Your eTIMS Registration?
          </h2>
          <p>
            Once KRA approves your VAT deregistration, your eTIMS registration must also be cancelled.
            This is not automatic — you need to apply separately for eTIMS deactivation.
          </p>
          <p>
            The eTIMS cancellation process involves:
          </p>
          <ul className="space-y-1.5">
            {[
              "Notifying KRA through the eTIMS portal that you no longer require the system.",
              "Returning or deactivating your eTIMS device (if you use a dedicated eTIMS device rather than the mobile app or web portal).",
              "Deactivation of your QR code — your customers will no longer be able to scan and verify your invoices.",
              "Confirmation that no eTIMS invoices are pending transmission to KRA."
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="font-semibold text-ink">Record retention after deregistration</p>
          <p>
            Even after your eTIMS registration is cancelled, you are required to retain all tax records
            — including eTIMS invoices, VAT returns, and supporting documents — for a period of five
            years from the end of the tax year to which they relate. This is a legal requirement under
            Section 43 of the VAT Act and applies even after your VAT registration has been cancelled.
          </p>
          <p>
            KRA may audit your records after deregistration if they suspect irregularities. Keeping your
            records accessible for the full five-year period is your best protection.
          </p>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            Can KRA Deregister You Involuntarily?
          </h2>
          <p>
            Yes. KRA has the power to cancel a VAT registration without the taxpayer's application in
            certain circumstances. This is known as involuntary or compulsory deregistration.
          </p>
          <p>KRA may deregister you involuntarily if:</p>
          <ul className="space-y-1.5">
            {[
              "You have failed to file VAT returns for twelve consecutive months or more.",
              "The business has permanently ceased operations and KRA is aware of the cessation.",
              "The sole proprietor has died and no legal representative has taken over the business.",
              "The business has been deregistered under the Companies Act or other relevant legislation.",
              "KRA determines that the registration was obtained fraudulently or through misrepresentation."
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <Warning size={14} className="text-amber-600 shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Before KRA deregisters you involuntarily, they are required to notify you in writing and give
            you an opportunity to show cause why the registration should not be cancelled. If you receive
            such a notice, you should respond promptly — either by filing outstanding returns or by
            demonstrating that you are still carrying on business.
          </p>
          <p>
            Involuntary deregistration does not extinguish any tax liability. KRA can still collect
            outstanding VAT, penalties, and interest even after your registration is cancelled. In fact,
            once deregistered, any VAT charged on invoices you issue (which you should not be issuing)
            becomes illegally collected tax, and you could face criminal penalties.
          </p>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">
            Re-registering for VAT After Deregistration
          </h2>
          <p>
            If your circumstances change after deregistration and you again meet the VAT registration
            threshold, you can re-register. The process is the same as registering for the first time —
            you submit an application through iTax with your business details and turnover projections.
          </p>
          <p>
            There is no mandatory waiting period before you can re-register. However:
          </p>
          <ul className="space-y-1.5">
            {[
              "If you deregistered voluntarily because your turnover fell below the threshold, you must re-register as soon as your turnover exceeds KES 5 million (or KES 8 million if the proposed higher threshold takes effect).",
              "If you were deregistered involuntarily for non-compliance, KRA may scrutinise your re-registration application more closely.",
              "You will need to apply for a new eTIMS registration and obtain a new QR code.",
              "Your old VAT registration number will not be reinstated — you will receive a new one."
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            If your turnover is fluctuating around the threshold, consider whether voluntary deregistration
            is the right choice. Re-registering is straightforward, but the administrative burden of the
            registration-deregistration-re-registration cycle can be significant. Some businesses choose
            to remain registered even when their turnover dips below the threshold, especially if they
            expect to exceed it again soon. For a step-by-step guide on the original registration process,
            see our{" "}
            <a href="/resources/how-to-register-for-vat-in-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">VAT registration guide</a>.
          </p>

          <div className="border border-brand/25 bg-brand-muted rounded-lg p-5 mt-8">
            <p className="font-semibold text-ink text-[0.9rem] mb-1">
              Need help with VAT deregistration?
            </p>
            <p className="text-[0.83rem] text-ink-muted mb-3">
              Closing your business or restructuring? We handle VAT deregistration applications,
              final return preparation, stock reconciliation, and eTIMS cancellation for KES 4,000.
            </p>
            <a href="https://wa.me/254717344440?text=I%20need%20help%20with%20VAT%20deregistration"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-4 py-2.5 rounded-md hover:bg-brand-hover transition-colors">
              Ask Us on WhatsApp <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
          </div>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">Related Resources</h2>
          <ul className="space-y-2">
            {[
              ["How to Register for VAT in Kenya", "/resources/how-to-register-for-vat-in-kenya/", "Step-by-step iTax registration guide"],
              ["Do I Need to Register for VAT in Kenya?", "/resources/do-i-need-to-register-for-vat-kenya/", "Threshold analysis, voluntary registration, and penalties for non-registration"],
              ["KRA VAT Penalties Reference", "/resources/kra-vat-penalties-reference/", "Complete penalty table including late-filing, late-payment, and eTIMS penalties"],
            ].map(([title, slug, desc]) => (
              <li key={slug}>
                <a href={slug} className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  {title}
                </a>
                <span className="text-ink-muted"> — {desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>

              {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="vat-deregistration-kenya" />
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

      <div className="mt-8">
        <NewsletterSignup />
      </div>
    </div>
  )
}
