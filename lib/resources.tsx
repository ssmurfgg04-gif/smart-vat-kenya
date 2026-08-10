export interface Resource {
  slug: string
  title: string
}

const articles: Resource[] = [
  { slug: "how-to-register-for-vat-in-kenya", title: "How to Register for VAT in Kenya on iTax" },
  { slug: "cetis-kenya-2027", title: "CETIS Kenya 2027: Pre-Clearance e-Invoicing Explained" },
  { slug: "kra-penalty-for-late-vat-filing", title: "KRA Penalty for Late VAT Filing" },
  { slug: "how-to-calculate-vat-in-kenya", title: "How to Calculate 16% VAT in Kenya" },
  { slug: "how-to-file-vat-return-on-itax", title: "How to File Your VAT Return on KRA iTax" },
  { slug: "do-i-need-to-register-for-vat-kenya", title: "Do I Need to Register for VAT in Kenya?" },
  { slug: "itax-portal-not-working", title: "KRA iTax Portal Not Working? Common Errors and Fixes" },
  { slug: "etims-onboarding-guide", title: "eTIMS Kenya Onboarding Guide 2026" },
  { slug: "vat-vs-turnover-tax", title: "Turnover Tax vs VAT in Kenya" },
  { slug: "kra-vat-penalties-reference", title: "KRA VAT Penalties Kenya 2026: Complete Reference" },
  { slug: "vat-registration-checklist", title: "VAT Registration Kenya Checklist 2026" },
  { slug: "nil-returns-tax-amnesty", title: "Nil Returns Kenya 2026: File on iTax + Tax Amnesty" },
  { slug: "vat-for-startups-tech-businesses", title: "VAT for Startups and Tech Businesses in Kenya" },
  { slug: "vat-special-table-risks", title: "KRA VAT Special Table: Risks and How to Get Removed" },
  { slug: "vat-rates-kenya", title: "VAT Rates in Kenya 2026 — Standard, Zero-Rated & Exempt" },
  { slug: "etims-invoicing-guide", title: "eTIMS Compliant Invoice Guide Kenya 2026" },
  { slug: "vat-auto-populated-return", title: "KRA Auto-Populated VAT Return Guide" },
  { slug: "input-vat-deduction-guide", title: "Input VAT Deduction Kenya 2026" },
  { slug: "withholding-vat-kenya", title: "Withholding VAT in Kenya 2026" },
  { slug: "vat-digital-services-kenya", title: "VAT on Digital Services in Kenya 2026" },
  { slug: "vat-refund-guide-kenya", title: "KRA VAT Refund Guide Kenya 2026" },
  { slug: "finance-act-vat-changes-kenya", title: "Finance Act 2025 & 2026 VAT Changes Kenya" },
  { slug: "vat-fintech-digital-payments-kenya", title: "VAT on Fintech and Digital Payments in Kenya" },
  { slug: "vat-labour-outsourcing-kenya", title: "VAT on Labour Outsourcing and Staff Costs Kenya" },
  { slug: "kra-vat-filing-deadline-august-2026", title: "KRA VAT Filing Deadline August 2026" },
  { slug: "etims-penalty-50000-per-month-kenya", title: "eTIMS Penalty KES 50,000 Per Month" },
  { slug: "vat-for-landlords-kenya", title: "VAT for Landlords Kenya 2026" },
  { slug: "vat-for-restaurants-hospitality", title: "VAT for Restaurants & Hospitality Kenya" },
  { slug: "vat-for-importers-kenya", title: "VAT for Importers Kenya 2026" },
  { slug: "kra-vat-audit-process", title: "KRA VAT Audit Process Kenya 2026" },
  { slug: "how-to-apply-for-kra-pin", title: "How to Apply for a KRA PIN in Kenya" },
  { slug: "vat-deregistration-kenya", title: "VAT Deregistration Kenya 2026" },
  { slug: "vat-for-ngos-kenya", title: "VAT for NGOs in Kenya 2026" },
  { slug: "kra-status-code-500-itax-errors", title: "KRA Status Code 500 iTax Errors" },
  { slug: "small-taxpayer-regime-kenya", title: "Small Taxpayer Regime Kenya" },
  { slug: "etims-down-offline-invoicing", title: "KRA eTIMS Down? Offline Invoicing Guide" },
  { slug: "kra-tax-amnesty-2026", title: "KRA Tax Amnesty 2026 — Full Guide" },
  { slug: "etims-compliance-checklist", title: "eTIMS Compliance Checklist Kenya 2026" },
  { slug: "etims-invoice-rejected", title: "KRA eTIMS Invoice Rejected? Here's Why" },
  { slug: "vat-return-filing-checklist", title: "VAT Return Filing Checklist Kenya 2026" },
  { slug: "tax-compliance-certificate-kenya", title: "Tax Compliance Certificate (TCC) Kenya Guide" },
  { slug: "kra-pin-not-working", title: "KRA PIN Not Working? Fixes and Solutions" },
  { slug: "what-happens-if-i-don-t-register-for-vat", title: "What Happens If You Don't Register for VAT in Kenya?" },
  { slug: "vat-for-construction-real-estate-kenya", title: "VAT for Construction & Real Estate Kenya" },
  { slug: "faq", title: "KRA VAT FAQ — All Your Questions Answered" },
  { slug: "etims-mandate-guide", title: "eTIMS Mandate Kenya 2026 — Complete Compliance Guide" },
  { slug: "icms-export-guide", title: "iCMS Export Guide: VAT for Kenyan Exporters" },
  { slug: "vat-threshold-kenya", title: "VAT Threshold Kenya 2026: KES 5M or 8M?" },
  { slug: "vat-bad-debt-refund-kenya", title: "VAT Bad Debt Relief Kenya 2026" },
  { slug: "etims-account-locked", title: "eTIMS Account Locked? 7-Day Rule & How to Unlock" },
  { slug: "etims-pending-sync", title: "eTIMS Pending Sync — Why Invoices Don't Upload & Fixes" },
  { slug: "safaricom-not-working", title: "Safaricom Not Working? Status, M-Pesa Fixes & Workarounds" },
  { slug: "kplc-blackout-etims-compliance", title: "KPLC Blackout? Keep Your eTIMS & VAT Compliance Intact" },
  { slug: "mpesa-error-codes", title: "M-Pesa Error Codes 2026 — MR101, MR105 & Fixes" },
]

export function getPrevNext(slug: string) {
  const idx = articles.findIndex((a) => a.slug === slug)
  if (idx === -1) return { prev: null, next: null }
  return {
    prev: idx > 0 ? articles[idx - 1] : null,
    next: idx < articles.length - 1 ? articles[idx + 1] : null,
  }
}

export function ArticleGrid({ currentSlug, limit = 6 }: { currentSlug?: string; limit?: number }) {
  const idx = articles.findIndex((a) => a.slug === currentSlug)
  let related = articles
  if (idx !== -1) {
    const before = articles.slice(0, idx).reverse()
    const after = articles.slice(idx + 1)
    const interleaved: Resource[] = []
    const max = Math.max(before.length, after.length)
    for (let i = 0; i < max; i++) {
      if (after[i]) interleaved.push(after[i])
      if (before[i]) interleaved.push(before[i])
    }
    related = interleaved
  }
  const items = related.slice(0, limit)
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((a) => (
        <a
          key={a.slug}
          href={`/resources/${a.slug}/`}
          className="group border border-hairline rounded-lg p-4 hover:border-ink/15 hover:shadow-sm transition-all no-underline"
        >
          <p className="text-[0.85rem] font-medium text-ink group-hover:text-brand transition-colors leading-snug">
            {a.title}
          </p>
          <p className="text-[0.72rem] text-ink-muted/75 font-mono uppercase tracking-wider mt-2">Read Guide</p>
        </a>
      ))}
    </div>
  )
}
