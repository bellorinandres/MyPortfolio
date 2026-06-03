import { basics } from "@cv";

export function GET() {
  const siteUrl = basics.url.endsWith("/") ? basics.url : `${basics.url}/`;
  const sitemapUrl = new URL("sitemap-index.xml", siteUrl).toString();

  return new Response(`User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
