// const { i18n } = require("./next-i18next.config");
// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   images: {
//     domains: ["img.freepik.com"],
//   },
//   reactStrictMode: true,
//   i18n,
//   experimental: {
//     turbo: false, // Webpack руу буцаах
//   },
// };

// module.exports = nextConfig;

import nextI18NextConfig from "./next-i18next.config.js";

const nextConfig = {
  experimental: {
    appDir: true,
    turbo: false, // Turbopack-с Webpack руу шилжүүлнэ
  },
  ...nextI18NextConfig,
};

export default nextConfig;
