import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { getData, type Lang } from '@/app/data'
import { caseStudyPath } from '@/lib/project-routes'
import { SGU_USER_GUIDES } from '@/lib/sgu'

// Hero card: the published product as proof, beside the introduction.
export function FeaturedProductCard({ lang }: { lang: Lang }) {
  const en = lang === 'en'
  const project = getData(lang).PROJECTS.find((item) => item.id === 'fsg-ultimate')!
  const guide = SGU_USER_GUIDES[lang]
  const published = new Intl.DateTimeFormat(en ? 'en-GB' : 'es-CL', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${guide.publishedAt}T00:00:00Z`))
  return (
    <div className="workflow-card">
      <div className="mb-5 flex items-center justify-between">
        <p className="font-mono text-[10px] tracking-[0.18em] text-teal-200 uppercase">
          {en ? 'Featured product' : 'Producto destacado'}
        </p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 inline-flex items-center gap-1 text-[11px] text-teal-100/70 hover:text-white"
        >
          cTrader Store
          <ArrowUpRight size={12} aria-hidden="true" />
        </a>
      </div>
      <div className="relative aspect-video overflow-hidden rounded-xl ring-1 ring-white/15">
        <Image
          src={project.thumbnail!}
          alt=""
          fill
          sizes="(min-width: 900px) 360px, 0px"
          className="object-cover"
        />
      </div>
      <p className="mt-5 text-lg font-semibold tracking-tight text-white">
        {project.name}
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-teal-100/70">
        {en
          ? 'Mean-reversion cBot published on cTrader Store, with basket risk controls.'
          : 'cBot de reversión a la media publicado en cTrader Store, con control de riesgo por cesta.'}
      </p>
      <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-white/15 pt-4">
        {[
          [en ? 'Version' : 'Versión', guide.version],
          [en ? 'Updated' : 'Actualizado', published],
          [en ? 'User guide' : 'Guía', `${guide.pages} ${en ? 'pages' : 'págs.'}`],
        ].map(([label, value]) => (
          <div key={label}>
            <dt className="text-[11px] text-teal-100/60">{label}</dt>
            <dd className="mt-1 text-sm font-medium text-white">{value}</dd>
          </div>
        ))}
      </dl>
      <Link
        href={caseStudyPath(lang, 'fsg-ultimate')}
        className="relative z-10 mt-5 inline-flex items-center gap-2 text-sm font-medium text-white hover:underline"
      >
        {en ? 'Read the case study' : 'Ver caso de estudio'}
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </div>
  )
}
