import { ArrowLeft, ArrowUpRight, SealCheck } from "@phosphor-icons/react/dist/ssr"
import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const WA_BASE = "https://wa.me/254717344440"

const articleSchema = {
  "@context": "https://schema.org" as const as const as const as const as const,
  "@type": "Article",
  headline: "KRA Data Sources Kenya - Where to Get Official VAT & Revenue Data Free",
  description:
    "Where analysts and journalists source official KRA data: KRA Publications, iKESRA, GavaConnect APIs, openAFRICA, KNBS, National Treasury and more - all free, all direct download pages.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
}

const faqSchema = {
  "@context": "https://schema.org" as const as const as const as const as const,
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is KRA revenue data available to the public for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. KRA publishes Annual Revenue Performance reports and policy documents on its Publications page (kra.go.ke/publications), its research library is on iKESRA (ikesra.kra.go.ke), and openAFRICA hosts KRA revenue performance already converted to CSV. All are free and directly downloadable.",
      },
    },
    {
      "@type": "Question",
      name: "Does KRA provide an API for checking PINs or Tax Compliance Certificates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. GavaConnect is KRA's developer platform with 16+ APIs including the PIN checker, Tax Compliance Certificate checker, NIL return and e-Slip checker. Free developer accounts are available.",
      },
    },
    {
      "@type": "Question",
      name: "Why does Smart VAT Kenya link out instead of hosting the data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The official sources are free and authoritative. Linking to the actual download pages keeps our site lean and fast, and guarantees you always see the latest figures straight from KRA, KNBS and the National Treasury.",
      },
    },
  ],
}

const sources = [
  {
    name: "KRA Publications",
    url: "https://www.kra.go.ke/publications",
    what: "Annual Revenue Performance reports, the 9th Tax Summit report, Corporate Plans and policy documents - all PDF.",
    access: "Free, direct download",
  },
  {
    name: "iKESRA Repository",
    url: "https://ikesra.kra.go.ke",
    what: "KRA's own research library - legislation, journal articles, theses and research projects on taxation.",
    access: "Free",
  },
  {
    name: "GavaConnect APIs",
    url: "https://gavaconnect.kra.go.ke",
    what: "KRA's developer platform - PIN checker, Tax Compliance Certificate checker, NIL return, e-Slip checker (16+ APIs, 1,000+ developers).",
    access: "Free developer accounts",
  },
  {
    name: "openAFRICA",
    url: "https://open.africa",
    what: "KRA revenue performance already converted to CSV (Key Revenue Drivers, Tax Heads performance).",
    access: "Free",
  },
  {
    name: "Kenya Data Portal",
    url: "https://kenya.opendataforafrica.org",
    what: "Time series and tax indicators for Kenya in chart-ready formats.",
    access: "Free",
  },
  {
    name: "KNBS - Kenya National Bureau of Statistics",
    url: "https://www.knbs.or.ke",
    what: "The national statistics body - Economic Survey, Statistical Abstract and microdata via KeNADA/KenInfo.",
    access: "Free",
  },
  {
    name: "National Treasury",
    url: "https://www.treasury.go.ke",
    what: "Statistical Annex to the Budget Statement - revenue tables by tax head.",
    access: "Free",
  },
  {
    name: "sirkal.co.ke",
    url: "https://sirkal.co.ke",
    what: "Civic-tech project remixing Treasury, KRA and CBK data into charts with CSVs - a live example of what you can build.",
    access: "Open",
  },
]

export default function KraDataSourcesPage() {
  return (
    <>
      <script
        id="kra-data-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        id="kra-data-dataset-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org" as const as const as const as const as const,
            "@type": "Dataset",
            name: "Official KRA, KNBS & Treasury data sources for Kenya VAT and revenue analysis",
            description:
              "Free, authoritative download pages where Kenyan VAT and revenue data can be sourced: KRA Publications, iKESRA, GavaConnect, openAFRICA, KNBS, National Treasury.",
            url: "https://smartvatkenya.co.ke/resources/kra-data-sources/",
            distribution: sources.map((s) => ({
              "@type": "DataDownload",
              name: s.name,
              contentUrl: s.url,
            })),
            creator: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
          }),
        }}
      />

      <div className="bg-canvas-dark px-6 lg:px-10 py-14">
        <div className="max-w-3xl mx-auto">
          <a href="/resources/" className="inline-flex items-center gap-1.5 text-canvas/50 hover:text-canvas text-sm mb-6 transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> Back to Knowledge Base
          </a>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4">
            KRA Data Sources Kenya - Where Analysts Get Official VAT &amp; Revenue Data
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; Updated August 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14 space-y-10">
        <div className="border-l-[3px] border-brand pl-5">
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            You don't need a paid data vendor to quote KRA numbers. Everything analysts and
            journalists cite about Kenya's VAT and revenue performance is public &mdash; you just
            need to know which download page to open. This is the list professionals actually use,
            with links straight to the source.
          </p>
        </div>

        <h2 className="text-xl font-display font-semibold text-ink">Where professionals source KRA data</h2>
        <p className="text-ink-soft leading-relaxed">
          Each source below is free and links to the actual download page or repository &mdash; we
          don't host copies, because the official figures stay authoritative and current, and our
          site stays lean and fast.
        </p>

        <div className="border border-hairline rounded-lg overflow-hidden">
          <table className="w-full text-left" role="table">
            <thead>
              <tr className="border-b border-hairline bg-canvas-alt">
                <th className="px-5 py-3.5 text-[0.75rem] font-medium text-ink-muted w-[30%]">Source</th>
                <th className="px-5 py-3.5 text-[0.75rem] font-medium text-ink-muted">What it has</th>
                <th className="px-5 py-3.5 text-[0.75rem] font-medium text-ink-muted w-[20%]">Access</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hairline">
              {sources.map((s) => (
                <tr key={s.name}>
                  <td className="px-5 py-4 align-top">
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-start gap-1.5 text-[0.83rem] font-semibold text-brand hover:underline underline-offset-4"
                    >
                      {s.name}
                      <ArrowUpRight size={12} className="mt-0.5 shrink-0" aria-hidden="true" />
                    </a>
                  </td>
                  <td className="px-5 py-4 text-[0.83rem] text-ink-muted leading-relaxed">{s.what}</td>
                  <td className="px-5 py-4 text-[0.83rem] text-ink-soft whitespace-nowrap">{s.access}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-display font-semibold text-ink">How to use these sources for a citable data page</h2>
        <div className="space-y-4 text-ink-soft leading-relaxed">
          <p>
            <strong className="text-ink">Public layer (legal, free):</strong> pull VAT revenue numbers
            from KRA's Annual Revenue Performance reports, chart them, and add plain-language
            commentary. Cite KRA and the National Treasury on the page.
          </p>
          <p>
            <strong className="text-ink">Your unique layer:</strong> pair the public data with
            observations from your own practice &mdash; for example, &ldquo;of the businesses we
            registered, the most common eTIMS errors we fix are&hellip;&rdquo;. That micro-data is
            impossible for a journalist or competitor to reproduce, which is exactly why they link
            back to you as the source.
          </p>
          <p>
            <strong className="text-ink">Make it machine-citable:</strong> add schema.org{" "}
            <code className="bg-canvas-alt px-1.5 py-0.5 rounded text-[0.82em]">Dataset</code> and{" "}
            <code className="bg-canvas-alt px-1.5 py-0.5 rounded text-[0.82em]">Article</code> markup
            so AI systems (ChatGPT, Perplexity, AI Overviews) can parse and cite the page.
          </p>
        </div>

        <div className="bg-brand-muted rounded-lg p-8 text-center space-y-4">
          <h3 className="font-display text-xl font-semibold text-ink">Want the numbers explained for your business?</h3>
          <p className="text-ink-muted text-sm max-w-md mx-auto">
            We read KRA's reports every month so you don't have to. Ask us what the latest figures
            mean for your VAT position.
          </p>
          <a
            href={`${WA_BASE}?text=Hi%2C%20I%20want%20to%20understand%20what%20the%20latest%20KRA%20data%20means%20for%20my%20VAT.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold px-6 py-3.5 rounded-md hover:bg-brand-hover transition-colors"
          >
            Ask us on WhatsApp <ArrowUpRight size={14} weight="bold" />
          </a>
        </div>

        <div className="flex items-start gap-3 rounded-lg border border-hairline bg-card p-5">
          <SealCheck size={18} weight="duotone" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-[0.83rem] text-ink-muted leading-relaxed">
            All links open the official download pages directly. Figures published by KRA, KNBS and
            the National Treasury are public information and can be freely cited with attribution.
          </p>
        </div>

        <FAQSection faqSchema={faqSchema} />
        <ArticleGrid currentSlug="kra-data-sources" />
      </div>
    </>
  )
}
