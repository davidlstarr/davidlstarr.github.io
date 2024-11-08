import{h as w,H as P,k as l,t as C,l as n,q as x}from"./index-CN4ACLGJ.js";import{f as H,c as L,d as D,a as F,r as R,F as m}from"./floating-ui-CUhKo4FX.js";import{d as h,a as u,c as A,u as z}from"./focusTrapComponent-CqweeTF6.js";import{t as g,j as O,q as T,k as B}from"./dom-CFD37C8e.js";import{g as S}from"./guid-DP-7rFCR.js";import{o as v}from"./openCloseComponent-DyGVoXUK.js";import{H as M}from"./Heading-NPxbW-Qq.js";import{u as U,c as I,a as _,s as q,d as $,b as X}from"./t9n-CjLp0gCv.js";import{s as j,a as K,c as Y}from"./loadable-DovO8-bk.js";import{c as V}from"./observers-CP3uNsO3.js";import{F as W}from"./FloatingArrow-D-q0ZIVy.js";import{g as G}from"./component-thCpPSLC.js";import{i as J}from"./key-Dalt3dqL.js";import{d as N}from"./action-Cdl7229P.js";import{d as Q}from"./icon-BA3T62ZQ.js";import{d as Z}from"./loader-CtlgxS2A.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */class ee{constructor(){this.registeredElements=new Map,this.registeredElementCount=0,this.queryPopover=e=>{const{registeredElements:t}=this,i=e.find(s=>t.has(s));return t.get(i)},this.togglePopovers=e=>{const t=e.composedPath(),i=this.queryPopover(t);i&&!i.triggerDisabled&&(i.open=!i.open),Array.from(this.registeredElements.values()).filter(s=>s!==i&&s.autoClose&&s.open&&!t.includes(s)).forEach(s=>s.open=!1)},this.keyDownHandler=e=>{e.defaultPrevented||(e.key==="Escape"?this.closeAllPopovers():J(e.key)&&this.togglePopovers(e))},this.clickHandler=e=>{B(e)||this.togglePopovers(e)}}registerElement(e,t){this.registeredElementCount++,this.registeredElements.set(e,t),this.registeredElementCount===1&&this.addListeners()}unregisterElement(e){this.registeredElements.delete(e)&&this.registeredElementCount--,this.registeredElementCount===0&&this.removeListeners()}closeAllPopovers(){Array.from(this.registeredElements.values()).forEach(e=>e.open=!1)}addListeners(){window.addEventListener("click",this.clickHandler),window.addEventListener("keydown",this.keyDownHandler)}removeListeners(){window.removeEventListener("click",this.clickHandler),window.removeEventListener("keydown",this.keyDownHandler)}}const o={container:"container",imageContainer:"image-container",closeButtonContainer:"close-button-container",closeButton:"close-button",content:"content",hasHeader:"has-header",header:"header",headerContent:"header-content",heading:"heading"},te="auto",b="aria-controls",E="aria-expanded",ie=":host{--calcite-floating-ui-z-index:var(--calcite-popover-z-index, var(--calcite-z-index-popup));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-z-index) * -1);fill:var(--calcite-color-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-color-border-3)}:host([scale=s]) .heading{padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding-inline:1.25rem;padding-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1)}.arrow::before{outline:1px solid var(--calcite-color-border-3)}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-color-border-3)}.heading{margin:0px;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);word-wrap:break-word;word-break:break-word}.container{position:relative;display:flex;block-size:100%;flex-direction:row;flex-wrap:nowrap;border-radius:0.25rem;color:var(--calcite-color-text-1)}.container.has-header{flex-direction:column}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:0.25rem;border-end-end-radius:0.25rem}.has-header .close-button-container{border-end-end-radius:none}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%}:host([hidden]){display:none}[hidden]{display:none}",se=ie,y=new ee,ne=w(class extends P{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePopoverBeforeClose=l(this,"calcitePopoverBeforeClose",6),this.calcitePopoverClose=l(this,"calcitePopoverClose",6),this.calcitePopoverBeforeOpen=l(this,"calcitePopoverBeforeOpen",6),this.calcitePopoverOpen=l(this,"calcitePopoverOpen",6),this.mutationObserver=V("mutation",()=>this.updateFocusTrapElements()),this.guid=`calcite-popover-${S()}`,this.openTransitionProp="opacity",this.hasLoaded=!1,this.setTransitionEl=e=>{this.transitionEl=e},this.setFilteredPlacements=()=>{const{el:e,flipPlacements:t}=this;this.filteredFlipPlacements=t?H(t,e):null},this.setUpReferenceElement=(e=!0)=>{this.removeReferences(),this.effectiveReferenceElement=this.getReferenceElement(),L(this,this.effectiveReferenceElement,this.el);const{el:t,referenceElement:i,effectiveReferenceElement:s}=this;e&&i&&!s&&console.warn(`${t.tagName}: reference-element id "${i}" was not found.`,{el:t}),this.addReferences()},this.getId=()=>this.el.id||this.guid,this.setExpandedAttr=()=>{const{effectiveReferenceElement:e,open:t}=this;e&&"setAttribute"in e&&e.setAttribute(E,g(t))},this.addReferences=()=>{const{effectiveReferenceElement:e}=this;if(!e)return;const t=this.getId();"setAttribute"in e&&e.setAttribute(b,t),y.registerElement(e,this.el),this.setExpandedAttr()},this.removeReferences=()=>{const{effectiveReferenceElement:e}=this;e&&("removeAttribute"in e&&(e.removeAttribute(b),e.removeAttribute(E)),y.unregisterElement(e))},this.hide=()=>{this.open=!1},this.storeArrowEl=e=>{this.arrowEl=e,this.reposition(!0)},this.autoClose=!1,this.closable=!1,this.flipDisabled=!1,this.focusTrapDisabled=!1,this.pointerDisabled=!1,this.flipPlacements=void 0,this.heading=void 0,this.headingLevel=void 0,this.label=void 0,this.messageOverrides=void 0,this.messages=void 0,this.offsetDistance=D,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement=te,this.referenceElement=void 0,this.scale="m",this.triggerDisabled=!1,this.effectiveLocale="",this.floatingLayout="vertical",this.effectiveReferenceElement=void 0,this.defaultMessages=void 0}handleFocusTrapDisabled(e){this.open&&(e?h(this):u(this))}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}onMessagesChange(){}offsetDistanceOffsetHandler(){this.reposition(!0)}offsetSkiddingHandler(){this.reposition(!0)}openHandler(){v(this),this.reposition(!0),this.setExpandedAttr()}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}referenceElementHandler(){this.setUpReferenceElement(),this.reposition(!0)}effectiveLocaleChange(){U(this,this.effectiveLocale)}connectedCallback(){this.setFilteredPlacements(),I(this),_(this),A(this),requestAnimationFrame(()=>this.setUpReferenceElement(this.hasLoaded))}async componentWillLoad(){await q(this),j(this)}componentDidLoad(){K(this),this.referenceElement&&!this.effectiveReferenceElement&&this.setUpReferenceElement(),this.open&&v(this),this.hasLoaded=!0}disconnectedCallback(){this.removeReferences(),$(this),X(this),F(this,this.effectiveReferenceElement,this.el),h(this)}async reposition(e=!1){const{el:t,effectiveReferenceElement:i,placement:s,overlayPositioning:c,flipDisabled:d,filteredFlipPlacements:a,offsetDistance:r,offsetSkidding:f,arrowEl:k}=this;return R(this,{floatingEl:t,referenceEl:i,overlayPositioning:c,placement:s,flipDisabled:d,flipPlacements:a,offsetDistance:r,offsetSkidding:f,arrowEl:k,type:"popover"},e)}async setFocus(){await Y(this),C(this.el),O(this.el)}async updateFocusTrapElements(){z(this)}getReferenceElement(){const{referenceElement:e,el:t}=this;return(typeof e=="string"?T(t,{id:e}):e)||null}onBeforeOpen(){this.calcitePopoverBeforeOpen.emit()}onOpen(){this.calcitePopoverOpen.emit(),u(this)}onBeforeClose(){this.calcitePopoverBeforeClose.emit()}onClose(){this.calcitePopoverClose.emit(),h(this)}renderCloseButton(){const{messages:e,closable:t}=this;return t?n("div",{class:o.closeButtonContainer,key:o.closeButtonContainer},n("calcite-action",{appearance:"transparent",class:o.closeButton,onClick:this.hide,ref:i=>this.closeButtonEl=i,scale:this.scale,text:e.close},n("calcite-icon",{icon:"x",scale:G(this.scale)}))):null}renderHeader(){const{heading:e,headingLevel:t}=this,i=e?n(M,{class:o.heading,level:t},e):null;return i?n("div",{class:o.header,key:o.header},i,this.renderCloseButton()):null}render(){const{effectiveReferenceElement:e,heading:t,label:i,open:s,pointerDisabled:c,floatingLayout:d}=this,a=e&&s,r=!a,f=c?null:n(W,{floatingLayout:d,key:"floating-arrow",ref:this.storeArrowEl});return n(x,{key:"3d353c97791fd0d5b2c1138f3b068669024b3512","aria-hidden":g(r),"aria-label":i,"aria-live":"polite","calcite-hydrated-hidden":r,id:this.getId(),role:"dialog"},n("div",{key:"1248ef4c8e83e622335b71a3b0034bf0490d7583",class:{[m.animation]:!0,[m.animationActive]:a},ref:this.setTransitionEl},f,n("div",{key:"8b2272c0ba2f4e4a4090942f6fbaf6ebc29e8806",class:{[o.hasHeader]:!!t,[o.container]:!0}},this.renderHeader(),n("div",{key:"1891093fcb573a52309328248aa9d4a2a057c7e4",class:o.content},n("slot",{key:"67bcfcbf92172b4575d44a201238faba5ceac271"})),t?null:this.renderCloseButton())))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{focusTrapDisabled:["handleFocusTrapDisabled"],flipPlacements:["flipPlacementsHandler"],messageOverrides:["onMessagesChange"],offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return se}},[1,"calcite-popover",{autoClose:[516,"auto-close"],closable:[516],flipDisabled:[516,"flip-disabled"],focusTrapDisabled:[516,"focus-trap-disabled"],pointerDisabled:[516,"pointer-disabled"],flipPlacements:[16],heading:[1],headingLevel:[514,"heading-level"],label:[1],messageOverrides:[1040],messages:[1040],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],open:[1540],overlayPositioning:[513,"overlay-positioning"],placement:[513],referenceElement:[1,"reference-element"],scale:[513],triggerDisabled:[516,"trigger-disabled"],effectiveLocale:[32],floatingLayout:[32],effectiveReferenceElement:[32],defaultMessages:[32],reposition:[64],setFocus:[64],updateFocusTrapElements:[64]},void 0,{focusTrapDisabled:["handleFocusTrapDisabled"],flipPlacements:["flipPlacementsHandler"],messageOverrides:["onMessagesChange"],offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"],effectiveLocale:["effectiveLocaleChange"]}]);function oe(){if(typeof customElements>"u")return;["calcite-popover","calcite-action","calcite-icon","calcite-loader"].forEach(e=>{switch(e){case"calcite-popover":customElements.get(e)||customElements.define(e,ne);break;case"calcite-action":customElements.get(e)||N();break;case"calcite-icon":customElements.get(e)||Q();break;case"calcite-loader":customElements.get(e)||Z();break}})}oe();export{ne as P,oe as d};
