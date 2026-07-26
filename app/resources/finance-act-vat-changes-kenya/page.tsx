import type { Metadata } from "next"
import { constructMetadata } from "@/lib/seo"
import Link from "next/link"
import Script from "next/script"
import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"

export const metadata: Metadata = constructMetadata({
  title: "Finance Act 2025 & 2026 VAT Changes Kenya",
  description:
    "Complete summary of VAT changes introduced by the Finance Act 2025 and Finance Act 2026 in Kenya. Covers the KES 8M threshold adjustment, reduced refund window, fintech VAT reclassification, bad debt relief changes, and more.",
  path: "/resources/finance-act-vat-changes-kenya",
  keywords: [
    "finance act 2025 kenya vat changes",
    "finance act 2026 kenya vat changes",
    "kenya vat threshold 8 million",
    "vat refund 12 months kenya",
    "fintech vat kenya 16%",
    "finance act 2025 vat kenya summary",
    "finance act 2026 vat kenya summary",
    "input vat apportionment 90:10 rule removed",
  ],
  type: "article",
})

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources" },
    { "@type": "ListItem", position: 3, name: "Finance Act VAT Changes", item: "https://smartvatkenya.co.ke/resources/finance-act-vat-changes-kenya" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Finance Act 2025 & 2026 VAT Changes Kenya",
  description:
    "All VAT-related changes from the Finance Act 2025 and Finance Act 2026 in Kenya: KES 8M threshold, 12-month refund window, fintech VAT, apportionment rule changes, and more.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-25",
  dateModified: "2026-07-25",
  url: "https://smartvatkenya.co.ke/resources/finance-act-vat-changes-kenya",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/finance-act-vat-changes-kenya",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the VAT registration threshold in Kenya for 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The VAT registration threshold is KES 5 million in annual taxable turnover. The Finance Act 2025 proposed raising the threshold to KES 8 million, but this has not yet taken effect as of July 2026. Always check the latest KRA guidance, as the effective date may be announced via a Gazette notice. If your turnover exceeds KES 5 million, you are required to register for VAT.",
      },
    },
    {
      "@type": "Question",
      name: "What is the VAT refund application deadline for 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The deadline is 12 months from the date the tax became due and payable. The Finance Act 2025 reduced this from 24 months, effective 1 July 2025. The Finance Act 2026 did not change this further. Any refund not applied for within 12 months is forfeited. Check your iTax portal now — if you have excess input VAT older than 12 months, you may have lost the right to claim it.",
      },
    },
    {
      "@type": "Question",
      name: "Are payment processing services now subject to VAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Finance Act 2026 reclassified payment processing, settlement, merchant acquiring, gateway, and aggregation services supplied over a software platform from VAT exempt to vatable at the standard rate of 16%, effective 1 July 2026. This means fintech companies and payment service providers must now charge 16% VAT on their fees. Businesses using these services will see increased costs.",
      },
    },
    {
      "@type": "Question",
      name: "What is the bad debt relief timeline for VAT purposes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under the Finance Act 2026, the minimum qualifying period for VAT relief on bad debts is 3 years (reverted from 2 years, effective 1 July 2026). If you supplied goods or services and accounted for the VAT, but the customer has not paid after 3 years, you can apply for a refund of the VAT. You must demonstrate the debt is genuinely irrecoverable.",
      },
    },
    {
      "@type": "Question",
      name: "Was the 90:10 input VAT apportionment rule removed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Finance Act 2025 deleted the 90:10 rule that previously allowed businesses with exempt supplies under 10% of total turnover to claim full input VAT deduction. All businesses with mixed supplies must now apportion input VAT based on the ratio of taxable to total turnover. Update your accounting processes if you were relying on the 90:10 rule.",
      },
    },
    {
      "@type": "Question",
      name: "Can I claim input VAT on supplies made to the Kenya Defence Forces?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Finance Act 2026 introduced full input VAT deduction and refunds for input relating to exempt supplies made to the Kenya Defence Forces (KDF), Defence Forces Welfare Services (DEFWES), National Intelligence Service (NIS), and National Police Service (NPS). This is an exception to the general rule that input VAT on exempt supplies is not deductible. You need supporting documents showing the supplies were directly related to these entities.",
      },
    },
  ],
}

export default function FinanceActVatPage() {
  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-[880px] mx-auto px-6 lg:px-10 py-12">
        <Link href="/resources" className="inline-flex items-center gap-2 text-ink-muted hover:text-ink text-sm font-medium mb-8 transition-colors">
          <ArrowLeft size={14} aria-hidden="true" /> All Guides
        </Link>

        <article>
          <header className="mb-10">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand mb-3">Guide — Finance Act Changes</p>
            <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.3rem)] font-semibold text-ink tracking-tight leading-tight mb-4 text-balance">
              Finance Act 2025 & 2026: VAT Changes for Kenyan Businesses
            </h1>
            <p className="text-[0.9rem] text-ink-muted leading-relaxed max-w-[65ch]">
              Two Finance Acts in two years have reshaped Kenya's VAT landscape. The threshold may be rising,
              the refund window has shrunk, fintech services are now taxable, and bad debt rules have changed.
              This guide summarises every VAT change you need to know — and what to do about them.
            </p>
          </header>

          <div className="space-y-10">
            {/* Section 1 — Threshold */}
            <section id="threshold" aria-labelledby="threshold-h">
              <h2 id="threshold-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                VAT Registration Threshold: KES 5M vs KES 8M
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <div className="border border-hairline rounded-lg p-5 flex items-start gap-4">
                  <Info size={20} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink text-[0.9rem] mb-1">Current threshold: KES 5 million</p>
                    <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                      The Finance Act 2025 proposed raising the mandatory VAT registration threshold from
                      KES 5 million to KES 8 million in annual taxable turnover. However, as of July 2026,
                      the effective date has not been announced via Gazette notice. The KRA website and
                      iTax portal still reference the KES 5 million threshold. Until a formal commencement
                      notice is issued, continue using KES 5 million as the registration threshold.
                    </p>
                  </div>
                </div>
                <p>
                  <strong>What this means for your business:</strong> If your turnover is between KES 5 million and
                  KES 8 million, you are still required to register for VAT under current rules. If the KES 8 million
                  threshold takes effect, you may be able to deregister — but wait for the official notice.
                </p>
              </div>
            </section>

            {/* Section 2 — Refund Window */}
            <section id="refund-window" aria-labelledby="refund-window-h">
              <h2 id="refund-window-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                VAT Refund Window Reduced to 12 Months
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  <strong>Change:</strong> The Finance Act 2025 reduced the timeline for applying for VAT refunds
                  from 24 months to 12 months from the date the tax became due and payable.
                </p>
                <p>
                  <strong>Effective:</strong> 1 July 2025
                </p>
                <p>
                  <strong>Impact:</strong> If you have excess input VAT that arose before July 2025, you had
                  24 months to claim. For excess arising after July 2025, you have only 12 months. Many
                  businesses have already lost refunds by not realising the window had shrunk.
                </p>
                <div className="border border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-800/40 rounded-lg p-4 flex items-start gap-3">
                  <Warning size={17} weight="fill" className="text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-[0.83rem] text-red-700 dark:text-red-400 leading-relaxed">
                    <strong className="text-red-800 dark:text-red-300">Urgent:</strong> If you have excess
                    input VAT from August 2025 or later, check when the 12-month window expires. Many businesses
                    have already lost refunds by missing the new deadline.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 — Fintech VAT */}
            <section id="fintech-vat" aria-labelledby="fintech-vat-h">
              <h2 id="fintech-vat-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Fintech Services Now Subject to 16% VAT
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  <strong>Change:</strong> The Finance Act 2026 reclassified payment processing, settlement,
                  merchant acquiring, gateway, and aggregation services supplied over a software or platform
                  from VAT exempt to taxable at the standard rate of 16%.
                </p>
                <p>
                  <strong>Effective:</strong> 1 July 2026
                </p>
                <p>
                  <strong>Impact:</strong> This is a significant change for Kenya's{" "}
                  <Link href="/resources/vat-fintech-digital-payments-kenya" className="text-brand underline underline-offset-2 hover:text-brand-hover">fintech sector</Link>. Payment
                  service providers, mobile money aggregators, and payment gateway operators must now charge
                  16% VAT on their fees. Businesses using these services will see increased costs. If you
                  are a fintech company, update your pricing and invoicing immediately. If you use payment
                  services, check whether your provider has started charging VAT.
                </p>
              </div>
            </section>

            {/* Section 4 — Bad Debt Relief */}
            <section id="bad-debt-relief" aria-labelledby="bad-debt-relief-h">
              <h2 id="bad-debt-relief-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Bad Debt Relief Timeline Reset to 3 Years
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  <strong>Change:</strong> The Finance Act 2025 reduced the bad debt relief qualifying period
                  from 3 years to 2 years. The Finance Act 2026 increased this back to 3 years, restoring the
                  pre-2025 position.
                </p>
                <p>
                  <strong>Effective:</strong> 1 July 2026
                </p>
                <p>
                  <strong>Impact:</strong> If you have unpaid invoices, you must wait 3 years from the date
                  of supply before you can claim VAT relief on the bad debt. Review your aged debtors list
                  and identify invoices approaching the 3-year mark. Prepare documentation showing you have
                  taken reasonable steps to recover the debt.
                </p>
              </div>
            </section>

            {/* Section 5 — Apportionment */}
            <section id="apportionment" aria-labelledby="apportionment-h">
              <h2 id="apportionment-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                90:10 Input VAT Apportionment Rule Deleted
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  <strong>Change:</strong> The Finance Act 2025 deleted the 90:10 rule from the VAT Act.
                  Previously, if your exempt supplies were less than 10% of total turnover, you could claim
                  full input VAT deduction without apportionment. That exemption is gone.
                </p>
                <p>
                  <strong>Effective:</strong> 1 July 2025
                </p>
                <p>
                  <strong>Impact:</strong> All businesses with mixed taxable and exempt supplies must now
                  apportion input VAT using the turnover-based formula. Even if your exempt supplies are
                  only 2-3% of total turnover, you must apportion. Update your accounting system or
                  spreadsheet to calculate the apportionment automatically each month.
                </p>
                <div className="border border-brand/25 bg-brand-muted rounded-lg p-4 flex items-start gap-3">
                  <Info size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-[0.83rem] text-ink-soft leading-relaxed">
                    <strong className="text-ink">Need help with apportionment?</strong> See our{" "}
                    <Link href="/resources/input-vat-deduction-guide" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                      Input VAT Deduction Guide
                    </Link>{" "}
                    for the full apportionment formula and worked examples.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 — KDF/NIS Exception */}
            <section id="kdf-exception" aria-labelledby="kdf-exception-h">
              <h2 id="kdf-exception-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Input VAT Deduction for Supplies to Government Security Agencies
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <p>
                  <strong>Change:</strong> The Finance Act 2026 introduced full input VAT deduction and refunds
                  for input relating to otherwise-exempt supplies made to the Kenya Defence Forces (KDF),
                  Defence Forces Welfare Services (DEFWES), National Intelligence Service (NIS), and
                  National Police Service (NPS).
                </p>
                <p>
                  <strong>Effective:</strong> 1 July 2026
                </p>
                <p>
                  <strong>Impact:</strong> If you supply goods or services to these agencies, you can now
                  claim input VAT on related costs even though the supplies themselves are exempt. This
                  is a significant relief for businesses that contract with government security agencies.
                  Ensure you have proper documentation linking your purchases to the specific contracts.
                </p>
              </div>
            </section>

            {/* Section 7 — Other Changes */}
            <section id="other-changes" aria-labelledby="other-changes-h">
              <h2 id="other-changes-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                Other Notable Changes
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <div className="space-y-3">
                  {[
                    { key: "invoice-reqs", change: "Invoice requirements tightened", detail: "All registered persons must now issue a tax invoice at the time of supply, regardless of whether the supply is taxable or not. Previously, invoices were only required for taxable supplies. This affects exempt suppliers who now need invoicing systems." },
                    { key: "labour-outsourcing", change: <><Link href="/resources/vat-labour-outsourcing-kenya" className="text-brand underline underline-offset-2 hover:text-brand-hover">Labour outsourcing</Link> costs excluded from taxable value</>, detail: "Where a supplier provides labour, outsourcing, or employee placement services, employee-related costs (salaries, wages, statutory deductions) are deemed disbursements on behalf of the client and excluded from the taxable value of the supply. This reduces the VAT burden on outsourced labour." },
                    { key: "digital-services", change: <>Digital broadcasting added to taxable <Link href="/resources/vat-digital-services-kenya" className="text-brand underline underline-offset-2 hover:text-brand-hover">digital services</Link></>, detail: "Internet, radio, or television broadcasting services provided by non-residents are now explicitly included in the scope of taxable digital services." },
                    { key: "mosquito-repellent", change: "Mosquito repellent exempted from VAT", detail: "Mosquito repellent products were reclassified from 16% VAT to exempt, effective 1 July 2025." },
                    { key: "tea-coffee-packaging", change: "Tea and coffee packaging materials zero-rated", detail: "Packaging materials for tea and coffee are now zero-rated (0%), allowing suppliers to claim input VAT and apply for refunds." },
                    { key: "manufacturing-capital", change: "Manufacturing capital goods exemption extended", detail: "The VAT exemption on capital goods for the manufacturing sector, granted before 27 December 2024, was extended to apply until 27 December 2025." },
                  ].map(({ key, change, detail }) => (
                    <div key={key} className="border border-hairline rounded-lg p-4">
                      <p className="font-semibold text-ink text-[0.88rem] mb-1">{change}</p>
                      <p className="text-[0.83rem] text-ink-muted leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 8 — What to Do */}
            <section id="what-to-do" aria-labelledby="what-to-do-h">
              <h2 id="what-to-do-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
                What You Should Do Now
              </h2>
              <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
                <ul className="space-y-2">
                  {[
                    "Check your iTax portal for any pending refunds — the 12-month window may have already expired for some periods.",
                    "If you are a fintech or payment service provider, update your systems to charge 16% VAT on fees effective 1 July 2026.",
                    "Review your aged debtors list for invoices approaching 3 years — you may qualify for bad debt relief soon.",
                    "If you have mixed supplies (taxable and exempt), implement the input VAT apportionment formula immediately.",
                    "If you supply government security agencies, start tracking input VAT on related purchases for refund claims.",
                    "If you use outsourced labour or staffing services, check that your supplier has correctly excluded employee costs from the taxable value.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1.5" aria-hidden="true" />
                      <span className="text-ink-soft">{item}</span>
                    </li>
                  ))}
                </ul>
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
          </div>
        </article>

                {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="finance-act-vat-changes-kenya" />
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
            <Link href="/resources" className="text-[0.82rem] text-ink-muted hover:text-brand transition-colors underline underline-offset-2">
              ← All Resources
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
