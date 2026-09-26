"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { MagnifyingGlass, X } from "@phosphor-icons/react/dist/ssr"

interface PagefindDoc {
  id: string
  data: () => Promise<{ url: string; meta: { title: string }; excerpt: string }>
}

interface PagefindApi {
  search: (q: string) => Promise<{ results: PagefindDoc[] }>
}

interface PagefindWindow extends Window {
  __pagefindApi?: PagefindApi
}

let pagefindPromise: Promise<PagefindApi> | null = null

function loadPagefind(): Promise<PagefindApi> {
  if (!pagefindPromise) {
    pagefindPromise = new Promise<PagefindApi>((resolve, reject) => {
      const w = window as PagefindWindow
      if (w.__pagefindApi) {
        resolve(w.__pagefindApi)
        return
      }
      const onReady = () => {
        if (w.__pagefindApi) {
          cleanup()
          resolve(w.__pagefindApi)
        }
      }
      const onError = () => {
        cleanup()
        reject(new Error("Pagefind failed to load"))
      }
      const cleanup = () => {
        window.removeEventListener("pagefind-ready", onReady)
        window.removeEventListener("pagefind-error", onError)
      }
      window.addEventListener("pagefind-ready", onReady)
      window.addEventListener("pagefind-error", onError)
      if (document.querySelector("script[data-pagefind-bootstrap]")) return
      const s = document.createElement("script")
      s.src = "/pagefind-bootstrap.js"
      s.async = true
      s.dataset.pagefindBootstrap = "true"
      s.onerror = onError
      document.head.appendChild(s)
    })
  }
  return pagefindPromise
}

interface Result {
  url: string
  title: string
  excerpt: string
}

export function SiteSearch() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Result[]>([])
  const [searching, setSearching] = useState(false)
  const [unavailable, setUnavailable] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const runSearch = useCallback(async (q: string) => {
    if (!q.trim()) {
      setResults([])
      return
    }
    setSearching(true)
    try {
      const pagefind = await loadPagefind()
      const { results: found } = await pagefind.search(q)
      const mapped = await Promise.all(
        found.slice(0, 8).map(async (r) => {
          const d = await r.data()
          return { url: d.url, title: d.meta.title, excerpt: d.excerpt }
        }),
      )
      setResults(mapped)
    } catch {
      setUnavailable(true)
    }
    setSearching(false)
  }, [])

  useEffect(() => {
    if (!open) return
    inputRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    if (!open) return
    timerRef.current = setTimeout(() => runSearch(query), 250)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [query, open, runSearch])

  return (
    <>
      <button
        onClick={() => {
          setUnavailable(false)
          setOpen(true)
        }}
        className="p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-canvas-warm transition-colors"
        aria-label="Search the site"
      >
        <MagnifyingGlass size={20} className="text-ink-muted" aria-hidden="true" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-canvas-dark/60 p-4 pt-[10vh]"
          onClick={() => setOpen(false)}
          data-pagefind-ignore
        >
          <div
            className="w-full max-w-xl rounded-xl bg-canvas dark:bg-canvas-dark shadow-2xl border border-hairline"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Search"
          >
            <div className="flex items-center gap-3 border-b border-hairline px-4">
              <MagnifyingGlass size={16} className="shrink-0 text-ink-muted" aria-hidden="true" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search VAT, eTIMS, KRA penalties, guides…"
                aria-label="Search query"
                className="w-full bg-transparent py-4 text-sm text-ink dark:text-canvas placeholder:text-ink-muted dark:placeholder:text-canvas/50 focus:outline-none"
                autoComplete="off"
              />
              <button
                onClick={() => setOpen(false)}
                className="shrink-0 p-1 rounded hover:bg-canvas-warm text-ink-muted"
                aria-label="Close search"
              >
                <X size={16} aria-hidden="true" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-2">
              {unavailable ? (
                <p className="px-4 py-8 text-center text-sm text-ink-muted">
                  Search isn't available here yet - try it on the live site.
                </p>
              ) : searching ? (
                <p className="px-4 py-8 text-center text-sm text-ink-muted">Searching…</p>
              ) : query.trim() && results.length === 0 ? (
                <p className="px-4 py-8 text-center text-sm text-ink-muted">
                  No results for &ldquo;{query}&rdquo;.
                </p>
              ) : (
                <ul>
                  {results.map((r) => (
                    <li key={r.url}>
                      <a
                        href={r.url}
                        onClick={() => setOpen(false)}
                        className="block rounded-md px-3 py-3 hover:bg-canvas-warm transition-colors"
                      >
                        <p className="text-sm font-semibold text-ink dark:text-canvas">{r.title}</p>
                        {r.excerpt && (
                          <p
                            className="mt-1 line-clamp-2 text-xs leading-relaxed text-ink-muted [&_mark]:bg-brand-muted [&_mark]:text-brand dark:[&_mark]:bg-brand-muted/40 dark:[&_mark]:text-brand"
                            dangerouslySetInnerHTML={{ __html: r.excerpt }}
                          />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}