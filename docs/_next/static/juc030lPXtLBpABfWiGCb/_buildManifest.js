;(self.__BUILD_MANIFEST = (function (a) {
    return {
        __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
        '/': [
            a,
            'static/css/45e2276d45a1677e.css',
            'static/chunks/pages/index-52f4ce4b481e0ae4.js',
        ],
        '/_error': ['static/chunks/pages/_error-7397496ca01950b1.js'],
        '/project/[id]': [
            a,
            'static/css/75f7db39915f6cce.css',
            'static/chunks/pages/project/[id]-d10756a1bf750d56.js',
        ],
        sortedPages: ['/', '/_app', '/_error', '/project/[id]'],
    }
})('static/chunks/664-2814091809a9d409.js')),
    self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()
