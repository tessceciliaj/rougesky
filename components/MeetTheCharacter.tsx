import Image from 'next/image'
import { PortableText } from '@portabletext/react'

import { urlForImage } from '@/sanity/lib/image'
import type { Character as CharacterProps } from '@/sanity/types/homepage'

export const MeetTheCharacter = ({ content }: { content: CharacterProps }) => {
  return (
    <section className='flex max-w-6xl flex-col items-center gap-6 px-6 pb-6 pt-12 md:flex-row md:p-0 md:px-24'>
      <Image
        src={urlForImage(content.image).url()}
        alt={content.image.alt}
        width={800}
        height={1600}
        className='max-w-[50%] flex-1 rounded object-cover'
      />
      <div className='flex flex-1 flex-col gap-6'>
        <h2 className='text-primary font-title text-5xl md:text-4xl'>
          {content.title}
        </h2>
        <div className='text-light text-xl'>
          <PortableText value={content.text} />
        </div>
      </div>
    </section>
  )
}
