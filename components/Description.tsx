import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { urlForImage } from '@/sanity/lib/image'

import type { Description as DescriptionProps } from '@/sanity/types/homepage'

export const Description = ({ content }: { content: DescriptionProps }) => {
  return (
    <div className='flex max-w-6xl flex-col px-8 text-center'>
      <h2 className='sectionTitle'>{content.title}</h2>
      <h3 className='text-light pb-16 md:text-lg'>{content.subtitle}</h3>
      <div className='text-light flex w-full flex-wrap justify-center gap-4'>
        {content.descriptions.map((card) => (
          <div key={card._key} className='min-w-[12rem] max-w-xs flex-1'>
            <Image
              src={urlForImage(card.image).url()}
              width={350}
              height={200}
              alt={card.image.alt}
              className='h-[300px] rounded object-cover'
            />
            <h4 className='text-blue pt-8 font-title text-4xl'>
              {card.text_title}
            </h4>
            <div className='pt-4'>
              <PortableText value={card.text} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
