'use client'

import YouTube, { YouTubeProps } from 'react-youtube'

import type { Trailer as TrailerProps } from '@/sanity/schemas/sections/trailer'

export const Trailer = ({ content }: { content: TrailerProps }) => {
  const videoId = new URL(content.url).searchParams.get('v') || undefined

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  }

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      onReady={onPlayerReady}
      className='flex aspect-video max-h-[calc(100vh-4rem)] w-full max-w-6xl flex-col justify-center pt-12 md:px-12'
    />
  )
}
