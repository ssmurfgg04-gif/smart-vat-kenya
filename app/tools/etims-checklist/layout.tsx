import type { Metadata } from "next"
import { constructMetadata } from "@/lib/seo"

export const metadata: Metadata = constructMetadata({
  title: "eTIMS Compliance Checklist Kenya 2026",
  description:
    "Free eTIMS compliance checklist for Kenyan businesses. Verify your KRA eTIMS onboarding status, invoice requirements, and penalty exposure.",
  path: "/tools/etims-checklist",
  keywords: ["etims compliance checklist kenya", "etims requirements kenya", "kra etims checklist 2026", "etims onboarding checklist"],
})

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        id="etims-checklist-software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "eTIMS Compliance Checklist Kenya 2026",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            description:
              "Free eTIMS compliance checklist for Kenyan businesses. Verify KRA eTIMS onboarding status, invoice compliance, and penalty exposure.",
            offers: { "@type": "Offer", price: "0", priceCurrency: "KES" },
            url: "https://smartvatkenya.co.ke/tools/etims-checklist",
          }),
        }}
      />
      {children}
    </>
  )
}
