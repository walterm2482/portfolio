'use client'
import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const ES = ['proyectos', 'experiencia', 'blog', 'contacto'] as const
const EN = ['projects', 'experience', 'blog', 'contact'] as const
type SecEs = (typeof ES)[number]
type SecEn = (typeof EN)[number]
type Sec = SecEs | SecEn

export function Header() {
  const pathnameRaw = usePathname()
  const pathname = pathnameRaw || '/'
  const isEn = pathname.startsWith('/en')
  const SECTIONS = isEn ? EN : ES

  const [active, setActive] = useState<Sec>(SECTIONS[0])

  // observar secciones
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const el = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (el) setActive(el.target.id as Sec)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )
    SECTIONS.forEach((id) => {
      const node = document.getElementById(id)
      if (node) obs.observe(node)
    })
    return () => obs.disconnect()
  }, [SECTIONS.join('|')]) // reata al cambiar idioma

  const mapEsToEn: Record<string, string> = {
    '#proyectos': '#projects',
    '#experiencia': '#experience',
    '#blog': '#blog',
    '#contacto': '#contact',
  }
  const mapEnToEs: Record<string, string> = {
    '#projects': '#proyectos',
    '#experience': '#experiencia',
    '#blog': '#blog',
    '#contact': '#contacto',
  }

  const [hash, setHash] = useState('')
  useEffect(() => {
    setHash(window.location.hash)
  }, [])

  const toggledHash = useMemo(
    () => (isEn ? mapEnToEs[hash] ?? '' : mapEsToEn[hash] ?? ''),
    [isEn, hash]
  )

  const toEsPath = (p: string) => p.replace(/^\/en(?=\/|$)/, '') || '/'
  const toEnPath = (p: string) => ('/en' + (p === '/' ? '' : p)).replace(/\/{2,}/g, '/')
  const toggledPath = isEn ? toEsPath(pathname) : toEnPath(pathname)
  const switchHref = `${toggledPath}${toggledHash}`

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white/70 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 rounded-md bg-zinc-900 px-3 py-1 text-xs text-white dark:bg-zinc-100 dark:text-zinc-900"
      >
        {isEn ? 'Skip to content' : 'Saltar al contenido'}
      </a>

      <div className="mx-auto flex h-14 max-w-[720px] items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Link href={isEn ? '/en' : '/'} aria-label={isEn ? 'Home' : 'Inicio'} className="shrink-0">
            <Image
              src="/projects/logo.webp"
              alt="Walter Moya logo"
              width={120}
              height={30}
              priority
              className="h-8 w-auto"
            />
          </Link>
          <span className="text-sm font-medium">Walter Moya</span>
        </div>

        <nav className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? 'true' : undefined}
              data-current={active === id}
              className="rounded-md px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 data-[current=true]:text-zinc-900 dark:data-[current=true]:text-zinc-100"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}

          <Link
            href={switchHref}
            aria-label={isEn ? 'Cambiar a español' : 'Switch to English'}
            className="rounded-md px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600"
          >
            {isEn ? 'ES' : 'EN'}
          </Link>
        </nav>
      </div>
    </header>
  )
}
