import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "KRA VAT Special Table — Risks and Remedies", item: "https://smartvatkenya.co.ke/resources/vat-special-table-risks/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
headline: "KRA VAT Special Table — How It Works and How to Avoid Being Flagged",
  description:
    "What we actually know about KRA's supplier-compliance checks in 2026: how the VAT Special Table concept was handed down, why we now read it as RAIS 'Tax Alerts' plus eTIMS invoice validation, and how to keep your input VAT claims safe. Filing consecutive nil returns can still get you flagged.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-25",
  dateModified: "2026-08-08",
  url: "https://smartvatkenya.co.ke/resources/vat-special-table-risks",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/vat-special-table-risks",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the KRA VAT Special Table?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The VAT Special Table is a term that has circulated for a KRA list of suppliers flagged for non-compliance. Note: our August 2026 review of KRA sources did not find an official register literally named 'Special Table'. What operates in practice is RAIS 'Tax Alerts' plus eTIMS-level validation — an un-transmitted or unverified invoice loses you the input VAT claim even if your return is otherwise correct.",
      },
    },
    {
      "@type": "Question",
      name: "Can filing nil returns put me on the Special Table?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Filing consecutive nil returns over 6 to 12 months can trigger a KRA compliance review, which can result in you being added to the VAT Special Table. KRA reasons that a business filing consistent nil returns may be under-reporting sales. To avoid this, ensure your nil returns are legitimate — and if you do have activity, file a normal return.",
      },
    },
    {
      "@type": "Question",
      name: "How do I check if a supplier is on the VAT Special Table?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no public list. You can only find out when you file your VAT return on iTax and your input VAT claim is rejected with a warning referencing the Special Table. However, KRA compliance officers may inform you during an audit. The best defence is to verify your suppliers are eTIMS-compliant and actively filing returns.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get my business removed from the VAT Special Table?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Removal from the Special Table requires filing all outstanding returns, paying any penalties, and demonstrating consistent compliance — usually 3 to 6 months of on-time, accurate returns. In serious cases, you may need to meet with a KRA compliance officer. Smart VAT Kenya can help draft a compliance letter and manage the removal process.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I buy from a supplier on the Special Table?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your input VAT claim is automatically rejected. You cannot claim that input VAT on your return. If you have already claimed it and KRA audits your return, you will face an additional assessment plus penalties and interest. The Buyer-Initiated Invoicing (BII) mechanism can help: you can generate an eTIMS-compliant invoice on behalf of the supplier, which may allow your input claim to go through while pressuring the supplier to regularise their status.",
      },
    },
    {
      "@type": "Question",
      name: "Is the VAT Special Table the same as a KRA blacklist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not exactly. The Special Table is specifically a VAT compliance flag — it blocks input VAT claims from that supplier. A KRA blacklist is a broader designation that can affect your ability to clear goods at customs, get tax compliance certificates, or bid for government tenders. Being on the Special Table can escalate to a broader blacklist if non-compliance continues.",
      },
    },
    {
      "@type": "Question",
      name: "How does eTIMS relate to the VAT Special Table?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "eTIMS and the Special Table are connected. Suppliers who fail to onboard eTIMS or who issue non-compliant invoices are prime candidates for the Special Table. Conversely, being eTIMS-compliant and filing regular returns is the best way to avoid being flagged. KRA's real-time invoice data from eTIMS is used to cross-check returns — discrepancies can trigger a Special Table review.",
      },
    },
  ],
}

const toc = [
  { id: "what-is-special-table", label: "What Is the VAT Special Table?" },
{ id: "tax-alerts", label: "KRA Tax Alerts: The Operative Mechanism" },
  { id: "how-suppliers-get-added", label: "How Suppliers Get Flagged" },
  { id: "nil-return-flagging", label: "Consecutive Nil Returns: A Hidden Risk" },
  { id: "impact-on-buyers", label: "What Happens When You Buy From a Flagged Supplier" },
  { id: "checking-your-status", label: "How to Check Your Status" },
  { id: "removal-process", label: "How to Get Removed from the Special Table" },
  { id: "protecting-yourself", label: "Protecting Your Business: Due Diligence Checklist" },
  { id: "faq", label: "Frequently Asked Questions" },
]

export default function VATSpecialTablePage() {
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
            {["VAT Special Table", "Tax Alerts", "KRA", "Compliance", "Risk", "2026"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            KRA VAT Special Table: How It Works and How to Avoid Being Flagged
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; KRA-registered VAT agents &mdash; Updated August 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Quick Answer / BLUF */}
        <div className="border-l-[3px] border-brand pl-5 mb-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Quick Answer</p>
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            <strong className="text-ink">"VAT Special Table"</strong> is a term that has
            circulated for KRA's list of flagged suppliers. After an August 2026 source review we
            could not verify an official supplier-block mechanism under that name — the operative
            controls today are <strong className="text-ink">RAIS "Tax Alerts"</strong> and eTIMS
            invoice validation. What is still real: filing{" "}
            <strong className="text-ink">consecutive nil returns</strong> (6+ months) raises a
            compliance flag — and un-transmitted or unverifiable invoices will cost your input VAT
            claim. Check your suppliers&apos; eTIMS status before you claim input VAT.
          </p>
        </div>

        {/* Warning banner */}
        <div className="border border-canvas-warm bg-[#fffbf0] dark:bg-[#2a1f00] dark:border-[#4a3800] rounded-lg p-4 flex items-start gap-3 mb-10">
          <Warning size={17} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-semibold text-[#7a5500] dark:text-[#ffcc44] text-[0.85rem] mb-1">
              Most business owners do not know this exists
            </p>
            <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
              The VAT Special Table is not widely discussed, but it affects thousands of Kenyan
              businesses. You will only discover you are on it when your input VAT claim gets
              rejected — or when your own customers start complaining that their claims linked
              to your invoices are being denied. Awareness is your best defence.
            </p>
          </div>
        </div>

        {/* Research / discontinuation banner */}
        <div className="border border-[#b03030]/30 bg-red-50 dark:bg-red-950/20 rounded-lg p-4 flex items-start gap-3 mb-10">
          <Warning size={17} weight="fill" className="text-[#b03030] shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-semibold text-[#b03030] dark:text-red-400 text-[0.85rem] mb-1">
              An important correction after our August 2026 source review
            </p>
            <p className="text-[0.83rem] text-[#7a1f1f] dark:text-[#ffb4b4] leading-relaxed">
              We traced the "VAT Special Table" story to its governing-law sources and
              could not find an official KRA mechanism that <em>blocks a buyer&apos;s
              input VAT specifically because the supplier is listed</em> — there is no
              public supplier register and the reality is more nuanced. What is
              real and enforceable today: <strong>RAIS "Tax Alerts"</strong> cross-check
              eTIMS invoice data against your return, and un-transmitted or unverified
              invoices will lose you the claim regardless. We keep this guide for its
              practical compliance advice — especially the nil-return warning — and point
              you to the Tax Alerts section below for what actually operates.
            </p>
          </div>
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

          {/* Section 1 — What Is It */}
          <section id="what-is-special-table" aria-labelledby="what-is-special-table-h">
            <h2 id="what-is-special-table-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What Is the VAT Special Table?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The <strong className="text-ink">VAT Special Table</strong> (also called the Special
                Suppliers Table) is a KRA-maintained database of suppliers flagged for VAT
                non-compliance. It is separate from the general taxpayer register — it specifically
                tracks suppliers whose input VAT claims KRA does not trust.
              </p>
              <p>
                When you file your monthly VAT return on iTax and enter purchases from a supplier
                on the Special Table, the system <strong className="text-ink">automatically rejects</strong>{" "}
                your input VAT claim for that particular supplier. You will see a warning or error
                message referencing the Special Table. The rejection is automatic — no human review
                involved.
              </p>
              <p>
                The Special Table was created to combat <strong className="text-ink">VAT carousel fraud</strong>{" "}
                and invoice mills — schemes where fake invoices are used to claim fraudulent input
                VAT refunds from KRA. However, it also catches legitimate businesses that have fallen
                behind on compliance without realising the consequences.
              </p>
              <div className="border border-brand/25 bg-brand-muted rounded-lg p-4 flex items-start gap-3">
                <Info size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-soft leading-relaxed">
                  <strong className="text-ink">KRA website finding:</strong> Earlier KRA VAT FAQ guidance warned that filing
                  consecutive nil returns can land you in a compliance review and interrupt your
                  customers&apos; ability to claim input VAT on your invoices. Our August 2026 review
                  could not verify an official mechanism literally named the "Special Table", but the
                  underlying nil-return flagging risk is real and worth taking seriously either way.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 — KRA Tax Alerts (operative mechanism) */}
          <section id="tax-alerts" aria-labelledby="tax-alerts-h">
            <h2 id="tax-alerts-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              KRA Tax Alerts: The Actual Screen You Should Watch
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                In practice, KRA&apos;s enforcement for this exact risk does not run through
                a public "Special Table" register. It runs through <strong className="text-ink">Tax
                Alerts</strong> — the notices KRA raises in the RAIS taxpayer portal when it
                reconciles your eTIMS invoice data against the returns you file.
              </p>
              <p>
                An alert is raised per line item — for example when declared output differs
                from the sales transmitted through eTIMS, or when input purchases reference
                a supplier whose PIN does not resolve on iTax. Because the alert attaches to
                the specific entry rather than a wholesale supplier ban, the correct remedy
                is <strong className="text-ink">evidence-based</strong>: correct the return or
                prove the underlying transaction with eTIMS invoices.
              </p>
              <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                <p className="font-semibold text-ink text-[0.88rem] mb-3">What actually protects your input claim</p>
                <ul className="space-y-2">
                  {[
                    "The supplier's invoice was transmitted through eTIMS (or covered by offline invoicing protocols).",
                    "Both buyer and supplier KRA PINs resolve on iTax — an unverified supplier PIN collapses the claim.",
                    "The purchase is supported by a normal, commercially sound transaction with documentation kept.",
                    "The claim sits inside the legal window: input VAT reclaimed within 6 months, refunds within 12 months (Finance Act 2025).",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[0.85rem] text-ink-muted">
                      <CheckCircle size={15} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p>
                If you see a Tax Alert on your RAIS dashboard, act while the evidence is fresh:
                keep the eTIMS control numbers, the KRA PINs, and the original invoices. Most
                alerts are resolvable in a few days when the underlying paper is intact.
              </p>
            </div>
          </section>

          {/* Section 3 — How Suppliers Get Flagged */}
          <section id="how-suppliers-get-added" aria-labelledby="how-suppliers-get-added-h">
            <h2 id="how-suppliers-get-added-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How Suppliers Get Flagged
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                KRA does not publish exact criteria, but based on observed cases and KRA guidance,
                suppliers are typically flagged for one or more of the following:
              </p>
              <div className="space-y-4">
                {[
                  {
                    trigger: "Consecutive nil returns (6+ months)",
                    detail: "Filing nil returns for 6 to 12 months in a row triggers a compliance review. KRA questions whether a business can operate for that long with zero activity.",
                    risk: "High — one of the most common triggers for legitimate small businesses",
                  },
                  {
                    trigger: "eTIMS non-compliance",
                    detail: "Not registered for eTIMS or issuing invoices outside the eTIMS system. Since eTIMS is mandatory for all businesses, non-compliance is a red flag.",
                    risk: "High — escalating enforcement from January 2026",
                  },
                  {
                    trigger: "Discrepancy between eTIMS data and returns",
                    detail: "If your eTIMS invoice data shows sales but your VAT return declares lower amounts, KRA flags the mismatch automatically.",
                    risk: "Medium — caught by KRA's automated cross-checking",
                  },
                  {
                    trigger: "Late filing pattern",
                    detail: "Filing consistently late (even by a few days) can build a compliance risk profile that lands you on the Special Table.",
                    risk: "Medium — depends on frequency and lateness",
                  },
                  {
                    trigger: "Audit finding of under-declaration",
                    detail: "If a KRA desk audit or field audit finds you under-declared sales, you will likely be added to the Special Table as part of the remedial action.",
                    risk: "Very High — usually involves penalties too",
                  },
                  {
                    trigger: "Suspicious invoice patterns",
                    detail: "Issuing invoices that look irregular (round-number amounts, rapid escalation in invoice volume, invoices to related parties) can trigger a review.",
                    risk: "Medium — KRA's analytics system flags anomalies",
                  },
                ].map(({ trigger, detail, risk }) => (
                  <div key={trigger} className="border border-hairline rounded-lg p-4">
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <p className="font-semibold text-ink text-[0.88rem]">
                        <Warning size={14} weight="fill" className="inline-block text-amber-500 mr-1.5 -mt-0.5" aria-hidden="true" />
                        {trigger}
                      </p>
                      <span className="shrink-0 font-mono text-[0.62rem] uppercase tracking-widest text-[#b03030] bg-red-50 dark:bg-red-950/30 px-2 py-0.5 rounded-sm">{risk}</span>
                    </div>
                    <p className="text-[0.83rem] text-ink-muted leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3 — Nil Returns */}
          <section id="nil-return-flagging" aria-labelledby="nil-return-flagging-h">
            <h2 id="nil-return-flagging-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Consecutive Nil Returns: A Hidden Risk
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                This is the <strong className="text-ink">most overlooked trap</strong> in Kenya VAT
                compliance. Filing nil returns is the right thing to do when you have no activity —
                but filing them <strong className="text-ink">month after month without a break</strong>{" "}
                can flag you in KRA's system.
              </p>
              <p>
                Here is the logic from KRA's perspective: if a business has zero sales, zero purchases,
                zero expenses for six straight months, is it really operating? KRA's compliance system
                flags such taxpayers for review. If your business genuinely has a seasonal or pre-launch
                period with no activity, you may be fine — but you need to be prepared to explain.
              </p>
              <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                <p className="font-semibold text-ink text-[0.88rem] mb-2">How to avoid nil return flagging</p>
                <ul className="space-y-2 mt-3">
                  {[
                    "If you have even small activity (KES 1,000 in sales or KES 500 in purchases), file it — do not file a nil return when you have real transactions.",
                    "Keep records of why you filed nil returns — pre-launch phase, seasonal business, restructuring, etc.",
                    "If you registered for VAT but have not launched yet, consider whether voluntary registration was the right move. A business with no activity for 12+ months should not be VAT-registered.",
                    "Consider de-registering from VAT if you consistently have nil activity for 12 months. KRA allows voluntary de-registration if you meet the criteria.",
                    "If you are flagged, respond promptly — ignoring KRA's compliance inquiry can escalate to the Special Table.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[0.85rem] text-ink-muted">
                      <CheckCircle size={15} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-canvas-warm bg-[#fffbf0] dark:bg-[#2a1f00] dark:border-[#4a3800] rounded-lg p-4 flex items-start gap-3">
                <Warning size={17} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#7a5500] dark:text-[#ffcc44] text-[0.85rem] mb-1">
                    Nil-return flagging is still a real risk
                  </p>
                  <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                    The exact mechanism "VAT Special Table" did not survive our August 2026
                    source review, but filing consecutive nil returns gets you flagged
                    regardless of the label — RAIS raises a review flag and your customers'
                    input claims can be challenged on audit. File honest returns even when
                    the amounts are small.
                  </p>
                </div>
              </div>
              <p>
                See our{" "}
                <a href="/resources/nil-returns-tax-amnesty/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  nil returns and tax amnesty guide
                </a>{" "}
                for detailed instructions on filing nil returns correctly.
              </p>
            </div>
          </section>

          {/* Section 4 — Impact on Buyers */}
          <section id="impact-on-buyers" aria-labelledby="impact-on-buyers-h">
            <h2 id="impact-on-buyers-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What Happens When You Buy From a Flagged Supplier
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                If you purchase goods or services from a supplier on the VAT Special Table, here is
                exactly what happens:
              </p>
              <ol className="space-y-3 list-decimal pl-6">
                {[
                  "You receive an eTIMS invoice from the supplier (or a manual invoice if they are non-compliant).",
                  "You enter the purchase and the input VAT amount on your monthly VAT return on iTax.",
                  "iTax cross-checks the supplier's KRA PIN against the Special Table database.",
                  "If the supplier is listed, iTax rejects the specific input VAT line item automatically.",
                  "You receive an error message or warning on the return. The rest of your return processes normally, but that particular input claim is disallowed.",
                  "If you have already claimed the input VAT before KRA updated the Special Table, you may face an additional assessment on audit.",
                ].map((item, i) => (
                  <li key={i} className="text-[0.88rem] text-ink-soft leading-relaxed pl-2">{item}</li>
                ))}
              </ol>
              <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                <p className="font-semibold text-ink text-[0.88rem] mb-2">The cascading effect</p>
                <p className="text-[0.85rem] text-ink-muted leading-relaxed">
                  If you are a supplier and your customers cannot claim input VAT on your invoices,
                  they will stop buying from you. A B2B business that cannot pass the VAT deduction
                  to its customers is at a severe competitive disadvantage. This creates a powerful
                  market incentive to stay off the Special Table — your customers will demand it.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 — Checking Status */}
          <section id="checking-your-status" aria-labelledby="checking-your-status-h">
            <h2 id="checking-your-status-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How to Check Your Status
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                There is <strong className="text-ink">no public database</strong> or search tool where
                you can check if a supplier is on the VAT Special Table. Here is how you find out:
              </p>
              <div className="space-y-4">
                {[
                  {
                    method: "Check your iTax return",
                    detail: "When you file your monthly VAT return and enter a purchase from a flagged supplier, iTax will display a warning or error message. This is the most reliable way to discover a supplier is on the list.",
                  },
                  {
                    method: "Customer complaints",
                    detail: "If your own customers start telling you that their input VAT claims are being rejected, it is likely you have been added to the Special Table. This is often how businesses first find out.",
                  },
                  {
                    method: "KRA compliance letter",
                    detail: "KRA may send a formal notification via iTax or physical mail if you have been flagged. Check your iTax messages regularly.",
                  },
                  {
                    method: "KRA audit or field visit",
                    detail: "During a compliance audit or field visit, a KRA officer may inform you of your Special Table status and explain the steps to remedy it.",
                  },
                ].map(({ method, detail }) => (
                  <div key={method} className="flex items-start gap-3">
                    <Info size={16} weight="fill" className="text-brand shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink text-[0.88rem]">{method}</p>
                      <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Warning size={16} weight="fill" className="text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Proactive tip:</strong> If you are a VAT-registered business
                  making significant purchases (over KES 100,000 per supplier per month), verify your
                  suppliers' compliance status before committing. Ask for their KRA PIN and confirm they
                  are issuing eTIMS invoices. A small upfront check can save you thousands in blocked
                  input VAT claims.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 — Removal */}
          <section id="removal-process" aria-labelledby="removal-process-h">
            <h2 id="removal-process-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How to Get Removed from the Special Table
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Removal from the VAT Special Table is not automatic — you must <strong className="text-ink">demonstrate
                sustained compliance</strong> and actively request removal. Here is the process:
              </p>
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: "File all outstanding returns",
                    detail: "If you have missed any VAT returns (including nil returns), file them immediately. KRA will not consider removal while you have outstanding filings.",
                  },
                  {
                    step: 2,
                    title: "Pay any outstanding penalties or taxes",
                    detail: "Clear all outstanding balances. If you need a penalty waiver, apply for it through iTax under Penalty and Interest Waiver before requesting Special Table removal.",
                  },
                  {
                    step: 3,
                    title: "Demonstrate consistent compliance (3-6 months)",
                    detail: "File your returns on time (before the 20th) for at least 3 consecutive months. KRA wants to see that your compliance was not a one-time event.",
                  },
                  {
                    step: 4,
                    title: "Contact KRA or visit your iTax dashboard",
                    detail: "Access your iTax portal and send a message to KRA requesting a compliance review and removal from the Special Table. Include your KRA PIN, a brief explanation of the steps you have taken, and attach proof of compliance.",
                  },
                  {
                    step: 5,
                    title: "Attend a KRA compliance meeting (if required)",
                    detail: "KRA may schedule a meeting with a compliance officer to discuss your case. Bring records of your returns, eTIMS invoices, and any correspondence. If you have a KRA-registered agent, they can represent you.",
                  },
                  {
                    step: 6,
                    title: "Receive confirmation of removal",
                    detail: "If approved, KRA will update the Special Table and notify you via iTax. Your customers will once again be able to claim input VAT on your invoices.",
                  },
                ].map(({ step, title, detail }) => (
                  <div key={step} className="flex gap-4">
                    <span className="bg-ink text-canvas rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 tabular-nums">{step}</span>
                    <div>
                      <p className="font-semibold text-ink text-[0.9rem]">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-7 border border-brand/20 bg-brand-muted rounded-lg p-5">
                <p className="font-semibold text-ink text-[0.88rem] mb-2">We Can Help With Special Table Removal</p>
                <p className="text-[0.84rem] text-ink-soft leading-relaxed mb-4">
                  Smart VAT Kenya handles VAT Special Table removal for KES 4,000 per application.
                  We draft the compliance letter, compile your filing history, and manage communication
                  with KRA on your behalf. Most cases are resolved within 2 to 4 weeks.
                </p>
                <a
                  href="https://wa.me/254717344440?text=I%20need%20help%20with%20VAT%20Special%20Table%20removal%20for%20my%20business"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
                >
                  Get Special Table Help
                  <ArrowRight size={14} weight="bold" aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>

          {/* Section 7 — Checklist */}
          <section id="protecting-yourself" aria-labelledby="protecting-yourself-h">
            <h2 id="protecting-yourself-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Protecting Your Business: Due Diligence Checklist
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Use this checklist to reduce your risk of being flagged or buying from a flagged supplier:
              </p>
              <div className="border border-hairline rounded-lg overflow-hidden">
                <table className="w-full text-[0.83rem]">
                  <thead>
                    <tr className="border-b border-hairline bg-canvas-alt">
                      <th className="text-left p-3.5 font-semibold text-ink w-10"></th>
                      <th className="text-left p-3.5 font-semibold text-ink">Action</th>
                      <th className="text-left p-3.5 font-semibold text-ink">Why</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hairline">
                    {[
                      { action: "File every return before the 20th — including nil returns", why: "Consistent on-time filing is your best defence against being flagged" },
                      { action: "Onboard eTIMS and issue compliant invoices", why: "eTIMS compliance is mandatory and reduces audit risk" },
                      { action: "Verify your suppliers use eTIMS before making large purchases", why: "Non-compliant suppliers may be on the Special Table, blocking your input VAT" },
                      { action: "Avoid consecutive nil returns if you have any activity at all", why: "Even small transactions should be declared to avoid triggering KRA's nil return flag" },
                      { action: "Keep records of reasons for nil periods (pre-launch, seasonal, etc.)", why: "If flagged, you need evidence to explain the inactivity" },
                      { action: "Check your iTax messages regularly for KRA compliance notices", why: "Early awareness of a flag gives you time to respond before it escalates" },
                      { action: "Respond promptly to any KRA compliance inquiry", why: "Ignoring KRA communication can result in automatic Special Table addition" },
                      { action: "Use Buyer-Initiated Invoicing if a key supplier is not yet on eTIMS", why: "BII lets you claim input VAT while giving the supplier time to onboard" },
                    ].map(({ action, why }) => (
                      <tr key={action}>
                        <td className="p-3.5 text-center"><CheckCircle size={14} weight="fill" className="text-brand inline" aria-hidden="true" /></td>
                        <td className="p-3.5 text-ink-muted font-medium">{action}</td>
                        <td className="p-3.5 text-ink-muted/70 text-[0.78rem]">{why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection faqSchema={faqSchema} />
        </article>

        {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-3">More Guides</p>
          <div className="mb-6">
            <p className="text-[0.83rem] text-ink-muted leading-relaxed">
              Looking further ahead?{" "}
              <a href="/resources/cetis-kenya-2027/" className="text-brand underline underline-offset-2 hover:text-brand-hover">CETIS Kenya 2027</a>{" "}
              (KRA&apos;s pre-clearance e-invoicing system, in procurement for 2027&ndash;28) will make supplier-PIN validation automatic before an invoice reaches a buyer — the fix for supplier-caused Special Table blocks starts today.
            </p>
          </div>
          <div className="mb-6 space-y-3">
            <p className="text-[0.83rem] text-ink-muted leading-relaxed">
              <strong className="text-ink">Next steps for return filing:</strong> Before you file, run the{" "}
              <a href="/resources/vat-return-filing-checklist/#validation-engine" className="text-brand underline underline-offset-2 hover:text-brand-hover">2026 Validation Engine pre-flight check</a>
              to ensure your declared sales and expenses match eTIMS data.
            </p>
            <p className="text-[0.83rem] text-ink-muted leading-relaxed">
              <strong className="text-ink">If a Tax Alert escalates:</strong> See the{" "}
              <a href="/resources/kra-vat-audit-process/" className="text-brand underline underline-offset-2 hover:text-brand-hover">KRA VAT Audit Process</a>
              guide for the full timeline from desk audit to objection and appeal.
            </p>
          </div>
          <ArticleGrid currentSlug="vat-special-table-risks" />
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
