import { defineField, defineType } from 'sanity'

export const newsletter = defineType({
	name: 'newsletter_section',
	title: 'Newsletter section',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'desc',
			title: 'Description',
			type: 'array',
			of: [{ type: 'block' }],
		}),
	],
})
