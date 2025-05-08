  import type { NextConfig } from "next";

  const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['res.cloudinary.com'],
      unoptimized: true, 
    },
    output: 'export',
    trailingSlash: true,
    distDir: 'dist',
  }

  export default nextConfig;
