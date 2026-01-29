import type { NextConfig } from "next";
import { execSync } from "child_process";

const lastUpdated = execSync("git log -1 --format=%cd --date=iso")
  .toString()
  .trim();

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_LAST_UPDATED: lastUpdated,
  },
};

export default nextConfig;
