import { Twitter, Tiktok, Youtube, Discord, Steam } from 'react-bootstrap-icons'

export const Header = () => {
  return (
    <nav className='flex absolute justify-between w-full p-4 gap-6 bg-darkOpacity'>
      <div className='flex justify-center gap-6'>
        <button className='mainBtn bg-[#EB0256]'>Watch Trailer</button>
        <button className='rotateBtn'>
          <Steam />
        </button>
      </div>
      <div className='flex justify-end gap-6 text-xl'>
        <button className='rotateBtn'>
          <Discord />
        </button>
        <button className='rotateBtn'>
          <Youtube />
        </button>
        <button className='rotateBtn'>
          <Tiktok />
        </button>
        <button className='rotateBtn'>
          <Twitter />
        </button>
      </div>
    </nav>
  )
}
