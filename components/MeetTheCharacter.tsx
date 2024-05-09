import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import type { Character as CharacterProps } from '@/sanity/types/homepage'
import { PortableText } from '@portabletext/react'

export const MeetTheCharacter = ({ content }: { content: CharacterProps }) => {
  return (
    <section className='flex flex-col pb-6 max-w-6xl md:p-0 gap-6 md:flex-row items-center pt-12 px-6 md:px-24'>
      <Image
        src={urlForImage(content.image).url()}
        alt={content.image.alt}
        width={800}
        height={1600}
        className='rounded object-cover max-w-[50%] flex-1'
      />
      <div className='flex flex-col gap-6 flex-1'>
        <h2 className='text-5xl font-title md:text-4xl text-accentColor'>
          {content.title}
        </h2>
        <div className='text-white text-xl'>
          <PortableText value={content.text} />
        </div>
      </div>
    </section>
  )
}
