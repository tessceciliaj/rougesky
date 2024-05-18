import Link from 'next/link'

import { Button } from './ui/Button'
import { Icon } from './ui/Icon'
import { cn } from '@/utils/classnames'
import type { Ctas as CtasProps } from '@/sanity/schemas/components/button'

export const Ctas = ({ ctas }: { ctas: CtasProps }) => {
  return (
    <>
      {ctas.map(({ _key, button, primary }) => (
        <Button
          key={_key}
          as={Link}
          href={button.link}
          variant={button.icon && !button.label ? 'tertiary' : 'primary'}
          className={cn(!primary && 'hidden md:inline-flex')}
        >
          {button.label}
          {button.icon && <Icon icon={button.icon} />}
        </Button>
      ))}
    </>
  )
}
