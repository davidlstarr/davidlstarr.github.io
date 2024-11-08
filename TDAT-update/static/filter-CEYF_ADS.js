import{S as d,i as g,r as M,b as l,f as U,a as R,c as I}from"./debounce-BXUnv6U0.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */function N(r,e){for(var t=-1,o=r==null?0:r.length,i=Array(o);++t<o;)i[t]=e(r[t],t,r);return i}var C=Array.isArray;const E=C;var G=1/0,T=d?d.prototype:void 0,j=T?T.toString:void 0;function O(r){if(typeof r=="string")return r;if(E(r))return N(r,O)+"";if(R(r))return j?j.call(r):"";var e=r+"";return e=="0"&&1/r==-G?"-0":e}function L(r){return r}var _="[object AsyncFunction]",D="[object Function]",K="[object GeneratorFunction]",V="[object Proxy]";function q(r){if(!I(r))return!1;var e=l(r);return e==D||e==K||e==_||e==V}var X=9007199254740991,H=/^(?:0|[1-9]\d*)$/;function W(r,e){var t=typeof r;return e=e??X,!!e&&(t=="number"||t!="symbol"&&H.test(r))&&r>-1&&r%1==0&&r<e}var Y=9007199254740991;function w(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=Y}function z(r){return r!=null&&w(r.length)&&!q(r)}var J=Object.prototype;function Q(r){var e=r&&r.constructor,t=typeof e=="function"&&e.prototype||J;return r===t}function Z(r,e){for(var t=-1,o=Array(r);++t<r;)o[t]=e(t);return o}var k="[object Arguments]";function A(r){return g(r)&&l(r)==k}var F=Object.prototype,rr=F.hasOwnProperty,er=F.propertyIsEnumerable,tr=A(function(){return arguments}())?A:function(r){return g(r)&&rr.call(r,"callee")&&!er.call(r,"callee")};const nr=tr;function or(){return!1}var P=typeof exports=="object"&&exports&&!exports.nodeType&&exports,m=P&&typeof module=="object"&&module&&!module.nodeType&&module,ar=m&&m.exports===P,x=ar?M.Buffer:void 0,sr=x?x.isBuffer:void 0,ir=sr||or;const fr=ir;var cr="[object Arguments]",ur="[object Array]",pr="[object Boolean]",yr="[object Date]",br="[object Error]",gr="[object Function]",lr="[object Map]",dr="[object Number]",Tr="[object Object]",jr="[object RegExp]",Ar="[object Set]",mr="[object String]",xr="[object WeakMap]",hr="[object ArrayBuffer]",$r="[object DataView]",Ir="[object Float32Array]",Er="[object Float64Array]",Or="[object Int8Array]",wr="[object Int16Array]",Fr="[object Int32Array]",Pr="[object Uint8Array]",vr="[object Uint8ClampedArray]",Sr="[object Uint16Array]",Br="[object Uint32Array]",n={};n[Ir]=n[Er]=n[Or]=n[wr]=n[Fr]=n[Pr]=n[vr]=n[Sr]=n[Br]=!0;n[cr]=n[ur]=n[hr]=n[pr]=n[$r]=n[yr]=n[br]=n[gr]=n[lr]=n[dr]=n[Tr]=n[jr]=n[Ar]=n[mr]=n[xr]=!1;function Mr(r){return g(r)&&w(r.length)&&!!n[l(r)]}function Ur(r){return function(e){return r(e)}}var v=typeof exports=="object"&&exports&&!exports.nodeType&&exports,y=v&&typeof module=="object"&&module&&!module.nodeType&&module,Rr=y&&y.exports===v,b=Rr&&U.process,Nr=function(){try{var r=y&&y.require&&y.require("util").types;return r||b&&b.binding&&b.binding("util")}catch{}}();const h=Nr;var $=h&&h.isTypedArray,Cr=$?Ur($):Mr;const Gr=Cr;var Lr=Object.prototype,_r=Lr.hasOwnProperty;function Dr(r,e){var t=E(r),o=!t&&nr(r),i=!t&&!o&&fr(r),c=!t&&!o&&!i&&Gr(r),a=t||o||i||c,f=a?Z(r.length,String):[],u=f.length;for(var s in r)(e||_r.call(r,s))&&!(a&&(s=="length"||i&&(s=="offset"||s=="parent")||c&&(s=="buffer"||s=="byteLength"||s=="byteOffset")||W(s,u)))&&f.push(s);return f}function Kr(r){var e=[];if(r!=null)for(var t in Object(r))e.push(t);return e}var Vr=Object.prototype,qr=Vr.hasOwnProperty;function Xr(r){if(!I(r))return Kr(r);var e=Q(r),t=[];for(var o in r)o=="constructor"&&(e||!qr.call(r,o))||t.push(o);return t}function Hr(r){return z(r)?Dr(r,!0):Xr(r)}function Wr(r){return r==null?"":O(r)}function Yr(r){return function(e,t,o){for(var i=-1,c=Object(e),a=o(e),f=a.length;f--;){var u=a[r?f:++i];if(t(c[u],u,c)===!1)break}return e}}var zr=Yr();const Jr=zr;function Qr(r){return typeof r=="function"?r:L}var S=/[\\^$.*+?()[\]{}|]/g,Zr=RegExp(S.source);function kr(r){return r=Wr(r),r&&Zr.test(r)?r.replace(S,"\\$&"):r}function re(r,e){return r==null?r:Jr(r,Qr(e),Hr)}const te=(r,e,t)=>{const o=kr(e),i=new RegExp(o,"i");r.length===0&&console.warn(`No data was passed to the filter function.
    The data argument should be an array of objects`);const c=(a,f,u)=>{if(a!=null&&a.constant||a!=null&&a.filterDisabled)return!0;let s=!1;return re(a,(p,B)=>{typeof p=="function"||p==null||u&&!u.includes(B)||(Array.isArray(p)||typeof p=="object"&&p!==null?c(p,f)&&(s=!0):f.test(p)&&(s=!0))}),s};return r.filter(a=>c(a,i,t))};export{kr as e,te as f};
