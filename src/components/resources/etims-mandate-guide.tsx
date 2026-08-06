import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info, XCircle } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "eTIMS Mandate Guide", item: "https://smartvatkenya.co.ke/resources/etims-mandate-guide" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "eTIMS Mandate Kenya 2026: Complete Guide to the KRA Electronic Tax Invoice System",
  description:
    "Every VAT-registered business in Kenya must use eTIMS for invoicing. Complete guide to the eTIMS mandate: who it applies to, onboarding deadlines, daily invoicing rules, penalties for non-compliance, and how eTIMS blocks input VAT claims on non-compliant purchases.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-28",
  dateModified: "2026-07-28",
  url: "https://smartvatkenya.co.ke/resources/etims-mandate-guide",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/etims-mandate-guide",
}

const faqs = [
  {
    q: "What is the eTIMS mandate in Kenya?",
    a: "The eTIMS mandate is a KRA requirement that all VAT-registered businesses issue electronic tax invoices through the eTIMS system in real time. It applies to every VAT-registered taxpayer in Kenya, effective from 1 July 2024. Invoices must be generated through KRA-approved eTIMS channels and transmitted to KRA automatically at the point of sale.",
  },
  {
    q: "Who is required to use eTIMS?",
    a: "Every person registered for VAT in Kenya must use eTIMS for invoicing. There is no turnover threshold exemption — if you are VAT-registered, you must use eTIMS. This includes businesses under the KES 8 million threshold who registered voluntarily, small taxpayer regime participants, and businesses using the special VAT table for unregistered suppliers.",
  },
  {
    q: "Can I use eTIMS if I am not VAT-registered?",
    a: "No. eTIMS is mandatory only for VAT-registered persons. However, unregistered businesses may need to register for VAT if they meet the KES 5 million (or KES 8 million with effect from 1 September 2024) annual turnover threshold.",
  },
  {
    q: "What happens if I do not onboard eTIMS within 30 days of VAT registration?",
    a: "KRA imposes a penalty of KES 50,000 per month for failure to onboard eTIMS within 30 days of VAT registration. This penalty continues until you onboard. KRA has been actively enforcing this penalty in 2026.",
  },
  {
    q: "Can I claim input VAT on a purchase if the supplier did not use eTIMS?",
    a: "No. KRA strictly disallows input VAT claims on purchases where the supplier did not issue an eTIMS-compliant invoice. This is one of the most consequential enforcement changes — you cannot claim input VAT on M-Pesa till receipts, handwritten receipts, or any non-eTIMS document, even if the purchase is genuine.",
  },
  {
    q: "What are the eTIMS invoicing channels available?",
    a: "KRA provides multiple eTIMS channels: (1) eTIMS mobile app (available on Google Play and App Store), (2) eTIMS web portal, (3) eTIMS API integration for ERP/accounting systems, and (4) USSD (*222#). Businesses can choose the channel that best fits their volume and technical capability.",
  },
  {
    q: "What information must an eTIMS invoice include?",
    a: "An eTIMS invoice must include: KRA PIN of the supplier and customer, invoice date and time, sequential invoice number, description of goods or services, quantity and unit price, taxable value, VAT amount, total amount, and the eTIMS QR code. Invoices to non-VAT-registered customers (B2C) do not require the customer's KRA PIN but must still include the supplier's details.",
  },
  {
    q: "Does eTIMS apply to B2C sales (sales to individuals)?",
    a: "Yes. Every sale — B2B or B2C — must go through eTIMS. For B2C sales where the customer does not have or provide a KRA PIN, you issue a simplified eTIMS invoice without the customer PIN. The sale is still transmitted to KRA in real time.",
  },
  {
    q: "What is the penalty for issuing a non-eTIMS invoice?",
    a: "KRA can impose a penalty of up to KES 100,000 per instance for issuing an invoice that does not comply with eTIMS requirements. This applies to manually written receipts, parallel invoicing, or any attempt to bypass the eTIMS system.",
  },
  {
    q: "Can I use eTIMS offline?",
    a: "Yes. The eTIMS mobile app supports offline mode. Invoices generated offline are queued and transmitted to KRA when the device reconnects to the internet. However, the invoice must still be generated through the eTIMS app — handwritten or system-generated invoices not passed through eTIMS are not compliant.",
  },
  {
    q: "How do I handle eTIMS when eTIMS itself is down?",
    a: "KRA has provided guidance for eTIMS downtime scenarios. The mobile app generates a control number (offline code) that serves as a reference for the transaction. You issue the invoice using the app's offline mode, and it syncs when the service is restored. The key rule: the invoice must still pass through the eTIMS app, not a fallback manual system.",
  },
  {
    q: "Does eTIMS integrate with my existing accounting software?",
    a: "Yes. KRA provides an eTIMS API that allows integration with ERP systems (SAP, Oracle), accounting software (QuickBooks, Xero), and POS systems. API integration requires technical setup and KRA approval. For most SMEs, the mobile app or web portal is sufficient.",
  },
  {
    q: "What is the stock reconciliation requirement under eTIMS?",
    a: "VAT-registered businesses with physical inventory must submit monthly stock reports through eTIMS. This includes opening stock, purchases/ additions, sales, and closing stock. KRA cross-references stock movements against eTIMS invoices to detect undeclared sales. Discrepancies trigger audits.",
  },
  {
    q: "How do eTIMS invoices affect VAT return filing?",
    a: "eTIMS invoices are automatically transmitted to KRA's system. When you file your VAT return, certain fields may be pre-populated from eTIMS data (auto-populated return). This means KRA already has a record of your sales — the return must match what eTIMS transmitted. Discrepancies between eTIMS data and filed returns are audited automatically.",
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

export default function EtimsMandateGuide() {
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
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand mb-3">eTIMS Mandate</p>
            <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-semibold text-ink tracking-tight leading-tight mb-3 text-balance">
              eTIMS Mandate Kenya 2026: Complete Compliance Guide
            </h1>
            <p className="text-[0.9rem] text-ink-muted leading-relaxed">
              <time dateTime="2026-07-28">28 July 2026</time> &middot; Updated for Finance Act 2026
            </p>
          </header>

          <div className="bg-brand/5 border border-brand/15 rounded-lg p-5 mb-8 flex items-start gap-3">
            <Warning size={20} className="text-brand shrink-0 mt-0.5" weight="fill" />
            <div>
              <p className="text-sm font-semibold text-ink mb-1">eTIMS Is Mandatory for Every VAT-Registered Business</p>
              <p className="text-sm text-ink-muted leading-relaxed">
                Since 1 July 2024, every VAT-registered person in Kenya must use eTIMS for invoicing. Non-compliant invoices mean disallowed input VAT claims. KRA has escalated enforcement in 2026 — audits and penalties are rising sharply. This guide covers every aspect of the mandate.
              </p>
            </div>
          </div>

          <div className="prose prose-gray max-w-none">
            <h2>What Is the eTIMS Mandate?</h2>
            <p>
              The <strong>eTIMS (Electronic Tax Invoice Management System) mandate</strong> is a KRA requirement compelling every VAT-registered person in Kenya to issue all tax invoices exclusively through the eTIMS system. It took effect on <strong>1 July 2024</strong> under the Finance Act 2023 and remains in full force under the Finance Act 2026.
            </p>
            <p>
              Unlike earlier optional invoicing systems, eTIMS is <strong>mandatory and real-time</strong>. Every invoice is transmitted to KRA at the point of sale. The mandate fundamentally changed how VAT compliance works in Kenya — KRA no longer relies on self-reported sales data alone. It has a real-time feed of your transactions.
            </p>
            <p>
              The practical effect: <strong>if it is not in eTIMS, it did not happen for KRA's purposes</strong>. Input VAT claims on non-eTIMS purchases are denied. Sales not recorded in eTIMS show up as discrepancies during audits. The mandate removes the gap between what you report and what KRA already knows.
            </p>

            <h2>Who Must Comply?</h2>
            <p>The eTIMS mandate applies to <strong>every VAT-registered person</strong> in Kenya. There is no exemption based on:</p>
            <ul>
              <li><strong>Turnover:</strong> If you are VAT-registered — whether because your turnover exceeds KES 5 million (KES 8 million from September 2024) or you registered voluntarily — eTIMS applies</li>
              <li><strong>Business type:</strong> Retailers, wholesalers, service providers, manufacturers, landlords, NGOs, tech startups — all must use eTIMS</li>
              <li><strong>Customer type:</strong> B2B, B2C, cash sales, credit sales — all must go through eTIMS</li>
              <li><strong>Small taxpayer regime:</strong> Businesses on the 8% turnover-inclusive regime still need eTIMS for invoicing</li>
            </ul>
            <p>
              Businesses that are <strong>not VAT-registered</strong> are not required to use eTIMS. However, if an unregistered business crosses the VAT registration threshold, it must register and then onboard eTIMS within 30 days.
            </p>

            <h2>eTIMS Onboarding: What You Need to Do</h2>
            <p>Onboarding is the first step after VAT registration. Here is the process:</p>
            <ol>
              <li><strong>Onboard within 30 days</strong> of VAT registration. KRA imposes KES 50,000/month in penalties for late onboarding</li>
              <li><strong>Choose your channel:</strong> Mobile app (recommended for most SMEs), web portal, or API integration for ERP/POS systems</li>
              <li><strong>Download the eTIMS app</strong> from Google Play Store or Apple App Store, or access the web portal at <a href="https://etims.kra.go.ke" target="_blank" rel="noopener noreferrer">etims.kra.go.ke</a></li>
              <li><strong>Register your device</strong> and link it to your KRA PIN</li>
              <li><strong>Configure your business details:</strong> Business name, address, contact details, logo (optional)</li>
              <li><strong>Start issuing invoices</strong> through the system. All invoices are automatically transmitted to KRA</li>
            </ol>
            <p>
              API integration requires additional steps: technical setup, KRA approval, and testing in the sandbox environment. Most SMEs do not need this — the mobile app covers standard invoicing needs.
            </p>

            <div className="bg-brand/5 border border-brand/15 rounded-lg p-5 my-8 not-prose">
              <div className="flex items-start gap-3 mb-3">
                <Info size={18} className="text-brand shrink-0 mt-0.5" weight="fill" />
                <p className="text-sm font-semibold text-ink">Need help onboarding? We handle eTIMS setup as part of our <a href="/services/vat-registration/" className="text-brand underline underline-offset-2 hover:text-brand-hover">VAT registration service (KES 5,000)</a> — includes PIN generation, eTIMS onboarding guidance, and taxpayer education.</p>
              </div>
            </div>

            <h2>Daily Invoicing Requirements</h2>
            <p>Every sale requires an eTIMS invoice. Daily obligations:</p>
            <ul>
              <li><strong>Issue an eTIMS invoice for every sale</strong> — cash, credit, B2B, B2C. No exceptions</li>
              <li><strong>Include all mandatory fields:</strong> KRA PIN (supplier and customer for B2B), date, sequential number, description, quantity, unit price, taxable value, VAT, total, QR code</li>
              <li><strong>Credit notes and debit notes</strong> must also go through eTIMS for adjustments and corrections</li>
              <li><strong>Offline mode:</strong> The mobile app works offline. Generate invoices through the app even without internet — they queue and sync later. Do not switch to manual invoices when offline</li>
            </ul>

            <h2>Monthly Obligations</h2>
            <p>Beyond invoicing, eTIMS imposes monthly compliance requirements:</p>
            <ul>
              <li><strong>Stock report:</strong> Businesses with physical inventory must submit monthly stock reports through eTIMS — opening stock, additions, sales, closing stock. Due by the 5th of the following month</li>
              <li><strong>Data submission:</strong> Even if you use API integration, monthly data submission to KRA is required to confirm that all invoice data has been transmitted</li>
              <li><strong>Reconciliation:</strong> Your VAT return must match your eTIMS invoice data. If KRA's system detects discrepancies between eTIMS sales data and your filed return, it triggers an automatic review</li>
            </ul>

            <h2>eTIMS and Input VAT Claims</h2>
            <p>
              This is the most significant enforcement change under the mandate. KRA now <strong>disallows input VAT claims</strong> on purchases where the supplier did not issue an eTIMS-compliant invoice. This means:
            </p>
            <ul>
              <li>M-Pesa till receipts are <strong>not</strong> valid VAT invoices — you must request an eTIMS invoice from the supplier</li>
              <li>Handwritten receipts are <strong>not</strong> acceptable for input VAT claims</li>
              <li>Invoices from suppliers who are not using eTIMS — even if they are valid VAT-registered businesses — will be rejected during a KRA audit</li>
              <li>You are responsible for verifying that your suppliers are eTIMS-compliant. If they are not, your input VAT claim is at risk</li>
            </ul>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 my-6 not-prose">
              <div className="flex items-start gap-3">
                <Warning size={20} className="text-amber-600 shrink-0 mt-0.5" weight="fill" />
                <div>
                  <p className="text-sm font-semibold text-amber-900 mb-1">Audit Risk: Input VAT on Blocked Purchases</p>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    If you claimed input VAT on purchases made with non-eTIMS invoices and KRA audits you, the disallowed VAT plus penalties can significantly exceed the original claim. You should conduct a <strong>supplier eTIMS compliance review</strong> to identify which of your key suppliers are using eTIMS. For suppliers that are not, request an eTIMS invoice or reconsider the relationship.
                  </p>
                </div>
              </div>
            </div>

            <h2>Penalties and Enforcement in 2026</h2>
            <p>The Finance Act 2026 introduced higher minimum penalties for eTIMS non-compliance. Current penalty structure:</p>
            <ul>
              <li><strong>KES 50,000 per month</strong> for failure to onboard eTIMS within 30 days of VAT registration</li>
              <li><strong>Up to KES 100,000 per instance</strong> for issuing non-compliant invoices (handwritten, non-eTIMS, parallel invoicing)</li>
              <li><strong>Minimum penalty threshold:</strong> KES 100,000 for businesses, KES 10,000 for individuals for failures like not issuing an eTIMS invoice, not filing electronically, or not paying tax electronically</li>
              <li><strong>Input VAT denial:</strong> Indirect penalty — non-eTIMS purchases result in denied input VAT, increasing your net VAT payable</li>
              <li><strong>Stock report non-compliance:</strong> Late or missing stock reports can trigger an audit and penalties</li>
            </ul>
            <p>
              KRA has publicly stated that eTIMS enforcement is a priority for 2026. Businesses should expect more audits focused on eTIMS compliance, especially cross-referencing stock reports against invoicing data.
            </p>

            <h2>eTIMS and VAT Return Filing</h2>
            <p>
              eTIMS invoices are transmitted to KRA in real time. When you file your VAT return on iTax, the system may <strong>auto-populate</strong> certain fields based on eTIMS data. This creates a direct audit trail: KRA compares your filed return against its eTIMS database.
            </p>
            <ul>
              <li>Your <strong>total sales declared</strong> on the VAT return should match or exceed the total eTIMS invoices issued for the period</li>
              <li>If your return shows lower sales than eTIMS data, KRA's system flags the discrepancy</li>
              <li>If your return shows sales higher than eTIMS data, KRA also flags it — unreported eTIMS invoices</li>
              <li>Monthly <strong>stock reconciliation</strong> requirements mean KRA can also detect sales anomalies through inventory mismatches</li>
            </ul>
            <p>
              The auto-populated return feature is being phased in. Not all VAT returns are auto-populated yet, but KRA's eTIMS data is always the reference point during audits.
            </p>

            <h2>eTIMS Channels Compared</h2>
            <div className="border border-hairline rounded-lg overflow-hidden not-prose">
              <table className="w-full text-[0.83rem]">
                <thead>
                  <tr className="border-b border-hairline bg-canvas-alt">
                    <th className="text-left p-3 font-semibold text-ink w-[25%]">Channel</th>
                    <th className="text-left p-3 font-semibold text-ink">Best For</th>
                    <th className="text-left p-3 font-semibold text-ink">Limitations</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hairline">
                  {[
                    { ch: "Mobile App", bf: "SMEs, retailers, low-volume service providers", lm: "Manual entry, not ideal for high-volume sales" },
                    { ch: "Web Portal", bf: "Businesses without smartphones, desktop workflows", lm: "Requires internet, no offline mode" },
                    { ch: "API Integration", bf: "High-volume businesses, ERP users, POS systems", lm: "Technical setup required, KRA approval needed" },
                    { ch: "USSD (*222#)", bf: "Basic invoicing, no smartphone required", lm: "Limited functionality, basic invoices only" },
                  ].map(({ ch, bf, lm }) => (
                    <tr key={ch}>
                      <td className="p-3 font-medium text-ink">{ch}</td>
                      <td className="p-3 text-ink-muted">{bf}</td>
                      <td className="p-3 text-ink-muted">{lm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Common eTIMS Compliance Traps</h2>
            <ul>
              <li><strong>Assuming eTIMS does not apply to cash sales:</strong> It does. Every sale — cash or credit — requires an eTIMS invoice</li>
              <li><strong>Using M-Pesa statements as VAT invoices:</strong> M-Pesa till receipts are not eTIMS invoices. You must generate an eTIMS invoice separately</li>
              <li><strong>Failing to submit monthly stock reports:</strong> This is a separate obligation from invoicing. Missing stock reports trigger audits</li>
              <li><strong>Not reconciling suppliers:</strong> You cannot claim input VAT if your supplier is not eTIMS-compliant, even if you did nothing wrong</li>
              <li><strong>Assuming eTIMS downtime excuses non-compliance:</strong> The offline mode exists for exactly this scenario. Use it</li>
              <li><strong>Deleting or editing invoices after transmission:</strong> eTIMA does not allow deletion. Use credit/debit notes for corrections</li>
            </ul>

            <h2>How eTIMS Affects Different Business Types</h2>
            <h3>Retailers and E-commerce</h3>
            <p>High-volume, low-value sales make the mobile app the best channel. However, manual entry per transaction can be slow. Consider API integration with your POS system if you process more than ~50 transactions per day. Every sale must generate an eTIMS invoice — including M-Pesa, card, and cash payments.</p>

            <h3>Service Providers (Consultants, Agencies, Professionals)</h3>
            <p>Lower invoice volumes make the mobile app or web portal sufficient. Ensure your invoices include the customer's KRA PIN for B2B clients so they can claim input VAT. Issue the eTIMS invoice at the time of service or within standard invoicing cycles.</p>

            <h3>Landlords and Real Estate</h3>
            <p>Rental income is subject to VAT for commercial property above the threshold. eTIMS invoices must be issued for rent payments. Monthly stock reports generally do not apply (no inventory), but eTIMS invoicing rules are the same as for any other business.</p>

            <h3>Manufacturers and Wholesalers</h3>
            <p>High invoice volumes and inventory make API integration the best choice. Monthly stock reporting is mandatory and critical — stock discrepancies are the most common audit trigger for manufacturing businesses.</p>

            <h3>NGOs and Non-Profits</h3>
            <p>NGOs that are VAT-registered must use eTIMS like any other business. Grant-funded purchases and donor reporting may require additional documentation beyond the eTIMS invoice, but the eTIMS invoice remains the primary VAT document.</p>

            <h2>Related Resources</h2>
            <ul>
              <li><a href="/resources/etims-onboarding-guide/" className="text-brand underline underline-offset-2 hover:text-brand-hover">Complete eTIMS Onboarding Guide</a> — Step-by-step account setup, device registration, and first invoice</li>
              <li><a href="/resources/etims-invoicing-guide/" className="text-brand underline underline-offset-2 hover:text-brand-hover">eTIMS Invoicing Guide</a> — How to issue, cancel, and correct invoices</li>
              <li><a href="/resources/etims-compliance-checklist/" className="text-brand underline underline-offset-2 hover:text-brand-hover">eTIMS Compliance Checklist</a> — Daily, monthly, and annual obligations</li>
              <li><a href="/resources/etims-penalty-50000-per-month-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">eTIMS Penalties Guide</a> — Full breakdown of KRA's penalty structure</li>
              <li><a href="/resources/finance-act-vat-changes-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">Finance Act 2026 VAT Changes</a> — All VAT-related changes including eTIMS enforcement</li>
              <li><a href="/services/etims-onboarding/" className="text-brand underline underline-offset-2 hover:text-brand-hover">eTIMS Onboarding Service</a> — We set up eTIMS for you</li>
              <li><a href="/services/monthly-vat-filing/" className="text-brand underline underline-offset-2 hover:text-brand-hover">Monthly VAT Filing Service</a> — We file your returns and reconcile against eTIMS data</li>
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
          <h2 className="font-display text-xl font-semibold mb-4">Need Help with eTIMS Compliance?</h2>
          <p className="text-sm text-ink-muted leading-relaxed mb-4">
            We handle the full eTIMS compliance lifecycle — onboarding, daily invoicing guidance, monthly stock reports, and return filing. Our flat-fee services cover every aspect of the mandate.
          </p>
          <ul className="space-y-2 text-sm text-ink-muted mb-5">
            <li className="flex items-start gap-2">— <a href="/services/vat-registration/" className="text-brand underline underline-offset-2 hover:text-brand-hover">VAT Registration + eTIMS Onboarding (KES 5,000)</a></li>
            <li className="flex items-start gap-2">— <a href="/services/monthly-vat-filing/" className="text-brand underline underline-offset-2 hover:text-brand-hover">Monthly VAT Filing with eTIMS Reconciliation (KES 3,500/month)</a></li>
            <li className="flex items-start gap-2">— <a href="/services/etims-onboarding/" className="text-brand underline underline-offset-2 hover:text-brand-hover">eTIMS Setup and Configuration (KES 3,500)</a></li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/services/etims-onboarding/"
              className="inline-flex items-center justify-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
            >
              Get eTIMS Compliant Today
              <svg viewBox="0 0 12 12" className="w-3 h-3 fill-current" aria-hidden="true"><path d="M6 0L4.59 1.41 9.17 6l-4.58 4.59L6 12l6-6z"/></svg>
            </a>
            <a
              href="https://wa.me/254721725958?text=I%20need%20help%20with%20eTIMS%20compliance"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-brand/30 text-ink text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand/5 transition-colors"
            >
              Ask a Question on WhatsApp
              <svg viewBox="0 0 12 12" className="w-3 h-3 fill-current" aria-hidden="true"><path d="M6 0L4.59 1.41 9.17 6l-4.58 4.59L6 12l6-6z"/></svg>
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <ArticleGrid currentSlug="etims-mandate-guide" />
        </div>
      </div>
    </>
  )
}
