import { i as e, n as t, t as n } from "./jsx-runtime-CvRU0VyQ.js";
import { a as r, ut as i } from "./src-aGDJs71C.js";
import { t as a } from "./Button-BXgO-PT2.js";
import { n as o, r as s, t as c } from "./Text-GMz7IwT6.js";
//#region src/mount-vehicle-detail.tsx
var l = /* @__PURE__ */ e(t(), 1), u = i(), d = n();
function f() {
	return (window.JLR_PUBLIC_VEHICLE_API_ORIGIN ?? "http://localhost:8787").replace(/\/$/, "");
}
function p() {
	let e = window.location.pathname.split("/").filter(Boolean);
	return decodeURIComponent(e.at(-1) ?? "vehicle-1");
}
function m(e, t) {
	return new Intl.NumberFormat("en-GB", {
		style: "currency",
		currency: t
	}).format(e);
}
function h({ vehicleId: e, brand: t }) {
	let [n, r] = (0, l.useState)(), [i, u] = (0, l.useState)(), [p, h] = (0, l.useState)(!0), [g, _] = (0, l.useState)(0);
	if ((0, l.useEffect)(() => {
		let n = new AbortController(), i = new URL(`${f()}/v1/vehicles/${encodeURIComponent(e)}`);
		return i.searchParams.set("brand", t), i.searchParams.set("locale", "en-GB"), i.searchParams.set("condition", "new"), h(!0), u(void 0), fetch(i, { signal: n.signal }).then(async (e) => {
			let t = await e.json();
			if (!e.ok) throw t;
			return t;
		}).then((e) => r(e)).catch((e) => {
			n.signal.aborted || u(e);
		}).finally(() => {
			n.signal.aborted || h(!1);
		}), () => n.abort();
	}, [
		t,
		g,
		e
	]), p) return /* @__PURE__ */ (0, d.jsx)(c, { children: "Loading vehicle details..." });
	if (i || !n) {
		let t = i?.error?.code === "VEHICLE_NOT_FOUND";
		return /* @__PURE__ */ (0, d.jsxs)("div", {
			className: "flex flex-col gap-4",
			children: [
				/* @__PURE__ */ (0, d.jsx)(o, {
					level: 2,
					children: t ? "Vehicle not found" : "Vehicle details unavailable"
				}),
				/* @__PURE__ */ (0, d.jsx)(c, {
					tone: "muted",
					children: t ? `No vehicle was found for ID ${e}.` : "The vehicle service could not be reached. Please try again."
				}),
				!t && /* @__PURE__ */ (0, d.jsx)(a, {
					variant: "secondary",
					size: "sm",
					onPress: () => _((e) => e + 1),
					children: "Retry"
				})
			]
		});
	}
	return /* @__PURE__ */ (0, d.jsxs)("article", {
		className: "grid gap-6 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, d.jsx)("img", {
			className: "w-full aspect-[4/3] object-cover",
			src: n.image,
			alt: n.title
		}), /* @__PURE__ */ (0, d.jsxs)("div", {
			className: "flex flex-col gap-4",
			children: [
				/* @__PURE__ */ (0, d.jsx)(s, { children: n.condition }),
				/* @__PURE__ */ (0, d.jsx)(o, {
					level: 1,
					children: n.title
				}),
				/* @__PURE__ */ (0, d.jsx)(c, {
					variant: "body-lg",
					children: m(n.price, n.currency)
				}),
				/* @__PURE__ */ (0, d.jsx)("dl", {
					className: "grid grid-cols-2 gap-3",
					children: n.specifications.map((e) => /* @__PURE__ */ (0, d.jsxs)("div", { children: [/* @__PURE__ */ (0, d.jsx)("dt", {
						className: "text-text-muted",
						children: e.label
					}), /* @__PURE__ */ (0, d.jsx)("dd", {
						className: "font-medium",
						children: e.value
					})] }, e.label))
				}),
				/* @__PURE__ */ (0, d.jsxs)(c, {
					tone: "muted",
					children: [
						"Inventory updated ",
						new Date(n.updatedAt).toLocaleString("en-GB"),
						"."
					]
				})
			]
		})]
	});
}
var g = /* @__PURE__ */ new WeakMap();
function _(e, t = p(), n = "range-rover") {
	let i = g.get(e);
	return i || (i = (0, u.createRoot)(e), g.set(e, i)), i.render(/* @__PURE__ */ (0, d.jsx)(r, {
		brand: n,
		children: /* @__PURE__ */ (0, d.jsx)(h, {
			vehicleId: t,
			brand: n
		})
	})), () => v(e);
}
function v(e) {
	let t = g.get(e);
	t && (t.unmount(), g.delete(e));
}
//#endregion
export { _ as mountVehicleDetail, v as unmountVehicleDetail };
