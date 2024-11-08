import{r as T,az as x}from"./index-CN4ACLGJ.js";import{z as R,c as N}from"./dom-CFD37C8e.js";import{n as O}from"./key-Dalt3dqL.js";import{c as z}from"./observers-CP3uNsO3.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */const j=new RegExp("\\.(0+)?$"),k=new RegExp("0+$");class i{constructor(t){if(t instanceof i)return t;const[s,n]=B(t).split(".").concat("");this.value=BigInt(s+n.padEnd(i.DECIMALS,"0").slice(0,i.DECIMALS))+BigInt(i.ROUNDED&&n[i.DECIMALS]>="5"),this.isNegative=t.charAt(0)==="-"}getIntegersAndDecimals(){const t=this.value.toString().replace("-","").padStart(i.DECIMALS+1,"0"),s=t.slice(0,-i.DECIMALS),n=t.slice(-i.DECIMALS).replace(k,"");return{integers:s,decimals:n}}toString(){const{integers:t,decimals:s}=this.getIntegersAndDecimals();return`${this.isNegative?"-":""}${t}${s.length?"."+s:""}`}formatToParts(t){const{integers:s,decimals:n}=this.getIntegersAndDecimals(),r=t.numberFormatter.formatToParts(BigInt(s));return this.isNegative&&r.unshift({type:"minusSign",value:t.minusSign}),n.length&&(r.push({type:"decimal",value:t.decimal}),n.split("").forEach(a=>r.push({type:"fraction",value:a}))),r}format(t){const{integers:s,decimals:n}=this.getIntegersAndDecimals(),r=`${this.isNegative?t.minusSign:""}${t.numberFormatter.format(BigInt(s))}`,a=n.length?`${t.decimal}${n.split("").map(l=>t.numberFormatter.format(Number(l))).join("")}`:"";return`${r}${a}`}add(t){return i.fromBigInt(this.value+new i(t).value)}subtract(t){return i.fromBigInt(this.value-new i(t).value)}multiply(t){return i._divRound(this.value*new i(t).value,i.SHIFT)}divide(t){return i._divRound(this.value*i.SHIFT,new i(t).value)}}i.DECIMALS=100;i.ROUNDED=!0;i.SHIFT=BigInt("1"+"0".repeat(i.DECIMALS));i._divRound=(e,t)=>i.fromBigInt(e/t+(i.ROUNDED?e*BigInt(2)/t%BigInt(2):BigInt(0)));i.fromBigInt=e=>Object.assign(Object.create(i.prototype),{value:e,isNegative:e<BigInt(0)});function v(e){return!(!e||isNaN(Number(e)))}function ue(e){return!e||!K(e)?"":p(e,t=>{let s=!1;const n=t.split("").filter((r,a)=>r.match(/\./g)&&!s?(s=!0,!0):r.match(/-/g)&&a===0?!0:O.includes(r)).join("");return v(n)?new i(n).toString():""})}const C=/^([-0])0+(?=\d)/,P=/(?!^\.)\.$/,H=/(?!^-)-/g,U=/^-\b0\b\.?0*$/,Z=/0*$/,le=e=>p(e,t=>{const s=t.replace(H,"").replace(P,"").replace(C,"$1");return v(s)?U.test(s)?s:G(s):t});function G(e){const t=e.split(".")[1],s=new i(e).toString(),[n,r]=s.split(".");return t&&r!==t?`${n}.${t}`:s}function p(e,t){if(!e)return e;const s=e.toLowerCase().indexOf("e")+1;return s?e.replace(/[eE]*$/g,"").substring(0,s).concat(e.slice(s).replace(/[eE]/g,"")).split(/[eE]/).map((n,r)=>t(r===1?n.replace(/\./g,""):n)).join("e").replace(/^e/,"1e"):t(e)}function B(e){const t=e.split(/[eE]/);if(t.length===1)return e;const s=+e;if(Number.isSafeInteger(s))return`${s}`;const n=e.charAt(0)==="-",r=+t[1],a=t[0].split("."),l=(n?a[0].substring(1):a[0])||"",F=a[1]||"",A=(c,o)=>{const g=Math.abs(o)-c.length,b=g>0?`${"0".repeat(g)}${c}`:c;return`${b.slice(0,o)}.${b.slice(o)}`},_=(c,o)=>{const g=o>c.length?`${c}${"0".repeat(o-c.length)}`:c;return`${g.slice(0,o)}.${g.slice(o)}`},y=r>0?`${l}${_(F,r)}`:`${A(l,r)}${F}`;return`${n?"-":""}${y.charAt(0)==="."?"0":""}${y.replace(j,"").replace(C,"")}`}function K(e){return O.some(t=>e.includes(t))}function ge(e,t,s){const n=t.split(".")[1];if(n){const r=n.match(Z)[0];if(r&&s.delocalize(e).length!==t.length&&n.indexOf("e")===-1){const a=s.decimal;return e=e.includes(a)?e:`${e}${a}`,e.padEnd(e.length+r.length,s.localize("0"))}}return e}const u="en",J=["ar","bg","bs","ca","cs","da","de","el",u,"es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","no","nl","pl","pt-BR","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],W=["ar","bg","bs","ca","cs","da","de","de-AT","de-CH","el",u,"en-AU","en-CA","en-GB","es","es-MX","et","fi","fr","fr-CH","he","hi","hr","hu","id","it","it-CH","ja","ko","lt","lv","mk","no","nl","pl","pt","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],X=["arab","arabext","latn"],L=e=>X.includes(e),$=new Intl.NumberFormat().resolvedOptions().numberingSystem,M=$==="arab"||!L($)?"latn":$,q=e=>L(e)?e:M;function S(e,t="cldr"){const s=t==="cldr"?W:J;return e?s.includes(e)?e:(e=e.toLowerCase(),e==="nb"?"no":t==="t9n"&&e==="pt"?"pt-BR":(e.includes("-")&&(e=e.replace(/(\w+)-(\w+)/,(n,r,a)=>`${r}-${a.toUpperCase()}`),s.includes(e)||(e=e.split("-")[0])),e==="zh"?"zh-CN":s.includes(e)?e:(console.warn(`Translations for the "${e}" locale are not available and will fall back to the default, English (en).`),u))):u}const h=new Set;function me(e){Q(e),h.size===0&&(f==null||f.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],subtree:!0})),h.add(e)}function Q(e){e.effectiveLocale=Y(e)}function he(e){h.delete(e),h.size===0&&f.disconnect()}const f=z("mutation",e=>{e.forEach(t=>{const s=t.target;h.forEach(n=>{if(!R(s,n.el))return;const a=N(n.el,"[lang]");if(!a){n.effectiveLocale=u;return}const l=a.lang;n.effectiveLocale=a.hasAttribute("lang")&&l===""?u:l})})});function Y(e){var t;return e.el.lang||((t=N(e.el,"[lang]"))==null?void 0:t.lang)||document.documentElement.lang||u}class V{constructor(){this.delocalize=t=>this._numberFormatOptions?p(t,s=>s.replace(new RegExp(`[${this._minusSign}]`,"g"),"-").replace(new RegExp(`[${this._group}]`,"g"),"").replace(new RegExp(`[${this._decimal}]`,"g"),".").replace(new RegExp(`[${this._digits.join("")}]`,"g"),this._getDigitIndex)):t,this.localize=t=>this._numberFormatOptions?p(t,s=>v(s.trim())?new i(s.trim()).format(this).replace(new RegExp(`[${this._actualGroup}]`,"g"),this._group):s):t}get group(){return this._group}get decimal(){return this._decimal}get minusSign(){return this._minusSign}get digits(){return this._digits}get numberFormatter(){return this._numberFormatter}get numberFormatOptions(){return this._numberFormatOptions}set numberFormatOptions(t){if(t.locale=S(t==null?void 0:t.locale),t.numberingSystem=q(t==null?void 0:t.numberingSystem),!this._numberFormatOptions&&t.locale===u&&t.numberingSystem===M&&Object.keys(t).length===2||JSON.stringify(this._numberFormatOptions)===JSON.stringify(t))return;this._numberFormatOptions=t,this._numberFormatter=new Intl.NumberFormat(this._numberFormatOptions.locale,this._numberFormatOptions),this._digits=[...new Intl.NumberFormat(this._numberFormatOptions.locale,{useGrouping:!1,numberingSystem:this._numberFormatOptions.numberingSystem}).format(9876543210)].reverse();const s=new Map(this._digits.map((r,a)=>[r,a])),n=new Intl.NumberFormat(this._numberFormatOptions.locale,{numberingSystem:this._numberFormatOptions.numberingSystem}).formatToParts(-123456789e-1);this._actualGroup=n.find(r=>r.type==="group").value,this._group=this._actualGroup.trim().length===0||this._actualGroup==" "?" ":this._actualGroup,this._decimal=n.find(r=>r.type==="decimal").value,this._minusSign=n.find(r=>r.type==="minusSign").value,this._getDigitIndex=r=>s.get(r)}}const de=new V;let m,E;function ee(e={}){return Object.entries(e).sort(([t],[s])=>t.localeCompare(s)).map(t=>`${t[0]}-${t[1]}`).flat().join(":")}function fe(e,t){e=S(e),m||(m=new Map),E!==e&&(m.clear(),E=e);const s=ee(t),n=m.get(s);if(n)return n;const r=new Intl.DateTimeFormat(e,t);return m.set(s,r),r}/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */const d={};async function te(e,t){const s=`${t}_${e}`;return d[s]||(d[s]=fetch(x(`./assets/${t}/t9n/messages_${e}.json`)).then(n=>(n.ok||I(),n.json())).catch(()=>I())),d[s]}function I(){throw new Error("could not fetch component message bundle")}function w(e){e.messages={...e.defaultMessages,...e.messageOverrides}}function se(){}async function pe(e){e.defaultMessages=await D(e,e.effectiveLocale),w(e)}async function D(e,t){if(!T())return{};const{el:s}=e,r=s.tagName.toLowerCase().replace("calcite-","");return te(S(t,"t9n"),r)}async function be(e,t){e.defaultMessages=await D(e,t),w(e)}function $e(e){e.onMessagesChange=ne}function ve(e){e.onMessagesChange=se}function ne(){w(this)}export{i as B,$e as a,ve as b,me as c,he as d,le as e,ge as f,fe as g,q as h,v as i,S as j,de as n,ue as p,pe as s,be as u};
