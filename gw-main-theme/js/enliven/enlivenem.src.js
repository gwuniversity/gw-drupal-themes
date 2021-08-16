/******************************************************************************
 * @name:       enlivenem.src.js
                the main non-minified file of Enliven 'em script
 * @version:    1.6
 * @URL:        http://enlivenem.com
 * @copyright:  (c) 2014-2018 DeeThemes (http://codecanyon.net/user/DeeThemes)
 * @licenses:   http://codecanyon.net/licenses/regular
                http://codecanyon.net/licenses/extended
******************************************************************************/

//special directive comment to pass JSLint (www.jslint.com)
/*jslint
    browser, multivar, this, for, long, single
*/

if (window.jQuery === undefined || window.Elvn_Snap === undefined || window.Elvn_verge === undefined) {
    window.alert("Enliven' em animation engine requires jQuery and enlivenem.tools.js");
    throw new Error("Enliven' em animation engine requires jQuery and enlivenem.tools.js. Please check the scripts' declarations.");
}

(function ($) {

    "use strict";

    var Snap = window.Elvn_Snap,
        verge = window.Elvn_verge,
        mina = window.Elvn_mina;

    //convert SVG primitives (rect, circle, ellipse, line, polygon, polyline) to path
    Snap.plugin(function (Snap, Element) {
        Element.prototype.cloneToPath = function () {
            var w,
                h,
                rx,
                ry,
                d,
                path,
                x = 0,
                y = 0,
                that = this,
                parent,
                g,
                trf,
                points,
                i;
            if (that.parent().type.toLowerCase() === "a") {
                parent = that.parent().parent();
                g = parent.g();
            } else {
                parent = that.parent();
                g = parent.g();
            }
            if (that.node.attributes.transform) {
                if (that.node.attributes.transform.value) {
                    trf = that.node.attributes.transform.value;
                } else {
                    trf = that.node.attributes.transform.nodeValue;
                }
            } else {
                trf = "";
            }
            switch (that.type.toLowerCase()) {
            case "rect":
                w = that.attr("width");
                h = that.attr("height");
                rx = that.attr("rx");
                ry = that.attr("ry");
                //normalising
                if (rx < 0) {
                    rx = 0;
                }
                if (ry < 0) {
                    ry = 0;
                }
                rx = rx || ry;
                ry = ry || rx;
                if (rx > w / 2) {
                    rx = w / 2;
                }
                if (ry > h / 2) {
                    ry = h / 2;
                }
                if (rx && ry) {
                    d = [
                        "M" + rx + " " + y,
                        "H" + (w - rx),
                        "A" + rx + " " + ry + " 0 0 1 " + w + " " + ry,
                        "V" + (h - ry),
                        "A" + rx + " " + ry + " 0 0 1 " + (w - rx) + " " + h,
                        "H" + rx,
                        "A" + rx + " " + ry + " 0 0 1 " + x + " " + (h - ry),
                        "V" + ry,
                        "A" + rx + " " + ry + " 0 0 1 " + rx + " " + y,
                        "z"
                    ];
                } else {
                    d = [
                        "M" + x + " " + y,
                        "H" + w,
                        "V" + h,
                        "H" + x,
                        "V" + y,
                        "z"
                    ];
                }
                x = that.attr("x");
                y = that.attr("y");
                break;
            case "circle":
            case "ellipse":
                rx = that.type === "ellipse"
                    ? that.attr("rx")
                    : that.attr("r");
                ry = that.type === "ellipse"
                    ? that.attr("ry")
                    : that.attr("r");
                d = [
                    "M" + rx + " " + y,
                    "A" + rx + " " + ry + " 0 0 1 " + (rx * 2) + " " + ry,
                    "A" + rx + " " + ry + " 0 0 1 " + rx + " " + (ry * 2),
                    "A" + rx + " " + ry + " 0 0 1 " + x + " " + ry,
                    "A" + rx + " " + ry + " 0 0 1 " + rx + " " + y,
                    "z"
                ];
                x = that.attr("cx") - rx;
                y = that.attr("cy") - ry;
                break;
            case "polygon":
            case "polyline":
                d = [];
                points = that.attr("points");
                for (i = 0; i < points.length; i = i + 2) {
                    d.push((i === 0
                        ? "M"
                        : "L") + points[i] + "," + points[i + 1]);
                }
                if (that.type === "polygon") {
                    d.push("Z");
                }
                break;
            case "line":
                d = ["M" + that.attr("x1") + " " + that.attr("y1"), "L" + that.attr("x2") + " " + that.attr("y2")];
                break;
            case "path":
                d = that.attr("d");
                break;
            }
            if (Snap.is(d, "array")) {
                if (that.type.toLowerCase() === "line" || that.type.toLowerCase() === "polyline" || that.type.toLowerCase() === "polygon") {
                    path = parent.path(d.join(""));
                } else {
                    path = parent.path(d.join("")).transform("t" + x + "," + y);
                }
            } else if (that.type.toLowerCase() === "path") {
                path = parent.path(d);
            }
            that.after(path);
            path.after(g);
            that.addClass("elvn-source");
            g.add(path).addClass("elvn-clon");
            g.node.setAttribute("transform", trf);
            return g;
        };//end clonToPath
    });//end Snap.plugin

    //plugin for animating elements along a path
    Snap.plugin(function (Snap, Element) {
        Element.prototype.moveAlongPath = function (direction, path, rotation, duration, easing) {
            var obj = this,
                bbox = this.getBBox(1),
                point,
                movePoint = {},
                lenth = Snap.path.getTotalLength(path),
                from = 0,
                to = lenth;
            if (direction === "start") { //to start point of a path
                from = lenth;
                to = 0;
                Snap.animate(from, to, function (step) {
                    point = Snap.path.getPointAtLength(path, step);
                    movePoint.x = point.x - bbox.cx;
                    movePoint.y = point.y - bbox.cy;
                    if (rotation !== 0) {
                        obj.transform("t" + movePoint.x + "," + movePoint.y + "r" + (point.alpha + rotation) + "," + bbox.cx + "," + bbox.cy);
                    } else {
                        obj.transform("t" + movePoint.x + "," + movePoint.y);
                    }
                }, duration, easing);
            } else { //to end point of a path
                Snap.animate(from, to, function (step) {
                    point = Snap.path.getPointAtLength(path, step);
                    movePoint.x = point.x - bbox.cx;
                    movePoint.y = point.y - bbox.cy;
                    if (rotation !== 0) {
                        obj.transform("t" + movePoint.x + "," + movePoint.y + "r" + (point.alpha + rotation) + "," + bbox.cx + "," + bbox.cy);
                    } else {
                        obj.transform("t" + movePoint.x + "," + movePoint.y);
                    }
                }, duration, easing);
            }
        };//end moveAlongPath
    });//end Snap.plugin

    //random integer inside range [min, max]
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //unique number from 1
    function uniqueNum() {
        uniqueNum.counter += 1;
        return uniqueNum.counter;
    }
    uniqueNum.counter = 1;

    // function for cloning object
    function cloneObject(obj) {
        if (obj === null || typeof obj !== "object") {
            return obj;
        }
        //Works perfectly if there are no functions or undefined or Infinite in the object.
        return JSON.parse(JSON.stringify(obj));
    }

    //cloning reversed array
    function reverseArr(a) {
        var temp = [],
            len = a.length,
            i;
        for (i = len - 1; i >= 0; i -= 1) {
            temp.push(a[i]);
        }
        return temp;
    }

    //data for various animations
    function getData(effect, svg_w, svg_h, bb) {
        var tl = bb.x + "," + bb.y, //top-left
            t = bb.cx + "," + bb.y, //top
            tr = bb.x2 + "," + bb.y, //top-right
            r = bb.x2 + "," + bb.cy, //right
            br = bb.x2 + "," + bb.y2, //bottom-right
            b = bb.cx + "," + bb.y2, //bottom
            bl = bb.x + "," + bb.y2, //bottom-left
            l = bb.x + "," + bb.cy, //left
            c = bb.cx + "," + bb.cy, //center
            w = bb.w, //width of elem
            h = bb.h, //height of elem
            animdata = JSON.stringify({
                expandT: [ //top
                    {
                        dI: 0, //dI is duration in (% of total)
                        dO: 100, //dO is duration out (% of total)
                        a: {t: "s1,0," + t} //a is attrs, t: is transform, o is opacity
                    },
                    {
                        dI: 100, //dI is duration in (% of total)
                        dO: 0, //dO is duration out (% of total)
                        a: {t: "s1,1," + t} //a is attrs, t: is transform, o is opacity
                    }
                ],
                expandR: [ //right
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "s0,1," + r}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "s1,1," + r}
                    }
                ],
                expandB: [//bottom
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "s1,0," + b}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "s1,1," + b}
                    }
                ],
                expandL: [//left
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "s0,1," + l}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "s1,1," + l}
                    }
                ],
                expandY: [ //vertical
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "s1,0," + l}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "s1,1," + l}
                    }
                ],
                expandX: [ //horizontal
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "s0,1," + t}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "s1,1," + t}
                    }
                ],
                fade: [
                    {
                        dI: 0,
                        dO: 100,
                        a: {o: 0}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {o: 1}
                    }
                ],
                fadeShortTL: [ //top-left
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "t" + -(w / 4 < 20
                            ? 20
                            : w / 4) + "," + -(h / 4 < 20
                            ? 20
                            : h / 4), o: 0}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "", o: 1}
                    }
                ],
                fadeShortT: [ //top
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "t0," + -(h / 4 < 20
                            ? 20
                            : h / 4), o: 0}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "", o: 1}
                    }
                ],
                fadeShortTR: [ //top-right
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "t" + (w / 4 < 20
                            ? 20
                            : w / 4) + "," + -(h / 4 < 20
                            ? 20
                            : h / 4), o: 0}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "", o: 1}
                    }
                ],
                fadeShortR: [ //right
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "t" + (w / 4 < 20
                            ? 20
                            : w / 4) + ",0", o: 0}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "", o: 1}
                    }
                ],
                fadeShortBR: [ //bottom-right
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "t" + (w / 4 < 20
                            ? 20
                            : w / 4) + "," + (h / 4 < 20
                            ? 20
                            : h / 4), o: 0}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "", o: 1}
                    }
                ],
                fadeShortB: [ //bottom
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "t0," + (h / 4 < 20
                            ? 20
                            : h / 4), o: 0}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "", o: 1}
                    }
                ],
                fadeShortBL: [ //bottom-left
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "t" + -(w / 4 < 20
                            ? 20
                            : w / 4) + "," + (h / 4 < 20
                            ? 20
                            : h / 4), o: 0}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "", o: 1}
                    }
                ],
                fadeShortL: [ //left
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "t" + -(w / 4 < 20
                            ? 20
                            : w / 4) + ",0", o: 0}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "", o: 1}
                    }
                ],
                fadeLongTL: [
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "t" + -bb.x2 + "," + -bb.y2, o: 0}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "", o: 1}
                    }
                ],
                fadeLongT: [
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "t0," + -bb.y2, o: 0}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "", o: 1}
                    }
                ],
                fadeLongTR: [
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "t" + (svg_w - bb.x) + "," + -bb.y2, o: 0}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "", o: 1}
                    }
                ],
                fadeLongR: [
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "t" + (svg_w - bb.x) + ",0", o: 0}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "", o: 1}
                    }
                ],
                fadeLongBR: [
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "t" + (svg_w - bb.x) + "," + (svg_h - bb.y), o: 0}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "", o: 1}
                    }
                ],
                fadeLongB: [
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "t0," + (svg_w - bb.y), o: 0}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "", o: 1}
                    }
                ],
                fadeLongBL: [
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "t" + -bb.x2 + "," + (svg_h - bb.y), o: 0}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "", o: 1}
                    }
                ],
                fadeLongL: [
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "t" + -bb.x2 + ",0", o: 0}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "", o: 1}
                    }
                ],
                flipX: [
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "s-1,1.3", o: 0}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "s1,1", o: 1}
                    }
                ],
                flipY: [
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "s1.3,-1", o: 0}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "s1,1", o: 1}
                    }
                ],
                flyC: [
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "t" + (svg_w / 2 - bb.cx) + "," + (svg_h / 2 - bb.cy), o: 0}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "", o: 1}
                    }
                ],
                flyRotateC: [
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "t" + (svg_w / 2 - bb.cx) + "," + (svg_h / 2 - bb.cy) + "r0", o: 0}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "t0,0r360", o: 1}
                    }
                ],
                flyScaleC: [
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "t" + (svg_w / 2 - bb.cx) + "," + (svg_h / 2 - bb.cy) + "s2,2", o: 0}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "", o: 1}
                    }
                ],
                pulse: [
                    {
                        dI: 0,
                        dO: 30,
                        a: {t: "s0,0", o: 0}
                    },
                    {
                        dI: 30,
                        dO: 10,
                        aI: {t: "s0.8,0.8", o: 0.8},
                        aO: {t: "s0.8,0.8", o: 0.8}
                    },
                    {
                        dI: 10,
                        dO: 20,
                        aI: {t: "s0.5,0.5", o: 0.6},
                        aO: {t: "s0.5,0.5", o: 0.6}
                    },
                    {
                        dI: 20,
                        dO: 10,
                        aI: {t: "s1,1", o: 1},
                        aO: {t: "s1,1", o: 1}
                    },
                    {
                        dI: 10,
                        dO: 20,
                        aI: {t: "s0.7,0.7", o: 0.8},
                        aO: {t: "s0.7,0.7", o: 0.8}
                    },
                    {
                        dI: 20,
                        dO: 10,
                        aI: {t: "s1.2,1.2", o: 1},
                        aO: {t: "s1.2,1.2", o: 1}
                    },
                    {
                        dI: 10,
                        dO: 0,
                        a: {t: "s1,1", o: 1}
                    }
                ],
                rubberX: [
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "s2,0.62", o: 0}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "s1,1", o: 1}
                    }
                ],
                rubberY: [
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "s0.62,2", o: 0}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "s1,1", o: 1}
                    }
                ],
                scaleTL: [
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "s0,0," + tl}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "s1,1," + tl}
                    }
                ],
                scaleT: [
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "s0,0," + t}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "s1,1," + t}
                    }
                ],
                scaleTR: [
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "s0,0," + tr}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "s1,1," + tr}
                    }
                ],
                scaleR: [
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "s0,0," + r}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "s1,1," + r}
                    }
                ],
                scaleBR: [
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "s0,0," + br}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "s1,1," + br}
                    }
                ],
                scaleB: [
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "s0,0," + b}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "s1,1," + b}
                    }
                ],
                scaleBL: [
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "s0,0," + bl}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "s1,1," + bl}
                    }
                ],
                scaleL: [
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "s0,0," + l}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "s1,1," + l}
                    }
                ],
                scaleC: [
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "s0,0," + c}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "s1,1," + c}
                    }
                ],
                stamp: [
                    {
                        dI: 0,
                        dO: 70,
                        a: {t: "s3,3", o: 0}
                    },
                    {
                        dI: 70,
                        dO: 30,
                        aI: {t: "s0.7,0.7", o: 0.3},
                        aO: {t: "s0.7,0.7", o: 0.3}
                    },
                    {
                        dI: 30,
                        dO: 0,
                        a: {t: "s1,1", o: 1}
                    }
                ],
                wheelC: [
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "t0,0r0", o: 0}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "t0,0r720", o: 1}
                    }
                ],
                wheelL: [
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "t" + -bb.x2 + ",0r0", o: 0}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "t0,0r720", o: 1}
                    }
                ],
                wheelR: [
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "t" + (svg_w - bb.x) + ",0r0", o: 0}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "t0,0r-720", o: 1}
                    }
                ],
                wheelB: [
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "t0," + (svg_w - bb.y) + "r0", o: 0}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "t0,0r-720", o: 1}
                    }
                ],
                wheelT: [
                    {
                        dI: 0,
                        dO: 100,
                        a: {t: "t0," + -bb.y2 + "r0", o: 0}
                    },
                    {
                        dI: 100,
                        dO: 0,
                        a: {t: "t0,0r720", o: 1}
                    }
                ]
            });//end JSON.stringify

        //replace all short names in object to their full names
        animdata = animdata.replace(/"o":/g, "\"opacity\":").replace(/"t":/g, "\"transform\":");

        //restore object from json format
        animdata = JSON.parse(animdata);

        if (animdata[effect] !== undefined) {
            return cloneObject(animdata[effect]);
        }
        return cloneObject(animdata.fadeShortL);
    } //end getData

    //The main function
    function enlivenEmMain(elem, svg, width, height, timeouts, globalDelay, instant) {
        var options = elem.attr("data-elvn"),
            thisIsIE = false,
            duration,
            randomDuration,
            delay,
            wrapperGroup,
            effect,
            direction,
            opacity,
            rotation,
            color,
            drawingStrokeWidth,
            startDelay,
            easing,
            ease,
            anims,
            delays,
            bb,
            currentGroup,
            group,
            animData,
            attrs,
            i,
            currentOpacity,
            mask,
            workingMask,
            animation,
            parent,
            strokeWidth,
            x,
            y,
            w,
            h,
            x2,
            y2,
            cx,
            cy,
            r,
            s,
            d1,
            d2,
            grad,
            std,
            stdDev,
            defs,
            currentUniqueNum,
            filter,
            customCommand,
            alongpathCommand,
            morphCommand,
            clon,
            currentPathsD,
            tmp;

        //function for line drawing effect (must be declared here in strict mode)
        function drawStroke(elem, rnd, stored_opacity) {
            var shapes = ["circle", "ellipse", "line", "path", "polygon", "polyline", "rect"],
                clonedPath,
                totalLength,
                temp,
                dur;
            if (shapes.indexOf(elem.type.toLowerCase()) !== -1) {
                clon = elem.cloneToPath();
                clonedPath = clon.select("path");
                totalLength = clonedPath.getTotalLength();
                elem.attr("opacity", 0);
                clonedPath.attr({
                    fill: "none",
                    stroke: color,
                    strokeOpacity: 0,
                    strokeWidth: drawingStrokeWidth,
                    strokeLinecap: "round",
                    strokeDashoffset: totalLength,
                    strokeDasharray: "0 " + totalLength + " " + totalLength + " 0"
                });

                //animating stroke drawing
                temp = [];
                if (rnd) {
                    dur = getRandomInt(0.5 * duration, 0.8 * duration);
                } else {
                    dur = 0.8 * duration;
                }
                temp[0] = setTimeout(function () {
                    clonedPath.attr({strokeOpacity: 1});
                    Snap.animate(0, -totalLength, function (value) {
                        clonedPath.attr({"strokeDashoffset": value});
                    }, dur, mina.easeinout);
                }, delay);
                timeouts.push(temp[0]);

                //animating disappearing of cloned path and appearing of main shape
                temp[1] = setTimeout(function () {
                    elem.animate({opacity: stored_opacity}, duration - dur * 1.1);
                    clonedPath.animate({opacity: 0}, duration - dur, mina.linear, function () {
                        clon.remove();
                    });
                }, delay + dur);
                timeouts.push(temp[1]);
            }
        }//end drawStroke

        //function for removing mask url from elem when animation is finished
        function removeMaskUrl() {
            return function () {
                $(wrapperGroup.node).removeAttr("mask");
            };
        }

        function timeline(index, timeouts) {
            var temp = setTimeout(function () {
                group.animate(anims[index]);
            }, delays[index]);
            timeouts.push(temp);
        }

        //IE9 gaussBlur fallback to fade
        if (navigator.userAgent.toUpperCase().match(/MSIE\s9/)) {
            if (options && options.match(/gaussBlur/)) {
                options = options.replace(/gaussBlur/, "fade");
            }
        }

        //fade, scales, slides and other various effects
        if (options && !options.match(/drawLines/) && !options.match(/mask/) && !options.match(/gaussBlur/) && !options.match(/custom/) && !options.match(/morph/) && !options.match(/alongPath/)) {

            /*for example:
                class="elvn-layer" data-elvn="fadeLongB, in, 0, 1000, easein"
            */

            //check for IE
            if (window.ActiveXObject !== undefined) {
                thisIsIE = true;
            }

            options = options.replace(/\s+/g, "").split(",");
            effect = options[0];
            direction = options[1];
            startDelay = Number(options[2]) + globalDelay;
            duration = Number(options[3]);
            easing = options[4];
            anims = [];
            delays = [];
            bb = elem.getBBox();

            if (instant) {
                startDelay = 0;
            }
            currentGroup = elem.parent();
            if (currentGroup.hasClass("elvn-wrapper")) {
                group = currentGroup;
            } else {
                group = svg.g();
                group.insertBefore(elem).add(elem).addClass("elvn-wrapper");
            }

            delays[0] = startDelay;

            //case of easing func
            switch (easing) {
            case "backin":
                ease = mina.backin;
                break;
            case "backout":
                ease = mina.backout;
                break;
            case "bounce":
                ease = mina.bounce;
                break;
            case "easein":
                ease = mina.easein;
                break;
            case "easeinout":
                ease = mina.easeinout;
                break;

            case "easeout":
                ease = mina.easeout;
                break;
            case "elastic":
                ease = mina.elastic;
                break;
            default: //linear
                ease = mina.linear;
            }

            //create an array of Snap.animations
            animData = getData(effect, width, height, bb); //now it is the Array
            if (direction === "out") {
                animData = reverseArr(animData);
            }

            //correct zero values of scale for IE
            if (thisIsIE) {
                for (i = 0; i < animData.length; i += 1) {
                    if (animData[i].a) {
                        if (animData[i].a.transform && animData[i].a.transform.match(/s0,0,/)) {
                            animData[i].a.transform = animData[i].a.transform.replace(/s0,0,/g, "s0.001,0.001,");
                        }
                        if (animData[i].a.transform && animData[i].a.transform.match(/s0,1,/)) {
                            animData[i].a.transform = animData[i].a.transform.replace(/s0,1,/g, "s0.001,1.0,");
                        }
                        if (animData[i].a.transform && animData[i].a.transform.match(/s1,0,/)) {
                            animData[i].a.transform = animData[i].a.transform.replace(/s1,0,/g, "s1.0,0.001,");
                        }
                    }
                }
            }

            //set element to start position
            group.attr(animData[0].a);

            for (i = 1; i < animData.length; i += 1) {
                if (direction === "in") {
                    if (animData[i].aI) {
                        attrs = animData[i].aI;
                    } else {
                        attrs = animData[i].a;
                    }
                    if (i === animData.length - 1) {
                        anims.push(Snap.animation(attrs, duration * animData[i].dI / 100, ease));
                    } else {
                        anims.push(Snap.animation(attrs, duration * animData[i].dI / 100));
                    }
                    delays.push(duration * animData[i].dI / 100);
                } else {
                    if (animData[i].aO) {
                        attrs = animData[i].aO;
                    } else {
                        attrs = animData[i].a;
                    }
                    if (i === animData.length - 1) {
                        anims.push(Snap.animation(attrs, duration * animData[i].dO / 100, ease));
                    } else {
                        anims.push(Snap.animation(attrs, duration * animData[i].dO / 100));
                    }
                    delays.push(duration * animData[i].dO / 100);
                }
            }
            //calculate corresponding delays for each key frame
            for (i = 1; i < delays.length; i += 1) {
                delays[i] = delays[i] + delays[i - 1];
            }

            //proceed animation steps with delays
            for (i = 0; i < anims.length; i += 1) {
                timeline(i, timeouts);
            }

        //line drawing effect
        } else if (options && options.match(/drawLines/)) {

            /*for example:
                class="elvn-layer" data-elvn="drawLines, 0, 2000, red, 3, random"
            */

            options = options.replace(/\s+/g, "").split(",");
            delay = Number(options[1]) + globalDelay;
            duration = Number(options[2]);
            color = options[3];
            drawingStrokeWidth = options[4];
            randomDuration = options[5];

            if (instant) {
                delay = 0;
            }

            if (elem.type.toLowerCase() !== "g") {
                if ($(elem.node).data("first-opacity")) {
                    currentOpacity = $(elem.node).data("first-opacity");
                } else {
                    currentOpacity = elem.attr("opacity");
                    $(elem.node).data("first-opacity", currentOpacity);
                }
                drawStroke(elem, false, currentOpacity);
            } else {
                elem.selectAll("*").forEach(function (single_elem) {
                    if (!single_elem.hasClass("elvn-layer")) {
                        if ($(single_elem.node).data("first-opacity")) {
                            currentOpacity = $(single_elem.node).data("first-opacity");
                        } else {
                            currentOpacity = single_elem.attr("opacity");
                            $(single_elem.node).data("first-opacity", currentOpacity);
                        }
                        if (randomDuration === "random") {
                            drawStroke(single_elem, true, currentOpacity);
                        } else {
                            drawStroke(single_elem, false, currentOpacity);
                        }
                    }
                });
            }

        //mask effects
        } else if (options && options.match(/mask/)) {

            /*for example:
                class="elvn-layer" data-elvn="maskRect, in, 0, 1000, easein"
            */

            options = options.replace(/\s+/g, "").split(",");
            effect = options[0];
            direction = options[1];
            delay = Number(options[2]) + globalDelay;
            duration = Number(options[3]);
            easing = options[4];
            anims = [];
            delays = [];
            group = svg.g();
            parent = elem.parent();

            if (instant) {
                delay = 0;
            }

            if (parent.hasClass("elvn-wrapper")) {
                wrapperGroup = parent;
            } else {
                wrapperGroup = svg.g();
                wrapperGroup.insertBefore(elem).add(elem).addClass("elvn-wrapper");
            }

            bb = wrapperGroup.getBBox();
            strokeWidth = 0;
            wrapperGroup.selectAll("*").forEach(function (elem) {
                if (elem.attr("stroke-width")) {
                    var temp = Number(elem.attr("stroke-width").replace(/[^0-9.]/g, ""));
                    if (temp > strokeWidth) {
                        strokeWidth = temp;
                    }
                }
            });

            //case of easing func
            switch (easing) {
            case "backin":
                ease = mina.backin;
                break;
            case "backout":
                ease = mina.backout;
                break;
            case "bounce":
                ease = mina.bounce;
                break;
            case "easein":
                ease = mina.easein;
                break;
            case "easeinout":
                ease = mina.easeinout;
                break;
            case "easeout":
                ease = mina.easeout;
                break;
            case "elastic":
                ease = mina.elastic;
                break;
            default: //linear
                ease = mina.linear;
            }

            //recalculate coordinates including stroke width
            x = bb.x - strokeWidth / 2 - 1;
            y = bb.y - strokeWidth / 2 - 1;
            w = bb.w + strokeWidth + 2;
            h = bb.h + strokeWidth + 2;
            x2 = x + w;
            y2 = y + h;
            cx = bb.cx;
            cy = bb.cy;
            r = bb.r0 + strokeWidth + 1;

            switch (effect) {
            case "maskStairsL":
                s = h / 6;
                mask = svg.path(
                    "M" + x2 + "," + y2 +
                    "L" + x2 + "," + (y2 - s) +
                    "L" + (x2 + s) + "," + (y2 - s) +
                    "L" + (x2 + s) + "," + (y2 - 2 * s) +
                    "L" + (x2 + 2 * s) + "," + (y2 - 2 * s) +
                    "L" + (x2 + 2 * s) + "," + (y2 - 3 * s) +
                    "L" + (x2 + 3 * s) + "," + (y2 - 3 * s) +
                    "L" + (x2 + 3 * s) + "," + (y2 - 4 * s) +
                    "L" + (x2 + 4 * s) + "," + (y2 - 4 * s) +
                    "L" + (x2 + 4 * s) + "," + (y2 - 5 * s) +
                    "L" + (x2 + 5 * s) + "," + (y2 - 5 * s) +
                    "L" + (x2 + 5 * s) + "," + y +
                    "L" + x + "," + y +
                    "L" + x + "," + y2 +
                    "z"
                ).attr("fill", "#fff");
                if (direction === "in") {
                    mask.attr({transform: "t" + -(w + h) + ",0"});
                    animation = Snap.animation({transform: "t0,0"}, duration, ease, removeMaskUrl());
                } else {//out
                    mask.attr({transform: "t0,0"});
                    animation = Snap.animation({transform: "t" + -(w + h) + ",0"}, duration, ease);
                }
                break;
            case "maskStairsR":
                s = h / 6;
                mask = svg.path(
                    "M" + x + "," + y2 +
                    "L" + x + "," + (y2 - s) +
                    "L" + (x - s) + "," + (y2 - s) +
                    "L" + (x - s) + "," + (y2 - 2 * s) +
                    "L" + (x - 2 * s) + "," + (y2 - 2 * s) +
                    "L" + (x - 2 * s) + "," + (y2 - 3 * s) +
                    "L" + (x - 3 * s) + "," + (y2 - 3 * s) +
                    "L" + (x - 3 * s) + "," + (y2 - 4 * s) +
                    "L" + (x - 4 * s) + "," + (y2 - 4 * s) +
                    "L" + (x - 4 * s) + "," + (y2 - 5 * s) +
                    "L" + (x - 5 * s) + "," + (y2 - 5 * s) +
                    "L" + (x - 5 * s) + "," + y +
                    "L" + x2 + "," + y +
                    "L" + x2 + "," + y2 +
                    "z"
                ).attr("fill", "#fff");
                if (direction === "in") {
                    mask.attr({transform: "t" + (w + h) + ",0"});
                    animation = Snap.animation({transform: "t0,0"}, duration, ease, removeMaskUrl());
                } else {//out
                    mask.attr({transform: "t0,0"});
                    animation = Snap.animation({transform: "t" + (w + h) + ",0"}, duration, ease);
                }
                break;
            case "maskStairsT":
                s = w / 6;
                mask = svg.path(
                    "M" + x2 + "," + y2 +
                    "L" + (x2 - s) + "," + y2 +
                    "L" + (x2 - s) + "," + (y2 + s) +
                    "L" + (x2 - 2 * s) + "," + (y2 + s) +
                    "L" + (x2 - 2 * s) + "," + (y2 + 2 * s) +
                    "L" + (x2 - 3 * s) + "," + (y2 + 2 * s) +
                    "L" + (x2 - 3 * s) + "," + (y2 + 3 * s) +
                    "L" + (x2 - 4 * s) + "," + (y2 + 3 * s) +
                    "L" + (x2 - 4 * s) + "," + (y2 + 4 * s) +
                    "L" + (x2 - 5 * s) + "," + (y2 + 4 * s) +
                    "L" + (x2 - 5 * s) + "," + (y2 + 5 * s) +
                    "L" + x + "," + (y2 + 5 * s) +
                    "L" + x + "," + y +
                    "L" + x2 + "," + y +
                    "z"
                ).attr("fill", "#fff");
                if (direction === "in") {
                    mask.attr({transform: "t0," + -(h + w)});
                    animation = Snap.animation({transform: "t0,0"}, duration, ease, removeMaskUrl());
                } else {//out
                    mask.attr({transform: "t0,0"});
                    animation = Snap.animation({transform: "t0," + -(h + w)}, duration, ease);
                }
                break;
            case "maskStairsB":
                s = w / 6;
                mask = svg.path(
                    "M" + x2 + "," + y +
                    "L" + (x2 - s) + "," + y +
                    "L" + (x2 - s) + "," + (y - s) +
                    "L" + (x2 - 2 * s) + "," + (y - s) +
                    "L" + (x2 - 2 * s) + "," + (y - 2 * s) +
                    "L" + (x2 - 3 * s) + "," + (y - 2 * s) +
                    "L" + (x2 - 3 * s) + "," + (y - 3 * s) +
                    "L" + (x2 - 4 * s) + "," + (y - 3 * s) +
                    "L" + (x2 - 4 * s) + "," + (y - 4 * s) +
                    "L" + (x2 - 5 * s) + "," + (y - 4 * s) +
                    "L" + (x2 - 5 * s) + "," + (y - 5 * s) +
                    "L" + x + "," + (y - 5 * s) +
                    "L" + x + "," + y2 +
                    "L" + x2 + "," + y2 +
                    "z"
                ).attr("fill", "#fff");
                if (direction === "in") {
                    mask.attr({transform: "t0," + (h + w)});
                    animation = Snap.animation({transform: "t0,0"}, duration, ease, removeMaskUrl());
                } else {//out
                    mask.attr({transform: "t0,0"});
                    animation = Snap.animation({transform: "t0," + (h + w)}, duration, ease);
                }
                break;
            case "maskStackX":
                h = h / 6;
                d1 = "M" + x + "," + y +
                        "L" + (x + w) + "," + y +
                        "L" + (x + w) + "," + (y + h) +
                        "L" + x + "," + (y + h) +
                        "z" +
                        "M" + x + "," + (y + h) +
                        "L" + (x + w) + "," + (y + h) +
                        "L" + (x + w) + "," + (y + h * 2) +
                        "L" + x + "," + (y + h * 2) +
                        "z" +
                        "M" + x + "," + (y + h * 2) +
                        "L" + (x + w) + "," + (y + h * 2) +
                        "L" + (x + w) + "," + (y + h * 3) +
                        "L" + x + "," + (y + h * 3) +
                        "z" +
                        "M" + x + "," + (y + h * 3) +
                        "L" + (x + w) + "," + (y + h * 3) +
                        "L" + (x + w) + "," + (y + h * 4) +
                        "L" + x + "," + (y + h * 4) +
                        "z" +
                        "M" + x + "," + (y + h * 4) +
                        "L" + (x + w) + "," + (y + h * 4) +
                        "L" + (x + w) + "," + (y + h * 5) +
                        "L" + x + "," + (y + h * 5) +
                        "z" +
                        "M" + x + "," + (y + h * 5) +
                        "L" + (x + w) + "," + (y + h * 5) +
                        "L" + (x + w) + "," + (y + h * 6) +
                        "L" + x + "," + (y + h * 6) +
                        "z";
                d2 = "M" + (x - w) + "," + y +
                        "L" + x + "," + y +
                        "L" + x + "," + (y + h) +
                        "L" + (x - w) + "," + (y + h) +
                        "z" +
                        "M" + x2 + "," + (y + h) +
                        "L" + (x2 + w) + "," + (y + h) +
                        "L" + (x2 + w) + "," + (y + h * 2) +
                        "L" + x2 + "," + (y + h * 2) +
                        "z" +
                        "M" + (x - w) + "," + (y + h * 2) +
                        "L" + x + "," + (y + h * 2) +
                        "L" + x + "," + (y + h * 3) +
                        "L" + (x - w) + "," + (y + h * 3) +
                        "z" +
                        "M" + x2 + "," + (y + h * 3) +
                        "L" + (x2 + w) + "," + (y + h * 3) +
                        "L" + (x2 + w) + "," + (y + h * 4) +
                        "L" + x2 + "," + (y + h * 4) +
                        "z" +
                        "M" + (x - w) + "," + (y + h * 4) +
                        "L" + x + "," + (y + h * 4) +
                        "L" + x + "," + (y + h * 5) +
                        "L" + (x - w) + "," + (y + h * 5) +
                        "z" +
                        "M" + x2 + "," + (y + h * 5) +
                        "L" + (x2 + w) + "," + (y + h * 5) +
                        "L" + (x2 + w) + "," + (y + h * 6) +
                        "L" + x2 + "," + (y + h * 6) +
                        "z";
                mask = svg.path(d2).attr("fill", "#fff");
                if (direction === "in") {
                    mask.attr({d: d2});
                    animation = Snap.animation({d: d1}, duration, ease, removeMaskUrl());
                } else { //out
                    mask.attr({d: d1});
                    animation = Snap.animation({d: d2}, duration, ease);
                }
                break;
            case "maskStackY":
                w = w / 6;
                d1 = "M" + x + "," + y +
                        "L" + (x + w) + "," + y +
                        "L" + (x + w) + "," + y2 +
                        "L" + x + "," + y2 +
                        "z" +
                        "M" + (x + w) + "," + y +
                        "L" + (x + w * 2) + "," + y +
                        "L" + (x + w * 2) + "," + y2 +
                        "L" + (x + w) + "," + y2 +
                        "z" +
                        "M" + (x + w * 2) + "," + y +
                        "L" + (x + w * 3) + "," + y +
                        "L" + (x + w * 3) + "," + y2 +
                        "L" + (x + w * 2) + "," + y2 +
                        "z" +
                        "M" + (x + w * 3) + "," + y +
                        "L" + (x + w * 4) + "," + y +
                        "L" + (x + w * 4) + "," + y2 +
                        "L" + (x + w * 3) + "," + y2 +
                        "z" +
                        "M" + (x + w * 4) + "," + y +
                        "L" + (x + w * 5) + "," + y +
                        "L" + (x + w * 5) + "," + y2 +
                        "L" + (x + w * 4) + "," + y2 +
                        "z" +
                        "M" + (x + w * 5) + "," + y +
                        "L" + (x + w * 6) + "," + y +
                        "L" + (x + w * 6) + "," + y2 +
                        "L" + (x + w * 5) + "," + y2 +
                        "z";
                d2 = "M" + x + "," + (y - h) +
                        "L" + (x + w) + "," + (y - h) +
                        "L" + (x + w) + "," + y +
                        "L" + x + "," + y +
                        "z" +
                        "M" + (x + w) + "," + y2 +
                        "L" + (x + w * 2) + "," + y2 +
                        "L" + (x + w * 2) + "," + (y2 + h) +
                        "L" + (x + w) + "," + (y2 + h) +
                        "z" +
                        "M" + (x + w * 2) + "," + (y - h) +
                        "L" + (x + w * 3) + "," + (y - h) +
                        "L" + (x + w * 3) + "," + y +
                        "L" + (x + w * 2) + "," + y +
                        "z" +
                        "M" + (x + w * 3) + "," + y2 +
                        "L" + (x + w * 4) + "," + y2 +
                        "L" + (x + w * 4) + "," + (y2 + h) +
                        "L" + (x + w * 3) + "," + (y2 + h) +
                        "z" +
                        "M" + (x + w * 4) + "," + (y - h) +
                        "L" + (x + w * 5) + "," + (y - h) +
                        "L" + (x + w * 5) + "," + y +
                        "L" + (x + w * 4) + "," + y +
                        "z" +
                        "M" + (x + w * 5) + "," + y2 +
                        "L" + (x + w * 6) + "," + y2 +
                        "L" + (x + w * 6) + "," + (y2 + h) +
                        "L" + (x + w * 5) + "," + (y2 + h) +
                        "z";
                mask = svg.path(d2).attr("fill", "#fff");
                if (direction === "in") {
                    mask.attr({d: d2});
                    animation = Snap.animation({d: d1}, duration, ease, removeMaskUrl());
                } else { //out
                    mask.attr({d: d1});
                    animation = Snap.animation({d: d2}, duration, ease);
                }
                break;
            case "maskTighten":
                d1 = "M" + x + "," + y +
                        "L" + x2 + "," + y +
                        "L" + cx + "," + cy +
                        "z" +
                        "M" + x2 + "," + y +
                        "L" + x2 + "," + y2 +
                        "L" + cx + "," + cy +
                        "z" +
                        "M" + x2 + "," + y2 +
                        "L" + x + "," + y2 +
                        "L" + cx + "," + cy +
                        "z" +
                        "M" + x + "," + y2 +
                        "L" + x + "," + y +
                        "L" + cx + "," + cy +
                        "z";
                d2 = "M" + x + "," + y +
                        "L" + x2 + "," + y +
                        "L" + cx + "," + y +
                        "z" +
                        "M" + x2 + "," + y +
                        "L" + x2 + "," + y2 +
                        "L" + x2 + "," + cy +
                        "z" +
                        "M" + x2 + "," + y2 +
                        "L" + x + "," + y2 +
                        "L" + cx + "," + y2 +
                        "z" +
                        "M" + x + "," + y2 +
                        "L" + x + "," + y +
                        "L" + x + "," + cy +
                        "z";
                mask = svg.path(d1).attr("fill", "#fff");
                if (direction === "in") {
                    mask.attr({d: d2});
                    animation = Snap.animation({d: d1}, duration, ease, removeMaskUrl());
                } else { //out
                    mask.attr({d: d1});
                    animation = Snap.animation({d: d2}, duration, ease);
                }
                break;
            case "maskRect":
                mask = svg.rect(x, y, w, h);
                mask.attr({fill: "#fff"});
                if (direction === "in") {
                    mask.attr({transform: "s0,0"});
                    animation = Snap.animation({transform: "s1,1"}, duration, ease, removeMaskUrl());
                } else { //out
                    mask.attr({transform: "s1,1"});
                    animation = Snap.animation({transform: "s0,0"}, duration, ease);
                }
                break;
            case "maskEllipse":
                mask = svg.ellipse(bb.cx, bb.cy, 10, 5);
                mask.attr({fill: "#fff"});
                if (direction === "in") {
                    mask.attr({transform: "s0,0"});
                    animation = Snap.animation({transform: "s" + w / 14 + "," + h / 7}, duration, ease, removeMaskUrl());
                } else {
                    mask.attr({transform: "s" + w / 14 + "," + h / 7});
                    animation = Snap.animation({transform: "s0,0"}, duration, ease);
                }
                break;
            case "maskCircle":
                mask = svg.circle(bb.cx, bb.cy, r);
                mask.attr({fill: "#fff"});
                if (direction === "in") {
                    mask.attr({r: 0});
                    animation = Snap.animation({r: r}, duration, ease, removeMaskUrl());
                } else { //out
                    mask.attr({r: r});
                    animation = Snap.animation({r: 0}, duration, ease);
                }
                break;
            case "maskRhomb":
                mask = svg.path(
                    "M" + bb.cx + "," + (bb.cy - h) +
                    "L" + (bb.cx + w) + "," + bb.cy +
                    "L" + bb.cx + "," + (bb.cy + h) +
                    "L" + (bb.cx - w) + "," + bb.cy +
                    "z"
                ).attr("fill", "#fff");
                if (direction === "in") {
                    mask.attr({transform: "s0,0"});
                    animation = Snap.animation({transform: "s1,1"}, duration, ease, removeMaskUrl());
                } else { //out
                    mask.attr({transform: "s1,1"});
                    animation = Snap.animation({transform: "s0,0"}, duration, ease);
                }
                break;
            case "maskPlus":
                d1 = "M" + cx + "," + cy +
                        "L" + cx + "," + y +
                        "L" + cx + "," + y +
                        "L" + cx + "," + cy +
                        "L" + x2 + "," + cy +
                        "L" + x2 + "," + cy +
                        "L" + cx + "," + cy +
                        "L" + cx + "," + y2 +
                        "L" + cx + "," + y2 +
                        "L" + cx + "," + cy +
                        "L" + x + "," + cy +
                        "L" + x + "," + cy +
                        "z";
                d2 = "M" + x + "," + y +
                        "L" + x + "," + y +
                        "L" + x2 + "," + y +
                        "L" + x2 + "," + y +
                        "L" + x2 + "," + y +
                        "L" + x2 + "," + y2 +
                        "L" + x2 + "," + y2 +
                        "L" + x2 + "," + y2 +
                        "L" + x + "," + y2 +
                        "L" + x + "," + y2 +
                        "L" + x + "," + y2 +
                        "L" + x + "," + y +
                        "z";
                mask = svg.path(d2).attr("fill", "#fff");
                if (direction === "in") {
                    mask.attr({d: d1});
                    animation = Snap.animation({d: d2}, duration, ease, removeMaskUrl());
                } else { //out
                    mask.attr({d: d2});
                    animation = Snap.animation({d: d1}, duration, ease);
                }
                break;
            case "maskPlusRotate":
                d1 = "M" + cx + "," + cy +
                        "L" + cx + "," + y +
                        "L" + cx + "," + y +
                        "L" + cx + "," + cy +
                        "L" + x2 + "," + cy +
                        "L" + x2 + "," + cy +
                        "L" + cx + "," + cy +
                        "L" + cx + "," + y2 +
                        "L" + cx + "," + y2 +
                        "L" + cx + "," + cy +
                        "L" + x + "," + cy +
                        "L" + x + "," + cy +
                        "z";
                d2 = "M" + x + "," + y +
                        "L" + x + "," + y +
                        "L" + x2 + "," + y +
                        "L" + x2 + "," + y +
                        "L" + x2 + "," + y +
                        "L" + x2 + "," + y2 +
                        "L" + x2 + "," + y2 +
                        "L" + x2 + "," + y2 +
                        "L" + x + "," + y2 +
                        "L" + x + "," + y2 +
                        "L" + x + "," + y2 +
                        "L" + x + "," + y +
                        "z";
                mask = svg.path(d2).attr("fill", "#fff");
                if (direction === "in") {
                    mask.attr({d: d1, transform: "t0,0r-180"});
                    animation = Snap.animation({d: d2, transform: "t0,0r0"}, duration, ease, removeMaskUrl());
                } else { //out
                    mask.attr({d: d2, transform: "t0,0r0"});
                    animation = Snap.animation({d: d1, transform: "t0,0r-180"}, duration, ease);
                }
                break;
            case "maskCross":
                d1 = "M" + cx + "," + cy +
                        "L" + x2 + "," + y +
                        "L" + x2 + "," + y +
                        "L" + cx + "," + cy +
                        "L" + x2 + "," + y2 +
                        "L" + x2 + "," + y2 +
                        "L" + cx + "," + cy +
                        "L" + x + "," + y2 +
                        "L" + x + "," + y2 +
                        "L" + cx + "," + cy +
                        "L" + x + "," + y +
                        "L" + x + "," + y +
                        "z";
                d2 = "M" + cx + "," + y +
                        "L" + x2 + "," + (y - h / 2) +
                        "L" + (x2 + w / 2) + "," + y +
                        "L" + x2 + "," + cy +
                        "L" + (x2 + w / 2) + "," + y2 +
                        "L" + x2 + "," + (y2 + h / 2) +
                        "L" + cx + "," + y2 +
                        "L" + x + "," + (y2 + h / 2) +
                        "L" + (x - w / 2) + "," + y2 +
                        "L" + x + "," + cy +
                        "L" + (x - w / 2) + "," + y +
                        "L" + x + "," + (y - h / 2) +
                        "z";
                mask = svg.path(d2).attr("fill", "#fff");
                if (direction === "in") {
                    mask.attr({d: d1});
                    animation = Snap.animation({d: d2}, duration, ease, removeMaskUrl());
                } else { //out
                    mask.attr({d: d2});
                    animation = Snap.animation({d: d1}, duration, ease);
                }
                break;
            case "maskCrossRotate":
                d1 = "M" + cx + "," + cy +
                        "L" + x2 + "," + y +
                        "L" + x2 + "," + y +
                        "L" + cx + "," + cy +
                        "L" + x2 + "," + y2 +
                        "L" + x2 + "," + y2 +
                        "L" + cx + "," + cy +
                        "L" + x + "," + y2 +
                        "L" + x + "," + y2 +
                        "L" + cx + "," + cy +
                        "L" + x + "," + y +
                        "L" + x + "," + y +
                        "z";
                d2 = "M" + cx + "," + y +
                        "L" + x2 + "," + (y - h / 2) +
                        "L" + (x2 + w / 2) + "," + y +
                        "L" + x2 + "," + cy +
                        "L" + (x2 + w / 2) + "," + y2 +
                        "L" + x2 + "," + (y2 + h / 2) +
                        "L" + cx + "," + y2 +
                        "L" + x + "," + (y2 + h / 2) +
                        "L" + (x - w / 2) + "," + y2 +
                        "L" + x + "," + cy +
                        "L" + (x - w / 2) + "," + y +
                        "L" + x + "," + (y - h / 2) +
                        "z";
                mask = svg.path(d2).attr("fill", "#fff");
                if (direction === "in") {
                    mask.attr({d: d1, transform: "t0,0r-180"});
                    animation = Snap.animation({d: d2, transform: "t0,0r0"}, duration, ease, removeMaskUrl());
                } else {//out
                    mask.attr({d: d2, transform: "t0,0r0"});
                    animation = Snap.animation({d: d1, transform: "t0,0r-180"}, duration, ease);
                }
                break;
            case "maskExpand":
                d1 = "M" + (bb.x - strokeWidth) + "," + bb.cy +
                        "L" + (bb.x - strokeWidth) + "," + (bb.y - strokeWidth) +
                        "L" + bb.cx + "," + (bb.y - strokeWidth) +
                        "L" + (bb.x2 + strokeWidth) + "," + (bb.y - strokeWidth) +
                        "L" + (bb.x2 + strokeWidth) + "," + bb.cy +
                        "L" + (bb.x2 + strokeWidth) + "," + (bb.y2 + strokeWidth) +
                        "L" + bb.cx + "," + (bb.y2 + strokeWidth) +
                        "L" + (bb.x - strokeWidth) + "," + (bb.y2 + strokeWidth) +
                        "z";
                d2 = "M" + (bb.x - strokeWidth) + "," + bb.cy +
                        "L" + bb.cx + "," + bb.cy +
                        "L" + bb.cx + "," + (bb.y - strokeWidth) +
                        "L" + bb.cx + "," + bb.cy +
                        "L" + (bb.x2 + strokeWidth) + "," + bb.cy +
                        "L" + bb.cx + "," + bb.cy +
                        "L" + bb.cx + "," + (bb.y2 + strokeWidth) +
                        "L" + bb.cx + "," + bb.cy +
                        "z";
                mask = svg.path(d1).attr("fill", "#fff");
                if (direction === "in") {
                    mask.attr({d: d2});
                    animation = Snap.animation({d: d1}, duration, ease, removeMaskUrl());
                } else { //out
                    mask.attr({d: d1});
                    animation = Snap.animation({d: d2}, duration, ease);
                }
                break;
            case "maskClockOne":
                d1 = "M" + bb.cx + "," + bb.cy +
                        "L" + bb.cx + "," + (bb.cy - bb.h - strokeWidth - 2) +
                        "L" + (bb.cx + bb.w + strokeWidth + 2) + "," + bb.cy +
                        "z" +
                        "M" + bb.cx + "," + bb.cy +
                        "L" + (bb.cx + bb.w + strokeWidth + 2) + "," + bb.cy +
                        "L" + bb.cx + "," + (bb.cy + bb.h + strokeWidth + 2) +
                        "z" +
                        "M" + bb.cx + "," + bb.cy +
                        "L" + bb.cx + "," + (bb.cy + bb.h + strokeWidth + 2) +
                        "L" + (bb.cx - bb.w - strokeWidth - 2) + "," + bb.cy +
                        "z" +
                        "M" + bb.cx + "," + bb.cy +
                        "L" + (bb.cx - bb.w - strokeWidth - 2) + "," + bb.cy +
                        "L" + bb.cx + "," + (bb.cy - bb.h - strokeWidth - 2) +
                        "z";
                d2 = "M" + bb.cx + "," + bb.cy +
                        "L" + (bb.cx + bb.w + strokeWidth + 2) + "," + bb.cy +
                        "L" + (bb.cx + bb.w + strokeWidth + 2) + "," + bb.cy +
                        "z" +
                        "M" + bb.cx + "," + bb.cy +
                        "L" + bb.cx + "," + (bb.cy + bb.h + strokeWidth + 2) +
                        "L" + bb.cx + "," + (bb.cy + bb.h + strokeWidth + 2) +
                        "z" +
                        "M" + bb.cx + "," + bb.cy +
                        "L" + (bb.cx - bb.w - strokeWidth - 2) + "," + bb.cy +
                        "L" + (bb.cx - bb.w - strokeWidth - 2) + "," + bb.cy +
                        "z" +
                        "M" + bb.cx + "," + bb.cy +
                        "L" + bb.cx + "," + (bb.cy - bb.h - strokeWidth - 2) +
                        "L" + bb.cx + "," + (bb.cy - bb.h - strokeWidth - 2) +
                        "z";
                mask = svg.path(d1).attr("fill", "#fff");
                if (direction === "in") {
                    mask.attr({d: d2});
                    animation = Snap.animation({d: d1}, duration, ease, removeMaskUrl());
                } else {
                    mask.attr({d: d1});
                    animation = Snap.animation({d: d2}, duration, ease);
                }
                break;
            case "maskClockTwo":
                d1 = "M" + bb.cx + "," + bb.cy +
                        "L" + bb.cx + "," + (bb.cy - bb.h - strokeWidth - 2) +
                        "L" + (bb.cx + bb.w + strokeWidth + 2) + "," + bb.cy +
                        "z" +
                        "M" + bb.cx + "," + bb.cy +
                        "L" + (bb.cx + bb.w + strokeWidth + 2) + "," + bb.cy +
                        "L" + bb.cx + "," + (bb.cy + bb.h + strokeWidth + 2) +
                        "z" +
                        "M" + bb.cx + "," + bb.cy +
                        "L" + bb.cx + "," + (bb.cy + bb.h + strokeWidth + 2) +
                        "L" + (bb.cx - bb.w - strokeWidth - 2) + "," + bb.cy +
                        "z" +
                        "M" + bb.cx + "," + bb.cy +
                        "L" + (bb.cx - bb.w - strokeWidth - 2) + "," + bb.cy +
                        "L" + bb.cx + "," + (bb.cy - bb.h - strokeWidth - 2) +
                        "z";
                d2 = "M" + bb.cx + "," + bb.cy +
                        "L" + bb.cx + "," + (bb.cy - bb.h - strokeWidth - 2) +
                        "L" + bb.cx + "," + (bb.cy - bb.h - strokeWidth - 2) +
                        "z" +
                        "M" + bb.cx + "," + bb.cy +
                        "L" + (bb.cx + bb.w + strokeWidth + 2) + "," + bb.cy +
                        "L" + (bb.cx + bb.w + strokeWidth + 2) + "," + bb.cy +
                        "z" +
                        "M" + bb.cx + "," + bb.cy +
                        "L" + bb.cx + "," + (bb.cy + bb.h + strokeWidth + 2) +
                        "L" + bb.cx + "," + (bb.cy + bb.h + strokeWidth + 2) +
                        "z" +
                        "M" + bb.cx + "," + bb.cy +
                        "L" + (bb.cx - bb.w - strokeWidth - 2) + "," + bb.cy +
                        "L" + (bb.cx - bb.w - strokeWidth - 2) + "," + bb.cy +
                        "z";
                mask = svg.path(d1).attr("fill", "#fff");
                if (direction === "in") {
                    mask.attr({d: d2});
                    animation = Snap.animation({d: d1}, duration, ease, removeMaskUrl());
                } else {//out
                    mask.attr({d: d1});
                    animation = Snap.animation({d: d2}, duration, ease);
                }
                break;
            case "maskLouversY":
                h = h / 6;
                d1 = "M" + x + "," + y +
                        "L" + (x + w) + "," + y +
                        "L" + (x + w) + "," + (y + h) +
                        "L" + x + "," + (y + h) +
                        "z" +
                        "M" + x + "," + (y + h) +
                        "L" + (x + w) + "," + (y + h) +
                        "L" + (x + w) + "," + (y + h * 2) +
                        "L" + x + "," + (y + h * 2) +
                        "z" +
                        "M" + x + "," + (y + h * 2) +
                        "L" + (x + w) + "," + (y + h * 2) +
                        "L" + (x + w) + "," + (y + h * 3) +
                        "L" + x + "," + (y + h * 3) +
                        "z" +
                        "M" + x + "," + (y + h * 3) +
                        "L" + (x + w) + "," + (y + h * 3) +
                        "L" + (x + w) + "," + (y + h * 4) +
                        "L" + x + "," + (y + h * 4) +
                        "z" +
                        "M" + x + "," + (y + h * 4) +
                        "L" + (x + w) + "," + (y + h * 4) +
                        "L" + (x + w) + "," + (y + h * 5) +
                        "L" + x + "," + (y + h * 5) +
                        "z" +
                        "M" + x + "," + (y + h * 5) +
                        "L" + (x + w) + "," + (y + h * 5) +
                        "L" + (x + w) + "," + (y + h * 6) +
                        "L" + x + "," + (y + h * 6) +
                        "z";
                d2 = "M" + x + "," + y +
                        "L" + (x + w) + "," + y +
                        "L" + (x + w) + "," + y +
                        "L" + x + "," + y +
                        "z" +
                        "M" + x + "," + (y + h) +
                        "L" + (x + w) + "," + (y + h) +
                        "L" + (x + w) + "," + (y + h) +
                        "L" + x + "," + (y + h) +
                        "z" +
                        "M" + x + "," + (y + h * 2) +
                        "L" + (x + w) + "," + (y + h * 2) +
                        "L" + (x + w) + "," + (y + h * 2) +
                        "L" + x + "," + (y + h * 2) +
                        "z" +
                        "M" + x + "," + (y + h * 3) +
                        "L" + (x + w) + "," + (y + h * 3) +
                        "L" + (x + w) + "," + (y + h * 3) +
                        "L" + x + "," + (y + h * 3) +
                        "z" +
                        "M" + x + "," + (y + h * 4) +
                        "L" + (x + w) + "," + (y + h * 4) +
                        "L" + (x + w) + "," + (y + h * 4) +
                        "L" + x + "," + (y + h * 4) +
                        "z" +
                        "M" + x + "," + (y + h * 5) +
                        "L" + (x + w) + "," + (y + h * 5) +
                        "L" + (x + w) + "," + (y + h * 5) +
                        "L" + x + "," + (y + h * 5) +
                        "z";
                mask = svg.path(d2).attr("fill", "#fff");
                if (direction === "in") {
                    mask.attr({d: d2});
                    animation = Snap.animation({d: d1}, duration, ease, removeMaskUrl());
                } else {//out
                    mask.attr({d: d1});
                    animation = Snap.animation({d: d2}, duration, ease);
                }
                break;
            case "maskLouversX":
                w = w / 6;
                d1 = "M" + x + "," + y +
                        "L" + (x + w) + "," + y +
                        "L" + (x + w) + "," + (y + h) +
                        "L" + x + "," + (y + h) +
                        "z" +
                        "M" + (x + w) + "," + y +
                        "L" + (x + w * 2) + "," + y +
                        "L" + (x + w * 2) + "," + (y + h) +
                        "L" + (x + w) + "," + (y + h) +
                        "z" +
                        "M" + (x + w * 2) + "," + y +
                        "L" + (x + w * 3) + "," + y +
                        "L" + (x + w * 3) + "," + (y + h) +
                        "L" + (x + w * 2) + "," + (y + h) +
                        "z" +
                        "M" + (x + w * 3) + "," + y +
                        "L" + (x + w * 4) + "," + y +
                        "L" + (x + w * 4) + "," + (y + h) +
                        "L" + (x + w * 3) + "," + (y + h) +
                        "z" +
                        "M" + (x + w * 4) + "," + y +
                        "L" + (x + w * 5) + "," + y +
                        "L" + (x + w * 5) + "," + (y + h) +
                        "L" + (x + w * 4) + "," + (y + h) +
                        "z" +
                        "M" + (x + w * 5) + "," + y +
                        "L" + (x + w * 6) + "," + y +
                        "L" + (x + w * 6) + "," + (y + h) +
                        "L" + (x + w * 5) + "," + (y + h) +
                        "z";
                d2 = "M" + x + "," + y +
                        "L" + x + "," + y +
                        "L" + x + "," + (y + h) +
                        "L" + x + "," + (y + h) +
                        "z" +
                        "M" + (x + w) + "," + y +
                        "L" + (x + w) + "," + y +
                        "L" + (x + w) + "," + (y + h) +
                        "L" + (x + w) + "," + (y + h) +
                        "z" +
                        "M" + (x + w * 2) + "," + y +
                        "L" + (x + w * 2) + "," + y +
                        "L" + (x + w * 2) + "," + (y + h) +
                        "L" + (x + w * 2) + "," + (y + h) +
                        "z" +
                        "M" + (x + w * 3) + "," + y +
                        "L" + (x + w * 3) + "," + y +
                        "L" + (x + w * 3) + "," + (y + h) +
                        "L" + (x + w * 3) + "," + (y + h) +
                        "z" +
                        "M" + (x + w * 4) + "," + y +
                        "L" + (x + w * 4) + "," + y +
                        "L" + (x + w * 4) + "," + (y + h) +
                        "L" + (x + w * 4) + "," + (y + h) +
                        "z" +
                        "M" + (x + w * 5) + "," + y +
                        "L" + (x + w * 5) + "," + y +
                        "L" + (x + w * 5) + "," + (y + h) +
                        "L" + (x + w * 5) + "," + (y + h) +
                        "z";
                mask = svg.path(d2).attr("fill", "#fff");
                if (direction === "in") {
                    mask.attr({d: d2});
                    animation = Snap.animation({d: d1}, duration, ease, removeMaskUrl());
                } else {//out
                    mask.attr({d: d1});
                    animation = Snap.animation({d: d2}, duration, ease);
                }
                break;
            case "maskPanX":
                mask = svg.path(
                    "M" + x + "," + y +
                    "L" + (x + w) + "," + y +
                    "L" + (x + w) + "," + (y + h) +
                    "L" + x + "," + (y + h) +
                    "z"
                ).attr("fill", "#fff");
                if (direction === "in") {
                    mask.attr({transform: "s0,1," + bb.cx + "," + bb.cy});
                    animation = Snap.animation({transform: "s1,1," + bb.cx + "," + bb.cy}, duration, ease, removeMaskUrl());
                } else {//out
                    mask.attr({transform: "s1,1," + bb.cx + "," + bb.cy});
                    animation = Snap.animation({transform: "s0,1," + bb.cx + "," + bb.cy}, duration, ease);
                }
                break;
            case "maskPanY":
                mask = svg.path(
                    "M" + x + "," + y +
                    "L" + (x + w) + "," + y +
                    "L" + (x + w) + "," + (y + h) +
                    "L" + x + "," + (y + h) +
                    "z"
                ).attr("fill", "#fff");
                if (direction === "in") {
                    mask.attr({transform: "s1,0," + bb.cx + "," + bb.cy});
                    animation = Snap.animation({transform: "s1,1," + bb.cx + "," + bb.cy}, duration, ease, removeMaskUrl());
                } else {//out
                    mask.attr({transform: "s1,1," + bb.cx + "," + bb.cy});
                    animation = Snap.animation({transform: "s1,0," + bb.cx + "," + bb.cy}, duration, ease);
                }
                break;
            case "maskSlideT":
                mask = svg.path(
                    "M" + x + "," + y +
                    "L" + (x + w) + "," + y +
                    "L" + (x + w) + "," + (y + h) +
                    "L" + x + "," + (y + h) +
                    "z"
                ).attr("fill", "#fff");
                if (direction === "in") {
                    mask.attr({transform: "t0," + -h});
                    animation = Snap.animation({transform: "t0,0"}, duration, ease, removeMaskUrl());
                } else {//out
                    mask.attr({transform: "t0,0"});
                    animation = Snap.animation({transform: "t0," + -h}, duration, ease);
                }
                break;
            case "maskSlideTR":
                mask = svg.path(
                    "M" + x + "," + y +
                    "L" + (x + w) + "," + y +
                    "L" + (x + w) + "," + (y + h) +
                    "L" + x + "," + (y + h) +
                    "z"
                ).attr("fill", "#fff");
                if (direction === "in") {
                    mask.attr({transform: "t" + w + "," + -h});
                    animation = Snap.animation({transform: "t0,0"}, duration, ease, removeMaskUrl());
                } else {//out
                    mask.attr({transform: "t0,0"});
                    animation = Snap.animation({transform: "t" + w + "," + -h}, duration, ease);
                }
                break;
            case "maskSlideTL":
                mask = svg.path(
                    "M" + x + "," + y +
                    "L" + (x + w) + "," + y +
                    "L" + (x + w) + "," + (y + h) +
                    "L" + x + "," + (y + h) +
                    "z"
                ).attr("fill", "#fff");
                if (direction === "in") {
                    mask.attr({transform: "t" + -w + "," + -h});
                    animation = Snap.animation({transform: "t0,0"}, duration, ease, removeMaskUrl());
                } else {//out
                    mask.attr({transform: "t0,0"});
                    animation = Snap.animation({transform: "t" + -w + "," + -h}, duration, ease);
                }
                break;
            case "maskSlideR":
                mask = svg.path(
                    "M" + x + "," + y +
                    "L" + (x + w) + "," + y +
                    "L" + (x + w) + "," + (y + h) +
                    "L" + x + "," + (y + h) +
                    "z"
                ).attr("fill", "#fff");
                if (direction === "in") {
                    mask.attr({transform: "t" + w + ",0"});
                    animation = Snap.animation({transform: "t0,0"}, duration, ease, removeMaskUrl());
                } else { //out
                    mask.attr({transform: "t0,0"});
                    animation = Snap.animation({transform: "t" + w + ",0"}, duration, ease);
                }
                break;
            case "maskSlideBR":
                mask = svg.path(
                    "M" + x + "," + y +
                    "L" + (x + w) + "," + y +
                    "L" + (x + w) + "," + (y + h) +
                    "L" + x + "," + (y + h) +
                    "z"
                ).attr("fill", "#fff");
                if (direction === "in") {
                    mask.attr({transform: "t" + w + "," + h});
                    animation = Snap.animation({transform: "t0,0"}, duration, ease, removeMaskUrl());
                } else { //out
                    mask.attr({transform: "t0,0"});
                    animation = Snap.animation({transform: "t" + w + "," + h}, duration, ease);
                }
                break;
            case "maskSlideB":
                mask = svg.path(
                    "M" + x + "," + y +
                    "L" + (x + w) + "," + y +
                    "L" + (x + w) + "," + (y + h) +
                    "L" + x + "," + (y + h) +
                    "z"
                ).attr("fill", "#fff");
                if (direction === "in") {
                    mask.attr({transform: "t0," + h});
                    animation = Snap.animation({transform: "t0,0"}, duration, ease, removeMaskUrl());
                } else { //out
                    mask.attr({transform: "t0,0"});
                    animation = Snap.animation({transform: "t0," + h}, duration, ease);
                }
                break;
            case "maskSlideBL":
                mask = svg.path(
                    "M" + x + "," + y +
                    "L" + (x + w) + "," + y +
                    "L" + (x + w) + "," + (y + h) +
                    "L" + x + "," + (y + h) +
                    "z"
                ).attr("fill", "#fff");
                if (direction === "in") {
                    mask.attr({transform: "t" + -w + "," + h});
                    animation = Snap.animation({transform: "t0,0"}, duration, ease, removeMaskUrl());
                } else {//out
                    mask.attr({transform: "t0,0"});
                    animation = Snap.animation({transform: "t" + -w + "," + h}, duration, ease);
                }
                break;
            case "maskSlideL":
                mask = svg.path(
                    "M" + x + "," + y +
                    "L" + (x + w) + "," + y +
                    "L" + (x + w) + "," + (y + h) +
                    "L" + x + "," + (y + h) +
                    "z"
                ).attr("fill", "#fff");
                if (direction === "in") {
                    mask.attr({transform: "t" + -w + ",0"});
                    animation = Snap.animation({transform: "t0,0"}, duration, ease, removeMaskUrl());
                } else { //out
                    mask.attr({transform: "t0,0"});
                    animation = Snap.animation({transform: "t" + -w + ",0"}, duration, ease);
                }
                break;
            case "maskGradL":
                grad = svg.gradient("l(0, 0, 1, 0)#fff-#fff:34-#000:60-#000:100");
                grad.addClass("elvn-gradient");
                mask = svg.path(
                    "M" + x + "," + y +
                    "L" + (x + w * 3) + "," + y +
                    "L" + (x + w * 3) + "," + (y + h) +
                    "L" + x + "," + (y + h) +
                    "z"
                ).attr({fill: grad});
                if (direction === "in") {
                    mask.attr({transform: "t" + -w * 2 + ",0"});
                    animation = Snap.animation({transform: "t0,0"}, duration, ease, removeMaskUrl());
                } else {
                    mask.attr({transform: "t0,0"});
                    animation = Snap.animation({transform: "t" + -w * 2 + ",0"}, duration, ease);
                }
                break;
            case "maskGradT":
                grad = svg.gradient("l(0, 0, 0, 1)#fff-#fff:34-#000:60-#000:100");
                grad.addClass("elvn-gradient");
                mask = svg.path(
                    "M" + x + "," + y +
                    "L" + (x + w) + "," + y +
                    "L" + (x + w) + "," + (y + h * 3) +
                    "L" + x + "," + (y + h * 3) +
                    "z"
                ).attr({fill: grad});
                if (direction === "in") {
                    mask.attr({transform: "t0," + -h * 2});
                    animation = Snap.animation({transform: "t0,0"}, duration, ease, removeMaskUrl());
                } else {
                    mask.attr({transform: "t0,0"});
                    animation = Snap.animation({transform: "t0," + -h * 2}, duration, ease);
                }
                break;
            case "maskGradR":
                grad = svg.gradient("l(0, 0, 1, 0)#000-#000:34-#fff:60-#fff:100");
                grad.addClass("elvn-gradient");
                mask = svg.path(
                    "M" + x + "," + y +
                    "L" + (x + w * 3) + "," + y +
                    "L" + (x + w * 3) + "," + (y + h) +
                    "L" + x + "," + (y + h) +
                    "z"
                ).attr({fill: grad});
                if (direction === "in") {
                    mask.attr({transform: "t0,0"});
                    animation = Snap.animation({transform: "t" + -w * 2 + ",0"}, duration, ease, removeMaskUrl());
                } else { //out
                    mask.attr({transform: "t" + -w * 2 + ",0"});
                    animation = Snap.animation({transform: "t0,0"}, duration, ease);
                }
                break;
            case "maskGradB":
                grad = svg.gradient("l(0, 0, 0, 1)#000-#000:34-#fff:60-#fff:100");
                grad.addClass("elvn-gradient");
                mask = svg.path(
                    "M" + x + "," + y +
                    "L" + (x + w) + "," + y +
                    "L" + (x + w) + "," + (y + h * 3) +
                    "L" + x + "," + (y + h * 3) +
                    "z"
                ).attr({fill: grad});
                if (direction === "in") {
                    mask.attr({transform: "t0,0"});
                    animation = Snap.animation({transform: "t0," + -h * 2}, duration, ease, removeMaskUrl());
                } else { //out
                    mask.attr({transform: "t0," + -h * 2});
                    animation = Snap.animation({transform: "t0,0"}, duration, ease);
                }
                break;
            default: //maskRect
                mask = svg.rect(x, y, w, h);
                mask.attr({fill: "#fff"});
                if (direction === "in") {
                    mask.attr({transform: "s0,0"});
                    animation = Snap.animation({transform: "s1,1"}, duration, ease, removeMaskUrl());
                } else { //out
                    mask.attr({transform: "s1,1"});
                    animation = Snap.animation({transform: "s0,0"}, duration, ease);
                }
            }

            group.insertBefore(wrapperGroup).add(mask);
            workingMask = svg.mask();
            workingMask.add(group).toDefs();
            wrapperGroup.attr({mask: workingMask});
            Snap.select("#" + workingMask.id).addClass("elvn-mask");
            tmp = setTimeout(function () {
                mask.animate(animation);
            }, delay);
            timeouts.push(tmp);

        //gaussian blur
        } else if (options && options.match(/gaussBlur/)) {

            /*for example:
                class="elvn-layer" data-elvn="gaussBlur, in, 0, 1000, 20"
            */

            options = options.replace(/\s+/g, "").split(",");
            direction = options[1];
            delay = Number(options[2]) + globalDelay;
            duration = Number(options[3]);
            std = options[4];
            defs = svg.select("defs");
            currentUniqueNum = uniqueNum();
            filter = Snap.parse("<filter id='elvn-gauss" + currentUniqueNum + "' filterUnits='userSpaceOnUse' class='elvn-filter' x='-50%' y='-50%' width='300%' height='300%'><feGaussianBlur id='elvn-stdev" + currentUniqueNum + "' in='SourceGraphic' stdDeviation='" + std + "'/></filter>");
            if (instant) {
                delay = 0;
            }
            defs.append(filter);
            filter = svg.select("#elvn-gauss" + currentUniqueNum);
            currentGroup = elem.parent();
            if (currentGroup.hasClass("elvn-wrapper")) {
                group = currentGroup;
            } else {
                group = svg.g();
                group.insertBefore(elem).add(elem).addClass("elvn-wrapper");
            }
            group.attr("filter", filter);
            stdDev = svg.select("#elvn-stdev" + currentUniqueNum);
            if (direction === "in") {
                stdDev.attr({stdDeviation: std});
                group.attr({opacity: 0});
                tmp = setTimeout(function () {
                    group.animate({opacity: 1}, duration * 0.2, mina.linear, function () {
                        stdDev.animate({stdDeviation: 0}, duration * 0.8, mina.linear, function () {
                            group.attr({filter: ""});
                        });
                    });

                }, delay);
                timeouts.push(tmp);
            } else {
                stdDev.attr({stdDeviation: 0});
                group.attr({opacity: 1});
                tmp = setTimeout(function () {
                    stdDev.animate({stdDeviation: std}, duration * 0.8, mina.linear, function () {
                        group.animate({opacity: 0}, duration * 0.2, mina.linear, function () {
                            group.attr({filter: ""});
                        });
                    });
                }, delay);
                timeouts.push(tmp);
            }

        //custom transform and opacity
        } else if (options && options.match(/custom/)) {

            /*
            when "custom" animation is used, the second data attribute "data-elvncustom" must be added with transform string in Snap format
            for ex.: class="elvn-layer" data-elvn="custom, in, 0, 1000, 100, easeinout" data-elvncustom="t100,0s2,2r-270"
            */

            if (elem.attr("data-elvncustom")) {
                customCommand = elem.attr("data-elvncustom");
            } else {
                customCommand = "t0,0";
            }
            options = options.replace(/\s+/g, "").split(",");
            direction = options[1];
            delay = Number(options[2]) + globalDelay;
            duration = Number(options[3]);
            opacity = Number(options[4]);
            easing = options[5];

            if (opacity > 1) {
                opacity = opacity / 100;
            }
            //case of easing func
            switch (easing) {
            case "backin":
                ease = mina.backin;
                break;
            case "backout":
                ease = mina.backout;
                break;
            case "bounce":
                ease = mina.bounce;
                break;
            case "easein":
                ease = mina.easein;
                break;
            case "easeinout":
                ease = mina.easeinout;
                break;
            case "easeout":
                ease = mina.easeout;
                break;
            case "elastic":
                ease = mina.elastic;
                break;
            default: //linear
                ease = mina.linear;
            }

            if (instant) {
                delay = 0;
            }

            currentGroup = elem.parent();
            if (currentGroup.hasClass("elvn-wrapper")) {
                group = currentGroup;
            } else {
                group = svg.g();
                group.insertBefore(elem).add(elem).addClass("elvn-wrapper");
            }

            if (direction === "in") {
                group.attr({transform: customCommand, opacity: opacity});
                tmp = setTimeout(function () {
                    group.animate({transform: "", opacity: 1}, duration, ease);
                }, delay);
                timeouts.push(tmp);
            } else { //out
                group.attr({transform: "", opacity: 1});
                tmp = setTimeout(function () {
                    group.animate({transform: customCommand, opacity: opacity}, duration, ease);
                }, delay);
                timeouts.push(tmp);
            }

        //animating element along SVG path (new from ver. 1.6)
        } else if (options && options.match(/alongPath/)) {

            /*
            when "alongPath" animation is used, the second data attribute "data-elvnalongpath" must be added with a path"s data
            for example:
            class="elvn-layer" data-elvn="alongPath, in, 0, 1000, 0, easeinout" data-elvnalongpath="M181 127h1c2.6 0.16 4.94-1.64 5.14-3.73 0.24-2.62-2.19-4.91-5.44-5.1 -4.05-0.24-7.58 2.22-7.88 5.5 -0.38 4.1 3.43 7.67 8.5 7.97 6.33 0.38 11.85-3.47 12.32-8.59 0.59-6.4-5.36-11.98-13.28-12.46 -9.9-0.59-18.52 5.42-19.25 13.42 -0.92 10.01 8.37 18.72 20.74 19.46 15.47 0.93 28.93-8.46 30.08-20.97 1.43-15.64-13.08-29.25-32.41-30.41 -24.17-1.45-45.21 13.22-47 32.77 -2.24 24.43 20.44 45.7 50.64 47.51 37.76 2.26 70.64-20.66 73.43-51.2 3.5-38.17-31.93-71.41-79.13-74.24 -59-3.53-110.37 32.28-114.74 80 -5.46 59.65 49.89 111.58 123.64 116C276.62 248.28 355.92 195.99 367 125v-10"
            */

            if (elem.attr("data-elvnalongpath")) {
                alongpathCommand = elem.attr("data-elvnalongpath");
            } else {
                alongpathCommand = "";
            }
            options = options.replace(/\s+/g, "").split(",");
            direction = options[1];
            delay = Number(options[2]) + globalDelay;
            duration = Number(options[3]);
            rotation = Number(options[4]);
            easing = options[5];

            if (rotation < -180) {
                rotation = -180;
            } else if (rotation > 180) {
                rotation = 180;
            }

            //case of easing func
            switch (easing) {
            case "backin":
                ease = mina.backin;
                break;
            case "backout":
                ease = mina.backout;
                break;
            case "bounce":
                ease = mina.bounce;
                break;
            case "easein":
                ease = mina.easein;
                break;
            case "easeinout":
                ease = mina.easeinout;
                break;
            case "easeout":
                ease = mina.easeout;
                break;
            case "elastic":
                ease = mina.elastic;
                break;
            default: //linear
                ease = mina.linear;
            }

            if (instant) {
                delay = 0;
            }

            currentGroup = elem.parent();
            if (currentGroup.hasClass("elvn-wrapper")) {
                group = currentGroup;
            } else {
                group = svg.g();
                group.insertBefore(elem).add(elem).addClass("elvn-wrapper");
            }

            if (direction === "in") {
                group.attr({opacity: opacity});
                tmp = setTimeout(function () {
                    group.moveAlongPath(direction, alongpathCommand, rotation, duration, ease);
                }, delay);
                timeouts.push(tmp);
            } else {
                group.attr({opacity: 1});
                tmp = setTimeout(function () {
                    group.moveAlongPath(direction, alongpathCommand, rotation, duration, ease);
                }, delay);
                timeouts.push(tmp);
            }

        //morphing effect for "path" elements (new from ver. 1.1)
        } else if (options && options.match(/morph/)) {

            /*
            when "morph" animation is used, the second data attribute "data-elvnmorph" must be added
            with the value of "d" attribute of <path> tag is a starting (if "in") or ending (if "out") path data
            for example:
            class="elvn-layer" data-elvn="morph, in, 0, 1000, easeinout" data-elvnmorph="M171.207611,110.342499c39.094391,-97.125 192.262817,0 0,124.875c-192.263035,-124.875 -39.094742,-222 0,-124.875z"
            */

            if (elem.attr("data-elvnmorph")) {
                morphCommand = elem.attr("data-elvnmorph");
            } else {
                morphCommand = "M0,0";
            }
            options = options.replace(/\s+/g, "").split(",");
            direction = options[1];
            delay = Number(options[2]) + globalDelay;
            duration = Number(options[3]);
            easing = options[4];

            //case of easing func
            switch (easing) {
            case "backin":
                ease = mina.backin;
                break;
            case "backout":
                ease = mina.backout;
                break;
            case "bounce":
                ease = mina.bounce;
                break;
            case "easein":
                ease = mina.easein;
                break;
            case "easeinout":
                ease = mina.easeinout;
                break;
            case "easeout":
                ease = mina.easeout;
                break;
            case "elastic":
                ease = mina.elastic;
                break;
            default: //linear
                ease = mina.linear;
            }

            if (instant) {
                delay = 0;
            }

            if (elem.type.toLowerCase() === "path") {
                currentOpacity = elem.attr("opacity");
                elem.attr("data-elvnopacity", currentOpacity);
                clon = elem.clone();
                elem.attr("opacity", 0);
                clon.attr({"data-elvn": "", "data-elvnopacity": "", "data-elvnmorph": ""})
                    .removeClass("elvn-layer")
                    .addClass("elvn-clon");
                if (direction === "in") {
                    currentPathsD = elem.attr("d");
                    clon.attr({d: morphCommand});
                    tmp = setTimeout(function () {
                        clon.animate({d: currentPathsD}, duration, ease);
                    }, delay);
                    timeouts.push(tmp);
                } else { //out
                    tmp = setTimeout(function () {
                        clon.animate({d: morphCommand}, duration, ease);
                    }, delay);
                    timeouts.push(tmp);
                }
            }
        } //end of all "if else"
    } //end enlivenEmMain

    //create jQuery Plugns .enlivenEm() and .enlivenEmPrivate()
    $.fn.extend({
        //main jQuery plugin
        enlivenEm: function (callback) {
            return this.each(function () {
                var $src = $(this),
                    $tag = $src.prop("tagName").toLowerCase(),
                    classes = $src.attr("class"),
                    id = $src.attr("id"),
                    sourceSvg,
                    newWrapper,
                    isImgTagUsed,
                    $parent;

                function onSvgReady() {
                    var parent = new Snap($parent[0]), //new Snap instance
                        svg = parent.select("svg"),
                        w = svg.attr("width"),
                        h = svg.attr("height"),
                        doneOnce = false,
                        timeouts = [],
                        is = Snap.is,
                        shift,
                        $svg,
                        mainOptions,
                        disableViewport,
                        onClick,
                        startVisible,
                        viewportShift,
                        responsive,
                        globalDelay,
                        loop,
                        loopDelay,
                        code,
                        attrs,
                        position,
                        leftShift,
                        topShift,
                        svgHeight,
                        time;

                    if (!w && !h) {
                        w = svg.attr("viewBox").w;
                        h = svg.attr("viewBox").h;
                    }
                    if (is(w, "string")) {
                        w = Number(w.replace(/[^0-9.]/g, ""));
                    }
                    if (is(h, "string")) {
                        h = Number(h.replace(/[^0-9.]/g, ""));
                    }

                    svg.addClass(classes);
                    svg.attr("overflow", "hidden");
                    if (id !== undefined) {
                        svg.attr("id", id);
                    } else {
                        svg.attr("id", "elvn-" + uniqueNum());
                    }
                    if ($tag === "img") {
                        $src.remove();
                    }

                    $svg = $parent.children("svg");
                    mainOptions = svg.attr("data-global-elvn");

                    //setting global options
                    if (mainOptions) {
                        mainOptions = mainOptions.replace(/\s+/g, "").split(",");
                        if (mainOptions[0] === "disableViewport") {
                            disableViewport = true;
                        } else {
                            disableViewport = false;
                        }
                        if (mainOptions[1] === "enableClick") {
                            onClick = true;
                        } else {
                            onClick = false;
                        }
                        viewportShift = mainOptions[2];
                        if (mainOptions[3] === "startVisible") {
                            startVisible = true;
                        } else {
                            startVisible = false;
                        }
                        if (mainOptions[4] === "responsive") {
                            responsive = true;
                        } else {
                            responsive = false;
                        }
                        if (mainOptions[5] === undefined) {
                            globalDelay = 0;
                        } else {
                            globalDelay = Number(mainOptions[5]);
                        }
                        if (mainOptions[6] === "loop") {
                            loop = true;
                        } else {
                            loop = false;
                        }
                        if (mainOptions[7] === undefined) {
                            loopDelay = 500;
                        } else {
                            loopDelay = Number(mainOptions[7]);
                        }
                        if (loopDelay <= 500) {
                            loopDelay = 500;
                        }
                    } else {
                        disableViewport = false;
                        onClick = false;
                        viewportShift = "none";
                        startVisible = false;
                        responsive = false;
                        loop = false;
                        loopDelay = 500;
                    }

                    //make svg responsive
                    if (responsive) {
                        $svg.wrap("<div class='elvn-responsive'></div>");
                        $parent = $svg.parent();//getting new jQuery parent
                        parent = new Snap($parent[0]);//getting new Snap parent
                        $parent.css("padding-bottom", Number(h / w * 100).toFixed(2) + "%");
                        svg.attr({
                            viewBox: "0 0 " + w + " " + h,
                            preserveAspectRatio: "xMinYMin meet",
                            width: "100%",
                            height: "100%"
                        });
                        code = svg.innerSVG();
                        attrs = {};
                        $($svg[0].attributes).each(function () {
                            if (this.value) {
                                attrs[this.nodeName] = this.value;
                            } else {
                                attrs[this.nodeName] = this.nodeValue;
                            }
                        });
                        $parent.empty();
                        svg = parent.append(Snap.parse("<svg></svg>")).select("svg");
                        svg.select("desc").remove();
                        svg.append(Snap.parse(code));
                        Object.keys(attrs).forEach(function (key) {
                            svg.attr(key, attrs[key]);
                        });
                        $svg = $parent.children("svg");
                    } else {
                        $svg.wrap("<div class='elvn'></div>");
                    }

                    //fix sub-pixel render bug in Firefox and IE
                    position = svg.node.getScreenCTM();
                    if (position) {
                        leftShift = (-position.e % 1);
                        topShift = (-position.f % 1);
                        if (leftShift === 0) {
                            leftShift = 0;
                        } else if (leftShift <= -0.5) {
                            leftShift = leftShift + 1;
                        }
                        if (topShift === 0) {
                            topShift = 0;
                        } else if (topShift <= -0.5) {
                            topShift = topShift + 1;
                        }
                        $(svg.node).css({left: leftShift + "px", top: topShift + "px"});
                    }

                    //Hide on start if global is set to "invisible"
                    if (!startVisible) {
                        svg.attr("visibility", "hidden");
                    } else {
                        svg.attr("visibility", "visible");
                    }

                    //calculating viewport"s shift
                    svgHeight = verge.rectangle(svg.parent().node).height;
                    switch (viewportShift) {
                    case "none":
                        shift = 0.1;
                        break;
                    case "oneFourth":
                        shift = svgHeight / 4;
                        break;
                    case "oneThird":
                        shift = svgHeight / 3;
                        break;
                    case "oneHalf":
                        shift = svgHeight / 2;
                        break;
                    case "twoThird":
                        shift = svgHeight * 2 / 3;
                        break;
                    case "full":
                        shift = svgHeight;
                        break;
                    default: //one-half
                        shift = svgHeight / 2;
                    }

                    //execute a callback
                    if (typeof callback === "function") {
                        callback();
                    }

                    //calculating total loop"s duration
                    if (loop) {
                        time = 0;
                        svg.selectAll(".elvn-layer").forEach(function (elem) {
                            var options = elem.attr("data-elvn");
                            if (options && options.match(/drawLines/)) {
                                options = options.replace(/\s+/g, "").split(",");
                                if (time < (Number(options[1]) + Number(options[2]))) {
                                    time = Number(options[1]) + Number(options[2]);
                                }
                            } else if (options) {
                                options = options.replace(/\s+/g, "").split(",");
                                if (time < (Number(options[2]) + Number(options[3]))) {
                                    time = Number(options[2]) + Number(options[3]);
                                }
                            }
                        });
                        loopDelay = loopDelay + time;
                    }

                    function repeatAnimation() {
                        var i;
                        svg.attr("visibility", "visible");
                        for (i = 0; i < timeouts.length; i += 1) {
                            clearTimeout(timeouts[i]);
                        }
                        timeouts = [];
                        svg.selectAll(".elvn-source").forEach(function (elem) {
                            elem.stop();
                        });
                        svg.selectAll(".elvn-clon").remove();
                        svg.selectAll(".elvn-wrapper").forEach(function (wrapper) {
                            wrapper.stop();
                            wrapper.transform("");
                        });
                        svg.selectAll(".elvn-mask").remove();
                        svg.selectAll(".elvn-gradient").remove();
                        svg.selectAll(".elvn-filter").remove();
                        svg.selectAll(".elvn-layer").forEach(function (elem) {
                            if (elem.attr("data-elvnopacity")) {
                                var op = elem.attr("data-elvnopacity");
                                elem.attr("opacity", op);
                            }
                            //proceed animation for each layer
                            enlivenEmMain(elem, svg, w, h, timeouts, 0);
                        }, svg, w, h);
                    }

                    function doLoop() {
                        if (verge.inViewport(svg.parent().node, -shift)) {
                            repeatAnimation();
                        }
                        setTimeout(function () {
                            doLoop();
                        }, loopDelay);
                    }

                    function viewportEvent() {
                        return function () {
                            var win_h = $(window).height(),
                                sto;
                            if (shift > win_h) {
                                shift = win_h - 10;
                            }
                            if (verge.inViewport(svg.parent().node, -shift)) {
                                if (!doneOnce) {
                                    doneOnce = true;
                                    if (loop) {
                                        sto = setTimeout(function () {
                                            doLoop();
                                            clearTimeout(sto);
                                        }, globalDelay);
                                    } else {
                                        svg.attr("visibility", "visible");
                                        svg.selectAll(".elvn-layer").forEach(function (elem) {
                                            enlivenEmMain(elem, svg, w, h, timeouts, globalDelay);
                                        }, svg, w, h);
                                    }
                                }
                            }
                        };
                    }

                    //bind viewport event
                    if (!disableViewport) {
                        $(window).on("resize, scroll", viewportEvent());
                    }

                    if (!loop && onClick) {
                        //animate when a user clicks svg"s parent (if global option is "enableClick" and not "loop")
                        $parent.click(function () {
                            repeatAnimation();
                        });
                    } else if (loop && onClick && disableViewport) {
                        //if globals are "disableViewport", "enableClick" and "loop", a looped animation starts when user clicks
                        $parent.click(function () {
                            if (!doneOnce) {
                                doneOnce = true;
                                var sto = setTimeout(function () {
                                    svg.attr("visibility", "visible");
                                    doLoop();
                                    clearTimeout(sto);
                                }, globalDelay);
                            }
                        });
                    }

                    if (isImgTagUsed) {
                        $(document).ajaxComplete(function () {
                            $(window).scroll();
                        });
                    } else {
                        $(window).scroll();
                    }
                } //end onSvgReady

                if ($tag === "img") {
                    sourceSvg = $src.attr("src");
                    isImgTagUsed = true;
                    $src.css("visibility", "hidden");
                    newWrapper = $("<div></div>").insertAfter($src);
                    //replace SVG in <img> with in-line SVG code from this <img> src
                    $parent = $src.parent();
                    $parent = newWrapper.load(sourceSvg, onSvgReady);
                } else if ($tag === "svg") {
                    isImgTagUsed = false;
                    $src.wrap("<div></div>");
                    $parent = $src.parent();
                    onSvgReady();
                }

            }); //end return
        }, //end enlivenEm()

        //private method for using in the Animation Editor only
        enlivenEmPrivate: function (elem, svg, w, h, instant) {
            var tm = [],
                globalDelay = 0;
            enlivenEmMain(elem, svg, w, h, tm, globalDelay, instant);
        },

        //jQuery method .trigger("click") doesn"t work with SVG.
        //So this is a special method for invoke "click" event programmatic.
        svgClick: function () {
            this.each(function (ignore, event) {
                var evt = document.createEvent("MouseEvents");
                evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                event.dispatchEvent(evt);
            });
        }
    }); //end jQuery plugin

    //when document is fully loaded animate <svg> or <img> with class .enlivenem
    $(window).on("load", function () {
        $(".enlivenem").enlivenEm();
    });

}(window.jQuery));