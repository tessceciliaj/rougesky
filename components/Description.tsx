import Image from 'next/image'
import { PortableText } from '@portabletext/react'

import { getImageDimensions, urlForImage } from '@/sanity/lib/image'

import type { Description as DescriptionProps } from '@/sanity/schemas/sections/description'

export const Description = ({ content }: { content: DescriptionProps }) => {
  return (
    <div className='flex max-w-6xl flex-col px-8 pb-16 text-center'>
      <h2 className='px-6 pb-6 pt-12 text-center font-title text-2xl font-bold text-primary md:px-24 md:pb-12 md:text-4xl'>
        {content.title}
      </h2>
      <h3 className='pb-16 text-light md:text-lg'>{content.subtitle}</h3>
      <div className='flex w-full flex-wrap justify-center gap-x-8 gap-y-12 text-light'>
        {content.descriptions.map((card) => {
          const dimensions = getImageDimensions(card.image)

          return (
            <div key={card._key} className='min-w-[12rem] max-w-xs flex-1'>
              <Image
                src={urlForImage(card.image).url()}
                width={dimensions.width}
                height={dimensions.height}
                alt={card.image.alt || ''}
                className='border-2 border-primary'
              />
              <h4 className='pt-8 font-title text-4xl text-primary'>
                {card.title}
              </h4>
              <div className='pt-4'>
                <PortableText value={card.text} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
