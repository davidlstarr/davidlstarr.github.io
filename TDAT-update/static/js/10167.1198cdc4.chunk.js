/*! For license information please see 10167.1198cdc4.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[10167],{76055:(t,e,n)=>{n.d(e,{I:()=>u,u:()=>c});var o=n(22737);function r(){const{disabled:t}=this;t||HTMLElement.prototype.click.call(this)}function i(t){t.target.disabled&&t.preventDefault()}const a=["mousedown","mouseup","click"];function l(t){t.target.disabled&&(t.stopImmediatePropagation(),t.preventDefault())}const s={capture:!0};function c(t){if(t.disabled)return t.el.setAttribute("aria-disabled","true"),t.el.contains(document.activeElement)&&document.activeElement.blur(),void function(t){t.el.click=r,e=t.el,e.addEventListener("pointerdown",i,s),a.forEach((t=>e.addEventListener(t,l,s)));var e}(t);!function(t){delete t.el.click,e=t.el,e.removeEventListener("pointerdown",i,s),a.forEach((t=>e.removeEventListener(t,l,s)));var e}(t),t.el.removeAttribute("aria-disabled")}const d="interaction-container",u=(t,e)=>{let{disabled:n}=t;return(0,o.h)("div",{class:d,inert:n},...e)}},19129:(t,e,n)=>{function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},l.apply(this,arguments)}function s(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}n.d(e,{c:()=>se,d:()=>ce});function c(t){if("undefined"!==typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var d=c(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),u=c(/Edge/i),h=c(/firefox/i),f=c(/safari/i)&&!c(/chrome/i)&&!c(/android/i),p=c(/iP(ad|od|hone)/i),g=c(/chrome/i)&&c(/android/i),v={capture:!1,passive:!1};function m(t,e,n){t.addEventListener(e,n,!d&&v)}function b(t,e,n){t.removeEventListener(e,n,!d&&v)}function w(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(n){return!1}return!1}}function y(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function E(t,e,n,o){if(t){n=n||document;do{if(null!=e&&(">"===e[0]?t.parentNode===n&&w(t,e):w(t,e))||o&&t===n)return t;if(t===n)break}while(t=y(t))}return null}var S,D=/\s+/g;function _(t,e,n){if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else{var o=(" "+t.className+" ").replace(D," ").replace(" "+e+" "," ");t.className=(o+(n?" "+e:"")).replace(D," ")}}function T(t,e,n){var o=t&&t.style;if(o){if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in o||-1!==e.indexOf("webkit")||(e="-webkit-"+e),o[e]=n+("string"===typeof n?"":"px")}}function C(t,e){var n="";if("string"===typeof t)n=t;else do{var o=T(t,"transform");o&&"none"!==o&&(n=o+" "+n)}while(!e&&(t=t.parentNode));var r=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return r&&new r(n)}function x(t,e,n){if(t){var o=t.getElementsByTagName(e),r=0,i=o.length;if(n)for(;r<i;r++)n(o[r],r);return o}return[]}function I(){var t=document.scrollingElement;return t||document.documentElement}function O(t,e,n,o,r){if(t.getBoundingClientRect||t===window){var i,a,l,s,c,u,h;if(t!==window&&t.parentNode&&t!==I()?(a=(i=t.getBoundingClientRect()).top,l=i.left,s=i.bottom,c=i.right,u=i.height,h=i.width):(a=0,l=0,s=window.innerHeight,c=window.innerWidth,u=window.innerHeight,h=window.innerWidth),(e||n)&&t!==window&&(r=r||t.parentNode,!d))do{if(r&&r.getBoundingClientRect&&("none"!==T(r,"transform")||n&&"static"!==T(r,"position"))){var f=r.getBoundingClientRect();a-=f.top+parseInt(T(r,"border-top-width")),l-=f.left+parseInt(T(r,"border-left-width")),s=a+i.height,c=l+i.width;break}}while(r=r.parentNode);if(o&&t!==window){var p=C(r||t),g=p&&p.a,v=p&&p.d;p&&(s=(a/=v)+(u/=v),c=(l/=g)+(h/=g))}return{top:a,left:l,bottom:s,right:c,width:h,height:u}}}function M(t,e,n){for(var o=X(t,!0),r=O(t)[e];o;){var i=O(o)[n];if(!("top"===n||"left"===n?r>=i:r<=i))return o;if(o===I())break;o=X(o,!1)}return!1}function A(t,e,n,o){for(var r=0,i=0,a=t.children;i<a.length;){if("none"!==a[i].style.display&&a[i]!==Ft.ghost&&(o||a[i]!==Ft.dragged)&&E(a[i],n.draggable,t,!1)){if(r===e)return a[i];r++}i++}return null}function P(t,e){for(var n=t.lastElementChild;n&&(n===Ft.ghost||"none"===T(n,"display")||e&&!w(n,e));)n=n.previousElementSibling;return n||null}function N(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Ft.clone||e&&!w(t,e)||n++;return n}function k(t){var e=0,n=0,o=I();if(t)do{var r=C(t),i=r.a,a=r.d;e+=t.scrollLeft*i,n+=t.scrollTop*a}while(t!==o&&(t=t.parentNode));return[e,n]}function X(t,e){if(!t||!t.getBoundingClientRect)return I();var n=t,o=!1;do{if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var r=T(n);if(n.clientWidth<n.scrollWidth&&("auto"==r.overflowX||"scroll"==r.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==r.overflowY||"scroll"==r.overflowY)){if(!n.getBoundingClientRect||n===document.body)return I();if(o||e)return n;o=!0}}}while(n=n.parentNode);return I()}function Y(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function R(t,e){return function(){if(!S){var n=arguments;1===n.length?t.call(this,n[0]):t.apply(this,n),S=setTimeout((function(){S=void 0}),e)}}}function B(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function F(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}function L(t,e,n){var o={};return Array.from(t.children).forEach((function(r){var i,a,l,s;if(E(r,e.draggable,t,!1)&&!r.animated&&r!==n){var c=O(r);o.left=Math.min(null!==(i=o.left)&&void 0!==i?i:1/0,c.left),o.top=Math.min(null!==(a=o.top)&&void 0!==a?a:1/0,c.top),o.right=Math.max(null!==(l=o.right)&&void 0!==l?l:-1/0,c.right),o.bottom=Math.max(null!==(s=o.bottom)&&void 0!==s?s:-1/0,c.bottom)}})),o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}var j="Sortable"+(new Date).getTime();function H(){var t,e=[];return{captureAnimationState:function(){(e=[],this.options.animation)&&[].slice.call(this.el.children).forEach((function(t){if("none"!==T(t,"display")&&t!==Ft.ghost){e.push({target:t,rect:O(t)});var n=r({},e[e.length-1].rect);if(t.thisAnimationDuration){var o=C(t,!0);o&&(n.top-=o.f,n.left-=o.e)}t.fromRect=n}}))},addAnimationState:function(t){e.push(t)},removeAnimationState:function(t){e.splice(function(t,e){for(var n in t)if(t.hasOwnProperty(n))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[n][o])return Number(n);return-1}(e,{target:t}),1)},animateAll:function(n){var o=this;if(!this.options.animation)return clearTimeout(t),void("function"===typeof n&&n());var r=!1,i=0;e.forEach((function(t){var e=0,n=t.target,a=n.fromRect,l=O(n),s=n.prevFromRect,c=n.prevToRect,d=t.rect,u=C(n,!0);u&&(l.top-=u.f,l.left-=u.e),n.toRect=l,n.thisAnimationDuration&&Y(s,l)&&!Y(a,l)&&(d.top-l.top)/(d.left-l.left)===(a.top-l.top)/(a.left-l.left)&&(e=function(t,e,n,o){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*o.animation}(d,s,c,o.options)),Y(l,a)||(n.prevFromRect=a,n.prevToRect=l,e||(e=o.options.animation),o.animate(n,d,l,e)),e&&(r=!0,i=Math.max(i,e),clearTimeout(n.animationResetTimer),n.animationResetTimer=setTimeout((function(){n.animationTime=0,n.prevFromRect=null,n.fromRect=null,n.prevToRect=null,n.thisAnimationDuration=null}),e),n.thisAnimationDuration=e)})),clearTimeout(t),r?t=setTimeout((function(){"function"===typeof n&&n()}),i):"function"===typeof n&&n(),e=[]},animate:function(t,e,n,o){if(o){T(t,"transition",""),T(t,"transform","");var r=C(this.el),i=r&&r.a,a=r&&r.d,l=(e.left-n.left)/(i||1),s=(e.top-n.top)/(a||1);t.animatingX=!!l,t.animatingY=!!s,T(t,"transform","translate3d("+l+"px,"+s+"px,0)"),this.forRepaintDummy=function(t){return t.offsetWidth}(t),T(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),T(t,"transform","translate3d(0,0,0)"),"number"===typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout((function(){T(t,"transition",""),T(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1}),o)}}}}var W=[],z={initializeByDefault:!0},G={mount:function(t){for(var e in z)z.hasOwnProperty(e)&&!(e in t)&&(t[e]=z[e]);W.forEach((function(e){if(e.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")})),W.push(t)},pluginEvent:function(t,e,n){var o=this;this.eventCanceled=!1,n.cancel=function(){o.eventCanceled=!0};var i=t+"Global";W.forEach((function(o){e[o.pluginName]&&(e[o.pluginName][i]&&e[o.pluginName][i](r({sortable:e},n)),e.options[o.pluginName]&&e[o.pluginName][t]&&e[o.pluginName][t](r({sortable:e},n)))}))},initializePlugins:function(t,e,n,o){for(var r in W.forEach((function(o){var r=o.pluginName;if(t.options[r]||o.initializeByDefault){var i=new o(t,e,t.options);i.sortable=t,i.options=t.options,t[r]=i,l(n,i.defaults)}})),t.options)if(t.options.hasOwnProperty(r)){var i=this.modifyOption(t,r,t.options[r]);"undefined"!==typeof i&&(t.options[r]=i)}},getEventProperties:function(t,e){var n={};return W.forEach((function(o){"function"===typeof o.eventProperties&&l(n,o.eventProperties.call(e[o.pluginName],t))})),n},modifyOption:function(t,e,n){var o;return W.forEach((function(r){t[r.pluginName]&&r.optionListeners&&"function"===typeof r.optionListeners[e]&&(o=r.optionListeners[e].call(t[r.pluginName],n))})),o}};var U=["evt"],V=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.evt,i=s(n,U);G.pluginEvent.bind(Ft)(t,e,r({dragEl:Z,parentEl:$,ghostEl:K,rootEl:Q,nextEl:J,lastDownEl:tt,cloneEl:et,cloneHidden:nt,dragStarted:gt,putSortable:st,activeSortable:Ft.active,originalEvent:o,oldIndex:ot,oldDraggableIndex:it,newIndex:rt,newDraggableIndex:at,hideGhostForTarget:Xt,unhideGhostForTarget:Yt,cloneNowHidden:function(){nt=!0},cloneNowShown:function(){nt=!1},dispatchSortableEvent:function(t){q({sortable:e,name:t,originalEvent:o})}},i))};function q(t){!function(t){var e=t.sortable,n=t.rootEl,o=t.name,i=t.targetEl,a=t.cloneEl,l=t.toEl,s=t.fromEl,c=t.oldIndex,h=t.newIndex,f=t.oldDraggableIndex,p=t.newDraggableIndex,g=t.originalEvent,v=t.putSortable,m=t.extraEventProperties;if(e=e||n&&n[j]){var b,w=e.options,y="on"+o.charAt(0).toUpperCase()+o.substr(1);!window.CustomEvent||d||u?(b=document.createEvent("Event")).initEvent(o,!0,!0):b=new CustomEvent(o,{bubbles:!0,cancelable:!0}),b.to=l||n,b.from=s||n,b.item=i||n,b.clone=a,b.oldIndex=c,b.newIndex=h,b.oldDraggableIndex=f,b.newDraggableIndex=p,b.originalEvent=g,b.pullMode=v?v.lastPutMode:void 0;var E=r(r({},m),G.getEventProperties(o,e));for(var S in E)b[S]=E[S];n&&n.dispatchEvent(b),w[y]&&w[y].call(e,b)}}(r({putSortable:st,cloneEl:et,targetEl:Z,rootEl:Q,oldIndex:ot,oldDraggableIndex:it,newIndex:rt,newDraggableIndex:at},t))}var Z,$,K,Q,J,tt,et,nt,ot,rt,it,at,lt,st,ct,dt,ut,ht,ft,pt,gt,vt,mt,bt,wt,yt=!1,Et=!1,St=[],Dt=!1,_t=!1,Tt=[],Ct=!1,xt=[],It="undefined"!==typeof document,Ot=p,Mt=u||d?"cssFloat":"float",At=It&&!g&&!p&&"draggable"in document.createElement("div"),Pt=function(){if(It){if(d)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),Nt=function(t,e){var n=T(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),r=A(t,0,e),i=A(t,1,e),a=r&&T(r),l=i&&T(i),s=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+O(r).width,c=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+O(i).width;if("flex"===n.display)return"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal";if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(r&&a.float&&"none"!==a.float){var d="left"===a.float?"left":"right";return!i||"both"!==l.clear&&l.clear!==d?"horizontal":"vertical"}return r&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||s>=o&&"none"===n[Mt]||i&&"none"===n[Mt]&&s+c>o)?"vertical":"horizontal"},kt=function(t){function e(t,n){return function(o,r,i,a){var l=o.options.group.name&&r.options.group.name&&o.options.group.name===r.options.group.name;if(null==t&&(n||l))return!0;if(null==t||!1===t)return!1;if(n&&"clone"===t)return t;if("function"===typeof t)return e(t(o,r,i,a),n)(o,r,i,a);var s=(n?o:r).options.group.name;return!0===t||"string"===typeof t&&t===s||t.join&&t.indexOf(s)>-1}}var n={},o=t.group;o&&"object"==i(o)||(o={name:o}),n.name=o.name,n.checkPull=e(o.pull,!0),n.checkPut=e(o.put),n.revertClone=o.revertClone,t.group=n},Xt=function(){!Pt&&K&&T(K,"display","none")},Yt=function(){!Pt&&K&&T(K,"display","")};It&&!g&&document.addEventListener("click",(function(t){if(Et)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),Et=!1,!1}),!0);var Rt=function(t){if(Z){var e=function(t,e){var n;return St.some((function(o){var r=o[j].options.emptyInsertThreshold;if(r&&!P(o)){var i=O(o),a=t>=i.left-r&&t<=i.right+r,l=e>=i.top-r&&e<=i.bottom+r;return a&&l?n=o:void 0}})),n}((t=t.touches?t.touches[0]:t).clientX,t.clientY);if(e){var n={};for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o]);n.target=n.rootEl=e,n.preventDefault=void 0,n.stopPropagation=void 0,e[j]._onDragOver(n)}}},Bt=function(t){Z&&Z.parentNode[j]._isOutsideThisEl(t.target)};function Ft(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=l({},e),t[j]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Nt(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==Ft.supportPointer&&"PointerEvent"in window&&!f,emptyInsertThreshold:5};for(var o in G.initializePlugins(this,t,n),n)!(o in e)&&(e[o]=n[o]);for(var r in kt(e),this)"_"===r.charAt(0)&&"function"===typeof this[r]&&(this[r]=this[r].bind(this));this.nativeDraggable=!e.forceFallback&&At,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?m(t,"pointerdown",this._onTapStart):(m(t,"mousedown",this._onTapStart),m(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(m(t,"dragover",this),m(t,"dragenter",this)),St.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),l(this,H())}function Lt(t,e,n,o,r,i,a,l){var s,c,h=t[j],f=h.options.onMove;return!window.CustomEvent||d||u?(s=document.createEvent("Event")).initEvent("move",!0,!0):s=new CustomEvent("move",{bubbles:!0,cancelable:!0}),s.to=e,s.from=t,s.dragged=n,s.draggedRect=o,s.related=r||e,s.relatedRect=i||O(e),s.willInsertAfter=l,s.originalEvent=a,t.dispatchEvent(s),f&&(c=f.call(h,s,a)),c}function jt(t){t.draggable=!1}function Ht(){Ct=!1}function Wt(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;n--;)o+=e.charCodeAt(n);return o.toString(36)}function zt(t){return setTimeout(t,0)}function Gt(t){return clearTimeout(t)}Ft.prototype={constructor:Ft,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(vt=null)},_getDirection:function(t,e){return"function"===typeof this.options.direction?this.options.direction.call(this,t,e,Z):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,n=this.el,o=this.options,r=o.preventOnFilter,i=t.type,a=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,l=(a||t).target,s=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||l,c=o.filter;if(function(t){xt.length=0;var e=t.getElementsByTagName("input"),n=e.length;for(;n--;){var o=e[n];o.checked&&xt.push(o)}}(n),!Z&&!(/mousedown|pointerdown/.test(i)&&0!==t.button||o.disabled)&&!s.isContentEditable&&(this.nativeDraggable||!f||!l||"SELECT"!==l.tagName.toUpperCase())&&(!(l=E(l,o.draggable,n,!1))||!l.animated)&&tt!==l){if(ot=N(l),it=N(l,o.draggable),"function"===typeof c){if(c.call(this,t,l,this))return q({sortable:e,rootEl:s,name:"filter",targetEl:l,toEl:n,fromEl:n}),V("filter",e,{evt:t}),void(r&&t.cancelable&&t.preventDefault())}else if(c&&(c=c.split(",").some((function(o){if(o=E(s,o.trim(),n,!1))return q({sortable:e,rootEl:o,name:"filter",targetEl:l,fromEl:n,toEl:n}),V("filter",e,{evt:t}),!0}))))return void(r&&t.cancelable&&t.preventDefault());o.handle&&!E(s,o.handle,n,!1)||this._prepareDragStart(t,a,l)}}},_prepareDragStart:function(t,e,n){var o,r=this,i=r.el,a=r.options,l=i.ownerDocument;if(n&&!Z&&n.parentNode===i){var s=O(n);if(Q=i,$=(Z=n).parentNode,J=Z.nextSibling,tt=n,lt=a.group,Ft.dragged=Z,ct={target:Z,clientX:(e||t).clientX,clientY:(e||t).clientY},ft=ct.clientX-s.left,pt=ct.clientY-s.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,Z.style["will-change"]="all",o=function(){V("delayEnded",r,{evt:t}),Ft.eventCanceled?r._onDrop():(r._disableDelayedDragEvents(),!h&&r.nativeDraggable&&(Z.draggable=!0),r._triggerDragStart(t,e),q({sortable:r,name:"choose",originalEvent:t}),_(Z,a.chosenClass,!0))},a.ignore.split(",").forEach((function(t){x(Z,t.trim(),jt)})),m(l,"dragover",Rt),m(l,"mousemove",Rt),m(l,"touchmove",Rt),m(l,"mouseup",r._onDrop),m(l,"touchend",r._onDrop),m(l,"touchcancel",r._onDrop),h&&this.nativeDraggable&&(this.options.touchStartThreshold=4,Z.draggable=!0),V("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(u||d))o();else{if(Ft.eventCanceled)return void this._onDrop();m(l,"mouseup",r._disableDelayedDrag),m(l,"touchend",r._disableDelayedDrag),m(l,"touchcancel",r._disableDelayedDrag),m(l,"mousemove",r._delayedDragTouchMoveHandler),m(l,"touchmove",r._delayedDragTouchMoveHandler),a.supportPointer&&m(l,"pointermove",r._delayedDragTouchMoveHandler),r._dragStartTimer=setTimeout(o,a.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){Z&&jt(Z),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;b(t,"mouseup",this._disableDelayedDrag),b(t,"touchend",this._disableDelayedDrag),b(t,"touchcancel",this._disableDelayedDrag),b(t,"mousemove",this._delayedDragTouchMoveHandler),b(t,"touchmove",this._delayedDragTouchMoveHandler),b(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?m(document,"pointermove",this._onTouchMove):m(document,e?"touchmove":"mousemove",this._onTouchMove):(m(Z,"dragend",this),m(Q,"dragstart",this._onDragStart));try{document.selection?zt((function(){document.selection.empty()})):window.getSelection().removeAllRanges()}catch(n){}},_dragStarted:function(t,e){if(yt=!1,Q&&Z){V("dragStarted",this,{evt:e}),this.nativeDraggable&&m(document,"dragover",Bt);var n=this.options;!t&&_(Z,n.dragClass,!1),_(Z,n.ghostClass,!0),Ft.active=this,t&&this._appendGhost(),q({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(dt){this._lastX=dt.clientX,this._lastY=dt.clientY,Xt();for(var t=document.elementFromPoint(dt.clientX,dt.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(dt.clientX,dt.clientY))!==e;)e=t;if(Z.parentNode[j]._isOutsideThisEl(t),e)do{if(e[j]){if(e[j]._onDragOver({clientX:dt.clientX,clientY:dt.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}t=e}while(e=y(e));Yt()}},_onTouchMove:function(t){if(ct){var e=this.options,n=e.fallbackTolerance,o=e.fallbackOffset,r=t.touches?t.touches[0]:t,i=K&&C(K,!0),a=K&&i&&i.a,l=K&&i&&i.d,s=Ot&&wt&&k(wt),c=(r.clientX-ct.clientX+o.x)/(a||1)+(s?s[0]-Tt[0]:0)/(a||1),d=(r.clientY-ct.clientY+o.y)/(l||1)+(s?s[1]-Tt[1]:0)/(l||1);if(!Ft.active&&!yt){if(n&&Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}if(K){i?(i.e+=c-(ut||0),i.f+=d-(ht||0)):i={a:1,b:0,c:0,d:1,e:c,f:d};var u="matrix(".concat(i.a,",").concat(i.b,",").concat(i.c,",").concat(i.d,",").concat(i.e,",").concat(i.f,")");T(K,"webkitTransform",u),T(K,"mozTransform",u),T(K,"msTransform",u),T(K,"transform",u),ut=c,ht=d,dt=r}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!K){var t=this.options.fallbackOnBody?document.body:Q,e=O(Z,!0,Ot,!0,t),n=this.options;if(Ot){for(wt=t;"static"===T(wt,"position")&&"none"===T(wt,"transform")&&wt!==document;)wt=wt.parentNode;wt!==document.body&&wt!==document.documentElement?(wt===document&&(wt=I()),e.top+=wt.scrollTop,e.left+=wt.scrollLeft):wt=I(),Tt=k(wt)}_(K=Z.cloneNode(!0),n.ghostClass,!1),_(K,n.fallbackClass,!0),_(K,n.dragClass,!0),T(K,"transition",""),T(K,"transform",""),T(K,"box-sizing","border-box"),T(K,"margin",0),T(K,"top",e.top),T(K,"left",e.left),T(K,"width",e.width),T(K,"height",e.height),T(K,"opacity","0.8"),T(K,"position",Ot?"absolute":"fixed"),T(K,"zIndex","100000"),T(K,"pointerEvents","none"),Ft.ghost=K,t.appendChild(K),T(K,"transform-origin",ft/parseInt(K.style.width)*100+"% "+pt/parseInt(K.style.height)*100+"%")}},_onDragStart:function(t,e){var n=this,o=t.dataTransfer,r=n.options;V("dragStart",this,{evt:t}),Ft.eventCanceled?this._onDrop():(V("setupClone",this),Ft.eventCanceled||((et=F(Z)).removeAttribute("id"),et.draggable=!1,et.style["will-change"]="",this._hideClone(),_(et,this.options.chosenClass,!1),Ft.clone=et),n.cloneId=zt((function(){V("clone",n),Ft.eventCanceled||(n.options.removeCloneOnHide||Q.insertBefore(et,Z),n._hideClone(),q({sortable:n,name:"clone"}))})),!e&&_(Z,r.dragClass,!0),e?(Et=!0,n._loopId=setInterval(n._emulateDragOver,50)):(b(document,"mouseup",n._onDrop),b(document,"touchend",n._onDrop),b(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",r.setData&&r.setData.call(n,o,Z)),m(document,"drop",n),T(Z,"transform","translateZ(0)")),yt=!0,n._dragStartId=zt(n._dragStarted.bind(n,e,t)),m(document,"selectstart",n),gt=!0,f&&T(document.body,"user-select","none"))},_onDragOver:function(t){var e,n,o,i,a=this.el,l=t.target,s=this.options,c=s.group,d=Ft.active,u=lt===c,h=s.sort,f=st||d,p=this,g=!1;if(!Ct){if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),l=E(l,s.draggable,a,!0),F("dragOver"),Ft.eventCanceled)return g;if(Z.contains(t.target)||l.animated&&l.animatingX&&l.animatingY||p._ignoreWhileAnimating===l)return W(!1);if(Et=!1,d&&!s.disabled&&(u?h||(o=$!==Q):st===this||(this.lastPutMode=lt.checkPull(this,d,Z,t))&&c.checkPut(this,d,Z,t))){if(i="vertical"===this._getDirection(t,l),e=O(Z),F("dragOverValid"),Ft.eventCanceled)return g;if(o)return $=Q,H(),this._hideClone(),F("revert"),Ft.eventCanceled||(J?Q.insertBefore(Z,J):Q.appendChild(Z)),W(!0);var v=P(a,s.draggable);if(!v||function(t,e,n){var o=O(P(n.el,n.options.draggable)),r=L(n.el,n.options,K),i=10;return e?t.clientX>r.right+i||t.clientY>o.bottom&&t.clientX>o.left:t.clientY>r.bottom+i||t.clientX>o.right&&t.clientY>o.top}(t,i,this)&&!v.animated){if(v===Z)return W(!1);if(v&&a===t.target&&(l=v),l&&(n=O(l)),!1!==Lt(Q,a,Z,e,l,n,t,!!l))return H(),v&&v.nextSibling?a.insertBefore(Z,v.nextSibling):a.appendChild(Z),$=a,z(),W(!0)}else if(v&&function(t,e,n){var o=O(A(n.el,0,n.options,!0)),r=L(n.el,n.options,K),i=10;return e?t.clientX<r.left-i||t.clientY<o.top&&t.clientX<o.right:t.clientY<r.top-i||t.clientY<o.bottom&&t.clientX<o.left}(t,i,this)){var m=A(a,0,s,!0);if(m===Z)return W(!1);if(n=O(l=m),!1!==Lt(Q,a,Z,e,l,n,t,!1))return H(),a.insertBefore(Z,m),$=a,z(),W(!0)}else if(l.parentNode===a){n=O(l);var b,w,y,S=Z.parentNode!==a,D=!function(t,e,n){var o=n?t.left:t.top,r=n?t.right:t.bottom,i=n?t.width:t.height,a=n?e.left:e.top,l=n?e.right:e.bottom,s=n?e.width:e.height;return o===a||r===l||o+i/2===a+s/2}(Z.animated&&Z.toRect||e,l.animated&&l.toRect||n,i),C=i?"top":"left",x=M(l,"top","top")||M(Z,"top","top"),I=x?x.scrollTop:void 0;if(vt!==l&&(w=n[C],Dt=!1,_t=!D&&s.invertSwap||S),b=function(t,e,n,o,r,i,a,l){var s=o?t.clientY:t.clientX,c=o?n.height:n.width,d=o?n.top:n.left,u=o?n.bottom:n.right,h=!1;if(!a)if(l&&bt<c*r){if(!Dt&&(1===mt?s>d+c*i/2:s<u-c*i/2)&&(Dt=!0),Dt)h=!0;else if(1===mt?s<d+bt:s>u-bt)return-mt}else if(s>d+c*(1-r)/2&&s<u-c*(1-r)/2)return function(t){return N(Z)<N(t)?1:-1}(e);if((h=h||a)&&(s<d+c*i/2||s>u-c*i/2))return s>d+c/2?1:-1;return 0}(t,l,n,i,D?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,_t,vt===l),0!==b){var k=N(Z);do{k-=b,y=$.children[k]}while(y&&("none"===T(y,"display")||y===K))}if(0===b||y===l)return W(!1);vt=l,mt=b;var X=l.nextElementSibling,Y=!1,R=Lt(Q,a,Z,e,l,n,t,Y=1===b);if(!1!==R)return 1!==R&&-1!==R||(Y=1===R),Ct=!0,setTimeout(Ht,30),H(),Y&&!X?a.appendChild(Z):l.parentNode.insertBefore(Z,Y?X:l),x&&B(x,0,I-x.scrollTop),$=Z.parentNode,void 0===w||_t||(bt=Math.abs(w-O(l)[C])),z(),W(!0)}if(a.contains(Z))return W(!1)}return!1}function F(s,c){V(s,p,r({evt:t,isOwner:u,axis:i?"vertical":"horizontal",revert:o,dragRect:e,targetRect:n,canSort:h,fromSortable:f,target:l,completed:W,onMove:function(n,o){return Lt(Q,a,Z,e,n,O(n),t,o)},changed:z},c))}function H(){F("dragOverAnimationCapture"),p.captureAnimationState(),p!==f&&f.captureAnimationState()}function W(e){return F("dragOverCompleted",{insertion:e}),e&&(u?d._hideClone():d._showClone(p),p!==f&&(_(Z,st?st.options.ghostClass:d.options.ghostClass,!1),_(Z,s.ghostClass,!0)),st!==p&&p!==Ft.active?st=p:p===Ft.active&&st&&(st=null),f===p&&(p._ignoreWhileAnimating=l),p.animateAll((function(){F("dragOverAnimationComplete"),p._ignoreWhileAnimating=null})),p!==f&&(f.animateAll(),f._ignoreWhileAnimating=null)),(l===Z&&!Z.animated||l===a&&!l.animated)&&(vt=null),s.dragoverBubble||t.rootEl||l===document||(Z.parentNode[j]._isOutsideThisEl(t.target),!e&&Rt(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),g=!0}function z(){rt=N(Z),at=N(Z,s.draggable),q({sortable:p,name:"change",toEl:a,newIndex:rt,newDraggableIndex:at,originalEvent:t})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){b(document,"mousemove",this._onTouchMove),b(document,"touchmove",this._onTouchMove),b(document,"pointermove",this._onTouchMove),b(document,"dragover",Rt),b(document,"mousemove",Rt),b(document,"touchmove",Rt)},_offUpEvents:function(){var t=this.el.ownerDocument;b(t,"mouseup",this._onDrop),b(t,"touchend",this._onDrop),b(t,"pointerup",this._onDrop),b(t,"touchcancel",this._onDrop),b(document,"selectstart",this)},_onDrop:function(t){var e=this.el,n=this.options;rt=N(Z),at=N(Z,n.draggable),V("drop",this,{evt:t}),$=Z&&Z.parentNode,rt=N(Z),at=N(Z,n.draggable),Ft.eventCanceled||(yt=!1,_t=!1,Dt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Gt(this.cloneId),Gt(this._dragStartId),this.nativeDraggable&&(b(document,"drop",this),b(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),f&&T(document.body,"user-select",""),T(Z,"transform",""),t&&(gt&&(t.cancelable&&t.preventDefault(),!n.dropBubble&&t.stopPropagation()),K&&K.parentNode&&K.parentNode.removeChild(K),(Q===$||st&&"clone"!==st.lastPutMode)&&et&&et.parentNode&&et.parentNode.removeChild(et),Z&&(this.nativeDraggable&&b(Z,"dragend",this),jt(Z),Z.style["will-change"]="",gt&&!yt&&_(Z,st?st.options.ghostClass:this.options.ghostClass,!1),_(Z,this.options.chosenClass,!1),q({sortable:this,name:"unchoose",toEl:$,newIndex:null,newDraggableIndex:null,originalEvent:t}),Q!==$?(rt>=0&&(q({rootEl:$,name:"add",toEl:$,fromEl:Q,originalEvent:t}),q({sortable:this,name:"remove",toEl:$,originalEvent:t}),q({rootEl:$,name:"sort",toEl:$,fromEl:Q,originalEvent:t}),q({sortable:this,name:"sort",toEl:$,originalEvent:t})),st&&st.save()):rt!==ot&&rt>=0&&(q({sortable:this,name:"update",toEl:$,originalEvent:t}),q({sortable:this,name:"sort",toEl:$,originalEvent:t})),Ft.active&&(null!=rt&&-1!==rt||(rt=ot,at=it),q({sortable:this,name:"end",toEl:$,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){V("nulling",this),Q=Z=$=K=J=et=tt=nt=ct=dt=gt=rt=at=ot=it=vt=mt=st=lt=Ft.dragged=Ft.ghost=Ft.clone=Ft.active=null,xt.forEach((function(t){t.checked=!0})),xt.length=ut=ht=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":Z&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],n=this.el.children,o=0,r=n.length,i=this.options;o<r;o++)E(t=n[o],i.draggable,this.el,!1)&&e.push(t.getAttribute(i.dataIdAttr)||Wt(t));return e},sort:function(t,e){var n={},o=this.el;this.toArray().forEach((function(t,e){var r=o.children[e];E(r,this.options.draggable,o,!1)&&(n[t]=r)}),this),e&&this.captureAnimationState(),t.forEach((function(t){n[t]&&(o.removeChild(n[t]),o.appendChild(n[t]))})),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return E(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];var o=G.modifyOption(this,t,e);n[t]="undefined"!==typeof o?o:e,"group"===t&&kt(n)},destroy:function(){V("destroy",this);var t=this.el;t[j]=null,b(t,"mousedown",this._onTapStart),b(t,"touchstart",this._onTapStart),b(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(b(t,"dragover",this),b(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),(function(t){t.removeAttribute("draggable")})),this._onDrop(),this._disableDelayedDragEvents(),St.splice(St.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!nt){if(V("hideClone",this),Ft.eventCanceled)return;T(et,"display","none"),this.options.removeCloneOnHide&&et.parentNode&&et.parentNode.removeChild(et),nt=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(nt){if(V("showClone",this),Ft.eventCanceled)return;Z.parentNode!=Q||this.options.group.revertClone?J?Q.insertBefore(et,J):Q.appendChild(et):Q.insertBefore(et,Z),this.options.group.revertClone&&this.animate(Z,et),T(et,"display",""),nt=!1}}else this._hideClone()}},It&&m(document,"touchmove",(function(t){(Ft.active||yt)&&t.cancelable&&t.preventDefault()})),Ft.utils={on:m,off:b,css:T,find:x,is:function(t,e){return!!E(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},throttle:R,closest:E,toggleClass:_,clone:F,index:N,nextTick:zt,cancelNextTick:Gt,detectDirection:Nt,getChild:A,expando:j},Ft.get=function(t){return t[j]},Ft.mount=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e[0].constructor===Array&&(e=e[0]),e.forEach((function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(Ft.utils=r(r({},Ft.utils),t.utils)),G.mount(t)}))},Ft.create=function(t,e){return new Ft(t,e)},Ft.version="1.15.3";var Ut,Vt,qt,Zt,$t,Kt,Qt=[],Jt=!1;function te(){Qt.forEach((function(t){clearInterval(t.pid)})),Qt=[]}function ee(){clearInterval(Kt)}var ne=R((function(t,e,n,o){if(e.scroll){var r,i=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,l=e.scrollSensitivity,s=e.scrollSpeed,c=I(),d=!1;Vt!==n&&(Vt=n,te(),Ut=e.scroll,r=e.scrollFn,!0===Ut&&(Ut=X(n,!0)));var u=0,h=Ut;do{var f=h,p=O(f),g=p.top,v=p.bottom,m=p.left,b=p.right,w=p.width,y=p.height,E=void 0,S=void 0,D=f.scrollWidth,_=f.scrollHeight,C=T(f),x=f.scrollLeft,M=f.scrollTop;f===c?(E=w<D&&("auto"===C.overflowX||"scroll"===C.overflowX||"visible"===C.overflowX),S=y<_&&("auto"===C.overflowY||"scroll"===C.overflowY||"visible"===C.overflowY)):(E=w<D&&("auto"===C.overflowX||"scroll"===C.overflowX),S=y<_&&("auto"===C.overflowY||"scroll"===C.overflowY));var A=E&&(Math.abs(b-i)<=l&&x+w<D)-(Math.abs(m-i)<=l&&!!x),P=S&&(Math.abs(v-a)<=l&&M+y<_)-(Math.abs(g-a)<=l&&!!M);if(!Qt[u])for(var N=0;N<=u;N++)Qt[N]||(Qt[N]={});Qt[u].vx==A&&Qt[u].vy==P&&Qt[u].el===f||(Qt[u].el=f,Qt[u].vx=A,Qt[u].vy=P,clearInterval(Qt[u].pid),0==A&&0==P||(d=!0,Qt[u].pid=setInterval(function(){o&&0===this.layer&&Ft.active._onTouchMove($t);var e=Qt[this.layer].vy?Qt[this.layer].vy*s:0,n=Qt[this.layer].vx?Qt[this.layer].vx*s:0;"function"===typeof r&&"continue"!==r.call(Ft.dragged.parentNode[j],n,e,t,$t,Qt[this.layer].el)||B(Qt[this.layer].el,n,e)}.bind({layer:u}),24))),u++}while(e.bubbleScroll&&h!==c&&(h=X(h,!1)));Jt=d}}),30),oe=function(t){var e=t.originalEvent,n=t.putSortable,o=t.dragEl,r=t.activeSortable,i=t.dispatchSortableEvent,a=t.hideGhostForTarget,l=t.unhideGhostForTarget;if(e){var s=n||r;a();var c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,d=document.elementFromPoint(c.clientX,c.clientY);l(),s&&!s.el.contains(d)&&(i("spill"),this.onSpill({dragEl:o,putSortable:n}))}};function re(){}function ie(){}re.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var o=A(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(e,o):this.sortable.el.appendChild(e),this.sortable.animateAll(),n&&n.animateAll()},drop:oe},l(re,{pluginName:"revertOnSpill"}),ie.prototype={onSpill:function(t){var e=t.dragEl,n=t.putSortable||this.sortable;n.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),n.animateAll()},drop:oe},l(ie,{pluginName:"removeOnSpill"}),Ft.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"===typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){var e=t.originalEvent;this.sortable.nativeDraggable?m(document,"dragover",this._handleAutoScroll):this.options.supportPointer?m(document,"pointermove",this._handleFallbackAutoScroll):e.touches?m(document,"touchmove",this._handleFallbackAutoScroll):m(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var e=t.originalEvent;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e)},drop:function(){this.sortable.nativeDraggable?b(document,"dragover",this._handleAutoScroll):(b(document,"pointermove",this._handleFallbackAutoScroll),b(document,"touchmove",this._handleFallbackAutoScroll),b(document,"mousemove",this._handleFallbackAutoScroll)),ee(),te(),clearTimeout(S),S=void 0},nulling:function(){$t=Vt=Ut=Jt=Kt=qt=Zt=null,Qt.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,e){var n=this,o=(t.touches?t.touches[0]:t).clientX,r=(t.touches?t.touches[0]:t).clientY,i=document.elementFromPoint(o,r);if($t=t,e||this.options.forceAutoScrollFallback||u||d||f){ne(t,this.options,i,e);var a=X(i,!0);!Jt||Kt&&o===qt&&r===Zt||(Kt&&ee(),Kt=setInterval((function(){var i=X(document.elementFromPoint(o,r),!0);i!==a&&(a=i,te()),ne(t,n.options,i,e)}),10),qt=o,Zt=r)}else{if(!this.options.bubbleScroll||X(i,!0)===I())return void te();ne(t,this.options,X(i,!1),!1)}}},l(t,{pluginName:"scroll",initializeByDefault:!0})}),Ft.mount(ie,re);const ae=new Set,le={ghostClass:"calcite-sortable--ghost",chosenClass:"calcite-sortable--chosen",dragClass:"calcite-sortable--drag",fallbackClass:"calcite-sortable--fallback"};function se(t){if(ue(t))return;ce(t),ae.add(t);const{group:e,handleSelector:n,dragSelector:o}=t;t.sortable=Ft.create(t.el,{dataIdAttr:"id",...le,...!!o&&{draggable:o},...!!e&&{group:{name:e,...!!t.canPull&&{pull:(e,n,o,r)=>{let{newIndex:i,oldIndex:a}=r;return t.canPull({toEl:e.el,fromEl:n.el,dragEl:o,newIndex:i,oldIndex:a})}},...!!t.canPut&&{put:(e,n,o,r)=>{let{newIndex:i,oldIndex:a}=r;return t.canPut({toEl:e.el,fromEl:n.el,dragEl:o,newIndex:i,oldIndex:a})}}}},handle:n,filter:`${n}[disabled]`,onStart:e=>{let{from:n,item:o,to:r,newIndex:i,oldIndex:a}=e;de.active=!0,Array.from(ae).forEach((t=>t.onGlobalDragStart())),t.onDragStart({fromEl:n,dragEl:o,toEl:r,newIndex:i,oldIndex:a})},onEnd:e=>{let{from:n,item:o,to:r,newIndex:i,oldIndex:a}=e;de.active=!1,Array.from(ae).forEach((t=>t.onGlobalDragEnd())),t.onDragEnd({fromEl:n,dragEl:o,toEl:r,newIndex:i,oldIndex:a})},onSort:e=>{let{from:n,item:o,to:r,newIndex:i,oldIndex:a}=e;t.onDragSort({fromEl:n,dragEl:o,toEl:r,newIndex:i,oldIndex:a})}})}function ce(t){ue(t)||(ae.delete(t),t.sortable?.destroy(),t.sortable=null)}const de={active:!1};function ue(t){return t.dragEnabled&&de.active}}}]);
//# sourceMappingURL=10167.1198cdc4.chunk.js.map