import redirects from "./redirects";
import { BASE_URL } from "./schemas";

// Old posts link to each other by their pre-2022 root URLs (and often without
// the trailing slash), which costs every click a redirect or two. Rewrite
// every internal link in Contentful rich text to its final URL — absolute,
// https://www, trailing slash, through lib/redirects.js — so the rendered page
// links straight to it. Rich text renderers treat rso-consulting.com links as
// internal, so the result stays absolute.

const SITE_HOSTS = new Set(["rso-consulting.com", "www.rso-consulting.com"]);
const REDIRECTS = new Map(
  redirects.map(({ source, destination }) => [source, destination]),
);

export function finalInternalUrl(uri) {
  const trimmed = typeof uri === "string" ? uri.trim() : "";

  // Only http(s) URLs and site-relative paths; leave in-page anchors,
  // mailto:, tel: and the like alone.
  if (!/^(https?:\/\/|\/)/i.test(trimmed)) {
    return uri;
  }

  let url;
  try {
    url = new URL(trimmed, BASE_URL);
  } catch {
    return uri;
  }

  if (!/^https?:$/.test(url.protocol) || !SITE_HOSTS.has(url.hostname)) {
    return uri;
  }

  let path = url.pathname;
  const lastSegment = path.split("/").pop();
  if (!path.endsWith("/") && !lastSegment.includes(".")) {
    path += "/";
  }

  const destination = REDIRECTS.get(path);
  if (destination && /^https?:\/\//.test(destination)) {
    return destination;
  }

  return `${BASE_URL}${destination ?? path}${url.search}${url.hash}`;
}

// Asset descriptions are raw HTML (RichTextAsset renders them as image
// captions), so their links never pass through a hyperlink node.
function resolveHrefsInHtml(html) {
  return html.replace(
    /(href\s*=\s*)(["'])(.*?)\2/gi,
    (_, attribute, quote, href) =>
      `${attribute}${quote}${finalInternalUrl(href)}${quote}`,
  );
}

export function resolveInternalLinks(value) {
  if (Array.isArray(value)) {
    return value.map(resolveInternalLinks);
  }

  if (value && typeof value === "object") {
    const resolved = Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        key === "description" && typeof item === "string"
          ? resolveHrefsInHtml(item)
          : resolveInternalLinks(item),
      ]),
    );

    if (resolved.nodeType === "hyperlink" && resolved.data?.uri) {
      resolved.data = {
        ...resolved.data,
        uri: finalInternalUrl(resolved.data.uri),
      };
    }

    return resolved;
  }

  return value;
}
