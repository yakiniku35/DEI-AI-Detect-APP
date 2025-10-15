/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js');

const nextConfig = {
  i18n,
  // Enable App Router (app/ directory) on Next 14 via top-level flag
  appDir: true,
};

module.exports = nextConfig;
