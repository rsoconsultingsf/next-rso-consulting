import { getPostPreviews } from "../../lib/api";

const ITEMS_PER_PAGE = 12;

// Paginated post previews for the blog archives. The archives page through
// posts in the browser, so they call this route instead of Contentful
// directly — that keeps the Contentful tokens on the server. Always published
// content: preview is never enabled here.
export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const page = Number.parseInt(req.query.page, 10);
  const category =
    typeof req.query.category === "string" ? req.query.category : "all";

  if (!Number.isInteger(page) || page < 0 || page > 1000) {
    return res.status(400).json({ message: "Invalid page" });
  }
  if (!category || category.length > 100) {
    return res.status(400).json({ message: "Invalid category" });
  }

  try {
    const posts = await getPostPreviews(false, page, ITEMS_PER_PAGE, category);
    if (!posts) {
      return res.status(502).json({ message: "Error fetching posts" });
    }

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=60, stale-while-revalidate=600",
    );
    return res.status(200).json(posts);
  } catch (err) {
    return res.status(502).json({ message: "Error fetching posts" });
  }
}
