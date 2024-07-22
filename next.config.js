/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["images.ctfassets.net","images.contentstack.io"],
    remotePatterns :[
      {
        protocol: "https",
        hostname : "images.contentstack.io"
      }
    ]
  },
}