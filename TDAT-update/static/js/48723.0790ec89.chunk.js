/*! For license information please see 48723.0790ec89.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[48723],{40871:(e,t,o)=>{o.d(t,{A:()=>v,S:()=>g,d:()=>b});var i=o(95146),a=o(84343),n=o(76527),s=o(62785),c=o(76988),l=o(22097),r=o(39879),d=o(48897),h=o(67294),u=o(26964),p=o(53794);const g={menuActions:"menu-actions",menuTooltip:"menu-tooltip"},m="ellipsis",f="container",v=(0,i.w$)(class extends i.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.setMenuOpen=e=>{this.menuOpen=!!e.target.open},this.handleMenuActionsSlotChange=e=>{this.hasMenuActions=(0,r.d)(e)},this.expanded=!1,this.label=void 0,this.layout="vertical",this.columns=void 0,this.menuOpen=!1,this.overlayPositioning="absolute",this.scale=void 0,this.menuFlipPlacements=void 0,this.menuPlacement=void 0,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale="",this.defaultMessages=void 0,this.hasMenuActions=!1}expandedHandler(){this.menuOpen=!1}onMessagesChange(){}effectiveLocaleChange(){(0,c.u)(this,this.effectiveLocale)}async setFocus(){await(0,n.c)(this),this.el.focus()}connectedCallback(){(0,s.c)(this),(0,c.c)(this),(0,a.c)(this)}disconnectedCallback(){(0,s.d)(this),(0,c.d)(this),(0,a.d)(this)}async componentWillLoad(){(0,n.s)(this),await(0,c.s)(this)}componentDidLoad(){(0,n.a)(this)}renderMenu(){const{expanded:e,menuOpen:t,scale:o,layout:a,messages:n,overlayPositioning:s,hasMenuActions:c,menuFlipPlacements:r,menuPlacement:d}=this;return(0,i.h)("calcite-action-menu",{expanded:e,flipPlacements:r??("horizontal"===a?["top","bottom"]:["left","right"]),hidden:!c,label:n.more,onCalciteActionMenuOpen:this.setMenuOpen,open:t,overlayPositioning:s,placement:d??("horizontal"===a?"bottom-start":"leading-start"),scale:o},(0,i.h)("calcite-action",{icon:m,scale:o,slot:l.S.trigger,text:n.more,textEnabled:e}),(0,i.h)("slot",{name:g.menuActions,onSlotchange:this.handleMenuActionsSlotChange}),(0,i.h)("slot",{name:g.menuTooltip,slot:l.S.tooltip}))}render(){return(0,i.h)("div",{key:"8143606c5745053f15140f34ff5ea375a683325f","aria-label":this.label,class:f,role:"group"},(0,i.h)("slot",{key:"e8c2821b9ce2e9d0293478989fc31d24f043f9c3"}),this.renderMenu())}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return':host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:flex;flex-direction:column;padding:0px;background-color:transparent;border-color:var(--calcite-action-group-border-color, var(--calcite-color-border-3));border-style:solid;border-width:0}.container{display:flex;flex-grow:1;flex-direction:column}:host([columns="1"]){--calcite-internal-action-group-columns:1}:host([columns="2"]){--calcite-internal-action-group-columns:2}:host([columns="3"]){--calcite-internal-action-group-columns:3}:host([columns="4"]){--calcite-internal-action-group-columns:4}:host([columns="5"]){--calcite-internal-action-group-columns:5}:host([columns="6"]){--calcite-internal-action-group-columns:6}:host(:first-child){padding-block-start:0px}:host([layout=horizontal]),:host([layout=horizontal]) .container{flex-direction:row}:host([layout=grid]){display:grid}:host([layout=grid]) .container{display:grid;place-content:stretch;background-color:transparent;grid-template-columns:repeat(var(--calcite-action-group-columns, var(--calcite-internal-action-group-columns, 3)), auto);gap:var(--calcite-action-group-gap, 1px);padding:var(--calcite-action-group-gap, 1px)}:host([hidden]){display:none}[hidden]{display:none}'}},[17,"calcite-action-group",{expanded:[516],label:[1],layout:[513],columns:[514],menuOpen:[1540,"menu-open"],overlayPositioning:[513,"overlay-positioning"],scale:[513],menuFlipPlacements:[16],menuPlacement:[513,"menu-placement"],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],hasMenuActions:[32],setFocus:[64]},void 0,{expanded:["expandedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function b(){if("undefined"===typeof customElements)return;["calcite-action-group","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover"].forEach((e=>{switch(e){case"calcite-action-group":customElements.get(e)||customElements.define(e,v);break;case"calcite-action":customElements.get(e)||(0,d.d)();break;case"calcite-action-menu":customElements.get(e)||(0,l.d)();break;case"calcite-icon":customElements.get(e)||(0,h.d)();break;case"calcite-loader":customElements.get(e)||(0,u.d)();break;case"calcite-popover":customElements.get(e)||(0,p.d)()}}))}b()},48723:(e,t,o)=>{o.r(t),o.d(t,{CalciteActionBar:()=>M,defineCustomElement:()=>D});var i=o(95146),a=o(84343),n=o(39879),s=o(76527),c=o(62785),l=o(6676),r=o(76988),d=o(40871),h=o(22097);const u=e=>e.reduce(((e,t)=>e+t),0)/e.length,p=e=>{let{layout:t,actionCount:o,actionWidth:i,width:a,actionHeight:n,height:s,groupCount:c}=e;return Math.max(o-(e=>{let{width:t,actionWidth:o,layout:i,height:a,actionHeight:n,groupCount:s}=e;const c="horizontal"===i?t:a,l="horizontal"===i?o:n;return Math.floor((c-2*s)/l)})({width:a,actionWidth:i,layout:t,height:s,actionHeight:n,groupCount:c}),0)},g=e=>Array.from(e.querySelectorAll("calcite-action")).filter((e=>!e.closest("calcite-action-menu")||e.slot===h.S.trigger)),m="chevrons-left",f="chevrons-right";function v(e){let{el:t,expanded:o}=e;g(t).filter((e=>e.slot!==d.S.menuActions)).forEach((e=>e.textEnabled=o)),t.querySelectorAll("calcite-action-group, calcite-action-menu").forEach((e=>e.expanded=o))}const b=e=>{let{expanded:t,expandText:o,collapseText:a,expandLabel:s,collapseLabel:c,toggle:l,el:r,position:d,tooltip:h,ref:u,scale:p}=e;const g="rtl"===(0,n.a)(r),v=t?a:o,b=t?c:s,x=[m,f];g&&x.reverse();const y="end"===function(e,t){return e||t.closest("calcite-shell-panel")?.position||"start"}(d,r),A=y?x[1]:x[0],w=y?x[0]:x[1],E=(0,i.h)("calcite-action",{icon:t?A:w,id:"expand-toggle",label:b,onClick:l,ref:e=>(e=>{let{tooltip:t,referenceElement:o,expanded:i,ref:a}=e;return t&&(t.referenceElement=!i&&o?o:null),a&&a(o),o})({tooltip:h,referenceElement:e,expanded:t,ref:u}),scale:p,text:v,textEnabled:t,title:t||h?null:v});return E};var x=o(24282),y=o(48897),A=o(67294),w=o(26964),E=o(53794),C=o(78588);const L="action-group--end",z="actions-end",k="bottom-actions",H="expand-tooltip",S=(0,i.w$)(class extends i.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteActionBarToggle=(0,i.lh)(this,"calciteActionBarToggle",6),this.mutationObserver=(0,l.c)("mutation",(()=>{const{el:e,expanded:t}=this;v({el:e,expanded:t}),this.overflowActions()})),this.resizeObserver=(0,l.c)("resize",(e=>this.resizeHandlerEntries(e))),this.actionMenuOpenHandler=e=>{if(e.target.menuOpen){const t=e.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach((e=>{t.includes(e)||(e.menuOpen=!1)}))}},this.resizeHandlerEntries=e=>{e.forEach(this.resizeHandler)},this.resizeHandler=e=>{const{width:t,height:o}=e.contentRect;this.resize({width:t,height:o})},this.resize=(0,C.d)((e=>{let{width:t,height:o}=e;const{el:a,expanded:n,expandDisabled:s,layout:c,overflowActionsDisabled:l}=this;if(l||"vertical"===c&&!o||"horizontal"===c&&!t)return;const r=g(a),h=s?r.length:r.length+1,m=Array.from(a.querySelectorAll("calcite-action-group"));this.setGroupLayout(m);const f=this.hasActionsEnd||this.hasBottomActions||!s?m.length+1:m.length,{actionHeight:v,actionWidth:b}=(e=>{const t=e.filter((e=>e.slot!==d.S.menuActions)),o=t?.length;return{actionWidth:o?u(t.map((e=>e.clientWidth||0))):0,actionHeight:o?u(t.map((e=>e.clientHeight||0))):0}})(r);(e=>{let{actionGroups:t,expanded:o,overflowCount:a}=e,n=a;t.reverse().forEach((e=>{let t=0;const a=g(e).reverse();a.forEach((e=>{e.slot===d.S.menuActions&&(e.removeAttribute("slot"),e.textEnabled=o)})),n>0&&a.some((e=>{const o=a.filter((e=>!e.slot));return o.length>1&&a.length>2&&!e.closest("calcite-action-menu")&&(e.textEnabled=!0,e.setAttribute("slot",d.S.menuActions),t++,t>1&&n--),n<1})),(0,i.$x)(e)}))})({actionGroups:m,expanded:n,overflowCount:p({layout:c,actionCount:h,actionHeight:v,actionWidth:b,height:o,width:t,groupCount:f})})}),x.D.resize),this.toggleExpand=()=>{this.expanded=!this.expanded,this.calciteActionBarToggle.emit()},this.handleDefaultSlotChange=e=>{const t=(0,n.s)(e).filter((e=>e.matches("calcite-action-group")));this.setGroupLayout(t)},this.handleActionsEndSlotChange=e=>{this.hasActionsEnd=(0,n.d)(e)},this.handleBottomActionsSlotChange=e=>{this.hasBottomActions=(0,n.d)(e)},this.handleTooltipSlotChange=e=>{const t=(0,n.s)(e).filter((e=>e?.matches("calcite-tooltip")));this.expandTooltip=t[0]},this.actionsEndGroupLabel=void 0,this.expandDisabled=!1,this.expanded=!1,this.layout="vertical",this.overflowActionsDisabled=!1,this.overlayPositioning="absolute",this.position=void 0,this.scale=void 0,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.hasActionsEnd=!1,this.hasBottomActions=!1,this.expandTooltip=void 0,this.defaultMessages=void 0}expandHandler(){this.overflowActions()}expandedHandler(){const{el:e,expanded:t}=this;v({el:e,expanded:t}),this.overflowActions()}layoutHandler(){this.updateGroups()}overflowDisabledHandler(e){e?this.resizeObserver?.disconnect():(this.resizeObserver?.observe(this.el),this.overflowActions())}onMessagesChange(){}effectiveLocaleChange(){(0,r.u)(this,this.effectiveLocale)}componentDidLoad(){const{el:e,expanded:t}=this;(0,s.a)(this),v({el:e,expanded:t}),this.overflowActions()}connectedCallback(){const{el:e,expanded:t}=this;(0,c.c)(this),(0,r.c)(this),v({el:e,expanded:t}),this.mutationObserver?.observe(e,{childList:!0,subtree:!0}),this.overflowActionsDisabled||this.resizeObserver?.observe(e),this.overflowActions(),(0,a.c)(this)}async componentWillLoad(){(0,s.s)(this),await(0,r.s)(this)}disconnectedCallback(){this.mutationObserver?.disconnect(),this.resizeObserver?.disconnect(),(0,a.d)(this),(0,c.d)(this),(0,r.d)(this)}async overflowActions(){this.resize({width:this.el.clientWidth,height:this.el.clientHeight})}async setFocus(){await(0,s.c)(this),(0,n.f)(this.el)}updateGroups(){this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")))}setGroupLayout(e){e.forEach((e=>e.layout=this.layout))}renderBottomActionGroup(){const{expanded:e,expandDisabled:t,el:o,position:a,toggleExpand:n,scale:s,layout:c,messages:l,actionsEndGroupLabel:r,overlayPositioning:d}=this,h=t?null:(0,i.h)(b,{collapseLabel:l.collapseLabel,collapseText:l.collapse,el:o,expandLabel:l.expandLabel,expandText:l.expand,expanded:e,position:a,scale:s,toggle:n,tooltip:this.expandTooltip});return(0,i.h)("calcite-action-group",{class:L,hidden:this.expandDisabled&&!(this.hasActionsEnd||this.hasBottomActions),label:r,layout:c,overlayPositioning:d,scale:s},(0,i.h)("slot",{name:z,onSlotchange:this.handleActionsEndSlotChange}),(0,i.h)("slot",{name:k,onSlotchange:this.handleBottomActionsSlotChange}),(0,i.h)("slot",{name:H,onSlotchange:this.handleTooltipSlotChange}),h)}render(){return(0,i.h)(i.xr,{key:"ff6e365531a0ed2032864bb0777910c3932e9c6b",onCalciteActionMenuOpen:this.actionMenuOpenHandler},(0,i.h)("slot",{key:"f12b2f455752a62ee32b65224bed385940135a49",onSlotchange:this.handleDefaultSlotChange}),this.renderBottomActionGroup())}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expandDisabled:["expandHandler"],expanded:["expandedHandler"],layout:["layoutHandler"],overflowActionsDisabled:["overflowDisabledHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{pointer-events:auto;display:inline-flex;align-self:stretch;gap:var(--calcite-action-bar-items-space, 0)}:host([layout=vertical]){flex-direction:column}:host([layout=vertical]):host([overflow-actions-disabled]){overflow-y:auto}:host([layout=vertical]):host([expanded]){max-inline-size:var(--calcite-action-bar-expanded-max-width, auto)}:host([layout=vertical]) .action-group--end{margin-block-start:auto}:host([layout=vertical]) ::slotted(calcite-action-group:not(:last-of-type)){border-block-end-width:var(--calcite-border-width-sm)}:host([layout=horizontal]){flex-direction:row}:host([layout=horizontal]):host([overflow-actions-disabled]){overflow-x:auto}:host([layout=horizontal]) .action-group--end{margin-inline-start:auto}:host([layout=horizontal]) ::slotted(calcite-action-group:not(:last-of-type)){border-inline-end-width:var(--calcite-border-width-sm)}.action-group--end{justify-content:flex-end}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-action-bar",{actionsEndGroupLabel:[1,"actions-end-group-label"],expandDisabled:[516,"expand-disabled"],expanded:[1540],layout:[513],overflowActionsDisabled:[516,"overflow-actions-disabled"],overlayPositioning:[513,"overlay-positioning"],position:[513],scale:[513],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],hasActionsEnd:[32],hasBottomActions:[32],expandTooltip:[32],defaultMessages:[32],overflowActions:[64],setFocus:[64]},void 0,{expandDisabled:["expandHandler"],expanded:["expandedHandler"],layout:["layoutHandler"],overflowActionsDisabled:["overflowDisabledHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function O(){if("undefined"===typeof customElements)return;["calcite-action-bar","calcite-action","calcite-action-group","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover"].forEach((e=>{switch(e){case"calcite-action-bar":customElements.get(e)||customElements.define(e,S);break;case"calcite-action":customElements.get(e)||(0,y.d)();break;case"calcite-action-group":customElements.get(e)||(0,d.d)();break;case"calcite-action-menu":customElements.get(e)||(0,h.d)();break;case"calcite-icon":customElements.get(e)||(0,A.d)();break;case"calcite-loader":customElements.get(e)||(0,w.d)();break;case"calcite-popover":customElements.get(e)||(0,E.d)()}}))}O();const M=S,D=O},84343:(e,t,o)=>{o.d(t,{c:()=>c,d:()=>l});var i=o(95146),a=o(6676);let n;const s={childList:!0};function c(e){n||(n=(0,a.c)("mutation",r)),n.observe(e.el,s)}function l(e){n.unobserve(e.el)}function r(e){e.forEach((e=>{let{target:t}=e;(0,i.$x)(t)}))}}}]);
//# sourceMappingURL=48723.0790ec89.chunk.js.map