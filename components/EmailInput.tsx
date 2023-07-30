import React from 'react'

const EmailInput = () => {
  return (
    <section className='w-[80%] max-w-[1075px] pb-24'>
      <h2 className='sectionTitle'>Stay in the loop!</h2>
      <p className='text-lightColor text-center pb-8'>
        Join our newsletter to get exclusive insight into the game and updates,
        betas. Secrets to become a <span className='text-accentColor font-bold'>god in the sky.</span>
      </p>
      <form className=' m-auto'>
        <label
          htmlFor='email'
          className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
          Email
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'></div>
          <input
            type='email'
            id='email'
            className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-accentColor focus:border-accentColor dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
            placeholder='Your Email'
            required
          />
          <button
            type='submit'
            className='text-white absolute right-2.5 bottom-2.5 mainBtn bg-accentColor'>
            Subscribe
          </button>
        </div>
      </form>
    </section>
  )
}

export default EmailInput
