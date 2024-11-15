"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[29184],{51344:(e,t,s)=>{function n(e){return null!=u(e)||null!=o(e)}function r(e){return a.test(e)}function i(e){return u(e)??o(e)}function o(e){const t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;let s=!0;if(p&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,n=0;for(;!t&&n<=e.length;)t=!l.test(e[n]),n++;s=!t}}return s}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function u(e){const t=a.exec(e);if(!t?.groups)return null;const s=t.groups,n=+s.year,r=+s.month-1,i=+s.day,o=+(s.hours??"0"),u=+(s.minutes??"0"),l=+(s.seconds??"0");if(o>23)return null;if(u>59)return null;if(l>59)return null;const p=s.ms??"0",c=p?+p.padEnd(3,"0").slice(0,3):0;let d;if(s.isUTC||!s.offsetSign)d=Date.UTC(n,r,i,o,u,l,c);else{const e=+s.offsetHours,t=+s.offsetMinutes;d=6e4*("+"===s.offsetSign?-1:1)*(60*e+t)+Date.UTC(n,r,i,o,u,l,c)}return Number.isNaN(d)?null:d}s.d(t,{Br:()=>r,Cq:()=>n,_U:()=>i});const a=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;const l=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,p=!Number.isNaN(new Date("technology 10").getTime())},29184:(e,t,s)=>{s.r(t),s.d(t,{default:()=>T});var n=s(3825),r=s(98773),i=s(50076),o=s(76460),u=s(50346),a=s(19902),l=s(80963),p=s(98618),c=s(72547),d=s(24586),y=s(55301),f=s(10907),h=s(40296),g=s(40098),m=s(1900),F=s(6127),b=s(53430),_=s(67478);const I={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsQueryWithCacheHint:!0,supportsQueryWithDistance:!0,supportsQueryWithResultType:!0,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class T{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){this._queryEngine?.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._loadOptions={url:e.url,customParameters:e.customParameters};const s=[],[n]=await Promise.all([e.url?this._fetch(t?.signal):null,this._checkProjection(e.spatialReference)]),r=(0,f.BM)(n,{geometryType:e.geometryType}),o=e.fields||r.fields||[],u=null!=e.hasZ?e.hasZ:r.hasZ,a=r.geometryType;let p=e.objectIdField||r.objectIdFieldName||"__OBJECTID";const d=e.spatialReference||l.KK;let g=e.timeInfo;o===r.fields&&r.unknownFields.length>0&&s.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:r.unknownFields}});const T=new m.A(o);let w=T.get(p);w?("esriFieldTypeString"!==w.type&&(w.type="esriFieldTypeOID"),w.editable=!1,w.nullable=!1,p=w.name):(w={alias:p,name:p,type:"string"===r.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},o.unshift(w));const E={};for(const l of o){if(null==l.name&&(l.name=l.alias),null==l.alias&&(l.alias=l.name),!l.name)throw new i.A("geojson-layer:invalid-field-name","field name is missing",{field:l});if(!F.m.jsonValues.includes(l.type))throw new i.A("geojson-layer:invalid-field-type",`invalid type for field "${l.name}"`,{field:l});if(l.name!==w.name){const e=(0,b.getFieldDefaultValue)(l);void 0!==e&&(E[l.name]=e)}null==l.length&&(l.length=(0,b.getFieldDefaultLength)(l))}if(g){if(g.startTimeField){const e=T.get(g.startTimeField);e?(g.startTimeField=e.name,e.type="esriFieldTypeDate"):g.startTimeField=null}if(g.endTimeField){const e=T.get(g.endTimeField);e?(g.endTimeField=e.name,e.type="esriFieldTypeDate"):g.endTimeField=null}if(g.trackIdField){const e=T.get(g.trackIdField);e?g.trackIdField=e.name:(g.trackIdField=null,s.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:g}}))}g.startTimeField||g.endTimeField||(s.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:g}}),g=null)}const S=a?(0,h.F0)(a):void 0,x=T.dateFields.length?{timeZoneIANA:_.n$}:null,C={warnings:s,featureErrors:[],layerDefinition:{...I,drawingInfo:S??void 0,templates:(0,h.e2)(E),extent:void 0,geometryType:a,objectIdField:p,fields:o,hasZ:!!u,timeInfo:g,dateFieldsTimeReference:x}};this._queryEngine=new y.d({fieldsIndex:m.A.fromLayerJSON({fields:o,timeInfo:g,dateFieldsTimeReference:x}),geometryType:a,hasM:!1,hasZ:u,objectIdField:p,spatialReference:d,timeInfo:g,featureStore:new c.A({geometryType:a,hasM:!1,hasZ:u})});const A=this._queryEngine.fieldsIndex.requiredFields.indexOf(w);A>-1&&this._queryEngine.fieldsIndex.requiredFields.splice(A,1),this._createDefaultAttributes=(0,h.Vx)(E,p);const j=await this._createFeatures(n);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,j);const q=this._normalizeFeatures(j,C.featureErrors);this._queryEngine.featureStore.addMany(q);const{fullExtent:v,timeExtent:R}=await this._queryEngine.fetchRecomputedExtents();if(C.layerDefinition.extent=v,R){const{start:e,end:t}=R;C.layerDefinition.timeInfo.timeExtent=[e,t]}return C}async applyEdits(e){const{spatialReference:t,geometryType:s}=this._queryEngine;return await Promise.all([(0,g.$1)(t,s),(0,d.Nk)(e.adds,t),(0,d.Nk)(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){this._loadOptions.customParameters=e,this._snapshotTask?.abort(),this._snapshotTask=(0,r.UT)(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,e);const t=this._normalizeFeatures(e);t&&this._queryEngine.featureStore.addMany(t)}),(e=>{this._queryEngine.featureStore.clear(),(0,u.isAbortError)(e)||o.A.getLogger("esri.layers.GeoJSONLayer").error(new i.A("geojson-layer:refresh","An error occurred during refresh",{error:e}))})),await this._waitSnapshotComplete();const{fullExtent:t,timeExtent:s}=await this._queryEngine.fetchRecomputedExtents();return{extent:t,timeExtent:s}}async _createFeatures(e){if(null==e)return[];const{geometryType:t,hasZ:s,objectIdField:n}=this._queryEngine,r=(0,f.bd)(e,{geometryType:t,hasZ:s,objectIdField:n});if(!(0,l.aI)(this._queryEngine.spatialReference,l.KK))for(const i of r)null!=i.geometry&&(i.geometry=(0,p.Ux)((0,d.Cv)((0,p.zv)(i.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),l.KK,this._queryEngine.spatialReference)));return r}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:s}=this._loadOptions,r=(await(0,n.default)(t??"",{responseType:"json",query:{...s},signal:e})).data;return(0,f.sO)(r),r}_normalizeFeatures(e,t){const{objectIdField:s,fieldsIndex:n}=this._queryEngine,r=[];for(const i of e){const e=this._createDefaultAttributes(),o=(0,g.MB)(n,e,i.attributes,!0);o?t?.push(o):(this._assignObjectId(e,i.attributes,!0),i.attributes=e,i.objectId=e[s],r.push(i))}return r}async _applyEdits(e){const{adds:t,updates:s,deletes:n}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t?.length&&this._applyAddEdits(r,t),s?.length&&this._applyUpdateEdits(r,s),n?.length){for(const e of n)r.deleteResults.push((0,g.bP)(e));this._queryEngine.featureStore.removeManyById(n)}const{fullExtent:i,timeExtent:o}=await this._queryEngine.fetchRecomputedExtents();return{extent:i,timeExtent:o,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:n,hasM:r,hasZ:i,objectIdField:o,spatialReference:u,featureStore:l,fieldsIndex:c}=this._queryEngine,y=[];for(const p of t){if(p.geometry&&n!==(0,a.getJsonType)(p.geometry)){s.push((0,g.Yx)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),r=(0,g.MB)(c,t,p.attributes);if(r)s.push(r);else{if(this._assignObjectId(t,p.attributes),p.attributes=t,null!=p.uid){const t=p.attributes[o];e.uidToObjectId[p.uid]=t}if(null!=p.geometry){const e=p.geometry.spatialReference??u;p.geometry=(0,d.Cv)((0,g.CR)(p.geometry,e),e,u)}y.push(p),s.push((0,g.bP)(p.attributes[o]))}}l.addMany((0,p.Di)([],y,n,i,r,o))}_applyUpdateEdits(e,t){let{updateResults:s}=e;const{geometryType:n,hasM:r,hasZ:i,objectIdField:o,spatialReference:u,featureStore:l,fieldsIndex:c}=this._queryEngine;for(const y of t){const{attributes:e,geometry:t}=y,f=e?.[o];if(null==f){s.push((0,g.Yx)(`Identifier field ${o} missing`));continue}if(!l.has(f)){s.push((0,g.Yx)(`Feature with object id ${f} missing`));continue}const h=(0,p.oN)(l.getFeature(f),n,i,r);if(null!=t){if(n!==(0,a.getJsonType)(t)){s.push((0,g.Yx)("Incorrect geometry type."));continue}const e=t.spatialReference??u;h.geometry=(0,d.Cv)((0,g.CR)(t,e),e,u)}if(e){const t=(0,g.MB)(c,h.attributes,e);if(t){s.push(t);continue}}l.add((0,p.E2)(h,n,i,r,o)),s.push((0,g.bP)(f))}}_createObjectIdGenerator(e,t){const s=e.fieldsIndex.get(e.objectIdField);if("esriFieldTypeString"===s.type)return()=>s.name+"-"+Date.now().toString(16);let n=Number.NEGATIVE_INFINITY;for(const r of t)r.objectId&&(n=Math.max(n,r.objectId));return n=Math.max(0,n)+1,()=>n++}_assignObjectId(e,t){let s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const n=this._queryEngine.objectIdField;e[n]=s&&n in t?t[n]:this._objectIdGenerator()}async _checkProjection(e){try{await(0,d.Nk)(l.KK,e)}catch{throw new i.A("geojson-layer","Projection not supported")}}}},10907:(e,t,s)=>{s.d(t,{BM:()=>E,bd:()=>S,sO:()=>w,xD:()=>p});var n=s(51344),r=s(50076),i=s(80963),o=s(20176),u=s(1484),a=s(53430);const l={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function p(e){return l[e]}function*c(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*d(e){if(e)switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function y(e){for(const t of e)if(t.length>2)return!0;return!1}function f(e){let t=0;for(let s=0;s<e.length;s++){const n=e[s],r=e[(s+1)%e.length];t+=n[0]*r[1]-r[0]*n[1]}return t<=0}function h(e){const t=e[0],s=e[e.length-1];return t[0]===s[0]&&t[1]===s[1]&&t[2]===s[2]||e.push(t),e}function g(e,t,s){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,s){return b(e,t.coordinates,s),e}(e,t,s);case"MultiLineString":return function(e,t,s){for(const n of t.coordinates)b(e,n,s);return e}(e,t,s);case"MultiPolygon":return function(e,t,s){for(const n of t.coordinates){m(e,n[0],s);for(let t=1;t<n.length;t++)F(e,n[t],s)}return e}(e,t,s);case"Point":return function(e,t,s){return I(e,t.coordinates,s),e}(e,t,s);case"Polygon":return function(e,t,s){const n=t.coordinates;m(e,n[0],s);for(let r=1;r<n.length;r++)F(e,n[r],s);return e}(e,t,s)}}function m(e,t,s){const n=h(t);!function(e){return!f(e)}(n)?b(e,n,s):_(e,n,s)}function F(e,t,s){const n=h(t);!function(e){return f(e)}(n)?b(e,n,s):_(e,n,s)}function b(e,t,s){for(const n of t)I(e,n,s);e.lengths.push(t.length)}function _(e,t,s){for(let n=t.length-1;n>=0;n--)I(e,t[n],s);e.lengths.push(t.length)}function I(e,t,s){const[n,r,i]=t;e.coords.push(n,r),s.hasZ&&e.coords.push(i||0)}function T(e){switch(typeof e){case"string":return(0,n.Br)(e)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function w(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4326;if(!e)throw new r.A("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new r.A("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:s}=e;if(!s)return;const n="string"==typeof s?s:"name"===s.type?s.properties.name:"EPSG"===s.type?s.properties.code:null,o=(0,i.oT)({wkid:t})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(`.*(${t})$`,"i");if(!n||!o.test(n))throw new r.A("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:s})}function E(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const s=[],n=new Set,r=new Set;let i,o=!1,u=null,l=!1,{geometryType:f=null}=t;for(const g of c(e)){const{geometry:e,properties:t,id:c}=g;if((!e||(f||(f=p(e.type)),p(e.type)===f))&&(o||(o=y(d(e))),l||(l=null!=c,l&&(i=typeof c,t&&(u=Object.keys(t).filter((e=>t[e]===c))))),t&&u&&l&&null!=c&&(u.length>1?u=u.filter((e=>t[e]===c)):1===u.length&&(u=t[u[0]]===c?u:[])),t))for(const i in t){if(n.has(i))continue;const e=T(t[i]);if("unknown"===e){r.add(i);continue}r.delete(i),n.add(i);const o=(0,a.normalizeFieldName)(i);o&&s.push({name:o,alias:i,type:e})}}const h=(0,a.normalizeFieldName)(1===u?.length&&u[0]||null)??void 0;if(h)for(const p of s)if(p.name===h&&(0,a.isNumericField)(p)){p.type="esriFieldTypeOID";break}return{fields:s,geometryType:f,hasZ:o,objectIdFieldName:h,objectIdFieldType:i,unknownFields:Array.from(r)}}function S(e,t){return Array.from(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function*(){const{geometryType:s,objectIdField:n}=t;for(const r of e){const{geometry:e,properties:i,id:a}=r;if(e&&p(e.type)!==s)continue;const l=i||{};let c;n&&(c=l[n],null==a||c||(l[n]=c=a));const d=new o.Om(e?g(new u.A,e,t):null,l,null,c??void 0);yield d}}()}(c(e),t))}},40296:(e,t,s)=>{s.d(t,{F0:()=>a,Vx:()=>c,e2:()=>y,f:()=>f});var n=s(81806),r=s(53084),i=s(8298),o=s(16981),u=s(44460);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?u.Cb:"esriGeometryPolyline"===e?u.yM:u.WR}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let p=1;function c(e,t){if((0,n.A)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let s=`this${d(t)} = null;`;for(const t in e)s+=`this${d(t)} = ${JSON.stringify(e[t])};`;const n=new Function(`\n      return class AttributesClass$${p++} {\n        constructor() {\n          ${s};\n        }\n      }\n    `)();return()=>new n}catch(s){return()=>({[t]:null,...e})}}function d(e){return l.test(e)?`.${e}`:`["${e}"]`}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,r.o8)(e)}}]}function f(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryBins:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:i.F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:o.$,editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}},40098:(e,t,s)=>{s.d(t,{$1:()=>g,CR:()=>h,MB:()=>d,Yx:()=>a,bP:()=>p});var n=s(51344),r=s(80963),i=s(53430);class o{constructor(){this.code=null,this.description=null}}class u{constructor(e){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function a(e){return new u(e)}class l{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function p(e){return new l(e)}const c=new Set;function d(e,t,s){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];c.clear();for(const r in s){const o=e.get(r);if(!o)continue;const u=y(o,s[r]);if(c.add(o.name),o&&(n||o.editable)){const e=(0,i.validateFieldValue)(o,u);if(e)return a((0,i.validationErrorToString)(e,o,u));t[o.name]=u}}for(const r of e.requiredFields??[])if(!c.has(r.name))return a(`missing required field "${r.name}"`);return null}function y(e,t){let s=t;return(0,i.isNumericField)(e)&&"string"==typeof t?s=parseFloat(t):(0,i.isStringField)(e)&&null!=t&&"string"!=typeof t?s=String(t):(0,i.isDateField)(e)&&"string"==typeof t&&(s=(0,n._U)(t)),(0,i.sanitizeNullFieldValue)(s)}let f;function h(e,t){if(!e||!(0,r.fn)(t))return e;if("rings"in e||"paths"in e){if(null==f)throw new TypeError("geometry engine not loaded");return f.simplify(t,e)}return e}async function g(e,t){!(0,r.fn)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return null==f&&(f=await Promise.all([s.e(52612),s.e(67983)]).then(s.bind(s,1669))),f}()}},16981:(e,t,s)=>{s.d(t,{$:()=>n,P:()=>r});const n={supportsDate:!1,supportsFixedInterval:!1,supportsAutoInterval:!1,supportsFixedBoundaries:!1,supportedStatistics:void 0},r={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsAsyncApplyEdits:!1,zDefault:void 0},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryBins:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:n,query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}}}]);
//# sourceMappingURL=29184.eb1a9c65.chunk.js.map