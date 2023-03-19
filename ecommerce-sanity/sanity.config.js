import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'ecommerce-sanity',

  projectId: 'ayuk6mt4',
  dataset: 'ecommerce-sanity',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
