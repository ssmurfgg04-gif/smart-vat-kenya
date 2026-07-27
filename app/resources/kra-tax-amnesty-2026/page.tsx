import type { Metadata } from "next"
import { constructMetadata } from "@/lib/seo"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { ArticleGrid } from "@/lib/resources"
import { Flowchart, AmnestyEligibilityFlow } from "@/components/flowcharts"

export const metadata: Metadata = constructMetadata({
  title: "KRA Tax Amnesty 2026: 100% Penalty & Interest Waiver — Apply by Dec 31",
  absoluteTitle: true,
  description:
    "KRA tax amnesty 2026 waives 100% of penalties and interest on pre-2026 tax debt. Runs July 1 to December 31, 2026. Check eligibility, apply on iTax, and clear your KRA ledger.",
  path: "/resources/kra-tax-amnesty-2026",
  keywords: [
    "kra tax amnesty 2026",
    "tax amnesty kenya 2026",
    "kra penalty waiver 2026",
    "kra interest waiver",
    "finance act 2026 tax amnesty",
    "kra tax amnesty december 2026",
    "kenya tax amnesty deadline",
    "kra penalty waiver application",
  ],
  type: "article",
})

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources" },
    { "@type": "ListItem", position: 3, name: "KRA Tax Amnesty 2026", item: "https://smartvatkenya.co.ke/resources/kra-tax-amnesty-2026" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "KRA Tax Amnesty 2026: Full Penalty and Interest Waiver — Complete Guide",
  description:
    "The KRA tax amnesty 2026 waives 100% of penalties and interest on tax debt accumulated up to December 31, 2025. Running from July 1 to December 31, 2026. How to qualify, apply on iTax, and clear your ledger.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-27",
  dateModified: "2026-07-27",
  url: "https://smartvatkenya.co.ke/resources/kra-tax-amnesty-2026",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/kra-tax-amnesty-2026",
}

const faqs = [
  {
    q: "When does the KRA tax amnesty 2026 end?",
    a: "The amnesty closes on December 31, 2026. All outstanding principal tax must be settled by this date to qualify for the 100% waiver of penalties and interest. KRA strongly advises against waiting until December — early action avoids platform congestion and allows time for payment plan approvals.",
  },
  {
    q: "Does the amnesty waive the principal tax itself?",
    a: "No. Only qualifying penalties, interest, and fines are waived. The underlying principal tax must still be paid in full. The amnesty is a waiver on the extras, not the original debt.",
  },
  {
    q: "What taxes does the amnesty cover?",
    a: "The amnesty covers penalties and interest on outstanding principal tax accumulated up to December 31, 2025. This includes income tax, VAT, PAYE, withholding tax, excise duty, capital gains tax, rental income tax, and turnover tax.",
  },
  {
    q: "Do I need to apply for the waiver, or is it automatic?",
    a: "If you already paid your principal tax in full by December 31, 2025, the waiver is automatic — no application needed. KRA's system applies it. If you still owe principal tax, you must settle it (lump sum or payment plan) by December 31, 2026 to unlock the waiver. In that case, the waiver is automatic once the principal is cleared.",
  },
  {
    q: "Can I get a partial waiver if I pay part of the principal?",
    a: "No. The waiver requires the full principal to be settled. Partial payment does not unlock a partial waiver. You must clear 100% of the outstanding principal tax to qualify for the 100% penalty and interest waiver.",
  },
  {
    q: "What if I only have late filing penalties and no principal tax owed?",
    a: "You qualify for an automatic waiver once you file all outstanding returns. No principal payment needed since nothing is owed. File the returns, and the penalty waiver follows automatically.",
  },
  {
    q: "Can I use a payment plan to settle the principal?",
    a: "Yes. You can apply for a structured payment plan through the KRA iTax portal. The plan must be approved by KRA, and all principal tax under the plan must be fully cleared by December 31, 2026. Miss the deadline and the penalties and interest come back.",
  },
  {
    q: "What happens if I miss the December 31, 2026 deadline?",
    a: "You lose the amnesty benefit entirely. The penalties and interest on your pre-2026 debt remain fully due. KRA has indicated this is a once-in-a-decade opportunity — the last comparable amnesty closed in 2004. It is unlikely to be extended.",
  },
  {
    q: "I have an ongoing tax dispute in court. Can I still benefit?",
    a: "Yes, but you need to use KRA's Alternative Dispute Resolution (ADR) framework. Once the disputed principal amount is settled through ADR, the amnesty benefits are unlocked. You cannot simply wait for the court case to conclude.",
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

export default function KRATaxAmnesty2026() {
  return (
    <>
      <script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id="article-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script id="faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-[700px] mx-auto px-6 lg:px-10 py-12">
        <Link href="/resources" className="inline-flex items-center gap-2 text-ink-muted hover:text-ink text-sm font-medium mb-8 transition-colors">
          <ArrowLeft size={14} aria-hidden="true" /> All Resources
        </Link>

        <article>
          <header className="mb-8">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand mb-3">Tax Amnesty 2026</p>
            <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-semibold text-ink tracking-tight leading-tight mb-3 text-balance">
              KRA Tax Amnesty 2026: Full Waiver of Penalties and Interest
            </h1>
            <p className="text-[0.9rem] text-ink-muted leading-relaxed">
              <time dateTime="2026-07-27">27 July 2026</time> &middot; Updated for Finance Act 2026
            </p>
          </header>

          <div className="bg-brand/5 border border-brand/15 rounded-lg p-5 mb-8 flex items-start gap-3">
            <Warning size={20} className="text-brand shrink-0 mt-0.5" weight="fill" />
            <div>
              <p className="text-sm font-semibold text-ink mb-1">Deadline: 31 December 2026</p>
              <p className="text-sm text-ink-muted leading-relaxed">
                This amnesty expires on 31 December 2026. After this date, all penalties and interest on pre-2026 tax debt become payable in full. KRA has confirmed this is a once-in-a-decade opportunity.
              </p>
            </div>
          </div>

          <div className="prose prose-gray max-w-none">
            <Flowchart caption="Amnesty eligibility flowchart — find your path to the penalty and interest waiver">
              <AmnestyEligibilityFlow />
            </Flowchart>

            <h2>What Is the KRA Tax Amnesty 2026?</h2>
            <p>
              The <strong>KRA tax amnesty 2026</strong>, introduced under the <strong>Finance Act, 2026</strong>, is a time-limited programme that waives <strong>100% of penalties, interest, and fines</strong> on qualifying tax liabilities accumulated up to <strong>31 December 2025</strong>. It took effect on <strong>1 July 2026</strong> and closes on <strong>31 December 2026</strong>.
            </p>
            <p>
              This is the third amnesty cycle from KRA. The previous two cycles collectively recovered over <strong>KES 80.9 billion</strong> in principal tax payments while bringing hundreds of thousands of taxpayers back into compliance. The 2026 programme is expected to be the final broad-based amnesty for the foreseeable future.
            </p>

            <h2>Which Taxes Are Covered?</h2>
            <p>The amnesty covers penalties and interest on principal tax liabilities for all major tax types:</p>
            <ul>
              <li>Income Tax</li>
              <li>Value Added Tax (VAT)</li>
              <li>Pay As You Earn (PAYE)</li>
              <li>Withholding Tax</li>
              <li>Excise Duty</li>
              <li>Capital Gains Tax</li>
              <li>Monthly Rental Income Tax</li>
              <li>Turnover Tax</li>
            </ul>
            <p><strong>Important:</strong> Only penalties, interest, and fines on pre-2026 debt are waived. The principal tax must still be paid. Any tax liability arising on or after 1 January 2026 falls entirely outside the amnesty.</p>

            <h2>Who Qualifies for the Amnesty?</h2>
            <p className="mb-4">Five scenarios cover every taxpayer. Find yours below.</p>
            <div className="border border-hairline rounded-lg overflow-hidden not-prose">
              <table className="w-full text-[0.83rem]">
                <thead>
                  <tr className="border-b border-hairline bg-canvas-alt">
                    <th className="text-left p-3 font-semibold text-ink w-[30%]">Scenario</th>
                    <th className="text-left p-3 font-semibold text-ink w-[35%]">Condition</th>
                    <th className="text-left p-3 font-semibold text-ink">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hairline">
                  {[
                    { s: "Principal already paid", c: "You cleared all principal tax by 31 Dec 2025", a: "Automatic waiver — no action needed" },
                    { s: "Late filing penalties only", c: "You owe no principal tax, only late filing penalties", a: "File outstanding returns → automatic waiver" },
                    { s: "Still owe principal — can pay lump sum", c: "You have outstanding principal tax from before 2026", a: "Pay full principal by 31 Dec 2026 → waiver applied" },
                    { s: "Still owe principal — need instalments", c: "Cannot pay the full principal at once", a: "Apply for a payment plan on iTax → clear by 31 Dec 2026 → waiver applied" },
                    { s: "Ongoing tax dispute", c: "You are in court or ADR over your tax liability", a: "Settle principal through ADR → amnesty unlocked" },
                  ].map(({ s, c, a }) => (
                    <tr key={s}>
                      <td className="p-3 font-medium text-ink">{s}</td>
                      <td className="p-3 text-ink-muted">{c}</td>
                      <td className="p-3 text-ink-muted">{a}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Step-by-Step: How to Apply on iTax</h2>
            <ol>
              <li><strong>Log in</strong> to the KRA iTax portal at <a href="https://itax.kra.go.ke" target="_blank" rel="noopener noreferrer">itax.kra.go.ke</a></li>
              <li><strong>Check your ledger</strong> — Go to the Returns menu and view your outstanding balances, penalties, and interest</li>
              <li><strong>Reconcile</strong> your iTax ledger against your internal accounting records. Identify any discrepancies</li>
              <li><strong>File outstanding returns</strong> — If you have unfiled returns, file them first. Late filing penalties will be waived automatically once returns are submitted</li>
              <li><strong>Settle principal tax</strong> — Pay the outstanding principal in full, or navigate to Payments → Apply Payment Plan (new) to set up instalments</li>
              <li><strong>Confirm waiver</strong> — Once principal is paid, the KRA system automatically applies the waiver. Check your ledger to confirm penalties and interest have been cleared</li>
            </ol>
            <p className="text-sm text-ink-muted italic mt-2">Note: If you have an ongoing tax dispute, you must pursue KRA's Alternative Dispute Resolution (ADR) framework to settle the principal amount before the amnesty can apply.</p>

            <h2>What the Amnesty Does Not Cover</h2>
            <ul>
              <li><strong>Principal tax:</strong> The original tax debt must still be paid in full</li>
              <li><strong>Post-2025 liabilities:</strong> Any tax debt arising on or after 1 January 2026 is outside the amnesty entirely</li>
              <li><strong>Active litigation:</strong> Taxpayers in active court disputes must use KRA's ADR framework to settle before amnesty benefits apply</li>
            </ul>

            <h2>Why This Matters for Your Business</h2>
            <p>Beyond the direct reduction in liabilities, clearing historical tax penalties has real operational benefits:</p>
            <ul>
              <li><strong><Link href="/resources/tax-compliance-certificate-kenya" className="text-brand underline underline-offset-2 hover:text-brand-hover">Tax Compliance Certificate</Link>:</strong> KRA now requires a clean ledger before issuing a TCC. Resolving old debt unlocks access to government tenders, work permits, and business licences</li>
              <li><strong>Avoid enforcement:</strong> Unresolved tax debt can lead to agency notices, bank account freezes, and property attachment. The amnesty is a genuine opportunity to avoid escalation</li>
              <li><strong>Clean financial reporting:</strong> Unresolved liabilities distort your financial statements and make it harder to forecast cash flow or secure financing</li>
            </ul>

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
                  <p className="text-sm text-ink-muted leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <h2 className="font-display text-xl font-semibold mb-4">How Smart VAT Kenya Can Help</h2>
          <p className="text-sm text-ink-muted leading-relaxed mb-4">
            We help businesses and individuals navigate the KRA tax amnesty process. Our services include:
          </p>
          <ul className="space-y-2 text-sm text-ink-muted mb-5">
            <li className="flex items-start gap-2">— iTax ledger reconciliation and review</li>
            <li className="flex items-start gap-2">— Identification of outstanding principal tax liabilities</li>
            <li className="flex items-start gap-2">— Payment plan application and negotiation with KRA</li>
            <li className="flex items-start gap-2">— Penalty waiver and amnesty application support</li>
          </ul>
          <a
            href="https://wa.me/254721725958?text=I%20need%20help%20with%20the%20KRA%20tax%20amnesty"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
          >
            Chat About Your Amnesty on WhatsApp
            <svg viewBox="0 0 12 12" className="w-3 h-3 fill-current" aria-hidden="true"><path d="M6 0L4.59 1.41 9.17 6l-4.58 4.59L6 12l6-6z"/></svg>
          </a>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <ArticleGrid currentSlug="kra-tax-amnesty-2026" />
        </div>
      </div>
      <NewsletterSignup />
    </>
  )
}
