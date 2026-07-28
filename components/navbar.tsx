"use client"

import { useState, useEffect } from "react"
import { List, X } from "@phosphor-icons/react/dist/ssr"

const navLinks = [
  { href: "/tools",        label: "VAT Calculator" },
  { href: "/services",     label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/forms",        label: "Free Forms" },
  { href: "/resources",    label: "Resources" },
]

const WA_LINK =
  "https://wa.me/254721725958?text=Hi%2C%20I%20need%20help%20with%20VAT%20registration%20or%20filing."

export function Navbar() {
  const [pathname, setPathname] = useState("/")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setPathname(window.location.pathname)
  }, [])

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <nav
        className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-[60px]"
        aria-label="Main navigation"
      >
        <a
          href="/"
          className="font-display text-[1.15rem] font-semibold tracking-tight text-gray-900 hover:text-emerald-600 transition-colors"
          aria-label="Smart VAT Kenya — Home"
        >
          Smart<span className="text-gray-900">VAT</span>
          <span className="text-gray-500 font-normal text-sm ml-1">Kenya</span>
        </a>

        <ul className="hidden md:flex items-center gap-7" role="list">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/")
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm font-medium transition-colors ${
                    active
                      ? "text-gray-900 border-b-2 border-gray-900 pb-0.5 font-semibold"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill inline-flex items-center gap-2 bg-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors hover:bg-emerald-700"
          >
            Get Started
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-900 p-2 -mr-2 rounded-md hover:bg-gray-100 transition-colors"
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

      {open && (
        <div id="mobile-nav" className="md:hidden border-t border-gray-200 bg-white px-6 py-5 space-y-1">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/")
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`block py-2.5 text-sm font-medium border-b border-gray-100 last:border-0 transition-colors ${
                  active ? "text-gray-900 font-semibold" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </a>
            )
          })}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill block mt-4 text-center bg-emerald-600 text-white text-sm font-semibold px-4 py-3 rounded-md"
          >
            Get Started on WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
