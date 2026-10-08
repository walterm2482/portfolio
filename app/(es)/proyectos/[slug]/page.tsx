import { notFound } from 'next/navigation'
import { CaseStudyPage } from '@/components/CaseStudyPage'
import { FEATURED_PROJECT_IDS, hasCaseStudy } from '@/lib/project-routes'
import { caseMetadata } from '@/lib/case-metadata'

export const dynamicParams = false
export function generateStaticParams() {
  return FEATURED_PROJECT_IDS.map((slug) => ({ slug }))
}
type Props = { params: Promise<{ slug: string }> }
export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  if (!hasCaseStudy(slug)) notFound()
  return caseMetadata('es', slug)
}
export default async function Page({ params }: Props) {
  const { slug } = await params
  if (!hasCaseStudy(slug)) notFound()
  return <CaseStudyPage lang="es" slug={slug} />
}
