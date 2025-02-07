/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  env: {
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,
    SANITY_API_READ_TOKEN: process.env.SANITY_API_READ_TOKEN,
    RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY
  },
}

module.exports = nextConfig