"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[35454],{51344:(e,t,s)=>{function r(e){return null!=u(e)||null!=o(e)}function n(e){return a.test(e)}function i(e){return u(e)??o(e)}function o(e){const t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;let s=!0;if(l&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,r=0;for(;!t&&r<=e.length;)t=!p.test(e[r]),r++;s=!t}}return s}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function u(e){const t=a.exec(e);if(!t?.groups)return null;const s=t.groups,r=+s.year,n=+s.month-1,i=+s.day,o=+(s.hours??"0"),u=+(s.minutes??"0"),p=+(s.seconds??"0");if(o>23)return null;if(u>59)return null;if(p>59)return null;const l=s.ms??"0",d=l?+l.padEnd(3,"0").slice(0,3):0;let c;if(s.isUTC||!s.offsetSign)c=Date.UTC(r,n,i,o,u,p,d);else{const e=+s.offsetHours,t=+s.offsetMinutes;c=6e4*("+"===s.offsetSign?-1:1)*(60*e+t)+Date.UTC(r,n,i,o,u,p,d)}return Number.isNaN(c)?null:c}s.d(t,{Br:()=>n,Cq:()=>r,_U:()=>i});const a=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;const p=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,l=!Number.isNaN(new Date("technology 10").getTime())},33754:(e,t,s)=>{s.d(t,{H:()=>n,L:()=>r});const r=1;function n(e,t){let s=0;for(const r of t){const t=r.attributes?.[e];"number"==typeof t&&isFinite(t)&&(s=Math.max(s,t))}return s}},35454:(e,t,s)=>{s.r(t),s.d(t,{default:()=>x});var r=s(50076),n=s(19902),i=s(80963),o=s(98618),u=s(33754),a=s(72547),p=s(24586),l=s(55301),d=s(40296),c=s(40098),y=s(1900),f=s(6127),m=s(53430),h=s(67478);const g=i.KK,F={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:i.KK},b={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!0,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0,supportsQueryWithCacheHint:!0}};function I(e){return(0,n.isPoint)(e)?null!=e.z:!!e.hasZ}function T(e){return(0,n.isPoint)(e)?null!=e.m:!!e.hasM}class x{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine?.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e){const t=[],{features:s}=e,n=this._inferLayerProperties(s,e.fields),i=e.fields||[],o=null!=e.hasM?e.hasM:!!n.hasM,c=null!=e.hasZ?e.hasZ:!!n.hasZ,I=!e.spatialReference&&!n.spatialReference,T=I?g:e.spatialReference||n.spatialReference,x=I?F:null,E=e.geometryType||n.geometryType,R=!E;let A=e.objectIdField||n.objectIdField,C=e.timeInfo;const S=new y.A(i);if(!R&&(I&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!E))throw new r.A("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!A)throw new r.A("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(n.objectIdField&&A!==n.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${A}" doesn't match the field name "${n.objectIdField}", found in the provided fields`}),A=n.objectIdField),A&&!n.objectIdField){const e=S.get(A);e?(A=e.name,e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):i.unshift({alias:A,name:A,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const u of i){if(null==u.name&&(u.name=u.alias),null==u.alias&&(u.alias=u.name),!u.name)throw new r.A("feature-layer:invalid-field-name","field name is missing",{field:u});if(u.name===A&&(u.type="esriFieldTypeOID"),!f.m.jsonValues.includes(u.type))throw new r.A("feature-layer:invalid-field-type",`invalid type for field "${u.name}"`,{field:u});null==u.length&&(u.length=(0,m.getFieldDefaultLength)(u))}const v={};for(const r of i)if("esriFieldTypeOID"!==r.type&&"esriFieldTypeGlobalID"!==r.type){const e=(0,m.getFieldDefaultValue)(r);void 0!==e&&(v[r.name]=e)}if(C){if(C.startTimeField){const e=S.get(C.startTimeField);e?(C.startTimeField=e.name,e.type="esriFieldTypeDate"):C.startTimeField=null}if(C.endTimeField){const e=S.get(C.endTimeField);e?(C.endTimeField=e.name,e.type="esriFieldTypeDate"):C.endTimeField=null}if(C.trackIdField){const e=S.get(C.trackIdField);e?C.trackIdField=e.name:(C.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:C}}))}C.startTimeField||C.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:C}}),C=null)}const _=S.dateFields.length?{timeZoneIANA:e.dateFieldsTimeZone??h.n$}:null;this._createDefaultAttributes=(0,d.Vx)(v,A);const D={warnings:t,featureErrors:[],layerDefinition:{...b,drawingInfo:(0,d.F0)(E),templates:(0,d.e2)(v),extent:x,geometryType:E,objectIdField:A,fields:i,hasZ:c,hasM:o,timeInfo:C,dateFieldsTimeReference:_},assignedObjectIds:{}};if(this._queryEngine=new l.d({fieldsIndex:y.A.fromLayerJSON({fields:i,timeInfo:C,dateFieldsTimeReference:_}),geometryType:E,hasM:o,hasZ:c,objectIdField:A,spatialReference:T,featureStore:new a.A({geometryType:E,hasM:o,hasZ:c}),timeInfo:C}),!s?.length)return this._nextObjectId=u.L,D;const q=(0,u.H)(A,s);return this._nextObjectId=q+1,await(0,p.Nk)(s,T),this._loadInitialFeatures(D,s)}async applyEdits(e){const{spatialReference:t,geometryType:s}=this._queryEngine;return await Promise.all([(0,c.$1)(t,s),(0,p.Nk)(e.adds,t),(0,p.Nk)(e.updates,t)]),this._applyEdits(e)}queryFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let s,r,i=null,o=null,u=null;for(const a of e){const e=a.geometry;if(null!=e&&(i||(i=(0,n.getJsonType)(e)),o||(o=e.spatialReference),null==s&&(s=I(e)),null==r&&(r=T(e)),i&&o&&null!=s&&null!=r))break}if(t&&t.length){let e=null;t.some((t=>{const s="esriFieldTypeOID"===t.type,r=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,s||r}))&&(u=e.name)}return{geometryType:i,spatialReference:o,objectIdField:u,hasM:r,hasZ:s}}async _loadInitialFeatures(e,t){const{geometryType:s,hasM:r,hasZ:i,objectIdField:u,spatialReference:a,featureStore:l,fieldsIndex:d}=this._queryEngine,y=[];for(const o of t){if(null!=o.uid&&(e.assignedObjectIds[o.uid]=-1),o.geometry&&s!==(0,n.getJsonType)(o.geometry)){e.featureErrors.push((0,c.Yx)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),r=(0,c.MB)(d,t,o.attributes,!0);r?e.featureErrors.push(r):(this._assignObjectId(t,o.attributes,!0),o.attributes=t,null!=o.uid&&(e.assignedObjectIds[o.uid]=o.attributes[u]),null!=o.geometry&&(o.geometry=(0,p.Cv)(o.geometry,o.geometry.spatialReference,a)),y.push(o))}l.addMany((0,o.Di)([],y,s,i,r,u));const{fullExtent:f,timeExtent:m}=await this._queryEngine.fetchRecomputedExtents();if(e.layerDefinition.extent=f,m){const{start:t,end:s}=m;e.layerDefinition.timeInfo.timeExtent=[t,s]}return e}async _applyEdits(e){const{adds:t,updates:s,deletes:r}=e,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t?.length&&this._applyAddEdits(n,t),s?.length&&this._applyUpdateEdits(n,s),r?.length){for(const e of r)n.deleteResults.push((0,c.bP)(e));this._queryEngine.featureStore.removeManyById(r)}const{fullExtent:i,timeExtent:o}=await this._queryEngine.fetchRecomputedExtents();return{extent:i,timeExtent:o,featureEditResults:n}}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:r,hasM:i,hasZ:u,objectIdField:a,spatialReference:l,featureStore:d,fieldsIndex:y}=this._queryEngine,f=[];for(const o of t){if(o.geometry&&r!==(0,n.getJsonType)(o.geometry)){s.push((0,c.Yx)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),i=(0,c.MB)(y,t,o.attributes);if(i)s.push(i);else{if(this._assignObjectId(t,o.attributes),o.attributes=t,null!=o.uid){const t=o.attributes[a];e.uidToObjectId[o.uid]=t}if(null!=o.geometry){const e=o.geometry.spatialReference??l;o.geometry=(0,p.Cv)((0,c.CR)(o.geometry,e),e,l)}f.push(o),s.push((0,c.bP)(o.attributes[a]))}}d.addMany((0,o.Di)([],f,r,u,i,a))}_applyUpdateEdits(e,t){let{updateResults:s}=e;const{geometryType:r,hasM:i,hasZ:u,objectIdField:a,spatialReference:l,featureStore:d,fieldsIndex:y}=this._queryEngine;for(const f of t){const{attributes:e,geometry:t}=f,m=e?.[a];if(null==m){s.push((0,c.Yx)(`Identifier field ${a} missing`));continue}if(!d.has(m)){s.push((0,c.Yx)(`Feature with object id ${m} missing`));continue}const h=(0,o.oN)(d.getFeature(m),r,u,i);if(null!=t){if(r!==(0,n.getJsonType)(t)){s.push((0,c.Yx)("Incorrect geometry type."));continue}const e=t.spatialReference??l;h.geometry=(0,p.Cv)((0,c.CR)(t,e),e,l)}if(e){const t=(0,c.MB)(y,h.attributes,e);if(t){s.push(t);continue}}d.add((0,o.E2)(h,r,u,i,a)),s.push((0,c.bP)(m))}}_assignObjectId(e,t){let s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const r=this._queryEngine.objectIdField;s&&t&&isFinite(t[r])?e[r]=t[r]:e[r]=this._nextObjectId++}}},40296:(e,t,s)=>{s.d(t,{F0:()=>a,Vx:()=>d,e2:()=>y,f:()=>f});var r=s(81806),n=s(53084),i=s(8298),o=s(16981),u=s(44460);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?u.Cb:"esriGeometryPolyline"===e?u.yM:u.WR}}}const p=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let l=1;function d(e,t){if((0,r.A)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let s=`this${c(t)} = null;`;for(const t in e)s+=`this${c(t)} = ${JSON.stringify(e[t])};`;const r=new Function(`\n      return class AttributesClass$${l++} {\n        constructor() {\n          ${s};\n        }\n      }\n    `)();return()=>new r}catch(s){return()=>({[t]:null,...e})}}function c(e){return p.test(e)?`.${e}`:`["${e}"]`}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,n.o8)(e)}}]}function f(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryBins:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:i.F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:o.$,editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}},40098:(e,t,s)=>{s.d(t,{$1:()=>h,CR:()=>m,MB:()=>c,Yx:()=>a,bP:()=>l});var r=s(51344),n=s(80963),i=s(53430);class o{constructor(){this.code=null,this.description=null}}class u{constructor(e){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function a(e){return new u(e)}class p{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function l(e){return new p(e)}const d=new Set;function c(e,t,s){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];d.clear();for(const n in s){const o=e.get(n);if(!o)continue;const u=y(o,s[n]);if(d.add(o.name),o&&(r||o.editable)){const e=(0,i.validateFieldValue)(o,u);if(e)return a((0,i.validationErrorToString)(e,o,u));t[o.name]=u}}for(const n of e.requiredFields??[])if(!d.has(n.name))return a(`missing required field "${n.name}"`);return null}function y(e,t){let s=t;return(0,i.isNumericField)(e)&&"string"==typeof t?s=parseFloat(t):(0,i.isStringField)(e)&&null!=t&&"string"!=typeof t?s=String(t):(0,i.isDateField)(e)&&"string"==typeof t&&(s=(0,r._U)(t)),(0,i.sanitizeNullFieldValue)(s)}let f;function m(e,t){if(!e||!(0,n.fn)(t))return e;if("rings"in e||"paths"in e){if(null==f)throw new TypeError("geometry engine not loaded");return f.simplify(t,e)}return e}async function h(e,t){!(0,n.fn)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return null==f&&(f=await Promise.all([s.e(52612),s.e(67983)]).then(s.bind(s,1669))),f}()}},16981:(e,t,s)=>{s.d(t,{$:()=>r,P:()=>n});const r={supportsDate:!1,supportsFixedInterval:!1,supportsAutoInterval:!1,supportsFixedBoundaries:!1,supportedStatistics:void 0},n={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsAsyncApplyEdits:!1,zDefault:void 0},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryBins:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:r,query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}}}]);
//# sourceMappingURL=35454.4f938d06.chunk.js.map