import Image from 'next/image'

import demoPicture from '@/public/picture.jpg'

export const Banner = () => {
  return (
    <div>
      <Image src={demoPicture} alt='banner-image' width={400} height={200} />
    </div>
  )
}
