import { defineArrayMember, defineField, defineType } from 'sanity'

import type { Button } from '../components/button'

export const header = defineType({
  name: 'header_section',
  title: 'Header section',
  type: 'object',
  fields: [
    defineField({
      name: 'iconButtons',
      title: 'Icon Buttons',
      type: 'array',
      validation: (rule) => rule.required(),
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
  iconButtons: (Button & { _key: string })[]
}
