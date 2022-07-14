;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [142],
    {
        1244: function (a, b, c) {
            ;(window.__NEXT_P = window.__NEXT_P || []).push([
                '/project/[id]',
                function () {
                    return c(40)
                },
            ])
        },
        40: function (d, b, a) {
            'use strict'
            a.r(b),
                a.d(b, {
                    __N_SSG: function () {
                        return k
                    },
                    default: function () {
                        return l
                    },
                })
            var e = a(1799),
                f = a(5893),
                g = a(7056),
                c = a(9187),
                h = a.n(c),
                i = function (a) {
                    var b = a.href,
                        c = a.text
                    return (0, f.jsx)('a', {
                        href: b,
                        rel: 'noopener noreferrer',
                        target: '_blank',
                        children: c,
                    })
                },
                j = function (a) {
                    var g = a.imagesUrls,
                        b = a.title,
                        j = a.subtitle,
                        k = a.text,
                        l = a.links,
                        c = a.appleAppStoreUrl,
                        d = a.googlePlayStoreUrl,
                        e = a.youtubeVideoId
                    return (0, f.jsxs)('main', {
                        className: h().projectDetails,
                        children: [
                            (0, f.jsx)('h2', {
                                className: h().title,
                                children: b,
                            }),
                            (0, f.jsx)('span', {
                                className: h().subtitle,
                                children: j,
                            }),
                            (0, f.jsx)('p', {
                                className: h().text,
                                children: k,
                            }),
                            l.map(function (a, b) {
                                return (0,
                                f.jsx)(i, { href: a.href, text: a.text }, b)
                            }),
                            (0, f.jsxs)('div', {
                                className: h().storeLinks,
                                children: [
                                    c &&
                                        (0, f.jsx)('a', {
                                            href: c,
                                            target: '_blank',
                                            rel: 'noopener noreferrer',
                                            children: (0, f.jsx)('img', {
                                                src: '/images/badge-app-store.svg',
                                                alt: 'App Store Link',
                                                className:
                                                    h().appleAppStoreBadge,
                                            }),
                                        }),
                                    d &&
                                        (0, f.jsx)('a', {
                                            href: d,
                                            target: '_blank',
                                            rel: 'noopener noreferrer',
                                            children: (0, f.jsx)('img', {
                                                src: '/images/badge-google-play.png',
                                                alt: 'Play Store Link',
                                                className:
                                                    h().googlePlayStoreBadge,
                                            }),
                                        }),
                                ],
                            }),
                            e &&
                                (0, f.jsxs)('div', {
                                    className: h().video,
                                    children: [
                                        (0, f.jsx)('h3', { children: 'Video' }),
                                        (0, f.jsx)('br', {}),
                                        (0, f.jsx)('iframe', {
                                            src: 'https://www.youtube.com/embed/'.concat(
                                                e
                                            ),
                                            title: b,
                                            frameBorder: '0',
                                            allowFullScreen: !0,
                                        }),
                                    ],
                                }),
                            (0, f.jsxs)('div', {
                                className: h().images,
                                children: [
                                    (0, f.jsx)('h3', { children: 'Images' }),
                                    (0, f.jsx)('br', {}),
                                    g.map(function (a) {
                                        return (0,
                                        f.jsx)('img', { src: a, alt: b, className: h().image }, a)
                                    }),
                                ],
                            }),
                        ],
                    })
                },
                k = !0
            function l(b) {
                var a = b.project
                return (0, f.jsxs)(f.Fragment, {
                    children: [
                        (0, f.jsx)(g.Z, {}),
                        a && (0, f.jsx)(j, (0, e.Z)({}, a)),
                    ],
                })
            }
        },
        7056: function (e, b, a) {
            'use strict'
            var f = a(1799),
                g = a(5893),
                c = a(1664),
                h = a.n(c),
                d = a(4666),
                i = a.n(d),
                j = function (a) {
                    var b = a.href,
                        c = a.iconUrl
                    return (0, g.jsx)('a', {
                        href: b,
                        rel: 'noopener noreferrer',
                        target: '_blank',
                        children: (0, g.jsx)('img', {
                            className: i().iconImage,
                            src: c,
                            alt: b,
                            height: 30,
                            width: 30,
                        }),
                    })
                },
                k = [
                    {
                        href: 'https://linkedin.com/in/gonzacn',
                        iconUrl: '/images/In-Blue-72.png',
                    },
                    {
                        href: 'https://github.com/z4gon',
                        iconUrl: '/images/GitHub-Mark-64px.png',
                    },
                ]
            b.Z = function () {
                return (0, g.jsxs)('nav', {
                    className: i().navbar,
                    children: [
                        (0, g.jsx)(h(), {
                            href: '/',
                            children: (0, g.jsx)('a', {
                                className: i().titleLink,
                                children: (0, g.jsx)('h1', {
                                    className: i().title,
                                    children: 'z4gon - Portfolio',
                                }),
                            }),
                        }),
                        (0, g.jsx)('ul', {
                            className: i().icons,
                            children: k.map(function (a) {
                                return (0,
                                g.jsx)('li', { className: i().icon, children: (0, g.jsx)(j, (0, f.Z)({}, a)) }, a.href)
                            }),
                        }),
                    ],
                })
            }
        },
        4666: function (a) {
            a.exports = {
                navbar: 'NavBar_navbar__W8B89',
                titleLink: 'NavBar_titleLink__OtPh0',
                title: 'NavBar_title__R8ar3',
                icons: 'NavBar_icons__Q_6kO',
                icon: 'NavBar_icon__MjYq8',
                iconImage: 'NavBar_iconImage__cajrI',
            }
        },
        9187: function (a) {
            a.exports = {
                projectDetails: 'ProjectDetails_projectDetails__0N0Wv',
                title: 'ProjectDetails_title__daU30',
                subtitle: 'ProjectDetails_subtitle__E83A2',
                text: 'ProjectDetails_text__eGT3s',
                storeLinks: 'ProjectDetails_storeLinks__yLiH6',
                appleAppStoreBadge: 'ProjectDetails_appleAppStoreBadge__TcQlo',
                googlePlayStoreBadge:
                    'ProjectDetails_googlePlayStoreBadge__W6hsS',
                video: 'ProjectDetails_video__nMyrD',
                images: 'ProjectDetails_images__Sy4sV',
                image: 'ProjectDetails_image__R3HCg',
            }
        },
    },
    function (a) {
        a.O(0, [664, 774, 888, 179], function () {
            var b
            return a((a.s = 1244))
        }),
            (_N_E = a.O())
    },
])
