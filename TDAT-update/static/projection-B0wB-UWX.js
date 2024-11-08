import{cO as M,cP as _,cQ as j,cR as S,cS as h,cT as x,ch as v,cU as R,aZ as W,cV as b,cW as Y,bQ as B,cX as Q,cY as U,cZ as Z,ci as L,c_ as q,c$ as z,d0 as J}from"./index-CN4ACLGJ.js";import{e as X}from"./mat3f64-q3fE-ZOt.js";import{o as N,e as D}from"./mat4f64-CSKppSlJ.js";import{a as C}from"./spatialReferenceEllipsoidUtils-m81BWRKb.js";import{u as V}from"./computeTranslationToOriginAndRotation-BHX3BSCU.js";import{t as G,o as H}from"./DoubleArray-Bq9Bb0l5.js";import{i as F,T as d}from"./BufferView-BF16IC7d.js";import{f as I,l as $,e as k}from"./vec3-BxdF4rWT.js";import{n as K}from"./vec4-BYv3bz8L.js";const mr="Projection may be possible after calling projection.load().";function pr(r,o,t,a){r.error(`Failed to project from (wkid:${o.wkid}) to (wkid:${t.wkid}).${a?" ":""}${a}`)}function Tr(r,o,t,a,e){return O(A.TO_PCPF,F.fromTypedArray(r),u.NORMAL,d.fromTypedArray(o),d.fromTypedArray(t),a,F.fromTypedArray(e))?e:null}function Pr(r,o,t,a,e){return O(A.FROM_PCPF,F.fromTypedArray(r),u.NORMAL,d.fromTypedArray(o),d.fromTypedArray(t),a,F.fromTypedArray(e))?e:null}function yr(r,o,t){return M(r,o,0,t,C(o),0,r.length/3)?t:null}function Ar(r,o,t){return M(r,C(t),0,o,t,0,r.length/3)?o:null}function Fr(r,o,t){return _(f,t),I(o,r,f),j(f)&&$(o,o),o}function dr(r,o,t){return S(f,t),K(o,r,f),j(f)&&$(o,o,4),o}function Nr(r,o,t,a){const e=o===u.NORMAL;return w(r,o,t,(s,l)=>{const n=Math.cos(J(s));l[0]=e?n:1/n,l[1]=1},a)}function gr(r,o,t,a){const e=o===u.NORMAL;return w(r,o,t,(s,l)=>{const n=Math.cosh(-s/z.radius);l[0]=1,l[1]=e?n:1/n},a)}function w(r,o,t,a,e){const s=o===u.NORMAL?3:4,l=[0,0];for(let n=0,m=1;n<r.length;n+=s,m+=3){a(t[m],l);const i=r[n]*l[0],p=r[n+1]*l[1],c=r[n+2],P=1/Math.sqrt(i*i+p*p+c*c);e[n]=i*P,e[n+1]=p*P,e[n+2]=c*P,s===4&&(e[n+3]=r[n+3])}return e}function Mr(r,o,t,a,e){if(!O(A.TO_PCPF,F.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),u.TANGENT,d.fromTypedArray(o),d.fromTypedArray(t),a,F.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT)))return null;for(let s=3;s<r.length;s+=4)e[s]=r[s];return e}function Cr(r,o,t,a,e){if(!O(A.FROM_PCPF,F.fromTypedArray(r,16),u.TANGENT,d.fromTypedArray(o),d.fromTypedArray(t),a,F.fromTypedArray(e,16)))return null;for(let s=3;s<r.length;s+=4)e[s]=r[s];return e}var u,A;function E(r,o,t,a,e){switch(V(a,t,y,a),r===A.FROM_PCPF&&q(y,y),o){case u.NORMAL:return _(e,y);case u.TANGENT:return S(e,y)}}function O(r,o,t,a,e,s,l){if(!o)return;const n=a.count,m=C(s);if(tr(s))for(let i=0;i<n;i++)e.getVec(i,g),o.getVec(i,T),h(T,T,E(r,t,g,m,f)),l.setVec(i,T);else for(let i=0;i<n;i++){e.getVec(i,g),o.getVec(i,T);const p=x(a.get(i,1));let c=Math.cos(p);t===u.TANGENT!=(r===A.TO_PCPF)&&(c=1/c),E(r,t,g,m,f),r===A.TO_PCPF?(f[0]*=c,f[1]*=c,f[2]*=c,f[3]*=c,f[4]*=c,f[5]*=c):(f[0]*=c,f[3]*=c,f[6]*=c,f[1]*=c,f[4]*=c,f[7]*=c),h(T,T,f),v(T,T),l.setVec(i,T)}return l}function Or(r){return r.vertexSpace.type==="local"?rr(r):or(r)}function rr({vertexSpace:r,transform:o,inSpatialReference:t,outSpatialReference:a,localMode:e,outPositions:s,positions:l}){const n=r.origin??R,m=r.origin!=null?(o==null?void 0:o.localMatrix)??N:N,i=C(t),p=a.isWebMercator&&e||!W(t,i)?t:i;V(t,n,y,p),b(y,y,m);const c=s??G(l.length);return k(c,l,y),M(c,p,0,c,a,0,c.length/3),c}function or({vertexSpace:r,transform:o,outPositions:t,positions:a,inSpatialReference:e,outSpatialReference:s}){const l=r.origin!=null?(o==null?void 0:o.localMatrix)??N:N,n=t??G(a.length);Y(l,N)?H(n,a):k(n,a,l);const m=r.origin??R;if(!B(m,R)){const[i,p,c]=m;for(let P=0;P<n.length;P+=3)n[P]+=i,n[P+1]+=p,n[P+2]+=c}return M(n,e,0,n,s,0,n.length/3)?n:null}function tr(r){return r.isWGS84||Q(r)||U(r)||Z(r)}(function(r){r[r.NORMAL=0]="NORMAL",r[r.TANGENT=1]="TANGENT"})(u||(u={})),function(r){r[r.TO_PCPF=0]="TO_PCPF",r[r.FROM_PCPF=1]="FROM_PCPF"}(A||(A={}));const g=L(),T=L(),y=D(),f=X();export{u as VectorType,mr as loadProjectErrorMessage,pr as logProjectionError,Or as project,Ar as projectFromPCPF,Pr as projectNormalFromPCPF,Tr as projectNormalToPCPF,Cr as projectTangentFromPCPF,Mr as projectTangentToPCPF,yr as projectToPCPF,Fr as transformNormal,dr as transformTangent,Nr as transformVectorENUPlateCarree,gr as transformVectorWMPlateCarree};
