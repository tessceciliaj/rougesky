import type { Image, PortableTextBlock } from 'sanity'

export type Homepage = {
  hero: Hero
  header: Header
  trailer: Trailer | undefined
  description: Description | undefined
  character: Character | undefined
  newsletter: Newsletter | undefined
  footer: Footer | undefined
}

export type Button = {
  text?: string
  icon?: ImageWithAlt
  link: string
  _key: string
}

interface ImageWithAlt extends Image {
  alt: string
}

export type Header = {
  iconButtons: Button[]
}

export type Hero = {
  background_image: Image
  ctas: Button[]
}

export type Trailer = {
  url: string
}

export type Description = {
  title: string
  subtitle: string
  descriptions: {
    text: PortableTextBlock
    text_title: string
    image: ImageWithAlt
    _key: string
  }[]
}

export type Character = {
  title: string
  text: PortableTextBlock
  image: ImageWithAlt
}

export type Newsletter = {
  title: string
  desc: PortableTextBlock
  button: Button
}

export type Footer = {
  link: Button
  logo: Image
  copyright: Button
}
