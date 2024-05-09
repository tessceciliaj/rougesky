import { getHomepage } from '@/api-routes/homepage'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Trailer from '@/components/Trailer'
import Description from '@/components/Description'
import MeetTheCharacter from '@/components/MeetTheCharacter'
import EmailInput from '@/components/EmailInput'
import Footer from '@/components/Footer'
import demoPicture from '@/public/picture.jpg'
import type { Homepage } from '@/sanity/types/homepage'

const Home = async () => {
  const content: Homepage = await getHomepage()

  return (
    <main className='flex min-h-screen flex-col items-center w-full bg-darkColor'>
      <Header />
      <Hero content={content.hero} backgroundImage={demoPicture} />
      {content.trailer && <Trailer content={content.trailer} />}
      {content.description && <Description content={content.description} />}
      {content.character && <MeetTheCharacter content={content.character} />}
      {content.newsletter && <EmailInput content={content.newsletter} />}
      {content.footer && <Footer content={content.footer} />}
    </main>
  )
}

export default Home
