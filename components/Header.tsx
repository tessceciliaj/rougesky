import { Twitter, Tiktok, Youtube, Discord, Steam } from 'react-bootstrap-icons'

import type { Header as HeaderProps } from '@/sanity/types/homepage'
import Link from 'next/link'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'

export const Header = ({ content }: { content: HeaderProps }) => {
  return (
    <nav className='flex absolute justify-between items-center w-full p-4 gap-6 bg-darkOpacity'>
      <div className='flex justify-center gap-6'>
        <button className='mainBtn bg-[#EB0256]'>Watch Trailer</button>
        <button className='rotateBtn'>
          <Steam />
        </button>
      </div>
      <div className='flex justify-end gap-6 text-xl'>
        {content.iconButtons.map((button, index) => (
          <Link
            key={index}
            href={button.link}
            target='_blank'
            rel='noopener noreferrer'
            className='rotateBtn'>
            <Image
              src={urlForImage(button.icon).url()}
              width={350}
              height={200}
              alt={button.icon.alt}
              className='rounded max-h-8 w-8 object-cover'
            />
          </Link>
        ))}
      </div>
    </nav>
  )
}
