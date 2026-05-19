/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ['192.168.1.9'],
   images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
