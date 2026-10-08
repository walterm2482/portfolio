import type { Lang } from '@/app/data'

export const FEATURED_PROJECT_IDS = [
  'fsg-ultimate',
  'portfolio-optimizer',
  'mlops-api',
] as const
export type CaseSlug = (typeof FEATURED_PROJECT_IDS)[number]

export function hasCaseStudy(id: string): id is CaseSlug {
  return FEATURED_PROJECT_IDS.some((slug) => slug === id)
}

export function caseStudyPath(lang: Lang, slug: string) {
  return `${lang === 'en' ? '/en/projects' : '/proyectos'}/${slug}`
}
