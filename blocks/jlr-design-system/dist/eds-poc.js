import { i as e, n as t, r as n, t as r } from "./jsx-runtime-CvRU0VyQ.js";
//#region ../../node_modules/.pnpm/scheduler@0.27.0/node_modules/scheduler/cjs/scheduler.production.js
var i = /* @__PURE__ */ n(((e) => {
	function t(e, t) {
		var n = e.length;
		e.push(t);
		a: for (; 0 < n;) {
			var r = n - 1 >>> 1, a = e[r];
			if (0 < i(a, t)) e[r] = t, e[n] = a, n = r;
			else break a;
		}
	}
	function n(e) {
		return e.length === 0 ? null : e[0];
	}
	function r(e) {
		if (e.length === 0) return null;
		var t = e[0], n = e.pop();
		if (n !== t) {
			e[0] = n;
			a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
				var s = 2 * (r + 1) - 1, c = e[s], l = s + 1, u = e[l];
				if (0 > i(c, n)) l < a && 0 > i(u, c) ? (e[r] = u, e[l] = n, r = l) : (e[r] = c, e[s] = n, r = s);
				else if (l < a && 0 > i(u, n)) e[r] = u, e[l] = n, r = l;
				else break a;
			}
		}
		return t;
	}
	function i(e, t) {
		var n = e.sortIndex - t.sortIndex;
		return n === 0 ? e.id - t.id : n;
	}
	if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
		var a = performance;
		e.unstable_now = function() {
			return a.now();
		};
	} else {
		var o = Date, s = o.now();
		e.unstable_now = function() {
			return o.now() - s;
		};
	}
	var c = [], l = [], u = 1, d = null, f = 3, p = !1, m = !1, h = !1, g = !1, _ = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, y = typeof setImmediate < "u" ? setImmediate : null;
	function b(e) {
		for (var i = n(l); i !== null;) {
			if (i.callback === null) r(l);
			else if (i.startTime <= e) r(l), i.sortIndex = i.expirationTime, t(c, i);
			else break;
			i = n(l);
		}
	}
	function x(e) {
		if (h = !1, b(e), !m) if (n(c) !== null) m = !0, S || (S = !0, D());
		else {
			var t = n(l);
			t !== null && k(x, t.startTime - e);
		}
	}
	var S = !1, C = -1, w = 5, T = -1;
	function ee() {
		return g ? !0 : !(e.unstable_now() - T < w);
	}
	function E() {
		if (g = !1, S) {
			var t = e.unstable_now();
			T = t;
			var i = !0;
			try {
				a: {
					m = !1, h && (h = !1, v(C), C = -1), p = !0;
					var a = f;
					try {
						b: {
							for (b(t), d = n(c); d !== null && !(d.expirationTime > t && ee());) {
								var o = d.callback;
								if (typeof o == "function") {
									d.callback = null, f = d.priorityLevel;
									var s = o(d.expirationTime <= t);
									if (t = e.unstable_now(), typeof s == "function") {
										d.callback = s, b(t), i = !0;
										break b;
									}
									d === n(c) && r(c), b(t);
								} else r(c);
								d = n(c);
							}
							if (d !== null) i = !0;
							else {
								var u = n(l);
								u !== null && k(x, u.startTime - t), i = !1;
							}
						}
						break a;
					} finally {
						d = null, f = a, p = !1;
					}
					i = void 0;
				}
			} finally {
				i ? D() : S = !1;
			}
		}
	}
	var D;
	if (typeof y == "function") D = function() {
		y(E);
	};
	else if (typeof MessageChannel < "u") {
		var O = new MessageChannel(), te = O.port2;
		O.port1.onmessage = E, D = function() {
			te.postMessage(null);
		};
	} else D = function() {
		_(E, 0);
	};
	function k(t, n) {
		C = _(function() {
			t(e.unstable_now());
		}, n);
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
		e.callback = null;
	}, e.unstable_forceFrameRate = function(e) {
		0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : w = 0 < e ? Math.floor(1e3 / e) : 5;
	}, e.unstable_getCurrentPriorityLevel = function() {
		return f;
	}, e.unstable_next = function(e) {
		switch (f) {
			case 1:
			case 2:
			case 3:
				var t = 3;
				break;
			default: t = f;
		}
		var n = f;
		f = t;
		try {
			return e();
		} finally {
			f = n;
		}
	}, e.unstable_requestPaint = function() {
		g = !0;
	}, e.unstable_runWithPriority = function(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: e = 3;
		}
		var n = f;
		f = e;
		try {
			return t();
		} finally {
			f = n;
		}
	}, e.unstable_scheduleCallback = function(r, i, a) {
		var o = e.unstable_now();
		switch (typeof a == "object" && a ? (a = a.delay, a = typeof a == "number" && 0 < a ? o + a : o) : a = o, r) {
			case 1:
				var s = -1;
				break;
			case 2:
				s = 250;
				break;
			case 5:
				s = 1073741823;
				break;
			case 4:
				s = 1e4;
				break;
			default: s = 5e3;
		}
		return s = a + s, r = {
			id: u++,
			callback: i,
			priorityLevel: r,
			startTime: a,
			expirationTime: s,
			sortIndex: -1
		}, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (v(C), C = -1) : h = !0, k(x, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, S || (S = !0, D()))), r;
	}, e.unstable_shouldYield = ee, e.unstable_wrapCallback = function(e) {
		var t = f;
		return function() {
			var n = f;
			f = t;
			try {
				return e.apply(this, arguments);
			} finally {
				f = n;
			}
		};
	};
})), a = /* @__PURE__ */ n(((e, t) => {
	t.exports = i();
})), o = /* @__PURE__ */ n(((e) => {
	var n = t();
	function r(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function i() {}
	var a = {
		d: {
			f: i,
			r: function() {
				throw Error(r(522));
			},
			D: i,
			C: i,
			L: i,
			m: i,
			X: i,
			S: i,
			M: i
		},
		p: 0,
		findDOMNode: null
	}, o = Symbol.for("react.portal");
	function s(e, t, n) {
		var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: o,
			key: r == null ? null : "" + r,
			children: e,
			containerInfo: t,
			implementation: n
		};
	}
	var c = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function l(e, t) {
		if (e === "font") return "";
		if (typeof t == "string") return t === "use-credentials" ? t : "";
	}
	e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a, e.createPortal = function(e, t) {
		var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) throw Error(r(299));
		return s(e, t, null, n);
	}, e.flushSync = function(e) {
		var t = c.T, n = a.p;
		try {
			if (c.T = null, a.p = 2, e) return e();
		} finally {
			c.T = t, a.p = n, a.d.f();
		}
	}, e.preconnect = function(e, t) {
		typeof e == "string" && (t ? (t = t.crossOrigin, t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null, a.d.C(e, t));
	}, e.prefetchDNS = function(e) {
		typeof e == "string" && a.d.D(e);
	}, e.preinit = function(e, t) {
		if (typeof e == "string" && t && typeof t.as == "string") {
			var n = t.as, r = l(n, t.crossOrigin), i = typeof t.integrity == "string" ? t.integrity : void 0, o = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
			n === "style" ? a.d.S(e, typeof t.precedence == "string" ? t.precedence : void 0, {
				crossOrigin: r,
				integrity: i,
				fetchPriority: o
			}) : n === "script" && a.d.X(e, {
				crossOrigin: r,
				integrity: i,
				fetchPriority: o,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0
			});
		}
	}, e.preinitModule = function(e, t) {
		if (typeof e == "string") if (typeof t == "object" && t) {
			if (t.as == null || t.as === "script") {
				var n = l(t.as, t.crossOrigin);
				a.d.M(e, {
					crossOrigin: n,
					integrity: typeof t.integrity == "string" ? t.integrity : void 0,
					nonce: typeof t.nonce == "string" ? t.nonce : void 0
				});
			}
		} else t ?? a.d.M(e);
	}, e.preload = function(e, t) {
		if (typeof e == "string" && typeof t == "object" && t && typeof t.as == "string") {
			var n = t.as, r = l(n, t.crossOrigin);
			a.d.L(e, n, {
				crossOrigin: r,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0,
				type: typeof t.type == "string" ? t.type : void 0,
				fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
				referrerPolicy: typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
				imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
				imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
				media: typeof t.media == "string" ? t.media : void 0
			});
		}
	}, e.preloadModule = function(e, t) {
		if (typeof e == "string") if (t) {
			var n = l(t.as, t.crossOrigin);
			a.d.m(e, {
				as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
				crossOrigin: n,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0
			});
		} else a.d.m(e);
	}, e.requestFormReset = function(e) {
		a.d.r(e);
	}, e.unstable_batchedUpdates = function(e, t) {
		return e(t);
	}, e.useFormState = function(e, t, n) {
		return c.H.useFormState(e, t, n);
	}, e.useFormStatus = function() {
		return c.H.useHostTransitionStatus();
	}, e.version = "19.2.4";
})), s = /* @__PURE__ */ n(((e, t) => {
	function n() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = o();
})), c = /* @__PURE__ */ n(((e) => {
	var n = a(), r = t(), i = s();
	function o(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function c(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
	}
	function l(e) {
		var t = e, n = e;
		if (e.alternate) for (; t.return;) t = t.return;
		else {
			e = t;
			do
				t = e, t.flags & 4098 && (n = t.return), e = t.return;
			while (e);
		}
		return t.tag === 3 ? n : null;
	}
	function u(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function d(e) {
		if (e.tag === 31) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function f(e) {
		if (l(e) !== e) throw Error(o(188));
	}
	function p(e) {
		var t = e.alternate;
		if (!t) {
			if (t = l(e), t === null) throw Error(o(188));
			return t === e ? e : null;
		}
		for (var n = e, r = t;;) {
			var i = n.return;
			if (i === null) break;
			var a = i.alternate;
			if (a === null) {
				if (r = i.return, r !== null) {
					n = r;
					continue;
				}
				break;
			}
			if (i.child === a.child) {
				for (a = i.child; a;) {
					if (a === n) return f(i), e;
					if (a === r) return f(i), t;
					a = a.sibling;
				}
				throw Error(o(188));
			}
			if (n.return !== r.return) n = i, r = a;
			else {
				for (var s = !1, c = i.child; c;) {
					if (c === n) {
						s = !0, n = i, r = a;
						break;
					}
					if (c === r) {
						s = !0, r = i, n = a;
						break;
					}
					c = c.sibling;
				}
				if (!s) {
					for (c = a.child; c;) {
						if (c === n) {
							s = !0, n = a, r = i;
							break;
						}
						if (c === r) {
							s = !0, r = a, n = i;
							break;
						}
						c = c.sibling;
					}
					if (!s) throw Error(o(189));
				}
			}
			if (n.alternate !== r) throw Error(o(190));
		}
		if (n.tag !== 3) throw Error(o(188));
		return n.stateNode.current === n ? e : t;
	}
	function m(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e;
		for (e = e.child; e !== null;) {
			if (t = m(e), t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	var h = Object.assign, g = Symbol.for("react.element"), _ = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), C = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), te = Symbol.for("react.memo_cache_sentinel"), k = Symbol.iterator;
	function ne(e) {
		return typeof e != "object" || !e ? null : (e = k && e[k] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var re = Symbol.for("react.client.reference");
	function ie(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === re ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case y: return "Fragment";
			case x: return "Profiler";
			case b: return "StrictMode";
			case T: return "Suspense";
			case ee: return "SuspenseList";
			case O: return "Activity";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case v: return "Portal";
			case C: return e.displayName || "Context";
			case S: return (e._context.displayName || "Context") + ".Consumer";
			case w:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case E: return t = e.displayName || null, t === null ? ie(e.type) || "Memo" : t;
			case D:
				t = e._payload, e = e._init;
				try {
					return ie(e(t));
				} catch {}
		}
		return null;
	}
	var ae = Array.isArray, A = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, oe = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, se = [], ce = -1;
	function le(e) {
		return { current: e };
	}
	function M(e) {
		0 > ce || (e.current = se[ce], se[ce] = null, ce--);
	}
	function N(e, t) {
		ce++, se[ce] = e.current, e.current = t;
	}
	var ue = le(null), de = le(null), fe = le(null), pe = le(null);
	function me(e, t) {
		switch (N(fe, t), N(de, e), N(ue, null), t.nodeType) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? Hd(e) : 0;
				break;
			default: if (e = t.tagName, t = t.namespaceURI) t = Hd(t), e = Ud(t, e);
			else switch (e) {
				case "svg":
					e = 1;
					break;
				case "math":
					e = 2;
					break;
				default: e = 0;
			}
		}
		M(ue), N(ue, e);
	}
	function he() {
		M(ue), M(de), M(fe);
	}
	function ge(e) {
		e.memoizedState !== null && N(pe, e);
		var t = ue.current, n = Ud(t, e.type);
		t !== n && (N(de, e), N(ue, n));
	}
	function _e(e) {
		de.current === e && (M(ue), M(de)), pe.current === e && (M(pe), Qf._currentValue = oe);
	}
	var ve, ye;
	function be(e) {
		if (ve === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			ve = t && t[1] || "", ye = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + ve + e + ye;
	}
	var P = !1;
	function xe(e, t) {
		if (!e || P) return "";
		P = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var r = { DetermineComponentFrameRoot: function() {
				try {
					if (t) {
						var n = function() {
							throw Error();
						};
						if (Object.defineProperty(n.prototype, "props", { set: function() {
							throw Error();
						} }), typeof Reflect == "object" && Reflect.construct) {
							try {
								Reflect.construct(n, []);
							} catch (e) {
								var r = e;
							}
							Reflect.construct(e, [], n);
						} else {
							try {
								n.call();
							} catch (e) {
								r = e;
							}
							e.call(n.prototype);
						}
					} else {
						try {
							throw Error();
						} catch (e) {
							r = e;
						}
						(n = e()) && typeof n.catch == "function" && n.catch(function() {});
					}
				} catch (e) {
					if (e && r && typeof e.stack == "string") return [e.stack, r.stack];
				}
				return [null, null];
			} };
			r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
			i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
			var a = r.DetermineComponentFrameRoot(), o = a[0], s = a[1];
			if (o && s) {
				var c = o.split("\n"), l = s.split("\n");
				for (i = r = 0; r < c.length && !c[r].includes("DetermineComponentFrameRoot");) r++;
				for (; i < l.length && !l[i].includes("DetermineComponentFrameRoot");) i++;
				if (r === c.length || i === l.length) for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
				for (; 1 <= r && 0 <= i; r--, i--) if (c[r] !== l[i]) {
					if (r !== 1 || i !== 1) do
						if (r--, i--, 0 > i || c[r] !== l[i]) {
							var u = "\n" + c[r].replace(" at new ", " at ");
							return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
						}
					while (1 <= r && 0 <= i);
					break;
				}
			}
		} finally {
			P = !1, Error.prepareStackTrace = n;
		}
		return (n = e ? e.displayName || e.name : "") ? be(n) : "";
	}
	function Se(e, t) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5: return be(e.type);
			case 16: return be("Lazy");
			case 13: return e.child !== t && t !== null ? be("Suspense Fallback") : be("Suspense");
			case 19: return be("SuspenseList");
			case 0:
			case 15: return xe(e.type, !1);
			case 11: return xe(e.type.render, !1);
			case 1: return xe(e.type, !0);
			case 31: return be("Activity");
			default: return "";
		}
	}
	function Ce(e) {
		try {
			var t = "", n = null;
			do
				t += Se(e, n), n = e, e = e.return;
			while (e);
			return t;
		} catch (e) {
			return "\nError generating stack: " + e.message + "\n" + e.stack;
		}
	}
	var we = Object.prototype.hasOwnProperty, Te = n.unstable_scheduleCallback, Ee = n.unstable_cancelCallback, De = n.unstable_shouldYield, Oe = n.unstable_requestPaint, ke = n.unstable_now, Ae = n.unstable_getCurrentPriorityLevel, je = n.unstable_ImmediatePriority, F = n.unstable_UserBlockingPriority, Me = n.unstable_NormalPriority, Ne = n.unstable_LowPriority, Pe = n.unstable_IdlePriority, Fe = n.log, Ie = n.unstable_setDisableYieldValue, Le = null, Re = null;
	function I(e) {
		if (typeof Fe == "function" && Ie(e), Re && typeof Re.setStrictMode == "function") try {
			Re.setStrictMode(Le, e);
		} catch {}
	}
	var ze = Math.clz32 ? Math.clz32 : He, Be = Math.log, Ve = Math.LN2;
	function He(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (Be(e) / Ve | 0) | 0;
	}
	var Ue = 256, We = 262144, Ge = 4194304;
	function Ke(e) {
		var t = e & 42;
		if (t !== 0) return t;
		switch (e & -e) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64: return 64;
			case 128: return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072: return e & 261888;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return e & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return e & 62914560;
			case 67108864: return 67108864;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 0;
			default: return e;
		}
	}
	function qe(e, t, n) {
		var r = e.pendingLanes;
		if (r === 0) return 0;
		var i = 0, a = e.suspendedLanes, o = e.pingedLanes;
		e = e.warmLanes;
		var s = r & 134217727;
		return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = Ke(n))) : i = Ke(o) : i = Ke(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = Ke(n))) : i = Ke(o)) : i = Ke(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
	}
	function Je(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
	}
	function Ye(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64: return t + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function Xe() {
		var e = Ge;
		return Ge <<= 1, !(Ge & 62914560) && (Ge = 4194304), e;
	}
	function Ze(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function Qe(e, t) {
		e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
	}
	function $e(e, t, n, r, i, a) {
		var o = e.pendingLanes;
		e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
		var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates;
		for (n = o & ~n; 0 < n;) {
			var u = 31 - ze(n), d = 1 << u;
			s[u] = 0, c[u] = -1;
			var f = l[u];
			if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
				var p = f[u];
				p !== null && (p.lane &= -536870913);
			}
			n &= ~d;
		}
		r !== 0 && et(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
	}
	function et(e, t, n) {
		e.pendingLanes |= t, e.suspendedLanes &= ~t;
		var r = 31 - ze(t);
		e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
	}
	function tt(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - ze(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	function nt(e, t) {
		var n = t & -t;
		return n = n & 42 ? 1 : rt(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
	}
	function rt(e) {
		switch (e) {
			case 2:
				e = 1;
				break;
			case 8:
				e = 4;
				break;
			case 32:
				e = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				e = 128;
				break;
			case 268435456:
				e = 134217728;
				break;
			default: e = 0;
		}
		return e;
	}
	function it(e) {
		return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2;
	}
	function at() {
		var e = j.p;
		return e === 0 ? (e = window.event, e === void 0 ? 32 : mp(e.type)) : e;
	}
	function ot(e, t) {
		var n = j.p;
		try {
			return j.p = e, t();
		} finally {
			j.p = n;
		}
	}
	var st = Math.random().toString(36).slice(2), ct = "__reactFiber$" + st, lt = "__reactProps$" + st, L = "__reactContainer$" + st, R = "__reactEvents$" + st, ut = "__reactListeners$" + st, dt = "__reactHandles$" + st, ft = "__reactResources$" + st, pt = "__reactMarker$" + st;
	function mt(e) {
		delete e[ct], delete e[lt], delete e[R], delete e[ut], delete e[dt];
	}
	function ht(e) {
		var t = e[ct];
		if (t) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[L] || n[ct]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ff(e); e !== null;) {
					if (n = e[ct]) return n;
					e = ff(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function gt(e) {
		if (e = e[ct] || e[L]) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
		}
		return null;
	}
	function _t(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(o(33));
	}
	function z(e) {
		var t = e[ft];
		return t ||= e[ft] = {
			hoistableStyles: /* @__PURE__ */ new Map(),
			hoistableScripts: /* @__PURE__ */ new Map()
		}, t;
	}
	function B(e) {
		e[pt] = !0;
	}
	var vt = /* @__PURE__ */ new Set(), yt = {};
	function bt(e, t) {
		xt(e, t), xt(e + "Capture", t);
	}
	function xt(e, t) {
		for (yt[e] = t, e = 0; e < t.length; e++) vt.add(t[e]);
	}
	var St = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Ct = {}, wt = {};
	function Tt(e) {
		return we.call(wt, e) ? !0 : we.call(Ct, e) ? !1 : St.test(e) ? wt[e] = !0 : (Ct[e] = !0, !1);
	}
	function Et(e, t, n) {
		if (Tt(t)) if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case "undefined":
				case "function":
				case "symbol":
					e.removeAttribute(t);
					return;
				case "boolean":
					var r = t.toLowerCase().slice(0, 5);
					if (r !== "data-" && r !== "aria-") {
						e.removeAttribute(t);
						return;
					}
			}
			e.setAttribute(t, "" + n);
		}
	}
	function Dt(e, t, n) {
		if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(t);
					return;
			}
			e.setAttribute(t, "" + n);
		}
	}
	function Ot(e, t, n, r) {
		if (r === null) e.removeAttribute(n);
		else {
			switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(n);
					return;
			}
			e.setAttributeNS(t, n, "" + r);
		}
	}
	function kt(e) {
		switch (typeof e) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined": return e;
			case "object": return e;
			default: return "";
		}
	}
	function At(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function jt(e, t, n) {
		var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
		if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == "function" && typeof r.set == "function") {
			var i = r.get, a = r.set;
			return Object.defineProperty(e, t, {
				configurable: !0,
				get: function() {
					return i.call(this);
				},
				set: function(e) {
					n = "" + e, a.call(this, e);
				}
			}), Object.defineProperty(e, t, { enumerable: r.enumerable }), {
				getValue: function() {
					return n;
				},
				setValue: function(e) {
					n = "" + e;
				},
				stopTracking: function() {
					e._valueTracker = null, delete e[t];
				}
			};
		}
	}
	function Mt(e) {
		if (!e._valueTracker) {
			var t = At(e) ? "checked" : "value";
			e._valueTracker = jt(e, t, "" + e[t]);
		}
	}
	function Nt(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = At(e) ? e.checked ? "true" : "false" : e.value), e = r, e === n ? !1 : (t.setValue(e), !0);
	}
	function Pt(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	var Ft = /[\n"\\]/g;
	function It(e) {
		return e.replace(Ft, function(e) {
			return "\\" + e.charCodeAt(0).toString(16) + " ";
		});
	}
	function Lt(e, t, n, r, i, a, o, s) {
		e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.type = o : e.removeAttribute("type"), t == null ? o !== "submit" && o !== "reset" || e.removeAttribute("value") : o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + kt(t)) : e.value !== "" + kt(t) && (e.value = "" + kt(t)), t == null ? n == null ? r != null && e.removeAttribute("value") : V(e, o, kt(n)) : V(e, o, kt(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + kt(s) : e.removeAttribute("name");
	}
	function Rt(e, t, n, r, i, a, o, s) {
		if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (e.type = a), t != null || n != null) {
			if (!(a !== "submit" && a !== "reset" || t != null)) {
				Mt(e);
				return;
			}
			n = n == null ? "" : "" + kt(n), t = t == null ? n : "" + kt(t), s || t === e.value || (e.value = t), e.defaultValue = t;
		}
		r ??= i, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.name = o), Mt(e);
	}
	function V(e, t, n) {
		t === "number" && Pt(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
	}
	function zt(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + kt(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function Bt(e, t, n) {
		if (t != null && (t = "" + kt(t), t !== e.value && (e.value = t), n == null)) {
			e.defaultValue !== t && (e.defaultValue = t);
			return;
		}
		e.defaultValue = n == null ? "" : "" + kt(n);
	}
	function Vt(e, t, n, r) {
		if (t == null) {
			if (r != null) {
				if (n != null) throw Error(o(92));
				if (ae(r)) {
					if (1 < r.length) throw Error(o(93));
					r = r[0];
				}
				n = r;
			}
			n ??= "", t = n;
		}
		n = kt(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), Mt(e);
	}
	function Ht(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var Ut = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
	function Wt(e, t, n) {
		var r = t.indexOf("--") === 0;
		n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Ut.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
	}
	function Gt(e, t, n) {
		if (t != null && typeof t != "object") throw Error(o(62));
		if (e = e.style, n != null) {
			for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "");
			for (var i in t) r = t[i], t.hasOwnProperty(i) && n[i] !== r && Wt(e, i, r);
		} else for (var a in t) t.hasOwnProperty(a) && Wt(e, a, t[a]);
	}
	function Kt(e) {
		if (e.indexOf("-") === -1) return !1;
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var qt = /* @__PURE__ */ new Map([
		["acceptCharset", "accept-charset"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"],
		["crossOrigin", "crossorigin"],
		["accentHeight", "accent-height"],
		["alignmentBaseline", "alignment-baseline"],
		["arabicForm", "arabic-form"],
		["baselineShift", "baseline-shift"],
		["capHeight", "cap-height"],
		["clipPath", "clip-path"],
		["clipRule", "clip-rule"],
		["colorInterpolation", "color-interpolation"],
		["colorInterpolationFilters", "color-interpolation-filters"],
		["colorProfile", "color-profile"],
		["colorRendering", "color-rendering"],
		["dominantBaseline", "dominant-baseline"],
		["enableBackground", "enable-background"],
		["fillOpacity", "fill-opacity"],
		["fillRule", "fill-rule"],
		["floodColor", "flood-color"],
		["floodOpacity", "flood-opacity"],
		["fontFamily", "font-family"],
		["fontSize", "font-size"],
		["fontSizeAdjust", "font-size-adjust"],
		["fontStretch", "font-stretch"],
		["fontStyle", "font-style"],
		["fontVariant", "font-variant"],
		["fontWeight", "font-weight"],
		["glyphName", "glyph-name"],
		["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
		["glyphOrientationVertical", "glyph-orientation-vertical"],
		["horizAdvX", "horiz-adv-x"],
		["horizOriginX", "horiz-origin-x"],
		["imageRendering", "image-rendering"],
		["letterSpacing", "letter-spacing"],
		["lightingColor", "lighting-color"],
		["markerEnd", "marker-end"],
		["markerMid", "marker-mid"],
		["markerStart", "marker-start"],
		["overlinePosition", "overline-position"],
		["overlineThickness", "overline-thickness"],
		["paintOrder", "paint-order"],
		["panose-1", "panose-1"],
		["pointerEvents", "pointer-events"],
		["renderingIntent", "rendering-intent"],
		["shapeRendering", "shape-rendering"],
		["stopColor", "stop-color"],
		["stopOpacity", "stop-opacity"],
		["strikethroughPosition", "strikethrough-position"],
		["strikethroughThickness", "strikethrough-thickness"],
		["strokeDasharray", "stroke-dasharray"],
		["strokeDashoffset", "stroke-dashoffset"],
		["strokeLinecap", "stroke-linecap"],
		["strokeLinejoin", "stroke-linejoin"],
		["strokeMiterlimit", "stroke-miterlimit"],
		["strokeOpacity", "stroke-opacity"],
		["strokeWidth", "stroke-width"],
		["textAnchor", "text-anchor"],
		["textDecoration", "text-decoration"],
		["textRendering", "text-rendering"],
		["transformOrigin", "transform-origin"],
		["underlinePosition", "underline-position"],
		["underlineThickness", "underline-thickness"],
		["unicodeBidi", "unicode-bidi"],
		["unicodeRange", "unicode-range"],
		["unitsPerEm", "units-per-em"],
		["vAlphabetic", "v-alphabetic"],
		["vHanging", "v-hanging"],
		["vIdeographic", "v-ideographic"],
		["vMathematical", "v-mathematical"],
		["vectorEffect", "vector-effect"],
		["vertAdvY", "vert-adv-y"],
		["vertOriginX", "vert-origin-x"],
		["vertOriginY", "vert-origin-y"],
		["wordSpacing", "word-spacing"],
		["writingMode", "writing-mode"],
		["xmlnsXlink", "xmlns:xlink"],
		["xHeight", "x-height"]
	]), Jt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function Yt(e) {
		return Jt.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
	}
	function Xt() {}
	var Zt = null;
	function H(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var Qt = null, $t = null;
	function en(e) {
		var t = gt(e);
		if (t && (e = t.stateNode)) {
			var n = e[lt] || null;
			a: switch (e = t.stateNode, t.type) {
				case "input":
					if (Lt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
						for (n = e; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll("input[name=\"" + It("" + t) + "\"][type=\"radio\"]"), t = 0; t < n.length; t++) {
							var r = n[t];
							if (r !== e && r.form === e.form) {
								var i = r[lt] || null;
								if (!i) throw Error(o(90));
								Lt(r, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name);
							}
						}
						for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && Nt(r);
					}
					break a;
				case "textarea":
					Bt(e, n.value, n.defaultValue);
					break a;
				case "select": t = n.value, t != null && zt(e, !!n.multiple, t, !1);
			}
		}
	}
	var tn = !1;
	function nn(e, t, n) {
		if (tn) return e(t, n);
		tn = !0;
		try {
			return e(t);
		} finally {
			if (tn = !1, (Qt !== null || $t !== null) && (bu(), Qt && (t = Qt, e = $t, $t = Qt = null, en(t), e))) for (t = 0; t < e.length; t++) en(e[t]);
		}
	}
	function U(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = n[lt] || null;
		if (r === null) return null;
		n = r[t];
		a: switch (t) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
				break a;
			default: e = !1;
		}
		if (e) return null;
		if (n && typeof n != "function") throw Error(o(231, t, typeof n));
		return n;
	}
	var W = !(typeof window > "u" || window.document === void 0 || window.document.createElement === void 0), G = !1;
	if (W) try {
		var rn = {};
		Object.defineProperty(rn, "passive", { get: function() {
			G = !0;
		} }), window.addEventListener("test", rn, rn), window.removeEventListener("test", rn, rn);
	} catch {
		G = !1;
	}
	var an = null, on = null, sn = null;
	function cn() {
		if (sn) return sn;
		var e, t = on, n = t.length, r, i = "value" in an ? an.value : an.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return sn = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function ln(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function un() {
		return !0;
	}
	function dn() {
		return !1;
	}
	function fn(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? un : dn, this.isPropagationStopped = dn, this;
		}
		return h(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = un);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = un);
			},
			persist: function() {},
			isPersistent: un
		}), t;
	}
	var pn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, mn = fn(pn), hn = h({}, pn, {
		view: 0,
		detail: 0
	}), gn = fn(hn), _n, vn, yn, bn = h({}, hn, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: jn,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== yn && (yn && e.type === "mousemove" ? (_n = e.screenX - yn.screenX, vn = e.screenY - yn.screenY) : vn = _n = 0, yn = e), _n);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : vn;
		}
	}), xn = fn(bn), Sn = fn(h({}, bn, { dataTransfer: 0 })), Cn = fn(h({}, hn, { relatedTarget: 0 })), wn = fn(h({}, pn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Tn = fn(h({}, pn, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), En = fn(h({}, pn, { data: 0 })), Dn = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	}, On = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	}, kn = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function An(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = kn[e]) ? !!t[e] : !1;
	}
	function jn() {
		return An;
	}
	var Mn = fn(h({}, hn, {
		key: function(e) {
			if (e.key) {
				var t = Dn[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = ln(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? On[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: jn,
		charCode: function(e) {
			return e.type === "keypress" ? ln(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? ln(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), Nn = fn(h({}, bn, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	})), Pn = fn(h({}, hn, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: jn
	})), Fn = fn(h({}, pn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), In = fn(h({}, bn, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), Ln = fn(h({}, pn, {
		newState: 0,
		oldState: 0
	})), Rn = [
		9,
		13,
		27,
		32
	], zn = W && "CompositionEvent" in window, Bn = null;
	W && "documentMode" in document && (Bn = document.documentMode);
	var Vn = W && "TextEvent" in window && !Bn, Hn = W && (!zn || Bn && 8 < Bn && 11 >= Bn), Un = " ", Wn = !1;
	function Gn(e, t) {
		switch (e) {
			case "keyup": return Rn.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function Kn(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var qn = !1;
	function Jn(e, t) {
		switch (e) {
			case "compositionend": return Kn(t);
			case "keypress": return t.which === 32 ? (Wn = !0, Un) : null;
			case "textInput": return e = t.data, e === Un && Wn ? null : e;
			default: return null;
		}
	}
	function Yn(e, t) {
		if (qn) return e === "compositionend" || !zn && Gn(e, t) ? (e = cn(), sn = on = an = null, qn = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return Hn && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var Xn = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function Zn(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!Xn[e.type] : t === "textarea";
	}
	function Qn(e, t, n, r) {
		Qt ? $t ? $t.push(r) : $t = [r] : Qt = r, t = Ed(t, "onChange"), 0 < t.length && (n = new mn("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var $n = null, er = null;
	function tr(e) {
		yd(e, 0);
	}
	function nr(e) {
		if (Nt(_t(e))) return e;
	}
	function rr(e, t) {
		if (e === "change") return t;
	}
	var ir = !1;
	if (W) {
		var ar;
		if (W) {
			var or = "oninput" in document;
			if (!or) {
				var sr = document.createElement("div");
				sr.setAttribute("oninput", "return;"), or = typeof sr.oninput == "function";
			}
			ar = or;
		} else ar = !1;
		ir = ar && (!document.documentMode || 9 < document.documentMode);
	}
	function cr() {
		$n && ($n.detachEvent("onpropertychange", lr), er = $n = null);
	}
	function lr(e) {
		if (e.propertyName === "value" && nr(er)) {
			var t = [];
			Qn(t, er, e, H(e)), nn(tr, t);
		}
	}
	function ur(e, t, n) {
		e === "focusin" ? (cr(), $n = t, er = n, $n.attachEvent("onpropertychange", lr)) : e === "focusout" && cr();
	}
	function dr(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return nr(er);
	}
	function fr(e, t) {
		if (e === "click") return nr(t);
	}
	function pr(e, t) {
		if (e === "input" || e === "change") return nr(t);
	}
	function mr(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var hr = typeof Object.is == "function" ? Object.is : mr;
	function gr(e, t) {
		if (hr(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!we.call(t, i) || !hr(e[i], t[i])) return !1;
		}
		return !0;
	}
	function _r(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function vr(e, t) {
		var n = _r(e);
		e = 0;
		for (var r; n;) {
			if (n.nodeType === 3) {
				if (r = e + n.textContent.length, e <= t && r >= t) return {
					node: n,
					offset: t - e
				};
				e = r;
			}
			a: {
				for (; n;) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break a;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = _r(n);
		}
	}
	function yr(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? yr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function br(e) {
		e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
		for (var t = Pt(e.document); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = Pt(e.document);
		}
		return t;
	}
	function xr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	var Sr = W && "documentMode" in document && 11 >= document.documentMode, Cr = null, wr = null, Tr = null, Er = !1;
	function Dr(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		Er || Cr == null || Cr !== Pt(r) || (r = Cr, "selectionStart" in r && xr(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), Tr && gr(Tr, r) || (Tr = r, r = Ed(wr, "onSelect"), 0 < r.length && (t = new mn("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = Cr)));
	}
	function Or(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var kr = {
		animationend: Or("Animation", "AnimationEnd"),
		animationiteration: Or("Animation", "AnimationIteration"),
		animationstart: Or("Animation", "AnimationStart"),
		transitionrun: Or("Transition", "TransitionRun"),
		transitionstart: Or("Transition", "TransitionStart"),
		transitioncancel: Or("Transition", "TransitionCancel"),
		transitionend: Or("Transition", "TransitionEnd")
	}, Ar = {}, jr = {};
	W && (jr = document.createElement("div").style, "AnimationEvent" in window || (delete kr.animationend.animation, delete kr.animationiteration.animation, delete kr.animationstart.animation), "TransitionEvent" in window || delete kr.transitionend.transition);
	function Mr(e) {
		if (Ar[e]) return Ar[e];
		if (!kr[e]) return e;
		var t = kr[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in jr) return Ar[e] = t[n];
		return e;
	}
	var Nr = Mr("animationend"), Pr = Mr("animationiteration"), Fr = Mr("animationstart"), Ir = Mr("transitionrun"), Lr = Mr("transitionstart"), Rr = Mr("transitioncancel"), zr = Mr("transitionend"), Br = /* @__PURE__ */ new Map(), Vr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	Vr.push("scrollEnd");
	function Hr(e, t) {
		Br.set(e, t), bt(t, [e]);
	}
	var Ur = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	}, Wr = [], Gr = 0, Kr = 0;
	function qr() {
		for (var e = Gr, t = Kr = Gr = 0; t < e;) {
			var n = Wr[t];
			Wr[t++] = null;
			var r = Wr[t];
			Wr[t++] = null;
			var i = Wr[t];
			Wr[t++] = null;
			var a = Wr[t];
			if (Wr[t++] = null, r !== null && i !== null) {
				var o = r.pending;
				o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
			}
			a !== 0 && Zr(n, i, a);
		}
	}
	function Jr(e, t, n, r) {
		Wr[Gr++] = e, Wr[Gr++] = t, Wr[Gr++] = n, Wr[Gr++] = r, Kr |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
	}
	function Yr(e, t, n, r) {
		return Jr(e, t, n, r), Qr(e);
	}
	function Xr(e, t) {
		return Jr(e, null, null, t), Qr(e);
	}
	function Zr(e, t, n) {
		e.lanes |= n;
		var r = e.alternate;
		r !== null && (r.lanes |= n);
		for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = !0)), e = a, a = a.return;
		return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - ze(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
	}
	function Qr(e) {
		if (50 < du) throw du = 0, fu = null, Error(o(185));
		for (var t = e.return; t !== null;) e = t, t = e.return;
		return e.tag === 3 ? e.stateNode : null;
	}
	var $r = {};
	function ei(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
	}
	function ti(e, t, n, r) {
		return new ei(e, t, n, r);
	}
	function ni(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function ri(e, t) {
		var n = e.alternate;
		return n === null ? (n = ti(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
	}
	function ii(e, t) {
		e.flags &= 65011714;
		var n = e.alternate;
		return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}), e;
	}
	function ai(e, t, n, r, i, a) {
		var s = 0;
		if (r = e, typeof e == "function") ni(e) && (s = 1);
		else if (typeof e == "string") s = Uf(e, n, ue.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
		else a: switch (e) {
			case O: return e = ti(31, n, t, i), e.elementType = O, e.lanes = a, e;
			case y: return oi(n.children, i, a, t);
			case b:
				s = 8, i |= 24;
				break;
			case x: return e = ti(12, n, t, i | 2), e.elementType = x, e.lanes = a, e;
			case T: return e = ti(13, n, t, i), e.elementType = T, e.lanes = a, e;
			case ee: return e = ti(19, n, t, i), e.elementType = ee, e.lanes = a, e;
			default:
				if (typeof e == "object" && e) switch (e.$$typeof) {
					case C:
						s = 10;
						break a;
					case S:
						s = 9;
						break a;
					case w:
						s = 11;
						break a;
					case E:
						s = 14;
						break a;
					case D:
						s = 16, r = null;
						break a;
				}
				s = 29, n = Error(o(130, e === null ? "null" : typeof e, "")), r = null;
		}
		return t = ti(s, n, t, i), t.elementType = e, t.type = r, t.lanes = a, t;
	}
	function oi(e, t, n, r) {
		return e = ti(7, e, r, t), e.lanes = n, e;
	}
	function si(e, t, n) {
		return e = ti(6, e, null, t), e.lanes = n, e;
	}
	function ci(e) {
		var t = ti(18, null, null, 0);
		return t.stateNode = e, t;
	}
	function li(e, t, n) {
		return t = ti(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	var ui = /* @__PURE__ */ new WeakMap();
	function di(e, t) {
		if (typeof e == "object" && e) {
			var n = ui.get(e);
			return n === void 0 ? (t = {
				value: e,
				source: t,
				stack: Ce(t)
			}, ui.set(e, t), t) : n;
		}
		return {
			value: e,
			source: t,
			stack: Ce(t)
		};
	}
	var fi = [], pi = 0, mi = null, hi = 0, gi = [], _i = 0, vi = null, yi = 1, bi = "";
	function xi(e, t) {
		fi[pi++] = hi, fi[pi++] = mi, mi = e, hi = t;
	}
	function Si(e, t, n) {
		gi[_i++] = yi, gi[_i++] = bi, gi[_i++] = vi, vi = e;
		var r = yi;
		e = bi;
		var i = 32 - ze(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - ze(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, yi = 1 << 32 - ze(t) + i | n << i | r, bi = a + e;
		} else yi = 1 << a | n << i | r, bi = e;
	}
	function Ci(e) {
		e.return !== null && (xi(e, 1), Si(e, 1, 0));
	}
	function wi(e) {
		for (; e === mi;) mi = fi[--pi], fi[pi] = null, hi = fi[--pi], fi[pi] = null;
		for (; e === vi;) vi = gi[--_i], gi[_i] = null, bi = gi[--_i], gi[_i] = null, yi = gi[--_i], gi[_i] = null;
	}
	function Ti(e, t) {
		gi[_i++] = yi, gi[_i++] = bi, gi[_i++] = vi, yi = t.id, bi = t.overflow, vi = e;
	}
	var Ei = null, Di = null, K = !1, Oi = null, ki = !1, Ai = Error(o(519));
	function ji(e) {
		throw Li(di(Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), Ai;
	}
	function Mi(e) {
		var t = e.stateNode, n = e.type, r = e.memoizedProps;
		switch (t[ct] = e, t[lt] = r, n) {
			case "dialog":
				Q("cancel", t), Q("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				Q("load", t);
				break;
			case "video":
			case "audio":
				for (n = 0; n < _d.length; n++) Q(_d[n], t);
				break;
			case "source":
				Q("error", t);
				break;
			case "img":
			case "image":
			case "link":
				Q("error", t), Q("load", t);
				break;
			case "details":
				Q("toggle", t);
				break;
			case "input":
				Q("invalid", t), Rt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
				break;
			case "select":
				Q("invalid", t);
				break;
			case "textarea": Q("invalid", t), Vt(t, r.value, r.defaultValue, r.children);
		}
		n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || !0 === r.suppressHydrationWarning || Md(t.textContent, n) ? (r.popover != null && (Q("beforetoggle", t), Q("toggle", t)), r.onScroll != null && Q("scroll", t), r.onScrollEnd != null && Q("scrollend", t), r.onClick != null && (t.onclick = Xt), t = !0) : t = !1, t || ji(e, !0);
	}
	function Ni(e) {
		for (Ei = e.return; Ei;) switch (Ei.tag) {
			case 5:
			case 31:
			case 13:
				ki = !1;
				return;
			case 27:
			case 3:
				ki = !0;
				return;
			default: Ei = Ei.return;
		}
	}
	function Pi(e) {
		if (e !== Ei) return !1;
		if (!K) return Ni(e), K = !0, !1;
		var t = e.tag, n;
		if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Wd(e.type, e.memoizedProps)), n = !n), n && Di && ji(e), Ni(e), t === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(o(317));
			Di = df(e);
		} else if (t === 31) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(o(317));
			Di = df(e);
		} else t === 27 ? (t = Di, Qd(e.type) ? (e = uf, uf = null, Di = e) : Di = t) : Di = Ei ? lf(e.stateNode.nextSibling) : null;
		return !0;
	}
	function Fi() {
		Di = Ei = null, K = !1;
	}
	function Ii() {
		var e = Oi;
		return e !== null && (Zl === null ? Zl = e : Zl.push.apply(Zl, e), Oi = null), e;
	}
	function Li(e) {
		Oi === null ? Oi = [e] : Oi.push(e);
	}
	var Ri = le(null), zi = null, Bi = null;
	function Vi(e, t, n) {
		N(Ri, t._currentValue), t._currentValue = n;
	}
	function Hi(e) {
		e._currentValue = Ri.current, M(Ri);
	}
	function Ui(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function Wi(e, t, n, r) {
		var i = e.child;
		for (i !== null && (i.return = e); i !== null;) {
			var a = i.dependencies;
			if (a !== null) {
				var s = i.child;
				a = a.firstContext;
				a: for (; a !== null;) {
					var c = a;
					a = i;
					for (var l = 0; l < t.length; l++) if (c.context === t[l]) {
						a.lanes |= n, c = a.alternate, c !== null && (c.lanes |= n), Ui(a.return, n, e), r || (s = null);
						break a;
					}
					a = c.next;
				}
			} else if (i.tag === 18) {
				if (s = i.return, s === null) throw Error(o(341));
				s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Ui(s, n, e), s = null;
			} else s = i.child;
			if (s !== null) s.return = i;
			else for (s = i; s !== null;) {
				if (s === e) {
					s = null;
					break;
				}
				if (i = s.sibling, i !== null) {
					i.return = s.return, s = i;
					break;
				}
				s = s.return;
			}
			i = s;
		}
	}
	function Gi(e, t, n, r) {
		e = null;
		for (var i = t, a = !1; i !== null;) {
			if (!a) {
				if (i.flags & 524288) a = !0;
				else if (i.flags & 262144) break;
			}
			if (i.tag === 10) {
				var s = i.alternate;
				if (s === null) throw Error(o(387));
				if (s = s.memoizedProps, s !== null) {
					var c = i.type;
					hr(i.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c));
				}
			} else if (i === pe.current) {
				if (s = i.alternate, s === null) throw Error(o(387));
				s.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e === null ? e = [Qf] : e.push(Qf));
			}
			i = i.return;
		}
		e !== null && Wi(t, e, n, r), t.flags |= 262144;
	}
	function Ki(e) {
		for (e = e.firstContext; e !== null;) {
			if (!hr(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function qi(e) {
		zi = e, Bi = null, e = e.dependencies, e !== null && (e.firstContext = null);
	}
	function Ji(e) {
		return Xi(zi, e);
	}
	function Yi(e, t) {
		return zi === null && qi(e), Xi(e, t);
	}
	function Xi(e, t) {
		var n = t._currentValue;
		if (t = {
			context: t,
			memoizedValue: n,
			next: null
		}, Bi === null) {
			if (e === null) throw Error(o(308));
			Bi = t, e.dependencies = {
				lanes: 0,
				firstContext: t
			}, e.flags |= 524288;
		} else Bi = Bi.next = t;
		return n;
	}
	var Zi = typeof AbortController < "u" ? AbortController : function() {
		var e = [], t = this.signal = {
			aborted: !1,
			addEventListener: function(t, n) {
				e.push(n);
			}
		};
		this.abort = function() {
			t.aborted = !0, e.forEach(function(e) {
				return e();
			});
		};
	}, Qi = n.unstable_scheduleCallback, $i = n.unstable_NormalPriority, ea = {
		$$typeof: C,
		Consumer: null,
		Provider: null,
		_currentValue: null,
		_currentValue2: null,
		_threadCount: 0
	};
	function ta() {
		return {
			controller: new Zi(),
			data: /* @__PURE__ */ new Map(),
			refCount: 0
		};
	}
	function na(e) {
		e.refCount--, e.refCount === 0 && Qi($i, function() {
			e.controller.abort();
		});
	}
	var ra = null, ia = 0, aa = 0, oa = null;
	function sa(e, t) {
		if (ra === null) {
			var n = ra = [];
			ia = 0, aa = dd(), oa = {
				status: "pending",
				value: void 0,
				then: function(e) {
					n.push(e);
				}
			};
		}
		return ia++, t.then(ca, ca), t;
	}
	function ca() {
		if (--ia === 0 && ra !== null) {
			oa !== null && (oa.status = "fulfilled");
			var e = ra;
			ra = null, aa = 0, oa = null;
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
	}
	function la(e, t) {
		var n = [], r = {
			status: "pending",
			value: null,
			reason: null,
			then: function(e) {
				n.push(e);
			}
		};
		return e.then(function() {
			r.status = "fulfilled", r.value = t;
			for (var e = 0; e < n.length; e++) (0, n[e])(t);
		}, function(e) {
			for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
		}), r;
	}
	var ua = A.S;
	A.S = function(e, t) {
		eu = ke(), typeof t == "object" && t && typeof t.then == "function" && sa(e, t), ua !== null && ua(e, t);
	};
	var da = le(null);
	function fa() {
		var e = da.current;
		return e === null ? Ll.pooledCache : e;
	}
	function pa(e, t) {
		t === null ? N(da, da.current) : N(da, t.pool);
	}
	function ma() {
		var e = fa();
		return e === null ? null : {
			parent: ea._currentValue,
			pool: e
		};
	}
	var ha = Error(o(460)), ga = Error(o(474)), _a = Error(o(542)), va = { then: function() {} };
	function ya(e) {
		return e = e.status, e === "fulfilled" || e === "rejected";
	}
	function ba(e, t, n) {
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Xt, Xt), t = n), t.status) {
			case "fulfilled": return t.value;
			case "rejected": throw e = t.reason, wa(e), e;
			default:
				if (typeof t.status == "string") t.then(Xt, Xt);
				else {
					if (e = Ll, e !== null && 100 < e.shellSuspendCounter) throw Error(o(482));
					e = t, e.status = "pending", e.then(function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "fulfilled", n.value = e;
						}
					}, function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "rejected", n.reason = e;
						}
					});
				}
				switch (t.status) {
					case "fulfilled": return t.value;
					case "rejected": throw e = t.reason, wa(e), e;
				}
				throw Sa = t, ha;
		}
	}
	function xa(e) {
		try {
			var t = e._init;
			return t(e._payload);
		} catch (e) {
			throw typeof e == "object" && e && typeof e.then == "function" ? (Sa = e, ha) : e;
		}
	}
	var Sa = null;
	function Ca() {
		if (Sa === null) throw Error(o(459));
		var e = Sa;
		return Sa = null, e;
	}
	function wa(e) {
		if (e === ha || e === _a) throw Error(o(483));
	}
	var Ta = null, Ea = 0;
	function Da(e) {
		var t = Ea;
		return Ea += 1, Ta === null && (Ta = []), ba(Ta, e, t);
	}
	function Oa(e, t) {
		t = t.props.ref, e.ref = t === void 0 ? null : t;
	}
	function ka(e, t) {
		throw t.$$typeof === g ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
	}
	function Aa(e) {
		function t(t, n) {
			if (e) {
				var r = t.deletions;
				r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
			}
		}
		function n(n, r) {
			if (!e) return null;
			for (; r !== null;) t(n, r), r = r.sibling;
			return null;
		}
		function r(e) {
			for (var t = /* @__PURE__ */ new Map(); e !== null;) e.key === null ? t.set(e.index, e) : t.set(e.key, e), e = e.sibling;
			return t;
		}
		function i(e, t) {
			return e = ri(e, t), e.index = 0, e.sibling = null, e;
		}
		function a(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 67108866, n) : (r = r.index, r < n ? (t.flags |= 67108866, n) : r)) : (t.flags |= 1048576, n);
		}
		function s(t) {
			return e && t.alternate === null && (t.flags |= 67108866), t;
		}
		function c(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = si(n, e.mode, r), t.return = e, t) : (t = i(t, n), t.return = e, t);
		}
		function l(e, t, n, r) {
			var a = n.type;
			return a === y ? d(e, t, n.props.children, r, n.key) : t !== null && (t.elementType === a || typeof a == "object" && a && a.$$typeof === D && xa(a) === t.type) ? (t = i(t, n.props), Oa(t, n), t.return = e, t) : (t = ai(n.type, n.key, n.props, null, e.mode, r), Oa(t, n), t.return = e, t);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = li(n, e.mode, r), t.return = e, t) : (t = i(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, a) {
			return t === null || t.tag !== 7 ? (t = oi(n, e.mode, r, a), t.return = e, t) : (t = i(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == "string" && t !== "" || typeof t == "number" || typeof t == "bigint") return t = si("" + t, e.mode, n), t.return = e, t;
			if (typeof t == "object" && t) {
				switch (t.$$typeof) {
					case _: return n = ai(t.type, t.key, t.props, null, e.mode, n), Oa(n, t), n.return = e, n;
					case v: return t = li(t, e.mode, n), t.return = e, t;
					case D: return t = xa(t), f(e, t, n);
				}
				if (ae(t) || ne(t)) return t = oi(t, e.mode, n, null), t.return = e, t;
				if (typeof t.then == "function") return f(e, Da(t), n);
				if (t.$$typeof === C) return f(e, Yi(e, t), n);
				ka(e, t);
			}
			return null;
		}
		function p(e, t, n, r) {
			var i = t === null ? null : t.key;
			if (typeof n == "string" && n !== "" || typeof n == "number" || typeof n == "bigint") return i === null ? c(e, t, "" + n, r) : null;
			if (typeof n == "object" && n) {
				switch (n.$$typeof) {
					case _: return n.key === i ? l(e, t, n, r) : null;
					case v: return n.key === i ? u(e, t, n, r) : null;
					case D: return n = xa(n), p(e, t, n, r);
				}
				if (ae(n) || ne(n)) return i === null ? d(e, t, n, r, null) : null;
				if (typeof n.then == "function") return p(e, t, Da(n), r);
				if (n.$$typeof === C) return p(e, t, Yi(e, n), r);
				ka(e, n);
			}
			return null;
		}
		function m(e, t, n, r, i) {
			if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return e = e.get(n) || null, c(t, e, "" + r, i);
			if (typeof r == "object" && r) {
				switch (r.$$typeof) {
					case _: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
					case v: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
					case D: return r = xa(r), m(e, t, n, r, i);
				}
				if (ae(r) || ne(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				if (typeof r.then == "function") return m(e, t, n, Da(r), i);
				if (r.$$typeof === C) return m(e, t, n, Yi(t, r), i);
				ka(t, r);
			}
			return null;
		}
		function h(i, o, s, c) {
			for (var l = null, u = null, d = o, h = o = 0, g = null; d !== null && h < s.length; h++) {
				d.index > h ? (g = d, d = null) : g = d.sibling;
				var _ = p(i, d, s[h], c);
				if (_ === null) {
					d === null && (d = g);
					break;
				}
				e && d && _.alternate === null && t(i, d), o = a(_, o, h), u === null ? l = _ : u.sibling = _, u = _, d = g;
			}
			if (h === s.length) return n(i, d), K && xi(i, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (o = a(d, o, h), u === null ? l = d : u.sibling = d, u = d);
				return K && xi(i, h), l;
			}
			for (d = r(d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && g.alternate !== null && d.delete(g.key === null ? h : g.key), o = a(g, o, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), K && xi(i, h), l;
		}
		function g(i, s, c, l) {
			if (c == null) throw Error(o(151));
			for (var u = null, d = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
				h.index > g ? (_ = h, h = null) : _ = h.sibling;
				var y = p(i, h, v.value, l);
				if (y === null) {
					h === null && (h = _);
					break;
				}
				e && h && y.alternate === null && t(i, h), s = a(y, s, g), d === null ? u = y : d.sibling = y, d = y, h = _;
			}
			if (v.done) return n(i, h), K && xi(i, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(i, v.value, l), v !== null && (s = a(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return K && xi(i, g), u;
			}
			for (h = r(h); !v.done; g++, v = c.next()) v = m(h, i, g, v.value, l), v !== null && (e && v.alternate !== null && h.delete(v.key === null ? g : v.key), s = a(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(i, e);
			}), K && xi(i, g), u;
		}
		function b(e, r, a, c) {
			if (typeof a == "object" && a && a.type === y && a.key === null && (a = a.props.children), typeof a == "object" && a) {
				switch (a.$$typeof) {
					case _:
						a: {
							for (var l = a.key; r !== null;) {
								if (r.key === l) {
									if (l = a.type, l === y) {
										if (r.tag === 7) {
											n(e, r.sibling), c = i(r, a.props.children), c.return = e, e = c;
											break a;
										}
									} else if (r.elementType === l || typeof l == "object" && l && l.$$typeof === D && xa(l) === r.type) {
										n(e, r.sibling), c = i(r, a.props), Oa(c, a), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								} else t(e, r);
								r = r.sibling;
							}
							a.type === y ? (c = oi(a.props.children, e.mode, c, a.key), c.return = e, e = c) : (c = ai(a.type, a.key, a.props, null, e.mode, c), Oa(c, a), c.return = e, e = c);
						}
						return s(e);
					case v:
						a: {
							for (l = a.key; r !== null;) {
								if (r.key === l) if (r.tag === 4 && r.stateNode.containerInfo === a.containerInfo && r.stateNode.implementation === a.implementation) {
									n(e, r.sibling), c = i(r, a.children || []), c.return = e, e = c;
									break a;
								} else {
									n(e, r);
									break;
								}
								else t(e, r);
								r = r.sibling;
							}
							c = li(a, e.mode, c), c.return = e, e = c;
						}
						return s(e);
					case D: return a = xa(a), b(e, r, a, c);
				}
				if (ae(a)) return h(e, r, a, c);
				if (ne(a)) {
					if (l = ne(a), typeof l != "function") throw Error(o(150));
					return a = l.call(a), g(e, r, a, c);
				}
				if (typeof a.then == "function") return b(e, r, Da(a), c);
				if (a.$$typeof === C) return b(e, r, Yi(e, a), c);
				ka(e, a);
			}
			return typeof a == "string" && a !== "" || typeof a == "number" || typeof a == "bigint" ? (a = "" + a, r !== null && r.tag === 6 ? (n(e, r.sibling), c = i(r, a), c.return = e, e = c) : (n(e, r), c = si(a, e.mode, c), c.return = e, e = c), s(e)) : n(e, r);
		}
		return function(e, t, n, r) {
			try {
				Ea = 0;
				var i = b(e, t, n, r);
				return Ta = null, i;
			} catch (t) {
				if (t === ha || t === _a) throw t;
				var a = ti(29, t, null, e.mode);
				return a.lanes = r, a.return = e, a;
			}
		};
	}
	var ja = Aa(!0), Ma = Aa(!1), Na = !1;
	function Pa(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				lanes: 0,
				hiddenCallbacks: null
			},
			callbacks: null
		};
	}
	function Fa(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			callbacks: null
		});
	}
	function Ia(e) {
		return {
			lane: e,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function La(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, J & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = Qr(e), Zr(e, null, n), t;
		}
		return Jr(e, r, t, n), Qr(e);
	}
	function Ra(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, tt(e, n);
		}
	}
	function za(e, t) {
		var n = e.updateQueue, r = e.alternate;
		if (r !== null && (r = r.updateQueue, n === r)) {
			var i = null, a = null;
			if (n = n.firstBaseUpdate, n !== null) {
				do {
					var o = {
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: null,
						next: null
					};
					a === null ? i = a = o : a = a.next = o, n = n.next;
				} while (n !== null);
				a === null ? i = a = t : a = a.next = t;
			} else i = a = t;
			n = {
				baseState: r.baseState,
				firstBaseUpdate: i,
				lastBaseUpdate: a,
				shared: r.shared,
				callbacks: r.callbacks
			}, e.updateQueue = n;
			return;
		}
		e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
	}
	var Ba = !1;
	function Va() {
		if (Ba) {
			var e = oa;
			if (e !== null) throw e;
		}
	}
	function Ha(e, t, n, r) {
		Ba = !1;
		var i = e.updateQueue;
		Na = !1;
		var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
		if (s !== null) {
			i.shared.pending = null;
			var c = s, l = c.next;
			c.next = null, o === null ? a = l : o.next = l, o = c;
			var u = e.alternate;
			u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
		}
		if (a !== null) {
			var d = i.baseState;
			o = 0, u = l = c = null, s = a;
			do {
				var f = s.lane & -536870913, p = f !== s.lane;
				if (p ? (X & f) === f : (r & f) === f) {
					f !== 0 && f === aa && (Ba = !0), u !== null && (u = u.next = {
						lane: 0,
						tag: s.tag,
						payload: s.payload,
						callback: null,
						next: null
					});
					a: {
						var m = e, g = s;
						f = t;
						var _ = n;
						switch (g.tag) {
							case 1:
								if (m = g.payload, typeof m == "function") {
									d = m.call(_, d, f);
									break a;
								}
								d = m;
								break a;
							case 3: m.flags = m.flags & -65537 | 128;
							case 0:
								if (m = g.payload, f = typeof m == "function" ? m.call(_, d, f) : m, f == null) break a;
								d = h({}, d, f);
								break a;
							case 2: Na = !0;
						}
					}
					f = s.callback, f !== null && (e.flags |= 64, p && (e.flags |= 8192), p = i.callbacks, p === null ? i.callbacks = [f] : p.push(f));
				} else p = {
					lane: f,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null
				}, u === null ? (l = u = p, c = d) : u = u.next = p, o |= f;
				if (s = s.next, s === null) {
					if (s = i.shared.pending, s === null) break;
					p = s, s = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
				}
			} while (1);
			u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), Gl |= o, e.lanes = o, e.memoizedState = d;
		}
	}
	function Ua(e, t) {
		if (typeof e != "function") throw Error(o(191, e));
		e.call(t);
	}
	function Wa(e, t) {
		var n = e.callbacks;
		if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) Ua(n[e], t);
	}
	var Ga = le(null), Ka = le(0);
	function qa(e, t) {
		e = Ul, N(Ka, e), N(Ga, t), Ul = e | t.baseLanes;
	}
	function Ja() {
		N(Ka, Ul), N(Ga, Ga.current);
	}
	function Ya() {
		Ul = Ka.current, M(Ga), M(Ka);
	}
	var Xa = le(null), Za = null;
	function Qa(e) {
		var t = e.alternate;
		N(ro, ro.current & 1), N(Xa, e), Za === null && (t === null || Ga.current !== null || t.memoizedState !== null) && (Za = e);
	}
	function $a(e) {
		N(ro, ro.current), N(Xa, e), Za === null && (Za = e);
	}
	function eo(e) {
		e.tag === 22 ? (N(ro, ro.current), N(Xa, e), Za === null && (Za = e)) : to(e);
	}
	function to() {
		N(ro, ro.current), N(Xa, Xa.current);
	}
	function no(e) {
		M(Xa), Za === e && (Za = null), M(ro);
	}
	var ro = le(0);
	function io(e) {
		for (var t = e; t !== null;) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (n !== null && (n = n.dehydrated, n === null || of(n) || sf(n))) return t;
			} else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
				if (t.flags & 128) return t;
			} else if (t.child !== null) {
				t.child.return = t, t = t.child;
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			t.sibling.return = t.return, t = t.sibling;
		}
		return null;
	}
	var ao = 0, q = null, oo = null, so = null, co = !1, lo = !1, uo = !1, fo = 0, po = 0, mo = null, ho = 0;
	function go() {
		throw Error(o(321));
	}
	function _o(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!hr(e[n], t[n])) return !1;
		return !0;
	}
	function vo(e, t, n, r, i, a) {
		return ao = a, q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, A.H = e === null || e.memoizedState === null ? Fs : Is, uo = !1, a = n(r, i), uo = !1, lo && (a = bo(t, n, r, i)), yo(e), a;
	}
	function yo(e) {
		A.H = Ps;
		var t = oo !== null && oo.next !== null;
		if (ao = 0, so = oo = q = null, co = !1, po = 0, mo = null, t) throw Error(o(300));
		e === null || $s || (e = e.dependencies, e !== null && Ki(e) && ($s = !0));
	}
	function bo(e, t, n, r) {
		q = e;
		var i = 0;
		do {
			if (lo && (mo = null), po = 0, lo = !1, 25 <= i) throw Error(o(301));
			if (i += 1, so = oo = null, e.updateQueue != null) {
				var a = e.updateQueue;
				a.lastEffect = null, a.events = null, a.stores = null, a.memoCache != null && (a.memoCache.index = 0);
			}
			A.H = Ls, a = t(n, r);
		} while (lo);
		return a;
	}
	function xo() {
		var e = A.H, t = e.useState()[0];
		return t = typeof t.then == "function" ? Oo(t) : t, e = e.useState()[0], (oo === null ? null : oo.memoizedState) !== e && (q.flags |= 1024), t;
	}
	function So() {
		var e = fo !== 0;
		return fo = 0, e;
	}
	function Co(e, t, n) {
		t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
	}
	function wo(e) {
		if (co) {
			for (e = e.memoizedState; e !== null;) {
				var t = e.queue;
				t !== null && (t.pending = null), e = e.next;
			}
			co = !1;
		}
		ao = 0, so = oo = q = null, lo = !1, po = fo = 0, mo = null;
	}
	function To() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return so === null ? q.memoizedState = so = e : so = so.next = e, so;
	}
	function Eo() {
		if (oo === null) {
			var e = q.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = oo.next;
		var t = so === null ? q.memoizedState : so.next;
		if (t !== null) so = t, oo = e;
		else {
			if (e === null) throw q.alternate === null ? Error(o(467)) : Error(o(310));
			oo = e, e = {
				memoizedState: oo.memoizedState,
				baseState: oo.baseState,
				baseQueue: oo.baseQueue,
				queue: oo.queue,
				next: null
			}, so === null ? q.memoizedState = so = e : so = so.next = e;
		}
		return so;
	}
	function Do() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null
		};
	}
	function Oo(e) {
		var t = po;
		return po += 1, mo === null && (mo = []), e = ba(mo, e, t), t = q, (so === null ? t.memoizedState : so.next) === null && (t = t.alternate, A.H = t === null || t.memoizedState === null ? Fs : Is), e;
	}
	function ko(e) {
		if (typeof e == "object" && e) {
			if (typeof e.then == "function") return Oo(e);
			if (e.$$typeof === C) return Ji(e);
		}
		throw Error(o(438, String(e)));
	}
	function Ao(e) {
		var t = null, n = q.updateQueue;
		if (n !== null && (t = n.memoCache), t == null) {
			var r = q.alternate;
			r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
				data: r.data.map(function(e) {
					return e.slice();
				}),
				index: 0
			})));
		}
		if (t ??= {
			data: [],
			index: 0
		}, n === null && (n = Do(), q.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = te;
		return t.index++, n;
	}
	function jo(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function Mo(e) {
		return No(Eo(), oo, e);
	}
	function No(e, t, n) {
		var r = e.queue;
		if (r === null) throw Error(o(311));
		r.lastRenderedReducer = n;
		var i = e.baseQueue, a = r.pending;
		if (a !== null) {
			if (i !== null) {
				var s = i.next;
				i.next = a.next, a.next = s;
			}
			t.baseQueue = i = a, r.pending = null;
		}
		if (a = e.baseState, i === null) e.memoizedState = a;
		else {
			t = i.next;
			var c = s = null, l = null, u = t, d = !1;
			do {
				var f = u.lane & -536870913;
				if (f === u.lane ? (ao & f) === f : (X & f) === f) {
					var p = u.revertLane;
					if (p === 0) l !== null && (l = l.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}), f === aa && (d = !0);
					else if ((ao & p) === p) {
						u = u.next, p === aa && (d = !0);
						continue;
					} else f = {
						lane: 0,
						revertLane: u.revertLane,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}, l === null ? (c = l = f, s = a) : l = l.next = f, q.lanes |= p, Gl |= p;
					f = u.action, uo && n(a, f), a = u.hasEagerState ? u.eagerState : n(a, f);
				} else p = {
					lane: f,
					revertLane: u.revertLane,
					gesture: u.gesture,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}, l === null ? (c = l = p, s = a) : l = l.next = p, q.lanes |= f, Gl |= f;
				u = u.next;
			} while (u !== null && u !== t);
			if (l === null ? s = a : l.next = c, !hr(a, e.memoizedState) && ($s = !0, d && (n = oa, n !== null))) throw n;
			e.memoizedState = a, e.baseState = s, e.baseQueue = l, r.lastRenderedState = a;
		}
		return i === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
	}
	function Po(e) {
		var t = Eo(), n = t.queue;
		if (n === null) throw Error(o(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch, i = n.pending, a = t.memoizedState;
		if (i !== null) {
			n.pending = null;
			var s = i = i.next;
			do
				a = e(a, s.action), s = s.next;
			while (s !== i);
			hr(a, t.memoizedState) || ($s = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
		}
		return [a, r];
	}
	function Fo(e, t, n) {
		var r = q, i = Eo(), a = K;
		if (a) {
			if (n === void 0) throw Error(o(407));
			n = n();
		} else n = t();
		var s = !hr((oo || i).memoizedState, n);
		if (s && (i.memoizedState = n, $s = !0), i = i.queue, os(Ro.bind(null, r, i, e), [e]), i.getSnapshot !== t || s || so !== null && so.memoizedState.tag & 1) {
			if (r.flags |= 2048, ts(9, { destroy: void 0 }, Lo.bind(null, r, i, n, t), null), Ll === null) throw Error(o(349));
			a || ao & 127 || Io(r, t, n);
		}
		return n;
	}
	function Io(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = q.updateQueue, t === null ? (t = Do(), q.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
	}
	function Lo(e, t, n, r) {
		t.value = n, t.getSnapshot = r, zo(t) && Bo(e);
	}
	function Ro(e, t, n) {
		return n(function() {
			zo(t) && Bo(e);
		});
	}
	function zo(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !hr(e, n);
		} catch {
			return !0;
		}
	}
	function Bo(e) {
		var t = Xr(e, 2);
		t !== null && hu(t, e, 2);
	}
	function Vo(e) {
		var t = To();
		if (typeof e == "function") {
			var n = e;
			if (e = n(), uo) {
				I(!0);
				try {
					n();
				} finally {
					I(!1);
				}
			}
		}
		return t.memoizedState = t.baseState = e, t.queue = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: jo,
			lastRenderedState: e
		}, t;
	}
	function Ho(e, t, n, r) {
		return e.baseState = n, No(e, oo, typeof r == "function" ? r : jo);
	}
	function Uo(e, t, n, r, i) {
		if (js(e)) throw Error(o(485));
		if (e = t.action, e !== null) {
			var a = {
				payload: i,
				action: e,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function(e) {
					a.listeners.push(e);
				}
			};
			A.T === null ? a.isTransition = !1 : n(!0), r(a), n = t.pending, n === null ? (a.next = t.pending = a, Wo(t, a)) : (a.next = n.next, t.pending = n.next = a);
		}
	}
	function Wo(e, t) {
		var n = t.action, r = t.payload, i = e.state;
		if (t.isTransition) {
			var a = A.T, o = {};
			A.T = o;
			try {
				var s = n(i, r), c = A.S;
				c !== null && c(o, s), Go(e, t, s);
			} catch (n) {
				qo(e, t, n);
			} finally {
				a !== null && o.types !== null && (a.types = o.types), A.T = a;
			}
		} else try {
			a = n(i, r), Go(e, t, a);
		} catch (n) {
			qo(e, t, n);
		}
	}
	function Go(e, t, n) {
		typeof n == "object" && n && typeof n.then == "function" ? n.then(function(n) {
			Ko(e, t, n);
		}, function(n) {
			return qo(e, t, n);
		}) : Ko(e, t, n);
	}
	function Ko(e, t, n) {
		t.status = "fulfilled", t.value = n, Jo(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Wo(e, n)));
	}
	function qo(e, t, n) {
		var r = e.pending;
		if (e.pending = null, r !== null) {
			r = r.next;
			do
				t.status = "rejected", t.reason = n, Jo(t), t = t.next;
			while (t !== r);
		}
		e.action = null;
	}
	function Jo(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++) (0, e[t])();
	}
	function Yo(e, t) {
		return t;
	}
	function Xo(e, t) {
		if (K) {
			var n = Ll.formState;
			if (n !== null) {
				a: {
					var r = q;
					if (K) {
						if (Di) {
							b: {
								for (var i = Di, a = ki; i.nodeType !== 8;) {
									if (!a) {
										i = null;
										break b;
									}
									if (i = lf(i.nextSibling), i === null) {
										i = null;
										break b;
									}
								}
								a = i.data, i = a === "F!" || a === "F" ? i : null;
							}
							if (i) {
								Di = lf(i.nextSibling), r = i.data === "F!";
								break a;
							}
						}
						ji(r);
					}
					r = !1;
				}
				r && (t = n[0]);
			}
		}
		return n = To(), n.memoizedState = n.baseState = t, r = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Yo,
			lastRenderedState: t
		}, n.queue = r, n = Os.bind(null, q, r), r.dispatch = n, r = Vo(!1), a = As.bind(null, q, !1, r.queue), r = To(), i = {
			state: t,
			dispatch: null,
			action: e,
			pending: null
		}, r.queue = i, n = Uo.bind(null, q, i, a, n), i.dispatch = n, r.memoizedState = e, [
			t,
			n,
			!1
		];
	}
	function Zo(e) {
		return Qo(Eo(), oo, e);
	}
	function Qo(e, t, n) {
		if (t = No(e, t, Yo)[0], e = Mo(jo)[0], typeof t == "object" && t && typeof t.then == "function") try {
			var r = Oo(t);
		} catch (e) {
			throw e === ha ? _a : e;
		}
		else r = t;
		t = Eo();
		var i = t.queue, a = i.dispatch;
		return n !== t.memoizedState && (q.flags |= 2048, ts(9, { destroy: void 0 }, $o.bind(null, i, n), null)), [
			r,
			a,
			e
		];
	}
	function $o(e, t) {
		e.action = t;
	}
	function es(e) {
		var t = Eo(), n = oo;
		if (n !== null) return Qo(t, n, e);
		Eo(), t = t.memoizedState, n = Eo();
		var r = n.queue.dispatch;
		return n.memoizedState = e, [
			t,
			r,
			!1
		];
	}
	function ts(e, t, n, r) {
		return e = {
			tag: e,
			create: n,
			deps: r,
			inst: t,
			next: null
		}, t = q.updateQueue, t === null && (t = Do(), q.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
	}
	function ns() {
		return Eo().memoizedState;
	}
	function rs(e, t, n, r) {
		var i = To();
		q.flags |= e, i.memoizedState = ts(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r);
	}
	function is(e, t, n, r) {
		var i = Eo();
		r = r === void 0 ? null : r;
		var a = i.memoizedState.inst;
		oo !== null && r !== null && _o(r, oo.memoizedState.deps) ? i.memoizedState = ts(t, a, n, r) : (q.flags |= e, i.memoizedState = ts(1 | t, a, n, r));
	}
	function as(e, t) {
		rs(8390656, 8, e, t);
	}
	function os(e, t) {
		is(2048, 8, e, t);
	}
	function ss(e) {
		q.flags |= 4;
		var t = q.updateQueue;
		if (t === null) t = Do(), q.updateQueue = t, t.events = [e];
		else {
			var n = t.events;
			n === null ? t.events = [e] : n.push(e);
		}
	}
	function cs(e) {
		var t = Eo().memoizedState;
		return ss({
			ref: t,
			nextImpl: e
		}), function() {
			if (J & 2) throw Error(o(440));
			return t.impl.apply(void 0, arguments);
		};
	}
	function ls(e, t) {
		return is(4, 2, e, t);
	}
	function us(e, t) {
		return is(4, 4, e, t);
	}
	function ds(e, t) {
		if (typeof t == "function") {
			e = e();
			var n = t(e);
			return function() {
				typeof n == "function" ? n() : t(null);
			};
		}
		if (t != null) return e = e(), t.current = e, function() {
			t.current = null;
		};
	}
	function fs(e, t, n) {
		n = n == null ? null : n.concat([e]), is(4, 4, ds.bind(null, t, e), n);
	}
	function ps() {}
	function ms(e, t) {
		var n = Eo();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return t !== null && _o(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function hs(e, t) {
		var n = Eo();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		if (t !== null && _o(t, r[1])) return r[0];
		if (r = e(), uo) {
			I(!0);
			try {
				e();
			} finally {
				I(!1);
			}
		}
		return n.memoizedState = [r, t], r;
	}
	function gs(e, t, n) {
		return n === void 0 || ao & 1073741824 && !(X & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = mu(), q.lanes |= e, Gl |= e, n);
	}
	function _s(e, t, n, r) {
		return hr(n, t) ? n : Ga.current === null ? !(ao & 42) || ao & 1073741824 && !(X & 261930) ? ($s = !0, e.memoizedState = n) : (e = mu(), q.lanes |= e, Gl |= e, t) : (e = gs(e, n, r), hr(e, t) || ($s = !0), e);
	}
	function vs(e, t, n, r, i) {
		var a = j.p;
		j.p = a !== 0 && 8 > a ? a : 8;
		var o = A.T, s = {};
		A.T = s, As(e, !1, t, n);
		try {
			var c = i(), l = A.S;
			l !== null && l(s, c), typeof c == "object" && c && typeof c.then == "function" ? ks(e, t, la(c, r), pu(e)) : ks(e, t, r, pu(e));
		} catch (n) {
			ks(e, t, {
				then: function() {},
				status: "rejected",
				reason: n
			}, pu());
		} finally {
			j.p = a, o !== null && s.types !== null && (o.types = s.types), A.T = o;
		}
	}
	function ys() {}
	function bs(e, t, n, r) {
		if (e.tag !== 5) throw Error(o(476));
		var i = xs(e).queue;
		vs(e, i, t, oe, n === null ? ys : function() {
			return Ss(e), n(r);
		});
	}
	function xs(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: oe,
			baseState: oe,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: jo,
				lastRenderedState: oe
			},
			next: null
		};
		var n = {};
		return t.next = {
			memoizedState: n,
			baseState: n,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: jo,
				lastRenderedState: n
			},
			next: null
		}, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
	}
	function Ss(e) {
		var t = xs(e);
		t.next === null && (t = e.alternate.memoizedState), ks(e, t.next.queue, {}, pu());
	}
	function Cs() {
		return Ji(Qf);
	}
	function ws() {
		return Eo().memoizedState;
	}
	function Ts() {
		return Eo().memoizedState;
	}
	function Es(e) {
		for (var t = e.return; t !== null;) {
			switch (t.tag) {
				case 24:
				case 3:
					var n = pu();
					e = Ia(n);
					var r = La(t, e, n);
					r !== null && (hu(r, t, n), Ra(r, t, n)), t = { cache: ta() }, e.payload = t;
					return;
			}
			t = t.return;
		}
	}
	function Ds(e, t, n) {
		var r = pu();
		n = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, js(e) ? Ms(t, n) : (n = Yr(e, t, n, r), n !== null && (hu(n, e, r), Ns(n, t, r)));
	}
	function Os(e, t, n) {
		ks(e, t, n, pu());
	}
	function ks(e, t, n, r) {
		var i = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (js(e)) Ms(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, hr(s, o)) return Jr(e, t, i, 0), Ll === null && qr(), !1;
			} catch {}
			if (n = Yr(e, t, i, r), n !== null) return hu(n, e, r), Ns(n, t, r), !0;
		}
		return !1;
	}
	function As(e, t, n, r) {
		if (r = {
			lane: 2,
			revertLane: dd(),
			gesture: null,
			action: r,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, js(e)) {
			if (t) throw Error(o(479));
		} else t = Yr(e, n, r, 2), t !== null && hu(t, e, 2);
	}
	function js(e) {
		var t = e.alternate;
		return e === q || t !== null && t === q;
	}
	function Ms(e, t) {
		lo = co = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function Ns(e, t, n) {
		if (n & 4194048) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, tt(e, n);
		}
	}
	var Ps = {
		readContext: Ji,
		use: ko,
		useCallback: go,
		useContext: go,
		useEffect: go,
		useImperativeHandle: go,
		useLayoutEffect: go,
		useInsertionEffect: go,
		useMemo: go,
		useReducer: go,
		useRef: go,
		useState: go,
		useDebugValue: go,
		useDeferredValue: go,
		useTransition: go,
		useSyncExternalStore: go,
		useId: go,
		useHostTransitionStatus: go,
		useFormState: go,
		useActionState: go,
		useOptimistic: go,
		useMemoCache: go,
		useCacheRefresh: go
	};
	Ps.useEffectEvent = go;
	var Fs = {
		readContext: Ji,
		use: ko,
		useCallback: function(e, t) {
			return To().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: Ji,
		useEffect: as,
		useImperativeHandle: function(e, t, n) {
			n = n == null ? null : n.concat([e]), rs(4194308, 4, ds.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return rs(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			rs(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = To();
			t = t === void 0 ? null : t;
			var r = e();
			if (uo) {
				I(!0);
				try {
					e();
				} finally {
					I(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		},
		useReducer: function(e, t, n) {
			var r = To();
			if (n !== void 0) {
				var i = n(t);
				if (uo) {
					I(!0);
					try {
						n(t);
					} finally {
						I(!1);
					}
				}
			} else i = t;
			return r.memoizedState = r.baseState = i, e = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: i
			}, r.queue = e, e = e.dispatch = Ds.bind(null, q, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = To();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: function(e) {
			e = Vo(e);
			var t = e.queue, n = Os.bind(null, q, t);
			return t.dispatch = n, [e.memoizedState, n];
		},
		useDebugValue: ps,
		useDeferredValue: function(e, t) {
			return gs(To(), e, t);
		},
		useTransition: function() {
			var e = Vo(!1);
			return e = vs.bind(null, q, e.queue, !0, !1), To().memoizedState = e, [!1, e];
		},
		useSyncExternalStore: function(e, t, n) {
			var r = q, i = To();
			if (K) {
				if (n === void 0) throw Error(o(407));
				n = n();
			} else {
				if (n = t(), Ll === null) throw Error(o(349));
				X & 127 || Io(r, t, n);
			}
			i.memoizedState = n;
			var a = {
				value: n,
				getSnapshot: t
			};
			return i.queue = a, as(Ro.bind(null, r, a, e), [e]), r.flags |= 2048, ts(9, { destroy: void 0 }, Lo.bind(null, r, a, n, t), null), n;
		},
		useId: function() {
			var e = To(), t = Ll.identifierPrefix;
			if (K) {
				var n = bi, r = yi;
				n = (r & ~(1 << 32 - ze(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = fo++, 0 < n && (t += "H" + n.toString(32)), t += "_";
			} else n = ho++, t = "_" + t + "r_" + n.toString(32) + "_";
			return e.memoizedState = t;
		},
		useHostTransitionStatus: Cs,
		useFormState: Xo,
		useActionState: Xo,
		useOptimistic: function(e) {
			var t = To();
			t.memoizedState = t.baseState = e;
			var n = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: null,
				lastRenderedState: null
			};
			return t.queue = n, t = As.bind(null, q, !0, n), n.dispatch = t, [e, t];
		},
		useMemoCache: Ao,
		useCacheRefresh: function() {
			return To().memoizedState = Es.bind(null, q);
		},
		useEffectEvent: function(e) {
			var t = To(), n = { impl: e };
			return t.memoizedState = n, function() {
				if (J & 2) throw Error(o(440));
				return n.impl.apply(void 0, arguments);
			};
		}
	}, Is = {
		readContext: Ji,
		use: ko,
		useCallback: ms,
		useContext: Ji,
		useEffect: os,
		useImperativeHandle: fs,
		useInsertionEffect: ls,
		useLayoutEffect: us,
		useMemo: hs,
		useReducer: Mo,
		useRef: ns,
		useState: function() {
			return Mo(jo);
		},
		useDebugValue: ps,
		useDeferredValue: function(e, t) {
			return _s(Eo(), oo.memoizedState, e, t);
		},
		useTransition: function() {
			var e = Mo(jo)[0], t = Eo().memoizedState;
			return [typeof e == "boolean" ? e : Oo(e), t];
		},
		useSyncExternalStore: Fo,
		useId: ws,
		useHostTransitionStatus: Cs,
		useFormState: Zo,
		useActionState: Zo,
		useOptimistic: function(e, t) {
			return Ho(Eo(), oo, e, t);
		},
		useMemoCache: Ao,
		useCacheRefresh: Ts
	};
	Is.useEffectEvent = cs;
	var Ls = {
		readContext: Ji,
		use: ko,
		useCallback: ms,
		useContext: Ji,
		useEffect: os,
		useImperativeHandle: fs,
		useInsertionEffect: ls,
		useLayoutEffect: us,
		useMemo: hs,
		useReducer: Po,
		useRef: ns,
		useState: function() {
			return Po(jo);
		},
		useDebugValue: ps,
		useDeferredValue: function(e, t) {
			var n = Eo();
			return oo === null ? gs(n, e, t) : _s(n, oo.memoizedState, e, t);
		},
		useTransition: function() {
			var e = Po(jo)[0], t = Eo().memoizedState;
			return [typeof e == "boolean" ? e : Oo(e), t];
		},
		useSyncExternalStore: Fo,
		useId: ws,
		useHostTransitionStatus: Cs,
		useFormState: es,
		useActionState: es,
		useOptimistic: function(e, t) {
			var n = Eo();
			return oo === null ? (n.baseState = e, [e, n.queue.dispatch]) : Ho(n, oo, e, t);
		},
		useMemoCache: Ao,
		useCacheRefresh: Ts
	};
	Ls.useEffectEvent = cs;
	function Rs(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : h({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var zs = {
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = pu(), i = Ia(r);
			i.payload = t, n != null && (i.callback = n), t = La(e, i, r), t !== null && (hu(t, e, r), Ra(t, e, r));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = pu(), i = Ia(r);
			i.tag = 1, i.payload = t, n != null && (i.callback = n), t = La(e, i, r), t !== null && (hu(t, e, r), Ra(t, e, r));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = pu(), r = Ia(n);
			r.tag = 2, t != null && (r.callback = t), t = La(e, r, n), t !== null && (hu(t, e, n), Ra(t, e, n));
		}
	};
	function Bs(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !gr(n, r) || !gr(i, a) : !0;
	}
	function Vs(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && zs.enqueueReplaceState(t, t.state, null);
	}
	function Hs(e, t) {
		var n = t;
		if ("ref" in t) for (var r in n = {}, t) r !== "ref" && (n[r] = t[r]);
		if (e = e.defaultProps) for (var i in n === t && (n = h({}, n)), e) n[i] === void 0 && (n[i] = e[i]);
		return n;
	}
	function Us(e) {
		Ur(e);
	}
	function Ws(e) {
		console.error(e);
	}
	function Gs(e) {
		Ur(e);
	}
	function Ks(e, t) {
		try {
			var n = e.onUncaughtError;
			n(t.value, { componentStack: t.stack });
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function qs(e, t, n) {
		try {
			var r = e.onCaughtError;
			r(n.value, {
				componentStack: n.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null
			});
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Js(e, t, n) {
		return n = Ia(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
			Ks(e, t);
		}, n;
	}
	function Ys(e) {
		return e = Ia(e), e.tag = 3, e;
	}
	function Xs(e, t, n, r) {
		var i = n.type.getDerivedStateFromError;
		if (typeof i == "function") {
			var a = r.value;
			e.payload = function() {
				return i(a);
			}, e.callback = function() {
				qs(t, n, r);
			};
		}
		var o = n.stateNode;
		o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
			qs(t, n, r), typeof i != "function" && (ru === null ? ru = /* @__PURE__ */ new Set([this]) : ru.add(this));
			var e = r.stack;
			this.componentDidCatch(r.value, { componentStack: e === null ? "" : e });
		});
	}
	function Zs(e, t, n, r, i) {
		if (n.flags |= 32768, typeof r == "object" && r && typeof r.then == "function") {
			if (t = n.alternate, t !== null && Gi(t, n, i, !0), n = Xa.current, n !== null) {
				switch (n.tag) {
					case 31:
					case 13: return Za === null ? Du() : n.alternate === null && Wl === 0 && (Wl = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, r === va ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), Gu(e, r, i)), !1;
					case 22: return n.flags |= 65536, r === va ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
						transitions: null,
						markerInstances: null,
						retryQueue: /* @__PURE__ */ new Set([r])
					}, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : n.add(r)), Gu(e, r, i)), !1;
				}
				throw Error(o(435, n.tag));
			}
			return Gu(e, r, i), Du(), !1;
		}
		if (K) return t = Xa.current, t === null ? (r !== Ai && (t = Error(o(423), { cause: r }), Li(di(t, n))), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, r = di(r, n), i = Js(e.stateNode, r, i), za(e, i), Wl !== 4 && (Wl = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = i, r !== Ai && (e = Error(o(422), { cause: r }), Li(di(e, n)))), !1;
		var a = Error(o(520), { cause: r });
		if (a = di(a, n), Xl === null ? Xl = [a] : Xl.push(a), Wl !== 4 && (Wl = 2), t === null) return !0;
		r = di(r, n), n = t;
		do {
			switch (n.tag) {
				case 3: return n.flags |= 65536, e = i & -i, n.lanes |= e, e = Js(n.stateNode, r, e), za(n, e), !1;
				case 1: if (t = n.type, a = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == "function" || a !== null && typeof a.componentDidCatch == "function" && (ru === null || !ru.has(a)))) return n.flags |= 65536, i &= -i, n.lanes |= i, i = Ys(i), Xs(i, e, n, r), za(n, i), !1;
			}
			n = n.return;
		} while (n !== null);
		return !1;
	}
	var Qs = Error(o(461)), $s = !1;
	function ec(e, t, n, r) {
		t.child = e === null ? Ma(t, null, n, r) : ja(t, e.child, n, r);
	}
	function tc(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		if ("ref" in r) {
			var o = {};
			for (var s in r) s !== "ref" && (o[s] = r[s]);
		} else o = r;
		return qi(t), r = vo(e, t, n, o, a, i), s = So(), e !== null && !$s ? (Co(e, t, i), Tc(e, t, i)) : (K && s && Ci(t), t.flags |= 1, ec(e, t, r, i), t.child);
	}
	function nc(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !ni(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = a, rc(e, t, a, r, i)) : (e = ai(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, !Ec(e, i)) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? gr : n, n(o, r) && e.ref === t.ref) return Tc(e, t, i);
		}
		return t.flags |= 1, e = ri(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function rc(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (gr(a, r) && e.ref === t.ref) if ($s = !1, t.pendingProps = r = a, Ec(e, i)) e.flags & 131072 && ($s = !0);
			else return t.lanes = e.lanes, Tc(e, t, i);
		}
		return dc(e, t, n, r, i);
	}
	function ic(e, t, n, r) {
		var i = r.children, a = e === null ? null : e.memoizedState;
		if (e === null && t.stateNode === null && (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), r.mode === "hidden") {
			if (t.flags & 128) {
				if (a = a === null ? n : a.baseLanes | n, e !== null) {
					for (r = t.child = e.child, i = 0; r !== null;) i = i | r.lanes | r.childLanes, r = r.sibling;
					r = i & ~a;
				} else r = 0, t.child = null;
				return oc(e, t, a, n, r);
			}
			if (n & 536870912) t.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, e !== null && pa(t, a === null ? null : a.cachePool), a === null ? Ja() : qa(t, a), eo(t);
			else return r = t.lanes = 536870912, oc(e, t, a === null ? n : a.baseLanes | n, n, r);
		} else a === null ? (e !== null && pa(t, null), Ja(), to(t)) : (pa(t, a.cachePool), qa(t, a), to(t), t.memoizedState = null);
		return ec(e, t, i, n), t.child;
	}
	function ac(e, t) {
		return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), t.sibling;
	}
	function oc(e, t, n, r, i) {
		var a = fa();
		return a = a === null ? null : {
			parent: ea._currentValue,
			pool: a
		}, t.memoizedState = {
			baseLanes: n,
			cachePool: a
		}, e !== null && pa(t, null), Ja(), eo(t), e !== null && Gi(e, t, r, !0), t.childLanes = i, null;
	}
	function sc(e, t) {
		return t = bc({
			mode: t.mode,
			children: t.children
		}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
	}
	function cc(e, t, n) {
		return ja(t, e.child, null, n), e = sc(t, t.pendingProps), e.flags |= 2, no(t), t.memoizedState = null, e;
	}
	function lc(e, t, n) {
		var r = t.pendingProps, i = (t.flags & 128) != 0;
		if (t.flags &= -129, e === null) {
			if (K) {
				if (r.mode === "hidden") return e = sc(t, r), t.lanes = 536870912, ac(null, e);
				if ($a(t), (e = Di) ? (e = af(e, ki), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: vi === null ? null : {
						id: yi,
						overflow: bi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = ci(e), n.return = t, t.child = n, Ei = t, Di = null)) : e = null, e === null) throw ji(t);
				return t.lanes = 536870912, null;
			}
			return sc(t, r);
		}
		var a = e.memoizedState;
		if (a !== null) {
			var s = a.dehydrated;
			if ($a(t), i) if (t.flags & 256) t.flags &= -257, t = cc(e, t, n);
			else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
			else throw Error(o(558));
			else if ($s || Gi(e, t, n, !1), i = (n & e.childLanes) !== 0, $s || i) {
				if (r = Ll, r !== null && (s = nt(r, n), s !== 0 && s !== a.retryLane)) throw a.retryLane = s, Xr(e, s), hu(r, e, s), Qs;
				Du(), t = cc(e, t, n);
			} else e = a.treeContext, Di = lf(s.nextSibling), Ei = t, K = !0, Oi = null, ki = !1, e !== null && Ti(t, e), t = sc(t, r), t.flags |= 4096;
			return t;
		}
		return e = ri(e.child, {
			mode: r.mode,
			children: r.children
		}), e.ref = t.ref, t.child = e, e.return = t, e;
	}
	function uc(e, t) {
		var n = t.ref;
		if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof n != "function" && typeof n != "object") throw Error(o(284));
			(e === null || e.ref !== n) && (t.flags |= 4194816);
		}
	}
	function dc(e, t, n, r, i) {
		return qi(t), n = vo(e, t, n, r, void 0, i), r = So(), e !== null && !$s ? (Co(e, t, i), Tc(e, t, i)) : (K && r && Ci(t), t.flags |= 1, ec(e, t, n, i), t.child);
	}
	function fc(e, t, n, r, i, a) {
		return qi(t), t.updateQueue = null, n = bo(t, r, n, i), yo(e), r = So(), e !== null && !$s ? (Co(e, t, a), Tc(e, t, a)) : (K && r && Ci(t), t.flags |= 1, ec(e, t, n, a), t.child);
	}
	function pc(e, t, n, r, i) {
		if (qi(t), t.stateNode === null) {
			var a = $r, o = n.contextType;
			typeof o == "object" && o && (a = Ji(o)), a = new n(r, a), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = zs, t.stateNode = a, a._reactInternals = t, a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, Pa(t), o = n.contextType, a.context = typeof o == "object" && o ? Ji(o) : $r, a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Rs(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (o = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), o !== a.state && zs.enqueueReplaceState(a, a.state, null), Ha(t, r, a, i), Va(), a.state = t.memoizedState), typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
		} else if (e === null) {
			a = t.stateNode;
			var s = t.memoizedProps, c = Hs(n, s);
			a.props = c;
			var l = a.context, u = n.contextType;
			o = $r, typeof u == "object" && u && (o = Ji(u));
			var d = n.getDerivedStateFromProps;
			u = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, u || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s || l !== o) && Vs(t, a, r, o), Na = !1;
			var f = t.memoizedState;
			a.state = f, Ha(t, r, a, i), Va(), l = t.memoizedState, s || f !== l || Na ? (typeof d == "function" && (Rs(t, n, d, r), l = t.memoizedState), (c = Na || Bs(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = o, r = c) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			a = t.stateNode, Fa(e, t), o = t.memoizedProps, u = Hs(n, o), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, c = $r, typeof l == "object" && l && (c = Ji(l)), s = n.getDerivedStateFromProps, (l = typeof s == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== d || f !== c) && Vs(t, a, r, c), Na = !1, f = t.memoizedState, a.state = f, Ha(t, r, a, i), Va();
			var p = t.memoizedState;
			o !== d || f !== p || Na || e !== null && e.dependencies !== null && Ki(e.dependencies) ? (typeof s == "function" && (Rs(t, n, s, r), p = t.memoizedState), (u = Na || Bs(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && Ki(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, p, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, p, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return a = r, uc(e, t), r = (t.flags & 128) != 0, a || r ? (a = t.stateNode, n = r && typeof n.getDerivedStateFromError != "function" ? null : a.render(), t.flags |= 1, e !== null && r ? (t.child = ja(t, e.child, null, i), t.child = ja(t, null, n, i)) : ec(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = Tc(e, t, i), e;
	}
	function mc(e, t, n, r) {
		return Fi(), t.flags |= 256, ec(e, t, n, r), t.child;
	}
	var hc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};
	function gc(e) {
		return {
			baseLanes: e,
			cachePool: ma()
		};
	}
	function _c(e, t, n) {
		return e = e === null ? 0 : e.childLanes & ~n, t && (e |= Jl), e;
	}
	function vc(e, t, n) {
		var r = t.pendingProps, i = !1, a = (t.flags & 128) != 0, s;
		if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (ro.current & 2) != 0), s && (i = !0, t.flags &= -129), s = (t.flags & 32) != 0, t.flags &= -33, e === null) {
			if (K) {
				if (i ? Qa(t) : to(t), (e = Di) ? (e = af(e, ki), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: vi === null ? null : {
						id: yi,
						overflow: bi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = ci(e), n.return = t, t.child = n, Ei = t, Di = null)) : e = null, e === null) throw ji(t);
				return sf(e) ? t.lanes = 32 : t.lanes = 536870912, null;
			}
			var c = r.children;
			return r = r.fallback, i ? (to(t), i = t.mode, c = bc({
				mode: "hidden",
				children: c
			}, i), r = oi(r, i, n, null), c.return = t, r.return = t, c.sibling = r, t.child = c, r = t.child, r.memoizedState = gc(n), r.childLanes = _c(e, s, n), t.memoizedState = hc, ac(null, r)) : (Qa(t), yc(t, c));
		}
		var l = e.memoizedState;
		if (l !== null && (c = l.dehydrated, c !== null)) {
			if (a) t.flags & 256 ? (Qa(t), t.flags &= -257, t = xc(e, t, n)) : t.memoizedState === null ? (to(t), c = r.fallback, i = t.mode, r = bc({
				mode: "visible",
				children: r.children
			}, i), c = oi(c, i, n, null), c.flags |= 2, r.return = t, c.return = t, r.sibling = c, t.child = r, ja(t, e.child, null, n), r = t.child, r.memoizedState = gc(n), r.childLanes = _c(e, s, n), t.memoizedState = hc, t = ac(null, r)) : (to(t), t.child = e.child, t.flags |= 128, t = null);
			else if (Qa(t), sf(c)) {
				if (s = c.nextSibling && c.nextSibling.dataset, s) var u = s.dgst;
				s = u, r = Error(o(419)), r.stack = "", r.digest = s, Li({
					value: r,
					source: null,
					stack: null
				}), t = xc(e, t, n);
			} else if ($s || Gi(e, t, n, !1), s = (n & e.childLanes) !== 0, $s || s) {
				if (s = Ll, s !== null && (r = nt(s, n), r !== 0 && r !== l.retryLane)) throw l.retryLane = r, Xr(e, r), hu(s, e, r), Qs;
				of(c) || Du(), t = xc(e, t, n);
			} else of(c) ? (t.flags |= 192, t.child = e.child, t = null) : (e = l.treeContext, Di = lf(c.nextSibling), Ei = t, K = !0, Oi = null, ki = !1, e !== null && Ti(t, e), t = yc(t, r.children), t.flags |= 4096);
			return t;
		}
		return i ? (to(t), c = r.fallback, i = t.mode, l = e.child, u = l.sibling, r = ri(l, {
			mode: "hidden",
			children: r.children
		}), r.subtreeFlags = l.subtreeFlags & 65011712, u === null ? (c = oi(c, i, n, null), c.flags |= 2) : c = ri(u, c), c.return = t, r.return = t, r.sibling = c, t.child = r, ac(null, r), r = t.child, c = e.child.memoizedState, c === null ? c = gc(n) : (i = c.cachePool, i === null ? i = ma() : (l = ea._currentValue, i = i.parent === l ? i : {
			parent: l,
			pool: l
		}), c = {
			baseLanes: c.baseLanes | n,
			cachePool: i
		}), r.memoizedState = c, r.childLanes = _c(e, s, n), t.memoizedState = hc, ac(e.child, r)) : (Qa(t), n = e.child, e = n.sibling, n = ri(n, {
			mode: "visible",
			children: r.children
		}), n.return = t, n.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = n, t.memoizedState = null, n);
	}
	function yc(e, t) {
		return t = bc({
			mode: "visible",
			children: t
		}, e.mode), t.return = e, e.child = t;
	}
	function bc(e, t) {
		return e = ti(22, e, null, t), e.lanes = 0, e;
	}
	function xc(e, t, n) {
		return ja(t, e.child, null, n), e = yc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function Sc(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), Ui(e.return, t, n);
	}
	function Cc(e, t, n, r, i, a) {
		var o = e.memoizedState;
		o === null ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			renderingStartTime: 0,
			last: r,
			tail: n,
			tailMode: i,
			treeForkCount: a
		} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.treeForkCount = a);
	}
	function wc(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		r = r.children;
		var o = ro.current, s = (o & 2) != 0;
		if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, N(ro, o), ec(e, t, r, n), r = K ? hi : 0, !s && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && Sc(e, n, t);
			else if (e.tag === 19) Sc(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue;
			}
			if (e === t) break a;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break a;
				e = e.return;
			}
			e.sibling.return = e.return, e = e.sibling;
		}
		switch (i) {
			case "forwards":
				for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && io(e) === null && (i = n), n = n.sibling;
				n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Cc(t, !1, i, n, a, r);
				break;
			case "backwards":
			case "unstable_legacy-backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && io(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				Cc(t, !0, n, null, a, r);
				break;
			case "together":
				Cc(t, !1, null, null, void 0, r);
				break;
			default: t.memoizedState = null;
		}
		return t.child;
	}
	function Tc(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), Gl |= t.lanes, (n & t.childLanes) === 0) if (e !== null) {
			if (Gi(e, t, n, !1), (n & t.childLanes) === 0) return null;
		} else return null;
		if (e !== null && t.child !== e.child) throw Error(o(153));
		if (t.child !== null) {
			for (e = t.child, n = ri(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = ri(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function Ec(e, t) {
		return (e.lanes & t) === 0 ? (e = e.dependencies, !!(e !== null && Ki(e))) : !0;
	}
	function Dc(e, t, n) {
		switch (t.tag) {
			case 3:
				me(t, t.stateNode.containerInfo), Vi(t, ea, e.memoizedState.cache), Fi();
				break;
			case 27:
			case 5:
				ge(t);
				break;
			case 4:
				me(t, t.stateNode.containerInfo);
				break;
			case 10:
				Vi(t, t.type, t.memoizedProps.value);
				break;
			case 31:
				if (t.memoizedState !== null) return t.flags |= 128, $a(t), null;
				break;
			case 13:
				var r = t.memoizedState;
				if (r !== null) return r.dehydrated === null ? (n & t.child.childLanes) === 0 ? (Qa(t), e = Tc(e, t, n), e === null ? null : e.sibling) : vc(e, t, n) : (Qa(t), t.flags |= 128, null);
				Qa(t);
				break;
			case 19:
				var i = (e.flags & 128) != 0;
				if (r = (n & t.childLanes) !== 0, r ||= (Gi(e, t, n, !1), (n & t.childLanes) !== 0), i) {
					if (r) return wc(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), N(ro, ro.current), r) break;
				return null;
			case 22: return t.lanes = 0, ic(e, t, n, t.pendingProps);
			case 24: Vi(t, ea, e.memoizedState.cache);
		}
		return Tc(e, t, n);
	}
	function Oc(e, t, n) {
		if (e !== null) if (e.memoizedProps !== t.pendingProps) $s = !0;
		else {
			if (!Ec(e, n) && !(t.flags & 128)) return $s = !1, Dc(e, t, n);
			$s = !!(e.flags & 131072);
		}
		else $s = !1, K && t.flags & 1048576 && Si(t, hi, t.index);
		switch (t.lanes = 0, t.tag) {
			case 16:
				a: {
					var r = t.pendingProps;
					if (e = xa(t.elementType), t.type = e, typeof e == "function") ni(e) ? (r = Hs(e, r), t.tag = 1, t = pc(null, t, e, r, n)) : (t.tag = 0, t = dc(null, t, e, r, n));
					else {
						if (e != null) {
							var i = e.$$typeof;
							if (i === w) {
								t.tag = 11, t = tc(null, t, e, r, n);
								break a;
							} else if (i === E) {
								t.tag = 14, t = nc(null, t, e, r, n);
								break a;
							}
						}
						throw t = ie(e) || e, Error(o(306, t, ""));
					}
				}
				return t;
			case 0: return dc(e, t, t.type, t.pendingProps, n);
			case 1: return r = t.type, i = Hs(r, t.pendingProps), pc(e, t, r, i, n);
			case 3:
				a: {
					if (me(t, t.stateNode.containerInfo), e === null) throw Error(o(387));
					r = t.pendingProps;
					var a = t.memoizedState;
					i = a.element, Fa(e, t), Ha(t, r, null, n);
					var s = t.memoizedState;
					if (r = s.cache, Vi(t, ea, r), r !== a.cache && Wi(t, [ea], n, !0), Va(), r = s.element, a.isDehydrated) if (a = {
						element: r,
						isDehydrated: !1,
						cache: s.cache
					}, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
						t = mc(e, t, r, n);
						break a;
					} else if (r !== i) {
						i = di(Error(o(424)), t), Li(i), t = mc(e, t, r, n);
						break a;
					} else {
						switch (e = t.stateNode.containerInfo, e.nodeType) {
							case 9:
								e = e.body;
								break;
							default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
						}
						for (Di = lf(e.firstChild), Ei = t, K = !0, Oi = null, ki = !0, n = Ma(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
					}
					else {
						if (Fi(), r === i) {
							t = Tc(e, t, n);
							break a;
						}
						ec(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 26: return uc(e, t), e === null ? (n = Af(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : K || (n = t.type, e = t.pendingProps, r = Vd(fe.current).createElement(n), r[ct] = t, r[lt] = e, Fd(r, n, e), B(r), t.stateNode = r) : t.memoizedState = Af(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
			case 27: return ge(t), e === null && K && (r = t.stateNode = pf(t.type, t.pendingProps, fe.current), Ei = t, ki = !0, i = Di, Qd(t.type) ? (uf = i, Di = lf(r.firstChild)) : Di = i), ec(e, t, t.pendingProps.children, n), uc(e, t), e === null && (t.flags |= 4194304), t.child;
			case 5: return e === null && K && ((i = r = Di) && (r = nf(r, t.type, t.pendingProps, ki), r === null ? i = !1 : (t.stateNode = r, Ei = t, Di = lf(r.firstChild), ki = !1, i = !0)), i || ji(t)), ge(t), i = t.type, a = t.pendingProps, s = e === null ? null : e.memoizedProps, r = a.children, Wd(i, a) ? r = null : s !== null && Wd(i, s) && (t.flags |= 32), t.memoizedState !== null && (i = vo(e, t, xo, null, null, n), Qf._currentValue = i), uc(e, t), ec(e, t, r, n), t.child;
			case 6: return e === null && K && ((e = n = Di) && (n = rf(n, t.pendingProps, ki), n === null ? e = !1 : (t.stateNode = n, Ei = t, Di = null, e = !0)), e || ji(t)), null;
			case 13: return vc(e, t, n);
			case 4: return me(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ja(t, null, r, n) : ec(e, t, r, n), t.child;
			case 11: return tc(e, t, t.type, t.pendingProps, n);
			case 7: return ec(e, t, t.pendingProps, n), t.child;
			case 8: return ec(e, t, t.pendingProps.children, n), t.child;
			case 12: return ec(e, t, t.pendingProps.children, n), t.child;
			case 10: return r = t.pendingProps, Vi(t, t.type, r.value), ec(e, t, r.children, n), t.child;
			case 9: return i = t.type._context, r = t.pendingProps.children, qi(t), i = Ji(i), r = r(i), t.flags |= 1, ec(e, t, r, n), t.child;
			case 14: return nc(e, t, t.type, t.pendingProps, n);
			case 15: return rc(e, t, t.type, t.pendingProps, n);
			case 19: return wc(e, t, n);
			case 31: return lc(e, t, n);
			case 22: return ic(e, t, n, t.pendingProps);
			case 24: return qi(t), r = Ji(ea), e === null ? (i = fa(), i === null && (i = Ll, a = ta(), i.pooledCache = a, a.refCount++, a !== null && (i.pooledCacheLanes |= n), i = a), t.memoizedState = {
				parent: r,
				cache: i
			}, Pa(t), Vi(t, ea, i)) : ((e.lanes & n) !== 0 && (Fa(e, t), Ha(t, null, null, n), Va()), i = e.memoizedState, a = t.memoizedState, i.parent === r ? (r = a.cache, Vi(t, ea, r), r !== i.cache && Wi(t, [ea], n, !0)) : (i = {
				parent: r,
				cache: r
			}, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), Vi(t, ea, r))), ec(e, t, t.pendingProps.children, n), t.child;
			case 29: throw t.pendingProps;
		}
		throw Error(o(156, t.tag));
	}
	function kc(e) {
		e.flags |= 4;
	}
	function Ac(e, t, n, r, i) {
		if ((t = (e.mode & 32) != 0) && (t = !1), t) {
			if (e.flags |= 16777216, (i & 335544128) === i) if (e.stateNode.complete) e.flags |= 8192;
			else if (wu()) e.flags |= 8192;
			else throw Sa = va, ga;
		} else e.flags &= -16777217;
	}
	function jc(e, t) {
		if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
		else if (e.flags |= 16777216, !Wf(t)) if (wu()) e.flags |= 8192;
		else throw Sa = va, ga;
	}
	function Mc(e, t) {
		t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : Xe(), e.lanes |= t, Yl |= t);
	}
	function Nc(e, t) {
		if (!K) switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
				n === null ? e.tail = null : n.sibling = null;
				break;
			case "collapsed":
				n = e.tail;
				for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
				r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
		}
	}
	function Pc(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 65011712, r |= i.flags & 65011712, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function Fc(e, t, n) {
		var r = t.pendingProps;
		switch (wi(t), t.tag) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return Pc(t), null;
			case 1: return Pc(t), null;
			case 3: return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), Hi(ea), he(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Pi(t) ? kc(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ii())), Pc(t), null;
			case 26:
				var i = t.type, a = t.memoizedState;
				return e === null ? (kc(t), a === null ? (Pc(t), Ac(t, i, null, r, n)) : (Pc(t), jc(t, a))) : a ? a === e.memoizedState ? (Pc(t), t.flags &= -16777217) : (kc(t), Pc(t), jc(t, a)) : (e = e.memoizedProps, e !== r && kc(t), Pc(t), Ac(t, i, e, r, n)), null;
			case 27:
				if (_e(t), n = fe.current, i = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && kc(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(o(166));
						return Pc(t), null;
					}
					e = ue.current, Pi(t) ? Mi(t, e) : (e = pf(i, r, n), t.stateNode = e, kc(t));
				}
				return Pc(t), null;
			case 5:
				if (_e(t), i = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && kc(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(o(166));
						return Pc(t), null;
					}
					if (a = ue.current, Pi(t)) Mi(t, a);
					else {
						var s = Vd(fe.current);
						switch (a) {
							case 1:
								a = s.createElementNS("http://www.w3.org/2000/svg", i);
								break;
							case 2:
								a = s.createElementNS("http://www.w3.org/1998/Math/MathML", i);
								break;
							default: switch (i) {
								case "svg":
									a = s.createElementNS("http://www.w3.org/2000/svg", i);
									break;
								case "math":
									a = s.createElementNS("http://www.w3.org/1998/Math/MathML", i);
									break;
								case "script":
									a = s.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild);
									break;
								case "select":
									a = typeof r.is == "string" ? s.createElement("select", { is: r.is }) : s.createElement("select"), r.multiple ? a.multiple = !0 : r.size && (a.size = r.size);
									break;
								default: a = typeof r.is == "string" ? s.createElement(i, { is: r.is }) : s.createElement(i);
							}
						}
						a[ct] = t, a[lt] = r;
						a: for (s = t.child; s !== null;) {
							if (s.tag === 5 || s.tag === 6) a.appendChild(s.stateNode);
							else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
								s.child.return = s, s = s.child;
								continue;
							}
							if (s === t) break a;
							for (; s.sibling === null;) {
								if (s.return === null || s.return === t) break a;
								s = s.return;
							}
							s.sibling.return = s.return, s = s.sibling;
						}
						t.stateNode = a;
						a: switch (Fd(a, i, r), i) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break a;
							case "img":
								r = !0;
								break a;
							default: r = !1;
						}
						r && kc(t);
					}
				}
				return Pc(t), Ac(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== r && kc(t);
				else {
					if (typeof r != "string" && t.stateNode === null) throw Error(o(166));
					if (e = fe.current, Pi(t)) {
						if (e = t.stateNode, n = t.memoizedProps, r = null, i = Ei, i !== null) switch (i.tag) {
							case 27:
							case 5: r = i.memoizedProps;
						}
						e[ct] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || Md(e.nodeValue, n)), e || ji(t, !0);
					} else e = Vd(e).createTextNode(r), e[ct] = t, t.stateNode = e;
				}
				return Pc(t), null;
			case 31:
				if (n = t.memoizedState, e === null || e.memoizedState !== null) {
					if (r = Pi(t), n !== null) {
						if (e === null) {
							if (!r) throw Error(o(318));
							if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(o(557));
							e[ct] = t;
						} else Fi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						Pc(t), e = !1;
					} else n = Ii(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
					if (!e) return t.flags & 256 ? (no(t), t) : (no(t), null);
					if (t.flags & 128) throw Error(o(558));
				}
				return Pc(t), null;
			case 13:
				if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (i = Pi(t), r !== null && r.dehydrated !== null) {
						if (e === null) {
							if (!i) throw Error(o(318));
							if (i = t.memoizedState, i = i === null ? null : i.dehydrated, !i) throw Error(o(317));
							i[ct] = t;
						} else Fi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						Pc(t), i = !1;
					} else i = Ii(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
					if (!i) return t.flags & 256 ? (no(t), t) : (no(t), null);
				}
				return no(t), t.flags & 128 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, i = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (i = r.alternate.memoizedState.cachePool.pool), a = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (a = r.memoizedState.cachePool.pool), a !== i && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Mc(t, t.updateQueue), Pc(t), null);
			case 4: return he(), e === null && Sd(t.stateNode.containerInfo), Pc(t), null;
			case 10: return Hi(t.type), Pc(t), null;
			case 19:
				if (M(ro), r = t.memoizedState, r === null) return Pc(t), null;
				if (i = (t.flags & 128) != 0, a = r.rendering, a === null) if (i) Nc(r, !1);
				else {
					if (Wl !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
						if (a = io(e), a !== null) {
							for (t.flags |= 128, Nc(r, !1), e = a.updateQueue, t.updateQueue = e, Mc(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) ii(n, e), n = n.sibling;
							return N(ro, ro.current & 1 | 2), K && xi(t, r.treeForkCount), t.child;
						}
						e = e.sibling;
					}
					r.tail !== null && ke() > tu && (t.flags |= 128, i = !0, Nc(r, !1), t.lanes = 4194304);
				}
				else {
					if (!i) if (e = io(a), e !== null) {
						if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Mc(t, e), Nc(r, !0), r.tail === null && r.tailMode === "hidden" && !a.alternate && !K) return Pc(t), null;
					} else 2 * ke() - r.renderingStartTime > tu && n !== 536870912 && (t.flags |= 128, i = !0, Nc(r, !1), t.lanes = 4194304);
					r.isBackwards ? (a.sibling = t.child, t.child = a) : (e = r.last, e === null ? t.child = a : e.sibling = a, r.last = a);
				}
				return r.tail === null ? (Pc(t), null) : (e = r.tail, r.rendering = e, r.tail = e.sibling, r.renderingStartTime = ke(), e.sibling = null, n = ro.current, N(ro, i ? n & 1 | 2 : n & 1), K && xi(t, r.treeForkCount), e);
			case 22:
			case 23: return no(t), Ya(), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (Pc(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Pc(t), n = t.updateQueue, n !== null && Mc(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && M(da), null;
			case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Hi(ea), Pc(t), null;
			case 25: return null;
			case 30: return null;
		}
		throw Error(o(156, t.tag));
	}
	function Ic(e, t) {
		switch (wi(t), t.tag) {
			case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return Hi(ea), he(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 26:
			case 27:
			case 5: return _e(t), null;
			case 31:
				if (t.memoizedState !== null) {
					if (no(t), t.alternate === null) throw Error(o(340));
					Fi();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 13:
				if (no(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(o(340));
					Fi();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return M(ro), null;
			case 4: return he(), null;
			case 10: return Hi(t.type), null;
			case 22:
			case 23: return no(t), Ya(), e !== null && M(da), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 24: return Hi(ea), null;
			case 25: return null;
			default: return null;
		}
	}
	function Lc(e, t) {
		switch (wi(t), t.tag) {
			case 3:
				Hi(ea), he();
				break;
			case 26:
			case 27:
			case 5:
				_e(t);
				break;
			case 4:
				he();
				break;
			case 31:
				t.memoizedState !== null && no(t);
				break;
			case 13:
				no(t);
				break;
			case 19:
				M(ro);
				break;
			case 10:
				Hi(t.type);
				break;
			case 22:
			case 23:
				no(t), Ya(), e !== null && M(da);
				break;
			case 24: Hi(ea);
		}
	}
	function Rc(e, t) {
		try {
			var n = t.updateQueue, r = n === null ? null : n.lastEffect;
			if (r !== null) {
				var i = r.next;
				n = i;
				do {
					if ((n.tag & e) === e) {
						r = void 0;
						var a = n.create, o = n.inst;
						r = a(), o.destroy = r;
					}
					n = n.next;
				} while (n !== i);
			}
		} catch (e) {
			Z(t, t.return, e);
		}
	}
	function zc(e, t, n) {
		try {
			var r = t.updateQueue, i = r === null ? null : r.lastEffect;
			if (i !== null) {
				var a = i.next;
				r = a;
				do {
					if ((r.tag & e) === e) {
						var o = r.inst, s = o.destroy;
						if (s !== void 0) {
							o.destroy = void 0, i = t;
							var c = n, l = s;
							try {
								l();
							} catch (e) {
								Z(i, c, e);
							}
						}
					}
					r = r.next;
				} while (r !== a);
			}
		} catch (e) {
			Z(t, t.return, e);
		}
	}
	function Bc(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var n = e.stateNode;
			try {
				Wa(t, n);
			} catch (t) {
				Z(e, e.return, t);
			}
		}
	}
	function Vc(e, t, n) {
		n.props = Hs(e.type, e.memoizedProps), n.state = e.memoizedState;
		try {
			n.componentWillUnmount();
		} catch (n) {
			Z(e, t, n);
		}
	}
	function Hc(e, t) {
		try {
			var n = e.ref;
			if (n !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var r = e.stateNode;
						break;
					case 30:
						r = e.stateNode;
						break;
					default: r = e.stateNode;
				}
				typeof n == "function" ? e.refCleanup = n(r) : n.current = r;
			}
		} catch (n) {
			Z(e, t, n);
		}
	}
	function Uc(e, t) {
		var n = e.ref, r = e.refCleanup;
		if (n !== null) if (typeof r == "function") try {
			r();
		} catch (n) {
			Z(e, t, n);
		} finally {
			e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
		}
		else if (typeof n == "function") try {
			n(null);
		} catch (n) {
			Z(e, t, n);
		}
		else n.current = null;
	}
	function Wc(e) {
		var t = e.type, n = e.memoizedProps, r = e.stateNode;
		try {
			a: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					n.autoFocus && r.focus();
					break a;
				case "img": n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet);
			}
		} catch (t) {
			Z(e, e.return, t);
		}
	}
	function Gc(e, t, n) {
		try {
			var r = e.stateNode;
			Id(r, e.type, n, t), r[lt] = t;
		} catch (t) {
			Z(e, e.return, t);
		}
	}
	function Kc(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Qd(e.type) || e.tag === 4;
	}
	function qc(e) {
		a: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || Kc(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.tag === 27 && Qd(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
				e.child.return = e, e = e.child;
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function Jc(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Xt));
		else if (r !== 4 && (r === 27 && Qd(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null)) for (Jc(e, t, n), e = e.sibling; e !== null;) Jc(e, t, n), e = e.sibling;
	}
	function Yc(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
		else if (r !== 4 && (r === 27 && Qd(e.type) && (n = e.stateNode), e = e.child, e !== null)) for (Yc(e, t, n), e = e.sibling; e !== null;) Yc(e, t, n), e = e.sibling;
	}
	function Xc(e) {
		var t = e.stateNode, n = e.memoizedProps;
		try {
			for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
			Fd(t, r, n), t[ct] = e, t[lt] = n;
		} catch (t) {
			Z(e, e.return, t);
		}
	}
	var Zc = !1, Qc = !1, $c = !1, el = typeof WeakSet == "function" ? WeakSet : Set, tl = null;
	function nl(e, t) {
		if (e = e.containerInfo, zd = sp, e = br(e), xr(e)) {
			if ("selectionStart" in e) var n = {
				start: e.selectionStart,
				end: e.selectionEnd
			};
			else a: {
				n = (n = e.ownerDocument) && n.defaultView || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var i = r.anchorOffset, a = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, a.nodeType;
					} catch {
						n = null;
						break a;
					}
					var s = 0, c = -1, l = -1, u = 0, d = 0, f = e, p = null;
					b: for (;;) {
						for (var m; f !== n || i !== 0 && f.nodeType !== 3 || (c = s + i), f !== a || r !== 0 && f.nodeType !== 3 || (l = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
						for (;;) {
							if (f === e) break b;
							if (p === n && ++u === i && (c = s), p === a && ++d === r && (l = s), (m = f.nextSibling) !== null) break;
							f = p, p = f.parentNode;
						}
						f = m;
					}
					n = c === -1 || l === -1 ? null : {
						start: c,
						end: l
					};
				} else n = null;
			}
			n ||= {
				start: 0,
				end: 0
			};
		} else n = null;
		for (Bd = {
			focusedElem: e,
			selectionRange: n
		}, sp = !1, tl = t; tl !== null;) if (t = tl, e = t.child, t.subtreeFlags & 1028 && e !== null) e.return = t, tl = e;
		else for (; tl !== null;) {
			switch (t = tl, a = t.alternate, e = t.flags, t.tag) {
				case 0:
					if (e & 4 && (e = t.updateQueue, e = e === null ? null : e.events, e !== null)) for (n = 0; n < e.length; n++) i = e[n], i.ref.impl = i.nextImpl;
					break;
				case 11:
				case 15: break;
				case 1:
					if (e & 1024 && a !== null) {
						e = void 0, n = t, i = a.memoizedProps, a = a.memoizedState, r = n.stateNode;
						try {
							var h = Hs(n.type, i);
							e = r.getSnapshotBeforeUpdate(h, a), r.__reactInternalSnapshotBeforeUpdate = e;
						} catch (e) {
							Z(n, n.return, e);
						}
					}
					break;
				case 3:
					if (e & 1024) {
						if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9) tf(e);
						else if (n === 1) switch (e.nodeName) {
							case "HEAD":
							case "HTML":
							case "BODY":
								tf(e);
								break;
							default: e.textContent = "";
						}
					}
					break;
				case 5:
				case 26:
				case 27:
				case 6:
				case 4:
				case 17: break;
				default: if (e & 1024) throw Error(o(163));
			}
			if (e = t.sibling, e !== null) {
				e.return = t.return, tl = e;
				break;
			}
			tl = t.return;
		}
	}
	function rl(e, t, n) {
		var r = n.flags;
		switch (n.tag) {
			case 0:
			case 11:
			case 15:
				vl(e, n), r & 4 && Rc(5, n);
				break;
			case 1:
				if (vl(e, n), r & 4) if (e = n.stateNode, t === null) try {
					e.componentDidMount();
				} catch (e) {
					Z(n, n.return, e);
				}
				else {
					var i = Hs(n.type, t.memoizedProps);
					t = t.memoizedState;
					try {
						e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
					} catch (e) {
						Z(n, n.return, e);
					}
				}
				r & 64 && Bc(n), r & 512 && Hc(n, n.return);
				break;
			case 3:
				if (vl(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
					if (t = null, n.child !== null) switch (n.child.tag) {
						case 27:
						case 5:
							t = n.child.stateNode;
							break;
						case 1: t = n.child.stateNode;
					}
					try {
						Wa(e, t);
					} catch (e) {
						Z(n, n.return, e);
					}
				}
				break;
			case 27: t === null && r & 4 && Xc(n);
			case 26:
			case 5:
				vl(e, n), t === null && r & 4 && Wc(n), r & 512 && Hc(n, n.return);
				break;
			case 12:
				vl(e, n);
				break;
			case 31:
				vl(e, n), r & 4 && ll(e, n);
				break;
			case 13:
				vl(e, n), r & 4 && ul(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Ju.bind(null, n), cf(e, n))));
				break;
			case 22:
				if (r = n.memoizedState !== null || Zc, !r) {
					t = t !== null && t.memoizedState !== null || Qc, i = Zc;
					var a = Qc;
					Zc = r, (Qc = t) && !a ? bl(e, n, (n.subtreeFlags & 8772) != 0) : vl(e, n), Zc = i, Qc = a;
				}
				break;
			case 30: break;
			default: vl(e, n);
		}
	}
	function il(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, il(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && mt(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	var al = null, ol = !1;
	function sl(e, t, n) {
		for (n = n.child; n !== null;) cl(e, t, n), n = n.sibling;
	}
	function cl(e, t, n) {
		if (Re && typeof Re.onCommitFiberUnmount == "function") try {
			Re.onCommitFiberUnmount(Le, n);
		} catch {}
		switch (n.tag) {
			case 26:
				Qc || Uc(n, t), sl(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
				break;
			case 27:
				Qc || Uc(n, t);
				var r = al, i = ol;
				Qd(n.type) && (al = n.stateNode, ol = !1), sl(e, t, n), mf(n.stateNode), al = r, ol = i;
				break;
			case 5: Qc || Uc(n, t);
			case 6:
				if (r = al, i = ol, al = null, sl(e, t, n), al = r, ol = i, al !== null) if (ol) try {
					(al.nodeType === 9 ? al.body : al.nodeName === "HTML" ? al.ownerDocument.body : al).removeChild(n.stateNode);
				} catch (e) {
					Z(n, t, e);
				}
				else try {
					al.removeChild(n.stateNode);
				} catch (e) {
					Z(n, t, e);
				}
				break;
			case 18:
				al !== null && (ol ? (e = al, $d(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Np(e)) : $d(al, n.stateNode));
				break;
			case 4:
				r = al, i = ol, al = n.stateNode.containerInfo, ol = !0, sl(e, t, n), al = r, ol = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				zc(2, n, t), Qc || zc(4, n, t), sl(e, t, n);
				break;
			case 1:
				Qc || (Uc(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function" && Vc(n, t, r)), sl(e, t, n);
				break;
			case 21:
				sl(e, t, n);
				break;
			case 22:
				Qc = (r = Qc) || n.memoizedState !== null, sl(e, t, n), Qc = r;
				break;
			default: sl(e, t, n);
		}
	}
	function ll(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
			e = e.dehydrated;
			try {
				Np(e);
			} catch (e) {
				Z(t, t.return, e);
			}
		}
	}
	function ul(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
			Np(e);
		} catch (e) {
			Z(t, t.return, e);
		}
	}
	function dl(e) {
		switch (e.tag) {
			case 31:
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new el()), t;
			case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new el()), t;
			default: throw Error(o(435, e.tag));
		}
	}
	function fl(e, t) {
		var n = dl(e);
		t.forEach(function(t) {
			if (!n.has(t)) {
				n.add(t);
				var r = Yu.bind(null, e, t);
				t.then(r, r);
			}
		});
	}
	function pl(e, t) {
		var n = t.deletions;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r], a = e, s = t, c = s;
			a: for (; c !== null;) {
				switch (c.tag) {
					case 27:
						if (Qd(c.type)) {
							al = c.stateNode, ol = !1;
							break a;
						}
						break;
					case 5:
						al = c.stateNode, ol = !1;
						break a;
					case 3:
					case 4:
						al = c.stateNode.containerInfo, ol = !0;
						break a;
				}
				c = c.return;
			}
			if (al === null) throw Error(o(160));
			cl(a, s, i), al = null, ol = !1, a = i.alternate, a !== null && (a.return = null), i.return = null;
		}
		if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) hl(t, e), t = t.sibling;
	}
	var ml = null;
	function hl(e, t) {
		var n = e.alternate, r = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				pl(t, e), gl(e), r & 4 && (zc(3, e, e.return), Rc(3, e), zc(5, e, e.return));
				break;
			case 1:
				pl(t, e), gl(e), r & 512 && (Qc || n === null || Uc(n, n.return)), r & 64 && Zc && (e = e.updateQueue, e !== null && (r = e.callbacks, r !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? r : n.concat(r))));
				break;
			case 26:
				var i = ml;
				if (pl(t, e), gl(e), r & 512 && (Qc || n === null || Uc(n, n.return)), r & 4) {
					var a = n === null ? null : n.memoizedState;
					if (r = e.memoizedState, n === null) if (r === null) if (e.stateNode === null) {
						a: {
							r = e.type, n = e.memoizedProps, i = i.ownerDocument || i;
							b: switch (r) {
								case "title":
									a = i.getElementsByTagName("title")[0], (!a || a[pt] || a[ct] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = i.createElement(r), i.head.insertBefore(a, i.querySelector("head > title"))), Fd(a, r, n), a[ct] = e, B(a), r = a;
									break a;
								case "link":
									var s = Vf("link", "href", i).get(r + (n.href || ""));
									if (s) {
										for (var c = 0; c < s.length; c++) if (a = s[c], a.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && a.getAttribute("rel") === (n.rel == null ? null : n.rel) && a.getAttribute("title") === (n.title == null ? null : n.title) && a.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
											s.splice(c, 1);
											break b;
										}
									}
									a = i.createElement(r), Fd(a, r, n), i.head.appendChild(a);
									break;
								case "meta":
									if (s = Vf("meta", "content", i).get(r + (n.content || ""))) {
										for (c = 0; c < s.length; c++) if (a = s[c], a.getAttribute("content") === (n.content == null ? null : "" + n.content) && a.getAttribute("name") === (n.name == null ? null : n.name) && a.getAttribute("property") === (n.property == null ? null : n.property) && a.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && a.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
											s.splice(c, 1);
											break b;
										}
									}
									a = i.createElement(r), Fd(a, r, n), i.head.appendChild(a);
									break;
								default: throw Error(o(468, r));
							}
							a[ct] = e, B(a), r = a;
						}
						e.stateNode = r;
					} else Hf(i, e.type, e.stateNode);
					else e.stateNode = Lf(i, r, e.memoizedProps);
					else a === r ? r === null && e.stateNode !== null && Gc(e, e.memoizedProps, n.memoizedProps) : (a === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : a.count--, r === null ? Hf(i, e.type, e.stateNode) : Lf(i, r, e.memoizedProps));
				}
				break;
			case 27:
				pl(t, e), gl(e), r & 512 && (Qc || n === null || Uc(n, n.return)), n !== null && r & 4 && Gc(e, e.memoizedProps, n.memoizedProps);
				break;
			case 5:
				if (pl(t, e), gl(e), r & 512 && (Qc || n === null || Uc(n, n.return)), e.flags & 32) {
					i = e.stateNode;
					try {
						Ht(i, "");
					} catch (t) {
						Z(e, e.return, t);
					}
				}
				r & 4 && e.stateNode != null && (i = e.memoizedProps, Gc(e, i, n === null ? i : n.memoizedProps)), r & 1024 && ($c = !0);
				break;
			case 6:
				if (pl(t, e), gl(e), r & 4) {
					if (e.stateNode === null) throw Error(o(162));
					r = e.memoizedProps, n = e.stateNode;
					try {
						n.nodeValue = r;
					} catch (t) {
						Z(e, e.return, t);
					}
				}
				break;
			case 3:
				if ($ = null, i = ml, ml = _f(t.containerInfo), pl(t, e), ml = i, gl(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
					Np(t.containerInfo);
				} catch (t) {
					Z(e, e.return, t);
				}
				$c && ($c = !1, _l(e));
				break;
			case 4:
				r = ml, ml = _f(e.stateNode.containerInfo), pl(t, e), gl(e), ml = r;
				break;
			case 12:
				pl(t, e), gl(e);
				break;
			case 31:
				pl(t, e), gl(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, fl(e, r)));
				break;
			case 13:
				pl(t, e), gl(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && ($l = ke()), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, fl(e, r)));
				break;
			case 22:
				i = e.memoizedState !== null;
				var l = n !== null && n.memoizedState !== null, u = Zc, d = Qc;
				if (Zc = u || i, Qc = d || l, pl(t, e), Qc = d, Zc = u, gl(e), r & 8192) a: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (n === null || l || Zc || Qc || yl(e)), n = null, t = e;;) {
					if (t.tag === 5 || t.tag === 26) {
						if (n === null) {
							l = n = t;
							try {
								if (a = l.stateNode, i) s = a.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
								else {
									c = l.stateNode;
									var f = l.memoizedProps.style, p = f != null && f.hasOwnProperty("display") ? f.display : null;
									c.style.display = p == null || typeof p == "boolean" ? "" : ("" + p).trim();
								}
							} catch (e) {
								Z(l, l.return, e);
							}
						}
					} else if (t.tag === 6) {
						if (n === null) {
							l = t;
							try {
								l.stateNode.nodeValue = i ? "" : l.memoizedProps;
							} catch (e) {
								Z(l, l.return, e);
							}
						}
					} else if (t.tag === 18) {
						if (n === null) {
							l = t;
							try {
								var m = l.stateNode;
								i ? ef(m, !0) : ef(l.stateNode, !1);
							} catch (e) {
								Z(l, l.return, e);
							}
						}
					} else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
						t.child.return = t, t = t.child;
						continue;
					}
					if (t === e) break a;
					for (; t.sibling === null;) {
						if (t.return === null || t.return === e) break a;
						n === t && (n = null), t = t.return;
					}
					n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
				}
				r & 4 && (r = e.updateQueue, r !== null && (n = r.retryQueue, n !== null && (r.retryQueue = null, fl(e, n))));
				break;
			case 19:
				pl(t, e), gl(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, fl(e, r)));
				break;
			case 30: break;
			case 21: break;
			default: pl(t, e), gl(e);
		}
	}
	function gl(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var n, r = e.return; r !== null;) {
					if (Kc(r)) {
						n = r;
						break;
					}
					r = r.return;
				}
				if (n == null) throw Error(o(160));
				switch (n.tag) {
					case 27:
						var i = n.stateNode;
						Yc(e, qc(e), i);
						break;
					case 5:
						var a = n.stateNode;
						n.flags & 32 && (Ht(a, ""), n.flags &= -33), Yc(e, qc(e), a);
						break;
					case 3:
					case 4:
						var s = n.stateNode.containerInfo;
						Jc(e, qc(e), s);
						break;
					default: throw Error(o(161));
				}
			} catch (t) {
				Z(e, e.return, t);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function _l(e) {
		if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) {
			var t = e;
			_l(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
		}
	}
	function vl(e, t) {
		if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) rl(e, t.alternate, t), t = t.sibling;
	}
	function yl(e) {
		for (e = e.child; e !== null;) {
			var t = e;
			switch (t.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					zc(4, t, t.return), yl(t);
					break;
				case 1:
					Uc(t, t.return);
					var n = t.stateNode;
					typeof n.componentWillUnmount == "function" && Vc(t, t.return, n), yl(t);
					break;
				case 27: mf(t.stateNode);
				case 26:
				case 5:
					Uc(t, t.return), yl(t);
					break;
				case 22:
					t.memoizedState === null && yl(t);
					break;
				case 30:
					yl(t);
					break;
				default: yl(t);
			}
			e = e.sibling;
		}
	}
	function bl(e, t, n) {
		for (n &&= (t.subtreeFlags & 8772) != 0, t = t.child; t !== null;) {
			var r = t.alternate, i = e, a = t, o = a.flags;
			switch (a.tag) {
				case 0:
				case 11:
				case 15:
					bl(i, a, n), Rc(4, a);
					break;
				case 1:
					if (bl(i, a, n), r = a, i = r.stateNode, typeof i.componentDidMount == "function") try {
						i.componentDidMount();
					} catch (e) {
						Z(r, r.return, e);
					}
					if (r = a, i = r.updateQueue, i !== null) {
						var s = r.stateNode;
						try {
							var c = i.shared.hiddenCallbacks;
							if (c !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < c.length; i++) Ua(c[i], s);
						} catch (e) {
							Z(r, r.return, e);
						}
					}
					n && o & 64 && Bc(a), Hc(a, a.return);
					break;
				case 27: Xc(a);
				case 26:
				case 5:
					bl(i, a, n), n && r === null && o & 4 && Wc(a), Hc(a, a.return);
					break;
				case 12:
					bl(i, a, n);
					break;
				case 31:
					bl(i, a, n), n && o & 4 && ll(i, a);
					break;
				case 13:
					bl(i, a, n), n && o & 4 && ul(i, a);
					break;
				case 22:
					a.memoizedState === null && bl(i, a, n), Hc(a, a.return);
					break;
				case 30: break;
				default: bl(i, a, n);
			}
			t = t.sibling;
		}
	}
	function xl(e, t) {
		var n = null;
		e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && na(n));
	}
	function Sl(e, t) {
		e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && na(e));
	}
	function Cl(e, t, n, r) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) wl(e, t, n, r), t = t.sibling;
	}
	function wl(e, t, n, r) {
		var i = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				Cl(e, t, n, r), i & 2048 && Rc(9, t);
				break;
			case 1:
				Cl(e, t, n, r);
				break;
			case 3:
				Cl(e, t, n, r), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && na(e)));
				break;
			case 12:
				if (i & 2048) {
					Cl(e, t, n, r), e = t.stateNode;
					try {
						var a = t.memoizedProps, o = a.id, s = a.onPostCommit;
						typeof s == "function" && s(o, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
					} catch (e) {
						Z(t, t.return, e);
					}
				} else Cl(e, t, n, r);
				break;
			case 31:
				Cl(e, t, n, r);
				break;
			case 13:
				Cl(e, t, n, r);
				break;
			case 23: break;
			case 22:
				a = t.stateNode, o = t.alternate, t.memoizedState === null ? a._visibility & 2 ? Cl(e, t, n, r) : (a._visibility |= 2, Tl(e, t, n, r, (t.subtreeFlags & 10256) != 0 || !1)) : a._visibility & 2 ? Cl(e, t, n, r) : El(e, t), i & 2048 && xl(o, t);
				break;
			case 24:
				Cl(e, t, n, r), i & 2048 && Sl(t.alternate, t);
				break;
			default: Cl(e, t, n, r);
		}
	}
	function Tl(e, t, n, r, i) {
		for (i &&= (t.subtreeFlags & 10256) != 0 || !1, t = t.child; t !== null;) {
			var a = e, o = t, s = n, c = r, l = o.flags;
			switch (o.tag) {
				case 0:
				case 11:
				case 15:
					Tl(a, o, s, c, i), Rc(8, o);
					break;
				case 23: break;
				case 22:
					var u = o.stateNode;
					o.memoizedState === null ? (u._visibility |= 2, Tl(a, o, s, c, i)) : u._visibility & 2 ? Tl(a, o, s, c, i) : El(a, o), i && l & 2048 && xl(o.alternate, o);
					break;
				case 24:
					Tl(a, o, s, c, i), i && l & 2048 && Sl(o.alternate, o);
					break;
				default: Tl(a, o, s, c, i);
			}
			t = t.sibling;
		}
	}
	function El(e, t) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) {
			var n = e, r = t, i = r.flags;
			switch (r.tag) {
				case 22:
					El(n, r), i & 2048 && xl(r.alternate, r);
					break;
				case 24:
					El(n, r), i & 2048 && Sl(r.alternate, r);
					break;
				default: El(n, r);
			}
			t = t.sibling;
		}
	}
	var Dl = 8192;
	function Ol(e, t, n) {
		if (e.subtreeFlags & Dl) for (e = e.child; e !== null;) kl(e, t, n), e = e.sibling;
	}
	function kl(e, t, n) {
		switch (e.tag) {
			case 26:
				Ol(e, t, n), e.flags & Dl && e.memoizedState !== null && Gf(n, ml, e.memoizedState, e.memoizedProps);
				break;
			case 5:
				Ol(e, t, n);
				break;
			case 3:
			case 4:
				var r = ml;
				ml = _f(e.stateNode.containerInfo), Ol(e, t, n), ml = r;
				break;
			case 22:
				e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Dl, Dl = 16777216, Ol(e, t, n), Dl = r) : Ol(e, t, n));
				break;
			default: Ol(e, t, n);
		}
	}
	function Al(e) {
		var t = e.alternate;
		if (t !== null && (e = t.child, e !== null)) {
			t.child = null;
			do
				t = e.sibling, e.sibling = null, e = t;
			while (e !== null);
		}
	}
	function jl(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				tl = r, Pl(r, e);
			}
			Al(e);
		}
		if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) Ml(e), e = e.sibling;
	}
	function Ml(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				jl(e), e.flags & 2048 && zc(9, e, e.return);
				break;
			case 3:
				jl(e);
				break;
			case 12:
				jl(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Nl(e)) : jl(e);
				break;
			default: jl(e);
		}
	}
	function Nl(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				tl = r, Pl(r, e);
			}
			Al(e);
		}
		for (e = e.child; e !== null;) {
			switch (t = e, t.tag) {
				case 0:
				case 11:
				case 15:
					zc(8, t, t.return), Nl(t);
					break;
				case 22:
					n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Nl(t));
					break;
				default: Nl(t);
			}
			e = e.sibling;
		}
	}
	function Pl(e, t) {
		for (; tl !== null;) {
			var n = tl;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					zc(8, n, t);
					break;
				case 23:
				case 22:
					if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
						var r = n.memoizedState.cachePool.pool;
						r != null && r.refCount++;
					}
					break;
				case 24: na(n.memoizedState.cache);
			}
			if (r = n.child, r !== null) r.return = n, tl = r;
			else a: for (n = e; tl !== null;) {
				r = tl;
				var i = r.sibling, a = r.return;
				if (il(r), r === n) {
					tl = null;
					break a;
				}
				if (i !== null) {
					i.return = a, tl = i;
					break a;
				}
				tl = a;
			}
		}
	}
	var Fl = {
		getCacheForType: function(e) {
			var t = Ji(ea), n = t.data.get(e);
			return n === void 0 && (n = e(), t.data.set(e, n)), n;
		},
		cacheSignal: function() {
			return Ji(ea).controller.signal;
		}
	}, Il = typeof WeakMap == "function" ? WeakMap : Map, J = 0, Ll = null, Y = null, X = 0, Rl = 0, zl = null, Bl = !1, Vl = !1, Hl = !1, Ul = 0, Wl = 0, Gl = 0, Kl = 0, ql = 0, Jl = 0, Yl = 0, Xl = null, Zl = null, Ql = !1, $l = 0, eu = 0, tu = Infinity, nu = null, ru = null, iu = 0, au = null, ou = null, su = 0, cu = 0, lu = null, uu = null, du = 0, fu = null;
	function pu() {
		return J & 2 && X !== 0 ? X & -X : A.T === null ? at() : dd();
	}
	function mu() {
		if (Jl === 0) if (!(X & 536870912) || K) {
			var e = We;
			We <<= 1, !(We & 3932160) && (We = 262144), Jl = e;
		} else Jl = 536870912;
		return e = Xa.current, e !== null && (e.flags |= 32), Jl;
	}
	function hu(e, t, n) {
		(e === Ll && (Rl === 2 || Rl === 9) || e.cancelPendingCommit !== null) && (Su(e, 0), yu(e, X, Jl, !1)), Qe(e, n), (!(J & 2) || e !== Ll) && (e === Ll && (!(J & 2) && (Kl |= n), Wl === 4 && yu(e, X, Jl, !1)), rd(e));
	}
	function gu(e, t, n) {
		if (J & 6) throw Error(o(327));
		var r = !n && (t & 127) == 0 && (t & e.expiredLanes) === 0 || Je(e, t), i = r ? Au(e, t) : Ou(e, t, !0), a = r;
		do {
			if (i === 0) {
				Vl && !r && yu(e, t, 0, !1);
				break;
			} else {
				if (n = e.current.alternate, a && !vu(n)) {
					i = Ou(e, t, !1), a = !1;
					continue;
				}
				if (i === 2) {
					if (a = t, e.errorRecoveryDisabledLanes & a) var s = 0;
					else s = e.pendingLanes & -536870913, s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
					if (s !== 0) {
						t = s;
						a: {
							var c = e;
							i = Xl;
							var l = c.current.memoizedState.isDehydrated;
							if (l && (Su(c, s).flags |= 256), s = Ou(c, s, !1), s !== 2) {
								if (Hl && !l) {
									c.errorRecoveryDisabledLanes |= a, Kl |= a, i = 4;
									break a;
								}
								a = Zl, Zl = i, a !== null && (Zl === null ? Zl = a : Zl.push.apply(Zl, a));
							}
							i = s;
						}
						if (a = !1, i !== 2) continue;
					}
				}
				if (i === 1) {
					Su(e, 0), yu(e, t, 0, !0);
					break;
				}
				a: {
					switch (r = e, a = i, a) {
						case 0:
						case 1: throw Error(o(345));
						case 4: if ((t & 4194048) !== t) break;
						case 6:
							yu(r, t, Jl, !Bl);
							break a;
						case 2:
							Zl = null;
							break;
						case 3:
						case 5: break;
						default: throw Error(o(329));
					}
					if ((t & 62914560) === t && (i = $l + 300 - ke(), 10 < i)) {
						if (yu(r, t, Jl, !Bl), qe(r, 0, !0) !== 0) break a;
						su = t, r.timeoutHandle = qd(_u.bind(null, r, n, Zl, nu, Ql, t, Jl, Kl, Yl, Bl, a, "Throttled", -0, 0), i);
						break a;
					}
					_u(r, n, Zl, nu, Ql, t, Jl, Kl, Yl, Bl, a, null, -0, 0);
				}
			}
			break;
		} while (1);
		rd(e);
	}
	function _u(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
		if (e.timeoutHandle = -1, d = t.subtreeFlags, d & 8192 || (d & 16785408) == 16785408) {
			d = {
				stylesheets: null,
				count: 0,
				imgCount: 0,
				imgBytes: 0,
				suspenseyImages: [],
				waitingForImages: !0,
				waitingForViewTransition: !1,
				unsuspend: Xt
			}, kl(t, a, d);
			var m = (a & 62914560) === a ? $l - ke() : (a & 4194048) === a ? eu - ke() : 0;
			if (m = qf(d, m), m !== null) {
				su = a, e.cancelPendingCommit = m(Lu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p)), yu(e, a, o, !l);
				return;
			}
		}
		Lu(e, t, a, n, r, i, o, s, c);
	}
	function vu(e) {
		for (var t = e;;) {
			var n = t.tag;
			if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
				var i = n[r], a = i.getSnapshot;
				i = i.value;
				try {
					if (!hr(a(), i)) return !1;
				} catch {
					return !1;
				}
			}
			if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
			else {
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				t.sibling.return = t.return, t = t.sibling;
			}
		}
		return !0;
	}
	function yu(e, t, n, r) {
		t &= ~ql, t &= ~Kl, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
		for (var i = t; 0 < i;) {
			var a = 31 - ze(i), o = 1 << a;
			r[a] = -1, i &= ~o;
		}
		n !== 0 && et(e, n, t);
	}
	function bu() {
		return J & 6 ? !0 : (id(0, !1), !1);
	}
	function xu() {
		if (Y !== null) {
			if (Rl === 0) var e = Y.return;
			else e = Y, Bi = zi = null, wo(e), Ta = null, Ea = 0, e = Y;
			for (; e !== null;) Lc(e.alternate, e), e = e.return;
			Y = null;
		}
	}
	function Su(e, t) {
		var n = e.timeoutHandle;
		n !== -1 && (e.timeoutHandle = -1, Jd(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), su = 0, xu(), Ll = e, Y = n = ri(e.current, null), X = t, Rl = 0, zl = null, Bl = !1, Vl = Je(e, t), Hl = !1, Yl = Jl = ql = Kl = Gl = Wl = 0, Zl = Xl = null, Ql = !1, t & 8 && (t |= t & 32);
		var r = e.entangledLanes;
		if (r !== 0) for (e = e.entanglements, r &= t; 0 < r;) {
			var i = 31 - ze(r), a = 1 << i;
			t |= e[i], r &= ~a;
		}
		return Ul = t, qr(), n;
	}
	function Cu(e, t) {
		q = null, A.H = Ps, t === ha || t === _a ? (t = Ca(), Rl = 3) : t === ga ? (t = Ca(), Rl = 4) : Rl = t === Qs ? 8 : typeof t == "object" && t && typeof t.then == "function" ? 6 : 1, zl = t, Y === null && (Wl = 1, Ks(e, di(t, e.current)));
	}
	function wu() {
		var e = Xa.current;
		return e === null ? !0 : (X & 4194048) === X ? Za === null : (X & 62914560) === X || X & 536870912 ? e === Za : !1;
	}
	function Tu() {
		var e = A.H;
		return A.H = Ps, e === null ? Ps : e;
	}
	function Eu() {
		var e = A.A;
		return A.A = Fl, e;
	}
	function Du() {
		Wl = 4, Bl || (X & 4194048) !== X && Xa.current !== null || (Vl = !0), !(Gl & 134217727) && !(Kl & 134217727) || Ll === null || yu(Ll, X, Jl, !1);
	}
	function Ou(e, t, n) {
		var r = J;
		J |= 2;
		var i = Tu(), a = Eu();
		(Ll !== e || X !== t) && (nu = null, Su(e, t)), t = !1;
		var o = Wl;
		a: do
			try {
				if (Rl !== 0 && Y !== null) {
					var s = Y, c = zl;
					switch (Rl) {
						case 8:
							xu(), o = 6;
							break a;
						case 3:
						case 2:
						case 9:
						case 6:
							Xa.current === null && (t = !0);
							var l = Rl;
							if (Rl = 0, zl = null, Pu(e, s, c, l), n && Vl) {
								o = 0;
								break a;
							}
							break;
						default: l = Rl, Rl = 0, zl = null, Pu(e, s, c, l);
					}
				}
				ku(), o = Wl;
				break;
			} catch (t) {
				Cu(e, t);
			}
		while (1);
		return t && e.shellSuspendCounter++, Bi = zi = null, J = r, A.H = i, A.A = a, Y === null && (Ll = null, X = 0, qr()), o;
	}
	function ku() {
		for (; Y !== null;) Mu(Y);
	}
	function Au(e, t) {
		var n = J;
		J |= 2;
		var r = Tu(), i = Eu();
		Ll !== e || X !== t ? (nu = null, tu = ke() + 500, Su(e, t)) : Vl = Je(e, t);
		a: do
			try {
				if (Rl !== 0 && Y !== null) {
					t = Y;
					var a = zl;
					b: switch (Rl) {
						case 1:
							Rl = 0, zl = null, Pu(e, t, a, 1);
							break;
						case 2:
						case 9:
							if (ya(a)) {
								Rl = 0, zl = null, Nu(t);
								break;
							}
							t = function() {
								Rl !== 2 && Rl !== 9 || Ll !== e || (Rl = 7), rd(e);
							}, a.then(t, t);
							break a;
						case 3:
							Rl = 7;
							break a;
						case 4:
							Rl = 5;
							break a;
						case 7:
							ya(a) ? (Rl = 0, zl = null, Nu(t)) : (Rl = 0, zl = null, Pu(e, t, a, 7));
							break;
						case 5:
							var s = null;
							switch (Y.tag) {
								case 26: s = Y.memoizedState;
								case 5:
								case 27:
									var c = Y;
									if (s ? Wf(s) : c.stateNode.complete) {
										Rl = 0, zl = null;
										var l = c.sibling;
										if (l !== null) Y = l;
										else {
											var u = c.return;
											u === null ? Y = null : (Y = u, Fu(u));
										}
										break b;
									}
							}
							Rl = 0, zl = null, Pu(e, t, a, 5);
							break;
						case 6:
							Rl = 0, zl = null, Pu(e, t, a, 6);
							break;
						case 8:
							xu(), Wl = 6;
							break a;
						default: throw Error(o(462));
					}
				}
				ju();
				break;
			} catch (t) {
				Cu(e, t);
			}
		while (1);
		return Bi = zi = null, A.H = r, A.A = i, J = n, Y === null ? (Ll = null, X = 0, qr(), Wl) : 0;
	}
	function ju() {
		for (; Y !== null && !De();) Mu(Y);
	}
	function Mu(e) {
		var t = Oc(e.alternate, e, Ul);
		e.memoizedProps = e.pendingProps, t === null ? Fu(e) : Y = t;
	}
	function Nu(e) {
		var t = e, n = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = fc(n, t, t.pendingProps, t.type, void 0, X);
				break;
			case 11:
				t = fc(n, t, t.pendingProps, t.type.render, t.ref, X);
				break;
			case 5: wo(t);
			default: Lc(n, t), t = Y = ii(t, Ul), t = Oc(n, t, Ul);
		}
		e.memoizedProps = e.pendingProps, t === null ? Fu(e) : Y = t;
	}
	function Pu(e, t, n, r) {
		Bi = zi = null, wo(t), Ta = null, Ea = 0;
		var i = t.return;
		try {
			if (Zs(e, i, t, n, X)) {
				Wl = 1, Ks(e, di(n, e.current)), Y = null;
				return;
			}
		} catch (t) {
			if (i !== null) throw Y = i, t;
			Wl = 1, Ks(e, di(n, e.current)), Y = null;
			return;
		}
		t.flags & 32768 ? (K || r === 1 ? e = !0 : Vl || X & 536870912 ? e = !1 : (Bl = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = Xa.current, r !== null && r.tag === 13 && (r.flags |= 16384))), Iu(t, e)) : Fu(t);
	}
	function Fu(e) {
		var t = e;
		do {
			if (t.flags & 32768) {
				Iu(t, Bl);
				return;
			}
			e = t.return;
			var n = Fc(t.alternate, t, Ul);
			if (n !== null) {
				Y = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				Y = t;
				return;
			}
			Y = t = e;
		} while (t !== null);
		Wl === 0 && (Wl = 5);
	}
	function Iu(e, t) {
		do {
			var n = Ic(e.alternate, e);
			if (n !== null) {
				n.flags &= 32767, Y = n;
				return;
			}
			if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
				Y = e;
				return;
			}
			Y = e = n;
		} while (e !== null);
		Wl = 6, Y = null;
	}
	function Lu(e, t, n, r, i, a, s, c, l) {
		e.cancelPendingCommit = null;
		do
			Hu();
		while (iu !== 0);
		if (J & 6) throw Error(o(327));
		if (t !== null) {
			if (t === e.current) throw Error(o(177));
			if (a = t.lanes | t.childLanes, a |= Kr, $e(e, n, a, s, c, l), e === Ll && (Y = Ll = null, X = 0), ou = t, au = e, su = n, cu = a, lu = i, uu = r, t.subtreeFlags & 10256 || t.flags & 10256 ? (e.callbackNode = null, e.callbackPriority = 0, Xu(Me, function() {
				return Uu(), null;
			})) : (e.callbackNode = null, e.callbackPriority = 0), r = (t.flags & 13878) != 0, t.subtreeFlags & 13878 || r) {
				r = A.T, A.T = null, i = j.p, j.p = 2, s = J, J |= 4;
				try {
					nl(e, t, n);
				} finally {
					J = s, j.p = i, A.T = r;
				}
			}
			iu = 1, Ru(), zu(), Bu();
		}
	}
	function Ru() {
		if (iu === 1) {
			iu = 0;
			var e = au, t = ou, n = (t.flags & 13878) != 0;
			if (t.subtreeFlags & 13878 || n) {
				n = A.T, A.T = null;
				var r = j.p;
				j.p = 2;
				var i = J;
				J |= 4;
				try {
					hl(t, e);
					var a = Bd, o = br(e.containerInfo), s = a.focusedElem, c = a.selectionRange;
					if (o !== s && s && s.ownerDocument && yr(s.ownerDocument.documentElement, s)) {
						if (c !== null && xr(s)) {
							var l = c.start, u = c.end;
							if (u === void 0 && (u = l), "selectionStart" in s) s.selectionStart = l, s.selectionEnd = Math.min(u, s.value.length);
							else {
								var d = s.ownerDocument || document, f = d && d.defaultView || window;
								if (f.getSelection) {
									var p = f.getSelection(), m = s.textContent.length, h = Math.min(c.start, m), g = c.end === void 0 ? h : Math.min(c.end, m);
									!p.extend && h > g && (o = g, g = h, h = o);
									var _ = vr(s, h), v = vr(s, g);
									if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
										var y = d.createRange();
										y.setStart(_.node, _.offset), p.removeAllRanges(), h > g ? (p.addRange(y), p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset), p.addRange(y));
									}
								}
							}
						}
						for (d = [], p = s; p = p.parentNode;) p.nodeType === 1 && d.push({
							element: p,
							left: p.scrollLeft,
							top: p.scrollTop
						});
						for (typeof s.focus == "function" && s.focus(), s = 0; s < d.length; s++) {
							var b = d[s];
							b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
						}
					}
					sp = !!zd, Bd = zd = null;
				} finally {
					J = i, j.p = r, A.T = n;
				}
			}
			e.current = t, iu = 2;
		}
	}
	function zu() {
		if (iu === 2) {
			iu = 0;
			var e = au, t = ou, n = (t.flags & 8772) != 0;
			if (t.subtreeFlags & 8772 || n) {
				n = A.T, A.T = null;
				var r = j.p;
				j.p = 2;
				var i = J;
				J |= 4;
				try {
					rl(e, t.alternate, t);
				} finally {
					J = i, j.p = r, A.T = n;
				}
			}
			iu = 3;
		}
	}
	function Bu() {
		if (iu === 4 || iu === 3) {
			iu = 0, Oe();
			var e = au, t = ou, n = su, r = uu;
			t.subtreeFlags & 10256 || t.flags & 10256 ? iu = 5 : (iu = 0, ou = au = null, Vu(e, e.pendingLanes));
			var i = e.pendingLanes;
			if (i === 0 && (ru = null), it(n), t = t.stateNode, Re && typeof Re.onCommitFiberRoot == "function") try {
				Re.onCommitFiberRoot(Le, t, void 0, (t.current.flags & 128) == 128);
			} catch {}
			if (r !== null) {
				t = A.T, i = j.p, j.p = 2, A.T = null;
				try {
					for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
						var s = r[o];
						a(s.value, { componentStack: s.stack });
					}
				} finally {
					A.T = t, j.p = i;
				}
			}
			su & 3 && Hu(), rd(e), i = e.pendingLanes, n & 261930 && i & 42 ? e === fu ? du++ : (du = 0, fu = e) : du = 0, id(0, !1);
		}
	}
	function Vu(e, t) {
		(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, na(t)));
	}
	function Hu() {
		return Ru(), zu(), Bu(), Uu();
	}
	function Uu() {
		if (iu !== 5) return !1;
		var e = au, t = cu;
		cu = 0;
		var n = it(su), r = A.T, i = j.p;
		try {
			j.p = 32 > n ? 32 : n, A.T = null, n = lu, lu = null;
			var a = au, s = su;
			if (iu = 0, ou = au = null, su = 0, J & 6) throw Error(o(331));
			var c = J;
			if (J |= 4, Ml(a.current), wl(a, a.current, s, n), J = c, id(0, !1), Re && typeof Re.onPostCommitFiberRoot == "function") try {
				Re.onPostCommitFiberRoot(Le, a);
			} catch {}
			return !0;
		} finally {
			j.p = i, A.T = r, Vu(e, t);
		}
	}
	function Wu(e, t, n) {
		t = di(n, t), t = Js(e.stateNode, t, 2), e = La(e, t, 2), e !== null && (Qe(e, 2), rd(e));
	}
	function Z(e, t, n) {
		if (e.tag === 3) Wu(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				Wu(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ru === null || !ru.has(r))) {
					e = di(n, e), n = Ys(2), r = La(t, n, 2), r !== null && (Xs(n, r, t, e), Qe(r, 2), rd(r));
					break;
				}
			}
			t = t.return;
		}
	}
	function Gu(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new Il();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (Hl = !0, i.add(n), e = Ku.bind(null, e, t, n), t.then(e, e));
	}
	function Ku(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ll === e && (X & n) === n && (Wl === 4 || Wl === 3 && (X & 62914560) === X && 300 > ke() - $l ? !(J & 2) && Su(e, 0) : ql |= n, Yl === X && (Yl = 0)), rd(e);
	}
	function qu(e, t) {
		t === 0 && (t = Xe()), e = Xr(e, t), e !== null && (Qe(e, t), rd(e));
	}
	function Ju(e) {
		var t = e.memoizedState, n = 0;
		t !== null && (n = t.retryLane), qu(e, n);
	}
	function Yu(e, t) {
		var n = 0;
		switch (e.tag) {
			case 31:
			case 13:
				var r = e.stateNode, i = e.memoizedState;
				i !== null && (n = i.retryLane);
				break;
			case 19:
				r = e.stateNode;
				break;
			case 22:
				r = e.stateNode._retryCache;
				break;
			default: throw Error(o(314));
		}
		r !== null && r.delete(t), qu(e, n);
	}
	function Xu(e, t) {
		return Te(e, t);
	}
	var Zu = null, Qu = null, $u = !1, ed = !1, td = !1, nd = 0;
	function rd(e) {
		e !== Qu && e.next === null && (Qu === null ? Zu = Qu = e : Qu = Qu.next = e), ed = !0, $u || ($u = !0, ud());
	}
	function id(e, t) {
		if (!td && ed) {
			td = !0;
			do
				for (var n = !1, r = Zu; r !== null;) {
					if (!t) if (e !== 0) {
						var i = r.pendingLanes;
						if (i === 0) var a = 0;
						else {
							var o = r.suspendedLanes, s = r.pingedLanes;
							a = (1 << 31 - ze(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
						}
						a !== 0 && (n = !0, ld(r, a));
					} else a = X, a = qe(r, r === Ll ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), !(a & 3) || Je(r, a) || (n = !0, ld(r, a));
					r = r.next;
				}
			while (n);
			td = !1;
		}
	}
	function ad() {
		od();
	}
	function od() {
		ed = $u = !1;
		var e = 0;
		nd !== 0 && Kd() && (e = nd);
		for (var t = ke(), n = null, r = Zu; r !== null;) {
			var i = r.next, a = sd(r, t);
			a === 0 ? (r.next = null, n === null ? Zu = i : n.next = i, i === null && (Qu = n)) : (n = r, (e !== 0 || a & 3) && (ed = !0)), r = i;
		}
		iu !== 0 && iu !== 5 || id(e, !1), nd !== 0 && (nd = 0);
	}
	function sd(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
			var o = 31 - ze(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = Ye(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
		if (t = Ll, n = X, n = qe(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && (Rl === 2 || Rl === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && Ee(r), e.callbackNode = null, e.callbackPriority = 0;
		if (!(n & 3) || Je(e, n)) {
			if (t = n & -n, t === e.callbackPriority) return t;
			switch (r !== null && Ee(r), it(n)) {
				case 2:
				case 8:
					n = F;
					break;
				case 32:
					n = Me;
					break;
				case 268435456:
					n = Pe;
					break;
				default: n = Me;
			}
			return r = cd.bind(null, e), n = Te(n, r), e.callbackPriority = t, e.callbackNode = n, t;
		}
		return r !== null && r !== null && Ee(r), e.callbackPriority = 2, e.callbackNode = null, 2;
	}
	function cd(e, t) {
		if (iu !== 0 && iu !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
		var n = e.callbackNode;
		if (Hu() && e.callbackNode !== n) return null;
		var r = X;
		return r = qe(e, e === Ll ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (gu(e, r, t), sd(e, ke()), e.callbackNode != null && e.callbackNode === n ? cd.bind(null, e) : null);
	}
	function ld(e, t) {
		if (Hu()) return null;
		gu(e, t, !0);
	}
	function ud() {
		Xd(function() {
			J & 6 ? Te(je, ad) : od();
		});
	}
	function dd() {
		if (nd === 0) {
			var e = aa;
			e === 0 && (e = Ue, Ue <<= 1, !(Ue & 261888) && (Ue = 256)), nd = e;
		}
		return nd;
	}
	function fd(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Yt("" + e);
	}
	function pd(e, t) {
		var n = t.ownerDocument.createElement("input");
		return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
	}
	function md(e, t, n, r, i) {
		if (t === "submit" && n && n.stateNode === i) {
			var a = fd((i[lt] || null).action), o = r.submitter;
			o && (t = (t = o[lt] || null) ? fd(t.formAction) : o.getAttribute("formAction"), t !== null && (a = t, o = null));
			var s = new mn("action", "action", null, r, i);
			e.push({
				event: s,
				listeners: [{
					instance: null,
					listener: function() {
						if (r.defaultPrevented) {
							if (nd !== 0) {
								var e = o ? pd(i, o) : new FormData(i);
								bs(n, {
									pending: !0,
									data: e,
									method: i.method,
									action: a
								}, null, e);
							}
						} else typeof a == "function" && (s.preventDefault(), e = o ? pd(i, o) : new FormData(i), bs(n, {
							pending: !0,
							data: e,
							method: i.method,
							action: a
						}, a, e));
					},
					currentTarget: i
				}]
			});
		}
	}
	for (var hd = 0; hd < Vr.length; hd++) {
		var gd = Vr[hd];
		Hr(gd.toLowerCase(), "on" + (gd[0].toUpperCase() + gd.slice(1)));
	}
	Hr(Nr, "onAnimationEnd"), Hr(Pr, "onAnimationIteration"), Hr(Fr, "onAnimationStart"), Hr("dblclick", "onDoubleClick"), Hr("focusin", "onFocus"), Hr("focusout", "onBlur"), Hr(Ir, "onTransitionRun"), Hr(Lr, "onTransitionStart"), Hr(Rr, "onTransitionCancel"), Hr(zr, "onTransitionEnd"), xt("onMouseEnter", ["mouseout", "mouseover"]), xt("onMouseLeave", ["mouseout", "mouseover"]), xt("onPointerEnter", ["pointerout", "pointerover"]), xt("onPointerLeave", ["pointerout", "pointerover"]), bt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), bt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), bt("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), bt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), bt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), bt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var _d = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), vd = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_d));
	function yd(e, t) {
		t = (t & 4) != 0;
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = r.event;
			r = r.listeners;
			a: {
				var a = void 0;
				if (t) for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o], c = s.instance, l = s.currentTarget;
					if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						Ur(e);
					}
					i.currentTarget = null, a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						Ur(e);
					}
					i.currentTarget = null, a = c;
				}
			}
		}
	}
	function Q(e, t) {
		var n = t[R];
		n === void 0 && (n = t[R] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (Cd(t, e, 2, !1), n.add(r));
	}
	function bd(e, t, n) {
		var r = 0;
		t && (r |= 4), Cd(n, e, r, t);
	}
	var xd = "_reactListening" + Math.random().toString(36).slice(2);
	function Sd(e) {
		if (!e[xd]) {
			e[xd] = !0, vt.forEach(function(t) {
				t !== "selectionchange" && (vd.has(t) || bd(t, !1, e), bd(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[xd] || (t[xd] = !0, bd("selectionchange", !1, t));
		}
	}
	function Cd(e, t, n, r) {
		switch (mp(t)) {
			case 2:
				var i = cp;
				break;
			case 8:
				i = lp;
				break;
			default: i = up;
		}
		n = i.bind(null, t, n, e), i = void 0, !G || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function wd(e, t, n, r, i) {
		var a = r;
		if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
			if (r === null) return;
			var o = r.tag;
			if (o === 3 || o === 4) {
				var s = r.stateNode.containerInfo;
				if (s === i) break;
				if (o === 4) for (o = r.return; o !== null;) {
					var c = o.tag;
					if ((c === 3 || c === 4) && o.stateNode.containerInfo === i) return;
					o = o.return;
				}
				for (; s !== null;) {
					if (o = ht(s), o === null) return;
					if (c = o.tag, c === 5 || c === 6 || c === 26 || c === 27) {
						r = a = o;
						continue a;
					}
					s = s.parentNode;
				}
			}
			r = r.return;
		}
		nn(function() {
			var r = a, i = H(n), o = [];
			a: {
				var s = Br.get(e);
				if (s !== void 0) {
					var c = mn, u = e;
					switch (e) {
						case "keypress": if (ln(n) === 0) break a;
						case "keydown":
						case "keyup":
							c = Mn;
							break;
						case "focusin":
							u = "focus", c = Cn;
							break;
						case "focusout":
							u = "blur", c = Cn;
							break;
						case "beforeblur":
						case "afterblur":
							c = Cn;
							break;
						case "click": if (n.button === 2) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							c = xn;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							c = Sn;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							c = Pn;
							break;
						case Nr:
						case Pr:
						case Fr:
							c = wn;
							break;
						case zr:
							c = Fn;
							break;
						case "scroll":
						case "scrollend":
							c = gn;
							break;
						case "wheel":
							c = In;
							break;
						case "copy":
						case "cut":
						case "paste":
							c = Tn;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							c = Nn;
							break;
						case "toggle":
						case "beforetoggle": c = Ln;
					}
					var d = (t & 4) != 0, f = !d && (e === "scroll" || e === "scrollend"), p = d ? s === null ? null : s + "Capture" : s;
					d = [];
					for (var m = r, h; m !== null;) {
						var g = m;
						if (h = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = U(m, p), g != null && d.push(Td(m, g, h))), f) break;
						m = m.return;
					}
					0 < d.length && (s = new c(s, u, null, n, i), o.push({
						event: s,
						listeners: d
					}));
				}
			}
			if (!(t & 7)) {
				a: {
					if (s = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", s && n !== Zt && (u = n.relatedTarget || n.fromElement) && (ht(u) || u[L])) break a;
					if ((c || s) && (s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window, c ? (u = n.relatedTarget || n.toElement, c = r, u = u ? ht(u) : null, u !== null && (f = l(u), d = u.tag, u !== f || d !== 5 && d !== 27 && d !== 6) && (u = null)) : (c = null, u = r), c !== u)) {
						if (d = xn, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (d = Nn, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), f = c == null ? s : _t(c), h = u == null ? s : _t(u), s = new d(g, m + "leave", c, n, i), s.target = f, s.relatedTarget = h, g = null, ht(i) === r && (d = new d(p, m + "enter", u, n, i), d.target = h, d.relatedTarget = f, g = d), f = g, c && u) b: {
							for (d = Dd, p = c, m = u, h = 0, g = p; g; g = d(g)) h++;
							g = 0;
							for (var _ = m; _; _ = d(_)) g++;
							for (; 0 < h - g;) p = d(p), h--;
							for (; 0 < g - h;) m = d(m), g--;
							for (; h--;) {
								if (p === m || m !== null && p === m.alternate) {
									d = p;
									break b;
								}
								p = d(p), m = d(m);
							}
							d = null;
						}
						else d = null;
						c !== null && Od(o, s, c, d, !1), u !== null && f !== null && Od(o, f, u, d, !0);
					}
				}
				a: {
					if (s = r ? _t(r) : window, c = s.nodeName && s.nodeName.toLowerCase(), c === "select" || c === "input" && s.type === "file") var v = rr;
					else if (Zn(s)) if (ir) v = pr;
					else {
						v = dr;
						var y = ur;
					}
					else c = s.nodeName, !c || c.toLowerCase() !== "input" || s.type !== "checkbox" && s.type !== "radio" ? r && Kt(r.elementType) && (v = rr) : v = fr;
					if (v &&= v(e, r)) {
						Qn(o, v, n, i);
						break a;
					}
					y && y(e, s, r), e === "focusout" && r && s.type === "number" && r.memoizedProps.value != null && V(s, "number", s.value);
				}
				switch (y = r ? _t(r) : window, e) {
					case "focusin":
						(Zn(y) || y.contentEditable === "true") && (Cr = y, wr = r, Tr = null);
						break;
					case "focusout":
						Tr = wr = Cr = null;
						break;
					case "mousedown":
						Er = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Er = !1, Dr(o, n, i);
						break;
					case "selectionchange": if (Sr) break;
					case "keydown":
					case "keyup": Dr(o, n, i);
				}
				var b;
				if (zn) b: {
					switch (e) {
						case "compositionstart":
							var x = "onCompositionStart";
							break b;
						case "compositionend":
							x = "onCompositionEnd";
							break b;
						case "compositionupdate":
							x = "onCompositionUpdate";
							break b;
					}
					x = void 0;
				}
				else qn ? Gn(e, n) && (x = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (x = "onCompositionStart");
				x && (Hn && n.locale !== "ko" && (qn || x !== "onCompositionStart" ? x === "onCompositionEnd" && qn && (b = cn()) : (an = i, on = "value" in an ? an.value : an.textContent, qn = !0)), y = Ed(r, x), 0 < y.length && (x = new En(x, e, null, n, i), o.push({
					event: x,
					listeners: y
				}), b ? x.data = b : (b = Kn(n), b !== null && (x.data = b)))), (b = Vn ? Jn(e, n) : Yn(e, n)) && (x = Ed(r, "onBeforeInput"), 0 < x.length && (y = new En("onBeforeInput", "beforeinput", null, n, i), o.push({
					event: y,
					listeners: x
				}), y.data = b)), md(o, e, r, n, i);
			}
			yd(o, t);
		});
	}
	function Td(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function Ed(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = U(e, n), i != null && r.unshift(Td(e, i, a)), i = U(e, t), i != null && r.push(Td(e, i, a))), e.tag === 3) return r;
			e = e.return;
		}
		return [];
	}
	function Dd(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5 && e.tag !== 27);
		return e || null;
	}
	function Od(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (s = s.tag, c !== null && c === r) break;
			s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = U(n, a), l != null && o.unshift(Td(n, l, c))) : i || (l = U(n, a), l != null && o.push(Td(n, l, c)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var kd = /\r\n?/g, Ad = /\u0000|\uFFFD/g;
	function jd(e) {
		return (typeof e == "string" ? e : "" + e).replace(kd, "\n").replace(Ad, "");
	}
	function Md(e, t) {
		return t = jd(t), jd(e) === t;
	}
	function Nd(e, t, n, r, i, a) {
		switch (n) {
			case "children":
				typeof r == "string" ? t === "body" || t === "textarea" && r === "" || Ht(e, r) : (typeof r == "number" || typeof r == "bigint") && t !== "body" && Ht(e, "" + r);
				break;
			case "className":
				Dt(e, "class", r);
				break;
			case "tabIndex":
				Dt(e, "tabindex", r);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Dt(e, n, r);
				break;
			case "style":
				Gt(e, r, a);
				break;
			case "data": if (t !== "object") {
				Dt(e, "data", r);
				break;
			}
			case "src":
			case "href":
				if (r === "" && (t !== "a" || n !== "href")) {
					e.removeAttribute(n);
					break;
				}
				if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = Yt("" + r), e.setAttribute(n, r);
				break;
			case "action":
			case "formAction":
				if (typeof r == "function") {
					e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
					break;
				} else typeof a == "function" && (n === "formAction" ? (t !== "input" && Nd(e, t, "name", i.name, i, null), Nd(e, t, "formEncType", i.formEncType, i, null), Nd(e, t, "formMethod", i.formMethod, i, null), Nd(e, t, "formTarget", i.formTarget, i, null)) : (Nd(e, t, "encType", i.encType, i, null), Nd(e, t, "method", i.method, i, null), Nd(e, t, "target", i.target, i, null)));
				if (r == null || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = Yt("" + r), e.setAttribute(n, r);
				break;
			case "onClick":
				r != null && (e.onclick = Xt);
				break;
			case "onScroll":
				r != null && Q("scroll", e);
				break;
			case "onScrollEnd":
				r != null && Q("scrollend", e);
				break;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(o(61));
					if (n = r.__html, n != null) {
						if (i.children != null) throw Error(o(60));
						e.innerHTML = n;
					}
				}
				break;
			case "multiple":
				e.multiple = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "muted":
				e.muted = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref": break;
			case "autoFocus": break;
			case "xlinkHref":
				if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
					e.removeAttribute("xlink:href");
					break;
				}
				n = Yt("" + r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "" + r) : e.removeAttribute(n);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
				break;
			case "capture":
			case "download":
				!0 === r ? e.setAttribute(n, "") : !1 !== r && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "rowSpan":
			case "start":
				r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
				break;
			case "popover":
				Q("beforetoggle", e), Q("toggle", e), Et(e, "popover", r);
				break;
			case "xlinkActuate":
				Ot(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
				break;
			case "xlinkArcrole":
				Ot(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
				break;
			case "xlinkRole":
				Ot(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
				break;
			case "xlinkShow":
				Ot(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
				break;
			case "xlinkTitle":
				Ot(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
				break;
			case "xlinkType":
				Ot(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
				break;
			case "xmlBase":
				Ot(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
				break;
			case "xmlLang":
				Ot(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
				break;
			case "xmlSpace":
				Ot(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
				break;
			case "is":
				Et(e, "is", r);
				break;
			case "innerText":
			case "textContent": break;
			default: (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = qt.get(n) || n, Et(e, n, r));
		}
	}
	function Pd(e, t, n, r, i, a) {
		switch (n) {
			case "style":
				Gt(e, r, a);
				break;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(o(61));
					if (n = r.__html, n != null) {
						if (i.children != null) throw Error(o(60));
						e.innerHTML = n;
					}
				}
				break;
			case "children":
				typeof r == "string" ? Ht(e, r) : (typeof r == "number" || typeof r == "bigint") && Ht(e, "" + r);
				break;
			case "onScroll":
				r != null && Q("scroll", e);
				break;
			case "onScrollEnd":
				r != null && Q("scrollend", e);
				break;
			case "onClick":
				r != null && (e.onclick = Xt);
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref": break;
			case "innerText":
			case "textContent": break;
			default: if (!yt.hasOwnProperty(n)) a: {
				if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"), t = n.slice(2, i ? n.length - 7 : void 0), a = e[lt] || null, a = a == null ? null : a[n], typeof a == "function" && e.removeEventListener(t, a, i), typeof r == "function")) {
					typeof a != "function" && a !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, r, i);
					break a;
				}
				n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : Et(e, n, r);
			}
		}
	}
	function Fd(e, t, n) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "img":
				Q("error", e), Q("load", e);
				var r = !1, i = !1, a;
				for (a in n) if (n.hasOwnProperty(a)) {
					var s = n[a];
					if (s != null) switch (a) {
						case "src":
							r = !0;
							break;
						case "srcSet":
							i = !0;
							break;
						case "children":
						case "dangerouslySetInnerHTML": throw Error(o(137, t));
						default: Nd(e, t, a, s, n, null);
					}
				}
				i && Nd(e, t, "srcSet", n.srcSet, n, null), r && Nd(e, t, "src", n.src, n, null);
				return;
			case "input":
				Q("invalid", e);
				var c = a = s = i = null, l = null, u = null;
				for (r in n) if (n.hasOwnProperty(r)) {
					var d = n[r];
					if (d != null) switch (r) {
						case "name":
							i = d;
							break;
						case "type":
							s = d;
							break;
						case "checked":
							l = d;
							break;
						case "defaultChecked":
							u = d;
							break;
						case "value":
							a = d;
							break;
						case "defaultValue":
							c = d;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (d != null) throw Error(o(137, t));
							break;
						default: Nd(e, t, r, d, n, null);
					}
				}
				Rt(e, a, c, l, u, s, i, !1);
				return;
			case "select":
				for (i in Q("invalid", e), r = s = a = null, n) if (n.hasOwnProperty(i) && (c = n[i], c != null)) switch (i) {
					case "value":
						a = c;
						break;
					case "defaultValue":
						s = c;
						break;
					case "multiple": r = c;
					default: Nd(e, t, i, c, n, null);
				}
				t = a, n = s, e.multiple = !!r, t == null ? n != null && zt(e, !!r, n, !0) : zt(e, !!r, t, !1);
				return;
			case "textarea":
				for (s in Q("invalid", e), a = i = r = null, n) if (n.hasOwnProperty(s) && (c = n[s], c != null)) switch (s) {
					case "value":
						r = c;
						break;
					case "defaultValue":
						i = c;
						break;
					case "children":
						a = c;
						break;
					case "dangerouslySetInnerHTML":
						if (c != null) throw Error(o(91));
						break;
					default: Nd(e, t, s, c, n, null);
				}
				Vt(e, r, i, a);
				return;
			case "option":
				for (l in n) if (n.hasOwnProperty(l) && (r = n[l], r != null)) switch (l) {
					case "selected":
						e.selected = r && typeof r != "function" && typeof r != "symbol";
						break;
					default: Nd(e, t, l, r, n, null);
				}
				return;
			case "dialog":
				Q("beforetoggle", e), Q("toggle", e), Q("cancel", e), Q("close", e);
				break;
			case "iframe":
			case "object":
				Q("load", e);
				break;
			case "video":
			case "audio":
				for (r = 0; r < _d.length; r++) Q(_d[r], e);
				break;
			case "image":
				Q("error", e), Q("load", e);
				break;
			case "details":
				Q("toggle", e);
				break;
			case "embed":
			case "source":
			case "link": Q("error", e), Q("load", e);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (u in n) if (n.hasOwnProperty(u) && (r = n[u], r != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error(o(137, t));
					default: Nd(e, t, u, r, n, null);
				}
				return;
			default: if (Kt(t)) {
				for (d in n) n.hasOwnProperty(d) && (r = n[d], r !== void 0 && Pd(e, t, d, r, n, void 0));
				return;
			}
		}
		for (c in n) n.hasOwnProperty(c) && (r = n[c], r != null && Nd(e, t, c, r, n, null));
	}
	function Id(e, t, n, r) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "input":
				var i = null, a = null, s = null, c = null, l = null, u = null, d = null;
				for (m in n) {
					var f = n[m];
					if (n.hasOwnProperty(m) && f != null) switch (m) {
						case "checked": break;
						case "value": break;
						case "defaultValue": l = f;
						default: r.hasOwnProperty(m) || Nd(e, t, m, null, r, f);
					}
				}
				for (var p in r) {
					var m = r[p];
					if (f = n[p], r.hasOwnProperty(p) && (m != null || f != null)) switch (p) {
						case "type":
							a = m;
							break;
						case "name":
							i = m;
							break;
						case "checked":
							u = m;
							break;
						case "defaultChecked":
							d = m;
							break;
						case "value":
							s = m;
							break;
						case "defaultValue":
							c = m;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (m != null) throw Error(o(137, t));
							break;
						default: m !== f && Nd(e, t, p, m, r, f);
					}
				}
				Lt(e, s, c, l, u, d, a, i);
				return;
			case "select":
				for (a in m = s = c = p = null, n) if (l = n[a], n.hasOwnProperty(a) && l != null) switch (a) {
					case "value": break;
					case "multiple": m = l;
					default: r.hasOwnProperty(a) || Nd(e, t, a, null, r, l);
				}
				for (i in r) if (a = r[i], l = n[i], r.hasOwnProperty(i) && (a != null || l != null)) switch (i) {
					case "value":
						p = a;
						break;
					case "defaultValue":
						c = a;
						break;
					case "multiple": s = a;
					default: a !== l && Nd(e, t, i, a, r, l);
				}
				t = c, n = s, r = m, p == null ? !!r != !!n && (t == null ? zt(e, !!n, n ? [] : "", !1) : zt(e, !!n, t, !0)) : zt(e, !!n, p, !1);
				return;
			case "textarea":
				for (c in m = p = null, n) if (i = n[c], n.hasOwnProperty(c) && i != null && !r.hasOwnProperty(c)) switch (c) {
					case "value": break;
					case "children": break;
					default: Nd(e, t, c, null, r, i);
				}
				for (s in r) if (i = r[s], a = n[s], r.hasOwnProperty(s) && (i != null || a != null)) switch (s) {
					case "value":
						p = i;
						break;
					case "defaultValue":
						m = i;
						break;
					case "children": break;
					case "dangerouslySetInnerHTML":
						if (i != null) throw Error(o(91));
						break;
					default: i !== a && Nd(e, t, s, i, r, a);
				}
				Bt(e, p, m);
				return;
			case "option":
				for (var h in n) if (p = n[h], n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)) switch (h) {
					case "selected":
						e.selected = !1;
						break;
					default: Nd(e, t, h, null, r, p);
				}
				for (l in r) if (p = r[l], m = n[l], r.hasOwnProperty(l) && p !== m && (p != null || m != null)) switch (l) {
					case "selected":
						e.selected = p && typeof p != "function" && typeof p != "symbol";
						break;
					default: Nd(e, t, l, p, r, m);
				}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var g in n) p = n[g], n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && Nd(e, t, g, null, r, p);
				for (u in r) if (p = r[u], m = n[u], r.hasOwnProperty(u) && p !== m && (p != null || m != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML":
						if (p != null) throw Error(o(137, t));
						break;
					default: Nd(e, t, u, p, r, m);
				}
				return;
			default: if (Kt(t)) {
				for (var _ in n) p = n[_], n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && Pd(e, t, _, void 0, r, p);
				for (d in r) p = r[d], m = n[d], !r.hasOwnProperty(d) || p === m || p === void 0 && m === void 0 || Pd(e, t, d, p, r, m);
				return;
			}
		}
		for (var v in n) p = n[v], n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && Nd(e, t, v, null, r, p);
		for (f in r) p = r[f], m = n[f], !r.hasOwnProperty(f) || p === m || p == null && m == null || Nd(e, t, f, p, r, m);
	}
	function Ld(e) {
		switch (e) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link": return !0;
			default: return !1;
		}
	}
	function Rd() {
		if (typeof performance.getEntriesByType == "function") {
			for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
				var i = n[r], a = i.transferSize, o = i.initiatorType, s = i.duration;
				if (a && s && Ld(o)) {
					for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
						var c = n[r], l = c.startTime;
						if (l > s) break;
						var u = c.transferSize, d = c.initiatorType;
						u && Ld(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)));
					}
					if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e) break;
				}
			}
			if (0 < e) return t / e / 1e6;
		}
		return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
	}
	var zd = null, Bd = null;
	function Vd(e) {
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	function Hd(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg": return 1;
			case "http://www.w3.org/1998/Math/MathML": return 2;
			default: return 0;
		}
	}
	function Ud(e, t) {
		if (e === 0) switch (t) {
			case "svg": return 1;
			case "math": return 2;
			default: return 0;
		}
		return e === 1 && t === "foreignObject" ? 0 : e;
	}
	function Wd(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var Gd = null;
	function Kd() {
		var e = window.event;
		return e && e.type === "popstate" ? e === Gd ? !1 : (Gd = e, !0) : (Gd = null, !1);
	}
	var qd = typeof setTimeout == "function" ? setTimeout : void 0, Jd = typeof clearTimeout == "function" ? clearTimeout : void 0, Yd = typeof Promise == "function" ? Promise : void 0, Xd = typeof queueMicrotask == "function" ? queueMicrotask : Yd === void 0 ? qd : function(e) {
		return Yd.resolve(null).then(e).catch(Zd);
	};
	function Zd(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function Qd(e) {
		return e === "head";
	}
	function $d(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$" || n === "/&") {
				if (r === 0) {
					e.removeChild(i), Np(t);
					return;
				}
				r--;
			} else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") r++;
			else if (n === "html") mf(e.ownerDocument.documentElement);
			else if (n === "head") {
				n = e.ownerDocument.head, mf(n);
				for (var a = n.firstChild; a;) {
					var o = a.nextSibling, s = a.nodeName;
					a[pt] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && a.rel.toLowerCase() === "stylesheet" || n.removeChild(a), a = o;
				}
			} else n === "body" && mf(e.ownerDocument.body);
			n = i;
		} while (n);
		Np(t);
	}
	function ef(e, t) {
		var n = e;
		e = 0;
		do {
			var r = n.nextSibling;
			if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && r.nodeType === 8) if (n = r.data, n === "/$") {
				if (e === 0) break;
				e--;
			} else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
			n = r;
		} while (n);
	}
	function tf(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
			var n = t;
			switch (t = t.nextSibling, n.nodeName) {
				case "HTML":
				case "HEAD":
				case "BODY":
					tf(n), mt(n);
					continue;
				case "SCRIPT":
				case "STYLE": continue;
				case "LINK": if (n.rel.toLowerCase() === "stylesheet") continue;
			}
			e.removeChild(n);
		}
	}
	function nf(e, t, n, r) {
		for (; e.nodeType === 1;) {
			var i = n;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
			} else if (!r) if (t === "input" && e.type === "hidden") {
				var a = i.name == null ? null : "" + i.name;
				if (i.type === "hidden" && e.getAttribute("name") === a) return e;
			} else return e;
			else if (!e[pt]) switch (t) {
				case "meta":
					if (!e.hasAttribute("itemprop")) break;
					return e;
				case "link":
					if (a = e.getAttribute("rel"), a === "stylesheet" && e.hasAttribute("data-precedence") || a !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title)) break;
					return e;
				case "style":
					if (e.hasAttribute("data-precedence")) break;
					return e;
				case "script":
					if (a = e.getAttribute("src"), (a !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
					return e;
				default: return e;
			}
			if (e = lf(e.nextSibling), e === null) break;
		}
		return null;
	}
	function rf(e, t, n) {
		if (t === "") return null;
		for (; e.nodeType !== 3;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = lf(e.nextSibling), e === null)) return null;
		return e;
	}
	function af(e, t) {
		for (; e.nodeType !== 8;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = lf(e.nextSibling), e === null)) return null;
		return e;
	}
	function of(e) {
		return e.data === "$?" || e.data === "$~";
	}
	function sf(e) {
		return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
	}
	function cf(e, t) {
		var n = e.ownerDocument;
		if (e.data === "$~") e._reactRetry = t;
		else if (e.data !== "$?" || n.readyState !== "loading") t();
		else {
			var r = function() {
				t(), n.removeEventListener("DOMContentLoaded", r);
			};
			n.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
		}
	}
	function lf(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
				if (t === "/$" || t === "/&") return null;
			}
		}
		return e;
	}
	var uf = null;
	function df(e) {
		e = e.nextSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "/$" || n === "/&") {
					if (t === 0) return lf(e.nextSibling);
					t--;
				} else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
			}
			e = e.nextSibling;
		}
		return null;
	}
	function ff(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
					if (t === 0) return e;
					t--;
				} else n !== "/$" && n !== "/&" || t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	function pf(e, t, n) {
		switch (t = Vd(n), e) {
			case "html":
				if (e = t.documentElement, !e) throw Error(o(452));
				return e;
			case "head":
				if (e = t.head, !e) throw Error(o(453));
				return e;
			case "body":
				if (e = t.body, !e) throw Error(o(454));
				return e;
			default: throw Error(o(451));
		}
	}
	function mf(e) {
		for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
		mt(e);
	}
	var hf = /* @__PURE__ */ new Map(), gf = /* @__PURE__ */ new Set();
	function _f(e) {
		return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
	}
	var vf = j.d;
	j.d = {
		f: yf,
		r: bf,
		D: Cf,
		C: wf,
		L: Tf,
		m: Ef,
		X: Of,
		S: Df,
		M: kf
	};
	function yf() {
		var e = vf.f(), t = bu();
		return e || t;
	}
	function bf(e) {
		var t = gt(e);
		t !== null && t.tag === 5 && t.type === "form" ? Ss(t) : vf.r(e);
	}
	var xf = typeof document > "u" ? null : document;
	function Sf(e, t, n) {
		var r = xf;
		if (r && typeof t == "string" && t) {
			var i = It(t);
			i = "link[rel=\"" + e + "\"][href=\"" + i + "\"]", typeof n == "string" && (i += "[crossorigin=\"" + n + "\"]"), gf.has(i) || (gf.add(i), e = {
				rel: e,
				crossOrigin: n,
				href: t
			}, r.querySelector(i) === null && (t = r.createElement("link"), Fd(t, "link", e), B(t), r.head.appendChild(t)));
		}
	}
	function Cf(e) {
		vf.D(e), Sf("dns-prefetch", e, null);
	}
	function wf(e, t) {
		vf.C(e, t), Sf("preconnect", e, t);
	}
	function Tf(e, t, n) {
		vf.L(e, t, n);
		var r = xf;
		if (r && e && t) {
			var i = "link[rel=\"preload\"][as=\"" + It(t) + "\"]";
			t === "image" && n && n.imageSrcSet ? (i += "[imagesrcset=\"" + It(n.imageSrcSet) + "\"]", typeof n.imageSizes == "string" && (i += "[imagesizes=\"" + It(n.imageSizes) + "\"]")) : i += "[href=\"" + It(e) + "\"]";
			var a = i;
			switch (t) {
				case "style":
					a = jf(e);
					break;
				case "script": a = Ff(e);
			}
			hf.has(a) || (e = h({
				rel: "preload",
				href: t === "image" && n && n.imageSrcSet ? void 0 : e,
				as: t
			}, n), hf.set(a, e), r.querySelector(i) !== null || t === "style" && r.querySelector(Mf(a)) || t === "script" && r.querySelector(If(a)) || (t = r.createElement("link"), Fd(t, "link", e), B(t), r.head.appendChild(t)));
		}
	}
	function Ef(e, t) {
		vf.m(e, t);
		var n = xf;
		if (n && e) {
			var r = t && typeof t.as == "string" ? t.as : "script", i = "link[rel=\"modulepreload\"][as=\"" + It(r) + "\"][href=\"" + It(e) + "\"]", a = i;
			switch (r) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script": a = Ff(e);
			}
			if (!hf.has(a) && (e = h({
				rel: "modulepreload",
				href: e
			}, t), hf.set(a, e), n.querySelector(i) === null)) {
				switch (r) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script": if (n.querySelector(If(a))) return;
				}
				r = n.createElement("link"), Fd(r, "link", e), B(r), n.head.appendChild(r);
			}
		}
	}
	function Df(e, t, n) {
		vf.S(e, t, n);
		var r = xf;
		if (r && e) {
			var i = z(r).hoistableStyles, a = jf(e);
			t ||= "default";
			var o = i.get(a);
			if (!o) {
				var s = {
					loading: 0,
					preload: null
				};
				if (o = r.querySelector(Mf(a))) s.loading = 5;
				else {
					e = h({
						rel: "stylesheet",
						href: e,
						"data-precedence": t
					}, n), (n = hf.get(a)) && zf(e, n);
					var c = o = r.createElement("link");
					B(c), Fd(c, "link", e), c._p = new Promise(function(e, t) {
						c.onload = e, c.onerror = t;
					}), c.addEventListener("load", function() {
						s.loading |= 1;
					}), c.addEventListener("error", function() {
						s.loading |= 2;
					}), s.loading |= 4, Rf(o, t, r);
				}
				o = {
					type: "stylesheet",
					instance: o,
					count: 1,
					state: s
				}, i.set(a, o);
			}
		}
	}
	function Of(e, t) {
		vf.X(e, t);
		var n = xf;
		if (n && e) {
			var r = z(n).hoistableScripts, i = Ff(e), a = r.get(i);
			a || (a = n.querySelector(If(i)), a || (e = h({
				src: e,
				async: !0
			}, t), (t = hf.get(i)) && Bf(e, t), a = n.createElement("script"), B(a), Fd(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function kf(e, t) {
		vf.M(e, t);
		var n = xf;
		if (n && e) {
			var r = z(n).hoistableScripts, i = Ff(e), a = r.get(i);
			a || (a = n.querySelector(If(i)), a || (e = h({
				src: e,
				async: !0,
				type: "module"
			}, t), (t = hf.get(i)) && Bf(e, t), a = n.createElement("script"), B(a), Fd(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Af(e, t, n, r) {
		var i = (i = fe.current) ? _f(i) : null;
		if (!i) throw Error(o(446));
		switch (e) {
			case "meta":
			case "title": return null;
			case "style": return typeof n.precedence == "string" && typeof n.href == "string" ? (t = jf(n.href), n = z(i).hoistableStyles, r = n.get(t), r || (r = {
				type: "style",
				instance: null,
				count: 0,
				state: null
			}, n.set(t, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			case "link":
				if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
					e = jf(n.href);
					var a = z(i).hoistableStyles, s = a.get(e);
					if (s || (i = i.ownerDocument || i, s = {
						type: "stylesheet",
						instance: null,
						count: 0,
						state: {
							loading: 0,
							preload: null
						}
					}, a.set(e, s), (a = i.querySelector(Mf(e))) && !a._p && (s.instance = a, s.state.loading = 5), hf.has(e) || (n = {
						rel: "preload",
						as: "style",
						href: n.href,
						crossOrigin: n.crossOrigin,
						integrity: n.integrity,
						media: n.media,
						hrefLang: n.hrefLang,
						referrerPolicy: n.referrerPolicy
					}, hf.set(e, n), a || Pf(i, e, n, s.state))), t && r === null) throw Error(o(528, ""));
					return s;
				}
				if (t && r !== null) throw Error(o(529, ""));
				return null;
			case "script": return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ff(n), n = z(i).hoistableScripts, r = n.get(t), r || (r = {
				type: "script",
				instance: null,
				count: 0,
				state: null
			}, n.set(t, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			default: throw Error(o(444, e));
		}
	}
	function jf(e) {
		return "href=\"" + It(e) + "\"";
	}
	function Mf(e) {
		return "link[rel=\"stylesheet\"][" + e + "]";
	}
	function Nf(e) {
		return h({}, e, {
			"data-precedence": e.precedence,
			precedence: null
		});
	}
	function Pf(e, t, n, r) {
		e.querySelector("link[rel=\"preload\"][as=\"style\"][" + t + "]") ? r.loading = 1 : (t = e.createElement("link"), r.preload = t, t.addEventListener("load", function() {
			return r.loading |= 1;
		}), t.addEventListener("error", function() {
			return r.loading |= 2;
		}), Fd(t, "link", n), B(t), e.head.appendChild(t));
	}
	function Ff(e) {
		return "[src=\"" + It(e) + "\"]";
	}
	function If(e) {
		return "script[async]" + e;
	}
	function Lf(e, t, n) {
		if (t.count++, t.instance === null) switch (t.type) {
			case "style":
				var r = e.querySelector("style[data-href~=\"" + It(n.href) + "\"]");
				if (r) return t.instance = r, B(r), r;
				var i = h({}, n, {
					"data-href": n.href,
					"data-precedence": n.precedence,
					href: null,
					precedence: null
				});
				return r = (e.ownerDocument || e).createElement("style"), B(r), Fd(r, "style", i), Rf(r, n.precedence, e), t.instance = r;
			case "stylesheet":
				i = jf(n.href);
				var a = e.querySelector(Mf(i));
				if (a) return t.state.loading |= 4, t.instance = a, B(a), a;
				r = Nf(n), (i = hf.get(i)) && zf(r, i), a = (e.ownerDocument || e).createElement("link"), B(a);
				var s = a;
				return s._p = new Promise(function(e, t) {
					s.onload = e, s.onerror = t;
				}), Fd(a, "link", r), t.state.loading |= 4, Rf(a, n.precedence, e), t.instance = a;
			case "script": return a = Ff(n.src), (i = e.querySelector(If(a))) ? (t.instance = i, B(i), i) : (r = n, (i = hf.get(a)) && (r = h({}, n), Bf(r, i)), e = e.ownerDocument || e, i = e.createElement("script"), B(i), Fd(i, "link", r), e.head.appendChild(i), t.instance = i);
			case "void": return null;
			default: throw Error(o(443, t.type));
		}
		else t.type === "stylesheet" && !(t.state.loading & 4) && (r = t.instance, t.state.loading |= 4, Rf(r, n.precedence, e));
		return t.instance;
	}
	function Rf(e, t, n) {
		for (var r = n.querySelectorAll("link[rel=\"stylesheet\"][data-precedence],style[data-precedence]"), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
			var s = r[o];
			if (s.dataset.precedence === t) a = s;
			else if (a !== i) break;
		}
		a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
	}
	function zf(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
	}
	function Bf(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
	}
	var $ = null;
	function Vf(e, t, n) {
		if ($ === null) {
			var r = /* @__PURE__ */ new Map(), i = $ = /* @__PURE__ */ new Map();
			i.set(n, r);
		} else i = $, r = i.get(n), r || (r = /* @__PURE__ */ new Map(), i.set(n, r));
		if (r.has(e)) return r;
		for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
			var a = n[i];
			if (!(a[pt] || a[ct] || e === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== "http://www.w3.org/2000/svg") {
				var o = a.getAttribute(t) || "";
				o = e + o;
				var s = r.get(o);
				s ? s.push(a) : r.set(o, [a]);
			}
		}
		return r;
	}
	function Hf(e, t, n) {
		e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
	}
	function Uf(e, t, n) {
		if (n === 1 || t.itemProp != null) return !1;
		switch (e) {
			case "meta":
			case "title": return !0;
			case "style":
				if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
				return !0;
			case "link":
				if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
				switch (t.rel) {
					case "stylesheet": return e = t.disabled, typeof t.precedence == "string" && e == null;
					default: return !0;
				}
			case "script": if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
		}
		return !1;
	}
	function Wf(e) {
		return !(e.type === "stylesheet" && !(e.state.loading & 3));
	}
	function Gf(e, t, n, r) {
		if (n.type === "stylesheet" && (typeof r.media != "string" || !1 !== matchMedia(r.media).matches) && !(n.state.loading & 4)) {
			if (n.instance === null) {
				var i = jf(r.href), a = t.querySelector(Mf(i));
				if (a) {
					t = a._p, typeof t == "object" && t && typeof t.then == "function" && (e.count++, e = Jf.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = a, B(a);
					return;
				}
				a = t.ownerDocument || t, r = Nf(r), (i = hf.get(i)) && zf(r, i), a = a.createElement("link"), B(a);
				var o = a;
				o._p = new Promise(function(e, t) {
					o.onload = e, o.onerror = t;
				}), Fd(a, "link", r), n.instance = a;
			}
			e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && !(n.state.loading & 3) && (e.count++, n = Jf.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
		}
	}
	var Kf = 0;
	function qf(e, t) {
		return e.stylesheets && e.count === 0 && Xf(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
			var r = setTimeout(function() {
				if (e.stylesheets && Xf(e, e.stylesheets), e.unsuspend) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, 6e4 + t);
			0 < e.imgBytes && Kf === 0 && (Kf = 62500 * Rd());
			var i = setTimeout(function() {
				if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Xf(e, e.stylesheets), e.unsuspend)) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, (e.imgBytes > Kf ? 50 : 800) + t);
			return e.unsuspend = n, function() {
				e.unsuspend = null, clearTimeout(r), clearTimeout(i);
			};
		} : null;
	}
	function Jf() {
		if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
			if (this.stylesheets) Xf(this, this.stylesheets);
			else if (this.unsuspend) {
				var e = this.unsuspend;
				this.unsuspend = null, e();
			}
		}
	}
	var Yf = null;
	function Xf(e, t) {
		e.stylesheets = null, e.unsuspend !== null && (e.count++, Yf = /* @__PURE__ */ new Map(), t.forEach(Zf, e), Yf = null, Jf.call(e));
	}
	function Zf(e, t) {
		if (!(t.state.loading & 4)) {
			var n = Yf.get(e);
			if (n) var r = n.get(null);
			else {
				n = /* @__PURE__ */ new Map(), Yf.set(e, n);
				for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < i.length; a++) {
					var o = i[a];
					(o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), r = o);
				}
				r && n.set(null, r);
			}
			i = t.instance, o = i.getAttribute("data-precedence"), a = n.get(o) || r, a === r && n.set(null, i), n.set(o, i), this.count++, r = Jf.bind(this), i.addEventListener("load", r), i.addEventListener("error", r), a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
		}
	}
	var Qf = {
		$$typeof: C,
		Provider: null,
		Consumer: null,
		_currentValue: oe,
		_currentValue2: oe,
		_threadCount: 0
	};
	function $f(e, t, n, r, i, a, o, s, c) {
		this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ze(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ze(0), this.hiddenUpdates = Ze(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
	}
	function ep(e, t, n, r, i, a, o, s, c, l, u, d) {
		return e = new $f(e, t, n, o, c, l, u, d, s), t = 1, !0 === a && (t |= 24), a = ti(3, null, null, t), e.current = a, a.stateNode = e, t = ta(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: t
		}, Pa(a), e;
	}
	function tp(e) {
		return e ? (e = $r, e) : $r;
	}
	function np(e, t, n, r, i, a) {
		i = tp(i), r.context === null ? r.context = i : r.pendingContext = i, r = Ia(t), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = La(e, r, t), n !== null && (hu(n, e, t), Ra(n, e, t));
	}
	function rp(e, t) {
		if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function ip(e, t) {
		rp(e, t), (e = e.alternate) && rp(e, t);
	}
	function ap(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = Xr(e, 67108864);
			t !== null && hu(t, e, 67108864), ip(e, 67108864);
		}
	}
	function op(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = pu();
			t = rt(t);
			var n = Xr(e, t);
			n !== null && hu(n, e, t), ip(e, t);
		}
	}
	var sp = !0;
	function cp(e, t, n, r) {
		var i = A.T;
		A.T = null;
		var a = j.p;
		try {
			j.p = 2, up(e, t, n, r);
		} finally {
			j.p = a, A.T = i;
		}
	}
	function lp(e, t, n, r) {
		var i = A.T;
		A.T = null;
		var a = j.p;
		try {
			j.p = 8, up(e, t, n, r);
		} finally {
			j.p = a, A.T = i;
		}
	}
	function up(e, t, n, r) {
		if (sp) {
			var i = dp(r);
			if (i === null) wd(e, t, r, fp, n), Cp(e, r);
			else if (Tp(i, e, t, n, r)) r.stopPropagation();
			else if (Cp(e, r), t & 4 && -1 < Sp.indexOf(e)) {
				for (; i !== null;) {
					var a = gt(i);
					if (a !== null) switch (a.tag) {
						case 3:
							if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
								var o = Ke(a.pendingLanes);
								if (o !== 0) {
									var s = a;
									for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
										var c = 1 << 31 - ze(o);
										s.entanglements[1] |= c, o &= ~c;
									}
									rd(a), !(J & 6) && (tu = ke() + 500, id(0, !1));
								}
							}
							break;
						case 31:
						case 13: s = Xr(a, 2), s !== null && hu(s, a, 2), bu(), ip(a, 2);
					}
					if (a = dp(r), a === null && wd(e, t, r, fp, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else wd(e, t, r, null, n);
		}
	}
	function dp(e) {
		return e = H(e), pp(e);
	}
	var fp = null;
	function pp(e) {
		if (fp = null, e = ht(e), e !== null) {
			var t = l(e);
			if (t === null) e = null;
			else {
				var n = t.tag;
				if (n === 13) {
					if (e = u(t), e !== null) return e;
					e = null;
				} else if (n === 31) {
					if (e = d(t), e !== null) return e;
					e = null;
				} else if (n === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
					e = null;
				} else t !== e && (e = null);
			}
		}
		return fp = e, null;
	}
	function mp(e) {
		switch (e) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart": return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 8;
			case "message": switch (Ae()) {
				case je: return 2;
				case F: return 8;
				case Me:
				case Ne: return 32;
				case Pe: return 268435456;
				default: return 32;
			}
			default: return 32;
		}
	}
	var hp = !1, gp = null, _p = null, vp = null, yp = /* @__PURE__ */ new Map(), bp = /* @__PURE__ */ new Map(), xp = [], Sp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
	function Cp(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				gp = null;
				break;
			case "dragenter":
			case "dragleave":
				_p = null;
				break;
			case "mouseover":
			case "mouseout":
				vp = null;
				break;
			case "pointerover":
			case "pointerout":
				yp.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": bp.delete(t.pointerId);
		}
	}
	function wp(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = gt(t), t !== null && ap(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function Tp(e, t, n, r, i) {
		switch (t) {
			case "focusin": return gp = wp(gp, e, t, n, r, i), !0;
			case "dragenter": return _p = wp(_p, e, t, n, r, i), !0;
			case "mouseover": return vp = wp(vp, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return yp.set(a, wp(yp.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, bp.set(a, wp(bp.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function Ep(e) {
		var t = ht(e.target);
		if (t !== null) {
			var n = l(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = u(n), t !== null) {
						e.blockedOn = t, ot(e.priority, function() {
							op(n);
						});
						return;
					}
				} else if (t === 31) {
					if (t = d(n), t !== null) {
						e.blockedOn = t, ot(e.priority, function() {
							op(n);
						});
						return;
					}
				} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
					return;
				}
			}
		}
		e.blockedOn = null;
	}
	function Dp(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = dp(e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				Zt = r, n.target.dispatchEvent(r), Zt = null;
			} else return t = gt(n), t !== null && ap(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function Op(e, t, n) {
		Dp(e) && n.delete(t);
	}
	function kp() {
		hp = !1, gp !== null && Dp(gp) && (gp = null), _p !== null && Dp(_p) && (_p = null), vp !== null && Dp(vp) && (vp = null), yp.forEach(Op), bp.forEach(Op);
	}
	function Ap(e, t) {
		e.blockedOn === t && (e.blockedOn = null, hp || (hp = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, kp)));
	}
	var jp = null;
	function Mp(e) {
		jp !== e && (jp = e, n.unstable_scheduleCallback(n.unstable_NormalPriority, function() {
			jp === e && (jp = null);
			for (var t = 0; t < e.length; t += 3) {
				var n = e[t], r = e[t + 1], i = e[t + 2];
				if (typeof r != "function") {
					if (pp(r || n) === null) continue;
					break;
				}
				var a = gt(n);
				a !== null && (e.splice(t, 3), t -= 3, bs(a, {
					pending: !0,
					data: i,
					method: n.method,
					action: r
				}, r, i));
			}
		}));
	}
	function Np(e) {
		function t(t) {
			return Ap(t, e);
		}
		gp !== null && Ap(gp, e), _p !== null && Ap(_p, e), vp !== null && Ap(vp, e), yp.forEach(t), bp.forEach(t);
		for (var n = 0; n < xp.length; n++) {
			var r = xp[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
		for (; 0 < xp.length && (n = xp[0], n.blockedOn === null);) Ep(n), n.blockedOn === null && xp.shift();
		if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (r = 0; r < n.length; r += 3) {
			var i = n[r], a = n[r + 1], o = i[lt] || null;
			if (typeof a == "function") o || Mp(n);
			else if (o) {
				var s = null;
				if (a && a.hasAttribute("formAction")) {
					if (i = a, o = a[lt] || null) s = o.formAction;
					else if (pp(i) !== null) continue;
				} else s = o.action;
				typeof s == "function" ? n[r + 1] = s : (n.splice(r, 3), r -= 3), Mp(n);
			}
		}
	}
	function Pp() {
		function e(e) {
			e.canIntercept && e.info === "react-transition" && e.intercept({
				handler: function() {
					return new Promise(function(e) {
						return i = e;
					});
				},
				focusReset: "manual",
				scroll: "manual"
			});
		}
		function t() {
			i !== null && (i(), i = null), r || setTimeout(n, 20);
		}
		function n() {
			if (!r && !navigation.transition) {
				var e = navigation.currentEntry;
				e && e.url != null && navigation.navigate(e.url, {
					state: e.getState(),
					info: "react-transition",
					history: "replace"
				});
			}
		}
		if (typeof navigation == "object") {
			var r = !1, i = null;
			return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
				r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null);
			};
		}
	}
	function Fp(e) {
		this._internalRoot = e;
	}
	Ip.prototype.render = Fp.prototype.render = function(e) {
		var t = this._internalRoot;
		if (t === null) throw Error(o(409));
		var n = t.current;
		np(n, pu(), e, t, null, null);
	}, Ip.prototype.unmount = Fp.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			np(e.current, 2, null, e, null, null), bu(), t[L] = null;
		}
	};
	function Ip(e) {
		this._internalRoot = e;
	}
	Ip.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = at();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < xp.length && t !== 0 && t < xp[n].priority; n++);
			xp.splice(n, 0, e), n === 0 && Ep(e);
		}
	};
	var Lp = r.version;
	if (Lp !== "19.2.4") throw Error(o(527, Lp, "19.2.4"));
	j.findDOMNode = function(e) {
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
		return e = p(t), e = e === null ? null : m(e), e = e === null ? null : e.stateNode, e;
	};
	var Rp = {
		bundleType: 0,
		version: "19.2.4",
		rendererPackageName: "react-dom",
		currentDispatcherRef: A,
		reconcilerVersion: "19.2.4"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var zp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!zp.isDisabled && zp.supportsFiber) try {
			Le = zp.inject(Rp), Re = zp;
		} catch {}
	}
	e.createRoot = function(e, t) {
		if (!c(e)) throw Error(o(299));
		var n = !1, r = "", i = Us, a = Ws, s = Gs;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (a = t.onCaughtError), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = ep(e, 1, !1, null, null, n, r, null, i, a, s, Pp), e[L] = t.current, Sd(e), new Fp(t);
	};
})), l = /* @__PURE__ */ n(((e, t) => {
	function n() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = c();
}));
//#endregion
//#region ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
function u(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = u(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function d() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = u(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region ../../node_modules/.pnpm/tailwind-merge@3.6.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs
var f = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, p = (e, t) => ({
	classGroupId: e,
	validator: t
}), m = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), h = "-", g = [], _ = "arbitrary..", v = (e) => {
	let t = x(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return b(e);
			let n = e.split(h);
			return y(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? f(i, t) : t : i || g;
			}
			return n[e] || g;
		}
	};
}, y = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = y(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(h) : e.slice(t).join(h), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, b = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? _ + r : void 0;
})(), x = (e) => {
	let { theme: t, classGroups: n } = e;
	return S(n, t);
}, S = (e, t) => {
	let n = m();
	for (let r in e) {
		let i = e[r];
		C(i, n, r, t);
	}
	return n;
}, C = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		w(i, t, n, r);
	}
}, w = (e, t, n, r) => {
	if (typeof e == "string") {
		T(e, t, n);
		return;
	}
	if (typeof e == "function") {
		ee(e, t, n, r);
		return;
	}
	E(e, t, n, r);
}, T = (e, t, n) => {
	let r = e === "" ? t : D(t, e);
	r.classGroupId = n;
}, ee = (e, t, n, r) => {
	if (O(e)) {
		C(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(p(n, e));
}, E = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		C(o, D(t, a), n, r);
	}
}, D = (e, t) => {
	let n = e, r = t.split(h), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = m(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, O = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, te = (e) => {
	if (e < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let t = 0, n = Object.create(null), r = Object.create(null), i = (i, a) => {
		n[i] = a, t++, t > e && (t = 0, r = n, n = Object.create(null));
	};
	return {
		get(e) {
			let t = n[e];
			if (t !== void 0) return t;
			if ((t = r[e]) !== void 0) return i(e, t), t;
		},
		set(e, t) {
			e in n ? n[e] = t : i(e, t);
		}
	};
}, k = "!", ne = ":", re = [], ie = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), ae = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === ne) {
					t.push(e.slice(i, s)), i = s + 1;
					continue;
				}
				if (o === "/") {
					a = s;
					continue;
				}
			}
			o === "[" ? n++ : o === "]" ? n-- : o === "(" ? r++ : o === ")" && r--;
		}
		let s = t.length === 0 ? e : e.slice(i), c = s, l = !1;
		s.endsWith(k) ? (c = s.slice(0, -1), l = !0) : s.startsWith(k) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return ie(t, l, c, u);
	};
	if (t) {
		let e = t + ne, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : ie(re, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, A = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.orderSensitiveModifiers.forEach((e, n) => {
		t.set(e, 1e6 + n);
	}), (e) => {
		let n = [], r = [];
		for (let i = 0; i < e.length; i++) {
			let a = e[i], o = a[0] === "[", s = t.has(a);
			o || s ? (r.length > 0 && (r.sort(), n.push(...r), r = []), n.push(a)) : r.push(a);
		}
		return r.length > 0 && (r.sort(), n.push(...r)), n;
	};
}, j = (e) => ({
	cache: te(e.cacheSize),
	parseClassName: ae(e),
	sortModifiers: A(e),
	postfixLookupClassGroupIds: oe(e),
	...v(e)
}), oe = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, se = /\s+/, ce = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(se), l = "";
	for (let e = c.length - 1; e >= 0; --e) {
		let t = c[e], { isExternal: u, modifiers: d, hasImportantModifier: f, baseClassName: p, maybePostfixModifierPosition: m } = n(t);
		if (u) {
			l = t + (l.length > 0 ? " " + l : l);
			continue;
		}
		let h = !!m, g;
		if (h) {
			g = r(p.substring(0, m));
			let e = g && o[g] ? r(p) : void 0;
			e && e !== g && (g = e, h = !1);
		} else g = r(p);
		if (!g) {
			if (!h) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			if (g = r(p), !g) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			h = !1;
		}
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + k : _, y = v + g;
		if (s.indexOf(y) > -1) continue;
		s.push(y);
		let b = i(g, h);
		for (let e = 0; e < b.length; ++e) {
			let t = b[e];
			s.push(v + t);
		}
		l = t + (l.length > 0 ? " " + l : l);
	}
	return l;
}, le = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = M(n)) && (i && (i += " "), i += r);
	return i;
}, M = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = M(e[r])) && (n && (n += " "), n += t);
	return n;
}, N = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = j(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = ce(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(le(...e));
}, ue = [], de = (e) => {
	let t = (t) => t[e] || ue;
	return t.isThemeGetter = !0, t;
}, fe = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, pe = /^\((?:(\w[\w-]*):)?(.+)\)$/i, me = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, he = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ge = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, _e = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ve = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ye = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, be = (e) => me.test(e), P = (e) => !!e && !Number.isNaN(Number(e)), xe = (e) => !!e && Number.isInteger(Number(e)), Se = (e) => e.endsWith("%") && P(e.slice(0, -1)), Ce = (e) => he.test(e), we = () => !0, Te = (e) => ge.test(e) && !_e.test(e), Ee = () => !1, De = (e) => ve.test(e), Oe = (e) => ye.test(e), ke = (e) => !F(e) && !I(e), Ae = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), je = (e) => Ke(e, Xe, Ee), F = (e) => fe.test(e), Me = (e) => Ke(e, Ze, Te), Ne = (e) => Ke(e, Qe, P), Pe = (e) => Ke(e, et, we), Fe = (e) => Ke(e, $e, Ee), Ie = (e) => Ke(e, Je, Ee), Le = (e) => Ke(e, Ye, Oe), Re = (e) => Ke(e, tt, De), I = (e) => pe.test(e), ze = (e) => qe(e, Ze), Be = (e) => qe(e, $e), Ve = (e) => qe(e, Je), He = (e) => qe(e, Xe), Ue = (e) => qe(e, Ye), We = (e) => qe(e, tt, !0), Ge = (e) => qe(e, et, !0), Ke = (e, t, n) => {
	let r = fe.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, qe = (e, t, n = !1) => {
	let r = pe.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, Je = (e) => e === "position" || e === "percentage", Ye = (e) => e === "image" || e === "url", Xe = (e) => e === "length" || e === "size" || e === "bg-size", Ze = (e) => e === "length", Qe = (e) => e === "number", $e = (e) => e === "family-name", et = (e) => e === "number" || e === "weight", tt = (e) => e === "shadow", nt = () => {
	let e = de("color"), t = de("font"), n = de("text"), r = de("font-weight"), i = de("tracking"), a = de("leading"), o = de("breakpoint"), s = de("container"), c = de("spacing"), l = de("radius"), u = de("shadow"), d = de("inset-shadow"), f = de("text-shadow"), p = de("drop-shadow"), m = de("blur"), h = de("perspective"), g = de("aspect"), _ = de("ease"), v = de("animate"), y = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], b = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	], x = () => [
		...b(),
		I,
		F
	], S = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], C = () => [
		"auto",
		"contain",
		"none"
	], w = () => [
		I,
		F,
		c
	], T = () => [
		be,
		"full",
		"auto",
		...w()
	], ee = () => [
		xe,
		"none",
		"subgrid",
		I,
		F
	], E = () => [
		"auto",
		{ span: [
			"full",
			xe,
			I,
			F
		] },
		xe,
		I,
		F
	], D = () => [
		xe,
		"auto",
		I,
		F
	], O = () => [
		"auto",
		"min",
		"max",
		"fr",
		I,
		F
	], te = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	], k = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], ne = () => ["auto", ...w()], re = () => [
		be,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], ie = () => [
		be,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...w()
	], ae = () => [
		be,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], A = () => [
		e,
		I,
		F
	], j = () => [
		...b(),
		Ve,
		Ie,
		{ position: [I, F] }
	], oe = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], se = () => [
		"auto",
		"cover",
		"contain",
		He,
		je,
		{ size: [I, F] }
	], ce = () => [
		Se,
		ze,
		Me
	], le = () => [
		"",
		"none",
		"full",
		l,
		I,
		F
	], M = () => [
		"",
		P,
		ze,
		Me
	], N = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], ue = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	], fe = () => [
		P,
		Se,
		Ve,
		Ie
	], pe = () => [
		"",
		"none",
		m,
		I,
		F
	], me = () => [
		"none",
		P,
		I,
		F
	], he = () => [
		"none",
		P,
		I,
		F
	], ge = () => [
		P,
		I,
		F
	], _e = () => [
		be,
		"full",
		...w()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [Ce],
			breakpoint: [Ce],
			color: [we],
			container: [Ce],
			"drop-shadow": [Ce],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [ke],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [Ce],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [Ce],
			shadow: [Ce],
			spacing: ["px", P],
			text: [Ce],
			"text-shadow": [Ce],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				be,
				F,
				I,
				g
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				I,
				F
			] }],
			"container-named": [Ae],
			columns: [{ columns: [
				P,
				F,
				I,
				s
			] }],
			"break-after": [{ "break-after": y() }],
			"break-before": [{ "break-before": y() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			sr: ["sr-only", "not-sr-only"],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: x() }],
			overflow: [{ overflow: S() }],
			"overflow-x": [{ "overflow-x": S() }],
			"overflow-y": [{ "overflow-y": S() }],
			overscroll: [{ overscroll: C() }],
			"overscroll-x": [{ "overscroll-x": C() }],
			"overscroll-y": [{ "overscroll-y": C() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: T() }],
			"inset-x": [{ "inset-x": T() }],
			"inset-y": [{ "inset-y": T() }],
			start: [{
				"inset-s": T(),
				start: T()
			}],
			end: [{
				"inset-e": T(),
				end: T()
			}],
			"inset-bs": [{ "inset-bs": T() }],
			"inset-be": [{ "inset-be": T() }],
			top: [{ top: T() }],
			right: [{ right: T() }],
			bottom: [{ bottom: T() }],
			left: [{ left: T() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				xe,
				"auto",
				I,
				F
			] }],
			basis: [{ basis: [
				be,
				"full",
				"auto",
				s,
				...w()
			] }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			flex: [{ flex: [
				P,
				be,
				"auto",
				"initial",
				"none",
				F
			] }],
			grow: [{ grow: [
				"",
				P,
				I,
				F
			] }],
			shrink: [{ shrink: [
				"",
				P,
				I,
				F
			] }],
			order: [{ order: [
				xe,
				"first",
				"last",
				"none",
				I,
				F
			] }],
			"grid-cols": [{ "grid-cols": ee() }],
			"col-start-end": [{ col: E() }],
			"col-start": [{ "col-start": D() }],
			"col-end": [{ "col-end": D() }],
			"grid-rows": [{ "grid-rows": ee() }],
			"row-start-end": [{ row: E() }],
			"row-start": [{ "row-start": D() }],
			"row-end": [{ "row-end": D() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": O() }],
			"auto-rows": [{ "auto-rows": O() }],
			gap: [{ gap: w() }],
			"gap-x": [{ "gap-x": w() }],
			"gap-y": [{ "gap-y": w() }],
			"justify-content": [{ justify: [...te(), "normal"] }],
			"justify-items": [{ "justify-items": [...k(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...k()] }],
			"align-content": [{ content: ["normal", ...te()] }],
			"align-items": [{ items: [...k(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...k(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": te() }],
			"place-items": [{ "place-items": [...k(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...k()] }],
			p: [{ p: w() }],
			px: [{ px: w() }],
			py: [{ py: w() }],
			ps: [{ ps: w() }],
			pe: [{ pe: w() }],
			pbs: [{ pbs: w() }],
			pbe: [{ pbe: w() }],
			pt: [{ pt: w() }],
			pr: [{ pr: w() }],
			pb: [{ pb: w() }],
			pl: [{ pl: w() }],
			m: [{ m: ne() }],
			mx: [{ mx: ne() }],
			my: [{ my: ne() }],
			ms: [{ ms: ne() }],
			me: [{ me: ne() }],
			mbs: [{ mbs: ne() }],
			mbe: [{ mbe: ne() }],
			mt: [{ mt: ne() }],
			mr: [{ mr: ne() }],
			mb: [{ mb: ne() }],
			ml: [{ ml: ne() }],
			"space-x": [{ "space-x": w() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": w() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: re() }],
			"inline-size": [{ inline: ["auto", ...ie()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...ie()] }],
			"max-inline-size": [{ "max-inline": ["none", ...ie()] }],
			"block-size": [{ block: ["auto", ...ae()] }],
			"min-block-size": [{ "min-block": ["auto", ...ae()] }],
			"max-block-size": [{ "max-block": ["none", ...ae()] }],
			w: [{ w: [
				s,
				"screen",
				...re()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...re()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...re()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...re()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...re()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...re()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				ze,
				Me
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				Ge,
				Pe
			] }],
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				Se,
				F
			] }],
			"font-family": [{ font: [
				Be,
				Fe,
				t
			] }],
			"font-features": [{ "font-features": [F] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				I,
				F
			] }],
			"line-clamp": [{ "line-clamp": [
				P,
				"none",
				I,
				Ne
			] }],
			leading: [{ leading: [a, ...w()] }],
			"list-image": [{ "list-image": [
				"none",
				I,
				F
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				I,
				F
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: A() }],
			"text-color": [{ text: A() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...N(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				P,
				"from-font",
				"auto",
				I,
				Me
			] }],
			"text-decoration-color": [{ decoration: A() }],
			"underline-offset": [{ "underline-offset": [
				P,
				"auto",
				I,
				F
			] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: w() }],
			"tab-size": [{ tab: [
				xe,
				I,
				F
			] }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				I,
				F
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: [
				"none",
				I,
				F
			] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: j() }],
			"bg-repeat": [{ bg: oe() }],
			"bg-size": [{ bg: se() }],
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						xe,
						I,
						F
					],
					radial: [
						"",
						I,
						F
					],
					conic: [
						xe,
						I,
						F
					]
				},
				Ue,
				Le
			] }],
			"bg-color": [{ bg: A() }],
			"gradient-from-pos": [{ from: ce() }],
			"gradient-via-pos": [{ via: ce() }],
			"gradient-to-pos": [{ to: ce() }],
			"gradient-from": [{ from: A() }],
			"gradient-via": [{ via: A() }],
			"gradient-to": [{ to: A() }],
			rounded: [{ rounded: le() }],
			"rounded-s": [{ "rounded-s": le() }],
			"rounded-e": [{ "rounded-e": le() }],
			"rounded-t": [{ "rounded-t": le() }],
			"rounded-r": [{ "rounded-r": le() }],
			"rounded-b": [{ "rounded-b": le() }],
			"rounded-l": [{ "rounded-l": le() }],
			"rounded-ss": [{ "rounded-ss": le() }],
			"rounded-se": [{ "rounded-se": le() }],
			"rounded-ee": [{ "rounded-ee": le() }],
			"rounded-es": [{ "rounded-es": le() }],
			"rounded-tl": [{ "rounded-tl": le() }],
			"rounded-tr": [{ "rounded-tr": le() }],
			"rounded-br": [{ "rounded-br": le() }],
			"rounded-bl": [{ "rounded-bl": le() }],
			"border-w": [{ border: M() }],
			"border-w-x": [{ "border-x": M() }],
			"border-w-y": [{ "border-y": M() }],
			"border-w-s": [{ "border-s": M() }],
			"border-w-e": [{ "border-e": M() }],
			"border-w-bs": [{ "border-bs": M() }],
			"border-w-be": [{ "border-be": M() }],
			"border-w-t": [{ "border-t": M() }],
			"border-w-r": [{ "border-r": M() }],
			"border-w-b": [{ "border-b": M() }],
			"border-w-l": [{ "border-l": M() }],
			"divide-x": [{ "divide-x": M() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": M() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...N(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...N(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: A() }],
			"border-color-x": [{ "border-x": A() }],
			"border-color-y": [{ "border-y": A() }],
			"border-color-s": [{ "border-s": A() }],
			"border-color-e": [{ "border-e": A() }],
			"border-color-bs": [{ "border-bs": A() }],
			"border-color-be": [{ "border-be": A() }],
			"border-color-t": [{ "border-t": A() }],
			"border-color-r": [{ "border-r": A() }],
			"border-color-b": [{ "border-b": A() }],
			"border-color-l": [{ "border-l": A() }],
			"divide-color": [{ divide: A() }],
			"outline-style": [{ outline: [
				...N(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				P,
				I,
				F
			] }],
			"outline-w": [{ outline: [
				"",
				P,
				ze,
				Me
			] }],
			"outline-color": [{ outline: A() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				We,
				Re
			] }],
			"shadow-color": [{ shadow: A() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				We,
				Re
			] }],
			"inset-shadow-color": [{ "inset-shadow": A() }],
			"ring-w": [{ ring: M() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: A() }],
			"ring-offset-w": [{ "ring-offset": [P, Me] }],
			"ring-offset-color": [{ "ring-offset": A() }],
			"inset-ring-w": [{ "inset-ring": M() }],
			"inset-ring-color": [{ "inset-ring": A() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				We,
				Re
			] }],
			"text-shadow-color": [{ "text-shadow": A() }],
			opacity: [{ opacity: [
				P,
				I,
				F
			] }],
			"mix-blend": [{ "mix-blend": [
				...ue(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": ue() }],
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			"mask-image-linear-pos": [{ "mask-linear": [P] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": fe() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": fe() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": A() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": A() }],
			"mask-image-t-from-pos": [{ "mask-t-from": fe() }],
			"mask-image-t-to-pos": [{ "mask-t-to": fe() }],
			"mask-image-t-from-color": [{ "mask-t-from": A() }],
			"mask-image-t-to-color": [{ "mask-t-to": A() }],
			"mask-image-r-from-pos": [{ "mask-r-from": fe() }],
			"mask-image-r-to-pos": [{ "mask-r-to": fe() }],
			"mask-image-r-from-color": [{ "mask-r-from": A() }],
			"mask-image-r-to-color": [{ "mask-r-to": A() }],
			"mask-image-b-from-pos": [{ "mask-b-from": fe() }],
			"mask-image-b-to-pos": [{ "mask-b-to": fe() }],
			"mask-image-b-from-color": [{ "mask-b-from": A() }],
			"mask-image-b-to-color": [{ "mask-b-to": A() }],
			"mask-image-l-from-pos": [{ "mask-l-from": fe() }],
			"mask-image-l-to-pos": [{ "mask-l-to": fe() }],
			"mask-image-l-from-color": [{ "mask-l-from": A() }],
			"mask-image-l-to-color": [{ "mask-l-to": A() }],
			"mask-image-x-from-pos": [{ "mask-x-from": fe() }],
			"mask-image-x-to-pos": [{ "mask-x-to": fe() }],
			"mask-image-x-from-color": [{ "mask-x-from": A() }],
			"mask-image-x-to-color": [{ "mask-x-to": A() }],
			"mask-image-y-from-pos": [{ "mask-y-from": fe() }],
			"mask-image-y-to-pos": [{ "mask-y-to": fe() }],
			"mask-image-y-from-color": [{ "mask-y-from": A() }],
			"mask-image-y-to-color": [{ "mask-y-to": A() }],
			"mask-image-radial": [{ "mask-radial": [I, F] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": fe() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": fe() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": A() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": A() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [P] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": fe() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": fe() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": A() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": A() }],
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			"mask-position": [{ mask: j() }],
			"mask-repeat": [{ mask: oe() }],
			"mask-size": [{ mask: se() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				I,
				F
			] }],
			filter: [{ filter: [
				"",
				"none",
				I,
				F
			] }],
			blur: [{ blur: pe() }],
			brightness: [{ brightness: [
				P,
				I,
				F
			] }],
			contrast: [{ contrast: [
				P,
				I,
				F
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				We,
				Re
			] }],
			"drop-shadow-color": [{ "drop-shadow": A() }],
			grayscale: [{ grayscale: [
				"",
				P,
				I,
				F
			] }],
			"hue-rotate": [{ "hue-rotate": [
				P,
				I,
				F
			] }],
			invert: [{ invert: [
				"",
				P,
				I,
				F
			] }],
			saturate: [{ saturate: [
				P,
				I,
				F
			] }],
			sepia: [{ sepia: [
				"",
				P,
				I,
				F
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				I,
				F
			] }],
			"backdrop-blur": [{ "backdrop-blur": pe() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				P,
				I,
				F
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				P,
				I,
				F
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				P,
				I,
				F
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				P,
				I,
				F
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				P,
				I,
				F
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				P,
				I,
				F
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				P,
				I,
				F
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				P,
				I,
				F
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": w() }],
			"border-spacing-x": [{ "border-spacing-x": w() }],
			"border-spacing-y": [{ "border-spacing-y": w() }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				I,
				F
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				P,
				"initial",
				I,
				F
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				I,
				F
			] }],
			delay: [{ delay: [
				P,
				I,
				F
			] }],
			animate: [{ animate: [
				"none",
				v,
				I,
				F
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				I,
				F
			] }],
			"perspective-origin": [{ "perspective-origin": x() }],
			rotate: [{ rotate: me() }],
			"rotate-x": [{ "rotate-x": me() }],
			"rotate-y": [{ "rotate-y": me() }],
			"rotate-z": [{ "rotate-z": me() }],
			scale: [{ scale: he() }],
			"scale-x": [{ "scale-x": he() }],
			"scale-y": [{ "scale-y": he() }],
			"scale-z": [{ "scale-z": he() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: ge() }],
			"skew-x": [{ "skew-x": ge() }],
			"skew-y": [{ "skew-y": ge() }],
			transform: [{ transform: [
				I,
				F,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: x() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: _e() }],
			"translate-x": [{ "translate-x": _e() }],
			"translate-y": [{ "translate-y": _e() }],
			"translate-z": [{ "translate-z": _e() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				xe,
				I,
				F
			] }],
			accent: [{ accent: A() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: A() }],
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				I,
				F
			] }],
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scrollbar-thumb-color": [{ "scrollbar-thumb": A() }],
			"scrollbar-track-color": [{ "scrollbar-track": A() }],
			"scrollbar-gutter": [{ "scrollbar-gutter": [
				"auto",
				"stable",
				"both"
			] }],
			"scrollbar-w": [{ scrollbar: [
				"auto",
				"thin",
				"none"
			] }],
			"scroll-m": [{ "scroll-m": w() }],
			"scroll-mx": [{ "scroll-mx": w() }],
			"scroll-my": [{ "scroll-my": w() }],
			"scroll-ms": [{ "scroll-ms": w() }],
			"scroll-me": [{ "scroll-me": w() }],
			"scroll-mbs": [{ "scroll-mbs": w() }],
			"scroll-mbe": [{ "scroll-mbe": w() }],
			"scroll-mt": [{ "scroll-mt": w() }],
			"scroll-mr": [{ "scroll-mr": w() }],
			"scroll-mb": [{ "scroll-mb": w() }],
			"scroll-ml": [{ "scroll-ml": w() }],
			"scroll-p": [{ "scroll-p": w() }],
			"scroll-px": [{ "scroll-px": w() }],
			"scroll-py": [{ "scroll-py": w() }],
			"scroll-ps": [{ "scroll-ps": w() }],
			"scroll-pe": [{ "scroll-pe": w() }],
			"scroll-pbs": [{ "scroll-pbs": w() }],
			"scroll-pbe": [{ "scroll-pbe": w() }],
			"scroll-pt": [{ "scroll-pt": w() }],
			"scroll-pr": [{ "scroll-pr": w() }],
			"scroll-pb": [{ "scroll-pb": w() }],
			"scroll-pl": [{ "scroll-pl": w() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				I,
				F
			] }],
			fill: [{ fill: ["none", ...A()] }],
			"stroke-w": [{ stroke: [
				P,
				ze,
				Me,
				Ne
			] }],
			stroke: [{ stroke: ["none", ...A()] }],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			"container-named": ["container-type"],
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		postfixLookupClassGroups: ["container-type"],
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
}, rt = (e, { cacheSize: t, prefix: n, experimentalParseClassName: r, extend: i = {}, override: a = {} }) => (it(e, "cacheSize", t), it(e, "prefix", n), it(e, "experimentalParseClassName", r), at(e.theme, a.theme), at(e.classGroups, a.classGroups), at(e.conflictingClassGroups, a.conflictingClassGroups), at(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), it(e, "postfixLookupClassGroups", a.postfixLookupClassGroups), it(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), ot(e.theme, i.theme), ot(e.classGroups, i.classGroups), ot(e.conflictingClassGroups, i.conflictingClassGroups), ot(e.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), st(e, i, "postfixLookupClassGroups"), st(e, i, "orderSensitiveModifiers"), e), it = (e, t, n) => {
	n !== void 0 && (e[t] = n);
}, at = (e, t) => {
	if (t) for (let n in t) it(e, n, t[n]);
}, ot = (e, t) => {
	if (t) for (let n in t) st(e, t, n);
}, st = (e, t, n) => {
	let r = t[n];
	r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, ct = (e, ...t) => typeof e == "function" ? N(nt, e, ...t) : N(() => rt(nt(), e), ...t), lt = ct({ extend: { classGroups: { "font-size": [{ text: [
	"h1",
	"h2",
	"h3",
	"h4",
	"body-xl",
	"body-lg",
	"body",
	"body-sm",
	"body-xs",
	"caption",
	"eyebrow",
	"cta",
	"link",
	"icon-badge",
	"cta-lg",
	"header-item"
] }] } } });
function L(...e) {
	return lt(d(e));
}
//#endregion
//#region ../../packages/ui-react/src/brands/DiscoveryLogo.tsx
var R = r();
function ut({ title: e, height: t = 16, className: n, ...r }) {
	let i = e ? {
		role: "img",
		"aria-label": e
	} : {
		"aria-hidden": !0,
		focusable: !1
	};
	return /* @__PURE__ */ (0, R.jsxs)("svg", {
		viewBox: "0 0 140 10",
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		height: t,
		style: { width: "auto" },
		className: L("shrink-0", n),
		...i,
		...r,
		children: [e ? /* @__PURE__ */ (0, R.jsx)("title", { children: e }) : null, /* @__PURE__ */ (0, R.jsx)("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M13.5349 6.72338C13.4771 7.79485 13.2489 8.57974 12.6781 9.07385C12.106 9.56916 11.198 9.81712 9.95338 9.81712H0V5.00939V4.99069V0.182349H9.95338C11.198 0.182349 12.106 0.43091 12.6781 0.926223C13.2489 1.42033 13.4747 2.20463 13.5349 3.2767C13.5993 4.42599 13.5993 5.53125 13.5349 6.72338ZM2.77888 4.99069V5.00939V7.56499H8.53293C9.2543 7.56499 9.78237 7.43105 10.1166 7.16439C10.4508 6.89833 10.6163 6.47904 10.6163 5.90952C10.6242 5.60968 10.6296 5.30923 10.6302 5.00939V5.00456V4.99491V4.99069C10.6296 4.69024 10.6242 4.38979 10.6163 4.08995C10.6163 3.52043 10.4508 3.10174 10.1166 2.83508C9.78237 2.56902 9.2543 2.43448 8.53293 2.43448H2.77888V4.99069ZM59.68 0.0393656C58.2065 0.065911 57.1371 1.23029 57.001 2.67279C56.9155 3.45467 56.877 4.21544 56.8764 5.00155C56.8752 5.7786 56.9288 6.56109 57.001 7.32487C57.1142 8.76858 58.2071 9.92873 59.68 9.95769C62.6076 10.0144 65.5225 10.0138 68.4375 9.95769C69.9103 9.92934 70.9779 8.76617 71.1158 7.32487C71.1899 6.54902 71.2404 5.77317 71.2404 4.99612C71.2404 4.22027 71.182 3.44743 71.1158 2.67279C71.0068 1.22848 69.9097 0.065911 68.4375 0.0393656C65.5165 -0.0131219 62.6003 -0.0131219 59.68 0.0393656ZM60.4597 2.27944H63.9979H64.0214H67.6571C68.1334 2.27944 68.5224 2.68908 68.5224 3.18982V6.80603C68.5224 7.30677 68.1334 7.71581 67.6571 7.71581H64.0051H63.9979H60.4597C59.9834 7.71581 59.5944 7.30677 59.5944 6.80603V3.18982C59.5944 2.68908 59.9834 2.27944 60.4597 2.27944ZM130.4 9.81712H131.477H131.486H132.108H132.117H133.195V6.31434L140 0.182349H136.069L131.797 4.02118L127.525 0.182349H123.595L130.399 6.31434L130.4 9.81712ZM118.328 2.43931C118.351 2.4375 118.375 2.43629 118.399 2.43629C118.869 2.43629 119.252 2.82784 119.252 3.30747C119.252 3.78709 118.869 4.17864 118.399 4.17864C118.386 4.17864 118.373 4.17803 118.36 4.17743C118.351 4.17864 118.34 4.17924 118.331 4.17984H110.576V2.43629H118.313C118.318 2.4375 118.322 2.43871 118.328 2.43931ZM107.814 9.81712H110.576V6.44344H116.417V6.46215L119.238 9.81712H122.896L119.956 6.31313C121.248 5.92641 122.194 4.72584 122.194 3.31109C122.194 1.58503 120.786 0.182349 119.059 0.182349H107.814V9.81712ZM92.0613 9.81712H104.884L104.884 7.57826H94.8094V6.03742H103.527V3.97653H94.8064V2.4194H104.884L104.886 0.182349H92.0625L92.0613 9.81712ZM81.236 7.54146L86.3801 0.186572L89.7581 0.192002L82.8937 9.81712H81.236V9.8135H79.5783L72.7133 0.188382L76.0919 0.182349L81.236 7.54146ZM22.8512 6.64495H26.1112V6.80603C26.1112 7.17284 26.2178 7.41356 26.4165 7.55171C26.6586 7.71883 27.0674 7.78278 27.7183 7.78278L32.3638 7.78157C32.7841 7.78157 33.081 7.71762 33.2598 7.59395C33.4399 7.46906 33.5296 7.26454 33.5296 6.97616C33.5296 6.68235 33.426 6.4718 33.2189 6.3445C33.0136 6.21841 32.571 6.1074 31.8882 6.0893L26.3027 5.94692C24.9696 5.91254 24.0694 5.68811 23.6003 5.27726C23.1306 4.86641 22.8952 4.12072 22.8952 3.03477C22.8952 2.47551 22.9566 2.01458 23.0812 1.652C23.2059 1.28881 23.4046 0.987157 23.6792 0.747645C24.0019 0.476761 24.4246 0.284307 24.9467 0.170283C25.4681 0.0562582 26.3184 0.000150826 27.4937 0.000150826H32.6703C33.9529 0.000150826 34.8766 0.205878 35.439 0.615521C36.0038 1.02758 36.2868 1.69423 36.2868 2.61668C36.2868 2.67641 36.2838 2.74157 36.2814 2.81336C36.279 2.88274 36.2832 2.99676 36.2675 3.15362L33.0635 3.13432V3.0939C33.0635 2.77173 32.9696 2.5292 32.7835 2.36631C32.5987 2.20463 32.3181 2.12499 31.9442 2.12499L27.7147 2.12258C27.0632 2.12197 26.6333 2.17808 26.4243 2.29271C26.216 2.40673 26.1112 2.60582 26.1112 2.88998C26.1112 3.16991 26.2052 3.37202 26.3936 3.4963C26.5845 3.62239 26.9295 3.72737 27.4395 3.73642L33.2442 3.83596C34.5165 3.85828 35.4366 4.11831 35.9556 4.59069C36.4747 5.06248 36.7342 5.86849 36.7342 7.00995C36.7342 7.68806 36.6372 8.21173 36.447 8.58336C36.2561 8.9544 35.9327 9.27234 35.4823 9.53417C35.1843 9.70008 34.7772 9.81833 34.266 9.89254C33.7542 9.96373 33.0136 9.99992 32.0441 9.99992H27.5244C25.6717 9.99992 24.4325 9.81652 23.8038 9.45152C23.2721 9.14142 22.9873 8.60448 22.8958 7.83889C22.8633 7.56559 22.8573 7.28566 22.8482 7.00995C22.844 6.88205 22.8428 6.75596 22.8512 6.64495ZM53.9518 6.64072C53.9373 6.90859 53.9072 7.17706 53.8922 7.32668C53.744 8.76858 52.6765 9.96131 51.2024 9.96131L46.8224 9.99992L42.4419 9.96131C40.9684 9.96131 39.8677 8.7722 39.7623 7.32668C39.6461 5.74482 39.6208 4.25586 39.7623 2.67279C39.8906 1.22969 40.9678 0.0393656 42.4419 0.0393656L46.8224 0.000150826L51.2024 0.0393656C52.6765 0.0393656 53.7766 1.22788 53.8825 2.67279L53.9307 3.32858V3.33281H51.2879V3.31591V3.19103C51.2879 2.69029 50.8983 2.28064 50.422 2.28064H46.7851H46.7616H43.2222C42.7466 2.28064 42.3564 2.69029 42.3564 3.19103V6.80844C42.3564 7.30919 42.7466 7.71943 43.2222 7.71943H46.7616H46.7688H50.422C50.8983 7.71943 51.2879 7.30919 51.2879 6.80844V6.64072H53.9518ZM19.6966 9.81712H16.7341V0.182349H19.6972L19.6966 9.81712Z",
			fill: "currentColor"
		})]
	});
}
//#endregion
//#region ../../packages/ui-react/src/brands/JaguarLogo.tsx
function dt({ title: e, height: t = 16, className: n, ...r }) {
	let i = e ? {
		role: "img",
		"aria-label": e
	} : {
		"aria-hidden": !0,
		focusable: !1
	};
	return /* @__PURE__ */ (0, R.jsxs)("svg", {
		viewBox: "0 0 130 16",
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		height: t,
		style: { width: "auto" },
		className: L("shrink-0", n),
		...i,
		...r,
		children: [e ? /* @__PURE__ */ (0, R.jsx)("title", { children: e }) : null, /* @__PURE__ */ (0, R.jsx)("path", {
			d: "M118.618 1.90032C119.872 0.662582 121.663 0 123.598 0C126.055 0 128.365 1.16872 129.712 3.2577L127.634 4.65648C126.583 3.2807 125.241 2.50769 123.561 2.50769C122.385 2.50769 121.275 2.86659 120.474 3.67641C119.724 4.43102 119.234 5.59514 119.234 7.28841V15.6213H116.67V6.95251C116.67 4.7163 117.419 3.08285 118.623 1.90032M99.74 13.4495C102.744 13.4495 105.183 11.1121 105.183 7.9786C105.183 4.84513 102.744 2.50769 99.74 2.50769C96.7364 2.50769 94.2789 4.84513 94.2789 7.9786C94.2789 11.1121 96.7364 13.4495 99.74 13.4495ZM91.6547 7.9786C91.6547 3.59359 95.2693 0 99.6984 0C101.883 0 103.984 0.878842 105.474 2.36045C106.858 3.73623 107.723 5.61815 107.723 7.997V15.6213H105.16V13.3023C104.09 14.7839 101.883 15.9526 99.6151 15.9526C95.1813 15.9526 91.6547 12.4464 91.6547 7.97399M71.2587 13.7808C70.1248 12.5891 69.4306 10.9602 69.4306 9.05989V0.335892H71.9946V8.7286C71.9946 10.2746 72.4805 11.3375 73.2349 12.1105C74.1004 13.0032 75.3129 13.4495 76.5116 13.4495C77.7103 13.4495 78.9229 13.0078 79.7883 12.1105C80.5381 11.3329 81.0286 10.2746 81.0286 8.7286V0.335892H83.5926V9.0645C83.5926 10.9648 82.8984 12.5891 81.7645 13.7854C80.4594 15.1612 78.5711 15.9572 76.5116 15.9572C74.4521 15.9572 72.5639 15.1612 71.2587 13.7854M45.2535 7.9786C45.2535 3.55218 48.7616 0 53.3202 0C56.2822 0 58.6148 1.21013 60.0402 3.2807L57.9206 4.67949C56.8469 3.2577 55.2548 2.50769 53.3202 2.50769C50.3814 2.50769 47.8776 4.57366 47.8776 7.9786C47.8776 11.1305 50.1454 13.4495 53.3619 13.4495C56.0693 13.4495 58.152 11.7976 58.675 9.37738H55.2085V6.93411H61.2806C61.3222 7.24699 61.3639 7.60129 61.3639 7.9786C61.3639 12.3406 57.8558 15.9572 53.3202 15.9572C48.7847 15.9572 45.2535 12.428 45.2535 7.9786ZM29.2079 13.4495C32.2115 13.4495 34.6505 11.1121 34.6505 7.9786C34.6505 4.84513 32.2115 2.50769 29.2079 2.50769C26.2043 2.50769 23.7467 4.84513 23.7467 7.9786C23.7467 11.1121 26.2043 13.4495 29.2079 13.4495ZM21.1226 7.9786C21.1134 3.59359 24.7279 0 29.157 0C31.3414 0 33.4426 0.878842 34.9328 2.36045C36.3213 3.73623 37.1821 5.61815 37.1821 7.997V15.6213H34.6181V13.3023C33.5444 14.7839 31.3414 15.9526 29.0737 15.9526C24.64 15.9526 21.1134 12.4464 21.1134 7.97399M0.00462809 12.6949L2.08264 11.2961C3.13322 12.6765 4.47537 13.4449 6.15536 13.4449C7.3309 13.4449 8.44164 13.086 9.2423 12.2762C9.99205 11.5216 10.4826 10.3574 10.4826 8.66418V0.335892H13.0466V9.00008C13.0466 11.2363 12.2968 12.8697 11.0935 14.0523C9.83932 15.29 8.04825 15.9526 6.11371 15.9526C3.65619 15.9526 1.34677 14.7839 0 12.6949",
			fill: "currentColor"
		})]
	});
}
//#endregion
//#region ../../packages/ui-react/src/brands/RangeRoverLogo.tsx
function ft({ title: e, height: t = 16, className: n, ...r }) {
	let i = e ? {
		role: "img",
		"aria-label": e
	} : {
		"aria-hidden": !0,
		focusable: !1
	};
	return /* @__PURE__ */ (0, R.jsxs)("svg", {
		viewBox: "0 0 187 10",
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		height: t,
		style: { width: "auto" },
		className: L("shrink-0", n),
		...i,
		...r,
		children: [e ? /* @__PURE__ */ (0, R.jsx)("title", { children: e }) : null, /* @__PURE__ */ (0, R.jsxs)("g", { children: [
			/* @__PURE__ */ (0, R.jsx)("path", {
				d: "M21.9286 5.82528L23.7516 2.60736L25.5734 5.82528H21.9298H21.9286ZM24.6563 0.00497437H22.8457C21.0003 3.28246 19.1574 6.55871 17.3096 9.8362H19.6774C20.0845 9.11269 20.4903 8.39539 20.8973 7.67189H26.601C27.0018 8.38298 27.4014 9.0916 27.8022 9.80269L27.8283 9.8362H30.1924C28.3483 6.55995 26.5054 3.28246 24.6563 0.00497437Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, R.jsx)("path", {
				d: "M62.8053 8.13597H57.7656C57.4988 8.13597 57.227 8.13597 56.9639 8.0702C56.6971 8.00691 56.4638 7.88033 56.2851 7.66439C56.1101 7.45218 56.0183 7.19653 55.9699 6.93096C55.9227 6.6629 55.9227 6.39485 55.9227 6.12307V3.87685C55.9227 3.60507 55.9227 3.34074 55.9699 3.07268C56.017 2.80835 56.1076 2.55146 56.2851 2.33925C56.4638 2.12331 56.6971 1.99673 56.9639 1.93344C57.227 1.87015 57.4988 1.86767 57.7656 1.86767H62.8053C63.1391 1.86767 63.4916 1.86767 63.8155 2.0017C64.153 2.13945 64.3752 2.38517 64.5067 2.72024H66.6065C66.5134 2.27348 66.3533 1.84037 66.1051 1.45441C65.852 1.06722 65.5268 0.749525 65.1297 0.516216C64.7326 0.281667 64.2982 0.147639 63.8465 0.0769016C63.3873 0.00616442 62.9456 0.00244141 62.4851 0.00244141H58.1056C57.5013 0.00244141 56.923 0.00616441 56.3248 0.162531C55.739 0.315174 55.2141 0.601846 54.7959 1.05233C54.3801 1.50281 54.1319 2.0501 53.9979 2.63957C53.8602 3.2427 53.8564 3.82473 53.8564 4.43406V5.5733C53.8564 6.18139 53.8602 6.76094 53.9979 7.36407C54.1319 7.95355 54.3801 8.50331 54.7959 8.95504C55.2116 9.41048 55.7378 9.69219 56.3248 9.84483C56.9217 10.0012 57.5013 10.0049 58.1056 10.0049H62.4851C63.0895 10.0049 63.6678 10.0012 64.266 9.84483C64.8517 9.69219 65.3767 9.40552 65.7949 8.95504C66.2106 8.50455 66.4588 7.95727 66.5929 7.36779C66.7306 6.76591 66.7331 6.18263 66.7331 5.5733V4.29507H59.9709V6.12679H64.6532C64.6532 6.39857 64.6532 6.6629 64.606 6.93096C64.5589 7.19529 64.4683 7.45218 64.2908 7.66439C64.1121 7.88033 63.8788 8.00691 63.612 8.0702C63.3489 8.13349 63.0771 8.13597 62.8103 8.13597H62.8066V8.1397L62.8053 8.13597Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, R.jsx)("path", {
				d: "M9.74932 3.83194C9.74932 3.9883 9.74932 4.14095 9.72325 4.29359C9.69719 4.44623 9.64507 4.59019 9.53338 4.70809C9.42169 4.8235 9.27649 4.88307 9.12633 4.90789C8.97369 4.93891 8.82229 4.93891 8.66592 4.93891H2.0551V2.02256H8.66468C8.82105 2.02256 8.97245 2.02256 9.12509 2.05358C9.27773 2.08461 9.42169 2.13797 9.52966 2.25338C9.64135 2.3688 9.69223 2.51772 9.71953 2.66788C9.74559 2.82052 9.74559 2.97316 9.74559 3.12953V3.83442H9.75056L9.74932 3.83194ZM11.308 6.43308C11.2075 6.32139 11.0958 6.23948 10.963 6.17123C10.829 6.10794 10.6912 6.06698 10.556 6.02231C10.8091 5.93792 11.0536 5.84733 11.2658 5.66862C11.478 5.48744 11.5972 5.25413 11.6704 4.99476C11.7424 4.74159 11.7672 4.46237 11.7821 4.20548C11.7945 3.93742 11.7945 3.67309 11.7945 3.40379V2.30178C11.7945 2.00022 11.7883 1.73216 11.7014 1.43804C11.6195 1.15509 11.4756 0.90193 11.2671 0.693442C11.0598 0.484953 10.8067 0.339756 10.5249 0.256609C10.2308 0.172221 9.96525 0.166016 9.66493 0.166016H0V9.83467H2.06379V6.80662H8.15711C8.37304 6.80662 8.62869 6.80662 8.84338 6.82524C8.95507 6.83765 9.07421 6.85626 9.18094 6.88853C9.29263 6.92203 9.39315 6.97292 9.47505 7.05606C9.55696 7.13797 9.60908 7.24221 9.64631 7.35018C9.67982 7.45939 9.69843 7.57728 9.7096 7.69022C9.73194 7.90615 9.72822 8.16428 9.72822 8.37897V9.83591H11.792V8.95976C11.792 8.40751 11.7982 7.76468 11.6729 7.21988C11.6096 6.94437 11.5066 6.65522 11.313 6.43432L11.3093 6.4306H11.308V6.43308Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, R.jsx)("path", {
				d: "M45.4235 7.80599V0.173828H47.4873V9.83628H44.422L44.3997 9.81145L37.7318 2.16564V9.83876H35.668V0.173828H38.7332L38.7543 0.194925L45.4235 7.80599Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, R.jsx)("path", {
				d: "M73.1064 9.83628V0.173828H84.2097V2.02044H75.1702V4.08795H83.2454V5.90602H75.1702V7.98594H84.2097V9.83628H73.1064Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, R.jsx)("path", {
				d: "M138.936 0.17395H141.303L145.373 7.40155L149.449 0.17395H151.816L146.375 9.8364H144.375L138.936 0.17395Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, R.jsx)("path", {
				d: "M113.068 3.83194C113.068 3.9883 113.068 4.14095 113.043 4.29359C113.017 4.44623 112.965 4.59019 112.854 4.70809C112.743 4.8235 112.599 4.88307 112.445 4.90789C112.292 4.93891 112.141 4.93891 111.984 4.93891H105.375V2.02256H111.984C112.141 2.02256 112.292 2.02256 112.445 2.05358C112.598 2.08461 112.741 2.13797 112.849 2.25338C112.96 2.3688 113.012 2.51772 113.038 2.66788C113.064 2.82052 113.064 2.97316 113.064 3.12953V3.83442H113.069L113.068 3.83194ZM114.623 6.43308C114.522 6.32139 114.412 6.23948 114.278 6.17123C114.144 6.10794 114.006 6.06698 113.868 6.02231C114.119 5.93792 114.366 5.84733 114.578 5.66862C114.789 5.48744 114.91 5.25413 114.981 4.99476C115.051 4.74159 115.077 4.46237 115.092 4.20548C115.104 3.93742 115.104 3.67309 115.104 3.40379V2.30178C115.104 2.00022 115.101 1.73216 115.011 1.43804C114.929 1.15509 114.785 0.90193 114.577 0.693442C114.368 0.484953 114.117 0.339756 113.834 0.256609C113.539 0.172221 113.274 0.166016 112.974 0.166016H103.322V9.8297H105.385V6.80166H111.478C111.694 6.80166 111.95 6.80166 112.164 6.82027C112.276 6.83268 112.395 6.8513 112.502 6.88356C112.614 6.91707 112.712 6.96795 112.796 7.0511C112.878 7.133 112.93 7.23725 112.967 7.34522C113.001 7.45442 113.019 7.57232 113.031 7.68525C113.053 7.90119 113.049 8.15931 113.049 8.37401V9.83095H115.109V8.9548C115.109 8.40255 115.116 7.75971 114.99 7.21491C114.927 6.93941 114.824 6.64777 114.63 6.42936H114.624V6.43308H114.623Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, R.jsx)("path", {
				d: "M184.108 3.83194C184.108 3.9883 184.108 4.14095 184.084 4.29359C184.059 4.44623 184.007 4.59019 183.894 4.70809C183.783 4.8235 183.639 4.88307 183.484 4.90789C183.331 4.93891 183.18 4.93891 183.024 4.93891H176.415V2.02256H183.024C183.18 2.02256 183.331 2.02256 183.484 2.05358C183.638 2.08461 183.782 2.13797 183.889 2.25338C184 2.3688 184.051 2.51772 184.08 2.66788C184.105 2.82052 184.105 2.97316 184.105 3.12953V3.83442H184.108V3.83194ZM185.663 6.43308C185.563 6.32139 185.451 6.23948 185.318 6.17123C185.183 6.10794 185.048 6.06698 184.909 6.02231C185.161 5.93792 185.406 5.84733 185.619 5.66862C185.831 5.48744 185.95 5.25413 186.023 4.99476C186.093 4.74159 186.119 4.46237 186.135 4.20548C186.147 3.93742 186.147 3.67309 186.147 3.40379V2.30178C186.147 2.00022 186.144 1.73216 186.054 1.43804C185.971 1.15509 185.827 0.90193 185.62 0.693442C185.413 0.484953 185.159 0.339756 184.879 0.256609C184.584 0.172221 184.319 0.166016 184.018 0.166016H174.365V9.8297H176.43V6.80166H182.522C182.738 6.80166 182.994 6.80166 183.207 6.82027C183.319 6.83268 183.438 6.8513 183.546 6.88356C183.655 6.91707 183.756 6.96795 183.839 7.0511C183.921 7.133 183.972 7.23725 184.01 7.34522C184.044 7.45442 184.062 7.57232 184.072 7.68525C184.095 7.90119 184.091 8.15931 184.091 8.37401V9.83095H186.151V8.9548C186.151 8.40255 186.157 7.75971 186.032 7.21491C185.97 6.93941 185.867 6.64777 185.672 6.42936H185.666V6.43308H185.663Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, R.jsx)("path", {
				d: "M132.264 6.2844C132.264 6.54625 132.264 6.787 132.198 7.04017C132.135 7.28961 132.016 7.51423 131.834 7.69914C131.653 7.88281 131.426 8.0007 131.178 8.064C130.921 8.12977 130.68 8.12977 130.425 8.12977H125.385C125.126 8.12977 124.885 8.12977 124.632 8.064C124.382 8.0007 124.16 7.88281 123.975 7.69914C123.789 7.51795 123.674 7.28961 123.61 7.04017C123.545 6.78452 123.545 6.54128 123.545 6.2844V3.71428C123.545 3.45243 123.545 3.21167 123.61 2.95851C123.674 2.70907 123.792 2.48445 123.975 2.29954C124.156 2.11587 124.382 1.99797 124.632 1.93468C124.887 1.86891 125.129 1.86891 125.385 1.86891H130.425C130.684 1.86891 130.925 1.86891 131.178 1.93468C131.427 1.99797 131.65 2.11587 131.834 2.29954C132.016 2.48321 132.136 2.70907 132.198 2.95851C132.264 3.21416 132.264 3.45739 132.264 3.71428V6.2844ZM134.305 3.36059C134.283 3.0702 134.242 2.78353 134.164 2.50058C134.012 1.93592 133.734 1.42091 133.314 1.00393C132.894 0.585713 132.379 0.311451 131.815 0.162531C131.533 0.0880706 131.246 0.0471175 130.957 0.0247795C130.668 0.00244141 130.379 0.00244141 130.088 0.00244141H125.715C125.425 0.00244141 125.137 0.00244141 124.846 0.0247795C124.556 0.0471175 124.271 0.0880706 123.988 0.162531C123.424 0.311451 122.908 0.586954 122.488 1.00393C122.069 1.42215 121.791 1.93592 121.638 2.50058C121.56 2.78353 121.519 3.06524 121.498 3.36059C121.476 3.65099 121.476 3.94138 121.476 4.23178V5.76938C121.476 6.05978 121.476 6.35017 121.498 6.64056C121.521 6.93096 121.561 7.21763 121.638 7.50058C121.791 8.06648 122.069 8.58025 122.488 8.99723C122.908 9.41545 123.424 9.68971 123.988 9.83863C124.269 9.91309 124.556 9.95404 124.846 9.97638C125.136 9.99872 125.425 9.99872 125.715 9.99872H130.088C130.378 9.99872 130.667 9.99872 130.957 9.97638C131.247 9.95404 131.533 9.91309 131.815 9.83863C132.379 9.68971 132.893 9.41421 133.314 8.99723C133.732 8.57901 134.011 8.06524 134.164 7.50058C134.242 7.21763 134.283 6.93592 134.305 6.64056C134.328 6.35017 134.328 6.05978 134.328 5.76938V4.23178C134.328 3.94138 134.328 3.65099 134.305 3.36059Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, R.jsx)("path", {
				d: "M156.89 9.8364V0.17395H167.997V2.02056H158.951V4.08807H167.03V5.90614H158.951V7.98606H167.997V9.8364H156.89Z",
				fill: "currentColor"
			})
		] })]
	});
}
//#endregion
//#region ../../packages/ui-react/src/brands/BrandLogo.tsx
function pt({ brand: e, ...t }) {
	switch (e) {
		case "range-rover": return /* @__PURE__ */ (0, R.jsx)(ft, { ...t });
		case "jaguar": return /* @__PURE__ */ (0, R.jsx)(dt, { ...t });
		case "discovery": return /* @__PURE__ */ (0, R.jsx)(ut, { ...t });
	}
}
//#endregion
//#region ../../packages/ui-react/src/brands/definitions.ts
var mt = [
	{
		id: "range-rover",
		displayName: "Range Rover",
		brandTheme: "land-rover",
		default: !0,
		hasThemeOverride: !1,
		components: {
			field: {
				layout: "stacked",
				errorStyle: "inline"
			},
			vehicleCard: { imageAspectRatio: "4/3" }
		}
	},
	{
		id: "jaguar",
		displayName: "Jaguar",
		brandTheme: "jaguar",
		hasThemeOverride: !0,
		components: {
			field: {
				layout: "floating",
				errorStyle: "divider"
			},
			vehicleCard: { imageAspectRatio: "16/10" }
		}
	},
	{
		id: "discovery",
		displayName: "Discovery",
		brandTheme: "land-rover",
		hasThemeOverride: !1,
		components: {
			field: {
				layout: "stacked",
				errorStyle: "inline"
			},
			vehicleCard: { imageAspectRatio: "4/3" }
		}
	}
], ht = Object.fromEntries(mt.map((e) => [e.id, e])), gt = mt.find((e) => e.default === !0).id;
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/chain.mjs
function _t(...e) {
	return (...t) => {
		for (let n of e) typeof n == "function" && n(...t);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/useLayoutEffect.mjs
var z = /* @__PURE__ */ e(t(), 1), B = typeof document < "u" ? z.useLayoutEffect : () => {}, vt = {
	prefix: String(Math.round(Math.random() * 1e10)),
	current: 0
}, yt = /*#__PURE__*/ z.createContext(vt), bt = /*#__PURE__*/ z.createContext(!1);
typeof window < "u" && window.document && window.document.createElement;
var xt = /* @__PURE__ */ new WeakMap();
function St(e = !1) {
	let t = (0, z.useContext)(yt), n = (0, z.useRef)(null);
	if (n.current === null && !e) {
		let e = z.default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.ReactCurrentOwner?.current;
		if (e) {
			let n = xt.get(e);
			n == null ? xt.set(e, {
				id: t.current,
				state: e.memoizedState
			}) : e.memoizedState !== n.state && (t.current = n.id, xt.delete(e));
		}
		n.current = ++t.current;
	}
	return n.current;
}
function Ct(e) {
	let t = (0, z.useContext)(yt), n = St(!!e), r = `react-aria${t.prefix}`;
	return e || `${r}-${n}`;
}
function wt(e) {
	let t = z.useId(), [n] = (0, z.useState)(kt()), r = n ? "react-aria" : `react-aria${vt.prefix}`;
	return e || `${r}-${t}`;
}
var Tt = typeof z.useId == "function" ? wt : Ct;
function Et() {
	return !1;
}
function Dt() {
	return !0;
}
function Ot(e) {
	return () => {};
}
function kt() {
	return typeof z.useSyncExternalStore == "function" ? z.useSyncExternalStore(Ot, Et, Dt) : (0, z.useContext)(bt);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/useValueEffect.mjs
function At(e) {
	let [t, n] = (0, z.useState)(e), r = (0, z.useRef)(t), i = (0, z.useRef)(null), a = (0, z.useRef)(() => {
		if (!i.current) return;
		let e = i.current.next();
		if (e.done) {
			i.current = null;
			return;
		}
		r.current === e.value ? a.current() : n(e.value);
	});
	return B(() => {
		r.current = t, i.current && a.current();
	}), [t, (0, z.useCallback)((e) => {
		i.current = e(r.current), a.current();
	}, [a])];
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/useId.mjs
var jt = !!(typeof window < "u" && window.document && window.document.createElement), Mt = /* @__PURE__ */ new Map(), Nt;
typeof FinalizationRegistry < "u" && (Nt = new FinalizationRegistry((e) => {
	Mt.delete(e);
}));
function Pt(e) {
	let [t, n] = (0, z.useState)(e), r = (0, z.useRef)(null), i = Tt(t), a = (0, z.useRef)(null);
	if (Nt && Nt.register(a, i), jt) {
		let e = Mt.get(i);
		e && !e.includes(r) ? e.push(r) : Mt.set(i, [r]);
	}
	return B(() => {
		let e = i;
		return () => {
			Nt && Nt.unregister(a), Mt.delete(e);
		};
	}, [i]), (0, z.useEffect)(() => {
		let e = r.current;
		return e && n(e), () => {
			e && (r.current = null);
		};
	}), i;
}
function Ft(e, t) {
	if (e === t) return e;
	let n = Mt.get(e);
	if (n) return n.forEach((e) => e.current = t), t;
	let r = Mt.get(t);
	return r ? (r.forEach((t) => t.current = e), e) : t;
}
function It(e = []) {
	let t = Pt(), [n, r] = At(t), i = (0, z.useCallback)(() => {
		r(function* () {
			yield t, yield document.getElementById(t) ? t : void 0;
		});
	}, [t, r]);
	return B(i, [
		t,
		i,
		...e
	]), n;
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/mergeRefs.mjs
function Lt(...e) {
	return e.length === 1 && e[0] ? e[0] : (t) => {
		let n = !1, r = e.map((e) => {
			let r = Rt(e, t);
			return n ||= typeof r == "function", r;
		});
		if (n) return () => {
			r.forEach((t, n) => {
				typeof t == "function" ? t() : Rt(e[n], null);
			});
		};
	};
}
function Rt(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/mergeProps.mjs
function V(...e) {
	let t = { ...e[0] };
	for (let n = 1; n < e.length; n++) {
		let r = e[n];
		for (let e in r) {
			let n = t[e], i = r[e];
			typeof n == "function" && typeof i == "function" && e[0] === "o" && e[1] === "n" && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = _t(n, i) : (e === "className" || e === "UNSAFE_className") && typeof n == "string" && typeof i == "string" ? t[e] = d(n, i) : e === "id" && n && i ? t.id = Ft(n, i) : e === "ref" && n && i ? t.ref = Lt(n, i) : t[e] = i === void 0 ? n : i;
		}
	}
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/useObjectRef.mjs
function zt(e) {
	let t = (0, z.useRef)(null), n = (0, z.useRef)(void 0), r = (0, z.useCallback)((t) => {
		if (typeof e == "function") {
			let n = e, r = n(t);
			return () => {
				typeof r == "function" ? r() : n(null);
			};
		} else if (e) return e.current = t, () => {
			e.current = null;
		};
	}, [e]);
	return (0, z.useMemo)(() => ({
		get current() {
			return t.current;
		},
		set current(e) {
			t.current = e, n.current &&= (n.current(), void 0), e != null && (n.current = r(e));
		}
	}), [r]);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/utils.mjs
var Bt = Symbol("default");
function Vt({ values: e, children: t }) {
	for (let [n, r] of e) t = /*#__PURE__*/ z.createElement(n.Provider, { value: r }, t);
	return t;
}
function Ht(e) {
	let { className: t, style: n, children: r, defaultClassName: i, defaultChildren: a, defaultStyle: o, values: s, render: c } = e;
	return (0, z.useMemo)(() => {
		let e, l, u;
		return e = typeof t == "function" ? t({
			...s,
			defaultClassName: i
		}) : t, l = typeof n == "function" ? n({
			...s,
			defaultStyle: o || {}
		}) : n, u = typeof r == "function" ? r({
			...s,
			defaultChildren: a
		}) : r ?? a, {
			className: e ?? i,
			style: l || o ? {
				...o,
				...l
			} : void 0,
			children: u ?? a,
			"data-rac": "",
			render: c ? (e) => c(e, s) : void 0
		};
	}, [
		t,
		n,
		r,
		i,
		a,
		o,
		s,
		c
	]);
}
function Ut(e, t) {
	let n = (0, z.useContext)(e);
	if (t === null) return null;
	if (n && typeof n == "object" && "slots" in n && n.slots) {
		let e = t || Bt;
		if (!n.slots[e]) {
			let e = new Intl.ListFormat().format(Object.keys(n.slots).map((e) => `"${e}"`)), r = t ? `Invalid slot "${t}".` : "A slot prop is required.";
			throw Error(`${r} Valid slot names are ${e}.`);
		}
		return n.slots[e];
	}
	return n;
}
function Wt(e, t, n) {
	let { ref: r, ...i } = Ut(n, e.slot) || {}, a = zt((0, z.useMemo)(() => Lt(t, r), [t, r])), o = V(i, e);
	return "style" in i && i.style && "style" in e && e.style && (typeof i.style == "function" || typeof e.style == "function" ? o.style = (t) => {
		let n = typeof i.style == "function" ? i.style(t) : i.style, r = {
			...t.defaultStyle,
			...n
		}, a = typeof e.style == "function" ? e.style({
			...t,
			defaultStyle: r
		}) : e.style;
		return {
			...r,
			...a
		};
	} : o.style = {
		...i.style,
		...e.style
	}), [o, a];
}
function Gt(e = !0) {
	let [t, n] = (0, z.useState)(e), r = (0, z.useRef)(!1), i = (0, z.useCallback)((e) => {
		r.current = !0, n(!!e);
	}, []);
	return B(() => {
		r.current || n(!1);
	}, []), [i, t];
}
function Kt(e) {
	let t = /^(data-.*)$/, n = {};
	for (let r in e) t.test(r) || (n[r] = e[r]);
	return n;
}
function qt(e, t, n) {
	let { render: r, ...i } = t, a = (0, z.useRef)(null), o = (0, z.useMemo)(() => Lt(n, a), [n, a]);
	B(() => {}, [e, r]);
	let s = {
		...i,
		ref: o
	};
	return r ? r(s, void 0) : /*#__PURE__*/ z.createElement(e, s);
}
var Jt = {}, Yt = new Proxy({}, { get(e, t) {
	if (typeof t != "string") return;
	let n = Jt[t];
	return n || (n = /*#__PURE__*/ (0, z.forwardRef)(qt.bind(null, t)), Jt[t] = n), n;
} }), Xt = "react-aria-clear-focus", Zt = "react-aria-focus", H = (e) => e?.ownerDocument ?? document, Qt = (e) => e && "window" in e && e.window === e ? e : H(e).defaultView || window;
function $t(e) {
	return typeof e == "object" && !!e && "nodeType" in e && typeof e.nodeType == "number";
}
function en(e) {
	return $t(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
//#endregion
//#region ../../node_modules/.pnpm/react-stately@3.48.0_react@19.2.4/node_modules/react-stately/dist/private/flags/flags.mjs
var tn = !1;
function nn() {
	return tn;
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/shadowdom/DOMFunctions.mjs
function U(e, t) {
	if (!nn()) return t && e ? e.contains(t) : !1;
	if (!e || !t) return !1;
	let n = t;
	for (; n !== null;) {
		if (n === e) return !0;
		n = n.tagName === "SLOT" && n.assignedSlot ? n.assignedSlot.parentNode : en(n) ? n.host : n.parentNode;
	}
	return !1;
}
var W = (e = document) => {
	if (!nn()) return e.activeElement;
	let t = e.activeElement;
	for (; t && "shadowRoot" in t && t.shadowRoot?.activeElement;) t = t.shadowRoot.activeElement;
	return t;
};
function G(e) {
	if (nn() && e.target instanceof Element && e.target.shadowRoot) {
		if ("composedPath" in e) return e.composedPath()[0] ?? null;
		if ("composedPath" in e.nativeEvent) return e.nativeEvent.composedPath()[0] ?? null;
	}
	return e.target;
}
function rn(e) {
	if (!e) return !1;
	let t = e.getRootNode(), n = Qt(e);
	if (!(t instanceof n.Document || t instanceof n.ShadowRoot)) return !1;
	let r = t.activeElement;
	return r != null && e.contains(r);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/focus/virtualFocus.mjs
function an(e) {
	let t = cn(H(e));
	t !== e && (t && on(t, e), e && sn(e, t));
}
function on(e, t) {
	e.dispatchEvent(new FocusEvent("blur", { relatedTarget: t })), e.dispatchEvent(new FocusEvent("focusout", {
		bubbles: !0,
		relatedTarget: t
	}));
}
function sn(e, t) {
	e.dispatchEvent(new FocusEvent("focus", { relatedTarget: t })), e.dispatchEvent(new FocusEvent("focusin", {
		bubbles: !0,
		relatedTarget: t
	}));
}
function cn(e) {
	let t = W(e), n = t?.getAttribute("aria-activedescendant");
	return n && e.getElementById(n) || t;
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/focusWithoutScrolling.mjs
function ln(e) {
	if (dn()) e.focus({ preventScroll: !0 });
	else {
		let t = fn(e);
		e.focus(), pn(t);
	}
}
var un = null;
function dn() {
	if (un == null) {
		un = !1;
		try {
			document.createElement("div").focus({ get preventScroll() {
				return un = !0, !0;
			} });
		} catch {}
	}
	return un;
}
function fn(e) {
	let t = e.parentNode, n = [], r = document.scrollingElement || document.documentElement;
	for (; t instanceof HTMLElement && t !== r;) (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
		element: t,
		scrollTop: t.scrollTop,
		scrollLeft: t.scrollLeft
	}), t = t.parentNode;
	return r instanceof HTMLElement && n.push({
		element: r,
		scrollTop: r.scrollTop,
		scrollLeft: r.scrollLeft
	}), n;
}
function pn(e) {
	for (let { element: t, scrollTop: n, scrollLeft: r } of e) t.scrollTop = n, t.scrollLeft = r;
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/isElementVisible.mjs
var mn = typeof Element < "u" && "checkVisibility" in Element.prototype;
function hn(e) {
	let t = Qt(e);
	if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
	let { display: n, visibility: r } = e.style, i = n !== "none" && r !== "hidden" && r !== "collapse";
	if (i) {
		let { getComputedStyle: t } = Qt(e), { display: n, visibility: r } = t(e);
		i = n !== "none" && r !== "hidden" && r !== "collapse";
	}
	return i;
}
function gn(e, t) {
	return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function _n(e, t) {
	return mn ? e.checkVisibility({ visibilityProperty: !0 }) && !e.closest("[data-react-aria-prevent-focus]") : e.nodeName !== "#comment" && hn(e) && gn(e, t) && (!e.parentElement || _n(e.parentElement, e));
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/isFocusable.mjs
var vn = [
	"input:not([disabled]):not([type=hidden])",
	"select:not([disabled])",
	"textarea:not([disabled])",
	"button:not([disabled])",
	"a[href]",
	"area[href]",
	"summary",
	"iframe",
	"object",
	"embed",
	"audio[controls]",
	"video[controls]",
	"[contenteditable]:not([contenteditable^=\"false\"])",
	"permission"
], yn = vn.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
vn.push("[tabindex]:not([tabindex=\"-1\"]):not([disabled])");
var bn = vn.join(":not([hidden]):not([tabindex=\"-1\"]),");
function xn(e, t) {
	return e.matches(yn) && !Cn(e) && (t?.skipVisibilityCheck || _n(e));
}
function Sn(e) {
	return e.matches(bn) && _n(e) && !Cn(e);
}
function Cn(e) {
	let t = e;
	for (; t != null;) {
		if (t instanceof Qt(t).HTMLElement && t.inert) return !0;
		t = t.parentElement;
	}
	return !1;
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/interactions/utils.mjs
function wn(e) {
	let t = e;
	return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t;
}
function Tn(e, t) {
	Object.defineProperty(e, "target", { value: t }), Object.defineProperty(e, "currentTarget", { value: t });
}
function En(e) {
	let t = (0, z.useRef)({
		isFocused: !1,
		observer: null
	});
	return B(() => {
		let e = t.current;
		return () => {
			e.observer &&= (e.observer.disconnect(), null);
		};
	}, []), (0, z.useCallback)((n) => {
		let r = G(n);
		if (r instanceof HTMLButtonElement || r instanceof HTMLInputElement || r instanceof HTMLTextAreaElement || r instanceof HTMLSelectElement) {
			t.current.isFocused = !0;
			let n = r;
			n.addEventListener("focusout", (r) => {
				if (t.current.isFocused = !1, n.disabled) {
					let t = wn(r);
					e?.(t);
				}
				t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
			}, { once: !0 }), t.current.observer = new MutationObserver(() => {
				if (t.current.isFocused && n.disabled) {
					t.current.observer?.disconnect();
					let e = n === W() ? null : W();
					n.dispatchEvent(new FocusEvent("blur", { relatedTarget: e })), n.dispatchEvent(new FocusEvent("focusout", {
						bubbles: !0,
						relatedTarget: e
					}));
				}
			}), t.current.observer.observe(n, {
				attributes: !0,
				attributeFilter: ["disabled"]
			});
		}
	}, [e]);
}
var Dn = !1;
function On(e) {
	for (; e && !xn(e, { skipVisibilityCheck: !0 });) e = e.parentElement;
	let t = Qt(e), n = t.document.activeElement;
	if (!n || n === e) return;
	Dn = !0;
	let r = !1, i = (e) => {
		(G(e) === n || r) && e.stopImmediatePropagation();
	}, a = (t) => {
		(G(t) === n || r) && (t.stopImmediatePropagation(), !e && !r && (r = !0, ln(n), c()));
	}, o = (t) => {
		(G(t) === e || r) && t.stopImmediatePropagation();
	}, s = (t) => {
		(G(t) === e || r) && (t.stopImmediatePropagation(), r || (r = !0, ln(n), c()));
	};
	t.addEventListener("blur", i, !0), t.addEventListener("focusout", a, !0), t.addEventListener("focusin", s, !0), t.addEventListener("focus", o, !0);
	let c = () => {
		cancelAnimationFrame(l), t.removeEventListener("blur", i, !0), t.removeEventListener("focusout", a, !0), t.removeEventListener("focusin", s, !0), t.removeEventListener("focus", o, !0), Dn = !1, r = !1;
	}, l = requestAnimationFrame(c);
	return c;
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/platform.mjs
function kn(e) {
	if (typeof window > "u" || window.navigator == null) return !1;
	let t = window.navigator.userAgentData?.brands;
	return Array.isArray(t) && t.some((t) => e.test(t.brand)) || e.test(window.navigator.userAgent);
}
function An(e) {
	return typeof window < "u" && window.navigator != null && e.test(window.navigator.userAgentData?.platform || window.navigator.platform);
}
function jn(e) {
	let t = null;
	return () => (t ??= e(), t);
}
var Mn = jn(function() {
	return An(/^Mac/i);
}), Nn = jn(function() {
	return An(/^iPhone/i);
}), Pn = jn(function() {
	return An(/^iPad/i) || Mn() && navigator.maxTouchPoints > 1;
}), Fn = jn(function() {
	return Nn() || Pn();
}), In = jn(function() {
	return Mn() || Fn();
}), Ln = jn(function() {
	return kn(/AppleWebKit/i) && !Rn();
}), Rn = jn(function() {
	return kn(/Chrome/i);
}), zn = jn(function() {
	return kn(/Android/i);
}), Bn = jn(function() {
	return kn(/Firefox/i);
});
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/isVirtualEvent.mjs
function Vn(e) {
	return e.pointerType === "" && e.isTrusted ? !0 : zn() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function Hn(e) {
	return !zn() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/openLink.mjs
var Un = /*#__PURE__*/ (0, z.createContext)({
	isNative: !0,
	open: Jn,
	useHref: (e) => e
});
function Wn() {
	return (0, z.useContext)(Un);
}
function Gn(e, t) {
	let n = e.getAttribute("target");
	return (!n || n === "_self") && e.origin === location.origin && !e.hasAttribute("download") && !t.metaKey && !t.ctrlKey && !t.altKey && !t.shiftKey;
}
function Kn(e, t, n = !0) {
	let { metaKey: r, ctrlKey: i, altKey: a, shiftKey: o } = t;
	Bn() && window.event?.type?.startsWith("key") && e.target === "_blank" && (Mn() ? r = !0 : i = !0);
	let s = Ln() && Mn() && !Pn() ? new KeyboardEvent("keydown", {
		keyIdentifier: "Enter",
		metaKey: r,
		ctrlKey: i,
		altKey: a,
		shiftKey: o
	}) : new MouseEvent("click", {
		metaKey: r,
		ctrlKey: i,
		altKey: a,
		shiftKey: o,
		detail: 1,
		bubbles: !0,
		cancelable: !0
	});
	Kn.isOpening = n, ln(e), e.dispatchEvent(s), Kn.isOpening = !1;
}
Kn.isOpening = !1;
function qn(e, t) {
	if (e instanceof HTMLAnchorElement) t(e);
	else if (e.hasAttribute("data-href")) {
		let n = document.createElement("a");
		n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), t(n), e.removeChild(n);
	}
}
function Jn(e, t) {
	qn(e, (e) => Kn(e, t));
}
function Yn(e) {
	let t = Wn().useHref(e?.href ?? ""), n = {};
	if (e) for (let r of [
		"href",
		"target",
		"rel",
		"download",
		"ping",
		"referrerPolicy"
	]) r in e && (n[r] = r === "href" ? t : e[r]);
	return n;
}
function Xn(e, t, n, r) {
	!t.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && Gn(e.currentTarget, e) && n && (e.preventDefault(), t.open(e.currentTarget, e, n, r));
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/interactions/useFocusVisible.mjs
var Zn = null, Qn = /* @__PURE__ */ new Set(), $n = /* @__PURE__ */ new Map(), er = !1, tr = !1, nr = {
	Tab: !0,
	Escape: !0
};
function rr(e, t) {
	for (let n of Qn) n(e, t);
}
function ir(e) {
	return !(e.metaKey || !Mn() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function ar(e) {
	er = !0, !Kn.isOpening && ir(e) && (Zn = "keyboard", rr("keyboard", e));
}
function or(e) {
	Zn = "pointer", "pointerType" in e && e.pointerType, (e.type === "mousedown" || e.type === "pointerdown") && (er = !0, rr("pointer", e));
}
function sr(e) {
	!Kn.isOpening && Vn(e) && (er = !0, Zn = "virtual");
}
function cr(e) {
	let t = Qt(G(e)), n = H(G(e));
	G(e) === t || G(e) === n || Dn || !e.isTrusted || (!er && !tr && (Zn = "virtual", rr("virtual", e)), er = !1, tr = !1);
}
function lr() {
	Dn || (er = !1, tr = !0);
}
function ur(e) {
	if (typeof window > "u" || typeof document > "u") return;
	let t = Qt(e), n = H(e);
	if ($n.get(t)) return;
	let r = t.HTMLElement.prototype.focus;
	Reflect.defineProperty(t.HTMLElement.prototype, "focus", {
		configurable: !0,
		writable: !0,
		value: function() {
			er = !0, r.apply(this, arguments);
		}
	}), n.addEventListener("keydown", ar, !0), n.addEventListener("keyup", ar, !0), n.addEventListener("click", sr, !0), t.addEventListener("focus", cr, !0), t.addEventListener("blur", lr, !1), typeof PointerEvent < "u" && (n.addEventListener("pointerdown", or, !0), n.addEventListener("pointermove", or, !0), n.addEventListener("pointerup", or, !0)), t.addEventListener("beforeunload", () => {
		dr(e);
	}, { once: !0 }), $n.set(t, { focus: r });
}
var dr = (e, t) => {
	let n = Qt(e), r = H(e);
	t && r.removeEventListener("DOMContentLoaded", t), $n.has(n) && (Reflect.defineProperty(n.HTMLElement.prototype, "focus", {
		configurable: !0,
		writable: !0,
		value: $n.get(n).focus
	}), r.removeEventListener("keydown", ar, !0), r.removeEventListener("keyup", ar, !0), r.removeEventListener("click", sr, !0), n.removeEventListener("focus", cr, !0), n.removeEventListener("blur", lr, !1), typeof PointerEvent < "u" && (r.removeEventListener("pointerdown", or, !0), r.removeEventListener("pointermove", or, !0), r.removeEventListener("pointerup", or, !0)), $n.delete(n));
};
function fr(e) {
	let t = H(e), n;
	return t.readyState === "loading" ? (n = () => {
		ur(e);
	}, t.addEventListener("DOMContentLoaded", n)) : ur(e), () => dr(e, n);
}
typeof document < "u" && fr();
function pr() {
	return Zn !== "pointer";
}
function mr() {
	return Zn;
}
function hr(e) {
	Zn = e, rr(e, null);
}
var gr = /* @__PURE__ */ new Set([
	"checkbox",
	"radio",
	"range",
	"color",
	"file",
	"image",
	"button",
	"submit",
	"reset"
]);
function _r(e, t, n) {
	let r = n ? G(n) : void 0, i = H(r), a = Qt(r), o = a === void 0 ? HTMLInputElement : a.HTMLInputElement, s = a === void 0 ? HTMLTextAreaElement : a.HTMLTextAreaElement, c = a === void 0 ? HTMLElement : a.HTMLElement, l = a === void 0 ? KeyboardEvent : a.KeyboardEvent, u = W(i);
	return e = e || u instanceof o && !gr.has(u.type) || u instanceof s || u instanceof c && u.isContentEditable, !(e && t === "keyboard" && n instanceof l && !nr[n.key]);
}
function vr(e, t, n) {
	ur(), (0, z.useEffect)(() => {
		if (n?.enabled === !1) return;
		let t = (t, r) => {
			_r(!!n?.isTextInput, t, r) && e(pr());
		};
		return Qn.add(t), () => {
			Qn.delete(t);
		};
	}, t);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/keyboard.mjs
function yr(e) {
	return Mn() ? e.metaKey : e.ctrlKey;
}
var br = /* @__PURE__ */ new Set([
	"checkbox",
	"radio",
	"range",
	"color",
	"file",
	"image",
	"button",
	"submit",
	"reset"
]);
function xr(e) {
	return e instanceof HTMLInputElement && !br.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/useEffectEvent.mjs
var Sr = z.useInsertionEffect ?? B;
function Cr(e) {
	let t = (0, z.useRef)(null);
	return Sr(() => {
		t.current = e;
	}, [e]), (0, z.useCallback)((...e) => {
		let n = t.current;
		return n?.(...e);
	}, []);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/useEvent.mjs
function wr(e, t, n, r) {
	let i = Cr(n), a = n == null;
	(0, z.useEffect)(() => {
		if (a || !e.current) return;
		let n = e.current;
		return n.addEventListener(t, i, r), () => {
			n.removeEventListener(t, i, r);
		};
	}, [
		e,
		t,
		r,
		a
	]);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/useLabels.mjs
function Tr(e, t) {
	let { id: n, "aria-label": r, "aria-labelledby": i } = e;
	return n = Pt(n), i && r ? i = [.../* @__PURE__ */ new Set([n, ...i.trim().split(/\s+/)])].join(" ") : i &&= i.trim().split(/\s+/).join(" "), !r && !i && t && (r = t), {
		id: n,
		"aria-label": r,
		"aria-labelledby": i
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/i18n/utils.mjs
var Er = /* @__PURE__ */ new Set([
	"Arab",
	"Syrc",
	"Samr",
	"Mand",
	"Thaa",
	"Mend",
	"Nkoo",
	"Adlm",
	"Rohg",
	"Hebr"
]), Dr = /* @__PURE__ */ new Set([
	"ae",
	"ar",
	"arc",
	"bcc",
	"bqi",
	"ckb",
	"dv",
	"fa",
	"glk",
	"he",
	"ku",
	"mzn",
	"nqo",
	"pnb",
	"ps",
	"sd",
	"ug",
	"ur",
	"yi"
]);
function Or(e) {
	if (Intl.Locale) {
		let t = new Intl.Locale(e).maximize(), n = typeof t.getTextInfo == "function" ? t.getTextInfo() : t.textInfo;
		if (n) return n.direction === "rtl";
		if (t.script) return Er.has(t.script);
	}
	let t = e.split("-")[0];
	return Dr.has(t);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/i18n/useDefaultLocale.mjs
var kr = Symbol.for("react-aria.i18n.locale");
function Ar() {
	let e = typeof window < "u" && window[kr] || typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
	try {
		Intl.DateTimeFormat.supportedLocalesOf([e]);
	} catch {
		e = "en-US";
	}
	return {
		locale: e,
		direction: Or(e) ? "rtl" : "ltr"
	};
}
var jr = Ar(), Mr = /* @__PURE__ */ new Set();
function Nr() {
	jr = Ar();
	for (let e of Mr) e(jr);
}
function Pr() {
	let e = kt(), [t, n] = (0, z.useState)(jr);
	return (0, z.useEffect)(() => (Mr.size === 0 && window.addEventListener("languagechange", Nr), Mr.add(n), () => {
		Mr.delete(n), Mr.size === 0 && window.removeEventListener("languagechange", Nr);
	}), []), e ? {
		locale: typeof window < "u" && window[kr] || "en-US",
		direction: "ltr"
	} : t;
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/i18n/I18nProvider.mjs
var Fr = /*#__PURE__*/ z.createContext(null);
function Ir() {
	let e = Pr();
	return (0, z.useContext)(Fr) || e;
}
//#endregion
//#region ../../node_modules/.pnpm/@internationalized+string@3.2.9/node_modules/@internationalized/string/dist/private/LocalizedStringDictionary.mjs
var Lr = Symbol.for("react-aria.i18n.locale"), Rr = Symbol.for("react-aria.i18n.strings"), zr = void 0, Br = class e {
	constructor(e, t = "en-US") {
		this.strings = Object.fromEntries(Object.entries(e).filter(([, e]) => e)), this.defaultLocale = t;
	}
	getStringForLocale(e, t) {
		let n = this.getStringsForLocale(t)[e];
		if (!n) throw Error(`Could not find intl message ${e} in ${t} locale`);
		return n;
	}
	getStringsForLocale(e) {
		let t = this.strings[e];
		return t || (t = Vr(e, this.strings, this.defaultLocale), this.strings[e] = t), t;
	}
	static getGlobalDictionaryForPackage(t) {
		if (typeof window > "u") return null;
		let n = window[Lr];
		if (zr === void 0) {
			let t = window[Rr];
			if (!t) return null;
			zr = {};
			for (let r in t) zr[r] = new e({ [n]: t[r] }, n);
		}
		let r = zr?.[t];
		if (!r) throw Error(`Strings for package "${t}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
		return r;
	}
};
function Vr(e, t, n = "en-US") {
	if (t[e]) return t[e];
	let r = Hr(e);
	if (t[r]) return t[r];
	for (let e in t) if (e.startsWith(r + "-")) return t[e];
	return t[n];
}
function Hr(e) {
	return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0];
}
//#endregion
//#region ../../node_modules/.pnpm/@internationalized+string@3.2.9/node_modules/@internationalized/string/dist/private/LocalizedStringFormatter.mjs
var Ur = /* @__PURE__ */ new Map(), Wr = /* @__PURE__ */ new Map(), Gr = class {
	constructor(e, t) {
		this.locale = e, this.strings = t;
	}
	format(e, t) {
		let n = this.strings.getStringForLocale(e, this.locale);
		return typeof n == "function" ? n(t, this) : n;
	}
	plural(e, t, n = "cardinal") {
		let r = t["=" + e];
		if (r) return typeof r == "function" ? r() : r;
		let i = this.locale + ":" + n, a = Ur.get(i);
		return a || (a = new Intl.PluralRules(this.locale, { type: n }), Ur.set(i, a)), r = t[a.select(e)] || t.other, typeof r == "function" ? r() : r;
	}
	number(e) {
		let t = Wr.get(this.locale);
		return t || (t = new Intl.NumberFormat(this.locale), Wr.set(this.locale, t)), t.format(e);
	}
	select(e, t) {
		let n = e[t] || e.other;
		return typeof n == "function" ? n() : n;
	}
}, Kr = /* @__PURE__ */ new WeakMap();
function qr(e) {
	let t = Kr.get(e);
	return t || (t = new Br(e), Kr.set(e, t)), t;
}
function Jr(e, t) {
	return t && Br.getGlobalDictionaryForPackage(t) || qr(e);
}
function Yr(e, t) {
	let { locale: n } = Ir(), r = Jr(e, t);
	return (0, z.useMemo)(() => new Gr(n, r), [n, r]);
}
//#endregion
//#region ../../node_modules/.pnpm/react-stately@3.48.0_react@19.2.4/node_modules/react-stately/dist/private/utils/useControlledState.mjs
var Xr = typeof document < "u" ? z.useInsertionEffect ?? z.useLayoutEffect : () => {};
function Zr(e, t, n) {
	let [r, i] = (0, z.useState)(e || t), a = (0, z.useRef)(r), o = (0, z.useRef)(e !== void 0), s = e !== void 0;
	(0, z.useEffect)(() => {
		o.current, o.current = s;
	}, [s]);
	let c = s ? e : r;
	Xr(() => {
		a.current = c;
	});
	let [, l] = (0, z.useReducer)(() => ({}), {});
	return [c, (0, z.useCallback)((e, ...t) => {
		let r = typeof e == "function" ? e(a.current) : e;
		Object.is(a.current, r) || (a.current = r, i(r), l(), n?.(r, ...t));
	}, [n])];
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/Autocomplete.mjs
var Qr = /*#__PURE__*/ (0, z.createContext)(null), $r = /*#__PURE__*/ (0, z.createContext)(null), ei = class {
	constructor(e) {
		this.value = null, this.level = 0, this.hasChildNodes = !1, this.rendered = null, this.textValue = "", this["aria-label"] = void 0, this.index = 0, this.parentKey = null, this.prevKey = null, this.nextKey = null, this.firstChildKey = null, this.lastChildKey = null, this.props = {}, this.colSpan = null, this.colIndex = null, this.type = this.constructor.type, this.key = e;
	}
	get childNodes() {
		throw Error("childNodes is not supported");
	}
	clone() {
		let e = new this.constructor(this.key);
		return e.value = this.value, e.level = this.level, e.hasChildNodes = this.hasChildNodes, e.rendered = this.rendered, e.textValue = this.textValue, e["aria-label"] = this["aria-label"], e.index = this.index, e.parentKey = this.parentKey, e.prevKey = this.prevKey, e.nextKey = this.nextKey, e.firstChildKey = this.firstChildKey, e.lastChildKey = this.lastChildKey, e.props = this.props, e.render = this.render, e.colSpan = this.colSpan, e.colIndex = this.colIndex, e;
	}
	filter(e, t, n) {
		let r = this.clone();
		return t.addDescendants(r, e), r;
	}
}, ti = class extends ei {
	filter(e, t, n) {
		let [r, i] = ai(e, t, this.firstChildKey, n), a = this.clone();
		return a.firstChildKey = r, a.lastChildKey = i, a;
	}
};
(class extends ei {
	static {
		this.type = "header";
	}
});
var ni = class extends ei {
	static {
		this.type = "loader";
	}
}, ri = class extends ti {
	static {
		this.type = "item";
	}
	filter(e, t, n) {
		if (n(this.textValue, this)) {
			let n = this.clone();
			return t.addDescendants(n, e), n;
		}
		return null;
	}
};
(class extends ti {
	static {
		this.type = "section";
	}
	filter(e, t, n) {
		let r = super.filter(e, t, n);
		if (r && r.lastChildKey !== null) {
			let t = e.getItem(r.lastChildKey);
			if (t && t.type !== "header") return r;
		}
		return null;
	}
});
var ii = class {
	get size() {
		return this.itemCount;
	}
	getKeys() {
		return this.keyMap.keys();
	}
	*[Symbol.iterator]() {
		let e = this.firstKey == null ? void 0 : this.keyMap.get(this.firstKey);
		for (; e;) yield e, e = e.nextKey == null ? void 0 : this.keyMap.get(e.nextKey);
	}
	getChildren(e) {
		let t = this.keyMap;
		return { *[Symbol.iterator]() {
			let n = t.get(e), r = n?.firstChildKey == null ? null : t.get(n.firstChildKey);
			for (; r;) yield r, r = r.nextKey == null ? void 0 : t.get(r.nextKey);
		} };
	}
	getKeyBefore(e) {
		let t = this.keyMap.get(e);
		if (!t) return null;
		if (t.prevKey != null) {
			for (t = this.keyMap.get(t.prevKey); t && t.type !== "item" && t.lastChildKey != null;) t = this.keyMap.get(t.lastChildKey);
			return t?.key ?? null;
		}
		return t.parentKey;
	}
	getKeyAfter(e) {
		let t = this.keyMap.get(e);
		if (!t) return null;
		if (t.type !== "item" && t.firstChildKey != null) return t.firstChildKey;
		for (; t;) {
			if (t.nextKey != null) return t.nextKey;
			if (t.parentKey != null) t = this.keyMap.get(t.parentKey);
			else return null;
		}
		return null;
	}
	getFirstKey() {
		return this.firstKey;
	}
	getLastKey() {
		let e = this.lastKey == null ? null : this.keyMap.get(this.lastKey);
		for (; e?.lastChildKey != null;) e = this.keyMap.get(e.lastChildKey);
		return e?.key ?? null;
	}
	getItem(e) {
		return this.keyMap.get(e) ?? null;
	}
	at() {
		throw Error("Not implemented");
	}
	clone() {
		let e = this.constructor, t = new e();
		return t.keyMap = new Map(this.keyMap), t.firstKey = this.firstKey, t.lastKey = this.lastKey, t.itemCount = this.itemCount, t;
	}
	addNode(e) {
		if (this.frozen) throw Error("Cannot add a node to a frozen collection");
		e.type === "item" && this.keyMap.get(e.key) == null && this.itemCount++, this.keyMap.set(e.key, e);
	}
	addDescendants(e, t) {
		this.addNode(e);
		let n = t.getChildren(e.key);
		for (let e of n) this.addDescendants(e, t);
	}
	removeNode(e) {
		if (this.frozen) throw Error("Cannot remove a node to a frozen collection");
		let t = this.keyMap.get(e);
		t != null && t.type === "item" && this.itemCount--, this.keyMap.delete(e);
	}
	commit(e, t, n = !1) {
		if (this.frozen) throw Error("Cannot commit a frozen collection");
		this.firstKey = e, this.lastKey = t, this.frozen = !n;
	}
	filter(e) {
		let t = new this.constructor(), [n, r] = ai(this, t, this.firstKey, e);
		return t?.commit(n, r), t;
	}
	constructor() {
		this.keyMap = /* @__PURE__ */ new Map(), this.firstKey = null, this.lastKey = null, this.frozen = !1, this.itemCount = 0;
	}
};
function ai(e, t, n, r) {
	if (n == null) return [null, null];
	let i = null, a = null, o = e.getItem(n);
	for (; o != null;) {
		let n = o.filter(e, t, r);
		n != null && (n.nextKey = null, a && (n.prevKey = a.key, a.nextKey = n.key), i ??= n, t.addNode(n), a = n), o = o.nextKey == null ? null : e.getItem(o.nextKey);
	}
	if (a && a.type === "separator") {
		let e = a.prevKey;
		t.removeNode(a.key), e == null ? a = null : (a = t.getItem(e), a.nextKey = null);
	}
	return [i?.key ?? null, a?.key ?? null];
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/collections/Document.mjs
var oi = class {
	constructor(e) {
		this._firstChild = null, this._lastChild = null, this._previousSibling = null, this._nextSibling = null, this._parentNode = null, this._minInvalidChildIndex = null, this.ownerDocument = e;
	}
	*[Symbol.iterator]() {
		let e = this.firstChild;
		for (; e;) yield e, e = e.nextSibling;
	}
	get firstChild() {
		return this._firstChild;
	}
	set firstChild(e) {
		this._firstChild = e, this.ownerDocument.markDirty(this);
	}
	get lastChild() {
		return this._lastChild;
	}
	set lastChild(e) {
		this._lastChild = e, this.ownerDocument.markDirty(this);
	}
	get previousSibling() {
		return this._previousSibling;
	}
	set previousSibling(e) {
		this._previousSibling = e, this.ownerDocument.markDirty(this);
	}
	get nextSibling() {
		return this._nextSibling;
	}
	set nextSibling(e) {
		this._nextSibling = e, this.ownerDocument.markDirty(this);
	}
	get parentNode() {
		return this._parentNode;
	}
	set parentNode(e) {
		this._parentNode = e, this.ownerDocument.markDirty(this);
	}
	get isConnected() {
		return this.parentNode?.isConnected || !1;
	}
	invalidateChildIndices(e) {
		(this._minInvalidChildIndex == null || !this._minInvalidChildIndex.isConnected || e.index < this._minInvalidChildIndex.index) && (this._minInvalidChildIndex = e, this.ownerDocument.markDirty(this));
	}
	updateChildIndices() {
		let e = this._minInvalidChildIndex;
		for (; e;) e.index = e.previousSibling ? e.previousSibling.index + 1 : 0, e = e.nextSibling;
		this._minInvalidChildIndex = null;
	}
	appendChild(e) {
		e.parentNode && e.parentNode.removeChild(e), this.firstChild ??= e, this.lastChild ? (this.lastChild.nextSibling = e, e.index = this.lastChild.index + 1, e.previousSibling = this.lastChild) : (e.previousSibling = null, e.index = 0), e.parentNode = this, e.nextSibling = null, this.lastChild = e, this.ownerDocument.markDirty(this), this.isConnected && this.ownerDocument.queueUpdate();
	}
	insertBefore(e, t) {
		if (t == null) return this.appendChild(e);
		e.parentNode && e.parentNode.removeChild(e), e.nextSibling = t, e.previousSibling = t.previousSibling, e.index = t.index - 1, this.firstChild === t ? this.firstChild = e : t.previousSibling && (t.previousSibling.nextSibling = e), t.previousSibling = e, e.parentNode = t.parentNode, this.invalidateChildIndices(e), this.isConnected && this.ownerDocument.queueUpdate();
	}
	removeChild(e) {
		e.parentNode === this && (this._minInvalidChildIndex === e && (this._minInvalidChildIndex = null), e.nextSibling && (this.invalidateChildIndices(e.nextSibling), e.nextSibling.previousSibling = e.previousSibling), e.previousSibling && (e.previousSibling.nextSibling = e.nextSibling), this.firstChild === e && (this.firstChild = e.nextSibling), this.lastChild === e && (this.lastChild = e.previousSibling), e.parentNode = null, e.nextSibling = null, e.previousSibling = null, e.index = 0, this.ownerDocument.markDirty(e), this.isConnected && this.ownerDocument.queueUpdate());
	}
	addEventListener() {}
	removeEventListener() {}
	get previousVisibleSibling() {
		let e = this.previousSibling;
		for (; e && e.isHidden;) e = e.previousSibling;
		return e;
	}
	get nextVisibleSibling() {
		let e = this.nextSibling;
		for (; e && e.isHidden;) e = e.nextSibling;
		return e;
	}
	get firstVisibleChild() {
		let e = this.firstChild;
		for (; e && e.isHidden;) e = e.nextSibling;
		return e;
	}
	get lastVisibleChild() {
		let e = this.lastChild;
		for (; e && e.isHidden;) e = e.previousSibling;
		return e;
	}
}, si = class e extends oi {
	constructor(e, t) {
		super(t), this.nodeType = 8, this.isMutated = !0, this._index = 0, this.isHidden = !1, this.node = null;
	}
	get index() {
		return this._index;
	}
	set index(e) {
		this._index = e, this.ownerDocument.markDirty(this);
	}
	get level() {
		return this.parentNode instanceof e ? this.parentNode.level + +(this.parentNode.node?.type === "item") : 0;
	}
	getMutableNode() {
		return this.node == null ? null : (this.isMutated ||= (this.node = this.node.clone(), !0), this.ownerDocument.markDirty(this), this.node);
	}
	updateNode() {
		let t = this.nextVisibleSibling, n = this.getMutableNode();
		if (n != null && (n.index = this.index, n.level = this.level, n.parentKey = this.parentNode instanceof e ? this.parentNode.node?.key ?? null : null, n.prevKey = this.previousVisibleSibling?.node?.key ?? null, n.nextKey = t?.node?.key ?? null, n.hasChildNodes = !!this.firstChild, n.firstChildKey = this.firstVisibleChild?.node?.key ?? null, n.lastChildKey = this.lastVisibleChild?.node?.key ?? null, (n.colSpan != null || n.colIndex != null) && t)) {
			let e = (n.colIndex ?? n.index) + (n.colSpan ?? 1);
			if (t.node != null && e !== t.node.colIndex) {
				let n = t.getMutableNode();
				n.colIndex = e;
			}
		}
	}
	setProps(e, t, n, r, i) {
		let a, { value: o, textValue: s, id: c, ...l } = e;
		if (this.node == null ? (a = new n(c ?? `react-aria-${++this.ownerDocument.nodeId}`), this.node = a) : a = this.getMutableNode(), l.ref = t, a.props = l, a.rendered = r, a.render = i, a.value = o, e["aria-label"] && (a["aria-label"] = e["aria-label"]), a.textValue = s || (typeof l.children == "string" ? l.children : "") || e["aria-label"] || "", c != null && c !== a.key) throw Error("Cannot change the id of an item");
		l.colSpan != null && (a.colSpan = l.colSpan), this.isConnected && this.ownerDocument.queueUpdate();
	}
	get style() {
		let e = this;
		return {
			get display() {
				return e.isHidden ? "none" : "";
			},
			set display(t) {
				let n = t === "none";
				if (e.isHidden !== n) {
					(e.parentNode?.firstVisibleChild === e || e.parentNode?.lastVisibleChild === e) && e.ownerDocument.markDirty(e.parentNode);
					let t = e.previousVisibleSibling, r = e.nextVisibleSibling;
					t && e.ownerDocument.markDirty(t), r && e.ownerDocument.markDirty(r), e.isHidden = n, e.ownerDocument.markDirty(e);
				}
			}
		};
	}
	hasAttribute() {}
	setAttribute() {}
	setAttributeNS() {}
	removeAttribute() {}
}, ci = class extends oi {
	constructor(e) {
		super(null), this.nodeType = 11, this.ownerDocument = this, this.dirtyNodes = /* @__PURE__ */ new Set(), this.isSSR = !1, this.nodeId = 0, this.nodesByProps = /* @__PURE__ */ new WeakMap(), this.nextCollection = null, this.subscriptions = /* @__PURE__ */ new Set(), this.queuedRender = !1, this.inSubscription = !1, this.collection = e, this.nextCollection = e;
	}
	get isConnected() {
		return !0;
	}
	createElement(e) {
		return new si(e, this);
	}
	getMutableCollection() {
		return this.nextCollection ||= this.collection.clone(), this.nextCollection;
	}
	markDirty(e) {
		this.dirtyNodes.add(e);
	}
	addNode(e) {
		if (e.isHidden || e.node == null) return;
		let t = this.getMutableCollection();
		if (!t.getItem(e.node.key)) for (let t of e) this.addNode(t);
		t.addNode(e.node);
	}
	removeNode(e) {
		for (let t of e) this.removeNode(t);
		e.node && this.getMutableCollection().removeNode(e.node.key);
	}
	getCollection() {
		return this.inSubscription ? this.collection : (this.queuedRender = !1, this.updateCollection(), this.collection);
	}
	updateCollection() {
		for (let e of this.dirtyNodes) e instanceof si && (!e.isConnected || e.isHidden) ? this.removeNode(e) : e.updateChildIndices();
		for (let e of this.dirtyNodes) e instanceof si ? (e.isConnected && !e.isHidden && (e.updateNode(), this.addNode(e)), e.node && this.dirtyNodes.delete(e), e.isMutated = !1) : this.dirtyNodes.delete(e);
		this.nextCollection && (this.nextCollection.commit(this.firstVisibleChild?.node?.key ?? null, this.lastVisibleChild?.node?.key ?? null, this.isSSR), this.isSSR || (this.collection = this.nextCollection, this.nextCollection = null));
	}
	queueUpdate() {
		if (!(this.dirtyNodes.size === 0 || this.queuedRender)) {
			this.queuedRender = !0, this.inSubscription = !0, this.isSSR || (this.collection = this.collection.clone());
			for (let e of this.subscriptions) e();
			this.inSubscription = !1;
		}
	}
	subscribe(e) {
		return this.subscriptions.add(e), () => this.subscriptions.delete(e);
	}
	resetAfterSSR() {
		this.isSSR && (this.isSSR = !1, this.firstChild = null, this.lastChild = null, this.nodeId = 0);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/collections/useCachedChildren.mjs
function li(e) {
	let { children: t, items: n, idScope: r, addIdAndValue: i, dependencies: a = [] } = e, o = (0, z.useMemo)(() => void 0, [t]), s = (0, z.useMemo)(() => /* @__PURE__ */ new WeakMap(), [...a, o]);
	return (0, z.useMemo)(() => {
		if (n && typeof t == "function") {
			let e = [];
			for (let a of n) {
				let n = ui(a) ? a : null, o = n ? s.get(n) : null;
				if (!o) {
					o = t(a);
					let c = o.props.id ?? a?.key ?? a?.id;
					r != null && o.props.id == null && c != null && (c = r + ":" + c);
					let l = c ?? e.length;
					o = (0, z.cloneElement)(o, i ? {
						key: l,
						id: c,
						value: a
					} : { key: l }), n && s.set(n, o);
				}
				e.push(o);
			}
			return e;
		} else if (typeof t != "function") return t;
	}, [
		t,
		n,
		s,
		r,
		i
	]);
}
function ui(e) {
	switch (typeof e) {
		case "object": return e != null;
		case "function":
		case "symbol": return !0;
		default: return !1;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/runAfterTransition.mjs
var di = /* @__PURE__ */ new Map(), fi = /* @__PURE__ */ new Set();
function pi() {
	if (typeof window > "u") return;
	function e(e) {
		return "propertyName" in e;
	}
	let t = (t) => {
		let r = G(t);
		if (!e(t) || !r) return;
		let i = di.get(r);
		i || (i = /* @__PURE__ */ new Set(), di.set(r, i), r.addEventListener("transitioncancel", n, { once: !0 })), i.add(t.propertyName);
	}, n = (t) => {
		let r = G(t);
		if (!e(t) || !r) return;
		let i = di.get(r);
		if (i && (i.delete(t.propertyName), i.size === 0 && (r.removeEventListener("transitioncancel", n), di.delete(r)), di.size === 0)) {
			for (let e of fi) e();
			fi.clear();
		}
	};
	document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", n);
}
typeof document < "u" && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", pi) : pi());
function mi() {
	for (let [e] of di) "isConnected" in e && !e.isConnected && di.delete(e);
}
function hi(e) {
	requestAnimationFrame(() => {
		mi(), di.size === 0 ? e() : fi.add(e);
	});
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/interactions/focusSafely.mjs
function gi(e) {
	if (!e.isConnected) return;
	let t = H(e);
	if (mr() === "virtual") {
		let n = W(t);
		hi(() => {
			let r = W(t);
			(r === n || r === t.body) && e.isConnected && ln(e);
		});
	} else ln(e);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/interactions/useFocus.mjs
function _i(e) {
	let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: i } = e, a = (0, z.useCallback)((e) => {
		if (G(e) === e.currentTarget) return r && r(e), i && i(!1), !0;
	}, [r, i]), o = En(a), s = (0, z.useCallback)((e) => {
		let t = G(e), r = H(t), a = r ? W(r) : W();
		t === e.currentTarget && t === a && (n && n(e), i && i(!0), o(e));
	}, [
		i,
		n,
		o
	]);
	return { focusProps: {
		onFocus: !t && (n || i || r) ? s : void 0,
		onBlur: !t && (r || i) ? a : void 0
	} };
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/interactions/createEventHandler.mjs
function vi(e) {
	if (!e) return;
	let t = !0;
	return (n) => {
		e({
			...n,
			preventDefault() {
				n.preventDefault();
			},
			isDefaultPrevented() {
				return n.isDefaultPrevented();
			},
			stopPropagation() {
				t = !0;
			},
			continuePropagation() {
				t = !1, typeof n.continuePropagation == "function" && n.continuePropagation();
			},
			isPropagationStopped() {
				return t;
			}
		}), t && n.stopPropagation();
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/interactions/useKeyboard.mjs
function yi(e) {
	return { keyboardProps: e.isDisabled ? {} : {
		onKeyDown: vi(e.onKeyDown),
		onKeyUp: vi(e.onKeyUp)
	} };
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/useSyncRef.mjs
function bi(e, t) {
	B(() => {
		if (e && e.ref && t) return e.ref.current = t.current, () => {
			e.ref && (e.ref.current = null);
		};
	});
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/interactions/useFocusable.mjs
var xi = /*#__PURE__*/ z.createContext(null);
function Si(e) {
	let t = (0, z.useContext)(xi) || {};
	bi(t, e);
	let { ref: n, ...r } = t;
	return r;
}
function Ci(e, t) {
	let { focusProps: n } = _i(e), { keyboardProps: r } = yi(e), i = V(n, r), a = Si(t), o = e.isDisabled ? {} : a, s = (0, z.useRef)(e.autoFocus);
	(0, z.useEffect)(() => {
		s.current && t.current && gi(t.current), s.current = !1;
	}, [t]);
	let c = e.excludeFromTabOrder ? -1 : 0;
	return e.isDisabled && (c = void 0), { focusableProps: V({
		...i,
		tabIndex: c
	}, o) };
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/collections/Hidden.mjs
typeof HTMLTemplateElement < "u" && (Object.defineProperty(HTMLTemplateElement.prototype, "firstChild", {
	configurable: !0,
	enumerable: !0,
	get: function() {
		return this.content.firstChild;
	}
}), Object.defineProperty(HTMLTemplateElement.prototype, "appendChild", {
	configurable: !0,
	enumerable: !0,
	value: function(e) {
		return this.content.appendChild(e);
	}
}), Object.defineProperty(HTMLTemplateElement.prototype, "removeChild", {
	configurable: !0,
	enumerable: !0,
	value: function(e) {
		return this.content.removeChild(e);
	}
}), Object.defineProperty(HTMLTemplateElement.prototype, "insertBefore", {
	configurable: !0,
	enumerable: !0,
	value: function(e, t) {
		return this.content.insertBefore(e, t);
	}
}));
var wi = /*#__PURE__*/ (0, z.createContext)(!1);
function Ti(e) {
	if ((0, z.useContext)(wi)) return /*#__PURE__*/ z.createElement(z.Fragment, null, e.children);
	let t = /*#__PURE__*/ z.createElement(wi.Provider, { value: !0 }, e.children);
	return /*#__PURE__*/ z.createElement("template", null, t);
}
function Ei(e) {
	let t = (t, n) => (0, z.useContext)(wi) ? null : e(t, n);
	return t.displayName = e.displayName || e.name, (0, z.forwardRef)(t);
}
function Di() {
	return (0, z.useContext)(wi);
}
//#endregion
//#region ../../node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.4/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js
var K = /* @__PURE__ */ n(((e) => {
	var n = t();
	function r(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var i = typeof Object.is == "function" ? Object.is : r, a = n.useState, o = n.useEffect, s = n.useLayoutEffect, c = n.useDebugValue;
	function l(e, t) {
		var n = t(), r = a({ inst: {
			value: n,
			getSnapshot: t
		} }), i = r[0].inst, l = r[1];
		return s(function() {
			i.value = n, i.getSnapshot = t, u(i) && l({ inst: i });
		}, [
			e,
			n,
			t
		]), o(function() {
			return u(i) && l({ inst: i }), e(function() {
				u(i) && l({ inst: i });
			});
		}, [e]), c(n), n;
	}
	function u(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !i(e, n);
		} catch {
			return !0;
		}
	}
	function d(e, t) {
		return t();
	}
	var f = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? d : l;
	e.useSyncExternalStore = n.useSyncExternalStore === void 0 ? f : n.useSyncExternalStore;
})), Oi = /* @__PURE__ */ n(((e, t) => {
	t.exports = K();
})), ki = /* @__PURE__ */ e(s(), 1), Ai = Oi(), ji = /*#__PURE__*/ (0, z.createContext)(!1), Mi = /*#__PURE__*/ (0, z.createContext)(null);
function Ni(e) {
	if ((0, z.useContext)(Mi)) return e.content;
	let { collection: t, document: n } = Li(e.createCollection);
	return /*#__PURE__*/ z.createElement(z.Fragment, null, /*#__PURE__*/ z.createElement(Ti, null, /*#__PURE__*/ z.createElement(Mi.Provider, { value: n }, e.content)), /*#__PURE__*/ z.createElement(Pi, {
		render: e.children,
		collection: t
	}));
}
function Pi({ collection: e, render: t }) {
	return t(e);
}
function Fi(e, t, n) {
	let r = kt(), i = (0, z.useRef)(r);
	return i.current = r, (0, Ai.useSyncExternalStore)(e, (0, z.useCallback)(() => i.current ? n() : t(), [t, n]));
}
var Ii = typeof z.useSyncExternalStore == "function" ? z.useSyncExternalStore : Fi;
function Li(e) {
	let [t] = (0, z.useState)(() => new ci(e?.() || new ii()));
	return {
		collection: Ii((0, z.useCallback)((e) => t.subscribe(e), [t]), (0, z.useCallback)(() => {
			let e = t.getCollection();
			return t.isSSR && t.resetAfterSSR(), e;
		}, [t]), (0, z.useCallback)(() => (t.isSSR = !0, t.getCollection()), [t])),
		document: t
	};
}
var Ri = /*#__PURE__*/ (0, z.createContext)(null);
function zi(e) {
	return class extends ei {
		static {
			this.type = e;
		}
	};
}
function Bi(e, t, n, r, i, a) {
	typeof e == "string" && (e = zi(e));
	let o = (0, z.useCallback)((i) => {
		i?.setProps(t, n, e, r, a);
	}, [
		t,
		n,
		r,
		a,
		e
	]), s = (0, z.useContext)(Ri);
	if (s) {
		let o = s.ownerDocument.nodesByProps.get(t);
		return o || (o = s.ownerDocument.createElement(e.type), o.setProps(t, n, e, r, a), s.appendChild(o), s.ownerDocument.updateCollection(), s.ownerDocument.nodesByProps.set(t, o)), i ? /*#__PURE__*/ z.createElement(Ri.Provider, { value: o }, i) : null;
	}
	return /*#__PURE__*/ z.createElement(e.type, { ref: o }, i);
}
function Vi(e, t) {
	let n = ({ node: e }) => t(e.props, e.props.ref, e), r = (0, z.forwardRef)((r, i) => {
		let a = (0, z.useContext)(xi);
		if (!(0, z.useContext)(ji)) {
			if (t.length >= 3) throw Error(t.name + " cannot be rendered outside a collection.");
			return t(r, i);
		}
		return Bi(e, r, i, "children" in r ? r.children : null, null, (e) => /*#__PURE__*/ z.createElement(xi.Provider, { value: a }, /*#__PURE__*/ z.createElement(n, { node: e })));
	});
	return r.displayName = t.name, r;
}
function Hi(e) {
	return li({
		...e,
		addIdAndValue: !0
	});
}
var Ui = /*#__PURE__*/ (0, z.createContext)(null);
function Wi(e) {
	let t = (0, z.useContext)(Ui), n = (t?.dependencies || []).concat(e.dependencies), r = e.idScope ?? t?.idScope, i = Hi({
		...e,
		idScope: r,
		dependencies: n
	});
	return (0, z.useContext)(Mi) && (i = /*#__PURE__*/ z.createElement(Gi, null, i)), t = (0, z.useMemo)(() => ({
		dependencies: n,
		idScope: r
	}), [r, ...n]), /*#__PURE__*/ z.createElement(Ui.Provider, { value: t }, i);
}
function Gi({ children: e }) {
	let t = (0, z.useContext)(Mi), n = (0, z.useMemo)(() => /*#__PURE__*/ z.createElement(Mi.Provider, { value: null }, /*#__PURE__*/ z.createElement(ji.Provider, { value: !0 }, e)), [e]);
	return kt() ? /*#__PURE__*/ z.createElement(Ri.Provider, { value: t }, n) : /*#__PURE__*/ (0, ki.createPortal)(n, t);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/Collection.mjs
var Ki = /*#__PURE__*/ (0, z.createContext)(null), qi = {
	CollectionRoot({ collection: e, renderDropIndicator: t }) {
		return Ji(e, null, t);
	},
	CollectionBranch({ collection: e, parent: t, renderDropIndicator: n }) {
		return Ji(e, t, n);
	}
};
function Ji(e, t, n) {
	return li({
		items: t ? e.getChildren(t.key) : e,
		dependencies: [n],
		children(t) {
			if (t.type === "content") return /*#__PURE__*/ z.createElement(z.Fragment, null);
			let r = t.render(t);
			return !n || t.type !== "item" ? r : /*#__PURE__*/ z.createElement(z.Fragment, null, n({
				type: "item",
				key: t.key,
				dropPosition: "before"
			}), r, Yi(e, t, n));
		}
	});
}
function Yi(e, t, n) {
	let r = t.key, i = e.getKeyAfter(r), a = i == null ? null : e.getItem(i);
	for (; a != null && a.type !== "item";) i = e.getKeyAfter(a.key), a = i == null ? null : e.getItem(i);
	let o = t.nextKey == null ? null : e.getItem(t.nextKey);
	for (; o != null && o.type !== "item";) o = o.nextKey == null ? null : e.getItem(o.nextKey);
	let s = [];
	if (o == null) {
		let r = t;
		for (; r?.type === "item" && (!a || r.parentKey !== a.parentKey && a.level < r.level);) {
			let t = n({
				type: "item",
				key: r.key,
				dropPosition: "after"
			});
			/*#__PURE__*/ (0, z.isValidElement)(t) && s.push(/*#__PURE__*/ (0, z.cloneElement)(t, { key: `${r.key}-after` })), r = r.parentKey == null ? null : e.getItem(r.parentKey);
		}
	}
	return s;
}
var Xi = /*#__PURE__*/ (0, z.createContext)(qi);
function Zi(e) {
	return (0, z.useMemo)(() => e == null ? null : /* @__PURE__ */ new Set([e]), [e]);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/filterDOMProps.mjs
var Qi = /* @__PURE__ */ new Set(["id"]), $i = /* @__PURE__ */ new Set([
	"aria-label",
	"aria-labelledby",
	"aria-describedby",
	"aria-details"
]), ea = /* @__PURE__ */ new Set([
	"href",
	"hrefLang",
	"target",
	"rel",
	"download",
	"ping",
	"referrerPolicy"
]), ta = /* @__PURE__ */ new Set([
	"dir",
	"lang",
	"hidden",
	"inert",
	"translate"
]), na = /* @__PURE__ */ new Set(/* @__PURE__ */ "onClick.onAuxClick.onContextMenu.onDoubleClick.onMouseDown.onMouseEnter.onMouseLeave.onMouseMove.onMouseOut.onMouseOver.onMouseUp.onTouchCancel.onTouchEnd.onTouchMove.onTouchStart.onPointerDown.onPointerMove.onPointerUp.onPointerCancel.onPointerEnter.onPointerLeave.onPointerOver.onPointerOut.onGotPointerCapture.onLostPointerCapture.onScroll.onWheel.onAnimationStart.onAnimationEnd.onAnimationIteration.onTransitionCancel.onTransitionEnd.onTransitionRun.onTransitionStart".split(".")), ra = /^(data-.*)$/;
function ia(e, t = {}) {
	let { labelable: n, isLink: r, global: i, events: a = i, propNames: o } = t, s = {};
	for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (Qi.has(t) || n && $i.has(t) || r && ea.has(t) || i && ta.has(t) || a && (na.has(t) || t.endsWith("Capture") && na.has(t.slice(0, -7))) || o?.has(t) || ra.test(t)) && (s[t] = e[t]);
	return s;
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/interactions/textSelection.mjs
var aa = "default", oa = "", sa = /* @__PURE__ */ new WeakMap();
function ca(e) {
	if (Fn()) {
		if (aa === "default") {
			let t = H(e);
			oa = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
		}
		aa = "disabled";
	} else if (e instanceof HTMLElement || e instanceof SVGElement) {
		let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
		sa.set(e, e.style[t]), e.style[t] = "none";
	}
}
function la(e) {
	if (Fn()) {
		if (aa !== "disabled") return;
		aa = "restoring", setTimeout(() => {
			hi(() => {
				if (aa === "restoring") {
					let t = H(e);
					t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = oa || ""), oa = "", aa = "default";
				}
			});
		}, 300);
	} else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && sa.has(e)) {
		let t = sa.get(e), n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
		e.style[n] === "none" && (e.style[n] = t), e.getAttribute("style") === "" && e.removeAttribute("style"), sa.delete(e);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/getNonce.mjs
function ua(e) {
	return e?.defaultView?.__webpack_nonce__ || globalThis.__webpack_nonce__ || void 0;
}
var da = /* @__PURE__ */ new WeakMap();
function fa(e) {
	let t = e ?? (typeof document < "u" ? document : void 0);
	if (!t) return ua(t);
	if (da.has(t)) return da.get(t);
	let n = t.querySelector("meta[property=\"csp-nonce\"]"), r = n && n instanceof Qt(n).HTMLMetaElement && (n.nonce || n.content) || ua(t) || void 0;
	return r !== void 0 && da.set(t, r), r;
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/interactions/context.mjs
var pa = z.createContext({ register: () => {} });
pa.displayName = "PressResponderContext";
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/useGlobalListeners.mjs
function ma() {
	let e = (0, z.useRef)(/* @__PURE__ */ new Map()), t = (0, z.useCallback)((t, n, r, i) => {
		let a = i?.once ? (...t) => {
			e.current.delete(r), r(...t);
		} : r;
		e.current.set(r, {
			type: n,
			eventTarget: t,
			fn: a,
			options: i
		}), t.addEventListener(n, a, i);
	}, []), n = (0, z.useCallback)((t, n, r, i) => {
		let a = e.current.get(r)?.fn || r;
		t.removeEventListener(n, a, i), e.current.delete(r);
	}, []), r = (0, z.useCallback)(() => {
		e.current.forEach((e, t) => {
			n(e.eventTarget, e.type, t, e.options);
		});
	}, [n]);
	return (0, z.useEffect)(() => r, [r]), {
		addGlobalListener: t,
		removeGlobalListener: n,
		removeAllGlobalListeners: r
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/interactions/usePress.mjs
function ha(e) {
	let t = (0, z.useContext)(pa);
	if (t) {
		let { register: n, ref: r, ...i } = t;
		e = V(i, e), n();
	}
	return bi(t, e.ref), e;
}
var ga = class {
	#e;
	constructor(e, t, n, r) {
		this.#e = !0;
		let i = (r?.target ?? n.currentTarget)?.getBoundingClientRect(), a, o = 0, s, c = null;
		n.clientX != null && n.clientY != null && (s = n.clientX, c = n.clientY), i && (s != null && c != null ? (a = s - i.left, o = c - i.top) : (a = i.width / 2, o = i.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = a, this.y = o, this.key = n.key;
	}
	continuePropagation() {
		this.#e = !1;
	}
	get shouldStopPropagation() {
		return this.#e;
	}
}, _a = Symbol("linkClicked"), va = "react-aria-pressable-style", ya = "data-react-aria-pressable";
function ba(e) {
	let { onPress: t, onPressChange: n, onPressStart: r, onPressEnd: i, onPressUp: a, onClick: o, isDisabled: s, isPressed: c, preventFocusOnPress: l, shouldCancelOnPointerExit: u, allowTextSelectionOnPress: d, ref: f, ...p } = ha(e), [m, h] = (0, z.useState)(!1), g = (0, z.useRef)({
		isPressed: !1,
		ignoreEmulatedMouseEvents: !1,
		didFirePressStart: !1,
		isTriggeringEvent: !1,
		activePointerId: null,
		target: null,
		isOverTarget: !1,
		pointerType: null,
		disposables: []
	}), { addGlobalListener: _, removeAllGlobalListeners: v } = ma(), y = (0, z.useCallback)((e, t) => {
		let i = g.current;
		if (s || i.didFirePressStart) return !1;
		let a = !0;
		if (i.isTriggeringEvent = !0, r) {
			let n = new ga("pressstart", t, e);
			r(n), a = n.shouldStopPropagation;
		}
		return n && n(!0), i.isTriggeringEvent = !1, i.didFirePressStart = !0, h(!0), a;
	}, [
		s,
		r,
		n
	]), b = (0, z.useCallback)((e, r, a = !0) => {
		let o = g.current;
		if (!o.didFirePressStart) return !1;
		o.didFirePressStart = !1, o.isTriggeringEvent = !0;
		let c = !0;
		if (i) {
			let t = new ga("pressend", r, e);
			i(t), c = t.shouldStopPropagation;
		}
		if (n && n(!1), h(!1), t && a && !s) {
			let n = new ga("press", r, e);
			t(n), c &&= n.shouldStopPropagation;
		}
		return o.isTriggeringEvent = !1, c;
	}, [
		s,
		i,
		n,
		t
	]), x = Cr(b), S = Cr((0, z.useCallback)((e, t) => {
		let n = g.current;
		if (s) return !1;
		if (a) {
			n.isTriggeringEvent = !0;
			let r = new ga("pressup", t, e);
			return a(r), n.isTriggeringEvent = !1, r.shouldStopPropagation;
		}
		return !0;
	}, [s, a])), C = (0, z.useCallback)((e) => {
		let t = g.current;
		if (t.isPressed && t.target) {
			t.didFirePressStart && t.pointerType != null && b(Ca(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, v(), d || la(t.target);
			for (let e of t.disposables) e();
			t.disposables = [];
		}
	}, [
		d,
		v,
		b
	]), w = Cr(C);
	(0, z.useEffect)(() => {
		s && g.current.isPressed && w({
			currentTarget: g.current.target,
			shiftKey: !1,
			ctrlKey: !1,
			metaKey: !1,
			altKey: !1
		});
	}, [s]);
	let T = (0, z.useCallback)((e) => {
		u && C(e);
	}, [u, C]), ee = (0, z.useCallback)((e) => {
		s || o?.(e);
	}, [s, o]), E = (0, z.useCallback)((e, t) => {
		if (!s && o) {
			let n = new MouseEvent("click", e);
			Tn(n, t), o(wn(n));
		}
	}, [s, o]), D = (0, z.useMemo)(() => {
		let e = g.current, t = {
			onKeyDown(t) {
				if (Sa(t.nativeEvent, t.currentTarget) && U(t.currentTarget, G(t))) {
					Ta(G(t), t.key) && t.preventDefault();
					let r = !0;
					!e.isPressed && !t.repeat && (e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", r = y(t, "keyboard"));
					let i = t.currentTarget;
					_(H(t.currentTarget), "keyup", _t((t) => {
						Sa(t, i) && !t.repeat && U(i, G(t)) && e.target && S(Ca(e.target, t), "keyboard");
					}, n), !0), r && t.stopPropagation(), t.metaKey && Mn() && e.metaKeyEvents?.set(t.key, t.nativeEvent);
				} else t.key === "Meta" && (e.metaKeyEvents = /* @__PURE__ */ new Map());
			},
			onClick(t) {
				if (!(t && !U(t.currentTarget, G(t))) && t && t.button === 0 && !e.isTriggeringEvent && !Kn.isOpening) {
					let n = !0;
					if (s && t.preventDefault(), !e.ignoreEmulatedMouseEvents && !e.isPressed && (e.pointerType === "virtual" || Vn(t.nativeEvent))) {
						let e = y(t, "virtual"), r = S(t, "virtual"), i = x(t, "virtual");
						ee(t), n = e && r && i;
					} else if (e.isPressed && e.pointerType !== "keyboard") {
						let r = e.pointerType || t.nativeEvent.pointerType || "virtual", i = S(Ca(t.currentTarget, t), r), a = x(Ca(t.currentTarget, t), r, !0);
						n = i && a, e.isOverTarget = !1, ee(t), w(t);
					}
					e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation();
				}
			}
		}, n = (t) => {
			if (e.isPressed && e.target && Sa(t, e.target)) {
				Ta(G(t), t.key) && t.preventDefault();
				let n = G(t), r = U(e.target, n);
				x(Ca(e.target, t), "keyboard", r), r && E(t, e.target), v(), t.key !== "Enter" && xa(e.target) && U(e.target, n) && !t[_a] && (t[_a] = !0, Kn(e.target, t, !1)), e.isPressed = !1, e.metaKeyEvents?.delete(t.key);
			} else if (t.key === "Meta" && e.metaKeyEvents?.size) {
				let t = e.metaKeyEvents;
				e.metaKeyEvents = void 0;
				for (let n of t.values()) e.target?.dispatchEvent(new KeyboardEvent("keyup", n));
			}
		};
		if (typeof PointerEvent < "u") {
			t.onPointerDown = (t) => {
				if (t.button !== 0 || !U(t.currentTarget, G(t))) return;
				if (Hn(t.nativeEvent)) {
					e.pointerType = "virtual";
					return;
				}
				e.pointerType = t.pointerType;
				let i = !0;
				if (!e.isPressed) {
					e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, d || ca(e.target), i = y(t, e.pointerType);
					let a = G(t);
					"releasePointerCapture" in a && ("hasPointerCapture" in a ? a.hasPointerCapture(t.pointerId) && a.releasePointerCapture(t.pointerId) : a.releasePointerCapture(t.pointerId)), _(H(t.currentTarget), "pointerup", n, !1), _(H(t.currentTarget), "pointercancel", r, !1);
				}
				i && t.stopPropagation();
			}, t.onMouseDown = (t) => {
				if (U(t.currentTarget, G(t)) && t.button === 0) {
					if (l) {
						let n = On(t.target);
						n && e.disposables.push(n);
					}
					t.stopPropagation();
				}
			}, t.onPointerUp = (t) => {
				!U(t.currentTarget, G(t)) || e.pointerType === "virtual" || t.button === 0 && !e.isPressed && S(t, e.pointerType || t.pointerType);
			}, t.onPointerEnter = (t) => {
				t.pointerId === e.activePointerId && e.target && !e.isOverTarget && e.pointerType != null && (e.isOverTarget = !0, y(Ca(e.target, t), e.pointerType));
			}, t.onPointerLeave = (t) => {
				t.pointerId === e.activePointerId && e.target && e.isOverTarget && e.pointerType != null && (e.isOverTarget = !1, x(Ca(e.target, t), e.pointerType, !1), T(t));
			};
			let n = (t) => {
				if (t.pointerId === e.activePointerId && e.isPressed && t.button === 0 && e.target) {
					if (U(e.target, G(t)) && e.pointerType != null) {
						let n = !1, r = setTimeout(() => {
							e.isPressed && e.target instanceof HTMLElement && (n ? w(t) : (ln(e.target), e.target.click()));
						}, 80);
						_(t.currentTarget, "click", () => n = !0, !0), e.disposables.push(() => clearTimeout(r));
					} else w(t);
					e.isOverTarget = !1;
				}
			}, r = (e) => {
				w(e);
			};
			t.onDragStart = (e) => {
				U(e.currentTarget, G(e)) && w(e);
			};
		}
		return t;
	}, [
		_,
		s,
		l,
		v,
		d,
		T,
		y,
		ee,
		E
	]);
	return (0, z.useEffect)(() => {
		if (!f) return;
		let e = H(f.current);
		if (!e || !e.head || e.getElementById(va)) return;
		let t = e.createElement("style");
		t.id = va;
		let n = fa(e);
		n && (t.nonce = n), t.textContent = `
@layer {
  [${ya}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), e.head.prepend(t);
	}, [f]), (0, z.useEffect)(() => {
		let e = g.current;
		return () => {
			d || la(e.target ?? void 0);
			for (let t of e.disposables) t();
			e.disposables = [];
		};
	}, [d]), {
		isPressed: c || m,
		pressProps: V(p, D, { [ya]: !0 })
	};
}
function xa(e) {
	return e.tagName === "A" && e.hasAttribute("href");
}
function Sa(e, t) {
	let { key: n, code: r } = e, i = t, a = i.getAttribute("role");
	return (n === "Enter" || n === " " || n === "Spacebar" || r === "Space") && !(i instanceof Qt(i).HTMLInputElement && !Da(i, n) || i instanceof Qt(i).HTMLTextAreaElement || i.isContentEditable) && !((a === "link" || !a && xa(i)) && n !== "Enter");
}
function Ca(e, t) {
	let n = t.clientX, r = t.clientY;
	return {
		currentTarget: e,
		shiftKey: t.shiftKey,
		ctrlKey: t.ctrlKey,
		metaKey: t.metaKey,
		altKey: t.altKey,
		clientX: n,
		clientY: r,
		key: t.key
	};
}
function wa(e) {
	return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !xa(e);
}
function Ta(e, t) {
	return e instanceof HTMLInputElement ? !Da(e, t) : wa(e);
}
var Ea = /* @__PURE__ */ new Set([
	"checkbox",
	"radio",
	"range",
	"color",
	"file",
	"image",
	"button",
	"submit",
	"reset"
]);
function Da(e, t) {
	return e.type === "checkbox" || e.type === "radio" ? t === " " : Ea.has(e.type);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/link/useLink.mjs
function Oa(e, t) {
	let { elementType: n = "a", onPress: r, onPressStart: i, onPressEnd: a, onClick: o, isDisabled: s, ...c } = e, l = {};
	n !== "a" && (l = {
		role: "link",
		tabIndex: s ? void 0 : 0
	});
	let { focusableProps: u } = Ci(e, t), { pressProps: d, isPressed: f } = ba({
		onPress: r,
		onPressStart: i,
		onPressEnd: a,
		onClick: o,
		isDisabled: s,
		ref: t
	}), p = ia(c, { labelable: !0 }), m = V(u, d), h = Wn();
	return {
		isPressed: f,
		linkProps: V(p, Yn(e), {
			...m,
			...l,
			"aria-disabled": s || void 0,
			"aria-current": e["aria-current"],
			onClick: (t) => {
				d.onClick?.(t), Xn(t, h, e.href, e.routerOptions);
			}
		})
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/interactions/useFocusWithin.mjs
function ka(e) {
	let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: i } = e, a = (0, z.useRef)({ isFocusWithin: !1 }), { addGlobalListener: o, removeAllGlobalListeners: s } = ma(), c = (0, z.useCallback)((e) => {
		U(e.currentTarget, G(e)) && a.current.isFocusWithin && !U(e.currentTarget, e.relatedTarget) && (a.current.isFocusWithin = !1, s(), n && n(e), i && i(!1));
	}, [
		n,
		i,
		a,
		s
	]), l = En(c), u = (0, z.useCallback)((e) => {
		if (!U(e.currentTarget, G(e))) return;
		let t = G(e), n = H(t), s = W(n);
		if (!a.current.isFocusWithin && s === t) {
			r && r(e), i && i(!0), a.current.isFocusWithin = !0, l(e);
			let t = e.currentTarget;
			o(n, "focus", (e) => {
				let r = G(e);
				if (a.current.isFocusWithin && !U(t, r)) {
					let e = new n.defaultView.FocusEvent("blur", { relatedTarget: r });
					Tn(e, t);
					let i = wn(e);
					c(i);
				}
			}, { capture: !0 });
		}
	}, [
		r,
		i,
		l,
		o,
		c
	]);
	return t ? { focusWithinProps: {
		onFocus: void 0,
		onBlur: void 0
	} } : { focusWithinProps: {
		onFocus: u,
		onBlur: c
	} };
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/focus/useFocusRing.mjs
function Aa(e = {}) {
	let { autoFocus: t = !1, isTextInput: n, within: r } = e, i = (0, z.useRef)({
		isFocused: !1,
		isFocusVisible: t || pr()
	}), [a, o] = (0, z.useState)(!1), [s, c] = (0, z.useState)(() => i.current.isFocused && i.current.isFocusVisible), l = (0, z.useCallback)(() => c(i.current.isFocused && i.current.isFocusVisible), []), u = (0, z.useCallback)((e) => {
		i.current.isFocused = e, i.current.isFocusVisible = pr(), o(e), l();
	}, [l]);
	vr((e) => {
		i.current.isFocusVisible = e, l();
	}, [n, a], {
		enabled: a,
		isTextInput: n
	});
	let { focusProps: d } = _i({
		isDisabled: r,
		onFocusChange: u
	}), { focusWithinProps: f } = ka({
		isDisabled: !r,
		onFocusWithinChange: u
	});
	return {
		isFocused: a,
		isFocusVisible: s,
		focusProps: r ? f : d
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/interactions/useHover.mjs
var ja = !1, Ma = 0;
function Na() {
	ja = !0, setTimeout(() => {
		ja = !1;
	}, 500);
}
function Pa(e) {
	e.pointerType === "touch" && Na();
}
function Fa() {
	let e = H(null);
	if (e !== void 0) return Ma === 0 && typeof PointerEvent < "u" && e.addEventListener("pointerup", Pa), Ma++, () => {
		Ma--, !(Ma > 0) && typeof PointerEvent < "u" && e.removeEventListener("pointerup", Pa);
	};
}
function Ia(e) {
	let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: i } = e, [a, o] = (0, z.useState)(!1), s = (0, z.useRef)({
		isHovered: !1,
		ignoreEmulatedMouseEvents: !1,
		pointerType: "",
		target: null
	}).current;
	(0, z.useEffect)(Fa, []);
	let { addGlobalListener: c, removeAllGlobalListeners: l } = ma(), { hoverProps: u, triggerHoverEnd: d } = (0, z.useMemo)(() => {
		let e = (e, r) => {
			if (s.pointerType = r, i || r === "touch" || s.isHovered || !U(e.currentTarget, G(e))) return;
			s.isHovered = !0;
			let l = e.currentTarget;
			s.target = l, c(H(G(e)), "pointerover", (e) => {
				s.isHovered && s.target && !U(s.target, G(e)) && a(e, e.pointerType);
			}, { capture: !0 }), t && t({
				type: "hoverstart",
				target: l,
				pointerType: r
			}), n && n(!0), o(!0);
		}, a = (e, t) => {
			let i = s.target;
			s.pointerType = "", s.target = null, !(t === "touch" || !s.isHovered || !i) && (s.isHovered = !1, l(), r && r({
				type: "hoverend",
				target: i,
				pointerType: t
			}), n && n(!1), o(!1));
		}, u = {};
		return typeof PointerEvent < "u" && (u.onPointerEnter = (t) => {
			ja && t.pointerType === "mouse" || e(t, t.pointerType);
		}, u.onPointerLeave = (e) => {
			!i && U(e.currentTarget, G(e)) && a(e, e.pointerType);
		}), {
			hoverProps: u,
			triggerHoverEnd: a
		};
	}, [
		t,
		n,
		r,
		i,
		s,
		c,
		l
	]);
	return (0, z.useEffect)(() => {
		i && d({ currentTarget: s.target }, s.pointerType);
	}, [i]), {
		hoverProps: u,
		isHovered: a
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/Link.mjs
var La = /*#__PURE__*/ (0, z.createContext)(null), Ra = /*#__PURE__*/ (0, z.forwardRef)(function(e, t) {
	[e, t] = Wt(e, t, La);
	let n = e.href && !e.isDisabled ? "a" : "span", { linkProps: r, isPressed: i } = Oa({
		...e,
		elementType: n
	}, t), a = Yt[n], { hoverProps: o, isHovered: s } = Ia(e), { focusProps: c, isFocused: l, isFocusVisible: u } = Aa(), d = Ht({
		...e,
		defaultClassName: "react-aria-Link",
		values: {
			isCurrent: !!e["aria-current"],
			isDisabled: e.isDisabled || !1,
			isPressed: i,
			isHovered: s,
			isFocused: l,
			isFocusVisible: u
		}
	}), f = ia(e, { global: !0 });
	return delete f.onClick, /*#__PURE__*/ z.createElement(a, {
		ref: t,
		slot: e.slot || void 0,
		...V(f, d, r, o, c),
		"data-focused": l || void 0,
		"data-hovered": s || void 0,
		"data-pressed": i || void 0,
		"data-focus-visible": u || void 0,
		"data-current": !!e["aria-current"] || void 0,
		"data-disabled": e.isDisabled || void 0
	}, d.children);
}), za = /*#__PURE__*/ (0, z.createContext)({}), Ba = /*#__PURE__*/ Ei(function(e, t) {
	[e, t] = Wt(e, t, za);
	let { elementType: n = "label", ...r } = e, i = Yt[n];
	return /*#__PURE__*/ z.createElement(i, {
		className: "react-aria-Label",
		...r,
		ref: t
	});
});
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/label/useLabel.mjs
function Va(e) {
	let { id: t, label: n, "aria-labelledby": r, "aria-label": i, labelElementType: a = "label" } = e;
	t = Pt(t);
	let o = Pt(), s = {};
	n && (r = r ? `${o} ${r}` : o, s = {
		id: o,
		htmlFor: a === "label" ? t : void 0
	});
	let c = Tr({
		id: t,
		"aria-label": i,
		"aria-labelledby": r
	});
	return {
		labelProps: s,
		fieldProps: c
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-stately@3.48.0_react@19.2.4/node_modules/react-stately/dist/private/utils/number.mjs
function Ha(e, t = -Infinity, n = Infinity) {
	return Math.min(Math.max(e, t), n);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/ProgressBar.mjs
var Ua = /*#__PURE__*/ (0, z.createContext)(null), Wa = 7e3, Ga = null;
function Ka(e, t = "assertive", n = Wa) {
	Ga ? Ga.announce(e, t, n) : (Ga = new qa(), (typeof IS_REACT_ACT_ENVIRONMENT == "boolean" ? IS_REACT_ACT_ENVIRONMENT : typeof jest < "u") ? Ga.announce(e, t, n) : setTimeout(() => {
		Ga?.isAttached() && Ga?.announce(e, t, n);
	}, 100));
}
var qa = class {
	constructor() {
		this.node = null, this.assertiveLog = null, this.politeLog = null, typeof document < "u" && (this.node = document.createElement("div"), this.node.dataset.liveAnnouncer = "true", Object.assign(this.node.style, {
			border: 0,
			clip: "rect(0 0 0 0)",
			clipPath: "inset(50%)",
			height: "1px",
			margin: "-1px",
			overflow: "hidden",
			padding: 0,
			position: "absolute",
			width: "1px",
			whiteSpace: "nowrap"
		}), this.assertiveLog = this.createLog("assertive"), this.node.appendChild(this.assertiveLog), this.politeLog = this.createLog("polite"), this.node.appendChild(this.politeLog), document.body.prepend(this.node));
	}
	isAttached() {
		return this.node?.isConnected;
	}
	createLog(e) {
		let t = document.createElement("div");
		return t.setAttribute("role", "log"), t.setAttribute("aria-live", e), t.setAttribute("aria-relevant", "additions"), t;
	}
	destroy() {
		this.node &&= (document.body.removeChild(this.node), null);
	}
	announce(e, t = "assertive", n = Wa) {
		if (!this.node) return;
		let r = document.createElement("div");
		typeof e == "object" ? (r.setAttribute("role", "img"), r.setAttribute("aria-labelledby", e["aria-labelledby"])) : r.textContent = e, t === "assertive" ? this.assertiveLog?.appendChild(r) : this.politeLog?.appendChild(r), e !== "" && setTimeout(() => {
			r.remove();
		}, n);
	}
	clear(e) {
		this.node && ((!e || e === "assertive") && this.assertiveLog && (this.assertiveLog.innerHTML = ""), (!e || e === "polite") && this.politeLog && (this.politeLog.innerHTML = ""));
	}
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/button/useButton.mjs
function Ja(e, t) {
	let { elementType: n = "button", isDisabled: r, onPress: i, onPressStart: a, onPressEnd: o, onPressUp: s, onPressChange: c, preventFocusOnPress: l, allowFocusWhenDisabled: u, onClick: d, href: f, target: p, rel: m, type: h = "button" } = e, g;
	g = n === "button" ? {
		type: h,
		disabled: r,
		form: e.form,
		formAction: e.formAction,
		formEncType: e.formEncType,
		formMethod: e.formMethod,
		formNoValidate: e.formNoValidate,
		formTarget: e.formTarget,
		name: e.name,
		value: e.value
	} : {
		role: "button",
		href: n === "a" && !r ? f : void 0,
		target: n === "a" ? p : void 0,
		type: n === "input" ? h : void 0,
		disabled: n === "input" ? r : void 0,
		"aria-disabled": !r || n === "input" ? void 0 : r,
		rel: n === "a" ? m : void 0
	};
	let { pressProps: _, isPressed: v } = ba({
		onPressStart: a,
		onPressEnd: o,
		onPressChange: c,
		onPress: i,
		onPressUp: s,
		onClick: d,
		isDisabled: r,
		preventFocusOnPress: l,
		ref: t
	}), { focusableProps: y } = Ci(e, t);
	u && (y.tabIndex = r ? -1 : y.tabIndex);
	let b = V(y, _, ia(e, { labelable: !0 }));
	return {
		isPressed: v,
		buttonProps: V(g, b, {
			"aria-haspopup": e["aria-haspopup"],
			"aria-expanded": e["aria-expanded"],
			"aria-controls": e["aria-controls"],
			"aria-pressed": e["aria-pressed"],
			"aria-current": e["aria-current"],
			"aria-disabled": e["aria-disabled"]
		})
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/Button.mjs
var Ya = /*#__PURE__*/ (0, z.createContext)({}), Xa = /*#__PURE__*/ Ei(function(e, t) {
	[e, t] = Wt(e, t, Ya);
	let n = e, { isPending: r } = n, { buttonProps: i, isPressed: a } = Ja(e, t);
	i = Qa(i, r);
	let { focusProps: o, isFocused: s, isFocusVisible: c } = Aa(e), { hoverProps: l, isHovered: u } = Ia({
		...e,
		isDisabled: e.isDisabled || r
	}), d = {
		isHovered: u,
		isPressed: (n.isPressed || a) && !r,
		isFocused: s,
		isFocusVisible: c,
		isDisabled: e.isDisabled || !1,
		isPending: r ?? !1
	}, f = Ht({
		...e,
		values: d,
		defaultClassName: "react-aria-Button"
	}), p = Pt(i.id), m = Pt(), h = i["aria-labelledby"];
	r && (h ? h = `${h} ${m}` : i["aria-label"] && (h = `${p} ${m}`));
	let g = (0, z.useRef)(r);
	(0, z.useEffect)(() => {
		let e = { "aria-labelledby": h || p };
		(!g.current && s && r || g.current && s && !r) && Ka(e, "assertive"), g.current = r;
	}, [
		r,
		s,
		h,
		p
	]);
	let _ = ia(e, { global: !0 });
	return delete _.onClick, /*#__PURE__*/ z.createElement(Yt.button, {
		...V(_, f, i, o, l),
		type: i.type === "submit" && r ? "button" : i.type,
		id: p,
		ref: t,
		"aria-labelledby": h,
		slot: e.slot || void 0,
		"aria-disabled": r ? "true" : i["aria-disabled"],
		"data-disabled": e.isDisabled || void 0,
		"data-pressed": d.isPressed || void 0,
		"data-hovered": u || void 0,
		"data-focused": s || void 0,
		"data-pending": r || void 0,
		"data-focus-visible": c || void 0
	}, /*#__PURE__*/ z.createElement(Ua.Provider, { value: { id: m } }, f.children));
}), Za = /Focus|Blur|Hover|Pointer(Enter|Leave|Over|Out)|Mouse(Enter|Leave|Over|Out)/;
function Qa(e, t) {
	if (t) {
		for (let t in e) t.startsWith("on") && !Za.test(t) && (e[t] = void 0);
		e.href = void 0, e.target = void 0;
	}
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/Heading.mjs
var $a = /*#__PURE__*/ (0, z.createContext)({}), eo = /*#__PURE__*/ (0, z.forwardRef)(function(e, t) {
	[e, t] = Wt(e, t, $a);
	let { children: n, level: r = 3, className: i, ...a } = e, o = Yt[`h${r}`];
	return /*#__PURE__*/ z.createElement(o, {
		...a,
		ref: t,
		className: i ?? "react-aria-Heading"
	}, n);
}), to = /*#__PURE__*/ (0, z.createContext)({}), no = /*#__PURE__*/ (0, z.forwardRef)(function(e, t) {
	[e, t] = Wt(e, t, to);
	let { elementType: n = "span", ...r } = e, i = Yt[n];
	return /*#__PURE__*/ z.createElement(i, {
		className: "react-aria-Text",
		...r,
		ref: t
	});
});
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/isScrollable.mjs
function ro(e, t) {
	if (!e) return !1;
	let n = window.getComputedStyle(e), r = document.scrollingElement || document.documentElement, i = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
	return e === r && n.overflow !== "hidden" && (i = !0), i && t && (i = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), i;
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/getScrollParent.mjs
function io(e, t) {
	let n = e;
	for (ro(n, t) && (n = n.parentElement); n && !ro(n, t);) n = n.parentElement;
	return n || document.scrollingElement || document.documentElement;
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/getScrollParents.mjs
function ao(e, t) {
	let n = [], r = document.scrollingElement || document.documentElement;
	for (; e && (ro(e, t) && n.push(e), e !== r);) e = e.parentElement;
	return n;
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/scrollIntoView.mjs
function q(e, t, n = {}) {
	let { block: r = "nearest", inline: i = "nearest" } = n;
	if (e === t) return;
	let a = e.scrollTop, o = e.scrollLeft, s = t.getBoundingClientRect(), c = e.getBoundingClientRect(), l = window.getComputedStyle(t), u = window.getComputedStyle(e), d = document.scrollingElement || document.documentElement, f = e === d, p = e === d ? 0 : c.top, m = e === d ? e.clientHeight : c.bottom, h = e === d ? 0 : c.left, g = e === d ? e.clientWidth : c.right, _ = parseFloat(l.scrollMarginTop) || 0, v = parseFloat(l.scrollMarginBottom) || 0, y = parseFloat(l.scrollMarginLeft) || 0, b = parseFloat(l.scrollMarginRight) || 0, x = parseFloat(u.scrollPaddingTop) || 0, S = parseFloat(u.scrollPaddingBottom) || 0, C = parseFloat(u.scrollPaddingLeft) || 0, w = parseFloat(u.scrollPaddingRight) || 0, T = parseFloat(u.borderTopWidth) || 0, ee = parseFloat(u.borderBottomWidth) || 0, E = parseFloat(u.borderLeftWidth) || 0, D = parseFloat(u.borderRightWidth) || 0, O = s.top - _, te = s.bottom + v, k = s.left - y, ne = s.right + b, re = e === d ? 0 : E + D, ie = e === d ? 0 : T + ee, ae = e === d ? 0 : e.offsetWidth - e.clientWidth - re, A = e === d ? 0 : e.offsetHeight - e.clientHeight - ie, j = p + (f ? 0 : T) + x, oe = m - (f ? 0 : ee) - S - A, se = h + (f ? 0 : E) + C, ce = g - (f ? 0 : D) - w;
	u.direction === "rtl" && !Fn() ? se += ae : ce -= ae;
	let le = O < j || te > oe, M = k < se || ne > ce;
	if (le && r === "start") a += O - j;
	else if (le && r === "center") a += (O + te) / 2 - (j + oe) / 2;
	else if (le && r === "end") a += te - oe;
	else if (le && r === "nearest") {
		let e = O - j, t = te - oe;
		a += Math.abs(e) <= Math.abs(t) ? e : t;
	}
	if (M && i === "start") o += k - se;
	else if (M && i === "center") o += (k + ne) / 2 - (se + ce) / 2;
	else if (M && i === "end") o += ne - ce;
	else if (M && i === "nearest") {
		let e = k - se, t = ne - ce;
		o += Math.abs(e) <= Math.abs(t) ? e : t;
	}
	e.scrollTo({
		left: o,
		top: a
	});
}
function oo(e, t = {}) {
	let { containingElement: n } = t;
	if (e && e.isConnected) {
		let t = document.scrollingElement || document.documentElement;
		if (window.getComputedStyle(t).overflow !== "hidden") {
			let { left: t, top: r } = e.getBoundingClientRect();
			e?.scrollIntoView?.({ block: "nearest" });
			let { left: i, top: a } = e.getBoundingClientRect();
			(Math.abs(t - i) > 1 || Math.abs(r - a) > 1) && (n?.scrollIntoView?.({
				block: "center",
				inline: "center"
			}), e.scrollIntoView?.({ block: "nearest" }));
		} else {
			let { left: t, top: r } = e.getBoundingClientRect(), i = ao(e, !0);
			for (let t of i) q(t, e);
			let { left: a, top: o } = e.getBoundingClientRect();
			if (Math.abs(t - a) > 1 || Math.abs(r - o) > 1) {
				i = n ? ao(n, !0) : [];
				for (let e of i) q(e, n, {
					block: "center",
					inline: "center"
				});
				for (let t of ao(e, !0)) q(t, e);
			}
		}
	}
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/useDescription.mjs
var so = 0, co = /* @__PURE__ */ new Map();
function lo(e) {
	let [t, n] = (0, z.useState)();
	return B(() => {
		if (!e) return;
		let t = co.get(e);
		if (t) n(t.element.id);
		else {
			let r = `react-aria-description-${so++}`;
			n(r);
			let i = document.createElement("div");
			i.id = r, i.style.display = "none", i.textContent = e, document.body.appendChild(i), t = {
				refCount: 0,
				element: i
			}, co.set(e, t);
		}
		return t.refCount++, () => {
			t && --t.refCount === 0 && (t.element.remove(), co.delete(e));
		};
	}, [e]), { "aria-describedby": e ? t : void 0 };
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/visually-hidden/VisuallyHidden.mjs
var uo = {
	border: 0,
	clip: "rect(0 0 0 0)",
	clipPath: "inset(50%)",
	height: "1px",
	margin: "-1px",
	overflow: "hidden",
	padding: 0,
	position: "absolute",
	width: "1px",
	whiteSpace: "nowrap"
};
function fo(e = {}) {
	let { style: t, isFocusable: n } = e, [r, i] = (0, z.useState)(!1), { focusWithinProps: a } = ka({
		isDisabled: !n,
		onFocusWithinChange: (e) => i(e)
	}), o = (0, z.useMemo)(() => r ? t : t ? {
		...uo,
		...t
	} : uo, [r]);
	return { visuallyHiddenProps: {
		...a,
		style: o
	} };
}
function po(e) {
	let { children: t, elementType: n = "div", isFocusable: r, style: i, ...a } = e, { visuallyHiddenProps: o } = fo(e);
	return /*#__PURE__*/ z.createElement(n, V(a, o), t);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/FieldError.mjs
var mo = /*#__PURE__*/ (0, z.createContext)(null), ho = /*#__PURE__*/ (0, z.forwardRef)(function(e, t) {
	return (0, z.useContext)(mo)?.isInvalid ? /*#__PURE__*/ z.createElement(go, {
		...e,
		ref: t
	}) : null;
}), go = /*#__PURE__*/ (0, z.forwardRef)((e, t) => {
	let n = (0, z.useContext)(mo), { elementType: r, ...i } = e, a = ia(i, { global: !0 }), o = Ht({
		...i,
		defaultClassName: "react-aria-FieldError",
		defaultChildren: n.validationErrors.length === 0 ? void 0 : n.validationErrors.join(" "),
		values: n
	});
	return o.children == null ? null : /*#__PURE__*/ z.createElement(no, {
		slot: "errorMessage",
		elementType: r,
		...a,
		...o,
		ref: t
	});
}), _o = {
	badInput: !1,
	customError: !1,
	patternMismatch: !1,
	rangeOverflow: !1,
	rangeUnderflow: !1,
	stepMismatch: !1,
	tooLong: !1,
	tooShort: !1,
	typeMismatch: !1,
	valueMissing: !1,
	valid: !0
}, vo = {
	..._o,
	customError: !0,
	valid: !1
}, yo = {
	isInvalid: !1,
	validationDetails: _o,
	validationErrors: []
}, bo = (0, z.createContext)({}), xo = "__reactAriaFormValidationState";
function So(e) {
	if (e.__reactAriaFormValidationState) {
		let { realtimeValidation: t, displayValidation: n, updateValidation: r, resetValidation: i, commitValidation: a } = e[xo];
		return {
			realtimeValidation: t,
			displayValidation: n,
			updateValidation: r,
			resetValidation: i,
			commitValidation: a
		};
	}
	return Co(e);
}
function Co(e) {
	let { isInvalid: t, validationState: n, name: r, value: i, builtinValidation: a, validate: o, validationBehavior: s = "aria" } = e;
	n && (t ||= n === "invalid");
	let c = t === void 0 ? null : {
		isInvalid: t,
		validationErrors: [],
		validationDetails: vo
	}, l = (0, z.useMemo)(() => !o || i == null ? null : Eo(To(o, i)), [o, i]);
	a?.validationDetails.valid && (a = void 0);
	let u = (0, z.useContext)(bo), d = (0, z.useMemo)(() => r ? Array.isArray(r) ? r.flatMap((e) => wo(u[e])) : wo(u[r]) : [], [u, r]), [f, p] = (0, z.useState)(u), [m, h] = (0, z.useState)(!1);
	u !== f && (p(u), h(!1));
	let g = (0, z.useMemo)(() => Eo(m ? [] : d), [m, d]), _ = (0, z.useRef)(yo), [v, y] = (0, z.useState)(yo), b = (0, z.useRef)(yo), x = () => {
		if (!S) return;
		C(!1);
		let e = l || a || _.current;
		Do(e, b.current) || (b.current = e, y(e));
	}, [S, C] = (0, z.useState)(!1);
	return (0, z.useEffect)(x), {
		realtimeValidation: c || g || l || a || yo,
		displayValidation: s === "native" ? c || g || v : c || g || l || a || v,
		updateValidation(e) {
			s === "aria" && !Do(v, e) ? y(e) : _.current = e;
		},
		resetValidation() {
			let e = yo;
			Do(e, b.current) || (b.current = e, y(e)), s === "native" && C(!1), h(!0);
		},
		commitValidation() {
			s === "native" && C(!0), h(!0);
		}
	};
}
function wo(e) {
	return e ? Array.isArray(e) ? e : [e] : [];
}
function To(e, t) {
	if (typeof e == "function") {
		let n = e(t);
		if (n && typeof n != "boolean") return wo(n);
	}
	return [];
}
function Eo(e) {
	return e.length ? {
		isInvalid: !0,
		validationErrors: e,
		validationDetails: vo
	} : null;
}
function Do(e, t) {
	return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, n) => e === t.validationErrors[n]) && Object.entries(e.validationDetails).every(([e, n]) => t.validationDetails[e] === n);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/Form.mjs
var Oo = /*#__PURE__*/ (0, z.createContext)(null);
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/label/useField.mjs
function ko(e) {
	let { description: t, errorMessage: n, isInvalid: r, validationState: i } = e, { labelProps: a, fieldProps: o } = Va(e), s = It([
		!!t,
		!!n,
		r,
		i
	]), c = It([
		!!t,
		!!n,
		r,
		i
	]);
	return o = V(o, { "aria-describedby": [
		s,
		c,
		e["aria-describedby"]
	].filter(Boolean).join(" ") || void 0 }), {
		labelProps: a,
		fieldProps: o,
		descriptionProps: { id: s },
		errorMessageProps: { id: c }
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/useFormReset.mjs
function Ao(e, t, n) {
	let r = Cr((e) => {
		n && !e.defaultPrevented && n(t);
	});
	(0, z.useEffect)(() => {
		let t = e?.current?.form;
		return t?.addEventListener("reset", r), () => {
			t?.removeEventListener("reset", r);
		};
	}, [e]);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/form/useFormValidation.mjs
function jo(e, t, n) {
	let { validationBehavior: r, focus: i } = e;
	B(() => {
		if (r === "native" && n?.current && "setCustomValidity" in n.current && !n.current.disabled) {
			let e = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
			n.current.setCustomValidity(e), n.current.hasAttribute("title") || (n.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation(No(n.current));
		}
	});
	let a = (0, z.useRef)(!1), o = Cr(() => {
		a.current || t.resetValidation();
	}), s = Cr((e) => {
		t.displayValidation.isInvalid || t.commitValidation();
		let r = n?.current?.form;
		!e.defaultPrevented && n && r && Po(r) === n.current && (i ? i() : n.current?.focus(), hr("keyboard")), e.preventDefault();
	}), c = Cr(() => {
		t.commitValidation();
	});
	(0, z.useEffect)(() => {
		let e = n?.current;
		if (!e) return;
		let t = e.form, r = t?.reset;
		return t && (t.reset = () => {
			a.current = !window.event || window.event.type === "message" && G(window.event) instanceof MessagePort, r?.call(t), a.current = !1;
		}), e.addEventListener("invalid", s), e.addEventListener("change", c), t?.addEventListener("reset", o), () => {
			e.removeEventListener("invalid", s), e.removeEventListener("change", c), t?.removeEventListener("reset", o), t && (t.reset = r);
		};
	}, [n, r]);
}
function Mo(e) {
	let t = e.validity;
	return {
		badInput: t.badInput,
		customError: t.customError,
		patternMismatch: t.patternMismatch,
		rangeOverflow: t.rangeOverflow,
		rangeUnderflow: t.rangeUnderflow,
		stepMismatch: t.stepMismatch,
		tooLong: t.tooLong,
		tooShort: t.tooShort,
		typeMismatch: t.typeMismatch,
		valueMissing: t.valueMissing,
		valid: t.valid
	};
}
function No(e) {
	return {
		isInvalid: !e.validity.valid,
		validationDetails: Mo(e),
		validationErrors: e.validationMessage ? [e.validationMessage] : []
	};
}
function Po(e) {
	for (let t = 0; t < e.elements.length; t++) {
		let n = e.elements[t];
		if (n.validity?.valid === !1) return n;
	}
	return null;
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/ar-AE.mjs
var Fo = {};
Fo = {
	colorSwatchPicker: "تغييرات الألوان",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "حدد عنصرًا",
	tableResizer: "أداة تغيير الحجم"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/bg-BG.mjs
var Io = {};
Io = {
	colorSwatchPicker: "Цветови мостри",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Изберете предмет",
	tableResizer: "Преоразмерител"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/cs-CZ.mjs
var Lo = {};
Lo = {
	colorSwatchPicker: "Vzorky barev",
	dropzoneLabel: "Místo pro přetažení",
	selectPlaceholder: "Vyberte položku",
	tableResizer: "Změna velikosti"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/da-DK.mjs
var Ro = {};
Ro = {
	colorSwatchPicker: "Farveprøver",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Vælg et element",
	tableResizer: "Størrelsesændring"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/de-DE.mjs
var zo = {};
zo = {
	colorSwatchPicker: "Farbfelder",
	dropzoneLabel: "Ablegebereich",
	selectPlaceholder: "Element wählen",
	tableResizer: "Größenanpassung"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/el-GR.mjs
var Bo = {};
Bo = {
	colorSwatchPicker: "Χρωματικά δείγματα",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Επιλέξτε ένα αντικείμενο",
	tableResizer: "Αλλαγή μεγέθους"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/en-US.mjs
var Vo = {};
Vo = {
	selectPlaceholder: "Select an item",
	tableResizer: "Resizer",
	dropzoneLabel: "DropZone",
	colorSwatchPicker: "Color swatches"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/es-ES.mjs
var Ho = {};
Ho = {
	colorSwatchPicker: "Muestras de colores",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Seleccionar un artículo",
	tableResizer: "Cambiador de tamaño"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/et-EE.mjs
var Uo = {};
Uo = {
	colorSwatchPicker: "Värvinäidised",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Valige üksus",
	tableResizer: "Suuruse muutja"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/fi-FI.mjs
var Wo = {};
Wo = {
	colorSwatchPicker: "Värimallit",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Valitse kohde",
	tableResizer: "Koon muuttaja"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/fr-FR.mjs
var Go = {};
Go = {
	colorSwatchPicker: "Échantillons de couleurs",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Sélectionner un élément",
	tableResizer: "Redimensionneur"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/he-IL.mjs
var Ko = {};
Ko = {
	colorSwatchPicker: "דוגמיות צבע",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "בחר פריט",
	tableResizer: "שינוי גודל"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/hr-HR.mjs
var qo = {};
qo = {
	colorSwatchPicker: "Uzorci boja",
	dropzoneLabel: "Zona spuštanja",
	selectPlaceholder: "Odaberite stavku",
	tableResizer: "Promjena veličine"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/hu-HU.mjs
var Jo = {};
Jo = {
	colorSwatchPicker: "Színtárak",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Válasszon ki egy elemet",
	tableResizer: "Átméretező"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/it-IT.mjs
var Yo = {};
Yo = {
	colorSwatchPicker: "Campioni di colore",
	dropzoneLabel: "Zona di rilascio",
	selectPlaceholder: "Seleziona un elemento",
	tableResizer: "Ridimensionamento"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/ja-JP.mjs
var Xo = {};
Xo = {
	colorSwatchPicker: "カラースウォッチ",
	dropzoneLabel: "ドロップゾーン",
	selectPlaceholder: "項目を選択",
	tableResizer: "サイズ変更ツール"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/ko-KR.mjs
var Zo = {};
Zo = {
	colorSwatchPicker: "색상 견본",
	dropzoneLabel: "드롭 영역",
	selectPlaceholder: "항목 선택",
	tableResizer: "크기 조정기"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/lt-LT.mjs
var Qo = {};
Qo = {
	colorSwatchPicker: "Spalvų pavyzdžiai",
	dropzoneLabel: "„DropZone“",
	selectPlaceholder: "Pasirinkite elementą",
	tableResizer: "Dydžio keitiklis"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/lv-LV.mjs
var $o = {};
$o = {
	colorSwatchPicker: "Krāsu paraugi",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Izvēlēties vienumu",
	tableResizer: "Izmēra mainītājs"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/nb-NO.mjs
var es = {};
es = {
	colorSwatchPicker: "Fargekart",
	dropzoneLabel: "Droppsone",
	selectPlaceholder: "Velg et element",
	tableResizer: "Størrelsesendrer"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/nl-NL.mjs
var ts = {};
ts = {
	colorSwatchPicker: "kleurstalen",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Selecteer een item",
	tableResizer: "Resizer"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/pl-PL.mjs
var ns = {};
ns = {
	colorSwatchPicker: "Próbki kolorów",
	dropzoneLabel: "Strefa upuszczania",
	selectPlaceholder: "Wybierz element",
	tableResizer: "Zmiana rozmiaru"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/pt-BR.mjs
var rs = {};
rs = {
	colorSwatchPicker: "Amostras de cores",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Selecione um item",
	tableResizer: "Redimensionador"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/pt-PT.mjs
var is = {};
is = {
	colorSwatchPicker: "Amostras de cores",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Selecione um item",
	tableResizer: "Redimensionador"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/ro-RO.mjs
var as = {};
as = {
	colorSwatchPicker: "Specimene de culoare",
	dropzoneLabel: "Zonă de plasare",
	selectPlaceholder: "Selectați un element",
	tableResizer: "Instrument de redimensionare"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/ru-RU.mjs
var os = {};
os = {
	colorSwatchPicker: "Цветовые образцы",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Выберите элемент",
	tableResizer: "Средство изменения размера"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/sk-SK.mjs
var ss = {};
ss = {
	colorSwatchPicker: "Vzorkovníky farieb",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Vyberte položku",
	tableResizer: "Nástroj na zmenu veľkosti"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/sl-SI.mjs
var cs = {};
cs = {
	colorSwatchPicker: "Barvne palete",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Izberite element",
	tableResizer: "Spreminjanje velikosti"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/sr-SP.mjs
var ls = {};
ls = {
	colorSwatchPicker: "Uzorci boje",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Izaberite stavku",
	tableResizer: "Promena veličine"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/sv-SE.mjs
var us = {};
us = {
	colorSwatchPicker: "Färgrutor",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Välj en artikel",
	tableResizer: "Storleksändrare"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/tr-TR.mjs
var ds = {};
ds = {
	colorSwatchPicker: "Renk örnekleri",
	dropzoneLabel: "Bırakma Bölgesi",
	selectPlaceholder: "Bir öğe seçin",
	tableResizer: "Yeniden boyutlandırıcı"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/uk-UA.mjs
var fs = {};
fs = {
	colorSwatchPicker: "Зразки кольорів",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Виберіть елемент",
	tableResizer: "Засіб змінення розміру"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/zh-CN.mjs
var ps = {};
ps = {
	colorSwatchPicker: "颜色色板",
	dropzoneLabel: "放置区域",
	selectPlaceholder: "选择一个项目",
	tableResizer: "尺寸调整器"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/zh-TW.mjs
var ms = {};
ms = {
	colorSwatchPicker: "色票",
	dropzoneLabel: "放置區",
	selectPlaceholder: "選取項目",
	tableResizer: "大小調整器"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intlStrings.mjs
var hs = {};
hs = {
	"ar-AE": Fo,
	"bg-BG": Io,
	"cs-CZ": Lo,
	"da-DK": Ro,
	"de-DE": zo,
	"el-GR": Bo,
	"en-US": Vo,
	"es-ES": Ho,
	"et-EE": Uo,
	"fi-FI": Wo,
	"fr-FR": Go,
	"he-IL": Ko,
	"hr-HR": qo,
	"hu-HU": Jo,
	"it-IT": Yo,
	"ja-JP": Xo,
	"ko-KR": Zo,
	"lt-LT": Qo,
	"lv-LV": $o,
	"nb-NO": es,
	"nl-NL": ts,
	"pl-PL": ns,
	"pt-BR": rs,
	"pt-PT": is,
	"ro-RO": as,
	"ru-RU": os,
	"sk-SK": ss,
	"sl-SI": cs,
	"sr-SP": ls,
	"sv-SE": us,
	"tr-TR": ds,
	"uk-UA": fs,
	"zh-CN": ps,
	"zh-TW": ms
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/DragAndDrop.mjs
var gs = /*#__PURE__*/ (0, z.createContext)({}), _s = /*#__PURE__*/ (0, z.createContext)(null), vs = /*#__PURE__*/ (0, z.forwardRef)(function(e, t) {
	let { render: n } = (0, z.useContext)(_s);
	return /*#__PURE__*/ z.createElement(z.Fragment, null, n(e, t));
});
function ys(e, t) {
	let n = e?.renderDropIndicator, r = e?.isVirtualDragging?.(), i = (0, z.useCallback)((e) => {
		if (r || t?.isDropTarget(e)) return n ? n(e) : /*#__PURE__*/ z.createElement(vs, { target: e });
	}, [
		t?.target,
		r,
		n
	]);
	return e?.useDropIndicator ? i : void 0;
}
function bs(e, t, n) {
	let r = e.focusedKey, i = null;
	if (t?.isVirtualDragging?.() && n?.target?.type === "item" && (i = n.target.key, n.target.dropPosition === "after")) {
		let e = n.collection.getKeyAfter(i), t = null;
		if (e != null) {
			let r = n.collection.getItem(i)?.level ?? 0;
			for (; e != null;) {
				let i = n.collection.getItem(e);
				if (!i) break;
				if (i.type !== "item") {
					e = n.collection.getKeyAfter(e);
					continue;
				}
				if ((i.level ?? 0) <= r) break;
				t = e, e = n.collection.getKeyAfter(e);
			}
		}
		i = e ?? t ?? i;
	}
	return (0, z.useMemo)(() => new Set([r, i].filter((e) => e != null)), [r, i]);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/Header.mjs
var xs = /*#__PURE__*/ (0, z.createContext)({}), Ss = /*#__PURE__*/ (0, z.createContext)(null);
function Cs(e) {
	let t = (0, z.useRef)({});
	return /*#__PURE__*/ z.createElement(Ss.Provider, { value: t }, e.children);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/SelectionIndicator.mjs
var ws = /*#__PURE__*/ (0, z.createContext)({ isSelected: !1 }), Ts = /*#__PURE__*/ (0, z.createContext)({});
(class extends ei {
	static {
		this.type = "separator";
	}
	filter(e, t) {
		let n = t.getItem(this.prevKey);
		if (n && n.type !== "separator") {
			let n = this.clone();
			return t.addDescendants(n, e), n;
		}
		return null;
	}
});
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/listbox/utils.mjs
var Es = /* @__PURE__ */ new WeakMap();
function Ds(e) {
	return typeof e == "string" ? e.replace(/\s*/g, "") : "" + e;
}
function Os(e, t) {
	let n = Es.get(e);
	if (!n) throw Error("Unknown list");
	return `${n.id}-option-${Ds(t)}`;
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/shadowdom/ShadowTreeWalker.mjs
var ks = class {
	constructor(e, t, n, r) {
		this._walkerStack = [], this._currentSetFor = /* @__PURE__ */ new Set(), this._acceptNode = (e) => {
			if (e.nodeType === Node.ELEMENT_NODE) {
				let t = e.shadowRoot;
				if (t) {
					let e = this._doc.createTreeWalker(t, this.whatToShow, { acceptNode: this._acceptNode });
					return this._walkerStack.unshift(e), NodeFilter.FILTER_ACCEPT;
				} else if (typeof this.filter == "function") return this.filter(e);
				else if (this.filter?.acceptNode) return this.filter.acceptNode(e);
				else if (this.filter === null) return NodeFilter.FILTER_ACCEPT;
			}
			return NodeFilter.FILTER_SKIP;
		}, this._doc = e, this.root = t, this.filter = r ?? null, this.whatToShow = n ?? NodeFilter.SHOW_ALL, this._currentNode = t, this._walkerStack.unshift(e.createTreeWalker(t, n, this._acceptNode));
		let i = t.shadowRoot;
		if (i) {
			let e = this._doc.createTreeWalker(i, this.whatToShow, { acceptNode: this._acceptNode });
			this._walkerStack.unshift(e);
		}
	}
	get currentNode() {
		return this._currentNode;
	}
	set currentNode(e) {
		if (!U(this.root, e)) throw Error("Cannot set currentNode to a node that is not contained by the root node.");
		let t = [], n = e, r = e;
		for (this._currentNode = e; n && n !== this.root;) if (n.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
			let e = n, i = this._doc.createTreeWalker(e, this.whatToShow, { acceptNode: this._acceptNode });
			t.push(i), i.currentNode = r, this._currentSetFor.add(i), n = r = e.host;
		} else n = n.parentNode;
		let i = this._doc.createTreeWalker(this.root, this.whatToShow, { acceptNode: this._acceptNode });
		t.push(i), i.currentNode = r, this._currentSetFor.add(i), this._walkerStack = t;
	}
	get doc() {
		return this._doc;
	}
	firstChild() {
		let e = this.currentNode, t = this.nextNode();
		return U(e, t) ? (t && (this.currentNode = t), t) : (this.currentNode = e, null);
	}
	lastChild() {
		let e = this._walkerStack[0].lastChild();
		return e && (this.currentNode = e), e;
	}
	nextNode() {
		let e = this._walkerStack[0].nextNode();
		if (e) {
			if (e.shadowRoot) {
				let t;
				if (typeof this.filter == "function" ? t = this.filter(e) : this.filter?.acceptNode && (t = this.filter.acceptNode(e)), t === NodeFilter.FILTER_ACCEPT) return this.currentNode = e, e;
				let n = this.nextNode();
				return n && (this.currentNode = n), n;
			}
			return e && (this.currentNode = e), e;
		} else if (this._walkerStack.length > 1) {
			this._walkerStack.shift();
			let e = this.nextNode();
			return e && (this.currentNode = e), e;
		} else return null;
	}
	previousNode() {
		let e = this._walkerStack[0];
		if (e.currentNode === e.root) {
			if (this._currentSetFor.has(e)) if (this._currentSetFor.delete(e), this._walkerStack.length > 1) {
				this._walkerStack.shift();
				let e = this.previousNode();
				return e && (this.currentNode = e), e;
			} else return null;
			return null;
		}
		let t = e.previousNode();
		if (t) {
			if (t.shadowRoot) {
				let e;
				if (typeof this.filter == "function" ? e = this.filter(t) : this.filter?.acceptNode && (e = this.filter.acceptNode(t)), e === NodeFilter.FILTER_ACCEPT) return t && (this.currentNode = t), t;
				let n = this.lastChild();
				return n && (this.currentNode = n), n;
			}
			return t && (this.currentNode = t), t;
		} else if (this._walkerStack.length > 1) {
			this._walkerStack.shift();
			let e = this.previousNode();
			return e && (this.currentNode = e), e;
		} else return null;
	}
	nextSibling() {
		return null;
	}
	previousSibling() {
		return null;
	}
	parentNode() {
		return null;
	}
};
function As(e, t, n, r) {
	return nn() ? new ks(e, t, n, r) : e.createTreeWalker(t, n, r);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/focus/FocusScope.mjs
var js = /*#__PURE__*/ z.createContext(null), Ms = "react-aria-focus-scope-restore", Ns = null;
function Ps(e) {
	let { children: t, contain: n, restoreFocus: r, autoFocus: i } = e, a = (0, z.useRef)(null), o = (0, z.useRef)(null), s = (0, z.useRef)([]), { parentNode: c } = (0, z.useContext)(js) || {}, l = (0, z.useMemo)(() => new nc({ scopeRef: s }), [s]);
	B(() => {
		let e = c || rc.root;
		if (rc.getTreeNode(e.scopeRef) && Ns && !Gs(Ns, e.scopeRef)) {
			let t = rc.getTreeNode(Ns);
			t && (e = t);
		}
		e.addChild(l), rc.addNode(l);
	}, [l, c]), B(() => {
		let e = rc.getTreeNode(s);
		e && (e.contain = !!n);
	}, [n]), B(() => {
		let e = a.current?.nextSibling, t = [], n = (e) => e.stopPropagation();
		for (; e && e !== o.current;) t.push(e), e.addEventListener(Ms, n), e = e.nextSibling;
		return s.current = t, () => {
			for (let e of t) e.removeEventListener(Ms, n);
		};
	}, [t]), Xs(s, r, n), Bs(s, n), Qs(s, r, n), Ys(s, i), (0, z.useEffect)(() => {
		let e = W(H(s.current ? s.current[0] : void 0)), t = null;
		if (Hs(e, s.current)) {
			for (let n of rc.traverse()) n.scopeRef && Hs(e, n.scopeRef.current) && (t = n);
			t === rc.getTreeNode(s) && (Ns = t.scopeRef);
		}
	}, [s]), B(() => () => {
		let e = rc.getTreeNode(s)?.parent?.scopeRef ?? null;
		(s === Ns || Gs(s, Ns)) && (!e || rc.getTreeNode(e)) && (Ns = e), rc.removeTreeNode(s);
	}, [s]);
	let u = (0, z.useMemo)(() => Fs(s), []), d = (0, z.useMemo)(() => ({
		focusManager: u,
		parentNode: l
	}), [l, u]);
	return /*#__PURE__*/ z.createElement(js.Provider, { value: d }, /*#__PURE__*/ z.createElement("span", {
		"data-focus-scope-start": !0,
		hidden: !0,
		ref: a
	}), t, /*#__PURE__*/ z.createElement("span", {
		"data-focus-scope-end": !0,
		hidden: !0,
		ref: o
	}));
}
function Fs(e) {
	return {
		focusNext(t = {}) {
			let n = e.current, { from: r, tabbable: i, wrap: a, accept: o } = t, s = r || W(H(n[0] ?? void 0)), c = n[0].previousElementSibling, l = ec(Is(n), {
				tabbable: i,
				accept: o
			}, n);
			l.currentNode = Hs(s, n) ? s : c;
			let u = l.nextNode();
			return !u && a && (l.currentNode = c, u = l.nextNode()), u && Ks(u, !0), u;
		},
		focusPrevious(t = {}) {
			let n = e.current, { from: r, tabbable: i, wrap: a, accept: o } = t, s = r || W(H(n[0] ?? void 0)), c = n[n.length - 1].nextElementSibling, l = ec(Is(n), {
				tabbable: i,
				accept: o
			}, n);
			l.currentNode = Hs(s, n) ? s : c;
			let u = l.previousNode();
			return !u && a && (l.currentNode = c, u = l.previousNode()), u && Ks(u, !0), u;
		},
		focusFirst(t = {}) {
			let n = e.current, { tabbable: r, accept: i } = t, a = ec(Is(n), {
				tabbable: r,
				accept: i
			}, n);
			a.currentNode = n[0].previousElementSibling;
			let o = a.nextNode();
			return o && Ks(o, !0), o;
		},
		focusLast(t = {}) {
			let n = e.current, { tabbable: r, accept: i } = t, a = ec(Is(n), {
				tabbable: r,
				accept: i
			}, n);
			a.currentNode = n[n.length - 1].nextElementSibling;
			let o = a.previousNode();
			return o && Ks(o, !0), o;
		}
	};
}
function Is(e) {
	return e[0].parentElement;
}
function Ls(e) {
	let t = rc.getTreeNode(Ns);
	for (; t && t.scopeRef !== e;) {
		if (t.contain) return !1;
		t = t.parent;
	}
	return !0;
}
function Rs(e) {
	if (!e.form) return Array.from(H(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)).filter((e) => !e.form);
	let t = e.form.elements.namedItem(e.name), n = Qt(e);
	return t instanceof n.RadioNodeList ? Array.from(t).filter((e) => e instanceof n.HTMLInputElement) : t instanceof n.HTMLInputElement ? [t] : [];
}
function zs(e) {
	if (e.checked) return !0;
	let t = Rs(e);
	return t.length > 0 && !t.some((e) => e.checked);
}
function Bs(e, t) {
	let n = (0, z.useRef)(void 0), r = (0, z.useRef)(void 0);
	B(() => {
		let i = e.current;
		if (!t) {
			r.current &&= (cancelAnimationFrame(r.current), void 0);
			return;
		}
		let a = H(i ? i[0] : void 0), o = (t) => {
			if (t.key !== "Tab" || t.altKey || t.ctrlKey || t.metaKey || !Ls(e) || t.isComposing) return;
			let n = W(a), r = e.current;
			if (!r || !Hs(n, r)) return;
			let i = ec(Is(r), { tabbable: !0 }, r);
			if (!n) return;
			i.currentNode = n;
			let o = t.shiftKey ? i.previousNode() : i.nextNode();
			o ||= (i.currentNode = t.shiftKey ? r[r.length - 1].nextElementSibling : r[0].previousElementSibling, t.shiftKey ? i.previousNode() : i.nextNode()), t.preventDefault(), o && (Ks(o, !0), o instanceof Qt(o).HTMLInputElement && o.select());
		}, s = (t) => {
			(!Ns || Gs(Ns, e)) && Hs(G(t), e.current) ? (Ns = e, n.current = G(t)) : Ls(e) && !Us(G(t), e) ? n.current ? n.current.focus() : Ns && Ns.current && Js(Ns.current) : Ls(e) && (n.current = G(t));
		}, c = (t) => {
			r.current && cancelAnimationFrame(r.current), r.current = requestAnimationFrame(() => {
				let r = mr(), i = (r === "virtual" || r === null) && zn() && Rn(), o = W(a);
				if (!i && o && Ls(e) && !Us(o, e)) {
					Ns = e;
					let r = G(t);
					r && r.isConnected ? (n.current = r, n.current?.focus()) : Ns.current && Js(Ns.current);
				}
			});
		};
		return a.addEventListener("keydown", o, !1), a.addEventListener("focusin", s, !1), i?.forEach((e) => e.addEventListener("focusin", s, !1)), i?.forEach((e) => e.addEventListener("focusout", c, !1)), () => {
			a.removeEventListener("keydown", o, !1), a.removeEventListener("focusin", s, !1), i?.forEach((e) => e.removeEventListener("focusin", s, !1)), i?.forEach((e) => e.removeEventListener("focusout", c, !1));
		};
	}, [e, t]), B(() => () => {
		r.current && cancelAnimationFrame(r.current);
	}, [r]);
}
function Vs(e) {
	return Us(e);
}
function Hs(e, t) {
	return !e || !t ? !1 : t.some((t) => U(t, e));
}
function Us(e, t = null) {
	if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
	for (let { scopeRef: n } of rc.traverse(rc.getTreeNode(t))) if (n && Hs(e, n.current)) return !0;
	return !1;
}
function Ws(e) {
	return Us(e, Ns);
}
function Gs(e, t) {
	let n = rc.getTreeNode(t)?.parent;
	for (; n;) {
		if (n.scopeRef === e) return !0;
		n = n.parent;
	}
	return !1;
}
function Ks(e, t = !1) {
	if (e != null && !t) try {
		gi(e);
	} catch {}
	else if (e != null) try {
		e.focus();
	} catch {}
}
function qs(e, t = !0) {
	let n = e[0].previousElementSibling, r = Is(e), i = ec(r, { tabbable: t }, e);
	i.currentNode = n;
	let a = i.nextNode();
	return t && !a && (r = Is(e), i = ec(r, { tabbable: !1 }, e), i.currentNode = n, a = i.nextNode()), a;
}
function Js(e, t = !0) {
	Ks(qs(e, t));
}
function Ys(e, t) {
	let n = z.useRef(t);
	(0, z.useEffect)(() => {
		n.current && (Ns = e, !Hs(W(H(e.current ? e.current[0] : void 0)), Ns.current) && e.current && Js(e.current)), n.current = !1;
	}, [e]);
}
function Xs(e, t, n) {
	B(() => {
		if (t || n) return;
		let r = e.current, i = H(r ? r[0] : void 0), a = (t) => {
			let n = G(t);
			Hs(n, e.current) ? Ns = e : Vs(n) || (Ns = null);
		};
		return i.addEventListener("focusin", a, !1), r?.forEach((e) => e.addEventListener("focusin", a, !1)), () => {
			i.removeEventListener("focusin", a, !1), r?.forEach((e) => e.removeEventListener("focusin", a, !1));
		};
	}, [
		e,
		t,
		n
	]);
}
function Zs(e) {
	let t = rc.getTreeNode(Ns);
	for (; t && t.scopeRef !== e;) {
		if (t.nodeToRestore) return !1;
		t = t.parent;
	}
	return t?.scopeRef === e;
}
function Qs(e, t, n) {
	let r = (0, z.useRef)(typeof document < "u" ? W(H(e.current ? e.current[0] : void 0)) : null);
	B(() => {
		let r = e.current, i = H(r ? r[0] : void 0);
		if (!t || n) return;
		let a = () => {
			(!Ns || Gs(Ns, e)) && Hs(W(i), e.current) && (Ns = e);
		};
		return i.addEventListener("focusin", a, !1), r?.forEach((e) => e.addEventListener("focusin", a, !1)), () => {
			i.removeEventListener("focusin", a, !1), r?.forEach((e) => e.removeEventListener("focusin", a, !1));
		};
	}, [e, n]), B(() => {
		let r = H(e.current ? e.current[0] : void 0);
		if (!t) return;
		let i = (t) => {
			if (t.key !== "Tab" || t.altKey || t.ctrlKey || t.metaKey || !Ls(e) || t.isComposing) return;
			let n = r.activeElement;
			if (!Us(n, e) || !Zs(e)) return;
			let i = rc.getTreeNode(e);
			if (!i) return;
			let a = i.nodeToRestore, o = ec(r.body, { tabbable: !0 });
			o.currentNode = n;
			let s = t.shiftKey ? o.previousNode() : o.nextNode();
			if ((!a || !a.isConnected || a === r.body) && (a = void 0, i.nodeToRestore = void 0), (!s || !Us(s, e)) && a) {
				o.currentNode = a;
				do
					s = t.shiftKey ? o.previousNode() : o.nextNode();
				while (Us(s, e));
				t.preventDefault(), t.stopPropagation(), s ? Ks(s, !0) : Vs(a) ? Ks(a, !0) : n.blur();
			}
		};
		return n || r.addEventListener("keydown", i, !0), () => {
			n || r.removeEventListener("keydown", i, !0);
		};
	}, [
		e,
		t,
		n
	]), B(() => {
		let n = H(e.current ? e.current[0] : void 0);
		if (!t) return;
		let i = rc.getTreeNode(e);
		if (i) return i.nodeToRestore = r.current ?? void 0, () => {
			let r = rc.getTreeNode(e);
			if (!r) return;
			let i = r.nodeToRestore, a = W(n);
			if (t && i && (a && Us(a, e) || a === n.body && Zs(e))) {
				let t = rc.clone();
				requestAnimationFrame(() => {
					if (n.activeElement === n.body) {
						let n = t.getTreeNode(e);
						for (; n;) {
							if (n.nodeToRestore && n.nodeToRestore.isConnected) {
								$s(n.nodeToRestore);
								return;
							}
							n = n.parent;
						}
						for (n = t.getTreeNode(e); n;) {
							if (n.scopeRef && n.scopeRef.current && rc.getTreeNode(n.scopeRef)) {
								$s(qs(n.scopeRef.current, !0));
								return;
							}
							n = n.parent;
						}
					}
				});
			}
		};
	}, [e, t]);
}
function $s(e) {
	e.dispatchEvent(new CustomEvent(Ms, {
		bubbles: !0,
		cancelable: !0
	})) && Ks(e);
}
function ec(e, t, n) {
	let r = t?.tabbable ? Sn : xn, i = H(e?.nodeType === Node.ELEMENT_NODE ? e : null), a = As(i, e || i, NodeFilter.SHOW_ELEMENT, { acceptNode(e) {
		return U(t?.from, e) || t?.tabbable && e.tagName === "INPUT" && e.getAttribute("type") === "radio" && (!zs(e) || a.currentNode.tagName === "INPUT" && a.currentNode.type === "radio" && a.currentNode.name === e.name) ? NodeFilter.FILTER_REJECT : r(e) && (!n || Hs(e, n)) && (!t?.accept || t.accept(e)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	return t?.from && (a.currentNode = t.from), a;
}
var tc = class e {
	constructor() {
		this.fastMap = /* @__PURE__ */ new Map(), this.root = new nc({ scopeRef: null }), this.fastMap.set(null, this.root);
	}
	get size() {
		return this.fastMap.size;
	}
	getTreeNode(e) {
		return this.fastMap.get(e);
	}
	addTreeNode(e, t, n) {
		let r = this.fastMap.get(t ?? null);
		if (!r) return;
		let i = new nc({ scopeRef: e });
		r.addChild(i), i.parent = r, this.fastMap.set(e, i), n && (i.nodeToRestore = n);
	}
	addNode(e) {
		this.fastMap.set(e.scopeRef, e);
	}
	removeTreeNode(e) {
		if (e === null) return;
		let t = this.fastMap.get(e);
		if (!t) return;
		let n = t.parent;
		for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && Hs(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
		let r = t.children;
		n && (n.removeChild(t), r.size > 0 && r.forEach((e) => n && n.addChild(e))), this.fastMap.delete(t.scopeRef);
	}
	*traverse(e = this.root) {
		if (e.scopeRef != null && (yield e), e.children.size > 0) for (let t of e.children) yield* this.traverse(t);
	}
	clone() {
		let t = new e();
		for (let e of this.traverse()) t.addTreeNode(e.scopeRef, e.parent?.scopeRef ?? null, e.nodeToRestore);
		return t;
	}
}, nc = class {
	constructor(e) {
		this.children = /* @__PURE__ */ new Set(), this.contain = !1, this.scopeRef = e.scopeRef;
	}
	addChild(e) {
		this.children.add(e), e.parent = this;
	}
	removeChild(e) {
		this.children.delete(e), e.parent = void 0;
	}
}, rc = new tc();
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/selection/utils.mjs
function ic(e) {
	return In() ? e.altKey : e.ctrlKey;
}
function ac(e, t) {
	let n = `[data-key="${CSS.escape(String(t))}"]`, r = e.current?.dataset.collection;
	return r && (n = `[data-collection="${CSS.escape(r)}"]${n}`), e.current?.querySelector(n);
}
var oc = /* @__PURE__ */ new WeakMap();
function sc(e) {
	let t = Pt();
	return oc.set(e, t), t;
}
function cc(e) {
	return oc.get(e);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/selection/useTypeSelect.mjs
var lc = 1e3;
function uc(e) {
	let { keyboardDelegate: t, selectionManager: n, onTypeSelect: r } = e, i = (0, z.useRef)({
		search: "",
		timeout: void 0
	});
	return (0, z.useEffect)(() => {
		let e = i.current.timeout;
		return () => {
			clearTimeout(e);
		};
	}, [i]), { typeSelectProps: {
		onKeyDownCapture: t.getKeyForSearch ? (e) => {
			if (i.current.search.length > 0 && e.key === " ") {
				if (e.preventDefault(), (!("continuePropagation" in e) || "continuePropagation" in e && !e.isPropagationStopped()) && e.stopPropagation(), i.current.search += " ", t.getKeyForSearch != null) {
					let e = t.getKeyForSearch(i.current.search, n.focusedKey);
					e ??= t.getKeyForSearch(i.current.search), e != null && (n.setFocusedKey(e), r && r(e));
				}
				clearTimeout(i.current.timeout), i.current.timeout = setTimeout(() => {
					i.current.search = "";
				}, lc);
			}
		} : void 0,
		onKeyDown: t.getKeyForSearch ? (e) => {
			let a = dc(e.key);
			if (!(!a || e.ctrlKey || e.metaKey || e.altKey || !U(e.currentTarget, G(e)) || i.current.search.length === 0 && a === " ")) {
				if (i.current.search += a, t.getKeyForSearch != null) {
					let a = t.getKeyForSearch(i.current.search, n.focusedKey);
					if (a ??= t.getKeyForSearch(i.current.search), a != null) n.setFocusedKey(a), r && r(a), e.preventDefault(), "continuePropagation" in e || e.stopPropagation();
					else {
						i.current.search = "", clearTimeout(i.current.timeout), i.current.timeout = void 0;
						return;
					}
				}
				clearTimeout(i.current.timeout), i.current.timeout = setTimeout(() => {
					i.current.search = "";
				}, lc);
			}
		} : void 0
	} };
}
function dc(e) {
	return e.length === 1 || !/^[A-Z]/i.test(e) ? e : "";
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/useUpdateLayoutEffect.mjs
function fc(e, t) {
	let n = (0, z.useRef)(!0), r = (0, z.useRef)(null);
	B(() => (n.current = !0, () => {
		n.current = !1;
	}), []), B(() => {
		n.current ? n.current = !1 : (!r.current || t.some((e, t) => !Object.is(e, r[t]))) && e(), r.current = t;
	}, t);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/selection/useSelectableCollection.mjs
function pc(e) {
	let { selectionManager: t, keyboardDelegate: n, ref: r, autoFocus: i = !1, shouldFocusWrap: a = !1, disallowEmptySelection: o = !1, disallowSelectAll: s = !1, escapeKeyBehavior: c = "clearSelection", selectOnFocus: l = t.selectionBehavior === "replace", disallowTypeAhead: u = !1, shouldUseVirtualFocus: d, allowsTabNavigation: f = !1, scrollRef: p = r, linkBehavior: m = "action", UNSTABLE_focusOnEntry: h } = e, { direction: g } = Ir(), _ = Wn(), v = (e) => {
		if (e.altKey && e.key === "Tab" && e.preventDefault(), !r.current || !U(r.current, G(e))) return;
		let i = (n, i) => {
			if (n != null) {
				if (t.isLink(n) && m === "selection" && l && !ic(e)) {
					(0, ki.flushSync)(() => {
						t.setFocusedKey(n, i);
					});
					let a = ac(r, n), o = t.getItemProps(n);
					a && _.open(a, e, o.href, o.routerOptions);
					return;
				}
				if (t.setFocusedKey(n, i), t.isLink(n) && m === "override") return;
				e.shiftKey && t.selectionMode === "multiple" ? t.extendSelection(n) : l && !ic(e) && t.replaceSelection(n);
			}
		};
		switch (e.key) {
			case "ArrowDown":
				if (n.getKeyBelow) {
					let r = t.focusedKey == null ? n.getFirstKey?.() : n.getKeyBelow?.(t.focusedKey);
					r == null && a && (r = n.getFirstKey?.(t.focusedKey)), r != null && (e.preventDefault(), i(r));
				}
				break;
			case "ArrowUp":
				if (n.getKeyAbove) {
					let r = t.focusedKey == null ? n.getLastKey?.() : n.getKeyAbove?.(t.focusedKey);
					r == null && a && (r = n.getLastKey?.(t.focusedKey)), r != null && (e.preventDefault(), i(r));
				}
				break;
			case "ArrowLeft":
				if (n.getKeyLeftOf) {
					let r = t.focusedKey == null ? n.getFirstKey?.() : n.getKeyLeftOf?.(t.focusedKey);
					r == null && a && (r = g === "rtl" ? n.getFirstKey?.(t.focusedKey) : n.getLastKey?.(t.focusedKey)), r != null && (e.preventDefault(), i(r, g === "rtl" ? "first" : "last"));
				}
				break;
			case "ArrowRight":
				if (n.getKeyRightOf) {
					let r = t.focusedKey == null ? n.getFirstKey?.() : n.getKeyRightOf?.(t.focusedKey);
					r == null && a && (r = g === "rtl" ? n.getLastKey?.(t.focusedKey) : n.getFirstKey?.(t.focusedKey)), r != null && (e.preventDefault(), i(r, g === "rtl" ? "last" : "first"));
				}
				break;
			case "Home":
				if (n.getFirstKey) {
					if (t.focusedKey === null && e.shiftKey) return;
					e.preventDefault();
					let r = n.getFirstKey(t.focusedKey, yr(e));
					t.setFocusedKey(r), r != null && (yr(e) && e.shiftKey && t.selectionMode === "multiple" ? t.extendSelection(r) : l && t.replaceSelection(r));
				}
				break;
			case "End":
				if (n.getLastKey) {
					if (t.focusedKey === null && e.shiftKey) return;
					e.preventDefault();
					let r = n.getLastKey(t.focusedKey, yr(e));
					t.setFocusedKey(r), r != null && (yr(e) && e.shiftKey && t.selectionMode === "multiple" ? t.extendSelection(r) : l && t.replaceSelection(r));
				}
				break;
			case "PageDown":
				if (n.getKeyPageBelow && t.focusedKey != null) {
					let r = n.getKeyPageBelow(t.focusedKey);
					r != null && (e.preventDefault(), i(r));
				}
				break;
			case "PageUp":
				if (n.getKeyPageAbove && t.focusedKey != null) {
					let r = n.getKeyPageAbove(t.focusedKey);
					r != null && (e.preventDefault(), i(r));
				}
				break;
			case "a":
				yr(e) && t.selectionMode === "multiple" && s !== !0 && (e.preventDefault(), t.selectAll());
				break;
			case "Escape":
				c === "clearSelection" && !o && t.selectedKeys.size !== 0 && (e.stopPropagation(), e.preventDefault(), t.clearSelection());
				break;
			case "Tab": if (!f) {
				if (e.shiftKey) r.current.focus();
				else {
					let e = ec(r.current, { tabbable: !0 }), t, n;
					do
						n = e.lastChild(), n && (t = n);
					while (n);
					let i = W();
					t && (!rn(t) || i && !Sn(i)) && ln(t);
				}
				break;
			}
		}
	}, y = (0, z.useRef)({
		top: 0,
		left: 0
	});
	wr(p, "scroll", () => {
		y.current = {
			top: p.current?.scrollTop ?? 0,
			left: p.current?.scrollLeft ?? 0
		};
	});
	let b = (e) => {
		if (t.isFocused) {
			U(e.currentTarget, G(e)) || t.setFocused(!1);
			return;
		}
		if (!U(e.currentTarget, G(e))) return;
		let i = mr();
		t.setFocused(!0);
		let a = (e) => {
			e != null && (t.setFocusedKey(e), l && !t.isSelected(e) && t.replaceSelection(e));
		};
		if (h && (i === "keyboard" || i === "virtual")) a(h === "first" ? n.getFirstKey?.() : n.getLastKey?.());
		else if (t.focusedKey == null) {
			let r = e.relatedTarget;
			r && e.currentTarget.compareDocumentPosition(r) & Node.DOCUMENT_POSITION_FOLLOWING ? a(t.lastSelectedKey ?? n.getLastKey?.()) : a(t.firstSelectedKey ?? n.getFirstKey?.());
		} else p.current && (p.current.scrollTop = y.current.top, p.current.scrollLeft = y.current.left);
		if (t.focusedKey != null && p.current) {
			let e = ac(r, t.focusedKey);
			e instanceof HTMLElement && (!rn(e) && !d && ln(e), (i === "keyboard" || h && i === "virtual") && oo(e, { containingElement: r.current }));
		}
	}, x = (e) => {
		U(e.currentTarget, e.relatedTarget) || t.setFocused(!1);
	}, S = (0, z.useRef)(!1);
	wr(r, Zt, d ? (e) => {
		let { detail: n } = e;
		e.stopPropagation(), t.setFocused(!0), n?.focusStrategy === "first" && (S.current = !0);
	} : void 0);
	let C = n.getFirstKey?.() ?? null;
	fc(() => {
		if (S.current) if (C == null) {
			let e = W();
			an(r.current), sn(e, null), t.collection.size > 0 && (S.current = !1);
		} else t.setFocusedKey(C), S.current = !1;
	}, [C, t.collection.size]), fc(() => {
		t.collection.size > 0 && (S.current = !1);
	}, [t.focusedKey]), wr(r, Xt, d ? (e) => {
		e.stopPropagation(), t.setFocused(!1), e.detail?.clearFocusKey && t.setFocusedKey(null);
	} : void 0);
	let w = (0, z.useRef)(i), T = (0, z.useRef)(!1);
	(0, z.useEffect)(() => {
		if (w.current) {
			let e = null;
			i === "first" && (e = n.getFirstKey?.() ?? null), i === "last" && (e = n.getLastKey?.() ?? null);
			let a = t.selectedKeys;
			if (a.size) {
				for (let n of a) if (t.canSelectItem(n)) {
					e = n;
					break;
				}
			}
			t.setFocused(!0), t.setFocusedKey(e), e == null && !d && r.current && gi(r.current), t.collection.size > 0 && (w.current = !1, T.current = !0);
		}
	});
	let ee = (0, z.useRef)(t.focusedKey), E = (0, z.useRef)(null);
	(0, z.useEffect)(() => {
		if (t.isFocused && t.focusedKey != null && (t.focusedKey !== ee.current || T.current) && p.current && r.current) {
			let e = mr(), n = ac(r, t.focusedKey);
			if (!(n instanceof HTMLElement)) return;
			(e === "keyboard" || T.current) && (E.current && cancelAnimationFrame(E.current), E.current = requestAnimationFrame(() => {
				p.current && (q(p.current, n), e !== "virtual" && oo(n, { containingElement: r.current }));
			}));
		}
		!d && t.isFocused && t.focusedKey == null && ee.current != null && r.current && gi(r.current), ee.current = t.focusedKey, T.current = !1;
	}), (0, z.useEffect)(() => () => {
		E.current && cancelAnimationFrame(E.current);
	}, []), wr(r, "react-aria-focus-scope-restore", (e) => {
		e.preventDefault(), t.setFocused(!0);
	});
	let D = {
		onKeyDown: v,
		onFocus: b,
		onBlur: x,
		onMouseDown(e) {
			p.current === G(e) && e.preventDefault();
		}
	}, { typeSelectProps: O } = uc({
		keyboardDelegate: n,
		selectionManager: t
	});
	u || (D = V(O, D));
	let te;
	d || (te = t.focusedKey == null ? 0 : -1);
	let k = sc(t.collection);
	return { collectionProps: V(D, {
		tabIndex: te,
		"data-collection": k
	}) };
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/selection/DOMLayoutDelegate.mjs
var mc = class {
	constructor(e) {
		this.ref = e;
	}
	getItemRect(e) {
		let t = this.ref.current;
		if (!t) return null;
		let n = e == null ? null : ac(this.ref, e);
		if (!n) return null;
		let r = t.getBoundingClientRect(), i = n.getBoundingClientRect();
		return {
			x: i.left - r.left - t.clientLeft + t.scrollLeft,
			y: i.top - r.top - t.clientTop + t.scrollTop,
			width: i.width,
			height: i.height
		};
	}
	getContentSize() {
		let e = this.ref.current;
		return {
			width: e?.scrollWidth ?? 0,
			height: e?.scrollHeight ?? 0
		};
	}
	getVisibleRect() {
		let e = this.ref.current;
		return {
			x: e?.scrollLeft ?? 0,
			y: e?.scrollTop ?? 0,
			width: e?.clientWidth ?? 0,
			height: e?.clientHeight ?? 0
		};
	}
}, hc = class {
	constructor(...e) {
		if (e.length === 1) {
			let t = e[0];
			this.collection = t.collection, this.ref = t.ref, this.collator = t.collator, this.disabledKeys = t.disabledKeys || /* @__PURE__ */ new Set(), this.disabledBehavior = t.disabledBehavior || "all", this.orientation = t.orientation || "vertical", this.direction = t.direction, this.layout = t.layout || "stack", this.layoutDelegate = t.layoutDelegate || new mc(t.ref);
		} else this.collection = e[0], this.disabledKeys = e[1], this.ref = e[2], this.collator = e[3], this.layout = "stack", this.orientation = "vertical", this.disabledBehavior = "all", this.layoutDelegate = new mc(this.ref);
		this.layout === "stack" && this.orientation === "vertical" && (this.getKeyLeftOf = void 0, this.getKeyRightOf = void 0);
	}
	isDisabled(e) {
		return this.disabledBehavior === "all" && (e.props?.isDisabled || this.disabledKeys.has(e.key)) && e.props?.disabledBehavior !== "selection";
	}
	findNextNonDisabled(e, t, n = !1) {
		let r = e;
		for (; r != null;) {
			let e = this.collection.getItem(r);
			if (e?.type === "item" && (n || !this.isDisabled(e))) return r;
			r = t(r);
		}
		return null;
	}
	getNextKey(e, t) {
		let n = e;
		return n = this.collection.getKeyAfter(n), this.findNextNonDisabled(n, (e) => this.collection.getKeyAfter(e), t?.includeDisabled);
	}
	getPreviousKey(e, t) {
		let n = e;
		return n = this.collection.getKeyBefore(n), this.findNextNonDisabled(n, (e) => this.collection.getKeyBefore(e), t?.includeDisabled);
	}
	findKey(e, t, n) {
		let r = e, i = this.layoutDelegate.getItemRect(r);
		if (!i || r == null) return null;
		let a = i;
		do {
			if (r = t(r), r == null) break;
			i = this.layoutDelegate.getItemRect(r);
		} while (i && n(a, i) && r != null);
		return r;
	}
	isSameRow(e, t) {
		return e.y === t.y || e.x !== t.x;
	}
	isSameColumn(e, t) {
		return e.x === t.x || e.y !== t.y;
	}
	isReversed(e) {
		let t = this.getNextKey(e), n = ac(this.ref, e);
		if (t != null) {
			let e = ac(this.ref, t);
			return !n || !e ? !1 : n.getBoundingClientRect().top > e.getBoundingClientRect().top;
		}
		let r = this.getPreviousKey(e);
		if (r != null) {
			let e = ac(this.ref, r);
			return !n || !e ? !1 : e.getBoundingClientRect().top > n.getBoundingClientRect().top;
		}
		return !1;
	}
	getKeyBelow(e, t) {
		return this.layout === "grid" && this.orientation === "vertical" ? this.findKey(e, (e) => this.getNextKey(e, t), this.isSameRow) : this.orientation === "vertical" && this.isReversed(e) ? this.getPreviousKey(e, t) : this.getNextKey(e, t);
	}
	getKeyAbove(e, t) {
		return this.layout === "grid" && this.orientation === "vertical" ? this.findKey(e, (e) => this.getPreviousKey(e, t), this.isSameRow) : this.orientation === "vertical" && this.isReversed(e) ? this.getNextKey(e, t) : this.getPreviousKey(e, t);
	}
	getNextColumn(e, t, n) {
		return t ? this.getPreviousKey(e, n) : this.getNextKey(e, n);
	}
	getKeyRightOf(e, t) {
		let n = this.direction === "ltr" ? "getKeyRightOf" : "getKeyLeftOf";
		return this.layoutDelegate[n] ? (e = this.layoutDelegate[n](e), this.findNextNonDisabled(e, (e) => this.layoutDelegate[n](e), t?.includeDisabled)) : this.layout === "grid" ? this.orientation === "vertical" ? this.getNextColumn(e, this.direction === "rtl", t) : this.findKey(e, (e) => this.getNextColumn(e, this.direction === "rtl", t), this.isSameColumn) : this.orientation === "horizontal" ? this.getNextColumn(e, this.direction === "rtl", t) : null;
	}
	getKeyLeftOf(e, t) {
		let n = this.direction === "ltr" ? "getKeyLeftOf" : "getKeyRightOf";
		return this.layoutDelegate[n] ? (e = this.layoutDelegate[n](e), this.findNextNonDisabled(e, (e) => this.layoutDelegate[n](e), t?.includeDisabled)) : this.layout === "grid" ? this.orientation === "vertical" ? this.getNextColumn(e, this.direction === "ltr", t) : this.findKey(e, (e) => this.getNextColumn(e, this.direction === "ltr", t), this.isSameColumn) : this.orientation === "horizontal" ? this.getNextColumn(e, this.direction === "ltr", t) : null;
	}
	getFirstKey() {
		let e = this.collection.getFirstKey();
		return this.findNextNonDisabled(e, (e) => this.collection.getKeyAfter(e));
	}
	getLastKey() {
		let e = this.collection.getLastKey();
		return this.findNextNonDisabled(e, (e) => this.collection.getKeyBefore(e));
	}
	getKeyPageAbove(e) {
		let t = this.ref.current, n = this.layoutDelegate.getItemRect(e);
		if (!n) return null;
		let r = this.isReversed(e);
		if (t && !ro(t)) return this.getFirstKey();
		let i = e;
		if (this.orientation === "horizontal") {
			let e = Math.max(0, n.x + n.width - this.layoutDelegate.getVisibleRect().width);
			for (; n && n.x > e && i != null;) i = this.getKeyAbove(i), n = i == null ? null : this.layoutDelegate.getItemRect(i);
		} else {
			let e = this.layoutDelegate.getVisibleRect(), t = r ? n.y - e.height : Math.max(0, n.y + n.height - e.height);
			for (; n && n.y > t && i != null;) i = this.getKeyAbove(i), n = i == null ? null : this.layoutDelegate.getItemRect(i);
		}
		return i ?? (r ? this.getLastKey() : this.getFirstKey());
	}
	getKeyPageBelow(e) {
		let t = this.ref.current, n = this.layoutDelegate.getItemRect(e);
		if (!n) return null;
		let r = this.isReversed(e);
		if (t && !ro(t)) return this.getLastKey();
		let i = e;
		if (this.orientation === "horizontal") {
			let e = Math.min(this.layoutDelegate.getContentSize().width, n.x - n.width + this.layoutDelegate.getVisibleRect().width);
			for (; n && n.x < e && i != null;) i = this.getKeyBelow(i), n = i == null ? null : this.layoutDelegate.getItemRect(i);
		} else {
			let e = Math.min(this.layoutDelegate.getContentSize().height, n.y - n.height + this.layoutDelegate.getVisibleRect().height);
			for (; n && n.y < e && i != null;) i = this.getKeyBelow(i), n = i == null ? null : this.layoutDelegate.getItemRect(i);
		}
		return i ?? (r ? this.getFirstKey() : this.getLastKey());
	}
	getKeyForSearch(e, t) {
		if (!this.collator) return null;
		let n = this.collection, r = t || this.getFirstKey();
		for (; r != null;) {
			let t = n.getItem(r);
			if (!t) return null;
			let i = t.textValue.slice(0, e.length);
			if (t.textValue && this.collator.compare(i, e) === 0) return r;
			r = this.getNextKey(r);
		}
		return null;
	}
}, gc = /* @__PURE__ */ new Map();
function _c(e) {
	let { locale: t } = Ir(), n = t + (e ? Object.entries(e).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
	if (gc.has(n)) return gc.get(n);
	let r = new Intl.Collator(t, e);
	return gc.set(n, r), r;
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/selection/useSelectableList.mjs
function vc(e) {
	let { selectionManager: t, collection: n, disabledKeys: r, ref: i, keyboardDelegate: a, layoutDelegate: o, orientation: s } = e, c = _c({
		usage: "search",
		sensitivity: "base"
	}), l = t.disabledBehavior, u = (0, z.useMemo)(() => a || new hc({
		collection: n,
		disabledKeys: r,
		disabledBehavior: l,
		ref: i,
		collator: c,
		layoutDelegate: o,
		orientation: s
	}), [
		a,
		o,
		n,
		r,
		i,
		c,
		l,
		s
	]), { collectionProps: d } = pc({
		...e,
		ref: i,
		selectionManager: t,
		keyboardDelegate: u
	});
	return { listProps: d };
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/listbox/useListBox.mjs
function yc(e, t, n) {
	let r = ia(e, { labelable: !0 }), i = e.selectionBehavior || "toggle", a = e.orientation || "vertical", o = e.linkBehavior || (i === "replace" ? "action" : "override");
	i === "toggle" && o === "action" && (o = "override");
	let { listProps: s } = vc({
		...e,
		ref: n,
		selectionManager: t.selectionManager,
		collection: t.collection,
		disabledKeys: t.disabledKeys,
		linkBehavior: o
	}), { focusWithinProps: c } = ka({
		onFocusWithin: e.onFocus,
		onBlurWithin: e.onBlur,
		onFocusWithinChange: e.onFocusChange
	}), l = Pt(e.id);
	Es.set(t, {
		id: l,
		shouldUseVirtualFocus: e.shouldUseVirtualFocus,
		shouldSelectOnPressUp: e.shouldSelectOnPressUp,
		shouldFocusOnHover: e.shouldFocusOnHover,
		isVirtualized: e.isVirtualized,
		onAction: e.onAction,
		linkBehavior: o,
		UNSTABLE_itemBehavior: e.UNSTABLE_itemBehavior
	});
	let { labelProps: u, fieldProps: d } = Va({
		...e,
		id: l,
		labelElementType: "span"
	});
	return {
		labelProps: u,
		listBoxProps: V(r, c, t.selectionManager.selectionMode === "multiple" ? { "aria-multiselectable": "true" } : {}, {
			role: "listbox",
			"aria-orientation": a,
			...V(d, s)
		})
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/interactions/useLongPress.mjs
var bc = 500;
function xc(e) {
	let { isDisabled: t, onLongPressStart: n, onLongPressEnd: r, onLongPress: i, threshold: a = bc, accessibilityDescription: o } = e, s = (0, z.useRef)(void 0), { addGlobalListener: c, removeGlobalListener: l } = ma(), { pressProps: u } = ba({
		isDisabled: t,
		onPressStart(e) {
			if (e.continuePropagation(), (e.pointerType === "mouse" || e.pointerType === "touch") && (n && n({
				...e,
				type: "longpressstart"
			}), s.current = setTimeout(() => {
				e.target.dispatchEvent(new PointerEvent("pointercancel", { bubbles: !0 })), H(e.target).activeElement !== e.target && ln(e.target), i && i({
					...e,
					type: "longpress"
				}), s.current = void 0;
			}, a), e.pointerType === "touch")) {
				let t = (e) => {
					e.preventDefault();
				}, n = Qt(e.target);
				c(e.target, "contextmenu", t, { once: !0 }), c(n, "pointerup", () => {
					setTimeout(() => {
						l(e.target, "contextmenu", t);
					}, 30);
				}, { once: !0 });
			}
		},
		onPressEnd(e) {
			s.current && clearTimeout(s.current), r && (e.pointerType === "mouse" || e.pointerType === "touch") && r({
				...e,
				type: "longpressend"
			});
		}
	});
	return { longPressProps: V(u, lo(i && !t ? o : void 0)) };
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/selection/useSelectableItem.mjs
function Sc(e) {
	let { id: t, selectionManager: n, key: r, ref: i, shouldSelectOnPressUp: a, shouldUseVirtualFocus: o, focus: s, isDisabled: c, onAction: l, allowsDifferentPressOrigin: u, linkBehavior: d = "action" } = e, f = Wn();
	t = Pt(t);
	let p = (e) => {
		if (e.pointerType === "keyboard" && ic(e)) n.toggleSelection(r);
		else {
			if (n.selectionMode === "none") return;
			if (n.isLink(r)) {
				if (d === "selection" && i.current) {
					let t = n.getItemProps(r);
					f.open(i.current, e, t.href, t.routerOptions), n.setSelectedKeys(n.selectedKeys);
					return;
				} else if (d === "override" || d === "none") return;
			}
			n.selectionMode === "single" ? n.isSelected(r) && !n.disallowEmptySelection ? n.toggleSelection(r) : n.replaceSelection(r) : e && e.shiftKey ? n.extendSelection(r) : n.selectionBehavior === "toggle" || e && (yr(e) || e.pointerType === "touch" || e.pointerType === "virtual") ? n.toggleSelection(r) : n.replaceSelection(r);
		}
	};
	(0, z.useEffect)(() => {
		r === n.focusedKey && n.isFocused && (o ? an(i.current) : s ? s() : W() !== i.current && i.current && gi(i.current));
	}, [
		i,
		r,
		n.focusedKey,
		n.childFocusStrategy,
		n.isFocused,
		o
	]), c ||= n.isDisabled(r);
	let m = {};
	!o && !c ? m = {
		tabIndex: r === n.focusedKey ? 0 : -1,
		onFocus(e) {
			G(e) === i.current && n.setFocusedKey(r);
		}
	} : c && (m.onMouseDown = (e) => {
		e.preventDefault();
	}), (0, z.useEffect)(() => {
		c && n.focusedKey === r && n.setFocusedKey(null);
	}, [
		n,
		c,
		r
	]);
	let h = n.isLink(r) && d === "override", g = l && e.UNSTABLE_itemBehavior === "action", _ = n.isLink(r) && d !== "selection" && d !== "none", v = !c && n.canSelectItem(r) && !h && !g, y = (l || _) && !c, b = y && (n.selectionBehavior === "replace" ? !v : !v || n.isEmpty), x = y && v && n.selectionBehavior === "replace", S = b || x, C = (0, z.useRef)(null), w = S && v, T = (0, z.useRef)(!1), ee = (0, z.useRef)(!1), E = n.getItemProps(r), D = (e) => {
		l && (l(), i.current?.dispatchEvent(new CustomEvent("react-aria-item-action", { bubbles: !0 }))), _ && i.current && f.open(i.current, e, E.href, E.routerOptions);
	}, O = { ref: i };
	if (a ? (O.onPressStart = (e) => {
		C.current = e.pointerType, T.current = w, e.pointerType === "keyboard" && (!S || wc(e.key)) && p(e);
	}, u ? (O.onPressUp = b ? void 0 : (e) => {
		e.pointerType === "mouse" && v && p(e);
	}, O.onPress = b ? D : (e) => {
		e.pointerType !== "keyboard" && e.pointerType !== "mouse" && v && p(e);
	}) : O.onPress = (e) => {
		if (b || x && e.pointerType !== "mouse") {
			if (e.pointerType === "keyboard" && !Cc(e.key)) return;
			D(e);
		} else e.pointerType !== "keyboard" && v && p(e);
	}) : (O.onPressStart = (e) => {
		C.current = e.pointerType, T.current = w, ee.current = b, v && (e.pointerType === "mouse" && !b || e.pointerType === "keyboard" && (!y || wc(e.key))) && p(e);
	}, O.onPress = (e) => {
		(e.pointerType === "touch" || e.pointerType === "pen" || e.pointerType === "virtual" || e.pointerType === "keyboard" && S && Cc(e.key) || e.pointerType === "mouse" && ee.current) && (S ? D(e) : v && p(e));
	}), m["data-collection"] = cc(n.collection), m["data-key"] = r, O.preventFocusOnPress = o, o && (O = V(O, {
		onPressStart(e) {
			e.pointerType !== "touch" && (n.setFocused(!0), n.setFocusedKey(r));
		},
		onPress(e) {
			e.pointerType === "touch" && (n.setFocused(!0), n.setFocusedKey(r));
		}
	})), E) for (let e of [
		"onPressStart",
		"onPressEnd",
		"onPressChange",
		"onPress",
		"onPressUp",
		"onClick"
	]) E[e] && (O[e] = _t(O[e], E[e]));
	let { pressProps: te, isPressed: k } = ba(O), ne = x ? (e) => {
		C.current === "mouse" && (e.stopPropagation(), e.preventDefault(), D(e));
	} : void 0, { longPressProps: re } = xc({
		isDisabled: !w,
		onLongPress(e) {
			e.pointerType === "touch" && (p(e), n.setSelectionBehavior("toggle"));
		}
	}), ie = (e) => {
		C.current === "touch" && T.current && e.preventDefault();
	}, ae = d !== "none" && n.isLink(r) ? (e) => {
		Kn.isOpening || e.preventDefault();
	} : void 0;
	return {
		itemProps: V(m, v || b || o && !c ? te : {}, w ? re : {}, {
			onDoubleClick: ne,
			onDragStartCapture: ie,
			onClick: ae,
			id: t
		}, o ? { onMouseDown: (e) => e.preventDefault() } : void 0),
		isPressed: k,
		isSelected: n.isSelected(r),
		isFocused: n.isFocused && n.focusedKey === r,
		isDisabled: c,
		allowsSelection: v,
		hasAction: S
	};
}
function Cc(e) {
	return e === "Enter";
}
function wc(e) {
	return e === " ";
}
//#endregion
//#region ../../node_modules/.pnpm/react-stately@3.48.0_react@19.2.4/node_modules/react-stately/dist/private/collections/getChildNodes.mjs
function Tc(e, t) {
	return typeof t.getChildren == "function" ? t.getChildren(e.key) : e.childNodes;
}
function Ec(e) {
	return Dc(e, 0);
}
function Dc(e, t) {
	if (t < 0) return;
	let n = 0;
	for (let r of e) {
		if (n === t) return r;
		n++;
	}
}
function Oc(e, t, n) {
	if (t.parentKey === n.parentKey) return t.index - n.index;
	let r = [...kc(e, t), t], i = [...kc(e, n), n], a = r.slice(0, i.length).findIndex((e, t) => e !== i[t]);
	return a === -1 ? r.findIndex((e) => e === n) >= 0 ? 1 : (i.findIndex((e) => e === t), -1) : (t = r[a], n = i[a], t.index - n.index);
}
function kc(e, t) {
	let n = [], r = t;
	for (; r?.parentKey != null;) r = e.getItem(r.parentKey), r && n.unshift(r);
	return n;
}
//#endregion
//#region ../../node_modules/.pnpm/react-stately@3.48.0_react@19.2.4/node_modules/react-stately/dist/private/collections/getItemCount.mjs
var Ac = /* @__PURE__ */ new WeakMap();
function jc(e) {
	let t = Ac.get(e);
	if (t != null) return t;
	let n = 0, r = (t) => {
		for (let i of t) i.type === "section" ? r(Tc(i, e)) : i.type === "item" && n++;
	};
	return r(e), Ac.set(e, n), n;
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/listbox/useOption.mjs
function Mc(e, t, n) {
	let { key: r } = e, i = Es.get(t), a = e.isDisabled ?? t.selectionManager.isDisabled(r), o = e.isSelected ?? t.selectionManager.isSelected(r), s = e.shouldSelectOnPressUp ?? i?.shouldSelectOnPressUp, c = e.shouldFocusOnHover ?? i?.shouldFocusOnHover, l = e.shouldUseVirtualFocus ?? i?.shouldUseVirtualFocus, u = e.isVirtualized ?? i?.isVirtualized, d = It(), f = It(), p = {
		role: "option",
		"aria-disabled": a || void 0,
		"aria-selected": t.selectionManager.selectionMode === "none" ? void 0 : o,
		"aria-label": e["aria-label"],
		"aria-labelledby": d,
		"aria-describedby": f
	}, m = t.collection.getItem(r);
	if (u) {
		let e = Number(m?.index);
		p["aria-posinset"] = Number.isNaN(e) ? void 0 : e + 1, p["aria-setsize"] = jc(t.collection);
	}
	let h = i?.onAction ? () => i?.onAction?.(r) : void 0, g = Os(t, r), { itemProps: _, isPressed: v, isFocused: y, hasAction: b, allowsSelection: x } = Sc({
		selectionManager: t.selectionManager,
		key: r,
		ref: n,
		shouldSelectOnPressUp: s,
		allowsDifferentPressOrigin: s && c,
		isVirtualized: u,
		shouldUseVirtualFocus: l,
		isDisabled: a,
		onAction: h || m?.props?.onAction ? _t(m?.props?.onAction, h) : void 0,
		linkBehavior: i?.linkBehavior,
		UNSTABLE_itemBehavior: i?.UNSTABLE_itemBehavior,
		id: g
	}), { hoverProps: S } = Ia({
		isDisabled: a || !c,
		onHoverStart() {
			pr() || (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(r));
		}
	}), C = ia(m?.props);
	delete C.id;
	let w = Yn(m?.props);
	return {
		optionProps: {
			...p,
			...V(C, _, S, w),
			id: g
		},
		labelProps: { id: d },
		descriptionProps: { id: f },
		isFocused: y,
		isFocusVisible: y && t.selectionManager.isFocused && pr(),
		isSelected: o,
		isDisabled: a,
		isPressed: v,
		allowsSelection: x,
		hasAction: b
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/listbox/useListBoxSection.mjs
function Nc(e) {
	let { heading: t, "aria-label": n } = e, r = Pt();
	return {
		itemProps: { role: "presentation" },
		headingProps: t ? {
			id: r,
			role: "presentation",
			onMouseDown: (e) => {
				e.preventDefault();
			}
		} : {},
		groupProps: {
			role: "group",
			"aria-label": n,
			"aria-labelledby": t ? r : void 0
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/inertValue.mjs
function Pc(e) {
	let t = z.version.split(".");
	return parseInt(t[0], 10) >= 19 ? e : e ? "true" : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/react-stately@3.48.0_react@19.2.4/node_modules/react-stately/dist/private/list/ListCollection.mjs
var Fc = class {
	constructor(e) {
		this.keyMap = /* @__PURE__ */ new Map(), this.firstKey = null, this.lastKey = null, this.iterable = e;
		let t = (e) => {
			if (this.keyMap.set(e.key, e), e.childNodes && e.type === "section") for (let n of e.childNodes) t(n);
		};
		for (let n of e) t(n);
		let n = null, r = 0, i = 0;
		for (let [e, t] of this.keyMap) n ? (n.nextKey = e, t.prevKey = n.key) : (this.firstKey = e, t.prevKey = void 0), t.type === "item" && (t.index = r++), (t.type === "section" || t.type === "item") && i++, n = t, n.nextKey = void 0;
		this._size = i, this.lastKey = n?.key ?? null;
	}
	*[Symbol.iterator]() {
		yield* this.iterable;
	}
	get size() {
		return this._size;
	}
	getKeys() {
		return this.keyMap.keys();
	}
	getKeyBefore(e) {
		let t = this.keyMap.get(e);
		return t ? t.prevKey ?? null : null;
	}
	getKeyAfter(e) {
		let t = this.keyMap.get(e);
		return t ? t.nextKey ?? null : null;
	}
	getFirstKey() {
		return this.firstKey;
	}
	getLastKey() {
		return this.lastKey;
	}
	getItem(e) {
		return this.keyMap.get(e) ?? null;
	}
	at(e) {
		let t = [...this.getKeys()];
		return this.getItem(t[e]);
	}
	getChildren(e) {
		return this.keyMap.get(e)?.childNodes || [];
	}
}, Ic = class e extends Set {
	constructor(t, n, r) {
		super(t), t instanceof e ? (this.anchorKey = n ?? t.anchorKey, this.currentKey = r ?? t.currentKey) : (this.anchorKey = n ?? null, this.currentKey = r ?? null);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/react-stately@3.48.0_react@19.2.4/node_modules/react-stately/dist/private/selection/useMultipleSelectionState.mjs
function Lc(e, t) {
	if (e.size !== t.size) return !1;
	for (let n of e) if (!t.has(n)) return !1;
	return !0;
}
function Rc(e) {
	let { selectionMode: t = "none", disallowEmptySelection: n = !1, allowDuplicateSelectionEvents: r, selectionBehavior: i = "toggle", disabledBehavior: a = "all" } = e, o = (0, z.useRef)(!1), [, s] = (0, z.useState)(!1), c = (0, z.useRef)(null), l = (0, z.useRef)(null), [, u] = (0, z.useState)(null), [d, f] = Zr((0, z.useMemo)(() => zc(e.selectedKeys), [e.selectedKeys]), (0, z.useMemo)(() => zc(e.defaultSelectedKeys, new Ic()), [e.defaultSelectedKeys]), e.onSelectionChange), p = (0, z.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [e.disabledKeys]), [m, h] = (0, z.useState)(i);
	i === "replace" && m === "toggle" && typeof d == "object" && d.size === 0 && h("replace");
	let g = (0, z.useRef)(i);
	return (0, z.useEffect)(() => {
		i !== g.current && (h(i), g.current = i);
	}, [i]), {
		selectionMode: t,
		disallowEmptySelection: n,
		selectionBehavior: m,
		setSelectionBehavior: h,
		get isFocused() {
			return o.current;
		},
		setFocused(e) {
			o.current = e, s(e);
		},
		get focusedKey() {
			return c.current;
		},
		get childFocusStrategy() {
			return l.current;
		},
		setFocusedKey(e, t = "first") {
			c.current = e, l.current = t, u(e);
		},
		selectedKeys: d,
		setSelectedKeys(e) {
			(r || !Lc(e, d)) && f(e);
		},
		disabledKeys: p,
		disabledBehavior: a
	};
}
function zc(e, t) {
	return e ? e === "all" ? "all" : new Ic(e) : t;
}
//#endregion
//#region ../../node_modules/.pnpm/react-stately@3.48.0_react@19.2.4/node_modules/react-stately/dist/private/selection/SelectionManager.mjs
var Bc = class e {
	constructor(e, t, n) {
		this.collection = e, this.state = t, this.allowsCellSelection = n?.allowsCellSelection ?? !1, this._isSelectAll = null, this.layoutDelegate = n?.layoutDelegate || null, this.fullCollection = n?.fullCollection || null;
	}
	get selectionMode() {
		return this.state.selectionMode;
	}
	get disallowEmptySelection() {
		return this.state.disallowEmptySelection;
	}
	get selectionBehavior() {
		return this.state.selectionBehavior;
	}
	setSelectionBehavior(e) {
		this.state.setSelectionBehavior(e);
	}
	get isFocused() {
		return this.state.isFocused;
	}
	setFocused(e) {
		this.state.setFocused(e);
	}
	get focusedKey() {
		return this.state.focusedKey;
	}
	get childFocusStrategy() {
		return this.state.childFocusStrategy;
	}
	setFocusedKey(e, t) {
		(e == null || this.collection.getItem(e)) && this.state.setFocusedKey(e, t);
	}
	get selectedKeys() {
		return this.state.selectedKeys === "all" ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys;
	}
	get rawSelection() {
		return this.state.selectedKeys;
	}
	isSelected(e) {
		if (this.state.selectionMode === "none") return !1;
		let t = this.getKey(e);
		return t == null ? !1 : this.state.selectedKeys === "all" ? this.canSelectItem(t) : this.state.selectedKeys.has(t);
	}
	get isEmpty() {
		return this.state.selectedKeys !== "all" && this.state.selectedKeys.size === 0;
	}
	get isSelectAll() {
		if (this.isEmpty) return !1;
		if (this.state.selectedKeys === "all") return !0;
		if (this._isSelectAll != null) return this._isSelectAll;
		let e = this.getSelectAllKeys(), t = this.state.selectedKeys;
		return this._isSelectAll = e.every((e) => t.has(e)), this._isSelectAll;
	}
	get firstSelectedKey() {
		let e = null;
		for (let t of this.state.selectedKeys) {
			let n = this.collection.getItem(t);
			(!e || n && Oc(this.collection, n, e) < 0) && (e = n);
		}
		return e?.key ?? null;
	}
	get lastSelectedKey() {
		let e = null;
		for (let t of this.state.selectedKeys) {
			let n = this.collection.getItem(t);
			(!e || n && Oc(this.collection, n, e) > 0) && (e = n);
		}
		return e?.key ?? null;
	}
	get disabledKeys() {
		return this.state.disabledKeys;
	}
	get disabledBehavior() {
		return this.state.disabledBehavior;
	}
	extendSelection(e) {
		if (this.selectionMode === "none") return;
		if (this.selectionMode === "single") {
			this.replaceSelection(e);
			return;
		}
		let t = this.getKey(e);
		if (t == null) return;
		let n;
		if (this.state.selectedKeys === "all") n = new Ic([t], t, t);
		else {
			let e = this.state.selectedKeys, r = e.anchorKey ?? t;
			n = new Ic(e, r, t);
			for (let i of this.getKeyRange(r, e.currentKey ?? t)) n.delete(i);
			for (let e of this.getKeyRange(t, r)) this.canSelectItem(e) && n.add(e);
		}
		this.state.setSelectedKeys(n);
	}
	getKeyRange(e, t) {
		let n = this.collection.getItem(e), r = this.collection.getItem(t);
		return n && r ? Oc(this.collection, n, r) <= 0 ? this.getKeyRangeInternal(e, t) : this.getKeyRangeInternal(t, e) : [];
	}
	getKeyRangeInternal(e, t) {
		if (this.layoutDelegate?.getKeyRange) return this.layoutDelegate.getKeyRange(e, t);
		let n = [], r = e;
		for (; r != null;) {
			let e = this.collection.getItem(r);
			if (e && (e.type === "item" || e.type === "cell" && this.allowsCellSelection) && n.push(r), r === t) return n;
			r = this.collection.getKeyAfter(r);
		}
		return [];
	}
	getKey(e) {
		let t = this.collection.getItem(e);
		if (!t || t.type === "cell" && this.allowsCellSelection) return e;
		for (; t && t.type !== "item" && t.parentKey != null;) t = this.collection.getItem(t.parentKey);
		return !t || t.type !== "item" ? null : t.key;
	}
	toggleSelection(e) {
		if (this.selectionMode === "none") return;
		if (this.selectionMode === "single" && !this.isSelected(e)) {
			this.replaceSelection(e);
			return;
		}
		let t = this.getKey(e);
		if (t == null) return;
		let n = new Ic(this.state.selectedKeys === "all" ? this.getSelectAllKeys() : this.state.selectedKeys);
		n.has(t) ? n.delete(t) : this.canSelectItem(t) && (n.add(t), n.anchorKey = t, n.currentKey = t), !(this.disallowEmptySelection && n.size === 0) && this.state.setSelectedKeys(n);
	}
	replaceSelection(e) {
		if (this.selectionMode === "none") return;
		let t = this.getKey(e);
		if (t == null) return;
		let n = this.canSelectItem(t) ? new Ic([t], t, t) : new Ic();
		this.state.setSelectedKeys(n);
	}
	setSelectedKeys(e) {
		if (this.selectionMode === "none") return;
		let t = new Ic();
		for (let n of e) {
			let e = this.getKey(n);
			if (e != null && (t.add(e), this.selectionMode === "single")) break;
		}
		this.state.setSelectedKeys(t);
	}
	getSelectAllKeys() {
		let e = this.fullCollection ?? this.collection, t = [], n = (r) => {
			for (; r != null;) {
				if (this.canSelectItemIn(r, e)) {
					let i = e.getItem(r);
					i?.type === "item" && t.push(r), i?.hasChildNodes && (this.allowsCellSelection || i.type !== "item") && n(Ec(Tc(i, e))?.key ?? null);
				}
				r = e.getKeyAfter(r);
			}
		};
		return n(e.getFirstKey()), t;
	}
	selectAll() {
		!this.isSelectAll && this.selectionMode === "multiple" && this.state.setSelectedKeys("all");
	}
	clearSelection() {
		!this.disallowEmptySelection && (this.state.selectedKeys === "all" || this.state.selectedKeys.size > 0) && this.state.setSelectedKeys(new Ic());
	}
	toggleSelectAll() {
		this.isSelectAll ? this.clearSelection() : this.selectAll();
	}
	select(e, t) {
		this.selectionMode !== "none" && (this.selectionMode === "single" ? this.isSelected(e) && !this.disallowEmptySelection ? this.toggleSelection(e) : this.replaceSelection(e) : this.selectionBehavior === "toggle" || t && (t.pointerType === "touch" || t.pointerType === "virtual") ? this.toggleSelection(e) : this.replaceSelection(e));
	}
	isSelectionEqual(e) {
		if (e === this.state.selectedKeys) return !0;
		let t = this.selectedKeys;
		if (e.size !== t.size) return !1;
		for (let n of e) if (!t.has(n)) return !1;
		for (let n of t) if (!e.has(n)) return !1;
		return !0;
	}
	canSelectItem(e) {
		return this.canSelectItemIn(e, this.collection);
	}
	canSelectItemIn(e, t) {
		if (this.state.selectionMode === "none" || this.state.disabledKeys.has(e)) return !1;
		let n = t.getItem(e);
		return !(!n || n?.props?.isDisabled || n.type === "cell" && !this.allowsCellSelection);
	}
	isDisabled(e) {
		let t = this.collection.getItem(e);
		return this.state.disabledBehavior === "all" && (this.state.disabledKeys.has(e) || !!t?.props?.isDisabled) && t?.props?.disabledBehavior !== "selection";
	}
	isLink(e) {
		return !!this.collection.getItem(e)?.props?.href;
	}
	getItemProps(e) {
		return this.collection.getItem(e)?.props;
	}
	withCollection(t) {
		return new e(t, this.state, {
			allowsCellSelection: this.allowsCellSelection,
			layoutDelegate: this.layoutDelegate || void 0,
			fullCollection: this.fullCollection ?? this.collection
		});
	}
}, Vc = class {
	build(e, t) {
		return this.context = t, Hc(() => this.iterateCollection(e));
	}
	*iterateCollection(e) {
		let { children: t, items: n } = e;
		if (z.isValidElement(t) && t.type === z.Fragment) yield* this.iterateCollection({
			children: t.props.children,
			items: n
		});
		else if (typeof t == "function") {
			if (!n) throw Error("props.children was a function but props.items is missing");
			let e = 0;
			for (let r of n) yield* this.getFullNode({
				value: r,
				index: e
			}, { renderer: t }), e++;
		} else {
			let e = [];
			z.Children.forEach(t, (t) => {
				t && e.push(t);
			});
			let n = 0;
			for (let t of e) {
				let e = this.getFullNode({
					element: t,
					index: n
				}, {});
				for (let t of e) n++, yield t;
			}
		}
	}
	getKey(e, t, n, r) {
		if (e.key != null) return e.key;
		if (t.type === "cell" && t.key != null) return `${r}${t.key}`;
		let i = t.value;
		if (i != null) {
			let e = i.key ?? i.id;
			if (e == null) throw Error("No key found for item");
			return e;
		}
		return r ? `${r}.${t.index}` : `$.${t.index}`;
	}
	getChildState(e, t) {
		return { renderer: t.renderer || e.renderer };
	}
	*getFullNode(e, t, n, r) {
		if (z.isValidElement(e.element) && e.element.type === z.Fragment) {
			let i = [];
			z.Children.forEach(e.element.props.children, (e) => {
				i.push(e);
			});
			let a = e.index ?? 0;
			for (let e of i) yield* this.getFullNode({
				element: e,
				index: a++
			}, t, n, r);
			return;
		}
		let i = e.element;
		if (!i && e.value && t && t.renderer) {
			let n = this.cache.get(e.value);
			if (n && (!n.shouldInvalidate || !n.shouldInvalidate(this.context))) {
				n.index = e.index, n.parentKey = r ? r.key : null, yield n;
				return;
			}
			i = t.renderer(e.value);
		}
		if (z.isValidElement(i)) {
			let a = i.type;
			if (typeof a != "function" && typeof a.getCollectionNode != "function") {
				let e = i.type;
				throw Error(`Unknown element <${e}> in collection.`);
			}
			let o = a.getCollectionNode(i.props, this.context), s = e.index ?? 0, c = o.next();
			for (; !c.done && c.value;) {
				let a = c.value;
				e.index = s;
				let l = a.key ?? null;
				l ??= a.element ? null : this.getKey(i, e, t, n);
				let u = [...this.getFullNode({
					...a,
					key: l,
					index: s,
					wrapper: Uc(e.wrapper, a.wrapper)
				}, this.getChildState(t, a), n ? `${n}${i.key}` : i.key, r)];
				for (let t of u) {
					if (t.value = a.value ?? e.value ?? null, t.value && this.cache.set(t.value, t), e.type && t.type !== e.type) throw Error(`Unsupported type <${Wc(t.type)}> in <${Wc(r?.type ?? "unknown parent type")}>. Only <${Wc(e.type)}> is supported.`);
					s++, yield t;
				}
				c = o.next(u);
			}
			return;
		}
		if (e.key == null || e.type == null) return;
		let a = this, o = {
			type: e.type,
			props: e.props,
			key: e.key,
			parentKey: r ? r.key : null,
			value: e.value ?? null,
			level: (r?.level ?? 0) + +(r?.type === "item"),
			index: e.index,
			rendered: e.rendered,
			textValue: e.textValue ?? "",
			"aria-label": e["aria-label"],
			wrapper: e.wrapper,
			shouldInvalidate: e.shouldInvalidate,
			hasChildNodes: e.hasChildNodes || !1,
			childNodes: Hc(function* () {
				if (!e.hasChildNodes || !e.childNodes) return;
				let n = 0;
				for (let r of e.childNodes()) {
					r.key != null && (r.key = `${o.key}${r.key}`);
					let e = a.getFullNode({
						...r,
						index: n
					}, a.getChildState(t, r), o.key, o);
					for (let t of e) n++, yield t;
				}
			})
		};
		yield o;
	}
	constructor() {
		this.cache = /* @__PURE__ */ new WeakMap();
	}
};
function Hc(e) {
	let t = [], n = null;
	return { *[Symbol.iterator]() {
		for (let e of t) yield e;
		n ||= e();
		for (let e of n) t.push(e), yield e;
	} };
}
function Uc(e, t) {
	if (e && t) return (n) => e(t(n));
	if (e) return e;
	if (t) return t;
}
function Wc(e) {
	return e[0].toUpperCase() + e.slice(1);
}
//#endregion
//#region ../../node_modules/.pnpm/react-stately@3.48.0_react@19.2.4/node_modules/react-stately/dist/private/collections/useCollection.mjs
function Gc(e, t, n) {
	let r = (0, z.useMemo)(() => new Vc(), []), { children: i, items: a, collection: o } = e;
	return (0, z.useMemo)(() => o || t(r.build({
		children: i,
		items: a
	}, n)), [
		r,
		i,
		a,
		o,
		n,
		t
	]);
}
//#endregion
//#region ../../node_modules/.pnpm/react-stately@3.48.0_react@19.2.4/node_modules/react-stately/dist/private/list/useListState.mjs
function Kc(e) {
	let { filter: t, layoutDelegate: n } = e, r = Rc(e), i = (0, z.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [e.disabledKeys]), a = Gc(e, (0, z.useCallback)((e) => t ? new Fc(t(e)) : new Fc(e), [t]), (0, z.useMemo)(() => ({ suppressTextValueWarning: e.suppressTextValueWarning }), [e.suppressTextValueWarning])), o = (0, z.useMemo)(() => new Bc(a, r, { layoutDelegate: n }), [
		a,
		r,
		n
	]);
	return Jc(a, o), {
		collection: a,
		disabledKeys: i,
		selectionManager: o
	};
}
function qc(e, t) {
	let n = (0, z.useMemo)(() => t ? e.collection.filter(t) : e.collection, [e.collection, t]), r = e.selectionManager.withCollection(n);
	return Jc(n, r), {
		collection: n,
		selectionManager: r,
		disabledKeys: e.disabledKeys
	};
}
function Jc(e, t) {
	let n = (0, z.useRef)(null);
	(0, z.useEffect)(() => {
		if (t.focusedKey != null && !e.getItem(t.focusedKey) && n.current) {
			let r = n.current.getKeyAfter(t.focusedKey), i = null;
			for (; r != null;) {
				let a = e.getItem(r);
				if (a && a.type === "item" && !t.isDisabled(r)) {
					i = r;
					break;
				}
				r = n.current.getKeyAfter(r);
			}
			if (i == null) for (r = n.current.getKeyBefore(t.focusedKey); r != null;) {
				let a = e.getItem(r);
				if (a && a.type === "item" && !t.isDisabled(r)) {
					i = r;
					break;
				}
				r = n.current.getKeyBefore(r);
			}
			t.setFocusedKey(i);
		}
		n.current = e;
	}, [e, t]);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/useLoadMoreSentinel.mjs
function Yc(e, t) {
	let { collection: n, onLoadMore: r, scrollOffset: i = 1 } = e, a = (0, z.useRef)(null), o = Cr((e) => {
		for (let t of e) t.isIntersecting && r && r();
	});
	B(() => (t.current && (a.current = new IntersectionObserver(o, {
		root: io(t?.current),
		rootMargin: `0px ${100 * i}% ${100 * i}% ${100 * i}%`
	}), a.current.observe(t.current)), () => {
		a.current && a.current.disconnect();
	}), [
		n,
		t,
		i
	]);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/ListBox.mjs
var Xc = /*#__PURE__*/ (0, z.createContext)(null), Zc = /*#__PURE__*/ (0, z.createContext)(null), Qc = /*#__PURE__*/ (0, z.forwardRef)(function(e, t) {
	[e, t] = Wt(e, t, Xc);
	let n = (0, z.useContext)(Zc);
	return n ? /*#__PURE__*/ z.createElement(el, {
		state: n,
		props: e,
		listBoxRef: t
	}) : /*#__PURE__*/ z.createElement(Ni, { content: /*#__PURE__*/ z.createElement(Wi, e) }, (n) => /*#__PURE__*/ z.createElement($c, {
		props: e,
		listBoxRef: t,
		collection: n
	}));
});
function $c({ props: e, listBoxRef: t, collection: n }) {
	e = {
		...e,
		collection: n,
		children: null,
		items: null
	};
	let { layoutDelegate: r } = (0, z.useContext)(Xi), i = Kc({
		...e,
		layoutDelegate: r
	});
	return /*#__PURE__*/ z.createElement(el, {
		state: i,
		props: e,
		listBoxRef: t
	});
}
function el({ state: e, props: t, listBoxRef: n }) {
	[t, n] = Wt(t, n, Qr);
	let { dragAndDropHooks: r, layout: i = "stack", orientation: a = "vertical", filter: o } = t, s = qc(e, o), { collection: c, selectionManager: l } = s, u = !!r?.useDraggableCollectionState, d = !!r?.useDroppableCollectionState, { direction: f } = Ir(), { disabledBehavior: p, disabledKeys: m } = l, h = _c({
		usage: "search",
		sensitivity: "base"
	}), { isVirtualized: g, layoutDelegate: _, dropTargetDelegate: v, CollectionRoot: y } = (0, z.useContext)(Xi), b = (0, z.useMemo)(() => t.keyboardDelegate || new hc({
		collection: c,
		collator: h,
		ref: n,
		disabledKeys: m,
		disabledBehavior: p,
		layout: i,
		orientation: a,
		direction: f,
		layoutDelegate: _
	}), [
		c,
		h,
		n,
		p,
		m,
		a,
		f,
		t.keyboardDelegate,
		i,
		_
	]), { listBoxProps: x } = yc({
		...t,
		shouldSelectOnPressUp: u || t.shouldSelectOnPressUp,
		keyboardDelegate: b,
		isVirtualized: g
	}, s, n);
	(0, z.useRef)(u), (0, z.useRef)(d), (0, z.useEffect)(() => {}, [u, d]);
	let S, C, w, T = !1, ee = null, E = (0, z.useRef)(null);
	if (u && r) {
		S = r.useDraggableCollectionState({
			collection: c,
			selectionManager: l,
			preview: r.renderDragPreview ? E : void 0
		}), r.useDraggableCollection({}, S, n);
		let e = r.DragPreview;
		ee = r.renderDragPreview ? /*#__PURE__*/ z.createElement(e, { ref: E }, r.renderDragPreview) : null;
	}
	if (d && r) {
		C = r.useDroppableCollectionState({
			collection: c,
			selectionManager: l
		});
		let e = r.dropTargetDelegate || v || new r.ListDropTargetDelegate(c, n, {
			orientation: a,
			layout: i,
			direction: f
		});
		w = r.useDroppableCollection({
			keyboardDelegate: b,
			dropTargetDelegate: e
		}, C, n), T = C.isDropTarget({ type: "root" });
	}
	let { focusProps: D, isFocused: O, isFocusVisible: te } = Aa(), k = s.collection.size === 0, ne = {
		isDropTarget: T,
		isEmpty: k,
		isFocused: O,
		isFocusVisible: te,
		layout: t.layout || "stack",
		orientation: a,
		state: s
	}, re = Ht({
		...t,
		children: void 0,
		defaultClassName: "react-aria-ListBox",
		values: ne
	}), ie = null;
	k && t.renderEmptyState && (ie = /*#__PURE__*/ z.createElement("div", {
		role: "option",
		style: { display: "contents" }
	}, t.renderEmptyState(ne)));
	let ae = ia(t, { global: !0 });
	return /*#__PURE__*/ z.createElement(Ps, null, /*#__PURE__*/ z.createElement(Yt.div, {
		...V(ae, re, x, D, w?.collectionProps),
		ref: n,
		slot: t.slot || void 0,
		onScroll: t.onScroll,
		"data-drop-target": T || void 0,
		"data-empty": k || void 0,
		"data-focused": O || void 0,
		"data-focus-visible": te || void 0,
		"data-layout": t.layout || "stack",
		"data-orientation": a
	}, /*#__PURE__*/ z.createElement(Vt, { values: [
		[Xc, t],
		[Zc, s],
		[gs, {
			dragAndDropHooks: r,
			dragState: S,
			dropState: C
		}],
		[Ts, { elementType: "div" }],
		[_s, { render: rl }],
		[Ki, {
			name: "ListBoxSection",
			render: tl
		}]
	] }, /*#__PURE__*/ z.createElement(Cs, null, /*#__PURE__*/ z.createElement(y, {
		collection: c,
		scrollRef: n,
		persistedKeys: bs(l, r, C),
		renderDropIndicator: ys(r, C)
	}))), ie, ee));
}
function tl(e, t, n, r = "react-aria-ListBoxSection") {
	let i = (0, z.useContext)(Zc), { dragAndDropHooks: a, dropState: o } = (0, z.useContext)(gs), { CollectionBranch: s } = (0, z.useContext)(Xi), [c, l] = Gt(), { headingProps: u, groupProps: d } = Nc({
		heading: l,
		"aria-label": e["aria-label"] ?? void 0
	}), f = Ht({
		...e,
		id: void 0,
		children: void 0,
		defaultClassName: r,
		values: void 0
	}), p = ia(e, { global: !0 });
	return delete p.id, /*#__PURE__*/ z.createElement(Yt.section, {
		...V(p, f, d),
		ref: t
	}, /*#__PURE__*/ z.createElement(xs.Provider, { value: {
		...u,
		ref: c
	} }, /*#__PURE__*/ z.createElement(s, {
		collection: i.collection,
		parent: n,
		renderDropIndicator: ys(a, o)
	})));
}
var nl = /*#__PURE__*/ Vi(ri, function(e, t, n) {
	let r = zt(t), i = (0, z.useContext)(Zc), { dragAndDropHooks: a, dragState: o, dropState: s } = (0, z.useContext)(gs), c = o && !(o.isDisabled || o.selectionManager.isDisabled(n.key)), { optionProps: l, labelProps: u, descriptionProps: d, ...f } = Mc({
		key: n.key,
		"aria-label": e?.["aria-label"]
	}, i, r), { hoverProps: p, isHovered: m } = Ia({
		isDisabled: !f.allowsSelection && !f.hasAction && !c,
		onHoverStart: n.props.onHoverStart,
		onHoverChange: n.props.onHoverChange,
		onHoverEnd: n.props.onHoverEnd
	}), { keyboardProps: h } = yi(e), { focusProps: g } = _i(e), _ = null;
	o && a && (_ = a.useDraggableItem({
		key: n.key,
		hasAction: f.hasAction
	}, o));
	let v = null;
	s && a && (v = a.useDroppableItem({ target: {
		type: "item",
		key: n.key,
		dropPosition: "on"
	} }, s, r));
	let y = o && o.isDragging(n.key), b = Ht({
		...e,
		id: void 0,
		children: e.children,
		defaultClassName: "react-aria-ListBoxItem",
		values: {
			...f,
			isHovered: m,
			selectionMode: i.selectionManager.selectionMode,
			selectionBehavior: i.selectionManager.selectionBehavior,
			allowsDragging: !!o,
			isDragging: y,
			isDropTarget: v?.isDropTarget
		}
	});
	(0, z.useEffect)(() => {
		n.textValue;
	}, [n.textValue]);
	let x = e.href ? Yt.a : Yt.div, S = ia(e, { global: !0 });
	return delete S.id, delete S.onClick, e.href && l.tabIndex == null && (l.tabIndex = -1), /*#__PURE__*/ z.createElement(x, {
		...V(S, b, l, p, h, g, _?.dragProps, v?.dropProps),
		ref: r,
		"data-allows-dragging": !!o || void 0,
		"data-selected": f.isSelected || void 0,
		"data-disabled": f.isDisabled || void 0,
		"data-hovered": m || void 0,
		"data-focused": f.isFocused || void 0,
		"data-focus-visible": f.isFocusVisible || void 0,
		"data-pressed": f.isPressed || void 0,
		"data-dragging": y || void 0,
		"data-drop-target": v?.isDropTarget || void 0,
		"data-selection-mode": i.selectionManager.selectionMode === "none" ? void 0 : i.selectionManager.selectionMode
	}, /*#__PURE__*/ z.createElement(Vt, { values: [[to, { slots: {
		[Bt]: u,
		label: u,
		description: d
	} }], [ws, { isSelected: f.isSelected }]] }, b.children));
});
function rl(e, t) {
	t = zt(t);
	let { dragAndDropHooks: n, dropState: r } = (0, z.useContext)(gs), { dropIndicatorProps: i, isHidden: a, isDropTarget: o } = n.useDropIndicator(e, r, t);
	return a ? null : /*#__PURE__*/ z.createElement(al, {
		...e,
		dropIndicatorProps: i,
		isDropTarget: o,
		ref: t
	});
}
function il(e, t) {
	let { dropIndicatorProps: n, isDropTarget: r, ...i } = e, a = Ht({
		...i,
		defaultClassName: "react-aria-DropIndicator",
		values: { isDropTarget: r }
	});
	return /*#__PURE__*/ z.createElement(z.Fragment, null, /*#__PURE__*/ z.createElement(Yt.div, {
		...n,
		...a,
		role: "option",
		ref: t,
		"data-drop-target": r || void 0
	}));
}
var al = /*#__PURE__*/ (0, z.forwardRef)(il);
Vi(ni, function(e, t, n) {
	let r = (0, z.useContext)(Zc), { isLoading: i, onLoadMore: a, scrollOffset: o, ...s } = e, c = (0, z.useRef)(null);
	Yc((0, z.useMemo)(() => ({
		onLoadMore: a,
		collection: r?.collection,
		sentinelRef: c,
		scrollOffset: o
	}), [
		a,
		o,
		r?.collection
	]), c);
	let l = Ht({
		...s,
		id: void 0,
		children: n.rendered,
		defaultClassName: "react-aria-ListBoxLoadingIndicator",
		values: void 0
	});
	return /*#__PURE__*/ z.createElement(z.Fragment, null, /*#__PURE__*/ z.createElement("div", {
		style: {
			position: "relative",
			width: 0,
			height: 0
		},
		inert: Pc(!0)
	}, /*#__PURE__*/ z.createElement("div", {
		"data-testid": "loadMoreSentinel",
		ref: c,
		style: {
			position: "absolute",
			height: 1,
			width: 1
		}
	})), i && l.children && /*#__PURE__*/ z.createElement(z.Fragment, null, /*#__PURE__*/ z.createElement(Yt.div, {
		...V(ia(e, { global: !0 }), { tabIndex: -1 }),
		...l,
		role: "option",
		ref: t
	}, l.children)));
});
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/OverlayArrow.mjs
var ol = /*#__PURE__*/ (0, z.createContext)({ placement: "bottom" }), sl = typeof HTMLElement < "u" && "inert" in HTMLElement.prototype;
function cl(e) {
	return e.dataset.liveAnnouncer === "true" || e.dataset.reactAriaTopLayer !== void 0;
}
var ll = /* @__PURE__ */ new WeakMap(), ul = [];
function dl(e, t) {
	let n = Qt(e?.[0]), r = t instanceof n.Element ? { root: t } : t, i = r?.root ?? document.body, a = r?.shouldUseInert && sl, o = new Set(e), s = /* @__PURE__ */ new Set(), c = (e) => a && e instanceof n.HTMLElement ? e.inert : e.getAttribute("aria-hidden") === "true", l = (e, t) => {
		a && e instanceof n.HTMLElement ? e.inert = t : t ? e.setAttribute("aria-hidden", "true") : (e.removeAttribute("aria-hidden"), e instanceof n.HTMLElement && (e.inert = !1));
	}, u = /* @__PURE__ */ new Set();
	if (nn()) for (let t of e) {
		let e = t;
		for (; e && e !== i;) {
			let t = e.getRootNode();
			"shadowRoot" in t && u.add(t.shadowRoot), e = t.parentNode;
		}
	}
	let d = (e) => {
		for (let t of e.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]")) o.add(t);
		let t = (e) => {
			if (s.has(e) || o.has(e) || e.parentElement && s.has(e.parentElement) && e.parentElement.getAttribute("role") !== "row") return NodeFilter.FILTER_REJECT;
			for (let t of o) if (U(e, t)) return NodeFilter.FILTER_SKIP;
			return NodeFilter.FILTER_ACCEPT;
		}, n = As(H(e), e, NodeFilter.SHOW_ELEMENT, { acceptNode: t }), r = t(e);
		if (r === NodeFilter.FILTER_ACCEPT && f(e), r !== NodeFilter.FILTER_REJECT) {
			let e = n.nextNode();
			for (; e != null;) f(e), e = n.nextNode();
		}
	}, f = (e) => {
		let t = ll.get(e) ?? 0;
		c(e) && t === 0 || (t === 0 && l(e, !0), s.add(e), ll.set(e, t + 1));
	};
	ul.length && ul[ul.length - 1].disconnect(), d(i);
	let p = new MutationObserver((e) => {
		for (let t of e) if (t.type === "childList") {
			if (t.target.isConnected && ![...o, ...s].some((e) => U(e, t.target))) for (let e of t.addedNodes) (e instanceof HTMLElement || e instanceof SVGElement) && cl(e) ? o.add(e) : e instanceof Element && d(e);
			if (nn()) {
				for (let e of u) if (!e.isConnected) {
					p.disconnect();
					break;
				}
			}
		}
	});
	p.observe(i, {
		childList: !0,
		subtree: !0
	});
	let m = /* @__PURE__ */ new Set();
	if (nn()) for (let e of u) {
		let t = new MutationObserver((e) => {
			for (let t of e) if (t.type === "childList") {
				if (t.target.isConnected && ![...o, ...s].some((e) => U(e, t.target))) for (let e of t.addedNodes) (e instanceof HTMLElement || e instanceof SVGElement) && cl(e) ? o.add(e) : e instanceof Element && d(e);
				if (nn()) {
					for (let e of u) if (!e.isConnected) {
						p.disconnect();
						break;
					}
				}
			}
		});
		t.observe(e, {
			childList: !0,
			subtree: !0
		}), m.add(t);
	}
	let h = {
		visibleNodes: o,
		hiddenNodes: s,
		observe() {
			p.observe(i, {
				childList: !0,
				subtree: !0
			});
		},
		disconnect() {
			p.disconnect();
		}
	};
	return ul.push(h), () => {
		if (p.disconnect(), nn()) for (let e of m) e.disconnect();
		for (let e of s) {
			let t = ll.get(e);
			t != null && (t === 1 ? (l(e, !1), ll.delete(e)) : ll.set(e, t - 1));
		}
		h === ul[ul.length - 1] ? (ul.pop(), ul.length && ul[ul.length - 1].observe()) : ul.splice(ul.indexOf(h), 1);
	};
}
function fl(e) {
	let t = ul[ul.length - 1];
	if (t && !t.visibleNodes.has(e)) return t.visibleNodes.add(e), () => {
		t.visibleNodes.delete(e);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/overlays/calculatePosition.mjs
var pl = {
	top: "top",
	bottom: "top",
	left: "left",
	right: "left"
}, ml = {
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
}, hl = {
	top: "left",
	left: "top"
}, gl = {
	top: "height",
	left: "width"
}, _l = {
	width: "totalWidth",
	height: "totalHeight"
}, vl = {}, yl = () => typeof document < "u" ? window.visualViewport : null;
function bl(e, t) {
	let n = 0, r = 0, i = 0, a = 0, o = 0, s = 0, c = {}, l = (t?.scale ?? 1) > 1;
	if (e.tagName === "BODY" || e.tagName === "HTML") {
		let l = document.documentElement;
		i = l.clientWidth, a = l.clientHeight, n = t?.width ?? i, r = t?.height ?? a, c.top = l.scrollTop || e.scrollTop, c.left = l.scrollLeft || e.scrollLeft, t && (o = t.offsetTop, s = t.offsetLeft);
	} else ({width: n, height: r, top: o, left: s} = jl(e, !1)), c.top = e.scrollTop, c.left = e.scrollLeft, i = n, a = r;
	return Ln() && (e.tagName === "BODY" || e.tagName === "HTML") && l && (c.top = 0, c.left = 0, o = t?.pageTop ?? 0, s = t?.pageLeft ?? 0), {
		width: n,
		height: r,
		totalWidth: i,
		totalHeight: a,
		scroll: c,
		top: o,
		left: s
	};
}
function xl(e) {
	return {
		top: e.scrollTop,
		left: e.scrollLeft,
		width: e.scrollWidth,
		height: e.scrollHeight
	};
}
function Sl(e, t, n, r, i, a, o) {
	let s = i.scroll[e] ?? 0, c = r[gl[e]], l = o[e] + r.scroll[pl[e]] + a, u = o[e] + r.scroll[pl[e]] + c - a, d = t - s + r.scroll[pl[e]] + o[e] - r[pl[e]], f = t - s + n + r.scroll[pl[e]] + o[e] - r[pl[e]];
	return d < l ? l - d : f > u ? Math.max(u - f, l - d) : 0;
}
function Cl(e) {
	let t = window.getComputedStyle(e);
	return {
		top: parseInt(t.marginTop, 10) || 0,
		bottom: parseInt(t.marginBottom, 10) || 0,
		left: parseInt(t.marginLeft, 10) || 0,
		right: parseInt(t.marginRight, 10) || 0
	};
}
function wl(e) {
	if (vl[e]) return vl[e];
	let [t, n] = e.split(" "), r = pl[t] || "right", i = hl[r];
	pl[n] || (n = "center");
	let a = gl[r], o = gl[i];
	return vl[e] = {
		placement: t,
		crossPlacement: n,
		axis: r,
		crossAxis: i,
		size: a,
		crossSize: o
	}, vl[e];
}
function Tl(e, t, n, r, i, a, o, s, c, l, u) {
	let { placement: d, crossPlacement: f, axis: p, crossAxis: m, size: h, crossSize: g } = r, _ = {};
	_[m] = e[m] ?? 0, f === "center" ? _[m] += ((e[g] ?? 0) - (n[g] ?? 0)) / 2 : f !== m && (_[m] += (e[g] ?? 0) - (n[g] ?? 0)), _[m] += a;
	let v = e[m] - n[g] + c + l, y = e[m] + e[g] - c - l;
	if (_[m] = Ha(_[m], v, y), d === p) {
		let t = s ? u[h] : u[_l[h]];
		_[ml[p]] = Math.floor(t - e[p] + i);
	} else _[p] = Math.floor(e[p] + e[h] + i);
	return _;
}
function El(e, t, n, r, i, a, o, s, c, l, u) {
	let d = (e.top == null ? c[_l.height] - (e.bottom ?? 0) - o : e.top) - (c.scroll.top ?? 0), f = l ? n.top : 0, p = {
		top: Math.max(t.top + f, (u?.offsetTop ?? t.top) + f),
		bottom: Math.min(t.top + t.height + f, (u?.offsetTop ?? 0) + (u?.height ?? 0))
	};
	return s === "top" ? Math.max(0, d + o - p.top - ((i.top ?? 0) + (i.bottom ?? 0) + a)) : Math.max(0, p.bottom - d - ((i.top ?? 0) + (i.bottom ?? 0) + a));
}
function Dl(e, t, n, r, i, a, o, s) {
	let { placement: c, axis: l, size: u } = a;
	return c === l ? Math.max(0, n[l] - (o.scroll[l] ?? 0) - (e[l] + (s ? t[l] : 0)) - (r[l] ?? 0) - r[ml[l]] - i) : Math.max(0, e[u] + e[l] + (s ? t[l] : 0) - n[l] - n[u] + (o.scroll[l] ?? 0) - (r[l] ?? 0) - r[ml[l]] - i);
}
function Ol(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _) {
	let v = wl(e), { size: y, crossAxis: b, crossSize: x, placement: S, crossPlacement: C } = v, w = Tl(t, s, n, v, u, d, l, f, m, h, c), T = u, ee = Dl(s, l, t, i, a + u, v, c, g);
	if (o && n[y] > ee) {
		let e = wl(`${ml[S]} ${C}`), r = Tl(t, s, n, e, u, d, l, f, m, h, c);
		Dl(s, l, t, i, a + u, e, c, g) > ee && (v = e, w = r, T = u);
	}
	let E = "bottom";
	v.axis === "top" ? v.placement === "top" ? E = "top" : v.placement === "bottom" && (E = "bottom") : v.crossAxis === "top" && (v.crossPlacement === "top" ? E = "bottom" : v.crossPlacement === "bottom" && (E = "top"));
	let D = Sl(b, w[b], n[x], s, c, a, l);
	w[b] += D;
	let O = El(w, s, l, f, i, a, n.height, E, c, g, _);
	p && p < O && (O = p), n.height = Math.min(n.height, O), w = Tl(t, s, n, v, T, d, l, f, m, h, c), D = Sl(b, w[b], n[x], s, c, a, l), w[b] += D;
	let te = {}, k = t[b] - w[b] - i[pl[b]], ne = k + .5 * t[x], re = m / 2 + h, ie = pl[b] === "left" ? (i.left ?? 0) + (i.right ?? 0) : (i.top ?? 0) + (i.bottom ?? 0), ae = n[x] - ie - m / 2 - h;
	te[b] = Ha(Ha(ne, t[b] + m / 2 - (w[b] + i[pl[b]]), t[b] + t[x] - m / 2 - (w[b] + i[pl[b]])), re, ae), {placement: S, crossPlacement: C} = v, m ? k = te[b] : C === "right" ? k += t[x] : C === "center" && (k += t[x] / 2);
	let A = S === "left" || S === "top" ? n[y] : 0, j = {
		x: S === "top" || S === "bottom" ? k : A,
		y: S === "left" || S === "right" ? k : A
	};
	return {
		position: w,
		maxHeight: O,
		arrowOffsetLeft: te.left,
		arrowOffsetTop: te.top,
		placement: S,
		triggerAnchorPoint: j
	};
}
function kl(e) {
	let { placement: t, targetNode: n, overlayNode: r, scrollNode: i, padding: a, shouldFlip: o, boundaryElement: s, offset: c, crossOffset: l, maxHeight: u, arrowSize: d = 0, arrowBoundaryOffset: f = 0, targetRect: p } = e, m = yl(), h = r instanceof HTMLElement ? Nl(r) : document.documentElement, g = h === document.documentElement, _ = window.getComputedStyle(h).position, v = !!_ && _ !== "static", y = g ? jl(n, !1, p) : Ml(n, h, !1, p);
	if (!g) {
		let { marginTop: e, marginLeft: t } = window.getComputedStyle(n);
		y.top += parseInt(e, 10) || 0, y.left += parseInt(t, 10) || 0;
	}
	let b = jl(r, !0), x = Cl(r);
	b.width += (x.left ?? 0) + (x.right ?? 0), b.height += (x.top ?? 0) + (x.bottom ?? 0);
	let S = xl(i), C = bl(s, m), w = bl(h, m), T;
	if ((s.tagName === "BODY" || s.tagName === "HTML") && !g) {
		let e = Al(h, !1);
		T = {
			top: -(e.top - C.top),
			left: -(e.left - C.left),
			width: 0,
			height: 0
		};
	} else T = (s.tagName === "BODY" || s.tagName === "HTML") && g ? {
		top: 0,
		left: 0,
		width: 0,
		height: 0
	} : Ml(s, h, !1);
	let ee = U(s, h);
	return Ol(t, y, b, S, x, a, o, C, w, T, c, l, v, u, d, f, ee, m);
}
function Al(e, t) {
	let { top: n, left: r, width: i, height: a } = e.getBoundingClientRect();
	return t && e instanceof e.ownerDocument.defaultView.HTMLElement && (i = e.offsetWidth, a = e.offsetHeight), {
		top: n,
		left: r,
		width: i,
		height: a
	};
}
function jl(e, t, n) {
	let { top: r, left: i, width: a, height: o } = n || Al(e, t), { scrollTop: s, scrollLeft: c, clientTop: l, clientLeft: u } = document.documentElement;
	return {
		top: r + s - l,
		left: i + c - u,
		width: a,
		height: o
	};
}
function Ml(e, t, n, r) {
	let i = window.getComputedStyle(e), a;
	if (i.position === "fixed") a = r || Al(e, n);
	else {
		a = jl(e, n, r);
		let i = jl(t, n), o = window.getComputedStyle(t);
		i.top += (parseInt(o.borderTopWidth, 10) || 0) - t.scrollTop, i.left += (parseInt(o.borderLeftWidth, 10) || 0) - t.scrollLeft, a.top -= i.top, a.left -= i.left;
	}
	return a.top -= parseInt(i.marginTop, 10) || 0, a.left -= parseInt(i.marginLeft, 10) || 0, a;
}
function Nl(e) {
	let t = e.offsetParent;
	if (t && t === document.body && window.getComputedStyle(t).position === "static" && !Pl(t) && (t = document.documentElement), t == null) for (t = e.parentElement; t && !Pl(t);) t = t.parentElement;
	return t || document.documentElement;
}
function Pl(e) {
	let t = window.getComputedStyle(e);
	return t.transform !== "none" || /transform|perspective/.test(t.willChange) || t.filter !== "none" || t.contain === "paint" || "backdropFilter" in t && t.backdropFilter !== "none" || "WebkitBackdropFilter" in t && t.WebkitBackdropFilter !== "none";
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/overlays/useCloseOnScroll.mjs
var Fl = /* @__PURE__ */ new WeakMap();
function Il(e) {
	let { triggerRef: t, isOpen: n, onClose: r } = e;
	(0, z.useEffect)(() => {
		if (!n || r === null) return;
		let e = (e) => {
			let n = G(e);
			if (!t.current || n instanceof Node && !U(n, t.current) || n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement) return;
			let i = r || Fl.get(t.current);
			i && i();
		};
		return window.addEventListener("scroll", e, !0), () => {
			window.removeEventListener("scroll", e, !0);
		};
	}, [
		n,
		r,
		t
	]);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/useResizeObserver.mjs
function J() {
	return window.ResizeObserver !== void 0;
}
function Ll(e) {
	let { ref: t, box: n, onResize: r } = e, i = Cr(r);
	(0, z.useEffect)(() => {
		let e = t?.current;
		if (e) if (J()) {
			let t = new window.ResizeObserver((e) => {
				e.length && i();
			});
			return t.observe(e, { box: n }), () => {
				e && t.unobserve(e);
			};
		} else return window.addEventListener("resize", i, !1), () => {
			window.removeEventListener("resize", i, !1);
		};
	}, [t, n]);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/overlays/useOverlayPosition.mjs
var Y = typeof document < "u" ? window.visualViewport : null;
function X(e) {
	let { direction: t } = Ir(), { arrowSize: n, targetRef: r, overlayRef: i, arrowRef: a, scrollRef: o = i, placement: s = "bottom", containerPadding: c = 12, shouldFlip: l = !0, boundaryElement: u = typeof document < "u" ? document.body : null, offset: d = 0, crossOffset: f = 0, shouldUpdatePosition: p = !0, isOpen: m = !0, onClose: h, maxHeight: g, arrowBoundaryOffset: _ = 0, getTargetRect: v } = e, [y, b] = (0, z.useState)(null), x = [
		p,
		s,
		i.current,
		r.current,
		a?.current,
		o.current,
		c,
		l,
		u,
		d,
		f,
		m,
		t,
		g,
		_,
		n
	], S = (0, z.useRef)(Y?.scale);
	(0, z.useEffect)(() => {
		m && (S.current = Y?.scale);
	}, [m]);
	let C = (0, z.useCallback)(() => {
		if (p === !1 || !m || !i.current || !r.current || !u || Y?.scale !== S.current) return;
		let e = null;
		if (o.current && rn(o.current)) {
			let t = W()?.getBoundingClientRect(), n = o.current.getBoundingClientRect();
			e = {
				type: "top",
				offset: (t?.top ?? 0) - n.top
			}, e.offset > n.height / 2 && (e.type = "bottom", e.offset = (t?.bottom ?? 0) - n.bottom);
		}
		let h = i.current;
		!g && i.current && (h.style.top = "0px", h.style.bottom = "", h.style.maxHeight = (window.visualViewport?.height ?? window.innerHeight) + "px");
		let y = kl({
			placement: zl(s, t),
			overlayNode: i.current,
			targetNode: r.current,
			scrollNode: o.current || i.current,
			padding: c,
			shouldFlip: l,
			boundaryElement: u,
			offset: d,
			crossOffset: f,
			maxHeight: g,
			arrowSize: n ?? (a?.current ? Al(a.current, !0).width : 0),
			arrowBoundaryOffset: _,
			targetRect: v?.(r.current)
		});
		if (!y.position) return;
		h.style.top = "", h.style.bottom = "", h.style.left = "", h.style.right = "", Object.keys(y.position).forEach((e) => h.style[e] = y.position[e] + "px"), h.style.maxHeight = y.maxHeight == null ? "" : y.maxHeight + "px";
		let x = W();
		if (e && x && o.current) {
			let t = x.getBoundingClientRect(), n = o.current.getBoundingClientRect(), r = t[e.type] - n[e.type];
			o.current.scrollTop += r - e.offset;
		}
		b(y);
	}, x);
	B(C, x), Rl(C), Ll({
		ref: i,
		onResize: C
	}), Ll({
		ref: r,
		onResize: C
	});
	let w = (0, z.useRef)(!1);
	B(() => {
		let e, t = () => {
			w.current = !0, clearTimeout(e), e = setTimeout(() => {
				w.current = !1;
			}, 500), C();
		}, n = () => {
			w.current && t();
		};
		return Y?.addEventListener("resize", t), Y?.addEventListener("scroll", n), () => {
			Y?.removeEventListener("resize", t), Y?.removeEventListener("scroll", n);
		};
	}, [C]);
	let T = (0, z.useCallback)(() => {
		w.current || h?.();
	}, [h, w]);
	return Il({
		triggerRef: r,
		isOpen: m,
		onClose: h && T
	}), {
		overlayProps: { style: {
			position: y ? "absolute" : "fixed",
			top: y ? void 0 : 0,
			left: y ? void 0 : 0,
			zIndex: 1e5,
			...y?.position,
			maxHeight: y?.maxHeight ?? "100vh"
		} },
		placement: y?.placement ?? null,
		triggerAnchorPoint: y?.triggerAnchorPoint ?? null,
		arrowProps: {
			"aria-hidden": "true",
			role: "presentation",
			style: {
				left: y?.arrowOffsetLeft,
				top: y?.arrowOffsetTop
			}
		},
		updatePosition: C
	};
}
function Rl(e) {
	B(() => (window.addEventListener("resize", e, !1), () => {
		window.removeEventListener("resize", e, !1);
	}), [e]);
}
function zl(e, t) {
	return t === "rtl" ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right");
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/interactions/useInteractOutside.mjs
function Bl(e) {
	let { ref: t, onInteractOutside: n, isDisabled: r, onInteractOutsideStart: i } = e, a = (0, z.useRef)({
		isPointerDown: !1,
		ignoreEmulatedMouseEvents: !1
	}), o = Cr((e) => {
		n && Vl(e, t) && (i && i(e), a.current.isPointerDown = !0);
	}), s = Cr((e) => {
		n && n(e);
	});
	(0, z.useEffect)(() => {
		let e = a.current;
		if (r) return;
		let n = t.current, i = H(n);
		if (typeof PointerEvent < "u") {
			let n = (n) => {
				e.isPointerDown && Vl(n, t) && s(n), e.isPointerDown = !1;
			};
			return i.addEventListener("pointerdown", o, !0), i.addEventListener("click", n, !0), () => {
				i.removeEventListener("pointerdown", o, !0), i.removeEventListener("click", n, !0);
			};
		}
	}, [t, r]);
}
function Vl(e, t) {
	if (e.button > 0) return !1;
	let n = G(e);
	if (n) {
		let e = n.ownerDocument;
		if (!e || !U(e.documentElement, n) || n.closest("[data-react-aria-top-layer]")) return !1;
	}
	return t.current ? !e.composedPath().includes(t.current) : !1;
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/overlays/useOverlay.mjs
var Hl = [];
function Ul(e, t) {
	let { onClose: n, shouldCloseOnBlur: r, isOpen: i, isDismissable: a = !1, isKeyboardDismissDisabled: o = !1, shouldCloseOnInteractOutside: s } = e, c = (0, z.useRef)(void 0);
	(0, z.useEffect)(() => {
		if (i && !Hl.includes(t)) return Hl.push(t), () => {
			let e = Hl.indexOf(t);
			e >= 0 && Hl.splice(e, 1);
		};
	}, [i, t]);
	let l = () => {
		Hl[Hl.length - 1] === t && n && n();
	}, u = (e) => {
		let n = Hl[Hl.length - 1];
		c.current = n, (!s || s(G(e))) && n === t && e.stopPropagation();
	}, d = (e) => {
		(!s || s(G(e))) && (Hl[Hl.length - 1] === t && e.stopPropagation(), c.current === t && l()), c.current = void 0;
	}, f = (e) => {
		e.key === "Escape" && !o && !e.nativeEvent.isComposing && (e.stopPropagation(), e.preventDefault(), l());
	};
	Bl({
		ref: t,
		onInteractOutside: a && i ? d : void 0,
		onInteractOutsideStart: u
	});
	let { focusWithinProps: p } = ka({
		isDisabled: !r,
		onBlurWithin: (e) => {
			!e.relatedTarget || Ws(e.relatedTarget) || (!s || s(e.relatedTarget)) && n?.();
		}
	});
	return {
		overlayProps: {
			onKeyDown: f,
			...p
		},
		underlayProps: {}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/overlays/usePreventScroll.mjs
var Wl = typeof document < "u" && window.visualViewport, Gl = 0, Kl;
function ql(e = {}) {
	let { isDisabled: t } = e;
	B(() => {
		if (!t) return Gl++, Gl === 1 && (Kl = Fn() ? Yl() : Jl()), () => {
			Gl--, Gl === 0 && Kl();
		};
	}, [t]);
}
function Jl() {
	let e = window.innerWidth - document.documentElement.clientWidth;
	return _t(e > 0 && ("scrollbarGutter" in document.documentElement.style ? Xl(document.documentElement, "scrollbarGutter", "stable") : Xl(document.documentElement, "paddingRight", `${e}px`)), Xl(document.documentElement, "overflow", "hidden"));
}
function Yl() {
	let e = Xl(document.documentElement, "overflow", "hidden"), t, n = !1, r = (e) => {
		let r = G(e);
		t = ro(r) ? r : io(r, !0), n = !1;
		let i = r.ownerDocument.defaultView.getSelection();
		i && !i.isCollapsed && i.containsNode(r, !0) && (n = !0), e.composedPath().some((e) => e instanceof HTMLInputElement && e.type === "range") && (n = !0), "selectionStart" in r && "selectionEnd" in r && r.selectionStart < r.selectionEnd && r.ownerDocument.activeElement === r && (n = !0);
	}, i = document.createElement("style"), a = fa();
	a && (i.nonce = a), i.textContent = "@layer {\n  * {\n    overscroll-behavior: contain;\n  }\n}", document.head.prepend(i);
	let o = (e) => {
		if (!(e.touches.length === 2 || n)) {
			if (!t || t === document.documentElement || t === document.body) {
				e.preventDefault();
				return;
			}
			t.scrollHeight === t.clientHeight && t.scrollWidth === t.clientWidth && e.preventDefault();
		}
	}, s = (e) => {
		let t = G(e), n = e.relatedTarget;
		n && xr(n) ? (n.focus({ preventScroll: !0 }), Ql(n, xr(t))) : n || (t.parentElement?.closest("[tabindex]"))?.focus({ preventScroll: !0 });
	}, c = HTMLElement.prototype.focus;
	HTMLElement.prototype.focus = function(e) {
		let t = W(), n = t != null && xr(t);
		c.call(this, {
			...e,
			preventScroll: !0
		}), (!e || !e.preventScroll) && Ql(this, n);
	};
	let l = _t(Zl(document, "touchstart", r, {
		passive: !1,
		capture: !0
	}), Zl(document, "touchmove", o, {
		passive: !1,
		capture: !0
	}), Zl(document, "blur", s, !0));
	return () => {
		e(), l(), i.remove(), HTMLElement.prototype.focus = c;
	};
}
function Xl(e, t, n) {
	let r = e.style[t];
	return e.style[t] = n, () => {
		e.style[t] = r;
	};
}
function Zl(e, t, n, r) {
	return e.addEventListener(t, n, r), () => {
		e.removeEventListener(t, n, r);
	};
}
function Ql(e, t) {
	t || !Wl ? $l(e) : Wl.addEventListener("resize", () => $l(e), { once: !0 });
}
function $l(e) {
	let t = document.scrollingElement || document.documentElement, n = e;
	for (; n && n !== t;) {
		let e = io(n);
		if (e !== document.documentElement && e !== document.body && e !== n) {
			let t = e.getBoundingClientRect(), r = n.getBoundingClientRect();
			if (r.top < t.top || r.bottom > t.top + n.clientHeight) {
				let n = t.bottom;
				Wl && (n = Math.min(n, Wl.offsetTop + Wl.height));
				let i = r.top - t.top - ((n - t.top) / 2 - r.height / 2);
				e.scrollTo({
					top: Math.max(0, Math.min(e.scrollHeight - e.clientHeight, e.scrollTop + i)),
					behavior: "smooth"
				});
			}
		}
		n = e.parentElement;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/overlays/usePopover.mjs
function eu(e, t) {
	let { triggerRef: n, popoverRef: r, groupRef: i, isNonModal: a, isKeyboardDismissDisabled: o, shouldCloseOnInteractOutside: s, ...c } = e, l = c.trigger === "SubmenuTrigger", { overlayProps: u, underlayProps: d } = Ul({
		isOpen: t.isOpen,
		onClose: t.close,
		shouldCloseOnBlur: !0,
		isDismissable: !a || l,
		isKeyboardDismissDisabled: o,
		shouldCloseOnInteractOutside: s
	}, i ?? r), { overlayProps: f, arrowProps: p, placement: m, triggerAnchorPoint: h } = X({
		...c,
		targetRef: n,
		overlayRef: r,
		isOpen: t.isOpen,
		onClose: a && !l ? t.close : null
	});
	return ql({ isDisabled: a || !t.isOpen }), (0, z.useEffect)(() => {
		if (t.isOpen && r.current) return a ? fl(i?.current ?? r.current) : dl([i?.current ?? r.current], { shouldUseInert: !0 });
	}, [
		a,
		t.isOpen,
		r,
		i
	]), {
		popoverProps: V(u, f),
		arrowProps: p,
		underlayProps: d,
		placement: m,
		triggerAnchorPoint: h
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/ar-AE.mjs
var tu = {};
tu = { dismiss: "تجاهل" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/bg-BG.mjs
var nu = {};
nu = { dismiss: "Отхвърляне" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/cs-CZ.mjs
var ru = {};
ru = { dismiss: "Odstranit" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/da-DK.mjs
var iu = {};
iu = { dismiss: "Luk" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/de-DE.mjs
var au = {};
au = { dismiss: "Schließen" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/el-GR.mjs
var ou = {};
ou = { dismiss: "Απόρριψη" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/en-US.mjs
var su = {};
su = { dismiss: "Dismiss" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/es-ES.mjs
var cu = {};
cu = { dismiss: "Descartar" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/et-EE.mjs
var lu = {};
lu = { dismiss: "Lõpeta" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/fi-FI.mjs
var uu = {};
uu = { dismiss: "Hylkää" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/fr-FR.mjs
var du = {};
du = { dismiss: "Rejeter" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/he-IL.mjs
var fu = {};
fu = { dismiss: "התעלם" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/hr-HR.mjs
var pu = {};
pu = { dismiss: "Odbaci" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/hu-HU.mjs
var mu = {};
mu = { dismiss: "Elutasítás" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/it-IT.mjs
var hu = {};
hu = { dismiss: "Ignora" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/ja-JP.mjs
var gu = {};
gu = { dismiss: "閉じる" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/ko-KR.mjs
var _u = {};
_u = { dismiss: "무시" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/lt-LT.mjs
var vu = {};
vu = { dismiss: "Atmesti" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/lv-LV.mjs
var yu = {};
yu = { dismiss: "Nerādīt" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/nb-NO.mjs
var bu = {};
bu = { dismiss: "Lukk" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/nl-NL.mjs
var xu = {};
xu = { dismiss: "Negeren" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/pl-PL.mjs
var Su = {};
Su = { dismiss: "Zignoruj" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/pt-BR.mjs
var Cu = {};
Cu = { dismiss: "Descartar" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/pt-PT.mjs
var wu = {};
wu = { dismiss: "Dispensar" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/ro-RO.mjs
var Tu = {};
Tu = { dismiss: "Revocare" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/ru-RU.mjs
var Eu = {};
Eu = { dismiss: "Пропустить" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/sk-SK.mjs
var Du = {};
Du = { dismiss: "Zrušiť" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/sl-SI.mjs
var Ou = {};
Ou = { dismiss: "Opusti" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/sr-SP.mjs
var ku = {};
ku = { dismiss: "Odbaci" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/sv-SE.mjs
var Au = {};
Au = { dismiss: "Avvisa" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/tr-TR.mjs
var ju = {};
ju = { dismiss: "Kapat" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/uk-UA.mjs
var Mu = {};
Mu = { dismiss: "Скасувати" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/zh-CN.mjs
var Nu = {};
Nu = { dismiss: "取消" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/overlays/zh-TW.mjs
var Pu = {};
Pu = { dismiss: "關閉" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/overlays/intlStrings.mjs
var Fu = {};
Fu = {
	"ar-AE": tu,
	"bg-BG": nu,
	"cs-CZ": ru,
	"da-DK": iu,
	"de-DE": au,
	"el-GR": ou,
	"en-US": su,
	"es-ES": cu,
	"et-EE": lu,
	"fi-FI": uu,
	"fr-FR": du,
	"he-IL": fu,
	"hr-HR": pu,
	"hu-HU": mu,
	"it-IT": hu,
	"ja-JP": gu,
	"ko-KR": _u,
	"lt-LT": vu,
	"lv-LV": yu,
	"nb-NO": bu,
	"nl-NL": xu,
	"pl-PL": Su,
	"pt-BR": Cu,
	"pt-PT": wu,
	"ro-RO": Tu,
	"ru-RU": Eu,
	"sk-SK": Du,
	"sl-SI": Ou,
	"sr-SP": ku,
	"sv-SE": Au,
	"tr-TR": ju,
	"uk-UA": Mu,
	"zh-CN": Nu,
	"zh-TW": Pu
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/overlays/DismissButton.mjs
function Iu(e) {
	return e && e.__esModule ? e.default : e;
}
function Lu(e) {
	let { onDismiss: t, ...n } = e, r = Tr(n, Yr(Iu(Fu), "@react-aria/overlays").format("dismiss")), i = () => {
		t && t();
	};
	return /*#__PURE__*/ z.createElement(po, null, /*#__PURE__*/ z.createElement("button", {
		...r,
		tabIndex: -1,
		onClick: i,
		style: {
			width: 1,
			height: 1
		}
	}));
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/interactions/PressResponder.mjs
var Ru = /*#__PURE__*/ z.forwardRef(({ children: e, ...t }, n) => {
	let r = (0, z.useRef)(!1), i = (0, z.useContext)(pa), a = V(i || {}, {
		...t,
		register() {
			r.current = !0, i && i.register();
		}
	});
	return a.ref = zt(n || i?.ref), bi(i, a.ref), (0, z.useEffect)(() => {
		r.current ||= !0;
	}, []), /*#__PURE__*/ z.createElement(pa.Provider, { value: a }, e);
});
function zu({ children: e }) {
	let t = (0, z.useMemo)(() => ({ register: () => {} }), []);
	return /*#__PURE__*/ z.createElement(pa.Provider, { value: t }, e);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/overlays/PortalProvider.mjs
var Bu = /*#__PURE__*/ (0, z.createContext)({});
function Vu() {
	return (0, z.useContext)(Bu) ?? {};
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/overlays/Overlay.mjs
var Hu = /*#__PURE__*/ z.createContext(null);
function Uu(e) {
	let t = kt(), { portalContainer: n = t ? null : document.body, isExiting: r } = e, [i, a] = (0, z.useState)(!1), o = (0, z.useMemo)(() => ({
		contain: i,
		setContain: a
	}), [i, a]), { getContainer: s } = Vu();
	if (!e.portalContainer && s && (n = s()), !n) return null;
	let c = e.children;
	return e.disableFocusManagement || (c = /*#__PURE__*/ z.createElement(Ps, {
		restoreFocus: !0,
		contain: (e.shouldContainFocus || i) && !r
	}, c)), c = /*#__PURE__*/ z.createElement(Hu.Provider, { value: o }, /*#__PURE__*/ z.createElement(zu, null, c)), /*#__PURE__*/ ki.createPortal(c, n);
}
function Wu() {
	let e = (0, z.useContext)(Hu)?.setContain;
	B(() => {
		e?.(!0);
	}, [e]);
}
//#endregion
//#region ../../node_modules/.pnpm/react-stately@3.48.0_react@19.2.4/node_modules/react-stately/dist/private/overlays/useOverlayTriggerState.mjs
function Z(e) {
	let [t, n] = Zr(e.isOpen, e.defaultOpen || !1, e.onOpenChange);
	return {
		isOpen: t,
		setOpen: n,
		open: (0, z.useCallback)(() => {
			n(!0);
		}, [n]),
		close: (0, z.useCallback)(() => {
			n(!1);
		}, [n]),
		toggle: (0, z.useCallback)(() => {
			n(!t);
		}, [n, t])
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/animation.mjs
function Gu(e, t = !0) {
	let [n, r] = (0, z.useState)(!0), i = n && t;
	return B(() => {
		if (i && e.current && "getAnimations" in e.current) for (let t of e.current.getAnimations()) t instanceof CSSTransition && t.cancel();
	}, [e, i]), qu(e, i, (0, z.useCallback)(() => r(!1), [])), i;
}
function Ku(e, t) {
	let [n, r] = (0, z.useState)(t ? "open" : "closed");
	switch (n) {
		case "open":
			t || r("exiting");
			break;
		case "closed":
		case "exiting":
			t && r("open");
			break;
	}
	let i = n === "exiting";
	return qu(e, i, (0, z.useCallback)(() => {
		r((e) => e === "exiting" ? "closed" : e);
	}, [])), i;
}
function qu(e, t, n) {
	B(() => {
		if (t && e.current) {
			if (!("getAnimations" in e.current)) {
				n();
				return;
			}
			let t = e.current.getAnimations();
			if (t.length === 0) {
				n();
				return;
			}
			let r = !1;
			return Promise.allSettled(t.map((e) => e.finished)).then(() => {
				r || (0, ki.flushSync)(() => {
					n();
				});
			}), () => {
				r = !0;
			};
		}
	}, [
		e,
		t,
		n
	]);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/Popover.mjs
var Ju = /*#__PURE__*/ (0, z.createContext)(null), Yu = /*#__PURE__*/ (0, z.createContext)(null), Xu = /*#__PURE__*/ (0, z.forwardRef)(function(e, t) {
	[e, t] = Wt(e, t, Ju);
	let n = (0, z.useContext)(af), r = Z(e), i = e.isOpen != null || e.defaultOpen != null || !n ? r : n, a = Ku(t, i.isOpen) || e.isExiting || !1, o = Di(), { direction: s } = Ir();
	if (o) {
		let t = e.children;
		return typeof t == "function" && (t = t({
			trigger: e.trigger || null,
			placement: "bottom",
			isEntering: !1,
			isExiting: !1,
			defaultChildren: null
		})), /*#__PURE__*/ z.createElement(z.Fragment, null, t);
	}
	return i && !i.isOpen && !a ? null : /*#__PURE__*/ z.createElement(Zu, {
		...e,
		triggerRef: e.triggerRef,
		state: i,
		popoverRef: t,
		isExiting: a,
		dir: s
	});
});
function Zu({ state: e, isExiting: t, UNSTABLE_portalContainer: n, clearContexts: r, ...i }) {
	let a = (0, z.useRef)(null), o = (0, z.useRef)(null), s = (0, z.useContext)(Yu), c = s && i.trigger === "SubmenuTrigger", { popoverProps: l, underlayProps: u, arrowProps: d, placement: f, triggerAnchorPoint: p } = eu({
		...i,
		offset: i.offset ?? 8,
		arrowRef: a,
		groupRef: c ? s : o
	}, e), m = i.popoverRef, h = Gu(m, !!f) || i.isEntering || !1, g = Ht({
		...i,
		defaultClassName: "react-aria-Popover",
		values: {
			trigger: i.trigger || null,
			placement: f,
			isEntering: h,
			isExiting: t
		}
	}), _ = !i.isNonModal || i.trigger === "SubmenuTrigger", [v, y] = (0, z.useState)(!1);
	B(() => {
		m.current && y(_ && !m.current.querySelector("[role=dialog]"));
	}, [m, _]), (0, z.useEffect)(() => {
		v && (i.trigger !== "SubmenuTrigger" || mr() !== "pointer") && m.current && !rn(m.current) && gi(m.current);
	}, [
		v,
		m,
		i.trigger
	]);
	let b = (0, z.useMemo)(() => {
		let e = g.children;
		if (r) for (let t of r) e = /*#__PURE__*/ z.createElement(t.Provider, { value: null }, e);
		return e;
	}, [g.children, r]), [x, S] = (0, z.useState)(null), C = (0, z.useCallback)(() => {
		i.triggerRef.current && S(i.triggerRef.current.getBoundingClientRect().width + "px");
	}, [i.triggerRef]);
	B(C, [C]), Ll({
		ref: g.style?.["--trigger-width"] ? void 0 : i.triggerRef,
		onResize: C
	});
	let w = {
		...l.style,
		"--trigger-anchor-point": p ? `${p.x}px ${p.y}px` : void 0,
		...g.style,
		"--trigger-width": g.style?.["--trigger-width"] || x
	}, T = /*#__PURE__*/ z.createElement(Yt.div, {
		...V(ia(i, { global: !0 }), l),
		...g,
		role: v ? "dialog" : void 0,
		tabIndex: v ? -1 : void 0,
		"aria-label": i["aria-label"],
		"aria-labelledby": i["aria-labelledby"],
		ref: m,
		slot: i.slot || void 0,
		style: w,
		dir: i.dir,
		"data-trigger": i.trigger,
		"data-placement": f,
		"data-entering": h || void 0,
		"data-exiting": t || void 0
	}, !i.isNonModal && /*#__PURE__*/ z.createElement(Lu, { onDismiss: e.close }), /*#__PURE__*/ z.createElement(ol.Provider, { value: {
		...d,
		placement: f,
		ref: a
	} }, b), /*#__PURE__*/ z.createElement(Lu, { onDismiss: e.close }));
	return c ? /*#__PURE__*/ z.createElement(Uu, {
		...i,
		shouldContainFocus: v,
		isExiting: t,
		portalContainer: n ?? s?.current ?? void 0
	}, T) : /*#__PURE__*/ z.createElement(Uu, {
		...i,
		shouldContainFocus: v,
		isExiting: t,
		portalContainer: n
	}, !i.isNonModal && e.isOpen && /*#__PURE__*/ z.createElement("div", {
		"data-testid": "underlay",
		...u,
		style: {
			position: "fixed",
			inset: 0
		}
	}), /*#__PURE__*/ z.createElement("div", {
		ref: o,
		style: { display: "contents" }
	}, /*#__PURE__*/ z.createElement(Yu.Provider, { value: o }, T)));
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/Keyboard.mjs
var Qu = /*#__PURE__*/ (0, z.createContext)({}), $u = {};
$u = { longPressMessage: "اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/bg-BG.mjs
var ed = {};
ed = { longPressMessage: "Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/cs-CZ.mjs
var td = {};
td = { longPressMessage: "Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/da-DK.mjs
var nd = {};
nd = { longPressMessage: "Langt tryk eller tryk på Alt + pil ned for at åbne menuen" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/de-DE.mjs
var rd = {};
rd = { longPressMessage: "Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/el-GR.mjs
var id = {};
id = { longPressMessage: "Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/en-US.mjs
var ad = {};
ad = { longPressMessage: "Long press or press Alt + ArrowDown to open menu" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/es-ES.mjs
var od = {};
od = { longPressMessage: "Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/et-EE.mjs
var sd = {};
sd = { longPressMessage: "Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/fi-FI.mjs
var cd = {};
cd = { longPressMessage: "Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/fr-FR.mjs
var ld = {};
ld = { longPressMessage: "Appuyez de manière prolongée ou appuyez sur Alt\xA0+\xA0Flèche vers le bas pour ouvrir le menu." };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/he-IL.mjs
var ud = {};
ud = { longPressMessage: "לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/hr-HR.mjs
var dd = {};
dd = { longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/hu-HU.mjs
var fd = {};
fd = { longPressMessage: "Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/it-IT.mjs
var pd = {};
pd = { longPressMessage: "Premi a lungo o premi Alt + Freccia giù per aprire il menu" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/ja-JP.mjs
var md = {};
md = { longPressMessage: "長押しまたは Alt+下矢印キーでメニューを開く" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/ko-KR.mjs
var hd = {};
hd = { longPressMessage: "길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/lt-LT.mjs
var gd = {};
gd = { longPressMessage: "Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“." };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/lv-LV.mjs
var _d = {};
_d = { longPressMessage: "Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/nb-NO.mjs
var vd = {};
vd = { longPressMessage: "Langt trykk eller trykk Alt + PilNed for å åpne menyen" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/nl-NL.mjs
var yd = {};
yd = { longPressMessage: "Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/pl-PL.mjs
var Q = {};
Q = { longPressMessage: "Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/pt-BR.mjs
var bd = {};
bd = { longPressMessage: "Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/pt-PT.mjs
var xd = {};
xd = { longPressMessage: "Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/ro-RO.mjs
var Sd = {};
Sd = { longPressMessage: "Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/ru-RU.mjs
var Cd = {};
Cd = { longPressMessage: "Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/sk-SK.mjs
var wd = {};
wd = { longPressMessage: "Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/sl-SI.mjs
var Td = {};
Td = { longPressMessage: "Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/sr-SP.mjs
var Ed = {};
Ed = { longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/sv-SE.mjs
var Dd = {};
Dd = { longPressMessage: "Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/tr-TR.mjs
var Od = {};
Od = { longPressMessage: "Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/uk-UA.mjs
var kd = {};
kd = { longPressMessage: "Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/zh-CN.mjs
var Ad = {};
Ad = { longPressMessage: "长按或按 Alt + 向下方向键以打开菜单" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/intl/menu/zh-TW.mjs
var jd = {};
jd = { longPressMessage: "長按或按 Alt+向下鍵以開啟功能表" };
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/menu/intlStrings.mjs
var Md = {};
Md = {
	"ar-AE": $u,
	"bg-BG": ed,
	"cs-CZ": td,
	"da-DK": nd,
	"de-DE": rd,
	"el-GR": id,
	"en-US": ad,
	"es-ES": od,
	"et-EE": sd,
	"fi-FI": cd,
	"fr-FR": ld,
	"he-IL": ud,
	"hr-HR": dd,
	"hu-HU": fd,
	"it-IT": pd,
	"ja-JP": md,
	"ko-KR": hd,
	"lt-LT": gd,
	"lv-LV": _d,
	"nb-NO": vd,
	"nl-NL": yd,
	"pl-PL": Q,
	"pt-BR": bd,
	"pt-PT": xd,
	"ro-RO": Sd,
	"ru-RU": Cd,
	"sk-SK": wd,
	"sl-SI": Td,
	"sr-SP": Ed,
	"sv-SE": Dd,
	"tr-TR": Od,
	"uk-UA": kd,
	"zh-CN": Ad,
	"zh-TW": jd
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/overlays/useOverlayTrigger.mjs
function Nd(e, t, n) {
	let { type: r } = e, { isOpen: i } = t;
	(0, z.useEffect)(() => {
		n && n.current && Fl.set(n.current, t.close);
	});
	let a;
	r === "menu" ? a = !0 : r === "listbox" && (a = "listbox");
	let o = Pt();
	return {
		triggerProps: {
			"aria-haspopup": a,
			"aria-expanded": i,
			"aria-controls": i ? o : void 0,
			onPress: t.toggle
		},
		overlayProps: { id: o }
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/menu/useMenuTrigger.mjs
function Pd(e) {
	return e && e.__esModule ? e.default : e;
}
function Fd(e, t, n) {
	let { type: r = "menu", isDisabled: i, trigger: a = "press" } = e, o = Pt(), { triggerProps: s, overlayProps: c } = Nd({ type: r }, t, n), l = (e) => {
		if (!i && !(a === "longPress" && !e.altKey) && n && n.current) switch (e.key) {
			case "Enter":
			case " ": if (a === "longPress" || e.isDefaultPrevented()) return;
			case "ArrowDown":
				"continuePropagation" in e || e.stopPropagation(), e.preventDefault(), t.toggle("first");
				break;
			case "ArrowUp":
				"continuePropagation" in e || e.stopPropagation(), e.preventDefault(), t.toggle("last");
				break;
			default: "continuePropagation" in e && e.continuePropagation();
		}
	}, u = Yr(Pd(Md), "@react-aria/menu"), { longPressProps: d } = xc({
		isDisabled: i || a !== "longPress",
		accessibilityDescription: u.format("longPressMessage"),
		onLongPressStart() {
			t.close();
		},
		onLongPress() {
			t.open("first");
		}
	}), f = {
		preventFocusOnPress: !0,
		onPressStart(e) {
			e.pointerType !== "touch" && e.pointerType !== "keyboard" && !i && (ln(e.target), t.open(e.pointerType === "virtual" ? "first" : null));
		},
		onPress(e) {
			e.pointerType === "touch" && !i && (ln(e.target), t.toggle());
		}
	};
	return delete s.onPress, {
		menuTriggerProps: {
			...s,
			...a === "press" ? f : d,
			id: o,
			onKeyDown: l
		},
		menuProps: {
			...c,
			"aria-labelledby": o,
			autoFocus: t.focusStrategy || !0,
			onClose: t.close
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/menu/utils.mjs
var Id = /* @__PURE__ */ new WeakMap();
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/menu/useMenu.mjs
function Ld(e, t, n) {
	let { shouldFocusWrap: r = !0, onKeyDown: i, onKeyUp: a, ...o } = e;
	!e["aria-label"] && e["aria-labelledby"];
	let s = ia(e, { labelable: !0 }), { listProps: c } = vc({
		...o,
		ref: n,
		selectionManager: t.selectionManager,
		collection: t.collection,
		disabledKeys: t.disabledKeys,
		shouldFocusWrap: r,
		linkBehavior: "override"
	});
	return Id.set(t, {
		onClose: e.onClose,
		onAction: e.onAction,
		shouldUseVirtualFocus: e.shouldUseVirtualFocus
	}), { menuProps: V(s, {
		onKeyDown: i,
		onKeyUp: a
	}, {
		role: "menu",
		...c,
		onKeyDown: (t) => {
			(t.key !== "Escape" || e.shouldUseVirtualFocus) && c.onKeyDown?.(t);
		}
	}) };
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/menu/useMenuItem.mjs
function Rd(e, t, n) {
	let { id: r, key: i, closeOnSelect: a, shouldCloseOnSelect: o, isVirtualized: s, "aria-haspopup": c, onPressStart: l, onPressUp: u, onPress: d, onPressChange: f, onPressEnd: p, onClick: m, onHoverStart: h, onHoverChange: g, onHoverEnd: _, onKeyDown: v, onKeyUp: y, onFocus: b, onFocusChange: x, onBlur: S, selectionManager: C = t.selectionManager } = e, w = !!c, T = w && e["aria-expanded"] === "true", ee = e.isDisabled ?? C.isDisabled(i), E = e.isSelected ?? C.isSelected(i), D = Id.get(t), O = t.collection.getItem(i), te = e.onClose || D.onClose, k = Wn(), ne = () => {
		if (!w && (O?.props?.onAction ? O.props.onAction() : e.onAction && e.onAction(i), D.onAction)) {
			let e = D.onAction;
			e(i, O?.value);
		}
	}, re = "menuitem";
	w || (C.selectionMode === "single" ? re = "menuitemradio" : C.selectionMode === "multiple" && (re = "menuitemcheckbox"));
	let ie = It(), ae = It(), A = It(), j = {
		id: r,
		"aria-disabled": ee || void 0,
		role: re,
		"aria-label": e["aria-label"],
		"aria-labelledby": ie,
		"aria-describedby": [
			e["aria-describedby"],
			ae,
			A
		].filter(Boolean).join(" ") || void 0,
		"aria-controls": e["aria-controls"],
		"aria-haspopup": c,
		"aria-expanded": e["aria-expanded"]
	};
	if (C.selectionMode !== "none" && !w && (j["aria-checked"] = E), s) {
		let e = Number(O?.index);
		j["aria-posinset"] = Number.isNaN(e) ? void 0 : e + 1, j["aria-setsize"] = jc(t.collection);
	}
	let oe = (0, z.useRef)(!1), se = (e) => {
		f?.(e), oe.current = e;
	}, ce = (0, z.useRef)(null), le = (e) => {
		e.pointerType !== "keyboard" && (ce.current = { pointerType: e.pointerType }), e.pointerType === "mouse" && (oe.current || e.target.click()), u?.(e);
	}, M = (e) => {
		m?.(e), ne(), Xn(e, k, O.props.href, O?.props.routerOptions);
		let t = ce.current?.pointerType === "keyboard" ? ce.current?.key === "Enter" || C.selectionMode === "none" || C.isLink(i) : C.selectionMode !== "multiple" || C.isLink(i);
		t = o ?? a ?? t, te && !w && t && te(), ce.current = null;
	}, { itemProps: N, isFocused: ue } = Sc({
		id: r,
		selectionManager: C,
		key: i,
		ref: n,
		shouldSelectOnPressUp: !0,
		allowsDifferentPressOrigin: !0,
		linkBehavior: "none",
		shouldUseVirtualFocus: D.shouldUseVirtualFocus
	}), { pressProps: de, isPressed: fe } = ba({
		onPressStart: l,
		onPress: d,
		onPressUp: le,
		onPressChange: se,
		onPressEnd: p,
		isDisabled: ee
	}), { hoverProps: pe } = Ia({
		isDisabled: ee,
		onHoverStart(e) {
			!pr() && !(T && c) && (C.setFocused(!0), C.setFocusedKey(i)), h?.(e);
		},
		onHoverChange: g,
		onHoverEnd: _
	}), { keyboardProps: me } = yi({
		onKeyDown: (e) => {
			if (e.repeat) {
				e.continuePropagation();
				return;
			}
			switch (e.key) {
				case " ":
					ce.current = {
						pointerType: "keyboard",
						key: " "
					}, G(e).click(), hr("keyboard");
					break;
				case "Enter":
					ce.current = {
						pointerType: "keyboard",
						key: "Enter"
					}, G(e).tagName !== "A" && G(e).click(), hr("keyboard");
					break;
				default:
					w || e.continuePropagation(), v?.(e);
					break;
			}
		},
		onKeyUp: y
	}), { focusableProps: he } = Ci({
		onBlur: S,
		onFocus: b,
		onFocusChange: x
	}, n), ge = ia(O?.props);
	delete ge.id;
	let _e = Yn(O?.props);
	return {
		menuItemProps: {
			...j,
			...V(ge, _e, w ? {
				onFocus: N.onFocus,
				"data-collection": N["data-collection"],
				"data-key": N["data-key"]
			} : N, de, pe, me, he, D.shouldUseVirtualFocus || w ? { onMouseDown: (e) => e.preventDefault() } : void 0, ee ? void 0 : { onClick: M }),
			tabIndex: N.tabIndex != null && T && !D.shouldUseVirtualFocus ? -1 : N.tabIndex
		},
		labelProps: { id: ie },
		descriptionProps: { id: ae },
		keyboardShortcutProps: { id: A },
		isFocused: ue,
		isFocusVisible: ue && C.isFocused && pr() && !T,
		isSelected: E,
		isPressed: fe,
		isDisabled: ee
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/menu/useMenuSection.mjs
function zd(e) {
	let { heading: t, "aria-label": n } = e, r = Pt();
	return {
		itemProps: { role: "presentation" },
		headingProps: t ? {
			id: r,
			role: "presentation"
		} : {},
		groupProps: {
			role: "group",
			"aria-label": n,
			"aria-labelledby": t ? r : void 0
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-stately@3.48.0_react@19.2.4/node_modules/react-stately/dist/private/menu/useMenuTriggerState.mjs
function Bd(e) {
	let t = Z(e), [n, r] = (0, z.useState)(null), [i, a] = (0, z.useState)([]), o = () => {
		a([]), t.close();
	}, s = (e, t) => {
		a((n) => t > n.length ? n : [...n.slice(0, t), e]);
	}, c = (e, t) => {
		a((n) => n[t] === e ? n.slice(0, t) : n);
	};
	return {
		focusStrategy: n,
		...t,
		open(e = null) {
			r(e), t.open();
		},
		toggle(e = null) {
			r(e), t.toggle();
		},
		close() {
			o();
		},
		expandedKeysStack: i,
		openSubmenu: s,
		closeSubmenu: c
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-stately@3.48.0_react@19.2.4/node_modules/react-stately/dist/private/tree/TreeCollection.mjs
var Vd = class {
	constructor(e, { expandedKeys: t } = {}) {
		this.keyMap = /* @__PURE__ */ new Map(), this.firstKey = null, this.lastKey = null, this.iterable = e, t ||= /* @__PURE__ */ new Set();
		let n = (e) => {
			if (this.keyMap.set(e.key, e), e.childNodes && (e.type === "section" || t.has(e.key))) for (let t of e.childNodes) n(t);
		};
		for (let t of e) n(t);
		let r = null, i = 0;
		for (let [e, t] of this.keyMap) r ? (r.nextKey = e, t.prevKey = r.key) : (this.firstKey = e, t.prevKey = void 0), t.type === "item" && (t.index = i++), r = t, r.nextKey = void 0;
		this.lastKey = r?.key ?? null;
	}
	*[Symbol.iterator]() {
		yield* this.iterable;
	}
	get size() {
		return this.keyMap.size;
	}
	getKeys() {
		return this.keyMap.keys();
	}
	getKeyBefore(e) {
		let t = this.keyMap.get(e);
		return t ? t.prevKey ?? null : null;
	}
	getKeyAfter(e) {
		let t = this.keyMap.get(e);
		return t ? t.nextKey ?? null : null;
	}
	getFirstKey() {
		return this.firstKey;
	}
	getLastKey() {
		return this.lastKey;
	}
	getItem(e) {
		return this.keyMap.get(e) ?? null;
	}
	at(e) {
		let t = [...this.getKeys()];
		return this.getItem(t[e]);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/react-stately@3.48.0_react@19.2.4/node_modules/react-stately/dist/private/tree/useTreeState.mjs
function Hd(e) {
	let { onExpandedChange: t } = e, [n, r] = Zr(e.expandedKeys ? new Set(e.expandedKeys) : void 0, e.defaultExpandedKeys ? new Set(e.defaultExpandedKeys) : /* @__PURE__ */ new Set(), t), i = Rc(e), a = (0, z.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [e.disabledKeys]), o = Gc(e, (0, z.useCallback)((e) => new Vd(e, { expandedKeys: n }), [n]), null);
	return (0, z.useEffect)(() => {
		i.focusedKey != null && !o.getItem(i.focusedKey) && i.setFocusedKey(null);
	}, [o, i.focusedKey]), {
		collection: o,
		expandedKeys: n,
		disabledKeys: a,
		toggleKey: (e) => {
			r(Ud(n, e));
		},
		setExpandedKeys: r,
		selectionManager: new Bc(o, i)
	};
}
function Ud(e, t) {
	let n = new Set(e);
	return n.has(t) ? n.delete(t) : n.add(t), n;
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/Menu.mjs
var Wd = /*#__PURE__*/ (0, z.createContext)(null), Gd = /*#__PURE__*/ (0, z.createContext)(null), Kd = /*#__PURE__*/ (0, z.createContext)(null), qd = /*#__PURE__*/ (0, z.createContext)(null);
function Jd(e) {
	let t = Bd(e), n = (0, z.useRef)(null), { menuTriggerProps: r, menuProps: i } = Fd({
		...e,
		type: "menu"
	}, t, n), a = (0, z.useRef)(null);
	return Di() ? null : /*#__PURE__*/ z.createElement(Vt, { values: [
		[Wd, {
			...i,
			ref: a
		}],
		[af, t],
		[Kd, t],
		[Ju, {
			trigger: "MenuTrigger",
			triggerRef: n,
			scrollRef: a,
			placement: "bottom start",
			"aria-labelledby": i["aria-labelledby"]
		}]
	] }, /*#__PURE__*/ z.createElement(Ru, {
		...r,
		ref: n,
		isPressed: t.isOpen
	}, e.children));
}
var Yd = /*#__PURE__*/ (0, z.createContext)(null);
(class extends ei {
	static {
		this.type = "submenutrigger";
	}
	filter(e, t, n) {
		let r = e.getItem(this.firstChildKey);
		if (r && n(r.textValue, this)) {
			let n = this.clone();
			return t.addDescendants(n, e), n;
		}
		return null;
	}
});
var Xd = /*#__PURE__*/ (0, z.forwardRef)(function(e, t) {
	return [e, t] = Wt(e, t, Wd), /*#__PURE__*/ z.createElement(Ni, { content: /*#__PURE__*/ z.createElement(Wi, e) }, (n) => /*#__PURE__*/ z.createElement(Zd, {
		props: e,
		collection: n,
		menuRef: t
	}));
});
function Zd({ props: e, collection: t, menuRef: n }) {
	[e, n] = Wt(e, n, Qr);
	let { filter: r, ...i } = e, a = (0, z.useMemo)(() => r ? t.filter(r) : t, [t, r]), o = Hd({
		...e,
		collection: a,
		children: void 0
	}), s = (0, z.useContext)(Kd), { isVirtualized: c, CollectionRoot: l } = (0, z.useContext)(Xi), { menuProps: u } = Ld({
		...e,
		isVirtualized: c,
		onClose: e.onClose || s?.close
	}, o, n), d = Ht({
		...e,
		children: void 0,
		defaultClassName: "react-aria-Menu",
		values: { isEmpty: o.collection.size === 0 }
	}), f = null;
	o.collection.size === 0 && e.renderEmptyState && (f = /*#__PURE__*/ z.createElement("div", {
		role: "menuitem",
		style: { display: "contents" }
	}, e.renderEmptyState()));
	let p = ia(e, { global: !0 });
	return /*#__PURE__*/ z.createElement(Ps, null, /*#__PURE__*/ z.createElement(Yt.div, {
		...V(p, d, u),
		ref: n,
		slot: e.slot || void 0,
		"data-empty": o.collection.size === 0 || void 0,
		onScroll: e.onScroll
	}, /*#__PURE__*/ z.createElement(Vt, { values: [
		[Gd, o],
		[Ts, { elementType: "div" }],
		[Ki, {
			name: "MenuSection",
			render: $d
		}],
		[Yd, {
			parentMenuRef: n,
			shouldUseVirtualFocus: i?.shouldUseVirtualFocus
		}],
		[ef, { shouldCloseOnSelect: e.shouldCloseOnSelect }],
		[Qr, null],
		[$r, null],
		[qd, o.selectionManager],
		[Kd, s ?? Bd({})]
	] }, /*#__PURE__*/ z.createElement(Cs, null, /*#__PURE__*/ z.createElement(l, {
		collection: o.collection,
		persistedKeys: Zi(o.selectionManager.focusedKey),
		scrollRef: n
	}))), f));
}
var Qd = class extends Bc {
	constructor(e, t) {
		super(e.collection, t), this.parent = e;
	}
	get focusedKey() {
		return this.parent.focusedKey;
	}
	get isFocused() {
		return this.parent.isFocused;
	}
	setFocusedKey(e, t) {
		return this.parent.setFocusedKey(e, t);
	}
	setFocused(e) {
		this.parent.setFocused(e);
	}
	get childFocusStrategy() {
		return this.parent.childFocusStrategy;
	}
};
function $d(e, t, n, r = "react-aria-MenuSection") {
	let i = (0, z.useContext)(Gd), { CollectionBranch: a } = (0, z.useContext)(Xi), [o, s] = Gt(), { headingProps: c, groupProps: l } = zd({
		heading: s,
		"aria-label": n.props["aria-label"] ?? void 0
	}), u = Ht({
		...e,
		id: void 0,
		children: void 0,
		defaultClassName: r,
		className: n.props?.className,
		style: n.props?.style,
		values: void 0
	}), d = (0, z.useContext)(qd), f = Rc(e), p = e.selectionMode == null ? d : new Qd(d, f), m = Ut(ef)?.shouldCloseOnSelect, h = ia(e, { global: !0 });
	return delete h.id, /*#__PURE__*/ z.createElement(Yt.section, {
		...V(h, u, l),
		ref: t
	}, /*#__PURE__*/ z.createElement(Vt, { values: [
		[xs, {
			...c,
			ref: o
		}],
		[qd, p],
		[ef, { shouldCloseOnSelect: e.shouldCloseOnSelect ?? m }]
	] }, /*#__PURE__*/ z.createElement(a, {
		collection: i.collection,
		parent: n
	})));
}
var ef = /*#__PURE__*/ (0, z.createContext)(null), tf = /*#__PURE__*/ Vi(ri, function(e, t, n) {
	[e, t] = Wt(e, t, ef);
	let r = Ut(ef)?.id, i = (0, z.useContext)(Gd), a = zt(t), o = (0, z.useContext)(qd), { isVirtualized: s } = (0, z.useContext)(Xi), { menuItemProps: c, labelProps: l, descriptionProps: u, keyboardShortcutProps: d, ...f } = Rd({
		...e,
		id: r,
		key: n.key,
		selectionManager: o,
		isVirtualized: s
	}, i, a), { hoverProps: p, isHovered: m } = Ia({ isDisabled: f.isDisabled }), h = Ht({
		...e,
		id: void 0,
		children: n.rendered,
		defaultClassName: "react-aria-MenuItem",
		values: {
			...f,
			isHovered: m,
			isFocusVisible: f.isFocusVisible,
			selectionMode: o.selectionMode,
			selectionBehavior: o.selectionBehavior,
			hasSubmenu: !!e["aria-haspopup"],
			isOpen: e["aria-expanded"] === "true"
		}
	}), g = e.href ? Yt.a : Yt.div, _ = ia(e, { global: !0 });
	return delete _.id, delete _.onClick, /*#__PURE__*/ z.createElement(g, {
		...V(_, h, c, p),
		ref: a,
		"data-disabled": f.isDisabled || void 0,
		"data-hovered": m || void 0,
		"data-focused": f.isFocused || void 0,
		"data-focus-visible": f.isFocusVisible || void 0,
		"data-pressed": f.isPressed || void 0,
		"data-selected": f.isSelected || void 0,
		"data-selection-mode": o.selectionMode === "none" ? void 0 : o.selectionMode,
		"data-has-submenu": !!e["aria-haspopup"] || void 0,
		"data-open": e["aria-expanded"] === "true" || void 0
	}, /*#__PURE__*/ z.createElement(Vt, { values: [
		[to, { slots: {
			[Bt]: l,
			label: l,
			description: u
		} }],
		[Qu, d],
		[ws, { isSelected: f.isSelected }]
	] }, h.children));
});
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/dialog/useDialog.mjs
function nf(e, t) {
	let { role: n = "dialog" } = e, r = It();
	r = e["aria-label"] ? void 0 : r;
	let i = (0, z.useRef)(!1);
	return (0, z.useEffect)(() => {
		if (t.current && !rn(t.current)) {
			gi(t.current);
			let e = setTimeout(() => {
				(W() === t.current || W() === document.body) && (i.current = !0, t.current && (t.current.blur(), gi(t.current)), i.current = !1);
			}, 500);
			return () => {
				clearTimeout(e);
			};
		}
	}, [t]), Wu(), (0, z.useRef)(!1), (0, z.useEffect)(() => {}), {
		dialogProps: {
			...ia(e, { labelable: !0 }),
			role: n,
			tabIndex: -1,
			"aria-labelledby": e["aria-labelledby"] || r,
			onBlur: (e) => {
				i.current && e.stopPropagation();
			}
		},
		titleProps: { id: r }
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/Dialog.mjs
var rf = /*#__PURE__*/ (0, z.createContext)(null), af = /*#__PURE__*/ (0, z.createContext)(null), of = /*#__PURE__*/ (0, z.forwardRef)(function(e, t) {
	let n = e["aria-labelledby"];
	[e, t] = Wt(e, t, rf);
	let { dialogProps: r, titleProps: i } = nf({
		...e,
		"aria-labelledby": n
	}, t), a = (0, z.useContext)(af);
	!r["aria-label"] && !r["aria-labelledby"] && e["aria-labelledby"] && (r["aria-labelledby"] = e["aria-labelledby"]);
	let o = Ht({
		defaultClassName: "react-aria-Dialog",
		className: e.className,
		style: e.style,
		children: e.children,
		values: { close: a?.close || (() => {}) }
	}), s = ia(e, { global: !0 });
	return /*#__PURE__*/ z.createElement(Yt.section, {
		...V(s, o, r),
		render: e.render,
		ref: t,
		slot: e.slot || void 0
	}, /*#__PURE__*/ z.createElement(Vt, { values: [[$a, { slots: {
		[Bt]: {},
		title: {
			...i,
			level: 2
		}
	} }], [Ya, { slots: {
		[Bt]: {},
		close: { onPress: () => a?.close() }
	} }]] }, o.children));
});
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/i18n/useListFormatter.mjs
function sf(e = {}) {
	let { locale: t } = Ir();
	return (0, z.useMemo)(() => new Intl.ListFormat(t, e), [t, e]);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/overlays/useModalOverlay.mjs
function cf(e, t, n) {
	let { overlayProps: r, underlayProps: i } = Ul({
		...e,
		isOpen: t.isOpen,
		onClose: t.close
	}, n);
	return ql({ isDisabled: !t.isOpen }), Wu(), (0, z.useEffect)(() => {
		if (t.isOpen && n.current) return dl([n.current], { shouldUseInert: !0 });
	}, [t.isOpen, n]), {
		modalProps: V(r),
		underlayProps: i
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/useViewportSize.mjs
var lf = typeof document < "u" && window.visualViewport;
function uf() {
	let e = kt(), [t, n] = (0, z.useState)(() => e ? {
		width: 0,
		height: 0
	} : df());
	return (0, z.useEffect)(() => {
		let e = (e) => {
			n((t) => e.width === t.width && e.height === t.height ? t : e);
		}, t = () => {
			lf && lf.scale > 1 || e(df());
		}, r, i = (t) => {
			lf && lf.scale > 1 || xr(G(t)) && (r = requestAnimationFrame(() => {
				let t = W();
				(!t || !xr(t)) && e({
					width: document.documentElement.clientWidth,
					height: document.documentElement.clientHeight
				});
			}));
		};
		return e(df()), Fn() && window.addEventListener("blur", i, !0), lf ? lf.addEventListener("resize", t) : window.addEventListener("resize", t), () => {
			cancelAnimationFrame(r), Fn() && window.removeEventListener("blur", i, !0), lf ? lf.removeEventListener("resize", t) : window.removeEventListener("resize", t);
		};
	}, []), t;
}
function df() {
	return {
		width: lf ? Math.min(lf.width * lf.scale, document.documentElement.clientWidth) : document.documentElement.clientWidth,
		height: lf ? lf.height * lf.scale : document.documentElement.clientHeight
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/Modal.mjs
var ff = /*#__PURE__*/ (0, z.createContext)(null), pf = /*#__PURE__*/ (0, z.createContext)(null), mf = /*#__PURE__*/ (0, z.forwardRef)(function(e, t) {
	if ((0, z.useContext)(pf)) return /*#__PURE__*/ z.createElement(vf, {
		...e,
		modalRef: t
	}, e.children);
	let { isDismissable: n, isKeyboardDismissDisabled: r, isOpen: i, defaultOpen: a, onOpenChange: o, children: s, isEntering: c, isExiting: l, UNSTABLE_portalContainer: u, shouldCloseOnInteractOutside: d, ...f } = e;
	return /*#__PURE__*/ z.createElement(gf, {
		isDismissable: n,
		isKeyboardDismissDisabled: r,
		isOpen: i,
		defaultOpen: a,
		onOpenChange: o,
		isEntering: c,
		isExiting: l,
		UNSTABLE_portalContainer: u,
		shouldCloseOnInteractOutside: d
	}, /*#__PURE__*/ z.createElement(vf, {
		...f,
		modalRef: t
	}, s));
});
function hf(e, t) {
	[e, t] = Wt(e, t, ff);
	let n = (0, z.useContext)(af), r = Z(e), i = e.isOpen != null || e.defaultOpen != null || !n ? r : n, a = zt(t), o = (0, z.useRef)(null), s = Ku(a, i.isOpen), c = Ku(o, i.isOpen), l = s || c || e.isExiting || !1, u = kt();
	return !i.isOpen && !l || u ? null : /*#__PURE__*/ z.createElement(_f, {
		...e,
		state: i,
		isExiting: l,
		overlayRef: a,
		modalRef: o
	});
}
var gf = /*#__PURE__*/ (0, z.forwardRef)(hf);
function _f({ UNSTABLE_portalContainer: e, ...t }) {
	let n = t.modalRef, { state: r } = t, { modalProps: i, underlayProps: a } = cf(t, r, n), o = Gu(t.overlayRef) || t.isEntering || !1, s = Ht({
		...t,
		defaultClassName: "react-aria-ModalOverlay",
		values: {
			isEntering: o,
			isExiting: t.isExiting,
			state: r
		}
	}), c = uf(), l, u;
	if (typeof document < "u") {
		let e = ro(document.body) ? document.body : document.scrollingElement || document.documentElement, t = e.getBoundingClientRect().width % 1, n = e.getBoundingClientRect().height % 1;
		l = e.scrollWidth - t, u = e.scrollHeight - n;
	}
	let d = {
		...s.style,
		"--visual-viewport-width": c.width + "px",
		"--visual-viewport-height": c.height + "px",
		"--page-width": l === void 0 ? void 0 : l + "px",
		"--page-height": u === void 0 ? void 0 : u + "px"
	};
	return /*#__PURE__*/ z.createElement(Uu, {
		isExiting: t.isExiting,
		portalContainer: e
	}, /*#__PURE__*/ z.createElement(Yt.div, {
		...V(ia(t, { global: !0 }), a),
		...s,
		style: d,
		ref: t.overlayRef,
		"data-entering": o || void 0,
		"data-exiting": t.isExiting || void 0
	}, /*#__PURE__*/ z.createElement(Vt, { values: [[pf, {
		modalProps: i,
		modalRef: n,
		isExiting: t.isExiting,
		isDismissable: t.isDismissable
	}], [af, r]] }, s.children)));
}
function vf(e) {
	let { modalProps: t, modalRef: n, isExiting: r, isDismissable: i } = (0, z.useContext)(pf), a = (0, z.useContext)(af), o = zt((0, z.useMemo)(() => Lt(e.modalRef, n), [e.modalRef, n])), s = Gu(o), c = Ht({
		...e,
		defaultClassName: "react-aria-Modal",
		values: {
			isEntering: s,
			isExiting: r,
			state: a
		}
	});
	return /*#__PURE__*/ z.createElement(Yt.div, {
		...V(ia(e, { global: !0 }), t),
		...c,
		ref: o,
		"data-entering": s || void 0,
		"data-exiting": r || void 0
	}, i && /*#__PURE__*/ z.createElement(Lu, { onDismiss: a.close }), c.children);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/select/useSelect.mjs
var yf = /* @__PURE__ */ new WeakMap();
function bf(e, t, n) {
	let { keyboardDelegate: r, isDisabled: i, isRequired: a, name: o, form: s, validationBehavior: c = "aria" } = e, l = _c({
		usage: "search",
		sensitivity: "base"
	}), u = (0, z.useMemo)(() => r || new hc(t.collection, t.disabledKeys, n, l), [
		r,
		t.collection,
		t.disabledKeys,
		l,
		n
	]), { menuTriggerProps: d, menuProps: f } = Fd({
		isDisabled: i,
		type: "listbox"
	}, t, n), p = (e) => {
		if (t.selectionManager.selectionMode !== "multiple") switch (e.key) {
			case "ArrowLeft": {
				e.preventDefault();
				let n = t.selectedKey == null ? u.getFirstKey?.() : u.getKeyAbove?.(t.selectedKey);
				n != null && t.setSelectedKey(n);
				break;
			}
			case "ArrowRight": {
				e.preventDefault();
				let n = t.selectedKey == null ? u.getFirstKey?.() : u.getKeyBelow?.(t.selectedKey);
				n != null && t.setSelectedKey(n);
				break;
			}
		}
	}, { typeSelectProps: m } = uc({
		keyboardDelegate: u,
		selectionManager: t.selectionManager,
		onTypeSelect(e) {
			t.setSelectedKey(e);
		}
	}), { isInvalid: h, validationErrors: g, validationDetails: _ } = t.displayValidation, { labelProps: v, fieldProps: y, descriptionProps: b, errorMessageProps: x } = ko({
		...e,
		labelElementType: "span",
		isInvalid: h,
		errorMessage: e.errorMessage || g
	});
	t.selectionManager.selectionMode === "multiple" && (m = {});
	let S = ia(e, { labelable: !0 }), C = V(m, d, y), w = Pt();
	return yf.set(t, {
		isDisabled: i,
		isRequired: a,
		name: o,
		form: s,
		validationBehavior: c
	}), {
		labelProps: {
			...v,
			onClick: () => {
				e.isDisabled || (n.current?.focus(), hr("keyboard"));
			}
		},
		triggerProps: V(S, {
			...C,
			isDisabled: i,
			onKeyDown: _t(C.onKeyDown, p, e.onKeyDown),
			onKeyUp: e.onKeyUp,
			"aria-labelledby": [
				w,
				C["aria-labelledby"],
				C["aria-label"] && !C["aria-labelledby"] ? C.id : null
			].filter(Boolean).join(" "),
			onFocus(n) {
				t.isFocused || (e.onFocus && e.onFocus(n), e.onFocusChange && e.onFocusChange(!0), t.setFocused(!0));
			},
			onBlur(n) {
				t.isOpen || (e.onBlur && e.onBlur(n), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1));
			}
		}),
		valueProps: { id: w },
		menuProps: {
			...f,
			onAction: void 0,
			autoFocus: t.focusStrategy || !0,
			shouldSelectOnPressUp: !0,
			shouldFocusOnHover: !0,
			disallowEmptySelection: !0,
			linkBehavior: "selection",
			onBlur: (n) => {
				U(n.currentTarget, n.relatedTarget) || (e.onBlur && e.onBlur(n), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1));
			},
			"aria-labelledby": [y["aria-labelledby"], C["aria-label"] && !y["aria-labelledby"] ? C.id : null].filter(Boolean).join(" ")
		},
		descriptionProps: b,
		errorMessageProps: x,
		isInvalid: h,
		validationErrors: g,
		validationDetails: _,
		hiddenSelectProps: {
			isDisabled: i,
			name: o,
			label: e.label,
			state: t,
			triggerRef: n,
			form: s
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/select/HiddenSelect.mjs
function xf(e, t, n) {
	let r = yf.get(t) || {}, { autoComplete: i, name: a = r.name, form: o = r.form, isDisabled: s = r.isDisabled } = e, { validationBehavior: c, isRequired: l } = r, { visuallyHiddenProps: u } = fo({ style: {
		position: "fixed",
		top: 0,
		left: 0
	} });
	Ao(e.selectRef, t.defaultValue, t.setValue), jo({
		validationBehavior: c,
		focus: () => n.current?.focus()
	}, t, e.selectRef);
	let d = t.setValue, f = (0, z.useCallback)((e) => {
		let t = G(e);
		t.multiple ? d(Array.from(t.selectedOptions, (e) => e.value)) : d(e.currentTarget.value);
	}, [d]);
	return {
		containerProps: {
			...u,
			"aria-hidden": !0,
			"data-react-aria-prevent-focus": !0,
			"data-a11y-ignore": "aria-hidden-focus"
		},
		inputProps: { style: { display: "none" } },
		selectProps: {
			tabIndex: -1,
			autoComplete: i,
			disabled: s,
			multiple: t.selectionManager.selectionMode === "multiple",
			required: c === "native" && l,
			name: a,
			form: o,
			value: t.value ?? "",
			onChange: f,
			onInput: f
		}
	};
}
function Sf(e) {
	let { state: t, triggerRef: n, label: r, name: i, form: a, isDisabled: o } = e, s = (0, z.useRef)(null), c = (0, z.useRef)(null), { containerProps: l, selectProps: u } = xf({
		...e,
		selectRef: t.collection.size <= 300 ? s : c
	}, t, n), d = Array.isArray(t.value) ? t.value : [t.value];
	if (t.collection.size <= 300) return /*#__PURE__*/ z.createElement("div", {
		...l,
		"data-testid": "hidden-select-container"
	}, /*#__PURE__*/ z.createElement("label", null, r, /*#__PURE__*/ z.createElement("select", {
		...u,
		ref: s
	}, /*#__PURE__*/ z.createElement("option", {
		value: "",
		label: "\xA0"
	}, "\xA0"), [...t.collection.getKeys()].map((e) => {
		let n = t.collection.getItem(e);
		if (n && n.type === "item") return /*#__PURE__*/ z.createElement("option", {
			key: n.key,
			value: n.key
		}, n.textValue);
	}), t.collection.size === 0 && i && d.map((e, t) => /*#__PURE__*/ z.createElement("option", {
		key: t,
		value: e ?? ""
	})))));
	if (i) {
		let { validationBehavior: e } = yf.get(t) || {};
		d.length === 0 && (d = [null]);
		let n = d.map((t, n) => {
			let r = {
				type: "hidden",
				autoComplete: u.autoComplete,
				name: i,
				form: a,
				disabled: o,
				value: t ?? ""
			};
			return e === "native" ? /*#__PURE__*/ z.createElement("input", {
				key: n,
				...r,
				ref: n === 0 ? c : null,
				style: { display: "none" },
				type: "text",
				required: n === 0 && u.required,
				onChange: () => {}
			}) : /*#__PURE__*/ z.createElement("input", {
				key: n,
				...r,
				ref: n === 0 ? c : null
			});
		});
		return /*#__PURE__*/ z.createElement(z.Fragment, null, n);
	}
	return null;
}
//#endregion
//#region ../../node_modules/.pnpm/react-stately@3.48.0_react@19.2.4/node_modules/react-stately/dist/private/select/useSelectState.mjs
function Cf(e) {
	let { selectionMode: t = "single", shouldCloseOnSelect: n = t === "single" } = e, r = Z(e), [i, a] = (0, z.useState)(null), o = (0, z.useMemo)(() => e.defaultValue === void 0 ? t === "single" ? e.defaultSelectedKey ?? null : [] : e.defaultValue, [
		e.defaultValue,
		e.defaultSelectedKey,
		t
	]), [s, c] = Zr((0, z.useMemo)(() => e.value === void 0 ? t === "single" ? e.selectedKey : void 0 : e.value, [
		e.value,
		e.selectedKey,
		t
	]), o, e.onChange), l = t === "single" && Array.isArray(s) ? s[0] : s, u = (n) => {
		if (t === "single") {
			let t = Array.isArray(n) ? n[0] ?? null : n;
			c(t), t !== l && e.onSelectionChange?.(t);
		} else {
			let e = [];
			Array.isArray(n) ? e = n : n != null && (e = [n]), c(e);
		}
	}, d = Kc({
		...e,
		selectionMode: t,
		disallowEmptySelection: t === "single",
		allowDuplicateSelectionEvents: !0,
		selectedKeys: (0, z.useMemo)(() => wf(l), [l]),
		onSelectionChange: (e) => {
			if (e !== "all") {
				if (t === "single") {
					let t = e.values().next().value ?? null;
					u(t);
				} else u([...e]);
				n && r.close(), m.commitValidation();
			}
		}
	}), f = d.selectionManager.firstSelectedKey, p = (0, z.useMemo)(() => [...d.selectionManager.selectedKeys].map((e) => d.collection.getItem(e)).filter((e) => e != null), [d.selectionManager.selectedKeys, d.collection]), m = So({
		...e,
		value: Array.isArray(l) && l.length === 0 ? null : l
	}), [h, g] = (0, z.useState)(!1), [_] = (0, z.useState)(l);
	return {
		...m,
		...d,
		...r,
		value: l,
		defaultValue: o ?? _,
		setValue: u,
		selectedKey: f,
		setSelectedKey: u,
		selectedItem: p[0] ?? null,
		selectedItems: p,
		defaultSelectedKey: e.defaultSelectedKey ?? (e.selectionMode === "single" ? _ : null),
		focusStrategy: i,
		open(t = null) {
			(d.collection.size !== 0 || e.allowsEmptyCollection) && (a(t), r.open());
		},
		toggle(t = null) {
			(d.collection.size !== 0 || e.allowsEmptyCollection) && (a(t), r.toggle());
		},
		isFocused: h,
		setFocused: g
	};
}
function wf(e) {
	if (e !== void 0) return e === null ? [] : Array.isArray(e) ? e : [e];
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/Select.mjs
function Tf(e) {
	return e && e.__esModule ? e.default : e;
}
var Ef = /*#__PURE__*/ (0, z.createContext)(null), Df = /*#__PURE__*/ (0, z.createContext)(null), Of = /*#__PURE__*/ Ei(function(e, t) {
	[e, t] = Wt(e, t, Ef);
	let { children: n, isDisabled: r = !1, isInvalid: i = !1, isRequired: a = !1 } = e, o = (0, z.useMemo)(() => typeof n == "function" ? n({
		isOpen: !1,
		isDisabled: r,
		isInvalid: i,
		isRequired: a,
		isFocused: !1,
		isFocusVisible: !1,
		defaultChildren: null
	}) : n, [
		n,
		r,
		i,
		a
	]);
	return /*#__PURE__*/ z.createElement(Ni, { content: o }, (n) => /*#__PURE__*/ z.createElement(Af, {
		props: e,
		collection: n,
		selectRef: t
	}));
}), kf = [
	za,
	Ya,
	to
];
function Af({ props: e, selectRef: t, collection: n }) {
	let { validationBehavior: r } = Ut(Oo) || {}, i = e.validationBehavior ?? r ?? "native", a = Cf({
		...e,
		collection: n,
		children: void 0,
		validationBehavior: i
	}), { isFocusVisible: o, focusProps: s } = Aa({ within: !0 }), c = (0, z.useRef)(null), [l, u] = Gt(!e["aria-label"] && !e["aria-labelledby"]), { labelProps: d, triggerProps: f, valueProps: p, menuProps: m, descriptionProps: h, errorMessageProps: g, hiddenSelectProps: _, ...v } = bf({
		...Kt(e),
		label: u,
		validationBehavior: i
	}, a, c), y = (0, z.useMemo)(() => ({
		isOpen: a.isOpen,
		isFocused: a.isFocused,
		isFocusVisible: o,
		isDisabled: e.isDisabled || !1,
		isInvalid: v.isInvalid || !1,
		isRequired: e.isRequired || !1
	}), [
		a.isOpen,
		a.isFocused,
		o,
		e.isDisabled,
		v.isInvalid,
		e.isRequired
	]), b = Ht({
		...e,
		values: y,
		defaultClassName: "react-aria-Select"
	}), x = ia(e, { global: !0 });
	delete x.id;
	let S = (0, z.useRef)(null);
	return /*#__PURE__*/ z.createElement(Vt, { values: [
		[Ef, e],
		[Df, a],
		[jf, p],
		[za, {
			...d,
			ref: l,
			elementType: "span"
		}],
		[Ya, {
			...f,
			ref: c,
			isPressed: a.isOpen,
			autoFocus: e.autoFocus
		}],
		[af, a],
		[Ju, {
			trigger: "Select",
			triggerRef: c,
			scrollRef: S,
			placement: "bottom start",
			"aria-labelledby": m["aria-labelledby"],
			clearContexts: kf
		}],
		[Xc, {
			...m,
			ref: S
		}],
		[Zc, a],
		[to, { slots: {
			description: h,
			errorMessage: g
		} }],
		[mo, v]
	] }, /*#__PURE__*/ z.createElement(Yt.div, {
		...V(x, b, s),
		ref: t,
		slot: e.slot || void 0,
		"data-focused": a.isFocused || void 0,
		"data-focus-visible": o || void 0,
		"data-open": a.isOpen || void 0,
		"data-disabled": e.isDisabled || void 0,
		"data-invalid": v.isInvalid || void 0,
		"data-required": e.isRequired || void 0
	}, b.children, /*#__PURE__*/ z.createElement(Sf, {
		..._,
		autoComplete: e.autoComplete
	})));
}
var jf = /*#__PURE__*/ (0, z.createContext)(null), Mf = /*#__PURE__*/ Ei(function(e, t) {
	[e, t] = Wt(e, t, jf);
	let n = (0, z.useContext)(Df), { placeholder: r } = Ut(Ef), i = n.selectedItems.map((e) => {
		let t = e.props?.children;
		return typeof t == "function" && (t = t({
			isHovered: !1,
			isPressed: !1,
			isSelected: !1,
			isFocused: !1,
			isFocusVisible: !1,
			isDisabled: !1,
			selectionMode: "single",
			selectionBehavior: "toggle"
		})), t;
	}), a = sf(), o = (0, z.useMemo)(() => n.selectedItems.map((e) => e?.textValue), [n.selectedItems]), s = n.selectionManager.selectionMode, c = (0, z.useMemo)(() => s === "single" ? o[0] ?? "" : a.format(o), [
		s,
		a,
		o
	]), l = (0, z.useMemo)(() => {
		if (s === "single") return i[0];
		let e = a.formatToParts(o);
		if (e.length === 0) return null;
		let t = 0;
		return e.map((e) => e.type === "element" ? /*#__PURE__*/ z.createElement(z.Fragment, { key: t }, i[t++]) : e.value);
	}, [
		s,
		a,
		o,
		i
	]), u = Yr(Tf(hs), "react-aria-components"), d = Ht({
		...e,
		defaultChildren: l ?? r ?? u.format("selectPlaceholder"),
		defaultClassName: "react-aria-SelectValue",
		values: {
			selectedItem: n.selectedItems[0]?.value ?? null,
			selectedItems: (0, z.useMemo)(() => n.selectedItems.map((e) => e.value ?? null), [n.selectedItems]),
			selectedText: c,
			isPlaceholder: n.selectedItems.length === 0,
			state: n
		}
	}), f = ia(e, { global: !0 });
	return /*#__PURE__*/ z.createElement(Yt.span, {
		ref: t,
		...f,
		...d,
		"data-placeholder": n.selectedItems.length === 0 || void 0
	}, /*#__PURE__*/ z.createElement(to.Provider, { value: void 0 }, d.children));
}), Nf = {
	brand: "data-brand",
	brandTheme: "data-brand-theme",
	theme: "data-theme",
	dir: "dir"
}, Pf = (0, z.createContext)(null), Ff = "(prefers-color-scheme: dark)";
function If({ children: e, brand: t, defaultColorScheme: n = "system", defaultDir: r = "ltr", applyToDocument: i = !0 }) {
	let [a, o] = (0, z.useState)(t);
	(0, z.useEffect)(() => {
		o(t);
	}, [t]);
	let [s, c] = (0, z.useState)(n), [l, u] = (0, z.useState)(r), [d, f] = (0, z.useState)(() => typeof window > "u" ? !1 : window.matchMedia?.(Ff).matches ?? !1);
	(0, z.useEffect)(() => {
		if (typeof window > "u") return;
		let e = window.matchMedia(Ff), t = (e) => f(e.matches);
		return e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, []);
	let p = s === "system" ? d ? "dark" : "light" : s;
	(0, z.useEffect)(() => {
		if (!i || typeof document > "u") return;
		let e = document.documentElement, t = ht[a].brandTheme;
		e.setAttribute(Nf.brand, a), e.setAttribute(Nf.brandTheme, t), e.setAttribute(Nf.theme, p), e.setAttribute(Nf.dir, l);
	}, [
		i,
		a,
		p,
		l
	]);
	let m = (0, z.useMemo)(() => ({
		brand: a,
		colorScheme: s,
		resolvedColorScheme: p,
		dir: l,
		setBrand: o,
		setColorScheme: c,
		setDir: u
	}), [
		a,
		s,
		p,
		l
	]);
	return /* @__PURE__ */ (0, R.jsx)(Pf.Provider, {
		value: m,
		children: e
	});
}
function Lf() {
	return (0, z.useContext)(Pf);
}
//#endregion
//#region ../../packages/ui-react/src/brands/useBrandBehavior.ts
function Rf() {
	let e = Lf()?.brand ?? gt;
	return {
		brand: e,
		components: ht[e].components
	};
}
//#endregion
//#region ../../node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs
var zf = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Bf = d, $ = (e, t) => (n) => {
	if (t?.variants == null) return Bf(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = zf(t) || zf(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return Bf(e, a, t?.compoundVariants?.reduce((e, t) => {
		let { class: n, className: r, ...a } = t;
		return Object.entries(a).every((e) => {
			let [t, n] = e;
			return Array.isArray(n) ? n.includes({
				...i,
				...o
			}[t]) : {
				...i,
				...o
			}[t] === n;
		}) ? [
			...e,
			n,
			r
		] : e;
	}, []), n?.class, n?.className);
}, Vf = {
	neutral: "",
	brand: "",
	positive: "",
	warning: "",
	critical: "",
	info: ""
}, Hf = [
	{
		variant: "soft",
		tone: "brand",
		class: "bg-brand text-brand-on"
	},
	{
		variant: "soft",
		tone: "positive",
		class: "bg-accent-success/5 text-accent-success"
	},
	{
		variant: "soft",
		tone: "warning",
		class: "bg-accent-warning/5 text-accent-warning"
	},
	{
		variant: "soft",
		tone: "critical",
		class: "bg-accent-error/5 text-accent-error"
	},
	{
		variant: "soft",
		tone: "info",
		class: "bg-accent-info/5 text-accent-info"
	}
], Uf = [
	{
		variant: "outline",
		tone: "brand",
		class: "text-brand border-brand"
	},
	{
		variant: "outline",
		tone: "positive",
		class: "text-accent-success border-accent-success"
	},
	{
		variant: "outline",
		tone: "warning",
		class: "text-accent-warning border-accent-warning"
	},
	{
		variant: "outline",
		tone: "critical",
		class: "text-accent-error border-accent-error"
	},
	{
		variant: "outline",
		tone: "info",
		class: "text-accent-info border-accent-info"
	}
], Wf = $([
	"inline-flex items-center gap-2",
	"font-medium",
	"select-none whitespace-nowrap",
	"align-middle",
	"uppercase"
], {
	variants: {
		tone: Vf,
		size: {
			sm: "px-1 h-4.5 text-body-xs rounded-sm",
			md: "px-2 h-10 text-body-sm rounded-md"
		},
		variant: {
			soft: "",
			outline: "border bg-transparent"
		}
	},
	compoundVariants: [
		...Hf,
		...Uf,
		{
			variant: "soft",
			tone: "neutral",
			class: "bg-badge text-badge-text"
		},
		{
			variant: "outline",
			tone: "neutral",
			class: "text-badge-text border-badge"
		}
	],
	defaultVariants: {
		tone: "neutral",
		size: "sm",
		variant: "soft"
	}
});
//#endregion
//#region ../../packages/ui-react/src/components/primitives/Badge/Badge.tsx
function Gf({ tone: e, size: t, variant: n, className: r, children: i, ref: a, ...o }) {
	return /* @__PURE__ */ (0, R.jsx)("span", {
		ref: a,
		className: L(Wf({
			tone: e,
			size: t,
			variant: n
		}), r),
		...o,
		children: i
	});
}
//#endregion
//#region ../../packages/icons/src/utils/cn.ts
var Kf = ct({ extend: { classGroups: { "font-size": [{ text: ["icon-badge"] }] } } });
function qf(...e) {
	return Kf(d(e));
}
//#endregion
//#region ../../packages/icons/src/Icon.tsx
var Jf = {
	unset: "",
	xs: "h-2.5 w-2.5",
	sm: "h-4 w-4",
	md: "h-5 w-5",
	lg: "h-6 w-6"
}, Yf = {
	success: "bg-accent-success",
	error: "bg-accent-error",
	warning: "bg-accent-warning",
	info: "bg-accent-info"
}, Xf = (0, z.forwardRef)(function({ icon: e, size: t = "md", label: n, badge: r, badgeTone: i = "success", className: a, ...o }, s) {
	if (!e) return null;
	let c = n ? {
		role: "img",
		"aria-label": n
	} : {
		"aria-hidden": !0,
		focusable: !1
	}, l = /* @__PURE__ */ (0, R.jsx)(e, {
		ref: s,
		className: qf(Jf[t], a),
		...c,
		...o
	});
	return r === void 0 ? l : /* @__PURE__ */ (0, R.jsxs)("span", {
		className: "relative inline-flex",
		children: [l, /* @__PURE__ */ (0, R.jsx)("span", {
			"aria-hidden": "true",
			className: qf("absolute -right-0.5 -top-1", "flex min-h-4 min-w-4 items-center justify-center text-center", "rounded-full px-1", "text-white text-icon-badge", Yf[i]),
			children: r
		})]
	});
}), Zf = (0, z.forwardRef)(function({ className: e, width: t = 16, height: n = 16, ...r }, i) {
	return /* @__PURE__ */ (0, R.jsx)("svg", {
		ref: i,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 16 16",
		width: t,
		height: n,
		fill: "none",
		className: e,
		...r,
		children: /* @__PURE__ */ (0, R.jsx)("path", {
			fill: "currentColor",
			d: "M6.00004 3.33325C7.08733 3.33325 8.00093 4.07694 8.2599 5.08339L15.3334 5.08325V6.24992L8.25975 6.25036C8.00057 7.25652 7.08712 7.99992 6.00004 7.99992C4.91296 7.99992 3.99951 7.25652 3.74033 6.25036L1.33337 6.24992V5.08325L3.74018 5.08339C3.99916 4.07694 4.91275 3.33325 6.00004 3.33325ZM6.00004 4.49992C5.35571 4.49992 4.83337 5.02225 4.83337 5.66659C4.83337 6.31092 5.35571 6.83325 6.00004 6.83325C6.64437 6.83325 7.16671 6.31092 7.16671 5.66659C7.16671 5.02225 6.64437 4.49992 6.00004 4.49992ZM10.6667 8.58325C11.754 8.58325 12.6676 9.32694 12.9266 10.3334L15.3334 10.3333V11.4999L12.9264 11.5004C12.6672 12.5065 11.7538 13.2499 10.6667 13.2499C9.57963 13.2499 8.66618 12.5065 8.407 11.5004L1.33337 11.4999V10.3333L8.40685 10.3334C8.66582 9.32694 9.57942 8.58325 10.6667 8.58325ZM10.6667 9.74992C10.0224 9.74992 9.50004 10.2723 9.50004 10.9166C9.50004 11.5609 10.0224 12.0833 10.6667 12.0833C11.311 12.0833 11.8334 11.5609 11.8334 10.9166C11.8334 10.2723 11.311 9.74992 10.6667 9.74992Z"
		})
	});
});
Zf.displayName = "FilterIcon";
//#endregion
//#region ../../packages/icons/src/custom/brands/default/FinanceIcon.tsx
var Qf = (0, z.forwardRef)(function({ className: e, width: t = 14, height: n = 14, ...r }, i) {
	return /* @__PURE__ */ (0, R.jsxs)("svg", {
		ref: i,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 14 14",
		width: t,
		height: n,
		fill: "none",
		className: e,
		...r,
		children: [
			/* @__PURE__ */ (0, R.jsx)("path", {
				d: "M9.33917 12.8217H1.75C1.42917 12.8217 1.16667 12.5592 1.16667 12.2383V1.75C1.16667 1.42917 1.42917 1.16667 1.75 1.16667H9.33333C9.65417 1.16667 9.91667 0.904167 9.91667 0.583333C9.91667 0.2625 9.65417 0 9.33333 0H1.75C0.7875 0 0 0.7875 0 1.75V12.2325C0 13.195 0.7875 13.9825 1.75 13.9825H9.33333C9.65417 13.9825 9.91667 13.72 9.91667 13.3992C9.91667 13.0783 9.66 12.8217 9.33917 12.8217Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, R.jsx)("path", {
				d: "M6.42188 5.24414H3.50521C3.18438 5.24414 2.92188 5.50664 2.92188 5.82747C2.92188 6.14831 3.18438 6.41081 3.50521 6.41081H6.42188C6.74271 6.41081 7.00521 6.14831 7.00521 5.82747C7.00521 5.50664 6.74271 5.24414 6.42188 5.24414Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, R.jsx)("path", {
				d: "M6.42188 2.91016H3.50521C3.18438 2.91016 2.92188 3.17266 2.92188 3.49349C2.92188 3.81432 3.18438 4.07682 3.50521 4.07682H6.42188C6.74271 4.07682 7.00521 3.81432 7.00521 3.49349C7.00521 3.17266 6.74271 2.91016 6.42188 2.91016Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, R.jsx)("path", {
				d: "M6.42188 7.57812H3.50521C3.18438 7.57812 2.92188 7.84062 2.92188 8.16146C2.92188 8.48229 3.18438 8.74479 3.50521 8.74479H6.42188C6.74271 8.74479 7.00521 8.48229 7.00521 8.16146C7.00521 7.84062 6.74271 7.57812 6.42188 7.57812Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, R.jsx)("path", {
				d: "M6.42188 9.91016H3.50521C3.18438 9.91016 2.92188 10.1727 2.92188 10.4935C2.92188 10.8143 3.18438 11.0768 3.50521 11.0768H6.42188C6.74271 11.0768 7.00521 10.8143 7.00521 10.4935C7.00521 10.1727 6.74271 9.91016 6.42188 9.91016Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, R.jsx)("path", {
				d: "M13.4162 8.44599C13.0954 8.44599 12.8329 8.70849 12.8329 9.02932C12.8329 9.51349 12.4362 9.91016 11.9521 9.91016H11.3746C10.8904 9.91016 10.4996 9.51349 10.4996 9.02932V8.46349H11.6662C11.9871 8.46349 12.2496 8.20099 12.2496 7.88016C12.2496 7.55932 11.9871 7.29682 11.6662 7.29682H10.4996V6.70182H11.6662C11.9871 6.70182 12.2496 6.43932 12.2496 6.11849C12.2496 5.79766 11.9871 5.53516 11.6662 5.53516H10.4996V4.95766C10.4996 4.47349 10.8962 4.07682 11.3804 4.07682H11.9521C12.4362 4.07682 12.8329 4.47349 12.8329 4.95766C12.8329 5.27849 13.0954 5.54099 13.4162 5.54099C13.7371 5.54099 13.9996 5.27849 13.9996 4.95766C13.9996 3.83182 13.0837 2.91016 11.9521 2.91016H11.3746C10.2487 2.91599 9.33292 3.83182 9.33292 4.95766V5.53516H8.80208C8.48125 5.53516 8.21875 5.79766 8.21875 6.11849C8.21875 6.43932 8.48125 6.70182 8.80208 6.70182H9.33292V7.29682H8.80208C8.48125 7.29682 8.21875 7.55932 8.21875 7.88016C8.21875 8.20099 8.48125 8.46349 8.80208 8.46349H9.33292V9.02932C9.33292 10.161 10.2487 11.0768 11.3746 11.0768H11.9462C13.0721 11.0768 13.9937 10.161 13.9937 9.02932C13.9996 8.70849 13.7371 8.44599 13.4162 8.44599Z",
				fill: "currentColor"
			})
		]
	});
});
Qf.displayName = "FinanceIcon";
//#endregion
//#region ../../packages/icons/src/custom/brands/default/ArrowIcon.tsx
var $f = (0, z.forwardRef)(function({ className: e, width: t = 18, height: n = 18, ...r }, i) {
	return /* @__PURE__ */ (0, R.jsx)("svg", {
		ref: i,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 18 18",
		width: t,
		height: n,
		fill: "none",
		className: e,
		...r,
		children: /* @__PURE__ */ (0, R.jsx)("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M6.88965 14.0285C7.1252 13.7786 7.06675 13.3414 6.83002 13.0915L3.05238 9.59356L16.6894 9.59356C17.0436 9.59356 17.2798 9.28124 17.2798 8.96892C17.2798 8.65661 16.9846 8.34366 16.6894 8.34366L3.05238 8.34366L6.83002 4.90816C7.06675 4.65893 7.1252 4.28353 6.88965 3.97121C6.65351 3.72198 6.2993 3.65889 6.00412 3.90937L0.926535 8.46921C0.86809 8.53168 0.86809 8.59414 0.808464 8.59414L0.750021 8.65661C0.690985 8.71907 0.690985 8.844 0.690985 8.90646C0.690985 8.96892 0.690985 9.09385 0.750021 9.15631C0.750021 9.15631 0.750021 9.21878 0.808464 9.21878C0.86809 9.28124 0.86809 9.34371 0.926535 9.34371L6.06316 14.0909C6.2993 14.3408 6.71195 14.2783 6.88965 14.0285Z",
			fill: "currentColor"
		})
	});
});
$f.displayName = "ArrowIcon";
//#endregion
//#region ../../packages/icons/src/custom/brands/default/CheckIcon.tsx
var ep = (0, z.forwardRef)(function({ className: e, width: t = 10, height: n = 10, ...r }, i) {
	return /* @__PURE__ */ (0, R.jsx)("svg", {
		ref: i,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 10 10",
		width: t,
		height: n,
		fill: "none",
		className: e,
		...r,
		children: /* @__PURE__ */ (0, R.jsx)("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M3.4109 8.64148C3.2517 8.64148 3.0989 8.57619 2.98609 8.4608L0.175253 5.56911C-0.0587506 5.32848 -0.0583506 4.93837 0.176053 4.69815C0.410456 4.45752 0.790062 4.45793 1.02447 4.69897L3.4109 7.15334L8.97538 1.43073C9.20939 1.1901 9.58899 1.18969 9.8238 1.42991C10.0586 1.67013 10.0586 2.06023 9.8246 2.30128L3.83571 8.4608C3.72291 8.5766 3.5701 8.64148 3.4109 8.64148Z",
			fill: "currentColor"
		})
	});
});
ep.displayName = "CheckIcon";
//#endregion
//#region ../../packages/icons/src/custom/brands/default/ChevronIcon.tsx
var tp = (0, z.forwardRef)(function({ className: e, width: t = 10, height: n = 10, ...r }, i) {
	return /* @__PURE__ */ (0, R.jsx)("svg", {
		ref: i,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 10 10",
		width: t,
		height: n,
		fill: "none",
		className: e,
		...r,
		children: /* @__PURE__ */ (0, R.jsx)("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M4.96853 7.75719L4.96047 7.76522L0 3.06207L0.875377 2.23248L4.97135 6.11598L9.06369 2.23478L9.93867 3.06436L4.97901 7.76751L4.96853 7.75719Z",
			fill: "currentColor"
		})
	});
});
tp.displayName = "ChevronIcon";
//#endregion
//#region ../../packages/icons/src/custom/brands/default/ClockIcon.tsx
var np = (0, z.forwardRef)(function({ className: e, width: t = 12, height: n = 12, ...r }, i) {
	return /* @__PURE__ */ (0, R.jsx)("svg", {
		ref: i,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 12 12",
		width: t,
		height: n,
		fill: "none",
		className: e,
		...r,
		children: /* @__PURE__ */ (0, R.jsx)("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M8 8.5C7.86812 8.49812 7.74232 8.44421 7.65 8.35L5.5 6.205V2.5C5.5 2.22386 5.72386 2 6 2C6.27614 2 6.5 2.22386 6.5 2.5V5.79L8.355 7.645C8.54886 7.84002 8.54886 8.15498 8.355 8.35C8.26146 8.44543 8.13362 8.49945 8 8.5ZM6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11C8.76142 11 11 8.76142 11 6C11 4.67392 10.4732 3.40215 9.53553 2.46447C8.59785 1.52678 7.32608 1 6 1ZM6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12Z",
			fill: "currentColor"
		})
	});
});
np.displayName = "ClockIcon";
//#endregion
//#region ../../packages/icons/src/custom/brands/default/CloseIcon.tsx
var rp = (0, z.forwardRef)(function({ className: e, width: t = 16, height: n = 16, ...r }, i) {
	return /* @__PURE__ */ (0, R.jsx)("svg", {
		ref: i,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 16 16",
		width: t,
		height: n,
		fill: "none",
		className: e,
		...r,
		children: /* @__PURE__ */ (0, R.jsx)("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M2.14783 13.8522C2.24166 13.9468 2.3694 14 2.50266 14C2.63591 14 2.76364 13.9468 2.85749 13.8522L8 8.70428L13.1425 13.8522C13.2364 13.9468 13.3641 14 13.4973 14C13.6306 14 13.7583 13.9468 13.8522 13.8522C13.9468 13.7583 14 13.6306 14 13.4973C14 13.364 13.9468 13.2363 13.8522 13.1425L8.70466 7.99957L13.8522 2.85669C14.0481 2.66071 14.0481 2.34297 13.8522 2.14699C13.6562 1.95101 13.3385 1.95101 13.1425 2.14699L8 7.29487L2.85749 2.14699C2.66152 1.95101 2.34379 1.95101 2.14783 2.14699C1.95186 2.34297 1.95186 2.66071 2.14783 2.85669L7.29534 7.99957L2.14783 13.1425C2.05322 13.2363 2 13.364 2 13.4973C2 13.6306 2.05322 13.7583 2.14783 13.8522Z",
			fill: "currentColor"
		})
	});
});
rp.displayName = "CloseIcon";
//#endregion
//#region ../../packages/icons/src/custom/brands/default/ErrorIcon.tsx
var ip = (0, z.forwardRef)(function({ className: e, width: t = 16, height: n = 16, ...r }, i) {
	return /* @__PURE__ */ (0, R.jsxs)("svg", {
		ref: i,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 16 16",
		width: t,
		height: n,
		fill: "none",
		className: e,
		...r,
		children: [
			/* @__PURE__ */ (0, R.jsx)("path", {
				d: "M8.01001 8.98999C7.46001 8.98999 7.01001 8.53999 7.01001 7.98999V4.98999C7.01001 4.43999 7.46001 3.98999 8.01001 3.98999C8.56001 3.98999 9.01001 4.43999 9.01001 4.98999V7.98999C9.01001 8.53999 8.56001 8.98999 8.01001 8.98999Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, R.jsx)("path", {
				d: "M8 11.99C8.55228 11.99 9 11.5423 9 10.99C9 10.4377 8.55228 9.98999 8 9.98999C7.44772 9.98999 7 10.4377 7 10.99C7 11.5423 7.44772 11.99 8 11.99Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, R.jsx)("path", {
				d: "M8 16C3.59 16 0 12.41 0 8C0 3.59 3.59 0 8 0C12.41 0 16 3.59 16 8C16 12.41 12.41 16 8 16ZM8 2C4.69 2 2 4.69 2 8C2 11.31 4.69 14 8 14C11.31 14 14 11.31 14 8C14 4.69 11.31 2 8 2Z",
				fill: "currentColor"
			})
		]
	});
});
ip.displayName = "ErrorIcon";
//#endregion
//#region ../../packages/icons/src/custom/brands/default/GlobeIcon.tsx
var ap = (0, z.forwardRef)(function({ className: e, width: t = 18, height: n = 18, ...r }, i) {
	return /* @__PURE__ */ (0, R.jsx)("svg", {
		ref: i,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 18 18",
		width: t,
		height: n,
		fill: "none",
		className: e,
		...r,
		children: /* @__PURE__ */ (0, R.jsx)("path", {
			fill: "currentColor",
			d: "M18 9.00024C18 4.03754 13.9625 0 9.00024 0C4.03802 0 0 4.03754 0 9.00024C0 13.9629 3.86623 17.8258 8.68209 17.9942C8.7128 17.9981 8.74352 18.0005 8.77423 18.0005C8.78958 18.0005 8.80542 17.999 8.82077 17.9981C8.88028 17.999 8.93978 18.0005 8.99976 18.0005C9.05638 18.0005 9.11253 17.9995 9.16867 17.9986C9.18355 17.9995 9.19794 18.0005 9.21282 18.0005C9.24209 18.0005 9.27136 17.9981 9.30015 17.9947C14.1242 17.8359 18 13.8622 18 9.00024ZM6.43971 11.9533C6.23481 11.2455 6.10429 10.5137 6.05151 9.76754H11.9365C11.8837 10.5137 11.7532 11.245 11.5483 11.9533H6.44019H6.43971ZM10.9686 13.4888C10.4796 14.5316 9.81648 15.5009 8.99352 16.3627C8.17056 15.5009 7.5074 14.5316 7.01842 13.4888H10.9686ZM2.14545 6.04671H4.85618C4.67671 6.75834 4.56202 7.48868 4.515 8.23247H1.57538C1.65407 7.46373 1.85082 6.72907 2.14593 6.04671H2.14545ZM8.99352 1.66511C9.8088 2.51926 10.4676 3.47898 10.9557 4.51116H7.03186C7.51987 3.47898 8.17824 2.51926 8.994 1.66511H8.99352ZM11.5392 6.04671C11.7465 6.7545 11.8794 7.4858 11.9341 8.23247H6.05294C6.10765 7.48628 6.24057 6.7545 6.44787 6.04671H11.5392ZM16.4251 8.23247H13.4725C13.425 7.48916 13.3108 6.75834 13.1313 6.04671H15.8545C16.1497 6.72907 16.3459 7.46325 16.4251 8.23247ZM1.5749 9.76801H4.5126C4.55818 10.5113 4.67143 11.2421 4.84898 11.9538H2.14545C1.85034 11.2714 1.65407 10.5372 1.5749 9.76801ZM13.4744 9.76801H16.4251C16.3464 10.5367 16.1497 11.2714 15.8545 11.9538H13.1381C13.3156 11.2421 13.4289 10.5113 13.4744 9.76801ZM14.9601 4.51116H12.6323C12.2551 3.57255 11.759 2.68049 11.1514 1.85178C12.687 2.31484 14.0157 3.26016 14.9606 4.51116H14.9601ZM6.83224 1.85706C6.22617 2.68433 5.73096 3.57495 5.35475 4.51116H3.03991C3.98091 3.26448 5.3034 2.32156 6.83224 1.85706ZM3.03991 13.4888H5.34371C5.71608 14.4222 6.20602 15.3099 6.80632 16.1353C5.28853 15.6679 3.97611 14.7283 3.04039 13.4888H3.03991ZM11.1774 16.1401C11.7791 15.3133 12.2705 14.4241 12.6433 13.4888H14.9596C14.0205 14.7326 12.7019 15.6741 11.1774 16.1401Z"
		})
	});
});
ap.displayName = "GlobeIcon";
//#endregion
//#region ../../packages/icons/src/custom/brands/default/InfoIcon.tsx
var op = (0, z.forwardRef)(function({ className: e, width: t = 24, height: n = 24, ...r }, i) {
	return /* @__PURE__ */ (0, R.jsxs)("svg", {
		ref: i,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		width: t,
		height: n,
		fill: "none",
		className: e,
		...r,
		children: [/* @__PURE__ */ (0, R.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "11.5",
			fill: "white"
		}), /* @__PURE__ */ (0, R.jsx)("path", {
			d: "M12.834 16.833H9.5V15.167H11.167V11.834H10.333V10.167H12.833V15.167H14.5V16.834L12.834 16.833ZM10.333 7.25C10.333 7.00282 10.4063 6.76118 10.5436 6.55564C10.6809 6.3501 10.8761 6.18989 11.1044 6.09525C11.3328 6.00061 11.584 5.9758 11.8265 6.02395C12.0689 6.0721 12.2917 6.19105 12.4665 6.36576C12.6414 6.54048 12.7605 6.76311 12.8089 7.00552C12.8572 7.24794 12.8326 7.49924 12.7381 7.72766C12.6437 7.95609 12.4836 8.15138 12.2782 8.28885C12.0728 8.42632 11.8312 8.4998 11.584 8.5C11.4198 8.50013 11.2571 8.4679 11.1053 8.40514C10.9536 8.34238 10.8156 8.25032 10.6995 8.13424C10.5833 8.01815 10.4911 7.88031 10.4282 7.72859C10.3654 7.57686 10.333 7.41424 10.333 7.25Z",
			fill: "currentColor",
			stroke: "none"
		})]
	});
});
op.displayName = "InfoIcon";
//#endregion
//#region ../../packages/icons/src/custom/brands/default/MapIcon.tsx
var sp = (0, z.forwardRef)(function({ className: e, width: t = 20, height: n = 20, ...r }, i) {
	return /* @__PURE__ */ (0, R.jsx)("svg", {
		ref: i,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 20 20",
		width: t,
		height: n,
		fill: "none",
		className: e,
		...r,
		children: /* @__PURE__ */ (0, R.jsx)("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M13 12.505L10.43 14.0492C10.3033 14.1233 10.1567 14.1667 10 14.1667C9.84333 14.1667 9.69667 14.1233 9.57167 14.0483L7 12.5033C5.30333 11.4842 4.16667 9.625 4.16667 7.5C4.16667 4.27833 6.77833 1.66667 10 1.66667C13.2225 1.66667 15.8333 4.27833 15.8333 7.5C15.8333 9.625 14.6975 11.4842 13 12.505ZM10 0C5.8575 0 2.5 3.3575 2.5 7.5C2.5 9.95667 3.68083 12.1367 5.50583 13.505L7.49667 14.9967C8.51083 15.7567 9.16667 16.9675 9.16667 18.3333V19.1667C9.16667 19.6275 9.54 20 10 20C10.46 20 10.8333 19.6275 10.8333 19.1667V18.3333C10.8333 16.9675 11.49 15.7567 12.5033 14.9967L14.4958 13.505C16.32 12.1367 17.5 9.95667 17.5 7.5C17.5 3.3575 14.1425 0 10 0ZM10 5C11.3808 5 12.5 6.11917 12.5 7.5C12.5 8.88083 11.3808 10 10 10C8.61917 10 7.5 8.88083 7.5 7.5C7.5 6.11917 8.61917 5 10 5Z",
			fill: "currentColor"
		})
	});
});
sp.displayName = "MapIcon";
//#endregion
//#region ../../packages/icons/src/custom/brands/default/MenuIcon.tsx
var cp = (0, z.forwardRef)(function({ className: e, width: t = 16, height: n = 16, ...r }, i) {
	return /* @__PURE__ */ (0, R.jsx)("svg", {
		ref: i,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 16 16",
		width: t,
		height: n,
		fill: "none",
		className: e,
		...r,
		children: /* @__PURE__ */ (0, R.jsx)("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M0 12.7654H16V15.052H0V12.7654ZM0 9.33203H16V7.05203H0V9.33203ZM0 1.33203V3.6187H16V1.33203H0Z",
			fill: "currentColor"
		})
	});
});
cp.displayName = "MenuIcon";
//#endregion
//#region ../../packages/icons/src/custom/brands/default/SaveIcon.tsx
var lp = (0, z.forwardRef)(function({ className: e, width: t = 20, height: n = 20, ...r }, i) {
	return /* @__PURE__ */ (0, R.jsx)("svg", {
		ref: i,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 20 20",
		width: t,
		height: n,
		fill: "none",
		className: e,
		...r,
		children: /* @__PURE__ */ (0, R.jsx)("path", {
			d: "M4.18769 20C4.07764 20 3.96706 19.9786 3.86182 19.9354C3.54184 19.8034 3.3335 19.4914 3.3335 19.1453V2.50968C3.33296 1.1261 4.45906 0 5.84264 0H14.1292C15.5427 0 16.6923 1.1496 16.6923 2.5631V19.1367C16.6923 19.4818 16.4845 19.7933 16.1656 19.9257C15.8467 20.0582 15.4797 19.9861 15.235 19.7425L9.98912 14.5276L4.79347 19.7473C4.63001 19.9119 4.41045 19.9989 4.18769 19.9989V20ZM9.98592 12.4651C10.2039 12.4651 10.4218 12.5479 10.5885 12.7135L14.9828 17.0817V2.5631C14.9828 2.09247 14.5998 1.70945 14.1292 1.70945H5.84264C5.40139 1.70945 5.04241 2.06843 5.04241 2.50968V17.0747L9.38013 12.7167C9.54734 12.5489 9.76636 12.4651 9.98592 12.4651Z",
			fill: "currentColor"
		})
	});
});
lp.displayName = "SaveIcon";
//#endregion
//#region ../../packages/icons/src/custom/brands/default/SelectArrowIcon.tsx
var up = (0, z.forwardRef)(function({ className: e, width: t = 14, height: n = 14, ...r }, i) {
	return /* @__PURE__ */ (0, R.jsx)("svg", {
		ref: i,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 14 14",
		width: t,
		height: n,
		fill: "none",
		className: e,
		...r,
		children: /* @__PURE__ */ (0, R.jsx)("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M6.99886 10.7883L6.98751 10.7998L0 4.09874L1.23309 2.91675L7.00284 8.44994L12.7675 2.92001L14 4.102L7.01362 10.803L6.99886 10.7883V10.7883Z",
			fill: "currentColor"
		})
	});
});
up.displayName = "SelectArrowIcon";
//#endregion
//#region ../../packages/icons/src/custom/brands/default/NavArrowIcon.tsx
var dp = (0, z.forwardRef)(function({ className: e, width: t = 25, height: n = 25, ...r }, i) {
	return /* @__PURE__ */ (0, R.jsx)("svg", {
		ref: i,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 25 25",
		width: t,
		height: n,
		fill: "none",
		className: e,
		...r,
		children: /* @__PURE__ */ (0, R.jsx)("path", {
			d: "M9.375 18.75L15.625 12.5L9.375 6.25",
			stroke: "currentColor",
			strokeWidth: "1.25",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
});
dp.displayName = "NavArrowIcon";
//#endregion
//#region ../../packages/icons/src/custom/brandIcons.ts
var fp = {
	globe: ap,
	chevron: tp,
	selectArrow: up,
	close: rp,
	filter: Zf,
	info: op,
	error: ip,
	map: sp,
	save: lp,
	menu: cp,
	arrow: $f,
	navArrow: dp,
	clock: np,
	check: ep,
	finance: Qf
}, pp = {
	"range-rover": () => Promise.resolve({}),
	discovery: () => Promise.resolve({}),
	jaguar: () => import("./jaguar-L6JOr8EB.js").then((e) => e.jaguarIconOverrides)
}, mp = /* @__PURE__ */ new Map(), hp = /* @__PURE__ */ new Map();
function gp(e) {
	if (!mp.has(e)) {
		let t = pp[e]().then((t) => (hp.set(e, t), {
			...fp,
			...t
		}));
		mp.set(e, t);
	}
	return mp.get(e);
}
function _p() {
	return fp;
}
//#endregion
//#region ../../packages/icons/src/custom/location/BelgiumMap.tsx
var vp = (0, z.forwardRef)(function({ className: e, width: t = 19, height: n = 19, ...r }, i) {
	return /* @__PURE__ */ (0, R.jsxs)("svg", {
		ref: i,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 19 19",
		width: t,
		height: n,
		fill: "none",
		className: e,
		...r,
		children: [
			/* @__PURE__ */ (0, R.jsx)("mask", {
				id: "mask0_16568_64172",
				style: { maskType: "alpha" },
				maskUnits: "userSpaceOnUse",
				x: "0",
				y: "0",
				width: "17",
				height: "17",
				children: /* @__PURE__ */ (0, R.jsx)("circle", {
					cx: "8.75",
					cy: "8.75",
					r: "8",
					fill: "#D9D9D9"
				})
			}),
			/* @__PURE__ */ (0, R.jsxs)("g", {
				mask: "url(#mask0_16568_64172)",
				children: [
					/* @__PURE__ */ (0, R.jsx)("rect", {
						x: "-3.39258",
						y: "0.75",
						width: "8.28571",
						height: "16",
						fill: "#020203"
					}),
					/* @__PURE__ */ (0, R.jsx)("rect", {
						x: "4.89355",
						y: "0.75",
						width: "8.28571",
						height: "16",
						fill: "#FFDE0D"
					}),
					/* @__PURE__ */ (0, R.jsx)("rect", {
						x: "13.084",
						y: "0.75",
						width: "8.28571",
						height: "16",
						fill: "#E41915"
					})
				]
			}),
			/* @__PURE__ */ (0, R.jsx)("rect", {
				x: "0.375",
				y: "0.375",
				width: "16.75",
				height: "16.75",
				rx: "8.375",
				stroke: "#E9ECEC",
				strokeWidth: "0.75"
			})
		]
	});
});
vp.displayName = "BelgiumMap";
//#endregion
//#region ../../packages/icons/src/custom/locationIcons.ts
var yp = { be: vp };
Object.keys(yp);
function bp(e) {
	return yp[e] ?? null;
}
//#endregion
//#region ../../packages/icons/src/custom/social/Facebook.tsx
var xp = (0, z.forwardRef)(function({ className: e, width: t = 24, height: n = 24, ...r }, i) {
	return /* @__PURE__ */ (0, R.jsx)("svg", {
		ref: i,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		width: t,
		height: n,
		fill: "none",
		className: e,
		...r,
		children: /* @__PURE__ */ (0, R.jsx)("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M9.25747 9.22067H7V12.9436H9.25747V24H13.6563V12.9436H16.7026L17.1541 9.22067H13.7692V7.07672C13.7692 6.17374 13.9949 5.83576 14.7844 5.83576H17.1535V2H14.1078C10.7229 2 9.25747 3.46671 9.25747 6.17438V9.22067Z",
			fill: "currentColor"
		})
	});
});
xp.displayName = "Facebook";
//#endregion
//#region ../../packages/icons/src/custom/social/Instagram.tsx
var Sp = (0, z.forwardRef)(function({ className: e, width: t = 24, height: n = 24, ...r }, i) {
	return /* @__PURE__ */ (0, R.jsx)("svg", {
		ref: i,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		width: t,
		height: n,
		fill: "none",
		className: e,
		...r,
		children: /* @__PURE__ */ (0, R.jsx)("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M13.0952 1C15.1052 1.00347 15.5231 1.01925 16.5345 1.0654C17.7053 1.1188 18.5049 1.30477 19.2046 1.57671C19.928 1.85778 20.5414 2.23391 21.153 2.84543C21.7645 3.45699 22.1406 4.07044 22.4217 4.79379C22.6936 5.49347 22.8796 6.2931 22.933 7.46392C22.9792 8.47535 22.9949 8.89325 22.9984 10.9032L22.9992 11.6994L22.9992 11.9992C22.9992 12.1022 22.9992 12.2021 22.9992 12.2991L22.9984 13.0952C22.9949 15.1052 22.9792 15.5231 22.933 16.5345C22.8796 17.7053 22.6936 18.5049 22.4217 19.2046C22.1406 19.928 21.7645 20.5414 21.153 21.153C20.5414 21.7645 19.928 22.1406 19.2046 22.4217C18.5049 22.6936 17.7053 22.8796 16.5345 22.933C15.5231 22.9792 15.1052 22.9949 13.0952 22.9984L12.2991 22.9992L11.9992 22.9992C11.8962 22.9992 11.7963 22.9992 11.6994 22.9992L10.9032 22.9984C8.89325 22.9949 8.47535 22.9792 7.46392 22.933C6.2931 22.8796 5.49347 22.6936 4.79379 22.4217C4.07044 22.1406 3.45699 21.7645 2.84543 21.153C2.23391 20.5414 1.85778 19.928 1.57671 19.2046C1.30477 18.5049 1.1188 17.7053 1.0654 16.5345C1.01925 15.5231 1.00347 15.1052 1 13.0952V10.9032C1.00347 8.89325 1.01925 8.47535 1.0654 7.46392C1.1188 6.2931 1.30477 5.49347 1.57671 4.79379C1.85778 4.07044 2.23391 3.45699 2.84543 2.84543C3.45699 2.23391 4.07044 1.85778 4.79379 1.57671C5.49347 1.30477 6.2931 1.1188 7.46392 1.0654C8.47535 1.01925 8.89325 1.00347 10.9032 1H13.0952ZM11.9992 2.98118C11.8979 2.98118 11.7997 2.98119 11.7045 2.98122L10.9227 2.9819C9.50283 2.98418 8.89973 2.99241 8.3001 3.01386L8.09923 3.02151C7.93009 3.02832 7.75424 3.0362 7.55426 3.04532C6.48177 3.09423 5.89933 3.27343 5.51172 3.42407C4.99827 3.62362 4.63183 3.86198 4.24693 4.24693C3.86198 4.63183 3.62362 4.99827 3.42407 5.51172C3.27343 5.89933 3.09423 6.48177 3.04532 7.55426C3.0362 7.75424 3.02832 7.93009 3.02151 8.09923L3.01386 8.3001C2.99241 8.89973 2.98418 9.50283 2.9819 10.9227L2.98122 11.7045L2.98118 11.9992C2.98118 12.1005 2.98119 12.1987 2.98122 12.294L2.9819 13.0757C2.98418 14.4956 2.99241 15.0987 3.01386 15.6983L3.02151 15.8992C3.02832 16.0683 3.0362 16.2442 3.04532 16.4441C3.09423 17.5166 3.27343 18.0991 3.42407 18.4867C3.62362 19.0001 3.86203 19.3666 4.24693 19.7515C4.63183 20.1364 4.99827 20.3748 5.51172 20.5743C5.89933 20.725 6.48177 20.9042 7.55426 20.9531C8.55406 20.9987 8.95047 21.0133 10.9226 21.0165L11.7045 21.0172L11.9992 21.0172C12.1005 21.0172 12.1987 21.0172 12.294 21.0172L13.0758 21.0165C15.048 21.0133 15.4444 20.9987 16.4441 20.9531C17.5166 20.9042 18.0991 20.725 18.4867 20.5743C19.0001 20.3748 19.3666 20.1364 19.7515 19.7515C20.1364 19.3666 20.3748 19.0001 20.5743 18.4867C20.725 18.0991 20.9042 17.5166 20.9531 16.4441C20.9622 16.2442 20.9701 16.0683 20.9769 15.8992L20.9845 15.6983C21.006 15.0987 21.0142 14.4956 21.0165 13.0757L21.0172 12.294L21.0172 11.9992C21.0172 11.8979 21.0172 11.7997 21.0172 11.7045L21.0165 10.9227C21.0142 9.50283 21.006 8.89973 20.9845 8.3001L20.9769 8.09923C20.9701 7.93009 20.9622 7.75424 20.9531 7.55426C20.9042 6.48177 20.725 5.89933 20.5743 5.51172C20.3748 4.99827 20.1364 4.63183 19.7515 4.24693C19.3666 3.86198 19.0001 3.62362 18.4867 3.42407C18.0991 3.27343 17.5166 3.09423 16.4441 3.04532C16.2442 3.0362 16.0683 3.02832 15.8992 3.02151L15.6983 3.01386C15.0987 2.99241 14.4956 2.98418 13.0757 2.9819L12.294 2.98122L11.9992 2.98118ZM11.9992 6.35056C15.1189 6.35056 17.6478 8.87952 17.6478 11.9992C17.6478 15.1189 15.1189 17.6478 11.9992 17.6478C8.87952 17.6478 6.35056 15.1189 6.35056 11.9992C6.35056 8.87952 8.87952 6.35056 11.9992 6.35056ZM11.9992 8.33254C9.97415 8.33254 8.33254 9.97415 8.33254 11.9992C8.33254 14.0243 9.97415 15.6659 11.9992 15.6659C14.0243 15.6659 15.6659 14.0243 15.6659 11.9992C15.6659 9.97415 14.0243 8.33254 11.9992 8.33254ZM17.871 4.80736C18.6 4.80736 19.191 5.39837 19.191 6.12739C19.191 6.85641 18.6 7.44737 17.871 7.44737C17.142 7.44737 16.551 6.85641 16.551 6.12739C16.551 5.39837 17.142 4.80736 17.871 4.80736Z",
			fill: "currentColor"
		})
	});
});
Sp.displayName = "Instagram";
//#endregion
//#region ../../packages/icons/src/custom/social/TikTok.tsx
var Cp = (0, z.forwardRef)(function({ className: e, width: t = 24, height: n = 24, ...r }, i) {
	return /* @__PURE__ */ (0, R.jsx)("svg", {
		ref: i,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		width: t,
		height: n,
		fill: "none",
		className: e,
		...r,
		children: /* @__PURE__ */ (0, R.jsx)("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M18.3625 5.4C17.125 4.575 16.3 3.3375 16.025 1.9625C16.025 1.6875 15.8875 1.275 15.8875 1H12.175V16.125C12.175 17.775 10.6625 19.15 9.0125 19.15C8.4625 19.15 7.9125 19.0125 7.5 18.7375C6.5375 18.1875 5.85 17.0875 5.85 15.9875C5.85 14.2 7.225 12.825 9.0125 12.825C9.2875 12.825 9.7 12.825 9.975 12.9625V9.1125H9.0125C5.1625 9.1125 2 12.1375 2 15.9875C2 18.325 3.2375 20.3875 5.025 21.625C6.125 22.5875 7.5 23 9.0125 23C12.8625 23 16.025 19.8375 16.025 15.9875V8.2875C17.5375 9.3875 19.325 9.9375 21.25 9.9375V6.225C20.15 6.225 19.1875 5.95 18.3625 5.4Z",
			fill: "currentColor"
		})
	});
});
Cp.displayName = "TikTok";
//#endregion
//#region ../../packages/icons/src/custom/social/X.tsx
var wp = (0, z.forwardRef)(function({ className: e, width: t = 24, height: n = 24, ...r }, i) {
	return /* @__PURE__ */ (0, R.jsx)("svg", {
		ref: i,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		width: t,
		height: n,
		fill: "none",
		className: e,
		...r,
		children: /* @__PURE__ */ (0, R.jsx)("path", {
			d: "M13.8362 11.3154L21.8657 2H19.963L12.9911 10.0886L7.4226 2H1L9.42057 14.2313L1 24H2.90289L10.2655 15.4583L16.1462 24H22.5688L13.836 11.3154H13.8366H13.8362ZM11.23 14.3389L10.3768 13.121L3.58842 3.42957H6.51096L11.9894 11.2508L12.8426 12.4687L19.9639 22.6352H17.0413L11.2302 14.3392V14.3387L11.23 14.3389Z",
			fill: "currentColor"
		})
	});
});
wp.displayName = "X";
//#endregion
//#region ../../packages/icons/src/custom/social/YouTube.tsx
var Tp = (0, z.forwardRef)(function({ className: e, width: t = 24, height: n = 24, ...r }, i) {
	return /* @__PURE__ */ (0, R.jsx)("svg", {
		ref: i,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		width: t,
		height: n,
		fill: "none",
		className: e,
		...r,
		children: /* @__PURE__ */ (0, R.jsx)("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M12.1561 4.00001C12.1813 4.00009 12.2094 4.00019 12.2402 4.00031L12.4575 4.00139C14.1139 4.0111 19.7937 4.07624 21.3923 4.51363C22.4204 4.79036 23.231 5.60079 23.5078 6.62865C23.9751 8.33576 24.0013 11.7255 24.0022 12.3277L24.0022 12.4096L24.0021 12.4202L24.0013 12.5814C23.9949 13.3346 23.9422 16.5419 23.5078 18.1921C23.231 19.2199 22.4204 20.0304 21.3923 20.3071C19.7538 20.7382 13.8274 20.7932 12.3409 20.8002L12.1561 20.801C12.1309 20.801 12.1086 20.8011 12.0894 20.8011L11.9128 20.8011C11.8936 20.8011 11.8713 20.801 11.8462 20.801L11.6618 20.8002C10.9385 20.7966 9.16084 20.7812 7.33741 20.7143L6.79002 20.6926C5.05864 20.6189 3.37697 20.4951 2.60968 20.2873C1.58158 20.0106 0.770964 19.2002 0.494168 18.1723C0.0298462 16.4269 0.0017055 12.8673 0 12.4423V12.3589C0.0017055 11.9359 0.0298462 8.39266 0.494168 6.62865C0.770964 5.60079 1.60135 4.77059 2.60968 4.49386C4.16823 4.08381 9.60659 4.01401 11.4128 4.00213L11.7617 4.00029C11.7926 4.00017 11.8206 4.00008 11.8458 4L12.1561 4.00001ZM9.60866 8.80297V15.998L15.8563 12.4005L9.60866 8.80297Z",
			fill: "currentColor"
		})
	});
});
Tp.displayName = "YouTube";
//#endregion
//#region ../../packages/icons/src/custom/socialIcons.ts
var Ep = {
	instagram: Sp,
	tiktok: Cp,
	facebook: xp,
	youtube: Tp,
	x: wp
};
Object.keys(Ep);
function Dp(e) {
	return Ep[e] ?? null;
}
//#endregion
//#region ../../packages/icons/src/custom/brands/default/ExternalIcon.tsx
var Op = (0, z.forwardRef)(function({ className: e, width: t = 24, height: n = 24, ...r }, i) {
	return /* @__PURE__ */ (0, R.jsxs)("svg", {
		ref: i,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		width: t,
		height: n,
		className: e,
		stroke: "currentColor",
		...r,
		children: [
			/* @__PURE__ */ (0, R.jsx)("path", {
				d: "M15 3h6v6",
				stroke: "currentColor",
				fill: "none"
			}),
			/* @__PURE__ */ (0, R.jsx)("path", {
				d: "M10 14 21 3",
				fill: "none"
			}),
			/* @__PURE__ */ (0, R.jsx)("path", {
				d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
				fill: "none"
			})
		]
	});
});
Op.displayName = "ExternalLinkIcon";
//#endregion
//#region ../../packages/ui-react/src/components/internal/Focus/focus.variants.ts
var kp = $([], {
	variants: {
		mode: {
			self: ["focus-visible:outline-none", "data-focus-visible:focus-ring"],
			secondary: ["focus-visible:outline-none", "data-focus-visible:button-secondary-focus"],
			group: ["focus-visible:outline-none group-data-focus-visible:outline-none", "group-data-focus-visible:focus-ring"]
		},
		offset: {
			none: "",
			inset: ["focus-visible:outline-none", "data-focus-visible:focus-ring-inset"],
			outset: ["focus-visible:outline-none", "data-focus-visible:focus-ring-outset"]
		}
	},
	defaultVariants: { mode: "self" }
}), Ap = $([
	"inline-flex items-center gap-2",
	"underline decoration-transparent cursor-pointer",
	"transition-colors",
	"hover:decoration-inherit",
	kp(),
	"data-[disabled]:cursor-not-allowed data-[disabled]:opacity-60 data-[disabled]:no-underline data-[disabled]:hover:text-brand"
], {
	variants: {
		variant: {
			standalone: "link-standalone",
			inline: "text-brand hover:text-brand-hover",
			button: "no-underline decoration-transparent hover:no-underline"
		},
		size: {
			md: "text-link",
			sm: "text-link-sm",
			xs: "text-link-xs",
			auto: ""
		}
	},
	defaultVariants: { variant: "inline" }
}), jp = /^https?:\/\//i;
function Mp(e) {
	return jp.test(e);
}
function Np(e) {
	let t = new Set((e ?? "").split(/\s+/u).filter(Boolean));
	return t.add("noopener"), t.add("noreferrer"), Array.from(t).join(" ");
}
function Pp({ variant: e, showExternalIcon: t = !1, external: n, className: r, children: i, href: a, target: o, rel: s, ref: c, ...l }) {
	let u = n ?? Mp(a), d = o ?? (u ? "_blank" : void 0), f = d === "_blank", p = f ? Np(s) : s, m = Ap({ variant: e });
	return /* @__PURE__ */ (0, R.jsxs)(Ra, {
		ref: c,
		href: a,
		target: d,
		rel: p,
		...l,
		className: L(m, r),
		children: [
			i,
			f && t ? /* @__PURE__ */ (0, R.jsx)(Xf, {
				icon: Op,
				size: "sm",
				"aria-hidden": "true",
				className: "ml-icon-margin inline-block icon-external-inline"
			}) : null,
			f ? /* @__PURE__ */ (0, R.jsx)("span", {
				className: "sr-only",
				children: " (opens in new tab)"
			}) : null
		]
	});
}
//#endregion
//#region ../../packages/ui-react/src/components/primitives/Button/Button.variants.ts
var Fp = $([
	"inline-flex items-center justify-center gap-3",
	"font-body",
	"transition-colors",
	"select-none",
	"cursor-pointer",
	"data-[disabled]:cursor-not-allowed",
	"data-[pending]:cursor-progress data-[pending]:opacity-80"
], {
	variants: {
		variant: {
			primary: [
				"button-primary hover:button-primary-hover",
				"text-cta",
				"data-[disabled]:button-disabled",
				kp()
			],
			secondary: [
				"button-secondary hover:button-secondary-hover",
				"text-cta",
				"data-[disabled]:button-disabled",
				kp({ mode: "secondary" })
			],
			ghost: [
				"button-ghost hover:button-ghost-hover hover:underline",
				"text-cta",
				"data-[disabled]:button-ghost-disabled",
				kp()
			],
			inline: [
				"button-inline hover:button-inline-hover",
				"text-cta-inline",
				"data-[disabled]:button-inline-disabled",
				kp()
			],
			composed: [
				"data-[disabled]:button-disabled",
				"rounded-none p-0",
				kp()
			]
		},
		size: {
			sm: "button-size-sm",
			md: "button-size-md",
			auto: ""
		},
		fullWidth: {
			true: "w-full",
			false: ""
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md",
		fullWidth: !1
	},
	compoundVariants: [{
		variant: "ghost",
		className: "p-0 h-auto"
	}, {
		variant: "inline",
		className: "p-0 h-auto"
	}]
});
//#endregion
//#region ../../packages/ui-react/src/components/primitives/Button/Button.tsx
function Ip(e) {
	return "href" in e && typeof e.href == "string";
}
function Lp({ variant: e, size: t, fullWidth: n, isDisabled: r, isLoading: i, className: a, children: o, ...s }) {
	let c = Fp({
		variant: e,
		size: t,
		fullWidth: n
	});
	if (Ip(s)) {
		let { href: e, external: t, showExternalIcon: n, ref: l, ...u } = s;
		return /* @__PURE__ */ (0, R.jsx)(Pp, {
			...u,
			ref: l,
			href: e,
			external: t,
			showExternalIcon: n,
			isDisabled: r || i,
			variant: "button",
			"aria-busy": i || void 0,
			className: L(c, a),
			children: o
		});
	}
	let { ref: l, type: u = "button", ...d } = s;
	return /* @__PURE__ */ (0, R.jsx)(Xa, {
		...d,
		ref: l,
		type: u,
		isPending: i,
		isDisabled: r || i,
		className: L(c, a),
		children: o
	});
}
//#endregion
//#region ../../packages/ui-react/src/components/internal/Field/field.variants.ts
var Rp = $("flex flex-col gap-1.5"), zp = $([
	"field-label",
	"select-none",
	"data-[disabled]:field-label-disabled"
]), Bp = $([
	"field-control",
	"transition-colors",
	"data-[hovered]:field-control-hover",
	"data-[focused]:field-control-focus",
	kp(),
	"disabled:cursor-not-allowed disabled:opacity-60 disabled:bg-control-bg-disabled",
	"data-disabled:cursor-not-allowed data-disabled:opacity-60 data-disabled:bg-control-bg-disabled",
	"aria-invalid:field-control-invalid",
	"data-invalid:field-control-invalid",
	"aria-[valid=true]:field-control-valid",
	"data-valid:field-control-valid",
	"data-focused:data-invalid:field-control-focus-invalid",
	"data-[focused]:data-[valid]:field-control-focus-valid",
	"placeholder:field-placeholder"
], {
	variants: { size: {
		sm: "field-control-sm",
		md: "field-control-md",
		lg: "field-control-lg"
	} },
	defaultVariants: { size: "md" }
}), Vp = $(["text-caption text-text-muted"]), Hp = $("relative", {
	variants: { labelPlacement: {
		outside: "flex flex-col gap-2",
		inside: ["field-floating-root"],
		inline: "flex flex-row items-center gap-2"
	} },
	defaultVariants: { labelPlacement: "outside" }
}), Up = $([], {
	variants: { labelPlacement: {
		outside: "",
		inside: "ds-floating-label field-floating-label",
		inline: "shrink-0"
	} },
	defaultVariants: { labelPlacement: "outside" }
}), Wp = $("field-status text-accent-error flex gap-2 items-center", {
	variants: { errorStyle: {
		inline: "",
		divider: "field-floating-status"
	} },
	defaultVariants: { errorStyle: "inline" }
});
//#endregion
//#region ../../packages/ui-react/src/icons/useBrandIcons.ts
function Gp() {
	let { brand: e } = Rf(), [t, n] = (0, z.useState)(() => ({
		brand: e,
		icons: _p()
	})), r = t.brand === e ? t.icons : _p();
	return (0, z.useEffect)(() => {
		let t = !0;
		return gp(e).then((r) => {
			t && n({
				brand: e,
				icons: r
			});
		}), () => {
			t = !1;
		};
	}, [e]), r;
}
//#endregion
//#region ../../packages/ui-react/src/components/primitives/Heading/Heading.variants.ts
var Kp = $("font-heading", {
	variants: { variant: {
		"heading-1": "text-h1 font-semibold text-text-primary",
		"heading-2": "text-h2 font-semibold text-text-primary",
		"heading-3": "text-h3 font-semibold text-text-primary",
		"heading-4": "text-h4 font-semibold text-text-primary"
	} },
	defaultVariants: { variant: "heading-2" }
});
//#endregion
//#region ../../packages/ui-react/src/components/primitives/Heading/Heading.tsx
function qp({ level: e = 2, variant: t, as: n, className: r, children: i, ref: a, ...o }) {
	return /* @__PURE__ */ (0, R.jsx)(n ?? `h${e}`, {
		ref: a,
		className: L(Kp({ variant: t }), r),
		...o,
		children: i
	});
}
//#endregion
//#region ../../packages/ui-react/src/components/primitives/IconButton/IconButton.variants.ts
var Jp = $([
	"inline-flex items-center justify-center shrink-0",
	"transition-colors",
	"cursor-pointer select-none",
	"data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50"
], {
	variants: {
		variant: {
			ghost: [
				"text-icon bg-transparent",
				"hover:text-icon-hover hover:bg-transparent",
				kp()
			],
			surface: [
				"rounded-full",
				"bg-icon-surface text-icon",
				"hover:bg-icon-surface-hover hover:text-icon-hover",
				kp()
			],
			outline: [
				"rounded-full",
				"border border-icon text-icon bg-transparent",
				"hover:bg-icon-surface-hover hover:text-icon-hover",
				kp()
			]
		},
		size: {
			xs: "h-4 w-4",
			sm: "h-6 w-6",
			md: "h-8 w-8",
			lg: "h-12 w-12"
		}
	},
	defaultVariants: {
		variant: "ghost",
		size: "md"
	}
}), Yp = {
	xs: "h-[--icon-button-icon-xs] w-[--icon-button-icon-xs]",
	sm: "h-[--icon-button-icon-sm] w-[--icon-button-icon-sm]",
	md: "h-[--icon-button-icon-md] w-[--icon-button-icon-md]",
	lg: "h-[--icon-button-icon-lg] w-[--icon-button-icon-lg]"
};
//#endregion
//#region ../../packages/ui-react/src/components/primitives/IconButton/IconButton.tsx
function Xp({ icon: e, variant: t, size: n = "md", className: r, iconClassName: i, isDisabled: a, ref: o, ...s }) {
	let c = n ?? "md";
	return /* @__PURE__ */ (0, R.jsx)(Xa, {
		...s,
		ref: o,
		type: "button",
		isDisabled: a,
		className: L(Jp({
			variant: t,
			size: c
		}), r),
		children: /* @__PURE__ */ (0, R.jsx)(Xf, {
			icon: e,
			className: L(Yp[c], i)
		})
	});
}
//#endregion
//#region ../../packages/ui-react/src/components/primitives/Menu/Menu.variants.ts
var Zp = $([
	"min-w-(--trigger-width)",
	"px-4 rounded-b-md bg-surface shadow-md overflow-auto",
	"focus-visible:outline-none",
	"data-entering:animate-in data-entering:fade-in",
	"data-exiting:animate-out data-exiting:fade-out"
]), Qp = $(["outline-none"]), $p = $([
	"group flex items-center justify-between gap-2",
	"cursor-pointer select-none py-8",
	"text-body-sm text-text-primary",
	"outline-none shadow-between last:shadow-none",
	"data-hovered:bg-control-option-hover",
	"data-focus-visible:bg-control-option-hover",
	kp(),
	"data-disabled:cursor-not-allowed",
	"data-disabled:opacity-60",
	"data-disabled:hover:bg-transparent"
]);
//#endregion
//#region ../../packages/ui-react/src/components/primitives/Menu/Menu.tsx
function em({ children: e, ...t }) {
	return /* @__PURE__ */ (0, R.jsx)(Jd, {
		...t,
		children: e
	});
}
function tm({ className: e, children: t, ref: n, ...r }) {
	return /* @__PURE__ */ (0, R.jsx)(Xu, {
		ref: n,
		className: L(Zp(), e),
		...r,
		children: t
	});
}
function nm({ className: e, children: t, ref: n, ...r }) {
	return /* @__PURE__ */ (0, R.jsx)(Xd, {
		ref: n,
		className: L(Qp(), e),
		...r,
		children: t
	});
}
function rm({ className: e, children: t, ref: n, ...r }) {
	return /* @__PURE__ */ (0, R.jsx)(tf, {
		ref: n,
		className: L($p(), e),
		...r,
		children: t
	});
}
//#endregion
//#region ../../packages/ui-react/src/components/internal/OverlayPanel/overlayPanel.variants.ts
var im = $([
	"flex flex-col min-h-0 gap-6 lg:gap-8",
	"overflow-hidden",
	"outline-none",
	"flex-1"
]), am = $(["flex items-start justify-between gap-4"]), om = $(["text-h3 text-text-primary", "m-0"]), sm = $(["pb-2", "text-body text-text-primary"]), cm = $(["text-body text-text-primary", "flex-1 overflow-y-auto min-h-0"]), lm = $([$([
	"inline-flex items-center justify-center",
	"rounded-full",
	"absolute top-3 right-3",
	"text-overlay-close-text bg-overlay-close hover:text-text-primary hover:bg-surface-muted",
	"cursor-pointer",
	"transition-colors",
	kp()
])(), "h-12 w-12"]);
//#endregion
//#region ../../packages/ui-react/src/components/internal/Field/FieldLabel.tsx
function um({ label: e, isRequired: t, requiredIndicator: n = " *", className: r }) {
	return /* @__PURE__ */ (0, R.jsxs)(Ba, {
		className: L(zp(), r),
		children: [e, t && n ? /* @__PURE__ */ (0, R.jsx)("span", {
			"aria-hidden": "true",
			className: "text-accent-error",
			children: n
		}) : null]
	});
}
//#endregion
//#region ../../packages/ui-react/src/components/internal/Field/FieldLabelPlacement.ts
function dm(e) {
	switch (e) {
		case "stacked": return "outside";
		case "floating": return "inside";
		case "inline": return "inline";
	}
}
function fm({ explicit: e, brandLayout: t, componentDefault: n = "outside", hasLabel: r = !0 }) {
	if (e != null) return e;
	let i = t === void 0 ? n : dm(t);
	return i === "inside" && !r ? "outside" : i;
}
//#endregion
//#region ../../packages/ui-react/src/components/internal/Field/FieldStructure.tsx
function pm({ resolvedLabelPlacement: e, label: t, isRequired: n, requiredIndicator: r = " *", hasValue: i, isInvalid: a, stackClassName: o, labelClassName: s, children: c }) {
	return e === "inline" ? /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [t && /* @__PURE__ */ (0, R.jsx)(um, {
		label: t,
		isRequired: n,
		requiredIndicator: r,
		className: "shrink-0"
	}), /* @__PURE__ */ (0, R.jsx)("div", {
		className: o,
		"data-has-value": i ? "true" : "false",
		"data-invalid": a ? !0 : void 0,
		children: c
	})] }) : /* @__PURE__ */ (0, R.jsxs)("div", {
		className: o,
		"data-has-value": i ? "true" : "false",
		"data-invalid": a ? !0 : void 0,
		children: [t && /* @__PURE__ */ (0, R.jsx)(um, {
			label: t,
			isRequired: n,
			requiredIndicator: r,
			className: s
		}), c]
	});
}
//#endregion
//#region ../../packages/ui-react/src/components/primitives/Select/Select.variants.ts
var mm = "min-w-0 flex-1 leading-normal", hm = $([
	"flex items-center gap-2",
	"text-left",
	"cursor-pointer",
	"bg-white",
	"hover:bg-surface",
	"aria-expanded:select-expanded",
	kp()
], {
	variants: {
		variant: {
			default: "",
			borderless: "border-transparent bg-transparent"
		},
		labelPlacement: {
			outside: "read-only:bg-control-bg h-10 min-h-10 items-center",
			inline: "read-only:bg-transparent h-10 min-h-10",
			inside: "read-only:bg-control-bg h-auto min-h-[44px] items-center field-floating-input-md field-floating-control"
		},
		size: {
			standard: "",
			compact: ""
		}
	},
	defaultVariants: {
		variant: "default",
		labelPlacement: "outside",
		size: "standard"
	}
}), gm = $(mm), _m = $([mm, "data-placeholder:text-text-muted"]), vm = Hp, ym = Up, bm = Wp, xm = $([
	"select-list",
	"scrollbar-subtle",
	"data-entering:animate-in data-entering:fade-in",
	"data-exiting:animate-out data-exiting:fade-out"
]), Sm = $([
	"group flex items-center gap-3",
	"cursor-pointer select-none px-2 py-3",
	"whitespace-nowrap",
	"text-body text-text-primary",
	"outline-none shadow-between last:shadow-none",
	"data-hovered:bg-control-option-hover",
	"data-focus-visible:bg-control-option-hover",
	kp(),
	"data-disabled:cursor-not-allowed",
	"data-disabled:opacity-60",
	"data-disabled:hover:bg-transparent"
]);
//#endregion
//#region ../../packages/ui-react/src/components/primitives/Select/Select.tsx
function Cm(e) {
	return typeof e == "string" || typeof e == "number" ? String(e) : (0, z.isValidElement)(e) ? Cm(e.props.children) : "";
}
function wm({ label: e, description: t, errorMessage: n, placeholder: r = "Select…", variant: i, size: a = "standard", labelPlacement: o, value: s, defaultValue: c, onChange: l, onOpenChange: u, requiredIndicator: d = " *", isRequired: f, isInvalid: p, renderValue: m, triggerTestId: h, listBoxTestId: g, className: _, children: v, ref: y, ...b }) {
	let { components: x } = Rf(), S = x.field.layout, { selectArrow: C, error: w } = Gp(), T = fm({
		explicit: o,
		brandLayout: S,
		componentDefault: "outside",
		hasLabel: !!e
	}), ee = s !== void 0, [E, D] = (0, z.useState)(c !== void 0), [O, te] = (0, z.useState)(!1), [k, ne] = (0, z.useState)(), re = (0, z.useRef)(null), ie = (0, z.useRef)(null), ae = ee ? s != null : E;
	(0, z.useLayoutEffect)(() => {
		let e = requestAnimationFrame(() => {
			let e = Array.from(ie.current?.children ?? []).map((e) => e.getBoundingClientRect().width), t = Math.max(0, ...e);
			t > 0 && ne(t + 34);
		});
		return () => cancelAnimationFrame(e);
	}, [v]), (0, z.useLayoutEffect)(() => {
		if (!O) return;
		let e = requestAnimationFrame(() => {
			let e = re.current?.getBoundingClientRect().width;
			e && e > 0 && ne(e);
		});
		return () => cancelAnimationFrame(e);
	}, [O]);
	let A = L(Bp(), hm({
		variant: i,
		size: a,
		labelPlacement: T
	})), j = () => m === void 0 ? /* @__PURE__ */ (0, R.jsx)(Mf, {
		className: _m(),
		children: ({ isPlaceholder: e, selectedText: t }) => e ? r : t ?? r
	}) : /* @__PURE__ */ (0, R.jsx)("span", {
		className: gm(),
		children: m
	});
	return /* @__PURE__ */ (0, R.jsxs)(Of, {
		ref: y,
		isRequired: f,
		isInvalid: p,
		placeholder: r,
		value: s,
		defaultValue: c,
		onChange: (e) => {
			ee || D(e != null), l?.(e);
		},
		onOpenChange: (e) => {
			te(e), u?.(e);
		},
		...b,
		className: L(Rp(), "w-full max-w-full", T === "inline" && "flex-row items-center gap-2", _),
		children: [
			/* @__PURE__ */ (0, R.jsxs)(pm, {
				resolvedLabelPlacement: T,
				label: e,
				isRequired: f,
				requiredIndicator: d,
				hasValue: ae,
				isInvalid: p,
				stackClassName: vm({ labelPlacement: T }),
				labelClassName: ym({ labelPlacement: T }),
				children: [/* @__PURE__ */ (0, R.jsxs)(Xa, {
					"data-testid": h,
					className: L(A, "group max-w-full text-nowrap"),
					style: k ? { minWidth: `${k}px` } : void 0,
					children: [j(), /* @__PURE__ */ (0, R.jsx)(Xf, {
						icon: C,
						size: "unset",
						className: L("field-select-arrow shrink-0 text-text-brand transition-transform duration-base ease-standard group-aria-expanded:rotate-180", T === "inside" && "absolute right-3 top-8 -translate-y-1/2")
					})]
				}), T === "inside" && /* @__PURE__ */ (0, R.jsx)(ho, {
					className: bm({ errorStyle: x.field.errorStyle }),
					children: n
				})]
			}),
			t && /* @__PURE__ */ (0, R.jsx)(no, {
				slot: "description",
				className: Vp(),
				children: t
			}),
			T !== "inside" && /* @__PURE__ */ (0, R.jsxs)(ho, {
				className: bm({ errorStyle: x.field.errorStyle }),
				children: [/* @__PURE__ */ (0, R.jsx)(Xf, { icon: w }), n]
			}),
			/* @__PURE__ */ (0, R.jsx)("div", {
				ref: ie,
				"aria-hidden": !0,
				className: "pointer-events-none absolute left-0 top-0 -z-10 h-0 w-0 overflow-hidden opacity-0",
				children: z.Children.toArray(v).map((e, t) => {
					let n = Cm(e), r = (0, z.isValidElement)(e) && e.key !== null ? e.key : `option-${t}`;
					return /* @__PURE__ */ (0, R.jsx)("span", {
						className: L(Sm(), "w-max"),
						children: n
					}, r);
				})
			}),
			/* @__PURE__ */ (0, R.jsx)(Xu, {
				ref: re,
				placement: "bottom",
				shouldFlip: !1,
				offset: -1,
				className: xm(),
				children: /* @__PURE__ */ (0, R.jsx)(Qc, {
					"data-testid": g,
					className: "outline-none",
					children: v
				})
			})
		]
	});
}
function Tm({ id: e, className: t, children: n, ...r }) {
	let { check: i } = Gp();
	return /* @__PURE__ */ (0, R.jsxs)(nl, {
		id: e,
		textValue: typeof n == "string" || typeof n == "number" ? String(n) : void 0,
		...r,
		className: L(Sm(), t),
		children: [/* @__PURE__ */ (0, R.jsx)(Xf, {
			icon: i,
			size: "xs",
			className: "hidden shrink-0 text-brand group-data-selected:inline-block"
		}), /* @__PURE__ */ (0, R.jsx)("span", { children: n })]
	});
}
//#endregion
//#region ../../packages/ui-react/src/components/primitives/Text/Text.variants.ts
var Em = $("", {
	variants: {
		variant: {
			"body-xl": "font-body text-body-xl",
			"body-lg": "font-body text-body-lg",
			body: "font-body text-body",
			"body-sm": "font-body text-body-sm",
			"body-xs": "font-body text-body-xs",
			caption: "font-body text-caption"
		},
		weight: {
			normal: "font-normal",
			medium: "font-medium",
			semibold: "font-semibold",
			bold: "font-bold"
		},
		tone: {
			primary: "text-text-primary",
			muted: "text-text-muted",
			subtle: "text-text-subtle",
			positive: "text-accent-success",
			critical: "text-accent-error",
			inverse: "text-on-surface-inverse"
		}
	},
	defaultVariants: {
		variant: "body",
		tone: "primary"
	}
});
//#endregion
//#region ../../packages/ui-react/src/components/primitives/Text/Text.tsx
function Dm({ as: e, variant: t, tone: n, weight: r, className: i, children: a, ref: o, ...s }) {
	return /* @__PURE__ */ (0, R.jsx)(e ?? "p", {
		ref: o,
		className: L(Em({
			variant: t,
			tone: n,
			weight: r
		}), i),
		...s,
		children: a
	});
}
//#endregion
//#region ../../packages/ui-react/src/components/composed/Footer/Footer.tsx
function Om({ content: e }) {
	let t = (/* @__PURE__ */ new Date()).getFullYear();
	function n(e) {
		let n = e.replace(/&copy;|&#169;/gi, "©");
		return /©|copyright/i.test(n) ? n.replace(/\b(19|20)\d{2}\b/, String(t)) : n;
	}
	let r = e.disclaimers.length > 0, i = e.socialLinks.length > 0, a = e.footerLinks.length > 0, o = e.legalLines.length > 0;
	return /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [r && /* @__PURE__ */ (0, R.jsx)("div", {
		"data-testid": "footer-disclaimer",
		id: "footer-disclaimer",
		className: "footer-disclaimer layout-container-spacious py-6 text-xs flex flex-col gap-5",
		children: e.disclaimers.map((e, t) => /* @__PURE__ */ (0, R.jsxs)("p", {
			className: e.marker ? "flex gap-2.5 items-start" : void 0,
			children: [e.marker ? /* @__PURE__ */ (0, R.jsx)("span", {
				className: "font-semibold",
				children: e.marker
			}) : null, /* @__PURE__ */ (0, R.jsx)("span", { children: e.text })]
		}, `${e.marker ?? "plain"}-${t}`))
	}), /* @__PURE__ */ (0, R.jsxs)("footer", {
		className: "footer-shell pt-10 pb-20 flex flex-col gap-10",
		children: [
			i && /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsx)("nav", {
				"aria-label": "Social links",
				"data-testid": "footer-social-links",
				className: "layout-container",
				children: /* @__PURE__ */ (0, R.jsx)("div", {
					className: "flex flex-wrap gap-4 lg:gap-10",
					children: e.socialLinks.map((e) => /* @__PURE__ */ (0, R.jsxs)(Pp, {
						href: e.url,
						variant: "standalone",
						target: "_blank",
						rel: "noopener noreferrer",
						"aria-label": e.name,
						className: "text-footer-social gap-3 uppercase",
						children: [/* @__PURE__ */ (0, R.jsx)("span", {
							className: "footer-social-icon inline-flex h-12.5 w-12.5 items-center justify-center",
							children: /* @__PURE__ */ (0, R.jsx)(Xf, {
								icon: Dp(e.id),
								size: "unset",
								className: "h-6 w-6"
							})
						}), /* @__PURE__ */ (0, R.jsx)("span", {
							className: "hidden lg:block",
							children: e.name
						})]
					}, e.id))
				})
			}), /* @__PURE__ */ (0, R.jsx)("div", {
				className: "layout-container",
				children: /* @__PURE__ */ (0, R.jsx)("hr", { className: "footer-divider" })
			})] }),
			a && /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsx)("nav", {
				"aria-label": "Footer links",
				"data-testid": "footer-links",
				className: "layout-container uppercase",
				children: /* @__PURE__ */ (0, R.jsx)("ul", {
					className: "flex flex-wrap flex-col md:flex-row gap-5 md:gap-6",
					children: e.footerLinks.map((e) => /* @__PURE__ */ (0, R.jsx)("li", { children: /* @__PURE__ */ (0, R.jsx)(Pp, {
						href: e.url,
						variant: "standalone",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "text-footer-link uppercase",
						children: e.name
					}) }, e.id))
				})
			}), /* @__PURE__ */ (0, R.jsx)("div", {
				className: "layout-container",
				children: /* @__PURE__ */ (0, R.jsx)("hr", { className: "footer-divider" })
			})] }),
			o ? /* @__PURE__ */ (0, R.jsx)("div", {
				className: "layout-container text-footer-copyright",
				children: e.legalLines.map((e, t) => /* @__PURE__ */ (0, R.jsx)("p", { children: n(e) }, `${e}-${t}`))
			}) : null
		]
	})] });
}
//#endregion
//#region ../../packages/ui-react/src/components/internal/OverlayPanel/OverlayPanel.tsx
function km({ ref: e, children: t, isDismissable: n = !0, isKeyboardDismissDisabled: r, shouldCloseOnInteractOutside: i, overlayClassName: a, overlayStyle: o, className: s, role: c = "dialog", overlayBaseClassName: l, containerBaseClassName: u, dialogBaseClassName: d, dialogTestId: f, isOpen: p, onOpenChange: m }) {
	return /* @__PURE__ */ (0, R.jsx)(gf, {
		isOpen: p,
		onOpenChange: m,
		isDismissable: n,
		isKeyboardDismissDisabled: r,
		shouldCloseOnInteractOutside: i,
		style: o,
		className: L(l, a),
		children: /* @__PURE__ */ (0, R.jsx)(mf, {
			ref: e,
			isDismissable: n,
			isKeyboardDismissDisabled: r,
			className: L(u, s),
			children: /* @__PURE__ */ (0, R.jsx)(of, {
				role: c,
				"data-testid": f,
				className: d,
				children: t
			})
		})
	});
}
function Am({ ref: e, className: t, children: n, baseClassName: r }) {
	return /* @__PURE__ */ (0, R.jsx)("div", {
		ref: e,
		className: L(r, t),
		children: n
	});
}
function jm({ ref: e, className: t, children: n, level: r = 2, baseClassName: i }) {
	return /* @__PURE__ */ (0, R.jsx)(eo, {
		ref: e,
		slot: "title",
		level: r,
		className: L(i, t),
		children: n
	});
}
function Mm({ ref: e, className: t, children: n, baseClassName: r }) {
	return /* @__PURE__ */ (0, R.jsx)("p", {
		ref: e,
		slot: "description",
		className: L(r, t),
		children: n
	});
}
function Nm({ ref: e, label: t = "Close", className: n, baseClassName: r, testId: i }) {
	let { close: a } = Gp();
	return /* @__PURE__ */ (0, R.jsx)(Xp, {
		ref: e,
		"data-testid": i,
		slot: "close",
		icon: a,
		"aria-label": t,
		className: L(r, n)
	});
}
//#endregion
//#region ../../packages/ui-react/src/components/composed/Modal/Modal.variants.ts
var Pm = $([
	"fixed inset-0 overflow-y-auto overscroll-contain",
	"flex justify-center",
	"motion-reduce:data-[entering]:animate-none motion-reduce:data-[exiting]:animate-none"
], {
	variants: { position: {
		center: [
			"z-modal items-center bg-black/50",
			"motion-safe:data-[entering]:animate-[ds-backdrop-fade-in_240ms_cubic-bezier(0.2,0,0,1)]",
			"motion-safe:data-[exiting]:animate-[ds-backdrop-fade-out_200ms_cubic-bezier(0.4,0,1,1)]"
		],
		top: [
			"z-modal items-start pt-8 bg-black/50",
			"motion-safe:data-[entering]:animate-[ds-backdrop-fade-in_240ms_cubic-bezier(0.2,0,0,1)]",
			"motion-safe:data-[exiting]:animate-[ds-backdrop-fade-out_200ms_cubic-bezier(0.4,0,1,1)]"
		],
		anchored: [
			"z-dropdown items-start bg-black/50",
			"motion-safe:data-[entering]:animate-[ds-backdrop-fade-in_240ms_cubic-bezier(0.2,0,0,1)]",
			"motion-safe:data-[exiting]:animate-[ds-backdrop-fade-out_200ms_cubic-bezier(0.4,0,1,1)]"
		]
	} },
	defaultVariants: { position: "center" }
}), Fm = $([
	"relative w-full",
	"bg-surface text-text-primary",
	"rounded-lg shadow-xl",
	"max-h-overlay-safe",
	"flex min-h-0 flex-col overflow-hidden",
	"outline-none",
	"motion-reduce:data-[entering]:animate-none motion-reduce:data-[exiting]:animate-none"
], {
	variants: {
		size: {
			sm: "mx-9 px-6 pb-6 max-w-sm",
			md: "mx-9 px-10 py-15 lg:py-12.5 max-w-md",
			lg: "mx-9 px-10 py-15 lg:py-12.5 max-w-lg",
			xl: "mx-9 px-12 py-15 lg:py-12.5 max-w-2xl",
			full: "mx-0 w-full max-w-none rounded-t-none px-10 py-15 lg:py-12.5",
			fullscreen: "h-screen max-h-screen max-w-none rounded-none px-10 py-15 lg:py-12.5"
		},
		position: {
			center: ["motion-safe:data-[entering]:animate-[ds-modal-grow-in_260ms_cubic-bezier(0.16,1,0.3,1)]", "motion-safe:data-[exiting]:animate-[ds-modal-grow-out_180ms_cubic-bezier(0.4,0,1,1)]"],
			top: ["motion-safe:data-[entering]:animate-[ds-modal-grow-in_260ms_cubic-bezier(0.16,1,0.3,1)]", "motion-safe:data-[exiting]:animate-[ds-modal-grow-out_180ms_cubic-bezier(0.4,0,1,1)]"],
			anchored: [
				"origin-top rounded-none",
				"motion-safe:data-[entering]:animate-[ds-panel-slide-in-down_220ms_cubic-bezier(0.16,1,0.3,1)]",
				"motion-safe:data-[exiting]:animate-[ds-panel-slide-out-up_200ms_cubic-bezier(0.4,0,1,1)]"
			]
		}
	},
	defaultVariants: {
		size: "md",
		position: "center"
	}
}), Im = $([im()]), Lm = $([am()]), Rm = $([om()]), zm = $([sm()]), Bm = $([cm()]), Vm = $([], {
	variants: { direction: {
		row: "flex items-center justify-end gap-2",
		stacked: "flex flex-col gap-4 [&>*]:w-full"
	} },
	defaultVariants: { direction: "row" }
}), Hm = $([lm()]);
//#endregion
//#region ../../packages/ui-react/src/components/composed/Modal/Modal.tsx
function Um({ size: e, isDismissable: t = !0, isKeyboardDismissDisabled: n, role: r = "dialog", className: i, overlayClassName: a, position: o, anchorRef: s, children: c, ref: l, isOpen: u, onOpenChange: d, dialogTestId: f }) {
	let p = Wm(o === "anchored" ? s : void 0, u);
	return /* @__PURE__ */ (0, R.jsx)(km, {
		ref: l,
		isDismissable: t,
		isKeyboardDismissDisabled: n,
		shouldCloseOnInteractOutside: s ? (e) => !s.current?.contains(e) : void 0,
		overlayClassName: a,
		overlayStyle: p === void 0 ? void 0 : { top: p },
		className: i,
		role: r,
		overlayBaseClassName: Pm({ position: o }),
		containerBaseClassName: Fm({
			size: e,
			position: o
		}),
		dialogBaseClassName: Im(),
		dialogTestId: f,
		isOpen: u,
		onOpenChange: d,
		children: c
	});
}
function Wm(e, t) {
	let [n, r] = (0, z.useState)(void 0);
	return (0, z.useLayoutEffect)(() => {
		if (!e || !t) return;
		let n = () => {
			let t = e.current, n = t ? Gm(t) : null;
			r((n ?? t)?.getBoundingClientRect().bottom);
		};
		return n(), window.addEventListener("resize", n), () => window.removeEventListener("resize", n);
	}, [e, t]), e ? n : void 0;
}
function Gm(e) {
	let t = e;
	for (; t;) {
		let e = getComputedStyle(t).position;
		if (e === "sticky" || e === "fixed") return t;
		t = t.parentElement;
	}
	return null;
}
function Km({ className: e, children: t, ref: n }) {
	return /* @__PURE__ */ (0, R.jsx)(Am, {
		ref: n,
		className: e,
		baseClassName: Lm(),
		children: t
	});
}
function qm({ level: e = 2, className: t, children: n, ref: r }) {
	return /* @__PURE__ */ (0, R.jsx)(jm, {
		ref: r,
		level: e,
		className: t,
		baseClassName: Rm(),
		children: n
	});
}
function Jm({ className: e, children: t, ref: n }) {
	return /* @__PURE__ */ (0, R.jsx)(Mm, {
		ref: n,
		className: e,
		baseClassName: zm(),
		children: t
	});
}
function Ym({ className: e, children: t, ref: n }) {
	return /* @__PURE__ */ (0, R.jsx)(Am, {
		ref: n,
		className: e,
		baseClassName: Bm(),
		children: t
	});
}
function Xm({ direction: e, className: t, children: n, ref: r }) {
	return /* @__PURE__ */ (0, R.jsx)(Am, {
		ref: r,
		className: t,
		baseClassName: Vm({ direction: e }),
		children: n
	});
}
function Zm({ label: e = "Close", className: t, ref: n, testId: r }) {
	return /* @__PURE__ */ (0, R.jsx)(Nm, {
		ref: n,
		label: e,
		className: t,
		baseClassName: Hm(),
		testId: r
	});
}
//#endregion
//#region ../../packages/ui-react/src/components/composed/HeaderShell/HeaderShell.variants.ts
var Qm = {
	root: "header-shell lg:header-desktop-height sticky top-0 z-overlay border-b backdrop-blur",
	grid: "lg:layout-container grid grid-cols-3 lg:grid-cols-5 items-stretch gap-x-6 gap-y-0 lg:gap-y-6 h-full",
	menuCell: "header-main-row lg:header-desktop-height justify-self-start flex items-center lg:hidden",
	contextCell: "header-secondary-row px-4 lg:px-0 lg:header-desktop-height justify-self-start flex items-stretch row-start-2 lg:row-start-auto col-span-3 lg:col-span-2",
	rightCluster: "justify-self-end hidden lg:flex items-center gap-6 col-span-2"
}, $m = {
	item: "header-nav-item p-4 w-full justify-between",
	back: "header-nav-item p-4 w-full grid grid-cols-9 items-center gap-2 bg-surface-pressed text-text-primary rounded-none border-b border-border-subtle-30 uppercase",
	secondaryPanel: "absolute inset-0 z-popover overflow-y-auto scrollbar-subtle bg-surface header-mobile-panel motion-safe:animate-[header-menu-level-in_200ms_ease-out]"
}, eh = { trigger: "border border-border-light rounded-md p-2.5 flex items-center gap-2 group-hover:border-border-dark group-aria-expanded:border-border-dark" }, th = { trigger: "link-standalone hover:text-brand-hover group p-4 rounded-none lg:h-full aria-expanded:bg-surface-pressed" };
//#endregion
//#region ../../packages/ui-react/src/components/composed/HeaderShell/HeaderShell.tsx
function nh({ brand: e, brandHomeHref: t, brandLabel: n, currentPath: r, onNavigate: i, getConfirmContent: a, startSlot: o, navSlot: s, endSlot: c }) {
	let l = n ?? ht[e].displayName, u = (0, z.useRef)(null), [d, f] = (0, z.useState)(null), [p, m] = (0, z.useState)(null), [h, g] = (0, z.useState)(!1), _ = (0, z.useCallback)((e) => {
		if (e === r) return;
		let t = a?.(r, e) ?? null;
		if (!t) {
			i(e);
			return;
		}
		f(e), m(t), g(!0);
	}, [
		r,
		a,
		i
	]), v = (0, z.useCallback)((e) => {
		g(e);
	}, []);
	return (0, z.useLayoutEffect)(() => {
		if (!u.current) return;
		let e = () => {
			document.documentElement.style.setProperty("--layout-header-offset", `${u.current.offsetHeight}px`);
		};
		e();
		let t = new ResizeObserver(e);
		return t.observe(u.current), () => t.disconnect();
	}, []), /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsx)("header", {
		ref: u,
		className: Qm.root,
		children: /* @__PURE__ */ (0, R.jsxs)("div", {
			className: Qm.grid,
			children: [
				/* @__PURE__ */ (0, R.jsx)("div", {
					className: Qm.menuCell,
					children: o?.(_)
				}),
				/* @__PURE__ */ (0, R.jsx)("div", {
					className: Qm.contextCell,
					children: s?.(_)
				}),
				/* @__PURE__ */ (0, R.jsx)(Pp, {
					href: t,
					"aria-label": `${l} home`,
					"data-testid": "brand-logo",
					className: "header-brand-link",
					children: /* @__PURE__ */ (0, R.jsx)(pt, {
						brand: e,
						title: l,
						className: "h-2 w-2 md:h-2.5 md:w-2.5"
					})
				}),
				/* @__PURE__ */ (0, R.jsx)("div", {
					className: Qm.rightCluster,
					children: c?.(_)
				})
			]
		})
	}), /* @__PURE__ */ (0, R.jsx)(Um, {
		role: "alertdialog",
		dialogTestId: "view-change-dialog",
		size: "md",
		isOpen: h,
		onOpenChange: v,
		children: ({ close: e }) => p ? /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [
			/* @__PURE__ */ (0, R.jsxs)(Km, { children: [/* @__PURE__ */ (0, R.jsx)(qm, {
				level: 2,
				children: p.title
			}), /* @__PURE__ */ (0, R.jsx)(Zm, {
				label: p.closeLabel,
				testId: "view-change-close"
			})] }),
			/* @__PURE__ */ (0, R.jsx)(Ym, { children: /* @__PURE__ */ (0, R.jsx)(Jm, { children: p.description }) }),
			/* @__PURE__ */ (0, R.jsxs)(Xm, {
				direction: "stacked",
				children: [/* @__PURE__ */ (0, R.jsx)(Lp, {
					"data-testid": "view-change-confirm",
					variant: "primary",
					fullWidth: !0,
					onPress: () => {
						let t = d;
						e(), t && i(t);
					},
					children: p.confirmLabel
				}), /* @__PURE__ */ (0, R.jsx)(Lp, {
					"data-testid": "view-change-cancel",
					variant: "secondary",
					fullWidth: !0,
					onPress: () => {
						e();
					},
					children: p.cancelLabel
				})]
			})
		] }) : null
	})] });
}
//#endregion
//#region ../../packages/ui-react/src/components/composed/HeaderShell/HeaderNav.tsx
function rh({ "aria-label": e, children: t, className: n }) {
	return /* @__PURE__ */ (0, R.jsx)("nav", {
		"aria-label": e,
		className: L("flex h-full items-stretch gap-6 lg:gap-10", n),
		children: t
	});
}
function ih({ children: e, href: t, active: n = !1, tone: r = "default", onNavigate: i, className: a, buttonVariant: o = "inline", buttonSize: s, buttonProps: c, linkProps: l, itemProps: u }) {
	let d = L(r === "muted" ? "header-nav-item-muted" : "header-nav-item", n && "header-nav-active-indicator", a);
	return t ? /* @__PURE__ */ (0, R.jsx)(Pp, {
		...l,
		href: t,
		variant: "standalone",
		size: "auto",
		"aria-current": n ? "page" : void 0,
		className: d,
		onClick: (e) => {
			!i || n || (e.preventDefault(), i());
		},
		onKeyDown: (e) => {
			!i || n || e.key !== "Enter" || (e.preventDefault(), i());
		},
		...u,
		children: e
	}) : /* @__PURE__ */ (0, R.jsx)(Lp, {
		...c,
		variant: o,
		size: s,
		"aria-current": n ? "page" : void 0,
		className: d,
		onPress: i ?? c?.onPress,
		...u,
		children: e
	});
}
function ah({ items: e, "aria-label": t, onNavigate: n }) {
	let { chevron: r } = Gp();
	return /* @__PURE__ */ (0, R.jsx)(rh, {
		"aria-label": t,
		children: e.map((e) => e.kind === "current" ? /* @__PURE__ */ (0, R.jsx)("span", {
			"aria-current": "page",
			className: "header-nav-item header-nav-active-indicator",
			children: e.label
		}, e.key) : e.kind === "back" ? /* @__PURE__ */ (0, R.jsxs)(Pp, {
			href: e.href,
			variant: "standalone",
			size: "auto",
			className: "header-nav-item header-nav-item-muted",
			children: [/* @__PURE__ */ (0, R.jsx)(Xf, {
				icon: r,
				size: "sm",
				className: "rotate-90 h-2.5 w-2.5",
				"aria-hidden": "true"
			}), e.label]
		}, e.key) : /* @__PURE__ */ (0, R.jsx)(ih, {
			href: e.href,
			active: e.active,
			tone: "muted",
			itemProps: e.itemProps,
			onNavigate: n ? () => n(e.href) : void 0,
			children: e.label
		}, e.key))
	});
}
//#endregion
//#region ../../packages/ui-react/src/components/composed/HeaderShell/HeaderAction.tsx
function oh({ href: e, children: t, "aria-label": n }) {
	return /* @__PURE__ */ (0, R.jsx)(ih, {
		href: e,
		linkProps: { "aria-label": n },
		children: t
	});
}
//#endregion
//#region ../../packages/ui-react/src/components/composed/HeaderShell/HeaderBrandMenu.tsx
function sh({ brands: e, label: t, onSelect: n, renderMode: r = "menu" }) {
	let [i, a] = (0, z.useTransition)(), { chevron: o } = Gp();
	if (e.length === 0) return null;
	let s = /* @__PURE__ */ (0, R.jsx)(nm, {
		"aria-label": t,
		onAction: (t) => {
			typeof t != "string" || !e.includes(t) || a(() => {
				n(t);
			});
		},
		children: e.map((e) => /* @__PURE__ */ (0, R.jsx)(rm, {
			id: e,
			textValue: ht[e].displayName,
			"data-testid": "brand-option",
			children: /* @__PURE__ */ (0, R.jsx)(pt, {
				brand: e,
				height: 10
			})
		}, e))
	});
	return r === "list" ? s : /* @__PURE__ */ (0, R.jsxs)(em, { children: [/* @__PURE__ */ (0, R.jsxs)(ih, {
		buttonVariant: "composed",
		className: th.trigger,
		buttonProps: {
			"aria-label": t,
			isDisabled: i
		},
		itemProps: { "data-testid": "header-brand-switcher" },
		children: [
			/* @__PURE__ */ (0, R.jsx)(Xf, {
				icon: o,
				size: "xs",
				className: "transition-transform duration-base ease-standard group-aria-expanded:rotate-180"
			}),
			" ",
			t
		]
	}), /* @__PURE__ */ (0, R.jsx)(tm, {
		offset: 0,
		children: s
	})] });
}
//#endregion
//#region ../../packages/ui-react/src/components/composed/HeaderShell/HeaderLocaleMenu.tsx
function ch({ locale: e, label: t, children: n }) {
	let { globe: r, chevron: i } = Gp();
	return /* @__PURE__ */ (0, R.jsxs)(em, { children: [/* @__PURE__ */ (0, R.jsx)(ih, {
		className: "group h-full",
		buttonVariant: "composed",
		buttonProps: { "aria-label": t },
		itemProps: { "data-testid": "header-locale-switcher" },
		children: /* @__PURE__ */ (0, R.jsxs)("div", {
			className: eh.trigger,
			children: [
				e,
				/* @__PURE__ */ (0, R.jsx)(Xf, {
					icon: r,
					className: "h-4.5 w-4.5 rounded-full",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, R.jsx)(Xf, {
					icon: i,
					size: "xs",
					className: "transition-transform duration-base ease-standard group-aria-expanded:rotate-180"
				})
			]
		})
	}), /* @__PURE__ */ (0, R.jsx)(tm, {
		offset: 1,
		children: n
	})] });
}
//#endregion
//#region ../../packages/ui-react/src/components/composed/HeaderShell/HeaderLocaleForm.tsx
function lh({ activeLocale: e, locales: t, onSubmit: n, market: r, localeLabel: i, confirmLabel: a, confirmButtonRef: o, className: s, isLoading: c }) {
	let [l, u] = (0, z.useState)(e), [d, f] = (0, z.useState)(e);
	e !== d && (f(e), u(e));
	let p = l !== e, m = r?.icon ? bp(r.icon) : null;
	return /* @__PURE__ */ (0, R.jsxs)("form", {
		className: L("space-y-6", s),
		onSubmit: (e) => {
			e.preventDefault(), p && !c && n(l);
		},
		children: [
			r ? /* @__PURE__ */ (0, R.jsxs)("div", {
				className: "flex gap-2",
				children: [m ? /* @__PURE__ */ (0, R.jsx)(Xf, {
					icon: m,
					size: "md",
					"aria-hidden": "true"
				}) : null, /* @__PURE__ */ (0, R.jsx)("span", {
					className: "text-text-secondary text-sm font-medium",
					children: r.label
				})]
			}) : null,
			/* @__PURE__ */ (0, R.jsx)(wm, {
				"aria-label": i,
				label: i,
				value: l,
				triggerTestId: "locale-select",
				onChange: (e) => {
					typeof e == "string" && t.some((t) => t.id === e) && u(e);
				},
				children: t.map((e) => /* @__PURE__ */ (0, R.jsx)(Tm, {
					id: e.id,
					"data-testid": "locale-option",
					children: e.label
				}, e.id))
			}),
			/* @__PURE__ */ (0, R.jsx)(Lp, {
				ref: o,
				"data-testid": "locale-confirm",
				type: "submit",
				variant: "primary",
				fullWidth: !0,
				isLoading: c,
				isDisabled: !p || c,
				children: a
			})
		]
	});
}
//#endregion
//#region ../../packages/ui-react/src/components/composed/HeaderShell/HeaderMobileNav.tsx
function uh({ label: e, buttonId: t, onPress: n, href: r, disabled: i, icon: a, badge: o, badgeTone: s, hasSubmenu: c, buttonRef: l, testId: u }) {
	let { chevron: d } = Gp();
	return i ? null : /* @__PURE__ */ (0, R.jsxs)(Lp, {
		id: t,
		"data-testid": u,
		...r ? { href: r } : {
			ref: l,
			onClick: n
		},
		variant: "composed",
		className: $m.item,
		children: [/* @__PURE__ */ (0, R.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [a ? /* @__PURE__ */ (0, R.jsx)(Xf, {
				icon: a,
				size: "md",
				badge: o,
				badgeTone: s,
				"aria-hidden": "true"
			}) : null, e]
		}), c ? /* @__PURE__ */ (0, R.jsx)(Xf, {
			icon: d,
			size: "xs",
			className: "-rotate-90",
			"aria-hidden": "true"
		}) : null]
	});
}
function dh({ label: e, onPress: t, buttonRef: n }) {
	let { arrow: r } = Gp();
	return /* @__PURE__ */ (0, R.jsxs)(Lp, {
		ref: n,
		variant: "composed",
		onClick: t,
		className: $m.back,
		children: [/* @__PURE__ */ (0, R.jsx)(Xf, {
			icon: r,
			size: "sm",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, R.jsx)("span", {
			className: "col-span-7",
			children: e
		})]
	});
}
//#endregion
//#region ../../packages/ui-react/src/components/composed/HeaderShell/HeaderMobileMenu.tsx
function fh({ openLabel: e, closeLabel: t, label: n, navigationLabel: r, items: i, currentPath: a }) {
	let [o, s] = (0, z.useState)(!1), [c, l] = (0, z.useState)(null), u = (0, z.useId)(), d = (0, z.useRef)(null), f = (0, z.useRef)(null), p = (0, z.useRef)(a), { close: m, menu: h } = Gp(), g = i.find((e) => e.key === c)?.panel, _ = (0, z.useCallback)(() => {
		s(!1), l(null);
	}, []), v = (0, z.useCallback)(() => {
		_(), requestAnimationFrame(() => d.current?.focus());
	}, [_]);
	return (0, z.useEffect)(() => {
		if (p.current === a || (p.current = a, !o)) return;
		let e = requestAnimationFrame(_);
		return () => cancelAnimationFrame(e);
	}, [
		_,
		a,
		o
	]), (0, z.useEffect)(() => {
		if (!o) return;
		let e = (e) => {
			if (e.key === "Escape") {
				v();
				return;
			}
			if (e.key !== "Tab") return;
			let t = f.current, n = t ? Array.from(t.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex=\"-1\"])")).filter((e) => !e.closest("[inert], [aria-hidden=\"true\"]")) : [], r = [d.current, ...n].filter((e) => !!e);
			if (!r.length) return;
			let i = r.indexOf(document.activeElement);
			e.shiftKey && i <= 0 ? (e.preventDefault(), r.at(-1)?.focus()) : !e.shiftKey && (i === -1 || i === r.length - 1) && (e.preventDefault(), r[0]?.focus());
		};
		return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
	}, [v, o]), (0, z.useEffect)(() => {
		if (!c) return;
		let e = requestAnimationFrame(() => {
			let e = f.current?.querySelector(`[data-header-mobile-panel="${c}"]`);
			(e?.querySelector("[data-header-mobile-panel-content]") ?? e)?.querySelector("a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex=\"-1\"])")?.focus();
		});
		return () => cancelAnimationFrame(e);
	}, [c]), /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsxs)(ih, {
		buttonVariant: "composed",
		className: "lg:hidden h-full px-4 rounded-none text-on-surface-pressed aria-expanded:bg-surface-pressed aria-expanded:text-on-surface-pressed",
		itemProps: { "data-testid": "header-mobile-menu" },
		buttonProps: {
			ref: d,
			"aria-expanded": o,
			"aria-controls": u,
			"aria-label": o ? t : e,
			onClick: () => {
				o ? v() : s(!0);
			}
		},
		children: [/* @__PURE__ */ (0, R.jsx)(Xf, {
			icon: o ? m : h,
			size: "sm"
		}), /* @__PURE__ */ (0, R.jsx)("span", { children: n })]
	}), o ? /* @__PURE__ */ (0, R.jsxs)("section", {
		id: u,
		ref: f,
		className: L("lg:hidden absolute left-0 right-0 z-overlay bg-surface", "header-mobile-panel border-b header-main-row-panel overflow-y-auto scrollbar-subtle", "motion-safe:animate-[header-menu-slide-in_300ms_ease-out]"),
		children: [/* @__PURE__ */ (0, R.jsx)("nav", {
			"aria-label": r,
			"aria-hidden": g ? !0 : void 0,
			inert: g ? !0 : void 0,
			children: /* @__PURE__ */ (0, R.jsx)("ul", {
				className: "flex flex-col py-2 pl-4 pr-6",
				children: i.map((e) => /* @__PURE__ */ (0, R.jsx)("li", {
					className: e.divider ? "shadow-between" : void 0,
					children: /* @__PURE__ */ (0, R.jsx)(uh, {
						buttonId: e.panel ? `${u}-${e.key}` : void 0,
						label: e.label,
						href: e.href,
						onPress: e.panel ? () => l(e.key) : e.onPress,
						disabled: e.disabled,
						icon: e.icon,
						badge: e.badge,
						badgeTone: e.badgeTone,
						hasSubmenu: !!e.panel,
						testId: e.testId
					})
				}, e.key))
			})
		}), g ? /* @__PURE__ */ (0, R.jsxs)("nav", {
			"aria-label": g.navigationLabel,
			"data-header-mobile-panel": c,
			className: $m.secondaryPanel,
			children: [/* @__PURE__ */ (0, R.jsx)(dh, {
				label: g.backLabel,
				onPress: () => {
					let e = c;
					l(null), e && requestAnimationFrame(() => {
						document.getElementById(`${u}-${e}`)?.focus();
					});
				}
			}), /* @__PURE__ */ (0, R.jsx)("div", {
				"data-header-mobile-panel-content": !0,
				className: "p-10",
				children: g.renderContent(_)
			})]
		}) : null]
	}) : null] });
}
//#endregion
//#region src/App.tsx
var ph = l(), mh = {
	socialLinks: [
		{
			id: "instagram",
			name: "Instagram",
			url: "#"
		},
		{
			id: "tiktok",
			name: "TikTok",
			url: "#"
		},
		{
			id: "facebook",
			name: "Facebook",
			url: "#"
		},
		{
			id: "youtube",
			name: "YouTube",
			url: "#"
		},
		{
			id: "x",
			name: "X",
			url: "#"
		}
	],
	footerLinks: [
		{
			id: "imprint",
			name: "Imprint",
			url: "#"
		},
		{
			id: "general-terms-of-use",
			name: "General Terms of Use",
			url: "#"
		},
		{
			id: "privacy-policy",
			name: "Privacy Policy",
			url: "#"
		},
		{
			id: "cookie-policy",
			name: "Cookie Policy",
			url: "#"
		},
		{
			id: "product-safety-ordinance",
			name: "Product Safety Ordinance",
			url: "#"
		},
		{
			id: "accessibility-statement",
			name: "Accessibility Statement",
			url: "#"
		}
	],
	disclaimers: [
		{
			marker: "*",
			text: "From the 1st of September 2017, certain new cars will be type-approved according to the World Harmonised Light Vehicle Test Procedure (WLTP), a new, more realistic test procedure for measuring fuel consumption and CO2 emissions."
		},
		{
			marker: "**",
			text: "The images shown are partly digital visualizations and may not correspond to the model offered."
		},
		{
			marker: "*1",
			text: "The figures given have been determined in accordance with the prescribed EU measurement procedure. A vehicle's actual range may vary depending on various factors."
		}
	],
	legalLines: ["All rights reserved. © 2026 Jaguar Land Rover Limited", "Registered Office: Abbey Road, Whitley, Coventry, CV3 4LF"]
}, hh = {
	title: "Change view?",
	description: "The design-system confirmation modal, gating navigation - rendered outside Next.",
	confirmLabel: "Continue",
	cancelLabel: "Stay here",
	closeLabel: "Close"
};
function gh(e) {
	return [{
		kind: "link",
		key: "new",
		label: "New",
		href: "/range-rover/en_gb/vehicle-listing/new",
		active: e.endsWith("/new"),
		itemProps: { "data-testid": "vehicle-condition-link" }
	}, {
		kind: "link",
		key: "pre-owned",
		label: "Pre-owned",
		href: "/range-rover/en_gb/vehicle-listing/pre-owned",
		active: e.endsWith("/pre-owned"),
		itemProps: { "data-testid": "vehicle-condition-link" }
	}];
}
function _h() {
	return /* @__PURE__ */ (0, R.jsx)(ch, {
		locale: "EN_GB",
		label: "Select language",
		children: /* @__PURE__ */ (0, R.jsx)(lh, {
			activeLocale: "en_gb",
			locales: [{
				id: "en_gb",
				label: "ENGLISH (UK)"
			}, {
				id: "de_de",
				label: "DEUTSCH"
			}],
			localeLabel: "Language",
			confirmLabel: "Confirm",
			className: "p-8 min-w-60",
			market: {
				label: "Belgium (BE)",
				icon: "be"
			},
			onSubmit: () => {}
		})
	});
}
function vh() {
	let { globe: e, map: t, save: n } = Gp();
	return /* @__PURE__ */ (0, R.jsx)(fh, {
		openLabel: "Open menu",
		closeLabel: "Close menu",
		label: "Menu",
		navigationLabel: "Primary navigation",
		items: [
			{
				key: "brands",
				label: "Our other brands",
				testId: "header-mobile-brand-switcher",
				panel: {
					navigationLabel: "Our other brands",
					backLabel: "Our other brands",
					renderContent: () => /* @__PURE__ */ (0, R.jsx)(sh, {
						brands: ["jaguar", "discovery"],
						label: "Our other brands",
						renderMode: "list",
						onSelect: () => {}
					})
				}
			},
			{
				key: "saved",
				label: "Saved vehicle",
				href: "#",
				icon: n,
				badge: 9,
				divider: !0
			},
			{
				key: "retailers",
				label: "Retailers",
				href: "#",
				icon: t
			},
			{
				key: "locales",
				label: "Change language: ENGLISH (UK)",
				testId: "header-mobile-locale-switcher",
				icon: e,
				panel: {
					navigationLabel: "Select language",
					backLabel: "Select language",
					renderContent: () => /* @__PURE__ */ (0, R.jsx)(lh, {
						activeLocale: "en_gb",
						locales: [{
							id: "en_gb",
							label: "ENGLISH (UK)"
						}, {
							id: "de_de",
							label: "DEUTSCH"
						}],
						localeLabel: "Language",
						confirmLabel: "Continue",
						market: {
							label: "Belgium (BE)",
							icon: "be"
						},
						onSubmit: () => {}
					})
				}
			}
		]
	});
}
function yh({ brand: e = "range-rover" }) {
	let [t, n] = (0, z.useState)("/range-rover/en_gb/vehicle-listing/new");
	return /* @__PURE__ */ (0, R.jsx)(If, {
		brand: e,
		children: /* @__PURE__ */ (0, R.jsxs)("div", {
			className: "bg-surface text-text-primary min-h-screen flex flex-col",
			children: [
				/* @__PURE__ */ (0, R.jsx)(nh, {
					brand: e,
					brandHomeHref: "#",
					currentPath: t,
					onNavigate: n,
					getConfirmContent: () => hh,
					startSlot: () => /* @__PURE__ */ (0, R.jsx)(vh, {}),
					navSlot: (e) => /* @__PURE__ */ (0, R.jsx)(ah, {
						items: gh(t),
						"aria-label": "Primary",
						onNavigate: e
					}),
					endSlot: (e) => /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [
						/* @__PURE__ */ (0, R.jsx)(sh, {
							brands: ["jaguar", "discovery"],
							label: "Our other brands",
							onSelect: (t) => e(`/${t}/en_gb`)
						}),
						/* @__PURE__ */ (0, R.jsx)(bh, {}),
						/* @__PURE__ */ (0, R.jsx)(_h, {})
					] })
				}),
				/* @__PURE__ */ (0, R.jsxs)("main", {
					className: "layout-container flex flex-1 flex-col gap-6 py-8",
					children: [/* @__PURE__ */ (0, R.jsxs)("div", {
						className: "flex flex-col gap-2",
						children: [
							/* @__PURE__ */ (0, R.jsx)(qp, {
								level: 2,
								children: "Design system outside Next"
							}),
							/* @__PURE__ */ (0, R.jsxs)(Dm, {
								tone: "muted",
								children: [
									"Header, Footer, and primitives from ",
									/* @__PURE__ */ (0, R.jsx)("code", { children: "@jlr/ui-react" }),
									", styled by",
									" ",
									/* @__PURE__ */ (0, R.jsx)("code", { children: "@jlr/tokens" }),
									", bundled with Vite for AEM EDS."
								]
							}),
							/* @__PURE__ */ (0, R.jsxs)(Dm, {
								tone: "muted",
								children: [
									"Active route: ",
									/* @__PURE__ */ (0, R.jsx)("code", { children: t }),
									" — use the header nav to trigger the confirmation modal."
								]
							})
						]
					}), /* @__PURE__ */ (0, R.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3",
						children: [
							/* @__PURE__ */ (0, R.jsx)(Lp, {
								variant: "primary",
								size: "sm",
								children: "Primary"
							}),
							/* @__PURE__ */ (0, R.jsx)(Lp, {
								variant: "secondary",
								size: "sm",
								children: "Secondary"
							}),
							/* @__PURE__ */ (0, R.jsx)(Lp, {
								variant: "ghost",
								size: "sm",
								children: "Ghost"
							}),
							/* @__PURE__ */ (0, R.jsx)(Gf, { children: "Approved" })
						]
					})]
				}),
				/* @__PURE__ */ (0, R.jsx)(Om, { content: mh })
			]
		})
	});
}
function bh() {
	let { save: e } = Gp();
	return /* @__PURE__ */ (0, R.jsxs)(oh, {
		href: "#",
		children: [/* @__PURE__ */ (0, R.jsx)("span", {
			className: "flex items-center justify-center w-7.5 h-7.5",
			children: /* @__PURE__ */ (0, R.jsx)(Xf, {
				icon: e,
				size: "md",
				badge: 9
			})
		}), "Saved"]
	});
}
//#endregion
//#region src/mount.tsx
var xh = /* @__PURE__ */ new WeakMap();
function Sh(e) {
	let t = xh.get(e);
	return t || (t = (0, ph.createRoot)(e), xh.set(e, t)), t.render(/* @__PURE__ */ (0, R.jsx)(yh, {})), () => Ch(e);
}
function Ch(e) {
	let t = xh.get(e);
	t && (t.unmount(), xh.delete(e));
}
//#endregion
export { Sh as mount, Ch as unmount };
