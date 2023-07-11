import { homepage } from './homepage'
import { hero } from './sections/hero'
import { cta } from './components/cta'
import type { SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [homepage, hero, cta],
}
