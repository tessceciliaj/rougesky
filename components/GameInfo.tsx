import React from 'react'
import Image from 'next/image'
import picture from '@/public/picture.jpg'

const GameInfo = () => {
  return (
    <section className='flex flex-col justify-center items-center min-h-screen'>
      <h2 className='sectionTitle'>
        A 2D aerial action rogue-lite like never before
      </h2>
      <div className='flex flex-wrap gap-4 justify-center w-full  text-lightColor'>
        <div className='flex flex-col w-80'>
          <Image
            src={picture}
            width={350}
            height={200}
            alt='Rougesky in action'
            className='rounded'
          />
          <p className='pt-4'>
            Play through different time periods and use time as your weapon, go
            forward backward, stop enemies, or speed up their existence past
            their time.
          </p>
        </div>
        <div className='w-80'>
          <Image
            src={picture}
            width={350}
            height={200}
            alt='Rougesky in action'
            className='rounded'
          />
          <p className='pt-4'>
            With each try, you'll grow stronger and unlock pilots, modifications
            and weapons derived from both alien and human technologies across
            different eras. As you replay, you change the timeline, uncover
            stories, and witness the pilots’ personal journeys and how they grow
            as a team.
          </p>
        </div>
        <div className='w-80'>
          <Image
            src={picture}
            width={350}
            height={200}
            alt='Rougesky in action'
            className='rounded'
          />
          <p className='pt-4'>
            Showcase your true mastery by amplifying the heat and stakes of each
            run by manipulating the cosmic forces through forbidden
            technologies. Push the limits, tighten the time loop, and prove your
            worth as you soar through intensified challenges in the skies.
          </p>
        </div>
      </div>
    </section>
  )
}

export default GameInfo