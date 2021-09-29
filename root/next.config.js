module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/blog',
        destination: `http://41843-monorepo-nextjs-with-zones-blog.vercel-support.app/blog`,
      },
      {
        source: '/blog/:path*',
        destination: `http://41843-monorepo-nextjs-with-zones-blog.vercel-support.app/blog/:path*`,
      }
    ]
  },
}
