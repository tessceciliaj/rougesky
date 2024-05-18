import { type Image, defineArrayMember, defineField, defineType } from 'sanity'

import { assert } from '@/utils/assert'
import type { Button } from '../components/button'

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
      type: 'array',
      validation: (rule) =>
        rule.custom((field) => {
          assert(Array.isArray(field))

          if (field.length === 1) return true
          if (field.length > 2) return 'No more than two buttons are allowed'

          const primaryButtons = field.reduce(
            (count: number, item: any) => count + (item.primary ? 1 : 0),
            0,
          )

          if (primaryButtons > 1) return 'Only one primary button is allowed'
          if (primaryButtons < 1) return 'One button must be marked as primary'

          return true
        }),
      of: [
        defineArrayMember({
          name: 'cta',
          title: 'Call to action',
          type: 'object',
          fields: [
            defineField({
              name: 'primary',
              title: 'Primary call to action (shown on mobile)',
              type: 'boolean',
            }),
            defineField({
              name: 'button',
              type: 'button',
            }),
          ],
        }),
      ],
    }),
  ],
})

export type Hero = {
  background_image: Image
  ctas: { _key: string; primary: boolean | undefined; button: Button }[]
}
