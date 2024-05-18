import Image from 'next/image'

import { urlForImage } from '@/sanity/lib/image'
import type { ImageWithAlt } from '@/sanity/schemas/components/image'

export const Icon = ({ icon }: { icon: ImageWithAlt }) => {
  return (
    <Image
      src={urlForImage(icon).url()}
      width={24}
      height={24}
      alt={icon.alt || ''}
      className='size-6 object-contain'
    />
  )
}
