import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // output: 'export',
  output: 'standalone',  // ✅ Node.js server
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
