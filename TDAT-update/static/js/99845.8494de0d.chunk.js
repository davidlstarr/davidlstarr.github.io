"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[99845],{45652:(e,t,s)=>{s.d(t,{$1:()=>c,H2:()=>f,MT:()=>m,VP:()=>h,WF:()=>u,Wt:()=>a,XQ:()=>g,hK:()=>d,nS:()=>p,uh:()=>i,xY:()=>l});var o=s(50076);const r="upload-assets",n=()=>new Error;class a extends o.A{constructor(){super(`${r}:unsupported`,"Layer does not support asset uploads.",n())}}class i extends o.A{constructor(){super(`${r}:no-glb-support`,"Layer does not support glb.",n())}}class l extends o.A{constructor(){super(`${r}:no-supported-source`,"No supported external source found",n())}}class c extends o.A{constructor(){super(`${r}:not-base-64`,"Expected gltf data in base64 format after conversion.",n())}}class u extends o.A{constructor(){super(`${r}:unable-to-prepare-options`,"Unable to prepare uploadAsset request options.",n())}}class p extends o.A{constructor(e,t){super(`${r}:bad-response`,`Bad response. Uploaded ${e} items and received ${t} results.`,n())}}class d extends o.A{constructor(e,t){super(`${r}-layer:upload-failed`,`Failed to upload mesh file ${e}. Error code: ${t?.code??"-1"}. Error message: ${t?.messages??"unknown"}`,n())}}class f extends o.A{constructor(e){super(`${r}-layer:unsupported-format`,`The service allowed us to upload an asset of FormatID ${e}, but it does not list it in its supported formats.`,n())}}class m extends o.A{constructor(){super(`${r}:convert3D-failed`,"convert3D failed.")}}class h extends o.A{constructor(){super("invalid-input:no-model","No supported model found")}}class g extends o.A{constructor(){super("invalid-input:multiple-models","Multiple supported models found")}}},99845:(e,t,s)=>{s.d(t,{uploadAssets:()=>k});s(35238);var o=s(3825),r=s(81806),n=s(76460),a=s(50346),i=s(91417),l=s(90534),c=s(49723),u=s(57045),p=s(45652);const d={upload:{createFromFiles:.8,loadMesh:.2},uploadAssetBlobs:{prepareAssetItems:.9,uploadAssetItems:.1},uploadConvertibleSource:{uploadEditSource:.5,serviceAssetsToGlb:.5},uploadLocalMesh:{meshToAssetBlob:.5,uploadAssetBlobs:.5}};var f=s(13096),m=s(54901),h=s(87663);function g(e){return new w(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>{},arguments.length>2?arguments[2]:void 0)}class w{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>{},s=arguments.length>2?arguments[2]:void 0;if(this.onProgress=t,this.taskName=s,this._progressMap=new Map,this._startTime=void 0,this._timingsMap=new Map,"number"==typeof e){this._weights={};for(let t=0;t<e;t++){const s=t,o=1/e;this._weights[s]=o,this._progressMap.set(s,0)}}else this._weights=e;this.emitProgress()}emitProgress(){let e=0;for(const[t,s]of this._progressMap.entries())e+=s*this._weights[t];if(1===e&&(0,r.A)("enable-feature:esri-3dofl-upload-timings")){const e=Math.round(performance.now()-(this._startTime??0))/1e3;console.log(`${this.taskName} done in ${e} sec`);for(const[t,s]of this._timingsMap){const o=Math.round(s.end-s.start)/1e3,r=Math.round(o/e*100);console.log(this.taskName??"Task",{stepKey:t,stepTime:o,relativeTime:r})}}this.onProgress(e)}setProgress(e,t){if(this._progressMap.set(e,t),(0,r.A)("enable-feature:esri-3dofl-upload-timings")){const s=performance.now();this._startTime??=s;const o=(0,h.tE)(this._timingsMap,e,(()=>({start:s,end:0})));1===t&&(o.end=s)}this.emitProgress()}simulate(e,t){return y((t=>this.setProgress(e,t)),t)}makeOnProgress(e){return t=>this.setProgress(e,t)}}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e=>{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x;const s=performance.now();e(0);const o=setInterval((()=>{const o=performance.now()-s,r=1-Math.exp(-o/t);e(r)}),T);return(0,m.hA)((()=>{clearInterval(o),e(1)}))}function A(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b;return(0,i.gr)((0,i.Kp)(e*P/t))}const b=10,v=10,P=8e-6,T=(0,i.l5)(50),x=(0,i.l5)(1e3),I=1e6,j=20*I,F=2e9,$=3;async function D(e,t,s){let{data:r,name:n,description:i}=e,c=null;try{const e=(0,l.fj)(t,"uploads"),p=(0,l.fj)(e,"info"),{data:d}=await(0,o.default)(p,{query:{f:"json"},responseType:"json"});(0,a.throwIfAborted)(s);const m=(0,f.Wo)(t),h=d.maxUploadFileSize*I,w=m?F:h,y=m?Math.min(j,h):j;if(r.size>w)throw new Error("Data too large");const b=(0,l.fj)(e,"register"),{data:v}=await(0,o.default)(b,{query:{f:"json",itemName:(u=n,u.replaceAll("/","_").replaceAll("\\","_")),description:i},responseType:"json",method:"post"});if((0,a.throwIfAborted)(s),!v.success)throw new Error("Registration failed");const{itemID:P}=v.item;c=(0,l.fj)(e,P);const T=(0,l.fj)(c,"uploadPart"),x=Math.ceil(r.size/y),D=new Array;for(let t=0;t<x;++t)D.push(r.slice(t*y,Math.min((t+1)*y,r.size)));const M=D.slice().reverse(),N=new Array,E=g(x,s?.onProgress,"uploadItem"),S=async()=>{for(;0!==M.length;){const e=D.length-M.length,t=M.pop(),r=new FormData,n=E.simulate(e,A(t.size));try{r.append("f","json"),r.append("file",t),r.append("partId",`${e}`);const{data:n}=await(0,o.default)(T,{timeout:0,body:r,responseType:"json",method:"post"});if((0,a.throwIfAborted)(s),!n.success)throw new Error("Part upload failed")}finally{n.remove()}}};for(let t=0;t<$&&0!==M.length;++t)N.push(S());await Promise.all(N);const k=(0,l.fj)(c,"commit"),{data:_}=await(0,o.default)(k,{query:{f:"json",parts:D.map(((e,t)=>t)).join(",")},responseType:"json",method:"post"});if((0,a.throwIfAborted)(s),!_.success)throw new Error("Commit failed");return _.item}catch(p){if(null!=c){const e=(0,l.fj)(c,"delete");await(0,o.default)(e,{query:{f:"json"},responseType:"json",method:"post"})}throw p}var u}var M=s(19463),N=s(66776),E=s(74159),S=s(13312);async function k(e,t,s){const o=e.length;if(!o)return s?.onProgress?.(1),[];const n=g(o,s?.onProgress,"uploadAssets");return Promise.all(e.map(((e,o)=>async function(e,t,s){let{layer:o,ongoingUploads:n}=t;const f=n.get(e);if(f)return f;if(!function(e){return!!e.infoFor3D&&!!e.url}(o))throw new p.Wt;if(function(e,t){const{parsedUrl:s}=t;return null!=s&&e.metadata.externalSources.some((e=>(0,u.eN)(e,s)))}(e,o))return s?.onProgress?.(1),e;const m=async function(e,t,s){const{metadata:o}=e,{displaySource:n}=o,f=_(n?.source,t,{checkForConversionRequired:(0,r.A)("enable-feature:georeferenced-uploads")}),m=null!=f?async function(e,t,s){return{source:await C(e,t,s),original:!0,unitConversionDisabled:!0}}(f,t,s):o.externalSources.length>0?async function(e,t,s){const o=q(t),{externalSources:n}=e.metadata,a=function(e,t){for(const s of e){const e=_(s.source,t);if(e)return e}return null}(n,t);if(!a)throw new p.xY;const c=g(d.uploadConvertibleSource,s?.onProgress,"uploadConvertibleSource"),f=await C(a,t,{onProgress:c.makeOnProgress("uploadEditSource")});e.addExternalSources([{source:f,original:!0}]);const m=a.reduce(((e,t)=>{let{asset:s}=t;return s instanceof File?e+s.size:e}),0),h=c.simulate("serviceAssetsToGlb",function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v;return(0,i.gr)((0,i.Kp)(e*P/t))}(m));try{const{source:n,transform:a,origin:i}=await async function(e,t,s){const o=e.map((e=>{let{assetName:t,parts:s}=e;return{assetName:t,assetHash:s[0].partHash}}));let n;try{const e=(0,l.fj)(t.parsedUrl.path,"convert3D"),r=t.capabilities?.operations.supportsAsyncConvert3D;n=(await(r?Z:Y)(e,{query:{f:"json",assets:JSON.stringify(o),transportType:"esriTransportTypeUrl",targetFormat:s,async:r},responseType:"json",timeout:0})).data}catch(a){throw new p.MT}return function(e,t){const s={source:t.assets.map((t=>{const s=(0,M.R_)(t.contentType,e.infoFor3D.supportedFormats);if(!s)throw new p.H2(s);return new u.Qp(t.assetName,t.contentType,[new u.Bq(t.assetURL,t.assetHash)])})),origin:void 0,transform:void 0};if((0,r.A)("enable-feature:georeferenced-uploads")&&t.transform){if(s.transform=(0,E.f)(t.transform),t.spatialReference){const e=S.A.fromJSON(t.spatialReference);s.origin=(0,E.V)(t.transform,e)}}else s.transform=(0,N.Z)(e.spatialReference);return s}(t,n)}(f,t,o);return e.transform=a,i&&(e.metadata.georeferenced=!0,s?.useAssetOrigin&&(e.vertexSpace.origin=[i.x,i.y,i.z??0],e.spatialReference=i.spatialReference)),{source:n,unitConversionDisabled:!0}}finally{h.remove()}}(e,t,s):async function(e,t,s){const o=g(d.uploadLocalMesh,s?.onProgress,"uploadLocalMesh"),r=async function(e,t,s){const o=q(t),r=await e.load(s),n=await r.toBinaryGLTF({origin:r.origin,signal:s?.signal,ignoreLocalTransform:!0,unitConversionDisabled:!0});return(0,a.throwIfAborted)(s),{blob:new Blob([n],{type:"model/gltf-binary"}),assetName:`${(0,c.yS)()}.glb`,assetType:o}}(e,t,{...s,onProgress:o.makeOnProgress("meshToAssetBlob")});return{source:await U([r],t,{...s,onProgress:o.makeOnProgress("uploadAssetBlobs")}),extent:e.extent.clone(),original:!0}}(e,t,s),h=await m;return(0,a.throwIfAborted)(s),e.addExternalSources([h]),e}(e,o,s);n.set(e,m);try{await m}finally{n.delete(e)}return e}(e,t,{...s,onProgress:n.makeOnProgress(o)}))))}function _(e,t){let{infoFor3D:s}=t,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e)return null;const{supportedFormats:r,editFormats:n}=s,a=(0,u.WN)(e),i=new Array,l=(0,M.ND)(s),c=(0,M.nr)(s);let p=!1;for(const u of a){const e=R(u,r);if(!e)return null;const{assetType:t}=e;if(o.checkForConversionRequired&&(t===l||t===c))return null;n.includes(t)&&(p=!0),i.push(e)}return p?i:null}function R(e,t){const s=(0,u.fH)(e,t);return s?{asset:e,assetType:s}:null}async function C(e,t,s){return U(e.map((e=>async function(e,t){const{asset:s,assetType:o}=e;if(s instanceof File)return{blob:s,assetName:s.name,assetType:o};const r=await s.toBlob(t);return(0,a.throwIfAborted)(t),{blob:r,assetName:s.assetName,assetType:o}}(e,s))),t,s)}async function U(e,t,s){const o=g(d.uploadAssetBlobs,s?.onProgress,"uploadAssetBlobs"),r=await function(e,t,s){const o=g(e.length,s?.onProgress,"prepareAssetItems");return Promise.all(e.map((async(e,r)=>{const i=async function(e,t,s){const{blob:o,assetType:r,assetName:i}=e;let c=null;try{const e=await D({data:o,name:i},t.url,s);(0,a.throwIfAborted)(s),c={assetType:r,assetUploadId:e.itemID}}catch(x){(0,a.throwIfAbortError)(x),n.A.getLogger("esri.layers.graphics.sources.support.uploadAssets").warnOnce(`Service ${t.url} does not support the REST Uploads API.`)}if(!c){const e=await(0,l._0)(o);if((0,a.throwIfAborted)(s),!e.isBase64)throw new p.$1;c={assetType:r,assetData:e.data}}if(!c)throw new p.WF;return{item:c,assetName:i}}(await e,t,{...s,onProgress:o.makeOnProgress(r)});return(0,a.throwIfAborted)(s),i})))}(e,t,{...s,onProgress:o.makeOnProgress("prepareAssetItems")});(0,a.throwIfAborted)(s);const i=r.map((e=>{let{item:t}=e;return t})),{uploadResults:c}=await B(i,t,{...s,onProgress:o.makeOnProgress("uploadAssetItems")});return(0,a.throwIfAborted)(s),e.map(((e,s)=>function(e,t,s){const{success:o}=t;if(!o){const{error:s}=t;throw new p.hK(e.assetName,s)}const{assetHash:r}=t,{assetName:n,item:{assetType:a}}=e,{infoFor3D:{supportedFormats:i}}=s,l=(0,M.Fm)(a,i);if(!l)throw new p.H2(a);return new u.Qp(n,l,[new u.Bq(`${s.parsedUrl.path}/assets/${r}`,r)])}(r[s],c[s],t)))}async function B(e,t,s){const r=y(s?.onProgress);try{const r=await(0,o.default)((0,l.fj)(t.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(e)},method:"post",responseType:"json"});if((0,a.throwIfAborted)(s),r.data.uploadResults.length!==e.length)throw new p.nS(e.length,r.data.uploadResults.length);return r.data}finally{r.remove()}}function Y(e,t){return(0,o.default)(e,t)}async function Z(e,t){const s=(await(0,o.default)(e,t)).data.statusUrl;for(;;){const e=(await(0,o.default)(s,{query:{f:"json"},responseType:"json"})).data;switch(e.status){case"Completed":return(0,o.default)(e.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new Error(e.status);case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new Error}await(0,a.after)(O)}}function q(e){let{infoFor3D:t}=e;const s=(0,M.U9)(t);if(!s)throw new p.uh;return s}const O=(0,i.l5)(1e3)},66776:(e,t,s)=>{s.d(t,{Z:()=>n});var o=s(31633),r=s(32186);function n(e){const t=1/(0,o.GA)(e,1);return 1!==t?new r.A({scale:[t,t,t]}):void 0}},74159:(e,t,s)=>{s.d(t,{V:()=>n,f:()=>a});s(35238);var o=s(32186),r=s(19247);function n(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i;return new r.A({x:e[s.originX],y:e[s.originY],z:e[s.originZ],spatialReference:t})}function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;return new o.A({translation:[e[t.translationX],-e[t.translationZ],e[t.translationY]],rotationAxis:[e[t.rotationX],-e[t.rotationZ],e[t.rotationY]],rotationAngle:e[t.rotationDeg],scale:[e[t.scaleX],e[t.scaleZ],e[t.scaleY]]})}const i={originX:"originX",originY:"originY",originZ:"originZ",translationX:"translationX",translationY:"translationY",translationZ:"translationZ",scaleX:"scaleX",scaleY:"scaleY",scaleZ:"scaleZ",rotationX:"rotationX",rotationY:"rotationY",rotationZ:"rotationZ",rotationDeg:"rotationDeg"}}}]);
//# sourceMappingURL=99845.8494de0d.chunk.js.map