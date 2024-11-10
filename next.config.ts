import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* NOTE: Look at new Next release that fixes this problem */
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default nextConfig;
