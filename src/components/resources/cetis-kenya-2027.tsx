import { ArrowLeft, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { ArticleGrid } from "@/lib/resources"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "CETIS Kenya", item: "https://smartvatkenya.co.ke/resources/cetis-kenya-2027/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "CETIS Kenya 2027: KRA's Pre-Clearance e-Invoicing — What It Means for Your Business",
  description:
    "KRA's Comprehensive Electronic Tax Invoicing System (CETIS) is in procurement for 2027–2028. Every invoice validated and cryptographically signed by KRA before it reaches your buyer. What it means, what Uganda's EFRIS taught us, and how to prepare now.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-08-06",
  dateModified: "2026-08-06",
  url: "https://smartvatkenya.co.ke/resources/cetis-kenya-2027",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/cetis-kenya-2027",
}

const faqs = [
  {
    q: "What is CETIS in Kenya?",
    a: "CETIS (Comprehensive Electronic Tax Invoicing System) is KRA's next-generation e-invoicing system, in active procurement for 2027–2028. Unlike eTIMS, where invoices are reported to KRA after they are issued, CETIS uses a pre-clearance model: every invoice is validated, approved, and cryptographically signed by KRA before it reaches the buyer.",
  },
  {
    q: "How is CETIS different from eTIMS?",
    a: "eTIMS is post-issuance reporting — you issue the invoice, then sync it to KRA. CETIS is pre-issuance authorization — the invoice must pass KRA validation before it counts. Think of it as the difference between telling KRA what you sold after the fact, versus KRA approving the transaction first. This is the same model Brazil (NF-e) and Turkey (e-Fatura) use.",
  },
  {
    q: "When is CETIS coming to Kenya?",
    a: "KRA has CETIS in active procurement for the 2027–2028 window. No confirmed go-live date has been published. The system is expected to roll out in phases — as eTIMS did — starting with the largest taxpayers before extending down the chain.",
  },
  {
    q: "What happened when Uganda rolled out EFRIS (a similar system)?",
    a: "Uganda's EFRIS rollout produced widely documented problems that Kenya should not repeat: 51% of surveyed enterprises reported negative impact, invoices were rejected for compatibility issues, credit notes were rejected outright, offline receipts without QR codes failed when the system returned, prepaid utility customers were locked out of refund claims, and support was nearly absent. A Makerere study found 83% of taxpayers found EFRIS inconvenient.",
  },
  {
    q: "Do I need to do anything about CETIS right now?",
    a: "Yes — two things. First, get fully eTIMS-compliant today: every invoice issued through an eTIMS-compliant channel, synced, and correct. A clean eTIMS base is the fastest on-ramp to CETIS. Second, keep your customer and invoice data clean and digital, because pre-clearance systems reject invoices with mismatched supplier PINs, wrong amounts, or missing metadata — and a rejected invoice means a delayed sale.",
  },
  {
    q: "Will CETIS reject my invoices?",
    a: "Pre-clearance systems reject invoices that fail validation: incorrect supplier or buyer PINs, arithmetic errors, wrong VAT rates, or metadata mismatches with KRA's registers. The rejection feedback loop is where businesses lose time and cash. A compliance partner that checks invoices against KRA data before you send them is the practical mitigation.",
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

export default function CetisKenya2027() {
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
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand mb-3">CETIS / e-Invoicing</p>
            <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-semibold text-ink tracking-tight leading-tight mb-3 text-balance">
              CETIS Kenya 2027: KRA&apos;s Pre-Clearance e-Invoicing Is Coming — Here&apos;s What to Do Now
            </h1>
            <p className="text-[0.9rem] text-ink-muted leading-relaxed">
              <time dateTime="2026-08-06">6 August 2026</time> &middot; Pre-positioning guide
            </p>
          </header>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-8 flex items-start gap-3">
            <Warning size={20} className="text-amber-600 shrink-0 mt-0.5" weight="fill" />
            <div>
              <p className="text-sm font-semibold text-amber-900 mb-1">Why this matters now</p>
              <p className="text-sm text-amber-800 leading-relaxed">
                eTIMS taught everyone the pattern: KRA announces, businesses scramble, penalties
                land, demand spikes. CETIS is the next wave, and it is already in procurement for
                2027&ndash;2028. Businesses that fix their invoicing today skip the scramble when it
                goes live.
              </p>
            </div>
          </div>

          <div className="prose prose-gray max-w-none">
            <h2>What Is CETIS?</h2>
            <p>
              <strong>CETIS</strong> stands for <strong>Comprehensive Electronic Tax Invoicing System</strong>.
              It is KRA&apos;s planned replacement-level e-invoicing infrastructure. The defining feature
              is <strong>pre-clearance</strong>: each invoice is <em>validated, approved, and cryptographically signed
              by KRA before it is sent to the buyer</em>. An invoice that fails validation is not simply
              flagged — it does not exist for tax purposes until KRA clears it.
            </p>
            <p>
              This is the same authorization model that transformed Brazil and Turkey. Under Brazil&apos;s
              NF-e, every invoice is authorized in real time before dispatch; under Turkey&apos;s e-Fatura,
              thresholds were ratcheted down over a decade from voluntary to near-mandatory for all
              businesses. KRA is copying that playbook — and it has said the filings themselves move
              toward web-based real-time validation, with Excel-based filing scrapped by 2027.
            </p>

            <h2>eTIMS vs CETIS — the shift in one line</h2>
            <div className="border border-hairline rounded-lg overflow-hidden not-prose">
              <table className="w-full text-[0.83rem]">
                <thead>
                  <tr className="border-b border-hairline bg-canvas-alt">
                    <th className="text-left p-3 font-semibold text-ink w-[30%]">Aspect</th>
                    <th className="text-left p-3 font-semibold text-ink">eTIMS (now)</th>
                    <th className="text-left p-3 font-semibold text-ink">CETIS (2027&ndash;28)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hairline">
                  <tr>
                    <td className="p-3 font-medium text-ink">Timing</td>
                    <td className="p-3 text-ink-muted">Invoice issued first, reported to KRA after</td>
                    <td className="p-3 text-ink-muted">Validated &amp; signed by KRA before it reaches the buyer</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-ink">Failure mode</td>
                    <td className="p-3 text-ink-muted">Late sync or pending invoices — penalties after the fact</td>
                    <td className="p-3 text-ink-muted">Rejected at the gate — the sale is delayed until cleared</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-ink">Data checked</td>
                    <td className="p-3 text-ink-muted">eTIMS invoice data against returns</td>
                    <td className="p-3 text-ink-muted">Supplier/buyer PINs, amounts, rates, metadata — pre-approval</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-ink">Compare to</td>
                    <td className="p-3 text-ink-muted">Uganda EFRIS v1 (reported)</td>
                    <td className="p-3 text-ink-muted">Brazil NF-e, Turkey e-Fatura (authorized)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>What Uganda&apos;s EFRIS Taught Us — the Bug List to Prepare For</h2>
            <p>
              Uganda went first with a comparable mandate (EFRIS), and the failure data is now public
              enough to plan against. Kenya will not repeat all of it, but pre-clearance systems are
              unforgiving, and these are the patterns to expect:
            </p>
            <ul>
              <li><strong>Invoices rejected for compatibility:</strong> 51% of surveyed Ugandan enterprises reported negative EFRIS impact (Oct 2024 procurement-sector report)</li>
              <li><strong>Credit notes rejected outright:</strong> the system flagged them as "conflicting with accounting principles" — a known EFRIS bug</li>
              <li><strong>Offline failure:</strong> receipts issued offline without QR codes were rejected when the system came back online</li>
              <li><strong>Refund lockouts:</strong> some taxpayers were locked out of claiming refunds entirely while errors persisted</li>
              <li><strong>The support vacuum:</strong> taxpayers described "waiting for eternity" for help — the single biggest opening for a human-backed service</li>
            </ul>
            <p>
              The comparative literature (Tanzania, Ethiopia, Rwanda) is unanimous: e-invoicing success
              depends on <strong>taxpayer sensitization, gradual rollout, and infrastructure readiness</strong> —
              the three things Uganda skipped. The businesses that survive the transition are the ones
              that sort their invoicing <em>before</em> the panic.
            </p>

            <h2>What You Should Do Now (Before It Goes Live)</h2>
            <ol>
              <li>
                <strong>Get eTIMS-clean today.</strong> Every sale issued through an eTIMS-compliant channel, synced on time, with correct supplier details. A clean eTIMS history is the fastest path to CETIS readiness — KRA grades on your existing ledger.
              </li>
              <li>
                <strong>Fix your customer master data.</strong> Pre-clearance systems reject invoices where the buyer&apos;s PIN doesn&apos;t match KRA&apos;s register. One wrong digit and your invoice stalls at the gate. Verify buyer PINs before you invoice — not after.
              </li>
              <li>
                <strong>Go fully digital on invoices.</strong> Paper, Excel, and manual journals will not survive pre-clearance. Every invoice needs structured data: correct VAT rate, correct amounts, clean metadata.
              </li>
              <li>
                <strong>Plan for offline mode.</strong> When CETIS validates online and your internet drops, you need an offline queue that retries automatically and stores the correct payload — not hand-written substitutes.
              </li>
              <li>
                <strong>Get a human who answers.</strong> Uganda&apos;s defining failure was the support vacuum. The businesses that survive enforcement waves have a named contact who picks up WhatsApp when the system rejects an invoice at 9pm on a deadline day.
              </li>
            </ol>

            <div className="bg-brand/5 border border-brand/15 rounded-lg p-5 my-8 not-prose">
              <div className="flex items-start gap-3">
                <Info size={20} className="text-brand shrink-0 mt-0.5" weight="fill" />
                <div>
                  <p className="text-sm font-semibold text-ink mb-1">The practical takeaway</p>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    You don&apos;t need to guess when CETIS lands. You need your invoicing correct
                    enough that <em>when</em> it does, nothing you send gets rejected. That is a
                    discipline today — not a panic in 2028. Need a compliance check on how your
                    invoices and eTIMS setup look right now?{" "}
                    <a href="https://wa.me/254717344440?text=Hi%2C%20I%20want%20a%20CETIS-readiness%20check" target="_blank" rel="noopener noreferrer" className="text-brand font-semibold underline underline-offset-2 hover:text-brand-hover">
                      Message us on WhatsApp
                    </a>{" "}
                    and we&apos;ll review your position.
                  </p>
                </div>
              </div>
            </div>

            <h2>Related Guides</h2>
            <ul>
              <li><a href="/resources/etims-onboarding-guide/" className="text-brand underline underline-offset-2 hover:text-brand-hover">eTIMS Kenya Onboarding Guide 2026</a> — get the current system right first</li>
              <li><a href="/resources/etims-invoicing-guide/" className="text-brand underline underline-offset-2 hover:text-brand-hover">eTIMS Compliant Invoice Guide</a> — what a valid invoice contains</li>
              <li><a href="/resources/kra-vat-penalties-reference/" className="text-brand underline underline-offset-2 hover:text-brand-hover">KRA VAT Penalties Reference</a> — what non-compliance costs</li>
              <li><a href="/resources/kra-tax-amnesty-2026/" className="text-brand underline underline-offset-2 hover:text-brand-hover">KRA Tax Amnesty 2026</a> — clear old penalties before the December window closes</li>
            </ul>
          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-hairline">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink-muted mb-4">
            More guides
          </p>
          <ArticleGrid currentSlug="cetis-kenya-2027" />
        </div>

        <div className="mt-12">
          <NewsletterSignup />
        </div>
      </div>
    </>
  )
}