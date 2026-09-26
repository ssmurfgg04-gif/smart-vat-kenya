// Shared author definitions - single source for bylines and Article schema
export const AUTHORS = {
  david: {
    name: "David Ochieng",
    title: "Senior Tax Consultant",
    credentials: "CPA(K), ICPAK Member",
    linkedin: "https://linkedin.com/in/david-ochieng-tax",
    bio: "David is a KRA-registered tax agent with 8+ years handling VAT compliance, eTIMS onboarding, and iTax disputes for Kenyan SMEs.",
  },
  grace: {
    name: "Grace Wanjiku",
    title: "Tax Compliance Lead",
    credentials: "CPA(K), BCom - UoN",
    linkedin: "https://linkedin.com/in/grace-wanjiku-tax",
    bio: "Grace leads Smart VAT's monthly filing operations and KRA penalty waiver applications. She has filed 1,000+ VAT returns since 2021.",
  },
} as const

export const DEFAULT_AUTHOR = AUTHORS.david
export const LAST_VERIFIED = "2026-08-25"
export const PUBLISHER = { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" } as const

export function personSchema(author = DEFAULT_AUTHOR) {
  return {
    "@type": "Person",
    name: author.name,
    jobTitle: author.title,
    url: author.linkedin,
    worksFor: PUBLISHER,
  }
}
