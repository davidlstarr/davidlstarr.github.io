/*! For license information please see 29890.d35b18a3.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[29890],{29890:(t,e,i)=>{i.r(e),i.d(e,{calcite_action:()=>C});var n=i(22737),o=i(28716),a=i(43914),c=i(76055),r=i(98563),s=i(99398),l=i(68385),d=i(9057),u=i(67928),h=i(57922);i(73364);const b="button",v="button--text-visible",f="button--compact",g="indicator-text",p="icon-container",m="slot-container",x="slot-container--hidden",y="text-container",k="text-container--visible",w="indicator-with-icon",z="indicator-without-icon",E="tooltip",C=class{constructor(t){(0,n.r)(this,t),this.mutationObserver=(0,l.c)("mutation",(()=>(0,n.f)(this))),this.guid=`calcite-action-${(0,a.g)()}`,this.indicatorId=`${this.guid}-indicator`,this.buttonId=`${this.guid}-button`,this.handleTooltipSlotChange=t=>{const e=t.target.assignedElements({flatten:!0}).filter((t=>t?.matches("calcite-tooltip")))[0];e&&(e.referenceElement=this.buttonEl)},this.active=!1,this.alignment=void 0,this.appearance="solid",this.compact=!1,this.disabled=!1,this.icon=void 0,this.iconFlipRtl=!1,this.indicator=!1,this.label=void 0,this.loading=!1,this.scale="m",this.text=void 0,this.textEnabled=!1,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale="",this.defaultMessages=void 0}onMessagesChange(){}effectiveLocaleChange(){(0,u.u)(this,this.effectiveLocale)}connectedCallback(){(0,s.c)(this),(0,u.c)(this),this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0})}async componentWillLoad(){(0,r.s)(this),(0,h.i)()&&await(0,u.s)(this)}componentDidLoad(){(0,r.a)(this)}disconnectedCallback(){(0,s.d)(this),(0,u.d)(this),this.mutationObserver?.disconnect()}componentDidRender(){(0,c.u)(this)}async setFocus(){await(0,r.c)(this),this.buttonEl?.focus()}renderTextContainer(){const{text:t,textEnabled:e}=this,i={[y]:!0,[k]:e};return t?(0,n.h)("div",{class:i,key:"text-container"},t):null}renderIndicatorText(){const{indicator:t,messages:e,indicatorId:i,buttonId:o}=this;return(0,n.h)("div",{"aria-labelledby":o,"aria-live":"polite",class:g,id:i,role:"region"},t?e.indicator:null)}renderIconContainer(){const{loading:t,icon:e,scale:i,el:o,iconFlipRtl:a,indicator:c}=this,r="l"===i?"l":"m",s=t?(0,n.h)("calcite-loader",{inline:!0,label:this.messages.loading,scale:r}):null,l=e?(0,n.h)("calcite-icon",{class:{[w]:c},flipRtl:a,icon:e,scale:(0,d.g)(this.scale)}):null,u=s||l,h=u||o.children?.length,b=(0,n.h)("div",{class:{[m]:!0,[x]:t}},(0,n.h)("slot",null));return h?(0,n.h)("div",{"aria-hidden":"true",class:p,key:"icon-container"},u,b):null}render(){const{active:t,compact:e,disabled:i,icon:a,loading:r,textEnabled:s,label:l,text:d,indicator:u,indicatorId:h,buttonId:g,messages:p}=this,m=l||d,x=m?`${m}${u?` (${p.indicator})`:""}`:"",y={[b]:!0,[v]:s,[f]:e};return(0,n.h)(n.H,{key:"3b459307dcb6f8d373e70cd5c7a45d122565a70e"},(0,n.h)(c.I,{key:"3a81f1fb62a66f1dbd608f095ed90f2d47a9daf6",disabled:i},(0,n.h)("button",{key:"bb5249babc116d462becd6b9a056ca0d368c6e09","aria-busy":(0,o.t)(r),"aria-controls":u?h:null,"aria-label":x,"aria-pressed":(0,o.t)(t),class:y,disabled:i,id:g,ref:t=>this.buttonEl=t},this.renderIconContainer(),this.renderTextContainer(),!a&&u&&(0,n.h)("div",{class:z,key:"indicator-no-icon"})),(0,n.h)("slot",{key:"983989711d64076eca866c1928f9c777331fcba4",name:E,onSlotchange:this.handleTooltipSlotChange}),this.renderIndicatorText()))}static get assetsDirs(){return["assets"]}get el(){return(0,n.g)(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};C.style=':host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;background-color:transparent}:host,button{border-end-end-radius:var(--calcite-action-corner-radius-end-end, var(--calcite-action-corner-radius, var(--calcite-corner-radius)));border-end-start-radius:var(--calcite-action-corner-radius-end-start, var(--calcite-action-corner-radius, var(--calcite-corner-radius)));border-start-end-radius:var(--calcite-action-corner-radius-start-end, var(--calcite-action-corner-radius, var(--calcite-corner-radius)));border-start-start-radius:var(--calcite-action-corner-radius-start-start, var(--calcite-action-corner-radius, var(--calcite-corner-radius)))}.button{position:relative;margin:0px;display:flex;inline-size:auto;cursor:pointer;align-items:center;justify-content:flex-start;border-style:none;font-family:var(--calcite-font-family);font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);outline-color:transparent;background-color:var(--calcite-action-background-color, var(--calcite-color-foreground-1));color:var(--calcite-action-text-color, var(--calcite-color-text-3));text-align:unset;flex:1 0 auto}.button:hover,.button:focus{background-color:var(--calcite-action-background-color-hover, var(--calcite-color-foreground-2));color:var(--calcite-action-text-color-pressed, var(--calcite-color-text-1))}.button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.button:active{background-color:var(--calcite-action-background-color-pressed, var(--calcite-color-foreground-3))}.icon-container{pointer-events:none;margin:0px;display:flex;align-items:center;justify-content:center;min-inline-size:1rem;min-block-size:1.5rem}.text-container{margin:0px;inline-size:0px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.5rem;opacity:0;transition-property:opacity;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-property:margin;transition-property:inline-size}.text-container--visible{inline-size:auto;flex:1 1 auto;opacity:1}:host([active]) .button,:host([active]) .button:hover,:host([active]) .button:focus{color:var(--calcite-action-text-color-pressed, var(--calcite-color-text-1));background-color:var(--calcite-action-background-color-pressed, var(--calcite-color-foreground-3))}:host([active]) .button:active{background-color:var(--calcite-action-background-color, var(--calcite-color-foreground-1))}:host([loading]) .button:hover,:host([loading]) .button:focus{background-color:var(--calcite-action-background-color, var(--calcite-color-foreground-1))}:host([loading]) .text-container{opacity:var(--calcite-opacity-disabled)}:host([loading]) calcite-loader[inline]{margin-inline-end:0px}:host([appearance=transparent]) .button{background-color:transparent;transition-property:box-shadow;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host([appearance=transparent]) .button:hover,:host([appearance=transparent]) .button:focus{background-color:var(--calcite-color-transparent-hover)}:host([appearance=transparent]) .button:active{background-color:var(--calcite-color-transparent-press)}:host([data-active]) .button{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([scale=s]) .button{padding-inline:0.5rem;padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=s]) .button--text-visible .icon-container{margin-inline-end:0.5rem}:host([scale=m]) .button{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=m]) .button--text-visible .icon-container{margin-inline-end:0.75rem}:host([scale=l]) .button{padding:1.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=l]) .button--text-visible .icon-container{margin-inline-end:1rem}:host([alignment=center]) .button{justify-content:center}:host([alignment=end]) .button{justify-content:flex-end}:host([alignment=center]) .button .text-container--visible,:host([alignment=end]) .button .text-container--visible{flex:0 1 auto}:host([scale=s][compact]) .button,:host([scale=m][compact]) .button,:host([scale=l][compact]) .button{padding-inline:0px}.slot-container{display:flex}.slot-container--hidden{display:none}.button--text-visible{inline-size:100%}.indicator-with-icon{position:relative}.indicator-with-icon::after{content:"";position:absolute;block-size:0.5rem;inline-size:0.5rem;border-radius:9999px;inset-block-end:-0.275rem;inset-inline-end:-0.275rem;background-color:var(--calcite-action-indicator-color, var(--calcite-color-brand))}.indicator-without-icon{margin-inline:0.25rem;inline-size:1rem;position:relative}.indicator-without-icon::after{content:"";position:absolute;block-size:0.5rem;inline-size:0.5rem;border-radius:9999px;inset-block-end:-0.275rem;inset-inline-end:-0.275rem;background-color:var(--calcite-action-indicator-color, var(--calcite-color-brand))}.indicator-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) .button,:host([disabled]) .button:hover,:host([disabled]) .button:focus{cursor:default;background-color:var(--calcite-color-foreground-1);opacity:var(--calcite-opacity-disabled)}:host([disabled]):host([active]) .button,:host([disabled]):host([active]) .button:hover,:host([disabled]):host([active]) .button:focus{background-color:var(--calcite-color-foreground-3);opacity:var(--calcite-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}'},9057:(t,e,i)=>{function n(t){return"l"===t?"m":"s"}async function o(t){await(function(t){return"function"===typeof t.componentOnReady}(t)?t.componentOnReady():new Promise((t=>requestAnimationFrame((()=>t())))))}i.d(e,{c:()=>o,g:()=>n})},76055:(t,e,i)=>{i.d(e,{I:()=>u,u:()=>l});var n=i(22737);function o(){const{disabled:t}=this;t||HTMLElement.prototype.click.call(this)}function a(t){t.target.disabled&&t.preventDefault()}const c=["mousedown","mouseup","click"];function r(t){t.target.disabled&&(t.stopImmediatePropagation(),t.preventDefault())}const s={capture:!0};function l(t){if(t.disabled)return t.el.setAttribute("aria-disabled","true"),t.el.contains(document.activeElement)&&document.activeElement.blur(),void function(t){t.el.click=o,e=t.el,e.addEventListener("pointerdown",a,s),c.forEach((t=>e.addEventListener(t,r,s)));var e}(t);!function(t){delete t.el.click,e=t.el,e.removeEventListener("pointerdown",a,s),c.forEach((t=>e.removeEventListener(t,r,s)));var e}(t),t.el.removeAttribute("aria-disabled")}const d="interaction-container",u=(t,e)=>{let{disabled:i}=t;return(0,n.h)("div",{class:d,inert:i},...e)}},98563:(t,e,i)=>{i.d(e,{a:()=>s,b:()=>l,c:()=>d,s:()=>r});var n=i(22737),o=i(57922);const a=new WeakMap,c=new WeakMap;function r(t){c.set(t,new Promise((e=>a.set(t,e))))}function s(t){a.get(t)()}function l(t){return c.get(t)}async function d(t){if(await l(t),(0,o.i)())return(0,n.f)(t),new Promise((t=>requestAnimationFrame((()=>t()))))}},67928:(t,e,i)=>{i.d(e,{c:()=>b,d:()=>v,s:()=>d,u:()=>h});var n=i(22737),o=i(99398),a=i(57922);const c={};function r(){throw new Error("could not fetch component message bundle")}function s(t){t.messages={...t.defaultMessages,...t.messageOverrides}}function l(){}async function d(t){t.defaultMessages=await u(t,t.effectiveLocale),s(t)}async function u(t,e){if(!(0,a.i)())return{};const{el:i}=t,s=i.tagName.toLowerCase().replace("calcite-","");return async function(t,e){const i=`${e}_${t}`;return c[i]||(c[i]=fetch((0,n.a)(`./assets/${e}/t9n/messages_${t}.json`)).then((t=>(t.ok||r(),t.json()))).catch((()=>r()))),c[i]}((0,o.g)(e,"t9n"),s)}async function h(t,e){t.defaultMessages=await u(t,e),s(t)}function b(t){t.onMessagesChange=f}function v(t){t.onMessagesChange=l}function f(){s(this)}}}]);
//# sourceMappingURL=29890.d35b18a3.chunk.js.map