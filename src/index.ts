import {
  GalleryListViewDocument,
  GalleryPaginatedListViewDocument,
  BlogListViewDocument,
  BlogPaginatedListViewDocument,
  BlogLiveViewDocument,
  BlogPreviewViewDocument,
  type TypedDocumentString
} from './graphql/graphql'

export interface GraphQLClientConfig {
  endpoint: string
  headers?: Record<string, string>
}

async function execute<TResult, TVariables>(
  config: GraphQLClientConfig,
  query: TypedDocumentString<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> {
  const response = await fetch(config.endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/graphql-response+json',
      ...config.headers
    },
    body: JSON.stringify({
      query: query.trim(),
      variables: variables || {},
      hash: query.__meta__?.hash
    })
  })

  if (!response.ok) {
    throw new Error(
      `WTClientRequestError: ${response.status} ${response.statusText}`
    )
  }

  return response.json() as TResult
}

export default class WTClient {
  private config: GraphQLClientConfig

  constructor(config: GraphQLClientConfig) {
    this.config = config
  }

  /**
   * List all gallery image
   */
  async listPictures(offset?: number, limit?: number, order?: string) {
    return offset && limit
      ? execute(this.config, GalleryPaginatedListViewDocument, {
        offset,
        limit,
        order: order || "id"
      })
      : execute(this.config, GalleryListViewDocument)
  }

  /**
   * List all blog page
   */
  async listBlogs(offset?: number, limit?: number, order?: string) {
    return offset && limit
      ? execute(this.config, BlogPaginatedListViewDocument, {
        offset,
        limit,
        order: order || "id"
      })
      : execute(this.config, BlogListViewDocument)
  }

  /**
   * Get blog view from preview token
   * @param token urlparsed token query (added by wagtail addon)
   */
  async getBlogPreview(token: string) {
    return execute(
      {
        ...this.config,
        headers: {
          ...this.config.headers,
          Authorization: `Bearer ${token}`
        }
      },
      BlogPreviewViewDocument,
      { token }
    )
  }

  /**
   * Get blog view from slug
   * @param slug
   */
  async getBlogBySlug(slug: string) {
    return execute(this.config, BlogLiveViewDocument, { slug })
  }
}
