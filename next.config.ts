import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // A stray lockfile exists outside this project (in the user folder);
  // pin the tracing root so Next.js always treats this folder as the app root.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
