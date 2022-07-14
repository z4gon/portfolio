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
                        c = (0, j.useState)(0),
                        b = c[0],
                        f = c[1],
                        e = a.length > (b + 1) * 5
                    return (
                        console.log('projects.length: '.concat(a.length)),
                        console.log('page: '.concat(b)),
                        (0, g.jsxs)('main', {
                            className: k().container,
                            children: [
                                (0, g.jsx)('div', {
                                    className: k().grid,
                                    children: a
                                        .slice(0, (b + 1) * 5)
                                        .map(function (a) {
                                            return (0,
                                            g.jsx)(n, (0, i.Z)({}, a), a.id)
                                        }),
                                }),
                                e &&
                                    (0, g.jsx)('button', {
                                        className: k().loadMore,
                                        onClick: function () {
                                            console.log(
                                                'loadNextPage page: '.concat(
                                                    b + 1
                                                )
                                            ),
                                                f(function (a) {
                                                    return a + 1
                                                })
                                        },
                                        children: 'Load More',
                                    }),
                            ],
                        })
                    )
                },
                p = !0
            function q(b) {
                var a = b.projects
                return (0, g.jsxs)(g.Fragment, {
                    children: [
                        (0, g.jsx)(h.Z, {}),
                        (0, g.jsx)(o, { projects: a }),
                        'projects length: '.concat(a.length),
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
