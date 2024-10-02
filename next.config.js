/** @type {import('next').NextConfig} */
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/dev-notes' : '';

const nextraConfig = withNextra({
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  basePath,
  output: 'export',
});

module.exports = nextraConfig;
