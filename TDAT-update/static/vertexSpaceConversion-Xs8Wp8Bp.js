import{aZ as J,cO as L,g1 as Y,ci as M,g2 as Z,g3 as _,g4 as b,cV as T,g5 as B,c_ as h,cP as D,fF as I,g6 as K,F as Q,dm as W,ee as X}from"./index-CN4ACLGJ.js";import{e as nn}from"./mat3f64-q3fE-ZOt.js";import{o as tn,e as E}from"./mat4f64-CSKppSlJ.js";import{a as F}from"./spatialReferenceEllipsoidUtils-m81BWRKb.js";import{u as R}from"./computeTranslationToOriginAndRotation-BHX3BSCU.js";import{m as rn}from"./meshVertexSpaceUtils-D7LLjQq-.js";import{i as v,e as P,f as z}from"./vec3-BxdF4rWT.js";import{logProjectionError as A,transformNormal as V,transformTangent as k,projectFromPCPF as on,projectNormalFromPCPF as en,projectTangentFromPCPF as an,projectToPCPF as ln,projectNormalToPCPF as sn,projectTangentToPCPF as cn}from"./projection-B0wB-UWX.js";function U(n,t,o,e){if(J(n.spatialReference,o)){w[0]=n.x,w[1]=n.y;const a=n.z;return w[2]=a??e??0,L(w,n.spatialReference,0,t,o,0,1)}const r=Y(n,o);return!!r&&(t[0]=r==null?void 0:r.x,t[1]=r==null?void 0:r.y,t[2]=(r==null?void 0:r.z)??e??0,!0)}const w=M(),g=()=>Q.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function On(n,t,{vertexSpace:o,spatialReference:e}){if(o.type==="georeferenced"){const u=n;if(!U(t,u,e))return!1;const{origin:c}=o;return W(n,u,c),!0}const r=F(e),a=n;if(!U(t,a,r))return!1;const{origin:l}=o,s=d;if(!R(e,l,s,r))return!1;const i=h(d,s);return i!=null&&(X(n,a,i),!0)}function Nn(n,t,o){const{vertexSpace:e,transform:r,vertexAttributes:a}=n,l=y(n.spatialReference,o,p.SOURCE|p.TARGET);if(rn(e,t)&&(!r||Z(r.localMatrix,tn))&&_(l,1)){const{position:s,normal:i,tangent:u}=a,c=o==null?void 0:o.allowBufferReuse;return{position:c?s:s.slice(),normal:c?i:i==null?void 0:i.slice(),tangent:c?u:u==null?void 0:u.slice()}}switch(n.vertexSpace.type){case"local":return t.type==="local"?mn(n,n.vertexSpace,t.origin,o):fn(n,n.vertexSpace,t.origin,o);case"georeferenced":return t.type==="local"?gn(n,n.vertexSpace,t.origin,o):un(n,n.vertexSpace,t.origin,o)}}function un({vertexAttributes:n,transform:t,spatialReference:o},{origin:e},r,a){const{position:l,normal:s,tangent:i}=t?S(n,t.localMatrix):n,u=new Float64Array(l.length);let c=l;if(e&&(c=v(u,c,e)),r){const $=b(H,r);c=v(u,c,$)}y(o,a,p.NONE);const m=a==null?void 0:a.allowBufferReuse;return{position:c!==n.position||m?c:c.slice(),normal:s!==n.normal||m?s:s==null?void 0:s.slice(),tangent:i!==n.tangent||m?i:i==null?void 0:i.slice()}}function fn({spatialReference:n,vertexAttributes:t,transform:o},{origin:e},r,a){const l=F(n);if(!R(n,e,f,l))return A(g(),n,l),null;o&&T(f,f,o.localMatrix),q(f,n,a,p.SOURCE);const s=new Float64Array(t.position.length),i=An(t.position,f,n,s);if(!i)return null;const u=Fn(i,s,t.normal,f,n);if(t.normal&&!u)return null;const c=$n(i,s,t.tangent,f,n);if(t.tangent&&!c)return null;if(r){const m=b(H,r);v(i,i,m)}return{position:i,normal:u,tangent:c}}function gn({vertexAttributes:n,spatialReference:t,transform:o},{origin:e},r,a){const l=F(t);if(!R(t,r,f,l))return A(g(),t,l),null;const s=1/y(t,a,p.TARGET);B(f,f,[s,s,s]);const i=h(x,f),{position:u,normal:c,tangent:m}=pn(n,e,o),$=new Float64Array(u.length),C=xn(u,t,i,$);if(!C)return null;const j=D(wn,i),O=Rn(c,u,$,t,j,c!==n.normal?c:void 0);if(!O&&c)return null;const N=vn(m,u,$,t,j,m!==n.tangent?m:void 0);return!N&&m?null:{position:C,normal:O,tangent:N}}function pn(n,t,o){if(!t)return n;if(!o){const{position:r,normal:a,tangent:l}=n;return{position:v(new Float64Array(r.length),r,t),tangent:l,normal:a}}const e=S(n,o.localMatrix);return v(e.position,e.position,t),e}function mn({vertexAttributes:n,spatialReference:t,transform:o},{origin:e},r,a){const l=F(t);if(!R(t,e,f,l))return A(g(),t,l),null;if(o&&T(f,f,o.localMatrix),!R(t,r,x,l))return A(g(),l,t),null;h(x,x);const s=T(f,x,f);return q(s,t,a,p.SOURCE|p.TARGET),S(n,s)}function S(n,t){const o=new Float64Array(n.position.length);P(o,n.position,t);const e=n.normal?new Float32Array(n.normal.length):null,r=n.tangent?new Float32Array(n.tangent.length):null;return e&&n.normal&&V(n.normal,e,t),r&&n.tangent&&k(n.tangent,r,t),{position:o,normal:e,tangent:r}}function An(n,t,o,e){P(e,n,t);const r=new Float64Array(n.length);return on(e,r,o)?r:(A(g(),F(o),o),null)}function Fn(n,t,o,e,r){if(o==null)return null;const a=new Float32Array(o.length);return V(o,a,e),en(a,n,t,r,a)?a:(A(g(),F(r),r),null)}function $n(n,t,o,e,r){if(o==null)return null;const a=new Float32Array(o.length);return k(o,a,e),an(a,n,t,r,a)?a:(A(g(),F(r),r),null)}function q(n,t,o,e){const r=y(t,o,e);r!==1&&B(n,n,[r,r,r])}function y(n,t,o){const e=!!(o&p.SOURCE),r=!!(o&p.TARGET),a=t==null?void 0:t.sourceUnit,l=t==null?void 0:t.targetUnit;if(!a&&!l)return 1;let s=G(a,n);!e&&a&&s!==1&&(g().warn("source unit conversion not supported"),s=1);let i=1/G(l,n);return!r&&l&&i!==1&&(g().warn("target unit conversion not supported"),i=1),s*i}function xn(n,t,o,e){const r=ln(n,t,e);if(!r)return A(g(),t,F(t)),null;const a=new Float64Array(r.length);return P(a,r,o),a}function Rn(n,t,o,e,r,a){if(n==null)return null;const l=a??new Float32Array(n.length);return sn(n,t,o,e,l)?(z(l,l,r),l):(A(g(),e,F(e)),null)}function vn(n,t,o,e,r,a){if(n==null)return null;const l=a??new Float32Array(n.length);return cn(n,t,o,e,l)?(z(l,l,r,4),l):(A(g(),e,F(e)),null)}function G(n,t){if(n==null)return 1;const o=I(t);return 1/K(o,"meters",n)}const f=E(),x=E(),wn=nn(),H=M(),d=E();var p;(function(n){n[n.NONE=0]="NONE",n[n.SOURCE=1]="SOURCE",n[n.TARGET=2]="TARGET"})(p||(p={}));export{Nn as M,On as N,G as X,U as c};
