import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Regla para Googlebot
      {
        userAgent: "Googlebot",
        allow: ["/"],
        disallow: ["/private/", "/admin/"],
        crawlDelay: 10,
      },
      // Regla para todos los bots (userAgent: *)
      {
        userAgent: "*",
        allow: ["/public/", "/blog/"],
        disallow: ["/private/", "/admin/"],
      },
      // Regla para Bingbot
      {
        userAgent: "Bingbot",
        allow: ["/"],
        disallow: ["/private/"],
      },
      // Regla para Applebot
      {
        userAgent: "Applebot",
        allow: ["/"],
        disallow: ["/private/"],
      },
    ],
    sitemap: "https://strongfreecode.com/sitemap.xml",
    host: "https://strongfreecode.com",
  };
}
