import { defineArrayMember, defineField, defineType } from 'sanity'

import type { Button, Ctas } from '../components/button'

export const header = defineType({
  name: 'header_section',
  title: 'Header section',
  type: 'object',
  validation: (rule) => rule.required(),
  fields: [
    defineField({
      name: 'ctas',
      title: 'Call to action buttons',
      type: 'ctas',
    }),
    defineField({
      name: 'socials_buttons',
      title: 'Socials buttons',
      type: 'array',
      validation: (rule) => rule.required().max(4),
      of: [
        defineArrayMember({
          name: 'button',
          title: 'Button',
          type: 'button',
        }),
      ],
    }),
  ],
})

export type Header = {
  socials_buttons: (Button & { _key: string })[]
  ctas: Ctas
}
