import Image from 'next/image'

import { Ctas } from './Ctas'
import { getImageDimensions, urlForImage } from '@/sanity/lib/image'
import type { Hero as HeroProps } from '@/sanity/schemas/sections/hero'

export const Hero = ({ content }: { content: HeroProps }) => {
  const dimensions = getImageDimensions(content.background_image)

  return (
    <div className='relative w-full pt-20 md:pt-0'>
      <Image
        src={urlForImage(content.background_image).url()}
        width={dimensions.width}
        height={dimensions.height}
        alt=''
        className='w-full'
      />
      <div className='absolute -bottom-6 flex w-full justify-center gap-2 px-4 md:bottom-8'>
        <Ctas ctas={content.ctas} />
      </div>
    </div>
  )
}
