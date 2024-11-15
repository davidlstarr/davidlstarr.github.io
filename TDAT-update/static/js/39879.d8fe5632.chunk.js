"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[39879],{39879:(t,n,e)=>{e.d(n,{E:()=>M,G:()=>L,H:()=>O,a:()=>T,b:()=>$,c:()=>F,d:()=>Y,e:()=>B,f:()=>U,g:()=>G,h:()=>x,i:()=>Q,j:()=>N,k:()=>A,l:()=>R,m:()=>p,n:()=>I,o:()=>z,q:()=>q,r:()=>V,s:()=>J,t:()=>H,u:()=>Z,v:()=>W,w:()=>tt,y:()=>K});var r=e(66418),o=(e(24282),["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"]),i=o.join(","),a="undefined"===typeof Element,u=a?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,l=!a&&Element.prototype.getRootNode?function(t){var n;return null===t||void 0===t||null===(n=t.getRootNode)||void 0===n?void 0:n.call(t)}:function(t){return null===t||void 0===t?void 0:t.ownerDocument},c=function t(n,e){var r;void 0===e&&(e=!0);var o=null===n||void 0===n||null===(r=n.getAttribute)||void 0===r?void 0:r.call(n,"inert");return""===o||"true"===o||e&&n&&t(n.parentNode)},s=function(t,n,e){if(c(t))return[];var r=Array.prototype.slice.apply(t.querySelectorAll(i));return n&&u.call(t,i)&&r.unshift(t),r=r.filter(e)},d=function t(n,e,r){for(var o=[],a=Array.from(n);a.length;){var l=a.shift();if(!c(l,!1))if("SLOT"===l.tagName){var s=l.assignedElements(),d=t(s.length?s:l.children,!0,r);r.flatten?o.push.apply(o,d):o.push({scopeParent:l,candidates:d})}else{u.call(l,i)&&r.filter(l)&&(e||!n.includes(l))&&o.push(l);var f=l.shadowRoot||"function"===typeof r.getShadowRoot&&r.getShadowRoot(l),p=!c(f,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(l));if(f&&p){var m=t(!0===f?l.children:f.children,!0,r);r.flatten?o.push.apply(o,m):o.push({scopeParent:l,candidates:m})}else a.unshift.apply(a,l.children)}}return o},f=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},p=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||function(t){var n,e=null===t||void 0===t||null===(n=t.getAttribute)||void 0===n?void 0:n.call(t,"contenteditable");return""===e||"true"===e}(t))&&!f(t)?0:t.tabIndex},m=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},h=function(t){return"INPUT"===t.tagName},v=function(t){return function(t){return h(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var n,e=t.form||l(t),r=function(t){return e.querySelectorAll('input[type="radio"][name="'+t+'"]')};if("undefined"!==typeof window&&"undefined"!==typeof window.CSS&&"function"===typeof window.CSS.escape)n=r(window.CSS.escape(t.name));else try{n=r(t.name)}catch(i){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",i.message),!1}var o=function(t,n){for(var e=0;e<t.length;e++)if(t[e].checked&&t[e].form===n)return t[e]}(n,t.form);return!o||o===t}(t)},g=function(t){var n=t.getBoundingClientRect(),e=n.width,r=n.height;return 0===e&&0===r},y=function(t,n){var e=n.displayCheck,r=n.getShadowRoot;if("hidden"===getComputedStyle(t).visibility)return!0;var o=u.call(t,"details>summary:first-of-type")?t.parentElement:t;if(u.call(o,"details:not([open]) *"))return!0;if(e&&"full"!==e&&"legacy-full"!==e){if("non-zero-area"===e)return g(t)}else{if("function"===typeof r){for(var i=t;t;){var a=t.parentElement,c=l(t);if(a&&!a.shadowRoot&&!0===r(a))return g(t);t=t.assignedSlot?t.assignedSlot:a||c===t.ownerDocument?a:c.host}t=i}if(function(t){var n,e,r,o,i=t&&l(t),a=null===(n=i)||void 0===n?void 0:n.host,u=!1;if(i&&i!==t)for(u=!!(null!==(e=a)&&void 0!==e&&null!==(r=e.ownerDocument)&&void 0!==r&&r.contains(a)||null!==t&&void 0!==t&&null!==(o=t.ownerDocument)&&void 0!==o&&o.contains(t));!u&&a;){var c,s,d;u=!(null===(s=a=null===(c=i=l(a))||void 0===c?void 0:c.host)||void 0===s||null===(d=s.ownerDocument)||void 0===d||!d.contains(a))}return u}(t))return!t.getClientRects().length;if("legacy-full"!==e)return!0}return!1},w=function(t,n){return!(n.disabled||c(n)||function(t){return h(t)&&"hidden"===t.type}(n)||y(n,t)||function(t){return"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some((function(t){return"SUMMARY"===t.tagName}))}(n)||function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if("FIELDSET"===n.tagName&&n.disabled){for(var e=0;e<n.children.length;e++){var r=n.children.item(e);if("LEGEND"===r.tagName)return!!u.call(n,"fieldset[disabled] *")||!r.contains(t)}return!0}n=n.parentElement}return!1}(n))},S=function(t,n){return!(v(n)||p(n)<0||!w(t,n))},E=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},b=function t(n){var e=[],r=[];return n.forEach((function(n,o){var i=!!n.scopeParent,a=i?n.scopeParent:n,u=function(t,n){var e=p(t);return e<0&&n&&!f(t)?0:e}(a,i),l=i?t(n.candidates):a;0===u?i?e.push.apply(e,l):e.push(a):r.push({documentOrder:o,tabIndex:u,item:n,isScope:i,content:l})})),r.sort(m).reduce((function(t,n){return n.isScope?t.push.apply(t,n.content):t.push(n.content),t}),[]).concat(e)},N=function(t,n){var e;return e=(n=n||{}).getShadowRoot?d([t],n.includeContainer,{filter:S.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:E}):s(t,n.includeContainer,S.bind(null,n)),b(e)},A=function(t,n){return(n=n||{}).getShadowRoot?d([t],n.includeContainer,{filter:w.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):s(t,n.includeContainer,w.bind(null,n))},R=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return!1!==u.call(t,i)&&S(n,t)},C=o.concat("iframe").join(","),x=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return!1!==u.call(t,C)&&w(n,t)};const I={getShadowRoot:!0};function L(t){return t?t.id=t.id||`${t.tagName.toLowerCase()}-${(0,r.g)()}`:""}function T(t){const n=F(t,"[dir]");return n?n.getAttribute("dir"):"ltr"}function D(t){return t.getRootNode()}function O(t){const n=D(t);return"host"in n?n:null}function k(t){return t.host||null}function q(t,n){let{selector:e,id:r}=n;if(!t)return null;t.assignedSlot&&(t=t.assignedSlot);const o=D(t);return(r?"getElementById"in o?o.getElementById(r):null:e?o.querySelector(e):null)||q(k(o),{selector:e,id:r})}function F(t,n){return t?t.closest(n)||F(k(D(t)),n):null}function P(t,n){return j(t,n)}function j(t,n){if(!t)return;const e=n(t);if(void 0!==e)return e;const{parentNode:r}=t;return j(r instanceof ShadowRoot?r.host:r,n)}function $(t,n){return!!P(n,(n=>n===t||void 0))}async function B(t){if(t)return function(t){return"function"===typeof t?.setFocus}(t)?t.setFocus():t.focus()}function M(t){if(t)return N(t,I)[0]??t}function U(t){M(t)?.focus()}const _=":not([slot])";function G(t,n,e){n&&!Array.isArray(n)&&"string"!==typeof n&&(e=n,n=null);const r=n?Array.isArray(n)?n.map((t=>`[slot="${t}"]`)).join(","):`[slot="${n}"]`:_;return e?.all?function(t,n,e){let r=n===_?X(t,_):Array.from(t.querySelectorAll(n));r=e&&!1===e.direct?r:r.filter((n=>n.parentElement===t)),r=e?.matches?r.filter((t=>t?.matches(e.matches))):r;const o=e?.selector;return o?r.map((t=>Array.from(t.querySelectorAll(o)))).reduce(((t,n)=>[...t,...n]),[]).filter((t=>!!t)):r}(t,r,e):function(t,n,e){let r=n===_?X(t,_)[0]||null:t.querySelector(n);r=e&&!1===e.direct||r?.parentElement===t?r:null,r=e?.matches?r?.matches(e.matches)?r:null:r;const o=e?.selector;return o?r?.querySelector(o):r}(t,r,e)}function X(t,n){return t?Array.from(t.children||[]).filter((t=>t?.matches(n))):[]}function z(t,n,e){return"string"===typeof n&&""!==n?n:""===n?t[e]:void 0}function H(t){return Boolean(t).toString()}function V(t){return Y(t)||function(t){return!!function(t){return function(t){return t.currentTarget.assignedNodes({flatten:!0})}(t).filter((t=>t.nodeType===Node.TEXT_NODE)).map((t=>t.textContent)).join("").trim()}(t)}(t)}function Y(t){return!!J(t).length}function J(t,n){return function(t,n){const e=t.assignedElements({flatten:!0});return n?function(t,n){return t.filter((t=>t.matches(n)))}(e,n):e}(t.target,n)}function K(t){return!(!t.isPrimary||0!==t.button)}function Q(t){return 0===t.detail}const W=function(t,n,e){let r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const o=t.indexOf(n),i=0===o,a=o===t.length-1;let u;return r&&(e="previous"===e&&i?"last":"next"===e&&a?"first":e),u="previous"===e?t[o-1]||t[r?t.length-1:o]:"next"===e?t[o+1]||t[r?0:o]:"last"===e?t[t.length-1]:t[0],B(u),u};function Z(t,n){if(t.parentNode!==n.parentNode)return!1;const e=Array.from(t.parentNode.children);return e.indexOf(t)<e.indexOf(n)}async function tt(t,n,e,r){return nt(t,n,"transition",e,r)}async function nt(t,n,e,r,o){const i=window.getComputedStyle(t),a="transition"===e?i.transitionDuration:i.animationDuration,u="transition"===e?i.transitionProperty:i.animationName,l=a.split(","),c=l[u.split(",").map((t=>t.trim())).indexOf(n)]??l[0];function s(){requestAnimationFrame((()=>{r?.(),requestAnimationFrame((()=>o?.()))}))}if("0s"===c)return void s();const d="transition"===e?"transitionstart":"animationstart",f="transition"===e?"transitionend":"animationend",p="transition"===e?"transitioncancel":"animationcancel";return new Promise((e=>{const i=window.setTimeout((()=>{t.removeEventListener(d,a),t.removeEventListener(f,u),t.removeEventListener(p,u),s(),e()}),1e3*parseFloat(c));function a(e){e.target===t&&et(e)===n&&(window.clearTimeout(i),t.removeEventListener(d,a),r?.())}function u(r){r.target===t&&et(r)===n&&(t.removeEventListener(f,u),t.removeEventListener(p,u),o?.(),e())}t.addEventListener(d,a),t.addEventListener(f,u),t.addEventListener(p,u)}))}function et(t){return function(t){return"propertyName"in t}(t)?t.propertyName:t.animationName}},66418:(t,n,e)=>{e.d(n,{g:()=>r});const r=()=>[2,1,1,1,3].map((t=>{let n="";for(let e=0;e<t;e++)n+=(65536*(1+Math.random())|0).toString(16).substring(1);return n})).join("-")}}]);
//# sourceMappingURL=39879.d8fe5632.chunk.js.map