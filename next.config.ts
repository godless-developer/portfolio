import nextI18NextConfig from "./next-i18next.config.js";

const nextConfig = {
  experimental: {
    appDir: true,
    turbo: false,
  },
  ...nextI18NextConfig,
};

export default nextConfig;
