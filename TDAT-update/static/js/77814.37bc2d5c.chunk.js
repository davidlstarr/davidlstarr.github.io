"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[77814],{77814:(e,t,a)=>{a.r(t),a.d(t,{handleValidateNetworkTopologyResult:()=>l,submitValidateNetworkTopologyJob:()=>n,validateNetworkTopology:()=>r});var i=a(3825),s=a(50076),d=a(54994),o=a(11187);async function r(e,t,a){const s=(0,d.Dl)(e),r=t.toJSON();t.validationSet&&(r.validationSet=JSON.stringify(t.validationSet));const n={...r,returnEdits:!0,f:"json"},u=(0,d.lF)({...s.query,...n}),c=(0,d.jV)(u,{...a,method:"post"}),k=`${s.path}/validateNetworkTopology`,{data:p}=await(0,i.default)(k,c);return o.A.fromJSON(l(p))}async function n(e,t,a){if(!t.gdbVersion)throw new s.A("submit-validate-network-topology-job:missing-gdb-version","version is missing");const o=(0,d.Dl)(e),r=t.toJSON();t.validationSet&&(r.validationSet=JSON.stringify(t.validationSet));const n=(0,d.jV)(o.query,{query:(0,d.lF)({...r,returnEdits:!0,async:!0,f:"json"}),...a,method:"post"}),l=`${o.path}/validateNetworkTopology`,{data:u}=await(0,i.default)(l,n);return u?u.statusUrl:null}function l(e){return e.serviceEdits&&(e.serviceEdits=e.serviceEdits.map((e=>(e.editedFeatures.spatialReference&&(e.editedFeatures.spatialReference={wkid:e.editedFeatures.spatialReference.wkid,wkt:e.editedFeatures.spatialReference.wkt,wkt2:e.editedFeatures.spatialReference.wkt2,latestWkid:e.editedFeatures.spatialReference.latestWkid,latestVcsWkid:e.editedFeatures.spatialReference.latestVcsWkid,vcsWkid:e.editedFeatures.spatialReference.vcsWkid}),{layerId:e.id,editedFeatures:e.editedFeatures})))),e}}}]);
//# sourceMappingURL=77814.37bc2d5c.chunk.js.map