import { defineArrayMember, defineField, defineType } from 'sanity'

export const hero = defineType({
  name: 'hero_section',
  title: 'Hero section',
  type: 'object',
  validation: rule => rule.required(),
  fields: [
    defineField({
      name: 'background_image',
      title: 'Background Image',
      type: 'image',
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
  ],
})
