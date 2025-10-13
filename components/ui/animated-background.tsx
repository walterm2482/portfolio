'use client'
import { cn } from '@/lib/utils'
import { AnimatePresence, Transition, motion } from 'motion/react'
import React, {
  Children,
  cloneElement,
  ReactElement,
  useEffect,
  useState,
  useId,
  isValidElement,
  HTMLAttributes,
} from 'react'

export type AnimatedBackgroundProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactElement<{ 'data-id': string }>[] | ReactElement<{ 'data-id': string }>
  defaultValue?: string
  onValueChange?: (newActiveId: string | null) => void
  className?: string // clase del BACKGROUND animado
  transition?: Transition
  enableHover?: boolean
}

type ChildProps = {
  'data-id': string
  'data-checked'?: 'true' | 'false'
  className?: string
  children?: React.ReactNode
} & HTMLAttributes<HTMLElement>

export function AnimatedBackground({
  children,
  defaultValue,
  onValueChange,
  className,
  transition,
  enableHover = false,
  ...rest // ← aquí entran role, aria-*, etc.
}: AnimatedBackgroundProps) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const uniqueId = useId()

  const handleSetActiveId = (id: string | null) => {
    setActiveId(id)
    onValueChange?.(id)
  }

  useEffect(() => {
    if (defaultValue !== undefined) setActiveId(defaultValue)
  }, [defaultValue])

  const mapped = Children.map(
    children as ReactElement<ChildProps> | ReactElement<ChildProps>[],
    (child, index) => {
      if (!isValidElement<ChildProps>(child)) return child as unknown as ReactElement
      const id = child.props['data-id']
      const interactionProps: Partial<ChildProps> = enableHover
        ? {
            onMouseEnter: () => handleSetActiveId(id),
            onMouseLeave: () => handleSetActiveId(null),
          }
        : { onClick: () => handleSetActiveId(id) }

      return cloneElement(
        child,
        {
          key: index,
          className: cn('relative inline-flex', child.props.className),
          'data-checked': activeId === id ? 'true' : 'false',
          ...interactionProps,
        },
        <>
          <AnimatePresence initial={false}>
            {activeId === id && (
              <motion.div
                layoutId={`background-${uniqueId}`}
                className={cn('absolute inset-0', className)}
                transition={transition}
                initial={{ opacity: defaultValue ? 1 : 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </AnimatePresence>
          <div className="z-10">{child.props.children}</div>
        </>,
      )
    },
  )

  // contenedor que recibe role, aria-label, etc.
  return <div {...rest}>{mapped}</div>
}
