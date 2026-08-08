import { Sun, Moon, Menu, X } from "@phosphor-icons/react/dist/ssr"
import { useEffect, useState } from "react"

export function Navbar() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialDark = stored === "dark" || (!stored && prefersDark)
    setIsDark(initialDark)
    if (initialDark) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newDark = !isDark
    setIsDark(newDark)
    localStorage.setItem("theme", newDark ? "dark" : "light")
    if (newDark) {
      document.documentElement.classList.add("dark")
      document.querySelector('meta[name="theme-color"]')?.setAttribute("content", "#0f1419")
    } else {
      document.documentElement.classList.remove("dark")
      document.querySelector('meta[name="theme-color"]')?.setAttribute("content", "#faf8f3")
    }
  }

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-hairline bg-canvas/95 backdrop-blur supports-[backdrop-filter]:bg-canvas/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="/" className="flex items-center gap-2 font-display text-ink font-semibold text-lg" aria-label="Smart VAT Kenya Home">
            <span className="text-brand font-bold">Smart</span> VAT Kenya
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/services" className="text-ink-muted hover:text-ink transition-colors text-sm font-medium">Services</a>
            <a href="/resources" className="text-ink-muted hover:text-ink transition-colors text-sm font-medium">Resources</a>
            <a href="/tools" className="text-ink-muted hover:text-ink transition-colors text-sm font-medium">Tools</a>
            <a href="/about" className="text-ink-muted hover:text-ink transition-colors text-sm font-medium">About</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-canvas-warm transition-colors" aria-label="Toggle dark mode">
              <Sun size={20} aria-hidden="true" />
            </button>
            <a href="https://wa.me/254721725958?text=Hi%2C%20I%20need%20help%20with%20VAT" target="_blank" rel="noopener noreferrer" className="btn-fill bg-brand text-canvas text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors hidden sm:inline-flex items-center gap-2">
              Get Started
              <svg viewBox="0 0 12 12" className="w-3 h-3 fill-current" aria-hidden="true"><path d="M6 0L4.59 1.41 9.17 6l-4.58 4.59L6 12l6-6z"/></svg>
            </a>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-hairline bg-canvas/95 backdrop-blur supports-[backdrop-filter]:bg-canvas/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="/" className="flex items-center gap-2 font-display text-ink font-semibold text-lg" aria-label="Smart VAT Kenya Home">
          <span className="text-brand font-bold">Smart</span> VAT Kenya
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="/services" className="text-ink-muted hover:text-ink transition-colors text-sm font-medium">Services</a>
          <a href="/resources" className="text-ink-muted hover:text-ink transition-colors text-sm font-medium">Resources</a>
          <a href="/tools" className="text-ink-muted hover:text-ink transition-colors text-sm font-medium">Tools</a>
          <a href="/about" className="text-ink-muted hover:text-ink transition-colors text-sm font-medium">About</a>
        </nav>

        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-canvas-warm transition-colors" aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}>
            {isDark ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
          </button>

          <a href="https://wa.me/254721725958?text=Hi%2C%20I%20need%20help%20with%20VAT" target="_blank" rel="noopener noreferrer" className="btn-fill bg-brand text-canvas text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors hidden sm:inline-flex items-center gap-2">
            Get Started
            <svg viewBox="0 0 12 12" className="w-3 h-3 fill-current" aria-hidden="true"><path d="M6 0L4.59 1.41 9.17 6l-4.58 4.59L6 12l6-6z"/></svg>
          </a>

          <button className="md:hidden p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-canvas-warm transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={mobileMenuOpen}>
            {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </header>
    )
  )
}