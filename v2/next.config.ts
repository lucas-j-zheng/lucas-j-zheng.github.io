import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    // pin the workspace root to v2/ so the repo root's lockfile and
    // postcss config are never picked up
    root: path.dirname(fileURLToPath(import.meta.url)),
  },
};

export default nextConfig;
