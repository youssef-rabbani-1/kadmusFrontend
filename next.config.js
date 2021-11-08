/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
    /* config options here */
    images: {
        deviceSizes: [320, 420, 768, 1024, 1200],
        loader: "default",
        domains: ["res.cloudinary.com"],
      },
  }
  
  module.exports = nextConfig