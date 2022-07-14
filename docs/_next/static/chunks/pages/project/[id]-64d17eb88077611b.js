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
                    var b = a.imageUrl,
                        c = a.title,
                        d = a.subtitle,
                        e = a.text,
                        g = a.links
                    return (0, f.jsxs)('article', {
                        className: h().card,
                        children: [
                            (0, f.jsx)('img', {
                                src: b,
                                alt: c,
                                className: h().image,
                            }),
                            (0, f.jsx)('div', {
                                className: h().image,
                                style: {
                                    backgroundImage: 'url('.concat(b, ')'),
                                },
                            }),
                            (0, f.jsx)('h2', {
                                className: h().title,
                                children: c,
                            }),
                            (0, f.jsx)('span', {
                                className: h().subtitle,
                                children: d,
                            }),
                            (0, f.jsx)('p', {
                                className: h().text,
                                children: e,
                            }),
                            g.map(function (a, b) {
                                return (0,
                                f.jsx)(i, { href: a.href, text: a.text }, b)
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
            var f = a(5893),
                c = a(1664),
                g = a.n(c),
                d = a(4666),
                h = a.n(d),
                i = function (a) {
                    var b = a.href,
                        c = a.iconUrl
                    return (0, f.jsx)('a', {
                        href: b,
                        rel: 'noopener noreferrer',
                        target: '_blank',
                        children: (0, f.jsx)('img', {
                            className: h().iconImage,
                            src: c,
                            alt: b,
                            height: 30,
                            width: 30,
                        }),
                    })
                }
            b.Z = function () {
                return (0, f.jsxs)('nav', {
                    className: h().navbar,
                    children: [
                        (0, f.jsx)(g(), {
                            href: '/',
                            children: (0, f.jsx)('a', {
                                className: h().titleLink,
                                children: (0, f.jsx)('h1', {
                                    className: h().title,
                                    children: 'z4gon - Portfolio',
                                }),
                            }),
                        }),
                        (0, f.jsxs)('ul', {
                            className: h().icons,
                            children: [
                                (0, f.jsx)('li', {
                                    className: h().icon,
                                    children: (0, f.jsx)(i, {
                                        href: 'https://linkedin.com/in/gonzacn',
                                        iconUrl: 'images/In-Blue-72.png',
                                    }),
                                }),
                                (0, f.jsx)('li', {
                                    children: (0, f.jsx)(i, {
                                        href: 'https://github.com/z4gon',
                                        iconUrl: 'images/GitHub-Mark-64px.png',
                                    }),
                                }),
                            ],
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
                card: 'ProjectDetails_card__GeJ7z',
                image: 'ProjectDetails_image__R3HCg',
                title: 'ProjectDetails_title__daU30',
                subtitle: 'ProjectDetails_subtitle__E83A2',
                text: 'ProjectDetails_text__eGT3s',
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
