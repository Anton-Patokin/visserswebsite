/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (a, b, c) {
  "use strict";
  !function () {
    b.module("ngMaterial", ["ng", "ngAnimate", "ngAria", "material.core", "material.core.gestures", "material.core.layout", "material.core.theming.palette", "material.core.theming", "material.core.animate", "material.components.autocomplete", "material.components.bottomSheet", "material.components.backdrop", "material.components.button", "material.components.card", "material.components.checkbox", "material.components.content", "material.components.chips", "material.components.dialog", "material.components.datepicker", "material.components.divider", "material.components.fabActions", "material.components.fabShared", "material.components.fabSpeedDial", "material.components.fabToolbar", "material.components.fabTrigger", "material.components.gridList", "material.components.icon", "material.components.list", "material.components.menu", "material.components.input", "material.components.menuBar", "material.components.progressCircular", "material.components.progressLinear", "material.components.radioButton", "material.components.select", "material.components.showHide", "material.components.sidenav", "material.components.slider", "material.components.sticky", "material.components.subheader", "material.components.swipe", "material.components.switch", "material.components.tabs", "material.components.toast", "material.components.toolbar", "material.components.tooltip", "material.components.virtualRepeat", "material.components.whiteframe"]);
  }(), function () {
    function a(a, b) {
      if (b.has("$swipe")) {
        a.warn("You are using the ngTouch module. \nAngular Material already has mobile click, tap, and swipe support... \nngTouch is not supported with Angular Material!");
      }
    }function c(a, b) {
      a.decorator("$$rAF", ["$delegate", d]), b.theme("default").primaryPalette("indigo").accentPalette("pink").warnPalette("deep-orange").backgroundPalette("grey");
    }function d(a) {
      return a.throttle = function (b) {
        var c, d, e, f;return function () {
          c = arguments, f = this, e = b, d || (d = !0, a(function () {
            e.apply(f, Array.prototype.slice.call(c)), d = !1;
          }));
        };
      }, a;
    }b.module("material.core", ["ngAnimate", "material.core.animate", "material.core.layout", "material.core.gestures", "material.core.theming"]).config(c).run(a), a.$inject = ["$log", "$injector"], c.$inject = ["$provide", "$mdThemingProvider"];
  }(), function () {
    function a(a) {
      function b(a) {
        return c ? "webkit" + a.charAt(0).toUpperCase() + a.substring(1) : a;
      }var c = /webkit/i.test(a.vendorPrefix);return { KEY_CODE: { COMMA: 188, ENTER: 13, ESCAPE: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT_ARROW: 37, UP_ARROW: 38, RIGHT_ARROW: 39, DOWN_ARROW: 40, TAB: 9, BACKSPACE: 8, DELETE: 46 }, CSS: { TRANSITIONEND: "transitionend" + (c ? " webkitTransitionEnd" : ""), ANIMATIONEND: "animationend" + (c ? " webkitAnimationEnd" : ""), TRANSFORM: b("transform"), TRANSFORM_ORIGIN: b("transformOrigin"), TRANSITION: b("transition"), TRANSITION_DURATION: b("transitionDuration"), ANIMATION_PLAY_STATE: b("animationPlayState"), ANIMATION_DURATION: b("animationDuration"), ANIMATION_NAME: b("animationName"), ANIMATION_TIMING: b("animationTimingFunction"), ANIMATION_DIRECTION: b("animationDirection") }, MEDIA: { xs: "(max-width: 599px)", "gt-xs": "(min-width: 600px)", sm: "(min-width: 600px) and (max-width: 959px)", "gt-sm": "(min-width: 960px)", md: "(min-width: 960px) and (max-width: 1279px)", "gt-md": "(min-width: 1280px)", lg: "(min-width: 1280px) and (max-width: 1919px)", "gt-lg": "(min-width: 1920px)", xl: "(min-width: 1920px)" }, MEDIA_PRIORITY: ["xl", "gt-lg", "lg", "gt-md", "md", "gt-sm", "sm", "gt-xs", "xs"] };
    }b.module("material.core").factory("$mdConstant", a), a.$inject = ["$sniffer"];
  }(), function () {
    function a(a, c) {
      function d() {
        return [].concat(s);
      }function e() {
        return s.length;
      }function f(a) {
        return s.length && a > -1 && a < s.length;
      }function g(a) {
        return !!a && f(m(a) + 1);
      }function h(a) {
        return !!a && f(m(a) - 1);
      }function i(a) {
        return f(a) ? s[a] : null;
      }function j(a, b) {
        return s.filter(function (c) {
          return c[a] === b;
        });
      }function k(a, c) {
        return a ? (b.isNumber(c) || (c = s.length), s.splice(c, 0, a), m(a)) : -1;
      }function l(a) {
        n(a) && s.splice(m(a), 1);
      }function m(a) {
        return s.indexOf(a);
      }function n(a) {
        return a && m(a) > -1;
      }function o() {
        return s.length ? s[0] : null;
      }function p() {
        return s.length ? s[s.length - 1] : null;
      }function q(a, d, e, g) {
        e = e || r;for (var h = m(d);;) {
          if (!f(h)) return null;var i = h + (a ? -1 : 1),
              j = null;if (f(i) ? j = s[i] : c && (j = a ? p() : o(), i = m(j)), null === j || i === g) return null;if (e(j)) return j;b.isUndefined(g) && (g = i), h = i;
        }
      }var r = function r() {
        return !0;
      };a && !b.isArray(a) && (a = Array.prototype.slice.call(a)), c = !!c;var s = a || [];return { items: d, count: e, inRange: f, contains: n, indexOf: m, itemAt: i, findBy: j, add: k, remove: l, first: o, last: p, next: b.bind(null, q, !1), previous: b.bind(null, q, !0), hasPrevious: h, hasNext: g };
    }b.module("material.core").config(["$provide", function (b) {
      b.decorator("$mdUtil", ["$delegate", function (b) {
        return b.iterator = a, b;
      }]);
    }]);
  }(), function () {
    function a(a, c, d) {
      function e(a) {
        var c = m[a];b.isUndefined(c) && (c = m[a] = f(a));var d = o[c];return b.isUndefined(d) && (d = g(c)), d;
      }function f(b) {
        return a.MEDIA[b] || ("(" !== b.charAt(0) ? "(" + b + ")" : b);
      }function g(a) {
        var b = n[a];return b || (b = n[a] = d.matchMedia(a)), b.addListener(h), o[b.media] = !!b.matches;
      }function h(a) {
        c.$evalAsync(function () {
          o[a.media] = !!a.matches;
        });
      }function i(a) {
        return n[a];
      }function j(b, c) {
        for (var d = 0; d < a.MEDIA_PRIORITY.length; d++) {
          var e = a.MEDIA_PRIORITY[d];if (n[m[e]].matches) {
            var f = l(b, c + "-" + e);if (b[f]) return b[f];
          }
        }return b[l(b, c)];
      }function k(c, d, e) {
        var f = [];return c.forEach(function (c) {
          var g = l(d, c);b.isDefined(d[g]) && f.push(d.$observe(g, b.bind(void 0, e, null)));for (var h in a.MEDIA) {
            g = l(d, c + "-" + h), b.isDefined(d[g]) && f.push(d.$observe(g, b.bind(void 0, e, h)));
          }
        }), function () {
          f.forEach(function (a) {
            a();
          });
        };
      }function l(a, b) {
        return p[b] || (p[b] = a.$normalize(b));
      }var m = {},
          n = {},
          o = {},
          p = {};return e.getResponsiveAttribute = j, e.getQuery = i, e.watchResponsiveAttributes = k, e;
    }b.module("material.core").factory("$mdMedia", a), a.$inject = ["$mdConstant", "$rootScope", "$window"];
  }(), function () {
    function d(d, f, g, h, i, j, k, l, m) {
      function n(a) {
        return a[0] || a;
      }var o = j.startSymbol(),
          p = j.endSymbol(),
          q = "{{" === o && "}}" === p,
          r = function r(a, c, d) {
        var e = !1;if (a && a.length) {
          var f = m.getComputedStyle(a[0]);e = b.isDefined(f[c]) && (!d || f[c] == d);
        }return e;
      },
          s = { dom: {}, now: a.performance ? b.bind(a.performance, a.performance.now) : Date.now || function () {
          return new Date().getTime();
        }, clientRect: function clientRect(a, b, c) {
          var d = n(a);b = n(b || d.offsetParent || document.body);var e = d.getBoundingClientRect(),
              f = c ? b.getBoundingClientRect() : { left: 0, top: 0, width: 0, height: 0 };return { left: e.left - f.left, top: e.top - f.top, width: e.width, height: e.height };
        }, offsetRect: function offsetRect(a, b) {
          return s.clientRect(a, b, !0);
        }, nodesToArray: function nodesToArray(a) {
          a = a || [];for (var b = [], c = 0; c < a.length; ++c) {
            b.push(a.item(c));
          }return b;
        }, scrollTop: function scrollTop(a) {
          a = b.element(a || d[0].body);var e = a[0] == d[0].body ? d[0].body : c;return (e ? e.scrollTop + e.parentElement.scrollTop : 0) || Math.abs(a[0].getBoundingClientRect().top);
        }, findFocusTarget: function findFocusTarget(a, c) {
          function d(a, c) {
            var d,
                e = a[0].querySelectorAll(c);if (e && e.length) {
              var f = /\s*\[?([\-a-z]*)\]?\s*/i,
                  g = f.exec(c),
                  h = g ? g[1] : null;e.length && b.forEach(e, function (a) {
                a = b.element(a);var c = a[0].getAttribute(h);(!c || !s.validateScope(a) || !1 !== a.scope().$eval(c)) && (d = a);
              });
            }return d;
          }var e,
              f = "[md-autofocus]";return e = d(a, c || f), e || c == f || (e = d(a, "[md-auto-focus]")) || (e = d(a, f)), e;
        }, disableScrollAround: function disableScrollAround(a, c) {
          function e(a) {
            function c(a) {}function e(a) {
              a.preventDefault();
            }a = b.element(a || h)[0];var f = 50,
                g = b.element('<div class="md-scroll-mask" style="z-index: ' + f + '">  <div class="md-scroll-mask-bar"></div></div>');return a.appendChild(g[0]), g.on("wheel", e), g.on("touchmove", e), d.on("keydown", c), function () {
              g.off("wheel"), g.off("touchmove"), g[0].parentNode.removeChild(g[0]), d.off("keydown", c), delete s.disableScrollAround._enableScrolling;
            };
          }function f() {
            var a = h.parentNode,
                b = a.getAttribute("style") || "",
                c = h.getAttribute("style") || "",
                d = s.scrollTop(h),
                e = h.clientWidth;return h.scrollHeight > h.clientHeight + 1 && (g(h, { position: "fixed", width: "100%", top: -d + "px" }), g(a, { overflowY: "scroll" })), h.clientWidth < e && g(h, { overflow: "hidden" }), function () {
              h.setAttribute("style", c), a.setAttribute("style", b), h.scrollTop = d, a.scrollTop = d;
            };
          }function g(a, b) {
            for (var c in b) {
              a.style[c] = b[c];
            }
          }if (s.disableScrollAround._count = s.disableScrollAround._count || 0, ++s.disableScrollAround._count, s.disableScrollAround._enableScrolling) return s.disableScrollAround._enableScrolling;a = b.element(a);var h = d[0].body,
              i = f(),
              j = e(c);return s.disableScrollAround._enableScrolling = function () {
            --s.disableScrollAround._count || (i(), j(), delete s.disableScrollAround._enableScrolling);
          };
        }, enableScrolling: function enableScrolling() {
          var a = this.disableScrollAround._enableScrolling;a && a();
        }, floatingScrollbars: function floatingScrollbars() {
          if (this.floatingScrollbars.cached === c) {
            var a = b.element('<div style="width: 100%; z-index: -1; position: absolute; height: 35px; overflow-y: scroll"><div style="height: 60px;"></div></div>');d[0].body.appendChild(a[0]), this.floatingScrollbars.cached = a[0].offsetWidth == a[0].childNodes[0].offsetWidth, a.remove();
          }return this.floatingScrollbars.cached;
        }, forceFocus: function forceFocus(b) {
          var c = b[0] || b;document.addEventListener("click", function a(b) {
            b.target === c && b.$focus && (c.focus(), b.stopImmediatePropagation(), b.preventDefault(), c.removeEventListener("click", a));
          }, !0);var d = document.createEvent("MouseEvents");d.initMouseEvent("click", !1, !0, a, {}, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), d.$material = !0, d.$focus = !0, c.dispatchEvent(d);
        }, createBackdrop: function createBackdrop(a, b) {
          return g(s.supplant('<md-backdrop class="{0}">', [b]))(a);
        }, supplant: function supplant(a, b, c) {
          return c = c || /\{([^\{\}]*)\}/g, a.replace(c, function (a, c) {
            var d = c.split("."),
                e = b;try {
              for (var f in d) {
                d.hasOwnProperty(f) && (e = e[d[f]]);
              }
            } catch (b) {
              e = a;
            }return "string" == typeof e || "number" == typeof e ? e : a;
          });
        }, fakeNgModel: function fakeNgModel() {
          return { $fake: !0, $setTouched: b.noop, $setViewValue: function $setViewValue(a) {
              this.$viewValue = a, this.$render(a), this.$viewChangeListeners.forEach(function (a) {
                a();
              });
            }, $isEmpty: function $isEmpty(a) {
              return 0 === ("" + a).length;
            }, $parsers: [], $formatters: [], $viewChangeListeners: [], $render: b.noop };
        }, debounce: function debounce(a, b, d, e) {
          var g;return function () {
            var h = d,
                i = Array.prototype.slice.call(arguments);f.cancel(g), g = f(function () {
              g = c, a.apply(h, i);
            }, b || 10, e);
          };
        }, throttle: function throttle(a, b) {
          var c;return function () {
            var d = this,
                e = arguments,
                f = s.now();(!c || f - c > b) && (a.apply(d, e), c = f);
          };
        }, time: function time(a) {
          var b = s.now();return a(), s.now() - b;
        }, valueOnUse: function valueOnUse(a, b, c) {
          var d = null,
              e = Array.prototype.slice.call(arguments),
              f = e.length > 3 ? e.slice(3) : [];Object.defineProperty(a, b, { get: function get() {
              return null === d && (d = c.apply(a, f)), d;
            } });
        }, nextUid: function nextUid() {
          return "" + e++;
        }, validateScope: function validateScope(a) {
          var c = a && b.isDefined(a.scope());return c || k.warn("element.scope() is not available when 'debug mode' == false. @see https://docs.angularjs.org/guide/production!"), c;
        }, disconnectScope: function disconnectScope(a) {
          if (a && a.$root !== a && !a.$$destroyed) {
            var b = a.$parent;a.$$disconnected = !0, b.$$childHead === a && (b.$$childHead = a.$$nextSibling), b.$$childTail === a && (b.$$childTail = a.$$prevSibling), a.$$prevSibling && (a.$$prevSibling.$$nextSibling = a.$$nextSibling), a.$$nextSibling && (a.$$nextSibling.$$prevSibling = a.$$prevSibling), a.$$nextSibling = a.$$prevSibling = null;
          }
        }, reconnectScope: function reconnectScope(a) {
          if (a && a.$root !== a && a.$$disconnected) {
            var b = a,
                c = b.$parent;b.$$disconnected = !1, b.$$prevSibling = c.$$childTail, c.$$childHead ? (c.$$childTail.$$nextSibling = b, c.$$childTail = b) : c.$$childHead = c.$$childTail = b;
          }
        }, getClosest: function getClosest(a, c, d) {
          if (a instanceof b.element && (a = a[0]), c = c.toUpperCase(), d && (a = a.parentNode), !a) return null;do {
            if (a.nodeName === c) return a;
          } while (a = a.parentNode);return null;
        }, elementContains: function elementContains(c, d) {
          return (a.Node && a.Node.prototype && Node.prototype.contains ? b.bind(c, c.contains) : b.bind(c, function (a) {
            return c === d || !!(16 & this.compareDocumentPosition(a));
          }))(d);
        }, extractElementByName: function extractElementByName(a, c, d, e) {
          function f(a) {
            return g(a) || (d ? h(a) : null);
          }function g(a) {
            if (a) for (var b = 0, d = a.length; d > b; b++) {
              if (a[b].nodeName.toLowerCase() === c) return a[b];
            }return null;
          }function h(a) {
            var b;if (a) for (var c = 0, d = a.length; d > c; c++) {
              var e = a[c];if (!b) for (var g = 0, h = e.childNodes.length; h > g; g++) {
                b = b || f([e.childNodes[g]]);
              }
            }return b;
          }var i = f(a);return !i && e && k.warn(s.supplant("Unable to find node '{0}' in element '{1}'.", [c, a[0].outerHTML])), b.element(i || a);
        }, initOptionalProperties: function initOptionalProperties(a, c, d) {
          d = d || {}, b.forEach(a.$$isolateBindings, function (e, f) {
            if (e.optional && b.isUndefined(a[f])) {
              var g = b.isDefined(c[e.attrName]);a[f] = b.isDefined(d[f]) ? d[f] : g;
            }
          });
        }, nextTick: function nextTick(a, b, c) {
          function d() {
            var a = c && c.$$destroyed,
                b = a ? [] : e.queue,
                d = a ? null : e.digest;e.queue = [], e.timeout = null, e.digest = !1, b.forEach(function (a) {
              a();
            }), d && h.$digest();
          }var e = s.nextTick,
              g = e.timeout,
              i = e.queue || [];return i.push(a), null == b && (b = !0), e.digest = e.digest || b, e.queue = i, g || (e.timeout = f(d, 0, !1));
        }, processTemplate: function processTemplate(a) {
          return q ? a : a && b.isString(a) ? a.replace(/\{\{/g, o).replace(/}}/g, p) : a;
        }, getParentWithPointerEvents: function getParentWithPointerEvents(a) {
          for (var b = a.parent(); r(b, "pointer-events", "none");) {
            b = b.parent();
          }return b;
        }, getNearestContentElement: function getNearestContentElement(a) {
          for (var b = a.parent()[0]; b && b !== l[0] && b !== document.body && "MD-CONTENT" !== b.nodeName.toUpperCase();) {
            b = b.parentNode;
          }return b;
        }, hasComputedStyle: r };return s.dom.animator = i(s), s;
    }var e = 0;b.module("material.core").factory("$mdUtil", d), d.$inject = ["$document", "$timeout", "$compile", "$rootScope", "$$mdAnimate", "$interpolate", "$log", "$rootElement", "$window"], b.element.prototype.focus = b.element.prototype.focus || function () {
      return this.length && this[0].focus(), this;
    }, b.element.prototype.blur = b.element.prototype.blur || function () {
      return this.length && this[0].blur(), this;
    };
  }(), function () {
    function a(a, c, d) {
      function e(a, d, e) {
        var f = b.element(a)[0] || a;!f || f.hasAttribute(d) && 0 !== f.getAttribute(d).length || i(f, d) || (e = b.isString(e) ? e.trim() : "", e.length ? a.attr(d, e) : c.warn('ARIA: Attribute "', d, '", required for accessibility, is missing on node:', f));
      }function f(b, c, d) {
        a(function () {
          e(b, c, d());
        });
      }function g(a, b) {
        f(a, b, function () {
          return h(a);
        });
      }function h(a) {
        return a.text().trim();
      }function i(a, b) {
        function c(a) {
          return "none" === (a.currentStyle ? a.currentStyle : d.getComputedStyle(a)).display;
        }var e = a.hasChildNodes(),
            f = !1;if (e) for (var g = a.childNodes, h = 0; h < g.length; h++) {
          var i = g[h];1 === i.nodeType && i.hasAttribute(b) && (c(i) || (f = !0));
        }return f;
      }return { expect: e, expectAsync: f, expectWithText: g };
    }b.module("material.core").service("$mdAria", a), a.$inject = ["$$rAF", "$log", "$window"];
  }(), function () {
    function a(a, c, d, e, f, g) {
      this.compile = function (h) {
        var i = h.templateUrl,
            j = h.template || "",
            k = h.controller,
            l = h.controllerAs,
            m = b.extend({}, h.resolve || {}),
            n = b.extend({}, h.locals || {}),
            o = h.transformTemplate || b.identity,
            p = h.bindToController;return b.forEach(m, function (a, c) {
          b.isString(a) ? m[c] = d.get(a) : m[c] = d.invoke(a);
        }), b.extend(m, n), m.$template = i ? c.get(i, { cache: g }).then(function (a) {
          return a.data;
        }) : a.when(j), a.all(m).then(function (a) {
          var c,
              d = o(a.$template, h),
              g = h.element || b.element("<div>").html(d.trim()).contents(),
              i = e(g);return c = { locals: a, element: g, link: function link(d) {
              if (a.$scope = d, k) {
                var e = f(k, a, !0);p && b.extend(e.instance, a);var h = e();g.data("$ngControllerController", h), g.children().data("$ngControllerController", h), l && (d[l] = h), c.controller = h;
              }return i(d);
            } };
        });
      };
    }b.module("material.core").service("$mdCompiler", a), a.$inject = ["$q", "$http", "$injector", "$compile", "$controller", "$templateCache"];
  }(), function () {
    function c() {}function d(c, d, e) {
      function f(a) {
        return function (b, c) {
          c.distance < this.state.options.maxDistance && this.dispatchEvent(b, a, c);
        };
      }function g(a, b, c) {
        var d = o[b.replace(/^\$md./, "")];if (!d) throw new Error("Failed to register element with handler " + b + ". Available handlers: " + Object.keys(o).join(", "));return d.registerElement(a, c);
      }function i(a, d) {
        var e = new c(a);return b.extend(e, d), o[a] = e, q;
      }var j = navigator.userAgent || navigator.vendor || a.opera,
          l = j.match(/ipad|iphone|ipod/i),
          m = j.match(/android/i),
          n = void 0 !== a.jQuery && b.element === a.jQuery,
          q = { handler: i, register: g, isHijackingClicks: (l || m) && !n && !p };if (q.isHijackingClicks) {
        var r = 6;q.handler("click", { options: { maxDistance: r }, onEnd: f("click") }), q.handler("focus", { options: { maxDistance: r }, onEnd: function onEnd(a, b) {
            function c(a) {
              var b = ["INPUT", "SELECT", "BUTTON", "TEXTAREA", "VIDEO", "AUDIO"];return "-1" != a.getAttribute("tabindex") && !a.hasAttribute("DISABLED") && (a.hasAttribute("tabindex") || a.hasAttribute("href") || -1 != b.indexOf(a.nodeName));
            }b.distance < this.state.options.maxDistance && c(a.target) && (this.dispatchEvent(a, "focus", b), a.target.focus());
          } }), q.handler("mouseup", { options: { maxDistance: r }, onEnd: f("mouseup") }), q.handler("mousedown", { onStart: function onStart(a) {
            this.dispatchEvent(a, "mousedown");
          } });
      }return q.handler("press", { onStart: function onStart(a, b) {
          this.dispatchEvent(a, "$md.pressdown");
        }, onEnd: function onEnd(a, b) {
          this.dispatchEvent(a, "$md.pressup");
        } }).handler("hold", { options: { maxDistance: 6, delay: 500 }, onCancel: function onCancel() {
          e.cancel(this.state.timeout);
        }, onStart: function onStart(a, c) {
          return this.state.registeredParent ? (this.state.pos = { x: c.x, y: c.y }, void (this.state.timeout = e(b.bind(this, function () {
            this.dispatchEvent(a, "$md.hold"), this.cancel();
          }), this.state.options.delay, !1))) : this.cancel();
        }, onMove: function onMove(a, b) {
          a.preventDefault();var c = this.state.pos.x - b.x,
              d = this.state.pos.y - b.y;Math.sqrt(c * c + d * d) > this.options.maxDistance && this.cancel();
        }, onEnd: function onEnd() {
          this.onCancel();
        } }).handler("drag", { options: { minDistance: 6, horizontal: !0, cancelMultiplier: 1.5 }, onStart: function onStart(a) {
          this.state.registeredParent || this.cancel();
        }, onMove: function onMove(a, b) {
          var c, d;a.preventDefault(), this.state.dragPointer ? this.dispatchDragMove(a) : (this.state.options.horizontal ? (c = Math.abs(b.distanceX) > this.state.options.minDistance, d = Math.abs(b.distanceY) > this.state.options.minDistance * this.state.options.cancelMultiplier) : (c = Math.abs(b.distanceY) > this.state.options.minDistance, d = Math.abs(b.distanceX) > this.state.options.minDistance * this.state.options.cancelMultiplier), c ? (this.state.dragPointer = h(a), k(a, this.state.dragPointer), this.dispatchEvent(a, "$md.dragstart", this.state.dragPointer)) : d && this.cancel());
        }, dispatchDragMove: d.throttle(function (a) {
          this.state.isRunning && (k(a, this.state.dragPointer), this.dispatchEvent(a, "$md.drag", this.state.dragPointer));
        }), onEnd: function onEnd(a, b) {
          this.state.dragPointer && (k(a, this.state.dragPointer), this.dispatchEvent(a, "$md.dragend", this.state.dragPointer));
        } }).handler("swipe", { options: { minVelocity: .65, minDistance: 10 }, onEnd: function onEnd(a, b) {
          var c;Math.abs(b.velocityX) > this.state.options.minVelocity && Math.abs(b.distanceX) > this.state.options.minDistance ? (c = "left" == b.directionX ? "$md.swipeleft" : "$md.swiperight", this.dispatchEvent(a, c)) : Math.abs(b.velocityY) > this.state.options.minVelocity && Math.abs(b.distanceY) > this.state.options.minDistance && (c = "up" == b.directionY ? "$md.swipeup" : "$md.swipedown", this.dispatchEvent(a, c));
        } });
    }function e(a) {
      this.name = a, this.state = {};
    }function f() {
      function c(a, c, d) {
        d = d || m;var e = new b.element.Event(c);e.$material = !0, e.pointer = d, e.srcEvent = a, b.extend(e, { clientX: d.x, clientY: d.y, screenX: d.x, screenY: d.y, pageX: d.x, pageY: d.y, ctrlKey: a.ctrlKey, altKey: a.altKey, shiftKey: a.shiftKey, metaKey: a.metaKey }), b.element(d.target).trigger(e);
      }function d(b, c, d) {
        d = d || m;var e;"click" === c || "mouseup" == c || "mousedown" == c ? (e = document.createEvent("MouseEvents"), e.initMouseEvent(c, !0, !0, a, b.detail, d.x, d.y, d.x, d.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, b.relatedTarget || null)) : (e = document.createEvent("CustomEvent"), e.initCustomEvent(c, !0, !0, {})), e.$material = !0, e.pointer = d, e.srcEvent = b, d.target.dispatchEvent(e);
      }var f = void 0 !== a.jQuery && b.element === a.jQuery;return e.prototype = { options: {}, dispatchEvent: f ? c : d, onStart: b.noop, onMove: b.noop, onEnd: b.noop, onCancel: b.noop, start: function start(a, c) {
          if (!this.state.isRunning) {
            var d = this.getNearestParent(a.target),
                e = d && d.$mdGesture[this.name] || {};this.state = { isRunning: !0, options: b.extend({}, this.options, e), registeredParent: d }, this.onStart(a, c);
          }
        }, move: function move(a, b) {
          this.state.isRunning && this.onMove(a, b);
        }, end: function end(a, b) {
          this.state.isRunning && (this.onEnd(a, b), this.state.isRunning = !1);
        }, cancel: function cancel(a, b) {
          this.onCancel(a, b), this.state = {};
        }, getNearestParent: function getNearestParent(a) {
          for (var b = a; b;) {
            if ((b.$mdGesture || {})[this.name]) return b;b = b.parentNode;
          }return null;
        }, registerElement: function registerElement(a, b) {
          function c() {
            delete a[0].$mdGesture[d.name], a.off("$destroy", c);
          }var d = this;return a[0].$mdGesture = a[0].$mdGesture || {}, a[0].$mdGesture[this.name] = b || {}, a.on("$destroy", c), c;
        } }, e;
    }function g(a, c) {
      function d(a) {
        !a.clientX && !a.clientY || a.$material || a.isIonicTap || j(a) || (a.preventDefault(), a.stopPropagation());
      }function e(a) {
        0 === a.clientX && 0 === a.clientY || a.$material || a.isIonicTap || j(a) ? (q = null, "label" == a.target.tagName.toLowerCase() && (q = { x: a.x, y: a.y })) : (a.preventDefault(), a.stopPropagation(), q = null);
      }function f(a, b) {
        var d;for (var e in o) {
          (d = o[e]) instanceof c && ("start" === a && d.cancel(), d[a](b, m));
        }
      }function g(a) {
        if (!m) {
          var b = +Date.now();n && !i(a, n) && b - n.endTime < 1500 || (m = h(a), f("start", a));
        }
      }function l(a) {
        m && i(a, m) && (k(a, m), f("move", a));
      }function p(a) {
        m && i(a, m) && (k(a, m), m.endTime = +Date.now(), f("end", a), n = m, m = null);
      }document.contains || (document.contains = function (a) {
        return document.body.contains(a);
      }), !r && a.isHijackingClicks && (document.addEventListener("click", e, !0), document.addEventListener("mouseup", d, !0), document.addEventListener("mousedown", d, !0), document.addEventListener("focus", d, !0), r = !0), b.element(document).on("mousedown touchstart pointerdown", g).on("mousemove touchmove pointermove", l).on("mouseup mouseleave touchend touchcancel pointerup pointercancel", p).on("$$mdGestureReset", function () {
        n = m = null;
      });
    }function h(a) {
      var b = l(a),
          c = { startTime: +Date.now(), target: a.target, type: a.type.charAt(0) };return c.startX = c.x = b.pageX, c.startY = c.y = b.pageY, c;
    }function i(a, b) {
      return a && b && a.type.charAt(0) === b.type;
    }function j(a) {
      return q && q.x == a.x && q.y == a.y;
    }function k(a, b) {
      var c = l(a),
          d = b.x = c.pageX,
          e = b.y = c.pageY;b.distanceX = d - b.startX, b.distanceY = e - b.startY, b.distance = Math.sqrt(b.distanceX * b.distanceX + b.distanceY * b.distanceY), b.directionX = b.distanceX > 0 ? "right" : b.distanceX < 0 ? "left" : "", b.directionY = b.distanceY > 0 ? "down" : b.distanceY < 0 ? "up" : "", b.duration = +Date.now() - b.startTime, b.velocityX = b.distanceX / b.duration, b.velocityY = b.distanceY / b.duration;
    }function l(a) {
      return a = a.originalEvent || a, a.touches && a.touches[0] || a.changedTouches && a.changedTouches[0] || a;
    }var m,
        n,
        o = {},
        p = !1,
        q = null,
        r = !1;b.module("material.core.gestures", []).provider("$mdGesture", c).factory("$$MdGestureHandler", f).run(g), c.prototype = { skipClickHijack: function skipClickHijack() {
        return p = !0;
      }, $get: ["$$MdGestureHandler", "$$rAF", "$timeout", function (a, b, c) {
        return new d(a, b, c);
      }] }, d.$inject = ["$$MdGestureHandler", "$$rAF", "$timeout"], g.$inject = ["$mdGesture", "$$MdGestureHandler"];
  }(), function () {
    function a() {
      function a(a) {
        function c(a) {
          return i.optionsFactory = a.options, i.methods = (a.methods || []).concat(g), j;
        }function d(a, b) {
          return h[a] = b, j;
        }function e(b, c) {
          if (c = c || {}, c.methods = c.methods || [], c.options = c.options || function () {
            return {};
          }, /^cancel|hide|show$/.test(b)) throw new Error("Preset '" + b + "' in " + a + " is reserved!");if (c.methods.indexOf("_options") > -1) throw new Error("Method '_options' in " + a + " is reserved!");return i.presets[b] = { methods: c.methods.concat(g), optionsFactory: c.options, argOption: c.argOption }, j;
        }function f(c, d) {
          function e(a) {
            return a = a || {}, a._options && (a = a._options), l.show(b.extend({}, k, a));
          }function f(a) {
            return l.destroy(a);
          }function g(b, c) {
            var e = {};return e[a] = m, d.invoke(b || function () {
              return c;
            }, {}, e);
          }var j,
              k,
              l = c(),
              m = { hide: l.hide, cancel: l.cancel, show: e, destroy: f };return j = i.methods || [], k = g(i.optionsFactory, {}), b.forEach(h, function (a, b) {
            m[b] = a;
          }), b.forEach(i.presets, function (a, c) {
            function d(a) {
              this._options = b.extend({}, e, a);
            }var e = g(a.optionsFactory, {}),
                f = (a.methods || []).concat(j);if (b.extend(e, { $type: c }), b.forEach(f, function (a) {
              d.prototype[a] = function (b) {
                return this._options[a] = b, this;
              };
            }), a.argOption) {
              var h = "show" + c.charAt(0).toUpperCase() + c.slice(1);m[h] = function (a) {
                var b = m[c](a);return m.show(b);
              };
            }m[c] = function (c) {
              return arguments.length && a.argOption && !b.isObject(c) && !b.isArray(c) ? new d()[a.argOption](c) : new d(c);
            };
          }), m;
        }var g = ["onHide", "onShow", "onRemove"],
            h = {},
            i = { presets: {} },
            j = { setDefaults: c, addPreset: e, addMethod: d, $get: f };return j.addPreset("build", { methods: ["controller", "controllerAs", "resolve", "template", "templateUrl", "themable", "transformTemplate", "parent"] }), f.$inject = ["$$interimElement", "$injector"], j;
      }function d(a, d, e, f, g, h, i, j, k, l, m) {
        return function () {
          function n(a) {
            a = a || {};var b = new r(a || {});return (!a.skipHide && u.length ? s.hide() : d.when(!0)).finally(function () {
              u.push(b), b.show().catch(function (a) {
                return a;
              });
            }), b.deferred.promise;
          }function o(a, b) {
            function e(c) {
              return c.remove(a, !1, b || {}).catch(function (a) {
                return a;
              }), c.deferred.promise;
            }if (!u.length) return d.when(a);if (b = b || {}, b.closeAll) {
              var f = d.all(u.reverse().map(e));return u = [], f;
            }return b.closeTo !== c ? d.all(u.splice(b.closeTo).map(e)) : e(u.pop());
          }function p(a, b) {
            var c = u.shift();return c ? (c.remove(a, !0, b || {}).catch(function (a) {
              return a;
            }), c.deferred.promise) : d.when(a);
          }function q(a) {
            var c = a ? null : u.shift(),
                e = b.element(a).length ? b.element(a)[0].parentNode : null;if (e) {
              var f = u.filter(function (a) {
                return a.options.element[0] === e;
              });f.length > 0 && (c = f[0], u.splice(u.indexOf(c), 1));
            }return c ? c.remove(t, !1, { $destroy: !0 }) : d.when(t);
          }function r(m) {
            function n() {
              return d(function (a, b) {
                function c(a) {
                  x.deferred.reject(a), b(a);
                }q(m).then(function (b) {
                  y = r(b, m), z = v(y, m, b.controller).then(a, c);
                }, c);
              });
            }function o(a, c, e) {
              function f(a) {
                x.deferred.resolve(a);
              }function g(a) {
                x.deferred.reject(a);
              }return y ? (m = b.extend(m || {}, e || {}), m.cancelAutoHide && m.cancelAutoHide(), m.element.triggerHandler("$mdInterimElementRemove"), !0 === m.$destroy ? w(m.element, m).then(function () {
                c && g(a) || f(a);
              }) : (d.when(z).finally(function () {
                w(m.element, m).then(function () {
                  c && g(a) || f(a);
                }, g);
              }), x.deferred.promise)) : d.when(!1);
            }function p(a) {
              return a = a || {}, a.template && (a.template = j.processTemplate(a.template)), b.extend({ preserveScope: !1, cancelAutoHide: b.noop, scope: a.scope || f.$new(a.isolateScope), onShow: function onShow(a, b, c) {
                  return i.enter(b, c.parent);
                }, onRemove: function onRemove(a, b) {
                  return b && i.leave(b) || d.when();
                } }, a);
            }function q(a) {
              return (a.skipCompile ? null : k.compile(a)) || d(function (b) {
                b({ locals: {}, link: function link() {
                    return a.element;
                  } });
              });
            }function r(a, c) {
              b.extend(a.locals, c);var d = a.link(c.scope);return c.element = d, c.parent = t(d, c), c.themable && l(d), d;
            }function t(c, d) {
              var e = d.parent;if (e = b.isFunction(e) ? e(d.scope, c, d) : b.isString(e) ? b.element(a[0].querySelector(e)) : b.element(e), !(e || {}).length) {
                var f;return h[0] && h[0].querySelector && (f = h[0].querySelector(":not(svg) > body")), f || (f = h[0]), "#comment" == f.nodeName && (f = a[0].body), b.element(f);
              }return e;
            }function u() {
              var a,
                  d = b.noop;m.hideDelay && (a = g(s.hide, m.hideDelay), d = function d() {
                g.cancel(a);
              }), m.cancelAutoHide = function () {
                d(), m.cancelAutoHide = c;
              };
            }function v(a, c, e) {
              var f = c.onShowing || b.noop,
                  g = c.onComplete || b.noop;return f(c.scope, a, c, e), d(function (b, f) {
                try {
                  d.when(c.onShow(c.scope, a, c, e)).then(function () {
                    g(c.scope, a, c), u(), b(a);
                  }, f);
                } catch (a) {
                  f(a.message);
                }
              });
            }function w(a, c) {
              var d = c.onRemoving || b.noop;return e(function (b, f) {
                try {
                  var g = e.when(c.onRemove(c.scope, a, c) || !0);d(a, g), 1 == c.$destroy ? b(a) : g.then(function () {
                    !c.preserveScope && c.scope && c.scope.$destroy(), b(a);
                  }, f);
                } catch (a) {
                  f(a.message);
                }
              });
            }var x,
                y,
                z = d.when(!0);return m = p(m), x = { options: m, deferred: d.defer(), show: n, remove: o };
          }var s,
              t = !1,
              u = [];return s = { show: n, hide: o, cancel: p, destroy: q, $injector_: m };
        };
      }return a.$get = d, d.$inject = ["$document", "$q", "$$q", "$rootScope", "$timeout", "$rootElement", "$animate", "$mdUtil", "$mdCompiler", "$mdTheming", "$injector"], a;
    }b.module("material.core").provider("$$interimElement", a);
  }(), function () {
    !function () {
      function a(a) {
        function g(a) {
          return a.replace(i, "").replace(j, function (a, b, c, d) {
            return d ? c.toUpperCase() : c;
          });
        }var i = /^((?:x|data)[\:\-_])/i,
            j = /([\:\-\_]+(.))/g,
            k = ["", "xs", "gt-xs", "sm", "gt-sm", "md", "gt-md", "lg", "gt-lg", "xl"],
            l = ["layout", "flex", "flex-order", "flex-offset", "layout-align"],
            m = ["show", "hide", "layout-padding", "layout-margin"];b.forEach(k, function (c) {
          b.forEach(l, function (b) {
            var d = c ? b + "-" + c : b;a.directive(g(d), e(d));
          }), b.forEach(m, function (b) {
            var d = c ? b + "-" + c : b;a.directive(g(d), f(d));
          });
        }), a.directive("mdLayoutCss", c).directive("ngCloak", d("ng-cloak")).directive("layoutWrap", f("layout-wrap")).directive("layoutNoWrap", f("layout-no-wrap")).directive("layoutFill", f("layout-fill")).directive("layoutLtMd", h("layout-lt-md", !0)).directive("layoutLtLg", h("layout-lt-lg", !0)).directive("flexLtMd", h("flex-lt-md", !0)).directive("flexLtLg", h("flex-lt-lg", !0)).directive("layoutAlignLtMd", h("layout-align-lt-md")).directive("layoutAlignLtLg", h("layout-align-lt-lg")).directive("flexOrderLtMd", h("flex-order-lt-md")).directive("flexOrderLtLg", h("flex-order-lt-lg")).directive("offsetLtMd", h("flex-offset-lt-md")).directive("offsetLtLg", h("flex-offset-lt-lg")).directive("hideLtMd", h("hide-lt-md")).directive("hideLtLg", h("hide-lt-lg")).directive("showLtMd", h("show-lt-md")).directive("showLtLg", h("show-lt-lg"));
      }function c() {
        return { restrict: "A", priority: "900", compile: function compile(a, c) {
            return y.enabled = !1, b.noop;
          } };
      }function d(a) {
        return ["$timeout", function (c) {
          return { restrict: "A", priority: -10, compile: function compile(d) {
              return y.enabled ? (d.addClass(a), function (b, d) {
                c(function () {
                  d.removeClass(a);
                }, 10, !1);
              }) : b.noop;
            } };
        }];
      }function e(a) {
        function c(b, c, d) {
          var e = g(c, a, d),
              f = d.$observe(d.$normalize(a), e);e(m(a, d, "")), b.$on("$destroy", function () {
            f();
          });
        }return ["$mdUtil", "$interpolate", "$log", function (d, e, f) {
          return p = d, q = e, r = f, { restrict: "A", compile: function compile(d, e) {
              var f;return y.enabled && (i(a, e, d, r), j(a, m(a, e, ""), k(d, a, e)), f = c), f || b.noop;
            } };
        }];
      }function f(a) {
        function c(b, c) {
          c.addClass(a);
        }return ["$mdUtil", "$interpolate", "$log", function (d, e, f) {
          return p = d, q = e, r = f, { restrict: "A", compile: function compile(d, e) {
              var f;return y.enabled && (j(a, m(a, e, ""), k(d, a, e)), c(null, d), f = c), f || b.noop;
            } };
        }];
      }function g(a, c) {
        var d;return function (e) {
          var f = j(c, e || "");b.isDefined(f) && (d && a.removeClass(d), d = f ? c + "-" + f.replace(t, "-") : c, a.addClass(d));
        };
      }function h(a) {
        var c = a.split("-");return ["$log", function (d) {
          return d.warn(a + "has been deprecated. Please use a `" + c[0] + "-gt-<xxx>` variant."), b.noop;
        }];
      }function i(a, b, c, d) {
        var e,
            f,
            g,
            h = c[0].nodeName.toLowerCase();switch (a.replace(s, "")) {case "flex":
            ("md-button" == h || "fieldset" == h) && (f = "<" + h + " " + a + "></" + h + ">", g = "https://github.com/philipwalton/flexbugs#9-some-html-elements-cant-be-flex-containers", e = "Markup '{0}' may not work as expected in IE Browsers. Consult '{1}' for details.", d.warn(p.supplant(e, [f, g])));}
      }function j(a, c, d) {
        var e = c;if (!l(c)) {
          switch (a.replace(s, "")) {case "layout":
              n(c, v) || (c = v[0]);break;case "flex":
              n(c, u) || isNaN(c) && (c = "");break;case "flex-offset":case "flex-order":
              (!c || isNaN(+c)) && (c = "0");break;case "layout-align":
              var f = o(c);c = p.supplant("{main}-{cross}", f);break;case "layout-padding":case "layout-margin":case "layout-fill":case "layout-wrap":case "layout-no-wrap":
              c = "";}c != e && (d || b.noop)(c);
        }return c;
      }function k(a, b, c) {
        return function (a) {
          l(a) || (c[c.$normalize(b)] = a);
        };
      }function l(a) {
        return (a || "").indexOf(q.startSymbol()) > -1;
      }function m(a, b, c) {
        var d = b.$normalize(a);return b[d] ? b[d].replace(t, "-") : c || null;
      }function n(a, b, c) {
        a = c && a ? a.replace(t, c) : a;var d = !1;return a && b.forEach(function (b) {
          b = c ? b.replace(t, c) : b, d = d || b === a;
        }), d;
      }function o(a) {
        var b,
            c = { main: "start", cross: "stretch" };return a = a || "", (0 == a.indexOf("-") || 0 == a.indexOf(" ")) && (a = "none" + a), b = a.toLowerCase().trim().replace(t, "-").split("-"), b.length && "space" === b[0] && (b = [b[0] + "-" + b[1], b[2]]), b.length > 0 && (c.main = b[0] || c.main), b.length > 1 && (c.cross = b[1] || c.cross), w.indexOf(c.main) < 0 && (c.main = "start"), x.indexOf(c.cross) < 0 && (c.cross = "stretch"), c;
      }var p,
          q,
          r,
          s = /(-gt)?-(sm|md|lg)/g,
          t = /\s+/g,
          u = ["grow", "initial", "auto", "none", "noshrink", "nogrow"],
          v = ["row", "column"],
          w = ["", "start", "center", "end", "stretch", "space-around", "space-between"],
          x = ["", "start", "center", "end", "stretch"],
          y = { enabled: !0, breakpoints: [] };a(b.module("material.core.layout", ["ng"]));
    }();
  }(), function () {
    function a(a, c) {
      function d(a) {
        return a && "" !== a;
      }var e,
          f = [],
          g = {};return e = { notFoundError: function notFoundError(b) {
          a.error("No instance found for handle", b);
        }, getInstances: function getInstances() {
          return f;
        }, get: function get(a) {
          if (!d(a)) return null;var b, c, e;for (b = 0, c = f.length; c > b; b++) {
            if (e = f[b], e.$$mdHandle === a) return e;
          }return null;
        }, register: function register(a, c) {
          function d() {
            var b = f.indexOf(a);-1 !== b && f.splice(b, 1);
          }function e() {
            var b = g[c];b && (b.resolve(a), delete g[c]);
          }return c ? (a.$$mdHandle = c, f.push(a), e(), d) : b.noop;
        }, when: function when(a) {
          if (d(a)) {
            var b = c.defer(),
                f = e.get(a);return f ? b.resolve(f) : g[a] = b, b.promise;
          }return c.reject("Invalid `md-component-id` value.");
        } };
    }b.module("material.core").factory("$mdComponentRegistry", a), a.$inject = ["$log", "$q"];
  }(), function () {
    !function () {
      function a(a) {
        function c(a) {
          return a.hasClass("md-icon-button") ? { isMenuItem: a.hasClass("md-menu-item"), fitRipple: !0, center: !0 } : { isMenuItem: a.hasClass("md-menu-item"), dimBackground: !0 };
        }return { attach: function attach(d, e, f) {
            return f = b.extend(c(e), f), a.attach(d, e, f);
          } };
      }b.module("material.core").factory("$mdButtonInkRipple", a), a.$inject = ["$mdInkRipple"];
    }();
  }(), function () {
    !function () {
      function a(a) {
        function c(c, d, e) {
          return a.attach(c, d, b.extend({ center: !0, dimBackground: !1, fitRipple: !0 }, e));
        }return { attach: c };
      }b.module("material.core").factory("$mdCheckboxInkRipple", a), a.$inject = ["$mdInkRipple"];
    }();
  }(), function () {
    !function () {
      function a(a) {
        function c(c, d, e) {
          return a.attach(c, d, b.extend({ center: !1, dimBackground: !0, outline: !1, rippleSize: "full" }, e));
        }return { attach: c };
      }b.module("material.core").factory("$mdListInkRipple", a), a.$inject = ["$mdInkRipple"];
    }();
  }(), function () {
    function a(a, c) {
      return { controller: b.noop, link: function link(b, d, e) {
          e.hasOwnProperty("mdInkRippleCheckbox") ? c.attach(b, d) : a.attach(b, d);
        } };
    }function c(a) {
      function c(c, e, f) {
        return e.controller("mdNoInk") ? b.noop : a.instantiate(d, { $scope: c, $element: e, rippleOptions: f });
      }return { attach: c };
    }function d(a, c, d, e, f, g) {
      this.$window = e, this.$timeout = f, this.$mdUtil = g, this.$scope = a, this.$element = c, this.options = d, this.mousedown = !1, this.ripples = [], this.timeout = null, this.lastRipple = null, g.valueOnUse(this, "container", this.createContainer), this.$element.addClass("md-ink-ripple"), (c.controller("mdInkRipple") || {}).createRipple = b.bind(this, this.createRipple), (c.controller("mdInkRipple") || {}).setColor = b.bind(this, this.color), this.bindEvents();
    }function e(a, c) {
      (a.mousedown || a.lastRipple) && (a.mousedown = !1, a.$mdUtil.nextTick(b.bind(a, c), !1));
    }function f() {
      return { controller: b.noop };
    }b.module("material.core").factory("$mdInkRipple", c).directive("mdInkRipple", a).directive("mdNoInk", f).directive("mdNoBar", f).directive("mdNoStretch", f);var g = 450;a.$inject = ["$mdButtonInkRipple", "$mdCheckboxInkRipple"], c.$inject = ["$injector"], d.$inject = ["$scope", "$element", "rippleOptions", "$window", "$timeout", "$mdUtil"], d.prototype.color = function (a) {
      function c() {
        var a = d.options && d.options.colorElement ? d.options.colorElement : [],
            b = a.length ? a[0] : d.$element[0];return b ? d.$window.getComputedStyle(b).color : "rgb(0,0,0)";
      }var d = this;return b.isDefined(a) && (d._color = d._parseColor(a)), d._color || d._parseColor(d.inkRipple()) || d._parseColor(c());
    }, d.prototype.calculateColor = function () {
      return this.color();
    }, d.prototype._parseColor = function (a, b) {
      function c(a) {
        var b = "#" === a[0] ? a.substr(1) : a,
            c = b.length / 3,
            d = b.substr(0, c),
            e = b.substr(c, c),
            f = b.substr(2 * c);return 1 === c && (d += d, e += e, f += f), "rgba(" + parseInt(d, 16) + "," + parseInt(e, 16) + "," + parseInt(f, 16) + ",0.1)";
      }function d(a) {
        return a.replace(")", ", 0.1)").replace("(", "a(");
      }return b = b || 1, a ? 0 === a.indexOf("rgba") ? a.replace(/\d?\.?\d*\s*\)\s*$/, (.1 * b).toString() + ")") : 0 === a.indexOf("rgb") ? d(a) : 0 === a.indexOf("#") ? c(a) : void 0 : void 0;
    }, d.prototype.bindEvents = function () {
      this.$element.on("mousedown", b.bind(this, this.handleMousedown)), this.$element.on("mouseup touchend", b.bind(this, this.handleMouseup)), this.$element.on("mouseleave", b.bind(this, this.handleMouseup)), this.$element.on("touchmove", b.bind(this, this.handleTouchmove));
    }, d.prototype.handleMousedown = function (a) {
      if (!this.mousedown) if (a.hasOwnProperty("originalEvent") && (a = a.originalEvent), this.mousedown = !0, this.options.center) this.createRipple(this.container.prop("clientWidth") / 2, this.container.prop("clientWidth") / 2);else if (a.srcElement !== this.$element[0]) {
        var b = this.$element[0].getBoundingClientRect(),
            c = a.clientX - b.left,
            d = a.clientY - b.top;this.createRipple(c, d);
      } else this.createRipple(a.offsetX, a.offsetY);
    }, d.prototype.handleMouseup = function () {
      e(this, this.clearRipples);
    }, d.prototype.handleTouchmove = function () {
      e(this, this.deleteRipples);
    }, d.prototype.deleteRipples = function () {
      for (var a = 0; a < this.ripples.length; a++) {
        this.ripples[a].remove();
      }
    }, d.prototype.clearRipples = function () {
      for (var a = 0; a < this.ripples.length; a++) {
        this.fadeInComplete(this.ripples[a]);
      }
    }, d.prototype.createContainer = function () {
      var a = b.element('<div class="md-ripple-container"></div>');return this.$element.append(a), a;
    }, d.prototype.clearTimeout = function () {
      this.timeout && (this.$timeout.cancel(this.timeout), this.timeout = null);
    }, d.prototype.isRippleAllowed = function () {
      var a = this.$element[0];do {
        if (!a.tagName || "BODY" === a.tagName) break;if (a && b.isFunction(a.hasAttribute)) {
          if (a.hasAttribute("disabled")) return !1;if ("false" === this.inkRipple() || "0" === this.inkRipple()) return !1;
        }
      } while (a = a.parentNode);return !0;
    }, d.prototype.inkRipple = function () {
      return this.$element.attr("md-ink-ripple");
    }, d.prototype.createRipple = function (a, c) {
      function d(a) {
        return a ? a.replace("rgba", "rgb").replace(/,[^\),]+\)/, ")") : "rgb(0,0,0)";
      }function e(a, b, c) {
        return a ? Math.max(b, c) : Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2));
      }if (this.isRippleAllowed()) {
        var f = this,
            h = b.element('<div class="md-ripple"></div>'),
            i = this.$element.prop("clientWidth"),
            j = this.$element.prop("clientHeight"),
            k = 2 * Math.max(Math.abs(i - a), a),
            l = 2 * Math.max(Math.abs(j - c), c),
            m = e(this.options.fitRipple, k, l),
            n = this.calculateColor();h.css({ left: a + "px", top: c + "px", background: "black", width: m + "px", height: m + "px", backgroundColor: d(n), borderColor: d(n) }), this.lastRipple = h, this.clearTimeout(), this.timeout = this.$timeout(function () {
          f.clearTimeout(), f.mousedown || f.fadeInComplete(h);
        }, .35 * g, !1), this.options.dimBackground && this.container.css({ backgroundColor: n }), this.container.append(h), this.ripples.push(h), h.addClass("md-ripple-placed"), this.$mdUtil.nextTick(function () {
          h.addClass("md-ripple-scaled md-ripple-active"), f.$timeout(function () {
            f.clearRipples();
          }, g, !1);
        }, !1);
      }
    }, d.prototype.fadeInComplete = function (a) {
      this.lastRipple === a ? this.timeout || this.mousedown || this.removeRipple(a) : this.removeRipple(a);
    }, d.prototype.removeRipple = function (a) {
      var b = this;0 > this.ripples.indexOf(a) || (this.ripples.splice(this.ripples.indexOf(a), 1), a.removeClass("md-ripple-active"), 0 === this.ripples.length && this.container.css({ backgroundColor: "" }), this.$timeout(function () {
        b.fadeOutComplete(a);
      }, g, !1));
    }, d.prototype.fadeOutComplete = function (a) {
      a.remove(), this.lastRipple = null;
    };
  }(), function () {
    !function () {
      function a(a) {
        function c(c, d, e) {
          return a.attach(c, d, b.extend({ center: !1, dimBackground: !0, outline: !1, rippleSize: "full" }, e));
        }return { attach: c };
      }b.module("material.core").factory("$mdTabInkRipple", a), a.$inject = ["$mdInkRipple"];
    }();
  }(), function () {
    b.module("material.core.theming.palette", []).constant("$mdColorPalette", { red: { 50: "#ffebee", 100: "#ffcdd2", 200: "#ef9a9a", 300: "#e57373", 400: "#ef5350", 500: "#f44336", 600: "#e53935", 700: "#d32f2f", 800: "#c62828", 900: "#b71c1c", A100: "#ff8a80", A200: "#ff5252", A400: "#ff1744", A700: "#d50000", contrastDefaultColor: "light", contrastDarkColors: "50 100 200 300 A100", contrastStrongLightColors: "400 500 600 700 A200 A400 A700" }, pink: { 50: "#fce4ec", 100: "#f8bbd0", 200: "#f48fb1", 300: "#f06292", 400: "#ec407a", 500: "#e91e63", 600: "#d81b60", 700: "#c2185b", 800: "#ad1457", 900: "#880e4f", A100: "#ff80ab", A200: "#ff4081", A400: "#f50057", A700: "#c51162", contrastDefaultColor: "light", contrastDarkColors: "50 100 200 A100", contrastStrongLightColors: "500 600 A200 A400 A700" }, purple: { 50: "#f3e5f5", 100: "#e1bee7", 200: "#ce93d8", 300: "#ba68c8", 400: "#ab47bc", 500: "#9c27b0", 600: "#8e24aa", 700: "#7b1fa2", 800: "#6a1b9a", 900: "#4a148c", A100: "#ea80fc", A200: "#e040fb", A400: "#d500f9", A700: "#aa00ff", contrastDefaultColor: "light", contrastDarkColors: "50 100 200 A100", contrastStrongLightColors: "300 400 A200 A400 A700" }, "deep-purple": { 50: "#ede7f6", 100: "#d1c4e9", 200: "#b39ddb", 300: "#9575cd", 400: "#7e57c2", 500: "#673ab7", 600: "#5e35b1", 700: "#512da8", 800: "#4527a0", 900: "#311b92", A100: "#b388ff", A200: "#7c4dff", A400: "#651fff", A700: "#6200ea", contrastDefaultColor: "light", contrastDarkColors: "50 100 200 A100", contrastStrongLightColors: "300 400 A200" }, indigo: { 50: "#e8eaf6", 100: "#c5cae9", 200: "#9fa8da", 300: "#7986cb", 400: "#5c6bc0", 500: "#3f51b5", 600: "#3949ab", 700: "#303f9f", 800: "#283593", 900: "#1a237e", A100: "#8c9eff", A200: "#536dfe", A400: "#3d5afe", A700: "#304ffe", contrastDefaultColor: "light", contrastDarkColors: "50 100 200 A100", contrastStrongLightColors: "300 400 A200 A400" }, blue: { 50: "#e3f2fd", 100: "#bbdefb", 200: "#90caf9", 300: "#64b5f6", 400: "#42a5f5", 500: "#2196f3", 600: "#1e88e5", 700: "#1976d2", 800: "#1565c0", 900: "#0d47a1", A100: "#82b1ff", A200: "#448aff", A400: "#2979ff", A700: "#2962ff", contrastDefaultColor: "light", contrastDarkColors: "50 100 200 300 400 A100", contrastStrongLightColors: "500 600 700 A200 A400 A700" }, "light-blue": { 50: "#e1f5fe", 100: "#b3e5fc", 200: "#81d4fa", 300: "#4fc3f7", 400: "#29b6f6", 500: "#03a9f4", 600: "#039be5", 700: "#0288d1", 800: "#0277bd", 900: "#01579b", A100: "#80d8ff", A200: "#40c4ff", A400: "#00b0ff", A700: "#0091ea", contrastDefaultColor: "dark", contrastLightColors: "600 700 800 900 A700", contrastStrongLightColors: "600 700 800 A700" }, cyan: { 50: "#e0f7fa", 100: "#b2ebf2", 200: "#80deea", 300: "#4dd0e1", 400: "#26c6da", 500: "#00bcd4", 600: "#00acc1", 700: "#0097a7", 800: "#00838f", 900: "#006064", A100: "#84ffff", A200: "#18ffff", A400: "#00e5ff", A700: "#00b8d4", contrastDefaultColor: "dark", contrastLightColors: "700 800 900", contrastStrongLightColors: "700 800 900" }, teal: { 50: "#e0f2f1", 100: "#b2dfdb", 200: "#80cbc4", 300: "#4db6ac", 400: "#26a69a", 500: "#009688", 600: "#00897b", 700: "#00796b", 800: "#00695c", 900: "#004d40", A100: "#a7ffeb", A200: "#64ffda", A400: "#1de9b6", A700: "#00bfa5", contrastDefaultColor: "dark", contrastLightColors: "500 600 700 800 900", contrastStrongLightColors: "500 600 700" }, green: { 50: "#e8f5e9", 100: "#c8e6c9", 200: "#a5d6a7", 300: "#81c784", 400: "#66bb6a", 500: "#4caf50", 600: "#43a047", 700: "#388e3c", 800: "#2e7d32", 900: "#1b5e20", A100: "#b9f6ca", A200: "#69f0ae", A400: "#00e676", A700: "#00c853", contrastDefaultColor: "dark", contrastLightColors: "600 700 800 900", contrastStrongLightColors: "600 700" }, "light-green": { 50: "#f1f8e9", 100: "#dcedc8", 200: "#c5e1a5", 300: "#aed581", 400: "#9ccc65", 500: "#8bc34a", 600: "#7cb342", 700: "#689f38", 800: "#558b2f", 900: "#33691e", A100: "#ccff90", A200: "#b2ff59", A400: "#76ff03", A700: "#64dd17", contrastDefaultColor: "dark", contrastLightColors: "700 800 900", contrastStrongLightColors: "700 800 900" }, lime: { 50: "#f9fbe7", 100: "#f0f4c3", 200: "#e6ee9c", 300: "#dce775", 400: "#d4e157", 500: "#cddc39", 600: "#c0ca33", 700: "#afb42b", 800: "#9e9d24", 900: "#827717", A100: "#f4ff81", A200: "#eeff41", A400: "#c6ff00", A700: "#aeea00", contrastDefaultColor: "dark", contrastLightColors: "900", contrastStrongLightColors: "900" }, yellow: { 50: "#fffde7", 100: "#fff9c4", 200: "#fff59d", 300: "#fff176", 400: "#ffee58", 500: "#ffeb3b", 600: "#fdd835", 700: "#fbc02d", 800: "#f9a825", 900: "#f57f17", A100: "#ffff8d", A200: "#ffff00", A400: "#ffea00", A700: "#ffd600", contrastDefaultColor: "dark" }, amber: { 50: "#fff8e1", 100: "#ffecb3", 200: "#ffe082", 300: "#ffd54f", 400: "#ffca28", 500: "#ffc107", 600: "#ffb300", 700: "#ffa000", 800: "#ff8f00", 900: "#ff6f00", A100: "#ffe57f", A200: "#ffd740", A400: "#ffc400", A700: "#ffab00", contrastDefaultColor: "dark" }, orange: { 50: "#fff3e0", 100: "#ffe0b2", 200: "#ffcc80", 300: "#ffb74d", 400: "#ffa726", 500: "#ff9800", 600: "#fb8c00", 700: "#f57c00", 800: "#ef6c00", 900: "#e65100", A100: "#ffd180", A200: "#ffab40", A400: "#ff9100", A700: "#ff6d00", contrastDefaultColor: "dark", contrastLightColors: "800 900", contrastStrongLightColors: "800 900" }, "deep-orange": { 50: "#fbe9e7", 100: "#ffccbc", 200: "#ffab91", 300: "#ff8a65", 400: "#ff7043", 500: "#ff5722", 600: "#f4511e", 700: "#e64a19", 800: "#d84315", 900: "#bf360c", A100: "#ff9e80", A200: "#ff6e40", A400: "#ff3d00", A700: "#dd2c00", contrastDefaultColor: "light", contrastDarkColors: "50 100 200 300 400 A100 A200", contrastStrongLightColors: "500 600 700 800 900 A400 A700" }, brown: { 50: "#efebe9", 100: "#d7ccc8", 200: "#bcaaa4", 300: "#a1887f", 400: "#8d6e63", 500: "#795548", 600: "#6d4c41", 700: "#5d4037", 800: "#4e342e", 900: "#3e2723", A100: "#d7ccc8", A200: "#bcaaa4", A400: "#8d6e63", A700: "#5d4037", contrastDefaultColor: "light", contrastDarkColors: "50 100 200", contrastStrongLightColors: "300 400" }, grey: { 50: "#fafafa", 100: "#f5f5f5", 200: "#eeeeee", 300: "#e0e0e0", 400: "#bdbdbd", 500: "#9e9e9e", 600: "#757575", 700: "#616161", 800: "#424242", 900: "#212121", 1e3: "#000000", A100: "#ffffff", A200: "#eeeeee", A400: "#bdbdbd", A700: "#616161", contrastDefaultColor: "dark", contrastLightColors: "600 700 800 900" }, "blue-grey": { 50: "#eceff1", 100: "#cfd8dc", 200: "#b0bec5", 300: "#90a4ae", 400: "#78909c", 500: "#607d8b", 600: "#546e7a", 700: "#455a64", 800: "#37474f", 900: "#263238", A100: "#cfd8dc", A200: "#b0bec5", A400: "#78909c", A700: "#455a64", contrastDefaultColor: "light", contrastDarkColors: "50 100 200 300", contrastStrongLightColors: "400 500" } });
  }(), function () {
    function a(a) {
      function d(a, b) {
        return b = b || {}, l[a] = g(a, b), s;
      }function e(a, c) {
        return g(a, b.extend({}, l[a] || {}, c));
      }function g(a, b) {
        var c = z.filter(function (a) {
          return !b[a];
        });if (c.length) throw new Error("Missing colors %1 in palette %2!".replace("%1", c.join(", ")).replace("%2", a));return b;
      }function i(a, c) {
        if (m[a]) return m[a];c = c || "default";var d = "string" == typeof c ? m[c] : c,
            e = new j(a);return d && b.forEach(d.colors, function (a, c) {
          e.colors[c] = { name: a.name, hues: b.extend({}, a.hues) };
        }), m[a] = e, e;
      }function j(a) {
        function c(a) {
          if ((a = 0 === arguments.length || !!a) !== d.isDark) {
            d.isDark = a, d.foregroundPalette = d.isDark ? p : o, d.foregroundShadow = d.isDark ? q : r;var c = d.isDark ? y : x,
                e = d.isDark ? x : y;return b.forEach(c, function (a, b) {
              var c = d.colors[b],
                  f = e[b];if (c) for (var g in c.hues) {
                c.hues[g] === f[g] && (c.hues[g] = a[g]);
              }
            }), d;
          }
        }var d = this;d.name = a, d.colors = {}, d.dark = c, c(!1), v.forEach(function (a) {
          var c = (d.isDark ? y : x)[a];d[a + "Palette"] = function (e, f) {
            var g = d.colors[a] = { name: e, hues: b.extend({}, c, f) };return Object.keys(g.hues).forEach(function (a) {
              if (!c[a]) throw new Error("Invalid hue name '%1' in theme %2's %3 color %4. Available hue names: %4".replace("%1", a).replace("%2", d.name).replace("%3", e).replace("%4", Object.keys(c).join(", ")));
            }), Object.keys(g.hues).map(function (a) {
              return g.hues[a];
            }).forEach(function (b) {
              if (-1 == z.indexOf(b)) throw new Error("Invalid hue value '%1' in theme %2's %3 color %4. Available hue values: %5".replace("%1", b).replace("%2", d.name).replace("%3", a).replace("%4", e).replace("%5", z.join(", ")));
            }), d;
          }, d[a + "Color"] = function () {
            var b = Array.prototype.slice.call(arguments);return console.warn("$mdThemingProviderTheme." + a + "Color() has been deprecated. Use $mdThemingProviderTheme." + a + "Palette() instead."), d[a + "Palette"].apply(d, b);
          };
        });
      }function n(a, d) {
        function e(a) {
          return a === c || "" === a || f.THEMES[a] !== c;
        }function f(b, d) {
          d === c && (d = b, b = c), b === c && (b = a), f.inherit(d, d);
        }return f.inherit = function (c, f) {
          function g(a) {
            if (a) {
              e(a) || d.warn("Attempted to use unregistered theme '" + a + "'. Register it with $mdThemingProvider.theme().");var b = c.data("$mdThemeName");b && c.removeClass("md-" + b + "-theme"), c.addClass("md-" + a + "-theme"), c.data("$mdThemeName", a), h && c.data("$mdThemeController", h);
            }
          }var h = f.controller("mdTheme"),
              i = c.attr("md-theme-watch");if ((u || b.isDefined(i)) && "false" != i) {
            var j = a.$watch(function () {
              return h && h.$mdTheme || ("default" == t ? "" : t);
            }, g);c.on("$destroy", j);
          } else {
            g(h && h.$mdTheme || ("default" == t ? "" : t));
          }
        }, f.THEMES = b.extend({}, m), f.defaultTheme = function () {
          return t;
        }, f.registered = e, f.generateTheme = h, f;
      }l = {}, m = {};var s,
          t = "default",
          u = !1;return b.extend(l, a), n.$inject = ["$rootScope", "$log"], s = { definePalette: d, extendPalette: e, theme: i, setDefaultTheme: function setDefaultTheme(a) {
          t = a;
        }, alwaysWatchTheme: function alwaysWatchTheme(a) {
          u = a;
        }, generateThemesOnDemand: function generateThemesOnDemand(a) {
          A = a;
        }, $get: n, _LIGHT_DEFAULT_HUES: x, _DARK_DEFAULT_HUES: y, _PALETTES: l, _THEMES: m, _parseRules: f, _rgba: k };
    }function d(a, b, c) {
      return { priority: 100, link: { pre: function pre(d, e, f) {
            var g = { $setTheme: function $setTheme(b) {
                a.registered(b) || c.warn("attempted to use unregistered theme '" + b + "'"), g.$mdTheme = b;
              } };e.data("$mdThemeController", g), g.$setTheme(b(f.mdTheme)(d)), f.$observe("mdTheme", g.$setTheme);
          } } };
    }function e(a) {
      return a;
    }function f(a, c, d) {
      i(a, c), d = d.replace(/THEME_NAME/g, a.name);var e = [],
          f = a.colors[c],
          g = new RegExp(".md-" + a.name + "-theme", "g"),
          h = new RegExp("('|\")?{{\\s*(" + c + ")-(color|contrast)-?(\\d\\.?\\d*)?\\s*}}(\"|')?", "g"),
          j = /'?"?\{\{\s*([a-zA-Z]+)-(A?\d+|hue\-[0-3]|shadow)-?(\d\.?\d*)?(contrast)?\s*\}\}'?"?/g,
          m = l[f.name];return d = d.replace(j, function (b, c, d, e, f) {
        return "foreground" === c ? "shadow" == d ? a.foregroundShadow : a.foregroundPalette[d] || a.foregroundPalette[1] : (0 === d.indexOf("hue") && (d = a.colors[c].hues[d]), k((l[a.colors[c].name][d] || "")[f ? "contrast" : "value"], e));
      }), b.forEach(f.hues, function (b, c) {
        var f = d.replace(h, function (a, c, d, e, f) {
          return k(m[b]["color" === e ? "value" : "contrast"], f);
        });if ("default" !== c && (f = f.replace(g, ".md-" + a.name + "-theme.md-" + c)), "default" == a.name) {
          var i = /((?:(?:(?: |>|\.|\w|-|:|\(|\)|\[|\]|"|'|=)+) )?)((?:(?:\w|\.|-)+)?)\.md-default-theme((?: |>|\.|\w|-|:|\(|\)|\[|\]|"|'|=)*)/g;f = f.replace(i, function (a, b, c, d) {
            return a + ", " + b + c + d;
          });
        }e.push(f);
      }), e;
    }function g(a) {
      function c(a) {
        var c = a.contrastDefaultColor,
            d = a.contrastLightColors || [],
            e = a.contrastStrongLightColors || [],
            f = a.contrastDarkColors || [];"string" == typeof d && (d = d.split(" ")), "string" == typeof e && (e = e.split(" ")), "string" == typeof f && (f = f.split(" ")), delete a.contrastDefaultColor, delete a.contrastLightColors, delete a.contrastStrongLightColors, delete a.contrastDarkColors, b.forEach(a, function (g, h) {
          function i() {
            return "light" === c ? f.indexOf(h) > -1 ? s : e.indexOf(h) > -1 ? u : t : d.indexOf(h) > -1 ? e.indexOf(h) > -1 ? u : t : s;
          }if (!b.isObject(g)) {
            var k = j(g);if (!k) throw new Error("Color %1, in palette %2's hue %3, is invalid. Hex or rgb(a) color expected.".replace("%1", g).replace("%2", a.name).replace("%3", h));a[h] = { value: k, contrast: i() };
          }
        });
      }var d = document.head,
          e = d ? d.firstElementChild : null,
          f = a.has("$MD_THEME_CSS") ? a.get("$MD_THEME_CSS") : "";if (e && 0 !== f.length) {
        b.forEach(l, c);var g = f.split(/\}(?!(\}|'|"|;))/).filter(function (a) {
          return a && a.length;
        }).map(function (a) {
          return a.trim() + "}";
        }),
            i = new RegExp("md-(" + v.join("|") + ")", "g");v.forEach(function (a) {
          B[a] = "";
        }), g.forEach(function (a) {
          for (var b, c = (a.match(i), 0); b = v[c]; c++) {
            if (a.indexOf(".md-" + b) > -1) return B[b] += a;
          }for (c = 0; b = v[c]; c++) {
            if (a.indexOf(b) > -1) return B[b] += a;
          }return B[w] += a;
        }), A || b.forEach(m, function (a) {
          n[a.name] || h(a.name);
        });
      }
    }function h(a) {
      var b = m[a],
          c = document.head,
          d = c ? c.firstElementChild : null;n[a] || (v.forEach(function (a) {
        for (var e = f(b, a, B[a]); e.length;) {
          var g = e.shift();if (g) {
            var h = document.createElement("style");h.setAttribute("md-theme-style", ""), h.appendChild(document.createTextNode(g)), c.insertBefore(h, d);
          }
        }
      }), b.colors.primary.name == b.colors.accent.name && console.warn("$mdThemingProvider: Using the same palette for primary and accent. This violates the material design spec."), n[b.name] = !0);
    }function i(a, b) {
      if (!l[(a.colors[b] || {}).name]) throw new Error("You supplied an invalid color palette for theme %1's %2 palette. Available palettes: %3".replace("%1", a.name).replace("%2", b).replace("%3", Object.keys(l).join(", ")));
    }function j(a) {
      if (b.isArray(a) && 3 == a.length) return a;if (/^rgb/.test(a)) return a.replace(/(^\s*rgba?\(|\)\s*$)/g, "").split(",").map(function (a, b) {
        return 3 == b ? parseFloat(a, 10) : parseInt(a, 10);
      });if ("#" == a.charAt(0) && (a = a.substring(1)), /^([a-fA-F0-9]{3}){1,2}$/g.test(a)) {
        var c = a.length / 3,
            d = a.substr(0, c),
            e = a.substr(c, c),
            f = a.substr(2 * c);return 1 === c && (d += d, e += e, f += f), [parseInt(d, 16), parseInt(e, 16), parseInt(f, 16)];
      }
    }function k(a, c) {
      return a ? (4 == a.length && (a = b.copy(a), c ? a.pop() : c = a.pop()), c && ("number" == typeof c || "string" == typeof c && c.length) ? "rgba(" + a.join(",") + "," + c + ")" : "rgb(" + a.join(",") + ")") : "rgb('0,0,0')";
    }b.module("material.core.theming", ["material.core.theming.palette"]).directive("mdTheme", d).directive("mdThemable", e).provider("$mdTheming", a).run(g);var l,
        m,
        n = {},
        o = { name: "dark", 1: "rgba(0,0,0,0.87)", 2: "rgba(0,0,0,0.54)", 3: "rgba(0,0,0,0.26)", 4: "rgba(0,0,0,0.12)" },
        p = { name: "light", 1: "rgba(255,255,255,1.0)", 2: "rgba(255,255,255,0.7)", 3: "rgba(255,255,255,0.3)", 4: "rgba(255,255,255,0.12)" },
        q = "1px 1px 0px rgba(0,0,0,0.4), -1px -1px 0px rgba(0,0,0,0.4)",
        r = "",
        s = j("rgba(0,0,0,0.87)"),
        t = j("rgba(255,255,255,0.87)"),
        u = j("rgb(255,255,255)"),
        v = ["primary", "accent", "warn", "background"],
        w = "primary",
        x = { accent: { default: "A200", "hue-1": "A100", "hue-2": "A400", "hue-3": "A700" }, background: { default: "A100", "hue-1": "300", "hue-2": "800", "hue-3": "900" } },
        y = { background: { default: "800", "hue-1": "600", "hue-2": "300", "hue-3": "900" } };v.forEach(function (a) {
      var b = { default: "500", "hue-1": "300", "hue-2": "800", "hue-3": "A100" };x[a] || (x[a] = b), y[a] || (y[a] = b);
    });var z = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "A100", "A200", "A400", "A700"],
        A = !1;a.$inject = ["$mdColorPalette"], d.$inject = ["$mdTheming", "$interpolate", "$log"], e.$inject = ["$mdTheming"];var B = {};g.$inject = ["$injector"];
  }(), function () {
    function a(a, c, d, e, f) {
      var g;return g = { translate3d: function translate3d(a, b, c, d) {
          function e(c) {
            return f(a, { to: c || b, addClass: d.transitionOutClass, removeClass: d.transitionInClass }).start();
          }return f(a, { from: b, to: c, addClass: d.transitionInClass }).start().then(function () {
            return e;
          });
        }, waitTransitionEnd: function waitTransitionEnd(a, b) {
          return c(function (c, g) {
            function h(b) {
              b && b.target !== a[0] || (b && d.cancel(i), a.off(e.CSS.TRANSITIONEND, h), c());
            }b = b || {};var i = d(h, b.timeout || 3e3);a.on(e.CSS.TRANSITIONEND, h);
          });
        }, calculateZoomToOrigin: function calculateZoomToOrigin(c, d) {
          function e() {
            var a = c ? c.parent() : null,
                b = a ? a.parent() : null;return b ? g.clientRect(b) : null;
          }var f = d.element,
              h = d.bounds,
              i = "translate3d( {centerX}px, {centerY}px, 0 ) scale( {scaleX}, {scaleY} )",
              j = b.bind(null, a.supplant, i),
              k = j({ centerX: 0, centerY: 0, scaleX: .5, scaleY: .5 });if (f || h) {
            var l = f ? g.clientRect(f) || e() : g.copyRect(h),
                m = g.copyRect(c[0].getBoundingClientRect()),
                n = g.centerPointFor(m),
                o = g.centerPointFor(l);k = j({ centerX: o.x - n.x, centerY: o.y - n.y, scaleX: Math.round(100 * Math.min(.5, l.width / m.width)) / 100, scaleY: Math.round(100 * Math.min(.5, l.height / m.height)) / 100 });
          }return k;
        }, toCss: function toCss(a) {
          function c(a, c, e) {
            b.forEach(c.split(" "), function (a) {
              d[a] = e;
            });
          }var d = {};return b.forEach(a, function (a, g) {
            if (!b.isUndefined(a)) if ("left top right bottom width height x y min-width min-height max-width max-height".indexOf(g) >= 0) d[g] = a + "px";else switch (g) {case "transition":
                c(g, e.CSS.TRANSITION, a);break;case "transform":
                c(g, e.CSS.TRANSFORM, a);break;case "transformOrigin":
                c(g, e.CSS.TRANSFORM_ORIGIN, a);}
          }), d;
        }, toTransformCss: function toTransformCss(a, c, d) {
          var f = {};return b.forEach(e.CSS.TRANSFORM.split(" "), function (b) {
            f[b] = a;
          }), c && (d = d || "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) !important", f.transition = d), f;
        }, copyRect: function copyRect(a, c) {
          return a ? (c = c || {}, b.forEach("left top right bottom width height".split(" "), function (b) {
            c[b] = Math.round(a[b]);
          }), c.width = c.width || c.right - c.left, c.height = c.height || c.bottom - c.top, c) : null;
        }, clientRect: function clientRect(a) {
          var c = b.element(a)[0].getBoundingClientRect();return function (a) {
            return a && a.width > 0 && a.height > 0;
          }(c) ? g.copyRect(c) : null;
        }, centerPointFor: function centerPointFor(a) {
          return a ? { x: Math.round(a.left + a.width / 2), y: Math.round(a.top + a.height / 2) } : { x: 0, y: 0 };
        } };
    }b.module("material.core").factory("$$mdAnimate", ["$q", "$timeout", "$mdConstant", "$animateCss", function (b, c, d, e) {
      return function (f) {
        return a(f, b, c, d, e);
      };
    }]);
  }(), function () {
    b.version.minor >= 4 ? b.module("material.core.animate", []) : function () {
      function a(a) {
        return a.replace(/-[a-z]/g, function (a) {
          return a.charAt(1).toUpperCase();
        });
      }var c = b.forEach,
          d = b.isDefined(document.documentElement.style.WebkitAppearance),
          e = d ? "-webkit-" : "",
          f = (d ? "webkitTransitionEnd " : "") + "transitionend",
          g = (d ? "webkitAnimationEnd " : "") + "animationend",
          h = ["$document", function (a) {
        return function () {
          return a[0].body.clientWidth + 1;
        };
      }],
          i = ["$$rAF", function (a) {
        return function () {
          var b = !1;return a(function () {
            b = !0;
          }), function (c) {
            b ? c() : a(c);
          };
        };
      }],
          j = ["$q", "$$rAFMutex", function (a, d) {
        function e(a) {
          this.setHost(a), this._doneCallbacks = [], this._runInAnimationFrame = d(), this._state = 0;
        }var h = 2;return e.prototype = { setHost: function setHost(a) {
            this.host = a || {};
          }, done: function done(a) {
            this._state === h ? a() : this._doneCallbacks.push(a);
          }, progress: b.noop, getPromise: function getPromise() {
            if (!this.promise) {
              var b = this;this.promise = a(function (a, c) {
                b.done(function (b) {
                  !1 === b ? c() : a();
                });
              });
            }return this.promise;
          }, then: function then(a, b) {
            return this.getPromise().then(a, b);
          }, catch: function _catch(a) {
            return this.getPromise().catch(a);
          }, finally: function _finally(a) {
            return this.getPromise().finally(a);
          }, pause: function pause() {
            this.host.pause && this.host.pause();
          }, resume: function resume() {
            this.host.resume && this.host.resume();
          }, end: function end() {
            this.host.end && this.host.end(), this._resolve(!0);
          }, cancel: function cancel() {
            this.host.cancel && this.host.cancel(), this._resolve(!1);
          }, complete: function complete(a) {
            var b = this;0 === b._state && (b._state = 1, b._runInAnimationFrame(function () {
              b._resolve(a);
            }));
          }, _resolve: function _resolve(a) {
            this._state !== h && (c(this._doneCallbacks, function (b) {
              b(a);
            }), this._doneCallbacks.length = 0, this._state = h);
          } }, e;
      }];b.module("material.core.animate", []).factory("$$forceReflow", h).factory("$$AnimateRunner", j).factory("$$rAFMutex", i).factory("$animateCss", ["$window", "$$rAF", "$$AnimateRunner", "$$forceReflow", "$$jqLite", "$timeout", function (b, h, i, j, k, l) {
        function m(d, h) {
          var j = [],
              k = u(d);h.transitionStyle && j.push([e + "transition", h.transitionStyle]), h.keyframeStyle && j.push([e + "animation", h.keyframeStyle]), h.delay && j.push([e + "transition-delay", h.delay + "s"]), h.duration && j.push([e + "transition-duration", h.duration + "s"]);var m = h.keyframeStyle || h.to && (h.duration > 0 || h.transitionStyle),
              p = !!h.addClass || !!h.removeClass,
              w = m || p;v(d, !0), s(d, h);var x,
              y,
              z = !1;return { close: b.close, start: function start() {
              function b() {
                return z ? void 0 : (z = !0, x && y && d.off(x, y), n(d, h), r(d, h), c(j, function (b) {
                  k.style[a(b[0])] = "";
                }), m.complete(!0), m);
              }var m = new i();return q(function () {
                if (v(d, !1), !w) return b();c(j, function (b) {
                  var c = b[0],
                      d = b[1];k.style[a(c)] = d;
                }), n(d, h);var i = o(d);if (0 === i.duration) return b();var m = [];h.easing && (i.transitionDuration && m.push([e + "transition-timing-function", h.easing]), i.animationDuration && m.push([e + "animation-timing-function", h.easing])), h.delay && i.animationDelay && m.push([e + "animation-delay", h.delay + "s"]), h.duration && i.animationDuration && m.push([e + "animation-duration", h.duration + "s"]), c(m, function (b) {
                  var c = b[0],
                      d = b[1];k.style[a(c)] = d, j.push(b);
                });var p = i.delay,
                    q = 1e3 * p,
                    r = i.duration,
                    s = 1e3 * r,
                    u = Date.now();x = [], i.transitionDuration && x.push(f), i.animationDuration && x.push(g), x = x.join(" "), y = function y(a) {
                  a.stopPropagation();var c = a.originalEvent || a,
                      d = c.timeStamp || Date.now(),
                      e = parseFloat(c.elapsedTime.toFixed(3));Math.max(d - u, 0) >= q && e >= r && b();
                }, d.on(x, y), t(d, h), l(b, q + 1.5 * s, !1);
              }), m;
            } };
        }function n(a, b) {
          b.addClass && (k.addClass(a, b.addClass), b.addClass = null), b.removeClass && (k.removeClass(a, b.removeClass), b.removeClass = null);
        }function o(a) {
          function c(a) {
            return d ? "Webkit" + a.charAt(0).toUpperCase() + a.substr(1) : a;
          }var e = u(a),
              f = b.getComputedStyle(e),
              g = p(f[c("transitionDuration")]),
              h = p(f[c("animationDuration")]),
              i = p(f[c("transitionDelay")]),
              j = p(f[c("animationDelay")]);return h *= parseInt(f[c("animationIterationCount")], 10) || 1, { duration: Math.max(h, g), delay: Math.max(j, i), animationDuration: h, transitionDuration: g, animationDelay: j, transitionDelay: i };
        }function p(a) {
          var b = 0,
              d = (a || "").split(/\s*,\s*/);return c(d, function (a) {
            "s" == a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1)), a = parseFloat(a) || 0, b = b ? Math.max(a, b) : a;
          }), b;
        }function q(a) {
          w && w(), x.push(a), w = h(function () {
            w = null;for (var a = j(), b = 0; b < x.length; b++) {
              x[b](a);
            }x.length = 0;
          });
        }function r(a, b) {
          s(a, b), t(a, b);
        }function s(a, b) {
          b.from && (a.css(b.from), b.from = null);
        }function t(a, b) {
          b.to && (a.css(b.to), b.to = null);
        }function u(a) {
          for (var b = 0; b < a.length; b++) {
            if (1 === a[b].nodeType) return a[b];
          }
        }function v(b, c) {
          var d = u(b),
              f = a(e + "transition-delay");d.style[f] = c ? "-9999s" : "";
        }var w,
            x = [];return m;
      }]);
    }();
  }(), function () {
    b.module("material.components.autocomplete", ["material.core", "material.components.icon", "material.components.virtualRepeat"]);
  }(), function () {
    function a(a) {
      return { restrict: "E", link: function link(b, c, d) {
          b.$on("$destroy", function () {
            a.destroy();
          });
        } };
    }function c(a) {
      function c(a, c, f, g, h, i, j) {
        function k(d, e, j, k) {
          e = f.extractElementByName(e, "md-bottom-sheet"), n = f.createBackdrop(d, "md-bottom-sheet-backdrop md-opaque"), j.clickOutsideToClose && n.on("click", function () {
            f.nextTick(h.cancel, !0);
          }), g.inherit(n, j.parent), a.enter(n, j.parent, null);var l = new m(e, j.parent);return j.bottomSheet = l, g.inherit(l.element, j.parent), j.disableParentScroll && (j.restoreScroll = f.disableScrollAround(l.element, j.parent)), a.enter(l.element, j.parent).then(function () {
            (f.findFocusTarget(e) || b.element(e[0].querySelector("button") || e[0].querySelector("a") || e[0].querySelector("[ng-click]"))).focus(), j.escapeToClose && (j.rootElementKeyupCallback = function (a) {
              a.keyCode === c.KEY_CODE.ESCAPE && f.nextTick(h.cancel, !0);
            }, i.on("keyup", j.rootElementKeyupCallback));
          });
        }function l(b, c, d) {
          var e = d.bottomSheet;return a.leave(n), a.leave(e.element).then(function () {
            d.disableParentScroll && (d.restoreScroll(), delete d.restoreScroll), e.cleanup();
          });
        }function m(a, b) {
          function g(b) {
            a.css(c.CSS.TRANSITION_DURATION, "0ms");
          }function i(b) {
            var d = b.pointer.distanceY;5 > d && (d = Math.max(-e, d / 2)), a.css(c.CSS.TRANSFORM, "translate3d(0," + (e + d) + "px,0)");
          }function k(b) {
            if (b.pointer.distanceY > 0 && (b.pointer.distanceY > 20 || Math.abs(b.pointer.velocityY) > d)) {
              var e = a.prop("offsetHeight") - b.pointer.distanceY,
                  g = Math.min(e / b.pointer.velocityY * .75, 500);a.css(c.CSS.TRANSITION_DURATION, g + "ms"), f.nextTick(h.cancel, !0);
            } else a.css(c.CSS.TRANSITION_DURATION, ""), a.css(c.CSS.TRANSFORM, "");
          }var l = j.register(b, "drag", { horizontal: !1 });return b.on("$md.dragstart", g).on("$md.drag", i).on("$md.dragend", k), { element: a, cleanup: function cleanup() {
              l(), b.off("$md.dragstart", g), b.off("$md.drag", i), b.off("$md.dragend", k);
            } };
        }var n;return { themable: !0, onShow: k, onRemove: l, escapeToClose: !0, clickOutsideToClose: !0, disableParentScroll: !0 };
      }var d = .5,
          e = 80;return c.$inject = ["$animate", "$mdConstant", "$mdUtil", "$mdTheming", "$mdBottomSheet", "$rootElement", "$mdGesture"], a("$mdBottomSheet").setDefaults({ methods: ["disableParentScroll", "escapeToClose", "clickOutsideToClose"], options: c });
    }b.module("material.components.bottomSheet", ["material.core", "material.components.backdrop"]).directive("mdBottomSheet", a).provider("$mdBottomSheet", c), a.$inject = ["$mdBottomSheet"], c.$inject = ["$$interimElementProvider"];
  }(), function () {
    b.module("material.components.backdrop", ["material.core"]).directive("mdBackdrop", ["$mdTheming", "$animate", "$rootElement", "$window", "$log", "$$rAF", "$document", function (a, b, c, d, e, f, g) {
      function h(h, j, k) {
        var l = d.getComputedStyle(g[0].body);if ("fixed" == l.position) {
          var m = parseInt(l.height, 10) + Math.abs(parseInt(l.top, 10));j.css({ height: m + "px" });
        }b.pin && b.pin(j, c), f(function () {
          var b = j.parent()[0];if (b) {
            "BODY" == b.nodeName && j.css({ position: "fixed" });"static" == d.getComputedStyle(b).position && e.warn(i);
          }a.inherit(j, j.parent());
        });
      }var i = "<md-backdrop> may not work properly in a scrolled, static-positioned parent container.";return { restrict: "E", link: h };
    }]);
  }(), function () {
    function a(a, c, d, e) {
      function f(a) {
        return b.isDefined(a.href) || b.isDefined(a.ngHref) || b.isDefined(a.ngLink) || b.isDefined(a.uiSref);
      }function g(a, b) {
        return f(b) ? '<a class="md-button" ng-transclude></a>' : '<button class="md-button" type="' + (void 0 === b.type ? "button" : b.type) + '" ng-transclude></button>';
      }function h(g, h, i) {
        var j = h[0];c(h), a.attach(g, h), j.textContent.trim() || d.expect(h, "aria-label"), f(i) && b.isDefined(i.ngDisabled) && g.$watch(i.ngDisabled, function (a) {
          h.attr("tabindex", a ? -1 : 0);
        }), h.on("click", function (a) {
          !0 === i.disabled && (a.preventDefault(), a.stopImmediatePropagation());
        }), g.mouseActive = !1, h.on("mousedown", function () {
          g.mouseActive = !0, e(function () {
            g.mouseActive = !1;
          }, 100);
        }).on("focus", function () {
          !1 === g.mouseActive && h.addClass("md-focused");
        }).on("blur", function (a) {
          h.removeClass("md-focused");
        });
      }return { restrict: "EA", replace: !0, transclude: !0, template: g, link: h };
    }b.module("material.components.button", ["material.core"]).directive("mdButton", a), a.$inject = ["$mdButtonInkRipple", "$mdTheming", "$mdAria", "$timeout"];
  }(), function () {
    function a(a) {
      return { restrict: "E", link: function link(b, c) {
          a(c);
        } };
    }b.module("material.components.card", ["material.core"]).directive("mdCard", a), a.$inject = ["$mdTheming"];
  }(), function () {
    function a(a, c, d, e, f, g) {
      function h(h, j) {
        return j.type = "checkbox", j.tabindex = j.tabindex || "0", h.attr("role", j.type), h.on("click", function (a) {
          this.hasAttribute("disabled") && a.stopImmediatePropagation();
        }), function (h, j, k, l) {
          function m(a, b, c) {
            k[a] && h.$watch(k[a], function (a) {
              c[a] && j.attr(b, c[a]);
            });
          }function n(a) {
            var b = a.which || a.keyCode;(b === d.KEY_CODE.SPACE || b === d.KEY_CODE.ENTER) && (a.preventDefault(), j.hasClass("md-focused") || j.addClass("md-focused"), o(a));
          }function o(a) {
            j[0].hasAttribute("disabled") || h.$apply(function () {
              var b = k.ngChecked ? k.checked : !l.$viewValue;l.$setViewValue(b, a && a.type), l.$render();
            });
          }function p() {
            l.$viewValue ? j.addClass(i) : j.removeClass(i);
          }l = l || f.fakeNgModel(), e(j), k.ngChecked && h.$watch(h.$eval.bind(h, k.ngChecked), l.$setViewValue.bind(l)), m("ngDisabled", "tabindex", { true: "-1", false: k.tabindex }), c.expectWithText(j, "aria-label"), a.link.pre(h, { on: b.noop, 0: {} }, k, [l]), h.mouseActive = !1, j.on("click", o).on("keypress", n).on("mousedown", function () {
            h.mouseActive = !0, g(function () {
              h.mouseActive = !1;
            }, 100);
          }).on("focus", function () {
            !1 === h.mouseActive && j.addClass("md-focused");
          }).on("blur", function () {
            j.removeClass("md-focused");
          }), l.$render = p;
        };
      }a = a[0];var i = "md-checked";return { restrict: "E", transclude: !0, require: "?ngModel", priority: 210, template: '<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-icon"></div></div><div ng-transclude class="md-label"></div>', compile: h };
    }b.module("material.components.checkbox", ["material.core"]).directive("mdCheckbox", a), a.$inject = ["inputDirective", "$mdAria", "$mdConstant", "$mdTheming", "$mdUtil", "$timeout"];
  }(), function () {
    function a(a) {
      function b(a, b) {
        this.$scope = a, this.$element = b;
      }return { restrict: "E", controller: ["$scope", "$element", b], link: function link(b, d, e) {
          d[0], a(d), b.$broadcast("$mdContentLoaded", d), c(d[0]);
        } };
    }function c(a) {
      b.element(a).on("$md.pressdown", function (b) {
        "t" === b.pointer.type && (b.$materialScrollFixed || (b.$materialScrollFixed = !0, 0 === a.scrollTop ? a.scrollTop = 1 : a.scrollHeight === a.scrollTop + a.offsetHeight && (a.scrollTop -= 1)));
      });
    }b.module("material.components.content", ["material.core"]).directive("mdContent", a), a.$inject = ["$mdTheming"];
  }(), function () {
    b.module("material.components.chips", ["material.core", "material.components.autocomplete"]);
  }(), function () {
    function a(a, c, d) {
      return { restrict: "E", link: function link(e, f, g) {
          c(f), a(function () {
            function a() {
              f.toggleClass("md-content-overflow", g.scrollHeight > g.clientHeight);
            }var c,
                g = f[0].querySelector("md-dialog-content");g && (c = g.getElementsByTagName("img"), a(), b.element(c).on("load", a)), e.$on("$destroy", function () {
              d.destroy(f);
            });
          });
        } };
    }function d(a) {
      function d(a, b) {
        return { template: ['<md-dialog md-theme="{{ dialog.theme }}" aria-label="{{ dialog.ariaLabel }}" ng-class="dialog.css">', '  <md-dialog-content class="md-dialog-content" role="document" tabIndex="-1">', '    <h2 class="md-title">{{ dialog.title }}</h2>', '    <div ng-if="::dialog.mdHtmlContent" class="md-dialog-content-body" ', '        ng-bind-html="::dialog.mdHtmlContent"></div>', '    <div ng-if="::!dialog.mdHtmlContent" class="md-dialog-content-body">', "      <p>{{::dialog.mdTextContent}}</p>", "    </div>", "  </md-dialog-content>", "  <md-dialog-actions>", '    <md-button ng-if="dialog.$type == \'confirm\'"               ng-click="dialog.abort()" class="md-primary">', "      {{ dialog.cancel }}", "    </md-button>", '    <md-button ng-click="dialog.hide()" class="md-primary" md-autofocus="dialog.$type!=\'confirm\'">', "      {{ dialog.ok }}", "    </md-button>", "  </md-dialog-actions>", "</md-dialog>"].join("").replace(/\s\s+/g, ""), controller: function controller() {
            this.hide = function () {
              a.hide(!0);
            }, this.abort = function () {
              a.cancel();
            };
          }, controllerAs: "dialog", bindToController: !0, theme: b.defaultTheme() };
      }function e(a, d, e, h, i, j, k, l, m, n) {
        function o(a, b, c, d) {
          if (d) {
            if (d.mdHtmlContent = d.htmlContent || c.htmlContent || "", d.mdTextContent = d.textContent || c.textContent || d.content || c.content || "", d.mdHtmlContent && !n.has("$sanitize")) throw Error("The ngSanitize module must be loaded in order to use htmlContent.");if (d.mdHtmlContent && d.mdTextContent) throw Error("md-dialog cannot have both `htmlContent` and `textContent`");
          }
        }function p(a, c, d, f) {
          function g() {
            c[0].querySelectorAll(".md-actions").length > 0 && m.warn("Using a class of md-actions is deprected, please use <md-dialog-actions>.");
          }function h() {
            function a() {
              var a = c[0].querySelector(".dialog-close");if (!a) {
                var d = c[0].querySelectorAll(".md-actions button, md-dialog-actions button");a = d[d.length - 1];
              }return b.element(a);
            }if (d.focusOnOpen) {
              (e.findFocusTarget(c) || a()).focus();
            }
          }return b.element(j[0].body).addClass("md-dialog-is-showing"), r(d), u(c.find("md-dialog"), d), t(a, c, d), x(c, d).then(function () {
            s(c, d), v(c, d), g(), h();
          });
        }function q(a, c, d) {
          function e() {
            return y(c, d);
          }function h() {
            b.element(j[0].body).removeClass("md-dialog-is-showing"), c.remove(), d.$destroy || d.origin.focus();
          }return d.deactivateListeners(), d.unlockScreenReader(), d.hideBackdrop(d.$destroy), f && f.parentNode && f.parentNode.removeChild(f), g && g.parentNode && g.parentNode.removeChild(g), d.$destroy ? h() : e().then(h);
        }function r(a) {
          function d(a, d) {
            var e = b.element(a || {});if (e && e.length) {
              var f = { top: 0, left: 0, height: 0, width: 0 },
                  g = b.isFunction(e[0].getBoundingClientRect);return b.extend(d || {}, { element: g ? e : c, bounds: g ? e[0].getBoundingClientRect() : b.extend({}, f, e[0]), focus: b.bind(e, e.focus) });
            }
          }function e(a, c) {
            if (b.isString(a)) {
              var d = a,
                  e = j[0].querySelectorAll(d);a = e.length ? e[0] : null;
            }return b.element(a || c);
          }a.origin = b.extend({ element: null, bounds: null, focus: b.noop }, a.origin || {}), a.parent = e(a.parent, l), a.closeTo = d(e(a.closeTo)), a.openFrom = d(e(a.openFrom)), a.targetEvent && (a.origin = d(a.targetEvent.target, a.origin));
        }function s(c, d) {
          var f = b.element(k),
              g = e.debounce(function () {
            w(c, d);
          }, 60),
              i = [],
              j = function j() {
            var b = "alert" == d.$type ? a.hide : a.cancel;e.nextTick(b, !0);
          };if (d.escapeToClose) {
            var l = d.parent,
                m = function m(a) {
              a.keyCode === h.KEY_CODE.ESCAPE && (a.stopPropagation(), a.preventDefault(), j());
            };c.on("keydown", m), l.on("keydown", m), f.on("resize", g), i.push(function () {
              c.off("keydown", m), l.off("keydown", m), f.off("resize", g);
            });
          }if (d.clickOutsideToClose) {
            var n,
                l = c,
                o = function o(a) {
              n = a.target;
            },
                p = function p(a) {
              n === l[0] && a.target === l[0] && (a.stopPropagation(), a.preventDefault(), j());
            };l.on("mousedown", o), l.on("mouseup", p), i.push(function () {
              l.off("mousedown", o), l.off("mouseup", p);
            });
          }d.deactivateListeners = function () {
            i.forEach(function (a) {
              a();
            }), d.deactivateListeners = null;
          };
        }function t(a, b, c) {
          c.disableParentScroll && (c.restoreScroll = e.disableScrollAround(b, c.parent)), c.hasBackdrop && (c.backdrop = e.createBackdrop(a, "md-dialog-backdrop md-opaque"), i.enter(c.backdrop, c.parent)), c.hideBackdrop = function (a) {
            c.backdrop && (a ? c.backdrop.remove() : i.leave(c.backdrop)), c.disableParentScroll && (c.restoreScroll(), delete c.restoreScroll), c.hideBackdrop = null;
          };
        }function u(a, c) {
          var h = "alert" === c.$type ? "alertdialog" : "dialog",
              i = a.find("md-dialog-content"),
              j = a.attr("id") || "dialog_" + e.nextUid();a.attr({ role: h, tabIndex: "-1" }), 0 === i.length && (i = a), i.attr("id", j), a.attr("aria-describedby", j), c.ariaLabel ? d.expect(a, "aria-label", c.ariaLabel) : d.expectAsync(a, "aria-label", function () {
            var a = i.text().split(/\s+/);return a.length > 3 && (a = a.slice(0, 3).concat("...")), a.join(" ");
          }), f = document.createElement("div"), f.classList.add("md-dialog-focus-trap"), f.tabIndex = 0, g = f.cloneNode(!1);var k = b.bind(a, a.focus);f.addEventListener("focus", k), g.addEventListener("focus", k), a[0].parentNode.insertBefore(f, a[0]), a.append(g);
        }function v(a, b) {
          function c(a) {
            for (; a.parentNode;) {
              if (a === document.body) return;for (var b = a.parentNode.children, e = 0; e < b.length; e++) {
                a === b[e] || z(b[e], ["SCRIPT", "STYLE"]) || b[e].setAttribute("aria-hidden", d);
              }c(a = a.parentNode);
            }
          }var d = !0;c(a[0]), b.unlockScreenReader = function () {
            d = !1, c(a[0]), b.unlockScreenReader = null;
          };
        }function w(a, b) {
          var c = "fixed" == k.getComputedStyle(j[0].body).position,
              d = b.backdrop ? k.getComputedStyle(b.backdrop[0]) : null,
              f = d ? Math.min(j[0].body.clientHeight, Math.ceil(Math.abs(parseInt(d.height, 10)))) : 0;return a.css({ top: (c ? e.scrollTop(b.parent) : 0) + "px", height: f ? f + "px" : "100%" }), a;
        }function x(a, b) {
          b.parent.append(a), w(a, b);var c = a.find("md-dialog"),
              d = e.dom.animator,
              f = d.calculateZoomToOrigin,
              g = { transitionInClass: "md-transition-in", transitionOutClass: "md-transition-out" },
              h = d.toTransformCss(f(c, b.openFrom || b.origin)),
              i = d.toTransformCss("");return b.fullscreen && c.addClass("md-dialog-fullscreen"), d.translate3d(c, h, i, g).then(function (a) {
            return b.reverseAnimate = function () {
              return delete b.reverseAnimate, b.closeTo ? (g = { transitionInClass: "md-transition-out", transitionOutClass: "md-transition-in" }, h = i, i = d.toTransformCss(f(c, b.closeTo)), d.translate3d(c, h, i, g)) : a(d.toTransformCss(f(c, b.origin)));
            }, !0;
          });
        }function y(a, b) {
          return b.reverseAnimate();
        }function z(a, b) {
          return -1 !== b.indexOf(a.nodeName) || void 0;
        }return { hasBackdrop: !0, isolateScope: !0, onShow: p, onShowing: o, onRemove: q, clickOutsideToClose: !1, escapeToClose: !0, targetEvent: null, closeTo: null, openFrom: null, focusOnOpen: !0, disableParentScroll: !0, autoWrap: !0, fullscreen: !1, transformTemplate: function transformTemplate(a, b) {
            function c(a) {
              return b.autoWrap && !/<\/md-dialog>/g.test(a) ? "<md-dialog>" + (a || "") + "</md-dialog>" : a || "";
            }return '<div class="md-dialog-container">' + c(a) + "</div>";
          } };
      }var f, g;return d.$inject = ["$mdDialog", "$mdTheming"], e.$inject = ["$mdDialog", "$mdAria", "$mdUtil", "$mdConstant", "$animate", "$document", "$window", "$rootElement", "$log", "$injector"], a("$mdDialog").setDefaults({ methods: ["disableParentScroll", "hasBackdrop", "clickOutsideToClose", "escapeToClose", "targetEvent", "closeTo", "openFrom", "parent", "fullscreen"], options: e }).addPreset("alert", { methods: ["title", "htmlContent", "textContent", "content", "ariaLabel", "ok", "theme", "css"], options: d }).addPreset("confirm", { methods: ["title", "htmlContent", "textContent", "content", "ariaLabel", "ok", "cancel", "theme", "css"], options: d });
    }b.module("material.components.dialog", ["material.core", "material.components.backdrop"]).directive("mdDialog", a).provider("$mdDialog", d), a.$inject = ["$$rAF", "$mdTheming", "$mdDialog"], d.$inject = ["$$interimElementProvider"];
  }(), function () {
    !function () {
      function a() {
        return { template: '<table aria-hidden="true" class="md-calendar-day-header"><thead></thead></table><div class="md-calendar-scroll-mask"><md-virtual-repeat-container class="md-calendar-scroll-container" md-offset-size="' + (e - d) + '"><table role="grid" tabindex="0" class="md-calendar" aria-readonly="true"><tbody role="rowgroup" md-virtual-repeat="i in ctrl.items" md-calendar-month md-month-offset="$index" class="md-calendar-month" md-start-index="ctrl.getSelectedMonthIndex()" md-item-size="' + d + '"></tbody></table></md-virtual-repeat-container></div>', scope: { minDate: "=mdMinDate", maxDate: "=mdMaxDate", dateFilter: "=mdDateFilter" }, require: ["ngModel", "mdCalendar"], controller: c, controllerAs: "ctrl", bindToController: !0, link: function link(a, b, c, d) {
            var e = d[0];d[1].configureNgModel(e);
          } };
      }function c(a, b, c, d, e, f, g, i, j, k, l) {
        if (g(a), this.items = { length: 2e3 }, this.maxDate && this.minDate) {
          var m = i.getMonthDistance(this.minDate, this.maxDate) + 1;m = Math.max(m, 1), m += 1, this.items.length = m;
        }this.$animate = d, this.$q = e, this.$mdInkRipple = k, this.$mdUtil = l, this.keyCode = f.KEY_CODE, this.dateUtil = i, this.dateLocale = j, this.$element = a, this.$scope = c, this.calendarElement = a[0].querySelector(".md-calendar"), this.calendarScroller = a[0].querySelector(".md-virtual-repeat-scroller"), this.today = this.dateUtil.createDateAtMidnight(), this.firstRenderableDate = this.dateUtil.incrementMonths(this.today, -this.items.length / 2), this.minDate && this.minDate > this.firstRenderableDate ? this.firstRenderableDate = this.minDate : this.maxDate && (this.items.length, this.firstRenderableDate = this.dateUtil.incrementMonths(this.maxDate, -(this.items.length - 2))), this.id = h++, this.ngModelCtrl = null, this.selectedDate = null, this.displayDate = null, this.focusDate = null, this.isInitialized = !1, this.isMonthTransitionInProgress = !1, b.tabindex || a.attr("tabindex", "-1");var n = this;this.cellClickHandler = function () {
          var a = this;this.hasAttribute("data-timestamp") && c.$apply(function () {
            var b = Number(a.getAttribute("data-timestamp"));n.setNgModelValue(n.dateUtil.createDateAtMidnight(b));
          });
        }, this.attachCalendarEventListeners();
      }b.module("material.components.datepicker", ["material.core", "material.components.icon", "material.components.virtualRepeat"]).directive("mdCalendar", a);var d = 265,
          e = 45,
          f = "md-calendar-selected-date",
          g = "md-focus",
          h = 0;c.$inject = ["$element", "$attrs", "$scope", "$animate", "$q", "$mdConstant", "$mdTheming", "$$mdDateUtil", "$mdDateLocale", "$mdInkRipple", "$mdUtil"], c.prototype.configureNgModel = function (a) {
        this.ngModelCtrl = a;var b = this;a.$render = function () {
          b.changeSelectedDate(b.ngModelCtrl.$viewValue);
        };
      }, c.prototype.buildInitialCalendarDisplay = function () {
        this.buildWeekHeader(), this.hideVerticalScrollbar(), this.displayDate = this.selectedDate || this.today, this.isInitialized = !0;
      }, c.prototype.hideVerticalScrollbar = function () {
        var a = this.$element[0],
            b = a.querySelector(".md-calendar-scroll-mask"),
            c = this.calendarScroller,
            d = a.querySelector(".md-calendar-day-header").clientWidth,
            e = c.offsetWidth - c.clientWidth;b.style.width = d + "px", c.style.width = d + e + "px", c.style.paddingRight = e + "px";
      }, c.prototype.attachCalendarEventListeners = function () {
        this.$element.on("keydown", b.bind(this, this.handleKeyEvent));
      }, c.prototype.handleKeyEvent = function (a) {
        var b = this;this.$scope.$apply(function () {
          if (a.which == b.keyCode.ESCAPE || a.which == b.keyCode.TAB) return b.$scope.$emit("md-calendar-close"), void (a.which == b.keyCode.TAB && a.preventDefault());if (a.which === b.keyCode.ENTER) return b.setNgModelValue(b.displayDate), void a.preventDefault();var c = b.getFocusDateFromKeyEvent(a);c && (c = b.boundDateByMinAndMax(c), a.preventDefault(), a.stopPropagation(), b.changeDisplayDate(c).then(function () {
            b.focus(c);
          }));
        });
      }, c.prototype.getFocusDateFromKeyEvent = function (a) {
        var b = this.dateUtil,
            c = this.keyCode;switch (a.which) {case c.RIGHT_ARROW:
            return b.incrementDays(this.displayDate, 1);case c.LEFT_ARROW:
            return b.incrementDays(this.displayDate, -1);case c.DOWN_ARROW:
            return a.metaKey ? b.incrementMonths(this.displayDate, 1) : b.incrementDays(this.displayDate, 7);case c.UP_ARROW:
            return a.metaKey ? b.incrementMonths(this.displayDate, -1) : b.incrementDays(this.displayDate, -7);case c.PAGE_DOWN:
            return b.incrementMonths(this.displayDate, 1);case c.PAGE_UP:
            return b.incrementMonths(this.displayDate, -1);case c.HOME:
            return b.getFirstDateOfMonth(this.displayDate);case c.END:
            return b.getLastDateOfMonth(this.displayDate);default:
            return null;}
      }, c.prototype.getSelectedMonthIndex = function () {
        return this.dateUtil.getMonthDistance(this.firstRenderableDate, this.selectedDate || this.today);
      }, c.prototype.scrollToMonth = function (a) {
        if (this.dateUtil.isValidDate(a)) {
          var b = this.dateUtil.getMonthDistance(this.firstRenderableDate, a);this.calendarScroller.scrollTop = b * d;
        }
      }, c.prototype.setNgModelValue = function (a) {
        this.$scope.$emit("md-calendar-change", a), this.ngModelCtrl.$setViewValue(a), this.ngModelCtrl.$render();
      }, c.prototype.focus = function (a) {
        var b = a || this.selectedDate || this.today,
            c = this.calendarElement.querySelector(".md-focus");c && c.classList.remove(g);var d = this.getDateId(b),
            e = document.getElementById(d);e ? (e.classList.add(g), e.focus()) : this.focusDate = b;
      }, c.prototype.boundDateByMinAndMax = function (a) {
        var b = a;return this.minDate && a < this.minDate && (b = new Date(this.minDate.getTime())), this.maxDate && a > this.maxDate && (b = new Date(this.maxDate.getTime())), b;
      }, c.prototype.changeSelectedDate = function (a) {
        var b = this,
            c = this.selectedDate;this.selectedDate = a, this.changeDisplayDate(a).then(function () {
          if (c) {
            var d = document.getElementById(b.getDateId(c));d && (d.classList.remove(f), d.setAttribute("aria-selected", "false"));
          }if (a) {
            var e = document.getElementById(b.getDateId(a));e && (e.classList.add(f), e.setAttribute("aria-selected", "true"));
          }
        });
      }, c.prototype.changeDisplayDate = function (a) {
        if (!this.isInitialized) return this.buildInitialCalendarDisplay(), this.$q.when();if (!this.dateUtil.isValidDate(a) || this.isMonthTransitionInProgress) return this.$q.when();this.isMonthTransitionInProgress = !0;var b = this.animateDateChange(a);this.displayDate = a;var c = this;return b.then(function () {
          c.isMonthTransitionInProgress = !1;
        }), b;
      }, c.prototype.animateDateChange = function (a) {
        return this.scrollToMonth(a), this.$q.when();
      }, c.prototype.buildWeekHeader = function () {
        for (var a = this.dateLocale.firstDayOfWeek, b = this.dateLocale.shortDays, c = document.createElement("tr"), d = 0; 7 > d; d++) {
          var e = document.createElement("th");e.textContent = b[(d + a) % 7], c.appendChild(e);
        }this.$element.find("thead").append(c);
      }, c.prototype.getDateId = function (a) {
        return ["md", this.id, a.getFullYear(), a.getMonth(), a.getDate()].join("-");
      };
    }();
  }(), function () {
    !function () {
      function a() {
        return { require: ["^^mdCalendar", "mdCalendarMonth"], scope: { offset: "=mdMonthOffset" }, controller: c, controllerAs: "mdMonthCtrl", bindToController: !0, link: function link(a, b, c, d) {
            var e = d[0],
                f = d[1];f.calendarCtrl = e, f.generateContent(), a.$watch(function () {
              return f.offset;
            }, function (a, b) {
              a != b && f.generateContent();
            });
          } };
      }function c(a, b, c) {
        this.dateUtil = b, this.dateLocale = c, this.$element = a, this.calendarCtrl = null, this.offset, this.focusAfterAppend = null;
      }b.module("material.components.datepicker").directive("mdCalendarMonth", a), c.$inject = ["$element", "$$mdDateUtil", "$mdDateLocale"], c.prototype.generateContent = function () {
        var a = this.calendarCtrl,
            b = this.dateUtil.incrementMonths(a.firstRenderableDate, this.offset);this.$element.empty(), this.$element.append(this.buildCalendarForMonth(b)), this.focusAfterAppend && (this.focusAfterAppend.classList.add("md-focus"), this.focusAfterAppend.focus(), this.focusAfterAppend = null);
      }, c.prototype.buildDateCell = function (a) {
        var b = this.calendarCtrl,
            c = document.createElement("td");if (c.tabIndex = -1, c.classList.add("md-calendar-date"), c.setAttribute("role", "gridcell"), a) {
          c.setAttribute("tabindex", "-1"), c.setAttribute("aria-label", this.dateLocale.longDateFormatter(a)), c.id = b.getDateId(a), c.setAttribute("data-timestamp", a.getTime()), this.dateUtil.isSameDay(a, b.today) && c.classList.add("md-calendar-date-today"), this.dateUtil.isValidDate(b.selectedDate) && this.dateUtil.isSameDay(a, b.selectedDate) && (c.classList.add("md-calendar-selected-date"), c.setAttribute("aria-selected", "true"));var f = this.dateLocale.dates[a.getDate()];if (this.isDateEnabled(a)) {
            var g = document.createElement("span");c.appendChild(g), g.classList.add("md-calendar-date-selection-indicator"), g.textContent = f, c.addEventListener("click", b.cellClickHandler), b.focusDate && this.dateUtil.isSameDay(a, b.focusDate) && (this.focusAfterAppend = c);
          } else c.classList.add("md-calendar-date-disabled"), c.textContent = f;
        }return c;
      }, c.prototype.isDateEnabled = function (a) {
        return this.dateUtil.isDateWithinRange(a, this.calendarCtrl.minDate, this.calendarCtrl.maxDate) && (!b.isFunction(this.calendarCtrl.dateFilter) || this.calendarCtrl.dateFilter(a));
      }, c.prototype.buildDateRow = function (a) {
        var b = document.createElement("tr");return b.setAttribute("role", "row"), b.setAttribute("aria-label", this.dateLocale.weekNumberFormatter(a)), b;
      }, c.prototype.buildCalendarForMonth = function (a) {
        var b = this.dateUtil.isValidDate(a) ? a : new Date(),
            c = this.dateUtil.getFirstDateOfMonth(b),
            d = this.getLocaleDay_(c),
            e = this.dateUtil.getNumberOfDaysInMonth(b),
            f = document.createDocumentFragment(),
            g = 1,
            h = this.buildDateRow(g);f.appendChild(h);var i = this.offset === this.calendarCtrl.items.length - 1,
            j = 0,
            k = document.createElement("td");if (k.classList.add("md-calendar-month-label"), this.calendarCtrl.maxDate && c > this.calendarCtrl.maxDate && k.classList.add("md-calendar-month-label-disabled"), k.textContent = this.dateLocale.monthHeaderFormatter(b), 2 >= d) {
          k.setAttribute("colspan", "7");var l = this.buildDateRow();if (l.appendChild(k), f.insertBefore(l, h), i) return f;
        } else j = 2, k.setAttribute("colspan", "2"), h.appendChild(k);for (var m = j; d > m; m++) {
          h.appendChild(this.buildDateCell());
        }for (var n = d, o = c, p = 1; e >= p; p++) {
          if (7 === n) {
            if (i) return f;n = 0, g++, h = this.buildDateRow(g), f.appendChild(h);
          }o.setDate(p);var q = this.buildDateCell(o);h.appendChild(q), n++;
        }for (; h.childNodes.length < 7;) {
          h.appendChild(this.buildDateCell());
        }for (; f.childNodes.length < 6;) {
          for (var r = this.buildDateRow(), m = 0; 7 > m; m++) {
            r.appendChild(this.buildDateCell());
          }f.appendChild(r);
        }return f;
      }, c.prototype.getLocaleDay_ = function (a) {
        return (a.getDay() + (7 - this.dateLocale.firstDayOfWeek)) % 7;
      };
    }();
  }(), function () {
    !function () {
      b.module("material.components.datepicker").config(["$provide", function (a) {
        function b() {
          this.months = null, this.shortMonths = null, this.days = null, this.shortDays = null, this.dates = null, this.firstDayOfWeek = 0, this.formatDate = null, this.parseDate = null, this.monthHeaderFormatter = null, this.weekNumberFormatter = null, this.longDateFormatter = null, this.msgCalendar = "", this.msgOpenCalendar = "";
        }b.prototype.$get = function (a) {
          function b(a) {
            if (!a) return "";var b = a.toLocaleTimeString(),
                c = a;return 0 != a.getHours() || -1 === b.indexOf("11:") && -1 === b.indexOf("23:") || (c = new Date(a.getFullYear(), a.getMonth(), a.getDate(), 1, 0, 0)), c.toLocaleDateString();
          }function c(a) {
            return new Date(a);
          }function d(a) {
            return a = a.trim(), /^(([a-zA-Z]{3,}|[0-9]{1,4})([ \.,]+|[\/\-])){2}([a-zA-Z]{3,}|[0-9]{1,4})$/.test(a);
          }function e(a) {
            return m.shortMonths[a.getMonth()] + " " + a.getFullYear();
          }function f(a) {
            return "Week " + a;
          }function g(a) {
            return [m.days[a.getDay()], m.months[a.getMonth()], m.dates[a.getDate()], a.getFullYear()].join(" ");
          }for (var h = a.DATETIME_FORMATS.DAY.map(function (a) {
            return a[0];
          }), i = Array(32), j = 1; 31 >= j; j++) {
            i[j] = j;
          }var k = "Calendar",
              l = "Open calendar",
              m = { months: this.months || a.DATETIME_FORMATS.MONTH, shortMonths: this.shortMonths || a.DATETIME_FORMATS.SHORTMONTH, days: this.days || a.DATETIME_FORMATS.DAY, shortDays: this.shortDays || h, dates: this.dates || i, firstDayOfWeek: this.firstDayOfWeek || 0, formatDate: this.formatDate || b, parseDate: this.parseDate || c, isDateComplete: this.isDateComplete || d, monthHeaderFormatter: this.monthHeaderFormatter || e, weekNumberFormatter: this.weekNumberFormatter || f, longDateFormatter: this.longDateFormatter || g, msgCalendar: this.msgCalendar || k, msgOpenCalendar: this.msgOpenCalendar || l };return m;
        }, b.prototype.$get.$inject = ["$locale"], a.provider("$mdDateLocale", new b());
      }]);
    }();
  }(), function () {
    !function () {
      function c() {
        return { template: '<md-button class="md-datepicker-button md-icon-button" type="button" tabindex="-1" aria-hidden="true" ng-click="ctrl.openCalendarPane($event)"><md-icon class="md-datepicker-calendar-icon" md-svg-icon="md-calendar"></md-icon></md-button><div class="md-datepicker-input-container" ng-class="{\'md-datepicker-focused\': ctrl.isFocused}"><input class="md-datepicker-input" aria-haspopup="true" ng-focus="ctrl.setFocused(true)" ng-blur="ctrl.setFocused(false)"><md-button type="button" md-no-ink class="md-datepicker-triangle-button md-icon-button" ng-click="ctrl.openCalendarPane($event)" aria-label="{{::ctrl.dateLocale.msgOpenCalendar}}"><div class="md-datepicker-expand-triangle"></div></md-button></div><div class="md-datepicker-calendar-pane md-whiteframe-z1"><div class="md-datepicker-input-mask"><div class="md-datepicker-input-mask-opaque"></div></div><div class="md-datepicker-calendar"><md-calendar role="dialog" aria-label="{{::ctrl.dateLocale.msgCalendar}}" md-min-date="ctrl.minDate" md-max-date="ctrl.maxDate"md-date-filter="ctrl.dateFilter"ng-model="ctrl.date" ng-if="ctrl.isCalendarOpen"></md-calendar></div></div>', require: ["ngModel", "mdDatepicker", "?^mdInputContainer"], scope: { minDate: "=mdMinDate", maxDate: "=mdMaxDate", placeholder: "@mdPlaceholder", dateFilter: "=mdDateFilter" }, controller: d, controllerAs: "ctrl", bindToController: !0, link: function link(a, b, c, d) {
            var e = d[0],
                f = d[1];if (d[2]) throw Error("md-datepicker should not be placed inside md-input-container.");f.configureNgModel(e);
          } };
      }function d(a, c, d, e, f, g, h, i, j, k, l, m) {
        this.$compile = e, this.$timeout = f, this.$window = g, this.dateLocale = k, this.dateUtil = l, this.$mdConstant = h, this.$mdUtil = j, this.$$rAF = m, this.documentElement = b.element(document.documentElement), this.ngModelCtrl = null, this.inputElement = c[0].querySelector("input"), this.ngInputElement = b.element(this.inputElement), this.inputContainer = c[0].querySelector(".md-datepicker-input-container"), this.calendarPane = c[0].querySelector(".md-datepicker-calendar-pane"), this.calendarButton = c[0].querySelector(".md-datepicker-button"), this.inputMask = c[0].querySelector(".md-datepicker-input-mask-opaque"), this.$element = c, this.$attrs = d, this.$scope = a, this.date = null, this.isFocused = !1, this.isDisabled, this.setDisabled(c[0].disabled || b.isString(d.disabled)), this.isCalendarOpen = !1, this.calendarPaneOpenedFrom = null, this.calendarPane.id = "md-date-pane" + j.nextUid(), i(c), this.bodyClickHandler = b.bind(this, this.handleBodyClick), this.windowResizeHandler = j.debounce(b.bind(this, this.closeCalendarPane), 100), d.tabindex || c.attr("tabindex", "-1"), this.installPropertyInterceptors(), this.attachChangeListeners(), this.attachInteractionListeners();var n = this;a.$on("$destroy", function () {
          n.detachCalendarPane();
        });
      }b.module("material.components.datepicker").directive("mdDatepicker", c);var f = "md-datepicker-invalid",
          h = 368,
          i = 360;d.$inject = ["$scope", "$element", "$attrs", "$compile", "$timeout", "$window", "$mdConstant", "$mdTheming", "$mdUtil", "$mdDateLocale", "$$mdDateUtil", "$$rAF"], d.prototype.configureNgModel = function (a) {
        this.ngModelCtrl = a;var b = this;a.$render = function () {
          var a = b.ngModelCtrl.$viewValue;if (a && !(a instanceof Date)) throw Error("The ng-model for md-datepicker must be a Date instance. Currently the model is a: " + (typeof a === "undefined" ? "undefined" : _typeof(a)));b.date = a, b.inputElement.value = b.dateLocale.formatDate(a), b.resizeInputElement(), b.updateErrorState();
        };
      }, d.prototype.attachChangeListeners = function () {
        var a = this;a.$scope.$on("md-calendar-change", function (b, c) {
          a.ngModelCtrl.$setViewValue(c), a.date = c, a.inputElement.value = a.dateLocale.formatDate(c), a.closeCalendarPane(), a.resizeInputElement(), a.updateErrorState();
        }), a.ngInputElement.on("input", b.bind(a, a.resizeInputElement)), a.ngInputElement.on("input", a.$mdUtil.debounce(a.handleInputEvent, 500, a));
      }, d.prototype.attachInteractionListeners = function () {
        var a = this,
            b = this.$scope,
            c = this.$mdConstant.KEY_CODE;a.ngInputElement.on("keydown", function (d) {
          d.altKey && d.keyCode == c.DOWN_ARROW && (a.openCalendarPane(d), b.$digest());
        }), b.$on("md-calendar-close", function () {
          a.closeCalendarPane();
        });
      }, d.prototype.installPropertyInterceptors = function () {
        var a = this;if (this.$attrs.ngDisabled) {
          var b = this.$mdUtil.validateScope(this.$element) ? this.$element.scope() : null;b && b.$watch(this.$attrs.ngDisabled, function (b) {
            a.setDisabled(b);
          });
        }Object.defineProperty(this, "placeholder", { get: function get() {
            return a.inputElement.placeholder;
          }, set: function set(b) {
            a.inputElement.placeholder = b || "";
          } });
      }, d.prototype.setDisabled = function (a) {
        this.isDisabled = a, this.inputElement.disabled = a, this.calendarButton.disabled = a;
      }, d.prototype.updateErrorState = function (a) {
        var c = a || this.date;this.clearErrorState(), this.dateUtil.isValidDate(c) ? (this.dateUtil.isValidDate(this.minDate) && this.ngModelCtrl.$setValidity("mindate", c >= this.minDate), this.dateUtil.isValidDate(this.maxDate) && this.ngModelCtrl.$setValidity("maxdate", c <= this.maxDate), b.isFunction(this.dateFilter) && this.ngModelCtrl.$setValidity("filtered", this.dateFilter(c))) : this.ngModelCtrl.$setValidity("valid", null == c), this.ngModelCtrl.$valid || this.inputContainer.classList.add(f);
      }, d.prototype.clearErrorState = function () {
        this.inputContainer.classList.remove(f), ["mindate", "maxdate", "filtered", "valid"].forEach(function (a) {
          this.ngModelCtrl.$setValidity(a, !0);
        }, this);
      }, d.prototype.resizeInputElement = function () {
        this.inputElement.size = this.inputElement.value.length + 3;
      }, d.prototype.handleInputEvent = function () {
        var a = this.inputElement.value,
            b = a ? this.dateLocale.parseDate(a) : null;this.dateUtil.setDateTimeToMidnight(b), ("" == a || this.dateUtil.isValidDate(b) && this.dateLocale.isDateComplete(a) && this.isDateEnabled(b)) && (this.ngModelCtrl.$setViewValue(b), this.date = b), this.updateErrorState(b);
      }, d.prototype.isDateEnabled = function (a) {
        return this.dateUtil.isDateWithinRange(a, this.minDate, this.maxDate) && (!b.isFunction(this.dateFilter) || this.dateFilter(a));
      }, d.prototype.attachCalendarPane = function () {
        var a = this.calendarPane;a.style.transform = "", this.$element.addClass("md-datepicker-open");var b = this.inputContainer.getBoundingClientRect(),
            c = document.body.getBoundingClientRect(),
            d = b.top - c.top,
            e = b.left - c.left,
            f = c.top < 0 && 0 == document.body.scrollTop ? -c.top : document.body.scrollTop,
            g = c.left < 0 && 0 == document.body.scrollLeft ? -c.left : document.body.scrollLeft,
            j = f + this.$window.innerHeight,
            k = g + this.$window.innerWidth;if (e + i > k) {
          if (k - i > 0) e = k - i;else {
            e = g;var l = this.$window.innerWidth / i;a.style.transform = "scale(" + l + ")";
          }a.classList.add("md-datepicker-pos-adjusted");
        }d + h > j && j - h > f && (d = j - h, a.classList.add("md-datepicker-pos-adjusted")), a.style.left = e + "px", a.style.top = d + "px", document.body.appendChild(a), this.inputMask.style.left = b.width + "px", this.$$rAF(function () {
          a.classList.add("md-pane-open");
        });
      }, d.prototype.detachCalendarPane = function () {
        this.$element.removeClass("md-datepicker-open"), this.calendarPane.classList.remove("md-pane-open"), this.calendarPane.classList.remove("md-datepicker-pos-adjusted"), this.calendarPane.parentNode && this.calendarPane.parentNode.removeChild(this.calendarPane);
      }, d.prototype.openCalendarPane = function (b) {
        if (!this.isCalendarOpen && !this.isDisabled) {
          this.isCalendarOpen = !0, this.calendarPaneOpenedFrom = b.target, this.$mdUtil.disableScrollAround(this.calendarPane), this.attachCalendarPane(), this.focusCalendar();var c = this;this.$mdUtil.nextTick(function () {
            c.documentElement.on("click touchstart", c.bodyClickHandler);
          }, !1), a.addEventListener("resize", this.windowResizeHandler);
        }
      }, d.prototype.closeCalendarPane = function () {
        this.isCalendarOpen && (this.isCalendarOpen = !1, this.detachCalendarPane(), this.calendarPaneOpenedFrom.focus(), this.calendarPaneOpenedFrom = null, this.$mdUtil.enableScrolling(), this.documentElement.off("click touchstart", this.bodyClickHandler), a.removeEventListener("resize", this.windowResizeHandler));
      }, d.prototype.getCalendarCtrl = function () {
        return b.element(this.calendarPane.querySelector("md-calendar")).controller("mdCalendar");
      }, d.prototype.focusCalendar = function () {
        var a = this;this.$mdUtil.nextTick(function () {
          a.getCalendarCtrl().focus();
        }, !1);
      }, d.prototype.setFocused = function (a) {
        this.isFocused = a;
      }, d.prototype.handleBodyClick = function (a) {
        this.isCalendarOpen && (this.$mdUtil.getClosest(a.target, "md-calendar") || this.closeCalendarPane(), this.$scope.$digest());
      };
    }();
  }(), function () {
    !function () {
      b.module("material.components.datepicker").factory("$$mdDateUtil", function () {
        function a(a) {
          return new Date(a.getFullYear(), a.getMonth(), 1);
        }function c(a) {
          return new Date(a.getFullYear(), a.getMonth() + 1, 0).getDate();
        }function d(a) {
          return new Date(a.getFullYear(), a.getMonth() + 1, 1);
        }function e(a) {
          return new Date(a.getFullYear(), a.getMonth() - 1, 1);
        }function f(a, b) {
          return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
        }function g(a, b) {
          return a.getDate() == b.getDate() && f(a, b);
        }function h(a, b) {
          return f(d(a), b);
        }function i(a, b) {
          return f(b, e(a));
        }function j(a, b) {
          return r((a.getTime() + b.getTime()) / 2);
        }function k(b) {
          var c = a(b);return Math.floor((c.getDay() + b.getDate() - 1) / 7);
        }function l(a, b) {
          return new Date(a.getFullYear(), a.getMonth(), a.getDate() + b);
        }function m(a, b) {
          var d = new Date(a.getFullYear(), a.getMonth() + b, 1),
              e = c(d);return e < a.getDate() ? d.setDate(e) : d.setDate(a.getDate()), d;
        }function n(a, b) {
          return 12 * (b.getFullYear() - a.getFullYear()) + (b.getMonth() - a.getMonth());
        }function o(a) {
          return new Date(a.getFullYear(), a.getMonth(), c(a));
        }function p(a) {
          return null != a && a.getTime && !isNaN(a.getTime());
        }function q(a) {
          p(a) && a.setHours(0, 0, 0, 0);
        }function r(a) {
          var c;return c = b.isUndefined(a) ? new Date() : new Date(a), q(c), c;
        }function s(a, c, d) {
          return (!b.isDate(c) || a >= c) && (!b.isDate(d) || d >= a);
        }return { getFirstDateOfMonth: a, getNumberOfDaysInMonth: c, getDateInNextMonth: d, getDateInPreviousMonth: e, isInNextMonth: h, isInPreviousMonth: i, getDateMidpoint: j, isSameMonthAndYear: f, getWeekOfMonth: k, incrementDays: l, incrementMonths: m, getLastDateOfMonth: o, isSameDay: g, getMonthDistance: n, isValidDate: p, setDateTimeToMidnight: q, createDateAtMidnight: r, isDateWithinRange: s };
      });
    }();
  }(), function () {
    function a(a) {
      return { restrict: "E", link: a };
    }b.module("material.components.divider", ["material.core"]).directive("mdDivider", a), a.$inject = ["$mdTheming"];
  }(), function () {
    !function () {
      function a() {
        return { restrict: "E", require: ["^?mdFabSpeedDial", "^?mdFabToolbar"], compile: function compile(a, c) {
            var d = a.children(),
                e = !1;b.forEach(["", "data-", "x-"], function (a) {
              e = e || !!d.attr(a + "ng-repeat");
            }), e ? d.addClass("md-fab-action-item") : d.wrap('<div class="md-fab-action-item">');
          } };
      }b.module("material.components.fabActions", ["material.core"]).directive("mdFabActions", a);
    }();
  }(), function () {
    !function () {
      function a(a, c, d, e, f, g) {
        function h() {
          E.direction = E.direction || "down", E.isOpen = E.isOpen || !1, k(), c.addClass("md-animations-waiting");
        }function i() {
          var d = ["click", "focusin", "focusout"];b.forEach(d, function (a) {
            c.on(a, j);
          }), a.$on("$destroy", function () {
            b.forEach(d, function (a) {
              c.off(a, j);
            }), o();
          });
        }function j(a) {
          "click" == a.type && B(a), "focusout" != a.type || G || (G = g(function () {
            E.close();
          }, 100, !1)), "focusin" == a.type && G && (g.cancel(G), G = null);
        }function k() {
          E.currentActionIndex = -1;
        }function l() {
          a.$watch("vm.direction", function (a, b) {
            d.removeClass(c, "md-" + b), d.addClass(c, "md-" + a), k();
          });var b, e;a.$watch("vm.isOpen", function (a) {
            k(), b && e || (b = C(), e = D()), a ? n() : o();var f = a ? "md-is-open" : "",
                g = a ? "" : "md-is-open";b.attr("aria-haspopup", !0), b.attr("aria-expanded", a), e.attr("aria-hidden", !a), d.setClass(c, f, g);
          });
        }function m() {
          c[0].scrollHeight > 0 ? d.addClass(c, "md-animations-ready").then(function () {
            c.removeClass("md-animations-waiting");
          }) : 10 > F && (g(m, 100), F += 1);
        }function n() {
          c.on("keydown", q), e.nextTick(function () {
            b.element(document).on("click touchend", p);
          });
        }function o() {
          c.off("keydown", q), b.element(document).off("click touchend", p);
        }function p(a) {
          if (a.target) {
            var b = e.getClosest(a.target, "md-fab-trigger"),
                c = e.getClosest(a.target, "md-fab-actions");b || c || E.close();
          }
        }function q(a) {
          switch (a.which) {case f.KEY_CODE.ESCAPE:
              return E.close(), a.preventDefault(), !1;case f.KEY_CODE.LEFT_ARROW:
              return v(a), !1;case f.KEY_CODE.UP_ARROW:
              return w(a), !1;case f.KEY_CODE.RIGHT_ARROW:
              return x(a), !1;case f.KEY_CODE.DOWN_ARROW:
              return y(a), !1;}
        }function r(a) {
          t(a, -1);
        }function s(a) {
          t(a, 1);
        }function t(a, c) {
          var d = u();E.currentActionIndex = E.currentActionIndex + c, E.currentActionIndex = Math.min(d.length - 1, E.currentActionIndex), E.currentActionIndex = Math.max(0, E.currentActionIndex);var e = b.element(d[E.currentActionIndex]).children()[0];b.element(e).attr("tabindex", 0), e.focus(), a.preventDefault(), a.stopImmediatePropagation();
        }function u() {
          var a = D()[0].querySelectorAll(".md-fab-action-item");return b.forEach(a, function (a) {
            b.element(b.element(a).children()[0]).attr("tabindex", -1);
          }), a;
        }function v(a) {
          "left" === E.direction ? s(a) : r(a);
        }function w(a) {
          "down" === E.direction ? r(a) : s(a);
        }function x(a) {
          "left" === E.direction ? r(a) : s(a);
        }function y(a) {
          "up" === E.direction ? r(a) : s(a);
        }function z(a) {
          return e.getClosest(a, "md-fab-trigger");
        }function A(a) {
          return e.getClosest(a, "md-fab-actions");
        }function B(a) {
          z(a.target) && E.toggle(), A(a.target) && E.close();
        }function C() {
          return c.find("md-fab-trigger");
        }function D() {
          return c.find("md-fab-actions");
        }var E = this;E.open = function () {
          a.$evalAsync("vm.isOpen = true");
        }, E.close = function () {
          a.$evalAsync("vm.isOpen = false"), c.find("md-fab-trigger")[0].focus();
        }, E.toggle = function () {
          a.$evalAsync("vm.isOpen = !vm.isOpen");
        }, h(), i(), l();var F = 0;m();var G;
      }b.module("material.components.fabShared", ["material.core"]).controller("FabController", a), a.$inject = ["$scope", "$element", "$animate", "$mdUtil", "$mdConstant", "$timeout"];
    }();
  }(), function () {
    !function () {
      function c() {
        function a(a, b) {
          b.prepend('<div class="md-css-variables"></div>');
        }return { restrict: "E", scope: { direction: "@?mdDirection", isOpen: "=?mdOpen" }, bindToController: !0, controller: "FabController", controllerAs: "vm", link: a };
      }function d(c) {
        function d(a) {
          c(a, f, !1);
        }function e(c) {
          if (!c.hasClass("md-animations-waiting") || c.hasClass("md-animations-ready")) {
            var d = c[0],
                e = c.controller("mdFabSpeedDial"),
                f = d.querySelectorAll(".md-fab-action-item"),
                g = d.querySelector("md-fab-trigger"),
                h = d.querySelector(".md-css-variables"),
                i = parseInt(a.getComputedStyle(h).zIndex);b.forEach(f, function (a, b) {
              var c = a.style;c.transform = c.webkitTransform = "", c.transitionDelay = "", c.opacity = 1, c.zIndex = f.length - b + i;
            }), g.style.zIndex = i + f.length + 1, e.isOpen || b.forEach(f, function (a, b) {
              var c,
                  d,
                  f = a.style,
                  h = (g.clientHeight - a.clientHeight) / 2,
                  i = (g.clientWidth - a.clientWidth) / 2;switch (e.direction) {case "up":
                  c = a.scrollHeight * (b + 1) + h, d = "Y";break;case "down":
                  c = -(a.scrollHeight * (b + 1) + h), d = "Y";break;case "left":
                  c = a.scrollWidth * (b + 1) + i, d = "X";break;case "right":
                  c = -(a.scrollWidth * (b + 1) + i), d = "X";}var j = "translate" + d + "(" + c + "px)";f.transform = f.webkitTransform = j;
            });
          }
        }return { addClass: function addClass(a, b, c) {
            a.hasClass("md-fling") ? (e(a), d(c)) : c();
          }, removeClass: function removeClass(a, b, c) {
            e(a), d(c);
          } };
      }function e(c) {
        function d(a) {
          c(a, f, !1);
        }function e(c) {
          var d = c[0],
              e = c.controller("mdFabSpeedDial"),
              f = d.querySelectorAll(".md-fab-action-item"),
              h = d.querySelector(".md-css-variables"),
              i = parseInt(a.getComputedStyle(h).zIndex);b.forEach(f, function (a, b) {
            var c = a.style,
                d = b * g;c.opacity = e.isOpen ? 1 : 0, c.transform = c.webkitTransform = e.isOpen ? "scale(1)" : "scale(0.1)", c.transitionDelay = (e.isOpen ? d : f.length - d) + "ms", c.zIndex = f.length - b + i;
          });
        }var g = 65;return { addClass: function addClass(a, b, c) {
            e(a), d(c);
          }, removeClass: function removeClass(a, b, c) {
            e(a), d(c);
          } };
      }var f = 300;b.module("material.components.fabSpeedDial", ["material.core", "material.components.fabShared", "material.components.fabTrigger", "material.components.fabActions"]).directive("mdFabSpeedDial", c).animation(".md-fling", d).animation(".md-scale", e).service("mdFabSpeedDialFlingAnimation", d).service("mdFabSpeedDialScaleAnimation", e), d.$inject = ["$timeout"], e.$inject = ["$timeout"];
    }();
  }(), function () {
    !function () {
      function c() {
        function a(a, b, c) {
          b.addClass("md-fab-toolbar"), b.find("md-fab-trigger").find("button").prepend('<div class="md-fab-toolbar-background"></div>');
        }return { restrict: "E", transclude: !0, template: '<div class="md-fab-toolbar-wrapper">  <div class="md-fab-toolbar-content" ng-transclude></div></div>', scope: { direction: "@?mdDirection", isOpen: "=?mdOpen" }, bindToController: !0, controller: "FabController", controllerAs: "vm", link: a };
      }function d() {
        function c(c, d, e) {
          if (d) {
            var f = c[0],
                g = c.controller("mdFabToolbar"),
                h = f.querySelector(".md-fab-toolbar-background"),
                i = f.querySelector("md-fab-trigger button"),
                j = f.querySelector("md-toolbar"),
                k = f.querySelector("md-fab-trigger button md-icon"),
                l = c.find("md-fab-actions").children();if (i && h) {
              var m = a.getComputedStyle(i).getPropertyValue("background-color"),
                  n = f.offsetWidth,
                  o = (f.offsetHeight, n / i.offsetWidth * 2);h.style.backgroundColor = m, h.style.borderRadius = n + "px", g.isOpen ? (j.style.pointerEvents = "initial", h.style.width = i.offsetWidth + "px", h.style.height = i.offsetHeight + "px", h.style.transform = "scale(" + o + ")", h.style.transitionDelay = "0ms", k && (k.style.transitionDelay = ".3s"), b.forEach(l, function (a, b) {
                a.style.transitionDelay = 25 * (l.length - b) + "ms";
              })) : (j.style.pointerEvents = "none", h.style.transform = "scale(1)", h.style.top = "0", c.hasClass("md-right") && (h.style.left = "0", h.style.right = null), c.hasClass("md-left") && (h.style.right = "0", h.style.left = null), h.style.transitionDelay = "200ms", k && (k.style.transitionDelay = "0ms"), b.forEach(l, function (a, b) {
                a.style.transitionDelay = 200 + 25 * b + "ms";
              }));
            }
          }
        }return { addClass: function addClass(a, b, d) {
            c(a, b, d), d();
          }, removeClass: function removeClass(a, b, d) {
            c(a, b, d), d();
          } };
      }b.module("material.components.fabToolbar", ["material.core", "material.components.fabShared", "material.components.fabTrigger", "material.components.fabActions"]).directive("mdFabToolbar", c).animation(".md-fab-toolbar", d).service("mdFabToolbarAnimation", d);
    }();
  }(), function () {
    !function () {
      function a() {
        return { restrict: "E", require: ["^?mdFabSpeedDial", "^?mdFabToolbar"] };
      }b.module("material.components.fabTrigger", ["material.core"]).directive("mdFabTrigger", a);
    }();
  }(), function () {
    function a(a, d, e, f) {
      function g(c, g, h, i) {
        function j() {
          for (var a in d.MEDIA) {
            f(a), f.getQuery(d.MEDIA[a]).addListener(x);
          }return f.watchResponsiveAttributes(["md-cols", "md-row-height", "md-gutter"], h, l);
        }function k() {
          i.layoutDelegate = b.noop, y();for (var a in d.MEDIA) {
            f.getQuery(d.MEDIA[a]).removeListener(x);
          }
        }function l(a) {
          null == a ? i.invalidateLayout() : f(a) && i.invalidateLayout();
        }function m(a) {
          var d = q(),
              f = { tileSpans: r(d), colCount: s(), rowMode: v(), rowHeight: u(), gutter: t() };if (a || !b.equals(f, z)) {
            var h = e(f.colCount, f.tileSpans, d).map(function (a, c) {
              return { grid: { element: g, style: p(f.colCount, c, f.gutter, f.rowMode, f.rowHeight) }, tiles: a.map(function (a, e) {
                  return { element: b.element(d[e]), style: o(a.position, a.spans, f.colCount, c, f.gutter, f.rowMode, f.rowHeight) };
                }) };
            }).reflow().performance();c.mdOnLayout({ $event: { performance: h } }), z = f;
          }
        }function n(a) {
          return A + a + B;
        }function o(a, b, c, d, e, f, g) {
          var h = 1 / c * 100,
              i = (c - 1) / c,
              j = C({ share: h, gutterShare: i, gutter: e }),
              k = { left: D({ unit: j, offset: a.col, gutter: e }), width: E({ unit: j, span: b.col, gutter: e }), paddingTop: "", marginTop: "", top: "", height: "" };switch (f) {case "fixed":
              k.top = D({ unit: g, offset: a.row, gutter: e }), k.height = E({ unit: g, span: b.row, gutter: e });break;case "ratio":
              var l = h / g,
                  m = C({ share: l, gutterShare: i, gutter: e });k.paddingTop = E({ unit: m, span: b.row, gutter: e }), k.marginTop = D({ unit: m, offset: a.row, gutter: e });break;case "fit":
              var n = (d - 1) / d,
                  l = 1 / d * 100,
                  m = C({ share: l, gutterShare: n, gutter: e });k.top = D({ unit: m, offset: a.row, gutter: e }), k.height = E({ unit: m, span: b.row, gutter: e });}return k;
        }function p(a, b, c, d, e) {
          var f = {};switch (d) {case "fixed":
              f.height = E({ unit: e, span: b, gutter: c }), f.paddingBottom = "";break;case "ratio":
              var g = 1 === a ? 0 : (a - 1) / a,
                  h = 1 / a * 100,
                  i = h * (1 / e),
                  j = C({ share: i, gutterShare: g, gutter: c });f.height = "", f.paddingBottom = E({ unit: j, span: b, gutter: c });}return f;
        }function q() {
          return [].filter.call(g.children(), function (a) {
            return "MD-GRID-TILE" == a.tagName && !a.$$mdDestroyed;
          });
        }function r(a) {
          return [].map.call(a, function (a) {
            var c = b.element(a).controller("mdGridTile");return { row: parseInt(f.getResponsiveAttribute(c.$attrs, "md-rowspan"), 10) || 1, col: parseInt(f.getResponsiveAttribute(c.$attrs, "md-colspan"), 10) || 1 };
          });
        }function s() {
          var a = parseInt(f.getResponsiveAttribute(h, "md-cols"), 10);if (isNaN(a)) throw "md-grid-list: md-cols attribute was not found, or contained a non-numeric value";return a;
        }function t() {
          return w(f.getResponsiveAttribute(h, "md-gutter") || 1);
        }function u() {
          var a = f.getResponsiveAttribute(h, "md-row-height");switch (v()) {case "fixed":
              return w(a);case "ratio":
              var b = a.split(":");return parseFloat(b[0]) / parseFloat(b[1]);case "fit":
              return 0;}
        }function v() {
          var a = f.getResponsiveAttribute(h, "md-row-height");return "fit" == a ? "fit" : -1 !== a.indexOf(":") ? "ratio" : "fixed";
        }function w(a) {
          return (/\D$/.test(a) ? a : a + "px"
          );
        }g.attr("role", "list"), i.layoutDelegate = m;var x = b.bind(i, i.invalidateLayout),
            y = j();c.$on("$destroy", k);var z,
            A = a.startSymbol(),
            B = a.endSymbol(),
            C = a(n("share") + "% - (" + n("gutter") + " * " + n("gutterShare") + ")"),
            D = a("calc((" + n("unit") + " + " + n("gutter") + ") * " + n("offset") + ")"),
            E = a("calc((" + n("unit") + ") * " + n("span") + " + (" + n("span") + " - 1) * " + n("gutter") + ")");
      }return { restrict: "E", controller: c, scope: { mdOnLayout: "&" }, link: g };
    }function c(a) {
      this.layoutInvalidated = !1, this.tilesInvalidated = !1, this.$timeout_ = a.nextTick, this.layoutDelegate = b.noop;
    }function d(a) {
      function c(b, c) {
        var d, g, h, i, j, k;return i = a.time(function () {
          g = e(b, c);
        }), d = { layoutInfo: function layoutInfo() {
            return g;
          }, map: function map(b) {
            return j = a.time(function () {
              var a = d.layoutInfo();h = b(a.positioning, a.rowCount);
            }), d;
          }, reflow: function reflow(b) {
            return k = a.time(function () {
              (b || f)(h.grid, h.tiles);
            }), d;
          }, performance: function performance() {
            return { tileCount: c.length, layoutTime: i, mapTime: j, reflowTime: k, totalTime: i + j + k };
          } };
      }function d(a, b) {
        a.element.css(a.style), b.forEach(function (a) {
          a.element.css(a.style);
        });
      }function e(a, b) {
        function c(b, c) {
          if (b.col > a) throw "md-grid-list: Tile at position " + c + " has a colspan (" + b.col + ") that exceeds the column count (" + a + ")";for (var g = 0, k = 0; k - g < b.col;) {
            h >= a ? d() : (g = j.indexOf(0, h), -1 !== g && -1 !== (k = f(g + 1)) ? h = k + 1 : (g = k = 0, d()));
          }return e(g, b.col, b.row), h = g + b.col, { col: g, row: i };
        }function d() {
          h = 0, i++, e(0, a, -1);
        }function e(a, b, c) {
          for (var d = a; a + b > d; d++) {
            j[d] = Math.max(j[d] + c, 0);
          }
        }function f(a) {
          var b;for (b = a; b < j.length; b++) {
            if (0 !== j[b]) return b;
          }return b === j.length ? b : void 0;
        }function g() {
          for (var b = [], c = 0; a > c; c++) {
            b.push(0);
          }return b;
        }var h = 0,
            i = 0,
            j = g();return { positioning: b.map(function (a, b) {
            return { spans: a, position: c(a, b) };
          }), rowCount: i + Math.max.apply(Math, j) };
      }var f = d;return c.animateWith = function (a) {
        f = b.isFunction(a) ? a : d;
      }, c;
    }function e(a) {
      function c(c, d, e, f) {
        d.attr("role", "listitem");var g = a.watchResponsiveAttributes(["md-colspan", "md-rowspan"], e, b.bind(f, f.invalidateLayout));f.invalidateTiles(), c.$on("$destroy", function () {
          d[0].$$mdDestroyed = !0, g(), f.invalidateLayout();
        }), b.isDefined(c.$parent.$index) && c.$watch(function () {
          return c.$parent.$index;
        }, function (a, b) {
          a !== b && f.invalidateTiles();
        });
      }return { restrict: "E", require: "^mdGridList", template: "<figure ng-transclude></figure>", transclude: !0, scope: {}, controller: ["$attrs", function (a) {
          this.$attrs = a;
        }], link: c };
    }function f() {
      return { template: "<figcaption ng-transclude></figcaption>", transclude: !0 };
    }b.module("material.components.gridList", ["material.core"]).directive("mdGridList", a).directive("mdGridTile", e).directive("mdGridTileFooter", f).directive("mdGridTileHeader", f).factory("$mdGridLayout", d), a.$inject = ["$interpolate", "$mdConstant", "$mdGridLayout", "$mdMedia"], c.$inject = ["$mdUtil"], c.prototype = { invalidateTiles: function invalidateTiles() {
        this.tilesInvalidated = !0, this.invalidateLayout();
      }, invalidateLayout: function invalidateLayout() {
        this.layoutInvalidated || (this.layoutInvalidated = !0, this.$timeout_(b.bind(this, this.layout)));
      }, layout: function layout() {
        try {
          this.layoutDelegate(this.tilesInvalidated);
        } finally {
          this.layoutInvalidated = !1, this.tilesInvalidated = !1;
        }
      } }, d.$inject = ["$mdUtil"], e.$inject = ["$mdMedia"];
  }(), function () {
    b.module("material.components.icon", ["material.core"]);
  }(), function () {
    function a(a) {
      return { restrict: "E", compile: function compile(b) {
          return b[0].setAttribute("role", "list"), a;
        } };
    }function c(a, c, d, e) {
      var f = ["md-checkbox", "md-switch"];return { restrict: "E", controller: "MdListController", compile: function compile(g, h) {
          function i() {
            for (var a, b, c = ["md-switch", "md-checkbox"], d = 0; b = c[d]; ++d) {
              if ((a = g.find(b)[0]) && !a.hasAttribute("aria-label")) {
                var e = g.find("p")[0];if (!e) return;a.setAttribute("aria-label", "Toggle " + e.textContent);
              }
            }
          }function j(a) {
            var c;"div" == a ? (c = b.element('<div class="md-no-style md-list-item-inner">'), c.append(g.contents()), g.addClass("md-proxy-focus")) : (c = b.element('<md-button class="md-no-style"><div class="md-list-item-inner"></div></md-button>'), l(g[0], c[0]), c.children().eq(0).append(g.contents())), g[0].setAttribute("tabindex", "-1"), g.append(c);
          }function k() {
            if (r && !n(r) && r.hasAttribute("ng-click")) {
              a.expect(r, "aria-label");var c = b.element('<md-button class="md-secondary-container md-icon-button">');l(r, c[0]), r.setAttribute("tabindex", "-1"), r.classList.remove("md-secondary"), c.append(r), r = c[0];
            }r && (r.hasAttribute("ng-click") || h.ngClick && m(r)) && (g.addClass("md-with-secondary"), g.append(r));
          }function l(a, c) {
            var d = ["ng-if", "ng-click", "aria-label", "ng-disabled", "ui-sref", "href", "ng-href", "ng-attr-ui-sref"];b.forEach(d, function (b) {
              a.hasAttribute(b) && (c.setAttribute(b, a.getAttribute(b)), a.removeAttribute(b));
            });
          }function m(a) {
            return -1 != f.indexOf(a.nodeName.toLowerCase());
          }function n(a) {
            var b = a.nodeName.toUpperCase();return "MD-BUTTON" == b || "BUTTON" == b;
          }function o(a, g, h, i) {
            function j(a) {
              for (var b = a.attributes, c = 0; c < b.length; c++) {
                if ("ngClick" === h.$normalize(b[c].name)) return !0;
              }return !1;
            }function k() {
              var a = g.children();a.length && !a[0].hasAttribute("ng-click") && b.forEach(f, function (a) {
                b.forEach(n.querySelectorAll(a), function (a) {
                  m.push(a);
                });
              });
            }function l() {
              (1 == m.length || o) && (g.addClass("md-clickable"), o || i.attachRipple(a, b.element(g[0].querySelector(".md-no-style"))));
            }var m = [],
                n = g[0].firstElementChild,
                o = n && j(n);k(), l(), g.hasClass("md-proxy-focus") && m.length && b.forEach(m, function (c) {
              c = b.element(c), a.mouseActive = !1, c.on("mousedown", function () {
                a.mouseActive = !0, e(function () {
                  a.mouseActive = !1;
                }, 100);
              }).on("focus", function () {
                !1 === a.mouseActive && g.addClass("md-focused"), c.on("blur", function a() {
                  g.removeClass("md-focused"), c.off("blur", a);
                });
              });
            }), o || m.length || n && n.addEventListener("keypress", function (a) {
              if ("INPUT" != a.target.nodeName && "TEXTAREA" != a.target.nodeName) {
                (a.which || a.keyCode) == c.KEY_CODE.SPACE && n && (n.click(), a.preventDefault(), a.stopPropagation());
              }
            }), g.off("click"), g.off("keypress"), 1 == m.length && n && g.children().eq(0).on("click", function (a) {
              !d.getClosest(a.target, "BUTTON") && n.contains(a.target) && b.forEach(m, function (c) {
                a.target === c || c.contains(a.target) || b.element(c).triggerHandler("click");
              });
            });
          }var p,
              r = g[0].querySelector(".md-secondary");if (g[0].setAttribute("role", "listitem"), h.ngClick || h.ngHref || h.href || h.uiSref || h.ngAttrUiSref) j("button");else {
            for (var s, t = 0; s = f[t]; ++t) {
              if (g[0].querySelector(s)) {
                p = !0;break;
              }
            }p ? j("div") : g[0].querySelector("md-button:not(.md-secondary):not(.md-exclude)") || g.addClass("md-no-proxy");
          }return k(), i(), o;
        } };
    }function d(a, b, c) {
      function d(a, b) {
        var d = {};c.attach(a, b, d);
      }this.attachRipple = d;
    }b.module("material.components.list", ["material.core"]).controller("MdListController", d).directive("mdList", a).directive("mdListItem", c), a.$inject = ["$mdTheming"], c.$inject = ["$mdAria", "$mdConstant", "$mdUtil", "$timeout"], d.$inject = ["$scope", "$element", "$mdListInkRipple"];
  }(), function () {
    b.module("material.components.menu", ["material.core", "material.components.backdrop"]);
  }(), function () {
    function c(a, b) {
      function c(b, c, d) {
        a(c), c.find("md-icon").length && c.addClass("md-has-icon");
      }function d(a, c, d, e) {
        var f = this;f.isErrorGetter = d.mdIsError && b(d.mdIsError), f.delegateClick = function () {
          f.input.focus();
        }, f.element = c, f.setFocused = function (a) {
          c.toggleClass("md-input-focused", !!a);
        }, f.setHasValue = function (a) {
          c.toggleClass("md-input-has-value", !!a);
        }, f.setHasPlaceholder = function (a) {
          c.toggleClass("md-input-has-placeholder", !!a);
        }, f.setInvalid = function (a) {
          a ? e.addClass(c, "md-input-invalid") : e.removeClass(c, "md-input-invalid");
        }, a.$watch(function () {
          return f.label && f.input;
        }, function (a) {
          a && !f.label.attr("for") && f.label.attr("for", f.input.attr("id"));
        });
      }return d.$inject = ["$scope", "$element", "$attrs", "$animate"], { restrict: "E", link: c, controller: d };
    }function d() {
      return { restrict: "E", require: "^?mdInputContainer", link: function link(a, b, c, d) {
          !d || c.mdNoFloat || b.hasClass("md-container-ignore") || (d.label = b, a.$on("$destroy", function () {
            d.label = null;
          }));
        } };
    }function e(a, c, d) {
      function e(e, f, g, h) {
        function i(a) {
          return l.setHasValue(!n.$isEmpty(a)), a;
        }function j() {
          l.setHasValue(f.val().length > 0 || (f[0].validity || {}).badInput);
        }function k() {
          function d(a) {
            return p(), a;
          }function g() {
            if (k.style.height = k.offsetHeight + "px", f.addClass("md-no-flex"), isNaN(m)) {
              j.style.height = "auto", j.scrollTop = 0;var a = h();a && (j.style.height = a + "px");
            } else {
              j.setAttribute("rows", 1), o || (j.style.minHeight = "0", o = f.prop("clientHeight"), j.style.minHeight = null);var b = Math.min(m, Math.round(j.scrollHeight / o));j.setAttribute("rows", b), j.style.height = o * b + "px";
            }f.removeClass("md-no-flex"), k.style.height = "auto";
          }function h() {
            var a = j.scrollHeight - j.offsetHeight;return j.offsetHeight + (a > 0 ? a : 0);
          }function i(a) {
            j.scrollTop = 0;var b = j.scrollHeight - j.offsetHeight,
                c = j.offsetHeight + b;j.style.height = c + "px";
          }if (!b.isDefined(f.attr("md-no-autogrow"))) {
            var j = f[0],
                k = l.element[0],
                m = NaN,
                o = null;j.hasAttribute("rows") && (m = parseInt(j.getAttribute("rows")));var p = a.debounce(g, 1);if (n ? (n.$formatters.push(d), n.$viewChangeListeners.push(d)) : p(), f.on("keydown input", p), isNaN(m) && (f.attr("rows", "1"), f.on("scroll", i)), b.element(c).on("resize", p), e.$on("$destroy", function () {
              b.element(c).off("resize", p);
            }), b.isDefined(f.attr("md-detect-hidden"))) {
              var q = function () {
                var a = !1;return function () {
                  var b = 0 === j.offsetHeight;!1 === b && !0 === a && g(), a = b;
                };
              }();e.$watch(function () {
                return a.nextTick(q, !1), !0;
              });
            }
          }
        }var l = h[0],
            m = !!h[1],
            n = h[1] || a.fakeNgModel(),
            o = b.isDefined(g.readonly);if (l) {
          if (l.input) throw new Error("<md-input-container> can only have *one* <input>, <textarea> or <md-select> child element!");l.input = f;var p = b.element('<div class="md-errors-spacer">');f.after(p), l.label || d.expect(f, "aria-label", f.attr("placeholder")), f.addClass("md-input"), f.attr("id") || f.attr("id", "input_" + a.nextUid()), "textarea" === f[0].tagName.toLowerCase() && k(), m || j();var q = l.isErrorGetter || function () {
            return n.$invalid && (n.$touched || n.$$parentForm && n.$$parentForm.$submitted);
          };e.$watch(q, l.setInvalid), n.$parsers.push(i), n.$formatters.push(i), f.on("input", j), o || f.on("focus", function (a) {
            l.setFocused(!0);
          }).on("blur", function (a) {
            l.setFocused(!1), j();
          }), e.$on("$destroy", function () {
            l.setFocused(!1), l.setHasValue(!1), l.input = null;
          });
        }
      }return { restrict: "E", require: ["^?mdInputContainer", "?ngModel"], link: e };
    }function f(a, c) {
      function d(d, e, f, g) {
        function h(a) {
          return j.parent ? (j.text(String(e.val() || a || "").length + "/" + i), a) : a;
        }var i,
            j,
            k,
            l = g[0],
            m = g[1];c.nextTick(function () {
          k = b.element(m.element[0].querySelector(".md-errors-spacer")), j = b.element('<div class="md-char-counter">'), k.append(j), f.$set("ngTrim", "false"), l.$formatters.push(h), l.$viewChangeListeners.push(h), e.on("input keydown keyup", function () {
            h();
          }), d.$watch(f.mdMaxlength, function (c) {
            i = c, b.isNumber(c) && c > 0 ? (j.parent().length || a.enter(j, k), h()) : a.leave(j);
          }), l.$validators["md-maxlength"] = function (a, c) {
            return !b.isNumber(i) || 0 > i || (a || e.val() || c || "").length <= i;
          };
        });
      }return { restrict: "A", require: ["ngModel", "^mdInputContainer"], link: d };
    }function g(a) {
      function c(a, c, d, e) {
        if (e) {
          var f = e.element.find("label"),
              g = b.isDefined(e.element.attr("md-no-float"));if (f && f.length || g) return void e.setHasPlaceholder(!0);var h = d.placeholder;if (c.removeAttr("placeholder"), e.input && "MD-SELECT" != e.input[0].nodeName) {
            var i = '<label ng-click="delegateClick()">' + h + "</label>";e.element.addClass("md-icon-float"), e.element.prepend(i);
          }
        }
      }return { restrict: "A", require: "^^?mdInputContainer", priority: 200, link: c };
    }function h() {
      function a(a, c, d, e) {
        e && (c.toggleClass("md-input-messages-animation", !0), c.toggleClass("md-auto-hide", !0), ("false" == d.mdAutoHide || b(d)) && c.toggleClass("md-auto-hide", !1));
      }function b(a) {
        return s.some(function (b) {
          return a[b];
        });
      }return { restrict: "EA", link: a, require: "^^?mdInputContainer" };
    }function i(a) {
      function b(b) {
        if (a.getClosest(b, "md-input-container")) return b.toggleClass("md-input-message-animation", !0), {};
      }return { restrict: "EA", compile: b, priority: 100 };
    }function j(a, b) {
      return { addClass: function addClass(c, d, e) {
          var f = r(c);"md-input-invalid" == d && f.hasClass("md-auto-hide") && m(c, b, a).finally(e);
        } };
    }function k(a, b) {
      return { enter: function enter(c, d) {
          m(c, b, a).finally(d);
        }, leave: function leave(c, d) {
          n(c, b, a).finally(d);
        }, addClass: function addClass(c, d, e) {
          "ng-hide" == d ? n(c, b, a).finally(e) : e();
        }, removeClass: function removeClass(c, d, e) {
          "ng-hide" == d ? m(c, b, a).finally(e) : e();
        } };
    }function l(a) {
      return { enter: function enter(b, c) {
          return r(b).hasClass("md-auto-hide") ? void c() : o(b, a);
        }, leave: function leave(b, c) {
          return p(b, a);
        } };
    }function m(a, c, d) {
      var e,
          f = [],
          g = r(a);return b.forEach(g.children(), function (a) {
        e = o(b.element(a), c), f.push(e.start());
      }), d.all(f);
    }function n(a, c, d) {
      var e,
          f = [],
          g = r(a);return b.forEach(g.children(), function (a) {
        e = p(b.element(a), c), f.push(e.start());
      }), d.all(f);
    }function o(a, b) {
      return b(a, { event: "enter", structural: !0, from: { opacity: 0, "margin-top": -a[0].offsetHeight + "px" }, to: { opacity: 1, "margin-top": "0" }, duration: .3 });
    }function p(b, c) {
      var d = b[0].offsetHeight;return 0 == a.getComputedStyle(b[0]).opacity ? c(b, {}) : c(b, { event: "leave", structural: !0, from: { opacity: 1, "margin-top": 0 }, to: { opacity: 0, "margin-top": -d + "px" }, duration: .3 });
    }function q(a) {
      return a.controller("mdInputContainer").element;
    }function r(a) {
      var c = q(a);return b.element(c[0].querySelector("ng-messages,data-ng-messages,x-ng-messages,[ng-messages],[data-ng-messages],[x-ng-messages]"));
    }b.module("material.components.input", ["material.core"]).directive("mdInputContainer", c).directive("label", d).directive("input", e).directive("textarea", e).directive("mdMaxlength", f).directive("placeholder", g).directive("ngMessages", h).directive("ngMessage", i).directive("ngMessageExp", i).animation(".md-input-invalid", j).animation(".md-input-messages-animation", k).animation(".md-input-message-animation", l), c.$inject = ["$mdTheming", "$parse"], e.$inject = ["$mdUtil", "$window", "$mdAria"], f.$inject = ["$animate", "$mdUtil"], g.$inject = ["$log"];var s = ["ngIf", "ngShow", "ngHide", "ngSwitchWhen", "ngSwitchDefault"];i.$inject = ["$mdUtil"], j.$inject = ["$q", "$animateCss"], k.$inject = ["$q", "$animateCss"], l.$inject = ["$animateCss"];
  }(), function () {
    b.module("material.components.menuBar", ["material.core", "material.components.menu"]);
  }(), function () {
    function a(a, d, e) {
      function f(a) {
        return a.attr("aria-valuemin", 0), a.attr("aria-valuemax", 100), a.attr("role", "progressbar"), g;
      }function g(f, g, n) {
        function o() {
          n.$observe("value", function (a) {
            var b = h(a);g.attr("aria-valuenow", b), t() == l && r(b);
          }), n.$observe("mdMode", function (a) {
            switch (a) {case l:case m:
                w.removeClass("ng-hide"), u && w.removeClass(u), w.addClass(u = "md-mode-" + a);break;default:
                u && w.removeClass(u), w.addClass("ng-hide"), u = c;}
          });
        }function p() {
          v.css({ width: 100 * s() + "px", height: 100 * s() + "px" }), v.children().eq(0).css(x({ transform: d.supplant("translate(-50%, -50%) scale( {0} )", [s()]) }));
        }function q() {
          if (b.isUndefined(n.mdMode)) {
            var a = b.isDefined(n.value),
                c = a ? l : m;e.debug(d.supplant("Auto-adding the missing md-mode='{0}' to the ProgressCircular element", [c])), g.attr("md-mode", c), n.mdMode = c;
          }
        }function r(a) {
          if (t()) {
            y = y || b.element(g[0].querySelector(".md-left > .md-half-circle")), z = z || b.element(g[0].querySelector(".md-right > .md-half-circle")), A = A || b.element(g[0].querySelector(".md-gap"));var c = i({ borderBottomColor: 50 >= a ? "transparent !important" : "", transition: 50 >= a ? "" : "borderBottomColor 0.1s linear" }),
                e = i({ transition: 50 >= a ? "transform 0.1s linear" : "", transform: d.supplant("rotate({0}deg)", [50 >= a ? 135 : (a - 50) / 50 * 180 + 135]) }),
                f = i({ transition: a >= 50 ? "transform 0.1s linear" : "", transform: d.supplant("rotate({0}deg)", [a >= 50 ? 45 : a / 50 * 180 - 135]) });y.css(x(e)), z.css(x(f)), A.css(x(c));
          }
        }function s() {
          if (!n.mdDiameter) return k;var a = /([0-9]*)%/.exec(n.mdDiameter),
              b = Math.max(0, a && a[1] / 100 || parseFloat(n.mdDiameter));return b > 1 ? b / j : b;
        }function t() {
          var a = (n.mdMode || "").trim();if (a) switch (a) {case l:case m:
              break;default:
              a = c;}return a;
        }a(g);var u,
            v = g,
            w = b.element(g.children()[0]),
            x = d.dom.animator.toCss;g.attr("md-mode", t()), p(), q(), o();var y, z, A;
      }function h(a) {
        return Math.max(0, Math.min(a || 0, 100));
      }function i(a) {
        for (var b in a) {
          a.hasOwnProperty(b) && "" == a[b] && delete a[b];
        }return a;
      }var j = 100,
          k = .5,
          l = "determinate",
          m = "indeterminate";return { restrict: "E", scope: !0, template: '<div class="md-scale-wrapper"><div class="md-spinner-wrapper"><div class="md-inner"><div class="md-gap"></div><div class="md-left"><div class="md-half-circle"></div></div><div class="md-right"><div class="md-half-circle"></div></div></div></div></div>', compile: f };
    }b.module("material.components.progressCircular", ["material.core"]).directive("mdProgressCircular", a), a.$inject = ["$mdTheming", "$mdUtil", "$log"];
  }(), function () {
    function a(a, d, e) {
      function f(a, b, c) {
        return a.attr("aria-valuemin", 0), a.attr("aria-valuemax", 100), a.attr("role", "progressbar"), g;
      }function g(f, g, m) {
        function n() {
          m.$observe("value", function (a) {
            var b = h(a);g.attr("aria-valuenow", b), p() != l && q(u, b);
          }), m.$observe("mdBufferValue", function (a) {
            q(t, h(a));
          }), m.$observe("mdMode", function (a) {
            switch (a) {case l:case k:case i:case j:
                v.removeClass("ng-hide " + r), v.addClass(r = "md-mode-" + a);break;default:
                r && v.removeClass(r), v.addClass("ng-hide"), r = c;}
          });
        }function o() {
          if (b.isUndefined(m.mdMode)) {
            var a = b.isDefined(m.value),
                c = a ? i : j;e.debug(d.supplant("Auto-adding the missing md-mode='{0}' to the ProgressLinear element", [c])), g.attr("md-mode", c), m.mdMode = c;
          }
        }function p() {
          var a = (m.mdMode || "").trim();if (a) switch (a) {case i:case j:case k:case l:
              break;default:
              a = c;}return a;
        }function q(a, c) {
          if (p()) {
            var e = d.supplant("translateX({0}%) scale({1},1)", [(c - 100) / 2, c / 100]),
                f = s({ transform: e });b.element(a).css(f);
          }
        }a(g);var r,
            s = d.dom.animator.toCss,
            t = b.element(g[0].querySelector(".md-bar1")),
            u = b.element(g[0].querySelector(".md-bar2")),
            v = b.element(g[0].querySelector(".md-container"));g.attr("md-mode", p()), o(), n();
      }function h(a) {
        return Math.max(0, Math.min(a || 0, 100));
      }var i = "determinate",
          j = "indeterminate",
          k = "buffer",
          l = "query";return { restrict: "E", template: '<div class="md-container"><div class="md-dashed"></div><div class="md-bar md-bar1"></div><div class="md-bar md-bar2"></div></div>', compile: f };
    }b.module("material.components.progressLinear", ["material.core"]).directive("mdProgressLinear", a), a.$inject = ["$mdTheming", "$mdUtil", "$log"];
  }(), function () {
    function a(a, c, d, e) {
      function f(f, g, h, i) {
        function j() {
          g.hasClass("md-focused") || g.addClass("md-focused");
        }function k(d) {
          var e = d.which || d.keyCode;if (e == c.KEY_CODE.ENTER || d.currentTarget == d.target) switch (e) {case c.KEY_CODE.LEFT_ARROW:case c.KEY_CODE.UP_ARROW:
              d.preventDefault(), l.selectPrevious(), j();break;case c.KEY_CODE.RIGHT_ARROW:case c.KEY_CODE.DOWN_ARROW:
              d.preventDefault(), l.selectNext(), j();break;case c.KEY_CODE.ENTER:
              var f = b.element(a.getClosest(g[0], "form"));f.length > 0 && f.triggerHandler("submit");}
        }d(g);var l = i[0],
            m = i[1] || a.fakeNgModel();l.init(m), f.mouseActive = !1, g.attr({ role: "radiogroup", tabIndex: g.attr("tabindex") || "0" }).on("keydown", k).on("mousedown", function (a) {
          f.mouseActive = !0, e(function () {
            f.mouseActive = !1;
          }, 100);
        }).on("focus", function () {
          !1 === f.mouseActive && l.$element.addClass("md-focused");
        }).on("blur", function () {
          l.$element.removeClass("md-focused");
        });
      }function g(a) {
        this._radioButtonRenderFns = [], this.$element = a;
      }function h() {
        return { init: function init(a) {
            this._ngModelCtrl = a, this._ngModelCtrl.$render = b.bind(this, this.render);
          }, add: function add(a) {
            this._radioButtonRenderFns.push(a);
          }, remove: function remove(a) {
            var b = this._radioButtonRenderFns.indexOf(a);-1 !== b && this._radioButtonRenderFns.splice(b, 1);
          }, render: function render() {
            this._radioButtonRenderFns.forEach(function (a) {
              a();
            });
          }, setViewValue: function setViewValue(a, b) {
            this._ngModelCtrl.$setViewValue(a, b), this.render();
          }, getViewValue: function getViewValue() {
            return this._ngModelCtrl.$viewValue;
          }, selectNext: function selectNext() {
            return i(this.$element, 1);
          }, selectPrevious: function selectPrevious() {
            return i(this.$element, -1);
          }, setActiveDescendant: function setActiveDescendant(a) {
            this.$element.attr("aria-activedescendant", a);
          } };
      }function i(c, d) {
        var e = a.iterator(c[0].querySelectorAll("md-radio-button"), !0);if (e.count()) {
          var f = function f(a) {
            return !b.element(a).attr("disabled");
          },
              g = c[0].querySelector("md-radio-button.md-checked"),
              h = e[0 > d ? "previous" : "next"](g, f) || e.first();b.element(h).triggerHandler("click");
        }
      }return g.prototype = h(), { restrict: "E", controller: ["$element", g], require: ["mdRadioGroup", "?ngModel"], link: { pre: f } };
    }function c(a, b, c) {
      function d(d, f, g, h) {
        function i(a) {
          if (!h) throw "RadioGroupController not found.";h.add(k), g.$observe("value", k), f.on("click", j).on("$destroy", function () {
            h.remove(k);
          });
        }function j(a) {
          f[0].hasAttribute("disabled") || d.$apply(function () {
            h.setViewValue(g.value, a && a.type);
          });
        }function k() {
          function a(a) {
            "MD-RADIO-GROUP" != f.parent()[0].nodeName && f.parent()[a ? "addClass" : "removeClass"](e);
          }var b = h.getViewValue() == g.value;b !== m && (m = b, f.attr("aria-checked", b), b ? (a(!0), f.addClass(e), h.setActiveDescendant(f.attr("id"))) : (a(!1), f.removeClass(e)));
        }function l(c, d) {
          function e() {
            return g.id || "radio_" + b.nextUid();
          }d.ariaId = e(), c.attr({ id: d.ariaId, role: "radio", "aria-checked": "false" }), a.expectWithText(c, "aria-label");
        }var m;c(f), l(f, d), i();
      }var e = "md-checked";return { restrict: "E", require: "^mdRadioGroup", transclude: !0, template: '<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-off"></div><div class="md-on"></div></div><div ng-transclude class="md-label"></div>', link: d };
    }b.module("material.components.radioButton", ["material.core"]).directive("mdRadioGroup", a).directive("mdRadioButton", c), a.$inject = ["$mdUtil", "$mdConstant", "$mdTheming", "$timeout"], c.$inject = ["$mdAria", "$mdUtil", "$mdTheming"];
  }(), function () {
    function a(a, d, e, f, g, h) {
      function i(g, i) {
        var j = b.element("<md-select-value><span></span></md-select-value>");if (j.append('<span class="md-select-icon" aria-hidden="true"></span>'), j.addClass("md-select-value"), j[0].hasAttribute("id") || j.attr("id", "select_value_label_" + d.nextUid()), g.find("md-content").length || g.append(b.element("<md-content>").append(g.contents())), i.mdOnOpen && (g.find("md-content").prepend(b.element('<div> <md-progress-circular md-mode="{{progressMode}}" ng-hide="$$loadingAsyncDone"></md-progress-circular></div>')), g.find("md-option").attr("ng-show", "$$loadingAsyncDone")), i.name) {
          var k = b.element('<select class="md-visually-hidden">');k.attr({ name: "." + i.name, "ng-model": i.ngModel, "aria-hidden": "true", tabindex: "-1" });var l = g.find("md-option");b.forEach(l, function (a) {
            var c = b.element("<option>" + a.innerHTML + "</option>");a.hasAttribute("ng-value") ? c.attr("ng-value", a.getAttribute("ng-value")) : a.hasAttribute("value") && c.attr("value", a.getAttribute("value")), k.append(c);
          }), g.parent().append(k);
        }var m = b.isDefined(i.multiple) ? "multiple" : "",
            n = '<div class="md-select-menu-container" aria-hidden="true"><md-select-menu {0}>{1}</md-select-menu></div>';return n = d.supplant(n, [m, g.html()]), g.empty().append(j), g.append(n), i.tabindex = i.tabindex || "0", function (g, i, j, k) {
          function l() {
            var a = i.attr("aria-label") || i.attr("placeholder");!a && v && v.label && (a = v.label.text()), t = a, f.expect(i, "aria-label", a);
          }function m() {
            C && (E = E || C.find("md-select-menu").controller("mdSelectMenu"), w.setLabelText(E.selectedLabels()));
          }function n() {
            if (t) {
              var a = E.selectedLabels({ mode: "aria" });i.attr("aria-label", a.length ? t + ": " + a : t);
            }
          }function o() {
            v && v.setHasValue(E.selectedLabels().length > 0 || (i[0].validity || {}).badInput);
          }function p() {
            if (C = b.element(i[0].querySelector(".md-select-menu-container")), D = g, i.attr("md-container-class")) {
              var a = C[0].getAttribute("class") + " " + i.attr("md-container-class");C[0].setAttribute("class", a);
            }E = C.find("md-select-menu").controller("mdSelectMenu"), E.init(x, j.ngModel), i.on("$destroy", function () {
              C.remove();
            });
          }function q(a) {
            if (-1 != [32, 13, 38, 40].indexOf(a.keyCode)) a.preventDefault(), r(a);else if (a.keyCode <= 90 && a.keyCode >= 31) {
              a.preventDefault();var d = E.optNodeForKeyboardSearch(a);if (!d) return;var e = b.element(d).controller("mdOption");E.isMultiple || E.deselect(Object.keys(E.selected)[0]), E.select(e.hashKey, e.value), E.refreshViewValue();
            }
          }function r() {
            D.isOpen = !0, i.attr("aria-expanded", "true"), a.show({ scope: D, preserveScope: !0, skipCompile: !0, element: C, target: i[0], selectCtrl: w, preserveElement: !0, hasBackdrop: !0, loadingAsync: !!j.mdOnOpen && (g.$eval(j.mdOnOpen) || !0) }).finally(function () {
              D.isOpen = !1, i.focus(), i.attr("aria-expanded", "false"), x.$setTouched();
            });
          }var s,
              t,
              u = !0,
              v = k[0],
              w = k[1],
              x = k[2],
              y = k[3],
              z = i.find("md-select-value"),
              A = b.isDefined(j.readonly);if (v) {
            var B = v.isErrorGetter || function () {
              return x.$invalid && x.$touched;
            };if (v.input) throw new Error("<md-input-container> can only have *one* child <input>, <textarea> or <select> element!");v.input = i, v.label || f.expect(i, "aria-label", i.attr("placeholder")), g.$watch(B, v.setInvalid);
          }var C, D, E;if (p(), e(i), j.name && y) {
            var F = i.parent()[0].querySelector('select[name=".' + j.name + '"]');d.nextTick(function () {
              var a = b.element(F).controller("ngModel");a && y.$removeControl(a);
            });
          }y && d.nextTick(function () {
            y.$setPristine();
          });var G = x.$render;x.$render = function () {
            G(), m(), n(), o();
          }, j.$observe("placeholder", x.$render), w.setLabelText = function (a) {
            w.setIsPlaceholder(!a);var b = j.placeholder || (v && v.label ? v.label.text() : "");a = a || b || "", z.children().eq(0).html(a);
          }, w.setIsPlaceholder = function (a) {
            a ? (z.addClass("md-select-placeholder"), v && v.label && v.label.addClass("md-placeholder")) : (z.removeClass("md-select-placeholder"), v && v.label && v.label.removeClass("md-placeholder"));
          }, A || (i.on("focus", function (a) {
            v && v.element.hasClass("md-input-has-value") && v.setFocused(!0);
          }), d.nextTick(function () {
            i.on("blur", function () {
              u && (u = !1, x.$setUntouched()), D.isOpen || (v && v.setFocused(!1), o());
            });
          })), w.triggerClose = function () {
            h(j.mdOnClose)(g);
          }, g.$$postDigest(function () {
            l(), m(), n();
          }), g.$watch(E.selectedLabels, m);var H;j.$observe("ngMultiple", function (a) {
            H && H();var b = h(a);H = g.$watch(function () {
              return b(g);
            }, function (a, b) {
              (a !== c || b !== c) && (a ? i.attr("multiple", "multiple") : i.removeAttr("multiple"), i.attr("aria-multiselectable", a ? "true" : "false"), C && (E.setMultiple(a), G = x.$render, x.$render = function () {
                G(), m(), n(), o();
              }, x.$render()));
            });
          }), j.$observe("disabled", function (a) {
            b.isString(a) && (a = !0), (s === c || s !== a) && (s = a, a ? (i.attr({ tabindex: -1, "aria-disabled": "true" }), i.off("click", r), i.off("keydown", q)) : (i.attr({ tabindex: j.tabindex, "aria-disabled": "false" }), i.on("click", r), i.on("keydown", q)));
          }), j.disabled || j.ngDisabled || (i.attr({ tabindex: j.tabindex, "aria-disabled": "false" }), i.on("click", r), i.on("keydown", q));var I = { role: "listbox", "aria-expanded": "false", "aria-multiselectable": j.multiple === c || j.ngMultiple ? "false" : "true" };i[0].hasAttribute("id") || (I.id = "select_" + d.nextUid());var J = "select_container_" + d.nextUid();C.attr("id", J), I["aria-owns"] = J, i.attr(I), g.$on("$destroy", function () {
            a.destroy().finally(function () {
              v && (v.setFocused(!1), v.setHasValue(!1), v.input = null), x.$setTouched();
            });
          });
        };
      }return { restrict: "E", require: ["^?mdInputContainer", "mdSelect", "ngModel", "?^form"], compile: i, controller: function controller() {} };
    }function d(a, d, e) {
      function f(a, c, f, g) {
        function h(a) {
          (13 == a.keyCode || 32 == a.keyCode) && i(a);
        }function i(c) {
          var e = d.getClosest(c.target, "md-option"),
              f = e && b.element(e).data("$mdOptionController");if (e && f) {
            if (e.hasAttribute("disabled")) return c.stopImmediatePropagation(), !1;var g = j.hashGetter(f.value),
                h = b.isDefined(j.selected[g]);a.$apply(function () {
              j.isMultiple ? h ? j.deselect(g) : j.select(g, f.value) : h || (j.deselect(Object.keys(j.selected)[0]), j.select(g, f.value)), j.refreshViewValue();
            });
          }
        }var j = g[0];e(c), c.on("click", i), c.on("keypress", h);
      }function g(e, f, g) {
        function h() {
          var a = k.ngModel.$modelValue || k.ngModel.$viewValue || [];if (b.isArray(a)) {
            var c = Object.keys(k.selected),
                d = a.map(k.hashGetter);c.filter(function (a) {
              return -1 === d.indexOf(a);
            }).forEach(k.deselect), d.forEach(function (b, c) {
              k.select(b, a[c]);
            });
          }
        }function j() {
          var a = k.ngModel.$viewValue || k.ngModel.$modelValue;Object.keys(k.selected).forEach(k.deselect), k.select(k.hashGetter(a), a);
        }var k = this;k.isMultiple = b.isDefined(f.multiple), k.selected = {}, k.options = {}, e.$watchCollection(function () {
          return k.options;
        }, function () {
          k.ngModel.$render();
        });var l, m;k.setMultiple = function (a) {
          function c(a, c) {
            return b.isArray(a || c || []);
          }var d = k.ngModel;m = m || d.$isEmpty, k.isMultiple = a, l && l(), k.isMultiple ? (d.$validators["md-multiple"] = c, d.$render = h, e.$watchCollection(k.modelBinding, function (a) {
            c(a) && h(a), k.ngModel.$setPristine();
          }), d.$isEmpty = function (a) {
            return !a || 0 === a.length;
          }) : (delete d.$validators["md-multiple"], d.$render = j);
        };var n,
            o,
            p,
            q = "";k.optNodeForKeyboardSearch = function (a) {
          n && clearTimeout(n), n = setTimeout(function () {
            n = c, q = "", p = c, o = c;
          }, 300), q += String.fromCharCode(a.keyCode);var d = new RegExp("^" + q, "i");o || (o = g.find("md-option"), p = new Array(o.length), b.forEach(o, function (a, b) {
            p[b] = a.textContent.trim();
          }));for (var e = 0; e < p.length; ++e) {
            if (d.test(p[e])) return o[e];
          }
        }, k.init = function (c, d) {
          if (k.ngModel = c, k.modelBinding = d, c.$options && c.$options.trackBy) {
            var f = {},
                g = a(c.$options.trackBy);k.hashGetter = function (a, b) {
              return f.$value = a, g(b || e, f);
            };
          } else k.hashGetter = function (a) {
            return b.isObject(a) ? "object_" + (a.$$mdSelectId || (a.$$mdSelectId = ++i)) : a;
          };k.setMultiple(k.isMultiple);
        }, k.selectedLabels = function (a) {
          a = a || {};var b = a.mode || "html",
              c = d.nodesToArray(g[0].querySelectorAll("md-option[selected]"));if (c.length) {
            var e;return "html" == b ? e = function e(a) {
              return a.innerHTML;
            } : "aria" == b && (e = function e(a) {
              return a.hasAttribute("aria-label") ? a.getAttribute("aria-label") : a.textContent;
            }), c.map(e).join(", ");
          }return "";
        }, k.select = function (a, b) {
          var c = k.options[a];c && c.setSelected(!0), k.selected[a] = b;
        }, k.deselect = function (a) {
          var b = k.options[a];b && b.setSelected(!1), delete k.selected[a];
        }, k.addOption = function (a, c) {
          if (b.isDefined(k.options[a])) throw new Error('Duplicate md-option values are not allowed in a select. Duplicate value "' + c.value + '" found.');k.options[a] = c, b.isDefined(k.selected[a]) && (k.select(a, c.value), k.refreshViewValue());
        }, k.removeOption = function (a) {
          delete k.options[a];
        }, k.refreshViewValue = function () {
          var a,
              c = [];for (var d in k.selected) {
            (a = k.options[d]) ? c.push(a.value) : c.push(k.selected[d]);
          }var e = k.ngModel.$options && k.ngModel.$options.trackBy,
              f = k.isMultiple ? c : c[0],
              g = k.ngModel.$modelValue;(e ? b.equals(g, f) : g == f) || (k.ngModel.$setViewValue(f), k.ngModel.$render());
        };
      }return g.$inject = ["$scope", "$attrs", "$element"], { restrict: "E", require: ["mdSelectMenu"], scope: !0, controller: g, link: { pre: f } };
    }function e(a, c) {
      function d(a, c) {
        return a.append(b.element('<div class="md-text">').append(a.contents())), a.attr("tabindex", c.tabindex || "0"), e;
      }function e(d, e, f, g) {
        function h(a, b, c) {
          if (!k.hashGetter) return void (c || d.$$postDigest(function () {
            h(a, b, !0);
          }));var e = k.hashGetter(b, d),
              f = k.hashGetter(a, d);j.hashKey = f, j.value = a, k.removeOption(e, j), k.addOption(f, j);
        }function i() {
          var a = { role: "option", "aria-selected": "false" };e[0].hasAttribute("id") || (a.id = "select_option_" + c.nextUid()), e.attr(a);
        }var j = g[0],
            k = g[1];b.isDefined(f.ngValue) ? d.$watch(f.ngValue, h) : b.isDefined(f.value) ? h(f.value) : d.$watch(function () {
          return e.text();
        }, h), f.$observe("disabled", function (a) {
          a ? e.attr("tabindex", "-1") : e.attr("tabindex", "0");
        }), d.$$postDigest(function () {
          f.$observe("selected", function (a) {
            b.isDefined(a) && ("string" == typeof a && (a = !0), a ? (k.isMultiple || k.deselect(Object.keys(k.selected)[0]), k.select(j.hashKey, j.value)) : k.deselect(j.hashKey), k.refreshViewValue());
          });
        }), a.attach(d, e), i(), d.$on("$destroy", function () {
          k.removeOption(j.hashKey, j);
        });
      }function f(a) {
        this.selected = !1, this.setSelected = function (b) {
          b && !this.selected ? a.attr({ selected: "selected", "aria-selected": "true" }) : !b && this.selected && (a.removeAttr("selected"), a.attr("aria-selected", "false")), this.selected = b;
        };
      }return f.$inject = ["$element"], { restrict: "E", require: ["mdOption", "^^mdSelectMenu"], controller: f, compile: d };
    }function f() {
      function a(a, c) {
        var d = a.find("label");d.length || (d = b.element("<label>"), a.prepend(d)), d.addClass("md-container-ignore"), c.label && d.text(c.label);
      }return { restrict: "E", compile: a };
    }function g(a) {
      function d(a, d, i, j, k, l, m, n, o) {
        function p(a, b, c) {
          function d() {
            return m(b, { addClass: "md-leave" }).start();
          }function e() {
            b.removeClass("md-active"), b.attr("aria-hidden", "true"), b[0].style.display = "none", r(c), !c.$destroy && c.restoreFocus && c.target.focus();
          }return c = c || {}, c.cleanupInteraction(), c.cleanupResizing(), c.hideBackdrop(), !0 === c.$destroy ? e() : d().then(e);
        }function q(e, f, g) {
          function h(a, b, c) {
            return c.parent.append(b), k(function (a, c) {
              try {
                m(b, { removeClass: "md-leave", duration: 0 }).start().then(p).then(a);
              } catch (a) {
                c(a);
              }
            });
          }function p() {
            return k(function (a) {
              if (g.isRemoved) return k.reject(!1);var b = s(e, f, g);b.container.element.css(u.toCss(b.container.styles)), b.dropDown.element.css(u.toCss(b.dropDown.styles)), l(function () {
                f.addClass("md-active"), b.dropDown.element.css(u.toCss({ transform: "" })), r(g.focusedNode), a();
              });
            });
          }function q(a, b, c) {
            return c.disableParentScroll && !i.getClosest(c.target, "MD-DIALOG") ? c.restoreScroll = i.disableScrollAround(c.element, c.parent) : c.disableParentScroll = !1, c.hasBackdrop && (c.backdrop = i.createBackdrop(a, "md-select-backdrop md-click-catcher"), n.enter(c.backdrop, o[0].body, null, { duration: 0 })), function () {
              c.backdrop && c.backdrop.remove(), c.disableParentScroll && c.restoreScroll(), delete c.restoreScroll;
            };
          }function r(a) {
            a && !a.hasAttribute("disabled") && a.focus();
          }function v(a, c) {
            var d = f.find("md-select-menu");if (!c.target) throw new Error(i.supplant(t, [c.target]));b.extend(c, { isRemoved: !1, target: b.element(c.target), parent: b.element(c.parent), selectEl: d, contentEl: f.find("md-content"), optionNodes: d[0].getElementsByTagName("md-option") });
          }function w() {
            var a = function (a, b, c) {
              return function () {
                if (!c.isRemoved) {
                  var d = s(a, b, c),
                      e = d.container,
                      f = d.dropDown;e.element.css(u.toCss(e.styles)), f.element.css(u.toCss(f.styles));
                }
              };
            }(e, f, g),
                c = b.element(j);return c.on("resize", a), c.on("orientationchange", a), function () {
              c.off("resize", a), c.off("orientationchange", a);
            };
          }function x() {
            g.loadingAsync && !g.isRemoved && (e.$$loadingAsyncDone = !1, e.progressMode = "indeterminate", k.when(g.loadingAsync).then(function () {
              e.$$loadingAsyncDone = !0, e.progressMode = "", delete g.loadingAsync;
            }).then(function () {
              l(p);
            }));
          }function y() {
            function b(b) {
              b.preventDefault(), b.stopPropagation(), g.restoreFocus = !1, i.nextTick(a.hide, !0);
            }function e(b) {
              var c = d.KEY_CODE;switch (b.preventDefault(), b.stopPropagation(), b.keyCode) {case c.UP_ARROW:
                  return k();case c.DOWN_ARROW:
                  return j();case c.SPACE:case c.ENTER:
                  var e = i.getClosest(b.target, "md-option");e && (m.triggerHandler({ type: "click", target: e }), b.preventDefault()), l(b);break;case c.TAB:case c.ESCAPE:
                  b.stopPropagation(), b.preventDefault(), g.restoreFocus = !0, i.nextTick(a.hide, !0);break;default:
                  if (b.keyCode >= 31 && b.keyCode <= 90) {
                    var f = m.controller("mdSelectMenu").optNodeForKeyboardSearch(b);g.focusedNode = f || g.focusedNode, f && f.focus();
                  }}
            }function h(a) {
              var b,
                  d = i.nodesToArray(g.optionNodes),
                  e = d.indexOf(g.focusedNode);do {
                -1 === e ? e = 0 : "next" === a && e < d.length - 1 ? e++ : "prev" === a && e > 0 && e--, b = d[e], b.hasAttribute("disabled") && (b = c);
              } while (!b && e < d.length - 1 && e > 0);b && b.focus(), g.focusedNode = b;
            }function j() {
              h("next");
            }function k() {
              h("prev");
            }function l(b) {
              function c() {
                var a = !1;if (b && b.currentTarget.children.length > 0) {
                  var c = b.currentTarget.children[0];if (c.scrollHeight > c.clientHeight && c.children.length > 0) {
                    b.pageX - b.currentTarget.getBoundingClientRect().left > c.querySelector("md-option").offsetWidth && (a = !0);
                  }
                }return a;
              }if (!(b && "click" == b.type && b.currentTarget != m[0] || c())) {
                var d = i.getClosest(b.target, "md-option");d && d.hasAttribute && !d.hasAttribute("disabled") && (b.preventDefault(), b.stopPropagation(), n.isMultiple || (g.restoreFocus = !0, i.nextTick(function () {
                  a.hide(n.ngModel.$viewValue);
                }, !0)));
              }
            }if (!g.isRemoved) {
              var m = g.selectEl,
                  n = m.controller("mdSelectMenu") || {};return f.addClass("md-clickable"), g.backdrop && g.backdrop.on("click", b), m.on("keydown", e), m.on("click", l), function () {
                g.backdrop && g.backdrop.off("click", b), m.off("keydown", e), m.off("click", l), f.removeClass("md-clickable"), g.isRemoved = !0;
              };
            }
          }return x(), v(e, g), g.hideBackdrop = q(e, f, g), h(e, f, g).then(function (a) {
            return f.attr("aria-hidden", "false"), g.alreadyOpen = !0, g.cleanupInteraction = y(), g.cleanupResizing = w(), a;
          }, g.hideBackdrop);
        }function r(a) {
          var b = a.selectCtrl;if (b) {
            var c = a.selectEl.controller("mdSelectMenu");b.setLabelText(c.selectedLabels()), b.triggerClose();
          }
        }function s(a, c, d) {
          var k,
              l = c[0],
              m = d.target[0].children[0],
              n = o[0].body,
              p = d.selectEl[0],
              q = d.contentEl[0],
              r = n.getBoundingClientRect(),
              s = m.getBoundingClientRect(),
              t = !1,
              u = { left: r.left + h, top: h, bottom: r.height - h, right: r.width - h - (i.floatingScrollbars() ? 16 : 0) },
              v = { top: s.top - u.top, left: s.left - u.left, right: u.right - (s.left + s.width), bottom: u.bottom - (s.top + s.height) },
              w = r.width - 2 * h,
              x = q.scrollHeight > q.offsetHeight,
              y = p.querySelector("md-option[selected]"),
              z = p.getElementsByTagName("md-option"),
              A = p.getElementsByTagName("md-optgroup");k = e(d.loadingAsync) ? q.firstElementChild || q : y || (A.length ? A[0] : z.length ? z[0] : q.firstElementChild || q), q.offsetWidth > w ? q.style["max-width"] = w + "px" : q.style.maxWidth = null, t && (q.style["min-width"] = s.width + "px"), x && p.classList.add("md-overflow");var C = k;"MD-OPTGROUP" === (C.tagName || "").toUpperCase() && (C = z[0] || q.firstElementChild || q, k = C), d.focusedNode = C, l.style.display = "block";var D = p.getBoundingClientRect(),
              E = g(k);if (k) {
            var F = j.getComputedStyle(k);E.paddingLeft = parseInt(F.paddingLeft, 10) || 0, E.paddingRight = parseInt(F.paddingRight, 10) || 0;
          }if (x) {
            var G = q.offsetHeight / 2;q.scrollTop = E.top + E.height / 2 - G, v.top < G ? q.scrollTop = Math.min(E.top, q.scrollTop + G - v.top) : v.bottom < G && (q.scrollTop = Math.max(E.top + E.height - D.height, q.scrollTop - G + v.bottom));
          }var H, I, J, K;t ? (H = s.left, I = s.top + s.height, J = "50% 0", I + D.height > u.bottom && (I = s.top - D.height, J = "50% 100%")) : (H = s.left + E.left - E.paddingLeft + 2, I = Math.floor(s.top + s.height / 2 - E.height / 2 - E.top + q.scrollTop) + 4, J = E.left + s.width / 2 + "px " + (E.top + E.height / 2 - q.scrollTop) + "px 0px", K = Math.min(s.width + E.paddingLeft + E.paddingRight, w));var L = l.getBoundingClientRect(),
              M = Math.round(100 * Math.min(s.width / D.width, 1)) / 100,
              N = Math.round(100 * Math.min(s.height / D.height, 1)) / 100;return { container: { element: b.element(l), styles: { left: Math.floor(f(u.left, H, u.right - L.width)), top: Math.floor(f(u.top, I, u.bottom - L.height)), "min-width": K } }, dropDown: { element: b.element(p), styles: { transformOrigin: J, transform: d.alreadyOpen ? "" : i.supplant("scale({0},{1})", [M, N]) } } };
        }var t = "$mdSelect.show() expected a target element in options.target but got '{0}'!",
            u = i.dom.animator;return { parent: "body", themable: !0, onShow: q, onRemove: p, hasBackdrop: !0, disableParentScroll: !0 };
      }function e(a) {
        return a && b.isFunction(a.then);
      }function f(a, b, c) {
        return Math.max(a, Math.min(b, c));
      }function g(a) {
        return a ? { left: a.offsetLeft, top: a.offsetTop, width: a.offsetWidth, height: a.offsetHeight } : { left: 0, top: 0, width: 0, height: 0 };
      }return d.$inject = ["$mdSelect", "$mdConstant", "$mdUtil", "$window", "$q", "$$rAF", "$animateCss", "$animate", "$document"], a("$mdSelect").setDefaults({ methods: ["target"], options: d });
    }var h = 8,
        i = 0;b.module("material.components.select", ["material.core", "material.components.backdrop"]).directive("mdSelect", a).directive("mdSelectMenu", d).directive("mdOption", e).directive("mdOptgroup", f).provider("$mdSelect", g), a.$inject = ["$mdSelect", "$mdUtil", "$mdTheming", "$mdAria", "$compile", "$parse"], d.$inject = ["$parse", "$mdUtil", "$mdTheming"], e.$inject = ["$mdButtonInkRipple", "$mdUtil"], g.$inject = ["$$interimElementProvider"];
  }(), function () {
    function a(a, b) {
      return ["$mdUtil", function (c) {
        return { restrict: "A", multiElement: !0, link: function link(d, e, f) {
            var g = d.$on("$md-resize-enable", function () {
              g(), d.$watch(f[a], function (a) {
                !!a === b && (c.nextTick(function () {
                  d.$broadcast("$md-resize");
                }), c.dom.animator.waitTransitionEnd(e).then(function () {
                  d.$broadcast("$md-resize");
                }));
              });
            });
          } };
      }];
    }b.module("material.components.showHide", ["material.core"]).directive("ngShow", a("ngShow", !0)).directive("ngHide", a("ngHide", !1));
  }(), function () {
    function a(a, c) {
      return function (d) {
        function e() {
          return a.when(d).then(function (a) {
            return h = a, a;
          });
        }var g = "SideNav '" + d + "' is not available!",
            h = a.get(d);return h || a.notFoundError(d), { isOpen: function isOpen() {
            return h && h.isOpen();
          }, isLockedOpen: function isLockedOpen() {
            return h && h.isLockedOpen();
          }, toggle: function toggle() {
            return h ? h.toggle() : c.reject(g);
          }, open: function open() {
            return h ? h.open() : c.reject(g);
          }, close: function close() {
            return h ? h.close() : c.reject(g);
          }, then: function then(a) {
            return (h ? c.when(h) : e()).then(a || b.noop);
          } };
      };
    }function d() {
      return { restrict: "A", require: "^mdSidenav", link: function link(a, b, c, d) {} };
    }function e(a, d, e, f, g, h, i, j, k, l) {
      function m(h, m, n, o) {
        function p(a, b) {
          h.isLockedOpen = a, a === b ? m.toggleClass("md-locked-open", !!a) : g[a ? "addClass" : "removeClass"](m, "md-locked-open"), A.toggleClass("md-locked-open", !!a);
        }function q(a) {
          var b = d.findFocusTarget(m) || d.findFocusTarget(m, "[md-sidenav-focus]") || m,
              c = m.parent();return c[a ? "on" : "off"]("keydown", t), A[a ? "on" : "off"]("click", u), a && (w = l[0].activeElement), r(a), x = k.all([a ? g.enter(A, c) : g.leave(A), g[a ? "removeClass" : "addClass"](m, "md-closed")]).then(function () {
            h.isOpen && b && b.focus();
          });
        }function r(a) {
          var d = m.parent();a && !v ? (v = d.css("overflow"), d.css("overflow", "hidden")) : b.isDefined(v) && (d.css("overflow", v), v = c);
        }function s(a) {
          return h.isOpen == a ? k.when(!0) : k(function (b) {
            h.isOpen = a, d.nextTick(function () {
              x.then(function (a) {
                h.isOpen || (w && w.focus(), w = null), b(a);
              });
            });
          });
        }function t(a) {
          return a.keyCode === e.KEY_CODE.ESCAPE ? u(a) : k.when(!0);
        }function u(a) {
          return a.preventDefault(), o.close();
        }var v,
            w = null,
            x = k.when(!0),
            y = i(n.mdIsLockedOpen),
            z = function z() {
          return y(h.$parent, { $media: function $media(b) {
              return j.warn("$media is deprecated for is-locked-open. Use $mdMedia instead."), a(b);
            }, $mdMedia: a });
        },
            A = d.createBackdrop(h, "md-sidenav-backdrop md-opaque ng-enter");f.inherit(A, m), m.on("$destroy", function () {
          A.remove(), o.destroy();
        }), h.$on("$destroy", function () {
          A.remove();
        }), h.$watch(z, p), h.$watch("isOpen", q), o.$toggleOpen = s;
      }return { restrict: "E", scope: { isOpen: "=?mdIsOpen" }, controller: "$mdSidenavController", compile: function compile(a) {
          return a.addClass("md-closed"), a.attr("tabIndex", "-1"), m;
        } };
    }function f(a, b, c, d, e) {
      var f = this;f.isOpen = function () {
        return !!a.isOpen;
      }, f.isLockedOpen = function () {
        return !!a.isLockedOpen;
      }, f.open = function () {
        return f.$toggleOpen(!0);
      }, f.close = function () {
        return f.$toggleOpen(!1);
      }, f.toggle = function () {
        return f.$toggleOpen(!a.isOpen);
      }, f.$toggleOpen = function (b) {
        return e.when(a.isOpen = b);
      }, f.destroy = d.register(f, c.mdComponentId);
    }b.module("material.components.sidenav", ["material.core", "material.components.backdrop"]).factory("$mdSidenav", a).directive("mdSidenav", e).directive("mdSidenavFocus", d).controller("$mdSidenavController", f), a.$inject = ["$mdComponentRegistry", "$q"], e.$inject = ["$mdMedia", "$mdUtil", "$mdConstant", "$mdTheming", "$animate", "$compile", "$parse", "$log", "$q", "$document"], f.$inject = ["$scope", "$element", "$attrs", "$mdComponentRegistry", "$q"];
  }(), function () {
    function a(a, c, d, e, f, g, h, i, j) {
      function k(a, b) {
        return a.attr({ tabIndex: 0, role: "slider" }), d.expect(a, "aria-label"), l;
      }function l(d, k, l, m) {
        function n() {
          t(), x(), s();
        }function o(a) {
          W = parseFloat(a), k.attr("aria-valuemin", a), n();
        }function p(a) {
          X = parseFloat(a), k.attr("aria-valuemax", a), n();
        }function q(a) {
          Y = parseFloat(a), s();
        }function r(a) {
          k.attr("aria-disabled", !!a);
        }function s() {
          if (b.isDefined(l.mdDiscrete) && !b.isUndefined(Y)) {
            if (0 >= Y) {
              var a = "Slider step value must be greater than zero when in discrete mode";throw j.error(a), new Error(a);
            }var d = Math.floor((X - W) / Y);if (!Z) {
              Z = b.element('<canvas style="position:absolute;">'), S.append(Z);var e = c.getComputedStyle(S[0]);$ = Z[0].getContext("2d"), $.fillStyle = e.backgroundColor || "black";
            }var f = u();Z[0].width = f.width, Z[0].height = f.height;for (var g, h = 0; d >= h; h++) {
              g = Math.floor(f.width * (h / d)), $.fillRect(g - 1, 0, 2, f.height);
            }
          }
        }function t() {
          _ = Q[0].getBoundingClientRect();
        }function u() {
          return T(), _;
        }function v(a) {
          if (!k[0].hasAttribute("disabled")) {
            var b;a.keyCode === f.KEY_CODE.LEFT_ARROW ? b = -Y : a.keyCode === f.KEY_CODE.RIGHT_ARROW && (b = Y), b && ((a.metaKey || a.ctrlKey || a.altKey) && (b *= 4), a.preventDefault(), a.stopPropagation(), d.$evalAsync(function () {
              w(m.$viewValue + b);
            }));
          }
        }function w(a) {
          m.$setViewValue(y(z(a)));
        }function x() {
          isNaN(m.$viewValue) && (m.$viewValue = m.$modelValue);var a = (m.$viewValue - W) / (X - W);d.modelValue = m.$viewValue, k.attr("aria-valuenow", m.$viewValue), A(a), O.text(m.$viewValue);
        }function y(a) {
          return b.isNumber(a) ? Math.max(W, Math.min(X, a)) : void 0;
        }function z(a) {
          if (b.isNumber(a)) {
            var c = Math.round((a - W) / Y) * Y + W;return Math.round(1e3 * c) / 1e3;
          }
        }function A(a) {
          var b = 100 * a + "%";R.css("width", b), P.css("left", b), k.toggleClass("md-min", 0 === a), k.toggleClass("md-max", 1 === a);
        }function B(a) {
          if (!M()) {
            k.addClass("md-active"), k[0].focus(), t();var b = K(J(a.pointer.x)),
                c = y(z(b));d.$apply(function () {
              w(c), A(L(c));
            });
          }
        }function C(a) {
          if (!M()) {
            k.removeClass("md-dragging md-active");var b = K(J(a.pointer.x)),
                c = y(z(b));d.$apply(function () {
              w(c), x();
            });
          }
        }function D(a) {
          M() || (aa = !0, a.stopPropagation(), k.addClass("md-dragging"), G(a));
        }function E(a) {
          aa && (a.stopPropagation(), G(a));
        }function F(a) {
          aa && (a.stopPropagation(), aa = !1);
        }function G(a) {
          ba ? I(a.pointer.x) : H(a.pointer.x);
        }function H(a) {
          d.$evalAsync(function () {
            w(K(J(a)));
          });
        }function I(a) {
          var b = K(J(a)),
              c = y(z(b));A(J(a)), O.text(c);
        }function J(a) {
          return Math.max(0, Math.min(1, (a - _.left) / _.width));
        }function K(a) {
          return W + a * (X - W);
        }function L(a) {
          return (a - W) / (X - W);
        }g(k), m = m || { $setViewValue: function $setViewValue(a) {
            this.$viewValue = a, this.$viewChangeListeners.forEach(function (a) {
              a();
            });
          }, $parsers: [], $formatters: [], $viewChangeListeners: [] };var M = b.noop;null != l.disabled ? M = function M() {
          return !0;
        } : l.ngDisabled && (M = b.bind(null, i(l.ngDisabled), d.$parent));var N = b.element(k[0].querySelector(".md-thumb")),
            O = b.element(k[0].querySelector(".md-thumb-text")),
            P = N.parent(),
            Q = b.element(k[0].querySelector(".md-track-container")),
            R = b.element(k[0].querySelector(".md-track-fill")),
            S = b.element(k[0].querySelector(".md-track-ticks")),
            T = e.throttle(t, 5e3);b.isDefined(l.min) ? l.$observe("min", o) : o(0), b.isDefined(l.max) ? l.$observe("max", p) : p(100), b.isDefined(l.step) ? l.$observe("step", q) : q(1);var U = b.noop;l.ngDisabled && (U = d.$parent.$watch(l.ngDisabled, r)), h.register(k, "drag"), k.on("keydown", v).on("$md.pressdown", B).on("$md.pressup", C).on("$md.dragstart", D).on("$md.drag", E).on("$md.dragend", F), setTimeout(n, 0);var V = a.throttle(n);b.element(c).on("resize", V), d.$on("$destroy", function () {
          b.element(c).off("resize", V), U();
        }), m.$render = x, m.$viewChangeListeners.push(x), m.$formatters.push(y), m.$formatters.push(z);var W,
            X,
            Y,
            Z,
            $,
            _ = {};t();var aa = !1,
            ba = b.isDefined(l.mdDiscrete);
      }return { scope: {}, require: "?ngModel", template: '<div class="md-slider-wrapper"><div class="md-track-container"><div class="md-track"></div><div class="md-track md-track-fill"></div><div class="md-track-ticks"></div></div><div class="md-thumb-container"><div class="md-thumb"></div><div class="md-focus-thumb"></div><div class="md-focus-ring"></div><div class="md-sign"><span class="md-thumb-text"></span></div><div class="md-disabled-thumb"></div></div></div>', compile: k };
    }b.module("material.components.slider", ["material.core"]).directive("mdSlider", a), a.$inject = ["$$rAF", "$window", "$mdAria", "$mdUtil", "$mdConstant", "$mdTheming", "$mdGesture", "$parse", "$log"];
  }(), function () {
    function a(a, d, e, f) {
      function g(a) {
        function b(a, b) {
          b.addClass("md-sticky-clone");var c = { element: a, clone: b };return p.items.push(c), f.nextTick(function () {
            n.prepend(c.clone);
          }), o(), function () {
            p.items.forEach(function (b, c) {
              b.element[0] === a[0] && (p.items.splice(c, 1), b.clone.remove());
            }), o();
          };
        }function g() {
          p.items.forEach(h), p.items = p.items.sort(function (a, b) {
            return a.top < b.top ? -1 : 1;
          });for (var a, b = n.prop("scrollTop"), c = p.items.length - 1; c >= 0; c--) {
            if (b > p.items[c].top) {
              a = p.items[c];break;
            }
          }k(a);
        }function h(a) {
          var b = a.element[0];for (a.top = 0, a.left = 0; b && b !== n[0];) {
            a.top += b.offsetTop, a.left += b.offsetLeft, b = b.offsetParent;
          }a.height = a.element.prop("offsetHeight"), a.clone.css("margin-left", a.left + "px"), f.floatingScrollbars() && a.clone.css("margin-right", "0");
        }function j() {
          var a = n.prop("scrollTop"),
              b = a > (j.prevScrollTop || 0);if (j.prevScrollTop = a, 0 === a) return void k(null);if (b) {
            if (p.next && p.next.top <= a) return void k(p.next);if (p.current && p.next && p.next.top - a <= p.next.height) return void m(p.current, a + (p.next.top - p.next.height - a));
          }if (!b) {
            if (p.current && p.prev && a < p.current.top) return void k(p.prev);if (p.next && p.current && a >= p.next.top - p.current.height) return void m(p.current, a + (p.next.top - a - p.current.height));
          }p.current && m(p.current, a);
        }function k(a) {
          if (p.current !== a) {
            p.current && (m(p.current, null), l(p.current, null)), a && l(a, "active"), p.current = a;var b = p.items.indexOf(a);p.next = p.items[b + 1], p.prev = p.items[b - 1], l(p.next, "next"), l(p.prev, "prev");
          }
        }function l(a, b) {
          a && a.state !== b && (a.state && (a.clone.attr("sticky-prev-state", a.state), a.element.attr("sticky-prev-state", a.state)), a.clone.attr("sticky-state", b), a.element.attr("sticky-state", b), a.state = b);
        }function m(a, b) {
          a && (null === b || b === c ? a.translateY && (a.translateY = null, a.clone.css(d.CSS.TRANSFORM, "")) : (a.translateY = b, a.clone.css(d.CSS.TRANSFORM, "translate3d(" + a.left + "px," + b + "px,0)")));
        }var n = a.$element,
            o = e.throttle(g);i(n), n.on("$scrollstart", o), n.on("$scroll", j);var p;return p = { prev: null, current: null, next: null, items: [], add: b, refreshElements: g };
      }function h(c) {
        var d,
            e = b.element("<div>");a[0].body.appendChild(e[0]);for (var f = ["sticky", "-webkit-sticky"], g = 0; g < f.length; ++g) {
          if (e.css({ position: f[g], top: 0, "z-index": 2 }), e.css("position") == f[g]) {
            d = f[g];break;
          }
        }return e.remove(), d;
      }function i(a) {
        function b() {
          +f.now() - d > g ? (c = !1, a.triggerHandler("$scrollend")) : (a.triggerHandler("$scroll"), e.throttle(b));
        }var c,
            d,
            g = 200;a.on("scroll touchmove", function () {
          c || (c = !0, e.throttle(b), a.triggerHandler("$scrollstart")), a.triggerHandler("$scroll"), d = +f.now();
        });
      }var j = h();return function (a, b, c) {
        var d = b.controller("mdContent");if (d) if (j) b.css({ position: j, top: 0, "z-index": 2 });else {
          var e = d.$element.data("$$sticky");e || (e = g(d), d.$element.data("$$sticky", e));var f = e.add(b, c || b.clone());a.$on("$destroy", f);
        }
      };
    }b.module("material.components.sticky", ["material.core", "material.components.content"]).factory("$mdSticky", a), a.$inject = ["$document", "$mdConstant", "$$rAF", "$mdUtil"];
  }(), function () {
    function a(a, c, d, e) {
      return { restrict: "E", replace: !0, transclude: !0, template: '<div class="md-subheader">  <div class="md-subheader-inner">    <span class="md-subheader-content"></span>  </div></div>', link: function link(f, g, h, i, j) {
          function k(a) {
            return b.element(a[0].querySelector(".md-subheader-content"));
          }d(g);var l = g[0].outerHTML;j(f, function (a) {
            k(g).append(a);
          }), g.hasClass("md-no-sticky") || j(f, function (b) {
            var d = '<div class="md-subheader-wrapper">' + l + "</div>",
                h = c(d)(f);a(f, g, h), e.nextTick(function () {
              k(h).append(b);
            });
          });
        } };
    }b.module("material.components.subheader", ["material.core", "material.components.sticky"]).directive("mdSubheader", a), a.$inject = ["$mdSticky", "$compile", "$mdTheming", "$mdUtil"];
  }(), function () {
    function a(a) {
      function b(a) {
        function b(b, e, f) {
          var g = a(f[c]);e.on(d, function (a) {
            b.$apply(function () {
              g(b, { $event: a });
            });
          });
        }return { restrict: "A", link: b };
      }var c = "md" + a,
          d = "$md." + a.toLowerCase();return b.$inject = ["$parse"], b;
    }b.module("material.components.swipe", ["material.core"]).directive("mdSwipeLeft", a("SwipeLeft")).directive("mdSwipeRight", a("SwipeRight")).directive("mdSwipeUp", a("SwipeUp")).directive("mdSwipeDown", a("SwipeDown"));
  }(), function () {
    function a(a, c, d, e, f, g) {
      function h(a, h) {
        var j = i.compile(a, h);return a.addClass("md-dragging"), function (a, h, i, k) {
          function l(b) {
            p && p(a) || (b.stopPropagation(), h.addClass("md-dragging"), s = { width: q.prop("offsetWidth") }, h.removeClass("transition"));
          }function m(a) {
            if (s) {
              a.stopPropagation(), a.srcEvent && a.srcEvent.preventDefault();var b = a.pointer.distanceX / s.width,
                  c = k.$viewValue ? 1 + b : b;c = Math.max(0, Math.min(1, c)), q.css(d.CSS.TRANSFORM, "translate3d(" + 100 * c + "%,0,0)"), s.translate = c;
            }
          }function n(a) {
            if (s) {
              a.stopPropagation(), h.removeClass("md-dragging"), q.css(d.CSS.TRANSFORM, "");(k.$viewValue ? s.translate > .5 : s.translate < .5) && o(!k.$viewValue), s = null;
            }
          }function o(b) {
            a.$apply(function () {
              k.$setViewValue(b), k.$render();
            });
          }k = k || c.fakeNgModel();var p = null;null != i.disabled ? p = function p() {
            return !0;
          } : i.ngDisabled && (p = e(i.ngDisabled));var q = b.element(h[0].querySelector(".md-thumb-container")),
              r = b.element(h[0].querySelector(".md-container"));f(function () {
            h.removeClass("md-dragging");
          }), j(a, h, i, k), p && a.$watch(p, function (a) {
            h.attr("tabindex", a ? -1 : 0);
          }), g.register(r, "drag"), r.on("$md.dragstart", l).on("$md.drag", m).on("$md.dragend", n);var s;
        };
      }var i = a[0];return { restrict: "E", priority: 210, transclude: !0, template: '<div class="md-container"><div class="md-bar"></div><div class="md-thumb-container"><div class="md-thumb" md-ink-ripple md-ink-ripple-checkbox></div></div></div><div ng-transclude class="md-label"></div>', require: "?ngModel", compile: h };
    }b.module("material.components.switch", ["material.core", "material.components.checkbox"]).directive("mdSwitch", a), a.$inject = ["mdCheckboxDirective", "$mdUtil", "$mdConstant", "$parse", "$$rAF", "$mdGesture"];
  }(), function () {
    b.module("material.components.tabs", ["material.core", "material.components.icon"]);
  }(), function () {
    function a(a) {
      return { restrict: "E", link: function link(b, c, d) {
          b.$on("$destroy", function () {
            a.destroy();
          });
        } };
    }function c(a) {
      function c(a) {
        e = a;
      }function d(a, c, d, f) {
        function g(b, g, h) {
          e = h.textContent || h.content;var k = !f("gt-sm");return g = d.extractElementByName(g, "md-toast", !0), h.onSwipe = function (a, b) {
            var e = a.type.replace("$md.", ""),
                f = e.replace("swipe", "");"down" === f && -1 != h.position.indexOf("top") && !k || "up" === f && (-1 != h.position.indexOf("bottom") || k) || ("left" !== f && "right" !== f || !k) && (g.addClass("md-" + e), d.nextTick(c.cancel));
          }, h.openClass = i(h.position), h.parent.addClass(h.openClass), d.hasComputedStyle(h.parent, "position", "static") && h.parent.css("position", "relative"), g.on(j, h.onSwipe), g.addClass(k ? "md-bottom" : h.position.split(" ").map(function (a) {
            return "md-" + a;
          }).join(" ")), h.parent && h.parent.addClass("md-toast-animating"), a.enter(g, h.parent).then(function () {
            h.parent && h.parent.removeClass("md-toast-animating");
          });
        }function h(b, c, e) {
          return c.off(j, e.onSwipe), e.parent && e.parent.addClass("md-toast-animating"), e.openClass && e.parent.removeClass(e.openClass), (1 == e.$destroy ? c.remove() : a.leave(c)).then(function () {
            e.parent && e.parent.removeClass("md-toast-animating"), d.hasComputedStyle(e.parent, "position", "static") && e.parent.css("position", "");
          });
        }function i(a) {
          return f("gt-sm") ? "md-toast-open-" + (a.indexOf("top") > -1 ? "top" : "bottom") : "md-toast-open-bottom";
        }var j = "$md.swipeleft $md.swiperight $md.swipeup $md.swipedown";return { onShow: g, onRemove: h, position: "bottom left", themable: !0, hideDelay: 3e3, autoWrap: !0, transformTemplate: function transformTemplate(a, c) {
            var d = c.autoWrap && a && !/md-toast-content/g.test(a);if (d) {
              var e = b.element(a),
                  f = '<div class="md-toast-content">' + e.html() + "</div>";return e.empty().append(f), e[0].outerHTML;
            }return d ? '<div class="md-toast-content">' + a + "</div>" : a || "";
          } };
      }var e,
          f = "ok",
          g = a("$mdToast").setDefaults({ methods: ["position", "hideDelay", "capsule", "parent"], options: d }).addPreset("simple", { argOption: "textContent", methods: ["textContent", "content", "action", "highlightAction", "theme", "parent"], options: ["$mdToast", "$mdTheming", function (a, b) {
          return { template: '<md-toast md-theme="{{ toast.theme }}" ng-class="{\'md-capsule\': toast.capsule}">  <div class="md-toast-content">    <span flex role="alert" aria-relevant="all" aria-atomic="true">      {{ toast.content }}    </span>    <md-button class="md-action" ng-if="toast.action" ng-click="toast.resolve()" ng-class="{\'md-highlight\': toast.highlightAction}">      {{ toast.action }}    </md-button>  </div></md-toast>', controller: ["$scope", function (b) {
              var c = this;b.$watch(function () {
                return e;
              }, function () {
                c.content = e;
              }), this.resolve = function () {
                a.hide(f);
              };
            }], theme: b.defaultTheme(), controllerAs: "toast", bindToController: !0 };
        }] }).addMethod("updateTextContent", c).addMethod("updateContent", c);return d.$inject = ["$animate", "$mdToast", "$mdUtil", "$mdMedia"], g;
    }b.module("material.components.toast", ["material.core", "material.components.button"]).directive("mdToast", a).provider("$mdToast", c), a.$inject = ["$mdToast"], c.$inject = ["$$interimElementProvider"];
  }(), function () {
    function a(a, c, d, e, f) {
      var g = b.bind(null, d.supplant, "translate3d(0,{0}px,0)");return { template: "", restrict: "E", link: function link(h, i, j) {
          function k() {
            function e(a) {
              var b = i.parent().find("md-content");!p && b.length && k(null, b), a = h.$eval(a), !1 === a ? q() : q = m();
            }function k(a, b) {
              b && i.parent()[0] === b.parent()[0] && (p && p.off("scroll", u), p = b, q = m());
            }function l(a) {
              var b = a ? a.target.scrollTop : s;v(), r = Math.min(o / t, Math.max(0, r + b - s)), i.css(c.CSS.TRANSFORM, g([-r * t])), p.css(c.CSS.TRANSFORM, g([(o - r) * t])), s = b, d.nextTick(function () {
                var a = i.hasClass("md-whiteframe-z1");a && !r ? f.removeClass(i, "md-whiteframe-z1") : !a && r && f.addClass(i, "md-whiteframe-z1");
              });
            }function m() {
              return p ? (p.on("scroll", u), p.attr("scroll-shrink", "true"), a(n), function () {
                p.off("scroll", u), p.attr("scroll-shrink", "false"), a(n);
              }) : b.noop;
            }function n() {
              o = i.prop("offsetHeight");var a = -o * t + "px";p.css({ "margin-top": a, "margin-bottom": a }), l();
            }var o,
                p,
                q = b.noop,
                r = 0,
                s = 0,
                t = j.mdShrinkSpeedFactor || .5,
                u = a.throttle(l),
                v = d.debounce(n, 5e3);h.$on("$mdContentLoaded", k), j.$observe("mdScrollShrink", e), j.ngShow && h.$watch(j.ngShow, n), j.ngHide && h.$watch(j.ngHide, n), h.$on("$destroy", q);
          }e(i), b.isDefined(j.mdScrollShrink) && k();
        } };
    }b.module("material.components.toolbar", ["material.core", "material.components.content"]).directive("mdToolbar", a), a.$inject = ["$$rAF", "$mdConstant", "$mdUtil", "$mdTheming", "$animate"];
  }(), function () {
    function a(a, c, d, e, f, g, h, i, j) {
      function k(h, k, n) {
        function o() {
          b.isDefined(n.mdDelay) || (h.delay = l);
        }function p() {
          var a = "center top";switch (h.direction) {case "left":
              a = "right center";break;case "right":
              a = "left center";break;case "top":
              a = "center bottom";break;case "bottom":
              a = "center top";}A.css("transform-origin", a);
        }function q() {
          h.$on("$destroy", function () {
            h.visible = !1, k.remove(), b.element(c).off("resize", C);
          }), h.$watch("visible", function (a) {
            a ? v() : w();
          }), h.$watch("direction", x);
        }function r() {
          z.attr("aria-label") || z.text().trim() || z.attr("aria-label", k.text().trim());
        }function s() {
          k.detach(), k.attr("role", "tooltip");
        }function t() {
          function a() {
            u(!1);
          }var d = !1,
              f = b.element(c);if (z[0] && "MutationObserver" in c) {
            var g = new MutationObserver(function (a) {
              a.forEach(function (a) {
                "disabled" === a.attributeName && z[0].disabled && (u(!1), h.$digest());
              });
            });g.observe(z[0], { attributes: !0 });
          }var i = function i() {
            j = document.activeElement === z[0];
          },
              j = !1;f.on("blur", i), f.on("resize", C), document.addEventListener("scroll", a, !0), h.$on("$destroy", function () {
            f.off("blur", i), f.off("resize", C), document.removeEventListener("scroll", a, !0), g && g.disconnect();
          });var k = function k(a) {
            return "focus" === a.type && j ? void (j = !1) : (z.on("blur mouseleave touchend touchcancel", l), void u(!0));
          },
              l = function l() {
            ((h.hasOwnProperty("autohide") ? h.autohide : n.hasOwnProperty("mdAutohide")) || d || e[0].activeElement !== z[0]) && (z.off("blur mouseleave touchend touchcancel", l), z.triggerHandler("blur"), u(!1)), d = !1;
          };z.on("mousedown", function () {
            d = !0;
          }), z.on("focus mouseenter touchstart", k);
        }function u(b) {
          u.value = !!b, u.queued || (b ? (u.queued = !0, a(function () {
            h.visible = u.value, u.queued = !1;
          }, h.delay)) : f.nextTick(function () {
            h.visible = !1;
          }));
        }function v() {
          return B.append(k), f.hasComputedStyle(k, "display", "none") ? (h.visible = !1, void k.detach()) : (x(), void b.forEach([k, A], function (a) {
            i.addClass(a, "md-show");
          }));
        }function w() {
          var a = [];b.forEach([k, A], function (b) {
            b.parent() && b.hasClass("md-show") && a.push(i.removeClass(b, "md-show"));
          }), j.all(a).then(function () {
            h.visible || k.detach();
          });
        }function x() {
          h.visible && (p(), y());
        }function y() {
          function a(a) {
            var b = { left: a.left, top: a.top };return b.left = Math.min(b.left, B.prop("scrollWidth") - c.width - m), b.left = Math.max(b.left, m), b.top = Math.min(b.top, B.prop("scrollHeight") - c.height - m), b.top = Math.max(b.top, m), b;
          }function b(a) {
            return "left" === a ? { left: d.left - c.width - m, top: d.top + d.height / 2 - c.height / 2 } : "right" === a ? { left: d.left + d.width + m, top: d.top + d.height / 2 - c.height / 2 } : "top" === a ? { left: d.left + d.width / 2 - c.width / 2, top: d.top - c.height - m } : { left: d.left + d.width / 2 - c.width / 2, top: d.top + d.height + m };
          }var c = f.offsetRect(k, B),
              d = f.offsetRect(z, B),
              e = b(h.direction),
              g = k.prop("offsetParent");h.direction ? e = a(e) : g && e.top > g.scrollHeight - c.height - m && (e = a(b("top"))), k.css({ left: e.left + "px", top: e.top + "px" });
        }g(k);var z = f.getParentWithPointerEvents(k),
            A = b.element(k[0].getElementsByClassName("md-content")[0]),
            B = b.element(document.body),
            C = d.throttle(function () {
          x();
        });i.pin && i.pin(k, z), o(), s(), t(), p(), q(), r();
      }var l = 0,
          m = 8;return { restrict: "E", transclude: !0, priority: 210, template: '<div class="md-content" ng-transclude></div>', scope: { delay: "=?mdDelay", visible: "=?mdVisible", autohide: "=?mdAutohide", direction: "@?mdDirection" }, link: k };
    }b.module("material.components.tooltip", ["material.core"]).directive("mdTooltip", a), a.$inject = ["$timeout", "$window", "$$rAF", "$document", "$mdUtil", "$mdTheming", "$rootElement", "$animate", "$q"];
  }(), function () {
    function a() {
      return { controller: d, template: c, compile: function compile(a, b) {
          a.addClass("md-virtual-repeat-container").addClass(b.hasOwnProperty("mdOrientHorizontal") ? "md-orient-horizontal" : "md-orient-vertical");
        } };
    }function c(a) {
      return '<div class="md-virtual-repeat-scroller"><div class="md-virtual-repeat-sizer"></div><div class="md-virtual-repeat-offsetter">' + a[0].innerHTML + "</div></div>";
    }function d(a, c, d, e, f, g, h, i) {
      this.$rootScope = e, this.$scope = g, this.$element = h, this.$attrs = i, this.size = 0, this.scrollSize = 0, this.scrollOffset = 0, this.horizontal = this.$attrs.hasOwnProperty("mdOrientHorizontal"), this.repeater = null, this.autoShrink = this.$attrs.hasOwnProperty("mdAutoShrink"), this.autoShrinkMin = parseInt(this.$attrs.mdAutoShrinkMin, 10) || 0, this.originalSize = null, this.offsetSize = parseInt(this.$attrs.mdOffsetSize, 10) || 0, this.$attrs.mdTopIndex ? (this.bindTopIndex = d(this.$attrs.mdTopIndex), this.topIndex = this.bindTopIndex(this.$scope), b.isDefined(this.topIndex) || (this.topIndex = 0, this.bindTopIndex.assign(this.$scope, 0)), this.$scope.$watch(this.bindTopIndex, b.bind(this, function (a) {
        a !== this.topIndex && this.scrollToIndex(a);
      }))) : this.topIndex = 0, this.scroller = h[0].getElementsByClassName("md-virtual-repeat-scroller")[0], this.sizer = this.scroller.getElementsByClassName("md-virtual-repeat-sizer")[0], this.offsetter = this.scroller.getElementsByClassName("md-virtual-repeat-offsetter")[0];var j = b.bind(this, this.updateSize);a(b.bind(this, function () {
        j();var a = c.debounce(j, 10, null, !1),
            d = b.element(f);this.size || a(), d.on("resize", a), g.$on("$destroy", function () {
          d.off("resize", a);
        }), g.$emit("$md-resize-enable"), g.$on("$md-resize", j);
      }));
    }function e(a) {
      return { controller: f, priority: 1e3, require: ["mdVirtualRepeat", "^^mdVirtualRepeatContainer"], restrict: "A", terminal: !0, transclude: "element", compile: function compile(b, c) {
          var d = c.mdVirtualRepeat,
              e = d.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)\s*$/),
              f = e[1],
              g = a(e[2]),
              h = c.mdExtraName && a(c.mdExtraName);return function (a, b, c, d, e) {
            d[0].link_(d[1], e, f, g, h);
          };
        } };
    }function f(a, c, d, e, f, g, h) {
      this.$scope = a, this.$element = c, this.$attrs = d, this.$browser = e, this.$document = f, this.$rootScope = g, this.$$rAF = h, this.onDemand = d.hasOwnProperty("mdOnDemand"), this.browserCheckUrlChange = e.$$checkUrlChange, this.newStartIndex = 0, this.newEndIndex = 0, this.newVisibleEnd = 0, this.startIndex = 0, this.endIndex = 0, this.itemSize = a.$eval(d.mdItemSize) || null, this.isFirstRender = !0, this.isVirtualRepeatUpdating_ = !1, this.itemsLength = 0, this.unwatchItemSize_ = b.noop, this.blocks = {}, this.pooledBlocks = [];
    }function g(a) {
      if (!b.isFunction(a.getItemAtIndex) || !b.isFunction(a.getLength)) throw Error("When md-on-demand is enabled, the Object passed to md-virtual-repeat must implement functions getItemAtIndex() and getLength() ");this.model = a;
    }b.module("material.components.virtualRepeat", ["material.core", "material.components.showHide"]).directive("mdVirtualRepeatContainer", a).directive("mdVirtualRepeat", e);var h = 1533917,
        i = 3;d.$inject = ["$$rAF", "$mdUtil", "$parse", "$rootScope", "$window", "$scope", "$element", "$attrs"], d.prototype.register = function (a) {
      this.repeater = a, b.element(this.scroller).on("scroll wheel touchmove touchend", b.bind(this, this.handleScroll_));
    }, d.prototype.isHorizontal = function () {
      return this.horizontal;
    }, d.prototype.getSize = function () {
      return this.size;
    }, d.prototype.setSize_ = function (a) {
      this.size = a, this.$element[0].style[this.isHorizontal() ? "width" : "height"] = a + "px";
    }, d.prototype.updateSize = function () {
      this.originalSize || (this.size = this.isHorizontal() ? this.$element[0].clientWidth : this.$element[0].clientHeight, this.repeater && this.repeater.containerUpdated());
    }, d.prototype.getScrollSize = function () {
      return this.scrollSize;
    }, d.prototype.sizeScroller_ = function (a) {
      var b = this.isHorizontal() ? "width" : "height",
          c = this.isHorizontal() ? "height" : "width";if (this.sizer.innerHTML = "", h > a) this.sizer.style[b] = a + "px";else {
        this.sizer.style[b] = "auto", this.sizer.style[c] = "auto";var d = Math.floor(a / h),
            e = document.createElement("div");e.style[b] = h + "px", e.style[c] = "1px";for (var f = 0; d > f; f++) {
          this.sizer.appendChild(e.cloneNode(!1));
        }e.style[b] = a - d * h + "px", this.sizer.appendChild(e);
      }
    }, d.prototype.autoShrink_ = function (a) {
      var b = Math.max(a, this.autoShrinkMin * this.repeater.getItemSize());if (this.autoShrink && b !== this.size) {
        var c = this.originalSize || this.size;!c || c > b ? (this.originalSize || (this.originalSize = this.size), this.setSize_(b)) : this.originalSize && (this.setSize_(this.originalSize), this.originalSize = null), this.repeater.containerUpdated();
      }
    }, d.prototype.setScrollSize = function (a) {
      var b = a + this.offsetSize;this.scrollSize !== b && (this.sizeScroller_(b), this.autoShrink_(b), this.scrollSize = b);
    }, d.prototype.getScrollOffset = function () {
      return this.scrollOffset;
    }, d.prototype.scrollTo = function (a) {
      this.scroller[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = a, this.handleScroll_();
    }, d.prototype.scrollToIndex = function (a) {
      var b = this.repeater.getItemSize(),
          c = this.repeater.itemsLength;a > c && (a = c - 1), this.scrollTo(b * a);
    }, d.prototype.resetScroll = function () {
      this.scrollTo(0);
    }, d.prototype.handleScroll_ = function () {
      var a = this.isHorizontal() ? this.scroller.scrollLeft : this.scroller.scrollTop;if (a !== this.scrollOffset) {
        var b = this.repeater.getItemSize();if (b) {
          var c = Math.max(0, Math.floor(a / b) - i),
              d = this.isHorizontal() ? "translateX(" : "translateY(";if (d += c * b + "px)", this.scrollOffset = a, this.offsetter.style.webkitTransform = d, this.offsetter.style.transform = d, this.bindTopIndex) {
            var e = Math.floor(a / b);e !== this.topIndex && e < this.repeater.itemsLength && (this.topIndex = e, this.bindTopIndex.assign(this.$scope, e), this.$rootScope.$$phase || this.$scope.$digest());
          }this.repeater.containerUpdated();
        }
      }
    }, e.$inject = ["$parse"], f.$inject = ["$scope", "$element", "$attrs", "$browser", "$document", "$rootScope", "$$rAF"], f.Block, f.prototype.link_ = function (a, c, d, e, f) {
      this.container = a, this.transclude = c, this.repeatName = d, this.rawRepeatListExpression = e, this.extraName = f, this.sized = !1, this.repeatListExpression = b.bind(this, this.repeatListExpression_), this.container.register(this);
    }, f.prototype.readItemSize_ = function () {
      if (!this.itemSize) {
        this.items = this.repeatListExpression(this.$scope), this.parentNode = this.$element[0].parentNode;var a = this.getBlock_(0);a.element[0].parentNode || this.parentNode.appendChild(a.element[0]), this.itemSize = a.element[0][this.container.isHorizontal() ? "offsetWidth" : "offsetHeight"] || null, this.blocks[0] = a, this.poolBlock_(0), this.itemSize && this.containerUpdated();
      }
    }, f.prototype.repeatListExpression_ = function (a) {
      var b = this.rawRepeatListExpression(a);if (this.onDemand && b) {
        var c = new g(b);return c.$$includeIndexes(this.newStartIndex, this.newVisibleEnd), c;
      }return b;
    }, f.prototype.containerUpdated = function () {
      return this.itemSize ? (this.sized || (this.items = this.repeatListExpression(this.$scope)), this.sized || (this.unwatchItemSize_(), this.sized = !0, this.$scope.$watchCollection(this.repeatListExpression, b.bind(this, function (a, b) {
        this.isVirtualRepeatUpdating_ || this.virtualRepeatUpdate_(a, b);
      }))), this.updateIndexes_(), void ((this.newStartIndex !== this.startIndex || this.newEndIndex !== this.endIndex || this.container.getScrollOffset() > this.container.getScrollSize()) && (this.items instanceof g && this.items.$$includeIndexes(this.newStartIndex, this.newEndIndex), this.virtualRepeatUpdate_(this.items, this.items)))) : (this.unwatchItemSize_ = this.$scope.$watchCollection(this.repeatListExpression, b.bind(this, function (a) {
        a && a.length && this.$$rAF(b.bind(this, this.readItemSize_));
      })), void (this.$rootScope.$$phase || this.$scope.$digest()));
    }, f.prototype.getItemSize = function () {
      return this.itemSize;
    }, f.prototype.virtualRepeatUpdate_ = function (a, c) {
      this.isVirtualRepeatUpdating_ = !0;var d = a && a.length || 0,
          e = !1;if (this.items && d < this.items.length && 0 !== this.container.getScrollOffset()) return this.items = a, void this.container.resetScroll();if (d !== this.itemsLength && (e = !0, this.itemsLength = d), this.items = a, (a !== c || e) && this.updateIndexes_(), this.parentNode = this.$element[0].parentNode, e && this.container.setScrollSize(d * this.itemSize), this.isFirstRender) {
        this.isFirstRender = !1;var f = this.$attrs.mdStartIndex ? this.$scope.$eval(this.$attrs.mdStartIndex) : this.container.topIndex;this.container.scrollToIndex(f), this.container.scrollToIndex(f);
      }Object.keys(this.blocks).forEach(function (a) {
        var b = parseInt(a, 10);(b < this.newStartIndex || b >= this.newEndIndex) && this.poolBlock_(b);
      }, this), this.$browser.$$checkUrlChange = b.noop;var g,
          h,
          i = [],
          j = [];for (g = this.newStartIndex; g < this.newEndIndex && null == this.blocks[g]; g++) {
        h = this.getBlock_(g), this.updateBlock_(h, g), i.push(h);
      }for (; null != this.blocks[g]; g++) {
        this.updateBlock_(this.blocks[g], g);
      }for (var k = g - 1; g < this.newEndIndex; g++) {
        h = this.getBlock_(g), this.updateBlock_(h, g), j.push(h);
      }i.length && this.parentNode.insertBefore(this.domFragmentFromBlocks_(i), this.$element[0].nextSibling), j.length && this.parentNode.insertBefore(this.domFragmentFromBlocks_(j), this.blocks[k] && this.blocks[k].element[0].nextSibling), this.$browser.$$checkUrlChange = this.browserCheckUrlChange, this.startIndex = this.newStartIndex, this.endIndex = this.newEndIndex, this.isVirtualRepeatUpdating_ = !1;
    }, f.prototype.getBlock_ = function (a) {
      if (this.pooledBlocks.length) return this.pooledBlocks.pop();var c;return this.transclude(b.bind(this, function (b, d) {
        c = { element: b, new: !0, scope: d }, this.updateScope_(d, a), this.parentNode.appendChild(b[0]);
      })), c;
    }, f.prototype.updateBlock_ = function (a, b) {
      this.blocks[b] = a, (a.new || a.scope.$index !== b || a.scope[this.repeatName] !== this.items[b]) && (a.new = !1, this.updateScope_(a.scope, b), this.$rootScope.$$phase || a.scope.$digest());
    }, f.prototype.updateScope_ = function (a, b) {
      a.$index = b, a[this.repeatName] = this.items && this.items[b], this.extraName && (a[this.extraName(this.$scope)] = this.items[b]);
    }, f.prototype.poolBlock_ = function (a) {
      this.pooledBlocks.push(this.blocks[a]), this.parentNode.removeChild(this.blocks[a].element[0]), delete this.blocks[a];
    }, f.prototype.domFragmentFromBlocks_ = function (a) {
      var b = this.$document[0].createDocumentFragment();return a.forEach(function (a) {
        b.appendChild(a.element[0]);
      }), b;
    }, f.prototype.updateIndexes_ = function () {
      var a = this.items ? this.items.length : 0,
          b = Math.ceil(this.container.getSize() / this.itemSize);this.newStartIndex = Math.max(0, Math.min(a - b, Math.floor(this.container.getScrollOffset() / this.itemSize))), this.newVisibleEnd = this.newStartIndex + b + i, this.newEndIndex = Math.min(a, this.newVisibleEnd), this.newStartIndex = Math.max(0, this.newStartIndex - i);
    }, g.prototype.$$includeIndexes = function (a, b) {
      for (var c = a; b > c; c++) {
        this.hasOwnProperty(c) || (this[c] = this.model.getItemAtIndex(c));
      }this.length = this.model.getLength();
    };
  }(), function () {
    b.module("material.components.whiteframe", []);
  }(), function () {
    function a(a, d, h, i, j, k, l, m, n, o) {
      function p() {
        h.initOptionalProperties(a, n, { searchText: null, selectedItem: null }), j(d), t(), h.nextTick(function () {
          v(), r(), s(), d.on("focus", s);
        });
      }function q() {
        function b() {
          var a = 0,
              b = d.find("md-input-container");if (b.length) {
            var c = b.find("input");a = b.prop("offsetHeight"), a -= c.prop("offsetTop"), a -= c.prop("offsetHeight"), a += b.prop("offsetTop");
          }return a;
        }function c() {
          var a = la.scrollContainer.getBoundingClientRect(),
              b = {};a.right > l.right - f && (b.left = j.right - a.width + "px"), la.$.scrollContainer.css(b);
        }if (!la) return h.nextTick(q, !1, a);var i,
            j = la.wrap.getBoundingClientRect(),
            k = la.snap.getBoundingClientRect(),
            l = la.root.getBoundingClientRect(),
            m = k.bottom - l.top,
            o = l.bottom - k.top,
            p = j.left - l.left,
            r = j.width,
            s = b();n.mdFloatingLabel && (p += g, r -= 2 * g), i = { left: p + "px", minWidth: r + "px", maxWidth: Math.max(j.right - l.left, l.right - j.left) - f + "px" }, m > o && l.height - j.bottom - f < e ? (i.top = "auto", i.bottom = o + "px", i.maxHeight = Math.min(e, j.top - l.top - f) + "px") : (i.top = m - s + "px", i.bottom = "auto", i.maxHeight = Math.min(e, l.bottom + h.scrollTop() - j.bottom - f) + "px"), la.$.scrollContainer.css(i), h.nextTick(c, !1);
      }function r() {
        la.$.root.length && (j(la.$.scrollContainer), la.$.scrollContainer.detach(), la.$.root.append(la.$.scrollContainer), l.pin && l.pin(la.$.scrollContainer, m));
      }function s() {
        a.autofocus && la.input.focus();
      }function t() {
        var c = parseInt(a.delay, 10) || 0;n.$observe("disabled", function (a) {
          ia.isDisabled = !!a;
        }), n.$observe("required", function (a) {
          ia.isRequired = !!a;
        }), a.$watch("searchText", c ? h.debounce(I, c) : I), a.$watch("selectedItem", C), b.element(k).on("resize", q), a.$on("$destroy", u);
      }function u() {
        if (b.element(k).off("resize", q), la) {
          var a = "ul scroller scrollContainer input".split(" ");b.forEach(a, function (a) {
            la.$[a].remove();
          });
        }
      }function v() {
        la = { main: d[0], scrollContainer: d[0].getElementsByClassName("md-virtual-repeat-container")[0], scroller: d[0].getElementsByClassName("md-virtual-repeat-scroller")[0], ul: d.find("ul")[0], input: d.find("input")[0], wrap: d.find("md-autocomplete-wrap")[0], root: document.body }, la.li = la.ul.getElementsByTagName("li"), la.snap = w(), la.$ = x(la);
      }function w() {
        for (var a = d; a.length; a = a.parent()) {
          if (b.isDefined(a.attr("md-autocomplete-snap"))) return a[0];
        }return la.wrap;
      }function x(a) {
        var c = {};for (var d in a) {
          a.hasOwnProperty(d) && (c[d] = b.element(a[d]));
        }return c;
      }function y(b, c) {
        !b && c ? (q(), la && h.nextTick(function () {
          h.disableScrollAround(la.ul);
        }, !1, a)) : b && !c && h.nextTick(function () {
          h.enableScrolling();
        }, !1, a);
      }function z() {
        na = !0;
      }function A() {
        pa || la.input.focus(), na = !1, ia.hidden = S();
      }function B() {
        la.input.focus();
      }function C(b, c) {
        b && O(b).then(function (d) {
          a.searchText = d, F(b, c);
        }), b !== c && D();
      }function D() {
        b.isFunction(a.itemChange) && a.itemChange(P(a.selectedItem));
      }function E() {
        b.isFunction(a.textChange) && a.textChange();
      }function F(a, b) {
        oa.forEach(function (c) {
          c(a, b);
        });
      }function G(a) {
        -1 == oa.indexOf(a) && oa.push(a);
      }function H(a) {
        var b = oa.indexOf(a);-1 != b && oa.splice(b, 1);
      }function I(b, c) {
        ia.index = Q(), b !== c && O(a.selectedItem).then(function (d) {
          b !== d && (a.selectedItem = null, b !== c && E(), Y() ? ga() : (ia.matches = [], R(!1), ba()));
        });
      }function J() {
        pa = !1, na || (ia.hidden = S());
      }function K(a) {
        a && (na = !1, pa = !1), la.input.blur();
      }function L() {
        pa = !0, b.isString(a.searchText) || (a.searchText = ""), ia.hidden = S(), ia.hidden || ga();
      }function M(a) {
        switch (a.keyCode) {case i.KEY_CODE.DOWN_ARROW:
            if (ia.loading) return;a.stopPropagation(), a.preventDefault(), ia.index = Math.min(ia.index + 1, ia.matches.length - 1), da(), ba();break;case i.KEY_CODE.UP_ARROW:
            if (ia.loading) return;a.stopPropagation(), a.preventDefault(), ia.index = ia.index < 0 ? ia.matches.length - 1 : Math.max(0, ia.index - 1), da(), ba();break;case i.KEY_CODE.TAB:
            if (A(), ia.hidden || ia.loading || ia.index < 0 || ia.matches.length < 1) return;$(ia.index);break;case i.KEY_CODE.ENTER:
            if (ia.hidden || ia.loading || ia.index < 0 || ia.matches.length < 1) return;if (V()) return;a.stopPropagation(), a.preventDefault(), $(ia.index);break;case i.KEY_CODE.ESCAPE:
            a.stopPropagation(), a.preventDefault(), _(), K(!0);}
      }function N() {
        return b.isNumber(a.minLength) ? a.minLength : 1;
      }function O(b) {
        function c(b) {
          return b && a.itemText ? a.itemText(P(b)) : null;
        }return o.when(c(b) || b);
      }function P(a) {
        if (!a) return c;var b = {};return ia.itemName && (b[ia.itemName] = a), b;
      }function Q() {
        return a.autoselect ? 0 : -1;
      }function R(a) {
        ia.loading != a && (ia.loading = a), ia.hidden = S();
      }function S() {
        return !(!ia.loading || U()) || !!V() || !pa || !T();
      }function T() {
        return Y() && U() || fa();
      }function U() {
        return !!ia.matches.length;
      }function V() {
        return !!ia.scope.selectedItem;
      }function W() {
        return ia.loading && !V();
      }function X() {
        return O(ia.matches[ia.index]);
      }function Y() {
        return (a.searchText || "").length >= N();
      }function Z(a, b, c) {
        Object.defineProperty(ia, a, { get: function get() {
            return c;
          }, set: function set(a) {
            var d = c;c = a, b(a, d);
          } });
      }function $(b) {
        h.nextTick(function () {
          O(ia.matches[b]).then(function (a) {
            var b = la.$.input.controller("ngModel");b.$setViewValue(a), b.$render();
          }).finally(function () {
            a.selectedItem = ia.matches[b], R(!1);
          });
        }, !1);
      }function _() {
        R(!0), ia.index = 0, ia.matches = [], a.searchText = "", $(-1);var b = document.createEvent("CustomEvent");b.initCustomEvent("input", !0, !0, { value: a.searchText }), la.input.dispatchEvent(b), la.input.focus();
      }function aa(c) {
        function d(b) {
          ma[f] = b, (c || "") === (a.searchText || "") && (ia.matches = b, ia.hidden = S(), a.selectOnMatch && ha(), ba(), q());
        }var e = a.$parent.$eval(ka),
            f = c.toLowerCase();b.isArray(e) ? d(e) : e && (R(!0), h.nextTick(function () {
          e.success && e.success(d), e.then && e.then(d), e.finally && e.finally(function () {
            R(!1);
          });
        }, !0, a));
      }function ba() {
        X().then(function (a) {
          ia.messages = [ca(), a];
        });
      }function ca() {
        if (qa === ia.matches.length) return "";switch (qa = ia.matches.length, ia.matches.length) {case 0:
            return "There are no matches available.";case 1:
            return "There is 1 match available.";default:
            return "There are " + ia.matches.length + " matches available.";}
      }function da() {
        if (la.li[0]) {
          var a = la.li[0].offsetHeight,
              b = a * ia.index,
              c = b + a,
              d = la.scroller.clientHeight,
              e = la.scroller.scrollTop;e > b ? ea(b) : c > e + d && ea(c - d);
        }
      }function ea(a) {
        la.$.scrollContainer.controller("mdVirtualRepeatContainer").scrollTo(a);
      }function fa() {
        var a = (ia.scope.searchText || "").length;return ia.hasNotFound && !U() && !ia.loading && a >= N() && pa && !V();
      }function ga() {
        var b = a.searchText || "",
            c = b.toLowerCase();!a.noCache && ma[c] ? (ia.matches = ma[c], ba()) : aa(b), ia.hidden = S();
      }function ha() {
        var b = a.searchText,
            c = ia.matches,
            d = c[0];1 === c.length && O(d).then(function (a) {
          b == a && $(0);
        });
      }var ia = this,
          ja = a.itemsExpr.split(/ in /i),
          ka = ja[1],
          la = null,
          ma = {},
          na = !1,
          oa = [],
          pa = !1,
          qa = 0;return Z("hidden", y, !0), ia.scope = a, ia.parent = a.$parent, ia.itemName = ja[0], ia.matches = [], ia.loading = !1, ia.hidden = !0, ia.index = null, ia.messages = [], ia.id = h.nextUid(), ia.isDisabled = null, ia.isRequired = null, ia.hasNotFound = !1, ia.keydown = M, ia.blur = J, ia.focus = L, ia.clear = _, ia.select = $, ia.listEnter = z, ia.listLeave = A, ia.mouseUp = B, ia.getCurrentDisplayValue = X, ia.registerSelectedItemWatcher = G, ia.unregisterSelectedItemWatcher = H, ia.notFoundVisible = fa, ia.loadingIsVisible = W, p();
    }b.module("material.components.autocomplete").controller("MdAutocompleteCtrl", a);var d = 41,
        e = 5.5 * d,
        f = 8,
        g = 2;a.$inject = ["$scope", "$element", "$mdUtil", "$mdConstant", "$mdTheming", "$window", "$animate", "$rootElement", "$attrs", "$q"];
  }(), function () {
    function a() {
      var a = !1;return { controller: "MdAutocompleteCtrl", controllerAs: "$mdAutocompleteCtrl", scope: { inputName: "@mdInputName", inputMinlength: "@mdInputMinlength", inputMaxlength: "@mdInputMaxlength", searchText: "=?mdSearchText", selectedItem: "=?mdSelectedItem", itemsExpr: "@mdItems", itemText: "&mdItemText", placeholder: "@placeholder", noCache: "=?mdNoCache", selectOnMatch: "=?mdSelectOnMatch", itemChange: "&?mdSelectedItemChange", textChange: "&?mdSearchTextChange", minLength: "=?mdMinLength", delay: "=?mdDelay", autofocus: "=?mdAutofocus", floatingLabel: "@?mdFloatingLabel", autoselect: "=?mdAutoselect", menuClass: "@?mdMenuClass", inputId: "@?mdInputId" }, link: function link(b, c, d, e) {
          e.hasNotFound = a;
        }, template: function template(b, c) {
          function d() {
            var a = b.find("md-item-template").detach(),
                c = a.length ? a.html() : b.html();return a.length || b.empty(), "<md-autocomplete-parent-scope md-autocomplete-replace>" + c + "</md-autocomplete-parent-scope>";
          }function e() {
            var a = b.find("md-not-found").detach(),
                c = a.length ? a.html() : "";return c ? '<li ng-if="$mdAutocompleteCtrl.notFoundVisible()"                         md-autocomplete-parent-scope>' + c + "</li>" : "";
          }function f() {
            return c.mdFloatingLabel ? '            <md-input-container flex ng-if="floatingLabel">              <label>{{floatingLabel}}</label>              <input type="search"                  ' + (null != j ? 'tabindex="' + j + '"' : "") + '                  id="{{ inputId || \'fl-input-\' + $mdAutocompleteCtrl.id }}"                  name="{{inputName}}"                  autocomplete="off"                  ng-required="$mdAutocompleteCtrl.isRequired"                  ng-minlength="inputMinlength"                  ng-maxlength="inputMaxlength"                  ng-disabled="$mdAutocompleteCtrl.isDisabled"                  ng-model="$mdAutocompleteCtrl.scope.searchText"                  ng-keydown="$mdAutocompleteCtrl.keydown($event)"                  ng-blur="$mdAutocompleteCtrl.blur()"                  ng-focus="$mdAutocompleteCtrl.focus()"                  aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                  aria-label="{{floatingLabel}}"                  aria-autocomplete="list"                  aria-haspopup="true"                  aria-activedescendant=""                  aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>              <div md-autocomplete-parent-scope md-autocomplete-replace>' + i + "</div>            </md-input-container>" : '            <input flex type="search"                ' + (null != j ? 'tabindex="' + j + '"' : "") + '                id="{{ inputId || \'input-\' + $mdAutocompleteCtrl.id }}"                name="{{inputName}}"                ng-if="!floatingLabel"                autocomplete="off"                ng-required="$mdAutocompleteCtrl.isRequired"                ng-disabled="$mdAutocompleteCtrl.isDisabled"                ng-model="$mdAutocompleteCtrl.scope.searchText"                ng-keydown="$mdAutocompleteCtrl.keydown($event)"                ng-blur="$mdAutocompleteCtrl.blur()"                ng-focus="$mdAutocompleteCtrl.focus()"                placeholder="{{placeholder}}"                aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                aria-label="{{placeholder}}"                aria-autocomplete="list"                aria-haspopup="true"                aria-activedescendant=""                aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>            <button                type="button"                tabindex="-1"                ng-if="$mdAutocompleteCtrl.scope.searchText && !$mdAutocompleteCtrl.isDisabled"                ng-click="$mdAutocompleteCtrl.clear()">              <md-icon md-svg-icon="md-close"></md-icon>              <span class="md-visually-hidden">Clear</span>            </button>                ';
          }var g = e(),
              h = d(),
              i = b.html(),
              j = c.tabindex;return a = !!g, c.hasOwnProperty("tabindex") || b.attr("tabindex", "-1"), '        <md-autocomplete-wrap            layout="row"            ng-class="{ \'md-whiteframe-z1\': !floatingLabel, \'md-menu-showing\': !$mdAutocompleteCtrl.hidden }"            role="listbox">          ' + f() + '          <md-progress-linear              class="' + (c.mdFloatingLabel ? "md-inline" : "") + '"              ng-if="$mdAutocompleteCtrl.loadingIsVisible()"              md-mode="indeterminate"></md-progress-linear>          <md-virtual-repeat-container              md-auto-shrink              md-auto-shrink-min="1"              ng-mouseenter="$mdAutocompleteCtrl.listEnter()"              ng-mouseleave="$mdAutocompleteCtrl.listLeave()"              ng-mouseup="$mdAutocompleteCtrl.mouseUp()"              ng-hide="$mdAutocompleteCtrl.hidden"              class="md-autocomplete-suggestions-container md-whiteframe-z1"              ng-class="{ \'md-not-found\': $mdAutocompleteCtrl.notFoundVisible() }"              role="presentation">            <ul class="md-autocomplete-suggestions"                ng-class="::menuClass"                id="ul-{{$mdAutocompleteCtrl.id}}">              <li md-virtual-repeat="item in $mdAutocompleteCtrl.matches"                  ng-class="{ selected: $index === $mdAutocompleteCtrl.index }"                  ng-click="$mdAutocompleteCtrl.select($index)"                  md-extra-name="$mdAutocompleteCtrl.itemName">                  ' + h + "                  </li>" + g + '            </ul>          </md-virtual-repeat-container>        </md-autocomplete-wrap>        <aria-status            class="md-visually-hidden"            role="status"            aria-live="assertive">          <p ng-repeat="message in $mdAutocompleteCtrl.messages track by $index" ng-if="message">{{message}}</p>        </aria-status>';
        } };
    }b.module("material.components.autocomplete").directive("mdAutocomplete", a);
  }(), function () {
    function a(a, b) {
      function c(a, c, d) {
        return function (a, c, e) {
          function f(c, d) {
            i[d] = a[c], a.$watch(c, function (a) {
              b.nextTick(function () {
                i[d] = a;
              });
            });
          }function g() {
            var b = !1,
                c = !1;a.$watch(function () {
              c || b || (b = !0, a.$$postDigest(function () {
                c || i.$digest(), b = c = !1;
              }));
            }), i.$watch(function () {
              c = !0;
            });
          }var h = a.$mdAutocompleteCtrl,
              i = h.parent.$new(),
              j = h.itemName;f("$index", "$index"), f("item", j), g(), d(i, function (a) {
            c.after(a);
          });
        };
      }return { restrict: "AE", compile: c, terminal: !0, transclude: "element" };
    }b.module("material.components.autocomplete").directive("mdAutocompleteParentScope", a), a.$inject = ["$compile", "$mdUtil"];
  }(), function () {
    function a(a, c, d) {
      function e(e, f) {
        var h = null,
            i = null,
            j = d.mdHighlightFlags || "",
            k = a.$watch(function (a) {
          return { term: e(a), unsafeText: f(a) };
        }, function (a, d) {
          (null === h || a.unsafeText !== d.unsafeText) && (h = b.element("<div>").text(a.unsafeText).html()), (null === i || a.term !== d.term) && (i = g(a.term, j)), c.html(h.replace(i, '<span class="highlight">$&</span>'));
        }, !0);c.on("$destroy", k);
      }function f(a) {
        return a && a.replace(/[\\\^\$\*\+\?\.\(\)\|\{}\[\]]/g, "\\$&");
      }function g(a, b) {
        var c = "";return b.indexOf("^") >= 1 && (c += "^"), c += a, b.indexOf("$") >= 1 && (c += "$"), new RegExp(f(c), b.replace(/[\$\^]/g, ""));
      }this.init = e;
    }b.module("material.components.autocomplete").controller("MdHighlightCtrl", a), a.$inject = ["$scope", "$element", "$attrs"];
  }(), function () {
    function a(a, b) {
      return { terminal: !0, controller: "MdHighlightCtrl", compile: function compile(c, d) {
          var e = b(d.mdHighlightText),
              f = a(c.html());return function (a, b, c, d) {
            d.init(e, f);
          };
        } };
    }b.module("material.components.autocomplete").directive("mdHighlightText", a), a.$inject = ["$interpolate", "$parse"];
  }(), function () {
    function a(a, d) {
      function e(c, e) {
        return c.append(d.processTemplate(f)), function (c, d, e, f) {
          d.addClass("md-chip"), a(d), f && b.element(d[0].querySelector(".md-chip-content")).on("blur", function () {
            f.selectedChip = -1;
          });
        };
      }var f = d.processTemplate(c);return { restrict: "E", require: "^?mdChips", compile: e };
    }b.module("material.components.chips").directive("mdChip", a);var c = '    <span ng-if="!$mdChipsCtrl.readonly" class="md-visually-hidden">      {{$mdChipsCtrl.deleteHint}}    </span>';a.$inject = ["$mdTheming", "$mdUtil"];
  }(), function () {
    function a(a) {
      function b(b, c, d, e) {
        c.on("click", function (a) {
          b.$apply(function () {
            e.removeChip(b.$$replacedScope.$index);
          });
        }), a(function () {
          c.attr({ tabindex: -1, "aria-hidden": !0 }), c.find("button").attr("tabindex", "-1");
        });
      }return { restrict: "A", require: "^mdChips", scope: !1, link: b };
    }b.module("material.components.chips").directive("mdChipRemove", a), a.$inject = ["$timeout"];
  }(), function () {
    function a(a) {
      function b(b, c, d) {
        var e = b.$parent.$mdChipsCtrl,
            f = e.parent.$new(!1, e.parent);f.$$replacedScope = b, f.$chip = b.$chip, f.$index = b.$index, f.$mdChipsCtrl = e;var g = e.$scope.$eval(d.mdChipTransclude);c.html(g), a(c.contents())(f);
      }return { restrict: "EA", terminal: !0, link: b, scope: !1 };
    }b.module("material.components.chips").directive("mdChipTransclude", a), a.$inject = ["$compile"];
  }(), function () {
    function a(a, b, c, d, e) {
      this.$timeout = e, this.$mdConstant = b, this.$scope = a, this.parent = a.$parent, this.$log = c, this.$element = d, this.ngModelCtrl = null, this.userInputNgModelCtrl = null, this.userInputElement = null, this.items = [], this.selectedChip = -1, this.hasAutocomplete = !1, this.deleteHint = "Press delete to remove this chip.", this.deleteButtonLabel = "Remove", this.chipBuffer = "", this.useOnAppend = !1, this.useTransformChip = !1, this.useOnAdd = !1, this.useOnRemove = !1, this.useOnSelect = !1;
    }b.module("material.components.chips").controller("MdChipsCtrl", a), a.$inject = ["$scope", "$mdConstant", "$log", "$element", "$timeout"], a.prototype.inputKeydown = function (a) {
      var b = this.getChipBuffer();if (!(this.hasAutocomplete && a.isDefaultPrevented && a.isDefaultPrevented())) {
        if (a.keyCode === this.$mdConstant.KEY_CODE.BACKSPACE) {
          if (b) return;return a.preventDefault(), a.stopPropagation(), void (this.items.length && this.selectAndFocusChipSafe(this.items.length - 1));
        }if ((!this.separatorKeys || this.separatorKeys.length < 1) && (this.separatorKeys = [this.$mdConstant.KEY_CODE.ENTER]), -1 !== this.separatorKeys.indexOf(a.keyCode)) {
          if (this.hasAutocomplete && this.requireMatch || !b) return;a.preventDefault(), this.appendChip(b), this.resetChipBuffer();
        }
      }
    }, a.prototype.chipKeydown = function (a) {
      if (!this.getChipBuffer()) switch (a.keyCode) {case this.$mdConstant.KEY_CODE.BACKSPACE:case this.$mdConstant.KEY_CODE.DELETE:
          if (this.selectedChip < 0) return;a.preventDefault(), this.removeAndSelectAdjacentChip(this.selectedChip);break;case this.$mdConstant.KEY_CODE.LEFT_ARROW:
          a.preventDefault(), this.selectedChip < 0 && (this.selectedChip = this.items.length), this.items.length && this.selectAndFocusChipSafe(this.selectedChip - 1);break;case this.$mdConstant.KEY_CODE.RIGHT_ARROW:
          a.preventDefault(), this.selectAndFocusChipSafe(this.selectedChip + 1);break;case this.$mdConstant.KEY_CODE.ESCAPE:case this.$mdConstant.KEY_CODE.TAB:
          if (this.selectedChip < 0) return;a.preventDefault(), this.onFocus();}
    }, a.prototype.getPlaceholder = function () {
      return this.items.length && ("" == this.secondaryPlaceholder || this.secondaryPlaceholder) ? this.placeholder : this.secondaryPlaceholder;
    }, a.prototype.removeAndSelectAdjacentChip = function (a) {
      var c = this.getAdjacentChipIndex(a);this.removeChip(a), this.$timeout(b.bind(this, function () {
        this.selectAndFocusChipSafe(c);
      }));
    }, a.prototype.resetSelectedChip = function () {
      this.selectedChip = -1;
    }, a.prototype.getAdjacentChipIndex = function (a) {
      var b = this.items.length - 1;return 0 == b ? -1 : a == b ? a - 1 : a;
    }, a.prototype.appendChip = function (a) {
      if (this.useTransformChip && this.transformChip) {
        var c = this.transformChip({ $chip: a });b.isDefined(c) && (a = c);
      }if (b.isObject(a)) {
        if (this.items.some(function (c) {
          return b.equals(a, c);
        })) return;
      }if (!(null == a || this.items.indexOf(a) + 1)) {
        var e = this.items.push(a);this.useOnAdd && this.onAdd && this.onAdd({ $chip: a, $index: e });
      }
    }, a.prototype.useOnAppendExpression = function () {
      this.$log.warn("md-on-append is deprecated; please use md-transform-chip or md-on-add instead"), this.useTransformChip && this.transformChip || (this.useTransformChip = !0, this.transformChip = this.onAppend);
    }, a.prototype.useTransformChipExpression = function () {
      this.useTransformChip = !0;
    }, a.prototype.useOnAddExpression = function () {
      this.useOnAdd = !0;
    }, a.prototype.useOnRemoveExpression = function () {
      this.useOnRemove = !0;
    }, a.prototype.useOnSelectExpression = function () {
      this.useOnSelect = !0;
    }, a.prototype.getChipBuffer = function () {
      return this.userInputElement ? this.userInputNgModelCtrl ? this.userInputNgModelCtrl.$viewValue : this.userInputElement[0].value : this.chipBuffer;
    }, a.prototype.resetChipBuffer = function () {
      this.userInputElement ? this.userInputNgModelCtrl ? (this.userInputNgModelCtrl.$setViewValue(""), this.userInputNgModelCtrl.$render()) : this.userInputElement[0].value = "" : this.chipBuffer = "";
    }, a.prototype.removeChip = function (a) {
      var b = this.items.splice(a, 1);b && b.length && this.useOnRemove && this.onRemove && this.onRemove({ $chip: b[0], $index: a });
    }, a.prototype.removeChipAndFocusInput = function (a) {
      this.removeChip(a), this.onFocus();
    }, a.prototype.selectAndFocusChipSafe = function (a) {
      return this.items.length ? a === this.items.length ? this.onFocus() : (a = Math.max(a, 0), a = Math.min(a, this.items.length - 1), this.selectChip(a), void this.focusChip(a)) : (this.selectChip(-1), void this.onFocus());
    }, a.prototype.selectChip = function (a) {
      a >= -1 && a <= this.items.length ? (this.selectedChip = a, this.useOnSelect && this.onSelect && this.onSelect({ $chip: this.items[this.selectedChip] })) : this.$log.warn("Selected Chip index out of bounds; ignoring.");
    }, a.prototype.selectAndFocusChip = function (a) {
      this.selectChip(a), -1 != a && this.focusChip(a);
    }, a.prototype.focusChip = function (a) {
      this.$element[0].querySelector('md-chip[index="' + a + '"] .md-chip-content').focus();
    }, a.prototype.configureNgModel = function (a) {
      this.ngModelCtrl = a;var b = this;a.$render = function () {
        b.items = b.ngModelCtrl.$viewValue;
      };
    }, a.prototype.onFocus = function () {
      var a = this.$element[0].querySelector("input");a && a.focus(), this.resetSelectedChip();
    }, a.prototype.onInputFocus = function () {
      this.inputHasFocus = !0, this.resetSelectedChip();
    }, a.prototype.onInputBlur = function () {
      this.inputHasFocus = !1;
    }, a.prototype.configureUserInput = function (a) {
      this.userInputElement = a;var c = a.controller("ngModel");c != this.ngModelCtrl && (this.userInputNgModelCtrl = c);var d = this.$scope,
          e = this,
          f = function f(a, c) {
        d.$evalAsync(b.bind(e, c, a));
      };a.attr({ tabindex: 0 }).on("keydown", function (a) {
        f(a, e.inputKeydown);
      }).on("focus", function (a) {
        f(a, e.onInputFocus);
      }).on("blur", function (a) {
        f(a, e.onInputBlur);
      });
    }, a.prototype.configureAutocomplete = function (a) {
      a && (this.hasAutocomplete = !0, a.registerSelectedItemWatcher(b.bind(this, function (a) {
        a && (this.appendChip(a), this.resetChipBuffer());
      })), this.$element.find("input").on("focus", b.bind(this, this.onInputFocus)).on("blur", b.bind(this, this.onInputBlur)));
    }, a.prototype.hasFocus = function () {
      return this.inputHasFocus || this.selectedChip >= 0;
    };
  }(), function () {
    function a(a, b, g, h, i) {
      function j(c, d) {
        function e(a) {
          if (d.ngModel) {
            var b = f[0].querySelector(a);return b && b.outerHTML;
          }
        }var f = d.$mdUserTemplate;d.$mdUserTemplate = null;var j = e("md-chips>*[md-chip-remove]") || l.remove,
            k = e("md-chips>md-chip-template") || l.default,
            m = e("md-chips>md-autocomplete") || e("md-chips>input") || l.input,
            n = f.find("md-chip");return f[0].querySelector("md-chip-template>*[md-chip-remove]") && h.warn("invalid placement of md-chip-remove within md-chip-template."), function (c, e, f, h) {
          b.initOptionalProperties(c, d), a(e);var o = h[0];if (o.chipContentsTemplate = k, o.chipRemoveTemplate = j, o.chipInputTemplate = m, e.attr({ "aria-hidden": !0, tabindex: -1 }).on("focus", function () {
            o.onFocus();
          }), d.ngModel && (o.configureNgModel(e.controller("ngModel")), f.mdTransformChip && o.useTransformChipExpression(), f.mdOnAppend && o.useOnAppendExpression(), f.mdOnAdd && o.useOnAddExpression(), f.mdOnRemove && o.useOnRemoveExpression(), f.mdOnSelect && o.useOnSelectExpression(), m != l.input && c.$watch("$mdChipsCtrl.readonly", function (a) {
            a || b.nextTick(function () {
              0 === m.indexOf("<md-autocomplete") && o.configureAutocomplete(e.find("md-autocomplete").controller("mdAutocomplete")), o.configureUserInput(e.find("input"));
            });
          }), b.nextTick(function () {
            var a = e.find("input");a && a.toggleClass("md-input", !0);
          })), n.length > 0) {
            var p = g(n.clone())(c.$parent);i(function () {
              e.find("md-chips-wrap").prepend(p);
            });
          }
        };
      }function k() {
        return { chips: b.processTemplate(c), input: b.processTemplate(d), default: b.processTemplate(e), remove: b.processTemplate(f) };
      }var l = k();return { template: function template(a, b) {
          return b.$mdUserTemplate = a.clone(), l.chips;
        }, require: ["mdChips"], restrict: "E", controller: "MdChipsCtrl", controllerAs: "$mdChipsCtrl", bindToController: !0, compile: j, scope: { readonly: "=readonly", placeholder: "@", secondaryPlaceholder: "@", transformChip: "&mdTransformChip", onAppend: "&mdOnAppend", onAdd: "&mdOnAdd", onRemove: "&mdOnRemove", onSelect: "&mdOnSelect", deleteHint: "@", deleteButtonLabel: "@", separatorKeys: "=?mdSeparatorKeys", requireMatch: "=?mdRequireMatch" } };
    }b.module("material.components.chips").directive("mdChips", a);var c = '      <md-chips-wrap          ng-if="!$mdChipsCtrl.readonly || $mdChipsCtrl.items.length > 0"          ng-keydown="$mdChipsCtrl.chipKeydown($event)"          ng-class="{ \'md-focused\': $mdChipsCtrl.hasFocus(), \'md-readonly\': !$mdChipsCtrl.ngModelCtrl }"          class="md-chips">        <md-chip ng-repeat="$chip in $mdChipsCtrl.items"            index="{{$index}}"            ng-class="{\'md-focused\': $mdChipsCtrl.selectedChip == $index, \'md-readonly\': $mdChipsCtrl.readonly}">          <div class="md-chip-content"              tabindex="-1"              aria-hidden="true"              ng-focus="!$mdChipsCtrl.readonly && $mdChipsCtrl.selectChip($index)"              md-chip-transclude="$mdChipsCtrl.chipContentsTemplate"></div>          <div ng-if="!$mdChipsCtrl.readonly"               class="md-chip-remove-container"               md-chip-transclude="$mdChipsCtrl.chipRemoveTemplate"></div>        </md-chip>        <div ng-if="!$mdChipsCtrl.readonly && $mdChipsCtrl.ngModelCtrl"            class="md-chip-input-container"            md-chip-transclude="$mdChipsCtrl.chipInputTemplate"></div>        </div>      </md-chips-wrap>',
        d = '        <input            class="md-input"            tabindex="0"            placeholder="{{$mdChipsCtrl.getPlaceholder()}}"            aria-label="{{$mdChipsCtrl.getPlaceholder()}}"            ng-model="$mdChipsCtrl.chipBuffer"            ng-focus="$mdChipsCtrl.onInputFocus()"            ng-blur="$mdChipsCtrl.onInputBlur()"            ng-keydown="$mdChipsCtrl.inputKeydown($event)">',
        e = "      <span>{{$chip}}</span>",
        f = '      <button          class="md-chip-remove"          ng-if="!$mdChipsCtrl.readonly"          ng-click="$mdChipsCtrl.removeChipAndFocusInput($$replacedScope.$index)"          type="button"          aria-hidden="true"          tabindex="-1">        <md-icon md-svg-icon="md-close"></md-icon>        <span class="md-visually-hidden">          {{$mdChipsCtrl.deleteButtonLabel}}        </span>      </button>';a.$inject = ["$mdTheming", "$mdUtil", "$compile", "$log", "$timeout"];
  }(), function () {
    function a() {
      this.selectedItem = null, this.searchText = "";
    }b.module("material.components.chips").controller("MdContactChipsCtrl", a), a.prototype.queryContact = function (a) {
      var c = this.contactQuery({ $query: a });return this.filterSelected ? c.filter(b.bind(this, this.filterSelectedContacts)) : c;
    }, a.prototype.itemName = function (a) {
      return a[this.contactName];
    }, a.prototype.filterSelectedContacts = function (a) {
      return -1 == this.contacts.indexOf(a);
    };
  }(), function () {
    function a(a, b) {
      function d(c, d) {
        return function (c, e, f, g) {
          b.initOptionalProperties(c, d), a(e), e.attr("tabindex", "-1");
        };
      }return { template: function template(a, b) {
          return c;
        }, restrict: "E", controller: "MdContactChipsCtrl", controllerAs: "$mdContactChipsCtrl", bindToController: !0, compile: d, scope: { contactQuery: "&mdContacts", placeholder: "@", secondaryPlaceholder: "@", contactName: "@mdContactName", contactImage: "@mdContactImage", contactEmail: "@mdContactEmail", contacts: "=ngModel", requireMatch: "=?mdRequireMatch", highlightFlags: "@?mdHighlightFlags" } };
    }b.module("material.components.chips").directive("mdContactChips", a);var c = '      <md-chips class="md-contact-chips"          ng-model="$mdContactChipsCtrl.contacts"          md-require-match="$mdContactChipsCtrl.requireMatch"          md-autocomplete-snap>          <md-autocomplete              md-menu-class="md-contact-chips-suggestions"              md-selected-item="$mdContactChipsCtrl.selectedItem"              md-search-text="$mdContactChipsCtrl.searchText"              md-items="item in $mdContactChipsCtrl.queryContact($mdContactChipsCtrl.searchText)"              md-item-text="$mdContactChipsCtrl.itemName(item)"              md-no-cache="true"              md-autoselect              placeholder="{{$mdContactChipsCtrl.contacts.length == 0 ?                  $mdContactChipsCtrl.placeholder : $mdContactChipsCtrl.secondaryPlaceholder}}">            <div class="md-contact-suggestion">              <img                   ng-src="{{item[$mdContactChipsCtrl.contactImage]}}"                  alt="{{item[$mdContactChipsCtrl.contactName]}}"                  ng-if="item[$mdContactChipsCtrl.contactImage]" />              <span class="md-contact-name" md-highlight-text="$mdContactChipsCtrl.searchText"                    md-highlight-flags="{{$mdContactChipsCtrl.highlightFlags}}">                {{item[$mdContactChipsCtrl.contactName]}}              </span>              <span class="md-contact-email" >{{item[$mdContactChipsCtrl.contactEmail]}}</span>            </div>          </md-autocomplete>          <md-chip-template>            <div class="md-contact-avatar">              <img                   ng-src="{{$chip[$mdContactChipsCtrl.contactImage]}}"                  alt="{{$chip[$mdContactChipsCtrl.contactName]}}"                  ng-if="$chip[$mdContactChipsCtrl.contactImage]" />            </div>            <div class="md-contact-name">              {{$chip[$mdContactChipsCtrl.contactName]}}            </div>          </md-chip-template>      </md-chips>';a.$inject = ["$mdTheming", "$mdUtil"];
  }(), function () {
    function a(a, b, c) {
      function d(d, e, f) {
        function g() {
          var a = e.parent();return !(!a.attr("aria-label") && !a.text()) || !(!a.parent().attr("aria-label") && !a.parent().text());
        }function h() {
          d.svgIcon || d.svgSrc || (d.fontIcon && e.addClass("md-font " + d.fontIcon), e.addClass(a.fontSet(d.fontSet)));
        }b(e), h();var i = f.alt || d.fontIcon || d.svgIcon || e.text(),
            j = f.$normalize(f.$attr.mdSvgIcon || f.$attr.mdSvgSrc || "");f["aria-label"] || ("" == i || g() ? e.text() || c.expect(e, "aria-hidden", "true") : (c.expect(e, "aria-label", i), c.expect(e, "role", "img"))), j && f.$observe(j, function (b) {
          e.empty(), b && a(b).then(function (a) {
            e.append(a);
          });
        });
      }return { scope: { fontSet: "@mdFontSet", fontIcon: "@mdFontIcon", svgIcon: "@mdSvgIcon", svgSrc: "@mdSvgSrc" }, restrict: "E", link: d };
    }b.module("material.components.icon").directive("mdIcon", ["$mdIcon", "$mdTheming", "$mdAria", a]);
  }(), function () {
    function a() {}function c(a, b) {
      this.url = a, this.viewBoxSize = b || e.defaultViewBoxSize;
    }function d(a, c, d, e, f) {
      function g(b) {
        return b = b || "", r[b] ? d.when(r[b].clone()) : s.test(b) ? l(b).then(i(b)) : (-1 == b.indexOf(":") && (b = "$default:" + b), (a[b] ? j : k)(b).then(i(b)));
      }function h(c) {
        if (b.isUndefined(c) || !(c && c.length)) return a.defaultFontSet;var e = c;return b.forEach(a.fontSets, function (a) {
          a.alias == c && (e = a.fontSet || e);
        }), e;
      }function i(b) {
        return function (c) {
          return r[b] = n(c) ? c : new o(c, a[b]), r[b].clone();
        };
      }function j(b) {
        var c = a[b];return l(c.url).then(function (a) {
          return new o(a, c);
        });
      }function k(b) {
        function c(a) {
          var c = b.slice(b.lastIndexOf(":") + 1),
              d = a.querySelector("#" + c);return d ? new o(d, h) : f(b);
        }function f(a) {
          var b = "icon " + a + " not found";return e.warn(b), d.reject(b || a);
        }var g = b.substring(0, b.lastIndexOf(":")) || "$default",
            h = a[g];return h ? l(h.url).then(c) : f(b);
      }function l(a) {
        return c.get(a, { cache: f }).then(function (a) {
          return b.element("<div>").append(a.data).find("svg")[0];
        }).catch(m);
      }function m(a) {
        var c = b.isString(a) ? a : a.message || a.data || a.statusText;return e.warn(c), d.reject(c);
      }function n(a) {
        return b.isDefined(a.element) && b.isDefined(a.config);
      }function o(a, c) {
        a && "svg" != a.tagName && (a = b.element('<svg xmlns="http://www.w3.org/2000/svg">').append(a)[0]), a.getAttribute("xmlns") || a.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.element = a, this.config = c, this.prepare();
      }function p() {
        var c = this.config ? this.config.viewBoxSize : a.defaultViewBoxSize;b.forEach({ fit: "", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", viewBox: this.element.getAttribute("viewBox") || "0 0 " + c + " " + c }, function (a, b) {
          this.element.setAttribute(b, a);
        }, this), b.forEach({ "pointer-events": "none", display: "block" }, function (a, b) {
          this.element.style[b] = a;
        }, this);
      }function q() {
        return this.element.cloneNode(!0);
      }var r = {},
          s = /[-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?/i;return o.prototype = { clone: q, prepare: p }, g.fontSet = h, g;
    }b.module("material.components.icon").provider("$mdIcon", a);var e = { defaultViewBoxSize: 24, defaultFontSet: "material-icons", fontSets: [] };a.prototype = { icon: function icon(a, b, d) {
        return -1 == a.indexOf(":") && (a = "$default:" + a), e[a] = new c(b, d), this;
      }, iconSet: function iconSet(a, b, d) {
        return e[a] = new c(b, d), this;
      }, defaultIconSet: function defaultIconSet(a, b) {
        var d = "$default";return e[d] || (e[d] = new c(a, b)), e[d].viewBoxSize = b || e.defaultViewBoxSize, this;
      }, defaultViewBoxSize: function defaultViewBoxSize(a) {
        return e.defaultViewBoxSize = a, this;
      }, fontSet: function fontSet(a, b) {
        return e.fontSets.push({ alias: a, fontSet: b || a }), this;
      }, defaultFontSet: function defaultFontSet(a) {
        return e.defaultFontSet = a || "", this;
      }, defaultIconSize: function defaultIconSize(a) {
        return e.defaultIconSize = a, this;
      }, preloadIcons: function preloadIcons(a) {
        var b = this;[{ id: "md-tabs-arrow", url: "md-tabs-arrow.svg", svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><polygon points="15.4,7.4 14,6 8,12 14,18 15.4,16.6 10.8,12 "/></g></svg>' }, { id: "md-close", url: "md-close.svg", svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/></g></svg>' }, { id: "md-cancel", url: "md-cancel.svg", svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><path d="M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5 13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59 3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z"/></g></svg>' }, { id: "md-menu", url: "md-menu.svg", svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>' }, { id: "md-toggle-arrow", url: "md-toggle-arrow-svg", svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 48 48"><path d="M24 16l-12 12 2.83 2.83 9.17-9.17 9.17 9.17 2.83-2.83z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>' }, { id: "md-calendar", url: "md-calendar.svg", svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>' }].forEach(function (c) {
          b.icon(c.id, c.url), a.put(c.url, c.svg);
        });
      }, $get: ["$http", "$q", "$log", "$templateCache", function (a, b, c, f) {
        return this.preloadIcons(f), d(e, a, b, c, f);
      }] }, d.$inject = ["config", "$http", "$q", "$log", "$templateCache"];
  }(), function () {
    function a(a, d, e, f, g, h, i, j) {
      var k,
          l,
          m = this;this.nestLevel = parseInt(d.mdNestLevel, 10) || 0, this.init = function (a, c) {
        c = c || {}, k = a, l = e[0].querySelector("[ng-click],[ng-mouseenter]"), l.setAttribute("aria-expanded", "false"), this.isInMenuBar = c.isInMenuBar, this.nestedMenus = g.nodesToArray(k[0].querySelectorAll(".md-nested-menu")), k.on("$mdInterimElementRemove", function () {
          m.isOpen = !1;
        });var d = "menu_container_" + g.nextUid();k.attr("id", d), b.element(l).attr({ "aria-owns": d, "aria-haspopup": "true" }), f.$on("$destroy", this.disableHoverListener);
      };var n,
          o,
          p = [];this.enableHoverListener = function () {
        p.push(i.$on("$mdMenuOpen", function (a, b) {
          k[0].contains(b[0]) && (m.currentlyOpenMenu = b.controller("mdMenu"), m.isAlreadyOpening = !1, m.currentlyOpenMenu.registerContainerProxy(m.triggerContainerProxy.bind(m)));
        })), p.push(i.$on("$mdMenuClose", function (a, b) {
          k[0].contains(b[0]) && (m.currentlyOpenMenu = c);
        })), o = b.element(g.nodesToArray(k[0].children[0].children)), o.on("mouseenter", m.handleMenuItemHover), o.on("mouseleave", m.handleMenuItemMouseLeave);
      }, this.disableHoverListener = function () {
        for (; p.length;) {
          p.shift()();
        }o && o.off("mouseenter", m.handleMenuItemHover), o && o.off("mouseleave", m.handleMenuMouseLeave);
      }, this.handleMenuItemHover = function (a) {
        if (!m.isAlreadyOpening) {
          var c = a.target.querySelector("md-menu") || g.getClosest(a.target, "MD-MENU");n = h(function () {
            if (c && (c = b.element(c).controller("mdMenu")), m.currentlyOpenMenu && m.currentlyOpenMenu != c) {
              var a = m.nestLevel + 1;m.currentlyOpenMenu.close(!0, { closeTo: a });
            } else c && !c.isOpen && c.open && (m.isAlreadyOpening = !0, c.open());
          }, c ? 100 : 250);var d = a.currentTarget.querySelector("button:not([disabled])");d && d.focus();
        }
      }, this.handleMenuItemMouseLeave = function () {
        n && (h.cancel(n), n = c);
      }, this.open = function (b) {
        b && b.stopPropagation(), b && b.preventDefault(), m.isOpen || (m.enableHoverListener(), m.isOpen = !0, l = l || (b ? b.target : e[0]), l.setAttribute("aria-expanded", "true"), f.$emit("$mdMenuOpen", e), a.show({ scope: f, mdMenuCtrl: m, nestLevel: m.nestLevel, element: k, target: l, preserveElement: !0, parent: "body" }).finally(function () {
          l.setAttribute("aria-expanded", "false"), m.disableHoverListener();
        }));
      }, f.$mdOpenMenu = this.open, f.$watch(function () {
        return m.isOpen;
      }, function (a) {
        a ? (k.attr("aria-hidden", "false"), e[0].classList.add("md-open"), b.forEach(m.nestedMenus, function (a) {
          a.classList.remove("md-open");
        })) : (k.attr("aria-hidden", "true"), e[0].classList.remove("md-open")), f.$mdMenuIsOpen = m.isOpen;
      }), this.focusMenuContainer = function () {
        var a = k[0].querySelector("[md-menu-focus-target]");a || (a = k[0].querySelector(".md-button")), a.focus();
      }, this.registerContainerProxy = function (a) {
        this.containerProxy = a;
      }, this.triggerContainerProxy = function (a) {
        this.containerProxy && this.containerProxy(a);
      }, this.destroy = function () {
        return m.isOpen ? a.destroy() : j.when(!1);
      }, this.close = function (c, d) {
        if (m.isOpen) {
          m.isOpen = !1;var g = b.extend({}, d, { skipFocus: c });if (f.$emit("$mdMenuClose", e, g), a.hide(null, d), !c) {
            var h = m.restoreFocusTo || e.find("button")[0];h instanceof b.element && (h = h[0]), h && h.focus();
          }
        }
      }, this.positionMode = function () {
        var a = (d.mdPositionMode || "target").split(" ");return 1 == a.length && a.push(a[0]), { left: a[0], top: a[1] };
      }, this.offsets = function () {
        var a = (d.mdOffset || "0 0").split(" ").map(parseFloat);if (2 == a.length) return { left: a[0], top: a[1] };if (1 == a.length) return { top: a[0], left: a[0] };throw Error("Invalid offsets specified. Please follow format <x, y> or <n>");
      };
    }b.module("material.components.menu").controller("mdMenuCtrl", a), a.$inject = ["$mdMenu", "$attrs", "$element", "$scope", "$mdUtil", "$timeout", "$rootScope", "$q"];
  }(), function () {
    function a(a) {
      function d(c) {
        c.addClass("md-menu");var d = c.children()[0];if (d.hasAttribute("ng-click") || (d = d.querySelector("[ng-click],[ng-mouseenter]") || d), !d || "MD-BUTTON" != d.nodeName && "BUTTON" != d.nodeName || d.hasAttribute("type") || d.setAttribute("type", "button"), 2 != c.children().length) throw Error(f + "Expected two children elements.");d && d.setAttribute("aria-haspopup", "true");var g = c[0].querySelectorAll("md-menu"),
            h = parseInt(c[0].getAttribute("md-nest-level"), 10) || 0;return g && b.forEach(a.nodesToArray(g), function (a) {
          a.hasAttribute("md-position-mode") || a.setAttribute("md-position-mode", "cascade"), a.classList.add("md-nested-menu"), a.setAttribute("md-nest-level", h + 1);
        }), e;
      }function e(a, d, e, f) {
        var g = f[0],
            h = f[1] != c,
            i = b.element('<div class="md-open-menu-container md-whiteframe-z2"></div>'),
            j = d.children()[1];j.hasAttribute("role") || j.setAttribute("role", "menu"), i.append(j), d.on("$destroy", function () {
          i.remove();
        }), d.append(i), i[0].style.display = "none", g.init(i, { isInMenuBar: h });
      }var f = "Invalid HTML for md-menu: ";return { restrict: "E", require: ["mdMenu", "?^mdMenuBar"], controller: "mdMenuCtrl", scope: !0, compile: d };
    }b.module("material.components.menu").directive("mdMenu", a), a.$inject = ["$mdUtil"];
  }(), function () {
    function a(a) {
      function d(a, d, g, h, i, j, k, l, m) {
        function n(c, d, e) {
          return e.nestLevel ? b.noop : (e.disableParentScroll && !a.getClosest(e.target, "MD-DIALOG") ? e.restoreScroll = a.disableScrollAround(e.element, e.parent) : e.disableParentScroll = !1, e.hasBackdrop && (e.backdrop = a.createBackdrop(c, "md-menu-backdrop md-click-catcher"), m.enter(e.backdrop, h[0].body)), function () {
            e.backdrop && e.backdrop.remove(), e.disableParentScroll && e.restoreScroll();
          });
        }function o(a, b, c) {
          function d() {
            return l(b, { addClass: "md-leave" }).start();
          }function e() {
            b.removeClass("md-active"), s(b, c), c.alreadyOpen = !1;
          }return c.cleanupInteraction(), c.cleanupResizing(), c.hideBackdrop(), !0 === c.$destroy ? e() : d().then(e);
        }function p(c, e, f) {
          function h() {
            return f.parent.append(e), e[0].style.display = "", j(function (a) {
              var b = t(e, f);e.removeClass("md-leave"), l(e, { addClass: "md-active", from: u.toCss(b), to: u.toCss({ transform: "" }) }).start().then(a);
            });
          }function m() {
            if (!f.target) throw Error("$mdMenu.show() expected a target to animate from in options.target");b.extend(f, { alreadyOpen: !1, isRemoved: !1, target: b.element(f.target), parent: b.element(f.parent), menuContentEl: b.element(e[0].querySelector("md-menu-content")) });
          }function o() {
            var a = function (a, b) {
              return k.throttle(function () {
                if (!f.isRemoved) {
                  var c = t(a, b);a.css(u.toCss(c));
                }
              });
            }(e, f);return i.addEventListener("resize", a), i.addEventListener("orientationchange", a), function () {
              i.removeEventListener("resize", a), i.removeEventListener("orientationchange", a);
            };
          }function p() {
            function b(b) {
              var c;switch (b.keyCode) {case g.KEY_CODE.ESCAPE:
                  f.mdMenuCtrl.close(!1, { closeAll: !0 }), c = !0;break;case g.KEY_CODE.UP_ARROW:
                  q(b, f.menuContentEl, f, -1) || f.nestLevel || f.mdMenuCtrl.triggerContainerProxy(b), c = !0;break;case g.KEY_CODE.DOWN_ARROW:
                  q(b, f.menuContentEl, f, 1) || f.nestLevel || f.mdMenuCtrl.triggerContainerProxy(b), c = !0;break;case g.KEY_CODE.LEFT_ARROW:
                  f.nestLevel ? f.mdMenuCtrl.close() : f.mdMenuCtrl.triggerContainerProxy(b), c = !0;break;case g.KEY_CODE.RIGHT_ARROW:
                  var d = a.getClosest(b.target, "MD-MENU");d && d != f.parent[0] ? b.target.click() : f.mdMenuCtrl.triggerContainerProxy(b), c = !0;}c && (b.preventDefault(), b.stopImmediatePropagation());
            }function d(a) {
              a.preventDefault(), a.stopPropagation(), c.$apply(function () {
                f.mdMenuCtrl.close(!0, { closeAll: !0 });
              });
            }function h(b) {
              function d() {
                c.$apply(function () {
                  f.mdMenuCtrl.close(!0, { closeAll: !0 });
                });
              }function e(a, b) {
                if (!a) return !1;for (var c, d = 0; c = b[d]; ++d) {
                  for (var e, f = [c, "data-" + c, "x-" + c], g = 0; e = f[g]; ++g) {
                    if (a.hasAttribute(e)) return !0;
                  }
                }return !1;
              }var g = b.target;do {
                if (g == f.menuContentEl[0]) return;if ((e(g, ["ng-click", "ng-href", "ui-sref"]) || "BUTTON" == g.nodeName || "MD-BUTTON" == g.nodeName) && !e(g, ["md-prevent-menu-close"])) {
                  var h = a.getClosest(g, "MD-MENU");g.hasAttribute("disabled") || h && h != f.parent[0] || d();break;
                }
              } while (g = g.parentNode);
            }e.addClass("md-clickable"), f.backdrop && f.backdrop.on("click", d), f.menuContentEl.on("keydown", b), f.menuContentEl[0].addEventListener("click", h, !0);var i = f.menuContentEl[0].querySelector("[md-menu-focus-target]");if (!i) {
              var j = f.menuContentEl[0].firstElementChild;i = j && (j.querySelector(".md-button:not([disabled])") || j.firstElementChild);
            }return i && i.focus(), function () {
              e.removeClass("md-clickable"), f.backdrop && f.backdrop.off("click", d), f.menuContentEl.off("keydown", b), f.menuContentEl[0].removeEventListener("click", h, !0);
            };
          }return m(f), d.inherit(f.menuContentEl, f.target), f.cleanupResizing = o(), f.hideBackdrop = n(c, e, f), h().then(function (a) {
            return f.alreadyOpen = !0, f.cleanupInteraction = p(), a;
          });
        }function q(b, c, d, e) {
          for (var f, g = a.getClosest(b.target, "MD-MENU-ITEM"), h = a.nodesToArray(c[0].children), i = h.indexOf(g), j = i + e; j >= 0 && j < h.length; j += e) {
            if (f = r(h[j].querySelector(".md-button"))) break;
          }return f;
        }function r(a) {
          return a && -1 != a.getAttribute("tabindex") ? (a.focus(), h[0].activeElement == a) : void 0;
        }function s(a, b) {
          b.preserveElement ? e(a).style.display = "none" : e(a).parentNode === e(b.parent) && e(b.parent).removeChild(e(a));
        }function t(b, d) {
          function e(a) {
            a.top = Math.max(Math.min(a.top, s.bottom - k.offsetHeight), s.top), a.left = Math.max(Math.min(a.left, s.right - k.offsetWidth), s.left);
          }function g() {
            for (var a = 0; a < l.children.length; ++a) {
              if ("none" != i.getComputedStyle(l.children[a]).display) return l.children[a];
            }
          }var j,
              k = b[0],
              l = b[0].firstElementChild,
              m = l.getBoundingClientRect(),
              n = h[0].body,
              o = n.getBoundingClientRect(),
              p = i.getComputedStyle(l),
              q = d.target[0].querySelector("[md-menu-origin]") || d.target[0],
              r = q.getBoundingClientRect(),
              s = { left: o.left + f, top: Math.max(o.top, 0) + f, bottom: Math.max(o.bottom, Math.max(o.top, 0) + o.height) - f, right: o.right - f },
              t = { top: 0, left: 0, right: 0, bottom: 0 },
              u = { top: 0, left: 0, right: 0, bottom: 0 },
              v = d.mdMenuCtrl.positionMode();("target" == v.top || "target" == v.left || "target-right" == v.left) && (j = g()) && (j = j.firstElementChild || j, j = j.querySelector("[md-menu-align-target]") || j, t = j.getBoundingClientRect(), u = { top: parseFloat(k.style.top || 0), left: parseFloat(k.style.left || 0) });var w = {},
              x = "top ";switch (v.top) {case "target":
              w.top = u.top + r.top - t.top;break;case "cascade":
              w.top = r.top - parseFloat(p.paddingTop) - q.style.top;break;case "bottom":
              w.top = r.top + r.height;break;default:
              throw new Error('Invalid target mode "' + v.top + '" specified for md-menu on Y axis.');}switch (v.left) {case "target":
              w.left = u.left + r.left - t.left, x += "left";break;case "target-right":
              w.left = r.right - m.width + (m.right - t.right), x += "right";break;case "cascade":
              var y = r.right + m.width < s.right;w.left = y ? r.right - q.style.left : r.left - q.style.left - m.width, x += y ? "left" : "right";break;case "left":
              w.left = r.left, x += "left";break;default:
              throw new Error('Invalid target mode "' + v.left + '" specified for md-menu on X axis.');}var z = d.mdMenuCtrl.offsets();w.top += z.top, w.left += z.left, e(w);var A = Math.round(100 * Math.min(r.width / k.offsetWidth, 1)) / 100,
              B = Math.round(100 * Math.min(r.height / k.offsetHeight, 1)) / 100;return { top: Math.round(w.top), left: Math.round(w.left), transform: d.alreadyOpen ? c : a.supplant("scale({0},{1})", [A, B]), transformOrigin: x };
        }var u = a.dom.animator;return { parent: "body", onShow: p, onRemove: o, hasBackdrop: !0, disableParentScroll: !0, skipCompile: !0, preserveScope: !0, skipHide: !0, themable: !0 };
      }function e(a) {
        return a instanceof b.element && (a = a[0]), a;
      }var f = 8;return d.$inject = ["$mdUtil", "$mdTheming", "$mdConstant", "$document", "$window", "$q", "$$rAF", "$animateCss", "$animate"], a("$mdMenu").setDefaults({ methods: ["target"], options: d });
    }b.module("material.components.menu").provider("$mdMenu", a), a.$inject = ["$$interimElementProvider"];
  }(), function () {
    function a(a, c, e, f, g, h, i, j) {
      this.$element = e, this.$attrs = f, this.$mdConstant = g, this.$mdUtil = i, this.$document = h, this.$scope = a, this.$rootScope = c, this.$timeout = j;var k = this;b.forEach(d, function (a) {
        k[a] = b.bind(k, k[a]);
      });
    }b.module("material.components.menuBar").controller("MenuBarController", a);var d = ["handleKeyDown", "handleMenuHover", "scheduleOpenHoveredMenu", "cancelScheduledOpen"];a.$inject = ["$scope", "$rootScope", "$element", "$attrs", "$mdConstant", "$document", "$mdUtil", "$timeout"], a.prototype.init = function () {
      var a = this.$element,
          b = this.$mdUtil,
          d = this.$scope,
          e = this,
          f = [];a.on("keydown", this.handleKeyDown), this.parentToolbar = b.getClosest(a, "MD-TOOLBAR"), f.push(this.$rootScope.$on("$mdMenuOpen", function (b, c) {
        -1 != e.getMenus().indexOf(c[0]) && (a[0].classList.add("md-open"), c[0].classList.add("md-open"), e.currentlyOpenMenu = c.controller("mdMenu"), e.currentlyOpenMenu.registerContainerProxy(e.handleKeyDown), e.enableOpenOnHover());
      })), f.push(this.$rootScope.$on("$mdMenuClose", function (d, f, g) {
        var h = e.getMenus();if (-1 != h.indexOf(f[0]) && (a[0].classList.remove("md-open"), f[0].classList.remove("md-open")), a[0].contains(f[0])) {
          for (var i = f[0]; i && -1 == h.indexOf(i);) {
            i = b.getClosest(i, "MD-MENU", !0);
          }i && (g.skipFocus || i.querySelector("button:not([disabled])").focus(), e.currentlyOpenMenu = c, e.disableOpenOnHover(), e.setKeyboardMode(!0));
        }
      })), d.$on("$destroy", function () {
        for (; f.length;) {
          f.shift()();
        }
      }), this.setKeyboardMode(!0);
    }, a.prototype.setKeyboardMode = function (a) {
      a ? this.$element[0].classList.add("md-keyboard-mode") : this.$element[0].classList.remove("md-keyboard-mode");
    }, a.prototype.enableOpenOnHover = function () {
      if (!this.openOnHoverEnabled) {
        this.openOnHoverEnabled = !0;var a;(a = this.parentToolbar) && (a.dataset.mdRestoreStyle = a.getAttribute("style"), a.style.position = "relative", a.style.zIndex = 100), b.element(this.getMenus()).on("mouseenter", this.handleMenuHover);
      }
    }, a.prototype.handleMenuHover = function (a) {
      this.setKeyboardMode(!1), this.openOnHoverEnabled && this.scheduleOpenHoveredMenu(a);
    }, a.prototype.disableOpenOnHover = function () {
      if (this.openOnHoverEnabled) {
        this.openOnHoverEnabled = !1;var a;(a = this.parentToolbar) && a.setAttribute("style", a.dataset.mdRestoreStyle || ""), b.element(this.getMenus()).off("mouseenter", this.handleMenuHover);
      }
    }, a.prototype.scheduleOpenHoveredMenu = function (a) {
      var c = b.element(a.currentTarget),
          d = c.controller("mdMenu");this.setKeyboardMode(!1), this.scheduleOpenMenu(d);
    }, a.prototype.scheduleOpenMenu = function (a) {
      var b = this,
          d = this.$timeout;a != b.currentlyOpenMenu && (d.cancel(b.pendingMenuOpen), b.pendingMenuOpen = d(function () {
        b.pendingMenuOpen = c, b.currentlyOpenMenu && b.currentlyOpenMenu.close(!0, { closeAll: !0 }), a.open();
      }, 200, !1));
    }, a.prototype.handleKeyDown = function (a) {
      var c = this.$mdConstant.KEY_CODE,
          d = this.currentlyOpenMenu,
          e = d && d.isOpen;this.setKeyboardMode(!0);var f, g, h;switch (a.keyCode) {case c.DOWN_ARROW:
          d ? d.focusMenuContainer() : this.openFocusedMenu(), f = !0;break;case c.UP_ARROW:
          d && d.close(), f = !0;break;case c.LEFT_ARROW:
          g = this.focusMenu(-1), e && (h = b.element(g).controller("mdMenu"), this.scheduleOpenMenu(h)), f = !0;break;case c.RIGHT_ARROW:
          g = this.focusMenu(1), e && (h = b.element(g).controller("mdMenu"), this.scheduleOpenMenu(h)), f = !0;}f && (a && a.preventDefault && a.preventDefault(), a && a.stopImmediatePropagation && a.stopImmediatePropagation());
    }, a.prototype.focusMenu = function (a) {
      var b = this.getMenus(),
          c = this.getFocusedMenuIndex();-1 == c && (c = this.getOpenMenuIndex());var d = !1;return -1 == c ? c = 0 : (0 > a && c > 0 || a > 0 && c < b.length - a) && (c += a, d = !0), d ? (b[c].querySelector("button").focus(), b[c]) : void 0;
    }, a.prototype.openFocusedMenu = function () {
      var a = this.getFocusedMenu();a && b.element(a).controller("mdMenu").open();
    }, a.prototype.getMenus = function () {
      var a = this.$element;return this.$mdUtil.nodesToArray(a[0].children).filter(function (a) {
        return "MD-MENU" == a.nodeName;
      });
    }, a.prototype.getFocusedMenu = function () {
      return this.getMenus()[this.getFocusedMenuIndex()];
    }, a.prototype.getFocusedMenuIndex = function () {
      var a = this.$mdUtil,
          b = a.getClosest(this.$document[0].activeElement, "MD-MENU");return b ? this.getMenus().indexOf(b) : -1;
    }, a.prototype.getOpenMenuIndex = function () {
      for (var a = this.getMenus(), b = 0; b < a.length; ++b) {
        if (a[b].classList.contains("md-open")) return b;
      }return -1;
    };
  }(), function () {
    function a(a, c) {
      return { restrict: "E", require: "mdMenuBar", controller: "MenuBarController", compile: function compile(d, e) {
          return e.ariaRole || d[0].setAttribute("role", "menubar"), b.forEach(d[0].children, function (c) {
            if ("MD-MENU" == c.nodeName) {
              c.hasAttribute("md-position-mode") || (c.setAttribute("md-position-mode", "left bottom"), c.querySelector("button,a").setAttribute("role", "menuitem"));var d = a.nodesToArray(c.querySelectorAll("md-menu-content"));b.forEach(d, function (a) {
                a.classList.add("md-menu-bar-menu"), a.classList.add("md-dense"), a.hasAttribute("width") || a.setAttribute("width", 5);
              });
            }
          }), function (a, b, d, e) {
            c(a, b), e.init();
          };
        } };
    }b.module("material.components.menuBar").directive("mdMenuBar", a), a.$inject = ["$mdUtil", "$mdTheming"];
  }(), function () {
    function a() {
      return { restrict: "E", compile: function compile(a, b) {
          b.role || a[0].setAttribute("role", "separator");
        } };
    }b.module("material.components.menuBar").directive("mdMenuDivider", a);
  }(), function () {
    function a(a, b, c) {
      this.$element = b, this.$attrs = c, this.$scope = a;
    }b.module("material.components.menuBar").controller("MenuItemController", a), a.$inject = ["$scope", "$element", "$attrs"], a.prototype.init = function (a) {
      var b = this.$element,
          c = this.$attrs;this.ngModel = a, ("checkbox" == c.type || "radio" == c.type) && (this.mode = c.type, this.iconEl = b[0].children[0], this.buttonEl = b[0].children[1], a && this.initClickListeners());
    }, a.prototype.clearNgAria = function () {
      var a = this.$element[0],
          c = ["role", "tabindex", "aria-invalid", "aria-checked"];b.forEach(c, function (b) {
        a.removeAttribute(b);
      });
    }, a.prototype.initClickListeners = function () {
      function a() {
        if ("radio" == h) {
          var a = g.ngValue ? f.$eval(g.ngValue) : g.value;return e.$modelValue == a;
        }return e.$modelValue;
      }function c(a) {
        a ? j.off("click", k) : j.on("click", k);
      }var d = this,
          e = this.ngModel,
          f = this.$scope,
          g = this.$attrs,
          h = (this.$element, this.mode);this.handleClick = b.bind(this, this.handleClick);var i = this.iconEl,
          j = b.element(this.buttonEl),
          k = this.handleClick;g.$observe("disabled", c), c(g.disabled), e.$render = function () {
        d.clearNgAria(), a() ? (i.style.display = "", j.attr("aria-checked", "true")) : (i.style.display = "none", j.attr("aria-checked", "false"));
      }, f.$$postDigest(e.$render);
    }, a.prototype.handleClick = function (a) {
      var b,
          c = this.mode,
          d = this.ngModel,
          e = this.$attrs;"checkbox" == c ? b = !d.$modelValue : "radio" == c && (b = e.ngValue ? this.$scope.$eval(e.ngValue) : e.value), d.$setViewValue(b), d.$render();
    };
  }(), function () {
    function a() {
      return { require: ["mdMenuItem", "?ngModel"], priority: 210, compile: function compile(a, c) {
          function d(c, d, e) {
            e = e || a, e instanceof b.element && (e = e[0]), e.hasAttribute(c) || e.setAttribute(c, d);
          }function e(b) {
            if (a[0].hasAttribute(b)) {
              var c = a[0].getAttribute(b);g[0].setAttribute(b, c), a[0].removeAttribute(b);
            }
          }if ("checkbox" == c.type || "radio" == c.type) {
            var f = a[0].textContent,
                g = b.element('<md-button type="button"></md-button>');g.html(f), g.attr("tabindex", "0"), a.html(""), a.append(b.element('<md-icon md-svg-icon="check"></md-icon>')), a.append(g), a[0].classList.add("md-indent"), d("role", "checkbox" == c.type ? "menuitemcheckbox" : "menuitemradio", g), b.forEach(["ng-disabled"], e);
          } else d("role", "menuitem", a[0].querySelector("md-button,button,a"));return function (a, b, c, d) {
            var e = d[0],
                f = d[1];e.init(f);
          };
        }, controller: "MenuItemController" };
    }b.module("material.components.menuBar").directive("mdMenuItem", a);
  }(), function () {
    function a() {
      function a(a, d, e, f) {
        if (f) {
          var g = f.getTabElementIndex(d),
              h = c(d, "md-tab-body").remove(),
              i = c(d, "md-tab-label").remove(),
              j = f.insertTab({ scope: a, parent: a.$parent, index: g, element: d, template: h.html(), label: i.html() }, g);a.select = a.select || b.noop, a.deselect = a.deselect || b.noop, a.$watch("active", function (a) {
            a && f.select(j.getIndex());
          }), a.$watch("disabled", function () {
            f.refreshIndex();
          }), a.$watch(function () {
            return f.getTabElementIndex(d);
          }, function (a) {
            j.index = a, f.updateTabOrder();
          }), a.$on("$destroy", function () {
            f.removeTab(j);
          });
        }
      }function c(a, c) {
        for (var d = a[0].children, e = 0, f = d.length; f > e; e++) {
          var g = d[e];if (g.tagName === c.toUpperCase()) return b.element(g);
        }return b.element();
      }return { require: "^?mdTabs", terminal: !0, compile: function compile(d, e) {
          var f = c(d, "md-tab-label"),
              g = c(d, "md-tab-body");if (0 == f.length && (f = b.element("<md-tab-label></md-tab-label>"), e.label ? f.text(e.label) : f.append(d.contents()), 0 == g.length)) {
            var h = d.contents().detach();g = b.element("<md-tab-body></md-tab-body>"), g.append(h);
          }return d.append(f), g.html() && d.append(g), a;
        }, scope: { active: "=?mdActive", disabled: "=?ngDisabled", select: "&?mdOnSelect", deselect: "&?mdOnDeselect" } };
    }b.module("material.components.tabs").directive("mdTab", a);
  }(), function () {
    function a() {
      return { require: "^?mdTabs", link: function link(a, b, c, d) {
          d && d.attachRipple(a, b);
        } };
    }b.module("material.components.tabs").directive("mdTabItem", a);
  }(), function () {
    function a() {
      return { terminal: !0 };
    }b.module("material.components.tabs").directive("mdTabLabel", a);
  }(), function () {
    function a(a) {
      return { restrict: "A", compile: function compile(b, c) {
          var d = a(c.mdTabScroll, null, !0);return function (a, b) {
            b.on("mousewheel", function (b) {
              a.$apply(function () {
                d(a, { $event: b });
              });
            });
          };
        } };
    }b.module("material.components.tabs").directive("mdTabScroll", a), a.$inject = ["$parse"];
  }(), function () {
    function a(a, d, e, f, g, h, i, j, k, l) {
      function m() {
        ia.selectedIndex = ia.selectedIndex || 0, n(), p(), o(), l(d), h.nextTick(function () {
          da(), _(), ea(), ia.tabs[ia.selectedIndex] && ia.tabs[ia.selectedIndex].scope.select(), na = !0, V();
        });
      }function n() {
        var a = j.$mdTabsTemplate,
            c = b.element(ka.data);c.html(a), k(c.contents())(ia.parent), delete j.$mdTabsTemplate;
      }function o() {
        b.element(e).on("resize", I), a.$on("$destroy", s);
      }function p() {
        a.$watch("$mdTabsCtrl.selectedIndex", A);
      }function q(a, b) {
        var c = j.$normalize("md-" + a);b && U(a, b), j.$observe(c, function (b) {
          ia[a] = b;
        });
      }function r(a, b) {
        function c(b) {
          ia[a] = "false" !== b;
        }var d = j.$normalize("md-" + a);b && U(a, b), j.hasOwnProperty(d) && c(j[d]), j.$observe(d, c);
      }function s() {
        ma = !0, b.element(e).off("resize", I);
      }function t(a) {
        b.element(ka.wrapper).toggleClass("md-stretch-tabs", Q()), ea();
      }function u(a) {
        ia.shouldCenterTabs = R();
      }function v(a, b) {
        a !== b && h.nextTick(ia.updateInkBarStyles);
      }function w(a, b) {
        a !== b && (ia.maxTabWidth = X(), ia.shouldCenterTabs = R(), h.nextTick(function () {
          ia.maxTabWidth = X(), _(ia.selectedIndex);
        }));
      }function x(a) {
        d[a ? "removeClass" : "addClass"]("md-no-tab-content");
      }function y(c) {
        var d = ia.shouldCenterTabs ? "" : "-" + c + "px";b.element(ka.paging).css(f.CSS.TRANSFORM, "translate3d(" + d + ", 0, 0)"), a.$broadcast("$mdTabsPaginationChanged");
      }function z(a, b) {
        a !== b && ka.tabs[a] && (_(), $());
      }function A(b, c) {
        b !== c && (ia.selectedIndex = T(b), ia.lastSelectedIndex = c, ia.updateInkBarStyles(), da(), _(b), a.$broadcast("$mdTabsChanged"), ia.tabs[c] && ia.tabs[c].scope.deselect(), ia.tabs[b] && ia.tabs[b].scope.select());
      }function B(a) {
        var b = d[0].getElementsByTagName("md-tab");return Array.prototype.indexOf.call(b, a[0]);
      }function C() {
        C.watcher || (C.watcher = a.$watch(function () {
          h.nextTick(function () {
            C.watcher && d.prop("offsetParent") && (C.watcher(), C.watcher = null, I());
          }, !1);
        }));
      }function D(a) {
        switch (a.keyCode) {case f.KEY_CODE.LEFT_ARROW:
            a.preventDefault(), Z(-1, !0);break;case f.KEY_CODE.RIGHT_ARROW:
            a.preventDefault(), Z(1, !0);break;case f.KEY_CODE.SPACE:case f.KEY_CODE.ENTER:
            a.preventDefault(), ja || (ia.selectedIndex = ia.focusIndex);}ia.lastClick = !1;
      }function E(a) {
        ja || (ia.focusIndex = ia.selectedIndex = a), ia.lastClick = !0, h.nextTick(function () {
          ia.tabs[a].element.triggerHandler("click");
        }, !1);
      }function F(a) {
        ia.shouldPaginate && (a.preventDefault(), ia.offsetLeft = ga(ia.offsetLeft - a.wheelDelta));
      }function G() {
        var a,
            b,
            c = ka.canvas.clientWidth,
            d = c + ia.offsetLeft;for (a = 0; a < ka.tabs.length && (b = ka.tabs[a], !(b.offsetLeft + b.offsetWidth > d)); a++) {}ia.offsetLeft = ga(b.offsetLeft);
      }function H() {
        var a, b;for (a = 0; a < ka.tabs.length && (b = ka.tabs[a], !(b.offsetLeft + b.offsetWidth >= ia.offsetLeft)); a++) {}ia.offsetLeft = ga(b.offsetLeft + b.offsetWidth - ka.canvas.clientWidth);
      }function I() {
        ia.lastSelectedIndex = ia.selectedIndex, ia.offsetLeft = ga(ia.offsetLeft), h.nextTick(function () {
          ia.updateInkBarStyles(), V();
        });
      }function J(a) {
        b.element(ka.inkBar).toggleClass("ng-hide", a);
      }function K(a) {
        d.toggleClass("md-dynamic-height", a);
      }function L(a) {
        if (!ma) {
          var b = ia.selectedIndex,
              c = ia.tabs.splice(a.getIndex(), 1)[0];ca(), ia.selectedIndex === b && (c.scope.deselect(), ia.tabs[ia.selectedIndex] && ia.tabs[ia.selectedIndex].scope.select()), h.nextTick(function () {
            V(), ia.offsetLeft = ga(ia.offsetLeft);
          });
        }
      }function M(a, c) {
        var d = na,
            e = { getIndex: function getIndex() {
            return ia.tabs.indexOf(f);
          }, isActive: function isActive() {
            return this.getIndex() === ia.selectedIndex;
          }, isLeft: function isLeft() {
            return this.getIndex() < ia.selectedIndex;
          }, isRight: function isRight() {
            return this.getIndex() > ia.selectedIndex;
          }, shouldRender: function shouldRender() {
            return !ia.noDisconnect || this.isActive();
          }, hasFocus: function hasFocus() {
            return !ia.lastClick && ia.hasFocus && this.getIndex() === ia.focusIndex;
          }, id: h.nextUid() },
            f = b.extend(e, a);return b.isDefined(c) ? ia.tabs.splice(c, 0, f) : ia.tabs.push(f), aa(), ba(), h.nextTick(function () {
          V(), d && ia.autoselect && h.nextTick(function () {
            h.nextTick(function () {
              E(ia.tabs.indexOf(f));
            });
          });
        }), f;
      }function N() {
        var a = {};return a.wrapper = d[0].getElementsByTagName("md-tabs-wrapper")[0], a.data = d[0].getElementsByTagName("md-tab-data")[0], a.canvas = a.wrapper.getElementsByTagName("md-tabs-canvas")[0], a.paging = a.canvas.getElementsByTagName("md-pagination-wrapper")[0], a.tabs = a.paging.getElementsByTagName("md-tab-item"), a.dummies = a.canvas.getElementsByTagName("md-dummy-tab"), a.inkBar = a.paging.getElementsByTagName("md-ink-bar")[0], a.contentsWrapper = d[0].getElementsByTagName("md-tabs-content-wrapper")[0], a.contents = a.contentsWrapper.getElementsByTagName("md-tab-content"), a;
      }function O() {
        return ia.offsetLeft > 0;
      }function P() {
        var a = ka.tabs[ka.tabs.length - 1];return a && a.offsetLeft + a.offsetWidth > ka.canvas.clientWidth + ia.offsetLeft;
      }function Q() {
        switch (ia.stretchTabs) {case "always":
            return !0;case "never":
            return !1;default:
            return !ia.shouldPaginate && e.matchMedia("(max-width: 600px)").matches;}
      }function R() {
        return ia.centerTabs && !ia.shouldPaginate;
      }function S() {
        if (ia.noPagination || !na) return !1;var a = d.prop("clientWidth");return b.forEach(N().dummies, function (b) {
          a -= b.offsetWidth;
        }), 0 > a;
      }function T(a) {
        if (-1 === a) return -1;var b,
            c,
            d = Math.max(ia.tabs.length - a, a);for (b = 0; d >= b; b++) {
          if ((c = ia.tabs[a + b]) && !0 !== c.scope.disabled) return c.getIndex();if ((c = ia.tabs[a - b]) && !0 !== c.scope.disabled) return c.getIndex();
        }return a;
      }function U(a, b, c) {
        Object.defineProperty(ia, a, { get: function get() {
            return c;
          }, set: function set(a) {
            var d = c;c = a, b && b(a, d);
          } });
      }function V() {
        Q() || W(), ia.maxTabWidth = X(), ia.shouldPaginate = S();
      }function W() {
        var a = 1;b.forEach(N().dummies, function (b) {
          a += Math.ceil(b.offsetWidth);
        }), b.element(ka.paging).css("width", a + "px");
      }function X() {
        return d.prop("clientWidth");
      }function Y() {
        var a = ia.tabs[ia.selectedIndex],
            b = ia.tabs[ia.focusIndex];ia.tabs = ia.tabs.sort(function (a, b) {
          return a.index - b.index;
        }), ia.selectedIndex = ia.tabs.indexOf(a), ia.focusIndex = ia.tabs.indexOf(b);
      }function Z(a, b) {
        var c,
            d = b ? "focusIndex" : "selectedIndex",
            e = ia[d];for (c = e + a; ia.tabs[c] && ia.tabs[c].scope.disabled; c += a) {}ia.tabs[c] && (ia[d] = c);
      }function $() {
        N().dummies[ia.focusIndex].focus();
      }function _(a) {
        if (null == a && (a = ia.focusIndex), ka.tabs[a] && !ia.shouldCenterTabs) {
          var b = ka.tabs[a],
              c = b.offsetLeft,
              d = b.offsetWidth + c;ia.offsetLeft = Math.max(ia.offsetLeft, ga(d - ka.canvas.clientWidth + 64)), ia.offsetLeft = Math.min(ia.offsetLeft, ga(c));
        }
      }function aa() {
        la.forEach(function (a) {
          h.nextTick(a);
        }), la = [];
      }function ba() {
        var a = !1;b.forEach(ia.tabs, function (b) {
          b.template && (a = !0);
        }), ia.hasContent = a;
      }function ca() {
        ia.selectedIndex = T(ia.selectedIndex), ia.focusIndex = T(ia.focusIndex);
      }function da() {
        if (!ia.dynamicHeight) return d.css("height", "");if (!ia.tabs.length) return la.push(da);var a = ka.contents[ia.selectedIndex],
            b = a ? a.offsetHeight : 0,
            e = ka.wrapper.offsetHeight,
            f = b + e,
            g = d.prop("clientHeight");if (g !== f) {
          "bottom" === d.attr("md-align-tabs") && (g -= e, f -= e, d.attr("md-border-bottom") !== c && ++g), ja = !0;var j = { height: g + "px" },
              k = { height: f + "px" };d.css(j), i(d, { from: j, to: k, easing: "cubic-bezier(0.35, 0, 0.25, 1)", duration: .5 }).start().done(function () {
            d.css({ transition: "none", height: "" }), h.nextTick(function () {
              d.css("transition", "");
            }), ja = !1;
          });
        }
      }function ea() {
        if (!ka.tabs[ia.selectedIndex]) return void b.element(ka.inkBar).css({ left: "auto", right: "auto" });if (!ia.tabs.length) return la.push(ia.updateInkBarStyles);if (!d.prop("offsetParent")) return C();var a,
            c = ia.selectedIndex,
            e = ka.paging.offsetWidth,
            f = ka.tabs[c],
            g = f.offsetLeft,
            i = e - g - f.offsetWidth;ia.shouldCenterTabs && (a = Array.prototype.slice.call(ka.tabs).reduce(function (a, b) {
          return a + b.offsetWidth;
        }, 0), e > a && h.nextTick(ea, !1)), fa(), b.element(ka.inkBar).css({ left: g + "px", right: i + "px" });
      }function fa() {
        var a = ia.selectedIndex,
            c = ia.lastSelectedIndex,
            d = b.element(ka.inkBar);b.isNumber(c) && d.toggleClass("md-left", c > a).toggleClass("md-right", a > c);
      }function ga(a) {
        if (!ka.tabs.length || !ia.shouldPaginate) return 0;var b = ka.tabs[ka.tabs.length - 1],
            c = b.offsetLeft + b.offsetWidth;return a = Math.max(0, a), a = Math.min(c - ka.canvas.clientWidth, a);
      }function ha(a, c) {
        var d = { colorElement: b.element(ka.inkBar) };g.attach(a, c, d);
      }var ia = this,
          ja = !1,
          ka = N(),
          la = [],
          ma = !1,
          na = !1;q("stretchTabs", t), U("focusIndex", z, ia.selectedIndex || 0), U("offsetLeft", y, 0), U("hasContent", x, !1), U("maxTabWidth", v, X()), U("shouldPaginate", w, !1), r("noInkBar", J), r("dynamicHeight", K), r("noPagination"), r("swipeContent"), r("noDisconnect"), r("autoselect"), r("centerTabs", u, !1), r("enableDisconnect"), ia.scope = a, ia.parent = a.$parent, ia.tabs = [], ia.lastSelectedIndex = null, ia.hasFocus = !1, ia.lastClick = !0, ia.shouldCenterTabs = R(), ia.updatePagination = h.debounce(V, 100), ia.redirectFocus = $, ia.attachRipple = ha, ia.insertTab = M, ia.removeTab = L, ia.select = E, ia.scroll = F, ia.nextPage = G, ia.previousPage = H, ia.keydown = D, ia.canPageForward = P, ia.canPageBack = O, ia.refreshIndex = ca, ia.incrementIndex = Z, ia.getTabElementIndex = B, ia.updateInkBarStyles = h.debounce(ea, 100), ia.updateTabOrder = h.debounce(Y, 100), m();
    }b.module("material.components.tabs").controller("MdTabsController", a), a.$inject = ["$scope", "$element", "$window", "$mdConstant", "$mdTabInkRipple", "$mdUtil", "$animateCss", "$attrs", "$compile", "$mdTheming"];
  }(), function () {
    function a() {
      return { scope: { selectedIndex: "=?mdSelected" }, template: function template(a, b) {
          return b.$mdTabsTemplate = a.html(), '<md-tabs-wrapper> <md-tab-data></md-tab-data> <md-prev-button tabindex="-1" role="button" aria-label="Previous Page" aria-disabled="{{!$mdTabsCtrl.canPageBack()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageBack() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.previousPage()"> <md-icon md-svg-icon="md-tabs-arrow"></md-icon> </md-prev-button> <md-next-button tabindex="-1" role="button" aria-label="Next Page" aria-disabled="{{!$mdTabsCtrl.canPageForward()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageForward() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.nextPage()"> <md-icon md-svg-icon="md-tabs-arrow"></md-icon> </md-next-button> <md-tabs-canvas tabindex="{{ $mdTabsCtrl.hasFocus ? -1 : 0 }}" aria-activedescendant="tab-item-{{$mdTabsCtrl.tabs[$mdTabsCtrl.focusIndex].id}}" ng-focus="$mdTabsCtrl.redirectFocus()" ng-class="{ \'md-paginated\': $mdTabsCtrl.shouldPaginate, \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" ng-keydown="$mdTabsCtrl.keydown($event)" role="tablist"> <md-pagination-wrapper ng-class="{ \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" md-tab-scroll="$mdTabsCtrl.scroll($event)"> <md-tab-item tabindex="-1" class="md-tab" style="max-width: {{ $mdTabsCtrl.maxTabWidth + \'px\' }}" ng-repeat="tab in $mdTabsCtrl.tabs" role="tab" aria-controls="tab-content-{{::tab.id}}" aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-click="$mdTabsCtrl.select(tab.getIndex())" ng-class="{ \'md-active\':    tab.isActive(), \'md-focused\':   tab.hasFocus(), \'md-disabled\':  tab.scope.disabled }" ng-disabled="tab.scope.disabled" md-swipe-left="$mdTabsCtrl.nextPage()" md-swipe-right="$mdTabsCtrl.previousPage()" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-tab-item> <md-ink-bar></md-ink-bar> </md-pagination-wrapper> <div class="md-visually-hidden md-dummy-wrapper"> <md-dummy-tab class="md-tab" tabindex="-1" id="tab-item-{{::tab.id}}" role="tab" aria-controls="tab-content-{{::tab.id}}" aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-focus="$mdTabsCtrl.hasFocus = true" ng-blur="$mdTabsCtrl.hasFocus = false" ng-repeat="tab in $mdTabsCtrl.tabs" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-dummy-tab> </div> </md-tabs-canvas> </md-tabs-wrapper> <md-tabs-content-wrapper ng-show="$mdTabsCtrl.hasContent && $mdTabsCtrl.selectedIndex >= 0"> <md-tab-content id="tab-content-{{::tab.id}}" role="tabpanel" aria-labelledby="tab-item-{{::tab.id}}" md-swipe-left="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(1)" md-swipe-right="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(-1)" ng-if="$mdTabsCtrl.hasContent" ng-repeat="(index, tab) in $mdTabsCtrl.tabs" ng-class="{ \'md-no-transition\': $mdTabsCtrl.lastSelectedIndex == null, \'md-active\':        tab.isActive(), \'md-left\':          tab.isLeft(), \'md-right\':         tab.isRight(), \'md-no-scroll\':     $mdTabsCtrl.dynamicHeight }"> <div md-tabs-template="::tab.template" md-connected-if="tab.isActive()" md-scope="::tab.parent" ng-if="$mdTabsCtrl.enableDisconnect || tab.shouldRender()"></div> </md-tab-content> </md-tabs-content-wrapper>';
        }, controller: "MdTabsController", controllerAs: "$mdTabsCtrl", bindToController: !0 };
    }b.module("material.components.tabs").directive("mdTabs", a);
  }(), function () {
    function a(a, b) {
      function c(c, d, e, f) {
        function g() {
          c.$watch("connected", function (a) {
            !1 === a ? h() : i();
          }), c.$on("$destroy", i);
        }function h() {
          f.enableDisconnect && b.disconnectScope(j);
        }function i() {
          f.enableDisconnect && b.reconnectScope(j);
        }if (f) {
          var j = f.enableDisconnect ? c.compileScope.$new() : c.compileScope;return d.html(c.template), a(d.contents())(j), d.on("DOMSubtreeModified", function () {
            f.updatePagination(), f.updateInkBarStyles();
          }), b.nextTick(g);
        }
      }return { restrict: "A", link: c, scope: { template: "=mdTabsTemplate", connected: "=?mdConnectedIf", compileScope: "=mdScope" }, require: "^?mdTabs" };
    }b.module("material.components.tabs").directive("mdTabsTemplate", a), a.$inject = ["$compile", "$mdUtil"];
  }(), function () {
    b.module("material.core").constant("$MD_THEME_CSS", "md-autocomplete.md-THEME_NAME-theme {  background: '{{background-50}}'; }  md-autocomplete.md-THEME_NAME-theme[disabled] {    background: '{{background-100}}'; }  md-autocomplete.md-THEME_NAME-theme button md-icon path {    fill: '{{background-600}}'; }  md-autocomplete.md-THEME_NAME-theme button:after {    background: '{{background-600-0.3}}'; }.md-autocomplete-suggestions-container.md-THEME_NAME-theme {  background: '{{background-50}}'; }  .md-autocomplete-suggestions-container.md-THEME_NAME-theme li {    color: '{{background-900}}'; }    .md-autocomplete-suggestions-container.md-THEME_NAME-theme li .highlight {      color: '{{background-600}}'; }    .md-autocomplete-suggestions-container.md-THEME_NAME-theme li:hover, .md-autocomplete-suggestions-container.md-THEME_NAME-theme li.selected {      background: '{{background-200}}'; }md-bottom-sheet.md-THEME_NAME-theme {  background-color: '{{background-50}}';  border-top-color: '{{background-300}}'; }  md-bottom-sheet.md-THEME_NAME-theme.md-list md-list-item {    color: '{{foreground-1}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    background-color: '{{background-50}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    color: '{{foreground-1}}'; }md-backdrop {  background-color: '{{background-900-0.0}}'; }  md-backdrop.md-opaque.md-THEME_NAME-theme {    background-color: '{{background-900-1.0}}'; }a.md-button.md-THEME_NAME-theme:not([disabled]):hover,.md-button.md-THEME_NAME-theme:not([disabled]):hover {  background-color: '{{background-500-0.2}}'; }a.md-button.md-THEME_NAME-theme:not([disabled]).md-focused,.md-button.md-THEME_NAME-theme:not([disabled]).md-focused {  background-color: '{{background-500-0.2}}'; }a.md-button.md-THEME_NAME-theme:not([disabled]).md-icon-button:hover,.md-button.md-THEME_NAME-theme:not([disabled]).md-icon-button:hover {  background-color: transparent; }a.md-button.md-THEME_NAME-theme.md-fab,.md-button.md-THEME_NAME-theme.md-fab {  background-color: '{{accent-color}}';  color: '{{accent-contrast}}'; }  a.md-button.md-THEME_NAME-theme.md-fab md-icon,  .md-button.md-THEME_NAME-theme.md-fab md-icon {    color: '{{accent-contrast}}'; }  a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover,  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover {    background-color: '{{accent-color}}'; }  a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused,  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused {    background-color: '{{accent-A700}}'; }a.md-button.md-THEME_NAME-theme.md-primary,.md-button.md-THEME_NAME-theme.md-primary {  color: '{{primary-color}}'; }  a.md-button.md-THEME_NAME-theme.md-primary.md-raised, a.md-button.md-THEME_NAME-theme.md-primary.md-fab,  .md-button.md-THEME_NAME-theme.md-primary.md-raised,  .md-button.md-THEME_NAME-theme.md-primary.md-fab {    color: '{{primary-contrast}}';    background-color: '{{primary-color}}'; }    a.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]) md-icon, a.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]) md-icon,    .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]) md-icon,    .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]) md-icon {      color: '{{primary-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover, a.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover,    .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover,    .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover {      background-color: '{{primary-color}}'; }    a.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]).md-focused, a.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]).md-focused,    .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]).md-focused,    .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]).md-focused {      background-color: '{{primary-600}}'; }  a.md-button.md-THEME_NAME-theme.md-primary:not([disabled]) md-icon,  .md-button.md-THEME_NAME-theme.md-primary:not([disabled]) md-icon {    color: '{{primary-color}}'; }a.md-button.md-THEME_NAME-theme.md-fab,.md-button.md-THEME_NAME-theme.md-fab {  background-color: '{{accent-color}}';  color: '{{accent-contrast}}'; }  a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]) .md-icon,  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]) .md-icon {    color: '{{accent-contrast}}'; }  a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover,  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover {    background-color: '{{accent-color}}'; }  a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused,  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused {    background-color: '{{accent-A700}}'; }a.md-button.md-THEME_NAME-theme.md-raised,.md-button.md-THEME_NAME-theme.md-raised {  color: '{{background-900}}';  background-color: '{{background-50}}'; }  a.md-button.md-THEME_NAME-theme.md-raised:not([disabled]) .md-icon,  .md-button.md-THEME_NAME-theme.md-raised:not([disabled]) .md-icon {    color: '{{background-contrast}}'; }  a.md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover,  .md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover {    background-color: '{{background-50}}'; }  a.md-button.md-THEME_NAME-theme.md-raised:not([disabled]).md-focused,  .md-button.md-THEME_NAME-theme.md-raised:not([disabled]).md-focused {    background-color: '{{background-200}}'; }a.md-button.md-THEME_NAME-theme.md-warn,.md-button.md-THEME_NAME-theme.md-warn {  color: '{{warn-color}}'; }  a.md-button.md-THEME_NAME-theme.md-warn.md-raised, a.md-button.md-THEME_NAME-theme.md-warn.md-fab,  .md-button.md-THEME_NAME-theme.md-warn.md-raised,  .md-button.md-THEME_NAME-theme.md-warn.md-fab {    color: '{{warn-contrast}}';    background-color: '{{warn-color}}'; }    a.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]) md-icon, a.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]) md-icon,    .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]) md-icon,    .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]) md-icon {      color: '{{warn-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover, a.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover,    .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover,    .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover {      background-color: '{{warn-color}}'; }    a.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]).md-focused, a.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]).md-focused,    .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]).md-focused,    .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]).md-focused {      background-color: '{{warn-700}}'; }  a.md-button.md-THEME_NAME-theme.md-warn:not([disabled]) md-icon,  .md-button.md-THEME_NAME-theme.md-warn:not([disabled]) md-icon {    color: '{{warn-color}}'; }a.md-button.md-THEME_NAME-theme.md-accent,.md-button.md-THEME_NAME-theme.md-accent {  color: '{{accent-color}}'; }  a.md-button.md-THEME_NAME-theme.md-accent.md-raised, a.md-button.md-THEME_NAME-theme.md-accent.md-fab,  .md-button.md-THEME_NAME-theme.md-accent.md-raised,  .md-button.md-THEME_NAME-theme.md-accent.md-fab {    color: '{{accent-contrast}}';    background-color: '{{accent-color}}'; }    a.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]) md-icon, a.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]) md-icon,    .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]) md-icon,    .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]) md-icon {      color: '{{accent-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover, a.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover,    .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover,    .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover {      background-color: '{{accent-color}}'; }    a.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]).md-focused, a.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]).md-focused,    .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]).md-focused,    .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]).md-focused {      background-color: '{{accent-700}}'; }  a.md-button.md-THEME_NAME-theme.md-accent:not([disabled]) md-icon,  .md-button.md-THEME_NAME-theme.md-accent:not([disabled]) md-icon {    color: '{{accent-color}}'; }a.md-button.md-THEME_NAME-theme[disabled], a.md-button.md-THEME_NAME-theme.md-raised[disabled], a.md-button.md-THEME_NAME-theme.md-fab[disabled], a.md-button.md-THEME_NAME-theme.md-accent[disabled], a.md-button.md-THEME_NAME-theme.md-warn[disabled],.md-button.md-THEME_NAME-theme[disabled],.md-button.md-THEME_NAME-theme.md-raised[disabled],.md-button.md-THEME_NAME-theme.md-fab[disabled],.md-button.md-THEME_NAME-theme.md-accent[disabled],.md-button.md-THEME_NAME-theme.md-warn[disabled] {  color: '{{foreground-3}}' !important;  cursor: default; }  a.md-button.md-THEME_NAME-theme[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-raised[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-fab[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-accent[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-warn[disabled] md-icon,  .md-button.md-THEME_NAME-theme[disabled] md-icon,  .md-button.md-THEME_NAME-theme.md-raised[disabled] md-icon,  .md-button.md-THEME_NAME-theme.md-fab[disabled] md-icon,  .md-button.md-THEME_NAME-theme.md-accent[disabled] md-icon,  .md-button.md-THEME_NAME-theme.md-warn[disabled] md-icon {    color: '{{foreground-3}}'; }a.md-button.md-THEME_NAME-theme.md-raised[disabled], a.md-button.md-THEME_NAME-theme.md-fab[disabled],.md-button.md-THEME_NAME-theme.md-raised[disabled],.md-button.md-THEME_NAME-theme.md-fab[disabled] {  background-color: '{{foreground-4}}'; }a.md-button.md-THEME_NAME-theme[disabled],.md-button.md-THEME_NAME-theme[disabled] {  background-color: transparent; }md-card.md-THEME_NAME-theme {  background-color: '{{background-color}}';  border-radius: 2px; }  md-card.md-THEME_NAME-theme .md-card-image {    border-radius: 2px 2px 0 0; }  md-card.md-THEME_NAME-theme md-card-header md-card-avatar md-icon {    color: '{{background-color}}';    background-color: '{{foreground-3}}'; }  md-card.md-THEME_NAME-theme md-card-header md-card-header-text .md-subhead {    color: '{{foreground-2}}'; }  md-card.md-THEME_NAME-theme md-card-title md-card-title-text:not(:only-child) .md-subhead {    color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme .md-ripple {  color: '{{accent-600}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme.md-checked.md-focused .md-container:before {  background-color: '{{accent-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme .md-ink-ripple {  color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon {  background-color: '{{accent-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon:after {  border-color: '{{accent-contrast-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ripple {  color: '{{primary-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ink-ripple {  color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple {  color: '{{primary-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon {  background-color: '{{primary-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked.md-focused .md-container:before {  background-color: '{{primary-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon:after {  border-color: '{{primary-contrast-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ripple {  color: '{{warn-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ink-ripple {  color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple {  color: '{{warn-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon {  background-color: '{{warn-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked.md-focused:not([disabled]) .md-container:before {  background-color: '{{warn-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-icon {  border-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon {  background-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-label {  color: '{{foreground-3}}'; }md-content.md-THEME_NAME-theme {  color: '{{foreground-1}}';  background-color: '{{background-color}}'; }md-chips.md-THEME_NAME-theme .md-chips {  box-shadow: 0 1px '{{background-300}}'; }  md-chips.md-THEME_NAME-theme .md-chips.md-focused {    box-shadow: 0 2px '{{primary-color}}'; }md-chips.md-THEME_NAME-theme .md-chip {  background: '{{background-300}}';  color: '{{background-800}}'; }  md-chips.md-THEME_NAME-theme .md-chip.md-focused {    background: '{{primary-color}}';    color: '{{primary-contrast}}'; }    md-chips.md-THEME_NAME-theme .md-chip.md-focused md-icon {      color: '{{primary-contrast}}'; }md-chips.md-THEME_NAME-theme md-chip-remove .md-button md-icon path {  fill: '{{background-500}}'; }.md-contact-suggestion span.md-contact-email {  color: '{{background-400}}'; }md-dialog.md-THEME_NAME-theme {  border-radius: 4px;  background-color: '{{background-color}}'; }  md-dialog.md-THEME_NAME-theme.md-content-overflow .md-actions, md-dialog.md-THEME_NAME-theme.md-content-overflow md-dialog-actions {    border-top-color: '{{foreground-4}}'; }/** Theme styles for mdCalendar. */.md-calendar.md-THEME_NAME-theme {  color: '{{foreground-1}}'; }  .md-calendar.md-THEME_NAME-theme tr:last-child td {    border-bottom-color: '{{background-200}}'; }.md-THEME_NAME-theme .md-calendar-day-header {  background: '{{background-hue-1}}';  color: '{{foreground-1}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-date-today .md-calendar-date-selection-indicator {  border: 1px solid '{{primary-500}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-date-today.md-calendar-date-disabled {  color: '{{primary-500-0.6}}'; }.md-THEME_NAME-theme .md-calendar-date.md-focus .md-calendar-date-selection-indicator {  background: '{{background-hue-1}}'; }.md-THEME_NAME-theme .md-calendar-date-selection-indicator:hover {  background: '{{background-hue-1}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-selected-date .md-calendar-date-selection-indicator,.md-THEME_NAME-theme .md-calendar-date.md-focus.md-calendar-selected-date .md-calendar-date-selection-indicator {  background: '{{primary-500}}';  color: '{{primary-500-contrast}}';  border-color: transparent; }.md-THEME_NAME-theme .md-calendar-date-disabled,.md-THEME_NAME-theme .md-calendar-month-label-disabled {  color: '{{foreground-3}}'; }/** Theme styles for mdDatepicker. */md-datepicker.md-THEME_NAME-theme {  background: '{{background-color}}'; }.md-THEME_NAME-theme .md-datepicker-input {  color: '{{background-contrast}}';  background: '{{background-color}}'; }  .md-THEME_NAME-theme .md-datepicker-input::-webkit-input-placeholder, .md-THEME_NAME-theme .md-datepicker-input::-moz-placeholder, .md-THEME_NAME-theme .md-datepicker-input:-moz-placeholder, .md-THEME_NAME-theme .md-datepicker-input:-ms-input-placeholder {    color: \"{{foreground-3}}\"; }.md-THEME_NAME-theme .md-datepicker-input-container {  border-bottom-color: '{{background-300}}'; }  .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-focused {    border-bottom-color: '{{primary-500}}'; }  .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-invalid {    border-bottom-color: '{{warn-A700}}'; }.md-THEME_NAME-theme .md-datepicker-calendar-pane {  border-color: '{{background-300}}'; }.md-THEME_NAME-theme .md-datepicker-triangle-button .md-datepicker-expand-triangle {  border-top-color: '{{foreground-3}}'; }.md-THEME_NAME-theme .md-datepicker-triangle-button:hover .md-datepicker-expand-triangle {  border-top-color: '{{foreground-2}}'; }.md-THEME_NAME-theme .md-datepicker-open .md-datepicker-calendar-icon {  fill: '{{primary-500}}'; }.md-THEME_NAME-theme .md-datepicker-calendar,.md-THEME_NAME-theme .md-datepicker-input-mask-opaque {  background: '{{background-color}}'; }md-divider.md-THEME_NAME-theme {  border-top-color: '{{foreground-4}}'; }.layout-row > md-divider.md-THEME_NAME-theme {  border-right-color: '{{foreground-4}}'; }md-icon.md-THEME_NAME-theme {  color: '{{foreground-2}}'; }  md-icon.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  md-icon.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  md-icon.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h3, md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h4,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h3,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h4 {  color: '{{foreground-1}}'; }md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text p,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text p {  color: '{{foreground-2}}'; }md-list.md-THEME_NAME-theme .md-proxy-focus.md-focused div.md-no-style {  background-color: '{{background-100}}'; }md-list.md-THEME_NAME-theme md-list-item > .md-avatar-icon {  background-color: '{{foreground-3}}';  color: '{{background-color}}'; }md-list.md-THEME_NAME-theme md-list-item > md-icon {  color: '{{foreground-2}}'; }  md-list.md-THEME_NAME-theme md-list-item > md-icon.md-highlight {    color: '{{primary-color}}'; }    md-list.md-THEME_NAME-theme md-list-item > md-icon.md-highlight.md-accent {      color: '{{accent-color}}'; }md-menu-content.md-THEME_NAME-theme {  background-color: '{{background-color}}'; }  md-menu-content.md-THEME_NAME-theme md-menu-divider {    background-color: '{{foreground-4}}'; }md-input-container.md-THEME_NAME-theme .md-input {  color: '{{foreground-1}}';  border-color: '{{foreground-4}}';  text-shadow: '{{foreground-shadow}}'; }  md-input-container.md-THEME_NAME-theme .md-input::-webkit-input-placeholder, md-input-container.md-THEME_NAME-theme .md-input::-moz-placeholder, md-input-container.md-THEME_NAME-theme .md-input:-moz-placeholder, md-input-container.md-THEME_NAME-theme .md-input:-ms-input-placeholder {    color: \"{{foreground-3}}\"; }md-input-container.md-THEME_NAME-theme > md-icon {  color: '{{foreground-1}}'; }md-input-container.md-THEME_NAME-theme label,md-input-container.md-THEME_NAME-theme .md-placeholder {  text-shadow: '{{foreground-shadow}}';  color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme ng-messages :not(.md-char-counter), md-input-container.md-THEME_NAME-theme [ng-messages] :not(.md-char-counter),md-input-container.md-THEME_NAME-theme ng-message :not(.md-char-counter), md-input-container.md-THEME_NAME-theme data-ng-message :not(.md-char-counter), md-input-container.md-THEME_NAME-theme x-ng-message :not(.md-char-counter),md-input-container.md-THEME_NAME-theme [ng-message] :not(.md-char-counter), md-input-container.md-THEME_NAME-theme [data-ng-message] :not(.md-char-counter), md-input-container.md-THEME_NAME-theme [x-ng-message] :not(.md-char-counter),md-input-container.md-THEME_NAME-theme [ng-message-exp] :not(.md-char-counter), md-input-container.md-THEME_NAME-theme [data-ng-message-exp] :not(.md-char-counter), md-input-container.md-THEME_NAME-theme [x-ng-message-exp] :not(.md-char-counter) {  color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-has-value label {  color: '{{foreground-2}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused .md-input {  border-color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused label {  color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused md-icon {  color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent .md-input {  border-color: '{{accent-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent label {  color: '{{accent-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn .md-input {  border-color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn label {  color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid .md-input {  border-color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid.md-input-focused label {  color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid data-ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid x-ng-message,md-input-container.md-THEME_NAME-theme.md-input-invalid [ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [data-ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [x-ng-message],md-input-container.md-THEME_NAME-theme.md-input-invalid [ng-message-exp], md-input-container.md-THEME_NAME-theme.md-input-invalid [data-ng-message-exp], md-input-container.md-THEME_NAME-theme.md-input-invalid [x-ng-message-exp],md-input-container.md-THEME_NAME-theme.md-input-invalid .md-char-counter {  color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme .md-input[disabled],md-input-container.md-THEME_NAME-theme .md-input [disabled] {  border-bottom-color: transparent;  color: '{{foreground-3}}';  background-image: linear-gradient(to right, \"{{foreground-3}}\" 0%, \"{{foreground-3}}\" 33%, transparent 0%);  background-image: -ms-linear-gradient(left, transparent 0%, \"{{foreground-3}}\" 100%); }md-menu-bar.md-THEME_NAME-theme > button.md-button {  color: '{{foreground-2}}';  border-radius: 2px; }md-menu-bar.md-THEME_NAME-theme md-menu.md-open > button, md-menu-bar.md-THEME_NAME-theme md-menu > button:focus {  outline: none;  background: '{{background-200}}'; }md-menu-bar.md-THEME_NAME-theme.md-open:not(.md-keyboard-mode) md-menu:hover > button {  background-color: '{{ background-500-0.2}}'; }md-menu-bar.md-THEME_NAME-theme:not(.md-keyboard-mode):not(.md-open) md-menu button:hover,md-menu-bar.md-THEME_NAME-theme:not(.md-keyboard-mode):not(.md-open) md-menu button:focus {  background: transparent; }md-menu-content.md-THEME_NAME-theme .md-menu > .md-button:after {  color: '{{foreground-2}}'; }md-menu-content.md-THEME_NAME-theme .md-menu.md-open > .md-button {  background-color: '{{ background-500-0.2}}'; }md-toolbar.md-THEME_NAME-theme.md-menu-toolbar {  background-color: '{{background-color}}';  color: '{{foreground-1}}'; }  md-toolbar.md-THEME_NAME-theme.md-menu-toolbar md-toolbar-filler {    background-color: '{{primary-color}}';    color: '{{primary-contrast}}'; }    md-toolbar.md-THEME_NAME-theme.md-menu-toolbar md-toolbar-filler md-icon {      color: '{{primary-contrast}}'; }md-progress-circular.md-THEME_NAME-theme {  background-color: transparent; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-gap {    border-top-color: '{{primary-color}}';    border-bottom-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-top-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-right-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle {    border-left-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-gap {    border-top-color: '{{warn-color}}';    border-bottom-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-top-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-right-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle {    border-left-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-gap {    border-top-color: '{{accent-color}}';    border-bottom-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-top-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-right-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle {    border-left-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme .md-container {  background-color: '{{primary-100}}'; }md-progress-linear.md-THEME_NAME-theme .md-bar {  background-color: '{{primary-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-container {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-bar {  background-color: '{{warn-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-container {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-bar {  background-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-bar1 {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-dashed:before {  background: radial-gradient(\"{{warn-100}}\" 0%, \"{{warn-100}}\" 16%, transparent 42%); }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-bar1 {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-dashed:before {  background: radial-gradient(\"{{accent-100}}\" 0%, \"{{accent-100}}\" 16%, transparent 42%); }md-radio-button.md-THEME_NAME-theme .md-off {  border-color: '{{foreground-2}}'; }md-radio-button.md-THEME_NAME-theme .md-on {  background-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-off {  border-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme .md-container .md-ripple {  color: '{{accent-600}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-on {  background-color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off {  border-color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple {  color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple {  color: '{{primary-600}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-on {  background-color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off {  border-color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple {  color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple {  color: '{{warn-600}}'; }md-radio-group.md-THEME_NAME-theme[disabled],md-radio-button.md-THEME_NAME-theme[disabled] {  color: '{{foreground-3}}'; }  md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-off,  md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-off {    border-color: '{{foreground-3}}'; }  md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-on,  md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-on {    border-color: '{{foreground-3}}'; }md-radio-group.md-THEME_NAME-theme .md-checked .md-ink-ripple {  color: '{{accent-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-primary .md-checked:not([disabled]) .md-ink-ripple, md-radio-group.md-THEME_NAME-theme .md-checked:not([disabled]).md-primary .md-ink-ripple {  color: '{{primary-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme .md-checked.md-primary .md-ink-ripple {  color: '{{warn-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked .md-container:before {  background-color: '{{accent-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty).md-primary .md-checked .md-container:before,md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked.md-primary .md-container:before {  background-color: '{{primary-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty).md-warn .md-checked .md-container:before,md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked.md-warn .md-container:before {  background-color: '{{warn-color-0.26}}'; }md-select.md-THEME_NAME-theme[disabled] .md-select-value {  border-bottom-color: transparent;  background-image: linear-gradient(to right, \"{{foreground-3}}\" 0%, \"{{foreground-3}}\" 33%, transparent 0%);  background-image: -ms-linear-gradient(left, transparent 0%, \"{{foreground-3}}\" 100%); }md-select.md-THEME_NAME-theme .md-select-value {  border-bottom-color: '{{foreground-4}}'; }  md-select.md-THEME_NAME-theme .md-select-value.md-select-placeholder {    color: '{{foreground-3}}'; }md-select.md-THEME_NAME-theme.ng-invalid.ng-dirty .md-select-value {  color: '{{warn-A700}}' !important;  border-bottom-color: '{{warn-A700}}' !important; }md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-value {  border-bottom-color: '{{primary-color}}';  color: '{{ foreground-1 }}'; }  md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-value.md-select-placeholder {    color: '{{ foreground-1 }}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-accent .md-select-value {  border-bottom-color: '{{accent-color}}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-warn .md-select-value {  border-bottom-color: '{{warn-color}}'; }md-select.md-THEME_NAME-theme[disabled] .md-select-value {  color: '{{foreground-3}}'; }  md-select.md-THEME_NAME-theme[disabled] .md-select-value.md-select-placeholder {    color: '{{foreground-3}}'; }md-select-menu.md-THEME_NAME-theme md-option[disabled] {  color: '{{foreground-3}}'; }md-select-menu.md-THEME_NAME-theme md-optgroup {  color: '{{foreground-2}}'; }  md-select-menu.md-THEME_NAME-theme md-optgroup md-option {    color: '{{foreground-1}}'; }md-select-menu.md-THEME_NAME-theme md-option[selected] {  color: '{{primary-500}}'; }  md-select-menu.md-THEME_NAME-theme md-option[selected]:focus {    color: '{{primary-600}}'; }  md-select-menu.md-THEME_NAME-theme md-option[selected].md-accent {    color: '{{accent-500}}'; }    md-select-menu.md-THEME_NAME-theme md-option[selected].md-accent:focus {      color: '{{accent-600}}'; }md-select-menu.md-THEME_NAME-theme md-option:focus:not([disabled]):not([selected]) {  background: '{{background-200}}'; }md-sidenav.md-THEME_NAME-theme {  background-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme .md-track {  background-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme .md-track-ticks {  background-color: '{{foreground-4}}'; }md-slider.md-THEME_NAME-theme .md-focus-thumb {  background-color: '{{foreground-2}}'; }md-slider.md-THEME_NAME-theme .md-focus-ring {  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-disabled-thumb {  border-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme.md-min .md-thumb:after {  background-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme .md-track.md-track-fill {  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb:after {  border-color: '{{accent-color}}';  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-sign {  background-color: '{{accent-color}}'; }  md-slider.md-THEME_NAME-theme .md-sign:after {    border-top-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb-text {  color: '{{accent-contrast}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-focus-ring {  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-track.md-track-fill {  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb:after {  border-color: '{{warn-color}}';  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-sign {  background-color: '{{warn-color}}'; }  md-slider.md-THEME_NAME-theme.md-warn .md-sign:after {    border-top-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb-text {  color: '{{warn-contrast}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-focus-ring {  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-track.md-track-fill {  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb:after {  border-color: '{{primary-color}}';  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-sign {  background-color: '{{primary-color}}'; }  md-slider.md-THEME_NAME-theme.md-primary .md-sign:after {    border-top-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb-text {  color: '{{primary-contrast}}'; }md-slider.md-THEME_NAME-theme[disabled] .md-thumb:after {  border-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme[disabled]:not(.md-min) .md-thumb:after {  background-color: '{{foreground-3}}'; }.md-subheader.md-THEME_NAME-theme {  color: '{{ foreground-2-0.23 }}';  background-color: '{{background-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme .md-ink-ripple {  color: '{{background-500}}'; }md-switch.md-THEME_NAME-theme .md-thumb {  background-color: '{{background-50}}'; }md-switch.md-THEME_NAME-theme .md-bar {  background-color: '{{background-500}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-thumb {  background-color: '{{accent-color}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-bar {  background-color: '{{accent-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-focused .md-thumb:before {  background-color: '{{accent-color-0.26}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-ink-ripple {  color: '{{primary-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-thumb {  background-color: '{{primary-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-bar {  background-color: '{{primary-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary.md-focused .md-thumb:before {  background-color: '{{primary-color-0.26}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-ink-ripple {  color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-thumb {  background-color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-bar {  background-color: '{{warn-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn.md-focused .md-thumb:before {  background-color: '{{warn-color-0.26}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-thumb {  background-color: '{{background-400}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-bar {  background-color: '{{foreground-4}}'; }md-tabs.md-THEME_NAME-theme md-tabs-wrapper {  background-color: transparent;  border-color: '{{foreground-4}}'; }md-tabs.md-THEME_NAME-theme .md-paginator md-icon {  color: '{{primary-color}}'; }md-tabs.md-THEME_NAME-theme md-ink-bar {  color: '{{accent-color}}';  background: '{{accent-color}}'; }md-tabs.md-THEME_NAME-theme .md-tab {  color: '{{foreground-2}}'; }  md-tabs.md-THEME_NAME-theme .md-tab[disabled], md-tabs.md-THEME_NAME-theme .md-tab[disabled] md-icon {    color: '{{foreground-3}}'; }  md-tabs.md-THEME_NAME-theme .md-tab.md-active, md-tabs.md-THEME_NAME-theme .md-tab.md-active md-icon, md-tabs.md-THEME_NAME-theme .md-tab.md-focused, md-tabs.md-THEME_NAME-theme .md-tab.md-focused md-icon {    color: '{{primary-color}}'; }  md-tabs.md-THEME_NAME-theme .md-tab.md-focused {    background: '{{primary-color-0.1}}'; }  md-tabs.md-THEME_NAME-theme .md-tab .md-ripple-container {    color: '{{accent-100}}'; }md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper {  background-color: '{{accent-color}}'; }  md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{accent-100}}'; }    md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{accent-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{accent-contrast-0.1}}'; }  md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-ink-bar {    color: '{{primary-600-1}}';    background: '{{primary-600-1}}'; }md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper {  background-color: '{{primary-color}}'; }  md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{primary-100}}'; }    md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{primary-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{primary-contrast-0.1}}'; }md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper {  background-color: '{{warn-color}}'; }  md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{warn-100}}'; }    md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{warn-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{warn-contrast-0.1}}'; }md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{primary-color}}'; }  md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{primary-100}}'; }    md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{primary-contrast}}'; }    md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{primary-contrast-0.1}}'; }md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{accent-color}}'; }  md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{accent-100}}'; }    md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{accent-contrast}}'; }    md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{accent-contrast-0.1}}'; }  md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-ink-bar {    color: '{{primary-600-1}}';    background: '{{primary-600-1}}'; }md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{warn-color}}'; }  md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{warn-100}}'; }    md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{warn-contrast}}'; }    md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{warn-contrast-0.1}}'; }md-toast.md-THEME_NAME-theme .md-toast-content {  background-color: #323232;  color: '{{background-50}}'; }  md-toast.md-THEME_NAME-theme .md-toast-content .md-button {    color: '{{background-50}}'; }    md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight {      color: '{{primary-A200}}'; }      md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight.md-accent {        color: '{{accent-A200}}'; }      md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight.md-warn {        color: '{{warn-A200}}'; }md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) {  background-color: '{{primary-color}}';  color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) md-icon {    color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) .md-button:not(.md-raised) {    color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent {    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-warn {    background-color: '{{warn-color}}';    color: '{{warn-contrast}}'; }md-tooltip.md-THEME_NAME-theme {  color: '{{background-A100}}'; }  md-tooltip.md-THEME_NAME-theme .md-content {    background-color: '{{foreground-2}}'; }");
  }();
}(window, window.angular), window.ngMaterial = { version: { full: "1.0.0" } };
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);