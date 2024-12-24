/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "", // Leave empty for default port
        pathname: "/**", // Match all paths
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "", // Leave empty for default port
        pathname: "/**", // Match all
      },
    ],
  },
};

export default nextConfig;
