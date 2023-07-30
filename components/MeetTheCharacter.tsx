'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import demoPicture from '@/public/picture.jpg'

const MeetTheCharacter = () => {
  const [activeCharacter, setActiveCharacter] = useState(1)

  const characters = [
    { name: 'Josie the Pilot', description: 'Description for Josie...' },
    { name: 'There the Pilot', description: 'Description for There...' },
    { name: 'Ella the Pilot', description: 'Description for Ella...' },
  ]

  console.log(activeCharacter)

  const handleCharacterClick = (index: number) => {
    setActiveCharacter(index)
  }

  return (
    <section className='flex flex-col items-center w-[80%]'>
      <h2 className='sectionTitle'>Pick your pilot:</h2>
      <p className='text-lightColor text-center pb-4'>
        Enlist a diverse crew of pilots, each bringing a unique aircraft and set
        of abilities to your squadron, making every flight experience
        distinctively engaging and different. Uncover their past and fix their
        future as you collect and combine weapons and upgrades into godlike
        synergies in the sky.{' '}
      </p>
      <div className='flex flex-wrap gap-4 justify-center w-full'>
        {characters.map((character, index) => (
          <div key={index} className='relative'>
            <Image
              src={demoPicture}
              alt={character.name}
              width={350}
              height={200}
              className=''
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
      <p className='text-lightColor w-1/3 text-center p-4'>
        {characters[activeCharacter].description}
      </p>
    </section>
  )
}

export default MeetTheCharacter
