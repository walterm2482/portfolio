'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { ThemeControls } from '@/components/ThemeControls'

const SECTIONS = [
  { es: 'proyectos', en: 'projects', labelEs: 'Proyectos', labelEn: 'Projects' },
  { es: 'perfil', en: 'about', labelEs: 'Perfil', labelEn: 'About' },
  { es: 'experiencia', en: 'experience', labelEs: 'Experiencia', labelEn: 'Experience' },
  { es: 'blog', en: 'blog', labelEs: 'Notebooks', labelEn: 'Notebooks' },
  { es: 'contacto', en: 'contact', labelEs: 'Contacto', labelEn: 'Contact' },
]

export function Header() {
  const pathname = usePathname() || '/'
  const en = pathname.startsWith('/en')
  const base = en ? '/en' : '/'
  const home = pathname === base
  const [active, setActive] = useState('')
  const [hash, setHash] = useState('')
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLButtonElement>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    document.documentElement.lang = en ? 'en' : 'es'
    setOpen(false)
  }, [en, pathname])
  useEffect(() => {
    const update = () => setHash(window.location.hash)
    update()
    window.addEventListener('hashchange', update)
    return () => window.removeEventListener('hashchange', update)
  }, [pathname])
  useEffect(() => {
    if (!home) return
    const visible = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        })
        const current = SECTIONS.find((section) =>
          visible.has(en ? section.en : section.es),
        )
        setActive(current ? (en ? current.en : current.es) : '')
      },
      { rootMargin: '-15% 0px -65% 0px', threshold: 0 },
    )
    SECTIONS.forEach((section) => {
      const node = document.getElementById(en ? section.en : section.es)
      if (node) observer.observe(node)
    })
    return () => observer.disconnect()
  }, [en, home])
  useEffect(() => {
    if (!open) return
    navRef.current?.querySelector('a')?.focus()
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuRef.current?.focus()
      }
    }
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  }, [open])

  const section = SECTIONS.find((item) => `#${en ? item.en : item.es}` === hash)
  const nextHash = section ? `#${en ? section.es : section.en}` : ''
  const switchHref = `${en ? '/' : '/en'}${home ? nextHash : ''}`

  return (
    <header className="site-header">
      <a href="#contenido" className="skip-link">
        {en ? 'Skip to content' : 'Saltar al contenido'}
      </a>
      <div className="header-inner">
        <Link
          href={base}
          aria-label={en ? 'Walter Moya, home' : 'Walter Moya, inicio'}
          className="flex shrink-0 items-center gap-3"
        >
          <span className="brand-mark" aria-hidden="true">
            wm<span>.</span>
          </span>
          <span className="text-sm font-semibold tracking-tight">Walter Moya</span>
        </Link>
        <nav
          ref={navRef}
          id="main-navigation"
          data-open={open}
          aria-label={en ? 'Main navigation' : 'Navegación principal'}
          className="site-nav"
        >
          {SECTIONS.map((item) => {
            const id = en ? item.en : item.es
            return (
              <a
                key={id}
                href={`${home ? '' : base}#${id}`}
                onClick={() => setOpen(false)}
                aria-current={active === id && home ? 'location' : undefined}
                className="nav-link"
              >
                {en ? item.labelEn : item.labelEs}
              </a>
            )
          })}
        </nav>
        <div className="flex items-center gap-1.5">
          <Link
            href={switchHref}
            aria-label={en ? 'Cambiar a español' : 'Switch to English'}
            className="icon-button font-mono text-xs font-medium"
          >
            {en ? 'ES' : 'EN'}
          </Link>
          <ThemeControls lang={en ? 'en' : 'es'} compact />
          <button
            ref={menuRef}
            type="button"
            aria-controls="main-navigation"
            aria-expanded={open}
            aria-label={
              en
                ? open
                  ? 'Close navigation'
                  : 'Open navigation'
                : open
                  ? 'Cerrar navegación'
                  : 'Abrir navegación'
            }
            onClick={() => setOpen(!open)}
            className="icon-button mobile-menu-button"
          >
            {open ? (
              <X size={19} aria-hidden="true" />
            ) : (
              <Menu size={19} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
