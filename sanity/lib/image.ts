import createImageUrlBuilder from '@sanity/image-url'

import { client } from './client'
import type { Image } from 'sanity'

const builder = createImageUrlBuilder(client)

export const urlForImage = (source: Image) => {
  return builder.image(source)
}

export const getImageDimensions = (source: Image) => {
  if (!source.asset?._ref) return { width: 0, height: 0 }

  const dimensions = source.asset._ref.split('-')[2]
  const [width, height] = dimensions
    .split('x')
    .map((number) => parseInt(number, 10))

  return { width, height }
}
