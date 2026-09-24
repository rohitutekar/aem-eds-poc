import { t as e } from "./jsx-runtime-CvRU0VyQ.js";
import { a as t, ut as n } from "./src-aGDJs71C.js";
import { t as r } from "./Footer-BZqvie-e.js";
//#region src/mount-footer.tsx
var i = n(), a = e(), o = {
	socialLinks: [
		{
			id: "instagram",
			name: "Instagram",
			url: "#"
		},
		{
			id: "tiktok",
			name: "TikTok",
			url: "#"
		},
		{
			id: "facebook",
			name: "Facebook",
			url: "#"
		},
		{
			id: "youtube",
			name: "YouTube",
			url: "#"
		},
		{
			id: "x",
			name: "X",
			url: "#"
		}
	],
	footerLinks: [
		{
			id: "imprint",
			name: "Imprint",
			url: "#"
		},
		{
			id: "general-terms-of-use",
			name: "General Terms of Use",
			url: "#"
		},
		{
			id: "privacy-policy",
			name: "Privacy Policy",
			url: "#"
		},
		{
			id: "cookie-policy",
			name: "Cookie Policy",
			url: "#"
		},
		{
			id: "product-safety-ordinance",
			name: "Product Safety Ordinance",
			url: "#"
		},
		{
			id: "accessibility-statement",
			name: "Accessibility Statement",
			url: "#"
		}
	],
	disclaimers: [
		{
			marker: "*",
			text: "From the 1st of September 2017, certain new cars will be type-approved according to the World Harmonised Light Vehicle Test Procedure (WLTP), a new, more realistic test procedure for measuring fuel consumption and CO2 emissions."
		},
		{
			marker: "**",
			text: "The images shown are partly digital visualizations and may not correspond to the model offered."
		},
		{
			marker: "*1",
			text: "The figures given have been determined in accordance with the prescribed EU measurement procedure. A vehicle's actual range may vary depending on various factors."
		}
	],
	legalLines: ["All rights reserved. © 2026 Jaguar Land Rover Limited", "Registered Office: Abbey Road, Whitley, Coventry, CV3 4LF"]
};
function s({ brand: e }) {
	return /* @__PURE__ */ (0, a.jsx)(t, {
		brand: e,
		children: /* @__PURE__ */ (0, a.jsx)(r, { content: o })
	});
}
var c = /* @__PURE__ */ new WeakMap();
function l(e, t = "range-rover") {
	let n = c.get(e);
	return n || (n = (0, i.createRoot)(e), c.set(e, n)), n.render(/* @__PURE__ */ (0, a.jsx)(s, { brand: t })), () => u(e);
}
function u(e) {
	let t = c.get(e);
	t && (t.unmount(), c.delete(e));
}
//#endregion
export { l as mountFooter, u as unmountFooter };
