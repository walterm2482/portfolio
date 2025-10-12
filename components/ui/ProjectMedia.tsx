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
  const src = video ?? image ?? ''
  if (!src) return null
  const isVideo = Boolean(video)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    }
  }, [])

  const base = 'aspect-video w-full rounded-xl bg-zinc-100 dark:bg-zinc-900'
  const priority = index === 0
  const altText = alt || 'Media del proyecto'

  return (
    <MorphingDialog transition={{ type: 'spring', bounce: 0, duration: 0.3 }}>
      <MorphingDialogTrigger asChild>
        <button type="button" aria-label={`Abrir media de ${altText}`} className="group w-full">
          {isVideo ? (
            <video
              src={src}
              poster={poster}
              autoPlay={!reduced}
              loop={!reduced}
              muted
              playsInline
              preload="metadata"
              className={`${base} object-contain`}
            />
          ) : (
            <div className={`relative ${base}`}>
              <Image
                src={src}
                alt={altText}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="rounded-xl object-contain"
                priority={priority}
              />
            </div>
          )}
        </button>
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-inset ring-zinc-200/50 dark:bg-zinc-950 dark:ring-zinc-800/50">
          {isVideo ? (
            <video
              src={src}
              poster={poster}
              controls
              autoPlay={!reduced}
              loop={!reduced}
              muted
              playsInline
              preload="metadata"
              className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
            />
          ) : (
            <div className="relative aspect-video h-[50vh] w-full md:h-[70vh]">
              <Image
                src={src}
                alt={altText}
                fill
                sizes="100vw"
                className="rounded-xl object-contain"
                priority={priority}
              />
            </div>
          )}
        </MorphingDialogContent>

        <MorphingDialogClose className="fixed right-6 top-6 h-fit w-fit rounded-full bg-white p-1 ring-1 ring-zinc-200/60 dark:bg-zinc-900 dark:ring-zinc-800/60">
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}
