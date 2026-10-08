import { FileDown } from 'lucide-react'
import type { Lang } from '@/app/data'

export const CV_URL = '/cv/walter-moya-cv-es.pdf'

export function CVDownload({
  lang,
  className = 'button-secondary',
}: {
  lang: Lang
  className?: string
}) {
  const en = lang === 'en'
  return (
    <a
      href={CV_URL}
      download="Walter-Moya-CV-ES.pdf"
      className={className}
      aria-label={en ? 'Download CV, PDF in Spanish' : 'Descargar CV en PDF'}
    >
      <FileDown size={16} aria-hidden="true" />
      {en ? 'Download CV' : 'Descargar CV'}
      <span className="cv-format">{en ? 'PDF · ES' : 'PDF'}</span>
    </a>
  )
}
