"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[98357],{45136:(t,e,n)=>{n.d(e,{a:()=>c,b:()=>l,c:()=>i,d:()=>r,e:()=>u,f:()=>s,n:()=>f,s:()=>a,t:()=>o});n(81806),n(76460);function r(t,e,n){o(t.typedBuffer,e.typedBuffer,n,t.typedBufferStride,e.typedBufferStride)}function o(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;if(t.length/r!==Math.ceil(e.length/o))return t;const i=t.length/r,l=n[0],a=n[1],s=n[2],c=n[4],u=n[5],f=n[6],h=n[8],p=n[9],d=n[10],m=n[12],g=n[13],_=n[14];let y=0,x=0;for(let A=0;A<i;A++){const n=e[y],i=e[y+1],A=e[y+2];t[x]=l*n+c*i+h*A+m,t[x+1]=a*n+u*i+p*A+g,t[x+2]=s*n+f*i+d*A+_,y+=o,x+=r}return t}function i(t,e,n){l(t.typedBuffer,e.typedBuffer,n,t.typedBufferStride,e.typedBufferStride)}function l(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;if(t.length/r!==Math.ceil(e.length/o))return;const i=t.length/r,l=n[0],a=n[1],s=n[2],c=n[3],u=n[4],f=n[5],h=n[6],p=n[7],d=n[8];let m=0,g=0;for(let _=0;_<i;_++){const n=e[m],i=e[m+1],_=e[m+2];t[g]=l*n+c*i+h*_,t[g+1]=a*n+u*i+p*_,t[g+2]=s*n+f*i+d*_,m+=o,g+=r}}function a(t,e,n){s(t.typedBuffer,e.typedBuffer,n,t.typedBufferStride,e.typedBufferStride)}function s(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;const i=Math.min(t.length/r,e.length/o);let l=0,a=0;for(let s=0;s<i;s++)t[a]=n*e[l],t[a+1]=n*e[l+1],t[a+2]=n*e[l+2],l+=o,a+=r;return t}function c(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;const i=t.length/r;if(i!==Math.ceil(e.length/o))return t;let l=0,a=0;for(let s=0;s<i;s++)t[a]=e[l]+n[0],t[a+1]=e[l+1]+n[1],t[a+2]=e[l+2]+n[2],l+=o,a+=r;return t}function u(t,e){f(t.typedBuffer,e.typedBuffer,t.typedBufferStride,e.typedBufferStride)}function f(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;const o=Math.min(t.length/n,e.length/r);let i=0,l=0;for(let a=0;a<o;a++){const o=e[i],a=e[i+1],s=e[i+2],c=o*o+a*a+s*s;if(c>0){const e=1/Math.sqrt(c);t[l]=e*o,t[l+1]=e*a,t[l+2]=e*s}i+=r,l+=n}}Object.freeze(Object.defineProperty({__proto__:null,normalize:f,normalizeView:u,scale:s,scaleView:a,shiftRight:function(t,e,n){const r=Math.min(t.count,e.count),o=t.typedBuffer,i=t.typedBufferStride,l=e.typedBuffer,a=e.typedBufferStride;let s=0,c=0;for(let u=0;u<r;u++)o[c]=l[s]>>n,o[c+1]=l[s+1]>>n,o[c+2]=l[s+2]>>n,s+=a,c+=i},transformMat3:l,transformMat3View:i,transformMat4:o,transformMat4View:r,translate:c},Symbol.toStringTag,{value:"Module"}))},10947:(t,e,n)=>{n.d(e,{a:()=>o,b:()=>s,n:()=>l,s:()=>a,t:()=>i});n(81806);var r=n(76460);function o(t,e,n){i(t.typedBuffer,e.typedBuffer,n,t.typedBufferStride,e.typedBufferStride)}function i(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;if(t.length/r!=e.length/o)return;const i=t.length/r,l=n[0],a=n[1],s=n[2],c=n[3],u=n[4],f=n[5],h=n[6],p=n[7],d=n[8];let m=0,g=0;for(let _=0;_<i;_++){const n=e[m],i=e[m+1],_=e[m+2],y=e[m+3];t[g]=l*n+c*i+h*_,t[g+1]=a*n+u*i+p*_,t[g+2]=s*n+f*i+d*_,t[g+3]=y,m+=o,g+=r}}function l(t,e){const n=Math.min(t.count,e.count),r=t.typedBuffer,o=t.typedBufferStride,i=e.typedBuffer,l=e.typedBufferStride;for(let a=0;a<n;a++){const t=a*o,e=a*l,n=i[e],s=i[e+1],c=i[e+2],u=n*n+s*s+c*c;if(u>0){const e=1/Math.sqrt(u);r[t]=e*n,r[t+1]=e*s,r[t+2]=e*c}}}function a(t,e,n){s(t.typedBuffer,e,n,t.typedBufferStride)}function s(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4;const o=Math.min(t.length/r,e.count),i=e.typedBuffer,l=e.typedBufferStride;let a=0,s=0;for(let c=0;c<o;c++)t[s]=n*i[a],t[s+1]=n*i[a+1],t[s+2]=n*i[a+2],t[s+3]=n*i[a+3],a+=l,s+=r}Object.freeze(Object.defineProperty({__proto__:null,normalize:l,scale:s,scaleView:a,transformMat3:i,transformMat3View:o,transformMat4:function(t,e,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:o;if(t.length/o!=e.length/i)return void r.A.getLogger("esri.views.3d.support.buffer.math").error("source and destination buffers need to have the same number of elements");const l=t.length/o,a=n[0],s=n[1],c=n[2],u=n[3],f=n[4],h=n[5],p=n[6],d=n[7],m=n[8],g=n[9],_=n[10],y=n[11],x=n[12],A=n[13],M=n[14],v=n[15];let w=0,B=0;for(let r=0;r<l;r++){const n=e[w],r=e[w+1],l=e[w+2],T=e[w+3];t[B]=a*n+f*r+m*l+x*T,t[B+1]=s*n+h*r+g*l+A*T,t[B+2]=c*n+p*r+_*l+M*T,t[B+3]=u*n+d*r+y*l+v*T,w+=i,B+=o}},transformMat4View:function(t,e,n){if(t.count!==e.count)return;const r=t.count,o=n[0],i=n[1],l=n[2],a=n[3],s=n[4],c=n[5],u=n[6],f=n[7],h=n[8],p=n[9],d=n[10],m=n[11],g=n[12],_=n[13],y=n[14],x=n[15],A=t.typedBuffer,M=t.typedBufferStride,v=e.typedBuffer,w=e.typedBufferStride;for(let B=0;B<r;B++){const t=B*M,e=B*w,n=v[e],r=v[e+1],T=v[e+2],S=v[e+3];A[t]=o*n+s*r+h*T+g*S,A[t+1]=i*n+c*r+p*T+_*S,A[t+2]=l*n+u*r+d*T+y*S,A[t+3]=a*n+f*r+m*T+x*S}}},Symbol.toStringTag,{value:"Module"}))},44680:(t,e,n)=>{function r(){return[1,0,0,0,1,0,0,0,1]}function o(t,e,n,r,o,i,l,a,s){return[t,e,n,r,o,i,l,a,s]}n.d(e,{fA:()=>o,vt:()=>r,zK:()=>i});const i=[1,0,0,0,1,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:i,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},create:r,createView:function(t,e){return new Float64Array(t,e,9)},fromValues:o},Symbol.toStringTag,{value:"Module"}))},13191:(t,e,n)=>{function r(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function o(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}n.d(e,{o8:()=>o,vt:()=>r,zK:()=>i});const i=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:i,clone:o,create:r,createView:function(t,e){return new Float64Array(t,e,16)},fromValues:function(t,e,n,r,o,i,l,a,s,c,u,f,h,p,d,m){return[t,e,n,r,o,i,l,a,s,c,u,f,h,p,d,m]}},Symbol.toStringTag,{value:"Module"}))},70373:(t,e,n)=>{n.d(e,{E:()=>B,w:()=>l});var r=n(18690),o=(n(81806),n(30015)),i=n(61196);class l{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,e=arguments.length>1?arguments[1]:void 0;this._compareMinX=f,this._compareMinY=h,this._toBBox=t=>t,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this._toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),A.prune(),M.prune(),v.prune(),w.prune()}all(t){a(this._data,t)}search(t,e){let n=this._data;const r=this._toBBox;if(y(t,n))for(A.clear();n;){for(let o=0,i=n.children.length;o<i;o++){const i=n.children[o],l=n.leaf?r(i):i;y(t,l)&&(n.leaf?e(i):_(t,l)?a(i,e):A.push(i))}n=A.pop()}}collides(t){let e=this._data;const n=this._toBBox;if(!y(t,e))return!1;for(A.clear();e;){for(let r=0,o=e.children.length;r<o;r++){const o=e.children[r],i=e.leaf?n(o):o;if(y(t,i)){if(e.leaf||_(t,i))return!0;A.push(o)}}e=A.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,n=t.length;e<n;e++)this.insert(t[e]);return this}let e=this._build(t.slice(),0,t.length-1,0);if(this._data.children.length)if(this._data.height===e.height)this._splitRoot(this._data,e);else{if(this._data.height<e.height){const t=this._data;this._data=e,e=t}this._insert(e,this._data.height-e.height-1,!0)}else this._data=e;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new S([]),this}remove(t){if(!t)return this;let e,n=this._data,o=null,i=0,l=!1;const a=this._toBBox(t);for(v.clear(),w.clear();n||v.length>0;){if(n||(n=v.pop(),o=v.data[v.length-1],i=w.pop()??0,l=!0),n.leaf&&(e=(0,r.qh)(n.children,t,n.children.length,n.indexHint),-1!==e))return n.children.splice(e,1),v.push(n),this._condense(v),this;l||n.leaf||!_(n,a)?o?(i++,n=o.children[i],l=!1):n=null:(v.push(n),w.push(i),i=0,o=n,n=n.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_build(t,e,n,r){const o=n-e+1;let i=this._maxEntries;if(o<=i){const r=new S(t.slice(e,n+1));return s(r,this._toBBox),r}r||(r=Math.ceil(Math.log(o)/Math.log(i)),i=Math.ceil(o/i**(r-1)));const l=new E([]);l.height=r;const a=Math.ceil(o/i),c=a*Math.ceil(Math.sqrt(i));x(t,e,n,c,this._compareMinX);for(let s=e;s<=n;s+=c){const e=Math.min(s+c-1,n);x(t,s,e,a,this._compareMinY);for(let n=s;n<=e;n+=a){const o=Math.min(n+a-1,e);l.children.push(this._build(t,n,o,r-1))}}return s(l,this._toBBox),l}_insert(t,e,n){const r=this._toBBox,o=n?t:r(t);v.clear();const i=function(t,e,n,r){for(;r.push(e),!0!==e.leaf&&r.length-1!==n;){let n,r=1/0,o=1/0;for(let i=0,l=e.children.length;i<l;i++){const l=e.children[i],a=p(l),s=m(t,l)-a;s<o?(o=s,r=a<r?a:r,n=l):s===o&&a<r&&(r=a,n=l)}e=n||e.children[0]}return e}(o,this._data,e,v);for(i.children.push(t),u(i,o);e>=0&&v.data[e].children.length>this._maxEntries;)this._split(v,e),e--;!function(t,e,n){for(let r=n;r>=0;r--)u(e.data[r],t)}(o,v,e)}_split(t,e){const n=t.data[e],r=n.children.length,o=this._minEntries;this._chooseSplitAxis(n,o,r);const i=this._chooseSplitIndex(n,o,r);if(!i)return;const l=n.children.splice(i,n.children.length-i),a=n.leaf?new S(l):new E(l);a.height=n.height,s(n,this._toBBox),s(a,this._toBBox),e?t.data[e-1].children.push(a):this._splitRoot(n,a)}_splitRoot(t,e){this._data=new E([t,e]),this._data.height=t.height+1,s(this._data,this._toBBox)}_chooseSplitIndex(t,e,n){let r,o,i;r=o=1/0;for(let l=e;l<=n-e;l++){const e=c(t,0,l,this._toBBox),a=c(t,l,n,this._toBBox),s=g(e,a),u=p(e)+p(a);s<r?(r=s,i=l,o=u<o?u:o):s===r&&u<o&&(o=u,i=l)}return i}_chooseSplitAxis(t,e,n){const r=t.leaf?this._compareMinX:f,o=t.leaf?this._compareMinY:h;this._allDistMargin(t,e,n,r)<this._allDistMargin(t,e,n,o)&&t.children.sort(r)}_allDistMargin(t,e,n,r){t.children.sort(r);const o=this._toBBox,i=c(t,0,e,o),l=c(t,n-e,n,o);let a=d(i)+d(l);for(let s=e;s<n-e;s++){const e=t.children[s];u(i,t.leaf?o(e):e),a+=d(i)}for(let s=n-e-1;s>=e;s--){const e=t.children[s];u(l,t.leaf?o(e):e),a+=d(l)}return a}_condense(t){for(let e=t.length-1;e>=0;e--){const n=t.data[e];if(0===n.children.length)if(e>0){const o=t.data[e-1],i=o.children;i.splice((0,r.qh)(i,n,i.length,o.indexHint),1)}else this.clear();else s(n,this._toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this._compareMinX=new Function("a","b",e.join(t[0])),this._compareMinY=new Function("a","b",e.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function a(t,e){let n=t;for(M.clear();n;){if(!0===n.leaf)for(const t of n.children)e(t);else M.pushArray(n.children);n=M.pop()??null}}function s(t,e){c(t,0,t.children.length,e,t)}function c(t,e,n,r,o){o||(o=new S([])),o.minX=1/0,o.minY=1/0,o.maxX=-1/0,o.maxY=-1/0;for(let i,l=e;l<n;l++)i=t.children[l],u(o,t.leaf?r(i):i);return o}function u(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function f(t,e){return t.minX-e.minX}function h(t,e){return t.minY-e.minY}function p(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function d(t){return t.maxX-t.minX+(t.maxY-t.minY)}function m(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function g(t,e){const n=Math.max(t.minX,e.minX),r=Math.max(t.minY,e.minY),o=Math.min(t.maxX,e.maxX),i=Math.min(t.maxY,e.maxY);return Math.max(0,o-n)*Math.max(0,i-r)}function _(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function y(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function x(t,e,n,r,o){const l=[e,n];for(;l.length;){const e=l.pop(),n=l.pop();if(e-n<=r)continue;const a=n+Math.ceil((e-n)/r/2)*r;(0,i.q)(t,a,n,e,o),l.push(n,a,a,e)}}const A=new o.A,M=new o.A,v=new o.A,w=new o.A({deallocator:void 0});class B{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class T extends B{constructor(){super(...arguments),this.height=1,this.indexHint=new r.vW}}class S extends T{constructor(t){super(),this.children=t,this.leaf=!0}}class E extends T{constructor(t){super(),this.children=t,this.leaf=!1}}},90707:(t,e,n)=>{n.d(e,{l:()=>c});var r=n(15941),o=n(34761),i=n(9392);function l(t,e,n){const r=Math.sin(t),o=Math.cos(t),i=Math.sin(e),l=Math.cos(e),a=n;return a[0]=-r,a[4]=-i*o,a[8]=l*o,a[12]=0,a[1]=o,a[5]=-i*r,a[9]=l*r,a[13]=0,a[2]=0,a[6]=l,a[10]=i,a[14]=0,a[3]=0,a[7]=0,a[11]=0,a[15]=1,a}var a=n(482),s=n(80963);function c(t,e,n,r){if(null==t||null==r)return!1;const i=(0,a.Qk)(t,a.Wv),c=(0,a.Qk)(r,a.zp);if(i===c&&!u(c)&&(i!==a.rz.UNKNOWN||(0,s.aI)(t,r)))return(0,o.kN)(n,e),!0;if(u(c)){const t=a.w5[i][a.rz.LON_LAT],r=a.w5[a.rz.LON_LAT][c];return null!=t&&null!=r&&(t(e,0,h,0),r(h,0,p,0),l(f*h[0],f*h[1],n),n[12]=p[0],n[13]=p[1],n[14]=p[2],!0)}const d=u(i);if((c===a.rz.WEB_MERCATOR||c===a.rz.PLATE_CARREE||c===a.rz.WGS84||c===a.rz.CGCS2000)&&(i===a.rz.WGS84||d||i===a.rz.WEB_MERCATOR||i===a.rz.CGCS2000)){const t=a.w5[i][a.rz.LON_LAT],r=a.w5[a.rz.LON_LAT][c];return null!=t&&null!=r&&(t(e,0,h,0),r(h,0,p,0),d?function(t,e,n){l(t,e,n),(0,o.mg)(n,n)}(f*h[0],f*h[1],n):(0,o.D_)(n),n[12]=p[0],n[13]=p[1],n[14]=p[2],!0)}return!1}function u(t){return t===a.rz.SPHERICAL_ECEF||t===a.rz.SPHERICAL_MARS_PCPF||t===a.rz.SPHERICAL_MOON_PCPF||t===a.rz.WGS84_ECEF}const f=(0,r.kU)(1),h=(0,i.vt)(),p=(0,i.vt)()},64232:(t,e,n)=>{n.d(e,{g:()=>l});var r=n(9392),o=n(26346),i=n(45308);function l(t,e,n,r){if((0,o.canProjectWithoutEngine)(t.spatialReference,n)){a[0]=t.x,a[1]=t.y;const o=t.z;return a[2]=o??r??0,(0,i.projectBuffer)(a,t.spatialReference,0,e,n,0)}const l=(0,o.tryProjectWithZConversion)(t,n);return!!l&&(e[0]=l?.x,e[1]=l?.y,e[2]=l?.z??r??0,!0)}const a=(0,r.vt)()},98510:(t,e,n)=>{n.d(e,{Y0:()=>c,lO:()=>u});var r=n(34111),o=n(13312),i=n(80963);const l=new o.A(r.fv),a=new o.A(r.FY),s=new o.A(r.LJ),c=new o.A(r.Ro);function u(t){const e=f.get(t);if(e)return e;let n=l;if(t)if(t===a)n=a;else if(t===s)n=s;else{const e=t.wkid,r=t.latestWkid;if(null!=e||null!=r)(0,i.tl)(e)||(0,i.tl)(r)?n=a:((0,i.ZL)(e)||(0,i.ZL)(r))&&(n=s);else{const e=t.wkt2??t.wkt;if(e){const t=e.toUpperCase();t===h?n=a:t===p&&(n=s)}}}return f.set(t,n),n}const f=new Map,h=a.wkt.toUpperCase(),p=s.wkt.toUpperCase()},14894:(t,e,n)=>{n.d(e,{A:()=>f});var r,o=n(35143),i=n(69098),l=n(42553),a=n(46053),s=(n(81806),n(76460),n(47249),n(6409)),c=n(85842);let u=r=class extends((0,i.O)(l.oY)){constructor(t){super(t),this.type="georeferenced",this.origin=null}};u.absolute=new r,(0,o._)([(0,s.e)({georeferenced:"georeferenced"},{readOnly:!0})],u.prototype,"type",void 0),(0,o._)([(0,a.MZ)({type:[Number],nonNullable:!1,json:{write:!0}})],u.prototype,"origin",void 0),u=r=(0,o._)([(0,c.$)("esri.geometry.support.MeshGeoreferencedVertexSpace")],u);const f=u},5845:(t,e,n)=>{n.d(e,{A:()=>f});var r=n(35143),o=n(69098),i=n(42553),l=n(46053),a=(n(81806),n(76460),n(47249),n(6409)),s=n(85842),c=n(9392);let u=class extends((0,o.O)(i.oY)){constructor(t){super(t),this.type="local",this.origin=(0,c.vt)()}};(0,r._)([(0,a.e)({local:"local"},{readOnly:!0})],u.prototype,"type",void 0),(0,r._)([(0,l.MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],u.prototype,"origin",void 0),u=(0,r._)([(0,s.$)("esri.geometry.support.MeshLocalVertexSpace")],u);const f=u},98357:(t,e,n)=>{n.r(e),n.d(e,{default:()=>a});var r=n(81806),o=n(70373),i=n(14894),l=n(53848);class a{async createIndex(t,e){const n=new Array;if(!t.vertexAttributes?.position)return new o.w;const r=function(t){const{vertexAttributes:{position:e},vertexSpace:n,spatialReference:r,transform:o}=t,a=(0,l.UR)({vertexAttributes:{position:e},vertexSpace:n,spatialReference:r,transform:o},i.A.absolute,{allowBufferReuse:!0})?.position;return a?!t.components||t.components.some((t=>!t.faces))?{position:a.buffer}:{position:a.buffer,components:t.components.map((t=>t.faces))}:null}(t),a=null!=e?await e.invoke("createIndexThread",r,{transferList:n}):this.createIndexThread(r).result;return s().fromJSON(a)}createIndexThread(t){const e=s();if(!t)return{result:e.toJSON()};const n=new Float64Array(t.position);return t.components?function(t,e,n){let r=0;for(const l of n)r+=l.length/3;const o=new Array(r);let i=0;for(const l of n)for(let t=0;t<l.length;t+=3)o[i++]=c(e,3*l[t],3*l[t+1],3*l[t+2]);return t.load(o),{result:t.toJSON()}}(e,n,t.components.map((t=>new Uint32Array(t)))):function(t,e){const n=new Array(e.length/9);let r=0;for(let o=0;o<e.length;o+=9)n[r++]=c(e,o,o+3,o+6);return t.load(n),{result:t.toJSON()}}(e,n)}}function s(){return new o.w(9,(0,r.A)("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}function c(t,e,n,r){return{minX:Math.min(t[e],t[n],t[r]),maxX:Math.max(t[e],t[n],t[r]),minY:Math.min(t[e+1],t[n+1],t[r+1]),maxY:Math.max(t[e+1],t[n+1],t[r+1]),p0:[t[e],t[e+1],t[e+2]],p1:[t[n],t[n+1],t[n+2]],p2:[t[r],t[r+1],t[r+2]]}}},26375:(t,e,n)=>{n.d(e,{$5:()=>v,CN:()=>y,JP:()=>_,KM:()=>B,Mv:()=>S,X4:()=>x,gr:()=>M,qs:()=>w,si:()=>A,xA:()=>T});var r=n(15941),o=n(63919),i=n(44680),l=n(34761),a=n(13191),s=n(20664),c=n(9392),u=n(90707),f=n(45308),h=(n(14556),n(80963)),p=n(45417),d=n(88105),m=n(45136),g=n(10947);const _="Projection may be possible after calling projection.load().";function y(t,e,n,r){t.error(`Failed to project from (wkid:${e.wkid}) to (wkid:${n.wkid}).${r?" ":""}${r}`)}function x(t,e,n,r,o,i){return C(R.TO_PCPF,d.xs.fromTypedArray(t),E.NORMAL,d.Xm.fromTypedArray(e),n,d.Xm.fromTypedArray(r),o,d.xs.fromTypedArray(i))?i:null}function A(t,e,n,r,o,i){return C(R.FROM_PCPF,d.xs.fromTypedArray(t),E.NORMAL,d.Xm.fromTypedArray(e),n,d.Xm.fromTypedArray(r),o,d.xs.fromTypedArray(i))?i:null}function M(t,e,n,r){return(0,f.projectBuffer)(t,e,0,n,r,0)?n:null}function v(t,e,n,r){return(0,f.projectBuffer)(t,e,0,n,r,0)?n:null}function w(t,e,n){return(0,o.Ge)(F,n),(0,m.b)(e,t,F),(0,r.or)(F)&&(0,m.n)(e,e),e}function B(t,e,n){return(0,o.z0)(F,n),(0,g.t)(e,t,F),(0,r.or)(F)&&(0,m.n)(e,e,4),e}function T(t,e,n,r,o,i){if(!C(R.TO_PCPF,d.xs.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),E.TANGENT,d.Xm.fromTypedArray(e),n,d.Xm.fromTypedArray(r),o,d.xs.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT)))return null;for(let l=3;l<t.length;l+=4)i[l]=t[l];return i}function S(t,e,n,r,o,i){if(!C(R.FROM_PCPF,d.xs.fromTypedArray(t,16),E.TANGENT,d.Xm.fromTypedArray(e),n,d.Xm.fromTypedArray(r),o,d.xs.fromTypedArray(i,16)))return null;for(let l=3;l<t.length;l+=4)i[l]=t[l];return i}var E,R,N;function O(t,e,n,r,i){switch((0,u.l)(r,n,b,r),t===R.FROM_PCPF&&(0,l.B8)(b,b),e){case E.NORMAL:return(0,o.Ge)(i,b);case E.TANGENT:return(0,o.z0)(i,b)}}function C(t,e,n,r,o,i,l,a){if(!e)return;const c=r.count;if(function(t){return t.isWGS84||(0,h.x1)(t)||(0,h.q8)(t)||(0,h.KQ)(t)}(o))for(let u=0;u<c;u++)i.getVec(u,X),e.getVec(u,Y),(0,s.q)(Y,Y,O(t,n,X,l,F)),a.setVec(u,Y);else for(let u=0;u<c;u++){i.getVec(u,X),e.getVec(u,Y);const o=(0,p.jg)(r.get(u,1));let c=Math.cos(o);n===E.TANGENT!=(t===R.TO_PCPF)&&(c=1/c),O(t,n,X,l,F),t===R.TO_PCPF?(F[0]*=c,F[1]*=c,F[2]*=c,F[3]*=c,F[4]*=c,F[5]*=c):(F[0]*=c,F[3]*=c,F[6]*=c,F[1]*=c,F[4]*=c,F[7]*=c),(0,s.q)(Y,Y,F),(0,s.n)(Y,Y),a.setVec(u,Y)}return a}(N=E||(E={}))[N.NORMAL=0]="NORMAL",N[N.TANGENT=1]="TANGENT",function(t){t[t.TO_PCPF=0]="TO_PCPF",t[t.FROM_PCPF=1]="FROM_PCPF"}(R||(R={}));const X=(0,c.vt)(),Y=(0,c.vt)(),b=(0,a.vt)(),F=(0,i.vt)()},53848:(t,e,n)=>{n.d(e,{UR:()=>M,p5:()=>A,xK:()=>E});var r=n(76460),o=n(15941),i=n(31633),l=n(63919),a=n(44680),s=n(34761),c=n(13191),u=n(20664),f=n(9392),h=n(98510),p=n(90707),d=n(64232),m=n(99773),g=n(80963),_=n(45136),y=n(26375);const x=()=>r.A.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function A(t,e,n){let{vertexSpace:r,spatialReference:o}=n;if("georeferenced"===r.type){const n=t;if(!(0,d.g)(e,n,o))return!1;const{origin:i}=r;return(0,u.d)(t,n,i),!0}const i=(0,h.lO)(o),l=t;if(!(0,d.g)(e,l,i))return!1;const{origin:a}=r,c=X;if(!(0,p.l)(o,a,c,i))return!1;const f=(0,s.B8)(X,c);return null!=f&&((0,u.t)(t,l,f),!0)}function M(t,e,n){const{vertexSpace:r,transform:o,vertexAttributes:i}=t,a=(0,m.Hq)(r)?o:null,f=T(t.spatialReference,n,Y.SOURCE_AND_TARGET);if((0,m.yJ)(r,e)&&(!a||(0,s.t2)(a.localMatrix,c.zK))&&S(f)){const{position:t,normal:e,tangent:r}=i,o=n?.allowBufferReuse;return{position:o?t:t.slice(),normal:o?e:e?.slice(),tangent:o?r:r?.slice()}}switch(t.vertexSpace.type){case"local":return"local"===e.type?function(t,e,n,r){let{vertexAttributes:o,spatialReference:i,transform:l}=t,{origin:a}=e;const c=v(i,r);if(!(0,p.l)(i,a,R,c))return(0,y.CN)(x(),i,c),null;if(l&&(0,s.lw)(R,R,l.localMatrix),!(0,p.l)(i,n,N,c))return(0,y.CN)(x(),c,i),null;(0,s.B8)(N,N);const u=(0,s.lw)(R,N,R);return B(u,i,r,Y.SOURCE_AND_TARGET),w(o,u)}(t,t.vertexSpace,e.origin,n):function(t,e,n,r){let{spatialReference:o,vertexAttributes:i,transform:l}=t,{origin:a}=e;const c=v(o,r);if(!(0,p.l)(o,a,R,c))return(0,y.CN)(x(),o,c),null;l&&(0,s.lw)(R,R,l.localMatrix),B(R,o,r,Y.SOURCE);const f=new Float64Array(i.position.length),h=function(t,e,n,r,o){(0,_.t)(r,t,e);const i=new Float64Array(t.length);return(0,y.$5)(r,o,i,n)?i:((0,y.CN)(x(),o,n),null)}(i.position,R,o,f,c);if(!h)return null;const d=function(t,e,n,r,o,i){if(null==o)return null;const l=new Float32Array(o.length);return(0,y.qs)(o,l,i),(0,y.si)(l,t,e,n,r,l)?l:((0,y.CN)(x(),r,e),null)}(h,o,f,c,i.normal,R);if(i.normal&&!d)return null;const m=function(t,e,n,r,o,i){if(null==o)return null;const l=new Float32Array(o.length);return(0,y.KM)(o,l,i),(0,y.Mv)(l,t,e,n,r,l)?l:((0,y.CN)(x(),r,e),null)}(h,o,f,c,i.tangent,R);if(i.tangent&&!m)return null;if(n){const t=(0,u.v)(C,n);(0,_.a)(h,h,t)}return{position:h,normal:d,tangent:m}}(t,t.vertexSpace,e.origin,n);case"georeferenced":return"local"===e.type?function(t,e,n,r){let{vertexAttributes:o,spatialReference:i,transform:a}=t,{origin:c}=e;const u=v(i,r);if(!(0,p.l)(i,n,R,u))return(0,y.CN)(x(),i,u),null;const f=1/T(i,r,Y.TARGET);(0,s.hs)(R,R,[f,f,f]);const h=(0,s.B8)(N,R),{position:d,normal:m,tangent:g}=function(t,e,n){if(!e)return t;if(!n){const{position:n,normal:r,tangent:o}=t;return{position:(0,_.a)(new Float64Array(n.length),n,e),tangent:o,normal:r}}const r=w(t,n.localMatrix);return(0,_.a)(r.position,r.position,e),r}(o,c,a),A=new Float64Array(d.length),M=function(t,e,n,r,o){const i=(0,y.gr)(t,e,r,o);if(!i)return(0,y.CN)(x(),e,o),null;const l=new Float64Array(i.length);return(0,_.t)(l,i,n),l}(d,i,h,A,u);if(!M)return null;const B=(0,l.Ge)(O,h),S=function(t,e,n,r,o,i,l){if(null==t)return null;const a=l??new Float32Array(t.length);return(0,y.X4)(t,e,n,r,o,a)?((0,_.b)(a,a,i),a):((0,y.CN)(x(),n,o),null)}(m,d,i,A,u,B,m!==o.normal?m:void 0);if(!S&&m)return null;const E=function(t,e,n,r,o,i,l){if(null==t)return null;const a=l??new Float32Array(t.length);return(0,y.xA)(t,e,n,r,o,a)?((0,_.b)(a,a,i,4),a):((0,y.CN)(x(),n,o),null)}(g,d,i,A,u,B,g!==o.tangent?g:void 0);return!E&&g?null:{position:M,normal:S,tangent:E}}(t,t.vertexSpace,e.origin,n):function(t,e,n,r){let{vertexAttributes:o,transform:i,spatialReference:l}=t,{origin:a}=e;const f=T(l,r,Y.SOURCE_AND_TARGET),h=a||!S(f)?(0,s.C)(R,i?.localMatrix??c.zK):null;h&&B(h,l,r,Y.SOURCE_AND_TARGET);const{position:p,normal:d,tangent:m}=h?w(o,h):o,g=r?.allowBufferReuse,y=g?p:new Float64Array(p.length);let x=p;if(a&&(x=(0,_.a)(y,x,a)),n){const t=(0,u.v)(C,n);x=(0,_.a)(y,x,t)}return{position:x!==o.position||g?x:x.slice(),normal:d!==o.normal||g?d:d?.slice(),tangent:m!==o.tangent||g?m:m?.slice()}}(t,t.vertexSpace,e.origin,n)}}function v(t,e){return e?.useEllipsoid&&(0,g.B3)(t)?h.Y0:(0,h.lO)(t)}function w(t,e){const n=new Float64Array(t.position.length);(0,_.t)(n,t.position,e);const r=t.normal?new Float32Array(t.normal.length):null,o=t.tangent?new Float32Array(t.tangent.length):null;return r&&t.normal&&(0,y.qs)(t.normal,r,e),o&&t.tangent&&(0,y.KM)(t.tangent,o,e),{position:n,normal:r,tangent:o}}function B(t,e,n,r){const o=T(e,n,r);S(o)||(0,s.hs)(t,t,[o,o,o])}function T(t,e,n){const r=!!(n&Y.SOURCE),o=!!(n&Y.TARGET),i=e?.sourceUnit,l=e?.targetUnit;if(!i&&!l)return 1;let a=E(i,t);r||!i||S(a)||(x().warn("source unit conversion not supported"),a=1);let s=1/E(l,t);return o||!l||S(s)||(x().warn("target unit conversion not supported"),s=1),a*s}function S(t){return(0,o.Io)(t,1)}function E(t,e){if(null==t)return 1;const n=(0,i.KX)(e);return 1/(0,i.oU)(n,"meters",t)}const R=(0,c.vt)(),N=(0,c.vt)(),O=(0,a.vt)(),C=(0,f.vt)(),X=(0,c.vt)();var Y;!function(t){t[t.NONE=0]="NONE",t[t.SOURCE=1]="SOURCE",t[t.TARGET=2]="TARGET",t[t.SOURCE_AND_TARGET=3]="SOURCE_AND_TARGET"}(Y||(Y={}))},99773:(t,e,n)=>{n.d(e,{CK:()=>f,Hq:()=>u,MW:()=>h,TE:()=>p,yJ:()=>d});var r=n(63241),o=n(76460),i=n(20664),l=n(19247),a=n(14894),s=n(5845);function c(){return o.A.getLogger("esri.geometry.Mesh")}function u(t){return null!=t.origin}function f(t){return u(t.vertexSpace)}function h(t,e){if(!u(t))return null;const[n,r,o]=t.origin;return new l.A({x:n,y:r,z:o,spatialReference:e})}function p(t,e){const{x:n,y:o,z:i,spatialReference:l}=t,u=[n,o,i??0];return void 0!==e?.geographic&&((0,r.io)(c(),"option: geographic",{replacement:"Use the `vertexSpace` option instead.",version:"4.29",warnOnce:!0}),e.vertexSpace&&c().warn("Deprecated geographic flag ignored since vertexSpace option is provided.")),"local"===(e?.vertexSpace??(f=e?.geographic,null==f?void 0:f?"local":"georeferenced")??function(t){return t.isGeographic||t.isWebMercator?"local":"georeferenced"}(l))?new s.A({origin:u}):new a.A({origin:u});var f}function d(t,e){return t.type===e.type&&(t.origin===e.origin||null!=t.origin&&null!=e.origin&&(0,i.p)(t.origin,e.origin))}}}]);
//# sourceMappingURL=98357.8c8479ee.chunk.js.map