/*! For license information please see 90490.b7983ead.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[90490],{90490:(e,t,i)=>{i.r(t),i.d(t,{calcite_filter:()=>h});var n=i(22737),a=i(41479),r=i(76055),o=i(98563),s=i(99398),l=i(67928),c=i(73364),d=i(2450);i(57922),i(28716),i(68385);const u="container",f="search",h=class{constructor(e){var t=this;(0,n.r)(this,e),this.calciteFilterChange=(0,n.c)(this,"calciteFilterChange",6),this.filterDebounced=(0,d.d)((function(e){let i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0;return t.updateFiltered((0,a.f)(t.items??[],e,t.filterProps),i,n)}),c.D.filter),this.inputHandler=e=>{const t=e.target;this.value=t.value,this.filterDebounced(t.value,!0)},this.keyDownHandler=e=>{e.defaultPrevented||("Escape"===e.key&&(this.clear(),e.preventDefault()),"Enter"===e.key&&e.preventDefault())},this.clear=()=>{this.value="",this.filterDebounced("",!0),this.setFocus()},this.items=[],this.disabled=!1,this.filteredItems=[],this.filterProps=void 0,this.placeholder=void 0,this.scale="m",this.value="",this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}watchItemsHandler(){this.filterDebounced(this.value)}filterPropsHandler(){this.filterDebounced(this.value)}onMessagesChange(){}valueHandler(e){this.filterDebounced(e)}effectiveLocaleChange(){(0,l.u)(this,this.effectiveLocale)}async componentWillLoad(){(0,o.s)(this),this.updateFiltered((0,a.f)(this.items??[],this.value,this.filterProps)),await(0,l.s)(this)}connectedCallback(){(0,s.c)(this),(0,l.c)(this)}componentDidRender(){(0,r.u)(this)}disconnectedCallback(){(0,s.d)(this),(0,l.d)(this),this.filterDebounced.cancel()}componentDidLoad(){(0,o.a)(this)}async filter(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.value;return new Promise((t=>{this.value=e,this.filterDebounced(e,!1,t)}))}async setFocus(){return await(0,o.c)(this),this.textInput?.setFocus()}updateFiltered(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2?arguments[2]:void 0;this.filteredItems=e,t&&this.calciteFilterChange.emit(),i?.()}render(){const{disabled:e,scale:t}=this;return(0,n.h)(r.I,{key:"c4a624e52409ed90839b506f5d99ab623767260e",disabled:e},(0,n.h)("div",{key:"1f2ef99156489719dd2f938bc5ce8a05185866bf",class:u},(0,n.h)("label",{key:"6fe8c6cf73f554908be38299263d23380a4ed089"},(0,n.h)("calcite-input",{key:"6765e00d208d6898221540769865d84aa1c64974",clearable:!0,disabled:e,icon:f,label:this.messages.label,messageOverrides:{clear:this.messages.clear},onCalciteInputInput:this.inputHandler,onKeyDown:this.keyDownHandler,placeholder:this.placeholder,ref:e=>{this.textInput=e},scale:t,type:"text",value:this.value}))))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return(0,n.g)(this)}static get watchers(){return{items:["watchItemsHandler"],filterProps:["filterPropsHandler"],messageOverrides:["onMessagesChange"],value:["valueHandler"],effectiveLocale:["effectiveLocaleChange"]}}};h.style=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;inline-size:100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{display:flex;inline-size:100%;padding:0.5rem}label{position:relative;margin-inline:0.25rem;margin-block:0px;display:flex;inline-size:100%;align-items:center;overflow:hidden}input[type=text]{margin-block-end:0.25rem;inline-size:100%;border-style:none;background-color:transparent;padding-block:0.25rem;font-family:inherit;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-color-text-1);padding-inline-end:0.25rem;padding-inline-start:1.5rem;transition:padding var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing)}input[type=text]::-ms-clear{display:none}calcite-input{inline-size:100%}.search-icon{position:absolute;display:flex;color:var(--calcite-color-text-2);inset-inline-start:0;transition:inset-inline-start var(--calcite-animation-timing), inset-inline-end var(--calcite-animation-timing), opacity var(--calcite-animation-timing)}input[type=text]:focus{border-color:var(--calcite-color-brand);outline:2px solid transparent;outline-offset:2px;padding-inline:0.25rem}input[type=text]:focus~.search-icon{inset-inline-start:calc(1rem * -1);opacity:0}.clear-button{display:flex;cursor:pointer;align-items:center;border-width:0px;background-color:transparent;color:var(--calcite-color-text-2)}.clear-button:hover,.clear-button:focus{color:var(--calcite-color-text-1)}:host([hidden]){display:none}[hidden]{display:none}"},2450:(e,t,i)=>{i.d(t,{S:()=>o,a:()=>m,b:()=>p,c:()=>b,d:()=>L,f:()=>n,i:()=>w,r:()=>r});const n="object"==typeof global&&global&&global.Object===Object&&global;var a="object"==typeof self&&self&&self.Object===Object&&self;const r=n||a||Function("return this")();const o=r.Symbol;var s=Object.prototype,l=s.hasOwnProperty,c=s.toString,d=o?o.toStringTag:void 0;var u=Object.prototype.toString;var f="[object Null]",h="[object Undefined]",v=o?o.toStringTag:void 0;function p(e){return null==e?void 0===e?h:f:v&&v in Object(e)?function(e){var t=l.call(e,d),i=e[d];try{e[d]=void 0;var n=!0}catch(r){}var a=c.call(e);return n&&(t?e[d]=i:delete e[d]),a}(e):function(e){return u.call(e)}(e)}function b(e){return null!=e&&"object"==typeof e}var g="[object Symbol]";function m(e){return"symbol"==typeof e||b(e)&&p(e)==g}var y=/\s/;var x=/^\s+/;function k(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&y.test(e.charAt(t)););return t}(e)+1).replace(x,""):e}function w(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var D=NaN,j=/^[-+]0x[0-9a-f]+$/i,O=/^0b[01]+$/i,C=/^0o[0-7]+$/i,z=parseInt;function F(e){if("number"==typeof e)return e;if(m(e))return D;if(w(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=w(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=k(e);var i=O.test(e);return i||C.test(e)?z(e.slice(2),i?2:8):j.test(e)?D:+e}const H=function(){return r.Date.now()};var I="Expected a function",P=Math.max,T=Math.min;function L(e,t,i){var n,a,r,o,s,l,c=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError(I);function h(t){var i=n,r=a;return n=a=void 0,c=t,o=e.apply(r,i)}function v(e){var i=e-l;return void 0===l||i>=t||i<0||u&&e-c>=r}function p(){var e=H();if(v(e))return b(e);s=setTimeout(p,function(e){var i=t-(e-l);return u?T(i,r-(e-c)):i}(e))}function b(e){return s=void 0,f&&n?h(e):(n=a=void 0,o)}function g(){var e=H(),i=v(e);if(n=arguments,a=this,l=e,i){if(void 0===s)return function(e){return c=e,s=setTimeout(p,t),d?h(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(p,t),h(l)}return void 0===s&&(s=setTimeout(p,t)),o}return t=F(t)||0,w(i)&&(d=!!i.leading,r=(u="maxWait"in i)?P(F(i.maxWait)||0,t):r,f="trailing"in i?!!i.trailing:f),g.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=a=s=void 0},g.flush=function(){return void 0===s?o:b(H())},g}}}]);
//# sourceMappingURL=90490.b7983ead.chunk.js.map