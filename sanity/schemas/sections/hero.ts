import { type Image, defineField, defineType } from 'sanity'

import type { Ctas } from '../components/button'

export const hero = defineType({
  name: 'hero_section',
  title: 'Hero section',
  type: 'object',
  validation: (rule) => rule.required(),
  fields: [
    defineField({
      name: 'background_image',
      title: 'Background Image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ctas',
      title: 'Call to action buttons',
      type: 'ctas',
    }),
  ],
})

export type Hero = {
  background_image: Image
  ctas: Ctas
}
