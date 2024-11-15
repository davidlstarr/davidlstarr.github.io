/*! For license information please see 30972.ca5d0f4a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[30972],{30972:(e,t,n)=>{n.r(t),n.d(t,{calcite_tile:()=>I});var i=n(22737),o=n(76055),c=n(28716),a=n(98563);n(73364),n(57922);const l="container",s="content-container",r="content-container--has-content",d="content-container--has-only-content-top-and-bottom",h="text-content-container",v="description",p="heading",b="icon",m="interactive",u="large-visual-deprecated",g="row",f="selected",x="selection-icon",k="text-content",w="check-square-f",z="circle-f",y="square",E="circle",C="content-bottom",S="content-end",T="content-start",A="content-top",I=class{constructor(e){(0,i.r)(this,e),this.calciteInternalTileKeyEvent=(0,i.c)(this,"calciteInternalTileKeyEvent",6),this.calciteTileSelect=(0,i.c)(this,"calciteTileSelect",7),this.clickHandler=()=>{this.interactive&&(this.setFocus(),this.handleSelectEvent())},this.handleSelectEvent=()=>{this.disabled||!this.interactive||"single-persist"===this.selectionMode&&!0===this.selected||this.calciteTileSelect.emit()},this.handleSlotChange=e=>{this[`has${e.target.dataset.name}`]=(0,c.b)(e)},this.setContainerEl=e=>{this.containerEl=e},this.active=!1,this.alignment="start",this.description=void 0,this.disabled=!1,this.embed=!1,this.heading=void 0,this.href=void 0,this.icon=void 0,this.iconFlipRtl=!1,this.interactive=!1,this.label=void 0,this.layout="horizontal",this.scale="m",this.selected=!1,this.selectionAppearance="icon",this.selectionMode="none",this.hasContentBottom=!1,this.hasContentEnd=!1,this.hasContentStart=!1,this.hasContentTop=!1}async setFocus(){await(0,a.c)(this),!this.disabled&&this.interactive&&this.containerEl?.focus()}componentDidLoad(){(0,a.a)(this)}componentDidRender(){(0,o.u)(this)}async componentWillLoad(){(0,a.s)(this)}keyDownHandler(e){if(e.target===this.el)switch(e.key){case" ":case"Enter":this.handleSelectEvent(),e.preventDefault();break;case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"Home":case"End":this.calciteInternalTileKeyEvent.emit(e),e.preventDefault()}}renderSelectionIcon(){const{selected:e,selectionAppearance:t,selectionMode:n}=this;if("icon"===t&&"none"!==n)return(0,i.h)("calcite-icon",{class:x,icon:e?"multiple"===n?w:z:"multiple"===n?y:E,scale:"s"})}renderTile(){const{description:e,disabled:t,hasContentBottom:n,hasContentEnd:o,hasContentStart:a,hasContentTop:x,heading:w,icon:z,iconFlipRtl:y,interactive:E,selectionMode:I}=this,D=w&&z&&!e,L=Boolean(this.href)||!E,M="multiple"===I&&E?"checkbox":"none"!==I&&E?"radio":E?"button":void 0,F=!!(e||o||a||w||z),H=!F&&x&&n;return(0,i.h)("div",{"aria-checked":"none"!==I&&E?(0,c.t)(this.selected):void 0,"aria-disabled":L?(0,c.t)(t):void 0,"aria-label":M&&this.label,class:{[l]:!0,[m]:E,[u]:D,[g]:!0,[f]:this.selected},onClick:this.clickHandler,ref:this.setContainerEl,role:M,tabIndex:L?void 0:0},this.renderSelectionIcon(),(0,i.h)("div",{class:{[s]:!0,[r]:F,[d]:H}},(0,i.h)("slot",{"data-name":"ContentTop",name:A,onSlotchange:this.handleSlotChange}),z&&(0,i.h)("calcite-icon",{class:b,flipRtl:y,icon:z,scale:"l"}),(0,i.h)("div",{class:{[h]:!0,[g]:!0}},(0,i.h)("slot",{"data-name":"ContentStart",name:T,onSlotchange:this.handleSlotChange}),(0,i.h)("div",{class:k},w&&(0,i.h)("div",{class:p},w),e&&(0,i.h)("div",{class:v},e)),(0,i.h)("slot",{"data-name":"ContentEnd",name:S,onSlotchange:this.handleSlotChange})),(0,i.h)("slot",{"data-name":"ContentBottom",name:C,onSlotchange:this.handleSlotChange})))}render(){const{disabled:e}=this;return(0,i.h)(o.I,{key:"1d62f354d4a18837e56dd446efc63dde66f977bf",disabled:e},this.href?(0,i.h)("calcite-link",{disabled:e,href:this.href},this.renderTile()):this.renderTile())}get el(){return(0,i.g)(this)}};I.style=':host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{--calcite-tile-background-color:var(--calcite-color-foreground-1);--calcite-tile-border-color:var(--calcite-color-border-2);--calcite-tile-description-text-color:var(--calcite-color-text-3);--calcite-tile-heading-text-color:var(--calcite-color-text-2);--calcite-icon-color:var(--calcite-color-text-3);box-sizing:border-box;display:inline-block}.container{background-color:var(--calcite-tile-background-color);block-size:var(--calcite-container-size-content-fluid);box-sizing:border-box;inline-size:var(--calcite-container-size-content-fluid);outline:var(--calcite-border-width-sm, 1px) solid var(--calcite-tile-border-color);-webkit-user-select:none;user-select:none}.container.interactive{cursor:pointer}.container.interactive:hover,.container.interactive:focus,.container.interactive.selected{outline-color:var(--calcite-color-brand);position:relative}.container.interactive:hover .selection-icon,.container.interactive:focus .selection-icon,.container.interactive.selected .selection-icon{--calcite-icon-color:var(--calcite-color-brand)}.container.interactive.selected{z-index:var(--calcite-z-index)}.container.interactive:focus{box-shadow:inset 0 0 0 1px var(--calcite-color-brand);z-index:var(--calcite-z-index-sticky)}.content-container,.row{align-items:flex-start;display:flex}.content-container{flex-direction:column}.text-content-container{inline-size:100%;outline-color:transparent;padding:0}.text-content{display:flex;flex-direction:column}.heading{color:var(--calcite-tile-heading-text-color);font-weight:var(--calcite-font-weight-medium);line-height:1.20313rem;overflow-wrap:break-word}.large-visual-deprecated{align-items:center;justify-content:center;min-block-size:12rem;text-align:center}.large-visual-deprecated calcite-icon{align-self:center;block-size:64px;inline-size:64px}.large-visual-deprecated .text-content-container{justify-content:center}.description{color:var(--calcite-tile-description-text-color);font-weight:var(--calcite-font-weight-regular);overflow-wrap:break-word}:host([alignment=center]) .icon{align-self:center}:host([alignment=center]) .text-content-container{justify-content:center}:host([alignment=center]) .text-content{text-align:center}:host([alignment=center]) slot[name=content-start]::slotted(*),:host([alignment=center]) slot[name=content-end]::slotted(*),:host([alignment=center]) slot[name=content-top]::slotted(*),:host([alignment=center]) slot[name=content-bottom]::slotted(*){align-self:center}:host([scale=s]){max-inline-size:400px;min-inline-size:100px}:host([scale=s]) .container{padding:var(--calcite-spacing-sm)}:host([scale=s]) .content-container--has-content,:host([scale=s]) .row{gap:var(--calcite-spacing-sm)}:host([scale=s]) .heading{font-size:var(--calcite-font-size--2);line-height:1.03125rem}:host([scale=s]) .description{font-size:var(--calcite-font-size--3);line-height:0.85938rem}:host([scale=s]) .content-container--has-only-content-top-and-bottom slot[name=content-top]::slotted(*){margin-block-end:var(--calcite-spacing-sm)}:host([scale=m]){max-inline-size:460px;min-inline-size:140px}:host([scale=m]) .container{padding:var(--calcite-spacing-md)}:host([scale=m]) .content-container--has-content,:host([scale=m]) .row{gap:var(--calcite-spacing-md)}:host([scale=m]) .heading{font-size:var(--calcite-font-size--1);line-height:1.20313rem}:host([scale=m]) .description{font-size:var(--calcite-font-size--2);line-height:1.03125rem}:host([scale=m]) .content-container--has-only-content-top-and-bottom slot[name=content-top]::slotted(*){margin-block-end:var(--calcite-spacing-md)}:host([scale=l]){max-inline-size:520px;min-inline-size:160px}:host([scale=l]) .container{padding:var(--calcite-spacing-xl)}:host([scale=l]) .content-container--has-content,:host([scale=l]) .row{gap:var(--calcite-spacing-xl)}:host([scale=l]) .heading{font-size:var(--calcite-font-size-0);line-height:1.375rem}:host([scale=l]) .description{font-size:var(--calcite-font-size--1);line-height:1.20313rem}:host([scale=l]) .content-container--has-only-content-top-and-bottom slot[name=content-top]::slotted(*){margin-block-end:var(--calcite-spacing-xl)}:host([selection-appearance=border][layout=horizontal]) .container.selected:focus::before,:host([selection-appearance=border][layout=vertical]) .container.selected:focus::before{block-size:100%;box-shadow:inset 0 0 0 1px var(--calcite-color-brand);content:"";display:block;inline-size:100%;inset-block-start:0;inset-inline-start:0;position:absolute}:host([selection-appearance=border][layout=horizontal]) .container.selected{box-shadow:inset 0 -4px 0 0 var(--calcite-color-brand)}:host([selection-appearance=border][layout=vertical]) .container.selected{box-shadow:inset 4px 0 0 0 var(--calcite-color-brand)}:host([href]:focus:not([disabled])),:host([href]:hover:not([disabled])){--calcite-tile-border-color:var(--calcite-color-text-link);--calcite-tile-heading-text-color:var(--calcite-color-text-link);--calcite-icon-color:var(--calcite-color-text-link)}:host([href]:focus:not([disabled])) .container,:host([href]:hover:not([disabled])) .container{position:relative;z-index:var(--calcite-z-index)}:host([href]:active:not([disabled])) .container{box-shadow:0 0 0 3px var(--calcite-tile-border-color)}:host([embed]) .container{box-shadow:none;padding:0}:host([selection-mode=none]) .container{outline-color:var(--calcite-tile-border-color)}:host([selection-mode=none]) .container:focus{outline-color:var(--calcite-color-brand);position:relative}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host(:hover:not([disabled])),:host([active]:not([disabled])){--calcite-tile-description-text-color:var(--calcite-color-text-2);--calcite-tile-heading-text-color:var(--calcite-color-text-1)}:host([hidden]){display:none}[hidden]{display:none}::slotted(*){max-inline-size:100%}'},76055:(e,t,n)=>{n.d(t,{I:()=>h,u:()=>r});var i=n(22737);function o(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function c(e){e.target.disabled&&e.preventDefault()}const a=["mousedown","mouseup","click"];function l(e){e.target.disabled&&(e.stopImmediatePropagation(),e.preventDefault())}const s={capture:!0};function r(e){if(e.disabled)return e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void function(e){e.el.click=o,t=e.el,t.addEventListener("pointerdown",c,s),a.forEach((e=>t.addEventListener(e,l,s)));var t}(e);!function(e){delete e.el.click,t=e.el,t.removeEventListener("pointerdown",c,s),a.forEach((e=>t.removeEventListener(e,l,s)));var t}(e),e.el.removeAttribute("aria-disabled")}const d="interaction-container",h=(e,t)=>{let{disabled:n}=e;return(0,i.h)("div",{class:d,inert:n},...t)}},98563:(e,t,n)=>{n.d(t,{a:()=>s,b:()=>r,c:()=>d,s:()=>l});var i=n(22737),o=n(57922);const c=new WeakMap,a=new WeakMap;function l(e){a.set(e,new Promise((t=>c.set(e,t))))}function s(e){c.get(e)()}function r(e){return a.get(e)}async function d(e){if(await r(e),(0,o.i)())return(0,i.f)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}}}]);
//# sourceMappingURL=30972.ca5d0f4a.chunk.js.map