/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "purepng.com",
      },
      {
        protocol: "https",
        hostname: "links.papareact.com",
      },
      {
        protocol: "http",
        hostname: "tinyurl.com",
      },
      {
        protocol: "https",
        hostname: "i5.walmartimages.com",
      },
    ],
  },
};
export default nextConfig;
