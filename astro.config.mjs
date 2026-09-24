import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import mdx from "@astrojs/mdx"
import tailwindcss from "@tailwindcss/vite"

const SITE = "https://smartvatkenya.co.ke"

function singleSitemap() {
  return {
    name: "single-sitemap",
    hooks: {
      "astro:build:done": async ({ pages, dir, logger }) => {
        const { writeFile, unlink } = await import("node:fs/promises")
        const lastmod = new Date().toISOString().slice(0, 10)
        const urls = pages
          .map((p) => p.pathname)
          .map((p) => (p.startsWith("/") ? p : `/${p}`))
          // Match trailingSlash:"always" + canonical URLs: sitemap must list
          // the final 200 URL, never a variant that 301-redirects.
          .map((p) => (p.endsWith("/") ? p : `${p}/`))
          .filter((p) => p !== "/404/" && !p.includes("404") && p !== "/blog/")
          .sort()
        logger.info(`writing sitemap with ${urls.length} URLs`)
        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...urls.map(
            (p) =>
              `  <url><loc>${SITE}${p}</loc><lastmod>${lastmod}</lastmod></url>`
          ),
          "</urlset>",
          "",
        ].join("\n")
        await writeFile(new URL("./sitemap.xml", dir), xml)
        for (const legacy of ["sitemap-0.xml", "sitemap-index.xml"]) {
          try {
            await unlink(new URL(`./${legacy}`, dir))
          } catch {
            /* not present */
          }
        }
      },
    },
  }
}

export default defineConfig({
  site: SITE,
  trailingSlash: "always",
  security: {
    csp: {
      algorithm: "SHA-256",
      cspDestination: "meta",
      directives: [
        "default-src 'self'",
        "object-src 'none'",
        "font-src 'self' https://fonts.gstatic.com data:",
        "img-src 'self' data: https:",
        "media-src 'self' data:",
        "connect-src 'self' https:",
        "frame-ancestors 'none'",
        "base-uri 'self'",
        "form-action 'self' https:",
        "upgrade-insecure-requests",
      ],
      scriptDirective: {
        resources: [
          "'self'",
          // Analytics tag libraries (see BaseLayout.astro head):
          //   GA4 gtag.js    -> https://www.googletagmanager.com
          //   MS Clarity tag -> https://www.clarity.ms
          // The init/bootstraps live as same-origin files in /public/js/
          // (covered by 'self'), so no inline hashes are needed for them.
          // Beacons are already allowed: connect-src 'self' https:, img-src https:.
          "https://www.googletagmanager.com",
          "https://www.clarity.ms",
        ],
        // SHA-256 hashes of the deliberately inline non-hydrated scripts
        // in BaseLayout.astro (theme pre-paint hook + speculationrules block
        // + click/CTA tracking hook).
        // VERIFY with: node verify-csp.cjs  (after any edit to any of these scripts)
        hashes: [
          "sha256-Gg0/seg1F+l3T1CRtiPaHSLgTl8bS2jSXkuz+6PeAW0=",
          "sha256-QzWFZi+FLIx23tnm9SBU4aEgx4x8DsuASP07mfqol/c=",
          "sha256-Ya0pUYrC7nM5Cn/056TyVuEiz6dFGrzmkWzgON0pF0U=",
          "sha256-Q2BPg90ZMplYY+FSdApNErhpWafg2hcRRbndmvxuL/Q=",
          "sha256-yV6r9l14w1tuDvwVXy/l6fWGlbPG2d7wHT46Yi3jwY4=",
          // Unified delegated conversion tracking hook (BaseLayout.astro)
          "sha256-RFVN1OA8FBW1LqV9CtQD1cDxYQ9HpUyXeAIDyi+OVkE=",
        ],
      },
      styleDirective: {
        resources: [
          "'self'",
          "'unsafe-inline'",
          "https://fonts.googleapis.com",
          // style="…" attributes (hero gradient, header blur, badge colors)
          // can't use <style>-hashes, so allow them via style-src-attr only.
          { resource: "'unsafe-inline'", kind: "attribute" },
        ],
      },
    },
  },
  integrations: [react(), mdx(), singleSitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
})