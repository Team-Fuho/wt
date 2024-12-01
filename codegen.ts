import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:8000/api/graphql/',
  documents: ['src/**/*.gql'],
  ignoreNoDocuments: true,
  generates: {
    './src/graphql/': {
      preset: 'client',
      presetConfig: {
        persistedDocuments: {
          hashAlgorithm: 'sha1'
        },
        fragmentMasking: false,
        avoidOptional: true,
        enumAsType: true
      },
      config: {
        documentMode: 'string',
        dedupeFragments: true,
      }
    },
    // './src/graphql/schema.graphql': {
    //   plugins: ['schema-ast'],
    //   config: {
    //     includeDirectives: true
    //   }
    // }
  }
}

export default config