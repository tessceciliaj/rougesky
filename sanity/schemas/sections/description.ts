import { defineArrayMember, defineField, defineType } from 'sanity'

export const description = defineType({
  name: 'description_section',
  title: 'Description section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      description: 'Short descriptive text about the game',
      type: 'string',
      validation: rule => rule.required(),
    }),
    
    defineField({
      name: 'descriptions',
      title: 'Desctiption cards',
      type: 'array',
      validation: rule => rule.required(),
      of: [
        defineArrayMember({
          name: 'descriptions_card',
          title: 'Card',
          type: 'object',
          fields: [
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
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'text_title',
              title: 'Text title',
              type: 'string',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'text',
              title: 'Text',
              type: 'array',
              of: [{ type: 'block' }],
              validation: rule => rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
})
