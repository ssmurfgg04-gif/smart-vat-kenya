import { ArrowRight } from "@phosphor-icons/react/dist/ssr"

export type RelatedLink = {
  href: string
  label: string
  description?: string
}

export function RelatedLinks({
  heading = "Related pages",
  links,
  tone = "light",
}: {
  heading?: string
  links: RelatedLink[]
  tone?: "light" | "dark"
}) {
  const headingClass = tone === "dark" ? "text-canvas" : "text-ink"
  const labelClass = tone === "dark" ? "text-canvas" : "text-ink"
  const bodyClass = tone === "dark" ? "text-canvas/65" : "text-ink-muted"
  const borderClass = tone === "dark" ? "border-canvas/15" : "border-hairline"

  return (
    <nav aria-label={heading} className={`border-t ${borderClass} pt-8`}>
      <p className={`font-mono text-[0.68rem] uppercase tracking-[0.16em] ${bodyClass} mb-5`}>
        {heading}
      </p>
      <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <a
              href={link.href}
              className={`inline-flex items-center gap-1.5 text-[0.9rem] font-medium ${labelClass} hover:text-brand transition-colors`}
            >
              {link.label}
              <ArrowRight size={13} weight="bold" aria-hidden="true" />
            </a>
            {link.description ? (
              <p className={`text-[0.8rem] ${bodyClass} leading-relaxed mt-1`}>{link.description}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  )
}
