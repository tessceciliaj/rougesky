import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '@/sanity/lib/image'
import type { StaticImageData } from 'next/image'
import type { Hero as HeroProps } from '@/sanity/types/homepage'

const Hero = ({
  content,
  backgroundImage,
}: {
  content: HeroProps
  backgroundImage: StaticImageData
}) => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <>
      <div
        className='flex flex-col h-screen items-center justify-center w-full px-4'
        style={backgroundStyle}>
        <div className='flex flex-col items-center justify-between h-screen pb-8 pt-[100px]'>
          <Image
            src={urlForImage(content.logo).url()}
            alt='company logo'
            width={24}
            height={24}
            className='py-4'
          />
          <div className='flex gap-2 justify-center'>
            {content.ctas.map((button, index) => {
              const color = index % 2 === 0 ? 'bg-darkColor' : 'bg-accentColor'

              return (
                <Link
                  href={button.link}
                  key={button._key}
                  className={'mainBtn ' + color}>
                  {button.text}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
