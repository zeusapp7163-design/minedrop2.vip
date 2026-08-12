import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.minedrop2.vip" }],
        destination: "https://minedrop2.vip/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "minedrop2-vip.vercel.app" }],
        destination: "https://minedrop2.vip/:path*",
        permanent: true,
      },
      { source: "/ru", destination: "/", permanent: false },
      { source: "/ru/:path*", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
