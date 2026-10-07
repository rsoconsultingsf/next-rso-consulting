import { stripPreviewUrls } from "./stripPreviewUrls";

// Server-only: these must never carry the NEXT_PUBLIC_ prefix, or Next.js
// inlines the tokens into the browser bundle.
const space = process.env.CONTENTFUL_SPACE_ID;

const POST_GRAPHQL_FIELDS = `
title
slug
publishDate
seoTitle
metaDescription
featuredImage {
  title
  description
  url
  width
  height
}
author {
  name
  bio {
    json
  }
  photo {
    url
  }
}
content {
  json
  links {
    assets {
      block {
        sys {
          id
        }
        url
        description
        width
        height
      }
    }
    entries{
      block {
        ... on CodeBlock {
          sys {
            id
          }
          content
        }
      }
    }
  }
  
}
categories
`;

const MAX_RATE_LIMIT_RETRIES = 5;

// Only a literal `true` selects draft content. Next.js passes context objects
// to data functions (e.g. getStaticPaths receives `{ locales, ... }`), and a
// truthy stray argument must never switch a published-content build over to
// the Preview API token.
function isPreview(preview) {
  return preview === true;
}

// The `preview:` argument in a query and the token that fetchGraphQL sends
// must agree: the Delivery token rejects `preview: true`, and the Preview
// token without it silently returns published content only.
function previewArg(preview) {
  return isPreview(preview) ? "true" : "false";
}

// Defaults to the Content Delivery API (published content). Pass
// `preview = true` only from genuine preview-mode code paths.
async function fetchGraphQL(query, preview = false, attempt = 0) {
  preview = isPreview(preview);
  const token = preview
    ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : process.env.CONTENTFUL_ACCESS_TOKEN;

  if (!space || !token) {
    console.error(
      `Contentful config missing: CONTENTFUL_SPACE_ID ${
        space ? "set" : "NOT SET"
      }, ${
        preview ? "CONTENTFUL_PREVIEW_ACCESS_TOKEN" : "CONTENTFUL_ACCESS_TOKEN"
      } ${token ? "set" : "NOT SET"}`
    );
  }

  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${space}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query }),
    }
  );

  // Static builds render hundreds of pages in parallel and can trip
  // Contentful's per-space rate limit; wait it out instead of failing.
  if (response.status === 429 && attempt < MAX_RATE_LIMIT_RETRIES) {
    const resetSeconds =
      Number(response.headers.get("X-Contentful-RateLimit-Reset")) || 1;
    const delay = resetSeconds * 1000 * (attempt + 1) + Math.random() * 500;
    await new Promise((resolve) => setTimeout(resolve, delay));
    return fetchGraphQL(query, preview, attempt + 1);
  }

  const json = await response.json();

  if (!response.ok || json.errors) {
    console.error(
      `Contentful GraphQL error (HTTP ${response.status}):`,
      JSON.stringify(json.errors ?? json).slice(0, 500)
    );
  }

  return stripPreviewUrls(json);
}

function extractPost(fetchResponse) {
  return fetchResponse?.data?.blogPostCollection?.items?.[0];
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.blogPostCollection;
}

export async function getPreviewPostBySlug(slug) {
  const entry = await fetchGraphQL(
    `query {
      blogPostCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  );
  return extractPost(entry);
}

export async function getAllPostSlugs() {
  const entries = await fetchGraphQL(
    `query {
      blogPostCollection(where: { slug_exists: true }, order: publishDate_DESC, limit: 1000) {
        items {
          slug
        }
      }
    }`,
    false
  );
  return extractPostEntries(entries);
}

export async function getAllPostsForHome(preview = false) {
  const entries = await fetchGraphQL(
    `query {
      blogPostCollection(order: publishDate_DESC, preview: ${previewArg(preview)}) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );

  return extractPostEntries(entries);
}

export async function getAllPostsCategories(preview = false) {
  const entries = await fetchGraphQL(
    `query {
      blogPostCollection(limit: 1000, preview: ${previewArg(preview)}) {
        items {
          categories
        }
      }
    }`,
    preview
  );

  // Preview mode includes unfinished drafts, whose `categories` can be null.
  // Pages slugify every category name, and slugify throws on non-strings.
  const collection = extractPostEntries(entries);
  return (
    collection && {
      ...collection,
      items: collection.items.map((item) => ({
        ...item,
        categories: (item?.categories ?? []).filter(
          (category) => typeof category === "string" && category.trim()
        ),
      })),
    }
  );
}

export async function getPostPreviews(preview = false, page, limit, category) {
  const pageGroup = page * limit;

  let query;
  if (category === "all") {
    query = `query {
      blogPostCollection(limit: ${limit}, skip: ${pageGroup}, order: publishDate_DESC, preview: ${previewArg(preview)}) {
        total
        items {
          title
          publishDate
          slug
          featuredImage {
            url
            width
            height
          }
        }
      }
    }`;
  } else {
    query = `query {
      blogPostCollection(limit: ${limit}, skip: ${pageGroup}, order: publishDate_DESC, preview: ${previewArg(preview)}, where: {
        categories_contains_some: ${JSON.stringify(category)}
      }) {
        total
        items {
          title
          publishDate
          slug
          featuredImage {
            url
            width
            height
          }
        }
      }
    }`;
  }

  const entries = await fetchGraphQL(query, preview);

  return extractPostEntries(entries);
}

export async function getCategoryPostPreviews(
  preview = false,
  page,
  limit,
  category
) {
  const pageGroup = page * limit;

  const query = `query {
    blogPostCollection(limit: ${limit}, skip: ${pageGroup}, order: publishDate_DESC, preview: ${previewArg(preview)}, where: {
      categories_contains_some: ${JSON.stringify(category)}
    }) {
      total
      items {
        title
        publishDate
        slug
        featuredImage {
          url
          width
          height
        }
      }
    }
  }`;

  const entries = await fetchGraphQL(query, preview);

  return extractPostEntries(entries);
}

export async function getPostAndMorePosts(slug, preview = false) {
  const entry = await fetchGraphQL(
    `query {
      blogPostCollection(where: { slug: "${slug}" }, preview: ${previewArg(preview)}, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  const entries = await fetchGraphQL(
    `query {
      blogPostCollection(where: { slug_not_in: "${slug}" }, order: publishDate_DESC, preview: ${previewArg(preview)}, limit: 2) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries),
  };
}
