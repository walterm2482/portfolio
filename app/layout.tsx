// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://waltermoya.vercel.app'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  alternates: {
    canonical: '/',
    languages: { es: '/', en: '/en', 'x-default': '/' },
  },
  title: { default: 'Walter Moya – IA y Datos', template: '%s | Walter Moya' },
  description:
    'Soluciones de IA y datos precisas, eficientes y escalables. Portafolio de Walter Moya.',
  openGraph: {
    type: 'website',
    url: SITE,
    title: 'Walter Moya – IA y Datos',
    description: 'Soluciones de IA y datos precisas, eficientes y escalables.',
    images: ['/cover.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Walter Moya – IA y Datos',
    description: 'Soluciones de IA y datos precisas, eficientes y escalables.',
    images: ['/cover.jpg'],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico' },
}

const geist = Geist({ variable: '--font-geist', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Walter Moya',
    email: 'mailto:cg.walter.ma@gmail.com',
    url: SITE,
    affiliation: {
      '@type': 'Organization',
      name: 'CRAFIUM',
      description: 'Corte y grabado láser',
    },
  }

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* El proveedor de afiliación utiliza el atributo value. */}
        <meta
          name="impact-site-verification"
          {...{ value: '10cc509f-7719-4713-bed3-9f26668108a1' }}
        />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100`}
      >
        <ThemeProvider
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
          enableSystem
        >
          <div className="mx-auto flex min-h-screen w-full max-w-[1040px] flex-col px-4 pt-28 sm:pt-24">
            <Header />
            <main id="contenido" className="flex-1 space-y-28 md:space-y-32">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
