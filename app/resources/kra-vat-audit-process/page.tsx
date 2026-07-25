import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Warning, CheckCircle, Info } from "@phosphor-icons/react/dist/ssr"
import { NewsletterSignup } from "@/components/newsletter-signup"

export const metadata: Metadata = {
  title: "KRA VAT Audit Process Kenya 2026: What to Expect and How to Prepare",
  description:
    "What happens during a KRA VAT audit in Kenya? Notice, document requests, site visits, assessment, objection, and appeal. How to prepare your records and avoid adverse findings. Complete guide for registered VAT persons.",
  alternates: { canonical: "https://smartvatkenya.co.ke/resources/kra-vat-audit-process" },
}

export default function KraVatAuditProcessPage() {
  return (
    <div className="max-w-[700px] mx-auto px-6 lg:px-10 py-12">
      <Link href="/resources" className="inline-flex items-center gap-2 text-ink-muted hover:text-ink text-sm font-medium mb-8 transition-colors">
        <ArrowLeft size={14} aria-hidden="true" /> All Resources
      </Link>

      <article>
        <header className="mb-8">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand mb-3">Compliance Guide</p>
          <h1 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold text-ink tracking-tight leading-tight mb-4 text-balance">
            KRA VAT Audit Process Kenya 2026: What to Expect and How to Prepare
          </h1>
          <div className="flex items-center gap-4 text-[0.75rem] text-ink-muted">
            <time dateTime="2026-07-26">26 July 2026</time>
            <span>12 min read</span>
            <span>Smart VAT Kenya</span>
          </div>
        </header>

        <div className="space-y-5 text-[0.9rem] text-ink-soft leading-[1.75]">
          <p>
            A KRA VAT audit is one of the most stressful events a business can face. The notice arrives
            in your iTax inbox, and suddenly every invoice, every return, every bank deposit from the
            past three years is under scrutiny.
          </p>
          <p>
            The good news: most audits follow a predictable pattern. If you know what KRA will ask for,
            why they ask for it, and how to respond, you can significantly reduce your risk of an
            adverse assessment.
          </p>
          <p>
            This guide walks through the entire KRA VAT audit process — from the triggers that put you
            on KRA's radar through to objection and appeal — and gives you a practical checklist to
            prepare before the notice arrives.
          </p>

          <div className="border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800/40 rounded-lg p-4 flex items-start gap-3">
            <Warning size={17} weight="fill" className="text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-ink text-[0.9rem]">Audit preparedness is not optional</p>
              <p className="text-[0.83rem] text-amber-700 dark:text-amber-400 leading-relaxed">
                KRA has intensified its audit programme in 2026, driven by eTIMS data matching and
                the expanded compliance mandate. Businesses that are organised before the audit
                notice arrives fare significantly better than those scrambling after.
              </p>
            </div>
          </div>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">What Triggers a KRA VAT Audit?</h2>
          <p>
            KRA does not audit every VAT-registered person every year. Resources are limited, so KRA
            uses a risk-based selection model. Understanding what puts you in the high-risk pool is
            your first line of defence.
          </p>
          <p className="font-semibold text-ink mt-4">Common audit triggers include:</p>
          <ul className="space-y-2 mt-2">
            {[
              { trigger: "Nil returns for 6 or more consecutive months", detail: "Filing nil returns while you are clearly operating raises immediate flags. KRA assumes you are making sales but not declaring them. If your business has genuinely had no activity, consider applying for VAT cancellation rather than filing indefinite nil returns." },
              { trigger: "Input VAT claims far exceeding output VAT", detail: "If you regularly claim more input VAT than you collect in output VAT, KRA will question whether your purchases are genuine business expenses. A consistent credit position, especially without zero-rated supplies, invites a desk audit." },
              { trigger: "Large or frequent VAT refund claims", detail: "Any refund application over KES 500,000 typically triggers a pre-refund audit. KRA wants to verify the claim before releasing cash. Even smaller refunds can trigger an audit if they are frequent or the pattern is unusual." },
              { trigger: "Inconsistencies between eTIMS data and returns", detail: "eTIMS transmits every invoice you issue to KRA in real time. When your VAT return figures do not match the eTIMS data KRA already holds, the system automatically flags you. This is the most common trigger in 2026." },
              { trigger: "Supplier on the Special Table", detail: "If you claim input VAT from a supplier on KRA's Special Table (suspected of issuing fake invoices), your claim may be disallowed and your entire return flagged for audit. The burden falls on you to prove the supply was genuine." },
              { trigger: "Industry-wide audits", detail: "KRA periodically runs sector-wide audit programmes. Recent targets include construction, hospitality, transport, and digital services. If your industry is on KRA's list, expect a notice regardless of your individual compliance history." },
              { trigger: "Random selection", detail: "KRA also selects a percentage of taxpayers randomly each year. Even if you have no red flags, you can still be selected. This is why ongoing preparedness matters." },
              { trigger: "Tip-offs or third-party information", detail: "KRA receives intelligence from competitors, disgruntled employees, and other government agencies. Information from the KRA whistleblower programme can initiate an audit with no prior warning." },
            ].map(({ trigger, detail }) => (
              <li key={trigger} className="flex gap-3">
                <Warning size={14} className="text-amber-600 shrink-0 mt-1" />
                <div>
                  <strong className="text-ink">{trigger}:</strong>{" "}
                  <span className="text-ink-soft">{detail}</span>
                </div>
              </li>
            ))}
          </ul>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">The KRA Audit Process: Step by Step</h2>
          <p>
            A KRA VAT audit follows a defined process under the Tax Procedures Act 2015 and the
            VAT Act 2013. Understanding each stage helps you know what to expect and when to
            engage professional support.
          </p>

          <div className="space-y-4 mt-4">
            {[
              { step: "1. Notification of Audit", body: "KRA issues a formal audit notice via the iTax portal. The notice specifies the tax period under review, the scope of the audit, and the documents required. You typically have 7 to 14 days to respond. The notice may also be delivered physically if KRA conducts a site visit. Do not ignore it — failure to respond can result in KRA issuing a best-judgement assessment based on whatever information they have." },
              { step: "2. Document Request and Submission", body: "KRA sends a list of documents they need to review. You submit these through iTax or physically at the KRA office. Common requests include sales and purchase invoices, eTIMS records, bank statements, stock records, and import documents. Organised businesses submit within the deadline. Late submissions signal poor record-keeping and increase KRA's suspicion." },
              { step: "3. Desk Review", body: "KRA reviews your documents against your filed returns and the eTIMS data they already hold. The officer checks for: matching invoice totals against declared sales, verifying input VAT claims against supplier eTIMS records, identifying gaps in invoice序列, and testing the arithmetic of your returns. Most audits are resolved at this stage without a site visit." },
              { step: "4. Site Visit (if required)", body: "If the desk review raises questions KRA cannot resolve from documents alone, they schedule a physical visit to your business premises. The officers will: inspect your physical stock, observe your invoicing process in real time, interview your finance team, and request access to your accounting system. Site visits are more common for construction, retail, and hospitality businesses." },
              { step: "5. Draft Assessment", body: "KRA issues a draft assessment showing the additional tax they believe you owe, along with penalties and interest. You are given a chance to respond — usually 14 days. This is your opportunity to provide additional documents or arguments before the assessment becomes final. Most successful objections start with a strong response to the draft assessment." },
              { step: "6. Final Assessment", body: "After considering your response (or your silence), KRA issues a final assessment through iTax. This becomes a legally enforceable tax demand. The assessment includes the principal tax, a late-payment penalty of 20% per annum, and interest at 2% per month (compounded)." },
              { step: "7. Objection Period (30 days)", body: "You have 30 days from the date of the final assessment to lodge a valid objection. The objection must be in writing, specify the grounds, and be supported by documents. KRA must respond within 60 days. If KRA does not respond in time, the objection is deemed allowed." },
              { step: "8. Appeal to TAT or High Court", body: "If KRA rejects your objection or you disagree with the outcome, you can appeal to the Tax Appeals Tribunal (TAT) within 30 days of KRA's objection decision. From TAT, a further appeal lies to the High Court on points of law. Legal representation is essential at this stage." },
            ].map(({ step, body }) => (
              <div key={step} className="border border-hairline rounded-lg p-4">
                <p className="font-semibold text-ink text-[0.88rem] mb-1">{step}</p>
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">What Documents KRA Will Request</h2>
          <p>
            KRA issues a standard document request at the start of every VAT audit. The exact list
            depends on the scope, but these are the documents most frequently requested:
          </p>
          <ul className="space-y-2 mt-2">
            {[
              { doc: "Sales invoices and receipts", detail: "All invoices issued during the audit period, including eTIMS-compliant invoices, credit notes, and debit notes. KRA will cross-check totals against your filed VAT returns." },
              { doc: "Purchase invoices and expense records", detail: "All supplier invoices for which you claimed input VAT deduction. KRA will verify these against the supplier's eTIMS records. Missing or non-eTIMS invoices mean disallowed claims." },
              { doc: "eTIMS data extracts", detail: "Your complete eTIMS transaction history from the KRA eTIMS portal. This includes all invoices issued and received. KRA will compare this against your VAT return declarations." },
              { doc: "Bank statements", detail: "All business bank accounts for the audit period. KRA looks for deposits that do not match your declared sales — a common source of under-declaration findings." },
              { doc: "M-Pesa / mobile money statements", detail: "If your business accepts mobile money payments, KRA will request these statements. Cash-intensive businesses are especially vulnerable to under-declaration findings from mobile money data." },
              { doc: "Stock records and inventory reports", detail: "Opening and closing stock positions, stock movement schedules, and any stock count sheets. KRA uses stock records to test whether your purchases match your declared sales." },
              { doc: "Import documents", detail: "IDF forms, customs entries, Single Customs Territory (SCT) declarations, and import VAT payment receipts. These verify that VAT on imports was paid and correctly claimed." },
              { doc: "VAT returns for the audit period", detail: "All VAT returns filed during the period, including any amendments. KRA reviews these against your invoice-level data." },
              { doc: "Accountant's working papers", detail: "If you use a tax agent, KRA may request the working papers behind your VAT return preparation — trial balances, VAT control account reconciliations, and the audit trail from source documents to the return." },
            ].map(({ doc, detail }) => (
              <li key={doc} className="flex gap-3">
                <Info size={14} className="text-brand shrink-0 mt-1" />
                <div>
                  <strong className="text-ink">{doc}:</strong>{" "}
                  <span className="text-ink-soft">{detail}</span>
                </div>
              </li>
            ))}
          </ul>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">How Long Does a KRA VAT Audit Take?</h2>
          <p>
            KRA does not have a statutory deadline for completing an audit. In practice, most VAT audits
            take between 3 and 6 months from the date of the notice to the issue of a final assessment.
          </p>
          <p className="font-semibold text-ink mt-4">What affects the timeline:</p>
          <ul className="space-y-1.5 mt-2">
            {[
              "Complexity of your business — businesses with multiple revenue streams, branches, or related-party transactions take longer.",
              "Quality of your records — organised, digitised records can be reviewed in weeks. Shoe-box accounting adds months.",
              "Responsiveness — each time you delay responding to a KRA request, the clock keeps running.",
              "Site visits — these add 4 to 8 weeks to the process, especially if KRA needs to visit multiple locations.",
              "KRA workload — audit officers handle multiple cases simultaneously. Peak periods (January to April) are slower.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <Warning size={14} className="text-amber-600 shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3">
            You can help move the audit faster by responding to every KRA communication within the
            deadline, submitting documents in a well-organised format (indexed and labelled), and
            designating a single point of contact for the audit team.
          </p>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">Common Audit Findings</h2>
          <p>
            Based on KRA's published audit outcomes and our experience representing clients, these are
            the most common findings in VAT audits:
          </p>
          <div className="space-y-4 mt-4">
            {[
              { finding: "Under-declared sales", prevalence: "Most common", explanation: "KRA compares your bank deposits and eTIMS invoice totals to your declared sales. Any gap is treated as under-declaration. This finding carries a penalty of 75% of the tax evaded (or 200% if KRA determines it was deliberate). Common causes: cash sales not rung through eTIMS, direct bank deposits not recorded as sales, and timing differences not properly documented." },
              { finding: "Disallowed input VAT", prevalence: "Very common", explanation: "KRA disallows input VAT where the supplier's eTIMS invoice was not transmitted, the supplier was on the Special Table, or the purchase was not wholly for business use. The disallowed amount is added back as tax due, plus penalties." },
              { finding: "Missing eTIMS invoices", prevalence: "Very common", explanation: "If you issued invoices outside eTIMS — even for cash sales — KRA treats those as undeclared sales. The eTIMS penalty of KES 50,000 per month may also apply separately." },
              { finding: "Incorrect apportionment", prevalence: "Common", explanation: "Businesses with mixed supplies (taxable and exempt) that failed to apportion input VAT correctly. Since the Finance Act 2025 removed the 90:10 rule, many businesses that previously claimed full input VAT now owe substantial adjustments." },
              { finding: "Late filing penalties", prevalence: "Common", explanation: "KRA reviews whether all returns were filed on time. Late-filed returns attract a penalty of KES 10,000 per return (KES 20,000 for large taxpayers). Interest of 2% per month also applies on any unpaid tax." },
              { finding: "Transfer pricing adjustments", prevalence: "Less common (large businesses)", explanation: "For related-party transactions, KRA may adjust prices to arm's length, resulting in additional output VAT or disallowed input VAT. This typically affects medium and large businesses." },
            ].map(({ finding, prevalence, explanation }) => (
              <div key={finding} className="border border-hairline rounded-lg p-4">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="font-semibold text-ink text-[0.88rem]">{finding}</p>
                  <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-[0.65rem] font-medium uppercase tracking-wider px-2 py-0.5 rounded shrink-0">
                    {prevalence}
                  </span>
                </div>
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">{explanation}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">How to Object to an Audit Assessment</h2>
          <p>
            If you disagree with KRA's final assessment, you have the right to object under Section 51
            of the Tax Procedures Act 2015. A valid objection must meet strict requirements:
          </p>
          <ul className="space-y-2 mt-2">
            {[
              "Lodge the objection within 30 days of the date of the final assessment. Late objections are only accepted if KRA is satisfied the delay was due to reasonable cause.",
              "The objection must be in writing and submitted through the iTax portal.",
              "State each ground of objection clearly — vague objections like \"we disagree with the assessment\" are invalid.",
              "Provide supporting documents for each ground. If you claim a specific invoice was miscounted, attach it. If you dispute a bank deposit analysis, provide alternative evidence.",
              "Pay any tax not in dispute before lodging the objection. If KRA assessed KES 1,000,000 and you agree with KES 200,000, pay the KES 200,000 first. Failure to pay the undisputed portion can invalidate the entire objection.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3">
            KRA must respond to your objection within 60 days. If they do not respond within that
            period, the objection is deemed allowed — meaning KRA accepts your position. If KRA
            rejects your objection, you can appeal to the Tax Appeals Tribunal within 30 days.
          </p>
          <p>
            At the TAT level, the process becomes formal: written submissions, oral hearings, and
            legal representation. TAT decisions can be appealed to the High Court on points of law.
            Most businesses engage a tax agent or lawyer at the objection stage — attempting to
            navigate the objection process alone significantly reduces your chances of success.
          </p>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">Preparing for a VAT Audit: Checklist</h2>
          <p>
            Preparation before the audit notice arrives is the single most important factor in a
            favourable outcome. Use this checklist to get your records audit-ready:
          </p>
          <div className="space-y-3 mt-4">
            {[
              { area: "Document Organisation", items: ["File all eTIMS invoices in chronological order — both sales and purchases.", "Maintain a separate folder for import documents (IDF, customs entries, VAT payment receipts).", "Keep bank and M-Pesa statements for all business accounts — at least 3 years.", "Retain stock records and inventory count sheets for each month of the audit period.", "Keep a VAT control account reconciliation showing how you moved from source documents to the return."] },
              { area: "eTIMS Compliance", items: ["Confirm all invoices were issued through eTIMS — no manual invoices for the audit period.", "Run a compliance report from the KRA eTIMS portal to check for gaps.", "Verify that all your suppliers' invoices were transmitted and appear in your purchases CSV.", "If any invoices are missing from your CSV, contact the supplier to retransmit through eTIMS."] },
              { area: "Return Accuracy", items: ["Cross-check your filed VAT returns against your sales and purchase summaries.", "Identify any discrepancies and prepare a written explanation for each.", "If you find errors, file an amended return before the audit notice arrives — voluntary disclosure reduces penalties.", "Ensure apportionment calculations (if applicable) are documented and supportable."] },
              { area: "Engage a Tax Agent", items: ["Consider engaging a VAT specialist before the audit starts — not after the assessment arrives.", "A tax agent handles document submission, communicates with KRA on your behalf, and prepares the objection if needed.", "Smart VAT Kenya assists with audit preparation, representation, and objection — KES 8,000."] },
              { area: "Communication Protocol", items: ["Designate one person as the audit contact for your business.", "Instruct all staff not to discuss tax matters with KRA officers directly — route all questions through the designated contact.", "Respond to every KRA communication within the deadline. Extensions are rarely granted.", "Maintain a log of all communications with KRA — date, mode, officer name, and summary."] },
            ].map(({ area, items }) => (
              <div key={area} className="border border-hairline rounded-lg p-4">
                <p className="font-semibold text-ink text-[0.88rem] mb-2">{area}</p>
                <ul className="space-y-1">
                  {items.map((item) => (
                    <li key={item} className="flex gap-2 text-[0.83rem] text-ink-muted">
                      <CheckCircle size={12} weight="fill" className="text-brand shrink-0 mt-1.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border border-brand/25 bg-brand-muted rounded-lg p-5 mt-8">
            <p className="font-semibold text-ink text-[0.9rem] mb-1">Facing a KRA audit?</p>
            <p className="text-[0.83rem] text-ink-muted mb-3">
              We assist with document preparation, representation, and objection — KES 8,000.
              First consultation is free.
            </p>
            <a href="https://wa.me/254721725958?text=I%20need%20help%20with%20a%20KRA%20VAT%20audit%20-%20document%20preparation%20and%20representation"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-4 py-2.5 rounded-md hover:bg-brand-hover transition-colors">
              Ask Us on WhatsApp <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
          </div>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">Related Resources</h2>
          <ul className="space-y-2">
            {[
              ["Input VAT Deduction Guide", "/resources/input-vat-deduction-guide", "How to claim and document input VAT correctly to avoid audit findings"],
              ["VAT Special Table Risks", "/resources/vat-special-table-risks", "Why suppliers on the Special Table trigger input VAT disallowance and audit flags"],
              ["KRA VAT Penalties Reference", "/resources/kra-vat-penalties-reference", "Complete penalty table including audit-related penalties"],
            ].map(([title, slug, desc]) => (
              <li key={slug}>
                <Link href={slug} className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  {title}
                </Link>
                <span className="text-ink-muted"> — {desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <div className="mt-10 pt-8 border-t border-hairline flex items-center justify-between flex-wrap gap-4">
        <Link href="/resources" className="inline-flex items-center gap-2 text-ink-muted hover:text-ink text-sm font-medium transition-colors">
          <ArrowLeft size={14} aria-hidden="true" /> All Resources
        </Link>
        <a href="https://wa.me/254721725958?text=I%20need%20help%20with%20a%20KRA%20VAT%20audit%20-%20document%20preparation%20and%20representation"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors">
          Get Audit Help <ArrowRight size={14} weight="bold" aria-hidden="true" />
        </a>
      </div>

      <div className="mt-8">
        <NewsletterSignup />
      </div>
    </div>
  )
}
