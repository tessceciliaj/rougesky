import { homepage } from './homepage'
import { hero } from './sections/hero'
import { trailer } from './sections/trailer'
import { description } from './sections/description'
import { character } from './sections/character'
import { newsletter } from './sections/newsletter'
import { callToAction } from './sections/callToAction'
import { button } from './components/button'
import type { SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		homepage,
		hero,
		trailer,
		description,
		character,
		newsletter,
		callToAction,
		button,
	],
}
