import { ArrowLeft, ArrowRight, Warning, CheckCircle } from "@phosphor-icons/react/dist/ssr"
import { NewsletterSignup } from "@/components/newsletter-signup"

import { ArticleGrid } from "@/lib/resources"

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "VAT Deadline Kenya: August 2026 - Don't Miss the 20th",
  description:
    "The KRA VAT return is due by the 20th of every month. Late filing costs KES 10,000 + 5% of tax due + 1%/month interest. Here is exactly what to file, how to avoid penalties, and what to do if you missed the deadline.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-25",
  dateModified: "2026-07-25",
  url: "https://smartvatkenya.co.ke/resources/kra-vat-filing-deadline-august-2026",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/kra-vat-filing-deadline-august-2026",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "VAT Deadline Kenya - August 2026", item: "https://smartvatkenya.co.ke/resources/kra-vat-filing-deadline-august-2026/" },
  ],
}

export default function DeadlinePost() {
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
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand mb-3">Deadline Reminder</p>
          <h1 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold text-ink tracking-tight leading-tight mb-4 text-balance">
            VAT Deadline Kenya: August 2026 - Don&apos;t Miss the 20th
          </h1>
          <div className="flex items-center gap-4 text-[0.75rem] text-ink-muted">
            <time dateTime="2026-07-25">25 July 2026</time>
            <span>6 min read</span>
            <span>Smart VAT Kenya</span>
          </div>
        </header>

        <div className="space-y-5 text-[0.9rem] text-ink-soft leading-[1.75]">
          <p>
            Every month, thousands of Kenyan business owners wake up on the 21st and realise they
            missed the VAT filing deadline. The penalty hits automatically - KES 10,000 or 5% of
            the tax due (whichever is higher), plus 1% interest per month. And if you filed a nil return late? Still KES 10,000.
          </p>
          <p>
            Under the <strong>VAT Act 2013</strong>, every VAT-registered business - including those making
            <strong> zero-rated supplies</strong> - must file a monthly return by the 20th of the following month,
            even in months with no sales (a nil return). The KES 5 million turnover threshold is what triggers
            registration in the first place; once you&apos;re registered, the 20th is non-negotiable.
          </p>
          <p>
            The <strong>Kenya Revenue Authority (KRA)</strong> requires all registered persons to declare both
            <strong>taxable</strong> and <strong>exempt supplies</strong> in each return. If you operate in the
            <strong>digital marketplace</strong>, the <strong>Finance Act 2026</strong> brought non-resident digital
            services into the VAT net, meaning foreign providers must also comply. Every return generates an
            <strong>electronic tax invoice</strong> (eTIMS) confirmation code once synced, serving as proof of
            filing. Late filing triggers a penalty of <strong>KES 10,000</strong> or <strong>5% of the tax due</strong>
            (whichever is higher), plus <strong>1% monthly interest</strong> on any unpaid amount.
          </p>

          <div className="border border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-800/40 rounded-lg p-4 flex items-start gap-3">
            <Warning size={17} weight="fill" className="text-red-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-ink text-[0.9rem]">August 2026 deadline</p>
              <p className="text-[0.83rem] text-red-700 dark:text-red-400 leading-relaxed">
                <strong>20 August 2026</strong> - for the July 2026 tax period. Mark your calendar.
              </p>
            </div>
          </div>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">What You Need to File</h2>
          <p>Your VAT return must include:</p>
          <ul className="space-y-1.5">
            {[
              "Total sales (taxable, zero-rated, and exempt)",
              "Total purchases (with valid eTIMS invoices)",
              "Output VAT charged to customers",
              "Input VAT claimed on purchases",
              "Net VAT due or refundable",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            If you had zero sales and zero purchases in July, you still need to file a nil return.
            Skipping it costs KES 10,000.
          </p>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">How to <a href="/resources/how-to-file-vat-return-on-itax/" className="text-brand underline underline-offset-2 hover:text-brand-hover">File on iTax</a></h2>
          <p>
            For a complete walkthrough with screenshots, see our{" "}
            <a href="/resources/how-to-file-vat-return-on-itax/" className="text-brand underline underline-offset-2 hover:text-brand-hover">VAT return filing guide</a>.
          </p>
          <ol className="space-y-2">
            {[
              "Log in to itax.kra.go.ke with your KRA PIN and password.",
              "Go to Returns → VAT Return.",
              "Select the tax period (e.g., July 2026).",
              "Enter your sales and purchase figures (or use the auto-populated return).",
              "Review the calculated VAT due.",
              "Submit and get your acknowledgement receipt.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-semibold text-brand shrink-0 w-5">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">What Happens If You Miss the Deadline</h2>
          <p>KRA automatically imposes:</p>
          <ul className="space-y-1.5">
            {[
              "KES 10,000 late filing penalty (even for nil returns)",
              "5% of the tax due (if higher than KES 10,000)",
              "1% interest per month on the unpaid tax",
              "Possible blocking of your KRA compliance certificate",
              "Risk of being placed on the VAT Special Table",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <Warning size={14} className="text-amber-600 shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="border border-brand/25 bg-brand-muted rounded-lg p-5 mt-8">
            <p className="font-semibold text-ink text-[0.9rem] mb-1">Let us file for you</p>
            <p className="text-[0.83rem] text-ink-muted mb-3">
              We file your VAT return before the 17th of every month - well before the KRA deadline.
              KES 3,500/month. M-PESA accepted. Includes penalty waiver support if you have missed
              past deadlines.
            </p>
            <a href="https://wa.me/254717344440?text=I%20want%20the%20KES%203500%20Monthly%20VAT%20Filing%20service"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-4 py-2.5 rounded-md hover:bg-brand-hover transition-colors">
              Start Filing - KES 3,500/mo <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
          </div>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">Already Missed a Deadline?</h2>
          <p>
            You can apply for a KRA{" "}
            <a href="/resources/nil-returns-tax-amnesty/" className="text-brand underline underline-offset-2 hover:text-brand-hover">penalty waiver</a>. The process requires a written application
            explaining the cause of non-compliance, and KRA may waive the penalties if you
            demonstrate reasonable cause. We handle this for KES 4,000 per application.
          </p>
          <p>
            See our full guide:{" "}
            <a href="/resources/kra-penalty-for-late-vat-filing/" className="text-brand underline underline-offset-2">
              KRA Penalty for Late VAT Filing
            </a>{" "}
            - includes the waiver application process and a calculator to estimate your exposure.
          </p>
        </div>
      </article>

              {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="kra-vat-filing-deadline-august-2026" />
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
