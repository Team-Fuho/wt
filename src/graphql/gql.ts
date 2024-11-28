/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "fragment DefaultImageView on TFImage {\n  id\n  url\n  rendition(width: 1200, height: 630, format: \"jpeg\", jpegquality: 85) {\n    id\n    url\n    width\n    height\n  }\n  srcSet(sizes: [768, 1080], format: \"webp\")\n  width\n  height\n}\n\nfragment BlogPageOuterView on BlogPage {\n  id\n  slug\n  title\n  seoTitle\n  thumb {\n    ...DefaultImageView\n  }\n}\n\nfragment BlogPageInnerView on BlogPage {\n  body {\n    ... on StreamFieldInterface {\n      blockType\n    }\n    ... on RichTextBlock {\n      value\n    }\n    ... on ImageBlock {\n      caption\n      link\n      alignment\n      image {\n        ...DefaultImageView\n      }\n    }\n    ... on QuoteBlock {\n      quote\n      attribution\n    }\n    ... on HeadingBlock {\n      text\n      importance\n    }\n  }\n}\n\nfragment GalleryOuterView on Picture {\n  id\n  cap\n  image {\n    ...DefaultImageView\n  }\n  imageDate\n}\n\nquery GalleryListView {\n  pages(contentType: \"gallery.Picture\") {\n    ...GalleryOuterView\n  }\n}\n\nquery GalleryPaginatedListView($offset: PositiveInt, $limit: PositiveInt, $order: String) {\n  pages(\n    contentType: \"gallery.Picture\"\n    offset: $offset\n    limit: $limit\n    order: $order\n  ) {\n    ...GalleryOuterView\n  }\n}\n\nquery BlogListView {\n  pages(contentType: \"blog.BlogPage\") {\n    ...BlogPageOuterView\n  }\n}\n\nquery BlogPaginatedListView($offset: PositiveInt, $limit: PositiveInt, $order: String) {\n  pages(\n    contentType: \"blog.BlogPage\"\n    offset: $offset\n    limit: $limit\n    order: $order\n  ) {\n    ...BlogPageOuterView\n  }\n}\n\nquery BlogPreviewView($token: String) {\n  page(id: 0, token: $token) {\n    ...BlogPageOuterView\n    ...BlogPageInnerView\n  }\n}\n\nquery BlogLiveView($slug: String) {\n  page(slug: $slug) {\n    ...BlogPageOuterView\n    ...BlogPageInnerView\n  }\n}": types.DefaultImageViewFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment DefaultImageView on TFImage {\n  id\n  url\n  rendition(width: 1200, height: 630, format: \"jpeg\", jpegquality: 85) {\n    id\n    url\n    width\n    height\n  }\n  srcSet(sizes: [768, 1080], format: \"webp\")\n  width\n  height\n}\n\nfragment BlogPageOuterView on BlogPage {\n  id\n  slug\n  title\n  seoTitle\n  thumb {\n    ...DefaultImageView\n  }\n}\n\nfragment BlogPageInnerView on BlogPage {\n  body {\n    ... on StreamFieldInterface {\n      blockType\n    }\n    ... on RichTextBlock {\n      value\n    }\n    ... on ImageBlock {\n      caption\n      link\n      alignment\n      image {\n        ...DefaultImageView\n      }\n    }\n    ... on QuoteBlock {\n      quote\n      attribution\n    }\n    ... on HeadingBlock {\n      text\n      importance\n    }\n  }\n}\n\nfragment GalleryOuterView on Picture {\n  id\n  cap\n  image {\n    ...DefaultImageView\n  }\n  imageDate\n}\n\nquery GalleryListView {\n  pages(contentType: \"gallery.Picture\") {\n    ...GalleryOuterView\n  }\n}\n\nquery GalleryPaginatedListView($offset: PositiveInt, $limit: PositiveInt, $order: String) {\n  pages(\n    contentType: \"gallery.Picture\"\n    offset: $offset\n    limit: $limit\n    order: $order\n  ) {\n    ...GalleryOuterView\n  }\n}\n\nquery BlogListView {\n  pages(contentType: \"blog.BlogPage\") {\n    ...BlogPageOuterView\n  }\n}\n\nquery BlogPaginatedListView($offset: PositiveInt, $limit: PositiveInt, $order: String) {\n  pages(\n    contentType: \"blog.BlogPage\"\n    offset: $offset\n    limit: $limit\n    order: $order\n  ) {\n    ...BlogPageOuterView\n  }\n}\n\nquery BlogPreviewView($token: String) {\n  page(id: 0, token: $token) {\n    ...BlogPageOuterView\n    ...BlogPageInnerView\n  }\n}\n\nquery BlogLiveView($slug: String) {\n  page(slug: $slug) {\n    ...BlogPageOuterView\n    ...BlogPageInnerView\n  }\n}"): typeof import('./graphql').DefaultImageViewFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
