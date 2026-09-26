interface FAQQuestion {
  "@type": "Question"
  name: string
  acceptedAnswer: {
    "@type": "Answer"
    text: string
  }
}

interface FAQPage {
  "@context": "https://schema.org"
  "@type": "FAQPage"
  mainEntity: FAQQuestion[]
}

interface FAQSectionProps {
  faqSchema: FAQPage
  id?: string
  headingId?: string
}

export function FAQSection({ faqSchema, id = "faq", headingId = "faq-h" }: FAQSectionProps) {
  return (
    <section id={id} aria-labelledby={headingId} className="mt-12">
      <h2 id={headingId} className="font-display text-[1.4rem] font-semibold text-ink mb-6 tracking-tight">
        Frequently Asked Questions
      </h2>
      <div className="divide-y divide-hairline dark:divide-gray-700">
        {faqSchema.mainEntity.map((q) => (
          <details key={q.name} className="group py-5">
            <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
              <span className="font-display text-[0.95rem] font-semibold text-ink leading-snug group-open:text-brand dark:group-open:text-red-400 transition-colors">
                {q.name}
              </span>
              <svg 
                className="w-4 h-4 shrink-0 mt-1 text-ink-muted dark:text-gray-400 group-open:rotate-180 transition-transform" 
                viewBox="0 0 16 16" 
                fill="none" 
                aria-hidden="true"
              >
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>
            <div className="mt-3 pb-1">
              <p className="text-[0.875rem] text-ink-soft dark:text-gray-300 leading-relaxed">
                {q.acceptedAnswer.text}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
