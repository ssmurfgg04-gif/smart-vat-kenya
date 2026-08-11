import { ArrowLeft, ArrowRight, Warning, CheckCircle } from "@phosphor-icons/react/dist/ssr"
import { NewsletterSignup } from "@/components/newsletter-signup"

import { ArticleGrid } from "@/lib/resources"

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "eTIMS Penalties in Kenya: What the Law Really Says",
  description:
    "KRA eTIMS penalties explained on the enacted footing: TPA s.86 (higher of 5% of tax due, KES 100,000 for companies, KES 10,000 for individuals, since 1 July 2026) and TPA s.59A(5) (up to KES 100,000 per month for integration failure by turnover-over-KES-5m businesses). Clarifies why figures like KES 500,000/month or KES 1M/10% are not enacted law.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-25",
  dateModified: "2026-07-25",
  url: "https://smartvatkenya.co.ke/resources/etims-penalty-50000-per-month-kenya",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/etims-penalty-50000-per-month-kenya",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "eTIMS Penalties in Kenya", item: "https://smartvatkenya.co.ke/resources/etims-penalty-50000-per-month-kenya/" },
  ],
}

export default function EtimsPenaltyPost() {
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
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand mb-3">Compliance Alert</p>
          <h1 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold text-ink tracking-tight leading-tight mb-4 text-balance">
            eTIMS Penalties in Kenya: What the Law Actually Charges
          </h1>
          <div className="flex items-center gap-4 text-[0.75rem] text-ink-muted">
            <time dateTime="2026-07-25">25 July 2026</time>
            <span>7 min read</span>
            <span>Smart VAT Kenya</span>
          </div>
        </header>

        <div className="space-y-5 text-[0.9rem] text-ink-soft leading-[1.75]">
          <div className="border border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-800/40 rounded-lg p-4 flex items-start gap-3">
            <Warning size={17} weight="fill" className="text-red-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-ink text-[0.9rem]">Two statutory eTIMS penalties apply</p>
              <p className="text-[0.83rem] text-red-700 dark:text-red-400 leading-relaxed">
                Failure to issue compliant electronic tax invoices, file electronically or pay
                electronically attracts a penalty under TPA s.86 (from 1 July 2026: the higher of
                5% of the tax due, KES 100,000 for companies, or KES 10,000 for individuals);
                and a notified business with turnover above KES 5 million that fails to integrate
                its system faces up to KES 100,000 per month under TPA s.59A(5). Figures like
                KES 500,000 per month or KES 1M/10% per invoice circulate widely but are not enacted law.
              </p>
            </div>
          </div>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">What the Law Actually Says</h2>
          <p>
            The eTIMS penalty sits in two places. First, the
            Tax Procedures (Electronic Tax Invoice) Regulations, Legal Notice 64 of 2024 make it an
            offence to fail e-invoicing compliance or to tamper with the system, and refer breaches to
            TPA s.86 — they do not set a separate KES 1 million or 10% figure. Under s.86, as amended by
            the Finance Act 2026 (in force 1 July 2026), failing to issue an electronic tax invoice, file
            a return electronically or pay tax electronically attracts <strong>the higher of 5% of the
            tax due, KES 100,000 for companies, or KES 10,000 for individuals</strong>, applied after a
            written notice and a check that the failure was not outside the taxpayer&apos;s control.
          </p>
          <p>
            Second, the integration requirement sits in TPA s.59A. A business with turnover above
            KES 5 million that the Commissioner has notified to integrate its data-management system
            with KRA&apos;s electronic system, and that fails to comply, is liable — on conviction — to a
            penalty of <strong>not exceeding KES 100,000 for every month or part thereof</strong> that
            the failure continues.
          </p>
          <p>
            The <strong>KES 50,000-per-month</strong> figure that circulates in business guidance is not
            a standalone statutory penalty. Do not budget on KES 50,000 a month: verified eTIMS invoice
            failures are each exposed to the TPA s.86 penalty (up to KES 100,000 for companies or 5% of
            the tax due), which is usually far larger. The strongest protection is issuing every invoice
            through eTIMS, checking the compliance dashboard, and keeping your device or integration
            live at all times.
          </p>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">Where Figures Like &ldquo;KES 500,000 Per Month&rdquo; Come From</h2>
          <p>
            A circulating figure frames the eTIMS penalty as a flat KES 50,000 per month. KRA&apos;s own
            guidance and the Act do not set a universal KES 50,000 monthly fine, and the KES 500,000 a
            month figure that appears in older articles is also not in the enacted law: that amount was
            proposed in the pre-passage Tax Procedures (Amendment) (No. 2) Bill 2024, but the enacted
            section fixates a penalty of <strong>not exceeding KES 100,000 per month</strong>. Similarly,
            &ldquo;the higher of KES 1 million or 10% of the tax&rdquo; echoes a Finance Bill 2023 proposal
            that was replaced before enactment. Budget against the enacted figures: for invoicing
            failures, up to KES 100,000 (companies) or 5% of tax due; for integration failure after
            notice, up to KES 100,000 per month.
          </p>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">What Triggers the Penalties?</h2>
          <ul className="space-y-1.5">
            {[
              "Not registered for eTIMS at all",
              "Registered but not issuing eTIMS invoices",
              "Issuing invoices outside the eTIMS system",
              "A non-compliant invoice (missing mandatory fields, wrong PIN, no valid control number)",
              "System integration failure after a written KRA notice (up to KES 100,000/month, TPA s.59A(5), turnover above KES 5 million)",
              "Failing to correct an integration issue once flagged by KRA",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <Warning size={14} className="text-amber-600 shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">How to Check Your Compliance Status</h2>
          <ol className="space-y-2">
            {[
              "Log into the KRA eTIMS portal.",
              "Check your compliance dashboard for any flags.",
              "Verify that your eTIMS device or app is actively transmitting invoices.",
              "Ensure your QR codes scan correctly using the KRA verification app.",
              "Confirm your ERP or POS system is properly integrated (if applicable).",
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-semibold text-brand shrink-0 w-5">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">How to Avoid the Penalty</h2>
          <ul className="space-y-1.5">
            {[
              "Register for eTIMS if you have not already — choose between the mobile app, web portal, or ERP integration.",
              "Issue every invoice through eTIMS, even for cash sales and B2C transactions.",
              "Keep your eTIMS device or app active at all times.",
              "Test your QR codes monthly with the KRA verification app.",
              "If you use an ERP, ensure your integration is certified and maintained.",
              "File your VAT returns on time — the eTIMS penalty can stack on top of late-filing penalties.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="border border-brand/25 bg-brand-muted rounded-lg p-5 mt-8">
            <p className="font-semibold text-ink text-[0.9rem] mb-1">Need help with eTIMS?</p>
            <p className="text-[0.83rem] text-ink-muted mb-3">
              We handle eTIMS onboarding, compliance checks, and penalty waiver applications.
              First consultation is free.
            </p>
            <a href="https://wa.me/254717344440?text=I%20need%20help%20with%20eTIMS%20compliance"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-4 py-2.5 rounded-md hover:bg-brand-hover transition-colors">
              Ask Us on WhatsApp <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
            <a href="/tools/etims-penalty-calculator/"
              className="mt-3 inline-flex items-center gap-2 border border-brand/40 text-brand text-sm font-semibold px-4 py-2.5 rounded-md hover:bg-brand-muted transition-colors">
              Calculate your exposure <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
          </div>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">Related Resources</h2>
          <ul className="space-y-2">
            {[
              ["eTIMS Onboarding Guide 2026", "/resources/etims-onboarding-guide/", "Step-by-step registration guide for all three eTIMS solution types"],
              ["eTIMS Compliant Invoicing Guide", "/resources/etims-invoicing-guide/", "Mandatory fields, QR codes, B2B vs B2C rules, and verification"],
              ["KRA VAT Penalties Reference", "/resources/kra-vat-penalties-reference/", "Complete penalty table including eTIMS penalties"],
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
          <ArticleGrid currentSlug="etims-penalty-50000-per-month-kenya" />
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
