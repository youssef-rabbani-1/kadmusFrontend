/**
 * @type {import('next').NextConfig}
 */
const { i18n } = require("./next-i18next.config")

const nextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    loader: "default",
    domains: ["res.cloudinary.com"],
  },
  i18n,
}

module.exports = nextConfig
