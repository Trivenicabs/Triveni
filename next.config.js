/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
      },
      {
        protocol: 'https',
        hostname: 't4.ftcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'media.gettyimages.com',
      },
      // Added hostnames for car images
      {
        protocol: 'https',
        hostname: 'stimg.cardekho.com',
      },
      {
        protocol: 'https',
        hostname: 'www.kia.com',
      },
      {
        protocol: 'https',
        hostname: 'bmw.scene7.com',
      },
      {
        protocol: 'https',
        hostname: '5.imimg.com',
      },
      {
        protocol: 'https',
        hostname: '4.imimg.com',
      },
      {
        protocol: 'https',
        hostname: 'imgd.aeplcdn.com',
      }
    ],
  },
}

module.exports = nextConfig