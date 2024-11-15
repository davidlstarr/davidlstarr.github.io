/*! For license information please see 18764.af3d515b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[18764],{18764:(e,t,n)=>{n.r(t),n.d(t,{calcite_action_group:()=>d});var o=n(22737),s=n(76904),a=n(98563),i=n(99398),c=n(67928),l=n(62146),r=n(28716),u=n(758);n(68385),n(57922),n(73364);const d=class{constructor(e){(0,o.r)(this,e),this.setMenuOpen=e=>{this.menuOpen=!!e.target.open},this.handleMenuActionsSlotChange=e=>{this.hasMenuActions=(0,r.b)(e)},this.expanded=!1,this.label=void 0,this.layout="vertical",this.columns=void 0,this.menuOpen=!1,this.overlayPositioning="absolute",this.scale=void 0,this.menuFlipPlacements=void 0,this.menuPlacement=void 0,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale="",this.defaultMessages=void 0,this.hasMenuActions=!1}expandedHandler(){this.menuOpen=!1}onMessagesChange(){}effectiveLocaleChange(){(0,c.u)(this,this.effectiveLocale)}async setFocus(){await(0,a.c)(this),this.el.focus()}connectedCallback(){(0,i.c)(this),(0,c.c)(this),(0,s.c)(this)}disconnectedCallback(){(0,i.d)(this),(0,c.d)(this),(0,s.d)(this)}async componentWillLoad(){(0,a.s)(this),await(0,c.s)(this)}componentDidLoad(){(0,a.a)(this)}renderMenu(){const{expanded:e,menuOpen:t,scale:n,layout:s,messages:a,overlayPositioning:i,hasMenuActions:c,menuFlipPlacements:r,menuPlacement:d}=this;return(0,o.h)("calcite-action-menu",{expanded:e,flipPlacements:r??("horizontal"===s?["top","bottom"]:["left","right"]),hidden:!c,label:a.more,onCalciteActionMenuOpen:this.setMenuOpen,open:t,overlayPositioning:i,placement:d??("horizontal"===s?"bottom-start":"leading-start"),scale:n},(0,o.h)("calcite-action",{icon:u.I.menu,scale:n,slot:l.S.trigger,text:a.more,textEnabled:e}),(0,o.h)("slot",{name:u.S.menuActions,onSlotchange:this.handleMenuActionsSlotChange}),(0,o.h)("slot",{name:u.S.menuTooltip,slot:l.S.tooltip}))}render(){return(0,o.h)("div",{key:"8143606c5745053f15140f34ff5ea375a683325f","aria-label":this.label,class:u.C.container,role:"group"},(0,o.h)("slot",{key:"e8c2821b9ce2e9d0293478989fc31d24f043f9c3"}),this.renderMenu())}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return(0,o.g)(this)}static get watchers(){return{expanded:["expandedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};d.style=':host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:flex;flex-direction:column;padding:0px;background-color:transparent;border-color:var(--calcite-action-group-border-color, var(--calcite-color-border-3));border-style:solid;border-width:0}.container{display:flex;flex-grow:1;flex-direction:column}:host([columns="1"]){--calcite-internal-action-group-columns:1}:host([columns="2"]){--calcite-internal-action-group-columns:2}:host([columns="3"]){--calcite-internal-action-group-columns:3}:host([columns="4"]){--calcite-internal-action-group-columns:4}:host([columns="5"]){--calcite-internal-action-group-columns:5}:host([columns="6"]){--calcite-internal-action-group-columns:6}:host(:first-child){padding-block-start:0px}:host([layout=horizontal]),:host([layout=horizontal]) .container{flex-direction:row}:host([layout=grid]){display:grid}:host([layout=grid]) .container{display:grid;place-content:stretch;background-color:transparent;grid-template-columns:repeat(var(--calcite-action-group-columns, var(--calcite-internal-action-group-columns, 3)), auto);gap:var(--calcite-action-group-gap, 1px);padding:var(--calcite-action-group-gap, 1px)}:host([hidden]){display:none}[hidden]{display:none}'},76904:(e,t,n)=>{n.d(t,{c:()=>c,d:()=>l});var o=n(22737),s=n(68385);let a;const i={childList:!0};function c(e){a||(a=(0,s.c)("mutation",r)),a.observe(e.el,i)}function l(e){a.unobserve(e.el)}function r(e){e.forEach((e=>{let{target:t}=e;(0,o.f)(t)}))}},98563:(e,t,n)=>{n.d(t,{a:()=>l,b:()=>r,c:()=>u,s:()=>c});var o=n(22737),s=n(57922);const a=new WeakMap,i=new WeakMap;function c(e){i.set(e,new Promise((t=>a.set(e,t))))}function l(e){a.get(e)()}function r(e){return i.get(e)}async function u(e){if(await r(e),(0,s.i)())return(0,o.f)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},758:(e,t,n)=>{n.d(t,{C:()=>a,I:()=>s,S:()=>o});const o={menuActions:"menu-actions",menuTooltip:"menu-tooltip"},s={menu:"ellipsis"},a={container:"container"}},62146:(e,t,n)=>{n.d(t,{C:()=>o,I:()=>a,S:()=>s,a:()=>i});const o={menu:"menu",defaultTrigger:"default-trigger"},s={tooltip:"tooltip",trigger:"trigger"},a={menu:"ellipsis"},i="data-active"},67928:(e,t,n)=>{n.d(t,{c:()=>g,d:()=>p,s:()=>u,u:()=>h});var o=n(22737),s=n(99398),a=n(57922);const i={};function c(){throw new Error("could not fetch component message bundle")}function l(e){e.messages={...e.defaultMessages,...e.messageOverrides}}function r(){}async function u(e){e.defaultMessages=await d(e,e.effectiveLocale),l(e)}async function d(e,t){if(!(0,a.i)())return{};const{el:n}=e,l=n.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const n=`${t}_${e}`;return i[n]||(i[n]=fetch((0,o.a)(`./assets/${t}/t9n/messages_${e}.json`)).then((e=>(e.ok||c(),e.json()))).catch((()=>c()))),i[n]}((0,s.g)(t,"t9n"),l)}async function h(e,t){e.defaultMessages=await d(e,t),l(e)}function g(e){e.onMessagesChange=m}function p(e){e.onMessagesChange=r}function m(){l(this)}}}]);
//# sourceMappingURL=18764.af3d515b.chunk.js.map