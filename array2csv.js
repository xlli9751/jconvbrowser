/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/@weekend_dev/array-2-csv@1.1.2/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
const array2CSV = (e, { delimiter: t = ";", useDoubleQuotes: a = !1 }) => { let n = ""; !e || e.length, t = "tab" === t ? "\t" : t; let o = []; for (const t in e[0]) o.push(a ? `"${t}"` : t); n = `${o.join(`${t}`)}\n`; for (const r of e) { for (const e of o) { const o = e.replace(/"/gi, ""); n += a ? `"${r[o]}"${t}` : `${r[e]}${t}` } n += "\n" } return n }, data = [{ id: 1, last_name: "Doe", first_name: "John" }, { id: 2, last_name: "Dee", first_name: "Jane" }], finalString = array2CSV(data, { delimiter: ";", useDoubleQuotes: !0 }); console.log(finalString), exports = { array2CSV: array2CSV };
//# sourceMappingURL=/sm/a4f165ba711595b9dee21190205d2268c469b5390da86ba0491f4f20442a0c62.map