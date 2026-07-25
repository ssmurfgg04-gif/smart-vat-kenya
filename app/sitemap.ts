import type { MetadataRoute } from "next"

const BASE = "https://smartvatkenya.co.ke"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: "2026-07-25", changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/tools`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/how-it-works`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/resources`, lastModified: "2026-07-25", changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/resources/how-to-register-for-vat-in-kenya`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.95 },
    { url: `${BASE}/resources/kra-penalty-for-late-vat-filing`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/resources/how-to-calculate-vat-in-kenya`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/resources/how-to-file-vat-return-on-itax`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/resources/do-i-need-to-register-for-vat-kenya`, lastModified: "2026-07-25", changeFrequency: "monthly", priority: 0.85 },
  ]
}
