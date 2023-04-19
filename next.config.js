/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "i.dummyjson.com",
      "res.cloudinary.com",
      "i.ibb.co",
      "lh3.googleusercontent.com",
      "upload.wikimedia.org",
    ],
  },
};
// module.exports = {
//   images: {
//       domains: ['images.unsplash.com'],
//   },
// }
module.exports = nextConfig;
