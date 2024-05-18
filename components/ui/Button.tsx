import type { ElementType } from 'react'
import { type VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/utils/classnames'
import type { PolymorphicPropsWithoutRef } from '@/types/polymorphic'

const variants = cva(
  'inline-flex whitespace-nowrap items-center h-12 gap-4 justify-center outline-none font-title text-lg transition',
  {
    variants: {
      variant: {
        primary: 'px-6 hover:scale-105 bg-primary text-dark',
        tertiary: 'p-2 min-w-12 hover:scale-110 bg-none text-light',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
)

export const Button = <T extends ElementType = 'button'>({
  as,
  children,
  variant,
  className,
  ...rest
}: PolymorphicPropsWithoutRef<VariantProps<typeof variants>, T>) => {
  const Element: ElementType = as || 'button'

  return (
    <Element className={cn(variants({ variant, className }))} {...rest}>
      {children}
    </Element>
  )
}
