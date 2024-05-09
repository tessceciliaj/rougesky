import { defineField, defineType } from 'sanity'

export const footer = defineType({
  name: 'footer_section',
  title: 'Footer Section',
  type: 'object',
  validation: rule => rule.required(),
  fields: [
    defineField({
      name: 'link',
      title: 'Link',
      type: 'button',
      validation: rule => rule.required(),
    }),
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
      name: 'copyright',
      title: 'CopyRight',
      type: 'button',
      validation: rule => rule.required(),
    }),
  ],
})
