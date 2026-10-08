import Image from 'next/image'
import { ArrowDown, Braces, CheckCheck, Database, MapPin } from 'lucide-react'
import type { Lang } from '@/app/data'
import { CVDownload } from './CVDownload'

export function Hero({
  lang = 'es',
  portrait = false,
}: {
  lang?: Lang
  portrait?: boolean
}) {
  const en = lang === 'en'
  const steps = [
    {
      icon: Database,
      label: en ? 'Understand the data' : 'Entender los datos',
      detail: en ? 'Context, quality and exploration' : 'Contexto, calidad y exploración',
    },
    {
      icon: Braces,
      label: en ? 'Build the solution' : 'Construir la solución',
      detail: en ? 'Models, pipelines and software' : 'Modelos, pipelines y software',
    },
    {
      icon: CheckCheck,
      label: en ? 'Validate and communicate' : 'Validar y comunicar',
      detail: en ? 'Evidence, limits and decisions' : 'Evidencia, límites y decisiones',
    },
  ]
  return (
    <section
      id={en ? 'start' : 'inicio'}
      aria-label={en ? 'Introduction' : 'Presentación'}
      className="hero-section"
    >
      <div className="hero-grid">
        <div className="relative z-10">
          <p className="eyebrow mb-6 flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full bg-teal-600 dark:bg-teal-300"
              aria-hidden="true"
            />
            Data Science & Quantitative Development
          </p>
          <h1 className="hero-title">
            {en ? 'Data, models and software.' : 'Datos, modelos y software.'}
            <span className="block text-teal-700 dark:text-teal-300">
              {en ? 'Decisions with purpose.' : 'Decisiones con criterio.'}
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-300">
            {en
              ? 'I’m Walter Moya, an Industrial Engineer and MSc in Engineering Sciences. I build data pipelines, Machine Learning models and quantitative tools that connect technical analysis with real problems.'
              : 'Soy Walter Moya, Ingeniero Civil Industrial y Magíster en Ciencias de la Ingeniería. Construyo pipelines de datos, modelos de Machine Learning y herramientas cuantitativas que conectan el análisis técnico con problemas reales.'}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={en ? '#projects' : '#proyectos'} className="button-primary">
              {en ? 'View projects' : 'Ver proyectos'}{' '}
              <ArrowDown size={16} aria-hidden="true" />
            </a>
            <CVDownload lang={lang} />
          </div>
          <p className="mt-6 flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
            <MapPin size={14} aria-hidden="true" />
            {en
              ? 'Santiago, Chile · On-site, hybrid or remote'
              : 'Santiago, Chile · Presencial, híbrido o remoto'}
          </p>
        </div>
        {portrait ? (
          <div className="hero-portrait">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem]">
              <Image
                src="/walter-moya.png"
                alt="Walter Moya"
                fill
                sizes="(min-width: 1024px) 360px, (min-width: 768px) 35vw, 85vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="relative mx-4 -mt-10 rounded-xl border border-white/60 bg-white/95 p-4 shadow-lg backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/95">
              <p className="font-semibold">Walter Moya</p>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                Python · SQL · C#/.NET
              </p>
            </div>
          </div>
        ) : (
          <div className="workflow-card">
            <div className="mb-8 flex items-center justify-between border-b border-white/15 pb-4">
              <p className="font-mono text-[10px] tracking-[0.18em] text-teal-200 uppercase">
                {en ? 'An engineering mindset' : 'Una mirada de ingeniería'}
              </p>
              <span className="font-mono text-[10px] text-teal-200/60">WM / 01</span>
            </div>
            <ol className="space-y-7">
              {steps.map(({ icon: Icon, label, detail }, index) => (
                <li key={label} className="relative flex gap-4">
                  {index < 2 && (
                    <span
                      aria-hidden="true"
                      className="absolute top-10 left-5 h-8 border-l border-dashed border-white/20"
                    />
                  )}
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-teal-200/20 bg-white/5 text-teal-200">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-white">{label}</p>
                    <p className="mt-1 text-xs leading-relaxed text-teal-100/65">
                      {detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-2 border-t border-white/15 pt-5 font-mono text-[10px] text-teal-100/80">
              {['Python', 'SQL', 'C#/.NET'].map((item) => (
                <span key={item} className="rounded border border-white/15 px-2.5 py-1.5">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="hero-proof">
        <p className="eyebrow text-zinc-500 dark:text-zinc-400">
          {en ? 'Experience & education' : 'Experiencia y formación'}
        </p>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-medium text-zinc-600 dark:text-zinc-300">
          <span>PwC Chile</span>
          <span>
            ClickAlgo{' '}
            <span className="text-xs font-normal text-zinc-500 dark:text-zinc-400">
              / UK
            </span>
          </span>
          <span>Universidad Diego Portales</span>
        </div>
      </div>
    </section>
  )
}
