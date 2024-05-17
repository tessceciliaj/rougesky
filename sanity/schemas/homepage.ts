import { defineField, defineType } from 'sanity'

import type { Hero } from './sections/hero'
import type { Header } from './sections/header'
import type { Trailer } from './sections/trailer'
import type { Description } from './sections/description'
import type { Character } from './sections/character'
import type { Newsletter } from './sections/newsletter'
import type { Footer } from './sections/footer'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header Section',
      type: 'header_section',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero section',
      type: 'hero_section',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'trailer',
      title: 'Trailer section',
      type: 'trailer_section',
    }),
    defineField({
      name: 'description',
      title: 'Description section',
      type: 'description_section',
    }),
    defineField({
      name: 'character',
      title: 'Character section',
      type: 'character_section',
    }),
    defineField({
      name: 'newsletter',
      title: 'Newsletter section',
      type: 'newsletter_section',
    }),
    defineField({
      name: 'footer',
      title: 'Footer Section',
      type: 'footer_section',
    }),
  ],
})

export type Homepage = {
  hero: Hero
  header: Header
  trailer: Trailer | undefined
  description: Description | undefined
  character: Character | undefined
  newsletter: Newsletter | undefined
  footer: Footer | undefined
}
