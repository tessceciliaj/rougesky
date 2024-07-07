import Link from 'next/link'
import { PortableText } from '@portabletext/react'

import { Button } from './ui/Button'
import type { Newsletter as NewsletterProps } from '@/sanity/schemas/sections/newsletter'

export const JoinNow = ({ content }: { content: NewsletterProps }) => {
  return (
    <section className='mx-auto w-full bg-[#00417D] py-20 bg-[url("/images/gradient.png")] bg-cover bg-center text-center '>
      <div className='flex flex-col items-center gap-6 p-6'>
        <h2 className='text-light text-center font-title text-6xl'>
          {content.title}
        </h2>
        <div className='text-light max-w-xl text-center'>
          <PortableText value={content.desc} />
        </div>
        {/* TODO: fix this to alternate between regular button and icon button */}
        <Button as={Link} href={content.button.link}>
          {content.button.label}
        </Button>
      </div>
    </section>
  )
}
