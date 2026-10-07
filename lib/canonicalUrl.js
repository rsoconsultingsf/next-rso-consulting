import { BASE_URL } from "./schemas";

// The one URL search engines should index for a page: production host,
// no query string or hash, trailing slash (next.config.js sets
// trailingSlash: true).
export function canonicalUrl(asPath) {
  let path = asPath.split(/[?#]/)[0] || "/";

  if (!path.endsWith("/")) {
    path += "/";
  }

  return `${BASE_URL}${path}`;
}
