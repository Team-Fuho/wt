import {
  GalleryPaginatedListViewDocument,
  BlogPaginatedListViewDocument,
  BlogLiveViewDocument,
  BlogPreviewViewDocument,
  type TypedDocumentString
} from './graphql/graphql'

// import persisted from './graphql/persisted-documents.json'

export interface GraphQLClientConfig {
  endpoint: string
  headers?: Record<string, string>
}

async function execute<TResult, TVariables>(
  config: GraphQLClientConfig,
  query: TypedDocumentString<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> {
  const hash = query.__meta__?.hash

  const response = await fetch(config.endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/graphql-response+json',
      ...config.headers
    },
    body: JSON.stringify({
      // query: persisted[hash],
      query: query.trim(),
      variables: variables || {},
      hash: hash
    })
  })

  if (!response.ok) {
    throw new Error(
      `WTClientRequestError: ${response.status} ${response.statusText}`
    )
  }

  const responseObject = await response.json()

  if (!response || !responseObject.data) {
    console.log(responseObject)
    throw new Error('WTClientRequestError: Malformed JSON data')
  }

  return responseObject.data as TResult
}

export default class WTClient {
  private config: GraphQLClientConfig

  constructor(config: GraphQLClientConfig) {
    this.config = config
  }

  /**
   * List all gallery image
   */
  async listPictures(page?: number, perPage?: number, order?: string) {
    return (
      await execute(this.config, GalleryPaginatedListViewDocument, {
        page: page,
        perPage: perPage,
        order: order || '-id'
      })
    ).pictures
  }

  /**
   * List all blog page
   */
  async listBlogs(page = 0, perPage = 1024, order = '-id') {
    return await execute(this.config, BlogPaginatedListViewDocument, {
      page: page,
      perPage: perPage,
      order: order
    })
  }

  /**
   * Get blog view from preview token
   * @param token urlparsed token query (added by wagtail addon)
   */
  async getBlogPreview(token: string) {
    return (
      await execute(
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
    ).blog
  }

  /**
   * Get blog view from slug
   * @param slug
   */
  async getBlogBySlug(slug: string) {
    return (await execute(this.config, BlogLiveViewDocument, { slug })).blog
  }
}
