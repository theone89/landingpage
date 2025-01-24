import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Especifica el protocolo (http o https)
        hostname: "via.placeholder.com", // Dominio permitido
      },
      {
        protocol: "https",
        hostname: "wonderfulltime.com", // Dominio permitido
      },
    ],
  },
};

export default nextConfig;
