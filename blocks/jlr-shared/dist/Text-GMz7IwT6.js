import { t as e } from "./jsx-runtime-CvRU0VyQ.js";
import { i as t, lt as n } from "./src-aGDJs71C.js";
//#region ../../packages/ui-react/src/components/internal/Tone/tone.variants.ts
var r = {
	neutral: "",
	brand: "",
	positive: "",
	warning: "",
	critical: "",
	info: ""
}, i = [
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
], a = [
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
], o = t([
	"inline-flex items-center gap-2",
	"font-medium",
	"select-none whitespace-nowrap",
	"align-middle",
	"uppercase"
], {
	variants: {
		tone: r,
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
		...i,
		...a,
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
}), s = e();
function c({ tone: e, size: t, variant: r, className: i, children: a, ref: c, ...l }) {
	return /* @__PURE__ */ (0, s.jsx)("span", {
		ref: c,
		className: n(o({
			tone: e,
			size: t,
			variant: r
		}), i),
		...l,
		children: a
	});
}
//#endregion
//#region ../../packages/ui-react/src/components/primitives/Heading/Heading.variants.ts
var l = t("font-heading", {
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
function u({ level: e = 2, variant: t, as: r, className: i, children: a, ref: o, ...c }) {
	return /* @__PURE__ */ (0, s.jsx)(r ?? `h${e}`, {
		ref: o,
		className: n(l({ variant: t }), i),
		...c,
		children: a
	});
}
//#endregion
//#region ../../packages/ui-react/src/components/primitives/Text/Text.variants.ts
var d = t("", {
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
function f({ as: e, variant: t, tone: r, weight: i, className: a, children: o, ref: c, ...l }) {
	return /* @__PURE__ */ (0, s.jsx)(e ?? "p", {
		ref: c,
		className: n(d({
			variant: t,
			tone: r,
			weight: i
		}), a),
		...l,
		children: o
	});
}
//#endregion
export { u as n, c as r, f as t };
