function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./objectResourceUtils-DZ8k2dVl.js","./index-CN4ACLGJ.js","./index-D6NxmjlF.css","./mat3f64-q3fE-ZOt.js","./mat4f64-CSKppSlJ.js","./BufferView-BF16IC7d.js","./vec3-BxdF4rWT.js","./vec4-BYv3bz8L.js","./DefaultMaterial_COLOR_GAMMA-DGR8IAIe.js","./enums-BlUEVwJR.js","./quat-CBGTtom4.js","./quatf64-Bdb9ZJJK.js","./resourceUtils-4YGML2s-.js","./basicInterfaces-DngWxyLO.js","./Indices-5JEAyDDe.js","./NestedMap-DgiGbX8E.js","./requestImageUtils-Wbdw_g6D.js","./orientedBoundingBox-D0BaDOv4.js","./spatialReferenceEllipsoidUtils-m81BWRKb.js","./computeTranslationToOriginAndRotation-BHX3BSCU.js","./plane-CJg8_CbK.js","./Util-BwG3tAg0.js","./sphere-Dbil9LIG.js","./lineSegment-DQICWKSq.js","./VertexAttribute-BlT9lbVY.js","./Texture-Bfi7Qxg7.js","./InterleavedLayout-BQUYdfua.js","./types-D0PSWh4d.js","./NormalAttribute.glsl-CJlRS7TO.js","./interfaces-B8ge7Jg9.js","./renderState-C37QfRey.js","./BindType-BmZEZMMh.js","./doublePrecisionUtils-B0owpBza.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{dG as v,s,P as y,_ as p,dH as l,b8 as b,dI as w,ci as f}from"./index-CN4ACLGJ.js";let a=m();function m(){return new v(50)}function T(){a=m()}async function x(e,r){var o,t;if((o=e.resource)!=null&&o.href)return _(e.resource.href).then(n=>[n.width,n.height]);if((t=e.resource)!=null&&t.primitive)return r!=null?[r,r]:[256,256];throw new s("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function _(e){return y(e,{responseType:"image"}).then(r=>r.data)}async function B(e,r=null){var t,n;if(!e.isPrimitive){const i=(t=e.resource)==null?void 0:t.href;if(!i)throw new s("symbol:invalid-resource","The symbol does not have a valid resource");const u=a.get(i);if(u!==void 0)return u;const{fetch:h}=await p(()=>import("./objectResourceUtils-DZ8k2dVl.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]),import.meta.url),d=await h(i,{disableTextures:!0}),c=l(d.referenceBoundingBox,f());return a.put(i,c),c}if(!((n=e.resource)!=null&&n.primitive))throw new s("symbol:invalid-resource","The symbol does not have a valid resource");const o=b(w(e.resource.primitive));if(r!=null)for(let i=0;i<o.length;i++)o[i]*=r;return l(o,f())}export{T as clearBoundingBoxCache,x as computeIconLayerResourceSize,B as computeObjectLayerResourceSize};
