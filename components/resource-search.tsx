"use client"

import { useState, useMemo, useRef } from "react"
import { ArrowRight, Clock, MagnifyingGlass, XCircle } from "@phosphor-icons/react/dist/ssr"

interface Pillar {
  slug: string
  number: string
  label: string
  title: string
  bluf: string
  readTime: string
  tags: string[]
  featured?: boolean
}

export function ResourceSearch({ pillars }: { pillars: Pillar[] }) {
  const [query, setQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const filtered = useMemo(() => {
    if (!query.trim()) return pillars
    const q = query.toLowerCase().trim()
    return pillars.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.bluf.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.label.toLowerCase().includes(q),
    )
  }, [query, pillars])

  return (
    <div>
      <div id="search-guides" className="sticky top-[60px] z-30 -mx-1 px-1 py-3 mb-7 bg-canvas scroll-mt-[60px]">
        <div className="relative">
          <MagnifyingGlass
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted/70 pointer-events-none"
            aria-hidden="true"
          />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search all guides…"
            aria-label="Search resources"
            className="w-full pl-10 pr-10 py-3.5 text-[0.95rem] border border-hairline rounded-lg bg-canvas text-ink placeholder:text-ink-muted/40 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
            autoComplete="off"
          />
          {query && (
            <button
              onClick={() => {
                setQuery("")
                inputRef.current?.focus()
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted/50 hover:text-ink-muted transition-colors p-1"
              aria-label="Clear search"
            >
              <XCircle size={18} aria-hidden="true" />
            </button>
          )}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 border border-hairline rounded-lg">
          <p className="text-[1rem] font-semibold text-ink mb-1">No guides found</p>
          <p className="text-[0.88rem] text-ink-muted">
            Try searching for &ldquo;penalty&rdquo;, &ldquo;registration&rdquo;, or &ldquo;eTIMS&rdquo;
          </p>
          <button
            onClick={() => setQuery("")}
            className="mt-4 text-[0.85rem] text-brand font-semibold hover:text-brand-hover transition-colors"
          >
            Clear search
          </button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {filtered.map((pillar) => (
            <article
              key={pillar.slug}
              className="border border-hairline rounded-lg p-6 flex flex-col hover:border-ink/15 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-[0.6rem] text-brand tracking-widest uppercase">
                  Guide {pillar.number}
                </span>
                {pillar.tags.slice(0, 1).map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[0.58rem] uppercase tracking-widest bg-ink/5 text-ink-muted px-2 py-0.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-display text-[0.95rem] font-semibold text-ink leading-snug mb-3 flex-1 text-balance">
                <a
                  href={`/resources/${pillar.slug}/`}
                  className="hover:text-brand transition-colors"
                >
                  {pillar.title}
                </a>
              </h3>
              <p className="text-[0.8rem] text-ink-muted leading-relaxed mb-5 line-clamp-3">
                {pillar.bluf}
              </p>
              <div className="mt-auto flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[0.72rem] text-ink-muted">
                  <Clock size={11} aria-hidden="true" />
                  {pillar.readTime} read
                </span>
                <a
                  href={`/resources/${pillar.slug}/`}
                  className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-brand hover:text-brand-hover transition-colors"
                >
                  Read the guide
                  <ArrowRight size={12} weight="bold" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      )}

      {query && (
        <p className="text-[0.78rem] text-ink-muted mt-4 text-center">
          Showing {filtered.length} of {pillars.length} guides
        </p>
      )}
    </div>
  )
}
