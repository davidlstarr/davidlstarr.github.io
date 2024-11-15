"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[2487],{77491:(e,a,t)=>{t.d(a,{v:()=>n});var r=t(67061);class n{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(e,a){const t=this._serviceMetadatas.get(e);if(t)return t;const n=await(0,r.V)(e,a);return this._serviceMetadatas.set(e,n),n}async fetchItemData(e){const{id:a}=e;if(!a)return null;const{_itemDatas:t}=this;if(t.has(a))return t.get(a);const r=await e.fetchData();return t.set(a,r),r}async fetchCustomParameters(e,a){const t=await this.fetchItemData(e);return t&&"object"==typeof t&&(a?a(t):t.customParameters)||null}}},39323:(e,a,t)=>{t.d(a,{L:()=>o});var r=t(55171),n=t(3825),s=t(50076),i=t(50346),c=t(13096),l=t(65308),u=t(70652);async function o(e,a){const t=(0,c.qg)(e);if(!t)throw new s.A("invalid-url","Invalid scene service url");const o={...a,sceneServerUrl:t.url.path,layerId:t.sublayer??void 0};if(o.sceneLayerItem??=await async function(e){const a=(await y(e)).serviceItemId;if(!a)return null;const t=new u.default({id:a,apiKey:e.apiKey}),s=await async function(e){const a=r.id?.findServerInfo(e.sceneServerUrl);if(a?.owningSystemUrl)return a.owningSystemUrl;const t=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const a=(await(0,n.default)(t,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(a)return a}catch(f){(0,i.throwIfAbortError)(f)}return null}(e);null!=s&&(t.portal=new l.default({url:s}));try{return await t.load({signal:e.signal})}catch(m){return(0,i.throwIfAbortError)(m),null}}(o),null==o.sceneLayerItem)return d(o.sceneServerUrl.replace("/SceneServer","/FeatureServer"),o);const f=await async function(e){let{sceneLayerItem:a,signal:t}=e;if(!a)return null;try{const e=(await a.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:t})).find((e=>"Feature Service"===e.type))||null;if(!e)return null;const r=new u.default({portal:e.portal,id:e.id});return await r.load(),r}catch(r){return(0,i.throwIfAbortError)(r),null}}(o);if(!f?.url)throw new s.A("related-service-not-found","Could not find feature service through portal item relationship");o.featureServiceItem=f;const m=await d(f.url,o);return m.portalItem=f,m}async function y(e){if(e.rootDocument)return e.rootDocument;const a={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const t=await(0,n.default)(e.sceneServerUrl,a);e.rootDocument=t.data}catch{e.rootDocument={}}return e.rootDocument}async function d(e,a){const t=(0,c.qg)(e);if(!t)throw new s.A("invalid-feature-service-url","Invalid feature service url");const r=t.url.path,i=a.layerId;if(null==i)return{serverUrl:r};const l=y(a),u=a.featureServiceItem?await a.featureServiceItem.fetchData("json"):null,o=(u?.layers?.[0]||u?.tables?.[0])?.customParameters,d=e=>{const t={query:{f:"json",...o},responseType:"json",authMode:e,signal:a.signal};return(0,n.default)(r,t)},f=d("anonymous").catch((()=>d("no-prompt"))),[m,w]=await Promise.all([f,l]),h=w?.layers,p=m.data&&m.data.layers;if(!Array.isArray(p))throw new Error("expected layers array");if(Array.isArray(h)){for(let n=0;n<Math.min(h.length,p.length);n++)if(h[n].id===i)return{serverUrl:r,layerId:p[n].id}}else if(null!=i&&i<p.length)return{serverUrl:r,layerId:p[i].id};throw new Error("could not find matching associated sublayer")}},11668:(e,a,t)=>{t.d(a,{K:()=>d,Q:()=>s});var r=t(67061);const n=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function s(e,a){const{loadContext:t,...n}=a||{},s=t?await t.fetchServiceMetadata(e,n):await(0,r.V)(e,n);y(s),l(s);const i={serviceJSON:s};if((s.currentVersion??0)<10.5)return i;const c=`${e}/layers`,u=t?await t.fetchServiceMetadata(c,n):await(0,r.V)(c,n);return y(u),l(u),i.layersJSON={layers:u.layers,tables:u.tables},i}function i(e){const{type:a}=e;return!!a&&n.has(a)}function c(e){return"Table"===e.type}function l(e){e.layers=e.layers?.filter(i),e.tables=e.tables?.filter(c)}function u(e){e.type||="Feature Layer"}function o(e){e.type||="Table"}function y(e){e.layers?.forEach(u),e.tables?.forEach(o)}function d(e){switch(e){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}},62487:(e,a,t)=>{t.d(a,{S:()=>r});const r={BingMapsLayer:async()=>(await t.e(13993).then(t.bind(t,13993))).default,BuildingSceneLayer:async()=>(await Promise.all([t.e(21729),t.e(19592),t.e(90260),t.e(52427),t.e(14335)]).then(t.bind(t,30188))).default,CSVLayer:async()=>(await t.e(1365).then(t.bind(t,1365))).default,CatalogLayer:async()=>(await Promise.all([t.e(72003),t.e(89078),t.e(84397)]).then(t.bind(t,84397))).default,DimensionLayer:async()=>(await t.e(72798).then(t.bind(t,72798))).default,ElevationLayer:async()=>(await t.e(43875).then(t.bind(t,43875))).default,FeatureLayer:async()=>(await Promise.resolve().then(t.bind(t,38451))).default,GeoJSONLayer:async()=>(await t.e(50709).then(t.bind(t,50709))).default,GeoRSSLayer:async()=>(await t.e(52551).then(t.bind(t,52551))).default,GroupLayer:async()=>(await t.e(16095).then(t.bind(t,16095))).default,ImageryLayer:async()=>(await Promise.all([t.e(93092),t.e(76964),t.e(10903),t.e(59051)]).then(t.bind(t,59051))).default,ImageryTileLayer:async()=>(await Promise.all([t.e(93092),t.e(59844),t.e(76964),t.e(80232),t.e(30372),t.e(10903),t.e(48678)]).then(t.bind(t,48678))).default,IntegratedMesh3DTilesLayer:async()=>(await t.e(76790).then(t.bind(t,76790))).default,IntegratedMeshLayer:async()=>(await Promise.all([t.e(90260),t.e(3196)]).then(t.bind(t,3196))).default,KMLLayer:async()=>(await t.e(41324).then(t.bind(t,41324))).default,KnowledgeGraphLayer:async()=>(await Promise.all([t.e(3620),t.e(72003),t.e(98683),t.e(55301),t.e(32247),t.e(88739),t.e(53379),t.e(26570)]).then(t.bind(t,26570))).default,LineOfSightLayer:async()=>(await Promise.all([t.e(21729),t.e(58716),t.e(24928)]).then(t.bind(t,24928))).default,LinkChartLayer:async()=>(await Promise.all([t.e(3620),t.e(72003),t.e(98683),t.e(55301),t.e(32247),t.e(88739),t.e(53379),t.e(17079)]).then(t.bind(t,17079))).default,MapImageLayer:async()=>(await Promise.all([t.e(55721),t.e(82951)]).then(t.bind(t,82951))).default,MapNotesLayer:async()=>(await t.e(43311).then(t.bind(t,43311))).default,MediaLayer:async()=>(await t.e(39522).then(t.bind(t,39522))).default,OGCFeatureLayer:async()=>(await Promise.all([t.e(26799),t.e(25526)]).then(t.bind(t,1741))).default,OpenStreetMapLayer:async()=>(await t.e(50803).then(t.bind(t,50803))).default,OrientedImageryLayer:async()=>(await t.e(3832).then(t.bind(t,3832))).default,PointCloudLayer:async()=>(await Promise.all([t.e(90260),t.e(11830)]).then(t.bind(t,11830))).default,RouteLayer:async()=>(await Promise.all([t.e(21297),t.e(57910)]).then(t.bind(t,57910))).default,SceneLayer:async()=>(await Promise.all([t.e(88105),t.e(21729),t.e(19592),t.e(90260),t.e(39174),t.e(36293),t.e(52427),t.e(48320)]).then(t.bind(t,48320))).default,StreamLayer:async()=>(await t.e(84369).then(t.bind(t,84369))).default,SubtypeGroupLayer:async()=>(await t.e(86061).then(t.bind(t,86061))).default,TileLayer:async()=>(await Promise.all([t.e(55721),t.e(71174)]).then(t.bind(t,71174))).default,UnknownLayer:async()=>(await t.e(8896).then(t.bind(t,8896))).default,UnsupportedLayer:async()=>(await t.e(72043).then(t.bind(t,72043))).default,VectorTileLayer:async()=>(await Promise.all([t.e(45995),t.e(9477)]).then(t.bind(t,53451))).default,VideoLayer:async()=>(await t.e(79029).then(t.bind(t,79029))).default,ViewshedLayer:async()=>(await Promise.all([t.e(21729),t.e(58716),t.e(78532)]).then(t.bind(t,78532))).default,VoxelLayer:async()=>(await Promise.all([t.e(90260),t.e(88560)]).then(t.bind(t,88560))).default,WFSLayer:async()=>(await Promise.all([t.e(11316),t.e(26964)]).then(t.bind(t,4583))).default,WMSLayer:async()=>(await t.e(52015).then(t.bind(t,52015))).default,WMTSLayer:async()=>(await t.e(1845).then(t.bind(t,1845))).default,WebTileLayer:async()=>(await t.e(24552).then(t.bind(t,24552))).default}},64130:(e,a,t)=>{t.d(a,{Ju:()=>u,K8:()=>d,XH:()=>o,_r:()=>s,bO:()=>i,iK:()=>y,nu:()=>f,pJ:()=>c,rc:()=>l});var r=t(39323),n=t(11668);function s(e){const a={id:e.id,name:e.name},t=(0,n.K)(e.type);return"FeatureLayer"!==t&&(a.layerType=t),a}async function i(e,a,t){if(null==e?.layers||null==e?.tables){const r=await t.fetchServiceMetadata(a,{customParameters:c(e)?.customParameters});(e=e||{}).layers=e.layers||r?.layers?.map(s),e.tables=e.tables||r?.tables?.map(s)}return e}function c(e){if(!e)return null;const{layers:a,tables:t}=e;return a?.length?a[0]:t?.length?t[0]:null}function l(e,a){return null==a?null:[...e.layers||[],...e.tables||[]].find((e=>e.id===a))}function u(e,a){return[...e.layers||[],...e.tables||[]].filter((e=>{let{layerType:t}=e;return t?t===a:"ArcGISFeatureLayer"===a}))}function o(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function y(e){switch(e){case"catalog":return"CatalogLayer";case"feature":return"ArcGISFeatureLayer";case"oriented-imagery":return"OrientedImageryLayer";case"subtype-group":return"SubtypeGroupLayer"}return null}function d(e){switch(e){case"CatalogLayer":return"CatalogLayer";case"OrientedImageryLayer":return"OrientedImageryLayer";case"SubtypeGroupLayer":return"SubtypeGroupLayer"}return"FeatureLayer"}async function f(e,a,t){if(!e?.url)return a??{};if(a??={},!a.layers){const r=await t.fetchServiceMetadata(e.url);a.layers=r.layers?.map(s)}const{serverUrl:n,portalItem:i}=await(0,r.L)(e.url,{sceneLayerItem:e,customParameters:c(a)?.customParameters}).catch((()=>({serverUrl:null,portalItem:null})));if(null==n)return a.tables=[],a;if(!a.tables&&i){const e=await i.fetchData().catch((()=>null));if(e?.tables)a.tables=e.tables.map(s);else{const r=await t.fetchServiceMetadata(n,{customParameters:c(e)?.customParameters}).catch((()=>null));a.tables=r?.tables?.map(s)}}if(a.tables)for(const r of a.tables)r.url=`${n}/${r.id}`;return a}},2487:(e,a,t)=>{t.d(a,{fromItem:()=>d,n:()=>f});var r=t(50076),n=t(39323),s=t(11668),i=t(77491),c=t(31933),l=t(62487),u=t(70652),o=t(64130),y=t(72945);async function d(e){let{portalItem:a}=e;!a||a instanceof u.default||(a=new u.default(a));const t=await async function(e){await e.load();const a=new i.v;return async function(e){const a=e.className,t=l.S[a];return{constructor:await t(),properties:e.properties}}(await f(e,a))}(a);return new(0,t.constructor)({portalItem:a,...t.properties})}async function f(e,a){switch(e.type){case"3DTiles Service":return{className:"IntegratedMesh3DTilesLayer"};case"CSV":return{className:"CSVLayer"};case"Feature Collection":return async function(e){await e.load();const a=(0,y.Y)(e,"Map Notes"),t=(0,y.Y)(e,"Markup");if(a||t)return{className:"MapNotesLayer"};if((0,y.Y)(e,"Route Layer"))return{className:"RouteLayer"};const r=await e.fetchData();return 1===(0,o.XH)(r)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Feature Service":return async function(e,a){const t=await m(e,a);if("object"==typeof t){const{sourceJSON:e,className:a}=t,r={sourceJSON:e};return null!=t.id&&(r.layerId=t.id),{className:a||"FeatureLayer",properties:r}}return{className:"GroupLayer"}}(e,a);case"Feed":case"Stream Service":return{className:"StreamLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"Group Layer":return{className:"GroupLayer"};case"Image Service":return async function(e,a){await e.load();const t=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(t.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(t.includes("tiled imagery"))return{className:"ImageryTileLayer"};const r=await a.fetchItemData(e),n=r?.layerType;if("ArcGISTiledImageServiceLayer"===n)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===n)return{className:"ImageryLayer"};const s=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)}),i=s.cacheType?.toLowerCase(),c=s.capabilities?.toLowerCase().includes("tilesonly"),l=s.tileInfo?.format?.toLowerCase()??"",u=null==i&&["jpg","jpeg","png","png8","png24","png32","mixed"].includes(l);return"map"===i||u||c?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e,a);case"KML":return{className:"KMLLayer"};case"Knowledge Graph Layer":return{className:"KnowledgeGraphLayer"};case"Map Service":return async function(e,a){return await async function(e,a){const{tileInfo:t}=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)});return t}(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}(e,a);case"Media Layer":return{className:"MediaLayer"};case"Scene Service":return async function(e,a){const t=await m(e,a,(async()=>{try{if(!e.url)return[];const{serverUrl:t}=await(0,n.L)(e.url,{sceneLayerItem:e}),r=await a.fetchServiceMetadata(t);return r?.tables??[]}catch{return[]}}));if("object"==typeof t){const r={};let n;if(null!=t.id?(r.layerId=t.id,n=`${e.url}/layers/${t.id}`):n=e.url,e.typeKeywords?.length)for(const a of Object.keys(c.XX))if(e.typeKeywords.includes(a))return{className:c.XX[a]};const s=await a.fetchServiceMetadata(n,{customParameters:await a.fetchCustomParameters(e,(e=>(0,o.pJ)(e)?.customParameters))});return{className:c.XX[s?.layerType]||"SceneLayer",properties:r}}if(!1===t){const t=await a.fetchServiceMetadata(e.url);if("Voxel"===t?.layerType)return{className:"VoxelLayer"}}return{className:"GroupLayer"}}(e,a);case"Vector Tile Service":return{className:"VectorTileLayer"};case"WFS":return{className:"WFSLayer"};case"WMS":return{className:"WMSLayer"};case"WMTS":return{className:"WMTSLayer"};default:throw new r.A("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function m(e,a,t){const{url:r,type:n}=e,i="Feature Service"===n;if(!r)return{};if(/\/\d+$/.test(r)){if(i){const t=await a.fetchServiceMetadata(r,{customParameters:await a.fetchCustomParameters(e,(e=>(0,o.pJ)(e)?.customParameters))});return{id:t.id,className:(0,s.K)(t.type),sourceJSON:t}}return{}}await e.load();let c=await a.fetchItemData(e);if(i){const e=await(0,o.bO)(c,r,a),t=w(e);if("object"==typeof t){const a=(0,o.rc)(e,t.id);t.className=(0,o.K8)(a?.layerType)}return t}if("Scene Service"===n&&(c=await(0,o.nu)(e,c,a)),(0,o.XH)(c)>0)return w(c);const l=await a.fetchServiceMetadata(r);return t&&(l.tables=await t()),w(l)}function w(e){return 1===(0,o.XH)(e)&&{id:(0,o.pJ)(e)?.id}}},67061:(e,a,t)=>{t.d(a,{V:()=>n});var r=t(3825);async function n(e,a){const{data:t}=await(0,r.default)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}});return t}}}]);
//# sourceMappingURL=2487.621c08fa.chunk.js.map