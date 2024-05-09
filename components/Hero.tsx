import Link from 'next/link'
import { urlForImage } from '@/sanity/lib/image'
import type { Hero as HeroProps } from '@/sanity/types/homepage'

export const Hero = ({ content }: { content: HeroProps }) => {
  return (
    <div
      className='flex h-screen items-end justify-center gap-2 pb-8 w-full px-4 bg-cover bg-center'
      style={{
        backgroundImage: `url(${urlForImage(content.background_image).url()})`,
      }}>
      {content.ctas.map((button, index) => {
        const color = index % 2 === 0 ? 'bg-darkColor' : 'bg-[#00D870]'

        return (
          <Link
            href={button.link}
            key={button._key}
            className={'mainBtn ' + color}>
            {button.text}
          </Link>
        )
      })}
    </div>
  )
}
