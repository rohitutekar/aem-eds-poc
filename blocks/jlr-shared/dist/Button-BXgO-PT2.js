import { i as e, n as t, t as n } from "./jsx-runtime-CvRU0VyQ.js";
import { K as r, X as i, c as a, et as o, h as s, i as c, lt as l, m as u, n as d, q as f, rt as p, s as m, t as h, u as g } from "./src-aGDJs71C.js";
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/collections/Hidden.mjs
var _ = /* @__PURE__ */ e(t(), 1);
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
var v = /*#__PURE__*/ (0, _.createContext)(!1);
function y(e) {
	if ((0, _.useContext)(v)) return /*#__PURE__*/ _.createElement(_.Fragment, null, e.children);
	let t = /*#__PURE__*/ _.createElement(v.Provider, { value: !0 }, e.children);
	return /*#__PURE__*/ _.createElement("template", null, t);
}
function b(e) {
	let t = (t, n) => (0, _.useContext)(v) ? null : e(t, n);
	return t.displayName = e.displayName || e.name, (0, _.forwardRef)(t);
}
function x() {
	return (0, _.useContext)(v);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/ProgressBar.mjs
var S = /*#__PURE__*/ (0, _.createContext)(null), C = 7e3, w = null;
function T(e, t = "assertive", n = C) {
	w ? w.announce(e, t, n) : (w = new E(), (typeof IS_REACT_ACT_ENVIRONMENT == "boolean" ? IS_REACT_ACT_ENVIRONMENT : typeof jest < "u") ? w.announce(e, t, n) : setTimeout(() => {
		w?.isAttached() && w?.announce(e, t, n);
	}, 100));
}
var E = class {
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
	announce(e, t = "assertive", n = C) {
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
function D(e, t) {
	let { elementType: n = "button", isDisabled: r, onPress: i, onPressStart: a, onPressEnd: c, onPressUp: l, onPressChange: d, preventFocusOnPress: f, allowFocusWhenDisabled: p, onClick: m, href: h, target: _, rel: v, type: y = "button" } = e, b;
	b = n === "button" ? {
		type: y,
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
		href: n === "a" && !r ? h : void 0,
		target: n === "a" ? _ : void 0,
		type: n === "input" ? y : void 0,
		disabled: n === "input" ? r : void 0,
		"aria-disabled": !r || n === "input" ? void 0 : r,
		rel: n === "a" ? v : void 0
	};
	let { pressProps: x, isPressed: S } = g({
		onPressStart: a,
		onPressEnd: c,
		onPressChange: d,
		onPress: i,
		onPressUp: l,
		onClick: m,
		isDisabled: r,
		preventFocusOnPress: f,
		ref: t
	}), { focusableProps: C } = s(e, t);
	p && (C.tabIndex = r ? -1 : C.tabIndex);
	let w = o(C, x, u(e, { labelable: !0 }));
	return {
		isPressed: S,
		buttonProps: o(b, w, {
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
var O = /*#__PURE__*/ (0, _.createContext)({}), k = /*#__PURE__*/ b(function(e, t) {
	[e, t] = r(e, t, O);
	let n = e, { isPending: s } = n, { buttonProps: c, isPressed: l } = D(e, t);
	c = j(c, s);
	let { focusProps: d, isFocused: h, isFocusVisible: g } = a(e), { hoverProps: v, isHovered: y } = m({
		...e,
		isDisabled: e.isDisabled || s
	}), b = {
		isHovered: y,
		isPressed: (n.isPressed || l) && !s,
		isFocused: h,
		isFocusVisible: g,
		isDisabled: e.isDisabled || !1,
		isPending: s ?? !1
	}, x = f({
		...e,
		values: b,
		defaultClassName: "react-aria-Button"
	}), C = p(c.id), w = p(), E = c["aria-labelledby"];
	s && (E ? E = `${E} ${w}` : c["aria-label"] && (E = `${C} ${w}`));
	let k = (0, _.useRef)(s);
	(0, _.useEffect)(() => {
		let e = { "aria-labelledby": E || C };
		(!k.current && h && s || k.current && h && !s) && T(e, "assertive"), k.current = s;
	}, [
		s,
		h,
		E,
		C
	]);
	let A = u(e, { global: !0 });
	return delete A.onClick, /*#__PURE__*/ _.createElement(i.button, {
		...o(A, x, c, d, v),
		type: c.type === "submit" && s ? "button" : c.type,
		id: C,
		ref: t,
		"aria-labelledby": E,
		slot: e.slot || void 0,
		"aria-disabled": s ? "true" : c["aria-disabled"],
		"data-disabled": e.isDisabled || void 0,
		"data-pressed": b.isPressed || void 0,
		"data-hovered": y || void 0,
		"data-focused": h || void 0,
		"data-pending": s || void 0,
		"data-focus-visible": g || void 0
	}, /*#__PURE__*/ _.createElement(S.Provider, { value: { id: w } }, x.children));
}), A = /Focus|Blur|Hover|Pointer(Enter|Leave|Over|Out)|Mouse(Enter|Leave|Over|Out)/;
function j(e, t) {
	if (t) {
		for (let t in e) t.startsWith("on") && !A.test(t) && (e[t] = void 0);
		e.href = void 0, e.target = void 0;
	}
	return e;
}
//#endregion
//#region ../../packages/ui-react/src/components/primitives/Button/Button.variants.ts
var M = c([
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
				d()
			],
			secondary: [
				"button-secondary hover:button-secondary-hover",
				"text-cta",
				"data-[disabled]:button-disabled",
				d({ mode: "secondary" })
			],
			ghost: [
				"button-ghost hover:button-ghost-hover hover:underline",
				"text-cta",
				"data-[disabled]:button-ghost-disabled",
				d()
			],
			inline: [
				"button-inline hover:button-inline-hover",
				"text-cta-inline",
				"data-[disabled]:button-inline-disabled",
				d()
			],
			composed: [
				"data-[disabled]:button-disabled",
				"rounded-none p-0",
				d()
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
}), N = n();
function P(e) {
	return "href" in e && typeof e.href == "string";
}
function F({ variant: e, size: t, fullWidth: n, isDisabled: r, isLoading: i, className: a, children: o, ...s }) {
	let c = M({
		variant: e,
		size: t,
		fullWidth: n
	});
	if (P(s)) {
		let { href: e, external: t, showExternalIcon: n, ref: u, ...d } = s;
		return /* @__PURE__ */ (0, N.jsx)(h, {
			...d,
			ref: u,
			href: e,
			external: t,
			showExternalIcon: n,
			isDisabled: r || i,
			variant: "button",
			"aria-busy": i || void 0,
			className: l(c, a),
			children: o
		});
	}
	let { ref: u, type: d = "button", ...f } = s;
	return /* @__PURE__ */ (0, N.jsx)(k, {
		...f,
		ref: u,
		type: d,
		isPending: i,
		isDisabled: r || i,
		className: l(c, a),
		children: o
	});
}
//#endregion
export { y as a, b as i, O as n, x as o, k as r, F as t };
