import Link from 'next/link'

import { Ctas } from './Ctas'
import { Button } from './ui/Button'
import { Icon } from './ui/Icon'
import type { Header as HeaderProps } from '@/sanity/schemas/sections/header'

export const Header = ({ content }: { content: HeaderProps }) => {
  return (
    <header className='bg-dark/50 absolute z-50 flex h-20 w-full items-center justify-between gap-6 px-4'>
      <div className='flex gap-2'>
        <Ctas ctas={content.ctas} />
      </div>
      <div className='flex gap-2'>
        {content.socials_buttons.map(({ _key, link, label, icon }) => {
          return (
            <Button
              key={_key}
              as={Link}
              href={link}
              variant={icon && !label ? 'tertiary' : 'primary'}
            >
              {label}
              {icon && <Icon icon={icon} />}
            </Button>
          )
        })}
      </div>
    </header>
  )
}
