/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  // output: "export",
  images: {
    unoptimized: true
  },
  optimizeFonts: false
};

export default nextConfig;
