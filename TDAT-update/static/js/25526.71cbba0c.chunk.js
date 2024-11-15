"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[25526],{1741:(e,t,r)=>{r.r(t),r.d(t,{default:()=>J});var s=r(35143),o=(r(35238),r(16868)),i=(r(63844),r(14873),r(47662),r(72690),r(17122),r(71832),r(5766),r(35039),r(86616),r(31382)),p=r(77717),n=r(46053),a=(r(81806),r(76460),r(47249),r(85842)),u=r(31608),l=r(25515),d=r(50076),c=r(49304),y=r(88685),h=r(26799),f=r(16981),g=r(77725),m=r(13312);let v=class extends c.A{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:r,supportedCrs:s},layer:{apiKey:o,customParameters:i,effectiveMaxRecordCount:p}}=this;return{type:"ogc-source",collection:e,layerDefinition:t,maxRecordCount:p,queryParameters:{apiKey:o,customParameters:i},spatialReference:r,supportedCrs:s}}queryExtent(e){return null}queryFeatureCount(e){return null}queryFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.queryFeaturesJSON(e,t).then((e=>g.default.fromJSON(e)))}queryFeaturesJSON(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=this.getSource();return this.load(t).then((()=>(0,h.bW)(r,e,t)))}queryObjectIds(e){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){const r=new RegExp(`^${(0,y.Cj)(t)}$`,"i");return e.conformsTo.some((e=>r.test(e)))??!1}_getCapabilities(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryBins:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},query:{maxRecordCount:t,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:f.$,editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}_getMaxRecordCount(e){const t=e?.components?.parameters;return t?.limit?.schema?.maximum??t?.limitFeatures?.schema?.maximum}_getStorageSpatialReference(e){const t=e.storageCrs??h.QE,r=(0,h.J0)(t);return null==r?m.A.WGS84:new m.A({wkid:r})}_getSupportedSpatialReferences(e,t){const r="#/crs",s=e.crs??[h.QE],o=s.includes(r)?s.filter((e=>e!==r)).concat(t.crs??[]):s,i=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return o.filter((e=>!i.test(e)))}async _loadOGCServices(e,t){const r=null!=t?t.signal:null,{apiKey:s,collectionId:o,customParameters:i,fields:p,geometryType:n,hasZ:a,objectIdField:l,timeInfo:c,url:f}=e,g={fields:p?.map((e=>e.toJSON())),geometryType:u.Y.toJSON(n),hasZ:a??!1,objectIdField:l,timeInfo:c?.toJSON()},m={apiKey:s,customParameters:i,signal:r},v=await(0,h.Ki)(f,m),[S,_]=await Promise.all([(0,h.Px)(v,m),(0,h.bV)(v,m)]);if(!this._conformsToType(S,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new d.A("ogc-feature-layer:no-geojson-support","Server does not support geojson");const C=_.collections.find((e=>{let{id:t}=e;return t===o}));if(!C)throw new d.A("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const M=this._conformsToType(S,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await(0,h.GA)(v,m):null,x=await(0,h.GL)(C,g,m),R=this._getMaxRecordCount(M),F=this._getCapabilities(x.hasZ,R),w=this._getStorageSpatialReference(C).toJSON(),Z=this._getSupportedSpatialReferences(C,_),b=new RegExp(`^${(0,y.Cj)(h.vJ)}`,"i"),I={};for(const u of Z){const e=(0,h.J0)(u);null!=e&&(I[e]||(I[e]=u.replace(b,"")))}this.featureDefinition={capabilities:F,collection:C,layerDefinition:x,spatialReference:w,supportedCrs:I}}};(0,s._)([(0,n.MZ)()],v.prototype,"featureDefinition",void 0),(0,s._)([(0,n.MZ)({constructOnly:!0})],v.prototype,"layer",void 0),(0,s._)([(0,n.MZ)()],v.prototype,"type",void 0),v=(0,s._)([(0,a.$)("esri.layers.graphics.sources.OGCFeatureSource")],v);var S=r(12406),_=r(65624),C=r(31362),M=r(74440),x=r(52908),R=r(11270),F=r(37534),w=r(94729),Z=r(21617),b=r(5682),I=r(78817),O=r(95363),D=r(91485),T=r(44135),A=r(76350),j=r(53430),P=r(71401),E=r(27937),Q=r(68295),q=r(30973),G=r(76797);const B=(0,A.p)();let H=class extends((0,S.p)((0,C.d)((0,x.J)((0,M.F)((0,_.dM)((0,F.f)((0,I.e)((0,b.j)((0,R.q)((0,w.A)((0,Z.J)((0,p.P)(l.A))))))))))))){constructor(e){super(e),this.capabilities=null,this.collectionId=null,this.copyright=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new v({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){this.source?.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then((()=>this._fetchService(e)))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){return this.maxRecordCount??this.capabilities?.query.maxRecordCount??5e3}get isTable(){return this.loaded&&null==this.geometryType}set renderer(e){(0,j.fixRendererFields)(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return(0,q.tn)(this,e)}createQuery(){return new Q.default}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){let r,s=!1;const o=t?.feature?.attributes,i=this.typeIdField&&o?.[this.typeIdField];return null!=i&&this.types&&(s=this.types.some((t=>t.id==i&&(r=t.domains?.[e],"inherited"===r?.type&&(r=this._getLayerDomain(e)),!0)))),s||r||(r=this._getLayerDomain(e)),r}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(Q.default.from(e)||this.createQuery(),t))).then((e=>(e?.features?.forEach((e=>{e.layer=e.sourceLayer=this})),e)))}serviceSupportsSpatialReference(e){return this.source?.serviceSupportsSpatialReference(e)??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),(0,j.fixRendererFields)(this.renderer,this.fieldsIndex),(0,j.fixTimeInfoFields)(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};(0,s._)([(0,n.MZ)({readOnly:!0,json:{origins:{service:{read:!0}}}})],H.prototype,"capabilities",void 0),(0,s._)([(0,n.MZ)({type:String,json:{write:!0}})],H.prototype,"collectionId",void 0),(0,s._)([(0,n.MZ)({type:String})],H.prototype,"copyright",void 0),(0,s._)([(0,n.MZ)({readOnly:!0})],H.prototype,"defaultPopupTemplate",null),(0,s._)([(0,n.MZ)({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],H.prototype,"description",void 0),(0,s._)([(0,n.MZ)({type:String})],H.prototype,"displayField",void 0),(0,s._)([(0,n.MZ)({type:Number})],H.prototype,"effectiveMaxRecordCount",null),(0,s._)([(0,n.MZ)(O.Yj)],H.prototype,"elevationInfo",void 0),(0,s._)([(0,n.MZ)({type:[T.default],json:{origins:{service:{name:"layerDefinition.fields"}}}})],H.prototype,"fields",void 0),(0,s._)([(0,n.MZ)(B.fieldsIndex)],H.prototype,"fieldsIndex",void 0),(0,s._)([(0,n.MZ)({readOnly:!0,type:G.A,json:{origins:{service:{name:"layerDefinition.extent"}}}})],H.prototype,"fullExtent",void 0),(0,s._)([(0,n.MZ)({type:u.g.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:u.g.read}}}}})],H.prototype,"geometryType",void 0),(0,s._)([(0,n.MZ)({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],H.prototype,"hasZ",void 0),(0,s._)([(0,n.MZ)({type:Boolean,readOnly:!0})],H.prototype,"isTable",null),(0,s._)([(0,n.MZ)({type:[P.A],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:E.w},write:!0}}}})],H.prototype,"labelingInfo",void 0),(0,s._)([(0,n.MZ)(O.kF)],H.prototype,"labelsVisible",void 0),(0,s._)([(0,n.MZ)(O.fV)],H.prototype,"legendEnabled",void 0),(0,s._)([(0,n.MZ)({type:Number})],H.prototype,"maxRecordCount",void 0),(0,s._)([(0,n.MZ)({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],H.prototype,"objectIdField",void 0),(0,s._)([(0,n.MZ)({type:["OGCFeatureLayer"]})],H.prototype,"operationalLayerType",void 0),(0,s._)([(0,n.MZ)(O.M6)],H.prototype,"popupEnabled",void 0),(0,s._)([(0,n.MZ)({type:o.A,json:{name:"popupInfo",write:!0}})],H.prototype,"popupTemplate",void 0),(0,s._)([(0,n.MZ)({types:i.H,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:i.X,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],H.prototype,"renderer",null),(0,s._)([(0,n.MZ)(O.PY)],H.prototype,"screenSizePerspectiveEnabled",void 0),(0,s._)([(0,n.MZ)({readOnly:!0})],H.prototype,"source",void 0),(0,s._)([(0,n.MZ)({readOnly:!0,type:m.A,json:{origins:{service:{read:!0}}}})],H.prototype,"spatialReference",void 0),(0,s._)([(0,n.MZ)({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],H.prototype,"title",void 0),(0,s._)([(0,n.MZ)({readOnly:!0,json:{read:!1}})],H.prototype,"type",void 0),(0,s._)([(0,n.MZ)({type:String,readOnly:!0})],H.prototype,"typeIdField",void 0),(0,s._)([(0,n.MZ)({type:[D.A]})],H.prototype,"types",void 0),(0,s._)([(0,n.MZ)(O.OZ)],H.prototype,"url",void 0),H=(0,s._)([(0,a.$)("esri.layers.OGCFeatureLayer")],H);const J=H},8298:(e,t,r)=>{r.d(t,{F:()=>s});const s={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!0,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!0,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByAnonymous:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}}}]);
//# sourceMappingURL=25526.71cbba0c.chunk.js.map