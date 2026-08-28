import { Sun, Moon, List, X } from "@phosphor-icons/react/dist/ssr"
import { useEffect, useState } from "react"
import { SiteSearch } from "./site-search"

const navLinks = [
  { href: "/tools/", label: "VAT Calculator" },
  { href: "/services/", label: "Services" },
  { href: "/how-it-works/", label: "How It Works" },
  { href: "/resources/", label: "Resources" },
]

const WA_LINK =
  "https://wa.me/254717344440?text=Hi%2C%20I%20need%20help%20with%20VAT%20registration%20or%20filing."

export function Navbar() {
  const [pathname, setPathname] = useState("/")
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    setPathname(window.location.pathname)
    const isDark = document.documentElement.classList.contains("dark")
    setTheme(isDark ? "dark" : "light")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
    const metaTheme = document.querySelector('meta[name="theme-color"]')
    if (metaTheme) {
      metaTheme.setAttribute("content", newTheme === "dark" ? "#0d1218" : "#faf8f3")
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-hairline bg-canvas/95 backdrop-blur supports-[backdrop-filter]:bg-canvas/80 ${
        open ? "z-[90]" : ""
      }`}
    >
      <nav
        className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[60px]"
        aria-label="Main navigation"
      >
        <a
          href="/"
          className="font-display text-[1.15rem] font-semibold tracking-tight text-ink dark:text-canvas hover:text-brand transition-colors"
          aria-label="Smart VAT Kenya - Home"
        >
          Smart<span className="text-brand font-bold">VAT</span>
          <span className="text-ink-muted dark:text-canvas/50 font-normal text-sm ml-1">Kenya</span>
        </a>

        <ul className="hidden lg:flex items-center gap-7" role="list">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/")
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm font-medium transition-colors ${
                    active
                      ? "text-ink dark:text-canvas border-b-2 border-ink dark:border-canvas pb-0.5 font-semibold"
                      : "text-ink-muted hover:text-ink dark:hover:text-canvas"
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

        <div className="hidden lg:flex items-center gap-3">
          <SiteSearch />

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-canvas-warm transition-colors"
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? (
              <Moon size={20} className="text-ink-muted" aria-hidden="true" />
            ) : (
              <Sun size={20} className="text-canvas/70" aria-hidden="true" />
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
          <span className="hidden sm:block text-[0.7rem] text-ink-muted/60 font-medium whitespace-nowrap">
            WhatsApp diagnosis is FREE
          </span>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-ink dark:text-canvas p-2 -mr-2 rounded-lg text-ink-muted hover:text-ink hover:bg-canvas-warm transition-colors"
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

      <a
        href="/tax-amnesty-2026/"
        className="block bg-brand px-4 py-1.5 text-center"
      >
        <p className="max-w-[1400px] mx-auto text-[0.82rem] text-white font-medium leading-snug text-center">
          <strong>Most Kenyan businesses don&apos;t know this:</strong> KRA is waiving 100% of
          pre-2026 penalties and interest - but only until 31 Dec 2026.{" "}
          <span className="underline underline-offset-2 font-semibold hover:opacity-80 whitespace-nowrap">
            Check if you qualify &rarr;
          </span>
        </p>
      </a>

      {open && (
        <div id="mobile-nav" className="lg:hidden border-t border-hairline bg-canvas">
          <div className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/")
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`block py-3 text-[0.95rem] text-ink hover:text-brand border-b border-hairline/60 last:border-0 transition-colors ${
                    active ? "text-ink dark:text-canvas font-semibold" : "text-ink-muted dark:text-canvas/70 hover:text-ink dark:hover:text-canvas"
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

            <button
              onClick={toggleTheme}
              className="flex items-center gap-3 w-full py-2.5 text-sm font-medium text-ink-muted hover:text-ink transition-colors border-b border-hairline"
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

            <div className="border-b border-hairline py-2.5">
              <SiteSearch />
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill block mt-4 text-center bg-brand text-white text-sm font-semibold px-4 py-3 rounded-md"
            >
              Get Started on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}