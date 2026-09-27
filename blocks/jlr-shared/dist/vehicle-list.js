import { i as e, n as t, t as n } from "./jsx-runtime-CvRU0VyQ.js";
import { a as r, ut as i } from "./src-aGDJs71C.js";
import { t as a } from "./Button-BXgO-PT2.js";
import { n as o, r as s, t as c } from "./Text-GMz7IwT6.js";
//#region src/mount-vehicle-list.tsx
var l = /* @__PURE__ */ e(t(), 1), u = i(), d = n(), f = 6;
function p() {
	return window.JLR_PUBLIC_VEHICLE_API_ORIGIN?.replace(/\/$/, "");
}
function m(e) {
	return {
		vehicleId: `vehicle-${e.id}`,
		title: e.title,
		price: e.price,
		currency: "USD",
		image: e.thumbnail,
		condition: e.availabilityStatus ?? e.category,
		summary: e.description
	};
}
function h(e) {
	return {
		vehicleId: e.vehicleId,
		title: e.title,
		price: e.price,
		currency: e.currency,
		image: e.image,
		condition: e.condition,
		summary: e.specifications?.map(({ label: e, value: t }) => `${e}: ${t}`).join(" | ") ?? ""
	};
}
async function g(e, t, n) {
	let r = p();
	if (r) {
		let i = new URL(`${r}/v1/vehicles`);
		i.searchParams.set("brand", t), i.searchParams.set("locale", "en-GB"), i.searchParams.set("condition", "new"), i.searchParams.set("page", String(e)), i.searchParams.set("pageSize", String(f));
		let a = await fetch(i, { signal: n });
		if (!a.ok) throw Error(`Vehicle service returned ${a.status}`);
		let o = await a.json();
		return {
			items: o.items.map(h),
			total: o.pagination.totalItems
		};
	}
	let i = (e - 1) * f, a = await fetch(`https://dummyjson.com/products?limit=${f}&skip=${i}`, { signal: n });
	if (!a.ok) throw Error(`DummyJSON returned ${a.status}`);
	let o = await a.json();
	return {
		items: o.products.map(m),
		total: o.total
	};
}
function _(e, t) {
	return new Intl.NumberFormat("en-GB", {
		style: "currency",
		currency: t
	}).format(e);
}
function v({ brand: e }) {
	let [t, n] = (0, l.useState)([]), [r, i] = (0, l.useState)(1), [u, f] = (0, l.useState)(0), [p, m] = (0, l.useState)(!0), [h, v] = (0, l.useState)(!1), [y, b] = (0, l.useState)(0);
	return (0, l.useEffect)(() => {
		let t = new AbortController();
		return m(!0), v(!1), g(r, e, t.signal).then((e) => {
			n((t) => r === 1 ? e.items : [...t, ...e.items]), f(e.total);
		}).catch(() => {
			t.signal.aborted || v(!0);
		}).finally(() => {
			t.signal.aborted || m(!1);
		}), () => t.abort();
	}, [
		e,
		r,
		y
	]), h && t.length === 0 ? /* @__PURE__ */ (0, d.jsxs)("div", {
		className: "flex flex-col items-start gap-4",
		children: [
			/* @__PURE__ */ (0, d.jsx)(o, {
				level: 2,
				children: "Vehicles unavailable"
			}),
			/* @__PURE__ */ (0, d.jsx)(c, {
				tone: "muted",
				children: "The vehicle list could not be loaded."
			}),
			/* @__PURE__ */ (0, d.jsx)(a, {
				variant: "secondary",
				size: "sm",
				onPress: () => b((e) => e + 1),
				children: "Retry"
			})
		]
	}) : /* @__PURE__ */ (0, d.jsxs)("section", {
		className: "flex flex-col gap-6",
		"aria-busy": p,
		children: [
			/* @__PURE__ */ (0, d.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, d.jsxs)("div", { children: [/* @__PURE__ */ (0, d.jsx)(o, {
					level: 2,
					children: "Available vehicles"
				}), /* @__PURE__ */ (0, d.jsx)(c, {
					tone: "muted",
					children: "Loaded asynchronously from a public demo API."
				})] }), u > 0 ? /* @__PURE__ */ (0, d.jsxs)(c, {
					tone: "muted",
					children: [u, " results"]
				}) : null]
			}),
			p && t.length === 0 ? /* @__PURE__ */ (0, d.jsx)(c, { children: "Loading vehicle cards..." }) : null,
			/* @__PURE__ */ (0, d.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: t.map((e) => /* @__PURE__ */ (0, d.jsxs)("article", {
					className: "border border-border-subtle bg-surface flex flex-col",
					children: [/* @__PURE__ */ (0, d.jsx)("img", {
						className: "w-full aspect-[4/3] object-cover",
						src: e.image,
						alt: e.title
					}), /* @__PURE__ */ (0, d.jsxs)("div", {
						className: "flex flex-1 flex-col gap-3 p-5",
						children: [
							/* @__PURE__ */ (0, d.jsx)(s, { children: e.condition }),
							/* @__PURE__ */ (0, d.jsx)(o, {
								level: 3,
								children: e.title
							}),
							/* @__PURE__ */ (0, d.jsx)(c, {
								tone: "muted",
								children: e.summary
							}),
							/* @__PURE__ */ (0, d.jsx)(c, {
								variant: "body-lg",
								children: _(e.price, e.currency)
							}),
							/* @__PURE__ */ (0, d.jsx)(a, {
								href: `/${e.vehicleId}`,
								variant: "primary",
								size: "sm",
								className: "mt-auto",
								children: "View details"
							})
						]
					})]
				}, e.vehicleId))
			}),
			h ? /* @__PURE__ */ (0, d.jsx)(c, {
				tone: "critical",
				children: "The next page could not be loaded."
			}) : null,
			t.length < u ? /* @__PURE__ */ (0, d.jsx)(a, {
				variant: "secondary",
				size: "sm",
				isLoading: p,
				onPress: () => i((e) => e + 1),
				className: "self-start",
				children: "Load more"
			}) : null
		]
	});
}
var y = /* @__PURE__ */ new WeakMap();
function b(e, t = "range-rover") {
	let n = y.get(e);
	return n || (n = (0, u.createRoot)(e), y.set(e, n)), n.render(/* @__PURE__ */ (0, d.jsx)(r, {
		brand: t,
		children: /* @__PURE__ */ (0, d.jsx)(v, { brand: t })
	})), () => x(e);
}
function x(e) {
	let t = y.get(e);
	t && (t.unmount(), y.delete(e));
}
//#endregion
export { b as mountVehicleList, x as unmountVehicleList };
