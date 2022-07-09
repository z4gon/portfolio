/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,

    // exportPathMap allows you to specify a mapping of request paths to page destinations, to be used during export
    // https://nextjs.org/docs/api-reference/next.config.js/exportPathMap
    exportPathMap: async function () {
        return {
            '/': { page: '/' },
        }
    },

    experimental: {
        // Image Optimization using Next.js' default loader is not compatible with `next export`
        // https://nextjs.org/docs/messages/export-image-api
        images: {
            unoptimized: true,
        },
    },
}

module.exports = nextConfig
