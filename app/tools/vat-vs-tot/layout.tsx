import type { Metadata } from "next"
import { constructMetadata } from "@/lib/seo"

export const metadata: Metadata = constructMetadata({
  title: "VAT vs Turnover Tax Calculator Kenya",
  description:
    "Compare VAT (16%) vs Turnover Tax (3%) for your Kenyan business. See which tax regime saves you more based on your turnover and margins.",
  path: "/tools/vat-vs-tot",
  keywords: ["vat vs turnover tax kenya", "vat vs tot calculator", "turnover tax kenya calculator", "vat registration threshold kenya"],
})

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        id="vat-vs-tot-software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "VAT vs Turnover Tax Calculator Kenya",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            description:
              "Compare VAT (16%) vs Turnover Tax (3%) regimes for Kenyan businesses. Decide which tax structure saves you more based on turnover and margins.",
            offers: { "@type": "Offer", price: "0", priceCurrency: "KES" },
            url: "https://smartvatkenya.co.ke/tools/vat-vs-tot",
          }),
        }}
      />
      {children}
    </>
  )
}
