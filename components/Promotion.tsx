import React from 'react'
import { ArrowDown } from 'react-bootstrap-icons'

const Promotion = () => {
  return (
    <section className='bg-black w-full min-h-screen flex flex-col justify-center items-center'>
      <h2 className='text-base md:text-xl font-bold text-lightColor text-center pb-2 px-6 md:px-24'>
        Don't Miss Your Flight! Your Ticket to Adventure
      </h2>
      <ArrowDown className='text-lightColor m-2 text-xl animate-bounce' />
      <button className='mainBtn rotateBtn bg-accentColor'>
        wishlist on steam
      </button>
    </section>
  )
}

export default Promotion