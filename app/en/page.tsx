'use client'

import Link from 'next/link'
import { motion } from 'motion/react'

import { AnimatedBackground } from '@/components/ui/animated-background'
import { Magnetic } from '@/components/ui/magnetic'
import { ProjectMedia } from '@/components/ui/ProjectMedia'
import { Spotlight } from '@/components/ui/spotlight'

import { getData } from '../data'
import type { Project } from '../data'

const {
  PROJECTS = [],
  WORK_EXPERIENCE = [],
  BLOG_POSTS = [],
  EMAIL,
  SOCIAL_LINKS = [],
} = getData('en')

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}
const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}
const TRANSITION_SECTION = { duration: 0.3 }

function HeroEn() {
  return (
    <section
      id="start"
      aria-label="Intro"
      className="relative isolate border-b border-zinc-200/50 dark:border-zinc-800/50"
    >
      {/* Top background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-64 left-1/2 z-0 h-[140vh] w-screen -translate-x-1/2 bg-gradient-to-b from-[#0d2a4a]/70 via-[#0d2a4a]/35 to-transparent"
      />
      {/* Bottom background */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-[60vh] w-screen -translate-x-1/2 bg-gradient-to-t from-[#0d2a4a]/50 via-[#0d2a4a]/20 to-transparent"
      />
      {/* Wide radial */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 [mask-image:linear-gradient(to_bottom,white_65%,transparent)]"
      >
        <div className="absolute -top-24 left-1/2 h-[80rem] w-[120rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-300/25 via-sky-300/25 to-fuchsia-300/25 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-16 sm:py-20 md:py-28">
        <p className="text-xs tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
          Artificial Intelligence and Data Science
        </p>
        <h1 className="mt-3 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-5xl">
          AI that strengthens decisions
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-pretty text-zinc-600 md:text-base dark:text-zinc-300">
          Quantitative models and predictive analytics for intelligent decisions.
        </p>
        <p className="mt-6 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
          <span className="font-medium">Industrial Engineer.</span> MSc in Engineering
          Sciences (Industrial specialization). Specialized in predictive modeling,
          computer vision, and optimization.
        </p>
      </div>
    </section>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          aria-hidden="true"
          className="h-3 w-3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Page() {
  return (
    <motion.main variants={VARIANTS_CONTAINER} initial="hidden" animate="visible">
      <HeroEn />

      {/* Projects */}
      <motion.section
        id="projects"
        aria-labelledby="projects"
        className="mt-24 scroll-mt-24 md:mt-32"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h2 className="mb-5 text-lg font-medium">Projects</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project: Project, i) => (
            <article key={project.id} className="space-y-3">
              <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                <ProjectMedia
                  image={project.image}
                  video={project.video}
                  poster={project.poster}
                  index={i}
                />
              </div>
              <div className="px-1">
                <div className="flex items-start justify-between gap-3">
                  <a
                    href={project.link ?? project.demo ?? '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open project ${project.name}`}
                    className="group relative inline-block font-medium text-zinc-900 dark:text-zinc-50"
                  >
                    {project.name}
                    <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50" />
                  </a>
                  {project.role && (
                    <span className="shrink-0 rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                      {project.role}
                    </span>
                  )}
                </div>
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section
        id="experience"
        aria-labelledby="experience"
        className="mt-24 scroll-mt-24 md:mt-32"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h2 className="mb-5 text-lg font-medium">Experience</h2>
        <ul className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <li key={job.id}>
              <a
                href={job.link ?? '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              >
                <Spotlight
                  className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                  size={64}
                />
                <div className="relative rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-normal dark:text-zinc-100">{job.title}</h3>
                      <p className="text-zinc-500 dark:text-zinc-400">{job.company}</p>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      <time>{job.start}</time> – <time>{job.end}</time>
                    </p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </motion.section>

      {/* Blog */}
      <motion.section
        id="blog"
        aria-labelledby="blog"
        className="mt-24 scroll-mt-24 md:mt-32"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h2 className="mb-3 text-lg font-medium">Blog</h2>
        <AnimatedBackground
          enableHover
          className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
          transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
        >
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.uid}
              data-id={post.uid}
              href={post.link}
              className="-mx-3 block rounded-xl px-3 py-3 focus-visible:outline-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open post ${post.title}`}
            >
              <div className="flex flex-col space-y-1">
                <h3 className="font-normal dark:text-zinc-100">{post.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400">{post.description}</p>
              </div>
            </Link>
          ))}
        </AnimatedBackground>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        aria-labelledby="contact"
        className="mt-24 scroll-mt-24 md:mt-32"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h2 className="mb-5 text-lg font-medium">Contact</h2>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Email me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((s) => (
            <MagneticSocialLink key={s.label} link={s.link}>
              {s.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
