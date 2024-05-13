import Link from 'next/link'
import Image from 'next/image'

import { urlForImage } from '@/sanity/lib/image'
import type { Footer as FooterProps } from '@/sanity/types/homepage'

export const Footer = ({ content }: { content: FooterProps }) => {
  return (
    <footer className='flex w-full flex-col items-center gap-6 pb-6 pt-8 text-lightColor'>
      <Link href={content.link.link}>{content.link.text}</Link>
      <Image
        src={urlForImage(content.logo).url()}
        alt='company logo'
        width={100}
        height={48}
        className='max-h-12'
      />
      <Link
        href={content.copyright.link}
        className='px-4 pb-4 text-sm text-lightOpacity hover:underline'
      >
        {content.copyright.text}
      </Link>
    </footer>
  )
}
