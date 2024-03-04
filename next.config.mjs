/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "unsplash.it",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.venturedive.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
