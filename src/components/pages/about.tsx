import { ArrowRight, ChatCircle, ShieldCheck, MapPin, LockKey, CheckCircle, Clock, Star } from "@phosphor-icons/react/dist/ssr"
import { RelatedLinks } from "@/components/related-links"

const WA_BASE = "https://wa.me/254721725958"

const team = [
  {
    initials: "JK",
    name: "Jack Kimani",
    role: "Founder & Principal Agent",
    credential: "Registered KRA iTax agent. 200+ successful VAT registrations and 40+ months of on-time filings.",
    bio: "Leads the team of KRA-registered agents, overseeing VAT registration and monthly filing for 200+ SMEs.",
    color: "#c8372d",
  },
  {
    initials: "CK",
    name: "Christopher Maina",
    role: "Client Success Lead",
    credential: "Your first point of contact on WhatsApp. Guides every client from first message to delivered PIN.",
    bio: "Works directly with clients on WhatsApp, ensuring smooth onboarding and resolution of any filing issues.",
    color: "#e07a2f",
  },
  {
    initials: "SH",
    name: "Salma Hussein",
    role: "Tax Compliance & eTIMS Specialist",
    credential: "Handles eTIMS onboarding, Special Table checks, and penalty waiver applications on iTax.",
    bio: "Specializes in eTIMS compliance, Special Table risk checks, and navigating KRA penalty waivers for clients.",
    color: "#1f6f5c",
  },
]

const credentials = [
  "Registered KRA iTax agents — we file through the official KRA agent portal",
  "Named individuals on every account — you know exactly who handles your filings",
  "Physical office at Pioneer House, Moi Avenue, Nairobi CBD",
  "M-PESA receipt for every payment — nothing off the books",
  "Privacy-first: your KRA PIN is used for your filings only",
]

const values = [
  { title: "Your time is money", body: "We do the portal work so you run your business. One WhatsApp message replaces three weeks of iTax." },
  { title: "Never the 20th", body: "We file on the 17th as a matter of process — not a service you have to chase. The deadline is never you or near." },
  { title: "Total-cost honesty", body: "Published flat fees. No discovery call, no negotiation, no hidden costs. KES 5,000 registration. KES 3,500 monthly filing." },
]

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-canvas-dark px-6 lg:px-10 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-canvas/60 mb-6">
            About Smart VAT Kenya
          </p>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-semibold leading-tight tracking-tight text-canvas mb-6 text-balance">
            The first client who paid us wasn't registering for VAT. She was registering to stop lying awake at 3am.
          </h1>
          <p className="text-[1rem] text-canvas/75 leading-relaxed max-w-[54ch] text-pretty">
            She had a letter from KRA in her bag and zero idea what a 'Special Table' was. 
            Her accountant was unreachable. That night on Moi Avenue, Smart VAT Kenya was born.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16">

        {/* Founder Story Arc */}
        <section className="mb-20">
          <div className="border-l-[3px] border-brand pl-6 max-w-3xl mb-12">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-brand mb-2">Why Smart VAT Exists</p>
            <h2 className="font-display text-[1.8rem] font-semibold text-ink mb-4">
              We watched business owners close their shops at 4pm on the 20th just to queue at Times Tower.
            </h2>
            <div className="space-y-4 text-[0.95rem] text-ink-soft leading-relaxed">
              <p>
                In Nairobi, the 20th of every month has a specific sound: the frantic clicking of refresh buttons on the iTax login page, the hum of cyber cafe generators, and the quiet panic of entrepreneurs realizing their accountant has ghosted them.
              </p>
              <p>
                We spent years watching smart, hardworking business owners treat KRA like an unavoidable tax on their sanity. We saw KES 10,000 penalties levied automatically because the portal froze at 11:47pm. We saw suppliers lose input VAT because their vendors got swept onto unverified lists.
              </p>
              <p>
                So we built the antidote: an agency that operates with software precision, transparent flat pricing, and zero portal friction. You message us on WhatsApp. We handle the rest.
              </p>
            </div>
          </div>
        </section>

        {/* Who we are */}
        <section className="mb-20">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">Who we are</p>
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-6">
            Real people, not a ticketing system
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {team.map((member) => (
              <article key={member.initials} className="border border-hairline rounded-lg p-4 lg:p-7 bg-canvas">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-display font-semibold text-canvas mb-5"
                  style={{ backgroundColor: member.color }}
                  aria-hidden="true"
                >
                  {member.initials}
                </div>
                <h3 className="font-display text-[1.05rem] font-semibold text-ink">{member.name}</h3>
                <p className="text-[0.78rem] font-medium text-brand mb-3">{member.role}</p>
                <p className="text-[0.85rem] text-ink-muted leading-relaxed">{member.bio}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Credentials & trust */}
        <section className="mb-20">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">Credentials & trust</p>
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-8">
            The trust layer behind what we do
          </h2>
          <div className="grid lg:grid-cols-[1fr_360px] gap-8">
            <ul className="space-y-4" role="list">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <CheckCircle size={18} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-[0.95rem] text-ink-soft leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
            <aside className="bg-canvas-alt border border-hairline rounded-lg p-6 self-start">
              <div className="flex items-center gap-2.5 mb-4">
                <ShieldCheck size={20} weight="fill" className="text-brand" aria-hidden="true" />
                <p className="font-mono text-[0.62rem] uppercase tracking-widest text-ink-muted">The 17th Guarantee</p>
              </div>
              <p className="text-[0.88rem] text-ink-soft leading-relaxed mb-4">
                Every monthly return is filed on the 17th — three days before KRA's deadline — so a portal
                outage or payment delay never costs you a KES 10,000 late penalty.
              </p>
              <a
                href={`${WA_BASE}?text=Hi%2C%20I%20want%20to%20talk%20to%20a%20real%20person%20about%20VAT`}
                target="_blank" rel="noopener noreferrer"
                className="btn-fill inline-flex items-center gap-2 bg-brand text-canvas font-semibold px-5 py-3 rounded-md text-sm hover:bg-brand-hover transition-colors"
              >
                <ChatCircle size={16} aria-hidden="true" /> Message a real person
              </a>
            </aside>
          </div>
        </section>

        {/* How we work */}
        <section className="mb-16">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">How we work</p>
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-8">
            Three principles guide everything
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {values.map((v) => (
              <article key={v.title} className="border border-hairline rounded-lg p-7 bg-canvas">
                <h3 className="font-display text-[1rem] font-semibold text-ink mb-2">{v.title}</h3>
                <p className="text-[0.85rem] text-ink-muted leading-relaxed">{v.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Privacy promise */}
        <section className="bg-canvas-dark rounded-xl p-8 mb-16 text-canvas">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <LockKey size={22} weight="duotone" className="text-brand" aria-hidden="true" />
              <h2 className="font-display text-[1.4rem] font-semibold text-canvas tracking-tight">Your PIN is safe with us</h2>
            </div>
            <p className="text-[0.9rem] text-canvas/75 leading-relaxed">
              We ask for your KRA PIN and ID only to complete filings that KRA itself requires. Your PIN is
              used for your filings alone — it is never shared, never stored beyond what's needed, and never
              used for anything else. Every payment you make is backed by an official M-PESA receipt.
            </p>
          </div>
        </section>

        {/* Office & contact */}
        <section className="mb-16">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">Find us</p>
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-8">
            Nairobi office, Kenya-wide reach
          </h2>
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-relaxed">
              <p className="flex items-start gap-3">
                <MapPin size={18} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  Pioneer House, Moi Avenue, Nairobi CBD<br />
                  <a href="https://maps.google.com/?q=Pioneer+House+Moi+Avenue+Nairobi" target="_blank" rel="noopener noreferrer" className="text-brand underline underline-offset-2 hover:text-brand-hover">View on Google Maps</a>
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Clock size={18} weight="fill" className="text-brand shrink-0" aria-hidden="true" />
                Mon‑Fri, 8:00‑18:00 EAT
              </p>
              <p className="flex items-center gap-3">
                <Star size={18} weight="fill" className="text-brand shrink-0" aria-hidden="true" />
                Serving the whole of Kenya via WhatsApp + M-PESA
              </p>
            </div>
            <div className="sm:ml-auto">
              <a
                href={`${WA_BASE}?text=Hi%2C%20I%20message%20from%20your%20About%20page`}
                target="_blank" rel="noopener noreferrer"
                className="btn-fill inline-flex items-center gap-2 bg-brand text-white font-semibold px-6 py-3 rounded-md text-sm hover:bg-brand-hover transition-colors"
              >
                Get Started
                <ArrowRight size={15} weight="bold" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* Related */}
        <RelatedLinks
          heading="Explore"
          links={[
            { href: "/how-it-works/", label: "How it works", description: "The exact process from message to delivered VAT PIN." },
            { href: "/services/", label: "Services & pricing", description: "Registration, monthly filing, eTIMS onboarding, penalty waivers." },
            { href: "/resources/", label: "Knowledge base", description: "Free guides on KRA VAT, eTIMS, penalties, and refunds." },
          ]}
        />
      </div>
    </>
  )
}