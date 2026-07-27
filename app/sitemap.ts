import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

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
  'vat-rates-kenya',
  'vat-registration-checklist',
  'vat-special-table-risks',
  'vat-vs-turnover-tax',
  'what-happens-if-i-don-t-register-for-vat',
  'kra-tax-amnesty-2026',
  'tax-compliance-certificate-kenya',
  'withholding-vat-kenya',
]

const services = [
  'vat-registration',
  'monthly-vat-filing',
  'etims-onboarding',
  'kra-penalty-waiver',
  'vat-registration-nairobi',
  'vat-registration-mombasa',
  'vat-registration-kisumu',
]

const tools = [
  'paye-calculator',
  'vat-vs-tot',
  'etims-checklist',
  'withholding-tax',
  'amnesty-calculator',
  'etims-penalty-calculator',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const entry = (
    path: string,
    priority: number,
    changeFrequency: 'weekly' | 'monthly',
  ) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  })

  return [
    entry('', 1, 'weekly'),
    entry('/tools', 0.9, 'weekly'),
    entry('/services', 0.9, 'monthly'),
    entry('/how-it-works', 0.8, 'monthly'),
    entry('/forms', 0.9, 'monthly'),
    entry('/resources', 0.9, 'weekly'),
    ...services.map((slug) => entry(`/services/${slug}`, 0.9, 'monthly')),
    ...tools.map((slug) => entry(`/tools/${slug}`, 0.9, 'monthly')),
    ...resources.map((slug) => entry(`/resources/${slug}`, 0.8, 'monthly')),
  ]
}
