// WhatsApp contact helpers — single source of truth for every WhatsApp link.
//
// WHY LINKS ARE INTERNAL (/wa/...) AND NOT DIRECT wa.me:
// Each CTA points at a small temporary 302 redirect (defined in netlify.toml
// and public/_redirects) that forwards to wa.me. The redirect hit
// is logged server-side by the host, which gives the owner a private,
// invisible way to count WhatsApp clicks per CTA (see
// docs/whatsapp-click-monitoring.md). Visitors only see WhatsApp opening.
import { FACTS } from "@/src/lib/vat-facts"

export const WA_NUMBER = FACTS.contact.whatsapp // 254705467108
export const WA_DISPLAY = FACTS.contact.whatsappDisplay // 0705 467 108

// Direct link — for client-built messages (e.g. sharing a calculated result).
// Counting for these is covered by GA4/Clarity events, not server redirects.
export function waDirect(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}

// Share-to-anyone link (the viral loop: "I calculated this with SmartVAT").
export function waShare(message: string): string {
  return `https://wa.me/?text=${encodeURIComponent(message)}`
}

// Internal counted CTAs. Each path maps to a fixed pre-filled message in the
// redirect configs, and doubles as the private per-CTA counter bucket.
export const WA_PATHS = {
  quote: "/wa/", // floating pill, mobile bar, footer, generic quote intent
  filing: "/wa/filing/", // "help me file my VAT return"
  penalty: "/wa/penalty/", // "help with penalties / amnesty"
  doctor: "/wa/doctor/", // KRA Doctor handoff
  refer: "/wa/refer/", // referral introduction
} as const

export type WaPath = (typeof WA_PATHS)[keyof typeof WA_PATHS]
