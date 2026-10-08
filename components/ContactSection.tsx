'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Check, Copy, Mail, Phone } from 'lucide-react'
import { EMAIL, PHONE, PHONE_DISPLAY, SOCIAL_LINKS, type Lang } from '@/app/data'

export function ContactSection({ lang }: { lang: Lang }) {
  const en = lang === 'en'
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current)
    },
    [],
  )
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setCopyError(false)
      if (timer.current) clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 2500)
    } catch {
      setCopyError(true)
    }
  }
  return (
    <section
      id={en ? 'contact' : 'contacto'}
      aria-labelledby="contact-title"
      className="contact-section"
    >
      <div>
        <p className="eyebrow text-teal-200">
          {en ? '05 / Let’s connect' : '05 / Conversemos'}
        </p>
        <h2
          id="contact-title"
          className="mt-5 max-w-xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl"
        >
          {en
            ? 'A good problem starts with a conversation.'
            : 'Un buen problema empieza con una conversación.'}
        </h2>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-teal-50/70">
          {en
            ? 'Interested in my work? I’m looking for opportunities in data analytics, Data Science and quantitative development where I can combine engineering, analysis and software.'
            : '¿Te interesa mi trabajo? Busco oportunidades en análisis de datos, Data Science y desarrollo cuantitativo donde pueda combinar ingeniería, análisis y software.'}
        </p>
        <a
          href={`mailto:${EMAIL}`}
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-teal-950 transition-colors hover:bg-teal-100"
        >
          <Mail size={16} aria-hidden="true" />
          {en ? 'Send an email' : 'Escribirme por correo'}
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
      <div className="flex flex-col justify-end gap-6">
        <div>
          <p className="mb-3 text-xs text-teal-100/65">
            {en ? 'Direct contact' : 'Contacto directo'}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={`mailto:${EMAIL}`}
              className="text-sm font-medium break-all hover:underline sm:text-base"
            >
              {EMAIL}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label={en ? 'Copy email address' : 'Copiar correo electrónico'}
              className="rounded-lg border border-white/20 p-2 text-teal-100 hover:bg-white/10"
            >
              {copied ? (
                <Check size={15} aria-hidden="true" />
              ) : (
                <Copy size={15} aria-hidden="true" />
              )}
            </button>
          </div>
          <p role="status" className="mt-2 min-h-4 text-xs text-teal-100">
            {copied
              ? en
                ? 'Email address copied'
                : 'Correo copiado'
              : copyError
                ? en
                  ? 'Select and copy the address above.'
                  : 'Selecciona y copia el correo que aparece arriba.'
                : ''}
          </p>
          <div className="mt-4 border-t border-white/15 pt-4">
            <p className="mb-2 text-xs text-teal-100/65">{en ? 'Phone' : 'Teléfono'}</p>
            <a
              href={`tel:${PHONE}`}
              aria-label={`${en ? 'Call' : 'Llamar al'} ${PHONE_DISPLAY}`}
              className="inline-flex items-center gap-2 text-sm font-medium hover:underline sm:text-base"
            >
              <Phone size={16} aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 border-t border-white/20 pt-5">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-teal-50/80 hover:text-white hover:underline"
            >
              {social.label}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
