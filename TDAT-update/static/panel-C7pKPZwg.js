import{h as k,H as E,k as u,l as t,q as H}from"./index-CN4ACLGJ.js";import{f as r,h as v,j as z,t as x}from"./dom-CFD37C8e.js";import{c as w,u as F,d as B,I as T}from"./interactive-CoPIaW86.js";import{s as L,a as P,c as M}from"./loadable-DovO8-bk.js";import{c as I}from"./observers-CP3uNsO3.js";import{d as O,S as D}from"./action-menu-CSInzIUQ.js";import{H as j}from"./Heading-NPxbW-Qq.js";import{c as $,a as N,s as R,d as U,b as _,u as K}from"./t9n-CjLp0gCv.js";import{d as W}from"./action-Cdl7229P.js";import{d as q}from"./icon-BA3T62ZQ.js";import{d as G}from"./loader-CtlgxS2A.js";import{d as J}from"./popover-Db1BQv1g.js";import{d as Q}from"./scrim-DQWpkmoT.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */const a={actionBarContainer:"action-bar-container",backButton:"back-button",container:"container",contentBottom:"content-bottom",contentTop:"content-top",header:"header",headerContainer:"header-container",headerContainerBorderEnd:"header-container--border-end",heading:"heading",summary:"summary",description:"description",headerContent:"header-content",headerActions:"header-actions",headerActionsEnd:"header-actions--end",headerActionsStart:"header-actions--start",contentWrapper:"content-wrapper",fabContainer:"fab-container",footer:"footer",footerContent:"footer-content",footerActions:"footer-actions",footerStart:"footer-start",footerEnd:"footer-end"},p={close:"x",menu:"ellipsis",backLeft:"chevron-left",backRight:"chevron-right",expand:"chevron-down",collapse:"chevron-up"},i={actionBar:"action-bar",alerts:"alerts",contentBottom:"content-bottom",contentTop:"content-top",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerEnd:"footer-end",footerStart:"footer-start",footerActions:"footer-actions"},V=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}:host([scale=s]){--calcite-internal-panel-default-padding:var(--calcite-spacing-sm);--calcite-internal-panel-header-vertical-padding:10px}:host([scale=s]) .header-content .heading{font-size:var(--calcite-font-size--1)}:host([scale=s]) .header-content .description{font-size:var(--calcite-font-size--2)}:host([scale=m]){--calcite-internal-panel-default-padding:var(--calcite-spacing-md);--calcite-internal-panel-header-vertical-padding:var(--calcite-spacing-lg)}:host([scale=m]) .header-content .heading{font-size:var(--calcite-font-size-0)}:host([scale=m]) .header-content .description{font-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-internal-panel-default-padding:var(--calcite-spacing-xl);--calcite-internal-panel-header-vertical-padding:var(--calcite-spacing-xxl)}:host([scale=l]) .header-content .heading{font-size:var(--calcite-font-size-1)}:host([scale=l]) .header-content .description{font-size:var(--calcite-font-size-0)}.content-top,.content-bottom{display:flex;align-items:flex-start;align-self:stretch;border-block-start:1px solid var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1)}.container{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-color-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{z-index:var(--calcite-z-index-header);display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);border-block-end:var(--calcite-panel-header-border-block-end, 1px solid var(--calcite-color-border-3))}.header-container{display:flex;inline-size:100%;flex-direction:row;align-items:stretch;justify-content:flex-start;flex:0 0 auto}.header-container--border-end{border-block-end:1px solid var(--calcite-color-border-3)}.action-bar-container{inline-size:100%}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{color:var(--calcite-color-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{display:flex;block-size:100%;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;overflow:auto;background-color:var(--calcite-color-background)}.content-top,.content-bottom{padding:var(--calcite-internal-panel-default-padding)}.header-content{padding-block:var(--calcite-internal-panel-header-vertical-padding);padding-inline:var(--calcite-internal-panel-default-padding)}.footer{margin-block-start:auto;display:flex;flex-direction:row;align-content:space-between;align-items:center;justify-content:center;background-color:var(--calcite-color-foreground-1);font-size:var(--calcite-font-size--2);line-height:1.375;border-block-start:1px solid var(--calcite-color-border-3);padding:var(--calcite-panel-footer-padding, var(--calcite-internal-panel-default-padding))}.footer-content{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:center}.footer-actions{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:space-evenly;gap:var(--calcite-internal-panel-default-padding)}.footer-start{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:flex-start;margin-inline-end:auto;gap:var(--calcite-internal-panel-default-padding)}.footer-end{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:flex-end;margin-inline-start:auto;gap:var(--calcite-internal-panel-default-padding)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}:host([hidden]){display:none}[hidden]{display:none}",X=V,Y=k(class extends E{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePanelClose=u(this,"calcitePanelClose",6),this.calcitePanelToggle=u(this,"calcitePanelToggle",6),this.calcitePanelScroll=u(this,"calcitePanelScroll",6),this.resizeObserver=I("resize",()=>this.resizeHandler()),this.resizeHandler=()=>{const{panelScrollEl:e}=this;!e||typeof e.scrollHeight!="number"||typeof e.offsetHeight!="number"||(e.tabIndex=e.scrollHeight>e.offsetHeight?0:-1)},this.setContainerRef=e=>{this.containerEl=e},this.panelKeyDownHandler=e=>{this.closable&&e.key==="Escape"&&!e.defaultPrevented&&(this.handleUserClose(),e.preventDefault())},this.handleUserClose=()=>{this.closed=!0,this.calcitePanelClose.emit()},this.open=()=>{this.isClosed=!1},this.close=async()=>{const e=this.beforeClose??(()=>Promise.resolve());try{await e()}catch{requestAnimationFrame(()=>{this.closed=!1});return}this.isClosed=!0},this.collapse=()=>{this.collapsed=!this.collapsed,this.calcitePanelToggle.emit()},this.panelScrollHandler=()=>{this.calcitePanelScroll.emit()},this.handleHeaderActionsStartSlotChange=e=>{this.hasStartActions=r(e)},this.handleHeaderActionsEndSlotChange=e=>{this.hasEndActions=r(e)},this.handleHeaderMenuActionsSlotChange=e=>{this.hasMenuItems=r(e)},this.handleActionBarSlotChange=e=>{const n=v(e).filter(o=>o==null?void 0:o.matches("calcite-action-bar"));n.forEach(o=>o.layout="horizontal"),this.hasActionBar=!!n.length},this.handleHeaderContentSlotChange=e=>{this.hasHeaderContent=r(e)},this.handleFabSlotChange=e=>{this.hasFab=r(e)},this.handleFooterActionsSlotChange=e=>{this.hasFooterActions=r(e)},this.handleFooterEndSlotChange=e=>{this.hasFooterEndContent=r(e)},this.handleFooterStartSlotChange=e=>{this.hasFooterStartContent=r(e)},this.handleFooterSlotChange=e=>{this.hasFooterContent=r(e)},this.contentBottomSlotChangeHandler=e=>{this.hasContentBottom=r(e)},this.contentTopSlotChangeHandler=e=>{this.hasContentTop=r(e)},this.setPanelScrollEl=e=>{var n,o;this.panelScrollEl=e,(n=this.resizeObserver)==null||n.disconnect(),e&&((o=this.resizeObserver)==null||o.observe(e),this.resizeHandler())},this.handleAlertsSlotChange=e=>{var n;(n=v(e))==null||n.map(o=>{o.nodeName==="CALCITE-ALERT"&&(o.embedded=!0)})},this.beforeClose=void 0,this.closed=!1,this.disabled=!1,this.closable=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.headingLevel=void 0,this.loading=!1,this.heading=void 0,this.description=void 0,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.overlayPositioning="absolute",this.scale="m",this.isClosed=!1,this.hasStartActions=!1,this.hasEndActions=!1,this.hasMenuItems=!1,this.hasHeaderContent=!1,this.hasActionBar=!1,this.hasContentBottom=!1,this.hasContentTop=!1,this.hasFab=!1,this.hasFooterActions=!1,this.hasFooterContent=!1,this.hasFooterEndContent=!1,this.hasFooterStartContent=!1,this.defaultMessages=void 0,this.effectiveLocale="",this.showHeaderContent=!1}toggleDialog(e){e?this.close():this.open()}onMessagesChange(){}connectedCallback(){w(this),$(this),N(this)}async componentWillLoad(){L(this),await R(this)}componentDidLoad(){P(this)}componentDidRender(){F(this)}disconnectedCallback(){var e;B(this),U(this),_(this),(e=this.resizeObserver)==null||e.disconnect()}effectiveLocaleChange(){K(this,this.effectiveLocale)}async setFocus(){await M(this),z(this.containerEl)}async scrollContentTo(e){var n;(n=this.panelScrollEl)==null||n.scrollTo(e)}renderHeaderContent(){const{heading:e,headingLevel:n,description:o,hasHeaderContent:s}=this,l=e?t(j,{class:a.heading,level:n},e):null,c=o?t("span",{class:a.description},o):null;return!s&&(l||c)?t("div",{class:a.headerContent,key:"header-content"},l,c):null}renderActionBar(){return t("div",{class:a.actionBarContainer,hidden:!this.hasActionBar},t("slot",{name:i.actionBar,onSlotchange:this.handleActionBarSlotChange}))}renderHeaderSlottedContent(){return t("div",{class:a.headerContent,hidden:!this.hasHeaderContent,key:"slotted-header-content"},t("slot",{name:i.headerContent,onSlotchange:this.handleHeaderContentSlotChange}))}renderHeaderStartActions(){const{hasStartActions:e}=this;return t("div",{class:{[a.headerActionsStart]:!0,[a.headerActions]:!0},hidden:!e,key:"header-actions-start"},t("slot",{name:i.headerActionsStart,onSlotchange:this.handleHeaderActionsStartSlotChange}))}renderHeaderActionsEnd(){const{hasEndActions:e,messages:n,closable:o,collapsed:s,collapseDirection:l,collapsible:c,hasMenuItems:f}=this,{collapse:d,expand:h,close:g}=n,m=[p.expand,p.collapse];l==="up"&&m.reverse();const b=c?t("calcite-action",{"aria-expanded":x(!s),"aria-label":d,"data-test":"collapse",icon:s?m[0]:m[1],onClick:this.collapse,scale:this.scale,text:d,title:s?h:d}):null,C=o?t("calcite-action",{"aria-label":g,"data-test":"close",icon:p.close,onClick:this.handleUserClose,scale:this.scale,text:g,title:g}):null,y=t("slot",{name:i.headerActionsEnd,onSlotchange:this.handleHeaderActionsEndSlotChange}),A=e||b||C||f;return t("div",{class:{[a.headerActionsEnd]:!0,[a.headerActions]:!0},hidden:!A,key:"header-actions-end"},y,this.renderMenu(),b,C)}renderMenu(){const{hasMenuItems:e,messages:n,menuOpen:o}=this;return t("calcite-action-menu",{flipPlacements:["top","bottom"],hidden:!e,key:"menu",label:n.options,open:o,overlayPositioning:this.overlayPositioning,placement:"bottom-end"},t("calcite-action",{icon:p.menu,scale:this.scale,slot:D.trigger,text:n.options}),t("slot",{name:i.headerMenuActions,onSlotchange:this.handleHeaderMenuActionsSlotChange}))}renderHeaderNode(){const{hasHeaderContent:e,hasStartActions:n,hasEndActions:o,closable:s,collapsible:l,hasMenuItems:c,hasActionBar:f}=this,d=this.renderHeaderContent(),h=e||!!d||n||o||l||s||c;return this.showHeaderContent=h,t("header",{class:a.header,hidden:!(h||f)},t("div",{class:{[a.headerContainer]:!0,[a.headerContainerBorderEnd]:f},hidden:!h},this.renderHeaderStartActions(),this.renderHeaderSlottedContent(),d,this.renderHeaderActionsEnd()),this.renderActionBar(),this.renderContentTop())}renderFooterNode(){const{hasFooterEndContent:e,hasFooterStartContent:n,hasFooterContent:o,hasFooterActions:s}=this,l=n||e||o||s;return t("footer",{class:a.footer,hidden:!l},t("div",{class:a.footerContent,hidden:!o},t("slot",{name:i.footer,onSlotchange:this.handleFooterSlotChange})),t("div",{class:a.footerStart,hidden:o||!n},t("slot",{name:i.footerStart,onSlotchange:this.handleFooterStartSlotChange})),t("div",{class:a.footerEnd,hidden:o||!e},t("slot",{name:i.footerEnd,onSlotchange:this.handleFooterEndSlotChange})),t("div",{class:a.footerActions,hidden:o||!s},t("slot",{key:"footer-actions-slot",name:i.footerActions,onSlotchange:this.handleFooterActionsSlotChange})))}renderContent(){return t("div",{class:a.contentWrapper,hidden:this.collapsible&&this.collapsed,onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},t("slot",null),this.renderFab())}renderContentBottom(){return t("div",{class:a.contentBottom,hidden:!this.hasContentBottom},t("slot",{name:i.contentBottom,onSlotchange:this.contentBottomSlotChangeHandler}))}renderContentTop(){return t("div",{class:a.contentTop,hidden:!this.hasContentTop},t("slot",{name:i.contentTop,onSlotchange:this.contentTopSlotChangeHandler}))}renderFab(){return t("div",{class:a.fabContainer,hidden:!this.hasFab},t("slot",{name:i.fab,onSlotchange:this.handleFabSlotChange}))}render(){const{disabled:e,loading:n,panelKeyDownHandler:o,isClosed:s,closable:l}=this,c=t("article",{key:"25995bcd854feaf5afc8b2e102a174888dc8d2ef","aria-busy":x(n),class:a.container,hidden:s,ref:this.setContainerRef,tabIndex:l?0:-1},this.renderHeaderNode(),this.renderContent(),this.renderContentBottom(),this.renderFooterNode(),t("slot",{key:"alerts",name:i.alerts,onSlotchange:this.handleAlertsSlotChange}));return t(H,{key:"e7e752bb4e0b2fff709c1eb09825d0a213603480",onKeyDown:o},t(T,{key:"6b3d4ffd41ddc7c36a02ff692e7c8e16808ef001",disabled:e},n?t("calcite-scrim",{loading:n}):null,c))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{closed:["toggleDialog"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return X}},[1,"calcite-panel",{beforeClose:[16],closed:[1540],disabled:[516],closable:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],headingLevel:[514,"heading-level"],loading:[516],heading:[1],description:[1],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],overlayPositioning:[513,"overlay-positioning"],scale:[513],isClosed:[32],hasStartActions:[32],hasEndActions:[32],hasMenuItems:[32],hasHeaderContent:[32],hasActionBar:[32],hasContentBottom:[32],hasContentTop:[32],hasFab:[32],hasFooterActions:[32],hasFooterContent:[32],hasFooterEndContent:[32],hasFooterStartContent:[32],defaultMessages:[32],effectiveLocale:[32],showHeaderContent:[32],setFocus:[64],scrollContentTo:[64]},void 0,{closed:["toggleDialog"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function Z(){if(typeof customElements>"u")return;["calcite-panel","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover","calcite-scrim"].forEach(e=>{switch(e){case"calcite-panel":customElements.get(e)||customElements.define(e,Y);break;case"calcite-action":customElements.get(e)||W();break;case"calcite-action-menu":customElements.get(e)||O();break;case"calcite-icon":customElements.get(e)||q();break;case"calcite-loader":customElements.get(e)||G();break;case"calcite-popover":customElements.get(e)||J();break;case"calcite-scrim":customElements.get(e)||Q();break}})}Z();export{Y as P,i as S,Z as d};