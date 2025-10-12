'use client'

import { AnimatedBackground } from '@/components/ui/animated-background'
import { TextLoop } from '@/components/ui/text-loop'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const THEMES_OPTIONS = [
  { label: 'Light', id: 'light', icon: <SunIcon className="h-4 w-4" /> },
  { label: 'Dark', id: 'dark', icon: <MoonIcon className="h-4 w-4" /> },
  { label: 'System', id: 'system', icon: <MonitorIcon className="h-4 w-4" /> },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <AnimatedBackground
      role="radiogroup"
      aria-label="Selector de tema"
      className="rounded-lg bg-zinc-100 dark:bg-zinc-800"
      defaultValue={theme}
      transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
      enableHover={false}
      onValueChange={(id) => setTheme(id as string)}
    >
      {THEMES_OPTIONS.map((opt) => {
        const checked = theme === opt.id
        return (
          <button
            key={opt.id}
            type="button"
            role="radio"
            aria-checked={checked}
            aria-label={`Cambiar a tema ${opt.label}`}
            data-id={opt.id}
            className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
            onClick={() => setTheme(opt.id)}
            data-checked={checked}
          >
            {opt.icon}
          </button>
        )
      })}
    </AnimatedBackground>
  )
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <TextLoop className="text-xs text-zinc-500">
          <span>© {new Date().getFullYear()} Walter Moya Araya.</span>
          <span>Fundador de CRAFIUM · Corte y Grabado Láser.</span>
        </TextLoop>
        <div className="text-xs text-zinc-400">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}
