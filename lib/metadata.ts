import type { Metadata, Viewport } from 'next'
import type { Lang } from '@/app/data'
import { BRAND_ICONS } from './brand'
import { WEBSITE_URL } from './constants'

export const OPEN_GRAPH_IMAGE = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'Walter Moya — Data Science & Quantitative Development',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f9f7' },
    { media: '(prefers-color-scheme: dark)', color: '#0d1415' },
  ],
}

export function siteMetadata(lang: Lang): Metadata {
  const en = lang === 'en'
  const title = en
    ? 'Walter Moya – Data Science & Quantitative Development'
    : 'Walter Moya – Data Science y Desarrollo Cuantitativo'
  const description = en
    ? 'Industrial Engineer, MSc. Data, Machine Learning and quantitative software with Python, SQL and C#/.NET. Experience at PwC Chile and ClickAlgo.'
    : 'Ingeniero Civil Industrial, MSc. Proyectos de datos, Machine Learning y desarrollo cuantitativo con Python, SQL y C#/.NET. Experiencia en PwC Chile y ClickAlgo.'
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? WEBSITE_URL),
    title: { default: title, template: '%s | Walter Moya' },
    description,
    alternates: {
      canonical: en ? '/en' : '/',
      languages: { es: '/', en: '/en', 'x-default': '/' },
    },
    openGraph: {
      type: 'website',
      url: en ? '/en' : '/',
      title,
      description,
      locale: en ? 'en_US' : 'es_CL',
      images: [OPEN_GRAPH_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OPEN_GRAPH_IMAGE],
    },
    robots: { index: true, follow: true },
    icons: BRAND_ICONS,
  }
}
