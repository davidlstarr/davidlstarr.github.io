import{h as c,H as d,k as l,l as t,q as r}from"./index-CN4ACLGJ.js";import{c as h,u as f,d as u,I as p}from"./interactive-CoPIaW86.js";import{M as m}from"./resources4-Bma3eAHE.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */const i={container:"container",heading:"heading"},b=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1)}:host([filter-hidden]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{margin:0px;display:flex;flex:1 1 0%;padding:0.75rem;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2)}.heading{padding:0px}:host([hidden]){display:none}[hidden]{display:none}",g=b,n=c(class extends d{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalListItemGroupDefaultSlotChange=l(this,"calciteInternalListItemGroupDefaultSlotChange",6),this.handleDefaultSlotChange=()=>{this.calciteInternalListItemGroupDefaultSlotChange.emit()},this.disabled=!1,this.filterHidden=!1,this.heading=void 0}connectedCallback(){h(this)}componentDidRender(){f(this)}disconnectedCallback(){u(this)}render(){const{disabled:e,heading:o}=this;return t(r,{key:"47c22129d1b6879d3efbb1f98bdefe332e24bfdf"},t(p,{key:"07458b983fa815316690de5dffd4a74df1a5af59",disabled:e},t("tr",{key:"970298669c14dbf7a6b73bbcccfbd8b0416368dd",class:i.container},t("td",{key:"84768e0299ec183bc51f08b80b90e4c1358c9d6d",class:i.heading,colSpan:m},o)),t("slot",{key:"ebdbc017ca136f67f5b456994ecc277625056232",onSlotchange:this.handleDefaultSlotChange})))}get el(){return this}static get style(){return g}},[1,"calcite-list-item-group",{disabled:[516],filterHidden:[516,"filter-hidden"],heading:[513]}]);function s(){if(typeof customElements>"u")return;["calcite-list-item-group"].forEach(e=>{switch(e){case"calcite-list-item-group":customElements.get(e)||customElements.define(e,n);break}})}s();const k=n,v=s;export{k as CalciteListItemGroup,v as defineCustomElement};
