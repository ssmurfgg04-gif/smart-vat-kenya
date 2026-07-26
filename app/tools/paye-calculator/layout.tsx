import type { Metadata } from "next"
import { constructMetadata } from "@/lib/seo"

export const metadata: Metadata = constructMetadata({
  title: "Kenya PAYE Calculator 2026 — Net Salary After Tax",
  description:
    "Free Kenya PAYE calculator for 2026. Work out monthly PAYE, NSSF, SHIF, Housing Levy, and net take-home pay using current KRA tax bands and reliefs.",
  path: "/tools/paye-calculator",
  keywords: [
    "paye calculator kenya 2026",
    "net salary calculator kenya",
    "kra paye bands 2026",
    "shif nssf housing levy calculator",
    "take home pay calculator kenya",
  ],
})

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
