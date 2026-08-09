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
          .filter((p) => p !== "/404/" && !p.includes("404"))
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
  integrations: [react(), mdx(), singleSitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
})