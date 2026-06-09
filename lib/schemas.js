const BASE_URL = "https://www.rso-consulting.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "RSO Consulting",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logos/san-francisco-digital-marketing-agency.png`,
  description:
    "RSO Consulting is a full-service digital marketing agency in San Francisco offering SEO, PPC, web analytics, social media, email marketing, affiliate marketing, and AI search optimization.",
  foundingDate: "2005",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    addressCountry: "US",
  },
  telephone: "+14159923830",
  areaServed: "Worldwide",
  sameAs: [
    "https://www.linkedin.com/company/rso-consulting",
    "https://twitter.com/rso_consulting",
  ],
};

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "RSO Consulting",
  url: BASE_URL,
  publisher: {
    "@id": `${BASE_URL}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/digital-marketing-blogs/?search={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${BASE_URL}/#localbusiness`,
  name: "RSO Consulting",
  description:
    "Full-service digital marketing agency in San Francisco, CA, offering SEO, PPC, social media, analytics, email marketing, and AI search optimization.",
  url: BASE_URL,
  telephone: "+14159923830",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "37.7749",
    longitude: "-122.4194",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  image: `${BASE_URL}/images/logos/san-francisco-digital-marketing-agency.png`,
  parentOrganization: {
    "@id": `${BASE_URL}/#organization`,
  },
};

export const breadcrumb = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
