/*! For license information please see 44121.e736b729.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[44121],{64859:(e,t,n)=>{n.d(t,{a:()=>g,c:()=>w,d:()=>N,u:()=>F});var o=n(28716),a=n(75122);function r(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=function(e,t){if(e.length>0){var n=e[e.length-1];n!==t&&n.pause()}var o=e.indexOf(t);-1===o||e.splice(o,1),e.push(t)},s=function(e,t){var n=e.indexOf(t);-1!==n&&e.splice(n,1),e.length>0&&e[e.length-1].unpause()},l=function(e){return"Tab"===(null===e||void 0===e?void 0:e.key)||9===(null===e||void 0===e?void 0:e.keyCode)},d=function(e){return l(e)&&!e.shiftKey},f=function(e){return l(e)&&e.shiftKey},v=function(e){return setTimeout(e,0)},b=function(e,t){var n=-1;return e.every((function(e,o){return!t(e)||(n=o,!1)})),n},p=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return"function"===typeof e?e.apply(void 0,n):e},m=function(e){return e.target.shadowRoot&&"function"===typeof e.composedPath?e.composedPath()[0]:e.target},y=[],h=function(e,t){var n,a=(null===t||void 0===t?void 0:t.document)||document,r=(null===t||void 0===t?void 0:t.trapStack)||y,i=u({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:d,isKeyBackward:f},t),h={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},w=function(e,t,n){return e&&void 0!==e[t]?e[t]:i[n||t]},g=function(e,t){var n="function"===typeof(null===t||void 0===t?void 0:t.composedPath)?t.composedPath():void 0;return h.containerGroups.findIndex((function(t){var o=t.container,a=t.tabbableNodes;return o.contains(e)||(null===n||void 0===n?void 0:n.includes(o))||a.find((function(t){return t===e}))}))},N=function(e){var t=i[e];if("function"===typeof t){for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];t=t.apply(void 0,o)}if(!0===t&&(t=void 0),!t){if(void 0===t||!1===t)return t;throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var u=t;if("string"===typeof t&&!(u=a.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"));return u},F=function(){var e=N("initialFocus");if(!1===e)return!1;if(void 0===e||!(0,o.l)(e,i.tabbableOptions))if(g(a.activeElement)>=0)e=a.activeElement;else{var t=h.tabbableGroups[0];e=t&&t.firstTabbableNode||N("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},O=function(){if(h.containerGroups=h.containers.map((function(e){var t=(0,o.m)(e,i.tabbableOptions),n=(0,o.n)(e,i.tabbableOptions),a=t.length>0?t[0]:void 0,r=t.length>0?t[t.length-1]:void 0,u=n.find((function(e){return(0,o.o)(e)})),c=n.slice().reverse().find((function(e){return(0,o.o)(e)})),s=!!t.find((function(e){return(0,o.p)(e)>0}));return{container:e,tabbableNodes:t,focusableNodes:n,posTabIndexesFound:s,firstTabbableNode:a,lastTabbableNode:r,firstDomTabbableNode:u,lastDomTabbableNode:c,nextTabbableNode:function(e){var a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=t.indexOf(e);return r<0?a?n.slice(n.indexOf(e)+1).find((function(e){return(0,o.o)(e)})):n.slice(0,n.indexOf(e)).reverse().find((function(e){return(0,o.o)(e)})):t[r+(a?1:-1)]}}})),h.tabbableGroups=h.containerGroups.filter((function(e){return e.tabbableNodes.length>0})),h.tabbableGroups.length<=0&&!N("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(h.containerGroups.find((function(e){return e.posTabIndexesFound}))&&h.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},k=function(e){var t=e.activeElement;if(t)return t.shadowRoot&&null!==t.shadowRoot.activeElement?k(t.shadowRoot):t},E=function(e){!1!==e&&e!==k(document)&&(e&&e.focus?(e.focus({preventScroll:!!i.preventScroll}),h.mostRecentlyFocusedNode=e,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"===typeof e.select}(e)&&e.select()):E(F()))},T=function(e){var t=N("setReturnFocus",e);return t||!1!==t&&e},D=function(e){var t=e.target,n=e.event,a=e.isBackward,r=void 0!==a&&a;t=t||m(n),O();var u=null;if(h.tabbableGroups.length>0){var c=g(t,n),s=c>=0?h.containerGroups[c]:void 0;if(c<0)u=r?h.tabbableGroups[h.tabbableGroups.length-1].lastTabbableNode:h.tabbableGroups[0].firstTabbableNode;else if(r){var d=b(h.tabbableGroups,(function(e){var n=e.firstTabbableNode;return t===n}));if(d<0&&(s.container===t||(0,o.l)(t,i.tabbableOptions)&&!(0,o.o)(t,i.tabbableOptions)&&!s.nextTabbableNode(t,!1))&&(d=c),d>=0){var f=0===d?h.tabbableGroups.length-1:d-1,v=h.tabbableGroups[f];u=(0,o.p)(t)>=0?v.lastTabbableNode:v.lastDomTabbableNode}else l(n)||(u=s.nextTabbableNode(t,!1))}else{var p=b(h.tabbableGroups,(function(e){var n=e.lastTabbableNode;return t===n}));if(p<0&&(s.container===t||(0,o.l)(t,i.tabbableOptions)&&!(0,o.o)(t,i.tabbableOptions)&&!s.nextTabbableNode(t))&&(p=c),p>=0){var y=p===h.tabbableGroups.length-1?0:p+1,w=h.tabbableGroups[y];u=(0,o.p)(t)>=0?w.firstTabbableNode:w.firstDomTabbableNode}else l(n)||(u=s.nextTabbableNode(t))}}else u=N("fallbackFocus");return u},P=function(e){var t=m(e);g(t,e)>=0||(p(i.clickOutsideDeactivates,e)?n.deactivate({returnFocus:i.returnFocusOnDeactivate}):p(i.allowOutsideClick,e)||e.preventDefault())},G=function(e){var t=m(e),n=g(t,e)>=0;if(n||t instanceof Document)n&&(h.mostRecentlyFocusedNode=t);else{var a;e.stopImmediatePropagation();var r=!0;if(h.mostRecentlyFocusedNode)if((0,o.p)(h.mostRecentlyFocusedNode)>0){var u=g(h.mostRecentlyFocusedNode),c=h.containerGroups[u].tabbableNodes;if(c.length>0){var s=c.findIndex((function(e){return e===h.mostRecentlyFocusedNode}));s>=0&&(i.isKeyForward(h.recentNavEvent)?s+1<c.length&&(a=c[s+1],r=!1):s-1>=0&&(a=c[s-1],r=!1))}}else h.containerGroups.some((function(e){return e.tabbableNodes.some((function(e){return(0,o.p)(e)>0}))}))||(r=!1);else r=!1;r&&(a=D({target:h.mostRecentlyFocusedNode,isBackward:i.isKeyBackward(h.recentNavEvent)})),E(a||(h.mostRecentlyFocusedNode||F()))}h.recentNavEvent=void 0},R=function(e){(i.isKeyForward(e)||i.isKeyBackward(e))&&function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];h.recentNavEvent=e;var n=D({event:e,isBackward:t});n&&(l(e)&&e.preventDefault(),E(n))}(e,i.isKeyBackward(e))},x=function(e){var t;"Escape"!==(null===(t=e)||void 0===t?void 0:t.key)&&"Esc"!==(null===t||void 0===t?void 0:t.key)&&27!==(null===t||void 0===t?void 0:t.keyCode)||!1===p(i.escapeDeactivates,e)||(e.preventDefault(),n.deactivate())},j=function(e){var t=m(e);g(t,e)>=0||p(i.clickOutsideDeactivates,e)||p(i.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},C=function(){if(h.active)return c(r,n),h.delayInitialFocusTimer=i.delayInitialFocus?v((function(){E(F())})):E(F()),a.addEventListener("focusin",G,!0),a.addEventListener("mousedown",P,{capture:!0,passive:!1}),a.addEventListener("touchstart",P,{capture:!0,passive:!1}),a.addEventListener("click",j,{capture:!0,passive:!1}),a.addEventListener("keydown",R,{capture:!0,passive:!1}),a.addEventListener("keydown",x),n},L=function(){if(h.active)return a.removeEventListener("focusin",G,!0),a.removeEventListener("mousedown",P,!0),a.removeEventListener("touchstart",P,!0),a.removeEventListener("click",j,!0),a.removeEventListener("keydown",R,!0),a.removeEventListener("keydown",x),n},B="undefined"!==typeof window&&"MutationObserver"in window?new MutationObserver((function(e){e.some((function(e){return Array.from(e.removedNodes).some((function(e){return e===h.mostRecentlyFocusedNode}))}))&&E(F())})):void 0,I=function(){B&&(B.disconnect(),h.active&&!h.paused&&h.containers.map((function(e){B.observe(e,{subtree:!0,childList:!0})})))};return(n={get active(){return h.active},get paused(){return h.paused},activate:function(e){if(h.active)return this;var t=w(e,"onActivate"),n=w(e,"onPostActivate"),o=w(e,"checkCanFocusTrap");o||O(),h.active=!0,h.paused=!1,h.nodeFocusedBeforeActivation=a.activeElement,null===t||void 0===t||t();var r=function(){o&&O(),C(),I(),null===n||void 0===n||n()};return o?(o(h.containers.concat()).then(r,r),this):(r(),this)},deactivate:function(e){if(!h.active)return this;var t=u({onDeactivate:i.onDeactivate,onPostDeactivate:i.onPostDeactivate,checkCanReturnFocus:i.checkCanReturnFocus},e);clearTimeout(h.delayInitialFocusTimer),h.delayInitialFocusTimer=void 0,L(),h.active=!1,h.paused=!1,I(),s(r,n);var o=w(t,"onDeactivate"),a=w(t,"onPostDeactivate"),c=w(t,"checkCanReturnFocus"),l=w(t,"returnFocus","returnFocusOnDeactivate");null===o||void 0===o||o();var d=function(){v((function(){l&&E(T(h.nodeFocusedBeforeActivation)),null===a||void 0===a||a()}))};return l&&c?(c(T(h.nodeFocusedBeforeActivation)).then(d,d),this):(d(),this)},pause:function(e){if(h.paused||!h.active)return this;var t=w(e,"onPause"),n=w(e,"onPostPause");return h.paused=!0,null===t||void 0===t||t(),L(),I(),null===n||void 0===n||n(),this},unpause:function(e){if(!h.paused||!h.active)return this;var t=w(e,"onUnpause"),n=w(e,"onPostUnpause");return h.paused=!1,null===t||void 0===t||t(),O(),C(),I(),null===n||void 0===n||n(),this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return h.containers=t.map((function(e){return"string"===typeof e?a.querySelector(e):e})),h.active&&O(),I(),this}}).updateContainerElements(e),n};function w(e,t){const{el:n}=e,r=t?.focusTrapEl||n;if(!r)return;const i={clickOutsideDeactivates:!0,escapeDeactivates:!1,fallbackFocus:r,setReturnFocus:e=>((0,o.d)(e),!1),...t?.focusTrapOptions,document:n.ownerDocument,tabbableOptions:o.r,trapStack:a.f};e.focusTrap=h(r,i)}function g(e,t){e.focusTrapDisabled||e.focusTrap?.activate(t)}function N(e,t){e.focusTrap?.deactivate(t)}function F(e){e.focusTrap?.updateContainerElements(e.el)}},98563:(e,t,n)=>{n.d(t,{a:()=>c,b:()=>s,c:()=>l,s:()=>u});var o=n(22737),a=n(57922);const r=new WeakMap,i=new WeakMap;function u(e){i.set(e,new Promise((t=>r.set(e,t))))}function c(e){r.get(e)()}function s(e){return i.get(e)}async function l(e){if(await s(e),(0,a.i)())return(0,o.f)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}}}]);
//# sourceMappingURL=44121.e736b729.chunk.js.map