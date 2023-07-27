import type { Image, PortableTextBlock } from 'sanity'

type Homepage = {
  hero: Hero
  trailer: Trailer | undefined
  description: Description | undefined
  character: Character | undefined
  newsletter: Newsletter | undefined
  promotion: Promotion | undefined
}

type Cta = {
  text: string
  link: string
  _key: string
}

interface ImageWithAlt extends Image {
  alt: string
}

type Hero = {
  logo: Image
  ctas: Cta[]
  desc: string
}

type Trailer = {
  url: string
}

type Description = {
  title: string
  descriptions: { text: PortableTextBlock; image: ImageWithAlt; _key: string }[]
}

type Character = {
  title: string
  characters: { name: string; image: Image; _key: string }[]
}

type Newsletter = {
  title: string
  desc: PortableTextBlock
}

type Promotion = {
  title: string
  button: Cta
}

export type {
  Homepage,
  Hero,
  Cta,
  Trailer,
  Description,
  Character,
  Newsletter,
  Promotion,
}
