import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  transpilePackages: ['@noufex/core-api', '@noufex/types', '@noufex/ui-tokens'],
};

export default nextConfig;
