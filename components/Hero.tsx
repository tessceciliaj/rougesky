import Link from 'next/link'

import { Button } from './ui/Button'
import { urlForImage } from '@/sanity/lib/image'
import type { Hero as HeroProps } from '@/sanity/types/homepage'

export const Hero = ({ content }: { content: HeroProps }) => {
  return (
    <div
      className='flex h-screen w-full items-end justify-center gap-2 bg-cover bg-center px-4 pb-8'
      style={{
        backgroundImage: `url(${urlForImage(content.background_image).url()})`,
      }}
    >
      {/* TODO: fix this to alternate between regular button and icon button */}
      {content.ctas.map(({ _key, link, text }) => (
        <Button key={_key} as={Link} href={link}>
          {text}
        </Button>
      ))}
    </div>
  )
}
