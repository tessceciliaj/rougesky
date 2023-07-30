import React from 'react'

const Promotion = () => {
  return (
    <section className='bg-black w-full min-h-screen flex flex-col justify-center items-center'>
      <h2 className=' text-base md:text-xl font-bold text-lightColor text-center pb-6 px-6 md:px-24 md:pb-12'>
        Some Nice Promotion Title!
      </h2>
      <button className='mainBtn rotateBtn bg-accentColor'>
        wishlist on steam
      </button>
    </section>
  )
}

export default Promotion