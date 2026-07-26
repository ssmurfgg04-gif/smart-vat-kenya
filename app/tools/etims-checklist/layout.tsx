import type { Metadata } from "next"
import { constructMetadata } from "@/lib/seo"

export const metadata: Metadata = constructMetadata({
  title: "eTIMS Compliance Checklist Kenya 2026",
  description:
    "Free eTIMS compliance checklist for Kenyan businesses. Score your readiness for a KRA eTIMS audit and see exactly which invoicing requirements you are missing.",
  path: "/tools/etims-checklist",
  keywords: [
    "etims compliance checklist",
    "etims audit readiness kenya",
    "kra etims requirements",
    "etims compliance kenya 2026",
    "etims checklist pdf kenya",
  ],
})

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
