// app/en/layout.tsx
import type { Metadata } from 'next'
import '../globals.css'

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://waltermoya.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  alternates: {
    canonical: '/en',
    languages: { es: '/', en: '/en', 'x-default': '/' },
  },
  title: { default: 'Walter Moya – AI & Data', template: '%s | Walter Moya' },
  description: 'Accurate, efficient and scalable AI & data solutions.',
  openGraph: {
    type: 'website',
    url: '/en',
    title: 'Walter Moya – AI & Data',
    description: 'Accurate, efficient and scalable AI & data solutions.',
    images: ['/cover.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Walter Moya – AI & Data',
    description: 'Accurate, efficient and scalable AI & data solutions.',
    images: ['/cover.jpg'],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico' },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return children
}
