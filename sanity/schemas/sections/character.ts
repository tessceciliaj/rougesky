import { defineArrayMember, defineField, defineType } from 'sanity'

export const character = defineType({
	name: 'character_section',
	title: 'Character section',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'characters',
			title: 'Character cards',
			type: 'array',
			of: [
				defineArrayMember({
					name: 'characters_card',
					title: 'Card',
					type: 'object',
					fields: [
						defineField({
							name: 'name',
							title: 'Name',
							type: 'string',
						}),
						defineField({
							name: 'image',
							title: 'Image',
							type: 'image',
						}),
					],
				}),
			],
		}),
	],
})
