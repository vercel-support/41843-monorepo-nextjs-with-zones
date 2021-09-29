module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/blog',
        destination: `https://41843-monorepo-nextjs-with-zones-blog.vercel-support.app/blog`,
      },
      {
        source: '/blog/:path*',
        destination: `https://41843-monorepo-nextjs-with-zones-blog.vercel-support.app/blog/:path*`,
      }
    ]
  },
}
