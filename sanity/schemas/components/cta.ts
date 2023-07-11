import { defineField, defineType } from 'sanity'

export const cta = defineType({
	name: 'cta',
	title: 'Call to action',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
		}),
		defineField({
			name: 'link',
			type: 'url',
		}),
	],
})
