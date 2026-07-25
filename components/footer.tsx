import Link from "next/link"
import { Phone, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr"

const WA_BASE = "https://wa.me/254721725958"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-canvas-dark border-t border-canvas/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-12">

          {/* Brand column */}
          <div>
            <Link
              href="/"
              className="font-display text-[1.1rem] font-semibold text-canvas tracking-tight mb-4 inline-block hover:text-canvas/80 transition-colors"
              aria-label="Smart VAT Kenya — Home"
            >
              Smart<span className="text-brand">VAT</span>
              <span className="text-canvas/50 font-normal text-sm ml-1">Kenya</span>
            </Link>
            <p className="text-[0.85rem] text-canvas/75 leading-relaxed max-w-[30ch] mt-4 mb-6">
              Professional VAT registration services in Kenya and monthly iTax filing for SMEs.
              Flat-fee pricing. M-PESA accepted. Kenya VAT rate: 16% (2026).
            </p>
            <div className="space-y-2.5">
              <a
                href={WA_BASE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[0.82rem] text-canvas/75 hover:text-canvas transition-colors"
              >
                <Phone size={13} aria-hidden="true" />
                +254 721 725 958
              </a>
              <a
                href="mailto:info@smartvatkenya.co.ke"
                className="flex items-center gap-2.5 text-[0.82rem] text-canvas/75 hover:text-canvas transition-colors"
              >
                <EnvelopeSimple size={13} aria-hidden="true" />
                info@smartvatkenya.co.ke
              </a>
              <p className="flex items-start gap-2.5 text-[0.75rem] text-canvas/60 leading-snug max-w-[28ch]">
                <svg viewBox="0 0 12 12" className="w-3 h-3 shrink-0 mt-0.5 fill-canvas/50" aria-hidden="true"><path d="M6 0C3.79 0 2 1.79 2 4c0 3 4 8 4 8s4-5 4-8c0-2.21-1.79-4-4-4zm0 5.5C5.17 5.5 4.5 4.83 4.5 4S5.17 2.5 6 2.5 7.5 3.17 7.5 4 6.83 5.5 6 5.5z"/></svg>
                <span>Pioneer House, Moi Avenue, Nairobi CBD, Kenya</span>
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-canvas/45 mb-5">
              Pages
            </p>
            <ul className="space-y-3" role="list">
              {[
                { href: "/tools",        label: "Free VAT Calculator" },
                { href: "/services",     label: "Services & Pricing" },
                { href: "/how-it-works", label: "How It Works" },
                { href: "/blog",         label: "Resources & Blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.85rem] text-canvas/75 hover:text-canvas transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust signals */}
          <div>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-canvas/45 mb-5">
              Trust
            </p>
            <ul className="space-y-3" role="list">
              {[
                "KRA iTax Registered Agents",
                "100% iTax Compliant",
                "M-PESA Receipts Provided",
                "No Hidden Fees",
                "WhatsApp Support",
                "KES 3,500 flat filing fee",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-[0.82rem] text-canvas/75">
                  <svg
                    viewBox="0 0 12 12"
                    className="w-3 h-3 shrink-0 mt-[3px] fill-brand"
                    aria-hidden="true"
                  >
                    <path d="M10.28 2.28L4.75 7.81 1.72 4.78 0.5 6l4.25 4.25 6.75-6.75z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-canvas/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[0.75rem] text-canvas/60">
            &copy; {year} Smart VAT Kenya. All rights reserved.
          </p>
          <p className="text-[0.75rem] text-canvas/60">
            VAT information based on{" "}
            <a
              href="https://www.kra.go.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-canvas/75 transition-colors"
            >
              KRA guidelines
            </a>
            . Official portal:{" "}
            <a
              href="https://itax.kra.go.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-canvas/75 transition-colors"
            >
              itax.kra.go.ke
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
