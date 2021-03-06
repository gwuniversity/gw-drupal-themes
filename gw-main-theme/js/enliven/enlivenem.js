/******************************************************************************
 * @name:       enlivenem.min.js
                the main minified file of Enliven 'em script
 * @version:    1.6
 * @URL:        http://enlivenem.com
 * @copyright:  (c) 2014-2018 DeeThemes (http://codecanyon.net/user/DeeThemes)
 * @licenses:   http://codecanyon.net/licenses/regular
                http://codecanyon.net/licenses/extended
******************************************************************************/
if (void 0 === window.jQuery || void 0 === window.Elvn_Snap || void 0 === window.Elvn_verge) throw window.alert("Enliven' em animation engine requires jQuery and enlivenem.tools.js"), Error("Enliven' em animation engine requires jQuery and enlivenem.tools.js. Please check the scripts' declarations.");
(function(A) {
    function U(b, f) {
        return Math.floor(Math.random() * (f - b + 1)) + b
    }

    function L() {
        L.counter += 1;
        return L.counter
    }

    function I(b) {
        return null === b || "object" !== typeof b ? b : JSON.parse(JSON.stringify(b))
    }

    function V(b) {
        var f = [],
            e;
        for (e = b.length - 1; 0 <= e; --e) f.push(b[e]);
        return f
    }

    function W(b, f, e, h) {
        var p = h.x + "," + h.y,
            l = h.cx + "," + h.y,
            c = h.x2 + "," + h.y,
            t = h.x2 + "," + h.cy,
            q = h.x2 + "," + h.y2,
            C = h.cx + "," + h.y2,
            a = h.x + "," + h.y2,
            d = h.x + "," + h.cy,
            g = h.cx + "," + h.cy,
            v = h.w,
            k = h.h;
        f = JSON.stringify({
            expandT: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "s1,0," + l
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "s1,1," + l
                }
            }],
            expandR: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "s0,1," + t
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "s1,1," + t
                }
            }],
            expandB: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "s1,0," + C
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "s1,1," + C
                }
            }],
            expandL: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "s0,1," + d
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "s1,1," + d
                }
            }],
            expandY: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "s1,0," + d
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "s1,1," + d
                }
            }],
            expandX: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "s0,1," + l
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "s1,1," + l
                }
            }],
            fade: [{
                dI: 0,
                dO: 100,
                a: {
                    o: 0
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    o: 1
                }
            }],
            fadeShortTL: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "t" + -(20 > v / 4 ? 20 : v / 4) + "," + -(20 > k / 4 ? 20 : k /
                        4),
                    o: 0
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "",
                    o: 1
                }
            }],
            fadeShortT: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "t0," + -(20 > k / 4 ? 20 : k / 4),
                    o: 0
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "",
                    o: 1
                }
            }],
            fadeShortTR: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "t" + (20 > v / 4 ? 20 : v / 4) + "," + -(20 > k / 4 ? 20 : k / 4),
                    o: 0
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "",
                    o: 1
                }
            }],
            fadeShortR: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "t" + (20 > v / 4 ? 20 : v / 4) + ",0",
                    o: 0
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "",
                    o: 1
                }
            }],
            fadeShortBR: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "t" + (20 > v / 4 ? 20 : v / 4) + "," + (20 > k / 4 ? 20 : k / 4),
                    o: 0
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "",
                    o: 1
                }
            }],
            fadeShortB: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "t0," + (20 > k / 4 ? 20 : k / 4),
                    o: 0
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "",
                    o: 1
                }
            }],
            fadeShortBL: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "t" + -(20 > v / 4 ? 20 : v / 4) + "," + (20 > k / 4 ? 20 : k / 4),
                    o: 0
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "",
                    o: 1
                }
            }],
            fadeShortL: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "t" + -(20 > v / 4 ? 20 : v / 4) + ",0",
                    o: 0
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "",
                    o: 1
                }
            }],
            fadeLongTL: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "t" + -h.x2 + "," + -h.y2,
                    o: 0
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "",
                    o: 1
                }
            }],
            fadeLongT: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "t0," + -h.y2,
                    o: 0
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "",
                    o: 1
                }
            }],
            fadeLongTR: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "t" + (f - h.x) + "," + -h.y2,
                    o: 0
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "",
                    o: 1
                }
            }],
            fadeLongR: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "t" + (f - h.x) + ",0",
                    o: 0
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "",
                    o: 1
                }
            }],
            fadeLongBR: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "t" + (f - h.x) + "," + (e - h.y),
                    o: 0
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "",
                    o: 1
                }
            }],
            fadeLongB: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "t0," + (f - h.y),
                    o: 0
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "",
                    o: 1
                }
            }],
            fadeLongBL: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "t" + -h.x2 + "," + (e - h.y),
                    o: 0
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "",
                    o: 1
                }
            }],
            fadeLongL: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "t" + -h.x2 + ",0",
                    o: 0
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "",
                    o: 1
                }
            }],
            flipX: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "s-1,1.3",
                    o: 0
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "s1,1",
                    o: 1
                }
            }],
            flipY: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "s1.3,-1",
                    o: 0
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "s1,1",
                    o: 1
                }
            }],
            flyC: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "t" + (f / 2 - h.cx) + "," + (e / 2 - h.cy),
                    o: 0
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "",
                    o: 1
                }
            }],
            flyRotateC: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "t" + (f / 2 - h.cx) + "," + (e / 2 - h.cy) + "r0",
                    o: 0
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "t0,0r360",
                    o: 1
                }
            }],
            flyScaleC: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "t" + (f / 2 - h.cx) + "," + (e / 2 - h.cy) + "s2,2",
                    o: 0
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "",
                    o: 1
                }
            }],
            pulse: [{
                dI: 0,
                dO: 30,
                a: {
                    t: "s0,0",
                    o: 0
                }
            }, {
                dI: 30,
                dO: 10,
                aI: {
                    t: "s0.8,0.8",
                    o: .8
                },
                aO: {
                    t: "s0.8,0.8",
                    o: .8
                }
            }, {
                dI: 10,
                dO: 20,
                aI: {
                    t: "s0.5,0.5",
                    o: .6
                },
                aO: {
                    t: "s0.5,0.5",
                    o: .6
                }
            }, {
                dI: 20,
                dO: 10,
                aI: {
                    t: "s1,1",
                    o: 1
                },
                aO: {
                    t: "s1,1",
                    o: 1
                }
            }, {
                dI: 10,
                dO: 20,
                aI: {
                    t: "s0.7,0.7",
                    o: .8
                },
                aO: {
                    t: "s0.7,0.7",
                    o: .8
                }
            }, {
                dI: 20,
                dO: 10,
                aI: {
                    t: "s1.2,1.2",
                    o: 1
                },
                aO: {
                    t: "s1.2,1.2",
                    o: 1
                }
            }, {
                dI: 10,
                dO: 0,
                a: {
                    t: "s1,1",
                    o: 1
                }
            }],
            rubberX: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "s2,0.62",
                    o: 0
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "s1,1",
                    o: 1
                }
            }],
            rubberY: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "s0.62,2",
                    o: 0
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "s1,1",
                    o: 1
                }
            }],
            scaleTL: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "s0,0," + p
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "s1,1," + p
                }
            }],
            scaleT: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "s0,0," + l
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "s1,1," + l
                }
            }],
            scaleTR: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "s0,0," + c
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "s1,1," + c
                }
            }],
            scaleR: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "s0,0," + t
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "s1,1," + t
                }
            }],
            scaleBR: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "s0,0," + q
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "s1,1," + q
                }
            }],
            scaleB: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "s0,0," + C
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "s1,1," + C
                }
            }],
            scaleBL: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "s0,0," + a
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "s1,1," + a
                }
            }],
            scaleL: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "s0,0," + d
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "s1,1," + d
                }
            }],
            scaleC: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "s0,0," + g
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "s1,1," + g
                }
            }],
            stamp: [{
                dI: 0,
                dO: 70,
                a: {
                    t: "s3,3",
                    o: 0
                }
            }, {
                dI: 70,
                dO: 30,
                aI: {
                    t: "s0.7,0.7",
                    o: .3
                },
                aO: {
                    t: "s0.7,0.7",
                    o: .3
                }
            }, {
                dI: 30,
                dO: 0,
                a: {
                    t: "s1,1",
                    o: 1
                }
            }],
            wheelC: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "t0,0r0",
                    o: 0
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "t0,0r720",
                    o: 1
                }
            }],
            wheelL: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "t" + -h.x2 + ",0r0",
                    o: 0
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "t0,0r720",
                    o: 1
                }
            }],
            wheelR: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "t" + (f - h.x) + ",0r0",
                    o: 0
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "t0,0r-720",
                    o: 1
                }
            }],
            wheelB: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "t0," + (f - h.y) + "r0",
                    o: 0
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "t0,0r-720",
                    o: 1
                }
            }],
            wheelT: [{
                dI: 0,
                dO: 100,
                a: {
                    t: "t0," + -h.y2 + "r0",
                    o: 0
                }
            }, {
                dI: 100,
                dO: 0,
                a: {
                    t: "t0,0r720",
                    o: 1
                }
            }]
        });
        f = f.replace(/"o":/g, '"opacity":').replace(/"t":/g, '"transform":');
        f = JSON.parse(f);
        return void 0 !== f[b] ? I(f[b]) : I(f.fadeShortL)
    }

    function O(b, f, e, h, F, l, c) {
        function M(a, b, c) {
            if (-1 !== "circle ellipse line path polygon polyline rect".split(" ").indexOf(a.type.toLowerCase())) {
                J = a.cloneToPath();
                var d = J.select("path");
                var e = d.getTotalLength();
                a.attr("opacity", 0);
                d.attr({
                    fill: "none",
                    stroke: X,
                    strokeOpacity: 0,
                    strokeWidth: Y,
                    strokeLinecap: "round",
                    strokeDashoffset: e,
                    strokeDasharray: "0 " + e + " " + e + " 0"
                });
                var g = [];
                var h = b ? U(.5 * k, .8 * k) : .8 * k;
                g[0] = setTimeout(function() {
                    d.attr({
                        strokeOpacity: 1
                    });
                    p.animate(0, -e, function(a) {
                        d.attr({
                            strokeDashoffset: a
                        })
                    }, h, t.easeinout)
                }, z);
                F.push(g[0]);
                g[1] = setTimeout(function() {
                    a.animate({
                        opacity: c
                    }, k - 1.1 * h);
                    d.animate({
                        opacity: 0
                    }, k - h, t.linear, function() {
                        J.remove()
                    })
                }, z + h);
                F.push(g[1])
            }
        }

        function q() {
            return function() {
                A(G.node).removeAttr("mask")
            }
        }

        function C(a, b) {
            var c = setTimeout(function() {
                y.animate(B[a])
            }, E[a]);
            b.push(c)
        }
        var a = b.attr("data-elvn"),
            d = !1;
        navigator.userAgent.toUpperCase().match(/MSIE\s9/) && a && a.match(/gaussBlur/) && (a = a.replace(/gaussBlur/, "fade"));
        if (!(!a || a.match(/drawLines/) || a.match(/mask/) || a.match(/gaussBlur/) || a.match(/custom/) || a.match(/morph/) || a.match(/alongPath/))) {
            void 0 !== window.ActiveXObject && (d = !0);
            a = a.replace(/\s+/g, "").split(",");
            var g = a[0];
            var v = a[1];
            l = Number(a[2]) + l;
            var k = Number(a[3]);
            var w = a[4];
            var B = [];
            var E = [];
            a = b.getBBox();
            c && (l = 0);
            c = b.parent();
            if (c.hasClass("elvn-wrapper")) var y = c;
            else y = f.g(), y.insertBefore(b).add(b).addClass("elvn-wrapper");
            E[0] = l;
            switch (w) {
                case "backin":
                    var m = t.backin;
                    break;
                case "backout":
                    m = t.backout;
                    break;
                case "bounce":
                    m = t.bounce;
                    break;
                case "easein":
                    m = t.easein;
                    break;
                case "easeinout":
                    m = t.easeinout;
                    break;
                case "easeout":
                    m = t.easeout;
                    break;
                case "elastic":
                    m = t.elastic;
                    break;
                default:
                    m = t.linear
            }
            f = W(g, e, h, a);
            "out" === v && (f = V(f));
            if (d)
                for (a = 0; a < f.length; a += 1) f[a].a && (f[a].a.transform && f[a].a.transform.match(/s0,0,/) && (f[a].a.transform = f[a].a.transform.replace(/s0,0,/g, "s0.001,0.001,")), f[a].a.transform && f[a].a.transform.match(/s0,1,/) && (f[a].a.transform = f[a].a.transform.replace(/s0,1,/g, "s0.001,1.0,")),
                    f[a].a.transform && f[a].a.transform.match(/s1,0,/) && (f[a].a.transform = f[a].a.transform.replace(/s1,0,/g, "s1.0,0.001,")));
            y.attr(f[0].a);
            for (a = 1; a < f.length; a += 1) "in" === v ? (g = f[a].aI ? f[a].aI : f[a].a, a === f.length - 1 ? B.push(p.animation(g, k * f[a].dI / 100, m)) : B.push(p.animation(g, k * f[a].dI / 100)), E.push(k * f[a].dI / 100)) : (g = f[a].aO ? f[a].aO : f[a].a, a === f.length - 1 ? B.push(p.animation(g, k * f[a].dO / 100, m)) : B.push(p.animation(g, k * f[a].dO / 100)), E.push(k * f[a].dO / 100));
            for (a = 1; a < E.length; a += 1) E[a] += E[a - 1];
            for (a = 0; a < B.length; a +=
                1) C(a, F)
        } else if (a && a.match(/drawLines/)) {
            a = a.replace(/\s+/g, "").split(",");
            var z = Number(a[1]) + l;
            k = Number(a[2]);
            var X = a[3];
            var Y = a[4];
            var H = a[5];
            c && (z = 0);
            if ("g" !== b.type.toLowerCase()) {
                if (A(b.node).data("first-opacity")) var D = A(b.node).data("first-opacity");
                else D = b.attr("opacity"), A(b.node).data("first-opacity", D);
                M(b, !1, D)
            } else b.selectAll("*").forEach(function(a) {
                a.hasClass("elvn-layer") || (A(a.node).data("first-opacity") ? D = A(a.node).data("first-opacity") : (D = a.attr("opacity"), A(a.node).data("first-opacity",
                    D)), "random" === H ? M(a, !0, D) : M(a, !1, D))
            })
        } else if (a && a.match(/mask/)) {
            a = a.replace(/\s+/g, "").split(",");
            g = a[0];
            v = a[1];
            z = Number(a[2]) + l;
            k = Number(a[3]);
            w = a[4];
            B = [];
            E = [];
            y = f.g();
            a = b.parent();
            c && (z = 0);
            if (a.hasClass("elvn-wrapper")) var G = a;
            else G = f.g(), G.insertBefore(b).add(b).addClass("elvn-wrapper");
            a = G.getBBox();
            var u = 0;
            G.selectAll("*").forEach(function(a) {
                a.attr("stroke-width") && (a = Number(a.attr("stroke-width").replace(/[^0-9.]/g, "")), a > u && (u = a))
            });
            switch (w) {
                case "backin":
                    m = t.backin;
                    break;
                case "backout":
                    m =
                        t.backout;
                    break;
                case "bounce":
                    m = t.bounce;
                    break;
                case "easein":
                    m = t.easein;
                    break;
                case "easeinout":
                    m = t.easeinout;
                    break;
                case "easeout":
                    m = t.easeout;
                    break;
                case "elastic":
                    m = t.elastic;
                    break;
                default:
                    m = t.linear
            }
            b = a.x - u / 2 - 1;
            c = a.y - u / 2 - 1;
            d = a.w + u + 2;
            e = a.h + u + 2;
            h = b + d;
            l = c + e;
            w = a.cx;
            var x = a.cy;
            var K = a.r0 + u + 1;
            switch (g) {
                case "maskStairsL":
                    g = e / 6;
                    var n = f.path("M" + h + "," + l + "L" + h + "," + (l - g) + "L" + (h + g) + "," + (l - g) + "L" + (h + g) + "," + (l - 2 * g) + "L" + (h + 2 * g) + "," + (l - 2 * g) + "L" + (h + 2 * g) + "," + (l - 3 * g) + "L" + (h + 3 * g) + "," + (l - 3 * g) + "L" + (h + 3 * g) + "," + (l - 4 * g) +
                        "L" + (h + 4 * g) + "," + (l - 4 * g) + "L" + (h + 4 * g) + "," + (l - 5 * g) + "L" + (h + 5 * g) + "," + (l - 5 * g) + "L" + (h + 5 * g) + "," + c + "L" + b + "," + c + "L" + b + "," + l + "z").attr("fill", "#fff");
                    if ("in" === v) {
                        n.attr({
                            transform: "t" + -(d + e) + ",0"
                        });
                        var r = p.animation({
                            transform: "t0,0"
                        }, k, m, q())
                    } else n.attr({
                        transform: "t0,0"
                    }), r = p.animation({
                        transform: "t" + -(d + e) + ",0"
                    }, k, m);
                    break;
                case "maskStairsR":
                    g = e / 6;
                    n = f.path("M" + b + "," + l + "L" + b + "," + (l - g) + "L" + (b - g) + "," + (l - g) + "L" + (b - g) + "," + (l - 2 * g) + "L" + (b - 2 * g) + "," + (l - 2 * g) + "L" + (b - 2 * g) + "," + (l - 3 * g) + "L" + (b - 3 * g) + "," + (l - 3 * g) + "L" + (b -
                        3 * g) + "," + (l - 4 * g) + "L" + (b - 4 * g) + "," + (l - 4 * g) + "L" + (b - 4 * g) + "," + (l - 5 * g) + "L" + (b - 5 * g) + "," + (l - 5 * g) + "L" + (b - 5 * g) + "," + c + "L" + h + "," + c + "L" + h + "," + l + "z").attr("fill", "#fff");
                    "in" === v ? (n.attr({
                        transform: "t" + (d + e) + ",0"
                    }), r = p.animation({
                        transform: "t0,0"
                    }, k, m, q())) : (n.attr({
                        transform: "t0,0"
                    }), r = p.animation({
                        transform: "t" + (d + e) + ",0"
                    }, k, m));
                    break;
                case "maskStairsT":
                    g = d / 6;
                    n = f.path("M" + h + "," + l + "L" + (h - g) + "," + l + "L" + (h - g) + "," + (l + g) + "L" + (h - 2 * g) + "," + (l + g) + "L" + (h - 2 * g) + "," + (l + 2 * g) + "L" + (h - 3 * g) + "," + (l + 2 * g) + "L" + (h - 3 * g) + "," + (l + 3 * g) +
                        "L" + (h - 4 * g) + "," + (l + 3 * g) + "L" + (h - 4 * g) + "," + (l + 4 * g) + "L" + (h - 5 * g) + "," + (l + 4 * g) + "L" + (h - 5 * g) + "," + (l + 5 * g) + "L" + b + "," + (l + 5 * g) + "L" + b + "," + c + "L" + h + "," + c + "z").attr("fill", "#fff");
                    "in" === v ? (n.attr({
                        transform: "t0," + -(e + d)
                    }), r = p.animation({
                        transform: "t0,0"
                    }, k, m, q())) : (n.attr({
                        transform: "t0,0"
                    }), r = p.animation({
                        transform: "t0," + -(e + d)
                    }, k, m));
                    break;
                case "maskStairsB":
                    g = d / 6;
                    n = f.path("M" + h + "," + c + "L" + (h - g) + "," + c + "L" + (h - g) + "," + (c - g) + "L" + (h - 2 * g) + "," + (c - g) + "L" + (h - 2 * g) + "," + (c - 2 * g) + "L" + (h - 3 * g) + "," + (c - 2 * g) + "L" + (h - 3 * g) + "," + (c - 3 *
                        g) + "L" + (h - 4 * g) + "," + (c - 3 * g) + "L" + (h - 4 * g) + "," + (c - 4 * g) + "L" + (h - 5 * g) + "," + (c - 4 * g) + "L" + (h - 5 * g) + "," + (c - 5 * g) + "L" + b + "," + (c - 5 * g) + "L" + b + "," + l + "L" + h + "," + l + "z").attr("fill", "#fff");
                    "in" === v ? (n.attr({
                        transform: "t0," + (e + d)
                    }), r = p.animation({
                        transform: "t0,0"
                    }, k, m, q())) : (n.attr({
                        transform: "t0,0"
                    }), r = p.animation({
                        transform: "t0," + (e + d)
                    }, k, m));
                    break;
                case "maskStackX":
                    e /= 6;
                    g = "M" + b + "," + c + "L" + (b + d) + "," + c + "L" + (b + d) + "," + (c + e) + "L" + b + "," + (c + e) + "zM" + b + "," + (c + e) + "L" + (b + d) + "," + (c + e) + "L" + (b + d) + "," + (c + 2 * e) + "L" + b + "," + (c + 2 * e) + "zM" + b +
                        "," + (c + 2 * e) + "L" + (b + d) + "," + (c + 2 * e) + "L" + (b + d) + "," + (c + 3 * e) + "L" + b + "," + (c + 3 * e) + "zM" + b + "," + (c + 3 * e) + "L" + (b + d) + "," + (c + 3 * e) + "L" + (b + d) + "," + (c + 4 * e) + "L" + b + "," + (c + 4 * e) + "zM" + b + "," + (c + 4 * e) + "L" + (b + d) + "," + (c + 4 * e) + "L" + (b + d) + "," + (c + 5 * e) + "L" + b + "," + (c + 5 * e) + "zM" + b + "," + (c + 5 * e) + "L" + (b + d) + "," + (c + 5 * e) + "L" + (b + d) + "," + (c + 6 * e) + "L" + b + "," + (c + 6 * e) + "z";
                    a = "M" + (b - d) + "," + c + "L" + b + "," + c + "L" + b + "," + (c + e) + "L" + (b - d) + "," + (c + e) + "zM" + h + "," + (c + e) + "L" + (h + d) + "," + (c + e) + "L" + (h + d) + "," + (c + 2 * e) + "L" + h + "," + (c + 2 * e) + "zM" + (b - d) + "," + (c + 2 * e) + "L" + b + "," + (c + 2 *
                        e) + "L" + b + "," + (c + 3 * e) + "L" + (b - d) + "," + (c + 3 * e) + "zM" + h + "," + (c + 3 * e) + "L" + (h + d) + "," + (c + 3 * e) + "L" + (h + d) + "," + (c + 4 * e) + "L" + h + "," + (c + 4 * e) + "zM" + (b - d) + "," + (c + 4 * e) + "L" + b + "," + (c + 4 * e) + "L" + b + "," + (c + 5 * e) + "L" + (b - d) + "," + (c + 5 * e) + "zM" + h + "," + (c + 5 * e) + "L" + (h + d) + "," + (c + 5 * e) + "L" + (h + d) + "," + (c + 6 * e) + "L" + h + "," + (c + 6 * e) + "z";
                    n = f.path(a).attr("fill", "#fff");
                    "in" === v ? (n.attr({
                        d: a
                    }), r = p.animation({
                        d: g
                    }, k, m, q())) : (n.attr({
                        d: g
                    }), r = p.animation({
                        d: a
                    }, k, m));
                    break;
                case "maskStackY":
                    d /= 6;
                    g = "M" + b + "," + c + "L" + (b + d) + "," + c + "L" + (b + d) + "," + l + "L" + b + "," +
                        l + "zM" + (b + d) + "," + c + "L" + (b + 2 * d) + "," + c + "L" + (b + 2 * d) + "," + l + "L" + (b + d) + "," + l + "zM" + (b + 2 * d) + "," + c + "L" + (b + 3 * d) + "," + c + "L" + (b + 3 * d) + "," + l + "L" + (b + 2 * d) + "," + l + "zM" + (b + 3 * d) + "," + c + "L" + (b + 4 * d) + "," + c + "L" + (b + 4 * d) + "," + l + "L" + (b + 3 * d) + "," + l + "zM" + (b + 4 * d) + "," + c + "L" + (b + 5 * d) + "," + c + "L" + (b + 5 * d) + "," + l + "L" + (b + 4 * d) + "," + l + "zM" + (b + 5 * d) + "," + c + "L" + (b + 6 * d) + "," + c + "L" + (b + 6 * d) + "," + l + "L" + (b + 5 * d) + "," + l + "z";
                    a = "M" + b + "," + (c - e) + "L" + (b + d) + "," + (c - e) + "L" + (b + d) + "," + c + "L" + b + "," + c + "zM" + (b + d) + "," + l + "L" + (b + 2 * d) + "," + l + "L" + (b + 2 * d) + "," + (l + e) + "L" + (b + d) + "," +
                        (l + e) + "zM" + (b + 2 * d) + "," + (c - e) + "L" + (b + 3 * d) + "," + (c - e) + "L" + (b + 3 * d) + "," + c + "L" + (b + 2 * d) + "," + c + "zM" + (b + 3 * d) + "," + l + "L" + (b + 4 * d) + "," + l + "L" + (b + 4 * d) + "," + (l + e) + "L" + (b + 3 * d) + "," + (l + e) + "zM" + (b + 4 * d) + "," + (c - e) + "L" + (b + 5 * d) + "," + (c - e) + "L" + (b + 5 * d) + "," + c + "L" + (b + 4 * d) + "," + c + "zM" + (b + 5 * d) + "," + l + "L" + (b + 6 * d) + "," + l + "L" + (b + 6 * d) + "," + (l + e) + "L" + (b + 5 * d) + "," + (l + e) + "z";
                    n = f.path(a).attr("fill", "#fff");
                    "in" === v ? (n.attr({
                        d: a
                    }), r = p.animation({
                        d: g
                    }, k, m, q())) : (n.attr({
                        d: g
                    }), r = p.animation({
                        d: a
                    }, k, m));
                    break;
                case "maskTighten":
                    g = "M" + b + "," + c + "L" +
                        h + "," + c + "L" + w + "," + x + "zM" + h + "," + c + "L" + h + "," + l + "L" + w + "," + x + "zM" + h + "," + l + "L" + b + "," + l + "L" + w + "," + x + "zM" + b + "," + l + "L" + b + "," + c + "L" + w + "," + x + "z";
                    a = "M" + b + "," + c + "L" + h + "," + c + "L" + w + "," + c + "zM" + h + "," + c + "L" + h + "," + l + "L" + h + "," + x + "zM" + h + "," + l + "L" + b + "," + l + "L" + w + "," + l + "zM" + b + "," + l + "L" + b + "," + c + "L" + b + "," + x + "z";
                    n = f.path(g).attr("fill", "#fff");
                    "in" === v ? (n.attr({
                        d: a
                    }), r = p.animation({
                        d: g
                    }, k, m, q())) : (n.attr({
                        d: g
                    }), r = p.animation({
                        d: a
                    }, k, m));
                    break;
                case "maskRect":
                    n = f.rect(b, c, d, e);
                    n.attr({
                        fill: "#fff"
                    });
                    "in" === v ? (n.attr({
                            transform: "s0,0"
                        }),
                        r = p.animation({
                            transform: "s1,1"
                        }, k, m, q())) : (n.attr({
                        transform: "s1,1"
                    }), r = p.animation({
                        transform: "s0,0"
                    }, k, m));
                    break;
                case "maskEllipse":
                    n = f.ellipse(a.cx, a.cy, 10, 5);
                    n.attr({
                        fill: "#fff"
                    });
                    "in" === v ? (n.attr({
                        transform: "s0,0"
                    }), r = p.animation({
                        transform: "s" + d / 14 + "," + e / 7
                    }, k, m, q())) : (n.attr({
                        transform: "s" + d / 14 + "," + e / 7
                    }), r = p.animation({
                        transform: "s0,0"
                    }, k, m));
                    break;
                case "maskCircle":
                    n = f.circle(a.cx, a.cy, K);
                    n.attr({
                        fill: "#fff"
                    });
                    "in" === v ? (n.attr({
                        r: 0
                    }), r = p.animation({
                        r: K
                    }, k, m, q())) : (n.attr({
                        r: K
                    }), r = p.animation({
                            r: 0
                        },
                        k, m));
                    break;
                case "maskRhomb":
                    n = f.path("M" + a.cx + "," + (a.cy - e) + "L" + (a.cx + d) + "," + a.cy + "L" + a.cx + "," + (a.cy + e) + "L" + (a.cx - d) + "," + a.cy + "z").attr("fill", "#fff");
                    "in" === v ? (n.attr({
                        transform: "s0,0"
                    }), r = p.animation({
                        transform: "s1,1"
                    }, k, m, q())) : (n.attr({
                        transform: "s1,1"
                    }), r = p.animation({
                        transform: "s0,0"
                    }, k, m));
                    break;
                case "maskPlus":
                    g = "M" + w + "," + x + "L" + w + "," + c + "L" + w + "," + c + "L" + w + "," + x + "L" + h + "," + x + "L" + h + "," + x + "L" + w + "," + x + "L" + w + "," + l + "L" + w + "," + l + "L" + w + "," + x + "L" + b + "," + x + "L" + b + "," + x + "z";
                    a = "M" + b + "," + c + "L" + b + "," + c + "L" + h +
                        "," + c + "L" + h + "," + c + "L" + h + "," + c + "L" + h + "," + l + "L" + h + "," + l + "L" + h + "," + l + "L" + b + "," + l + "L" + b + "," + l + "L" + b + "," + l + "L" + b + "," + c + "z";
                    n = f.path(a).attr("fill", "#fff");
                    "in" === v ? (n.attr({
                        d: g
                    }), r = p.animation({
                        d: a
                    }, k, m, q())) : (n.attr({
                        d: a
                    }), r = p.animation({
                        d: g
                    }, k, m));
                    break;
                case "maskPlusRotate":
                    g = "M" + w + "," + x + "L" + w + "," + c + "L" + w + "," + c + "L" + w + "," + x + "L" + h + "," + x + "L" + h + "," + x + "L" + w + "," + x + "L" + w + "," + l + "L" + w + "," + l + "L" + w + "," + x + "L" + b + "," + x + "L" + b + "," + x + "z";
                    a = "M" + b + "," + c + "L" + b + "," + c + "L" + h + "," + c + "L" + h + "," + c + "L" + h + "," + c + "L" + h + "," + l + "L" +
                        h + "," + l + "L" + h + "," + l + "L" + b + "," + l + "L" + b + "," + l + "L" + b + "," + l + "L" + b + "," + c + "z";
                    n = f.path(a).attr("fill", "#fff");
                    "in" === v ? (n.attr({
                        d: g,
                        transform: "t0,0r-180"
                    }), r = p.animation({
                        d: a,
                        transform: "t0,0r0"
                    }, k, m, q())) : (n.attr({
                        d: a,
                        transform: "t0,0r0"
                    }), r = p.animation({
                        d: g,
                        transform: "t0,0r-180"
                    }, k, m));
                    break;
                case "maskCross":
                    g = "M" + w + "," + x + "L" + h + "," + c + "L" + h + "," + c + "L" + w + "," + x + "L" + h + "," + l + "L" + h + "," + l + "L" + w + "," + x + "L" + b + "," + l + "L" + b + "," + l + "L" + w + "," + x + "L" + b + "," + c + "L" + b + "," + c + "z";
                    a = "M" + w + "," + c + "L" + h + "," + (c - e / 2) + "L" + (h + d / 2) + "," +
                        c + "L" + h + "," + x + "L" + (h + d / 2) + "," + l + "L" + h + "," + (l + e / 2) + "L" + w + "," + l + "L" + b + "," + (l + e / 2) + "L" + (b - d / 2) + "," + l + "L" + b + "," + x + "L" + (b - d / 2) + "," + c + "L" + b + "," + (c - e / 2) + "z";
                    n = f.path(a).attr("fill", "#fff");
                    "in" === v ? (n.attr({
                        d: g
                    }), r = p.animation({
                        d: a
                    }, k, m, q())) : (n.attr({
                        d: a
                    }), r = p.animation({
                        d: g
                    }, k, m));
                    break;
                case "maskCrossRotate":
                    g = "M" + w + "," + x + "L" + h + "," + c + "L" + h + "," + c + "L" + w + "," + x + "L" + h + "," + l + "L" + h + "," + l + "L" + w + "," + x + "L" + b + "," + l + "L" + b + "," + l + "L" + w + "," + x + "L" + b + "," + c + "L" + b + "," + c + "z";
                    a = "M" + w + "," + c + "L" + h + "," + (c - e / 2) + "L" + (h + d / 2) + "," +
                        c + "L" + h + "," + x + "L" + (h + d / 2) + "," + l + "L" + h + "," + (l + e / 2) + "L" + w + "," + l + "L" + b + "," + (l + e / 2) + "L" + (b - d / 2) + "," + l + "L" + b + "," + x + "L" + (b - d / 2) + "," + c + "L" + b + "," + (c - e / 2) + "z";
                    n = f.path(a).attr("fill", "#fff");
                    "in" === v ? (n.attr({
                        d: g,
                        transform: "t0,0r-180"
                    }), r = p.animation({
                        d: a,
                        transform: "t0,0r0"
                    }, k, m, q())) : (n.attr({
                        d: a,
                        transform: "t0,0r0"
                    }), r = p.animation({
                        d: g,
                        transform: "t0,0r-180"
                    }, k, m));
                    break;
                case "maskExpand":
                    g = "M" + (a.x - u) + "," + a.cy + "L" + (a.x - u) + "," + (a.y - u) + "L" + a.cx + "," + (a.y - u) + "L" + (a.x2 + u) + "," + (a.y - u) + "L" + (a.x2 + u) + "," + a.cy + "L" +
                        (a.x2 + u) + "," + (a.y2 + u) + "L" + a.cx + "," + (a.y2 + u) + "L" + (a.x - u) + "," + (a.y2 + u) + "z";
                    a = "M" + (a.x - u) + "," + a.cy + "L" + a.cx + "," + a.cy + "L" + a.cx + "," + (a.y - u) + "L" + a.cx + "," + a.cy + "L" + (a.x2 + u) + "," + a.cy + "L" + a.cx + "," + a.cy + "L" + a.cx + "," + (a.y2 + u) + "L" + a.cx + "," + a.cy + "z";
                    n = f.path(g).attr("fill", "#fff");
                    "in" === v ? (n.attr({
                        d: a
                    }), r = p.animation({
                        d: g
                    }, k, m, q())) : (n.attr({
                        d: g
                    }), r = p.animation({
                        d: a
                    }, k, m));
                    break;
                case "maskClockOne":
                    g = "M" + a.cx + "," + a.cy + "L" + a.cx + "," + (a.cy - a.h - u - 2) + "L" + (a.cx + a.w + u + 2) + "," + a.cy + "zM" + a.cx + "," + a.cy + "L" + (a.cx + a.w + u +
                        2) + "," + a.cy + "L" + a.cx + "," + (a.cy + a.h + u + 2) + "zM" + a.cx + "," + a.cy + "L" + a.cx + "," + (a.cy + a.h + u + 2) + "L" + (a.cx - a.w - u - 2) + "," + a.cy + "zM" + a.cx + "," + a.cy + "L" + (a.cx - a.w - u - 2) + "," + a.cy + "L" + a.cx + "," + (a.cy - a.h - u - 2) + "z";
                    a = "M" + a.cx + "," + a.cy + "L" + (a.cx + a.w + u + 2) + "," + a.cy + "L" + (a.cx + a.w + u + 2) + "," + a.cy + "zM" + a.cx + "," + a.cy + "L" + a.cx + "," + (a.cy + a.h + u + 2) + "L" + a.cx + "," + (a.cy + a.h + u + 2) + "zM" + a.cx + "," + a.cy + "L" + (a.cx - a.w - u - 2) + "," + a.cy + "L" + (a.cx - a.w - u - 2) + "," + a.cy + "zM" + a.cx + "," + a.cy + "L" + a.cx + "," + (a.cy - a.h - u - 2) + "L" + a.cx + "," + (a.cy - a.h - u - 2) + "z";
                    n =
                        f.path(g).attr("fill", "#fff");
                    "in" === v ? (n.attr({
                        d: a
                    }), r = p.animation({
                        d: g
                    }, k, m, q())) : (n.attr({
                        d: g
                    }), r = p.animation({
                        d: a
                    }, k, m));
                    break;
                case "maskClockTwo":
                    g = "M" + a.cx + "," + a.cy + "L" + a.cx + "," + (a.cy - a.h - u - 2) + "L" + (a.cx + a.w + u + 2) + "," + a.cy + "zM" + a.cx + "," + a.cy + "L" + (a.cx + a.w + u + 2) + "," + a.cy + "L" + a.cx + "," + (a.cy + a.h + u + 2) + "zM" + a.cx + "," + a.cy + "L" + a.cx + "," + (a.cy + a.h + u + 2) + "L" + (a.cx - a.w - u - 2) + "," + a.cy + "zM" + a.cx + "," + a.cy + "L" + (a.cx - a.w - u - 2) + "," + a.cy + "L" + a.cx + "," + (a.cy - a.h - u - 2) + "z";
                    a = "M" + a.cx + "," + a.cy + "L" + a.cx + "," + (a.cy - a.h - u -
                        2) + "L" + a.cx + "," + (a.cy - a.h - u - 2) + "zM" + a.cx + "," + a.cy + "L" + (a.cx + a.w + u + 2) + "," + a.cy + "L" + (a.cx + a.w + u + 2) + "," + a.cy + "zM" + a.cx + "," + a.cy + "L" + a.cx + "," + (a.cy + a.h + u + 2) + "L" + a.cx + "," + (a.cy + a.h + u + 2) + "zM" + a.cx + "," + a.cy + "L" + (a.cx - a.w - u - 2) + "," + a.cy + "L" + (a.cx - a.w - u - 2) + "," + a.cy + "z";
                    n = f.path(g).attr("fill", "#fff");
                    "in" === v ? (n.attr({
                        d: a
                    }), r = p.animation({
                        d: g
                    }, k, m, q())) : (n.attr({
                        d: g
                    }), r = p.animation({
                        d: a
                    }, k, m));
                    break;
                case "maskLouversY":
                    e /= 6;
                    g = "M" + b + "," + c + "L" + (b + d) + "," + c + "L" + (b + d) + "," + (c + e) + "L" + b + "," + (c + e) + "zM" + b + "," + (c + e) +
                        "L" + (b + d) + "," + (c + e) + "L" + (b + d) + "," + (c + 2 * e) + "L" + b + "," + (c + 2 * e) + "zM" + b + "," + (c + 2 * e) + "L" + (b + d) + "," + (c + 2 * e) + "L" + (b + d) + "," + (c + 3 * e) + "L" + b + "," + (c + 3 * e) + "zM" + b + "," + (c + 3 * e) + "L" + (b + d) + "," + (c + 3 * e) + "L" + (b + d) + "," + (c + 4 * e) + "L" + b + "," + (c + 4 * e) + "zM" + b + "," + (c + 4 * e) + "L" + (b + d) + "," + (c + 4 * e) + "L" + (b + d) + "," + (c + 5 * e) + "L" + b + "," + (c + 5 * e) + "zM" + b + "," + (c + 5 * e) + "L" + (b + d) + "," + (c + 5 * e) + "L" + (b + d) + "," + (c + 6 * e) + "L" + b + "," + (c + 6 * e) + "z";
                    a = "M" + b + "," + c + "L" + (b + d) + "," + c + "L" + (b + d) + "," + c + "L" + b + "," + c + "zM" + b + "," + (c + e) + "L" + (b + d) + "," + (c + e) + "L" + (b + d) + "," + (c + e) +
                        "L" + b + "," + (c + e) + "zM" + b + "," + (c + 2 * e) + "L" + (b + d) + "," + (c + 2 * e) + "L" + (b + d) + "," + (c + 2 * e) + "L" + b + "," + (c + 2 * e) + "zM" + b + "," + (c + 3 * e) + "L" + (b + d) + "," + (c + 3 * e) + "L" + (b + d) + "," + (c + 3 * e) + "L" + b + "," + (c + 3 * e) + "zM" + b + "," + (c + 4 * e) + "L" + (b + d) + "," + (c + 4 * e) + "L" + (b + d) + "," + (c + 4 * e) + "L" + b + "," + (c + 4 * e) + "zM" + b + "," + (c + 5 * e) + "L" + (b + d) + "," + (c + 5 * e) + "L" + (b + d) + "," + (c + 5 * e) + "L" + b + "," + (c + 5 * e) + "z";
                    n = f.path(a).attr("fill", "#fff");
                    "in" === v ? (n.attr({
                        d: a
                    }), r = p.animation({
                        d: g
                    }, k, m, q())) : (n.attr({
                        d: g
                    }), r = p.animation({
                        d: a
                    }, k, m));
                    break;
                case "maskLouversX":
                    d /= 6;
                    g = "M" + b + "," + c + "L" + (b + d) + "," + c + "L" + (b + d) + "," + (c + e) + "L" + b + "," + (c + e) + "zM" + (b + d) + "," + c + "L" + (b + 2 * d) + "," + c + "L" + (b + 2 * d) + "," + (c + e) + "L" + (b + d) + "," + (c + e) + "zM" + (b + 2 * d) + "," + c + "L" + (b + 3 * d) + "," + c + "L" + (b + 3 * d) + "," + (c + e) + "L" + (b + 2 * d) + "," + (c + e) + "zM" + (b + 3 * d) + "," + c + "L" + (b + 4 * d) + "," + c + "L" + (b + 4 * d) + "," + (c + e) + "L" + (b + 3 * d) + "," + (c + e) + "zM" + (b + 4 * d) + "," + c + "L" + (b + 5 * d) + "," + c + "L" + (b + 5 * d) + "," + (c + e) + "L" + (b + 4 * d) + "," + (c + e) + "zM" + (b + 5 * d) + "," + c + "L" + (b + 6 * d) + "," + c + "L" + (b + 6 * d) + "," + (c + e) + "L" + (b + 5 * d) + "," + (c + e) + "z";
                    a = "M" + b + "," + c + "L" + b + "," + c + "L" +
                        b + "," + (c + e) + "L" + b + "," + (c + e) + "zM" + (b + d) + "," + c + "L" + (b + d) + "," + c + "L" + (b + d) + "," + (c + e) + "L" + (b + d) + "," + (c + e) + "zM" + (b + 2 * d) + "," + c + "L" + (b + 2 * d) + "," + c + "L" + (b + 2 * d) + "," + (c + e) + "L" + (b + 2 * d) + "," + (c + e) + "zM" + (b + 3 * d) + "," + c + "L" + (b + 3 * d) + "," + c + "L" + (b + 3 * d) + "," + (c + e) + "L" + (b + 3 * d) + "," + (c + e) + "zM" + (b + 4 * d) + "," + c + "L" + (b + 4 * d) + "," + c + "L" + (b + 4 * d) + "," + (c + e) + "L" + (b + 4 * d) + "," + (c + e) + "zM" + (b + 5 * d) + "," + c + "L" + (b + 5 * d) + "," + c + "L" + (b + 5 * d) + "," + (c + e) + "L" + (b + 5 * d) + "," + (c + e) + "z";
                    n = f.path(a).attr("fill", "#fff");
                    "in" === v ? (n.attr({
                        d: a
                    }), r = p.animation({
                            d: g
                        },
                        k, m, q())) : (n.attr({
                        d: g
                    }), r = p.animation({
                        d: a
                    }, k, m));
                    break;
                case "maskPanX":
                    n = f.path("M" + b + "," + c + "L" + (b + d) + "," + c + "L" + (b + d) + "," + (c + e) + "L" + b + "," + (c + e) + "z").attr("fill", "#fff");
                    "in" === v ? (n.attr({
                        transform: "s0,1," + a.cx + "," + a.cy
                    }), r = p.animation({
                        transform: "s1,1," + a.cx + "," + a.cy
                    }, k, m, q())) : (n.attr({
                        transform: "s1,1," + a.cx + "," + a.cy
                    }), r = p.animation({
                        transform: "s0,1," + a.cx + "," + a.cy
                    }, k, m));
                    break;
                case "maskPanY":
                    n = f.path("M" + b + "," + c + "L" + (b + d) + "," + c + "L" + (b + d) + "," + (c + e) + "L" + b + "," + (c + e) + "z").attr("fill", "#fff");
                    "in" ===
                    v ? (n.attr({
                        transform: "s1,0," + a.cx + "," + a.cy
                    }), r = p.animation({
                        transform: "s1,1," + a.cx + "," + a.cy
                    }, k, m, q())) : (n.attr({
                        transform: "s1,1," + a.cx + "," + a.cy
                    }), r = p.animation({
                        transform: "s1,0," + a.cx + "," + a.cy
                    }, k, m));
                    break;
                case "maskSlideT":
                    n = f.path("M" + b + "," + c + "L" + (b + d) + "," + c + "L" + (b + d) + "," + (c + e) + "L" + b + "," + (c + e) + "z").attr("fill", "#fff");
                    "in" === v ? (n.attr({
                        transform: "t0," + -e
                    }), r = p.animation({
                        transform: "t0,0"
                    }, k, m, q())) : (n.attr({
                        transform: "t0,0"
                    }), r = p.animation({
                        transform: "t0," + -e
                    }, k, m));
                    break;
                case "maskSlideTR":
                    n = f.path("M" +
                        b + "," + c + "L" + (b + d) + "," + c + "L" + (b + d) + "," + (c + e) + "L" + b + "," + (c + e) + "z").attr("fill", "#fff");
                    "in" === v ? (n.attr({
                        transform: "t" + d + "," + -e
                    }), r = p.animation({
                        transform: "t0,0"
                    }, k, m, q())) : (n.attr({
                        transform: "t0,0"
                    }), r = p.animation({
                        transform: "t" + d + "," + -e
                    }, k, m));
                    break;
                case "maskSlideTL":
                    n = f.path("M" + b + "," + c + "L" + (b + d) + "," + c + "L" + (b + d) + "," + (c + e) + "L" + b + "," + (c + e) + "z").attr("fill", "#fff");
                    "in" === v ? (n.attr({
                        transform: "t" + -d + "," + -e
                    }), r = p.animation({
                        transform: "t0,0"
                    }, k, m, q())) : (n.attr({
                        transform: "t0,0"
                    }), r = p.animation({
                        transform: "t" +
                            -d + "," + -e
                    }, k, m));
                    break;
                case "maskSlideR":
                    n = f.path("M" + b + "," + c + "L" + (b + d) + "," + c + "L" + (b + d) + "," + (c + e) + "L" + b + "," + (c + e) + "z").attr("fill", "#fff");
                    "in" === v ? (n.attr({
                        transform: "t" + d + ",0"
                    }), r = p.animation({
                        transform: "t0,0"
                    }, k, m, q())) : (n.attr({
                        transform: "t0,0"
                    }), r = p.animation({
                        transform: "t" + d + ",0"
                    }, k, m));
                    break;
                case "maskSlideBR":
                    n = f.path("M" + b + "," + c + "L" + (b + d) + "," + c + "L" + (b + d) + "," + (c + e) + "L" + b + "," + (c + e) + "z").attr("fill", "#fff");
                    "in" === v ? (n.attr({
                            transform: "t" + d + "," + e
                        }), r = p.animation({
                            transform: "t0,0"
                        }, k, m, q())) :
                        (n.attr({
                            transform: "t0,0"
                        }), r = p.animation({
                            transform: "t" + d + "," + e
                        }, k, m));
                    break;
                case "maskSlideB":
                    n = f.path("M" + b + "," + c + "L" + (b + d) + "," + c + "L" + (b + d) + "," + (c + e) + "L" + b + "," + (c + e) + "z").attr("fill", "#fff");
                    "in" === v ? (n.attr({
                        transform: "t0," + e
                    }), r = p.animation({
                        transform: "t0,0"
                    }, k, m, q())) : (n.attr({
                        transform: "t0,0"
                    }), r = p.animation({
                        transform: "t0," + e
                    }, k, m));
                    break;
                case "maskSlideBL":
                    n = f.path("M" + b + "," + c + "L" + (b + d) + "," + c + "L" + (b + d) + "," + (c + e) + "L" + b + "," + (c + e) + "z").attr("fill", "#fff");
                    "in" === v ? (n.attr({
                        transform: "t" + -d +
                            "," + e
                    }), r = p.animation({
                        transform: "t0,0"
                    }, k, m, q())) : (n.attr({
                        transform: "t0,0"
                    }), r = p.animation({
                        transform: "t" + -d + "," + e
                    }, k, m));
                    break;
                case "maskSlideL":
                    n = f.path("M" + b + "," + c + "L" + (b + d) + "," + c + "L" + (b + d) + "," + (c + e) + "L" + b + "," + (c + e) + "z").attr("fill", "#fff");
                    "in" === v ? (n.attr({
                        transform: "t" + -d + ",0"
                    }), r = p.animation({
                        transform: "t0,0"
                    }, k, m, q())) : (n.attr({
                        transform: "t0,0"
                    }), r = p.animation({
                        transform: "t" + -d + ",0"
                    }, k, m));
                    break;
                case "maskGradL":
                    g = f.gradient("l(0, 0, 1, 0)#fff-#fff:34-#000:60-#000:100");
                    g.addClass("elvn-gradient");
                    n = f.path("M" + b + "," + c + "L" + (b + 3 * d) + "," + c + "L" + (b + 3 * d) + "," + (c + e) + "L" + b + "," + (c + e) + "z").attr({
                        fill: g
                    });
                    "in" === v ? (n.attr({
                        transform: "t" + 2 * -d + ",0"
                    }), r = p.animation({
                        transform: "t0,0"
                    }, k, m, q())) : (n.attr({
                        transform: "t0,0"
                    }), r = p.animation({
                        transform: "t" + 2 * -d + ",0"
                    }, k, m));
                    break;
                case "maskGradT":
                    g = f.gradient("l(0, 0, 0, 1)#fff-#fff:34-#000:60-#000:100");
                    g.addClass("elvn-gradient");
                    n = f.path("M" + b + "," + c + "L" + (b + d) + "," + c + "L" + (b + d) + "," + (c + 3 * e) + "L" + b + "," + (c + 3 * e) + "z").attr({
                        fill: g
                    });
                    "in" === v ? (n.attr({
                        transform: "t0," + 2 *
                            -e
                    }), r = p.animation({
                        transform: "t0,0"
                    }, k, m, q())) : (n.attr({
                        transform: "t0,0"
                    }), r = p.animation({
                        transform: "t0," + 2 * -e
                    }, k, m));
                    break;
                case "maskGradR":
                    g = f.gradient("l(0, 0, 1, 0)#000-#000:34-#fff:60-#fff:100");
                    g.addClass("elvn-gradient");
                    n = f.path("M" + b + "," + c + "L" + (b + 3 * d) + "," + c + "L" + (b + 3 * d) + "," + (c + e) + "L" + b + "," + (c + e) + "z").attr({
                        fill: g
                    });
                    "in" === v ? (n.attr({
                        transform: "t0,0"
                    }), r = p.animation({
                        transform: "t" + 2 * -d + ",0"
                    }, k, m, q())) : (n.attr({
                        transform: "t" + 2 * -d + ",0"
                    }), r = p.animation({
                        transform: "t0,0"
                    }, k, m));
                    break;
                case "maskGradB":
                    g =
                        f.gradient("l(0, 0, 0, 1)#000-#000:34-#fff:60-#fff:100");
                    g.addClass("elvn-gradient");
                    n = f.path("M" + b + "," + c + "L" + (b + d) + "," + c + "L" + (b + d) + "," + (c + 3 * e) + "L" + b + "," + (c + 3 * e) + "z").attr({
                        fill: g
                    });
                    "in" === v ? (n.attr({
                        transform: "t0,0"
                    }), r = p.animation({
                        transform: "t0," + 2 * -e
                    }, k, m, q())) : (n.attr({
                        transform: "t0," + 2 * -e
                    }), r = p.animation({
                        transform: "t0,0"
                    }, k, m));
                    break;
                default:
                    n = f.rect(b, c, d, e), n.attr({
                        fill: "#fff"
                    }), "in" === v ? (n.attr({
                        transform: "s0,0"
                    }), r = p.animation({
                        transform: "s1,1"
                    }, k, m, q())) : (n.attr({
                            transform: "s1,1"
                        }), r =
                        p.animation({
                            transform: "s0,0"
                        }, k, m))
            }
            y.insertBefore(G).add(n);
            f = f.mask();
            f.add(y).toDefs();
            G.attr({
                mask: f
            });
            p.select("#" + f.id).addClass("elvn-mask");
            f = setTimeout(function() {
                n.animate(r)
            }, z);
            F.push(f)
        } else if (a && a.match(/gaussBlur/)) {
            a = a.replace(/\s+/g, "").split(",");
            v = a[1];
            z = Number(a[2]) + l;
            k = Number(a[3]);
            var S = a[4];
            d = f.select("defs");
            g = L();
            a = p.parse("<filter id='elvn-gauss" + g + "' filterUnits='userSpaceOnUse' class='elvn-filter' x='-50%' y='-50%' width='300%' height='300%'><feGaussianBlur id='elvn-stdev" +
                g + "' in='SourceGraphic' stdDeviation='" + S + "'/></filter>");
            c && (z = 0);
            d.append(a);
            a = f.select("#elvn-gauss" + g);
            c = b.parent();
            c.hasClass("elvn-wrapper") ? y = c : (y = f.g(), y.insertBefore(b).add(b).addClass("elvn-wrapper"));
            y.attr("filter", a);
            var R = f.select("#elvn-stdev" + g);
            "in" === v ? (R.attr({
                stdDeviation: S
            }), y.attr({
                opacity: 0
            }), f = setTimeout(function() {
                y.animate({
                    opacity: 1
                }, .2 * k, t.linear, function() {
                    R.animate({
                        stdDeviation: 0
                    }, .8 * k, t.linear, function() {
                        y.attr({
                            filter: ""
                        })
                    })
                })
            }, z)) : (R.attr({
                    stdDeviation: 0
                }), y.attr({
                    opacity: 1
                }),
                f = setTimeout(function() {
                    R.animate({
                        stdDeviation: S
                    }, .8 * k, t.linear, function() {
                        y.animate({
                            opacity: 0
                        }, .2 * k, t.linear, function() {
                            y.attr({
                                filter: ""
                            })
                        })
                    })
                }, z));
            F.push(f)
        } else if (a && a.match(/custom/)) {
            var T = b.attr("data-elvncustom") ? b.attr("data-elvncustom") : "t0,0";
            a = a.replace(/\s+/g, "").split(",");
            v = a[1];
            z = Number(a[2]) + l;
            k = Number(a[3]);
            var P = Number(a[4]);
            w = a[5];
            1 < P && (P /= 100);
            switch (w) {
                case "backin":
                    m = t.backin;
                    break;
                case "backout":
                    m = t.backout;
                    break;
                case "bounce":
                    m = t.bounce;
                    break;
                case "easein":
                    m = t.easein;
                    break;
                case "easeinout":
                    m = t.easeinout;
                    break;
                case "easeout":
                    m = t.easeout;
                    break;
                case "elastic":
                    m = t.elastic;
                    break;
                default:
                    m = t.linear
            }
            c && (z = 0);
            c = b.parent();
            c.hasClass("elvn-wrapper") ? y = c : (y = f.g(), y.insertBefore(b).add(b).addClass("elvn-wrapper"));
            "in" === v ? (y.attr({
                transform: T,
                opacity: P
            }), f = setTimeout(function() {
                y.animate({
                    transform: "",
                    opacity: 1
                }, k, m)
            }, z)) : (y.attr({
                transform: "",
                opacity: 1
            }), f = setTimeout(function() {
                y.animate({
                    transform: T,
                    opacity: P
                }, k, m)
            }, z));
            F.push(f)
        } else if (a && a.match(/alongPath/)) {
            var O = b.attr("data-elvnalongpath") ?
                b.attr("data-elvnalongpath") : "";
            a = a.replace(/\s+/g, "").split(",");
            v = a[1];
            z = Number(a[2]) + l;
            k = Number(a[3]);
            var Q = Number(a[4]);
            w = a[5]; - 180 > Q ? Q = -180 : 180 < Q && (Q = 180);
            switch (w) {
                case "backin":
                    m = t.backin;
                    break;
                case "backout":
                    m = t.backout;
                    break;
                case "bounce":
                    m = t.bounce;
                    break;
                case "easein":
                    m = t.easein;
                    break;
                case "easeinout":
                    m = t.easeinout;
                    break;
                case "easeout":
                    m = t.easeout;
                    break;
                case "elastic":
                    m = t.elastic;
                    break;
                default:
                    m = t.linear
            }
            c && (z = 0);
            c = b.parent();
            c.hasClass("elvn-wrapper") ? y = c : (y = f.g(), y.insertBefore(b).add(b).addClass("elvn-wrapper"));
            "in" === v ? y.attr({
                opacity: P
            }) : y.attr({
                opacity: 1
            });
            f = setTimeout(function() {
                y.moveAlongPath(v, O, Q, k, m)
            }, z);
            F.push(f)
        } else if (a && a.match(/morph/)) {
            var N = b.attr("data-elvnmorph") ? b.attr("data-elvnmorph") : "M0,0";
            a = a.replace(/\s+/g, "").split(",");
            v = a[1];
            z = Number(a[2]) + l;
            k = Number(a[3]);
            w = a[4];
            switch (w) {
                case "backin":
                    m = t.backin;
                    break;
                case "backout":
                    m = t.backout;
                    break;
                case "bounce":
                    m = t.bounce;
                    break;
                case "easein":
                    m = t.easein;
                    break;
                case "easeinout":
                    m = t.easeinout;
                    break;
                case "easeout":
                    m = t.easeout;
                    break;
                case "elastic":
                    m =
                        t.elastic;
                    break;
                default:
                    m = t.linear
            }
            c && (z = 0);
            if ("path" === b.type.toLowerCase()) {
                D = b.attr("opacity");
                b.attr("data-elvnopacity", D);
                var J = b.clone();
                b.attr("opacity", 0);
                J.attr({
                    "data-elvn": "",
                    "data-elvnopacity": "",
                    "data-elvnmorph": ""
                }).removeClass("elvn-layer").addClass("elvn-clon");
                if ("in" === v) {
                    var I = b.attr("d");
                    J.attr({
                        d: N
                    });
                    f = setTimeout(function() {
                        J.animate({
                            d: I
                        }, k, m)
                    }, z)
                } else f = setTimeout(function() {
                    J.animate({
                        d: N
                    }, k, m)
                }, z);
                F.push(f)
            }
        }
    }
    var p = window.Elvn_Snap,
        N = window.Elvn_verge,
        t = window.Elvn_mina;
    p.plugin(function(b,
        f) {
        f.prototype.cloneToPath = function() {
            var e, h = 0,
                f = 0;
            var l = "a" === this.parent().type.toLowerCase() ? this.parent().parent() : this.parent();
            var c = l.g();
            var p = this.node.attributes.transform ? this.node.attributes.transform.value ? this.node.attributes.transform.value : this.node.attributes.transform.nodeValue : "";
            switch (this.type.toLowerCase()) {
                case "rect":
                    var q = this.attr("width");
                    var t = this.attr("height");
                    var a = this.attr("rx");
                    var d = this.attr("ry");
                    0 > a && (a = 0);
                    0 > d && (d = 0);
                    a = a || d;
                    d = d || a;
                    a > q / 2 && (a = q / 2);
                    d > t / 2 && (d =
                        t / 2);
                    q = a && d ? ["M" + a + " " + f, "H" + (q - a), "A" + a + " " + d + " 0 0 1 " + q + " " + d, "V" + (t - d), "A" + a + " " + d + " 0 0 1 " + (q - a) + " " + t, "H" + a, "A" + a + " " + d + " 0 0 1 " + h + " " + (t - d), "V" + d, "A" + a + " " + d + " 0 0 1 " + a + " " + f, "z"] : ["M" + h + " " + f, "H" + q, "V" + t, "H" + h, "V" + f, "z"];
                    h = this.attr("x");
                    f = this.attr("y");
                    break;
                case "circle":
                case "ellipse":
                    a = "ellipse" === this.type ? this.attr("rx") : this.attr("r");
                    d = "ellipse" === this.type ? this.attr("ry") : this.attr("r");
                    q = ["M" + a + " " + f, "A" + a + " " + d + " 0 0 1 " + 2 * a + " " + d, "A" + a + " " + d + " 0 0 1 " + a + " " + 2 * d, "A" + a + " " + d +
                        " 0 0 1 " + h + " " + d, "A" + a + " " + d + " 0 0 1 " + a + " " + f, "z"
                    ];
                    h = this.attr("cx") - a;
                    f = this.attr("cy") - d;
                    break;
                case "polygon":
                case "polyline":
                    q = [];
                    a = this.attr("points");
                    for (d = 0; d < a.length; d += 2) q.push((0 === d ? "M" : "L") + a[d] + "," + a[d + 1]);
                    "polygon" === this.type && q.push("Z");
                    break;
                case "line":
                    q = ["M" + this.attr("x1") + " " + this.attr("y1"), "L" + this.attr("x2") + " " + this.attr("y2")];
                    break;
                case "path":
                    q = this.attr("d")
            }
            b.is(q, "array") ? e = "line" === this.type.toLowerCase() || "polyline" === this.type.toLowerCase() || "polygon" === this.type.toLowerCase() ?
                l.path(q.join("")) : l.path(q.join("")).transform("t" + h + "," + f) : "path" === this.type.toLowerCase() && (e = l.path(q));
            this.after(e);
            e.after(c);
            this.addClass("elvn-source");
            c.add(e).addClass("elvn-clon");
            c.node.setAttribute("transform", p);
            return c
        }
    });
    p.plugin(function(b, f) {
        f.prototype.moveAlongPath = function(e, h, f, l, c) {
            var p = this,
                q = this.getBBox(1),
                t, a, d, g = b.path.getTotalLength(h);
            "start" === e ? b.animate(g, 0, function(c) {
                t = b.path.getPointAtLength(h, c);
                a = t.x - q.cx;
                d = t.y - q.cy;
                0 !== f ? p.transform("t" + a + "," + d + "r" + (t.alpha +
                    f) + "," + q.cx + "," + q.cy) : p.transform("t" + a + "," + d)
            }, l, c) : b.animate(0, g, function(c) {
                t = b.path.getPointAtLength(h, c);
                a = t.x - q.cx;
                d = t.y - q.cy;
                0 !== f ? p.transform("t" + a + "," + d + "r" + (t.alpha + f) + "," + q.cx + "," + q.cy) : p.transform("t" + a + "," + d)
            }, l, c)
        }
    });
    L.counter = 1;
    A.fn.extend({
        enlivenEm: function(b) {
            return this.each(function() {
                function f() {
                    function a() {
                        var a;
                        k.attr("visibility", "visible");
                        for (a = 0; a < y.length; a += 1) clearTimeout(y[a]);
                        y = [];
                        k.selectAll(".elvn-source").forEach(function(a) {
                            a.stop()
                        });
                        k.selectAll(".elvn-clon").remove();
                        k.selectAll(".elvn-wrapper").forEach(function(a) {
                            a.stop();
                            a.transform("")
                        });
                        k.selectAll(".elvn-mask").remove();
                        k.selectAll(".elvn-gradient").remove();
                        k.selectAll(".elvn-filter").remove();
                        k.selectAll(".elvn-layer").forEach(function(a) {
                            if (a.attr("data-elvnopacity")) {
                                var b = a.attr("data-elvnopacity");
                                a.attr("opacity", b)
                            }
                            O(a, k, q, B, y, 0)
                        }, k, q, B)
                    }

                    function c() {
                        N.inViewport(k.parent().node, -n) && a();
                        setTimeout(function() {
                            c()
                        }, x)
                    }

                    function g() {
                        return function() {
                            var a = A(window).height();
                            n > a && (n = a - 10);
                            if (N.inViewport(k.parent().node, -n) && !E)
                                if (E = !0, u) var b = setTimeout(function() {
                                    c();
                                    clearTimeout(b)
                                }, G);
                                else k.attr("visibility", "visible"), k.selectAll(".elvn-layer").forEach(function(a) {
                                    O(a, k, q, B, y, G)
                                }, k, q, B)
                        }
                    }
                    var f = new p(C[0]),
                        k = f.select("svg"),
                        q = k.attr("width"),
                        B = k.attr("height"),
                        E = !1,
                        y = [],
                        m = p.is;
                    q || B || (q = k.attr("viewBox").w, B = k.attr("viewBox").h);
                    m(q, "string") && (q = Number(q.replace(/[^0-9.]/g, "")));
                    m(B, "string") && (B = Number(B.replace(/[^0-9.]/g, "")));
                    k.addClass(t);
                    k.attr("overflow", "hidden");
                    void 0 !== l ? k.attr("id", l) : k.attr("id",
                        "elvn-" + L());
                    "img" === h && e.remove();
                    var z = C.children("svg");
                    if (f = k.attr("data-global-elvn")) {
                        f = f.replace(/\s+/g, "").split(",");
                        m = "disableViewport" === f[0] ? !0 : !1;
                        var F = "enableClick" === f[1] ? !0 : !1;
                        var I = f[2];
                        var H = "startVisible" === f[3] ? !0 : !1;
                        var D = "responsive" === f[4] ? !0 : !1;
                        var G = void 0 === f[5] ? 0 : Number(f[5]);
                        var u = "loop" === f[6] ? !0 : !1;
                        var x = void 0 === f[7] ? 500 : Number(f[7]);
                        500 >= x && (x = 500)
                    } else F = m = !1, I = "none", u = D = H = !1, x = 500;
                    if (D) {
                        z.wrap("<div class='elvn-responsive'></div>");
                        C = z.parent();
                        f = new p(C[0]);
                        C.css("padding-bottom",
                            Number(B / q * 100).toFixed(2) + "%");
                        k.attr({
                            viewBox: "0 0 " + q + " " + B,
                            preserveAspectRatio: "xMinYMin meet",
                            width: "100%",
                            height: "100%"
                        });
                        D = k.innerSVG();
                        var K = {};
                        A(z[0].attributes).each(function() {
                            K[this.nodeName] = this.value ? this.value : this.nodeValue
                        });
                        C.empty();
                        k = f.append(p.parse("<svg></svg>")).select("svg");
                        k.select("desc").remove();
                        k.append(p.parse(D));
                        Object.keys(K).forEach(function(a) {
                            k.attr(a, K[a])
                        });
                        z = C.children("svg")
                    } else z.wrap("<div class='elvn'></div>");
                    if (f = k.node.getScreenCTM()) z = -f.e % 1, f = -f.f %
                        1, 0 === z ? z = 0 : -.5 >= z && (z += 1), 0 === f ? f = 0 : -.5 >= f && (f += 1), A(k.node).css({
                            left: z + "px",
                            top: f + "px"
                        });
                    H ? k.attr("visibility", "visible") : k.attr("visibility", "hidden");
                    H = N.rectangle(k.parent().node).height;
                    switch (I) {
                        case "none":
                            var n = .1;
                            break;
                        case "oneFourth":
                            n = H / 4;
                            break;
                        case "oneThird":
                            n = H / 3;
                            break;
                        case "oneHalf":
                            n = H / 2;
                            break;
                        case "twoThird":
                            n = 2 * H / 3;
                            break;
                        case "full":
                            n = H;
                            break;
                        default:
                            n = H / 2
                    }
                    "function" === typeof b && b();
                    if (u) {
                        var r = 0;
                        k.selectAll(".elvn-layer").forEach(function(a) {
                            (a = a.attr("data-elvn")) && a.match(/drawLines/) ?
                                (a = a.replace(/\s+/g, "").split(","), r < Number(a[1]) + Number(a[2]) && (r = Number(a[1]) + Number(a[2]))) : a && (a = a.replace(/\s+/g, "").split(","), r < Number(a[2]) + Number(a[3]) && (r = Number(a[2]) + Number(a[3])))
                        });
                        x += r
                    }
                    if (!m) A(window).on("resize, scroll", g());
                    !u && F ? C.click(function() {
                        a()
                    }) : u && F && m && C.click(function() {
                        if (!E) {
                            E = !0;
                            var a = setTimeout(function() {
                                k.attr("visibility", "visible");
                                c();
                                clearTimeout(a)
                            }, G)
                        }
                    });
                    M ? A(document).ajaxComplete(function() {
                        A(window).scroll()
                    }) : A(window).scroll()
                }
                var e = A(this),
                    h = e.prop("tagName").toLowerCase(),
                    t = e.attr("class"),
                    l = e.attr("id");
                if ("img" === h) {
                    var c = e.attr("src");
                    var M = !0;
                    e.css("visibility", "hidden");
                    var q = A("<div></div>").insertAfter(e);
                    var C = e.parent();
                    C = q.load(c, f)
                } else "svg" === h && (M = !1, e.wrap("<div></div>"), C = e.parent(), f())
            })
        },
        enlivenEmPrivate: function(b, f, e, h, p) {
            O(b, f, e, h, [], 0, p)
        },
        svgClick: function() {
            this.each(function(b, f) {
                var e = document.createEvent("MouseEvents");
                e.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
                f.dispatchEvent(e)
            })
        }
    });
    A(window).on("load", function() {
        A(".enlivenem").enlivenEm()
    })
})(window.jQuery);