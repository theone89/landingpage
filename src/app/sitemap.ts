import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://strongfreecode.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
      images: ["https://strongfreecode.com/og-sfc.png"],
    },
    {
      url: "https://strongfreecode.com/politica-privacidad",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://strongfreecode.com/terminos-condiciones",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://strongfreecode.com/contacto-patrocinio",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://strongfreecode.com/login",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
