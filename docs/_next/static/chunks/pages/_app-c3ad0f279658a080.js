;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888],
    {
        6840: function (a, b, c) {
            ;(window.__NEXT_P = window.__NEXT_P || []).push([
                '/_app',
                function () {
                    return c(7571)
                },
            ])
        },
        7571: function (c, b, a) {
            'use strict'
            function d(a, b, c) {
                return (
                    b in a
                        ? Object.defineProperty(a, b, {
                              value: c,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (a[b] = c),
                    a
                )
            }
            a.r(b),
                a.d(b, {
                    default: function () {
                        return f
                    },
                })
            var e = a(5893)
            a(4393)
            var f = function (a) {
                var b = a.Component,
                    c = a.pageProps
                return (0, e.jsx)(
                    b,
                    (function (e) {
                        for (var a = 1; a < arguments.length; a++) {
                            var c = null != arguments[a] ? arguments[a] : {},
                                b = Object.keys(c)
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (b = b.concat(
                                    Object.getOwnPropertySymbols(c).filter(
                                        function (a) {
                                            return Object.getOwnPropertyDescriptor(
                                                c,
                                                a
                                            ).enumerable
                                        }
                                    )
                                )),
                                b.forEach(function (a) {
                                    d(e, a, c[a])
                                })
                        }
                        return e
                    })({}, c)
                )
            }
        },
        4393: function () {},
    },
    function (a) {
        var b = function (b) {
            return a((a.s = b))
        }
        a.O(0, [774, 179], function () {
            return b(6840), b(387)
        }),
            (_N_E = a.O())
    },
])
