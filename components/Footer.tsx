import Link from 'next/link'
import Image from 'next/image'

import { urlForImage } from '@/sanity/lib/image'
import type { Footer as FooterProps } from '@/sanity/types/homepage'

const Footer = ({ content }: { content: FooterProps }) => {
  return (
    <footer className='w-full text-lightColor flex flex-col gap-6 items-center pt-8 pb-6'>
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
        className='text-sm text-lightOpacity pb-4 px-4 hover:underline'>
        {content.copyright.text}
      </Link>
    </footer>
  )
}

export default Footer
