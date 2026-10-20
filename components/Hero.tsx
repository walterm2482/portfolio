import Image from 'next/image'
import { ArrowDown, MapPin } from 'lucide-react'
import type { Lang } from '@/app/data'
import { CVDownload } from './CVDownload'
import { FeaturedProductCard } from './FeaturedProductCard'

export function Hero({ lang = 'es' }: { lang?: Lang }) {
  const en = lang === 'en'
  return (
    <section
      id={en ? 'start' : 'inicio'}
      aria-label={en ? 'Introduction' : 'Presentación'}
      className="hero-section"
    >
      <div className="hero-grid">
        <div className="relative z-10">
          <div className="hero-identity">
            <Image
              src="/profile/walter-moya.png"
              alt={en ? 'Portrait of Walter Moya' : 'Retrato de Walter Moya'}
              width={80}
              height={80}
              sizes="(min-width: 640px) 80px, 64px"
              className="hero-face"
              priority
            />
            <div className="min-w-0">
              <p className="text-lg font-semibold tracking-tight sm:text-xl">
                Walter Moya
              </p>
              <p className="eyebrow mt-1">
                {en
                  ? 'Data Science & Quantitative Development'
                  : 'Data Science y desarrollo cuantitativo'}
              </p>
            </div>
          </div>
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
        <FeaturedProductCard lang={lang} />
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
