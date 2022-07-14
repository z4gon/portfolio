;(self.__BUILD_MANIFEST = (function (a) {
    return {
        __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
        '/': [
            a,
            'static/css/45e2276d45a1677e.css',
            'static/chunks/pages/index-c2d0a032703fa508.js',
        ],
        '/_error': ['static/chunks/pages/_error-7397496ca01950b1.js'],
        '/project/[id]': [
            a,
            'static/css/47142ea1374a3b45.css',
            'static/chunks/pages/project/[id]-64d17eb88077611b.js',
        ],
        sortedPages: ['/', '/_app', '/_error', '/project/[id]'],
    }
})('static/chunks/664-2814091809a9d409.js')),
    self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()
