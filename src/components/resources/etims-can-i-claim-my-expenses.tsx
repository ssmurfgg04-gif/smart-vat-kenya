import { ArrowLeft, ArrowRight, Info } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const faqs = [
  {
    q: "Do I need an eTIMS receipt for literally every business expense?",
    a: "For claims, yes — KRA cross-references the big categories at filing: supplier goods, fuel, rent, professional services, and imported digital services. The habit is correct regardless: always ask 'can I get this as an eTIMS invoice with my PIN?' — from suppliers, supermarkets, fuel stations and providers.",
  },
  {
    q: "Matatus and buses — is there an eTIMS receipt for business travel?",
    a: "Not systematically yet — but it is coming. Ride-hailing (Uber, Bolt) fares have moved to eTIMS receipts in 2026. For matatu and bus trips, keep the tickets and records in a simple travel log — and expect the rules to change as the system extends.",
  },
  {
    q: "Can I claim Facebook ads, Fiverr or an AI subscription without an eTIMS receipt?",
    a: "Foreign providers do not issue KRA eTIMS invoices, so hold the contract, the provider invoice, and the payment trail (M-Pesa/bank) as documentary support for these subscriptions. Digital services handled through the digital-services tax regime follow their own rules — this area is moving, so check with an advisor before claiming big amounts.",
  },
  {
    q: "Must the vehicle be company-registered to claim fuel?",
    a: "Yes — fuel claims trace to the asset that is the business's. If you are a sole proprietor driving a personal car for client visits, consult how to structure the vehicle properly before stacking up large fuel claims.",
  },
  {
    q: "Do I still need accounting software if I use eTIMS?",
    a: "Not for compliance alone — eTIMS Lite covers invoicing. But a bookkeeping tool (Zoho Books, QuickBooks, and others) still handles the rest: receipts, profit, reporting, finance hygiene. Many businesses run eTIMS and accounting software side by side: the eTIMS invoices are the tax layer, and the software is the business layer.",
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
    { "@type": "ListItem", position: 3, name: "Which Business Expenses Need an eTIMS Receipt?", item: "https://smartvatkenya.co.ke/resources/etims-can-i-claim-my-expenses/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Fuel, Rent, Electricity, Internet: Which Business Expenses Actually Need an eTIMS Receipt?",
  description:
    "Can you claim fuel, Safaricom internet, KPLC electricity, rent and M-Pesa payments as business expenses in 2026? The exact eTIMS receipt rules — and the 'wrong obligation ID' fix.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-08-09",
  dateModified: "2026-08-09",
  url: "https://smartvatkenya.co.ke/resources/etims-can-i-claim-my-expenses",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/etims-can-i-claim-my-expenses",
}

export default function EtimsCanIClaimMyExpenses() {
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
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand mb-3">Expense Claims &amp; eTIMS</p>
            <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-semibold text-ink tracking-tight leading-tight mb-3 text-balance">
              Fuel, Rent, Electricity, Internet: Which Business Expenses Actually Need an eTIMS Receipt?
            </h1>
            <p className="text-[0.9rem] text-ink-muted leading-relaxed">
              <time dateTime="2026-08-09">9 August 2026</time> &middot; Fact-checked 9 Aug 2026
            </p>
          </header>

          <div className="bg-brand/5 border border-brand/15 rounded-lg p-5 mb-8 flex items-start gap-3">
            <Info size={20} className="text-brand shrink-0 mt-0.5" weight="fill" />
            <div>
              <p className="text-sm font-semibold text-ink mb-1">The rule in one sentence</p>
              <p className="text-sm text-ink-muted leading-relaxed">
                To claim an expense, KRA must be able to trace it back to your KRA PIN — and for most purchases that
                means a document that went through eTIMS. A receipt without your PIN is treated as unproven. That is
                where the phrase <strong>"no eTIMS, no expense"</strong> comes from, and it is accurate.
              </p>
            </div>
          </div>

          <div className="prose prose-gray max-w-none">
            <h2>Why This Page Exists</h2>
            <p>
              Every week, business owners in Kenya ask the same questions — in WhatsApp groups, business forums, and
              over the counter:
            </p>
            <ul>
              <li><em>"I bought fuel for the delivery vehicle — is a till receipt from the pump enough?"</em></li>
              <li><em>"Can I claim my Safaricom internet as a business expense?"</em></li>
              <li><em>"The landlord won't give me any receipt — can I still claim rent?"</em></li>
              <li><em>"I pay KPLC tokens for the office — where's my eTIMS receipt?"</em></li>
              <li><em>"Do I need an eTIMS receipt for every single expense?"</em></li>
            </ul>
            <p>
              These are good questions, and most of the answers are shorter than you think. Here they are, one by one.
            </p>
            <p>
              <strong>Why it matters this month:</strong> KRA now cross-checks declared expenses against eTIMS at filing
              time — a receipt that never reached the system gets rejected, and your taxable profit grows by
              the unproven amount. The receipts you collect today decide the return you file this year.
            </p>

            <h2>Fuel — Can You Claim It Without an eTIMS Receipt?</h2>
            <p>
              Fuel is the classic case. If the vehicle is registered in the <strong>business's name</strong>, fuel for
              it is a genuine business expense — you claim it with a fuel receipt that went through eTIMS and carries
              your business PIN.
            </p>
            <p>What doesn't work: generic till/M-Pesa receipts without your PIN, handwritten dockets, or "fuel" lines listed with no receipt.</p>
            <p>Practical moves:</p>
            <ul>
              <li><strong>Ask for an eTIMS fuel receipt before you pay</strong> — the fuel module is mandatory for stations, and eTIMS receipts can be issued at the pump for both individual motorists and businesses. The deadline for station rollout was extended to 31 December 2025, and around 500 stations (about 16% of the country) were live by early 2026 — so a station that cannot yet issue an eTIMS receipt is a station mid-onboarding, not a business permanently exempt.</li>
              <li>If a station still can't issue one, keep the normal receipt <strong>plus</strong> a record (date, litres purchased, station, vehicle registration) in your books. Not perfect, but it is evidence.</li>
              <li>Ground rule: <strong>the vehicle must be registered to the business.</strong> A receipt for your personal car doesn't become the company's expense just because the business "used" it occasionally.</li>
            </ul>

            <h2>Safaricom Airtime and Internet — Can You Claim Them?</h2>
            <p>This is where owners get genuinely stuck — the mechanics exist, they're just new.</p>
            <ul>
              <li>Safaricom runs an official KRA compliance flow on its business portal (business.safaricom.co.ke/kra) — you submit your business KRA PIN once, and Safaricom's invoices for your account are then issued with it and transmitted to iTax in real time. Customer care can walk you through the documentation.</li>
              <li>In parallel, <strong>keep the payment records</strong>: M-Pesa statements, the account number, and any emailed invoice. If KRA validates later and your PIN is pending on a purchase, you at least have the audit trail built.</li>
            </ul>
            <p>If you can't get the PIN on a specific token or airtime purchase, log it honestly and keep the payment proof.</p>

            <h2>KPLC Tokens and Electricity — Can You Claim Them?</h2>
            <p>Power is a large cost — and a gnarly one:</p>
            <ul>
              <li>Electricity billing is tied to the <strong>meter owner's registration</strong> — usually the landlord or the named account holder, not the person who buys tokens.</li>
              <li>KRA's datasets include Kenya Power account records — so the meter's registered name should match the business that pays for it. That match is exactly what makes a power expense traceable.</li>
              <li>If the meter is registered in <strong>your business name</strong>, the bills plus token purchase records are your evidence — claim it.</li>
              <li>If you buy tokens on someone else's meter (rented space, shared premises), the expense belongs to the meter owner, not the token payer. Don't "reverse-engineer" a fake receipt — fix it at setup instead: ask the owner to register the meter to you or issue you a tax invoice for the service.</li>
            </ul>

            <h2>Rent — Can You Claim It Without a Landlord Receipt?</h2>
            <ul>
              <li>If your <strong>landlord</strong> is a VAT/eTIMS-aware taxpayer, they should issue monthly eTIMS rental invoices that include your PIN. Landlords increasingly do this — KRA has been moving the rental sector onto e-invoices precisely so tenants can claim rent as a business cost. Landlords earning between KES 288,000 and KES 15 million a year in rent sit in the Monthly Rental Income regime (7.5% on gross rent since January 2024), and that same landlord base is being onboarded onto eTIMS.</li>
              <li>If they refuse: <strong>ask in writing</strong>, keep every documented payment (M-Pesa reference, bank transfer), and hold that record. The claim without any invoice is risky — the ask-in-writing covers you in any audit conversation.</li>
            </ul>

            <h2>M-Pesa Till Receipts</h2>
            <p>
              M-Pesa till receipts are <strong>proof of payment</strong>, not tax invoices. The supplier's eTIMS invoice
              (with your PIN) is the claimable document; the M-Pesa receipt proves you actually paid. Keep both —
              they do different jobs.
            </p>

            <h2>The Onboarding Error Everyone Meets: "Wrong Obligation ID" / "NONVAT only"</h2>
            <p>
              During onboarding, many owners see an error like <em>"wrong obligation ID"</em> or <em>"NONVAT only"</em>{" "}
              when they try to create an invoice in iTax. It is the single most common eTIMS problem for new users.
            </p>
            <p>
              <strong>What's happening:</strong> the tax obligations on your PIN and the eTIMS registration aren't in
              sync — for example, a NONVAT invoice type issued while no matching NONVAT obligation is active on the PIN.
            </p>
            <p>The practical fix flow:</p>
            <ol>
              <li>Log in to iTax → confirm your active obligations (VAT-registered? Income Tax – Business? TOT?)</li>
              <li>Register the correct obligation and re-activate eTIMS under that PIN</li>
              <li>Issue using the invoice type that matches the error you saw</li>
              <li>If it persists, raise the ticket with your obligation ID — this resolves in 1–2 working days</li>
            </ol>
            <p>We see this weekly — if you get stuck, send us a screenshot and we'll walk it through on WhatsApp.</p>
          </div>

          {/* FAQ */}
          <FAQSection faqSchema={faqSchema} />

          {/* Summary table */}
          <section className="mt-12">
            <h2 className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">Is It Claimable? Quick Table</h2>
            <div className="overflow-x-auto rounded-lg border border-hairline">
              <table className="w-full text-left text-[0.85rem]">
                <thead>
                  <tr className="bg-canvas-alt border-b border-hairline">
                    <th className="px-4 py-3 font-semibold text-ink">Expense</th>
                    <th className="px-4 py-3 font-semibold text-ink">Needs eTIMS receipt?</th>
                    <th className="px-4 py-3 font-semibold text-ink">How to get it right</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hairline">
                  {[
                    ["Fuel (company vehicle)", "Yes", "Fuel-station eTIMS receipt with PIN; vehicle registered to the company"],
                    ["Safaricom internet / airtime", "Yes (evolving)", "Register your PIN on the account; keep payment records"],
                    ["KPLC tokens", "Meter-owner's claim", "Meter registered to the business; tokens prove payment"],
                    ["Rent", "Yes — landlord-issued", "Landlord issues monthly eTIMS rental invoice; ask in writing if not"],
                    ["Transport / matatu", "Not yet systematic", "Keep tickets for genuine business trips"],
                    ["M-Pesa till payments", "No — payment receipt only", "M-Pesa proves payment; eTIMS proves the claim — keep both"],
                    ["Foreign ads / subscriptions", "No local eTIMS", "Contract + payment trail; check the digital-services rules"],
                  ].map((row) => (
                    <tr key={row[0]} className="hover:bg-canvas-alt/50">
                      <td className="px-4 py-3 font-medium text-ink">{row[0]}</td>
                      <td className="px-4 py-3 text-ink-soft">{row[1]}</td>
                      <td className="px-4 py-3 text-ink-muted">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </article>

        {/* Sources & Methodology */}
        <div className="mt-12 border-t border-hairline pt-8">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-muted mb-3">Sources &amp; Methodology</p>
          <p className="text-[0.78rem] text-ink-muted leading-relaxed max-w-[60ch]">
            Fact-checked 9 August 2026: KRA eTIMS fuel module guidance, Safaricom Business KRA compliance portal,
            KRA Monthly Rental Income guidance (7.5% on gross rent, effective 1 January 2024), Kenya Power account
            practices, and Smart VAT Kenya's client-facing onboarding experience.
          </p>
        </div>

        {/* More Guides */}
        <div className="mt-10 pt-16 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="etims-can-i-claim-my-expenses" />
        </div>

        {/* CTA */}
        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">Unsure whether your receipts pass?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[42ch] mx-auto leading-relaxed">
            Send photos of your last three business receipts on WhatsApp — we'll say which ones you can claim. Or
            let us handle your eTIMS onboarding end to end.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="/services/etims-onboarding/"
              className="inline-flex items-center gap-2 border border-brand text-brand text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand/10 transition-colors"
            >
              eTIMS Onboarding
            </a>
            <a
              href="https://wa.me/254721725958?text=Hi%2C%20I%20want%20my%20business%20receipts%20reviewed"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
            >
              Get a Receipt Check on WhatsApp
              <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}