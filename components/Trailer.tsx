'use client'
import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'

const Trailer = () => {
  const onPlayerReady: YouTubeProps['onReady'] = event => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  }

  return (
    <>
      <h3 className='text-lightColor p-12 md:p-24 md:text-lg text-center'>
        Trapped in a time loop you must defy gravity, time, and the invading
        alien race as you combat waves of enemies using aerial acrobatics and
        bullets.
      </h3>
      <YouTube
        videoId='FncHhkiWjDA'
        opts={opts}
        onReady={onPlayerReady}
        className='flex flex-col justify-center w-full aspect-video md:px-12 max-h-[calc(100vh-4rem)]'
      />
    </>
  )
}

export default Trailer
