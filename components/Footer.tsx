import Link from 'next/link'
import Logo from './Logo'
import { Footer as Props } from '@/sanity/types/homepage'

const Footer = ({ content }: { content: Props }) => {
  return (
    <footer className='w-full text-lightColor flex flex-col gap-6 items-center pt-8 pb-6'>
      <Link href={content.link.link}>{content.link.text}</Link>
      <Logo />
      <Link
        href={content.copyright.link}
        className='text-sm text-lightOpacity pb-4 px-4 hover:underline'>
        {content.copyright.text}
      </Link>
    </footer>
  )
}

export default Footer
