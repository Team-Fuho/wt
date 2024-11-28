import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:8000/api/graphql/',
  documents: ['src/**/*.gql'],
  ignoreNoDocuments: true,
  generates: {
    './src/graphql/': {
      preset: 'client',
      presetConfig: {
        persistedDocuments: true,
        fragmentMasking: false,
      },
      config: {
        documentMode: 'string',
        dedupeFragments: true,
        constEnums: true
      }
    },
    './src/graphql/schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true
      }
    }
  }
}

export default config