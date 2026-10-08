import type { MetadataRoute } from 'next'
import { WEBSITE_URL } from '@/lib/constants'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? WEBSITE_URL
const IS_PROD = process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV === 'production'
  : process.env.NODE_ENV === 'production'

export default function robots(): MetadataRoute.Robots {
  // Bloquea indexación en previews/staging
  if (!IS_PROD) {
    return {
      rules: [{ userAgent: '*', disallow: '/' }],
      sitemap: `${BASE_URL}/sitemap.xml`,
      host: BASE_URL,
    }
  }

  // Producción
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/private/', '/api/'] },
      // Opcional: bloquea scrapers de IA
      { userAgent: 'GPTBot', disallow: '/' },
      { userAgent: 'CCBot', disallow: '/' },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
