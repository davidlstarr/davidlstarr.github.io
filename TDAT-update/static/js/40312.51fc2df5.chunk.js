"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[40312],{38983:(t,e,n)=>{function r(t,e,n){n=n||2;var r,s,a,u,h,f,x,l=e&&e.length,p=l?e[0]*n:t.length,y=i(t,0,p,n,!0),d=[];if(!y||y.next===y.prev)return d;if(l&&(y=c(t,e,y,n)),t.length>80*n){r=a=t[0],s=u=t[1];for(var v=n;v<p;v+=n)(h=t[v])<r&&(r=h),(f=t[v+1])<s&&(s=f),h>a&&(a=h),f>u&&(u=f);x=0!==(x=Math.max(a-r,u-s))?1/x:0}return o(y,d,n,r,s,x),d}function i(t,e,n,r,i){var s,o;if(i===N(t,e,n,r)>0)for(s=e;s<n;s+=r)o=F(s,t[s],t[s+1],o);else for(s=n-r;s>=e;s-=r)o=F(s,t[s],t[s+1],o);if(o&&T(o,o.next)){var a=o.next;b(o),o=a}return o}function s(t,e){if(!t)return t;e||(e=t);var n,r=t;do{if(n=!1,r.steiner||!T(r,r.next)&&0!==w(r.prev,r,r.next))r=r.next;else{var i=r.prev;if(b(r),(r=e=i)===r.next)break;n=!0}}while(n||r!==e);return e}function o(t,e,n,r,i,c,x){if(t){!x&&c&&d(t,r,i,c);for(var l,p,y=t;t.prev!==t.next;)if(l=t.prev,p=t.next,c?u(t,r,i,c):a(t))e.push(l.i/n),e.push(t.i/n),e.push(p.i/n),b(t),t=p.next,y=p.next;else if((t=p)===y){x?1===x?o(t=h(s(t),e,n),e,n,r,i,c,2):2===x&&f(t,e,n,r,i,c):o(s(t),e,n,r,i,c,1);break}}}function a(t){var e=t.prev,n=t,r=t.next;if(w(e,n,r)>=0)return!1;for(var i=t.next.next;i!==t.prev;){if(g(e.x,e.y,n.x,n.y,r.x,r.y,i.x,i.y)&&w(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function u(t,e,n,r){var i=t.prev,s=t,o=t.next;if(w(i,s,o)>=0)return!1;for(var a=i.x<s.x?i.x<o.x?i.x:o.x:s.x<o.x?s.x:o.x,u=i.y<s.y?i.y<o.y?i.y:o.y:s.y<o.y?s.y:o.y,h=i.x>s.x?i.x>o.x?i.x:o.x:s.x>o.x?s.x:o.x,f=i.y>s.y?i.y>o.y?i.y:o.y:s.y>o.y?s.y:o.y,c=v(a,u,e,n,r),x=v(h,f,e,n,r),l=t.prevZ,p=t.nextZ;l&&l.z>=c&&p&&p.z<=x;){if(l!==t.prev&&l!==t.next&&g(i.x,i.y,s.x,s.y,o.x,o.y,l.x,l.y)&&w(l.prev,l,l.next)>=0)return!1;if(l=l.prevZ,p!==t.prev&&p!==t.next&&g(i.x,i.y,s.x,s.y,o.x,o.y,p.x,p.y)&&w(p.prev,p,p.next)>=0)return!1;p=p.nextZ}for(;l&&l.z>=c;){if(l!==t.prev&&l!==t.next&&g(i.x,i.y,s.x,s.y,o.x,o.y,l.x,l.y)&&w(l.prev,l,l.next)>=0)return!1;l=l.prevZ}for(;p&&p.z<=x;){if(p!==t.prev&&p!==t.next&&g(i.x,i.y,s.x,s.y,o.x,o.y,p.x,p.y)&&w(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function h(t,e,n){var r=t;do{var i=r.prev,o=r.next.next;!T(i,o)&&M(i,r,r.next,o)&&S(i,o)&&S(o,i)&&(e.push(i.i/n),e.push(r.i/n),e.push(o.i/n),b(r),b(r.next),r=t=o),r=r.next}while(r!==t);return s(r)}function f(t,e,n,r,i,a){var u=t;do{for(var h=u.next.next;h!==u.prev;){if(u.i!==h.i&&m(u,h)){var f=A(u,h);return u=s(u,u.next),f=s(f,f.next),o(u,e,n,r,i,a),void o(f,e,n,r,i,a)}h=h.next}u=u.next}while(u!==t)}function c(t,e,n,r){var o,a,u,h=[];for(o=0,a=e.length;o<a;o++)(u=i(t,e[o]*r,o<a-1?e[o+1]*r:t.length,r,!1))===u.next&&(u.steiner=!0),h.push(E(u));for(h.sort(x),o=0;o<h.length;o++)n=s(n=p(h[o],n),n.next);return n}function x(t,e){return t.x-e.x}function l(t){if(t.next.prev===t)return t;let e=t;for(;;){const n=e.next;if(n.prev===e||n===e||n===t)break;e=n}return e}function p(t,e){var n=function(t,e){var n,r=e,i=t.x,s=t.y,o=-1/0;do{if(s<=r.y&&s>=r.next.y&&r.next.y!==r.y){var a=r.x+(s-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(a<=i&&a>o){if(o=a,a===i){if(s===r.y)return r;if(s===r.next.y)return r.next}n=r.x<r.next.x?r:r.next}}r=r.next}while(r!==e);if(!n)return null;if(i===o)return n;var u,h=n,f=n.x,c=n.y,x=1/0;r=n;do{i>=r.x&&r.x>=f&&i!==r.x&&g(s<c?i:o,s,f,c,s<c?o:i,s,r.x,r.y)&&(u=Math.abs(s-r.y)/(i-r.x),S(r,t)&&(u<x||u===x&&(r.x>n.x||r.x===n.x&&y(n,r)))&&(n=r,x=u)),r=r.next}while(r!==h);return n}(t,e);if(!n)return e;var r=A(n,t),i=s(n,n.next);let o=l(r);return s(o,o.next),i=l(i),l(e===n?i:e)}function y(t,e){return w(t.prev,t,e.prev)<0&&w(e.next,t,t.next)<0}function d(t,e,n,r){var i=t;do{null===i.z&&(i.z=v(i.x,i.y,e,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==t);i.prevZ.nextZ=null,i.prevZ=null,function(t){var e,n,r,i,s,o,a,u,h=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,r=n,a=0,e=0;e<h&&(a++,r=r.nextZ);e++);for(u=h;a>0||u>0&&r;)0!==a&&(0===u||!r||n.z<=r.z)?(i=n,n=n.nextZ,a--):(i=r,r=r.nextZ,u--),s?s.nextZ=i:t=i,i.prevZ=s,s=i;n=r}s.nextZ=null,h*=2}while(o>1)}(i)}function v(t,e,n,r,i){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-n)*i)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-r)*i)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function E(t){var e=t,n=t;do{(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next}while(e!==t);return n}function g(t,e,n,r,i,s,o,a){return(i-o)*(e-a)-(t-o)*(s-a)>=0&&(t-o)*(r-a)-(n-o)*(e-a)>=0&&(n-o)*(s-a)-(i-o)*(r-a)>=0}function m(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){var n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&M(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}(t,e)&&(S(t,e)&&S(e,t)&&function(t,e){var n=t,r=!1,i=(t.x+e.x)/2,s=(t.y+e.y)/2;do{n.y>s!=n.next.y>s&&n.next.y!==n.y&&i<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next}while(n!==t);return r}(t,e)&&(w(t.prev,t,e.prev)||w(t,e.prev,e))||T(t,e)&&w(t.prev,t,t.next)>0&&w(e.prev,e,e.next)>0)}function w(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function T(t,e){return t.x===e.x&&t.y===e.y}function M(t,e,n,r){var i=I(w(t,e,n)),s=I(w(t,e,r)),o=I(w(n,r,t)),a=I(w(n,r,e));return i!==s&&o!==a||!(0!==i||!_(t,n,e))||!(0!==s||!_(t,r,e))||!(0!==o||!_(n,t,r))||!(0!==a||!_(n,e,r))}function _(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function I(t){return t>0?1:t<0?-1:0}function S(t,e){return w(t.prev,t,t.next)<0?w(t,e,t.next)>=0&&w(t,t.prev,e)>=0:w(t,e,t.prev)<0||w(t,t.next,e)<0}function A(t,e){var n=new U(t.i,t.x,t.y),r=new U(e.i,e.x,e.y),i=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=i,i.prev=n,r.next=n,n.prev=r,s.next=r,r.prev=s,r}function F(t,e,n,r){var i=new U(t,e,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function b(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function U(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function N(t,e,n,r){for(var i=0,s=e,o=n-r;s<n;s+=r)i+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return i}n.d(e,{e:()=>r}),r.deviation=function(t,e,n,r){var i=e&&e.length,s=i?e[0]*n:t.length,o=Math.abs(N(t,0,s,n));if(i)for(var a=0,u=e.length;a<u;a++){var h=e[a]*n,f=a<u-1?e[a+1]*n:t.length;o-=Math.abs(N(t,h,f,n))}var c=0;for(a=0;a<r.length;a+=3){var x=r[a]*n,l=r[a+1]*n,p=r[a+2]*n;c+=Math.abs((t[x]-t[p])*(t[l+1]-t[x+1])-(t[x]-t[l])*(t[p+1]-t[x+1]))}return 0===o&&0===c?0:Math.abs((c-o)/o)},r.flatten=function(t){for(var e=t[0][0].length,n={vertices:[],holes:[],dimensions:e},r=0,i=0;i<t.length;i++){for(var s=0;s<t[i].length;s++)for(var o=0;o<e;o++)n.vertices.push(t[i][s][o]);i>0&&(r+=t[i-1].length,n.holes.push(r))}return n}},35048:(t,e,n)=>{n.d(e,{A:()=>s});var r=n(42710),i=n(61673);class s{constructor(t,e){this.id=t,this.sortKey=e,this.records=[]}serialize(t){return t.push(this.id),t.writeF32(this.sortKey),(0,i.j)(t,this.records),t}static deserialize(t){const e=t.readInt32(),n=t.readF32(),o=new s(e,n);return o.records=(0,i._)(t,r.A)??[],o}}s.byteSizeHint=2*Uint32Array.BYTES_PER_ELEMENT+r.A.byteSizeHint},42710:(t,e,n)=>{n.d(e,{A:()=>r});class r{constructor(t,e,n,r,i,s,o){this.instanceId=t,this.textureKey=e,this.indexStart=n,this.indexCount=r,this.vertexStart=i,this.vertexCount=s,this.overlaps=o}updateBaseOffsets(t){this.vertexStart+=t.vertexFrom,this.indexStart+=t.indexFrom}clone(){return new r(this.instanceId,this.textureKey,this.indexStart,this.indexCount,this.vertexStart,this.vertexCount,this.overlaps)}static write(t,e,n,r,i,s,o,a){t.push(e),t.push(n),t.push(r),t.push(i),t.push(s),t.push(o),t.push(a)}serialize(t){return t.push(this.instanceId),t.push(this.textureKey),t.push(this.indexStart),t.push(this.indexCount),t.push(this.vertexStart),t.push(this.vertexCount),t.push(this.overlaps),t}static deserialize(t){const e=t.readInt32(),n=t.readInt32(),i=t.readInt32(),s=t.readInt32(),o=t.readInt32(),a=t.readInt32(),u=t.readInt32();return new r(e,n,i,s,o,a,u)}}r.byteSizeHint=7*Uint32Array.BYTES_PER_ELEMENT},86340:(t,e,n)=>{n.d(e,{AV:()=>c,ES:()=>d,IF:()=>m,Qz:()=>x,UE:()=>v,bX:()=>E,sZ:()=>g});var r=n(50076),i=n(76460),s=(n(28808),n(47249),n(81806),n(61678),n(93345)),o=(n(12331),n(89179),n(32880)),a=n(29492),u=n(96673),h=n(21812);const f=()=>i.A.getLogger("esri.views.2d.engine.webgl.Utils");function c(t){switch(t){case s.ld.UNSIGNED_BYTE:return 1;case s.ld.UNSIGNED_SHORT_4_4_4_4:return 2;case s.ld.FLOAT:return 4;default:return void f().error(new r.A("webgl-utils",`Unable to handle type ${t}`))}}function x(t){switch(t){case s.ld.UNSIGNED_BYTE:return Uint8Array;case s.ld.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case s.ld.FLOAT:return Float32Array;default:return void f().error(new r.A("webgl-utils",`Unable to handle type ${t}`))}}const l=t=>{const e=new Map;for(const n in t)for(const r of t[n])e.set(r.name,r.location);return e},p=t=>{const e={};return t.forEach(((t,n)=>e[n]=t?.length?t[0].stride:0)),e},y=new Map,d=(t,e)=>{if(!y.has(t)){const n=function(t){const e=new Map;for(const n in t){const r=t[n];let i=0;e.set(n,r.map((t=>{const e=new h._(t.name,t.count,t.type,i,0,t.normalized||!1);return i+=t.count*(0,o._)(t.type),e}))),e.get(n).forEach((t=>t.stride=i))}return e}(e),r={strides:p(n),bufferLayouts:n,attributes:l(e)};y.set(t,r)}return y.get(t)},v=t=>t.includes("data:image/svg+xml");function E(t){const e=[];for(let n=0;n<t.length;n++)e.push(t.charCodeAt(n));return e}function g(t,e,n){const r=new u.R(e.width,e.height);return r.dataType=e.dataType,e.depth&&(r.depth=e.depth),e.flipped&&(r.flipped=e.flipped),e.hasMipmap&&(r.hasMipmap=e.hasMipmap),r.internalFormat=e.internalFormat,e.isImmutable&&(r.isImmutable=e.isImmutable),e.isOpaque&&(r.isOpaque=e.isOpaque),e.maxAnisotropy&&(r.maxAnisotropy=e.maxAnisotropy),r.pixelFormat=e.pixelFormat,e.preMultiplyAlpha&&(r.preMultiplyAlpha=e.preMultiplyAlpha),e.samplingMode&&(r.samplingMode=e.samplingMode),e.target&&(r.target=e.target),r.uniform=e.uniform,e.unpackAlignment&&(r.unpackAlignment=e.unpackAlignment),e.wrapMode&&(r.wrapMode=e.wrapMode),new a.g(t,r,n)}function m(t){return"url"in t&&"urlHash"in t?{...t,url:""}:t}},19358:(t,e,n)=>{n.d(e,{A:()=>i});var r=n(59422);class i{constructor(t,e,n,i){this.transformedX=0,this.transformedY=0,this.center=(0,r.fA)(t,e),this.centerT=(0,r.vt)(),this.halfWidth=n/2,this.halfHeight=i/2,this.width=n,this.height=i}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(t){this.center[0]=t}set y(t){this.center[1]=t}clone(){return new i(this.x,this.y,this.width,this.height)}serialize(t){return t.writeF32(this.center[0]),t.writeF32(this.center[1]),t.push(this.width),t.push(this.height),t}findCollisionDelta(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;const n=Math.abs(t.centerT[0]-this.centerT[0]),r=Math.abs(t.centerT[1]-this.centerT[1]),i=(t.halfWidth+this.halfWidth+e)/n,s=(t.halfHeight+this.halfHeight+e)/r,o=Math.min(i,s);return Math.log2(o)}extend(t){const e=Math.min(this.xmin,t.xmin),n=Math.min(this.ymin,t.ymin),r=Math.max(this.xmax,t.xmax)-e,i=Math.max(this.ymax,t.ymax)-n,s=e+r/2,o=n+i/2;this.width=r,this.height=i,this.halfWidth=r/2,this.halfHeight=i/2,this.x=s,this.y=o}static deserialize(t){const e=t.readF32(),n=t.readF32(),r=t.readInt32(),s=t.readInt32();return new i(e,n,r,s)}}},19385:(t,e,n)=>{n.d(e,{f:()=>s});var r=n(19358),i=n(61673);class s{constructor(t,e,n,r,i,s,o,a){let u=arguments.length>8&&void 0!==arguments[8]?arguments[8]:[];this.entityTexel=t,this.anchorX=e,this.anchorY=n,this.directionX=r,this.directionY=i,this.maxScale=s,this.minScale=o,this.referenceBounds=a,this.bounds=u}serialize(t){t.push(this.entityTexel),t.writeF32(this.anchorX),t.writeF32(this.anchorY),t.writeF32(this.directionX),t.writeF32(this.directionY),t.writeF32(this.maxScale),t.writeF32(this.minScale),null===this.referenceBounds?(t.writeF32(0),t.writeF32(0),t.writeF32(0)):(t.writeF32(this.referenceBounds.size),t.writeF32(this.referenceBounds.offsetX),t.writeF32(this.referenceBounds.offsetY)),(0,i.j)(t,this.bounds)}static deserialize(t){const e=t.readInt32(),n=t.readF32(),o=t.readF32(),a=t.readF32(),u=t.readF32(),h=t.readF32(),f=t.readF32(),c=t.readF32(),x=t.readF32(),l=t.readF32(),p=(0,i._)(t,r.A)??[];return new s(e,n,o,a,u,h,f,{size:c,offsetX:x,offsetY:l},p)}}},99588:(t,e,n)=>{n.d(e,{Kl:()=>u,M9:()=>o,fw:()=>a});const r=new Float32Array(1),i=new Uint32Array(r.buffer);function s(t){return r[0]=t,i[0]}function o(t,e){return 65535&t|e<<16}function a(t){const e=s(t),n=e>>>31;let r=e>>>23&255,i=8388607&e;return r-=127,r>15?n<<15|31744:r<-25?0:(r<-14&&(i+=8388608,i/=2**(-14-r),r=-15),r+=15,i/=8192,i=function(t,e){const n=Math.floor(t),r=t-n;return n<e&&(r>.5||.5===r&&n%2==1)?n+1:n}(i,1023),n<<15|r<<10|i)}function u(t){let e=t>>>15,n=t>>10&31,r=1023&t;return e=e?-1:1,n-=15,r/=1024,n>-15?r+=1:n=-14,e*2**n*r}},70029:(t,e,n)=>{n.d(e,{F:()=>s,q:()=>o});var r=n(99588),i=n(93345);function s(t,e,n,s){const o=n.packPrecisionFactor??1;switch(n.type){case i.pe.BYTE:if(1===n.count)t.setInt8(s+n.offset,e*o);else for(let r=0;r<n.count;r++){const i=r*Int8Array.BYTES_PER_ELEMENT;t.setInt8(s+n.offset+i,e[r]*o)}break;case i.pe.UNSIGNED_BYTE:if(1===n.count)t.setUint8(s+n.offset,e*o);else for(let r=0;r<n.count;r++){const i=r*Uint8Array.BYTES_PER_ELEMENT;t.setUint8(s+n.offset+i,e[r]*o)}break;case i.pe.SHORT:if(1===n.count)t.setInt16(s+n.offset,e*o,!0);else for(let r=0;r<n.count;r++){const i=r*Int16Array.BYTES_PER_ELEMENT;t.setInt16(s+n.offset+i,e[r]*o,!0)}break;case i.pe.UNSIGNED_SHORT:if(1===n.count)t.setUint16(s+n.offset,e*o,!0);else for(let r=0;r<n.count;r++){const i=r*Uint16Array.BYTES_PER_ELEMENT;t.setUint16(s+n.offset+i,e[r]*o,!0)}break;case i.pe.INT:if(1===n.count)t.setInt32(s+n.offset,e*o,!0);else for(let r=0;r<n.count;r++){const i=r*Int32Array.BYTES_PER_ELEMENT;t.setInt32(s+n.offset+i,e[r]*o,!0)}break;case i.pe.UNSIGNED_INT:if(1===n.count)t.setUint32(s+n.offset,e*o,!0);else for(let r=0;r<n.count;r++){const i=r*Uint32Array.BYTES_PER_ELEMENT;t.setUint32(s+n.offset+i,e[r]*o,!0)}break;case i.pe.FLOAT:if(1===n.count)t.setFloat32(s+n.offset,e*o,!0);else for(let r=0;r<n.count;r++){const i=r*Float32Array.BYTES_PER_ELEMENT;t.setFloat32(s+n.offset+i,e[r]*o,!0)}break;case i.pe.HALF_FLOAT:if(1===n.count)t.setUint16(s+n.offset,(0,r.fw)(e*o),!0);else for(let i=0;i<n.count;i++){const a=i*Uint16Array.BYTES_PER_ELEMENT;t.setUint16(s+n.offset+a,(0,r.fw)(e[i]*o),!0)}}}function o(t,e,n){switch(e.type){case i.pe.BYTE:{if(1===e.count)return t.getInt8(n+e.offset);const r=[];for(let i=0;i<e.count;i++){const s=i*Int8Array.BYTES_PER_ELEMENT;r.push(t.getInt8(n+e.offset+s))}return r}case i.pe.UNSIGNED_BYTE:{if(1===e.count)return t.getUint8(n+e.offset);const r=[];for(let i=0;i<e.count;i++){const s=i*Uint8Array.BYTES_PER_ELEMENT;r.push(t.getUint8(n+e.offset+s))}return r}case i.pe.SHORT:{if(1===e.count)return t.getInt16(n+e.offset,!0);const r=[];for(let i=0;i<e.count;i++){const s=i*Int16Array.BYTES_PER_ELEMENT;r.push(t.getInt16(n+e.offset+s,!0))}return r}case i.pe.UNSIGNED_SHORT:{if(1===e.count)return t.getUint16(n+e.offset,!0);const r=[];for(let i=0;i<e.count;i++){const s=i*Uint16Array.BYTES_PER_ELEMENT;r.push(t.getUint16(n+e.offset+s,!0))}return r}case i.pe.INT:{if(1===e.count)return t.getInt32(n+e.offset,!0);const r=[];for(let i=0;i<e.count;i++){const s=i*Int32Array.BYTES_PER_ELEMENT;r.push(t.getInt32(n+e.offset+s,!0))}return r}case i.pe.UNSIGNED_INT:{if(1===e.count)return t.getUint32(n+e.offset,!0);const r=[];for(let i=0;i<e.count;i++){const s=i*Uint32Array.BYTES_PER_ELEMENT;r.push(t.getUint32(n+e.offset+s,!0))}return r}case i.pe.FLOAT:{if(1===e.count)return t.getFloat32(n+e.offset,!0);const r=[];for(let i=0;i<e.count;i++){const s=i*Float32Array.BYTES_PER_ELEMENT;r.push(t.getFloat32(n+e.offset+s,!0))}return r}case i.pe.HALF_FLOAT:{if(1===e.count)return(0,r.Kl)(t.getUint16(n+e.offset,!0));const i=[];for(let s=0;s<e.count;s++){const o=s*Uint16Array.BYTES_PER_ELEMENT;i.push((0,r.Kl)(t.getUint16(n+e.offset+o,!0)))}return i}}}},27534:(t,e,n)=>{n.d(e,{Ph:()=>s,Z0:()=>a,hU:()=>i});var r=n(88685);function i(t){const e=t.map((t=>{let{name:e,count:n,type:r}=t;return`${e}.${n}.${r}`})).join(",");return(0,r.Wm)(e)}function s(t,e,n,r,i,o,a){if(t.primitiveName===e){let e=r?.readWithDefault(i,o,t[n]&&a);return"text"===t.type&&(e=e.toString()),void(t[n]=e)}if("type"in t&&null!=t.type){if(t.effects)for(const u of t.effects)s(u,e,n,r,i,o,a);switch(t.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(t.symbolLayers)for(const u of t.symbolLayers)s(u,e,n,r,i,o,a);break;case"CIMTextSymbol":t.symbol&&s(t.symbol,e,n,r,i,o,a);break;case"CIMHatchFill":t.lineSymbol&&s(t.lineSymbol,e,n,r,i,o,a);break;case"CIMPictureMarker":case"CIMCharacterMarker":case"CIMVectorMarker":if(t.markerPlacement&&s(t.markerPlacement,e,n,r,i,o,a),"CIMVectorMarker"===t.type&&t.markerGraphics)for(const u of t.markerGraphics)s(u,e,n,r,i,o,a),s(u.symbol,e,n,r,i,o,a)}}}const o=400;function a(t){const e=t.width;return null!=t.effects?o:Math.max(1.25*e,8)}},61673:(t,e,n)=>{function r(t,e){if(null!==e){t.push(e.length);for(const n of e)n.serialize(t);return t}t.push(0)}function i(t,e,n){const r=t.readInt32(),i=new Array(r);for(let s=0;s<i.length;s++)i[s]=e.deserialize(t,n);return i}n.d(e,{_:()=>i,j:()=>r})},21812:(t,e,n)=>{n.d(e,{_:()=>r});class r{constructor(t,e,n,r,i){let s=arguments.length>5&&void 0!==arguments[5]&&arguments[5],o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;this.name=t,this.count=e,this.type=n,this.offset=r,this.stride=i,this.normalized=s,this.divisor=o}}}}]);
//# sourceMappingURL=40312.51fc2df5.chunk.js.map