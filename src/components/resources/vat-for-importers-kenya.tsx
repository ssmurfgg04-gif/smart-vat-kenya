import { ArrowLeft, ArrowRight, Warning, CheckCircle, Info } from "@phosphor-icons/react/dist/ssr"
import { NewsletterSignup } from "@/components/newsletter-signup"

import { ArticleGrid } from "@/lib/resources"

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "VAT for Importers in Kenya 2026: Import VAT, Customs & Compliance",
  description:
    "Complete guide to VAT on imports into Kenya. How import VAT (16%) is charged at customs, SIMA system, M-PESA and bank payments at entry points, claiming input VAT on imports, and eTIMS for importers.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-26",
  dateModified: "2026-07-26",
  url: "https://smartvatkenya.co.ke/resources/vat-for-importers-kenya",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/vat-for-importers-kenya",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "VAT for Importers in Kenya 2026", item: "https://smartvatkenya.co.ke/resources/vat-for-importers-kenya/" },
  ],
}

export default function VatForImportersKenyaPost() {
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
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand mb-3">Compliance Guide</p>
          <h1 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold text-ink tracking-tight leading-tight mb-4 text-balance">
            VAT for Importers in Kenya 2026: Import VAT, Customs & Compliance
          </h1>
          <div className="flex items-center gap-4 text-[0.75rem] text-ink-muted">
            <time dateTime="2026-07-26">26 July 2026</time>
            <span>11 min read</span>
            <span>Smart VAT Kenya</span>
          </div>
        </header>

        <div className="space-y-5 text-[0.9rem] text-ink-soft leading-[1.75]">
          <div className="border border-blue-200 bg-blue-50 dark:bg-blue-950/20 dark:border-blue-800/40 rounded-lg p-4 flex items-start gap-3">
            <Info size={17} weight="fill" className="text-blue-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-ink text-[0.9rem]">Import VAT is paid at customs - not on your VAT return</p>
              <p className="text-[0.83rem] text-blue-700 dark:text-blue-400 leading-relaxed">
                Unlike domestic VAT which you account for on your monthly iTax return, import VAT is
                assessed and collected by Kenya Customs at the port of entry before goods are released.
                You then claim it back as input VAT on your return.
              </p>
            </div>
          </div>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">How Import VAT Works in Kenya</h2>
          <p>
            Import VAT (also called VAT on imports) is charged at the standard rate of <strong>16%</strong> on all
            taxable goods brought into Kenya. It is collected by the Kenya Revenue Authority (KRA) through
            the customs clearance process, not through the monthly VAT return system.
          </p>
          <p>
            The key difference from domestic VAT: you cannot delay paying import VAT until your return
            is due. Payment must be made <strong>before</strong> customs releases your goods. This means import VAT
            directly affects your cash flow and working capital.
          </p>
          <p>
            Import VAT applies to all commercial imports regardless of whether you are a VAT-registered
            person. If you are not registered for VAT, you still pay import VAT - but you <strong>cannot</strong>
            claim it back as input VAT. This is why registering for VAT is critical if you import goods
            regularly.
          </p>
          <p>
            Certain goods are exempt from import VAT, including:
          </p>
          <ul className="space-y-1.5">
            {[
              "Medical supplies and pharmaceutical products (specific HS codes)",
              "Agricultural inputs such as fertiliser, seeds, and pesticides",
              "Goods imported under special investment promotion schemes (EPZ, SEZ, etc.)",
              "Personal effects and household goods for returning residents (limited value)",
              "Goods specifically exempted under the First Schedule of the VAT Act, 2013",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            If you are unsure whether your goods qualify for an exemption, it is advisable to obtain
            a private ruling from KRA or consult a tax advisor before shipping.
          </p>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">Calculating Import VAT: Step-by-Step</h2>
          <p>
            Import VAT is calculated on the <strong>cumulative</strong> value of the goods after adding customs
            duty and other statutory levies. For a general overview of how VAT is computed, see our{" "}
            <a href="/resources/how-to-calculate-vat-in-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">how to calculate VAT in Kenya guide</a>.
            The formula is:
          </p>
          <div className="bg-ink/5 dark:bg-canvas-muted rounded-lg p-4 font-mono text-[0.85rem]">
            <p className="mb-1"><strong>Import VAT = 16% × (CIF Value + Import Duty + IDF + RDL + Other Levies)</strong></p>
          </div>
          <p>Where:</p>
          <ul className="space-y-1.5">
            {[
              "<strong>CIF Value</strong> - Cost, Insurance, and Freight. The total landed cost of the goods at the Kenyan port.",
              "<strong>Import Duty</strong> - Customs duty charged at the applicable rate under the EAC Common External Tariff (typically 0%, 10%, 25%, or 35%).",
              "<strong>IDF</strong> - Import Declaration Fee (2% of CIF value for most goods, reduced to 0.5% for EAC-origin goods).",
              "<strong>RDL</strong> - Railway Development Levy (1.5% of CIF value, introduced by the Finance Act 2018).",
              "<strong>Other Levies</strong> - Excise duty (if applicable), Anti-Dumping Duty, or other specific charges.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-brand shrink-0 w-4 text-right">•</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <p className="mt-4"><strong>Worked example:</strong> You are importing electronics worth KES 1,000,000 (CIF). Import duty at 25% = KES 250,000. IDF at 2% = KES 20,000. RDL at 1.5% = KES 15,000.</p>
          <div className="bg-ink/5 dark:bg-canvas-muted rounded-lg p-4 font-mono text-[0.85rem] space-y-0.5">
            <p>Import VAT base = 1,000,000 + 250,000 + 20,000 + 15,000 = <strong>KES 1,285,000</strong></p>
            <p>Import VAT = 16% × 1,285,000 = <strong>KES 205,600</strong></p>
            <p className="text-ink-muted text-[0.8rem] mt-1">Total customs charges due before clearance: KES 490,600 (duty + levies + VAT)</p>
          </div>
          <p>
            The Import VAT of KES 205,600 is what you pay at customs and later claim as input VAT on your
            VAT return. Note that the duty, IDF, and RDL are <strong>not</strong> recoverable - only the VAT component
            is available for input deduction.
          </p>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">How to Pay Import VAT</h2>
          <p>
            KRA has streamlined import VAT payments through the <strong>SIMBA (SIMIS) System</strong> - the
            customs management system that replaced the older Simba system. All payments must be made
            through one of the following methods:
          </p>
          <h3 className="font-display text-[1rem] font-semibold text-ink mt-5 mb-2">1. SIMA Customs Portal</h3>
          <p>
            The primary method is through the <strong>SIMA (Single Import Market Access)</strong> portal at
            <a href="https://sima.kra.go.ke" target="_blank" rel="noopener noreferrer" className="text-brand underline underline-offset-2 hover:text-brand-hover"> sima.kra.go.ke</a>.
            After your customs declaration is assessed and a payment slip (PSS) is generated, you can
            pay online via:
          </p>
          <ul className="space-y-1.5">
            {[
              "Direct bank transfer from your Kenyan bank account",
              "Visa or Mastercard debit/credit card",
              "M-PESA Paybill 572572 - enter your PSS number as the account number",
              "Airtel Money or other mobile money services",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-brand shrink-0 w-4 text-right">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <h3 className="font-display text-[1rem] font-semibold text-ink mt-5 mb-2">2. M-PESA Paybill 572572</h3>
          <p>
            M-PESA is the most widely used payment method for import VAT at Kenyan ports. The KRA
            paybill number <strong>572572</strong> accepts payments for customs assessments. You need your
            Payment Slip Serial (PSS) number, which is generated after customs processes your
            import declaration (ID).
          </p>
          <h3 className="font-display text-[1rem] font-semibold text-ink mt-5 mb-2">3. Bank Payments</h3>
          <p>
            You can pay directly into KRA&apos;s customs revenue accounts at:
          </p>
          <ul className="space-y-1.5">
            {[
              "Central Bank of Kenya - KRA Customs Collection Account",
              "Kenya Commercial Bank (KCB) - designated KRA customs branches",
              "Co-operative Bank - KRA customs revenue account",
              "National Bank of Kenya - customs collection accounts",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-brand shrink-0 w-4 text-right">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Bank payments typically take 2–4 hours to reflect in the SIMA system. If you are clearing
            goods at Mombasa port or Jomo Kenyatta International Airport (JKIA), plan for this delay.
          </p>
          <h3 className="font-display text-[1rem] font-semibold text-ink mt-5 mb-2">Timing of Payment</h3>
          <p>
            Import VAT must be paid <strong>before</strong> goods are released from customs control. The process
            flow is:
          </p>
          <ol className="space-y-2">
            {[
              "Submit import declaration (ID) through SIMA or through your clearing agent.",
              "Customs assesses the declaration and generates a payment slip (PSS).",
              "Pay all charges (including import VAT) via M-PESA, bank, or card.",
              "Payment reflects in SIMA and customs flags the consignment as cleared.",
              "Goods are physically released from the port or bond warehouse.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-semibold text-brand shrink-0 w-5">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <p>
            Failure to pay promptly results in <strong>storage charges</strong> and <strong>demurrage</strong> at the port,
            which can significantly increase your total cost of importation.
          </p>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">Claiming Input VAT on Imports</h2>
          <p>
            The import VAT you pay at customs is recoverable as{" "}
            <a href="/resources/input-vat-deduction-guide/" className="text-brand underline underline-offset-2 hover:text-brand-hover">input VAT</a> - provided you meet the
            conditions under Section 17 of the VAT Act, 2013.
          </p>
          <h3 className="font-display text-[1rem] font-semibold text-ink mt-5 mb-2">Conditions for Deduction</h3>
          <ul className="space-y-1.5">
            {[
              "You must be registered for VAT in Kenya.",
              "The imported goods must be used for <strong>taxable supplies</strong> (not exempt supplies).",
              "You must hold a valid <strong>customs entry document (C88)</strong> and a <strong>payment receipt (C90)</strong>.",
              "The import VAT must have been <strong>paid</strong> (not just assessed).",
              "The claim must be made within the VAT return period in which the goods were entered for home use.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1" />
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <h3 className="font-display text-[1rem] font-semibold text-ink mt-5 mb-2">How to Record Import VAT in Your Return</h3>
          <p>
            On your VAT return (online through iTax), import VAT is recorded in <strong>Box 5 (Input VAT)</strong>
            under the sub-category for import VAT. You will need to enter:
          </p>
          <ul className="space-y-1.5">
            {[
              "The total CIF value of imported goods",
              "The total import VAT paid (from your customs entry documents)",
              "The number of customs declarations covered",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-brand shrink-0 w-4 text-right">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            <strong>Important:</strong> If the eTIMS system detects imported goods being sold without corresponding
            import entries, KRA may flag your return for audit. Always match your import entries with your
            stock records.
          </p>
          <h3 className="font-display text-[1rem] font-semibold text-ink mt-5 mb-2">Timing of the Claim</h3>
          <p>
            You claim import VAT in the VAT return period when the goods are <strong>entered for home use</strong>
            (i.e., cleared through customs). This is the date on your customs entry document (C88).
            If you clear goods in July, you claim the input VAT in your July VAT return (due by the
            20th of August).
          </p>
          <div className="border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800/40 rounded-lg p-4 flex items-start gap-3">
            <Warning size={17} weight="fill" className="text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-ink text-[0.9rem]">Partial exemption applies</p>
              <p className="text-[0.83rem] text-amber-700 dark:text-amber-400 leading-relaxed">
                If you make both taxable and exempt supplies, you can only claim import VAT in proportion
                to your taxable supplies. You must apply a standard input VAT apportionment method approved
                by KRA.
              </p>
            </div>
          </div>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">eTIMS for Importers: Invoicing Imported Goods</h2>
          <p>
            Since the rollout of eTIMS, importers must issue <strong>eTIMS-compliant invoices</strong> when selling
            imported goods in Kenya. The system tracks your stock and ensures that goods imported
            correspond to goods sold.
          </p>
          <h3 className="font-display text-[1rem] font-semibold text-ink mt-5 mb-2">ETR vs eTIMS for Importers</h3>
          <p>
            If you are using the older Electronic Tax Register (ETR), you should have migrated to eTIMS.
            For importers, eTIMS offers a significant advantage: it links your import entries (via SIMA)
            to your sales, giving KRA a complete view of your import-to-sale cycle. This means:
          </p>
          <ul className="space-y-1.5">
            {[
              "Every imported item in your stock should match an eTIMS invoice when sold.",
              "KRA can cross-reference your VAT return input claims with your eTIMS stock movements.",
              "Discrepancies between imports declared and goods sold can trigger an automatic audit.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-brand shrink-0 w-4 text-right">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <h3 className="font-display text-[1rem] font-semibold text-ink mt-5 mb-2">Stock Tracking for Importers</h3>
          <p>
            Importers who maintain inventory benefit from the eTIMS stock module, which allows you to:
          </p>
          <ul className="space-y-1.5">
            {[
              "Record goods received against import declarations",
              "Issue invoices that deduct from available stock",
              "Generate stock reports showing cost of goods sold",
              "Identify variances between physical stock and system records",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            If you use an ERP system (Sage, SAP, QuickBooks, etc.), you should consider the
            <strong> ERP-integrated eTIMS solution</strong>, which automatically sends invoice data to KRA
            from your existing system. This is the most efficient option for high-volume importers.
          </p>
          <h3 className="font-display text-[1rem] font-semibold text-ink mt-5 mb-2">eTIMS Invoicing Requirements</h3>
          <p>
            When selling imported goods, your eTIMS invoice must include the same mandatory fields as
            any other eTIMS invoice: seller details, buyer details (PIN for B2B), item descriptions,
            quantities, prices, VAT amount, and a QR code. There is no separate &quot;imported goods&quot;
            classification on the invoice itself, but your stock records must trace each item back
            to its import declaration.
          </p>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">Common Import VAT Mistakes</h2>
          <p>
            Import VAT mistakes are among the most common issues KRA auditors identify. Here are the
            pitfalls to avoid:
          </p>
          <ul className="space-y-1.5">
            {[
              "<strong>Not keeping customs entry documents</strong> - You must retain C88 (customs entry) and C90 (payment receipt) for at least 5 years. Without these, your input VAT claim will be rejected on audit.",
              "<strong>Claiming input VAT before goods are cleared</strong> - You can only claim import VAT after the goods have been entered for home use. Pre-paying VAT on a deposit does not entitle you to an immediate claim.",
              "<strong>Incorrect CIF values</strong> - Declaring a lower CIF value to reduce duty and VAT is illegal (customs fraud). KRA uses transaction value databases and may apply penalties of up to 200% of the duty evaded.",
              "<strong>Missing payment deadlines at customs</strong> - Once your PSS is generated, most payments must be completed within 7 days or the declaration expires. Delays lead to re-assessment and additional storage costs.",
              "<strong>Not reconciling import VAT with eTIMS stock</strong> - If your eTIMS sales records show goods that do not correspond to your import declarations, KRA will flag your account for audit.",
              "<strong>Failing to apportion import VAT for mixed-use goods</strong> - If you import goods used for both taxable and exempt supplies, you must apportion the input VAT. Claiming full input VAT on mixed-use goods is a common audit adjustment.",
              "<strong>Using the wrong HS code</strong> - An incorrect HS code can lead to underpayment or overpayment of duty and VAT. KRA may re-classify goods and issue additional assessments.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <Warning size={14} className="text-amber-600 shrink-0 mt-1" />
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>

          <div className="border border-brand/25 bg-brand-muted rounded-lg p-5 mt-8">
            <p className="font-semibold text-ink text-[0.9rem] mb-1">Importing goods into Kenya?</p>
            <p className="text-[0.83rem] text-ink-muted mb-3">
              We help importers navigate VAT compliance - from customs clearance support to input VAT
              claims and eTIMS integration. First consultation is free.
            </p>
            <a href="https://wa.me/254717344440?text=I%20need%20help%20with%20import%20VAT%20compliance"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-4 py-2.5 rounded-md hover:bg-brand-hover transition-colors">
              Ask Us on WhatsApp <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
          </div>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">Related Resources</h2>
          <ul className="space-y-2">
            {[
              ["Input VAT Deduction Guide", "/resources/input-vat-deduction-guide/", "How to properly claim input VAT including import VAT, conditions, and apportionment"],
              ["How to Register for VAT in Kenya", "/resources/how-to-register-for-vat-in-kenya/", "Step-by-step VAT registration process - required if you import goods regularly"],
              ["eTIMS Invoicing Guide", "/resources/etims-invoicing-guide/", "Mandatory invoice fields, QR codes, B2B vs B2C rules, and stock tracking"],
              ["eTIMS Onboarding Guide 2026", "/resources/etims-onboarding-guide/", "How to register and set up eTIMS for your business"],
            ].map(([title, slug, desc]) => (
              <li key={slug}>
                <a href={slug} className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  {title}
                </a>
                <span className="text-ink-muted"> - {desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>

              {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="vat-for-importers-kenya" />
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
