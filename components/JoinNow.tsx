import Link from 'next/link'
import { PortableText } from '@portabletext/react'

import { Button } from './ui/Button'
import type { Newsletter as NewsletterProps } from '@/sanity/types/homepage'

export const JoinNow = ({ content }: { content: NewsletterProps }) => {
  return (
    <section className='mx-auto w-full bg-[#00417D] py-20'>
      <div className='flex flex-col items-center gap-6 p-6'>
        <h2 className='text-light text-center font-title text-6xl'>
          {content.title}
        </h2>
        <div className='text-light max-w-xl text-center'>
          <PortableText value={content.desc} />
        </div>
        <Button as={Link} href={content.button.link} color='black'>
          {content.button.text}
        </Button>
      </div>
    </section>
  )
}
