import { a as e, lt as t, st as n } from "./src-CgYYaxWK.js";
import { t as r } from "./Button-DEkIjh0g.js";
import { n as i, r as a, t as o } from "./Text-Ddgjd6nl.js";
//#region src/App.tsx
var s = t(), c = n();
function l({ brand: t = "range-rover" }) {
	return /* @__PURE__ */ (0, c.jsx)(e, {
		brand: t,
		children: /* @__PURE__ */ (0, c.jsxs)("div", {
			className: "bg-surface text-text-primary flex flex-col gap-4 p-6",
			children: [
				/* @__PURE__ */ (0, c.jsx)(i, {
					level: 2,
					children: "Design system sample"
				}),
				/* @__PURE__ */ (0, c.jsxs)(o, {
					tone: "muted",
					children: [
						"Primitives from ",
						/* @__PURE__ */ (0, c.jsx)("code", { children: "@jlr/ui-react" }),
						", styled by ",
						/* @__PURE__ */ (0, c.jsx)("code", { children: "@jlr/tokens" }),
						", bundled with Vite for AEM EDS."
					]
				}),
				/* @__PURE__ */ (0, c.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ (0, c.jsx)(r, {
							variant: "primary",
							size: "sm",
							children: "Primary"
						}),
						/* @__PURE__ */ (0, c.jsx)(r, {
							variant: "secondary",
							size: "sm",
							children: "Secondary"
						}),
						/* @__PURE__ */ (0, c.jsx)(r, {
							variant: "ghost",
							size: "sm",
							children: "Ghost"
						}),
						/* @__PURE__ */ (0, c.jsx)(a, { children: "Approved" })
					]
				})
			]
		})
	});
}
//#endregion
//#region src/mount.tsx
var u = /* @__PURE__ */ new WeakMap();
function d(e) {
	let t = u.get(e);
	return t || (t = (0, s.createRoot)(e), u.set(e, t)), t.render(/* @__PURE__ */ (0, c.jsx)(l, {})), () => f(e);
}
function f(e) {
	let t = u.get(e);
	t && (t.unmount(), u.delete(e));
}
//#endregion
export { d as mount, f as unmount };
