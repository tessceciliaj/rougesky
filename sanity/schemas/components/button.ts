import { defineField, defineType } from 'sanity'

import { assert } from '@/utils/assert'
import { eitherOr } from '../utils'
import type { ImageWithAlt } from './image'

export const button = defineType({
  name: 'button',
  title: 'Button',
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
