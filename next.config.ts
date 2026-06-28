import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/rodnye-vechera",
  assetPrefix: "/rodnye-vechera/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
