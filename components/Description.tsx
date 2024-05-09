import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { urlForImage } from '@/sanity/lib/image'

import type { Description as DescriptionProps } from '@/sanity/types/homepage'

const Description = ({ content }: { content: DescriptionProps }) => {
  return (
    <div className='flex flex-col px-8 text-center max-w-6xl'>
      <h2 className='sectionTitle'>{content.title}</h2>
      <h3 className='text-lightColor pb-16 md:text-lg'>{content.subtitle}</h3>
      <div className='flex flex-wrap gap-4 justify-center w-full text-lightColor'>
        {content.descriptions.map(card => (
          <div key={card._key} className='flex-1 max-w-xs min-w-[12rem]'>
            <Image
              src={urlForImage(card.image).url()}
              width={350}
              height={200}
              alt={card.image.alt}
              className='rounded h-[300px] object-cover'
            />
            <h4 className='text-accentColor font-title text-4xl pt-8'>
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

export default Description
