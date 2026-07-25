import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://smartvatkenya.co.ke'
  
  const resources = [
    'do-i-need-to-register-for-vat-kenya',
    'etims-invoicing-guide',
    'etims-onboarding-guide',
    'etims-penalty-50000-per-month-kenya',
    'faq',
    'finance-act-vat-changes-kenya',
    'how-to-apply-for-kra-pin',
    'how-to-calculate-vat-in-kenya',
    'how-to-file-vat-return-on-itax',
    'how-to-register-for-vat-in-kenya',
    'input-vat-deduction-guide',
    'itax-portal-not-working',
    'kra-penalty-for-late-vat-filing',
    'kra-vat-audit-process',
    'kra-vat-filing-deadline-august-2026',
    'kra-vat-penalties-reference',
    'nil-returns-tax-amnesty',
    'vat-auto-populated-return',
    'vat-deregistration-kenya',
    'vat-digital-services-kenya',
    'vat-fintech-digital-payments-kenya',
    'vat-for-importers-kenya',
    'vat-for-landlords-kenya',
    'vat-for-restaurants-hospitality',
    'vat-for-startups-tech-businesses',
    'vat-labour-outsourcing-kenya',
    'vat-refund-guide-kenya',
    'vat-registration-checklist',
    'vat-special-table-risks',
    'vat-vs-turnover-tax',
    'what-happens-if-i-don-t-register-for-vat',
    'withholding-vat-kenya'
  ]

  const resourceUrls = resources.map((resource) => ({
    url: `${baseUrl}/resources/${resource}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/forms`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    ...resourceUrls,
  ]
}
