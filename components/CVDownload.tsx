import { FileDown } from 'lucide-react'
import type { Lang } from '@/app/data'

const CV_FILES = {
  es: {
    url: '/cv/walter-moya-cv-es.pdf',
    filename: 'Walter-Thomas-Moya-Araya-CV-ES.pdf',
  },
  en: {
    url: '/cv/walter-moya-cv-en.pdf',
    filename: 'Walter-Thomas-Moya-Araya-CV-EN.pdf',
  },
} satisfies Record<Lang, { url: string; filename: string }>

export function CVDownload({
  lang,
  className = 'button-secondary',
}: {
  lang: Lang
  className?: string
}) {
  const en = lang === 'en'
  const languages: Lang[] = en ? ['en', 'es'] : ['es', 'en']
  return (
    <div
      role="group"
      aria-label={en ? 'CV downloads' : 'Descargas del CV'}
      className="flex flex-wrap items-center gap-3"
    >
      {languages.map((documentLang) => {
        const cv = CV_FILES[documentLang]
        const primary = documentLang === lang
        const label = primary
          ? en
            ? 'Download CV'
            : 'Descargar CV'
          : en
            ? 'CV in Spanish'
            : 'CV en inglés'
        const ariaLabel = en
          ? `Download CV in ${documentLang === 'en' ? 'English' : 'Spanish'}, one-page PDF`
          : `Descargar CV en ${documentLang === 'en' ? 'inglés' : 'español'}, PDF de una página`
        return (
          <a
            key={documentLang}
            href={cv.url}
            hrefLang={documentLang}
            type="application/pdf"
            download={cv.filename}
            className={className}
            aria-label={ariaLabel}
          >
            <FileDown size={16} aria-hidden="true" />
            {label}
            <span className="cv-format">PDF · {documentLang.toUpperCase()}</span>
          </a>
        )
      })}
    </div>
  )
}
