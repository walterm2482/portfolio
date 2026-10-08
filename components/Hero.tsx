import { ArrowDown, ArrowUpRight } from 'lucide-react'
import type { Lang } from '@/app/data'

export function Hero({ lang = 'es' }: { lang?: Lang }) {
  const en = lang === 'en'
  return (
    <section
      id={en ? 'start' : 'inicio'}
      aria-label={en ? 'Introduction' : 'Presentación'}
      className="relative isolate overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 px-6 py-12 sm:px-10 sm:py-16 dark:border-zinc-800 dark:bg-zinc-900/60"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-teal-200/40 blur-3xl dark:bg-teal-800/20"
      />
      <p className="text-xs font-semibold tracking-widest text-teal-700 uppercase dark:text-teal-300">
        {en
          ? 'Walter Moya · Data & Quantitative Development'
          : 'Walter Moya · Datos y desarrollo cuantitativo'}
      </p>
      <h1 className="mt-5 max-w-3xl text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
        {en
          ? 'Data, models and software for better decisions.'
          : 'Datos, modelos y software para tomar mejores decisiones.'}
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
        {en
          ? 'I build data pipelines, Machine Learning models and quantitative tools with Python, SQL and C#/.NET. Experience at PwC Chile and ClickAlgo, with published products and open-source projects.'
          : 'Construyo pipelines de datos, modelos de Machine Learning y herramientas cuantitativas con Python, SQL y C#/.NET. Experiencia en PwC Chile y ClickAlgo, con productos publicados y proyectos de código abierto.'}
      </p>
      <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
        {en
          ? 'Industrial Engineer · MSc in Engineering Sciences · Chile'
          : 'Ingeniero Civil Industrial · Magíster en Ciencias de la Ingeniería · Chile'}
      </p>
      <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium">
        <a
          href={en ? '#projects' : '#proyectos'}
          className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-white hover:bg-teal-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-teal-200"
        >
          {en ? 'Explore projects' : 'Explorar proyectos'}{' '}
          <ArrowDown size={16} aria-hidden="true" />
        </a>
        <a
          href={en ? '#contact' : '#contacto'}
          className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-3 hover:border-teal-700 dark:border-zinc-600"
        >
          {en ? 'Get in touch' : 'Conversemos'}{' '}
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
