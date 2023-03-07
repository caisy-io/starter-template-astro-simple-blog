import { caisySDK } from "../graphql/getSdk";

export const getProps = async ({
  slug,
  isBlogPage,
}: {
  slug?: string;
  isBlogPage?: boolean;
}) => {
  const navigationRequest = caisySDK.Navigation();
  const footerRequest = caisySDK.Footer();

  if (slug === undefined) {
    const Navigation = (await navigationRequest)?.Navigation;
    slug = Navigation?.homePage?.slug ?? undefined;
  }

  if (slug === undefined) {
    return {
      is404: true,
      Navigation: (await navigationRequest)?.Navigation,
      Footer: (await footerRequest)?.Footer,
      BlogArticle: null,
      Page: null,
    };
  }

  const BlogArticle = isBlogPage
    ? (await caisySDK
        .allBlogArticleBySlug({ slug })
        .then((r) => r.allBlogArticle?.edges?.[0]?.node)) ?? null
    : null;

  const Page = !isBlogPage
    ? (await caisySDK
        .allPageBySlug({ slug })
        .then((r) => r.allPage?.edges?.[0]?.node)) ?? null
    : null;

  return {
    is404: (BlogArticle === null && Page === null),
    Navigation: (await navigationRequest)?.Navigation,
    Footer: (await footerRequest)?.Footer,
    BlogArticle,
    Page,
  };
};
