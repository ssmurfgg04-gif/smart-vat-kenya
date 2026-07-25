"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "@phosphor-icons/react"

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed right-5 bottom-5 z-50 flex items-center justify-center w-11 h-11 rounded-full bg-ink text-canvas shadow-lg transition-all duration-300 hover:bg-canvas-dark active:scale-90 ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <ArrowUp size={18} weight="bold" aria-hidden="true" />
    </button>
  )
}
