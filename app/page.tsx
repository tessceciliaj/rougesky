import { client } from '@/sanity/lib/client'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Trailer } from '@/components/Trailer'
import { Description } from '@/components/Description'
import { MeetTheCharacter } from '@/components/MeetTheCharacter'
import { JoinNow } from '@/components/JoinNow'
import { Footer } from '@/components/Footer'
import type { Homepage } from '@/sanity/types/homepage'

const getHomepage = async () => {
  return await client.fetch(`*[_type == "homepage"][0]`)
}

export default async function Home() {
  const content: Homepage = await getHomepage()

  return (
    <main className='flex min-h-screen w-full flex-col items-center'>
      <Header content={content.header} />
      <Hero content={content.hero} />
      {content.trailer && <Trailer content={content.trailer} />}
      {content.description && <Description content={content.description} />}
      {content.character && <MeetTheCharacter content={content.character} />}
      {content.newsletter && <JoinNow content={content.newsletter} />}
      {content.footer && <Footer content={content.footer} />}
    </main>
  )
}
