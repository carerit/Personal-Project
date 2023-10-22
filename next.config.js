/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.dog.ceo",
        port: "",
        pathname: "/breeds/**",
      },
      {
        protocol: "https",
        hostname: "dog.ceo",
        port: "",
        pathname: "**",
      },
    ],
  },
};
