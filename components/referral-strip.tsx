"use client"

import { UsersThree, ArrowRight } from "@phosphor-icons/react/dist/ssr"
import { WA_PATHS } from "@/src/lib/whatsapp"

// Referral mechanism (manual tracking through WhatsApp, per strategy):
// shown after a successful interaction - when goodwill is highest.
export function ReferralStrip() {
  return (
    <a
      href={WA_PATHS.refer}
      target="_blank"
      rel="noopener noreferrer"
      data-track="wa-cta"
      data-cta-type="referral"
      data-service="referral"
      className="group flex flex-col sm:flex-row sm:items-center gap-3 border border-brand/25 bg-brand/[0.04] rounded-xl p-4 sm:p-5 hover:border-brand/60 transition-colors"
    >
      <UsersThree size={22} weight="duotone" className="text-brand shrink-0" aria-hidden="true" />
      <div className="flex-1">
        <p className="text-[0.85rem] font-semibold text-ink leading-snug">
          Know another business owner dealing with KRA?
        </p>
        <p className="text-[0.75rem] text-ink-muted mt-0.5 leading-relaxed">
          Introduce them on WhatsApp and earn <strong className="text-ink">KES 500 credit</strong> on your next service - no forms, just a message.
        </p>
      </div>
      <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-brand shrink-0 group-hover:underline underline-offset-2">
        Refer &amp; earn <ArrowRight size={12} weight="bold" aria-hidden="true" />
      </span>
    </a>
  )
}
