import type { MetadataRoute } from "next";
import { pages } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bbcnb.us";

  return [
    {
      url: base,
      lastModified: new Date(),
    },
    ...pages.map((page) => ({
      url: `${base}/${page.slug}`,
      lastModified: new Date(),
    })),
    ...["statement-of-faith", "contact"].map((slug) => ({
      url: `${base}/${slug}`,
      lastModified: new Date(),
    })),
  ];
}
