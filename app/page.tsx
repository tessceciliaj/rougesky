import { getHomepage } from '@/api-routes/homepage'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Trailer from '@/components/Trailer'
import Description from '@/components/Description'
import MeetTheCharacter from '@/components/MeetTheCharacter'
import EmailInput from '@/components/EmailInput'
import Promotion from '@/components/Promotion'
import Footer from '@/components/Footer'
import demoPicture from '@/public/picture.jpg'
import type { Homepage } from '@/sanity/types/homepage'

const Home = async () => {
  const content: Homepage = await getHomepage()

  return (
    <main className='flex min-h-screen flex-col items-center w-full bg-darkColor'>
      <Header />
      <Hero content={content.hero} backgroundImage={demoPicture} />
      <h1 className='text-lightColor p-12 md:p-24 md:text-lg text-center'>
        {content.hero.desc}
      </h1>
      {content.trailer && <Trailer content={content.trailer} />}
      {content.description && <Description content={content.description} />}
      {content.character && <MeetTheCharacter content={content.character} />}
      {content.newsletter && <EmailInput content={content.newsletter} />}
      {content.promotion && <Promotion content={content.promotion} />}
      <Footer />
    </main>
  )
}

export default Home
