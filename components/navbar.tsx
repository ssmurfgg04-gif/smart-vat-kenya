"use client"

import { useState, useEffect } from "react"
import { List, X, Sun, Moon } from "@phosphor-icons/react/dist/ssr"
import { SiteSearch } from "./site-search"

const navLinks = [
  { href: "/tax-amnesty-2026/", label: "Tax Amnesty", urgent: true },
  { href: "/tools/",            label: "VAT Calculator" },
  { href: "/services/",         label: "Services" },
  { href: "/how-it-works/",     label: "How It Works" },
  { href: "/resources/",        label: "Resources" },
  { href: "/about/",            label: "About" },
]

const WA_LINK =
  "https://wa.me/254717344440?text=Hi%2C%20I%20need%20help%20with%20VAT%20registration%20or%20filing."

export function Navbar() {
  const [pathname, setPathname] = useState("/")
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    setPathname(window.location.pathname)
    // Check initial theme
    const isDark = document.documentElement.classList.contains("dark")
    setTheme(isDark ? "dark" : "light")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
    // Update theme-color meta tag
    const metaTheme = document.querySelector('meta[name="theme-color"]')
    if (metaTheme) {
      metaTheme.setAttribute("content", newTheme === "dark" ? "#0f1419" : "#faf8f3")
    }
  }

  return (
    <header
      className={`sticky top-0 backdrop-blur-md border-b bg-white/90 dark:bg-gray-900/90 border-gray-200 dark:border-gray-700 ${
        open ? "z-[90]" : "z-40"
      }`}
    >
      <nav
        className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-[60px]"
        aria-label="Main navigation"
      >
        <a
          href="/"
          className="font-display text-[1.15rem] font-semibold tracking-tight text-gray-900 dark:text-gray-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          aria-label="Smart VAT Kenya — Home"
        >
          Smart<span className="text-gray-900 dark:text-gray-100">VAT</span>
          <span className="text-gray-500 dark:text-gray-400 font-normal text-sm ml-1">Kenya</span>
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
                      ? "text-gray-900 dark:text-gray-100 border-b-2 border-gray-900 dark:border-gray-100 pb-0.5 font-semibold"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                  }`}
                >
                  {link.urgent ? (
                    <span className="text-brand inline-flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-60" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
                      </span>
                      {link.label}
                    </span>
                  ) : (
                    link.label
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {/* Site search */}
          <SiteSearch />

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? (
              <Moon size={20} className="text-gray-600" aria-hidden="true" />
            ) : (
              <Sun size={20} className="text-gray-400" aria-hidden="true" />
            )}
          </button>

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
          className="md:hidden text-gray-900 dark:text-gray-100 p-2 -mr-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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
        <div id="mobile-nav" className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-6 py-5 space-y-1">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/")
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`block py-2.5 text-sm font-medium border-b border-gray-100 dark:border-gray-800 last:border-0 transition-colors ${
                  active ? "text-gray-900 dark:text-gray-100 font-semibold" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                }`}
              >
                {link.urgent ? (
                  <span className="text-brand inline-flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-60" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
                    </span>
                    {link.label}
                  </span>
                ) : (
                  link.label
                )}
              </a>
            )
          })}
          
          {/* Mobile theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-3 w-full py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors border-b border-gray-100 dark:border-gray-800"
          >
            {theme === "light" ? (
              <>
                <Moon size={18} aria-hidden="true" />
                <span>Dark mode</span>
              </>
            ) : (
              <>
                <Sun size={18} aria-hidden="true" />
                <span>Light mode</span>
              </>
            )}
          </button>

          {/* Mobile site search */}
          <div className="border-b border-gray-100 dark:border-gray-800 py-2.5">
            <SiteSearch />
          </div>
          
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
