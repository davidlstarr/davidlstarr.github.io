"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[3196],{37546:(e,t,o)=>{o.d(t,{P:()=>y});var r=o(50076),n=o(53514),i=o(24387),s=o(90534),a=o(49723),p=o(19258),l=o(49140),u=o(46053),c=o(95474),d=o(79453);function y(e){const t=e?.origins??[void 0];return(o,r)=>{const n=function(e,t,o){if("resource"===e?.type)return function(e,t,o){const r=(0,p.z4)(t,o);return{type:String,read:(e,t,o)=>{const n=(0,d.r)(e,t,o);return r.type===String?n:"function"==typeof r.type?new r.type({url:n}):void 0},write:{writer(t,n,a,p){if(!p?.resources)return"string"==typeof t?void(n[a]=(0,d.t)(t,p)):void(n[a]=t.write({},p));const u=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),y=(0,d.t)(u,{...p,verifyItemRelativeUrls:p?.verifyItemRelativeUrls?{writtenUrls:p.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},d.M.NO),v=r.type!==String&&(!(0,i.H)(this)||p?.origin&&this.originIdOf(o)>(0,l.aB)(p.origin)),g={object:this,propertyName:o,value:t,targetUrl:y,dest:n,targetPropertyName:a,context:p,params:e};p?.portalItem&&y&&!(0,s.oP)(y)?v&&e?.contentAddressed?f(g):v?function(e){const{context:t,targetUrl:o,params:r,value:n,dest:i,targetPropertyName:a}=e;if(!t.portalItem)return;const p=t.portalItem.resourceFromPath(o),l=h(n,o,t),u=(0,c.n)(l),d=(0,s.Zo)(p.path),y=r?.compress??!1;u===d?(t.resources&&m({...e,resource:p,content:l,compress:y,updates:t.resources.toUpdate}),i[a]=o):f(e)}(g):function(e){let{context:t,targetUrl:o,dest:r,targetPropertyName:n}=e;t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(o),compress:!1}),r[n]=o)}(g):p?.portalItem&&(null==y||null!=(0,d.i)(y)||(0,s.w8)(y)||v)?f(g):n[a]=y}}}}(e,t,o);switch(e?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=d.b;return{read:e,write:t}}}}(e,o,r);for(const e of t){const t=(0,u.rM)(o,e,r);for(const e in n)t[e]=n[e]}}}function f(e){const{targetUrl:t,params:o,value:i,context:p,dest:l,targetPropertyName:u}=e;if(!p.portalItem)return;const y=(0,d.p)(t),f=h(i,t,p);if(o?.contentAddressed&&"json"!==f.type)return void p.messages?.push(new r.A("persistable:contentAddressingUnsupported",`Property "${u}" is trying to serializing a resource with content of type ${f.type} with content addressing. Content addressing is only supported for json resources.`,{content:f}));const v=o?.contentAddressed&&"json"===f.type?(0,n.d)(f.jsonString):y?.filename??(0,a.lk)(),g=(0,s.fj)(o?.prefix??y?.prefix,v),_=`${g}.${(0,c.n)(f)}`;if(o?.contentAddressed&&p.resources&&"json"===f.type){const e=p.resources.toKeep.find((e=>{let{resource:t}=e;return t.path===_}))??p.resources.toAdd.find((e=>{let{resource:t}=e;return t.path===_}));if(e)return void(l[u]=e.resource.itemRelativeUrl)}const S=p.portalItem.resourceFromPath(_);(0,s.w8)(t)&&p.resources&&p.resources.pendingOperations.push((0,s.tk)(t).then((e=>{S.path=`${g}.${(0,c.n)({type:"blob",blob:e})}`,l[u]=S.itemRelativeUrl})).catch((()=>{})));const b=o?.compress??!1;p.resources&&m({...e,resource:S,content:f,compress:b,updates:p.resources.toAdd}),l[u]=S.itemRelativeUrl}function m(e){let{object:t,propertyName:o,updates:r,resource:n,content:i,compress:s}=e;r.push({resource:n,content:i,compress:s,finish:e=>{!function(e,t,o){"string"==typeof e[t]?e[t]=o.url:e[t].url=o.url}(t,o,e)}})}function h(e,t,o){return"string"==typeof e?{type:"url",url:t}:{type:"json",jsonString:JSON.stringify(e.toJSON(o))}}},3196:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Y});var r,n=o(35143),i=o(50076),s=o(76460),a=o(77717),p=o(50346),l=o(68134),u=o(46053),c=(o(81806),o(47249),o(28379)),d=o(85842),y=o(37546),f=o(25515),m=o(12406),h=o(19502),v=o(31362),g=o(11270),_=o(94729),S=o(5682),b=o(90260),M=o(95363),x=o(2395),I=o(3825),w=o(94643),Z=o(42553),T=o(90534),P=(o(35238),o(53084)),N=o(62754),A=o(17707),j=o(26346),R=o(65215);let U=r=class extends Z.oY{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,o,r){if(r.layer?.spatialReference&&!r.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,j.canProjectWithoutEngine)(e.spatialReference,r.layer.spatialReference))return void(r?.messages&&r.messages.push(new N.A("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:r.layer.spatialReference,context:r})));const n=new R.A;(0,j.projectPolygon)(e,n,r.layer.spatialReference),t[o]=n.toJSON(r)}else t[o]=e.toJSON(r);delete t[o].spatialReference}clone(){return new r({geometry:(0,P.o8)(this.geometry),type:this.type})}};(0,n._)([(0,u.MZ)({type:R.A}),(0,y.P)()],U.prototype,"geometry",void 0),(0,n._)([(0,A.K)(["web-scene","portal-item"],"geometry")],U.prototype,"writeGeometry",null),(0,n._)([(0,u.MZ)({type:["clip","mask","replace"],nonNullable:!0}),(0,y.P)()],U.prototype,"type",void 0),U=r=(0,n._)([(0,d.$)("esri.layers.support.SceneModification")],U);const L=U;var $;let O=$=class extends((0,Z.Te)(w.A.ofType(L))){constructor(e){super(e),this.url=null}clone(){return new $({url:this.url,items:this.items.map((e=>e.clone()))})}toJSON(e){return this.toArray().map((t=>t.toJSON(e))).filter((e=>!!e.geometry))}static fromJSON(e,t){const o=new $;for(const r of e)o.add(L.fromJSON(r,t));return o}static async fromUrl(e,t,o){const r={url:(0,T.An)(e),origin:"service"},n=await(0,I.default)(e,{responseType:"json",signal:o?.signal}),i=t.toJSON(),s=[];for(const a of n.data)s.push(L.fromJSON({...a,geometry:{...a.geometry,spatialReference:i}},r));return new $({url:e,items:s})}};(0,n._)([(0,u.MZ)({type:String})],O.prototype,"url",void 0),O=$=(0,n._)([(0,d.$)("esri.layers.support.SceneModifications")],O);const D=O;var F=o(12482),E=o(79453);let k=class extends((0,b.w6)((0,h.b)((0,g.q)((0,_.A)((0,S.j)((0,a.P)((0,v.d)((0,m.p)(f.A))))))))){constructor(){super(...arguments),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null,this.definitionExpression=null}initialize(){this.addHandles((0,l.on)((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),l.sync))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,o){this._modificationsSource={url:(0,E.f)(e,o),context:o}}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=e?.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(o){(0,p.throwIfAbortError)(o)}if(await this._fetchService(t),null!=this._modificationsSource){const t=await D.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(null!=this._modificationsSource)return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(b.Xh.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(b.Xh.SAVE,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new i.A("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new i.A("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new i.A("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh layers";(0,F.XF)(s.A.getLogger(this),(0,F.B)(t,"absolute-height",e)),(0,F.XF)(s.A.getLogger(this),(0,F.tW)(t,e))}};(0,n._)([(0,u.MZ)({type:String,readOnly:!0})],k.prototype,"geometryType",void 0),(0,n._)([(0,u.MZ)({type:["show","hide"]})],k.prototype,"listMode",void 0),(0,n._)([(0,u.MZ)({type:["IntegratedMeshLayer"]})],k.prototype,"operationalLayerType",void 0),(0,n._)([(0,u.MZ)({json:{read:!1},readOnly:!0})],k.prototype,"type",void 0),(0,n._)([(0,u.MZ)({type:x.W4,readOnly:!0})],k.prototype,"nodePages",void 0),(0,n._)([(0,u.MZ)({type:[x.uV],readOnly:!0})],k.prototype,"materialDefinitions",void 0),(0,n._)([(0,u.MZ)({type:[x.Ot],readOnly:!0})],k.prototype,"textureSetDefinitions",void 0),(0,n._)([(0,u.MZ)({type:[x.L0],readOnly:!0})],k.prototype,"geometryDefinitions",void 0),(0,n._)([(0,u.MZ)({readOnly:!0})],k.prototype,"serviceUpdateTimeStamp",void 0),(0,n._)([(0,u.MZ)({type:D}),(0,y.P)({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],k.prototype,"modifications",void 0),(0,n._)([(0,c.w)(["web-scene","portal-item"],"modifications")],k.prototype,"readModifications",null),(0,n._)([(0,u.MZ)(M.Yj)],k.prototype,"elevationInfo",null),(0,n._)([(0,u.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],k.prototype,"path",void 0),k=(0,n._)([(0,d.$)("esri.layers.IntegratedMeshLayer")],k);const Y=k},2395:(e,t,o)=>{o.d(t,{L0:()=>v,Ot:()=>y,W4:()=>p,uV:()=>c});var r=o(35143),n=o(42553),i=o(46053),s=(o(81806),o(76460),o(47249),o(6409)),a=o(85842);let p=class extends n.oY{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,r._)([(0,i.MZ)({type:Number})],p.prototype,"nodesPerPage",void 0),(0,r._)([(0,i.MZ)({type:Number})],p.prototype,"rootIndex",void 0),(0,r._)([(0,i.MZ)({type:String})],p.prototype,"lodSelectionMetricType",void 0),p=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SNodePageDefinition")],p);let l=class extends n.oY{constructor(){super(...arguments),this.factor=1}};(0,r._)([(0,i.MZ)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],l.prototype,"id",void 0),(0,r._)([(0,i.MZ)({type:Number})],l.prototype,"factor",void 0),l=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialTexture")],l);let u=class extends n.oY{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,r._)([(0,i.MZ)({type:[Number]})],u.prototype,"baseColorFactor",void 0),(0,r._)([(0,i.MZ)({type:l})],u.prototype,"baseColorTexture",void 0),(0,r._)([(0,i.MZ)({type:l})],u.prototype,"metallicRoughnessTexture",void 0),(0,r._)([(0,i.MZ)({type:Number})],u.prototype,"metallicFactor",void 0),(0,r._)([(0,i.MZ)({type:Number})],u.prototype,"roughnessFactor",void 0),u=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialPBRMetallicRoughness")],u);let c=class extends n.oY{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,r._)([(0,s.e)({opaque:"opaque",mask:"mask",blend:"blend"})],c.prototype,"alphaMode",void 0),(0,r._)([(0,i.MZ)({type:Number})],c.prototype,"alphaCutoff",void 0),(0,r._)([(0,i.MZ)({type:Boolean})],c.prototype,"doubleSided",void 0),(0,r._)([(0,s.e)({none:"none",back:"back",front:"front"})],c.prototype,"cullFace",void 0),(0,r._)([(0,i.MZ)({type:l})],c.prototype,"normalTexture",void 0),(0,r._)([(0,i.MZ)({type:l})],c.prototype,"occlusionTexture",void 0),(0,r._)([(0,i.MZ)({type:l})],c.prototype,"emissiveTexture",void 0),(0,r._)([(0,i.MZ)({type:[Number]})],c.prototype,"emissiveFactor",void 0),(0,r._)([(0,i.MZ)({type:u})],c.prototype,"pbrMetallicRoughness",void 0),c=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialDefinition")],c);let d=class extends n.oY{};(0,r._)([(0,i.MZ)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],d.prototype,"name",void 0),(0,r._)([(0,s.e)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],d.prototype,"format",void 0),d=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3STextureFormat")],d);let y=class extends n.oY{constructor(){super(...arguments),this.atlas=!1}};(0,r._)([(0,i.MZ)({type:[d]})],y.prototype,"formats",void 0),(0,r._)([(0,i.MZ)({type:Boolean})],y.prototype,"atlas",void 0),y=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3STextureSetDefinition")],y);let f=class extends n.oY{};(0,r._)([(0,s.e)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],f.prototype,"type",void 0),(0,r._)([(0,i.MZ)({type:Number})],f.prototype,"component",void 0),f=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryAttribute")],f);let m=class extends n.oY{};(0,r._)([(0,s.e)({draco:"draco"})],m.prototype,"encoding",void 0),(0,r._)([(0,i.MZ)({type:[String]})],m.prototype,"attributes",void 0),m=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryCompressedAttributes")],m);let h=class extends n.oY{constructor(){super(...arguments),this.offset=0}};(0,r._)([(0,i.MZ)({type:Number})],h.prototype,"offset",void 0),(0,r._)([(0,i.MZ)({type:f})],h.prototype,"position",void 0),(0,r._)([(0,i.MZ)({type:f})],h.prototype,"normal",void 0),(0,r._)([(0,i.MZ)({type:f})],h.prototype,"uv0",void 0),(0,r._)([(0,i.MZ)({type:f})],h.prototype,"color",void 0),(0,r._)([(0,i.MZ)({type:f})],h.prototype,"uvRegion",void 0),(0,r._)([(0,i.MZ)({type:f})],h.prototype,"featureId",void 0),(0,r._)([(0,i.MZ)({type:f})],h.prototype,"faceRange",void 0),(0,r._)([(0,i.MZ)({type:m})],h.prototype,"compressedAttributes",void 0),h=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryBuffer")],h);let v=class extends n.oY{};(0,r._)([(0,s.e)({triangle:"triangle"})],v.prototype,"topology",void 0),(0,r._)([(0,i.MZ)()],v.prototype,"geometryBuffers",void 0),v=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryDefinition")],v)},95474:(e,t,o)=>{o.d(t,{n:()=>n});var r=o(90534);function n(e){return i[function(e){return"json"===e.type?"application/json":"blob"===e.type?e.blob.type:function(e){const t=(0,r.Zo)(e);return p[t]||s}(e.url)}(e)]||a}const i={},s="text/plain",a=i[s],p={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const l in p)i[p[l]]=l},12482:(e,t,o)=>{o.d(t,{$7:()=>g,B:()=>v,Fo:()=>m,M7:()=>b,Q5:()=>h,XF:()=>S,bK:()=>s,bh:()=>l,id:()=>d,ky:()=>p,qt:()=>M,tW:()=>_,w7:()=>a,wS:()=>y,xS:()=>f});var r=o(31633),n=o(59097);function i(e){return e?M:x}function s(e,t){return null!=t?t:i(e)}function a(e,t){return function(e,t){return t?.mode?t.mode:i(e).mode}(null==e||(e.hasZ??!1),t)}function p(e){const t=u(e);return a(e.geometry,t)}function l(e){const t=u(e),o=a(e.geometry,t),r=null!=t&&"on-the-ground"!==o?b(t):0,n=t?.featureExpressionInfo;return{mode:o,offset:r,featureExpressionInfo:n}}function u(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function c(e,t){if(!e?.offset)return 0;const{offset:o,unit:n}=e;if("decimal-degrees"===n)return 0;const i="unknown"!==n&&n?n:"meters",s=(0,r.mq)(t);return s?(0,r.oU)(o,i,s):0}function d(e,t,o){if(!o?.mode)return;const r=e.hasZ?e.z:0,n=c(o,e.spatialReference);switch(o.mode){case"absolute-height":return r-n;case"on-the-ground":return 0;case"relative-to-ground":return r-((t.elevationProvider.getElevation(e.x,e.y,r,e.spatialReference,"ground")??0)+n);case"relative-to-scene":return r-((t.elevationProvider.getElevation(e.x,e.y,r,e.spatialReference,"scene")??0)+n)}}function y(e,t,o){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return m(e,t.x,t.y,t.hasZ?t.z:0,t.spatialReference,o,r)}function f(e,t,o,r){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return m(e,t[0],t[1],t.length>2?t[2]:0,o,r,n)}function m(e,t,o,r,n,i){let s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;if(null==i)return;const a=null!=s?s.mode:"absolute-height";if("on-the-ground"===a)return 0;const{absoluteZ:p}=h(t,o,r,n,e,i);return function(e,t,o,r,n,i,s,a){const p=c(s,n);switch(a){case"absolute-height":return e-p;case"relative-to-ground":return e-((i.elevationProvider.getElevation(t,o,r,n,"ground")??0)+p);case"relative-to-scene":return e-((i.elevationProvider.getElevation(t,o,r,n,"scene")??0)+p)}}(p,t,o,r,n,e,s,a)}function h(e,t,o,r,n,i){const s=c(i,r);switch(i.mode){case"absolute-height":return{absoluteZ:o+s,elevation:0};case"on-the-ground":{const o=n.elevationProvider.getElevation(e,t,0,r,"ground")??0;return{absoluteZ:o,elevation:o}}case"relative-to-ground":{const i=n.elevationProvider.getElevation(e,t,o,r,"ground")??0;return{absoluteZ:o+i+s,elevation:i}}case"relative-to-scene":{const i=n.elevationProvider.getElevation(e,t,o,r,"scene")??0;return{absoluteZ:o+i+s,elevation:i}}}}function v(e,t,o){return o&&o.mode!==t?`${e} only support ${t} elevation mode`:null}function g(e,t,o){return o?.mode===t?`${e} do not support ${t} elevation mode`:null}function _(e,t){return null!=t?.featureExpressionInfo&&"0"!==t.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function S(e,t){t&&e.warn(".elevationInfo=",t)}function b(e){return(e?.offset??0)*(0,n.Ao)(e?.unit)}const M={mode:"absolute-height",offset:0},x={mode:"on-the-ground",offset:null}}}]);
//# sourceMappingURL=3196.0bc64e10.chunk.js.map