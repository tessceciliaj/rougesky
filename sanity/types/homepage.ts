import type { Image, PortableTextBlock } from 'sanity'

type Homepage = {
  hero: Hero
  trailer: Trailer | undefined
  description: Description | undefined
  character: Character | undefined
  newsletter: Newsletter | undefined
  promotion: Promotion | undefined
  footer: Footer | undefined
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
}

type Trailer = {
  url: string
}

type Description = {
  title: string
  subtitle: string
  descriptions: {
    text: PortableTextBlock
    text_title: string
    image: ImageWithAlt
    _key: string
  }[]
}

type Character = {
  title: string
  text: PortableTextBlock
  image: ImageWithAlt
}

type Newsletter = {
  title: string
  desc: PortableTextBlock
  button: Cta
}

type Promotion = {
  title: string
  button: Cta
}

type Footer = {
  link: Cta
  copyright: Cta
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
  Footer,
}
