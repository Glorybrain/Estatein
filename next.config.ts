import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // remove later
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
