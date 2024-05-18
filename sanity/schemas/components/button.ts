import { defineArrayMember, defineField, defineType } from 'sanity'

import { assert } from '@/utils/assert'
import { eitherOr } from '../utils'
import type { ImageWithAlt } from './image'

export const button = defineType({
  name: 'button',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (rule) =>
        rule.custom((field, context) =>
          eitherOr(
            () => {
              assert(field)
            },
            () => {
              assert(context.parent)
              assert(typeof context.parent === 'object')
              assert('icon' in context.parent)
              assert(context.parent.icon)
              assert(typeof context.parent.icon === 'object')
              assert('asset' in context.parent.icon)
            },
            'Either label or icon needs to be defined',
          ),
        ),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'svg_with_alt',
      validation: (rule) =>
        rule.custom((field, context) =>
          eitherOr(
            () => {
              assert(field)
              assert(typeof field === 'object')
              assert('asset' in field)
            },
            () => {
              assert(context.parent)
              assert(typeof context.parent === 'object')
              assert('label' in context.parent)
            },
            'Either label or icon needs to be defined',
          ),
        ),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (rule) => rule.required().uri({ allowRelative: true }),
    }),
  ],
})

export type Button = {
  label?: string
  icon?: ImageWithAlt
  link: string
}

export const ctas = defineType({
  name: 'ctas',
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
})

export type Ctas = {
  _key: string
  primary: boolean | undefined
  button: Button
}[]
