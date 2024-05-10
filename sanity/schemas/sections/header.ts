import { defineArrayMember, defineField, defineType } from 'sanity'

export const header = defineType({
  name: 'header_section',
  title: 'Header section',
  type: 'object',
  fields: [
    defineField({
      name: 'iconButtons',
      title: 'Icon Buttons',
      type: 'array',
      validation: rule => rule.required(),
      of: [
        defineArrayMember({
          name: 'button',
          title: 'Button',
          type: 'object',
          validation: rule => rule.required(),
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: {
                accept: '.svg',
              },
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alternative text',
                  type: 'string',
                }),
              ],
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
              validation: rule => rule.required().uri({ allowRelative: true }),
            }),
          ],
        }),
      ],
    }),
  ],
})
