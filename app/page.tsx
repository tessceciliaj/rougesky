import Hero from '@/components/Hero'
import demoPicture from '@/public/picture.jpg'

const Home = () => {
  return (
    <main className='flex min-h-screen flex-col items-center w-full'>
      <Hero backgroundImage={demoPicture} />
    </main>
  )
}

export default Home
