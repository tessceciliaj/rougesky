import { defineArrayMember, defineField, defineType } from 'sanity'

export const hero = defineType({
  name: 'hero_section',
  title: 'Hero section',
  type: 'object',
  validation: rule => rule.required(),
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      description: 'Upload the logo as an .svg file',
      type: 'image',
      options: {
        accept: '.svg',
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'ctas',
      title: 'Call to action buttons',
      type: 'array',
      validation: rule => rule.required(),
      of: [
        defineArrayMember({
          name: 'button',
          type: 'button',
        }),
      ],
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      description: 'Short descriptive text about the game',
      type: 'string',
      validation: rule => rule.required(),
    }),
  ],
})
