import type { ElementType } from 'react'
import { type VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/utils/classnames'
import type { PolymorphicPropsWithoutRef } from '@/types/polymorphic'

const variants = cva(
  'inline-flex whitespace-nowrap items-center h-12 gap-2 justify-center outline-none font-title text-lg transition',
  {
    variants: {
      variant: {
        primary: 'border border-light px-6 hover:scale-105',
        tertiary: 'p-2 min-w-12 hover:scale-110',
      },
      color: {
        green: 'bg-green text-dark',
        pink: 'bg-pink text-light',
        black: 'bg-dark text-light border-dark',
        transparent: 'bg-transparent text-light',
      },
    },
    defaultVariants: {
      variant: 'primary',
      color: 'green',
    },
  },
)

export const Button = <T extends ElementType = 'button'>({
  as,
  children,
  variant,
  color,
  className,
  ...rest
}: PolymorphicPropsWithoutRef<VariantProps<typeof variants>, T>) => {
  const Element: ElementType = as || 'button'

  color = variant === 'tertiary' ? 'transparent' : color

  return (
    <Element className={cn(variants({ variant, color, className }))} {...rest}>
      {children}
    </Element>
  )
}
