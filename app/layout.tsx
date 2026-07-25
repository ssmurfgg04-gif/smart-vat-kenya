import type { Metadata, Viewport } from "next"
import { DM_Sans, Outfit } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Script from "next/script"
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
    // Core service terms
    "vat registration services kenya",
    "register for vat online kenya",
    "vat registration kenya",
    "kra vat registration",
    "how to register for vat in kenya",
    "how much does vat registration cost in kenya",
    // Calculator & rate terms
    "kra vat calculator",
    "vat calculator kra kenya",
    "16% vat calculator kenya",
    "kenya vat standard rate 16% 2026",
    "reverse vat calculator kenya",
    // Filing & compliance
    "monthly vat filing kenya",
    "itax vat registration",
    "itax vat filing service",
    "vat return kenya",
    "vat filing deadline kenya 2026",
    "kra vat filing deadline 20th",
    // Threshold & obligation
    "vat registered person kenya",
    "kes 5 million threshold vat kenya",
    "kes 8 million vat threshold kenya finance act 2025",
    "mandatory vat registration kenya",
    "voluntary vat registration kenya",
    "non-registration penalty kra kes 100000",
    // eTIMS
    "etims kenya",
    "etims vat kenya",
    "etims onboarding kenya",
    "electronic tax invoice kenya",
    "etims compliance kenya 2026",
    // Pain points (competitor gaps from research)
    "kra special table vat kenya",
    "vat special table blocked input tax kenya",
    "kra portal errors itax",
    "itax system down kenya",
    "kra penalty waiver",
    "avoid kra vat penalty",
    "kra late filing penalty kes 10000",
    "non registration penalty kes 100000",
    // Output/input tax
    "output tax input tax kenya",
    "withholding vat kenya",
    "vat compliance kenya",
    "vat number kenya",
    "vat application kenya",
    "etims invoice kenya",
    // Long-tail
    "how to register for vat in kenya on itax",
    "what is the vat rate in kenya 2026",
    "when must a business register for vat kenya",
    "vat registration threshold kenya 2026",
    "kra vat registration threshold",
    "kenya vat exempt zero rated goods",
    "kra paybill 572572 vat payment",
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
  alternates: { canonical: "https://smartvatkenya.co.ke" },
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
      priceRange: "KES 3,500 to KES 5,000",
      image: "https://smartvatkenya.co.ke/icon.svg",
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
      parentOrganization: {
        "@type": "Organization",
        name: "Smart VAT Kenya",
        url: "https://smartvatkenya.co.ke",
        logo: "https://smartvatkenya.co.ke/icon.svg",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+254721725958",
          contactType: "customer service",
          availableLanguage: "English, Swahili",
        },
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
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Monthly VAT Filing Kenya",
            },
            price: "3500",
            priceCurrency: "KES",
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
          urlTemplate: "https://smartvatkenya.co.ke/blog?q={search_term_string}",
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
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//wa.me" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="preconnect" href="https://wa.me" />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased font-sans text-ink bg-canvas">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  )
}
