import type { ReactNode } from "react"

export function Accordion({ items, title }: { items: { summary: ReactNode; content: ReactNode }[]; title?: string }) {
  return (
    <div className="border border-hairline rounded-lg overflow-hidden">
      {title && (
        <div className="bg-canvas-alt px-5 py-3 border-b border-hairline">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-muted">{title}</p>
        </div>
      )}
      {items.map((item, i) => (
        <details key={i} className="group border-b border-hairline last:border-b-0">
          <summary className="list-none flex items-start gap-3 p-4 cursor-pointer hover:bg-canvas-alt/50 transition-colors">
            <span className="text-brand shrink-0 mt-0.5 transition-transform duration-200 group-open:rotate-90">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="text-sm font-medium text-ink">{item.summary}</span>
          </summary>
          <div className="px-4 pb-4 pl-10">
            {item.content}
          </div>
        </details>
      ))}
    </div>
  )
}
