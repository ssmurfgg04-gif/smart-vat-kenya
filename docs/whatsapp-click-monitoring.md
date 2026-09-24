# WhatsApp Click Monitoring (Private)

How to secretly count WhatsApp clicks. Nothing here is visible to visitors — no badges, no widgets, no counters. Three independent layers, all already installed:

## Layer 1 — Host request logs (works today, zero setup)

Every WhatsApp CTA on the site does NOT link directly to wa.me. Instead it opens an internal path that instantly 302-redirects to WhatsApp. Each redirect hit is logged by the host.

| CTA | Internal path | Prefilled message |
|---|---|---|
| Floating pill (desktop) | `/wa/` | "I'd like a quote for VAT registration or monthly filing." |
| Mobile sticky bar | `/wa/` | same |
| Footer contact line | `/wa/` | same |
| VAT calculator result | `/wa/filing/` | "I need help filing my VAT return." |
| "File it for me" CTAs | `/wa/filing/` | same |
| Penalty calculator result | `/wa/penalty/` | "I need help with a KRA penalty or amnesty." |
| KRA Doctor handoff | `/wa/doctor/` | "I just used the KRA Doctor and my issue is:" |
| Referral strip | `/wa/refer/` | "A friend referred me - I need help with:" |

**To read the counts (Netlify):**
1. Netlify Dashboard → your project → **Analytics** (enable it if not already on)
2. Open **Top pages** / path filter: `/wa/`
3. Each CTA bucket counts separately (`/wa/filing/`, `/wa/penalty/`, ...)

Netlify Analytics is server-side, cookie-free and ad-blocker-proof, so this layer keeps counting even for visitors who block GA4/Clarity. (Free alternative: search the deploy log's function/redirect traffic, or add a Logic/Edge-function hit counter later if you want per-day graphs.)

The counts are per-path, so you can see not just HOW MANY clicks but WHICH CTA produced them. Visitors only ever see WhatsApp open — the redirect is instant and invisible.

**To change the number later:** edit the `wa.me/254705467108` destinations in `netlify.toml` and `public/_redirects` — a config-level change, no site content rebuild needed.

## Layer 2 — GA4 events (LIVE — GA4 is connected)

**GA4 is installed as of Sep 2026:** Measurement ID `G-M3LZ5ED02B` loads on every page via `public/js/analytics-ga4.js` (see `BaseLayout.astro` head). First data appears in GA4 Realtime within minutes of deploy; standard reports fill in over 24–48h.

The tracking hook in `src/layouts/BaseLayout.astro` fires a `whatsapp_click` event into `dataLayer`, `gtag`, and Clarity on every CTA, with parameters:

- `cta_type`: floating / mobile-bar / footer / vat-calc-result / penalty-calc-result / penalty-amnesty-result / doctor-handoff / doctor-unknown / helpful-stuck / kra-updates-subscribe / referral / tools-bottom
- `service`: general / monthly-filing / penalty-waiver / reminders / referral
- `page`: the page the click came from

In GA4: Reports → Engagement → Events → `whatsapp_click`, then add `cta_type` / `page` as breakdown dimensions. (Mark `whatsapp_click` as a key event / conversion to see it in funnel reports.)

The same hook also fires the funnel events: `tool_start`, `tool_complete` (with `result_value`), `share_result`, `copy_result`, `helpful_vote`, `doctor_area`, `doctor_result` — so the full acquisition funnel (impressions → tool → result → share/WhatsApp) is measurable end to end.

## Layer 3 — Microsoft Clarity (LIVE — connected)

**Clarity is installed as of Sep 2026:** Project ID `yn7r51pk7o` loads via `public/js/analytics-clarity.js` on every page. Recordings/heatmaps appear within ~2 hours of the first tagged visit.

Same events flow to Clarity via `clarity('event', ...)`. In Clarity you can filter recordings by the `whatsapp_click` event and literally watch what the user did before deciding to message you.

> CSP note: both tag libraries are allowed in `astro.config.mjs` `script-src`. If you ever see GA4/Clarity silently missing in production, check the browser console for CSP violations first.

## GA4 one-time UI setup (5 minutes, do once after deploy)

1. **Verify data flow:** GA4 → Reports → Realtime → open the site in a new tab → you should see 1 active user.
2. **Mark key events:** Admin → Events → toggle "Mark as key event" for: `whatsapp_click`, `tool_complete`, `contact_form_submit` (if used). Key events = conversions in reports.
3. **Register custom dimensions** (Admin → Custom definitions): `cta_type`, `service`, `tool_name`, `result_value` (all event-scope) so they appear as report breakdowns.
4. **Connect Google Search Console** (Admin → Product links) so Queries/Landing pages show up inside GA4.

## Bonus funnel math

With Layer 1 + Layer 2 you can compute:

```
WhatsApp clicks per 1,000 tool results seen  = whatsapp_click / tool_complete
Best-performing CTA                          = whatsapp_click GROUP BY cta_type
Best-performing page                         = whatsapp_click GROUP BY page
```

## Where the number lives

The WhatsApp number (254 705 467 108, displayed as 0705 467 108) lives in **one place**: `src/lib/vat-facts.ts` → `contact.whatsapp`. Change it there (plus the redirect destinations listed above) and everything follows. The redirect configs carry the number independently of the site code so redirects keep working even without a rebuild.
