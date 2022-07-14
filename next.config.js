/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,

    // exportPathMap allows you to specify a mapping of request paths to page destinations, to be used during export
    // https://nextjs.org/docs/api-reference/next.config.js/exportPathMap
    exportPathMap: async function () {
        return {
            '/': { page: '/' },
            '/404': { page: '/404' },
        }
    },
}

module.exports = nextConfig
