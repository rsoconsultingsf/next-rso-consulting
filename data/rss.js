import Parser from "rss-parser";

export const FEEDS = [
  {
    title: "Search Engine Land",
    url: "https://searchengineland.com/feed",
  },
];

export async function getFeed(feedUrl) {
  let parser = new Parser();

  let feed = await parser.parseURL(feedUrl);

  return feed;
}
