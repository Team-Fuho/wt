/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: { input: any; output: any; }
  /**
   * Allows use of a JSON String for input / output from the GraphQL schema.
   *
   * Use of this type is *not recommended* as you lose the benefits of having a defined, static
   * schema (one of the key benefits of GraphQL).
   */
  JSONString: { input: any; output: any; }
  /** GraphQL type for an integer that must be equal or greater than zero. */
  PositiveInt: { input: any; output: any; }
  /**
   * Leverages the internal Python implementation of UUID (uuid.UUID) to provide native UUID objects
   * in fields, resolvers and input.
   */
  UUID: { input: any; output: any; }
};

export type BlockQuoteBlock = StreamFieldInterface & {
  __typename?: 'BlockQuoteBlock';
  blockType: Scalars['String']['output'];
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  rawValue: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type BlogInvolvementInfo = {
  __typename?: 'BlogInvolvementInfo';
  author?: Maybe<TfAuthor>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type BlogPage = PageInterface & {
  __typename?: 'BlogPage';
  aliasOf?: Maybe<Page>;
  aliases: Array<Page>;
  ancestors: Array<PageInterface>;
  blogDate?: Maybe<Scalars['String']['output']>;
  blogpage?: Maybe<BlogPage>;
  body?: Maybe<Array<Maybe<StreamFieldInterface>>>;
  children: Array<PageInterface>;
  contentType: Scalars['String']['output'];
  depth?: Maybe<Scalars['Int']['output']>;
  descendants: Array<PageInterface>;
  draftTitle: Scalars['String']['output'];
  expireAt?: Maybe<Scalars['DateTime']['output']>;
  expired: Scalars['Boolean']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  goLiveAt?: Maybe<Scalars['DateTime']['output']>;
  hasUnpublishedChanges: Scalars['Boolean']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  intro?: Maybe<Scalars['String']['output']>;
  involved?: Maybe<Array<Maybe<TfAuthor>>>;
  lastPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  latestRevisionCreatedAt?: Maybe<Scalars['DateTime']['output']>;
  live: Scalars['Boolean']['output'];
  locked?: Maybe<Scalars['Boolean']['output']>;
  lockedAt?: Maybe<Scalars['DateTime']['output']>;
  nextSiblings: Array<PageInterface>;
  numchild: Scalars['Int']['output'];
  pageType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<PageInterface>;
  path: Scalars['String']['output'];
  picture?: Maybe<Picture>;
  previousSiblings: Array<PageInterface>;
  searchDescription?: Maybe<Scalars['String']['output']>;
  searchScore?: Maybe<Scalars['Float']['output']>;
  seoTitle: Scalars['String']['output'];
  showInMenus: Scalars['Boolean']['output'];
  siblings: Array<PageInterface>;
  sitesRootedHere: Array<SiteObjectType>;
  slug: Scalars['String']['output'];
  tffuncgroup?: Maybe<TfFuncGroup>;
  thumb?: Maybe<TfImage>;
  title: Scalars['String']['output'];
  translationKey: Scalars['UUID']['output'];
  url?: Maybe<Scalars['String']['output']>;
  urlPath: Scalars['String']['output'];
};


export type BlogPageAncestorsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


export type BlogPageChildrenArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


export type BlogPageDescendantsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


export type BlogPageInvolvedArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


export type BlogPageNextSiblingsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


export type BlogPagePreviousSiblingsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


export type BlogPageSiblingsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};

export type BlogPagePaginatedType = {
  __typename?: 'BlogPagePaginatedType';
  items?: Maybe<Array<Maybe<BlogPage>>>;
  pagination?: Maybe<PaginationType>;
};

export type BooleanBlock = StreamFieldInterface & {
  __typename?: 'BooleanBlock';
  blockType: Scalars['String']['output'];
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  rawValue: Scalars['String']['output'];
  value: Scalars['Boolean']['output'];
};

export type CharBlock = StreamFieldInterface & {
  __typename?: 'CharBlock';
  blockType: Scalars['String']['output'];
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  rawValue: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ChoiceBlock = StreamFieldInterface & {
  __typename?: 'ChoiceBlock';
  blockType: Scalars['String']['output'];
  choices: Array<ChoiceOption>;
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  rawValue: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ChoiceOption = {
  __typename?: 'ChoiceOption';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

/** Collection type */
export type CollectionObjectType = {
  __typename?: 'CollectionObjectType';
  ancestors: Array<Maybe<CollectionObjectType>>;
  depth: Scalars['Int']['output'];
  descendants: Array<Maybe<CollectionObjectType>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  numchild: Scalars['Int']['output'];
  path: Scalars['String']['output'];
};

export type DateBlock = StreamFieldInterface & {
  __typename?: 'DateBlock';
  blockType: Scalars['String']['output'];
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  rawValue: Scalars['String']['output'];
  value: Scalars['String']['output'];
};


export type DateBlockValueArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeBlock = StreamFieldInterface & {
  __typename?: 'DateTimeBlock';
  blockType: Scalars['String']['output'];
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  rawValue: Scalars['String']['output'];
  value: Scalars['String']['output'];
};


export type DateTimeBlockValueArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

export type DecimalBlock = StreamFieldInterface & {
  __typename?: 'DecimalBlock';
  blockType: Scalars['String']['output'];
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  rawValue: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type DocumentChooserBlock = StreamFieldInterface & {
  __typename?: 'DocumentChooserBlock';
  blockType: Scalars['String']['output'];
  document?: Maybe<DocumentObjectType>;
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  rawValue: Scalars['String']['output'];
};

/**
 * Base document type used if one isn't generated for the current model.
 * All other node types extend this.
 */
export type DocumentObjectType = {
  __typename?: 'DocumentObjectType';
  collection: CollectionObjectType;
  createdAt: Scalars['DateTime']['output'];
  file: Scalars['String']['output'];
  fileHash: Scalars['String']['output'];
  fileSize?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  tags: Array<TagObjectType>;
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type EmailBlock = StreamFieldInterface & {
  __typename?: 'EmailBlock';
  blockType: Scalars['String']['output'];
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  rawValue: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type EmbedBlock = StreamFieldInterface & {
  __typename?: 'EmbedBlock';
  blockType: Scalars['String']['output'];
  embed?: Maybe<Scalars['String']['output']>;
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  rawEmbed?: Maybe<Scalars['JSONString']['output']>;
  rawValue: Scalars['String']['output'];
  url: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type FloatBlock = StreamFieldInterface & {
  __typename?: 'FloatBlock';
  blockType: Scalars['String']['output'];
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  rawValue: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type HeadingBlock = StreamFieldInterface & {
  __typename?: 'HeadingBlock';
  blockType: Scalars['String']['output'];
  blocks: Array<StreamFieldInterface>;
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  importance?: Maybe<Scalars['String']['output']>;
  rawValue: Scalars['String']['output'];
  text?: Maybe<Scalars['String']['output']>;
};

export type ImageBlock = StreamFieldInterface & {
  __typename?: 'ImageBlock';
  alignment?: Maybe<Scalars['String']['output']>;
  blockType: Scalars['String']['output'];
  blocks: Array<StreamFieldInterface>;
  caption?: Maybe<Scalars['String']['output']>;
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<TfImage>;
  link?: Maybe<Scalars['String']['output']>;
  rawValue: Scalars['String']['output'];
};

export type ImageChooserBlock = StreamFieldInterface & {
  __typename?: 'ImageChooserBlock';
  blockType: Scalars['String']['output'];
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<TfImage>;
  rawValue: Scalars['String']['output'];
};

export type IntegerBlock = StreamFieldInterface & {
  __typename?: 'IntegerBlock';
  blockType: Scalars['String']['output'];
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  rawValue: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type ListBlock = StreamFieldInterface & {
  __typename?: 'ListBlock';
  blockType: Scalars['String']['output'];
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  items: Array<StreamFieldInterface>;
  rawValue: Scalars['String']['output'];
};

/**
 * Base Page type used if one isn't generated for the current model.
 * All other node types extend this.
 */
export type Page = PageInterface & {
  __typename?: 'Page';
  aliasOf?: Maybe<Page>;
  aliases: Array<Page>;
  ancestors: Array<PageInterface>;
  blogpage?: Maybe<BlogPage>;
  children: Array<PageInterface>;
  contentType: Scalars['String']['output'];
  depth?: Maybe<Scalars['Int']['output']>;
  descendants: Array<PageInterface>;
  draftTitle: Scalars['String']['output'];
  expireAt?: Maybe<Scalars['DateTime']['output']>;
  expired: Scalars['Boolean']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  goLiveAt?: Maybe<Scalars['DateTime']['output']>;
  hasUnpublishedChanges: Scalars['Boolean']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  lastPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  latestRevisionCreatedAt?: Maybe<Scalars['DateTime']['output']>;
  live: Scalars['Boolean']['output'];
  locked?: Maybe<Scalars['Boolean']['output']>;
  lockedAt?: Maybe<Scalars['DateTime']['output']>;
  nextSiblings: Array<PageInterface>;
  numchild: Scalars['Int']['output'];
  pageType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<PageInterface>;
  path: Scalars['String']['output'];
  picture?: Maybe<Picture>;
  previousSiblings: Array<PageInterface>;
  searchDescription?: Maybe<Scalars['String']['output']>;
  searchScore?: Maybe<Scalars['Float']['output']>;
  seoTitle: Scalars['String']['output'];
  showInMenus: Scalars['Boolean']['output'];
  siblings: Array<PageInterface>;
  sitesRootedHere: Array<SiteObjectType>;
  slug: Scalars['String']['output'];
  tffuncgroup?: Maybe<TfFuncGroup>;
  title: Scalars['String']['output'];
  translationKey: Scalars['UUID']['output'];
  url?: Maybe<Scalars['String']['output']>;
  urlPath: Scalars['String']['output'];
};


/**
 * Base Page type used if one isn't generated for the current model.
 * All other node types extend this.
 */
export type PageAncestorsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Base Page type used if one isn't generated for the current model.
 * All other node types extend this.
 */
export type PageChildrenArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Base Page type used if one isn't generated for the current model.
 * All other node types extend this.
 */
export type PageDescendantsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Base Page type used if one isn't generated for the current model.
 * All other node types extend this.
 */
export type PageNextSiblingsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Base Page type used if one isn't generated for the current model.
 * All other node types extend this.
 */
export type PagePreviousSiblingsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Base Page type used if one isn't generated for the current model.
 * All other node types extend this.
 */
export type PageSiblingsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};

export type PageChooserBlock = StreamFieldInterface & {
  __typename?: 'PageChooserBlock';
  blockType: Scalars['String']['output'];
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  page?: Maybe<PageInterface>;
  rawValue: Scalars['String']['output'];
};

export type PageInterface = {
  ancestors: Array<PageInterface>;
  children: Array<PageInterface>;
  contentType: Scalars['String']['output'];
  depth?: Maybe<Scalars['Int']['output']>;
  descendants: Array<PageInterface>;
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lastPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  live: Scalars['Boolean']['output'];
  locked?: Maybe<Scalars['Boolean']['output']>;
  nextSiblings: Array<PageInterface>;
  pageType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<PageInterface>;
  previousSiblings: Array<PageInterface>;
  searchDescription?: Maybe<Scalars['String']['output']>;
  searchScore?: Maybe<Scalars['Float']['output']>;
  seoTitle: Scalars['String']['output'];
  showInMenus: Scalars['Boolean']['output'];
  siblings: Array<PageInterface>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
  urlPath: Scalars['String']['output'];
};


export type PageInterfaceAncestorsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


export type PageInterfaceChildrenArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


export type PageInterfaceDescendantsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


export type PageInterfaceNextSiblingsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


export type PageInterfacePreviousSiblingsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


export type PageInterfaceSiblingsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};

/** GraphQL type for Paginated QuerySet pagination field. */
export type PaginationType = {
  __typename?: 'PaginationType';
  count: Scalars['PositiveInt']['output'];
  currentPage: Scalars['PositiveInt']['output'];
  nextPage?: Maybe<Scalars['PositiveInt']['output']>;
  perPage: Scalars['PositiveInt']['output'];
  prevPage?: Maybe<Scalars['PositiveInt']['output']>;
  total: Scalars['PositiveInt']['output'];
  totalPages: Scalars['PositiveInt']['output'];
};

export type Picture = PageInterface & {
  __typename?: 'Picture';
  aliasOf?: Maybe<Page>;
  aliases: Array<Page>;
  ancestors: Array<PageInterface>;
  blogpage?: Maybe<BlogPage>;
  cap?: Maybe<Scalars['String']['output']>;
  children: Array<PageInterface>;
  contentType: Scalars['String']['output'];
  depth?: Maybe<Scalars['Int']['output']>;
  descendants: Array<PageInterface>;
  draftTitle: Scalars['String']['output'];
  expireAt?: Maybe<Scalars['DateTime']['output']>;
  expired: Scalars['Boolean']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  goLiveAt?: Maybe<Scalars['DateTime']['output']>;
  hasUnpublishedChanges: Scalars['Boolean']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<TfImage>;
  imageDate?: Maybe<Scalars['String']['output']>;
  lastPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  latestRevisionCreatedAt?: Maybe<Scalars['DateTime']['output']>;
  live: Scalars['Boolean']['output'];
  locked?: Maybe<Scalars['Boolean']['output']>;
  lockedAt?: Maybe<Scalars['DateTime']['output']>;
  nextSiblings: Array<PageInterface>;
  numchild: Scalars['Int']['output'];
  pageType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<PageInterface>;
  path: Scalars['String']['output'];
  picture?: Maybe<Picture>;
  previousSiblings: Array<PageInterface>;
  searchDescription?: Maybe<Scalars['String']['output']>;
  searchScore?: Maybe<Scalars['Float']['output']>;
  seoTitle: Scalars['String']['output'];
  showInMenus: Scalars['Boolean']['output'];
  siblings: Array<PageInterface>;
  sitesRootedHere: Array<SiteObjectType>;
  slug: Scalars['String']['output'];
  tffuncgroup?: Maybe<TfFuncGroup>;
  title: Scalars['String']['output'];
  translationKey: Scalars['UUID']['output'];
  url?: Maybe<Scalars['String']['output']>;
  urlPath: Scalars['String']['output'];
};


export type PictureAncestorsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


export type PictureChildrenArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


export type PictureDescendantsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


export type PictureNextSiblingsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


export type PicturePreviousSiblingsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


export type PictureSiblingsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};

export type PicturePaginatedType = {
  __typename?: 'PicturePaginatedType';
  items?: Maybe<Array<Maybe<Picture>>>;
  pagination?: Maybe<PaginationType>;
};

export type Query = {
  __typename?: 'Query';
  blog?: Maybe<BlogPage>;
  blogs?: Maybe<BlogPagePaginatedType>;
  collections: Array<Maybe<CollectionObjectType>>;
  document?: Maybe<DocumentObjectType>;
  documentType: Scalars['String']['output'];
  documents: Array<DocumentObjectType>;
  image?: Maybe<TfImage>;
  imageType: Scalars['String']['output'];
  images: Array<TfImage>;
  page?: Maybe<PageInterface>;
  pages: Array<PageInterface>;
  picture?: Maybe<Picture>;
  pictures?: Maybe<PicturePaginatedType>;
  redirects: Array<Redirect>;
  search: Array<Search>;
  site?: Maybe<SiteObjectType>;
  sites: Array<SiteObjectType>;
  snippets: Array<SnippetInterface>;
  tag?: Maybe<TagObjectType>;
  tags: Array<TagObjectType>;
};


export type QueryBlogArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  urlPath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlogsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['PositiveInt']['input']>;
  perPage?: InputMaybe<Scalars['PositiveInt']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDocumentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDocumentsArgs = {
  collection?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


export type QueryImageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryImagesArgs = {
  collection?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPageArgs = {
  contentType?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  inSite?: InputMaybe<Scalars['Boolean']['input']>;
  site?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  urlPath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPagesArgs = {
  ancestor?: InputMaybe<Scalars['ID']['input']>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  inSite?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPictureArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  urlPath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPicturesArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['PositiveInt']['input']>;
  perPage?: InputMaybe<Scalars['PositiveInt']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySearchArgs = {
  query?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySiteArgs = {
  hostname?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySitesArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTagArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTagsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
};

export type QuoteBlock = StreamFieldInterface & {
  __typename?: 'QuoteBlock';
  attribution?: Maybe<Scalars['String']['output']>;
  blockType: Scalars['String']['output'];
  blocks: Array<StreamFieldInterface>;
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  quote?: Maybe<Scalars['String']['output']>;
  rawValue: Scalars['String']['output'];
};

export type RawHtmlBlock = StreamFieldInterface & {
  __typename?: 'RawHTMLBlock';
  blockType: Scalars['String']['output'];
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  rawValue: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type Redirect = {
  __typename?: 'Redirect';
  isPermanent: Scalars['Boolean']['output'];
  newUrl?: Maybe<Scalars['String']['output']>;
  oldPath: Scalars['String']['output'];
  oldUrl: Scalars['String']['output'];
  page?: Maybe<PageInterface>;
  site: SiteObjectType;
};

export type RegexBlock = StreamFieldInterface & {
  __typename?: 'RegexBlock';
  blockType: Scalars['String']['output'];
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  rawValue: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type RichTextBlock = StreamFieldInterface & {
  __typename?: 'RichTextBlock';
  blockType: Scalars['String']['output'];
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  rawValue: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type Search = BlogInvolvementInfo | BlogPage | Page | Picture | TfAuthor | TfFuncGroup | TfImage | TfRendition;

/** Enum for search operator. */
export enum SearchOperatorEnum {
  And = 'AND',
  Or = 'OR'
}

export type SiteObjectType = {
  __typename?: 'SiteObjectType';
  hostname: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** If true, this site will handle requests for all other hostnames that do not have a site entry of their own */
  isDefaultSite: Scalars['Boolean']['output'];
  page?: Maybe<PageInterface>;
  pages: Array<PageInterface>;
  /** Set this to something other than 80 if you need a specific port number to appear in URLs (e.g. development on port 8000). Does not affect request handling (so port forwarding still works). */
  port: Scalars['Int']['output'];
  rootPage: Page;
  /** Human-readable name for the site. */
  siteName: Scalars['String']['output'];
};


export type SiteObjectTypePageArgs = {
  contentType?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  urlPath?: InputMaybe<Scalars['String']['input']>;
};


export type SiteObjectTypePagesArgs = {
  contentType?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};

export type SnippetChooserBlock = StreamFieldInterface & {
  __typename?: 'SnippetChooserBlock';
  blockType: Scalars['String']['output'];
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  rawValue: Scalars['String']['output'];
  snippet?: Maybe<SnippetInterface>;
};

export type SnippetInterface = {
  contentType: Scalars['String']['output'];
  snippetType: Scalars['String']['output'];
};

export type StaticBlock = StreamFieldInterface & {
  __typename?: 'StaticBlock';
  blockType: Scalars['String']['output'];
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  rawValue: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type StreamBlock = StreamFieldInterface & {
  __typename?: 'StreamBlock';
  blockType: Scalars['String']['output'];
  blocks: Array<StreamFieldInterface>;
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  rawValue: Scalars['String']['output'];
};

export type StreamFieldBlock = StreamFieldInterface & {
  __typename?: 'StreamFieldBlock';
  blockType: Scalars['String']['output'];
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  rawValue: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type StreamFieldInterface = {
  blockType: Scalars['String']['output'];
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  rawValue: Scalars['String']['output'];
};

export type StructBlock = StreamFieldInterface & {
  __typename?: 'StructBlock';
  blockType: Scalars['String']['output'];
  blocks: Array<StreamFieldInterface>;
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  rawValue: Scalars['String']['output'];
};

export type TfAuthor = {
  __typename?: 'TFAuthor';
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<TfImage>;
  name?: Maybe<Scalars['String']['output']>;
};

export type TfFuncGroup = PageInterface & {
  __typename?: 'TFFuncGroup';
  aliasOf?: Maybe<Page>;
  aliases: Array<Page>;
  ancestors: Array<PageInterface>;
  blogpage?: Maybe<BlogPage>;
  children: Array<PageInterface>;
  contentType: Scalars['String']['output'];
  depth?: Maybe<Scalars['Int']['output']>;
  descendants: Array<PageInterface>;
  draftTitle: Scalars['String']['output'];
  expireAt?: Maybe<Scalars['DateTime']['output']>;
  expired: Scalars['Boolean']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  goLiveAt?: Maybe<Scalars['DateTime']['output']>;
  hasUnpublishedChanges: Scalars['Boolean']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  lastPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  latestRevisionCreatedAt?: Maybe<Scalars['DateTime']['output']>;
  live: Scalars['Boolean']['output'];
  locked?: Maybe<Scalars['Boolean']['output']>;
  lockedAt?: Maybe<Scalars['DateTime']['output']>;
  nextSiblings: Array<PageInterface>;
  numchild: Scalars['Int']['output'];
  pageType?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<PageInterface>;
  path: Scalars['String']['output'];
  picture?: Maybe<Picture>;
  previousSiblings: Array<PageInterface>;
  searchDescription?: Maybe<Scalars['String']['output']>;
  searchScore?: Maybe<Scalars['Float']['output']>;
  seoTitle: Scalars['String']['output'];
  showInMenus: Scalars['Boolean']['output'];
  siblings: Array<PageInterface>;
  sitesRootedHere: Array<SiteObjectType>;
  slug: Scalars['String']['output'];
  tffuncgroup?: Maybe<TfFuncGroup>;
  title: Scalars['String']['output'];
  translationKey: Scalars['UUID']['output'];
  url?: Maybe<Scalars['String']['output']>;
  urlPath: Scalars['String']['output'];
};


export type TfFuncGroupAncestorsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


export type TfFuncGroupChildrenArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


export type TfFuncGroupDescendantsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


export type TfFuncGroupNextSiblingsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


export type TfFuncGroupPreviousSiblingsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};


export type TfFuncGroupSiblingsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inMenu?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  offset?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  searchOperator?: InputMaybe<SearchOperatorEnum>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};

export type TfImage = {
  __typename?: 'TFImage';
  aspectRatio: Scalars['Float']['output'];
  collection: CollectionObjectType;
  createdAt: Scalars['DateTime']['output'];
  file: Scalars['String']['output'];
  fileHash: Scalars['String']['output'];
  fileSize?: Maybe<Scalars['Int']['output']>;
  focalPointHeight?: Maybe<Scalars['Int']['output']>;
  focalPointWidth?: Maybe<Scalars['Int']['output']>;
  focalPointX?: Maybe<Scalars['Int']['output']>;
  focalPointY?: Maybe<Scalars['Int']['output']>;
  height: Scalars['Int']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  isSvg: Scalars['Boolean']['output'];
  rendition?: Maybe<TfRendition>;
  sizes: Scalars['String']['output'];
  /** @deprecated Use the `url` attribute */
  src: Scalars['String']['output'];
  srcSet?: Maybe<Scalars['String']['output']>;
  tags: Array<TagObjectType>;
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};


export type TfImageRenditionArgs = {
  bgcolor?: InputMaybe<Scalars['String']['input']>;
  fill?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  jpegquality?: InputMaybe<Scalars['Int']['input']>;
  max?: InputMaybe<Scalars['String']['input']>;
  min?: InputMaybe<Scalars['String']['input']>;
  preserveSvg?: InputMaybe<Scalars['Boolean']['input']>;
  webpquality?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type TfImageSrcSetArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  preserveSvg?: InputMaybe<Scalars['Boolean']['input']>;
  sizes?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type TfRendition = {
  __typename?: 'TFRendition';
  alt: Scalars['String']['output'];
  backgroundPositionStyle: Scalars['String']['output'];
  file: Scalars['String']['output'];
  filterSpec: Scalars['String']['output'];
  focalPoint?: Maybe<Scalars['String']['output']>;
  focalPointKey: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  image: TfImage;
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type TfStreamBlocks = StreamFieldInterface & {
  __typename?: 'TFStreamBlocks';
  blockType: Scalars['String']['output'];
  blocks: Array<StreamFieldInterface>;
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  rawValue: Scalars['String']['output'];
};

export type TagObjectType = {
  __typename?: 'TagObjectType';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type TextBlock = StreamFieldInterface & {
  __typename?: 'TextBlock';
  blockType: Scalars['String']['output'];
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  rawValue: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type TimeBlock = StreamFieldInterface & {
  __typename?: 'TimeBlock';
  blockType: Scalars['String']['output'];
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  rawValue: Scalars['String']['output'];
  value: Scalars['String']['output'];
};


export type TimeBlockValueArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

export type UrlBlock = StreamFieldInterface & {
  __typename?: 'URLBlock';
  blockType: Scalars['String']['output'];
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  rawValue: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

type DefaultPageView_BlogPage_Fragment = { __typename?: 'BlogPage', id?: string | null, title: string, slug: string, seoTitle: string, firstPublishedAt?: any | null, lastPublishedAt?: any | null };

type DefaultPageView_Page_Fragment = { __typename?: 'Page', id?: string | null, title: string, slug: string, seoTitle: string, firstPublishedAt?: any | null, lastPublishedAt?: any | null };

type DefaultPageView_Picture_Fragment = { __typename?: 'Picture', id?: string | null, title: string, slug: string, seoTitle: string, firstPublishedAt?: any | null, lastPublishedAt?: any | null };

type DefaultPageView_TfFuncGroup_Fragment = { __typename?: 'TFFuncGroup', id?: string | null, title: string, slug: string, seoTitle: string, firstPublishedAt?: any | null, lastPublishedAt?: any | null };

export type DefaultPageViewFragment = DefaultPageView_BlogPage_Fragment | DefaultPageView_Page_Fragment | DefaultPageView_Picture_Fragment | DefaultPageView_TfFuncGroup_Fragment;

export type DefaultImageViewFragment = { __typename?: 'TFImage', id?: string | null, url: string, srcSet?: string | null, width: number, height: number, rendition?: { __typename?: 'TFRendition', id?: string | null, url: string, width: number, height: number } | null };

export type BlogPageOuterViewFragment = { __typename?: 'BlogPage', intro?: string | null, id?: string | null, title: string, slug: string, seoTitle: string, firstPublishedAt?: any | null, lastPublishedAt?: any | null, involved?: Array<{ __typename?: 'TFAuthor', id?: string | null, name?: string | null, image?: { __typename?: 'TFImage', url: string, srcSet?: string | null } | null } | null> | null, thumb?: { __typename?: 'TFImage', id?: string | null, url: string, srcSet?: string | null, width: number, height: number, rendition?: { __typename?: 'TFRendition', id?: string | null, url: string, width: number, height: number } | null } | null };

export type BlogPageInnerViewFragment = { __typename?: 'BlogPage', intro?: string | null, id?: string | null, title: string, slug: string, seoTitle: string, firstPublishedAt?: any | null, lastPublishedAt?: any | null, body?: Array<{ __typename?: 'BlockQuoteBlock', blockType: string } | { __typename?: 'BooleanBlock', blockType: string } | { __typename?: 'CharBlock', blockType: string } | { __typename?: 'ChoiceBlock', blockType: string } | { __typename?: 'DateBlock', blockType: string } | { __typename?: 'DateTimeBlock', blockType: string } | { __typename?: 'DecimalBlock', blockType: string } | { __typename?: 'DocumentChooserBlock', blockType: string } | { __typename?: 'EmailBlock', blockType: string } | { __typename?: 'EmbedBlock', blockType: string } | { __typename?: 'FloatBlock', blockType: string } | { __typename?: 'HeadingBlock', blockType: string, text?: string | null, importance?: string | null } | { __typename?: 'ImageBlock', blockType: string, caption?: string | null, link?: string | null, alignment?: string | null, image?: { __typename?: 'TFImage', id?: string | null, url: string, srcSet?: string | null, width: number, height: number, rendition?: { __typename?: 'TFRendition', id?: string | null, url: string, width: number, height: number } | null } | null } | { __typename?: 'ImageChooserBlock', blockType: string } | { __typename?: 'IntegerBlock', blockType: string } | { __typename?: 'ListBlock', blockType: string } | { __typename?: 'PageChooserBlock', blockType: string } | { __typename?: 'QuoteBlock', blockType: string, quote?: string | null, attribution?: string | null } | { __typename?: 'RawHTMLBlock', blockType: string } | { __typename?: 'RegexBlock', blockType: string } | { __typename?: 'RichTextBlock', blockType: string, value: string } | { __typename?: 'SnippetChooserBlock', blockType: string } | { __typename?: 'StaticBlock', blockType: string } | { __typename?: 'StreamBlock', blockType: string } | { __typename?: 'StreamFieldBlock', blockType: string } | { __typename?: 'StructBlock', blockType: string } | { __typename?: 'TFStreamBlocks', blockType: string } | { __typename?: 'TextBlock', blockType: string } | { __typename?: 'TimeBlock', blockType: string } | { __typename?: 'URLBlock', blockType: string } | null> | null, involved?: Array<{ __typename?: 'TFAuthor', id?: string | null, name?: string | null, image?: { __typename?: 'TFImage', url: string, srcSet?: string | null } | null } | null> | null, thumb?: { __typename?: 'TFImage', id?: string | null, url: string, srcSet?: string | null, width: number, height: number, rendition?: { __typename?: 'TFRendition', id?: string | null, url: string, width: number, height: number } | null } | null };

export type GalleryOuterViewFragment = { __typename?: 'Picture', id?: string | null, title: string, cap?: string | null, imageDate?: string | null, image?: { __typename?: 'TFImage', id?: string | null, url: string, srcSet?: string | null, width: number, height: number, rendition?: { __typename?: 'TFRendition', id?: string | null, url: string, width: number, height: number } | null } | null };

export type PaginationViewFragment = { __typename?: 'PaginationType', total: any, count: any, perPage: any, currentPage: any, prevPage?: any | null, nextPage?: any | null, totalPages: any };

export type GalleryPaginatedListViewQueryVariables = Exact<{
  page?: InputMaybe<Scalars['PositiveInt']['input']>;
  perPage?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
}>;


export type GalleryPaginatedListViewQuery = { __typename?: 'Query', pictures?: { __typename?: 'PicturePaginatedType', pagination?: { __typename?: 'PaginationType', total: any, count: any, perPage: any, currentPage: any, prevPage?: any | null, nextPage?: any | null, totalPages: any } | null, items?: Array<{ __typename?: 'Picture', id?: string | null, title: string, cap?: string | null, imageDate?: string | null, image?: { __typename?: 'TFImage', id?: string | null, url: string, srcSet?: string | null, width: number, height: number, rendition?: { __typename?: 'TFRendition', id?: string | null, url: string, width: number, height: number } | null } | null } | null> | null } | null };

export type BlogPaginatedListViewQueryVariables = Exact<{
  page?: InputMaybe<Scalars['PositiveInt']['input']>;
  perPage?: InputMaybe<Scalars['PositiveInt']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
}>;


export type BlogPaginatedListViewQuery = { __typename?: 'Query', blogs?: { __typename?: 'BlogPagePaginatedType', pagination?: { __typename?: 'PaginationType', total: any, count: any, perPage: any, currentPage: any, prevPage?: any | null, nextPage?: any | null, totalPages: any } | null, items?: Array<{ __typename?: 'BlogPage', intro?: string | null, id?: string | null, title: string, slug: string, seoTitle: string, firstPublishedAt?: any | null, lastPublishedAt?: any | null, involved?: Array<{ __typename?: 'TFAuthor', id?: string | null, name?: string | null, image?: { __typename?: 'TFImage', url: string, srcSet?: string | null } | null } | null> | null, thumb?: { __typename?: 'TFImage', id?: string | null, url: string, srcSet?: string | null, width: number, height: number, rendition?: { __typename?: 'TFRendition', id?: string | null, url: string, width: number, height: number } | null } | null } | null> | null } | null };

export type BlogPreviewViewQueryVariables = Exact<{
  token?: InputMaybe<Scalars['String']['input']>;
}>;


export type BlogPreviewViewQuery = { __typename?: 'Query', blog?: { __typename?: 'BlogPage', intro?: string | null, id?: string | null, title: string, slug: string, seoTitle: string, firstPublishedAt?: any | null, lastPublishedAt?: any | null, body?: Array<{ __typename?: 'BlockQuoteBlock', blockType: string } | { __typename?: 'BooleanBlock', blockType: string } | { __typename?: 'CharBlock', blockType: string } | { __typename?: 'ChoiceBlock', blockType: string } | { __typename?: 'DateBlock', blockType: string } | { __typename?: 'DateTimeBlock', blockType: string } | { __typename?: 'DecimalBlock', blockType: string } | { __typename?: 'DocumentChooserBlock', blockType: string } | { __typename?: 'EmailBlock', blockType: string } | { __typename?: 'EmbedBlock', blockType: string } | { __typename?: 'FloatBlock', blockType: string } | { __typename?: 'HeadingBlock', blockType: string, text?: string | null, importance?: string | null } | { __typename?: 'ImageBlock', blockType: string, caption?: string | null, link?: string | null, alignment?: string | null, image?: { __typename?: 'TFImage', id?: string | null, url: string, srcSet?: string | null, width: number, height: number, rendition?: { __typename?: 'TFRendition', id?: string | null, url: string, width: number, height: number } | null } | null } | { __typename?: 'ImageChooserBlock', blockType: string } | { __typename?: 'IntegerBlock', blockType: string } | { __typename?: 'ListBlock', blockType: string } | { __typename?: 'PageChooserBlock', blockType: string } | { __typename?: 'QuoteBlock', blockType: string, quote?: string | null, attribution?: string | null } | { __typename?: 'RawHTMLBlock', blockType: string } | { __typename?: 'RegexBlock', blockType: string } | { __typename?: 'RichTextBlock', blockType: string, value: string } | { __typename?: 'SnippetChooserBlock', blockType: string } | { __typename?: 'StaticBlock', blockType: string } | { __typename?: 'StreamBlock', blockType: string } | { __typename?: 'StreamFieldBlock', blockType: string } | { __typename?: 'StructBlock', blockType: string } | { __typename?: 'TFStreamBlocks', blockType: string } | { __typename?: 'TextBlock', blockType: string } | { __typename?: 'TimeBlock', blockType: string } | { __typename?: 'URLBlock', blockType: string } | null> | null, involved?: Array<{ __typename?: 'TFAuthor', id?: string | null, name?: string | null, image?: { __typename?: 'TFImage', url: string, srcSet?: string | null } | null } | null> | null, thumb?: { __typename?: 'TFImage', id?: string | null, url: string, srcSet?: string | null, width: number, height: number, rendition?: { __typename?: 'TFRendition', id?: string | null, url: string, width: number, height: number } | null } | null } | null };

export type BlogLiveViewQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type BlogLiveViewQuery = { __typename?: 'Query', blog?: { __typename?: 'BlogPage', intro?: string | null, id?: string | null, title: string, slug: string, seoTitle: string, firstPublishedAt?: any | null, lastPublishedAt?: any | null, body?: Array<{ __typename?: 'BlockQuoteBlock', blockType: string } | { __typename?: 'BooleanBlock', blockType: string } | { __typename?: 'CharBlock', blockType: string } | { __typename?: 'ChoiceBlock', blockType: string } | { __typename?: 'DateBlock', blockType: string } | { __typename?: 'DateTimeBlock', blockType: string } | { __typename?: 'DecimalBlock', blockType: string } | { __typename?: 'DocumentChooserBlock', blockType: string } | { __typename?: 'EmailBlock', blockType: string } | { __typename?: 'EmbedBlock', blockType: string } | { __typename?: 'FloatBlock', blockType: string } | { __typename?: 'HeadingBlock', blockType: string, text?: string | null, importance?: string | null } | { __typename?: 'ImageBlock', blockType: string, caption?: string | null, link?: string | null, alignment?: string | null, image?: { __typename?: 'TFImage', id?: string | null, url: string, srcSet?: string | null, width: number, height: number, rendition?: { __typename?: 'TFRendition', id?: string | null, url: string, width: number, height: number } | null } | null } | { __typename?: 'ImageChooserBlock', blockType: string } | { __typename?: 'IntegerBlock', blockType: string } | { __typename?: 'ListBlock', blockType: string } | { __typename?: 'PageChooserBlock', blockType: string } | { __typename?: 'QuoteBlock', blockType: string, quote?: string | null, attribution?: string | null } | { __typename?: 'RawHTMLBlock', blockType: string } | { __typename?: 'RegexBlock', blockType: string } | { __typename?: 'RichTextBlock', blockType: string, value: string } | { __typename?: 'SnippetChooserBlock', blockType: string } | { __typename?: 'StaticBlock', blockType: string } | { __typename?: 'StreamBlock', blockType: string } | { __typename?: 'StreamFieldBlock', blockType: string } | { __typename?: 'StructBlock', blockType: string } | { __typename?: 'TFStreamBlocks', blockType: string } | { __typename?: 'TextBlock', blockType: string } | { __typename?: 'TimeBlock', blockType: string } | { __typename?: 'URLBlock', blockType: string } | null> | null, involved?: Array<{ __typename?: 'TFAuthor', id?: string | null, name?: string | null, image?: { __typename?: 'TFImage', url: string, srcSet?: string | null } | null } | null> | null, thumb?: { __typename?: 'TFImage', id?: string | null, url: string, srcSet?: string | null, width: number, height: number, rendition?: { __typename?: 'TFRendition', id?: string | null, url: string, width: number, height: number } | null } | null } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any> | undefined) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const DefaultPageViewFragmentDoc = new TypedDocumentString(`
    fragment DefaultPageView on PageInterface {
  id
  title
  slug
  seoTitle
  firstPublishedAt
  lastPublishedAt
}
    `, {"fragmentName":"DefaultPageView"}) as unknown as TypedDocumentString<DefaultPageViewFragment, unknown>;
export const DefaultImageViewFragmentDoc = new TypedDocumentString(`
    fragment DefaultImageView on TFImage {
  id
  url
  rendition(width: 1200, height: 630, format: "jpeg", jpegquality: 85) {
    id
    url
    width
    height
  }
  srcSet(sizes: [768, 1080], format: "webp")
  width
  height
}
    `, {"fragmentName":"DefaultImageView"}) as unknown as TypedDocumentString<DefaultImageViewFragment, unknown>;
export const BlogPageOuterViewFragmentDoc = new TypedDocumentString(`
    fragment BlogPageOuterView on BlogPage {
  ...DefaultPageView
  intro
  involved {
    id
    name
    image {
      url
      srcSet(sizes: [8, 16, 32, 64], format: "webp")
    }
  }
  thumb {
    ...DefaultImageView
  }
}
    fragment DefaultPageView on PageInterface {
  id
  title
  slug
  seoTitle
  firstPublishedAt
  lastPublishedAt
}
fragment DefaultImageView on TFImage {
  id
  url
  rendition(width: 1200, height: 630, format: "jpeg", jpegquality: 85) {
    id
    url
    width
    height
  }
  srcSet(sizes: [768, 1080], format: "webp")
  width
  height
}`, {"fragmentName":"BlogPageOuterView"}) as unknown as TypedDocumentString<BlogPageOuterViewFragment, unknown>;
export const BlogPageInnerViewFragmentDoc = new TypedDocumentString(`
    fragment BlogPageInnerView on BlogPage {
  ...BlogPageOuterView
  body {
    ... on StreamFieldInterface {
      blockType
    }
    ... on RichTextBlock {
      value
    }
    ... on ImageBlock {
      caption
      link
      alignment
      image {
        ...DefaultImageView
      }
    }
    ... on QuoteBlock {
      quote
      attribution
    }
    ... on HeadingBlock {
      text
      importance
    }
  }
}
    fragment DefaultPageView on PageInterface {
  id
  title
  slug
  seoTitle
  firstPublishedAt
  lastPublishedAt
}
fragment DefaultImageView on TFImage {
  id
  url
  rendition(width: 1200, height: 630, format: "jpeg", jpegquality: 85) {
    id
    url
    width
    height
  }
  srcSet(sizes: [768, 1080], format: "webp")
  width
  height
}
fragment BlogPageOuterView on BlogPage {
  ...DefaultPageView
  intro
  involved {
    id
    name
    image {
      url
      srcSet(sizes: [8, 16, 32, 64], format: "webp")
    }
  }
  thumb {
    ...DefaultImageView
  }
}`, {"fragmentName":"BlogPageInnerView"}) as unknown as TypedDocumentString<BlogPageInnerViewFragment, unknown>;
export const GalleryOuterViewFragmentDoc = new TypedDocumentString(`
    fragment GalleryOuterView on Picture {
  id
  title
  cap
  image {
    ...DefaultImageView
  }
  imageDate
}
    fragment DefaultImageView on TFImage {
  id
  url
  rendition(width: 1200, height: 630, format: "jpeg", jpegquality: 85) {
    id
    url
    width
    height
  }
  srcSet(sizes: [768, 1080], format: "webp")
  width
  height
}`, {"fragmentName":"GalleryOuterView"}) as unknown as TypedDocumentString<GalleryOuterViewFragment, unknown>;
export const PaginationViewFragmentDoc = new TypedDocumentString(`
    fragment PaginationView on PaginationType {
  total
  count
  perPage
  currentPage
  prevPage
  nextPage
  totalPages
}
    `, {"fragmentName":"PaginationView"}) as unknown as TypedDocumentString<PaginationViewFragment, unknown>;
export const GalleryPaginatedListViewDocument = new TypedDocumentString(`
    query GalleryPaginatedListView($page: PositiveInt, $perPage: PositiveInt, $order: String) {
  pictures(page: $page, perPage: $perPage, order: $order) {
    pagination {
      ...PaginationView
    }
    items {
      ...GalleryOuterView
    }
  }
}
    fragment DefaultImageView on TFImage {
  id
  url
  rendition(width: 1200, height: 630, format: "jpeg", jpegquality: 85) {
    id
    url
    width
    height
  }
  srcSet(sizes: [768, 1080], format: "webp")
  width
  height
}
fragment GalleryOuterView on Picture {
  id
  title
  cap
  image {
    ...DefaultImageView
  }
  imageDate
}
fragment PaginationView on PaginationType {
  total
  count
  perPage
  currentPage
  prevPage
  nextPage
  totalPages
}`, {"hash":"a536f42f004859de3464fcf5dd21ec4a841a0ecd"}) as unknown as TypedDocumentString<GalleryPaginatedListViewQuery, GalleryPaginatedListViewQueryVariables>;
export const BlogPaginatedListViewDocument = new TypedDocumentString(`
    query BlogPaginatedListView($page: PositiveInt, $perPage: PositiveInt, $order: String) {
  blogs(page: $page, perPage: $perPage, order: $order) {
    pagination {
      ...PaginationView
    }
    items {
      ...BlogPageOuterView
    }
  }
}
    fragment DefaultPageView on PageInterface {
  id
  title
  slug
  seoTitle
  firstPublishedAt
  lastPublishedAt
}
fragment DefaultImageView on TFImage {
  id
  url
  rendition(width: 1200, height: 630, format: "jpeg", jpegquality: 85) {
    id
    url
    width
    height
  }
  srcSet(sizes: [768, 1080], format: "webp")
  width
  height
}
fragment BlogPageOuterView on BlogPage {
  ...DefaultPageView
  intro
  involved {
    id
    name
    image {
      url
      srcSet(sizes: [8, 16, 32, 64], format: "webp")
    }
  }
  thumb {
    ...DefaultImageView
  }
}
fragment PaginationView on PaginationType {
  total
  count
  perPage
  currentPage
  prevPage
  nextPage
  totalPages
}`, {"hash":"bbf1de35ae6b920bd6b935dce33f98b6b7edf166"}) as unknown as TypedDocumentString<BlogPaginatedListViewQuery, BlogPaginatedListViewQueryVariables>;
export const BlogPreviewViewDocument = new TypedDocumentString(`
    query BlogPreviewView($token: String) {
  blog(token: $token) {
    ...BlogPageInnerView
  }
}
    fragment DefaultPageView on PageInterface {
  id
  title
  slug
  seoTitle
  firstPublishedAt
  lastPublishedAt
}
fragment DefaultImageView on TFImage {
  id
  url
  rendition(width: 1200, height: 630, format: "jpeg", jpegquality: 85) {
    id
    url
    width
    height
  }
  srcSet(sizes: [768, 1080], format: "webp")
  width
  height
}
fragment BlogPageOuterView on BlogPage {
  ...DefaultPageView
  intro
  involved {
    id
    name
    image {
      url
      srcSet(sizes: [8, 16, 32, 64], format: "webp")
    }
  }
  thumb {
    ...DefaultImageView
  }
}
fragment BlogPageInnerView on BlogPage {
  ...BlogPageOuterView
  body {
    ... on StreamFieldInterface {
      blockType
    }
    ... on RichTextBlock {
      value
    }
    ... on ImageBlock {
      caption
      link
      alignment
      image {
        ...DefaultImageView
      }
    }
    ... on QuoteBlock {
      quote
      attribution
    }
    ... on HeadingBlock {
      text
      importance
    }
  }
}`, {"hash":"b35072451b8da89b770a94ba2e0d8a38ea257385"}) as unknown as TypedDocumentString<BlogPreviewViewQuery, BlogPreviewViewQueryVariables>;
export const BlogLiveViewDocument = new TypedDocumentString(`
    query BlogLiveView($slug: String) {
  blog(slug: $slug) {
    ...BlogPageInnerView
  }
}
    fragment DefaultPageView on PageInterface {
  id
  title
  slug
  seoTitle
  firstPublishedAt
  lastPublishedAt
}
fragment DefaultImageView on TFImage {
  id
  url
  rendition(width: 1200, height: 630, format: "jpeg", jpegquality: 85) {
    id
    url
    width
    height
  }
  srcSet(sizes: [768, 1080], format: "webp")
  width
  height
}
fragment BlogPageOuterView on BlogPage {
  ...DefaultPageView
  intro
  involved {
    id
    name
    image {
      url
      srcSet(sizes: [8, 16, 32, 64], format: "webp")
    }
  }
  thumb {
    ...DefaultImageView
  }
}
fragment BlogPageInnerView on BlogPage {
  ...BlogPageOuterView
  body {
    ... on StreamFieldInterface {
      blockType
    }
    ... on RichTextBlock {
      value
    }
    ... on ImageBlock {
      caption
      link
      alignment
      image {
        ...DefaultImageView
      }
    }
    ... on QuoteBlock {
      quote
      attribution
    }
    ... on HeadingBlock {
      text
      importance
    }
  }
}`, {"hash":"ceb3e5809a14e8bb3d7f2d672b16d7468661349f"}) as unknown as TypedDocumentString<BlogLiveViewQuery, BlogLiveViewQueryVariables>;