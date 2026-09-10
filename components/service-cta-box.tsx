interface ServiceCtaBoxProps {
  /** Analytics context, e.g. "itax-not-working" */
  page: string
  /** Free self-service track (shown first — the honest default) */
  selfServiceTitle: string
  selfServiceCopy: string
  selfServiceHref: string
  selfServiceLabel: string
  /** Paid service track (priced, honest commercial offer) */
  serviceTitle: string
  serviceCopy: string
  servicePrice: string
  serviceHref: string
  serviceLabel: string
}

/**
 * Flywheel CTA box: converts informational traffic into service inquiries
 * WITHOUT over-promising free human diagnosis.
 * Track 1 routes readers to a free self-service tool or guide section.
 * Track 2 offers the priced service (registration / filing / per-incident)
 * so the commercial promise matches what the business actually delivers.
 */
export function ServiceCtaBox({
  page,
  selfServiceTitle,
  selfServiceCopy,
  selfServiceHref,
  selfServiceLabel,
  serviceTitle,
  serviceCopy,
  servicePrice,
  serviceHref,
  serviceLabel,
}: ServiceCtaBoxProps) {
  return (
    <aside
      aria-label="Two ways to sort this out"
      className="mb-12 border border-brand/20 bg-brand-muted rounded-xl overflow-hidden"
    >
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-brand/10">
        {/* Track 1 - free self-service */}
        <div className="p-5 sm:p-6">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Free - do it yourself</p>
          <p className="font-display text-[0.95rem] font-semibold text-ink mb-1.5">{selfServiceTitle}</p>
          <p className="text-[0.83rem] text-ink-muted leading-relaxed mb-4">{selfServiceCopy}</p>
          <a
            href={selfServiceHref}
            data-track="service-cta"
            data-cta-type={`self-service-${page}`}
            className="inline-flex items-center gap-2 min-h-[44px] text-[0.85rem] font-semibold text-brand underline underline-offset-2 hover:text-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand rounded-sm"
          >
            {selfServiceLabel}
            <svg viewBox="0 0 12 12" className="w-3 h-3 fill-current shrink-0" aria-hidden="true"><path d="M6 0L4.59 1.41 9.17 6l-4.58 4.59L6 12l6-6z"/></svg>
          </a>
        </div>
        {/* Track 2 - priced service */}
        <div className="p-5 sm:p-6">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Have us handle it</p>
          <p className="font-display text-[0.95rem] font-semibold text-ink mb-1.5">{serviceTitle}</p>
          <p className="text-[0.83rem] text-ink-muted leading-relaxed mb-4">
            {serviceCopy}{" "}
            <strong className="text-ink font-semibold">{servicePrice}</strong>.
          </p>
          <a
            href={serviceHref}
            target="_blank"
            rel="noopener noreferrer"
            data-track="whatsapp-cta"
            data-cta-type={`service-${page}`}
            className="inline-flex items-center gap-2 min-h-[44px] bg-brand hover:bg-brand-hover text-canvas font-semibold text-[0.85rem] px-4 py-2.5 rounded-md transition-colors active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            {serviceLabel}
            <svg viewBox="0 0 12 12" className="w-3 h-3 fill-current shrink-0" aria-hidden="true"><path d="M6 0L4.59 1.41 9.17 6l-4.58 4.59L6 12l6-6z"/></svg>
          </a>
        </div>
      </div>
    </aside>
  )
}
