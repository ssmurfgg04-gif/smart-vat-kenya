import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info, Gear } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources" },
    { "@type": "ListItem", position: 3, name: "eTIMS Compliance Checklist", item: "https://smartvatkenya.co.ke/resources/etims-compliance-checklist" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "eTIMS Compliance Checklist Kenya 2026: Daily, Monthly, and Annual Obligations",
  description:
    "Complete eTIMS compliance checklist for VAT-registered businesses in Kenya. Covers daily invoicing, monthly data submission, stock reconciliation, device maintenance, and annual obligations.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-27",
  dateModified: "2026-07-27",
  url: "https://smartvatkenya.co.ke/resources/etims-compliance-checklist",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/etims-compliance-checklist",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What happens if I don't comply with eTIMS requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non-compliance with eTIMS can attract penalties of up to KES 100,000 per instance. KRA has been aggressively enforcing eTIMS compliance in 2026. Specific penalties include: KES 50,000 per month for failure to onboard within 30 days of VAT registration, KES 100,000 for issuing non-compliant invoices, and denial of input VAT claims for purchases that are not eTIMS-compliant.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to submit data to eTIMS every day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "eTIMS transmits invoice data to KRA in real time as invoices are generated. There is no separate 'daily submission' step — every invoice you issue through eTIMS is automatically sent to KRA. However, you should reconcile your eTIMS data daily to ensure all invoices were transmitted successfully and no rejections occurred.",
      },
    },
    {
      "@type": "Question",
      name: "How do I reconcile my stock in eTIMS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "eTIMS requires you to maintain a stock register that matches your physical inventory. To reconcile: (1) Run a stock report from eTIMS. (2) Physically count your inventory. (3) Investigate and correct any discrepancies. (4) Document the reconciliation with date and sign-off. Stock discrepancies are a red flag for KRA audit teams and can trigger a full investigation.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use a third-party POS system with eTIMS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but the system must be KRA-approved and integrated with eTIMS. Many POS providers in Kenya offer eTIMS integration. Before purchasing a POS system, verify with the provider that it is eTIMS-compliant and capable of transmitting invoice data to KRA in real time. Using a non-integrated POS alongside eTIMS creates a reconciliation nightmare.",
      },
    },
    {
      "@type": "Question",
      name: "What records must I keep for eTIMS compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KRA requires you to maintain: (1) A register of all e-invoices issued (sequential, unbroken series). (2) A register of all credit and debit notes. (3) A stock register reconciled monthly. (4) eTIMS device maintenance logs. (5) Records of any manual invoices issued during system downtime. (6) Monthly eTIMS compliance reports. These records must be retained for at least 5 years.",
      },
    },
  ],
}

const toc = [
  { id: "daily",               label: "Daily eTIMS Obligations" },
  { id: "monthly",             label: "Monthly eTIMS Compliance Requirements" },
  { id: "quarterly-annual",    label: "Quarterly and Annual Checks" },
  { id: "device-maintenance",  label: "eTIMS Device Maintenance" },
  { id: "audit-readiness",     label: "Audit Readiness: What KRA Checks" },
  { id: "faq",                 label: "Frequently Asked Questions" },
]

export default function ETIMSComplianceChecklistPage() {
  return (
    <>
      <script id="article-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script id="faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-canvas-dark px-6 lg:px-10 py-14">
        <div className="max-w-3xl mx-auto">
          <a href="/resources" className="inline-flex items-center gap-1.5 text-canvas/50 hover:text-canvas text-sm mb-6 transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> Back to Knowledge Base
          </a>
          <div className="flex flex-wrap gap-2 mb-5">
            {["Checklist", "eTIMS", "Compliance", "2026"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            eTIMS Compliance Checklist Kenya 2026: Daily, Monthly &amp; Annual Obligations
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; KRA-registered VAT agents &mdash; Updated July 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">

        <div className="border-l-[3px] border-brand pl-5 mb-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Why This Checklist Matters</p>
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            eTIMS compliance is <strong className="text-ink">not optional</strong> for VAT-registered businesses in Kenya. KRA's 2026 enforcement drive has led to penalties against thousands of businesses for eTIMS violations — from KES 50,000 for late onboarding to KES 100,000 for issuing non-compliant invoices. This checklist covers every obligation you have: <strong className="text-ink">daily, monthly, quarterly, and annual</strong>. Run through it regularly to stay compliant and avoid costly penalties.
          </p>
        </div>

        <nav aria-label="Table of contents" className="mb-12">
          <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
            <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-muted mb-4">On This Page</p>
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

          <section id="daily" aria-labelledby="daily-h">
            <h2 id="daily-h" className="font-display text-[1.4rem] font-semibold text-ink mb-2 tracking-tight">
              Daily eTIMS Obligations
            </h2>
            <p className="text-[0.85rem] text-ink-muted mb-6">
              These are tasks you or your staff should complete every business day.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Issue eTIMS-compliant invoices for every sale",
                  detail: "Every sale to every customer must be recorded through eTIMS. No exceptions. Manual invoices are only permitted during verified system downtime, and must be entered into eTIMS within 24 hours of the system being restored.",
                },
                {
                  title: "Verify each invoice is accepted by KRA",
                  detail: "After issuing an invoice, check that it appears in 'Issued Invoices' with a 'Success' status. A rejected invoice means the sale is not recorded with KRA even though you issued a document. Fix and reissue before end of day.",
                },
                {
                  title: "Reconcile daily sales tally against eTIMS report",
                  detail: "At end of day, run a quick sales summary from eTIMS and compare it to your POS or manual sales record. Any discrepancy means an invoice was not transmitted correctly or a sale was missed.",
                },
                {
                  title: "Check eTIMS device status at start of day",
                  detail: "Before you start issuing invoices, confirm your eTIMS control unit or portal is connected and functioning. A device that failed overnight may need a reset or KRA support call.",
                },
                {
                  title: "Record any manual transactions with reason",
                  detail: "If you had to issue any manual invoices (system downtime, power failure, etc.), log each one with the reason, time, and invoice details. These must be entered into eTIMS as soon as the system is available.",
                },
              ].map(({ title, detail }) => (
                <div key={title} className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                  <CheckCircle size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink text-[0.88rem]">{title}</p>
                    <p className="text-[0.82rem] text-ink-muted mt-0.5 leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border border-canvas-warm bg-[#fffbf0] dark:bg-[#2a1f00] dark:border-[#4a3800] rounded-lg p-4 flex items-start gap-3 mt-6">
              <Warning size={17} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold text-[#7a5500] dark:text-[#ffcc44] text-[0.85rem] mb-1">
                  Daily reconciliation is your best defence against audit penalties
                </p>
                <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                  KRA audit teams compare your eTIMS invoice register against your bank deposits and VAT returns. A business that reconciles daily catches discrepancies immediately. A business that reconciles monthly (or never) discovers problems only when KRA flags them — and by then, penalties apply.
                </p>
              </div>
            </div>
          </section>

          <section id="monthly" aria-labelledby="monthly-h">
            <h2 id="monthly-h" className="font-display text-[1.4rem] font-semibold text-ink mb-2 tracking-tight">
              Monthly eTIMS Compliance Requirements
            </h2>
            <p className="text-[0.85rem] text-ink-muted mb-6">
              These tasks align with your monthly VAT return cycle and must be completed by the 20th of each month.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Run complete eTIMS sales report for the month",
                  detail: "Generate a monthly sales summary from eTIMS showing total invoices issued, total sales value, total VAT, and breakdown by rate. This report is the source data for your VAT return.",
                },
                {
                  title: "Reconcile eTIMS sales figures against VAT return",
                  detail: "The sales figures on your VAT return must exactly match your eTIMS sales report. If there is a discrepancy, investigate before filing. Common causes: missing invoices, rejected invoices, or sales entered outside eTIMS.",
                },
                {
                  title: "Reconcile physical stock with eTIMS stock register",
                  detail: "eTIMS tracks your inventory through invoices issued. At least once a month, physically count your stock and compare it to the eTIMS stock register. Investigate and correct any discrepancies.",
                },
                {
                  title: "Verify invoice sequence is continuous with no gaps",
                  detail: "Run an invoice sequence report. Any gaps in serial numbers must be explained (cancelled invoices, rejected invoices, or skipped numbers). Unexplained gaps suggest unreported sales and trigger KRA attention.",
                },
                {
                  title: "Process any credit notes or debit notes",
                  detail: "If you issued refunds or adjustments during the month, ensure corresponding credit notes are created in eTIMS. Credit notes reduce your output VAT for the period.",
                },
                {
                  title: "Back up eTIMS data and reports",
                  detail: "Export and save your monthly eTIMS reports. KRA requires records to be retained for 5 years. Cloud backups are recommended in addition to local storage.",
                },
              ].map(({ title, detail }) => (
                <div key={title} className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                  <CheckCircle size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink text-[0.88rem]">{title}</p>
                    <p className="text-[0.82rem] text-ink-muted mt-0.5 leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="quarterly-annual" aria-labelledby="quarterly-h">
            <h2 id="quarterly-h" className="font-display text-[1.4rem] font-semibold text-ink mb-2 tracking-tight">
              Quarterly and Annual Checks
            </h2>
            <p className="text-[0.85rem] text-ink-muted mb-6">
              Less frequent but equally important checks to maintain long-term compliance.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Quarterly: Full eTIMS systems audit",
                  detail: "Review all eTIMS processes: invoice issuance, stock reconciliation, device logs, user access controls. Identify any recurring issues and address them before they become KRA audit findings.",
                },
                {
                  title: "Quarterly: User access review",
                  detail: "If multiple staff have access to eTIMS, review who has login credentials. Revoke access for former employees. Change passwords quarterly. Unauthorised access to eTIMS is a security and compliance risk.",
                },
                {
                  title: "Annual: eTIMS device inspection and maintenance",
                  detail: "Schedule a full inspection of your eTIMS control unit (ESD). Check for physical damage, firmware updates, and battery condition. Replace any device showing signs of wear to prevent unexpected failures.",
                },
                {
                  title: "Annual: KRA eTIMS compliance self-assessment",
                  detail: "Run a self-assessment against KRA's eTIMS compliance checklist. Areas to check: invoice continuity, stock accuracy, timely data submission, device logs, staff training, and record retention.",
                },
                {
                  title: "Annual: Staff training update",
                  detail: "eTIMS processes and KRA requirements change. Ensure your invoicing and finance staff are up to date with the latest eTIMS requirements. An untrained employee is the most common cause of compliance failures.",
                },
              ].map(({ title, detail }) => (
                <div key={title} className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                  <CheckCircle size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink text-[0.88rem]">{title}</p>
                    <p className="text-[0.82rem] text-ink-muted mt-0.5 leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="device-maintenance" aria-labelledby="device-h">
            <h2 id="device-h" className="font-display text-[1.4rem] font-semibold text-ink mb-2 tracking-tight">
              eTIMS Device Maintenance
            </h2>
            <p className="text-[0.85rem] text-ink-muted mb-6">
              Your eTIMS control unit (ESD) or software is the backbone of your compliance. Neglecting it is the fastest way to get into KRA trouble.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Keep the device powered and connected",
                  detail: "The ESD device must remain powered on during business hours. If you use the eTIMS portal, ensure a stable internet connection at all times. Intermittent connectivity causes invoice transmission failures.",
                },
                {
                  title: "Install firmware and software updates promptly",
                  detail: "KRA periodically releases updates to the eTIMS system. When an update is available, install it as soon as possible. Running outdated firmware can cause compatibility issues and invoice rejections.",
                },
                {
                  title: "Maintain a device fault log",
                  detail: "Record every instance of device malfunction, error message, or connectivity issue. Include date, time, nature of fault, and how it was resolved. This log is your evidence if KRA questions compliance during a fault period.",
                },
                {
                  title: "Have a backup device or alternative access plan",
                  detail: "If your primary ESD device fails, you should have a backup plan. This could be a second device, access to the eTIMS web portal, or an arrangement with your VAT agent to issue invoices on your behalf.",
                },
                {
                  title: "Contact KRA immediately for hardware faults",
                  detail: "If your ESD device is physically damaged or stops working entirely, contact KRA eTIMS support at etims@kra.go.ke or call 020 4 999 999. Do not continue issuing manual invoices for days without addressing the device issue.",
                },
              ].map(({ title, detail }) => (
                <div key={title} className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                  <Gear size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink text-[0.88rem]">{title}</p>
                    <p className="text-[0.82rem] text-ink-muted mt-0.5 leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="audit-readiness" aria-labelledby="audit-h">
            <h2 id="audit-h" className="font-display text-[1.4rem] font-semibold text-ink mb-2 tracking-tight">
              Audit Readiness: What KRA Checks
            </h2>
            <p className="text-[0.85rem] text-ink-muted mb-6">
              If KRA selects your business for an eTIMS audit, here is exactly what they examine. Use this to test your own readiness.
            </p>

            <div className="border border-hairline rounded-lg overflow-hidden">
              <table className="w-full text-[0.83rem]">
                <thead>
                  <tr className="border-b border-hairline bg-canvas-alt">
                    <th className="text-left p-3.5 font-semibold text-ink">What KRA Examines</th>
                    <th className="text-left p-3.5 font-semibold text-ink">What They Look For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hairline">
                  <tr>
                    <td className="p-3.5 text-ink-muted">Invoice continuity</td>
                    <td className="p-3.5 text-ink">Gaps in serial numbers, missing invoices, invoices issued out of sequence</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-ink-muted">Sales vs eTIMS reconciliation</td>
                    <td className="p-3.5 text-ink">Discrepancies between eTIMS sales and bank deposits, or eTIMS sales and VAT return figures</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-ink-muted">Stock register accuracy</td>
                    <td className="p-3.5 text-ink">Physical stock counts matching eTIMS stock records. Large discrepancies suggest off-book sales</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-ink-muted">Device fault logs</td>
                    <td className="p-3.5 text-ink">Evidence that device faults were documented and reported to KRA promptly</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-ink-muted">Manual invoice records</td>
                    <td className="p-3.5 text-ink">Any manual invoices must have a valid reason and must be entered into eTIMS within 24 hours of system restoration</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-ink-muted">Credit and debit notes</td>
                    <td className="p-3.5 text-ink">All adjustments must be supported by original invoice references and valid reasons</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-ink-muted">User access logs</td>
                    <td className="p-3.5 text-ink">Unauthorised users, former employees with active access, or suspicious login patterns</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3 mt-6">
              <Info size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold text-ink text-[0.85rem] mb-1">Pass the audit test every time</p>
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  The businesses that pass eTIMS audits with zero findings are the ones that treat compliance as a daily habit, not a monthly scramble. If the idea of a KRA audit keeps you up at night, consider our <strong className="text-ink">eTIMS managed service</strong> at KES 2,500/month. We handle your eTIMS compliance end to end — you just run your business.
                </p>
              </div>
            </div>

            <div className="mt-6 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
              <p className="font-display text-[1.15rem] font-semibold text-ink mb-3">Want Us to Handle eTIMS Compliance?</p>
              <p className="text-[0.84rem] text-ink-soft leading-relaxed mb-4">
                Our team manages your eTIMS invoicing, stock reconciliation, and monthly compliance reporting. No more worrying about KRA audits. From <strong className="text-ink">KES 2,500/month</strong>.
              </p>
              <a
                href="https://wa.me/254721725958?text=I%20want%20to%20sign%20up%20for%20eTIMS%20managed%20service%20-%20KES%202,500%2Fmonth.%20Please%20send%20me%20the%20next%20steps."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
              >
                Start eTIMS Managed Service
                <ArrowRight size={14} weight="bold" aria-hidden="true" />
              </a>
            </div>
          </section>

          <section id="faq" aria-labelledby="faq-h">
            <h2 id="faq-h" className="font-display text-[1.4rem] font-semibold text-ink mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
            <dl className="divide-y divide-hairline">
              {faqSchema.mainEntity.map((q) => (
                <div key={q.name} className="py-5 first:pt-0">
                  <dt className="font-display text-[0.95rem] font-semibold text-ink mb-2">{q.name}</dt>
                  <dd className="text-[0.85rem] text-ink-muted leading-relaxed">{q.acceptedAnswer.text}</dd>
                </div>
              ))}
            </dl>
          </section>
        </article>

        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="etims-compliance-checklist" />
        </div>

        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">Need eTIMS compliance help?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[40ch] mx-auto leading-relaxed">
            We help VAT-registered businesses stay eTIMS compliant. Daily invoice management, stock reconciliation, and audit support.
          </p>
          <a
            href="https://wa.me/254721725958?text=Hi%2C%20I%20need%20help%20with%20eTIMS%20compliance"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            Get eTIMS Compliance Support
            <svg viewBox="0 0 12 12" className="w-3 h-3 fill-current" aria-hidden="true"><path d="M6 0L4.59 1.41 9.17 6l-4.58 4.59L6 12l6-6z"/></svg>
          </a>
          <div className="mt-4">
            <a href="/resources" className="text-[0.82rem] text-ink-muted hover:text-brand transition-colors underline underline-offset-2">
              ← All Resources
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
