/*! For license information please see 63033.6120fc1a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[63033],{63033:(e,t,c)=>{c.r(t),c.d(t,{calcite_accordion:()=>m,calcite_accordion_item:()=>S});var i=c(22737),n=c(68385),o=c(76904),a=c(28716),r=c(73364),l=c(9057),d=c(98563);c(57922);const s="accordion",h="accordion--transparent",m=class{constructor(e){(0,i.r)(this,e),this.calciteInternalAccordionChange=(0,i.c)(this,"calciteInternalAccordionChange",6),this.mutationObserver=(0,n.c)("mutation",(()=>this.updateAccordionItems())),this.appearance="solid",this.iconPosition="end",this.iconType="chevron",this.scale="m",this.selectionMode="multiple"}handlePropsChange(){this.updateAccordionItems()}connectedCallback(){this.mutationObserver?.observe(this.el,{childList:!0}),this.updateAccordionItems()}disconnectedCallback(){this.mutationObserver?.disconnect()}render(){const e="transparent"===this.appearance;return(0,i.h)("div",{key:"049a706314a7d7bc6336ce3586dc2d48384134fc",class:{[h]:e,[s]:!e}},(0,i.h)("slot",{key:"831dee904c4ff5258ac0194effe21ad5fa5d27ad"}))}updateActiveItemOnChange(e){this.calciteInternalAccordionChange.emit({requestedAccordionItem:e.detail.requestedAccordionItem}),e.stopPropagation()}updateAccordionItems(){this.el.querySelectorAll("calcite-accordion-item").forEach((e=>{e.iconPosition=this.iconPosition,e.iconType=this.iconType,e.scale=this.scale})),document.dispatchEvent(new CustomEvent("calciteInternalAccordionItemsSync"))}get el(){return(0,i.g)(this)}static get watchers(){return{iconPosition:["handlePropsChange"],iconType:["handlePropsChange"],scale:["handlePropsChange"],selectionMode:["handlePropsChange"]}}};m.style=":host{position:relative;display:block;max-inline-size:100%;line-height:1.5rem}.accordion{border-width:1px;border-block-end-width:0px;border-style:solid;border-color:var(--calcite-accordion-border-color, var(--calcite-color-border-2));background-color:var(--calcite-accordion-background-color, var(--calcite-color-foreground-1))}.accordion--transparent{--calcite-accordion-border-color:transparent;border-color:var(--calcite-color-transparent);background-color:var(--calcite-color-transparent)}:host([scale=s]){--calcite-internal-accordion-item-spacing-unit:0.25rem;--calcite-internal-accordion-icon-margin:0.5rem;--calcite-internal-accordion-item-padding:var(--calcite-internal-accordion-item-spacing-unit) 0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-internal-accordion-item-spacing-unit:0.5rem;--calcite-internal-accordion-icon-margin:0.75rem;--calcite-internal-accordion-item-padding:var(--calcite-internal-accordion-item-spacing-unit) 0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-internal-accordion-item-spacing-unit:0.75rem;--calcite-internal-accordion-icon-margin:1rem;--calcite-internal-accordion-item-padding:var(--calcite-internal-accordion-item-spacing-unit) 1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([hidden]){display:none}[hidden]{display:none}";const p="actions-start",v="actions-end",g="actions-end",u="actions-start",b="content",f="description",x="expand-icon",y="header",k="header-container",w="header-content",I="header-text",A="heading",C="icon",P="icon--end",E="icon--start",z="section",R="section-toggle",S=class{constructor(e){(0,i.r)(this,e),this.calciteInternalAccordionItemSelect=(0,i.c)(this,"calciteInternalAccordionItemSelect",6),this.calciteInternalAccordionItemClose=(0,i.c)(this,"calciteInternalAccordionItemClose",6),this.storeHeaderEl=e=>{this.headerEl=e},this.itemHeaderClickHandler=()=>this.emitRequestedItem(),this.expanded=!1,this.heading=void 0,this.description=void 0,this.iconStart=void 0,this.iconEnd=void 0,this.iconFlipRtl=void 0,this.iconPosition=void 0,this.iconType=void 0,this.accordionParent=void 0,this.scale=void 0}connectedCallback(){(0,o.c)(this)}componentWillLoad(){(0,d.s)(this)}componentDidLoad(){(0,d.a)(this)}disconnectedCallback(){(0,o.d)(this)}renderActionsStart(){const{el:e}=this;return(0,a.e)(e,p)?(0,i.h)("div",{class:u},(0,i.h)("slot",{name:p})):null}renderActionsEnd(){const{el:e}=this;return(0,a.e)(e,v)?(0,i.h)("div",{class:g},(0,i.h)("slot",{name:v})):null}render(){const{iconFlipRtl:e}=this,t=(0,a.g)(this.el),c=this.iconStart?(0,i.h)("calcite-icon",{class:{[C]:!0,[E]:!0},flipRtl:"both"===e||"start"===e,icon:this.iconStart,key:"icon-start",scale:(0,l.g)(this.scale)}):null,n=this.iconEnd?(0,i.h)("calcite-icon",{class:{[P]:!0,[C]:!0},flipRtl:"both"===e||"end"===e,icon:this.iconEnd,key:"icon-end",scale:(0,l.g)(this.scale)}):null,{description:o}=this;return(0,i.h)(i.H,{key:"73a74d61e41199c57868bd5375ba1b08f8e19dbc"},(0,i.h)("div",{key:"ce9e0a74ea1eb93b7e2f00e95e6a092dcf99726b",class:{[`icon-position--${this.iconPosition}`]:!0,[`icon-type--${this.iconType}`]:!0}},(0,i.h)("div",{key:"18af6a636b01a816363edf73bd05a486ac0cc2b2",class:{[y]:!0,[r.C.rtl]:"rtl"===t}},this.renderActionsStart(),(0,i.h)("div",{key:"8a82a3acec9576d7e936714d1bee0bd2a1cc4ab1","aria-controls":z,"aria-expanded":(0,a.t)(this.expanded),class:w,id:R,onClick:this.itemHeaderClickHandler,ref:this.storeHeaderEl,role:"button",tabindex:"0"},(0,i.h)("div",{key:"b9b223e8e0b0f60d9f6f9c5a9bda1458def7ae01",class:k},c,(0,i.h)("div",{key:"ccdba89b98942b7163d09a0f78175c374aba5875",class:I},(0,i.h)("span",{key:"c91bcaf36ba60ac2a8ef06e3356a15d1f3a7e78f",class:A},this.heading),o?(0,i.h)("span",{class:f},o):null),n),(0,i.h)("calcite-icon",{key:"aebf05069b1ceae376fb67074aad773c4f403c16",class:x,icon:"chevron"===this.iconType?"chevronDown":"caret"===this.iconType?"caretDown":this.expanded?"minus":"plus",scale:(0,l.g)(this.scale)})),this.renderActionsEnd()),(0,i.h)("section",{key:"7371b06f1ec99aab9351113663eda976540ae7b0","aria-labelledby":R,class:b,id:z},(0,i.h)("slot",{key:"69b851d2989876bece534e499a039e55eaabb1ec"}))))}keyDownHandler(e){if(e.target===this.el)switch(e.key){case" ":case"Enter":this.emitRequestedItem(),e.preventDefault()}}updateActiveItemOnChange(e){const[t]=e.composedPath(),c=(0,a.a)(this.el,"calcite-accordion");t===c&&(this.determineActiveItem(c.selectionMode,e.detail.requestedAccordionItem),e.stopPropagation())}accordionItemSyncHandler(e){const[t]=e.composedPath(),c=this.el;if(c.parentElement===t)return;const i=(0,a.a)(c,"calcite-accordion");t===i&&(this.iconPosition=i.iconPosition,this.iconType=i.iconType,this.scale=i.scale,e.stopPropagation())}async setFocus(){await(0,d.c)(this),this.headerEl.focus()}determineActiveItem(e,t){switch(e){case"multiple":this.el===t&&(this.expanded=!this.expanded);break;case"single":this.expanded=this.el===t&&!this.expanded;break;case"single-persist":this.expanded=this.el===t}}emitRequestedItem(){this.calciteInternalAccordionItemSelect.emit({requestedAccordionItem:this.el})}get el(){return(0,i.g)(this)}};S.style=".icon-position--end,.icon-position--start{--calcite-internal-accordion-item-icon-rotation:calc(90deg * -1);--calcite-internal-accordion-item-active-icon-rotation:0deg;--calcite-internal-accordion-item-icon-rotation-rtl:90deg;--calcite-internal-accordion-item-active-icon-rotation-rtl:0deg}:host{position:relative;display:flex;flex-direction:column;text-decoration-line:none;color:var(--calcite-accordion-item-text-color, var(--calcite-accordion-text-color, var(--calcite-color-text-3)));background-color:var(--calcite-accordion-item-background-color);border-width:0}:host .header{background-color:var(--calcite-accordion-item-header-background-color)}.icon-position--start{--calcite-internal-accordion-item-flex-direction:row-reverse;--calcite-internal-accordion-item-icon-spacing-start:0;--calcite-internal-accordion-item-icon-spacing-end:var(--calcite-internal-accordion-icon-margin)}.icon-position--end{--calcite-internal-accordion-item-flex-direction:row;--calcite-internal-accordion-item-icon-spacing-start:var(--calcite-internal-accordion-icon-margin);--calcite-internal-accordion-item-icon-spacing-end:0}.icon-position--end:not(.icon-type--plus-minus){--calcite-internal-accordion-item-icon-rotation:0deg;--calcite-internal-accordion-item-active-icon-rotation:180deg;--calcite-internal-accordion-item-icon-rotation-rtl:0deg;--calcite-internal-accordion-item-active-icon-rotation-rtl:calc(180deg * -1)}.content,.header{border-block-end-width:var(--calcite-border-width-sm);border-block-end-style:solid;border-color:var(--calcite-accordion-item-border-color, var(--calcite-accordion-border-color, var(--calcite-color-border-2)))}.header-content,.content{padding:var(--calcite-accordion-item-content-space, var(--calcite-internal-accordion-item-padding, var(--calcite-internal-accordion-item-spacing-unit, 0.5rem 0.75rem)))}.header{display:flex;align-items:stretch}.header *{display:inline-flex;align-items:center;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}.header-content{flex-grow:1;cursor:pointer;outline-color:transparent;flex-direction:var(--calcite-internal-accordion-item-flex-direction);color:var(--calcite-accordion-item-heading-text-color, var(--calcite-accordion-text-color, inherit))}.header-content:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.header-content:focus,.header-content:hover,.header-content:active{color:var(--calcite-accordion-item-heading-text-color, var(--calcite-accordion-text-color-hover, var(--calcite-color-text-2)))}.header-content:focus .heading,.header-content:hover .heading,.header-content:active .heading{color:var(--calcite-accordion-item-heading-text-color, var(--calcite-accordion-text-color-pressed, var(--calcite-color-text-1)))}.header-container{inline-size:100%}.header-text{margin-block:0px;flex-grow:1;flex-direction:column;padding-block:0px;text-align:initial;margin-inline-end:auto}.heading,.description{display:flex;inline-size:100%}.heading{font-weight:var(--calcite-font-weight-medium)}.actions-start,.actions-end{display:flex;align-items:center}.icon{display:flex;align-items:center;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:var(--calcite-internal-accordion-item-icon-spacing-start);margin-inline-start:var(--calcite-internal-accordion-item-icon-spacing-end)}.icon--start{color:var(--calcite-accordion-item-start-icon-color, var(--calcite-accordion-item-icon-color, currentColor));margin-inline-end:var(--calcite-internal-accordion-icon-margin)}.icon--end{color:var(--calcite-accordion-item-end-icon-color, var(--calcite-accordion-item-icon-color, currentColor));margin-inline-end:var(--calcite-internal-accordion-icon-margin);margin-inline-start:var(--calcite-internal-accordion-icon-margin)}.expand-icon{color:var(--calcite-accordion-item-expand-icon-color, var(--calcite-accordion-item-text-color, var(--calcite-accordion-text-color, var(--calcite-color-text-3))));margin-inline-start:var(--calcite-internal-accordion-item-icon-spacing-start);margin-inline-end:var(--calcite-internal-accordion-item-icon-spacing-end);transform:rotate(var(--calcite-internal-accordion-item-icon-rotation))}.calcite--rtl .expand-icon{transform:rotate(var(--calcite-internal-accordion-item-icon-rotation-rtl))}.description{margin-block-start:0.25rem}.content{display:none;padding-block-start:0px;text-align:initial}:host(:not(:focus):not(:hover):not([expanded])) .heading{color:var(--calcite-accordion-item-heading-text-color, var(--calcite-accordion-item-text-color-hover, var(--calcite-color-text-2)))}:host([expanded]){color:var(--calcite-accordion-item-text-color, var(--calcite-accordion-text-color, var(--calcite-accordion-text-color-pressed, var(--calcite-color-text-1))))}:host([expanded]) .header{border-block-end-color:transparent}:host([expanded]) .expand-icon{color:var(--calcite-accordion-item-expand-icon-color, var(--calcite-accordion-item-text-color, var(--calcite-accordion-text-color, var(--calcite-accordion-item-text-color-hover, var(--calcite-color-text-2)))));transform:rotate(var(--calcite-internal-accordion-item-active-icon-rotation))}:host([expanded]) .calcite--rtl .expand-icon{transform:rotate(var(--calcite-internal-accordion-item-active-icon-rotation-rtl))}:host([expanded]) .description{color:var(--calcite-accordion-item-text-color, var(--calcite-accordion-text-color, var(--calcite-accordion-item-text-color-hover, var(--calcite-color-text-2))))}:host([expanded]) .content{display:block}@media (forced-colors: active){:host([expanded]) .header{border-block-end:none}:host([expanded]) .heading{font-weight:bolder}.header-content:hover .heading,.header-content:focus .heading{text-decoration:underline}}:host([hidden]){display:none}[hidden]{display:none}"},9057:(e,t,c)=>{function i(e){return"l"===e?"m":"s"}async function n(e){await(function(e){return"function"===typeof e.componentOnReady}(e)?e.componentOnReady():new Promise((e=>requestAnimationFrame((()=>e())))))}c.d(t,{c:()=>n,g:()=>i})},76904:(e,t,c)=>{c.d(t,{c:()=>r,d:()=>l});var i=c(22737),n=c(68385);let o;const a={childList:!0};function r(e){o||(o=(0,n.c)("mutation",d)),o.observe(e.el,a)}function l(e){o.unobserve(e.el)}function d(e){e.forEach((e=>{let{target:t}=e;(0,i.f)(t)}))}},98563:(e,t,c)=>{c.d(t,{a:()=>l,b:()=>d,c:()=>s,s:()=>r});var i=c(22737),n=c(57922);const o=new WeakMap,a=new WeakMap;function r(e){a.set(e,new Promise((t=>o.set(e,t))))}function l(e){o.get(e)()}function d(e){return a.get(e)}async function s(e){if(await d(e),(0,n.i)())return(0,i.f)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},68385:(e,t,c)=>{c.d(t,{c:()=>n});var i=c(57922);function n(e,t,c){if(!(0,i.i)())return;const n=function(e){class t extends window.MutationObserver{constructor(e){super(e),this.observedEntry=[],this.callback=e}observe(e,t){return this.observedEntry.push({target:e,options:t}),super.observe(e,t)}unobserve(e){const t=this.observedEntry.filter((t=>t.target!==e));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),t.forEach((e=>this.observe(e.target,e.options)))}}return"intersection"===e?window.IntersectionObserver:"mutation"===e?t:window.ResizeObserver}(e);return new n(t,c)}}}]);
//# sourceMappingURL=63033.6120fc1a.chunk.js.map