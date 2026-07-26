"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { List, X } from "@phosphor-icons/react/dist/ssr"

const navLinks = [
  { href: "/tools",           label: "VAT Calculator" },
  { href: "/services",        label: "Services" },
  { href: "/how-it-works",    label: "How It Works" },
  { href: "/forms",           label: "Free Forms" },
  { href: "/resources",       label: "Resources" },
]

const WA_LINK =
  "https://wa.me/254721725958?text=Hi%2C%20I%20need%20help%20with%20VAT%20registration%20or%20filing."

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-canvas/90 backdrop-blur-md border-b border-hairline">
      <nav
        className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[60px]"
        aria-label="Main navigation"
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="font-display text-[1.15rem] font-semibold tracking-tight text-ink hover:text-brand transition-colors"
          aria-label="Smart VAT Kenya — Home"
        >
          Smart<span className="text-gray-900">VAT</span>
          <span className="text-ink-muted font-normal text-sm ml-1">Kenya</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7" role="list">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/")
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  prefetch={true}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm font-medium transition-colors ${
                    active
                      ? "text-ink border-b border-ink pb-0.5"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Primary CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-4 py-2 rounded-md transition-colors hover:bg-brand-hover"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-ink p-2 -mr-2 rounded-md hover:bg-canvas-alt transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? (
            <X size={22} weight="regular" aria-hidden="true" />
          ) : (
            <List size={22} weight="regular" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div id="mobile-nav" className="lg:hidden border-t border-hairline bg-canvas px-6 py-5 space-y-1">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/")
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`block py-2.5 text-sm font-medium border-b border-hairline last:border-0 transition-colors ${
                  active ? "text-ink" : "text-ink-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill block mt-4 text-center bg-brand text-canvas text-sm font-semibold px-4 py-3 rounded-md"
          >
            Get Started on WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
