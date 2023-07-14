import { defineArrayMember, defineField, defineType } from 'sanity'

export const description = defineType({
	name: 'description_section',
	title: 'Description section',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'descriptions',
			title: 'Desctiption cards',
			type: 'array',
			of: [
				defineArrayMember({
					name: 'descriptions_card',
					title: 'Card',
					type: 'object',
					fields: [
						defineField({
							name: 'image',
							title: 'Image',
							type: 'image',
							fields: [
								defineField({
									name: 'alt',
									title: 'Alternative text',
									type: 'string',
								}),
							],
						}),
						defineField({
							name: 'text',
							title: 'Text',
							type: 'array',
							of: [{ type: 'block' }],
						}),
					],
				}),
			],
		}),
	],
})
