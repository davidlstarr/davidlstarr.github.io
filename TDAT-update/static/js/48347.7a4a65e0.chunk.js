/*! For license information please see 48347.7a4a65e0.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[48347],{78588:(t,e,n)=>{n.d(e,{S:()=>l,a:()=>v,b:()=>g,c:()=>h,d:()=>j,f:()=>o,i:()=>E,r:()=>r});const o="object"==typeof global&&global&&global.Object===Object&&global;var i="object"==typeof self&&self&&self.Object===Object&&self;const r=o||i||Function("return this")();const l=r.Symbol;var a=Object.prototype,c=a.hasOwnProperty,s=a.toString,f=l?l.toStringTag:void 0;var u=Object.prototype.toString;var d="[object Null]",p="[object Undefined]",m=l?l.toStringTag:void 0;function g(t){return null==t?void 0===t?p:d:m&&m in Object(t)?function(t){var e=c.call(t,f),n=t[f];try{t[f]=void 0;var o=!0}catch(r){}var i=s.call(t);return o&&(e?t[f]=n:delete t[f]),i}(t):function(t){return u.call(t)}(t)}function h(t){return null!=t&&"object"==typeof t}var y="[object Symbol]";function v(t){return"symbol"==typeof t||h(t)&&g(t)==y}var w=/\s/;var x=/^\s+/;function b(t){return t?t.slice(0,function(t){for(var e=t.length;e--&&w.test(t.charAt(e)););return e}(t)+1).replace(x,""):t}function E(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var T=NaN,R=/^[-+]0x[0-9a-f]+$/i,O=/^0b[01]+$/i,L=/^0o[0-7]+$/i,P=parseInt;function S(t){if("number"==typeof t)return t;if(v(t))return T;if(E(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=E(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=b(t);var n=O.test(t);return n||L.test(t)?P(t.slice(2),n?2:8):R.test(t)?T:+t}const D=function(){return r.Date.now()};var A="Expected a function",k=Math.max,C=Math.min;function j(t,e,n){var o,i,r,l,a,c,s=0,f=!1,u=!1,d=!0;if("function"!=typeof t)throw new TypeError(A);function p(e){var n=o,r=i;return o=i=void 0,s=e,l=t.apply(r,n)}function m(t){var n=t-c;return void 0===c||n>=e||n<0||u&&t-s>=r}function g(){var t=D();if(m(t))return h(t);a=setTimeout(g,function(t){var n=e-(t-c);return u?C(n,r-(t-s)):n}(t))}function h(t){return a=void 0,d&&o?p(t):(o=i=void 0,l)}function y(){var t=D(),n=m(t);if(o=arguments,i=this,c=t,n){if(void 0===a)return function(t){return s=t,a=setTimeout(g,e),f?p(t):l}(c);if(u)return clearTimeout(a),a=setTimeout(g,e),p(c)}return void 0===a&&(a=setTimeout(g,e)),l}return e=S(e)||0,E(n)&&(f=!!n.leading,r=(u="maxWait"in n)?k(S(n.maxWait)||0,e):r,d="trailing"in n?!!n.trailing:d),y.cancel=function(){void 0!==a&&clearTimeout(a),s=0,o=c=i=a=void 0},y.flush=function(){return void 0===a?l:h(D())},y}},24192:(t,e,n)=>{n.d(e,{F:()=>Dt,a:()=>Bt,b:()=>St,c:()=>Nt,d:()=>$t,e:()=>Pt,f:()=>kt,r:()=>jt});var o=n(24282),i=n(39879),r=n(32811),l=n(78588);const a=["top","right","bottom","left"],c=["start","end"],s=a.reduce(((t,e)=>t.concat(e,e+"-"+c[0],e+"-"+c[1])),[]),f=Math.min,u=Math.max,d=Math.round,p=Math.floor,m=t=>({x:t,y:t}),g={left:"right",right:"left",bottom:"top",top:"bottom"},h={start:"end",end:"start"};function y(t,e,n){return u(t,f(e,n))}function v(t,e){return"function"===typeof t?t(e):t}function w(t){return t.split("-")[0]}function x(t){return t.split("-")[1]}function b(t){return"x"===t?"y":"x"}function E(t){return"y"===t?"height":"width"}function T(t){return["top","bottom"].includes(w(t))?"y":"x"}function R(t){return b(T(t))}function O(t,e,n){void 0===n&&(n=!1);const o=x(t),i=R(t),r=E(i);let l="x"===i?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[r]>e.floating[r]&&(l=P(l)),[l,P(l)]}function L(t){return t.replace(/start|end/g,(t=>h[t]))}function P(t){return t.replace(/left|right|bottom|top/g,(t=>g[t]))}function S(t){return"number"!==typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function D(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function A(t,e,n){let{reference:o,floating:i}=t;const r=T(e),l=R(e),a=E(l),c=w(e),s="y"===r,f=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,d=o[a]/2-i[a]/2;let p;switch(c){case"top":p={x:f,y:o.y-i.height};break;case"bottom":p={x:f,y:o.y+o.height};break;case"right":p={x:o.x+o.width,y:u};break;case"left":p={x:o.x-i.width,y:u};break;default:p={x:o.x,y:o.y}}switch(x(e)){case"start":p[l]-=d*(n&&s?-1:1);break;case"end":p[l]+=d*(n&&s?-1:1)}return p}async function k(t,e){var n;void 0===e&&(e={});const{x:o,y:i,platform:r,rects:l,elements:a,strategy:c}=t,{boundary:s="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:d=!1,padding:p=0}=v(e,t),m=S(p),g=a[d?"floating"===u?"reference":"floating":u],h=D(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(g)))||n?g:g.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(a.floating)),boundary:s,rootBoundary:f,strategy:c})),y="floating"===u?{x:o,y:i,width:l.floating.width,height:l.floating.height}:l.reference,w=await(null==r.getOffsetParent?void 0:r.getOffsetParent(a.floating)),x=await(null==r.isElement?void 0:r.isElement(w))&&await(null==r.getScale?void 0:r.getScale(w))||{x:1,y:1},b=D(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:y,offsetParent:w,strategy:c}):y);return{top:(h.top-b.top+m.top)/x.y,bottom:(b.bottom-h.bottom+m.bottom)/x.y,left:(h.left-b.left+m.left)/x.x,right:(b.right-h.right+m.right)/x.x}}function C(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function j(t){return a.some((e=>t[e]>=0))}function F(){return"undefined"!==typeof window}function H(t){return N(t)?(t.nodeName||"").toLowerCase():"#document"}function W(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function M(t){var e;return null==(e=(N(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function N(t){return!!F()&&(t instanceof Node||t instanceof W(t).Node)}function B(t){return!!F()&&(t instanceof Element||t instanceof W(t).Element)}function $(t){return!!F()&&(t instanceof HTMLElement||t instanceof W(t).HTMLElement)}function V(t){return!(!F()||"undefined"===typeof ShadowRoot)&&(t instanceof ShadowRoot||t instanceof W(t).ShadowRoot)}function z(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=X(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function _(t){return["table","td","th"].includes(H(t))}function I(t){return[":popover-open",":modal"].some((e=>{try{return t.matches(e)}catch(n){return!1}}))}function U(t){const e=Y(),n=B(t)?X(t):t;return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function Y(){return!("undefined"===typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function q(t){return["html","body","#document"].includes(H(t))}function X(t){return W(t).getComputedStyle(t)}function G(t){return B(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function J(t){if("html"===H(t))return t;const e=t.assignedSlot||t.parentNode||V(t)&&t.host||M(t);return V(e)?e.host:e}function K(t){const e=J(t);return q(e)?t.ownerDocument?t.ownerDocument.body:t.body:$(e)&&z(e)?e:K(e)}function Q(t,e,n){var o;void 0===e&&(e=[]),void 0===n&&(n=!0);const i=K(t),r=i===(null==(o=t.ownerDocument)?void 0:o.body),l=W(i);if(r){const t=function(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}(l);return e.concat(l,l.visualViewport||[],z(i)?i:[],t&&n?Q(t):[])}return e.concat(i,Q(i,[],n))}function Z(t){const e=X(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=$(t),r=i?t.offsetWidth:n,l=i?t.offsetHeight:o,a=d(n)!==r||d(o)!==l;return a&&(n=r,o=l),{width:n,height:o,$:a}}function tt(t){return B(t)?t:t.contextElement}function et(t){const e=tt(t);if(!$(e))return m(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=Z(e);let l=(r?d(n.width):n.width)/o,a=(r?d(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),a&&Number.isFinite(a)||(a=1),{x:l,y:a}}const nt=m(0);function ot(t){const e=W(t);return Y()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:nt}function it(t,e,n,o){void 0===e&&(e=!1),void 0===n&&(n=!1);const i=t.getBoundingClientRect(),r=tt(t);let l=m(1);e&&(o?B(o)&&(l=et(o)):l=et(t));const a=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==W(t))&&e}(r,n,o)?ot(r):m(0);let c=(i.left+a.x)/l.x,s=(i.top+a.y)/l.y,f=i.width/l.x,u=i.height/l.y;if(r){const t=W(r),e=o&&B(o)?W(o):o;let n=t,i=n.frameElement;for(;i&&o&&e!==n;){const t=et(i),e=i.getBoundingClientRect(),o=X(i),r=e.left+(i.clientLeft+parseFloat(o.paddingLeft))*t.x,l=e.top+(i.clientTop+parseFloat(o.paddingTop))*t.y;c*=t.x,s*=t.y,f*=t.x,u*=t.y,c+=r,s+=l,n=W(i),i=n.frameElement}}return D({width:f,height:u,x:c,y:s})}function rt(t){return it(M(t)).left+G(t).scrollLeft}function lt(t,e,n){let o;if("viewport"===e)o=function(t,e){const n=W(t),o=M(t),i=n.visualViewport;let r=o.clientWidth,l=o.clientHeight,a=0,c=0;if(i){r=i.width,l=i.height;const t=Y();(!t||t&&"fixed"===e)&&(a=i.offsetLeft,c=i.offsetTop)}return{width:r,height:l,x:a,y:c}}(t,n);else if("document"===e)o=function(t){const e=M(t),n=G(t),o=t.ownerDocument.body,i=u(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=u(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let l=-n.scrollLeft+rt(t);const a=-n.scrollTop;return"rtl"===X(o).direction&&(l+=u(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:l,y:a}}(M(t));else if(B(e))o=function(t,e){const n=it(t,!0,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=$(t)?et(t):m(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:i*r.x,y:o*r.y}}(e,n);else{const n=ot(t);o={...e,x:e.x-n.x,y:e.y-n.y}}return D(o)}function at(t,e){const n=J(t);return!(n===e||!B(n)||q(n))&&("fixed"===X(n).position||at(n,e))}function ct(t,e,n){const o=$(e),i=M(e),r="fixed"===n,l=it(t,!0,r,e);let a={scrollLeft:0,scrollTop:0};const c=m(0);if(o||!o&&!r)if(("body"!==H(e)||z(i))&&(a=G(e)),o){const t=it(e,!0,r,e);c.x=t.x+e.clientLeft,c.y=t.y+e.clientTop}else i&&(c.x=rt(i));return{x:l.left+a.scrollLeft-c.x,y:l.top+a.scrollTop-c.y,width:l.width,height:l.height}}function st(t){return"static"===X(t).position}function ft(t,e){return $(t)&&"fixed"!==X(t).position?e?e(t):t.offsetParent:null}function ut(t,e){const n=W(t);if(I(t))return n;if(!$(t)){let e=J(t);for(;e&&!q(e);){if(B(e)&&!st(e))return e;e=J(e)}return n}let o=ft(t,e);for(;o&&_(o)&&st(o);)o=ft(o,e);return o&&q(o)&&st(o)&&!U(o)?n:o||function(t){let e=J(t);for(;$(e)&&!q(e);){if(U(e))return e;if(I(e))return null;e=J(e)}return null}(t)||n}const dt={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const r="fixed"===i,l=M(o),a=!!e&&I(e.floating);if(o===l||a&&r)return n;let c={scrollLeft:0,scrollTop:0},s=m(1);const f=m(0),u=$(o);if((u||!u&&!r)&&(("body"!==H(o)||z(l))&&(c=G(o)),$(o))){const t=it(o);s=et(o),f.x=t.x+o.clientLeft,f.y=t.y+o.clientTop}return{width:n.width*s.x,height:n.height*s.y,x:n.x*s.x-c.scrollLeft*s.x+f.x,y:n.y*s.y-c.scrollTop*s.y+f.y}},getDocumentElement:M,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[..."clippingAncestors"===n?I(e)?[]:function(t,e){const n=e.get(t);if(n)return n;let o=Q(t,[],!1).filter((t=>B(t)&&"body"!==H(t))),i=null;const r="fixed"===X(t).position;let l=r?J(t):t;for(;B(l)&&!q(l);){const e=X(l),n=U(l);n||"fixed"!==e.position||(i=null),(r?!n&&!i:!n&&"static"===e.position&&i&&["absolute","fixed"].includes(i.position)||z(l)&&!n&&at(t,l))?o=o.filter((t=>t!==l)):i=e,l=J(l)}return e.set(t,o),o}(e,this._c):[].concat(n),o],l=r[0],a=r.reduce(((t,n)=>{const o=lt(e,n,i);return t.top=u(o.top,t.top),t.right=f(o.right,t.right),t.bottom=f(o.bottom,t.bottom),t.left=u(o.left,t.left),t}),lt(e,l,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:ut,getElementRects:async function(t){const e=this.getOffsetParent||ut,n=this.getDimensions,o=await n(t.floating);return{reference:ct(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:n}=Z(t);return{width:e,height:n}},getScale:et,isElement:B,isRTL:function(t){return"rtl"===X(t).direction}};function pt(t,e,n,o){void 0===o&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:l="function"===typeof ResizeObserver,layoutShift:a="function"===typeof IntersectionObserver,animationFrame:c=!1}=o,s=tt(t),d=i||r?[...s?Q(s):[],...Q(e)]:[];d.forEach((t=>{i&&t.addEventListener("scroll",n,{passive:!0}),r&&t.addEventListener("resize",n)}));const m=s&&a?function(t,e){let n,o=null;const i=M(t);function r(){var t;clearTimeout(n),null==(t=o)||t.disconnect(),o=null}return function l(a,c){void 0===a&&(a=!1),void 0===c&&(c=1),r();const{left:s,top:d,width:m,height:g}=t.getBoundingClientRect();if(a||e(),!m||!g)return;const h={rootMargin:-p(d)+"px "+-p(i.clientWidth-(s+m))+"px "+-p(i.clientHeight-(d+g))+"px "+-p(s)+"px",threshold:u(0,f(1,c))||1};let y=!0;function v(t){const e=t[0].intersectionRatio;if(e!==c){if(!y)return l();e?l(!1,e):n=setTimeout((()=>{l(!1,1e-7)}),1e3)}y=!1}try{o=new IntersectionObserver(v,{...h,root:i.ownerDocument})}catch(w){o=new IntersectionObserver(v,h)}o.observe(t)}(!0),r}(s,n):null;let g,h=-1,y=null;l&&(y=new ResizeObserver((t=>{let[o]=t;o&&o.target===s&&y&&(y.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame((()=>{var t;null==(t=y)||t.observe(e)}))),n()})),s&&!c&&y.observe(s),y.observe(e));let v=c?it(t):null;return c&&function e(){const o=it(t);!v||o.x===v.x&&o.y===v.y&&o.width===v.width&&o.height===v.height||n();v=o,g=requestAnimationFrame(e)}(),n(),()=>{var t;d.forEach((t=>{i&&t.removeEventListener("scroll",n),r&&t.removeEventListener("resize",n)})),null==m||m(),null==(t=y)||t.disconnect(),y=null,c&&cancelAnimationFrame(g)}}const mt=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:l,middlewareData:a}=e,c=await async function(t,e){const{placement:n,platform:o,elements:i}=t,r=await(null==o.isRTL?void 0:o.isRTL(i.floating)),l=w(n),a=x(n),c="y"===T(n),s=["left","top"].includes(l)?-1:1,f=r&&c?-1:1,u=v(e,t);let{mainAxis:d,crossAxis:p,alignmentAxis:m}="number"===typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return a&&"number"===typeof m&&(p="end"===a?-1*m:m),c?{x:p*f,y:d*s}:{x:d*s,y:p*f}}(e,t);return l===(null==(n=a.offset)?void 0:n.placement)&&null!=(o=a.arrow)&&o.alignmentOffset?{}:{x:i+c.x,y:r+c.y,data:{...c,placement:l}}}}},gt=function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i;const{rects:r,middlewareData:l,placement:a,platform:c,elements:f}=e,{crossAxis:u=!1,alignment:d,allowedPlacements:p=s,autoAlignment:m=!0,...g}=v(t,e),h=void 0!==d||p===s?function(t,e,n){return(t?[...n.filter((e=>x(e)===t)),...n.filter((e=>x(e)!==t))]:n.filter((t=>w(t)===t))).filter((n=>!t||x(n)===t||!!e&&L(n)!==n))}(d||null,m,p):p,y=await k(e,g),b=(null==(n=l.autoPlacement)?void 0:n.index)||0,E=h[b];if(null==E)return{};const T=O(E,r,await(null==c.isRTL?void 0:c.isRTL(f.floating)));if(a!==E)return{reset:{placement:h[0]}};const R=[y[w(E)],y[T[0]],y[T[1]]],P=[...(null==(o=l.autoPlacement)?void 0:o.overflows)||[],{placement:E,overflows:R}],S=h[b+1];if(S)return{data:{index:b+1,overflows:P},reset:{placement:S}};const D=P.map((t=>{const e=x(t.placement);return[t.placement,e&&u?t.overflows.slice(0,2).reduce(((t,e)=>t+e),0):t.overflows[0],t.overflows]})).sort(((t,e)=>t[1]-e[1])),A=(null==(i=D.filter((t=>t[2].slice(0,x(t[0])?2:3).every((t=>t<=0))))[0])?void 0:i[0])||D[0][0];return A!==a?{data:{index:b+1,overflows:P},reset:{placement:A}}:{}}}},ht=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:l=!1,limiter:a={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...c}=v(t,e),s={x:n,y:o},f=await k(e,c),u=T(w(i)),d=b(u);let p=s[d],m=s[u];if(r){const t="y"===d?"bottom":"right";p=y(p+f["y"===d?"top":"left"],p,p-f[t])}if(l){const t="y"===u?"bottom":"right";m=y(m+f["y"===u?"top":"left"],m,m-f[t])}const g=a.fn({...e,[d]:p,[u]:m});return{...g,data:{x:g.x-n,y:g.y-o}}}}},yt=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:r,rects:l,initialPlacement:a,platform:c,elements:s}=e,{mainAxis:f=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:g=!0,...h}=v(t,e);if(null!=(n=r.arrow)&&n.alignmentOffset)return{};const y=w(i),b=w(a)===a,E=await(null==c.isRTL?void 0:c.isRTL(s.floating)),T=d||(b||!g?[P(a)]:function(t){const e=P(t);return[L(t),e,L(e)]}(a));d||"none"===m||T.push(...function(t,e,n,o){const i=x(t);let r=function(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],l=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:l;default:return[]}}(w(t),"start"===n,o);return i&&(r=r.map((t=>t+"-"+i)),e&&(r=r.concat(r.map(L)))),r}(a,g,m,E));const R=[a,...T],S=await k(e,h),D=[];let A=(null==(o=r.flip)?void 0:o.overflows)||[];if(f&&D.push(S[y]),u){const t=O(i,l,E);D.push(S[t[0]],S[t[1]])}if(A=[...A,{placement:i,overflows:D}],!D.every((t=>t<=0))){var C,j;const t=((null==(C=r.flip)?void 0:C.index)||0)+1,e=R[t];if(e)return{data:{index:t,overflows:A},reset:{placement:e}};let n=null==(j=A.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:j.placement;if(!n)switch(p){case"bestFit":{var F;const t=null==(F=A.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:F[0];t&&(n=t);break}case"initialPlacement":n=a}if(i!==n)return{reset:{placement:n}}}return{}}}},vt=function(t){return void 0===t&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=v(t,e);switch(o){case"referenceHidden":{const t=C(await k(e,{...i,elementContext:"reference"}),n.reference);return{data:{referenceHiddenOffsets:t,referenceHidden:j(t)}}}case"escaped":{const t=C(await k(e,{...i,altBoundary:!0}),n.floating);return{data:{escapedOffsets:t,escaped:j(t)}}}default:return{}}}}},wt=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:l,elements:a,middlewareData:c}=e,{element:s,padding:u=0}=v(t,e)||{};if(null==s)return{};const d=S(u),p={x:n,y:o},m=R(i),g=E(m),h=await l.getDimensions(s),w="y"===m,b=w?"top":"left",T=w?"bottom":"right",O=w?"clientHeight":"clientWidth",L=r.reference[g]+r.reference[m]-p[m]-r.floating[g],P=p[m]-r.reference[m],D=await(null==l.getOffsetParent?void 0:l.getOffsetParent(s));let A=D?D[O]:0;A&&await(null==l.isElement?void 0:l.isElement(D))||(A=a.floating[O]||r.floating[g]);const k=L/2-P/2,C=A/2-h[g]/2-1,j=f(d[b],C),F=f(d[T],C),H=j,W=A-h[g]-F,M=A/2-h[g]/2+k,N=y(H,M,W),B=!c.arrow&&null!=x(i)&&M!==N&&r.reference[g]/2-(M<H?j:F)-h[g]/2<0,$=B?M<H?M-H:M-W:0;return{[m]:p[m]+$,data:{[m]:N,centerOffset:M-N-$,...B&&{alignmentOffset:$}},reset:B}}}),xt=(t,e,n)=>{const o=new Map,i={platform:dt,...n},r={...i.platform,_c:o};return(async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:l}=n,a=r.filter(Boolean),c=await(null==l.isRTL?void 0:l.isRTL(e));let s=await l.getElementRects({reference:t,floating:e,strategy:i}),{x:f,y:u}=A(s,o,c),d=o,p={},m=0;for(let g=0;g<a.length;g++){const{name:n,fn:r}=a[g],{x:h,y:y,data:v,reset:w}=await r({x:f,y:u,initialPlacement:o,placement:d,strategy:i,middlewareData:p,rects:s,platform:l,elements:{reference:t,floating:e}});f=null!=h?h:f,u=null!=y?y:u,p={...p,[n]:{...p[n],...v}},w&&m<=50&&(m++,"object"===typeof w&&(w.placement&&(d=w.placement),w.rects&&(s=!0===w.rects?await l.getElementRects({reference:t,floating:e,strategy:i}):w.rects),({x:f,y:u}=A(s,d,c))),g=-1)}return{x:f,y:u,placement:d,strategy:i,middlewareData:p}})(t,e,{...i,platform:r})};function bt(t){return function(t){for(let e=t;e;e=Et(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=Et(t);e;e=Et(e)){if(!(e instanceof Element))continue;const t=getComputedStyle(e);if("contents"!==t.display){if("static"!==t.position||U(t))return e;if("BODY"===e.tagName)return e}}return null}(t)}function Et(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function Tt(t){const e=window.devicePixelRatio||1;return Math.round(t*e)/e}!function(){if((0,r.i)()){const t=dt.getOffsetParent;dt.getOffsetParent=e=>t(e,bt)}}();const Rt=async(t,e)=>{let{referenceEl:n,floatingEl:o,overlayPositioning:r="absolute",placement:l,flipDisabled:a,flipPlacements:c,offsetDistance:s,offsetSkidding:f,arrowEl:u,type:d}=e;if(!n||!o)return null;const p="rtl"===(0,i.a)(o),{x:m,y:g,placement:h,strategy:y,middlewareData:v}=await xt(n,o,{strategy:r,placement:"auto"===l||"auto-start"===l||"auto-end"===l?void 0:Ct(l,p),middleware:At({placement:l,flipDisabled:a,flipPlacements:c?.map((t=>Ct(t,p))),offsetDistance:s,offsetSkidding:f,arrowEl:u,type:d})});if(u&&v.arrow){const{x:e,y:n}=v.arrow,o=h.split("-")[0],i=null!=e?"left":"top",r=Ft[o],l={left:"",top:"",bottom:"",right:""};"floatingLayout"in t&&(t.floatingLayout="left"===o||"right"===o?"horizontal":"vertical"),Object.assign(u.style,{...l,[i]:`${"left"==i?e:n}px`,[o]:"100%",transform:r})}const w=v.hide?.referenceHidden,x=w?"hidden":null,b=x?"none":null;o.setAttribute(Ot,h);const{open:E}=t;Object.assign(o.style,{visibility:x,pointerEvents:b,position:y,transform:E?`translate(${Tt(m)}px,${Tt(g)}px)`:"",top:0,left:0})},Ot="data-placement",Lt=["top","bottom","right","left","top-start","top-end","bottom-start","bottom-end","right-start","right-end","left-start","left-end","leading","trailing","leading-start","leading-end","trailing-start","trailing-end"],Pt="bottom-start",St="bottom-end",Dt={animation:"calcite-floating-ui-anim",animationActive:"calcite-floating-ui-anim--active",arrow:"calcite-floating-ui-arrow",arrowStroke:"calcite-floating-ui-arrow__stroke"};function At(t){let{placement:e,flipDisabled:n,flipPlacements:o,offsetDistance:i,offsetSkidding:r,arrowEl:l,type:a}=t;const c=[ht(),vt()];if("menu"===a)return[...c,yt({fallbackPlacements:o||["top-start","top","top-end","bottom-start","bottom","bottom-end"]})];if("popover"===a||"tooltip"===a){const t=[...c,mt({mainAxis:"number"===typeof i?i:0,crossAxis:"number"===typeof r?r:0})];return"auto"===e||"auto-start"===e||"auto-end"===e?t.push(gt({alignment:"auto-start"===e?"start":"auto-end"===e?"end":null})):n||t.push(yt(o?{fallbackPlacements:o}:{})),l&&t.push(wt({element:l})),t}return[]}function kt(t,e){const n=t.filter((t=>Lt.includes(t)));return n.length!==t.length&&console.warn(`${e.tagName}: Invalid value found in: flipPlacements. Try any of these: ${Lt.map((t=>`"${t}"`)).join(", ").trim()}`,{el:e}),n}function Ct(t){const e=["left","right"];return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&e.reverse(),t.replace(/leading/gi,e[0]).replace(/trailing/gi,e[1])}async function jt(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!t.open||!e.floatingEl||!e.referenceEl)return;if(!Ht.get(t))return Mt(t,e.referenceEl,e.floatingEl);const i=n?function(t){let e=Wt.get(t);if(e)return e;return e=(0,l.d)(Rt,o.D.reposition,{leading:!0,maxWait:o.D.reposition}),Wt.set(t,e),e}(t):Rt;await i(t,e)}const Ft={top:"",left:"rotate(-90deg)",bottom:"rotate(180deg)",right:"rotate(90deg)"},Ht=new WeakMap,Wt=new WeakMap;async function Mt(t,e,n){if(!n.isConnected)return;const o=(0,r.i)()?pt:(t,e,n)=>(n(),()=>{});let i;Ht.set(t,{state:"pending"});const l=o(e,n,(()=>{const e=t.reposition();i||(i=e)}));return Ht.set(t,{state:"active",cleanUp:l}),i}async function Nt(t,e,n){if(n&&e&&(Bt(t,e,n),Object.assign(n.style,{visibility:"hidden",pointerEvents:"none",position:t.overlayPositioning}),t.open))return Mt(t,e,n)}function Bt(t,e,n){if(!n||!e)return;const o=Ht.get(t);"active"===o?.state&&o.cleanUp(),Ht.delete(t),Wt.get(t)?.cancel(),Wt.delete(t)}const $t=Math.ceil(Math.hypot(4,4))},37268:(t,e,n)=>{n.d(e,{o:()=>a});var o=n(95146),i=n(39879);const r=o.gv;function l(t){return"opened"in t?t.opened:t.open}function a(t){r((()=>{t.transitionEl&&(0,i.w)(t.transitionEl,t.openTransitionProp,(()=>{l(t)?t.onBeforeOpen():t.onBeforeClose()}),(()=>{l(t)?t.onOpen():t.onClose()}))}))}}}]);
//# sourceMappingURL=48347.7a4a65e0.chunk.js.map