import { defineArrayMember, defineField, defineType } from 'sanity'

export const homepage = defineType({
	name: 'homepage',
	title: 'Homepage',
	type: 'document',
	fields: [
		defineField({
			name: 'hero',
			title: 'Hero section',
			type: 'hero',
		}),
		// defineField({
		// 	name: 'pageBuilder',
		// 	title: 'Page Builder',
		// 	type: 'array',
		// 	of: [
		// 		defineArrayMember({
		// 			name: 'bigText',
		// 			type: 'bigText',
		// 		}),
		// 		defineArrayMember({
		// 			name: 'video',
		// 			type: 'video',
		// 		}),
		// 	],
		// }),
	],
})
