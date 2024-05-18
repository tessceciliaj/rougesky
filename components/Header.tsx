import Link from 'next/link'
import Image from 'next/image'
import { Steam } from 'react-bootstrap-icons'

import { Button } from './ui/Button'
import { urlForImage } from '@/sanity/lib/image'
import type { Header as HeaderProps } from '@/sanity/schemas/sections/header'

export const Header = ({ content }: { content: HeaderProps }) => {
  return (
    <header className='bg-dark/50 absolute z-50 flex h-20 w-full items-center justify-between gap-6 px-4'>
      <div className='flex justify-center gap-2'>
        <Button>Watch Trailer</Button>
        <Button variant='tertiary'>
          <Steam size={24} />
        </Button>
      </div>
      <div className='flex gap-2'>
        {content.socials_buttons.map(({ link, icon }) => {
          // TODO: fix this to alternate between regular button and icon button
          // TODO: determine how many buttons can be shown
          if (!icon) return null
          return (
            <Button key={link} as={Link} href={link} variant='tertiary'>
              <Image
                src={urlForImage(icon).url()}
                width={24}
                height={24}
                alt={icon.alt || ''}
                className='size-6 object-contain'
              />
            </Button>
          )
        })}
      </div>
    </header>
  )
}
