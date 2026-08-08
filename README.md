# Smart VAT Kenya

VAT registration and iTax filing services for Kenyan SMEs — flat KES 5,000 registration, KES 3,500/month filing, M-PESA accepted, handled on WhatsApp.

**Site:** https://smartvatkenya.co.ke · **Status:** production (Astro 7, static, deployed on Vercel)

## What this repo is

- **Marketing + content site** (SSG) — 50+ SEO resource pages on Kenya VAT/eTIMS/iTax
- **Free tools** — VAT calculator, penalty estimator, iTax error diagnosis, registration quiz
- **AI-crawl friendly** — llms.txt, LLM-bot rules in robots.txt, Pagefind search

## Stack

- Astro 7 (SSG) + React islands + Tailwind 4
- `@astrojs/sitemap`, Pagefind (client search), Vercel adapter
- Content: TSX components in `src/components/pages` and `src/components/resources` (metadata in `map.ts`)

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output + sitemap + Pagefind index
```

## Editing rules (important)

- **One-truth:** legal/commercial figures live in `src/lib/vat-facts.ts`. Never hardcode a number on a page.
- **Freshness:** every page carries "Last verified: [date]" citing its source.
- **Copy:** first line is an open loop; every page resolves to a WhatsApp CTA.
- **Pages:** add resources in `src/components/resources/` + register in `map.ts`; routes generate automatically via `src/pages/resources/[slug].astro`.

## License

MIT © Smart VAT Kenya. The code is public by design — our transparency is our brand.