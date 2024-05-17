import Link from 'next/link'
import Image from 'next/image'

import { urlForImage } from '@/sanity/lib/image'
import type { Footer as FooterProps } from '@/sanity/schemas/sections/footer'

export const Footer = ({ content }: { content: FooterProps }) => {
  return (
    <footer className='text-light flex w-full flex-col items-center gap-6 pb-6 pt-8'>
      {/* TODO: fix this to alternate between regular button and icon button */}
      <Link href={content.link.link}>{content.link.label}</Link>
      <Image
        src={urlForImage(content.logo).url()}
        alt='company logo'
        width={100}
        height={48}
        className='max-h-12'
      />
      {/* TODO: fix this to alternate between regular button and icon button */}
      <Link
        href={content.copyright.link}
        className='px-4 pb-4 text-sm hover:underline'
      >
        {content.copyright.label}
      </Link>
    </footer>
  )
}
