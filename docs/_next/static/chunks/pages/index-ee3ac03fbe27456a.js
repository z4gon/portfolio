;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405],
    {
        8312: function (a, b, c) {
            ;(window.__NEXT_P = window.__NEXT_P || []).push([
                '/',
                function () {
                    return c(219)
                },
            ])
        },
        219: function (f, b, a) {
            'use strict'
            a.r(b),
                a.d(b, {
                    __N_SSG: function () {
                        return p
                    },
                    default: function () {
                        return q
                    },
                })
            var g = a(5893),
                h = a(7056),
                i = a(1799),
                j = a(7294),
                c = a(7994),
                k = a.n(c),
                d = a(1664),
                l = a.n(d),
                e = a(9680),
                m = a.n(e),
                n = function (a) {
                    var b = a.id,
                        c = a.imageUrl
                    return (0, g.jsx)(l(), {
                        href: '/project/'.concat(b),
                        children: (0, g.jsx)('a', {
                            className: m().link,
                            children: (0, g.jsx)('div', {
                                className: m().thumbnail,
                                style: {
                                    backgroundImage: 'url('.concat(c, ')'),
                                },
                            }),
                        }),
                    })
                },
                o = function (d) {
                    var a = d.projects,
                        b = (0, j.useState)(0),
                        c = b[0],
                        f = b[1],
                        e = a.length > (c + 1) * 5
                    return (0, g.jsxs)('main', {
                        className: k().container,
                        children: [
                            (0, g.jsx)('div', {
                                className: k().grid,
                                children: a
                                    .slice(0, (c + 1) * 5)
                                    .map(function (a) {
                                        return (0,
                                        g.jsx)(n, (0, i.Z)({}, a), a.id)
                                    }),
                            }),
                            e &&
                                (0, g.jsx)('button', {
                                    className: k().loadMore,
                                    onClick: function () {
                                        return f(function (a) {
                                            return a + 1
                                        })
                                    },
                                    children: 'Load More',
                                }),
                        ],
                    })
                },
                p = !0
            function q(a) {
                var b = a.projects
                return (0, g.jsxs)(g.Fragment, {
                    children: [
                        (0, g.jsx)(h.Z, {}),
                        (0, g.jsx)(o, { projects: b }),
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
        7994: function (a) {
            a.exports = {
                container: 'Grid_container__nbCSN',
                grid: 'Grid_grid____Amf',
                loadMore: 'Grid_loadMore__umHVC',
            }
        },
        9680: function (a) {
            a.exports = {
                link: 'Thumbnail_link__cc_Ja',
                thumbnail: 'Thumbnail_thumbnail__B8pOW',
            }
        },
    },
    function (a) {
        a.O(0, [664, 774, 888, 179], function () {
            var b
            return a((a.s = 8312))
        }),
            (_N_E = a.O())
    },
])
