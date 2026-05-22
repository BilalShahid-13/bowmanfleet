import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export',
  trailingSlash: true,
  assetPrefix: './',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
//  <link rel="stylesheet" href="./_next/static/chunks/0md2k86kyut7..css" data-precedence="next" />
//     <link rel="stylesheet" href="./_next/static/chunks/0mec6oqg9m0ct.css" data-precedence="next" />