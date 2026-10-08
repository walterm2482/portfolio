import { Geist, Geist_Mono } from 'next/font/google'
import '@/app/globals.css'
import { Header } from '@/app/header'
import { Footer } from '@/app/footer'
import { ThemeProvider } from 'next-themes'
import { PHONE, type Lang } from '@/app/data'

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://waltermoya.vercel.app'

const geist = Geist({ variable: '--font-geist', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export function SiteLayout({
  children,
  lang,
}: {
  children: React.ReactNode
  lang: Lang
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Walter Moya',
    image: `${SITE}/profile/walter-moya.png`,
    email: 'mailto:cg.walter.ma@gmail.com',
    telephone: PHONE,
    url: SITE,
    jobTitle: 'Data Scientist / Quantitative Developer',
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universidad Diego Portales' },
    sameAs: [
      'https://github.com/walterm2482',
      'https://www.linkedin.com/in/walter-moya-araya-a211b9307/',
      'https://www.kaggle.com/waltertmoyaaraya',
    ],
  }

  return (
    <html lang={lang} suppressHydrationWarning>
      {/* eslint-disable-next-line @next/next/no-head-element -- Shared App Router root document. */}
      <head>
        {/* El proveedor de afiliación utiliza el atributo value. */}
        <meta
          name="impact-site-verification"
          {...{ value: '10cc509f-7719-4713-bed3-9f26668108a1' }}
        />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} tracking-tight text-zinc-900 antialiased dark:text-zinc-100`}
      >
        <ThemeProvider
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
          enableSystem
        >
          <div className="mx-auto flex min-h-screen w-full max-w-[1120px] flex-col px-5 pt-28 sm:px-6">
            <Header />
            <main id="contenido" tabIndex={-1} className="flex-1">
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
