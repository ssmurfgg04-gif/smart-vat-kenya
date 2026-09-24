// Google Analytics 4 bootstrap — Measurement ID G-M3LZ5ED02B
// (data stream 13685262933, property "Nura Health").
//
// Kept as a same-origin static file so the site CSP never needs inline
// hashes for the analytics bootstrap: script-src allows 'self' plus the
// tag-library origins (www.googletagmanager.com, www.clarity.ms) declared
// in astro.config.mjs. Beacons flow via connect-src 'self' https:.
//
// Order of the two tags in BaseLayout <head> does not matter: this stub
// queues commands into window.dataLayer and the async gtag.js library
// replays the backlog when it arrives.
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
// Expose on window so the delegated CTA tracker in BaseLayout.astro and the
// React islands (src/lib/analytics.ts) can push events before/after the
// library loads — both layers are silently no-ops if analytics is absent.
window.gtag = window.gtag || gtag;
gtag('js', new Date());
gtag('config', 'G-M3LZ5ED02B', {
  // Static Astro site: every navigation is a full page load, so the default
  // page_view from config() is exactly one page_view per page. Enhanced
  // Measurement's page_view only fires on SPA history changes and stays idle.
  send_page_view: true,
});
