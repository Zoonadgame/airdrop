var __defProp = Object.defineProperty,
    __defProps = Object.defineProperties,
    __getOwnPropDescs = Object.getOwnPropertyDescriptors,
    __getOwnPropSymbols = Object.getOwnPropertySymbols,
    __hasOwnProp = Object.prototype.hasOwnProperty,
    __propIsEnum = Object.prototype.propertyIsEnumerable,
    __defNormalProp = (e, t, n) => t in e ? __defProp(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    __spreadValues = (e, t) => {
        for (var n in t || (t = {})) __hasOwnProp.call(t, n) && __defNormalProp(e, n, t[n]);
        if (__getOwnPropSymbols)
            for (var n of __getOwnPropSymbols(t)) __propIsEnum.call(t, n) && __defNormalProp(e, n, t[n]);
        return e
    },
    __spreadProps = (e, t) => __defProps(e, __getOwnPropDescs(t)),
    __publicField = (e, t, n) => (__defNormalProp(e, "symbol" != typeof t ? t + "" : t, n), n),
    __async = (e, t, n) => new Promise(((r, o) => {
        var i = e => {
                try {
                    a(n.next(e))
                } catch (t) {
                    o(t)
                }
            },
            s = e => {
                try {
                    a(n.throw(e))
                } catch (t) {
                    o(t)
                }
            },
            a = e => e.done ? r(e.value) : Promise.resolve(e.value).then(i, s);
        a((n = n.apply(e, t)).next())
    }));
! function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).TON_CONNECT_UI = {})
}(this, (function (e) {
    var t, n, r, o, i, s, a, l, c = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function u(e) {
        var t = e.default;
        if ("function" == typeof t) {
            var n = function () {
                return t.apply(this, arguments)
            };
            n.prototype = t.prototype
        } else n = {};
        return Object.defineProperty(n, "__esModule", {
            value: !0
        }), Object.keys(e).forEach((function (t) {
            var r = Object.getOwnPropertyDescriptor(e, t);
            Object.defineProperty(n, t, r.get ? r : {
                enumerable: !0,
                get: function () {
                    return e[t]
                }
            })
        })), n
    }
    var d, h, f, g = {
        exports: {}
    };
    h = c, f = function () {
        var e = {};

        function t(e) {
            if (!/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(e)) throw new TypeError("invalid encoding")
        }
        return e.decodeUTF8 = function (e) {
            if ("string" != typeof e) throw new TypeError("expected string");
            var t, n = unescape(encodeURIComponent(e)),
                r = new Uint8Array(n.length);
            for (t = 0; t < n.length; t++) r[t] = n.charCodeAt(t);
            return r
        }, e.encodeUTF8 = function (e) {
            var t, n = [];
            for (t = 0; t < e.length; t++) n.push(String.fromCharCode(e[t]));
            return decodeURIComponent(escape(n.join("")))
        }, "undefined" == typeof atob ? void 0 !== Buffer.from ? (e.encodeBase64 = function (e) {
            return Buffer.from(e).toString("base64")
        }, e.decodeBase64 = function (e) {
            return t(e), new Uint8Array(Array.prototype.slice.call(Buffer.from(e, "base64"), 0))
        }) : (e.encodeBase64 = function (e) {
            return new Buffer(e).toString("base64")
        }, e.decodeBase64 = function (e) {
            return t(e), new Uint8Array(Array.prototype.slice.call(new Buffer(e, "base64"), 0))
        }) : (e.encodeBase64 = function (e) {
            var t, n = [],
                r = e.length;
            for (t = 0; t < r; t++) n.push(String.fromCharCode(e[t]));
            return btoa(n.join(""))
        }, e.decodeBase64 = function (e) {
            t(e);
            var n, r = atob(e),
                o = new Uint8Array(r.length);
            for (n = 0; n < r.length; n++) o[n] = r.charCodeAt(n);
            return o
        }), e
    }, (d = g).exports ? d.exports = f() : (h.nacl || (h.nacl = {}), h.nacl.util = f());
    const p = g.exports;

    function w(e) {
        throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
    }
    var m = {
        exports: {}
    };
    const v = u(Object.freeze(Object.defineProperty({
        __proto__: null,
        default: {}
    }, Symbol.toStringTag, {
        value: "Module"
    })));
    ! function (e) {
        ! function (e) {
            var t = function (e) {
                    var t, n = new Float64Array(16);
                    if (e)
                        for (t = 0; t < e.length; t++) n[t] = e[t];
                    return n
                },
                n = function () {
                    throw new Error("no PRNG")
                },
                r = new Uint8Array(16),
                o = new Uint8Array(32);
            o[0] = 9;
            var i = t(),
                s = t([1]),
                a = t([56129, 1]),
                l = t([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
                c = t([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
                u = t([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                d = t([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
                h = t([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

            function f(e, t, n, r) {
                e[t] = n >> 24 & 255, e[t + 1] = n >> 16 & 255, e[t + 2] = n >> 8 & 255, e[t + 3] = 255 & n, e[t + 4] = r >> 24 & 255, e[t + 5] = r >> 16 & 255, e[t + 6] = r >> 8 & 255, e[t + 7] = 255 & r
            }

            function g(e, t, n, r, o) {
                var i, s = 0;
                for (i = 0; i < o; i++) s |= e[t + i] ^ n[r + i];
                return (1 & s - 1 >>> 8) - 1
            }

            function p(e, t, n, r) {
                return g(e, t, n, r, 16)
            }

            function m(e, t, n, r) {
                return g(e, t, n, r, 32)
            }

            function y(e, t, n, r) {
                ! function (e, t, n, r) {
                    for (var o, i = 255 & r[0] | (255 & r[1]) << 8 | (255 & r[2]) << 16 | (255 & r[3]) << 24, s = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24, a = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24, l = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24, c = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24, u = 255 & r[4] | (255 & r[5]) << 8 | (255 & r[6]) << 16 | (255 & r[7]) << 24, d = 255 & t[0] | (255 & t[1]) << 8 | (255 & t[2]) << 16 | (255 & t[3]) << 24, h = 255 & t[4] | (255 & t[5]) << 8 | (255 & t[6]) << 16 | (255 & t[7]) << 24, f = 255 & t[8] | (255 & t[9]) << 8 | (255 & t[10]) << 16 | (255 & t[11]) << 24, g = 255 & t[12] | (255 & t[13]) << 8 | (255 & t[14]) << 16 | (255 & t[15]) << 24, p = 255 & r[8] | (255 & r[9]) << 8 | (255 & r[10]) << 16 | (255 & r[11]) << 24, w = 255 & n[16] | (255 & n[17]) << 8 | (255 & n[18]) << 16 | (255 & n[19]) << 24, m = 255 & n[20] | (255 & n[21]) << 8 | (255 & n[22]) << 16 | (255 & n[23]) << 24, v = 255 & n[24] | (255 & n[25]) << 8 | (255 & n[26]) << 16 | (255 & n[27]) << 24, y = 255 & n[28] | (255 & n[29]) << 8 | (255 & n[30]) << 16 | (255 & n[31]) << 24, b = 255 & r[12] | (255 & r[13]) << 8 | (255 & r[14]) << 16 | (255 & r[15]) << 24, C = i, x = s, _ = a, k = l, S = c, E = u, R = d, T = h, L = f, A = g, M = p, O = w, N = m, P = v, $ = y, I = b, U = 0; U < 20; U += 2) C ^= (o = (N ^= (o = (L ^= (o = (S ^= (o = C + N | 0) << 7 | o >>> 25) + C | 0) << 9 | o >>> 23) + S | 0) << 13 | o >>> 19) + L | 0) << 18 | o >>> 14, E ^= (o = (x ^= (o = (P ^= (o = (A ^= (o = E + x | 0) << 7 | o >>> 25) + E | 0) << 9 | o >>> 23) + A | 0) << 13 | o >>> 19) + P | 0) << 18 | o >>> 14, M ^= (o = (R ^= (o = (_ ^= (o = ($ ^= (o = M + R | 0) << 7 | o >>> 25) + M | 0) << 9 | o >>> 23) + $ | 0) << 13 | o >>> 19) + _ | 0) << 18 | o >>> 14, I ^= (o = (O ^= (o = (T ^= (o = (k ^= (o = I + O | 0) << 7 | o >>> 25) + I | 0) << 9 | o >>> 23) + k | 0) << 13 | o >>> 19) + T | 0) << 18 | o >>> 14, C ^= (o = (k ^= (o = (_ ^= (o = (x ^= (o = C + k | 0) << 7 | o >>> 25) + C | 0) << 9 | o >>> 23) + x | 0) << 13 | o >>> 19) + _ | 0) << 18 | o >>> 14, E ^= (o = (S ^= (o = (T ^= (o = (R ^= (o = E + S | 0) << 7 | o >>> 25) + E | 0) << 9 | o >>> 23) + R | 0) << 13 | o >>> 19) + T | 0) << 18 | o >>> 14, M ^= (o = (A ^= (o = (L ^= (o = (O ^= (o = M + A | 0) << 7 | o >>> 25) + M | 0) << 9 | o >>> 23) + O | 0) << 13 | o >>> 19) + L | 0) << 18 | o >>> 14, I ^= (o = ($ ^= (o = (P ^= (o = (N ^= (o = I + $ | 0) << 7 | o >>> 25) + I | 0) << 9 | o >>> 23) + N | 0) << 13 | o >>> 19) + P | 0) << 18 | o >>> 14;
                    C = C + i | 0, x = x + s | 0, _ = _ + a | 0, k = k + l | 0, S = S + c | 0, E = E + u | 0, R = R + d | 0, T = T + h | 0, L = L + f | 0, A = A + g | 0, M = M + p | 0, O = O + w | 0, N = N + m | 0, P = P + v | 0, $ = $ + y | 0, I = I + b | 0, e[0] = C >>> 0 & 255, e[1] = C >>> 8 & 255, e[2] = C >>> 16 & 255, e[3] = C >>> 24 & 255, e[4] = x >>> 0 & 255, e[5] = x >>> 8 & 255, e[6] = x >>> 16 & 255, e[7] = x >>> 24 & 255, e[8] = _ >>> 0 & 255, e[9] = _ >>> 8 & 255, e[10] = _ >>> 16 & 255, e[11] = _ >>> 24 & 255, e[12] = k >>> 0 & 255, e[13] = k >>> 8 & 255, e[14] = k >>> 16 & 255, e[15] = k >>> 24 & 255, e[16] = S >>> 0 & 255, e[17] = S >>> 8 & 255, e[18] = S >>> 16 & 255, e[19] = S >>> 24 & 255, e[20] = E >>> 0 & 255, e[21] = E >>> 8 & 255, e[22] = E >>> 16 & 255, e[23] = E >>> 24 & 255, e[24] = R >>> 0 & 255, e[25] = R >>> 8 & 255, e[26] = R >>> 16 & 255, e[27] = R >>> 24 & 255, e[28] = T >>> 0 & 255, e[29] = T >>> 8 & 255, e[30] = T >>> 16 & 255, e[31] = T >>> 24 & 255, e[32] = L >>> 0 & 255, e[33] = L >>> 8 & 255, e[34] = L >>> 16 & 255, e[35] = L >>> 24 & 255, e[36] = A >>> 0 & 255, e[37] = A >>> 8 & 255, e[38] = A >>> 16 & 255, e[39] = A >>> 24 & 255, e[40] = M >>> 0 & 255, e[41] = M >>> 8 & 255, e[42] = M >>> 16 & 255, e[43] = M >>> 24 & 255, e[44] = O >>> 0 & 255, e[45] = O >>> 8 & 255, e[46] = O >>> 16 & 255, e[47] = O >>> 24 & 255, e[48] = N >>> 0 & 255, e[49] = N >>> 8 & 255, e[50] = N >>> 16 & 255, e[51] = N >>> 24 & 255, e[52] = P >>> 0 & 255, e[53] = P >>> 8 & 255, e[54] = P >>> 16 & 255, e[55] = P >>> 24 & 255, e[56] = $ >>> 0 & 255, e[57] = $ >>> 8 & 255, e[58] = $ >>> 16 & 255, e[59] = $ >>> 24 & 255, e[60] = I >>> 0 & 255, e[61] = I >>> 8 & 255, e[62] = I >>> 16 & 255, e[63] = I >>> 24 & 255
                }(e, t, n, r)
            }

            function b(e, t, n, r) {
                ! function (e, t, n, r) {
                    for (var o, i = 255 & r[0] | (255 & r[1]) << 8 | (255 & r[2]) << 16 | (255 & r[3]) << 24, s = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24, a = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24, l = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24, c = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24, u = 255 & r[4] | (255 & r[5]) << 8 | (255 & r[6]) << 16 | (255 & r[7]) << 24, d = 255 & t[0] | (255 & t[1]) << 8 | (255 & t[2]) << 16 | (255 & t[3]) << 24, h = 255 & t[4] | (255 & t[5]) << 8 | (255 & t[6]) << 16 | (255 & t[7]) << 24, f = 255 & t[8] | (255 & t[9]) << 8 | (255 & t[10]) << 16 | (255 & t[11]) << 24, g = 255 & t[12] | (255 & t[13]) << 8 | (255 & t[14]) << 16 | (255 & t[15]) << 24, p = 255 & r[8] | (255 & r[9]) << 8 | (255 & r[10]) << 16 | (255 & r[11]) << 24, w = 255 & n[16] | (255 & n[17]) << 8 | (255 & n[18]) << 16 | (255 & n[19]) << 24, m = 255 & n[20] | (255 & n[21]) << 8 | (255 & n[22]) << 16 | (255 & n[23]) << 24, v = 255 & n[24] | (255 & n[25]) << 8 | (255 & n[26]) << 16 | (255 & n[27]) << 24, y = 255 & n[28] | (255 & n[29]) << 8 | (255 & n[30]) << 16 | (255 & n[31]) << 24, b = 255 & r[12] | (255 & r[13]) << 8 | (255 & r[14]) << 16 | (255 & r[15]) << 24, C = 0; C < 20; C += 2) i ^= (o = (m ^= (o = (f ^= (o = (c ^= (o = i + m | 0) << 7 | o >>> 25) + i | 0) << 9 | o >>> 23) + c | 0) << 13 | o >>> 19) + f | 0) << 18 | o >>> 14, u ^= (o = (s ^= (o = (v ^= (o = (g ^= (o = u + s | 0) << 7 | o >>> 25) + u | 0) << 9 | o >>> 23) + g | 0) << 13 | o >>> 19) + v | 0) << 18 | o >>> 14, p ^= (o = (d ^= (o = (a ^= (o = (y ^= (o = p + d | 0) << 7 | o >>> 25) + p | 0) << 9 | o >>> 23) + y | 0) << 13 | o >>> 19) + a | 0) << 18 | o >>> 14, b ^= (o = (w ^= (o = (h ^= (o = (l ^= (o = b + w | 0) << 7 | o >>> 25) + b | 0) << 9 | o >>> 23) + l | 0) << 13 | o >>> 19) + h | 0) << 18 | o >>> 14, i ^= (o = (l ^= (o = (a ^= (o = (s ^= (o = i + l | 0) << 7 | o >>> 25) + i | 0) << 9 | o >>> 23) + s | 0) << 13 | o >>> 19) + a | 0) << 18 | o >>> 14, u ^= (o = (c ^= (o = (h ^= (o = (d ^= (o = u + c | 0) << 7 | o >>> 25) + u | 0) << 9 | o >>> 23) + d | 0) << 13 | o >>> 19) + h | 0) << 18 | o >>> 14, p ^= (o = (g ^= (o = (f ^= (o = (w ^= (o = p + g | 0) << 7 | o >>> 25) + p | 0) << 9 | o >>> 23) + w | 0) << 13 | o >>> 19) + f | 0) << 18 | o >>> 14, b ^= (o = (y ^= (o = (v ^= (o = (m ^= (o = b + y | 0) << 7 | o >>> 25) + b | 0) << 9 | o >>> 23) + m | 0) << 13 | o >>> 19) + v | 0) << 18 | o >>> 14;
                    e[0] = i >>> 0 & 255, e[1] = i >>> 8 & 255, e[2] = i >>> 16 & 255, e[3] = i >>> 24 & 255, e[4] = u >>> 0 & 255, e[5] = u >>> 8 & 255, e[6] = u >>> 16 & 255, e[7] = u >>> 24 & 255, e[8] = p >>> 0 & 255, e[9] = p >>> 8 & 255, e[10] = p >>> 16 & 255, e[11] = p >>> 24 & 255, e[12] = b >>> 0 & 255, e[13] = b >>> 8 & 255, e[14] = b >>> 16 & 255, e[15] = b >>> 24 & 255, e[16] = d >>> 0 & 255, e[17] = d >>> 8 & 255, e[18] = d >>> 16 & 255, e[19] = d >>> 24 & 255, e[20] = h >>> 0 & 255, e[21] = h >>> 8 & 255, e[22] = h >>> 16 & 255, e[23] = h >>> 24 & 255, e[24] = f >>> 0 & 255, e[25] = f >>> 8 & 255, e[26] = f >>> 16 & 255, e[27] = f >>> 24 & 255, e[28] = g >>> 0 & 255, e[29] = g >>> 8 & 255, e[30] = g >>> 16 & 255, e[31] = g >>> 24 & 255
                }(e, t, n, r)
            }
            var C = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);

            function x(e, t, n, r, o, i, s) {
                var a, l, c = new Uint8Array(16),
                    u = new Uint8Array(64);
                for (l = 0; l < 16; l++) c[l] = 0;
                for (l = 0; l < 8; l++) c[l] = i[l];
                for (; o >= 64;) {
                    for (y(u, c, s, C), l = 0; l < 64; l++) e[t + l] = n[r + l] ^ u[l];
                    for (a = 1, l = 8; l < 16; l++) a = a + (255 & c[l]) | 0, c[l] = 255 & a, a >>>= 8;
                    o -= 64, t += 64, r += 64
                }
                if (o > 0)
                    for (y(u, c, s, C), l = 0; l < o; l++) e[t + l] = n[r + l] ^ u[l];
                return 0
            }

            function _(e, t, n, r, o) {
                var i, s, a = new Uint8Array(16),
                    l = new Uint8Array(64);
                for (s = 0; s < 16; s++) a[s] = 0;
                for (s = 0; s < 8; s++) a[s] = r[s];
                for (; n >= 64;) {
                    for (y(l, a, o, C), s = 0; s < 64; s++) e[t + s] = l[s];
                    for (i = 1, s = 8; s < 16; s++) i = i + (255 & a[s]) | 0, a[s] = 255 & i, i >>>= 8;
                    n -= 64, t += 64
                }
                if (n > 0)
                    for (y(l, a, o, C), s = 0; s < n; s++) e[t + s] = l[s];
                return 0
            }

            function k(e, t, n, r, o) {
                var i = new Uint8Array(32);
                b(i, r, o, C);
                for (var s = new Uint8Array(8), a = 0; a < 8; a++) s[a] = r[a + 16];
                return _(e, t, n, s, i)
            }

            function S(e, t, n, r, o, i, s) {
                var a = new Uint8Array(32);
                b(a, i, s, C);
                for (var l = new Uint8Array(8), c = 0; c < 8; c++) l[c] = i[c + 16];
                return x(e, t, n, r, o, l, a)
            }
            var E = function (e) {
                var t, n, r, o, i, s, a, l;
                this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.leftover = 0, this.fin = 0, t = 255 & e[0] | (255 & e[1]) << 8, this.r[0] = 8191 & t, n = 255 & e[2] | (255 & e[3]) << 8, this.r[1] = 8191 & (t >>> 13 | n << 3), r = 255 & e[4] | (255 & e[5]) << 8, this.r[2] = 7939 & (n >>> 10 | r << 6), o = 255 & e[6] | (255 & e[7]) << 8, this.r[3] = 8191 & (r >>> 7 | o << 9), i = 255 & e[8] | (255 & e[9]) << 8, this.r[4] = 255 & (o >>> 4 | i << 12), this.r[5] = i >>> 1 & 8190, s = 255 & e[10] | (255 & e[11]) << 8, this.r[6] = 8191 & (i >>> 14 | s << 2), a = 255 & e[12] | (255 & e[13]) << 8, this.r[7] = 8065 & (s >>> 11 | a << 5), l = 255 & e[14] | (255 & e[15]) << 8, this.r[8] = 8191 & (a >>> 8 | l << 8), this.r[9] = l >>> 5 & 127, this.pad[0] = 255 & e[16] | (255 & e[17]) << 8, this.pad[1] = 255 & e[18] | (255 & e[19]) << 8, this.pad[2] = 255 & e[20] | (255 & e[21]) << 8, this.pad[3] = 255 & e[22] | (255 & e[23]) << 8, this.pad[4] = 255 & e[24] | (255 & e[25]) << 8, this.pad[5] = 255 & e[26] | (255 & e[27]) << 8, this.pad[6] = 255 & e[28] | (255 & e[29]) << 8, this.pad[7] = 255 & e[30] | (255 & e[31]) << 8
            };

            function R(e, t, n, r, o, i) {
                var s = new E(i);
                return s.update(n, r, o), s.finish(e, t), 0
            }

            function T(e, t, n, r, o, i) {
                var s = new Uint8Array(16);
                return R(s, 0, n, r, o, i), p(e, t, s, 0)
            }

            function L(e, t, n, r, o) {
                var i;
                if (n < 32) return -1;
                for (S(e, 0, t, 0, n, r, o), R(e, 16, e, 32, n - 32, e), i = 0; i < 16; i++) e[i] = 0;
                return 0
            }

            function A(e, t, n, r, o) {
                var i, s = new Uint8Array(32);
                if (n < 32) return -1;
                if (k(s, 0, 32, r, o), 0 !== T(t, 16, t, 32, n - 32, s)) return -1;
                for (S(e, 0, t, 0, n, r, o), i = 0; i < 32; i++) e[i] = 0;
                return 0
            }

            function M(e, t) {
                var n;
                for (n = 0; n < 16; n++) e[n] = 0 | t[n]
            }

            function O(e) {
                var t, n, r = 1;
                for (t = 0; t < 16; t++) n = e[t] + r + 65535, r = Math.floor(n / 65536), e[t] = n - 65536 * r;
                e[0] += r - 1 + 37 * (r - 1)
            }

            function N(e, t, n) {
                for (var r, o = ~(n - 1), i = 0; i < 16; i++) r = o & (e[i] ^ t[i]), e[i] ^= r, t[i] ^= r
            }

            function P(e, n) {
                var r, o, i, s = t(),
                    a = t();
                for (r = 0; r < 16; r++) a[r] = n[r];
                for (O(a), O(a), O(a), o = 0; o < 2; o++) {
                    for (s[0] = a[0] - 65517, r = 1; r < 15; r++) s[r] = a[r] - 65535 - (s[r - 1] >> 16 & 1), s[r - 1] &= 65535;
                    s[15] = a[15] - 32767 - (s[14] >> 16 & 1), i = s[15] >> 16 & 1, s[14] &= 65535, N(a, s, 1 - i)
                }
                for (r = 0; r < 16; r++) e[2 * r] = 255 & a[r], e[2 * r + 1] = a[r] >> 8
            }

            function $(e, t) {
                var n = new Uint8Array(32),
                    r = new Uint8Array(32);
                return P(n, e), P(r, t), m(n, 0, r, 0)
            }

            function I(e) {
                var t = new Uint8Array(32);
                return P(t, e), 1 & t[0]
            }

            function U(e, t) {
                var n;
                for (n = 0; n < 16; n++) e[n] = t[2 * n] + (t[2 * n + 1] << 8);
                e[15] &= 32767
            }

            function W(e, t, n) {
                for (var r = 0; r < 16; r++) e[r] = t[r] + n[r]
            }

            function j(e, t, n) {
                for (var r = 0; r < 16; r++) e[r] = t[r] - n[r]
            }

            function B(e, t, n) {
                var r, o, i = 0,
                    s = 0,
                    a = 0,
                    l = 0,
                    c = 0,
                    u = 0,
                    d = 0,
                    h = 0,
                    f = 0,
                    g = 0,
                    p = 0,
                    w = 0,
                    m = 0,
                    v = 0,
                    y = 0,
                    b = 0,
                    C = 0,
                    x = 0,
                    _ = 0,
                    k = 0,
                    S = 0,
                    E = 0,
                    R = 0,
                    T = 0,
                    L = 0,
                    A = 0,
                    M = 0,
                    O = 0,
                    N = 0,
                    P = 0,
                    $ = 0,
                    I = n[0],
                    U = n[1],
                    W = n[2],
                    j = n[3],
                    B = n[4],
                    D = n[5],
                    H = n[6],
                    V = n[7],
                    K = n[8],
                    F = n[9],
                    q = n[10],
                    z = n[11],
                    Z = n[12],
                    G = n[13],
                    Y = n[14],
                    Q = n[15];
                i += (r = t[0]) * I, s += r * U, a += r * W, l += r * j, c += r * B, u += r * D, d += r * H, h += r * V, f += r * K, g += r * F, p += r * q, w += r * z, m += r * Z, v += r * G, y += r * Y, b += r * Q, s += (r = t[1]) * I, a += r * U, l += r * W, c += r * j, u += r * B, d += r * D, h += r * H, f += r * V, g += r * K, p += r * F, w += r * q, m += r * z, v += r * Z, y += r * G, b += r * Y, C += r * Q, a += (r = t[2]) * I, l += r * U, c += r * W, u += r * j, d += r * B, h += r * D, f += r * H, g += r * V, p += r * K, w += r * F, m += r * q, v += r * z, y += r * Z, b += r * G, C += r * Y, x += r * Q, l += (r = t[3]) * I, c += r * U, u += r * W, d += r * j, h += r * B, f += r * D, g += r * H, p += r * V, w += r * K, m += r * F, v += r * q, y += r * z, b += r * Z, C += r * G, x += r * Y, _ += r * Q, c += (r = t[4]) * I, u += r * U, d += r * W, h += r * j, f += r * B, g += r * D, p += r * H, w += r * V, m += r * K, v += r * F, y += r * q, b += r * z, C += r * Z, x += r * G, _ += r * Y, k += r * Q, u += (r = t[5]) * I, d += r * U, h += r * W, f += r * j, g += r * B, p += r * D, w += r * H, m += r * V, v += r * K, y += r * F, b += r * q, C += r * z, x += r * Z, _ += r * G, k += r * Y, S += r * Q, d += (r = t[6]) * I, h += r * U, f += r * W, g += r * j, p += r * B, w += r * D, m += r * H, v += r * V, y += r * K, b += r * F, C += r * q, x += r * z, _ += r * Z, k += r * G, S += r * Y, E += r * Q, h += (r = t[7]) * I, f += r * U, g += r * W, p += r * j, w += r * B, m += r * D, v += r * H, y += r * V, b += r * K, C += r * F, x += r * q, _ += r * z, k += r * Z, S += r * G, E += r * Y, R += r * Q, f += (r = t[8]) * I, g += r * U, p += r * W, w += r * j, m += r * B, v += r * D, y += r * H, b += r * V, C += r * K, x += r * F, _ += r * q, k += r * z, S += r * Z, E += r * G, R += r * Y, T += r * Q, g += (r = t[9]) * I, p += r * U, w += r * W, m += r * j, v += r * B, y += r * D, b += r * H, C += r * V, x += r * K, _ += r * F, k += r * q, S += r * z, E += r * Z, R += r * G, T += r * Y, L += r * Q, p += (r = t[10]) * I, w += r * U, m += r * W, v += r * j, y += r * B, b += r * D, C += r * H, x += r * V, _ += r * K, k += r * F, S += r * q, E += r * z, R += r * Z, T += r * G, L += r * Y, A += r * Q, w += (r = t[11]) * I, m += r * U, v += r * W, y += r * j, b += r * B, C += r * D, x += r * H, _ += r * V, k += r * K, S += r * F, E += r * q, R += r * z, T += r * Z, L += r * G, A += r * Y, M += r * Q, m += (r = t[12]) * I, v += r * U, y += r * W, b += r * j, C += r * B, x += r * D, _ += r * H, k += r * V, S += r * K, E += r * F, R += r * q, T += r * z, L += r * Z, A += r * G, M += r * Y, O += r * Q, v += (r = t[13]) * I, y += r * U, b += r * W, C += r * j, x += r * B, _ += r * D, k += r * H, S += r * V, E += r * K, R += r * F, T += r * q, L += r * z, A += r * Z, M += r * G, O += r * Y, N += r * Q, y += (r = t[14]) * I, b += r * U, C += r * W, x += r * j, _ += r * B, k += r * D, S += r * H, E += r * V, R += r * K, T += r * F, L += r * q, A += r * z, M += r * Z, O += r * G, N += r * Y, P += r * Q, b += (r = t[15]) * I, s += 38 * (x += r * W), a += 38 * (_ += r * j), l += 38 * (k += r * B), c += 38 * (S += r * D), u += 38 * (E += r * H), d += 38 * (R += r * V), h += 38 * (T += r * K), f += 38 * (L += r * F), g += 38 * (A += r * q), p += 38 * (M += r * z), w += 38 * (O += r * Z), m += 38 * (N += r * G), v += 38 * (P += r * Y), y += 38 * ($ += r * Q), i = (r = (i += 38 * (C += r * U)) + (o = 1) + 65535) - 65536 * (o = Math.floor(r / 65536)), s = (r = s + o + 65535) - 65536 * (o = Math.floor(r / 65536)), a = (r = a + o + 65535) - 65536 * (o = Math.floor(r / 65536)), l = (r = l + o + 65535) - 65536 * (o = Math.floor(r / 65536)), c = (r = c + o + 65535) - 65536 * (o = Math.floor(r / 65536)), u = (r = u + o + 65535) - 65536 * (o = Math.floor(r / 65536)), d = (r = d + o + 65535) - 65536 * (o = Math.floor(r / 65536)), h = (r = h + o + 65535) - 65536 * (o = Math.floor(r / 65536)), f = (r = f + o + 65535) - 65536 * (o = Math.floor(r / 65536)), g = (r = g + o + 65535) - 65536 * (o = Math.floor(r / 65536)), p = (r = p + o + 65535) - 65536 * (o = Math.floor(r / 65536)), w = (r = w + o + 65535) - 65536 * (o = Math.floor(r / 65536)), m = (r = m + o + 65535) - 65536 * (o = Math.floor(r / 65536)), v = (r = v + o + 65535) - 65536 * (o = Math.floor(r / 65536)), y = (r = y + o + 65535) - 65536 * (o = Math.floor(r / 65536)), b = (r = b + o + 65535) - 65536 * (o = Math.floor(r / 65536)), i = (r = (i += o - 1 + 37 * (o - 1)) + (o = 1) + 65535) - 65536 * (o = Math.floor(r / 65536)), s = (r = s + o + 65535) - 65536 * (o = Math.floor(r / 65536)), a = (r = a + o + 65535) - 65536 * (o = Math.floor(r / 65536)), l = (r = l + o + 65535) - 65536 * (o = Math.floor(r / 65536)), c = (r = c + o + 65535) - 65536 * (o = Math.floor(r / 65536)), u = (r = u + o + 65535) - 65536 * (o = Math.floor(r / 65536)), d = (r = d + o + 65535) - 65536 * (o = Math.floor(r / 65536)), h = (r = h + o + 65535) - 65536 * (o = Math.floor(r / 65536)), f = (r = f + o + 65535) - 65536 * (o = Math.floor(r / 65536)), g = (r = g + o + 65535) - 65536 * (o = Math.floor(r / 65536)), p = (r = p + o + 65535) - 65536 * (o = Math.floor(r / 65536)), w = (r = w + o + 65535) - 65536 * (o = Math.floor(r / 65536)), m = (r = m + o + 65535) - 65536 * (o = Math.floor(r / 65536)), v = (r = v + o + 65535) - 65536 * (o = Math.floor(r / 65536)), y = (r = y + o + 65535) - 65536 * (o = Math.floor(r / 65536)), b = (r = b + o + 65535) - 65536 * (o = Math.floor(r / 65536)), i += o - 1 + 37 * (o - 1), e[0] = i, e[1] = s, e[2] = a, e[3] = l, e[4] = c, e[5] = u, e[6] = d, e[7] = h, e[8] = f, e[9] = g, e[10] = p, e[11] = w, e[12] = m, e[13] = v, e[14] = y, e[15] = b
            }

            function D(e, t) {
                B(e, t, t)
            }

            function H(e, n) {
                var r, o = t();
                for (r = 0; r < 16; r++) o[r] = n[r];
                for (r = 253; r >= 0; r--) D(o, o), 2 !== r && 4 !== r && B(o, o, n);
                for (r = 0; r < 16; r++) e[r] = o[r]
            }

            function V(e, n) {
                var r, o = t();
                for (r = 0; r < 16; r++) o[r] = n[r];
                for (r = 250; r >= 0; r--) D(o, o), 1 !== r && B(o, o, n);
                for (r = 0; r < 16; r++) e[r] = o[r]
            }

            function K(e, n, r) {
                var o, i, s = new Uint8Array(32),
                    l = new Float64Array(80),
                    c = t(),
                    u = t(),
                    d = t(),
                    h = t(),
                    f = t(),
                    g = t();
                for (i = 0; i < 31; i++) s[i] = n[i];
                for (s[31] = 127 & n[31] | 64, s[0] &= 248, U(l, r), i = 0; i < 16; i++) u[i] = l[i], h[i] = c[i] = d[i] = 0;
                for (c[0] = h[0] = 1, i = 254; i >= 0; --i) N(c, u, o = s[i >>> 3] >>> (7 & i) & 1), N(d, h, o), W(f, c, d), j(c, c, d), W(d, u, h), j(u, u, h), D(h, f), D(g, c), B(c, d, c), B(d, u, f), W(f, c, d), j(c, c, d), D(u, c), j(d, h, g), B(c, d, a), W(c, c, h), B(d, d, c), B(c, h, g), B(h, u, l), D(u, f), N(c, u, o), N(d, h, o);
                for (i = 0; i < 16; i++) l[i + 16] = c[i], l[i + 32] = d[i], l[i + 48] = u[i], l[i + 64] = h[i];
                var p = l.subarray(32),
                    w = l.subarray(16);
                return H(p, p), B(w, w, p), P(e, w), 0
            }

            function F(e, t) {
                return K(e, t, o)
            }

            function q(e, t) {
                return n(t, 32), F(e, t)
            }

            function z(e, t, n) {
                var o = new Uint8Array(32);
                return K(o, n, t), b(e, r, o, C)
            }
            E.prototype.blocks = function (e, t, n) {
                for (var r, o, i, s, a, l, c, u, d, h, f, g, p, w, m, v, y, b, C, x = this.fin ? 0 : 2048, _ = this.h[0], k = this.h[1], S = this.h[2], E = this.h[3], R = this.h[4], T = this.h[5], L = this.h[6], A = this.h[7], M = this.h[8], O = this.h[9], N = this.r[0], P = this.r[1], $ = this.r[2], I = this.r[3], U = this.r[4], W = this.r[5], j = this.r[6], B = this.r[7], D = this.r[8], H = this.r[9]; n >= 16;) h = d = 0, h += (_ += 8191 & (r = 255 & e[t + 0] | (255 & e[t + 1]) << 8)) * N, h += (k += 8191 & (r >>> 13 | (o = 255 & e[t + 2] | (255 & e[t + 3]) << 8) << 3)) * (5 * H), h += (S += 8191 & (o >>> 10 | (i = 255 & e[t + 4] | (255 & e[t + 5]) << 8) << 6)) * (5 * D), h += (E += 8191 & (i >>> 7 | (s = 255 & e[t + 6] | (255 & e[t + 7]) << 8) << 9)) * (5 * B), d = (h += (R += 8191 & (s >>> 4 | (a = 255 & e[t + 8] | (255 & e[t + 9]) << 8) << 12)) * (5 * j)) >>> 13, h &= 8191, h += (T += a >>> 1 & 8191) * (5 * W), h += (L += 8191 & (a >>> 14 | (l = 255 & e[t + 10] | (255 & e[t + 11]) << 8) << 2)) * (5 * U), h += (A += 8191 & (l >>> 11 | (c = 255 & e[t + 12] | (255 & e[t + 13]) << 8) << 5)) * (5 * I), h += (M += 8191 & (c >>> 8 | (u = 255 & e[t + 14] | (255 & e[t + 15]) << 8) << 8)) * (5 * $), f = d += (h += (O += u >>> 5 | x) * (5 * P)) >>> 13, f += _ * P, f += k * N, f += S * (5 * H), f += E * (5 * D), d = (f += R * (5 * B)) >>> 13, f &= 8191, f += T * (5 * j), f += L * (5 * W), f += A * (5 * U), f += M * (5 * I), d += (f += O * (5 * $)) >>> 13, f &= 8191, g = d, g += _ * $, g += k * P, g += S * N, g += E * (5 * H), d = (g += R * (5 * D)) >>> 13, g &= 8191, g += T * (5 * B), g += L * (5 * j), g += A * (5 * W), g += M * (5 * U), p = d += (g += O * (5 * I)) >>> 13, p += _ * I, p += k * $, p += S * P, p += E * N, d = (p += R * (5 * H)) >>> 13, p &= 8191, p += T * (5 * D), p += L * (5 * B), p += A * (5 * j), p += M * (5 * W), w = d += (p += O * (5 * U)) >>> 13, w += _ * U, w += k * I, w += S * $, w += E * P, d = (w += R * N) >>> 13, w &= 8191, w += T * (5 * H), w += L * (5 * D), w += A * (5 * B), w += M * (5 * j), m = d += (w += O * (5 * W)) >>> 13, m += _ * W, m += k * U, m += S * I, m += E * $, d = (m += R * P) >>> 13, m &= 8191, m += T * N, m += L * (5 * H), m += A * (5 * D), m += M * (5 * B), v = d += (m += O * (5 * j)) >>> 13, v += _ * j, v += k * W, v += S * U, v += E * I, d = (v += R * $) >>> 13, v &= 8191, v += T * P, v += L * N, v += A * (5 * H), v += M * (5 * D), y = d += (v += O * (5 * B)) >>> 13, y += _ * B, y += k * j, y += S * W, y += E * U, d = (y += R * I) >>> 13, y &= 8191, y += T * $, y += L * P, y += A * N, y += M * (5 * H), b = d += (y += O * (5 * D)) >>> 13, b += _ * D, b += k * B, b += S * j, b += E * W, d = (b += R * U) >>> 13, b &= 8191, b += T * I, b += L * $, b += A * P, b += M * N, C = d += (b += O * (5 * H)) >>> 13, C += _ * H, C += k * D, C += S * B, C += E * j, d = (C += R * W) >>> 13, C &= 8191, C += T * U, C += L * I, C += A * $, C += M * P, _ = h = 8191 & (d = (d = ((d += (C += O * N) >>> 13) << 2) + d | 0) + (h &= 8191) | 0), k = f += d >>>= 13, S = g &= 8191, E = p &= 8191, R = w &= 8191, T = m &= 8191, L = v &= 8191, A = y &= 8191, M = b &= 8191, O = C &= 8191, t += 16, n -= 16;
                this.h[0] = _, this.h[1] = k, this.h[2] = S, this.h[3] = E, this.h[4] = R, this.h[5] = T, this.h[6] = L, this.h[7] = A, this.h[8] = M, this.h[9] = O
            }, E.prototype.finish = function (e, t) {
                var n, r, o, i, s = new Uint16Array(10);
                if (this.leftover) {
                    for (i = this.leftover, this.buffer[i++] = 1; i < 16; i++) this.buffer[i] = 0;
                    this.fin = 1, this.blocks(this.buffer, 0, 16)
                }
                for (n = this.h[1] >>> 13, this.h[1] &= 8191, i = 2; i < 10; i++) this.h[i] += n, n = this.h[i] >>> 13, this.h[i] &= 8191;
                for (this.h[0] += 5 * n, n = this.h[0] >>> 13, this.h[0] &= 8191, this.h[1] += n, n = this.h[1] >>> 13, this.h[1] &= 8191, this.h[2] += n, s[0] = this.h[0] + 5, n = s[0] >>> 13, s[0] &= 8191, i = 1; i < 10; i++) s[i] = this.h[i] + n, n = s[i] >>> 13, s[i] &= 8191;
                for (s[9] -= 8192, r = (1 ^ n) - 1, i = 0; i < 10; i++) s[i] &= r;
                for (r = ~r, i = 0; i < 10; i++) this.h[i] = this.h[i] & r | s[i];
                for (this.h[0] = 65535 & (this.h[0] | this.h[1] << 13), this.h[1] = 65535 & (this.h[1] >>> 3 | this.h[2] << 10), this.h[2] = 65535 & (this.h[2] >>> 6 | this.h[3] << 7), this.h[3] = 65535 & (this.h[3] >>> 9 | this.h[4] << 4), this.h[4] = 65535 & (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14), this.h[5] = 65535 & (this.h[6] >>> 2 | this.h[7] << 11), this.h[6] = 65535 & (this.h[7] >>> 5 | this.h[8] << 8), this.h[7] = 65535 & (this.h[8] >>> 8 | this.h[9] << 5), o = this.h[0] + this.pad[0], this.h[0] = 65535 & o, i = 1; i < 8; i++) o = (this.h[i] + this.pad[i] | 0) + (o >>> 16) | 0, this.h[i] = 65535 & o;
                e[t + 0] = this.h[0] >>> 0 & 255, e[t + 1] = this.h[0] >>> 8 & 255, e[t + 2] = this.h[1] >>> 0 & 255, e[t + 3] = this.h[1] >>> 8 & 255, e[t + 4] = this.h[2] >>> 0 & 255, e[t + 5] = this.h[2] >>> 8 & 255, e[t + 6] = this.h[3] >>> 0 & 255, e[t + 7] = this.h[3] >>> 8 & 255, e[t + 8] = this.h[4] >>> 0 & 255, e[t + 9] = this.h[4] >>> 8 & 255, e[t + 10] = this.h[5] >>> 0 & 255, e[t + 11] = this.h[5] >>> 8 & 255, e[t + 12] = this.h[6] >>> 0 & 255, e[t + 13] = this.h[6] >>> 8 & 255, e[t + 14] = this.h[7] >>> 0 & 255, e[t + 15] = this.h[7] >>> 8 & 255
            }, E.prototype.update = function (e, t, n) {
                var r, o;
                if (this.leftover) {
                    for ((o = 16 - this.leftover) > n && (o = n), r = 0; r < o; r++) this.buffer[this.leftover + r] = e[t + r];
                    if (n -= o, t += o, this.leftover += o, this.leftover < 16) return;
                    this.blocks(this.buffer, 0, 16), this.leftover = 0
                }
                if (n >= 16 && (o = n - n % 16, this.blocks(e, t, o), t += o, n -= o), n) {
                    for (r = 0; r < n; r++) this.buffer[this.leftover + r] = e[t + r];
                    this.leftover += n
                }
            };
            var Z = L,
                G = A;
            var Y = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

            function Q(e, t, n, r) {
                for (var o, i, s, a, l, c, u, d, h, f, g, p, w, m, v, y, b, C, x, _, k, S, E, R, T, L, A = new Int32Array(16), M = new Int32Array(16), O = e[0], N = e[1], P = e[2], $ = e[3], I = e[4], U = e[5], W = e[6], j = e[7], B = t[0], D = t[1], H = t[2], V = t[3], K = t[4], F = t[5], q = t[6], z = t[7], Z = 0; r >= 128;) {
                    for (x = 0; x < 16; x++) _ = 8 * x + Z, A[x] = n[_ + 0] << 24 | n[_ + 1] << 16 | n[_ + 2] << 8 | n[_ + 3], M[x] = n[_ + 4] << 24 | n[_ + 5] << 16 | n[_ + 6] << 8 | n[_ + 7];
                    for (x = 0; x < 80; x++)
                        if (o = O, i = N, s = P, a = $, l = I, c = U, u = W, j, h = B, f = D, g = H, p = V, w = K, m = F, v = q, z, E = 65535 & (S = z), R = S >>> 16, T = 65535 & (k = j), L = k >>> 16, E += 65535 & (S = (K >>> 14 | I << 18) ^ (K >>> 18 | I << 14) ^ (I >>> 9 | K << 23)), R += S >>> 16, T += 65535 & (k = (I >>> 14 | K << 18) ^ (I >>> 18 | K << 14) ^ (K >>> 9 | I << 23)), L += k >>> 16, E += 65535 & (S = K & F ^ ~K & q), R += S >>> 16, T += 65535 & (k = I & U ^ ~I & W), L += k >>> 16, k = Y[2 * x], E += 65535 & (S = Y[2 * x + 1]), R += S >>> 16, T += 65535 & k, L += k >>> 16, k = A[x % 16], R += (S = M[x % 16]) >>> 16, T += 65535 & k, L += k >>> 16, T += (R += (E += 65535 & S) >>> 16) >>> 16, E = 65535 & (S = C = 65535 & E | R << 16), R = S >>> 16, T = 65535 & (k = b = 65535 & T | (L += T >>> 16) << 16), L = k >>> 16, E += 65535 & (S = (B >>> 28 | O << 4) ^ (O >>> 2 | B << 30) ^ (O >>> 7 | B << 25)), R += S >>> 16, T += 65535 & (k = (O >>> 28 | B << 4) ^ (B >>> 2 | O << 30) ^ (B >>> 7 | O << 25)), L += k >>> 16, R += (S = B & D ^ B & H ^ D & H) >>> 16, T += 65535 & (k = O & N ^ O & P ^ N & P), L += k >>> 16, d = 65535 & (T += (R += (E += 65535 & S) >>> 16) >>> 16) | (L += T >>> 16) << 16, y = 65535 & E | R << 16, E = 65535 & (S = p), R = S >>> 16, T = 65535 & (k = a), L = k >>> 16, R += (S = C) >>> 16, T += 65535 & (k = b), L += k >>> 16, N = o, P = i, $ = s, I = a = 65535 & (T += (R += (E += 65535 & S) >>> 16) >>> 16) | (L += T >>> 16) << 16, U = l, W = c, j = u, O = d, D = h, H = f, V = g, K = p = 65535 & E | R << 16, F = w, q = m, z = v, B = y, x % 16 == 15)
                            for (_ = 0; _ < 16; _++) k = A[_], E = 65535 & (S = M[_]), R = S >>> 16, T = 65535 & k, L = k >>> 16, k = A[(_ + 9) % 16], E += 65535 & (S = M[(_ + 9) % 16]), R += S >>> 16, T += 65535 & k, L += k >>> 16, b = A[(_ + 1) % 16], E += 65535 & (S = ((C = M[(_ + 1) % 16]) >>> 1 | b << 31) ^ (C >>> 8 | b << 24) ^ (C >>> 7 | b << 25)), R += S >>> 16, T += 65535 & (k = (b >>> 1 | C << 31) ^ (b >>> 8 | C << 24) ^ b >>> 7), L += k >>> 16, b = A[(_ + 14) % 16], R += (S = ((C = M[(_ + 14) % 16]) >>> 19 | b << 13) ^ (b >>> 29 | C << 3) ^ (C >>> 6 | b << 26)) >>> 16, T += 65535 & (k = (b >>> 19 | C << 13) ^ (C >>> 29 | b << 3) ^ b >>> 6), L += k >>> 16, L += (T += (R += (E += 65535 & S) >>> 16) >>> 16) >>> 16, A[_] = 65535 & T | L << 16, M[_] = 65535 & E | R << 16;
                    E = 65535 & (S = B), R = S >>> 16, T = 65535 & (k = O), L = k >>> 16, k = e[0], R += (S = t[0]) >>> 16, T += 65535 & k, L += k >>> 16, L += (T += (R += (E += 65535 & S) >>> 16) >>> 16) >>> 16, e[0] = O = 65535 & T | L << 16, t[0] = B = 65535 & E | R << 16, E = 65535 & (S = D), R = S >>> 16, T = 65535 & (k = N), L = k >>> 16, k = e[1], R += (S = t[1]) >>> 16, T += 65535 & k, L += k >>> 16, L += (T += (R += (E += 65535 & S) >>> 16) >>> 16) >>> 16, e[1] = N = 65535 & T | L << 16, t[1] = D = 65535 & E | R << 16, E = 65535 & (S = H), R = S >>> 16, T = 65535 & (k = P), L = k >>> 16, k = e[2], R += (S = t[2]) >>> 16, T += 65535 & k, L += k >>> 16, L += (T += (R += (E += 65535 & S) >>> 16) >>> 16) >>> 16, e[2] = P = 65535 & T | L << 16, t[2] = H = 65535 & E | R << 16, E = 65535 & (S = V), R = S >>> 16, T = 65535 & (k = $), L = k >>> 16, k = e[3], R += (S = t[3]) >>> 16, T += 65535 & k, L += k >>> 16, L += (T += (R += (E += 65535 & S) >>> 16) >>> 16) >>> 16, e[3] = $ = 65535 & T | L << 16, t[3] = V = 65535 & E | R << 16, E = 65535 & (S = K), R = S >>> 16, T = 65535 & (k = I), L = k >>> 16, k = e[4], R += (S = t[4]) >>> 16, T += 65535 & k, L += k >>> 16, L += (T += (R += (E += 65535 & S) >>> 16) >>> 16) >>> 16, e[4] = I = 65535 & T | L << 16, t[4] = K = 65535 & E | R << 16, E = 65535 & (S = F), R = S >>> 16, T = 65535 & (k = U), L = k >>> 16, k = e[5], R += (S = t[5]) >>> 16, T += 65535 & k, L += k >>> 16, L += (T += (R += (E += 65535 & S) >>> 16) >>> 16) >>> 16, e[5] = U = 65535 & T | L << 16, t[5] = F = 65535 & E | R << 16, E = 65535 & (S = q), R = S >>> 16, T = 65535 & (k = W), L = k >>> 16, k = e[6], R += (S = t[6]) >>> 16, T += 65535 & k, L += k >>> 16, L += (T += (R += (E += 65535 & S) >>> 16) >>> 16) >>> 16, e[6] = W = 65535 & T | L << 16, t[6] = q = 65535 & E | R << 16, E = 65535 & (S = z), R = S >>> 16, T = 65535 & (k = j), L = k >>> 16, k = e[7], R += (S = t[7]) >>> 16, T += 65535 & k, L += k >>> 16, L += (T += (R += (E += 65535 & S) >>> 16) >>> 16) >>> 16, e[7] = j = 65535 & T | L << 16, t[7] = z = 65535 & E | R << 16, Z += 128, r -= 128
                }
                return r
            }

            function J(e, t, n) {
                var r, o = new Int32Array(8),
                    i = new Int32Array(8),
                    s = new Uint8Array(256),
                    a = n;
                for (o[0] = 1779033703, o[1] = 3144134277, o[2] = 1013904242, o[3] = 2773480762, o[4] = 1359893119, o[5] = 2600822924, o[6] = 528734635, o[7] = 1541459225, i[0] = 4089235720, i[1] = 2227873595, i[2] = 4271175723, i[3] = 1595750129, i[4] = 2917565137, i[5] = 725511199, i[6] = 4215389547, i[7] = 327033209, Q(o, i, t, n), n %= 128, r = 0; r < n; r++) s[r] = t[a - n + r];
                for (s[n] = 128, s[(n = 256 - 128 * (n < 112 ? 1 : 0)) - 9] = 0, f(s, n - 8, a / 536870912 | 0, a << 3), Q(o, i, s, n), r = 0; r < 8; r++) f(e, 8 * r, o[r], i[r]);
                return 0
            }

            function X(e, n) {
                var r = t(),
                    o = t(),
                    i = t(),
                    s = t(),
                    a = t(),
                    l = t(),
                    u = t(),
                    d = t(),
                    h = t();
                j(r, e[1], e[0]), j(h, n[1], n[0]), B(r, r, h), W(o, e[0], e[1]), W(h, n[0], n[1]), B(o, o, h), B(i, e[3], n[3]), B(i, i, c), B(s, e[2], n[2]), W(s, s, s), j(a, o, r), j(l, s, i), W(u, s, i), W(d, o, r), B(e[0], a, l), B(e[1], d, u), B(e[2], u, l), B(e[3], a, d)
            }

            function ee(e, t, n) {
                var r;
                for (r = 0; r < 4; r++) N(e[r], t[r], n)
            }

            function te(e, n) {
                var r = t(),
                    o = t(),
                    i = t();
                H(i, n[2]), B(r, n[0], i), B(o, n[1], i), P(e, o), e[31] ^= I(r) << 7
            }

            function ne(e, t, n) {
                var r, o;
                for (M(e[0], i), M(e[1], s), M(e[2], s), M(e[3], i), o = 255; o >= 0; --o) ee(e, t, r = n[o / 8 | 0] >> (7 & o) & 1), X(t, e), X(e, e), ee(e, t, r)
            }

            function re(e, n) {
                var r = [t(), t(), t(), t()];
                M(r[0], u), M(r[1], d), M(r[2], s), B(r[3], u, d), ne(e, r, n)
            }

            function oe(e, r, o) {
                var i, s = new Uint8Array(64),
                    a = [t(), t(), t(), t()];
                for (o || n(r, 32), J(s, r, 32), s[0] &= 248, s[31] &= 127, s[31] |= 64, re(a, s), te(e, a), i = 0; i < 32; i++) r[i + 32] = e[i];
                return 0
            }
            var ie = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

            function se(e, t) {
                var n, r, o, i;
                for (r = 63; r >= 32; --r) {
                    for (n = 0, o = r - 32, i = r - 12; o < i; ++o) t[o] += n - 16 * t[r] * ie[o - (r - 32)], n = Math.floor((t[o] + 128) / 256), t[o] -= 256 * n;
                    t[o] += n, t[r] = 0
                }
                for (n = 0, o = 0; o < 32; o++) t[o] += n - (t[31] >> 4) * ie[o], n = t[o] >> 8, t[o] &= 255;
                for (o = 0; o < 32; o++) t[o] -= n * ie[o];
                for (r = 0; r < 32; r++) t[r + 1] += t[r] >> 8, e[r] = 255 & t[r]
            }

            function ae(e) {
                var t, n = new Float64Array(64);
                for (t = 0; t < 64; t++) n[t] = e[t];
                for (t = 0; t < 64; t++) e[t] = 0;
                se(e, n)
            }

            function le(e, n, r, o) {
                var i, s, a = new Uint8Array(64),
                    l = new Uint8Array(64),
                    c = new Uint8Array(64),
                    u = new Float64Array(64),
                    d = [t(), t(), t(), t()];
                J(a, o, 32), a[0] &= 248, a[31] &= 127, a[31] |= 64;
                var h = r + 64;
                for (i = 0; i < r; i++) e[64 + i] = n[i];
                for (i = 0; i < 32; i++) e[32 + i] = a[32 + i];
                for (J(c, e.subarray(32), r + 32), ae(c), re(d, c), te(e, d), i = 32; i < 64; i++) e[i] = o[i];
                for (J(l, e, r + 64), ae(l), i = 0; i < 64; i++) u[i] = 0;
                for (i = 0; i < 32; i++) u[i] = c[i];
                for (i = 0; i < 32; i++)
                    for (s = 0; s < 32; s++) u[i + s] += l[i] * a[s];
                return se(e.subarray(32), u), h
            }

            function ce(e, n, r, o) {
                var a, c = new Uint8Array(32),
                    u = new Uint8Array(64),
                    d = [t(), t(), t(), t()],
                    f = [t(), t(), t(), t()];
                if (r < 64) return -1;
                if (function (e, n) {
                        var r = t(),
                            o = t(),
                            a = t(),
                            c = t(),
                            u = t(),
                            d = t(),
                            f = t();
                        return M(e[2], s), U(e[1], n), D(a, e[1]), B(c, a, l), j(a, a, e[2]), W(c, e[2], c), D(u, c), D(d, u), B(f, d, u), B(r, f, a), B(r, r, c), V(r, r), B(r, r, a), B(r, r, c), B(r, r, c), B(e[0], r, c), D(o, e[0]), B(o, o, c), $(o, a) && B(e[0], e[0], h), D(o, e[0]), B(o, o, c), $(o, a) ? -1 : (I(e[0]) === n[31] >> 7 && j(e[0], i, e[0]), B(e[3], e[0], e[1]), 0)
                    }(f, o)) return -1;
                for (a = 0; a < r; a++) e[a] = n[a];
                for (a = 0; a < 32; a++) e[a + 32] = o[a];
                if (J(u, e, r), ae(u), ne(d, f, u), re(f, n.subarray(32)), X(d, f), te(c, d), r -= 64, m(n, 0, c, 0)) {
                    for (a = 0; a < r; a++) e[a] = 0;
                    return -1
                }
                for (a = 0; a < r; a++) e[a] = n[a + 64];
                return r
            }
            var ue = 32,
                de = 24,
                he = 16,
                fe = 32,
                ge = 32,
                pe = de,
                we = 64,
                me = 32,
                ve = 64;

            function ye(e, t) {
                if (e.length !== ue) throw new Error("bad key size");
                if (t.length !== de) throw new Error("bad nonce size")
            }

            function be() {
                for (var e = 0; e < arguments.length; e++)
                    if (!(arguments[e] instanceof Uint8Array)) throw new TypeError("unexpected type, use Uint8Array")
            }

            function Ce(e) {
                for (var t = 0; t < e.length; t++) e[t] = 0
            }
            e.lowlevel = {
                    crypto_core_hsalsa20: b,
                    crypto_stream_xor: S,
                    crypto_stream: k,
                    crypto_stream_salsa20_xor: x,
                    crypto_stream_salsa20: _,
                    crypto_onetimeauth: R,
                    crypto_onetimeauth_verify: T,
                    crypto_verify_16: p,
                    crypto_verify_32: m,
                    crypto_secretbox: L,
                    crypto_secretbox_open: A,
                    crypto_scalarmult: K,
                    crypto_scalarmult_base: F,
                    crypto_box_beforenm: z,
                    crypto_box_afternm: Z,
                    crypto_box: function (e, t, n, r, o, i) {
                        var s = new Uint8Array(32);
                        return z(s, o, i), Z(e, t, n, r, s)
                    },
                    crypto_box_open: function (e, t, n, r, o, i) {
                        var s = new Uint8Array(32);
                        return z(s, o, i), G(e, t, n, r, s)
                    },
                    crypto_box_keypair: q,
                    crypto_hash: J,
                    crypto_sign: le,
                    crypto_sign_keypair: oe,
                    crypto_sign_open: ce,
                    crypto_secretbox_KEYBYTES: ue,
                    crypto_secretbox_NONCEBYTES: de,
                    crypto_secretbox_ZEROBYTES: 32,
                    crypto_secretbox_BOXZEROBYTES: he,
                    crypto_scalarmult_BYTES: 32,
                    crypto_scalarmult_SCALARBYTES: 32,
                    crypto_box_PUBLICKEYBYTES: fe,
                    crypto_box_SECRETKEYBYTES: ge,
                    crypto_box_BEFORENMBYTES: 32,
                    crypto_box_NONCEBYTES: pe,
                    crypto_box_ZEROBYTES: 32,
                    crypto_box_BOXZEROBYTES: 16,
                    crypto_sign_BYTES: we,
                    crypto_sign_PUBLICKEYBYTES: me,
                    crypto_sign_SECRETKEYBYTES: ve,
                    crypto_sign_SEEDBYTES: 32,
                    crypto_hash_BYTES: 64,
                    gf: t,
                    D: l,
                    L: ie,
                    pack25519: P,
                    unpack25519: U,
                    M: B,
                    A: W,
                    S: D,
                    Z: j,
                    pow2523: V,
                    add: X,
                    set25519: M,
                    modL: se,
                    scalarmult: ne,
                    scalarbase: re
                }, e.randomBytes = function (e) {
                    var t = new Uint8Array(e);
                    return n(t, e), t
                }, e.secretbox = function (e, t, n) {
                    be(e, t, n), ye(n, t);
                    for (var r = new Uint8Array(32 + e.length), o = new Uint8Array(r.length), i = 0; i < e.length; i++) r[i + 32] = e[i];
                    return L(o, r, r.length, t, n), o.subarray(he)
                }, e.secretbox.open = function (e, t, n) {
                    be(e, t, n), ye(n, t);
                    for (var r = new Uint8Array(he + e.length), o = new Uint8Array(r.length), i = 0; i < e.length; i++) r[i + he] = e[i];
                    return r.length < 32 || 0 !== A(o, r, r.length, t, n) ? null : o.subarray(32)
                }, e.secretbox.keyLength = ue, e.secretbox.nonceLength = de, e.secretbox.overheadLength = he, e.scalarMult = function (e, t) {
                    if (be(e, t), 32 !== e.length) throw new Error("bad n size");
                    if (32 !== t.length) throw new Error("bad p size");
                    var n = new Uint8Array(32);
                    return K(n, e, t), n
                }, e.scalarMult.base = function (e) {
                    if (be(e), 32 !== e.length) throw new Error("bad n size");
                    var t = new Uint8Array(32);
                    return F(t, e), t
                }, e.scalarMult.scalarLength = 32, e.scalarMult.groupElementLength = 32, e.box = function (t, n, r, o) {
                    var i = e.box.before(r, o);
                    return e.secretbox(t, n, i)
                }, e.box.before = function (e, t) {
                    be(e, t),
                        function (e, t) {
                            if (e.length !== fe) throw new Error("bad public key size");
                            if (t.length !== ge) throw new Error("bad secret key size")
                        }(e, t);
                    var n = new Uint8Array(32);
                    return z(n, e, t), n
                }, e.box.after = e.secretbox, e.box.open = function (t, n, r, o) {
                    var i = e.box.before(r, o);
                    return e.secretbox.open(t, n, i)
                }, e.box.open.after = e.secretbox.open, e.box.keyPair = function () {
                    var e = new Uint8Array(fe),
                        t = new Uint8Array(ge);
                    return q(e, t), {
                        publicKey: e,
                        secretKey: t
                    }
                }, e.box.keyPair.fromSecretKey = function (e) {
                    if (be(e), e.length !== ge) throw new Error("bad secret key size");
                    var t = new Uint8Array(fe);
                    return F(t, e), {
                        publicKey: t,
                        secretKey: new Uint8Array(e)
                    }
                }, e.box.publicKeyLength = fe, e.box.secretKeyLength = ge, e.box.sharedKeyLength = 32, e.box.nonceLength = pe, e.box.overheadLength = e.secretbox.overheadLength, e.sign = function (e, t) {
                    if (be(e, t), t.length !== ve) throw new Error("bad secret key size");
                    var n = new Uint8Array(we + e.length);
                    return le(n, e, e.length, t), n
                }, e.sign.open = function (e, t) {
                    if (be(e, t), t.length !== me) throw new Error("bad public key size");
                    var n = new Uint8Array(e.length),
                        r = ce(n, e, e.length, t);
                    if (r < 0) return null;
                    for (var o = new Uint8Array(r), i = 0; i < o.length; i++) o[i] = n[i];
                    return o
                }, e.sign.detached = function (t, n) {
                    for (var r = e.sign(t, n), o = new Uint8Array(we), i = 0; i < o.length; i++) o[i] = r[i];
                    return o
                }, e.sign.detached.verify = function (e, t, n) {
                    if (be(e, t, n), t.length !== we) throw new Error("bad signature size");
                    if (n.length !== me) throw new Error("bad public key size");
                    var r, o = new Uint8Array(we + e.length),
                        i = new Uint8Array(we + e.length);
                    for (r = 0; r < we; r++) o[r] = t[r];
                    for (r = 0; r < e.length; r++) o[r + we] = e[r];
                    return ce(i, o, o.length, n) >= 0
                }, e.sign.keyPair = function () {
                    var e = new Uint8Array(me),
                        t = new Uint8Array(ve);
                    return oe(e, t), {
                        publicKey: e,
                        secretKey: t
                    }
                }, e.sign.keyPair.fromSecretKey = function (e) {
                    if (be(e), e.length !== ve) throw new Error("bad secret key size");
                    for (var t = new Uint8Array(me), n = 0; n < t.length; n++) t[n] = e[32 + n];
                    return {
                        publicKey: t,
                        secretKey: new Uint8Array(e)
                    }
                }, e.sign.keyPair.fromSeed = function (e) {
                    if (be(e), 32 !== e.length) throw new Error("bad seed size");
                    for (var t = new Uint8Array(me), n = new Uint8Array(ve), r = 0; r < 32; r++) n[r] = e[r];
                    return oe(t, n, !0), {
                        publicKey: t,
                        secretKey: n
                    }
                }, e.sign.publicKeyLength = me, e.sign.secretKeyLength = ve, e.sign.seedLength = 32, e.sign.signatureLength = we, e.hash = function (e) {
                    be(e);
                    var t = new Uint8Array(64);
                    return J(t, e, e.length), t
                }, e.hash.hashLength = 64, e.verify = function (e, t) {
                    return be(e, t), 0 !== e.length && 0 !== t.length && (e.length === t.length && 0 === g(e, 0, t, 0, e.length))
                }, e.setPRNG = function (e) {
                    n = e
                },
                function () {
                    var t = "undefined" != typeof self ? self.crypto || self.msCrypto : null;
                    if (t && t.getRandomValues) {
                        e.setPRNG((function (e, n) {
                            var r, o = new Uint8Array(n);
                            for (r = 0; r < n; r += 65536) t.getRandomValues(o.subarray(r, r + Math.min(n - r, 65536)));
                            for (r = 0; r < n; r++) e[r] = o[r];
                            Ce(o)
                        }))
                    } else void 0 !== w && (t = v) && t.randomBytes && e.setPRNG((function (e, n) {
                        var r, o = t.randomBytes(n);
                        for (r = 0; r < n; r++) e[r] = o[r];
                        Ce(o)
                    }))
                }()
        }(e.exports ? e.exports : self.nacl = self.nacl || {})
    }(m);
    const y = m.exports;
    var b, C, x, _, k, S, E, R;
    e.CONNECT_EVENT_ERROR_CODES = void 0, (b = e.CONNECT_EVENT_ERROR_CODES || (e.CONNECT_EVENT_ERROR_CODES = {}))[b.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR", b[b.BAD_REQUEST_ERROR = 1] = "BAD_REQUEST_ERROR", b[b.MANIFEST_NOT_FOUND_ERROR = 2] = "MANIFEST_NOT_FOUND_ERROR", b[b.MANIFEST_CONTENT_ERROR = 3] = "MANIFEST_CONTENT_ERROR", b[b.UNKNOWN_APP_ERROR = 100] = "UNKNOWN_APP_ERROR", b[b.USER_REJECTS_ERROR = 300] = "USER_REJECTS_ERROR", b[b.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED", e.CONNECT_ITEM_ERROR_CODES = void 0, (C = e.CONNECT_ITEM_ERROR_CODES || (e.CONNECT_ITEM_ERROR_CODES = {}))[C.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR", C[C.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED", e.SEND_TRANSACTION_ERROR_CODES = void 0, (x = e.SEND_TRANSACTION_ERROR_CODES || (e.SEND_TRANSACTION_ERROR_CODES = {}))[x.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR", x[x.BAD_REQUEST_ERROR = 1] = "BAD_REQUEST_ERROR", x[x.UNKNOWN_APP_ERROR = 100] = "UNKNOWN_APP_ERROR", x[x.USER_REJECTS_ERROR = 300] = "USER_REJECTS_ERROR", x[x.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED", (k = _ || (_ = {}))[k.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR", k[k.BAD_REQUEST_ERROR = 1] = "BAD_REQUEST_ERROR", k[k.UNKNOWN_APP_ERROR = 100] = "UNKNOWN_APP_ERROR", k[k.USER_REJECTS_ERROR = 300] = "USER_REJECTS_ERROR", k[k.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED", (E = S || (S = {}))[E.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR", E[E.BAD_REQUEST_ERROR = 1] = "BAD_REQUEST_ERROR", E[E.UNKNOWN_APP_ERROR = 100] = "UNKNOWN_APP_ERROR", E[E.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED", e.CHAIN = void 0, (R = e.CHAIN || (e.CHAIN = {})).MAINNET = "-239", R.TESTNET = "-3";
    const T = {
        encode: function (e, t = !1) {
            let n;
            return e instanceof Uint8Array ? n = e : ("string" != typeof e && (e = JSON.stringify(e)), n = p.decodeUTF8(e)),
                function (e, t) {
                    const n = p.encodeBase64(e);
                    return t ? encodeURIComponent(n) : n
                }(n, t)
        },
        decode: function (e, t = !1) {
            const n = function (e, t) {
                return t && (e = decodeURIComponent(e)), p.decodeBase64(e)
            }(e, t);
            return {
                toString: () => p.encodeUTF8(n),
                toObject() {
                    try {
                        return JSON.parse(p.encodeUTF8(n))
                    } catch (e) {
                        return null
                    }
                },
                toUint8Array: () => n
            }
        }
    };

    function L(e) {
        let t = "";
        return e.forEach((e => {
            t += ("0" + (255 & e).toString(16)).slice(-2)
        })), t
    }

    function A(e) {
        if (e.length % 2 != 0) throw new Error(`Cannot convert ${e} to bytesArray`);
        const t = new Uint8Array(e.length / 2);
        for (let n = 0; n < e.length; n += 2) t[n / 2] = parseInt(e.slice(n, n + 2), 16);
        return t
    }
    class M {
        constructor(e) {
            this.nonceLength = 24, this.keyPair = e ? this.createKeypairFromString(e) : this.createKeypair(), this.sessionId = L(this.keyPair.publicKey)
        }
        createKeypair() {
            return y.box.keyPair()
        }
        createKeypairFromString(e) {
            return {
                publicKey: A(e.publicKey),
                secretKey: A(e.secretKey)
            }
        }
        createNonce() {
            return y.randomBytes(this.nonceLength)
        }
        encrypt(e, t) {
            const n = (new TextEncoder).encode(e),
                r = this.createNonce();
            return function (e, t) {
                const n = new Uint8Array(e.length + t.length);
                return n.set(e), n.set(t, e.length), n
            }(r, y.box(n, r, t, this.keyPair.secretKey))
        }
        decrypt(e, t) {
            const [n, r] = function (e, t) {
                if (t >= e.length) throw new Error("Index is out of buffer");
                return [e.slice(0, t), e.slice(t)]
            }(e, this.nonceLength), o = y.box.open(r, n, t, this.keyPair.secretKey);
            if (!o) throw new Error(`Decryption error: \n message: ${e.toString()} \n sender pubkey: ${t.toString()} \n keypair pubkey: ${this.keyPair.publicKey.toString()} \n keypair secretkey: ${this.keyPair.secretKey.toString()}`);
            return (new TextDecoder).decode(o)
        }
        stringifyKeypair() {
            return {
                publicKey: L(this.keyPair.publicKey),
                secretKey: L(this.keyPair.secretKey)
            }
        }
    }

    function O(e, t, n, r) {
        return new(n || (n = Promise))((function (o, i) {
            function s(e) {
                try {
                    l(r.next(e))
                } catch (t) {
                    i(t)
                }
            }

            function a(e) {
                try {
                    l(r.throw(e))
                } catch (t) {
                    i(t)
                }
            }

            function l(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                    e(t)
                }))).then(s, a)
            }
            l((r = r.apply(e, t || [])).next())
        }))
    }
    class N extends Error {
        constructor(e, t) {
            super(e, t), this.message = `${N.prefix} ${this.constructor.name}${this.info?": "+this.info:""}${e?"\n"+e:""}`, Object.setPrototypeOf(this, N.prototype)
        }
        get info() {
            return ""
        }
    }
    N.prefix = "[TON_CONNECT_SDK_ERROR]";
    class P extends N {
        get info() {
            return "Passed DappMetadata is in incorrect format."
        }
        constructor(...e) {
            super(...e), Object.setPrototypeOf(this, P.prototype)
        }
    }
    class $ extends N {
        get info() {
            return "Passed `tonconnect-manifest.json` contains errors. Check format of your manifest. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest"
        }
        constructor(...e) {
            super(...e), Object.setPrototypeOf(this, $.prototype)
        }
    }
    class I extends N {
        get info() {
            return "Manifest not found. Make sure you added `tonconnect-manifest.json` to the root of your app or passed correct manifestUrl. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest"
        }
        constructor(...e) {
            super(...e), Object.setPrototypeOf(this, I.prototype)
        }
    }
    class U extends N {
        get info() {
            return "Wallet connection called but wallet already connected. To avoid the error, disconnect the wallet before doing a new connection."
        }
        constructor(...e) {
            super(...e), Object.setPrototypeOf(this, U.prototype)
        }
    }
    class W extends N {
        get info() {
            return "Send transaction or other protocol methods called while wallet is not connected."
        }
        constructor(...e) {
            super(...e), Object.setPrototypeOf(this, W.prototype)
        }
    }
    class j extends N {
        get info() {
            return "User rejects the action in the wallet."
        }
        constructor(...e) {
            super(...e), Object.setPrototypeOf(this, j.prototype)
        }
    }
    class B extends N {
        get info() {
            return "Request to the wallet contains errors."
        }
        constructor(...e) {
            super(...e), Object.setPrototypeOf(this, B.prototype)
        }
    }
    class D extends N {
        get info() {
            return "App tries to send rpc request to the injected wallet while not connected."
        }
        constructor(...e) {
            super(...e), Object.setPrototypeOf(this, D.prototype)
        }
    }
    class H extends N {
        get info() {
            return "There is an attempt to connect to the injected wallet while it is not exists in the webpage."
        }
        constructor(...e) {
            super(...e), Object.setPrototypeOf(this, H.prototype)
        }
    }
    class V extends N {
        get info() {
            return "Storage was not specified in the `DappMetadata` and default `localStorage` was not detected in the environment."
        }
        constructor(...e) {
            super(...e), Object.setPrototypeOf(this, V.prototype)
        }
    }
    class K extends N {
        get info() {
            return "An error occurred while fetching the wallets list."
        }
        constructor(...e) {
            super(...e), Object.setPrototypeOf(this, K.prototype)
        }
    }
    class F extends N {
        get info() {
            return "Passed address is in incorrect format."
        }
        constructor(...e) {
            super(...e), Object.setPrototypeOf(this, F.prototype)
        }
    }
    class q extends N {
        get info() {
            return "Passed hex is in incorrect format."
        }
        constructor(...e) {
            super(...e), Object.setPrototypeOf(this, q.prototype)
        }
    }
    class z extends N {
        constructor(...e) {
            super(...e), Object.setPrototypeOf(this, z.prototype)
        }
    }
    const Z = {
        [e.CONNECT_EVENT_ERROR_CODES.UNKNOWN_ERROR]: z,
        [e.CONNECT_EVENT_ERROR_CODES.USER_REJECTS_ERROR]: j,
        [e.CONNECT_EVENT_ERROR_CODES.BAD_REQUEST_ERROR]: B,
        [e.CONNECT_EVENT_ERROR_CODES.UNKNOWN_APP_ERROR]: D,
        [e.CONNECT_EVENT_ERROR_CODES.MANIFEST_NOT_FOUND_ERROR]: I,
        [e.CONNECT_EVENT_ERROR_CODES.MANIFEST_CONTENT_ERROR]: $
    };
    const G = new class {
        parseError(e) {
            let t = z;
            return e.code in Z && (t = Z[e.code] || z), new t(e.message)
        }
    };
    class Y {
        isError(e) {
            return "error" in e
        }
    }
    const Q = {
        [e.SEND_TRANSACTION_ERROR_CODES.UNKNOWN_ERROR]: z,
        [e.SEND_TRANSACTION_ERROR_CODES.USER_REJECTS_ERROR]: j,
        [e.SEND_TRANSACTION_ERROR_CODES.BAD_REQUEST_ERROR]: B,
        [e.SEND_TRANSACTION_ERROR_CODES.UNKNOWN_APP_ERROR]: D
    };
    const J = new class extends Y {
        convertToRpcRequest(e) {
            return {
                method: "sendTransaction",
                params: [JSON.stringify(e)]
            }
        }
        parseAndThrowError(e) {
            let t = z;
            throw e.error.code in Q && (t = Q[e.error.code] || z), new t(e.error.message)
        }
        convertFromRpcResponse(e) {
            return {
                boc: e.result
            }
        }
    };
    class X {
        constructor(e, t) {
            this.storage = e, this.storeKey = "ton-connect-storage_http-bridge-gateway::" + t
        }
        storeLastEventId(e) {
            return O(this, void 0, void 0, (function* () {
                return this.storage.setItem(this.storeKey, e)
            }))
        }
        removeLastEventId() {
            return O(this, void 0, void 0, (function* () {
                return this.storage.removeItem(this.storeKey)
            }))
        }
        getLastEventId() {
            return O(this, void 0, void 0, (function* () {
                const e = yield this.storage.getItem(this.storeKey);
                return e || null
            }))
        }
    }

    function ee(e, t) {
        return function (e) {
            return "/" === e.slice(-1) ? e.slice(0, -1) : e
        }(e) + "/" + t
    }

    function te(e) {
        if (!e) return !1;
        const t = new URL(e);
        return "tg:" === t.protocol || "t.me" === t.hostname
    }

    function ne(e) {
        return e.replaceAll(".", "%2E").replaceAll("-", "%2D").replaceAll("_", "%5F").replaceAll("&", "-").replaceAll("=", "__").replaceAll("%", "--")
    }

    function re(e, t) {
        return O(this, void 0, void 0, (function* () {
            return new Promise(((n, r) => {
                var o, i;
                if (null === (o = null == t ? void 0 : t.signal) || void 0 === o ? void 0 : o.aborted) return void r(new N("Delay aborted"));
                const s = setTimeout((() => n()), e);
                null === (i = null == t ? void 0 : t.signal) || void 0 === i || i.addEventListener("abort", (() => {
                    clearTimeout(s), r(new N("Delay aborted"))
                }))
            }))
        }))
    }

    function oe(e) {
        const t = new AbortController;
        return (null == e ? void 0 : e.aborted) ? t.abort() : null == e || e.addEventListener("abort", (() => t.abort()), {
            once: !0
        }), t
    }

    function ie(e, t) {
        var n, r;
        return O(this, void 0, void 0, (function* () {
            const o = null !== (n = null == t ? void 0 : t.attempts) && void 0 !== n ? n : 10,
                i = null !== (r = null == t ? void 0 : t.delayMs) && void 0 !== r ? r : 200,
                s = oe(null == t ? void 0 : t.signal);
            if ("function" != typeof e) throw new N("Expected a function, got " + typeof e);
            let a, l = 0;
            for (; l < o;) {
                if (s.signal.aborted) throw new N(`Aborted after attempts ${l}`);
                try {
                    return yield e({
                        signal: s.signal
                    })
                } catch (c) {
                    a = c, l++, l < o && (yield re(i))
                }
            }
            throw a
        }))
    }

    function se(...e) {
        try {
            console.debug("[TON_CONNECT_SDK]", ...e)
        } catch (t) {}
    }

    function ae(...e) {
        try {
            console.error("[TON_CONNECT_SDK]", ...e)
        } catch (t) {}
    }
    class le {
        constructor(e, t, n, r, o) {
            this.bridgeUrl = t, this.sessionId = n, this.listener = r, this.errorsListener = o, this.ssePath = "events", this.postPath = "message", this.heartbeatMessage = "heartbeat", this.defaultTtl = 300, this.defaultReconnectDelay = 2e3, this.defaultResendDelay = 5e3, this.eventSource = function (e, t) {
                let n = null,
                    r = null,
                    o = null,
                    i = null,
                    s = null;
                const a = (a, ...l) => O(this, void 0, void 0, (function* () {
                    if (i = null != a ? a : null, null == s || s.abort(), s = oe(a), s.signal.aborted) throw new N("Resource creation was aborted");
                    r = null != l ? l : null;
                    const c = e(s.signal, ...l);
                    o = c;
                    const u = yield c;
                    if (o !== c && u !== n) throw yield t(u), new N("Resource creation was aborted by a new resource creation");
                    return n = u, n
                }));
                return {
                    create: a,
                    current: () => null != n ? n : null,
                    dispose: () => O(this, void 0, void 0, (function* () {
                        try {
                            const r = n;
                            n = null;
                            const i = o;
                            o = null;
                            try {
                                null == s || s.abort()
                            } catch (e) {}
                            yield Promise.allSettled([r ? t(r) : Promise.resolve(), i ? t(yield i) : Promise.resolve()])
                        } catch (e) {}
                    })),
                    recreate: e => O(this, void 0, void 0, (function* () {
                        const t = n,
                            s = o,
                            l = r,
                            c = i;
                        if (yield re(e), t === n && s === o && l === r && c === i) return yield a(i, ...null != l ? l : []);
                        throw new N("Resource recreation was aborted by a new resource creation")
                    }))
                }
            }(((e, t) => O(this, void 0, void 0, (function* () {
                const n = {
                    bridgeUrl: this.bridgeUrl,
                    ssePath: this.ssePath,
                    sessionId: this.sessionId,
                    bridgeGatewayStorage: this.bridgeGatewayStorage,
                    errorHandler: this.errorsHandler.bind(this),
                    messageHandler: this.messagesHandler.bind(this),
                    signal: e,
                    openingDeadlineMS: t
                };
                return yield function (e) {
                    return O(this, void 0, void 0, (function* () {
                        return yield function (e, t) {
                            const n = null == t ? void 0 : t.timeout,
                                r = oe(null == t ? void 0 : t.signal);
                            return new Promise(((t, o) => O(this, void 0, void 0, (function* () {
                                if (r.signal.aborted) return void o(new N("Operation aborted"));
                                let i;
                                void 0 !== n && (i = setTimeout((() => {
                                    r.abort(), o(new N(`Timeout after ${n}ms`))
                                }), n)), r.signal.addEventListener("abort", (() => {
                                    clearTimeout(i), o(new N("Operation aborted"))
                                }), {
                                    once: !0
                                });
                                const s = {
                                    timeout: n,
                                    abort: r.signal
                                };
                                yield e(((...e) => {
                                    clearTimeout(i), t(...e)
                                }), (() => {
                                    clearTimeout(i), o()
                                }), s)
                            }))))
                        }(((t, n, r) => O(this, void 0, void 0, (function* () {
                            var o;
                            const i = oe(r.signal).signal;
                            if (i.aborted) return void n(new N("Bridge connection aborted"));
                            const s = new URL(ee(e.bridgeUrl, e.ssePath));
                            s.searchParams.append("client_id", e.sessionId);
                            const a = yield e.bridgeGatewayStorage.getLastEventId();
                            if (a && s.searchParams.append("last_event_id", a), i.aborted) return void n(new N("Bridge connection aborted"));
                            const l = new EventSource(s.toString());
                            l.onerror = r => O(this, void 0, void 0, (function* () {
                                if (i.aborted) return l.close(), void n(new N("Bridge connection aborted"));
                                try {
                                    const n = yield e.errorHandler(l, r);
                                    n !== l && l.close(), n && n !== l && t(n)
                                } catch (o) {
                                    l.close(), n(o)
                                }
                            })), l.onopen = () => {
                                if (i.aborted) return l.close(), void n(new N("Bridge connection aborted"));
                                t(l)
                            }, l.onmessage = t => {
                                if (i.aborted) return l.close(), void n(new N("Bridge connection aborted"));
                                e.messageHandler(t)
                            }, null === (o = e.signal) || void 0 === o || o.addEventListener("abort", (() => {
                                l.close(), n(new N("Bridge connection aborted"))
                            }))
                        }))), {
                            timeout: e.openingDeadlineMS,
                            signal: e.signal
                        })
                    }))
                }(n)
            }))), (e => O(this, void 0, void 0, (function* () {
                e.close()
            })))), this.bridgeGatewayStorage = new X(e, t)
        }
        get isReady() {
            const e = this.eventSource.current();
            return (null == e ? void 0 : e.readyState) === EventSource.OPEN
        }
        get isClosed() {
            const e = this.eventSource.current();
            return (null == e ? void 0 : e.readyState) !== EventSource.OPEN
        }
        get isConnecting() {
            const e = this.eventSource.current();
            return (null == e ? void 0 : e.readyState) === EventSource.CONNECTING
        }
        registerSession(e) {
            return O(this, void 0, void 0, (function* () {
                yield this.eventSource.create(null == e ? void 0 : e.signal, null == e ? void 0 : e.openingDeadlineMS)
            }))
        }
        send(e, t, n, r) {
            var o;
            return O(this, void 0, void 0, (function* () {
                const i = {};
                "number" == typeof r ? i.ttl = r : (i.ttl = null == r ? void 0 : r.ttl, i.signal = null == r ? void 0 : r.signal, i.attempts = null == r ? void 0 : r.attempts);
                const s = new URL(ee(this.bridgeUrl, this.postPath));
                s.searchParams.append("client_id", this.sessionId), s.searchParams.append("to", t), s.searchParams.append("ttl", ((null == i ? void 0 : i.ttl) || this.defaultTtl).toString()), s.searchParams.append("topic", n);
                const a = T.encode(e);
                yield ie((e => O(this, void 0, void 0, (function* () {
                    const t = yield this.post(s, a, e.signal);
                    if (!t.ok) throw new N(`Bridge send failed, status ${t.status}`)
                }))), {
                    attempts: null !== (o = null == i ? void 0 : i.attempts) && void 0 !== o ? o : Number.MAX_SAFE_INTEGER,
                    delayMs: this.defaultResendDelay,
                    signal: null == i ? void 0 : i.signal
                })
            }))
        }
        pause() {
            this.eventSource.dispose().catch((e => ae(`Bridge pause failed, ${e}`)))
        }
        unPause() {
            return O(this, void 0, void 0, (function* () {
                yield this.eventSource.recreate(0)
            }))
        }
        close() {
            return O(this, void 0, void 0, (function* () {
                yield this.eventSource.dispose().catch((e => ae(`Bridge close failed, ${e}`)))
            }))
        }
        setListener(e) {
            this.listener = e
        }
        setErrorsListener(e) {
            this.errorsListener = e
        }
        post(e, t, n) {
            return O(this, void 0, void 0, (function* () {
                const r = yield fetch(e, {
                    method: "post",
                    body: t,
                    signal: n
                });
                if (!r.ok) throw new N(`Bridge send failed, status ${r.status}`);
                return r
            }))
        }
        errorsHandler(e, t) {
            return O(this, void 0, void 0, (function* () {
                if (this.isConnecting) throw e.close(), new N("Bridge error, failed to connect");
                if (!this.isReady) {
                    if (this.isClosed) return e.close(), se(`Bridge reconnecting, ${this.defaultReconnectDelay}ms delay`), yield this.eventSource.recreate(this.defaultReconnectDelay);
                    throw new N("Bridge error, unknown state")
                }
                try {
                    this.errorsListener(t)
                } catch (n) {}
            }))
        }
        messagesHandler(e) {
            return O(this, void 0, void 0, (function* () {
                if (e.data === this.heartbeatMessage) return;
                if (yield this.bridgeGatewayStorage.storeLastEventId(e.lastEventId), this.isClosed) return;
                let t;
                try {
                    t = JSON.parse(e.data)
                } catch (n) {
                    throw new N(`Bridge message parse failed, message ${n.data}`)
                }
                this.listener(t)
            }))
        }
    }

    function ce(e) {
        return !("connectEvent" in e)
    }
    class ue {
        constructor(e) {
            this.storage = e, this.storeKey = "ton-connect-storage_bridge-connection"
        }
        storeConnection(e) {
            return O(this, void 0, void 0, (function* () {
                if ("injected" === e.type) return this.storage.setItem(this.storeKey, JSON.stringify(e));
                if (!ce(e)) {
                    const t = {
                            sessionKeyPair: e.session.sessionCrypto.stringifyKeypair(),
                            walletPublicKey: e.session.walletPublicKey,
                            bridgeUrl: e.session.bridgeUrl
                        },
                        n = {
                            type: "http",
                            connectEvent: e.connectEvent,
                            session: t,
                            lastWalletEventId: e.lastWalletEventId,
                            nextRpcRequestId: e.nextRpcRequestId
                        };
                    return this.storage.setItem(this.storeKey, JSON.stringify(n))
                }
                const t = {
                    type: "http",
                    connectionSource: e.connectionSource,
                    sessionCrypto: e.sessionCrypto.stringifyKeypair()
                };
                return this.storage.setItem(this.storeKey, JSON.stringify(t))
            }))
        }
        removeConnection() {
            return O(this, void 0, void 0, (function* () {
                return this.storage.removeItem(this.storeKey)
            }))
        }
        getConnection() {
            return O(this, void 0, void 0, (function* () {
                const e = yield this.storage.getItem(this.storeKey);
                if (!e) return null;
                const t = JSON.parse(e);
                if ("injected" === t.type) return t;
                if ("connectEvent" in t) {
                    const e = new M(t.session.sessionKeyPair);
                    return {
                        type: "http",
                        connectEvent: t.connectEvent,
                        lastWalletEventId: t.lastWalletEventId,
                        nextRpcRequestId: t.nextRpcRequestId,
                        session: {
                            sessionCrypto: e,
                            bridgeUrl: t.session.bridgeUrl,
                            walletPublicKey: t.session.walletPublicKey
                        }
                    }
                }
                return {
                    type: "http",
                    sessionCrypto: new M(t.sessionCrypto),
                    connectionSource: t.connectionSource
                }
            }))
        }
        getHttpConnection() {
            return O(this, void 0, void 0, (function* () {
                const e = yield this.getConnection();
                if (!e) throw new N("Trying to read HTTP connection source while nothing is stored");
                if ("injected" === e.type) throw new N("Trying to read HTTP connection source while injected connection is stored");
                return e
            }))
        }
        getHttpPendingConnection() {
            return O(this, void 0, void 0, (function* () {
                const e = yield this.getConnection();
                if (!e) throw new N("Trying to read HTTP connection source while nothing is stored");
                if ("injected" === e.type) throw new N("Trying to read HTTP connection source while injected connection is stored");
                if (!ce(e)) throw new N("Trying to read HTTP-pending connection while http connection is stored");
                return e
            }))
        }
        getInjectedConnection() {
            return O(this, void 0, void 0, (function* () {
                const e = yield this.getConnection();
                if (!e) throw new N("Trying to read Injected bridge connection source while nothing is stored");
                if ("http" === (null == e ? void 0 : e.type)) throw new N("Trying to read Injected bridge connection source while HTTP connection is stored");
                return e
            }))
        }
        storedConnectionType() {
            return O(this, void 0, void 0, (function* () {
                const e = yield this.storage.getItem(this.storeKey);
                if (!e) return null;
                return JSON.parse(e).type
            }))
        }
        storeLastWalletEventId(e) {
            return O(this, void 0, void 0, (function* () {
                const t = yield this.getConnection();
                if (t && "http" === t.type && !ce(t)) return t.lastWalletEventId = e, this.storeConnection(t)
            }))
        }
        getLastWalletEventId() {
            return O(this, void 0, void 0, (function* () {
                const e = yield this.getConnection();
                if (e && "lastWalletEventId" in e) return e.lastWalletEventId
            }))
        }
        increaseNextRpcRequestId() {
            return O(this, void 0, void 0, (function* () {
                const e = yield this.getConnection();
                if (e && "nextRpcRequestId" in e) {
                    const t = e.nextRpcRequestId || 0;
                    return e.nextRpcRequestId = t + 1, this.storeConnection(e)
                }
            }))
        }
        getNextRpcRequestId() {
            return O(this, void 0, void 0, (function* () {
                const e = yield this.getConnection();
                return e && "nextRpcRequestId" in e && e.nextRpcRequestId || 0
            }))
        }
    }
    class de {
        constructor(e, t) {
            this.storage = e, this.walletConnectionSource = t, this.type = "http", this.standardUniversalLink = "tc://", this.pendingRequests = new Map, this.session = null, this.gateway = null, this.pendingGateways = [], this.listeners = [], this.defaultOpeningDeadlineMS = 12e3, this.defaultRetryTimeoutMS = 2e3, this.connectionStorage = new ue(e)
        }
        static fromStorage(e) {
            return O(this, void 0, void 0, (function* () {
                const t = new ue(e),
                    n = yield t.getHttpConnection();
                return ce(n) ? new de(e, n.connectionSource) : new de(e, {
                    bridgeUrl: n.session.bridgeUrl
                })
            }))
        }
        connect(e, t) {
            var n;
            const r = oe(null == t ? void 0 : t.signal);
            null === (n = this.abortController) || void 0 === n || n.abort(), this.abortController = r, this.closeGateways();
            const o = new M;
            this.session = {
                sessionCrypto: o,
                bridgeUrl: "bridgeUrl" in this.walletConnectionSource ? this.walletConnectionSource.bridgeUrl : ""
            }, this.connectionStorage.storeConnection({
                type: "http",
                connectionSource: this.walletConnectionSource,
                sessionCrypto: o
            }).then((() => O(this, void 0, void 0, (function* () {
                r.signal.aborted || (yield ie((e => {
                    var n;
                    return this.openGateways(o, {
                        openingDeadlineMS: null !== (n = null == t ? void 0 : t.openingDeadlineMS) && void 0 !== n ? n : this.defaultOpeningDeadlineMS,
                        signal: null == e ? void 0 : e.signal
                    })
                }), {
                    attempts: Number.MAX_SAFE_INTEGER,
                    delayMs: this.defaultRetryTimeoutMS,
                    signal: r.signal
                }))
            }))));
            const i = "universalLink" in this.walletConnectionSource && this.walletConnectionSource.universalLink ? this.walletConnectionSource.universalLink : this.standardUniversalLink;
            return this.generateUniversalLink(i, e)
        }
        restoreConnection(e) {
            var t, n;
            return O(this, void 0, void 0, (function* () {
                const r = oe(null == e ? void 0 : e.signal);
                if (null === (t = this.abortController) || void 0 === t || t.abort(), this.abortController = r, r.signal.aborted) return;
                this.closeGateways();
                const o = yield this.connectionStorage.getHttpConnection();
                if (!o) return;
                if (r.signal.aborted) return;
                const i = null !== (n = null == e ? void 0 : e.openingDeadlineMS) && void 0 !== n ? n : this.defaultOpeningDeadlineMS;
                if (ce(o)) return this.session = {
                    sessionCrypto: o.sessionCrypto,
                    bridgeUrl: "bridgeUrl" in this.walletConnectionSource ? this.walletConnectionSource.bridgeUrl : ""
                }, yield this.openGateways(o.sessionCrypto, {
                    openingDeadlineMS: i,
                    signal: null == r ? void 0 : r.signal
                });
                if (Array.isArray(this.walletConnectionSource)) throw new N("Internal error. Connection source is array while WalletConnectionSourceHTTP was expected.");
                if (this.session = o.session, this.gateway && (se("Gateway is already opened, closing previous gateway"), yield this.gateway.close()), this.gateway = new le(this.storage, this.walletConnectionSource.bridgeUrl, o.session.sessionCrypto.sessionId, this.gatewayListener.bind(this), this.gatewayErrorsListener.bind(this)), !r.signal.aborted) {
                    this.listeners.forEach((e => e(o.connectEvent)));
                    try {
                        yield ie((e => this.gateway.registerSession({
                            openingDeadlineMS: i,
                            signal: e.signal
                        })), {
                            attempts: Number.MAX_SAFE_INTEGER,
                            delayMs: this.defaultRetryTimeoutMS,
                            signal: r.signal
                        })
                    } catch (s) {
                        return void(yield this.disconnect({
                            signal: r.signal
                        }))
                    }
                }
            }))
        }
        sendRequest(e, t) {
            const n = {};
            return "function" == typeof t ? n.onRequestSent = t : (n.onRequestSent = null == t ? void 0 : t.onRequestSent, n.signal = null == t ? void 0 : t.signal, n.attempts = null == t ? void 0 : t.attempts), new Promise(((t, r) => O(this, void 0, void 0, (function* () {
                var o;
                if (!this.gateway || !this.session || !("walletPublicKey" in this.session)) throw new N("Trying to send bridge request without session");
                const i = (yield this.connectionStorage.getNextRpcRequestId()).toString();
                yield this.connectionStorage.increaseNextRpcRequestId(), se("Send http-bridge request:", Object.assign(Object.assign({}, e), {
                    id: i
                }));
                const s = this.session.sessionCrypto.encrypt(JSON.stringify(Object.assign(Object.assign({}, e), {
                    id: i
                })), A(this.session.walletPublicKey));
                try {
                    yield this.gateway.send(s, this.session.walletPublicKey, e.method, {
                        attempts: null == n ? void 0 : n.attempts,
                        signal: null == n ? void 0 : n.signal
                    }), null === (o = null == n ? void 0 : n.onRequestSent) || void 0 === o || o.call(n), this.pendingRequests.set(i.toString(), t)
                } catch (a) {
                    r(a)
                }
            }))))
        }
        closeConnection() {
            this.closeGateways(), this.listeners = [], this.session = null, this.gateway = null
        }
        disconnect(e) {
            return O(this, void 0, void 0, (function* () {
                return new Promise((t => O(this, void 0, void 0, (function* () {
                    let n = !1,
                        r = null;
                    const o = () => {
                        n || (n = !0, this.removeBridgeAndSession().then(t))
                    };
                    try {
                        this.closeGateways();
                        const t = oe(null == e ? void 0 : e.signal);
                        r = setTimeout((() => {
                            t.abort()
                        }), this.defaultOpeningDeadlineMS), yield this.sendRequest({
                            method: "disconnect",
                            params: []
                        }, {
                            onRequestSent: o,
                            signal: t.signal,
                            attempts: 1
                        })
                    } catch (i) {
                        se("Disconnect error:", i), n || this.removeBridgeAndSession().then(t)
                    } finally {
                        r && clearTimeout(r), o()
                    }
                }))))
            }))
        }
        listen(e) {
            return this.listeners.push(e), () => this.listeners = this.listeners.filter((t => t !== e))
        }
        pause() {
            var e;
            null === (e = this.gateway) || void 0 === e || e.pause(), this.pendingGateways.forEach((e => e.pause()))
        }
        unPause() {
            return O(this, void 0, void 0, (function* () {
                const e = this.pendingGateways.map((e => e.unPause()));
                this.gateway && e.push(this.gateway.unPause()), yield Promise.all(e)
            }))
        }
        pendingGatewaysListener(e, t, n) {
            return O(this, void 0, void 0, (function* () {
                if (this.pendingGateways.includes(e)) return this.closeGateways({
                    except: e
                }), this.gateway && (se("Gateway is already opened, closing previous gateway"), yield this.gateway.close()), this.session.bridgeUrl = t, this.gateway = e, this.gateway.setErrorsListener(this.gatewayErrorsListener.bind(this)), this.gateway.setListener(this.gatewayListener.bind(this)), this.gatewayListener(n);
                yield e.close()
            }))
        }
        gatewayListener(e) {
            return O(this, void 0, void 0, (function* () {
                const t = JSON.parse(this.session.sessionCrypto.decrypt(T.decode(e.message).toUint8Array(), A(e.from)));
                if (se("Wallet message received:", t), !("event" in t)) {
                    const e = t.id.toString(),
                        n = this.pendingRequests.get(e);
                    return n ? (n(t), void this.pendingRequests.delete(e)) : void se(`Response id ${e} doesn't match any request's id`)
                }
                if (void 0 !== t.id) {
                    const e = yield this.connectionStorage.getLastWalletEventId();
                    if (void 0 !== e && t.id <= e) return void ae(`Received event id (=${t.id}) must be greater than stored last wallet event id (=${e}) `);
                    "connect" !== t.event && (yield this.connectionStorage.storeLastWalletEventId(t.id))
                }
                const n = this.listeners;
                "connect" === t.event && (yield this.updateSession(t, e.from)), "disconnect" === t.event && (se("Removing bridge and session: received disconnect event"), yield this.removeBridgeAndSession()), n.forEach((e => e(t)))
            }))
        }
        gatewayErrorsListener(e) {
            return O(this, void 0, void 0, (function* () {
                throw new N(`Bridge error ${JSON.stringify(e)}`)
            }))
        }
        updateSession(e, t) {
            return O(this, void 0, void 0, (function* () {
                this.session = Object.assign(Object.assign({}, this.session), {
                    walletPublicKey: t
                });
                const n = e.payload.items.find((e => "ton_addr" === e.name)),
                    r = Object.assign(Object.assign({}, e), {
                        payload: Object.assign(Object.assign({}, e.payload), {
                            items: [n]
                        })
                    });
                yield this.connectionStorage.storeConnection({
                    type: "http",
                    session: this.session,
                    lastWalletEventId: e.id,
                    connectEvent: r,
                    nextRpcRequestId: 0
                })
            }))
        }
        removeBridgeAndSession() {
            return O(this, void 0, void 0, (function* () {
                this.closeConnection(), yield this.connectionStorage.removeConnection()
            }))
        }
        generateUniversalLink(e, t) {
            return te(e) ? this.generateTGUniversalLink(e, t) : this.generateRegularUniversalLink(e, t)
        }
        generateRegularUniversalLink(e, t) {
            const n = new URL(e);
            return n.searchParams.append("v", 2..toString()), n.searchParams.append("id", this.session.sessionCrypto.sessionId), n.searchParams.append("r", JSON.stringify(t)), n.toString()
        }
        generateTGUniversalLink(e, t) {
            const n = "tonconnect-" + ne(this.generateRegularUniversalLink("about:blank", t).split("?")[1]),
                r = this.convertToDirectLink(e),
                o = new URL(r);
            return o.searchParams.append("startapp", n), o.toString()
        }
        convertToDirectLink(e) {
            const t = new URL(e);
            return t.searchParams.has("attach") && (t.searchParams.delete("attach"), t.pathname += "/start"), t.toString()
        }
        openGateways(e, t) {
            return O(this, void 0, void 0, (function* () {
                return Array.isArray(this.walletConnectionSource) ? (this.pendingGateways.map((e => e.close().catch())), this.pendingGateways = this.walletConnectionSource.map((t => {
                    const n = new le(this.storage, t.bridgeUrl, e.sessionId, (() => {}), (() => {}));
                    return n.setListener((e => this.pendingGatewaysListener(n, t.bridgeUrl, e))), n
                })), void(yield Promise.allSettled(this.pendingGateways.map((e => ie((n => {
                    var r;
                    return this.pendingGateways.some((t => t === e)) ? e.registerSession({
                        openingDeadlineMS: null !== (r = null == t ? void 0 : t.openingDeadlineMS) && void 0 !== r ? r : this.defaultOpeningDeadlineMS,
                        signal: n.signal
                    }) : e.close()
                }), {
                    attempts: Number.MAX_SAFE_INTEGER,
                    delayMs: this.defaultRetryTimeoutMS,
                    signal: null == t ? void 0 : t.signal
                })))))) : (this.gateway && (se("Gateway is already opened, closing previous gateway"), yield this.gateway.close()), this.gateway = new le(this.storage, this.walletConnectionSource.bridgeUrl, e.sessionId, this.gatewayListener.bind(this), this.gatewayErrorsListener.bind(this)), yield this.gateway.registerSession({
                    openingDeadlineMS: null == t ? void 0 : t.openingDeadlineMS,
                    signal: null == t ? void 0 : t.signal
                }))
            }))
        }
        closeGateways(e) {
            var t;
            null === (t = this.gateway) || void 0 === t || t.close(), this.pendingGateways.filter((t => t !== (null == e ? void 0 : e.except))).forEach((e => e.close())), this.pendingGateways = []
        }
    }

    function he(e, t) {
        return fe(e, [t])
    }

    function fe(e, t) {
        return !(!e || "object" != typeof e) && t.every((t => t in e))
    }
    class ge {
        constructor() {
            this.storage = {}
        }
        static getInstance() {
            return ge.instance || (ge.instance = new ge), ge.instance
        }
        get length() {
            return Object.keys(this.storage).length
        }
        clear() {
            this.storage = {}
        }
        getItem(e) {
            var t;
            return null !== (t = this.storage[e]) && void 0 !== t ? t : null
        }
        key(e) {
            var t;
            const n = Object.keys(this.storage);
            return e < 0 || e >= n.length ? null : null !== (t = n[e]) && void 0 !== t ? t : null
        }
        removeItem(e) {
            delete this.storage[e]
        }
        setItem(e, t) {
            this.storage[e] = t
        }
    }

    function pe() {
        if ("undefined" != typeof window) return window
    }

    function we() {
        var e;
        const t = null === (e = pe()) || void 0 === e ? void 0 : e.location.origin;
        return t ? t + "/tonconnect-manifest.json" : ""
    }

    function me() {
        if (function () {
                try {
                    return "undefined" != typeof localStorage
                } catch (e) {
                    return !1
                }
            }()) return localStorage;
        if ("undefined" != typeof process && null != process.versions && null != process.versions.node) throw new N("`localStorage` is unavailable, but it is required for TonConnect. For more details, see https://github.com/ton-connect/sdk/tree/main/packages/sdk#init-connector");
        return ge.getInstance()
    }
    class ve {
        constructor(e, t) {
            this.injectedWalletKey = t, this.type = "injected", this.unsubscribeCallback = null, this.listenSubscriptions = !1, this.listeners = [];
            const n = ve.window;
            if (!ve.isWindowContainsWallet(n, t)) throw new H;
            this.connectionStorage = new ue(e), this.injectedWallet = n[t].tonconnect
        }
        static fromStorage(e) {
            return O(this, void 0, void 0, (function* () {
                const t = new ue(e),
                    n = yield t.getInjectedConnection();
                return new ve(e, n.jsBridgeKey)
            }))
        }
        static isWalletInjected(e) {
            return ve.isWindowContainsWallet(this.window, e)
        }
        static isInsideWalletBrowser(e) {
            return !!ve.isWindowContainsWallet(this.window, e) && this.window[e].tonconnect.isWalletBrowser
        }
        static getCurrentlyInjectedWallets() {
            if (!this.window) return [];
            return function () {
                const e = pe();
                if (!e) return [];
                try {
                    return Object.keys(e)
                } catch (t) {
                    return []
                }
            }().filter((([e, t]) => function (e) {
                try {
                    return !(!he(e, "tonconnect") || !he(e.tonconnect, "walletInfo")) && fe(e.tonconnect.walletInfo, ["name", "app_name", "image", "about_url", "platforms"])
                } catch (t) {
                    return !1
                }
            }(t))).map((([e, t]) => ({
                name: t.tonconnect.walletInfo.name,
                appName: t.tonconnect.walletInfo.app_name,
                aboutUrl: t.tonconnect.walletInfo.about_url,
                imageUrl: t.tonconnect.walletInfo.image,
                tondns: t.tonconnect.walletInfo.tondns,
                jsBridgeKey: e,
                injected: !0,
                embedded: t.tonconnect.isWalletBrowser,
                platforms: t.tonconnect.walletInfo.platforms
            })))
        }
        static isWindowContainsWallet(e, t) {
            return !!e && t in e && "object" == typeof e[t] && "tonconnect" in e[t]
        }
        connect(e) {
            this._connect(2, e)
        }
        restoreConnection() {
            return O(this, void 0, void 0, (function* () {
                try {
                    se("Injected Provider restoring connection...");
                    const e = yield this.injectedWallet.restoreConnection();
                    se("Injected Provider restoring connection response", e), "connect" === e.event ? (this.makeSubscriptions(), this.listeners.forEach((t => t(e)))) : yield this.connectionStorage.removeConnection()
                } catch (e) {
                    yield this.connectionStorage.removeConnection(), console.error(e)
                }
            }))
        }
        closeConnection() {
            this.listenSubscriptions && this.injectedWallet.disconnect(), this.closeAllListeners()
        }
        disconnect() {
            return O(this, void 0, void 0, (function* () {
                return new Promise((e => {
                    const t = () => {
                        this.closeAllListeners(), this.connectionStorage.removeConnection().then(e)
                    };
                    try {
                        this.injectedWallet.disconnect(), t()
                    } catch (n) {
                        se(n), this.sendRequest({
                            method: "disconnect",
                            params: []
                        }, t)
                    }
                }))
            }))
        }
        closeAllListeners() {
            var e;
            this.listenSubscriptions = !1, this.listeners = [], null === (e = this.unsubscribeCallback) || void 0 === e || e.call(this)
        }
        listen(e) {
            return this.listeners.push(e), () => this.listeners = this.listeners.filter((t => t !== e))
        }
        sendRequest(e, t) {
            var n;
            return O(this, void 0, void 0, (function* () {
                const r = {};
                "function" == typeof t ? r.onRequestSent = t : (r.onRequestSent = null == t ? void 0 : t.onRequestSent, r.signal = null == t ? void 0 : t.signal);
                const o = (yield this.connectionStorage.getNextRpcRequestId()).toString();
                yield this.connectionStorage.increaseNextRpcRequestId(), se("Send injected-bridge request:", Object.assign(Object.assign({}, e), {
                    id: o
                }));
                const i = this.injectedWallet.send(Object.assign(Object.assign({}, e), {
                    id: o
                }));
                return i.then((e => se("Wallet message received:", e))), null === (n = null == r ? void 0 : r.onRequestSent) || void 0 === n || n.call(r), i
            }))
        }
        _connect(e, t) {
            return O(this, void 0, void 0, (function* () {
                try {
                    se(`Injected Provider connect request: protocolVersion: ${e}, message:`, t);
                    const n = yield this.injectedWallet.connect(e, t);
                    se("Injected Provider connect response:", n), "connect" === n.event && (yield this.updateSession(), this.makeSubscriptions()), this.listeners.forEach((e => e(n)))
                } catch (n) {
                    se("Injected Provider connect error:", n);
                    const e = {
                        event: "connect_error",
                        payload: {
                            code: 0,
                            message: null == n ? void 0 : n.toString()
                        }
                    };
                    this.listeners.forEach((t => t(e)))
                }
            }))
        }
        makeSubscriptions() {
            this.listenSubscriptions = !0, this.unsubscribeCallback = this.injectedWallet.listen((e => {
                se("Wallet message received:", e), this.listenSubscriptions && this.listeners.forEach((t => t(e))), "disconnect" === e.event && this.disconnect()
            }))
        }
        updateSession() {
            return this.connectionStorage.storeConnection({
                type: "injected",
                jsBridgeKey: this.injectedWalletKey,
                nextRpcRequestId: 0
            })
        }
    }
    ve.window = pe();
    class ye {
        constructor() {
            this.localStorage = me()
        }
        getItem(e) {
            return O(this, void 0, void 0, (function* () {
                return this.localStorage.getItem(e)
            }))
        }
        removeItem(e) {
            return O(this, void 0, void 0, (function* () {
                this.localStorage.removeItem(e)
            }))
        }
        setItem(e, t) {
            return O(this, void 0, void 0, (function* () {
                this.localStorage.setItem(e, t)
            }))
        }
    }

    function be(e) {
        return xe(e) && e.injected
    }

    function Ce(e) {
        return be(e) && e.embedded
    }

    function xe(e) {
        return "jsBridgeKey" in e
    }

    function _e(e) {
        return "bridgeUrl" in e
    }
    const ke = [{
        app_name: "telegram-wallet",
        name: "Wallet",
        image: "https://wallet.tg/images/logo-288.png",
        about_url: "https://wallet.tg/",
        universal_url: "https://t.me/wallet?attach=wallet",
        bridge: [{
            type: "sse",
            url: "https://bridge.ton.space/bridge"
        }],
        platforms: ["ios", "android", "macos", "windows", "linux"]
    }];
    class Se {
        constructor(e) {
            this.walletsListCache = null, this.walletsListCacheCreationTimestamp = null, this.walletsListSource = "wallets-v2.json", (null == e ? void 0 : e.walletsListSource) && (this.walletsListSource = e.walletsListSource), (null == e ? void 0 : e.cacheTTLMs) && (this.cacheTTLMs = e.cacheTTLMs)
        }
        getWallets() {
            return O(this, void 0, void 0, (function* () {
                return this.cacheTTLMs && this.walletsListCacheCreationTimestamp && Date.now() > this.walletsListCacheCreationTimestamp + this.cacheTTLMs && (this.walletsListCache = null), this.walletsListCache || (this.walletsListCache = this.fetchWalletsList(), this.walletsListCache.then((() => {
                    this.walletsListCacheCreationTimestamp = Date.now()
                })).catch((() => {
                    this.walletsListCache = null, this.walletsListCacheCreationTimestamp = null
                }))), this.walletsListCache
            }))
        }
        getEmbeddedWallet() {
            return O(this, void 0, void 0, (function* () {
                const e = (yield this.getWallets()).filter(Ce);
                return 1 !== e.length ? null : e[0]
            }))
        }
        fetchWalletsList() {
            return O(this, void 0, void 0, (function* () {
                let e = [];
                try {
                    const t = yield fetch(this.walletsListSource);
                    if (e = yield t.json(), !Array.isArray(e)) throw new K("Wrong wallets list format, wallets list must be an array.");
                    const n = e.filter((e => !this.isCorrectWalletConfigDTO(e)));
                    n.length && (ae(`Wallet(s) ${n.map((e=>e.name)).join(", ")} config format is wrong. They were removed from the wallets list.`), e = e.filter((e => this.isCorrectWalletConfigDTO(e))))
                } catch (n) {
                    ae(n), e = ke
                }
                let t = [];
                try {
                    t = ve.getCurrentlyInjectedWallets()
                } catch (n) {
                    ae(n)
                }
                return this.mergeWalletsLists(this.walletConfigDTOListToWalletConfigList(e), t)
            }))
        }
        walletConfigDTOListToWalletConfigList(e) {
            return e.map((e => {
                const t = {
                    name: e.name,
                    appName: e.app_name,
                    imageUrl: e.image,
                    aboutUrl: e.about_url,
                    tondns: e.tondns,
                    platforms: e.platforms
                };
                return e.bridge.forEach((n => {
                    if ("sse" === n.type && (t.bridgeUrl = n.url, t.universalLink = e.universal_url, t.deepLink = e.deepLink), "js" === n.type) {
                        const e = n.key;
                        t.jsBridgeKey = e, t.injected = ve.isWalletInjected(e), t.embedded = ve.isInsideWalletBrowser(e)
                    }
                })), t
            }))
        }
        mergeWalletsLists(e, t) {
            return [...new Set(e.concat(t).map((e => e.name))).values()].map((n => {
                const r = e.find((e => e.name === n)),
                    o = t.find((e => e.name === n));
                return Object.assign(Object.assign({}, r && Object.assign({}, r)), o && Object.assign({}, o))
            }))
        }
        isCorrectWalletConfigDTO(e) {
            if (!e || "object" != typeof e) return !1;
            if (!("name" in e && "image" in e && "about_url" in e && "platforms" in e && "app_name" in e)) return !1;
            if (!e.platforms || !Array.isArray(e.platforms) || !e.platforms.length) return !1;
            if (!("bridge" in e) || !Array.isArray(e.bridge) || !e.bridge.length) return !1;
            const t = e.bridge;
            if (t.some((e => !e || "object" != typeof e || !("type" in e)))) return !1;
            const n = t.find((e => "sse" === e.type));
            if (n && (!("url" in n) || !n.url || !e.universal_url)) return !1;
            const r = t.find((e => "js" === e.type));
            return !!(!r || "key" in r && r.key)
        }
    }
    class Ee extends N {
        get info() {
            return "Wallet doesn't support requested feature method."
        }
        constructor(...e) {
            super(...e), Object.setPrototypeOf(this, Ee.prototype)
        }
    }

    function Re(e, t) {
        const n = e.includes("SendTransaction"),
            r = e.find((e => e && "object" == typeof e && "SendTransaction" === e.name));
        if (!n && !r) throw new Ee("Wallet doesn't support SendTransaction feature.");
        if (r && void 0 !== r.maxMessages) {
            if (r.maxMessages < t.requiredMessagesNumber) throw new Ee(`Wallet is not able to handle such SendTransaction request. Max support messages number is ${r.maxMessages}, but ${t.requiredMessagesNumber} is required.`)
        } else ! function (...e) {
            try {
                console.warn("[TON_CONNECT_SDK]", ...e)
            } catch (t) {}
        }("Connected wallet didn't provide information about max allowed messages in the SendTransaction request. Request may be rejected by the wallet.")
    }

    function Te() {
        return {
            type: "request-version"
        }
    }

    function Le(e) {
        return {
            type: "response-version",
            version: e
        }
    }

    function Ae(e) {
        return {
            ton_connect_sdk_lib: e.ton_connect_sdk_lib,
            ton_connect_ui_lib: e.ton_connect_ui_lib
        }
    }

    function Me(e, t) {
        var n, r, o, i, s, a, l, c;
        const u = (null === (n = null == t ? void 0 : t.connectItems) || void 0 === n ? void 0 : n.tonProof) && "proof" in t.connectItems.tonProof ? "ton_proof" : "ton_addr";
        return {
            wallet_address: null !== (o = null === (r = null == t ? void 0 : t.account) || void 0 === r ? void 0 : r.address) && void 0 !== o ? o : null,
            wallet_type: null !== (i = null == t ? void 0 : t.device.appName) && void 0 !== i ? i : null,
            wallet_version: null !== (s = null == t ? void 0 : t.device.appVersion) && void 0 !== s ? s : null,
            auth_type: u,
            custom_data: Object.assign({
                chain_id: null !== (l = null === (a = null == t ? void 0 : t.account) || void 0 === a ? void 0 : a.chain) && void 0 !== l ? l : null,
                provider: null !== (c = null == t ? void 0 : t.provider) && void 0 !== c ? c : null
            }, Ae(e))
        }
    }

    function Oe(e) {
        return {
            type: "connection-started",
            custom_data: Ae(e)
        }
    }

    function Ne(e, t) {
        return Object.assign({
            type: "connection-completed",
            is_success: !0
        }, Me(e, t))
    }

    function Pe(e, t, n) {
        return {
            type: "connection-error",
            is_success: !1,
            error_message: t,
            error_code: null != n ? n : null,
            custom_data: Ae(e)
        }
    }

    function $e(e) {
        return {
            type: "connection-restoring-started",
            custom_data: Ae(e)
        }
    }

    function Ie(e, t) {
        return Object.assign({
            type: "connection-restoring-completed",
            is_success: !0
        }, Me(e, t))
    }

    function Ue(e, t) {
        return {
            type: "connection-restoring-error",
            is_success: !1,
            error_message: t,
            custom_data: Ae(e)
        }
    }

    function We(e, t) {
        var n, r, o, i;
        return {
            valid_until: null !== (n = String(t.validUntil)) && void 0 !== n ? n : null,
            from: null !== (i = null !== (r = t.from) && void 0 !== r ? r : null === (o = null == e ? void 0 : e.account) || void 0 === o ? void 0 : o.address) && void 0 !== i ? i : null,
            messages: t.messages.map((e => {
                var t, n;
                return {
                    address: null !== (t = e.address) && void 0 !== t ? t : null,
                    amount: null !== (n = e.amount) && void 0 !== n ? n : null
                }
            }))
        }
    }

    function je(e, t, n) {
        return Object.assign(Object.assign({
            type: "transaction-sent-for-signature"
        }, Me(e, t)), We(t, n))
    }

    function Be(e, t, n, r) {
        return Object.assign(Object.assign({
            type: "transaction-signed",
            is_success: !0,
            signed_transaction: r.boc
        }, Me(e, t)), We(t, n))
    }

    function De(e, t, n, r, o) {
        return Object.assign(Object.assign({
            type: "transaction-signing-failed",
            is_success: !1,
            error_message: r,
            error_code: null != o ? o : null
        }, Me(e, t)), We(t, n))
    }

    function He(e, t, n) {
        return Object.assign({
            type: "disconnection",
            scope: n
        }, Me(e, t))
    }
    class Ve {
        constructor() {
            this.window = pe()
        }
        dispatchEvent(e, t) {
            var n;
            return O(this, void 0, void 0, (function* () {
                const r = new CustomEvent(e, {
                    detail: t
                });
                null === (n = this.window) || void 0 === n || n.dispatchEvent(r)
            }))
        }
        addEventListener(e, t, n) {
            var r;
            return O(this, void 0, void 0, (function* () {
                return null === (r = this.window) || void 0 === r || r.addEventListener(e, t, n), () => {
                    var n;
                    return null === (n = this.window) || void 0 === n ? void 0 : n.removeEventListener(e, t)
                }
            }))
        }
    }
    class Ke {
        constructor(e) {
            var t;
            this.eventPrefix = "ton-connect-", this.tonConnectUiVersion = null, this.eventDispatcher = null !== (t = null == e ? void 0 : e.eventDispatcher) && void 0 !== t ? t : new Ve, this.tonConnectSdkVersion = e.tonConnectSdkVersion, this.init().catch()
        }
        get version() {
            return Ae({
                ton_connect_sdk_lib: this.tonConnectSdkVersion,
                ton_connect_ui_lib: this.tonConnectUiVersion
            })
        }
        init() {
            return O(this, void 0, void 0, (function* () {
                try {
                    yield this.setRequestVersionHandler(), this.tonConnectUiVersion = yield this.requestTonConnectUiVersion()
                } catch (e) {}
            }))
        }
        setRequestVersionHandler() {
            return O(this, void 0, void 0, (function* () {
                yield this.eventDispatcher.addEventListener("ton-connect-request-version", (() => O(this, void 0, void 0, (function* () {
                    yield this.eventDispatcher.dispatchEvent("ton-connect-response-version", Le(this.tonConnectSdkVersion))
                }))))
            }))
        }
        requestTonConnectUiVersion() {
            return O(this, void 0, void 0, (function* () {
                return new Promise(((e, t) => O(this, void 0, void 0, (function* () {
                    try {
                        yield this.eventDispatcher.addEventListener("ton-connect-ui-response-version", (t => {
                            e(t.detail.version)
                        }), {
                            once: !0
                        }), yield this.eventDispatcher.dispatchEvent("ton-connect-ui-request-version", {
                            type: "request-version"
                        })
                    } catch (n) {
                        t(n)
                    }
                }))))
            }))
        }
        dispatchUserActionEvent(e) {
            try {
                this.eventDispatcher.dispatchEvent(`${this.eventPrefix}${e.type}`, e).catch()
            } catch (t) {}
        }
        trackConnectionStarted(...e) {
            try {
                const t = Oe(this.version, ...e);
                this.dispatchUserActionEvent(t)
            } catch (t) {}
        }
        trackConnectionCompleted(...e) {
            try {
                const t = Ne(this.version, ...e);
                this.dispatchUserActionEvent(t)
            } catch (t) {}
        }
        trackConnectionError(...e) {
            try {
                const t = Pe(this.version, ...e);
                this.dispatchUserActionEvent(t)
            } catch (t) {}
        }
        trackConnectionRestoringStarted(...e) {
            try {
                const t = $e(this.version, ...e);
                this.dispatchUserActionEvent(t)
            } catch (t) {}
        }
        trackConnectionRestoringCompleted(...e) {
            try {
                const t = Ie(this.version, ...e);
                this.dispatchUserActionEvent(t)
            } catch (t) {}
        }
        trackConnectionRestoringError(...e) {
            try {
                const t = Ue(this.version, ...e);
                this.dispatchUserActionEvent(t)
            } catch (t) {}
        }
        trackDisconnection(...e) {
            try {
                const t = He(this.version, ...e);
                this.dispatchUserActionEvent(t)
            } catch (t) {}
        }
        trackTransactionSentForSignature(...e) {
            try {
                const t = je(this.version, ...e);
                this.dispatchUserActionEvent(t)
            } catch (t) {}
        }
        trackTransactionSigned(...e) {
            try {
                const t = Be(this.version, ...e);
                this.dispatchUserActionEvent(t)
            } catch (t) {}
        }
        trackTransactionSigningFailed(...e) {
            try {
                const t = De(this.version, ...e);
                this.dispatchUserActionEvent(t)
            } catch (t) {}
        }
    }
    class Fe {
        constructor(e) {
            if (this.walletsList = new Se, this._wallet = null, this.provider = null, this.statusChangeSubscriptions = [], this.statusChangeErrorSubscriptions = [], this.dappSettings = {
                    manifestUrl: (null == e ? void 0 : e.manifestUrl) || we(),
                    storage: (null == e ? void 0 : e.storage) || new ye
                }, this.walletsList = new Se({
                    walletsListSource: null == e ? void 0 : e.walletsListSource,
                    cacheTTLMs: null == e ? void 0 : e.walletsListCacheTTLMs
                }), this.tracker = new Ke({
                    eventDispatcher: null == e ? void 0 : e.eventDispatcher,
                    tonConnectSdkVersion: "3.0.5"
                }), !this.dappSettings.manifestUrl) throw new P("Dapp tonconnect-manifest.json must be specified if window.location.origin is undefined. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest");
            this.bridgeConnectionStorage = new ue(this.dappSettings.storage), (null == e ? void 0 : e.disableAutoPauseConnection) || this.addWindowFocusAndBlurSubscriptions()
        }
        static getWallets() {
            return this.walletsList.getWallets()
        }
        get connected() {
            return null !== this._wallet
        }
        get account() {
            var e;
            return (null === (e = this._wallet) || void 0 === e ? void 0 : e.account) || null
        }
        get wallet() {
            return this._wallet
        }
        set wallet(e) {
            this._wallet = e, this.statusChangeSubscriptions.forEach((e => e(this._wallet)))
        }
        getWallets() {
            return this.walletsList.getWallets()
        }
        onStatusChange(e, t) {
            return this.statusChangeSubscriptions.push(e), t && this.statusChangeErrorSubscriptions.push(t), () => {
                this.statusChangeSubscriptions = this.statusChangeSubscriptions.filter((t => t !== e)), t && (this.statusChangeErrorSubscriptions = this.statusChangeErrorSubscriptions.filter((e => e !== t)))
            }
        }
        connect(e, t) {
            var n, r;
            const o = {};
            if ("object" == typeof t && "tonProof" in t && (o.request = t), "object" == typeof t && ("openingDeadlineMS" in t || "signal" in t || "request" in t) && (o.request = null == t ? void 0 : t.request, o.openingDeadlineMS = null == t ? void 0 : t.openingDeadlineMS, o.signal = null == t ? void 0 : t.signal), this.connected) throw new U;
            const i = oe(null == o ? void 0 : o.signal);
            if (null === (n = this.abortController) || void 0 === n || n.abort(), this.abortController = i, i.signal.aborted) throw new N("Connection was aborted");
            return null === (r = this.provider) || void 0 === r || r.closeConnection(), this.provider = this.createProvider(e), i.signal.addEventListener("abort", (() => {
                var e;
                null === (e = this.provider) || void 0 === e || e.closeConnection(), this.provider = null
            })), this.tracker.trackConnectionStarted(), this.provider.connect(this.createConnectRequest(null == o ? void 0 : o.request), {
                openingDeadlineMS: null == o ? void 0 : o.openingDeadlineMS,
                signal: i.signal
            })
        }
        restoreConnection(e) {
            var t, n;
            return O(this, void 0, void 0, (function* () {
                this.tracker.trackConnectionRestoringStarted();
                const r = oe(null == e ? void 0 : e.signal);
                if (null === (t = this.abortController) || void 0 === t || t.abort(), this.abortController = r, r.signal.aborted) return void this.tracker.trackConnectionRestoringError("Connection restoring was aborted");
                const [o, i] = yield Promise.all([this.bridgeConnectionStorage.storedConnectionType(), this.walletsList.getEmbeddedWallet()]);
                if (r.signal.aborted) return void this.tracker.trackConnectionRestoringError("Connection restoring was aborted");
                let s = null;
                try {
                    switch (o) {
                        case "http":
                            s = yield de.fromStorage(this.dappSettings.storage);
                            break;
                        case "injected":
                            s = yield ve.fromStorage(this.dappSettings.storage);
                            break;
                        default:
                            if (!i) return;
                            s = this.createProvider(i)
                    }
                } catch (u) {
                    return this.tracker.trackConnectionRestoringError("Provider is not restored"), yield this.bridgeConnectionStorage.removeConnection(), null == s || s.closeConnection(), void(s = null)
                }
                if (r.signal.aborted) return null == s || s.closeConnection(), void this.tracker.trackConnectionRestoringError("Connection restoring was aborted");
                if (!s) return ae("Provider is not restored"), void this.tracker.trackConnectionRestoringError("Provider is not restored");
                null === (n = this.provider) || void 0 === n || n.closeConnection(), this.provider = s, s.listen(this.walletEventsListener.bind(this));
                const a = () => {
                    this.tracker.trackConnectionRestoringError("Connection restoring was aborted"), null == s || s.closeConnection(), s = null
                };
                r.signal.addEventListener("abort", a);
                const l = ie((t => O(this, void 0, void 0, (function* () {
                        yield null == s ? void 0 : s.restoreConnection({
                            openingDeadlineMS: null == e ? void 0 : e.openingDeadlineMS,
                            signal: t.signal
                        }), r.signal.removeEventListener("abort", a), this.connected ? this.tracker.trackConnectionRestoringCompleted(this.wallet) : this.tracker.trackConnectionRestoringError("Connection restoring failed")
                    }))), {
                        attempts: Number.MAX_SAFE_INTEGER,
                        delayMs: 2e3,
                        signal: null == e ? void 0 : e.signal
                    }),
                    c = new Promise((e => setTimeout((() => e()), 12e3)));
                return Promise.race([l, c])
            }))
        }
        sendTransaction(e, t) {
            return O(this, void 0, void 0, (function* () {
                const n = {};
                "function" == typeof t ? n.onRequestSent = t : (n.onRequestSent = null == t ? void 0 : t.onRequestSent, n.signal = null == t ? void 0 : t.signal);
                const r = oe(null == n ? void 0 : n.signal);
                if (r.signal.aborted) throw new N("Transaction sending was aborted");
                this.checkConnection(), Re(this.wallet.device.features, {
                    requiredMessagesNumber: e.messages.length
                }), this.tracker.trackTransactionSentForSignature(this.wallet, e);
                const {
                    validUntil: o
                } = e, i = function (e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var o = 0;
                        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                    }
                    return n
                }(e, ["validUntil"]), s = e.from || this.account.address, a = e.network || this.account.chain, l = yield this.provider.sendRequest(J.convertToRpcRequest(Object.assign(Object.assign({}, i), {
                    valid_until: o,
                    from: s,
                    network: a
                })), {
                    onRequestSent: n.onRequestSent,
                    signal: r.signal
                });
                if (J.isError(l)) return this.tracker.trackTransactionSigningFailed(this.wallet, e, l.error.message, l.error.code), J.parseAndThrowError(l);
                const c = J.convertFromRpcResponse(l);
                return this.tracker.trackTransactionSigned(this.wallet, e, c), c
            }))
        }
        disconnect(e) {
            var t;
            return O(this, void 0, void 0, (function* () {
                if (!this.connected) throw new W;
                const n = oe(null == e ? void 0 : e.signal),
                    r = this.abortController;
                if (this.abortController = n, n.signal.aborted) throw new N("Disconnect was aborted");
                this.onWalletDisconnected("dapp"), yield null === (t = this.provider) || void 0 === t ? void 0 : t.disconnect({
                    signal: n.signal
                }), null == r || r.abort()
            }))
        }
        pauseConnection() {
            var e;
            "http" === (null === (e = this.provider) || void 0 === e ? void 0 : e.type) && this.provider.pause()
        }
        unPauseConnection() {
            var e;
            return "http" !== (null === (e = this.provider) || void 0 === e ? void 0 : e.type) ? Promise.resolve() : this.provider.unPause()
        }
        addWindowFocusAndBlurSubscriptions() {
            const e = function () {
                if ("undefined" != typeof document) return document
            }();
            if (e) try {
                e.addEventListener("visibilitychange", (() => {
                    e.hidden ? this.pauseConnection() : this.unPauseConnection().catch()
                }))
            } catch (t) {
                ae("Cannot subscribe to the document.visibilitychange: ", t)
            }
        }
        createProvider(e) {
            let t;
            return t = !Array.isArray(e) && "jsBridgeKey" in e ? new ve(this.dappSettings.storage, e.jsBridgeKey) : new de(this.dappSettings.storage, e), t.listen(this.walletEventsListener.bind(this)), t
        }
        walletEventsListener(e) {
            switch (e.event) {
                case "connect":
                    this.onWalletConnected(e.payload);
                    break;
                case "connect_error":
                    this.onWalletConnectError(e.payload);
                    break;
                case "disconnect":
                    this.onWalletDisconnected("wallet")
            }
        }
        onWalletConnected(e) {
            const t = e.items.find((e => "ton_addr" === e.name)),
                n = e.items.find((e => "ton_proof" === e.name));
            if (!t) throw new N("ton_addr connection item was not found");
            const r = {
                device: e.device,
                provider: this.provider.type,
                account: {
                    address: t.address,
                    chain: t.network,
                    walletStateInit: t.walletStateInit,
                    publicKey: t.publicKey
                }
            };
            n && (r.connectItems = {
                tonProof: n
            }), this.wallet = r, this.tracker.trackConnectionCompleted(r)
        }
        onWalletConnectError(e) {
            const t = G.parseError(e);
            if (this.statusChangeErrorSubscriptions.forEach((e => e(t))), se(t), this.tracker.trackConnectionError(e.message, e.code), t instanceof I || t instanceof $) throw ae(t), t
        }
        onWalletDisconnected(e) {
            this.tracker.trackDisconnection(this.wallet, e), this.wallet = null
        }
        checkConnection() {
            if (!this.connected) throw new W
        }
        createConnectRequest(e) {
            const t = [{
                name: "ton_addr"
            }];
            return (null == e ? void 0 : e.tonProof) && t.push({
                name: "ton_proof",
                payload: e.tonProof
            }), {
                manifestUrl: this.dappSettings.manifestUrl,
                items: t
            }
        }
    }
    Fe.walletsList = new Se, Fe.isWalletInjected = e => ve.isWalletInjected(e), Fe.isInsideWalletBrowser = e => ve.isInsideWalletBrowser(e);
    const qe = 81,
        ze = 128;

    function Ze(e, t = !1) {
        const {
            wc: n,
            hex: r
        } = function (e) {
            if (!e.includes(":")) throw new F(`Wrong address ${e}. Address must include ":".`);
            const t = e.split(":");
            if (2 !== t.length) throw new F(`Wrong address ${e}. Address must include ":" only once.`);
            const n = parseInt(t[0]);
            if (0 !== n && -1 !== n) throw new F(`Wrong address ${e}. WC must be eq 0 or -1, but ${n} received.`);
            const r = t[1];
            if (64 !== (null == r ? void 0 : r.length)) throw new F(`Wrong address ${e}. Hex part must be 64bytes length, but ${null==r?void 0:r.length} received.`);
            return {
                wc: n,
                hex: Ye(r)
            }
        }(e);
        let o = qe;
        t && (o |= ze);
        const i = new Int8Array(34);
        i[0] = o, i[1] = n, i.set(r, 2);
        const s = new Uint8Array(36);
        return s.set(i), s.set(function (e) {
            const t = 4129;
            let n = 0;
            const r = new Uint8Array(e.length + 2);
            r.set(e);
            for (let o of r) {
                let e = 128;
                for (; e > 0;) n <<= 1, o & e && (n += 1), e >>= 1, n > 65535 && (n &= 65535, n ^= t)
            }
            return new Uint8Array([Math.floor(n / 256), n % 256])
        }(i), 34), T.encode(s).replace(/\+/g, "-").replace(/\//g, "_")
    }
    const Ge = {};
    for (let Xu = 0; Xu <= 255; Xu++) {
        let e = Xu.toString(16);
        e.length < 2 && (e = "0" + e), Ge[e] = Xu
    }

    function Ye(e) {
        const t = (e = e.toLowerCase()).length;
        if (t % 2 != 0) throw new q("Hex string must have length a multiple of 2: " + e);
        const n = t / 2,
            r = new Uint8Array(n);
        for (let o = 0; o < n; o++) {
            const t = 2 * o,
                n = e.substring(t, t + 2);
            if (!Ge.hasOwnProperty(n)) throw new q("Invalid hex character: " + n);
            r[o] = Ge[n]
        }
        return r
    }
    const Qe = {};
    const Je = Symbol("solid-proxy"),
        Xe = Symbol("solid-track"),
        et = {
            equals: (e, t) => e === t
        };
    let tt = Pt;
    const nt = 1,
        rt = 2,
        ot = {
            owned: null,
            cleanups: null,
            context: null,
            owner: null
        },
        it = {};
    var st = null;
    let at, lt = null,
        ct = null,
        ut = null,
        dt = null,
        ht = 0;

    function ft(e, t) {
        const n = ct,
            r = st,
            o = 0 === e.length,
            i = o ? ot : {
                owned: null,
                cleanups: null,
                context: null,
                owner: void 0 === t ? r : t
            },
            s = o ? e : () => e((() => Ct((() => Wt(i)))));
        st = i, ct = null;
        try {
            return Nt(s, !0)
        } finally {
            ct = n, st = r
        }
    }

    function gt(e, t) {
        const n = {
            value: e,
            observers: null,
            observerSlots: null,
            comparator: (t = t ? Object.assign({}, et, t) : et).equals || void 0
        };
        return [Tt.bind(n), e => ("function" == typeof e && (e = e(n.value)), Lt(n, e))]
    }

    function pt(e, t, n) {
        At(Mt(e, t, !0, nt))
    }

    function wt(e, t, n) {
        At(Mt(e, t, !1, nt))
    }

    function mt(e, t, n) {
        tt = $t;
        const r = Mt(e, t, !1, nt);
        r.user = !0, dt ? dt.push(r) : At(r)
    }

    function vt(e, t, n) {
        n = n ? Object.assign({}, et, n) : et;
        const r = Mt(e, t, !0, 0);
        return r.observers = null, r.observerSlots = null, r.comparator = n.equals || void 0, At(r), Tt.bind(r)
    }

    function yt(e, t, n) {
        let r, o, i;
        2 === arguments.length && "object" == typeof t || 1 === arguments.length ? (r = !0, o = e, i = t || {}) : (r = e, o = t, i = n || {});
        let s = null,
            a = it,
            l = null,
            c = !1,
            u = "initialValue" in i,
            d = "function" == typeof r && vt(r);
        const h = new Set,
            [f, g] = (i.storage || gt)(i.initialValue),
            [p, w] = gt(void 0),
            [m, v] = gt(void 0, {
                equals: !1
            }),
            [y, b] = gt(u ? "ready" : "unresolved");
        if (Qe.context) {
            let e;
            l = `${Qe.context.id}${Qe.context.count++}`, "initial" === i.ssrLoadFrom ? a = i.initialValue : Qe.load && (e = Qe.load(l)) && (a = e[0])
        }

        function C(e, t, n, r) {
            return s === e && (s = null, u = !0, e !== a && t !== a || !i.onHydrated || queueMicrotask((() => i.onHydrated(r, {
                value: t
            }))), a = it, function (e, t) {
                Nt((() => {
                    void 0 === t && g((() => e)), b(void 0 !== t ? "errored" : "ready"), w(t);
                    for (const e of h.keys()) e.decrement();
                    h.clear()
                }), !1)
            }(t, n)), t
        }

        function x() {
            const e = at,
                t = f(),
                n = p();
            if (void 0 !== n && !s) throw n;
            return ct && !ct.user && e && pt((() => {
                m(), s && (e.resolved || h.has(e) || (e.increment(), h.add(e)))
            })), t
        }

        function _(e = !0) {
            if (!1 !== e && c) return;
            c = !1;
            const t = d ? d() : r;
            if (null == t || !1 === t) return void C(s, Ct(f));
            const n = a !== it ? a : Ct((() => o(t, {
                value: f(),
                refetching: e
            })));
            return "object" == typeof n && n && "then" in n ? (s = n, c = !0, queueMicrotask((() => c = !1)), Nt((() => {
                b(u ? "refreshing" : "pending"), v()
            }), !1), n.then((e => C(n, e, void 0, t)), (e => C(n, void 0, jt(e), t)))) : (C(s, n, void 0, t), n)
        }
        return Object.defineProperties(x, {
            state: {
                get: () => y()
            },
            error: {
                get: () => p()
            },
            loading: {
                get() {
                    const e = y();
                    return "pending" === e || "refreshing" === e
                }
            },
            latest: {
                get() {
                    if (!u) return x();
                    const e = p();
                    if (e && !s) throw e;
                    return f()
                }
            }
        }), d ? pt((() => _(!1))) : _(!1), [x, {
            refetch: _,
            mutate: g
        }]
    }

    function bt(e) {
        return Nt(e, !1)
    }

    function Ct(e) {
        if (null === ct) return e();
        const t = ct;
        ct = null;
        try {
            return e()
        } finally {
            ct = t
        }
    }

    function xt(e) {
        mt((() => Ct(e)))
    }

    function _t(e) {
        return null === st || (null === st.cleanups ? st.cleanups = [e] : st.cleanups.push(e)), e
    }

    function kt() {
        return ct
    }

    function St(e, t) {
        const n = Symbol("context");
        return {
            id: n,
            Provider: Vt(n),
            defaultValue: e
        }
    }

    function Et(e) {
        let t;
        return void 0 !== (t = Dt(st, e.id)) ? t : e.defaultValue
    }

    function Rt(e) {
        const t = vt(e),
            n = vt((() => Ht(t())));
        return n.toArray = () => {
            const e = n();
            return Array.isArray(e) ? e : null != e ? [e] : []
        }, n
    }

    function Tt() {
        const e = lt;
        if (this.sources && (this.state || e))
            if (this.state === nt || e) At(this);
            else {
                const e = ut;
                ut = null, Nt((() => It(this)), !1), ut = e
            } if (ct) {
            const e = this.observers ? this.observers.length : 0;
            ct.sources ? (ct.sources.push(this), ct.sourceSlots.push(e)) : (ct.sources = [this], ct.sourceSlots = [e]), this.observers ? (this.observers.push(ct), this.observerSlots.push(ct.sources.length - 1)) : (this.observers = [ct], this.observerSlots = [ct.sources.length - 1])
        }
        return this.value
    }

    function Lt(e, t, n) {
        let r = e.value;
        return e.comparator && e.comparator(r, t) || (e.value = t, e.observers && e.observers.length && Nt((() => {
            for (let t = 0; t < e.observers.length; t += 1) {
                const n = e.observers[t],
                    r = lt && lt.running;
                r && lt.disposed.has(n), (r && !n.tState || !r && !n.state) && (n.pure ? ut.push(n) : dt.push(n), n.observers && Ut(n)), r || (n.state = nt)
            }
            if (ut.length > 1e6) throw ut = [], new Error
        }), !1)), t
    }

    function At(e) {
        if (!e.fn) return;
        Wt(e);
        const t = st,
            n = ct,
            r = ht;
        ct = st = e,
            function (e, t, n) {
                let r;
                try {
                    r = e.fn(t)
                } catch (o) {
                    e.pure && (e.state = nt, e.owned && e.owned.forEach(Wt), e.owned = null), Bt(o)
                }(!e.updatedAt || e.updatedAt <= n) && (null != e.updatedAt && "observers" in e ? Lt(e, r) : e.value = r, e.updatedAt = n)
            }(e, e.value, r), ct = n, st = t
    }

    function Mt(e, t, n, r = nt, o) {
        const i = {
            fn: e,
            state: r,
            updatedAt: null,
            owned: null,
            sources: null,
            sourceSlots: null,
            cleanups: null,
            value: t,
            owner: st,
            context: null,
            pure: n
        };
        return null === st || st !== ot && (st.owned ? st.owned.push(i) : st.owned = [i]), i
    }

    function Ot(e) {
        const t = lt;
        if (0 === e.state || t) return;
        if (e.state === rt || t) return It(e);
        if (e.suspense && Ct(e.suspense.inFallback)) return e.suspense.effects.push(e);
        const n = [e];
        for (;
            (e = e.owner) && (!e.updatedAt || e.updatedAt < ht);)(e.state || t) && n.push(e);
        for (let r = n.length - 1; r >= 0; r--)
            if ((e = n[r]).state === nt || t) At(e);
            else if (e.state === rt || t) {
            const t = ut;
            ut = null, Nt((() => It(e, n[0])), !1), ut = t
        }
    }

    function Nt(e, t) {
        if (ut) return e();
        let n = !1;
        t || (ut = []), dt ? n = !0 : dt = [], ht++;
        try {
            const t = e();
            return function (e) {
                ut && (Pt(ut), ut = null);
                if (e) return;
                const t = dt;
                dt = null, t.length && Nt((() => tt(t)), !1)
            }(n), t
        } catch (r) {
            n || (dt = null), ut = null, Bt(r)
        }
    }

    function Pt(e) {
        for (let t = 0; t < e.length; t++) Ot(e[t])
    }

    function $t(e) {
        let t, n = 0;
        for (t = 0; t < e.length; t++) {
            const r = e[t];
            r.user ? e[n++] = r : Ot(r)
        }
        var r;
        for (Qe.context && (Qe.context = r), t = 0; t < n; t++) Ot(e[t])
    }

    function It(e, t) {
        const n = lt;
        e.state = 0;
        for (let r = 0; r < e.sources.length; r += 1) {
            const o = e.sources[r];
            o.sources && (o.state === nt || n ? o !== t && Ot(o) : (o.state === rt || n) && It(o, t))
        }
    }

    function Ut(e) {
        const t = lt;
        for (let n = 0; n < e.observers.length; n += 1) {
            const r = e.observers[n];
            r.state && !t || (r.state = rt, r.pure ? ut.push(r) : dt.push(r), r.observers && Ut(r))
        }
    }

    function Wt(e) {
        let t;
        if (e.sources)
            for (; e.sources.length;) {
                const t = e.sources.pop(),
                    n = e.sourceSlots.pop(),
                    r = t.observers;
                if (r && r.length) {
                    const e = r.pop(),
                        o = t.observerSlots.pop();
                    n < r.length && (e.sourceSlots[o] = n, r[n] = e, t.observerSlots[n] = o)
                }
            }
        if (e.owned) {
            for (t = 0; t < e.owned.length; t++) Wt(e.owned[t]);
            e.owned = null
        }
        if (e.cleanups) {
            for (t = 0; t < e.cleanups.length; t++) e.cleanups[t]();
            e.cleanups = null
        }
        e.state = 0, e.context = null
    }

    function jt(e) {
        return e instanceof Error || "string" == typeof e ? e : new Error("Unknown error")
    }

    function Bt(e) {
        throw e = jt(e)
    }

    function Dt(e, t) {
        return e ? e.context && void 0 !== e.context[t] ? e.context[t] : Dt(e.owner, t) : void 0
    }

    function Ht(e) {
        if ("function" == typeof e && !e.length) return Ht(e());
        if (Array.isArray(e)) {
            const t = [];
            for (let n = 0; n < e.length; n++) {
                const r = Ht(e[n]);
                Array.isArray(r) ? t.push.apply(t, r) : t.push(r)
            }
            return t
        }
        return e
    }

    function Vt(e, t) {
        return function (t) {
            let n;
            return wt((() => n = Ct((() => (st.context = {
                [e]: t.value
            }, Rt((() => t.children)))))), void 0), n
        }
    }
    const Kt = Symbol("fallback");

    function Ft(e) {
        for (let t = 0; t < e.length; t++) e[t]()
    }

    function qt(e, t) {
        return Ct((() => e(t || {})))
    }

    function zt() {
        return !0
    }
    const Zt = {
        get: (e, t, n) => t === Je ? n : e.get(t),
        has: (e, t) => t === Je || e.has(t),
        set: zt,
        deleteProperty: zt,
        getOwnPropertyDescriptor: (e, t) => ({
            configurable: !0,
            enumerable: !0,
            get: () => e.get(t),
            set: zt,
            deleteProperty: zt
        }),
        ownKeys: e => e.keys()
    };

    function Gt(e) {
        return (e = "function" == typeof e ? e() : e) ? e : {}
    }

    function Yt(...e) {
        let t = !1;
        for (let r = 0; r < e.length; r++) {
            const n = e[r];
            t = t || !!n && Je in n, e[r] = "function" == typeof n ? (t = !0, vt(n)) : n
        }
        if (t) return new Proxy({
            get(t) {
                for (let n = e.length - 1; n >= 0; n--) {
                    const r = Gt(e[n])[t];
                    if (void 0 !== r) return r
                }
            },
            has(t) {
                for (let n = e.length - 1; n >= 0; n--)
                    if (t in Gt(e[n])) return !0;
                return !1
            },
            keys() {
                const t = [];
                for (let n = 0; n < e.length; n++) t.push(...Object.keys(Gt(e[n])));
                return [...new Set(t)]
            }
        }, Zt);
        const n = {};
        for (let r = e.length - 1; r >= 0; r--)
            if (e[r]) {
                const t = Object.getOwnPropertyDescriptors(e[r]);
                for (const r in t) r in n || Object.defineProperty(n, r, {
                    enumerable: !0,
                    get() {
                        for (let t = e.length - 1; t >= 0; t--) {
                            const n = (e[t] || {})[r];
                            if (void 0 !== n) return n
                        }
                    }
                })
            } return n
    }

    function Qt(e, ...t) {
        const n = new Set(t.flat());
        if (Je in e) {
            const r = t.map((t => new Proxy({
                get: n => t.includes(n) ? e[n] : void 0,
                has: n => t.includes(n) && n in e,
                keys: () => t.filter((t => t in e))
            }, Zt)));
            return r.push(new Proxy({
                get: t => n.has(t) ? void 0 : e[t],
                has: t => !n.has(t) && t in e,
                keys: () => Object.keys(e).filter((e => !n.has(e)))
            }, Zt)), r
        }
        const r = Object.getOwnPropertyDescriptors(e);
        return t.push(Object.keys(r).filter((e => !n.has(e)))), t.map((t => {
            const n = {};
            for (let o = 0; o < t.length; o++) {
                const i = t[o];
                i in e && Object.defineProperty(n, i, r[i] ? r[i] : {
                    get: () => e[i],
                    set: () => !0,
                    enumerable: !0
                })
            }
            return n
        }))
    }

    function Jt(e) {
        const t = "fallback" in e && {
            fallback: () => e.fallback
        };
        return vt(function (e, t, n = {}) {
            let r = [],
                o = [],
                i = [],
                s = 0,
                a = t.length > 1 ? [] : null;
            return _t((() => Ft(i))), () => {
                let l, c, u = e() || [];
                return u[Xe], Ct((() => {
                    let e, t, h, f, g, p, w, m, v, y = u.length;
                    if (0 === y) 0 !== s && (Ft(i), i = [], r = [], o = [], s = 0, a && (a = [])), n.fallback && (r = [Kt], o[0] = ft((e => (i[0] = e, n.fallback()))), s = 1);
                    else if (0 === s) {
                        for (o = new Array(y), c = 0; c < y; c++) r[c] = u[c], o[c] = ft(d);
                        s = y
                    } else {
                        for (h = new Array(y), f = new Array(y), a && (g = new Array(y)), p = 0, w = Math.min(s, y); p < w && r[p] === u[p]; p++);
                        for (w = s - 1, m = y - 1; w >= p && m >= p && r[w] === u[m]; w--, m--) h[m] = o[w], f[m] = i[w], a && (g[m] = a[w]);
                        for (e = new Map, t = new Array(m + 1), c = m; c >= p; c--) v = u[c], l = e.get(v), t[c] = void 0 === l ? -1 : l, e.set(v, c);
                        for (l = p; l <= w; l++) v = r[l], c = e.get(v), void 0 !== c && -1 !== c ? (h[c] = o[l], f[c] = i[l], a && (g[c] = a[l]), c = t[c], e.set(v, c)) : i[l]();
                        for (c = p; c < y; c++) c in h ? (o[c] = h[c], i[c] = f[c], a && (a[c] = g[c], a[c](c))) : o[c] = ft(d);
                        o = o.slice(0, s = y), r = u.slice(0)
                    }
                    return o
                }));

                function d(e) {
                    if (i[c] = e, a) {
                        const [e, n] = gt(c);
                        return a[c] = n, t(u[c], e)
                    }
                    return t(u[c])
                }
            }
        }((() => e.each), e.children, t || void 0))
    }

    function Xt(e) {
        let t = !1;
        const n = e.keyed,
            r = vt((() => e.when), void 0, {
                equals: (e, n) => t ? e === n : !e == !n
            });
        return vt((() => {
            const o = r();
            if (o) {
                const r = e.children,
                    i = "function" == typeof r && r.length > 0;
                return t = n || i, i ? Ct((() => r(o))) : r
            }
            return e.fallback
        }), void 0, void 0)
    }

    function en(e) {
        let t = !1,
            n = !1;
        const r = Rt((() => e.children)),
            o = vt((() => {
                let e = r();
                Array.isArray(e) || (e = [e]);
                for (let t = 0; t < e.length; t++) {
                    const r = e[t].when;
                    if (r) return n = !!e[t].keyed, [t, r, e[t]]
                }
                return [-1]
            }), void 0, {
                equals: (e, n) => e[0] === n[0] && (t ? e[1] === n[1] : !e[1] == !n[1]) && e[2] === n[2]
            });
        return vt((() => {
            const [r, i, s] = o();
            if (r < 0) return e.fallback;
            const a = s.children,
                l = "function" == typeof a && a.length > 0;
            return t = n || l, l ? Ct((() => a(i))) : a
        }), void 0, void 0)
    }

    function tn(e) {
        return e
    }
    const nn = new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", "allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"]),
        rn = new Set(["innerHTML", "textContent", "innerText", "children"]),
        on = Object.assign(Object.create(null), {
            className: "class",
            htmlFor: "for"
        }),
        sn = Object.assign(Object.create(null), {
            class: "className",
            formnovalidate: "formNoValidate",
            ismap: "isMap",
            nomodule: "noModule",
            playsinline: "playsInline",
            readonly: "readOnly"
        }),
        an = new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]),
        ln = new Set(["altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "set", "stop", "svg", "switch", "symbol", "text", "textPath", "tref", "tspan", "use", "view", "vkern"]),
        cn = {
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace"
        };
    const un = "_$DX_DELEGATE";

    function dn(e, t, n) {
        const r = document.createElement("template");
        r.innerHTML = e;
        let o = r.content.firstChild;
        return n && (o = o.firstChild), o
    }

    function hn(e, t, n) {
        null == n ? e.removeAttribute(t) : e.setAttribute(t, n)
    }

    function fn(e, t) {
        null == t ? e.removeAttribute("class") : e.className = t
    }

    function gn(e, t = {}, n, r) {
        const o = {};
        return r || wt((() => o.children = Cn(e, t.children, o.children))), wt((() => t.ref && t.ref(e))), wt((() => function (e, t, n, r, o = {}, i = !1) {
            t || (t = {});
            for (const s in o)
                if (!(s in t)) {
                    if ("children" === s) continue;
                    o[s] = yn(e, s, null, o[s], n, i)
                } for (const s in t) {
                if ("children" === s) {
                    r || Cn(e, t.children);
                    continue
                }
                const a = t[s];
                o[s] = yn(e, s, a, o[s], n, i)
            }
        }(e, t, n, !0, o, !0))), o
    }

    function pn(e, t, n) {
        return Ct((() => e(t, n)))
    }

    function wn(e, t, n, r) {
        if (void 0 === n || r || (r = []), "function" != typeof t) return Cn(e, t, r, n);
        wt((r => Cn(e, t(), r, n)), r)
    }

    function mn(e) {
        let t, n;
        return Qe.context && (t = Qe.registry.get(n = function () {
            const e = Qe.context;
            return `${e.id}${e.count++}`
        }())) ? (Qe.completed && Qe.completed.add(t), Qe.registry.delete(n), t) : e.cloneNode(!0)
    }

    function vn(e, t, n) {
        const r = t.trim().split(/\s+/);
        for (let o = 0, i = r.length; o < i; o++) e.classList.toggle(r[o], n)
    }

    function yn(e, t, n, r, o, i) {
        let s, a, l;
        if ("style" === t) return function (e, t, n) {
            if (!t) return n ? hn(e, "style") : t;
            const r = e.style;
            if ("string" == typeof t) return r.cssText = t;
            let o, i;
            for (i in "string" == typeof n && (r.cssText = n = void 0), n || (n = {}), t || (t = {}), n) null == t[i] && r.removeProperty(i), delete n[i];
            for (i in t) o = t[i], o !== n[i] && (r.setProperty(i, o), n[i] = o);
            return n
        }(e, n, r);
        if ("classList" === t) return function (e, t, n = {}) {
            const r = Object.keys(t || {}),
                o = Object.keys(n);
            let i, s;
            for (i = 0, s = o.length; i < s; i++) {
                const r = o[i];
                r && "undefined" !== r && !t[r] && (vn(e, r, !1), delete n[r])
            }
            for (i = 0, s = r.length; i < s; i++) {
                const o = r[i],
                    s = !!t[o];
                o && "undefined" !== o && n[o] !== s && s && (vn(e, o, !0), n[o] = s)
            }
            return n
        }(e, n, r);
        if (n === r) return r;
        if ("ref" === t) i || n(e);
        else if ("on:" === t.slice(0, 3)) {
            const o = t.slice(3);
            r && e.removeEventListener(o, r), n && e.addEventListener(o, n)
        } else if ("oncapture:" === t.slice(0, 10)) {
            const o = t.slice(10);
            r && e.removeEventListener(o, r, !0), n && e.addEventListener(o, n, !0)
        } else if ("on" === t.slice(0, 2)) {
            const o = t.slice(2).toLowerCase(),
                i = an.has(o);
            if (!i && r) {
                const t = Array.isArray(r) ? r[0] : r;
                e.removeEventListener(o, t)
            }(i || n) && (function (e, t, n, r) {
                if (r) Array.isArray(n) ? (e[`$$${t}`] = n[0], e[`$$${t}Data`] = n[1]) : e[`$$${t}`] = n;
                else if (Array.isArray(n)) {
                    const r = n[0];
                    e.addEventListener(t, n[0] = t => r.call(e, n[1], t))
                } else e.addEventListener(t, n)
            }(e, o, n, i), i && function (e, t = window.document) {
                const n = t[un] || (t[un] = new Set);
                for (let r = 0, o = e.length; r < o; r++) {
                    const o = e[r];
                    n.has(o) || (n.add(o), t.addEventListener(o, bn))
                }
            }([o]))
        } else if ((l = rn.has(t)) || !o && (sn[t] || (a = nn.has(t))) || (s = e.nodeName.includes("-"))) "class" === t || "className" === t ? fn(e, n) : !s || a || l ? e[sn[t] || t] = n : e[(c = t, c.toLowerCase().replace(/-([a-z])/g, ((e, t) => t.toUpperCase())))] = n;
        else {
            const r = o && t.indexOf(":") > -1 && cn[t.split(":")[0]];
            r ? function (e, t, n, r) {
                null == r ? e.removeAttributeNS(t, n) : e.setAttributeNS(t, n, r)
            }(e, r, t, n) : hn(e, on[t] || t, n)
        }
        var c;
        return n
    }

    function bn(e) {
        const t = `$$${e.type}`;
        let n = e.composedPath && e.composedPath()[0] || e.target;
        for (e.target !== n && Object.defineProperty(e, "target", {
                configurable: !0,
                value: n
            }), Object.defineProperty(e, "currentTarget", {
                configurable: !0,
                get: () => n || document
            }), Qe.registry && !Qe.done && (Qe.done = !0, document.querySelectorAll("[id^=pl-]").forEach((t => {
                for (; t && 8 !== t.nodeType && t.nodeValue !== "pl-" + e;) {
                    let e = t.nextSibling;
                    t.remove(), t = e
                }
                t && t.remove()
            }))); n;) {
            const r = n[t];
            if (r && !n.disabled) {
                const o = n[`${t}Data`];
                if (void 0 !== o ? r.call(n, o, e) : r.call(n, e), e.cancelBubble) return
            }
            n = n._$host || n.parentNode || n.host
        }
    }

    function Cn(e, t, n, r, o) {
        for (Qe.context && !n && (n = [...e.childNodes]);
            "function" == typeof n;) n = n();
        if (t === n) return n;
        const i = typeof t,
            s = void 0 !== r;
        if (e = s && n[0] && n[0].parentNode || e, "string" === i || "number" === i) {
            if (Qe.context) return n;
            if ("number" === i && (t = t.toString()), s) {
                let o = n[0];
                o && 3 === o.nodeType ? o.data = t : o = document.createTextNode(t), n = kn(e, n, r, o)
            } else n = "" !== n && "string" == typeof n ? e.firstChild.data = t : e.textContent = t
        } else if (null == t || "boolean" === i) {
            if (Qe.context) return n;
            n = kn(e, n, r)
        } else {
            if ("function" === i) return wt((() => {
                let o = t();
                for (;
                    "function" == typeof o;) o = o();
                n = Cn(e, o, n, r)
            })), () => n;
            if (Array.isArray(t)) {
                const i = [],
                    a = n && Array.isArray(n);
                if (xn(i, t, n, o)) return wt((() => n = Cn(e, i, n, r, !0))), () => n;
                if (Qe.context) {
                    if (!i.length) return n;
                    for (let e = 0; e < i.length; e++)
                        if (i[e].parentNode) return n = i
                }
                if (0 === i.length) {
                    if (n = kn(e, n, r), s) return n
                } else a ? 0 === n.length ? _n(e, i, r) : function (e, t, n) {
                    let r = n.length,
                        o = t.length,
                        i = r,
                        s = 0,
                        a = 0,
                        l = t[o - 1].nextSibling,
                        c = null;
                    for (; s < o || a < i;)
                        if (t[s] !== n[a]) {
                            for (; t[o - 1] === n[i - 1];) o--, i--;
                            if (o === s) {
                                const t = i < r ? a ? n[a - 1].nextSibling : n[i - a] : l;
                                for (; a < i;) e.insertBefore(n[a++], t)
                            } else if (i === a)
                                for (; s < o;) c && c.has(t[s]) || t[s].remove(), s++;
                            else if (t[s] === n[i - 1] && n[a] === t[o - 1]) {
                                const r = t[--o].nextSibling;
                                e.insertBefore(n[a++], t[s++].nextSibling), e.insertBefore(n[--i], r), t[o] = n[i]
                            } else {
                                if (!c) {
                                    c = new Map;
                                    let e = a;
                                    for (; e < i;) c.set(n[e], e++)
                                }
                                const r = c.get(t[s]);
                                if (null != r)
                                    if (a < r && r < i) {
                                        let l, u = s,
                                            d = 1;
                                        for (; ++u < o && u < i && null != (l = c.get(t[u])) && l === r + d;) d++;
                                        if (d > r - a) {
                                            const o = t[s];
                                            for (; a < r;) e.insertBefore(n[a++], o)
                                        } else e.replaceChild(n[a++], t[s++])
                                    } else s++;
                                else t[s++].remove()
                            }
                        } else s++, a++
                }(e, n, i) : (n && kn(e), _n(e, i));
                n = i
            } else if (t instanceof Node) {
                if (Qe.context && t.parentNode) return n = s ? [t] : t;
                if (Array.isArray(n)) {
                    if (s) return n = kn(e, n, r, t);
                    kn(e, n, null, t)
                } else null != n && "" !== n && e.firstChild ? e.replaceChild(t, e.firstChild) : e.appendChild(t);
                n = t
            }
        }
        return n
    }

    function xn(e, t, n, r) {
        let o = !1;
        for (let i = 0, s = t.length; i < s; i++) {
            let s = t[i],
                a = n && n[i];
            if (s instanceof Node) e.push(s);
            else if (null == s || !0 === s || !1 === s);
            else if (Array.isArray(s)) o = xn(e, s, a) || o;
            else if ("function" == typeof s)
                if (r) {
                    for (;
                        "function" == typeof s;) s = s();
                    o = xn(e, Array.isArray(s) ? s : [s], Array.isArray(a) ? a : [a]) || o
                } else e.push(s), o = !0;
            else {
                const t = String(s);
                a && 3 === a.nodeType && a.data === t ? e.push(a) : e.push(document.createTextNode(t))
            }
        }
        return o
    }

    function _n(e, t, n = null) {
        for (let r = 0, o = t.length; r < o; r++) e.insertBefore(t[r], n)
    }

    function kn(e, t, n, r) {
        if (void 0 === n) return e.textContent = "";
        const o = r || document.createTextNode("");
        if (t.length) {
            let r = !1;
            for (let i = t.length - 1; i >= 0; i--) {
                const s = t[i];
                if (o !== s) {
                    const t = s.parentNode === e;
                    r || i ? t && s.remove() : t ? e.replaceChild(o, s) : e.insertBefore(o, n)
                } else r = !0
            }
        } else e.insertBefore(o, n);
        return [o]
    }
    const Sn = "http://www.w3.org/2000/svg";

    function En(e, t = !1) {
        return t ? document.createElementNS(Sn, e) : document.createElement(e)
    }

    function Rn(e) {
        const {
            useShadow: t
        } = e, n = document.createTextNode(""), r = e.mount || document.body;

        function o() {
            if (Qe.context) {
                const [t, n] = gt(!1);
                return queueMicrotask((() => n(!0))), () => t() && e.children
            }
            return () => e.children
        }
        if (r instanceof HTMLHeadElement) {
            const [e, t] = gt(!1), n = () => t(!0);
            ft((t => wn(r, (() => e() ? t() : o()()), null))), _t((() => {
                Qe.context ? queueMicrotask(n) : n()
            }))
        } else {
            const i = En(e.isSVG ? "g" : "div", e.isSVG),
                s = t && i.attachShadow ? i.attachShadow({
                    mode: "open"
                }) : i;
            Object.defineProperty(i, "_$host", {
                get: () => n.parentNode,
                configurable: !0
            }), wn(s, o()), r.appendChild(i), e.ref && e.ref(i), _t((() => r.removeChild(i)))
        }
        return n
    }

    function Tn(e) {
        const [t, n] = Qt(e, ["component"]), r = vt((() => t.component));
        return vt((() => {
            const e = r();
            switch (typeof e) {
                case "function":
                    return Ct((() => e(n)));
                case "string":
                    const t = ln.has(e),
                        r = Qe.context ? mn() : En(e, t);
                    return gn(r, n, t), r
            }
        }))
    }
    var Ln = (e => (e.DARK = "DARK", e.LIGHT = "LIGHT", e))(Ln || {});
    let An = {
            data: ""
        },
        Mn = e => "object" == typeof window ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), {
            innerHTML: " ",
            id: "_goober"
        })).firstChild : e || An,
        On = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
        Nn = /\/\*[^]*?\*\/|  +/g,
        Pn = /\n+/g,
        $n = (e, t) => {
            let n = "",
                r = "",
                o = "";
            for (let i in e) {
                let s = e[i];
                "@" == i[0] ? "i" == i[1] ? n = i + " " + s + ";" : r += "f" == i[1] ? $n(s, i) : i + "{" + $n(s, "k" == i[1] ? "" : t) + "}" : "object" == typeof s ? r += $n(s, t ? t.replace(/([^,])+/g, (e => i.replace(/(^:.*)|([^,])+/g, (t => /&/.test(t) ? t.replace(/&/g, e) : e ? e + " " + t : t)))) : i) : null != s && (i = /^--/.test(i) ? i : i.replace(/[A-Z]/g, "-$&").toLowerCase(), o += $n.p ? $n.p(i, s) : i + ":" + s + ";")
            }
            return n + (t && o ? t + "{" + o + "}" : o) + r
        },
        In = {},
        Un = e => {
            if ("object" == typeof e) {
                let t = "";
                for (let n in e) t += n + Un(e[n]);
                return t
            }
            return e
        },
        Wn = (e, t, n, r, o) => {
            let i = Un(e),
                s = In[i] || (In[i] = (e => {
                    let t = 0,
                        n = 11;
                    for (; t < e.length;) n = 101 * n + e.charCodeAt(t++) >>> 0;
                    return "go" + n
                })(i));
            if (!In[s]) {
                let t = i !== e ? e : (e => {
                    let t, n, r = [{}];
                    for (; t = On.exec(e.replace(Nn, ""));) t[4] ? r.shift() : t[3] ? (n = t[3].replace(Pn, " ").trim(), r.unshift(r[0][n] = r[0][n] || {})) : r[0][t[1]] = t[2].replace(Pn, " ").trim();
                    return r[0]
                })(e);
                In[s] = $n(o ? {
                    ["@keyframes " + s]: t
                } : t, n ? "" : "." + s)
            }
            let a = n && In.g ? In.g : null;
            return n && (In.g = In[s]), l = In[s], c = t, u = r, (d = a) ? c.data = c.data.replace(d, l) : -1 === c.data.indexOf(l) && (c.data = u ? l + c.data : c.data + l), s;
            var l, c, u, d
        },
        jn = (e, t, n) => e.reduce(((e, r, o) => {
            let i = t[o];
            if (i && i.call) {
                let e = i(n),
                    t = e && e.props && e.props.className || /^go/.test(e) && e;
                i = t ? "." + t : e && "object" == typeof e ? e.props ? "" : $n(e, "") : !1 === e ? "" : e
            }
            return e + r + (null == i ? "" : i)
        }), "");

    function Bn(e) {
        let t = this || {},
            n = e.call ? e(t.p) : e;
        return Wn(n.unshift ? n.raw ? jn(n, [].slice.call(arguments, 1), t.p) : n.reduce(((e, n) => Object.assign(e, n && n.call ? n(t.p) : n)), {}) : n, Mn(t.target), t.g, t.o, t.k)
    }
    Bn.bind({
        g: 1
    });
    let Dn = Bn.bind({
        k: 1
    });
    const Hn = St();

    function Vn(e) {
        return qt(Hn.Provider, {
            value: e.theme,
            get children() {
                return e.children
            }
        })
    }

    function Kn() {
        return Et(Hn)
    }

    function Fn(e) {
        let t = this || {};
        return (...n) => {
            const r = r => {
                const o = Yt(r, {
                        theme: Et(Hn)
                    }),
                    i = Yt(o, {
                        get class() {
                            const e = o.class,
                                r = "class" in o && /^go[0-9]+/.test(e);
                            return [e, Bn.apply({
                                target: t.target,
                                o: r,
                                p: o,
                                g: t.g
                            }, n)].filter(Boolean).join(" ")
                        }
                    }),
                    [s, a] = Qt(i, ["as", "theme"]),
                    l = a,
                    c = s.as || e;
                let u;
                return "function" == typeof c ? u = c(l) : 1 == t.g ? (u = document.createElement(c), gn(u, l)) : u = Tn(Yt({
                    component: c
                }, l)), u
            };
            return r.class = e => Ct((() => Bn.apply({
                target: t.target,
                p: e,
                g: t.g
            }, n))), r
        }
    }
    const qn = new Proxy(Fn, {
        get: (e, t) => e(t)
    });

    function zn() {
        const e = Fn.call({
            g: 1
        }, "div").apply(null, arguments);
        return function (t) {
            return e(t), null
        }
    }
    const Zn = "tc-root",
        Gn = "tc-disable-scroll",
        Yn = "tc-using-mouse",
        Qn = () => {
            document.body.addEventListener("mousedown", (() => document.body.classList.add(Yn))), document.body.addEventListener("keydown", (e => {
                "Tab" === e.key && document.body.classList.remove(Yn)
            }));
            return qt(zn `
    ${Zn} * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, Tahoma, Verdana, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;        
        -webkit-tap-highlight-color: transparent;
    }
    
    ${Zn} img {
      -webkit-user-select: none;
      -webkit-touch-callout: none;
    }   
 
    ${Zn} *:focus {
        outline: #08f auto 2px;
    }
    
    ${Zn} li {
        list-style: none;
    }
    
    ${Zn} button {
        outline: none;
    }
    
    body.${Gn} {
        position: fixed; 
        overflow-y: scroll;
        right: 0;
        left: 0;
    }
    
    body.${Yn} ${Zn} *:focus {
        outline: none;
    }
`, {})
        };

    function Jn(e, t) {
        return "#" === e[0] && (e = function (e) {
            "#" === e[0] && (e = e.slice(1));
            const t = parseInt(e, 16);
            return [t >> 16 & 255, t >> 8 & 255, 255 & t].join(",")
        }(e)), `rgba(${e}, ${t})`
    }

    function Xn(e) {
        return e.toString() + "px"
    }
    var er = {
        exports: {}
    };
    ! function (e, t) {
        ! function (n, r) {
            var o = "function",
                i = "undefined",
                s = "object",
                a = "string",
                l = "major",
                c = "model",
                u = "name",
                d = "type",
                h = "vendor",
                f = "version",
                g = "architecture",
                p = "console",
                w = "mobile",
                m = "tablet",
                v = "smarttv",
                y = "wearable",
                b = "embedded",
                C = "Amazon",
                x = "Apple",
                _ = "ASUS",
                k = "BlackBerry",
                S = "Browser",
                E = "Chrome",
                R = "Firefox",
                T = "Google",
                L = "Huawei",
                A = "LG",
                M = "Microsoft",
                O = "Motorola",
                N = "Opera",
                P = "Samsung",
                $ = "Sharp",
                I = "Sony",
                U = "Xiaomi",
                W = "Zebra",
                j = "Facebook",
                B = "Chromium OS",
                D = "Mac OS",
                H = function (e) {
                    for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
                    return t
                },
                V = function (e, t) {
                    return typeof e === a && -1 !== K(t).indexOf(K(e))
                },
                K = function (e) {
                    return e.toLowerCase()
                },
                F = function (e, t) {
                    if (typeof e === a) return e = e.replace(/^\s\s*/, ""), typeof t === i ? e : e.substring(0, 350)
                },
                q = function (e, t) {
                    for (var n, i, a, l, c, u, d = 0; d < t.length && !c;) {
                        var h = t[d],
                            f = t[d + 1];
                        for (n = i = 0; n < h.length && !c && h[n];)
                            if (c = h[n++].exec(e))
                                for (a = 0; a < f.length; a++) u = c[++i], typeof (l = f[a]) === s && l.length > 0 ? 2 === l.length ? typeof l[1] == o ? this[l[0]] = l[1].call(this, u) : this[l[0]] = l[1] : 3 === l.length ? typeof l[1] !== o || l[1].exec && l[1].test ? this[l[0]] = u ? u.replace(l[1], l[2]) : r : this[l[0]] = u ? l[1].call(this, u, l[2]) : r : 4 === l.length && (this[l[0]] = u ? l[3].call(this, u.replace(l[1], l[2])) : r) : this[l] = u || r;
                        d += 2
                    }
                },
                z = function (e, t) {
                    for (var n in t)
                        if (typeof t[n] === s && t[n].length > 0) {
                            for (var o = 0; o < t[n].length; o++)
                                if (V(t[n][o], e)) return "?" === n ? r : n
                        } else if (V(t[n], e)) return "?" === n ? r : n;
                    return e
                },
                Z = {
                    ME: "4.90",
                    "NT 3.11": "NT3.51",
                    "NT 4.0": "NT4.0",
                    2e3: "NT 5.0",
                    XP: ["NT 5.1", "NT 5.2"],
                    Vista: "NT 6.0",
                    7: "NT 6.1",
                    8: "NT 6.2",
                    8.1: "NT 6.3",
                    10: ["NT 6.4", "NT 10.0"],
                    RT: "ARM"
                },
                G = {
                    browser: [
                        [/\b(?:crmo|crios)\/([\w\.]+)/i],
                        [f, [u, "Chrome"]],
                        [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                        [f, [u, "Edge"]],
                        [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                        [u, f],
                        [/opios[\/ ]+([\w\.]+)/i],
                        [f, [u, N + " Mini"]],
                        [/\bopr\/([\w\.]+)/i],
                        [f, [u, N]],
                        [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                        [u, f],
                        [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                        [f, [u, "UC" + S]],
                        [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
                        [f, [u, "WeChat(Win) Desktop"]],
                        [/micromessenger\/([\w\.]+)/i],
                        [f, [u, "WeChat"]],
                        [/konqueror\/([\w\.]+)/i],
                        [f, [u, "Konqueror"]],
                        [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                        [f, [u, "IE"]],
                        [/ya(?:search)?browser\/([\w\.]+)/i],
                        [f, [u, "Yandex"]],
                        [/(avast|avg)\/([\w\.]+)/i],
                        [
                            [u, /(.+)/, "$1 Secure " + S], f
                        ],
                        [/\bfocus\/([\w\.]+)/i],
                        [f, [u, R + " Focus"]],
                        [/\bopt\/([\w\.]+)/i],
                        [f, [u, N + " Touch"]],
                        [/coc_coc\w+\/([\w\.]+)/i],
                        [f, [u, "Coc Coc"]],
                        [/dolfin\/([\w\.]+)/i],
                        [f, [u, "Dolphin"]],
                        [/coast\/([\w\.]+)/i],
                        [f, [u, N + " Coast"]],
                        [/miuibrowser\/([\w\.]+)/i],
                        [f, [u, "MIUI " + S]],
                        [/fxios\/([-\w\.]+)/i],
                        [f, [u, R]],
                        [/\bqihu|(qi?ho?o?|360)browser/i],
                        [
                            [u, "360 " + S]
                        ],
                        [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                        [
                            [u, /(.+)/, "$1 " + S], f
                        ],
                        [/(comodo_dragon)\/([\w\.]+)/i],
                        [
                            [u, /_/g, " "], f
                        ],
                        [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                        [u, f],
                        [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
                        [u],
                        [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                        [
                            [u, j], f
                        ],
                        [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                        [u, f],
                        [/\bgsa\/([\w\.]+) .*safari\//i],
                        [f, [u, "GSA"]],
                        [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                        [f, [u, "TikTok"]],
                        [/headlesschrome(?:\/([\w\.]+)| )/i],
                        [f, [u, E + " Headless"]],
                        [/ wv\).+(chrome)\/([\w\.]+)/i],
                        [
                            [u, E + " WebView"], f
                        ],
                        [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                        [f, [u, "Android " + S]],
                        [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                        [u, f],
                        [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                        [f, [u, "Mobile Safari"]],
                        [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                        [f, u],
                        [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                        [u, [f, z, {
                            "1.0": "/8",
                            1.2: "/1",
                            1.3: "/3",
                            "2.0": "/412",
                            "2.0.2": "/416",
                            "2.0.3": "/417",
                            "2.0.4": "/419",
                            "?": "/"
                        }]],
                        [/(webkit|khtml)\/([\w\.]+)/i],
                        [u, f],
                        [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                        [
                            [u, "Netscape"], f
                        ],
                        [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                        [f, [u, R + " Reality"]],
                        [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i],
                        [u, f],
                        [/(cobalt)\/([\w\.]+)/i],
                        [u, [f, /master.|lts./, ""]]
                    ],
                    cpu: [
                        [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                        [
                            [g, "amd64"]
                        ],
                        [/(ia32(?=;))/i],
                        [
                            [g, K]
                        ],
                        [/((?:i[346]|x)86)[;\)]/i],
                        [
                            [g, "ia32"]
                        ],
                        [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                        [
                            [g, "arm64"]
                        ],
                        [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                        [
                            [g, "armhf"]
                        ],
                        [/windows (ce|mobile); ppc;/i],
                        [
                            [g, "arm"]
                        ],
                        [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                        [
                            [g, /ower/, "", K]
                        ],
                        [/(sun4\w)[;\)]/i],
                        [
                            [g, "sparc"]
                        ],
                        [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                        [
                            [g, K]
                        ]
                    ],
                    device: [
                        [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                        [c, [h, P],
                            [d, m]
                        ],
                        [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                        [c, [h, P],
                            [d, w]
                        ],
                        [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                        [c, [h, x],
                            [d, w]
                        ],
                        [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                        [c, [h, x],
                            [d, m]
                        ],
                        [/(macintosh);/i],
                        [c, [h, x]],
                        [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                        [c, [h, $],
                            [d, w]
                        ],
                        [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                        [c, [h, L],
                            [d, m]
                        ],
                        [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                        [c, [h, L],
                            [d, w]
                        ],
                        [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                        [
                            [c, /_/g, " "],
                            [h, U],
                            [d, w]
                        ],
                        [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                        [
                            [c, /_/g, " "],
                            [h, U],
                            [d, m]
                        ],
                        [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                        [c, [h, "OPPO"],
                            [d, w]
                        ],
                        [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                        [c, [h, "Vivo"],
                            [d, w]
                        ],
                        [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                        [c, [h, "Realme"],
                            [d, w]
                        ],
                        [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                        [c, [h, O],
                            [d, w]
                        ],
                        [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                        [c, [h, O],
                            [d, m]
                        ],
                        [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                        [c, [h, A],
                            [d, m]
                        ],
                        [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                        [c, [h, A],
                            [d, w]
                        ],
                        [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                        [c, [h, "Lenovo"],
                            [d, m]
                        ],
                        [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                        [
                            [c, /_/g, " "],
                            [h, "Nokia"],
                            [d, w]
                        ],
                        [/(pixel c)\b/i],
                        [c, [h, T],
                            [d, m]
                        ],
                        [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                        [c, [h, T],
                            [d, w]
                        ],
                        [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                        [c, [h, I],
                            [d, w]
                        ],
                        [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                        [
                            [c, "Xperia Tablet"],
                            [h, I],
                            [d, m]
                        ],
                        [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                        [c, [h, "OnePlus"],
                            [d, w]
                        ],
                        [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                        [c, [h, C],
                            [d, m]
                        ],
                        [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                        [
                            [c, /(.+)/g, "Fire Phone $1"],
                            [h, C],
                            [d, w]
                        ],
                        [/(playbook);[-\w\),; ]+(rim)/i],
                        [c, h, [d, m]],
                        [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                        [c, [h, k],
                            [d, w]
                        ],
                        [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                        [c, [h, _],
                            [d, m]
                        ],
                        [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                        [c, [h, _],
                            [d, w]
                        ],
                        [/(nexus 9)/i],
                        [c, [h, "HTC"],
                            [d, m]
                        ],
                        [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                        [h, [c, /_/g, " "],
                            [d, w]
                        ],
                        [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                        [c, [h, "Acer"],
                            [d, m]
                        ],
                        [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                        [c, [h, "Meizu"],
                            [d, w]
                        ],
                        [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                        [h, c, [d, w]],
                        [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                        [h, c, [d, m]],
                        [/(surface duo)/i],
                        [c, [h, M],
                            [d, m]
                        ],
                        [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                        [c, [h, "Fairphone"],
                            [d, w]
                        ],
                        [/(u304aa)/i],
                        [c, [h, "AT&T"],
                            [d, w]
                        ],
                        [/\bsie-(\w*)/i],
                        [c, [h, "Siemens"],
                            [d, w]
                        ],
                        [/\b(rct\w+) b/i],
                        [c, [h, "RCA"],
                            [d, m]
                        ],
                        [/\b(venue[\d ]{2,7}) b/i],
                        [c, [h, "Dell"],
                            [d, m]
                        ],
                        [/\b(q(?:mv|ta)\w+) b/i],
                        [c, [h, "Verizon"],
                            [d, m]
                        ],
                        [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                        [c, [h, "Barnes & Noble"],
                            [d, m]
                        ],
                        [/\b(tm\d{3}\w+) b/i],
                        [c, [h, "NuVision"],
                            [d, m]
                        ],
                        [/\b(k88) b/i],
                        [c, [h, "ZTE"],
                            [d, m]
                        ],
                        [/\b(nx\d{3}j) b/i],
                        [c, [h, "ZTE"],
                            [d, w]
                        ],
                        [/\b(gen\d{3}) b.+49h/i],
                        [c, [h, "Swiss"],
                            [d, w]
                        ],
                        [/\b(zur\d{3}) b/i],
                        [c, [h, "Swiss"],
                            [d, m]
                        ],
                        [/\b((zeki)?tb.*\b) b/i],
                        [c, [h, "Zeki"],
                            [d, m]
                        ],
                        [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                        [
                            [h, "Dragon Touch"], c, [d, m]
                        ],
                        [/\b(ns-?\w{0,9}) b/i],
                        [c, [h, "Insignia"],
                            [d, m]
                        ],
                        [/\b((nxa|next)-?\w{0,9}) b/i],
                        [c, [h, "NextBook"],
                            [d, m]
                        ],
                        [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                        [
                            [h, "Voice"], c, [d, w]
                        ],
                        [/\b(lvtel\-)?(v1[12]) b/i],
                        [
                            [h, "LvTel"], c, [d, w]
                        ],
                        [/\b(ph-1) /i],
                        [c, [h, "Essential"],
                            [d, w]
                        ],
                        [/\b(v(100md|700na|7011|917g).*\b) b/i],
                        [c, [h, "Envizen"],
                            [d, m]
                        ],
                        [/\b(trio[-\w\. ]+) b/i],
                        [c, [h, "MachSpeed"],
                            [d, m]
                        ],
                        [/\btu_(1491) b/i],
                        [c, [h, "Rotor"],
                            [d, m]
                        ],
                        [/(shield[\w ]+) b/i],
                        [c, [h, "Nvidia"],
                            [d, m]
                        ],
                        [/(sprint) (\w+)/i],
                        [h, c, [d, w]],
                        [/(kin\.[onetw]{3})/i],
                        [
                            [c, /\./g, " "],
                            [h, M],
                            [d, w]
                        ],
                        [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                        [c, [h, W],
                            [d, m]
                        ],
                        [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                        [c, [h, W],
                            [d, w]
                        ],
                        [/smart-tv.+(samsung)/i],
                        [h, [d, v]],
                        [/hbbtv.+maple;(\d+)/i],
                        [
                            [c, /^/, "SmartTV"],
                            [h, P],
                            [d, v]
                        ],
                        [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                        [
                            [h, A],
                            [d, v]
                        ],
                        [/(apple) ?tv/i],
                        [h, [c, x + " TV"],
                            [d, v]
                        ],
                        [/crkey/i],
                        [
                            [c, E + "cast"],
                            [h, T],
                            [d, v]
                        ],
                        [/droid.+aft(\w)( bui|\))/i],
                        [c, [h, C],
                            [d, v]
                        ],
                        [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                        [c, [h, $],
                            [d, v]
                        ],
                        [/(bravia[\w ]+)( bui|\))/i],
                        [c, [h, I],
                            [d, v]
                        ],
                        [/(mitv-\w{5}) bui/i],
                        [c, [h, U],
                            [d, v]
                        ],
                        [/Hbbtv.*(technisat) (.*);/i],
                        [h, c, [d, v]],
                        [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                        [
                            [h, F],
                            [c, F],
                            [d, v]
                        ],
                        [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                        [
                            [d, v]
                        ],
                        [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                        [h, c, [d, p]],
                        [/droid.+; (shield) bui/i],
                        [c, [h, "Nvidia"],
                            [d, p]
                        ],
                        [/(playstation [345portablevi]+)/i],
                        [c, [h, I],
                            [d, p]
                        ],
                        [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                        [c, [h, M],
                            [d, p]
                        ],
                        [/((pebble))app/i],
                        [h, c, [d, y]],
                        [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                        [c, [h, x],
                            [d, y]
                        ],
                        [/droid.+; (glass) \d/i],
                        [c, [h, T],
                            [d, y]
                        ],
                        [/droid.+; (wt63?0{2,3})\)/i],
                        [c, [h, W],
                            [d, y]
                        ],
                        [/(quest( 2| pro)?)/i],
                        [c, [h, j],
                            [d, y]
                        ],
                        [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                        [h, [d, b]],
                        [/(aeobc)\b/i],
                        [c, [h, C],
                            [d, b]
                        ],
                        [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                        [c, [d, w]],
                        [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                        [c, [d, m]],
                        [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                        [
                            [d, m]
                        ],
                        [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                        [
                            [d, w]
                        ],
                        [/(android[-\w\. ]{0,9});.+buil/i],
                        [c, [h, "Generic"]]
                    ],
                    engine: [
                        [/windows.+ edge\/([\w\.]+)/i],
                        [f, [u, "EdgeHTML"]],
                        [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                        [f, [u, "Blink"]],
                        [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                        [u, f],
                        [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                        [f, u]
                    ],
                    os: [
                        [/microsoft (windows) (vista|xp)/i],
                        [u, f],
                        [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                        [u, [f, z, Z]],
                        [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                        [
                            [u, "Windows"],
                            [f, z, Z]
                        ],
                        [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /ios;fbsv\/([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                        [
                            [f, /_/g, "."],
                            [u, "iOS"]
                        ],
                        [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                        [
                            [u, D],
                            [f, /_/g, "."]
                        ],
                        [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                        [f, u],
                        [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                        [u, f],
                        [/\(bb(10);/i],
                        [f, [u, k]],
                        [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                        [f, [u, "Symbian"]],
                        [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                        [f, [u, R + " OS"]],
                        [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                        [f, [u, "webOS"]],
                        [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                        [f, [u, "watchOS"]],
                        [/crkey\/([\d\.]+)/i],
                        [f, [u, E + "cast"]],
                        [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                        [
                            [u, B], f
                        ],
                        [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                        [u, f],
                        [/(sunos) ?([\w\.\d]*)/i],
                        [
                            [u, "Solaris"], f
                        ],
                        [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                        [u, f]
                    ]
                },
                Y = function (e, t) {
                    if (typeof e === s && (t = e, e = r), !(this instanceof Y)) return new Y(e, t).getResult();
                    var p = typeof n !== i && n.navigator ? n.navigator : r,
                        v = e || (p && p.userAgent ? p.userAgent : ""),
                        y = p && p.userAgentData ? p.userAgentData : r,
                        b = t ? function (e, t) {
                            var n = {};
                            for (var r in e) t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
                            return n
                        }(G, t) : G,
                        C = p && p.userAgent == v;
                    return this.getBrowser = function () {
                        var e, t = {};
                        return t[u] = r, t[f] = r, q.call(t, v, b.browser), t[l] = typeof (e = t[f]) === a ? e.replace(/[^\d\.]/g, "").split(".")[0] : r, C && p && p.brave && typeof p.brave.isBrave == o && (t[u] = "Brave"), t
                    }, this.getCPU = function () {
                        var e = {};
                        return e[g] = r, q.call(e, v, b.cpu), e
                    }, this.getDevice = function () {
                        var e = {};
                        return e[h] = r, e[c] = r, e[d] = r, q.call(e, v, b.device), C && !e[d] && y && y.mobile && (e[d] = w), C && "Macintosh" == e[c] && p && typeof p.standalone !== i && p.maxTouchPoints && p.maxTouchPoints > 2 && (e[c] = "iPad", e[d] = m), e
                    }, this.getEngine = function () {
                        var e = {};
                        return e[u] = r, e[f] = r, q.call(e, v, b.engine), e
                    }, this.getOS = function () {
                        var e = {};
                        return e[u] = r, e[f] = r, q.call(e, v, b.os), C && !e[u] && y && "Unknown" != y.platform && (e[u] = y.platform.replace(/chrome os/i, B).replace(/macos/i, D)), e
                    }, this.getResult = function () {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        }
                    }, this.getUA = function () {
                        return v
                    }, this.setUA = function (e) {
                        return v = typeof e === a && e.length > 350 ? F(e, 350) : e, this
                    }, this.setUA(v), this
                };
            Y.VERSION = "1.0.35", Y.BROWSER = H([u, f, l]), Y.CPU = H([g]), Y.DEVICE = H([c, h, d, p, w, v, m, y, b]), Y.ENGINE = Y.OS = H([u, f]), e.exports && (t = e.exports = Y), t.UAParser = Y;
            var Q = typeof n !== i && (n.jQuery || n.Zepto);
            if (Q && !Q.ua) {
                var J = new Y;
                Q.ua = J.getResult(), Q.ua.get = function () {
                    return J.getUA()
                }, Q.ua.set = function (e) {
                    J.setUA(e);
                    var t = J.getResult();
                    for (var n in t) Q.ua[n] = t[n]
                }
            }
        }("object" == typeof window ? window : c)
    }(er, er.exports);
    const tr = er.exports,
        nr = class {
            constructor() {
                __publicField(this, "storage", {})
            }
            static getInstance() {
                return nr.instance || (nr.instance = new nr), nr.instance
            }
            get length() {
                return Object.keys(this.storage).length
            }
            clear() {
                this.storage = {}
            }
            getItem(e) {
                var t;
                return null != (t = this.storage[e]) ? t : null
            }
            key(e) {
                var t;
                const n = Object.keys(this.storage);
                return e < 0 || e >= n.length ? null : null != (t = n[e]) ? t : null
            }
            removeItem(e) {
                delete this.storage[e]
            }
            setItem(e, t) {
                this.storage[e] = t
            }
        };
    let rr = nr;
    __publicField(rr, "instance");
    class or extends N {
        constructor(...e) {
            super(...e), Object.setPrototypeOf(this, or.prototype)
        }
    }

    function ir(...e) {
        try {
            console.debug("[TON_CONNECT_UI]", ...e)
        } catch (t) {}
    }

    function sr(e, t = "_self") {
        ir("openLink", e, t), window.open(e, t, "noopener noreferrer")
    }

    function ar(e) {
        sr(e, "_blank")
    }

    function lr(e, t) {
        const n = setTimeout((() => {
            pr("safari") || gr("android") && pr("firefox") || t()
        }), 200);
        window.addEventListener("blur", (() => clearTimeout(n)), {
            once: !0
        }), sr(e, "_self")
    }

    function cr(e) {
        return __async(this, null, (function* () {
            yield new Promise((e => requestAnimationFrame(e))), e()
        }))
    }

    function ur(e) {
        "complete" !== document.readyState ? window.addEventListener("load", (() => cr((() => ur(e)))), {
            once: !0
        }) : e.forEach((e => {
            (new window.Image).src = e
        }))
    }

    function dr() {
        if ("undefined" != typeof window) return window
    }

    function hr() {
        if (function () {
                try {
                    return "undefined" != typeof localStorage
                } catch (e) {
                    return !1
                }
            }()) return localStorage;
        if ("undefined" != typeof process && null != process.versions && null != process.versions.node) throw new or("`localStorage` is unavailable, but it is required for TonConnect. For more details, see https://github.com/ton-connect/sdk/tree/main/packages/sdk#init-connector");
        return rr.getInstance()
    }

    function fr() {
        var e, t, n;
        const r = (new tr).getResult(),
            o = null == (e = r.os.name) ? void 0 : e.toLowerCase();
        let i;
        switch (!0) {
            case "ipad" === (null == (t = r.device.model) ? void 0 : t.toLowerCase()):
                i = "ipad";
                break;
            case "ios" === o:
                i = "ios";
                break;
            case "android" === o:
                i = "android";
                break;
            case "mac os" === o:
                i = "macos";
                break;
            case "linux" === o:
                i = "linux";
                break;
            case null == o ? void 0:
                o.includes("windows"): i = "windows"
        }
        const s = null == (n = r.browser.name) ? void 0 : n.toLowerCase();
        let a;
        switch (!0) {
            case "chrome" === s:
                a = "chrome";
                break;
            case "firefox" === s:
                a = "firefox";
                break;
            case null == s ? void 0:
                s.includes("safari"): a = "safari";
                break;
            case null == s ? void 0:
                s.includes("opera"): a = "opera"
        }
        return {
            os: i,
            browser: a
        }
    }

    function gr(...e) {
        return e.includes(fr().os)
    }

    function pr(...e) {
        return e.includes(fr().browser)
    }

    function wr(e, t) {
        return t + new URL(e).search
    }
    class mr {
        constructor() {
            __publicField(this, "localStorage"), __publicField(this, "storageKey", "ton-connect-ui_wallet-info"), this.localStorage = hr()
        }
        setWalletInfo(e) {
            this.localStorage.setItem(this.storageKey, JSON.stringify(e))
        }
        getWalletInfo() {
            const e = this.localStorage.getItem(this.storageKey);
            return e ? JSON.parse(e) : null
        }
        removeWalletInfo() {
            this.localStorage.removeItem(this.storageKey)
        }
    }
    class vr {
        constructor() {
            __publicField(this, "localStorage"), __publicField(this, "storageKey", "ton-connect-ui_preferred-wallet"), this.localStorage = hr()
        }
        setPreferredWalletAppName(e) {
            this.localStorage.setItem(this.storageKey, e)
        }
        getPreferredWalletAppName() {
            return this.localStorage.getItem(this.storageKey) || void 0
        }
    }
    class yr {
        constructor() {
            __publicField(this, "localStorage"), __publicField(this, "storageKey", "ton-connect-ui_last-selected-wallet-info"), this.localStorage = hr()
        }
        setLastSelectedWalletInfo(e) {
            this.localStorage.setItem(this.storageKey, JSON.stringify(e))
        }
        getLastSelectedWalletInfo() {
            const e = this.localStorage.getItem(this.storageKey);
            return e ? JSON.parse(e) : null
        }
        removeLastSelectedWalletInfo() {
            this.localStorage.removeItem(this.storageKey)
        }
    }
    const [br, Cr] = gt({
        status: "closed",
        closeReason: null
    }), xr = vt((() => "opened" === br().status)), [_r, kr] = gt({
        status: "closed",
        closeReason: null
    }), Sr = vt((() => "opened" === _r().status)), Er = vt((() => {
        const e = _r();
        return "opened" === e.status ? e.walletInfo : null
    }));
    let Rr = "undefined" != typeof window ? new yr : void 0;
    const [Tr, Lr] = gt((null == Rr ? void 0 : Rr.getLastSelectedWalletInfo()) || null), Ar = e => {
        Rr || (Rr = new yr), e ? Rr.setLastSelectedWalletInfo(e) : Rr.removeLastSelectedWalletInfo(), Lr(e)
    }, [Mr, Or] = gt(null), Nr = {
        common: {
            close: "Закрыть",
            openWallet: "Открыть кошелёк",
            copyLink: "Копировать ссылку",
            linkCopied: "Ссылка скопирована",
            copied: "Ссылка скопирована",
            yourWallet: "Ваш кошелёк",
            retry: "Повторить",
            get: "Скачать",
            mobile: "Мобильный",
            browserExtension: "Расширение",
            desktop: "Десктоп"
        },
        button: {
            connectWallet: "Подключить кошелёк",
            dropdown: {
                copy: "Скопировать адрес",
                copied: "Адрес скопирован!",
                disconnect: "Отключить кошелёк"
            }
        },
        notifications: {
            confirm: {
                header: "Откройте {{ name }}, чтобы подтвердить транзакцию."
            },
            transactionSent: {
                header: "Транзакция отправлена",
                text: "Ваша транзакция будет обработана через несколько секунд."
            },
            transactionCanceled: {
                header: "Транзакция отменена",
                text: "Состояние вашего счёта не изменится."
            }
        },
        walletItem: {
            walletOn: "Wallet в",
            recent: "Недавний",
            installed: "Установлен",
            popular: "Популярен"
        },
        walletModal: {
            loading: "Кошельки загружаются",
            wallets: "Кошельки",
            mobileUniversalModal: {
                connectYourWallet: "Подключите кошелёк",
                openWalletOnTelegramOrSelect: "Подключите Wallet в Telegram или выберете кошелёк для подключения",
                openWalletOnTelegram: "Открыть Wallet в Telegram",
                openLink: "Открыть ссылку",
                scan: "Отсканируйте камерой вашего телефона"
            },
            desktopUniversalModal: {
                connectYourWallet: "Подключите кошелёк",
                scan: "Отсканируйте QR-код камерой вашего телефона",
                availableWallets: "Доступные кошельки"
            },
            mobileConnectionModal: {
                showQR: "Показать QR-код",
                scanQR: "Отсканируйте QR-код ниже камерой в приложении {{ name }}, или камерой телефона",
                continueIn: "Продолжите в {{ name }}…",
                connectionDeclined: "Подключение отклонено"
            },
            desktopConnectionModal: {
                scanQR: "Отсканируйте QR-код ниже камерой в приложении {{ name }}, или камерой телефона",
                continueInExtension: "Откройте браузерное расширение {{ name }}",
                dontHaveExtension: "Похоже, у вас не установлено браузерное расширение {{ name }}",
                getWallet: "Скачать {{ name }}",
                continueOnDesktop: "Откройте {{ name }} на компьютере…",
                openWalletOnTelegram: "Открыть Wallet в Telegram",
                connectionDeclined: "Подключение отклонено"
            },
            infoModal: {
                whatIsAWallet: "Что такое кошелёк?",
                secureDigitalAssets: "Надежное хранилище цифровых активов",
                walletProtects: "Кошелёк защищает ваши цифровые активы, включая TON, токены и предметы коллекционирования, и управляет ими.",
                controlIdentity: "Контроль своей личности Web3",
                manageIdentity: "Управляйте своей цифровой идентификацией и с легкостью получайте доступ к децентрализованным приложениям. Сохраняйте контроль над своими данными и безопасно участвуйте в экосистеме блокчейна.",
                effortlessCryptoTransactions: "Простые криптотранзакции",
                easilySend: "Легко отправляйте, получайте и отслеживайте свои криптовалюты. Оптимизируйте свои операции с помощью децентрализованных приложений.",
                getAWallet: "Скачать кошелёк"
            }
        },
        actionModal: {
            confirmTransaction: {
                header: "Подтвердите действие в {{ name }}",
                text: "Это займет пару секунд."
            },
            transactionSent: "$notifications.transactionSent",
            transactionCanceled: "$notifications.transactionCanceled"
        }
    }, Pr = {
        en: $r({
            common: {
                close: "Close",
                openWallet: "Open wallet",
                copyLink: "Copy Link",
                linkCopied: "Link Copied",
                copied: "Copied",
                yourWallet: "Your Wallet",
                retry: "Retry",
                get: "GET",
                mobile: "Mobile",
                browserExtension: "Browser Extension",
                desktop: "Desktop"
            },
            button: {
                connectWallet: "Connect Wallet",
                dropdown: {
                    copy: "Copy address",
                    copied: "Address copied!",
                    disconnect: "Disconnect"
                }
            },
            notifications: {
                confirm: {
                    header: "Open {{ name }} to confirm the transaction."
                },
                transactionSent: {
                    header: "Transaction sent",
                    text: "Your transaction will be processed in a few seconds."
                },
                transactionCanceled: {
                    header: "Transaction canceled",
                    text: "There will be no changes to your account."
                }
            },
            walletItem: {
                walletOn: "Wallet On",
                recent: "Recent",
                installed: "Installed",
                popular: "Popular"
            },
            walletModal: {
                loading: "Loading wallets",
                wallets: "Wallets",
                mobileUniversalModal: {
                    connectYourWallet: "Connect your wallet",
                    openWalletOnTelegramOrSelect: "Open Wallet in Telegram to connect",
                    openWalletOnTelegram: "Open Wallet in Telegram",
                    openLink: "Open Link",
                    scan: "Scan with your mobile wallet"
                },
                desktopUniversalModal: {
                    connectYourWallet: "Connect your wallet",
                    scan: "Scan with your mobile wallet",
                    availableWallets: "Available wallets"
                },
                mobileConnectionModal: {
                    showQR: "Show QR Code",
                    scanQR: "Scan the QR code below with your phone’s or {{ name }}’s camera",
                    continueIn: "Continue in {{ name }}…",
                    connectionDeclined: "Connection declined"
                },
                desktopConnectionModal: {
                    scanQR: "Scan the QR code below with your phone’s or {{ name }}’s camera",
                    continueInExtension: "Continue in {{ name }} browser extension…",
                    dontHaveExtension: "Seems you don't have installed {{ name }} browser extension",
                    getWallet: "Get {{ name }}",
                    continueOnDesktop: "Continue in {{ name }} on desktop…",
                    openWalletOnTelegram: "Open Wallet in Telegram on desktop",
                    connectionDeclined: "Connection declined"
                },
                infoModal: {
                    whatIsAWallet: "What is a wallet",
                    secureDigitalAssets: "Secure digital assets storage",
                    walletProtects: "A wallet protects and manages your digital assets including TON, tokens and collectables.",
                    controlIdentity: "Control your Web3 identity",
                    manageIdentity: "Manage your digital identity and access decentralized applications with ease. Maintain control over your data and engage securely in the blockchain ecosystem.",
                    effortlessCryptoTransactions: "Effortless crypto transactions",
                    easilySend: "Easily send, receive, monitor your cryptocurrencies. Streamline your operations with decentralized applications.",
                    getAWallet: "Get a Wallet"
                }
            },
            actionModal: {
                confirmTransaction: {
                    header: "Confirm the transaction in {{ name }}",
                    text: "It will only take a moment."
                },
                transactionSent: "$notifications.transactionSent",
                transactionCanceled: "$notifications.transactionCanceled"
            }
        }),
        ru: $r(Nr)
    };

    function $r(e) {
        const t = n => {
            Object.entries(n).forEach((([r, o]) => {
                if ("object" == typeof o && o) return t(o);
                if ("string" == typeof o) {
                    if ("$" === o[0]) {
                        const t = o.slice(1).split(".");
                        let i = e;
                        t.forEach((e => {
                            if (!(e in i)) throw new Error(`Cannot parse translations: there is no property ${e} in translation`);
                            i = i[e]
                        })), n[r] = i
                    }
                    "\\$" === o.slice(0, 2) && (n[r] = o.slice(1))
                }
            }))
        };
        return t(e), e
    }
    const Ir = St(),
        Ur = Symbol("store-raw"),
        Wr = Symbol("store-node"),
        jr = Symbol("store-name");

    function Br(e, t) {
        let n = e[Je];
        if (!n && (Object.defineProperty(e, Je, {
                value: n = new Proxy(e, zr)
            }), !Array.isArray(e))) {
            const t = Object.keys(e),
                r = Object.getOwnPropertyDescriptors(e);
            for (let o = 0, i = t.length; o < i; o++) {
                const i = t[o];
                r[i].get && Object.defineProperty(e, i, {
                    enumerable: r[i].enumerable,
                    get: r[i].get.bind(n)
                })
            }
        }
        return n
    }

    function Dr(e) {
        let t;
        return null != e && "object" == typeof e && (e[Je] || !(t = Object.getPrototypeOf(e)) || t === Object.prototype || Array.isArray(e))
    }

    function Hr(e, t = new Set) {
        let n, r, o, i;
        if (n = null != e && e[Ur]) return n;
        if (!Dr(e) || t.has(e)) return e;
        if (Array.isArray(e)) {
            Object.isFrozen(e) ? e = e.slice(0) : t.add(e);
            for (let n = 0, i = e.length; n < i; n++) o = e[n], (r = Hr(o, t)) !== o && (e[n] = r)
        } else {
            Object.isFrozen(e) ? e = Object.assign({}, e) : t.add(e);
            const n = Object.keys(e),
                s = Object.getOwnPropertyDescriptors(e);
            for (let a = 0, l = n.length; a < l; a++) i = n[a], s[i].get || (o = e[i], (r = Hr(o, t)) !== o && (e[i] = r))
        }
        return e
    }

    function Vr(e) {
        let t = e[Wr];
        return t || Object.defineProperty(e, Wr, {
            value: t = {}
        }), t
    }

    function Kr(e, t, n) {
        return e[t] || (e[t] = qr(n))
    }

    function Fr(e) {
        if (kt()) {
            const t = Vr(e);
            (t._ || (t._ = qr()))()
        }
    }

    function qr(e) {
        const [t, n] = gt(e, {
            equals: !1,
            internal: !0
        });
        return t.$ = n, t
    }
    const zr = {
        get(e, t, n) {
            if (t === Ur) return e;
            if (t === Je) return n;
            if (t === Xe) return Fr(e), n;
            const r = Vr(e),
                o = r.hasOwnProperty(t);
            let i = o ? r[t]() : e[t];
            if (t === Wr || "__proto__" === t) return i;
            if (!o) {
                const n = Object.getOwnPropertyDescriptor(e, t);
                !kt() || "function" == typeof i && !e.hasOwnProperty(t) || n && n.get || (i = Kr(r, t, i)())
            }
            return Dr(i) ? Br(i) : i
        },
        has(e, t) {
            return t === Ur || t === Je || t === Xe || t === Wr || "__proto__" === t || (this.get(e, t, e), t in e)
        },
        set: () => !0,
        deleteProperty: () => !0,
        ownKeys: function (e) {
            return Fr(e), Reflect.ownKeys(e)
        },
        getOwnPropertyDescriptor: function (e, t) {
            const n = Reflect.getOwnPropertyDescriptor(e, t);
            return n && !n.get && n.configurable && t !== Je && t !== Wr && t !== jr ? (delete n.value, delete n.writable, n.get = () => e[Je][t], n) : n
        }
    };

    function Zr(e, t, n, r = !1) {
        if (!r && e[t] === n) return;
        const o = e[t],
            i = e.length;
        void 0 === n ? delete e[t] : e[t] = n;
        let s, a = Vr(e);
        (s = Kr(a, t, o)) && s.$((() => n)), Array.isArray(e) && e.length !== i && (s = Kr(a, "length", i)) && s.$(e.length), (s = a._) && s.$()
    }

    function Gr(e, t) {
        const n = Object.keys(t);
        for (let r = 0; r < n.length; r += 1) {
            const o = n[r];
            Zr(e, o, t[o])
        }
    }

    function Yr(e, t, n = []) {
        let r, o = e;
        if (t.length > 1) {
            r = t.shift();
            const i = typeof r,
                s = Array.isArray(e);
            if (Array.isArray(r)) {
                for (let o = 0; o < r.length; o++) Yr(e, [r[o]].concat(t), n);
                return
            }
            if (s && "function" === i) {
                for (let o = 0; o < e.length; o++) r(e[o], o) && Yr(e, [o].concat(t), n);
                return
            }
            if (s && "object" === i) {
                const {
                    from: o = 0,
                    to: i = e.length - 1,
                    by: s = 1
                } = r;
                for (let r = o; r <= i; r += s) Yr(e, [r].concat(t), n);
                return
            }
            if (t.length > 1) return void Yr(e[r], t, [r].concat(n));
            o = e[r], n = [r].concat(n)
        }
        let i = t[0];
        "function" == typeof i && (i = i(o, n), i === o) || void 0 === r && null == i || (i = Hr(i), void 0 === r || Dr(o) && Dr(i) && !Array.isArray(i) ? Gr(o, i) : Zr(e, r, i))
    }

    function Qr(...[e, t]) {
        const n = Hr(e || {}),
            r = Array.isArray(n);
        return [Br(n), function (...e) {
            bt((() => {
                r && 1 === e.length ? function (e, t) {
                    if ("function" == typeof t && (t = t(e)), t = Hr(t), Array.isArray(t)) {
                        if (e === t) return;
                        let n = 0,
                            r = t.length;
                        for (; n < r; n++) {
                            const r = t[n];
                            e[n] !== r && Zr(e, n, r)
                        }
                        Zr(e, "length", r)
                    } else Gr(e, t)
                }(n, e[0]) : Yr(n, e)
            }))
        }]
    }
    const Jr = {
        constant: {
            black: "#000000",
            white: "#FFFFFF"
        },
        connectButton: {
            background: "#0098EA",
            foreground: "#FFFFFF"
        },
        accent: "#0098EA",
        telegramButton: "#0098EA",
        icon: {
            primary: "#0F0F0F",
            secondary: "#7A8999",
            tertiary: "#C1CAD2",
            success: "#29CC6A",
            error: "#F5A73B"
        },
        background: {
            primary: "#FFFFFF",
            secondary: "#F1F3F5",
            segment: "#FFFFFF",
            tint: "#F1F3F5",
            qr: "#F1F3F5"
        },
        text: {
            primary: "#0F0F0F",
            secondary: "#6A7785"
        }
    };
    var Xr = function (e) {
        return function (e) {
            return !!e && "object" == typeof e
        }(e) && ! function (e) {
            var t = Object.prototype.toString.call(e);
            return "[object RegExp]" === t || "[object Date]" === t || function (e) {
                return e.$$typeof === eo
            }(e)
        }(e)
    };
    var eo = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

    function to(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? so((n = e, Array.isArray(n) ? [] : {}), e, t) : e;
        var n
    }

    function no(e, t, n) {
        return e.concat(t).map((function (e) {
            return to(e, n)
        }))
    }

    function ro(e) {
        return Object.keys(e).concat(function (e) {
            return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function (t) {
                return e.propertyIsEnumerable(t)
            })) : []
        }(e))
    }

    function oo(e, t) {
        try {
            return t in e
        } catch (n) {
            return !1
        }
    }

    function io(e, t, n) {
        var r = {};
        return n.isMergeableObject(e) && ro(e).forEach((function (t) {
            r[t] = to(e[t], n)
        })), ro(t).forEach((function (o) {
            (function (e, t) {
                return oo(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, o) || (oo(e, o) && n.isMergeableObject(t[o]) ? r[o] = function (e, t) {
                if (!t.customMerge) return so;
                var n = t.customMerge(e);
                return "function" == typeof n ? n : so
            }(o, n)(e[o], t[o], n) : r[o] = to(t[o], n))
        })), r
    }

    function so(e, t, n) {
        (n = n || {}).arrayMerge = n.arrayMerge || no, n.isMergeableObject = n.isMergeableObject || Xr, n.cloneUnlessOtherwiseSpecified = to;
        var r = Array.isArray(t);
        return r === Array.isArray(e) ? r ? n.arrayMerge(e, t, n) : io(e, t, n) : to(t, n)
    }
    so.all = function (e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce((function (e, n) {
            return so(e, n, t)
        }), {})
    };
    var ao = so;

    function lo(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }

    function co(e) {
        var t, n;
        return !1 !== lo(e) && (void 0 === (t = e.constructor) || !1 !== lo(n = t.prototype) && !1 !== n.hasOwnProperty("isPrototypeOf"))
    }

    function uo(e, t) {
        if (!e) return t;
        return ao(t, e, {
            arrayMerge: (e, t, n) => t,
            isMergeableObject: co
        })
    }
    const [ho, fo] = Qr({
        theme: Ln.LIGHT,
        colors: Jr,
        borderRadius: "m"
    }), go = {
        [Ln.LIGHT]: Jr,
        [Ln.DARK]: {
            constant: {
                black: "#000000",
                white: "#FFFFFF"
            },
            connectButton: {
                background: "#0098EA",
                foreground: "#FFFFFF"
            },
            accent: "#E5E5EA",
            telegramButton: "#31A6F5",
            icon: {
                primary: "#E5E5EA",
                secondary: "#909099",
                tertiary: "#434347",
                success: "#29CC6A",
                error: "#F5A73B"
            },
            background: {
                primary: "#121214",
                secondary: "#18181A",
                segment: "#262629",
                tint: "#222224",
                qr: "#FFFFFF"
            },
            text: {
                primary: "#E5E5EA",
                secondary: "#7D7D85"
            }
        }
    }, po = {
        [Ln.LIGHT]: void 0,
        [Ln.DARK]: void 0
    };

    function wo(e, t) {
        t && (po[Ln.DARK] = uo(t[Ln.DARK], po[Ln.DARK]), po[Ln.LIGHT] = uo(t[Ln.LIGHT], po[Ln.LIGHT])), fo({
            theme: e,
            colors: uo(po[e], go[e])
        })
    }
    const mo = qn.div `
    background-color: ${e=>e.theme.colors.background.secondary};
`,
        vo = e => {
            let t;
            const [n, r] = gt(null);
            return mt((() => {
                const t = new window.Image;
                return t.src = e.src, t.alt = e.alt || "", t.setAttribute("draggable", "false"), e.class && t.classList.add(e.class), t.complete ? r(t) : (t.addEventListener("load", (() => r(t))), () => t.removeEventListener("load", (() => r(t))))
            })), [qt(Xt, {
                get when() {
                    return n()
                },
                get children() {
                    return n()
                }
            }), qt(Xt, {
                get when() {
                    return !n()
                },
                get children() {
                    return qt(mo, {
                        get class() {
                            return e.class
                        },
                        ref(e) {
                            "function" == typeof t ? t(e) : t = e
                        }
                    })
                }
            })]
        };
    let yo = {};
    try {
        yo = function (e) {
            e = e.replace(/^#/, "");
            let t = {};
            if (!e.length) return t;
            if (e.indexOf("=") < 0 && e.indexOf("?") < 0) return t._path = Lo(e), t;
            let n = e.indexOf("?");
            if (n >= 0) {
                let r = e.substr(0, n);
                t._path = Lo(r), e = e.substr(n + 1)
            }
            let r = function (e) {
                let t = {};
                if (!e.length) return t;
                let n, r, o, i, s = e.split("&");
                for (n = 0; n < s.length; n++) r = s[n].split("="), o = Lo(r[0]), i = null == r[1] ? null : Lo(r[1]), t[o] = i;
                return t
            }(e);
            for (let o in r) t[o] = r[o];
            return t
        }(location.hash.toString())
    } catch (Ju) {}
    let bo = "unknown";
    if ((null == yo ? void 0 : yo.tgWebAppPlatform) && (bo = null != (t = yo.tgWebAppPlatform) ? t : "unknown"), "unknown" === bo) {
        const e = dr();
        bo = null != (o = null == (r = null == (n = null == e ? void 0 : e.Telegram) ? void 0 : n.WebApp) ? void 0 : r.platform) ? o : "unknown"
    }
    let Co = "6.0";
    if ((null == yo ? void 0 : yo.tgWebAppVersion) && (Co = yo.tgWebAppVersion), !Co) {
        const e = dr();
        Co = null != (a = null == (s = null == (i = null == e ? void 0 : e.Telegram) ? void 0 : i.WebApp) ? void 0 : s.version) ? a : "6.0"
    }

    function xo(...e) {
        return e.includes(bo)
    }

    function _o() {
        var e;
        return "unknown" !== bo || !!(null == (e = dr()) ? void 0 : e.TelegramWebviewProxy)
    }

    function ko() {
        var e;
        const t = !!(null == (e = dr()) ? void 0 : e.TelegramWebview);
        return (_o() || t) && "unknown" === bo
    }

    function So() {
        To("web_app_expand", {})
    }

    function Eo(e, t) {
        const n = new URL(e);
        if ("http:" !== n.protocol && "https:" !== n.protocol) {
            if (t) return t();
            throw new or(`Url protocol is not supported: ${n}`)
        }
        if ("t.me" !== n.hostname) {
            if (t) return t();
            throw new or(`Url host is not supported: ${n}`)
        }
        const r = n.pathname + n.search;
        Ro() || function (e, t) {
            "string" != typeof e && (e = ""), "string" != typeof t && (t = "");
            let n, r, o, i, s = e.replace(/^\s+|\s+$/g, "").split("."),
                a = t.replace(/^\s+|\s+$/g, "").split(".");
            for (n = Math.max(s.length, a.length), r = 0; r < n; r++)
                if (o = parseInt(s[r]) || 0, i = parseInt(a[r]) || 0, o !== i) return o > i ? 1 : -1;
            return 0
        }(Co, "6.1") >= 0 ? To("web_app_open_tg_link", {
            path_full: r
        }) : ar("https://t.me" + r)
    }

    function Ro() {
        try {
            const e = dr();
            return !!e && (null != e.parent && e !== e.parent)
        } catch (Ju) {
            return !1
        }
    }

    function To(e, t) {
        try {
            const n = dr();
            if (!n) throw new or("Can't post event to parent window: window is not defined");
            if (void 0 !== n.TelegramWebviewProxy) ir("postEvent", e, t), n.TelegramWebviewProxy.postEvent(e, JSON.stringify(t));
            else if (n.external && "notify" in n.external) ir("postEvent", e, t), n.external.notify(JSON.stringify({
                eventType: e,
                eventData: t
            }));
            else {
                if (!Ro()) throw new or("Can't post event to TMA"); {
                    const r = "*",
                        o = JSON.stringify({
                            eventType: e,
                            eventData: t
                        });
                    ir("postEvent", e, t), n.parent.postMessage(o, r)
                }
            }
        } catch (Ju) {
            ! function (...t) {
                try {
                    console.error("[TON_CONNECT_UI]", ...t)
                } catch (e) {}
            }(`Can't post event to parent window: ${Ju}`)
        }
    }

    function Lo(e) {
        try {
            return e = e.replace(/\+/g, "%20"), decodeURIComponent(e)
        } catch (Ju) {
            return e
        }
    }
    const Ao = {
        mobile: 440,
        tablet: 1020
    };

    function Mo(e) {
        const t = dr();
        if (!t) return "desktop" === e;
        if (xo("weba")) return !0;
        const n = t.innerWidth;
        switch (e) {
            case "desktop":
                return n > Ao.tablet;
            case "tablet":
                return n > Ao.mobile;
            default:
                return n <= Ao.mobile || gr("ios", "android", "ipad")
        }
    }

    function Oo(e) {
        switch (e) {
            case "mobile":
                return `@media (max-width: ${Ao.mobile}px)`;
            case "tablet":
                return `@media (max-width: ${Ao.tablet}px) (min-width: ${Ao.mobile}px)`;
            default:
                return `@media (min-width: ${Ao.tablet}px)`
        }
    }
    const No = "@media (hover: none)",
        Po = "@media not all and (hover: none)",
        $o = {
            m: "100vh",
            s: "8px",
            none: "0"
        },
        Io = {
            s: .02,
            m: .04
        },
        Uo = qn.button `
    display: ${e=>e.leftIcon||e.rightIcon?"flex":"inline-block"};
    gap: ${e=>e.leftIcon||e.rightIcon?"6px":"unset"};
    align-items: ${e=>e.leftIcon||e.rightIcon?"center":"unset"};
    justify-content: ${e=>e.leftIcon||e.rightIcon?"space-between":"unset"};
    background-color: ${e=>"flat"===e.appearance?"transparent":"secondary"===e.appearance?e.theme.colors.background.tint:Jn(e.theme.colors.accent,.12)};
    color: ${e=>"secondary"===e.appearance?e.theme.colors.text.primary:e.theme.colors.accent};

    padding: ${e=>"flat"===e.appearance?"0":"9px 16px"};
    padding-left: ${e=>e.leftIcon&&"flat"!==e.appearance?"12px":"16px"};
    padding-right: ${e=>e.rightIcon&&"flat"!==e.appearance?"12px":"16px"};
    border: none;
    border-radius: ${e=>$o[e.theme.borderRadius]};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    font-size: 14px;
    font-weight: 510;
    line-height: 18px;

    transition: transform 0.125s ease-in-out;

    ${Po} {
        &:hover {
            transform: ${e=>e.disabled?"unset":`scale(${1+Io[e.scale]})`};
        }
    }

    &:active {
        transform: ${e=>e.disabled?"unset":`scale(${1-Io[e.scale]})`};
    }

    ${No} {
        &:active {
            transform: ${e=>e.disabled?"unset":`scale(${1-2*Io[e.scale]})`};
        }
    }
`;

    function Wo(e) {
        const t = Ct((() => Object.keys(e).filter((e => e.startsWith("data-"))))),
            [n] = Qt(e, t);
        return n
    }
    const jo = e => {
        const t = Wo(e);
        return qt(Uo, Yt({
            get appearance() {
                return e.appearance || "primary"
            },
            get class() {
                return e.class
            },
            onClick: t => {
                var n;
                return null == (n = e.onClick) ? void 0 : n.call(e, t)
            },
            onMouseEnter: t => {
                var n;
                return null == (n = e.onMouseEnter) ? void 0 : n.call(e, t)
            },
            onMouseLeave: t => {
                var n;
                return null == (n = e.onMouseLeave) ? void 0 : n.call(e, t)
            },
            ref(t) {
                const n = e.ref;
                "function" == typeof n ? n(t) : e.ref = t
            },
            get disabled() {
                return e.disabled
            },
            get scale() {
                return e.scale || "m"
            },
            get leftIcon() {
                return !!e.leftIcon
            },
            get rightIcon() {
                return !!e.rightIcon
            },
            "data-tc-button": "true"
        }, t, {
            get children() {
                return [vt((() => e.leftIcon)), vt((() => e.children)), vt((() => e.rightIcon))]
            }
        }))
    };
    var Bo = {
        exports: {}
    };
    ! function (e) {
        ! function () {
            var t = {}.hasOwnProperty;

            function n() {
                for (var e = [], r = 0; r < arguments.length; r++) {
                    var o = arguments[r];
                    if (o) {
                        var i = typeof o;
                        if ("string" === i || "number" === i) e.push(o);
                        else if (Array.isArray(o)) {
                            if (o.length) {
                                var s = n.apply(null, o);
                                s && e.push(s)
                            }
                        } else if ("object" === i) {
                            if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) {
                                e.push(o.toString());
                                continue
                            }
                            for (var a in o) t.call(o, a) && o[a] && e.push(a)
                        }
                    }
                }
                return e.join(" ")
            }
            e.exports ? (n.default = n, e.exports = n) : window.classNames = n
        }()
    }(Bo);
    const Do = Bo.exports;

    function Ho(e) {
        requestAnimationFrame((() => {
            requestAnimationFrame(e)
        }))
    }
    const Vo = e => {
        let t, n = !0;
        const [r, o] = gt(), [i, s] = gt(), a = Rt((() => e.children)), {
            onBeforeEnter: l,
            onEnter: c,
            onAfterEnter: u,
            onBeforeExit: d,
            onExit: h,
            onAfterExit: f
        } = e, g = vt((() => {
            const t = e.name || "s";
            return {
                enterActiveClass: e.enterActiveClass || t + "-enter-active",
                enterClass: e.enterClass || t + "-enter",
                enterToClass: e.enterToClass || t + "-enter-to",
                exitActiveClass: e.exitActiveClass || t + "-exit-active",
                exitClass: e.exitClass || t + "-exit",
                exitToClass: e.exitToClass || t + "-exit-to"
            }
        }));

        function p(t, a) {
            if (!n || e.appear) {
                let n = function (l) {
                    !t || l && l.target !== t || (t.removeEventListener("transitionend", n), t.removeEventListener("animationend", n), t.classList.remove(...h), t.classList.remove(...f), bt((() => {
                        r() !== t && o(t), i() === t && s(void 0)
                    })), u && u(t), "inout" === e.mode && w(t, a))
                };
                const d = g().enterClass.split(" "),
                    h = g().enterActiveClass.split(" "),
                    f = g().enterToClass.split(" ");
                l && l(t), t.classList.add(...d), t.classList.add(...h), Ho((() => {
                    t.classList.remove(...d), t.classList.add(...f), c && c(t, (() => n())), (!c || c.length < 2) && (t.addEventListener("transitionend", n), t.addEventListener("animationend", n))
                }))
            }
            a && !e.mode ? s(t) : o(t)
        }

        function w(t, n) {
            const i = g().exitClass.split(" "),
                s = g().exitActiveClass.split(" "),
                a = g().exitToClass.split(" ");
            if (!n.parentNode) return l();

            function l(i) {
                i && i.target !== n || (n.removeEventListener("transitionend", l), n.removeEventListener("animationend", l), n.classList.remove(...s), n.classList.remove(...a), r() === n && o(void 0), f && f(n), "outin" === e.mode && p(t, n))
            }
            d && d(n), n.classList.add(...i), n.classList.add(...s), Ho((() => {
                n.classList.remove(...i), n.classList.add(...a)
            })), h && h(n, (() => l())), (!h || h.length < 2) && (n.addEventListener("transitionend", l), n.addEventListener("animationend", l))
        }
        return pt((r => {
            for (t = a();
                "function" == typeof t;) t = t();
            return Ct((() => (t && t !== r && ("outin" !== e.mode ? p(t, r) : n && o(t)), r && r !== t && "inout" !== e.mode && w(t, r), n = !1, t)))
        })), [r, i]
    };

    function Ko(e) {
        const {
            top: t,
            bottom: n,
            left: r,
            right: o,
            width: i,
            height: s
        } = e.getBoundingClientRect(), a = e.parentNode.getBoundingClientRect();
        return {
            top: t - a.top,
            bottom: n,
            left: r - a.left,
            right: o,
            width: i,
            height: s
        }
    }
    const Fo = e => {
        const t = Rt((() => e.children)),
            n = vt((() => {
                const t = e.name || "s";
                return {
                    enterActiveClass: e.enterActiveClass || t + "-enter-active",
                    enterClass: e.enterClass || t + "-enter",
                    enterToClass: e.enterToClass || t + "-enter-to",
                    exitActiveClass: e.exitActiveClass || t + "-exit-active",
                    exitClass: e.exitClass || t + "-exit",
                    exitToClass: e.exitToClass || t + "-exit-to",
                    moveClass: e.moveClass || t + "-move"
                }
            })),
            {
                onBeforeEnter: r,
                onEnter: o,
                onAfterEnter: i,
                onBeforeExit: s,
                onExit: a,
                onAfterExit: l
            } = e,
            [c, u] = gt();
        let d = [],
            h = !0;
        return pt((() => {
            const e = t(),
                c = [...e],
                f = new Set(e),
                g = new Set(d),
                p = n().enterClass.split(" "),
                w = n().enterActiveClass.split(" "),
                m = n().enterToClass.split(" "),
                v = n().exitClass.split(" "),
                y = n().exitActiveClass.split(" "),
                b = n().exitToClass.split(" ");
            for (let t = 0; t < e.length; t++) {
                const n = e[t];
                if (!h && !g.has(n)) {
                    let e = function (t) {
                        !n || t && t.target !== n || (n.removeEventListener("transitionend", e), n.removeEventListener("animationend", e), n.classList.remove(...w), n.classList.remove(...m), i && i(n))
                    };
                    r && r(n), n.classList.add(...p), n.classList.add(...w), Ho((() => {
                        n.classList.remove(...p), n.classList.add(...m), o && o(n, (() => e())), (!o || o.length < 2) && (n.addEventListener("transitionend", e), n.addEventListener("animationend", e))
                    }))
                }
            }
            for (let t = 0; t < d.length; t++) {
                const e = d[t];
                if (!f.has(e) && e.parentNode) {
                    let n = function (t) {
                        t && t.target !== e || (e.removeEventListener("transitionend", n), e.removeEventListener("animationend", n), e.classList.remove(...y), e.classList.remove(...b), l && l(e), d = d.filter((t => t !== e)), u(d))
                    };
                    c.splice(t, 0, e), s && s(e), e.classList.add(...v), e.classList.add(...y), Ho((() => {
                        e.classList.remove(...v), e.classList.add(...b)
                    })), a && a(e, (() => n())), (!a || a.length < 2) && (e.addEventListener("transitionend", n), e.addEventListener("animationend", n))
                }
            }
            d = c, u(c)
        })), mt((e => {
            const t = c();
            return t.forEach((t => {
                let n;
                (n = e.get(t)) ? n.new && (n.new = !1, n.newPos = Ko(t)): e.set(t, n = {
                    pos: Ko(t),
                    new: !h
                }), n.new && t.addEventListener("transitionend", (() => {
                    n.new = !1, t.parentNode && (n.newPos = Ko(t))
                }), {
                    once: !0
                }), n.newPos && (n.pos = n.newPos), n.newPos = Ko(t)
            })), h ? (h = !1, e) : (t.forEach((t => {
                const n = e.get(t),
                    r = n.pos,
                    o = n.newPos,
                    i = r.left - o.left,
                    s = r.top - o.top;
                if (i || s) {
                    n.moved = !0;
                    const e = t.style;
                    e.transform = `translate(${i}px,${s}px)`, e.transitionDuration = "0s"
                }
            })), document.body.offsetHeight, t.forEach((t => {
                const r = e.get(t);
                if (r.moved) {
                    let e = function (n) {
                        n && n.target !== t || !t.parentNode || n && !/transform$/.test(n.propertyName) || (t.removeEventListener("transitionend", e), t.classList.remove(...i))
                    };
                    r.moved = !1;
                    const o = t.style,
                        i = n().moveClass.split(" ");
                    t.classList.add(...i), o.transform = o.transitionDuration = "", t.addEventListener("transitionend", e)
                }
            })), e)
        }), new Map), c
    };
    const qo = "androidBackHandler",
        zo = {
            [qo]: !0
        },
        Zo = dn('<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2122 14.3407C10.5384 14.0854 10.5959 13.614 10.3406 13.2878L6.20237 8.00003L10.3406 2.71227C10.5959 2.38607 10.5384 1.91469 10.2122 1.6594C9.88604 1.40412 9.41465 1.46161 9.15937 1.7878L4.65937 7.5378C4.44688 7.80932 4.44688 8.19074 4.65937 8.46226L9.15937 14.2123C9.41465 14.5385 9.88604 14.5959 10.2122 14.3407Z"></path></svg>', 0, !0),
        Go = {
            left: 0,
            top: 90,
            right: 180,
            bottom: 270
        },
        Yo = e => {
            const t = Kn();
            return qt(qn("svg")
                `
        transform: rotate(${e=>Go[e.svgDirection]}deg);
        transition: transform 0.1s ease-in-out;
    `, {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    get svgDirection() {
                        return e.direction || "left"
                    },
                    get children() {
                        const n = Zo.cloneNode(!0);
                        return wt((() => hn(n, "fill", e.fill || t.colors.icon.secondary))), n
                    }
                })
        },
        Qo = dn('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.71966 2.71968C3.01255 2.42678 3.48743 2.42677 3.78032 2.71966L8.00002 6.93925L12.2197 2.71967C12.5126 2.42677 12.9874 2.42678 13.2803 2.71967C13.5732 3.01257 13.5732 3.48744 13.2803 3.78033L9.06068 7.99991L13.2803 12.2197C13.5732 12.5126 13.5732 12.9874 13.2803 13.2803C12.9874 13.5732 12.5126 13.5732 12.2197 13.2803L8.00002 9.06057L3.78033 13.2803C3.48744 13.5732 3.01257 13.5732 2.71967 13.2803C2.42678 12.9874 2.42677 12.5126 2.71967 12.2197L6.93936 7.99991L2.71968 3.78034C2.42678 3.48745 2.42677 3.01257 2.71966 2.71968Z"></path></svg>'),
        Jo = e => {
            const t = Kn();
            return (() => {
                const n = Qo.cloneNode(!0),
                    r = n.firstChild;
                return wt((() => hn(r, "fill", e.fill || t.colors.icon.secondary))), n
            })()
        },
        Xo = qn.button `
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${e=>e.theme.colors.background.tint};
    border: none;
    cursor: pointer;

    transition: transform 0.125s ease-in-out;

    ${Po} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${No} {
        &:active {
            transform: scale(0.92);
        }
    }
`,
        ei = e => {
            const t = Wo(e),
                n = () => e.icon || "close";
            return qt(Xo, Yt({
                get class() {
                    return e.class
                },
                onClick: () => e.onClick(),
                "data-tc-icon-button": "true"
            }, t, {
                get children() {
                    return [qt(Xt, {
                        get when() {
                            return !!e.children
                        },
                        get children() {
                            return e.children
                        }
                    }), qt(Xt, {
                        get when() {
                            return !e.children
                        },
                        get children() {
                            return qt(en, {
                                get children() {
                                    return [qt(tn, {
                                        get when() {
                                            return "close" === n()
                                        },
                                        get children() {
                                            return qt(Jo, {
                                                get fill() {
                                                    return e.fill
                                                }
                                            })
                                        }
                                    }), qt(tn, {
                                        get when() {
                                            return "arrow" === n()
                                        },
                                        get children() {
                                            return qt(Yo, {
                                                get fill() {
                                                    return e.fill
                                                }
                                            })
                                        }
                                    }), qt(tn, {
                                        get when() {
                                            return "question" === n()
                                        },
                                        get children() {
                                            return qt(Ss, {
                                                get fill() {
                                                    return e.fill
                                                }
                                            })
                                        }
                                    }), qt(tn, {
                                        get when() {
                                            return "string" != typeof n()
                                        },
                                        get children() {
                                            return n()
                                        }
                                    })]
                                }
                            })
                        }
                    })]
                }
            }))
        },
        ti = {
            m: "24px",
            s: "16px",
            none: "0"
        },
        ni = qn.div `
    display: flex;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 20px 0;
    overflow-y: auto;

    ${Oo("mobile")} {
        padding-bottom: 0;
    }
`,
        ri = Bn `
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 16px 64px rgba(0, 0, 0, 0.16);
    width: fit-content;
    margin: auto;

    ${Oo("mobile")} {
        width: 100%;
        height: fit-content;
        margin: auto 0 0 0;
    }
`,
        oi = qn.div `
    position: relative;
    min-height: 100px;
    width: 416px;
    padding: 44px 56px 24px;

    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.04);

    background-color: ${e=>e.theme.colors.background.primary};
    border-radius: ${e=>ti[e.theme.borderRadius]};

    ${Oo("mobile")} {
        width: 100%;
    }
`,
        ii = qn(ei)
    `
    position: absolute;
    right: 16px;
    top: 16px;
`, si = qn.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 16px 16px 18px;
    border-radius: 0 0 ${e=>ti[e.theme.borderRadius]}
        ${e=>ti[e.theme.borderRadius]};
`, ai = qn(ei)
    `
    background-color: ${e=>Jn(e.theme.colors.icon.secondary,.12)};
`;
    class li {
        constructor() {
            __publicField(this, "currentTime", 0)
        }
    }
    const ci = class {
        constructor() {
            __publicField(this, "currentTime", 0), __publicField(this, "playbackRate", 1), __publicField(this, "startTime", null), __publicField(this, "timeline", new li), __publicField(this, "finished", Promise.resolve(this)), __publicField(this, "effect", null), __publicField(this, "id", ""), __publicField(this, "pending", !1), __publicField(this, "playState", "finished"), __publicField(this, "replaceState", "active"), __publicField(this, "ready", Promise.resolve(this)), __publicField(this, "oncancel", null), __publicField(this, "onfinish", null), __publicField(this, "onremove", null)
        }
        static create() {
            return ci._instance || (! function (...e) {
                try {
                    console.warn("[TON_CONNECT_UI]", ...e)
                } catch (Ju) {}
            }("Animation is not supported in this environment: please consider using the `web-animations-js` polyfill to provide a fallback implementation of the Web Animations API."), ci._instance = new ci), ci._instance
        }
        cancel() {}
        finish() {}
        pause() {}
        play() {}
        reverse() {}
        addEventListener(e, t, n) {}
        dispatchEvent(e) {
            return !1
        }
        removeEventListener(e, t, n) {}
        updatePlaybackRate(e) {}
        commitStyles() {}
        persist() {}
    };
    let ui = ci;

    function di(e, t, n) {
        return "animate" in e ? e.animate(t, n) : ui.create()
    }
    __publicField(ui, "_instance", null);
    const hi = dn("<div></div>"),
        fi = function (e, t) {
            const n = n => {
                var r;
                return !e.contains(n.target) && (null == (r = t()) ? void 0 : r())
            };
            document.body.addEventListener("click", n), _t((() => document.body.removeEventListener("click", n)))
        },
        gi = function (e, t) {
            const n = e => {
                var n, r;
                "Escape" === e.key && (null == (n = document.activeElement) || n.blur(), null == (r = t()) || r())
            };
            document.body.addEventListener("keydown", n), _t((() => document.body.removeEventListener("keydown", n)))
        },
        pi = function (e, t) {
            const {
                isEnabled: n,
                onClose: r
            } = t();
            if (!n) return;
            if (!("android" === fr().os)) return;
            window.history.pushState(zo, "");
            const o = e => {
                e.preventDefault(), r()
            };
            window.addEventListener("popstate", o, {
                once: !0
            }), _t((() => {
                window.removeEventListener("popstate", o), cr((() => {
                    var e;
                    !0 === (null == (e = window.history.state) ? void 0 : e[qo]) && window.history.back()
                }))
            }))
        },
        wi = e => {
            const t = Kn(),
                n = Wo(e);
            return mt((() => {
                e.opened ? document.documentElement.scrollHeight !== document.documentElement.clientHeight && (document.body.style.top = Xn(-document.documentElement.scrollTop), document.body.classList.add(Gn)) : (document.body.classList.remove(Gn), document.documentElement.scrollTo({
                    top: -parseFloat(getComputedStyle(document.body).top)
                }), document.body.style.top = "auto")
            })), qt(Vo, {
                onBeforeEnter: e => {
                    const t = Mo("mobile") ? 200 : 100;
                    di(e, [{
                        opacity: 0
                    }, {
                        opacity: 1
                    }], {
                        duration: t
                    }), Mo("mobile") && di(e.firstElementChild, [{
                        transform: "translateY(390px)"
                    }, {
                        transform: "translateY(0)"
                    }], {
                        duration: t
                    })
                },
                onExit: (e, t) => {
                    const n = Mo("mobile") ? 200 : 100,
                        r = di(e, [{
                            opacity: 1
                        }, {
                            opacity: 0
                        }], {
                            duration: n
                        });
                    if (Mo("mobile")) {
                        const o = di(e.firstElementChild, [{
                            transform: "translateY(0)"
                        }, {
                            transform: "translateY(390px)"
                        }], {
                            duration: n
                        });
                        Promise.all([r.finished, o.finished]).then(t)
                    } else r.finished.then(t)
                },
                get children() {
                    return qt(Xt, {
                        get when() {
                            return e.opened
                        },
                        get children() {
                            return qt(ni, Yt({
                                "data-tc-modal": "true"
                            }, n, {
                                get children() {
                                    const n = hi.cloneNode(!0);
                                    return pn(pi, n, (() => ({
                                        isEnabled: e.enableAndroidBackHandler,
                                        onClose: () => e.onClose()
                                    }))), pn(gi, n, (() => () => e.onClose())), pn(fi, n, (() => () => e.onClose())), wn(n, qt(oi, {
                                        get class() {
                                            return e.class
                                        },
                                        get children() {
                                            return [qt(ii, {
                                                icon: "close",
                                                onClick: () => e.onClose()
                                            }), vt((() => e.children))]
                                        }
                                    }), null), wn(n, qt(Xt, {
                                        get when() {
                                            return e.onClickQuestion
                                        },
                                        get children() {
                                            return qt(si, {
                                                get children() {
                                                    return [qt(_s, {}), qt(ai, {
                                                        get onClick() {
                                                            return e.onClickQuestion
                                                        },
                                                        icon: "question"
                                                    })]
                                                }
                                            })
                                        }
                                    }), null), wt((() => fn(n, Do(ri, Bn `
                                border-radius: ${ti[t.borderRadius]};
                                background-color: ${t.colors.background.tint};

                                ${Oo("mobile")} {
                                    border-radius: ${ti[t.borderRadius]}
                                        ${ti[t.borderRadius]} 0 0;
                                }
                            `)))), n
                                }
                            }))
                        }
                    })
                }
            })
        },
        mi = {
            m: "22px",
            s: "12px",
            none: "0"
        },
        vi = {
            m: "18px",
            s: "8px",
            none: "0"
        },
        yi = qn.div `
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    width: fit-content;
    justify-items: center;
    gap: 4px;

    position: relative;
    padding: 4px;
    border-radius: ${e=>mi[e.theme.borderRadius]};

    background-color: ${e=>e.theme.colors.background.secondary};
`,
        bi = qn.div `
    position: absolute;
    top: 4px;
    left: 4px;

    height: calc(100% - 8px);
    width: calc(50% - 4px);

    border-radius: ${e=>vi[e.theme.borderRadius]};
    background-color: ${e=>e.theme.colors.background.segment};

    transform: ${e=>e.right?"translateX(100%)":"translateX(0)"};

    transition: transform 0.13s ease-in-out;
`,
        Ci = qn.input `
    display: none;
`,
        xi = qn.label `
    padding: 9px 12px;
    z-index: 1;

    cursor: ${e=>e.isActive?"default":"pointer"};

    transition: transform 0.13s ease-in-out;

    &:hover {
        transform: ${e=>e.isActive?"none":"scale(1.025)"};
    }

    > * {
        ${e=>e.isActive?"":`color: ${e.theme.colors.text.secondary};`}
    }
`,
        _i = {
            m: "16px",
            s: "12px",
            none: "0"
        },
        ki = {
            m: "12px",
            s: "8px",
            none: "0"
        },
        Si = qn.div `
    width: 52px;
    height: 52px;
    background: transparent;
    position: absolute;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.125s ease-in-out;
`,
        Ei = qn.button `
    display: flex;
    align-items: center;
    position: relative;
    background-color: ${e=>e.theme.colors.background.qr};
    border-radius: ${e=>_i[e.theme.borderRadius]};
    padding: ${Xn(24)} 0;
    height: ${Xn(304)};
    width: 100%;

    overflow: hidden;
    cursor: pointer;
    border: none;

    ${Po} {
        &:hover {
            ${Si.class} {
                transform: scale(1.04);
            }
        }
    }

    &:active {
        ${Si.class} {
            transform: scale(0.96);
        }
    }

    ${No} {
        &:active {
            ${Si.class} {
                transform: scale(0.92);
            }
        }
    }
`,
        Ri = qn.div `
    position: relative;

    width: fit-content;
    margin: 0 auto;

    > div:first-child {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    rect {
        fill: transparent;
    }

    path {
        fill: ${e=>e.theme.colors.constant.black};
    }
`,
        Ti = qn.div `
    position: absolute;
    width: ${Xn(60)};
    height: ${Xn(60)};
    background: ${e=>e.theme.colors.background.qr};

    display: flex;
    align-items: center;
    justify-content: center;
`,
        Li = qn(vo)
    `
    width: ${e=>Xn(e.size)};
    height: ${e=>Xn(e.size)};
    border-radius: ${e=>ki[e.theme.borderRadius]};
    background-color: ${e=>e.theme.colors.background.qr};
`, Ai = qn.div `
    position: absolute;
    bottom: 14px;
    left: 50%;
    transform: translate(-50%, 0);

    display: flex;
    gap: 6px;
    align-items: center;
    border-radius: 18px;
    min-width: 126px;
    padding: 9px 16px 9px 10px;

    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.08));
    background-color: ${e=>e.theme.colors.background.segment};
`;
    var Mi = {
        exports: {}
    };
    ! function (e, t) {
        var n = function () {
            var e = function (e, t) {
                var n = e,
                    r = u[t],
                    o = null,
                    i = 0,
                    s = null,
                    a = [],
                    l = {},
                    c = function (e, t) {
                        o = function (e) {
                            for (var t = new Array(e), n = 0; n < e; n += 1) {
                                t[n] = new Array(e);
                                for (var r = 0; r < e; r += 1) t[n][r] = null
                            }
                            return t
                        }(i = 4 * n + 17), d(0, 0), d(i - 7, 0), d(0, i - 7), f(), h(), p(e, t), n >= 7 && g(e), null == s && (s = m(n, r, a)), w(s, t)
                    },
                    d = function (e, t) {
                        for (var n = -1; n <= 7; n += 1)
                            if (!(e + n <= -1 || i <= e + n))
                                for (var r = -1; r <= 7; r += 1) t + r <= -1 || i <= t + r || (o[e + n][t + r] = 0 <= n && n <= 6 && (0 == r || 6 == r) || 0 <= r && r <= 6 && (0 == n || 6 == n) || 2 <= n && n <= 4 && 2 <= r && r <= 4)
                    },
                    h = function () {
                        for (var e = 8; e < i - 8; e += 1) null == o[e][6] && (o[e][6] = e % 2 == 0);
                        for (var t = 8; t < i - 8; t += 1) null == o[6][t] && (o[6][t] = t % 2 == 0)
                    },
                    f = function () {
                        for (var e = y.getPatternPosition(n), t = 0; t < e.length; t += 1)
                            for (var r = 0; r < e.length; r += 1) {
                                var i = e[t],
                                    s = e[r];
                                if (null == o[i][s])
                                    for (var a = -2; a <= 2; a += 1)
                                        for (var l = -2; l <= 2; l += 1) o[i + a][s + l] = -2 == a || 2 == a || -2 == l || 2 == l || 0 == a && 0 == l
                            }
                    },
                    g = function (e) {
                        for (var t = y.getBCHTypeNumber(n), r = 0; r < 18; r += 1) {
                            var s = !e && 1 == (t >> r & 1);
                            o[Math.floor(r / 3)][r % 3 + i - 8 - 3] = s
                        }
                        for (r = 0; r < 18; r += 1) {
                            s = !e && 1 == (t >> r & 1);
                            o[r % 3 + i - 8 - 3][Math.floor(r / 3)] = s
                        }
                    },
                    p = function (e, t) {
                        for (var n = r << 3 | t, s = y.getBCHTypeInfo(n), a = 0; a < 15; a += 1) {
                            var l = !e && 1 == (s >> a & 1);
                            a < 6 ? o[a][8] = l : a < 8 ? o[a + 1][8] = l : o[i - 15 + a][8] = l
                        }
                        for (a = 0; a < 15; a += 1) {
                            l = !e && 1 == (s >> a & 1);
                            a < 8 ? o[8][i - a - 1] = l : a < 9 ? o[8][15 - a - 1 + 1] = l : o[8][15 - a - 1] = l
                        }
                        o[i - 8][8] = !e
                    },
                    w = function (e, t) {
                        for (var n = -1, r = i - 1, s = 7, a = 0, l = y.getMaskFunction(t), c = i - 1; c > 0; c -= 2)
                            for (6 == c && (c -= 1);;) {
                                for (var u = 0; u < 2; u += 1)
                                    if (null == o[r][c - u]) {
                                        var d = !1;
                                        a < e.length && (d = 1 == (e[a] >>> s & 1)), l(r, c - u) && (d = !d), o[r][c - u] = d, -1 == (s -= 1) && (a += 1, s = 7)
                                    } if ((r += n) < 0 || i <= r) {
                                    r -= n, n = -n;
                                    break
                                }
                            }
                    },
                    m = function (e, t, n) {
                        for (var r = x.getRSBlocks(e, t), o = _(), i = 0; i < n.length; i += 1) {
                            var s = n[i];
                            o.put(s.getMode(), 4), o.put(s.getLength(), y.getLengthInBits(s.getMode(), e)), s.write(o)
                        }
                        var a = 0;
                        for (i = 0; i < r.length; i += 1) a += r[i].dataCount;
                        if (o.getLengthInBits() > 8 * a) throw "code length overflow. (" + o.getLengthInBits() + ">" + 8 * a + ")";
                        for (o.getLengthInBits() + 4 <= 8 * a && o.put(0, 4); o.getLengthInBits() % 8 != 0;) o.putBit(!1);
                        for (; !(o.getLengthInBits() >= 8 * a || (o.put(236, 8), o.getLengthInBits() >= 8 * a));) o.put(17, 8);
                        return function (e, t) {
                            for (var n = 0, r = 0, o = 0, i = new Array(t.length), s = new Array(t.length), a = 0; a < t.length; a += 1) {
                                var l = t[a].dataCount,
                                    c = t[a].totalCount - l;
                                r = Math.max(r, l), o = Math.max(o, c), i[a] = new Array(l);
                                for (var u = 0; u < i[a].length; u += 1) i[a][u] = 255 & e.getBuffer()[u + n];
                                n += l;
                                var d = y.getErrorCorrectPolynomial(c),
                                    h = C(i[a], d.getLength() - 1).mod(d);
                                for (s[a] = new Array(d.getLength() - 1), u = 0; u < s[a].length; u += 1) {
                                    var f = u + h.getLength() - s[a].length;
                                    s[a][u] = f >= 0 ? h.getAt(f) : 0
                                }
                            }
                            var g = 0;
                            for (u = 0; u < t.length; u += 1) g += t[u].totalCount;
                            var p = new Array(g),
                                w = 0;
                            for (u = 0; u < r; u += 1)
                                for (a = 0; a < t.length; a += 1) u < i[a].length && (p[w] = i[a][u], w += 1);
                            for (u = 0; u < o; u += 1)
                                for (a = 0; a < t.length; a += 1) u < s[a].length && (p[w] = s[a][u], w += 1);
                            return p
                        }(o, r)
                    };
                l.addData = function (e, t) {
                    var n = null;
                    switch (t = t || "Byte") {
                        case "Numeric":
                            n = k(e);
                            break;
                        case "Alphanumeric":
                            n = S(e);
                            break;
                        case "Byte":
                            n = E(e);
                            break;
                        case "Kanji":
                            n = R(e);
                            break;
                        default:
                            throw "mode:" + t
                    }
                    a.push(n), s = null
                }, l.isDark = function (e, t) {
                    if (e < 0 || i <= e || t < 0 || i <= t) throw e + "," + t;
                    return o[e][t]
                }, l.getModuleCount = function () {
                    return i
                }, l.make = function () {
                    if (n < 1) {
                        for (var e = 1; e < 40; e++) {
                            for (var t = x.getRSBlocks(e, r), o = _(), i = 0; i < a.length; i++) {
                                var s = a[i];
                                o.put(s.getMode(), 4), o.put(s.getLength(), y.getLengthInBits(s.getMode(), e)), s.write(o)
                            }
                            var u = 0;
                            for (i = 0; i < t.length; i++) u += t[i].dataCount;
                            if (o.getLengthInBits() <= 8 * u) break
                        }
                        n = e
                    }
                    c(!1, function () {
                        for (var e = 0, t = 0, n = 0; n < 8; n += 1) {
                            c(!0, n);
                            var r = y.getLostPoint(l);
                            (0 == n || e > r) && (e = r, t = n)
                        }
                        return t
                    }())
                }, l.createTableTag = function (e, t) {
                    e = e || 2;
                    var n = "";
                    n += '<table style="', n += " border-width: 0px; border-style: none;", n += " border-collapse: collapse;", n += " padding: 0px; margin: " + (t = void 0 === t ? 4 * e : t) + "px;", n += '">', n += "<tbody>";
                    for (var r = 0; r < l.getModuleCount(); r += 1) {
                        n += "<tr>";
                        for (var o = 0; o < l.getModuleCount(); o += 1) n += '<td style="', n += " border-width: 0px; border-style: none;", n += " border-collapse: collapse;", n += " padding: 0px; margin: 0px;", n += " width: " + e + "px;", n += " height: " + e + "px;", n += " background-color: ", n += l.isDark(r, o) ? "#000000" : "#ffffff", n += ";", n += '"/>';
                        n += "</tr>"
                    }
                    return n += "</tbody>", n += "</table>"
                }, l.createSvgTag = function (e, t, n, r) {
                    var o = {};
                    "object" == typeof arguments[0] && (e = (o = arguments[0]).cellSize, t = o.margin, n = o.alt, r = o.title), e = e || 2, t = void 0 === t ? 4 * e : t, (n = "string" == typeof n ? {
                        text: n
                    } : n || {}).text = n.text || null, n.id = n.text ? n.id || "qrcode-description" : null, (r = "string" == typeof r ? {
                        text: r
                    } : r || {}).text = r.text || null, r.id = r.text ? r.id || "qrcode-title" : null;
                    var i, s, a, c, u = l.getModuleCount() * e + 2 * t,
                        d = "";
                    for (c = "l" + e + ",0 0," + e + " -" + e + ",0 0,-" + e + "z ", d += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', d += o.scalable ? "" : ' width="' + u + 'px" height="' + u + 'px"', d += ' viewBox="0 0 ' + u + " " + u + '" ', d += ' preserveAspectRatio="xMinYMin meet"', d += r.text || n.text ? ' role="img" aria-labelledby="' + v([r.id, n.id].join(" ").trim()) + '"' : "", d += ">", d += r.text ? '<title id="' + v(r.id) + '">' + v(r.text) + "</title>" : "", d += n.text ? '<description id="' + v(n.id) + '">' + v(n.text) + "</description>" : "", d += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', d += '<path d="', s = 0; s < l.getModuleCount(); s += 1)
                        for (a = s * e + t, i = 0; i < l.getModuleCount(); i += 1) l.isDark(s, i) && (d += "M" + (i * e + t) + "," + a + c);
                    return d += '" stroke="transparent" fill="black"/>', d += "</svg>"
                }, l.createDataURL = function (e, t) {
                    e = e || 2, t = void 0 === t ? 4 * e : t;
                    var n = l.getModuleCount() * e + 2 * t,
                        r = t,
                        o = n - t;
                    return A(n, n, (function (t, n) {
                        if (r <= t && t < o && r <= n && n < o) {
                            var i = Math.floor((t - r) / e),
                                s = Math.floor((n - r) / e);
                            return l.isDark(s, i) ? 0 : 1
                        }
                        return 1
                    }))
                }, l.createImgTag = function (e, t, n) {
                    e = e || 2, t = void 0 === t ? 4 * e : t;
                    var r = l.getModuleCount() * e + 2 * t,
                        o = "";
                    return o += "<img", o += ' src="', o += l.createDataURL(e, t), o += '"', o += ' width="', o += r, o += '"', o += ' height="', o += r, o += '"', n && (o += ' alt="', o += v(n), o += '"'), o += "/>"
                };
                var v = function (e) {
                    for (var t = "", n = 0; n < e.length; n += 1) {
                        var r = e.charAt(n);
                        switch (r) {
                            case "<":
                                t += "&lt;";
                                break;
                            case ">":
                                t += "&gt;";
                                break;
                            case "&":
                                t += "&amp;";
                                break;
                            case '"':
                                t += "&quot;";
                                break;
                            default:
                                t += r
                        }
                    }
                    return t
                };
                return l.createASCII = function (e, t) {
                    if ((e = e || 1) < 2) return function (e) {
                        e = void 0 === e ? 2 : e;
                        var t, n, r, o, i, s = 1 * l.getModuleCount() + 2 * e,
                            a = e,
                            c = s - e,
                            u = {
                                "██": "█",
                                "█ ": "▀",
                                " █": "▄",
                                "  ": " "
                            },
                            d = {
                                "██": "▀",
                                "█ ": "▀",
                                " █": " ",
                                "  ": " "
                            },
                            h = "";
                        for (t = 0; t < s; t += 2) {
                            for (r = Math.floor((t - a) / 1), o = Math.floor((t + 1 - a) / 1), n = 0; n < s; n += 1) i = "█", a <= n && n < c && a <= t && t < c && l.isDark(r, Math.floor((n - a) / 1)) && (i = " "), a <= n && n < c && a <= t + 1 && t + 1 < c && l.isDark(o, Math.floor((n - a) / 1)) ? i += " " : i += "█", h += e < 1 && t + 1 >= c ? d[i] : u[i];
                            h += "\n"
                        }
                        return s % 2 && e > 0 ? h.substring(0, h.length - s - 1) + Array(s + 1).join("▀") : h.substring(0, h.length - 1)
                    }(t);
                    e -= 1, t = void 0 === t ? 2 * e : t;
                    var n, r, o, i, s = l.getModuleCount() * e + 2 * t,
                        a = t,
                        c = s - t,
                        u = Array(e + 1).join("██"),
                        d = Array(e + 1).join("  "),
                        h = "",
                        f = "";
                    for (n = 0; n < s; n += 1) {
                        for (o = Math.floor((n - a) / e), f = "", r = 0; r < s; r += 1) i = 1, a <= r && r < c && a <= n && n < c && l.isDark(o, Math.floor((r - a) / e)) && (i = 0), f += i ? u : d;
                        for (o = 0; o < e; o += 1) h += f + "\n"
                    }
                    return h.substring(0, h.length - 1)
                }, l.renderTo2dContext = function (e, t) {
                    t = t || 2;
                    for (var n = l.getModuleCount(), r = 0; r < n; r++)
                        for (var o = 0; o < n; o++) e.fillStyle = l.isDark(r, o) ? "black" : "white", e.fillRect(r * t, o * t, t, t)
                }, l
            };
            e.stringToBytes = (e.stringToBytesFuncs = {
                default: function (e) {
                    for (var t = [], n = 0; n < e.length; n += 1) {
                        var r = e.charCodeAt(n);
                        t.push(255 & r)
                    }
                    return t
                }
            }).default, e.createStringToBytes = function (e, t) {
                var n = function () {
                        for (var n = L(e), r = function () {
                                var e = n.read();
                                if (-1 == e) throw "eof";
                                return e
                            }, o = 0, i = {};;) {
                            var s = n.read();
                            if (-1 == s) break;
                            var a = r(),
                                l = r() << 8 | r();
                            i[String.fromCharCode(s << 8 | a)] = l, o += 1
                        }
                        if (o != t) throw o + " != " + t;
                        return i
                    }(),
                    r = "?".charCodeAt(0);
                return function (e) {
                    for (var t = [], o = 0; o < e.length; o += 1) {
                        var i = e.charCodeAt(o);
                        if (i < 128) t.push(i);
                        else {
                            var s = n[e.charAt(o)];
                            "number" == typeof s ? (255 & s) == s ? t.push(s) : (t.push(s >>> 8), t.push(255 & s)) : t.push(r)
                        }
                    }
                    return t
                }
            };
            var t, n, r, o, i, s = 1,
                a = 2,
                l = 4,
                c = 8,
                u = {
                    L: 1,
                    M: 0,
                    Q: 3,
                    H: 2
                },
                d = 0,
                h = 1,
                f = 2,
                g = 3,
                p = 4,
                w = 5,
                m = 6,
                v = 7,
                y = (t = [
                    [],
                    [6, 18],
                    [6, 22],
                    [6, 26],
                    [6, 30],
                    [6, 34],
                    [6, 22, 38],
                    [6, 24, 42],
                    [6, 26, 46],
                    [6, 28, 50],
                    [6, 30, 54],
                    [6, 32, 58],
                    [6, 34, 62],
                    [6, 26, 46, 66],
                    [6, 26, 48, 70],
                    [6, 26, 50, 74],
                    [6, 30, 54, 78],
                    [6, 30, 56, 82],
                    [6, 30, 58, 86],
                    [6, 34, 62, 90],
                    [6, 28, 50, 72, 94],
                    [6, 26, 50, 74, 98],
                    [6, 30, 54, 78, 102],
                    [6, 28, 54, 80, 106],
                    [6, 32, 58, 84, 110],
                    [6, 30, 58, 86, 114],
                    [6, 34, 62, 90, 118],
                    [6, 26, 50, 74, 98, 122],
                    [6, 30, 54, 78, 102, 126],
                    [6, 26, 52, 78, 104, 130],
                    [6, 30, 56, 82, 108, 134],
                    [6, 34, 60, 86, 112, 138],
                    [6, 30, 58, 86, 114, 142],
                    [6, 34, 62, 90, 118, 146],
                    [6, 30, 54, 78, 102, 126, 150],
                    [6, 24, 50, 76, 102, 128, 154],
                    [6, 28, 54, 80, 106, 132, 158],
                    [6, 32, 58, 84, 110, 136, 162],
                    [6, 26, 54, 82, 110, 138, 166],
                    [6, 30, 58, 86, 114, 142, 170]
                ], n = 1335, r = 7973, i = function (e) {
                    for (var t = 0; 0 != e;) t += 1, e >>>= 1;
                    return t
                }, (o = {}).getBCHTypeInfo = function (e) {
                    for (var t = e << 10; i(t) - i(n) >= 0;) t ^= n << i(t) - i(n);
                    return 21522 ^ (e << 10 | t)
                }, o.getBCHTypeNumber = function (e) {
                    for (var t = e << 12; i(t) - i(r) >= 0;) t ^= r << i(t) - i(r);
                    return e << 12 | t
                }, o.getPatternPosition = function (e) {
                    return t[e - 1]
                }, o.getMaskFunction = function (e) {
                    switch (e) {
                        case d:
                            return function (e, t) {
                                return (e + t) % 2 == 0
                            };
                        case h:
                            return function (e, t) {
                                return e % 2 == 0
                            };
                        case f:
                            return function (e, t) {
                                return t % 3 == 0
                            };
                        case g:
                            return function (e, t) {
                                return (e + t) % 3 == 0
                            };
                        case p:
                            return function (e, t) {
                                return (Math.floor(e / 2) + Math.floor(t / 3)) % 2 == 0
                            };
                        case w:
                            return function (e, t) {
                                return e * t % 2 + e * t % 3 == 0
                            };
                        case m:
                            return function (e, t) {
                                return (e * t % 2 + e * t % 3) % 2 == 0
                            };
                        case v:
                            return function (e, t) {
                                return (e * t % 3 + (e + t) % 2) % 2 == 0
                            };
                        default:
                            throw "bad maskPattern:" + e
                    }
                }, o.getErrorCorrectPolynomial = function (e) {
                    for (var t = C([1], 0), n = 0; n < e; n += 1) t = t.multiply(C([1, b.gexp(n)], 0));
                    return t
                }, o.getLengthInBits = function (e, t) {
                    if (1 <= t && t < 10) switch (e) {
                        case s:
                            return 10;
                        case a:
                            return 9;
                        case l:
                        case c:
                            return 8;
                        default:
                            throw "mode:" + e
                    } else if (t < 27) switch (e) {
                        case s:
                            return 12;
                        case a:
                            return 11;
                        case l:
                            return 16;
                        case c:
                            return 10;
                        default:
                            throw "mode:" + e
                    } else {
                        if (!(t < 41)) throw "type:" + t;
                        switch (e) {
                            case s:
                                return 14;
                            case a:
                                return 13;
                            case l:
                                return 16;
                            case c:
                                return 12;
                            default:
                                throw "mode:" + e
                        }
                    }
                }, o.getLostPoint = function (e) {
                    for (var t = e.getModuleCount(), n = 0, r = 0; r < t; r += 1)
                        for (var o = 0; o < t; o += 1) {
                            for (var i = 0, s = e.isDark(r, o), a = -1; a <= 1; a += 1)
                                if (!(r + a < 0 || t <= r + a))
                                    for (var l = -1; l <= 1; l += 1) o + l < 0 || t <= o + l || 0 == a && 0 == l || s == e.isDark(r + a, o + l) && (i += 1);
                            i > 5 && (n += 3 + i - 5)
                        }
                    for (r = 0; r < t - 1; r += 1)
                        for (o = 0; o < t - 1; o += 1) {
                            var c = 0;
                            e.isDark(r, o) && (c += 1), e.isDark(r + 1, o) && (c += 1), e.isDark(r, o + 1) && (c += 1), e.isDark(r + 1, o + 1) && (c += 1), 0 != c && 4 != c || (n += 3)
                        }
                    for (r = 0; r < t; r += 1)
                        for (o = 0; o < t - 6; o += 1) e.isDark(r, o) && !e.isDark(r, o + 1) && e.isDark(r, o + 2) && e.isDark(r, o + 3) && e.isDark(r, o + 4) && !e.isDark(r, o + 5) && e.isDark(r, o + 6) && (n += 40);
                    for (o = 0; o < t; o += 1)
                        for (r = 0; r < t - 6; r += 1) e.isDark(r, o) && !e.isDark(r + 1, o) && e.isDark(r + 2, o) && e.isDark(r + 3, o) && e.isDark(r + 4, o) && !e.isDark(r + 5, o) && e.isDark(r + 6, o) && (n += 40);
                    var u = 0;
                    for (o = 0; o < t; o += 1)
                        for (r = 0; r < t; r += 1) e.isDark(r, o) && (u += 1);
                    return n += Math.abs(100 * u / t / t - 50) / 5 * 10
                }, o),
                b = function () {
                    for (var e = new Array(256), t = new Array(256), n = 0; n < 8; n += 1) e[n] = 1 << n;
                    for (n = 8; n < 256; n += 1) e[n] = e[n - 4] ^ e[n - 5] ^ e[n - 6] ^ e[n - 8];
                    for (n = 0; n < 255; n += 1) t[e[n]] = n;
                    var r = {
                        glog: function (e) {
                            if (e < 1) throw "glog(" + e + ")";
                            return t[e]
                        },
                        gexp: function (t) {
                            for (; t < 0;) t += 255;
                            for (; t >= 256;) t -= 255;
                            return e[t]
                        }
                    };
                    return r
                }();

            function C(e, t) {
                if (void 0 === e.length) throw e.length + "/" + t;
                var n = function () {
                        for (var n = 0; n < e.length && 0 == e[n];) n += 1;
                        for (var r = new Array(e.length - n + t), o = 0; o < e.length - n; o += 1) r[o] = e[o + n];
                        return r
                    }(),
                    r = {
                        getAt: function (e) {
                            return n[e]
                        },
                        getLength: function () {
                            return n.length
                        },
                        multiply: function (e) {
                            for (var t = new Array(r.getLength() + e.getLength() - 1), n = 0; n < r.getLength(); n += 1)
                                for (var o = 0; o < e.getLength(); o += 1) t[n + o] ^= b.gexp(b.glog(r.getAt(n)) + b.glog(e.getAt(o)));
                            return C(t, 0)
                        },
                        mod: function (e) {
                            if (r.getLength() - e.getLength() < 0) return r;
                            for (var t = b.glog(r.getAt(0)) - b.glog(e.getAt(0)), n = new Array(r.getLength()), o = 0; o < r.getLength(); o += 1) n[o] = r.getAt(o);
                            for (o = 0; o < e.getLength(); o += 1) n[o] ^= b.gexp(b.glog(e.getAt(o)) + t);
                            return C(n, 0).mod(e)
                        }
                    };
                return r
            }
            var x = function () {
                    var e = [
                            [1, 26, 19],
                            [1, 26, 16],
                            [1, 26, 13],
                            [1, 26, 9],
                            [1, 44, 34],
                            [1, 44, 28],
                            [1, 44, 22],
                            [1, 44, 16],
                            [1, 70, 55],
                            [1, 70, 44],
                            [2, 35, 17],
                            [2, 35, 13],
                            [1, 100, 80],
                            [2, 50, 32],
                            [2, 50, 24],
                            [4, 25, 9],
                            [1, 134, 108],
                            [2, 67, 43],
                            [2, 33, 15, 2, 34, 16],
                            [2, 33, 11, 2, 34, 12],
                            [2, 86, 68],
                            [4, 43, 27],
                            [4, 43, 19],
                            [4, 43, 15],
                            [2, 98, 78],
                            [4, 49, 31],
                            [2, 32, 14, 4, 33, 15],
                            [4, 39, 13, 1, 40, 14],
                            [2, 121, 97],
                            [2, 60, 38, 2, 61, 39],
                            [4, 40, 18, 2, 41, 19],
                            [4, 40, 14, 2, 41, 15],
                            [2, 146, 116],
                            [3, 58, 36, 2, 59, 37],
                            [4, 36, 16, 4, 37, 17],
                            [4, 36, 12, 4, 37, 13],
                            [2, 86, 68, 2, 87, 69],
                            [4, 69, 43, 1, 70, 44],
                            [6, 43, 19, 2, 44, 20],
                            [6, 43, 15, 2, 44, 16],
                            [4, 101, 81],
                            [1, 80, 50, 4, 81, 51],
                            [4, 50, 22, 4, 51, 23],
                            [3, 36, 12, 8, 37, 13],
                            [2, 116, 92, 2, 117, 93],
                            [6, 58, 36, 2, 59, 37],
                            [4, 46, 20, 6, 47, 21],
                            [7, 42, 14, 4, 43, 15],
                            [4, 133, 107],
                            [8, 59, 37, 1, 60, 38],
                            [8, 44, 20, 4, 45, 21],
                            [12, 33, 11, 4, 34, 12],
                            [3, 145, 115, 1, 146, 116],
                            [4, 64, 40, 5, 65, 41],
                            [11, 36, 16, 5, 37, 17],
                            [11, 36, 12, 5, 37, 13],
                            [5, 109, 87, 1, 110, 88],
                            [5, 65, 41, 5, 66, 42],
                            [5, 54, 24, 7, 55, 25],
                            [11, 36, 12, 7, 37, 13],
                            [5, 122, 98, 1, 123, 99],
                            [7, 73, 45, 3, 74, 46],
                            [15, 43, 19, 2, 44, 20],
                            [3, 45, 15, 13, 46, 16],
                            [1, 135, 107, 5, 136, 108],
                            [10, 74, 46, 1, 75, 47],
                            [1, 50, 22, 15, 51, 23],
                            [2, 42, 14, 17, 43, 15],
                            [5, 150, 120, 1, 151, 121],
                            [9, 69, 43, 4, 70, 44],
                            [17, 50, 22, 1, 51, 23],
                            [2, 42, 14, 19, 43, 15],
                            [3, 141, 113, 4, 142, 114],
                            [3, 70, 44, 11, 71, 45],
                            [17, 47, 21, 4, 48, 22],
                            [9, 39, 13, 16, 40, 14],
                            [3, 135, 107, 5, 136, 108],
                            [3, 67, 41, 13, 68, 42],
                            [15, 54, 24, 5, 55, 25],
                            [15, 43, 15, 10, 44, 16],
                            [4, 144, 116, 4, 145, 117],
                            [17, 68, 42],
                            [17, 50, 22, 6, 51, 23],
                            [19, 46, 16, 6, 47, 17],
                            [2, 139, 111, 7, 140, 112],
                            [17, 74, 46],
                            [7, 54, 24, 16, 55, 25],
                            [34, 37, 13],
                            [4, 151, 121, 5, 152, 122],
                            [4, 75, 47, 14, 76, 48],
                            [11, 54, 24, 14, 55, 25],
                            [16, 45, 15, 14, 46, 16],
                            [6, 147, 117, 4, 148, 118],
                            [6, 73, 45, 14, 74, 46],
                            [11, 54, 24, 16, 55, 25],
                            [30, 46, 16, 2, 47, 17],
                            [8, 132, 106, 4, 133, 107],
                            [8, 75, 47, 13, 76, 48],
                            [7, 54, 24, 22, 55, 25],
                            [22, 45, 15, 13, 46, 16],
                            [10, 142, 114, 2, 143, 115],
                            [19, 74, 46, 4, 75, 47],
                            [28, 50, 22, 6, 51, 23],
                            [33, 46, 16, 4, 47, 17],
                            [8, 152, 122, 4, 153, 123],
                            [22, 73, 45, 3, 74, 46],
                            [8, 53, 23, 26, 54, 24],
                            [12, 45, 15, 28, 46, 16],
                            [3, 147, 117, 10, 148, 118],
                            [3, 73, 45, 23, 74, 46],
                            [4, 54, 24, 31, 55, 25],
                            [11, 45, 15, 31, 46, 16],
                            [7, 146, 116, 7, 147, 117],
                            [21, 73, 45, 7, 74, 46],
                            [1, 53, 23, 37, 54, 24],
                            [19, 45, 15, 26, 46, 16],
                            [5, 145, 115, 10, 146, 116],
                            [19, 75, 47, 10, 76, 48],
                            [15, 54, 24, 25, 55, 25],
                            [23, 45, 15, 25, 46, 16],
                            [13, 145, 115, 3, 146, 116],
                            [2, 74, 46, 29, 75, 47],
                            [42, 54, 24, 1, 55, 25],
                            [23, 45, 15, 28, 46, 16],
                            [17, 145, 115],
                            [10, 74, 46, 23, 75, 47],
                            [10, 54, 24, 35, 55, 25],
                            [19, 45, 15, 35, 46, 16],
                            [17, 145, 115, 1, 146, 116],
                            [14, 74, 46, 21, 75, 47],
                            [29, 54, 24, 19, 55, 25],
                            [11, 45, 15, 46, 46, 16],
                            [13, 145, 115, 6, 146, 116],
                            [14, 74, 46, 23, 75, 47],
                            [44, 54, 24, 7, 55, 25],
                            [59, 46, 16, 1, 47, 17],
                            [12, 151, 121, 7, 152, 122],
                            [12, 75, 47, 26, 76, 48],
                            [39, 54, 24, 14, 55, 25],
                            [22, 45, 15, 41, 46, 16],
                            [6, 151, 121, 14, 152, 122],
                            [6, 75, 47, 34, 76, 48],
                            [46, 54, 24, 10, 55, 25],
                            [2, 45, 15, 64, 46, 16],
                            [17, 152, 122, 4, 153, 123],
                            [29, 74, 46, 14, 75, 47],
                            [49, 54, 24, 10, 55, 25],
                            [24, 45, 15, 46, 46, 16],
                            [4, 152, 122, 18, 153, 123],
                            [13, 74, 46, 32, 75, 47],
                            [48, 54, 24, 14, 55, 25],
                            [42, 45, 15, 32, 46, 16],
                            [20, 147, 117, 4, 148, 118],
                            [40, 75, 47, 7, 76, 48],
                            [43, 54, 24, 22, 55, 25],
                            [10, 45, 15, 67, 46, 16],
                            [19, 148, 118, 6, 149, 119],
                            [18, 75, 47, 31, 76, 48],
                            [34, 54, 24, 34, 55, 25],
                            [20, 45, 15, 61, 46, 16]
                        ],
                        t = function (e, t) {
                            var n = {};
                            return n.totalCount = e, n.dataCount = t, n
                        },
                        n = {};
                    return n.getRSBlocks = function (n, r) {
                        var o = function (t, n) {
                            switch (n) {
                                case u.L:
                                    return e[4 * (t - 1) + 0];
                                case u.M:
                                    return e[4 * (t - 1) + 1];
                                case u.Q:
                                    return e[4 * (t - 1) + 2];
                                case u.H:
                                    return e[4 * (t - 1) + 3];
                                default:
                                    return
                            }
                        }(n, r);
                        if (void 0 === o) throw "bad rs block @ typeNumber:" + n + "/errorCorrectionLevel:" + r;
                        for (var i = o.length / 3, s = [], a = 0; a < i; a += 1)
                            for (var l = o[3 * a + 0], c = o[3 * a + 1], d = o[3 * a + 2], h = 0; h < l; h += 1) s.push(t(c, d));
                        return s
                    }, n
                }(),
                _ = function () {
                    var e = [],
                        t = 0,
                        n = {
                            getBuffer: function () {
                                return e
                            },
                            getAt: function (t) {
                                var n = Math.floor(t / 8);
                                return 1 == (e[n] >>> 7 - t % 8 & 1)
                            },
                            put: function (e, t) {
                                for (var r = 0; r < t; r += 1) n.putBit(1 == (e >>> t - r - 1 & 1))
                            },
                            getLengthInBits: function () {
                                return t
                            },
                            putBit: function (n) {
                                var r = Math.floor(t / 8);
                                e.length <= r && e.push(0), n && (e[r] |= 128 >>> t % 8), t += 1
                            }
                        };
                    return n
                },
                k = function (e) {
                    var t = s,
                        n = e,
                        r = {
                            getMode: function () {
                                return t
                            },
                            getLength: function (e) {
                                return n.length
                            },
                            write: function (e) {
                                for (var t = n, r = 0; r + 2 < t.length;) e.put(o(t.substring(r, r + 3)), 10), r += 3;
                                r < t.length && (t.length - r == 1 ? e.put(o(t.substring(r, r + 1)), 4) : t.length - r == 2 && e.put(o(t.substring(r, r + 2)), 7))
                            }
                        },
                        o = function (e) {
                            for (var t = 0, n = 0; n < e.length; n += 1) t = 10 * t + i(e.charAt(n));
                            return t
                        },
                        i = function (e) {
                            if ("0" <= e && e <= "9") return e.charCodeAt(0) - "0".charCodeAt(0);
                            throw "illegal char :" + e
                        };
                    return r
                },
                S = function (e) {
                    var t = a,
                        n = e,
                        r = {
                            getMode: function () {
                                return t
                            },
                            getLength: function (e) {
                                return n.length
                            },
                            write: function (e) {
                                for (var t = n, r = 0; r + 1 < t.length;) e.put(45 * o(t.charAt(r)) + o(t.charAt(r + 1)), 11), r += 2;
                                r < t.length && e.put(o(t.charAt(r)), 6)
                            }
                        },
                        o = function (e) {
                            if ("0" <= e && e <= "9") return e.charCodeAt(0) - "0".charCodeAt(0);
                            if ("A" <= e && e <= "Z") return e.charCodeAt(0) - "A".charCodeAt(0) + 10;
                            switch (e) {
                                case " ":
                                    return 36;
                                case "$":
                                    return 37;
                                case "%":
                                    return 38;
                                case "*":
                                    return 39;
                                case "+":
                                    return 40;
                                case "-":
                                    return 41;
                                case ".":
                                    return 42;
                                case "/":
                                    return 43;
                                case ":":
                                    return 44;
                                default:
                                    throw "illegal char :" + e
                            }
                        };
                    return r
                },
                E = function (t) {
                    var n = l,
                        r = e.stringToBytes(t),
                        o = {
                            getMode: function () {
                                return n
                            },
                            getLength: function (e) {
                                return r.length
                            },
                            write: function (e) {
                                for (var t = 0; t < r.length; t += 1) e.put(r[t], 8)
                            }
                        };
                    return o
                },
                R = function (t) {
                    var n = c,
                        r = e.stringToBytesFuncs.SJIS;
                    if (!r) throw "sjis not supported.";
                    ! function (e, t) {
                        var n = r("友");
                        if (2 != n.length || 38726 != (n[0] << 8 | n[1])) throw "sjis not supported."
                    }();
                    var o = r(t),
                        i = {
                            getMode: function () {
                                return n
                            },
                            getLength: function (e) {
                                return ~~(o.length / 2)
                            },
                            write: function (e) {
                                for (var t = o, n = 0; n + 1 < t.length;) {
                                    var r = (255 & t[n]) << 8 | 255 & t[n + 1];
                                    if (33088 <= r && r <= 40956) r -= 33088;
                                    else {
                                        if (!(57408 <= r && r <= 60351)) throw "illegal char at " + (n + 1) + "/" + r;
                                        r -= 49472
                                    }
                                    r = 192 * (r >>> 8 & 255) + (255 & r), e.put(r, 13), n += 2
                                }
                                if (n < t.length) throw "illegal char at " + (n + 1)
                            }
                        };
                    return i
                },
                T = function () {
                    var e = [],
                        t = {
                            writeByte: function (t) {
                                e.push(255 & t)
                            },
                            writeShort: function (e) {
                                t.writeByte(e), t.writeByte(e >>> 8)
                            },
                            writeBytes: function (e, n, r) {
                                n = n || 0, r = r || e.length;
                                for (var o = 0; o < r; o += 1) t.writeByte(e[o + n])
                            },
                            writeString: function (e) {
                                for (var n = 0; n < e.length; n += 1) t.writeByte(e.charCodeAt(n))
                            },
                            toByteArray: function () {
                                return e
                            },
                            toString: function () {
                                var t = "";
                                t += "[";
                                for (var n = 0; n < e.length; n += 1) n > 0 && (t += ","), t += e[n];
                                return t += "]"
                            }
                        };
                    return t
                },
                L = function (e) {
                    var t = e,
                        n = 0,
                        r = 0,
                        o = 0,
                        i = {
                            read: function () {
                                for (; o < 8;) {
                                    if (n >= t.length) {
                                        if (0 == o) return -1;
                                        throw "unexpected end of file./" + o
                                    }
                                    var e = t.charAt(n);
                                    if (n += 1, "=" == e) return o = 0, -1;
                                    e.match(/^\s$/) || (r = r << 6 | s(e.charCodeAt(0)), o += 6)
                                }
                                var i = r >>> o - 8 & 255;
                                return o -= 8, i
                            }
                        },
                        s = function (e) {
                            if (65 <= e && e <= 90) return e - 65;
                            if (97 <= e && e <= 122) return e - 97 + 26;
                            if (48 <= e && e <= 57) return e - 48 + 52;
                            if (43 == e) return 62;
                            if (47 == e) return 63;
                            throw "c:" + e
                        };
                    return i
                },
                A = function (e, t, n) {
                    for (var r = function (e, t) {
                            var n = e,
                                r = t,
                                o = new Array(e * t),
                                i = {
                                    setPixel: function (e, t, r) {
                                        o[t * n + e] = r
                                    },
                                    write: function (e) {
                                        e.writeString("GIF87a"), e.writeShort(n), e.writeShort(r), e.writeByte(128), e.writeByte(0), e.writeByte(0), e.writeByte(0), e.writeByte(0), e.writeByte(0), e.writeByte(255), e.writeByte(255), e.writeByte(255), e.writeString(","), e.writeShort(0), e.writeShort(0), e.writeShort(n), e.writeShort(r), e.writeByte(0);
                                        var t = s(2);
                                        e.writeByte(2);
                                        for (var o = 0; t.length - o > 255;) e.writeByte(255), e.writeBytes(t, o, 255), o += 255;
                                        e.writeByte(t.length - o), e.writeBytes(t, o, t.length - o), e.writeByte(0), e.writeString(";")
                                    }
                                },
                                s = function (e) {
                                    for (var t = 1 << e, n = 1 + (1 << e), r = e + 1, i = a(), s = 0; s < t; s += 1) i.add(String.fromCharCode(s));
                                    i.add(String.fromCharCode(t)), i.add(String.fromCharCode(n));
                                    var l, c, u, d = T(),
                                        h = (l = d, c = 0, u = 0, {
                                            write: function (e, t) {
                                                if (e >>> t != 0) throw "length over";
                                                for (; c + t >= 8;) l.writeByte(255 & (e << c | u)), t -= 8 - c, e >>>= 8 - c, u = 0, c = 0;
                                                u |= e << c, c += t
                                            },
                                            flush: function () {
                                                c > 0 && l.writeByte(u)
                                            }
                                        });
                                    h.write(t, r);
                                    var f = 0,
                                        g = String.fromCharCode(o[f]);
                                    for (f += 1; f < o.length;) {
                                        var p = String.fromCharCode(o[f]);
                                        f += 1, i.contains(g + p) ? g += p : (h.write(i.indexOf(g), r), i.size() < 4095 && (i.size() == 1 << r && (r += 1), i.add(g + p)), g = p)
                                    }
                                    return h.write(i.indexOf(g), r), h.write(n, r), h.flush(), d.toByteArray()
                                },
                                a = function () {
                                    var e = {},
                                        t = 0,
                                        n = {
                                            add: function (r) {
                                                if (n.contains(r)) throw "dup key:" + r;
                                                e[r] = t, t += 1
                                            },
                                            size: function () {
                                                return t
                                            },
                                            indexOf: function (t) {
                                                return e[t]
                                            },
                                            contains: function (t) {
                                                return void 0 !== e[t]
                                            }
                                        };
                                    return n
                                };
                            return i
                        }(e, t), o = 0; o < t; o += 1)
                        for (var i = 0; i < e; i += 1) r.setPixel(i, o, n(i, o));
                    var s = T();
                    r.write(s);
                    for (var a = function () {
                            var e = 0,
                                t = 0,
                                n = 0,
                                r = "",
                                o = {},
                                i = function (e) {
                                    r += String.fromCharCode(s(63 & e))
                                },
                                s = function (e) {
                                    if (e < 0);
                                    else {
                                        if (e < 26) return 65 + e;
                                        if (e < 52) return e - 26 + 97;
                                        if (e < 62) return e - 52 + 48;
                                        if (62 == e) return 43;
                                        if (63 == e) return 47
                                    }
                                    throw "n:" + e
                                };
                            return o.writeByte = function (r) {
                                for (e = e << 8 | 255 & r, t += 8, n += 1; t >= 6;) i(e >>> t - 6), t -= 6
                            }, o.flush = function () {
                                if (t > 0 && (i(e << 6 - t), e = 0, t = 0), n % 3 != 0)
                                    for (var o = 3 - n % 3, s = 0; s < o; s += 1) r += "="
                            }, o.toString = function () {
                                return r
                            }, o
                        }(), l = s.toByteArray(), c = 0; c < l.length; c += 1) a.writeByte(l[c]);
                    return a.flush(), "data:image/gif;base64," + a
                };
            return e
        }();
        n.stringToBytesFuncs["UTF-8"] = function (e) {
            return function (e) {
                for (var t = [], n = 0; n < e.length; n++) {
                    var r = e.charCodeAt(n);
                    r < 128 ? t.push(r) : r < 2048 ? t.push(192 | r >> 6, 128 | 63 & r) : r < 55296 || r >= 57344 ? t.push(224 | r >> 12, 128 | r >> 6 & 63, 128 | 63 & r) : (n++, r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(n)), t.push(240 | r >> 18, 128 | r >> 12 & 63, 128 | r >> 6 & 63, 128 | 63 & r))
                }
                return t
            }(e)
        }, e.exports = n
    }(Mi);
    const Oi = Mi.exports;

    function Ni(e) {
        return __async(this, null, (function* () {
            try {
                if (!(null == navigator ? void 0 : navigator.clipboard)) throw new or("Clipboard API not available");
                return yield navigator.clipboard.writeText(e)
            } catch (Ju) {}! function (e) {
                const t = document.createElement("textarea");
                t.value = e, t.style.top = "0", t.style.left = "0", t.style.position = "fixed", document.body.appendChild(t), t.focus(), t.select();
                try {
                    document.execCommand("copy")
                } finally {
                    document.body.removeChild(t)
                }
            }(e)
        }))
    }
    const Pi = dn("<div></div>"),
        $i = e => {
            let t, n, r;
            const [o, i] = gt(!1), [s, a] = gt(48);
            mt((() => {
                const o = Oi(0, "L");
                o.addData(e.sourceUrl), o.make(), t.innerHTML = o.createSvgTag(4, 0);
                const i = t.firstElementChild.clientWidth,
                    s = Math.round(256 / i * 1e5) / 1e5;
                if (r) {
                    const e = 4 * Math.ceil(60 / (4 * s)),
                        t = Xn(4 * Math.ceil((i - e) / 8));
                    r.style.top = t, r.style.left = t, r.style.height = Xn(e), r.style.width = Xn(e), a(Math.round(48 / s))
                }
                n.style.transform = `scale(${s})`
            }));
            let l = null;
            return qt(Ei, {
                get class() {
                    return e.class
                },
                onClick: () => {
                    i(!0), Ni(e.sourceUrl), null != l && clearTimeout(l), l = setTimeout((() => i(!1)), 1500)
                },
                get children() {
                    return [qt(Ri, {
                        ref(e) {
                            "function" == typeof n ? n(e) : n = e
                        },
                        get children() {
                            return [(() => {
                                const e = Pi.cloneNode(!0);
                                return "function" == typeof t ? pn(t, e) : t = e, e
                            })(), qt(Xt, {
                                get when() {
                                    return e.imageUrl
                                },
                                get children() {
                                    return qt(Ti, {
                                        ref(e) {
                                            "function" == typeof r ? r(e) : r = e
                                        },
                                        get children() {
                                            return qt(Li, {
                                                get src() {
                                                    return e.imageUrl
                                                },
                                                alt: "",
                                                get size() {
                                                    return s()
                                                }
                                            })
                                        }
                                    })
                                }
                            })]
                        }
                    }), qt(Vo, {
                        onBeforeEnter: e => {
                            di(e, [{
                                opacity: 0,
                                transform: "translate(-50%, 44px)"
                            }, {
                                opacity: 1,
                                transform: "translate(-50%, 0)"
                            }], {
                                duration: 150,
                                easing: "ease-out"
                            })
                        },
                        onExit: (e, t) => {
                            di(e, [{
                                opacity: 1,
                                transform: "translate(-50%, 0)"
                            }, {
                                opacity: 0,
                                transform: "translate(-50%, 44px)"
                            }], {
                                duration: 150,
                                easing: "ease-out"
                            }).finished.then((() => {
                                t()
                            }))
                        },
                        get children() {
                            return qt(Xt, {
                                get when() {
                                    return o() && !e.disableCopy
                                },
                                get children() {
                                    return qt(Ai, {
                                        get children() {
                                            return [qt(fs, {
                                                size: "xs"
                                            }), qt(Di, {
                                                translationKey: "common.linkCopied",
                                                children: "Link Copied"
                                            })]
                                        }
                                    })
                                }
                            })
                        }
                    }), qt(Xt, {
                        get when() {
                            return !e.disableCopy
                        },
                        get children() {
                            return qt(Si, {
                                get children() {
                                    return qt(Gs, {})
                                }
                            })
                        }
                    })]
                }
            })
        };
    var Ii = (e, t, n) => {
            const r = t.trim().split(".").reduce(((e, t) => e ? e[t] : void 0), e);
            return void 0 !== r ? r : n
        },
        Ui = (e = {}, t = (navigator.language in e ? navigator.language : Object.keys(e)[0])) => {
            const [n, r] = gt(t), [o, i] = Qr(e);
            return [(e, t, r) => {
                const i = Ii(o[n()], e, r || "");
                return "function" == typeof i ? i(t) : "string" == typeof i ? ((e, t, n = /{{(.*?)}}/g) => e.replace(n, ((e, n) => Ii(t, n, ""))))(i, t || {}) : i
            }, {
                add(e, t) {
                    i(e, (e => Object.assign(e || {}, t)))
                },
                locale: e => e ? r(e) : n(),
                dict: e => Ii(o, e)
            }]
        },
        Wi = St({}),
        ji = () => Et(Wi);
    const Bi = qn.div `
    font-style: normal;
    font-weight: ${e=>e.fontWeight};
    font-size: ${e=>e.fontSize};
    line-height: ${e=>e.lineHeight};

    color: ${e=>e.color};
`,
        Di = e => {
            const t = Kn(),
                [n] = ji();
            let r;
            const o = Yt({
                fontSize: "14px",
                fontWeight: "510",
                lineHeight: "130%"
            }, e);
            return mt((() => {
                r && "unset" !== o.cursor && "pointer" !== getComputedStyle(r).cursor && (r.style.cursor = "default")
            })), qt(Bi, {
                get fontSize() {
                    return o.fontSize
                },
                get fontWeight() {
                    return o.fontWeight
                },
                get lineHeight() {
                    return o.lineHeight
                },
                get color() {
                    return e.color || t.colors.text.primary
                },
                get class() {
                    return o.class
                },
                ref(e) {
                    "function" == typeof r ? r(e) : r = e
                },
                "data-tc-text": "true",
                get children() {
                    var e;
                    return vt((() => !!o.translationKey))() ? n(o.translationKey, o.translationValues, null == (e = o.children) ? void 0 : e.toString()) : o.children
                }
            })
        },
        Hi = qn.div `
    position: relative;

    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border: 0.5px solid rgba(0, 0, 0, 0.08);

        border-radius: inherit;
    }
`,
        Vi = qn(vo)
    `
    width: 100%;
    height: 100%;
    border-radius: inherit;
`, Ki = e => qt(Hi, {
        get class() {
            return e.class
        },
        get children() {
            return qt(Vi, {
                get src() {
                    return e.src
                }
            })
        }
    }), Fi = {
        m: "16px",
        s: "12px",
        none: "0"
    }, qi = {
        m: "6px",
        s: "6px",
        none: "0"
    }, zi = qn.button `
    position: relative;
    cursor: pointer;
    border: none;
    background-color: unset;
    padding: 8px 4px;
    width: 92px;
    display: flex;
    flex-direction: column;
    align-items: center;

    transition: transform 0.125s ease-in-out;

    ${Po} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${Oo("mobile")} {
        padding: 8px 4px;
        width: 82px;
    }

    ${No} {
        &:active {
            transform: scale(0.92);
        }
    }
`, Zi = qn(Ki)
    `
    width: 60px;
    height: 60px;
    border-radius: ${e=>Fi[e.theme.borderRadius]};

    margin-bottom: 8px;
`, Gi = qn(vo)
    `
    position: absolute;
    right: 10px;
    top: 50px;
    width: 24px;
    height: 24px;
    border-radius: ${e=>qi[e.theme.borderRadius]};
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
`, Yi = qn(Di)
    `
    max-width: 90px;
    font-weight: 510;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    ${Oo("mobile")} {
        max-width: 80px;
    }
`, Qi = qn(Di)
    `
    font-weight: ${e=>e.colorPrimary?"510":"400"};
    max-width: 90px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: ${e=>e.colorPrimary?e.theme.colors.text.primary:e.theme.colors.text.secondary};

    ${Oo("mobile")} {
        max-width: 80px;
    }
`, Ji = dn("<div></div>"), Xi = e => {
        let t = null;
        const n = () => {
            const e = null == t ? void 0 : t.querySelector("div");
            if (e && e.scrollWidth > e.clientWidth) {
                let t = 0;
                const n = -.4,
                    r = .05;
                for (; e.scrollWidth > e.clientWidth && t >= n;) t -= r, e.style.letterSpacing = `${t}px`;
                0 !== t && (t -= r, e.style.letterSpacing = `${t}px`)
            }
        };
        return xt((() => n())), mt((() => {
            n()
        })), qt(zi, {
            get class() {
                return e.class
            },
            onClick: () => e.onClick(),
            "data-tc-wallet-item": "true",
            get children() {
                return [vt((() => vt((() => "string" == typeof e.icon))() ? qt(Zi, {
                    get src() {
                        return e.icon
                    }
                }) : e.icon)), vt((() => vt((() => !!e.badgeUrl))() && qt(Gi, {
                    get src() {
                        return e.badgeUrl
                    }
                }))), (() => {
                    const n = Ji.cloneNode(!0);
                    return pn((e => t = e), n), wn(n, qt(Yi, {
                        get children() {
                            return e.name
                        }
                    })), n
                })(), vt((() => vt((() => !!e.secondLine))() && qt(Qi, {
                    get colorPrimary() {
                        var t;
                        return null == (t = e.secondLineColorPrimary) || t
                    },
                    get children() {
                        return e.secondLine
                    }
                })))]
            }
        })
    }, es = qn.h1 `
    font-style: normal;
    font-weight: 590;
    font-size: 20px;
    line-height: 28px;

    text-align: center;

    color: ${e=>e.theme.colors.text.primary};

    margin-top: 0;
    margin-bottom: 0;

    cursor: default;
`, ts = e => {
        const [t] = ji();
        return qt(es, {
            get class() {
                return e.class
            },
            "data-tc-h1": "true",
            get children() {
                var n;
                return vt((() => !!e.translationKey))() ? t(e.translationKey, e.translationValues, null == (n = e.children) ? void 0 : n.toString()) : e.children
            }
        })
    }, ns = qn.h2 `
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;

    text-align: center;

    color: ${e=>e.theme.colors.text.secondary};

    margin-top: 0;
    margin-bottom: 32px;

    cursor: default;
`, rs = e => {
        const [t] = ji();
        return qt(ns, {
            get class() {
                return e.class
            },
            "data-tc-h2": "true",
            get children() {
                var n;
                return vt((() => !!e.translationKey))() ? t(e.translationKey, e.translationValues, null == (n = e.children) ? void 0 : n.toString()) : e.children
            }
        })
    }, os = qn.h3 `
    font-style: normal;
    font-weight: 510;
    font-size: 16px;
    line-height: 20px;

    color: ${e=>e.theme.colors.text.primary};

    margin-top: 0;
    margin-bottom: 0;

    cursor: default;
`, is = e => {
        const [t] = ji();
        return qt(os, {
            "data-tc-h3": "true",
            get class() {
                return e.class
            },
            get children() {
                var n;
                return vt((() => !!e.translationKey))() ? t(e.translationKey, e.translationValues, null == (n = e.children) ? void 0 : n.toString()) : e.children
            }
        })
    }, ss = dn('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 7.5C9.33579 7.5 9 7.16421 9 6.75C9 6.33579 9.33579 6 9.75 6H21.25C21.6642 6 22 6.33579 22 6.75V18.25C22 18.6642 21.6642 19 21.25 19C20.8358 19 20.5 18.6642 20.5 18.25V8.56066L6.28033 22.7803C5.98744 23.0732 5.51256 23.0732 5.21967 22.7803C4.92678 22.4874 4.92678 22.0126 5.21967 21.7197L19.4393 7.5H9.75Z"></path></svg>'), as = e => {
        const t = Kn(),
            n = () => e.fill || t.colors.icon.secondary;
        return (() => {
            const e = ss.cloneNode(!0),
                t = e.firstChild;
            return wt((r => {
                const o = n(),
                    i = n();
                return o !== r._v$ && hn(e, "fill", r._v$ = o), i !== r._v$2 && hn(t, "fill", r._v$2 = i), r
            }), {
                _v$: void 0,
                _v$2: void 0
            }), e
        })()
    }, ls = dn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.1839 17.7069C13.6405 18.6507 13.3688 19.1226 13.0591 19.348C12.4278 19.8074 11.5723 19.8074 10.941 19.348C10.6312 19.1226 10.3595 18.6507 9.81613 17.7069L5.52066 10.2464C4.76864 8.94024 4.39263 8.28717 4.33762 7.75894C4.2255 6.68236 4.81894 5.65591 5.80788 5.21589C6.29309 5 7.04667 5 8.55383 5H15.4462C16.9534 5 17.7069 5 18.1922 5.21589C19.1811 5.65591 19.7745 6.68236 19.6624 7.75894C19.6074 8.28717 19.2314 8.94024 18.4794 10.2464L14.1839 17.7069ZM11.1 16.3412L6.56139 8.48002C6.31995 8.06185 6.19924 7.85276 6.18146 7.68365C6.14523 7.33896 6.33507 7.01015 6.65169 6.86919C6.80703 6.80002 7.04847 6.80002 7.53133 6.80002H7.53134L11.1 6.80002V16.3412ZM12.9 16.3412L17.4387 8.48002C17.6801 8.06185 17.8008 7.85276 17.8186 7.68365C17.8548 7.33896 17.665 7.01015 17.3484 6.86919C17.193 6.80002 16.9516 6.80002 16.4687 6.80002L12.9 6.80002V16.3412Z"></path></svg>'), cs = e => {
        const t = Kn();
        return (() => {
            const n = ls.cloneNode(!0),
                r = n.firstChild;
            return wt((() => hn(r, "fill", e.fill || t.colors.icon.primary))), n
        })()
    }, us = dn('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0_3783_2045)"><circle cx="8" cy="8.00098" r="8"></circle><path d="M4.75 8.50098L7 10.751L11.75 6.00098" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_3783_2045"><rect width="16" height="16" fill="white" transform="translate(0 0.000976562)"></rect></clipPath></defs></svg>'), ds = dn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11"></circle><path d="M17.1364 9.6364C17.4879 9.28493 17.4879 8.71508 17.1364 8.36361C16.7849 8.01214 16.2151 8.01214 15.8636 8.36361L10 14.2272L8.1364 12.3636C7.78493 12.0121 7.21508 12.0121 6.86361 12.3636C6.51214 12.7151 6.51214 13.2849 6.86361 13.6364L9.36361 16.1364C9.71508 16.4879 10.2849 16.4879 10.6364 16.1364L17.1364 9.6364Z"></path></svg>'), hs = dn('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="33"></circle><path d="M50.9142 28.4142C51.6953 27.6332 51.6953 26.3668 50.9142 25.5858C50.1332 24.8047 48.8668 24.8047 48.0858 25.5858L30 43.6716L23.9142 37.5858C23.1332 36.8047 21.8668 36.8047 21.0858 37.5858C20.3047 38.3668 20.3047 39.6332 21.0858 40.4142L28.5858 47.9142C29.3668 48.6953 30.6332 48.6953 31.4142 47.9142L50.9142 28.4142Z"></path></svg>'), fs = e => {
        const t = Kn(),
            n = () => e.size || "s",
            r = () => e.fill || t.colors.icon.success;
        return vt((() => {
            const o = vt((() => "xs" === n()));
            return () => o() ? (() => {
                const n = us.cloneNode(!0),
                    o = n.firstChild.firstChild,
                    i = o.nextSibling;
                return wt((s => {
                    const a = e.class,
                        l = r(),
                        c = t.colors.constant.white;
                    return a !== s._v$ && hn(n, "class", s._v$ = a), l !== s._v$2 && hn(o, "fill", s._v$2 = l), c !== s._v$3 && hn(i, "stroke", s._v$3 = c), s
                }), {
                    _v$: void 0,
                    _v$2: void 0,
                    _v$3: void 0
                }), n
            })() : (() => {
                const o = vt((() => "s" === n()));
                return () => o() ? (() => {
                    const n = ds.cloneNode(!0),
                        o = n.firstChild,
                        i = o.nextSibling;
                    return wt((s => {
                        const a = e.class,
                            l = r(),
                            c = t.colors.constant.white;
                        return a !== s._v$4 && hn(n, "class", s._v$4 = a), l !== s._v$5 && hn(o, "fill", s._v$5 = l), c !== s._v$6 && hn(i, "fill", s._v$6 = c), s
                    }), {
                        _v$4: void 0,
                        _v$5: void 0,
                        _v$6: void 0
                    }), n
                })() : (() => {
                    const n = hs.cloneNode(!0),
                        o = n.firstChild,
                        i = o.nextSibling;
                    return wt((s => {
                        const a = e.class,
                            l = r(),
                            c = t.colors.constant.white;
                        return a !== s._v$7 && hn(n, "class", s._v$7 = a), l !== s._v$8 && hn(o, "fill", s._v$8 = l), c !== s._v$9 && hn(i, "fill", s._v$9 = c), s
                    }), {
                        _v$7: void 0,
                        _v$8: void 0,
                        _v$9: void 0
                    }), n
                })()
            })()
        })())
    }, gs = dn('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="33"></circle><path d="M24.0858 26.9142C23.3047 26.1332 23.3047 24.8668 24.0858 24.0858C24.8668 23.3047 26.1332 23.3047 26.9142 24.0858L36 33.1716L45.0858 24.0858C45.8668 23.3047 47.1332 23.3047 47.9142 24.0858C48.6953 24.8668 48.6953 26.1332 47.9142 26.9142L38.8284 36L47.9142 45.0858C48.6953 45.8668 48.6953 47.1332 47.9142 47.9142C47.1332 48.6953 45.8668 48.6953 45.0858 47.9142L36 38.8284L26.9142 47.9142C26.1332 48.6953 24.8668 48.6953 24.0858 47.9142C23.3047 47.1332 23.3047 45.8668 24.0858 45.0858L33.1716 36L24.0858 26.9142Z"></path></svg>'), ps = dn('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24.001" r="22"></circle><path d="M24 24.001L31.5 16.501M24 24.001L16.5 16.501M24 24.001L16.5 31.501M24 24.001L31.5 31.501" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>'), ws = dn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11"></circle><path d="M7.86361 9.1364C7.51214 8.78493 7.51214 8.21508 7.86361 7.86361C8.21508 7.51214 8.78493 7.51214 9.1364 7.86361L12 10.7272L14.8636 7.86361C15.2151 7.51214 15.7849 7.51214 16.1364 7.86361C16.4879 8.21508 16.4879 8.78493 16.1364 9.1364L13.2728 12L16.1364 14.8636C16.4879 15.2151 16.4879 15.7849 16.1364 16.1364C15.7849 16.4879 15.2151 16.4879 14.8636 16.1364L12 13.2728L9.1364 16.1364C8.78493 16.4879 8.21508 16.4879 7.86361 16.1364C7.51214 15.7849 7.51214 15.2151 7.86361 14.8636L10.7272 12L7.86361 9.1364Z"></path></svg>'), ms = e => {
        const t = Kn(),
            n = () => e.size || "m",
            r = () => e.fill || t.colors.icon.error;
        return vt((() => {
            const o = vt((() => "m" === n()));
            return () => o() ? (() => {
                const n = gs.cloneNode(!0),
                    o = n.firstChild,
                    i = o.nextSibling;
                return wt((s => {
                    const a = e.class,
                        l = r(),
                        c = t.colors.constant.white;
                    return a !== s._v$ && hn(n, "class", s._v$ = a), l !== s._v$2 && hn(o, "fill", s._v$2 = l), c !== s._v$3 && hn(i, "fill", s._v$3 = c), s
                }), {
                    _v$: void 0,
                    _v$2: void 0,
                    _v$3: void 0
                }), n
            })() : (() => {
                const o = vt((() => "s" === n()));
                return () => o() ? (() => {
                    const n = ps.cloneNode(!0),
                        o = n.firstChild,
                        i = o.nextSibling;
                    return wt((s => {
                        const a = e.class,
                            l = r(),
                            c = t.colors.constant.white;
                        return a !== s._v$4 && hn(n, "class", s._v$4 = a), l !== s._v$5 && hn(o, "fill", s._v$5 = l), c !== s._v$6 && hn(i, "stroke", s._v$6 = c), s
                    }), {
                        _v$4: void 0,
                        _v$5: void 0,
                        _v$6: void 0
                    }), n
                })() : (() => {
                    const n = ws.cloneNode(!0),
                        o = n.firstChild,
                        i = o.nextSibling;
                    return wt((s => {
                        const a = e.class,
                            l = r(),
                            c = t.colors.constant.white;
                        return a !== s._v$7 && hn(n, "class", s._v$7 = a), l !== s._v$8 && hn(o, "fill", s._v$8 = l), c !== s._v$9 && hn(i, "fill", s._v$9 = c), s
                    }), {
                        _v$7: void 0,
                        _v$8: void 0,
                        _v$9: void 0
                    }), n
                })()
            })()
        })())
    }, vs = dn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.55 5.85123C18.9459 7.81184 20.1094 12.1541 18.1488 15.55C16.1882 18.9459 11.8459 20.1094 8.44998 18.1488C8.01952 17.9003 7.46909 18.0478 7.22056 18.4782C6.97203 18.9087 7.11952 19.4591 7.54998 19.7076C11.8068 22.1653 17.2499 20.7068 19.7076 16.45C22.1653 12.1932 20.7068 6.75005 16.45 4.29239C12.1932 1.83472 6.75003 3.29321 4.29236 7.55001C4.04383 7.98047 4.19132 8.53091 4.62178 8.77943C5.05224 9.02796 5.60268 8.88048 5.8512 8.45001C7.81181 5.05413 12.1541 3.89062 15.55 5.85123Z"></path></svg>'), ys = dn('<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 2.99951C11.5066 2.99951 3 11.5061 3 21.9995C3 32.4929 11.5066 40.9995 22 40.9995C22.8284 40.9995 23.5 41.6711 23.5 42.4995C23.5 43.3279 22.8284 43.9995 22 43.9995C9.84974 43.9995 0 34.1498 0 21.9995C0 9.84925 9.84974 -0.000488281 22 -0.000488281C34.1503 -0.000488281 44 9.84925 44 21.9995C44 22.8279 43.3284 23.4995 42.5 23.4995C41.6716 23.4995 41 22.8279 41 21.9995C41 11.5061 32.4934 2.99951 22 2.99951Z"></path></svg>'), bs = dn('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 56.7846C35.479 63.412 50.1572 59.479 56.7846 47.9999C63.412 36.5209 59.479 21.8427 48 15.2153C36.521 8.58791 21.8428 12.5209 15.2154 23.9999" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>'), Cs = e => {
        const t = Kn(),
            n = () => e.size || "xs",
            r = () => e.fill || t.colors.icon.tertiary,
            o = Bn `
        animation: ${Dn`
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
    `} 1s linear infinite;
    `;
        return vt((() => {
            const t = vt((() => "xs" === n()));
            return () => t() ? (() => {
                const t = vs.cloneNode(!0),
                    n = t.firstChild;
                return wt((i => {
                    const s = Do(o, e.class),
                        a = r();
                    return s !== i._v$ && hn(t, "class", i._v$ = s), a !== i._v$2 && hn(n, "fill", i._v$2 = a), i
                }), {
                    _v$: void 0,
                    _v$2: void 0
                }), t
            })() : (() => {
                const t = vt((() => "s" === n()));
                return () => t() ? (() => {
                    const t = ys.cloneNode(!0),
                        n = t.firstChild;
                    return wt((i => {
                        const s = Do(o, e.class),
                            a = r();
                        return s !== i._v$3 && hn(t, "class", i._v$3 = s), a !== i._v$4 && hn(n, "fill", i._v$4 = a), i
                    }), {
                        _v$3: void 0,
                        _v$4: void 0
                    }), t
                })() : (() => {
                    const t = bs.cloneNode(!0),
                        n = t.firstChild;
                    return wt((i => {
                        const s = Do(o, e.class),
                            a = r();
                        return s !== i._v$5 && hn(t, "class", i._v$5 = s), a !== i._v$6 && hn(n, "stroke", i._v$6 = a), i
                    }), {
                        _v$5: void 0,
                        _v$6: void 0
                    }), t
                })()
            })()
        })())
    }, xs = dn('<svg width="158" height="28" viewBox="0 0 158 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28 14.001C28 21.733 21.732 28.001 14 28.001C6.26801 28.001 0 21.733 0 14.001C0 6.26899 6.26801 0.000976562 14 0.000976562C21.732 0.000976562 28 6.26899 28 14.001ZM9.21931 8.00098H18.7801H18.7813C20.538 8.00098 21.6522 9.89966 20.7691 11.4302L14.8672 21.6576C14.4822 22.3254 13.5172 22.3254 13.1322 21.6576L7.23158 11.4302C6.34721 9.89726 7.4614 8.00098 9.21931 8.00098ZM13.1262 18.5882V9.74806H9.21811C8.78976 9.74806 8.53708 10.2029 8.74163 10.5578L11.8423 16.1035L13.1262 18.5882ZM16.1559 16.1047L19.2554 10.5566C19.4599 10.2017 19.2073 9.74685 18.7789 9.74685H14.8709V18.5906L16.1559 16.1047Z" fill="#0098EA"></path><path d="M18.7802 8.00098H9.21936C7.46145 8.00098 6.34727 9.89726 7.23164 11.4302L13.1322 21.6576C13.5173 22.3254 14.4823 22.3254 14.8673 21.6576L20.7691 11.4302C21.6523 9.89966 20.5381 8.00098 18.7814 8.00098H18.7802ZM13.1274 18.5906L11.8424 16.1035L8.74168 10.5578C8.53714 10.2029 8.78981 9.74806 9.21816 9.74806H13.1262V18.5918L13.1274 18.5906ZM19.2555 10.5566L16.156 16.1047L14.8709 18.5906V9.74685H18.779C19.2073 9.74685 19.46 10.2017 19.2555 10.5566Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51.7483 22.1967C55.7182 22.1967 58.9609 18.954 58.9609 14.9841C58.9609 11.0142 55.7182 7.77148 51.7483 7.77148C47.7588 7.77148 44.5357 11.0142 44.5357 14.9841C44.5357 18.954 47.7588 22.1967 51.7483 22.1967ZM51.7483 19.1702C49.4686 19.1702 47.6802 17.2442 47.6802 14.9841C47.6802 12.724 49.4686 10.798 51.7483 10.798C54.0084 10.798 55.7968 12.724 55.7968 14.9841C55.7968 17.2442 54.0084 19.1702 51.7483 19.1702ZM37.0698 21.9609H40.2142V10.9946H44.2843V8.00732H33V10.9946H37.0698V21.9609ZM69.9379 8.00732H73.0823V21.9609H70.3899L63.59 13.3333V21.9609H60.4652V8.00732H63.1576L69.9379 16.6153V8.00732ZM79.2259 14.9887C79.2259 10.9202 82.351 7.77539 86.4982 7.77539C89.8592 7.77539 92.5519 9.95709 93.2202 12.6891H90.7437C90.154 11.0971 88.4637 9.9964 86.4982 9.9964C83.5893 9.9964 81.5452 12.1781 81.5452 14.9887C81.5452 17.7994 83.5893 19.9811 86.4982 19.9811C88.4637 19.9811 90.154 18.8804 90.7437 17.2884H93.2202C92.5519 20.0204 89.8592 22.2021 86.4982 22.2021C82.351 22.2021 79.2259 19.0573 79.2259 14.9887ZM104.584 17.0525C104.584 19.9025 102.343 22.1628 99.4342 22.1628C96.5253 22.1628 94.2846 19.9025 94.2846 17.0525C94.2846 14.2025 96.5253 11.9422 99.4342 11.9422C102.343 11.9422 104.584 14.2025 104.584 17.0525ZM96.4663 17.0525C96.4663 18.8018 97.6849 20.158 99.4342 20.158C101.164 20.158 102.382 18.8018 102.382 17.0525C102.382 15.3032 101.164 13.947 99.4342 13.947C97.6849 13.947 96.4663 15.3032 96.4663 17.0525ZM108.626 12.1388H106.463V21.9662H108.626V17.1311C108.626 15.0281 109.726 13.9077 111.161 13.9077C112.419 13.9077 113.205 14.8512 113.205 16.4039V21.9662H115.367V16.0501C115.367 13.5539 113.893 11.9422 111.613 11.9422C110.335 11.9422 109.215 12.4926 108.626 13.4753V12.1388ZM117.839 12.1388H120.001V13.4753C120.59 12.4926 121.711 11.9422 122.988 11.9422C125.268 11.9422 126.742 13.5539 126.742 16.0501V21.9662H124.58V16.4039C124.58 14.8512 123.794 13.9077 122.536 13.9077C121.101 13.9077 120.001 15.0281 120.001 17.1311V21.9662H117.839V12.1388ZM133.558 22.1628C136.054 22.1628 137.823 20.728 138.373 18.8804H136.113C135.661 19.8238 134.717 20.2563 133.636 20.2563C131.887 20.2563 130.747 19.077 130.668 17.5832H138.491C138.688 14.2419 136.585 11.9422 133.577 11.9422C130.551 11.9422 128.526 14.1436 128.526 17.0525C128.526 20.0007 130.629 22.1628 133.558 22.1628ZM130.747 16.0501C131.042 14.5367 132.162 13.7505 133.518 13.7505C134.717 13.7505 135.838 14.4581 136.172 16.0501H130.747ZM149.851 18.3694C149.32 20.5511 147.453 22.1628 144.859 22.1628C141.871 22.1628 139.709 19.8828 139.709 17.0525C139.709 14.2222 141.871 11.9422 144.859 11.9422C147.453 11.9422 149.32 13.5539 149.851 15.7356H147.571C147.178 14.6743 146.215 13.9077 144.859 13.9077C143.109 13.9077 141.91 15.2246 141.91 17.0525C141.91 18.8804 143.109 20.1973 144.859 20.1973C146.215 20.1973 147.178 19.4307 147.571 18.3694H149.851ZM155.75 22.0645C156.418 22.0645 156.929 21.9859 157.362 21.8483V19.9221C157.047 20.0401 156.615 20.1187 156.202 20.1187C155.082 20.1187 154.551 19.6666 154.551 18.448V14.065H157.362V12.1388H154.551V9.40675H152.389V12.1388H150.345V14.065H152.389V18.8018C152.389 21.0228 153.863 22.0645 155.75 22.0645Z"></path></svg>'), _s = () => {
        const e = Kn();
        return (() => {
            const t = xs.cloneNode(!0),
                n = t.firstChild.nextSibling.nextSibling;
            return wt((() => hn(n, "fill", e.theme === Ln.DARK ? e.colors.constant.white : e.colors.constant.black))), t
        })()
    }, ks = dn('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.56608 4.42584C5.82527 3.32158 6.8176 2.5 8.00001 2.5C9.38072 2.5 10.5 3.61929 10.5 5C10.5 5.63026 10.3391 6.0386 10.1264 6.34455C9.90018 6.66993 9.58561 6.92478 9.18864 7.20877C9.12579 7.25372 9.05873 7.30025 8.9887 7.34883C8.27392 7.84472 7.25001 8.55507 7.25001 10V10.25C7.25001 10.6642 7.5858 11 8.00001 11C8.41422 11 8.75001 10.6642 8.75001 10.25V10C8.75001 9.36502 9.10777 9.1096 9.94554 8.51149L10.0614 8.42873C10.4769 8.13147 10.9748 7.75194 11.358 7.20076C11.7547 6.63015 12 5.91973 12 5C12 2.79086 10.2091 1 8.00001 1C6.10564 1 4.5205 2.31615 4.10577 4.08308C4.01112 4.48634 4.26129 4.88997 4.66454 4.98462C5.0678 5.07927 5.47143 4.8291 5.56608 4.42584ZM8.00001 15C8.60752 15 9.10001 14.5075 9.10001 13.9C9.10001 13.2925 8.60752 12.8 8.00001 12.8C7.39249 12.8 6.90001 13.2925 6.90001 13.9C6.90001 14.5075 7.39249 15 8.00001 15Z"></path></svg>'), Ss = e => {
        const t = Kn();
        return (() => {
            const n = ks.cloneNode(!0),
                r = n.firstChild;
            return wt((() => hn(r, "fill", e.fill || t.colors.icon.secondary))), n
        })()
    }, Es = dn('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.98156 8.75C9.84854 11.4328 9.01206 13.5 8 13.5C6.98794 13.5 6.15146 11.4328 6.01844 8.75H9.98156ZM11.4832 8.75C11.4217 10.1155 11.1929 11.3869 10.8239 12.4017C10.7734 12.5405 10.7188 12.6789 10.6595 12.8154C12.1454 11.993 13.2103 10.5029 13.4493 8.75H11.4832ZM13.4493 7.25H11.4832C11.4217 5.88453 11.1929 4.61314 10.8239 3.5983C10.7734 3.4595 10.7188 3.32111 10.6595 3.18459C12.1454 4.00697 13.2103 5.49709 13.4493 7.25ZM9.98156 7.25H6.01844C6.15144 4.56764 6.98769 2.50062 7.99955 2.5H8C9.01206 2.5 9.84854 4.56724 9.98156 7.25ZM4.51678 7.25C4.57826 5.88453 4.80706 4.61314 5.1761 3.5983C5.22657 3.4595 5.28124 3.32111 5.3405 3.18459C3.85463 4.00697 2.78972 5.49709 2.55071 7.25H4.51678ZM2.55071 8.75C2.78972 10.5029 3.85463 11.993 5.3405 12.8154C5.28124 12.6789 5.22657 12.5405 5.1761 12.4017C4.80706 11.3869 4.57826 10.1155 4.51678 8.75H2.55071ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"></path></svg>'), Rs = e => {
        const t = Kn();
        return (() => {
            const n = Es.cloneNode(!0),
                r = n.firstChild;
            return wt((() => hn(r, "fill", e.fill || t.colors.icon.primary))), n
        })()
    }, Ts = dn('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 4.8C2.5 3.11984 2.5 2.27976 2.82698 1.63803C3.1146 1.07354 3.57354 0.614601 4.13803 0.32698C4.77976 0 5.61984 0 7.3 0H8.7C10.3802 0 11.2202 0 11.862 0.32698C12.4265 0.614601 12.8854 1.07354 13.173 1.63803C13.5 2.27976 13.5 3.11984 13.5 4.8V11.2C13.5 12.8802 13.5 13.7202 13.173 14.362C12.8854 14.9265 12.4265 15.3854 11.862 15.673C11.2202 16 10.3802 16 8.7 16H7.3C5.61984 16 4.77976 16 4.13803 15.673C3.57354 15.3854 3.1146 14.9265 2.82698 14.362C2.5 13.7202 2.5 12.8802 2.5 11.2V4.8ZM4 3.9C4 3.05992 4 2.63988 4.16349 2.31901C4.3073 2.03677 4.53677 1.8073 4.81901 1.66349C5.13988 1.5 5.55992 1.5 6.4 1.5H9.6C10.4401 1.5 10.8601 1.5 11.181 1.66349C11.4632 1.8073 11.6927 2.03677 11.8365 2.31901C12 2.63988 12 3.05992 12 3.9V12.1C12 12.9401 12 13.3601 11.8365 13.681C11.6927 13.9632 11.4632 14.1927 11.181 14.3365C10.8601 14.5 10.4401 14.5 9.6 14.5H6.4C5.55992 14.5 5.13988 14.5 4.81901 14.3365C4.53677 14.1927 4.3073 13.9632 4.16349 13.681C4 13.3601 4 12.9401 4 12.1V3.9ZM7 2.5C6.58579 2.5 6.25 2.83579 6.25 3.25C6.25 3.66421 6.58579 4 7 4H9C9.41421 4 9.75 3.66421 9.75 3.25C9.75 2.83579 9.41421 2.5 9 2.5H7Z"></path></svg>'), Ls = e => {
        const t = Kn();
        return (() => {
            const n = Ts.cloneNode(!0),
                r = n.firstChild;
            return wt((() => hn(r, "fill", e.fill || t.colors.icon.primary))), n
        })()
    }, As = dn('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 6.8C1.5 5.11984 1.5 4.27976 1.82698 3.63803C2.1146 3.07354 2.57354 2.6146 3.13803 2.32698C3.77976 2 4.61984 2 6.3 2H9.7C11.3802 2 12.2202 2 12.862 2.32698C13.4265 2.6146 13.8854 3.07354 14.173 3.63803C14.5 4.27976 14.5 5.11984 14.5 6.8V11.5H15.25C15.6642 11.5 16 11.8358 16 12.25C16 12.6642 15.6642 13 15.25 13H0.75C0.335786 13 0 12.6642 0 12.25C0 11.8358 0.335786 11.5 0.75 11.5H1.5V6.8ZM3 11.5H13V5.9C13 5.05992 13 4.63988 12.8365 4.31901C12.6927 4.03677 12.4632 3.8073 12.181 3.66349C11.8601 3.5 11.4401 3.5 10.6 3.5H5.4C4.55992 3.5 4.13988 3.5 3.81901 3.66349C3.53677 3.8073 3.3073 4.03677 3.16349 4.31901C3 4.63988 3 5.05992 3 5.9V11.5Z"></path></svg>'), Ms = e => {
        const t = Kn();
        return (() => {
            const n = As.cloneNode(!0),
                r = n.firstChild;
            return wt((() => hn(r, "fill", e.fill || t.colors.icon.primary))), n
        })()
    }, Os = dn('<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><g clip-path="url(#clip0_3676_1603)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 1.25049C15.5 0.836275 15.1642 0.500488 14.75 0.500488C14.3358 0.500488 14 0.836275 14 1.25049V3.67012C12.7187 2.04487 10.7318 1.00049 8.5 1.00049C4.63401 1.00049 1.5 4.1345 1.5 8.00049C1.5 11.8665 4.63401 15.0005 8.5 15.0005C11.6844 15.0005 14.3703 12.8748 15.2199 9.96661C15.3361 9.56902 15.1079 9.15254 14.7103 9.03638C14.3127 8.92023 13.8962 9.14838 13.7801 9.54597C13.1123 11.8319 11 13.5005 8.5 13.5005C5.46243 13.5005 3 11.0381 3 8.00049C3 4.96292 5.46243 2.50049 8.5 2.50049C10.321 2.50049 11.9363 3.3855 12.9377 4.75049H10.5C10.0858 4.75049 9.75 5.08627 9.75 5.50049C9.75 5.9147 10.0858 6.25049 10.5 6.25049H14.75C15.1642 6.25049 15.5 5.9147 15.5 5.50049V1.25049Z"></path></g><defs><clipPath id="clip0_3676_1603"><rect width="16" height="16" fill="white" transform="translate(0.5 0.000488281)"></rect></clipPath></defs></svg>'), Ns = e => {
        const t = Kn();
        return (() => {
            const n = Os.cloneNode(!0),
                r = n.firstChild.firstChild;
            return wt((() => hn(r, "fill", e.fill || t.colors.accent))), n
        })()
    }, Ps = dn('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4.06119V6.75053C13 7.16474 13.3358 7.50053 13.75 7.50053C14.1642 7.50053 14.5 7.16474 14.5 6.75053V2.75053L14.5 2.72807C14.5001 2.63191 14.5003 2.49627 14.4842 2.37627C14.4638 2.22503 14.4063 1.99261 14.2071 1.79342C14.0079 1.59423 13.7755 1.5367 13.6243 1.51637C13.5043 1.50023 13.3686 1.50039 13.2725 1.50051L13.25 1.50053H9.25C8.83579 1.50053 8.5 1.83631 8.5 2.25053C8.5 2.66474 8.83579 3.00053 9.25 3.00053H11.9393L7.21967 7.7202C6.92678 8.01309 6.92678 8.48796 7.21967 8.78086C7.51256 9.07375 7.98744 9.07375 8.28033 8.78086L13 4.06119ZM5.85 1.50053H5.81903H5.81899C5.21528 1.50052 4.71702 1.50051 4.31113 1.53367C3.88956 1.56812 3.50203 1.64204 3.13803 1.82751C2.57354 2.11513 2.1146 2.57407 1.82698 3.13856C1.64151 3.50256 1.56759 3.89009 1.53315 4.31166C1.49998 4.71755 1.49999 5.21581 1.5 5.81953V5.81955V5.85053V10.1505V10.1815V10.1815C1.49999 10.7852 1.49998 11.2835 1.53315 11.6894C1.56759 12.111 1.64151 12.4985 1.82698 12.8625C2.1146 13.427 2.57354 13.8859 3.13803 14.1735C3.50203 14.359 3.88956 14.4329 4.31113 14.4674C4.71702 14.5005 5.21527 14.5005 5.81897 14.5005H5.81901H5.85H10.15H10.181H10.181C10.7847 14.5005 11.283 14.5005 11.6889 14.4674C12.1104 14.4329 12.498 14.359 12.862 14.1735C13.4265 13.8859 13.8854 13.427 14.173 12.8625C14.3585 12.4985 14.4324 12.111 14.4669 11.6894C14.5 11.2835 14.5 10.7853 14.5 10.1816V10.1815V10.1505V9.75053C14.5 9.33631 14.1642 9.00053 13.75 9.00053C13.3358 9.00053 13 9.33631 13 9.75053V10.1505C13 10.793 12.9994 11.2297 12.9718 11.5672C12.945 11.8961 12.8963 12.0642 12.8365 12.1815C12.6927 12.4638 12.4632 12.6932 12.181 12.837C12.0637 12.8968 11.8955 12.9455 11.5667 12.9724C11.2292 12.9999 10.7924 13.0005 10.15 13.0005H5.85C5.20757 13.0005 4.77085 12.9999 4.43328 12.9724C4.10447 12.9455 3.93632 12.8968 3.81902 12.837C3.53677 12.6932 3.3073 12.4638 3.16349 12.1815C3.10372 12.0642 3.05503 11.8961 3.02816 11.5672C3.00058 11.2297 3 10.793 3 10.1505V5.85053C3 5.20809 3.00058 4.77137 3.02816 4.43381C3.05503 4.10499 3.10372 3.93684 3.16349 3.81954C3.3073 3.5373 3.53677 3.30783 3.81902 3.16402C3.93632 3.10425 4.10447 3.05556 4.43328 3.02869C4.77085 3.00111 5.20757 3.00053 5.85 3.00053H6.25C6.66422 3.00053 7 2.66474 7 2.25053C7 1.83631 6.66422 1.50053 6.25 1.50053H5.85Z"></path></svg>'), $s = e => {
        const t = Kn();
        return (() => {
            const n = Ps.cloneNode(!0),
                r = n.firstChild;
            return wt((() => hn(r, "fill", e.fill || t.colors.accent))), n
        })()
    }, Is = dn('<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><g clip-path="url(#clip0_3676_1274)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.82698 2.63901C1.5 3.28074 1.5 4.12082 1.5 5.80098V8.80098V9.00098V10.201C1.5 11.8811 1.5 12.7212 1.82698 13.3629C2.1146 13.9274 2.57354 14.3864 3.13803 14.674C3.77976 15.001 4.61984 15.001 6.3 15.001H11.7C13.3802 15.001 14.2202 15.001 14.862 14.674C15.4265 14.3864 15.8854 13.9274 16.173 13.3629C16.5 12.7212 16.5 11.8811 16.5 10.201V8.80098C16.5 7.12082 16.5 6.28074 16.173 5.63901C15.8854 5.07452 15.4265 4.61558 14.862 4.32796C14.743 4.26733 14.6172 4.21795 14.4805 4.17772C14.4501 3.49449 14.3722 3.02994 14.173 2.63901C13.8854 2.07452 13.4265 1.61558 12.862 1.32796C12.2202 1.00098 11.3802 1.00098 9.7 1.00098H6.3C4.61984 1.00098 3.77976 1.00098 3.13803 1.32796C2.57354 1.61558 2.1146 2.07452 1.82698 2.63901ZM12.9861 4.00942C12.9684 3.7108 12.9281 3.49982 12.8365 3.31999C12.6927 3.03775 12.4632 2.80828 12.181 2.66447C11.8601 2.50098 11.4401 2.50098 10.6 2.50098H5.4C4.55992 2.50098 4.13988 2.50098 3.81901 2.66447C3.53677 2.80828 3.3073 3.03775 3.16349 3.31999C3.03615 3.56991 3.00799 3.88 3.00177 4.40188C3.04646 4.37612 3.09189 4.35146 3.13803 4.32796C3.77976 4.00098 4.61984 4.00098 6.3 4.00098H11.7C12.1966 4.00098 12.6197 4.00098 12.9861 4.00942ZM3 7.90098V8.10098C3 8.47468 3 8.76527 3.01439 9.00098H3V11.101C3 11.9411 3 12.3611 3.16349 12.682C3.3073 12.9642 3.53677 13.1937 3.81901 13.3375C4.13988 13.501 4.55992 13.501 5.4 13.501H12.6C13.4401 13.501 13.8601 13.501 14.181 13.3375C14.4632 13.1937 14.6927 12.9642 14.8365 12.682C15 12.3611 15 11.9411 15 11.101V7.90098C15 7.0609 15 6.64086 14.8365 6.31999C14.6927 6.03775 14.4632 5.80828 14.181 5.66447C13.8601 5.50098 13.4401 5.50098 12.6 5.50098H5.4C4.55992 5.50098 4.13988 5.50098 3.81901 5.66447C3.53677 5.80828 3.3073 6.03775 3.16349 6.31999C3 6.64086 3 7.0609 3 7.90098ZM10.5 9.75098C10.5 9.33676 10.8358 9.00098 11.25 9.00098H12.75C13.1642 9.00098 13.5 9.33676 13.5 9.75098C13.5 10.1652 13.1642 10.501 12.75 10.501H11.25C10.8358 10.501 10.5 10.1652 10.5 9.75098Z"></path></g><defs><clipPath id="clip0_3676_1274"><rect width="16" height="16" fill="white" transform="translate(0.5 0.000976562)"></rect></clipPath></defs></svg>'), Us = e => {
        const t = Kn();
        return (() => {
            const n = Is.cloneNode(!0),
                r = n.firstChild.firstChild;
            return wt((() => hn(r, "fill", e.fill || t.colors.accent))), n
        })()
    }, Ws = dn('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M39.6319 16.8719C38.3212 16.2041 36.7002 16.0478 34 16.0112V11C34 5.47715 29.5228 1 24 1C18.4772 1 14 5.47715 14 11V16.0112C11.2998 16.0478 9.6788 16.2041 8.36808 16.8719C6.86278 17.6389 5.63893 18.8628 4.87195 20.3681C4 22.0794 4 24.3196 4 28.8V32.2C4 36.6804 4 38.9206 4.87195 40.6319C5.63893 42.1372 6.86278 43.3611 8.36808 44.1281C10.0794 45 12.3196 45 16.8 45H31.2C35.6804 45 37.9206 45 39.6319 44.1281C41.1372 43.3611 42.3611 42.1372 43.1281 40.6319C44 38.9206 44 36.6804 44 32.2V28.8C44 24.3196 44 22.0794 43.1281 20.3681C42.3611 18.8628 41.1372 17.6389 39.6319 16.8719ZM31 11V16H17V11C17 7.13401 20.134 4 24 4C27.866 4 31 7.13401 31 11ZM7.54497 21.73C7 22.7996 7 24.1997 7 27V34C7 36.8003 7 38.2004 7.54497 39.27C8.02433 40.2108 8.78924 40.9757 9.73005 41.455C10.7996 42 12.1997 42 15 42H33C35.8003 42 37.2004 42 38.27 41.455C39.2108 40.9757 39.9757 40.2108 40.455 39.27C41 38.2004 41 36.8003 41 34V27C41 24.1997 41 22.7996 40.455 21.73C39.9757 20.7892 39.2108 20.0243 38.27 19.545C37.2004 19 35.8003 19 33 19H15C12.1997 19 10.7996 19 9.73005 19.545C8.78924 20.0243 8.02433 20.7892 7.54497 21.73ZM24 24C23.1716 24 22.5 24.6716 22.5 25.5V29.5C22.5 30.3284 23.1716 31 24 31C24.8284 31 25.5 30.3284 25.5 29.5V25.5C25.5 24.6716 24.8284 24 24 24Z"></path></svg>'), js = e => {
        const t = Kn();
        return (() => {
            const n = Ws.cloneNode(!0),
                r = n.firstChild;
            return wt((o => {
                const i = e.class,
                    s = e.fill || t.colors.icon.secondary;
                return i !== o._v$ && hn(n, "class", o._v$ = i), s !== o._v$2 && hn(r, "fill", o._v$2 = s), o
            }), {
                _v$: void 0,
                _v$2: void 0
            }), n
        })()
    }, Bs = dn('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M37.485 37.3849C40.894 33.9506 43 29.2212 43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 29.2213 7.1061 33.9507 10.5151 37.385C13.3583 32.9438 18.3354 30 24.0001 30C29.6647 30 34.6418 32.9437 37.485 37.3849ZM35.1809 39.3635C32.9143 35.5532 28.7554 33 24.0001 33C19.2448 33 15.0858 35.5533 12.8193 39.3636C15.9564 41.6506 19.8206 43 24 43C28.1795 43 32.0437 41.6505 35.1809 39.3635ZM24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46ZM24 24C26.7614 24 29 21.7614 29 19C29 16.2386 26.7614 14 24 14C21.2386 14 19 16.2386 19 19C19 21.7614 21.2386 24 24 24ZM24 27C28.4183 27 32 23.4183 32 19C32 14.5817 28.4183 11 24 11C19.5817 11 16 14.5817 16 19C16 23.4183 19.5817 27 24 27Z"></path></svg>'), Ds = e => {
        const t = Kn();
        return (() => {
            const n = Bs.cloneNode(!0),
                r = n.firstChild;
            return wt((o => {
                const i = e.class,
                    s = e.fill || t.colors.icon.secondary;
                return i !== o._v$ && hn(n, "class", o._v$ = i), s !== o._v$2 && hn(r, "fill", o._v$2 = s), o
            }), {
                _v$: void 0,
                _v$2: void 0
            }), n
        })()
    }, Hs = dn('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.5607 4.43934C33.9749 3.85355 33.0251 3.85355 32.4393 4.43934C31.8536 5.02513 31.8536 5.97487 32.4393 6.56066L37.8787 12H10.5C9.67157 12 9 12.6716 9 13.5C9 14.3284 9.67157 15 10.5 15H37.8787L32.4393 20.4393C31.8536 21.0251 31.8536 21.9749 32.4393 22.5607C33.0251 23.1464 33.9749 23.1464 34.5607 22.5607L42.5607 14.5607C43.1464 13.9749 43.1464 13.0251 42.5607 12.4393L34.5607 4.43934ZM13.4393 25.4393C14.0251 24.8536 14.9749 24.8536 15.5607 25.4393C16.1464 26.0251 16.1464 26.9749 15.5607 27.5607L10.1213 33H37.5C38.3284 33 39 33.6716 39 34.5C39 35.3284 38.3284 36 37.5 36H10.1213L15.5607 41.4393C16.1464 42.0251 16.1464 42.9749 15.5607 43.5607C14.9749 44.1464 14.0251 44.1464 13.4393 43.5607L5.43934 35.5607C4.85355 34.9749 4.85355 34.0251 5.43934 33.4393L13.4393 25.4393Z"></path></svg>'), Vs = e => {
        const t = Kn();
        return (() => {
            const n = Hs.cloneNode(!0),
                r = n.firstChild;
            return wt((o => {
                const i = e.class,
                    s = e.fill || t.colors.icon.secondary;
                return i !== o._v$ && hn(n, "class", o._v$ = i), s !== o._v$2 && hn(r, "fill", o._v$2 = s), o
            }), {
                _v$: void 0,
                _v$2: void 0
            }), n
        })()
    }, Ks = dn('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 12.002C1.75 9.20169 1.75 7.80156 2.29497 6.732C2.77433 5.79119 3.53924 5.02629 4.48005 4.54692C5.54961 4.00195 6.94974 4.00195 9.75 4.00195H17.25C20.0503 4.00195 21.4504 4.00195 22.52 4.54692C23.4608 5.02629 24.2257 5.79119 24.705 6.732C24.8256 6.96861 24.9195 7.2214 24.9926 7.50195H21.5C19.6377 7.50195 18.7065 7.50195 17.9609 7.77334C16.711 8.22828 15.7263 9.21291 15.2714 10.4629C15 11.2085 15 12.1396 15 14.002C15 15.8643 15 16.7954 15.2714 17.541C15.7263 18.791 16.711 19.7756 17.9609 20.2306C18.7065 20.502 19.6377 20.502 21.5 20.502H24.9926C24.9195 20.7825 24.8256 21.0353 24.705 21.2719C24.2257 22.2127 23.4608 22.9776 22.52 23.457C21.4504 24.002 20.0503 24.002 17.25 24.002H9.75C6.94974 24.002 5.54961 24.002 4.48005 23.457C3.53924 22.9776 2.77433 22.2127 2.29497 21.2719C1.75 20.2023 1.75 18.8022 1.75 16.002V12.002ZM16.4999 13.802C16.4999 12.1218 16.4999 11.2817 16.8269 10.64C17.1145 10.0755 17.5735 9.61656 18.138 9.32894C18.7797 9.00196 19.6198 9.00196 21.2999 9.00196H23.1999C24.8801 9.00196 25.7202 9.00196 26.3619 9.32894C26.9264 9.61656 27.3853 10.0755 27.673 10.64C27.9999 11.2817 27.9999 12.1218 27.9999 13.802V14.202C27.9999 15.8821 27.9999 16.7222 27.673 17.3639C27.3853 17.9284 26.9264 18.3874 26.3619 18.675C25.7202 19.002 24.8801 19.002 23.1999 19.002H21.2999C19.6198 19.002 18.7797 19.002 18.138 18.675C17.5735 18.3874 17.1145 17.9284 16.8269 17.3639C16.4999 16.7222 16.4999 15.8821 16.4999 14.202V13.802ZM22.4999 14.002C22.4999 14.9685 21.7164 15.752 20.7499 15.752C19.7834 15.752 18.9999 14.9685 18.9999 14.002C18.9999 13.0355 19.7834 12.252 20.7499 12.252C21.7164 12.252 22.4999 13.0355 22.4999 14.002Z"></path></svg>'), Fs = e => {
        const t = Kn();
        return (() => {
            const n = Ks.cloneNode(!0),
                r = n.firstChild;
            return wt((o => {
                const i = e.class,
                    s = e.fill || t.colors.constant.white;
                return i !== o._v$ && hn(n, "class", o._v$ = i), s !== o._v$2 && hn(r, "fill", o._v$2 = s), o
            }), {
                _v$: void 0,
                _v$2: void 0
            }), n
        })()
    }, qs = dn('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.7803 7.21967C25.0732 7.51256 25.0732 7.98744 24.7803 8.28033L11.5303 21.5303C11.2374 21.8232 10.7626 21.8232 10.4697 21.5303L4.21967 15.2803C3.92678 14.9874 3.92678 14.5126 4.21967 14.2197C4.51256 13.9268 4.98744 13.9268 5.28033 14.2197L11 19.9393L23.7197 7.21967C24.0126 6.92678 24.4874 6.92678 24.7803 7.21967Z"></path></svg>'), zs = e => {
        const t = Kn();
        return (() => {
            const n = qs.cloneNode(!0),
                r = n.firstChild;
            return wt((o => {
                const i = e.class,
                    s = e.fill || t.colors.icon.secondary;
                return i !== o._v$ && hn(n, "class", o._v$ = i), s !== o._v$2 && hn(r, "fill", o._v$2 = s), o
            }), {
                _v$: void 0,
                _v$2: void 0
            }), n
        })()
    }, Zs = dn('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 10.0001C10.0016 8.02333 10.0267 6.98719 10.436 6.18404C10.8195 5.43139 11.4314 4.81947 12.184 4.43597C13.0397 4 14.1598 4 16.4 4H17.6C19.8402 4 20.9603 4 21.816 4.43597C22.5686 4.81947 23.1805 5.43139 23.564 6.18404C24 7.03969 24 8.15979 24 10.4V11.6C24 13.8402 24 14.9603 23.564 15.816C23.1805 16.5686 22.5686 17.1805 21.816 17.564C21.0128 17.9733 19.9767 17.9984 17.9999 17.9999C17.9984 19.9767 17.9733 21.0128 17.564 21.816C17.1805 22.5686 16.5686 23.1805 15.816 23.564C14.9603 24 13.8402 24 11.6 24H10.4C8.15979 24 7.03969 24 6.18404 23.564C5.43139 23.1805 4.81947 22.5686 4.43597 21.816C4 20.9603 4 19.8402 4 17.6V16.4C4 14.1598 4 13.0397 4.43597 12.184C4.81947 11.4314 5.43139 10.8195 6.18404 10.436C6.98719 10.0267 8.02333 10.0016 10.0001 10.0001ZM10 11.5H9.5C8.09987 11.5 7.3998 11.5 6.86502 11.7725C6.39462 12.0122 6.01217 12.3946 5.77248 12.865C5.5 13.3998 5.5 14.0999 5.5 15.5V18.5C5.5 19.9001 5.5 20.6002 5.77248 21.135C6.01217 21.6054 6.39462 21.9878 6.86502 22.2275C7.3998 22.5 8.09987 22.5 9.5 22.5H12.5C13.9001 22.5 14.6002 22.5 15.135 22.2275C15.6054 21.9878 15.9878 21.6054 16.2275 21.135C16.5 20.6002 16.5 19.9001 16.5 18.5V18H16.4C14.1598 18 13.0397 18 12.184 17.564C11.4314 17.1805 10.8195 16.5686 10.436 15.816C10 14.9603 10 13.8402 10 11.6V11.5ZM11.5 9.5C11.5 8.09987 11.5 7.3998 11.7725 6.86502C12.0122 6.39462 12.3946 6.01217 12.865 5.77248C13.3998 5.5 14.0999 5.5 15.5 5.5H18.5C19.9001 5.5 20.6002 5.5 21.135 5.77248C21.6054 6.01217 21.9878 6.39462 22.2275 6.86502C22.5 7.3998 22.5 8.09987 22.5 9.5V12.5C22.5 13.9001 22.5 14.6002 22.2275 15.135C21.9878 15.6054 21.6054 15.9878 21.135 16.2275C20.6002 16.5 19.9001 16.5 18.5 16.5H15.5C14.0999 16.5 13.3998 16.5 12.865 16.2275C12.3946 15.9878 12.0122 15.6054 11.7725 15.135C11.5 14.6002 11.5 13.9001 11.5 12.5V9.5Z"></path></svg>'), Gs = e => {
        const t = Kn(),
            n = () => e.fill || t.colors.icon.secondary;
        return (() => {
            const e = Zs.cloneNode(!0),
                t = e.firstChild;
            return wt((r => {
                const o = n(),
                    i = n();
                return o !== r._v$ && hn(e, "fill", r._v$ = o), i !== r._v$2 && hn(t, "fill", r._v$2 = i), r
            }), {
                _v$: void 0,
                _v$2: void 0
            }), e
        })()
    }, Ys = dn('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.12695C1 3.07754 1 2.55284 1.19202 2.14684C1.38986 1.72856 1.7266 1.39181 2.14489 1.19397C2.55088 1.00195 3.07559 1.00195 4.125 1.00195C5.17441 1.00195 5.69912 1.00195 6.10511 1.19397C6.5234 1.39181 6.86014 1.72856 7.05798 2.14684C7.25 2.55284 7.25 3.07754 7.25 4.12695C7.25 5.17636 7.25 5.70107 7.05798 6.10706C6.86014 6.52535 6.5234 6.8621 6.10511 7.05993C5.69912 7.25195 5.17441 7.25195 4.125 7.25195C3.07559 7.25195 2.55088 7.25195 2.14489 7.05993C1.7266 6.8621 1.38986 6.52535 1.19202 6.10706C1 5.70107 1 5.17636 1 4.12695ZM2.5 3.30195C2.5 3.02193 2.5 2.88191 2.5545 2.77496C2.60243 2.68088 2.67892 2.60439 2.773 2.55645C2.87996 2.50195 3.01997 2.50195 3.3 2.50195H4.95C5.23003 2.50195 5.37004 2.50195 5.477 2.55645C5.57108 2.60439 5.64757 2.68088 5.6955 2.77496C5.75 2.88191 5.75 3.02193 5.75 3.30195V4.95195C5.75 5.23198 5.75 5.37199 5.6955 5.47895C5.64757 5.57303 5.57108 5.64952 5.477 5.69746C5.37004 5.75195 5.23003 5.75195 4.95 5.75195H3.3C3.01997 5.75195 2.87996 5.75195 2.773 5.69746C2.67892 5.64952 2.60243 5.57303 2.5545 5.47895C2.5 5.37199 2.5 5.23198 2.5 4.95195V3.30195ZM1 11.877C1 10.8275 1 10.3028 1.19202 9.89684C1.38986 9.47856 1.7266 9.14181 2.14489 8.94397C2.55088 8.75195 3.07559 8.75195 4.125 8.75195C5.17441 8.75195 5.69912 8.75195 6.10511 8.94397C6.5234 9.14181 6.86014 9.47856 7.05798 9.89684C7.25 10.3028 7.25 10.8275 7.25 11.877C7.25 12.9264 7.25 13.4511 7.05798 13.8571C6.86014 14.2753 6.5234 14.6121 6.10511 14.8099C5.69912 15.002 5.17441 15.002 4.125 15.002C3.07559 15.002 2.55088 15.002 2.14489 14.8099C1.7266 14.6121 1.38986 14.2753 1.19202 13.8571C1 13.4511 1 12.9264 1 11.877ZM2.5 11.052C2.5 10.7719 2.5 10.6319 2.5545 10.525C2.60243 10.4309 2.67892 10.3544 2.773 10.3064C2.87996 10.252 3.01997 10.252 3.3 10.252H4.95C5.23003 10.252 5.37004 10.252 5.477 10.3064C5.57108 10.3544 5.64757 10.4309 5.6955 10.525C5.75 10.6319 5.75 10.7719 5.75 11.052V12.702C5.75 12.982 5.75 13.122 5.6955 13.2289C5.64757 13.323 5.57108 13.3995 5.477 13.4475C5.37004 13.502 5.23003 13.502 4.95 13.502H3.3C3.01997 13.502 2.87996 13.502 2.773 13.4475C2.67892 13.3995 2.60243 13.323 2.5545 13.2289C2.5 13.122 2.5 12.982 2.5 12.702V11.052ZM8.94202 2.14684C8.75 2.55284 8.75 3.07754 8.75 4.12695C8.75 5.17636 8.75 5.70107 8.94202 6.10706C9.13986 6.52535 9.4766 6.8621 9.89489 7.05993C10.3009 7.25195 10.8256 7.25195 11.875 7.25195C12.9244 7.25195 13.4491 7.25195 13.8551 7.05993C14.2734 6.8621 14.6101 6.52535 14.808 6.10706C15 5.70107 15 5.17636 15 4.12695C15 3.07754 15 2.55284 14.808 2.14684C14.6101 1.72856 14.2734 1.39181 13.8551 1.19397C13.4491 1.00195 12.9244 1.00195 11.875 1.00195C10.8256 1.00195 10.3009 1.00195 9.89489 1.19397C9.4766 1.39181 9.13986 1.72856 8.94202 2.14684ZM10.3045 2.77496C10.25 2.88191 10.25 3.02193 10.25 3.30195V4.95195C10.25 5.23198 10.25 5.37199 10.3045 5.47895C10.3524 5.57303 10.4289 5.64952 10.523 5.69746C10.63 5.75195 10.77 5.75195 11.05 5.75195H12.7C12.98 5.75195 13.12 5.75195 13.227 5.69746C13.3211 5.64952 13.3976 5.57303 13.4455 5.47895C13.5 5.37199 13.5 5.23198 13.5 4.95195V3.30195C13.5 3.02193 13.5 2.88191 13.4455 2.77496C13.3976 2.68088 13.3211 2.60439 13.227 2.55645C13.12 2.50195 12.98 2.50195 12.7 2.50195H11.05C10.77 2.50195 10.63 2.50195 10.523 2.55645C10.4289 2.60439 10.3524 2.68088 10.3045 2.77496ZM8.80727 9.13518C8.75 9.26242 8.75 9.4256 8.75 9.75195C8.75 10.0783 8.75 10.2415 8.80727 10.3687C8.87245 10.5136 8.9884 10.6295 9.13323 10.6947C9.26047 10.752 9.42365 10.752 9.75 10.752C10.0764 10.752 10.2395 10.752 10.3668 10.6947C10.5116 10.6295 10.6276 10.5136 10.6927 10.3687C10.75 10.2415 10.75 10.0783 10.75 9.75195C10.75 9.4256 10.75 9.26242 10.6927 9.13518C10.6276 8.99035 10.5116 8.8744 10.3668 8.80922C10.2395 8.75195 10.0764 8.75195 9.75 8.75195C9.42365 8.75195 9.26047 8.75195 9.13323 8.80922C8.9884 8.8744 8.87245 8.99035 8.80727 9.13518ZM10.87 11.8771C10.87 11.546 10.87 11.3805 10.9289 11.2517C10.9938 11.1098 11.1077 10.9959 11.2497 10.931C11.3784 10.8721 11.5439 10.8721 11.875 10.8721C12.2061 10.8721 12.3716 10.8721 12.5003 10.931C12.6423 10.9959 12.7562 11.1098 12.8211 11.2517C12.88 11.3805 12.88 11.546 12.88 11.8771C12.88 12.2081 12.88 12.3737 12.8211 12.5024C12.7562 12.6444 12.6423 12.7583 12.5003 12.8232C12.3716 12.8821 12.2061 12.8821 11.875 12.8821C11.5439 12.8821 11.3784 12.8821 11.2497 12.8232C11.1077 12.7583 10.9938 12.6444 10.9289 12.5024C10.87 12.3737 10.87 12.2081 10.87 11.8771ZM8.80727 13.3852C8.75 13.5124 8.75 13.6756 8.75 14.002C8.75 14.3283 8.75 14.4915 8.80727 14.6187C8.87245 14.7636 8.9884 14.8795 9.13323 14.9447C9.26047 15.002 9.42365 15.002 9.75 15.002C10.0764 15.002 10.2395 15.002 10.3668 14.9447C10.5116 14.8795 10.6276 14.7636 10.6927 14.6187C10.75 14.4915 10.75 14.3283 10.75 14.002C10.75 13.6756 10.75 13.5124 10.6927 13.3852C10.6276 13.2404 10.5116 13.1244 10.3668 13.0592C10.2395 13.002 10.0764 13.002 9.75 13.002C9.42365 13.002 9.26047 13.002 9.13323 13.0592C8.9884 13.1244 8.87245 13.2404 8.80727 13.3852ZM13 9.75195C13 9.4256 13 9.26242 13.0573 9.13518C13.1224 8.99035 13.2384 8.8744 13.3832 8.80922C13.5105 8.75195 13.6736 8.75195 14 8.75195C14.3264 8.75195 14.4895 8.75195 14.6168 8.80922C14.7616 8.8744 14.8776 8.99035 14.9427 9.13518C15 9.26242 15 9.4256 15 9.75195C15 10.0783 15 10.2415 14.9427 10.3687C14.8776 10.5136 14.7616 10.6295 14.6168 10.6947C14.4895 10.752 14.3264 10.752 14 10.752C13.6736 10.752 13.5105 10.752 13.3832 10.6947C13.2384 10.6295 13.1224 10.5136 13.0573 10.3687C13 10.2415 13 10.0783 13 9.75195ZM13.0573 13.3852C13 13.5124 13 13.6756 13 14.002C13 14.3283 13 14.4915 13.0573 14.6187C13.1224 14.7636 13.2384 14.8795 13.3832 14.9447C13.5105 15.002 13.6736 15.002 14 15.002C14.3264 15.002 14.4895 15.002 14.6168 14.9447C14.7616 14.8795 14.8776 14.7636 14.9427 14.6187C15 14.4915 15 14.3283 15 14.002C15 13.6756 15 13.5124 14.9427 13.3852C14.8776 13.2404 14.7616 13.1244 14.6168 13.0592C14.4895 13.002 14.3264 13.002 14 13.002C13.6736 13.002 13.5105 13.002 13.3832 13.0592C13.2384 13.1244 13.1224 13.2404 13.0573 13.3852Z"></path></svg>'), Qs = e => {
        const t = Kn();
        return (() => {
            const n = Ys.cloneNode(!0),
                r = n.firstChild;
            return wt((() => hn(r, "fill", e.fill || t.colors.icon.secondary))), n
        })()
    }, Js = {
        m: "16px",
        s: "12px",
        none: "0"
    }, Xs = {
        m: "6px",
        s: "6px",
        none: "0"
    }, ea = qn.div `
    width: 60px;
    height: 60px;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: ${e=>Js[e.theme.borderRadius]};
    background-color: ${e=>e.theme.colors.background.tint};
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    gap: 4px;
`, ta = qn(Ki)
    `
    width: 20px;
    height: 20px;
    border-radius: ${e=>Xs[e.theme.borderRadius]};
`, na = e => qt(Xi, {
        get name() {
            return e.labelLine1
        },
        get secondLine() {
            return e.labelLine2
        },
        get icon() {
            return qt(ea, {
                get children() {
                    return qt(Jt, {
                        each: [0, 1, 2, 3],
                        children: t => qt(ta, {
                            get src() {
                                return e.images[t]
                            }
                        })
                    })
                }
            })
        },
        onClick: () => e.onClick()
    }), ra = "telegram-wallet", oa = "https://raw.githubusercontent.com/ton-connect/sdk/main/assets/ton-icon-48.png", ia = "https://raw.githubusercontent.com/ton-connect/sdk/main/assets/tg.png", sa = e => {
        const [t] = ji();
        return vt((() => {
            const n = vt((() => e.wallet.appName === ra));
            return () => n() ? qt(Xi, {
                get icon() {
                    return e.wallet.imageUrl
                },
                get name() {
                    return t("walletItem.walletOn", {}, "Wallet On")
                },
                secondLine: "Telegram",
                get badgeUrl() {
                    return ia
                },
                onClick: () => e.onClick()
            }) : qt(Xi, {
                get icon() {
                    return e.wallet.imageUrl
                },
                get name() {
                    return e.wallet.name
                },
                get secondLine() {
                    return (() => {
                        if (e.wallet.appName !== ra) return "isPreferred" in e.wallet && e.wallet.isPreferred ? t("walletItem.recent", {}, "Recent") : be(e.wallet) ? t("walletItem.installed", {}, "Installed") : "Tonkeeper" === e.wallet.name ? t("walletItem.popular", {}, "Popular") : void 0
                    })()
                },
                secondLineColorPrimary: !1,
                onClick: () => e.onClick()
            })
        })())
    }, aa = qn.div `
    width: 100%;
    overflow-y: auto;
    max-height: ${e=>e.maxHeight};

    scrollbar-width: none;
    &&::-webkit-scrollbar {
        display: none;
    }

    &&::-webkit-scrollbar-track {
        background: transparent;
    }

    &&::-webkit-scrollbar-thumb {
        display: none;
    }
`, la = qn.div `
    height: 1px;
    margin: 0 -24px;
    width: calc(100% + 48px);
    opacity: 0.08;
    background: ${e=>e.isShown?e.theme.colors.icon.secondary:"transparent"};
    transition: background 0.15s ease-in-out;

    ${Oo("mobile")} {
        width: 100%;
        margin: 0;
    }
`, [ca, ua] = gt((null == (l = dr()) ? void 0 : l.innerHeight) || 0);
    dr() && window.addEventListener("resize", (() => ua(window.innerHeight)));
    const [da, ha] = gt(Mo("mobile")), fa = () => ha(Mo("mobile"));
    dr() && (window.addEventListener("resize", (() => fa())), window.addEventListener("load", (() => fa()), {
        once: !0
    }));
    const ga = e => {
            const [t, n] = gt(!1), r = () => void 0 !== e.maxHeight ? `${e.maxHeight}px` : ca() - (da() ? 150 : 200) + "px";
            return [qt(la, {
                get isShown() {
                    return t()
                }
            }), qt(aa, {
                get maxHeight() {
                    return r()
                },
                onScroll: e => {
                    n(e.target.scrollTop > 0)
                },
                get class() {
                    return e.class
                },
                get children() {
                    return e.children
                }
            })]
        },
        pa = qn.a `
    display: block;
    text-decoration: unset;
`,
        wa = e => qt(pa, Yt({
            get href() {
                return e.href
            },
            get target() {
                return e.blank ? "_blank" : "_self"
            },
            get class() {
                return e.class
            }
        }, (() => e.blank ? {
            rel: "noreferrer noopener"
        } : {}), {
            get children() {
                return e.children
            }
        })),
        ma = St(),
        va = dn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.76228 2.09998H10.2378C11.0458 2.09997 11.7067 2.09996 12.2438 2.14384C12.7997 2.18926 13.3017 2.28614 13.7706 2.52505C14.5045 2.89896 15.1011 3.49558 15.475 4.22941C15.7139 4.6983 15.8108 5.20038 15.8562 5.75629C15.9001 6.29337 15.9001 6.95422 15.9001 7.76227V8.1H16.2377C17.0457 8.09999 17.7066 8.09998 18.2437 8.14386C18.7996 8.18928 19.3017 8.28616 19.7705 8.52507C20.5044 8.89898 21.101 9.4956 21.4749 10.2294C21.7138 10.6983 21.8107 11.2004 21.8561 11.7563C21.9 12.2934 21.9 12.9542 21.9 13.7623V16.2377C21.9 17.0458 21.9 17.7066 21.8561 18.2437C21.8107 18.7996 21.7138 19.3017 21.4749 19.7706C21.101 20.5044 20.5044 21.101 19.7705 21.4749C19.3017 21.7138 18.7996 21.8107 18.2437 21.8561C17.7066 21.9 17.0458 21.9 16.2378 21.9H13.7623C12.9543 21.9 12.2934 21.9 11.7563 21.8561C11.2004 21.8107 10.6983 21.7138 10.2294 21.4749C9.49561 21.101 8.89898 20.5044 8.52508 19.7706C8.28616 19.3017 8.18928 18.7996 8.14386 18.2437C8.09998 17.7066 8.09999 17.0458 8.1 16.2377V15.9H7.76227C6.95426 15.9 6.29335 15.9 5.75629 15.8561C5.20038 15.8107 4.6983 15.7138 4.22941 15.4749C3.49558 15.101 2.89896 14.5044 2.52505 13.7705C2.28614 13.3017 2.18926 12.7996 2.14384 12.2437C2.09996 11.7066 2.09997 11.0458 2.09998 10.2377V7.76228C2.09997 6.95424 2.09996 6.29336 2.14384 5.75629C2.18926 5.20038 2.28614 4.6983 2.52505 4.22941C2.89896 3.49558 3.49558 2.89896 4.22941 2.52505C4.6983 2.28614 5.20038 2.18926 5.75629 2.14384C6.29336 2.09996 6.95425 2.09997 7.76228 2.09998ZM8.1 14.1V13.7623C8.09999 12.9542 8.09998 12.2934 8.14386 11.7563C8.18928 11.2004 8.28616 10.6983 8.52508 10.2294C8.89898 9.4956 9.49561 8.89898 10.2294 8.52507C10.6983 8.28616 11.2004 8.18928 11.7563 8.14386C12.2934 8.09998 12.9542 8.09999 13.7623 8.1H14.1001V7.79998C14.1001 6.94505 14.0994 6.35798 14.0622 5.90287C14.0259 5.45827 13.9593 5.21944 13.8712 5.0466C13.6699 4.65146 13.3486 4.3302 12.9535 4.12886C12.7806 4.04079 12.5418 3.97419 12.0972 3.93786C11.6421 3.90068 11.055 3.89998 10.2001 3.89998H7.79998C6.94505 3.89998 6.35798 3.90068 5.90287 3.93786C5.45827 3.97419 5.21944 4.04079 5.0466 4.12886C4.65146 4.3302 4.3302 4.65146 4.12886 5.0466C4.04079 5.21944 3.97419 5.45827 3.93786 5.90287C3.90068 6.35798 3.89998 6.94505 3.89998 7.79998V10.2C3.89998 11.0549 3.90068 11.642 3.93786 12.0971C3.97419 12.5417 4.04079 12.7805 4.12886 12.9534C4.3302 13.3485 4.65146 13.6698 5.0466 13.8711C5.21944 13.9592 5.45827 14.0258 5.90287 14.0621C6.35798 14.0993 6.94505 14.1 7.79998 14.1H8.1ZM11.0466 10.1289C11.2195 10.0408 11.4583 9.97421 11.9029 9.93788C12.358 9.9007 12.9451 9.9 13.8 9.9H16.2C17.0549 9.9 17.642 9.9007 18.0971 9.93788C18.5417 9.97421 18.7805 10.0408 18.9534 10.1289C19.3485 10.3302 19.6698 10.6515 19.8711 11.0466C19.9592 11.2195 20.0258 11.4583 20.0621 11.9029C20.0993 12.358 20.1 12.9451 20.1 13.8V16.2C20.1 17.0549 20.0993 17.642 20.0621 18.0971C20.0258 18.5417 19.9592 18.7805 19.8711 18.9534C19.6698 19.3485 19.3485 19.6698 18.9534 19.8711C18.7805 19.9592 18.5417 20.0258 18.0971 20.0621C17.642 20.0993 17.0549 20.1 16.2 20.1H13.8C12.9451 20.1 12.358 20.0993 11.9029 20.0621C11.4583 20.0258 11.2195 19.9592 11.0466 19.8711C10.6515 19.6698 10.3302 19.3485 10.1289 18.9534C10.0408 18.7805 9.97421 18.5417 9.93788 18.0971C9.9007 17.642 9.9 17.0549 9.9 16.2V13.8C9.9 12.9451 9.9007 12.358 9.93788 11.9029C9.97421 11.4583 10.0408 11.2195 10.1289 11.0466C10.3302 10.6515 10.6515 10.3302 11.0466 10.1289Z"></path></svg>'),
        ya = e => {
            const t = Kn();
            return (() => {
                const n = va.cloneNode(!0),
                    r = n.firstChild;
                return wt((o => {
                    const i = e.class,
                        s = e.fill || t.colors.icon.primary;
                    return i !== o._v$ && hn(n, "class", o._v$ = i), s !== o._v$2 && hn(r, "fill", o._v$2 = s), o
                }), {
                    _v$: void 0,
                    _v$2: void 0
                }), n
            })()
        },
        ba = dn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.7624 3.10001C7.95435 3.1 7.29349 3.09999 6.75642 3.14387C6.2005 3.18929 5.69842 3.28617 5.22954 3.52508C4.4957 3.89899 3.89908 4.49561 3.52517 5.22944C3.28626 5.69833 3.18938 6.20041 3.14396 6.75632C3.10008 7.2934 3.10009 7.95424 3.1001 8.76229V15.2377C3.10009 16.0458 3.10008 16.7066 3.14396 17.2437C3.18938 17.7996 3.28626 18.3017 3.52517 18.7706C3.89908 19.5044 4.4957 20.101 5.22954 20.4749C5.69842 20.7138 6.2005 20.8107 6.75642 20.8561C7.29349 20.9 7.95434 20.9 8.76239 20.9H12.0001C12.4972 20.9 12.9001 20.4971 12.9001 20C12.9001 19.503 12.4972 19.1 12.0001 19.1H8.8001C7.94517 19.1 7.3581 19.0993 6.90299 19.0621C6.45839 19.0258 6.21956 18.9592 6.04672 18.8711C5.65158 18.6698 5.33032 18.3485 5.12898 17.9534C5.04092 17.7805 4.97431 17.5417 4.93798 17.0971C4.9008 16.642 4.9001 16.0549 4.9001 15.2V8.80001C4.9001 7.94508 4.9008 7.35801 4.93798 6.9029C4.97431 6.4583 5.04092 6.21947 5.12898 6.04663C5.33032 5.65149 5.65158 5.33023 6.04672 5.12889C6.21956 5.04082 6.45839 4.97422 6.90299 4.93789C7.3581 4.90071 7.94517 4.90001 8.8001 4.90001H12.0001C12.4972 4.90001 12.9001 4.49706 12.9001 4.00001C12.9001 3.50295 12.4972 3.10001 12.0001 3.10001H8.7624Z"></path><path d="M17.6364 7.3636C17.2849 7.01212 16.7151 7.01212 16.3636 7.3636C16.0121 7.71507 16.0121 8.28492 16.3636 8.63639L18.8272 11.1H9.00001C8.50295 11.1 8.10001 11.5029 8.10001 12C8.10001 12.497 8.50295 12.9 9.00001 12.9H18.8272L16.3636 15.3636C16.0121 15.7151 16.0121 16.2849 16.3636 16.6364C16.7151 16.9879 17.2849 16.9879 17.6364 16.6364L21.6364 12.6364C21.9879 12.2849 21.9879 11.7151 21.6364 11.3636L17.6364 7.3636Z"></path></svg>'),
        Ca = e => {
            const t = Kn(),
                n = () => e.fill || t.colors.icon.primary;
            return (() => {
                const e = ba.cloneNode(!0),
                    t = e.firstChild,
                    r = t.nextSibling;
                return wt((e => {
                    const o = n(),
                        i = n();
                    return o !== e._v$ && hn(t, "fill", e._v$ = o), i !== e._v$2 && hn(r, "fill", e._v$2 = i), e
                }), {
                    _v$: void 0,
                    _v$2: void 0
                }), e
            })()
        },
        xa = {
            m: "8px",
            s: "4px",
            none: "0"
        },
        _a = {
            m: "16px",
            s: "8px",
            none: "0"
        },
        ka = qn.div `
    width: 256px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
    border-radius: ${e=>_a[e.theme.borderRadius]};

    background-color: ${e=>e.theme.colors.background.primary}
           
    color: ${e=>e.theme.colors.text.primary}
`,
        Sa = qn.ul `
    background-color: ${e=>e.theme.colors.background.primary};
    padding: 8px;
`,
        Ea = qn.button `
    display: flex;
    align-items: center;
    gap: 8px;
    height: 40px;
    padding-left: 8px;
    width: 100%;

    background-color: ${e=>e.theme.colors.background.primary};
    border: none;
    border-radius: ${e=>xa[e.theme.borderRadius]};
    cursor: pointer;

    transition: background-color, transform 0.1s ease-in-out;

    &:hover {
        background-color: ${e=>e.theme.colors.background.secondary};
    }

    &:active {
        transform: scale(0.96);
    }
`,
        Ra = dn("<li></li>"),
        Ta = e => qt(Di, {
            get translationKey() {
                return e.translationKey
            },
            fontSize: "15px",
            fontWeight: "590",
            get children() {
                return e.children
            }
        }),
        La = {
            m: "16px",
            s: "8px",
            none: "0"
        },
        Aa = qn.div `
    width: 256px;
    padding: 12px 16px;
    display: flex;
    gap: 9px;

    background-color: ${e=>e.theme.colors.background.primary};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
    border-radius: ${e=>La[e.theme.borderRadius]};
`,
        Ma = qn.div `
    width: 192px;

    > h3 {
        font-size: 15px;
    }
`,
        Oa = qn(Di)
    `
    margin-top: 4px;
    color: ${e=>e.theme.colors.text.secondary};
`, Na = e => {
        const t = Wo(e);
        return qt(Aa, Yt({
            get class() {
                return e.class
            },
            "data-tc-notification": "true"
        }, t, {
            get children() {
                return [qt(Ma, {
                    get children() {
                        return [qt(is, {
                            get translationKey() {
                                return e.header.translationKey
                            },
                            get translationValues() {
                                return e.header.translationValues
                            },
                            get children() {
                                return e.children
                            }
                        }), qt(Xt, {
                            get when() {
                                return e.text
                            },
                            get children() {
                                return qt(Oa, {
                                    get translationKey() {
                                        return e.text.translationKey
                                    },
                                    get translationValues() {
                                        return e.text.translationValues
                                    }
                                })
                            }
                        })]
                    }
                }), vt((() => e.icon))]
            }
        }))
    }, Pa = qn(Cs)
    `
    align-self: center;
`, $a = e => {
        const t = Et(ma),
            [n] = ji();
        return qt(Na, {
            get header() {
                return {
                    translationKey: "notifications.confirm.header",
                    translationValues: {
                        name: t.wallet && "name" in t.wallet ? t.wallet.name : n("common.yourWallet", {}, "Your wallet")
                    }
                }
            },
            get class() {
                return e.class
            },
            get icon() {
                return qt(Pa, {})
            },
            "data-tc-notification-confirm": "true",
            children: "Confirm operation in your wallet"
        })
    }, Ia = qn(ms)
    `
    margin-top: 2px;
`, Ua = e => qt(Na, {
        header: {
            translationKey: "notifications.transactionCanceled.header"
        },
        text: {
            translationKey: "notifications.transactionCanceled.text"
        },
        get icon() {
            return qt(Ia, {
                size: "xs"
            })
        },
        get class() {
            return e.class
        },
        "data-tc-notification-tx-cancelled": "true",
        children: "Transaction cancelled"
    }), Wa = qn(fs)
    `
    margin-top: 2px;
`, ja = e => qt(Na, {
        header: {
            translationKey: "notifications.transactionSent.header"
        },
        text: {
            translationKey: "notifications.transactionSent.text"
        },
        get icon() {
            return qt(Wa, {})
        },
        get class() {
            return e.class
        },
        "data-tc-notification-tx-sent": "true",
        children: "Transaction sent"
    }), Ba = Bn `
    transform: translateY(-8px);
    margin-bottom: 12px;
`, Da = {
        timeout: 4500
    }, [Ha, Va] = gt(null);

    function Ka(e) {
        const {
            timeout: t
        } = __spreadValues(__spreadValues({}, Da), e), [n, r] = gt([]), [o, i] = gt([]);
        return mt(function (e, t, n) {
            const r = Array.isArray(e);
            let o, i = n && n.defer;
            return n => {
                let s;
                if (r) {
                    s = Array(e.length);
                    for (let t = 0; t < e.length; t++) s[t] = e[t]()
                } else s = e();
                if (i) return void(i = !1);
                const a = Ct((() => t(s, o, n)));
                return o = s, a
            }
        }(Mr, (e => {
            var n;
            if (!e || !e.showNotification) return;
            if (Ha() === e) return;
            if ("confirm-transaction" === (null == (n = Ha()) ? void 0 : n.name) && "confirm-transaction" === e.name) return;
            Va(e), r((e => e.filter((e => "confirm-transaction" !== e.action))));
            const o = {
                action: e.name
            };
            r((e => [...e, o]));
            const s = setTimeout((() => {
                r((e => e.filter((e => e !== o)))), i((e => e.filter((e => e !== s))))
            }), t);
            i((e => [...e, s]))
        }))), _t((() => {
            o().forEach((e => clearTimeout(e)))
        })), n
    }
    const Fa = dn('<div data-tc-list-notifications="true"></div>'),
        qa = qn(jo)
    `
    background-color: ${e=>e.theme.colors.connectButton.background};
    color: ${e=>e.theme.colors.connectButton.foreground};
    box-shadow: ${e=>`0 4px 24px ${Jn(e.theme.colors.constant.black,.16)}`};
    padding: 8px 16px 8px 12px;

    display: flex;
    align-items: center;
    gap: 4px;
    height: 40px;
`, za = qn(qa)
    `
    padding: 12px 16px;
    min-width: 148px;
    justify-content: center;
    background-color: ${e=>e.theme.colors.background.primary};
`, Za = qn(jo)
    `
    min-width: 148px;
    height: 40px;

    background-color: ${e=>e.theme.colors.background.primary};
    color: ${e=>e.theme.colors.connectButton.foreground};
    box-shadow: ${e=>`0 4px 24px ${Jn(e.theme.colors.constant.black,.16)}`};

    display: flex;
    align-items: center;
    justify-content: center;
`, Ga = qn(Cs)
    `
    height: 18px;
    width: 18px;
`, Ya = qn.div `
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`, Qa = qn((t => {
        const n = Et(ma),
            [r, o] = gt(!1),
            i = () => __async(this, null, (function* () {
                const t = Ze(n.account.address, n.account.chain === e.CHAIN.TESTNET);
                yield Ni(t), o(!0), setTimeout((() => o(!1)), 1e3)
            }));
        return qt(ka, {
            ref(e) {
                const n = t.ref;
                "function" == typeof n ? n(e) : t.ref = e
            },
            get class() {
                return t.class
            },
            "data-tc-dropdown": "true",
            get children() {
                return qt(Sa, {
                    get children() {
                        return [(() => {
                            const e = Ra.cloneNode(!0);
                            return wn(e, qt(Ea, {
                                onClick: () => i(),
                                get children() {
                                    return [qt(ya, {}), qt(Xt, {
                                        get when() {
                                            return !r()
                                        },
                                        get children() {
                                            return qt(Ta, {
                                                translationKey: "button.dropdown.copy",
                                                children: "Copy address"
                                            })
                                        }
                                    }), qt(Xt, {
                                        get when() {
                                            return r()
                                        },
                                        get children() {
                                            return qt(Ta, {
                                                translationKey: "button.dropdown.copied",
                                                children: "Address copied!"
                                            })
                                        }
                                    })]
                                }
                            })), e
                        })(), (() => {
                            const e = Ra.cloneNode(!0);
                            return wn(e, qt(Ea, {
                                onClick: () => (n.disconnect(), void t.onClose()),
                                get children() {
                                    return [qt(Ca, {}), qt(Ta, {
                                        translationKey: "button.dropdown.disconnect",
                                        children: "Disconnect"
                                    })]
                                }
                            })), e
                        })()]
                    }
                })
            }
        })
    }))
    `
    box-sizing: border-box;
    overflow: hidden;
    margin-top: 12px;
`, Ja = qn((e => {
        const t = Ka();
        return (() => {
            const n = Fa.cloneNode(!0);
            return wn(n, qt(Fo, {
                onBeforeEnter: e => {
                    di(e, [{
                        opacity: 0,
                        transform: "translateY(0)"
                    }, {
                        opacity: 1,
                        transform: "translateY(-8px)"
                    }], {
                        duration: 200
                    })
                },
                onExit: (e, t) => {
                    di(e, [{
                        opacity: 1,
                        transform: "translateY(-8px)"
                    }, {
                        opacity: 0,
                        transform: "translateY(-30px)"
                    }], {
                        duration: 200
                    }).finished.then(t)
                },
                get children() {
                    return qt(Jt, {
                        get each() {
                            return t()
                        },
                        children: e => qt(en, {
                            get children() {
                                return [qt(tn, {
                                    get when() {
                                        return "transaction-sent" === e.action
                                    },
                                    get children() {
                                        return qt(ja, {
                                            class: Ba
                                        })
                                    }
                                }), qt(tn, {
                                    get when() {
                                        return "transaction-canceled" === e.action
                                    },
                                    get children() {
                                        return qt(Ua, {
                                            class: Ba
                                        })
                                    }
                                }), qt(tn, {
                                    get when() {
                                        return "confirm-transaction" === e.action
                                    },
                                    get children() {
                                        return qt($a, {
                                            class: Ba
                                        })
                                    }
                                })]
                            }
                        })
                    })
                }
            })), wt((() => fn(n, e.class))), n
        })()
    }))
    `
    > div:first-child {
        margin-top: 20px;
    }
`;

    function Xa(e) {
        return e.split("-")[0]
    }

    function el(e, t, n) {
        let {
            reference: r,
            floating: o
        } = e;
        const i = r.x + r.width / 2 - o.width / 2,
            s = r.y + r.height / 2 - o.height / 2,
            a = function (e) {
                return ["top", "bottom"].includes(Xa(e)) ? "x" : "y"
            }(t),
            l = "y" === a ? "height" : "width";
        const c = r[l] / 2 - o[l] / 2,
            u = "x" === a;
        let d;
        switch (Xa(t)) {
            case "top":
                d = {
                    x: i,
                    y: r.y - o.height
                };
                break;
            case "bottom":
                d = {
                    x: i,
                    y: r.y + r.height
                };
                break;
            case "right":
                d = {
                    x: r.x + r.width,
                    y: s
                };
                break;
            case "left":
                d = {
                    x: r.x - o.width,
                    y: s
                };
                break;
            default:
                d = {
                    x: r.x,
                    y: r.y
                }
        }
        switch (function (e) {
            return e.split("-")[1]
        }(t)) {
            case "start":
                d[a] -= c * (n && u ? -1 : 1);
                break;
            case "end":
                d[a] += c * (n && u ? -1 : 1)
        }
        return d
    }
    const tl = (e, t, n) => __async(this, null, (function* () {
        const {
            placement: r = "bottom",
            strategy: o = "absolute",
            middleware: i = [],
            platform: s
        } = n, a = i.filter(Boolean), l = yield null == s.isRTL ? void 0 : s.isRTL(t);
        if ("production" !== {}.NODE_ENV) {
            if (null == s && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), a.filter((e => {
                    let {
                        name: t
                    } = e;
                    return "autoPlacement" === t || "flip" === t
                })).length > 1) throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
            e && t || console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "))
        }
        let c = yield s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }), {
            x: u,
            y: d
        } = el(c, r, l), h = r, f = {}, g = 0;
        for (let n = 0; n < a.length; n++) {
            const {
                name: i,
                fn: p
            } = a[n], {
                x: w,
                y: m,
                data: v,
                reset: y
            } = yield p({
                x: u,
                y: d,
                initialPlacement: r,
                placement: h,
                strategy: o,
                middlewareData: f,
                rects: c,
                platform: s,
                elements: {
                    reference: e,
                    floating: t
                }
            });
            u = null != w ? w : u, d = null != m ? m : d, f = __spreadProps(__spreadValues({}, f), {
                [i]: __spreadValues(__spreadValues({}, f[i]), v)
            }), "production" !== {}.NODE_ENV && g > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), y && g <= 50 && (g++, "object" == typeof y && (y.placement && (h = y.placement), y.rects && (c = !0 === y.rects ? yield s.getElementRects({
                reference: e,
                floating: t,
                strategy: o
            }): y.rects), ({
                x: u,
                y: d
            } = el(c, h, l))), n = -1)
        }
        return {
            x: u,
            y: d,
            placement: h,
            strategy: o,
            middlewareData: f
        }
    }));

    function nl(e) {
        return __spreadProps(__spreadValues({}, e), {
            top: e.y,
            left: e.x,
            right: e.x + e.width,
            bottom: e.y + e.height
        })
    }

    function rl(e) {
        var t;
        return (null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
    }

    function ol(e) {
        return rl(e).getComputedStyle(e)
    }

    function il(e) {
        return ul(e) ? (e.nodeName || "").toLowerCase() : ""
    }
    let sl;

    function al() {
        if (sl) return sl;
        const e = navigator.userAgentData;
        return e && Array.isArray(e.brands) ? (sl = e.brands.map((e => e.brand + "/" + e.version)).join(" "), sl) : navigator.userAgent
    }

    function ll(e) {
        return e instanceof rl(e).HTMLElement
    }

    function cl(e) {
        return e instanceof rl(e).Element
    }

    function ul(e) {
        return e instanceof rl(e).Node
    }

    function dl(e) {
        if ("undefined" == typeof ShadowRoot) return !1;
        return e instanceof rl(e).ShadowRoot || e instanceof ShadowRoot
    }

    function hl(e) {
        const {
            overflow: t,
            overflowX: n,
            overflowY: r,
            display: o
        } = ol(e);
        return /auto|scroll|overlay|hidden/.test(t + r + n) && !["inline", "contents"].includes(o)
    }

    function fl(e) {
        return ["table", "td", "th"].includes(il(e))
    }

    function gl(e) {
        const t = /firefox/i.test(al()),
            n = ol(e),
            r = n.backdropFilter || n.WebkitBackdropFilter;
        return "none" !== n.transform || "none" !== n.perspective || !!r && "none" !== r || t && "filter" === n.willChange || t && !!n.filter && "none" !== n.filter || ["transform", "perspective"].some((e => n.willChange.includes(e))) || ["paint", "layout", "strict", "content"].some((e => {
            const t = n.contain;
            return null != t && t.includes(e)
        }))
    }

    function pl() {
        return !/^((?!chrome|android).)*safari/i.test(al())
    }

    function wl(e) {
        return ["html", "body", "#document"].includes(il(e))
    }
    const ml = Math.min,
        vl = Math.max,
        yl = Math.round,
        bl = {
            x: 1,
            y: 1
        };

    function Cl(e) {
        const t = !cl(e) && e.contextElement ? e.contextElement : cl(e) ? e : null;
        if (!t) return bl;
        const n = t.getBoundingClientRect(),
            r = ol(t);
        if ("border-box" !== r.boxSizing) return ll(t) ? {
            x: t.offsetWidth > 0 && yl(n.width) / t.offsetWidth || 1,
            y: t.offsetHeight > 0 && yl(n.height) / t.offsetHeight || 1
        } : bl;
        let o = n.width / parseFloat(r.width),
            i = n.height / parseFloat(r.height);
        return o && Number.isFinite(o) || (o = 1), i && Number.isFinite(i) || (i = 1), {
            x: o,
            y: i
        }
    }

    function xl(e, t, n, r) {
        var o, i, s, a;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const l = e.getBoundingClientRect();
        let c = bl;
        t && (r ? cl(r) && (c = Cl(r)) : c = Cl(e));
        const u = cl(e) ? rl(e) : window,
            d = !pl() && n,
            h = (l.left + (d && null != (o = null == (i = u.visualViewport) ? void 0 : i.offsetLeft) ? o : 0)) / c.x,
            f = (l.top + (d && null != (s = null == (a = u.visualViewport) ? void 0 : a.offsetTop) ? s : 0)) / c.y,
            g = l.width / c.x,
            p = l.height / c.y;
        return {
            width: g,
            height: p,
            top: f,
            right: h + g,
            bottom: f + p,
            left: h,
            x: h,
            y: f
        }
    }

    function _l(e) {
        return ((ul(e) ? e.ownerDocument : e.document) || window.document).documentElement
    }

    function kl(e) {
        return cl(e) ? {
            scrollLeft: e.scrollLeft,
            scrollTop: e.scrollTop
        } : {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        }
    }

    function Sl(e) {
        return xl(_l(e)).left + kl(e).scrollLeft
    }

    function El(e, t, n) {
        const r = ll(t),
            o = _l(t),
            i = xl(e, !0, "fixed" === n, t);
        let s = {
            scrollLeft: 0,
            scrollTop: 0
        };
        const a = {
            x: 0,
            y: 0
        };
        if (r || !r && "fixed" !== n)
            if (("body" !== il(t) || hl(o)) && (s = kl(t)), ll(t)) {
                const e = xl(t, !0);
                a.x = e.x + t.clientLeft, a.y = e.y + t.clientTop
            } else o && (a.x = Sl(o));
        return {
            x: i.left + s.scrollLeft - a.x,
            y: i.top + s.scrollTop - a.y,
            width: i.width,
            height: i.height
        }
    }

    function Rl(e) {
        if ("html" === il(e)) return e;
        const t = e.assignedSlot || e.parentNode || (dl(e) ? e.host : null) || _l(e);
        return dl(t) ? t.host : t
    }

    function Tl(e) {
        return ll(e) && "fixed" !== ol(e).position ? e.offsetParent : null
    }

    function Ll(e) {
        const t = rl(e);
        let n = Tl(e);
        for (; n && fl(n) && "static" === ol(n).position;) n = Tl(n);
        return n && ("html" === il(n) || "body" === il(n) && "static" === ol(n).position && !gl(n)) ? t : n || function (e) {
            let t = Rl(e);
            for (; ll(t) && !wl(t);) {
                if (gl(t)) return t;
                t = Rl(t)
            }
            return null
        }(e) || t
    }

    function Al(e) {
        const t = Rl(e);
        return wl(t) ? e.ownerDocument.body : ll(t) && hl(t) ? t : Al(t)
    }

    function Ml(e, t) {
        var n;
        void 0 === t && (t = []);
        const r = Al(e),
            o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
            i = rl(r);
        return o ? t.concat(i, i.visualViewport || [], hl(r) ? r : []) : t.concat(r, Ml(r))
    }

    function Ol(e, t, n) {
        return "viewport" === t ? nl(function (e, t) {
            const n = rl(e),
                r = _l(e),
                o = n.visualViewport;
            let i = r.clientWidth,
                s = r.clientHeight,
                a = 0,
                l = 0;
            if (o) {
                i = o.width, s = o.height;
                const e = pl();
                (e || !e && "fixed" === t) && (a = o.offsetLeft, l = o.offsetTop)
            }
            return {
                width: i,
                height: s,
                x: a,
                y: l
            }
        }(e, n)) : cl(t) ? function (e, t) {
            const n = xl(e, !0, "fixed" === t),
                r = n.top + e.clientTop,
                o = n.left + e.clientLeft,
                i = ll(e) ? Cl(e) : {
                    x: 1,
                    y: 1
                },
                s = e.clientWidth * i.x,
                a = e.clientHeight * i.y,
                l = o * i.x,
                c = r * i.y;
            return {
                top: c,
                left: l,
                right: l + s,
                bottom: c + a,
                x: l,
                y: c,
                width: s,
                height: a
            }
        }(t, n) : nl(function (e) {
            var t;
            const n = _l(e),
                r = kl(e),
                o = null == (t = e.ownerDocument) ? void 0 : t.body,
                i = vl(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
                s = vl(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
            let a = -r.scrollLeft + Sl(e);
            const l = -r.scrollTop;
            return "rtl" === ol(o || n).direction && (a += vl(n.clientWidth, o ? o.clientWidth : 0) - i), {
                width: i,
                height: s,
                x: a,
                y: l
            }
        }(_l(e)))
    }
    const Nl = {
        getClippingRect: function (e) {
            let {
                element: t,
                boundary: n,
                rootBoundary: r,
                strategy: o
            } = e;
            const i = [..."clippingAncestors" === n ? function (e, t) {
                    const n = t.get(e);
                    if (n) return n;
                    let r = Ml(e).filter((e => cl(e) && "body" !== il(e))),
                        o = null;
                    const i = "fixed" === ol(e).position;
                    let s = i ? Rl(e) : e;
                    for (; cl(s) && !wl(s);) {
                        const e = ol(s),
                            t = gl(s);
                        (i ? t || o : t || "static" !== e.position || !o || !["absolute", "fixed"].includes(o.position)) ? o = e: r = r.filter((e => e !== s)), s = Rl(s)
                    }
                    return t.set(e, r), r
                }(t, this._c) : [].concat(n), r],
                s = i[0],
                a = i.reduce(((e, n) => {
                    const r = Ol(t, n, o);
                    return e.top = vl(r.top, e.top), e.right = ml(r.right, e.right), e.bottom = ml(r.bottom, e.bottom), e.left = vl(r.left, e.left), e
                }), Ol(t, s, o));
            return {
                width: a.right - a.left,
                height: a.bottom - a.top,
                x: a.left,
                y: a.top
            }
        },
        convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let {
                rect: t,
                offsetParent: n,
                strategy: r
            } = e;
            const o = ll(n),
                i = _l(n);
            if (n === i) return t;
            let s = {
                    scrollLeft: 0,
                    scrollTop: 0
                },
                a = {
                    x: 1,
                    y: 1
                };
            const l = {
                x: 0,
                y: 0
            };
            if ((o || !o && "fixed" !== r) && (("body" !== il(n) || hl(i)) && (s = kl(n)), ll(n))) {
                const e = xl(n);
                a = Cl(n), l.x = e.x + n.clientLeft, l.y = e.y + n.clientTop
            }
            return {
                width: t.width * a.x,
                height: t.height * a.y,
                x: t.x * a.x - s.scrollLeft * a.x + l.x,
                y: t.y * a.y - s.scrollTop * a.y + l.y
            }
        },
        isElement: cl,
        getDimensions: function (e) {
            if (ll(e)) return {
                width: e.offsetWidth,
                height: e.offsetHeight
            };
            const t = xl(e);
            return {
                width: t.width,
                height: t.height
            }
        },
        getOffsetParent: Ll,
        getDocumentElement: _l,
        getScale: Cl,
        getElementRects(e) {
            return __async(this, null, (function* () {
                let {
                    reference: t,
                    floating: n,
                    strategy: r
                } = e;
                const o = this.getOffsetParent || Ll,
                    i = this.getDimensions;
                return {
                    reference: El(t, yield o(n), r),
                    floating: __spreadValues({
                        x: 0,
                        y: 0
                    }, yield i(n))
                }
            }))
        },
        getClientRects: e => Array.from(e.getClientRects()),
        isRTL: e => "rtl" === ol(e).direction
    };

    function Pl(e, t, n, r) {
        void 0 === r && (r = {});
        const {
            ancestorScroll: o = !0,
            ancestorResize: i = !0,
            elementResize: s = !0,
            animationFrame: a = !1
        } = r, l = o && !a, c = l || i ? [...cl(e) ? Ml(e) : e.contextElement ? Ml(e.contextElement) : [], ...Ml(t)] : [];
        c.forEach((e => {
            l && e.addEventListener("scroll", n, {
                passive: !0
            }), i && e.addEventListener("resize", n)
        }));
        let u, d = null;
        if (s) {
            let r = !0;
            d = new ResizeObserver((() => {
                r || n(), r = !1
            })), cl(e) && !a && d.observe(e), cl(e) || !e.contextElement || a || d.observe(e.contextElement), d.observe(t)
        }
        let h = a ? xl(e) : null;
        return a && function t() {
            const r = xl(e);
            !h || r.x === h.x && r.y === h.y && r.width === h.width && r.height === h.height || n();
            h = r, u = requestAnimationFrame(t)
        }(), n(), () => {
            var e;
            c.forEach((e => {
                l && e.removeEventListener("scroll", n), i && e.removeEventListener("resize", n)
            })), null == (e = d) || e.disconnect(), d = null, a && cancelAnimationFrame(u)
        }
    }
    const $l = (e, t, n) => {
        const r = new Map,
            o = __spreadValues({
                platform: Nl
            }, n),
            i = __spreadProps(__spreadValues({}, o.platform), {
                _c: r
            });
        return tl(e, t, __spreadProps(__spreadValues({}, o), {
            platform: i
        }))
    };
    const Il = dn('<tc-root data-tc-dropdown-container="true"></tc-root>'),
        Ul = () => {
            const t = Kn(),
                n = Et(Ir),
                r = Et(ma),
                [o, i] = gt(!1),
                [s, a] = gt(n.account),
                [l, c] = gt(!n.account);
            let u;
            const [d, h] = gt(), [f, g] = gt(), p = function (e, t, n) {
                let r = () => {
                        var e;
                        return null != (e = null == n ? void 0 : n.placement) ? e : "bottom"
                    },
                    o = () => {
                        var e;
                        return null != (e = null == n ? void 0 : n.strategy) ? e : "absolute"
                    },
                    [i, s] = gt({
                        x: null,
                        y: null,
                        placement: r(),
                        strategy: o(),
                        middlewareData: {}
                    }),
                    [a, l] = gt();
                mt((() => {
                    let e = a();
                    if (e) throw e.value
                }));
                let c = vt((() => (e(), t(), {})));

                function u() {
                    let i = e(),
                        a = t();
                    if (i && a) {
                        let e = c();
                        $l(i, a, {
                            middleware: null == n ? void 0 : n.middleware,
                            placement: r(),
                            strategy: o()
                        }).then((t => {
                            e === c() && s(t)
                        }), (e => {
                            l(e)
                        }))
                    }
                }
                return mt((() => {
                    let i = e(),
                        s = t();
                    if (null == n || n.middleware, r(), o(), i && s)
                        if (null != n && n.whileElementsMounted) {
                            let e = n.whileElementsMounted(i, s, u);
                            e && _t(e)
                        } else u()
                })), {
                    get x() {
                        return i().x
                    },
                    get y() {
                        return i().y
                    },
                    get placement() {
                        return i().placement
                    },
                    get strategy() {
                        return i().strategy
                    },
                    get middlewareData() {
                        return i().middlewareData
                    },
                    update: u
                }
            }(f, d, {
                whileElementsMounted: Pl,
                placement: "bottom-end"
            });
            r.connectionRestored.then((() => c(!1)));
            const w = n.onStatusChange((e => {
                    if (!e) return i(!1), a(null), void c(!1);
                    a(e.account), c(!1)
                })),
                m = e => {
                    if (!s() || !o()) return;
                    const t = f().contains(e.target),
                        n = u.contains(e.target);
                    t || n || i(!1)
                };
            return xt((() => {
                document.body.addEventListener("click", m)
            })), _t((() => {
                document.body.removeEventListener("click", m), w()
            })), qt(Tn, {
                component: Zn,
                get children() {
                    return [qt(Xt, {
                        get when() {
                            return l()
                        },
                        get children() {
                            return qt(Za, {
                                disabled: !0,
                                "data-tc-connect-button-loading": "true",
                                get children() {
                                    return qt(Ga, {})
                                }
                            })
                        }
                    }), qt(Xt, {
                        get when() {
                            return !l()
                        },
                        get children() {
                            return [qt(Xt, {
                                get when() {
                                    return !s()
                                },
                                get children() {
                                    return qt(qa, {
                                        onClick: () => r.openModal(),
                                        "data-tc-connect-button": "true",
                                        scale: "s",
                                        get children() {
                                            return [qt(cs, {
                                                get fill() {
                                                    return t.colors.connectButton.foreground
                                                }
                                            }), qt(Di, {
                                                translationKey: "button.connectWallet",
                                                fontSize: "15px",
                                                lineHeight: "18px",
                                                fontWeight: "590",
                                                get color() {
                                                    return t.colors.connectButton.foreground
                                                },
                                                children: "Connect wallet"
                                            })]
                                        }
                                    })
                                }
                            }), qt(Xt, {
                                get when() {
                                    return s()
                                },
                                get children() {
                                    return qt(Ya, {
                                        get children() {
                                            return [qt(za, {
                                                onClick: () => i((e => !e)),
                                                ref: g,
                                                "data-tc-dropdown-button": "true",
                                                scale: "s",
                                                get children() {
                                                    return [qt(Di, {
                                                        fontSize: "15px",
                                                        fontWeight: "590",
                                                        lineHeight: "18px",
                                                        get children() {
                                                            return (() => {
                                                                const t = s();
                                                                if (t) {
                                                                    const n = Ze(t.address, t.chain === e.CHAIN.TESTNET);
                                                                    return n.slice(0, 4) + "…" + n.slice(-4)
                                                                }
                                                                return ""
                                                            })()
                                                        }
                                                    }), qt(Yo, {
                                                        direction: "bottom"
                                                    })]
                                                }
                                            }), qt(Rn, {
                                                get children() {
                                                    const e = Ct((() => document.importNode(Il, !0)));
                                                    return pn(h, e), e.style.setProperty("z-index", "999"), e._$owner = st, wn(e, qt(Vo, {
                                                        onBeforeEnter: e => {
                                                            di(e, [{
                                                                opacity: 0,
                                                                transform: "translateY(-8px)"
                                                            }, {
                                                                opacity: 1,
                                                                transform: "translateY(0)"
                                                            }], {
                                                                duration: 150
                                                            })
                                                        },
                                                        onExit: (e, t) => {
                                                            di(e, [{
                                                                opacity: 1,
                                                                transform: "translateY(0)"
                                                            }, {
                                                                opacity: 0,
                                                                transform: "translateY(-8px)"
                                                            }], {
                                                                duration: 150
                                                            }).finished.then(t)
                                                        },
                                                        get children() {
                                                            return qt(Xt, {
                                                                get when() {
                                                                    return o()
                                                                },
                                                                get children() {
                                                                    return qt(Qa, {
                                                                        get hidden() {
                                                                            return !o()
                                                                        },
                                                                        onClose: () => i(!1),
                                                                        ref(e) {
                                                                            "function" == typeof u ? u(e) : u = e
                                                                        }
                                                                    })
                                                                }
                                                            })
                                                        }
                                                    }), null), wn(e, qt(Ja, {}), null), wt((t => {
                                                        var n, r;
                                                        const o = p.strategy,
                                                            i = `${null!=(n=p.y)?n:0}px`,
                                                            s = `${null!=(r=p.x)?r:0}px`;
                                                        return o !== t._v$ && e.style.setProperty("position", t._v$ = o), i !== t._v$2 && e.style.setProperty("top", t._v$2 = i), s !== t._v$3 && e.style.setProperty("left", t._v$3 = s), t
                                                    }), {
                                                        _v$: void 0,
                                                        _v$2: void 0,
                                                        _v$3: void 0
                                                    }), e
                                                }
                                            })]
                                        }
                                    })
                                }
                            })]
                        }
                    })]
                }
            })
        },
        Wl = qn(wi)
    `
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 18px;
    padding-bottom: 0;

    ${Oo("mobile")} {
        padding-left: 0;
        padding-right: 0;
    }
`, jl = qn(ts)
    `
    margin-top: 12px;

    ${Oo("mobile")} {
        padding: 0 10px;
    }
`, Bl = qn.div `
    margin: 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;

    ${Oo("mobile")} {
        height: 160px;
        align-items: center;
    }
`;
    qn(Di)
    `
    min-width: 84px;
    text-align: center;
    font-weight: 590;
`, qn((e => {
        const t = "tabBar" + Math.floor(1e4 * Math.random());
        return qt(yi, {
            get class() {
                return e.class
            },
            "data-tc-tab-bar": "true",
            get children() {
                return [qt(bi, {
                    get right() {
                        return 1 === e.selectedTabIndex
                    }
                }), qt(xi, {
                    get isActive() {
                        return 0 === e.selectedTabIndex
                    },
                    get children() {
                        return [qt(Ci, {
                            type: "radio",
                            name: t,
                            get checked() {
                                return 0 === e.selectedTabIndex
                            },
                            onInput: () => {
                                var t;
                                return null == (t = e.onSelectedTabIndexChange) ? void 0 : t.call(e, 0)
                            }
                        }), vt((() => e.tab1))]
                    }
                }), qt(xi, {
                    get isActive() {
                        return 1 === e.selectedTabIndex
                    },
                    get children() {
                        return [qt(Ci, {
                            type: "radio",
                            get checked() {
                                return 1 === e.selectedTabIndex
                            },
                            name: t,
                            onInput: () => {
                                var t;
                                return null == (t = e.onSelectedTabIndexChange) ? void 0 : t.call(e, 1)
                            }
                        }), vt((() => e.tab2))]
                    }
                })]
            }
        })
    }))
    `
    margin: 0 auto 22px;
`;
    const [Dl, Hl] = Qr({
        buttonRootId: null,
        language: "en",
        returnStrategy: "back",
        twaReturnUrl: void 0,
        walletsListConfiguration: {},
        enableAndroidBackHandler: !0
    });

    function Vl(e) {
        return "jsBridgeKey" in e ? __spreadProps(__spreadValues({}, e), {
            injected: Fe.isWalletInjected(e.jsBridgeKey),
            embedded: Fe.isInsideWalletBrowser(e.jsBridgeKey)
        }) : e
    }

    function Kl(e, t) {
        var n, r, o, i;
        return t ? ((null == (n = t.includeWallets) ? void 0 : n.length) && (r = "name", o = e, i = t.includeWallets.map(Vl), e = o.map((e => {
            const t = i.find((t => t[r] === e[r]));
            return i = i.filter((t => t[r] !== e[r])), void 0 === t ? e : t
        })).concat(i)), e) : e
    }

    function Fl(e) {
        return e.platforms.some((e => ["macos", "linux", "windows"].includes(e)))
    }

    function ql(e) {
        return e.platforms.some((e => ["ios", "android"].includes(e)))
    }

    function zl(e) {
        return e.platforms.some((e => ["chrome", "firefox", "safari"].includes(e)))
    }

    function Zl(e, t) {
        return !!t && (e.name.toLowerCase() === t.toLowerCase() || e.appName.toLowerCase() === t.toLowerCase())
    }
    const Gl = qn.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`,
        Yl = qn(ts)
    `
    margin-bottom: 18px;
`;
    qn.div `
    height: 1px;
    margin: 0 -24px;
    width: calc(100% + 48px);
    opacity: 0.12;
    background: ${e=>e.isShown?e.theme.colors.icon.secondary:"transparent"};
    transition: background 0.15s ease-in-out;

    ${Oo("mobile")} {
        width: 100%;
    }
`;
    const Ql = qn.ul `
    display: grid;
    grid-template-columns: repeat(auto-fit, 92px);
    grid-template-rows: auto;
    align-content: flex-start;
    justify-content: center;
    row-gap: 8px;
    width: 100%;
    padding: 0 0 16px;
    align-self: flex-start;
    max-width: 400px;
    margin: 0 auto;

    > li {
        display: block;
        height: fit-content;
    }

    ${Oo("mobile")} {
        grid-template-columns: repeat(auto-fit, 82px);
    }
`;
    qn(jo)
    `
    display: block;
    margin: 0 auto 1px;
    font-size: 15px;
`;
    const Jl = qn(ei)
    `
    position: absolute;
    top: 16px;
    left: 16px;
`, Xl = qn(sa)
    `
    height: 100%;
`, ec = dn("<li></li>"), tc = e => qt(Gl, {
        "data-tc-wallets-modal-list": "true",
        get children() {
            return [qt(Jl, {
                icon: "arrow",
                onClick: () => e.onBack()
            }), qt(Yl, {
                translationKey: "walletModal.wallets",
                children: "Wallets"
            }), qt(ga, {
                get maxHeight() {
                    return da() ? void 0 : 510
                },
                get children() {
                    return qt(Ql, {
                        get children() {
                            return qt(Jt, {
                                get each() {
                                    return da() ? e.walletsList.filter(ql) : e.walletsList
                                },
                                children: t => (() => {
                                    const n = ec.cloneNode(!0);
                                    return wn(n, qt(Xl, {
                                        wallet: t,
                                        onClick: () => e.onSelect(t)
                                    })), n
                                })()
                            })
                        }
                    })
                }
            })]
        }
    }), nc = {
        m: "16px",
        s: "12px",
        none: "0"
    }, rc = {
        m: "6px",
        s: "6px",
        none: "0"
    }, oc = qn.div `
    display: flex;
    flex-direction: column;
`, ic = qn.div `
    flex: 1;
    margin-top: ${e=>e.qr?"0":"18px"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 232px;
`, sc = qn($i)
    `
    margin-bottom: 24px;
`, ac = qn(ts)
    `
    max-width: 288px;
    margin: 0 auto 2px;
`, lc = qn(rs)
    `
    max-width: 288px;
    text-align: center;
    margin: 0 auto 20px;
`, cc = qn(ei)
    `
    position: absolute;
    top: 16px;
    left: 16px;
`, uc = qn.div `
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-bottom: 16px;
`, dc = qn(uc)
    `
    padding-bottom: 0;
`, hc = qn(jo)
    `
    margin-bottom: 24px;
`, fc = qn(Cs)
    `
    margin-bottom: 18px;
    margin-top: 2px;
`, gc = qn(ms)
    `
    margin-bottom: 16px;
`, pc = qn(rs)
    `
    color: ${e=>e.theme.colors.text.secondary};
    text-align: center;
    margin-bottom: 20px;
`, wc = qn(jo)
    `
    margin-top: -8px;
    margin-bottom: 24px;
    width: 100%;
    padding: 12px 12px 12px 20px;
    border-radius: ${e=>nc[e.theme.borderRadius]};
    font-size: 16px;
    line-height: 20px;
`, mc = qn(vo)
    `
    width: 32px;
    height: 32px;
    border-radius: ${e=>rc[e.theme.borderRadius]};
`, vc = e => {
        const [t] = ji();
        return vt((() => {
            var n;
            return t(e.translationKey, e.translationValues, null == (n = e.children) ? void 0 : n.toString())
        }))
    };

    function yc(e, t) {
        let n;
        n = "string" == typeof t ? t : _o() ? t.twaReturnUrl || t.returnStrategy : "none";
        const r = function (e, t, n) {
            const r = new URL(e);
            return r.searchParams.append(t, n), r.toString()
        }(e, "ret", n);
        if (!te(e)) return r;
        const o = r.slice(r.lastIndexOf("&") + 1);
        return r.slice(0, r.lastIndexOf("&")) + "-" + ne(o)
    }

    function bc(e, t) {
        t = __spreadValues({}, t);
        const n = function (e) {
                const t = new URL(e);
                t.searchParams.has("attach") && (t.searchParams.delete("attach"), t.pathname += "/start");
                return t.toString()
            }(e),
            r = new URL(n);
        if (r.searchParams.has("startapp") || r.searchParams.append("startapp", "tonconnect"), ko()) {
            t.returnStrategy = "back";
            ar(yc(r.toString(), t.returnStrategy))
        } else if (_o())
            if (xo("ios", "android", "macos", "tdesktop", "web")) {
                t.returnStrategy = "back";
                Eo(yc(r.toString(), t.returnStrategy))
            } else xo("weba") ? Eo(yc(r.toString(), t)) : ar(yc(r.toString(), t));
        else if (gr("ios")) {
            "back" === t.returnStrategy && (pr("safari") ? t.returnStrategy = "back" : pr("chrome") ? t.returnStrategy = "googlechrome://" : pr("firefox") ? t.returnStrategy = "firefox://" : pr("opera") ? t.returnStrategy = "opera-http://" : t.returnStrategy = location.href);
            const e = pr("chrome"),
                n = pr("firefox");
            if ((e || n) && !t.forceRedirect) {
                const e = yc(r.toString(), t.returnStrategy);
                lr(xc(e), (() => ar(e)))
            } else {
                ar(yc(r.toString(), t.returnStrategy))
            }
        } else if (gr("android")) {
            t.returnStrategy = "back";
            const e = pr("chrome"),
                n = pr("firefox");
            if ((e || n) && !t.forceRedirect) {
                const e = yc(r.toString(), t.returnStrategy);
                lr(xc(e), (() => ar(e)))
            } else {
                ar(yc(r.toString(), t.returnStrategy))
            }
        } else if (gr("ipad")) {
            "back" === t.returnStrategy && (pr("safari") ? t.returnStrategy = "back" : pr("chrome") ? t.returnStrategy = "googlechrome://" : pr("firefox") ? t.returnStrategy = "firefox://" : pr("opera") ? t.returnStrategy = "opera-http://" : t.returnStrategy = location.href);
            const e = pr("chrome"),
                n = pr("firefox"),
                o = (e || n) && !t.forceRedirect,
                i = yc(r.toString(), t.returnStrategy);
            if (o) {
                lr(xc(i), (() => ar(i)))
            } else ar(i)
        } else if (gr("macos", "windows", "linux")) {
            t.returnStrategy = "back", t.twaReturnUrl = void 0;
            const e = yc(r.toString(), t.returnStrategy);
            if (t.forceRedirect) ar(e);
            else {
                lr(xc(e), (() => ar(e)))
            }
        } else ar(yc(r.toString(), t))
    }

    function Cc(e, t, n, r) {
        if (n = __spreadValues({}, n), ko())
            if (gr("ios", "android")) "back" === n.returnStrategy && (n.returnStrategy = "tg://resolve"), r("universal-link"), sr(yc(e, n.returnStrategy), "_self");
            else {
                r("universal-link");
                ar(yc(e, n.returnStrategy))
            }
        else if (_o())
            if (xo("ios", "android")) {
                "back" === n.returnStrategy && (n.returnStrategy = "tg://resolve"), r("universal-link");
                const t = yc(e, n.returnStrategy);
                Eo(t, (() => {
                    r("universal-link"), ar(t)
                }))
            } else if (xo("macos", "tdesktop")) {
            "back" === n.returnStrategy && (n.returnStrategy = "tg://resolve");
            const o = yc(e, n.returnStrategy);
            !!t && !n.forceRedirect ? (r("custom-deeplink"), lr(wr(o, t), (() => {
                r("universal-link"), ar(o)
            }))) : (r("universal-link"), ar(o))
        } else if (xo("weba")) {
            "back" === n.returnStrategy && (pr("safari") ? n.returnStrategy = location.href : pr("chrome") ? n.returnStrategy = "googlechrome://" : pr("firefox") ? n.returnStrategy = "firefox://" : pr("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = location.href);
            const o = yc(e, n.returnStrategy);
            !!t && !n.forceRedirect ? (r("custom-deeplink"), lr(wr(o, t), (() => {
                r("universal-link"), ar(o)
            }))) : (r("universal-link"), ar(o))
        } else if (xo("web")) {
            "back" === n.returnStrategy && (pr("safari") ? n.returnStrategy = location.href : pr("chrome") ? n.returnStrategy = "googlechrome://" : pr("firefox") ? n.returnStrategy = "firefox://" : pr("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = location.href);
            const o = yc(e, n.returnStrategy);
            !!t && !n.forceRedirect ? (r("custom-deeplink"), lr(wr(o, t), (() => {
                r("universal-link"), ar(o)
            }))) : (r("universal-link"), ar(o))
        } else {
            r("universal-link");
            ar(yc(e, n.returnStrategy))
        } else if (gr("ios")) "back" === n.returnStrategy && (pr("safari") ? n.returnStrategy = "none" : pr("chrome") ? n.returnStrategy = "googlechrome://" : pr("firefox") ? n.returnStrategy = "firefox://" : pr("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = location.href), pr("chrome") ? (r("universal-link"), sr(yc(e, n.returnStrategy), "_self")) : (r("universal-link"), ar(yc(e, n.returnStrategy)));
        else if (gr("android")) "back" === n.returnStrategy && (pr("chrome") ? n.returnStrategy = "googlechrome://" : pr("firefox") ? n.returnStrategy = "firefox://" : pr("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = location.href), r("universal-link"), ar(yc(e, n.returnStrategy));
        else if (gr("ipad")) "back" === n.returnStrategy && (pr("safari") ? n.returnStrategy = "none" : pr("chrome") ? n.returnStrategy = "googlechrome://" : pr("firefox") ? n.returnStrategy = "firefox://" : pr("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = location.href), pr("chrome") ? (r("universal-link"), sr(yc(e, n.returnStrategy), "_self")) : (r("universal-link"), ar(yc(e, n.returnStrategy)));
        else if (gr("macos", "windows", "linux")) {
            "back" === n.returnStrategy && (pr("safari") ? n.returnStrategy = "none" : pr("chrome") ? n.returnStrategy = "googlechrome://" : pr("firefox") ? n.returnStrategy = "firefox://" : pr("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = "none");
            const o = yc(e, n.returnStrategy);
            !!t && !n.forceRedirect ? (r("custom-deeplink"), lr(wr(o, t), (() => {
                r("universal-link"), ar(o)
            }))) : (r("universal-link"), ar(o))
        } else r("universal-link"), ar(yc(e, n.returnStrategy))
    }

    function xc(e) {
        const t = new URL(e),
            [, n, r] = t.pathname.split("/");
        return `tg://resolve?domain=${n}&appname=${r}&startapp=${t.searchParams.get("startapp")}`
    }
    const _c = e => {
            const [t, n] = gt("mobile"), [r, o] = gt(!1), [i, s] = gt(), [a, l] = gt(!0), c = Et(Ir);
            _t(c.onStatusChange((() => {}), (() => {
                e.wallet.appName !== ra && o(!0)
            })));
            const u = () => {
                try {
                    const t = c.connect({
                        universalLink: e.wallet.universalLink,
                        bridgeUrl: e.wallet.bridgeUrl
                    }, e.additionalRequest);
                    s(t)
                } catch (Ju) {}
            };
            mt((() => {
                "extension" !== Ct(t) && (ql(e.wallet) || Fl(e.wallet)) && u()
            }));
            const d = () => {
                    o(!1), "extension" === t() && u(), n("mobile"), Ar(__spreadProps(__spreadValues({}, e.wallet), {
                        openMethod: "qrcode"
                    }))
                },
                h = () => {
                    if (o(!1), "extension" === t() && u(), n("desktop"), te(i())) f();
                    else {
                        const t = !a();
                        l(!1), Cc(i(), e.wallet.deepLink, {
                            returnStrategy: Dl.returnStrategy,
                            forceRedirect: t
                        }, (t => {
                            Ar(__spreadProps(__spreadValues({}, e.wallet), {
                                openMethod: t
                            }))
                        }))
                    }
                },
                f = () => {
                    const t = !a();
                    l(!1), Ar(__spreadProps(__spreadValues({}, e.wallet), {
                        openMethod: "universal-link"
                    })), bc(i(), {
                        returnStrategy: Dl.returnStrategy,
                        twaReturnUrl: Dl.twaReturnUrl,
                        forceRedirect: t
                    })
                },
                g = () => {
                    o(!1), n("extension"), be(e.wallet) && (Ar(e.wallet), c.connect({
                        jsBridgeKey: e.wallet.jsBridgeKey
                    }, e.additionalRequest))
                };
            return ql(e.wallet) ? d() : zl(e.wallet) ? g() : h(), qt(oc, {
                "data-tc-wallets-modal-connection-desktop": "true",
                get children() {
                    return [qt(Xt, {
                        get when() {
                            return !e.backDisabled
                        },
                        get children() {
                            return qt(cc, {
                                icon: "arrow",
                                onClick: () => e.onBackClick()
                            })
                        }
                    }), qt(ac, {
                        get children() {
                            return e.wallet.name
                        }
                    }), qt(Xt, {
                        get when() {
                            return "mobile" === t()
                        },
                        get children() {
                            return qt(lc, {
                                translationKey: "walletModal.desktopConnectionModal.scanQR",
                                get translationValues() {
                                    return {
                                        name: e.wallet.name
                                    }
                                },
                                get children() {
                                    return ["Scan the QR code below with your phone’s or ", vt((() => e.wallet.name)), "’s camera"]
                                }
                            })
                        }
                    }), qt(ic, {
                        get qr() {
                            return "mobile" === t()
                        },
                        get children() {
                            return qt(en, {
                                get children() {
                                    return [qt(tn, {
                                        get when() {
                                            return "mobile" === t()
                                        },
                                        get children() {
                                            return qt(sc, {
                                                disableCopy: !1,
                                                get sourceUrl() {
                                                    return yc(i(), "none")
                                                },
                                                get imageUrl() {
                                                    return e.wallet.imageUrl
                                                }
                                            })
                                        }
                                    }), qt(tn, {
                                        get when() {
                                            return r()
                                        },
                                        get children() {
                                            return [qt(gc, {
                                                size: "s"
                                            }), qt(pc, {
                                                translationKey: "walletModal.desktopConnectionModal.connectionDeclined",
                                                children: "Connection declined"
                                            }), qt(uc, {
                                                get children() {
                                                    return qt(jo, {
                                                        get leftIcon() {
                                                            return qt(Ns, {})
                                                        },
                                                        get onClick() {
                                                            return "extension" === t() ? g : h
                                                        },
                                                        get children() {
                                                            return qt(vc, {
                                                                translationKey: "common.retry",
                                                                children: "Retry"
                                                            })
                                                        }
                                                    })
                                                }
                                            })]
                                        }
                                    }), qt(tn, {
                                        get when() {
                                            return "extension" === t()
                                        },
                                        get children() {
                                            return [qt(Xt, {
                                                get when() {
                                                    return be(e.wallet)
                                                },
                                                get children() {
                                                    return [qt(fc, {
                                                        size: "s"
                                                    }), qt(pc, {
                                                        translationKey: "walletModal.desktopConnectionModal.continueInExtension",
                                                        get translationValues() {
                                                            return {
                                                                name: e.wallet.name
                                                            }
                                                        },
                                                        get children() {
                                                            return ["Continue in ", vt((() => e.wallet.name)), " browser extension…"]
                                                        }
                                                    }), qt(uc, {
                                                        get children() {
                                                            return qt(jo, {
                                                                get leftIcon() {
                                                                    return qt(Ns, {})
                                                                },
                                                                onClick: g,
                                                                get children() {
                                                                    return qt(vc, {
                                                                        translationKey: "common.retry",
                                                                        children: "Retry"
                                                                    })
                                                                }
                                                            })
                                                        }
                                                    })]
                                                }
                                            }), qt(Xt, {
                                                get when() {
                                                    return !be(e.wallet)
                                                },
                                                get children() {
                                                    return [qt(pc, {
                                                        translationKey: "walletModal.desktopConnectionModal.dontHaveExtension",
                                                        get translationValues() {
                                                            return {
                                                                name: e.wallet.name
                                                            }
                                                        },
                                                        get children() {
                                                            return ["Seems you don't have installed ", vt((() => e.wallet.name)), " browser extension"]
                                                        }
                                                    }), qt(uc, {
                                                        get children() {
                                                            return qt(wa, {
                                                                get href() {
                                                                    return e.wallet.aboutUrl
                                                                },
                                                                blank: !0,
                                                                get children() {
                                                                    return qt(jo, {
                                                                        get rightIcon() {
                                                                            return qt($s, {})
                                                                        },
                                                                        onClick: g,
                                                                        get children() {
                                                                            return qt(vc, {
                                                                                translationKey: "walletModal.desktopConnectionModal.getWallet",
                                                                                get translationValues() {
                                                                                    return {
                                                                                        name: e.wallet.name
                                                                                    }
                                                                                },
                                                                                get children() {
                                                                                    return ["Get ", vt((() => e.wallet.name))]
                                                                                }
                                                                            })
                                                                        }
                                                                    })
                                                                }
                                                            })
                                                        }
                                                    })]
                                                }
                                            })]
                                        }
                                    }), qt(tn, {
                                        get when() {
                                            return "desktop" === t()
                                        },
                                        get children() {
                                            return [qt(Cs, {
                                                size: "m"
                                            }), qt(pc, {
                                                translationKey: "walletModal.desktopConnectionModal.continueOnDesktop",
                                                get translationValues() {
                                                    return {
                                                        name: e.wallet.name
                                                    }
                                                },
                                                get children() {
                                                    return ["Continue in ", vt((() => e.wallet.name)), " on desktop…"]
                                                }
                                            }), qt(uc, {
                                                get children() {
                                                    return [qt(jo, {
                                                        get leftIcon() {
                                                            return qt(Ns, {})
                                                        },
                                                        onClick: h,
                                                        get children() {
                                                            return qt(vc, {
                                                                translationKey: "common.retry",
                                                                children: "Retry"
                                                            })
                                                        }
                                                    }), qt(wa, {
                                                        get href() {
                                                            return e.wallet.aboutUrl
                                                        },
                                                        blank: !0,
                                                        get children() {
                                                            return qt(jo, {
                                                                get rightIcon() {
                                                                    return qt($s, {})
                                                                },
                                                                get children() {
                                                                    return qt(vc, {
                                                                        translationKey: "walletModal.desktopConnectionModal.getWallet",
                                                                        get translationValues() {
                                                                            return {
                                                                                name: e.wallet.name
                                                                            }
                                                                        },
                                                                        get children() {
                                                                            return ["Get ", vt((() => e.wallet.name))]
                                                                        }
                                                                    })
                                                                }
                                                            })
                                                        }
                                                    })]
                                                }
                                            })]
                                        }
                                    })]
                                }
                            })
                        }
                    }), qt(Xt, {
                        get when() {
                            return e.wallet.appName === ra
                        },
                        get children() {
                            return qt(wc, {
                                get rightIcon() {
                                    return qt(mc, {
                                        get src() {
                                            return ia
                                        }
                                    })
                                },
                                scale: "s",
                                onClick: f,
                                get children() {
                                    return qt(vc, {
                                        translationKey: "walletModal.desktopConnectionModal.openWalletOnTelegram",
                                        children: "Open Wallet in Telegram on desktop"
                                    })
                                }
                            })
                        }
                    }), qt(Xt, {
                        get when() {
                            return e.wallet.appName !== ra
                        },
                        get children() {
                            return qt(dc, {
                                get children() {
                                    return [qt(Xt, {
                                        get when() {
                                            return vt((() => "mobile" !== t()))() && ql(e.wallet)
                                        },
                                        get children() {
                                            return qt(hc, {
                                                appearance: "secondary",
                                                get leftIcon() {
                                                    return qt(Ls, {})
                                                },
                                                onClick: d,
                                                get children() {
                                                    return qt(vc, {
                                                        translationKey: "common.mobile",
                                                        children: "Mobile"
                                                    })
                                                }
                                            })
                                        }
                                    }), qt(Xt, {
                                        get when() {
                                            return vt((() => "extension" !== t()))() && zl(e.wallet)
                                        },
                                        get children() {
                                            return qt(hc, {
                                                appearance: "secondary",
                                                get leftIcon() {
                                                    return qt(Rs, {})
                                                },
                                                onClick: g,
                                                get children() {
                                                    return qt(vc, {
                                                        translationKey: "common.browserExtension",
                                                        children: "Browser Extension"
                                                    })
                                                }
                                            })
                                        }
                                    }), qt(Xt, {
                                        get when() {
                                            return vt((() => "desktop" !== t()))() && Fl(e.wallet)
                                        },
                                        get children() {
                                            return qt(hc, {
                                                appearance: "secondary",
                                                get leftIcon() {
                                                    return qt(Ms, {})
                                                },
                                                onClick: h,
                                                get children() {
                                                    return qt(vc, {
                                                        translationKey: "common.desktop",
                                                        children: "Desktop"
                                                    })
                                                }
                                            })
                                        }
                                    })]
                                }
                            })
                        }
                    })]
                }
            })
        },
        kc = qn.div ``,
        Sc = qn(ei)
    `
    position: absolute;
    top: 16px;
    left: 16px;
`, Ec = qn(ts)
    `
    margin-bottom: 18px;
`, Rc = qn.div `
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`, Tc = Bn `
    margin-bottom: 12px;
`, Lc = qn(is)
    `
    text-align: center;
    margin-bottom: 4px;
`, Ac = qn(Di)
    `
    text-align: center;
    max-width: 352px;
    color: ${e=>e.theme.colors.text.secondary};
`, Mc = qn.div `
    padding: 16px 24px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`, Oc = "https://ton.org/wallets?filters[wallet_features][slug][$in]=dapp-auth&pagination[limit]=-1", Nc = e => qt(kc, {
        "data-tc-wallets-modal-info": "true",
        get children() {
            return [qt(Sc, {
                icon: "arrow",
                onClick: () => e.onBackClick()
            }), qt(Ec, {
                translationKey: "walletModal.infoModal.whatIsAWallet",
                children: "What is a wallet"
            }), qt(ga, {
                get children() {
                    return [qt(Rc, {
                        get children() {
                            return [qt(js, {
                                class: Tc
                            }), qt(Lc, {
                                translationKey: "walletModal.infoModal.secureDigitalAssets",
                                children: "Secure digital assets storage"
                            }), qt(Ac, {
                                translationKey: "walletModal.infoModal.walletProtects",
                                children: "A wallet protects and manages your digital assets including TON, tokens and collectables."
                            })]
                        }
                    }), qt(Rc, {
                        get children() {
                            return [qt(Ds, {
                                class: Tc
                            }), qt(Lc, {
                                translationKey: "walletModal.infoModal.controlIdentity",
                                children: "Control your Web3 identity"
                            }), qt(Ac, {
                                translationKey: "walletModal.infoModal.manageIdentity",
                                children: "Manage your digital identity and access decentralized applications with ease. Maintain control over your data and engage securely in the blockchain ecosystem."
                            })]
                        }
                    }), qt(Rc, {
                        get children() {
                            return [qt(Vs, {
                                class: Tc
                            }), qt(Lc, {
                                translationKey: "walletModal.infoModal.effortlessCryptoTransactions",
                                children: "Effortless crypto transactions"
                            }), qt(Ac, {
                                translationKey: "walletModal.infoModal.easilySend",
                                children: "Easily send, receive, monitor your cryptocurrencies. Streamline your operations with decentralized applications."
                            })]
                        }
                    }), qt(Mc, {
                        get children() {
                            return qt(wa, {
                                get href() {
                                    return Oc
                                },
                                blank: !0,
                                get children() {
                                    return qt(jo, {
                                        get rightIcon() {
                                            return qt(Us, {})
                                        },
                                        get children() {
                                            return qt(vc, {
                                                translationKey: "walletModal.infoModal.getAWallet",
                                                children: "Get a Wallet"
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })]
                }
            })]
        }
    }), Pc = qn.div ``, $c = qn.div `
    flex: 1;
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 232px;
`, Ic = qn(ts)
    `
    max-width: 262px;
    margin: 0 auto 8px;
`, Uc = qn(ei)
    `
    position: absolute;
    top: 16px;
    left: 16px;
`, Wc = qn.div `
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-top: 0.5px solid ${e=>Jn(e.theme.colors.icon.secondary,.2)};
`, jc = qn(vo)
    `
    width: 36px;
    height: 36px;
    border-radius: 10px;
`, Bc = qn(wa)
    `
    margin-left: auto;
`, Dc = qn(Cs)
    `
    margin-bottom: 18px;
    margin-top: 2px;
`, Hc = qn(ms)
    `
    margin-bottom: 16px;
`, Vc = qn(rs)
    `
    color: ${e=>e.theme.colors.text.secondary};
    text-align: center;
    margin-bottom: 20px;
`, Kc = qn.div `
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-bottom: 16px;
`, Fc = qn(ts)
    `
    margin-bottom: 2px;
    padding: 0 64px;
`, qc = qn(rs)
    `
    margin-bottom: 20px;
    padding: 0 64px;
    min-height: 44px;
`, zc = qn.div `
    padding: 0 24px 24px;
`, Zc = e => [qt(Fc, {
        get children() {
            return e.walletInfo.name
        }
    }), qt(qc, {
        translationKey: "walletModal.mobileConnectionModal.scanQR",
        get translationValues() {
            return {
                name: e.walletInfo.name
            }
        },
        get children() {
            return ["Scan the QR code below with your phone’s or ", vt((() => e.walletInfo.name)), "’s camera"]
        }
    }), qt(zc, {
        get children() {
            return qt($i, {
                get imageUrl() {
                    return e.walletInfo.imageUrl
                },
                get sourceUrl() {
                    return yc(e.universalLink, "none")
                },
                disableCopy: !0
            })
        }
    })], Gc = e => {
        const t = Kn(),
            [n, r] = gt(!0),
            [o, i] = gt(!1),
            [s, a] = gt(!1),
            l = Et(Ir),
            c = l.onStatusChange((() => {}), (() => {
                a(!0)
            })),
            u = vt((() => l.connect({
                universalLink: e.wallet.universalLink,
                bridgeUrl: e.wallet.bridgeUrl
            }, e.additionalRequest))),
            d = () => {
                if (te(u())) return Ar(__spreadProps(__spreadValues({}, e.wallet), {
                    openMethod: "universal-link"
                })), void bc(u(), {
                    returnStrategy: Dl.returnStrategy,
                    twaReturnUrl: Dl.twaReturnUrl,
                    forceRedirect: !0
                });
                a(!1);
                const t = !n();
                r(!1), Cc(u(), e.wallet.deepLink, {
                    returnStrategy: Dl.returnStrategy,
                    forceRedirect: t
                }, (t => {
                    Ar(__spreadProps(__spreadValues({}, e.wallet), {
                        openMethod: t
                    }))
                }))
            },
            h = () => {
                a(!1), i(!0), Ar(__spreadProps(__spreadValues({}, e.wallet), {
                    openMethod: "qrcode"
                }))
            },
            f = () => {
                o() ? (i(!1), Ar(__spreadProps(__spreadValues({}, e.wallet), {
                    openMethod: "universal-link"
                }))) : e.onBackClick()
            };
        return _t(c), d(), qt(Pc, {
            "data-tc-wallets-modal-connection-mobile": "true",
            get children() {
                return [qt(Xt, {
                    get when() {
                        return !e.backDisabled || o()
                    },
                    get children() {
                        return qt(Uc, {
                            icon: "arrow",
                            onClick: f
                        })
                    }
                }), qt(Xt, {
                    get when() {
                        return o()
                    },
                    get children() {
                        return qt(Zc, {
                            get universalLink() {
                                return u()
                            },
                            get walletInfo() {
                                return e.wallet
                            }
                        })
                    }
                }), qt(Xt, {
                    get when() {
                        return !o()
                    },
                    get children() {
                        return [qt(Ic, {
                            get children() {
                                return e.wallet.name
                            }
                        }), qt($c, {
                            get children() {
                                return [qt(Xt, {
                                    get when() {
                                        return s()
                                    },
                                    get children() {
                                        return [qt(Hc, {
                                            size: "s"
                                        }), qt(Vc, {
                                            translationKey: "walletModal.mobileConnectionModal.connectionDeclined",
                                            children: "Connection declined"
                                        }), qt(Kc, {
                                            get children() {
                                                return [qt(jo, {
                                                    get leftIcon() {
                                                        return qt(Ns, {})
                                                    },
                                                    onClick: d,
                                                    get children() {
                                                        return qt(vc, {
                                                            translationKey: "common.retry",
                                                            children: "Retry"
                                                        })
                                                    }
                                                }), qt(jo, {
                                                    get leftIcon() {
                                                        return qt(Qs, {
                                                            get fill() {
                                                                return t.colors.accent
                                                            }
                                                        })
                                                    },
                                                    onClick: h,
                                                    get children() {
                                                        return qt(vc, {
                                                            translationKey: "walletModal.mobileConnectionModal.showQR",
                                                            children: "Show QR Code"
                                                        })
                                                    }
                                                })]
                                            }
                                        })]
                                    }
                                }), qt(Xt, {
                                    get when() {
                                        return !s()
                                    },
                                    get children() {
                                        return [qt(Dc, {
                                            size: "s"
                                        }), qt(Vc, {
                                            translationKey: "walletModal.mobileConnectionModal.continueIn",
                                            get translationValues() {
                                                return {
                                                    name: e.wallet.name
                                                }
                                            },
                                            get children() {
                                                return ["Continue in ", vt((() => e.wallet.name)), "…"]
                                            }
                                        }), qt(Kc, {
                                            get children() {
                                                return [qt(jo, {
                                                    get leftIcon() {
                                                        return qt(Ns, {})
                                                    },
                                                    onClick: d,
                                                    get children() {
                                                        return qt(vc, {
                                                            translationKey: "common.retry",
                                                            children: "Retry"
                                                        })
                                                    }
                                                }), qt(jo, {
                                                    get leftIcon() {
                                                        return qt(Qs, {
                                                            get fill() {
                                                                return t.colors.accent
                                                            }
                                                        })
                                                    },
                                                    onClick: h,
                                                    get children() {
                                                        return qt(vc, {
                                                            translationKey: "walletModal.mobileConnectionModal.showQR",
                                                            children: "Show QR Code"
                                                        })
                                                    }
                                                })]
                                            }
                                        })]
                                    }
                                })]
                            }
                        }), qt(Wc, {
                            get children() {
                                return [qt(jc, {
                                    get src() {
                                        return e.wallet.imageUrl
                                    }
                                }), qt(is, {
                                    get children() {
                                        return e.wallet.name
                                    }
                                }), qt(Bc, {
                                    get href() {
                                        return e.wallet.aboutUrl
                                    },
                                    blank: !0,
                                    get children() {
                                        return qt(jo, {
                                            get children() {
                                                return qt(vc, {
                                                    translationKey: "common.get",
                                                    children: "GET"
                                                })
                                            }
                                        })
                                    }
                                })]
                            }
                        })]
                    }
                })]
            }
        })
    }, Yc = {
        m: "16px",
        s: "12px",
        none: "0"
    }, Qc = {
        m: "6px",
        s: "6px",
        none: "0"
    }, Jc = qn.ul `
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: fit-content;
    max-width: 100%;
    min-width: 100%;
    height: fit-content;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0 13px 24px;

    &&::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

    > li {
        height: fit-content;
    }
`, Xc = qn.li `
    width: 82px;
    min-width: 82px;
    height: 124px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 4px;

    text-align: center;
    cursor: pointer;

    transition: transform 0.1s ease-in-out;

    ${Po} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${No} {
        &:active {
            transform: scale(0.92);
        }
    }
`, eu = qn.div `
    width: 1px;
    margin: 0 10px;
    height: 24px;
    position: relative;
    top: 26px;

    background-color: ${e=>e.theme.colors.icon.secondary};
    opacity: 0.2;
`, tu = qn.div `
    width: 60px;
    height: 60px;
    border-radius: ${e=>Yc[e.theme.borderRadius]};
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${e=>e.theme.colors.background.tint};
    margin-bottom: 8px;
`, nu = qn(ts)
    `
    margin-top: 38px;
    margin-bottom: 4px;
    padding: 0 24px;
`, ru = qn(rs)
    `
    margin-bottom: 24px;
    padding: 0 24px;
    min-height: 44px;
    max-width: ${e=>e.maxWidth}px;
    margin-left: ${e=>e.maxWidth?"auto":"0px"};
    margin-right: ${e=>e.maxWidth?"auto":"0px"};
`;
    qn(jo)
    `
    display: block;
    margin: 0 auto;
`;
    const ou = qn(jo)
    `
    margin: 0 24px 24px;
    width: calc(100% - 48px);
    border-radius: ${e=>Yc[e.theme.borderRadius]};
    padding: 14px 16px 14px 14px;
    background-color: ${e=>e.theme.colors.telegramButton};

    color: ${e=>e.theme.colors.constant.white};
    font-weight: 510;
    font-size: 16px;
    line-height: 20px;
`, iu = qn(vo)
    `
    background-color: transparent;
    border-radius: ${e=>Qc[e.theme.borderRadius]};
    width: 24px;
    height: 24px;
`, su = qn(ei)
    `
    position: absolute;
    top: 16px;
    left: 16px;
`, au = qn(ts)
    `
    margin-bottom: 2px;
    padding: 0 64px;
`, lu = qn(rs)
    `
    margin-bottom: 20px;
    padding: 0 64px;
`, cu = qn.div `
    padding: 0 24px 24px;
`, uu = e => [qt(au, {
        translationKey: "walletModal.mobileUniversalModal.connectYourWallet",
        children: "Connect your wallet"
    }), qt(lu, {
        translationKey: "walletModal.mobileUniversalModal.scan",
        children: "Scan with your mobile wallet"
    }), qt(cu, {
        get children() {
            return qt($i, {
                get imageUrl() {
                    return oa
                },
                get sourceUrl() {
                    return yc(e.universalLink, "none")
                },
                disableCopy: !0
            })
        }
    })];

    function du(e) {
        const t = new Set(e.filter(_e).map((e => e.bridgeUrl)));
        return Array.from(t).map((e => ({
            bridgeUrl: e
        })))
    }

    function hu(e, t) {
        const n = new Set(null == e ? void 0 : e.map((e => e.bridgeUrl))),
            r = new Set(null == t ? void 0 : t.map((e => e.bridgeUrl)));
        return n.size === r.size && [...n].every((e => r.has(e)))
    }
    const fu = dn("<li></li>"),
        gu = dn('<div data-tc-wallets-modal-universal-mobile="true"></div>'),
        pu = e => {
            const [t, n] = gt(!1), [r, o] = gt(!0), [i, s] = gt(null), a = Dl.connector, l = () => e.walletsList.filter((e => ql(e) && e.appName !== ra)), c = () => l().length > 7, u = vt((() => du(e.walletsList)), null, {
                equals: hu
            }), d = () => (i() || s(a.connect(u(), e.additionalRequest)), i());
            Ar({
                openMethod: "universal-link"
            });
            const [h, f] = gt(void 0), g = () => __async(this, null, (function* () {
                void 0 !== h() && clearTimeout(h()), yield Ni(d());
                const e = setTimeout((() => f(void 0)), 1500);
                f(e)
            })), p = () => {
                const e = !r();
                o(!1), Cc(d(), void 0, {
                    returnStrategy: Dl.returnStrategy,
                    forceRedirect: e
                }, (e => {
                    Ar({
                        openMethod: e
                    })
                }))
            }, w = () => {
                s(null);
                const t = e.walletsList.find((e => e.appName === ra));
                if (!t || !_e(t)) throw new or("@wallet bot not found in the wallets list");
                const n = a.connect({
                        bridgeUrl: t.bridgeUrl,
                        universalLink: t.universalLink
                    }, e.additionalRequest),
                    i = !r();
                o(!1), bc(n, {
                    returnStrategy: Dl.returnStrategy,
                    twaReturnUrl: Dl.twaReturnUrl,
                    forceRedirect: i
                })
            }, m = () => {
                n(!0), Ar({
                    openMethod: "qrcode"
                })
            }, v = () => {
                n(!1), Ar({
                    openMethod: "universal-link"
                })
            };
            return (() => {
                const n = gu.cloneNode(!0);
                return wn(n, qt(Xt, {
                    get when() {
                        return t()
                    },
                    get children() {
                        return [qt(su, {
                            icon: "arrow",
                            onClick: v
                        }), qt(uu, {
                            get universalLink() {
                                return d()
                            }
                        })]
                    }
                }), null), wn(n, qt(Xt, {
                    get when() {
                        return !t()
                    },
                    get children() {
                        return [qt(su, {
                            get icon() {
                                return qt(Qs, {})
                            },
                            onClick: m
                        }), qt(nu, {
                            translationKey: "walletModal.mobileUniversalModal.connectYourWallet",
                            children: "Connect your wallet"
                        }), qt(ru, {
                            translationKey: "walletModal.mobileUniversalModal.openWalletOnTelegramOrSelect",
                            maxWidth: 342,
                            children: "Open Wallet in Telegram to connect"
                        }), qt(ou, {
                            get leftIcon() {
                                return qt(Fs, {})
                            },
                            get rightIcon() {
                                return qt(iu, {
                                    get src() {
                                        return ia
                                    }
                                })
                            },
                            onClick: w,
                            scale: "s",
                            get children() {
                                return qt(vc, {
                                    translationKey: "walletModal.mobileUniversalModal.openWalletOnTelegram",
                                    children: "Open Wallet in Telegram"
                                })
                            }
                        })]
                    }
                }), null), n
            })()
        },
        wu = {
            m: "16px",
            s: "8px",
            none: "0"
        },
        mu = {
            m: "8px",
            s: "4px",
            none: "0"
        },
        vu = qn.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 16px;
`,
        yu = qn(rs)
    `
    max-width: 320px;
    margin-top: 2px;
    margin-bottom: 20px;
`, bu = qn(rs)
    `
    margin-bottom: 16px;
`, Cu = qn($i)
    `
    margin-bottom: 24px;
`, xu = qn.ul `
    display: flex;
`;
    qn.div `
    display: flex;
    gap: 16px;
    width: 100%;
`, qn(jo)
    `
    position: relative;
    font-size: 16px;
    line-height: 20px;
    width: 100%;
    padding: 0 16px;
    height: 56px;
    border-radius: ${e=>wu[e.theme.borderRadius]};

    &:hover {
        ${e=>e.disableEventsAnimation?"transform: unset;":""}
    }

    &:active {
        ${e=>e.disableEventsAnimation?"transform: unset;":""}
    }
`, qn.ul `
    position: absolute;
    bottom: 100%;
    left: 0;
    margin: 0;
    padding: 8px;
    width: 188px;
    transform: translateY(-16px);

    background-color: ${e=>e.theme.colors.background.primary};
    border-radius: ${e=>wu[e.theme.borderRadius]};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
`, qn.li `
    padding: 8px;

    display: flex;
    align-items: center;
    gap: 8px;

    cursor: pointer;
    border-radius: ${e=>mu[e.theme.borderRadius]};

    transition: background-color, transform 0.1s ease-in-out;

    &:hover {
        background-color: ${e=>e.theme.colors.background.secondary};
    }

    &:active {
        transform: scale(0.96);
    }
`, qn(vo)
    `
    width: 24px;
    height: 24px;

    border-radius: 6px;
`, qn.div `
    margin-top: 23px;
    margin-bottom: 1px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`, qn(Di)
    `
    color: ${e=>e.theme.colors.text.secondary};
    font-size: 16px;
`;
    const _u = dn("<li></li>"),
        ku = e => {
            const [t, n] = gt(!1), r = Dl.connector, o = vt((() => du(e.walletsList)), null, {
                equals: hu
            });
            Ar({
                openMethod: "qrcode"
            });
            const i = vt((() => r.connect(o(), e.additionalRequest)));
            return qt(vu, {
                onClick: () => n(!1),
                "data-tc-wallets-modal-universal-desktop": "true",
                get children() {
                    return [qt(ts, {
                        translationKey: "walletModal.desktopUniversalModal.connectYourWallet",
                        children: "Connect your wallet"
                    }), qt(yu, {
                        translationKey: "walletModal.desktopUniversalModal.scan",
                        children: "Scan with your mobile wallet"
                    }), qt(Cu, {
                        get sourceUrl() {
                            return yc(i(), "none")
                        },
                        get disableCopy() {
                            return t()
                        },
                        get imageUrl() {
                            return oa
                        }
                    }), qt(bu, {
                        translationKey: "walletModal.desktopUniversalModal.availableWallets",
                        children: "Available wallets"
                    })]
                }
            })
        },
        Su = () => {
            const {
                locale: e
            } = ji()[1];
            mt((() => e(Dl.language))), mt((() => {
                xr() ? fa() : (i(null), a("universal"), c(!1))
            }));
            const t = Et(Ir),
                n = Et(ma),
                [r] = yt((() => n.getWallets())),
                [o, i] = gt(null),
                [s, a] = gt("universal"),
                [l, c] = gt(!1),
                u = vt((() => {
                    if ("ready" !== r.state) return null;
                    let e = Kl(r(), Dl.walletsListConfiguration);
                    const t = e.filter(be),
                        n = e.filter((e => !be(e)));
                    e = (t || []).concat(n);
                    const o = Dl.preferredWalletAppName,
                        i = e.find((e => Zl(e, o))),
                        s = e.filter((e => Zl(e, o))).length >= 2;
                    o && i && !s && (e = [__spreadProps(__spreadValues({}, i), {
                        isPreferred: !0
                    })].concat(e.filter((e => !Zl(e, o)))));
                    const a = e.find((e => Zl(e, ra)));
                    return a && (e = [a].concat(e.filter((e => !Zl(e, ra))))), e
                })),
                d = () => {
                    var e;
                    return "loading" === (null == (e = Dl.connectRequestParameters) ? void 0 : e.state)
                },
                h = vt((() => {
                    var e;
                    if (!d()) return null == (e = Dl.connectRequestParameters) ? void 0 : e.value
                })),
                f = e => {
                    n.closeModal(e)
                },
                g = t.onStatusChange((e => {
                    e && f("wallet-selected")
                })),
                p = () => {
                    a("all-wallets")
                },
                w = () => {
                    a("universal")
                },
                m = () => {
                    i(null)
                };
            return _t((() => {
                i(null), c(!1)
            })), _t(g), qt(Wl, {
                get opened() {
                    return xr()
                },
                get enableAndroidBackHandler() {
                    return Dl.enableAndroidBackHandler
                },
                onClose: () => f("action-cancelled"),
                onClickQuestion: () => c((e => !e)),
                "data-tc-wallets-modal-container": "true",
                get children() {
                    return [qt(Xt, {
                        get when() {
                            return l()
                        },
                        get children() {
                            return qt(Nc, {
                                onBackClick: () => c(!1)
                            })
                        }
                    }), qt(Xt, {
                        get when() {
                            return !l()
                        },
                        get children() {
                            return [qt(Xt, {
                                get when() {
                                    return d() || !u()
                                },
                                get children() {
                                    return [qt(jl, {
                                        translationKey: "walletModal.loading",
                                        children: "Wallets list is loading"
                                    }), qt(Bl, {
                                        get children() {
                                            return qt(Cs, {
                                                size: "m"
                                            })
                                        }
                                    })]
                                }
                            }), qt(Xt, {
                                get when() {
                                    return vt((() => !d()))() && u()
                                },
                                get children() {
                                    return qt(en, {
                                        get children() {
                                            return [qt(tn, {
                                                get when() {
                                                    return o()
                                                },
                                                get children() {
                                                    return qt(Tn, {
                                                        get component() {
                                                            return da() ? Gc : _c
                                                        },
                                                        get wallet() {
                                                            return o()
                                                        },
                                                        get additionalRequest() {
                                                            return h()
                                                        },
                                                        onBackClick: m
                                                    })
                                                }
                                            }), qt(tn, {
                                                get when() {
                                                    return "universal" === s()
                                                },
                                                get children() {
                                                    return qt(Tn, {
                                                        get component() {
                                                            return da() ? pu : ku
                                                        },
                                                        onSelect: i,
                                                        get walletsList() {
                                                            return u()
                                                        },
                                                        get additionalRequest() {
                                                            return h()
                                                        },
                                                        onSelectAllWallets: p
                                                    })
                                                }
                                            }), qt(tn, {
                                                get when() {
                                                    return "all-wallets" === s()
                                                },
                                                get children() {
                                                    return qt(tc, {
                                                        get walletsList() {
                                                            return u()
                                                        },
                                                        onBack: w,
                                                        onSelect: i
                                                    })
                                                }
                                            })]
                                        }
                                    })
                                }
                            })]
                        }
                    })]
                }
            })
        },
        Eu = qn.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 8px;
`,
        Ru = qn(ts)
    `
    margin-top: 16px;
`, Tu = qn(Di)
    `
    font-weight: 510;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    max-width: 250px;

    color: ${e=>e.theme.colors.text.secondary};
`, Lu = qn(jo)
    `
    min-width: 112px;
    margin-top: 32px;
`, Au = qn(Cs)
    `
    height: 16px;
    width: 16px;
`, Mu = qn(jo)
    `
    margin-top: 32px;
`, Ou = e => {
        const t = Wo(e),
            n = Et(ma),
            [r, o] = gt(!0),
            [i, s] = gt(!1);
        let a, l;
        mt((() => {
            const e = Mr();
            s(!!e && "sent" in e && e.sent)
        })), (null == n ? void 0 : n.wallet) && "universalLink" in n.wallet && ("universal-link" === n.wallet.openMethod || te(n.wallet.universalLink) && _o()) && (a = n.wallet.universalLink), (null == n ? void 0 : n.wallet) && "deepLink" in n.wallet && ("custom-deeplink" === n.wallet.openMethod || te(n.wallet.deepLink) && _o()) && (l = n.wallet.deepLink);
        const c = () => {
            const e = Mr(),
                t = "returnStrategy" in e ? e.returnStrategy : Dl.returnStrategy,
                n = !r();
            o(!1), te(a) ? bc(a, {
                returnStrategy: t,
                twaReturnUrl: "twaReturnUrl" in e ? e.twaReturnUrl : Dl.twaReturnUrl,
                forceRedirect: n
            }) : Cc(a, l, {
                returnStrategy: t,
                forceRedirect: n
            }, (() => {}))
        };
        return qt(Eu, Yt(t, {
            get children() {
                return [vt((() => e.icon)), qt(Ru, {
                    get translationKey() {
                        return e.headerTranslationKey
                    },
                    get translationValues() {
                        return e.headerTranslationValues
                    }
                }), qt(Tu, {
                    get translationKey() {
                        return e.textTranslationKey
                    },
                    get translationValues() {
                        return e.textTranslationValues
                    }
                }), qt(Xt, {
                    get when() {
                        return !i() && ("open-wallet" === e.showButton && a || "open-wallet" !== e.showButton)
                    },
                    get children() {
                        return qt(Lu, {
                            disabled: !0,
                            "data-tc-connect-button-loading": "true",
                            get children() {
                                return qt(Au, {})
                            }
                        })
                    }
                }), qt(Xt, {
                    get when() {
                        return i()
                    },
                    get children() {
                        return [qt(Xt, {
                            get when() {
                                return "open-wallet" !== e.showButton
                            },
                            get children() {
                                return qt(Mu, {
                                    onClick: () => e.onClose(),
                                    get children() {
                                        return qt(vc, {
                                            translationKey: "common.close",
                                            children: "Close"
                                        })
                                    }
                                })
                            }
                        }), qt(Xt, {
                            get when() {
                                return "open-wallet" === e.showButton && a
                            },
                            get children() {
                                return qt(Mu, {
                                    onClick: c,
                                    get children() {
                                        return qt(vc, {
                                            translationKey: "common.openWallet",
                                            children: "Open wallet"
                                        })
                                    }
                                })
                            }
                        })]
                    }
                })]
            }
        }))
    }, Nu = e => {
        const t = Et(ma),
            [n] = ji();
        return qt(Ou, {
            headerTranslationKey: "actionModal.confirmTransaction.header",
            get headerTranslationValues() {
                return {
                    name: t.wallet && "name" in t.wallet ? t.wallet.name : n("common.yourWallet", {}, "Your wallet")
                }
            },
            textTranslationKey: "actionModal.confirmTransaction.text",
            get icon() {
                return qt(Cs, {
                    size: "m"
                })
            },
            onClose: () => e.onClose(),
            showButton: "open-wallet",
            "data-tc-confirm-modal": "true"
        })
    }, Pu = e => qt(Ou, {
        headerTranslationKey: "actionModal.transactionCanceled.header",
        textTranslationKey: "actionModal.transactionCanceled.text",
        get icon() {
            return qt(ms, {
                size: "m"
            })
        },
        onClose: () => e.onClose(),
        "data-tc-transaction-canceled-modal": "true"
    }), $u = e => qt(Ou, {
        headerTranslationKey: "actionModal.transactionSent.header",
        textTranslationKey: "actionModal.transactionSent.text",
        get icon() {
            return qt(fs, {
                size: "m"
            })
        },
        onClose: () => e.onClose(),
        "data-tc-transaction-sent-modal": "true"
    }), Iu = () => qt(wi, {
        get opened() {
            var e;
            return vt((() => null !== Mr()))() && !0 === (null == (e = Mr()) ? void 0 : e.openModal)
        },
        get enableAndroidBackHandler() {
            return Dl.enableAndroidBackHandler
        },
        onClose: () => Or(null),
        "data-tc-actions-modal-container": "true",
        get children() {
            return qt(en, {
                get children() {
                    return [qt(tn, {
                        get when() {
                            return "transaction-sent" === Mr().name
                        },
                        get children() {
                            return qt($u, {
                                onClose: () => Or(null)
                            })
                        }
                    }), qt(tn, {
                        get when() {
                            return "transaction-canceled" === Mr().name
                        },
                        get children() {
                            return qt(Pu, {
                                onClose: () => Or(null)
                            })
                        }
                    }), qt(tn, {
                        get when() {
                            return "confirm-transaction" === Mr().name
                        },
                        get children() {
                            return qt(Nu, {
                                onClose: () => Or(null)
                            })
                        }
                    })]
                }
            })
        }
    }), Uu = () => {
        const {
            locale: e
        } = ji()[1];
        mt((() => e(Dl.language))), mt((() => {
            Sr() && fa()
        }));
        const t = Et(Ir),
            n = Et(ma),
            [r, o] = gt(!1),
            i = () => {
                var e;
                return "loading" === (null == (e = Dl.connectRequestParameters) ? void 0 : e.state)
            },
            s = vt((() => {
                var e;
                if (!i()) return null == (e = Dl.connectRequestParameters) ? void 0 : e.value
            })),
            a = e => {
                n.closeSingleWalletModal(e)
            };
        return _t(t.onStatusChange((e => {
            e && a("wallet-selected")
        }))), _t((() => {
            o(!1)
        })), qt(Wl, {
            get opened() {
                return Sr()
            },
            get enableAndroidBackHandler() {
                return Dl.enableAndroidBackHandler
            },
            onClose: () => a("action-cancelled"),
            onClickQuestion: () => o((e => !e)),
            "data-tc-wallets-modal-container": "true",
            get children() {
                return [qt(Xt, {
                    get when() {
                        return r()
                    },
                    get children() {
                        return qt(Nc, {
                            onBackClick: () => o(!1)
                        })
                    }
                }), qt(Xt, {
                    get when() {
                        return !r()
                    },
                    get children() {
                        return [qt(Xt, {
                            get when() {
                                return i()
                            },
                            get children() {
                                return [qt(jl, {
                                    translationKey: "walletModal.loading",
                                    children: "Wallets list is loading"
                                }), qt(Bl, {
                                    get children() {
                                        return qt(Cs, {
                                            size: "m"
                                        })
                                    }
                                })]
                            }
                        }), qt(Xt, {
                            get when() {
                                return !i()
                            },
                            get children() {
                                return qt(Tn, {
                                    get component() {
                                        return da() ? Gc : _c
                                    },
                                    get wallet() {
                                        return Er()
                                    },
                                    get additionalRequest() {
                                        return s()
                                    },
                                    onBackClick: () => {},
                                    backDisabled: !0
                                })
                            }
                        })]
                    }
                })]
            }
        })
    }, Wu = e => {
        const t = Ui(Pr, Dl.language);
        return customElements.define(Zn, class extends HTMLElement {}), document.body.hasAttribute("ontouchstart") || document.body.setAttribute("ontouchstart", ""), qt(Wi.Provider, {
            value: t,
            get children() {
                return qt(ma.Provider, {
                    get value() {
                        return e.tonConnectUI
                    },
                    get children() {
                        return qt(Ir.Provider, {
                            get value() {
                                return Dl.connector
                            },
                            get children() {
                                return [qt(Qn, {}), qt(Vn, {
                                    theme: ho,
                                    get children() {
                                        return [qt(Xt, {
                                            get when() {
                                                return Dl.buttonRootId
                                            },
                                            get children() {
                                                return qt(Rn, {
                                                    get mount() {
                                                        return document.getElementById(Dl.buttonRootId)
                                                    },
                                                    get children() {
                                                        return qt(Ul, {})
                                                    }
                                                })
                                            }
                                        }), qt(Tn, {
                                            component: Zn,
                                            get children() {
                                                return [qt(Su, {}), qt(Uu, {}), qt(Iu, {})]
                                            }
                                        })]
                                    }
                                })]
                            }
                        })
                    }
                })
            }
        })
    }, ju = () => {
        setTimeout((() => Cr({
            status: "opened",
            closeReason: null
        })))
    }, Bu = e => {
        setTimeout((() => Cr({
            status: "closed",
            closeReason: e
        })))
    }, Du = e => {
        setTimeout((() => kr({
            status: "opened",
            closeReason: null,
            walletInfo: e
        })))
    }, Hu = e => {
        setTimeout((() => kr({
            status: "closed",
            closeReason: e
        })))
    }, Vu = e => {
        setTimeout((() => Or(e)))
    }, Ku = () => {
        setTimeout((() => Or(null)))
    }, Fu = () => Tr(), qu = () => Ar(null), zu = (e, t) => function (e, t, n, r = {}) {
        let o;
        return ft((r => {
            o = r, t === document ? e() : wn(t, e(), t.firstChild ? null : void 0, n)
        }), r.owner), () => {
            o(), t.textContent = ""
        }
    }((() => qt(Wu, {
        tonConnectUI: t
    })), document.getElementById(e));
    class Zu {
        constructor(e) {
            __publicField(this, "connector"), __publicField(this, "setConnectRequestParametersCallback"), __publicField(this, "consumers", []), __publicField(this, "tracker"), __publicField(this, "state", br()), this.connector = e.connector, this.tracker = e.tracker, this.setConnectRequestParametersCallback = e.setConnectRequestParametersCallback, mt((() => {
                const e = br();
                this.state = e, this.consumers.forEach((t => t(e)))
            }))
        }
        open() {
            return __async(this, null, (function* () {
                this.tracker.trackConnectionStarted();
                const e = (yield this.connector.getWallets()).find(Ce);
                return e ? this.connectEmbeddedWallet(e) : this.openWalletsModal()
            }))
        }
        close(e = "action-cancelled") {
            "action-cancelled" === e && this.tracker.trackConnectionError("Connection was cancelled"), Bu(e)
        }
        onStateChange(e) {
            return this.consumers.push(e), () => {
                this.consumers = this.consumers.filter((t => t !== e))
            }
        }
        connectEmbeddedWallet(e) {
            const t = t => {
                    Ar(e), this.connector.connect({
                        jsBridgeKey: e.jsBridgeKey
                    }, t)
                },
                n = Dl.connectRequestParameters;
            "loading" === (null == n ? void 0 : n.state) ? this.setConnectRequestParametersCallback(t): t(null == n ? void 0 : n.value)
        }
        openWalletsModal() {
            return __async(this, null, (function* () {
                return _o() && So(), ju(), new Promise((e => {
                    const t = this.onStateChange((n => {
                        const {
                            status: r
                        } = n;
                        "opened" === r && (t(), e())
                    }))
                }))
            }))
        }
    }
    class Gu {
        constructor(e) {
            __publicField(this, "connector"), __publicField(this, "consumers", []), this.connector = e.connector, mt((() => {
                const e = Mr();
                this.consumers.forEach((t => t(e)))
            }))
        }
        onStateChange(e) {
            return this.consumers.push(e), () => {
                this.consumers = this.consumers.filter((t => t !== e))
            }
        }
    }
    class Yu {
        constructor(e) {
            __publicField(this, "connector"), __publicField(this, "setConnectRequestParametersCallback"), __publicField(this, "consumers", []), __publicField(this, "tracker"), __publicField(this, "state", _r()), this.connector = e.connector, this.tracker = e.tracker, this.setConnectRequestParametersCallback = e.setConnectRequestParametersCallback, mt((() => {
                const e = _r();
                this.state = e, this.consumers.forEach((t => t(e)))
            }))
        }
        open(e) {
            return __async(this, null, (function* () {
                this.tracker.trackConnectionStarted();
                const t = Kl(yield this.connector.getWallets(), Dl.walletsListConfiguration),
                    n = t.find(Ce);
                if (!!n) return this.connectEmbeddedWallet(n);
                const r = t.filter(_e).find((t => Zl(t, e)));
                if (!!r) return this.openSingleWalletModal(r);
                const o = `Trying to open modal window with unknown wallet "${e}".`;
                throw this.tracker.trackConnectionError(o), new or(o)
            }))
        }
        close(e = "action-cancelled") {
            "action-cancelled" === e && this.tracker.trackConnectionError("Connection was cancelled"), Hu("action-cancelled")
        }
        onStateChange(e) {
            return this.consumers.push(e), () => {
                this.consumers = this.consumers.filter((t => t !== e))
            }
        }
        connectEmbeddedWallet(e) {
            const t = t => {
                    Ar(e), this.connector.connect({
                        jsBridgeKey: e.jsBridgeKey
                    }, t)
                },
                n = Dl.connectRequestParameters;
            "loading" === (null == n ? void 0 : n.state) ? this.setConnectRequestParametersCallback(t): t(null == n ? void 0 : n.value)
        }
        openSingleWalletModal(e) {
            return __async(this, null, (function* () {
                return _o() && So(), Du(e), new Promise((e => {
                    const t = this.onStateChange((n => {
                        const {
                            status: r
                        } = n;
                        "opened" === r && (t(), e())
                    }))
                }))
            }))
        }
    }
    class Qu {
        constructor(e) {
            var t;
            __publicField(this, "eventPrefix", "ton-connect-ui-"), __publicField(this, "tonConnectUiVersion"), __publicField(this, "tonConnectSdkVersion", null), __publicField(this, "eventDispatcher"), this.eventDispatcher = null != (t = null == e ? void 0 : e.eventDispatcher) ? t : new Ve, this.tonConnectUiVersion = e.tonConnectUiVersion, this.init().catch()
        }
        get version() {
            return Ae({
                ton_connect_sdk_lib: this.tonConnectSdkVersion,
                ton_connect_ui_lib: this.tonConnectUiVersion
            })
        }
        init() {
            return __async(this, null, (function* () {
                try {
                    yield this.setRequestVersionHandler(), this.tonConnectSdkVersion = yield this.requestTonConnectSdkVersion()
                } catch (Ju) {}
            }))
        }
        setRequestVersionHandler() {
            return __async(this, null, (function* () {
                yield this.eventDispatcher.addEventListener("ton-connect-ui-request-version", (() => __async(this, null, (function* () {
                    yield this.eventDispatcher.dispatchEvent("ton-connect-ui-response-version", Le(this.tonConnectUiVersion))
                }))))
            }))
        }
        requestTonConnectSdkVersion() {
            return __async(this, null, (function* () {
                return new Promise(((e, t) => __async(this, null, (function* () {
                    try {
                        yield this.eventDispatcher.addEventListener("ton-connect-response-version", (t => {
                            e(t.detail.version)
                        }), {
                            once: !0
                        }), yield this.eventDispatcher.dispatchEvent("ton-connect-request-version", {
                            type: "request-version"
                        })
                    } catch (Ju) {
                        t(Ju)
                    }
                }))))
            }))
        }
        dispatchUserActionEvent(e) {
            var t;
            try {
                null == (t = this.eventDispatcher) || t.dispatchEvent(`${this.eventPrefix}${e.type}`, e).catch()
            } catch (Ju) {}
        }
        trackConnectionStarted(...e) {
            try {
                const t = Oe(this.version, ...e);
                this.dispatchUserActionEvent(t)
            } catch (Ju) {}
        }
        trackConnectionCompleted(...e) {
            try {
                const t = Ne(this.version, ...e);
                this.dispatchUserActionEvent(t)
            } catch (Ju) {}
        }
        trackConnectionError(...e) {
            try {
                const t = Pe(this.version, ...e);
                this.dispatchUserActionEvent(t)
            } catch (Ju) {}
        }
        trackConnectionRestoringStarted(...e) {
            try {
                const t = $e(this.version, ...e);
                this.dispatchUserActionEvent(t)
            } catch (Ju) {}
        }
        trackConnectionRestoringCompleted(...e) {
            try {
                const t = Ie(this.version, ...e);
                this.dispatchUserActionEvent(t)
            } catch (Ju) {}
        }
        trackConnectionRestoringError(...e) {
            try {
                const t = Ue(this.version, ...e);
                this.dispatchUserActionEvent(t)
            } catch (Ju) {}
        }
        trackDisconnection(...e) {
            try {
                const t = He(this.version, ...e);
                this.dispatchUserActionEvent(t)
            } catch (Ju) {}
        }
        trackTransactionSentForSignature(...e) {
            try {
                const t = je(this.version, ...e);
                this.dispatchUserActionEvent(t)
            } catch (Ju) {}
        }
        trackTransactionSigned(...e) {
            try {
                const t = Be(this.version, ...e);
                this.dispatchUserActionEvent(t)
            } catch (Ju) {}
        }
        trackTransactionSigningFailed(...e) {
            try {
                const t = De(this.version, ...e);
                this.dispatchUserActionEvent(t)
            } catch (Ju) {}
        }
    }
    e.BadRequestError = B, e.BrowserEventDispatcher = Ve, e.FetchWalletsError = K, e.LocalstorageNotFoundError = V, e.ParseHexError = q, e.THEME = Ln, e.TonConnect = Fe, e.TonConnectError = N, e.TonConnectUI = class {
        constructor(e) {
            if (__publicField(this, "walletInfoStorage", new mr), __publicField(this, "preferredWalletStorage", new vr), __publicField(this, "tracker"), __publicField(this, "walletInfo", null), __publicField(this, "systemThemeChangeUnsubscribe", null), __publicField(this, "actionsConfiguration"), __publicField(this, "walletsList"), __publicField(this, "connectRequestParametersCallback"), __publicField(this, "connector"), __publicField(this, "modal"), __publicField(this, "singleWalletModal"), __publicField(this, "transactionModal"), __publicField(this, "connectionRestored", Promise.resolve(!1)), e && "connector" in e && e.connector) this.connector = e.connector;
            else {
                if (!(e && "manifestUrl" in e && e.manifestUrl)) throw new or("You have to specify a `manifestUrl` or a `connector` in the options.");
                this.connector = new Fe({
                    manifestUrl: e.manifestUrl,
                    eventDispatcher: null == e ? void 0 : e.eventDispatcher
                })
            }
            this.tracker = new Qu({
                eventDispatcher: null == e ? void 0 : e.eventDispatcher,
                tonConnectUiVersion: "2.0.9"
            }), this.modal = new Zu({
                connector: this.connector,
                tracker: this.tracker,
                setConnectRequestParametersCallback: e => {
                    this.connectRequestParametersCallback = e
                }
            }), this.singleWalletModal = new Yu({
                connector: this.connector,
                tracker: this.tracker,
                setConnectRequestParametersCallback: e => {
                    this.connectRequestParametersCallback = e
                }
            }), this.transactionModal = new Gu({
                connector: this.connector
            }), this.walletsList = this.getWallets(), this.walletsList.then((e => {
                return ur((t = e.map((e => e.imageUrl)), [...new Set(t)]));
                var t
            }));
            const t = this.normalizeWidgetRoot(null == e ? void 0 : e.widgetRootId);
            this.subscribeToWalletChange(), !1 !== (null == e ? void 0 : e.restoreConnection) && (this.connectionRestored = function (e) {
                return __async(this, null, (function* () {
                    return yield new Promise((e => requestAnimationFrame(e))), e()
                }))
            }((() => __async(this, null, (function* () {
                return this.tracker.trackConnectionRestoringStarted(), yield this.connector.restoreConnection(), this.connector.connected ? this.tracker.trackConnectionRestoringCompleted(this.wallet) : (this.tracker.trackConnectionRestoringError("Connection was not restored"), this.walletInfoStorage.removeWalletInfo()), this.connector.connected
            }))))), this.uiOptions = uo(e, {
                uiPreferences: {
                    theme: "SYSTEM"
                }
            });
            const n = this.preferredWalletStorage.getPreferredWalletAppName();
            Hl({
                connector: this.connector,
                preferredWalletAppName: n
            }), zu(t, this)
        }
        static getWallets() {
            return Fe.getWallets()
        }
        get connected() {
            return this.connector.connected
        }
        get account() {
            return this.connector.account
        }
        get wallet() {
            return this.connector.wallet ? __spreadValues(__spreadValues({}, this.connector.wallet), this.walletInfo) : null
        }
        set uiOptions(e) {
            var t, n, r, o, i, s, a;
            this.checkButtonRootExist(e.buttonRootId), this.actionsConfiguration = e.actionsConfiguration, (null == (t = e.uiPreferences) ? void 0 : t.theme) ? "SYSTEM" !== (null == (n = e.uiPreferences) ? void 0 : n.theme) ? (null == (r = this.systemThemeChangeUnsubscribe) || r.call(this), wo(e.uiPreferences.theme, e.uiPreferences.colorsSet)) : (wo(window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? Ln.LIGHT : Ln.DARK, e.uiPreferences.colorsSet), this.systemThemeChangeUnsubscribe || (this.systemThemeChangeUnsubscribe = function (e) {
                const t = t => e(t.matches ? Ln.DARK : Ln.LIGHT);
                return window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", t), () => window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", t)
            }(wo))) : (null == (o = e.uiPreferences) ? void 0 : o.colorsSet) && (s = e.uiPreferences.colorsSet, po[Ln.DARK] = uo(s[Ln.DARK], po[Ln.DARK]), po[Ln.LIGHT] = uo(s[Ln.LIGHT], po[Ln.LIGHT]), fo((e => ({
                colors: uo(po[e.theme], go[e.theme])
            })))), (null == (i = e.uiPreferences) ? void 0 : i.borderRadius) && (a = e.uiPreferences.borderRadius, fo({
                borderRadius: a
            })), Hl((t => {
                var n, r;
                const o = uo(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, e.language && {
                    language: e.language
                }), !!(null == (n = e.actionsConfiguration) ? void 0 : n.returnStrategy) && {
                    returnStrategy: e.actionsConfiguration.returnStrategy
                }), !!(null == (r = e.actionsConfiguration) ? void 0 : r.twaReturnUrl) && {
                    twaReturnUrl: e.actionsConfiguration.twaReturnUrl
                }), !!e.walletsListConfiguration && {
                    walletsListConfiguration: e.walletsListConfiguration
                }), Hr(t));
                return void 0 !== e.buttonRootId && (o.buttonRootId = e.buttonRootId), void 0 !== e.enableAndroidBackHandler && (o.enableAndroidBackHandler = e.enableAndroidBackHandler), o
            }))
        }
        setConnectRequestParameters(e) {
            var t;
            Hl({
                connectRequestParameters: e
            }), "ready" !== (null == e ? void 0 : e.state) && e || null == (t = this.connectRequestParametersCallback) || t.call(this, null == e ? void 0 : e.value)
        }
        getWallets() {
            return __async(this, null, (function* () {
                return this.connector.getWallets()
            }))
        }
        onStatusChange(e, t) {
            return this.connector.onStatusChange((t => __async(this, null, (function* () {
                if (t) {
                    const n = yield this.getSelectedWalletInfo(t);
                    e(__spreadValues(__spreadValues({}, t), n || this.walletInfoStorage.getWalletInfo()))
                } else e(t)
            }))), t)
        }
        openModal() {
            return __async(this, null, (function* () {
                return this.modal.open()
            }))
        }
        closeModal(e) {
            this.modal.close(e)
        }
        onModalStateChange(e) {
            return this.modal.onStateChange(e)
        }
        get modalState() {
            return this.modal.state
        }
        openSingleWalletModal(e) {
            return __async(this, null, (function* () {
                return this.singleWalletModal.open(e)
            }))
        }
        closeSingleWalletModal(e) {
            this.singleWalletModal.close(e)
        }
        onSingleWalletModalStateChange(e) {
            return this.singleWalletModal.onStateChange(e)
        }
        get singleWalletModalState() {
            return this.singleWalletModal.state
        }
        connectWallet() {
            return __async(this, null, (function* () {
                const e = (yield this.getWallets()).find(Ce);
                return e ? yield this.connectEmbeddedWallet(e): yield this.connectExternalWallet()
            }))
        }
        disconnect() {
            return this.tracker.trackDisconnection(this.wallet, "dapp"), Ku(), qu(), this.walletInfoStorage.removeWalletInfo(), this.connector.disconnect()
        }
        sendTransaction(e, t) {
            return __async(this, null, (function* () {
                if (this.tracker.trackTransactionSentForSignature(this.wallet, e), !this.connected) throw this.tracker.trackTransactionSigningFailed(this.wallet, e, "Wallet was not connected"), new or("Connect wallet to send a transaction.");
                _o() && So();
                const {
                    notifications: n,
                    modals: r,
                    returnStrategy: o,
                    twaReturnUrl: i,
                    skipRedirectToWallet: s
                } = this.getModalsAndNotificationsConfiguration(t);
                Vu({
                    name: "confirm-transaction",
                    showNotification: n.includes("before"),
                    openModal: r.includes("before"),
                    sent: !1
                });
                const a = () => {
                        l.signal.aborted || (Vu({
                            name: "confirm-transaction",
                            showNotification: n.includes("before"),
                            openModal: r.includes("before"),
                            sent: !0
                        }), this.walletInfo && "universalLink" in this.walletInfo && ("universal-link" === this.walletInfo.openMethod || "custom-deeplink" === this.walletInfo.openMethod) && (te(this.walletInfo.universalLink) ? bc(this.walletInfo.universalLink, {
                            returnStrategy: o,
                            twaReturnUrl: i || Dl.twaReturnUrl,
                            forceRedirect: !1
                        }) : Cc(this.walletInfo.universalLink, this.walletInfo.deepLink, {
                            returnStrategy: o,
                            forceRedirect: !1
                        }, (() => {}))))
                    },
                    l = new AbortController,
                    c = this.onTransactionModalStateChange((e => {
                        (null == e ? void 0 : e.openModal) || (c(), e || l.abort())
                    }));
                try {
                    const t = yield this.waitForSendTransaction({
                        transaction: e,
                        signal: l.signal
                    }, a);
                    return this.tracker.trackTransactionSigned(this.wallet, e, t), Vu({
                        name: "transaction-sent",
                        showNotification: n.includes("success"),
                        openModal: r.includes("success")
                    }), t
                } catch (Ju) {
                    throw Vu({
                        name: "transaction-canceled",
                        showNotification: n.includes("error"),
                        openModal: r.includes("error")
                    }), Ju instanceof N ? Ju : (console.error(Ju), new or("Unhandled error:" + Ju))
                } finally {
                    c()
                }
            }))
        }
        connectEmbeddedWallet(e) {
            return __async(this, null, (function* () {
                const t = t => {
                        Ar(e), this.connector.connect({
                            jsBridgeKey: e.jsBridgeKey
                        }, t)
                    },
                    n = Dl.connectRequestParameters;
                return "loading" === (null == n ? void 0 : n.state) ? this.connectRequestParametersCallback = t : t(null == n ? void 0 : n.value), yield this.waitForWalletConnection({
                    ignoreErrors: !1
                })
            }))
        }
        connectExternalWallet() {
            return __async(this, null, (function* () {
                const e = new AbortController;
                ju();
                const t = this.onModalStateChange((n => {
                    const {
                        status: r,
                        closeReason: o
                    } = n;
                    "opened" !== r && (t(), "action-cancelled" === o && e.abort())
                }));
                return yield this.waitForWalletConnection({
                    ignoreErrors: !0,
                    signal: e.signal
                })
            }))
        }
        waitForWalletConnection(e) {
            return __async(this, null, (function* () {
                return new Promise(((t, n) => {
                    this.tracker.trackConnectionStarted();
                    const {
                        ignoreErrors: r = !1,
                        signal: o = null
                    } = e;
                    if (o && o.aborted) return this.tracker.trackConnectionError("Connection was cancelled"), n(new or("Wallet was not connected"));
                    const i = e => __async(this, null, (function* () {
                            if (e) this.tracker.trackConnectionCompleted(e), a(), t(e);
                            else {
                                if (this.tracker.trackConnectionError("Connection was cancelled"), r) return;
                                a(), n(new or("Wallet was not connected"))
                            }
                        })),
                        s = e => {
                            this.tracker.trackConnectionError(e.message), r || (a(), n(e))
                        },
                        a = this.onStatusChange((e => i(e)), (e => s(e)));
                    o && o.addEventListener("abort", (() => {
                        a(), n(new or("Wallet was not connected"))
                    }), {
                        once: !0
                    })
                }))
            }))
        }
        waitForSendTransaction(e, t) {
            return __async(this, null, (function* () {
                return new Promise(((n, r) => {
                    const {
                        transaction: o,
                        signal: i
                    } = e;
                    if (i.aborted) return this.tracker.trackTransactionSigningFailed(this.wallet, o, "Transaction was cancelled"), r(new or("Transaction was not sent"));
                    const s = e => __async(this, null, (function* () {
                            n(e)
                        })),
                        a = () => {
                            this.tracker.trackTransactionSigningFailed(this.wallet, o, "Transaction was cancelled"), r(new or("Transaction was not sent"))
                        };
                    i.addEventListener("abort", a, {
                        once: !0
                    }), this.connector.sendTransaction(o, {
                        onRequestSent: t,
                        signal: i
                    }).then((e => (i.removeEventListener("abort", a), s(e)))).catch((e => (i.removeEventListener("abort", a), (e => {
                        r(e)
                    })(e))))
                }))
            }))
        }
        onTransactionModalStateChange(e) {
            return this.transactionModal.onStateChange(e)
        }
        subscribeToWalletChange() {
            this.connector.onStatusChange((e => __async(this, null, (function* () {
                var t;
                e ? (yield this.updateWalletInfo(e), this.setPreferredWalletAppName((null == (t = this.walletInfo) ? void 0 : t.appName) || e.device.appName)) : this.walletInfoStorage.removeWalletInfo()
            }))))
        }
        setPreferredWalletAppName(e) {
            this.preferredWalletStorage.setPreferredWalletAppName(e), Hl({
                preferredWalletAppName: e
            })
        }
        getSelectedWalletInfo(e) {
            return __async(this, null, (function* () {
                let t, n = Fu();
                if (!n) return null;
                if ("name" in n) t = n;
                else {
                    const r = Kl(yield this.walletsList, Dl.walletsListConfiguration).find((t => Zl(t, e.device.appName)));
                    if (!r) throw new or(`Cannot find WalletInfo for the '${e.device.appName}' wallet`);
                    t = __spreadValues(__spreadValues({}, r), n)
                }
                return t
            }))
        }
        updateWalletInfo(e) {
            return __async(this, null, (function* () {
                const t = yield this.getSelectedWalletInfo(e);
                if (t) return this.walletInfo = t, void this.walletInfoStorage.setWalletInfo(t);
                const n = this.walletInfoStorage.getWalletInfo();
                this.walletInfo = n || ((yield this.walletsList).find((t => Zl(t, e.device.appName))) || null)
            }))
        }
        normalizeWidgetRoot(e) {
            if (!e || !document.getElementById(e)) {
                e = "tc-widget-root";
                const t = document.createElement("div");
                t.id = e, document.body.appendChild(t)
            }
            return e
        }
        checkButtonRootExist(e) {
            if (null != e && !document.getElementById(e)) throw new or(`${e} element not found in the document.`)
        }
        getModalsAndNotificationsConfiguration(e) {
            var t, n, r, o, i, s;
            const a = ["before", "success", "error"];
            let l = a;
            (null == (t = this.actionsConfiguration) ? void 0 : t.notifications) && "all" !== (null == (n = this.actionsConfiguration) ? void 0 : n.notifications) && (l = this.actionsConfiguration.notifications), (null == e ? void 0 : e.notifications) && (l = "all" === e.notifications ? a : e.notifications);
            let c = ["before"];
            (null == (r = this.actionsConfiguration) ? void 0 : r.modals) && (c = "all" === this.actionsConfiguration.modals ? a : this.actionsConfiguration.modals), (null == e ? void 0 : e.modals) && (c = "all" === e.modals ? a : e.modals);
            const u = (null == e ? void 0 : e.returnStrategy) || (null == (o = this.actionsConfiguration) ? void 0 : o.returnStrategy) || "back",
                d = (null == e ? void 0 : e.twaReturnUrl) || (null == (i = this.actionsConfiguration) ? void 0 : i.twaReturnUrl);
            let h = (null == e ? void 0 : e.skipRedirectToWallet) || (null == (s = this.actionsConfiguration) ? void 0 : s.skipRedirectToWallet) || "ios";
            return _o() && (h = "never"), {
                notifications: l,
                modals: c,
                returnStrategy: u,
                twaReturnUrl: d,
                skipRedirectToWallet: h
            }
        }
    }, e.TonConnectUIError = or, e.UnknownAppError = D, e.UnknownError = z, e.UserRejectsError = j, e.WalletAlreadyConnectedError = U, e.WalletNotConnectedError = W, e.WalletNotInjectedError = H, e.WalletsListManager = Se, e.WrongAddressError = F, e.createConnectionCompletedEvent = Ne, e.createConnectionErrorEvent = Pe, e.createConnectionRestoringCompletedEvent = Ie, e.createConnectionRestoringErrorEvent = Ue, e.createConnectionRestoringStartedEvent = $e, e.createConnectionStartedEvent = Oe, e.createDisconnectionEvent = He, e.createRequestVersionEvent = Te, e.createResponseVersionEvent = Le, e.createTransactionSentForSignatureEvent = je, e.createTransactionSignedEvent = Be, e.createTransactionSigningFailedEvent = De, e.createVersionInfo = Ae, e.encodeTelegramUrlParameters = ne, e.isTelegramUrl = te, e.isWalletInfoCurrentlyEmbedded = Ce, e.isWalletInfoCurrentlyInjected = be, e.isWalletInfoInjectable = xe, e.isWalletInfoInjected = function (e) {
        return "jsBridgeKey" in e
    }, e.isWalletInfoRemote = _e, e.toUserFriendlyAddress = Ze, Object.defineProperties(e, {
        __esModule: {
            value: !0
        },
        [Symbol.toStringTag]: {
            value: "Module"
        }
    })
}));
//# sourceMappingURL=tonconnect-ui.min.js.map