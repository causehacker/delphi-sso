/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_EMBED_ID: process.env.NEXT_PUBLIC_EMBED_ID,
    DELPHI_PRIVATE_SSO_KEY: process.env.DELPHI_PRIVATE_SSO_KEY,
  },
};

export default nextConfig;
