/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
    /* config options here */
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
  
      return config;
    },
    images: {
        deviceSizes: [320, 420, 768, 1024, 1200],
        loader: "default",
        domains: ["res.cloudinary.com"],
      },
      i18n: {
        locales: ['en-US', 'ar'],
        defaultLocale: 'en-US',
      },
  }
  
  module.exports = nextConfig