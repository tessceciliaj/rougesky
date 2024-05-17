import { type Image, defineField, defineType } from 'sanity'

export const imageWithAlt = defineType({
  name: 'image_with_alt',
  title: 'Image',
  type: 'image',
  fields: [
    defineField({
      name: 'alt',
      title: 'Alternative text',
      type: 'string',
    }),
  ],
})

export const svgWithAlt = defineType({
  name: 'svg_with_alt',
  title: 'Svg',
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
})

export type ImageWithAlt = Image & {
  alt: string
}
