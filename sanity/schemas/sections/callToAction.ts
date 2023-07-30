import { defineField, defineType } from 'sanity'

export const callToAction = defineType({
	name: 'call_to_action_section',
	title: 'Call to action section',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'button',
			title: 'Button',
			type: 'button',
		}),
	],
})