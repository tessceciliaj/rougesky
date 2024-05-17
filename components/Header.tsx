import Link from 'next/link'
import Image from 'next/image'
import { Steam } from 'react-bootstrap-icons'

import { Button } from './ui/Button'
import { urlForImage } from '@/sanity/lib/image'
import type { Header as HeaderProps } from '@/sanity/types/homepage'

export const Header = ({ content }: { content: HeaderProps }) => {
  return (
    <nav className='bg-dark/50 absolute flex w-full items-center justify-between gap-6 p-4'>
      <div className='flex justify-center gap-2'>
        <Button>Watch Trailer</Button>
        <Button variant='tertiary'>
          <Steam size={24} />
        </Button>
      </div>
      <div className='flex gap-2'>
        {content.iconButtons.map(({ link, icon }) => {
          // TODO: fix this to alternate between regular button and icon button
          if (!icon) return null
          return (
            <Button key={link} as={Link} href={link} variant='tertiary'>
              <Image
                src={urlForImage(icon).url()}
                width={24}
                height={24}
                alt={icon.alt}
                className='size-6 object-contain'
              />
            </Button>
          )
        })}
      </div>
    </nav>
  )
}
