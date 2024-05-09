import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

import { apiVersion, dataset, projectId } from '@/sanity/env'
import { schema } from '@/sanity/schemas'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['homepage'])

export default defineConfig({
  name: 'RogueSky',
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [
    deskTool({
      structure: S =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Homepage')
              .id('homepage')
              .child(
                S.document()
                  .title('Homepage')
                  .schemaType('homepage')
                  .documentId('homepage'),
              ),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: {
    types: schema,
    templates: templates =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
