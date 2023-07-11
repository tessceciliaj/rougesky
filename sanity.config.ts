import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schemas'

export default defineConfig({
	name: 'RogueSky',
	basePath: '/studio',
	projectId,
	dataset,
	schema,
	plugins: [deskTool(), visionTool({ defaultApiVersion: apiVersion })],
})
