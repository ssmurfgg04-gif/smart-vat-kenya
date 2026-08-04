import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources" },
    { "@type": "ListItem", position: 3, name: "eTIMS Invoice Rejected", item: "https://smartvatkenya.co.ke/resources/etims-invoice-rejected" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "eTIMS Invoice Rejected? Why KRA Rejects Your e-Invoice & How to Fix It (Kenya 2026)",
  description:
    "Complete guide to fixing rejected eTIMS invoices in Kenya. Covers ITAX vs DIGITAL signature errors, control unit failures, duplicate serial numbers, customer PIN validation, and step-by-step fixes for each rejection code.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-27",
  dateModified: "2026-07-27",
  url: "https://smartvatkenya.co.ke/resources/etims-invoice-rejected",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/etims-invoice-rejected",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why does eTIMS keep rejecting my invoices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common reasons are: (1) Wrong signature type — you selected ITAX but the customer is a DIGITAL user, or vice versa. (2) Duplicate invoice serial number — the number has already been used. (3) Customer's KRA PIN is invalid or not found. (4) Control unit malfunction or connection timeout. (5) Invoice total does not match the line item breakdown. Check the rejection message carefully — eTIMS usually tells you exactly what is wrong.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between ITAX and DIGITAL signatures in eTIMS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ITAX signature means the customer is a VAT-registered business that files returns on iTax and will claim input VAT on your invoice. DIGITAL signature means the customer is not VAT-registered (e.g. an individual consumer or a non-VAT business). Selecting the wrong signature type is the most common cause of invoice rejection. If your customer is an ordinary consumer, always select DIGITAL.",
      },
    },
    {
      "@type": "Question",
      name: "Can I edit a rejected eTIMS invoice and resubmit it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Rejected invoices cannot be edited. You must cancel the rejected invoice in the eTIMS system and create a new one with a fresh serial number. The old serial number cannot be reused. Always double-check your entries before submitting to avoid wasting serial numbers.",
      },
    },
    {
      "@type": "Question",
      name: "How do I fix a duplicate invoice number error in eTIMS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A duplicate serial number error means that number has already been used in the system. eTIMS assigns serial numbers sequentially. If you are getting this error, check: (1) You may have skipped a number — find the last successfully issued invoice and continue from the next number. (2) The serial number was already used in a draft or cancelled invoice. (3) Your eTIMS device serial number range needs resetting — contact KRA eTIMS support.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do if my eTIMS control unit stops working?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your eTIMS control unit (the physical device or software) fails, you cannot issue compliant invoices until it is fixed. Contact KRA eTIMS support immediately on 020 4 999 999 or etims@kra.go.ke. In the meantime, issue manual pro-forma invoices and note that they will be entered into eTIMS once the system is restored. KRA allows a grace period for system failures, but you must have evidence of the fault.",
      },
    },
  ],
}

const toc = [
  { id: "wrong-signature",      label: "Wrong Signature Type (ITAX vs DIGITAL)" },
  { id: "duplicate-serial",     label: "Duplicate Invoice Serial Number" },
  { id: "customer-pin",         label: "Customer KRA PIN Validation Failed" },
  { id: "control-unit",         label: "Control Unit Error / Connection Timeout" },
  { id: "amount-mismatch",      label: "Invoice Amount Mismatch" },
  { id: "item-description",     label: "Item Description or HS Code Errors" },
  { id: "cancelling",           label: "How to Cancel and Reissue a Rejected Invoice" },
  { id: "prevention",           label: "Prevention: Never Have a Rejected Invoice Again" },
  { id: "faq",                  label: "Frequently Asked Questions" },
]

export default function ETIMSInvoiceRejectedPage() {
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
          <a href="/resources/" className="inline-flex items-center gap-1.5 text-canvas/50 hover:text-canvas text-sm mb-6 transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> Back to Knowledge Base
          </a>
          <div className="flex flex-wrap gap-2 mb-5">
            {["eTIMS", "KRA", "Troubleshooting", "e-Invoice"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            eTIMS Invoice Rejected? Why KRA Rejects Your e-Invoice &amp; How to Fix It
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; KRA-registered VAT agents &mdash; Updated July 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">

        <div className="border-l-[3px] border-brand pl-5 mb-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Quick Answer</p>
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            When eTIMS rejects your invoice, it displays a specific error message. The most common rejections are <strong className="text-ink">wrong signature type</strong> (ITAX vs DIGITAL &mdash; this accounts for nearly half of all rejections), <strong className="text-ink">duplicate serial number</strong>, and <strong className="text-ink">customer PIN validation failure</strong>. You cannot edit a rejected invoice &mdash; you must cancel it and create a new one with a fresh serial number. This guide covers every rejection code and the exact steps to fix it.
          </p>
        </div>

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

          <section id="wrong-signature" aria-labelledby="signature-h">
            <h2 id="signature-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Wrong Signature Type &mdash; ITAX vs DIGITAL
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                This is the <strong className="text-ink">most common eTIMS rejection reason</strong>, accounting for roughly 40-50% of all rejected invoices. When you create an invoice in eTIMS, you must select the correct signature type for your customer.
              </p>
              <div className="border border-hairline rounded-lg overflow-hidden">
                <table className="w-full text-[0.83rem]">
                  <thead>
                    <tr className="border-b border-hairline bg-canvas-alt">
                      <th className="text-left p-3.5 font-semibold text-ink">Signature Type</th>
                      <th className="text-left p-3.5 font-semibold text-ink">Who It Is For</th>
                      <th className="text-left p-3.5 font-semibold text-ink">When to Use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hairline">
                    <tr>
                      <td className="p-3.5 text-ink font-medium">ITAX</td>
                      <td className="p-3.5 text-ink-muted">VAT-registered businesses and organisations</td>
                      <td className="p-3.5 text-ink-muted">The customer needs your invoice to claim input VAT. They have a VAT PIN and file VAT returns.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 text-ink font-medium">DIGITAL</td>
                      <td className="p-3.5 text-ink-muted">Individual consumers, non-VAT businesses, and anyone not registered for VAT</td>
                      <td className="p-3.5 text-ink-muted">The customer is not claiming input VAT. They do not have a VAT PIN or are below the registration threshold.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="space-y-3">
                {[
                  {
                    title: "You selected ITAX for a consumer customer",
                    desc: "If you sell to individual consumers (e.g. retail customers, walk-in clients), they do not have a VAT PIN. Always select DIGITAL for non-VAT customers.",
                  },
                  {
                    title: "You selected DIGITAL for a VAT-registered customer",
                    desc: "If a customer asks for your KRA PIN and says they need the invoice for their VAT return, they are an ITAX customer. Selecting DIGITAL means their purchase will not appear in their eTIMS purchase register.",
                  },
                  {
                    title: "When in doubt, ask the customer",
                    desc: "Simply ask: 'Do you need this invoice for your VAT return?' If yes, use ITAX. If no or unsure, use DIGITAL. You can also look up a customer's VAT status on iTax by entering their KRA PIN.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <CheckCircle size={15} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink text-[0.88rem]">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              { }
            </div>
          </section>

          <section id="duplicate-serial" aria-labelledby="duplicate-h">
            <h2 id="duplicate-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Duplicate Invoice Serial Number
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                eTIMS assigns a unique serial number to every invoice. If you try to use a serial number that has already been used (including on a cancelled or rejected invoice), the system will reject it.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Find the last successfully issued invoice number",
                    desc: "Go to your eTIMS dashboard and look at 'Issued Invoices'. Note the last serial number that was successfully issued. The next invoice should use the next sequential number.",
                  },
                  {
                    title: "Check for gaps caused by cancelled or rejected invoices",
                    desc: "When an invoice is cancelled or rejected, its serial number cannot be reused. The system automatically skips it. If you are trying to use a number from a cancelled invoice, the system will reject it as a duplicate.",
                  },
                  {
                    title: "Reset your serial number range if needed",
                    desc: "If you have exhausted your serial number range or the numbering has become corrupted, contact KRA eTIMS support to reset your serial number range. This is uncommon but happens.",
                  },
                  {
                    title: "Do not try to override or reuse serial numbers",
                    desc: "Each serial number can only be used once. Trying to force a duplicate serial number will not work. Always let eTIMS auto-assign the next number.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <CheckCircle size={15} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink text-[0.88rem]">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="customer-pin" aria-labelledby="pin-h">
            <h2 id="pin-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Customer KRA PIN Validation Failed
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                When you enter a customer's KRA PIN on an ITAX invoice, eTIMS validates it against KRA's database. If the PIN is invalid, inactive, or does not exist, the invoice will be rejected.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "PIN format may be incorrect",
                    desc: "KRA PINs follow the format A0123456789Z — 11 characters, all uppercase, no spaces. Check for common typos: O vs 0, I vs 1, S vs 5.",
                  },
                  {
                    title: "Customer's PIN may be deactivated or suspended",
                    desc: "If the customer's PIN has been deactivated by KRA (for non-compliance or other reasons), eTIMS will not accept it. Ask the customer to check their PIN status.",
                  },
                  {
                    title: "Customer gave you the wrong PIN",
                    desc: "Some customers may not know their own KRA PIN or may give you an old one. Ask them to verify their PIN on iTax or check their KRA PIN certificate.",
                  },
                  {
                    title: "Switch to DIGITAL if the customer does not need input VAT",
                    desc: "If the customer's PIN is not working and they do not urgently need to claim input VAT, select DIGITAL instead. This bypasses PIN validation entirely.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <Warning size={15} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink text-[0.88rem]">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="control-unit" aria-labelledby="control-h">
            <h2 id="control-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Control Unit Error / Connection Timeout
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                eTIMS relies on either a physical control unit (ESD — Electronic Signature Device) or the online portal to sign and transmit invoices. If the control unit or connection fails, invoices get rejected.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Check your internet connection",
                    desc: "The eTIMS online portal requires a stable internet connection. If your connection drops during invoice submission, the invoice may be rejected. Ensure you have at least 2 Mbps connectivity.",
                  },
                  {
                    title: "Restart the eTIMS control unit (ESD)",
                    desc: "If you use a physical ESD device, try restarting it. Unplug the device, wait 30 seconds, and plug it back in. Wait for the device to fully initialise before issuing a new invoice.",
                  },
                  {
                    title: "Update your eTIMS software or firmware",
                    desc: "Outdated eTIMS applications or ESD firmware can cause communication errors. Check for updates on the eTIMS portal or contact KRA eTIMS support for the latest version.",
                  },
                  {
                    title: "Contact KRA eTIMS support if hardware is faulty",
                    desc: "If your ESD device is physically damaged or malfunctioning, contact KRA at etims@kra.go.ke or call 020 4 999 999. You may need a replacement device.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <Info size={15} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink text-[0.88rem]">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border border-canvas-warm bg-[#fffbf0] dark:bg-[#2a1f00] dark:border-[#4a3800] rounded-lg p-4 flex items-start gap-3">
                <Warning size={17} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#7a5500] dark:text-[#ffcc44] text-[0.85rem] mb-1">
                    Keep a log of system failures
                  </p>
                  <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                    If your eTIMS system is repeatedly failing, take screenshots and note the date/time of each failure. KRA may issue penalties for non-compliance even during system downtime, but having evidence of the fault strengthens your case for a waiver.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="amount-mismatch" aria-labelledby="amount-h">
            <h2 id="amount-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Invoice Amount Mismatch
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                eTIMS validates that the invoice total matches the sum of line item amounts. If there is a discrepancy of even one cent, the invoice will be rejected.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Check line item totals add up to the invoice total",
                    desc: "The most basic check. Add up all line item amounts (quantity × unit price) and confirm they equal the invoice total. Rounding differences can cause rejection.",
                  },
                  {
                    title: "VAT calculation must be exact",
                    desc: "The VAT amount on the invoice must equal exactly 16% of the taxable value. eTIMS calculates this automatically, but if you override the VAT amount manually, it must match precisely.",
                  },
                  {
                    title: "Discounts must be applied correctly",
                    desc: "If you apply a discount, eTIMS expects it to be reflected in the line item amounts. You cannot show a gross total and a discount separately — the line items must reflect the discounted price.",
                  },
                  {
                    title: "Currency rounding issues",
                    desc: "eTIMS works in whole Kenya shillings (KES) or with two decimal places depending on your setup. Inconsistent decimal usage across line items can trigger rejection.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <CheckCircle size={15} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink text-[0.88rem]">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="item-description" aria-labelledby="item-h">
            <h2 id="item-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Item Description or HS Code Errors
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                eTIMS requires each line item to have a valid description and, in some cases, a correct HS (Harmonized System) code. Errors in these fields are a common but easily fixed rejection cause.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Item description is too vague",
                    desc: "Descriptions like 'goods', 'services', or 'miscellaneous' may be rejected. Use specific descriptions: 'Laptop computer Dell XPS 15', 'Office cleaning services March 2026'.",
                  },
                  {
                    title: "HS code is missing or incorrect",
                    desc: "Some VAT categories require HS codes. If your products are zero-rated or exempt, the correct HS code is essential. Find the right HS code on the KRA website or iTax portal.",
                  },
                  {
                    title: "Tax rate does not match the HS code",
                    desc: "If your HS code indicates a 0% rate but you enter 16% VAT (or vice versa), eTIMS will reject the invoice. Ensure the tax rate matches the HS code classification.",
                  },
                  {
                    title: "Unit of measure mismatch",
                    desc: "If you specify 'pieces' but the HS code expects 'kilograms' or 'litres', eTIMS may reject. Use the standard unit of measure for your product type.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <CheckCircle size={15} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink text-[0.88rem]">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="cancelling" aria-labelledby="cancel-h">
            <h2 id="cancel-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How to Cancel and Reissue a Rejected Invoice
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                You cannot edit a rejected eTIMS invoice. The only way to correct it is to cancel the rejected invoice and create a new one. Here is the exact process.
              </p>
              <div className="space-y-3">
                {[
                  {
                    step: "1",
                    title: "Cancel the rejected invoice in eTIMS",
                    desc: "Go to 'Issued Invoices', find the rejected invoice, and select 'Cancel'. Enter a cancellation reason (e.g. 'Wrong signature type, re-issuing').",
                  },
                  {
                    step: "2",
                    title: "Note the rejection reason",
                    desc: "Before creating the new invoice, make sure you understand why the original was rejected. Refer to the relevant section in this guide for the fix.",
                  },
                  {
                    step: "3",
                    title: "Create a new invoice with a fresh serial number",
                    desc: "The old serial number is now unusable. Create a new invoice and eTIMS will assign the next available serial number automatically.",
                  },
                  {
                    step: "4",
                    title: "Double-check all fields before submitting",
                    desc: "Verify: signature type (ITAX/DIGITAL), customer PIN (if ITAX), line item amounts, VAT calculation, item descriptions, and HS codes. One mistake means starting over.",
                  },
                  {
                    step: "5",
                    title: "Confirm the new invoice is accepted",
                    desc: "After submission, check that the invoice appears in 'Issued Invoices' with a 'Success' or 'Accepted' status. If it is rejected again, check the new rejection reason.",
                  },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex items-start gap-3">
                    <span className="font-mono text-[0.65rem] text-brand font-semibold shrink-0 mt-0.5 w-5 h-5 rounded-full border border-brand flex items-center justify-center">{step}</span>
                    <div>
                      <p className="font-semibold text-ink text-[0.88rem]">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="prevention" aria-labelledby="prevention-h">
            <h2 id="prevention-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Prevention: Stop Getting Rejected Invoices
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The best fix for a rejected invoice is to never get one in the first place. Here is a pre-flight checklist to run before every eTIMS invoice submission.
              </p>
              <ul className="space-y-3">
                {[
                  "Confirm the customer type: VAT-registered business (ITAX) or consumer (DIGITAL).",
                  "If ITAX, verify the customer's KRA PIN on iTax before entering it into eTIMS.",
                  "Ensure the serial number is the next available — let eTIMS auto-assign it.",
                  "Double-check line item totals add up to the invoice total exactly.",
                  "Verify VAT is calculated at exactly 16% (or the correct rate for zero-rated/exempt items).",
                  "Use specific item descriptions — no vague terms like 'goods' or 'services'.",
                  "Check that HS codes (if required) are correct and match the tax rate.",
                  "Ensure your eTIMS device or portal connection is working before you start.",
                  "Have a stable internet connection throughout the submission process.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.88rem] text-ink-soft">
                    <CheckCircle size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                If you are tired of dealing with eTIMS rejections, Smart VAT Kenya offers eTIMS management at <strong className="text-ink">KES 2,500/month</strong>. We handle your invoicing, ensure every invoice is accepted, and reconcile your eTIMS data with your monthly VAT return.
              </p>
              <div className="border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
                <p className="font-display text-[1.15rem] font-semibold text-ink mb-3">Tired of eTIMS Rejections?</p>
                <p className="text-[0.84rem] text-ink-soft leading-relaxed mb-4">
                  Stop wasting time on rejected invoices. Our experts handle your eTIMS invoicing and ensure every single invoice is accepted by KRA. From KES 2,500/month.
                </p>
                <a
                  href="https://wa.me/254721725958?text=Hi%2C%20I%20need%20help%20with%20eTIMS%20invoicing.%20Please%20help%20me%20sign%20up."
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
                >
                  Start eTIMS Management — KES 2,500/month
                  <ArrowRight size={14} weight="bold" aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>

          <FAQSection faqSchema={faqSchema} />
        </article>

        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="etims-invoice-rejected" />
        </div>

        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">Need eTIMS support?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[40ch] mx-auto leading-relaxed">
            We help businesses set up eTIMS, fix invoice rejections, and stay compliant. Message us on WhatsApp for fast support.
          </p>
          <a
            href="https://wa.me/254721725958?text=Hi%2C%20I%20need%20help%20with%20eTIMS"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            Get eTIMS Help on WhatsApp
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
