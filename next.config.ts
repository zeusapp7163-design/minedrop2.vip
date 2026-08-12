import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/ru", destination: "/", permanent: false },
      { source: "/ru/:path*", destination: "/", permanent: false },
      { source: "/en", destination: "/", permanent: false },
      { source: "/en/:path*", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
