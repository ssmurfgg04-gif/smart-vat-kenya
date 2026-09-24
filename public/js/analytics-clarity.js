// Microsoft Clarity bootstrap — Project ID yn7r51pk7o.
//
// Same-origin static file (CSP: script-src 'self') that injects the real
// Clarity tag from https://www.clarity.ms/tag/yn7r51pk7o (allowed in
// astro.config.mjs). Defines window.clarity so the delegated CTA tracker
// (BaseLayout.astro) and src/lib/analytics.ts can mirror funnel events into
// Clarity sessions.
//
// Clarity masks all sensitive content by default; recordings/heatmaps start
// flowing up to ~2 hours after the first tagged visit.
(function (c, l, a, r, i, t, y) {
  c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
  t = l.createElement(r);
  t.async = 1;
  t.src = "https://www.clarity.ms/tag/" + i;
  y = l.getElementsByTagName(r)[0];
  y.parentNode.insertBefore(t, y);
})(window, document, "clarity", "script", "yn7r51pk7o");
