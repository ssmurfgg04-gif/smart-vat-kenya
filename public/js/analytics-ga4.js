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

// ---------------------------------------------------------------------------
// AI-referral detection (AEO citation tracking).
// When a visitor arrives from an AI answer engine, fire an `ai_referral`
// event naming the engine and the landing page. This is the measurable half
// of the citation-testing protocol (docs/aeo-citation-testing.md): query the
// engines monthly, and watch this event for the traffic they send back.
// Explore in GA4: Reports > Engagement > Events > ai_referral, split by the
// custom dimension "ai_engine" (create it as an event-scoped dimension).
// ---------------------------------------------------------------------------
(function () {
  var AI_ENGINES = [
    ["chatgpt.com", "chatgpt"],
    ["chat.openai.com", "chatgpt"],
    ["perplexity.ai", "perplexity"],
    ["gemini.google.com", "gemini"],
    ["claude.ai", "claude"],
    ["copilot.microsoft.com", "copilot"],
    ["bing.com/chat", "copilot"],
    ["you.com", "you"],
    ["duck.ai", "duckduckgo"],
    ["duckduckgo.com", "duckduckgo"],
    ["grok.com", "grok"],
    ["mistral.ai", "mistral"],
    ["poe.com", "poe"],
    ["deepseek.com", "deepseek"]
  ];
  try {
    var ref = document.referrer || "";
    if (!ref) return;
    var host = new URL(ref).hostname.replace(/^www\./, "");
    if (!host) return;
    for (var i = 0; i < AI_ENGINES.length; i++) {
      if (host === AI_ENGINES[i][0] || host.indexOf(AI_ENGINES[i][0]) !== -1) {
        gtag("event", "ai_referral", {
          ai_engine: AI_ENGINES[i][1],
          landing_page: location.pathname,
          referrer_host: host
        });
        if (typeof window.clarity === "function") {
          window.clarity("event", "ai_referral_" + AI_ENGINES[i][1]);
        }
        return;
      }
    }
  } catch (e) { /* never break the page */ }
})();
