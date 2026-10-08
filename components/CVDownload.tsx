import { FileDown } from 'lucide-react'
import type { Lang } from '@/app/data'

const CV_FILENAMES = {
  es: 'walter_thomas_moya_araya_cv_es.pdf',
  en: 'walter_thomas_moya_araya_cv_en.pdf',
} satisfies Record<Lang, string>

export function CVDownload({
  lang,
  className = 'button-secondary',
}: {
  lang: Lang
  className?: string
}) {
  const en = lang === 'en'
  const filename = CV_FILENAMES[lang]
  return (
    <a
      href={`/cv/${filename}`}
      hrefLang={lang}
      type="application/pdf"
      download={filename}
      className={className}
      aria-label={
        en
          ? 'Download CV in English, one-page PDF'
          : 'Descargar CV en español, PDF de una página'
      }
    >
      <FileDown size={16} aria-hidden="true" />
      {en ? 'Download CV' : 'Descargar CV'}
      <span className="cv-format">PDF · {lang.toUpperCase()}</span>
    </a>
  )
}
