import type { MetadataRoute } from "next"

const BASE = "https://smartvatkenya.co.ke"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: "2026-07-25", changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/tools`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/how-it-works`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/resources`, lastModified: "2026-07-25", changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/resources/kra-vat-filing-deadline-august-2026`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/resources/etims-penalty-50000-per-month-kenya`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.8 },
    // Pillar guides
    { url: `${BASE}/resources/how-to-register-for-vat-in-kenya`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.95 },
    { url: `${BASE}/resources/kra-penalty-for-late-vat-filing`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/resources/how-to-calculate-vat-in-kenya`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/resources/how-to-file-vat-return-on-itax`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/resources/do-i-need-to-register-for-vat-kenya`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.85 },
    // New resource guides
    { url: `${BASE}/resources/itax-portal-not-working`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/resources/etims-onboarding-guide`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/resources/vat-vs-turnover-tax`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/resources/kra-vat-penalties-reference`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/resources/vat-registration-checklist`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/resources/nil-returns-tax-amnesty`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.85 },
    // New guides July 2026 batch 2
    { url: `${BASE}/resources/vat-for-startups-tech-businesses`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/resources/vat-special-table-risks`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/resources/etims-invoicing-guide`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.85 },
    // Phase 2 — July 2026 gap-filler guides
    { url: `${BASE}/resources/vat-auto-populated-return`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/resources/input-vat-deduction-guide`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/resources/withholding-vat-kenya`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/resources/vat-digital-services-kenya`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/resources/vat-refund-guide-kenya`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/resources/finance-act-vat-changes-kenya`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.85 },
    // Phase 3 — July 2026 new content
    { url: `${BASE}/resources/faq`, lastModified: "2026-07-26", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/resources/vat-for-landlords-kenya`, lastModified: "2026-07-26", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/resources/vat-for-restaurants-hospitality`, lastModified: "2026-07-26", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/resources/vat-for-importers-kenya`, lastModified: "2026-07-26", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/resources/kra-vat-audit-process`, lastModified: "2026-07-26", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/resources/how-to-apply-for-kra-pin`, lastModified: "2026-07-26", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/resources/vat-deregistration-kenya`, lastModified: "2026-07-26", changeFrequency: "monthly", priority: 0.85 },
    // Service landing pages
    { url: `${BASE}/services/vat-registration`, lastModified: "2026-07-26", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/services/monthly-vat-filing`, lastModified: "2026-07-26", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/services/kra-penalty-waiver`, lastModified: "2026-07-26", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/services/etims-onboarding`, lastModified: "2026-07-26", changeFrequency: "monthly", priority: 0.85 },
    // Regional landing pages
    { url: `${BASE}/services/vat-registration-nairobi`, lastModified: "2026-07-26", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/services/vat-registration-mombasa`, lastModified: "2026-07-26", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/services/vat-registration-kisumu`, lastModified: "2026-07-26", changeFrequency: "monthly", priority: 0.85 },
  ]
}
