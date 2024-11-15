"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[72003],{30674:(e,n,t)=>{t.d(n,{A:()=>f});var l=t(35143),a=t(45802),i=t(42553),o=t(46053),s=(t(81806),t(76460),t(47249),t(6409)),r=t(85842);const u=new a.J({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),c=new a.J({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let d=class extends i.oY{constructor(e){super(e),this.type="class-breaks-definition",this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null}set standardDeviationInterval(e){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",e)}set definedInterval(e){"defined-interval"===this.classificationMethod&&this._set("definedInterval",e)}};(0,l._)([(0,s.e)({classBreaksDef:"class-breaks-definition"})],d.prototype,"type",void 0),(0,l._)([(0,o.MZ)({json:{write:!0}})],d.prototype,"breakCount",void 0),(0,l._)([(0,o.MZ)({json:{write:!0}})],d.prototype,"classificationField",void 0),(0,l._)([(0,o.MZ)({type:String,json:{read:u.read,write:u.write}})],d.prototype,"classificationMethod",void 0),(0,l._)([(0,o.MZ)({json:{write:!0}})],d.prototype,"normalizationField",void 0),(0,l._)([(0,o.MZ)({json:{read:c.read,write:c.write}})],d.prototype,"normalizationType",void 0),(0,l._)([(0,o.MZ)({value:null,json:{write:!0}})],d.prototype,"standardDeviationInterval",null),(0,l._)([(0,o.MZ)({value:null,json:{write:!0}})],d.prototype,"definedInterval",null),d=(0,l._)([(0,r.$)("esri.rest.support.ClassBreaksDefinition")],d);const f=d},15498:(e,n,t)=>{t.d(n,{_:()=>o,t:()=>s});var l=t(76460);const a=()=>l.A.getLogger("esri.rest.support.generateRendererUtils");function i(e,n){return Number(e.toFixed(n))}function o(e){const n=c(e),t=[],l=n.uniqueValues.length;for(let a=0;a<l;a++){const e=n.uniqueValues[a],l=n.valueFrequency[a],i=e.toString();t.push({value:e,count:l,label:i})}return{uniqueValues:t}}function s(e){const{normalizationTotal:n}=e;return{classBreaks:r(e),normalizationTotal:n}}function r(e){const n=e.definition,{classificationMethod:t,normalizationType:l,definedInterval:a}=n,o=n.breakCount??1,s=[];let r=e.values;if(0===r.length)return[];r=r.sort(((e,n)=>e-n));const f=r[0],m=r[r.length-1];if("equal-interval"===t)if(r.length>=o){const e=(m-f)/o;let n=f;for(let t=1;t<o;t++){const a=i(f+t*e,6);s.push({minValue:n,maxValue:a,label:u(n,a,l)}),n=a}s.push({minValue:n,maxValue:m,label:u(n,m,l)})}else r.forEach((e=>{s.push({minValue:e,maxValue:e,label:u(e,e,l)})}));else if("natural-breaks"===t){const n=c(r),t=e.valueFrequency||n.valueFrequency,a=d(n.uniqueValues,t,o);let p=f;for(let e=1;e<o;e++)if(n.uniqueValues.length>e){const t=i(n.uniqueValues[a[e]],6);s.push({minValue:p,maxValue:t,label:u(p,t,l)}),p=t}s.push({minValue:p,maxValue:m,label:u(p,m,l)})}else if("quantile"===t)if(r.length>=o&&f!==m){let e=f,n=Math.ceil(r.length/o),t=0;for(let a=1;a<o;a++){let i=n+t-1;i>r.length&&(i=r.length-1),i<0&&(i=0),s.push({minValue:e,maxValue:r[i],label:u(e,r[i],l)}),e=r[i],t+=n,n=Math.ceil((r.length-t)/(o-a))}s.push({minValue:e,maxValue:m,label:u(e,m,l)})}else{let e=-1;for(let n=0;n<r.length;n++){const t=r[n];t!==e&&(e=t,s.push({minValue:e,maxValue:t,label:u(e,t,l)}),e=t)}}else if("standard-deviation"===t){const e=function(e){let n=0;for(let t=0;t<e.length;t++)n+=e[t];return n/=e.length,n}(r),n=function(e,n){let t=0;for(let l=0;l<e.length;l++){const a=e[l];t+=(a-n)*(a-n)}return t/=e.length,Math.sqrt(t)}(r,e);if(0===n)s.push({minValue:r[0],maxValue:r[0],label:u(r[0],r[0],l)});else{const t=function(e,n,t,l,a){let i=Math.max(l-e,n-l)/a/t;return i=i>=1?1:i>=.5?.5:.25,i}(f,m,o,e,n)*n;let a=0,r=f;for(let n=o;n>=1;n--){const o=i(e-(n-.5)*t,6);s.push({minValue:r,maxValue:o,label:u(r,o,l)}),r=o,a++}let c=i(e+.5*t,6);s.push({minValue:r,maxValue:c,label:u(r,c,l)}),r=c,a++;for(let n=1;n<=o;n++)c=a===2*o?m:i(e+(n+.5)*t,6),s.push({minValue:r,maxValue:c,label:u(r,c,l)}),r=c,a++}}else if("defined-interval"===t){if(!a)return s;const e=r[0],n=r[r.length-1],t=Math.ceil((n-e)/a);let o=e;for(let r=1;r<t;r++){const n=i(e+r*a,6);s.push({minValue:o,maxValue:n,label:u(o,n,l)}),o=n}s.push({minValue:o,maxValue:n,label:u(o,n,l)})}return s}function u(e,n,t){let l=null;return l=e===n?t&&"percent-of-total"===t?e+"%":e.toString():t&&"percent-of-total"===t?e+"% - "+n+"%":e+" - "+n,l}function c(e){const n=[],t=[];let l=Number.MIN_VALUE,a=1,i=-1;for(let o=0;o<e.length;o++){const s=e[o];s===l?(a++,t[i]=a):null!==s&&(n.push(s),l=s,a=1,t.push(a),i++)}return{uniqueValues:n,valueFrequency:t}}function d(e,n,t){const l=e.length,a=[];t>l&&(t=l);for(let o=0;o<t;o++)a.push(Math.round(o*l/t-1));a.push(l-1);let i=f(a,e,n,t);return function(e,n,t,l,a,i){let o=0,s=0,r=0,u=0,c=!0;for(let d=0;d<2&&c;d++){0===d&&(c=!1);for(let d=0;d<i-1;d++)for(;t[d+1]+1!==t[d+2];){t[d+1]=t[d+1]+1;const i=m(d,t,l,a);r=i.sbMean,o=i.sbSdcm;const f=m(d+1,t,l,a);if(u=f.sbMean,s=f.sbSdcm,!(o+s<n[d]+n[d+1])){t[d+1]=t[d+1]-1;break}n[d]=o,n[d+1]=s,e[d]=r,e[d+1]=u,c=!0}for(let d=i-1;d>0;d--)for(;t[d]!==t[d-1]+1;){t[d]=t[d]-1;const i=m(d-1,t,l,a);r=i.sbMean,o=i.sbSdcm;const f=m(d,t,l,a);if(u=f.sbMean,s=f.sbSdcm,!(o+s<n[d-1]+n[d])){t[d]=t[d]+1;break}n[d-1]=o,n[d]=s,e[d-1]=r,e[d]=u,c=!0}}return c}(i.mean,i.sdcm,a,e,n,t)&&(i=f(a,e,n,t)),a}function f(e,n,t,l){let a=[],i=[],o=[],s=0;const r=[],u=[];for(let p=0;p<l;p++){const l=m(p,e,n,t);r.push(l.sbMean),u.push(l.sbSdcm),s+=u[p]}let c,d=s,f=!0;for(;f||s<d;){f=!1,a=[];for(let n=0;n<l;n++)a.push(e[n]);for(let t=0;t<l;t++)for(let a=e[t]+1;a<=e[t+1];a++)if(c=n[a],t>0&&a!==e[t+1]&&Math.abs(c-r[t])>Math.abs(c-r[t-1]))e[t]=a;else if(t<l-1&&e[t]!==a-1&&Math.abs(c-r[t])>Math.abs(c-r[t+1])){e[t+1]=a-1;break}d=s,s=0,i=[],o=[];for(let a=0;a<l;a++){i.push(r[a]),o.push(u[a]);const l=m(a,e,n,t);r[a]=l.sbMean,u[a]=l.sbSdcm,s+=u[a]}}if(s>d){for(let n=0;n<l;n++)e[n]=a[n],r[n]=i[n],u[n]=o[n];s=d}return{mean:r,sdcm:u}}function m(e,n,t,l){let i=0,o=0;for(let a=n[e]+1;a<=n[e+1];a++){const e=l[a];i+=t[a]*e,o+=e}o<=0&&a().warn("Exception in Natural Breaks calculation");const s=i/o;let r=0;for(let a=n[e]+1;a<=n[e+1];a++)r+=l[a]*(t[a]-s)**2;return{sbMean:s,sbSdcm:r}}},72003:(e,n,t)=>{t.d(n,{$y:()=>Z,FM:()=>V,G_:()=>b,OR:()=>A,Rw:()=>$,Vb:()=>h,al:()=>O,b3:()=>C,gJ:()=>p,jM:()=>j,lv:()=>B,oZ:()=>q,qg:()=>g,wy:()=>m,z9:()=>v,zS:()=>E});var l=t(30674),a=t(15498);const i="<Null>",o="equal-interval",s=1,r=5,u=10,c=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,d=new Set(["esriFieldTypeDate","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeOID","esriFieldTypeBigInteger"]),f=new Set(["esriFieldTypeTimeOnly","esriFieldTypeDateOnly"]),m=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function p(e){return null==e||"string"==typeof e&&!e?i:e}function h(e){const n=null!=e.normalizationField||null!=e.normalizationType,t=null!=e.minValue||null!=e.maxValue,l=!!e.sqlExpression&&e.supportsSQLExpression;return!n&&!t&&!l}function v(e){const{outStatisticTypes:n}=e,t=e.returnDistinct?[...new Set(e.values)]:e.values,l=t.filter((e=>null!=e)).sort(),a=l.length,i={count:a,min:l[0],max:l[a-1]};return e.supportsNullCount&&(i.nullcount=t.length-a),!e.percentileParams||n?.include?.length&&!n.include.includes("median")||n?.exclude?.length&&n.exclude.includes("median")||(i.median=g(t,e.percentileParams)),i}function b(e){const{values:n,useSampleStdDev:t,supportsNullCount:l,outStatisticTypes:a}=e;let i=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY,s=null,r=null,u=null,c=null,d=0;const f=null==e.minValue?-1/0:e.minValue,m=null==e.maxValue?1/0:e.maxValue;for(const h of n)Number.isFinite(h)?h>=f&&h<=m&&(s=null===s?h:s+h,i=Math.min(i,h),o=Math.max(o,h),d++):"string"==typeof h&&d++;if(d&&null!=s){r=s/d;let e=0;for(const t of n)Number.isFinite(t)&&t>=f&&t<=m&&(e+=(t-r)**2);c=t?d>1?e/(d-1):0:d>0?e/d:0,u=Math.sqrt(c)}else i=null,o=null;const p={avg:r,count:d,max:o,min:i,stddev:u,sum:s,variance:c};return l&&(p.nullcount=n.length-d),!e.percentileParams||a?.include?.length&&!a.include.includes("median")||a?.exclude?.length&&a.exclude.includes("median")||(p.median=g(n,e.percentileParams)),p}function g(e,n){const{fieldType:t,value:l,orderBy:a,isDiscrete:i}=n,o=V(t,"desc"===a);if(0===(e=[...e].filter((e=>null!=e)).sort(((e,n)=>o(e,n)))).length)return null;if(l<=0)return e[0];if(l>=1)return e[e.length-1];const s=(e.length-1)*l,r=Math.floor(s),u=r+1,c=s%1,d=e[r],f=e[u];return u>=e.length||i||"string"==typeof d||"string"==typeof f?d:d*(1-c)+f*c}function V(e,n){if(e){if(d.has(e))return w(n);if(f.has(e))return D(n,!1);if("esriFieldTypeTimestampOffset"===e)return function(e){return e?F:M}(n);const t=D(n,!0);if("esriFieldTypeString"===e)return t;if("esriFieldTypeGUID"===e||"esriFieldTypeGlobalID"===e)return(e,n)=>t(N(e),N(n))}const t=n?1:-1,l=w(n),a=D(n,!0),i=T(n);return(e,n)=>"number"==typeof e&&"number"==typeof n?l(e,n):"string"==typeof e&&"string"==typeof n?a(e,n):i(e,n)??t}const y=(e,n)=>null==e?null==n?0:1:null==n?-1:null,x=(e,n)=>null==e?null==n?0:-1:null==n?1:null;function T(e){return e?y:x}const M=(e,n)=>x(e,n)??(e===n?0:new Date(e).getTime()-new Date(n).getTime()),F=(e,n)=>y(e,n)??(e===n?0:new Date(n).getTime()-new Date(e).getTime());const z=(e,n)=>x(e,n)??(e===n?0:e<n?-1:1),I=(e,n)=>y(e,n)??(e===n?0:e<n?1:-1);function D(e,n){if(!n)return e?I:z;const t=T(e);return e?(e,n)=>{const l=t(e,n);return null!=l?l:(e=e.toUpperCase())>(n=n.toUpperCase())?-1:e<n?1:0}:(e,n)=>{const l=t(e,n);return null!=l?l:(e=e.toUpperCase())<(n=n.toUpperCase())?-1:e>n?1:0}}const S=(e,n)=>y(e,n)??n-e,k=(e,n)=>x(e,n)??e-n;function w(e){return e?S:k}function N(e){return e.slice(24,36)+e.slice(19,23)+e.slice(16,18)+e.slice(14,16)+e.slice(11,13)+e.slice(9,11)+e.slice(6,8)+e.slice(4,6)+e.slice(2,4)+e.slice(0,2)}function q(e,n,t){let l;for(l in e)n?.include?.length&&!n.include.includes(l)||n?.exclude?.length&&n.exclude.includes(l)?delete e[l]:m.includes(l)&&(Number.isFinite(e[l])||(e[l]=null));return t?(["avg","stddev","variance"].forEach((n=>{null!=e[n]&&(e[n]=Math.ceil(e[n]??0))})),e):e}function C(e){const n={};for(let t of e)(null==t||"string"==typeof t&&""===t.trim())&&(t=null),null==n[t]?n[t]={count:1,data:t}:n[t].count++;return{count:n}}function _(e){return"coded-value"!==e?.type?[]:e.codedValues.map((e=>e.code))}function B(e,n,t,l){const a=e.count,i=[];if(t&&n){const e=[],t=_(n[0]);for(const a of t)if(n[1]){const t=_(n[1]);for(const i of t)if(n[2]){const t=_(n[2]);for(const n of t)e.push(`${p(a)}${l}${p(i)}${l}${p(n)}`)}else e.push(`${p(a)}${l}${p(i)}`)}else e.push(a);for(const n of e)a.hasOwnProperty(n)||(a[n]={data:n,count:0})}for(const o in a){const e=a[o];i.push({value:e.data,count:e.count,label:e.label})}return{uniqueValueInfos:i}}function E(e,n,t,l){let a=null;switch(n){case"log":0!==e&&(a=Math.log(e)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(l)&&0!==l&&(a=e/l*100);break;case"field":Number.isFinite(t)&&0!==t&&(a=e/t);break;case"natural-log":e>0&&(a=Math.log(e));break;case"square-root":e>0&&(a=e**.5)}return a}function $(e,n){const t=O({field:n.field,normalizationType:n.normalizationType,normalizationField:n.normalizationField,classificationMethod:n.classificationMethod,standardDeviationInterval:n.standardDeviationInterval,breakCount:n.numClasses||r});return e=function(e,n,t){const l=n??-1/0,a=t??1/0;return e.filter((e=>Number.isFinite(e)&&e>=l&&e<=a))}(e,n.minValue,n.maxValue),(0,a.t)({definition:t,values:e,normalizationTotal:n.normalizationTotal})}function O(e){const{breakCount:n,field:t,normalizationField:a,normalizationType:i}=e,r=e.classificationMethod||o,u="standard-deviation"===r?e.standardDeviationInterval||s:void 0,c="defined-interval"===r?e.definedInterval:void 0;return new l.A({breakCount:n,classificationField:t,classificationMethod:r,normalizationField:"field"===i?a:void 0,normalizationType:i,standardDeviationInterval:u,definedInterval:c})}function j(e,n){let t=e.classBreaks;const l=t.length,a=t[0]?.minValue,i=t[l-1]?.maxValue,o="standard-deviation"===n,s=c;return t=t.map((e=>{const n=e.label,t={minValue:e.minValue,maxValue:e.maxValue,label:n};if(o&&n){const e=n.match(s),l=e?.map((e=>+e.trim()))??[];2===l.length?(t.minStdDev=l[0],t.maxStdDev=l[1],l[0]<0&&l[1]>0&&(t.hasAvg=!0)):1===l.length&&(n.includes("<")?(t.minStdDev=null,t.maxStdDev=l[0]):n.includes(">")&&(t.minStdDev=l[0],t.maxStdDev=null))}return t})),{minValue:a,maxValue:i,classBreakInfos:t,normalizationTotal:e.normalizationTotal}}function Z(e,n){const t=P(e,n);if(null==t.min&&null==t.max)return{bins:[],minValue:t.min,maxValue:t.max,normalizationTotal:n.normalizationTotal};const l=t.intervals,a=t.min??0,i=t.max??0,o=l.map(((e,n)=>({minValue:l[n][0],maxValue:l[n][1],count:0})));for(const s of e)if(null!=s&&s>=a&&s<=i){const e=U(l,s);e>-1&&o[e].count++}return{bins:o,minValue:a,maxValue:i,normalizationTotal:n.normalizationTotal}}function P(e,n){const{field:t,classificationMethod:l,standardDeviationInterval:a,normalizationType:i,normalizationField:o,normalizationTotal:s,minValue:r,maxValue:c}=n,d=n.numBins||u;let f=null,m=null,p=null;if(l&&"equal-interval"!==l||i){const{classBreaks:n}=$(e,{field:t,normalizationType:i,normalizationField:o,normalizationTotal:s,classificationMethod:l,standardDeviationInterval:a,minValue:r,maxValue:c,numClasses:d});f=n[0].minValue,m=n[n.length-1].maxValue,p=n.map((e=>[e.minValue,e.maxValue]))}else{if(null!=r&&null!=c)f=r,m=c;else{const n=b({values:e,minValue:r,maxValue:c,useSampleStdDev:!i,supportsNullCount:h({normalizationType:i,normalizationField:o,minValue:r,maxValue:c})});f=n.min??null,m=n.max??null}p=A(f??0,m??0,d)}return{min:f,max:m,intervals:p}}function U(e,n){let t=-1;for(let l=e.length-1;l>=0;l--)if(n>=e[l][0]){t=l;break}return t}function A(e,n,t){const l=(n-e)/t,a=[];let i,o=e;for(let s=1;s<=t;s++)i=o+l,i=Number(i.toFixed(16)),a.push([o,s===t?n:i]),o=i;return a}}}]);
//# sourceMappingURL=72003.00e219d7.chunk.js.map