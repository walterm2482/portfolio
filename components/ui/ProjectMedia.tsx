'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { XIcon } from 'lucide-react'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'

type Props = {
  image?: string
  video?: string
  poster?: string
  index?: number
  alt?: string
}

export function ProjectMedia({ image, video, poster, index = 0, alt }: Props) {
  const [reduced, setReduced] = useState(false)         // ← siempre llamado
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    }
  }, [])

  if (!image && !video) return null                     // ← después de los hooks

  const isVideo = Boolean(video)
  const base = 'aspect-video w-full rounded-xl bg-zinc-100 dark:bg-zinc-900'
  const priority = index === 0
  const altText = alt || 'Media del proyecto'

  return (
    <MorphingDialog transition={{ type: 'spring', bounce: 0, duration: 0.2 }}>
      <MorphingDialogTrigger
        type="button"
        aria-label={`Abrir media de ${altText}`}
        className="group w-full"
      >
        {isVideo ? (
          <video
            className={`${base} object-cover`}
            src={video}
            poster={poster}
            muted
            playsInline
            {...(reduced ? {} : { autoPlay: true, loop: true })}
          />
        ) : (
          <Image
            src={image as string}
            alt={altText}
            width={1280}
            height={720}
            className={`${base} object-cover`}
            priority={priority}
          />
        )}
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent className="relative h-full w-full">
          <div className="flex h-full w-full items-center justify-center">
            {isVideo ? (
              <video
                className="rounded-xl"
                src={video}
                poster={poster}
                controls
                playsInline
              />
            ) : (
              <Image
                src={image as string}
                alt={altText}
                width={1920}
                height={1080}
                className="rounded-xl object-contain"
                priority={priority}
              />
            )}
          </div>
        </MorphingDialogContent>

        <MorphingDialogClose className="fixed top-6 right-6 h-9 w-9 rounded-full bg-white/70 ring-1 ring-inset ring-zinc-200/60 backdrop-blur-sm dark:bg-zinc-900 dark:ring-zinc-800/60">
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}
