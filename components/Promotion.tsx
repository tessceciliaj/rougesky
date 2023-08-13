import Link from 'next/link'
import { ArrowDown } from 'react-bootstrap-icons'
import type { Promotion as PromotionProps } from '@/sanity/types/homepage'

const Promotion = ({ content }: { content: PromotionProps }) => {
  return (
    <section className='bg-black w-full min-h-screen flex flex-col justify-center items-center'>
      <h2 className='text-base md:text-xl font-bold text-lightColor text-center pb-2 px-6 md:px-24'>
        {content.title}
      </h2>
      <ArrowDown className='text-lightColor m-2 text-xl animate-bounce' />
      <Link
        href={content.button.link}
        className='mainBtn rotateBtn bg-accentColor'>
        {content.button.text}
      </Link>
    </section>
  )
}

export default Promotion
