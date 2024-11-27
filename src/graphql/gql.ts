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
    "fragment BlogPageView on BlogPage {\n  id\n  slug\n  title\n  seoTitle\n  thumb {\n    id\n    rendition(width: 1920, height: 1080, format: \"webp\") {\n      id\n      url\n    }\n  }\n}\n\nfragment BlogPageViewInner on BlogPage {\n  body {\n    ... on StreamFieldInterface {\n      blockType\n    }\n    ... on RichTextBlock {\n      value\n    }\n    ... on ImageBlock {\n      caption\n      link\n      alignment\n      image {\n        url\n        width\n        height\n      }\n    }\n    ... on QuoteBlock {\n      quote\n      attribution\n    }\n    ... on HeadingBlock {\n      text\n      importance\n    }\n  }\n}\n\nquery BlogListView {\n  pages(contentType: \"blog.BlogPage\") {\n    ...BlogPageView\n  }\n}\n\nquery BlogPreviewView($token: String) {\n  page(id: 0, token: $token) {\n    ...BlogPageView\n    ...BlogPageViewInner\n  }\n}\n\nquery BlogLiveView($slug: String) {\n  page(slug: $slug) {\n    ...BlogPageView\n    ...BlogPageViewInner\n  }\n}": types.BlogPageViewFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment BlogPageView on BlogPage {\n  id\n  slug\n  title\n  seoTitle\n  thumb {\n    id\n    rendition(width: 1920, height: 1080, format: \"webp\") {\n      id\n      url\n    }\n  }\n}\n\nfragment BlogPageViewInner on BlogPage {\n  body {\n    ... on StreamFieldInterface {\n      blockType\n    }\n    ... on RichTextBlock {\n      value\n    }\n    ... on ImageBlock {\n      caption\n      link\n      alignment\n      image {\n        url\n        width\n        height\n      }\n    }\n    ... on QuoteBlock {\n      quote\n      attribution\n    }\n    ... on HeadingBlock {\n      text\n      importance\n    }\n  }\n}\n\nquery BlogListView {\n  pages(contentType: \"blog.BlogPage\") {\n    ...BlogPageView\n  }\n}\n\nquery BlogPreviewView($token: String) {\n  page(id: 0, token: $token) {\n    ...BlogPageView\n    ...BlogPageViewInner\n  }\n}\n\nquery BlogLiveView($slug: String) {\n  page(slug: $slug) {\n    ...BlogPageView\n    ...BlogPageViewInner\n  }\n}"): typeof import('./graphql').BlogPageViewFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
