/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_SERVICE_ID: process.env.NEXT_PUBLIC_SERVICE_ID,
    NEXT_PUBLIC_TEMPLATE_ID: process.env.NEXT_PUBLIC_TEMPLATE_ID,
    NEXT_PUBLIC_KEY: process.env.NEXT_PUBLIC_KEY,
    NEXT_PRIVATE_KEY: process.env.NEXT_PRIVATE_KEY
  },
}

module.exports = nextConfig