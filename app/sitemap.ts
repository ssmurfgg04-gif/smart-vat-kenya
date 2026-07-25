import type { MetadataRoute } from "next"

const BASE = "https://smartvatkenya.co.ke"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: "2026-07-25", changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/tools`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/how-it-works`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/resources`, lastModified: "2026-07-25", changeFrequency: "weekly", priority: 0.9 },
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
  ]
}
