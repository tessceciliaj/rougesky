import { Twitter, Tiktok, Youtube, Discord } from 'react-bootstrap-icons'

const Navbar = () => {
	return (
		<nav className='flex justify-end gap-2 p-4'>
			<button>
				<Discord />
			</button>
			<Youtube />
			<Tiktok />
			<Twitter />
		</nav>
	)
}

export default Navbar
