import type { MetadataRoute } from "next"

const BASE = "https://smartvatkenya.co.ke"
// Date of last significant content update
const SITE_UPDATED = "2026-07-24T00:00:00.000Z"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: SITE_UPDATED,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/tools`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${BASE}/services`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/how-it-works`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/blog`,
      lastModified: SITE_UPDATED,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE}/blog/kenya-vat-registration-guide-2026`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ]
}
