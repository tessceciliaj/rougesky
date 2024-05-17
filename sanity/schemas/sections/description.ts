import { defineArrayMember, defineField, defineType } from 'sanity'
import type { PortableTextBlock } from 'next-sanity'

import type { ImageWithAlt } from '../components/image'

export const description = defineType({
  name: 'description_section',
  title: 'Description section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      description: 'Short descriptive text about the game',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'descriptions',
      title: 'Desctiption cards',
      type: 'array',
      validation: (rule) => rule.required(),
      of: [
        defineArrayMember({
          name: 'descriptions_card',
          title: 'Card',
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image_with_alt',
              validation: (rule) => rule.required(),
            }),
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
          ],
        }),
      ],
    }),
  ],
})

export type Description = {
  title: string
  subtitle: string
  descriptions: {
    image: ImageWithAlt
    title: string
    text: PortableTextBlock
    _key: string
  }[]
}
