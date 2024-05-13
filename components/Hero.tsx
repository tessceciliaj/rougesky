import Link from 'next/link'

import { Button } from './ui/Button'
import { urlForImage } from '@/sanity/lib/image'
import type { Hero as HeroProps } from '@/sanity/types/homepage'

export const Hero = ({ content }: { content: HeroProps }) => {
  return (
    <div
      className='flex h-screen items-end justify-center gap-2 pb-8 w-full px-4 bg-cover bg-center'
      style={{
        backgroundImage: `url(${urlForImage(content.background_image).url()})`,
      }}>
      {/* TODO: add ability to pick color and add icon in sanity */}
      {content.ctas.map(({ _key, link, text }) => (
        <Button key={_key} as={Link} href={link}>
          {text}
        </Button>
      ))}
    </div>
  )
}
