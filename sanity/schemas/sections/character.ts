import { defineField, defineType } from 'sanity'
import type { PortableTextBlock } from 'next-sanity'

import type { ImageWithAlt } from '../components/image'

export const character = defineType({
  name: 'character_section',
  title: 'Character section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
  ],
})

export type Character = {
  title: string
  text: PortableTextBlock
  image: ImageWithAlt
}
