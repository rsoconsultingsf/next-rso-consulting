/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: ["images.ctfassets.net", "www.gstatic.com"],
  },
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/seo-services/",
        destination: "/services/seo-services/",
        permanent: true,
      },
      {
        source: "/:slug",
        destination: "/digital-marketing-blogs/:slug",
        permanent: true,
      },
    ];
  },
};
