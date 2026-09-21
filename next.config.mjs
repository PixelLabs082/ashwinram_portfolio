import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  agentRules: false,
  turbopack: {
    resolveAlias: {
      '@swc/helpers': path.join(root, 'node_modules/@swc/helpers'),
    },
  },
};

export default nextConfig;
