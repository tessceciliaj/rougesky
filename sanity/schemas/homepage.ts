import { defineField, defineType } from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero section',
      type: 'hero_section',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'header',
      title: 'Header Section',
      type: 'header_section',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'trailer',
      title: 'Trailer section',
      type: 'trailer_section',
    }),
    defineField({
      name: 'description',
      title: 'Description section',
      type: 'description_section',
    }),
    defineField({
      name: 'character',
      title: 'Character section',
      type: 'character_section',
    }),
    defineField({
      name: 'newsletter',
      title: 'Newsletter section',
      type: 'newsletter_section',
    }),
    defineField({
      name: 'footer',
      title: 'Footer Section',
      type: 'footer_section',
    }),
  ],
})
