import { ArrowRight, CheckCircle, Handshake, ShieldCheck, CurrencyDollar } from "@phosphor-icons/react/dist/ssr"

const WA_BASE = "https://wa.me/254721725958"

export default function PartnersPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="font-mono text-[0.65rem] uppercase tracking-widest bg-brand/10 text-brand px-3 py-1 rounded-sm mb-4 inline-block">
          Wholesale Channel
        </span>
        <h1 className="font-display text-3xl lg:text-4xl font-semibold text-ink tracking-tight mb-4">
          The Smart VAT Kenya Partner Program
        </h1>
        <p className="text-ink-muted text-lg leading-relaxed">
          You're an accountant or cyber cafe owner with dozens of clients. KRA now requires eTIMS for all of them, and the iTax portal crashes on deadline night. You don't want to become iTax support staff. We already are.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="border border-hairline rounded-xl p-8 bg-canvas-alt">
          <h2 className="font-display text-xl font-semibold text-ink mb-4 flex items-center gap-2">
            <CurrencyDollar size={24} weight="duotone" className="text-brand" />
            What You Get
          </h2>
          <ul className="space-y-3 text-ink-soft">
            <li className="flex items-start gap-2.5">
              <CheckCircle size={18} weight="fill" className="text-brand shrink-0 mt-0.5" />
              <span><strong>Dedicated partner WhatsApp line</strong> for instant ticket escalation.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle size={18} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
              <span><strong>KES 1,000 referral fee</strong> per registration + <strong>10% lifetime recurring</strong> on monthly filing revenue.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle size={18} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
              <span><strong>Weekly M-PESA payouts</strong> every Friday.</span>
            </li>
          </ul>
        </div>

        <div className="border border-hairline rounded-xl p-8 bg-canvas-alt">
          <h2 className="font-display text-xl font-semibold text-ink mb-4 flex items-center gap-2">
            <ShieldCheck size={24} weight="duotone" className="text-brand" aria-hidden="true" />
            Why It Works
          </h2>
          <ul className="space-y-3 text-ink-soft">
            <li className="flex items-start gap-2.5">
              <CheckCircle size={18} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
              <span><strong>Your client stays yours.</strong> We act as your invisible back office.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle size={18} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
              <span><strong>No exclusivity, no minimums.</strong> Zero risk to your existing business.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle size={18} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
              <span><strong>Never get the 3am call</strong> about portal errors again.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-canvas-dark rounded-2xl p-10 text-center text-canvas">
        <h2 className="font-display text-2xl font-semibold mb-3">Join 30+ Accountants & Cyber Cafes</h2>
        <p className="text-canvas/70 max-w-lg mx-auto mb-8 text-sm leading-relaxed">
          Send us a message on WhatsApp with your business name to get your partner onboarding kit and referral code today.
        </p>
        <a href={`${WA_BASE}?text=Hi%2C%20I%20want%20to%20join%20the%20Smart%20VAT%20Partner%20Program`} target="_blank" rel="noopener noreferrer" className="btn-fill inline-flex items-center gap-2 bg-brand text-canvas font-semibold px-8 py-4 rounded-md hover:bg-brand-hover transition-colors">
          Become a Partner on WhatsApp <ArrowRight size={16} weight="bold" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}