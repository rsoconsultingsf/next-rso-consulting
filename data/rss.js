import Parser from "rss-parser";

export const FEEDS = [
  {
    title: "Search Engine Land",
    url: "http://feeds.searchengineland.com/searchengineland",
  },
];

export async function getFeed(feedUrl) {
  let parser = new Parser();

  let feed = await parser.parseURL(feedUrl);

  return feed;
}
