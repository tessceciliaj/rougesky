import { defineField, defineType } from 'sanity'

export const button = defineType({
  name: 'button',
  title: 'Call to action',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (rule) => rule.required().uri({ allowRelative: true }),
    }),
  ],
})
