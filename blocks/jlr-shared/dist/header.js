import { t as e } from "./jsx-runtime-CvRU0VyQ.js";
import { a as t, r as n, ut as r } from "./src-aGDJs71C.js";
import { a as i, n as a, o, r as s, t as c, u as l } from "./HeaderMobileMenu-DJ7k37x2.js";
//#region src/mount-header.tsx
var u = r(), d = e(), f = {
	title: "Change view?",
	description: "Leaving this page will discard unsaved changes.",
	confirmLabel: "Continue",
	cancelLabel: "Stay here",
	closeLabel: "Close"
};
function p(e) {
	return [{
		kind: "link",
		key: "new",
		label: "New",
		href: "/range-rover/en_gb/vehicle-listing/new",
		active: e.endsWith("/new")
	}, {
		kind: "link",
		key: "pre-owned",
		label: "Pre-owned",
		href: "/range-rover/en_gb/vehicle-listing/pre-owned",
		active: e.endsWith("/pre-owned")
	}];
}
function m() {
	let { save: e } = l();
	return /* @__PURE__ */ (0, d.jsxs)(s, {
		href: "#",
		children: [/* @__PURE__ */ (0, d.jsx)("span", {
			className: "flex items-center justify-center w-7.5 h-7.5",
			children: /* @__PURE__ */ (0, d.jsx)(n, {
				icon: e,
				size: "md",
				badge: 9
			})
		}), "Saved"]
	});
}
function h() {
	let { map: e } = l();
	return /* @__PURE__ */ (0, d.jsx)(c, {
		openLabel: "Open menu",
		closeLabel: "Close menu",
		label: "Menu",
		navigationLabel: "Primary navigation",
		items: [{
			key: "brands",
			label: "Our other brands",
			panel: {
				navigationLabel: "Our other brands",
				backLabel: "Our other brands",
				renderContent: () => /* @__PURE__ */ (0, d.jsx)(a, {
					brands: ["jaguar", "discovery"],
					label: "Our other brands",
					renderMode: "list",
					onSelect: (e) => {
						window.location.href = `/${e}/en_gb`;
					}
				})
			}
		}, {
			key: "retailers",
			label: "Retailers",
			href: "#",
			icon: e
		}]
	});
}
function g({ brand: e }) {
	let n = window.location.pathname;
	return /* @__PURE__ */ (0, d.jsx)(t, {
		brand: e,
		children: /* @__PURE__ */ (0, d.jsx)(o, {
			brand: e,
			brandHomeHref: "/",
			currentPath: n,
			onNavigate: (e) => {
				window.location.href = e;
			},
			getConfirmContent: () => f,
			startSlot: () => /* @__PURE__ */ (0, d.jsx)(h, {}),
			navSlot: (e) => /* @__PURE__ */ (0, d.jsx)(i, {
				items: p(n),
				"aria-label": "Primary",
				onNavigate: e
			}),
			endSlot: (e) => /* @__PURE__ */ (0, d.jsxs)(d.Fragment, { children: [/* @__PURE__ */ (0, d.jsx)(a, {
				brands: ["jaguar", "discovery"],
				label: "Our other brands",
				onSelect: (t) => e(`/${t}/en_gb`)
			}), /* @__PURE__ */ (0, d.jsx)(m, {})] })
		})
	});
}
var _ = /* @__PURE__ */ new WeakMap();
function v(e, t = "range-rover") {
	let n = _.get(e);
	return n || (n = (0, u.createRoot)(e), _.set(e, n)), n.render(/* @__PURE__ */ (0, d.jsx)(g, { brand: t })), () => y(e);
}
function y(e) {
	let t = _.get(e);
	t && (t.unmount(), _.delete(e));
}
//#endregion
export { v as mountHeader, y as unmountHeader };
