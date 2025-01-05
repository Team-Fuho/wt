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
    "fragment DefaultPageView on PageInterface {\n  id\n  title\n  slug\n  seoTitle\n  firstPublishedAt\n  lastPublishedAt\n}\n\nfragment DefaultImageView on TFImage {\n  id\n  url\n  rendition(width: 1200, height: 630, format: \"jpeg\", jpegquality: 85) {\n    id\n    url\n    width\n    height\n  }\n  srcSet(sizes: [768, 1080], format: \"webp\")\n  width\n  height\n}\n\nfragment BlogPageOuterView on BlogPage {\n  ...DefaultPageView\n  intro\n  involved {\n    id\n    name\n    image {\n      url\n      srcSet(sizes: [8, 16, 32, 64], format: \"webp\")\n    }\n  }\n  thumb {\n    ...DefaultImageView\n  }\n}\n\nfragment BlogPageInnerView on BlogPage {\n  ...BlogPageOuterView\n  body {\n    ... on StreamFieldInterface {\n      blockType\n    }\n    ... on RichTextBlock {\n      value\n    }\n    ... on ImageBlock {\n      caption\n      link\n      alignment\n      image {\n        ...DefaultImageView\n      }\n    }\n    ... on QuoteBlock {\n      quote\n      attribution\n    }\n    ... on HeadingBlock {\n      text\n      importance\n    }\n  }\n}\n\nfragment GalleryOuterView on Picture {\n  id\n  title\n  cap\n  image {\n    ...DefaultImageView\n  }\n  imageDate\n}\n\nfragment PaginationView on PaginationType {\n  total\n  count\n  perPage\n  currentPage\n  prevPage\n  nextPage\n  totalPages\n}\n\nquery GalleryPaginatedListView($page: PositiveInt, $perPage: PositiveInt, $order: String) {\n  pictures(page: $page, perPage: $perPage, order: $order) {\n    pagination {\n      ...PaginationView\n    }\n    items {\n      ...GalleryOuterView\n    }\n  }\n}\n\nquery BlogPaginatedListView($page: PositiveInt, $perPage: PositiveInt, $order: String) {\n  blogs(page: $page, perPage: $perPage, order: $order) {\n    pagination {\n      ...PaginationView\n    }\n    items {\n      ...BlogPageOuterView\n    }\n  }\n}\n\nquery BlogPreviewView($token: String) {\n  blog(token: $token) {\n    ...BlogPageInnerView\n  }\n}\n\nquery BlogLiveView($slug: String) {\n  blog(slug: $slug) {\n    ...BlogPageInnerView\n  }\n}": types.DefaultPageViewFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment DefaultPageView on PageInterface {\n  id\n  title\n  slug\n  seoTitle\n  firstPublishedAt\n  lastPublishedAt\n}\n\nfragment DefaultImageView on TFImage {\n  id\n  url\n  rendition(width: 1200, height: 630, format: \"jpeg\", jpegquality: 85) {\n    id\n    url\n    width\n    height\n  }\n  srcSet(sizes: [768, 1080], format: \"webp\")\n  width\n  height\n}\n\nfragment BlogPageOuterView on BlogPage {\n  ...DefaultPageView\n  intro\n  involved {\n    id\n    name\n    image {\n      url\n      srcSet(sizes: [8, 16, 32, 64], format: \"webp\")\n    }\n  }\n  thumb {\n    ...DefaultImageView\n  }\n}\n\nfragment BlogPageInnerView on BlogPage {\n  ...BlogPageOuterView\n  body {\n    ... on StreamFieldInterface {\n      blockType\n    }\n    ... on RichTextBlock {\n      value\n    }\n    ... on ImageBlock {\n      caption\n      link\n      alignment\n      image {\n        ...DefaultImageView\n      }\n    }\n    ... on QuoteBlock {\n      quote\n      attribution\n    }\n    ... on HeadingBlock {\n      text\n      importance\n    }\n  }\n}\n\nfragment GalleryOuterView on Picture {\n  id\n  title\n  cap\n  image {\n    ...DefaultImageView\n  }\n  imageDate\n}\n\nfragment PaginationView on PaginationType {\n  total\n  count\n  perPage\n  currentPage\n  prevPage\n  nextPage\n  totalPages\n}\n\nquery GalleryPaginatedListView($page: PositiveInt, $perPage: PositiveInt, $order: String) {\n  pictures(page: $page, perPage: $perPage, order: $order) {\n    pagination {\n      ...PaginationView\n    }\n    items {\n      ...GalleryOuterView\n    }\n  }\n}\n\nquery BlogPaginatedListView($page: PositiveInt, $perPage: PositiveInt, $order: String) {\n  blogs(page: $page, perPage: $perPage, order: $order) {\n    pagination {\n      ...PaginationView\n    }\n    items {\n      ...BlogPageOuterView\n    }\n  }\n}\n\nquery BlogPreviewView($token: String) {\n  blog(token: $token) {\n    ...BlogPageInnerView\n  }\n}\n\nquery BlogLiveView($slug: String) {\n  blog(slug: $slug) {\n    ...BlogPageInnerView\n  }\n}"): typeof import('./graphql').DefaultPageViewFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
