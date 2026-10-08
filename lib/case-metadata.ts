import type { Metadata } from 'next'
import type { Lang } from '@/app/data'
import { getCaseStudy } from '@/app/case-studies'
import { caseStudyPath, type CaseSlug } from './project-routes'
import { OPEN_GRAPH_IMAGE } from './metadata'

export function caseMetadata(lang: Lang, slug: CaseSlug): Metadata {
  const study = getCaseStudy(lang, slug)
  const canonical = caseStudyPath(lang, slug)
  return {
    title: study.title,
    description: study.lead,
    alternates: {
      canonical,
      languages: {
        es: caseStudyPath('es', slug),
        en: caseStudyPath('en', slug),
        'x-default': caseStudyPath('es', slug),
      },
    },
    openGraph: {
      title: `${study.title} | Walter Moya`,
      description: study.lead,
      url: canonical,
      type: 'article',
      locale: lang === 'en' ? 'en_US' : 'es_CL',
      images: [OPEN_GRAPH_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${study.title} | Walter Moya`,
      description: study.lead,
      images: [OPEN_GRAPH_IMAGE],
    },
  }
}
