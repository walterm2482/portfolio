'use client'

import { ArrowUpRight } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { ThemeControls } from '@/components/ThemeControls'

export function Footer() {
  const en = (usePathname() || '/').startsWith('/en')
  return (
    <footer className="site-footer">
      <div>
        <p className="text-sm font-semibold">
          Walter Moya<span className="text-teal-700 dark:text-teal-300">.</span>
        </p>
        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} ·{' '}
          {en ? 'Engineering, data and software.' : 'Ingeniería, datos y software.'}
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-5">
        <a
          href={en ? '/en#start' : '/#inicio'}
          className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-teal-700 dark:text-zinc-400 dark:hover:text-teal-300"
        >
          {en ? 'Back to top' : 'Volver al inicio'}
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
        <ThemeControls lang={en ? 'en' : 'es'} />
      </div>
    </footer>
  )
}
