import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info, XCircle } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "Do I Need to Register for VAT in Kenya?", item: "https://smartvatkenya.co.ke/resources/do-i-need-to-register-for-vat-kenya/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Do I Need to Register for VAT? (A Simple Guide for Kenyan SMEs)",
  description:
    "If your business turnover is KES 5 million or more per year, you must register for VAT in Kenya. Below that threshold, voluntary registration is optional. Learn the pros, cons, and how registration impacts your pricing and customers.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-01",
  dateModified: "2026-07-25",
  url: "https://smartvatkenya.co.ke/resources/do-i-need-to-register-for-vat-kenya",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/do-i-need-to-register-for-vat-kenya",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the VAT registration threshold in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The mandatory VAT registration threshold in Kenya is KES 5 million in annual taxable turnover. Any business whose taxable supplies reach or exceed KES 5 million in a twelve-month period must register for VAT within 30 days. Taxable turnover excludes exempt supplies like financial services, residential rent, and education.",
      },
    },
    {
      "@type": "Question",
      name: "Can a small business with turnover below KES 5 million register for VAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Businesses with turnover below KES 5 million can apply for voluntary VAT registration. This allows you to charge VAT on your sales and claim back input VAT on your purchases. It is common among businesses that supply to VAT-registered companies or have high operating costs with significant VAT on their expenses.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I don't register for VAT when I exceed KES 5 million?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Failing to register for VAT within 30 days of exceeding KES 5 million attracts a penalty of KES 100,000 or the tax that would have been due (whichever is higher). KRA can also backdate your registration and demand VAT on all sales made after you crossed the threshold, plus interest and penalties.",
      },
    },
    {
      "@type": "Question",
      name: "How does VAT registration affect my pricing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Once VAT-registered, you must add 16% VAT to your prices and issue tax invoices showing the VAT amount. If your customers are end consumers, your prices effectively rise by 16%. If your customers are other VAT-registered businesses, they can claim the VAT back, so the net cost to them does not change.",
      },
    },
    {
      "@type": "Question",
      name: "What documents do I need to register for VAT in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You need: KRA PIN certificate, national ID or passport (for all directors/partners), business name and physical address, bank account details, Certificate of Incorporation (for companies), CR12 dated within 90 days (for companies), and a business permit where applicable. All uploads must be under 1MB in PDF or JPG format.",
      },
    },
    {
      "@type": "Question",
      name: "How do I find a reliable VAT agent in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Look for a KRA-registered tax agent with a verified physical address, a KRA PIN, and a track record of successful VAT registrations. Avoid agents who ask you to pay in cash with no receipt, guarantee unrealistic timelines, or request your iTax password. Smart VAT Kenya charges a flat KES 5,000 fee and is fully registered with KRA.",
      },
    },
  ],
}

const toc = [
  { id: "small-businesses", label: "Do Small Businesses Need to Register for VAT in Kenya?" },
  { id: "below-threshold",  label: "Can I Register for VAT if My Turnover is Below KES 5 Million?" },
  { id: "pros-cons",        label: "Pros and Cons of Voluntary VAT Registration" },
  { id: "pricing",          label: "How VAT Registration Affects Your Pricing and Customers" },
  { id: "hire-agent",       label: "How to Hire an Agent to Handle Your VAT (Avoid Scams)" },
  { id: "faq",              label: "Frequently Asked Questions" },
]

export default function DoINeedVATPage() {
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
            {["VAT Registration", "Threshold", "SME Guide", "2026"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            Do I Need to Register for VAT? (A Simple Guide for Kenyan SMEs)
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; KRA-registered VAT agents &mdash; Updated July 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Quick Answer / BLUF */}
        <div className="border-l-[3px] border-brand pl-5 mb-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Quick Answer</p>
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            You must register for VAT in Kenya if your annual taxable turnover reaches or exceeds{" "}
            <strong className="text-ink">KES 5 million</strong>. If your turnover is below that, registration is voluntary - but it can still benefit you.             This guide covers the{" "}
            <strong className="text-ink">KES 5 million threshold rule</strong>, voluntary registration,{" "}
            <a href="/resources/vat-vs-turnover-tax/" className="text-brand underline underline-offset-2 hover:text-brand-hover">turnover tax (ToT)</a>, how VAT changes your pricing, and how to avoid scam agents when you{" "}
            <strong className="text-ink">hire someone to handle your KRA PIN for VAT</strong>.
          </p>
        </div>

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
          <section id="small-businesses" aria-labelledby="small-businesses-h">
            <h2 id="small-businesses-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Do Small Businesses Need to Register for VAT in Kenya?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The short answer: <strong className="text-ink">only if your turnover is KES 5 million or more</strong>. The Kenya VAT Act (Cap. 476) sets this as the mandatory registration threshold. Once your taxable supplies - goods and services that attract 16% or 0% VAT - hit KES 5 million in any rolling twelve-month period, you must apply for a <strong className="text-ink">KRA PIN for VAT</strong> within 30 days.
              </p>
              <p>
                Taxable turnover does not include exempt supplies such as financial services, residential rent, education, or medical services. If your revenue comes mostly from these categories, you may not need to register even if your total income exceeds KES 5 million.
              </p>
              <div className="border border-canvas-warm bg-[#fffbf0] dark:bg-[#2a1f00] dark:border-[#4a3800] rounded-lg p-4 flex items-start gap-3">
                <Warning size={17} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#7a5500] dark:text-[#ffcc44] text-[0.85rem] mb-1">
                    Don&apos;t Ignore the Threshold
                  </p>
                  <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                    KRA cross-checks M-PESA statements, bank deposits, and supplier invoices. If they find you crossed KES 5 million without registering, you face a <strong>KES 100,000 penalty</strong> or the tax that would have been due (whichever is higher) plus backdated VAT. It is not worth the risk.
                  </p>
                </div>
              </div>
              <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                <p className="font-semibold text-ink text-[0.88rem] mb-2">How do I know if I have crossed the threshold?</p>
                <p className="text-[0.85rem] text-ink-muted leading-relaxed">
                  Add up all your sales from the last 12 months - cash, M-PESA, bank transfers, and card payments. If the total exceeds KES 5 million, you need to register. If you are close to the threshold, monitor your revenue monthly. Once you cross it, you have 30 days to apply on iTax.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="below-threshold" aria-labelledby="below-threshold-h">
            <h2 id="below-threshold-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Can I Register for VAT if My Turnover is Below KES 5 Million?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                <strong className="text-ink">Yes - this is called voluntary VAT registration.</strong> KRA allows any business - sole trader, partnership, or company - to register for VAT even if their turnover is below KES 5 million. Once approved, you get the same <strong className="text-ink">KRA PIN for VAT</strong> as a mandatory registrant. The difference? You chose to be here.
              </p>
              <p>
                Voluntary registration is common among Kenyan SMEs that:
              </p>
              <ul className="space-y-2 pl-1">
                {[
                  "Supply goods or services to large companies that are VAT-registered and insist on VAT invoices.",
                  "Have significant business expenses with 16% VAT attached - you can claim this back as input VAT.",
                  "Want to appear more established and credible to corporate clients and government tenders.",
                  "Plan to grow and would cross the KES 5 million threshold soon anyway.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.88rem] text-ink-soft">
                    <CheckCircle size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Note:</strong> Once you register voluntarily, you must follow all VAT rules - monthly returns, eTIMS invoicing, and record-keeping - just like a mandatory registrant. There is no &ldquo;light&rdquo; version of VAT for voluntary businesses.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="pros-cons" aria-labelledby="pros-cons-h">
            <h2 id="pros-cons-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Pros and Cons of Voluntary VAT Registration
            </h2>
            <p className="text-[0.9rem] text-ink-soft leading-relaxed mb-5">
              Before you decide to register voluntarily, weigh these factors against your specific business model.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="border border-green-300 dark:border-green-800 bg-green-50 dark:bg-green-950/30 rounded-lg p-5">
                <p className="font-semibold text-green-800 dark:text-green-300 text-[0.88rem] mb-4 flex items-center gap-2">
                  <CheckCircle size={16} weight="fill" aria-hidden="true" /> Pros
                </p>
                <ul className="space-y-3">
                  {[
                    "Claim back input VAT on purchases - this can save you thousands per month.",
                    "Access corporate and government clients who require VAT invoices.",
                    "Build credibility with suppliers and financial institutions.",
                    "Offset VAT on imports and large capital expenditures.",
                    "Prepare for growth - no scrambling to register when you hit KES 5 million.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[0.83rem] text-green-700 dark:text-green-200">
                      <span className="text-green-500 shrink-0 mt-0.5">&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-950/30 rounded-lg p-5">
                <p className="font-semibold text-red-800 dark:text-red-300 text-[0.88rem] mb-4 flex items-center gap-2">
                  <XCircle size={16} weight="fill" aria-hidden="true" /> Cons
                </p>
                <ul className="space-y-3">
                  {[
                    "Must file monthly VAT returns - even nil returns. Late filing costs KES 10,000 per month.",
                    "Must issue eTIMS invoices for every sale - no exceptions.",
                    "Your prices effectively rise by 16% for non-VAT-registered customers.",
                    "Ongoing compliance cost - you may need an accountant or agent.",
                    "KRA can audit your books at any time. Records must be kept for 5 years.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[0.83rem] text-red-700 dark:text-red-200">
                      <span className="text-red-500 shrink-0 mt-0.5">&#10007;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="pricing" aria-labelledby="pricing-h">
            <h2 id="pricing-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How VAT Registration Affects Your Pricing and Customers
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Once you are VAT-registered, you must add <strong className="text-ink">16% VAT</strong> to the price of every taxable sale. This changes how you price your products and how your customers see your costs.
              </p>
              <div className="border border-hairline rounded-lg overflow-hidden">
                <table className="w-full text-[0.83rem]">
                  <thead>
                    <tr className="border-b border-hairline bg-canvas-alt">
                      <th className="text-left p-3.5 font-semibold text-ink">Scenario</th>
                      <th className="text-right p-3.5 font-semibold text-ink">Before VAT</th>
                      <th className="text-right p-3.5 font-semibold text-ink">After VAT (16%)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hairline">
                    {[
                      { s: "Price to end consumer", b: "KES 10,000", a: "KES 11,600" },
                      { s: "Price to VAT-registered business", b: "KES 10,000", a: "KES 11,600 (they claim back KES 1,600)" },
                    ].map(({ s, b, a }) => (
                      <tr key={s}>
                        <td className="p-3.5 text-ink-muted">{s}</td>
                        <td className="p-3.5 text-right text-ink-muted">{b}</td>
                        <td className="p-3.5 text-right font-medium text-ink">{a}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                If most of your customers are <strong className="text-ink">individual consumers</strong> paying via M-PESA or cash, a 16% price increase may reduce sales. Your competitors who are not VAT-registered can offer lower prices because they do not charge VAT.
              </p>
              <p>
                If most of your customers are <strong className="text-ink">other businesses</strong> - especially large companies or government entities - they typically prefer (or require) VAT invoices. They can claim the VAT back, so the effective cost to them is unchanged. In this case, being VAT-registered is usually an advantage.
              </p>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Pricing tip:</strong> Many VAT-registered SMEs display prices &ldquo;inclusive of VAT&rdquo; to avoid shocking customers. For example, instead of quoting KES 11,600 + VAT, show &ldquo;KES 11,600 (VAT incl.)&rdquo;. The customer sees one number and you remit the VAT portion to KRA.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="hire-agent" aria-labelledby="hire-agent-h">
            <h2 id="hire-agent-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How to Hire an Agent to Handle Your VAT (Avoid Scams)
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Many SME owners choose to hire a <strong className="text-ink">VAT agent</strong> to handle registration, filing, and compliance. This is perfectly legal - KRA permits registered tax agents to act on your behalf. The key is finding a <strong className="text-ink">legitimate agent</strong> and avoiding the scams that have become common in Kenya.
              </p>
              <div className="border border-hairline rounded-lg p-5 bg-canvas-alt mb-4">
                <p className="font-semibold text-ink text-[0.88rem] mb-3">How to Identify a Legitimate VAT Agent</p>
                <ul className="space-y-3">
                  {[
                    { label: "Ask for their KRA PIN", note: "A real agent has their own KRA PIN and can provide it. Scammers will make excuses." },
                    { label: "Verify a physical address", note: "Legitimate agents have an office. Meet them or video-call at their location before paying." },
                    { label: "Get a written agreement", note: "The scope of work (registration, monthly filing, eTIMS) and the fee should be in writing." },
                    { label: "Pay via M-PESA to a business number", note: "Paying cash to an individual with no receipt is the biggest red flag." },
                    { label: "Check reviews or referrals", note: "Ask for references from other SME owners. Check Google Business or WhatsApp groups for reviews." },
                  ].map(({ label, note }) => (
                    <li key={label} className="flex items-start gap-3">
                      <CheckCircle size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <p className="font-semibold text-ink text-[0.85rem]">{label}</p>
                        <p className="text-[0.8rem] text-ink-muted mt-0.5">{note}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-canvas-warm bg-[#fffbf0] dark:bg-[#2a1f00] dark:border-[#4a3800] rounded-lg p-4 flex items-start gap-3">
                <Warning size={17} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#7a5500] dark:text-[#ffcc44] text-[0.85rem] mb-1">
                    Common VAT Agent Scams in Kenya
                  </p>
                  <ul className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] space-y-1 leading-relaxed">
                    <li>&bull; Agents who ask for your iTax password and never return your calls.</li>
                    <li>&bull; Agents who claim they can &ldquo;fix&rdquo; your KRA PIN for a &ldquo;special fee&rdquo; - there is no special fee.</li>
                    <li>&bull; Fake KRA officers who call demanding M-PESA payment for urgent registration.</li>
                    <li>&bull; Agents who guarantee VAT registration in 1 hour - KRA takes 1–3 working days.</li>
                  </ul>
                </div>
              </div>
              <div className="border border-brand/25 bg-brand-muted rounded-lg p-4 flex items-start gap-3">
                <Info size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-soft leading-relaxed">
                  <strong className="text-ink">Smart VAT Kenya</strong> is a fully KRA-registered tax agent. We charge a transparent flat <strong className="text-ink">KES 5,000</strong> fee payable via M-PESA to a business Paybill. You get a written agreement, a dedicated agent, and a 100% first-attempt approval guarantee. No hidden costs, no password harvesting.
                </p>
              </div>
            </div>
          </section>

          {/* Still Not Sure - Conversion */}
          <section aria-labelledby="cta-h">
            <div className="border border-brand/30 bg-brand-muted rounded-xl p-6 sm:p-8 text-center">
              <h2 id="cta-h" className="font-display text-[1.3rem] font-semibold text-ink mb-3 tracking-tight">
                Still Not Sure?
              </h2>
              <p className="text-[0.88rem] text-ink-soft leading-relaxed max-w-lg mx-auto mb-6">
                Not every business needs to register for VAT right now. Take our free 2-minute quiz to find out whether you should register, wait, or stay exempt - based on your actual revenue, expenses, and customer type.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="/tools/"
                  className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-6 py-3 rounded-md hover:bg-brand-hover transition-colors"
                >
                  Take the Free Quiz
                  <ArrowRight size={14} weight="bold" aria-hidden="true" />
                </a>
                <a
                  href="https://wa.me/254717344440?text=I%20read%20your%20VAT%20registration%20guide%20and%20I%20have%20a%20question."
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-brand text-brand font-semibold text-sm px-6 py-3 rounded-md hover:bg-brand/5 transition-colors"
                >
                  Ask Us on WhatsApp
                </a>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection faqSchema={faqSchema} />
        </article>

        {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="do-i-need-to-register-for-vat-kenya" />
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