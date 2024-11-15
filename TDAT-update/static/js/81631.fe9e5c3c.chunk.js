/*! For license information please see 81631.fe9e5c3c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[81631],{81631:(e,t,s)=>{s.r(t),s.d(t,{CalcitePagination:()=>E,defineCustomElement:()=>M});var i=s(95146),a=s(76527),n=s(62785),o=s(76988),l=s(6676);const r={width:{large:c("1440px"),medium:c("1152px"),small:c("768px"),xsmall:c("476px"),xxsmall:c("320px")}};function c(e){return parseInt(e)}var h=s(80416),d=s(67294);const m="list",g="list-item",p="page",u="selected",f="chevron",v="disabled",b="ellipsis",x="chevron-right",I="chevron-left",k="chevron-start",y="chevron-end",S=11,z=9,C=7,w=5,P=1,L=(0,i.w$)(class extends i.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePaginationChange=(0,i.lh)(this,"calcitePaginationChange",6),this.resizeObserver=(0,l.c)("resize",(e=>e.forEach(this.resizeHandler))),this.resizeHandler=e=>{let{contentRect:{width:t}}=e;return this.setMaxItemsToBreakpoint(t)},this.firstClicked=()=>{this.startItem=1,this.emitUpdate()},this.lastClicked=()=>{this.startItem=this.lastStartItem,this.emitUpdate()},this.previousClicked=async()=>{await this.previousPage(),this.emitUpdate()},this.nextClicked=async()=>{await this.nextPage(),this.emitUpdate()},this.handlePageClick=e=>{const t=e.target;this.startItem=parseInt(t.value,10),this.emitUpdate()},this.groupSeparator=!1,this.messages=void 0,this.messageOverrides=void 0,this.numberingSystem=void 0,this.pageSize=20,this.scale="m",this.startItem=1,this.totalItems=0,this.defaultMessages=void 0,this.effectiveLocale="",this.maxItems=P,this.totalPages=void 0,this.lastStartItem=void 0,this.isXXSmall=void 0}onMessagesChange(){}handleTotalPages(){this.pageSize<1&&(this.pageSize=1),this.totalPages=this.totalItems/this.pageSize}effectiveLocaleChange(){(0,o.u)(this,this.effectiveLocale),n.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator}}handleLastStartItemChange(){const{totalItems:e,pageSize:t,totalPages:s}=this;this.lastStartItem=1+(e%t===0?e-t:Math.floor(s)*t)}handleIsXXSmall(){this.isXXSmall=this.maxItems===P}connectedCallback(){(0,n.c)(this),(0,o.c)(this),this.resizeObserver?.observe(this.el)}async componentWillLoad(){await(0,o.s)(this),(0,a.s)(this),this.handleTotalPages(),this.handleLastStartItemChange(),this.handleIsXXSmall()}componentDidLoad(){(0,a.a)(this),this.setMaxItemsToBreakpoint(this.el.clientWidth)}disconnectedCallback(){(0,n.d)(this),(0,o.d)(this),this.resizeObserver?.disconnect()}async setFocus(){await(0,a.c)(this),this.el.focus()}async nextPage(){this.startItem=Math.min(this.lastStartItem,this.startItem+this.pageSize)}async previousPage(){this.startItem=Math.max(1,this.startItem-this.pageSize)}async goTo(e){switch(e){case"start":this.startItem=1;break;case"end":this.startItem=this.lastStartItem;break;default:e>=Math.ceil(this.totalPages)?this.startItem=this.lastStartItem:this.startItem=e<=0?1:(e-1)*this.pageSize+1}}setMaxItemsToBreakpoint(e){r&&e&&(e>=r.width.medium?this.maxItems=S:e>=r.width.small?this.maxItems=z:e>=r.width.xsmall?this.maxItems=C:e>=r.width.xxsmall?this.maxItems=w:this.maxItems=P)}showStartEllipsis(){return this.totalPages>this.maxItems&&Math.floor(this.startItem/this.pageSize)>this.maxItems-2-2}showEndEllipsis(){return this.totalPages>this.maxItems&&(this.totalItems-this.startItem)/this.pageSize>this.maxItems-2-1}emitUpdate(){this.calcitePaginationChange.emit()}renderEllipsis(e){return(0,i.h)("span",{class:b,"data-test-ellipsis":e,key:e},"\u2026")}renderItems(){const{totalItems:e,pageSize:t,startItem:s,maxItems:i,totalPages:a,lastStartItem:n,isXXSmall:o}=this,l=[];if(o)return l.push(this.renderPage(s)),l;const r=e>t,c=this.showStartEllipsis(),h=this.showEndEllipsis();r&&l.push(this.renderPage(1)),c&&l.push(this.renderEllipsis("start"));const d=i-2-(h?1:0)-(c?1:0);let m,g;a-1<=d?(g=1+t,m=n-t):s/t<d?(g=1+t,m=1+d*t):s+d*t>=e?(g=n-d*t,m=n-t):(g=s-t*((d-1)/2),m=s+t*((d-1)/2));for(let p=0;p<d&&g<=m;p++)l.push(this.renderPage(g)),g+=t;return h&&l.push(this.renderEllipsis("end")),l.push(this.renderPage(n)),l}renderPage(e){const{pageSize:t}=this,s=Math.floor(e/t)+(1===t?0:1);n.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};const a=n.n.localize(s.toString()),o=e===this.startItem;return(0,i.h)("li",{class:g},(0,i.h)("button",{"aria-current":o?"page":"false",class:{[p]:!0,[u]:o},onClick:this.handlePageClick,value:e},a))}renderPreviousChevron(){const{pageSize:e,startItem:t,messages:s}=this,a=1===e?t<=e:t<e;return(0,i.h)("button",{"aria-label":s.previous,class:{[f]:!0,[v]:a},"data-test-chevron":"previous",disabled:a,key:"previous",onClick:this.previousClicked},(0,i.h)("calcite-icon",{flipRtl:!0,icon:I,scale:(0,h.g)(this.scale)}))}renderNextChevron(){const{totalItems:e,pageSize:t,startItem:s,messages:a}=this,n=s+t>e;return(0,i.h)("button",{"aria-label":a.next,class:{[f]:!0,[v]:n},"data-test-chevron":"next",disabled:n,key:"next-button",onClick:this.nextClicked},(0,i.h)("calcite-icon",{flipRtl:!0,icon:x,scale:(0,h.g)(this.scale)}))}renderFirstChevron(){const{messages:e,startItem:t,isXXSmall:s}=this,a=1===t;return s?(0,i.h)("button",{"aria-label":e.first,class:{[f]:!0,[v]:a},disabled:a,key:"first-button",onClick:this.firstClicked},(0,i.h)("calcite-icon",{flipRtl:!0,icon:k,scale:(0,h.g)(this.scale)})):null}renderLastChevron(){const{messages:e,startItem:t,isXXSmall:s,lastStartItem:a}=this,n=t===a;return s?(0,i.h)("button",{"aria-label":e.last,class:{[f]:!0,[v]:n},disabled:n,key:"last-button",onClick:this.lastClicked},(0,i.h)("calcite-icon",{flipRtl:!0,icon:y,scale:(0,h.g)(this.scale)})):null}render(){return(0,i.h)("ul",{key:"bdbae7054c4304e91f36809a1131a72551a49679",class:m},(0,i.h)("li",{key:"14844fcc6ece08896432cfa31c85f84a9de8d992",class:g},this.renderFirstChevron()),(0,i.h)("li",{key:"3146daaad99dd8e05637788ea6bfe0cc89b32ac7",class:g},this.renderPreviousChevron()),this.renderItems(),(0,i.h)("li",{key:"6adbec5c7e7e11aec1937a4d188066f1c999d20c",class:g},this.renderNextChevron()),(0,i.h)("li",{key:"3574dbf73b6cbbc9048c18a93d2990a649040a41",class:g},this.renderLastChevron()))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],totalItems:["handleTotalPages","handleLastStartItemChange"],pageSize:["handleTotalPages","handleLastStartItemChange"],effectiveLocale:["effectiveLocaleChange"],totalPages:["handleLastStartItemChange"],maxItems:["handleIsXXSmall"]}}static get style(){return":host{display:flex;writing-mode:horizontal-tb}.list{margin:0px;display:flex;list-style-type:none;padding:0px}.list-item{margin:0px;display:flex;padding:0px}:host([scale=s]) .chevron,:host([scale=s]) .page,:host([scale=s]) .ellipsis{block-size:1.5rem;padding-inline:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;min-inline-size:1.5rem}:host([scale=m]) .chevron,:host([scale=m]) .page,:host([scale=m]) .ellipsis{block-size:2rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;min-inline-size:2rem}:host([scale=l]) .chevron,:host([scale=l]) .page,:host([scale=l]) .ellipsis{block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-inline-size:2.75rem}:host([scale=l]) .chevron{padding-inline:0.625rem}:host([scale=l]) .page,:host([scale=l]) .ellipsis{padding-inline:0.75rem}:host button{outline-color:transparent}:host button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.chevron,.page,.ellipsis{margin:0px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;border-style:none;--tw-border-opacity:0;background-color:transparent;padding:0px;vertical-align:baseline;font-family:inherit;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-color-text-3)}.chevron,.page{cursor:pointer;border-block:2px solid transparent}.chevron:hover,.page:hover{color:var(--calcite-color-text-1);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.page:hover{border-block-end-color:var(--calcite-color-border-2)}.page.selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);border-block-end-color:var(--calcite-color-brand)}.chevron:hover{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-brand)}.chevron:active{background-color:var(--calcite-color-foreground-3)}.chevron.disabled{pointer-events:none;background-color:transparent}.chevron.disabled>calcite-icon{opacity:var(--calcite-opacity-disabled)}:host([hidden]){display:none}[hidden]{display:none}"}},[17,"calcite-pagination",{groupSeparator:[516,"group-separator"],messages:[1040],messageOverrides:[1040],numberingSystem:[1,"numbering-system"],pageSize:[1538,"page-size"],scale:[513],startItem:[1538,"start-item"],totalItems:[514,"total-items"],defaultMessages:[32],effectiveLocale:[32],maxItems:[32],totalPages:[32],lastStartItem:[32],isXXSmall:[32],setFocus:[64],nextPage:[64],previousPage:[64],goTo:[64]},void 0,{messageOverrides:["onMessagesChange"],totalItems:["handleTotalPages","handleLastStartItemChange"],pageSize:["handleTotalPages","handleLastStartItemChange"],effectiveLocale:["effectiveLocaleChange"],totalPages:["handleLastStartItemChange"],maxItems:["handleIsXXSmall"]}]);function X(){if("undefined"===typeof customElements)return;["calcite-pagination","calcite-icon"].forEach((e=>{switch(e){case"calcite-pagination":customElements.get(e)||customElements.define(e,L);break;case"calcite-icon":customElements.get(e)||(0,d.d)()}}))}X();const E=L,M=X},80416:(e,t,s)=>{function i(e){return"l"===e?"m":"s"}async function a(e){await(function(e){return"function"===typeof e.componentOnReady}(e)?e.componentOnReady():new Promise((e=>requestAnimationFrame((()=>e())))))}s.d(t,{c:()=>a,g:()=>i})},67294:(e,t,s)=>{s.d(t,{I:()=>g,d:()=>p});var i=s(95146),a=s(39879),n=s(6676),o=s(32811);const l="flip-rtl",r={},c={},h={s:16,m:24,l:32};function d(e){let{icon:t,scale:s}=e;const i=h[s],a=function(e){const t=!isNaN(Number(e.charAt(0))),s=e.split("-");if(s.length>0){const t=/[a-z]/i;e=s.map(((e,s)=>e.replace(t,(function(e,t){return 0===s&&0===t?e:e.toUpperCase()})))).join("")}return t?`i${e}`:e}(t),n="F"===a.charAt(a.length-1);return`${n?a.substring(0,a.length-1):a}${i}${n?"F":""}`}function m(e){return r[e]}const g=(0,i.w$)(class extends i.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.visible||this.waitUntilVisible((()=>{this.visible=!0,this.loadIconPathData()}))}disconnectedCallback(){this.intersectionObserver?.disconnect(),this.intersectionObserver=null}render(){const{el:e,flipRtl:t,pathData:s,scale:n,textLabel:o}=this,r=(0,a.a)(e),c=h[n],d=!!o,m=[].concat(s||"");return(0,i.h)(i.xr,{key:"724265acdc6fb528bf7b25d7ec445c73a63f4c8e","aria-hidden":(0,a.t)(!d),"aria-label":d?o:null,role:d?"img":null},(0,i.h)("svg",{key:"864ee2d80bebd282543ba5d94c57f84b48a6204d","aria-hidden":"true",class:{[l]:"rtl"===r&&t,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${c} ${c}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},m.map((e=>"string"===typeof e?(0,i.h)("path",{d:e}):(0,i.h)("path",{d:e.d,opacity:"opacity"in e?e.opacity:1})))))}async loadIconPathData(){const{icon:e,scale:t,visible:s}=this;if(!(0,o.i)()||!e||!s)return;const a={icon:e,scale:t},n=m(d(a))||await async function(e){const t=d(e),s=m(t);if(s)return s;c[t]||(c[t]=fetch((0,i.OX)(`./assets/icon/${t}.json`)).then((e=>e.json())).catch((()=>(console.error(`"${t}" is not a valid calcite-ui-icon name`),""))));const a=await c[t];return r[t]=a,a}(a);e===this.icon&&(this.pathData=n)}waitUntilVisible(e){this.intersectionObserver=(0,n.c)("intersection",(t=>{t.forEach((t=>{t.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,e())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):e()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return":host{display:inline-flex;color:var(--calcite-icon-color, var(--calcite-ui-icon-color, currentColor))}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]},void 0,{icon:["loadIconPathData"],scale:["loadIconPathData"]}]);function p(){if("undefined"===typeof customElements)return;["calcite-icon"].forEach((e=>{if("calcite-icon"===e)customElements.get(e)||customElements.define(e,g)}))}p()},76527:(e,t,s)=>{s.d(t,{a:()=>r,c:()=>c,s:()=>l});var i=s(95146),a=s(32811);const n=new WeakMap,o=new WeakMap;function l(e){o.set(e,new Promise((t=>n.set(e,t))))}function r(e){n.get(e)()}async function c(e){if(await function(e){return o.get(e)}(e),(0,a.i)())return(0,i.$x)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},76988:(e,t,s)=>{s.d(t,{c:()=>g,d:()=>p,s:()=>h,u:()=>m});var i=s(95146),a=s(62785),n=s(32811);const o={};function l(){throw new Error("could not fetch component message bundle")}function r(e){e.messages={...e.defaultMessages,...e.messageOverrides}}function c(){}async function h(e){e.defaultMessages=await d(e,e.effectiveLocale),r(e)}async function d(e,t){if(!(0,n.i)())return{};const{el:s}=e,r=s.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const s=`${t}_${e}`;return o[s]||(o[s]=fetch((0,i.OX)(`./assets/${t}/t9n/messages_${e}.json`)).then((e=>(e.ok||l(),e.json()))).catch((()=>l()))),o[s]}((0,a.g)(t,"t9n"),r)}async function m(e,t){e.defaultMessages=await d(e,t),r(e)}function g(e){e.onMessagesChange=u}function p(e){e.onMessagesChange=c}function u(){r(this)}}}]);
//# sourceMappingURL=81631.fe9e5c3c.chunk.js.map