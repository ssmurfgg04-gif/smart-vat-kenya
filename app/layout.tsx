import type { Metadata, Viewport } from "next"
import { DM_Sans, Outfit } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import dynamic from "next/dynamic"

const WhatsAppButton = dynamic(() => import("@/components/whatsapp-button").then(m => m.WhatsAppButton))
const BackToTop = dynamic(() => import("@/components/back-to-top").then(m => m.BackToTop))

// Dropped JetBrains Mono — only used for tiny labels; now using CSS font-stack instead
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600"],
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: {
    default: "VAT Registration Services Kenya | KRA VAT Calculator | Smart VAT Kenya",
    template: "%s | Smart VAT Kenya",
  },
  description:
    "Professional VAT registration services in Kenya — KES 5,000 flat fee, done in 1–3 working days. Monthly iTax VAT filing from KES 3,500/month. KRA-compliant, eTIMS-ready, M-PESA accepted. Free KRA VAT calculator for Kenya 16% standard rate 2026.",
  keywords: [
    "vat registration kenya",
    "kra vat registration",
    "itax vat filing",
    "kra vat calculator",
    "etims kenya",
    "monthly vat filing kenya",
  ],
  authors: [{ name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" }],
  creator: "Smart VAT Kenya",
  publisher: "Smart VAT Kenya",
  metadataBase: new URL("https://smartvatkenya.co.ke"),
  openGraph: {
    title: "Smart VAT Kenya | Professional VAT Registration & Filing Services",
    description:
      "VAT registration services in Kenya from KES 5,000. Monthly filing from KES 3,500/month. eTIMS-ready. No hidden costs. M-PESA accepted. WhatsApp support.",
    url: "https://smartvatkenya.co.ke",
    siteName: "Smart VAT Kenya",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "https://smartvatkenya.co.ke/og-image.png",
        width: 1200,
        height: 630,
        alt: "Smart VAT Kenya — Professional VAT Registration Services",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart VAT Kenya | VAT Registration Services & KRA VAT Calculator",
    description:
      "Flat-fee VAT registration (KES 5,000) and monthly filing (KES 3,500) for Kenyan SMEs. eTIMS-ready. Free 16% VAT calculator.",
    images: ["https://smartvatkenya.co.ke/og-image.png"],
  },
  alternates: {
    canonical: "https://smartvatkenya.co.ke",
    languages: {
      "en-KE": "https://smartvatkenya.co.ke",
      "x-default": "https://smartvatkenya.co.ke",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "business",
}

export const viewport: Viewport = {
  themeColor: "#faf8f3",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://smartvatkenya.co.ke/#business",
      name: "Smart VAT Kenya",
      description:
        "Professional VAT registration and monthly filing services for Kenyan SMEs. Flat-fee pricing, eTIMS-compliant, M-PESA accepted, WhatsApp support.",
      telephone: "+254721725958",
      email: "hello@smartvatkenya.co.ke",
      priceRange: "KES3500-KES5000",
      image: "https://smartvatkenya.co.ke/icon.svg",
      logo: {
        "@type": "ImageObject",
        url: "https://smartvatkenya.co.ke/icon.svg",
        width: 256,
        height: 256,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Pioneer House, Moi Avenue",
        addressLocality: "Nairobi",
        addressRegion: "Nairobi County",
        postalCode: "00100",
        addressCountry: "KE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -1.2921,
        longitude: 36.8219,
      },
      url: "https://smartvatkenya.co.ke",
      sameAs: [
        "https://wa.me/254721725958",
        "https://www.google.com/search?q=Smart+VAT+Kenya+Nairobi",
      ],
      hasMap: "https://maps.google.com/?q=Pioneer+House+Moi+Avenue+Nairobi",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      areaServed: [
        { "@type": "City", name: "Nairobi" },
        { "@type": "City", name: "Mombasa" },
        { "@type": "City", name: "Kisumu" },
        { "@type": "State", name: "Kenya" },
      ],
      knowsAbout: {
        "@type": "Thing",
        name: "Kenya VAT Registration and Compliance",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+254721725958",
        contactType: "customer service",
        availableLanguage: ["English", "Swahili"],
        areaServed: "KE",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "58",
        bestRating: "5",
        worstRating: "1",
      },
      paymentAccepted: "M-PESA, Cash",
      currenciesAccepted: "KES",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "VAT Services Kenya",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "VAT Registration Kenya",
            },
            price: "5000",
            priceCurrency: "KES",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Monthly VAT Filing Kenya",
            },
            price: "3500",
            priceCurrency: "KES",
            availability: "https://schema.org/InStock",
          },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://smartvatkenya.co.ke/tools#app",
      name: "Free Kenya VAT Calculator 2026",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
      description:
        "Calculate Kenya VAT at 16% standard rate, zero-rated (0%) or exempt. Includes KRA late-filing penalty estimator and 'Am I Required?' VAT registration check.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "KES" },
      url: "https://smartvatkenya.co.ke/tools",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        ratingCount: "112",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://smartvatkenya.co.ke/#website",
      url: "https://smartvatkenya.co.ke",
      name: "Smart VAT Kenya",
      publisher: { "@id": "https://smartvatkenya.co.ke/#business" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://smartvatkenya.co.ke/resources?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Product",
      "@id": "https://smartvatkenya.co.ke/services#vat-filing-product",
      name: "Monthly VAT Filing Service",
      description:
        "Monthly iTax VAT return filing before the 20th KRA deadline. Filed on the 17th. Includes WhatsApp reminders and M-PESA payment guidance.",
      brand: { "@type": "Brand", name: "Smart VAT Kenya" },
      offers: {
        "@type": "Offer",
        price: "3500",
        priceCurrency: "KES",
        availability: "https://schema.org/InStock",
        url: "https://smartvatkenya.co.ke/services",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "58",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "Service",
      "@id": "https://smartvatkenya.co.ke/services#registration",
      name: "VAT Registration Kenya",
      serviceType: "VAT Registration",
      description:
        "Complete VAT registration via KRA iTax portal. Includes profile update, VAT Form 1, PIN generation, eTIMS onboarding guidance, and taxpayer education.",
      provider: { "@id": "https://smartvatkenya.co.ke/#business" },
      areaServed: { "@type": "Country", name: "Kenya" },
      offers: {
        "@type": "Offer",
        price: "5000",
        priceCurrency: "KES",
        availability: "https://schema.org/InStock",
        validFrom: "2026-01-01",
      },
    },
    {
      "@type": "Service",
      "@id": "https://smartvatkenya.co.ke/services#filing",
      name: "Monthly VAT Filing Kenya",
      serviceType: "VAT Filing",
      description:
        "Monthly iTax VAT return filing before the 20th KRA deadline. We file on the 17th. Avoids KES 10,000 late-filing penalty.",
      provider: { "@id": "https://smartvatkenya.co.ke/#business" },
      areaServed: { "@type": "Country", name: "Kenya" },
      offers: {
        "@type": "Offer",
        price: "3500",
        priceCurrency: "KES",
        availability: "https://schema.org/InStock",
        validFrom: "2026-01-01",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-KE"
      data-color-mode="light"
      style={{ colorScheme: "light" }}
      className={`${dmSans.variable} ${outfit.variable} bg-canvas`}
    >
      <head>
        {/* Hreflang tags for geo-targeting */}
        <link rel="alternate" hrefLang="en-KE" href="https://smartvatkenya.co.ke" />
        <link rel="alternate" hrefLang="x-default" href="https://smartvatkenya.co.ke" />

        {/* Preconnect to critical third-party origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//wa.me" />

        {/* Speculation Rules — instant prefetch on hover for key pages */}
        <script type="speculationrules">
          {JSON.stringify({
            prefetch: [
              {
                source: "list",
                url: [
                  "/tools",
                  "/resources",
                  "/services",
                  "/resources/how-to-register-for-vat-in-kenya",
                  "/resources/kra-penalty-for-late-vat-filing",
                  "/resources/how-to-calculate-vat-in-kenya",
                ],
                requires: ["anonymous-client-ip-when-cross-origin"],
              },
            ],
          })}
        </script>

        {/*
          Critical CSS inlined for instant hero rendering — main CSS loads in parallel.
          Keep display utilities out of here: these rules are unlayered and would beat
          every responsive utility from the Tailwind sheet (e.g. `hidden md:flex`).
        */}
        <style>{`
          .bg-canvas-dark { background-color: #1b2a3b; }
          .bg-canvas { background-color: #faf8f3; }
          .text-canvas { color: #faf8f3; }
          .text-canvas\\/80 { color: rgba(250, 248, 243, 0.8); }
          .text-canvas\\/65 { color: rgba(250, 248, 243, 0.65); }
          .text-canvas\\/70 { color: rgba(250, 248, 243, 0.7); }
          .text-canvas\\/60 { color: rgba(250, 248, 243, 0.6); }
          .text-brand { color: #c8372d; }
          .text-ink { color: #141311; }
          .border-canvas\\/25 { border-color: rgba(250, 248, 243, 0.25); }
          .border-canvas\\/15 { border-color: rgba(250, 248, 243, 0.15); }
          .font-semibold { font-weight: 600; }
          .font-mono { font-family: ui-monospace, SF Mono, Cascadia Code, Fira Mono, monospace; }
          .tracking-tight { letter-spacing: -0.025em; }
          .text-balance { text-wrap: balance; }
          .text-pretty { text-wrap: pretty; }
          .overflow-hidden { overflow: hidden; }
          .relative { position: relative; }
          .absolute { position: absolute; }
          .inset-0 { inset: 0; }
          .pointer-events-none { pointer-events: none; }
          .z-0 { z-index: 0; }
          .z-10 { z-index: 10; }
          .z-50 { z-index: 50; }
          .max-w-\\[52ch\\] { max-width: 52ch; }
          .max-w-\\[1400px\\] { max-width: 1400px; }
          .mx-auto { margin-inline: auto; }
          .px-6 { padding-inline: 1.5rem; }
          .pt-12 { padding-top: 3rem; }
          .pb-20 { padding-bottom: 5rem; }
          .gap-12 { gap: 3rem; }
          .items-start { align-items: flex-start; }
          .leading-\\[1\\.05\\] { line-height: 1.05; }
          .leading-relaxed { line-height: 1.625; }
          .mb-6 { margin-bottom: 1.5rem; }
          .mb-10 { margin-bottom: 2.5rem; }
          .self-start { align-self: flex-start; }
          @media (min-width: 1024px) {
            .lg\\:grid-cols-\\[1fr_420px\\] { grid-template-columns: 1fr 420px; }
            .lg\\:gap-20 { gap: 5rem; }
            .lg\\:px-10 { padding-inline: 2.5rem; }
            .lg\\:pt-16 { padding-top: 4rem; }
            .lg\\:pb-24 { padding-bottom: 6rem; }
          }
        `}</style>
        
        <script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased font-sans text-ink bg-canvas">
        <noscript>
          <div className="bg-amber-50 dark:bg-amber-950/40 border-b border-amber-200 dark:border-amber-800 px-4 py-2.5 text-center text-[0.78rem] text-amber-800 dark:text-amber-300 leading-snug">
            Smart VAT Kenya uses JavaScript for interactive tools (VAT calculator, penalty estimator) and search. For the best experience, please enable JavaScript in your browser.
          </div>
        </noscript>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  )
}
