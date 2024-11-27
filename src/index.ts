import {
  BlogListViewDocument,
  BlogPreviewViewDocument,
  BlogLiveViewDocument,
  TypedDocumentString
} from './graphql/graphql'

export interface GraphQLClientConfig {
  endpoint: string
  headers?: Record<string, string>
}

export async function execute<TResult, TVariables>(
  config: GraphQLClientConfig,
  query: TypedDocumentString<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> {
  try {
    const response = await fetch(config.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/graphql-response+json',
        ...config.headers
      },
      body: JSON.stringify({
        query: query.toString(),
        variables: variables || {}
      })
    })

    if (!response.ok) {
      throw new Error(`WTClientError: ${response.status} ${response.statusText}`)
    }

    return response.json() as TResult
  } catch (error) {
    console.error('WTClientError:', error)
    throw error
  }
}

export class BlogQueries {
  private config: GraphQLClientConfig

  constructor(config: GraphQLClientConfig) {
    this.config = config
  }

  // List all blog pages
  async listBlogs() {
    return execute(this.config, BlogListViewDocument)
  }

  // Get blog preview with token
  async getBlogPreview(token: string) {
    return execute(
      {
        ...this.config,
        headers: {
          ...this.config.headers,
          'Authorization': `Bearer ${token}`
        }
      },
      BlogPreviewViewDocument,
      { token }
    )
  }

  // Get live blog by slug
  async getBlogBySlug(slug: string) {
    return execute(this.config, BlogLiveViewDocument, { slug })
  }
}

