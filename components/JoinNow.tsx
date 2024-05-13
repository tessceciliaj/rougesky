import Link from 'next/link'
import { PortableText } from '@portabletext/react'

import { Button } from './ui/Button'
import type { Newsletter as NewsletterProps } from '@/sanity/types/homepage'

export const JoinNow = ({ content }: { content: NewsletterProps }) => {
  return (
    <section className='w-full py-20 bg-[#00417D] mx-auto'>
      <div className='flex flex-col items-center gap-6 p-6'>
        <h2 className='font-title text-white text-6xl text-center'>
          {content.title}
        </h2>
        <div className='text-lightColor text-center max-w-xl'>
          <PortableText value={content.desc} />
        </div>
        <Button as={Link} href={content.button.link} color='black'>
          {content.button.text}
        </Button>
      </div>
    </section>
  )
}
