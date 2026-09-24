import { LockKey, Receipt, Handshake, MapPin, PhoneCall, ShieldCheck } from "@phosphor-icons/react/dist/ssr"

const BADGES = [
  { icon: LockKey, label: "Your details handled securely" },
  { icon: Receipt, label: "Transparent flat-fee pricing" },
  { icon: ShieldCheck, label: "No iTax password required" },
  { icon: MapPin, label: "Nairobi CBD office" },
  { icon: PhoneCall, label: "Real human support" },
  { icon: Handshake, label: "Official M-PESA payment & receipt" },
]

// Trust row shown directly beside conversion points (per CRO best practice:
// trust signals work next to the CTA, not buried in the footer).
export function TrustBadges({ columns = 3 }: { columns?: 2 | 3 }) {
  return (
    <div className={`grid gap-2.5 ${columns === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"}`}>
      {BADGES.map((b) => (
        <p className="flex items-center gap-2 text-[0.75rem] text-ink-muted leading-snug">
          <b.icon size={14} weight="duotone" className="shrink-0 text-brand" aria-hidden="true" />
          {b.label}
        </p>
      ))}
    </div>
  )
}
