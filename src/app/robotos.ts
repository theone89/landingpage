import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Regla para todos los bots (userAgent: *)
      {
        userAgent: "*",
        allow: ["/"],
      },
    ],
    sitemap: "https://strongfreecode.com/sitemap.xml",
    host: "https://strongfreecode.com",
  };
}
