import Logo from "./Logo"

const Footer: React.FC = () => {
  return (
    <footer className='w-full text-lightColor flex flex-col items-center pt-6'>
      <Logo />
      <hr className='my-4 md:my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <p className='text-sm text-lightOpacity pb-4 px-4'>
          © 2023{' '}
          <a href='/' className='hover:underline'>
            Megabit™
          </a>
        </p>
    </footer>
  )
}

export default Footer
