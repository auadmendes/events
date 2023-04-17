/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'loremflickr.com',
      'cloudflare-ipfs.com',
      'images.pexels.com',
      'www.pexels.com',
      'lh3.googleusercontent.com',
      'scontent-lax3-1.xx.fbcdn.net',
      'scontent-gru2-2.xx.fbcdn.net'
    ]
  }
}

module.exports = nextConfig
