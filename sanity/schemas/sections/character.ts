import { defineArrayMember, defineField, defineType } from 'sanity'

export const character = defineType({
  name: 'character_section',
  title: 'Character section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'characters',
      title: 'Character cards',
      type: 'array',
      validation: rule => rule.required(),
      of: [
        defineArrayMember({
          name: 'characters_card',
          title: 'Card',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              validation: rule => rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
})
