import { Download, FileText, ArrowUpRight, ChatCircle, SealCheck } from "@phosphor-icons/react/dist/ssr"
import { KRA_FORMS } from "@/lib/forms"
import { FACTS } from "@/src/lib/vat-facts"

const WA_LINK =
  "https://wa.me/254717344440?text=Hi%2C%20I%20need%20help%20with%20the%20iTax%20portal%20or%20eTIMS."

export default function FormsPage() {
  const vatForms = KRA_FORMS.filter((f) => f.category === "VAT")
  const etimsForms = KRA_FORMS.filter((f) => f.category === "eTIMS")

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
      { "@type": "ListItem", position: 2, name: "Forms", item: "https://smartvatkenya.co.ke/forms" },
    ],
  }

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Official KRA VAT Guides & iTax Manuals",
    itemListElement: KRA_FORMS.map((f, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        name: f.title,
        description: f.description,
        encodingFormat: "application/pdf",
        url: `https://smartvatkenya.co.ke/forms/${f.file}`,
      },
    })),
  }

  return (
    <>
      <script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id="forms-itemlist-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      {/* Header */}
      <div className="bg-canvas-dark px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-canvas/60 mb-4 flex items-center gap-2">
            <SealCheck size={14} weight="fill" aria-hidden="true" />
            Sourced from kra.go.ke
          </p>
          <p className="font-mono text-[0.7rem] text-brand mb-6">
            Last verified {new Date(FACTS.lastVerified).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })} against KRA guidance
          </p>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            Official KRA VAT Guides &amp; iTax Manuals
          </h1>
          <p className="text-[0.95rem] text-canvas/70 max-w-[58ch] leading-relaxed">
            KRA no longer uses paper forms. Everything is done on the iTax portal. Download the
            official guides below to understand the process, or let our experts handle the portal
            for you.
          </p>
        </div>
      </div>

      {/* VAT guides */}
      <section className="bg-canvas px-6 lg:px-10 py-16" aria-labelledby="vat-heading">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-3">
            VAT
          </p>
          <h2 id="vat-heading" className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-2 text-balance">
            VAT Guides &amp; Manuals
          </h2>
          <p className="text-[0.9rem] text-ink-muted max-w-[55ch] mb-10">
            Registration, monthly returns, and refunds — explained by KRA.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 stagger">
            {vatForms.map((f) => (
              <FormCard key={f.slug} form={f} />
            ))}
          </div>
        </div>
      </section>

      {/* eTIMS guides */}
      <section className="bg-canvas-alt px-6 lg:px-10 py-16" aria-labelledby="etims-heading">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-3">
            eTIMS
          </p>
          <h2 id="etims-heading" className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-2 text-balance">
            eTIMS Guides &amp; Manuals
          </h2>
          <p className="text-[0.9rem] text-ink-muted max-w-[55ch] mb-10">
            Onboarding, invoicing, and device guides for every eTIMS solution.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 stagger">
            {etimsForms.map((f) => (
              <FormCard key={f.slug} form={f} />
            ))}
          </div>
        </div>
      </section>

      {/* Strong CTA */}
      <section className="bg-brand px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-canvas tracking-tight mb-2 text-balance">
              Tired of fighting the iTax portal?
            </h2>
            <p className="text-[0.95rem] text-canvas/85 max-w-[50ch] leading-relaxed">
              Let us handle your registration and filing for a flat KES 5,000. WhatsApp us.
            </p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill inline-flex items-center gap-2 bg-canvas text-brand text-sm font-semibold px-5 py-3 rounded-md transition-colors hover:bg-canvas/90 shrink-0"
          >
            <ChatCircle size={18} weight="fill" aria-hidden="true" />
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Note on VAT 1-5 */}
      <section className="bg-canvas px-6 lg:px-10 py-14">
        <div className="max-w-[1400px] mx-auto">
          <div className="rounded-lg border border-hairline bg-card p-6 max-w-[70ch]">
            <h2 className="font-display text-[1.05rem] font-semibold text-ink mb-2">
              A note on VAT 1 / VAT 2 / VAT 3 / VAT 4 / VAT 5
            </h2>
            <p className="text-[0.85rem] text-ink-muted leading-relaxed">
              KRA no longer publishes VAT 1 (registration), VAT 2 (deregistration), VAT 3 (monthly
              return), VAT 4 (amendment), or VAT 5 (refund claim) as printable PDF forms. All of
              these are now completed{" "}
              <strong className="text-ink">online through the iTax portal</strong> at{" "}
              <a
                href="https://itax.kra.go.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand font-medium hover:underline"
              >
                itax.kra.go.ke
              </a>
              . The guides above are the official KRA documents that walk you through each of those
              steps. Need someone to do it for you?{" "}
              <a href="https://wa.me/254717344440" target="_blank" rel="noopener noreferrer" className="text-brand font-medium hover:underline">
                Talk to us on WhatsApp
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

function FormCard({ form }: { form: (typeof KRA_FORMS)[number] }) {
  return (
    <article className="flex flex-col rounded-lg border border-hairline bg-card p-6 transition-shadow hover:shadow-md">
      <div className="flex items-start gap-3 mb-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-muted text-brand">
          <FileText size={20} weight="regular" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h3 className="font-display text-[1rem] font-semibold text-ink leading-snug">
            {form.title}
          </h3>
          <p className="mt-0.5 font-mono text-[0.62rem] uppercase tracking-wider text-ink-muted">
            {form.category} &middot; {form.kind} &middot; {form.pages} page{form.pages === 1 ? "" : "s"} &middot; PDF
          </p>
        </div>
      </div>

      <p className="text-[0.83rem] leading-relaxed text-ink-muted flex-1 mb-5">
        {form.description}
      </p>

      <div className="flex items-center justify-between gap-2 mt-auto">
        <a
          href={`https://www.${form.source}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-fill inline-flex items-center gap-1.5 bg-brand text-canvas text-[0.82rem] font-semibold px-3.5 py-2 rounded-md transition-colors hover:bg-brand-hover"
        >
          <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
          Open official PDF
        </a>
        <a
          href={`/forms/${form.file}`}
          download
          className="inline-flex items-center gap-1 text-[0.72rem] text-ink-muted hover:text-brand transition-colors"
        >
          Local copy
          <Download size={12} aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}
