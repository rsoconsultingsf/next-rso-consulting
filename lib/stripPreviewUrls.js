// Editors sometimes paste a link copied from Contentful's "Open preview"
// button into a post. Those URLs carry CONTENTFUL_PREVIEW_SECRET, which turns
// on preview mode for anyone who has it. Rewrite every such URL to the public
// post URL before Contentful data reaches page props or HTML, so the secret is
// never published even if one slips into an entry.

// Matches /api/preview?… with or without a scheme and host in front.
const PREVIEW_URL_PATTERN =
  /(?:https?:\/\/[^\s"'<>]*?)?\/api\/preview\/?\?[^\s"'<>]*/g;

function publicUrlForPreviewUrl(previewUrl) {
  const query = previewUrl.slice(previewUrl.indexOf("?") + 1);
  const slug = new URLSearchParams(query).get("slug");

  return slug
    ? `/digital-marketing-blogs/${encodeURIComponent(slug)}/`
    : "/digital-marketing-blogs/";
}

export function stripPreviewUrls(value) {
  if (typeof value === "string") {
    return value.includes("/api/preview")
      ? value.replace(PREVIEW_URL_PATTERN, publicUrlForPreviewUrl)
      : value;
  }

  if (Array.isArray(value)) {
    return value.map(stripPreviewUrls);
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, stripPreviewUrls(item)]),
    );
  }

  return value;
}
