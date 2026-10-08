import type { MetadataRoute } from 'next'
import { WEBSITE_URL } from '@/lib/constants'
import { caseStudyPath, FEATURED_PROJECT_IDS } from '@/lib/project-routes'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? WEBSITE_URL
  const home = ['', '/en'].map((path) => ({
    url: `${base}${path}`,
    alternates: { languages: { es: base, en: `${base}/en` } },
  }))
  const cases = FEATURED_PROJECT_IDS.flatMap((slug) => {
    const es = `${base}${caseStudyPath('es', slug)}`
    const en = `${base}${caseStudyPath('en', slug)}`
    return [es, en].map((url) => ({ url, alternates: { languages: { es, en } } }))
  })
  return [...home, ...cases]
}
