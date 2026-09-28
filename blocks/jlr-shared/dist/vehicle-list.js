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
function v({ brand: e, content: t }) {
	let [n, r] = (0, l.useState)([]), [i, u] = (0, l.useState)(1), [f, p] = (0, l.useState)(0), [m, h] = (0, l.useState)(!0), [v, y] = (0, l.useState)(!1), [b, x] = (0, l.useState)(0);
	return (0, l.useEffect)(() => {
		let t = new AbortController();
		return h(!0), y(!1), g(i, e, t.signal).then((e) => {
			r((t) => i === 1 ? e.items : [...t, ...e.items]), p(e.total);
		}).catch(() => {
			t.signal.aborted || y(!0);
		}).finally(() => {
			t.signal.aborted || h(!1);
		}), () => t.abort();
	}, [
		e,
		i,
		b
	]), v && n.length === 0 ? /* @__PURE__ */ (0, d.jsxs)("div", {
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
				onPress: () => x((e) => e + 1),
				children: "Retry"
			})
		]
	}) : /* @__PURE__ */ (0, d.jsxs)("section", {
		className: "flex flex-col gap-6",
		"aria-busy": m,
		children: [
			/* @__PURE__ */ (0, d.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, d.jsxs)("div", { children: [t.heading ? /* @__PURE__ */ (0, d.jsx)(o, {
					level: 2,
					children: t.heading
				}) : null, t.description ? /* @__PURE__ */ (0, d.jsx)(c, {
					tone: "muted",
					children: t.description
				}) : null] }), f > 0 ? /* @__PURE__ */ (0, d.jsxs)(c, {
					tone: "muted",
					children: [f, " results"]
				}) : null]
			}),
			m && n.length === 0 ? /* @__PURE__ */ (0, d.jsx)(c, { children: "Loading vehicle cards..." }) : null,
			/* @__PURE__ */ (0, d.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: n.map((e) => /* @__PURE__ */ (0, d.jsxs)("article", {
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
			v ? /* @__PURE__ */ (0, d.jsx)(c, {
				tone: "critical",
				children: "The next page could not be loaded."
			}) : null,
			n.length < f ? /* @__PURE__ */ (0, d.jsx)(a, {
				variant: "secondary",
				size: "sm",
				isLoading: m,
				onPress: () => u((e) => e + 1),
				className: "self-start",
				children: "Load more"
			}) : null
		]
	});
}
var y = /* @__PURE__ */ new WeakMap();
function b(e, t = "range-rover", n = {}) {
	let i = y.get(e);
	return i || (i = (0, u.createRoot)(e), y.set(e, i)), i.render(/* @__PURE__ */ (0, d.jsx)(r, {
		brand: t,
		children: /* @__PURE__ */ (0, d.jsx)(v, {
			brand: t,
			content: n
		})
	})), () => x(e);
}
function x(e) {
	let t = y.get(e);
	t && (t.unmount(), y.delete(e));
}
//#endregion
export { b as mountVehicleList, x as unmountVehicleList };
