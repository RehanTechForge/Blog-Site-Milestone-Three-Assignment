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
    ],
  },
};

export default nextConfig;
