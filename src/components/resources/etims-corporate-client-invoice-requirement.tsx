import { ArrowLeft, ArrowRight, Warning } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const faqs = [
  {
    q: "I'm a small business — do I really need to issue eTIMS invoices to one big client?",
    a: "Yes — especially if your client claims expenses or input VAT on what you supply. Size doesn't exempt you from their accounting rules. eTIMS Lite (free, web/USSD) is the right level for small suppliers and handles low invoice volumes comfortably.",
  },
  {
    q: "My client wants eTIMS invoices but I haven't onboarded yet. Can I backdate?",
    a: "No — eTIMS invoices cannot be backdated. The right move is to onboard now (it is fast) and issue everything from today. Most clients prefer an honest 'we're onboarding now' over re-issued paper.",
  },
  {
    q: "I'm a sole proprietor or consultant. Is eTIMS mandatory for me?",
    a: "If you are in business, yes. Any client withholding tax or claiming an expense on your invoice needs that invoice to go through eTIMS. Onboarding is quick when your iTax details are in order.",
  },
  {
    q: "Do I need special invoicing software for eTIMS?",
    a: "No — eTIMS Lite (free) or the eTIMS mobile app covers it. High-volume businesses graduate to POS or API integration later; that is a volume decision, not an entry requirement.",
  },
  {
    q: "Do I put the client's KRA PIN on my invoice?",
    a: "Yes, for B2B: the client's PIN goes on the invoice so they can claim input VAT. For B2C (individual) sales, no buyer PIN is needed. Those two rules carry the whole system.",
  },
  {
    q: "My client is VAT-registered but I'm not — which invoice type is correct?",
    a: "When the two parties' VAT statuses don't match, the invoice type usually follows the non-VAT side's rules. Confirming the right combination takes about two minutes with KRA support or an advisor — and prevents a batch of rejected invoices.",
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "Client Asking for an eTIMS Invoice — the 5-Day Fix", item: "https://smartvatkenya.co.ke/resources/etims-corporate-client-invoice-requirement/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Your Client Just Asked for an eTIMS Invoice — Do This Within 5 Days",
  description:
    "Corporate clients now demand eTIMS invoices before they pay. Small suppliers are losing accounts over late onboarding — here's why clients insist, and the five-day fix.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-08-09",
  dateModified: "2026-08-09",
  url: "https://smartvatkenya.co.ke/resources/etims-corporate-client-invoice-requirement",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/etims-corporate-client-invoice-requirement",
}

export default function EtimsCorporateClientInvoiceRequirement() {
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
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand mb-3">Corporate Clients &mdash; eInvoicing</p>
            <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-semibold text-ink tracking-tight leading-tight mb-3 text-balance">
              Your Client Just Asked for an eTIMS Invoice — Do This Within 5 Days (or Risk the Account)
            </h1>
            <p className="text-[0.9rem] text-ink-muted leading-relaxed">
              <time dateTime="2026-08-09">9 August 2026</time> &middot; Fact-checked 9 Aug 2026
            </p>
          </header>

          <div className="bg-brand/5 border border-brand/15 rounded-lg p-5 mb-8 flex items-start gap-3">
            <Warning size={20} className="text-brand shrink-0 mt-0.5" weight="fill" />
            <div>
              <p className="text-sm font-semibold text-ink mb-1">If your client cannot claim your invoice, your invoice quietly goes to a supplier who can issue one</p>
              <p className="text-sm text-ink-muted leading-relaxed">
                Your client's compliance depends on your eTIMS invoice — their deduction, their input VAT, their TCC.
                That is why they won't wait. The good news: onboarding takes days, not months.
              </p>
            </div>
          </div>

          <div className="prose prose-gray max-w-none">
            <h2>The Call That Changes Everything</h2>
            <p>
              One day it arrives quietly — an email from your client's accounts team:{" "}
              <em>"Please ensure all invoices going forward are eTIMS-compliant."</em> Or your supplier request is
              rejected because the invoice looks wrong. Or your contact says it flatly: <em>"Sorry, we can't recognize
              this receipt — we need an eTIMS invoice."</em>
            </p>
            <p>
              This is happening to thousands of Kenyan businesses right now — vehicle services, hardware, consultancy,
              freight, catering, everything with corporate clients. It's not a nightmare you may face. It's the new
              business reality, and the sooner you understand it, the cheaper it is.
            </p>
            <p>
              <strong>The clock starts at the first email.</strong> In practice, the first rejection follows within
              days — and clients switch suppliers who can produce the invoice, not the ones who promise to "work on it".
            </p>
            <p>
              <strong>If your client cannot claim your invoice, your invoice quietly goes to a supplier who can issue one.</strong>
            </p>
            <p>
              For the businesses that acted early, eTIMS has become what a registration certificate used to be: the
              price of admission. It takes days, not months. This page covers why clients insist, what happens when you
              don't comply, and what to do in the next five days — nothing more.
            </p>

            <h2>Why Corporate Clients Insist on eTIMS Invoices — and Won't Wait</h2>
            <p>Your client's accounts team isn't being difficult. Their own compliance depends on your invoice:</p>
            <ol>
              <li>
                <strong>Your cost is only deductible with an eTIMS invoice.</strong> Your client deducts what they pay
                you from their profits. Under the rules as they stand, that deduction is only valid if the supporting
                invoice went through eTIMS. Without it, the expense is rejected in their own return — so they literally
                cannot afford a non-eTIMS invoice from you.
              </li>
              <li>
                <strong>Input VAT fails without it.</strong> To claim input VAT on your supply, they must hold a valid
                eTIMS invoice. Wrong format, no claim.
              </li>
              <li>
                <strong>Their Tax Compliance Certificate depends on a clean chain.</strong> TCCs now attach to
                compliance across the supply chain — and a supplier with no eTIMS is a red mark in any audit conversation.
              </li>
            </ol>
            <p>
              That's why clients send near-identical notices to everyone they buy from:{" "}
              <em>"All invoices must be eTIMS-compliant."</em> And over time, it extends from corporate buyers to anyone
              who invoices a taxpayer who files.
            </p>

            <h2>What Happens When You Don't Have It — and What It Costs</h2>
            <ul>
              <li><strong>Rejection, re-invoice, delay.</strong> Your invoice bounces, the money stalls, and the same work quietly switches to a supplier who can produce the invoice.</li>
              <li><strong>Quiet loss of repeat work.</strong> Clients don't usually fire you — they just stop placing work. The invoice is the passcode to their systems, and there's nothing personal in it: a format requirement, applied equally.</li>
              <li><strong>The pattern is public.</strong> In April 2024, a Nairobi car wash operator told the Daily Nation his corporate business had fallen from roughly 20 cars a day to a handful after clients began demanding compliant invoicing. The exact figures don't matter — the lesson does. Small businesses lose more from a few lost corporate accounts than from any penalty letter.</li>
            </ul>

            <h2>How to Fix It — the Five-Day Path (Start Today)</h2>
            <p>You do not need an expensive system. Realistic steps:</p>
            <ol>
              <li>
                <strong>Day 1–2 — Know where you stand.</strong> Log in to iTax. VAT-registered but not yet on eTIMS?
                Onboard now — eTIMS Lite (web/USSD) is free and handles a handful of invoices a month, which covers
                most service businesses.
              </li>
              <li>
                <strong>Day 2–3 — Issue one real invoice.</strong> Generate an invoice for a genuine low-value
                transaction, inspect it, and — if you can — have an advisor review it once. Most owners overestimate
                how hard this is.
              </li>
              <li>
                <strong>Day 3–4 — Tell your clients.</strong> Write to the corporate clients that matter:{" "}
                <em>"We've onboarded eTIMS — invoices from [date] carry eTIMS invoice numbers."</em>{" "}
                One honest line rebuilds months of trust.
              </li>
              <li>
                <strong>Day 5 — Update your documents.</strong> Add the statement to your quotes and invoice templates.
                From day six, it's habit.
              </li>
            </ol>
            <p>
              And run the habit on the other side too: <strong>when you buy for the business — fuel, stationery,
              internet, tools — ask for an eTIMS receipt with your PIN.</strong> You can't claim your side cleanly
              while your suppliers' invoices stay paper.
            </p>

            <h2>What NOT to Do — the Mistakes That Cost Suppliers the Account</h2>
            <ul>
              <li>
                <strong>Don't wait for the second reminder.</strong> The first reminder is usually days before the first
                rejection, and the fix takes days. Act on the first.
              </li>
              <li>
                <strong>Don't submit paper or till invoices as replacements.</strong> The mismatch between invoice types
                is exactly what the rejection cycle detects.
              </li>
              <li>
                <strong>Don't assume "this is KRA again, it will pass."</strong> It hasn't and it won't — every finance
                function in the country is now validating against the real system in real time. The cheapest strategy in
                Kenya today is to get ahead of the standard.
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <FAQSection faqSchema={faqSchema} />
        </article>

        {/* Sources & Methodology */}
        <div className="mt-12 border-t border-hairline pt-8">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-muted mb-3">Sources &amp; Methodology</p>
          <p className="text-[0.78rem] text-ink-muted leading-relaxed max-w-[60ch]">
            Fact-checked 9 August 2026: KRA eTIMS guidance, Tax Procedures Act rules on deductions and input VAT, the
            April 2024 Daily Nation report on corporate invoicing demands, and Smart VAT Kenya's experience onboarding
            small suppliers for corporate clients.
          </p>
        </div>

        {/* More Guides */}
        <div className="mt-10 pt-16 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="etims-corporate-client-invoice-requirement" />
        </div>

        {/* CTA */}
        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6">
          <p className="font-display text-[1rem] font-semibold text-ink mb-3">Your move</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 leading-relaxed">
            If you're reading this with client emails sitting in your inbox:
          </p>
          <ul className="space-y-2 text-[0.85rem] text-ink-soft mb-5">
            <li className="flex items-start gap-2"><span className="text-brand font-bold mt-px">•</span> Free 15-minute WhatsApp chat — review where your invoices stand and what they need to become</li>
            <li className="flex items-start gap-2"><span className="text-brand font-bold mt-px">•</span> eTIMS onboarding (KES 3,500) — set up end to end, test invoice included</li>
            <li className="flex items-start gap-2"><span className="text-brand font-bold mt-px">•</span> VAT registration (KES 5,000) — if registration comes first</li>
          </ul>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/254717344440?text=Hi%2C%20my%20client%20is%20asking%20for%20eTIMS%20invoices.%20I%20need%20help."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
            >
              WhatsApp Now
              <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
            <a
              href="/services/etims-onboarding/"
              className="inline-flex items-center gap-2 border border-brand text-brand text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand/10 transition-colors"
            >
              eTIMS Onboarding
            </a>
            <a
              href="/services/vat-registration/"
              className="inline-flex items-center gap-2 border border-brand text-brand text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand/10 transition-colors"
            >
              VAT Registration
            </a>
          </div>
        </div>
      </div>
    </>
  )
}