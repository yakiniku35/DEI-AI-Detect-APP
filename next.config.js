/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js');

const nextConfig = {
  i18n,
  // Note: Next.js may not require or accept explicit `appDir` in this version.
  // We remove appDir to avoid "Unrecognized key" warnings during build.
};

module.exports = nextConfig;
