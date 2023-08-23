import { PortableText } from '@portabletext/react'
import type { Newsletter as NewsletterProps } from '@/sanity/types/homepage'

const EmailInput = ({ content }: { content: NewsletterProps }) => {
  return (
    <section className='w-full max-w-[1075px] pb-24 pt-4 bg-accentColor'>
      <h2 className='sectionTitle animate-bounce'>{content.title}</h2>
      <div className='text-lightColor text-center pb-8'>
        <PortableText value={content.desc} />
      </div>
      <form className='w-[80%] m-auto'>
        <label
          htmlFor='email'
          className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
          Email
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'></div>
          <input
            type='email'
            id='email'
            className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-accentColor focus:border-accentColor'
            placeholder='Your Email'
            required
          />
          <button
            type='submit'
            className='text-white absolute right-2.5 bottom-2 mainBtn bg-darkColor'>
            Subscribe
          </button>
        </div>
      </form>
    </section>
  )
}

export default EmailInput
