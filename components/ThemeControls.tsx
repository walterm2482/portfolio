'use client'

import { useEffect, useState } from 'react'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import type { Lang } from '@/app/data'

export function ThemeControls({
  lang,
  compact = false,
}: {
  lang: Lang
  compact?: boolean
}) {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()
  const en = lang === 'en'
  useEffect(() => setMounted(true), [])
  if (!mounted)
    return <span aria-hidden="true" className={compact ? 'h-9 w-9' : 'h-9 w-28'} />
  if (compact) {
    const dark = resolvedTheme === 'dark'
    const Icon = dark ? Sun : Moon
    return (
      <button
        type="button"
        onClick={() => setTheme(dark ? 'light' : 'dark')}
        aria-label={
          en
            ? `Switch to ${dark ? 'light' : 'dark'} theme`
            : `Cambiar a tema ${dark ? 'claro' : 'oscuro'}`
        }
        className="icon-button"
      >
        <Icon size={17} aria-hidden="true" />
      </button>
    )
  }
  const options = [
    { id: 'light', icon: Sun, label: en ? 'Light theme' : 'Tema claro' },
    { id: 'dark', icon: Moon, label: en ? 'Dark theme' : 'Tema oscuro' },
    { id: 'system', icon: Monitor, label: en ? 'System theme' : 'Tema del sistema' },
  ]
  return (
    <div
      className="flex gap-1 rounded-full border border-zinc-200 p-1 dark:border-zinc-700"
      role="group"
      aria-label={en ? 'Appearance' : 'Apariencia'}
    >
      {options.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          type="button"
          aria-label={label}
          aria-pressed={theme === id}
          onClick={() => setTheme(id)}
          className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 transition-colors hover:text-teal-700 aria-pressed:bg-white aria-pressed:text-teal-700 aria-pressed:shadow-sm dark:text-zinc-400 dark:aria-pressed:bg-zinc-800 dark:aria-pressed:text-teal-300"
        >
          <Icon size={15} aria-hidden="true" />
        </button>
      ))}
    </div>
  )
}
