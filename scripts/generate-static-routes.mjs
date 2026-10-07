// Lists every non-dynamic page in pages/ so the sitemap can include them
// without a hand-maintained list. Runs before `next build` and `next dev`
// (see package.json); writes lib/staticRoutes.json, which is gitignored.
import { readdirSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

const PAGES_DIR = "pages";
const OUT_FILE = "lib/staticRoutes.json";

// Not indexable pages: Next.js internals, error pages, the sitemap itself,
// and API routes.
const EXCLUDED = new Set([
  "/_app",
  "/_document",
  "/_error",
  "/404",
  "/500",
  "/sitemap.xml",
]);

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

const routes = walk(PAGES_DIR)
  .filter((file) => /\.(js|jsx|ts|tsx)$/.test(file))
  .map(
    (file) => "/" + relative(PAGES_DIR, file).replace(/\.(js|jsx|ts|tsx)$/, ""),
  )
  .filter((route) => !route.startsWith("/api/") && !route.includes("["))
  .filter((route) => !EXCLUDED.has(route))
  .map((route) => route.replace(/\/index$/, "") + "/")
  .map((route) => route.replace(/^\/\/$/, "/"))
  .sort();

writeFileSync(OUT_FILE, JSON.stringify(routes, null, 2) + "\n");
console.log(`Wrote ${routes.length} static routes to ${OUT_FILE}`);
