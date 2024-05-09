import { defineField, defineType } from 'sanity'

export const newsletter = defineType({
  name: 'newsletter_section',
  title: 'Newsletter section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'button',
    }),
  ],
})
