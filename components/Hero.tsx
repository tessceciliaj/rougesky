import Link from 'next/link'

import { Button } from './ui/Button'
import { getImageDimensions, urlForImage } from '@/sanity/lib/image'
import type { Hero as HeroProps } from '@/sanity/schemas/sections/hero'
import Image from 'next/image'
import { cn } from '@/utils/classnames'

export const Hero = ({ content }: { content: HeroProps }) => {
  const dimensions = getImageDimensions(content.background_image)

  return (
    <div className='relative w-full pt-20 md:pt-0'>
      <Image
        src={urlForImage(content.background_image).url()}
        width={dimensions.width}
        height={dimensions.height}
        alt=''
        className='w-full'
      />
      <div className='absolute -bottom-6 flex w-full justify-center gap-2 px-4 md:bottom-8'>
        {content.ctas.map(({ _key, button, primary }) => (
          <Button
            key={_key}
            as={Link}
            href={button.link}
            variant={button.icon && !button.label ? 'tertiary' : 'primary'}
            className={cn(!primary && 'hidden md:inline-flex')}
          >
            {button.label}
            {button.icon && (
              <Image
                src={urlForImage(button.icon).url()}
                width={24}
                height={24}
                alt={button.icon.alt || ''}
                className='size-6 object-contain'
              />
            )}
          </Button>
        ))}
      </div>
    </div>
  )
}
