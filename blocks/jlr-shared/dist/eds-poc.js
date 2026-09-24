import { i as e, n as t, t as n } from "./jsx-runtime-CvRU0VyQ.js";
import { $ as r, C as i, E as a, G as o, J as s, K as c, Q as l, R as u, V as d, X as f, Y as p, Z as m, a as h, at as g, c as _, et as v, i as y, l as b, lt as x, m as S, n as C, nt as w, ot as T, q as E, r as D, rt as O, s as k, ut as A, v as j, w as M, x as N, y as P } from "./src-aGDJs71C.js";
import { A as F, B as I, C as L, D as ee, E as R, F as z, G as B, H as te, I as V, J as ne, K as re, L as ie, M as ae, N as oe, O as se, P as ce, R as H, S as le, T as ue, U as de, V as fe, W as pe, X as me, Y as he, _ as ge, a as _e, b as ve, c as ye, d as U, f as be, g as xe, h as Se, i as Ce, j as we, k as Te, l as Ee, m as De, n as Oe, o as ke, p as Ae, q as je, r as Me, s as Ne, t as Pe, u as W, v as Fe, w as Ie, x as Le, y as Re, z as ze } from "./HeaderMobileMenu-DJ7k37x2.js";
import { t as Be } from "./Footer-BZqvie-e.js";
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/Label.mjs
var G = /* @__PURE__ */ e(t(), 1), Ve = /*#__PURE__*/ (0, G.createContext)({}), He = /*#__PURE__*/ de(function(e, t) {
	[e, t] = c(e, t, Ve);
	let { elementType: n = "label", ...r } = e, i = f[n];
	return /*#__PURE__*/ G.createElement(i, {
		className: "react-aria-Label",
		...r,
		ref: t
	});
});
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/label/useLabel.mjs
function Ue(e) {
	let { id: t, label: n, "aria-labelledby": r, "aria-label": i, labelElementType: a = "label" } = e;
	t = O(t);
	let o = O(), s = {};
	n && (r = r ? `${o} ${r}` : o, s = {
		id: o,
		htmlFor: a === "label" ? t : void 0
	});
	let c = me({
		id: t,
		"aria-label": i,
		"aria-labelledby": r
	});
	return {
		labelProps: s,
		fieldProps: c
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/FieldError.mjs
var We = /*#__PURE__*/ (0, G.createContext)(null), Ge = /*#__PURE__*/ (0, G.forwardRef)(function(e, t) {
	return (0, G.useContext)(We)?.isInvalid ? /*#__PURE__*/ G.createElement(Ke, {
		...e,
		ref: t
	}) : null;
}), Ke = /*#__PURE__*/ (0, G.forwardRef)((e, t) => {
	let n = (0, G.useContext)(We), { elementType: r, ...i } = e, a = S(i, { global: !0 }), o = E({
		...i,
		defaultClassName: "react-aria-FieldError",
		defaultChildren: n.validationErrors.length === 0 ? void 0 : n.validationErrors.join(" "),
		values: n
	});
	return o.children == null ? null : /*#__PURE__*/ G.createElement(ce, {
		slot: "errorMessage",
		elementType: r,
		...a,
		...o,
		ref: t
	});
}), qe = {
	badInput: !1,
	customError: !1,
	patternMismatch: !1,
	rangeOverflow: !1,
	rangeUnderflow: !1,
	stepMismatch: !1,
	tooLong: !1,
	tooShort: !1,
	typeMismatch: !1,
	valueMissing: !1,
	valid: !0
}, Je = {
	...qe,
	customError: !0,
	valid: !1
}, K = {
	isInvalid: !1,
	validationDetails: qe,
	validationErrors: []
}, Ye = (0, G.createContext)({}), Xe = "__reactAriaFormValidationState";
function Ze(e) {
	if (e.__reactAriaFormValidationState) {
		let { realtimeValidation: t, displayValidation: n, updateValidation: r, resetValidation: i, commitValidation: a } = e[Xe];
		return {
			realtimeValidation: t,
			displayValidation: n,
			updateValidation: r,
			resetValidation: i,
			commitValidation: a
		};
	}
	return Qe(e);
}
function Qe(e) {
	let { isInvalid: t, validationState: n, name: r, value: i, builtinValidation: a, validate: o, validationBehavior: s = "aria" } = e;
	n && (t ||= n === "invalid");
	let c = t === void 0 ? null : {
		isInvalid: t,
		validationErrors: [],
		validationDetails: Je
	}, l = (0, G.useMemo)(() => !o || i == null ? null : et($e(o, i)), [o, i]);
	a?.validationDetails.valid && (a = void 0);
	let u = (0, G.useContext)(Ye), d = (0, G.useMemo)(() => r ? Array.isArray(r) ? r.flatMap((e) => q(u[e])) : q(u[r]) : [], [u, r]), [f, p] = (0, G.useState)(u), [m, h] = (0, G.useState)(!1);
	u !== f && (p(u), h(!1));
	let g = (0, G.useMemo)(() => et(m ? [] : d), [m, d]), _ = (0, G.useRef)(K), [v, y] = (0, G.useState)(K), b = (0, G.useRef)(K), x = () => {
		if (!S) return;
		C(!1);
		let e = l || a || _.current;
		J(e, b.current) || (b.current = e, y(e));
	}, [S, C] = (0, G.useState)(!1);
	return (0, G.useEffect)(x), {
		realtimeValidation: c || g || l || a || K,
		displayValidation: s === "native" ? c || g || v : c || g || l || a || v,
		updateValidation(e) {
			s === "aria" && !J(v, e) ? y(e) : _.current = e;
		},
		resetValidation() {
			let e = K;
			J(e, b.current) || (b.current = e, y(e)), s === "native" && C(!1), h(!0);
		},
		commitValidation() {
			s === "native" && C(!0), h(!0);
		}
	};
}
function q(e) {
	return e ? Array.isArray(e) ? e : [e] : [];
}
function $e(e, t) {
	if (typeof e == "function") {
		let n = e(t);
		if (n && typeof n != "boolean") return q(n);
	}
	return [];
}
function et(e) {
	return e.length ? {
		isInvalid: !0,
		validationErrors: e,
		validationDetails: Je
	} : null;
}
function J(e, t) {
	return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, n) => e === t.validationErrors[n]) && Object.entries(e.validationDetails).every(([e, n]) => t.validationDetails[e] === n);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/Form.mjs
var tt = /*#__PURE__*/ (0, G.createContext)(null);
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/label/useField.mjs
function nt(e) {
	let { description: t, errorMessage: n, isInvalid: r, validationState: i } = e, { labelProps: a, fieldProps: o } = Ue(e), s = w([
		!!t,
		!!n,
		r,
		i
	]), c = w([
		!!t,
		!!n,
		r,
		i
	]);
	return o = v(o, { "aria-describedby": [
		s,
		c,
		e["aria-describedby"]
	].filter(Boolean).join(" ") || void 0 }), {
		labelProps: a,
		fieldProps: o,
		descriptionProps: { id: s },
		errorMessageProps: { id: c }
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/useFormReset.mjs
function rt(e, t, n) {
	let r = N((e) => {
		n && !e.defaultPrevented && n(t);
	});
	(0, G.useEffect)(() => {
		let t = e?.current?.form;
		return t?.addEventListener("reset", r), () => {
			t?.removeEventListener("reset", r);
		};
	}, [e]);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/form/useFormValidation.mjs
function it(e, t, n) {
	let { validationBehavior: r, focus: a } = e;
	g(() => {
		if (r === "native" && n?.current && "setCustomValidity" in n.current && !n.current.disabled) {
			let e = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
			n.current.setCustomValidity(e), n.current.hasAttribute("title") || (n.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation(ot(n.current));
		}
	});
	let o = (0, G.useRef)(!1), s = N(() => {
		o.current || t.resetValidation();
	}), c = N((e) => {
		t.displayValidation.isInvalid || t.commitValidation();
		let r = n?.current?.form;
		!e.defaultPrevented && n && r && st(r) === n.current && (a ? a() : n.current?.focus(), i("keyboard")), e.preventDefault();
	}), l = N(() => {
		t.commitValidation();
	});
	(0, G.useEffect)(() => {
		let e = n?.current;
		if (!e) return;
		let t = e.form, r = t?.reset;
		return t && (t.reset = () => {
			o.current = !window.event || window.event.type === "message" && d(window.event) instanceof MessagePort, r?.call(t), o.current = !1;
		}), e.addEventListener("invalid", c), e.addEventListener("change", l), t?.addEventListener("reset", s), () => {
			e.removeEventListener("invalid", c), e.removeEventListener("change", l), t?.removeEventListener("reset", s), t && (t.reset = r);
		};
	}, [n, r]);
}
function at(e) {
	let t = e.validity;
	return {
		badInput: t.badInput,
		customError: t.customError,
		patternMismatch: t.patternMismatch,
		rangeOverflow: t.rangeOverflow,
		rangeUnderflow: t.rangeUnderflow,
		stepMismatch: t.stepMismatch,
		tooLong: t.tooLong,
		tooShort: t.tooShort,
		typeMismatch: t.typeMismatch,
		valueMissing: t.valueMissing,
		valid: t.valid
	};
}
function ot(e) {
	return {
		isInvalid: !e.validity.valid,
		validationDetails: at(e),
		validationErrors: e.validationMessage ? [e.validationMessage] : []
	};
}
function st(e) {
	for (let t = 0; t < e.elements.length; t++) {
		let n = e.elements[t];
		if (n.validity?.valid === !1) return n;
	}
	return null;
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/ar-AE.mjs
var ct = {};
ct = {
	colorSwatchPicker: "تغييرات الألوان",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "حدد عنصرًا",
	tableResizer: "أداة تغيير الحجم"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/bg-BG.mjs
var lt = {};
lt = {
	colorSwatchPicker: "Цветови мостри",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Изберете предмет",
	tableResizer: "Преоразмерител"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/cs-CZ.mjs
var ut = {};
ut = {
	colorSwatchPicker: "Vzorky barev",
	dropzoneLabel: "Místo pro přetažení",
	selectPlaceholder: "Vyberte položku",
	tableResizer: "Změna velikosti"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/da-DK.mjs
var dt = {};
dt = {
	colorSwatchPicker: "Farveprøver",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Vælg et element",
	tableResizer: "Størrelsesændring"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/de-DE.mjs
var ft = {};
ft = {
	colorSwatchPicker: "Farbfelder",
	dropzoneLabel: "Ablegebereich",
	selectPlaceholder: "Element wählen",
	tableResizer: "Größenanpassung"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/el-GR.mjs
var pt = {};
pt = {
	colorSwatchPicker: "Χρωματικά δείγματα",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Επιλέξτε ένα αντικείμενο",
	tableResizer: "Αλλαγή μεγέθους"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/en-US.mjs
var mt = {};
mt = {
	selectPlaceholder: "Select an item",
	tableResizer: "Resizer",
	dropzoneLabel: "DropZone",
	colorSwatchPicker: "Color swatches"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/es-ES.mjs
var ht = {};
ht = {
	colorSwatchPicker: "Muestras de colores",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Seleccionar un artículo",
	tableResizer: "Cambiador de tamaño"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/et-EE.mjs
var gt = {};
gt = {
	colorSwatchPicker: "Värvinäidised",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Valige üksus",
	tableResizer: "Suuruse muutja"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/fi-FI.mjs
var _t = {};
_t = {
	colorSwatchPicker: "Värimallit",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Valitse kohde",
	tableResizer: "Koon muuttaja"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/fr-FR.mjs
var vt = {};
vt = {
	colorSwatchPicker: "Échantillons de couleurs",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Sélectionner un élément",
	tableResizer: "Redimensionneur"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/he-IL.mjs
var yt = {};
yt = {
	colorSwatchPicker: "דוגמיות צבע",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "בחר פריט",
	tableResizer: "שינוי גודל"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/hr-HR.mjs
var bt = {};
bt = {
	colorSwatchPicker: "Uzorci boja",
	dropzoneLabel: "Zona spuštanja",
	selectPlaceholder: "Odaberite stavku",
	tableResizer: "Promjena veličine"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/hu-HU.mjs
var xt = {};
xt = {
	colorSwatchPicker: "Színtárak",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Válasszon ki egy elemet",
	tableResizer: "Átméretező"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/it-IT.mjs
var St = {};
St = {
	colorSwatchPicker: "Campioni di colore",
	dropzoneLabel: "Zona di rilascio",
	selectPlaceholder: "Seleziona un elemento",
	tableResizer: "Ridimensionamento"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/ja-JP.mjs
var Ct = {};
Ct = {
	colorSwatchPicker: "カラースウォッチ",
	dropzoneLabel: "ドロップゾーン",
	selectPlaceholder: "項目を選択",
	tableResizer: "サイズ変更ツール"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/ko-KR.mjs
var wt = {};
wt = {
	colorSwatchPicker: "색상 견본",
	dropzoneLabel: "드롭 영역",
	selectPlaceholder: "항목 선택",
	tableResizer: "크기 조정기"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/lt-LT.mjs
var Tt = {};
Tt = {
	colorSwatchPicker: "Spalvų pavyzdžiai",
	dropzoneLabel: "„DropZone“",
	selectPlaceholder: "Pasirinkite elementą",
	tableResizer: "Dydžio keitiklis"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/lv-LV.mjs
var Et = {};
Et = {
	colorSwatchPicker: "Krāsu paraugi",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Izvēlēties vienumu",
	tableResizer: "Izmēra mainītājs"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/nb-NO.mjs
var Dt = {};
Dt = {
	colorSwatchPicker: "Fargekart",
	dropzoneLabel: "Droppsone",
	selectPlaceholder: "Velg et element",
	tableResizer: "Størrelsesendrer"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/nl-NL.mjs
var Ot = {};
Ot = {
	colorSwatchPicker: "kleurstalen",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Selecteer een item",
	tableResizer: "Resizer"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/pl-PL.mjs
var kt = {};
kt = {
	colorSwatchPicker: "Próbki kolorów",
	dropzoneLabel: "Strefa upuszczania",
	selectPlaceholder: "Wybierz element",
	tableResizer: "Zmiana rozmiaru"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/pt-BR.mjs
var At = {};
At = {
	colorSwatchPicker: "Amostras de cores",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Selecione um item",
	tableResizer: "Redimensionador"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/pt-PT.mjs
var jt = {};
jt = {
	colorSwatchPicker: "Amostras de cores",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Selecione um item",
	tableResizer: "Redimensionador"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/ro-RO.mjs
var Mt = {};
Mt = {
	colorSwatchPicker: "Specimene de culoare",
	dropzoneLabel: "Zonă de plasare",
	selectPlaceholder: "Selectați un element",
	tableResizer: "Instrument de redimensionare"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/ru-RU.mjs
var Nt = {};
Nt = {
	colorSwatchPicker: "Цветовые образцы",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Выберите элемент",
	tableResizer: "Средство изменения размера"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/sk-SK.mjs
var Pt = {};
Pt = {
	colorSwatchPicker: "Vzorkovníky farieb",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Vyberte položku",
	tableResizer: "Nástroj na zmenu veľkosti"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/sl-SI.mjs
var Ft = {};
Ft = {
	colorSwatchPicker: "Barvne palete",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Izberite element",
	tableResizer: "Spreminjanje velikosti"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/sr-SP.mjs
var It = {};
It = {
	colorSwatchPicker: "Uzorci boje",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Izaberite stavku",
	tableResizer: "Promena veličine"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/sv-SE.mjs
var Lt = {};
Lt = {
	colorSwatchPicker: "Färgrutor",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Välj en artikel",
	tableResizer: "Storleksändrare"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/tr-TR.mjs
var Rt = {};
Rt = {
	colorSwatchPicker: "Renk örnekleri",
	dropzoneLabel: "Bırakma Bölgesi",
	selectPlaceholder: "Bir öğe seçin",
	tableResizer: "Yeniden boyutlandırıcı"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/uk-UA.mjs
var zt = {};
zt = {
	colorSwatchPicker: "Зразки кольорів",
	dropzoneLabel: "DropZone",
	selectPlaceholder: "Виберіть елемент",
	tableResizer: "Засіб змінення розміру"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/zh-CN.mjs
var Bt = {};
Bt = {
	colorSwatchPicker: "颜色色板",
	dropzoneLabel: "放置区域",
	selectPlaceholder: "选择一个项目",
	tableResizer: "尺寸调整器"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intl/zh-TW.mjs
var Vt = {};
Vt = {
	colorSwatchPicker: "色票",
	dropzoneLabel: "放置區",
	selectPlaceholder: "選取項目",
	tableResizer: "大小調整器"
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/intlStrings.mjs
var Ht = {};
Ht = {
	"ar-AE": ct,
	"bg-BG": lt,
	"cs-CZ": ut,
	"da-DK": dt,
	"de-DE": ft,
	"el-GR": pt,
	"en-US": mt,
	"es-ES": ht,
	"et-EE": gt,
	"fi-FI": _t,
	"fr-FR": vt,
	"he-IL": yt,
	"hr-HR": bt,
	"hu-HU": xt,
	"it-IT": St,
	"ja-JP": Ct,
	"ko-KR": wt,
	"lt-LT": Tt,
	"lv-LV": Et,
	"nb-NO": Dt,
	"nl-NL": Ot,
	"pl-PL": kt,
	"pt-BR": At,
	"pt-PT": jt,
	"ro-RO": Mt,
	"ru-RU": Nt,
	"sk-SK": Pt,
	"sl-SI": Ft,
	"sr-SP": It,
	"sv-SE": Lt,
	"tr-TR": Rt,
	"uk-UA": zt,
	"zh-CN": Bt,
	"zh-TW": Vt
};
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/DragAndDrop.mjs
var Y = /*#__PURE__*/ (0, G.createContext)({}), Ut = /*#__PURE__*/ (0, G.createContext)(null), Wt = /*#__PURE__*/ (0, G.forwardRef)(function(e, t) {
	let { render: n } = (0, G.useContext)(Ut);
	return /*#__PURE__*/ G.createElement(G.Fragment, null, n(e, t));
});
function Gt(e, t) {
	let n = e?.renderDropIndicator, r = e?.isVirtualDragging?.(), i = (0, G.useCallback)((e) => {
		if (r || t?.isDropTarget(e)) return n ? n(e) : /*#__PURE__*/ G.createElement(Wt, { target: e });
	}, [
		t?.target,
		r,
		n
	]);
	return e?.useDropIndicator ? i : void 0;
}
function Kt(e, t, n) {
	let r = e.focusedKey, i = null;
	if (t?.isVirtualDragging?.() && n?.target?.type === "item" && (i = n.target.key, n.target.dropPosition === "after")) {
		let e = n.collection.getKeyAfter(i), t = null;
		if (e != null) {
			let r = n.collection.getItem(i)?.level ?? 0;
			for (; e != null;) {
				let i = n.collection.getItem(e);
				if (!i) break;
				if (i.type !== "item") {
					e = n.collection.getKeyAfter(e);
					continue;
				}
				if ((i.level ?? 0) <= r) break;
				t = e, e = n.collection.getKeyAfter(e);
			}
		}
		i = e ?? t ?? i;
	}
	return (0, G.useMemo)(() => new Set([r, i].filter((e) => e != null)), [r, i]);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/listbox/utils.mjs
var X = /* @__PURE__ */ new WeakMap();
function qt(e) {
	return typeof e == "string" ? e.replace(/\s*/g, "") : "" + e;
}
function Jt(e, t) {
	let n = X.get(e);
	if (!n) throw Error("Unknown list");
	return `${n.id}-option-${qt(t)}`;
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/listbox/useListBox.mjs
function Yt(e, t, n) {
	let r = S(e, { labelable: !0 }), i = e.selectionBehavior || "toggle", a = e.orientation || "vertical", o = e.linkBehavior || (i === "replace" ? "action" : "override");
	i === "toggle" && o === "action" && (o = "override");
	let { listProps: s } = L({
		...e,
		ref: n,
		selectionManager: t.selectionManager,
		collection: t.collection,
		disabledKeys: t.disabledKeys,
		linkBehavior: o
	}), { focusWithinProps: c } = b({
		onFocusWithin: e.onFocus,
		onBlurWithin: e.onBlur,
		onFocusWithinChange: e.onFocusChange
	}), l = O(e.id);
	X.set(t, {
		id: l,
		shouldUseVirtualFocus: e.shouldUseVirtualFocus,
		shouldSelectOnPressUp: e.shouldSelectOnPressUp,
		shouldFocusOnHover: e.shouldFocusOnHover,
		isVirtualized: e.isVirtualized,
		onAction: e.onAction,
		linkBehavior: o,
		UNSTABLE_itemBehavior: e.UNSTABLE_itemBehavior
	});
	let { labelProps: u, fieldProps: d } = Ue({
		...e,
		id: l,
		labelElementType: "span"
	});
	return {
		labelProps: u,
		listBoxProps: v(r, c, t.selectionManager.selectionMode === "multiple" ? { "aria-multiselectable": "true" } : {}, {
			role: "listbox",
			"aria-orientation": a,
			...v(d, s)
		})
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/listbox/useOption.mjs
function Xt(e, t, n) {
	let { key: r } = e, i = X.get(t), o = e.isDisabled ?? t.selectionManager.isDisabled(r), s = e.isSelected ?? t.selectionManager.isSelected(r), c = e.shouldSelectOnPressUp ?? i?.shouldSelectOnPressUp, l = e.shouldFocusOnHover ?? i?.shouldFocusOnHover, u = e.shouldUseVirtualFocus ?? i?.shouldUseVirtualFocus, d = e.isVirtualized ?? i?.isVirtualized, f = w(), p = w(), m = {
		role: "option",
		"aria-disabled": o || void 0,
		"aria-selected": t.selectionManager.selectionMode === "none" ? void 0 : s,
		"aria-label": e["aria-label"],
		"aria-labelledby": f,
		"aria-describedby": p
	}, h = t.collection.getItem(r);
	if (d) {
		let e = Number(h?.index);
		m["aria-posinset"] = Number.isNaN(e) ? void 0 : e + 1, m["aria-setsize"] = Le(t.collection);
	}
	let g = i?.onAction ? () => i?.onAction?.(r) : void 0, _ = Jt(t, r), { itemProps: y, isPressed: b, isFocused: x, hasAction: C, allowsSelection: E } = le({
		selectionManager: t.selectionManager,
		key: r,
		ref: n,
		shouldSelectOnPressUp: c,
		allowsDifferentPressOrigin: c && l,
		isVirtualized: d,
		shouldUseVirtualFocus: u,
		isDisabled: o,
		onAction: g || h?.props?.onAction ? T(h?.props?.onAction, g) : void 0,
		linkBehavior: i?.linkBehavior,
		UNSTABLE_itemBehavior: i?.UNSTABLE_itemBehavior,
		id: _
	}), { hoverProps: D } = k({
		isDisabled: o || !l,
		onHoverStart() {
			M() || (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(r));
		}
	}), O = S(h?.props);
	delete O.id;
	let A = a(h?.props);
	return {
		optionProps: {
			...m,
			...v(O, y, D, A),
			id: _
		},
		labelProps: { id: f },
		descriptionProps: { id: p },
		isFocused: x,
		isFocusVisible: x && t.selectionManager.isFocused && M(),
		isSelected: s,
		isDisabled: o,
		isPressed: b,
		allowsSelection: E,
		hasAction: C
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/listbox/useListBoxSection.mjs
function Zt(e) {
	let { heading: t, "aria-label": n } = e, r = O();
	return {
		itemProps: { role: "presentation" },
		headingProps: t ? {
			id: r,
			role: "presentation",
			onMouseDown: (e) => {
				e.preventDefault();
			}
		} : {},
		groupProps: {
			role: "group",
			"aria-label": n,
			"aria-labelledby": t ? r : void 0
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/inertValue.mjs
function Qt(e) {
	let t = G.version.split(".");
	return parseInt(t[0], 10) >= 19 ? e : e ? "true" : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/react-stately@3.48.0_react@19.2.4/node_modules/react-stately/dist/private/list/ListCollection.mjs
var $t = class {
	constructor(e) {
		this.keyMap = /* @__PURE__ */ new Map(), this.firstKey = null, this.lastKey = null, this.iterable = e;
		let t = (e) => {
			if (this.keyMap.set(e.key, e), e.childNodes && e.type === "section") for (let n of e.childNodes) t(n);
		};
		for (let n of e) t(n);
		let n = null, r = 0, i = 0;
		for (let [e, t] of this.keyMap) n ? (n.nextKey = e, t.prevKey = n.key) : (this.firstKey = e, t.prevKey = void 0), t.type === "item" && (t.index = r++), (t.type === "section" || t.type === "item") && i++, n = t, n.nextKey = void 0;
		this._size = i, this.lastKey = n?.key ?? null;
	}
	*[Symbol.iterator]() {
		yield* this.iterable;
	}
	get size() {
		return this._size;
	}
	getKeys() {
		return this.keyMap.keys();
	}
	getKeyBefore(e) {
		let t = this.keyMap.get(e);
		return t ? t.prevKey ?? null : null;
	}
	getKeyAfter(e) {
		let t = this.keyMap.get(e);
		return t ? t.nextKey ?? null : null;
	}
	getFirstKey() {
		return this.firstKey;
	}
	getLastKey() {
		return this.lastKey;
	}
	getItem(e) {
		return this.keyMap.get(e) ?? null;
	}
	at(e) {
		let t = [...this.getKeys()];
		return this.getItem(t[e]);
	}
	getChildren(e) {
		return this.keyMap.get(e)?.childNodes || [];
	}
};
//#endregion
//#region ../../node_modules/.pnpm/react-stately@3.48.0_react@19.2.4/node_modules/react-stately/dist/private/list/useListState.mjs
function en(e) {
	let { filter: t, layoutDelegate: n } = e, r = ve(e), i = (0, G.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [e.disabledKeys]), a = Fe(e, (0, G.useCallback)((e) => t ? new $t(t(e)) : new $t(e), [t]), (0, G.useMemo)(() => ({ suppressTextValueWarning: e.suppressTextValueWarning }), [e.suppressTextValueWarning])), o = (0, G.useMemo)(() => new Re(a, r, { layoutDelegate: n }), [
		a,
		r,
		n
	]);
	return nn(a, o), {
		collection: a,
		disabledKeys: i,
		selectionManager: o
	};
}
function tn(e, t) {
	let n = (0, G.useMemo)(() => t ? e.collection.filter(t) : e.collection, [e.collection, t]), r = e.selectionManager.withCollection(n);
	return nn(n, r), {
		collection: n,
		selectionManager: r,
		disabledKeys: e.disabledKeys
	};
}
function nn(e, t) {
	let n = (0, G.useRef)(null);
	(0, G.useEffect)(() => {
		if (t.focusedKey != null && !e.getItem(t.focusedKey) && n.current) {
			let r = n.current.getKeyAfter(t.focusedKey), i = null;
			for (; r != null;) {
				let a = e.getItem(r);
				if (a && a.type === "item" && !t.isDisabled(r)) {
					i = r;
					break;
				}
				r = n.current.getKeyAfter(r);
			}
			if (i == null) for (r = n.current.getKeyBefore(t.focusedKey); r != null;) {
				let a = e.getItem(r);
				if (a && a.type === "item" && !t.isDisabled(r)) {
					i = r;
					break;
				}
				r = n.current.getKeyBefore(r);
			}
			t.setFocusedKey(i);
		}
		n.current = e;
	}, [e, t]);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/utils/useLoadMoreSentinel.mjs
function rn(e, t) {
	let { collection: n, onLoadMore: r, scrollOffset: i = 1 } = e, a = (0, G.useRef)(null), o = N((e) => {
		for (let t of e) t.isIntersecting && r && r();
	});
	g(() => (t.current && (a.current = new IntersectionObserver(o, {
		root: oe(t?.current),
		rootMargin: `0px ${100 * i}% ${100 * i}% ${100 * i}%`
	}), a.current.observe(t.current)), () => {
		a.current && a.current.disconnect();
	}), [
		n,
		t,
		i
	]);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/ListBox.mjs
var an = /*#__PURE__*/ (0, G.createContext)(null), Z = /*#__PURE__*/ (0, G.createContext)(null), on = /*#__PURE__*/ (0, G.forwardRef)(function(e, t) {
	[e, t] = c(e, t, an);
	let n = (0, G.useContext)(Z);
	return n ? /*#__PURE__*/ G.createElement(cn, {
		state: n,
		props: e,
		listBoxRef: t
	}) : /*#__PURE__*/ G.createElement(fe, { content: /*#__PURE__*/ G.createElement(te, e) }, (n) => /*#__PURE__*/ G.createElement(sn, {
		props: e,
		listBoxRef: t,
		collection: n
	}));
});
function sn({ props: e, listBoxRef: t, collection: n }) {
	e = {
		...e,
		collection: n,
		children: null,
		items: null
	};
	let { layoutDelegate: r } = (0, G.useContext)(H), i = en({
		...e,
		layoutDelegate: r
	});
	return /*#__PURE__*/ G.createElement(cn, {
		state: i,
		props: e,
		listBoxRef: t
	});
}
function cn({ state: e, props: t, listBoxRef: n }) {
	[t, n] = c(t, n, re);
	let { dragAndDropHooks: r, layout: i = "stack", orientation: a = "vertical", filter: s } = t, l = tn(e, s), { collection: u, selectionManager: d } = l, p = !!r?.useDraggableCollectionState, m = !!r?.useDroppableCollectionState, { direction: h } = he(), { disabledBehavior: g, disabledKeys: y } = d, b = Ie({
		usage: "search",
		sensitivity: "base"
	}), { isVirtualized: x, layoutDelegate: C, dropTargetDelegate: w, CollectionRoot: T } = (0, G.useContext)(H), D = (0, G.useMemo)(() => t.keyboardDelegate || new ue({
		collection: u,
		collator: b,
		ref: n,
		disabledKeys: y,
		disabledBehavior: g,
		layout: i,
		orientation: a,
		direction: h,
		layoutDelegate: C
	}), [
		u,
		b,
		n,
		g,
		y,
		a,
		h,
		t.keyboardDelegate,
		i,
		C
	]), { listBoxProps: O } = Yt({
		...t,
		shouldSelectOnPressUp: p || t.shouldSelectOnPressUp,
		keyboardDelegate: D,
		isVirtualized: x
	}, l, n);
	(0, G.useRef)(p), (0, G.useRef)(m), (0, G.useEffect)(() => {}, [p, m]);
	let k, A, j, M = !1, N = null, P = (0, G.useRef)(null);
	if (p && r) {
		k = r.useDraggableCollectionState({
			collection: u,
			selectionManager: d,
			preview: r.renderDragPreview ? P : void 0
		}), r.useDraggableCollection({}, k, n);
		let e = r.DragPreview;
		N = r.renderDragPreview ? /*#__PURE__*/ G.createElement(e, { ref: P }, r.renderDragPreview) : null;
	}
	if (m && r) {
		A = r.useDroppableCollectionState({
			collection: u,
			selectionManager: d
		});
		let e = r.dropTargetDelegate || w || new r.ListDropTargetDelegate(u, n, {
			orientation: a,
			layout: i,
			direction: h
		});
		j = r.useDroppableCollection({
			keyboardDelegate: D,
			dropTargetDelegate: e
		}, A, n), M = A.isDropTarget({ type: "root" });
	}
	let { focusProps: I, isFocused: L, isFocusVisible: R } = _(), z = l.collection.size === 0, B = {
		isDropTarget: M,
		isEmpty: z,
		isFocused: L,
		isFocusVisible: R,
		layout: t.layout || "stack",
		orientation: a,
		state: l
	}, te = E({
		...t,
		children: void 0,
		defaultClassName: "react-aria-ListBox",
		values: B
	}), V = null;
	z && t.renderEmptyState && (V = /*#__PURE__*/ G.createElement("div", {
		role: "option",
		style: { display: "contents" }
	}, t.renderEmptyState(B)));
	let ne = S(t, { global: !0 });
	return /*#__PURE__*/ G.createElement(ee, null, /*#__PURE__*/ G.createElement(f.div, {
		...v(ne, te, O, I, j?.collectionProps),
		ref: n,
		slot: t.slot || void 0,
		onScroll: t.onScroll,
		"data-drop-target": M || void 0,
		"data-empty": z || void 0,
		"data-focused": L || void 0,
		"data-focus-visible": R || void 0,
		"data-layout": t.layout || "stack",
		"data-orientation": a
	}, /*#__PURE__*/ G.createElement(o, { values: [
		[an, t],
		[Z, l],
		[Y, {
			dragAndDropHooks: r,
			dragState: k,
			dropState: A
		}],
		[se, { elementType: "div" }],
		[Ut, { render: dn }],
		[ze, {
			name: "ListBoxSection",
			render: ln
		}]
	] }, /*#__PURE__*/ G.createElement(F, null, /*#__PURE__*/ G.createElement(T, {
		collection: u,
		scrollRef: n,
		persistedKeys: Kt(d, r, A),
		renderDropIndicator: Gt(r, A)
	}))), V, N));
}
function ln(e, t, n, r = "react-aria-ListBoxSection") {
	let i = (0, G.useContext)(Z), { dragAndDropHooks: a, dropState: o } = (0, G.useContext)(Y), { CollectionBranch: c } = (0, G.useContext)(H), [l, u] = s(), { headingProps: d, groupProps: p } = Zt({
		heading: u,
		"aria-label": e["aria-label"] ?? void 0
	}), m = E({
		...e,
		id: void 0,
		children: void 0,
		defaultClassName: r,
		values: void 0
	}), h = S(e, { global: !0 });
	return delete h.id, /*#__PURE__*/ G.createElement(f.section, {
		...v(h, m, p),
		ref: t
	}, /*#__PURE__*/ G.createElement(we.Provider, { value: {
		...d,
		ref: l
	} }, /*#__PURE__*/ G.createElement(c, {
		collection: i.collection,
		parent: n,
		renderDropIndicator: Gt(a, o)
	})));
}
var un = /*#__PURE__*/ I(B, function(e, t, n) {
	let i = r(t), a = (0, G.useContext)(Z), { dragAndDropHooks: s, dragState: c, dropState: l } = (0, G.useContext)(Y), u = c && !(c.isDisabled || c.selectionManager.isDisabled(n.key)), { optionProps: d, labelProps: m, descriptionProps: h, ...g } = Xt({
		key: n.key,
		"aria-label": e?.["aria-label"]
	}, a, i), { hoverProps: _, isHovered: y } = k({
		isDisabled: !g.allowsSelection && !g.hasAction && !u,
		onHoverStart: n.props.onHoverStart,
		onHoverChange: n.props.onHoverChange,
		onHoverEnd: n.props.onHoverEnd
	}), { keyboardProps: b } = j(e), { focusProps: x } = P(e), C = null;
	c && s && (C = s.useDraggableItem({
		key: n.key,
		hasAction: g.hasAction
	}, c));
	let w = null;
	l && s && (w = s.useDroppableItem({ target: {
		type: "item",
		key: n.key,
		dropPosition: "on"
	} }, l, i));
	let T = c && c.isDragging(n.key), D = E({
		...e,
		id: void 0,
		children: e.children,
		defaultClassName: "react-aria-ListBoxItem",
		values: {
			...g,
			isHovered: y,
			selectionMode: a.selectionManager.selectionMode,
			selectionBehavior: a.selectionManager.selectionBehavior,
			allowsDragging: !!c,
			isDragging: T,
			isDropTarget: w?.isDropTarget
		}
	});
	(0, G.useEffect)(() => {
		n.textValue;
	}, [n.textValue]);
	let O = e.href ? f.a : f.div, A = S(e, { global: !0 });
	return delete A.id, delete A.onClick, e.href && d.tabIndex == null && (d.tabIndex = -1), /*#__PURE__*/ G.createElement(O, {
		...v(A, D, d, _, b, x, C?.dragProps, w?.dropProps),
		ref: i,
		"data-allows-dragging": !!c || void 0,
		"data-selected": g.isSelected || void 0,
		"data-disabled": g.isDisabled || void 0,
		"data-hovered": y || void 0,
		"data-focused": g.isFocused || void 0,
		"data-focus-visible": g.isFocusVisible || void 0,
		"data-pressed": g.isPressed || void 0,
		"data-dragging": T || void 0,
		"data-drop-target": w?.isDropTarget || void 0,
		"data-selection-mode": a.selectionManager.selectionMode === "none" ? void 0 : a.selectionManager.selectionMode
	}, /*#__PURE__*/ G.createElement(o, { values: [[z, { slots: {
		[p]: m,
		label: m,
		description: h
	} }], [Te, { isSelected: g.isSelected }]] }, D.children));
});
function dn(e, t) {
	t = r(t);
	let { dragAndDropHooks: n, dropState: i } = (0, G.useContext)(Y), { dropIndicatorProps: a, isHidden: o, isDropTarget: s } = n.useDropIndicator(e, i, t);
	return o ? null : /*#__PURE__*/ G.createElement(pn, {
		...e,
		dropIndicatorProps: a,
		isDropTarget: s,
		ref: t
	});
}
function fn(e, t) {
	let { dropIndicatorProps: n, isDropTarget: r, ...i } = e, a = E({
		...i,
		defaultClassName: "react-aria-DropIndicator",
		values: { isDropTarget: r }
	});
	return /*#__PURE__*/ G.createElement(G.Fragment, null, /*#__PURE__*/ G.createElement(f.div, {
		...n,
		...a,
		role: "option",
		ref: t,
		"data-drop-target": r || void 0
	}));
}
var pn = /*#__PURE__*/ (0, G.forwardRef)(fn);
I(pe, function(e, t, n) {
	let r = (0, G.useContext)(Z), { isLoading: i, onLoadMore: a, scrollOffset: o, ...s } = e, c = (0, G.useRef)(null);
	rn((0, G.useMemo)(() => ({
		onLoadMore: a,
		collection: r?.collection,
		sentinelRef: c,
		scrollOffset: o
	}), [
		a,
		o,
		r?.collection
	]), c);
	let l = E({
		...s,
		id: void 0,
		children: n.rendered,
		defaultClassName: "react-aria-ListBoxLoadingIndicator",
		values: void 0
	});
	return /*#__PURE__*/ G.createElement(G.Fragment, null, /*#__PURE__*/ G.createElement("div", {
		style: {
			position: "relative",
			width: 0,
			height: 0
		},
		inert: Qt(!0)
	}, /*#__PURE__*/ G.createElement("div", {
		"data-testid": "loadMoreSentinel",
		ref: c,
		style: {
			position: "absolute",
			height: 1,
			width: 1
		}
	})), i && l.children && /*#__PURE__*/ G.createElement(G.Fragment, null, /*#__PURE__*/ G.createElement(f.div, {
		...v(S(e, { global: !0 }), { tabIndex: -1 }),
		...l,
		role: "option",
		ref: t
	}, l.children)));
});
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/i18n/useListFormatter.mjs
function mn(e = {}) {
	let { locale: t } = he();
	return (0, G.useMemo)(() => new Intl.ListFormat(t, e), [t, e]);
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/select/useSelect.mjs
var hn = /* @__PURE__ */ new WeakMap();
function gn(e, t, n) {
	let { keyboardDelegate: r, isDisabled: a, isRequired: o, name: s, form: c, validationBehavior: l = "aria" } = e, d = Ie({
		usage: "search",
		sensitivity: "base"
	}), f = (0, G.useMemo)(() => r || new ue(t.collection, t.disabledKeys, n, d), [
		r,
		t.collection,
		t.disabledKeys,
		d,
		n
	]), { menuTriggerProps: p, menuProps: m } = De({
		isDisabled: a,
		type: "listbox"
	}, t, n), h = (e) => {
		if (t.selectionManager.selectionMode !== "multiple") switch (e.key) {
			case "ArrowLeft": {
				e.preventDefault();
				let n = t.selectedKey == null ? f.getFirstKey?.() : f.getKeyAbove?.(t.selectedKey);
				n != null && t.setSelectedKey(n);
				break;
			}
			case "ArrowRight": {
				e.preventDefault();
				let n = t.selectedKey == null ? f.getFirstKey?.() : f.getKeyBelow?.(t.selectedKey);
				n != null && t.setSelectedKey(n);
				break;
			}
		}
	}, { typeSelectProps: g } = R({
		keyboardDelegate: f,
		selectionManager: t.selectionManager,
		onTypeSelect(e) {
			t.setSelectedKey(e);
		}
	}), { isInvalid: _, validationErrors: y, validationDetails: b } = t.displayValidation, { labelProps: x, fieldProps: C, descriptionProps: w, errorMessageProps: E } = nt({
		...e,
		labelElementType: "span",
		isInvalid: _,
		errorMessage: e.errorMessage || y
	});
	t.selectionManager.selectionMode === "multiple" && (g = {});
	let D = S(e, { labelable: !0 }), k = v(g, p, C), A = O();
	return hn.set(t, {
		isDisabled: a,
		isRequired: o,
		name: s,
		form: c,
		validationBehavior: l
	}), {
		labelProps: {
			...x,
			onClick: () => {
				e.isDisabled || (n.current?.focus(), i("keyboard"));
			}
		},
		triggerProps: v(D, {
			...k,
			isDisabled: a,
			onKeyDown: T(k.onKeyDown, h, e.onKeyDown),
			onKeyUp: e.onKeyUp,
			"aria-labelledby": [
				A,
				k["aria-labelledby"],
				k["aria-label"] && !k["aria-labelledby"] ? k.id : null
			].filter(Boolean).join(" "),
			onFocus(n) {
				t.isFocused || (e.onFocus && e.onFocus(n), e.onFocusChange && e.onFocusChange(!0), t.setFocused(!0));
			},
			onBlur(n) {
				t.isOpen || (e.onBlur && e.onBlur(n), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1));
			}
		}),
		valueProps: { id: A },
		menuProps: {
			...m,
			onAction: void 0,
			autoFocus: t.focusStrategy || !0,
			shouldSelectOnPressUp: !0,
			shouldFocusOnHover: !0,
			disallowEmptySelection: !0,
			linkBehavior: "selection",
			onBlur: (n) => {
				u(n.currentTarget, n.relatedTarget) || (e.onBlur && e.onBlur(n), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1));
			},
			"aria-labelledby": [C["aria-labelledby"], k["aria-label"] && !C["aria-labelledby"] ? k.id : null].filter(Boolean).join(" ")
		},
		descriptionProps: w,
		errorMessageProps: E,
		isInvalid: _,
		validationErrors: y,
		validationDetails: b,
		hiddenSelectProps: {
			isDisabled: a,
			name: s,
			label: e.label,
			state: t,
			triggerRef: n,
			form: c
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria@3.50.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria/dist/private/select/HiddenSelect.mjs
function _n(e, t, n) {
	let r = hn.get(t) || {}, { autoComplete: i, name: a = r.name, form: o = r.form, isDisabled: s = r.isDisabled } = e, { validationBehavior: c, isRequired: l } = r, { visuallyHiddenProps: u } = ae({ style: {
		position: "fixed",
		top: 0,
		left: 0
	} });
	rt(e.selectRef, t.defaultValue, t.setValue), it({
		validationBehavior: c,
		focus: () => n.current?.focus()
	}, t, e.selectRef);
	let f = t.setValue, p = (0, G.useCallback)((e) => {
		let t = d(e);
		t.multiple ? f(Array.from(t.selectedOptions, (e) => e.value)) : f(e.currentTarget.value);
	}, [f]);
	return {
		containerProps: {
			...u,
			"aria-hidden": !0,
			"data-react-aria-prevent-focus": !0,
			"data-a11y-ignore": "aria-hidden-focus"
		},
		inputProps: { style: { display: "none" } },
		selectProps: {
			tabIndex: -1,
			autoComplete: i,
			disabled: s,
			multiple: t.selectionManager.selectionMode === "multiple",
			required: c === "native" && l,
			name: a,
			form: o,
			value: t.value ?? "",
			onChange: p,
			onInput: p
		}
	};
}
function vn(e) {
	let { state: t, triggerRef: n, label: r, name: i, form: a, isDisabled: o } = e, s = (0, G.useRef)(null), c = (0, G.useRef)(null), { containerProps: l, selectProps: u } = _n({
		...e,
		selectRef: t.collection.size <= 300 ? s : c
	}, t, n), d = Array.isArray(t.value) ? t.value : [t.value];
	if (t.collection.size <= 300) return /*#__PURE__*/ G.createElement("div", {
		...l,
		"data-testid": "hidden-select-container"
	}, /*#__PURE__*/ G.createElement("label", null, r, /*#__PURE__*/ G.createElement("select", {
		...u,
		ref: s
	}, /*#__PURE__*/ G.createElement("option", {
		value: "",
		label: "\xA0"
	}, "\xA0"), [...t.collection.getKeys()].map((e) => {
		let n = t.collection.getItem(e);
		if (n && n.type === "item") return /*#__PURE__*/ G.createElement("option", {
			key: n.key,
			value: n.key
		}, n.textValue);
	}), t.collection.size === 0 && i && d.map((e, t) => /*#__PURE__*/ G.createElement("option", {
		key: t,
		value: e ?? ""
	})))));
	if (i) {
		let { validationBehavior: e } = hn.get(t) || {};
		d.length === 0 && (d = [null]);
		let n = d.map((t, n) => {
			let r = {
				type: "hidden",
				autoComplete: u.autoComplete,
				name: i,
				form: a,
				disabled: o,
				value: t ?? ""
			};
			return e === "native" ? /*#__PURE__*/ G.createElement("input", {
				key: n,
				...r,
				ref: n === 0 ? c : null,
				style: { display: "none" },
				type: "text",
				required: n === 0 && u.required,
				onChange: () => {}
			}) : /*#__PURE__*/ G.createElement("input", {
				key: n,
				...r,
				ref: n === 0 ? c : null
			});
		});
		return /*#__PURE__*/ G.createElement(G.Fragment, null, n);
	}
	return null;
}
//#endregion
//#region ../../node_modules/.pnpm/react-stately@3.48.0_react@19.2.4/node_modules/react-stately/dist/private/select/useSelectState.mjs
function yn(e) {
	let { selectionMode: t = "single", shouldCloseOnSelect: n = t === "single" } = e, r = ge(e), [i, a] = (0, G.useState)(null), o = (0, G.useMemo)(() => e.defaultValue === void 0 ? t === "single" ? e.defaultSelectedKey ?? null : [] : e.defaultValue, [
		e.defaultValue,
		e.defaultSelectedKey,
		t
	]), [s, c] = je((0, G.useMemo)(() => e.value === void 0 ? t === "single" ? e.selectedKey : void 0 : e.value, [
		e.value,
		e.selectedKey,
		t
	]), o, e.onChange), l = t === "single" && Array.isArray(s) ? s[0] : s, u = (n) => {
		if (t === "single") {
			let t = Array.isArray(n) ? n[0] ?? null : n;
			c(t), t !== l && e.onSelectionChange?.(t);
		} else {
			let e = [];
			Array.isArray(n) ? e = n : n != null && (e = [n]), c(e);
		}
	}, d = en({
		...e,
		selectionMode: t,
		disallowEmptySelection: t === "single",
		allowDuplicateSelectionEvents: !0,
		selectedKeys: (0, G.useMemo)(() => bn(l), [l]),
		onSelectionChange: (e) => {
			if (e !== "all") {
				if (t === "single") {
					let t = e.values().next().value ?? null;
					u(t);
				} else u([...e]);
				n && r.close(), m.commitValidation();
			}
		}
	}), f = d.selectionManager.firstSelectedKey, p = (0, G.useMemo)(() => [...d.selectionManager.selectedKeys].map((e) => d.collection.getItem(e)).filter((e) => e != null), [d.selectionManager.selectedKeys, d.collection]), m = Ze({
		...e,
		value: Array.isArray(l) && l.length === 0 ? null : l
	}), [h, g] = (0, G.useState)(!1), [_] = (0, G.useState)(l);
	return {
		...m,
		...d,
		...r,
		value: l,
		defaultValue: o ?? _,
		setValue: u,
		selectedKey: f,
		setSelectedKey: u,
		selectedItem: p[0] ?? null,
		selectedItems: p,
		defaultSelectedKey: e.defaultSelectedKey ?? (e.selectionMode === "single" ? _ : null),
		focusStrategy: i,
		open(t = null) {
			(d.collection.size !== 0 || e.allowsEmptyCollection) && (a(t), r.open());
		},
		toggle(t = null) {
			(d.collection.size !== 0 || e.allowsEmptyCollection) && (a(t), r.toggle());
		},
		isFocused: h,
		setFocused: g
	};
}
function bn(e) {
	if (e !== void 0) return e === null ? [] : Array.isArray(e) ? e : [e];
}
//#endregion
//#region ../../node_modules/.pnpm/react-aria-components@1.19.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-aria-components/dist/private/Select.mjs
function xn(e) {
	return e && e.__esModule ? e.default : e;
}
var Sn = /*#__PURE__*/ (0, G.createContext)(null), Cn = /*#__PURE__*/ (0, G.createContext)(null), wn = /*#__PURE__*/ de(function(e, t) {
	[e, t] = c(e, t, Sn);
	let { children: n, isDisabled: r = !1, isInvalid: i = !1, isRequired: a = !1 } = e, o = (0, G.useMemo)(() => typeof n == "function" ? n({
		isOpen: !1,
		isDisabled: r,
		isInvalid: i,
		isRequired: a,
		isFocused: !1,
		isFocusVisible: !1,
		defaultChildren: null
	}) : n, [
		n,
		r,
		i,
		a
	]);
	return /*#__PURE__*/ G.createElement(fe, { content: o }, (n) => /*#__PURE__*/ G.createElement(En, {
		props: e,
		collection: n,
		selectRef: t
	}));
}), Tn = [
	Ve,
	V,
	z
];
function En({ props: e, selectRef: t, collection: n }) {
	let { validationBehavior: r } = l(tt) || {}, i = e.validationBehavior ?? r ?? "native", a = yn({
		...e,
		collection: n,
		children: void 0,
		validationBehavior: i
	}), { isFocusVisible: c, focusProps: u } = _({ within: !0 }), d = (0, G.useRef)(null), [p, h] = s(!e["aria-label"] && !e["aria-labelledby"]), { labelProps: g, triggerProps: y, valueProps: b, menuProps: x, descriptionProps: C, errorMessageProps: w, hiddenSelectProps: T, ...D } = gn({
		...m(e),
		label: h,
		validationBehavior: i
	}, a, d), O = (0, G.useMemo)(() => ({
		isOpen: a.isOpen,
		isFocused: a.isFocused,
		isFocusVisible: c,
		isDisabled: e.isDisabled || !1,
		isInvalid: D.isInvalid || !1,
		isRequired: e.isRequired || !1
	}), [
		a.isOpen,
		a.isFocused,
		c,
		e.isDisabled,
		D.isInvalid,
		e.isRequired
	]), k = E({
		...e,
		values: O,
		defaultClassName: "react-aria-Select"
	}), A = S(e, { global: !0 });
	delete A.id;
	let j = (0, G.useRef)(null);
	return /*#__PURE__*/ G.createElement(o, { values: [
		[Sn, e],
		[Cn, a],
		[Dn, b],
		[Ve, {
			...g,
			ref: p,
			elementType: "span"
		}],
		[V, {
			...y,
			ref: d,
			isPressed: a.isOpen,
			autoFocus: e.autoFocus
		}],
		[Ae, a],
		[xe, {
			trigger: "Select",
			triggerRef: d,
			scrollRef: j,
			placement: "bottom start",
			"aria-labelledby": x["aria-labelledby"],
			clearContexts: Tn
		}],
		[an, {
			...x,
			ref: j
		}],
		[Z, a],
		[z, { slots: {
			description: C,
			errorMessage: w
		} }],
		[We, D]
	] }, /*#__PURE__*/ G.createElement(f.div, {
		...v(A, k, u),
		ref: t,
		slot: e.slot || void 0,
		"data-focused": a.isFocused || void 0,
		"data-focus-visible": c || void 0,
		"data-open": a.isOpen || void 0,
		"data-disabled": e.isDisabled || void 0,
		"data-invalid": D.isInvalid || void 0,
		"data-required": e.isRequired || void 0
	}, k.children, /*#__PURE__*/ G.createElement(vn, {
		...T,
		autoComplete: e.autoComplete
	})));
}
var Dn = /*#__PURE__*/ (0, G.createContext)(null), On = /*#__PURE__*/ de(function(e, t) {
	[e, t] = c(e, t, Dn);
	let n = (0, G.useContext)(Cn), { placeholder: r } = l(Sn), i = n.selectedItems.map((e) => {
		let t = e.props?.children;
		return typeof t == "function" && (t = t({
			isHovered: !1,
			isPressed: !1,
			isSelected: !1,
			isFocused: !1,
			isFocusVisible: !1,
			isDisabled: !1,
			selectionMode: "single",
			selectionBehavior: "toggle"
		})), t;
	}), a = mn(), o = (0, G.useMemo)(() => n.selectedItems.map((e) => e?.textValue), [n.selectedItems]), s = n.selectionManager.selectionMode, u = (0, G.useMemo)(() => s === "single" ? o[0] ?? "" : a.format(o), [
		s,
		a,
		o
	]), d = (0, G.useMemo)(() => {
		if (s === "single") return i[0];
		let e = a.formatToParts(o);
		if (e.length === 0) return null;
		let t = 0;
		return e.map((e) => e.type === "element" ? /*#__PURE__*/ G.createElement(G.Fragment, { key: t }, i[t++]) : e.value);
	}, [
		s,
		a,
		o,
		i
	]), p = ne(xn(Ht), "react-aria-components"), m = E({
		...e,
		defaultChildren: d ?? r ?? p.format("selectPlaceholder"),
		defaultClassName: "react-aria-SelectValue",
		values: {
			selectedItem: n.selectedItems[0]?.value ?? null,
			selectedItems: (0, G.useMemo)(() => n.selectedItems.map((e) => e.value ?? null), [n.selectedItems]),
			selectedText: u,
			isPlaceholder: n.selectedItems.length === 0,
			state: n
		}
	}), h = S(e, { global: !0 });
	return /*#__PURE__*/ G.createElement(f.span, {
		ref: t,
		...h,
		...m,
		"data-placeholder": n.selectedItems.length === 0 || void 0
	}, /*#__PURE__*/ G.createElement(z.Provider, { value: void 0 }, m.children));
}), kn = {
	neutral: "",
	brand: "",
	positive: "",
	warning: "",
	critical: "",
	info: ""
}, An = [
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
], jn = [
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
], Mn = y([
	"inline-flex items-center gap-2",
	"font-medium",
	"select-none whitespace-nowrap",
	"align-middle",
	"uppercase"
], {
	variants: {
		tone: kn,
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
		...An,
		...jn,
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
}), Q = n();
function Nn({ tone: e, size: t, variant: n, className: r, children: i, ref: a, ...o }) {
	return /* @__PURE__ */ (0, Q.jsx)("span", {
		ref: a,
		className: x(Mn({
			tone: e,
			size: t,
			variant: n
		}), r),
		...o,
		children: i
	});
}
//#endregion
//#region ../../packages/icons/src/custom/location/BelgiumMap.tsx
var Pn = (0, G.forwardRef)(function({ className: e, width: t = 19, height: n = 19, ...r }, i) {
	return /* @__PURE__ */ (0, Q.jsxs)("svg", {
		ref: i,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 19 19",
		width: t,
		height: n,
		fill: "none",
		className: e,
		...r,
		children: [
			/* @__PURE__ */ (0, Q.jsx)("mask", {
				id: "mask0_16568_64172",
				style: { maskType: "alpha" },
				maskUnits: "userSpaceOnUse",
				x: "0",
				y: "0",
				width: "17",
				height: "17",
				children: /* @__PURE__ */ (0, Q.jsx)("circle", {
					cx: "8.75",
					cy: "8.75",
					r: "8",
					fill: "#D9D9D9"
				})
			}),
			/* @__PURE__ */ (0, Q.jsxs)("g", {
				mask: "url(#mask0_16568_64172)",
				children: [
					/* @__PURE__ */ (0, Q.jsx)("rect", {
						x: "-3.39258",
						y: "0.75",
						width: "8.28571",
						height: "16",
						fill: "#020203"
					}),
					/* @__PURE__ */ (0, Q.jsx)("rect", {
						x: "4.89355",
						y: "0.75",
						width: "8.28571",
						height: "16",
						fill: "#FFDE0D"
					}),
					/* @__PURE__ */ (0, Q.jsx)("rect", {
						x: "13.084",
						y: "0.75",
						width: "8.28571",
						height: "16",
						fill: "#E41915"
					})
				]
			}),
			/* @__PURE__ */ (0, Q.jsx)("rect", {
				x: "0.375",
				y: "0.375",
				width: "16.75",
				height: "16.75",
				rx: "8.375",
				stroke: "#E9ECEC",
				strokeWidth: "0.75"
			})
		]
	});
});
Pn.displayName = "BelgiumMap";
//#endregion
//#region ../../packages/icons/src/custom/locationIcons.ts
var Fn = { be: Pn };
Object.keys(Fn);
function In(e) {
	return Fn[e] ?? null;
}
//#endregion
//#region ../../packages/ui-react/src/components/internal/Field/field.variants.ts
var Ln = y("flex flex-col gap-1.5"), Rn = y([
	"field-label",
	"select-none",
	"data-[disabled]:field-label-disabled"
]), zn = y([
	"field-control",
	"transition-colors",
	"data-[hovered]:field-control-hover",
	"data-[focused]:field-control-focus",
	C(),
	"disabled:cursor-not-allowed disabled:opacity-60 disabled:bg-control-bg-disabled",
	"data-disabled:cursor-not-allowed data-disabled:opacity-60 data-disabled:bg-control-bg-disabled",
	"aria-invalid:field-control-invalid",
	"data-invalid:field-control-invalid",
	"aria-[valid=true]:field-control-valid",
	"data-valid:field-control-valid",
	"data-focused:data-invalid:field-control-focus-invalid",
	"data-[focused]:data-[valid]:field-control-focus-valid",
	"placeholder:field-placeholder"
], {
	variants: { size: {
		sm: "field-control-sm",
		md: "field-control-md",
		lg: "field-control-lg"
	} },
	defaultVariants: { size: "md" }
}), Bn = y(["text-caption text-text-muted"]);
y(["field-status text-accent-error"]);
var Vn = y("relative", {
	variants: { labelPlacement: {
		outside: "flex flex-col gap-2",
		inside: ["field-floating-root"],
		inline: "flex flex-row items-center gap-2"
	} },
	defaultVariants: { labelPlacement: "outside" }
}), Hn = y([], {
	variants: { labelPlacement: {
		outside: "",
		inside: "ds-floating-label field-floating-label",
		inline: "shrink-0"
	} },
	defaultVariants: { labelPlacement: "outside" }
}), Un = y("field-status text-accent-error flex gap-2 items-center", {
	variants: { errorStyle: {
		inline: "",
		divider: "field-floating-status"
	} },
	defaultVariants: { errorStyle: "inline" }
}), Wn = y("font-heading", {
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
function Gn({ level: e = 2, variant: t, as: n, className: r, children: i, ref: a, ...o }) {
	return /* @__PURE__ */ (0, Q.jsx)(n ?? `h${e}`, {
		ref: a,
		className: x(Wn({ variant: t }), r),
		...o,
		children: i
	});
}
//#endregion
//#region ../../packages/ui-react/src/components/internal/Field/FieldLabel.tsx
function Kn({ label: e, isRequired: t, requiredIndicator: n = " *", className: r }) {
	return /* @__PURE__ */ (0, Q.jsxs)(He, {
		className: x(Rn(), r),
		children: [e, t && n ? /* @__PURE__ */ (0, Q.jsx)("span", {
			"aria-hidden": "true",
			className: "text-accent-error",
			children: n
		}) : null]
	});
}
//#endregion
//#region ../../packages/ui-react/src/components/internal/Field/FieldLabelPlacement.ts
function qn(e) {
	switch (e) {
		case "stacked": return "outside";
		case "floating": return "inside";
		case "inline": return "inline";
	}
}
function Jn({ explicit: e, brandLayout: t, componentDefault: n = "outside", hasLabel: r = !0 }) {
	if (e != null) return e;
	let i = t === void 0 ? n : qn(t);
	return i === "inside" && !r ? "outside" : i;
}
//#endregion
//#region ../../packages/ui-react/src/components/internal/Field/FieldStructure.tsx
function Yn({ resolvedLabelPlacement: e, label: t, isRequired: n, requiredIndicator: r = " *", hasValue: i, isInvalid: a, stackClassName: o, labelClassName: s, children: c }) {
	return e === "inline" ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [t && /* @__PURE__ */ (0, Q.jsx)(Kn, {
		label: t,
		isRequired: n,
		requiredIndicator: r,
		className: "shrink-0"
	}), /* @__PURE__ */ (0, Q.jsx)("div", {
		className: o,
		"data-has-value": i ? "true" : "false",
		"data-invalid": a ? !0 : void 0,
		children: c
	})] }) : /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: o,
		"data-has-value": i ? "true" : "false",
		"data-invalid": a ? !0 : void 0,
		children: [t && /* @__PURE__ */ (0, Q.jsx)(Kn, {
			label: t,
			isRequired: n,
			requiredIndicator: r,
			className: s
		}), c]
	});
}
//#endregion
//#region ../../packages/ui-react/src/components/primitives/Select/Select.variants.ts
var Xn = "min-w-0 flex-1 leading-normal", Zn = y([
	"flex items-center gap-2",
	"text-left",
	"cursor-pointer",
	"bg-white",
	"hover:bg-surface",
	"aria-expanded:select-expanded",
	C()
], {
	variants: {
		variant: {
			default: "",
			borderless: "border-transparent bg-transparent"
		},
		labelPlacement: {
			outside: "read-only:bg-control-bg h-10 min-h-10 items-center",
			inline: "read-only:bg-transparent h-10 min-h-10",
			inside: "read-only:bg-control-bg h-auto min-h-[44px] items-center field-floating-input-md field-floating-control"
		},
		size: {
			standard: "",
			compact: ""
		}
	},
	defaultVariants: {
		variant: "default",
		labelPlacement: "outside",
		size: "standard"
	}
}), Qn = y(Xn), $n = y([Xn, "data-placeholder:text-text-muted"]), er = Vn, tr = Hn, nr = Un, rr = y([
	"select-list",
	"scrollbar-subtle",
	"data-entering:animate-in data-entering:fade-in",
	"data-exiting:animate-out data-exiting:fade-out"
]), ir = y([
	"group flex items-center gap-3",
	"cursor-pointer select-none px-2 py-3",
	"whitespace-nowrap",
	"text-body text-text-primary",
	"outline-none shadow-between last:shadow-none",
	"data-hovered:bg-control-option-hover",
	"data-focus-visible:bg-control-option-hover",
	C(),
	"data-disabled:cursor-not-allowed",
	"data-disabled:opacity-60",
	"data-disabled:hover:bg-transparent"
]);
//#endregion
//#region ../../packages/ui-react/src/components/primitives/Select/Select.tsx
function ar(e) {
	return typeof e == "string" || typeof e == "number" ? String(e) : (0, G.isValidElement)(e) ? ar(e.props.children) : "";
}
function or({ label: e, description: t, errorMessage: n, placeholder: r = "Select…", variant: i, size: a = "standard", labelPlacement: o, value: s, defaultValue: c, onChange: l, onOpenChange: u, requiredIndicator: d = " *", isRequired: f, isInvalid: p, renderValue: m, triggerTestId: h, listBoxTestId: g, className: _, children: v, ref: y, ...b }) {
	let { components: S } = be(), C = S.field.layout, { selectArrow: w, error: T } = W(), E = Jn({
		explicit: o,
		brandLayout: C,
		componentDefault: "outside",
		hasLabel: !!e
	}), O = s !== void 0, [k, A] = (0, G.useState)(c !== void 0), [j, M] = (0, G.useState)(!1), [N, P] = (0, G.useState)(), F = (0, G.useRef)(null), I = (0, G.useRef)(null), L = O ? s != null : k;
	(0, G.useLayoutEffect)(() => {
		let e = requestAnimationFrame(() => {
			let e = Array.from(I.current?.children ?? []).map((e) => e.getBoundingClientRect().width), t = Math.max(0, ...e);
			t > 0 && P(t + 34);
		});
		return () => cancelAnimationFrame(e);
	}, [v]), (0, G.useLayoutEffect)(() => {
		if (!j) return;
		let e = requestAnimationFrame(() => {
			let e = F.current?.getBoundingClientRect().width;
			e && e > 0 && P(e);
		});
		return () => cancelAnimationFrame(e);
	}, [j]);
	let ee = x(zn(), Zn({
		variant: i,
		size: a,
		labelPlacement: E
	})), R = () => m === void 0 ? /* @__PURE__ */ (0, Q.jsx)(On, {
		className: $n(),
		children: ({ isPlaceholder: e, selectedText: t }) => e ? r : t ?? r
	}) : /* @__PURE__ */ (0, Q.jsx)("span", {
		className: Qn(),
		children: m
	});
	return /* @__PURE__ */ (0, Q.jsxs)(wn, {
		ref: y,
		isRequired: f,
		isInvalid: p,
		placeholder: r,
		value: s,
		defaultValue: c,
		onChange: (e) => {
			O || A(e != null), l?.(e);
		},
		onOpenChange: (e) => {
			M(e), u?.(e);
		},
		...b,
		className: x(Ln(), "w-full max-w-full", E === "inline" && "flex-row items-center gap-2", _),
		children: [
			/* @__PURE__ */ (0, Q.jsxs)(Yn, {
				resolvedLabelPlacement: E,
				label: e,
				isRequired: f,
				requiredIndicator: d,
				hasValue: L,
				isInvalid: p,
				stackClassName: er({ labelPlacement: E }),
				labelClassName: tr({ labelPlacement: E }),
				children: [/* @__PURE__ */ (0, Q.jsxs)(ie, {
					"data-testid": h,
					className: x(ee, "group max-w-full text-nowrap"),
					style: N ? { minWidth: `${N}px` } : void 0,
					children: [R(), /* @__PURE__ */ (0, Q.jsx)(D, {
						icon: w,
						size: "unset",
						className: x("field-select-arrow shrink-0 text-text-brand transition-transform duration-base ease-standard group-aria-expanded:rotate-180", E === "inside" && "absolute right-3 top-8 -translate-y-1/2")
					})]
				}), E === "inside" && /* @__PURE__ */ (0, Q.jsx)(Ge, {
					className: nr({ errorStyle: S.field.errorStyle }),
					children: n
				})]
			}),
			t && /* @__PURE__ */ (0, Q.jsx)(ce, {
				slot: "description",
				className: Bn(),
				children: t
			}),
			E !== "inside" && /* @__PURE__ */ (0, Q.jsxs)(Ge, {
				className: nr({ errorStyle: S.field.errorStyle }),
				children: [/* @__PURE__ */ (0, Q.jsx)(D, { icon: T }), n]
			}),
			/* @__PURE__ */ (0, Q.jsx)("div", {
				ref: I,
				"aria-hidden": !0,
				className: "pointer-events-none absolute left-0 top-0 -z-10 h-0 w-0 overflow-hidden opacity-0",
				children: G.Children.toArray(v).map((e, t) => {
					let n = ar(e), r = (0, G.isValidElement)(e) && e.key !== null ? e.key : `option-${t}`;
					return /* @__PURE__ */ (0, Q.jsx)("span", {
						className: x(ir(), "w-max"),
						children: n
					}, r);
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)(Se, {
				ref: F,
				placement: "bottom",
				shouldFlip: !1,
				offset: -1,
				className: rr(),
				children: /* @__PURE__ */ (0, Q.jsx)(on, {
					"data-testid": g,
					className: "outline-none",
					children: v
				})
			})
		]
	});
}
function sr({ id: e, className: t, children: n, ...r }) {
	let { check: i } = W();
	return /* @__PURE__ */ (0, Q.jsxs)(un, {
		id: e,
		textValue: typeof n == "string" || typeof n == "number" ? String(n) : void 0,
		...r,
		className: x(ir(), t),
		children: [/* @__PURE__ */ (0, Q.jsx)(D, {
			icon: i,
			size: "xs",
			className: "hidden shrink-0 text-brand group-data-selected:inline-block"
		}), /* @__PURE__ */ (0, Q.jsx)("span", { children: n })]
	});
}
//#endregion
//#region ../../packages/ui-react/src/components/primitives/Text/Text.variants.ts
var cr = y("", {
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
function lr({ as: e, variant: t, tone: n, weight: r, className: i, children: a, ref: o, ...s }) {
	return /* @__PURE__ */ (0, Q.jsx)(e ?? "p", {
		ref: o,
		className: x(cr({
			variant: t,
			tone: n,
			weight: r
		}), i),
		...s,
		children: a
	});
}
//#endregion
//#region ../../packages/ui-react/src/components/composed/HeaderShell/HeaderLocaleMenu.tsx
function ur({ locale: e, label: t, children: n }) {
	let { globe: r, chevron: i } = W();
	return /* @__PURE__ */ (0, Q.jsxs)(Ee, { children: [/* @__PURE__ */ (0, Q.jsx)(Ce, {
		className: "group h-full",
		buttonVariant: "composed",
		buttonProps: { "aria-label": t },
		itemProps: { "data-testid": "header-locale-switcher" },
		children: /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: Ne.trigger,
			children: [
				e,
				/* @__PURE__ */ (0, Q.jsx)(D, {
					icon: r,
					className: "h-4.5 w-4.5 rounded-full",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, Q.jsx)(D, {
					icon: i,
					size: "xs",
					className: "transition-transform duration-base ease-standard group-aria-expanded:rotate-180"
				})
			]
		})
	}), /* @__PURE__ */ (0, Q.jsx)(ye, {
		offset: 1,
		children: n
	})] });
}
//#endregion
//#region ../../packages/ui-react/src/components/composed/HeaderShell/HeaderLocaleForm.tsx
function dr({ activeLocale: e, locales: t, onSubmit: n, market: r, localeLabel: i, confirmLabel: a, confirmButtonRef: o, className: s, isLoading: c }) {
	let [l, u] = (0, G.useState)(e), [d, f] = (0, G.useState)(e);
	e !== d && (f(e), u(e));
	let p = l !== e, m = r?.icon ? In(r.icon) : null;
	return /* @__PURE__ */ (0, Q.jsxs)("form", {
		className: x("space-y-6", s),
		onSubmit: (e) => {
			e.preventDefault(), p && !c && n(l);
		},
		children: [
			r ? /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex gap-2",
				children: [m ? /* @__PURE__ */ (0, Q.jsx)(D, {
					icon: m,
					size: "md",
					"aria-hidden": "true"
				}) : null, /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-text-secondary text-sm font-medium",
					children: r.label
				})]
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(or, {
				"aria-label": i,
				label: i,
				value: l,
				triggerTestId: "locale-select",
				onChange: (e) => {
					typeof e == "string" && t.some((t) => t.id === e) && u(e);
				},
				children: t.map((e) => /* @__PURE__ */ (0, Q.jsx)(sr, {
					id: e.id,
					"data-testid": "locale-option",
					children: e.label
				}, e.id))
			}),
			/* @__PURE__ */ (0, Q.jsx)(U, {
				ref: o,
				"data-testid": "locale-confirm",
				type: "submit",
				variant: "primary",
				fullWidth: !0,
				isLoading: c,
				isDisabled: !p || c,
				children: a
			})
		]
	});
}
//#endregion
//#region src/App.tsx
var fr = A(), pr = {
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
}, mr = {
	title: "Change view?",
	description: "The design-system confirmation modal, gating navigation - rendered outside Next.",
	confirmLabel: "Continue",
	cancelLabel: "Stay here",
	closeLabel: "Close"
};
function hr(e) {
	return [{
		kind: "link",
		key: "new",
		label: "New",
		href: "/range-rover/en_gb/vehicle-listing/new",
		active: e.endsWith("/new"),
		itemProps: { "data-testid": "vehicle-condition-link" }
	}, {
		kind: "link",
		key: "pre-owned",
		label: "Pre-owned",
		href: "/range-rover/en_gb/vehicle-listing/pre-owned",
		active: e.endsWith("/pre-owned"),
		itemProps: { "data-testid": "vehicle-condition-link" }
	}];
}
function gr() {
	return /* @__PURE__ */ (0, Q.jsx)(ur, {
		locale: "EN_GB",
		label: "Select language",
		children: /* @__PURE__ */ (0, Q.jsx)(dr, {
			activeLocale: "en_gb",
			locales: [{
				id: "en_gb",
				label: "ENGLISH (UK)"
			}, {
				id: "de_de",
				label: "DEUTSCH"
			}],
			localeLabel: "Language",
			confirmLabel: "Confirm",
			className: "p-8 min-w-60",
			market: {
				label: "Belgium (BE)",
				icon: "be"
			},
			onSubmit: () => {}
		})
	});
}
function _r() {
	let { globe: e, map: t, save: n } = W();
	return /* @__PURE__ */ (0, Q.jsx)(Pe, {
		openLabel: "Open menu",
		closeLabel: "Close menu",
		label: "Menu",
		navigationLabel: "Primary navigation",
		items: [
			{
				key: "brands",
				label: "Our other brands",
				testId: "header-mobile-brand-switcher",
				panel: {
					navigationLabel: "Our other brands",
					backLabel: "Our other brands",
					renderContent: () => /* @__PURE__ */ (0, Q.jsx)(Oe, {
						brands: ["jaguar", "discovery"],
						label: "Our other brands",
						renderMode: "list",
						onSelect: () => {}
					})
				}
			},
			{
				key: "saved",
				label: "Saved vehicle",
				href: "#",
				icon: n,
				badge: 9,
				divider: !0
			},
			{
				key: "retailers",
				label: "Retailers",
				href: "#",
				icon: t
			},
			{
				key: "locales",
				label: "Change language: ENGLISH (UK)",
				testId: "header-mobile-locale-switcher",
				icon: e,
				panel: {
					navigationLabel: "Select language",
					backLabel: "Select language",
					renderContent: () => /* @__PURE__ */ (0, Q.jsx)(dr, {
						activeLocale: "en_gb",
						locales: [{
							id: "en_gb",
							label: "ENGLISH (UK)"
						}, {
							id: "de_de",
							label: "DEUTSCH"
						}],
						localeLabel: "Language",
						confirmLabel: "Continue",
						market: {
							label: "Belgium (BE)",
							icon: "be"
						},
						onSubmit: () => {}
					})
				}
			}
		]
	});
}
function vr({ brand: e = "range-rover" }) {
	let [t, n] = (0, G.useState)("/range-rover/en_gb/vehicle-listing/new");
	return /* @__PURE__ */ (0, Q.jsx)(h, {
		brand: e,
		children: /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "bg-surface text-text-primary min-h-screen flex flex-col",
			children: [
				/* @__PURE__ */ (0, Q.jsx)(ke, {
					brand: e,
					brandHomeHref: "#",
					currentPath: t,
					onNavigate: n,
					getConfirmContent: () => mr,
					startSlot: () => /* @__PURE__ */ (0, Q.jsx)(_r, {}),
					navSlot: (e) => /* @__PURE__ */ (0, Q.jsx)(_e, {
						items: hr(t),
						"aria-label": "Primary",
						onNavigate: e
					}),
					endSlot: (e) => /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
						/* @__PURE__ */ (0, Q.jsx)(Oe, {
							brands: ["jaguar", "discovery"],
							label: "Our other brands",
							onSelect: (t) => e(`/${t}/en_gb`)
						}),
						/* @__PURE__ */ (0, Q.jsx)(yr, {}),
						/* @__PURE__ */ (0, Q.jsx)(gr, {})
					] })
				}),
				/* @__PURE__ */ (0, Q.jsxs)("main", {
					className: "layout-container flex flex-1 flex-col gap-6 py-8",
					children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "flex flex-col gap-2",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(Gn, {
								level: 2,
								children: "Design system outside Next"
							}),
							/* @__PURE__ */ (0, Q.jsxs)(lr, {
								tone: "muted",
								children: [
									"Header, Footer, and primitives from ",
									/* @__PURE__ */ (0, Q.jsx)("code", { children: "@jlr/ui-react" }),
									", styled by",
									" ",
									/* @__PURE__ */ (0, Q.jsx)("code", { children: "@jlr/tokens" }),
									", bundled with Vite for AEM EDS."
								]
							}),
							/* @__PURE__ */ (0, Q.jsxs)(lr, {
								tone: "muted",
								children: [
									"Active route: ",
									/* @__PURE__ */ (0, Q.jsx)("code", { children: t }),
									" — use the header nav to trigger the confirmation modal."
								]
							})
						]
					}), /* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(U, {
								variant: "primary",
								size: "sm",
								children: "Primary"
							}),
							/* @__PURE__ */ (0, Q.jsx)(U, {
								variant: "secondary",
								size: "sm",
								children: "Secondary"
							}),
							/* @__PURE__ */ (0, Q.jsx)(U, {
								variant: "ghost",
								size: "sm",
								children: "Ghost"
							}),
							/* @__PURE__ */ (0, Q.jsx)(Nn, { children: "Approved" })
						]
					})]
				}),
				/* @__PURE__ */ (0, Q.jsx)(Be, { content: pr })
			]
		})
	});
}
function yr() {
	let { save: e } = W();
	return /* @__PURE__ */ (0, Q.jsxs)(Me, {
		href: "#",
		children: [/* @__PURE__ */ (0, Q.jsx)("span", {
			className: "flex items-center justify-center w-7.5 h-7.5",
			children: /* @__PURE__ */ (0, Q.jsx)(D, {
				icon: e,
				size: "md",
				badge: 9
			})
		}), "Saved"]
	});
}
//#endregion
//#region src/mount.tsx
var $ = /* @__PURE__ */ new WeakMap();
function br(e) {
	let t = $.get(e);
	return t || (t = (0, fr.createRoot)(e), $.set(e, t)), t.render(/* @__PURE__ */ (0, Q.jsx)(vr, {})), () => xr(e);
}
function xr(e) {
	let t = $.get(e);
	t && (t.unmount(), $.delete(e));
}
//#endregion
export { br as mount, xr as unmount };
