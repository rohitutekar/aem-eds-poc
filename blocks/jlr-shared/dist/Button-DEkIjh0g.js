import { G as e, K as t, Q as n, Y as r, c as i, ct as a, dt as o, h as s, i as c, m as l, n as u, pt as d, s as f, st as p, t as m, tt as h, u as g } from "./src-CgYYaxWK.js";
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/collections/Hidden.mjs
var _ = /* @__PURE__ */ d(o(), 1);
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
	let { elementType: r = "button", isDisabled: i, onPress: a, onPressStart: o, onPressEnd: c, onPressUp: u, onPressChange: d, preventFocusOnPress: f, allowFocusWhenDisabled: p, onClick: m, href: h, target: _, rel: v, type: y = "button" } = e, b;
	b = r === "button" ? {
		type: y,
		disabled: i,
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
		href: r === "a" && !i ? h : void 0,
		target: r === "a" ? _ : void 0,
		type: r === "input" ? y : void 0,
		disabled: r === "input" ? i : void 0,
		"aria-disabled": !i || r === "input" ? void 0 : i,
		rel: r === "a" ? v : void 0
	};
	let { pressProps: x, isPressed: S } = g({
		onPressStart: o,
		onPressEnd: c,
		onPressChange: d,
		onPress: a,
		onPressUp: u,
		onClick: m,
		isDisabled: i,
		preventFocusOnPress: f,
		ref: t
	}), { focusableProps: C } = s(e, t);
	p && (C.tabIndex = i ? -1 : C.tabIndex);
	let w = n(C, x, l(e, { labelable: !0 }));
	return {
		isPressed: S,
		buttonProps: n(b, w, {
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
var O = /*#__PURE__*/ (0, _.createContext)({}), k = /*#__PURE__*/ b(function(a, o) {
	[a, o] = e(a, o, O);
	let s = a, { isPending: c } = s, { buttonProps: u, isPressed: d } = D(a, o);
	u = j(u, c);
	let { focusProps: p, isFocused: m, isFocusVisible: g } = i(a), { hoverProps: v, isHovered: y } = f({
		...a,
		isDisabled: a.isDisabled || c
	}), b = {
		isHovered: y,
		isPressed: (s.isPressed || d) && !c,
		isFocused: m,
		isFocusVisible: g,
		isDisabled: a.isDisabled || !1,
		isPending: c ?? !1
	}, x = t({
		...a,
		values: b,
		defaultClassName: "react-aria-Button"
	}), C = h(u.id), w = h(), E = u["aria-labelledby"];
	c && (E ? E = `${E} ${w}` : u["aria-label"] && (E = `${C} ${w}`));
	let k = (0, _.useRef)(c);
	(0, _.useEffect)(() => {
		let e = { "aria-labelledby": E || C };
		(!k.current && m && c || k.current && m && !c) && T(e, "assertive"), k.current = c;
	}, [
		c,
		m,
		E,
		C
	]);
	let A = l(a, { global: !0 });
	return delete A.onClick, /*#__PURE__*/ _.createElement(r.button, {
		...n(A, x, u, p, v),
		type: u.type === "submit" && c ? "button" : u.type,
		id: C,
		ref: o,
		"aria-labelledby": E,
		slot: a.slot || void 0,
		"aria-disabled": c ? "true" : u["aria-disabled"],
		"data-disabled": a.isDisabled || void 0,
		"data-pressed": b.isPressed || void 0,
		"data-hovered": y || void 0,
		"data-focused": m || void 0,
		"data-pending": c || void 0,
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
				u()
			],
			secondary: [
				"button-secondary hover:button-secondary-hover",
				"text-cta",
				"data-[disabled]:button-disabled",
				u({ mode: "secondary" })
			],
			ghost: [
				"button-ghost hover:button-ghost-hover hover:underline",
				"text-cta",
				"data-[disabled]:button-ghost-disabled",
				u()
			],
			inline: [
				"button-inline hover:button-inline-hover",
				"text-cta-inline",
				"data-[disabled]:button-inline-disabled",
				u()
			],
			composed: [
				"data-[disabled]:button-disabled",
				"rounded-none p-0",
				u()
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
}), N = p();
function P(e) {
	return "href" in e && typeof e.href == "string";
}
function F({ variant: e, size: t, fullWidth: n, isDisabled: r, isLoading: i, className: o, children: s, ...c }) {
	let l = M({
		variant: e,
		size: t,
		fullWidth: n
	});
	if (P(c)) {
		let { href: e, external: t, showExternalIcon: n, ref: u, ...d } = c;
		return /* @__PURE__ */ (0, N.jsx)(m, {
			...d,
			ref: u,
			href: e,
			external: t,
			showExternalIcon: n,
			isDisabled: r || i,
			variant: "button",
			"aria-busy": i || void 0,
			className: a(l, o),
			children: s
		});
	}
	let { ref: u, type: d = "button", ...f } = c;
	return /* @__PURE__ */ (0, N.jsx)(k, {
		...f,
		ref: u,
		type: d,
		isPending: i,
		isDisabled: r || i,
		className: a(l, o),
		children: s
	});
}
//#endregion
export { x as a, y as i, O as n, k as r, F as t };
