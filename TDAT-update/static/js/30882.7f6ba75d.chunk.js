/*! For license information please see 30882.7f6ba75d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[30882],{30882:(e,t,i)=>{i.r(t),i.d(t,{calcite_chip:()=>j});var c=i(22737),n=i(28716),a=i(98563),l=i(67928),s=i(76055),o=i(99398),r=i(17772),h=i(9057),d=i(57922);i(73364),i(68385);const p="title",m="close",u="image-container",v="chip-icon",g="text--slotted",b="container",f="image--slotted",x="closable",k="multiple",y="single",z="selectable",C="select-icon",w="select-icon--active",M="non-interactive",I="is-circle",S="selected",E="image",L="x",D="circle-f",H="square",T="check-square-f",j=class{constructor(e){(0,c.r)(this,e),this.calciteChipClose=(0,c.c)(this,"calciteChipClose",6),this.calciteChipSelect=(0,c.c)(this,"calciteChipSelect",6),this.calciteInternalChipKeyEvent=(0,c.c)(this,"calciteInternalChipKeyEvent",6),this.calciteInternalChipSelect=(0,c.c)(this,"calciteInternalChipSelect",6),this.calciteInternalSyncSelectedChips=(0,c.c)(this,"calciteInternalSyncSelectedChips",6),this.handleDefaultSlotChange=()=>{this.updateHasText()},this.close=()=>{this.calciteChipClose.emit(),this.selected=!1,this.closed=!0},this.closeButtonKeyDownHandler=e=>{(0,r.i)(e.key)&&(e.preventDefault(),this.close())},this.handleSlotImageChange=e=>{this.hasImage=(0,n.b)(e)},this.handleEmittingEvent=()=>{this.interactive&&this.calciteChipSelect.emit()},this.disabled=!1,this.appearance="solid",this.kind="neutral",this.closable=!1,this.icon=void 0,this.iconFlipRtl=!1,this.scale="m",this.label=void 0,this.value=void 0,this.closed=!1,this.selectionMode="none",this.selected=!1,this.messageOverrides=void 0,this.messages=void 0,this.interactive=!1,this.parentChipGroup=void 0,this.defaultMessages=void 0,this.effectiveLocale=void 0,this.hasText=!1,this.hasImage=!1}watchSelected(e){"none"!==this.selectionMode&&this.handleSelectionPropertyChange(e)}onMessagesChange(){}effectiveLocaleChange(){(0,l.u)(this,this.effectiveLocale)}connectedCallback(){(0,o.c)(this),(0,l.c)(this)}componentDidLoad(){(0,a.a)(this),"none"!==this.selectionMode&&this.interactive&&this.selected&&this.handleSelectionPropertyChange(this.selected)}componentDidRender(){(0,s.u)(this)}disconnectedCallback(){(0,o.d)(this),(0,l.d)(this)}async componentWillLoad(){(0,a.s)(this),(0,d.i)()&&(await(0,l.s)(this),this.updateHasText())}keyDownHandler(e){if(e.target===this.el)switch(e.key){case" ":case"Enter":this.handleEmittingEvent(),e.preventDefault();break;case"ArrowRight":case"ArrowLeft":case"Home":case"End":this.calciteInternalChipKeyEvent.emit(e),e.preventDefault()}}clickHandler(){!this.interactive&&this.closable&&this.closeButtonEl.focus()}async setFocus(){await(0,a.c)(this),!this.disabled&&this.interactive?this.containerEl?.focus():!this.disabled&&this.closable&&this.closeButtonEl?.focus()}updateHasText(){this.hasText=this.el.textContent.trim().length>0}handleSelectionPropertyChange(e){"single"===this.selectionMode&&this.calciteInternalSyncSelectedChips.emit();!this.parentChipGroup.selectedItems.includes(this.el)&&e&&"multiple"!==this.selectionMode&&this.calciteInternalChipSelect.emit(),"single"!==this.selectionMode&&this.calciteInternalSyncSelectedChips.emit()}renderChipImage(){return(0,c.h)("div",{class:u},(0,c.h)("slot",{name:E,onSlotchange:this.handleSlotImageChange}))}renderSelectionIcon(){const e="multiple"===this.selectionMode?this.selected?T:H:this.selected?D:void 0;return(0,c.h)("div",{class:{[C]:!0,[w]:"multiple"===this.selectionMode||this.selected}},e?(0,c.h)("calcite-icon",{icon:e,scale:(0,h.g)(this.scale)}):null)}renderCloseButton(){return(0,c.h)("button",{"aria-label":this.messages.dismissLabel,class:m,onClick:this.close,onKeyDown:this.closeButtonKeyDownHandler,ref:e=>this.closeButtonEl=e,tabIndex:this.disabled?-1:0},(0,c.h)("calcite-icon",{icon:L,scale:(0,h.g)(this.scale)}))}renderIcon(){return(0,c.h)("calcite-icon",{class:v,flipRtl:this.iconFlipRtl,icon:this.icon,scale:(0,h.g)(this.scale)})}render(){const{disabled:e}=this,t=e||!e&&!this.interactive,i="multiple"===this.selectionMode&&this.interactive?"checkbox":"none"!==this.selectionMode&&this.interactive?"radio":this.interactive?"button":void 0;return(0,c.h)(c.H,{key:"7feca8bad37627baabfc4abd25cf135e1e9f196b"},(0,c.h)(s.I,{key:"af2360b4b768ae8c643d52f4bdb9f5d282504114",disabled:e},(0,c.h)("div",{key:"8d905c4ab20d271a211282b95ebcb2d305d76cb7","aria-checked":"none"!==this.selectionMode&&this.interactive?(0,n.t)(this.selected):void 0,"aria-label":this.label,class:{[b]:!0,[g]:this.hasText,[f]:this.hasImage,[z]:"none"!==this.selectionMode,[k]:"multiple"===this.selectionMode,[y]:"single"===this.selectionMode||"single-persist"===this.selectionMode,[S]:this.selected,[x]:this.closable,[M]:!this.interactive,[I]:!this.closable&&!this.hasText&&(!this.icon||!this.hasImage)&&("none"===this.selectionMode||!!this.selectionMode&&"multiple"!==this.selectionMode&&!this.selected)},onClick:this.handleEmittingEvent,ref:e=>this.containerEl=e,role:i,tabIndex:t?-1:0},"none"!==this.selectionMode&&this.renderSelectionIcon(),this.renderChipImage(),this.icon&&this.renderIcon(),(0,c.h)("span",{key:"dab6eae3f8330b85ffac4c7fe1b2fcbb53327196",class:p},(0,c.h)("slot",{key:"72ba5bd0c7a97c30f766da119f419261aab24acb",onSlotchange:this.handleDefaultSlotChange})),this.closable&&this.renderCloseButton())))}static get assetsDirs(){return["assets"]}get el(){return(0,c.g)(this)}static get watchers(){return{selected:["watchSelected"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};j.style=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-flex;cursor:default;border-radius:var(--calcite-chip-corner-radius, 9999px)}:host([closed]){display:none}:host([appearance=outline]) .container,:host([appearance=outline-fill]) .container{--calcite-internal-chip-close-icon-color:var(--calcite-color-text-3);color:var(--calcite-chip-text-color, var(--calcite-color-text-1))}:host([appearance=outline]):host([kind=brand]) .container,:host([appearance=outline-fill]):host([kind=brand]) .container{border-color:var(--calcite-chip-border-color, var(--calcite-color-brand))}:host([appearance=outline]):host([kind=inverse]) .container,:host([appearance=outline-fill]):host([kind=inverse]) .container{border-color:var(--calcite-chip-border-color, var(--calcite-color-border-inverse))}:host([appearance=outline]):host([kind=neutral]) .container,:host([appearance=outline-fill]):host([kind=neutral]) .container{border-color:var(--calcite-chip-border-color, var(--calcite-color-border-1))}:host([appearance=outline]) .container{background-color:transparent}:host([appearance=outline-fill]) .container{background-color:var(--calcite-chip-background-color, var(--calcite-color-foreground-1))}:host([appearance=solid]) .container{border-color:transparent}:host([appearance=solid]):host([kind=brand]) .container,:host([appearance=solid]):host([kind=inverse]) .container{color:var(--calcite-chip-text-color, var(--calcite-color-text-inverse))}:host([appearance=solid]):host([kind=brand]) .close,:host([appearance=solid]):host([kind=inverse]) .close{outline-color:var(--calcite-color-text-inverse)}:host([appearance=solid]):host([kind=brand]) .container{background-color:var(--calcite-chip-background-color, var(--calcite-color-brand))}:host([appearance=solid]):host([kind=inverse]) .container{background-color:var(--calcite-chip-background-color, var(--calcite-color-inverse))}:host([appearance=solid]):host([kind=neutral]) .container{background-color:var(--calcite-chip-background-color, var(--calcite-color-foreground-2))}:host([kind=neutral]) .container{--calcite-internal-chip-close-icon-color:var(--calcite-color-text-3);color:var(--calcite-chip-text-color, var(--calcite-color-text-1))}:host([selected]) .select-icon{opacity:1}:host([scale=s]) .container{--calcite-internal-chip-block-size:1.5rem ;--calcite-internal-chip-container-space-x-end:0.25rem ;--calcite-internal-chip-container-space-x-start:0.25rem ;--calcite-internal-chip-font-size:var(--calcite-font-size--2);--calcite-internal-chip-icon-size:1rem ;--calcite-internal-chip-icon-space:0.25rem ;--calcite-internal-chip-image-size:1.25rem ;--calcite-internal-chip-title-space:0.25rem ;--calcite-internal-close-size:1rem }:host([scale=s]) .container:not(.closable).is-circle{--calcite-internal-chip-container-space-x-start:var(--calcite-spacing-px);--calcite-internal-chip-container-space-x-end:var(--calcite-spacing-px)}:host([scale=s]) .container.image--slotted:has(.chip-icon),:host([scale=s]) .container.image--slotted.text--slotted,:host([scale=s]) .container.image--slotted.closable{--calcite-internal-chip-image-space-x-end:0.25rem }:host([scale=s]) .container.image--slotted:not(.text--slotted,:has(.chip-icon)),:host([scale=s]) .container.image--slotted:not(.selectable){--calcite-internal-chip-container-space-x-start:var(--calcite-spacing-px)}:host([scale=s]) .container.selectable.single:not(.is-circle).image--slotted{--calcite-internal-chip-container-space-x-start:var(--calcite-spacing-px)}:host([scale=s]) .container.selectable.single:not(.is-circle).selected{--calcite-internal-chip-select-space-x-end:0.375rem ;--calcite-internal-chip-select-space-x-start:0}:host([scale=s]) .container.selectable.single:not(.is-circle).selected.image--slotted{--calcite-internal-chip-select-space-x-end:0.5rem ;--calcite-internal-chip-select-space-x-start:0.125rem }:host([scale=s]) .container.multiple:not(.is-circle){--calcite-internal-chip-container-space-x-start:0.25rem ;--calcite-internal-chip-select-space-x-end:0.25rem ;--calcite-internal-chip-select-space-x-start:0.25rem }:host([scale=s]) .container.multiple:not(.is-circle).image--slotted{--calcite-internal-chip-select-space-x-end:0.5rem ;--calcite-internal-chip-select-space-x-start:0.375rem ;--calcite-internal-chip-container-space-x-start:var(--calcite-spacing-px)}:host([scale=s]) .container.multiple:not(.is-circle).image--slotted:not(.text--slotted){--calcite-internal-chip-select-space-x-start:0.375rem }:host([scale=m]) .container{--calcite-internal-chip-block-size:2rem ;--calcite-internal-chip-container-space-x-end:0.375rem ;--calcite-internal-chip-container-space-x-start:0.375rem ;--calcite-internal-chip-font-size:var(--calcite-font-size--1);--calcite-internal-chip-icon-size:1.5rem ;--calcite-internal-chip-icon-space:0.375rem ;--calcite-internal-chip-image-size:1.5rem ;--calcite-internal-chip-title-space:0.375rem ;--calcite-internal-close-size:1.5rem }:host([scale=m]) .container:not(.closable).is-circle{--calcite-internal-chip-container-space-x-end:var(--calcite-spacing-px);--calcite-internal-chip-container-space-x-start:var(--calcite-spacing-px)}:host([scale=m]) .container.image--slotted:not(.is-circle){--calcite-internal-chip-container-space-x-start:0.25rem }:host([scale=m]) .container.image--slotted:has(.chip-icon),:host([scale=m]) .container.image--slotted.text--slotted,:host([scale=m]) .container.image--slotted.closable{--calcite-internal-chip-image-space-x-end:0.375rem }:host([scale=m]) .container.selectable.single:not(.is-circle).image--slotted{--calcite-internal-chip-container-space-x-start:0.25rem }:host([scale=m]) .container.selectable.single:not(.is-circle).selected{--calcite-internal-chip-select-space-x-end:var(--calcite-spacing-px);--calcite-internal-chip-select-space-x-start:0}:host([scale=m]) .container.selectable.single:not(.is-circle).selected.image--slotted{--calcite-internal-chip-select-space-x-end:0.25rem ;--calcite-internal-chip-select-space-x-start:0.375rem }:host([scale=m]) .container.multiple:not(.is-circle){--calcite-internal-chip-select-space-x-end:0.125rem ;--calcite-internal-chip-select-space-x-start:0.125rem }:host([scale=m]) .container.multiple:not(.is-circle).image--slotted{--calcite-internal-chip-select-space-x-end:0.5rem ;--calcite-internal-chip-select-space-x-start:0.25rem }:host([scale=m]) .container.closable:not(.is-circle){--calcite-internal-chip-container-space-x-end:0.25rem }:host([scale=l]) .container{--calcite-internal-chip-block-size:2.75rem ;--calcite-internal-chip-container-space-x-end:0.5rem ;--calcite-internal-chip-container-space-x-start:0.5rem ;--calcite-internal-chip-font-size:var(--calcite-font-size-0);--calcite-internal-chip-icon-size:2rem ;--calcite-internal-chip-icon-space:0.5rem ;--calcite-internal-chip-image-size:2rem ;--calcite-internal-chip-title-space:0.5rem ;--calcite-internal-close-size:2rem }:host([scale=l]) .container:not(.closable).is-circle{--calcite-internal-chip-container-space-x-end:0.25rem ;--calcite-internal-chip-container-space-x-start:0.25rem }:host([scale=l]) .container.image--slotted:not(.is-circle){--calcite-internal-chip-container-space-x-start:0.375rem }:host([scale=l]) .container.image--slotted:has(.chip-icon),:host([scale=l]) .container.image--slotted.text--slotted,:host([scale=l]) .container.image--slotted.closable{--calcite-internal-chip-image-space-x-end:0.5rem }:host([scale=l]) .container.selectable.single:not(.is-circle).image--slotted{--calcite-internal-chip-container-space-x-start:0.375rem }:host([scale=l]) .container.selectable.single:not(.is-circle).selected{--calcite-internal-chip-select-space-x-end:0.25rem ;--calcite-internal-chip-select-space-x-start:0}:host([scale=l]) .container.selectable.single:not(.is-circle).selected.image--slotted{--calcite-internal-chip-select-space-x-end:0.375rem ;--calcite-internal-chip-select-space-x-start:0.5rem }:host([scale=l]) .container.multiple:not(.is-circle){--calcite-internal-chip-container-space-x-start:0.5rem ;--calcite-internal-chip-select-space-x-end:0.25rem ;--calcite-internal-chip-select-space-x-start:0.25rem }:host([scale=l]) .container.multiple:not(.is-circle).image--slotted{--calcite-internal-chip-select-space-x-end:0.75rem }:host([scale=l]) .container.closable:not(.is-circle){--calcite-internal-chip-container-space-x-end:0.375rem }.container{box-sizing:border-box;display:inline-flex;block-size:100%;max-inline-size:100%;align-items:center;justify-content:center;font-weight:var(--calcite-font-weight-medium);outline-color:transparent;border-radius:var(--calcite-chip-corner-radius, 9999px);border-width:var(--calcite-border-width-sm);border-style:solid;font-size:var(--calcite-internal-chip-font-size, var(--calcite-font-size));padding-inline-start:var(--calcite-internal-chip-container-space-x-start);padding-inline-end:var(--calcite-internal-chip-container-space-x-end);block-size:var(--calcite-internal-chip-block-size, auto);inline-size:var(--calcite-internal-chip-inline-size, auto);min-inline-size:var(--calcite-internal-chip-block-size, auto)}.container:hover .select-icon--active{opacity:1}.container.selectable{cursor:pointer}.container:not(.non-interactive):focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.container.text--slotted .title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.container:not(.text--slotted) .title,.container:not(.image--slotted) .image-container{display:none}.container.is-circle .chip-icon,.container.is-circle .image-container{padding:0}.title{padding-inline:var(--calcite-internal-chip-title-space)}.image-container{display:inline-flex;overflow:hidden;align-items:center;justify-content:center;pointer-events:none;block-size:var(--calcite-internal-chip-image-size, 1.5rem);inline-size:var(--calcite-internal-chip-image-size, 1.5rem);padding-inline-start:0;padding-inline-end:var(--calcite-internal-chip-image-space-x-end, 0)}.chip-icon{position:relative;margin-block:0px;display:inline-flex;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);color:var(--calcite-chip-icon-color, var(--calcite-chip-text-color, var(--calcite-icon-color, currentColor)));padding-inline:var(--calcite-internal-chip-icon-space, 0.375rem)}.select-icon{align-self:center;justify-content:center;align-items:center;display:flex;inset-block-start:-1px;position:absolute;visibility:hidden;inline-size:auto;opacity:0;transition:opacity 0.15s ease-in-out, inline-size 0.15s ease-in-out;color:var(--calcite-chip-select-icon-color, currentColor)}.select-icon.select-icon--active{position:relative;visibility:visible;opacity:0.5;color:var(--calcite-chip-select-icon-color-pressed, var(--calcite-chip-select-icon-color, currentColor))}.multiple .select-icon{display:flex;align-items:center;justify-content:center}.multiple .select-icon,.single .select-icon--active{padding-inline-start:var(--calcite-internal-chip-select-space-x-start);padding-inline-end:var(--calcite-internal-chip-select-space-x-end);block-size:var(--calcite-internal-chip-icon-size, 1.5rem);inline-size:var(--calcite-internal-chip-icon-size, 1.5rem)}slot[name=image]::slotted(*){display:flex;block-size:100%;inline-size:100%;overflow:hidden;border-radius:50%}.close{margin:0px;cursor:pointer;align-items:center;border-radius:50%;border-style:none;outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;background-color:var(--calcite-close-background-color, var(--calcite-color-transparent));-webkit-appearance:none;display:flex;align-content:center;justify-content:center;color:var(--calcite-chip-close-icon-color, var(--calcite-close-icon-color, var(--calcite-internal-chip-close-icon-color, var(--calcite-color-text-1))));block-size:var(--calcite-internal-close-size, 1.5rem);inline-size:var(--calcite-internal-close-size, 1.5rem);padding:0}.close:hover,.close:focus{background-color:var(--calcite-close-background-color-hover, var(--calcite-color-transparent-hover))}.close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.close:active{background-color:var(--calcite-close-background-color-press, var(--calcite-color-transparent-press))}.close calcite-icon{color:inherit}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}"},9057:(e,t,i)=>{function c(e){return"l"===e?"m":"s"}async function n(e){await(function(e){return"function"===typeof e.componentOnReady}(e)?e.componentOnReady():new Promise((e=>requestAnimationFrame((()=>e())))))}i.d(t,{c:()=>n,g:()=>c})},76055:(e,t,i)=>{i.d(t,{I:()=>d,u:()=>r});var c=i(22737);function n(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function a(e){e.target.disabled&&e.preventDefault()}const l=["mousedown","mouseup","click"];function s(e){e.target.disabled&&(e.stopImmediatePropagation(),e.preventDefault())}const o={capture:!0};function r(e){if(e.disabled)return e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void function(e){e.el.click=n,t=e.el,t.addEventListener("pointerdown",a,o),l.forEach((e=>t.addEventListener(e,s,o)));var t}(e);!function(e){delete e.el.click,t=e.el,t.removeEventListener("pointerdown",a,o),l.forEach((e=>t.removeEventListener(e,s,o)));var t}(e),e.el.removeAttribute("aria-disabled")}const h="interaction-container",d=(e,t)=>{let{disabled:i}=e;return(0,c.h)("div",{class:h,inert:i},...t)}},98563:(e,t,i)=>{i.d(t,{a:()=>o,b:()=>r,c:()=>h,s:()=>s});var c=i(22737),n=i(57922);const a=new WeakMap,l=new WeakMap;function s(e){l.set(e,new Promise((t=>a.set(e,t))))}function o(e){a.get(e)()}function r(e){return l.get(e)}async function h(e){if(await r(e),(0,n.i)())return(0,c.f)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},67928:(e,t,i)=>{i.d(t,{c:()=>m,d:()=>u,s:()=>h,u:()=>p});var c=i(22737),n=i(99398),a=i(57922);const l={};function s(){throw new Error("could not fetch component message bundle")}function o(e){e.messages={...e.defaultMessages,...e.messageOverrides}}function r(){}async function h(e){e.defaultMessages=await d(e,e.effectiveLocale),o(e)}async function d(e,t){if(!(0,a.i)())return{};const{el:i}=e,o=i.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const i=`${t}_${e}`;return l[i]||(l[i]=fetch((0,c.a)(`./assets/${t}/t9n/messages_${e}.json`)).then((e=>(e.ok||s(),e.json()))).catch((()=>s()))),l[i]}((0,n.g)(t,"t9n"),o)}async function p(e,t){e.defaultMessages=await d(e,t),o(e)}function m(e){e.onMessagesChange=v}function u(e){e.onMessagesChange=r}function v(){o(this)}}}]);
//# sourceMappingURL=30882.7f6ba75d.chunk.js.map