import { a as e, ct as t, i as n, lt as r, st as i } from "./src-CgYYaxWK.js";
import { t as a } from "./Button-DEkIjh0g.js";
//#region ../../packages/ui-react/src/components/internal/Tone/tone.variants.ts
var o = {
	neutral: "",
	brand: "",
	positive: "",
	warning: "",
	critical: "",
	info: ""
}, s = [
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
], c = [
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
], l = n([
	"inline-flex items-center gap-2",
	"font-medium",
	"select-none whitespace-nowrap",
	"align-middle",
	"uppercase"
], {
	variants: {
		tone: o,
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
		...s,
		...c,
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
}), u = i();
function d({ tone: e, size: n, variant: r, className: i, children: a, ref: o, ...s }) {
	return /* @__PURE__ */ (0, u.jsx)("span", {
		ref: o,
		className: t(l({
			tone: e,
			size: n,
			variant: r
		}), i),
		...s,
		children: a
	});
}
//#endregion
//#region ../../packages/ui-react/src/components/primitives/Heading/Heading.variants.ts
var f = n("font-heading", {
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
function p({ level: e = 2, variant: n, as: r, className: i, children: a, ref: o, ...s }) {
	return /* @__PURE__ */ (0, u.jsx)(r ?? `h${e}`, {
		ref: o,
		className: t(f({ variant: n }), i),
		...s,
		children: a
	});
}
//#endregion
//#region ../../packages/ui-react/src/components/primitives/Text/Text.variants.ts
var m = n("", {
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
function h({ as: e, variant: n, tone: r, weight: i, className: a, children: o, ref: s, ...c }) {
	return /* @__PURE__ */ (0, u.jsx)(e ?? "p", {
		ref: s,
		className: t(m({
			variant: n,
			tone: r,
			weight: i
		}), a),
		...c,
		children: o
	});
}
//#endregion
//#region src/App.tsx
var g = r();
function _({ brand: t = "range-rover" }) {
	return /* @__PURE__ */ (0, u.jsx)(e, {
		brand: t,
		children: /* @__PURE__ */ (0, u.jsxs)("div", {
			className: "bg-surface text-text-primary flex flex-col gap-4 p-6",
			children: [
				/* @__PURE__ */ (0, u.jsx)(p, {
					level: 2,
					children: "Design system sample"
				}),
				/* @__PURE__ */ (0, u.jsxs)(h, {
					tone: "muted",
					children: [
						"Primitives from ",
						/* @__PURE__ */ (0, u.jsx)("code", { children: "@jlr/ui-react" }),
						", styled by ",
						/* @__PURE__ */ (0, u.jsx)("code", { children: "@jlr/tokens" }),
						", bundled with Vite for AEM EDS."
					]
				}),
				/* @__PURE__ */ (0, u.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ (0, u.jsx)(a, {
							variant: "primary",
							size: "sm",
							children: "Primary"
						}),
						/* @__PURE__ */ (0, u.jsx)(a, {
							variant: "secondary",
							size: "sm",
							children: "Secondary"
						}),
						/* @__PURE__ */ (0, u.jsx)(a, {
							variant: "ghost",
							size: "sm",
							children: "Ghost"
						}),
						/* @__PURE__ */ (0, u.jsx)(d, { children: "Approved" })
					]
				})
			]
		})
	});
}
//#endregion
//#region src/mount.tsx
var v = /* @__PURE__ */ new WeakMap();
function y(e) {
	let t = v.get(e);
	return t || (t = (0, g.createRoot)(e), v.set(e, t)), t.render(/* @__PURE__ */ (0, u.jsx)(_, {})), () => b(e);
}
function b(e) {
	let t = v.get(e);
	t && (t.unmount(), v.delete(e));
}
//#endregion
export { y as mount, b as unmount };
