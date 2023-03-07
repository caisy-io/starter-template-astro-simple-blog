import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
};

export type IGenAsset = {
  __typename?: 'Asset';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  author?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dominantColor?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  keywords?: Maybe<Scalars['String']>;
  originType?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type IGenAsset_Connection = {
  __typename?: 'Asset_Connection';
  edges?: Maybe<Array<Maybe<IGenAsset_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenAsset_ConnectionEdge = {
  __typename?: 'Asset_ConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenAsset>;
};

export type IGenAsset_CreateInput = {
  author?: InputMaybe<Scalars['String']>;
  copyright?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  dominantColor?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Scalars['String']>;
  originType?: InputMaybe<Scalars['String']>;
  originalName?: InputMaybe<Scalars['String']>;
  src?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IGenAsset_Sort = {
  author?: InputMaybe<IGenOrder>;
  copyright?: InputMaybe<IGenOrder>;
  description?: InputMaybe<IGenOrder>;
  dominantColor?: InputMaybe<IGenOrder>;
  keywords?: InputMaybe<IGenOrder>;
  originType?: InputMaybe<IGenOrder>;
  originalName?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
};

export type IGenAsset_UpdateInput = {
  author?: InputMaybe<Scalars['String']>;
  copyright?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  dominantColor?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Scalars['String']>;
  originType?: InputMaybe<Scalars['String']>;
  originalName?: InputMaybe<Scalars['String']>;
  src?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IGenAsset_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenAsset_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenAsset_Where>>>;
  author?: InputMaybe<IGenCaisyField_String_Where>;
  copyright?: InputMaybe<IGenCaisyField_String_Where>;
  description?: InputMaybe<IGenCaisyField_String_Where>;
  dominantColor?: InputMaybe<IGenCaisyField_Color_Where>;
  keywords?: InputMaybe<IGenCaisyField_String_Where>;
  originType?: InputMaybe<IGenCaisyField_String_Where>;
  originalName?: InputMaybe<IGenCaisyField_String_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenBlogArticle = {
  __typename?: 'BlogArticle';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars['ID']>;
  seo?: Maybe<IGenSeoInformation>;
  slug?: Maybe<Scalars['String']>;
  teaserDesciption?: Maybe<Scalars['String']>;
  teaserHeadline?: Maybe<Scalars['String']>;
  teaserImage?: Maybe<IGenAsset>;
  text?: Maybe<IGenBlogArticle_Text>;
};


export type IGenBlogArticleSeoArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenBlogArticleTeaserImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenBlogArticleTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenBlogArticleGrid = {
  __typename?: 'BlogArticleGrid';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  articles?: Maybe<Array<Maybe<IGenBlogArticleGrid_Articles>>>;
  headline?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  subheadline?: Maybe<Scalars['String']>;
  titleInternal?: Maybe<Scalars['String']>;
};


export type IGenBlogArticleGridArticlesArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenBlogArticleGrid_Connection = {
  __typename?: 'BlogArticleGrid_Connection';
  edges?: Maybe<Array<Maybe<IGenBlogArticleGrid_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenBlogArticleGrid_ConnectionEdge = {
  __typename?: 'BlogArticleGrid_ConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenBlogArticleGrid>;
};

export type IGenBlogArticleGrid_CreateInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  headline?: InputMaybe<Scalars['String']>;
  subheadline?: InputMaybe<Scalars['String']>;
  titleInternal?: InputMaybe<Scalars['String']>;
};

export type IGenBlogArticleGrid_Sort = {
  articles?: InputMaybe<IGenOrder>;
  headline?: InputMaybe<IGenOrder>;
  subheadline?: InputMaybe<IGenOrder>;
  titleInternal?: InputMaybe<IGenOrder>;
};

export type IGenBlogArticleGrid_UpdateInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  headline?: InputMaybe<Scalars['String']>;
  subheadline?: InputMaybe<Scalars['String']>;
  titleInternal?: InputMaybe<Scalars['String']>;
};

export type IGenBlogArticleGrid_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenBlogArticleGrid_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenBlogArticleGrid_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  subheadline?: InputMaybe<IGenCaisyField_String_Where>;
  titleInternal?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenBlogArticleGrid_Articles = IGenBlogArticle;

export type IGenBlogArticle_Connection = {
  __typename?: 'BlogArticle_Connection';
  edges?: Maybe<Array<Maybe<IGenBlogArticle_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenBlogArticle_ConnectionEdge = {
  __typename?: 'BlogArticle_ConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenBlogArticle>;
};

export type IGenBlogArticle_CreateInput = {
  seo?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  teaserDesciption?: InputMaybe<Scalars['String']>;
  teaserHeadline?: InputMaybe<Scalars['String']>;
  teaserImage?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['JSON']>;
};

export type IGenBlogArticle_Sort = {
  seo?: InputMaybe<IGenOrder>;
  slug?: InputMaybe<IGenOrder>;
  teaserDesciption?: InputMaybe<IGenOrder>;
  teaserHeadline?: InputMaybe<IGenOrder>;
  teaserImage?: InputMaybe<IGenOrder>;
};

export type IGenBlogArticle_UpdateInput = {
  seo?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  teaserDesciption?: InputMaybe<Scalars['String']>;
  teaserHeadline?: InputMaybe<Scalars['String']>;
  teaserImage?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['JSON']>;
};

export type IGenBlogArticle_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenBlogArticle_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenBlogArticle_Where>>>;
  slug?: InputMaybe<IGenCaisyField_String_Where>;
  teaserDesciption?: InputMaybe<IGenCaisyField_String_Where>;
  teaserHeadline?: InputMaybe<IGenCaisyField_String_Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
};

export type IGenBlogArticle_Text = {
  __typename?: 'BlogArticle_text';
  connections?: Maybe<Array<Maybe<IGenBlogArticle_Text_Connections>>>;
  json?: Maybe<Scalars['JSON']>;
};

export type IGenBlogArticle_Text_Connections = IGenAsset;

export type IGenCaisyDocument_Meta = {
  __typename?: 'CaisyDocument_Meta';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  locale?: Maybe<Scalars['String']>;
  locales?: Maybe<Array<Maybe<Scalars['String']>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IGenCaisyField_Color_Where = {
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
};

export type IGenCaisyField_Richtext_Where = {
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
};

export type IGenCaisyField_String_Where = {
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_Field_Document_NotFound = {
  __typename?: 'Caisy_Field_Document_NotFound';
  id?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
};

export type IGenContactForm = {
  __typename?: 'ContactForm';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  headline?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  titleInternal?: Maybe<Scalars['String']>;
};

export type IGenContactForm_Connection = {
  __typename?: 'ContactForm_Connection';
  edges?: Maybe<Array<Maybe<IGenContactForm_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenContactForm_ConnectionEdge = {
  __typename?: 'ContactForm_ConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenContactForm>;
};

export type IGenContactForm_CreateInput = {
  headline?: InputMaybe<Scalars['String']>;
  titleInternal?: InputMaybe<Scalars['String']>;
};

export type IGenContactForm_Sort = {
  headline?: InputMaybe<IGenOrder>;
  titleInternal?: InputMaybe<IGenOrder>;
};

export type IGenContactForm_UpdateInput = {
  headline?: InputMaybe<Scalars['String']>;
  titleInternal?: InputMaybe<Scalars['String']>;
};

export type IGenContactForm_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenContactForm_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenContactForm_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  titleInternal?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenFooter = {
  __typename?: 'Footer';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  content?: Maybe<IGenFooter_Content>;
  id?: Maybe<Scalars['ID']>;
  titleInternal?: Maybe<Scalars['String']>;
};


export type IGenFooterContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenFooter_CreateInput = {
  content?: InputMaybe<Scalars['JSON']>;
  titleInternal?: InputMaybe<Scalars['String']>;
};

export type IGenFooter_UpdateInput = {
  content?: InputMaybe<Scalars['JSON']>;
  titleInternal?: InputMaybe<Scalars['String']>;
};

export type IGenFooter_Content = {
  __typename?: 'Footer_content';
  connections?: Maybe<Array<Maybe<IGenFooter_Content_Connections>>>;
  json?: Maybe<Scalars['JSON']>;
};

export type IGenFooter_Content_Connections = IGenCaisy_Field_Document_NotFound;

export type IGenFullWithBlogTeaser = {
  __typename?: 'FullWithBlogTeaser';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  featuredArticle?: Maybe<IGenBlogArticle>;
  id?: Maybe<Scalars['ID']>;
  titleInternal?: Maybe<Scalars['String']>;
};


export type IGenFullWithBlogTeaserFeaturedArticleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenFullWithBlogTeaser_Connection = {
  __typename?: 'FullWithBlogTeaser_Connection';
  edges?: Maybe<Array<Maybe<IGenFullWithBlogTeaser_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenFullWithBlogTeaser_ConnectionEdge = {
  __typename?: 'FullWithBlogTeaser_ConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenFullWithBlogTeaser>;
};

export type IGenFullWithBlogTeaser_CreateInput = {
  featuredArticle?: InputMaybe<Scalars['ID']>;
  titleInternal?: InputMaybe<Scalars['String']>;
};

export type IGenFullWithBlogTeaser_Sort = {
  featuredArticle?: InputMaybe<IGenOrder>;
  titleInternal?: InputMaybe<IGenOrder>;
};

export type IGenFullWithBlogTeaser_UpdateInput = {
  featuredArticle?: InputMaybe<Scalars['ID']>;
  titleInternal?: InputMaybe<Scalars['String']>;
};

export type IGenFullWithBlogTeaser_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenFullWithBlogTeaser_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenFullWithBlogTeaser_Where>>>;
  titleInternal?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenFulltext = {
  __typename?: 'Fulltext';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars['ID']>;
  text?: Maybe<IGenFulltext_Text>;
  titleInternal?: Maybe<Scalars['String']>;
};


export type IGenFulltextTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenFulltext_Connection = {
  __typename?: 'Fulltext_Connection';
  edges?: Maybe<Array<Maybe<IGenFulltext_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenFulltext_ConnectionEdge = {
  __typename?: 'Fulltext_ConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenFulltext>;
};

export type IGenFulltext_CreateInput = {
  text?: InputMaybe<Scalars['JSON']>;
  titleInternal?: InputMaybe<Scalars['String']>;
};

export type IGenFulltext_Sort = {
  titleInternal?: InputMaybe<IGenOrder>;
};

export type IGenFulltext_UpdateInput = {
  text?: InputMaybe<Scalars['JSON']>;
  titleInternal?: InputMaybe<Scalars['String']>;
};

export type IGenFulltext_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenFulltext_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenFulltext_Where>>>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
  titleInternal?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenFulltext_Text = {
  __typename?: 'Fulltext_text';
  connections?: Maybe<Array<Maybe<IGenFulltext_Text_Connections>>>;
  json?: Maybe<Scalars['JSON']>;
};

export type IGenFulltext_Text_Connections = IGenAsset;

export type IGenHeadline = {
  __typename?: 'Headline';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  headline?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  subheadline?: Maybe<Scalars['String']>;
  titleInternal?: Maybe<Scalars['String']>;
};

export type IGenHeadline_Connection = {
  __typename?: 'Headline_Connection';
  edges?: Maybe<Array<Maybe<IGenHeadline_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenHeadline_ConnectionEdge = {
  __typename?: 'Headline_ConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenHeadline>;
};

export type IGenHeadline_CreateInput = {
  headline?: InputMaybe<Scalars['String']>;
  subheadline?: InputMaybe<Scalars['String']>;
  titleInternal?: InputMaybe<Scalars['String']>;
};

export type IGenHeadline_Sort = {
  headline?: InputMaybe<IGenOrder>;
  subheadline?: InputMaybe<IGenOrder>;
  titleInternal?: InputMaybe<IGenOrder>;
};

export type IGenHeadline_UpdateInput = {
  headline?: InputMaybe<Scalars['String']>;
  subheadline?: InputMaybe<Scalars['String']>;
  titleInternal?: InputMaybe<Scalars['String']>;
};

export type IGenHeadline_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenHeadline_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenHeadline_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  subheadline?: InputMaybe<IGenCaisyField_String_Where>;
  titleInternal?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenMutation = {
  __typename?: 'Mutation';
  createAsset?: Maybe<IGenAsset>;
  createBlogArticle?: Maybe<IGenBlogArticle>;
  createBlogArticleGrid?: Maybe<IGenBlogArticleGrid>;
  createContactForm?: Maybe<IGenContactForm>;
  createFooter?: Maybe<IGenFooter>;
  createFullWithBlogTeaser?: Maybe<IGenFullWithBlogTeaser>;
  createFulltext?: Maybe<IGenFulltext>;
  createHeadline?: Maybe<IGenHeadline>;
  createNavigation?: Maybe<IGenNavigation>;
  createNavigationEntry?: Maybe<IGenNavigationEntry>;
  createNewsletterSignup?: Maybe<IGenNewsletterSignup>;
  createPage?: Maybe<IGenPage>;
  createSeoInformation?: Maybe<IGenSeoInformation>;
  deleteAsset?: Maybe<Scalars['Boolean']>;
  deleteBlogArticle?: Maybe<Scalars['Boolean']>;
  deleteBlogArticleGrid?: Maybe<Scalars['Boolean']>;
  deleteContactForm?: Maybe<Scalars['Boolean']>;
  deleteFooter?: Maybe<Scalars['Boolean']>;
  deleteFullWithBlogTeaser?: Maybe<Scalars['Boolean']>;
  deleteFulltext?: Maybe<Scalars['Boolean']>;
  deleteHeadline?: Maybe<Scalars['Boolean']>;
  deleteNavigation?: Maybe<Scalars['Boolean']>;
  deleteNavigationEntry?: Maybe<Scalars['Boolean']>;
  deleteNewsletterSignup?: Maybe<Scalars['Boolean']>;
  deletePage?: Maybe<Scalars['Boolean']>;
  deleteSeoInformation?: Maybe<Scalars['Boolean']>;
  updateAsset?: Maybe<IGenAsset>;
  updateBlogArticle?: Maybe<IGenBlogArticle>;
  updateBlogArticleGrid?: Maybe<IGenBlogArticleGrid>;
  updateContactForm?: Maybe<IGenContactForm>;
  updateFooter?: Maybe<IGenFooter>;
  updateFullWithBlogTeaser?: Maybe<IGenFullWithBlogTeaser>;
  updateFulltext?: Maybe<IGenFulltext>;
  updateHeadline?: Maybe<IGenHeadline>;
  updateNavigation?: Maybe<IGenNavigation>;
  updateNavigationEntry?: Maybe<IGenNavigationEntry>;
  updateNewsletterSignup?: Maybe<IGenNewsletterSignup>;
  updatePage?: Maybe<IGenPage>;
  updateSeoInformation?: Maybe<IGenSeoInformation>;
};


export type IGenMutationCreateAssetArgs = {
  input: IGenAsset_CreateInput;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenMutationCreateBlogArticleArgs = {
  input: IGenBlogArticle_CreateInput;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenMutationCreateBlogArticleGridArgs = {
  input: IGenBlogArticleGrid_CreateInput;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenMutationCreateContactFormArgs = {
  input: IGenContactForm_CreateInput;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenMutationCreateFooterArgs = {
  input: IGenFooter_CreateInput;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenMutationCreateFullWithBlogTeaserArgs = {
  input: IGenFullWithBlogTeaser_CreateInput;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenMutationCreateFulltextArgs = {
  input: IGenFulltext_CreateInput;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenMutationCreateHeadlineArgs = {
  input: IGenHeadline_CreateInput;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenMutationCreateNavigationArgs = {
  input: IGenNavigation_CreateInput;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenMutationCreateNavigationEntryArgs = {
  input: IGenNavigationEntry_CreateInput;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenMutationCreateNewsletterSignupArgs = {
  input: IGenNewsletterSignup_CreateInput;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenMutationCreatePageArgs = {
  input: IGenPage_CreateInput;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenMutationCreateSeoInformationArgs = {
  input: IGenSeoInformation_CreateInput;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenMutationDeleteAssetArgs = {
  id: Scalars['ID'];
};


export type IGenMutationDeleteBlogArticleArgs = {
  id: Scalars['ID'];
};


export type IGenMutationDeleteBlogArticleGridArgs = {
  id: Scalars['ID'];
};


export type IGenMutationDeleteContactFormArgs = {
  id: Scalars['ID'];
};


export type IGenMutationDeleteFooterArgs = {
  id: Scalars['ID'];
};


export type IGenMutationDeleteFullWithBlogTeaserArgs = {
  id: Scalars['ID'];
};


export type IGenMutationDeleteFulltextArgs = {
  id: Scalars['ID'];
};


export type IGenMutationDeleteHeadlineArgs = {
  id: Scalars['ID'];
};


export type IGenMutationDeleteNavigationArgs = {
  id: Scalars['ID'];
};


export type IGenMutationDeleteNavigationEntryArgs = {
  id: Scalars['ID'];
};


export type IGenMutationDeleteNewsletterSignupArgs = {
  id: Scalars['ID'];
};


export type IGenMutationDeletePageArgs = {
  id: Scalars['ID'];
};


export type IGenMutationDeleteSeoInformationArgs = {
  id: Scalars['ID'];
};


export type IGenMutationUpdateAssetArgs = {
  id: Scalars['ID'];
  input: IGenAsset_UpdateInput;
  locale?: InputMaybe<Scalars['String']>;
  merge?: InputMaybe<Scalars['Boolean']>;
};


export type IGenMutationUpdateBlogArticleArgs = {
  id: Scalars['ID'];
  input: IGenBlogArticle_UpdateInput;
  locale?: InputMaybe<Scalars['String']>;
  merge?: InputMaybe<Scalars['Boolean']>;
};


export type IGenMutationUpdateBlogArticleGridArgs = {
  id: Scalars['ID'];
  input: IGenBlogArticleGrid_UpdateInput;
  locale?: InputMaybe<Scalars['String']>;
  merge?: InputMaybe<Scalars['Boolean']>;
};


export type IGenMutationUpdateContactFormArgs = {
  id: Scalars['ID'];
  input: IGenContactForm_UpdateInput;
  locale?: InputMaybe<Scalars['String']>;
  merge?: InputMaybe<Scalars['Boolean']>;
};


export type IGenMutationUpdateFooterArgs = {
  id: Scalars['ID'];
  input: IGenFooter_UpdateInput;
  locale?: InputMaybe<Scalars['String']>;
  merge?: InputMaybe<Scalars['Boolean']>;
};


export type IGenMutationUpdateFullWithBlogTeaserArgs = {
  id: Scalars['ID'];
  input: IGenFullWithBlogTeaser_UpdateInput;
  locale?: InputMaybe<Scalars['String']>;
  merge?: InputMaybe<Scalars['Boolean']>;
};


export type IGenMutationUpdateFulltextArgs = {
  id: Scalars['ID'];
  input: IGenFulltext_UpdateInput;
  locale?: InputMaybe<Scalars['String']>;
  merge?: InputMaybe<Scalars['Boolean']>;
};


export type IGenMutationUpdateHeadlineArgs = {
  id: Scalars['ID'];
  input: IGenHeadline_UpdateInput;
  locale?: InputMaybe<Scalars['String']>;
  merge?: InputMaybe<Scalars['Boolean']>;
};


export type IGenMutationUpdateNavigationArgs = {
  id: Scalars['ID'];
  input: IGenNavigation_UpdateInput;
  locale?: InputMaybe<Scalars['String']>;
  merge?: InputMaybe<Scalars['Boolean']>;
};


export type IGenMutationUpdateNavigationEntryArgs = {
  id: Scalars['ID'];
  input: IGenNavigationEntry_UpdateInput;
  locale?: InputMaybe<Scalars['String']>;
  merge?: InputMaybe<Scalars['Boolean']>;
};


export type IGenMutationUpdateNewsletterSignupArgs = {
  id: Scalars['ID'];
  input: IGenNewsletterSignup_UpdateInput;
  locale?: InputMaybe<Scalars['String']>;
  merge?: InputMaybe<Scalars['Boolean']>;
};


export type IGenMutationUpdatePageArgs = {
  id: Scalars['ID'];
  input: IGenPage_UpdateInput;
  locale?: InputMaybe<Scalars['String']>;
  merge?: InputMaybe<Scalars['Boolean']>;
};


export type IGenMutationUpdateSeoInformationArgs = {
  id: Scalars['ID'];
  input: IGenSeoInformation_UpdateInput;
  locale?: InputMaybe<Scalars['String']>;
  merge?: InputMaybe<Scalars['Boolean']>;
};

export type IGenNavigation = {
  __typename?: 'Navigation';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  entries?: Maybe<Array<Maybe<IGenNavigation_Entries>>>;
  homePage?: Maybe<IGenPage>;
  id?: Maybe<Scalars['ID']>;
  titleInternal?: Maybe<Scalars['String']>;
};


export type IGenNavigationEntriesArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenNavigationHomePageArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenNavigationEntry = {
  __typename?: 'NavigationEntry';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  connection?: Maybe<IGenPage>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};


export type IGenNavigationEntryConnectionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenNavigationEntry_Connection = {
  __typename?: 'NavigationEntry_Connection';
  edges?: Maybe<Array<Maybe<IGenNavigationEntry_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenNavigationEntry_ConnectionEdge = {
  __typename?: 'NavigationEntry_ConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenNavigationEntry>;
};

export type IGenNavigationEntry_CreateInput = {
  connection?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IGenNavigationEntry_Sort = {
  connection?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
};

export type IGenNavigationEntry_UpdateInput = {
  connection?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IGenNavigationEntry_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenNavigationEntry_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenNavigationEntry_Where>>>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenNavigation_CreateInput = {
  entries?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  homePage?: InputMaybe<Scalars['ID']>;
  titleInternal?: InputMaybe<Scalars['String']>;
};

export type IGenNavigation_UpdateInput = {
  entries?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  homePage?: InputMaybe<Scalars['ID']>;
  titleInternal?: InputMaybe<Scalars['String']>;
};

export type IGenNavigation_Entries = IGenNavigationEntry;

export type IGenNewsletterSignup = {
  __typename?: 'NewsletterSignup';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  headline?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  subheadline?: Maybe<Scalars['String']>;
  titleInternal?: Maybe<Scalars['String']>;
};

export type IGenNewsletterSignup_Connection = {
  __typename?: 'NewsletterSignup_Connection';
  edges?: Maybe<Array<Maybe<IGenNewsletterSignup_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenNewsletterSignup_ConnectionEdge = {
  __typename?: 'NewsletterSignup_ConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenNewsletterSignup>;
};

export type IGenNewsletterSignup_CreateInput = {
  headline?: InputMaybe<Scalars['String']>;
  subheadline?: InputMaybe<Scalars['String']>;
  titleInternal?: InputMaybe<Scalars['String']>;
};

export type IGenNewsletterSignup_Sort = {
  headline?: InputMaybe<IGenOrder>;
  subheadline?: InputMaybe<IGenOrder>;
  titleInternal?: InputMaybe<IGenOrder>;
};

export type IGenNewsletterSignup_UpdateInput = {
  headline?: InputMaybe<Scalars['String']>;
  subheadline?: InputMaybe<Scalars['String']>;
  titleInternal?: InputMaybe<Scalars['String']>;
};

export type IGenNewsletterSignup_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenNewsletterSignup_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenNewsletterSignup_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  subheadline?: InputMaybe<IGenCaisyField_String_Where>;
  titleInternal?: InputMaybe<IGenCaisyField_String_Where>;
};

export enum IGenOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type IGenPage = {
  __typename?: 'Page';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  components?: Maybe<Array<Maybe<IGenPage_Components>>>;
  id?: Maybe<Scalars['ID']>;
  seo?: Maybe<IGenSeoInformation>;
  slug?: Maybe<Scalars['String']>;
  titleInternal?: Maybe<Scalars['String']>;
};


export type IGenPageComponentsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenPageSeoArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenPageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  startCursor?: Maybe<Scalars['String']>;
};

export type IGenPage_Connection = {
  __typename?: 'Page_Connection';
  edges?: Maybe<Array<Maybe<IGenPage_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenPage_ConnectionEdge = {
  __typename?: 'Page_ConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenPage>;
};

export type IGenPage_CreateInput = {
  components?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  seo?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  titleInternal?: InputMaybe<Scalars['String']>;
};

export type IGenPage_Sort = {
  components?: InputMaybe<IGenOrder>;
  seo?: InputMaybe<IGenOrder>;
  slug?: InputMaybe<IGenOrder>;
  titleInternal?: InputMaybe<IGenOrder>;
};

export type IGenPage_UpdateInput = {
  components?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  seo?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  titleInternal?: InputMaybe<Scalars['String']>;
};

export type IGenPage_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenPage_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenPage_Where>>>;
  slug?: InputMaybe<IGenCaisyField_String_Where>;
  titleInternal?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenPage_Components = IGenBlogArticleGrid | IGenContactForm | IGenFullWithBlogTeaser | IGenFulltext | IGenHeadline | IGenNewsletterSignup;

export type IGenQuery = {
  __typename?: 'Query';
  Asset?: Maybe<IGenAsset>;
  BlogArticle?: Maybe<IGenBlogArticle>;
  BlogArticleGrid?: Maybe<IGenBlogArticleGrid>;
  ContactForm?: Maybe<IGenContactForm>;
  Footer?: Maybe<IGenFooter>;
  FullWithBlogTeaser?: Maybe<IGenFullWithBlogTeaser>;
  Fulltext?: Maybe<IGenFulltext>;
  Headline?: Maybe<IGenHeadline>;
  Navigation?: Maybe<IGenNavigation>;
  NavigationEntry?: Maybe<IGenNavigationEntry>;
  NewsletterSignup?: Maybe<IGenNewsletterSignup>;
  Page?: Maybe<IGenPage>;
  SeoInformation?: Maybe<IGenSeoInformation>;
  allAsset?: Maybe<IGenAsset_Connection>;
  allBlogArticle?: Maybe<IGenBlogArticle_Connection>;
  allBlogArticleGrid?: Maybe<IGenBlogArticleGrid_Connection>;
  allContactForm?: Maybe<IGenContactForm_Connection>;
  allFullWithBlogTeaser?: Maybe<IGenFullWithBlogTeaser_Connection>;
  allFulltext?: Maybe<IGenFulltext_Connection>;
  allHeadline?: Maybe<IGenHeadline_Connection>;
  allNavigationEntry?: Maybe<IGenNavigationEntry_Connection>;
  allNewsletterSignup?: Maybe<IGenNewsletterSignup_Connection>;
  allPage?: Maybe<IGenPage_Connection>;
  allSeoInformation?: Maybe<IGenSeoInformation_Connection>;
};


export type IGenQueryAssetArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenQueryBlogArticleArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenQueryBlogArticleGridArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenQueryContactFormArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenQueryFooterArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenQueryFullWithBlogTeaserArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenQueryFulltextArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenQueryHeadlineArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenQueryNavigationArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenQueryNavigationEntryArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenQueryNewsletterSignupArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenQueryPageArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenQuerySeoInformationArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenQueryAllAssetArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenAsset_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenAsset_Where>>>;
};


export type IGenQueryAllBlogArticleArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenBlogArticle_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenBlogArticle_Where>>>;
};


export type IGenQueryAllBlogArticleGridArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenBlogArticleGrid_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenBlogArticleGrid_Where>>>;
};


export type IGenQueryAllContactFormArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenContactForm_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenContactForm_Where>>>;
};


export type IGenQueryAllFullWithBlogTeaserArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenFullWithBlogTeaser_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenFullWithBlogTeaser_Where>>>;
};


export type IGenQueryAllFulltextArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenFulltext_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenFulltext_Where>>>;
};


export type IGenQueryAllHeadlineArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenHeadline_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenHeadline_Where>>>;
};


export type IGenQueryAllNavigationEntryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenNavigationEntry_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenNavigationEntry_Where>>>;
};


export type IGenQueryAllNewsletterSignupArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenNewsletterSignup_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenNewsletterSignup_Where>>>;
};


export type IGenQueryAllPageArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenPage_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenPage_Where>>>;
};


export type IGenQueryAllSeoInformationArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenSeoInformation_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenSeoInformation_Where>>>;
};

export type IGenSeoInformation = {
  __typename?: 'SeoInformation';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  keywords?: Maybe<Scalars['String']>;
  ogImage?: Maybe<IGenAsset>;
  title?: Maybe<Scalars['String']>;
  titleInternal?: Maybe<Scalars['String']>;
};


export type IGenSeoInformationOgImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenSeoInformation_Connection = {
  __typename?: 'SeoInformation_Connection';
  edges?: Maybe<Array<Maybe<IGenSeoInformation_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenSeoInformation_ConnectionEdge = {
  __typename?: 'SeoInformation_ConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenSeoInformation>;
};

export type IGenSeoInformation_CreateInput = {
  description?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Scalars['String']>;
  ogImage?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  titleInternal?: InputMaybe<Scalars['String']>;
};

export type IGenSeoInformation_Sort = {
  description?: InputMaybe<IGenOrder>;
  keywords?: InputMaybe<IGenOrder>;
  ogImage?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
  titleInternal?: InputMaybe<IGenOrder>;
};

export type IGenSeoInformation_UpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Scalars['String']>;
  ogImage?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  titleInternal?: InputMaybe<Scalars['String']>;
};

export type IGenSeoInformation_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenSeoInformation_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenSeoInformation_Where>>>;
  description?: InputMaybe<IGenCaisyField_String_Where>;
  keywords?: InputMaybe<IGenCaisyField_String_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
  titleInternal?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenAssetFragment = { __typename?: 'Asset', title?: string | null, src?: string | null, originType?: string | null, keywords?: string | null, id?: string | null, dominantColor?: string | null, description?: string | null, copyright?: string | null, author?: string | null };

export type IGenBlogArticleFragment = { __typename?: 'BlogArticle', teaserHeadline?: string | null, teaserDesciption?: string | null, slug?: string | null, id?: string | null, text?: { __typename?: 'BlogArticle_text', json?: any | null, connections?: Array<(
      { __typename?: 'Asset' }
      & IGenAssetFragment
    ) | null> | null } | null, teaserImage?: (
    { __typename?: 'Asset' }
    & IGenAssetFragment
  ) | null, seo?: { __typename?: 'SeoInformation', id?: string | null, description?: string | null, keywords?: string | null, title?: string | null, ogImage?: (
      { __typename?: 'Asset' }
      & IGenAssetFragment
    ) | null } | null };

export type IGenFulltextFragment = { __typename?: 'Fulltext', id?: string | null, text?: { __typename?: 'Fulltext_text', json?: any | null, connections?: Array<(
      { __typename: 'Asset' }
      & IGenAssetFragment
    ) | null> | null } | null };

export type IGenHeadlineFragment = { __typename?: 'Headline', subheadline?: string | null, id?: string | null, headline?: string | null };

export type IGenNavigationEntryFragment = { __typename?: 'NavigationEntry', id?: string | null, title?: string | null, connection?: { __typename?: 'Page', id?: string | null, slug?: string | null } | null };

export type IGenPageFragment = { __typename?: 'Page', id?: string | null, slug?: string | null, components?: Array<{ __typename: 'BlogArticleGrid', id?: string | null } | { __typename: 'ContactForm', id?: string | null } | { __typename: 'FullWithBlogTeaser', id?: string | null } | (
    { __typename: 'Fulltext' }
    & IGenFulltextFragment
  ) | (
    { __typename: 'Headline' }
    & IGenHeadlineFragment
  ) | { __typename: 'NewsletterSignup', id?: string | null } | null> | null, seo?: { __typename?: 'SeoInformation', title?: string | null, keywords?: string | null, id?: string | null, description?: string | null, ogImage?: { __typename?: 'Asset', id?: string | null } | null } | null };

export type IGenFooterQueryVariables = Exact<{ [key: string]: never; }>;


export type IGenFooterQuery = { __typename?: 'Query', Footer?: { __typename?: 'Footer', id?: string | null, content?: { __typename?: 'Footer_content', json?: any | null } | null } | null };

export type IGenNavigationQueryVariables = Exact<{ [key: string]: never; }>;


export type IGenNavigationQuery = { __typename?: 'Query', Navigation?: { __typename?: 'Navigation', id?: string | null, homePage?: { __typename?: 'Page', id?: string | null, slug?: string | null } | null, entries?: Array<(
      { __typename?: 'NavigationEntry' }
      & IGenNavigationEntryFragment
    ) | null> | null } | null };

export type IGenAllBlogArticleBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type IGenAllBlogArticleBySlugQuery = { __typename?: 'Query', allBlogArticle?: { __typename?: 'BlogArticle_Connection', edges?: Array<{ __typename?: 'BlogArticle_ConnectionEdge', node?: (
        { __typename?: 'BlogArticle' }
        & IGenBlogArticleFragment
      ) | null } | null> | null } | null };

export type IGenAllPageBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type IGenAllPageBySlugQuery = { __typename?: 'Query', allPage?: { __typename?: 'Page_Connection', edges?: Array<{ __typename?: 'Page_ConnectionEdge', node?: (
        { __typename?: 'Page' }
        & IGenPageFragment
      ) | null } | null> | null } | null };

export const AssetFragmentDoc = gql`
    fragment Asset on Asset {
  title
  src
  originType
  keywords
  id
  dominantColor
  description
  copyright
  author
}
    `;
export const BlogArticleFragmentDoc = gql`
    fragment BlogArticle on BlogArticle {
  text {
    connections {
      ...Asset
    }
    json
  }
  teaserImage {
    ...Asset
  }
  teaserHeadline
  teaserDesciption
  slug
  seo {
    id
    description
    keywords
    ogImage {
      ...Asset
    }
    title
  }
  id
}
    `;
export const NavigationEntryFragmentDoc = gql`
    fragment NavigationEntry on NavigationEntry {
  id
  title
  connection {
    id
    slug
  }
}
    `;
export const HeadlineFragmentDoc = gql`
    fragment Headline on Headline {
  subheadline
  id
  headline
}
    `;
export const FulltextFragmentDoc = gql`
    fragment Fulltext on Fulltext {
  text {
    json
    connections {
      __typename
      ...Asset
    }
  }
  id
}
    `;
export const PageFragmentDoc = gql`
    fragment Page on Page {
  components {
    __typename
    ... on ContactForm {
      id
    }
    ... on BlogArticleGrid {
      id
    }
    ... on FullWithBlogTeaser {
      id
    }
    ... on NewsletterSignup {
      id
    }
    ...Headline
    ...Fulltext
  }
  id
  seo {
    title
    ogImage {
      id
    }
    keywords
    id
    description
  }
  slug
}
    `;
export const FooterDocument = gql`
    query Footer {
  Footer {
    id
    content {
      json
    }
  }
}
    `;
export const NavigationDocument = gql`
    query Navigation {
  Navigation {
    id
    homePage {
      id
      slug
    }
    entries {
      ...NavigationEntry
    }
  }
}
    ${NavigationEntryFragmentDoc}`;
export const AllBlogArticleBySlugDocument = gql`
    query allBlogArticleBySlug($slug: String!) {
  allBlogArticle(where: {slug: {eq: $slug}}) {
    edges {
      node {
        ...BlogArticle
      }
    }
  }
}
    ${BlogArticleFragmentDoc}
${AssetFragmentDoc}`;
export const AllPageBySlugDocument = gql`
    query allPageBySlug($slug: String!) {
  allPage(where: {slug: {eq: $slug}}) {
    edges {
      node {
        ...Page
      }
    }
  }
}
    ${PageFragmentDoc}
${HeadlineFragmentDoc}
${FulltextFragmentDoc}
${AssetFragmentDoc}`;
export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    Footer(variables?: IGenFooterQueryVariables, options?: C): Promise<IGenFooterQuery> {
      return requester<IGenFooterQuery, IGenFooterQueryVariables>(FooterDocument, variables, options) as Promise<IGenFooterQuery>;
    },
    Navigation(variables?: IGenNavigationQueryVariables, options?: C): Promise<IGenNavigationQuery> {
      return requester<IGenNavigationQuery, IGenNavigationQueryVariables>(NavigationDocument, variables, options) as Promise<IGenNavigationQuery>;
    },
    allBlogArticleBySlug(variables: IGenAllBlogArticleBySlugQueryVariables, options?: C): Promise<IGenAllBlogArticleBySlugQuery> {
      return requester<IGenAllBlogArticleBySlugQuery, IGenAllBlogArticleBySlugQueryVariables>(AllBlogArticleBySlugDocument, variables, options) as Promise<IGenAllBlogArticleBySlugQuery>;
    },
    allPageBySlug(variables: IGenAllPageBySlugQueryVariables, options?: C): Promise<IGenAllPageBySlugQuery> {
      return requester<IGenAllPageBySlugQuery, IGenAllPageBySlugQueryVariables>(AllPageBySlugDocument, variables, options) as Promise<IGenAllPageBySlugQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;