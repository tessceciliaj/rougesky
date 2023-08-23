'use client'
import { useState } from 'react'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import type { Character as CharacterProps } from '@/sanity/types/homepage'

const MeetTheCharacter = ({ content }: { content: CharacterProps }) => {
  const [activeCharacter, setActiveCharacter] = useState(1)

  const handleCharacterClick = (index: number) => {
    setActiveCharacter(index)
  }

  return (
    <section className='flex flex-col items-center w-[80%]'>
      <h2 className='sectionTitle'>Pick your pilot:</h2>
      <p className='text-lightColor text-center pb-4'>{content.title}</p>
      <div className='flex flex-wrap gap-4 justify-center w-full'>
        {content.characters.map((character, index) => (
          <div key={index} className='relative'>
            <Image
              src={urlForImage(character.image).url()}
              alt={character.name}
              width={250}
              height={200}
            />
            <div
              className={`inset-0 cursor-pointer absolute ${
                activeCharacter === index ? '' : 'bg-darkOpacity'
              }`}
              onClick={() => handleCharacterClick(index)}>
              {activeCharacter === index && (
                <div className='inset-0 flex items-center justify-center'>
                  <p className='text-white text-xl'>{character.name}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* <p className='text-lightColor w-1/3 text-center p-4'>
        {characters[activeCharacter].description}
      </p> */}
    </section>
  )
}

export default MeetTheCharacter
