"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[80232],{15359:(e,t,n)=>{n.d(t,{A:()=>m});var i,l=n(35143),r=n(42553),s=n(53084),a=n(46053),o=n(40565),u=n(85842);let c=i=class extends r.oY{constructor(e){super(e),this.variableName=null,this.dimensionName=null,this.values=[],this.isSlice=!1}clone(){return new i({variableName:this.variableName,dimensionName:this.dimensionName,values:(0,s.o8)(this.values),isSlice:this.isSlice})}};(0,l._)([(0,a.MZ)({type:String,json:{write:!0}})],c.prototype,"variableName",void 0),(0,l._)([(0,a.MZ)({type:String,json:{write:!0}})],c.prototype,"dimensionName",void 0),(0,l._)([(0,a.MZ)({type:o.gK.array(o.gK.oneOf([o.gK.native(Number),o.gK.array(o.gK.native(Number))])),json:{write:!0}})],c.prototype,"values",void 0),(0,l._)([(0,a.MZ)({type:Boolean,json:{write:!0}})],c.prototype,"isSlice",void 0),c=i=(0,l._)([(0,u.$)("esri.layers.support.DimensionalDefinition")],c);const m=c},12838:(e,t,n)=>{n.d(t,{jX:()=>c,zo:()=>h,gd:()=>m,ph:()=>a,no:()=>f,kz:()=>o,ht:()=>u,yo:()=>g});n(35238);var i=n(59844),l=n(19247);const r=new Map,s=new class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:15e3,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5e3;this._timer=null,this._cachedBlocks=new Map,this._size=-1,this._duration=e,this._interval=Math.min(e,t)}decreaseRefCount(e,t){const n=e+"/"+t,i=this._cachedBlocks;if(i.has(n)){const e=i.get(n);return e.refCount--,e.refCount<=0&&(i.delete(n),e.controller&&e.controller.abort()),e.refCount}return 0}getBlock(e,t){const n=e+"/"+t,i=this._cachedBlocks;if(i.has(n)){const e=i.get(n);return e.ts=Date.now(),e.refCount++,i.delete(n),i.set(n,e),e.block}return null}putBlock(e,t,n,i){const l=this._cachedBlocks,r=e+"/"+t;if(l.has(r)){const e=l.get(r);e.ts=Date.now(),e.refCount++}else l.set(r,{block:n,ts:Date.now(),refCount:1,controller:i});this._trim(),this._updateTimer()}deleteBlock(e,t){const n=this._cachedBlocks,i=e+"/"+t;n.has(i)&&n.delete(i)}updateMaxSize(e){this._size=e,this._trim()}empty(){this._cachedBlocks.clear(),this._clearTimer()}getCurrentSize(){return this._cachedBlocks.size}_updateTimer(){if(null!=this._timer)return;const e=this._cachedBlocks;this._timer=setInterval((()=>{const t=Array.from(e),n=Date.now();for(let i=0;i<t.length&&t[i][1].ts<=n-this._duration;i++)e.delete(t[i][0]);0===e.size&&this._clearTimer()}),this._interval)}_trim(){const e=this._cachedBlocks;if(-1===this._size||this._size>=e.size)return;const t=Array.from(e);for(let n=0;n<t.length-this._size;n++)e.delete(t[n][0])}_clearTimer(){null!=this._timer&&(clearInterval(this._timer),this._timer=null)}};function a(e,t){return null==t?e:`${e}?sliceId=${t}`}function o(e,t){const n={extent:null,rasterInfo:t,cache:new Map},i=r.get(e);return i?(i.push(n),i.length-1):(r.set(e,[n]),0)}function u(e,t){const n=r.get(e);n&&(n[t]=null,n.some((e=>null!=e))||r.delete(e))}function c(e,t,n){const i=r.get(e);if(!i)return null==t?s.decreaseRefCount(e,n):0;if(null==t||null==i[t])return s.decreaseRefCount(e,n);const l=i[t]?.cache,a=l?.get(n);if(l&&a){if(a.refCount--,0===a.refCount){l.delete(n);for(let e=0;e<i.length;e++)i[e]?.cache.delete(n);a.controller&&a.controller.abort()}return a.refCount}return 0}function m(e,t,n){const i=r.get(e);if(!i)return null==t?s.getBlock(e,n):null;if(null==t||null==i[t]){for(let e=0;e<i.length;e++){const t=i[e]?.cache.get(n);if(t)return t.refCount++,t.block}return s.getBlock(e,n)}const l=i[t]?.cache.get(n);if(l)return l.refCount++,l.block;for(let r=0;r<i.length;r++){if(r===t||!i[r])continue;const e=i[r]?.cache,l=e?.get(n);if(e&&l)return l.refCount++,e.set(n,l),l.block}return null}function f(e,t,n,i){let l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;const a=r.get(e);if(!a)return void(null==t&&s.putBlock(e,n,i,l));if(null==t||null==a[t])return void s.putBlock(e,n,i,l);const o={refCount:1,block:i,isResolved:!1,isRejected:!1,controller:l};i.then((()=>o.isResolved=!0)).catch((()=>o.isRejected=!0)),a[t]?.cache.set(n,o)}function h(e,t,n){const i=r.get(e);i?null!=t&&null!=i[t]?i[t]?.cache.delete(n):s.deleteBlock(e,n):null==t&&s.deleteBlock(e,n)}function d(e,t){const n=r.get(e);return n?n[t]??null:null}function g(e,t,n,r,s,a){let o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;const u=d(e,t);if(!u)return;const c=u.extent,{cache:m,rasterInfo:f}=u;if(c&&c.xmin===n.xmin&&c.xmax===n.xmax&&c.ymin===n.ymin&&c.ymax===n.ymax)return;r=r??0;const h=n.clone().normalize(),{spatialReference:g,transform:v}=f,b=new Set;for(let d=0;d<h.length;d++){const e=h[d];if(e.xmax-e.xmin<=r||e.ymax-e.ymin<=r)continue;let t=(0,i._l)(e,g,o);null!=v&&(t=v.inverseTransform(t));const n=new l.A({x:r,y:r,spatialReference:e.spatialReference});if(null==s&&!(s=(0,i.Wo)(n,g,e,o)))return;const{pyramidLevel:u,pyramidResolution:c,excessiveReading:m}=(0,i.t$)(s,f,a||"closest");if(m)return;const{storageInfo:y}=f,{origin:x}=y,p={x:Math.max(0,Math.floor((t.xmin-x.x)/c.x)),y:Math.max(0,Math.floor((x.y-t.ymax)/c.y))},k=Math.ceil((t.xmax-t.xmin)/c.x-.1),w=Math.ceil((t.ymax-t.ymin)/c.y-.1),M=u>0?y.pyramidBlockWidth:y.blockWidth,C=u>0?y.pyramidBlockHeight:y.blockHeight,D=1,_=Math.max(0,Math.floor(p.x/M)-D),N=Math.max(0,Math.floor(p.y/C)-D),T=Math.floor((p.x+k-1)/M)+D,S=Math.floor((p.y+w-1)/C)+D;for(let i=N;i<=S;i++)for(let e=_;e<=T;e++)b.add(`${u}/${i}/${e}`)}m.forEach(((e,t)=>{if(!b.has(t)){const e=m.get(t);(null==e||e.isResolved||e.isRejected)&&m.delete(t)}})),u.extent={xmin:n.xmin,ymin:n.ymin,xmax:n.xmax,ymax:n.ymax}}},68347:(e,t,n)=>{n.d(t,{DY:()=>v,NG:()=>p,QW:()=>s,Rp:()=>h,ct:()=>d,fy:()=>g,sx:()=>f,xx:()=>a,z2:()=>b});var i=n(18690),l=n(15359);function r(e,t,n){const i=t.shift();if(0===n.length){const e=[];n.push({sliceId:-1,multidimensionalDefinition:e})}const l=n.length;for(let r=0;r<l;r++){const t=n.shift().multidimensionalDefinition;i.values?.forEach((l=>{n.push({sliceId:-1,multidimensionalDefinition:[...t,{variableName:e,dimensionName:i.name,values:[l]}]})}))}t.length&&r(e,t,n)}function s(e,t){const n=[];let i=0;return(t?e.variables.filter((e=>e.name.toLowerCase()===t.toLowerCase())):[...e.variables].sort(((e,t)=>e.name>t.name?1:-1))).forEach((e=>{const t=[],l=[...e.dimensions].sort(((e,t)=>e.name>t.name?-1:1));r(e.name,l,t),t.forEach((e=>{n.push({...e,sliceId:i++})}))})),n}function a(e,t,n){let i=e;if(t&&(t=[...t].sort(((e,t)=>e.dimensionName<t.dimensionName?-1:1))).forEach((e=>{let{dimensionName:t,values:n,isSlice:l}=e;n.length&&(i=i.filter((e=>{const i=e.multidimensionalDefinition.find((e=>e.dimensionName===t));if(null==i)return!1;const r=i.values[0];return"number"==typeof r?"number"==typeof n[0]?n.includes(r):n.some((e=>e[0]<=r&&e[1]>=r)):"number"==typeof n[0]?n.some((e=>r[0]<=e&&r[1]>=e)):l?n.some((e=>e[0]===r[0]&&e[0]===r[1])):n.some((e=>e[0]>=r[0]&&e[0]<=r[1]||e[1]>=r[0]&&e[1]<=r[1]||e[0]<r[0]&&e[1]>r[1]))})))})),i.length&&null!=n?.start&&null!=n.end){const e=n.start.getTime(),t=n.end.getTime(),l=i[0].multidimensionalDefinition.findIndex((e=>"StdTime"===e.dimensionName));l>-1&&(i=i.filter((n=>{const i=n.multidimensionalDefinition[l].values[0];return e<=i&&t>=i})))}return i.map((e=>e.sliceId))}function o(e,t){return Array.isArray(e)?t[0]===t[1]?e[0]===t[0]||e[1]===t[0]:e[0]>=t[0]&&e[0]<=t[1]&&e[1]>=t[0]&&e[1]<=t[1]:e>=t[0]&&e<=t[1]}function u(e,t){return e[0]<=t[0]&&e[1]>=t[0]||e[0]<=t[1]&&e[1]>=t[1]||e[0]>=t[0]&&e[1]<=t[1]}function c(e){return 1===e.length?[e[0],e[0]]:[e[0],e[e.length-1]]}function m(e,t,n){if(!t?.subsetDefinitions?.length)return e;let i;if(n){const{variables:l}=t;if(l.length&&!l.includes(n))return null;const r=t.subsetDefinitions.find((t=>t.dimensionName===e.name&&t.variableName===n));if(!r?.values?.length)return e;i=c(r.values)}else{const n=t.dimensions.find((t=>{let{name:n}=t;return n===e.name}));i=n?.extent}const l=i;if(!l?.length)return e;const r=e.values.filter((e=>o(e,l)));return{...e,extent:[...l],values:r}}function f(e,t,n){if(!t?.subsetDefinitions?.length)return!1;const{variables:i}=t;if(i.length&&e.some((e=>{let{variableName:t}=e;return t&&!i.includes(t)})))return!0;for(let l=0;l<e.length;l++){const i=e[l],r=t.subsetDefinitions.find((e=>(""===i.variableName||e.variableName===i.variableName)&&e.dimensionName===i.dimensionName));if(r?.values.length){const e=c(r.values);if(i.isSlice||2!==i.values.length||Array.isArray(i.values[0])||i.values[0]===i.values[1]||!n){if(i.values.some((t=>!o(t,e))))return!0}else if(!u(i.values,e))return!0}}return!1}function h(e,t){if(null==e)return{isOutside:!1};const{geometry:n,timeExtent:i,multidimensionalDefinition:r}=t;let s=null;if(null!=i&&(s=function(e,t){const n=e.dimensions.find((e=>{let{name:t}=e;return"StdTime"===t}));if(null==n||null==t.start&&null==t.end)return t;t=t.clone();const{start:i,end:r}=t.toJSON(),s=i===r?[i]:null!=i&&null!=r?[i,r]:[i??r];return 2===s.length&&n?.extent.length&&(s[0]=Math.max(s[0],n.extent[0]),s[1]=Math.min(s[1],n.extent[1]??n.extent[0]),s[1]<s[0])||f([new l.A({variableName:"",dimensionName:"StdTime",isSlice:1===s.length,values:s})],e,!0)?null:(t.start=new Date(s[0]),t.end=new Date(s[1]??s[0]),t)}(e,i),null==s))return{isOutside:!0};const{areaOfInterest:a}=e;if(a&&n){const e="point"===n.type?n:"extent"===n.type?n.center:"polygon"===n.type?n.centroid:null;if(e&&!a.contains(e))return{isOutside:!0}}return null!=r&&r.length&&f(r,e,!0)?{isOutside:!0}:{isOutside:!1,intersection:{geometry:n,timeExtent:s,multidimensionalDefinition:r}}}function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{multidimensionalInfo:n,keyProperties:i}=e;if(null==n)return null;const{variableName:l,multidimensionalSubset:r,multidimensionalDefinition:s}=t,a=null!=s?s[0]?.variableName:null,o=l||a||i?.DefaultVariable;let{variables:u}=n;return r?.variables?.length&&(u=u.filter((e=>{let{name:t}=e;return r.variables.includes(t)}))),o?u.find((e=>{let{name:t}=e;return t===o}))??u[0]:u[0]}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=d(e,t);if(!n)return null;const i=[],{dimensions:r,name:s}=n;if(0===r.length)return[new l.A({variableName:s,dimensionName:"",values:[],isSlice:!0})];for(let a=0;a<r.length;a++){const e=m(r[a],t.multidimensionalSubset,s);if(!e)return null;const{values:n,extent:o}=e;let u=n?.[0]??o?.[0];"stdz"===e.name.toLowerCase()&&!e.hasRanges&&o&&Math.abs(o[1])<=Math.abs(o[0])&&(u=n?.length?n[n.length-1]:o[1]),i.push(new l.A({variableName:s,dimensionName:e.name,values:[u],isSlice:!t.useRangeForRangedDimensionInfo||!!e.hasRanges}))}return i}function v(e){return!!e?.length&&e.some((e=>{if(null==e.values)return!0;const t=e.values.length;return 0===t||t>1||!e.isSlice&&Array.isArray(e.values[0])}))}function b(e,t){if(null==t||null==e)return null;let n=t.variables.map((e=>({...e})));return e?.variables?.length&&(n=n.filter((t=>{let{name:n}=t;return e.variables.includes(n)})),n.forEach((t=>{t.dimensions=t.dimensions.map((n=>m(n,e,t.name))).filter(i.Ru)}))),n}function y(e,t){const{values:n}=t;if(n?.length){const t=Array.isArray(n[0]),i=Array.isArray(e);return t!==i?-1:t&&i?n.findIndex((t=>t[0]===e[0]&&t[1]===e[1])):n.indexOf(e)}const{extent:i}=t;if(Array.isArray(e)||!i||e<i[0]||e>i[1])return-1;const l=t.interval||1;if("ISO8601"!==t.unit)return Math.round((e-i[0])/l);const r=i[0];let s=-1;switch(t.intervalUnit?.toLowerCase()||"days"){case"seconds":s=Math.round((e-r)/1e3/l);break;case"minutes":s=Math.round((e-r)/6e4/l);break;case"hours":s=Math.round((e-r)/36e5/l);break;case"days":s=Math.round((e-r)/864e5/l);break;case"months":{const t=new Date(e).getUTCFullYear()-new Date(r).getUTCFullYear(),n=new Date(r).getUTCMonth(),i=new Date(e).getUTCMonth();s=0===t?i-n:i+11-n+12*(t-1)}break;case"years":s=Math.round((new Date(e).getUTCFullYear()-new Date(r).getUTCFullYear())/l);break;case"decades":s=Math.round((new Date(e).getUTCFullYear()-new Date(r).getUTCFullYear())/10/l)}return s}function x(e){let t=e.values?.length;if(t)return t;const{extent:n,unit:i}=e,l=e.interval||1,r=n?n[1]-n[0]:0;if("ISO8601"!==i)return Math.round(r/l);switch(e.intervalUnit?.toLowerCase()??"seconds"){case"seconds":t=Math.round(r/1e3/l);break;case"minutes":t=Math.round(r/6e4/l);break;case"hours":t=Math.round(r/36e5/l);break;case"days":t=Math.round(r/864e5/l);break;case"months":if(n){const e=new Date(n[1]).getUTCFullYear()-new Date(n[0]).getUTCFullYear(),i=new Date(n[0]).getUTCMonth(),l=new Date(n[1]).getUTCMonth();t=0===e?l-i+1:l+11-i+12*(e-1)+1}else t=0;break;case"years":t=n?Math.round((new Date(n[1]).getUTCFullYear()-new Date(n[0]).getUTCFullYear())/l):0;break;case"decades":t=n?Math.round((new Date(n[1]).getUTCFullYear()-new Date(n[0]).getUTCFullYear())/10/l):0;break;default:t=0}return t}function p(e,t){let n=0;const i=e[0].variableName,l=[...t.variables].sort(((e,t)=>e.name>t.name?1:-1));for(let r=0;r<l.length;r++){const t=l[r],s=[...t.dimensions].sort(((e,t)=>e.name>t.name?-1:1));if(t.name!==i){n+=s.map((e=>x(e))).reduce(((e,t)=>e*t));continue}const a=s.map((e=>x(e))),o=s.length;for(let i=0;i<o;i++){const t=e.find((e=>e.dimensionName===s[i].name));if(null==t)return null;const l=y(t.values[0],s[i]);if(-1===l)return null;a.shift(),n+=i===o-1?l:l*a.reduce(((e,t)=>e*t))}break}return n}}}]);
//# sourceMappingURL=80232.9b20b169.chunk.js.map