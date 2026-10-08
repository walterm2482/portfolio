'use client'

import { useState } from 'react'
import { ArrowUpRight, Code2 } from 'lucide-react'
import { ProjectMedia } from '@/components/ui/ProjectMedia'
import type { Lang, Project } from '@/app/data'

export function ProjectGallery({ projects, lang }: { projects: Project[]; lang: Lang }) {
  const [filter, setFilter] = useState('all')
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
  const visible = projects.filter(
    (project) => filter === 'all' || (project.category ?? 'quant') === filter,
  )

  return (
    <div>
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
      <p className="sr-only" role="status" aria-live="polite">
        {visible.length} {en ? 'projects shown' : 'proyectos mostrados'}
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {visible.map((project, index) => (
          <article
            key={project.id}
            className="project-card"
            data-featured={
              project.id === 'fsg-ultimate' || project.id === 'portfolio-optimizer'
            }
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
                  <p className="text-[10px] font-medium tracking-wide text-zinc-500 dark:text-zinc-400">
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
                  <a
                    href={project.link ?? project.demo ?? project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-700 dark:hover:text-teal-300"
                  >
                    {project.name}
                  </a>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
              <ul
                className="flex flex-wrap gap-1.5"
                aria-label={en ? 'Technologies' : 'Tecnologías'}
              >
                {project.stack.map((technology) => (
                  <li key={technology} className="tech-tag">
                    {technology}
                  </li>
                ))}
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
              {project.caseStudy && (
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
              <div className="mt-auto flex flex-wrap gap-4 border-t border-zinc-100 pt-4 text-xs font-medium dark:border-zinc-800">
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
