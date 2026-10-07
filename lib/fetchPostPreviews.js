// Browser-side pagination for the blog archives. Goes through /api/posts so
// the Contentful tokens never reach the client.
export async function fetchPostPreviews(page, category = "all") {
  const params = new URLSearchParams({ page: String(page), category });
  const response = await fetch(`/api/posts/?${params}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.status}`);
  }

  return response.json();
}
