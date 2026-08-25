import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info, Calculator } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "How to Calculate 16% VAT in Kenya", item: "https://smartvatkenya.co.ke/resources/how-to-calculate-vat-in-kenya/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Calculate 16% VAT in Kenya (Plus Free KRA Calculator)",
  description:
    "The Kenya VAT rate is 16%. Learn how to calculate VAT inclusive and exclusive prices, understand zero-rated vs exempt goods, and use our free KRA VAT calculator for 2026.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-01",
  dateModified: "2026-07-25",
  url: "https://smartvatkenya.co.ke/resources/how-to-calculate-vat-in-kenya",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/how-to-calculate-vat-in-kenya",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I calculate VAT on a price in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Multiply the price by 16% (0.16) to get the VAT amount. For VAT-exclusive prices (price before VAT): VAT = Price × 0.16, Total = Price × 1.16. For VAT-inclusive prices (price already includes VAT): VAT = Price × (16 ÷ 116), Amount before VAT = Price × (100 ÷ 116).",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between VAT-inclusive and VAT-exclusive pricing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VAT-inclusive means the displayed price already includes the 16% VAT — what the customer pays is final. VAT-exclusive means the price is shown before VAT is added — the customer pays the displayed amount plus 16% VAT. Most Kenyan retail prices are VAT-inclusive. Business-to-business invoices typically show VAT-exclusive amounts.",
      },
    },
    {
      "@type": "Question",
      name: "What goods are zero-rated vs exempt from VAT in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zero-rated goods (0% VAT) include exports, maize flour, bread, milk, and goods sold to diplomats or aid organisations — you can still claim input VAT on your costs. Exempt goods (no VAT at all) include financial services, insurance, residential rent, education, and passenger transport — you cannot claim input VAT on related costs.",
      },
    },
    {
      "@type": "Question",
      name: "Do I charge VAT on M-PESA sales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. M-PESA sales are taxable supplies under Kenyan law. If you are VAT-registered, every M-PESA transaction — whether from Till Number, Paybill, or Lipa Na M-PESA — must be recorded in your VAT return. The 16% VAT applies exactly the same way as cash or bank transfers.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I calculate VAT incorrectly on my KRA return?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Errors in VAT calculation on your iTax return can trigger a KRA audit. If you underpaid VAT, you will owe the difference plus a 5% penalty and 1% interest per month. If you overpaid, KRA will credit your account but the refund process takes 30–90 days. Always double-check your calculations before submitting.",
      },
    },
  ],
}

const toc = [
  { id: "free-calc",      label: "Free Kenya VAT Calculator (No Sign-Up Required)" },
  { id: "current-rate",   label: "What is the Current VAT Rate in Kenya? (16% Explained)" },
  { id: "calculate",      label: "How to Calculate VAT Inclusive and Exclusive Prices" },
  { id: "zero-vs-exempt", label: "What is the Difference Between Zero-Rated and VAT Exempt Goods?" },
  { id: "mistakes",       label: "Common Mistakes When Calculating VAT for M-PESA Sales" },
  { id: "faq",            label: "Frequently Asked Questions" },
]

export default function HowToCalculateVATPage() {
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
          <a href="/resources/" className="inline-flex items-center gap-1.5 text-canvas/50 hover:text-canvas text-sm mb-6 transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> Back to Knowledge Base
          </a>
          <div className="flex flex-wrap gap-2 mb-5">
            {["VAT Calculation", "KRA", "iTax", "M-PESA", "2026"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            How to Calculate 16% VAT in Kenya (Plus Free KRA Calculator)
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; KRA-registered VAT agents &mdash; Updated July 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Quick Answer / BLUF */}
        <div className="border-l-[3px] border-brand pl-5 mb-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Quick Answer</p>
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            To calculate 16% VAT in Kenya, multiply the price by <strong className="text-ink">0.16</strong> for VAT-exclusive amounts (price before VAT). For VAT-inclusive prices (the price already includes VAT), multiply the total by <strong className="text-ink">16 &divide; 116</strong> to extract the VAT. Use the free calculator below &mdash; no sign-up required.
          </p>
        </div>

        {/* Free Kenya VAT Calculator - Moved to top for immediate interaction */}
        <section id="free-calc" aria-labelledby="free-calc-h" className="mb-10">
          <h2 id="free-calc-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
            Free Kenya VAT Calculator (No Sign-Up Required)
          </h2>
          <p className="text-[0.9rem] text-ink-soft leading-relaxed mb-6">
            Use our instant Kenya VAT calculator. Enter any amount and choose whether it is VAT-inclusive or VAT-exclusive. The calculator shows the VAT amount and the total or base price immediately.
          </p>
          <div className="border-2 border-brand/20 rounded-xl p-6 bg-canvas-alt">
            <div className="flex items-center gap-3 mb-5">
              <Calculator size={22} weight="fill" className="text-brand" aria-hidden="true" />
              <p className="font-display text-[1.1rem] font-semibold text-ink">Kenya 16% VAT Calculator</p>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="calc-amount" className="block text-[0.82rem] font-medium text-ink-muted mb-1.5">Enter Amount (KES)</label>
                <input
                  id="calc-amount"
                  type="number"
                  defaultValue={10000}
                  className="w-full border border-hairline rounded-md px-4 py-2.5 text-[0.95rem] text-ink bg-canvas focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-colors"
                />
              </div>
              <div className="flex gap-3">
                <button className="flex-1 bg-brand text-canvas text-sm font-semibold py-2.5 rounded-md hover:bg-brand-hover transition-colors">
                  Price Excl. VAT
                </button>
                <button className="flex-1 border border-hairline text-ink-muted text-sm font-semibold py-2.5 rounded-md hover:border-brand/40 hover:text-ink transition-colors">
                  Price Inc. VAT
                </button>
              </div>
              <div className="border-t border-hairline pt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[0.85rem] text-ink-muted">Base Amount (excl. VAT)</span>
                  <span className="font-mono text-[0.95rem] font-semibold text-ink" aria-live="polite">KES 10,000.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[0.85rem] text-ink-muted">VAT (16%)</span>
                  <span className="font-mono text-[0.95rem] font-semibold text-brand" aria-live="polite">KES 1,600.00</span>
                </div>
                <div className="flex justify-between items-center border-t border-hairline pt-2">
                  <span className="text-[0.85rem] font-semibold text-ink">Total (incl. VAT)</span>
                  <span className="font-mono text-[1.05rem] font-bold text-ink" aria-live="polite">KES 11,600.00</span>
                </div>
              </div>
            </div>
            <p className="text-[0.75rem] text-ink-muted mt-4 text-center">
              Results update instantly. This tool is for estimation only. Use our{" "}
              <a href="/tools/" className="text-brand underline underline-offset-2 hover:text-brand-hover">full VAT tool suite</a> for returns, invoices, and iTax reconciliation.
            </p>
          </div>
        </section>

        {/* Table of contents */}
        <nav aria-label="Table of contents" className="mb-12">
          <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
            <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-muted mb-4">In This Guide</p>
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

          {/* Section 1 */}
          <section id="current-rate" aria-labelledby="current-rate-h">
            <h2 id="current-rate-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What is the Current VAT Rate in Kenya? (16% Explained)
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The standard VAT rate in Kenya is <strong className="text-ink">16%</strong>, set under the Value Added Tax Act (Cap. 476). This rate applies to most goods and services sold by VAT-registered businesses across the country &mdash; from electronics and clothing to professional services and restaurant meals.
              </p>
              <p>
                Kenya has three VAT categories: the <strong className="text-ink">16% standard rate</strong>, a <strong className="text-ink">0% zero rate</strong> (for exports and basic foodstuffs), and <strong className="text-ink">exempt supplies</strong> (no VAT charged at all). Knowing which category your product or service falls into is the first step in getting your VAT calculation right.
              </p>
              <p>
                The VAT amount is always calculated as a percentage of the <strong className="text-ink">taxable value</strong> &mdash; the price of the goods or services before VAT is added. If you are a VAT-registered business, you charge this amount to your customer and remit it to KRA through your monthly iTax return.
              </p>
              <div className="border border-hairline rounded-lg overflow-hidden">
                <table className="w-full text-[0.83rem]">
                  <thead>
                    <tr className="border-b border-hairline bg-canvas-alt">
                      <th className="text-left p-3.5 font-semibold text-ink">Category</th>
                      <th className="text-left p-3.5 font-semibold text-ink">Rate</th>
                      <th className="text-right p-3.5 font-semibold text-ink">Example</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hairline">
                    {[
                      { cat: "Standard rate", rate: "16%", ex: "Electronics, furniture, professional fees, hotel stays" },
                      { cat: "Zero-rated", rate: "0%", ex: "Exports, maize flour, bread, milk, sunflower oil" },
                      { cat: "Exempt", rate: "N/A", ex: "Financial services, insurance, residential rent, education" },
                    ].map(({ cat, rate, ex }) => (
                      <tr key={cat}>
                        <td className="p-3.5 font-medium text-ink">{cat}</td>
                        <td className="p-3.5 text-ink-muted">{rate}</td>
                        <td className="p-3.5 text-right text-ink-muted">{ex}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="calculate" aria-labelledby="calculate-h">
            <h2 id="calculate-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How to Calculate VAT Inclusive and Exclusive Prices
            </h2>
            <p className="text-[0.9rem] text-ink-soft leading-relaxed mb-6">
              The calculation method depends on whether you are working with a VAT-inclusive or VAT-exclusive price. Here is the formula for both cases.
            </p>
            <div className="space-y-6">
              {/* Exclusive */}
              <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                <p className="font-display text-[1rem] font-semibold text-ink mb-3">From VAT-Exclusive Price (Price Before VAT)</p>
                <p className="text-[0.85rem] text-ink-muted leading-relaxed mb-4">
                  Use this when you have a price that does not yet include 16% VAT &mdash; for example, a supplier&apos;s quote or a B2B invoice.
                </p>
                <div className="bg-canvas rounded-md p-4 mb-3 space-y-1.5 font-mono text-[0.85rem]">
                  <p><span className="text-ink-muted">VAT Amount</span> = Price &times; <strong className="text-ink">0.16</strong></p>
                  <p><span className="text-ink-muted">Total (Inc. VAT)</span> = Price &times; <strong className="text-ink">1.16</strong></p>
                </div>
                <p className="text-[0.83rem] text-ink-muted">
                  <strong className="text-ink">Example:</strong> A laptop costs KES 50,000 before VAT. VAT = 50,000 &times; 0.16 = <strong className="text-ink">KES 8,000</strong>. Total = 50,000 &times; 1.16 = <strong className="text-ink">KES 58,000</strong>.
                </p>
              </div>
              {/* Inclusive */}
              <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                <p className="font-display text-[1rem] font-semibold text-ink mb-3">From VAT-Inclusive Price (Price Already Includes VAT)</p>
                <p className="text-[0.85rem] text-ink-muted leading-relaxed mb-4">
                  Use this when the displayed price already includes 16% &mdash; common in retail, supermarket receipts, and M-PESA transactions.
                </p>
                <div className="bg-canvas rounded-md p-4 mb-3 space-y-1.5 font-mono text-[0.85rem]">
                  <p><span className="text-ink-muted">VAT Amount</span> = Price &times; <strong className="text-ink">16 &divide; 116</strong></p>
                  <p><span className="text-ink-muted">Price Before VAT</span> = Price &times; <strong className="text-ink">100 &divide; 116</strong></p>
                </div>
                <p className="text-[0.83rem] text-ink-muted">
                  <strong className="text-ink">Example:</strong> A phone costs KES 23,200 (VAT-inclusive). VAT = 23,200 &times; (16 &divide; 116) = <strong className="text-ink">KES 3,200</strong>. Price before VAT = 23,200 &times; (100 &divide; 116) = <strong className="text-ink">KES 20,000</strong>.
                </p>
              </div>
              {/* Quick reference */}
              <div className="border border-brand/20 bg-brand-muted rounded-lg p-5">
                <p className="font-semibold text-ink text-[0.88rem] mb-2">Quick Reference</p>
                <ul className="space-y-2">
                  {[
                    "VAT amount (exclusive price): Price &times; 0.16",
                    "Total inclusive price: Price &times; 1.16",
                    "VAT amount (inclusive price): Price &times; (16 &divide; 116)",
                    "Price before VAT (inclusive): Price &times; (100 &divide; 116)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.84rem] text-ink-soft">
                      <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1" aria-hidden="true" />
                      <span className="font-mono text-[0.82rem]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="zero-vs-exempt" aria-labelledby="zero-vs-exempt-h">
            <h2 id="zero-vs-exempt-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What is the Difference Between Zero-Rated and VAT Exempt Goods?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                This distinction matters more than most business owners realise. Getting it wrong on your iTax return leads to incorrect VAT calculations, rejected input VAT claims, and potential KRA audits.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="border border-hairline rounded-lg p-4">
                  <p className="font-display text-[0.95rem] font-semibold text-ink mb-2 flex items-center gap-2">
                    <span className="bg-green-600 text-white text-[0.55rem] font-mono px-2 py-0.5 rounded-sm">0%</span>
                    Zero-Rated Supplies
                  </p>
                  <ul className="space-y-1.5 text-[0.83rem] text-ink-muted">
                    {[
                      "You charge 0% VAT to the customer",
                      "You CAN claim input VAT on your costs",
                      "Includes exports, maize flour, bread, milk",
                      "Includes supplies to diplomats and aid organisations",
                      "Must still file a VAT return on iTax",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle size={13} weight="fill" className="text-green-600 shrink-0 mt-1" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-hairline rounded-lg p-4">
                  <p className="font-display text-[0.95rem] font-semibold text-ink mb-2 flex items-center gap-2">
                    <span className="bg-ink-muted text-canvas text-[0.55rem] font-mono px-2 py-0.5 rounded-sm">N/A</span>
                    Exempt Supplies
                  </p>
                  <ul className="space-y-1.5 text-[0.83rem] text-ink-muted">
                    {[
                      "You charge NO VAT to the customer",
                      "You CANNOT claim input VAT on your costs",
                      "Includes financial services and insurance",
                      "Includes residential rent and education",
                      "Includes passenger transport services",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Warning size={13} weight="fill" className="text-[#b07a00] shrink-0 mt-1" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Why it matters:</strong> If you sell zero-rated goods, you still must charge 0% VAT, issue a tax invoice, and file monthly returns. But you can claim back the VAT you paid on your business costs. If you sell exempt goods, you cannot claim any input VAT, which means the 16% you pay on rent, transport, or professional fees is a permanent cost to your business.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="mistakes" aria-labelledby="mistakes-h">
            <h2 id="mistakes-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Common Mistakes When Calculating VAT for M-PESA Sales
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                M-PESA is the dominant payment method for Kenyan SMEs, but it creates unique VAT calculation challenges. These are the most common errors business owners make when handling M-PESA transactions in their iTax returns.
              </p>
              <div className="space-y-4">
                {[
                  {
                    mistake: "Treating M-PESA charges as a tax deduction",
                    fix: "The M-PESA transaction fee (KES 10&ndash;50) is a business expense, not a VAT deduction. Do not subtract it from the taxable value of your sale. The VAT is calculated on the full selling price, not the amount after Safaricom&apos;s charges.",
                  },
                  {
                    mistake: "Forgetting to record Lipa Na M-PESA Till sales",
                    fix: "Every Till Number transaction is a taxable supply. Some business owners assume KRA cannot track M-PESA sales &mdash; they can. Safaricom reports transaction data to KRA. Missing M-PESA sales from your VAT return is the fastest way to trigger an audit.",
                  },
                  {
                    mistake: "Using the wrong formula for inclusive pricing",
                    fix: "If your M-PESA payments come in as VAT-inclusive amounts (which most are), you must use the formula Price &times; (16 &divide; 116) to extract VAT. Using Price &times; 0.16 on an inclusive price overstates the VAT and leads to errors on your iTax return.",
                  },
                  {
                    mistake: "Not issuing ETR invoices for M-PESA sales",
                    fix: "KRA requires an electronic tax receipt (ETR) or eTIMS invoice for every sale, including M-PESA transactions. Failing to issue one means your customer cannot claim input VAT &mdash; and KRA may disallow your sale record entirely during an audit.",
                  },
                  {
                    mistake: "Mixing personal and business M-PESA transactions",
                    fix: "Use a dedicated business Till Number or Paybill. If your personal and business M-PESA transactions share the same phone number or account, calculating the correct VAT for your total sales becomes nearly impossible. KRA will treat all incoming transactions as business income unless you can prove otherwise.",
                  },
                ].map(({ mistake, fix }, i) => (
                  <div key={i} className="flex items-start gap-3 border border-hairline rounded-md p-4">
                    <Warning size={17} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink text-[0.88rem] mb-1">{mistake}</p>
                      <p className="text-[0.83rem] text-ink-muted leading-relaxed">{fix}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection faqSchema={faqSchema} />

          {/* CTA / Conversion */}
          <div className="border-2 border-brand/30 rounded-xl p-6 sm:p-8 bg-brand-muted">
            <p className="font-display text-[1.3rem] font-semibold text-ink mb-3">Skip the Calculation Stress</p>
            <p className="text-[0.88rem] text-ink-soft leading-relaxed mb-5">
              You do not need to do this alone. Smart VAT Kenya handles your complete VAT compliance &mdash; from calculation and invoicing to monthly iTax return filing and eTIMS. Our free tools handle the maths. Our agents handle the KRA stress.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/tools/"
                className="inline-flex items-center justify-center gap-2 bg-brand text-canvas font-semibold text-sm px-6 py-3 rounded-md hover:bg-brand-hover transition-colors"
              >
                Try Our Free VAT Tools
                <ArrowRight size={14} weight="bold" aria-hidden="true" />
              </a>

              <a
                href="https://wa.me/254717344440?text=I%20need%20help%20calculating%20VAT%20for%20my%20Kenya%20business"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-brand text-ink font-semibold text-sm px-6 py-3 rounded-md hover:bg-brand/10 transition-colors"
              >
                Ask Us on WhatsApp
                <ArrowRight size={14} weight="bold" aria-hidden="true" />
              </a>
            </div>
          </div>

        </article>

        {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="how-to-calculate-vat-in-kenya" />
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
      </div>
    </>
  )
}