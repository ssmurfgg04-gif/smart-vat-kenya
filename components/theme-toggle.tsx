"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "@phosphor-icons/react/dist/ssr"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check localStorage or system preference
    const stored = localStorage.getItem("theme")
    if (stored === "dark" || stored === "light") {
      setTheme(stored)
      document.documentElement.classList.toggle("dark", stored === "dark")
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <button
        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Toggle theme"
      >
        <Sun size={20} className="text-gray-700 dark:text-gray-200" aria-hidden="true" />
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? (
        <Moon size={20} className="text-gray-700" aria-hidden="true" />
      ) : (
        <Sun size={20} className="text-gray-200" aria-hidden="true" />
      )}
    </button>
  )
}
