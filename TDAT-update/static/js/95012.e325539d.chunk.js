/*! For license information please see 95012.e325539d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[95012],{95012:(t,e,i)=>{i.r(e),i.d(e,{CalciteIcon:()=>n,defineCustomElement:()=>c});var s=i(67294);const n=s.I,c=s.d},67294:(t,e,i)=>{i.d(e,{I:()=>b,d:()=>p});var s=i(95146),n=i(39879),c=i(6676),o=i(32811);const a="flip-rtl",r={},l={},h={s:16,m:24,l:32};function d(t){let{icon:e,scale:i}=t;const s=h[i],n=function(t){const e=!isNaN(Number(t.charAt(0))),i=t.split("-");if(i.length>0){const e=/[a-z]/i;t=i.map(((t,i)=>t.replace(e,(function(t,e){return 0===i&&0===e?t:t.toUpperCase()})))).join("")}return e?`i${t}`:t}(e),c="F"===n.charAt(n.length-1);return`${c?n.substring(0,n.length-1):n}${s}${c?"F":""}`}function u(t){return r[t]}const b=(0,s.w$)(class extends s.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.visible||this.waitUntilVisible((()=>{this.visible=!0,this.loadIconPathData()}))}disconnectedCallback(){this.intersectionObserver?.disconnect(),this.intersectionObserver=null}render(){const{el:t,flipRtl:e,pathData:i,scale:c,textLabel:o}=this,r=(0,n.a)(t),l=h[c],d=!!o,u=[].concat(i||"");return(0,s.h)(s.xr,{key:"724265acdc6fb528bf7b25d7ec445c73a63f4c8e","aria-hidden":(0,n.t)(!d),"aria-label":d?o:null,role:d?"img":null},(0,s.h)("svg",{key:"864ee2d80bebd282543ba5d94c57f84b48a6204d","aria-hidden":"true",class:{[a]:"rtl"===r&&e,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${l} ${l}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},u.map((t=>"string"===typeof t?(0,s.h)("path",{d:t}):(0,s.h)("path",{d:t.d,opacity:"opacity"in t?t.opacity:1})))))}async loadIconPathData(){const{icon:t,scale:e,visible:i}=this;if(!(0,o.i)()||!t||!i)return;const n={icon:t,scale:e},c=u(d(n))||await async function(t){const e=d(t),i=u(e);if(i)return i;l[e]||(l[e]=fetch((0,s.OX)(`./assets/icon/${e}.json`)).then((t=>t.json())).catch((()=>(console.error(`"${e}" is not a valid calcite-ui-icon name`),""))));const n=await l[e];return r[e]=n,n}(n);t===this.icon&&(this.pathData=c)}waitUntilVisible(t){this.intersectionObserver=(0,c.c)("intersection",(e=>{e.forEach((e=>{e.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):t()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return":host{display:inline-flex;color:var(--calcite-icon-color, var(--calcite-ui-icon-color, currentColor))}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]},void 0,{icon:["loadIconPathData"],scale:["loadIconPathData"]}]);function p(){if("undefined"===typeof customElements)return;["calcite-icon"].forEach((t=>{if("calcite-icon"===t)customElements.get(t)||customElements.define(t,b)}))}p()},6676:(t,e,i)=>{i.d(e,{c:()=>n});var s=i(32811);function n(t,e,i){if(!(0,s.i)())return;const n=function(t){class e extends window.MutationObserver{constructor(t){super(t),this.observedEntry=[],this.callback=t}observe(t,e){return this.observedEntry.push({target:t,options:e}),super.observe(t,e)}unobserve(t){const e=this.observedEntry.filter((e=>e.target!==t));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),e.forEach((t=>this.observe(t.target,t.options)))}}return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}(t);return new n(e,i)}}}]);
//# sourceMappingURL=95012.e325539d.chunk.js.map