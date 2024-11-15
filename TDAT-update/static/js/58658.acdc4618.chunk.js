/*! For license information please see 58658.acdc4618.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[58658],{29086:(t,e,o)=>{o.d(e,{E:()=>g,a:()=>c,g:()=>l,o:()=>d,q:()=>h,t:()=>p});var n=o(22737),i=o(28716),a=o(758),s=o(62146);const r=t=>t.reduce(((t,e)=>t+e),0)/t.length,l=t=>{const e=t.filter((t=>t.slot!==a.S.menuActions)),o=e?.length;return{actionWidth:o?r(e.map((t=>t.clientWidth||0))):0,actionHeight:o?r(e.map((t=>t.clientHeight||0))):0}},c=t=>{let{layout:e,actionCount:o,actionWidth:n,width:i,actionHeight:a,height:s,groupCount:r}=t;return Math.max(o-(t=>{let{width:e,actionWidth:o,layout:n,height:i,actionHeight:a,groupCount:s}=t;const r="horizontal"===n?e:i,l="horizontal"===n?o:a;return Math.floor((r-2*s)/l)})({width:i,actionWidth:n,layout:e,height:s,actionHeight:a,groupCount:r}),0)},h=t=>Array.from(t.querySelectorAll("calcite-action")).filter((t=>!t.closest("calcite-action-menu")||t.slot===s.S.trigger)),d=t=>{let{actionGroups:e,expanded:o,overflowCount:i}=t,s=i;e.reverse().forEach((t=>{let e=0;const i=h(t).reverse();i.forEach((t=>{t.slot===a.S.menuActions&&(t.removeAttribute("slot"),t.textEnabled=o)})),s>0&&i.some((t=>(i.filter((t=>!t.slot)).length>1&&i.length>2&&!t.closest("calcite-action-menu")&&(t.textEnabled=!0,t.setAttribute("slot",a.S.menuActions),e++,e>1&&s--),s<1))),(0,n.f)(t)}))},u="chevrons-left",f="chevrons-right";function p(t){let{el:e,expanded:o}=t;h(e).filter((t=>t.slot!==a.S.menuActions)).forEach((t=>t.textEnabled=o)),e.querySelectorAll("calcite-action-group, calcite-action-menu").forEach((t=>t.expanded=o))}const g=t=>{let{expanded:e,expandText:o,collapseText:a,expandLabel:s,collapseLabel:r,toggle:l,el:c,position:h,tooltip:d,ref:p,scale:g}=t;const v="rtl"===(0,i.g)(c),b=e?a:o,m=e?r:s,y=[u,f];v&&y.reverse();const x="end"===function(t,e){return t||e.closest("calcite-shell-panel")?.position||"start"}(h,c),w=x?y[1]:y[0],A=x?y[0]:y[1],E=(0,n.h)("calcite-action",{icon:e?w:A,id:"expand-toggle",label:m,onClick:l,ref:t=>(t=>{let{tooltip:e,referenceElement:o,expanded:n,ref:i}=t;return e&&(e.referenceElement=!n&&o?o:null),i&&i(o),o})({tooltip:d,referenceElement:t,expanded:e,ref:p}),scale:g,text:b,textEnabled:e,title:e||d?null:b});return E}},58658:(t,e,o)=>{o.r(e),o.d(e,{calcite_action_bar:()=>b});var n=o(22737),i=o(76904),a=o(28716),s=o(98563),r=o(99398),l=o(68385),c=o(67928),h=o(29086),d=o(73364),u=o(2450);o(57922),o(758),o(62146);const f="action-group--end",p="actions-end",g="bottom-actions",v="expand-tooltip",b=class{constructor(t){(0,n.r)(this,t),this.calciteActionBarToggle=(0,n.c)(this,"calciteActionBarToggle",6),this.mutationObserver=(0,l.c)("mutation",(()=>{const{el:t,expanded:e}=this;(0,h.t)({el:t,expanded:e}),this.overflowActions()})),this.resizeObserver=(0,l.c)("resize",(t=>this.resizeHandlerEntries(t))),this.actionMenuOpenHandler=t=>{if(t.target.menuOpen){const e=t.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach((t=>{e.includes(t)||(t.menuOpen=!1)}))}},this.resizeHandlerEntries=t=>{t.forEach(this.resizeHandler)},this.resizeHandler=t=>{const{width:e,height:o}=t.contentRect;this.resize({width:e,height:o})},this.resize=(0,u.d)((t=>{let{width:e,height:o}=t;const{el:n,expanded:i,expandDisabled:a,layout:s,overflowActionsDisabled:r}=this;if(r||"vertical"===s&&!o||"horizontal"===s&&!e)return;const l=(0,h.q)(n),c=a?l.length:l.length+1,d=Array.from(n.querySelectorAll("calcite-action-group"));this.setGroupLayout(d);const u=this.hasActionsEnd||this.hasBottomActions||!a?d.length+1:d.length,{actionHeight:f,actionWidth:p}=(0,h.g)(l),g=(0,h.a)({layout:s,actionCount:c,actionHeight:f,actionWidth:p,height:o,width:e,groupCount:u});(0,h.o)({actionGroups:d,expanded:i,overflowCount:g})}),d.D.resize),this.toggleExpand=()=>{this.expanded=!this.expanded,this.calciteActionBarToggle.emit()},this.handleDefaultSlotChange=t=>{const e=(0,a.s)(t).filter((t=>t.matches("calcite-action-group")));this.setGroupLayout(e)},this.handleActionsEndSlotChange=t=>{this.hasActionsEnd=(0,a.b)(t)},this.handleBottomActionsSlotChange=t=>{this.hasBottomActions=(0,a.b)(t)},this.handleTooltipSlotChange=t=>{const e=(0,a.s)(t).filter((t=>t?.matches("calcite-tooltip")));this.expandTooltip=e[0]},this.actionsEndGroupLabel=void 0,this.expandDisabled=!1,this.expanded=!1,this.layout="vertical",this.overflowActionsDisabled=!1,this.overlayPositioning="absolute",this.position=void 0,this.scale=void 0,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.hasActionsEnd=!1,this.hasBottomActions=!1,this.expandTooltip=void 0,this.defaultMessages=void 0}expandHandler(){this.overflowActions()}expandedHandler(){const{el:t,expanded:e}=this;(0,h.t)({el:t,expanded:e}),this.overflowActions()}layoutHandler(){this.updateGroups()}overflowDisabledHandler(t){t?this.resizeObserver?.disconnect():(this.resizeObserver?.observe(this.el),this.overflowActions())}onMessagesChange(){}effectiveLocaleChange(){(0,c.u)(this,this.effectiveLocale)}componentDidLoad(){const{el:t,expanded:e}=this;(0,s.a)(this),(0,h.t)({el:t,expanded:e}),this.overflowActions()}connectedCallback(){const{el:t,expanded:e}=this;(0,r.c)(this),(0,c.c)(this),(0,h.t)({el:t,expanded:e}),this.mutationObserver?.observe(t,{childList:!0,subtree:!0}),this.overflowActionsDisabled||this.resizeObserver?.observe(t),this.overflowActions(),(0,i.c)(this)}async componentWillLoad(){(0,s.s)(this),await(0,c.s)(this)}disconnectedCallback(){this.mutationObserver?.disconnect(),this.resizeObserver?.disconnect(),(0,i.d)(this),(0,r.d)(this),(0,c.d)(this)}async overflowActions(){this.resize({width:this.el.clientWidth,height:this.el.clientHeight})}async setFocus(){await(0,s.c)(this),(0,a.f)(this.el)}updateGroups(){this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")))}setGroupLayout(t){t.forEach((t=>t.layout=this.layout))}renderBottomActionGroup(){const{expanded:t,expandDisabled:e,el:o,position:i,toggleExpand:a,scale:s,layout:r,messages:l,actionsEndGroupLabel:c,overlayPositioning:d}=this,u=e?null:(0,n.h)(h.E,{collapseLabel:l.collapseLabel,collapseText:l.collapse,el:o,expandLabel:l.expandLabel,expandText:l.expand,expanded:t,position:i,scale:s,toggle:a,tooltip:this.expandTooltip});return(0,n.h)("calcite-action-group",{class:f,hidden:this.expandDisabled&&!(this.hasActionsEnd||this.hasBottomActions),label:c,layout:r,overlayPositioning:d,scale:s},(0,n.h)("slot",{name:p,onSlotchange:this.handleActionsEndSlotChange}),(0,n.h)("slot",{name:g,onSlotchange:this.handleBottomActionsSlotChange}),(0,n.h)("slot",{name:v,onSlotchange:this.handleTooltipSlotChange}),u)}render(){return(0,n.h)(n.H,{key:"ff6e365531a0ed2032864bb0777910c3932e9c6b",onCalciteActionMenuOpen:this.actionMenuOpenHandler},(0,n.h)("slot",{key:"f12b2f455752a62ee32b65224bed385940135a49",onSlotchange:this.handleDefaultSlotChange}),this.renderBottomActionGroup())}static get assetsDirs(){return["assets"]}get el(){return(0,n.g)(this)}static get watchers(){return{expandDisabled:["expandHandler"],expanded:["expandedHandler"],layout:["layoutHandler"],overflowActionsDisabled:["overflowDisabledHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};b.style=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{pointer-events:auto;display:inline-flex;align-self:stretch;gap:var(--calcite-action-bar-items-space, 0)}:host([layout=vertical]){flex-direction:column}:host([layout=vertical]):host([overflow-actions-disabled]){overflow-y:auto}:host([layout=vertical]):host([expanded]){max-inline-size:var(--calcite-action-bar-expanded-max-width, auto)}:host([layout=vertical]) .action-group--end{margin-block-start:auto}:host([layout=vertical]) ::slotted(calcite-action-group:not(:last-of-type)){border-block-end-width:var(--calcite-border-width-sm)}:host([layout=horizontal]){flex-direction:row}:host([layout=horizontal]):host([overflow-actions-disabled]){overflow-x:auto}:host([layout=horizontal]) .action-group--end{margin-inline-start:auto}:host([layout=horizontal]) ::slotted(calcite-action-group:not(:last-of-type)){border-inline-end-width:var(--calcite-border-width-sm)}.action-group--end{justify-content:flex-end}:host([hidden]){display:none}[hidden]{display:none}"},76904:(t,e,o)=>{o.d(e,{c:()=>r,d:()=>l});var n=o(22737),i=o(68385);let a;const s={childList:!0};function r(t){a||(a=(0,i.c)("mutation",c)),a.observe(t.el,s)}function l(t){a.unobserve(t.el)}function c(t){t.forEach((t=>{let{target:e}=t;(0,n.f)(e)}))}},2450:(t,e,o)=>{o.d(e,{S:()=>s,a:()=>m,b:()=>g,c:()=>v,d:()=>M,f:()=>n,i:()=>A,r:()=>a});const n="object"==typeof global&&global&&global.Object===Object&&global;var i="object"==typeof self&&self&&self.Object===Object&&self;const a=n||i||Function("return this")();const s=a.Symbol;var r=Object.prototype,l=r.hasOwnProperty,c=r.toString,h=s?s.toStringTag:void 0;var d=Object.prototype.toString;var u="[object Null]",f="[object Undefined]",p=s?s.toStringTag:void 0;function g(t){return null==t?void 0===t?f:u:p&&p in Object(t)?function(t){var e=l.call(t,h),o=t[h];try{t[h]=void 0;var n=!0}catch(a){}var i=c.call(t);return n&&(e?t[h]=o:delete t[h]),i}(t):function(t){return d.call(t)}(t)}function v(t){return null!=t&&"object"==typeof t}var b="[object Symbol]";function m(t){return"symbol"==typeof t||v(t)&&g(t)==b}var y=/\s/;var x=/^\s+/;function w(t){return t?t.slice(0,function(t){for(var e=t.length;e--&&y.test(t.charAt(e)););return e}(t)+1).replace(x,""):t}function A(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var E=NaN,C=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,z=/^0o[0-7]+$/i,O=parseInt;function H(t){if("number"==typeof t)return t;if(m(t))return E;if(A(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=A(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=w(t);var o=S.test(t);return o||z.test(t)?O(t.slice(2),o?2:8):C.test(t)?E:+t}const L=function(){return a.Date.now()};var T="Expected a function",j=Math.max,D=Math.min;function M(t,e,o){var n,i,a,s,r,l,c=0,h=!1,d=!1,u=!0;if("function"!=typeof t)throw new TypeError(T);function f(e){var o=n,a=i;return n=i=void 0,c=e,s=t.apply(a,o)}function p(t){var o=t-l;return void 0===l||o>=e||o<0||d&&t-c>=a}function g(){var t=L();if(p(t))return v(t);r=setTimeout(g,function(t){var o=e-(t-l);return d?D(o,a-(t-c)):o}(t))}function v(t){return r=void 0,u&&n?f(t):(n=i=void 0,s)}function b(){var t=L(),o=p(t);if(n=arguments,i=this,l=t,o){if(void 0===r)return function(t){return c=t,r=setTimeout(g,e),h?f(t):s}(l);if(d)return clearTimeout(r),r=setTimeout(g,e),f(l)}return void 0===r&&(r=setTimeout(g,e)),s}return e=H(e)||0,A(o)&&(h=!!o.leading,a=(d="maxWait"in o)?j(H(o.maxWait)||0,e):a,u="trailing"in o?!!o.trailing:u),b.cancel=function(){void 0!==r&&clearTimeout(r),c=0,n=l=i=r=void 0},b.flush=function(){return void 0===r?s:v(L())},b}},98563:(t,e,o)=>{o.d(e,{a:()=>l,b:()=>c,c:()=>h,s:()=>r});var n=o(22737),i=o(57922);const a=new WeakMap,s=new WeakMap;function r(t){s.set(t,new Promise((e=>a.set(t,e))))}function l(t){a.get(t)()}function c(t){return s.get(t)}async function h(t){if(await c(t),(0,i.i)())return(0,n.f)(t),new Promise((t=>requestAnimationFrame((()=>t()))))}},758:(t,e,o)=>{o.d(e,{C:()=>a,I:()=>i,S:()=>n});const n={menuActions:"menu-actions",menuTooltip:"menu-tooltip"},i={menu:"ellipsis"},a={container:"container"}},62146:(t,e,o)=>{o.d(e,{C:()=>n,I:()=>a,S:()=>i,a:()=>s});const n={menu:"menu",defaultTrigger:"default-trigger"},i={tooltip:"tooltip",trigger:"trigger"},a={menu:"ellipsis"},s="data-active"},67928:(t,e,o)=>{o.d(e,{c:()=>f,d:()=>p,s:()=>h,u:()=>u});var n=o(22737),i=o(99398),a=o(57922);const s={};function r(){throw new Error("could not fetch component message bundle")}function l(t){t.messages={...t.defaultMessages,...t.messageOverrides}}function c(){}async function h(t){t.defaultMessages=await d(t,t.effectiveLocale),l(t)}async function d(t,e){if(!(0,a.i)())return{};const{el:o}=t,l=o.tagName.toLowerCase().replace("calcite-","");return async function(t,e){const o=`${e}_${t}`;return s[o]||(s[o]=fetch((0,n.a)(`./assets/${e}/t9n/messages_${t}.json`)).then((t=>(t.ok||r(),t.json()))).catch((()=>r()))),s[o]}((0,i.g)(e,"t9n"),l)}async function u(t,e){t.defaultMessages=await d(t,e),l(t)}function f(t){t.onMessagesChange=g}function p(t){t.onMessagesChange=c}function g(){l(this)}}}]);
//# sourceMappingURL=58658.acdc4618.chunk.js.map