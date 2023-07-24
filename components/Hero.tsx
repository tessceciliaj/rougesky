import type { StaticImageData } from 'next/image'

const Hero = ({ backgroundImage }: { backgroundImage: StaticImageData }) => {
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
        <div className='flex flex-col'>
          <h1 className='text-3xl py-4 font-bold text-center'>RogueSky: Wings of Eternity</h1>
          <div className='flex gap-2 justify-center'>
            <button className='mainBtn bg-darkColor'>
              Wishlist on Steam
            </button>
            <button className='mainBtn bg-darkGrey'>
              Join our Mailinglist!
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
