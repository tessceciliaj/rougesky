import { defineField, defineType } from 'sanity'

export const promotion = defineType({
  name: 'promotion_section',
  title: 'Promotion section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'button',
      validation: rule => rule.required(),
    }),
  ],
})
