import type {NextConfig} from 'next';

const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  // disable: process.env.NODE_ENV === 'development',
  // runtimeCaching: runtimeCaching,
  // customWorkerSrc: '/service-worker.js',
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // output: 'export',
  images: {
    // unoptimized: true,
    domains: ['george-fx.github.io', 'raw.githubusercontent.com'],
  },
};

module.exports = withPWA(nextConfig);
