import type { Metadata } from "next"
import { constructMetadata } from "@/lib/seo"

export const metadata: Metadata = constructMetadata({
  title: "Withholding Tax (WHT) Calculator Kenya 2026",
  description:
    "Calculate the correct KRA withholding tax on payments to contractors, consultants, landlords, and suppliers in Kenya, and avoid penalties on wrong WHT deductions.",
  path: "/tools/withholding-tax",
  keywords: [
    "withholding tax calculator kenya",
    "wht rates kenya 2026",
    "kra withholding tax",
    "withholding vat kenya 2%",
    "wht on consultancy kenya",
  ],
})

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
