const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;

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
  }
}
categories
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(`https://graphql.contentful.com/content/v1/spaces/${space}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        preview
          ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
          : process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
      }`,
    },
    body: JSON.stringify({ query }),
  }).then((response) => response.json());
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
        categories_contains_some: "${category}"
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
      categories_contains_some: "${category}"
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
