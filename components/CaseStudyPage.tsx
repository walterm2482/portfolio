import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCheck } from 'lucide-react'
import { getData, type Lang } from '@/app/data'
import { getCaseStudy } from '@/app/case-studies'
import { caseStudyPath, FEATURED_PROJECT_IDS, type CaseSlug } from '@/lib/project-routes'
import { ProjectMedia } from './ui/ProjectMedia'
import { ContactSection } from './ContactSection'

const imageRatios: Record<string, string> = {
  '/projects/cases/fsg-signal.webp': '1 / 1',
  '/projects/cases/portfolio-dashboard.png': '1133 / 1293',
  '/projects/cases/portfolio-equity.png': '1144 / 1102',
  '/projects/cases/ml-api-predict.png': '972 / 108',
  '/projects/cases/ml-training.png': '969 / 160',
}

export function CaseStudyPage({ lang, slug }: { lang: Lang; slug: CaseSlug }) {
  const en = lang === 'en'
  const study = getCaseStudy(lang, slug)
  const project = getData(lang).PROJECTS.find((item) => item.id === slug)!
  const nextSlug =
    FEATURED_PROJECT_IDS[
      (FEATURED_PROJECT_IDS.indexOf(slug) + 1) % FEATURED_PROJECT_IDS.length
    ]
  const next = getCaseStudy(lang, nextSlug)
  const home = en ? '/en' : '/'

  function Screenshot({ index }: { index: number }) {
    const screenshot = study.screenshots[index]
    return (
      <figure className="case-figure" data-project={slug}>
        <div className="case-image">
          <ProjectMedia
            image={screenshot.image}
            alt={screenshot.alt}
            lang={lang}
            index={index}
            imageAspectRatio={imageRatios[screenshot.image]}
          />
        </div>
        <figcaption className="flex flex-wrap justify-between gap-3 px-1 pt-4 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
          <span>{screenshot.caption}</span>
          <a
            href={screenshot.source}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-teal-700 hover:underline dark:text-teal-300"
          >
            {en ? 'Original source' : 'Fuente original'}{' '}
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </figcaption>
      </figure>
    )
  }

  return (
    <>
      <article className="case-study">
        <Link
          href={`${home}#${en ? 'projects' : 'proyectos'}`}
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-teal-700 dark:text-zinc-400 dark:hover:text-teal-300"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          {en ? 'All projects' : 'Volver a proyectos'}
        </Link>
        <header className="case-intro">
          <p className="eyebrow">
            {en ? 'Case study' : 'Caso de estudio'} / {study.category}
          </p>
          <h1 className="case-title">{study.title}</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-600 sm:text-xl dark:text-zinc-300">
            {study.lead}
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{study.scope}</p>
          <ul
            className="flex flex-wrap gap-2"
            aria-label={en ? 'Technologies' : 'Tecnologías'}
          >
            {project.stack.map((item) => (
              <li className="tech-tag" key={item}>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={project.code ?? project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary w-fit"
          >
            {project.code
              ? en
                ? 'Explore the repository'
                : 'Explorar repositorio'
              : en
                ? 'View product'
                : 'Ver producto'}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </header>
        <Screenshot index={0} />
        <div className="case-context">
          <section aria-labelledby="case-problem">
            <p className="eyebrow">01 / {en ? 'Context' : 'Contexto'}</p>
            <h2 id="case-problem" className="case-heading">
              {en ? 'The problem' : 'El problema'}
            </h2>
            <p className="case-copy">{study.problem}</p>
          </section>
          <section aria-labelledby="case-contribution">
            <p className="eyebrow">02 / {en ? 'My role' : 'Mi aporte'}</p>
            <h2 id="case-contribution" className="case-heading">
              {en ? 'What I built' : 'Qué construí'}
            </h2>
            <ul className="space-y-4">
              {study.contribution.map((item) => (
                <li key={item} className="case-copy flex gap-3">
                  <CheckCheck
                    size={17}
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-teal-700 dark:text-teal-300"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
        <ol
          className="case-flow"
          aria-label={en ? 'Solution workflow' : 'Flujo de la solución'}
        >
          {study.flow.map((step, index) => (
            <li key={step}>
              <span className="font-mono text-xs text-teal-700 dark:text-teal-300">
                0{index + 1}
              </span>
              <span>{step}</span>
              {index < 2 && (
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="ml-auto shrink-0 opacity-40"
                />
              )}
            </li>
          ))}
        </ol>
        <section aria-labelledby="case-decisions" className="case-section">
          <p className="eyebrow">03 / {en ? 'Engineering' : 'Ingeniería'}</p>
          <h2 id="case-decisions" className="case-heading">
            {en ? 'Technical decisions' : 'Decisiones técnicas'}
          </h2>
          <div className="case-card-grid">
            {study.decisions.map((decision) => (
              <div key={decision.title} className="case-card">
                <h3 className="text-base font-semibold">{decision.title}</h3>
                <p className="case-copy mt-3">{decision.text}</p>
              </div>
            ))}
          </div>
        </section>
        {study.screenshots.slice(1).map((screenshot, index) => (
          <Screenshot key={screenshot.image} index={index + 1} />
        ))}
        <section aria-labelledby="case-results" className="case-section case-results">
          <p className="eyebrow">04 / {en ? 'Evidence' : 'Evidencia'}</p>
          <h2 id="case-results" className="case-heading">
            {en ? 'Verified deliverables' : 'Resultados verificables'}
          </h2>
          <dl className="case-card-grid">
            {study.results.map((result) => (
              <div key={result.title}>
                <dt className="text-lg font-semibold tracking-tight">{result.title}</dt>
                <dd className="case-copy mt-2">{result.text}</dd>
              </div>
            ))}
          </dl>
          <p className="case-copy mt-6 border-t border-zinc-200 pt-5 dark:border-zinc-700">
            {study.limitation}
          </p>
        </section>
        <section aria-labelledby="case-sources" className="case-section">
          <h2 id="case-sources" className="text-sm font-semibold">
            {en ? 'Sources & documentation' : 'Fuentes y documentación'}
          </h2>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
            {study.sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-teal-700 hover:underline dark:text-teal-300"
                >
                  {source.label}
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </section>
        <Link href={caseStudyPath(lang, nextSlug)} className="case-next group">
          <div>
            <p className="eyebrow">{en ? 'Next case study' : 'Siguiente caso'}</p>
            <p className="mt-2 text-xl font-semibold">{next.title}</p>
          </div>
          <ArrowRight
            size={24}
            aria-hidden="true"
            className="shrink-0 transition-transform group-hover:translate-x-1"
          />
        </Link>
      </article>
      <ContactSection lang={lang} />
    </>
  )
}
