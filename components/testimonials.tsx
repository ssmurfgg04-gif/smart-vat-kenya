import { Star } from "@phosphor-icons/react/dist/ssr"

export interface TestimonialItem {
  name: string
  role: string
  text: string
  rating: number
}

// ONLY real, consented client quotes go here — each one must match a real
// engagement you can evidence (invoice/receipt) and the client must have
// agreed in writing to be quoted. Invented or AI-written testimonials are
// deceptive advertising (Kenya Consumer Protection Act; Google spam policy)
// and were the likely cause of the site being flagged. While this list is
// empty the section renders nothing, site-wide.
export const realTestimonials: TestimonialItem[] = []

const defaultHeading = "What clients say"

export function Testimonials({
  items = realTestimonials,
  heading = defaultHeading,
}: {
  items?: TestimonialItem[]
  heading?: string
}) {
  if (items.length === 0) return null
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
          {heading}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {items.map((t) => (
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
