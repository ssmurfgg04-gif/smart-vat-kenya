// Tiny client-side analytics helper. Pushes to every layer that may be
// present at runtime (GA4 dataLayer/gtag, Microsoft Clarity) and never
// throws if none are loaded. Used by React islands for funnel events that
// delegated click-tracking can't see (tool starts/completions, shares).
type Params = Record<string, string | number | undefined>

interface AnalyticsWindow extends Window {
  dataLayer?: unknown[]
  gtag?: (...args: unknown[]) => void
  clarity?: (...args: unknown[]) => void
}

export function track(event: string, params: Params = {}) {
  try {
    const w = window as AnalyticsWindow
    const payload = { event, page: location.pathname, ...params }
    if (Array.isArray(w.dataLayer)) w.dataLayer.push(payload)
    if (typeof w.gtag === "function") w.gtag("event", event, { page_path: location.pathname, ...params })
    if (typeof w.clarity === "function") w.clarity("event", event)
  } catch {
    /* analytics must never break the tool */
  }
}
