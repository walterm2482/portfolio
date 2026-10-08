'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Code2, Plus, Minus } from 'lucide-react'
import { ProjectMedia } from '@/components/ui/ProjectMedia'
import type { Lang, Project } from '@/app/data'
import { caseStudyPath, hasCaseStudy } from '@/lib/project-routes'

export function ProjectGallery({ projects, lang }: { projects: Project[]; lang: Lang }) {
  const [filter, setFilter] = useState('all')
  const [expanded, setExpanded] = useState(false)
  const en = lang === 'en'
  const filters = [
    { id: 'all', label: en ? 'All projects' : 'Todos' },
    {
      id: 'quant',
      label: en ? 'Quantitative development' : 'Desarrollo cuantitativo',
    },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'data', label: en ? 'Data analytics' : 'Análisis de datos' },
  ]
  const visible = projects.filter((project) =>
    expanded
      ? filter === 'all' || (project.category ?? 'quant') === filter
      : hasCaseStudy(project.id),
  )

  return (
    <div>
      <div className="gallery-toolbar">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {expanded
            ? en
              ? 'The full collection'
              : 'La colección completa'
            : en
              ? 'Three projects. Three approaches.'
              : 'Tres proyectos. Tres enfoques.'}
        </p>
        <button
          type="button"
          className="gallery-toggle"
          aria-expanded={expanded}
          aria-controls="project-grid"
          onClick={() => {
            setExpanded(!expanded)
            setFilter('all')
          }}
        >
          {expanded ? (
            <Minus size={16} aria-hidden="true" />
          ) : (
            <Plus size={16} aria-hidden="true" />
          )}
          {expanded
            ? en
              ? 'Show featured projects'
              : 'Ver solo destacados'
            : en
              ? 'View all projects'
              : 'Ver todos los proyectos'}
          {!expanded && (
            <span className="font-mono text-xs opacity-70">{projects.length}</span>
          )}
        </button>
      </div>
      {expanded && (
        <div
          className="mb-7 flex flex-wrap gap-2"
          role="group"
          aria-label={en ? 'Filter projects' : 'Filtrar proyectos'}
        >
          {filters.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              aria-pressed={filter === id}
              onClick={() => setFilter(id)}
              className="project-filter"
            >
              {label}
              <span className="filter-count" aria-hidden="true">
                {id === 'all'
                  ? projects.length
                  : projects.filter((project) => (project.category ?? 'quant') === id)
                      .length}
              </span>
            </button>
          ))}
        </div>
      )}
      <p className="sr-only" role="status" aria-live="polite">
        {visible.length} {en ? 'projects shown' : 'proyectos mostrados'}
      </p>
      <div id="project-grid" className="project-grid">
        {visible.map((project, index) => (
          <article
            key={project.id}
            className="project-card"
            data-featured={hasCaseStudy(project.id)}
          >
            <div className="project-media">
              <ProjectMedia
                image={project.image}
                video={project.video}
                poster={project.poster}
                index={index}
                alt={project.name}
                lang={lang}
              />
            </div>
            <div className="project-body">
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    {project.role}
                  </p>
                  <span className="project-status">
                    {project.code
                      ? en
                        ? 'Open source'
                        : 'Código abierto'
                      : project.link
                        ? en
                          ? 'Published product'
                          : 'Producto publicado'
                        : en
                          ? 'Public notebook'
                          : 'Notebook público'}
                  </span>
                </div>
                <h3 className="text-xl leading-snug font-semibold tracking-tight">
                  {hasCaseStudy(project.id) ? (
                    <Link
                      href={caseStudyPath(lang, project.id)}
                      className="hover:text-teal-700 dark:hover:text-teal-300"
                    >
                      {project.name}
                    </Link>
                  ) : (
                    <a
                      href={project.link ?? project.demo ?? project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-teal-700 dark:hover:text-teal-300"
                    >
                      {project.name}
                    </a>
                  )}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
              <ul
                className="flex flex-wrap gap-1.5"
                aria-label={en ? 'Technologies' : 'Tecnologías'}
              >
                {project.stack.slice(0, 4).map((technology) => (
                  <li key={technology} className="tech-tag">
                    {technology}
                  </li>
                ))}
                {project.stack.length > 4 && (
                  <li
                    className="tech-tag"
                    title={project.stack.slice(4).join(', ')}
                    aria-label={`${en ? 'Also: ' : 'También: '}${project.stack.slice(4).join(', ')}`}
                  >
                    +{project.stack.length - 4}
                  </li>
                )}
              </ul>
              {project.metrics?.length ? (
                <dl className="flex flex-wrap gap-x-6 gap-y-2 border-t border-zinc-100 pt-3 text-sm dark:border-zinc-800">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dt className="text-xs text-zinc-500 dark:text-zinc-400">
                        {metric.label}
                      </dt>
                      <dd className="mt-1 font-medium">{metric.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}
              {project.caseStudy && !hasCaseStudy(project.id) && (
                <details className="text-sm text-zinc-600 dark:text-zinc-400">
                  <summary className="cursor-pointer font-medium text-zinc-900 dark:text-zinc-200">
                    {en ? 'Inside the project' : 'Cómo lo construí'}
                  </summary>
                  <div className="mt-3 space-y-2 leading-relaxed">
                    <p>
                      <strong>{en ? 'Problem: ' : 'Problema: '}</strong>
                      {project.caseStudy.problem}
                    </p>
                    <p>
                      <strong>{en ? 'Approach: ' : 'Enfoque: '}</strong>
                      {project.caseStudy.approach}
                    </p>
                    <p>
                      <strong>{en ? 'Result: ' : 'Resultado: '}</strong>
                      {project.caseStudy.result}
                    </p>
                  </div>
                </details>
              )}
              <div className="mt-auto flex flex-wrap gap-x-4 gap-y-3 border-t border-zinc-100 pt-4 text-sm font-medium dark:border-zinc-800">
                {hasCaseStudy(project.id) && (
                  <Link href={caseStudyPath(lang, project.id)} className="case-link">
                    {en ? 'Read case study' : 'Ver caso de estudio'}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                )}
                {(project.link || project.demo) && (
                  <a
                    href={project.link ?? project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-teal-700 hover:underline dark:text-teal-300"
                  >
                    {project.link?.includes('ctrader.com')
                      ? en
                        ? 'View on cTrader'
                        : 'Ver en cTrader'
                      : project.link?.includes('clickalgo.com')
                        ? en
                          ? 'View on ClickAlgo'
                          : 'Ver en ClickAlgo'
                        : en
                          ? 'View notebook'
                          : 'Ver notebook'}
                    <ArrowUpRight aria-hidden="true" size={16} />
                  </a>
                )}
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:underline"
                  >
                    <Code2 aria-hidden="true" size={16} />
                    {en ? 'Source code' : 'Código fuente'}
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
