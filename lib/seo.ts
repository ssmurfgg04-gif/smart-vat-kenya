import type { Metadata } from "next"

export const SITE_URL = "https://smartvatkenya.co.ke"
export const SITE_NAME = "Smart VAT Kenya"
export const DEFAULT_OG_IMAGE = "/og-image.png"

type PageSeo = {
  /** Page title WITHOUT the "| Smart VAT Kenya" suffix — the root template appends it. */
  title: string
  /** Bypass the root title template — use for titles already long enough on their own. */
  absoluteTitle?: boolean
  /**
   * Title template for child segments. Set on a layout whose children should keep
   * getting the brand suffix (a nested layout title otherwise replaces the root template).
   */
  titleTemplate?: string
  description: string
  /** Route path, e.g. "/services" or "/" for the homepage. */
  path: string
  /** 5–10 core terms. Omit entirely when the page has no distinct terms. */
  keywords?: string[]
  image?: string
  /** Set for article-style pages (resources, guides). */
  type?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
}

export function constructMetadata({
  title,
  absoluteTitle = false,
  titleTemplate,
  description,
  path,
  keywords,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  publishedTime,
  modifiedTime,
}: PageSeo): Metadata {
  const cleanPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`
  const url = `${SITE_URL}${cleanPath}`
  const socialTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`

  return {
    title: absoluteTitle
      ? { absolute: title }
      : titleTemplate
        ? { default: title, template: titleTemplate }
        : title,
    description,
    ...(keywords && keywords.length > 0 ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_KE",
      type: type === "article" ? "article" : "website",
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: socialTitle,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [imageUrl],
    },
  }
}
