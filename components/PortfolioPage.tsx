import {
  ArrowUpRight,
  BookOpen,
  Braces,
  Database,
  GraduationCap,
  LineChart,
} from 'lucide-react'
import { getData, type Lang } from '@/app/data'
import { getProfileData } from '@/app/profile-data'
import { Hero } from './Hero'
import { ProjectGallery } from './ProjectGallery'
import { ContactSection } from './ContactSection'

function SectionIntro({
  number,
  label,
  title,
  description,
  id,
}: {
  number: string
  label: string
  title: string
  description: string
  id: string
}) {
  return (
    <div className="section-intro">
      <div>
        <p className="eyebrow mb-3">
          {number} / {label}
        </p>
        <h2 id={id} className="section-title">
          {title}
        </h2>
      </div>
      <p className="max-w-md text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
        {description}
      </p>
    </div>
  )
}

export function PortfolioPage({ lang }: { lang: Lang }) {
  const en = lang === 'en'
  const { PROJECTS, WORK_EXPERIENCE, BLOG_POSTS } = getData(lang)
  const profile = getProfileData(lang)
  const icons = { data: Database, ml: Braces, quant: LineChart }
  return (
    <>
      <Hero lang={lang} />
      <section
        id={en ? 'projects' : 'proyectos'}
        aria-labelledby="projects-title"
        className="page-section"
      >
        <SectionIntro
          number="01"
          label={en ? 'Selected work' : 'Trabajo seleccionado'}
          id="projects-title"
          title={en ? 'Ideas turned into tools.' : 'Ideas convertidas en herramientas.'}
          description={
            en
              ? 'Published products, open-source applications and data projects. Explore the problem, the approach and the work behind each one.'
              : 'Productos publicados, aplicaciones de código abierto y proyectos de datos. Explora el problema, el enfoque y el trabajo detrás de cada uno.'
          }
        />
        <ProjectGallery projects={PROJECTS} lang={lang} />
      </section>
      <section
        id={en ? 'about' : 'perfil'}
        aria-labelledby="about-title"
        className="page-section"
      >
        <SectionIntro
          number="02"
          label={en ? 'About my work' : 'Mi enfoque'}
          id="about-title"
          title={en ? 'Engineering meets data.' : 'Ingeniería que conecta con los datos.'}
          description={
            en
              ? 'My background combines applied statistics, operations and software development. I focus on understanding the problem, evaluating evidence and communicating a useful result.'
              : 'Mi formación combina estadística aplicada, operaciones y desarrollo de software. Me enfoco en entender el problema, evaluar la evidencia y comunicar un resultado útil.'
          }
        />
        <div className="grid gap-4 md:grid-cols-3">
          {profile.capabilities.map((area) => {
            const Icon = icons[area.id as keyof typeof icons]
            return (
              <div key={area.id} className="capability-card">
                <div className="mb-7 flex items-center justify-between">
                  <Icon
                    size={23}
                    strokeWidth={1.5}
                    className="text-teal-700 dark:text-teal-300"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                    /{area.number}
                  </span>
                </div>
                <h3 className="max-w-xs text-lg leading-snug font-semibold">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {area.description}
                </p>
                <ul
                  className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5 border-t border-zinc-100 pt-4 font-mono text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400"
                  aria-label={en ? 'Technologies' : 'Tecnologías'}
                >
                  {area.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
        <div className="education-grid">
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold">
              <GraduationCap size={18} aria-hidden="true" />
              {en ? 'Academic foundation' : 'Formación académica'}
            </h3>
            <div className="space-y-6">
              {profile.education.map((item) => (
                <div key={item.degree}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-sm font-medium">{item.degree}</h4>
                    <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                      {item.year}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    {item.institution}
                  </p>
                  <p className="mt-2 text-xs text-teal-700 dark:text-teal-300">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 border-l-2 border-teal-600/40 pl-4 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              {profile.thesis}
            </p>
          </div>
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold">
              <BookOpen size={17} aria-hidden="true" />
              {en
                ? 'Selected further education'
                : 'Formación complementaria seleccionada'}
            </h3>
            <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {profile.learning.map((item) => (
                <li
                  key={item.name}
                  className="flex items-start justify-between gap-4 py-3 first:pt-0"
                >
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                      {item.institution}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                    {item.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section
        id={en ? 'experience' : 'experiencia'}
        aria-labelledby="experience-title"
        className="page-section"
      >
        <SectionIntro
          number="03"
          label={en ? 'Experience' : 'Experiencia'}
          id="experience-title"
          title={en ? 'From analysis to delivery.' : 'Del análisis a la implementación.'}
          description={
            en
              ? 'Data integration in consulting, remote quantitative development and independent projects. Different contexts, a shared focus on building useful solutions.'
              : 'Integración de datos en consultoría, desarrollo cuantitativo remoto y proyectos independientes. Distintos contextos, un mismo foco en construir soluciones útiles.'
          }
        />
        <ol className="experience-list">
          {WORK_EXPERIENCE.map((job) => (
            <li key={job.id} className="experience-item">
              <div className="experience-meta">
                <span className="font-mono text-[11px]">
                  {job.start} — {job.end}
                </span>
                <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                  {job.location}
                </p>
              </div>
              <div className="experience-content">
                <p className="mb-1 text-xs font-medium text-teal-700 dark:text-teal-300">
                  {job.link ? (
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:underline"
                    >
                      {job.company}
                      <ArrowUpRight size={12} aria-hidden="true" />
                    </a>
                  ) : (
                    job.company
                  )}
                </p>
                <h3 className="text-xl font-semibold tracking-tight">{job.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {job.summary}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {job.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-teal-600/60 dark:bg-teal-300/60"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <ul
                  className="mt-4 flex flex-wrap gap-2"
                  aria-label={
                    en ? 'Technologies and skills' : 'Tecnologías y habilidades'
                  }
                >
                  {job.stack.map((item) => (
                    <li key={item} className="tech-tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section id="blog" aria-labelledby="notes-title" className="page-section">
        <SectionIntro
          number="04"
          label={en ? 'Explore & explain' : 'Explorar y explicar'}
          id="notes-title"
          title={en ? 'Analysis worth sharing.' : 'Análisis para compartir.'}
          description={
            en
              ? 'Public notebooks on Machine Learning, explainability and model evaluation. Code and reasoning, documented together.'
              : 'Notebooks públicos sobre Machine Learning, explicabilidad y evaluación de modelos. Código y razonamiento, documentados en un mismo lugar.'
          }
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {[...BLOG_POSTS]
            .sort(
              (a, b) =>
                Number(b.uid === 'lime-shap-bias') - Number(a.uid === 'lime-shap-bias'),
            )
            .map((post, index) => (
              <a
                key={post.uid}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="notebook-card group"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                    NOTEBOOK / {String(index + 1).padStart(2, '0')}
                  </span>
                  <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                    className="text-zinc-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-700 dark:group-hover:text-teal-300"
                  />
                </div>
                <h3 className="text-base leading-snug font-semibold">{post.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {post.description}
                </p>
                <ul
                  className="mt-5 flex flex-wrap gap-2"
                  aria-label={en ? 'Topics' : 'Temas'}
                >
                  {post.tags.map((tag) => (
                    <li key={tag} className="tech-tag">
                      {tag}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto pt-6 text-xs font-medium text-teal-700 dark:text-teal-300">
                  {en ? 'Read on Kaggle' : 'Leer en Kaggle'}{' '}
                  <span aria-hidden="true">↗</span>
                </span>
              </a>
            ))}
        </div>
      </section>
      <ContactSection lang={lang} />
    </>
  )
}
