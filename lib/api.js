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

async function fetchGraphQL(query, preview = true, attempt = 0) {
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

  return json;
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
    }`
  );
  return extractPostEntries(entries);
}

export async function getAllPostsForHome(preview) {
  const entries = await fetchGraphQL(
    `query {
      blogPostCollection(order: publishDate_DESC, preview: ${
        preview ? "true" : "false"
      }) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );

  return extractPostEntries(entries);
}

export async function getAllPostsCategories(preview) {
  const entries = await fetchGraphQL(
    `query {
      blogPostCollection(limit: 1000) {
        items {
          categories
        }
      }
    }`,
    preview
  );

  return extractPostEntries(entries);
}

export async function getPostPreviews(preview = false, page, limit, category) {
  const pageGroup = page * limit;

  let query;
  if (category === "all") {
    query = `query {
      blogPostCollection(limit: ${limit}, skip: ${pageGroup}, order: publishDate_DESC) {
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
      blogPostCollection(limit: ${limit}, skip: ${pageGroup} order: publishDate_DESC, where: {
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
    blogPostCollection(limit: ${limit}, skip: ${pageGroup}, order: publishDate_DESC, where: {
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

export async function getPostAndMorePosts(slug, preview) {
  const entry = await fetchGraphQL(
    `query {
      blogPostCollection(where: { slug: "${slug}" }, preview: ${
      preview ? "true" : "false"
    }, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  const entries = await fetchGraphQL(
    `query {
      blogPostCollection(where: { slug_not_in: "${slug}" }, order: publishDate_DESC, preview: ${
      preview ? "true" : "false"
    }, limit: 2) {
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
