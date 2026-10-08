// app/en/layout.tsx
import type { Metadata } from 'next'
import { BRAND_ICONS } from '@/lib/brand'
import '../globals.css'

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://waltermoya.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  alternates: {
    canonical: '/en',
    languages: { es: '/', en: '/en', 'x-default': '/' },
  },
  title: {
    default: 'Walter Moya – Data Science & Quantitative Development',
    template: '%s | Walter Moya',
  },
  description:
    'Industrial Engineer, MSc. Data, Machine Learning and quantitative software with Python, SQL and C#/.NET. Experience at PwC Chile and ClickAlgo.',
  openGraph: {
    type: 'website',
    url: '/en',
    title: 'Walter Moya – Data Science & Quantitative Development',
    description:
      'Industrial Engineer, MSc. Data, Machine Learning and quantitative software with Python, SQL and C#/.NET. Experience at PwC Chile and ClickAlgo.',
    images: ['/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Walter Moya – Data Science & Quantitative Development',
    description:
      'Industrial Engineer, MSc. Data, Machine Learning and quantitative software with Python, SQL and C#/.NET. Experience at PwC Chile and ClickAlgo.',
    images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true },
  icons: BRAND_ICONS,
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return children
}
