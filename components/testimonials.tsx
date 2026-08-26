import { Star, ChatCircle } from "@phosphor-icons/react/dist/ssr"

const testimonials = [
  {
    name: "Sarah W.",
    role: "Retail Business, Nairobi",
    text: "I had accumulated late filing penalties over three months - nearly KES 30,000. Smart VAT Kenya handled the waiver application and KRA waived everything except a small admin fee. Worth every shilling.",
    rating: 5,
  },
  {
    name: "James M.",
    role: "Wholesale Distributor, Mombasa",
    text: "I registered for VAT late and got hit with the KES 100,000 non-registration penalty. I thought I was going to have to pay it all. Their team drafted a solid waiver letter and KRA reduced it significantly.",
    rating: 5,
  },
  {
    name: "Grace K.",
    role: "SME Owner, Nakuru",
    text: "The WhatsApp updates made the whole process stress-free. I didn't have to chase anyone - they kept me informed at every stage. My penalty was fully waived in 2 weeks.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="bg-canvas-alt px-6 lg:px-10 py-16" aria-labelledby="testimonials-heading">
      <div className="max-w-[1400px] mx-auto">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
          Client feedback
        </p>
        <h2
          id="testimonials-heading"
          className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-10 text-balance"
        >
          Real results from real penalty waiver clients.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <article key={t.name} className="bg-canvas border border-hairline rounded-lg p-6 flex flex-col">
              <div className="flex gap-0.5 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} weight="fill" className="text-brand" aria-hidden="true" />
                ))}
              </div>
              <p className="text-[0.85rem] text-ink-soft leading-relaxed flex-1 mb-5">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-hairline pt-4">
                <div className="w-9 h-9 rounded-full bg-canvas-dark flex items-center justify-center">
                  <span className="text-[0.7rem] font-semibold text-canvas">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="text-[0.82rem] font-medium text-ink">{t.name}</p>
                  <p className="text-[0.72rem] text-ink-muted">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
