/*! For license information please see 73020.2cc47295.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[73020],{73020:(e,t,s)=>{s.r(t),s.d(t,{calcite_card_group:()=>d});var i=s(22737),a=s(28716),c=s(76055),n=s(98563);s(73364),s(57922);const d=class{constructor(e){(0,i.r)(this,e),this.calciteCardGroupSelect=(0,i.c)(this,"calciteCardGroupSelect",6),this.items=[],this.udpateItemsOnSelectionModeChange=()=>{this.updateSlottedItems(this.slotRefEl),this.updateSelectedItems()},this.updateItemsOnSlotChange=e=>{this.updateSlottedItems(e.target),this.updateSelectedItems()},this.updateSlottedItems=e=>{this.items=e.assignedElements({flatten:!0}).filter((e=>e?.matches("calcite-card")))},this.updateSelectedItems=()=>{this.items.forEach((e=>{e.selectionMode=this.selectionMode})),this.setSelectedItems(!1)},this.setSelectedItems=(e,t)=>{t&&this.items.forEach((e=>{const s=t===e;switch(this.selectionMode){case"multiple":s&&(e.selected=!e.selected);break;case"single":e.selected=!!s&&!e.selected;break;case"single-persist":e.selected=!!s}})),this.selectedItems=this.items.filter((e=>e.selected)),e&&"none"!==this.selectionMode&&!this.disabled&&this.calciteCardGroupSelect.emit()},this.disabled=!1,this.label=void 0,this.selectionMode="none",this.selectedItems=[]}onSelectionModeChange(){this.udpateItemsOnSelectionModeChange()}componentDidRender(){(0,c.u)(this)}componentDidLoad(){(0,n.a)(this)}async componentWillLoad(){(0,n.s)(this)}calciteInternalCardKeyEventListener(e){if(e.composedPath().includes(this.el)){const t=this.items.filter((e=>!e.disabled));switch(e.detail.key){case"ArrowRight":(0,a.k)(t,e.target,"next");break;case"ArrowLeft":(0,a.k)(t,e.target,"previous");break;case"Home":(0,a.k)(t,e.target,"first");break;case"End":(0,a.k)(t,e.target,"last")}}}calciteCardSelectListener(e){e.composedPath().includes(this.el)&&!e.target.selectable&&this.setSelectedItems(!0,e.target)}async setFocus(){await(0,n.b)(this),this.disabled||(0,a.d)(this.items[0])}render(){const e="none"===this.selectionMode||"multiple"===this.selectionMode?"group":"radiogroup";return(0,i.h)(i.H,{key:"2aa2152806418f305065d23ec9779668086f10c9"},(0,i.h)(c.I,{key:"64717db7b05788f5448b898ab9bfc2a553ed6ac9",disabled:this.disabled},(0,i.h)("div",{key:"f6725d6c8942a0c69aed287bee24d79fd42c7e89","aria-label":this.label,class:"container",role:e},(0,i.h)("slot",{key:"a88d6f133fdceafba10ceb9517428b3c7ee8cffb",onSlotchange:this.updateItemsOnSlotChange,ref:e=>this.slotRefEl=e}))))}get el(){return(0,i.g)(this)}static get watchers(){return{selectionMode:["onSelectionModeChange"]}}};d.style=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}.container{display:flex;flex-wrap:wrap;gap:var(--calcite-card-group-space, var(--calcite-card-group-gap, var(--calcite-size-md)))}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}"},76055:(e,t,s)=>{s.d(t,{I:()=>h,u:()=>o});var i=s(22737);function a(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function c(e){e.target.disabled&&e.preventDefault()}const n=["mousedown","mouseup","click"];function d(e){e.target.disabled&&(e.stopImmediatePropagation(),e.preventDefault())}const l={capture:!0};function o(e){if(e.disabled)return e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void function(e){e.el.click=a,t=e.el,t.addEventListener("pointerdown",c,l),n.forEach((e=>t.addEventListener(e,d,l)));var t}(e);!function(e){delete e.el.click,t=e.el,t.removeEventListener("pointerdown",c,l),n.forEach((e=>t.removeEventListener(e,d,l)));var t}(e),e.el.removeAttribute("aria-disabled")}const r="interaction-container",h=(e,t)=>{let{disabled:s}=e;return(0,i.h)("div",{class:r,inert:s},...t)}},98563:(e,t,s)=>{s.d(t,{a:()=>l,b:()=>o,c:()=>r,s:()=>d});var i=s(22737),a=s(57922);const c=new WeakMap,n=new WeakMap;function d(e){n.set(e,new Promise((t=>c.set(e,t))))}function l(e){c.get(e)()}function o(e){return n.get(e)}async function r(e){if(await o(e),(0,a.i)())return(0,i.f)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}}}]);
//# sourceMappingURL=73020.2cc47295.chunk.js.map