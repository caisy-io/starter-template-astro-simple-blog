import { gql } from "graphql-request";

export const f_Page = gql`
${f_Fulltext}
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
