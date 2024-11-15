/*! For license information please see 52364.d2d8cd1e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[52364],{52364:(e,t,i)=>{i.r(t),i.d(t,{calcite_alert:()=>F});var s=i(22737),o=i(28716),n=i(9057),a=i(98563),l=i(99398),r=i(42277),c=i(67928),d=i(84751);i(73364),i(57922),i(68385);const h={slow:14e3,medium:1e4,fast:6e3},u="actions-end",m="title",g="message",f="link",p="actions-end",b="close",v="container",k="container--active",w="dismiss-progress",y="icon",x="container--embedded",C="queue-count",z="queue-count--active",T="text-container",A="focused";const B=new class{constructor(){this.registeredElements=[],this.queueTimeoutId=null}registerElement(e){const{registeredElements:t}=this;if(!t.includes(e)){switch(e.queue){case"immediate":t.unshift(e);break;case"next":t.splice(1,0,e);break;case"last":t.push(e)}this.updateAlerts()}}unregisterElement(e){const{registeredElements:t}=this,i=t.indexOf(e);-1!==i&&t.splice(i,1),e.active=!1,this.updateAlerts()}updateAlerts(){window.clearTimeout(this.queueTimeoutId),this.queueTimeoutId=null,this.registeredElements.forEach(((e,t)=>{e.openAlertCount=this.registeredElements.length,0===t?this.queueTimeoutId=window.setTimeout((()=>e.active=!0),300):e.active=!1}))}},F=class{constructor(e){(0,s.r)(this,e),this.calciteAlertBeforeClose=(0,s.c)(this,"calciteAlertBeforeClose",6),this.calciteAlertClose=(0,s.c)(this,"calciteAlertClose",6),this.calciteAlertBeforeOpen=(0,s.c)(this,"calciteAlertBeforeOpen",6),this.calciteAlertOpen=(0,s.c)(this,"calciteAlertOpen",6),this.handleKeyBoardFocus=()=>{this.isFocused=!0,this.handleFocus()},this.handleKeyBoardBlur=()=>{this.isFocused=!1,this.isHovered||this.handleBlur()},this.autoCloseTimeoutId=null,this.totalOpenTime=0,this.totalHoverTime=0,this.openTransitionProp="opacity",this.setTransitionEl=e=>{this.transitionEl=e},this.closeAlert=()=>{this.open=!1,this.clearAutoCloseTimeout()},this.actionsEndSlotChangeHandler=e=>{this.hasEndActions=(0,o.b)(e)},this.handleMouseOver=()=>{this.isHovered=!0,this.handleFocus()},this.handleMouseLeave=()=>{this.isHovered=!1,this.isFocused||this.handleBlur()},this.handleFocus=()=>{this.clearAutoCloseTimeout(),this.totalOpenTime=Date.now()-this.initialOpenTime,this.lastMouseOverBegin=Date.now()},this.handleBlur=()=>{const e=Date.now()-this.lastMouseOverBegin,t=h[this.autoCloseDuration]-this.totalOpenTime+this.totalHoverTime;this.totalHoverTime=this.totalHoverTime?e+this.totalHoverTime:e,this.autoCloseTimeoutId=window.setTimeout((()=>this.closeAlert()),t)},this.active=!1,this.openAlertCount=0,this.open=!1,this.autoClose=!1,this.autoCloseDuration="medium",this.embedded=!1,this.kind="brand",this.icon=void 0,this.iconFlipRtl=!1,this.label=void 0,this.numberingSystem=void 0,this.placement="bottom",this.scale="m",this.messages=void 0,this.messageOverrides=void 0,this.queue="last",this.defaultMessages=void 0,this.effectiveLocale="",this.numberStringFormatter=new l.N,this.hasEndActions=!1,this.isFocused=!1}handleActiveChange(){this.clearAutoCloseTimeout(),this.active&&this.autoClose&&!this.autoCloseTimeoutId&&(this.initialOpenTime=Date.now(),this.autoCloseTimeoutId=window.setTimeout((()=>this.closeAlert()),h[this.autoCloseDuration]))}openHandler(){(0,r.o)(this),this.open?B.registerElement(this.el):B.unregisterElement(this.el)}updateDuration(){this.autoClose&&this.autoCloseTimeoutId&&(this.clearAutoCloseTimeout(),this.autoCloseTimeoutId=window.setTimeout((()=>this.closeAlert()),h[this.autoCloseDuration]))}onMessagesChange(){}handleQueueChange(){this.open&&(B.unregisterElement(this.el),B.registerElement(this.el))}connectedCallback(){(0,l.c)(this),(0,c.c)(this);this.open&&B.registerElement(this.el),this.numberStringFormatter.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,signDisplay:"always"}}async componentWillLoad(){(0,a.s)(this),await(0,c.s)(this),this.open&&(0,r.o)(this)}componentDidLoad(){(0,a.a)(this)}disconnectedCallback(){B.unregisterElement(this.el),this.clearAutoCloseTimeout(),(0,l.d)(this),(0,c.d)(this),this.embedded=!1}render(){const{open:e,autoClose:t,label:i,placement:n,active:a,openAlertCount:l}=this,r=t?"alert":"alertdialog",c=!e,h=(0,o.h)(d.K,this.icon,this.kind),u=l>1;return(0,s.h)(s.H,{key:"cecedeaa678e4f6e22fd2aabc4d29bc8589430f6","aria-hidden":(0,o.t)(c),"aria-label":i,"calcite-hydrated-hidden":c,role:r},(0,s.h)("div",{key:"ca85d5f5ec313f3a305e01dcc8cbbad9647dd516",class:{[v]:!0,[k]:a,[`${v}--${n}`]:!0,[x]:this.embedded,[A]:this.isFocused},onPointerEnter:this.autoClose&&this.autoCloseTimeoutId?this.handleMouseOver:null,onPointerLeave:this.autoClose?this.handleMouseLeave:null,ref:this.setTransitionEl},h&&this.renderIcon(h),(0,s.h)("div",{key:"1f72f255c3e0630eed63bb62d3d50f4a2ba6a528",class:T,onFocusin:this.autoClose&&this.autoCloseTimeoutId?this.handleKeyBoardFocus:null,onFocusout:this.autoClose?this.handleKeyBoardBlur:null},(0,s.h)("slot",{key:"aade607960adea0a10f5eac85b119444085c9cf9",name:m}),(0,s.h)("slot",{key:"1f47158cfbf8c0626cd49246142fb750311b1d4a",name:g}),(0,s.h)("slot",{key:"5ba06e024b517f23168311828cc8ce41c21926a6",name:f})),this.renderActionsEnd(),u?this.renderQueueCount():null,this.renderCloseButton(),e&&a&&t?(0,s.h)("div",{class:w}):null))}renderCloseButton(){return(0,s.h)("button",{"aria-label":this.messages.close,class:b,key:"close",onClick:this.closeAlert,onFocusin:this.autoClose?this.handleKeyBoardFocus:null,onFocusout:this.autoClose?this.handleKeyBoardBlur:null,ref:e=>this.closeButton=e,type:"button"},(0,s.h)("calcite-icon",{icon:"x",scale:(0,n.g)(this.scale)}))}renderQueueCount(){const{openAlertCount:e}=this,t=e>2?e-1:1,i=this.numberStringFormatter.numberFormatter.format(t);return(0,s.h)("div",{class:{[C]:!0,[z]:e>1},key:"queue-count"},(0,s.h)("calcite-chip",{scale:this.scale,value:i},i))}renderActionsEnd(){return(0,s.h)("div",{class:p},(0,s.h)("slot",{name:u,onSlotchange:this.actionsEndSlotChangeHandler}))}renderIcon(e){return(0,s.h)("div",{class:y},(0,s.h)("calcite-icon",{flipRtl:this.iconFlipRtl,icon:e,scale:(0,n.g)(this.scale)}))}async setFocus(){await(0,a.c)(this);const e=(0,o.e)(this.el,{selector:"calcite-link"});if(this.closeButton||e)return e?e.setFocus():void(this.closeButton&&this.closeButton.focus())}effectiveLocaleChange(){(0,c.u)(this,this.effectiveLocale),this.numberStringFormatter.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,signDisplay:"always"}}numberingSystemChange(){this.numberStringFormatter.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,signDisplay:"always"}}clearAutoCloseTimeout(){window.clearTimeout(this.autoCloseTimeoutId),this.autoCloseTimeoutId=null}onBeforeOpen(){this.calciteAlertBeforeOpen.emit()}onOpen(){this.calciteAlertOpen.emit()}onBeforeClose(){this.calciteAlertBeforeClose.emit()}onClose(){this.calciteAlertClose.emit()}static get assetsDirs(){return["assets"]}get el(){return(0,s.g)(this)}static get watchers(){return{active:["handleActiveChange"],open:["openHandler"],autoCloseDuration:["updateDuration"],messageOverrides:["onMessagesChange"],queue:["handleQueueChange"],effectiveLocale:["effectiveLocaleChange"],numberingSystem:["numberingSystemChange"]}}};F.style=':host{--calcite-internal-alert-edge-distance:2rem;display:block;inline-size:var(--calcite-alert-width)}.container{pointer-events:none;position:fixed;z-index:var(--calcite-z-index-toast);margin-inline:auto;margin-block:0px;box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:min-content;align-items:center;justify-content:center;text-align:start;opacity:0;--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--calcite-alert-shadow, var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-shadow));background-color:var(--calcite-alert-background-color, var(--calcite-color-foreground-1));border-radius:var(--calcite-alert-corner-radius, var(--calcite-border-radius));border-block-start:0 solid transparent;border-inline:1px solid var(--calcite-color-border-3);border-block-end:1px solid var(--calcite-color-border-3);max-inline-size:calc(100% - var(--calcite-internal-alert-edge-distance) * 2);transition:opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), all var(--calcite-animation-timing) ease-in-out}.container--bottom,.container--top{inset-inline-end:0;inset-inline-start:0}.container[class*=bottom]{transform:translate3d(0, var(--calcite-internal-alert-edge-distance), 0);inset-block-end:var(--calcite-internal-alert-edge-distance)}.container[class*=top]{transform:translate3d(0, calc(-1 * var(--calcite-internal-alert-edge-distance)), 0);inset-block-start:var(--calcite-internal-alert-edge-distance)}.container[class*=start]{inset-inline-start:var(--calcite-internal-alert-edge-distance);inset-inline-end:auto}.container[class*=end]{inset-inline-end:var(--calcite-internal-alert-edge-distance);inset-inline-start:auto}.icon{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0px;margin-block:auto;margin-inline-end:auto}.close{display:flex;cursor:pointer;align-items:center;justify-content:flex-end;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-color-text-3);outline:2px solid transparent;outline-offset:2px;-webkit-appearance:none;border-start-end-radius:var(--calcite-alert-corner-radius, var(--calcite-border-radius));border-end-end-radius:var(--calcite-alert-corner-radius, var(--calcite-border-radius));outline-color:transparent}.close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.close:hover,.close:focus{color:var(--calcite-color-text-1);background-color:var(--calcite-color-foreground-2)}.close:active{background-color:var(--calcite-color-foreground-3)}.queue-count{visibility:hidden;display:flex;min-inline-size:min-content;cursor:default;align-items:center;justify-content:space-around;align-self:stretch;overflow:hidden;text-align:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2);opacity:0;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline:0 solid transparent;border-start-end-radius:0}.queue-count--active{visibility:visible;opacity:1}.dismiss-progress{position:absolute;display:block;inline-size:100%;overflow:hidden;inset-inline:0;inset-block-start:-2px;block-size:2px;border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}.dismiss-progress::after{position:absolute;inset-block-start:0px;display:block;block-size:2px;content:"";background-color:var(--calcite-color-transparent-tint);inset-inline-end:0}.actions-end{display:flex;align-self:stretch}.text-container{box-sizing:border-box;display:flex;min-inline-size:0px;flex:1 1 auto;flex-direction:column;overflow-wrap:break-word}.footer{position:relative;display:flex;inline-size:auto;justify-content:flex-end;align-self:stretch;padding-block-start:1px;block-size:inherit}:host([scale=s]) slot[name=title]::slotted(*),:host([scale=s]) *::slotted([slot=title]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) slot[name=message]::slotted(*),:host([scale=s]) *::slotted([slot=message]){font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) slot[name=link]::slotted(*),:host([scale=s]) *::slotted([slot=link]){font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .queue-count{margin-inline:0.5rem}:host([scale=s]) .container{--calcite-internal-alert-min-height:3.5rem;inline-size:var(--calcite-alert-width, 40em)}:host([scale=s]) .close{padding:0.75rem}:host([scale=s]) .icon{padding-inline-start:0.75rem}:host([scale=s]) .text-container{padding-block:0.5rem;padding-inline:0.75rem 0.5rem}:host([scale=m]) slot[name=title]::slotted(*),:host([scale=m]) *::slotted([slot=title]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) slot[name=message]::slotted(*),:host([scale=m]) *::slotted([slot=message]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) slot[name=link]::slotted(*),:host([scale=m]) *::slotted([slot=link]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .queue-count{margin-inline:0.75rem}:host([scale=m]) .container{--calcite-internal-alert-min-height:4.1875rem;inline-size:var(--calcite-alert-width, 50em)}:host([scale=m]) .close{padding:1rem}:host([scale=m]) .icon{padding-inline-start:1rem}:host([scale=m]) .text-container{padding-block:0.75rem;padding-inline:1rem 0.75rem}:host([scale=l]) slot[name=title]::slotted(*),:host([scale=l]) *::slotted([slot=title]){margin-block-end:0.25rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) slot[name=message]::slotted(*),:host([scale=l]) *::slotted([slot=message]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) slot[name=link]::slotted(*),:host([scale=l]) *::slotted([slot=link]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .queue-count{margin-inline:1rem}:host([scale=l]) .container{--calcite-internal-alert-min-height:5.625rem;inline-size:var(--calcite-alert-width, 60em)}:host([scale=l]) .close{padding:1.25rem}:host([scale=l]) .icon{padding-inline-start:1.25rem}:host([scale=l]) .text-container{padding-block:1rem;padding-inline:1.25rem 1rem}:host([open]) .container--active{border-block-start-width:2px;opacity:1;pointer-events:initial}:host([open]) .container--active[class*=bottom]{transform:translate3d(0, calc(-1 * var(--calcite-internal-alert-edge-distance)), inherit)}:host([open]) .container--active[class*=top]{transform:translate3d(0, var(--calcite-internal-alert-edge-distance), inherit)}:host([auto-close])>.queue-count{border-inline-end:0 solid transparent}slot[name=title]::slotted(*),*::slotted([slot=title]){font-size:var(--calcite-font-size-0);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}slot[name=message]::slotted(*),*::slotted([slot=message]){margin:0px;display:inline;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-normal);margin-inline-end:0.5rem;color:var(--calcite-color-text-2)}slot[name=link]::slotted(*),*::slotted([slot=link]){display:inline-flex;color:var(--calcite-color-text-link)}:host([kind=brand]) .container{border-block-start-color:var(--calcite-color-brand)}:host([kind=brand]) .container .icon{color:var(--calcite-color-brand)}:host([kind=info]) .container{border-block-start-color:var(--calcite-color-status-info)}:host([kind=info]) .container .icon{color:var(--calcite-color-status-info)}:host([kind=danger]) .container{border-block-start-color:var(--calcite-color-status-danger)}:host([kind=danger]) .container .icon{color:var(--calcite-color-status-danger)}:host([kind=success]) .container{border-block-start-color:var(--calcite-color-status-success)}:host([kind=success]) .container .icon{color:var(--calcite-color-status-success)}:host([kind=warning]) .container{border-block-start-color:var(--calcite-color-status-warning)}:host([kind=warning]) .container .icon{color:var(--calcite-color-status-warning)}:host([auto-close-duration=fast]) .dismiss-progress:after{animation:dismissProgress 6000ms ease-out}:host(:hover[auto-close-duration=fast]) .dismiss-progress:after,:host(:focus[auto-close-duration=fast]) .dismiss-progress:after{animation-play-state:paused}:host([auto-close-duration=medium]) .dismiss-progress:after{animation:dismissProgress 10000ms ease-out}:host(:hover[auto-close-duration=medium]) .dismiss-progress:after,:host(:focus[auto-close-duration=medium]) .dismiss-progress:after{animation-play-state:paused}:host([auto-close-duration=slow]) .dismiss-progress:after{animation:dismissProgress 14000ms ease-out}:host(:hover[auto-close-duration=slow]) .dismiss-progress:after,:host(:focus[auto-close-duration=slow]) .dismiss-progress:after{animation-play-state:paused}.container.focused .dismiss-progress::after{animation-play-state:paused}@keyframes dismissProgress{0%{inline-size:0px;opacity:0.75}100%{inline-size:100%;opacity:1}}.container--embedded{position:absolute}:host([hidden]){display:none}[hidden]{display:none}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}'},9057:(e,t,i)=>{function s(e){return"l"===e?"m":"s"}async function o(e){await(function(e){return"function"===typeof e.componentOnReady}(e)?e.componentOnReady():new Promise((e=>requestAnimationFrame((()=>e())))))}i.d(t,{c:()=>o,g:()=>s})},98563:(e,t,i)=>{i.d(t,{a:()=>r,b:()=>c,c:()=>d,s:()=>l});var s=i(22737),o=i(57922);const n=new WeakMap,a=new WeakMap;function l(e){a.set(e,new Promise((t=>n.set(e,t))))}function r(e){n.get(e)()}function c(e){return a.get(e)}async function d(e){if(await c(e),(0,o.i)())return(0,s.f)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},42277:(e,t,i)=>{i.d(t,{o:()=>l});var s=i(22737),o=i(28716);const n=s.e;function a(e){return"opened"in e?e.opened:e.open}function l(e){n((()=>{e.transitionEl&&(0,o.w)(e.transitionEl,e.openTransitionProp,(()=>{a(e)?e.onBeforeOpen():e.onBeforeClose()}),(()=>{a(e)?e.onOpen():e.onClose()}))}))}},84751:(e,t,i)=>{i.d(t,{K:()=>s});const s={brand:"lightbulb",danger:"exclamationMarkTriangle",info:"information",success:"checkCircle",warning:"exclamationMarkTriangle"}},67928:(e,t,i)=>{i.d(t,{c:()=>m,d:()=>g,s:()=>d,u:()=>u});var s=i(22737),o=i(99398),n=i(57922);const a={};function l(){throw new Error("could not fetch component message bundle")}function r(e){e.messages={...e.defaultMessages,...e.messageOverrides}}function c(){}async function d(e){e.defaultMessages=await h(e,e.effectiveLocale),r(e)}async function h(e,t){if(!(0,n.i)())return{};const{el:i}=e,r=i.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const i=`${t}_${e}`;return a[i]||(a[i]=fetch((0,s.a)(`./assets/${t}/t9n/messages_${e}.json`)).then((e=>(e.ok||l(),e.json()))).catch((()=>l()))),a[i]}((0,o.g)(t,"t9n"),r)}async function u(e,t){e.defaultMessages=await h(e,t),r(e)}function m(e){e.onMessagesChange=f}function g(e){e.onMessagesChange=c}function f(){r(this)}}}]);
//# sourceMappingURL=52364.d2d8cd1e.chunk.js.map