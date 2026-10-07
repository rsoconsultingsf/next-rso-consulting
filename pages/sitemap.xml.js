import slugify from "slugify";

import { getSitemapPosts } from "../lib/api";
import { BASE_URL } from "../lib/schemas";
import staticRoutes from "../lib/staticRoutes.json";

// Built per request (cached at the edge) so new posts appear without a
// redeploy. Static pages come from lib/staticRoutes.json, generated from
// pages/ before every build — see scripts/generate-static-routes.mjs.

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function urlEntry(path, lastmod) {
  const lastmodTag = lastmod ? `<lastmod>${lastmod}</lastmod>` : "";
  return `<url><loc>${escapeXml(BASE_URL + path)}</loc>${lastmodTag}</url>`;
}

function newest(dates) {
  return dates.filter(Boolean).sort().at(-1);
}

export async function getServerSideProps({ res }) {
  const posts = await getSitemapPosts();

  // Don't cache or serve a sitemap that silently drops every post.
  if (!posts?.items) {
    res.statusCode = 503;
    res.setHeader("Retry-After", "300");
    res.end();
    return { props: {} };
  }

  const postDates = posts.items.map((post) => post.sys?.publishedAt);

  // Same slug rule as the category pages' getStaticPaths.
  const categoryDates = new Map();
  for (const post of posts.items) {
    for (const category of post.categories ?? []) {
      if (typeof category !== "string" || !category.trim()) continue;
      const slug = slugify(category, { lower: true, strict: true });
      categoryDates.set(
        slug,
        newest([categoryDates.get(slug), post.sys?.publishedAt]),
      );
    }
  }

  const entries = [
    ...staticRoutes.map((path) =>
      urlEntry(
        path,
        path === "/digital-marketing-blogs/" ? newest(postDates) : undefined,
      ),
    ),
    ...[...categoryDates.keys()]
      .sort()
      .map((slug) =>
        urlEntry(
          `/digital-marketing-blogs/category/${slug}/`,
          categoryDates.get(slug),
        ),
      ),
    ...posts.items.map((post) =>
      urlEntry(`/digital-marketing-blogs/${post.slug}/`, post.sys?.publishedAt),
    ),
  ];

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400",
  );
  res.end(
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
      entries.join("\n") +
      "\n</urlset>\n",
  );

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
