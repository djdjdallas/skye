/** @type {import('next').NextConfig} */
const nextConfig = {
  // Modern formats cut image weight a lot. The art on this site is the product,
  // so we serve it as AVIF/WebP where the browser supports it.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
