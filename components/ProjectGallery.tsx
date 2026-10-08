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
        className="mb-6 flex flex-wrap gap-2"
        role="group"
        aria-label={en ? 'Filter projects' : 'Filtrar proyectos'}
      >
        {filters.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            aria-pressed={filter === id}
            onClick={() => setFilter(id)}
            className="rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-600 aria-pressed:border-teal-700 aria-pressed:bg-teal-700 aria-pressed:text-white dark:border-zinc-700 dark:text-zinc-300 dark:aria-pressed:border-teal-400 dark:aria-pressed:bg-teal-400 dark:aria-pressed:text-zinc-950"
          >
            {label}
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
            className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50"
          >
            <div className="border-b border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-950">
              <ProjectMedia
                image={project.image}
                video={project.video}
                poster={project.poster}
                index={index}
                alt={project.name}
                lang={lang}
              />
            </div>
            <div className="flex flex-1 flex-col gap-4 p-5">
              <div>
                <p className="mb-2 text-xs font-medium tracking-wide text-teal-700 dark:text-teal-300">
                  {project.role}
                </p>
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
                  <li
                    key={technology}
                    className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                  >
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
                    {en ? 'Read case study' : 'Ver caso de estudio'}
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
              <div className="mt-auto flex flex-wrap gap-4 pt-2 text-sm font-medium">
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
