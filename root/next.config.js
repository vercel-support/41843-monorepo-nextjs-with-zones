module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/blog',
        destination: `https://40049-nextjs-with-zones-blog.vercel-support.app/blog`,
      },
      {
        source: '/blog/:path*',
        destination: `https://40049-nextjs-with-zones-blog.vercel-support.app/blog/:path*`,
      }
    ]
  },
}
