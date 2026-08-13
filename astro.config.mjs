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
        resources: ["'self'"],
        // SHA-256 hashes of the two deliberately inline non-hydrated scripts
        // in BaseLayout.astro (theme pre-paint hook + speculationrules block).
        // VERIFY with: node verify-csp.cjs  (after any edit to either script)
        hashes: [
          "sha256-Gg0/seg1F+l3T1CRtiPaHSLgTl8bS2jSXkuz+6PeAW0=",
          "sha256-/avMCWurbOW+mgAjEyqVaOOGjJyKPiE8ruWr08EiUqU=",
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