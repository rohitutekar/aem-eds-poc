import { t as e } from "./jsx-runtime-CvRU0VyQ.js";
import { a as t, ut as n } from "./src-aGDJs71C.js";
import { t as r } from "./Button-BXgO-PT2.js";
import { n as i, r as a, t as o } from "./Text-GMz7IwT6.js";
//#region src/App.tsx
var s = n(), c = e();
function l({ brand: e = "range-rover" }) {
	return /* @__PURE__ */ (0, c.jsx)(t, {
		brand: e,
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
