import Parser from "rss-parser";

// Search Engine Land's feed now sits behind a Cloudflare bot challenge that
// blocks server-side fetches (403), so the news page uses Search Engine
// Journal, which covers the same SEO / PPC / AI-search news.
export const FEEDS = [
  {
    title: "Search Engine Journal",
    url: "https://www.searchenginejournal.com/feed/",
  },
];

// "Headline via @sejournal, @author" → "Headline"
function cleanTitle(title = "") {
  return title.replace(/\s+via\s+@\w+(?:,\s*@\w+)*\s*$/i, "").trim();
}

// Drop the WordPress footer: "The post <title> appeared first on <site>."
function cleanSnippet(snippet = "") {
  return snippet
    .replace(/\s*The post [\s\S]*? appeared first on [^\n]*$/, "")
    .trim();
}

export async function getFeed(feedUrl) {
  let parser = new Parser();

  let feed = await parser.parseURL(feedUrl);

  return {
    ...feed,
    items: (feed.items || []).map((item) => ({
      ...item,
      title: cleanTitle(item.title),
      contentSnippet: cleanSnippet(item.contentSnippet),
    })),
  };
}
