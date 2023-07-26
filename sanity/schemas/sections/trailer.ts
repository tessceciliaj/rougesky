import { defineField, defineType } from 'sanity'

export const trailer = defineType({
	name: 'trailer_section',
	title: 'Trailer section',
	type: 'object',
	fields: [
		defineField({
			name: 'url',
			title: 'Url',
			type: 'url',
		}),
		defineField({
			name: 'desc',
			title: 'Description',
			type: 'array',
			of: [{ type: 'block' }],
		}),
	],
})
