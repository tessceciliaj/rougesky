import { Twitter, Tiktok, Youtube, Discord } from 'react-bootstrap-icons'

const Header = () => {
	return (
    <nav className='flex justify-end gap-6 p-4 absolute text-xl'>
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
    </nav>
  )
}

export default Header
