import { defineArrayMember, defineField, defineType } from 'sanity'

export const hero = defineType({
	name: 'hero_section',
	title: 'Hero section',
	type: 'object',
	fields: [
		defineField({
			name: 'logo',
			title: 'Logo',
			description: 'Upload the logo as an .svg file',
			type: 'image',
			options: {
				accept: '.svg',
			},
		}),
		defineField({
			name: 'ctas',
			title: 'Call to action buttons',
			type: 'array',
			of: [
				defineArrayMember({
					name: 'button',
					type: 'button',
				}),
			],
		}),
	],
})
