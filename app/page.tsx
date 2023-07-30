import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Trailer from '@/components/Trailer'
import GameInfo from '@/components/GameInfo'
import MeetTheCharacter from '@/components/MeetTheCharacter'
import EmailInput from '@/components/EmailInput'
import Promotion from '@/components/Promotion'
import Footer from '@/components/Footer'
import demoPicture from '@/public/picture.jpg'

const Home = () => {
  return (
    <main className='flex min-h-screen flex-col items-center w-full bg-darkColor'>
      <Header />
      <Hero backgroundImage={demoPicture} />
      <Trailer />
      <GameInfo />
      <MeetTheCharacter />
      <EmailInput />
      <Promotion />
      <Footer />
    </main>
  )
}

export default Home
