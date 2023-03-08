import type { APIRoute } from "astro";

export const get: APIRoute = async function get({ request }) {
  const { headers, url } = request;
  const host = headers.get("host") || url.split("/")[2];

  const baseUrl = `https://${host}`;

  const body = `
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml
`;

  return {
    status: 200,
    headers: {
      "content-type": "text/plain",
    },
    body,
  };
};
