/*! For license information please see 89301.704bc61c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[89301],{89301:(e,t,n)=>{n.r(t),n.d(t,{calcite_tree:()=>d,calcite_tree_item:()=>R});var i=n(22737),o=n(28716),s=n(76904),c=n(76055),l=n(73364),a=n(9057);n(68385),n(57922);function r(e){return"CALCITE-TREE-ITEM"===e?.tagName}const d=class{constructor(e){(0,i.r)(this,e),this.calciteTreeSelect=(0,i.c)(this,"calciteTreeSelect",6),this.keyDownHandler=e=>{if(this.child)return;const t=this.el,n=e.target;if(!r(n)||!this.el.contains(n)||!["ArrowRight","ArrowDown","ArrowLeft","ArrowUp","Home","End","Tab"].includes(e.key))return;const i=function(e){return Array.from(e.querySelectorAll("calcite-tree-item:not([disabled])")).filter((t=>{let n=t;for(;n!==e&&void 0!==n;){const e=n.parentElement;if(r(e)&&e.hasChildren&&!e.expanded)return!1;n=n.parentElement}return!0}))}(t);if("Tab"!==e.key){if("ArrowDown"===e.key){const t=i.indexOf(n),o=i[t+1];return o?.focus(),void e.preventDefault()}if("ArrowUp"===e.key){const t=i.indexOf(n),o=i[t-1];return o?.focus(),void e.preventDefault()}if("ArrowLeft"===e.key){if(n.hasChildren&&n.expanded)return n.expanded=!1,void e.preventDefault();const t=i.slice(0,i.indexOf(n)).reverse().find((e=>e.depth===n.depth-1));return t?.focus(),void e.preventDefault()}if("ArrowRight"!==e.key)if("Home"!==e.key)if("End"!==e.key);else{const t=i.pop();t&&(t.focus(),e.preventDefault())}else{const t=i.shift();t&&(t.focus(),e.preventDefault())}else if(!n.disabled&&n.hasChildren)if(n.expanded){const t=i.indexOf(n),o=i[t+1];o?.focus(),e.preventDefault()}else n.expanded=!0,e.preventDefault()}else i.forEach((e=>e.tabIndex=-1))},this.lines=!1,this.child=void 0,this.scale="m",this.selectionMode="single",this.selectedItems=[]}componentWillRender(){const e=this.el.parentElement?.closest("calcite-tree");this.lines=e?e.lines:this.lines,this.scale=e?e.scale:this.scale,this.selectionMode=e?e.selectionMode:this.selectionMode,this.child=!!e}render(){return(0,i.h)(i.H,{key:"5b08de1c59622b78985de9019bf4ba11d605a07f","aria-multiselectable":this.child?void 0:(0,o.t)("multiple"===this.selectionMode||"multichildren"===this.selectionMode),onKeyDown:this.keyDownHandler,role:this.child?void 0:"tree",tabIndex:this.getRootTabIndex()},(0,i.h)("slot",{key:"00a037cf92cb5facadc4b2961a9369b6ae0631f5"}))}onFocus(){if(!this.child){const e=this.el.querySelector("calcite-tree-item[selected]:not([disabled])")||this.el.querySelector("calcite-tree-item:not([disabled])");(0,o.d)(e)}}onFocusIn(e){(e.relatedTarget===this.el||!this.el.contains(e.relatedTarget))&&this.el.removeAttribute("tabindex")}onFocusOut(e){!this.el.contains(e.relatedTarget)&&(this.el.tabIndex=this.getRootTabIndex())}onInternalTreeItemSelect(e){if(this.child)return;const t=e.target,n=(0,o.C)(t.querySelectorAll("calcite-tree-item"));if(e.preventDefault(),e.stopPropagation(),"ancestors"===this.selectionMode)return void this.updateAncestorTree(e);const i="none"===this.selectionMode,s=null!==this.selectionMode&&(!t.hasChildren||t.hasChildren&&("children"===this.selectionMode||"multichildren"===this.selectionMode)),c="multichildren"===this.selectionMode&&t.hasChildren,l=!i&&e.detail.modifyCurrentSelection&&("multiple"===this.selectionMode||"multichildren"===this.selectionMode),a=!l&&(("single"===this.selectionMode||"multiple"===this.selectionMode)&&n.length<=0||"children"===this.selectionMode||"multichildren"===this.selectionMode||"single-persist"===this.selectionMode&&!t.hasChildren),r=["multiple","none","single","single-persist"].includes(this.selectionMode)&&t.hasChildren,d=[];if(s&&d.push(t),a){(0,o.C)(this.el.querySelectorAll("calcite-tree-item[selected]")).forEach((e=>{d.includes(e)||(e.selected=!1)}))}r&&["multiple","none","single","single-persist"].includes(this.selectionMode)&&(t.expanded=!t.expanded),c&&n.forEach((e=>{e.selected=!1,e.hasChildren&&(e.expanded=!1)})),l&&window.getSelection().removeAllRanges(),l&&t.selected?d.forEach((e=>{e.disabled||(e.selected=!1)})):i||d.forEach((e=>{e.disabled||(e.selected="single"!==this.selectionMode||!e.selected)})),this.selectedItems=i?[]:(0,o.C)(this.el.querySelectorAll("calcite-tree-item")).filter((e=>e.selected)),this.calciteTreeSelect.emit(),e.stopPropagation()}updateAncestorTree(e){const t=e.target,n=e.detail.updateItem;if(t.disabled||t.indeterminate&&!n)return;const i=[];let s=t.parentElement.closest("calcite-tree-item");for(;s;)i.push(s),s=s.parentElement.closest("calcite-tree-item");const c=Array.from(t.querySelectorAll("calcite-tree-item:not([disabled])")),l=c.filter((e=>!e.hasChildren)),a=c.filter((e=>e.hasChildren));let r;function d(e,t){const n=e.filter((e=>e.selected)),i=e.filter((e=>!e.selected));t.selected=n.length===e.length,t.indeterminate=n.length>0&&i.length>0}r=n?t.hasChildren?!(t.selected||t.indeterminate):!t.selected:t.selected,l.forEach((e=>{e.selected=r,e.indeterminate=!1})),a.reverse().forEach((e=>{d(Array.from(e.querySelectorAll(":scope > calcite-tree > calcite-tree-item")),e)})),n&&(t.hasChildren?d(c,t):(t.selected=r,t.indeterminate=!1)),i.forEach((e=>{const t=(0,o.C)(e.querySelectorAll("calcite-tree-item")),n=t.filter((e=>e.selected));if(0===n.length)return e.selected=!1,void(e.indeterminate=!1);const i=n.length<t.length;e.indeterminate=i,e.selected=!i})),this.selectedItems=(0,o.C)(this.el.querySelectorAll("calcite-tree-item")).filter((e=>e.selected)),n&&this.calciteTreeSelect.emit()}getRootTabIndex(){return this.child?-1:0}get el(){return(0,i.g)(this)}};d.style=":host{display:block}:host(:focus){outline:2px solid transparent;outline-offset:2px}:host([hidden]){display:none}[hidden]{display:none}";const h="actions-end",u="bullet-point",m="checkbox",p="checkbox-container",f="checkbox-label",b="checkmark",v="chevron",g="children-container",k="icon-start",x="item--expanded",y="node-actions-container",E="node-container",C="actions-end",M="children",w="blank",I="bullet-point",S="check",A="check-square-f",T="chevron-right",z="minus-square-f",D="square",R=class{constructor(e){(0,i.r)(this,e),this.calciteInternalTreeItemSelect=(0,i.c)(this,"calciteInternalTreeItemSelect",6),this.iconClickHandler=e=>{e.stopPropagation(),this.expanded=!this.expanded},this.childrenClickHandler=e=>e.stopPropagation(),this.userChangedValue=!1,this.updateParentIsExpanded=(e,t)=>{(0,o.e)(e,M,{all:!0,selector:"calcite-tree-item"}).forEach((e=>e.parentExpanded=t))},this.actionsEndSlotChangeHandler=e=>{this.hasEndActions=(0,o.b)(e)},this.disabled=!1,this.label=void 0,this.expanded=!1,this.iconFlipRtl=void 0,this.iconStart=void 0,this.selected=!1,this.parentExpanded=!1,this.depth=-1,this.hasChildren=null,this.lines=void 0,this.scale=void 0,this.indeterminate=!1,this.selectionMode=void 0,this.hasEndActions=!1,this.updateAfterInitialRender=!1}expandedHandler(e){this.updateParentIsExpanded(this.el,e)}handleSelectedChange(e){"ancestors"!==this.selectionMode||this.userChangedValue||(e&&(this.indeterminate=!1),this.calciteInternalTreeItemSelect.emit({modifyCurrentSelection:!0,updateItem:!1}))}getSelectionMode(){this.isSelectionMultiLike="multiple"===this.selectionMode||"multichildren"===this.selectionMode}connectedCallback(){if(this.parentTreeItem=this.el.parentElement?.closest("calcite-tree-item"),this.parentTreeItem){const{expanded:e}=this.parentTreeItem;this.updateParentIsExpanded(this.parentTreeItem,e)}(0,s.c)(this)}disconnectedCallback(){(0,s.d)(this)}componentWillRender(){this.hasChildren=!!this.el.querySelector("calcite-tree"),this.depth=0;let e,t=this.el.closest("calcite-tree");if(t)for(this.selectionMode=t.selectionMode,this.scale=t.scale||"m",this.lines=t.lines;t&&(e=t.parentElement?.closest("calcite-tree"),e!==t);)t=e,this.depth=this.depth+1}componentWillLoad(){requestAnimationFrame((()=>this.updateAfterInitialRender=!0))}componentDidLoad(){this.updateAncestorTree()}componentDidRender(){(0,c.u)(this)}render(){const e="rtl"===(0,o.g)(this.el),t="single"===this.selectionMode||"children"===this.selectionMode||"single-persist"===this.selectionMode,n="multiple"===this.selectionMode||"multichildren"===this.selectionMode,s="none"===this.selectionMode&&!this.hasChildren,r=this.hasChildren&&this.indeterminate,d=this.hasChildren?(0,i.h)("calcite-icon",{class:{[v]:!0,[l.C.rtl]:e},"data-test-id":"icon",icon:T,onClick:this.iconClickHandler,scale:(0,a.g)(this.scale)}):null,R=(0,i.h)("slot",{key:"default-slot"}),q="ancestors"===this.selectionMode?(0,i.h)("div",{class:p},(0,i.h)("calcite-icon",{class:m,icon:this.selected?A:r?z:D,scale:(0,a.g)(this.scale)}),(0,i.h)("label",{class:f},R)):null,H=t?I:n?S:s?w:null,L=H?(0,i.h)("calcite-icon",{class:{[u]:H===I,[b]:H===S,[l.C.rtl]:e},icon:H,scale:(0,a.g)(this.scale)}):null,P=!(this.parentExpanded||1===this.depth),O=this.updateAfterInitialRender&&this.expanded,{hasEndActions:F}=this,_=(0,i.h)("slot",{key:"actionsEndSlot",name:C,onSlotchange:this.actionsEndSlotChangeHandler}),V=(0,i.h)("calcite-icon",{key:"251fd8b4ef328e3575268a914b823282d5810b3b",class:k,flipRtl:"start"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconStart,scale:(0,a.g)(this.scale)});return(0,i.h)(i.H,{key:"9ca6542ef823f536919ef45e249a51acc560e5cd","aria-checked":"multiple"===this.selectionMode||"multichildren"===this.selectionMode||"ancestors"===this.selectionMode?(0,o.t)(this.selected):void 0,"aria-expanded":this.hasChildren?(0,o.t)(O):void 0,"aria-hidden":(0,o.t)(P),"aria-live":"polite","aria-selected":"single"===this.selectionMode||"children"===this.selectionMode||"single-persist"===this.selectionMode?(0,o.t)(this.selected):void 0,"calcite-hydrated-hidden":P,role:"treeitem",tabIndex:this.disabled?-1:0},(0,i.h)(c.I,{key:"b87535cef45f25a3d962f2ee7a2fe23030c09626",disabled:this.disabled},(0,i.h)("div",{key:"2a4f1e4a647c80ef1d027b795814a03dd933db37",class:{[x]:O}},(0,i.h)("div",{key:"716fc1eac97264fe3186a0beee9e173415f93b83",class:y},(0,i.h)("div",{key:"286db32250f9978cab481314b2ea3e790248c7f2",class:{[E]:!0,[l.C.rtl]:e},"data-selection-mode":this.selectionMode},d,L,this.iconStart?V:null,q||R),(0,i.h)("div",{key:"2e1eeefae879f7197b5292ecda3b1f831f673efb",class:h,hidden:!F,ref:e=>this.actionSlotWrapper=e},_)),(0,i.h)("div",{key:"1cb705ab7da1422b2a956ea90e29b489909840f3",class:{[g]:!0,[l.C.rtl]:e},"data-test-id":"calcite-tree-children",onClick:this.childrenClickHandler,role:this.hasChildren?"group":void 0},(0,i.h)("slot",{key:"e3c968c15f50af07cafd3c3a67746455472e6b6f",name:M})))))}onClick(e){if(this.disabled||this.isActionEndEvent(e))return;const[t]=(0,o.D)(this.el,"a");if(t&&"a"!==e.composedPath()[0].tagName.toLowerCase()){const e=""===t.target?"_self":t.target;window.open(t.href,e)}this.calciteInternalTreeItemSelect.emit({modifyCurrentSelection:"ancestors"===this.selectionMode||this.isSelectionMultiLike,updateItem:!0}),this.userChangedValue=!0}keyDownHandler(e){if(!this.isActionEndEvent(e)&&!e.defaultPrevented)switch(e.key){case" ":this.userChangedValue=!0,this.calciteInternalTreeItemSelect.emit({modifyCurrentSelection:this.isSelectionMultiLike,updateItem:!0}),e.preventDefault();break;case"Enter":{const t=Array.from(this.el.children).find((e=>e.matches("a")));this.userChangedValue=!0,t?(t.click(),this.selected=!0):this.calciteInternalTreeItemSelect.emit({modifyCurrentSelection:this.isSelectionMultiLike,updateItem:!0}),e.preventDefault()}}}isActionEndEvent(e){return e.composedPath().includes(this.actionSlotWrapper)}updateAncestorTree(){const e=this.parentTreeItem;if("ancestors"===this.selectionMode&&e)if(this.selected){const t=this.el.parentElement,n=Array.from(t?.children),i=n.filter((e=>e.selected));n.length===i.length?(e.selected=!0,e.indeterminate=!1):i.length>0&&(e.indeterminate=!0);Array.from(this.el.querySelectorAll("calcite-tree-item:not([disabled])")).forEach((e=>{e.selected=!0,e.indeterminate=!1}))}else if(this.indeterminate){this.parentTreeItem.indeterminate=!0}}get el(){return(0,i.g)(this)}static get watchers(){return{expanded:["expandedHandler"],selected:["handleSelectedChange"],selectionMode:["getSelectionMode"]}}};R.style=':host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block;max-inline-size:100%;cursor:pointer;color:var(--calcite-color-text-3)}.node-actions-container{display:flex}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([scale=s]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .node-actions-container{min-block-size:1.5rem}:host([scale=s]) .node-actions-container .node-container .checkbox,:host([scale=s]) .node-actions-container .node-container .checkmark,:host([scale=s]) .node-actions-container .node-container .bullet-point{margin-inline:0.25rem}:host([scale=s]) .node-actions-container .node-container .icon-start{margin-inline:0.75rem}:host([scale=s]) .node-actions-container .node-container .chevron{padding:0.25rem}:host([scale=m]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .node-actions-container{min-block-size:2rem}:host([scale=m]) .node-actions-container .node-container .checkbox,:host([scale=m]) .node-actions-container .node-container .checkmark,:host([scale=m]) .node-actions-container .node-container .bullet-point{margin-inline:0.5rem}:host([scale=m]) .node-actions-container .node-container .icon-start{margin-inline:0.75rem}:host([scale=m]) .node-actions-container .node-container .chevron{padding:0.5rem}:host([scale=l]){font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .node-actions-container{min-block-size:2.75rem}:host([scale=l]) .node-actions-container .node-container .checkbox,:host([scale=l]) .node-actions-container .node-container .checkmark,:host([scale=l]) .node-actions-container .node-container .bullet-point{margin-inline:0.75rem}:host([scale=l]) .node-actions-container .node-container .icon-start{margin-inline:0.75rem}:host([scale=l]) .node-actions-container .node-container .chevron{padding-inline:var(--calcite-size-md);padding-block:var(--calcite-size-sm-plus)}:host([lines]) .children-container::after{position:absolute;inset-block-start:0px;z-index:var(--calcite-z-index);inline-size:1px;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;block-size:96%;content:"";background-color:var(--calcite-color-border-2)}:host(:not([lines])) .node-container::after{display:none}::slotted(*){min-inline-size:0px;max-inline-size:100%;overflow-wrap:break-word;color:inherit;text-decoration:none !important}::slotted(*):hover{text-decoration:none !important}::slotted(a){inline-size:100%;text-decoration-line:none}:host{outline:2px solid transparent;outline-offset:2px}:host .node-container{outline-color:transparent}:host:focus .node-container,:host:active .node-container{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host(:focus:not([disabled])) .node-container{outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host(:focus:not([disabled])) .checkbox{outline:2px solid transparent;outline-offset:2px}.actions-end{display:flex;flex-direction:row;align-items:center;align-self:stretch}.checkbox-container{display:flex;align-items:center}.checkbox{line-height:0;color:var(--calcite-color-border-input)}.checkbox-label{pointer-events:none;display:flex;align-items:center}.children-container{position:relative;block-size:0px;transform-origin:top;overflow:hidden;opacity:0;margin-inline-start:1.25rem;transform:scaleY(0);transition:var(--calcite-animation-timing) cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity var(--calcite-animation-timing) cubic-bezier(0.215, 0.44, 0.42, 0.88), all var(--calcite-animation-timing) ease-in-out}.item--expanded>.children-container{overflow:visible;opacity:1;transform:none;block-size:auto}.node-container{position:relative;display:flex;min-inline-size:0px;flex-grow:1;align-items:center}.node-container .checkmark,.node-container .bullet-point{opacity:0;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;color:var(--calcite-color-border-1)}.node-container:hover .checkmark,.node-container:hover .bullet-point,:host([selected]) .node-container:hover .checkmark,:host([selected]) .node-container:hover .bullet-point,:host(:focus:not([disabled])) .node-container .checkmark,:host(:focus:not([disabled])) .node-container .bullet-point{opacity:1}:host([selected]) .node-container,:host([selected]) .node-container:hover{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}:host([selected]) .node-container .bullet-point,:host([selected]) .node-container .checkmark,:host([selected]) .node-container:hover .bullet-point,:host([selected]) .node-container:hover .checkmark{opacity:1;color:var(--calcite-color-brand)}:host([selection-mode=none]:not([has-children])):host([scale=s]) .node-container{padding-inline-start:0.5rem}:host([selection-mode=none]:not([has-children])):host([scale=m]) .node-container{padding-inline-start:1rem}:host([selection-mode=none]:not([has-children])):host([scale=l]) .node-container{padding-inline-start:1.5rem}:host(:not([has-children])):host([scale=s]) .node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.25rem}:host(:not([has-children])):host([scale=m]) .node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.5rem}:host(:not([has-children])):host([scale=l]) .node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.75rem}:host([has-children]) .node-container[data-selection-mode=ancestors] .checkbox{margin-inline-start:0}:host([has-children]) .node-container .bullet-point,:host([has-children]) .node-container .checkmark{display:none}.chevron{position:relative;align-self:center;color:var(--calcite-color-text-3);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;flex:0 0 auto;transform:rotate(0deg)}.calcite--rtl .chevron{transform:rotate(180deg)}.item--expanded .node-container>.chevron{transform:rotate(90deg)}:host([selected]) .checkmark,:host([selected]) .bullet-point{color:var(--calcite-color-brand)}:host([selected]) .checkbox{color:var(--calcite-color-brand)}:host([has-children][indeterminate]) .checkbox{color:var(--calcite-color-brand)}:host([hidden]){display:none}[hidden]{display:none}'},9057:(e,t,n)=>{function i(e){return"l"===e?"m":"s"}async function o(e){await(function(e){return"function"===typeof e.componentOnReady}(e)?e.componentOnReady():new Promise((e=>requestAnimationFrame((()=>e())))))}n.d(t,{c:()=>o,g:()=>i})},76904:(e,t,n)=>{n.d(t,{c:()=>l,d:()=>a});var i=n(22737),o=n(68385);let s;const c={childList:!0};function l(e){s||(s=(0,o.c)("mutation",r)),s.observe(e.el,c)}function a(e){s.unobserve(e.el)}function r(e){e.forEach((e=>{let{target:t}=e;(0,i.f)(t)}))}},76055:(e,t,n)=>{n.d(t,{I:()=>h,u:()=>r});var i=n(22737);function o(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function s(e){e.target.disabled&&e.preventDefault()}const c=["mousedown","mouseup","click"];function l(e){e.target.disabled&&(e.stopImmediatePropagation(),e.preventDefault())}const a={capture:!0};function r(e){if(e.disabled)return e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void function(e){e.el.click=o,t=e.el,t.addEventListener("pointerdown",s,a),c.forEach((e=>t.addEventListener(e,l,a)));var t}(e);!function(e){delete e.el.click,t=e.el,t.removeEventListener("pointerdown",s,a),c.forEach((e=>t.removeEventListener(e,l,a)));var t}(e),e.el.removeAttribute("aria-disabled")}const d="interaction-container",h=(e,t)=>{let{disabled:n}=e;return(0,i.h)("div",{class:d,inert:n},...t)}},68385:(e,t,n)=>{n.d(t,{c:()=>o});var i=n(57922);function o(e,t,n){if(!(0,i.i)())return;const o=function(e){class t extends window.MutationObserver{constructor(e){super(e),this.observedEntry=[],this.callback=e}observe(e,t){return this.observedEntry.push({target:e,options:t}),super.observe(e,t)}unobserve(e){const t=this.observedEntry.filter((t=>t.target!==e));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),t.forEach((e=>this.observe(e.target,e.options)))}}return"intersection"===e?window.IntersectionObserver:"mutation"===e?t:window.ResizeObserver}(e);return new o(t,n)}}}]);
//# sourceMappingURL=89301.704bc61c.chunk.js.map