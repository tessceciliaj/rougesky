import { defineField, defineType } from 'sanity'
import type { PortableTextBlock } from 'next-sanity'

import type { Button } from '../components/button'

export const newsletter = defineType({
  name: 'newsletter_section',
  title: 'Newsletter section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'button',
    }),
  ],
})

export type Newsletter = {
  title: string
  desc: PortableTextBlock
  button: Button
}
