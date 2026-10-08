import type { MetadataRoute } from 'next'
import { WEBSITE_URL } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? WEBSITE_URL
  return ['', '/en'].map((path) => ({
    url: `${base}${path}`,
    alternates: { languages: { es: base, en: `${base}/en` } },
  }))
}
